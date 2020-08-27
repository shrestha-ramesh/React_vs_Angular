import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-description-image',
  templateUrl: './description-image.component.html',
  styleUrls: ['./description-image.component.css']
})
export class DescriptionImageComponent implements OnInit {

  constructor() { }
  @Input() message1: string;
  @Input() message2: string;
  @Input() message3: string;
  @Input() message4: string;
  @Input() textonleft: boolean;
  @Input() profilebutton: boolean;
  @Input() bgColor: string;
  @Input() textColor: string;
  @Input() logo: string;
  @Input() buttonhide: string;
  @Input() companyLogo:string;
  ngOnInit(): void {
  }

}
