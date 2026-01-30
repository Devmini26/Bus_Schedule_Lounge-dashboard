import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../shared/components/header/header.component';

@Component({
  selector: 'app-arrivals',
  standalone: true,
  imports: [HeaderComponent, CommonModule, FormsModule],
  templateUrl: './Arrival.component.html',
  styleUrl: './Arrival.component.scss'
})
export class ArrivalComponent {
  searchTerm: string = '';

  lounges = [
    {
      name: 'COLOMBO PERMIUM LOUNG',
      arrivals: [
        { time: '12:55', busNo: 'A-093', routeNumber: 'R-210', origin: 'Kandy', status: 'arrived', statusText: 'ARRIVED AT 13.00' },
        { time: '13:10', busNo: 'A-041', routeNumber: 'R-176', origin: 'Colombo', status: 'expected', statusText: 'EXPECTED AT 13.15', active: true },
        { time: '13:20', busNo: 'A-112', routeNumber: 'R-289', origin: 'Matara', status: 'expected', statusText: 'EXPECTED AT 13.22', active: true },
        { time: '13:45', busNo: 'A-222', routeNumber: 'R-134', origin: 'Jaffna', status: 'delayed', statusText: 'DELAYED', active: true },
        { time: '14:00', busNo: 'A-303', routeNumber: 'R-412', origin: 'Negombo', status: '', statusText: '' }
      ]
    },
    {
      name: 'DMM LOUNGE',
      arrivals: [
        { time: '12:55', busNo: 'A-099', routeNumber: 'R-210', origin: 'Matale', status: 'arrived', statusText: 'ARRIVED AT 13.00' },
        { time: '13:10', busNo: 'A-042', routeNumber: 'R-176', origin: 'Colombo', status: 'expected', statusText: 'EXPECTED AT 13.15', active: true },
        { time: '13:20', busNo: 'A-115', routeNumber: 'R-289', origin: 'Galle', status: 'expected', statusText: 'EXPECTED AT 13.22', active: true },
        { time: '13:45', busNo: 'A-220', routeNumber: 'R-134', origin: 'Jaffna', status: 'delayed', statusText: 'DELAYED', active: true },
        { time: '14:00', busNo: 'A-305', routeNumber: 'R-412', origin: 'Kaluthara', status: '', statusText: '' }
      ]
    },
    {
      name: 'ARALIYA LOUNGE',
      arrivals: [
        { time: '12:55', busNo: 'A-090', routeNumber: 'R-210', origin: 'Jaffna', status: 'arrived', statusText: 'ARRIVED AT 13.00' },
        { time: '13:10', busNo: 'A-040', routeNumber: 'R-176', origin: 'Negombo', status: 'expected', statusText: 'EXPECTED AT 13.15', active: true },
        { time: '13:20', busNo: 'A-115', routeNumber: 'R-289', origin: 'Kurunegala', status: 'expected', statusText: 'EXPECTED AT 13.22', active: true },
        { time: '13:45', busNo: 'A-225', routeNumber: 'R-134', origin: 'Galle', status: 'delayed', statusText: 'DELAYED', active: true },
        { time: '14:00', busNo: 'A-306', routeNumber: 'R-412', origin: 'Negombo', status: '', statusText: '' }
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
      arrivals: lounge.arrivals.filter(arr => 
        lounge.name.toLowerCase().includes(term) ||
        arr.time.toLowerCase().includes(term) ||
        arr.busNo.toLowerCase().includes(term) ||
        arr.routeNumber.toLowerCase().includes(term) ||
        arr.origin.toLowerCase().includes(term) ||
        arr.statusText.toLowerCase().includes(term)
      )
    })).filter(lounge => lounge.arrivals.length > 0);
  }
}
