import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-upbutton',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upbutton.component.html',
  styleUrl: './upbutton.component.css'
})
export class UpbuttonComponent {
  showButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.showButton = scrollPosition > 10;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
