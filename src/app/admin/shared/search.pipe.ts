import {Pipe, PipeTransform} from '@angular/core';
import {Post} from '../../shared/interfaces';

@Pipe({
    name: 'searchPosts'
})
export class SearchPipe implements PipeTransform {

    transform(posts: Post[], search = ''): Post[] {
        if (!search.trim()) {   /*Если строка пустая вернуть массив всех постов*/
            return posts;
        }

        return posts.filter(post => {
            return post.title.toLocaleLowerCase().includes(search.toLocaleLowerCase());
        });
    }

}
