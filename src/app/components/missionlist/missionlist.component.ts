/**
 * @author: Jam Furaque
 * TADAAAAAA! MORE IMPORT PRODUCTS HERE!
 * Kidding, it's just for the list of the missions from the API
 * Anyway, it's easy to read right? I only have few functions because I want to submit right away lol
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaunchService } from '../../services/launch.service';
import { MissionfilterComponent } from '../mission-filter/missionfilter.component';
import { Router } from '@angular/router';
import { Launch } from '../../interfaces/launch.interface';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [CommonModule, MissionfilterComponent, MatCardModule, MatButtonModule],
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})


export class MissionlistComponent implements OnInit {
  launches: Launch[] = [];
  filteredLaunches: Launch[] = [];
  selectedYear = '';
  selectedLaunchStatus = 'All';
  selectedLandingStatus = 'All';

  constructor(private launchService: LaunchService, private router: Router) {}
  ngOnInit(): void {
    this.launchService.getLaunches().subscribe(data => {
      this.launches = data;
      this.filteredLaunches = data;
    });
  }

  applyFilters() {
    this.filteredLaunches = this.launches.filter(launch => {
      const matchYear = this.selectedYear
        ? launch.launch_year === this.selectedYear
        : true;
  
      const matchLaunch = this.selectedLaunchStatus === 'All'
        ? true
        : this.selectedLaunchStatus === 'Successful'
          ? launch.launch_success === true
          : launch.launch_success === false;
  
      const core = launch.rocket?.first_stage?.cores?.[0];
      const landSuccess = core?.land_success;
  
      const matchLanding = this.selectedLandingStatus === 'All'
        ? true
        : this.selectedLandingStatus === 'Successful'
          ? landSuccess === true
          : landSuccess === false;
  
      return matchYear && matchLaunch && matchLanding;
    });
  }
  

  onFilterYear(year: string) {
    this.selectedYear = year;
    this.applyFilters();
  }
  
  onFilterLaunchStatus(status: string) {
    this.selectedLaunchStatus = status;
    this.applyFilters();
  }
  
  onFilterLandingStatus(status: string) {
    this.selectedLandingStatus = status;
    this.applyFilters();
  }

  goToDetails(launch: any) {
    this.router.navigate(['/mission', launch.flight_number], {
      state: { data: launch }
    });
  }
}
