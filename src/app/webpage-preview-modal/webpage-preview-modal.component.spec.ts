import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebpagePreviewModalComponent } from './webpage-preview-modal.component';

describe('WebpagePreviewModalComponent', () => {
  let component: WebpagePreviewModalComponent;
  let fixture: ComponentFixture<WebpagePreviewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebpagePreviewModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebpagePreviewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
