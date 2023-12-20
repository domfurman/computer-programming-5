import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgForm} from '@angular/forms';
import { Client } from '../../models/client';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-customer-form',
  standalone: false,
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.scss'
})
export class CustomerFormComponent {

  client: Client = new Client();

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  onSubmit() {
    console.log(document.getElementById("inputCompanyName"));
    this.customerService.addCustomerList(this.client);
    this.router.navigate(['/invoice/customer-list']);
  }
}
