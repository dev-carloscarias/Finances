import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Transaction } from '../models/Transaction';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.page.html',
  styleUrls: ['./create-transaction.page.scss'],
})
export class CreateTransactionPage{
  tipo:number;
  cantidad:number;
  detalle:string="";
  origen:string="";

  constructor(private modalController: ModalController,
    private firestoreService: FirestoreService,
    private navCtrl: NavController) { }
  
  ngOnInit() {}
  async saveTransaction(){
    let transaction = {} as Transaction;
    transaction.fecha = +localStorage.getItem("fecha_seleccionada");
    transaction.cantidad = this.cantidad;
    transaction.detalle = this.detalle;
    transaction.tipo = this.tipo;
    transaction.source= this.origen;
    this.firestoreService.insertar("transactions", transaction).then(() => {
      console.log('Transaccion creada correctamente!');
      this.dismiss();
      this.navCtrl.navigateRoot('/home');
    }, (error) => {
      console.error(error);
    });
    this.dismiss();
    this.navCtrl.navigateRoot('/home');
    
  }
  dismiss() {
    this.modalController.dismiss();
  }
}
