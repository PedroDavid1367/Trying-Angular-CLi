import { Component, OnInit } from '@angular/core';
import { DbspItemServiceService } from "../dbsp-item-service.service";

@Component({
  selector: 'dbsp-item-details',
  templateUrl: './dbsp-item-details.component.html',
  styleUrls: ['./dbsp-item-details.component.scss']
})
export class DbspItemDetailsComponent implements OnInit {

  public decorator: string;

  public constructor(private service: DbspItemServiceService) { 
    service.decorate$.subscribe(dec => 
    {
      this.decorator = dec;
    });
  }

  public ngOnInit() {
  }
}
