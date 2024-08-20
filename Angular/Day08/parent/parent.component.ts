import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  strmsg:string="Hopes so u are enjoying this Angular Module...";

  jsonData={
    id:9,
    fname:"Sumit",
    lname:"Raokhande"
  }

  childStrDataReceived:string='';

  arrData:any[]=[];

}
