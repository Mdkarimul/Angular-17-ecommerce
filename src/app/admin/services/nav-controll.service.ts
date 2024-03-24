import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavControllService {

  constructor() { }


public navControllDesk = new Subject<boolean>();

public navControllMobile = new Subject<boolean>();

}
