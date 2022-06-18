import { Photo } from './model/photo';
import { UserService } from './services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private userService: UserService) {}

  photos:Photo[] = [];
  userName:string = "flavio"

  ngOnInit() {
    this.userService.findAll(this.userName).subscribe((res) => {
      this.photos = res;
    });
  }
}
