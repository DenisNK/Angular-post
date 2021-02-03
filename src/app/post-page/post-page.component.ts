import {Component, OnInit} from '@angular/core';
import {Post} from '../shared/interfaces';
import {PostsService} from '../shared/posts.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  post$: Observable<Post>;

  constructor(
      private postService: PostsService,
      private route: ActivatedRoute

  ) { }

  ngOnInit() {
    this.post$ = this.route.params
        .pipe(switchMap((params: Params) => {    /* switchMap - Позволяет изменить нам направление от param-сов до нужного на стрима */
        return this.postService.getById(params['id']);  /* or "params.id" */
        }));
  }
}
