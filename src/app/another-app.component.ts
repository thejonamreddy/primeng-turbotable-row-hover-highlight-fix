import { Component, OnInit, ElementRef } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'another-app-root',
  templateUrl: './another-app.component.html',
  styleUrls: ['./another-app.component.css']
})
export class AnotherAppComponent implements OnInit {

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

  onMouseEnter(elRef: ElementRef): void {
    this.toggle(elRef, true);
  }

  onMouseLeave(elRef: ElementRef): void {
    this.toggle(elRef, false);
  }

  toggle(elRef: ElementRef, flag: boolean) {
    const index = $(elRef).index();
    const parent = $(elRef).closest('.ui-table');

    parent.find('.ui-table-scrollable-body .ui-table-tbody').each((i, tbody) => {
      const tr = $(tbody.children[index]);
      if (flag) {
        tr.addClass('row-hover');
      } else {
        tr.removeClass('row-hover');
      }
    });
  }

}
