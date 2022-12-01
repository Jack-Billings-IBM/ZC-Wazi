import { Component, OnInit } from '@angular/core';
import { Phone } from '../phone.model';
import { PhonesService } from '../phones.service';

@Component({
  selector: 'app-phone-list-home',
  templateUrl: './phone-list-home.component.html',
  styleUrls: ['./phone-list-home.component.css']
})
export class PhoneListHomeComponent implements OnInit {

  phones: Phone[] = [];
  constructor(private phonesService: PhonesService){}

  ngOnInit(): void {
    this.phonesService.getPhones().subscribe((phones) => {
      this.phones = phones;
    })
  }

}
