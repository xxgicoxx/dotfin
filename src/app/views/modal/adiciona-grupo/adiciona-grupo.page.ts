import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';

import { AdicionaGrupoService } from 'src/app/services/adiciona-grupo.service';

@Component({
  selector: 'app-adiciona-grupo',
  templateUrl: './adiciona-grupo.page.html',
  styleUrls: ['./adiciona-grupo.page.scss'],
  providers: [ AdicionaGrupoService ]
})
export class AdicionaGrupoPage {

  constructor(
    private translateService: TranslateService,
    private service: AdicionaGrupoService
  ) {
    this.translateService.setDefaultLang('pt-br');
    this.translateService.use('pt-br');
  }
}
