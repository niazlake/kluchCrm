import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ApiProvider} from "../../providers/api/api";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  objects = []

  constructor(public navCtrl: NavController, private api: ApiProvider) {
    this.getObjectsIn();
  }

  getObjectsIn() {
    this.api.getObjects().subscribe(
      (data: any) => {
        console.log(data);
        this.objects = data;
      }
    )
  }
}
