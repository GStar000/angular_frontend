import { getSelectedTaxonIds } from './reducers/selectors';
import { Taxonomy } from './../core/models/taxonomy';
import { environment } from './../../environments/environment';
import { ProductActions } from './../product/actions/product-actions';
import { AppState } from './../interfaces';
import { getProducts, getTaxonomies } from './../product/reducers/selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, OnChanges } from '@angular/core';
import { Product } from '../core/models/product';
import { Router, ActivatedRoute, Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products$: Observable<any>;
  taxonomies$: Observable<any>;
  selectedTaxonIds$: Observable<number[]>;
  taxonId: Number[];

  constructor(private store: Store<AppState>, private actions: ProductActions, private route:ActivatedRoute, private router: Router) {
    // Get all products for the product list component
    this.store.dispatch(this.actions.getAllProducts());
    this.store.dispatch(this.actions.getAllTaxonomies());
    this.products$ = this.store.select(getProducts);
    this.taxonomies$ = this.store.select(getTaxonomies);
    this.selectedTaxonIds$ = this.store.select(getSelectedTaxonIds);
    router.events.subscribe((event:NavigationEvent)=>{
        this.getTaxonIds();
      }
    )
  }

  ngOnInit() {
    this.taxonId = [parseInt(this.route.snapshot.params['id'])];
  }

  getTaxonIds(){
    this.taxonId = [parseInt(this.route.snapshot.params['id'])];
  }
}
