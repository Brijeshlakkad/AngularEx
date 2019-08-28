import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { isUndefined } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercise-app';
  sidebarToShow: boolean = false;
  headerToShow: boolean = false;
  constructor(private route: ActivatedRoute, public authService: AuthService, private router: Router) {
    if (authService.isLoggedIn()) {
      router.navigate(['dashboard']);
    }
  }

  private lastChild(route: ActivatedRouteSnapshot): ActivatedRouteSnapshot {
    if (route.firstChild) {
      return this.lastChild(route.firstChild);
    } else {
      return route;
    }
  }

  changeOfRoute() {
    const child = this.lastChild(this.route.snapshot);
    this.sidebarToShow = isUndefined(child.data.sidebar) ? false : child.data.sidebar;
    this.headerToShow = isUndefined(child.data.header) ? false : child.data.header;
  }
}
