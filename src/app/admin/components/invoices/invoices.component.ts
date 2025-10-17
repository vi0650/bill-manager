import { Component, Input } from '@angular/core';
import { Admins } from '../../../core/models/admin.model';
import { NbDialogService } from '@nebular/theme';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';

@Component({
  selector: 'invoices',
  standalone: false,
  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.scss'
})
export class InvoicesComponent {

  constructor(private invoicedialogService:NbDialogService){
  }

  @Input() Admin:Admins[] = []

  openAddInvoiceDialog(){
    this.invoicedialogService.open(AddInvoiceComponent)
  }

}
