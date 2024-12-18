import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingVipComponent } from './booking-vip.component';

describe('BookingVipComponent', () => {
  let component: BookingVipComponent;
  let fixture: ComponentFixture<BookingVipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingVipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingVipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
