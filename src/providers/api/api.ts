import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Storage} from "@ionic/storage";

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  private url: string = 'http://95.213.191.218/';
  token: any = "";

  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello ApiProvider Provider');
    this.storage.get("TOKEN").then(
      (data: any) => {
        this.token = data;
      }
    )
  }

  authUser(phone: string, password: string) {

    const dataUser = {
      "phone": phone,
      "password": password
    };

    return this.http.post(this.url + 'auth', dataUser)
  }


  paginationIndex(page, size) {
    return this.http.get('http://95.213.191.218:5000/api/objects/page/' + page + '?size=' + size);
  }

  getHistoryPhone(phone: string) {
    return this.http.get('http://95.213.191.218:5000/api/history?phone=%2B' + phone);
  }


}
