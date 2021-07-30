import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import {CalendarModal, CalendarComponentOptions } from "ion2-calendar";
import * as moment from 'moment'
import {CreateTransactionPage} from "../create-transaction/create-transaction.page"

@Component({
  selector: 'app-calendar-transaction',
  templateUrl: './calendar-transaction.page.html',
  styleUrls: ['./calendar-transaction.page.scss'],
})
export class CalendarTransactionPage{
  date: string;
  type: 'string';
  optionsSingle: CalendarComponentOptions = {
    from: new Date("01/01/"+new Date().getFullYear()),
    color: 'danger',
    pickMode: 'single',
    monthPickerFormat: [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre'
    ],
    monthFormat: 'MMMM YYYY',
    weekdays: [
      'D',
      'L',
      'M',
      'X',
      'J',
      'V',
      'S'
    ],
    weekStart: 1
  };

  constructor( public modalCtrl: ModalController,private navCtrl: NavController) { moment.locale('es-es'); }
 
  onChange($event) {
    console.log($event["_i"]);
    this.createTraining($event["_i"]);
  }
 
  async createTraining(fecha) {
    localStorage.setItem("fecha_seleccionada", fecha);
    let CreateTrainingModal =  await this.modalCtrl.create({
      component: CreateTransactionPage
    });
    CreateTrainingModal.onDidDismiss().then(() => {});

    await CreateTrainingModal.present();
  }
  vertransactions(){
    this.navCtrl.navigateRoot('/home');
  }

}
