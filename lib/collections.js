Items = new Meteor.Collection('items');

Leds = new Meteor.Collection('leds');

Sensors = new Meteor.Collection('sensors');

Items.allow({
    insert: function () {
        return true;
    },
    remove: function () {
        return true;
    }
});

Leds.allow({
    insert: function () {
        return true;
    },
    remove: function () {
        return true;
    },
    update: function () {
        return true;
    }
});

Sensors.allow({
    insert: function () {
        return true;
    },
    remove: function () {
        return true;
    }
});