import { TranslateService } from '@ngx-translate/core';
import { NavParams } from '@ionic/angular';
import { Component } from '@angular/core';

import { ListaInformacoesService } from 'src/app/services/lista-informacoes.service';

@Component({
  selector: 'app-lista-informacoes',
  templateUrl: './lista-informacoes.page.html',
  styleUrls: ['./lista-informacoes.page.scss'],
  providers: [ ListaInformacoesService ]
})
export class ListaInformacoesPage {

  private nome = '';
  private total = '';
  private itens = 0;

  constructor(
    private translateService: TranslateService,
    private service: ListaInformacoesService,
    private navParams: NavParams
  ) {
    this.translateService.setDefaultLang('pt-br');
    this.translateService.use('pt-br');

    this.nome = this.navParams.get('nome');
    this.total = this.navParams.get('total');
    this.itens = this.navParams.get('itens');
  }
}
