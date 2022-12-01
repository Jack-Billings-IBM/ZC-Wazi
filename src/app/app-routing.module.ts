import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsHomeComponent } from './details-home/details-home.component';
import { PhoneListHomeComponent } from './phone-list-home/phone-list-home.component';


const routes: Routes = [
  { path: '', component: PhoneListHomeComponent},
  { path: 'phones', component: PhoneListHomeComponent},
  { path: 'phones/:itemID', component: DetailsHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
