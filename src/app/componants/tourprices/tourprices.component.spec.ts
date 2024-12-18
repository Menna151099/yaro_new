import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourpricesComponent } from './tourprices.component';

describe('TourpricesComponent', () => {
  let component: TourpricesComponent;
  let fixture: ComponentFixture<TourpricesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourpricesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TourpricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
