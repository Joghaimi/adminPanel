import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatheringRoomComponent } from './gathering-room.component';

describe('GatheringRoomComponent', () => {
  let component: GatheringRoomComponent;
  let fixture: ComponentFixture<GatheringRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GatheringRoomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GatheringRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
