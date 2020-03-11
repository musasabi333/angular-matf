import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[matfSpace]'
})
export class SpaceDirective {

  element: ElementRef;

  @Input() shirtColor: string;

  constructor(element: ElementRef) {
    this.element = element;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.color = this.shirtColor;
    this.element.nativeElement.style.fontWeight = 'bold';
    this.element.nativeElement.style.backgroundImage = 'url(https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/3117853/910/607/m1/' +
    'fpnw/wm1/1607.m00.i101.n021.p.c25.179331677-space-w-.jpg?1502726817&s=1a19ad501d83dc73e35cdf1f3b965102)';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.color = '';
    this.element.nativeElement.style.fontWeight = '';
    this.element.nativeElement.style.backgroundImage = '';
  }

}
