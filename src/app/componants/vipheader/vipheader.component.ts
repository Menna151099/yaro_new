import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-vipheader',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './vipheader.component.html',
  styleUrl: './vipheader.component.css'
})
export class VipheaderComponent {

}

