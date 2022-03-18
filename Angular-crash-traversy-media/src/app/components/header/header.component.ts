import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'Task Tracker';
  //runs whenever a component is initialized
  constructor() { }
//life cycle method
  ngOnInit(): void {
  }
  //Fire off toggleAddTask in the header
  toggleAddTask(){
    console.log('toggle')
  }
}
