import { Component } from '@angular/core';

@Component({
  selector: 'app-demobootstrap',
  templateUrl: './demobootstrap.component.html',
  styleUrls: ['./demobootstrap.component.css']
})
export class DemobootstrapComponent {
  selected:string='';
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

  
  onMouseOver(item:any){
    console.log(item)
    this.selected=item.name;
  }
}
