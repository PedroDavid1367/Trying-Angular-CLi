import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class DbspItemServiceService {

  private _decorateSource: Subject<string> = new Subject<string>();;

  decorate$ = this._decorateSource.asObservable();

  public triggerDecorate(decorator: string) {
    this._decorateSource.next(decorator);
  }
}
