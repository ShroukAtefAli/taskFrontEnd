import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TablePaginationComponent } from './components/table-pagination/table-pagination.component';
import { BsModulesModule } from './bootstrap-modules/bs-modules.module';
import {SpinnerComponent} from './components/spinner/spinner.component'

@NgModule({
  declarations: [
    TablePaginationComponent,SpinnerComponent
  ],
  imports: [CommonModule,BsModulesModule, TranslateModule],
  exports: [
    TranslateModule,
    TablePaginationComponent,
    SpinnerComponent
    ],
})
export class SharedModule {}
