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
    var OutputEventComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            OutputEventComponent = (function () {
                function OutputEventComponent() {
                    var _this = this;
                    this.everySecond = new core_1.EventEmitter();
                    this.five5Secs = new core_1.EventEmitter();
                    setInterval(function () { return _this.everySecond.emit("event"); }, 1000);
                    setInterval(function () { return _this.five5Secs.emit("event"); }, 5000);
                }
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], OutputEventComponent.prototype, "everySecond", void 0);
                __decorate([
                    core_1.Output('everyFiveSeconds'), 
                    __metadata('design:type', Object)
                ], OutputEventComponent.prototype, "five5Secs", void 0);
                OutputEventComponent = __decorate([
                    core_1.Component({
                        selector: 'outputs-event'
                    }), 
                    __metadata('design:paramtypes', [])
                ], OutputEventComponent);
                return OutputEventComponent;
            }());
            exports_1("OutputEventComponent", OutputEventComponent);
        }
    }
});
//# sourceMappingURL=outputEvent.component.js.map