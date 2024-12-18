import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-descrip',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './card-descrip.component.html',
  styleUrls: ['./card-descrip.component.css']
})
export class CardDescripComponent {
  @Input() prices: any;
  @Input() availability: string = '';

  @Input() city: string = '';
  @Input() note: string = '';
  @Input() fullDay: string = '';

  @Input() country: string = '';
  @Input() pickUpAndDropOff: string = '';
  @Input() details: string = '';
  @Input() title: string = '';
  @Input() descriptions: string = '';
  @Input() duration: string = '';
  @Input() type: string = '';
  @Input() video: string = '';
  @Input() id: string = '';

  isPopupOpen: boolean = false;

  openPopup(): void {
    this.isPopupOpen = true;
  }

  closePopup(): void {
    this.isPopupOpen = false;
  }
}
