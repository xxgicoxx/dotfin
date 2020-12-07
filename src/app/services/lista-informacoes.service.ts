import { I18nService } from './utils/i18n.service';
import { ModalController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable()
export class ListaInformacoesService {

  constructor(
    private modalController: ModalController,
    private i18nService: I18nService
  ) { }

  async dismiss() {
    try {
      return this.modalController.dismiss();
    } catch (error) {
      console.error(error);

      this.i18nService.toast('mensagens.erro');
    }
  }
}
