import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';

import { CriaGrupoService } from 'src/app/services/cria-grupo.service';

@Component({
  selector: 'app-cria-grupo',
  templateUrl: './cria-grupo.page.html',
  styleUrls: ['./cria-grupo.page.scss'],
  providers: [ CriaGrupoService ]
})
export class CriaGrupoPage {

  constructor(
    private translateService: TranslateService,
    private service: CriaGrupoService
  ) {
    this.translateService.setDefaultLang('pt-br');
    this.translateService.use('pt-br');
  }
}
