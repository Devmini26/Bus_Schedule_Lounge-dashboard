import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';

@Component({
  selector: 'app-arrivals',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './Arrival.component.html',
  styleUrl: './Arrival.component.scss'
})
export class ArrivalComponent {

}
