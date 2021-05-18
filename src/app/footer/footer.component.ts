import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  // Main Properties
  readonly logo = '../../assets/nav/logo.png';
  readonly navLinks = [
    {
      name: 'home',
      url: '/home',
    },
    {
      name: 'shopping list',
      url: '/shoppinglist',
    },
    {
      name: 'recip book',
      url: '/recipes',
    },
    {
      name: 'features',
      url: '/'
    },
    {
      name: 'upgrade',
      url: '/'
    },
    {
      name: 'about',
      url: '/'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  sendToContact() {

  }
}
