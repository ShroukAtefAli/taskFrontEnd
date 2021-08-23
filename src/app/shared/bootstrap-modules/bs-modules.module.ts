import { NgModule } from '@angular/core';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';


const bsModules = [
  AccordionModule,
  BsDropdownModule,
  TabsModule,
  ModalModule,
  TypeaheadModule
//   PopoverModule
]

@NgModule({
  declarations: [],
  imports: [
    AccordionModule.forRoot(),
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    TypeaheadModule.forRoot()
  ],
  exports: [bsModules,ModalModule]
})

export class BsModulesModule { }
