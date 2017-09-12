import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../interfaces';
import { AuthActions } from '../auth/actions/auth.actions';
import { AuthService } from '../core/services/auth.service';
import { HttpService } from '../core/services/http';
import { getAuthStatus } from '../auth/reducers/selectors';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isAuthenticated: Observable<boolean>;

  constructor(
    private store: Store<AppState>,
    private authService: AuthService,
    private authActions: AuthActions,
    private httpService: HttpService,
    private router: Router
  ) { }

  ngOnInit() {
    this.store.dispatch(this.authActions.authorize());
    this.isAuthenticated = this.store.select(getAuthStatus);
    console.log("isAuthenticated", this.isAuthenticated);
        
    // if (isAuthenticated)
      // window.location.href='http://34.211.157.52:3000/spree/admin';
      window.location.href=this.httpService.getFullUrl('spree/admin');
      // window.location.href='http://localhost:3000/spree/admin';
    // else 
    //   this.router.navigateByUrl('/');
  }

}
