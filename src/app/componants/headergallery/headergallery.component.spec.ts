import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadergalleryComponent } from './headergallery.component';

describe('HeadergalleryComponent', () => {
  let component: HeadergalleryComponent;
  let fixture: ComponentFixture<HeadergalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadergalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadergalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
