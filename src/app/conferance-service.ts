import { HttpClient } from '@angular/common/http';
import { Injectable,inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConferanceService {
  http = inject(HttpClient);
apiUrl = 'http://localhost:3000/conferances';
  getallConferances() {
    return this.http.get<any[]>(this.apiUrl);
  }
  getConferanceById(id: number) {
    // return this.http.get<any>(`http://localhost:3000/conferances/${id}`);
    return this.http.get<any>(this.apiUrl + '/' + id);
  }
}
