// Angular imports
import { Component, OnInit, ViewChild, ElementRef, Renderer2, AfterViewInit, AfterViewChecked } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// Fa Icons
import { faEllipsisV, faHome, faShoppingCart, faUtensils } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  // Elements
  @ViewChild('nav') navElem: ElementRef;

  // images
  readonly logo = '../../assets/nav/logo.png';
  profilePic = '../../assets/nav/profile-pic.png';

  // dropdown buttons
  readonly manageBtn = ['new recipe', 'save data', 'fetch Data', 'profile', 'settings', 'sign out'];

  // Icons
  readonly sidebarIcon = faEllipsisV;
  readonly homeIcon = faHome;
  readonly recipeIcon = faUtensils;
  readonly shoppingIcon = faShoppingCart;

  // nav properties
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
      url: '/features'
    },
    {
      name: 'upgrade',
      url: '/upgrade'
    },
    {
      name: 'about',
      url: '/about'
    },
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {

  }

    // Action reflect from the click on one of the dropdown buttons
    onClick(item: string): void {
    if (item === this.manageBtn[0]) {
      this.router.navigate(['recipes', 'new'], {relativeTo: this.route, queryParams: {sidebarState: true}});
    }
  }
}
