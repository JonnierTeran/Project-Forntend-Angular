import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-component',
  templateUrl: './pipe-component.component.html',
  styleUrls: ['./pipe-component.component.css']
})
export class PipeComponentComponent implements OnInit {
    fecha:any
  constructor() { 
    this.fecha= new Date();
  }
   


  ngOnInit(): void {

  }

}
