import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';

import { plainToClass } from 'class-transformer';

import { FirebaseService } from './utils/firebase.service';
import { NotificacaoModel } from '../models/notificacao';
import { I18nService } from './utils/i18n.service';
import { UsuarioModel } from '../models/usuario';
import { GrupoModel } from '../models/grupo';

@Injectable()
export class ListaNotificacoesService {

  private notificacoes = new Array<NotificacaoModel>();
  private usuario = new UsuarioModel();

  constructor(
    private alertController: AlertController,
    private firebaseService: FirebaseService,
    private activatedRoute: ActivatedRoute,
    private i18nService: I18nService
  ) { }

  async buscaNotificacoes() {
    try {
      this.usuario = this.activatedRoute.snapshot.data.usuario;

      const notificacoesReferencia = await this.firebaseService.buscaNotificacoes(this.usuario.uid);

      notificacoesReferencia.onSnapshot((notificacoes) => {
        notificacoes.docChanges().forEach(async (change) => {
          if (change.type === 'added') {
            const notificacaoModel = plainToClass(NotificacaoModel, { ...change.doc.data(), ...{ id: change.doc.id } });
            this.notificacoes.push(notificacaoModel);

            if (!change.doc.data().lida){
              change.doc.ref.update({
                lida: true
              });
            }
          }

          if (change.type === 'removed') {
            this.notificacoes = this.notificacoes.filter((notificacao) => notificacao.id !== change.doc.id);
          }
        });
      });
    } catch (error) {
      console.error(error);

      this.i18nService.toast('mensagens.erro');
    }
  }

  async deletaNotificacao(notificacao: string) {
    try {
      return this.firebaseService.deletaNotificacao(this.usuario.uid, notificacao);
    } catch (error) {
      console.error(error);

      this.i18nService.toast('mensagens.erro');
    }
  }

  async exibeNotificacao(notificacao: NotificacaoModel) {
    try {
      const header = notificacao.titulo;

      const buttons = [];
      const inputs = [];

      buttons.push({
        text: 'Fechar',
        role: 'cancel',
        cssClass: 'primary'
      });

      if (notificacao.convite) {
        buttons.push({
          text: 'Aceitar',
          handler: async (e: any) => {
            const grupoModel = plainToClass(GrupoModel, { referencia: notificacao.grupo, nome: e.nome || notificacao.grupoNome });
            this.firebaseService.adicionaGrupo(this.usuario.uid, grupoModel);
          }
        });

        inputs.push({
          name: 'nome',
          type: 'text',
          placeholder: 'Nome',
          value: notificacao.grupoNome
        });
      }

      const alert = await this.alertController.create({
        header,
        message: notificacao.mensagem,
        inputs,
        buttons
      });

      return alert.present();
    } catch (error) {
      console.error(error);

      this.i18nService.toast('mensagens.erro');
    }
  }
}
