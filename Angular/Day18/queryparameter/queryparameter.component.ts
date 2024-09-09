import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-queryparameter',
  templateUrl: './queryparameter.component.html',
  styleUrls: ['./queryparameter.component.css']
})
export class QueryparameterComponent implements OnInit
{
  obj:any={};
  notificationData:string='';
  constructor(private route:ActivatedRoute,
              private notifyService:NotificationService
  ){}

  ngOnInit(): void {
    this.getDataFromUrl();
    this.getNotificationData();
  }

  getNotificationData(){
    this.notifyService.notification
    .subscribe((data)=>{
      this.notificationData=data;
    })
  }
  getDataFromUrl(){
    this.route.queryParamMap
    .subscribe((param:any)=>{
      this.obj.myid=+param.get("id");
      this.obj.myfname=param.get("fname");
      this.obj.mylname=param.get("lname");
    })
  }

  onSend(msg:string){
    this.notifyService.sendMessage(msg)
  }



}
