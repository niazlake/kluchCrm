import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import * as elasticsearch from 'elasticsearch-browser';


/*
  Generated class for the ElasticSeacrhProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ElasticSeacrhProvider {
  search = [];

  constructor(public http: HttpClient) {
    console.log('Hello ElasticSeacrhProvider Provider');
  }

  getSearchCall(q: string): PromiseLike<any> {
    const clientIn = elasticsearch.Client({
      host: 'http://95.213.191.218:9200/',
      log: 'trace'
    });
    return clientIn.search({
      body: {
        "query": {
          "match": {
            "objectInfo.sellerName": "Тараканова Эльвира Владимировна"
          }
        }
      }
    })
  }


  getSearchResults(q: string): PromiseLike<any> {
    return this.query(q)
  }


  query(q: string): PromiseLike<any> {

    const client = new elasticsearch.Client({
      host: 'http://95.213.191.218:9200/',
      log: 'trace'
    });

    return client.search({
      q: q
    }).then(body => {
      return body.hits;
    });

  }


}
