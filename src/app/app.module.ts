import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExitConfirmationModule } from './exit-confirmation/exit-confirmation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExitConfirmationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
