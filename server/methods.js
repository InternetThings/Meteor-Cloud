Meteor.methods({
    delete: function () {
        Items.remove({});
    },

    ledcontrol: function(pinled) {
        // Meteor._sleepForMs(500);
        Leds.update(pinled._id, {$set: { name: pinled.name, checked: ! pinled.checked , time : new Date()}});
         
    }
});

Items.find().observe({
    added: function (item) {
        console.log(item);
    }

    
});