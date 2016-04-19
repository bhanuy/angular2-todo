System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var StarsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            StarsComponent = (function () {
                function StarsComponent() {
                    var _this = this;
                    this.isHide = false;
                    this.change = new core_1.EventEmitter();
                    this.everyFiveSecond = new core_1.EventEmitter();
                    setInterval(function () { return _this.everyFiveSecond.emit(null); }, 5000);
                }
                StarsComponent.prototype.onClick = function (test) {
                    this.isHide = test == true ? false : true;
                    this.change.emit({ newValue: this.isHide });
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], StarsComponent.prototype, "change", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], StarsComponent.prototype, "everyFiveSecond", void 0);
                StarsComponent = __decorate([
                    core_1.Component({
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
                        styles: ["\n\t\t.glyphicon-star{\n\t\t\tcolor: orange;\n\t\t}\n\t\t.glyphicon-star-empty{\n\t\t\tcolor: green;\n\t\t}\n\n\t"],
                    }), 
                    __metadata('design:paramtypes', [])
                ], StarsComponent);
                return StarsComponent;
            }());
            exports_1("StarsComponent", StarsComponent);
        }
    }
});
//# sourceMappingURL=stars.component.js.map