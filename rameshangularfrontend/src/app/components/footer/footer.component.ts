import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  @Input() companyTitle:string;
  @Input() navigation:string;
  @Input() careers:string;
  @Input() platform:string;
  @Input() about:string;
  @Input() contact:string;
  @Input() privacy:string;
  @Input() privacyPolicy:string;
  @Input() privacyStatement:string;
  @Input() privacyShield:string;
  @Input() findUs:string;
  @Input() address:string;
  @Input() phoneNumber:string;

  ngOnInit(): void {
  }

}
