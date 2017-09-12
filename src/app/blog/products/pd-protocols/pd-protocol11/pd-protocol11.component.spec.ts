import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdProtocol11Component } from './pd-protocol11.component';

describe('PdProtocol11Component', () => {
  let component: PdProtocol11Component;
  let fixture: ComponentFixture<PdProtocol11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdProtocol11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdProtocol11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
