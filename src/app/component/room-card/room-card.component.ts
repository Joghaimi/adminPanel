import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-room-card',
  standalone: true,
  imports: [],
  templateUrl: './room-card.component.html',
  styleUrl: './room-card.component.css'
})
export class RoomCardComponent {
  @Input() color: string ="card-light-blue";
  @Input() roomName: string ="card-light-blue";
  @Input() roomStatus: string ="Empty";

}
