import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
     constructor(private http: HttpClient) { }

     getAllUrl = 'http://services.groupkt.com/country/get/all';
     searchUrl = 'http://services.groupkt.com/country/get/iso2code/IND';


     getConfig() {
          return this.http.get(this.getAllUrl);
     }

     





}
