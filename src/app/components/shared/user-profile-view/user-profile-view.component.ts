import { userDataModel } from './../../../shared/data-modals/user-data';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-profile-view',
  templateUrl: './user-profile-view.component.html',
  styleUrls: ['./user-profile-view.component.css']
})
export class UserProfileViewComponent implements OnInit {
  
  @Input() public userDetails!: userDataModel;
  @Output() public userClicked: EventEmitter<any>  = new EventEmitter<any>();
  
  constructor() { 
    this.setInitial()
  }

  public setInitial() {
  }

  //! function for emitting clicked user
  public emitUserDetails() {
    this.userClicked.emit(this.userDetails);
  }

  ngOnInit(): void {
  }

}
