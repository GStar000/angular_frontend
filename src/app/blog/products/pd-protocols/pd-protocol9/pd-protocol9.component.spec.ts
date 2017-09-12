import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdProtocol9Component } from './pd-protocol9.component';

describe('PdProtocol9Component', () => {
  let component: PdProtocol9Component;
  let fixture: ComponentFixture<PdProtocol9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdProtocol9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdProtocol9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
