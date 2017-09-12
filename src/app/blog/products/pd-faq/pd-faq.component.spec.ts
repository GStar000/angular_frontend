import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdFaqComponent } from './pd-faq.component';

describe('PdFaqComponent', () => {
  let component: PdFaqComponent;
  let fixture: ComponentFixture<PdFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
