import { Component, Input, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { SpinnerService } from '../../../core/services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit, OnDestroy {
  showSpinner: boolean;
  @Input() fullSpinner: boolean;
  spinnerSubscription;
  constructor(private spinnerService: SpinnerService, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.spinnerSubscription = this.spinnerService.status.subscribe((val: boolean) => {
      this.showSpinner = val;
      this.changeDetectorRef.detectChanges();
    });
  }

  ngOnDestroy() {
    if (this.spinnerSubscription != null) {
       this.spinnerSubscription.unsubscribe();
    }
  }

}
