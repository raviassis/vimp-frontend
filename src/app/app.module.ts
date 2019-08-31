import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { HttpInterceptorModule } from './interceptors/http-interceptor.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HeaderComponent } from './layouts/main-layout/header/header.component';
import { SideBarComponent } from './layouts/main-layout/side-bar/side-bar.component';
import { VideosComponent } from './pages/videos/videos.component';
import { NewVideoComponent } from './pages/new-video/new-video.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MainLayoutComponent,
    HeaderComponent,
    SideBarComponent,
    VideosComponent,
    NewVideoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpInterceptorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
