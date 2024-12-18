import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VipheaderComponent } from './vipheader.component';

describe('VipheaderComponent', () => {
  let component: VipheaderComponent;
  let fixture: ComponentFixture<VipheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VipheaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VipheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
