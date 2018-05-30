import {Injectable } from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class ProveedorService{
    
   public data:any;

    constructor(private http:Http){
       
    }

    getQuotes(){
       // this.http.get("http://localhost:8080/users.json")
       this.http.get("https://api.myjson.com/bins/ka7yq")
        .subscribe(
            res=>{
                this.data = res.json();
                console.log(this.data);
            },
            error=>{
                console.log(error);

            }
            );
            
    }

   
}
