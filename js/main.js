var App = Em.Application.create({
    LOG_TRANSITIONS: true,
    LOG_BINDINGS: true,
    LOG_VIEW_LOOKUPS: true,
    LOG_STACKTRACE_ON_DEPRECATION: true,
    LOG_VERSION: true,
    LOG_ACTIVE_GENERATION: true,
    TestField:  Ember.TextField.extend({
        attributeBindings: ['name', "value"],
        isValid: function() {
            console.log(this.get('value') + "|" + this.get("name"));
            return ($.trim(this.get('value')).toLowerCase() === $.trim(this.get("data-answer")).toLowerCase());
        }.property('value'),
        classNameBindings: 'isValid:valid:invalid'
    })
});

App.Router.map(function () {
    this.resource('index', {path: '/'}, function () {
        this.route('ex1');
        this.route('ex2');
    });
});


App.store = DS.Store.create({});
App.ApplicationAdapter = DS.FixtureAdapter.extend({});

App.IndexController = Em.ArrayController.extend({
    renderTemplate: function () {
        // Render in the named outlet using the right controller
        this.render('ex1', {into: 'index', outlet: 'ex1', controller: 'ex1'});
        this.render('ex2', {into: 'index', outlet: 'ex2', controller: 'ex2'});
    },
    serialize: function (model) {
        return {
            ex1: model,
            ex2: model
        };
    },
    setupController: function (controller, model) {
        // Setup each controller with its own model
        this.controllerFor('ex1').set('model', model);
        this.controllerFor('ex2').set('model', model);
    },
    actions: {
    }
});

App.Ex1 = DS.Model.extend({
    name : DS.attr("string"),
    pict: DS.attr("string"),
    answer: DS.attr("string")
});
App.Ex2 = DS.Model.extend({
    pict: DS.attr("string"),
    answer: DS.attr("string")
});

App.Ex1.FIXTURES = [
    {
        id: 1,
        name : "",
        pict: "foggy.jpg",
        answer: "foggy"
    },
    {
        id: 2,
        name : "",
        pict: "raining.jpg",
        answer: "raining"
    },
    {
        id: 3,
        name : "",
        pict: "cloudy.jpg",
        answer: "cloudy"
    },
    {
        id: 4,
        name : "",
        pict: "sunny.jpg",
        answer: "sunny"
    },
    {
        id: 5,
        name : "",
        pict: "windy.jpg",
        answer: "windy"
    },
    {
        id: 6,
        name : "",
        pict: "snowing.jpg",
        answer: "snowing"
    }
];

App.Ex2.FIXTURES = [
    {
        id: 1,
        pict: "foggy.jpg",
        answer: "foggy"
    },
    {
        id: 2,
        pict: "raining.jpg",
        answer: "raining"
    },
    {
        id: 3,
        pict: "cloudy.jpg",
        answer: "cloudy"
    },
    {
        id: 4,
        pict: "sunny.jpg",
        answer: "sunny"
    },
    {
        id: 5,
        pict: "windy.jpg",
        answer: "windy"
    },
    {
        id: 6,
        pict: "snowing.jpg",
        answer: "snowing"
    }
];

App.IndexRoute = Ember.Route.extend({
    model: function () {
        return this.store.find('ex1');
    }
});

App.IndexEx1Controller = Ember.ArrayController.extend({
    needs: "index",
    actions : {
        checkAnswers : function(model) {
            console.log(this.store.find('ex1'));
            console.log("value: "+model.get('content')[0].get('name'));
            console.log("answer: "+model.get('content')[0].get('answer'));

             /*var store = App.get('store.ex1');
             var answers = this.get('answers');
             var ans = answers.name;
             console.log("#"+ans);*/

        }
    }
});

App.IndexEx1Route = Ember.Route.extend({
    model: function() {
        return this.modelFor('index');
    }
});

App.IndexEx2Controller = Ember.ArrayController.extend({
    needs: "index"
});

App.IndexEx2Route = Ember.Route.extend({
    model: function() {
        return this.modelFor('index');
    }
});