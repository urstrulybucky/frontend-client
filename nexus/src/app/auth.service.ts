import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(private http: HttpClient) { 
    const token=this.getToken("admin","admin")
    console.log(token)
  }

  getToken(username: string, password: string): Observable<any> {
    const url = 'http://localhost:8000/api/account/token/';
    const headers = new HttpHeaders()
      .set('accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('X-CSRFToken', 'rtbeHZam1479A3k2YXQ48QMriXBS5AhjqRRPQ2f1p0ICHtb6w28gBCIETEtqeHYJ');
    
    const body = {
      username: username,
      password: password
    };

    return this.http.post(url, body, { headers });
  }

  login(credentials: any): Observable {

    const url = 'http://localhost:8000/api/account/user/create/';
    const headers = new HttpHeaders()
      .set('accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer  '+'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE1ODg5MDA1LCJpYXQiOjE3MTU4ODg3MDUsImp0aSI6ImQ2MTAwODYxMWE3YTQwMDc4ZDJmOTI1OWUyNGUxMDZlIiwidXNlcl9pZCI6MX0.-9S_uPTRZAxveFdrK_UnlWrisT9_IJUkfOrUe_DFgvw')
      .set('X-CSRFToken', 'rtbeHZam1479A3k2YXQ48QMriXBS5AhjqRRPQ2f1p0ICHtb6w28gBCIETEtqeHYJ');
    

    return this.http.post(url, credentials, { headers });
  }

  logout(): void {
    // Remove token from local storage or perform any other logout actions
    localStorage.removeItem('token');
  }
}
