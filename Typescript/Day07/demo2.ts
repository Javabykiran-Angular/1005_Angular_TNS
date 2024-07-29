class Myclass{
  public id:number;
  private  fname:string;
  protected  lname:string;

    constructor(id:number,f:string,l:string){
       // console.log("U r in Constructor")
       this.id=id;
       this.fname=f;
       this.lname=l;
    }   

     display(){
        console.log(`
            Id          ::${this.id}
            First Name  ::${this.fname}
            Last Name   ::${this.lname}     
        `);
    }

}

let obj=new Myclass(9,'Sumit','Raokhande');
obj.display();
