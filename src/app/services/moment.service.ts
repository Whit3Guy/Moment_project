import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development'; // Certifique-se de que o caminho esteja correto
import { Observable } from 'rxjs';
import { Moment } from '../models/moment';

@Injectable({
  providedIn: 'root'
})
export class MomentService {
  private api_url: string = environment.baseApiUrl;

  constructor(private http: HttpClient) {}

  createMoment(data: FormData): Observable<any> {
    console.log(data);

    // Certifique-se de usar o URL correto com o protocolo
    return this.http.post<any>(`${this.api_url}/api/moments`, data);
  }
}
