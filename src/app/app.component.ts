import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RoomCardComponent } from './component/room-card/room-card.component';
import { FortRoomComponent } from './fort-room/fort-room.component';
import { ShootingRoomComponent } from './shooting-room/shooting-room.component';
import { DivingRoomComponent } from './diving-room/diving-room.component';
import { PlusRoomComponent } from './plus-room/plus-room.component';
import { FloorRoomComponent } from './floor-room/floor-room.component';
import { TeamService } from './services/TeamService';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adminPanel';
  showFortRoom = true;
  showShootingRoom = false;
  showDivingRoom = false;
  showPlusMinusRoom = false;
  showFloorIsLavaRoom = false;

  FortRoomStatus = "Empty";
  FortTime = 0;
  FortDoorStatus = "Closed";
  FortIsOnline = "Online";
  FortTeamName = "--";
  FortScore: number = 1.5;





  FloorIsLavaRoomStatus = "Empty";
  FloorIsLavaTime = 0;

  ShootingRoomStatus = "Empty";
  ShootingTime = 0;

  DivingRoomStatus = "Empty";
  DivingTime = 0;

  PlusRoomStatus = "Empty";
  PlusTime = 0;


  constructor(private teamService: TeamService) {

    // this.getRoomsStatusEachSec();



  }

  getRoomsStatusEachSec() {
    interval(1000)
      .subscribe(() => {
        // Card Info 
        this.getFortRoomStatusAndTime();

        // FortRoom Shown
        if (this.showFortRoom) {
          this.getFortRoomInfo();
        }








      });
  }


  hideAllRoom() {
    this.showFortRoom = false;
    this.showShootingRoom = false;
    this.showDivingRoom = false;
    this.showPlusMinusRoom = false;
    this.showFloorIsLavaRoom = false;
  }
  showFort() {
    this.hideAllRoom();
    this.showFortRoom = true;
  }

  showDiving() {
    this.hideAllRoom();
    this.showDivingRoom = true;
  }

  showShooting() {
    this.hideAllRoom();
    this.showShootingRoom = true;
  }
  showPlus() {
    this.hideAllRoom();
    this.showPlusMinusRoom = true;
  }
  showFloor() {
    this.hideAllRoom();
    this.showFloorIsLavaRoom = true;
  }

  getFortRoomStatusAndTime() {
    let gameUrl1 = "fort";
    let gameUrl = "fortRoom";
    this.teamService.RoomTimeAndStatus(gameUrl1, gameUrl).subscribe(
      e => {
        if (e != null) {
          this.FortRoomStatus = e?.status;
          this.FortTime = e.time;
        }
      }
    );
  }
  getFortRoomInfo() {
    let gameUrl1 = "fort";
    let gameUrl = "fortRoom";
    this.teamService.RoomInfo(gameUrl1, gameUrl).subscribe(
      e => {
        if (e != null) {
          this.FortDoorStatus = e?.doorStatus;
          this.FortTeamName = e?.teamName;
          this.FortScore = e?.score;
        }
      }
    );
  }





}
