import {Component} from 'angular2/core'

@Component({
	selector: 'hearts',
	templateUrl: 'app/hearts.template.html',
})

export class HeartsComponent{
	counter: number = 0;
	colorArray = ['red', 'green', 'blue', 'orange', 'yellow'];
	defaultColor = "red";

	

	onClick(count) {
		this.counter = this.counter + 1;
		this.defaultColor = this.colorArray[Math.floor(Math.random() * this.colorArray.length)];
	}
}