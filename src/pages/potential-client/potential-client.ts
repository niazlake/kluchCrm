import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ElasticSeacrhProvider} from "../../providers/elastic-seacrh/elastic-seacrh";

/**
 * Generated class for the PotentialClientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-potential-client',
  templateUrl: 'potential-client.html',
})
export class PotentialClientPage {

  data = this.navParams.get('adress');
  users: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private elastic: ElasticSeacrhProvider) {
    this.elastic.getAddresCall(this.data).then(
      data => {
        this.users = data.hits.hits;
        console.log(data.hits.hits);
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PotentialClientPage');
  }

}
