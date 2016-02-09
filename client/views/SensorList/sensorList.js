 





if (Meteor.isClient) {
    // Meteor.subscribe('local-items');
    // Meteor.subscribe('local-leds');

    Template.sensorList.events({
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
            console.log(pinled);           
             Meteor.call('ledcontrol', pinled);
        }, 250),

         'click #allstats': function (e) {
            e.preventDefault();
           Router.go('/allsensor',   Sensors.find());
        },

    });

    Template.sensorList.helpers({
        tests: function () {
            return Items.find();
        },
         controls: function() {
            return Leds.find({"macAddr": this.macAddr});
        },

        sensors: function() {
          var tempo = this.macAddr;
            console.log(tempo);
            return Sensors.find({"macAddr": this.macAddr},{ limit : 1 , sort:{time: -1} });
        },

        sensorslist:  function() {
            return Sensors.find({"macAddr": this.macAddr},{ limit : 6 , sort:{time: -1} });
        },

    });
	
	Deps.autorun(function(c) {
    try {
      UserStatus.startMonitor({
        threshold: 30000,
        idleOnBlur: true
      });
      return c.stop();
    } catch (undefined) {}
  });
}


