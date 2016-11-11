import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DbspItemListComponent } from './dbsp-item-list/dbsp-item-list.component';
import { DbspItemDetailsComponent } from './dbsp-item-details/dbsp-item-details.component';
import { DbspItemServiceService } from './dbsp-item-service.service';
import { DbspItemComponent } from './dbsp-item/dbsp-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DbspItemListComponent,
    DbspItemDetailsComponent,
    DbspItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    DbspItemServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
