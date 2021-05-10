import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlbumComponent } from './album.component';

import { AlbumPageRoutingModule } from './album-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AlbumPageRoutingModule
  ],
  declarations: [AlbumComponent]
})
export class AlbumPageModule {}
