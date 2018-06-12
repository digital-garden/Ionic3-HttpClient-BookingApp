import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AvailableRoomsPage } from './available-rooms';

@NgModule({
  declarations: [
    AvailableRoomsPage,
  ],
  imports: [
    IonicPageModule.forChild(AvailableRoomsPage),
  ],
})
export class AvailableRoomsPageModule {}
