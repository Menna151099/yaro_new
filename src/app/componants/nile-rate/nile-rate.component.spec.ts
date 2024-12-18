import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NileRateComponent } from './nile-rate.component';

describe('NileRateComponent', () => {
  let component: NileRateComponent;
  let fixture: ComponentFixture<NileRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NileRateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NileRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
