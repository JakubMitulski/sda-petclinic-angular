import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(private http: HttpClient) {

  }

  public getOwners(): Observable<any> {
    return this.http.get('http://localhost:9090/api/v1/owners');
  }

  createOwner(owner) {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    };
    return this.http.post('http://localhost:9090/api/v1/owner', owner, httpOptions);
  }
}
