import { ActivatedRoute, Params } from '@angular/router';
import { ViewEncapsulation, OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  dark: boolean = true;

  constructor (private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params['home']) this.dark = false;
      if (params['recipes']) this.dark = true;
    });
  }

  scrollbarColor() {
    if (this.dark) return 'dark'
    else return 'light'
  }
}
