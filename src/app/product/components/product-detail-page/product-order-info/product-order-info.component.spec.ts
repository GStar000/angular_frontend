import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOrderInfoComponent } from './product-order-info.component';

describe('ProductOrderInfoComponent', () => {
  let component: ProductOrderInfoComponent;
  let fixture: ComponentFixture<ProductOrderInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductOrderInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOrderInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
