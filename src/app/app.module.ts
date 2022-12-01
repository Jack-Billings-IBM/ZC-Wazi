import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { DetailsHomeComponent } from './details-home/details-home.component';
import { PhoneListHomeComponent } from './phone-list-home/phone-list-home.component';
import { HeaderComponent } from './header/header.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    PhoneDetailComponent,
    PhoneListComponent,
    DetailsHomeComponent,
    PhoneListHomeComponent,
    HeaderComponent,
    OrderDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
