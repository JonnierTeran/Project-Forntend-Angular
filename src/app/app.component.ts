import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title:String;
  private edad:number;
  private frameworks:Array<String>;
 
  public constructor(){
    this.title ='PROYECTOANGULAR14 CALCULO DE EDADES';
    this.edad = 0;
    this.frameworks= ['React', 'Angular' , 'Vue', 'Spring Boot' , 'Django'];
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
    let Nuev:any = prompt("Ingrese el framework", "Null");

    this.frameworks.push(Nuev);
  }
}
