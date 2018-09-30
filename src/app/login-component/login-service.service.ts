import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {xw

  constructor(private http: HttpClient) { }

  url: string = 'http://localhost:8080/getLoginDetails?name=radram73';
  login(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  url1: string = 'http://localhost:8080/login';
  getLoginDetails(myObj): Observable<any> {
    return this.http.post<any>(this.url1,myObj);
  }
}
