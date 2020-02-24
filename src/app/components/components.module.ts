/* en este modulo se agruparan todos los componentes de la aplicacion */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; //comon para poder utilizar directivas como ngfor, ngIf, etc.
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
/* 
los componentes exportados seran los que se utilicen directamjnete en otras paginas */

@NgModule({
  declarations: [
    HeaderComponent
  ],
  //exports para que pueda ser utilizado en otras paginas
  exports:[
    HeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
