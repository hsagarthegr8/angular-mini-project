import { Component, OnInit } from '@angular/core';
import{CoursesService} from '../courses.service'
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  
    courses:any
  constructor(private service:CoursesService) { }

  ngOnInit() {
this.displayCourses();  
}
displayCourses() {
      this.service.displayCourses()
        .subscribe(data => this.courses = data);
}

}
