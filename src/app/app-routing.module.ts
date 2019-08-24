import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import {
  AuthGuardService as AuthGuard
} from './services/auth-guard.service';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { VideosComponent } from './pages/videos/videos.component';
import { NewVideoComponent } from './pages/new-video/new-video.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', component: HomeComponent},
      {path: 'videos', component: VideosComponent},
      {path: 'videos/new', component: NewVideoComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
