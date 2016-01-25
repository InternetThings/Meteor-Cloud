if (Meteor.isServer) {
    Meteor.publish('local-items', function () {
        return Items.find();
    })

    Meteor.publish('local-leds', function () {
        return Leds.find();
    })

    Meteor.publish('local-sensors', function () {
        return Sensors.find();
        // return Sensors.find({},{ limit : 500 , sort:{time: -1} });
    })

    // Meteor.publish('all-sensors', function () {
    //     return Sensors.find();
    //     // return Sensors.find({},{ limit : 10 , sort:{time: -1} });
    // })

    //Meteor.publish('remote-items', function (_author) {
    //    return Items.find({author:_author});
    //})
}