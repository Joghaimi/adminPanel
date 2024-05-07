import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shooting-room',
  standalone: true,
  imports: [],
  templateUrl: './shooting-room.component.html',
  styleUrl: './shooting-room.component.css'
})
export class ShootingRoomComponent {

  @Input() roomStatus: string = "Empty";
  @Input() roomTime: string = "0:01";
  @Input() DoorStatus: string = "Closed";
  @Input() isOnline: string = "Online";
  @Input() TeamName: string = "--";
  @Input() Score: number = 0;
  gameUrl1 = "fort";
  gameUrl = "fortRoom";


}
