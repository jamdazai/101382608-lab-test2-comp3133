/**
 * @author: Jam Furaque
 * I thought I'm going to be busier with this file but nah, I didn't put too much.
 * Should I put more? Oh please dont't, just have mercy on me hohoho
 */
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-missionfilter',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionfilterComponent {
  @Output() yearSelected = new EventEmitter<string>();
  @Output() launchStatusSelected = new EventEmitter<string>();
  @Output() landingStatusSelected = new EventEmitter<string>();

  launchYears: string[] = [
    '2006', '2007', '2008', '2009', '2010',
    '2012', '2013', '2014', '2015', '2016',
    '2017', '2018', '2019', '2020', '2021', '2022'
  ];

  launchStatusOptions: string[] = ['All', 'Successful', 'Failed'];
  landingStatusOptions: string[] = ['All', 'Successful', 'Failed'];

  onYearChange(event: any) {
    const selectedYear = event.value;
    this.yearSelected.emit(selectedYear);
  }

  onLaunchStatusChange(status: string) {
    this.launchStatusSelected.emit(status);
  }

  onLandingStatusChange(status: string) {
    this.landingStatusSelected.emit(status);
  }
}
