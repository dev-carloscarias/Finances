import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {Transaction } from '../models/Transaction';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private angularFirestore: AngularFirestore) { }

  public getTransaction() {
    //"MM/DD/YYY"
    return this.angularFirestore.collection<Transaction>("transactions", ref => ref.where("fecha", "==", new Date().setHours(0,0,0,0))).valueChanges();
  }

  public getTransactionbyDate(date) {
    //"MM/DD/YYY"
    return this.angularFirestore.collection<Transaction>("transactions", ref => ref.where("fecha", "==", date.setHours(0,0,0,0))).valueChanges();
  }

  public insertar(coleccion, datos){
    return this.angularFirestore.collection(coleccion).add(datos);
  }
}
