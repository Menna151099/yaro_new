import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-nile-rate',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './nile-rate.component.html',
  styleUrl: './nile-rate.component.css'
})
export class NileRateComponent {

  @Input() prices: any;
  @Input() city: string = '';
  @Input() title: string = '';
  @Input() descriptions: string = '';
  @Input() id: string = '';

}

