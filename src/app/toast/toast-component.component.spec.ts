import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastComponentComponent } from './toastcomponent';

describe('ToastComponentComponent', () => {
  let component: ToastComponentComponent;
  let fixture: ComponentFixture<ToastComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToastComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
