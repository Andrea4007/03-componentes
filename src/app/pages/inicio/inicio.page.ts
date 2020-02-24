import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
/* para el llenado de la lista crearemos una interfaz y un arreglo */
/* arreglo de componente */
componentes: Componente[] = [
  {
    icon: 'american-football',
    name: 'Action Sheet',
    redirectTo: '/action-sheet' //redireccionando al alert
  },
  {
    icon: 'appstore',
    name: 'Alert',
    redirectTo: '/alert'
  }
];
  constructor() { }

  ngOnInit() {
  }

}
/* creando interfaz */
interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}