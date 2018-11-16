import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ApiProvider} from "../../providers/api/api";
import {ObjectCudPage} from "../object-cud/object-cud";
import {ElasticSeacrhProvider} from "../../providers/elastic-seacrh/elastic-seacrh";
import {PotentialClientPage} from "../potential-client/potential-client";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public counter: number = 0;

  objects: any = [];
  myInput = '';
  search = [];
  searchStatus = false;

  constructor(public navCtrl: NavController, private api: ApiProvider, private elastic: ElasticSeacrhProvider) {
    this.searchStatus = true;
    this.elastic.getSearchResults('Сараев Сергей').then(
      res => {
        this.extractData(res.hits);
      }
    )
  }

  goCud() {
    this.navCtrl.push(ObjectCudPage);
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      this.counter += 1;
      console.log(this.counter);
      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  extractData(data) {
    this.search = [];
    this.search.push(data);
  }

  goPotential(address) {
    const data = {
      adress: address
    };
    this.navCtrl.push(PotentialClientPage, data);
  }


}
