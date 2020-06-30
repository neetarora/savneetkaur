import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';


@NgModule({
  imports: [BrowserModule, ReactiveFormsModule,FormsModule],
  declarations: [ AppComponent],
  providers: [],
  bootstrap:     [AppComponent]
})

export class AppModule { }