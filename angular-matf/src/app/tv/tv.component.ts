import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {

  activeChannel: number;
  tvOn: boolean;

  constructor() { }

  ngOnInit() {
    this.activeChannel = 1;
    this.tvOn = false;
  }

  switchChannel(channel: number): void {
    this.activeChannel = channel;
    console.log(this.activeChannel);
  }

  tvOnOff(): void {
    this.tvOn = !this.tvOn;
    console.log(this.tvOn);
  }
}
