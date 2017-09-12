import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dentca3dComponent } from './dentca-3d.component';

describe('Dentca3dComponent', () => {
  let component: Dentca3dComponent;
  let fixture: ComponentFixture<Dentca3dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dentca3dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dentca3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
