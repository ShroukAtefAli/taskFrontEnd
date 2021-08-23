import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent {
  @Output() closeModal = new EventEmitter();

  constructor() {}

  onModalClose() {
    this.closeModal.emit();
  }

  onBlankAreaClicked(event) {
    if (event.srcElement.id === "BLANK") {
      this.onModalClose();
    }
  }
}
