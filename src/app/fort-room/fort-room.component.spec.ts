import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortRoomComponent } from './fort-room.component';

describe('FortRoomComponent', () => {
  let component: FortRoomComponent;
  let fixture: ComponentFixture<FortRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FortRoomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FortRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
