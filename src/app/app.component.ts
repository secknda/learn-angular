import { Component,OnInit } from '@angular/core';
import { filter, interval, map, Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Learn_project';
  // interval$!:Observable<string>

  ngOnInit() {
    // this.interval$=interval(1000).pipe(
    //   filter(value=>value % 3=== 0),
    //   map(value=>value % 2===0?
    //     `je suis ${value} et je suis pair:`:
    //     `je suis ${value} et je suis impaire`)
    // );
  }
}
