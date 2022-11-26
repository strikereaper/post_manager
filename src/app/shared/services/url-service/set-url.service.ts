import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetUrlService {

  private url = 'https://637de434cfdbfd9a63a00317.mockapi.io/test/v2/'
  constructor() { }

  //! to get base url for making rest calls
  public getBaseUrl() {
    return this.url;
  }
}
