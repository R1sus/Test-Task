import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService{


    constructor(private http: Http){ }
    getData(){

        return this.http.get(`https://jsonplaceholder.typicode.com/users`)
            .map((res:Response) => res.json());
    }
    getPost(userId){
        // return this.http.get('https://jsonplaceholder.typicode.com/users');
        // return this.http.get(this.testUrl).map(res => res.json());
        return this.http.get(`https://jsonplaceholder.typicode.com/posts?userId=`+ userId)
            .map((res:Response) => res.json());
    }
}


/**
 * Created by Nadine on 14.03.2017.
 */
