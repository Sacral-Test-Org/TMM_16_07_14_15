import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-part-master-confirmation-dialog',
  templateUrl: './part-master-confirmation-dialog.component.html',
  styleUrls: ['./part-master-confirmation-dialog.component.css']
})
export class PartMasterConfirmationDialogComponent {

  constructor(public dialogRef: MatDialogRef<PartMasterConfirmationDialogComponent>) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
