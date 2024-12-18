import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TourService } from '../../All_services/tour_services/tour.service';
import { HeaderplacesComponent } from '../../componants/headerplaces/headerplaces.component';
import { CardDescripComponent } from '../../componants/card-descrip/card-descrip.component';
import { CardreviewComponent } from '../../componants/cardreview/cardreview.component';

@Component({
  selector: 'app-placesdetail',
  standalone: true,
  imports: [
    HeaderplacesComponent,
    CardreviewComponent,
    CardDescripComponent,
  ],
  templateUrl: './placesdetail.component.html',
  styleUrls: ['./placesdetail.component.css'],
})
export class PlacesdetailComponent implements OnInit {
  tourId: string | null = null;
  tourData: any;

  constructor(
    private route: ActivatedRoute,
    private tourService: TourService
  ) {
    console.log('tourData:', this.tourData);

  }

  ngOnInit(): void {
    // Retrieve the tour ID from the route parameters
    this.tourId = this.route.snapshot.paramMap.get('id');
    if (this.tourId) {
      this.fetchTourDetails(this.tourId);
    }
  }

  fetchTourDetails(id: string): void {
    this.tourService.getTourById(id).subscribe(
      (data) => {
        this.tourData = data;
        console.log('Tour Data:', data);
      },
      (error) => {
        console.error('Error fetching tour details:', error);
      }
    );
  }
}
