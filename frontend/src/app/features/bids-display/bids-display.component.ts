import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ScheduleService } from '../../core/services/schedule.service';

@Component({
  selector: 'app-bids-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bids-display.component.html',
  styleUrl: './bids-display.component.scss'
})
export class BidsDisplayComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private scheduleService = inject(ScheduleService);
  
  currentTime: string = '';
  currentDate: string = '';
  loungeId: string = '';
  loungeName: string = '';
  departures: any[] = [];
  arrivals: any[] = [];
  private timeInterval: any;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.loungeId = params['loungeId'] || 'L0001';
      this.loungeName = params['loungeName'] || 'Premium Lounge';
      
      // Load schedule data for this lounge
      const scheduleData = this.scheduleService.getScheduleByLounge(this.loungeId);
      this.departures = scheduleData.departures;
      this.arrivals = scheduleData.arrivals;
    });

    this.updateTime();
    this.timeInterval = setInterval(() => this.updateTime(), 1000);
  }

  ngOnDestroy() {
    if (this.timeInterval) {
      clearInterval(this.timeInterval);
    }
  }

  updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString('en-US', { 
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    this.currentDate = now.toLocaleDateString('en-US', { 
      year: 'numeric',
      month: 'long',
      day: '2-digit'
    }).toUpperCase();
  }
}
