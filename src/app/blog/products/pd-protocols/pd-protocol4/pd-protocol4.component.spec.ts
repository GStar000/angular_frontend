import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdProtocol4Component } from './pd-protocol4.component';

describe('PdProtocol4Component', () => {
  let component: PdProtocol4Component;
  let fixture: ComponentFixture<PdProtocol4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdProtocol4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdProtocol4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
