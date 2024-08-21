import { Component } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component {

  username:string="Default name..";
  count:number=0;

  onDisplayAlert(){
    alert("Hi Welcome "+this.username);
  }

  increment(){
    this.count++;
  }

  decrement(){
    this.count--;
  }


}
