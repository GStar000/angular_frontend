import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdWhydentComponent } from './pd-whydent.component';

describe('PdWhydentComponent', () => {
  let component: PdWhydentComponent;
  let fixture: ComponentFixture<PdWhydentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdWhydentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdWhydentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
