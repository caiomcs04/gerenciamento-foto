import { Photo } from './../../model/photo';
import { UserService } from './../../services/user.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'gfotos-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
})
export class PhotoListComponent implements OnInit, OnDestroy {
  constructor(
    private userService: UserService,
    private activateRoute: ActivatedRoute
  ) {}

  photos: Photo[] = [];
  userName!: string;
  filter: string = '';
  debounce: Subject<string> = new Subject<string>();
  hasMore: boolean = true;
  currentPage: number = 1;

  ngOnInit() {
    this.userName = this.activateRoute.snapshot.params['userName'];

    // this.userService.findAll(this.userName).subscribe((res) => {
    //   this.photos = res;
    // });

    //Ao usar o resolver não sefaz necessario acessar o servico. tudo é feito pelo resolver e acionado via  ativacao de rota

    this.photos = this.activateRoute.snapshot.data['photos'];

    this.debounce
      .pipe(debounceTime(300))
      .subscribe((filter) => (this.filter = filter));
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  load() {
    this.userService
      .findAllPaginated(this.userName, ++this.currentPage)
      .subscribe((photos) => {
        this.photos = this.photos.concat(photos);
        if (!photos.length) this.hasMore = false;
      });
  }
}
