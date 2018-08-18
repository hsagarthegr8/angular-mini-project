import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Course } from './course.interface'

@Injectable({
  providedIn: 'root'
})
export class CoursesJsonService {

  url:string = '/assets/courses.json'
  constructor(private http: HttpClient) { }

  getAllCourses() {
    return this.http.get<Course[]>(this.url)
  }
}
