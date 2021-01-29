import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../../shared/interfaces';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {tap} from 'rxjs/operators';
import {FbAuthRepos} from '../../../../environments/interface';

@Injectable()
export class AuthService {
constructor(private http: HttpClient) {}

    get token(): string {
     return '';
    }

    login(user: User): Observable<any> {
    return  this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
        .pipe(
            tap(this.setToken)
        );
    }

    logout() {
    }

    isAuthenticated(): boolean {
        return !!this.token;  /*!!Приводит к буллеан, если пустая строчка или null - false, если что-то есть true*/
    }

    private setToken(response: FbAuthRepos) {
        console.log(response);
    }
}