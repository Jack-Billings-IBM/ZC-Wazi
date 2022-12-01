import { Component, OnInit, Input } from '@angular/core';
import { Phone } from '../phone.model';


@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {
  @Input() phones: Phone[] = [];

  constructor() { }

  ngOnInit(): void {


  }

}
