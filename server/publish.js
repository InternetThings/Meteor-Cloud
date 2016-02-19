if (Meteor.isServer) {

  //STANDARD
   Meteor.publish('local-items', function () {
        //  if (!this.userId) {
        //     return this.ready();
        // }

        return Items.find();
    })

    Meteor.publish('local-leds', function () {
        // if (!this.userId) {
        //     return this.ready();
        // }

        var currentuser = this.userId;
          if (currentuser) {
        var thisclientuser = Meteor.users.findOne(currentuser);    

        if (thisclientuser.devices) {
        var devicesmac = thisclientuser.devices.map(function(x) { return x.mac } );
        

        return Leds.find({"macAddr": {$in: devicesmac}});
          }        
      }
      else {return  this.ready();}
    })

    Meteor.publish('local-sensors', function () {
        //  if (!this.userId) {
        //     return this.ready();
        // }
        
        var currentuser = this.userId;
          if (currentuser) {
        var thisclientuser = Meteor.users.findOne(currentuser);    

        if (thisclientuser.devices) {
        var devicesmac = thisclientuser.devices.map(function(x) { return x.mac } );
       

        return Sensors.find({"macAddr": {$in: devicesmac}},{ sort:{time: 1} });
          }
      } 
      else {return  this.ready();}
    })






    Meteor.publish('localdevice-leds', function () {
        // if (!this.userId) {
        //     return this.ready();
        // }

        var currentuser = this.userId;
          if (currentuser) {
        var thisclientuser = Meteor.users.findOne(currentuser);    

       
       // var devicesmac = thisclientuser.devices.map(function(x) { return x.mac } );
        

        return Leds.find({"macAddr": thisclientuser.macAddr });
                
      }
      else {return  this.ready();}
    })

    Meteor.publish('localdevice-sensors', function () {
        //  if (!this.userId) {
        //     return this.ready();
        // }
        
        var currentuser = this.userId;
          if (currentuser) {
        var thisclientuser = Meteor.users.findOne(currentuser);    

        
       // var devicesmac = thisclientuser.devices.map(function(x) { return x.mac } );
       

        return Sensors.find({"macAddr": thisclientuser.macAddr},{ sort:{time: 1} });
          
      } 
      else {return  this.ready();}
    })  






    //REACTIVE
    //  Meteor.reactivePublish('local-items', function () {
    //     //  if (!this.userId) {
    //     //     return this.ready();
    //     // }

    //     return Items.find();
    // })

    // Meteor.reactivePublish('local-leds', function () {
    //     // if (!this.userId) {
    //     //     return this.ready();
    //     // }

    //     var currentuser = this.userId;
    //       if (currentuser) {
    //     var thisclientuser = Meteor.users.findOne(currentuser);    

    //     if (thisclientuser.devices) {
    //     var devicesmac = thisclientuser.devices.map(function(x) { return x.mac } );
    //     // ( {$or : [{ _id : Meteor.userId() },{"services.facebook.id": { $in: friendid }}]})

    //     return Leds.find( { $or:  [{"macAddr": thisclientuser.macAddr} ,{"macAddr": {$in: devicesmac}}]});

    //      }
    //   }
    //   else {return  this.ready();}
    // })

    // Meteor.reactivePublish('local-sensors', function () {
    //     //  if (!this.userId) {
    //     //     return this.ready();
    //     // }
        
    //     var currentuser = this.userId;
    //       if (currentuser) {
    //     var thisclientuser = Meteor.users.findOne(currentuser);    

    //     if (thisclientuser.devices) {
    //     var devicesmac = thisclientuser.devices.map(function(x) { return x.mac } );
        
    //     return Sensors.find({ $or:  [{"macAddr": thisclientuser.macAddr} ,{"macAddr": {$in: devicesmac}}]},{ sort:{time: 1} });
    //     // return Sensors.find({"macAddr": {$in: devicesmac}},{ sort:{time: 1} });
    //     // return Sensors.find({},{ limit : 500 , sort:{time: -1} });
    //     }
    //   } 
    //   else {return  this.ready();}
    // })









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








 





  //OLD publish

  // Meteor.publish('local-items', function () {
  //       //  if (!this.userId) {
  //       //     return this.ready();
  //       // }

  //       return Items.find();
  //   })

  //   Meteor.publish('local-leds', function () {
  //       // if (!this.userId) {
  //       //     return this.ready();
  //       // }

  //       var currentuser = this.userId;
  //         if (currentuser) {
  //       var thisclientuser = Meteor.users.findOne(currentuser);    

  //       if (thisclientuser.devices) {
  //       var devicesmac = thisclientuser.devices.map(function(x) { return x.mac } );
  //       }

  //       return Leds.find({"macAddr": {$in: devicesmac}});
  //     }
  //     else {return  this.ready();}
  //   })

  //   Meteor.publish('local-sensors', function () {
  //       //  if (!this.userId) {
  //       //     return this.ready();
  //       // }
        
  //       var currentuser = this.userId;
  //         if (currentuser) {
  //       var thisclientuser = Meteor.users.findOne(currentuser);    

  //       if (thisclientuser.devices) {
  //       var devicesmac = thisclientuser.devices.map(function(x) { return x.mac } );
  //       }

  //       return Sensors.find({"macAddr": {$in: devicesmac}},{ sort:{time: 1} });
         
  //     } 
  //     else {return  this.ready();}
  //   })



  //REACTIVE PUBLISH    ----   lepozepo:reactive-publish
   // Meteor.reactivePublish('local-items', function () {
   //      //  if (!this.userId) {
   //      //     return this.ready();
   //      // }

   //      return Items.find();
   //  })

   //  Meteor.reactivePublish('local-leds', function () {
   //      // if (!this.userId) {
   //      //     return this.ready();
   //      // }

   //      var currentuser = this.userId;
   //        if (currentuser) {
   //      var thisclientuser = Meteor.users.findOne(currentuser);    

   //      if (thisclientuser.devices) {
   //      var devicesmac = thisclientuser.devices.map(function(x) { return x.mac } );
   //      }

   //      return Leds.find({"macAddr": {$in: devicesmac}});
   //    }
   //    else {return  this.ready();}
   //  })

   //  Meteor.reactivePublish('local-sensors', function () {
   //      //  if (!this.userId) {
   //      //     return this.ready();
   //      // }
        
   //      var currentuser = this.userId;
   //        if (currentuser) {
   //      var thisclientuser = Meteor.users.findOne(currentuser);    

   //      if (thisclientuser.devices) {
   //      var devicesmac = thisclientuser.devices.map(function(x) { return x.mac } );
   //      }

   //      return Sensors.find({"macAddr": {$in: devicesmac}},{ sort:{time: 1} });
   //      // return Sensors.find({},{ limit : 500 , sort:{time: -1} });
   //    } 
   //    else {return  this.ready();}
   //  })