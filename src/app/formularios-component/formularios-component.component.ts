import { Component, OnInit } from '@angular/core';
import { UserModel } from '../Models/UserModel';

@Component({
  selector: 'app-formularios-component',
  templateUrl: './formularios-component.component.html',
  styleUrls: ['./formularios-component.component.css']
})
export class FormulariosComponentComponent implements OnInit {

  public Usuario:UserModel;
 

  constructor() {
 
    this.Usuario = new UserModel('', '', '', '');
    
   
  }
    

  ngOnInit(): void {

   

  }

  OnSubmit(Forms:any){
    Forms.reset();
    console.log(this.Usuario)


  }

}
