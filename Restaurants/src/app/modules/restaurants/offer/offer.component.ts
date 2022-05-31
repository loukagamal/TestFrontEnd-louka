import { Component, Input, OnInit } from '@angular/core';
import { Offers } from '../models/Offers';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {
  @Input() offer!:Offers[];
  constructor() { }

  ngOnInit(): void {
  }

  

}
