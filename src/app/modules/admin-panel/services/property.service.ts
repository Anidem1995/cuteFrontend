import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Property } from 'src/app/shared/models/property';
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
