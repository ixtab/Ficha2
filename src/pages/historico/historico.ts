import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'historico',
  templateUrl: 'historico.html',

})
export class HistoricoPage {

  imagen : string; 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.imagen = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEfuU8v4pn3n3fR6NLRxBJ2yganPzoFx9hl7iwqx6DC1plU9-Z";
  }
 
}
