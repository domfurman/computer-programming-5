import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../../services/customer.service';
import { Client } from '../../models/client';

@Component({
  selector: 'app-customer-list',
  standalone: false,
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent implements OnInit{

  customerList: Client[] = new Array<Client>

  constructor(
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
     this.customerList = this.customerService.getCustomers();
  }

  
}
