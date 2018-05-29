import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

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
      { 'id': '17744', 'firstName': 'Kirk', 'lastName': 'Bruen', 'city': 'Alisonside' }
    ];
  }

  onMouseEnter(rowData): void {
    rowData.hover = true;
  }

  onMouseLeave(rowData): void {
    rowData.hover = false;
  }

}
