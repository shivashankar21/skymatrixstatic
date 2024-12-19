import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router: Router) {}
  navigateToNextPage() {
    // const container = document.getElementById('homePage');
    // if (container) { // Add this null check
    //   container.classList.add('slide-up');
    //   setTimeout(() => {
        this.router.navigate(['/search-flights']); // Adjust the route as needed
     // }, 1000); // Adjust delay to match the slide-up transition
    //}}
}
}
