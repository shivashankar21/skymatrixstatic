import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SeatBookingComponent } from './seat-booking/seat-booking.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DeleteFlightComponent } from './delete-flight/delete-flight.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';

export const routes: Routes = [
    { path: '', component: AppComponent },
  { path: 'search-flights', component: FlightSearchComponent},
  { path: 'userlogin', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'seat-booking', component: SeatBookingComponent },
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'delete-flight', component: DeleteFlightComponent },
  { path: 'flight-details', component: FlightDetailsComponent }
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule],
})

export class AppRoutingModule{}