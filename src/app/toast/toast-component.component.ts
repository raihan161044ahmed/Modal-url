// toast.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toast',
  template: `
    <div class="toast" [ngClass]="{'show': show}" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <strong class="me-auto">{{ header }}</strong>
        <button type="button" class="btn-close" (click)="hideToast()" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        {{ content }}
      </div>
    </div>
  ` 
})
export class ToastComponent {
  @Input() header: string = 'Header';
  @Input() content: string = 'Content';
  show: boolean = false;

  showToast() {
    this.show = true;
    setTimeout(() => this.hideToast(), 3000);
  }

  hideToast() {
    this.show = false;
  }
}
