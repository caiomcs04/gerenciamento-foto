import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {path:"home", loadChildren:() => import('./home/home.module').then(m => m.HomeModule)},

  // { path: '', component: SiginComponent, canActivate: [AuthGuard] },
  // { path: 'signup', component: SignupComponent},

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
