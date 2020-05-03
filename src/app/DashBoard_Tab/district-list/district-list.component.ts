import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-district-list',
  templateUrl: './district-list.component.html',
  styleUrls: ['./district-list.component.css'],
})
export class DistrictListComponent implements OnInit {
  @Input('districtData') stateIs: string;
  constructor() {}
  keys: String[];
  ngOnInit(): void {
  }
}
