/*
*** This is made to detect the dropdown position in the page and open the dropdown
*** The directive is automatically choose the position to display the dropdown menu
*** Made by Peter Amir
*/

import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
	selector: '[appDropdown]',
})
export class DropdownDirective {
  private button;
	private list;
	private buttonClasses;
  private dropdownState;

	constructor(private renderer: Renderer2, private elem: ElementRef) {}

  @HostListener('document: click', ['$event.target']) dropdown(eventTarget: Event) {

    // Define Directive Elements
    this.button = this.elem.nativeElement;
    this.list = this.button.nextSibling;
    this.buttonClasses = this.button.getAttribute('class').split(' ');
    this.dropdownState = this.buttonClasses.includes('show');

    // Variable declaration
    let buttonXPosition = this.button.getBoundingClientRect().x,
        pageWidth = document.body.clientWidth;


		// Open Dropdown
		if (!this.dropdownState && this.button.contains(eventTarget)) {

      this.renderer.addClass(this.button, 'show');
      this.renderer.setAttribute(this.button, 'aria-expanded', 'true');

      this.renderer.addClass(this.list, 'show');
      this.renderer.setAttribute(this.list, 'x-placement', 'bottom-start');

      this.renderer.setStyle(this.list, 'margin', '0px');
			this.renderer.setStyle(this.list, 'position', 'absolute');
      this.renderer.setStyle(this.list, 'transform', 'translate(0px, 40px)');
      this.renderer.setStyle(this.list, 'z-index', 1);

      // varibale declarations
      let buttonWidth = this.button.offsetWidth,
          listWidth = this.list.offsetWidth

      // Auto Position
      if (buttonWidth > listWidth - 20 && buttonWidth < listWidth + 20) {
        this.renderer.setStyle(
          this.list,
          'inset',
          `0px auto auto ${(buttonWidth - listWidth) / 2}px`
        );
      } else {
        if (buttonXPosition < pageWidth / 2) {
          this.renderer.setStyle(
            this.list,
            'inset',
            '0px auto auto 0px'
          );
        } else if (buttonXPosition > pageWidth / 2) {
          this.renderer.setStyle(
            this.list,
            'inset',
            `0px auto auto ${buttonWidth - listWidth}px`
          );
        }
      }
    }

		// Close Dropdown
		if (this.dropdownState || !this.button.contains(eventTarget)) {

      this.renderer.removeClass(this.button, 'show');
			this.renderer.setAttribute(this.button, 'aria-expanded', 'false');

			this.renderer.removeClass(this.list, 'show');
			this.renderer.removeAttribute(this.list, 'x-placement');

      this.renderer.removeStyle(this.list, 'margin');
      this.renderer.removeStyle(this.list, 'position');
      this.renderer.removeStyle(this.list, 'inset');
      this.renderer.removeStyle(this.list, 'transform');
		}
	}

  @HostListener('window:resize') AutoPosition() {
    // Variable declaration
    let buttonWidth = this.button.offsetWidth,
        listWidth = this.list.offsetWidth,
        dropdownState = this.buttonClasses.includes('show'),
        buttonXPosition = this.button.getBoundingClientRect().x,
        pageWidth = document.body.clientWidth;

    // this Code automatically decide the position of the list
    if (dropdownState) {
      if (buttonWidth > listWidth - 20 && buttonWidth < listWidth + 20) {
        this.renderer.setStyle(
            this.list,
            'inset',
            `0px auto auto ${(buttonWidth - listWidth) / 2}px`
          );
      } else {
        if (buttonXPosition < pageWidth / 2) {
          this.renderer.setStyle(
            this.list,
            'inset',
            '0px auto auto 0px'
          );
        } else {
          this.renderer.setStyle(
            this.list,
            'inset',
            `0px auto auto ${buttonWidth - listWidth}px`
          );
        }
      }
    }
  }
}
