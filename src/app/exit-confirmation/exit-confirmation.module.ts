import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { ExitConfirmationComponent } from './exit-confirmation.component';

@NgModule({
  declarations: [
    ExitConfirmationComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [
    ExitConfirmationComponent
  ]
})
export class ExitConfirmationModule { }
