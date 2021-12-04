import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {
  // i18nSelect
  cliente = {
    nombre: '',
    genero: '',
  }
  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino' : 'invitarla'
  }

  //i18nPlural
  clientes = [
    {
      nombre: 'Susana',
      genero: 'femenino'
    },
    {
      nombre: 'Juan',
      genero: 'masculino'
    },
    {
      nombre: 'Pedro',
      genero: 'masculino'
    },
    {
      nombre: 'María',
      genero: 'femenino'
    }
  ];
  clientesMap = {
    '=0': 'No tenemos ningun cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  constructor() {}

  ngOnInit(): void {
    this.cliente.nombre = this.clientes[0].nombre;
    this.cliente.genero = this.clientes[0].genero;
  }

  cambiarPersona() {
    const rand = Math.floor(Math.random() * this.clientes.length);
    this.cliente.nombre = this.clientes[rand].nombre;
    this.cliente.genero = this.clientes[rand].genero;
  }

  borrarCliente() {
    if(this.clientes.length > 0){
      this.clientes.pop();
    }
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Susana',
    edad: 30,
    direccion: 'Ottawa, Canadá'
  }

  // Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hola mundo');
    }, 3000);
  });
}
