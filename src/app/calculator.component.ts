import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CalculatorService } from './calculator.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  num1: number;
  num2: number;
  result: number;

  constructor(private calculatorService: CalculatorService) {}
  ngOnInit() {}

  add(): void {
    if (!(Boolean(this.num1) && Boolean(this.num2))) {
      return;
    }
    this.calculatorService
      .getAddResult(this.num1, this.num2)
      .subscribe(res => (this.result = res.result));
  }
}
