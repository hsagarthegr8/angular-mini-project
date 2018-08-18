import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs'

import { Course } from './course.interface'
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

  getDuration(name: string) {
    let result=courses.find((course:Course)=>course.name == name)
    let duration=result?result.duration:undefined;
    return of(duration)
  }
}
