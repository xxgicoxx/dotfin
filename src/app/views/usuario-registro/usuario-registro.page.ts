import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';

import { UsuarioRegistroService } from 'src/app/services/usuario-registro.service';

@Component({
  selector: 'app-usuario-registro',
  templateUrl: './usuario-registro.page.html',
  styleUrls: ['./usuario-registro.page.scss'],
  providers: [ UsuarioRegistroService ]
})
export class UsuarioRegistroPage {

  constructor(
    private translateService: TranslateService,
    private service: UsuarioRegistroService
  ) {
    this.translateService.setDefaultLang('pt-br');
    this.translateService.use('pt-br');
  }
}
