import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.scss']
})
export class SpecialEventsComponent implements OnInit {
  public events: [any] = [{}];

  constructor(private readonly eventService: EventService, private readonly router: Router) {}

  ngOnInit(): void {
    this.eventService.getSpecialEvents().subscribe(
      res => this.events = res,
      error => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          this.router.navigate(['/login']);
        }
      }
    );
  }
}
