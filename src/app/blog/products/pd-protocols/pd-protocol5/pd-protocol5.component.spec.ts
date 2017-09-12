import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdProtocol5Component } from './pd-protocol5.component';

describe('PdProtocol5Component', () => {
  let component: PdProtocol5Component;
  let fixture: ComponentFixture<PdProtocol5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdProtocol5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdProtocol5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
