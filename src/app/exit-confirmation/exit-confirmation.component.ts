import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-exit-confirmation',
  templateUrl: './exit-confirmation.component.html',
  styleUrls: ['./exit-confirmation.component.css']
})
export class ExitConfirmationComponent {

  constructor(private dialogRef: MatDialogRef<ExitConfirmationComponent>) { }

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}