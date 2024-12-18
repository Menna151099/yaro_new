import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderplacesComponent } from './headerplaces.component';

describe('HeaderplacesComponent', () => {
  let component: HeaderplacesComponent;
  let fixture: ComponentFixture<HeaderplacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderplacesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderplacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
