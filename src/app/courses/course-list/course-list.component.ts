import { Component, OnInit } from '@angular/core'
import { CoursesService } from '../courses.service'

import { Course } from '../course.interface'


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})

export class CourseListComponent implements OnInit {

  courses: Course[] = []
  constructor(private service: CoursesService) { }

  ngOnInit() {
    this.displayCourses();
  }

  displayCourses() {
    this.service.displayCourses()
      .subscribe((data: Course[]) => this.courses = data);
  }

}
