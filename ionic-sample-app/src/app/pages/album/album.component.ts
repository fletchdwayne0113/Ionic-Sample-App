import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ItemsApiService } from '../../services/items-api.service'

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {

  items: any;
  id: string;

  constructor(
    private itemsApiService: ItemsApiService,
    private route: ActivatedRoute
    ) {}

  ngOnInit() {
    this.getPhotos();
  }
  getPhotos() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.itemsApiService.getUserPhotos(this.id).subscribe({
      next: data => {
        this.items = data;
        console.log(data);
      },
      error: error => {
        console.error('Error encountered when fetching list of user photo.', error);
      }
    });
  }
  displayPhoto(item: any) {
    console.log(item.id + item.albumId + item.url + item.title)
  }
}
