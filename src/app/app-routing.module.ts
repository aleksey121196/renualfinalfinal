import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BagComponent } from './bag/bag.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';

const routes: Routes = [
  {path: 'Home',component:HomeComponent},
  {path: 'Women',component:WomenComponent},
  {path: 'Men',component:MenComponent},
  {path: 'Bag',component:BagComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
