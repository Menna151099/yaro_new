import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingDescribeComponent } from './booking-describe.component';

describe('BookingDescribeComponent', () => {
  let component: BookingDescribeComponent;
  let fixture: ComponentFixture<BookingDescribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingDescribeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingDescribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
