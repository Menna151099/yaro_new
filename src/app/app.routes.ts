import { Routes } from '@angular/router';
import { AuthGuard } from './All_services/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./pages/signup/signup.component').then((m) => m.SignupComponent),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'places',
    loadComponent: () =>
      import('./pages/places/places.component').then((m) => m.PlacesComponent),
  },
  {
    path: 'details/:id',
    loadComponent: () =>
      import('./pages/placesdetail/placesdetail.component').then((m) => m.PlacesdetailComponent),
  },
  {
    path: 'gallery',
    loadComponent: () =>
      import('./pages/gallery/gallery.component').then((m) => m.GalleryComponent),
  },
  {
    path: 'vip',
    loadComponent: () =>
      import('./pages/vip/vip.component').then((m) => m.VipComponent),
  },
  {
    path: 'cairo',
    loadComponent: () =>
      import('./pages/cairo/cairo.component').then((m) => m.CairoComponent),
  },
  {
    path: 'booking/:id',
    loadComponent: () =>
      import('./pages/booking/booking.component').then((m) => m.BookingComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'booking-vip',
    loadComponent: () =>
      import('./pages/booking-vip/booking-vip.component').then((m) => m.BookingVipComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'booking-nile',
    loadComponent: () =>
      import('./pages/booking-nile/booking-nile.component').then((m) => m.BookingNileComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'vip-describe',
    loadComponent: () =>
      import('./pages/vip-describ/vip-describ.component').then((m) => m.VipDescribComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'nile-describ',
    loadComponent: () =>
      import('./pages/nile-describ/nile-describ.component').then((m) => m.NileDescribComponent),
    canActivate: [AuthGuard],
  },
  // Default route to Home
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // Wildcard route to Home if no route is matched
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

