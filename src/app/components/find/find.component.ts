import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrl: './find.component.scss'
})
export class FindComponent {

  searchId='';

  list: Array<any> = [];

  constructor(private postService:PostService) { }

  loadData() {
    if (this.searchId) {
      this.postService.findDataFireStore(this.searchId).subscribe(
        response => {
          // this.data = response;
          console.log(response);
        },
        error => {
          console.error('Error fetching data:', error);
        }
      );
    } else {
      console.warn('Please enter a valid ID');
    }
  }

}
