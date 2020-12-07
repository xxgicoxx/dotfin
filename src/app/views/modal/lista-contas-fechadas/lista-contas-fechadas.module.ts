import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaContasFechadasPageRoutingModule } from './lista-contas-fechadas-routing.module';

import { ListaContasFechadasPage } from './lista-contas-fechadas.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaContasFechadasPageRoutingModule,
    TranslateModule
  ],
  declarations: [ListaContasFechadasPage]
})
export class ListaContasFechadasPageModule {}
