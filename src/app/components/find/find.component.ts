import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrl: './find.component.scss'
})
export class FindComponent {

  searchId='';

  list: Array<any> = [];

  constructor(private http: HttpClient) { }

  loadData(){
    this.http.get<any>(`https://jsonplaceholder.typicode.com/posts?id=${this.searchId}`).subscribe(response => {
      this.list = response;
    });
  }

}
