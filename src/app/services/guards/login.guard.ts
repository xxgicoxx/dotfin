import { CanActivate, UrlTree, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { MenuController } from '@ionic/angular';
import { Injectable } from '@angular/core';

import { I18nService } from '../utils/i18n.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private angularFireAuth: AngularFireAuth,
    private menuController: MenuController,
    private i18nService: I18nService,
    private router: Router
  ) {
    this.menuController.enable(false);
  }

  async canActivate(): Promise<boolean | UrlTree> {
    return new Promise((resolve, reject) => {
      this.angularFireAuth.onAuthStateChanged((usuario: firebase.User) => {
        if (usuario && usuario.emailVerified) {
          this.navegaListaGrupos();
        }

        resolve(true);
      });
    });
  }

  async navegaListaGrupos() {
    try {
      return this.router.navigate(['/lista-grupos']);
    } catch (error) {
      console.error(error);

      this.i18nService.toast('mensagens.erro');
    }
  }
}
