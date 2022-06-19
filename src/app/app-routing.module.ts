import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiginComponent } from './home/sigin/sigin.component';

const routes: Routes = [
  { path: '', component: SiginComponent },

  //em rotas ao passar o : ele recebe uma variavel
  //Resolver
  {
    path: 'user/:userName',
    component: PhotoListComponent,
    resolve: { photos: PhotoListResolver },
  },
  { path: 'photoform', component: PhotoFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
