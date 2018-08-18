import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../courses.service';
@Component({
  selector: 'app-get-duration',
  templateUrl: './get-duration.component.html',
  styleUrls: ['./get-duration.component.css']
})
export class GetDurationComponent implements OnInit {

  course:string='';
  duration:string;
  formSubmitted:boolean=false;
  constructor(private coursesService:CoursesService) { }

  ngOnInit() {
  }

  getDuration(){
    this.coursesService.getDuration(this.course).subscribe(duration=>this.duration=duration);
    this.formSubmitted=true;
  }

}
