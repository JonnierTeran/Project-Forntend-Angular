import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class PeticionesService{
    public url:String;
    
    
    constructor(
        public _http : HttpClient
    )
    {
        this.url ="https://reqres.in";
    }

    public getUser(Id:number):Observable<any>{
        return this._http.get(this.url+"/api/users/"+Id);
    }

    public addUser(User:any):Observable<any>{
        //Recibe un json Convertimos nuestro objeto a json
        let Json = JSON.stringify(User);
        
        //Definimos la cabecera
        let headers = new HttpHeaders().set('Content-Type' , 'Aplication/Json');

        return this._http.post(this.url + '/api/users' + Json , {headers : headers});
    }
}