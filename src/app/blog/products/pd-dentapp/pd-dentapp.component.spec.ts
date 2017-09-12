import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdDentappComponent } from './pd-dentapp.component';

describe('PdDentappComponent', () => {
  let component: PdDentappComponent;
  let fixture: ComponentFixture<PdDentappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdDentappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdDentappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
