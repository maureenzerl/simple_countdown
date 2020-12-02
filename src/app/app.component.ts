import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'countdown';
  myVar:boolean=false
  ngOnInit()
  {

  }
  AppComponent.countdownresume()
  {
    this.myVar=!this.myVar
  }
}
