import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {
  constructor(
    // reference to el that is child of viewContainerRef
    private templateRef: TemplateRef<any>,
    // reference to el that directive is an attribute of
    private viewContainerRef: ViewContainerRef
  ) {}

  @Input('appTimes') set render(times: number) {
    this.viewContainerRef.clear();
    for (let i = 0; i < times; i++) {
      this.viewContainerRef.createEmbeddedView(this.templateRef, { index: i });
    }
  }
}
