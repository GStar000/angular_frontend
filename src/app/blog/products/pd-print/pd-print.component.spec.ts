import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdPrintComponent } from './pd-print.component';

describe('PdPrintComponent', () => {
  let component: PdPrintComponent;
  let fixture: ComponentFixture<PdPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
