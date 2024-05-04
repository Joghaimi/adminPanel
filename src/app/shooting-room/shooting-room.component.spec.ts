import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShootingRoomComponent } from './shooting-room.component';

describe('ShootingRoomComponent', () => {
  let component: ShootingRoomComponent;
  let fixture: ComponentFixture<ShootingRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShootingRoomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShootingRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
