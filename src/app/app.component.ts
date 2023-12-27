import { Component, ViewChild, inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MyDataModalComponent } from './my-data-modal/my-data-modal.component';
import { ToastComponent } from './toast/toast-component.component';
import { WebpagePreviewModalComponent } from './webpage-preview-modal/webpage-preview-modal.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private modalService: NgbModal) { }
  openDataModal() {
    const modalRef = this.modalService.open(MyDataModalComponent, { centered: true });
  }

  @ViewChild('toast') toastComponent!: ToastComponent;

  showToast() {
    this.toastComponent.showToast();
  }
  openWebpagePreviewModal() {
    const modalRef = this.modalService.open(WebpagePreviewModalComponent, { size: 'lg' });
    modalRef.componentInstance.urlToPreview = 'https://jobs.bdjobs.com/jobdetails-new.asp?id=1213100&ln=1&ref=d';
  }
}
