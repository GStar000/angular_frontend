import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdProtocol3Component } from './pd-protocol3.component';

describe('PdProtocol3Component', () => {
  let component: PdProtocol3Component;
  let fixture: ComponentFixture<PdProtocol3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdProtocol3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdProtocol3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
