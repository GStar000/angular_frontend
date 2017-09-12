import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdDentca4Component } from './pd-dentca4.component';

describe('PdDentca4Component', () => {
  let component: PdDentca4Component;
  let fixture: ComponentFixture<PdDentca4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdDentca4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdDentca4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
