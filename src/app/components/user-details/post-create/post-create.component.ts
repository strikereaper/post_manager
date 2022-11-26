import { userDataModel } from 'src/app/shared/data-modals/user-data';
import { UserDetailService } from './../../../shared/services/user-service/user-detail.service';
import { RestService } from 'src/app/shared/services/rest-service/rest.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  public pageTitle!: string;
  public currentUser!: userDataModel;
  public postName: FormControl = new FormControl();
  public postDescription: FormControl = new FormControl();
  constructor(private restService: RestService, private userDetailService: UserDetailService) {
    this.setInital()
  }

  
  ngOnInit(): void {
    this.getCurrentUser();
  }

  public getCurrentUser() {
    this.userDetailService.currentUserObservable.subscribe((data: userDataModel) => {
      this.currentUser = data;
    })
  }

  public setInital() {
    this.pageTitle = "Create Post"
    this.postName.setValue('')
    this.postDescription.setValue('')
  }

  //! function to save a post
  public savePost() {
    let postBody = { Title: this.postName.value, content: this.postDescription.value };
    this.restService.createPost(this.currentUser.id, postBody).subscribe(
      (data: any) => {
        if (data.id) {
          this.userDetailService.updatePost();
        }
      }
    )
    this.postName.setValue('')
    this.postDescription.setValue('')

  }


}
