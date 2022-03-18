import { Component } from '@angular/core';
//Declaration Component selector is the HTML tag that's going to be used to embed the component (since it's the root component it is embeded int the index.html) The ones created by the coder will be embeded to the app.component.html

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//properties of the component cutom life cycle methods
export class AppComponent {
}
