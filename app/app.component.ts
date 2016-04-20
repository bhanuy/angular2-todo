import {Component} from 'angular2/core'
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
import {StarsComponent} from './stars.component'
import {HeartsComponent} from './hearts.component'
import {VotesComponent} from './votes.component'
import {SummaryPipe} from './summary.pipe'
import {BootstrapPanel} from './bootstrap.panel.component'
import {ContactFormComponent} from './contact.form.component'


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.template.html',

    directives: [CoursesComponent, AuthorsComponent, StarsComponent, HeartsComponent, VotesComponent, BootstrapPanel, ContactFormComponent]
    pipes: [SummaryPipe]
})
export class AppComponent {
	votenumber = 12;
	courses = [];
	navView = "map"

	onFavoriteChange($event){
		console.log($event);
	}
	everyFive(){
		console.log("hello world!!!");
	}

	changeVote($event){
		// if($event > votenumber)
		this.votenumber = $event;
	}

	post ={
		title: "Angular tutorial for Beginners",
		body: `Lorem Ipsum is simply dummy text of the 
		printing and typesetting industry. Lorem Ipsum has 
		been the industry's standard dummy text ever since 
		the 1500s, when an unknown printer took a galley of 
		type and scrambled it to make a type specimen book. 
		It has survived not only five centuries, but also the 
		leap into electronic typesetting, remaining essentially 
		unchanged. It was popularised in the 1960s with the release 
		of Letraset sheets containing Lorem Ipsum passages, and more 
		recently with desktop publishing software like Aldus PageMaker
		 including versions of Lorem Ipsum`
	}

	content = {
		title: 'HelloWorld',
		subject:{
			from: 'bhanu'
		}
	}
 }