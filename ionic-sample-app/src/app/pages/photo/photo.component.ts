import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ItemsApiService } from '../../services/items-api.service'

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
})
export class PhotoComponent implements OnInit {

  item: any;
  id: string;

  constructor(
    private itemsApiService: ItemsApiService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.getPhoto();
  }
  getPhoto() {    
    this.id = this.route.snapshot.paramMap.get('id');
    this.itemsApiService.getUserPhoto(this.id).subscribe({
      next: data => {
        this.item = data;
        console.log(data);
      },
      error: error => {
        console.error('Error encountered when fetching user photo.', error);
      }
    });
  }
}
