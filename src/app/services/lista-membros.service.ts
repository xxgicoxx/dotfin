import { ModalController } from '@ionic/angular';
import { Injectable } from '@angular/core';

import { plainToClass } from 'class-transformer';

import { FirebaseService } from './utils/firebase.service';
import { I18nService } from './utils/i18n.service';
import { MembroModel } from '../models/membro';
import { GrupoModel } from '../models/grupo';

@Injectable()
export class ListaMembrosService {

  private membro = new MembroModel();
  private membros = new Array<MembroModel>();
  private grupo = new GrupoModel();

  constructor(
    private modalController: ModalController,
    private firebaseService: FirebaseService,
    private i18nService: I18nService
  ) { }

  async buscaMembros(grupo: GrupoModel, membro: MembroModel) {
    try {
      this.membro = membro;
      this.grupo = grupo;

      const membrosReferencia = await this.firebaseService.buscaMembros(this.grupo.referencia);

      membrosReferencia.onSnapshot((membros) => {
        membros.docChanges().forEach(async (change) => {
          if (change.type === 'added') {
            const membroModel = plainToClass(MembroModel, { ...change.doc.data(), ...{ email: change.doc.id } });
            this.membros.push(membroModel);
          }

          if (change.type === 'removed') {
            this.membros = this.membros.filter((e) => e.email !== change.doc.id);
          }
        });
      });
    } catch (error) {
      console.error(error);

      this.i18nService.toast('mensagens.erro');
    }
  }

  async deletaMembro(membro: string) {
    try {
      return this.firebaseService.deletaMembro(this.grupo.referencia, membro);
    } catch (error) {
      console.error(error);

      this.i18nService.toast('mensagens.erro');
    }
  }

  async dismiss() {
    try {
      return this.modalController.dismiss();
    } catch (error) {
      console.error(error);

      this.i18nService.toast('mensagens.erro');
    }
  }
}
