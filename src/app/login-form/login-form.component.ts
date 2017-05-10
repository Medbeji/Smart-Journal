import { Component, OnInit, Input} from '@angular/core';
import { ROUTER_CONFIGURATION,Router } from '@angular/router';
import{Cookie} from'ng2-cookies';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  //
  // constructor(
  //     private router: Router) { }
  //     data : any = {};
  //     formSubmit()
  // {
    // var uname = this.data.username;
    // var pass = this.data.password;
    // var key =btoa(btoa(uname)+"??"+btoa(pass));
    // //Cookie.set('SessionId',key);
    // document.cookie ="sessionID =" + key;
    // console.log(key);
    // if (uname =="test" && pass=="test")
    // {
    //   this.router.navigate(['/admin']);
    // }
  // }
  //
  //
  //
  //
  // ngOnInit() {
  // }

  constructor(private router: Router) { }

  @Input() username: string;
  @Input() password: string;

  login(){
    console.log(this.username);
    console.log(this.password);
    var uname = this.username;
    var pass = this.password;
    var key =btoa(btoa(uname)+"??"+btoa(pass));
    //Cookie.set('SessionId',key);
    document.cookie ="sessionID =" + key;
    console.log(key);
    if (uname =="test" && pass=="test")
    {
      this.router.navigate(['/login/admin']);
    }
  }

  OnInit(){

  }
  ngOnInit(){
  }

}
