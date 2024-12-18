import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewgalleryComponent } from './reviewgallery.component';

describe('ReviewgalleryComponent', () => {
  let component: ReviewgalleryComponent;
  let fixture: ComponentFixture<ReviewgalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewgalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReviewgalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
