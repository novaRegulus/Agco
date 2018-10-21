import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'Agco';

  status:boolean = false;
  singUpForm:boolean = false;

  login(){
    this.singUpForm = false;
    this.status = true;
  }

  singUp(){
    this.status = false;
    this.singUpForm = true;
  }

}
