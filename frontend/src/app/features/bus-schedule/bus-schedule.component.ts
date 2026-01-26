import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header/header.component';

@Component({
  selector: 'app-bus-schedule',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './bus-schedule.component.html',
  styleUrl: './bus-schedule.component.scss'
})
export class BusScheduleComponent {
  lounges = [
    { id: 'L0001', name: 'Dmm Lounge', district: 'Colombo', groups: 'Group B' },
    { id: 'L0002', name: 'Araliya Lounge', district: 'Colombo', groups: 'Group A' },
    { id: 'L0003', name: 'Dmm Lounge', district: 'Gampaha', groups: 'Group C' },
    { id: 'L0004', name: 'Sky Lounge', district: 'Galle', groups: 'Group D' },
    { id: 'L0005', name: 'SEN Lounge', district: 'Kaluthata', groups: 'Group E' }
  ];

  constructor(private router: Router) {}

  viewSchedules(lounge: any) {
    this.router.navigate(['/bids-display'], {
      queryParams: {
        loungeId: lounge.id,
        loungeName: lounge.name
      }
    });
  }
}
