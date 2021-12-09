import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule,Routes}from '@angular/router'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const mypath:Routes=[
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},

    
]





@NgModule({
  declarations: [

    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(mypath)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
