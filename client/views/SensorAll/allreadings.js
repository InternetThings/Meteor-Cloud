









// if (Meteor.isClient) {
    

//     Template.allreadings.events({
//         'click a.insert': function (e) {
//             e.preventDefault();
//             Items.insert({name: new Date() , author: "A"});
//         },
//         'click a.delete': function (e) {
//             e.preventDefault();
//             Meteor.call('delete');
//         },
        

//          'click #home': function (e) {
//             e.preventDefault();
//            Router.go('/');
//         },

//     });

//     Template.allreadings.helpers({
//         tests: function () {
//             return Items.find();
//         },
       

//         sensors: function() {
//             return Sensors.find({},{ limit : 1 , sort:{time: -1} });
//         },

//         sensorslist:  function() {
//             return Sensors.find({},{ limit : 6 , sort:{time: -1} });
//         },

//     });
// }


