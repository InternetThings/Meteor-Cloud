Meteor.methods({
    delete: function () {
        Items.remove({});
    },

    ledcontrol: function(pinled) {
        // Meteor._sleepForMs(500);
        Leds.update(pinled._id, {$set: { name: pinled.name, checked: ! pinled.checked , time : new Date(), client: false}});
         
    },

    remotecontrol: function(remotemacAddr, remotepin, fields) {

        Leds.update({macAddr:remotemacAddr, pin: remotepin} , {$set: fields});
    },

    serversensordata: function(item) {
        Sensors.insert(item);
    },

    setconnmac: function(macAddr, gatewayid) {
        console.log("THE GATAWAY MAC AND CONN USERID");
        console.log(macAddr);
        console.log(gatewayid);

        var conn = Meteor.users.findOne(gatewayid);
         console.log(conn._id);


       
       return Meteor.users.update(gatewayid, {$set: {"macAddr": macAddr, "device": true}});


    },

    controlcreate: function(macAddr, pin, name) {

        // var userdevices = UserConnections.find({$and: [{"macAddr": {$exists: true}}, {"macAddr": {$in: devicesmac}}]}).fetch();

            var existled = Leds.findOne({$and: [{"macAddr": macAddr}, {"name": name}, {"pin": pin}]});

            if(! existled) {
                Leds.insert({"name": name , "macAddr": macAddr, "checked" : false, "pin": pin});
            } 

            
    },

    devicesadd: function(name, macAddr) {    

            Meteor.users.update(this.userId ,  {$push: { devices :{"name": name , "mac":  macAddr}}})

     }       
    // ,

    // getconnid: function(connection) {

    //     return 
    // }

});

// Items.find().observe({
//     added: function (item) {
//         console.log(item);
//     }

    
// });



