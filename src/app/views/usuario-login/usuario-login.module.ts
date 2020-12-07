import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioLoginPageRoutingModule } from './usuario-login-routing.module';

import { UsuarioLoginPage } from './usuario-login.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UsuarioLoginPageRoutingModule,
    TranslateModule
  ],
  declarations: [UsuarioLoginPage]
})
export class LoginPageModule {}
