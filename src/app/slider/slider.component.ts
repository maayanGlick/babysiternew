import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  imgs = [
    '../../assets/img/home/6.jpg',
   '../../assets/img/home/7.jpg',
 
  '../../assets/img/home/8.jpg',
 
  '../../assets/img/home/9.jpg'
 ];
  constructor() { }

  ngOnInit() {

  }    

}

