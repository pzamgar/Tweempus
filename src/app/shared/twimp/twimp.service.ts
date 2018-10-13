import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Author } from '../author/author.model';
import { Twimp } from '../twimp/twimp.model';


@Injectable({
  providedIn: 'root'
})
export class TwimpService {

  private url: string = 'http://localhost:3000/twimps';
  private urlFavorite: string = 'http://localhost:3000/author-favorites';

  constructor(private httpClient: HttpClient) { }

  getTwimps(): Observable<Twimp[]> {
    let twimps: Twimp[] = [];

    return this.httpClient.get(this.url).pipe(
      map(response => {
        const dbTwimpList: any = response;
        for (let i in dbTwimpList) {
          let twimp: Twimp = new Twimp(dbTwimpList[i].id, 'localhost:4200/twimp/' + dbTwimpList[i].id, new Author(dbTwimpList[i].author), dbTwimpList[i].content, dbTwimpList[i].timestamp);
          twimps.push(twimp);
        }
        return twimps;
      }),
      catchError(this.handleError)
    );
  }

  getFavoritesByAuthor(idAuthor: string, idTwimp: string): Observable<boolean> {
    return this.httpClient.get(this.urlFavorite + '/' + idAuthor).pipe(
      map(response => {
        const favorites: string[] = response['twimps'];
        if (favorites.indexOf(idTwimp) === -1) {
          return false;
        } else {
          return true;
        }
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.log('error -> ' + errMsg);
    return throwError(errMsg);
  }

}
