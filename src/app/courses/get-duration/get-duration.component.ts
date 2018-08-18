import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import {Course} from '../course.interface'

@Component({
  selector: 'app-get-duration',
  templateUrl: './get-duration.component.html',
  styleUrls: ['./get-duration.component.css']
})
export class GetDurationComponent implements OnInit {

  course: string = '';
  result:Course;
  formSubmitted: boolean = false;
  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
  }

  getDuration() {
    this.coursesService.getDuration(this.course).subscribe(result => this.result = result);
    this.formSubmitted = true;
  }

}