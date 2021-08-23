import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './core/guards/authentication.guard';




const routes: Routes = [
  {
    path: "",
    redirectTo: 'login',
    pathMatch: "full",
  },
  {path: 'login',loadChildren: () =>import('./feature-modules/login/login.module').then((m) => m.LoginModule),},
  {
    path: 'products',
    loadChildren: () =>import('./feature-modules/products/products.module').then((m) => m.ProductsModule),
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'user-view',
    loadChildren: () =>import('./feature-modules/user-view/user-view.module').then((m) => m.UserViewModule),
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'cart',
    loadChildren: () =>import('./feature-modules/cart/cart.module').then((m) => m.CartModule),
    canActivate: [AuthenticationGuard],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
