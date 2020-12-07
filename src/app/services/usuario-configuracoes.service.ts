import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { plainToClass } from 'class-transformer';

import { FirebaseService } from './utils/firebase.service';
import { I18nService } from './utils/i18n.service';
import { UsuarioModel } from '../models/usuario';

@Injectable()
export class UsuarioConfiguracoesService {

  private formGroup: FormGroup;
  private usuario = new UsuarioModel();
  private novaSenha: string = '';

  constructor(
    private firebaseService: FirebaseService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private i18nService: I18nService,
    private router: Router
  ) {
    this.usuario = this.activatedRoute.snapshot.data.usuario;

    this.formGroup = this.formBuilder.group({
      senha: [this.usuario.senha, [Validators.required, Validators.minLength(6)]],
      novaSenha: [this.novaSenha, [Validators.minLength(6)]]
    });
  }

  async salvar() {
    try {
      const usuarioModel = plainToClass(UsuarioModel, this.formGroup.value);

      if (this.formGroup.value.novaSenha) {
        await this.firebaseService.atualizaSenha(usuarioModel.senha, this.formGroup.value.novaSenha);
      }

      this.i18nService.toast('mensagens.usuario.atualizado');

      return;
    } catch (error) {
      console.error(error);

      this.i18nService.toast(error.code || 'mensagens.erro');
    }
  }

  async sair() {
    try {
      await this.firebaseService.sair();
      return this.navegaUsuarioLogin();
    } catch (error) {
      console.error(error);

      this.i18nService.toast('mensagens.erro');
    }
  }

  async navegaUsuarioLogin() {
    try {
      return this.router.navigate(['/usuario-login']);
    } catch (error) {
      console.error(error);

      this.i18nService.toast('mensagens.erro');
    }
  }
}
