import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts: Post[] = [
    {title: 'i want lear angular comp', text: 'i have learned com', id: 1},
    {title: 'next comp', text: 'lets go', id: 2}
  ];
  updatePosts(post: Post) {
    this.posts.unshift(post);
    console.log('Post', post);
  }
}
