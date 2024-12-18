import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VipDescribComponent } from './vip-describ.component';

describe('VipDescribComponent', () => {
  let component: VipDescribComponent;
  let fixture: ComponentFixture<VipDescribComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VipDescribComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VipDescribComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
