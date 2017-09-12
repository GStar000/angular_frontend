import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdProtocol7Component } from './pd-protocol7.component';

describe('PdProtocol7Component', () => {
  let component: PdProtocol7Component;
  let fixture: ComponentFixture<PdProtocol7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdProtocol7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdProtocol7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
