// Angular imports
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// Fa Icons
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {
  // dropdown buttons
  readonly manageBtn = ['New Recipe', 'Save Data', 'Fetch Data'];

  // Icons
  readonly sidebarIcon = faEllipsisV;

  // Sidenav links
  readonly navLinks = [
    {
      name: 'Home',
      url: '/home'
    },
    {
      name: 'Shopping List',
      url: '/shoppinglist'
    },
    {
      name: 'Recip Book',
      url: '/recipes'
    }
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute
    ) {}

    // Action reflect from the click on one of the dropdown buttons
    onClick(item: string) {
    if (item == this.manageBtn[0]) {
      this.router.navigate(['recipes', 'new'], {relativeTo: this.route, queryParams: {'sidebarState': true}});
    }
  }

}
