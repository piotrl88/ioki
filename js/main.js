/*jslint browser: true*/
/*global $, jQuery, alert, Ember*/

//set up emberjs application with logs
var App = Ember.Application.create({
    LOG_TRANSITIONS: true,
    LOG_BINDINGS: true,
    LOG_VIEW_LOOKUPS: true,
    LOG_STACKTRACE_ON_DEPRECATION: true,
    LOG_VERSION: true,
    LOG_ACTIVE_GENERATION: true,
    TestField : Ember.TextField.extend({})
});

//set up routes of my application
App.Router.map(function () {
    "use strict";
    this.resource('index', {path: '/'}, function () {
        this.route('ex1');
        this.route('ex2');
    });
});


//set up simple helper for change box class (rotation)
Ember.Handlebars.registerBoundHelper("imgOddEven", function (id) {
    "use strict";
    var imgClass;
    if (id % 2 === 0) {
        imgClass = "imgOdd";
    } else {
        imgClass = "imgEven";
    }
    return imgClass;
});