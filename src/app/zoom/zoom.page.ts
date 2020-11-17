import { Component, ElementRef, OnInit } from '@angular/core';
import { } from '../services/user-service.service'
import { AuthService } from '../auth.service'
import { Router } from '@angular/router';
import { WebrtcService } from '../providers/webrtc.service';
import DecibelMeter from 'decibel-meter';

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.page.html',
  styleUrls: ['./zoom.page.scss'],
})
export class ZoomPage implements OnInit {


  name: string = '';
  password: string = '';
  select: string = '';
  typesUsers = ["הורה", "ילד"];
  constructor(public auth: AuthService,
    public router: Router,
    public webRTC: WebrtcService,
    public elRef: ElementRef,
    public authService: AuthService
  ) { }

  close() { this.webRTC.closeMedia(); }
  change(data) {

    console.log(data.detail.value, "hik");
    this.auth.typeUser = data.detail.value;
  }
  topVideoFrame = 'partner-video';
  userId: string;
  partnerId: string;
  myEl: HTMLMediaElement;
  partnerEl: HTMLMediaElement;
  isParent: boolean = false;

  ngOnInit(): void {
    this.myEl = this.elRef.nativeElement.querySelector('#my-video');
    this.partnerEl = this.elRef.nativeElement.querySelector('#partner-video');


    var obj = JSON.parse(localStorage.getItem('currentUser')).Tz;
    if (localStorage.getItem('typeUser') == "הורה") {
      this.userId = obj + 'parent';
      this.partnerId = obj + 'child';
      this.isParent = true;
    }
    else {

      this.userId = obj + 'child';
      this.partnerId = obj + 'parent'

    }
    console.log(this.userId);
    console.log(this.partnerId)
    this.login();

  }

  login() {
    this.webRTC.init(this.userId, this.myEl, this.partnerEl);
  }

  call() {
    // setTimeout(()=>
    // {
   this.decibelim();

    this.webRTC.call(this.partnerId);
    this.swapVideo('my-video');

    // },4000);


  }

  decibelim() {
    var meter = new DecibelMeter('unique-id');
    meter.sources.then(sources => {
      meter.connect(sources[0])
    });
    meter.connectTo(0);

    meter.listen();
    meter.listenTo(0, (dB, percent, value) => {
      console.log(dB, "db")
      console.log(percent, "percent")
      console.log(value, "value")

      if (dB >= -70 && this.auth.flagNotificationTime) {
        this.auth.notification(dB);
        this.auth.flagNotificationTime = false;

        setTimeout(() => {
          this.auth.flagNotificationTime = true;
        }, 1000 * 60 * 3);
      }

    })
  }

  swapVideo(topVideo: string) {
    this.topVideoFrame = topVideo;
  }
}
