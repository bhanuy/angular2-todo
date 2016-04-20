import  {Component} from 'angular2/core'
import {CourseService} from './course.service'

@Component({
	selector: 'courses',
	template: `<h2>Courses</h2>{{title}}
		<ul>
			<li *ngFor = "#course of courses, #i = index">{{i + 1}} - {{course}}</li>
		</ul>
	`,
	providers: [CourseService]
})
export class CoursesComponent  {
	title: string = "The title of course page";
	
	constructor(courseService: CourseService){
		 this.courses = courseService.getCourses();
	}
}