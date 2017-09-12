import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdProtocol6Component } from './pd-protocol6.component';

describe('PdProtocol6Component', () => {
  let component: PdProtocol6Component;
  let fixture: ComponentFixture<PdProtocol6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdProtocol6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdProtocol6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
