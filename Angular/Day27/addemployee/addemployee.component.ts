import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  

  allCountry:any[]=[];

  constructor(private service:HttpService){

  }

  ngOnInit(): void {
   this.getCountryDataFromBackend();
  }

  getCountryDataFromBackend(){
    this.service.getAllCountry()
    .subscribe((response:any)=>{
      this.allCountry=response;
    })
  }


  onSubmit(f:NgForm){
    
  }

}
