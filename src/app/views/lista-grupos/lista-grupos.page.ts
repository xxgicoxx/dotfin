import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

import { ListaGruposService } from '../../services/lista-grupos.service';

@Component({
  selector: 'app-lista-grupos',
  templateUrl: './lista-grupos.page.html',
  styleUrls: ['./lista-grupos.page.scss'],
  providers: [ ListaGruposService ]
})
export class ListaGruposPage implements OnInit {

  constructor(
    private translateService: TranslateService,
    private service: ListaGruposService
  ) {
    this.translateService.setDefaultLang('pt-br');
    this.translateService.use('pt-br');
  }

  ngOnInit() {
    this.service.buscaGrupos();
  }
}
