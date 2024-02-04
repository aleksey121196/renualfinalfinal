import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import { BagComponent } from './bag/bag.component';
import { Routes } from '@angular/router';

const appRoute:Routes=[
  {path: '',component:HomeComponent},
  {path: 'Home',component:HomeComponent},
  {path: 'Women',component:WomenComponent},
  {path: 'Men',component:MenComponent},
  {path: 'Bag',component:BagComponent},
]
@NgModule({ 
  declarations: [
    AppComponent,
    HomeComponent,
    WomenComponent,
    MenComponent,
    BagComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
