import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VipphotoComponent } from './vipphoto.component';

describe('VipphotoComponent', () => {
  let component: VipphotoComponent;
  let fixture: ComponentFixture<VipphotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VipphotoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VipphotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
