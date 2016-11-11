/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DbspItemListComponent } from './dbsp-item-list.component';

describe('DbspItemListComponent', () => {
  let component: DbspItemListComponent;
  let fixture: ComponentFixture<DbspItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbspItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbspItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
