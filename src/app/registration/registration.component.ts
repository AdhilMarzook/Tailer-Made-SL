import { Component, OnInit } from '@angular/core';
import { FirebseService } from '../services/firebase.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent  {
  title = 'Tailor Made SL'
  isSignedIn = false
  constructor(public firebaseService : FirebseService ){}
 
  ngOnit(){
    if(localStorage.getItem('user')!== null)
    this.isSignedIn=true
    else
    this.isSignedIn = false
  }
  async onSignup(email:string,password:string){
    await this.firebaseService.signup(email,password)
    if (this.firebaseService.isLoggedIn)
    this.isSignedIn = true 
    

  }
  async onSignin(email:string,password:string){
   
    await this.firebaseService.signin(email,password)
    if (this.firebaseService.isLoggedIn)
    this.isSignedIn = true 
   
    
    
  }
  handleLogout(){
    this.isSignedIn= false


  }


}
