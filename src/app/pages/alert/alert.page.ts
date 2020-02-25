import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titulo: string;

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }
async presentAlert(){
  const alert = await this.alertCtrl.create({
    header: 'Alert',
    subHeader: 'Subtitle',
    message: 'This is an alert message.',
    buttons: ['Ok']
  });
  await alert.present();
} 
 async presentAlertConfirm() {
  const alert = await this.alertCtrl.create({
    header: 'Confirm!',
    message: 'Message <strong>text</strong>!!!',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Okay',
        handler: () => {
          console.log('Confirm Okay');
        }
      }
    ]
  });

  await alert.present();
}
async presentAlertPrompt() {
  const alert = await this.alertCtrl.create({
    header: 'Prompt!',
    inputs: [
      {
        name: 'name1',
        type: 'text',
        placeholder: 'Placeholder 1'
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Ok',
        handler: () => {
          console.log('Confirm Ok');
        }
      }
    ]
  });

  await alert.present();
}
async presentInput() {
  const alert = await this.alertCtrl.create({
    header: 'Input',
    subHeader: 'Ingrese su nombre:',
    inputs: [
      {
        name: 'txtNombre',
        type: 'text',
        placeholder: 'Nombre'
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        //cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Ok',
        handler: ( data ) => {
          console.log('Confirm Ok', data);
          this.titulo = data.txtNombre;
        }
      }
    ]
  });

  await alert.present();
}

}
