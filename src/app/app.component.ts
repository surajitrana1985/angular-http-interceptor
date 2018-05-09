import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  url = 'https://reqres.in/api/users?page=2';
  users: Array<Object>;

  constructor(public apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getAPI(this.url).subscribe(
      response => {
        this.users = response.data;
        console.log(this.users);
      },
      error => {
        console.log(error);
      }
    );
  }


}
