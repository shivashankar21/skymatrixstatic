import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-flight-search',
  standalone: true,
  imports: [],
  templateUrl: './flight-search.component.html',
  styleUrl: './flight-search.component.css'
})
export class FlightSearchComponent {

    constructor(private router: Router) {}

    
    user(){
    this.router.navigate(['userlogin']);
}
admin(){
  this.router.navigate(['admin']);
}

  

}
