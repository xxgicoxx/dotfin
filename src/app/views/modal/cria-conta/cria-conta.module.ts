import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriaContaPageRoutingModule } from './cria-conta-routing.module';

import { CriaContaPage } from './cria-conta.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CriaContaPageRoutingModule,
    TranslateModule
  ],
  declarations: [CriaContaPage]
})
export class CriaContaPageModule {}
