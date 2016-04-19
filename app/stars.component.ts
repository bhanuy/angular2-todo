import {Component, Output, EventEmitter} from 'angular2/core'

@Component({
	selector: 'stars',
	// template: `<div>
	// 	<span class="star-icons" (click)="onClick(isHide)">
	// 		<span class="glyphicon glyphicon-star" [class.hidden] ="!isHide"></span>
	// 		<span class="glyphicon glyphicon-star-empty" [class.hidden] ="isHide"></span>
	// 	</span>
	// </div>

	// <div>
	// 		<i 
	// 			class="glyphicon"
	// 			[class.glyphicon-star]="!isHide"
	// 			[class.glyphicon-star-empty]="isHide"
	// 			(click) = onClick(isHide)>
	// 		</i>

	// </div>
	// `,
	templateUrl: 'app/stars.template.html',
	styles: [`
		.glyphicon-star{
			color: orange;
		}
		.glyphicon-star-empty{
			color: green;
		}

	`],


})

export class StarsComponent{
	isHide = false;

	@Output() change = new EventEmitter();
	@Output() everyFiveSecond = new EventEmitter();

	onClick(test) {
		this.isHide = test == true ? false : true;
		this.change.emit({ newValue: this.isHide });
	}
	constructor(){
		setInterval(() =>this.everyFiveSecond.emit(null), 5000);
	}
}