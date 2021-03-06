/*jslint browser: true*/
/*global $, jQuery, alert, App, Ember, DS*/

//set up my store and adapter
App.store = DS.Store.create({});
App.ApplicationAdapter = DS.FixtureAdapter.extend({});

//set up models keys and attr
App.Ex1 = DS.Model.extend({
    name : DS.attr("string"),
    pict: DS.attr("string"),
    isValid: DS.attr(),
    type : DS.attr("string"),
    answer: DS.attr("string"),
    desc : DS.attr("string")
});
App.Ex2 = DS.Model.extend({
    name : DS.attr("string"),
    pict: DS.attr("string"),
    isValid: DS.attr(),
    type : DS.attr("string"),
    answer: DS.attr("string"),
    desc : DS.attr("string")
});

//my fixtures model data for each exercise
App.Ex1.FIXTURES = [
    {
        id: 1,
        name : "fogg",
        pict: "img/exercise1/1.png",
        isValid : null,
        type : "ex1",
        answer: "foggy"
    },
    {
        id: 2,
        name : "raining",
        pict: "img/exercise1/2.png",
        isValid : null,
        type : "ex1",
        answer: "raining"
    },
    {
        id: 3,
        name : "sunny",
        pict: "img/exercise1/3.png",
        isValid : null,
        type : "ex1",
        answer: "sunny"
    },
    {
        id: 4,
        name : "cloudy",
        pict: "img/exercise1/4.png",
        isValid : null,
        type : "ex1",
        answer: "cloudy"
    },
    {
        id: 5,
        name : "windy",
        pict: "img/exercise1/5.png",
        isValid : null,
        type : "ex1",
        answer: "windy"
    },
    {
        id: 6,
        name : "snowing",
        pict: "img/exercise1/6.png",
        isValid : null,
        type : "ex1",
        answer: "snowing"
    }
];

App.Ex2.FIXTURES = [
    {
        id: 1,
        name : "0",
        pict: "img/exercise2/1.png",
        answer: "1",
        type : "ex2",
        isValid : null,
        desc : "doing a project"
    },
    {
        id: 2,
        name : "2",
        pict: "img/exercise2/2.png",
        answer: "2",
        type : "ex2",
        isValid : null,
        desc : "enjoying a field trip"
    },
    {
        id: 3,
        name : "3",
        pict: "img/exercise2/3.png",
        answer: "3",
        type : "ex2",
        isValid : null,
        desc : "working on computers"
    },
    {
        id: 4,
        name : "4",
        pict: "img/exercise2/4.png",
        answer: "4",
        type : "ex2",
        isValid : null,
        desc : "taking a test"
    },
    {
        id: 5,
        name : "5",
        pict: "img/exercise2/5.png",
        answer: "5",
        type : "ex2",
        isValid : null,
        desc : "giving a presentation"
    },
    {
        id: 6,
        name : "6",
        pict: "img/exercise2/6.png",
        answer: "6",
        type : "ex2",
        isValid : null,
        desc : "practicing yoga"
    }
];