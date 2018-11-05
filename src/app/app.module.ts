import {NgModule, ErrorHandler, LOCALE_ID} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {ApiProvider} from '../providers/api/api';
import {KpiPage} from "../pages/kpi/kpi";
import {AuthPage} from "../pages/auth/auth";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {IonicStorageModule} from "@ionic/storage";
import {TextMaskModule} from 'angular2-text-mask';
import * as elasticsearch from 'elasticsearch-browser';
import {registerLocaleData} from '@angular/common';

import {ElasticSeacrhProvider} from '../providers/elastic-seacrh/elastic-seacrh';
import {ConvertProvider} from '../providers/convert/convert';
import localeRu from '@angular/common/locales/ru';
import {PotentialClientPage} from "../pages/potential-client/potential-client";

registerLocaleData(localeRu, 'ru');


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AuthPage,
    KpiPage,
    PotentialClientPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__intourdb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    HttpClientModule,
    TextMaskModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    KpiPage,
    AuthPage,
    PotentialClientPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    HttpClient,
    ElasticSeacrhProvider,
    ConvertProvider,
    {provide: LOCALE_ID, useValue: 'ru'}


  ]
})
export class AppModule {
}
