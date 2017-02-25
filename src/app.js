import angular from 'angular';   
import 'angular-route';

class MyCtrl {
    constructor() {
        this.info = "Default text";
    }
}

angular.module("myApp", [])
    .controller("MyCtrl", MyCtrl);
