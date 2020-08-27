import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial-container',
  templateUrl: './testimonial-container.component.html',
  styleUrls: ['./testimonial-container.component.css']
})
export class TestimonialContainerComponent implements OnInit {

  constructor() { }
  @Input() testimonialImage1:string;
  @Input() testimonialDescription1:string;
  @Input() testimonialCompany1:string;
  @Input() testimonialImage2:string;
  @Input() testimonialDescription2:string;
  @Input() testimonialCompany2:string;
  ngOnInit(): void {
  }

}
