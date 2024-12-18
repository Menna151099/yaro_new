import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, RouterOutlet } from '@angular/router';
import { LoadingService } from './All_services/loading_services/loading.service';
import { CommonModule } from '@angular/common';  
import { HeaderComponent } from './componants/header/header.component';
import { FooterComponent } from './componants/footer/footer.component';
import { FooteritemComponent } from './componants/footeritem/footeritem.component';
import { UpbuttonComponent } from './componants/upbutton/upbutton.component';
import { LoadingScreenComponent } from './shared/loading-screen/loading-screen.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent, FooterComponent, FooteritemComponent, UpbuttonComponent, LoadingScreenComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Yaro';
  isLoading = false;
  hideLayout = false;

  constructor(private router: Router, private loadingService: LoadingService) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        const url = event.url;

        this.hideLayout = url.includes('/login') || url.includes('/signup');
        this.loadingService.showLoading();
      } else if (event instanceof NavigationEnd) {
        this.loadingService.hideLoading();
      }
    });

    this.loadingService.loading$.subscribe((loading) => {
      this.isLoading = loading;
    });
  }
}
