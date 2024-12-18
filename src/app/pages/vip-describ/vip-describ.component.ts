import { Component } from '@angular/core';
import { VipheaderComponent } from '../../componants/vipheader/vipheader.component';
import { VipRateComponent } from '../../componants/vip-rate/vip-rate.component';
import { CardreviewComponent } from "../../componants/cardreview/cardreview.component";

@Component({
  selector: 'app-vip-describ',
  standalone: true,
  imports: [VipheaderComponent, VipRateComponent, CardreviewComponent],
  templateUrl: './vip-describ.component.html',
  styleUrl: './vip-describ.component.css'
})
export class VipDescribComponent {

}


