import { Component } from '@angular/core';
import { Phone } from './phone.model';
import { PhonesService } from './phones.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  phones: Phone[] = [];
  constructor(private phonesService: PhonesService){}

  ngOnInit(): void {
    this.phonesService.getPhones().subscribe((phones) => {
      this.phones = phones;
    })
  }

}
