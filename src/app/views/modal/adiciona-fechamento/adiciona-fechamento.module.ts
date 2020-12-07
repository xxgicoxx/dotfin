import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdicionaFechamentoPageRoutingModule } from './adiciona-fechamento-routing.module';

import { AdicionaFechamentoPage } from './adiciona-fechamento.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AdicionaFechamentoPageRoutingModule,
    TranslateModule
  ],
  declarations: [AdicionaFechamentoPage]
})
export class AdicionaFechamentoPageModule {}
