
import { Component } from '@angular/core';
import { BannerComponent } from '../../componants/banner/banner.component';
import { AboutusComponent } from '../../componants/aboutus/aboutus.component';
import { ServicesComponent } from '../../componants/services/services.component';
import { StatsComponent } from '../../componants/stats/stats.component';
import { TourgalleryComponent } from '../../componants/tourgallery/tourgallery.component';
import { TourpricesComponent } from '../../componants/tourprices/tourprices.component';
import { ClientreviewsComponent } from '../../componants/clientreviews/clientreviews.component';
import { ContactusComponent } from '../../componants/contactus/contactus.component';
import { MapsComponent } from '../../componants/maps/maps.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    BannerComponent,
    AboutusComponent,
    ServicesComponent,
    StatsComponent,
    TourgalleryComponent,
    TourpricesComponent,
    ClientreviewsComponent,
    ContactusComponent,
    MapsComponent,
  ]
})
export class HomeComponent {
}
