import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

import { ListaNotificacoesService } from '../../services/lista-notificacoes.service';

@Component({
  selector: 'app-lista-notificacoes',
  templateUrl: './lista-notificacoes.page.html',
  styleUrls: ['./lista-notificacoes.page.scss'],
  providers: [ ListaNotificacoesService ]
})
export class ListaNotificacoesPage implements OnInit {

  constructor(
    private translateService: TranslateService,
    private service: ListaNotificacoesService
  ) {
    this.translateService.setDefaultLang('pt-br');
    this.translateService.use('pt-br');
  }

  ngOnInit(): void {
    this.service.buscaNotificacoes();
  }
}
