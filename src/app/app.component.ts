import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'PrimeNG TurboTable Row Hover Highlight Fix';

  frozenColumns = [
    { field: 'id', header: 'ID' }
  ];

  columns = [
    { field: 'firstName', header: 'First Name' },
    { field: 'lastName', header: 'Last Name' },
    { field: 'city', header: 'City' }
  ];

  users: any[];

  ngOnInit(): void {
    this.users = [
      { 'id': '90264', 'firstName': 'Ignacio', 'lastName': 'Krajcik', 'city': 'Montanaland' },
      { 'id': '62425', 'firstName': 'Shad', 'lastName': 'Reinger', 'city': 'Celestinoland' },
      { 'id': '79761', 'firstName': 'Ron', 'lastName': 'Jacobi', 'city': 'Andersonmouth' },
      { 'id': '80148', 'firstName': 'Otis', 'lastName': 'Ferry', 'city': 'East Kennedifurt' },
      { 'id': '17744', 'firstName': 'Kirk', 'lastName': 'Bruen', 'city': 'Alisonside' },
      { 'id': '71399', 'firstName': 'Bradley', 'lastName': 'Trantow', 'city': 'Kunzeborough' },
      { 'id': '17662', 'firstName': 'Clark', 'lastName': 'Sauer', 'city': 'Pouroshaven' },
      { 'id': '54832', 'firstName': 'Doyle', 'lastName': 'Heathcote', 'city': 'Humbertomouth' },
      { 'id': '39048', 'firstName': 'Ellen', 'lastName': 'Klocko', 'city': 'West Clydehaven' },
      { 'id': '29859', 'firstName': 'Jed', 'lastName': 'Jast', 'city': 'North Faustino' },
      { 'id': '16511', 'firstName': 'Hannah', 'lastName': 'Simonis', 'city': 'Lake Traceport' }
    ]
  }

}
