import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdBecomeComponent } from './pd-become.component';

describe('PdBecomeComponent', () => {
  let component: PdBecomeComponent;
  let fixture: ComponentFixture<PdBecomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdBecomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdBecomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
