import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDescripComponent } from './card-descrip.component';

describe('CardDescripComponent', () => {
  let component: CardDescripComponent;
  let fixture: ComponentFixture<CardDescripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDescripComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardDescripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
