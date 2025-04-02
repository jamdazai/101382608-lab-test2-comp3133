/**
 * @author: Jam Furaque
 * This is for our filters.
 * These have some few of our imported products from US.
 * Lol kidding, tariffs it is.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MissionfilterComponent } from './missionfilter.component';

describe('MissionfilterComponent', () => {
  let component: MissionfilterComponent;
  let fixture: ComponentFixture<MissionfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissionfilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
