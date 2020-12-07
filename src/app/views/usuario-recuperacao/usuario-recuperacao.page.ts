import { UsuarioRecuperacaoService } from 'src/app/services/usuario-recuperacao.service';
import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario-recuperacao',
  templateUrl: './usuario-recuperacao.page.html',
  styleUrls: ['./usuario-recuperacao.page.scss'],
  providers: [ UsuarioRecuperacaoService ]
})
export class UsuarioRecuperacaoPage {

  constructor(
    private service: UsuarioRecuperacaoService,
    private translateService: TranslateService
  ) {
    this.translateService.setDefaultLang('pt-br');
    this.translateService.use('pt-br');
  }
}
