import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpService } from '../http.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Employee } from '../utility/employee';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  empData:any[]=[];
  isRadioClick:boolean=false;
  modalRef!: BsModalRef;  
  empObj:Employee=<Employee>{};
  config = {
    animated: true,    
    ignoreBackdropClick: true,
    class: "alert alert-danger"
  };

  constructor(private service:HttpService,
      private modalservice:BsModalService,
      private dialogService:DialogService
  ){}

  ngOnInit(): void {
    this.getDataFromBackend()
  }

  getDataFromBackend(){
    this.service.getAllRecord()
    .subscribe((response:any)=>{
      // console.log(response);
      this.empData=response;
    })
  }

  onRadio(item:any){
    this.isRadioClick=true;
    this.empObj=item;
  }


  onUpdate(popup:TemplateRef<any>){
    if(this.isRadioClick){
      
    this.modalRef = this.modalservice.show(        
      popup, this.config);
    }else{
      alert("Please Select a Record to Update..");
    }
  }

  onDelete(){
    if(this.isRadioClick){
        this.dialogService.OpenConfirmDialog('Are you sure to delete this record?')
        .afterClosed()
        .subscribe((res)=>{
          // console.log(res);
        if(res){
            // Delete a Record
            this.service.deletRecord(this.empObj.id)
            .subscribe((response)=>{
              // console.log(response);
              this.getDataFromBackend();
              alert(response);
            })
        }

        })
    }else{
      alert("Please Select a Record to Delete..");
    }

  }


}
