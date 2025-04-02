/**
 * @author: Jam Furaque
 * Is this file important?? Ofcourse
 * I got some errors earlier because I forgot about this lol
 * Luckily, I noticed it but I should've noticed it much sooner right?? hays
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MissionlistComponent } from './missionlist.component';

describe('MissionlistComponent', () => {
  let component: MissionlistComponent;
  let fixture: ComponentFixture<MissionlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissionlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
