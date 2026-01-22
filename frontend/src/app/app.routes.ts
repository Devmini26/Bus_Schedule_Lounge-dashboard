import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { DeparturesComponent } from './features/departures/departures.component';
import { ArrivalComponent } from './features/Arrivals/Arrival.component';
import { AdvertisementsComponent } from './features/advertisements/advertisements.component';
import { BusScheduleComponent } from './features/bus-schedule/bus-schedule.component';
import { BidsDisplayComponent } from './features/bids-display/bids-display.component';
import { LoungeComponent } from './features/lounge/lounge.component';
import { LoginComponent } from './features/auth/login.component';

export const routes: Routes = [
	{ path: '', pathMatch: 'full', component: HomeComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'departures', component: DeparturesComponent },
	{ path: 'arrivals', component: ArrivalComponent },
	{ path: 'bus-schedule', component: BusScheduleComponent },
	{ path: 'bids-display', component: BidsDisplayComponent },
	{ path: 'advertisements', component: AdvertisementsComponent },
	{ path: 'lounge', component: LoungeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: '**', redirectTo: '' }
];
