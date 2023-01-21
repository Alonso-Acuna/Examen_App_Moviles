import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  handlerMessage = '';
  roleMessage = '';

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Prompt!',
      inputs: [
        {
          name: 'nombres',
          placeholder: 'Nombres',
          type: 'text',
          attributes: {
          }
        },
        {
          name: 'apellidos',
          placeholder: 'Apellidos',
          type: 'text',
        },
        {
          name: 'materia',
          placeholder: 'Descripción Materia',
          type: 'text',
        },
        {
          name: 'url',
          placeholder: 'Enlace',
          type: 'url',
          value: 'https://ionicframework.com'
        },
        {
          name: 'fecha',
          type: 'date',
          placeholder: 'yyyy-mm-dd'
        },
        {
          name: 'clave',
          placeholder: 'Clave',
          type: 'password',
        },
        {
          name: 'apodo',
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          name: 'edad',
          placeholder: 'Edad',
          type: 'number',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            return false;
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: (data) => {
            console.log("Nombres: " + data.nombres);
            console.log("Apellidos: " + data.apellidos);
            console.log("Materia: " + data.materia);
            console.log("URL: " + data.url);
            console.log("Fecha: " + data.fecha);
            console.log("Clave: " + data.clave);
            console.log("Apodo: " + data.apodo);
            console.log("Edad: " + data.edad);
            return true;
          },
        },
      ],
    });
    await alert.present();
  }
    

}
