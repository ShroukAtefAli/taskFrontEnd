import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../../../shared/models/product.model';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() product:Product;
  @Output() updatEvent: EventEmitter<any> =   new EventEmitter<any>() ;




  constructor() { }

  ngOnInit(): void {

  }

  submitForm(form:NgForm){
    console.log(form);
    this.updatEvent.emit(form);

  }

}
