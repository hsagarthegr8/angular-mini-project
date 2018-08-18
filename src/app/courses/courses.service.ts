import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs'

import { Course } from './courses.interface'
import { courses } from './courses'

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  displayCourses() {
    return of<Course[]>(courses)
  }

  addCourse(course: Course ) {
    courses.push(course)
  }

  getDuraton(name: string) {
    return of(courses.find((course:Course)=>course.name == name).duration)
  }
}

