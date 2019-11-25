import { Injectable } from '@angular/core';
import { Client } from 'stompjs';
import { filter, first, switchMap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { SocketClientState } from '../enum/socket-client-state.enum';

@Injectable({
  providedIn: 'root'
})
export class SocketClientService {

  private client: Client;
  private state: BehaviorSubject<SocketClientState>;

  constructor() { }

  private connect(): Observable<Client> {
    return new Observable<Client>(
      observer => {
        this.state.pipe(filter(state => state === SocketClientState.CONNECTED)).subscribe(
          () => {
            observer.next(this.client);
          });
      });
  }
}
