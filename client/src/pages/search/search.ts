import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, AlertController } from 'ionic-angular';
import { RoomsProvider } from '../../providers/rooms/rooms';
import { AvailableRoomsPage } from '../available-rooms/available-rooms';

@IonicPage() 
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
 
    roomType: any;
    guests: any;
    beds: any;
    priceRange: any;
    from: any;
    to: any;
 
    constructor(public nav: NavController, public roomsService: RoomsProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
 
        let today = new Date();
        let tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
 
        this.priceRange = {
            lower: 0,
            upper: 500
        };
 
        this.roomType = 'standard';
        this.guests = 1;
        this.beds = 1;
        this.from = today.toISOString();
        this.to = tomorrow.toISOString();
 
    }
 
    findRooms(){
 
        let loading = this.loadingCtrl.create({
            content: "Finding rooms..."
        });
 
        loading.present();
 
        let options = {
            roomType: this.roomType,
            guests: this.guests,
            beds: this.beds,
            priceRange: this.priceRange,
            from: this.from,
            to: this.to
        };
 
        this.roomsService.getRooms(options).then((data) => {
 
            loading.dismiss();
 
            if(typeof(data[0]) === "undefined"){
                let alert = this.alertCtrl.create({
                    title: 'Oops!',
                    subTitle: 'Sorry, no rooms could be found for your search criteria.',
                    buttons: ['Ok']
                });
 
                alert.present();
            } else {
                this.nav.push(AvailableRoomsPage, {
                    rooms: data,
                    details: options
                });
            }
 
        }, (err) => {
            console.log(err);
        });
 
    }
 
}
