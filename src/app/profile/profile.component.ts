import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { switchMap } from 'rxjs/operators' ;

import { AuthorService } from '../shared/author/author.service';
import { AuthenticationService } from '../core/authentication.service';

import { Author } from '../shared/author/author.model';

@Component({
  selector: 'tweempus-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  idAuthor: string = null;
  author: Author = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authorService: AuthorService,
    private authService: AuthenticationService) { }

  ngOnInit() {
    this.idAuthor = this.route.snapshot.params['id'];
    this.authorService.getAuthor(this.idAuthor).subscribe(author => this.author = author);
  }

  checkLogin() {
    if (this.authService.token != null) {
      if (this.idAuthor === this.authService.token.idAuthor){
        return true;
      }
    }
    return false;
  }
}
