import { Router } from '@angular/router';
import { HostListener, Input } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appGallaryDetails]'
})
export class GallaryDetailsDirective {
  @Input('appGallaryDetails') route: string;

  constructor( private router: Router) {}

  @HostListener('document: click', ['$event.path[0]']) openAndCloseDetail(event) {
    let selectedElementClass = event.className.split(' ')[0];
    if ( selectedElementClass === 'back' ) {
      this.router.navigate([this.route]);
    }
  }
}
