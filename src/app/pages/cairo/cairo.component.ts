import { Component } from '@angular/core';
import {HeaderplacesComponent} from "../../componants/headerplaces/headerplaces.component";
import { CairoDescribeComponent } from "../../componants/cairo-describe/cairo-describe.component";
import { FooterComponent } from '../../componants/footer/footer.component';
import { FooteritemComponent } from '../../componants/footeritem/footeritem.component';
import { UpbuttonComponent } from '../../componants/upbutton/upbutton.component';
@Component({
  selector: 'app-cairo',
  standalone: true,
  imports: [
    HeaderplacesComponent,
    CairoDescribeComponent,
    FooterComponent, FooteritemComponent, UpbuttonComponent,
  ],
  templateUrl: './cairo.component.html',
  styleUrl: './cairo.component.css'
})
export class CairoComponent {

}
