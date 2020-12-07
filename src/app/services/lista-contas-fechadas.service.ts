import { ModalController } from '@ionic/angular';
import { Injectable } from '@angular/core';

import { plainToClass } from 'class-transformer';

import { ContaFechadaModel } from '../models/conta-fechada';
import { FirebaseService } from './utils/firebase.service';
import { I18nService } from './utils/i18n.service';
import { GrupoModel } from '../models/grupo';

@Injectable()
export class ListaContasFechadasService {

  private contas = new Array<ContaFechadaModel>();

  constructor(
    private modalController: ModalController,
    private firebaseService: FirebaseService,
    private i18nService: I18nService
  ) { }

  async buscaContasFechadas(grupo: GrupoModel) {
    try {
      const contasFechadasReferencia = await this.firebaseService.buscaContasFechadas(grupo.referencia);

      contasFechadasReferencia.onSnapshot((contasFechadas) => {
        contasFechadas.docChanges().forEach(async (change) => {
          if (change.type === 'added') {
            const contaFechadaModel = plainToClass(ContaFechadaModel, change.doc.data());
            this.contas.push(contaFechadaModel);
          }
        });
      });
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
