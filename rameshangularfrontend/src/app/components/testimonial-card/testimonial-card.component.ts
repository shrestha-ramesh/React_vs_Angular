import { Component, OnInit, Input } from '@angular/core';
import { DescriptionImageComponent } from '../description-image/description-image.component';

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.css']
})
export class TestimonialCardComponent implements OnInit {

  constructor() { }
  @Input() testimonialImage:string;
  @Input() testimonialDescription:string;
  @Input() testimonialCompany:string;
  ngOnInit(): void {
  }

}
