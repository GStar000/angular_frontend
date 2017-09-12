import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdProtocol10Component } from './pd-protocol10.component';

describe('PdProtocol10Component', () => {
  let component: PdProtocol10Component;
  let fixture: ComponentFixture<PdProtocol10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdProtocol10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdProtocol10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
