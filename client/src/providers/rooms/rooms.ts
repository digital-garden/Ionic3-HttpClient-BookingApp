import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '@rxjs/Observable';
import 'rxjs/add/operator/map';
 
@Injectable()
export class RoomsProvider {
 
  constructor(public http: HttpClient) {
 
  }
 
  getRooms(options){
 
    return new Promise(resolve => {
      let headers = new Headers();
      headers.set('Content-Type', 'application/x-www-form-urlencoded');
 
      this.http.post('http://localhost:8080/api/rooms', JSON.stringify(options), {headers: headers})
        
        .subscribe(data => {
          resolve(data);
        });
    });
 
  }
 
  reserveRoom(data){
 
    return new Promise(resolve => {
 
      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
 
      this.http.post('http://localhost:8080/api/rooms/reserve', JSON.stringify(data), {headers: headers})
        .subscribe((data) => {
          resolve(data);
        });
 
    });
 
  }
 
}
