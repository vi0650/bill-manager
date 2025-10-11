import { Component } from '@angular/core';
import { Admins } from '../../../core/models/admin.model';

@Component({
  selector: 'app-invoice-list',
  standalone: false,
  templateUrl: './invoice-list.component.html',
  styleUrl: './invoice-list.component.css'
})
export class InvoiceListComponent {

  Admin: Admins[] = [{ shopName: 'Haldiram', title: 'Snacks' },
  { shopName: 'Bikaji', title: 'Snacks' }]

}
