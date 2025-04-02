/**
 * @author: Jam Furaque
 * Do I need to say anything about this? I guess not lol 
 * but it's for my mission details lol
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-missiondetails',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})

export class MissiondetailsComponent {
  launch: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.launch = nav?.extras?.state?.['data'];
  }

  goBack() {
    this.router.navigate(['/']);
  }
  
}
