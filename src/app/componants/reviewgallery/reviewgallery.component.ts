import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reviewgallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviewgallery.component.html',
  styleUrls: ['./reviewgallery.component.css'],
})
export class ReviewgalleryComponent {
  images = [
    { src: 'assets/img/gallery/1.jpeg', alt: 'Image 1' },
    { src: 'assets/img/gallery/2.jpeg', alt: 'Image 2' },
    { src: 'assets/img/gallery/3.jpeg', alt: 'Image 3' },
    { src: 'assets/img/gallery/4.jpg', alt: 'Image 4' },
    { src: 'assets/img/gallery/5.jpeg', alt: 'Image 5' },
    { src: 'assets/img/gallery/6.jpeg', alt: 'Image 6' },
    { src: 'assets/img/gallery/7.jpg', alt: 'Image 7' },
    { src: 'assets/img/gallery/8.jpg', alt: 'Image 8' },
    { src: 'assets/img/gallery/9.jpg', alt: 'Image 9' },
    { src: 'assets/img/gallery/10.jpg', alt: 'Image 10' },
    { src: 'assets/img/gallery/11.jpeg', alt: 'Image 11' },
    { src: 'assets/img/gallery/12.jpeg', alt: 'Image 12' },
    { src: 'assets/img/gallery/13.jpeg', alt: 'Image 13' },
    { src: 'assets/img/gallery/14.jpeg', alt: 'Image 14' },
    { src: 'assets/img/gallery/15.jpg', alt: 'Image 15' },
    { src: 'assets/img/gallery/16.jpg', alt: 'Image 16' },
    { src: 'assets/img/gallery/17.jpg', alt: 'Image 17' },
    { src: 'assets/img/gallery/18.jpg', alt: 'Image 18' },
    { src: 'assets/img/gallery/19.jpg', alt: 'Image 19' },
    { src: 'assets/img/gallery/20.jpg', alt: 'Image 20' },
    { src: 'assets/img/gallery/21.jpg', alt: 'Image 21' },
    { src: 'assets/img/gallery/22.jpg', alt: 'Image 22' },
    { src: 'assets/img/gallery/23.jpg', alt: 'Image 23' },
    { src: 'assets/img/gallery/24.jpg', alt: 'Image 24' },
    { src: 'assets/img/gallery/25.jpg', alt: 'Image 25' },
    { src: 'assets/img/gallery/26.jpg', alt: 'Image 26' },
    { src: 'assets/img/gallery/27.jpg', alt: 'Image 27' },
    { src: 'assets/img/gallery/28.jpg', alt: 'Image 28' },
    { src: 'assets/img/gallery/29.jpg', alt: 'Image 29' },
    { src: 'assets/img/gallery/30.jpg', alt: 'Image 30' },
    { src: 'assets/img/gallery/31.jpg', alt: 'Image 31' },
    { src: 'assets/img/gallery/32.jpg', alt: 'Image 32' },
    { src: 'assets/img/gallery/33.jpg', alt: 'Image 33' },
    { src: 'assets/img/gallery/34.jpg', alt: 'Image 34' },
    { src: 'assets/img/gallery/35.jpg', alt: 'Image 35' },
    { src: 'assets/img/gallery/36.jpg', alt: 'Image 36' },
    { src: 'assets/img/gallery/37.jpg', alt: 'Image 37' },
    { src: 'assets/img/gallery/38.jpg', alt: 'Image 38' },
    { src: 'assets/img/gallery/39.jpg', alt: 'Image 39' },
    { src: 'assets/img/gallery/40.jpg', alt: 'Image 40' },
    { src: 'assets/img/gallery/41.jpg', alt: 'Image 41' },
    { src: 'assets/img/gallery/42.jpg', alt: 'Image 42' },
    { src: 'assets/img/gallery/43.jpg', alt: 'Image 43' },
    { src: 'assets/img/gallery/44.jpg', alt: 'Image 44' },
    { src: 'assets/img/gallery/45.jpg', alt: 'Image 45' }
  ];

  selectedImage: string | null = null;

  openImage(src: string) {
    this.selectedImage = src;
  }

  closeImage() {
    this.selectedImage = null;
  }
}
