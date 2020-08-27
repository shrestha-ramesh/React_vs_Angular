import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-company-vision-card',
  templateUrl: './company-vision-card.component.html',
  styleUrls: ['./company-vision-card.component.css']
})
export class CompanyVisionCardComponent implements OnInit {

  constructor() { }
  @Input() message1:string;
  @Input() message2:string;
  @Input() shadow:string;
  ngOnInit(): void {
  }

}
