import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terminal-component',
  templateUrl: './terminal-component.component.html',
  styleUrls: ['./terminal-component.component.css']
})
export class TerminalComponentComponent implements OnInit {
  private title:String;
  private edad:number;
  private frameworks:Array<String>;
  Nuev:String; 
  ok = false;

  public constructor(){
    this.title ='CALCULO DE EDADES';
    this.edad = 0;
    this.frameworks= ['React', 'Angular' , 'Vue', 'Spring Boot' , 'Django'];
    this.Nuev = ""
  }

 
  public settitle(title : string) {
    this.title = title;
  }
  
  public gettitle():String {
    return this.title;
  }
  
  public setedad(edad : number) {
    this.edad = edad;
  }
  
  public getedad():number {
    return this.edad;
  }
  public setFremeworks(frameworks : Array<String>) {
    this.frameworks = frameworks;
  }
  
  public getFrameworks():Array<String> {
    return this.frameworks;
  }
  
  
  public  Aumentar(){
    this.edad++;
    
    if (this.edad == 18){
      alert("YA ES MAYOR DE EDAD");
    }
  }
  
  public  Dis(){
    this.edad--;
    if (this.edad == 17){
      alert("YA ES MENOR DE EDAD");
    }
  }

  public Agg(){
    
    if(this.Nuev.length > 0){
      this.frameworks.push(this.Nuev);
      this.Nuev = "";
      this.ok = false;
    }else{
     
      this.ok = true;
    }
    
  }
  Borrar(i:number){
    //delete this.frameworks[i];
    this.frameworks.splice(i,1);
  }



  ngOnInit(): void {
  }

}
