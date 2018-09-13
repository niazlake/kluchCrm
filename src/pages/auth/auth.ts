import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiProvider} from "../../providers/api/api";
import {Storage} from "@ionic/storage";
import {TabsPage} from "../tabs/tabs";
import {TextMaskModule} from "angular2-text-mask";

/**
 * Generated class for the AuthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
})
export class AuthPage {
  signupform: FormGroup;
  userData = {"username": "", "password": ""};
  public mask: any[] = ['+', '7', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];


  constructor(public navCtrl: NavController, public navParams: NavParams, private api: ApiProvider, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthPage');
  }

  ngOnInit() {
    this.signupform = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    });
  }

  auth() {
    const str = this.signupform.controls.username.value.split(" ");
    const str1 = str[0].split(")")[0].split("(").join("");
    const str2 = str[1].split("-").join("");
    const phone = str1 + str2;
    this.api.authUser(phone, this.signupform.controls.password.value).subscribe(
      (data: any) => {
        if (data.token) {
          this.storage.set("TOKEN", data.token);
          this.navCtrl.push(TabsPage);
        }
      }
    )
  };


}
