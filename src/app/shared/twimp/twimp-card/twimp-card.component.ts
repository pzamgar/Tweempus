import { Component, Input } from '@angular/core';
import { Twimp } from '../twimp.model';

@Component({
  selector: 'tweempus-twimp-card',
  templateUrl: './twimp-card.component.html',
  styleUrls: ['./twimp-card.component.css']
})
export class TwimpCardComponent {
  @Input() twimp: Twimp;
  twimpFavourite(event: any): void {
    this.twimp.favorite = !this.twimp.favorite;
    console.log('Favourite Twimp: ', this.twimp);
  }
}
