import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  onAddNewFaceSnap(){
    this.route.navigateByUrl('/facesnaps/create');
  }
 

}
