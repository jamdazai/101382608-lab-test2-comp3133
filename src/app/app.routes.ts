/**
 * @author: Jam Furaque
 * It's really hard to do this route. 
 * I mean, the route towards submitting this lab test.
 * Kidding.
 */
import { Routes } from '@angular/router';
import { MissionlistComponent } from './components/missionlist/missionlist.component';
import { MissiondetailsComponent } from './components/mission-details/missiondetails.component';


export const routes: Routes = [
  { path: '', component: MissionlistComponent },
  { path: 'mission/:id', component: MissiondetailsComponent }

];
