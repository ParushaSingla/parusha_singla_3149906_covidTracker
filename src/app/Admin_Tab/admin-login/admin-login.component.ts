import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IAdminDetail } from '@app/shared/models/IAdminDetail';
import { LoginService } from '@app/Core/services/admin-and-news-service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
})
export class AdminLoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private toastrService: ToastrService,
    private route: Router,
    private fb: FormBuilder,
    private loginService: LoginService
  ) {
    console.log('In Admin Construcctor');
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('TOKEN')!==null) {
      this.route.navigate(['adminLogin/addNews']);
    }
  }
  login(form: IAdminDetail) {
    if (this.loginService.validateUser(form)) {
      sessionStorage.setItem('TOKEN', 'token');
      sessionStorage.setItem('username', form.username);
      this.route.navigate(['adminLogin/addNews']);
      this.toastrService.success('Logged in successfully!', 'Admin Portal');
    } else {
      this.toastrService.warning(
        'Please enter valid credentials!',
        'Admin Portal'
      );
    }
  }
}
