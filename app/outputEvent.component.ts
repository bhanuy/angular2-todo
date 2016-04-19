import {Component, Output, EventEmitter} from 'angular2/core'

@Component({
	selector:'outputs-event'
})

export class OutputEventComponent{
	@Output() everySecond = new EventEmitter();
	@Output('everyFiveSeconds') five5Secs = new EventEmitter();

	constructor(){
		setInterval(() => this.everySecond.emit("event"), 1000);
		setInterval(() => this.five5Secs.emit("event"), 5000);
	}
 }