import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';
import { UserServiceService } from './services/user-service.service';
import { User } from './modals/User';
import { HomePage } from './home/home.page';

@Injectable({ providedIn: 'root' })
export class AuthService {
    public Key = 'currentUser';
    public typeUser: string;
    public user: User;
    public myUser: User;
    public mailSplit = null;
    private key = 'token';
    message = { error: '' };
    public flagNotificationTime=true;

    public tempCurrentTz: string = '';

    constructor(private httpClient: HttpClient, private router: Router, private userService: UserServiceService) { }

    login(name: string, password: string) {
        this
            .httpClient
            .get(`${environment.apiUrl}/token`, { params: { name, password } })
            .subscribe((token: string) => {
                localStorage.setItem(this.key, token);
                this.httpClient
                    .get<any>(`${environment.apiUrl}/Get/${password}/${name}`)
                    .subscribe(
                        (user) => {
                            localStorage.setItem(this.Key, JSON.stringify(user));
                        }
                        , (error: any) => { console.log('err', error) });
                this.router.navigate(['']);

            },
                (error: any) => {
                    this.message.error = error.error.message;
                });
    }
    logout() {
        localStorage.removeItem(this.Key)//or KEy
        localStorage.removeItem("typeUser");
        //כשיוצא להוציא את הזום
        // this.rtc.close();
        this.router.navigate(['sideMenu/login']);
    }
    token() {
        return localStorage.getItem(this.key);
    }

    in(name, password) {
        this.userService.getUser(password, name)
            .subscribe(
                (user: User) => {
                    localStorage.setItem(this.Key, JSON.stringify(user));
                    this.myUser = user;
                    localStorage.setItem("typeUser", this.typeUser);
                    this.router.navigate(['sideMenu/zoom']);
                }
                , (error: any) => { console.log('err', error) });

    };
    validateEntrance(name, password, childName) {
        this.userService.getUser(password, name).subscribe((user: User) => { { return user.ChildName; } }, (error: any) => { });
        
      
       
    }
    currentUser() {
        return localStorage.getItem(this.Key);
    }
    currentTypeUser() {
        return localStorage.getItem("typeUser");
    }

    navigateUser() {
        //  localStorage.setItem("userType",this.typeUser)
        if (this.typeUser == "הורה")

            this.router.navigate(['/tabs/parent']);



        else { this.router.navigate(['/tabs/child']); }
    }





    // public UserInStorge() {
    //     var c: string = this.currentUser();
    //     var user1:User;
    //     console.log(this.user, "this.user");
    //    user1.Adress = JSON.parse(c).Adress;
    //    user1.BirthDate = JSON.parse(c).BirthDate;
    //    user1.City = JSON.parse(c).City;
    //    user1.Email = JSON.parse(c).Email;
    //    user1.FirstName = JSON.parse(c).FirstName;
    //    user1.LastName = JSON.parse(c).LastName;
    //    user1.Password = JSON.parse(c).Password;
    //    user1.Phone = JSON.parse(c).Phone;
    //    user1.ChildName = JSON.parse(c).ChildName;
    //    user1.Tz = JSON.parse(c).Tz;
    //    user1.UserName = JSON.parse(c).UserName;
    //     return user1;
    // }
    validUserNameAndPassword(psrd, name) {
        this.userService.getUsers().subscribe((users: User[]) => {
            for (let i = 0; i < users.length; i++) {
                if (users[i].Password == psrd && users[i].UserName == name) { alert("קיים משתמש עם שם משתמש וסיסמא זהים"); return false }
            }
        }
        );
        return true;
    }

    NameTypeUser() {

        if (this.typeUser == "ילד")
            return 'שלום' + ' ' + JSON.parse(this.currentUser()).ChildName;
        else
            return 'שלום' + ' ' + JSON.parse(this.currentUser()).FirstName;
    }
    mail() {
        this.userService.getUsertz(this.tempCurrentTz).subscribe((user: User) => {
            if (user.Tz == this.tempCurrentTz) {
                this.mailArray(user.Email);
            }
        });
    }

    mailArray(mail: string) {

        var mail2 = mail.split('@');
        var mail3 = Array.from(mail2[0])
        for (var i = 3; i < mail3.length; i++)
            mail3[i] = '*';
        var mail4 = mail3.join("");
        mail4 = mail4 + '@' + mail2[1];
        this.mailSplit = 'נשלחה סיסמא זמנית למייל ' + mail4;
       
    }
    notification(sound)//from ruthi
    {
    //  sound=   sound.slice(5,sound.length)
        var n, user = this.currentUser();
        if (window.Notification && Notification.permission !== 'denied') {
            Notification.requestPermission((status) => {
                n = new Notification("אפליקציית בייביסיטר", {
                    body: JSON.parse(user).FirstName + ' ' + 'בדוק מה קורה עם ' + JSON.parse(user).ChildName+" "+"בעוצמת רעש "+sound,
                    icon: "assets/img/logo/1.png",
                    image: "assets/img/logo/1.png",
                    vibrate: [200, 100, 200]
                })
            }
            )
        }
    }



}
