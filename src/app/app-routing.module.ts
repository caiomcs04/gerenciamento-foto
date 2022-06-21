import { HomeComponent } from './home/home.component';
import { SignupComponent } from './home/signup/signup.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiginComponent } from './home/sigin/sigin.component';
import { AuthGuard } from './core/services/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: SiginComponent },
      { path: 'signup', component: SignupComponent },
    ],
  },

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
