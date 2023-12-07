import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EcoPage } from './eco.page';

const routes: Routes = [
  {
    path: '',
    component: EcoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EcoPageRoutingModule {}
