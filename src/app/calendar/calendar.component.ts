import { Component } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar'
import { Subject } from 'rxjs';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  view: CalendarView = CalendarView.Month;

  viewDate: Date = new Date();
  events: CalendarEvent[] = [
    // Define your events here
  ];

  refresh: Subject<any> = new Subject();

}
