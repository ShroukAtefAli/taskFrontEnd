import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-data',
  templateUrl: './card-data.component.html',
  styleUrls: ['./card-data.component.scss']
})
export class CardDataComponent implements OnInit {

  @Input() data;
  @Output() addClicked =new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddClick(){
    this.addClicked.emit(true)
  }

}
