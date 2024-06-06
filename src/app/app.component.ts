import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { FormsModule } from '@angular/forms';
import { InputModel } from './_model/input.model';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { ResultModel } from './_model/result.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    FormsModule,
    HeaderComponent,
    UserInputComponent,
    InvestmentResultsComponent,
  ],
})
export class AppComponent {
  resultData!: ResultModel[];

  public oncalculateInvestmentResults(data: InputModel) {
    const { initialinvestment, duration, expectedreturn, annualinvestment } =
      data;
    const annualData = [];
    let investmentValue = initialinvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedreturn / 100);
      investmentValue += interestEarnedInYear + annualinvestment;
      const totalInterest =
        investmentValue - annualinvestment * year - initialinvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualinvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialinvestment + annualinvestment * year,
      });
    }
    console.log(annualData);
    this.resultData = annualData;
  }
}
