if (Meteor.isServer) {

    Meteor.publish('local-items', function () {
        return Items.find();
    })

    Meteor.publish('local-leds', function () {
        return Leds.find();
    })

    Meteor.publish('local-sensors', function () {
        return Sensors.find({},{ sort:{time: 1} });
        // return Sensors.find({},{ limit : 500 , sort:{time: -1} });
    })





     // var thisclientuser = Meteor.users.findOne(this.userId); 
     // if (thisclientuser) {
     // var devicesmac = thisclientuser.devices.map(function(x) { return x.mac } );

     // // var userdevices = UserConnection.find({"macAddr": {$in: devicesmac}}).fetch();
     // }

    // Meteor.publish('local-items', function () {
    //     return Items.find();
    // })

    // Meteor.publish('local-leds', function () {
    //     return Leds.find({"macAddr": {$in: devicesmac}}).fetch();
    // })

    // Meteor.publish('local-sensors', function () {
    //     return Sensors.find({"macAddr": {$in: devicesmac}}).fetch();
    //     // return Sensors.find({},{ limit : 500 , sort:{time: -1} });
    // })

    // Meteor.publish('local-sensors', function () {
    //     return Sensors.find();
    //     // return Sensors.find({},{ limit : 500 , sort:{time: -1} });
    // })

    // Meteor.publish('all-sensors', function () {
    //     return Sensors.find();
    //     // return Sensors.find({},{ limit : 10 , sort:{time: -1} });
    // })

    //Meteor.publish('remote-items', function (_author) {
    //    return Items.find({author:_author});
    //})

	Meteor.publish('activeusers', function() {
  

   return Meteor.users.find({ "status.online": true });
});
  

}
