import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VipdetailComponent } from './vipdetail.component';

describe('VipdetailComponent', () => {
  let component: VipdetailComponent;
  let fixture: ComponentFixture<VipdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VipdetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VipdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
