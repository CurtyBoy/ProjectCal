import { Injectable } from '@angular/core';
import { Sender } from '../../Models/sender.model';
import { Http } from '@angular/http'
import { HttpClient,HttpClientJsonpModule } from '@angular/common/http'
import { HttpRequest, HttpResponse } from '../../../node_modules/@types/selenium-webdriver/http';

import { Observable} from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';
import { ISender } from './sender';



@Injectable({
  providedIn: 'root'
})
export class SenderService {
  // test: any;
  // log: any;
  private sendersUrl ='/api/Senders';

  constructor(private http: HttpClient) {}

  getSenders(): Observable<ISender[]>{
    return this.http.get<ISender[]>(this.sendersUrl);

    }

  
  //   this.test = 'Hi';
  // }

  // private handleError<T> (operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
   
  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead
   
  //     // TODO: better job of transforming error for user consumption
  //     this.log(`${operation} failed: ${error.message}`);
   
  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }
  



// getSenders(){
//   return[
//     {"id": 1, "Name": "Curt", "Age": 23},
//     {"id": 2, "Name": "C", "Age": 22},
//     {"id": 3, "Name": "u", "Age": 24},
//     {"id": 4, "Name": "r", "Age": 25}
//   ]
// }


  // getSenders (id: number): Observable<Sender[]> {
  //   const url = `${this.sendersUrl}/${id}`;

  //   return this.http.get<Sender[]>(url)
  //   .pipe(
  //     catchError(this.handleError('getSenders', []))
  //   );
  // }
  
  
  // getSenderById(id: number) :Promise<string>
  // {
  //   this.test = this.http.post('http://localhost:56764/api/Senders/',id).toPromise().then(response => response.json()).catch();
  //   console.log(this.test)
  //   return this.test;
    
  // }

}
