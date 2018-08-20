import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mini';
  activeLinkValue:string='courses';
  activeLink(val){
    this.activeLinkValue=val;
  }
}
