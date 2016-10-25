/**
 * Created by sam on 8/5/16.
 */
var app = angular.module('myApp', []);
app.controller('calcController', function(){
    var self = this;
    this.evalString = '';
    this.opLast=false;
    this.noNums = true;
    this.pointAdded = false;
    this.numClicked = function(){
        console.log('num to add: ', $(event.target).text());
        this.evalString += $(event.target).text();
        this.opLast = false;
        this.noNums = false;
        console.log('string after num click: ', self.evalString);
    };
    this.opClicked = function(){
        if (this.noNums) return;
        else if (this.opLast){
            this.evalString = this.evalString.slice(0, this.evalString.length - 1);
            this.evalString += $(event.target).text();
        } else {
            this.evalString += $(event.target).text();
            this.opLast = true;
            this.pointAdded = false;
        }
    };
    this.pointClicked = function(){
        if (this.pointAdded) return;
        else{
            this.evalString += $(event.target).text();
            this.pointAdded = true;
        }
    };
    this.eqClicked = function(){
        this.evalString = math.eval(this.evalString);
    };
    this.backSpace = function(){
        this.evalString = this.evalString.slice(0,this.evalString.length-1);
    };
    this.clearAll= function(){
        this.evalString = '';
    }
});
