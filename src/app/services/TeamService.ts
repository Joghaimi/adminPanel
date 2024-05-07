import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private httpClient: HttpClient) { }

  RoomTimeAndStatus(roomName1: string, roomName: string): Observable<any> {
    return this.httpClient.get('http://' + roomName1 + '.local:5000/api/' + roomName + '/TimeAndStatus');
  }
  RoomInfo(roomName1: string, roomName: string): Observable<any> {
    return this.httpClient.get('http://' + roomName1 + '.local:5000/api/' + roomName + '/RoomInfo');
  }
  ChangeRoomStatus(roomName1: string, roomName: string, roomStatus: string): Observable<any> {
    return this.httpClient.post('http://' + roomName1 + '.local:5000/api/' + roomName + '/RoomStatus?gameStatus=' + roomStatus, roomStatus);
  }
  ChangeDoorStatus(roomName1: string, roomName: string, doorStatus: string): Observable<any> {
    return this.httpClient.get('http://' + roomName1 + '.local:5000/api/' + roomName + '/DoorControl?doorStatus=' + doorStatus);
  }
  SetRoomColor(roomName1: string, roomName: string, rgbcolor: string): Observable<any> {
    return this.httpClient.get('http://' + roomName1 + '.local:5000/api/' + roomName + '/RGBColor?newColor=' + rgbcolor);
  }
  ControlObstacle(roomName1: string, roomName: string, status: boolean): Observable<any> {
    return this.httpClient.get('http://' + roomName1 + '.local:5000/api/' + roomName + '/Obstacle?status=' + status);
  }
  
}
