import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import * as elasticsearch from 'elasticsearch-browser';

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
            "objectInfo.sellerName": "Немаев Булат Мансурович"
          }
        }
      }
    })
  }


  getAddresCall(q: string): PromiseLike<any> {
    const clientIn = elasticsearch.Client({
      host: 'http://95.213.191.218:9200/',
      log: 'trace'
    });
    return clientIn.search({
      body: {
        "query": {
          "match": {
            "objectInfo.Address": q
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
      body: {
        "query": {
          "match": {
            "Address": q
          }
        }
      }
    }).then(body => {
      return body.hits;
    });

  }


}
