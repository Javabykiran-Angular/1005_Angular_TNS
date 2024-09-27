import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  constructor(private routes:ActivatedRoute,
              private service:HttpService
  ){}
  
  ngOnInit(): void {
    this.getDataFromUrl();
  }

  getDataFromUrl(){
    this.routes.paramMap
    .subscribe((param)=>{
      //console.log(param.get("id"));
      this.service.getParticularRecord(param.get("id"))
      .subscribe((response:any)=>{
        console.log(response)
      })

    })
  }

}
