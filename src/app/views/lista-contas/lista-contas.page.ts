import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

import { ListaContasService } from '../../services/lista-contas.service';

@Component({
  selector: 'app-lista-contas',
  templateUrl: './lista-contas.page.html',
  styleUrls: ['./lista-contas.page.scss'],
  providers: [ ListaContasService ]
})
export class ListaContasPage implements OnInit {

  constructor(
    private translateService: TranslateService,
    private service: ListaContasService
  ) {
    this.translateService.setDefaultLang('pt-br');
    this.translateService.use('pt-br');
  }

  ngOnInit() {
    this.service.buscaContas();
  }
}
