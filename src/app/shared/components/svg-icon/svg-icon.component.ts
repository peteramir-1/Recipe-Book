import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { svgData } from './svg/svg.interface';
import { SolidSVGIcons } from './svg/solid-svg-icons';
import { OutlinedSVGIcons } from './svg/outline-svg-icons';

@Component({
  selector: 'svg-icon',
  template: ` <svg
    *ngIf="!!icon"
    xmlns="http://www.w3.org/2000/svg"
    [attr.fill]="icon.fill"
    viewBox="0 0 24 24"
    [attr.stroke-width]="icon.stroke_width"
    [attr.stroke]="icon.stroke"
  >
    <path
      [attr.stroke-linecap]="pathAttributes.stroke_linecap"
      [attr.stroke-linejoin]="pathAttributes.stroke_linejoin"
      [attr.fill-rule]="pathAttributes.fill_rule"
      [attr.clip-rule]="pathAttributes.clip_rule"
      *ngFor="let pathAttributes of icon.paths"
      [attr.d]="pathAttributes.d"
    />
  </svg>`,
})
export class SvgIconComponent implements OnChanges {
  @Input() icon_type: 'outline' | 'solid' = 'outline';
  @Input() icon_name!: string;
  icon?: svgData;

  ngOnChanges(changes: SimpleChanges): void {
    const current_icon_name =
      changes?.icon_name?.currentValue || this.icon_name;
    const current_icon_type =
      changes?.icon_type?.currentValue || this.icon_type;
    if (current_icon_type === 'solid') {
      this.changeToSolidIcon(current_icon_name);
    } else {
      this.changeToOutlieIcon(current_icon_name);
    }
  }

  private changeToSolidIcon(icon_name: string | undefined): void {
    this.icon = SolidSVGIcons[icon_name] || undefined;
  }

  private changeToOutlieIcon(icon_name: string | undefined): void {
    this.icon = OutlinedSVGIcons[icon_name] || undefined;
  }
}
