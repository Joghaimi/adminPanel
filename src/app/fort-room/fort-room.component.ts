import { Component, Input } from '@angular/core';
import { TeamService } from '../services/TeamService';

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
  @Input() Score: number = 0;
  gameUrl1 = "fort";
  gameUrl = "fortRoom";
  constructor(private teamService: TeamService) {

  }

  numberToTime(value: number): string {
    const minutes = Math.floor(value / 60);
    const seconds = value % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
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
  ControlObstacle(status: string) {
    if (status == "start")
      this.teamService.ControlObstacle(this.gameUrl1, this.gameUrl, true).subscribe();
    else
      this.teamService.ControlObstacle(this.gameUrl1, this.gameUrl, false).subscribe();

  }
}
