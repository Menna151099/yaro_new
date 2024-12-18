import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourgalleryComponent } from './tourgallery.component';

describe('TourgalleryComponent', () => {
  let component: TourgalleryComponent;
  let fixture: ComponentFixture<TourgalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourgalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TourgalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
