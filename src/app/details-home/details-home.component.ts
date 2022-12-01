import { Component, OnInit } from '@angular/core';
import { PhonesService } from '../phones.service';
import { ActivatedRoute, ParamMap } from "@angular/router";

import { Phone } from '../phone.model';

@Component({
  selector: 'app-details-home',
  templateUrl: './details-home.component.html',
  styleUrls: ['./details-home.component.css']
})
export class DetailsHomeComponent implements OnInit {

  public itemID: string;
  public phone: Phone;

  constructor(
    private phonesService: PhonesService,
    private route: ActivatedRoute
    ) {

  }

  ngOnInit(): void {

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("itemID")) {
        this.itemID = paramMap.get("itemID");
        this.phonesService.getPhone(this.itemID).subscribe((phoneData) => {
          this.phone = phoneData;
        });
      }
    })
  }
}
