import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-precautions',
  templateUrl: './precautions.component.html',
  styleUrls: ['./precautions.component.css']
})
export class PrecautionsComponent implements OnInit {
  title="Precautions";
  quote="STAY HOME.SAVE LIVES."

  constructor() { }

  ngOnInit(): void {
  }

}
