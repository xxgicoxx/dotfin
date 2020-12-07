import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';

import { plainToClass } from 'class-transformer';
import { first } from 'rxjs/operators';

import { UsuarioModel } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthResolveService implements Resolve<any> {

  constructor(
    private angularFireAuth: AngularFireAuth
  ) { }

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
    const data = await this.angularFireAuth.authState.pipe(first()).toPromise();

    const usuarioModel = plainToClass(UsuarioModel, {
      ...data.toJSON(),
      ...{ nome: data.displayName },
      ...{ uid: data.uid },
      ...{ verificado: data.emailVerified }
    });

    return usuarioModel;
  }
}
