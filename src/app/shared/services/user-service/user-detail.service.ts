import { RestService } from './../rest-service/rest.service';
import { userDataModel } from 'src/app/shared/data-modals/user-data';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {
  private allUsersList!: userDataModel[];
  private currentUserStatic!: userDataModel;
  private userSource = new BehaviorSubject<userDataModel>(new userDataModel('', '', '', []));
  public currentUserObservable = this.userSource.asObservable();
  private userList = new BehaviorSubject<userDataModel[]>([]);
  public currentUserListObservable = this.userList.asObservable();


  constructor(private restService: RestService) {

  }

  //! sending new current user value on the user observable
  public changeUser(user: userDataModel) {
    this.currentUserStatic = user;
    this.userSource.next(user)
  }

  //! sending new userList value on the userList observable
  public updateUserList(userList: userDataModel[]) {
    this.setAllUsersList(userList);
    this.userList.next(userList)
  }

  //! set list of all users in a local variable
  public setAllUsersList(usersList: userDataModel[]) {
    this.allUsersList = [];
    this.allUsersList = usersList;
  }

  //! get a list of all users
  public getAllUsersList() {
    return this.allUsersList;
  }

  //! update the post list of current user if a new post is created
  public updatePost() {
    this.restService.getUserPost(this.currentUserStatic.id).subscribe(
      (data: any) => {
        this.currentUserStatic.recentPosts = data;
        this.allUsersList.map((item) => {
          if(item.id == this.currentUserStatic.id) {
            item.recentPosts = data;
            item.totalPosts += 1;
          }
        })
        this.changeUser(this.currentUserStatic);
      }
    )
  }
}
