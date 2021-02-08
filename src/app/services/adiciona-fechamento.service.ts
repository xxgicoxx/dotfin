import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Injectable } from '@angular/core';

import { plainToClass } from 'class-transformer';

import { FechamentoModel } from '../models/fechamento';
import { I18nService } from './utils/i18n.service';

@Injectable()
export class AdicionaFechamentoService {
  
  private formGroup: FormGroup;
  private fechamento = new FechamentoModel();

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private i18nService: I18nService
  ) {
    this.formGroup = this.formBuilder.group({
      descricao: [this.fechamento.descricao, Validators.required]
    });
  }

  async dismiss(salvar: boolean) {
    try {
      if (salvar) {
        const fechamentoModel = plainToClass(FechamentoModel, this.formGroup.value);

        return this.modalController.dismiss(fechamentoModel);
      } else {
        return this.modalController.dismiss();
      }
    } catch (error) {
      console.error(error);

      this.i18nService.toast('mensagens.erro');
    }
  }
}
