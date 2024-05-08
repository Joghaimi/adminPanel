import { Component, Input } from '@angular/core';
import { TeamService } from '../services/TeamService';

@Component({
  selector: 'app-plus-room',
  standalone: true,
  imports: [],
  templateUrl: './plus-room.component.html',
  styleUrl: './plus-room.component.css'
})
export class PlusRoomComponent {
  @Input() roomStatus: string = "Empty";
  @Input() roomTime: string = "0:01";
  @Input() DoorStatus: string = "Closed";
  @Input() isOnline: string = "Online";
  @Input() TeamName: string = "--";
  @Input() Score: number = 0;

  gameUrl1 = "dark";
  gameUrl = "darkRoom";
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
  restartService() {
    let text = "Are You sure of restarting the game ? ";
    if (confirm(text) == true) {
      this.teamService.RestartGame(this.gameUrl1, this.gameUrl).subscribe();
    }
  }
  retrieveData() {
    let text = "Are You sure ? ";
    if (confirm(text) == true) {
      this.teamService.RetrieveData(this.gameUrl1, this.gameUrl).subscribe();
    }
  }

}
