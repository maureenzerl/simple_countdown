import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  Hour: number = 0;
  Minute: number = 0;
  Second: number = 0;


  constructor() { }

  ngOnInit(): void {
  }

  hourUp(): void{
    if(this.Hour < 24){
      this.Hour += 1;
    }
  }
  minuteUp(): void{
    if(this.Minute < 60){
      this.Minute += 1;
      if(this.Minute == 60){
        this.hourUp();
        this.Minute = 0;
      }
    }
  }
  secondUp(): void{
    if(this.Second < 60){
      this.Second += 1;
      if(this.Second == 60){
        this.minuteUp();
        this.Second = 0;
      }
    }
  }

  hourDown(): void{
    if(this.Hour > 24){
      this.Hour -= 1;
    }
  }
  minuteDown(): void{
    if(this.Minute >= 0){
      this.Minute -= 1;
      if(this.Minute == -1){
        this.hourDown();
        this.Minute = 0;
      }
    }
  }
  secondDown(): void{
    if(this.Second >= 0){
      this.Second -= 1;
      if(this.Second == -1){
        this.minuteDown();
        this.Second = 0;
      }
    }
  }

}
