import { Component, OnInit } from '@angular/core';
import { Icars } from '../models/Icars';

@Component({
  selector: 'app-cars-details',
  templateUrl: './cars-details.component.html',
  styleUrls: ['./cars-details.component.scss']
})
export class CarsDetailsComponent implements OnInit {
  @Input() cars : Icars[]
  constructor() { }

  ngOnInit(): void {
  }

}
