import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardreviewComponent } from './cardreview.component';

describe('CardreviewComponent', () => {
  let component: CardreviewComponent;
  let fixture: ComponentFixture<CardreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
