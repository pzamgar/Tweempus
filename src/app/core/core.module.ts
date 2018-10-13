import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';

import { AuthGuardService } from './auth-guard.service';

import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [HeaderComponent, NavComponent],
  providers: [AuthGuardService],
  exports: [HeaderComponent, NavComponent]
})
export class CoreModule { }
