import { Component, inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MyDataModalComponent } from './my-data-modal/my-data-modal.component';

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
}
