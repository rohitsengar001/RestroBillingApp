import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CreateBillComponent } from '../modules/billing/create-bill/create-bill.component';

@Injectable({
  providedIn: 'root',
})
export class CreatBillGuard implements CanDeactivate<unknown> {
  flag: boolean;
  constructor(private router: Router) { }
  canDeactivate(
    component: CreateBillComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (component.billReactiveForm.markAsDirty) {
      this.flag = confirm('Are your sure to leave current page!');
      if (this.flag == true) {
        // this.router.navigate(['../dashboard/bill/home']);
        return true;
      } else {
        return false;
      }
    }
  }
}
