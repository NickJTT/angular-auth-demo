import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  public events: [any] = [{}];

  constructor(private readonly eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(
      res => this.events = res,
      error => console.error(error)
    );
  }
}
