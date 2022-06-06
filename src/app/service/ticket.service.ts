import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) {
  }

  public getTickets() {
    return this.http.get<any>(`api/tickets`)
      .pipe(map(tickets => {
        return tickets;
      }));
  }
}