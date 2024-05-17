import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nave } from './nave';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class NavesService {

  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getNaves(): Observable<Nave[]> {
    return this.http.get<Nave[]>(this.apiUrl);
  }

}
