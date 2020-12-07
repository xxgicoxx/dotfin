import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';

import { plainToClass } from 'class-transformer';
import { first } from 'rxjs/operators';

import { FirebaseService } from '../utils/firebase.service';
import { MembroModel } from 'src/app/models/membro';

@Injectable({
  providedIn: 'root'
})
export class MembroResolveService implements Resolve<any> {

  constructor(
    private angularFireAuth: AngularFireAuth,
    private firebaseService: FirebaseService
  ) { }

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
    const data = await this.angularFireAuth.authState.pipe(first()).toPromise();
    const membroReferencia = await this.firebaseService.buscaMembro(route.queryParams.referencia, data.email);
    const membroModel = plainToClass(MembroModel, (await membroReferencia.get()).data());

    return membroModel;
  }
}
