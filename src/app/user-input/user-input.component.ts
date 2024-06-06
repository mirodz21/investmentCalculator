import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputModel } from '../_model/input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InputModel>();

  initialinvestment = '0';
  annualinvestment = '0';
  expectedreturn = '5';
  duration = '10';

  public onSubmit() {
    this.calculate.emit({
      initialinvestment: +this.initialinvestment,
      annualinvestment: +this.annualinvestment,
      expectedreturn: +this.expectedreturn,
      duration: +this.duration,
    });
  }
}
