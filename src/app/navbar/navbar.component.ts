import { Component, OnInit } from '@angular/core';
import { NavbarService } from '.././services/navbar.service';
import {ActivatedRoute,Params,Router,NavigationEnd} from '@angular/router';
import 'rxjs/add/operator/first';
import {Categorie} from '../ModelBinding/categorie';
import {Journal} from '../ModelBinding/journal';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  selectedJournalId: string = null;
  private sub: boolean;
  categories: any;
  journals: any;
  constructor(location: Location, private service: NavbarService,private route: Router, private ARoute:ActivatedRoute) {
    route.events.subscribe((val) => {
      if(location.path() != '/login'){
        this.sub ==true;
      }  else  this.sub ==false;
    });

  }

  onSelect(journal) {
    this.selectedJournalId = journal._id;
  }
  onSelectC(categorie) {
    this.selectedJournalId = categorie._id;
  }
  ngOnInit() {
    this.getCategories();
    this.getJournaux();
  }

  getJournaux() {
    console.log("journal from component navbar");
    this.journals = [] ;
    this.service.getjournaux().subscribe(
      data => this.journals = data
    );
    console.log("hello this is are the journals ",this.journals);
  }

  getCategories() {
    console.log("categorie from component navbar");
    this.categories = [] ;
    this.service.getCategories().subscribe(
      data => this.categories = data
    );
  }

  isActive():boolean {
    return(this.sub);
  }


}
