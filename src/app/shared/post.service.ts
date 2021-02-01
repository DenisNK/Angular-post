import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FbCreateResponce, Post} from './interfaces';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class PostService {

    constructor(private http: HttpClient) {}

    create(post: Post): Observable<Post> {
        return this.http.post(`${environment.fbDbUrl}/posts.json`, post)
            .pipe(map((responce: FbCreateResponce) => {
                return {
                    ...post,
                    id: responce.name,
                    date: new Date(post.date)
                };
            }));
    }

    getAll(): Observable<Post[]> {
        return this.http.get(`${environment.fbDbUrl}/posts.json`)
            .pipe(map((responcse: {[key: string]: any}) => {
                return Object
                    .keys(responcse)
                    .map(key => ({
                        ...responcse[key],
                        id: key,
                        date: new Date(responcse[key].date)
                    }));

            }));
    }
}
