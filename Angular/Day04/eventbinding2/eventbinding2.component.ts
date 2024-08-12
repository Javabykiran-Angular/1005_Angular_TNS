import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding2',
  templateUrl: './eventbinding2.component.html',
  styleUrls: ['./eventbinding2.component.css']
})
export class Eventbinding2Component {

  result:number=0;

  onSend(myevent:any){
    console.log(myevent);
    console.log("Data is => "+myevent.target.value)
  }

  onSendData(myinput:any){
  console.log(myinput)
  console.log("=== Data== > "+myinput.value)
  
  myinput.style.background="green";

  myinput.style.color='white';
  }

  onSendData1(data:string){
    console.log(data);
  }

  onAddition(num1:any,num2:any){
    let n1=+num1;
    let n2=+num2;
    // this.result=num1+num2;

    this.result=n1+n2;
  }

}
