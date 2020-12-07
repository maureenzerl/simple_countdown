import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template:'<countdown [config]="{{Hour}} {{Minute}} {{Second}}"></countdown>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'countdown';
}
