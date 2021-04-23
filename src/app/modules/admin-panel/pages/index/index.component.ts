import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/shared/models/property';
import { CardComponent } from '../../components/card/card.component';
import { PropertyService } from '../../services/property.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  properties:Array<Property> = [];

  constructor(
    private propertyService: PropertyService
  ) {
  }

  ngOnInit(): void {
    this.propertyService.getAllProperties()
    .subscribe(data => {
      console.log(data);
      this.properties = data;
    });
  }

}
