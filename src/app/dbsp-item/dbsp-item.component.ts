import { Component, OnInit, Input } from '@angular/core';
import { DbspItemServiceService } from "../dbsp-item-service.service";

@Component({
  selector: 'dbsp-item',
  template: `
  <p (click)="decorateDetails()">
    {{ item }}
  </p>
  `,
  styleUrls: ['./dbsp-item.component.scss']
})
export class DbspItemComponent implements OnInit {

  @Input() item: string;

  public constructor(private service: DbspItemServiceService) { }

  public ngOnInit() {
  }

    public decorateDetails()
  {
    this.service.triggerDecorate(this.item);
  }
}
