import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../utility/employee';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent implements OnInit {


  @Input() parentObj:Employee=<Employee>{};
  allCountry:any[]=[];
  issubmitDissabled:boolean=true;
  backendResponse:string='';

  constructor(private service:HttpService) {
    
  }

  ngOnInit(): void {
    this.getAllCountry();
  }

  getAllCountry(){
    this.service.getAllCountry()
    .subscribe((response:any)=>{
      this.allCountry=response;
    })
  }

  onUpdate(){
      this.parentObj.updatedby=sessionStorage.getItem("username");
      this.parentObj.updateddtm=Date.now();
      this.service.updateRecord(this.parentObj)
      .subscribe((response)=>{
        this.issubmitDissabled=false;
        this.backendResponse=response;
      })
      
  }


}
