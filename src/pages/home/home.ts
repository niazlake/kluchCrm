import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Storage} from "@ionic/storage";
import {ApiProvider} from "../../providers/api/api";
import {ConvertProvider} from "../../providers/convert/convert";
import {ElasticSeacrhProvider} from "../../providers/elastic-seacrh/elastic-seacrh";
import {CallNumber} from '@ionic-native/call-number';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  calls = [];

  constructor(private storage: Storage, private elastic: ElasticSeacrhProvider, private callNumber: CallNumber) {
    this.storage.get("TOKEN").then(
      (data: any) => {
        console.log(data)
      }
    );

    this.elastic.getSearchCall('не я').then(
      data => {
        this.extractData(data.hits.hits);

      }
    )
  }

  extractData(data) {
    this.calls = [];
    this.calls.push(data);

    console.log(this.calls, 'here search')
  }

  call(phone) {
    console.log(phone)
    this.callNumber.callNumber(phone, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }
}
