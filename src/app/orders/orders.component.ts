import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../shared/orders.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  coffeeOrder: any;

  constructor(private ordersService:OrdersService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.ordersService.form.value.coffeeOrder = this.coffeeOrder;
    let data = this.ordersService.form.value;
    
   this.ordersService.createCoffeeOrder(data)
       .then(res => {
           /*do something here....
           maybe clear the form or give a success message*/
       });

}
}
