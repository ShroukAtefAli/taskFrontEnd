import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserGuard } from 'src/app/core/guards/user.guard';
import { CartComponent } from './cart.component';

const routes: Routes = [
  {path:'',component:CartComponent,canActivate: [UserGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
