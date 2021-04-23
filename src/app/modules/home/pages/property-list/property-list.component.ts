import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/shared/models/property';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<Property> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
