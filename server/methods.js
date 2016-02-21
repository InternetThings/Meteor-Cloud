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

         var _temp = Sensors.findOne({_id: item._id});
        if (!_temp) {    

        Sensors.insert(item);
    }
    },

    setconnmac: function(macAddr, gatewayid) {
        console.log("THE GATAWAY MAC AND CONN USERID");
        console.log(macAddr);
        console.log(gatewayid);

        var conn = Meteor.users.findOne(gatewayid);
         console.log(conn._id);


       
       return Meteor.users.update(gatewayid, {$set: {"macAddr": macAddr, "device": true}});


    },

    // FOR WIRELESS PART THE SENSOR NEED TO HAVE AS WELL SOME KIND OF ID !!!!!    ---    THE PURPOSE WILL BE TO BE ABLE TO REMOVE SENSORS AS WELL
    SetGatewaySensor: function(name, type, gatewayid) {
        console.log("THE GATAWAY MAC AND CONN USERID");
        console.log(name);
        console.log(type);
        console.log(gatewayid);

        var conn = Meteor.users.findOne(gatewayid);
         console.log(conn._id);


       
       return Meteor.users.update(gatewayid, {$push: { sensors :{"name": name , "type":  type}}});

              
    },

    CreateNotificationRule: function(title, message, sensor, operator, targetValue, macAddr) {
            //  NEED TO ADD SENSOR ID IN FUTURE WHEN WIRELESS PART IS READY !!!!!
            console.log(title);
            console.log(this.userId);
            console.log(operator);
            console.log(macAddr);



             if (Meteor.userId()) {

            var newRuleSet = {
                title: title,
                message: message,
                sensor: sensor,
                operator: operator,
                targetValue: targetValue,
                pending: true,
                macAddr: macAddr,
                addedAt: new Date(),
                userId: Meteor.userId()
            }
            try {
                ValidateRuleSet(newRuleSet);
                var rulesetId = NotificationRule.insert(newRuleSet);
                return rulesetId;
            }
            catch (error) {
                throw new Meteor.Error('Error', error.message);
            }
        }
        else {
            throw new Error('User must be logged in');
        }
    





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



