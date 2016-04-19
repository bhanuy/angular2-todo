import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
	selector:'votes',
	templateUrl:'app/votes.templates.html'
})

export class VotesComponent{
	@Input('totalVotes') totalV;
	@Output() change = new EventEmitter();

	OnIncrementClick(V){
		
		V = parseInt(V)+ parseInt(1);
		this.change.emit(V);
	}
	OnDecrementClick(V) {
		V = parseInt(V) - parseInt(1);
		this.change.emit(V);
	}
}