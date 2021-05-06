import { RecipeService } from './../services/recipe.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HostListener, Input, ElementRef, Renderer2, OnInit } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appGallaryDetails]'
})
export class GallaryDetailsDirective implements OnInit {
  @Input('appGallaryDetails') nextRoute: string;

  constructor(
      private router: Router,
      private elem: ElementRef,
      private renderer: Renderer2,
      private route: ActivatedRoute,
      private recipeService: RecipeService
    ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((param: ParamMap) => {
      let cardColumn = this.elem.nativeElement.childNodes[0].childNodes[0]
      if (param.get('sidebarState')) {
        this.renderer.setStyle(cardColumn, 'column-count', 3);
      } else if (!param.get('sidebarState') && (this.recipeService.recipes.length > 15)) {
        this.renderer.setStyle(cardColumn, 'column-count', 4);
      } else {
        this.renderer.setStyle(cardColumn, 'column-count', 3);
      }
    });
  }

  @HostListener('document: click', ['$event.path[0]']) openAndCloseDetail(event) {
    let selectedElementClass = event.className.split(' ')[0];
    if ( selectedElementClass === 'back' ) {
      this.router.navigate([this.nextRoute]);
    }
  }
}
