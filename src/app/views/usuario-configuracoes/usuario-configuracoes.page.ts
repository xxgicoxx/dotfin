import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';

import { UsuarioConfiguracoesService } from '../../services/usuario-configuracoes.service';

@Component({
  selector: 'app-usuario-configuracoes',
  templateUrl: './usuario-configuracoes.page.html',
  styleUrls: ['./usuario-configuracoes.page.scss'],
  providers: [ UsuarioConfiguracoesService ]
})
export class UsuarioConfiguracoesPage {

  constructor(
    private service: UsuarioConfiguracoesService,
    private translateService: TranslateService
  ) {
    this.translateService.setDefaultLang('pt-br');
    this.translateService.use('pt-br');
  }
}
