import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooteritemComponent } from './footeritem.component';

describe('FooteritemComponent', () => {
  let component: FooteritemComponent;
  let fixture: ComponentFixture<FooteritemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooteritemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooteritemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
