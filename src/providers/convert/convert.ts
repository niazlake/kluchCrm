import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

/*
  Generated class for the ConvertProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConvertProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ConvertProvider Provider');
  }

  convertPhonePlus(phone: string) {
    const regex = /[]?\d+(?:\.\d+)?/g;
    let match: any;
    const first = [];
    while (match = regex.exec(phone)) {
      first.push(match[0]);
    }
    const phoneNumber = '+' + first.join('');
    return phoneNumber;
  }

  convertPhone(phone: string) {
    const regex = /[]?\d+(?:\.\d+)?/g;
    let match: any;
    const first = [];
    while (match = regex.exec(phone)) {
      first.push(match[0]);
    }
    const phoneNumber = first.join('');
    return phoneNumber;
  }

}
