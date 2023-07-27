import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  url_Weather = "https://weather.myfrontstore.com";
  url_ElectoRoom = "https://electroroom.myfrontstore.com/";
  url_FoodStore = "https://foodstore.myfrontstore.com";
  url_GitHub = "https://github.com/niculuka";

  constructor(
    private router: Router
  ) { }

  goToWeather() {
    window.open(this.url_Weather, "_blank");
  }

  goToElectoRoroom() {
    window.open(this.url_ElectoRoom, "_blank");
  }

  goToFoodStore() {
    window.open(this.url_FoodStore, "_blank");
  }

  goToGitHub() {
    window.open(this.url_GitHub, "_blank");
  }
}
