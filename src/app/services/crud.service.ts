import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public fireservices:AngularFirestore) { }
create_newuser(Record: any){
  console.log("RECORD ",Record)
  return this.fireservices.collection('user').add(Record);


}

create_order(orderRecord:any)
{
  console.log("orderRecord",orderRecord)
return this.fireservices.collection('order').add(orderRecord);

}

create_men(menRecord:any)
{
  console.log("menRecord",menRecord)
  return this.fireservices.collection('menclothes').add(menRecord);

}
}
