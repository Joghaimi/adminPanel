import { Component, Input } from '@angular/core';
import { TeamService } from '../services/TeamService';

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

  gameUrl1 = "shooting";
  gameUrl = "shooting";
  constructor(private teamService: TeamService) {

  }

  changeRoomStatus(roomStatus: string) {
    this.teamService.ChangeRoomStatus(this.gameUrl1, this.gameUrl, roomStatus).subscribe();
  }
  changeDoorStatus(doorStatus: string) {
    this.teamService.ChangeDoorStatus(this.gameUrl1, this.gameUrl, doorStatus).subscribe();
  }
  SetRoomColor(rgbColor: string) {
    this.teamService.SetRoomColor(this.gameUrl1, this.gameUrl, rgbColor).subscribe();
  }

}
