import {Component} from 'angular2/core'
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
import {StarsComponent} from './stars.component'
import {HeartsComponent} from './hearts.component'
import {VotesComponent} from './votes.component'


@Component({
    selector: 'my-app',
    template: `<h1>My Hello Angular 2 App</h1>
    				<courses></courses>
    				<authors></authors>
    				<stars (change)="onFavoriteChange($event)" (everyFiveSecond) ="everyFive()"></stars><hearts></hearts>
    				<votes totalVotes = {{votenumber}} (change) ="changeVote($event)"></votes>`,

    directives: [CoursesComponent, AuthorsComponent, StarsComponent, HeartsComponent, VotesComponent]
})
export class AppComponent {
	votenumber = 12;

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

	
 }