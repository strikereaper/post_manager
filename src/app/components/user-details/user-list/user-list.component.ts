import { UserDetailService } from './../../../shared/services/user-service/user-detail.service';
import { Component, OnInit } from '@angular/core';
import { userDataModel } from 'src/app/shared/data-modals/user-data';
import { RestService } from 'src/app/shared/services/rest-service/rest.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {

  public userList!: userDataModel[];
  public currentUser!: userDataModel;
  public pageTitle!: string;
  constructor(private restService: RestService, private userDetalService: UserDetailService) {
    this.setInitial();
   }

  public setInitial() {
    this.userList = [];
    this.pageTitle = "Users"
  }

  ngOnInit(): void {
    this.fetchUserList();
    this.getUpdatedUserList();
  }

  //! function for fetching list of all users and setting appropriate behaviour subjects
  public fetchUserList() {
    this.restService.getUserList().subscribe(
      (data: any)=> {
        if(data.length>0) {
          for(let userData of data) {
            if(!userData.recentPosts) {
              userData.recentPosts = []
            }
            let user = new userDataModel(userData.name,userData.avatar,userData.id,userData.recent_posts);
            this.userList.push(user);
          }
        }
        this.userDetalService.updateUserList(this.userList)
        this.userClicked(this.userList[0])
      }
    )
  }

  //! subscribing to userList subject
  public getUpdatedUserList() {
    this.userDetalService.currentUserListObservable.subscribe((data)=>{
      this.userList = data;
    })
  }

  //! function to intercept user click events and update value of current user observable
  public userClicked(clickedUser: userDataModel) {
    this.currentUser = clickedUser;
    this.userDetalService.changeUser(clickedUser)
  }

}
