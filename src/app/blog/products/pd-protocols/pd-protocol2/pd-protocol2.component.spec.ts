import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdProtocol2Component } from './pd-protocol2.component';

describe('PdProtocol2Component', () => {
  let component: PdProtocol2Component;
  let fixture: ComponentFixture<PdProtocol2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdProtocol2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdProtocol2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
