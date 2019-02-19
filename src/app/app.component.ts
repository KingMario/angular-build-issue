import { Component } from '@angular/core';
import * as debug from 'debug';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng6-proj';

  constructor () {
    debug('hello')(['world']);
    debug('welcome')('you');
  }
}
