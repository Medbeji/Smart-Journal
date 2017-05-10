import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { PlatformLocation } from '@angular/common';


import { FacebookService, FacebookInitParams } from 'ng2-facebook-sdk';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements AfterViewInit {
  title = 'app works!';
  // constructor(location: PlatformLocation) {
  //     location.onPopState(() => {
  //
  //     });
  // }


constructor(private fb: FacebookService) {
	 let fbParams: FacebookInitParams = {
                                   appId: '251566128622296',
                                   xfbml: true,
                                   version: 'v2.8'
                                   };
    this.fb.init(fbParams);

  }

  ngAfterViewInit() {
//Your jQuery code goes here
   $(document).ready(function() {

        $('#blog-landing').pinterest_grid({
          no_columns: 5,
          padding_x: 10,
          padding_y: 10,
          margin_bottom: 50,
          single_column_breakpoint: 700
        });

      });

  }


}
