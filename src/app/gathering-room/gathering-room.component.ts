import { Component, Input } from '@angular/core';
import { TeamService } from '../services/TeamService';

@Component({
  selector: 'app-gathering-room',
  standalone: true,
  imports: [],
  templateUrl: './gathering-room.component.html',
  styleUrl: './gathering-room.component.css'
})
export class GatheringRoomComponent {
  @Input() roomStatus: string = "Empty";
  @Input() roomTime: string = "0:01";
  @Input() DoorStatus: string = "Closed";
  @Input() isOnline: string = "Online";
  @Input() TeamName: string = "--";
  @Input() Score: number = 0;
  gameUrl1 = "gathering";
  gameUrl = "GatheringRoom";
  constructor(private teamService: TeamService) {

  }

  SetRoomColor(rgbColor: string) {
    this.teamService.SetRoomColor(this.gameUrl1, this.gameUrl, rgbColor).subscribe();
  }
  changeDoorStatus(doorStatus: string) {
    this.teamService.ChangeDoorStatus(this.gameUrl1, this.gameUrl, doorStatus).subscribe();
  }
}
