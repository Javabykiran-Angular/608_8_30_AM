import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url:string='https://jsonplaceholder.typicode.com/posts';

  constructor(private http:HttpClient) { }


    getPost(){
        return (this.http.get(this.url));
    }

    PostData(obj:any){
       return (this.http.post(this.url,obj));
    }


}
