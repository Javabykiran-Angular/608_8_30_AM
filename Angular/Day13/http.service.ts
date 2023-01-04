import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url:string='https://jsonplaceholder.typicode.com/post';

  constructor(private http:HttpClient) { }


    getPost(){
        return (this.http.get(this.url));
    }

    PostData(obj:any){
       return (this.http.post(this.url,obj));
    }

    UpdateData(obj:any){
        return (this.http.put(`${this.url}/${obj.id}`,obj));
    }

    Deletedata(id:any){
      return (this.http.delete(`${this.url}/${id}`))
    }


}
