import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  baseurl = `${environment.BASE_URL}/properties`;

  constructor(
    private http: HttpClient
  ) { }

  getAllProperties(): Observable<any> {
    return this.http.get(this.baseurl, {})
  }
}