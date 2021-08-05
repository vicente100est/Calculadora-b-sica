import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent {
  operador1: number = 0;
  operador2: number = 0;
  suma: number = 0;

  operacionSuma(){
    this.suma = (this.operador1+this.operador2);
    return this.suma;
  }

}
