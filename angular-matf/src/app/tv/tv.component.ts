import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'matf-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {

  activeChannel: number;
  private channelShown: boolean;
  tvOn: boolean;

  constructor() { }

  ngOnInit() {
    this.activeChannel = 1;
    this.channelShown = false;
    this.tvOn = false;
  }

  switchChannel(channel: number): void {
    this.activeChannel = channel;
    this.channelSwitched = true;
  }

  tvOnOff(): void {
    this.tvOn = !this.tvOn;

    if (this.tvOn === true) {
      this.channelSwitched = true;
    }
  }

  get channelSwitched(): boolean {
    return this.channelShown;
  }

  set channelSwitched(yesNo: boolean) {
    this.channelShown = yesNo;

    if (yesNo) {
      setTimeout(() => {
        this.channelSwitched = false;
      }, 2000);
    }
  }
}
