import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'photo',
    loadChildren: () => import('./pages/photo/photo.module').then(m => m.PhotoPageModule)
  },
  {
    path: 'album',
    loadChildren: () => import('./pages/album/album.module').then(m => m.AlbumPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
