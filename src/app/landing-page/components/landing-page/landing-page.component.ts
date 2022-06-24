import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  userEmail!:string;
  userPassword!:string;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onContinue():void{
    this.router.navigateByUrl('facesnaps');

  }

 
  onSubmitForm(form:NgForm){
    console.log(form.value);
  }

}
