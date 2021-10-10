import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  slideOptions = {};
  stories = [];
  buttonValue = 'grid';
  buttonItems = [];

  constructor() { }

  ngOnInit() {
    this.slideOptions = {
      slidesPerView: 5.5,
    };
    this.stories = [
      {name: 'New'},
      {name: 'Android', src: '../assets/images/circles/android.png'},
      {name: 'Angular', src: '/assets/images/circles/angular.png'},
      {name: 'Ionic', src: '/assets/images/circles/ionic.png'},
      {name: 'IOS', src: '/assets/images/circles/ios.png'},
      {name: 'Laval', src: '/assets/images/circles/laravel.png'},
      {name: 'Nodejs', src: '/assets/images/circles/nodejs.png'},
      {name: 'Php', src: '/assets/images/circles/php.png'} //,
      // {name: 'Android', src: 'assets/images/android.png'},
    ];
    this.buttonItems = [
      {value: 'grid', icon: 'grid'},
      {value: 'reels', icon: 'document'},
      {value: 'photos', icon: 'images'}
    ];
  }

  buttonsChanged(event) {
    console.log(event.detail.value);
    this.buttonValue = event.detail.value;
  }

}
