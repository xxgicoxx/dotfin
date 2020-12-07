import { CanActivate, UrlTree, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';

import { I18nService } from '../utils/i18n.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private angularFireAuth: AngularFireAuth,
    private i18nService: I18nService,
    private router: Router
  ) { }

  async canActivate(): Promise<boolean | UrlTree> {
    return new Promise((resolve, reject) => {
      this.angularFireAuth.onAuthStateChanged((user: firebase.User) => {
        if (user && user.emailVerified) {
          resolve(true);
        } else {
          this.navegaUsuarioLogin();

          resolve(false);
        }
      });
    });
  }

  async navegaUsuarioLogin() {
    try {
      return this.router.navigate(['/usuario-login']);
    } catch (error) {
      console.error(error);

      this.i18nService.toast('mensagens.erro');
    }
  }
}
