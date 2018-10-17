import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class Result {
  result: number;
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  constructor(private http: HttpClient) {}

  getAddResult(operandA: number, operandB: number): Observable<Result> {
    return this.http
      .get<Result>(
        `http://localhost:3000/api/add/${operandA}/${operandB}`,
        httpOptions
      )
      .pipe(tap(res => console.log(`result of summ is ${res}`)));
  }
}
