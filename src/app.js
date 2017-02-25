import angular from 'angular';   
import 'angular-route';
import * as firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDiL1XGJxQqqd8WCnwx6FQvzapSphklSmk",
  authDomain: "tardy-ccd34.firebaseapp.com",
  databaseURL: "https://tardy-ccd34.firebaseio.com",
  storageBucket: "tardy-ccd34.appspot.com",
  messagingSenderId: "959407744332"
};
firebase.initializeApp(config);


class MyCtrl {
    constructor() {
        this.info = "Default text";
    }
}

var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "./home.html"
            })
            .otherwise({
                templateUrl: "./404.html"
            })
    })
    .controller("MyCtrl", MyCtrl);
