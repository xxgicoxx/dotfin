import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Injectable } from '@angular/core';

import { plainToClass } from 'class-transformer';

import { FirebaseService } from './utils/firebase.service';
import { I18nService } from './utils/i18n.service';
import { MembroModel } from '../models/membro';
import { ContaModel } from '../models/conta';
import { GrupoModel } from '../models/grupo';

@Injectable()
export class CriaContaService {

  private formGroup: FormGroup;
  private conta = new ContaModel();
  private membros = new Array<MembroModel>();

  constructor(
    private modalController: ModalController,
    private firebaseService: FirebaseService,
    private formBuilder: FormBuilder,
    private i18nService: I18nService
  ) {
    this.formGroup = this.formBuilder.group({
      descricao: [this.conta.descricao, Validators.required],
      valor: [this.conta.valor, [Validators.required, Validators.min(0.0001)]],
      quantidade: [this.conta.quantidade, [Validators.required, Validators.min(1)]],
      divisao: [this.conta.divisao, [Validators.required, Validators.min(1)]],
      data: [this.conta.data, Validators.required],
      tipo: [this.conta.tipo, Validators.required],
      membros: [this.conta.membros, Validators.nullValidator]
    });
  }

  async buscaMembros(grupo: GrupoModel) {
    try {
      const membrosReferencia = await this.firebaseService.buscaMembros(grupo.referencia);
      const membros = await membrosReferencia.get();

      membros.docs.forEach(membro => {
        const membroModel = plainToClass(MembroModel, { ...membro.data(), ...{ id: membro.id } });
        this.membros.push(membroModel);
      });
    } catch (error) {
      console.error(error);

      this.i18nService.toast('mensagens.erro');
    }
  }

  async dismiss(salvar: boolean) {
    try {
      if (salvar) {
        const contaModel = plainToClass(ContaModel, this.formGroup.value);

        return this.modalController.dismiss(contaModel);
      } else {
        return this.modalController.dismiss();
      }
    } catch (error) {
      console.error(error);

      this.i18nService.toast('mensagens.erro');
    }
  }
}
