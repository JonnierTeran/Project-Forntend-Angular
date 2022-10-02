import {Component , OnInit}  from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'; //Para leer parametros
@Component({
    selector :'Prueba-component',
    templateUrl : './Prueba.component.html',
    styleUrls : ['./Prueba.component.css']
})
export class PruebaComponent implements OnInit{
    public Digita:String;
    public Parametro:any;
    public Session:boolean;
    public Nombre:String;
    public Valid:any;
      //Inicializamos los parametros url
     

    constructor( private _route :ActivatedRoute,
                 private _router: Router )
    {
        this.Digita = "A";
        this.Parametro ="";
        this.Session = false;
        this.Nombre="";
        this.Valid = "";
    }

    public ngOnInit(): void {
        this._route.params.subscribe((params:Params) => {
                                    this.Parametro = params['Nombre'];
                                    console.log(this.Parametro, params)
                                })
    }
    Redireccionar(){
         this._router.navigate(['/Edad'])
    }

    OffSession(){
        this.Session= false;
    }

    OnSession(){
        if(this.Nombre){
            this.Session= true; 
              
        }else{
            this.Valid = true;
        }

        
        
    }
}
