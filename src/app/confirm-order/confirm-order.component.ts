import { Component, OnInit } from '@angular/core';
import { FirebseService } from '../services/firebase.service';
import{CrudService}from '../services/crud.service'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.scss']
})
export class ConfirmOrderComponent implements OnInit {

  message:string="";

order=new FormGroup({
  material: new FormControl(''),
  collarsize:new FormControl(''),
  chestsize:new FormControl(''),
  length:new FormControl('')

})
  constructor(public  FirebseService: FirebseService , private CrudService:CrudService,private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  
//   userorder(){
//     let orderRecord:any ={};

//     orderRecord = this.order.value;
    

// this.CrudService.create_order(orderRecord).then(res =>{
 
  

//   console.log(res);
//  this.message="data save done";
// }).catch(error =>{
//   console.log(error);
// });
//   }
}
