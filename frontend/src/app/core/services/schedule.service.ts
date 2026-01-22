import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  private scheduleData: any = {
    'L0001': {
      name: 'Dmm Lounge',
      departures: [
        { time: '13:05', busNo: 'B-102', routeNo: 'R-245', destination: 'Kandy', remarks: 'DEPARTED', status: 'departed' },
        { time: '13:20', busNo: 'B-505', routeNo: 'R-187', destination: 'Anuradhapura', remarks: 'CHECK IN', status: 'checkin', indicator: true },
        { time: '13:45', busNo: 'B-210', routeNo: 'R-332', destination: 'Galle', remarks: 'DELAY 15M', status: 'delay', indicator: true },
        { time: '13:55', busNo: 'B-330', routeNo: 'R-156', destination: 'Matara', remarks: 'ON TIME', status: 'ontime', indicator: true },
        { time: '14:10', busNo: 'B-404', routeNo: 'R-098', destination: 'Jaffna', remarks: 'ON TIME', status: 'ontime' }
      ],
      arrivals: [
        { time: '12:55', busNo: 'A-099', routeNo: 'R-210', origin: 'Matale', remarks: 'ARRIVED AT 13.00', status: 'arrived' },
        { time: '13:10', busNo: 'A-042', routeNo: 'R-176', origin: 'Colombo', remarks: 'EXPECTED AT 13.15', status: 'expected', indicator: true },
        { time: '13:20', busNo: 'A-115', routeNo: 'R-289', origin: 'Galle', remarks: 'EXPECTED AT 13.22', status: 'expected', indicator: true },
        { time: '13:45', busNo: 'A-220', routeNo: 'R-134', origin: 'Jaffna', remarks: 'DELAYED', status: 'delayed', indicator: true },
        { time: '14:00', busNo: 'A-305', routeNo: 'R-412', origin: 'Kaluthara', remarks: '', status: '' }
      ]
    },
    'L0002': {
      name: 'Araliya Lounge',
      departures: [
        { time: '13:05', busNo: 'B-182', routeNo: 'R-245', destination: 'Matara', remarks: 'DEPARTED', status: 'departed' },
        { time: '13:20', busNo: 'B-555', routeNo: 'R-187', destination: 'Awissawella', remarks: 'CHECK IN', status: 'checkin', indicator: true },
        { time: '13:45', busNo: 'B-210', routeNo: 'R-332', destination: 'Colombo', remarks: 'DELAY 10M', status: 'delay', indicator: true },
        { time: '13:55', busNo: 'B-330', routeNo: 'R-156', destination: 'Galle', remarks: 'ON TIME', status: 'ontime', indicator: true },
        { time: '14:10', busNo: 'B-404', routeNo: 'R-098', destination: 'Jaffna', remarks: 'ON TIME', status: 'ontime' }
      ],
      arrivals: [
        { time: '12:55', busNo: 'A-090', routeNo: 'R-210', origin: 'Jaffna', remarks: 'ARRIVED AT 13.00', status: 'arrived' },
        { time: '13:10', busNo: 'A-040', routeNo: 'R-176', origin: 'Negombo', remarks: 'EXPECTED AT 13.15', status: 'expected', indicator: true },
        { time: '13:20', busNo: 'A-115', routeNo: 'R-289', origin: 'Kurunegala', remarks: 'EXPECTED AT 13.22', status: 'expected', indicator: true },
        { time: '13:45', busNo: 'A-225', routeNo: 'R-134', origin: 'Galle', remarks: 'DELAYED', status: 'delayed', indicator: true },
        { time: '14:00', busNo: 'A-306', routeNo: 'R-412', origin: 'Negombo', remarks: '', status: '' }
      ]
    },
    'L0003': {
      name: 'Dmm Lounge',
      departures: [
        { time: '13:05', busNo: 'B-102', routeNo: 'R-245', destination: 'Kandy', remarks: 'DEPARTED', status: 'departed' },
        { time: '13:20', busNo: 'B-505', routeNo: 'R-187', destination: 'Anuradhapura', remarks: 'CHECK IN', status: 'checkin', indicator: true },
        { time: '13:45', busNo: 'B-210', routeNo: 'R-332', destination: 'Galle', remarks: 'DELAY 15M', status: 'delay', indicator: true },
        { time: '13:55', busNo: 'B-330', routeNo: 'R-156', destination: 'Matara', remarks: 'ON TIME', status: 'ontime', indicator: true },
        { time: '14:10', busNo: 'B-404', routeNo: 'R-098', destination: 'Jaffna', remarks: 'ON TIME', status: 'ontime' }
      ],
      arrivals: [
        { time: '12:55', busNo: 'A-099', routeNo: 'R-210', origin: 'Matale', remarks: 'ARRIVED AT 13.00', status: 'arrived' },
        { time: '13:10', busNo: 'A-042', routeNo: 'R-176', origin: 'Colombo', remarks: 'EXPECTED AT 13.15', status: 'expected', indicator: true },
        { time: '13:20', busNo: 'A-115', routeNo: 'R-289', origin: 'Galle', remarks: 'EXPECTED AT 13.22', status: 'expected', indicator: true },
        { time: '13:45', busNo: 'A-220', routeNo: 'R-134', origin: 'Jaffna', remarks: 'DELAYED', status: 'delayed', indicator: true },
        { time: '14:00', busNo: 'A-305', routeNo: 'R-412', origin: 'Kaluthara', remarks: '', status: '' }
      ]
    },
    'L0004': {
      name: 'Sky Lounge',
      departures: [
        { time: '13:05', busNo: 'B-103', routeNo: 'R-245', destination: 'Matale', remarks: 'DEPARTED', status: 'departed' },
        { time: '13:20', busNo: 'B-504', routeNo: 'R-187', destination: 'Trinco', remarks: 'CHECK IN', status: 'checkin', indicator: true },
        { time: '13:45', busNo: 'B-211', routeNo: 'R-332', destination: 'Gampaha', remarks: 'DELAY 10M', status: 'delay', indicator: true },
        { time: '13:55', busNo: 'B-338', routeNo: 'R-156', destination: 'Galle', remarks: 'ON TIME', status: 'ontime', indicator: true },
        { time: '14:10', busNo: 'B-409', routeNo: 'R-098', destination: 'Kegalle', remarks: 'ON TIME', status: 'ontime' }
      ],
      arrivals: [
        { time: '12:55', busNo: 'A-093', routeNo: 'R-210', origin: 'Kandy', remarks: 'ARRIVED AT 13.00', status: 'arrived' },
        { time: '13:10', busNo: 'A-041', routeNo: 'R-176', origin: 'Colombo', remarks: 'EXPECTED AT 13.15', status: 'expected', indicator: true },
        { time: '13:20', busNo: 'A-112', routeNo: 'R-289', origin: 'Matara', remarks: 'EXPECTED AT 13.22', status: 'expected', indicator: true },
        { time: '13:45', busNo: 'A-222', routeNo: 'R-134', origin: 'Jaffna', remarks: 'DELAYED', status: 'delayed', indicator: true },
        { time: '14:00', busNo: 'A-303', routeNo: 'R-412', origin: 'Negombo', remarks: '', status: '' }
      ]
    },
    'L0005': {
      name: 'SEN Lounge',
      departures: [
        { time: '13:05', busNo: 'B-102', routeNo: 'R-245', destination: 'Kandy', remarks: 'DEPARTED', status: 'departed' },
        { time: '13:20', busNo: 'B-505', routeNo: 'R-187', destination: 'Anuradhapura', remarks: 'CHECK IN', status: 'checkin', indicator: true },
        { time: '13:45', busNo: 'B-210', routeNo: 'R-332', destination: 'Galle', remarks: 'DELAY 15M', status: 'delay', indicator: true },
        { time: '13:55', busNo: 'B-330', routeNo: 'R-156', destination: 'Matara', remarks: 'ON TIME', status: 'ontime', indicator: true },
        { time: '14:10', busNo: 'B-404', routeNo: 'R-098', destination: 'Jaffna', remarks: 'ON TIME', status: 'ontime' }
      ],
      arrivals: [
        { time: '12:55', busNo: 'A-099', routeNo: 'R-210', origin: 'Matale', remarks: 'ARRIVED AT 13.00', status: 'arrived' },
        { time: '13:10', busNo: 'A-042', routeNo: 'R-176', origin: 'Colombo', remarks: 'EXPECTED AT 13.15', status: 'expected', indicator: true },
        { time: '13:20', busNo: 'A-115', routeNo: 'R-289', origin: 'Galle', remarks: 'EXPECTED AT 13.22', status: 'expected', indicator: true },
        { time: '13:45', busNo: 'A-220', routeNo: 'R-134', origin: 'Jaffna', remarks: 'DELAYED', status: 'delayed', indicator: true },
        { time: '14:00', busNo: 'A-305', routeNo: 'R-412', origin: 'Kaluthara', remarks: '', status: '' }
      ]
    }
  };

  getScheduleByLounge(loungeId: string) {
    return this.scheduleData[loungeId] || this.scheduleData['L0001'];
  }
}
