import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ApiProvider} from "../../providers/api/api";
import {ObjectCudPage} from "../object-cud/object-cud";
import {ElasticSeacrhProvider} from "../../providers/elastic-seacrh/elastic-seacrh";

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
    this.getObjects(1, 10);
  }

  getObjects(page, size) {
    this.api.paginationIndex(page, size).subscribe(
      data => {
        this.objects = data;
        console.log(data);
      },
      error1 => {
        console.log('didnt get console');
      }
    );
  };

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

    console.log(this.search[0].hits, 'here search')
  }


  onInput(event) {
    this.searchStatus = true;
    this.elastic.getSearchResults(this.myInput).then(
      res => {
        this.extractData(res);
      }
    )
  }


}
