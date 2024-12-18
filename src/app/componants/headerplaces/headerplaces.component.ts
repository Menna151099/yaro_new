import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-headerplaces',
  standalone: true,
  imports: [],
  templateUrl: './headerplaces.component.html',
  styleUrls: ['./headerplaces.component.css'],
})
export class HeaderplacesComponent {
  @Input() title: string = '';
}
