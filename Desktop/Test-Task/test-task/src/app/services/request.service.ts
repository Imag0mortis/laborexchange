import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { 



    
  }

   //Добавим метод вызова бекенда со списком вакансий
   public getVacancies(page: number | string | null, custom: number | string | null) {
    // let result = this.http.get(`http://back.test:3000/?page=${page}&cutom=${custom}`);
    let result = this.http.get(`http://localhost:3000`);
    console.log(result);
    return result;
  }
}
