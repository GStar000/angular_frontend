import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdTempProtocolsComponent } from './pd-temp-protocols.component';

describe('PdTempProtocolsComponent', () => {
  let component: PdTempProtocolsComponent;
  let fixture: ComponentFixture<PdTempProtocolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdTempProtocolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdTempProtocolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
