import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ElasticSeacrhProvider} from "../../providers/elastic-seacrh/elastic-seacrh";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  myInput = '';
  search = [];

  constructor(public  elastic: ElasticSeacrhProvider, public navCtrl: NavController) {

    this.elastic.getSearchCall(this.myInput).then(
      data => {
        this.extractData(data);

      }
    )
  }

  extractData(data) {
    this.search = [];
    this.search.push(data);

    console.log(this.search[0], 'here search')
  }


}
