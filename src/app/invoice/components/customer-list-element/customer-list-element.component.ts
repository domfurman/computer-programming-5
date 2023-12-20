import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Client } from '../../models/client';

@Component({
  selector: 'app-customer-list-element',
  standalone: false,
  templateUrl: './customer-list-element.component.html',
  styleUrl: './customer-list-element.component.scss'
})
export class CustomerListElementComponent {
  @Input()
  client: Client = new Client();
}
