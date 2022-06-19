import { Photo } from './../../model/photo';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'gfotos-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
})
export class PhotoListComponent implements OnInit {
  constructor(
    private userService: UserService,
    private activateRoute: ActivatedRoute
  ) {}

  photos: Photo[] = [];
  userName!: string;

  ngOnInit() {
    this.userName  = this.activateRoute.snapshot.params['userName'];

    this.userService.findAll(this.userName).subscribe((res) => {
      this.photos = res;
    });
  }
}
