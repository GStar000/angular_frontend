import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdProtocolsComponent } from './pd-protocols.component';

describe('PdProtocolsComponent', () => {
  let component: PdProtocolsComponent;
  let fixture: ComponentFixture<PdProtocolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdProtocolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdProtocolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
