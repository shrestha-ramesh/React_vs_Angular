import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial-carosel',
  templateUrl: './testimonial-carosel.component.html',
  styleUrls: ['./testimonial-carosel.component.css']
})
export class TestimonialCaroselComponent implements OnInit {

  constructor() { }
  firstContainer=true;
  secondContainer=false;
  showFirstContainer(){
    this.firstContainer=true;
    this.secondContainer=false;
  }
  showSecondContainer(){
    this.firstContainer=false;
    this.secondContainer=true;
  }
  ngOnInit(): void {
  }

}
