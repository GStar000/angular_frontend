import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdProtocol1Component } from './pd-protocol1.component';

describe('PdProtocol1Component', () => {
  let component: PdProtocol1Component;
  let fixture: ComponentFixture<PdProtocol1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdProtocol1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdProtocol1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
