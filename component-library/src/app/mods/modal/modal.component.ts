import {
  Component,
  EventEmitter,
  OnInit,
  ElementRef,
  OnDestroy,
  Output
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnDestroy, OnInit {
  constructor(private elementRef: ElementRef) {}
  @Output() close = new EventEmitter();

  ngOnDestroy() {
    this.elementRef.nativeElement.remove();
  }

  ngOnInit() {
    document.body.appendChild(this.elementRef.nativeElement);
  }

  onCloseClick() {
    this.close.emit();
  }
}
