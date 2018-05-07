import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';

declare var googleyolo: any;
declare var FB: any;
declare var window: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _Game: GameService) {
      window.fbAsyncInit = () => {
          FB.init({
            appId   : '188596891769592',
            cookie  : 'true',
            xfbml   : 'true',
            version : 'v2.12',
          });

          FB.AppEvents.logPageView();

      };
    (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = <HTMLScriptElement>d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_us/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));   
   }

  ngOnInit() {
  }

  login(name: string, password: string){
    this._Game.login(name, password);
  }
  fblogin(){
      FB.login((credentials:any)=>{
          console.log(credentials);
      })
  }
  googlelogin(){
    googleyolo.hint({
      supportedAuthMethods: [
          "https://accounts.google.com"
      ],
      supportedIdTokenProviders: [
        {
          url: "https://accounts.google.com",
          clientId: "436344655145-afm4446h9obt0refrqca40fijnsc0qfh.apps.googleusercontent.com"
        }
      ]
    }).then((credentials: any) =>{
      this._Game.oAuthLogin(credentials.displayName, credentials.idToken, credentials.profilePicture);
      console.log(credentials);
    })
  }

}
