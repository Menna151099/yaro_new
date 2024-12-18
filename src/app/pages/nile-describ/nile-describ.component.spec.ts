import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NileDescribComponent } from './nile-describ.component';

describe('NileDescribComponent', () => {
  let component: NileDescribComponent;
  let fixture: ComponentFixture<NileDescribComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NileDescribComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NileDescribComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
