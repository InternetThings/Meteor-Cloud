 





if (Meteor.isClient) {
    // Meteor.subscribe('local-items');
    // Meteor.subscribe('local-leds');

    Template.testList.events({
        'click a.insert': function (e) {
            e.preventDefault();
            Items.insert({name: new Date() , author: "A"});
        },
        'click a.delete': function (e) {
            e.preventDefault();
            Meteor.call('delete');
        },
         'click .btn':   _.debounce(function(e) {
            e.preventDefault();          
            pinled = Leds.findOne(this._id);           
             Meteor.call('ledcontrol', pinled);
        }, 250),

         'click #allstats': function (e) {
            e.preventDefault();
           Router.go('/allsensor',   Sensors.find());
        },

    });

    Template.testList.helpers({
        tests: function () {
            return Items.find();
        },
         controls: function() {
            return Leds.find();
        },

        sensors: function() {
            return Sensors.find({},{ limit : 1 , sort:{time: -1} });
        },

        sensorslist:  function() {
            return Sensors.find({},{ limit : 6 , sort:{time: -1} });
        },

    });
}


