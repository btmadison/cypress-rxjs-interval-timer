import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PollingService } from './polling.service';

@Component({
  selector: 'app-root',
  template: `ppl:
  <ul>
    <li *ngFor="let p of ppl">{{p.firstName}} {{p.lastName}}: {{p.email}}</li>
  </ul>`
})
export class AppComponent implements OnInit {
  ppl = [];
  constructor(private poll: PollingService) {}
  ngOnInit() {
    timer(0, 30000).pipe(
      tap((x) => this.ppl = this.poll.getSomeData(x+1))
    ).subscribe();
  }
}
