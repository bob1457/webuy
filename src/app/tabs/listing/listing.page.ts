import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {

  @ViewChild(IonSlides) ionSlides: IonSlides;
  slideOpts = {};
  slides = [];
  activities = [];
  activityTab = 0;

  constructor() {
  }

  ngOnInit() {

    this.slideOpts = {
      slidesPerView: 4.5,
      slideshow: true,
    };

    this.slides = [
      {id: 1, name: 'All Activity'},
      {id: 2, name: 'Likes', notifications: 32},
      {id: 3, name: 'Comments', notifications: 15},
      {id: 4, name: 'Mentions'}
    ];

    this.activities = [
      {id: 1, username: 'jasonlau', userProfile: '../assets/images/2.png', time: '1 min', activity: 'follow'},
      // eslint-disable-next-line max-len
      {id: 2, username: 'ericmiller', userProfile: '../assets/images/6.png', time: '5 mins', activity: 'comment', comment: 'Good job', post: '../assets/images/posts/12.png'},
      {id: 3, username: 'divdn', userProfile: '../assets/images/3.png', time: '1d', activity: 'follow'},
      {id: 4, username: 'nickchan', userProfile: '../assets/images/4.png', time: '1w', activity: 'follow'},
      // eslint-disable-next-line max-len
      {id: 5, username: 'iq.code', userProfile: '../assets/images/5.png', time: '3 mins', activity: 'comment', comment: 'Thank for your great work', post: '../assets/images/posts/7.png'},
      {id: 6, username: 'jasonlau', userProfile: '../assets/images/1.png', time: '2w', activity: 'follow'}
    ];
  }

  changeTab(index){
    this.activityTab = index;
    this.ionSlides.slideTo(index,);
  }

}
