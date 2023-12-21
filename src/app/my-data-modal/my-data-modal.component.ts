import { Component, Input, OnInit, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-data-modal',
  templateUrl: './my-data-modal.component.html',
  styleUrls: ['./my-data-modal.component.css']
})
export class MyDataModalComponent implements OnInit {
  @Input() loadedData: any;

  constructor(private http: HttpClient, private activeModal:NgbActiveModal) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.http.get('https://dummyjson.com/products').subscribe((data: any) => {
      this.loadedData = data;
    });
  }

  closeModal() {
    this.activeModal.close();
  }
}
