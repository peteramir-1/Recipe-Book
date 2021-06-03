import {
    Component,
	OnInit,
	ViewChild,
	AfterViewInit,
	OnDestroy,
} from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';

// *------- Services -------*/
import { RecipeService } from './../services/recipe.service';

// *------- Models -------*/
import { recipeModel } from '../models/recipe.model';

// *------- Mat Component -------*/
import { MatDrawer } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-recipes',
	templateUrl: './recipes.component.html',
	styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit, AfterViewInit, OnDestroy {
	@ViewChild('detailDrawer') detailDrawer: MatDrawer;
	public recipes: recipeModel[];
    
	// *------- States -------*/
    //todo  Manage all states from one file 
	public sidebarState = false;
	private detailOpened: Subscription;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private recipeService: RecipeService
	) {}

	ngOnInit(): void {
		this.route.data.subscribe((data: Data) => {
			this.recipes = data.recipes; // recive component DATA
		});
	}

	ngAfterViewInit(): void {
		this.detailOpened = this.recipeService.initiateDetailDrawer.subscribe(
			() => {
				this.detailDrawer.open(); // open drawer when detail is open

                // ? Observable unsubscribtion to avoid repetition +of opening of the detail panel
				this.detailOpened.unsubscribe();
			}
		);

		this.detailDrawer.closedStart.subscribe(() => {
			this.router.navigate(['recipes']); // when detail panel is closed move to ./recipes
		});
	}

	ngOnDestroy(): void {
		this.detailOpened.unsubscribe();
	}

	/**
	 *
	 * ? used for opening detail panel to see the recipe detail
	 * @param {number} i
	 * @memberof RecipesComponent
	 */
	openDetail(i: number): void {
		const route = `${i + 1}/detail`;
		this.router.navigate([route], { relativeTo: this.route });
		this.detailDrawer.open();
	}
}
