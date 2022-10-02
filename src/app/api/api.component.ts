import { Component, OnInit } from '@angular/core';
//Cargamos el servicio de api
import { PeticionesService } from '../services/peticiones.services';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css'],
  providers: [PeticionesService]
})
export class ApiComponent implements OnInit {
    user:any;
    apellido:any;
    email:any;
    id:any;
    avatar:any;
    UserId:number;
  
    regUser:any;

    a:any

  constructor(
    private _Service: PeticionesService
  ) { 

    this.user ="";
    this.email="";
    this.apellido=""
    this.id="";
    this.avatar="";
    this.UserId=1;

    
    this.regUser = {
      "name": "",
      "job": ""
  }
  }

  ngOnInit(): void {
    this.CargarUser();
  }

  //Registar usuario
  OnSubmit(form:any){
    console.log(this.regUser);

    this._Service.addUser(this.regUser).subscribe(Result => {
        console.log(Result);
        this.a=Result.job;
        form.reset();
         } ,
          Error => {
                 console.log(<any>Error);
} );

  }


  CargarUser(){

    this._Service.getUser(this.UserId).subscribe(result => {
      console.log(result);
      this.user = result.data.first_name;
      this.email = result.data.email;
      this.apellido = result.data.last_name;
      this.id= result.data.id;
      this.avatar = result.data.avatar;
    }, error =>{
      console.log(<any>error);
    })
    
  }
  UserSig(){
    this.UserId =this.UserId + 1;
    this.ngOnInit();
  }

  UserAnt(){
    this.UserId =this.UserId - 1;
    this.ngOnInit();
  }

  
}
