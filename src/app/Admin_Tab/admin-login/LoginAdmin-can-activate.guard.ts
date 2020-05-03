import { Injectable } from '@angular/core';
import { CanActivate,  Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LoginCanActivateGuard implements CanActivate {
  constructor(private router: Router, private toastrService: ToastrService) {}
  canActivate(): boolean {
    if (sessionStorage.getItem('TOKEN') === null || localStorage.getItem('TOKEN') === undefined) {
      this.router.navigate(['/adminLogin']);
      this.toastrService.warning('Please login to continue!', 'Admin Portal');
      return false;
    }
    return true;
  }

}
