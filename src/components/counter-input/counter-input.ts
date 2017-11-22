import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'counter-input',
  templateUrl: 'counter-input.html',
  
})
export class CounterInputComponent {
  private oldValue: number;

  @Input() description: string;

  @Output() valueChanged = new EventEmitter();

  @Input() newValue:number = 1;

  constructor() {
  }

  onIncrease(){        
    this.newValue++;
    this.valueChanged.emit({newValue: this.newValue});
    this.oldValue = this.newValue;
  }

  onDecrease(){
    if (this.newValue <= 1) {
      this.newValue = 1     
    }
    else {
      this.newValue--;      
    }

    if (this.oldValue != this.newValue)
    {    
      this.valueChanged.emit({newValue: this.newValue});
      this.oldValue = this.newValue;
    }

  }

  onBlurQuantity(){
    if (this.newValue < 1) {this.newValue = 1}
    if (this.oldValue != this.newValue)
    {
      this.valueChanged.emit({newValue: this.newValue});
      this.oldValue = this.newValue;
    }
    
  }

}
