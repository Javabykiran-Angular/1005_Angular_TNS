import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { Employee } from '../utility/employee';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  

  allCountry:any[]=[];
  empObj:Employee=<Employee>{};

  constructor(private service:HttpService,
    private router:Router
  ){

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
    let obj={
      name:f.value.name,
      phoneno:f.value.phoneno,
      department:f.value.department,
      status:f.value.status,
      country:{
        cid:f.value.country.cid,
        cname:f.value.country.cname
      },
      createdby:sessionStorage.getItem("username"),
      createddtm:Date.now(),
      updatedby:sessionStorage.getItem("username"),
      updateddtm:Date.now()
    }

    // console.log(this.empObj.name);
    // this.empObj.createddtm=Date.now()
    // this.empObj.createdby=sessionStorage.getItem("username");

    this.service.saveRecord(obj)
    .subscribe((response)=>{
     // console.log(response);
     this.router.navigate(['/home']);
    })

  }

}
