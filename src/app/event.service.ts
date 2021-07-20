import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private readonly url = 'http://127.0.0.1:3000/';
  private readonly eventsUrl = `${this.url}events/`;
  private readonly specialEventsUrl = `${this.url}special-events/`;

  constructor(private readonly http: HttpClient) {}

  public getEvents(): Observable<any> {
    return this.http.get<any>(this.eventsUrl);
  }

  public getSpecialEvents(): Observable<any> {
    return this.http.get<any>(this.specialEventsUrl);
  }
}
