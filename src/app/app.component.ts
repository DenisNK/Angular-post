import {Component, OnInit} from '@angular/core';

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
export class AppComponent implements OnInit{

  posts: Post[] = [
    {title: 'i want lear angular comp', text: 'i have learned com', id: 1},
    {title: 'next comp', text: 'lets go', id: 2}
  ];

  ngOnInit(): void {
  setTimeout(() => {
    console.log('Timeout')
    this.posts[0] = {
      title: 'changed',
      text: 'change2',
      id: 33
    }
  }, 2000)
  }


  updatePosts(post: Post) {
    this.posts.unshift(post);
    console.log('Post', post);
  }
  removePost(id: number) {
    console.log('Id remove', id);
    this.posts = this.posts.filter(p => p.id != id);
  }
}
