import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PotentialClientPage } from './potential-client';

@NgModule({
  declarations: [
    PotentialClientPage,
  ],
  imports: [
    IonicPageModule.forChild(PotentialClientPage),
  ],
})
export class PotentialClientPageModule {}
