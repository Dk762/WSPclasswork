import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    HomeComponent,
    MessagesComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
        { path: 'home', component: HomeComponent },
        { path: 'game', component: GameComponent },
        { path: '', redirectTo: '/home', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
