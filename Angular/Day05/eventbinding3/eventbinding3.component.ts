import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding3',
  templateUrl: './eventbinding3.component.html',
  styleUrls: ['./eventbinding3.component.css']
})
export class Eventbinding3Component {

  result!:number;
  name:string='';

  onChange(){
    console.log("Change Event Occur..")
  }

  onKeyUp(){
    console.log("Key up Event Occur...")
  }

  onKeyDown(){
    console.log("Key Down event Occur...")
  }

  onKeyEnter(){
    console.log("Enter key pressed...")
  }

  onNameChange(){
    console.log("=== "+this.name)
  }
}
