import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarTransactionPage } from './calendar-transaction.page';
import { CalendarTransactionPageRoutingModule } from './calendar-transaction-routing.module';
import {CalendarModule } from "ion2-calendar";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarModule,
    CalendarTransactionPageRoutingModule
  ],
  declarations: [CalendarTransactionPage]
})
export class CalendarTransactionPageModule {}
