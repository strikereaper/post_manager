import { SetUrlService } from './../url-service/set-url.service';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private Http: HttpClient, private setUrlService: SetUrlService) { }

  //! functions to make all the rest calls

  public getRestCall(urlOptions: string) {
    let url  = this.setUrlService.getBaseUrl() + urlOptions;
    return this.Http.get(url);
  }

  public postRestCall(urlOptions: string, body: any) {
    let url  = this.setUrlService.getBaseUrl() + urlOptions;
    return this.Http.post(url,body);
  }

  public deleteRestCall() {
    //! implementation pending
  }

  public patchRestCall() {
    //! implementation pending
  }

  public putRestCall() {
    //! implementation pending
  }
}
