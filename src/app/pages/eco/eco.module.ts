import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EcoPageRoutingModule } from './eco-routing.module';

import { EcoPage } from './eco.page';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EcoPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [EcoPage]
})
export class EcoPageModule {}
