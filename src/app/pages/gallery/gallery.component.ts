import { Component } from '@angular/core';
import { FooterComponent } from "../../componants/footer/footer.component";
import { FooteritemComponent } from '../../componants/footeritem/footeritem.component';
import { UpbuttonComponent } from "../../componants/upbutton/upbutton.component";
import { HeadergalleryComponent } from "../../componants/headergallery/headergallery.component";
import { ReviewgalleryComponent } from "../../componants/reviewgallery/reviewgallery.component";
import { VideogalleryComponent } from '../../componants/videogallery/videogallery.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    FooterComponent,
    FooteritemComponent,
    UpbuttonComponent,
    HeadergalleryComponent,
    ReviewgalleryComponent,
    VideogalleryComponent,
  ],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent { }
