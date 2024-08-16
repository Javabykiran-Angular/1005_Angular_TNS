import { Component } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent {

  course:string[]=["Core Java","HTML","CSS","JS","MySql","Advanced java","Spring Core","Spring Boot","Hibernate","Angular 16","AWS","Jenkings"];


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
selected:string='';

  onMouserOver(item:any){
    console.log("Mouse over event occur...");
    this.selected=item.name;
  }

  onMouseOut(){
    console.log("========== Mouse Out =========");
    this.selected='';
  }


}
