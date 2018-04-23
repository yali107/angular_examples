import { Component, OnInit } from '@angular/core';

import { Data } from './data.model';
import { DATA } from './mock-data';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  data = DATA;

  selectedData: Data;

  constructor() { }

  ngOnInit() {
  }

  onSelect(data: Data): void {
    this.selectedData = data
  }

}
