import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { ModalController, NavController } from '@ionic/angular';
import {DateModel} from '../models/Date';
import { Transaction } from '../models/Transaction';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  dates:Array<DateModel>;
  days = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
  months = ['Enero', 'Febrero', 'Marzo', 'Abril','Mayo','Junio', 'Julio', 'Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  month:string;
  empty:boolean;
  transactions:Array<Transaction>;
  slideOpts = {
    initialSlide: new Date().getDate()-1,
    speed: 400
  };
  constructor(private firestoreService: FirestoreService,
    public modalController: ModalController,
    private navCtrl: NavController) {}

  async ngOnInit() {
    console.log(new Date().setHours(0,0,0,0))
    this.firestoreService.getTransaction().subscribe((val)=>{
      console.log(val);
      this.transactions = val;
      this.transactions.concat(val);
      this.transactions.concat(val);
      console.log(this.transactions);
      if(this.transactions==undefined){
        this.empty=true;
      }
    });

    let today = new Date();
    let startDate = new Date(today.getFullYear(), today.getMonth(), 1);
    let endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0, 23, 59, 59);
    this.dates = new Array<DateModel>();
    let aux_dt = startDate;
    let dateobj:DateModel;
    while (aux_dt <= endDate) {
      dateobj = new DateModel();
      dateobj.name_day = this.days[aux_dt.getDay()];
      dateobj.numbe_day = aux_dt.getDate().toString();
      this.dates.push(dateobj);
      aux_dt.setDate(aux_dt.getDate() + 1);
    }
    this.month = this.months[today.getMonth()];
  }

  getTransactionbyDate(date){
    let today = new Date();
    this.firestoreService.getTransactionbyDate(new Date(today.getFullYear(), today.getMonth(),parseInt(date.numbe_day))).subscribe((val)=>{
      this.transactions = val;
      console.log(this.transactions);
      if(this.transactions==undefined){
        this.empty=true;
      }
    });
  }

  creartransaction(){
    this.navCtrl.navigateRoot('/calendar-transaction');
  }
}
