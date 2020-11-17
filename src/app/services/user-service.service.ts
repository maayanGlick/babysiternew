import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../modals/User';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
 
// useraccordingtz:User;
  constructor(private http: HttpClient) { }
  getUsertz(tz:string) {
    return this.http.get(`${environment.apiUrl}/Get/${tz}`).pipe(
      catchError(this.handleError));
  }
  getUser(password:string,userName:string) {
    return this.http.get(`${environment.apiUrl}/Get/${password}/${userName}`).pipe(
      catchError(this.handleError));
  }

  getUsers() {
    return this.http.get<User[]>(`${environment.apiUrl}/Get/`).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }
  SaveUser(user: User) {
    return this.http.put(`${environment.apiUrl}/Put`, user);
  }
  updateUser(user: User) {
    return this.http.post(`${environment.apiUrl}/Post`, user);
  }
  userIsAvalable(password,userName)
  {
    if(
       this.http.get(`${environment.apiUrl}`)
       .subscribe((users: User) => users.Password==password && users.UserName==userName)
    )
    {
      console.log('avalable','true');
      return true;  
    }
    
    else
    return false;

  }
  getEmail(tz:string) {
    return this.http.get(`${environment.apiEmail}/Get/${tz}`);
  }
//   userAccordingTz(tz:string)
//   {
//   return  this.http.get(`${environment.apiUrl}/Get/${tz}`)
//       .subscribe(
//          (user:User)=>{console.log(user,"userservicetz");this.useraccordingtz=user;}
//         ,(error:any)=>{console.log('err',error)}
//      )
//  };
private handleError(error: any) {
  console.error(error);                                       //Created a function to handle and log errors, in case
  return throwError(error);
}
  }
    
   

