import { PhotoService } from './../../core/services/photo/photo.service';
import { Photo } from './../../model/photo';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'gfotos-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
})
export class PhotoListComponent implements OnInit {
  constructor(
    private photoService: PhotoService,
    private activateRoute: ActivatedRoute
  ) {}

  photos: Photo[] = [];
  userName!: string;
  filter: string = '';
  hasMore: boolean = true;
  currentPage: number = 1;

  ngOnInit() {
    //Ao usar o resolver não sefaz necessario acessar o servico. tudo é feito pelo resolver e acionado via  ativacao de rota
    this.userName = this.activateRoute.snapshot.params['userName'];
    this.photos = this.activateRoute.snapshot.data['photos'];


    // this.photoService.findAll(this.userName).subscribe((res) => {
    //   this.photos = res;
    // });




  }


  load() {
    this.photoService
      .findAllPaginated(this.userName, ++this.currentPage)
      .subscribe((photos) => {
        this.filter = ""
        this.photos = this.photos.concat(photos);
        if (!photos.length) this.hasMore = false;
      });
  }
}
