import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

import { ListaContasFechadasService } from '../../../services/lista-contas-fechadas.service';

@Component({
  selector: 'app-lista-contas-fechadas',
  templateUrl: './lista-contas-fechadas.page.html',
  styleUrls: ['./lista-contas-fechadas.page.scss'],
  providers: [ ListaContasFechadasService ]
})
export class ListaContasFechadasPage implements OnInit {

  constructor(
    private translateService: TranslateService,
    private service: ListaContasFechadasService,
    private navParams: NavParams
  ) {
    this.translateService.setDefaultLang('pt-br');
    this.translateService.use('pt-br');
  }

  ngOnInit(): void {
    this.service.buscaContasFechadas(this.navParams.get('grupo'));
  }
}
