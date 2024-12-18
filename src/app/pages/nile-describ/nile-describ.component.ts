import { Component } from '@angular/core';
import { NileRateComponent } from "../../componants/nile-rate/nile-rate.component";
import { HeaderComponent } from "../../componants/header/header.component";
import { CardreviewComponent } from "../../componants/cardreview/cardreview.component";
import { BannerComponent } from "../../componants/banner/banner.component";
import { HeaderplacesComponent } from "../../componants/headerplaces/headerplaces.component";

@Component({
  selector: 'app-nile-describ',
  standalone: true,
  imports: [NileRateComponent, HeaderComponent, CardreviewComponent, BannerComponent, HeaderplacesComponent],
  templateUrl: './nile-describ.component.html',
  styleUrl: './nile-describ.component.css'
})
export class NileDescribComponent {

}
