import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesJsonComponent } from './courses-json/courses-json.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';

import { AddCourseComponent } from './courses/add-course/add-course.component';
import { GetDurationComponent } from './courses/get-duration/get-duration.component';
import { CourseListComponent } from './courses/course-list/course-list.component'

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CoursesJsonComponent,
    AddCourseComponent,
    GetDurationComponent,
    CourseListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
