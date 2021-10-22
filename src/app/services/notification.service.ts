import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private toastr: ToastrService) {}

  showSuccess(title: string, msg: string) {
    this.toastr.success(title, msg);
  }

  showError(title: string, msg: string) {
    this.toastr.error(title, msg);
  }

  showWarning(title: string, msg: string) {
    this.toastr.warning(title, msg);
  }
}
