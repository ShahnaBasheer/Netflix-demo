import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  navList = ["Home", "Tv Shows", "News & Popular", "My List", "Browse by Language"];
}
