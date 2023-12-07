import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  constructor(private router: Router) {}
  home() {
    this.router.navigateByUrl('home');
  }
  about() {
    this.router.navigateByUrl('about');
  }
  plans() {
    this.router.navigateByUrl('plans');
  }
  gift() {
    this.router.navigateByUrl('gift');
  }
  eco() {
    this.router.navigateByUrl('eco');
  }

}
