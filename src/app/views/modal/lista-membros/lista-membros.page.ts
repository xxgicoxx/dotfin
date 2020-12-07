import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

import { ListaMembrosService } from '../../../services/lista-membros.service';

@Component({
  selector: 'app-lista-membros',
  templateUrl: './lista-membros.page.html',
  styleUrls: ['./lista-membros.page.scss'],
  providers: [ ListaMembrosService ]
})
export class ListaMembrosPage implements OnInit {

  constructor(
    private translateService: TranslateService,
    private service: ListaMembrosService,
    private navParams: NavParams
  ) {
    this.translateService.setDefaultLang('pt-br');
    this.translateService.use('pt-br');
  }

  ngOnInit(): void {
    this.service.buscaMembros(this.navParams.get('grupo'), this.navParams.get('membro'));
  }
}
