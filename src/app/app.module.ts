import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ContactComponent } from './contact/contact.component';
import { ClothesDesignSelectionComponent } from './clothes-design-selection/clothes-design-selection.component';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LadiesWearComponent } from './clothes-design-selection/ladies-wear/ladies-wear.component';
import { MensWearComponent } from './clothes-design-selection/mens-wear/mens-wear.component';
import { BabiesWearComponent } from './clothes-design-selection/babies-wear/babies-wear.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    AboutComponent,
    AdminPanelComponent,
    ContactComponent,
    ClothesDesignSelectionComponent,
    ConfirmOrderComponent,
    NavbarComponent,
    LadiesWearComponent,
    MensWearComponent,
    BabiesWearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
