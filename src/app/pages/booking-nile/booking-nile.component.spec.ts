import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingNileComponent } from './booking-nile.component';

describe('BookingNileComponent', () => {
  let component: BookingNileComponent;
  let fixture: ComponentFixture<BookingNileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingNileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingNileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
