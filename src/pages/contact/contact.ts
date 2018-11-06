import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ElasticSeacrhProvider} from "../../providers/elastic-seacrh/elastic-seacrh";
import {ApiProvider} from "../../providers/api/api";
import {ConvertProvider} from "../../providers/convert/convert";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  historyClients: any = [];
  mask: any[] = ['7', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];

  constructor(public convert: ConvertProvider, public api: ApiProvider) {
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
