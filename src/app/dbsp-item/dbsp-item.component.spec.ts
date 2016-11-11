/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DbspItemComponent } from './dbsp-item.component';

describe('DbspItemComponent', () => {
  let component: DbspItemComponent;
  let fixture: ComponentFixture<DbspItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbspItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbspItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
