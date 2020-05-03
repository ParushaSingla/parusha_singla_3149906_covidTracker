import { of } from 'rxjs';
import { LoginService } from '../services/admin-and-news-service/login.service';
import { IAdminDetail } from '@app/shared/models/IAdminDetail';

export function mockAdminDataService():LoginService{
  const service = jasmine.createSpyObj('LoginService',['validateUser','getUsers']);
  service.validateUser.and.returnValue(of(mockValidateUser));
  service.getUsers.and.returnValue(of(mockGetUsers));
  return service;
}
export function mockValidateUser(user: IAdminDetail): boolean {
    let validUser = false;
    let loginData=  {
      id: 1,
      username: 'admin',
      password: 'admin',
    }
    if (user.username.toLowerCase() === loginData.username.toLowerCase() && user.password === loginData.password )
     {
      validUser = true;
    }
    return validUser;

}
export const mockGetUsers :IAdminDetail[]=[{

    id: 1,
    username: 'admin',
    password: 'admin',


}]
