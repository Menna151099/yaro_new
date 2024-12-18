import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesdetailComponent } from './placesdetail.component';

describe('PlacesdetailComponent', () => {
  let component: PlacesdetailComponent;
  let fixture: ComponentFixture<PlacesdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlacesdetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlacesdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
