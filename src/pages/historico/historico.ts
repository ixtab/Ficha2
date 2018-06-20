import { MiServidor } from './../../app/MiServidor.service';
import { HistoricoService } from './../../app/historico.service';
import { Historico } from '../../app/historico.model';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'historico',
  templateUrl: 'historico.html',
  providers: [HistoricoService, MiServidor]

})
export class HistoricoPage {

  imagen : string; 
  historico: Historico[];

  ngOnInit() {
    this.buscarFechas();
 }

  constructor(public navCtrl: NavController, public navParams: NavParams, private historico_service: HistoricoService) {
    this.imagen = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEfuU8v4pn3n3fR6NLRxBJ2yganPzoFx9hl7iwqx6DC1plU9-Z"; // imagen del alumno (¿poner enlace en el json?)
  }
 
  buscarFechas(){
  this.historico_service.buscaFechasHttp().subscribe
  (jsonrecibido => this.obtenerFechas(jsonrecibido[0].history));// En el 0 habría que poner el ID del alumno;
  }

  obtenerFechas(jsonrecibido : any){
    this.historico = <Historico[]> jsonrecibido;
  }

}
