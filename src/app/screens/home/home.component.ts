import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  slider: number=0;
  monthlyIncome:number=0;
  monthlyExpense:number=0;
  selected = 'option2';

  constructor() { }

  ngOnInit(): void {
    
  }
  FeatureSet1 = [
    {title: 'Quick cash disbursement', description:'Get terms loans that your business needs within 72 hrs', imgUrl:'../../../assets/images/GetPaidInstantly.png'},
    {title: 'Low-interest rate', description:'Achieve your financial goals with an amazing interest rate starting at 13% per annum',imgUrl:'../../../assets/images/LowInterestRate.png'},
    {title: 'Zero Paperwork', description:'Get started instantly by submitting only your basic details & bank statements',imgUrl:'../../../assets/images/SecurePayments.png'},
  ];
  FeatureSet2 = [
    {title: 'Ace your business finances', description:'Manage banking, accounting & everything in between, on one platform',imgUrl:'../../../assets/images/freelancer_feature_icon.png'},
    {title: 'Loans to fight COVID-19', description:'Zero EMI for first 3 months on Back-to-Business loans of upto 1 lakh',imgUrl:'../../../assets/images/Covid.png'}
]; 
  monthlyIncomes(event: any) {
    this.slider = event.value;
    this.monthlyIncome = event.value;
  }
  monthlyExpenses(event: any) {
    this.slider = event.value;
    this.monthlyExpense = event.value;
  }

}
