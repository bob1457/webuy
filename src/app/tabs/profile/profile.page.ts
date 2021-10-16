import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OptionComponent } from './option/option.component';

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
  posts = [];

  constructor(private modalCtlr: ModalController) { }

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

    this.posts = [
      { id: 1, url: '../assets/images/posts/1.jpg'},
      { id: 2, url: '../assets/images/posts/2.jpg'},
      { id: 3, url: '../assets/images/posts/3.png'},
      { id: 4, url: '../assets/images/posts/4.png'},
      { id: 9, url: '../assets/images/posts/5.jpg'},
      { id: 6, url: '../assets/images/posts/6.png'},
      { id: 5, url: '../assets/images/posts/7.png'},
      { id: 8, url: '../assets/images/posts/8.jpg'},
      { id: 7, url: '../assets/images/posts/9.png'},
      { id: 10, url: '../assets/images/posts/10.png'},
      { id: 11, url: '../assets/images/posts/11.png'},
      { id: 12, url: '../assets/images/posts/12.png'},
    ];
  }

  buttonsChanged(event) {
    console.log(event.detail.value);
    this.buttonValue = event.detail.value;
  }

  async option( ){
    const options = {
      component: OptionComponent,
      cssClass: 'custom-modal',
      swipeToClose: true, // ios only
    };
    const modal = await this.modalCtlr.create(options);
    await modal.present();
  }

}
