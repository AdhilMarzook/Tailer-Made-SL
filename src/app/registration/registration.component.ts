import { Component, OnInit } from '@angular/core';
import { FirebseService } from '../services/firebase.service';
import{CrudService}from '../services/crud.service'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent  {
  // var fname= document.getElementById("firstName")
  // var fname= document.getElementById("firstName")
 
  message:string="";

  registerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    dob:new FormControl(''),
    email:new FormControl(''),
    phone:new FormControl(''),
    address:new FormControl(''),
    cpassword:new FormControl('')
  });
  
  title = 'Tailor Made SL'
  isSignedIn = false
  constructor(public firebaseService : FirebseService ,private CrudService:CrudService,private fb: FormBuilder ){}
 
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

  
  createuser(){
    let Record:any ={};

    Record = this.registerForm.value;
    

this.CrudService.create_newuser(Record).then(res =>{
 
  

  console.log(res);
 this.message="data save done";
}).catch(error =>{
  console.log(error);
});


  }



}




