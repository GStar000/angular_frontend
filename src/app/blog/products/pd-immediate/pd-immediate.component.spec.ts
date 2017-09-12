import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdImmediateComponent } from './pd-immediate.component';

describe('PdImmediateComponent', () => {
  let component: PdImmediateComponent;
  let fixture: ComponentFixture<PdImmediateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdImmediateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdImmediateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
