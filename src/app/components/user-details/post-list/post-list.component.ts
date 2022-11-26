import { postDetailDataModel } from './../../../shared/data-modals/post-data-model';
import { userDataModel } from 'src/app/shared/data-modals/user-data';
import { UserDetailService } from './../../../shared/services/user-service/user-detail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  public pageTitle!:string;
  public userPosts!:postDetailDataModel[];
  public currentUser!: userDataModel;
  
  constructor(private userDetailService: UserDetailService) {
    this.setInitial()
   }

  public setInitial() {
    this.pageTitle = "Posts";
    this.userPosts = [];
  }

  ngOnInit(): void {
    this.getCurrentUserPosts();
  }

  //! function for subscribing to current user change and updating current posts accordingly
  public getCurrentUserPosts() {
    this.userDetailService.currentUserObservable.subscribe((data: userDataModel) => {
      this.userPosts = [];
      this.currentUser = data;
      for(let post of data.recentPosts) {
        let newPost = new postDetailDataModel(post.createdAt, post.Title, post.content, post.userId)
        this.userPosts.push(newPost)
      }
    })
  }

  public getAllUserPost() {
    return this.userPosts;
  }

}
