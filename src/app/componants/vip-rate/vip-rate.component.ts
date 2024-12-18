import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vip-rate',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './vip-rate.component.html',
  styleUrl: './vip-rate.component.css'
})

export class VipRateComponent {

  @Input() prices: any;
  @Input() city: string = '';
  @Input() title: string = '';
  @Input() descriptions: string = '';
  @Input() id: string = '';

}



