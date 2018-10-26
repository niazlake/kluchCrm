import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Storage} from "@ionic/storage";
import {ApiProvider} from "../../providers/api/api";
import {ConvertProvider} from "../../providers/convert/convert";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  mask: any[] = ['7', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];

  historyClients: any = [];

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

  constructor(public convert: ConvertProvider, public api: ApiProvider, private storage: Storage) {
    this.storage.get("TOKEN").then(
      (data: any) => {
        console.log(data)
      }
    )
  }

  getHistory(e) {

    const clientPhone = this.convert.convertPhone(e.target.elements[0].value);
    console.log(clientPhone);

    this.api.getHistoryPhone(clientPhone).subscribe(
      data => {
        this.historyClients = data;
        console.log(data);
      },
      error1 => {
        console.log(error1);
      }
    );
  }


}
