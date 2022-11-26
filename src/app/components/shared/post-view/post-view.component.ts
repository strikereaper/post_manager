import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { postDetailDataModel } from 'src/app/shared/data-modals/post-data-model';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {

  @Input() public post!: postDetailDataModel;
  // @Output() public postClicked: EventEmitter<any>  = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
