import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { plainToClass } from 'class-transformer';

import { FirebaseService } from './utils/firebase.service';
import { I18nService } from './utils/i18n.service';
import { UsuarioModel } from '../models/usuario';

@Injectable()
export class UsuarioRegistroService {

  private formGroup: FormGroup;
  private usuario = new UsuarioModel();

  constructor(
    private firebaseService: FirebaseService,
    private formBuilder: FormBuilder,
    private i18nService: I18nService,
    private router: Router
  ) {
    this.formGroup = this.formBuilder.group({
      nome: [this.usuario.nome, Validators.required],
      email: [this.usuario.email, [Validators.required, Validators.email]],
      senha: [this.usuario.senha, [Validators.required, Validators.minLength(6)]],
    });
  }

  async registrar() {
    try {
      const usuarioModel = plainToClass(UsuarioModel, this.formGroup.value);
      await this.firebaseService.criaUsuario(usuarioModel);

      return this.navegaUsuarioLogin();
    } catch (error) {
      console.error(error);

      this.i18nService.toast(error.code || 'mensagens.erro');
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
