import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { UserServiceService } from './services/user-service.service';
import { User } from './modals/User';

// const users = [
//     { id: 1, name: 'Aharon', password: 'aaaa', email: 'aharon@work.com'},
//     { id: 2, name: 'Moshe', password: 'mmmm', email: 'moshe123@gmail.com'},
//     { id: 3, name: 'Dovid', password: 'dddd', email: 'd.levy@hotmail.com'}
// ];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    users:User[]=[];
    constructor(private userservice:UserServiceService){
        
    userservice.getUsers().subscribe((user:User[])=>this.users=user);
    // ;
    console.log(this.users,'userim');
    }
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;
        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize()) 
            .pipe(delay(500))
            .pipe(dematerialize());

        function handleRoute() {
            switch (true) {
                case url.endsWith('/token') && method === 'GET':
                    return authenticate();
                case url.endsWith('/users') && method === 'GET':
                    return getUsers();
                default:
                    return next.handle(request);
            }    
        }

        
        function decodeToken(token: string): string{
            return token.slice(231);
        }

        function encodeToken(userId: number): string {
            let concatToBegining = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1OTI2ODI3MDksImV4cCI6MTYyNDIxODcwOSwiYXVkIjoiIiwic3ViIjoiIn0.tuozOiPLZdYVwl2OSGmAzjP0p0cY6u4j36uUQNAtrYuGqXiIapZEhcaS6hqPMtFvv15EcsiAcOmDuuK58ucq2g';
            return concatToBegining + userId;
        }

        function authenticate() {
            const user =this.users.find(
                user => user.UserName === request.params.get('name') && user.Password === request.params.get('password')
            );
            if (!user) return error('Username or password is incorrect');

            return ok(encodeToken(user.id));
        }

        function getUsers() {
            if (!isLoggedIn()) return unauthorized();
            return ok(this.users);
        }

        // helper functions

        function ok(body?:any) {
            return of(new HttpResponse({ status: 200, body }));
        }

        function error(message:string) {
            return throwError({ error: { message } });
        }

        function unauthorized() {
            return throwError({ status: 401, error: { message: 'Unauthorized' } });
        }

        function isLoggedIn() {
            let token = headers.get('Authorization').replace('Basic ', '');
            let userId = decodeToken(token);
            return this. users.find(user => <string><unknown>user.id == userId);
        }
    }
}

export let fakeBackendProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};