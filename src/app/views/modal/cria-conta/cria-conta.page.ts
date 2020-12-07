import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

import { CriaContaService } from 'src/app/services/cria-conta.service';

@Component({
  selector: 'app-cria-conta',
  templateUrl: './cria-conta.page.html',
  styleUrls: ['./cria-conta.page.scss'],
  providers: [ CriaContaService ]
})
export class CriaContaPage implements OnInit {

  constructor(
    private translateService: TranslateService,
    private service: CriaContaService,
    private navParams: NavParams
  ) {
    this.translateService.setDefaultLang('pt-br');
    this.translateService.use('pt-br');
  }

  ngOnInit() {
    this.service.buscaMembros(this.navParams.get('grupo'));
  }
}
