import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExitConfirmationComponent } from './exit-confirmation/exit-confirmation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TMM022_fmb';

  constructor(private dialog: MatDialog) {}

  onExit(): void {
    const dialogRef = this.dialog.open(ExitConfirmationComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.handleExitConfirmation(result);
    });
  }

  handleExitConfirmation(userResponse: boolean): void {
    if (userResponse) {
      window.close();
    }
  }
}