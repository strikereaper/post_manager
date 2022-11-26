import { BaseService } from './../base-service/base.service';
import { Injectable } from '@angular/core';
import { ENDPOINT_MAP } from '../../constants/common-constants';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private baseService: BaseService) { }

  //! to get details of a particular user
  public getUser(userId: string) {
    let url = ENDPOINT_MAP.USERS+'/'+userId
    return this.baseService.getRestCall(url)
  }

  //! to get the list of all users
  public getUserList() {
    return this.baseService.getRestCall(ENDPOINT_MAP.USERS)
  }

  //! to create a new post for a user
  public createPost(userId: string, postBody: any) {
    let url = ENDPOINT_MAP.USERS+'/'+userId+'/'+ENDPOINT_MAP.POSTS;
    return this.baseService.postRestCall(url, postBody)
  }

  //! get all posts of a user
  public getUserPost(userId: string) {
    let url = ENDPOINT_MAP.USERS+'/'+userId+'/'+ ENDPOINT_MAP.POSTS
    return this.baseService.getRestCall(url)
  }
}
