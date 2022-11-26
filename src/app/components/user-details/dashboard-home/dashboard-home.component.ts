import { RestService } from './../../../shared/services/rest-service/rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {
  public title!: string;
  constructor(private restService: RestService) {
    this.setInitial();
   }

   public setInitial() {
    this.title = "Post Manager";
   }

  ngOnInit(): void {
  }

}
