import { Photo } from './../../model/photo';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gfotos-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  constructor(private userService: UserService) {}

  photos:Photo[] = [];
  userName:string = "flavio"

  ngOnInit() {
    this.userService.findAll(this.userName).subscribe((res) => {
      this.photos = res;
    });
  }

}
