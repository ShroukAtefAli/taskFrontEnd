import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OverlayComponent } from './overlay/overlay.component';
import { BsModulesModule } from 'src/app/shared/bootstrap-modules/bs-modules.module';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProductsComponent, OverlayComponent, FormComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    BsModulesModule,
    SharedModule
  ]
})
export class ProductsModule { }
