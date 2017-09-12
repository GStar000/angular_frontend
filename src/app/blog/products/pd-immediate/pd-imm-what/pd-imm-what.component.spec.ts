import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdImmWhatComponent } from './pd-imm-what.component';

describe('PdImmWhatComponent', () => {
  let component: PdImmWhatComponent;
  let fixture: ComponentFixture<PdImmWhatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdImmWhatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdImmWhatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
