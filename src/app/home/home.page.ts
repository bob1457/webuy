import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  subjects;

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.subjects = [
      {
        name: 'All',
        image: 'http://placehold.it/80x80',
      },
      {
        image: 'http://placehold.it/80x80',
        name: 'English'
      },
      {
        image: 'http://placehold.it/80x80',
        name: 'Chemistry'
      },
      {
        image: 'http://placehold.it/80x80',
        name: 'English'
      },
      {
        image: 'http://placehold.it/80x80',
        name: 'Social'
      },
      {
        image: 'http://placehold.it/80x80',
        name: 'Physics'
      },
      {
        image: 'http://placehold.it/80x80',
        name: 'Math'
      },
      {
        image: 'http://placehold.it/80x80',
        name: 'Math'
      }
    ];
  }

  goToSubject() {

  }

}
