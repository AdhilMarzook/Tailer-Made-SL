import { Component, OnInit } from '@angular/core';
import { FirebseService } from '../services/firebase.service';
import{CrudService}from '../services/crud.service'


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent  {
  // var fname= document.getElementById("firstName")
  // var fname= document.getElementById("firstName")
 
  fname: string="";
  lname: string ="";
  message:string="";
  
  title = 'Tailor Made SL'
  isSignedIn = false
  constructor(public firebaseService : FirebseService ,private CrudService:CrudService ){}
 
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
    Record.firstname= this.fname;
    Record.lastname=this.lname;
    

this.CrudService.create_newuser(Record).then(res =>{
 
  this.fname="";
  this.lname ="";

  console.log(res);
 this.message="data save done";
}).catch(error =>{
  console.log(error);
});


  }



}




