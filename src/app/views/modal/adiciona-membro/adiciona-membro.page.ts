import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';

import { AdicionaMembroService } from 'src/app/services/adiciona-membro.service';

@Component({
  selector: 'app-adiciona-membro',
  templateUrl: './adiciona-membro.page.html',
  styleUrls: ['./adiciona-membro.page.scss'],
  providers: [ AdicionaMembroService ]
})
export class AdicionaMembroPage {

  constructor(
    private translateService: TranslateService,
    private service: AdicionaMembroService
  ) {
    this.translateService.setDefaultLang('pt-br');
    this.translateService.use('pt-br');
  }
}
