import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class RoomsProvider {
 
 	options: any;
 	data: any;
  constructor(public http: HttpClient) {
 
  }
 

  
  getRooms(options){
		  return new Promise((resolve, reject) => {
      this.http.post('http://localhost:8080/api/rooms', JSON.stringify(options), {
					headers: new HttpHeaders().set('Content-Type', 'application/json'),
				})
				.subscribe(res => {
					resolve(res);
				}, (err) => {
					reject(err);
				});
			});
			}

 
  reserveRoom(data){
	    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:8080/api/rooms/reserve', JSON.stringify(data), {
				headers: new HttpHeaders().set('Content-Type', 'application/json'),
        })
        .subscribe((data) => {
          resolve(data);
        });
 
    });
 
  }
 
}
