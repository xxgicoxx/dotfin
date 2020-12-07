import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

import { ListaContasPageRoutingModule } from './lista-contas-routing.module';
import { ListaContasPage } from './lista-contas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaContasPageRoutingModule,
    TranslateModule
  ],
  declarations: [ListaContasPage]
})
export class ListaContasPageModule {}
