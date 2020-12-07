import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Injectable } from '@angular/core';

import { plainToClass } from 'class-transformer';

import { I18nService } from './utils/i18n.service';
import { GrupoModel } from '../models/grupo';

@Injectable()
export class AdicionaGrupoService {

  private formGroup: FormGroup;
  private grupo = new GrupoModel();

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private i18nService: I18nService,
  ) {
    this.formGroup = this.formBuilder.group({
      nome: [this.grupo.nome, Validators.required],
      referencia: [this.grupo.referencia, Validators.required]
    });
  }

  async dismiss(salvar: boolean) {
    try {
      if (salvar) {
        const grupoModel = plainToClass(GrupoModel, this.formGroup.value);

        return this.modalController.dismiss(grupoModel);
      } else {
        return this.modalController.dismiss();
      }
    } catch (error) {
      console.error(error);

      this.i18nService.toast('mensagens.erro');
    }
  }
}
