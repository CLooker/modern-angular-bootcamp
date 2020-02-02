import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { delay, filter, scan } from "rxjs/operators";
import { MathValidators } from "../math-validators";

@Component({
  selector: "app-equation",
  templateUrl: "./equation.component.html",
  styleUrls: ["./equation.component.css"]
})
export class EquationComponent implements OnInit {
  mathForm = new FormGroup(
    {
      a: new FormControl(this.randomNumber()),
      b: new FormControl(this.randomNumber()),
      answer: new FormControl("")
    },
    [MathValidators.addition(["a", "b"], "answer")]
  );

  secondsPerSolution: null | number = null;

  constructor() {}

  get a() {
    return this.mathForm.get("a").value;
  }

  get b() {
    return this.mathForm.get("b").value;
  }

  ngOnInit() {
    this.handleStatusChanges();
  }

  private handleStatusChanges() {
    this.mathForm.statusChanges
      .pipe(
        filter(value => value === "VALID"),
        delay(200),
        scan(
          accum => {
            return {
              solutionsTotal: ++accum.solutionsTotal,
              startTime: accum.startTime
            };
          },
          { solutionsTotal: 0, startTime: new Date() }
        )
      )
      .subscribe(({ solutionsTotal, startTime }) => {
        this.secondsPerSolution =
          (new Date().getTime() - startTime.getTime()) / solutionsTotal / 1000;
        this.mathForm.setValue({
          a: this.randomNumber(),
          b: this.randomNumber(),
          answer: ""
        });
      });
  }

  private randomNumber() {
    return Math.floor(Math.random() * 10);
  }
}
