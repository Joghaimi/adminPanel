import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fort-room',
  standalone: true,
  imports: [],
  templateUrl: './fort-room.component.html',
  styleUrl: './fort-room.component.css'
})
export class FortRoomComponent {


  @Input() roomStatus: string = "Empty";
  @Input() roomTime: string = "0:01";
  @Input() DoorStatus: string = "Closed";
  @Input() isOnline: string = "Online";
  @Input() TeamName: string = "--";
  @Input() Score: number = 1.5;

  constructor() {
    // super();
  }

  numberToTime(value: number): string {
    const minutes = Math.floor(value / 60);
    const seconds = value % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

}
