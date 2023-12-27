import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-webpage-preview-modal',
  templateUrl: './webpage-preview-modal.component.html',
  styleUrls: ['./webpage-preview-modal.component.css']
})
export class WebpagePreviewModalComponent {
  @Input() urlToPreview: string = '';
  safeUrl: SafeResourceUrl;

  constructor(public activeModal: NgbActiveModal, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlToPreview);
  }

  closeModal() {
    this.activeModal.close();
  }
}
