import { Component, Input } from '@angular/core';
import { Admins } from '../../../core/models/admin.model';

@Component({
  selector: 'app-invoice-list',
  standalone: false,
  templateUrl: './invoice-list.component.html',
  styleUrl: './invoice-list.component.css'
})
export class InvoiceListComponent {

  @Input() Admin:Admins[] = []

  // Admin: Admins[] = [{ shopName: 'Haldiram', username: 'Snacks', email:'' },
  // { shopName: 'Bikaji', username: 'Snacks' }]

}
