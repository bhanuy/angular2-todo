System.register(['angular2/core', './courses.component', './authors.component', './stars.component', './hearts.component', './votes.component', './summary.pipe', './bootstrap.panel.component', './contact.form.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, courses_component_1, authors_component_1, stars_component_1, hearts_component_1, votes_component_1, summary_pipe_1, bootstrap_panel_component_1, contact_form_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (stars_component_1_1) {
                stars_component_1 = stars_component_1_1;
            },
            function (hearts_component_1_1) {
                hearts_component_1 = hearts_component_1_1;
            },
            function (votes_component_1_1) {
                votes_component_1 = votes_component_1_1;
            },
            function (summary_pipe_1_1) {
                summary_pipe_1 = summary_pipe_1_1;
            },
            function (bootstrap_panel_component_1_1) {
                bootstrap_panel_component_1 = bootstrap_panel_component_1_1;
            },
            function (contact_form_component_1_1) {
                contact_form_component_1 = contact_form_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.votenumber = 12;
                    this.courses = [];
                    this.navView = "map";
                    this.post = {
                        title: "Angular tutorial for Beginners",
                        body: "Lorem Ipsum is simply dummy text of the \n\t\tprinting and typesetting industry. Lorem Ipsum has \n\t\tbeen the industry's standard dummy text ever since \n\t\tthe 1500s, when an unknown printer took a galley of \n\t\ttype and scrambled it to make a type specimen book. \n\t\tIt has survived not only five centuries, but also the \n\t\tleap into electronic typesetting, remaining essentially \n\t\tunchanged. It was popularised in the 1960s with the release \n\t\tof Letraset sheets containing Lorem Ipsum passages, and more \n\t\trecently with desktop publishing software like Aldus PageMaker\n\t\t including versions of Lorem Ipsum"
                    };
                    this.content = {
                        title: 'HelloWorld',
                        subject: {
                            from: 'bhanu'
                        }
                    };
                }
                AppComponent.prototype.onFavoriteChange = function ($event) {
                    console.log($event);
                };
                AppComponent.prototype.everyFive = function () {
                    console.log("hello world!!!");
                };
                AppComponent.prototype.changeVote = function ($event) {
                    // if($event > votenumber)
                    this.votenumber = $event;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.template.html',
                        directives: [courses_component_1.CoursesComponent, authors_component_1.AuthorsComponent, stars_component_1.StarsComponent, hearts_component_1.HeartsComponent, votes_component_1.VotesComponent, bootstrap_panel_component_1.BootstrapPanel, contact_form_component_1.ContactFormComponent],
                        pipes: [summary_pipe_1.SummaryPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map