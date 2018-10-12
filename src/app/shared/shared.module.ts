import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthorService } from './author/author.service';
import { TwimpService } from './twimp/twimp.service';

import { TwimpCardComponent } from './twimp/twimp-card/twimp-card.component';
import { TwimpListComponent } from './twimp/twimp-list/twimp-list.component';
import { AuthorCardComponent } from './author/author-card/author-card.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [TwimpCardComponent, TwimpListComponent, AuthorCardComponent, ErrorComponent],
  providers: [AuthorService, TwimpService],
  exports: [TwimpCardComponent, TwimpListComponent, AuthorCardComponent, RouterModule]
})
export class SharedModule { }
