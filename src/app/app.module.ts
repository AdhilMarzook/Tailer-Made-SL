import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSliderModule } from '@angular/material/slider';
import{FormsModule}from '@angular/forms';
import{AngularFireModule}from '@angular/fire/compat';
import {MatDatepickerModule} from '@angular/material/datepicker';
// import { AngularFirestoreModule } from "@angular/fire/firestore";
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { ReactiveFormsModule } from "@angular/forms";

import{CrudService }from './services/crud.service'






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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations;
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { FirebseService } from './services/firebase.service';
import { OrdersComponent } from './orders/orders.component';
import { OrderListComponent } from './order-list/order-list.component';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { AdminUserOrderComponent } from './admin-user-order/admin-user-order.component';
import { NewconfirmComponent } from './newconfirm/newconfirm.component';
// import { OrdersService } from "./shared/orders.service";



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
    BabiesWearComponent,
    OrdersComponent,
    OrderListComponent,
    AdminAddComponent,
    AdminUserOrderComponent,
    NewconfirmComponent
    
  ],
  imports: [
    BrowserModule,
   
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    
    
    MatRippleModule,
    
    // AngularFireModule.initializeApp(environment.firebase),
   
   

    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCVVQ8sTlrFXebAbfGNhFuhvNixd2O4d5I",
      authDomain: "tailormadesl.firebaseapp.com",
      projectId: "tailormadesl",
      storageBucket: "tailormadesl.appspot.com",
      messagingSenderId: "114015800258",
      appId: "1:114015800258:web:915abf7ec7d5b7380d245b"
    }),
    MatDatepickerModule,
    provideFirestore(() => getFirestore()),
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [FirebseService,CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
