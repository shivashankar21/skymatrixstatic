import { Component } from '@angular/core';

@Component({
  selector: 'app-flight-details',
  standalone: true,
  imports: [],
  templateUrl: './flight-details.component.html',
  styleUrl: './flight-details.component.css'
})
export class FlightDetailsComponent {
  addPassengerForm() {
    const passengerForms = document.getElementById('passenger-forms');
    if (passengerForms) { // Add this null check
      const newForm = document.createElement('div');
      newForm.className = 'passenger-form';
      newForm.innerHTML = `
        <h2>Passenger Details</h2>
        <form>
          <label for="name">Name:</label><br>
          <input type="text" id="name" name="name" required><br><br>
          <label for="age">Age:</label><br>
          <input type="number" id="age" name="age" required><br><br>
          <label for="passport">Passport Number:</label><br>
          <input type="text" id="passport" name="passport" required><br><br>
          <label for="email">Email:</label><br>
          <input type="email" id="email" name="email" required><br><br>
        </form>
      `;
      passengerForms.appendChild(newForm);
    }
  }
}
