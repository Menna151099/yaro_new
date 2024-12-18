import { Component } from '@angular/core';
import { FooterComponent } from '../../componants/footer/footer.component';
import { FooteritemComponent } from '../../componants/footeritem/footeritem.component';
import { UpbuttonComponent } from '../../componants/upbutton/upbutton.component';
import { HeaderplacesComponent} from '../../componants/headerplaces/headerplaces.component';
import { CardsComponent } from '../../componants/cards/cards.component';

@Component({
  selector: 'app-places',
  standalone: true,
  imports: [CardsComponent,FooteritemComponent,FooterComponent, UpbuttonComponent ,UpbuttonComponent ,HeaderplacesComponent],
  templateUrl: './places.component.html',
  styleUrl: './places.component.css'
})
export class PlacesComponent {

}
