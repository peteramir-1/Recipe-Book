import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// *------------------ FA Icons imports -----------------*/
import {
	faEllipsisV,
	faHome,
	faShoppingCart,
	faUtensils,
} from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-main-nav',
	templateUrl: './main-nav.component.html',
	styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent implements OnInit {
	readonly logo = '../../assets/nav/logo.png';
	readonly profilePic = '../../assets/nav/profile-pic.png';
	readonly manageBtn = [
		'new recipe',
		'save data',
		'fetch Data',
		'profile',
		'settings',
		'sign out',
	]; //
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
			name: 'recipe book',
			url: '/recipes',
		},
		{
			name: 'features',
			url: '/features',
		},
		{
			name: 'upgrade',
			url: '/upgrade',
		},
		{
			name: 'about',
			url: '/about',
		},
	];

	// *------------------ FA Icons -----------------*/
	readonly sidebarIcon = faEllipsisV;
	readonly homeIcon = faHome;
	readonly recipeIcon = faUtensils;
	readonly shoppingIcon = faShoppingCart;

	constructor(private router: Router, private route: ActivatedRoute) {}

	ngOnInit(): void {}

	/**
	 *
	 * ? check which button is clicked and do the action
	 * @param {string} item
	 * @memberof MainNavComponent
	 */
	onBtnClick(item: string): void {
		const isNewRecipe = new RegExp(item, 'i').test(this.manageBtn[0]);
		if (isNewRecipe) {
			this.router.navigate(['recipes', 'new'], {
				relativeTo: this.route,
				queryParams: { sidebarState: true },
			});
		}
	}
}
