import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderbookingComponent } from './headerbooking.component';

describe('HeaderbookingComponent', () => {
  let component: HeaderbookingComponent;
  let fixture: ComponentFixture<HeaderbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderbookingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
