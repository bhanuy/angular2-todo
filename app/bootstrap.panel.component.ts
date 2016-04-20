import {Component} from  'angular2/core'

@Component({
	selector: 'bs-panel',
	template: `
		<div class="panel panel-default">

			<div class="panel-heading">
				<ng-content selected=".heading"></ng-content>
			</div>
			<div class="panel-body">
				<ng-content selected=".body"></ng-content>
			</div>
		</div>

	`
})

export class BootstrapPanel{

}