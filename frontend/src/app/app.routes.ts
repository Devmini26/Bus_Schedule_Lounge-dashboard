import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { SchedulesComponent } from './features/schedules/schedules.component';
import { LoungeComponent } from './features/lounge/lounge.component';
import { LoginComponent } from './features/auth/login.component';

export const routes: Routes = [
	{ path: '', pathMatch: 'full', component: HomeComponent },
	{ path: 'schedules', component: SchedulesComponent },
	{ path: 'lounge', component: LoungeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: '**', redirectTo: '' }
];
