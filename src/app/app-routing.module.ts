import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { CoursesComponent } from './courses/courses.component'
import { CoursesJsonComponent } from './courses-json/courses-json.component'
 
const routes: Routes = [
  { path: 'courses', component: CoursesComponent },
  { path: 'courses-json', component: CoursesJsonComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}