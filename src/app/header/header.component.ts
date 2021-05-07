import { Router, ActivatedRoute } from '@angular/router';
import { ViewChild } from '@angular/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import {TuiHostedDropdownComponent} from '@taiga-ui/core';
import {TUI_ARROW} from '@taiga-ui/kit';
import { faEllipsisV, faHome, faShoppingCart, faUtensils } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './header.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly items = ['New Recipe', 'Save Data', 'Fetch Data'];
  readonly arrow = TUI_ARROW;
  readonly sidebarIcon = faEllipsisV;
  readonly homeIcon = faHome;
  readonly recipeIcon = faUtensils;
  readonly shoppingIcon = faShoppingCart;
  open = false;
  openDropdown = false;
  readonly navLinks = [
    {
      name: 'Home',
      url: '/home',
      icon: this.homeIcon
    },
    {
      name: 'Shopping List',
      url: '/shoppinglist',
      icon: this.shoppingIcon
    },
    {
      name: 'Recip Book',
      url: '/recipes',
      icon: this.recipeIcon
    }
  ]

  @ViewChild(TuiHostedDropdownComponent)
  component?: TuiHostedDropdownComponent;

  constructor(private router: Router, private route: ActivatedRoute) {}

  onClick(item: string) {

    if (this.component && this.component.nativeFocusableElement) {
      this.component.nativeFocusableElement.focus();
    }
    if (item == this.items[0]) {
      this.router.navigate(['recipes', 'new'], {relativeTo: this.route, queryParams: {'sidebarState': true}});
      this.openDropdown = false;
    }
    this.openDropdown = false;
  }

  toggle(open: boolean) {
    this.open = open;
  }

}
