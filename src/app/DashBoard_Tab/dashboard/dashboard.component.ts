import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStatewise } from '@app/shared/models/IStatewise';
import { CovidStatewiseServiceService } from '@app/Core/services/dashboard-covid-services/covid-statewise-service.service';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('detailExpand', [
      state(
        'collapsed',
        style({ height: '0px', minHeight: '0', visibility: 'hidden' })
      ),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class DashboardComponent implements OnInit {
  stateData: IStatewise[];
  isExpansionDetailRow = (i: number, row: Object) =>
    row.hasOwnProperty('detailRow');
  expandedElement: any;
  confirmed: string;
  active: string;
  recovered: string;
  deceased: string;
  stateToBeExpanded: string;
  AllStateDistrictData: any;

  displayedColumns = ['state', 'active', 'confirmed', 'recovered', 'deaths'];
  constructor(
    private http: HttpClient,
    private stateWiseData: CovidStatewiseServiceService
  ) {}
  ngOnInit(): void {
    this.stateWiseData.getStateWiseDetails().subscribe(
      (data) => {
        this.getStateWiseDetails(data);
      },
      (err) => {
        console.log('HTTP Error', err);
      }
    );
    this.stateWiseData.getDistrictWiseDetails().subscribe(
      (data) => {
        this.AllStateDistrictData = data;
      },
      (err) => {
        console.log('HTTP Error', err);
      }
    );
  }

  getStateWiseDetails(data) {
    this.stateData = data.statewise;
    this.active = this.stateData[0].active;
    this.confirmed = this.stateData[0].confirmed;
    this.deceased = this.stateData[0].deaths;
    this.recovered = this.stateData[0].recovered;
    this.stateData = this.stateData.slice(1);
  }

  districts(state) {
    return this.AllStateDistrictData[state].districtData;
  }
}
