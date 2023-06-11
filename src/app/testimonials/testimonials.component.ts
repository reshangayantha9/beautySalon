import { Component } from '@angular/core';
import{DataService} from '../services/data.service'
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
  providers:[DataService]
})
export class TestimonialsComponent {
  dataArray:Array<any>;
  constructor(private dataService:DataService) {
    this.dataArray=dataService.data;
  }


}
