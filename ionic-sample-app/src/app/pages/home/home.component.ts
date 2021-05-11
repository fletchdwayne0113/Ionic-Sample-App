import { Component, OnInit } from '@angular/core';

import { ItemsApiService } from '../../services/items-api.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  items: any;
  constructor(private itemsApiService: ItemsApiService) { }

  ngOnInit() {
    this.getAllItems();
  }
  getAllItems() {
    this.itemsApiService.getAllItems().subscribe({
      next: data => {
        this.items = data;
        console.log(data);
      },
      error: error => {
        console.error('Error encountered when fetching list of user information.', error);
      }
    });
  }
}
