import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdTempWhatComponent } from './pd-temp-what.component';

describe('PdTempWhatComponent', () => {
  let component: PdTempWhatComponent;
  let fixture: ComponentFixture<PdTempWhatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdTempWhatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdTempWhatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
