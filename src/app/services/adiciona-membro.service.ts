import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Injectable } from '@angular/core';

import { plainToClass } from 'class-transformer';

import { I18nService } from './utils/i18n.service';
import { MembroModel } from '../models/membro';

@Injectable()
export class AdicionaMembroService {

  private formGroup: FormGroup;
  private membro = new MembroModel();

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private i18nService: I18nService
  ) {
    this.formGroup = this.formBuilder.group({
      email: [this.membro.email, [Validators.required, Validators.email]]
    });
  }

  async dismiss(salvar: boolean) {
    try {
      if (salvar) {
        const membroModel = plainToClass(MembroModel, this.formGroup.value);

        return this.modalController.dismiss(membroModel);
      } else {
        return this.modalController.dismiss();
      }
    } catch (error) {
      console.error(error);

      this.i18nService.toast('mensagens.erro');
    }
  }
}
