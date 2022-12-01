import { Component, Input, OnInit } from '@angular/core';
import { Phone } from '../phone.model';

@Component({
  selector: 'app-phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.css']
})
export class PhoneDetailComponent implements OnInit {
  @Input() phone: Phone;
  subsystem: String = 'cics';  // initial subsystem data to display is cics

  constructor() { }

  ngOnInit(): void {
  }

}
