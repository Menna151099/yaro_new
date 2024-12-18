import { Component } from '@angular/core';
import { VipheaderComponent } from '../../componants/vipheader/vipheader.component';
import { VipdetailComponent } from '../../componants/vipdetail/vipdetail.component';
import { VipphotoComponent } from '../../componants/vipphoto/vipphoto.component';
import { FooterComponent } from '../../componants/footer/footer.component';
import { FooteritemComponent } from '../../componants/footeritem/footeritem.component';
import { UpbuttonComponent } from '../../componants/upbutton/upbutton.component';
@Component({
  selector: 'app-vip',
  standalone: true,
  imports: [
    VipheaderComponent, VipdetailComponent ,
    VipphotoComponent, FooterComponent,
    FooteritemComponent, UpbuttonComponent ],
  templateUrl: './vip.component.html',
  styleUrl: './vip.component.css'
})
export class VipComponent {

}
