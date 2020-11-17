import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ELocalNotificationTriggerUnit, LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { AlertController, Platform } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { User } from '../modals/User';
import { UserServiceService } from '../services/user-service.service';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
scheduled=[];
  constructor(private plt: Platform, private localNotifications: LocalNotifications, private alertCtrl: AlertController,private auth:AuthService) {
    this.plt.ready().then(() => {
      this.localNotifications.on('click').subscribe(res => {
        console.log('click',res);
        let msg=res.data ? res.data.mydata:'';
        this.showAlert(res.title,res.text,msg);
       })
    });
    this.localNotifications.on('trigger').subscribe(res => {
      console.log('trigger',res);
      let msg=res.data ? res.data.mydata:'';
      this.showAlert(res.title,res.text,msg);
     })

  };


  ngOnInit() {this.noti();
  }
  schedulNotification() {
    this.localNotifications.schedule(
      {
        id: 1,
        title: 'hi',
        text: 'bi',
        data: { page: 'my hidden' },
        trigger: { in: 5, unit: ELocalNotificationTriggerUnit.SECOND },
        // foreground:true,
      }
    )
  }
  recurringNotifications(){
    this.localNotifications.schedule(
      {
        id: 22,
        title: 'hi',
        text: 'bi',
        trigger: { every:ELocalNotificationTriggerUnit.MINUTE },
        // foreground:true,
      }
    )
  }
  repeatingDaily(){
    this.localNotifications.schedule(
      {
        id: 42,
        title: 'hi',
        text: 'bi',
        trigger: { every:{hour:11,minute:59} },
        // foreground:true,
      }
    )
  }
  showAlert(header, sub, msg) {

    this.alertCtrl.create(
      {
        header: header,
        subHeader: sub,
        message: msg,
        buttons: ['ok']
      }
    )
      .then(alert => alert.present())
  }
  getAll(){
    this.localNotifications.getAll().then(res=>{
      this.scheduled=res;
    });
  }
  noti()//from ruthi
  {
    var n,user=this.auth.currentUser();
    if(window.Notification && Notification.permission!=='denied')
    {
      Notification.requestPermission((status)=>
      {
        n=new Notification("אפליקציית בייביסיטר",{
          body:JSON.parse(user).FirstName+' '+ 'בדוק מה קורה עם '+JSON.parse(user).ChildName,
          icon:"assets/img/logo/1.png",
          image:"assets/img/logo/1.png"
        })
      }
      )
    }
  }
}
