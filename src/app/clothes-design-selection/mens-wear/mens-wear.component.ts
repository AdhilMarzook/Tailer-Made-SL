import { Component, OnInit } from '@angular/core';

import { FirebseService } from 'src/app/services/firebase.service';

import { CrudService } from 'src/app/services/crud.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mens-wear',
  templateUrl: './mens-wear.component.html',
  styleUrls: ['./mens-wear.component.scss']
})
export class MensWearComponent implements OnInit {

  message:string="";
  menaddop=new FormGroup({
    Shirt01: new FormControl(''),
    Shirt02: new FormControl(''),
    Shirt03: new FormControl('')




  })


  constructor(public FirebseService:FirebseService , private CrudService:CrudService,private fb: FormBuilder) { }

  ngOnInit(): void {


  }
 menadd(){
    let menRecord:any ={};

    menRecord = this. menaddop.value;
    

this.CrudService.create_men(menRecord).then(res =>{
 
  

  console.log(res);
 this.message="data save done";
}).catch(error =>{
  console.log(error);
});
  }
  

}
