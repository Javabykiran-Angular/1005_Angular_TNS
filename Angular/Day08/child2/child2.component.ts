import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {

  @Output() childStrEvent=new EventEmitter();

  @Output() childArrEvent=new EventEmitter()

  strdata:string="Send data from Child to Parent...";

  arrproduct:any[]=[
    {
      name:"Samsung",
      price:25000,
      qty:1
    },
    {
      name:"Apple",
      price:100000,
      qty:1
    },
    {
      name:"Realme",
      price:18000,
      qty:1
    },
    {
      name:"Motorolla",
      price:30000,
      qty:1
    },
    {
      name:"Vivo",
      price:15000,
      qty:1
    }

  ];


  onSend(){
    this.childStrEvent.emit(this.strdata);
    this.childArrEvent.emit(this.arrproduct);
  }

}
