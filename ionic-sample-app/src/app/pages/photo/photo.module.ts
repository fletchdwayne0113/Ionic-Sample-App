import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PhotoComponent } from './photo.component';

import { PhotoPageRoutingModule } from './photo-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PhotoPageRoutingModule
  ],
  declarations: [PhotoComponent]
})
export class PhotoPageModule {}
