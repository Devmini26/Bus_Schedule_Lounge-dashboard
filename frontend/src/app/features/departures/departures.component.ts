import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';

@Component({
  selector: 'app-departures',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './departures.component.html',
  styleUrl: './departures.component.scss'
})
export class DeparturesComponent {

}
