import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../All_services/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  isSmallScreen = false;
  currentPage: string = 'home';
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    // Check initial screen size
    this.isSmallScreen = window.innerWidth <= 991;

    // Subscribe to currentUser observable to update login/logout state
    this.authService.currentUser.subscribe((user) => {
      this.isLoggedIn = !!user;
    });
  }

  toggleMenu() {
    if (this.isSmallScreen) {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  setActivePage(page: string) {
    this.currentPage = page;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isSmallScreen = event.target.innerWidth <= 991;
    if (!this.isSmallScreen) {
      this.isMenuOpen = false;
    }
  }
}
