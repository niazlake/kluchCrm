import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Storage} from "@ionic/storage";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  events: any = [
    {
      "header": "Позвонить",
      "phone": "+7(999)123-78-78",
      "time": "12:30"
    },
    {
      "header": "Позвонить",
      "phone": "+7(999)123-78-78",
      "time": "12:30"
    },
    {
      "header": "Позвонить",
      "phone": "+7(999)123-78-78",
      "time": "12:30"
    },
    {
      "header": "Позвонить",
      "phone": "+7(999)123-78-78",
      "time": "12:30"
    },
  ];

  constructor(public navCtrl: NavController, private storage: Storage) {
    this.storage.get("TOKEN").then(
      (data: any) => {
        console.log(data)
      }
    )
  }


}
