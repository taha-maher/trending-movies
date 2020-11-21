import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor() { }

  private subject = new Subject<any>();
  sendCategory(category) {
    this.subject.next(category);
  }
  getCategory(): Observable<any> {
    return this.subject.asObservable();
  }
}
