import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourService } from '../../All_services/tour_services/tour.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  places: any[] = [];

  isLoading = true;
  error: string | null = null;


  constructor(private route: Router, private tourService: TourService) { }

  ngOnInit(): void {
    this.loadTours();
  }

  goToDetails(placeId: string): void {
    this.route.navigate(['details', placeId]);
  }

  loadTours(): void {
    this.tourService.getAllTours().subscribe({
      next: (data) => {
        this.places = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching tours:', err);
        this.error = 'Failed to load tours. Please try again later.';
        this.isLoading = false;
      },
    });
  }
}



