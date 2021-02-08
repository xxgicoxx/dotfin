import { Clipboard } from '@ionic-native/clipboard/ngx';
import { ModalController } from '@ionic/angular';
import { Injectable } from '@angular/core';

import { plainToClass } from 'class-transformer';

import { ListaContasFechadasPage } from '../views/modal/lista-contas-fechadas/lista-contas-fechadas.page';
import { AdicionaFechamentoPage } from '../views/modal/adiciona-fechamento/adiciona-fechamento.page';
import { ListaInformacoesPage } from '../views/modal/lista-informacoes/lista-informacoes.page';
import { AdicionaMembroPage } from '../views/modal/adiciona-membro/adiciona-membro.page';
import { ListaMembrosPage } from '../views/modal/lista-membros/lista-membros.page';
import { CriaContaPage } from '../views/modal/cria-conta/cria-conta.page';
import { FirebaseService } from './utils/firebase.service';
import { UtilsService } from './utils/utils.service';
import { I18nService } from './utils/i18n.service';
import { UsuarioModel } from '../models/usuario';
import { ActivatedRoute } from '@angular/router';
import { MembroModel } from '../models/membro';
import { GrupoModel } from '../models/grupo';
import { ContaModel } from '../models/conta';

@Injectable()
export class ListaContasService {

  private contasSnapshot: any;

  private contas = new Array<ContaModel>();
  private usuario = new UsuarioModel();
  private grupo = new GrupoModel();
  private membro = new MembroModel();

  private itens: number = 0;
  private total: number = 0;

  constructor(
    private modalController: ModalController,
    private firebaseService: FirebaseService,
    private activatedRoute: ActivatedRoute,
    private i18nService: I18nService,
    private clipboard: Clipboard,
    private utils: UtilsService
  ) { }

  ngOnDestroy(): void {
    this.contasSnapshot();
  }

  async buscaContas() {
    try {
      this.usuario = this.activatedRoute.snapshot.data.usuario;
      this.membro = this.activatedRoute.snapshot.data.membro;
      this.grupo = plainToClass(GrupoModel, this.activatedRoute.snapshot.queryParams);

      const contasReferencia = await this.firebaseService.buscaContas(this.grupo.referencia);

      this.contasSnapshot = contasReferencia.onSnapshot(async (contas) => {
        contas.docChanges().forEach(async (change) => {
          if (change.type === 'added') {
            this.itens += 1;

            const contaModel = plainToClass(ContaModel, { ...change.doc.data(), ...{ id: change.doc.id } });
            this.contas.push(contaModel);

            if (contaModel.usuario === this.usuario.email && contaModel.tipo === 'desconto') {
              this.total -= contaModel.valorDividido;
            } else if (contaModel.tipo === 'cobranca') {
              if (Object.values(contaModel.membros).includes(this.usuario.email)) {
                this.total += contaModel.valorDividido;
              }
            } else {
              this.total += contaModel.valorDividido;
            }
          }

          if (change.type === 'removed') {
            this.itens = 0;
            this.total = 0;

            this.contas = this.contas.filter((conta) => conta.id !== change.doc.id);

            this.contas.forEach(async (conta) => {
              this.itens += 1;

              if (conta.usuario === this.usuario.email && conta.tipo === 'desconto') {
                this.total -= conta.valorDividido;
              } else if (conta.tipo === 'cobranca') {
                if (Object.values(conta.membros).includes(this.usuario.email)) {
                  this.total += conta.valorDividido;
                }
              } else {
                this.total += conta.valorDividido;
              }
            });
          }
        });
      });
    } catch (error) {
      console.error(error);

      this.i18nService.toast('mensagens.erro');
    }
  }

  async criaConta() {
    try {
      const modal = await this.modalController.create({
        component: CriaContaPage,
        componentProps: {
          grupo: this.grupo
        }
      });

      await modal.present();

      modal.onDidDismiss().then(async (retorno) => {
        if (retorno.data != null) {
          const contaModel: ContaModel = plainToClass(ContaModel, {
            ...retorno.data,
            ...{ usuario: this.usuario.email },
            ...{ usuarioNome: this.usuario.nome }
          });

          this.firebaseService.criaConta(this.grupo.referencia, contaModel);
        }
      });
    } catch (error) {
      console.error(error);

      this.i18nService.toast('mensagens.erro');
    }
  }

  async deletaConta(conta: string) {
    try {
      return this.firebaseService.deletaConta(this.grupo.referencia, conta);
    } catch (error) {
      console.error(error);

      this.i18nService.toast('mensagens.erro');
    }
  }

  async adicionaMembro() {
    try {
      const modal = await this.modalController.create({
        component: AdicionaMembroPage
      });

      await modal.present();

      modal.onDidDismiss().then(async (retorno) => {
        if (retorno.data != null) {
          this.firebaseService.adicionaMembro(this.grupo.referencia, retorno.data.email);
        }
      });
    } catch (error) {
      console.error(error);

      this.i18nService.toast('mensagens.erro');
    }
  }

  async adicionaFechamento() {
    try {
      const modal = await this.modalController.create({
        component: AdicionaFechamentoPage
      });

      await modal.present();

      await modal.onDidDismiss().then(async (retorno) => {
        if (retorno.data != null) {
          return this.firebaseService.adicionaFechamento(this.grupo.referencia, retorno.data.descricao);
        }
      });
    } catch (error) {
      console.error(error);

      this.i18nService.toast('mensagens.erro');
    }
  }

  async listaInformacoes() {
    try {
      const modal = await this.modalController.create({
        component: ListaInformacoesPage,
        componentProps: {
          nome: this.grupo.nome,
          total: this.utils.toReal(this.total),
          itens: this.itens
        }
      });

      await modal.present();
    } catch (error) {
      console.error(error);

      this.i18nService.toast('mensagens.erro');
    }
  }

  async listaMembros() {
    try {
      const modal = await this.modalController.create({
        component: ListaMembrosPage,
        componentProps: {
          membro: this.membro,
          grupo: this.grupo
        }
      });

      await modal.present();
    } catch (error) {
      console.error(error);

      this.i18nService.toast('mensagens.erro');
    }
  }

  async listaContasFechadas() {
    try {
      const modal = await this.modalController.create({
        component: ListaContasFechadasPage,
        componentProps: {
          grupo: this.grupo
        }
      });

      await modal.present();
    } catch (error) {
      console.error(error);

      this.i18nService.toast('mensagens.erro');
    }
  }

  async copiaCodigoGrupo() {
    try {
      await this.clipboard.copy(`${this.grupo.referencia}`);

      this.i18nService.toast('mensagens.grupo.copiado');
    } catch (error) {
      console.error(error);

      this.i18nService.toast('mensagens.erro');
    }
  }
}
