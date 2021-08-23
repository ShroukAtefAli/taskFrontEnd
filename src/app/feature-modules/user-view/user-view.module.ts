import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserViewRoutingModule } from './user-view-routing.module';
import { CardDataComponent } from './card-data/card-data.component';
import { UserViewComponent } from './user-view/user-view.component';


@NgModule({
  declarations: [CardDataComponent, UserViewComponent],
  imports: [
    CommonModule,
    UserViewRoutingModule
  ]
})
export class UserViewModule { }
