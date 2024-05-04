import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorRoomComponent } from './floor-room.component';

describe('FloorRoomComponent', () => {
  let component: FloorRoomComponent;
  let fixture: ComponentFixture<FloorRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloorRoomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FloorRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
