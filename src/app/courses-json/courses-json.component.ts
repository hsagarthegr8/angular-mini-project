import { Component, OnInit } from '@angular/core';
import { CoursesJsonService } from './courses-json.service';

import { Course } from './course.interface'

@Component({
  selector: 'app-courses-json',
  templateUrl: './courses-json.component.html',
  styleUrls: ['./courses-json.component.css']
})
export class CoursesJsonComponent implements OnInit {


  courses: Course[] = []

  ngOnInit() {
    this.getAllCourses()
  }


  constructor(private details: CoursesJsonService) {
  }


  getAllCourses() {
    this.details.getAllCourses().subscribe(
      (courseData: Course[]) => this.courses = courseData)
  }
}