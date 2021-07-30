import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarTransactionPage } from './calendar-transaction.page';

const routes: Routes = [
  {
    path: '',
    component: CalendarTransactionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarTransactionPageRoutingModule {}
