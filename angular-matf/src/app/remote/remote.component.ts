import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-remote',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.css']
})
export class RemoteComponent implements OnInit {

  @Output() channelChanged = new EventEmitter<number>();
  @Output() tvOnOff = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  changeChannel(channel: number) {
    this.channelChanged.emit(channel);
  }

  turnOnOff() {
    this.tvOnOff.emit();
  }
}
