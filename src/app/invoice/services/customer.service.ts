import { Injectable } from '@angular/core';
import { Client } from "../models/client";


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customerList: Client[];

  constructor() {
    this.customerList = new Array<Client>();
   }

   addCustomerList(client: Client) {
    this.customerList.push(client);
   }

   getCustomers() {
    return this.customerList;
   }
}
