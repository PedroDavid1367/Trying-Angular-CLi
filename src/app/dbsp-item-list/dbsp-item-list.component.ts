import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dbsp-item-list',
  templateUrl: './dbsp-item-list.component.html',
  styleUrls: ['./dbsp-item-list.component.scss']
})
export class DbspItemListComponent implements OnInit {

  public items : string[];

  public constructor() { 
    this.items = ["Pedro", "David", "571"];
  }

  public ngOnInit() {
  }
}
