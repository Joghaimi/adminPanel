import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusRoomComponent } from './plus-room.component';

describe('PlusRoomComponent', () => {
  let component: PlusRoomComponent;
  let fixture: ComponentFixture<PlusRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlusRoomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlusRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
