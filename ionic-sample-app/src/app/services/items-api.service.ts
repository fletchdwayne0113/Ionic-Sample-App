import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemsApiService {

  private userInfoApiUrl = "https://jsonplaceholder.typicode.com/users";
  private photosApiUrl = "https://jsonplaceholder.typicode.com/photos";

  constructor(private httpClient: HttpClient) { }

  getAllItems() {    
    return this.httpClient.get(this.userInfoApiUrl);
  }
  getUserPhotos(userId: number) {
    return this.httpClient.get(this.photosApiUrl + '?albumId=' + userId);
  }
 
}