import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse}from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  

  constructor(private http : HttpClient) { }
  getQuestion(){
    return this.http.get<any>("assets/questions.json").pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    let errormessage=''
    errormessage='Something went wrong; please try again later.'
    return throwError(() => new Error(errormessage));
  }
}
