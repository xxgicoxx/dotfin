import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Injectable } from '@angular/core';

import { plainToClass } from 'class-transformer';

import { AdicionaGrupoPage } from '../views/modal/adiciona-grupo/adiciona-grupo.page';
import { CriaGrupoPage } from '../views/modal/cria-grupo/cria-grupo.page';
import { FirebaseService } from './utils/firebase.service';
import { I18nService } from './utils/i18n.service';
import { UsuarioModel } from '../models/usuario';
import { GrupoModel } from '../models/grupo';

@Injectable()
export class ListaGruposService {

  private gruposSnapshot: any;

  private grupos = new Array<GrupoModel>();
  private usuario = new UsuarioModel();

  constructor(
    private modalController: ModalController,
    private firebaseService: FirebaseService,
    private activatedRoute: ActivatedRoute,
    private i18nService: I18nService,
    private router: Router
  ) { }

  ngOnDestroy(): void {
    this.gruposSnapshot();
  }

  async buscaGrupos() {
    try {
      this.usuario = this.activatedRoute.snapshot.data.usuario;

      const gruposReferencia = await this.firebaseService.buscaGrupos(this.usuario.uid);

      this.gruposSnapshot = gruposReferencia.onSnapshot((grupos) => {
        grupos.docChanges().forEach(async (change) => {
          if (change.type === 'added') {
            const grupoModel = plainToClass(GrupoModel, { ...change.doc.data(), ...{ id: change.doc.id } });
            this.grupos.push(grupoModel);
          }

          if (change.type === 'removed') {
            this.grupos = this.grupos.filter((grupo) => grupo.id !== change.doc.id);
          }
        });
      });
    } catch (error) {
      console.error(error);

      this.i18nService.toast('mensagens.erro');
    }
  }

  async deletaGrupo(grupo: string) {
    try {
      return this.firebaseService.deletaGrupo(this.usuario.uid, grupo);
    } catch (error) {
      console.error(error);

      this.i18nService.toast('mensagens.erro');
    }
  }

  async criaGrupo() {
    try {
      const modal = await this.modalController.create({
        component: CriaGrupoPage
      });

      await modal.present();

      modal.onDidDismiss().then(async (retorno) => {
        if (retorno.data != null) {
          this.firebaseService.criaGrupo(this.usuario.uid, this.usuario.email, retorno.data);
        }
      });
    } catch (error) {
      console.error(error);

      this.i18nService.toast('mensagens.erro');
    }
  }

  async adicionaGrupo() {
    try {
      const modal = await this.modalController.create({
        component: AdicionaGrupoPage
      });

      await modal.present();

      modal.onDidDismiss().then(async (retorno) => {
        if (retorno.data != null) {
          this.firebaseService.adicionaGrupo(this.usuario.uid, retorno.data);
        }
      });
    } catch (error) {
      console.error(error);

      this.i18nService.toast('mensagens.erro');
    }
  }

  async navegaListaContas(referencia: string, nome: string) {
    try {
      const extras: NavigationExtras = {
        queryParams: {
          referencia,
          nome
        }
      };

      return this.router.navigate(['/lista-contas'], extras);
    } catch (error) {
      console.error(error);

      this.i18nService.toast('mensagens.erro');
    }
  }
}
