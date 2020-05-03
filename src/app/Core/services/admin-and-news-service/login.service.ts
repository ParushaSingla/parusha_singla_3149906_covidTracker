import { Injectable } from '@angular/core';
import { IAdminDetail } from '@app/shared/models/IAdminDetail';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
   apiUrl = 'api/adminDetail';
   loginData: IAdminDetail[];

  constructor(private http: HttpClient) {
    this.getUsers();
  }

  getUsers() {
    return this.http.get<IAdminDetail[]>(this.apiUrl).subscribe((data) => {
      this.loginData = data;
    });
  }

  validateUser(user: IAdminDetail): boolean {
    let validUser = false;
    if (
      this.loginData.findIndex(
        (admin) =>
          user.username.toLowerCase() === admin.username.toLowerCase() &&
          user.password === admin.password
      ) > -1
    ) {
      validUser = true;
    }
    return validUser;
  }
}
