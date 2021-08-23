import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.scss']
})
export class TablePaginationComponent implements OnInit {

  @Input() totalPages:number;
  @Output() selectPage = new EventEmitter<number>();
  num:number = 0;
  active:any={1:true};

  constructor() { }

  ngOnInit(): void {
  }

  leftClick(){
    if(this.num>0){
      this.num --;
    }
  }
  rightClick(){
    if(this.num < this.totalPages-5){
      this.num ++;
    }
  }

  setActive(e){
    this.active = {}
    this.active[e]=true;
    this.selectPage.emit(e-1);
  }

}
