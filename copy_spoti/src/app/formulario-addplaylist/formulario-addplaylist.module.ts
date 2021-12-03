import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioAddplaylistPageRoutingModule } from './formulario-addplaylist-routing.module';

import { FormularioAddplaylistPage } from './formulario-addplaylist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioAddplaylistPageRoutingModule
  ],
  declarations: [FormularioAddplaylistPage]
})
export class FormularioAddplaylistPageModule {}
