import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../shared/components/header/header.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  searchTerm: string = '';

  lounges = [
    {
      name: 'COLOMBO PREMIUM LOUNGE',
      departures: [
        { time: '13:05', busNo: 'B-102', routeNumber: 'R-245', destination: 'Kandy', status: 'departed', statusText: 'DEPARTED' },
        { time: '13:20', busNo: 'B-505', routeNumber: 'R-187', destination: 'Anuradhapura', status: 'checkin', statusText: 'CHECK IN', active: true },
        { time: '13:45', busNo: 'B-210', routeNumber: 'R-332', destination: 'Galle', status: 'delay', statusText: 'DELAY 10M' },
        { time: '13:55', busNo: 'B-330', routeNumber: 'R-156', destination: 'Matara', status: 'ontime', statusText: 'ON TIME' },
        { time: '14:10', busNo: 'B-404', routeNumber: 'R-098', destination: 'Jaffna', status: 'ontime', statusText: 'ON TIME' }
      ]
    },
    {
      name: 'DMM LOUNGE',
      departures: [
        { time: '13:05', busNo: 'B-102', routeNumber: 'R-245', destination: 'Kandy', status: 'departed', statusText: 'DEPARTED' },
        { time: '13:20', busNo: 'B-505', routeNumber: 'R-187', destination: 'Anuradhapura', status: 'checkin', statusText: 'CHECK IN', active: true },
        { time: '13:45', busNo: 'B-210', routeNumber: 'R-332', destination: 'Galle', status: 'delay', statusText: 'DELAY 10M' },
        { time: '13:55', busNo: 'B-330', routeNumber: 'R-156', destination: 'Matara', status: 'ontime', statusText: 'ON TIME' },
        { time: '14:10', busNo: 'B-404', routeNumber: 'R-098', destination: 'Jaffna', status: 'ontime', statusText: 'ON TIME' }
      ]
    },
    {
      name: 'ARALIYA LOUNGE',
      departures: [
        { time: '13:05', busNo: 'B-102', routeNumber: 'R-245', destination: 'Kandy', status: 'departed', statusText: 'DEPARTED' },
        { time: '13:20', busNo: 'B-505', routeNumber: 'R-187', destination: 'Anuradhapura', status: 'checkin', statusText: 'CHECK IN', active: true },
        { time: '13:45', busNo: 'B-210', routeNumber: 'R-332', destination: 'Galle', status: 'delay', statusText: 'DELAY 10M' },
        { time: '13:55', busNo: 'B-330', routeNumber: 'R-156', destination: 'Matara', status: 'ontime', statusText: 'ON TIME' },
        { time: '14:10', busNo: 'B-404', routeNumber: 'R-098', destination: 'Jaffna', status: 'ontime', statusText: 'ON TIME' }
      ]
    }
  ];

  get filteredLounges() {
    if (!this.searchTerm.trim()) {
      return this.lounges;
    }
    const term = this.searchTerm.toLowerCase();
    return this.lounges.map(lounge => ({
      ...lounge,
      departures: lounge.departures.filter(dep => 
        lounge.name.toLowerCase().includes(term) ||
        dep.time.toLowerCase().includes(term) ||
        dep.busNo.toLowerCase().includes(term) ||
        dep.routeNumber.toLowerCase().includes(term) ||
        dep.destination.toLowerCase().includes(term) ||
        dep.statusText.toLowerCase().includes(term)
      )
    })).filter(lounge => lounge.departures.length > 0);
  }
}
