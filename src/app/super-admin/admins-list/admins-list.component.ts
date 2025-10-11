import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { Admins } from '../../core/models/admin.model';

@Component({
  selector: 'admins-list',
  standalone: false,
  templateUrl: './admins-list.component.html',
  styleUrl: './admins-list.component.scss',
})
export class AdminsListComponent {

  constructor(private dialogService: NbDialogService, private router: Router, private route: ActivatedRoute) {
  }

  Admin: Admins[] = [
    { shopName: 'Haldiram', title: 'Snacks' },
    { shopName: 'Bikaji', title: 'Snacks' }
  ]

  openAddAdminDialog() {
    this.router.navigate(['add-admin'], { relativeTo: this.route });
    this.dialogService.open(AddAdminComponent).onClose.subscribe(() => {
      this.router.navigate(['./'], { relativeTo: this.route });
    });
}
}