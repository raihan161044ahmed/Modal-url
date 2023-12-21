import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDataModalComponent } from './my-data-modal.component';

describe('MyDataModalComponent', () => {
  let component: MyDataModalComponent;
  let fixture: ComponentFixture<MyDataModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyDataModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyDataModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
