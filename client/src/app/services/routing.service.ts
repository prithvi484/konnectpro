import { StorageService } from './storage.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
@Injectable()
export class RoutingService {

  constructor(
    private router: Router,
    private jwtHepler: JwtHelper,
    private storageService: StorageService) { }

  goToDashboard() {
    const token = this.storageService.getObject('access_token');
    if (token) {
      if (this.jwtHepler.isTokenExpired(token)) {
        //  write logic to get refreshed token
      }
      this.showDashboard();
      return false;
    }
    this.router.navigate(['/']);
    return true;
  }

  showDashboard() {
    const decodedToken = this.decodetoken();
    const userRole = decodedToken.role.replace(/ +/g, '').toLowerCase();
    this.storageService.setObject('userName', decodedToken.userName);
    if (userRole === 'trainingpartner') {
      if (decodedToken.hasFilledRegistrationInfo) {
        this.router.navigate([`${userRole}`]);
      } else {
        this.router.navigate(['/user-registration/trainingpartner']);
      }
    } else {
      this.router.navigate([`${userRole}`]);
    }
  }

  decodetoken() {
    return this.jwtHepler.decodeToken(this.storageService.getObject('access_token'));
  }

  getRolefromToken() {
    const userData = this.jwtHepler.decodeToken(this.storageService.getObject('access_token'));
    return userData.role.replace(/ +/g, '').toLowerCase();
  }
}
