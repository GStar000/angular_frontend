import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdImmProComponent } from './pd-imm-pro.component';

describe('PdImmProComponent', () => {
  let component: PdImmProComponent;
  let fixture: ComponentFixture<PdImmProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdImmProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdImmProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
