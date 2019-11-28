import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { CheckboxesComponent } from './checkboxes/checkboxes.component';
import { FormsModule } from '@angular/forms';
import { LOCALE_ID } from '@angular/core';



@NgModule({
  declarations: [
    AppComponent,
    CheckboxesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule

  ],
  providers: [ { provide: LOCALE_ID, useValue: 'en' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
