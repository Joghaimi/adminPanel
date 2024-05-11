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
  FortScore: number = 0;


  ShootingRoomStatus = "Empty";
  ShootingTime = 0;
  ShootingDoorStatus = "Closed";
  ShootingIsOnline = "Online";
  ShootingTeamName = "--";
  ShootingScore: number = 0;


  DivingRoomStatus = "Empty";
  DivingTime = 0;
  DivingDoorStatus = "Closed";
  DivnigIsOnline = "Online";
  DivnigTeamName = "--";
  DivnigScore: number = 0;


  FloorIsLavaRoomStatus = "Empty";
  FloorIsLavaTime = 0;
  FloorIsLavaDoorStatus = "Closed";
  FloorIsLavaIsOnline = "Online";
  FloorIsLavaTeamName = "--";
  FloorIsLavaScore: number = 0;



  PlusRoomStatus = "Empty";
  PlusTime = 0;
  PlusDoorStatus = "Closed";
  PlusIsOnline = "Online";
  PlusTeamName = "--";
  PlusScore: number = 0;


  constructor(private teamService: TeamService) {
    this.getRoomsStatusEachSec();
  }

  getRoomsStatusEachSec() {
    interval(1000)
      .subscribe(() => {
        // Card Info 
        this.getFortRoomStatusAndTime();
        this.getShootingRoomStatusAndTime();
        this.getDivingRoomStatusAndTime();
        this.getPlusRoomStatusAndTime();
        this.getFloorRoomStatusAndTime();

        // FortRoom Shown
        if (this.showFortRoom) {
          this.getFortRoomInfo();
        }

        if (this.showShootingRoom) {
          this.getShootingRoomInfo();
        }
        if (this.showDivingRoom)
          this.getDivingRoomInfo();
        if (this.showPlusMinusRoom)
          this.getPlusRoomInfo();

        if (this.showFloorIsLavaRoom)
          this.getFloorRoomInfo();

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
          // if (this.FortRoomStatus == "Started")
            this.FortTime = e.time;
          // else
            // this.FortTime = 0;
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


  getShootingRoomStatusAndTime() {
    let gameUrl1 = "Shooting";
    let gameUrl = "Shooting";
    this.teamService.RoomTimeAndStatus(gameUrl1, gameUrl).subscribe(
      e => {
        if (e != null) {
          this.ShootingRoomStatus = e?.status;
          // if (this.ShootingRoomStatus == "Started")
            this.ShootingTime = e.time;
          // else
            // this.ShootingTime = 0;
        }
      }
    );
  }
  getShootingRoomInfo() {
    let gameUrl1 = "shooting";
    let gameUrl = "Shooting";
    this.teamService.RoomInfo(gameUrl1, gameUrl).subscribe(
      e => {
        if (e != null) {
          this.ShootingDoorStatus = e?.doorStatus;
          this.ShootingTeamName = e?.teamName;
          this.ShootingScore = e?.score;
        }
      }
    );
  }


  getDivingRoomStatusAndTime() {
    let gameUrl1 = "diving";
    let gameUrl = "diving";
    this.teamService.RoomTimeAndStatus(gameUrl1, gameUrl).subscribe(
      e => {
        if (e != null) {
          this.DivingRoomStatus = e?.status;
          // if (this.DivingRoomStatus == "Started")
            this.DivingTime = e.time;
          // else
            // this.DivingTime = 0;
        }
      }
    );
  }
  getDivingRoomInfo() {
    let gameUrl1 = "diving";
    let gameUrl = "diving";
    this.teamService.RoomInfo(gameUrl1, gameUrl).subscribe(
      e => {
        if (e != null) {
          this.DivingDoorStatus = e?.doorStatus;
          this.DivnigTeamName = e?.teamName;
          this.DivnigScore = e?.score;
        }
      }
    );
  }

  getPlusRoomStatusAndTime() {
    let gameUrl1 = "dark";
    let gameUrl = "darkRoom";
    this.teamService.RoomTimeAndStatus(gameUrl1, gameUrl).subscribe(
      e => {
        if (e != null) {
          this.PlusRoomStatus = e?.status;
          // if (this.PlusRoomStatus == "Started")
            this.PlusTime = e.time;
          // else
            // this.PlusTime = 0;
        }
      }
    );
  }

  getPlusRoomInfo() {
    let gameUrl1 = "dark";
    let gameUrl = "darkRoom";
    this.teamService.RoomInfo(gameUrl1, gameUrl).subscribe(
      e => {
        if (e != null) {
          this.PlusDoorStatus = e?.doorStatus;
          this.PlusTeamName = e?.teamName;
          this.PlusScore = e?.score;
        }
      }
    );
  }

  getFloorRoomStatusAndTime() {
    let gameUrl1 = "floor";
    let gameUrl = "floorislava";
    this.teamService.RoomTimeAndStatus(gameUrl1, gameUrl).subscribe(
      e => {
        if (e != null) {
          this.FloorIsLavaRoomStatus = e?.status;
          // if (this.FloorIsLavaRoomStatus == "Started")
            this.FloorIsLavaTime = e.time;
          // else
            // this.FloorIsLavaTime = 0;
        }
      }
    );
  }
  getFloorRoomInfo() {
    let gameUrl1 = "floor";
    let gameUrl = "floorislava";
    this.teamService.RoomInfo(gameUrl1, gameUrl).subscribe(
      e => {
        if (e != null) {
          this.FloorIsLavaDoorStatus = e?.doorStatus;
          this.FloorIsLavaTeamName = e?.teamName;
          this.FloorIsLavaScore = e?.score;
        }
      }
    );
  }
}
