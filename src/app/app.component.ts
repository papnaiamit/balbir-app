import { Component, OnInit } from '@angular/core';
import {ConfigService} from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  searchList = [];

  constructor(private _configService: ConfigService) {

  }

  ngOnInit() {


  }
  getAllCountries() {
    this._configService.getConfig().subscribe((data) => {
      console.log(data);
    });
  }

  searchContries(query) {
    if (query) {
      console.log(query);
    }
  }





}
