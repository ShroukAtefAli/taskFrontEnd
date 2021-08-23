import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerComponent } from './spinner.component';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import { SpinnerService } from '../../../core/services/spinner.service';
import { ChangeDetectorRef } from '@angular/core';
import { Observable, of } from 'rxjs';

class FakeSpinnerService {
  get status() {
    return of(true);
  }
}

describe('SpinnerComponent', () => {
  let component: SpinnerComponent;
  let fixture: ComponentFixture<SpinnerComponent>;

  beforeEach(async(() => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    );
    TestBed.configureTestingModule({
      declarations: [SpinnerComponent],
      providers: [
        ChangeDetectorRef,
        { provide: SpinnerService, useClass: FakeSpinnerService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should show the spinner', () => {
    expect(component.showSpinner).toEqual(true);
  });
});
