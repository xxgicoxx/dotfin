import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';

import { UsuarioLoginService } from '../../services/usuario-login.service';

@Component({
  selector: 'app-usuario-login',
  templateUrl: './usuario-login.page.html',
  styleUrls: ['./usuario-login.page.scss'],
  providers: [ UsuarioLoginService ]
})
export class UsuarioLoginPage {

  constructor(
    private translateService: TranslateService,
    private service: UsuarioLoginService
  ) {
    this.translateService.setDefaultLang('pt-br');
    this.translateService.use('pt-br');
  }
}
