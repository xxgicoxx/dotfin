import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { plainToClass } from 'class-transformer';

import { FirebaseService } from './utils/firebase.service';
import { I18nService } from './utils/i18n.service';
import { UsuarioModel } from '../models/usuario';

@Injectable()
export class UsuarioLoginService {

  private formGroup: FormGroup;
  private usuario = new UsuarioModel();

  constructor(
    private alertController: AlertController,
    private firebaseService: FirebaseService,
    private formBuilder: FormBuilder,
    private i18nService: I18nService,
    private router: Router,
  ) {
    this.formGroup = this.formBuilder.group({
      email: [this.usuario.email, [Validators.required, Validators.email]],
      senha: [this.usuario.senha, [Validators.required, Validators.minLength(6)]],
    });
  }

  async login() {
    try {
      const usuarioModel = plainToClass(UsuarioModel, this.formGroup.value);
      const usuario = await this.firebaseService.login(usuarioModel);

      if (!usuario.user.emailVerified) {
        this.alertaVerificacaoEmail();
      }

      return this.navegaListaGrupos();
    } catch (error) {
      console.error(error);

      this.i18nService.toast(error.code || 'mensagens.erro');
    }
  }

  async alertaVerificacaoEmail() {
    const alert = await this.alertController.create({
      header: 'Verificação ✔',
      message: 'Você precisa verificar seu e-mail para utilizar o aplicativo.',
      buttons: [
        {
          text: 'Fechar',
          role: 'cancel'
        }, {
          text: 'Reenviar Email',
          handler: async () => {
            await this.firebaseService.verificacao();
          }
        }
      ]
    });

    await alert.present();
  }


  async navegaListaGrupos() {
    try {
      return this.router.navigate(['/lista-grupos']);
    } catch (error) {
      console.error(error);

      this.i18nService.toast('mensagens.erro');
    }
  }

  async navegaUsuarioRegistro() {
    try {
      return this.router.navigate(['/usuario-registro']);
    } catch (error) {
      console.error(error);

      this.i18nService.toast('mensagens.erro');
    }
  }

  async navegaUsuarioRecuperacao() {
    try {
      return this.router.navigate(['/usuario-recuperacao']);
    } catch (error) {
      console.error(error);

      this.i18nService.toast('mensagens.erro');
    }
  }
}
