import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VipRateComponent } from './vip-rate.component';

describe('VipRateComponent', () => {
  let component: VipRateComponent;
  let fixture: ComponentFixture<VipRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VipRateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VipRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
