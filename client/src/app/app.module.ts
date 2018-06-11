import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
//import { HomePage } from '../pages/home/home';
//import { AvailableRoomsPage } from '../pages/available-rooms/available-rooms';
//import { BookingPage } from '../pages/booking/booking';
//import { SearchPage } from '../pages/search/search';
import { RoomsProvider } from '../providers/rooms/rooms';

@NgModule({
  declarations: [
    //HomePage,
    //AvailableRoomsPage,
    //BookingPage,
    //SearchPage
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    //HomePage,
    //AvailableRoomsPage,
    //BookingPage,
    //SearchPage
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RoomsProvider
  ]
})
export class AppModule {}
