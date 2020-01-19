import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {
  constructor(private elementRef: ElementRef) {}

  // how to implement ngClass attribute directive
  @Input('appClass') set classNames(classObj: any) {
    Object.entries(classObj).forEach(entry => {
      const [className, value] = entry;
      const classListMethodName = value ? 'add' : 'remove';
      this.elementRef.nativeElement.classList[classListMethodName](className);
    });
  }
}
