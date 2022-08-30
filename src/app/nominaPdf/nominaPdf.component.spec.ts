/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NominaPdfComponent } from './nominaPdf.component';

describe('NominaPdfComponent', () => {
  let component: NominaPdfComponent;
  let fixture: ComponentFixture<NominaPdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NominaPdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NominaPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
