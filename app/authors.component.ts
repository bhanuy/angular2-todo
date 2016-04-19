import {Component} from 'angular2/core'
import {AuthorService} from './author.service'


@Component({
	selector:'authors',
	template: `<h2>Courses</h2>{{title}}		<ul>
			<li *ngFor = "#author of authors">{{author}}</li>
		</ul>

		<p>Property binding </p>

		<img [src] = "imageUrl" />
		<img bind-src = "imageUrl" />
		<p> Class binding </p>
		<button class ="btn btn-primary" [class.active]="isActive">Submit</button>
		<button class ="btn btn-primary" [class.disabled]="isActive">Submit</button>
		<button class ="btn btn-primary" [class.active]="false">Submit</button>

		<h3> Style Binding </h3>

		<button [style.color]= "isActive? 'red': 'green'">Send</button>

		<h3> Event binding </h3>
		<div (click) = "onDivClick()" [style.backgroundColor] = "isActive? 'red': 'green'">
			<button (click) = "onClick($event)">Alert</button>		
			<button on-click = "onClick($event)">Alert</button>
		</div>

		<h2> Two way Data binding </h2>	

		<input type="text" [(ngModel)] = "title" />
			
	`,
	providers: [AuthorService]
})

export class AuthorsComponent{
	title: string = "Title for the author page";
	imageUrl: string = "http://www.freesmileys.org/smileys/big/big-smiley-003.gif";
	isActive = true;
	onDivClick(){
		console.log("Handled by Div");
	}

	onClick ($event){
		$event.stopPropagation();
		console.log($event);
	}
	constructor(authorService: AuthorService){
		this.authors = authorService.getAuthors();
	}
}