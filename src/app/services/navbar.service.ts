import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx'
import 'rxjs/add/operator/toPromise';;


@Injectable()
export class NavbarService {
  endpoint_url:string="http://smartjournal.herokuapp.com/api/categorie";

  constructor(private http:Http) {
    this.http = http
   }
   
journal_url:string="http://smartjournal.herokuapp.com/api/journal";



  
  getjournaux()
  {
    console.log("Message from categorie service");
    return this.http.get(this.journal_url).map(res => res.json());
  }
  
  getCategories()
  {
    console.log("Message from categorie service");
    return this.http.get(this.endpoint_url).map(res => res.json());
  }
}
