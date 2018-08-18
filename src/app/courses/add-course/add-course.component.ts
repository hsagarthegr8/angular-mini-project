import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'

import { CoursesService } from '../courses.service'

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  ngOnInit() { }

  constructor(private fb: FormBuilder, private service: CoursesService) { }

  courseForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]+')]],
    duration: ['', [Validators.required]]
  })



  onSubmit() {
    this.service.addCourse(this.courseForm.value)
    this.courseForm.reset()
  }

}
