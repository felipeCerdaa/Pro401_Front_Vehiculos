import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.scss'],
})
export class EncuestaComponent  implements OnInit {
  public medioTransporteDisabled: boolean = true;
  public listaTransportes: string[] = [];
  public listaPublico: string[] = ["Metro", "Micro", "Bus", "Taxi", "Uber", "Colectivo"];
  public listaPrivado: string[] = ["Auto", "Moto", "Otro"];

  constructor() { }

  ngOnInit() {}

  handleChange(e: Event) {
    const eValue = (e.target as HTMLInputElement).value;
    console.log((e.target as HTMLInputElement).value);
    if(eValue == "publico"){
      this.listaTransportes = this.listaPublico;
      this.medioTransporteDisabled =  false;
    }
    else if(eValue == "privadoSinCompartir"){
      this.listaTransportes = this.listaPrivado;
      this.medioTransporteDisabled =  false;
    }
    else if(eValue == "privadoCompartir"){
      this.listaTransportes = this.listaPrivado;
      this.medioTransporteDisabled =  false;
    }
  }
}