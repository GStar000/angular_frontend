import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdProtocol8Component } from './pd-protocol8.component';

describe('PdProtocol8Component', () => {
  let component: PdProtocol8Component;
  let fixture: ComponentFixture<PdProtocol8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdProtocol8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdProtocol8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
