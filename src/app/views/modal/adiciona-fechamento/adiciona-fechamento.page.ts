import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';

import { AdicionaFechamentoService } from 'src/app/services/adiciona-fechamento.service';

@Component({
  selector: 'app-adiciona-fechamento',
  templateUrl: './adiciona-fechamento.page.html',
  styleUrls: ['./adiciona-fechamento.page.scss'],
  providers: [ AdicionaFechamentoService ]
})
export class AdicionaFechamentoPage {

  constructor(
    private service: AdicionaFechamentoService,
    private translateService: TranslateService
  ) {
    this.translateService.setDefaultLang('pt-br');
    this.translateService.use('pt-br');
  }
}
