import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RoomCardComponent } from './component/room-card/room-card.component';
import { FortRoomComponent } from './fort-room/fort-room.component';
import { ShootingRoomComponent } from './shooting-room/shooting-room.component';
import { DivingRoomComponent } from './diving-room/diving-room.component';
import { PlusRoomComponent } from './plus-room/plus-room.component';
import { FloorRoomComponent } from './floor-room/floor-room.component';
import { TeamService } from './services/TeamService';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,
    RoomCardComponent, FortRoomComponent,
    ShootingRoomComponent,
    DivingRoomComponent,
    PlusRoomComponent,
    FloorRoomComponent

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'adminPanel';
  showFortRoom = true;
  showShootingRoom = false;
  showDivingRoom = false;
  showPlusMinusRoom = false;
  showFloorIsLavaRoom = false;
  
  FortRoomStatus = "Empty";
  FortTime=0;
  FloorIsLavaRoomStatus = "Empty";
  ShootingRoomStatus = "Empty";
  DivingRoomStatus = "Empty";
  PlusRoomStatus = "Empty";


  constructor(private teamService: TeamService) {

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

  getRoomStatusAndTime() {
    //
    let gameUrl1 = "fort";
    let gameUrl = "fortRoom";
    this.teamService.RoomTimeAndStatus(gameUrl1, gameUrl).subscribe(
      e => {
        if (e != null) {
          this.FortRoomStatus = e?.status;
          this.FortTime=e.time;  
        }
      }
    );

  }





}
