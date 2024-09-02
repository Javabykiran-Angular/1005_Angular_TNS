import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:any[]=[];
  id:number=0;
  title:string='';
  body!:string;
  isHidden:boolean=true;

  constructor(private service:HttpService){}
  ngOnInit(): void {
    this.getDataFromBackend();
  }

  getDataFromBackend(){
    this.service.getPost()
    .subscribe((response:any)=>{
      // console.log(response);
      this.posts=response;

    },(myerror)=>{
     // alert("Error Occured...");
     console.log(myerror.status);
      if(myerror.status>=400 && myerror.status<=499){
        alert("Client side error");

      }else if(myerror.status>=500 && myerror.status<=599){
        alert("Server side error");
      }else{
        alert("Something is went Wrong...");
      }
    })
  }

  onSend(mytitle:string,mybody:string){
      let jsonObj={
          title:mytitle,
          body:mybody
      }
      this.service.postData(jsonObj)
      .subscribe((response)=>{
        console.log(response);
      })
  }

  onEdit(item:any){
    console.log(item);
    this.id=item.id;
    this.title=item.title;
    this.body=item.body;
    this.isHidden=false;
  }

  onUpdate(){
    let jsonObj={
      id:this.id,
      title:this.title,
      body:this.body
    }

    this.service.updatedata(jsonObj)
    .subscribe((response)=>{
      console.log(response);
    })

  }

  onDelete(id:any){

    if(confirm("Do you Want to delete This record")){
      this.service.deletData(id)
      .subscribe((response)=>{
        console.log(response);
      });
    }else{
      alert("Record is not be deleted...");
    }
    
  }

}
