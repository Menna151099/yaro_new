import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CairoDescribeComponent } from './cairo-describe.component';

describe('CairoDescribeComponent', () => {
  let component: CairoDescribeComponent;
  let fixture: ComponentFixture<CairoDescribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CairoDescribeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CairoDescribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
