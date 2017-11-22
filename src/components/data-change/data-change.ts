import { Component, Output, Input, OnInit } from '@angular/core';

@Component({
  selector: 'data-change',
  templateUrl: 'data-change.html'
})
export class DataChangeComponent implements OnInit {

  @Input() startDate:Date;
  private newDate: Date;
  
  stringDate: string;

  constructor() {
    
  }

  ngOnInit(){
    this.newDate = this.startDate;
    this.convertDateToString(this.newDate);
  }



  previousMonths(){
    this.newDate.setMonth(this.newDate.getMonth() - 1);
    this.convertDateToString(this.newDate);
  }

  nextsMonths(){
    this.newDate.setMonth(this.newDate.getMonth() + 1);
    this.convertDateToString(this.newDate);
  }

  convertDateToString(date: Date){
    this.stringDate = this.getMonthName(date) + ' - ' + date.getFullYear();
  }

  getMonthName(date:Date){
    let months = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
    return months[date.getMonth()];
  }

}
