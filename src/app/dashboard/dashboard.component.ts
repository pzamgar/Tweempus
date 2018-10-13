import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';

import { AuthorService } from '../shared/author/author.service';
import { TwimpService } from '../shared/twimp/twimp.service';
import { AuthenticationService } from '../core/authentication.service';

import { Twimp } from '../shared/twimp/twimp.model';
import { Author } from '../shared/author/author.model';

@Component({
  selector: 'tweempus-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  twimpList: Twimp[] = [];
  constructor(
    private authorService: AuthorService,
    private twimpService: TwimpService,
    private authService: AuthenticationService
    ) { }

    ngOnInit() {
      this.twimpService.getTwimps().subscribe(twimps => {
        from(twimps).subscribe(twimp => {
          this.authorService.getAuthor(twimp.author.id).subscribe(author => {
            twimp.author = author;
            this.twimpService.getFavoritesByAuthor(this.authService.token.idAuthor, twimp.id).subscribe(favorite => {
              twimp.favorite = favorite;
              console.log(twimp.favorite);
              this.twimpList.push(twimp);
            });
          });
        });
      });
    }

}
