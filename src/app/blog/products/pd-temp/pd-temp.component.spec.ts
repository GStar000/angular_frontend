import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdTempComponent } from './pd-temp.component';

describe('PdTempComponent', () => {
  let component: PdTempComponent;
  let fixture: ComponentFixture<PdTempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdTempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
