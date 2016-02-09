// // var Points = new Meteor.Collection(null);

// // if(Points.find({}).count() === 0){
// // 	for(i = 0; i < 20; i++)
// // 		Points.insert({
// // 			date:moment().startOf('day').subtract('days', Math.floor(Math.random() * 1000)).toDate(),
// // 			value:Math.floor(Math.random() * 100)+500
// // 		});
// // }

// //    "Fri Jan 22 08:12:32 2016"
// //	  var format = d3.time.format("%c");



// // var format = d3.time.format("%Y-%m-%d");
// // format.parse("2011-01-01"); // returns a Date
// // format(new Date(2011, 0, 1)); // returns a string


// Template.humidityTemp.rendered = function(){
// 	//Width and height
// 	var margin = {top: 20, right: 20, bottom: 30, left: 50},
// 		width = 1200 - margin.left - margin.right,
// 		height = 400 - margin.top - margin.bottom;

// 	// var formatDate = d3.time.format("%c");	

// 	// var x = d3.time.scale()
// 	// 	.range([0, width]);

// 	var x = d3.scale.linear()
// 		.range([0, width]);

// 	var y = d3.scale.linear()
// 		.range([height, 0]);

// 	var xAxis = d3.svg.axis()
// 		.scale(x)
// 		.orient("bottom");

// 	var yAxis = d3.svg.axis()
// 		.scale(y)
// 		.orient("left");

// 	var line = d3.svg.line()
// 		.x(function(d) {
// 			// d.time = formatDate.parse(d.time);
// 			return x(d.temperature);
// 		})
// 		.y(function(d) {
// 			return y(d.humidity);
// 		});

// 	var svg = d3.select("#lineChart2")
// 		.attr("width", width + margin.left + margin.right)
// 		.attr("height", height + margin.top + margin.bottom)
// 		.append("g")
// 		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// 	svg.append("g")
// 		.attr("class", "x axis")
		
// 		.attr("transform", "translate(0," + height + ")")
		

// 	svg.append("g")
// 		.attr("class", "y axis")
// 		.append("text")
// 		.attr("transform", "rotate(-90)")
// 		.attr("y", 6)
// 		.attr("dy", ".71em")
// 		.style("text-anchor", "end")
// 		.text("Humidity (%)");

// 	function type(d) {
// 	  d.temperature = +d.temperature;
// 	  d.humidity = +d.humidity;
// 	  return d;
// 	}	
		

// 	Deps.autorun(function(){
// 		var dataset = Sensors.find({},{sort:{time:-1}}).fetch();

// 		var paths = svg.selectAll("path.line")
// 			.data([dataset]); //todo - odd syntax here - should use a key function, but can't seem to get that working

// 		x.domain(d3.extent(dataset, function(d) { return d.temperature; }));
// 		y.domain(d3.extent(dataset, function(d) { return d.humidity; }));

// 		//Update X axis
// 		svg.select(".x.axis")
// 			.transition()
// 			.duration(1000)
// 			.call(xAxis);
			
// 		//Update Y axis
// 		svg.select(".y.axis")
// 			.transition()
// 			.duration(1000)
// 			.call(yAxis);
		
// 		paths
// 			.enter()
// 			.append("path")
// 			.attr("class", "line")
// 			.attr('d', line);

// 		paths
// 			.attr('d', line); //todo - should be a transisition, but removed it due to absence of key
			
// 		paths
// 			.exit()
// 			.remove();
// 	});
// };