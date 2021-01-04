import {Component} from '@angular/core';

export interface Post {
  title: string;
  text: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  search = '';
  searchField = 'title';
  post: Post[] = [
    { title: 'Beer', text: 'The best BEER in the world'},
    { title: 'Bread', text: 'The best Bread in the world'},
    { title: 'Milk', text: 'The best Milk in world'}
  ];

  addPost() {
  this.post.unshift({
    title: 'Angular 8',
    text: 'Denis hello'
  });
  }
}


