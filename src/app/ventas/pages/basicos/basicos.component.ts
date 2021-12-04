import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'rolando';
  nombreUpper: string = 'ROLANDO';
  nombreCompleto: string = 'RolaNdo GUerra';

  fecha: Date = new Date();

}
