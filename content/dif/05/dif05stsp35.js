(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 1000,
	height: 550,
	fps: 12,
	color: "#999999",
	webfonts: {},
	manifest: [
		{src:"images/dif05stsp35_panel_1.png", id:"dif05stsp35_panel_1"},
		{src:"images/dif05stsp35_panel_2.png", id:"dif05stsp35_panel_2"},
		{src:"images/sts01p35_clock.png", id:"sts01p35_clock"},
		{src:"images/sts01p35_command.png", id:"sts01p35_command"},
		{src:"images/sts01p36_1minute.png", id:"sts01p36_1minute"},
		{src:"images/sts01p36_command.png", id:"sts01p36_command"},
		{src:"images/texture.jpg", id:"texture"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.dif05stsp35_panel_1 = function() {
	this.initialize(img.dif05stsp35_panel_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,572,823);


(lib.dif05stsp35_panel_2 = function() {
	this.initialize(img.dif05stsp35_panel_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,572,823);


(lib.sts01p35_clock = function() {
	this.initialize(img.sts01p35_clock);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,105);


(lib.sts01p35_command = function() {
	this.initialize(img.sts01p35_command);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,301,388);


(lib.sts01p36_1minute = function() {
	this.initialize(img.sts01p36_1minute);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,105);


(lib.sts01p36_command = function() {
	this.initialize(img.sts01p36_command);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,301,388);


(lib.texture = function() {
	this.initialize(img.texture);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.textboxLside = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape.setTransform(142.8,10.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgsIAAgTIAPAAIAAATg");
	this.shape_1.setTransform(138.3,10.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_2.setTransform(128.8,12.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgsIAAgTIAPAAIAAATg");
	this.shape_3.setTransform(119.3,10.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgnBAIAAh/IARAAIAABwIA+AAIAAAPg");
	this.shape_4.setTransform(112.6,10.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgLAAgOQAAgOAFgKQAFgMAJgFQAJgHALAAQAHABAGADQAHADAEAHIAAgvIAQAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgPgIQgIAIAAARQABARAHAJQAIAJAIAAQAKAAAIgIQAGgJABgRQgBgSgGgIQgIgJgLAAQgJAAgGAJg");
	this.shape_5.setTransform(96.9,10.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_6.setTransform(87.2,12.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQAEgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgFAEQgGAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAKgDAKAAQALAAAIADQAHACADAFQAFAEABAGIAAAPIAAATQAAAWABAGQABAGAEAFIgRAAQgCgFgBgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgDAFQgJACgEACQgEABgDAEQgBADAAAEQAAAHAEAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQADgFgBgLIAAgFQgIADgQACg");
	this.shape_7.setTransform(77.2,12.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_8.setTransform(64.8,12.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_9.setTransform(49.8,12.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_10.setTransform(37.2,12.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgdA6QgNgJgGgQQgIgQABgRQAAgUAHgOQAIgQAOgHQAOgIAQAAQASAAAOAKQANAKAFARIgRAFQgEgOgIgHQgJgGgNAAQgNgBgKAIQgKAHgEAMQgEAMAAAMQAAAPAFANQAEALALAHQAKAFAJAAQAPAAAKgHQAKgJAEgQIARAEQgGAVgOALQgOALgUAAQgTAAgNgIg");
	this.shape_11.setTransform(25.9,10.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_12.setTransform(113.8,-7.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_13.setTransform(101.2,-7.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_14.setTransform(88.8,-7.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgGBAIAAhcIANAAIAABcgAgGgtIAAgSIANAAIAAASg");
	this.shape_15.setTransform(79.3,-9.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAYAuIgTgdIgFgIIgXAlIgTAAIAiguIgfgtIATAAIAPAWIAFAKIAGgKIAQgWIATAAIghAsIAjAvg");
	this.shape_16.setTransform(72.8,-7.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AghApQgJgIAAgLQABgHADgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQADgKAEgGQAFgHAJgDQAKgDAJAAQANAAAHADQAHACAEAFQADAEABAGIABAPIAAATQAAAWACAGQABAGACAFIgQAAQgDgFAAgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgDADAAAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_17.setTransform(63.2,-7.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAtBAIAAhqIgmBqIgNAAIglhsIAABsIgRAAIAAh/IAaAAIAeBZIAEATIAHgUIAfhYIAXAAIAAB/g");
	this.shape_18.setTransform(50.8,-9.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(1,0,0,3).p("ABljoIY1AAIAAHRI41AAIAAjaI5gAAIAAA1IiXhIICXhOIAAAxIZgAAg");
	this.shape_19.setTransform(-8.1,0.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("ABhDoIAAjZI5fAAIAAA0IiXhHICXhOIAAAxIZfAAIAAjGIY2AAIAAHPg");
	this.shape_20.setTransform(-7.8,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-177.6,-23.8,339.5,48.6);


(lib.textbox45anglecopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape.setTransform(41.3,-6.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_1.setTransform(31.3,-6.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGBAIAAhbIANAAIAABbgAgGgsIAAgTIANAAIAAATg");
	this.shape_2.setTransform(24.4,-8.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_3.setTransform(19.9,-7.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgGBAIAAhbIANAAIAABbgAgGgsIAAgTIANAAIAAATg");
	this.shape_4.setTransform(15.4,-8.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_5.setTransform(8.8,-6.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_6.setTransform(-0.7,-6.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgwBAIAAh/IAwAAQAMAAAGABQAKACAHAFQAGAEAEAIQAEAIgBAJQAAARgKAJQgKALgcAAIgfAAIAAA1gAgfgBIAfAAQASgBAGgGQAHgGAAgLQAAgIgEgGQgEgFgGgCIgRgBIgfAAg");
	this.shape_7.setTransform(-11.3,-8.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_8.setTransform(-25.1,-7.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_9.setTransform(-32.7,-6.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAWBAIAAg7QgBgKgFgFQgEgGgKAAQgFAAgGAEQgGADgDAHQgDAEAAALIAAAzIgPAAIAAh/IAPAAIAAAuQAMgMAOAAQALAAAHADQAIAEADAIQAEAHgBAMIAAA7g");
	this.shape_10.setTransform(-42.6,-8.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_11.setTransform(-52.2,-6.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgnBBIAAh/IAPAAIAAAMQAEgHAHgEQAGgDAIAAQAMAAAIAGQAKAGAEALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgGAAgHgDQgHgDgEgFIAAAtgAgRgqQgIAJAAASQAAAQAIAJQAHAIAKAAQAIAAAJgJQAGgIAAgRQAAgSgGgJQgIgJgJAAQgKAAgHAKg");
	this.shape_12.setTransform(-61.4,-4.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHADgGQADgGAFgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgGAEQgFAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQALAAAIADQAHACAEAFQADAEABAGIACAPIAAATQAAAWABAGQABAGACAFIgQAAQgDgFAAgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgCADgBAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgPACg");
	this.shape_13.setTransform(-71.7,-6.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_14.setTransform(-81.7,-6.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgYA9QgMgFgHgKQgGgKgBgNIAQgCQACAKAEAGQAEAHAJADQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgFQgEgEgIgDIgVgGQgRgFgHgBQgKgGgEgHQgFgHAAgIQAAgLAGgHQAFgKALgEQALgEAMAAQANAAALAEQALAFAGAJQAGAJAAAMIgQAAQgCgLgHgHQgIgGgOAAQgOAAgHAGQgHAFAAAIQAAAHAFAFQAFAEASAFQAVAFAIADQALAEAGAHQAFAIAAAKQAAALgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape_15.setTransform(-92.7,-8.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,0,0,3).p("AaTC+IAAkSI4yAAIAABrI30AAIh9h7IAjgjIiig0IA3CfIAlglICLCKIYJAAIAAB1g");
	this.shape_16.setTransform(-115.1,-13.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ABgC9IAAh1I4JAAIiMiKIglAlIg3ifICiA0IgiAiIB9B7IX0AAIAAhqIYyAAIAAESg");
	this.shape_17.setTransform(-115,-13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-284.2,-33.1,338.5,39.9);


(lib.Symbol1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// outline
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,0,3).p("EgYmggGMAxNAAAMAAABANMgxNAAAg");
	this.shape.setTransform(143.5,182.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.sts01p35_command();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.498)").s().p("EgYmAgHMAAAhANMAxMAAAMAAABANg");
	this.shape_1.setTransform(143.5,182.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-24.1,317,413.2);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// outline
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,0,3).p("EgYmggGMAxNAAAMAAABANMgxNAAAg");
	this.shape.setTransform(143.5,182.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.sts01p36_command();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.498)").s().p("EgYmAgHMAAAhANMAxMAAAMAAABANg");
	this.shape_1.setTransform(143.5,182.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-24.1,317,413.2);


(lib.prot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.texture();
	this.instance.setTransform(0,0,100,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1000,550);


(lib.point_1copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape.setTransform(689.9,-48.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAAoIgFgFQgBgDAAgJIAAgiIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIAKAAIAAAIIgKAAIAAAiIAAAGIACACIAEABIAEgBIACAKIgIABQgGAAgBgCg");
	this.shape_1.setTransform(686.5,-51.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgTAYQgIgJAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgLAAgIgIgAgKgSQgFAFgBAIIAhAAQgBgIgDgEQgFgFgIgBQgFABgFAEg");
	this.shape_2.setTransform(681.5,-50.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgQAbQgHgFgCgKIALgCQABAHAEADQAEADAFAAQAHAAAEgDQADgDABgDQAAgEgEgDIgLgDIgOgEQgEgBgCgEQgDgEAAgEQAAgFADgDIAEgGIAHgDIAJgBQAGAAAFACQAGACACADQADAFABAFIgKACQgBgFgEgDQgDgDgFAAQgGAAgDADQgDACAAADIABAFIAEACIAHADIAQAFQAFAAACADQACAEABAFQAAAFgDAFQgEAFgFACQgHADgHAAQgKAAgGgFg");
	this.shape_3.setTransform(675.1,-50.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgTAYQgIgJAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgLAAgIgIgAgKgSQgFAFgBAIIAhAAQgBgIgDgEQgFgFgIgBQgFABgFAEg");
	this.shape_4.setTransform(668.8,-50.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgPAfIAAg8IAJAAIAAAJQAEgGACgCQACgCAEAAQAFAAAFADIgDAKQgEgCgEAAQgDAAgCACQgCACgBADQgCAGAAAGIAAAfg");
	this.shape_5.setTransform(664,-50.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgQAbQgHgFgCgKIALgCQABAHAEADQAEADAFAAQAHAAAEgDQAEgDAAgDQgBgEgDgDIgKgDIgPgEQgEgBgCgEQgCgEgBgEQAAgFACgDIAFgGIAIgDIAIgBQAFAAAGACQAGACACADQADAFABAFIgLACQAAgFgDgDQgDgDgGAAQgGAAgDADQgEACAAADIACAFIAEACIAIADIAPAFQAFAAACADQACAEABAFQAAAFgEAFQgDAFgGACQgFADgHAAQgLAAgGgFg");
	this.shape_6.setTransform(655.1,-50.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgEArIAAg8IAJAAIAAA8gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_7.setTransform(650.8,-51.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgSAYQgIgJAAgPQAAgJAEgHQADgIAHgDQAHgEAGAAQAKAAAGAFQAHAFACAKIgLABQgBgGgEgDQgEgDgFgBQgGABgFAFQgFAGAAALQAAAMAFAFQAFAGAGAAQAGAAAEgEQAEgDABgJIALACQgCALgHAGQgHAGgKAAQgLAAgIgIg");
	this.shape_8.setTransform(643.3,-50.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgEArIAAg8IAJAAIAAA8gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_9.setTransform(638.8,-51.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgRAnQgHgFAAgLIAKACQABAFADACQAEADAGAAQAGAAAEgDQAEgDABgFIABgNQgHAHgJABQgMAAgHgKQgHgJAAgLQAAgJADgIQAEgHAGgEQAGgEAHAAQAKAAAHAJIAAgHIAKAAIAAAzQAAAOgDAHQgDAFgGAEQgHAEgIAAQgKAAgHgFgAgKgdQgFAGAAALQAAAMAFAEQAFAGAFAAQAHAAAFgGQAFgEAAgMQAAgLgFgGQgFgFgHgBQgFABgFAFg");
	this.shape_10.setTransform(634,-49.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgUAYQgIgJAAgPQAAgQAKgIQAIgHAKAAQAMAAAIAIQAJAJAAAOQAAALgEAGQgEAIgHADQgGAEgIAAQgMAAgIgIgAgMgRQgFAHAAAKQAAAMAFAFQAGAGAGAAQAHAAAFgGQAGgGAAgLQAAgKgGgHQgFgFgHgBQgGABgGAFg");
	this.shape_11.setTransform(627.5,-50.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_12.setTransform(622.8,-51.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAAAoIgFgFQgBgDAAgJIAAgiIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIAKAAIAAAIIgKAAIAAAiIAAAGIACACIAEABIAEgBIACAKIgIABQgGAAgBgCg");
	this.shape_13.setTransform(616.6,-51.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgEArIAAg8IAJAAIAAA8gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_14.setTransform(613.5,-51.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAfAfIAAglIgBgJIgDgFQgDgBgEAAQgGAAgEAEQgFAEAAAKIAAAiIgJAAIAAgmQAAgHgCgEQgDgDgFAAQgFAAgEACQgEACgCAFQgBAEAAAIIAAAfIgLAAIAAg8IAKAAIAAAJQADgFAFgDQAFgCAFAAQAIAAAEACQACADACAGQAIgLALAAQAKAAAFAFQAEAFAAALIAAAog");
	this.shape_15.setTransform(607.2,-50.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgEArIAAg8IAJAAIAAA8gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_16.setTransform(600.9,-51.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgZArIAAhVIALAAIAABKIAoAAIAAALg");
	this.shape_17.setTransform(596.5,-51.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgMAnQgHgEgDgHQgDgIgBgJQAAgKADgFQAEgIAGgEQAGgEAHAAQAEAAAFADQAEACADAEIAAgfIAKAAIAABUIgJAAIAAgIQgGAJgLAAQgGAAgGgEgAgKgFQgFAFAAALQAAAMAGAGQAFAFAEAAQAIAAAEgFQAFgGAAgLQAAgMgFgFQgFgGgHAAQgFAAgFAGg");
	this.shape_18.setTransform(586,-51.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAOAfIAAgkQAAgGgBgDQgBgDgDgCQgEgCgEAAQgFAAgEAEQgFAEAAAMIAAAgIgLAAIAAg8IAKAAIAAAJQAHgKAKAAQAGAAAFACQAFACACADQACADABAFIABAKIAAAkg");
	this.shape_19.setTransform(579.6,-50.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgWAbQgFgFAAgIQAAgEACgEQACgEADgCIAIgCIAJgBQALgCAGgCIAAgCQAAgHgDgDQgEgEgHAAQgGAAgEADQgEADgBAHIgKgCQABgGADgFQAEgEAFgCQAHgCAGAAQAHAAAFACQAFACADACQADADAAAEIABAKIAAANIAAASQABAEACAEIgLAAIgCgIQgGAFgFACQgEACgGAAQgKAAgGgFgAgBAEQgHAAgDACQgCAAgBADQgCACAAADQAAAEAEADQADACAFABQAEgBAFgCQAFgCADgFQABgEAAgHIAAgDIgPAEg");
	this.shape_20.setTransform(572.9,-50.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAfAfIAAglIgBgJQgBgDgDgCQgCgBgEAAQgGAAgFAEQgEAEAAAKIAAAiIgIAAIAAgmQgBgHgCgEQgDgDgFAAQgFAAgEACQgDACgDAFQgBAEAAAIIAAAfIgKAAIAAg8IAJAAIAAAJQADgFAFgDQAEgCAHAAQAGAAAFACQADADACAGQAGgLANAAQAJAAAEAFQAGAFgBALIAAAog");
	this.shape_21.setTransform(564.6,-50.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAfAfIAAglIgBgJQgBgDgDgCQgCgBgEAAQgGAAgFAEQgEAEAAAKIAAAiIgIAAIAAgmQAAgHgDgEQgDgDgGAAQgEAAgEACQgDACgCAFQgCAEAAAIIAAAfIgKAAIAAg8IAJAAIAAAJQADgFAEgDQAFgCAHAAQAGAAAFACQACADADAGQAGgLANAAQAJAAAEAFQAGAFAAALIAAAog");
	this.shape_22.setTransform(554.6,-50.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgUAYQgIgJAAgPQAAgQAKgIQAIgHAKAAQAMAAAIAIQAJAJAAAOQAAALgEAGQgEAIgHADQgGAEgIAAQgMAAgIgIgAgMgRQgFAHAAAKQAAAMAFAFQAGAGAGAAQAHAAAFgGQAGgGAAgLQAAgKgGgHQgFgFgHgBQgGABgGAFg");
	this.shape_23.setTransform(546.3,-50.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgTAmQgIgFgFgLQgFgLAAgLQAAgMAGgLQAEgKAKgFQAJgFAKAAQANAAAIAHQAKAGADAMIgLADQgDgJgGgFQgGgEgIAAQgIAAgHAEQgHAFgCAJQgDAHAAAIQAAAKADAIQAEAIAGAEQAHAEAGAAQAJAAAHgGQAGgFADgLIAMAEQgEANgKAIQgIAHgOAAQgMAAgJgGg");
	this.shape_24.setTransform(538.7,-51.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAfAfIAAglIgBgJQgBgDgCgCQgDgBgEAAQgHAAgDAEQgFAEAAAKIAAAiIgJAAIAAgmQAAgHgCgEQgDgDgGAAQgEAAgEACQgEACgBAFQgCAEAAAIIAAAfIgLAAIAAg8IAKAAIAAAJQADgFAEgDQAFgCAGAAQAIAAAEACQACADACAGQAIgLALAAQAKAAAEAFQAFAFABALIAAAog");
	this.shape_25.setTransform(526,-50.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgNAdQgEgCgDgDQgCgDgBgFIgBgKIAAgkIALAAIAAAgIABALQABAEADADQADACAFAAQADAAAEgCQAEgDACgEQABgEAAgIIAAgfIALAAIAAA8IgKAAIAAgJQgHAKgKAAQgGAAgFgCg");
	this.shape_26.setTransform(517.6,-50.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAfAfIAAglIgBgJQgBgDgCgCQgDgBgEAAQgHAAgEAEQgEAEAAAKIAAAiIgJAAIAAgmQAAgHgCgEQgDgDgGAAQgEAAgEACQgEACgBAFQgCAEAAAIIAAAfIgLAAIAAg8IAKAAIAAAJQADgFAEgDQAFgCAGAAQAIAAAEACQACADACAGQAIgLALAAQAKAAAEAFQAFAFABALIAAAog");
	this.shape_27.setTransform(509.3,-50.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgEArIAAg8IAJAAIAAA8gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_28.setTransform(503,-51.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAPAfIgMgUIgDgFIgPAZIgNAAIAXgfIgVgdIAOAAIAJAOIADAHIAEgHIAKgOIANAAIgWAdIAYAfg");
	this.shape_29.setTransform(498.7,-50.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgWAbQgFgFAAgIQAAgEACgEQACgEAEgCIAHgCIAKgBQAKgCAGgCIAAgCQAAgHgDgDQgEgEgHAAQgGAAgEADQgDADgCAHIgKgCQABgGAEgFQACgEAHgCQAGgCAFAAQAIAAAGACQAFACACACQADADABAEIAAAKIAAANIABASQAAAEACAEIgLAAIgCgIQgGAFgFACQgEACgGAAQgKAAgGgFgAgBAEQgGAAgDACQgDAAgCADQgBACAAADQAAAEADADQAEACAFABQAEgBAGgCQAEgCACgFQACgEAAgHIAAgDIgPAEg");
	this.shape_30.setTransform(492.3,-50.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAdArIAAhGIgZBGIgIAAIgZhIIAABIIgLAAIAAhVIARAAIAVA8IACAMIAEgNIAVg7IAPAAIAABVg");
	this.shape_31.setTransform(484,-51.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgTAYQgIgJAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgLAAgIgIgAgKgSQgFAFgBAIIAhAAQgBgIgDgEQgFgFgIgBQgFABgFAEg");
	this.shape_32.setTransform(472.3,-50.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAOArIAAgoQAAgGgDgDQgEgEgGAAQgDAAgEADQgEACgCAEQgBACAAAIIAAAiIgLAAIAAhVIALAAIAAAfQAHgIAJAAQAHAAAFADQAFADADAEQACAFAAAHIAAAog");
	this.shape_33.setTransform(465.7,-51.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAAAoIgFgFQgBgDAAgJIAAgiIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIAKAAIAAAIIgKAAIAAAiIAAAGIACACIAEABIAEgBIACAKIgIABQgGAAgBgCg");
	this.shape_34.setTransform(460.7,-51.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgFAJQAEgBABgDQAAgDAAgDIgEAAIAAgMIAKAAIAAAMQAAAEgCAEQgDAFgDACg");
	this.shape_35.setTransform(453.9,-47.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAAAoIgFgFQgBgDAAgJIAAgiIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIAKAAIAAAIIgKAAIAAAiIAAAGIACACIAEABIAEgBIACAKIgIABQgGAAgBgCg");
	this.shape_36.setTransform(450.7,-51.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgQAbQgGgFgCgKIAKgCQABAHAEADQAEADAFAAQAIAAADgDQADgDAAgDQAAgEgCgDIgLgDIgOgEQgFgBgCgEQgDgEABgEQAAgFABgDIAGgGIAGgDIAJgBQAFAAAHACQAFACADADQACAFABAFIgKACQgBgFgEgDQgDgDgFAAQgGAAgDADQgDACAAADIABAFIAEACIAIADIAPAFQAEAAADADQACAEAAAFQAAAFgDAFQgDAFgGACQgFADgHAAQgLAAgGgFg");
	this.shape_37.setTransform(445.9,-50.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgPAfIAAg8IAJAAIAAAJQAEgGACgCQACgCAEAAQAFAAAFADIgDAKQgEgCgEAAQgDAAgCACQgCACgBADQgCAGAAAGIAAAfg");
	this.shape_38.setTransform(441.4,-50.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgEArIAAg8IAJAAIAAA8gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_39.setTransform(437.6,-51.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgHArIAAg0IgKAAIAAgIIAKAAIAAgHIABgJQABgEAEgDQACgCAHAAIAKABIgCAJIgGAAQgFAAgCACQgCACAAAFIAAAGIAMAAIAAAIIgMAAIAAA0g");
	this.shape_40.setTransform(434.9,-52);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgQAbQgGgFgCgKIAKgCQABAHAEADQAEADAFAAQAIAAADgDQADgDAAgDQAAgEgCgDIgLgDIgOgEQgFgBgCgEQgDgEABgEQAAgFACgDIAFgGIAGgDIAJgBQAFAAAHACQAFACADADQACAFABAFIgKACQgBgFgEgDQgDgDgFAAQgGAAgDADQgDACAAADIABAFIAEACIAIADIAPAFQAEAAADADQACAEAAAFQAAAFgCAFQgEAFgGACQgFADgHAAQgLAAgGgFg");
	this.shape_41.setTransform(426.6,-50.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgPAfIAAg8IAJAAIAAAJQAEgGACgCQACgCAEAAQAFAAAFADIgDAKQgEgCgEAAQgDAAgCACQgCACgBADQgCAGAAAGIAAAfg");
	this.shape_42.setTransform(422.1,-50.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgNAdQgEgCgDgDQgCgDgBgFIgBgKIAAgkIALAAIAAAgIABALQABAEADADQADACAFAAQADAAAEgCQAEgDACgEQABgEAAgIIAAgfIALAAIAAA8IgKAAIAAgJQgHAKgKAAQgGAAgFgCg");
	this.shape_43.setTransform(416.2,-50.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgSAYQgIgJAAgPQAAgJAEgHQADgIAHgDQAHgEAGAAQAKAAAGAFQAHAFACAKIgLABQgBgGgEgDQgEgDgFgBQgGABgFAFQgFAGAAALQAAAMAFAFQAFAGAGAAQAGAAAEgEQAEgDABgJIALACQgCALgHAGQgHAGgKAAQgLAAgIgIg");
	this.shape_44.setTransform(410.1,-50.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgSAYQgIgJAAgPQAAgJAEgHQADgIAHgDQAHgEAGAAQAKAAAGAFQAHAFACAKIgLABQgBgGgEgDQgEgDgFgBQgGABgFAFQgFAGAAALQAAAMAFAFQAFAGAGAAQAGAAAEgEQAEgDABgJIALACQgCALgHAGQgHAGgKAAQgLAAgIgIg");
	this.shape_45.setTransform(404.1,-50.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgUAYQgIgJAAgPQAAgQAKgIQAIgHAKAAQAMAAAIAIQAJAJAAAOQAAALgEAGQgEAIgHADQgGAEgIAAQgMAAgIgIgAgMgRQgFAHAAAKQAAAMAFAFQAGAGAGAAQAHAAAFgGQAGgGAAgLQAAgKgGgHQgFgFgHgBQgGABgGAFg");
	this.shape_46.setTransform(397.6,-50.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgPAfIAAg8IAJAAIAAAJQAEgGACgCQACgCAEAAQAFAAAFADIgDAKQgEgCgEAAQgDAAgCACQgCACgBADQgCAGAAAGIAAAfg");
	this.shape_47.setTransform(389.4,-50.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgTAYQgIgJAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgLAAgIgIgAgKgSQgFAFgBAIIAhAAQgBgIgDgEQgFgFgIgBQgFABgFAEg");
	this.shape_48.setTransform(383.6,-50.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgDAfIgYg8IALAAIAOAjIACAMIAEgMIANgjIALAAIgXA8g");
	this.shape_49.setTransform(377.3,-50.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgTAYQgIgJAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgLAAgIgIgAgKgSQgFAFgBAIIAhAAQgBgIgDgEQgFgFgIgBQgFABgFAEg");
	this.shape_50.setTransform(371,-50.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAOArIAAgoQAAgGgDgDQgEgEgGAAQgDAAgEADQgEACgCAEQgBACAAAIIAAAiIgLAAIAAhVIALAAIAAAfQAHgIAJAAQAHAAAFADQAFADADAEQACAFAAAHIAAAog");
	this.shape_51.setTransform(364.3,-51.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgSAYQgIgJAAgPQAAgJAEgHQADgIAHgDQAHgEAGAAQAKAAAGAFQAHAFACAKIgLABQgBgGgEgDQgEgDgFgBQgGABgFAFQgFAGAAALQAAAMAFAFQAFAGAGAAQAGAAAEgEQAEgDABgJIALACQgCALgHAGQgHAGgKAAQgLAAgIgIg");
	this.shape_52.setTransform(358.2,-50.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgEArIAAg8IAJAAIAAA8gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_53.setTransform(353.7,-51.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAOArIAAgoQAAgGgDgDQgEgEgGAAQgDAAgEADQgEACgCAEQgBACAAAIIAAAiIgLAAIAAhVIALAAIAAAfQAHgIAJAAQAHAAAFADQAFADADAEQACAFAAAHIAAAog");
	this.shape_54.setTransform(349,-51.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAMAfIgKgkIgCgLIgLAvIgLAAIgTg8IALAAIAJAhIAFANIACgMIAKgiIAJAAIAJAiIAEALIADgLIALgiIAKAAIgTA8g");
	this.shape_55.setTransform(341.4,-50.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgFAJQAEgBABgDQAAgDAAgDIgEAAIAAgMIAKAAIAAAMQAAAEgCAEQgDAFgDACg");
	this.shape_56.setTransform(332,-47.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgTAYQgIgJAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgLAAgIgIgAgKgSQgFAFgBAIIAhAAQgBgIgDgEQgFgFgIgBQgFABgFAEg");
	this.shape_57.setTransform(327,-50.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAAAoIgFgFQgBgDAAgJIAAgiIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIAKAAIAAAIIgKAAIAAAiIAAAGIACACIAEABIAEgBIACAKIgIABQgGAAgBgCg");
	this.shape_58.setTransform(322.1,-51.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgNAdQgEgCgDgDQgCgDgBgFIgBgKIAAgkIALAAIAAAgIABALQABAEADADQADACAFAAQADAAAEgCQAEgDACgEQABgEAAgIIAAgfIALAAIAAA8IgKAAIAAgJQgHAKgKAAQgGAAgFgCg");
	this.shape_59.setTransform(317,-50.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAOAfIAAgkQAAgGgBgDQgBgDgDgCQgEgCgEAAQgFAAgEAEQgFAEAAAMIAAAgIgLAAIAAg8IAKAAIAAAJQAHgKAKAAQAGAAAFACQAFACACADQACADABAFIABAKIAAAkg");
	this.shape_60.setTransform(310.4,-50.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgEArIAAg8IAJAAIAAA8gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_61.setTransform(305.7,-51.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAfAfIAAglIgBgJIgDgFQgDgBgEAAQgGAAgEAEQgFAEAAAKIAAAiIgJAAIAAgmQABgHgDgEQgDgDgFAAQgFAAgEACQgEACgCAFQgBAEAAAIIAAAfIgLAAIAAg8IAKAAIAAAJQADgFAFgDQAFgCAFAAQAIAAAEACQACADACAGQAIgLALAAQAKAAAFAFQAEAFAAALIAAAog");
	this.shape_62.setTransform(299.4,-50.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgQAbQgHgFgCgKIALgCQABAHAEADQAEADAFAAQAHAAAEgDQAEgDAAgDQAAgEgEgDIgLgDIgOgEQgEgBgCgEQgDgEAAgEQAAgFADgDIAEgGIAIgDIAIgBQAFAAAGACQAGACACADQADAFABAFIgLACQAAgFgEgDQgCgDgGAAQgGAAgDADQgEACAAADIACAFIAEACIAHADIAQAFQAFAAACADQACAEABAFQAAAFgDAFQgEAFgFACQgGADgIAAQgKAAgGgFg");
	this.shape_63.setTransform(288,-50.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgNAdQgEgCgDgDQgCgDgBgFIgBgKIAAgkIALAAIAAAgIABALQABAEADADQADACAFAAQADAAAEgCQAEgDACgEQABgEAAgIIAAgfIALAAIAAA8IgKAAIAAgJQgHAKgKAAQgGAAgFgCg");
	this.shape_64.setTransform(281.7,-50.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgUAYQgIgJAAgPQAAgQAKgIQAIgHAKAAQAMAAAIAIQAJAJAAAOQAAALgEAGQgEAIgHADQgGAEgIAAQgMAAgIgIgAgMgRQgFAHAAAKQAAAMAFAFQAGAGAGAAQAHAAAFgGQAGgGAAgLQAAgKgGgHQgFgFgHgBQgGABgGAFg");
	this.shape_65.setTransform(275.1,-50.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgNAdQgEgCgDgDQgCgDgBgFIgBgKIAAgkIALAAIAAAgIABALQABAEADADQADACAFAAQADAAAEgCQAEgDACgEQABgEAAgIIAAgfIALAAIAAA8IgKAAIAAgJQgHAKgKAAQgGAAgFgCg");
	this.shape_66.setTransform(268.4,-50.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAOAfIAAgkQAAgGgBgDQgBgDgDgCQgEgCgEAAQgFAAgEAEQgFAEAAAMIAAAgIgLAAIAAg8IAKAAIAAAJQAHgKAKAAQAGAAAFACQAFACACADQACADABAFIABAKIAAAkg");
	this.shape_67.setTransform(261.8,-50.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgEArIAAg8IAJAAIAAA8gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_68.setTransform(257.1,-51.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAAAoIgFgFQgBgDAAgJIAAgiIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIAKAAIAAAIIgKAAIAAAiIAAAGIACACIAEABIAEgBIACAKIgIABQgGAAgBgCg");
	this.shape_69.setTransform(254.2,-51.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AAOAfIAAgkQAAgGgBgDQgBgDgDgCQgEgCgEAAQgFAAgEAEQgFAEAAAMIAAAgIgLAAIAAg8IAKAAIAAAJQAHgKAKAAQAGAAAFACQAFACACADQACADABAFIABAKIAAAkg");
	this.shape_70.setTransform(249.1,-50.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgUAYQgIgJAAgPQAAgQAKgIQAIgHAKAAQAMAAAIAIQAJAJAAAOQAAALgEAGQgEAIgHADQgGAEgIAAQgMAAgIgIgAgMgRQgFAHAAAKQAAAMAFAFQAGAGAGAAQAHAAAFgGQAGgGAAgLQAAgKgGgHQgFgFgHgBQgGABgGAFg");
	this.shape_71.setTransform(242.5,-50.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgSAYQgIgJAAgPQAAgJAEgHQADgIAHgDQAHgEAGAAQAKAAAGAFQAHAFACAKIgLABQgBgGgEgDQgEgDgFgBQgGABgFAFQgFAGAAALQAAAMAFAFQAFAGAGAAQAGAAAEgEQAEgDABgJIALACQgCALgHAGQgHAGgKAAQgLAAgIgIg");
	this.shape_72.setTransform(236.3,-50.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgTAYQgIgJAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgLAAgIgIgAgKgSQgFAFgBAIIAhAAQgBgIgDgEQgFgFgIgBQgFABgFAEg");
	this.shape_73.setTransform(226.5,-50.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AAOAfIAAgkQAAgGgBgDQgBgDgDgCQgEgCgEAAQgFAAgEAEQgFAEAAAMIAAAgIgLAAIAAg8IAKAAIAAAJQAHgKAKAAQAGAAAFACQAFACACADQACADABAFIABAKIAAAkg");
	this.shape_74.setTransform(219.8,-50.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgUAYQgIgJAAgPQAAgQAKgIQAIgHAKAAQAMAAAIAIQAJAJAAAOQAAALgEAGQgEAIgHADQgGAEgIAAQgMAAgIgIgAgMgRQgFAHAAAKQAAAMAFAFQAGAGAGAAQAHAAAFgGQAGgGAAgLQAAgKgGgHQgFgFgHgBQgGABgGAFg");
	this.shape_75.setTransform(213.2,-50.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgPAfIAAg8IAJAAIAAAJQAEgGACgCQACgCAEAAQAFAAAFADIgDAKQgEgCgEAAQgDAAgCACQgCACgBADQgCAGAAAGIAAAfg");
	this.shape_76.setTransform(205,-50.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgUAYQgIgJAAgPQAAgQAKgIQAIgHAKAAQAMAAAIAIQAJAJAAAOQAAALgEAGQgEAIgHADQgGAEgIAAQgMAAgIgIgAgMgRQgFAHAAAKQAAAMAFAFQAGAGAGAAQAHAAAFgGQAGgGAAgLQAAgKgGgHQgFgFgHgBQgGABgGAFg");
	this.shape_77.setTransform(199.2,-50.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgHArIAAg0IgKAAIAAgIIAKAAIAAgHIABgJQABgEAEgDQACgCAHAAIAKABIgCAJIgGAAQgFAAgCACQgCACAAAFIAAAGIAMAAIAAAIIgMAAIAAA0g");
	this.shape_78.setTransform(194.4,-52);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgMAnQgHgEgDgHQgDgIgBgJQAAgKAEgFQADgIAGgEQAGgEAHAAQAEAAAFADQAEACADAEIAAgfIAKAAIAABUIgJAAIAAgIQgGAJgLAAQgGAAgGgEgAgKgFQgFAFAAALQABAMAEAGQAFAFAFAAQAIAAAEgFQAFgGAAgLQAAgMgFgFQgFgGgHAAQgFAAgFAGg");
	this.shape_79.setTransform(185.6,-51.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgTAYQgIgJAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgLAAgIgIgAgKgSQgFAFgBAIIAhAAQgBgIgDgEQgFgFgIgBQgFABgFAEg");
	this.shape_80.setTransform(179.2,-50.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgRAnQgHgFAAgLIAKACQABAFADACQAEADAGAAQAGAAAEgDQAEgDABgFIABgNQgHAHgJABQgMAAgHgKQgHgJAAgLQAAgJADgIQAEgHAGgEQAGgEAHAAQAKAAAHAJIAAgHIAKAAIAAAzQAAAOgDAHQgDAFgGAEQgHAEgIAAQgKAAgHgFgAgKgdQgFAGAAALQAAAMAFAEQAFAGAFAAQAHAAAFgGQAFgEAAgMQAAgLgFgGQgFgFgHgBQgFABgFAFg");
	this.shape_81.setTransform(172.3,-49.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgWAbQgFgFAAgIQAAgEACgEQACgEADgCIAIgCIAJgBQALgCAGgCIAAgCQAAgHgDgDQgEgEgHAAQgGAAgEADQgDADgCAHIgKgCQABgGADgFQAEgEAFgCQAGgCAHAAQAHAAAFACQAFACADACQACADACAEIAAAKIAAANIABASQAAAEACAEIgLAAIgCgIQgGAFgFACQgEACgGAAQgKAAgGgFgAgBAEQgGAAgEACQgCAAgBADQgCACAAADQAAAEADADQADACAGABQAFgBAEgCQAFgCACgFQACgEAAgHIAAgDIgPAEg");
	this.shape_82.setTransform(165.9,-50.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgRAnQgHgFAAgLIAKACQABAFADACQAEADAGAAQAGAAAEgDQAEgDABgFIABgNQgHAHgJABQgMAAgHgKQgHgJAAgLQAAgJADgIQAEgHAGgEQAGgEAHAAQAKAAAHAJIAAgHIAKAAIAAAzQAAAOgDAHQgDAFgGAEQgHAEgIAAQgKAAgHgFgAgKgdQgFAGAAALQAAAMAFAEQAFAGAFAAQAHAAAFgGQAFgEAAgMQAAgLgFgGQgFgFgHgBQgFABgFAFg");
	this.shape_83.setTransform(159,-49.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AAOAfIAAgkQAAgGgBgDQgBgDgDgCQgEgCgEAAQgFAAgEAEQgFAEAAAMIAAAgIgLAAIAAg8IAKAAIAAAJQAHgKAKAAQAGAAAFACQAFACACADQACADABAFIABAKIAAAkg");
	this.shape_84.setTransform(152.6,-50.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgTAYQgIgJAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgLAAgIgIgAgKgSQgFAFgBAIIAhAAQgBgIgDgEQgFgFgIgBQgFABgFAEg");
	this.shape_85.setTransform(145.9,-50.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AAOAfIAAgkQAAgGgBgDQgBgDgDgCQgEgCgEAAQgFAAgEAEQgFAEAAAMIAAAgIgLAAIAAg8IAKAAIAAAJQAHgKAKAAQAGAAAFACQAFACACADQACADABAFIABAKIAAAkg");
	this.shape_86.setTransform(135.9,-50.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgTAYQgIgJAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgLAAgIgIgAgKgSQgFAFgBAIIAhAAQgBgIgDgEQgFgFgIgBQgFABgFAEg");
	this.shape_87.setTransform(129.3,-50.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgTAYQgIgJAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgLAAgIgIgAgKgSQgFAFgBAIIAhAAQgBgIgDgEQgFgFgIgBQgFABgFAEg");
	this.shape_88.setTransform(122.6,-50.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgQAiIAAAIIgJAAIAAhUIAKAAIAAAeQAHgIAIAAQAGAAAFACQAFADAEAEQACAEACAGQACAEABAHQgBAQgHAIQgJAJgKAAQgJAAgHgJgAgLgFQgFAFAAAKQAAALADAFQAFAIAIAAQAFAAAGgFQAEgHAAgLQAAgLgEgFQgFgGgGAAQgGAAgFAGg");
	this.shape_89.setTransform(116.2,-51.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgQAbQgGgFgCgKIAKgCQABAHAEADQAEADAFAAQAIAAADgDQAEgDgBgDQAAgEgCgDIgLgDIgOgEQgFgBgCgEQgDgEABgEQAAgFABgDIAGgGIAGgDIAJgBQAFAAAHACQAFACADADQACAFABAFIgLACQAAgFgDgDQgEgDgFAAQgGAAgDADQgDACgBADIACAFIAEACIAIADIAPAFQAEAAADADQACAEAAAFQAAAFgDAFQgDAFgGACQgFADgHAAQgLAAgGgFg");
	this.shape_90.setTransform(106.3,-50.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgVAbQgGgFAAgIQAAgEACgEQACgEADgCIAIgCIAJgBQALgCAGgCIAAgCQAAgHgDgDQgEgEgHAAQgGAAgEADQgDADgCAHIgKgCQABgGADgFQAEgEAFgCQAHgCAGAAQAHAAAFACQAFACADACQADADAAAEIABAKIAAANIAAASQABAEACAEIgLAAIgCgIQgGAFgFACQgEACgGAAQgKAAgFgFgAgBAEQgHAAgDACQgCAAgBADQgCACAAADQAAAEADADQAEACAFABQAEgBAFgCQAFgCADgFQABgEAAgHIAAgDIgPAEg");
	this.shape_91.setTransform(100,-50.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AAOArIAAgoQAAgGgDgDQgEgEgGAAQgDAAgEADQgEACgCAEQgBACAAAIIAAAiIgLAAIAAhVIALAAIAAAfQAHgIAJAAQAHAAAFADQAFADADAEQACAFAAAHIAAAog");
	this.shape_92.setTransform(93.3,-51.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AAAAoIgFgFQgBgDAAgJIAAgiIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIAKAAIAAAIIgKAAIAAAiIAAAGIACACIAEABIAEgBIACAKIgIABQgGAAgBgCg");
	this.shape_93.setTransform(85,-51.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgUAYQgIgJAAgPQAAgQAKgIQAIgHAKAAQAMAAAIAIQAJAJAAAOQAAALgEAGQgEAIgHADQgGAEgIAAQgMAAgIgIgAgMgRQgFAHAAAKQAAAMAFAFQAGAGAGAAQAHAAAFgGQAGgGAAgLQAAgKgGgHQgFgFgHgBQgGABgGAFg");
	this.shape_94.setTransform(80,-50.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_95.setTransform(75.3,-51.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgEArIAAg8IAJAAIAAA8gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_96.setTransform(72.7,-51.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgZArIAAhUIAJAAIAAAIQAEgFAEgCQAEgCAEAAQAIAAAGAEQAGAEADAHQAEAIAAAJQgBAJgDAGQgDAIgHAEQgHAEgGAAQgEAAgEgDQgEgCgDgDIAAAegAgLgcQgFAGAAAMQAAALAFAFQAEAGAHAAQAGAAAEgGQAFgGABgKQAAgMgFgGQgFgGgGAAQgGAAgFAGg");
	this.shape_97.setTransform(68.2,-49.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgUAYQgIgJAAgPQAAgQAKgIQAIgHAKAAQAMAAAIAIQAJAJAAAOQAAALgEAGQgEAIgHADQgGAEgIAAQgMAAgIgIgAgMgRQgFAHAAAKQAAAMAFAFQAGAGAGAAQAHAAAFgGQAGgGAAgLQAAgKgGgHQgFgFgHgBQgGABgGAFg");
	this.shape_98.setTransform(61.4,-50.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AAAAoIgFgFQgBgDAAgJIAAgiIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIAKAAIAAAIIgKAAIAAAiIAAAGIACACIAEABIAEgBIACAKIgIABQgGAAgBgCg");
	this.shape_99.setTransform(56.4,-51.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgNAdQgEgCgDgDQgCgDgBgFIgBgKIAAgkIALAAIAAAgIABALQABAEADADQADACAFAAQADAAAEgCQAEgDACgEQABgEAAgIIAAgfIALAAIAAA8IgKAAIAAgJQgHAKgKAAQgGAAgFgCg");
	this.shape_100.setTransform(51.3,-50.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgWAbQgFgFAAgIQAAgEACgEQACgEADgCIAIgCIAJgBQALgCAGgCIAAgCQAAgHgDgDQgEgEgHAAQgGAAgEADQgEADgBAHIgKgCQABgGADgFQADgEAGgCQAHgCAGAAQAHAAAFACQAFACADACQACADABAEIABAKIAAANIABASQAAAEACAEIgLAAIgCgIQgGAFgFACQgEACgGAAQgKAAgGgFgAgBAEQgGAAgEACQgCAAgBADQgCACAAADQAAAEADADQAEACAFABQAFgBAEgCQAFgCACgFQACgEAAgHIAAgDIgPAEg");
	this.shape_101.setTransform(44.7,-50.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgTAYQgIgJAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgLAAgIgIgAgKgSQgFAFgBAIIAhAAQgBgIgDgEQgFgFgIgBQgFABgFAEg");
	this.shape_102.setTransform(34.7,-50.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AAOArIAAgoQAAgGgDgDQgEgEgGAAQgDAAgEADQgEACgCAEQgBACAAAIIAAAiIgLAAIAAhVIALAAIAAAfQAHgIAJAAQAHAAAFADQAFADADAEQACAFAAAHIAAAog");
	this.shape_103.setTransform(28.1,-51.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AAAAoIgFgFQgBgDAAgJIAAgiIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIAKAAIAAAIIgKAAIAAAiIAAAGIACACIAEABIAEgBIACAKIgIABQgGAAgBgCg");
	this.shape_104.setTransform(23.1,-51.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgPAfIAAg8IAJAAIAAAJQAEgGACgCQACgCAEAAQAFAAAFADIgDAKQgEgCgEAAQgDAAgCACQgCACgBADQgCAGAAAGIAAAfg");
	this.shape_105.setTransform(16.5,-50.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgTAYQgIgJAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgLAAgIgIgAgKgSQgFAFgBAIIAhAAQgBgIgDgEQgFgFgIgBQgFABgFAEg");
	this.shape_106.setTransform(10.7,-50.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AAAAoIgFgFQgBgDAAgJIAAgiIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIAKAAIAAAIIgKAAIAAAiIAAAGIACACIAEABIAEgBIACAKIgIABQgGAAgBgCg");
	this.shape_107.setTransform(5.8,-51.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgHArIAAg0IgKAAIAAgIIAKAAIAAgHIABgJQABgEAEgDQACgCAHAAIAKABIgCAJIgGAAQgFAAgCACQgCACAAAFIAAAGIAMAAIAAAIIgMAAIAAA0g");
	this.shape_108.setTransform(2.6,-52);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgWAbQgFgFAAgIQAAgEACgEQACgEADgCIAIgCIAJgBQALgCAGgCIAAgCQAAgHgDgDQgEgEgHAAQgGAAgEADQgDADgCAHIgKgCQABgGADgFQAEgEAFgCQAHgCAGAAQAHAAAFACQAFACADACQADADAAAEIABAKIAAANIAAASQABAEACAEIgLAAIgCgIQgGAFgFACQgEACgGAAQgKAAgGgFgAgBAEQgHAAgDACQgCAAgBADQgCACAAADQAAAEADADQAEACAFABQAEgBAFgCQAFgCACgFQACgEAAgHIAAgDIgPAEg");
	this.shape_109.setTransform(-2.6,-50.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgPAfIAAg8IAJAAIAAAJQAEgGACgCQACgCAEAAQAFAAAFADIgDAKQgEgCgEAAQgDAAgCACQgCACgBADQgCAGAAAGIAAAfg");
	this.shape_110.setTransform(-10.8,-50.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgUAYQgIgJAAgPQAAgQAKgIQAIgHAKAAQAMAAAIAIQAJAJAAAOQAAALgEAGQgEAIgHADQgGAEgIAAQgMAAgIgIgAgMgRQgFAHAAAKQAAAMAFAFQAGAGAGAAQAHAAAFgGQAGgGAAgLQAAgKgGgHQgFgFgHgBQgGABgGAFg");
	this.shape_111.setTransform(-16.6,-50.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgFAJQAEgBABgDQAAgDAAgDIgEAAIAAgMIAKAAIAAAMQAAAEgCAEQgDAFgDACg");
	this.shape_112.setTransform(-25,-47.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgQAbQgHgFgCgKIALgCQABAHAEADQAEADAFAAQAIAAADgDQAEgDAAgDQAAgEgEgDIgLgDIgOgEQgEgBgCgEQgDgEAAgEQAAgFADgDIAEgGIAIgDIAIgBQAFAAAGACQAGACACADQADAFABAFIgLACQAAgFgEgDQgCgDgGAAQgGAAgDADQgEACAAADIACAFIAEACIAHADIAQAFQAFAAACADQACAEABAFQAAAFgDAFQgEAFgFACQgGADgIAAQgKAAgGgFg");
	this.shape_113.setTransform(-29.7,-50.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgTAYQgIgJAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgLAAgIgIgAgKgSQgFAFgBAIIAhAAQgBgIgDgEQgFgFgIgBQgFABgFAEg");
	this.shape_114.setTransform(-36,-50.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AAAAoIgFgFQgBgDAAgJIAAgiIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIAKAAIAAAIIgKAAIAAAiIAAAGIACACIAEABIAEgBIACAKIgIABQgGAAgBgCg");
	this.shape_115.setTransform(-40.9,-51.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgNAdQgEgCgDgDQgCgDgBgFIgBgKIAAgkIALAAIAAAgIABALQABAEADADQADACAFAAQADAAAEgCQAEgDACgEQABgEAAgIIAAgfIALAAIAAA8IgKAAIAAgJQgHAKgKAAQgGAAgFgCg");
	this.shape_116.setTransform(-46,-50.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AAOAfIAAgkQAAgGgBgDQgBgDgDgCQgEgCgEAAQgFAAgEAEQgFAEAAAMIAAAgIgLAAIAAg8IAKAAIAAAJQAHgKAKAAQAGAAAFACQAFACACADQACADABAFIABAKIAAAkg");
	this.shape_117.setTransform(-52.6,-50.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgEArIAAg8IAJAAIAAA8gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_118.setTransform(-57.3,-51.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AAfAfIAAglIgBgJQgBgDgDgCQgCgBgEAAQgGAAgFAEQgEAEAAAKIAAAiIgIAAIAAgmQgBgHgCgEQgDgDgFAAQgFAAgEACQgDACgDAFQgBAEAAAIIAAAfIgKAAIAAg8IAJAAIAAAJQADgFAFgDQAEgCAHAAQAGAAAFACQADADACAGQAGgLANAAQAJAAAEAFQAGAFgBALIAAAog");
	this.shape_119.setTransform(-63.6,-50.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgTAYQgIgJAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgLAAgIgIgAgKgSQgFAFgBAIIAhAAQgBgIgDgEQgFgFgIgBQgFABgFAEg");
	this.shape_120.setTransform(-75.3,-50.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgDAfIgYg8IALAAIAOAjIACAMIAEgMIANgjIALAAIgXA8g");
	this.shape_121.setTransform(-81.6,-50.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgEArIAAg8IAJAAIAAA8gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_122.setTransform(-85.9,-51.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgHArIAAg0IgKAAIAAgIIAKAAIAAgHIABgJQABgEAEgDQACgCAHAAIAKABIgCAJIgGAAQgFAAgCACQgCACAAAFIAAAGIAMAAIAAAIIgMAAIAAA0g");
	this.shape_123.setTransform(-88.7,-52);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgPAfIAAg8IAJAAIAAAJQAEgGACgCQACgCAEAAQAFAAAFADIgDAKQgEgCgEAAQgDAAgCACQgCACgBADQgCAGAAAGIAAAfg");
	this.shape_124.setTransform(-95.5,-50.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgTAYQgIgJAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgLAAgIgIgAgKgSQgFAFgBAIIAhAAQgBgIgDgEQgFgFgIgBQgFABgFAEg");
	this.shape_125.setTransform(-101.3,-50.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AAAAoIgFgFQgBgDAAgJIAAgiIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIAKAAIAAAIIgKAAIAAAiIAAAGIACACIAEABIAEgBIACAKIgIABQgGAAgBgCg");
	this.shape_126.setTransform(-106.2,-51.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgHArIAAg0IgKAAIAAgIIAKAAIAAgHIABgJQABgEAEgDQACgCAHAAIAKABIgCAJIgGAAQgFAAgCACQgCACAAAFIAAAGIAMAAIAAAIIgMAAIAAA0g");
	this.shape_127.setTransform(-109.4,-52);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AAbArIgKgaIgiAAIgJAaIgNAAIAhhVIAKAAIAjBVgAgFgQIgJAXIAbAAIgJgWIgEgSQgCAJgDAIg");
	this.shape_128.setTransform(-115.3,-51.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.3,-60.4,818.8,17.4);


(lib.point_1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAAoIgFgFQgBgCAAgKIAAgiIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIAKAAIAAAIIgKAAIAAAjIAAAFIACACIAEABIAEAAIACAJIgIABQgGAAgBgCg");
	this.shape.setTransform(-5,-36.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAOAqIAAgnQAAgGgDgEQgEgDgGAAQgDAAgEACQgEADgCAEQgBACAAAHIAAAiIgLAAIAAhTIALAAIAAAeQAHgIAJAAQAHAAAFACQAFAEADAEQACAFAAAHIAAAng");
	this.shape_1.setTransform(-10.1,-36.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgRAnQgHgGAAgJIAKABQABAFADACQAEADAGAAQAGAAAEgDQAEgDABgFIABgOQgHAJgJgBQgMAAgHgJQgHgJAAgLQAAgJADgHQAEgIAGgEQAGgEAHAAQAKAAAHAJIAAgIIAKAAIAAA0QAAAPgDAFQgDAHgGADQgHAEgIAAQgKAAgHgFgAgKgcQgFAFAAAMQAAALAFAEQAFAGAFAAQAHAAAFgGQAFgEAAgLQAAgMgFgFQgFgHgHAAQgFAAgFAHg");
	this.shape_2.setTransform(-16.9,-34.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgEAqIAAg8IAJAAIAAA8gAgEgdIAAgMIAJAAIAAAMg");
	this.shape_3.setTransform(-21.4,-36.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgEAqIAAhTIAJAAIAABTg");
	this.shape_4.setTransform(-24.1,-36.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgHArIAAg0IgKAAIAAgIIAKAAIAAgHIABgJQABgEAEgDQACgCAHAAIAKABIgCAJIgGAAQgFAAgCACQgCACAAAFIAAAGIAMAAIAAAIIgMAAIAAA0g");
	this.shape_5.setTransform(-26.8,-36.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgTAXQgIgIAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAALAFAFQAGAFAFAAQAGAAAEgDQAEgDADgGIALABQgDAJgHAGQgHAFgLAAQgLAAgIgJgAgKgRQgFAEgBAIIAhAAQgBgIgDgDQgFgHgIAAQgFAAgFAGg");
	this.shape_6.setTransform(-35.4,-35.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAOAqIAAgnQAAgGgDgEQgEgDgGAAQgDAAgEACQgEADgCAEQgBACAAAHIAAAiIgLAAIAAhTIALAAIAAAeQAHgIAJAAQAHAAAFACQAFAEADAEQACAFAAAHIAAAng");
	this.shape_7.setTransform(-42,-36.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAAAoIgFgFQgBgCAAgKIAAgiIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIAKAAIAAAIIgKAAIAAAjIAAAFIACACIAEABIAEAAIACAJIgIABQgGAAgBgCg");
	this.shape_8.setTransform(-47,-36.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgHArIAAg0IgKAAIAAgIIAKAAIAAgHIABgJQABgEAEgDQACgCAHAAIAKABIgCAJIgGAAQgFAAgCACQgCACAAAFIAAAGIAMAAIAAAIIgMAAIAAA0g");
	this.shape_9.setTransform(-53.5,-36.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgUAXQgIgIAAgPQAAgQAKgIQAIgHAKAAQAMAAAIAIQAJAIAAAPQAAAKgEAIQgEAGgHAEQgGAEgIAAQgMAAgIgJgAgMgQQgFAFAAALQAAALAFAHQAGAFAGAAQAHAAAFgFQAGgHAAgLQAAgLgGgFQgFgHgHAAQgGAAgGAHg");
	this.shape_10.setTransform(-58.7,-35.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgPAfIAAg8IAJAAIAAAJQAEgGACgCQACgCAEAAQAFAAAFADIgDAKQgEgCgEAAQgDAAgCACQgCACgBADQgCAGAAAGIAAAfg");
	this.shape_11.setTransform(-66.9,-35.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgTAXQgIgIAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAALAFAFQAGAFAFAAQAGAAAEgDQAEgDADgGIALABQgDAJgHAGQgHAFgLAAQgLAAgIgJgAgKgRQgFAEgBAIIAhAAQgBgIgDgDQgFgHgIAAQgFAAgFAGg");
	this.shape_12.setTransform(-72.7,-35.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgNAnQgFgEgEgHQgDgIAAgJQAAgKADgFQADgIAGgEQAGgEAHAAQAEAAAFADQAEACADAEIAAgfIALAAIAABUIgKAAIAAgIQgGAJgLAAQgGAAgHgEgAgKgFQgFAFABALQAAAMAEAGQAGAFAFAAQAGAAAFgFQAFgGAAgLQAAgMgFgFQgFgGgHAAQgFAAgFAGg");
	this.shape_13.setTransform(-79.6,-36.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAOAfIAAgkQAAgGgBgDQgBgDgDgCQgEgCgEAAQgFAAgEAEQgFAEAAAMIAAAgIgLAAIAAg8IAKAAIAAAJQAHgKAKAAQAGAAAFACQAFACACADQACADABAFIABAKIAAAkg");
	this.shape_14.setTransform(-86,-35.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgEAqIAAg8IAJAAIAAA8gAgEgdIAAgMIAJAAIAAAMg");
	this.shape_15.setTransform(-90.7,-36.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgWAbQgFgFAAgIQAAgFACgDQACgEADgCIAIgCIAJgCQALgBAGgCIAAgDQAAgGgDgDQgEgDgHgBQgGABgEACQgDADgCAGIgKgBQABgHADgEQAEgDAFgDQAHgCAGAAQAHAAAFABQAFADADADQADACAAAFIABAKIAAALIAAATQABAEACADIgLAAIgCgHQgGAFgFACQgEACgGAAQgKAAgGgFgAgBADQgHABgDABQgCABgBADQgCACAAADQAAAEADADQAEACAFAAQAEAAAFgCQAFgDACgFQACgDAAgHIAAgDIgPADg");
	this.shape_16.setTransform(-95.3,-35.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAfAfIAAglIgBgJQgBgDgDgCQgCgBgEAAQgGAAgFAEQgEAEAAAKIAAAiIgIAAIAAgmQgBgHgCgEQgDgDgFAAQgFAAgEACQgDACgDAFQgBAEAAAIIAAAfIgKAAIAAg8IAJAAIAAAJQADgFAFgDQAEgCAHAAQAGAAAFACQADADACAGQAGgLANAAQAJAAAEAFQAGAFgBALIAAAog");
	this.shape_17.setTransform(-103.6,-35.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgTAXQgIgIAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAALAFAFQAGAFAFAAQAGAAAEgDQAEgDADgGIALABQgDAJgHAGQgHAFgLAAQgLAAgIgJgAgKgRQgFAEgBAIIAhAAQgBgIgDgDQgFgHgIAAQgFAAgFAGg");
	this.shape_18.setTransform(-112,-35.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgPAfIAAg8IAJAAIAAAJQAEgGACgCQACgCAEAAQAFAAAFADIgDAKQgEgCgEAAQgDAAgCACQgCACgBADQgCAGAAAGIAAAfg");
	this.shape_19.setTransform(-116.8,-35.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgTAYQgIgJAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgLAAgIgIgAgKgSQgFAFgBAIIAhAAQgBgIgDgEQgFgFgIgBQgFABgFAEg");
	this.shape_20.setTransform(764.7,-50.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAOArIAAgoQAAgGgDgDQgEgEgGAAQgDAAgEADQgEACgCAEQgBACAAAIIAAAiIgLAAIAAhVIALAAIAAAfQAHgIAJAAQAHAAAFADQAFADADAEQACAFAAAHIAAAog");
	this.shape_21.setTransform(758,-51.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAAAoIgFgFQgBgDAAgJIAAgiIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIAKAAIAAAIIgKAAIAAAiIAAAGIACACIAEABIAEgBIACAKIgIABQgGAAgBgCg");
	this.shape_22.setTransform(753.1,-51.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgPAfIAAg8IAJAAIAAAJQAEgGACgCQACgCAEAAQAFAAAFADIgDAKQgEgCgEAAQgDAAgCACQgCACgBADQgCAGAAAGIAAAfg");
	this.shape_23.setTransform(746.5,-50.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgUAYQgIgJAAgPQAAgQAKgIQAIgHAKAAQAMAAAIAIQAJAJAAAOQAAALgEAGQgEAIgHADQgGAEgIAAQgMAAgIgIgAgMgRQgFAHAAAKQAAAMAFAFQAGAGAGAAQAHAAAFgGQAGgGAAgLQAAgKgGgHQgFgFgHgBQgGABgGAFg");
	this.shape_24.setTransform(740.7,-50.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgHArIAAg0IgKAAIAAgIIAKAAIAAgHIABgJQABgEAEgDQACgCAHAAIAKABIgCAJIgGAAQgFAAgCACQgCACAAAFIAAAGIAMAAIAAAIIgMAAIAAA0g");
	this.shape_25.setTransform(735.9,-52);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgTAYQgIgJAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgLAAgIgIgAgKgSQgFAFgBAIIAhAAQgBgIgDgEQgFgFgIgBQgFABgFAEg");
	this.shape_26.setTransform(727.3,-50.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgDAfIgYg8IALAAIAOAjIACAMIAEgMIANgjIALAAIgXA8g");
	this.shape_27.setTransform(721,-50.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgEArIAAg8IAJAAIAAA8gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_28.setTransform(716.7,-51.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAAAoIgFgFQgBgDAAgJIAAgiIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIAKAAIAAAIIgKAAIAAAiIAAAGIACACIAEABIAEgBIACAKIgIABQgGAAgBgCg");
	this.shape_29.setTransform(713.7,-51.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgWAbQgFgFAAgIQAAgEACgEQACgEAEgCIAHgCIAJgBQALgCAGgCIAAgCQAAgHgDgDQgEgEgHAAQgGAAgEADQgDADgCAHIgKgCQABgGADgFQAEgEAFgCQAGgCAHAAQAIAAAEACQAGACACACQADADABAEIAAAKIAAANIABASQAAAEACAEIgLAAIgCgIQgGAFgFACQgEACgGAAQgKAAgGgFgAgBAEQgGAAgDACQgDAAgCADQgBACAAADQAAAEADADQAEACAFABQAFgBAFgCQAEgCACgFQACgEAAgHIAAgDIgPAEg");
	this.shape_30.setTransform(708.7,-50.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgPAfIAAg8IAJAAIAAAJQAEgGACgCQACgCAEAAQAFAAAFADIgDAKQgEgCgEAAQgDAAgCACQgCACgBADQgCAGAAAGIAAAfg");
	this.shape_31.setTransform(703.8,-50.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgTAYQgIgJAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgLAAgIgIgAgKgSQgFAFgBAIIAhAAQgBgIgDgEQgFgFgIgBQgFABgFAEg");
	this.shape_32.setTransform(698,-50.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgZArIAAhUIAJAAIAAAIQADgFAFgCQAEgCAEAAQAIAAAGAEQAGAEAEAHQADAIAAAJQgBAJgDAGQgEAIgGAEQgHAEgGAAQgEAAgEgDQgEgCgDgDIAAAegAgLgcQgFAGAAAMQAAALAFAFQAEAGAHAAQAFAAAFgGQAFgGABgKQAAgMgFgGQgFgGgGAAQgGAAgFAGg");
	this.shape_33.setTransform(691.6,-49.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgUAYQgIgJAAgPQAAgQAKgIQAIgHAKAAQAMAAAIAIQAJAJAAAOQAAALgEAGQgEAIgHADQgGAEgIAAQgMAAgIgIgAgMgRQgFAHAAAKQAAAMAFAFQAGAGAGAAQAHAAAFgGQAGgGAAgLQAAgKgGgHQgFgFgHgBQgGABgGAFg");
	this.shape_34.setTransform(684.7,-50.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAOAfIAAgkQAAgGgBgDQgBgDgDgCQgEgCgEAAQgFAAgEAEQgFAEAAAMIAAAgIgLAAIAAg8IAKAAIAAAJQAHgKAKAAQAGAAAFACQAFACACADQACADABAFIABAKIAAAkg");
	this.shape_35.setTransform(678.1,-50.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgEArIAAg8IAJAAIAAA8gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_36.setTransform(673.4,-51.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgQAbQgGgFgCgKIAKgCQABAHAEADQAEADAFAAQAIAAADgDQAEgDgBgDQAAgEgDgDIgKgDIgOgEQgFgBgCgEQgCgEgBgEQAAgFACgDIAGgGIAHgDIAIgBQAGAAAFACQAGACADADQACAFABAFIgLACQAAgFgDgDQgEgDgFAAQgGAAgDADQgDACgBADIACAFIAEACIAIADIAPAFQAEAAADADQADAEAAAFQgBAFgDAFQgDAFgGACQgGADgGAAQgLAAgGgFg");
	this.shape_37.setTransform(665.7,-50.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgEArIAAg8IAJAAIAAA8gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_38.setTransform(661.4,-51.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAfAfIAAglIgBgJIgDgFQgDgBgEAAQgGAAgEAEQgFAEAAAKIAAAiIgJAAIAAgmQABgHgDgEQgDgDgFAAQgFAAgEACQgEACgCAFQgBAEAAAIIAAAfIgLAAIAAg8IAKAAIAAAJQADgFAFgDQAEgCAGAAQAIAAAEACQACADACAGQAIgLALAAQAKAAAFAFQAEAFAAALIAAAog");
	this.shape_39.setTransform(651.8,-50.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgTAYQgIgJAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgLAAgIgIgAgKgSQgFAFgBAIIAhAAQgBgIgDgEQgFgFgIgBQgFABgFAEg");
	this.shape_40.setTransform(643.4,-50.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAAAoIgFgFQgBgDAAgJIAAgiIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIAKAAIAAAIIgKAAIAAAiIAAAGIACACIAEABIAEgBIACAKIgIABQgGAAgBgCg");
	this.shape_41.setTransform(638.5,-51.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgQAbQgHgFgCgKIALgCQABAHAEADQAEADAFAAQAHAAAEgDQADgDABgDQAAgEgEgDIgLgDIgOgEQgEgBgCgEQgDgEAAgEQAAgFADgDIAEgGIAIgDIAIgBQAFAAAGACQAGACACADQADAFABAFIgKACQgBgFgEgDQgDgDgFAAQgGAAgDADQgDACAAADIABAFIAEACIAHADIAQAFQAFAAACADQACAEAAAFQAAAFgCAFQgEAFgFACQgHADgHAAQgKAAgGgFg");
	this.shape_42.setTransform(633.7,-50.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgVAqIgBgKIAGABIAFgBIAEgEIADgIIAAgCIgXg8IAMAAIAMAkIADAMIAEgMIAOgkIAKAAIgYA9IgEAOQgDAFgDADQgDACgGAAIgGgBg");
	this.shape_43.setTransform(627.8,-49.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgQAoQgIgDgEgHQgFgGAAgJIALgBQABAGACAFQADADAGADQAGADAFAAQAHAAAFgCQAFgCACgDQADgEAAgEQAAgEgDgDQgCgDgGgCIgNgEQgMgDgEAAQgHgEgDgEQgDgGAAgFQAAgGAEgHQAEgFAHgDQAHgDAIAAQAIAAAIADQAHAEAEAFQAEAGAAAIIgLABQgBgIgFgFQgFgEgJAAQgJAAgFAEQgFADAAAGQAAAEAEADQADADAMAEQAOADAFADQAHABAEAFQAEAFAAAHQAAAHgEAGQgEAGgIADQgHAEgJAAQgKAAgIgEg");
	this.shape_44.setTransform(620.7,-51.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAfAfIAAglIgBgJQgBgDgDgCQgCgBgEAAQgHAAgEAEQgEAEAAAKIAAAiIgJAAIAAgmQAAgHgCgEQgDgDgGAAQgEAAgEACQgDACgCAFQgCAEAAAIIAAAfIgLAAIAAg8IAKAAIAAAJQADgFAEgDQAGgCAFAAQAIAAAEACQADADABAGQAIgLAMAAQAJAAAEAFQAFAFABALIAAAog");
	this.shape_45.setTransform(608.4,-50.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgEArIAAg8IAJAAIAAA8gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_46.setTransform(602.1,-51.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgPAfIAAg8IAJAAIAAAJQAEgGACgCQACgCAEAAQAFAAAFADIgDAKQgEgCgEAAQgDAAgCACQgCACgBADQgCAGAAAGIAAAfg");
	this.shape_47.setTransform(599.2,-50.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgFArIAAhLIgcAAIAAgKIBDAAIAAAKIgdAAIAABLg");
	this.shape_48.setTransform(593.6,-51.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgNAnQgGgEgDgHQgDgIgBgJQAAgKADgFQAEgIAGgEQAGgEAHAAQAEAAAFADQAEACADAEIAAgfIAKAAIAABUIgJAAIAAgIQgGAJgLAAQgGAAgHgEgAgKgFQgFAFAAALQAAAMAGAGQAFAFAEAAQAIAAAEgFQAFgGAAgLQAAgMgFgFQgFgGgHAAQgFAAgFAGg");
	this.shape_49.setTransform(583.2,-51.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgTAYQgIgJAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgLAAgIgIgAgKgSQgFAFgBAIIAhAAQgBgIgDgEQgFgFgIgBQgFABgFAEg");
	this.shape_50.setTransform(576.8,-50.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgTAYQgIgJAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgLAAgIgIgAgKgSQgFAFgBAIIAhAAQgBgIgDgEQgFgFgIgBQgFABgFAEg");
	this.shape_51.setTransform(570.1,-50.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgZArIAAhUIAJAAIAAAIQAEgFAEgCQAEgCAEAAQAIAAAGAEQAGAEADAHQAEAIAAAJQgBAJgDAGQgEAIgGAEQgHAEgGAAQgEAAgEgDQgEgCgDgDIAAAegAgLgcQgFAGAAAMQAAALAFAFQAEAGAHAAQAGAAAEgGQAFgGABgKQAAgMgFgGQgFgGgGAAQgGAAgFAGg");
	this.shape_52.setTransform(563.7,-49.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgQAoQgIgDgEgHQgFgGAAgJIALgBQABAGACAFQADADAGADQAGADAFAAQAHAAAFgCQAFgCACgDQADgEAAgEQAAgEgDgDQgCgDgGgCIgNgEQgMgDgEAAQgHgEgDgEQgDgGAAgFQAAgGAEgHQAEgFAHgDQAHgDAIAAQAIAAAIADQAHAEAEAFQAEAGAAAIIgLABQgBgIgFgFQgFgEgJAAQgJAAgFAEQgFADAAAGQAAAEAEADQADADAMAEQAOADAFADQAHABAEAFQAEAFAAAHQAAAHgEAGQgEAGgIADQgHAEgJAAQgKAAgIgEg");
	this.shape_53.setTransform(556.1,-51.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgTAYQgIgJAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgLAAgIgIgAgKgSQgFAFgBAIIAhAAQgBgIgDgEQgFgFgIgBQgFABgFAEg");
	this.shape_54.setTransform(545.5,-50.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAOArIAAgoQAAgGgDgDQgEgEgGAAQgDAAgEADQgEACgCAEQgBACAAAIIAAAiIgLAAIAAhVIALAAIAAAfQAHgIAJAAQAHAAAFADQAFADADAEQACAFAAAHIAAAog");
	this.shape_55.setTransform(538.8,-51.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAAAoIgFgFQgBgDAAgJIAAgiIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIAKAAIAAAIIgKAAIAAAiIAAAGIACACIAEABIAEgBIACAKIgIABQgGAAgBgCg");
	this.shape_56.setTransform(533.9,-51.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgMAnQgHgEgDgHQgDgIgBgJQAAgKADgFQAEgIAGgEQAGgEAHAAQAEAAAFADQAEACADAEIAAgfIAKAAIAABUIgJAAIAAgIQgGAJgLAAQgGAAgGgEgAgKgFQgFAFAAALQAAAMAGAGQAFAFAEAAQAIAAAEgFQAFgGAAgLQAAgMgFgFQgFgGgHAAQgFAAgFAGg");
	this.shape_57.setTransform(525.3,-51.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAOAfIAAgkQAAgGgBgDQgBgDgDgCQgEgCgEAAQgFAAgEAEQgFAEAAAMIAAAgIgLAAIAAg8IAKAAIAAAJQAHgKAKAAQAGAAAFACQAFACACADQACADABAFIABAKIAAAkg");
	this.shape_58.setTransform(518.8,-50.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgVAbQgGgFAAgIQAAgEACgEQACgEADgCIAIgCIAJgBQALgCAGgCIAAgCQAAgHgDgDQgEgEgHAAQgGAAgEADQgDADgCAHIgKgCQABgGADgFQAEgEAFgCQAHgCAGAAQAHAAAFACQAFACADACQADADAAAEIABAKIAAANIAAASQABAEACAEIgLAAIgCgIQgGAFgFACQgEACgGAAQgKAAgFgFgAgBAEQgHAAgDACQgCAAgBADQgCACAAADQAAAEAEADQADACAFABQAEgBAFgCQAFgCADgFQABgEAAgHIAAgDIgPAEg");
	this.shape_59.setTransform(512.2,-50.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgQAbQgGgFgCgKIAKgCQABAHAEADQAEADAFAAQAHAAAEgDQADgDAAgDQAAgEgDgDIgKgDIgPgEQgEgBgCgEQgCgEgBgEQAAgFACgDIAGgGIAHgDIAIgBQAGAAAFACQAGACADADQACAFABAFIgLACQAAgFgDgDQgDgDgGAAQgGAAgDADQgDACgBADIACAFIAEACIAIADIAPAFQAEAAADADQADAEAAAFQAAAFgEAFQgDAFgGACQgGADgGAAQgLAAgGgFg");
	this.shape_60.setTransform(502.5,-50.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgTAYQgIgJAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgLAAgIgIgAgKgSQgFAFgBAIIAhAAQgBgIgDgEQgFgFgIgBQgFABgFAEg");
	this.shape_61.setTransform(496.2,-50.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAAAoIgFgFQgBgDAAgJIAAgiIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIAKAAIAAAIIgKAAIAAAiIAAAGIACACIAEABIAEgBIACAKIgIABQgGAAgBgCg");
	this.shape_62.setTransform(491.2,-51.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgWAbQgFgFAAgIQAAgEACgEQACgEADgCIAIgCIAJgBQALgCAGgCIAAgCQAAgHgDgDQgEgEgHAAQgGAAgEADQgDADgCAHIgKgCQABgGADgFQADgEAGgCQAHgCAGAAQAHAAAFACQAFACADACQACADABAEIABAKIAAANIABASQAAAEACAEIgLAAIgCgIQgGAFgFACQgEACgGAAQgKAAgGgFgAgBAEQgGAAgEACQgCAAgBADQgCACAAADQAAAEADADQAEACAFABQAFgBAEgCQAFgCACgFQACgEAAgHIAAgDIgPAEg");
	this.shape_63.setTransform(486.2,-50.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAOAfIAAgkQAAgGgBgDQgBgDgDgCQgEgCgEAAQgFAAgEAEQgFAEAAAMIAAAgIgLAAIAAg8IAKAAIAAAJQAHgKAKAAQAGAAAFACQAFACACADQACADABAFIABAKIAAAkg");
	this.shape_64.setTransform(479.5,-50.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgEArIAAg8IAJAAIAAA8gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_65.setTransform(474.9,-51.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAfAfIAAglIgBgJQgBgDgDgCQgCgBgEAAQgGAAgFAEQgEAEAAAKIAAAiIgIAAIAAgmQAAgHgDgEQgDgDgGAAQgEAAgEACQgDACgCAFQgCAEAAAIIAAAfIgLAAIAAg8IAKAAIAAAJQADgFAEgDQAGgCAGAAQAGAAAFACQACADADAGQAGgLANAAQAJAAAEAFQAGAFAAALIAAAog");
	this.shape_66.setTransform(468.6,-50.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgNAdQgEgCgDgDQgCgDgBgFIgBgKIAAgkIALAAIAAAgIABALQABAEADADQADACAFAAQADAAAEgCQAEgDACgEQABgEAAgIIAAgfIALAAIAAA8IgKAAIAAgJQgHAKgKAAQgGAAgFgCg");
	this.shape_67.setTransform(460.2,-50.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_68.setTransform(455.5,-51.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_69.setTransform(452.9,-51.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgEArIAAg8IAJAAIAAA8gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_70.setTransform(450.3,-51.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAAAoIgFgFQgBgDAAgJIAAgiIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIAKAAIAAAIIgKAAIAAAiIAAAGIACACIAEABIAEgBIACAKIgIABQgGAAgBgCg");
	this.shape_71.setTransform(444,-51.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAOArIAAgoQAAgGgDgDQgEgEgGAAQgDAAgEADQgEACgCAEQgBACAAAIIAAAiIgLAAIAAhVIALAAIAAAfQAHgIAJAAQAHAAAFADQAFADADAEQACAFAAAHIAAAog");
	this.shape_72.setTransform(438.9,-51.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgRAnQgHgFAAgLIAKACQABAFADACQAEADAGAAQAGAAAEgDQAEgDABgFIABgNQgHAHgJABQgMAAgHgKQgHgJAAgLQAAgJADgIQAEgHAGgEQAGgEAHAAQAKAAAHAJIAAgHIAKAAIAAAzQAAAOgDAHQgDAFgGAEQgHAEgIAAQgKAAgHgFgAgKgdQgFAGAAALQAAAMAFAEQAFAGAFAAQAHAAAFgGQAFgEAAgMQAAgLgFgGQgFgFgHgBQgFABgFAFg");
	this.shape_73.setTransform(432.1,-49.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgEArIAAg8IAJAAIAAA8gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_74.setTransform(427.6,-51.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_75.setTransform(424.9,-51.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgZArIAAhVIALAAIAABKIAoAAIAAALg");
	this.shape_76.setTransform(417.7,-51.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_77.setTransform(412.4,-51.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAbArIgLgaIghAAIgKAaIgMAAIAihVIAKAAIAjBVgAgEgQIgKAXIAbAAIgIgWIgFgSQgBAJgDAIg");
	this.shape_78.setTransform(406.8,-51.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgbArIAAhVIA3AAIAAAKIgsAAIAAAbIAmAAIAAAIIgmAAIAAAog");
	this.shape_79.setTransform(400,-51.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAdArIAAhGIgZBGIgIAAIgZhIIAABIIgLAAIAAhVIARAAIAVA8IACAMIAEgNIAVg7IAPAAIAABVg");
	this.shape_80.setTransform(387.7,-51.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_81.setTransform(381,-51.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AAXArIgLgSIgIgMIgEgGIgFgCIgHgBIgNAAIAAAnIgLAAIAAhVIAkAAQALABAGACQAGACAEAGQADAGAAAHQAAAJgGAGQgFAFgNABIAHAFIAJALIAPAYgAgZgEIAYAAQAGABAFgCQAEgCACgDQADgEAAgEQAAgGgFgEQgEgEgKAAIgZAAg");
	this.shape_82.setTransform(375.4,-51.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgEArIAAhLIgcAAIAAgKIBBAAIAAAKIgcAAIAABLg");
	this.shape_83.setTransform(367.1,-51.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgiArIAAhVIAdAAQAIABAGABQAHACAFAEQAHAGADAIQAEAJAAALQAAAJgDAIQgCAHgDAFQgEAFgEADIgKAEQgHACgFAAgAgXAgIASAAQAHAAAFgBIAHgEQAEgFADgGQACgIAAgIQAAgNgEgHQgFgHgGgDQgEgCgJAAIgSAAg");
	this.shape_84.setTransform(356.1,-51.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgfArIAAhVIA8AAIAAAKIgwAAIAAAbIAuAAIAAAIIguAAIAAAdIAyAAIAAALg");
	this.shape_85.setTransform(347.8,-51.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgfArIAAhVIA8AAIAAAKIgwAAIAAAbIAtAAIAAAIIgtAAIAAAdIAzAAIAAALg");
	this.shape_86.setTransform(339.8,-51.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgfArIAAhVIAfAAIAMABQAGABAFAEQAEADACAEQADAGAAAHQAAALgHAFQgHAIgSAAIgUAAIAAAjgAgUAAIAUAAQALgBAFgEQAEgEAAgHQAAgFgCgEQgDgFgFgBQgCgBgIAAIgUAAg");
	this.shape_87.setTransform(331.8,-51.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgQAoQgIgDgEgHQgFgGAAgJIALgBQABAGACAFQADADAGADQAGADAFAAQAHAAAFgCQAFgCACgDQADgEAAgEQAAgEgDgDQgCgDgGgCIgNgEQgMgDgEAAQgHgEgDgEQgDgGAAgFQAAgGAEgHQAEgFAHgDQAHgDAIAAQAIAAAIADQAHAEAEAFQAEAGAAAIIgLABQgBgIgFgFQgFgEgJAAQgJAAgFAEQgFADAAAGQAAAEAEADQADADAMAEQAOADAFADQAHABAEAFQAEAFAAAHQAAAHgEAGQgEAGgIADQgHAEgJAAQgKAAgIgEg");
	this.shape_88.setTransform(323.6,-51.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgTAYQgIgJAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgLAAgIgIgAgKgSQgFAFgBAIIAhAAQgBgIgDgEQgFgFgIgBQgFABgFAEg");
	this.shape_89.setTransform(312.9,-50.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AAOArIAAgoQAAgGgDgDQgEgEgGAAQgDAAgEADQgEACgCAEQgBACAAAIIAAAiIgLAAIAAhVIALAAIAAAfQAHgIAJAAQAHAAAFADQAFADADAEQACAFAAAHIAAAog");
	this.shape_90.setTransform(306.3,-51.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgEArIAAhLIgcAAIAAgKIBBAAIAAAKIgcAAIAABLg");
	this.shape_91.setTransform(299.3,-51.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgFAJQAEgBABgDQAAgDAAgDIgEAAIAAgMIAKAAIAAAMQAAAEgCAEQgDAFgDACg");
	this.shape_92.setTransform(290.8,-47.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgMAnQgHgEgDgHQgEgIAAgJQAAgKAEgFQADgIAGgEQAGgEAHAAQAFAAAEADQAEACADAEIAAgfIAKAAIAABUIgJAAIAAgIQgGAJgLAAQgGAAgGgEgAgKgFQgFAFABALQAAAMAEAGQAFAFAFAAQAIAAAEgFQAFgGAAgLQAAgMgFgFQgFgGgHAAQgFAAgFAGg");
	this.shape_93.setTransform(285.6,-51.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgTAYQgIgJAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgLAAgIgIgAgKgSQgFAFgBAIIAhAAQgBgIgDgEQgFgFgIgBQgFABgFAEg");
	this.shape_94.setTransform(279.2,-50.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AAOArIAAgoQAAgGgDgDQgEgEgGAAQgDAAgEADQgEACgCAEQgBACAAAIIAAAiIgLAAIAAhVIALAAIAAAfQAHgIAJAAQAHAAAFADQAFADADAEQACAFAAAHIAAAog");
	this.shape_95.setTransform(272.5,-51.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgSAYQgIgJAAgPQAAgJAEgHQADgIAHgDQAHgEAGAAQAKAAAGAFQAHAFACAKIgLABQgBgGgEgDQgEgDgFgBQgGABgFAFQgFAGAAALQAAAMAFAFQAFAGAGAAQAGAAAEgEQAEgDABgJIALACQgCALgHAGQgHAGgKAAQgLAAgIgIg");
	this.shape_96.setTransform(266.4,-50.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgVAbQgGgFAAgIQAAgEACgEQACgEAEgCIAHgCIAKgBQAKgCAGgCIAAgCQAAgHgDgDQgEgEgHAAQgGAAgEADQgEADgBAHIgLgCQACgGAEgFQACgEAHgCQAGgCAFAAQAIAAAGACQAEACADACQACADACAEIAAAKIAAANIAAASQABAEACAEIgLAAIgCgIQgGAFgFACQgEACgGAAQgKAAgFgFgAgBAEQgGAAgDACQgDAAgCADQgBACAAADQAAAEAEADQACACAHABQAEgBAFgCQAEgCADgFQABgEAAgHIAAgDIgPAEg");
	this.shape_97.setTransform(259.9,-50.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgTAYQgIgJAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgLAAgIgIgAgKgSQgFAFgBAIIAhAAQgBgIgDgEQgFgFgIgBQgFABgFAEg");
	this.shape_98.setTransform(253.2,-50.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgPAfIAAg8IAJAAIAAAJQAEgGACgCQACgCAEAAQAFAAAFADIgDAKQgEgCgEAAQgDAAgCACQgCACgBADQgCAGAAAGIAAAfg");
	this.shape_99.setTransform(248.4,-50.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgQAbQgHgFgCgKIALgCQABAHAEADQAEADAFAAQAHAAAEgDQADgDABgDQAAgEgEgDIgLgDIgOgEQgEgBgCgEQgDgEAAgEQABgFACgDIAEgGIAHgDIAJgBQAGAAAFACQAGACACADQADAFABAFIgKACQgBgFgEgDQgDgDgFAAQgGAAgDADQgDACAAADIABAFIAEACIAHADIAQAFQAFAAACADQACAEAAAFQAAAFgCAFQgEAFgFACQgHADgHAAQgKAAgGgFg");
	this.shape_100.setTransform(239.5,-50.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgEArIAAg8IAJAAIAAA8gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_101.setTransform(235.2,-51.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AAAAoIgFgFQgBgDAAgJIAAgiIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIAKAAIAAAIIgKAAIAAAiIAAAGIACACIAEABIAEgBIACAKIgIABQgGAAgBgCg");
	this.shape_102.setTransform(228.9,-51.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgEArIAAg8IAJAAIAAA8gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_103.setTransform(225.9,-51.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AAfAfIAAglIgBgJQgBgDgDgCQgCgBgEAAQgGAAgEAEQgFAEAAAKIAAAiIgIAAIAAgmQgBgHgCgEQgDgDgFAAQgFAAgEACQgEACgCAFQgBAEAAAIIAAAfIgKAAIAAg8IAJAAIAAAJQADgFAFgDQAEgCAHAAQAGAAAFACQADADACAGQAGgLAMAAQAKAAAFAFQAEAFAAALIAAAog");
	this.shape_104.setTransform(219.6,-50.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgEArIAAg8IAJAAIAAA8gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_105.setTransform(213.2,-51.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgZArIAAhVIALAAIAABKIAoAAIAAALg");
	this.shape_106.setTransform(208.8,-51.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgNAnQgFgEgEgHQgDgIAAgJQAAgKACgFQAEgIAGgEQAGgEAHAAQAFAAAEADQAFACACAEIAAgfIALAAIAABUIgKAAIAAgIQgGAJgLAAQgGAAgHgEgAgKgFQgEAFgBALQAAAMAGAGQAEAFAFAAQAHAAAFgFQAFgGAAgLQAAgMgFgFQgFgGgHAAQgFAAgFAGg");
	this.shape_107.setTransform(198.4,-51.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AAOAfIAAgkQAAgGgBgDQgBgDgDgCQgEgCgEAAQgFAAgEAEQgFAEAAAMIAAAgIgLAAIAAg8IAKAAIAAAJQAHgKAKAAQAGAAAFACQAFACACADQACADABAFIABAKIAAAkg");
	this.shape_108.setTransform(191.9,-50.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgVAbQgGgFAAgIQAAgEACgEQACgEADgCIAIgCIAKgBQAKgCAGgCIAAgCQAAgHgDgDQgEgEgHAAQgGAAgEADQgEADgBAHIgLgCQACgGAEgFQACgEAHgCQAFgCAGAAQAJAAAFACQAEACADACQACADABAEIABAKIAAANIAAASQABAEACAEIgLAAIgCgIQgGAFgFACQgEACgGAAQgKAAgFgFgAgBAEQgHAAgCACQgDAAgBADQgCACAAADQAAAEAEADQACACAHABQAEgBAEgCQAFgCADgFQABgEAAgHIAAgDIgPAEg");
	this.shape_109.setTransform(185.3,-50.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AAfAfIAAglIgBgJQgBgDgDgCQgCgBgEAAQgGAAgFAEQgEAEAAAKIAAAiIgIAAIAAgmQAAgHgDgEQgDgDgGAAQgEAAgEACQgDACgCAFQgCAEAAAIIAAAfIgLAAIAAg8IAKAAIAAAJQADgFAEgDQAGgCAGAAQAGAAAFACQACADADAGQAGgLANAAQAJAAAEAFQAGAFAAALIAAAog");
	this.shape_110.setTransform(177,-50.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AAfAfIAAglIgBgJQgBgDgDgCQgCgBgEAAQgHAAgEAEQgEAEAAAKIAAAiIgJAAIAAgmQAAgHgCgEQgDgDgGAAQgEAAgEACQgDACgCAFQgCAEAAAIIAAAfIgLAAIAAg8IAKAAIAAAJQADgFAEgDQAGgCAFAAQAIAAAEACQADADABAGQAIgLAMAAQAJAAAEAFQAFAFABALIAAAog");
	this.shape_111.setTransform(167,-50.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgUAYQgIgJAAgPQAAgQAKgIQAIgHAKAAQAMAAAIAIQAJAJAAAOQAAALgEAGQgEAIgHADQgGAEgIAAQgMAAgIgIgAgMgRQgFAHAAAKQAAAMAFAFQAGAGAGAAQAHAAAFgGQAGgGAAgLQAAgKgGgHQgFgFgHgBQgGABgGAFg");
	this.shape_112.setTransform(158.6,-50.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgTAmQgJgFgEgLQgEgLgBgLQAAgMAGgLQAEgKAKgFQAJgFAKAAQANAAAIAHQAKAGADAMIgLADQgDgJgGgFQgGgEgIAAQgIAAgGAEQgIAFgCAJQgDAHAAAIQAAAKAEAIQACAIAIAEQAGAEAGAAQAJAAAHgGQAGgFADgLIAMAEQgEANgKAIQgJAHgNAAQgMAAgJgGg");
	this.shape_113.setTransform(151.1,-51.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AAfAfIAAglIgBgJIgDgFQgDgBgEAAQgGAAgEAEQgFAEAAAKIAAAiIgJAAIAAgmQABgHgDgEQgDgDgFAAQgFAAgEACQgEACgCAFQgBAEAAAIIAAAfIgLAAIAAg8IAKAAIAAAJQADgFAFgDQAFgCAFAAQAIAAAEACQACADACAGQAIgLALAAQAKAAAFAFQAEAFAAALIAAAog");
	this.shape_114.setTransform(138.3,-50.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgNAdQgEgCgDgDQgCgDgBgFIgBgKIAAgkIALAAIAAAgIABALQABAEADADQADACAFAAQADAAAEgCQAEgDACgEQABgEAAgIIAAgfIALAAIAAA8IgKAAIAAgJQgHAKgKAAQgGAAgFgCg");
	this.shape_115.setTransform(129.9,-50.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AAfAfIAAglIgBgJIgDgFQgDgBgEAAQgGAAgEAEQgFAEAAAKIAAAiIgJAAIAAgmQABgHgDgEQgDgDgFAAQgFAAgEACQgEACgCAFQgBAEAAAIIAAAfIgLAAIAAg8IAKAAIAAAJQADgFAFgDQAFgCAFAAQAIAAAEACQACADACAGQAIgLALAAQAKAAAFAFQAEAFAAALIAAAog");
	this.shape_116.setTransform(121.7,-50.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgEArIAAg8IAJAAIAAA8gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_117.setTransform(115.3,-51.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AAPAfIgMgUIgDgFIgPAZIgNAAIAXgfIgVgdIAOAAIAJAOIADAHIAEgHIALgOIAMAAIgWAdIAYAfg");
	this.shape_118.setTransform(111,-50.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgWAbQgFgFAAgIQAAgEACgEQACgEADgCIAIgCIAJgBQALgCAGgCIAAgCQAAgHgDgDQgEgEgHAAQgGAAgEADQgDADgCAHIgKgCQABgGADgFQAEgEAFgCQAGgCAHAAQAHAAAFACQAFACADACQACADACAEIAAAKIAAANIABASQAAAEACAEIgLAAIgCgIQgGAFgFACQgEACgGAAQgKAAgGgFgAgBAEQgGAAgEACQgCAAgCADQgBACAAADQAAAEADADQADACAGABQAFgBAEgCQAFgCACgFQACgEAAgHIAAgDIgPAEg");
	this.shape_119.setTransform(104.7,-50.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AAeArIAAhGIgaBGIgIAAIgZhIIAABIIgKAAIAAhVIARAAIAUA8IACAMIAEgNIAVg7IAPAAIAABVg");
	this.shape_120.setTransform(96.4,-51.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgTAYQgIgJAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgLAAgIgIgAgKgSQgFAFgBAIIAhAAQgBgIgDgEQgFgFgIgBQgFABgFAEg");
	this.shape_121.setTransform(84.7,-50.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AAOArIAAgoQAAgGgDgDQgEgEgGAAQgDAAgEADQgEACgCAEQgBACAAAIIAAAiIgLAAIAAhVIALAAIAAAfQAHgIAJAAQAHAAAFADQAFADADAEQACAFAAAHIAAAog");
	this.shape_122.setTransform(78,-51.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AAAAoIgFgFQgBgDAAgJIAAgiIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIAKAAIAAAIIgKAAIAAAiIAAAGIACACIAEABIAEgBIACAKIgIABQgGAAgBgCg");
	this.shape_123.setTransform(73.1,-51.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgMAnQgHgEgDgHQgDgIgBgJQAAgKADgFQAEgIAGgEQAGgEAHAAQAEAAAFADQAEACADAEIAAgfIAKAAIAABUIgJAAIAAgIQgGAJgLAAQgGAAgGgEgAgKgFQgFAFAAALQABAMAFAGQAFAFAEAAQAIAAAEgFQAFgGAAgLQAAgMgFgFQgFgGgHAAQgFAAgFAGg");
	this.shape_124.setTransform(64.5,-51.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AAOAfIAAgkQAAgGgBgDQgBgDgDgCQgEgCgEAAQgFAAgEAEQgFAEAAAMIAAAgIgLAAIAAg8IAKAAIAAAJQAHgKAKAAQAGAAAFACQAFACACADQACADABAFIABAKIAAAkg");
	this.shape_125.setTransform(58,-50.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgWAbQgFgFAAgIQAAgEACgEQACgEADgCIAIgCIAJgBQALgCAGgCIAAgCQAAgHgDgDQgEgEgHAAQgGAAgEADQgDADgCAHIgKgCQABgGADgFQAEgEAFgCQAHgCAGAAQAHAAAFACQAFACADACQADADAAAEIABAKIAAANIAAASQABAEACAEIgLAAIgCgIQgGAFgFACQgEACgGAAQgKAAgGgFgAgBAEQgHAAgDACQgCAAgBADQgCACAAADQAAAEAEADQADACAFABQAEgBAFgCQAFgCACgFQACgEAAgHIAAgDIgPAEg");
	this.shape_126.setTransform(51.4,-50.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgFAJQAEgBABgDQAAgDAAgDIgEAAIAAgMIAKAAIAAAMQAAAEgCAEQgDAFgDACg");
	this.shape_127.setTransform(43,-47.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AAAAoIgFgFQgBgDAAgJIAAgiIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIAKAAIAAAIIgKAAIAAAiIAAAGIACACIAEABIAEgBIACAKIgIABQgGAAgBgCg");
	this.shape_128.setTransform(39.7,-51.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgTAYQgIgJAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgLAAgIgIgAgKgSQgFAFgBAIIAhAAQgBgIgDgEQgFgFgIgBQgFABgFAEg");
	this.shape_129.setTransform(34.7,-50.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AAfAfIAAglIgBgJQgBgDgCgCQgDgBgEAAQgHAAgDAEQgFAEAAAKIAAAiIgJAAIAAgmQABgHgDgEQgDgDgGAAQgEAAgEACQgDACgDAFQgBAEAAAIIAAAfIgLAAIAAg8IAKAAIAAAJQADgFAFgDQAEgCAGAAQAIAAAEACQACADACAGQAHgLAMAAQAKAAAFAFQAEAFAAALIAAAog");
	this.shape_130.setTransform(26.4,-50.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgQAbQgHgFgCgKIALgCQABAHAEADQAEADAFAAQAHAAAEgDQADgDABgDQAAgEgEgDIgLgDIgOgEQgEgBgCgEQgDgEAAgEQABgFACgDIAEgGIAHgDIAJgBQAGAAAFACQAGACACADQADAFABAFIgKACQgBgFgEgDQgDgDgFAAQgGAAgDADQgDACAAADIABAFIAEACIAHADIAQAFQAFAAACADQACAEAAAFQAAAFgCAFQgEAFgFACQgHADgHAAQgKAAgGgFg");
	this.shape_131.setTransform(15,-50.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgEArIAAg8IAJAAIAAA8gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_132.setTransform(10.7,-51.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgVAbQgGgFAAgIQAAgEACgEQACgEADgCIAIgCIAKgBQAKgCAGgCIAAgCQAAgHgDgDQgEgEgHAAQgGAAgEADQgEADgBAHIgLgCQACgGADgFQAEgEAGgCQAFgCAHAAQAIAAAEACQAFACADACQADADAAAEIABAKIAAANIAAASQABAEACAEIgLAAIgCgIQgGAFgFACQgEACgGAAQgKAAgFgFgAgBAEQgHAAgDACQgCAAgBADQgCACAAADQAAAEAEADQACACAHABQADgBAFgCQAFgCADgFQABgEAAgHIAAgDIgPAEg");
	this.shape_133.setTransform(2.7,-50.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgEArIAAg8IAJAAIAAA8gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_134.setTransform(-2,-51.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgPAfIAAg8IAJAAIAAAJQAEgGACgCQACgCAEAAQAFAAAFADIgDAKQgEgCgEAAQgDAAgCACQgCACgBADQgCAGAAAGIAAAfg");
	this.shape_135.setTransform(-4.8,-50.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgTAYQgIgJAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgLAAgIgIgAgKgSQgFAFgBAIIAhAAQgBgIgDgEQgFgFgIgBQgFABgFAEg");
	this.shape_136.setTransform(-10.6,-50.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AAAAoIgFgFQgBgDAAgJIAAgiIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIAKAAIAAAIIgKAAIAAAiIAAAGIACACIAEABIAEgBIACAKIgIABQgGAAgBgCg");
	this.shape_137.setTransform(-15.6,-51.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgEArIAAg8IAJAAIAAA8gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_138.setTransform(-18.6,-51.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgPAfIAAg8IAJAAIAAAJQAEgGACgCQACgCAEAAQAFAAAFADIgDAKQgEgCgEAAQgDAAgCACQgCACgBADQgCAGAAAGIAAAfg");
	this.shape_139.setTransform(-21.5,-50.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgSAYQgIgJAAgPQAAgJAEgHQADgIAHgDQAHgEAGAAQAKAAAGAFQAHAFACAKIgLABQgBgGgEgDQgEgDgFgBQgGABgFAFQgFAGAAALQAAAMAFAFQAFAGAGAAQAGAAAEgEQAEgDABgJIALACQgCALgHAGQgHAGgKAAQgLAAgIgIg");
	this.shape_140.setTransform(-26.8,-50.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgTAYQgIgJAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgLAAgIgIgAgKgSQgFAFgBAIIAhAAQgBgIgDgEQgFgFgIgBQgFABgFAEg");
	this.shape_141.setTransform(-36.6,-50.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgQAbQgHgFgCgKIALgCQABAHAEADQAEADAFAAQAHAAAEgDQADgDABgDQAAgEgDgDIgMgDIgNgEQgFgBgCgEQgCgEAAgEQAAgFACgDIAEgGIAHgDIAJgBQAGAAAGACQAFACACADQADAFABAFIgKACQgBgFgEgDQgDgDgFAAQgGAAgDADQgEACABADIABAFIAEACIAHADIAQAFQAEAAADADQADAEgBAFQAAAFgCAFQgEAFgFACQgHADgHAAQgKAAgGgFg");
	this.shape_142.setTransform(-43,-50.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgTAYQgIgJAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgLAAgIgIgAgKgSQgFAFgBAIIAhAAQgBgIgDgEQgFgFgIgBQgFABgFAEg");
	this.shape_143.setTransform(-49.3,-50.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AAOArIAAgoQAAgGgDgDQgEgEgGAAQgDAAgEADQgEACgCAEQgBACAAAIIAAAiIgLAAIAAhVIALAAIAAAfQAHgIAJAAQAHAAAFADQAFADADAEQACAFAAAHIAAAog");
	this.shape_144.setTransform(-55.9,-51.9);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AAAAoIgFgFQgBgDAAgJIAAgiIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIAKAAIAAAIIgKAAIAAAiIAAAGIACACIAEABIAEgBIACAKIgIABQgGAAgBgCg");
	this.shape_145.setTransform(-60.9,-51.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgHArIAAg0IgKAAIAAgIIAKAAIAAgHIABgJQABgEAEgDQACgCAHAAIAKABIgCAJIgGAAQgFAAgCACQgCACAAAFIAAAGIAMAAIAAAIIgMAAIAAA0g");
	this.shape_146.setTransform(-67.4,-52);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgUAYQgIgJAAgPQAAgQAKgIQAIgHAKAAQAMAAAIAIQAJAJAAAOQAAALgEAGQgEAIgHADQgGAEgIAAQgMAAgIgIgAgMgRQgFAHAAAKQAAAMAFAFQAGAGAGAAQAHAAAFgGQAGgGAAgLQAAgKgGgHQgFgFgHgBQgGABgGAFg");
	this.shape_147.setTransform(-72.6,-50.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgPAfIAAg8IAJAAIAAAJQAEgGACgCQACgCAEAAQAFAAAFADIgDAKQgEgCgEAAQgDAAgCACQgCACgBADQgCAGAAAGIAAAfg");
	this.shape_148.setTransform(-80.8,-50.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgTAYQgIgJAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgLAAgIgIgAgKgSQgFAFgBAIIAhAAQgBgIgDgEQgFgFgIgBQgFABgFAEg");
	this.shape_149.setTransform(-86.6,-50.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AAOArIAAgoQAAgGgDgDQgEgEgGAAQgDAAgEADQgEACgCAEQgBACAAAIIAAAiIgLAAIAAhVIALAAIAAAfQAHgIAJAAQAHAAAFADQAFADADAEQACAFAAAHIAAAog");
	this.shape_150.setTransform(-93.3,-51.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AAAAoIgFgFQgBgDAAgJIAAgiIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIAKAAIAAAIIgKAAIAAAiIAAAGIACACIAEABIAEgBIACAKIgIABQgGAAgBgCg");
	this.shape_151.setTransform(-98.2,-51.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgEArIAAg8IAJAAIAAA8gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_152.setTransform(-101.3,-51.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgTAYQgIgJAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgLAAgIgIgAgKgSQgFAFgBAIIAhAAQgBgIgDgEQgFgFgIgBQgFABgFAEg");
	this.shape_153.setTransform(-105.9,-50.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgHArIAAg0IgKAAIAAgIIAKAAIAAgHIABgJQABgEAEgDQACgCAHAAIAKABIgCAJIgGAAQgFAAgCACQgCACAAAFIAAAGIAMAAIAAAIIgMAAIAAA0g");
	this.shape_154.setTransform(-114,-52);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_155.setTransform(-117.6,-51.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.3,-60.4,944,32.7);


(lib.point_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFAfIAAgNIALAAIAAANgAgFgSIAAgLIALAAIAAALg");
	this.shape.setTransform(659.2,-50.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgNAnQgFgEgEgHQgDgIAAgJQAAgKADgFQADgIAGgEQAGgEAHAAQAEAAAFADQAEACADAEIAAgfIALAAIAABUIgKAAIAAgIQgGAJgLAAQgGAAgHgEgAgKgFQgFAFABALQAAAMAEAGQAGAFAFAAQAGAAAFgFQAFgGAAgLQAAgMgFgFQgFgGgHAAQgFAAgFAGg");
	this.shape_1.setTransform(653.9,-51.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgTAYQgIgJAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgLAAgIgIgAgKgSQgFAFgBAIIAhAAQgBgIgDgEQgFgFgIgBQgFABgFAEg");
	this.shape_2.setTransform(647.5,-50.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAOArIAAgoQAAgGgDgDQgEgEgGAAQgDAAgEADQgEACgCAEQgBACAAAIIAAAiIgLAAIAAhVIALAAIAAAfQAHgIAJAAQAHAAAFADQAFADADAEQACAFAAAHIAAAog");
	this.shape_3.setTransform(640.8,-51.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgSAYQgIgJAAgPQAAgJAEgHQADgIAHgDQAHgEAGAAQAKAAAGAFQAHAFACAKIgLABQgBgGgEgDQgEgDgFgBQgGABgFAFQgFAGAAALQAAAMAFAFQAFAGAGAAQAGAAAEgEQAEgDABgJIALACQgCALgHAGQgHAGgKAAQgLAAgIgIg");
	this.shape_4.setTransform(634.7,-50.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgVAbQgGgFAAgIQAAgEACgEQACgEADgCIAIgCIAKgBQAKgCAGgCIAAgCQAAgHgDgDQgEgEgHAAQgGAAgEADQgEADgBAHIgLgCQACgGAEgFQADgEAFgCQAGgCAHAAQAIAAAEACQAFACADACQADADAAAEIABAKIAAANIAAASQABAEACAEIgLAAIgCgIQgGAFgFACQgEACgGAAQgKAAgFgFgAgBAEQgHAAgDACQgCAAgBADQgCACAAADQAAAEAEADQACACAHABQADgBAFgCQAFgCADgFQABgEAAgHIAAgDIgPAEg");
	this.shape_5.setTransform(628.2,-50.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgTAYQgIgJAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgLAAgIgIgAgKgSQgFAFgBAIIAhAAQgBgIgDgEQgFgFgIgBQgFABgFAEg");
	this.shape_6.setTransform(621.5,-50.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgPAfIAAg8IAJAAIAAAJQAEgGACgCQACgCAEAAQAFAAAFADIgDAKQgEgCgEAAQgDAAgCACQgCACgBADQgCAGAAAGIAAAfg");
	this.shape_7.setTransform(616.7,-50.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgTAYQgIgJAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgLAAgIgIgAgKgSQgFAFgBAIIAhAAQgBgIgDgEQgFgFgIgBQgFABgFAEg");
	this.shape_8.setTransform(607.5,-50.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgQAiIAAAIIgKAAIAAhUIALAAIAAAeQAGgIAJAAQAFAAAGACQAFADAEAEQADAEABAGQACAEAAAHQAAAQgIAIQgHAJgLAAQgKAAgGgJgAgLgFQgFAFAAAKQAAALADAFQAFAIAIAAQAFAAAGgFQAEgHAAgLQAAgLgEgFQgFgGgGAAQgGAAgFAGg");
	this.shape_9.setTransform(601.1,-51.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgUAYQgIgJAAgPQAAgQAKgIQAIgHAKAAQAMAAAIAIQAJAJAAAOQAAALgEAGQgEAIgHADQgGAEgIAAQgMAAgIgIgAgMgRQgFAHAAAKQAAAMAFAFQAGAGAGAAQAHAAAFgGQAGgGAAgLQAAgKgGgHQgFgFgHgBQgGABgGAFg");
	this.shape_10.setTransform(590.9,-50.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAAAoIgFgFQgBgDAAgJIAAgiIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIAKAAIAAAIIgKAAIAAAiIAAAGIACACIAEABIAEgBIACAKIgIABQgGAAgBgCg");
	this.shape_11.setTransform(585.9,-51.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgQAbQgHgFgCgKIALgCQABAHAEADQAEADAFAAQAIAAADgDQAEgDAAgDQAAgEgEgDIgLgDIgOgEQgEgBgCgEQgDgEAAgEQAAgFADgDIAEgGIAIgDIAIgBQAFAAAGACQAGACACADQADAFABAFIgLACQAAgFgDgDQgDgDgGAAQgGAAgDADQgEACAAADIACAFIAEACIAHADIAQAFQAFAAACADQACAEABAFQAAAFgDAFQgEAFgFACQgGADgIAAQgKAAgGgFg");
	this.shape_12.setTransform(577.8,-50.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgNAnQgFgEgEgHQgEgIABgJQAAgKACgFQAEgIAGgEQAGgEAHAAQAFAAAEADQAFACACAEIAAgfIALAAIAABUIgKAAIAAgIQgGAJgLAAQgGAAgHgEgAgKgFQgEAFAAALQgBAMAGAGQAEAFAGAAQAGAAAFgFQAFgGAAgLQAAgMgFgFQgFgGgHAAQgFAAgFAGg");
	this.shape_13.setTransform(571.3,-51.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgTAYQgIgJAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgLAAgIgIgAgKgSQgFAFgBAIIAhAAQgBgIgDgEQgFgFgIgBQgFABgFAEg");
	this.shape_14.setTransform(564.9,-50.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgTAYQgIgJAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgLAAgIgIgAgKgSQgFAFgBAIIAhAAQgBgIgDgEQgFgFgIgBQgFABgFAEg");
	this.shape_15.setTransform(558.2,-50.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAOAfIAAgkQAAgGgBgDQgBgDgDgCQgEgCgEAAQgFAAgEAEQgFAEAAAMIAAAgIgLAAIAAg8IAKAAIAAAJQAHgKAKAAQAGAAAFACQAFACACADQACADABAFIABAKIAAAkg");
	this.shape_16.setTransform(551.6,-50.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAAAoIgFgFQgBgDAAgJIAAgiIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIAKAAIAAAIIgKAAIAAAiIAAAGIACACIAEABIAEgBIACAKIgIABQgGAAgBgCg");
	this.shape_17.setTransform(543.3,-51.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgEArIAAg8IAJAAIAAA8gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_18.setTransform(540.2,-51.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAfAfIAAglIgBgJQgBgDgDgCQgCgBgEAAQgHAAgEAEQgEAEAAAKIAAAiIgIAAIAAgmQAAgHgDgEQgDgDgGAAQgEAAgEACQgDACgCAFQgCAEAAAIIAAAfIgKAAIAAg8IAJAAIAAAJQADgFAEgDQAFgCAHAAQAGAAAFACQADADACAGQAGgLANAAQAJAAAEAFQAGAFAAALIAAAog");
	this.shape_19.setTransform(533.9,-50.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgEArIAAg8IAJAAIAAA8gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_20.setTransform(527.6,-51.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgZArIAAhVIALAAIAABKIAoAAIAAALg");
	this.shape_21.setTransform(523.2,-51.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgNAnQgFgEgEgHQgEgIABgJQAAgKACgFQAEgIAGgEQAGgEAHAAQAFAAAEADQAFACACAEIAAgfIALAAIAABUIgKAAIAAgIQgGAJgLAAQgGAAgHgEgAgKgFQgEAFAAALQAAAMAEAGQAFAFAGAAQAGAAAFgFQAFgGAAgLQAAgMgFgFQgFgGgHAAQgFAAgFAGg");
	this.shape_22.setTransform(512.7,-51.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAOAfIAAgkQAAgGgBgDQgBgDgDgCQgEgCgEAAQgFAAgEAEQgFAEAAAMIAAAgIgLAAIAAg8IAKAAIAAAJQAHgKAKAAQAGAAAFACQAFACACADQACADABAFIABAKIAAAkg");
	this.shape_23.setTransform(506.3,-50.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgVAbQgGgFAAgIQAAgEACgEQACgEAEgCIAHgCIAKgBQAKgCAGgCIAAgCQAAgHgDgDQgEgEgHAAQgGAAgEADQgDADgCAHIgLgCQACgGAEgFQACgEAHgCQAGgCAFAAQAIAAAGACQAFACACACQACADACAEIAAAKIAAANIABASQAAAEACAEIgLAAIgCgIQgGAFgFACQgEACgGAAQgKAAgFgFgAgBAEQgGAAgDACQgDAAgCADQgBACAAADQAAAEAEADQACACAHABQADgBAGgCQAEgCADgFQABgEAAgHIAAgDIgPAEg");
	this.shape_24.setTransform(499.6,-50.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAfAfIAAglIgBgJQgBgDgCgCQgDgBgEAAQgHAAgEAEQgEAEAAAKIAAAiIgJAAIAAgmQAAgHgCgEQgDgDgGAAQgEAAgEACQgEACgBAFQgCAEAAAIIAAAfIgLAAIAAg8IAKAAIAAAJQADgFAEgDQAFgCAGAAQAIAAAEACQACADACAGQAIgLALAAQAKAAAEAFQAFAFABALIAAAog");
	this.shape_25.setTransform(491.3,-50.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAfAfIAAglIgBgJQgBgDgCgCQgDgBgEAAQgHAAgDAEQgFAEAAAKIAAAiIgJAAIAAgmQABgHgDgEQgDgDgGAAQgEAAgEACQgDACgDAFQgBAEAAAIIAAAfIgLAAIAAg8IAKAAIAAAJQADgFAEgDQAFgCAGAAQAIAAAEACQACADACAGQAHgLAMAAQAKAAAFAFQAEAFAAALIAAAog");
	this.shape_26.setTransform(481.3,-50.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgUAYQgIgJAAgPQAAgQAKgIQAIgHAKAAQAMAAAIAIQAJAJAAAOQAAALgEAGQgEAIgHADQgGAEgIAAQgMAAgIgIgAgMgRQgFAHAAAKQAAAMAFAFQAGAGAGAAQAHAAAFgGQAGgGAAgLQAAgKgGgHQgFgFgHgBQgGABgGAFg");
	this.shape_27.setTransform(473,-50.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgSAmQgKgFgEgLQgEgLAAgLQAAgMAEgLQAGgKAJgFQAJgFAKAAQANAAAJAHQAIAGAEAMIgLADQgDgJgGgFQgFgEgJAAQgIAAgGAEQgIAFgCAJQgDAHAAAIQAAAKAEAIQACAIAIAEQAGAEAGAAQAJAAAHgGQAGgFADgLIALAEQgDANgJAIQgKAHgNAAQgMAAgIgGg");
	this.shape_28.setTransform(465.4,-51.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAfAfIAAglIgBgJQgBgDgDgCQgCgBgEAAQgGAAgEAEQgFAEAAAKIAAAiIgIAAIAAgmQgBgHgCgEQgDgDgFAAQgFAAgEACQgEACgCAFQgBAEAAAIIAAAfIgKAAIAAg8IAJAAIAAAJQADgFAFgDQAEgCAHAAQAGAAAFACQADADACAGQAGgLAMAAQAKAAAFAFQAEAFAAALIAAAog");
	this.shape_29.setTransform(452.7,-50.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgNAdQgEgCgDgDQgCgDgBgFIgBgKIAAgkIALAAIAAAgIABALQABAEADADQADACAFAAQADAAAEgCQAEgDACgEQABgEAAgIIAAgfIALAAIAAA8IgKAAIAAgJQgHAKgKAAQgGAAgFgCg");
	this.shape_30.setTransform(444.3,-50.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAfAfIAAglIgBgJQgBgDgDgCQgCgBgEAAQgGAAgEAEQgFAEAAAKIAAAiIgIAAIAAgmQgBgHgCgEQgDgDgFAAQgFAAgEACQgEACgCAFQgBAEAAAIIAAAfIgKAAIAAg8IAJAAIAAAJQADgFAFgDQAEgCAHAAQAGAAAFACQADADACAGQAGgLAMAAQAKAAAFAFQAEAFAAALIAAAog");
	this.shape_31.setTransform(436,-50.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgEArIAAg8IAJAAIAAA8gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_32.setTransform(429.7,-51.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAQAfIgNgUIgDgFIgPAZIgMAAIAWgfIgVgdIAOAAIAJAOIADAHIAEgHIALgOIAMAAIgVAdIAWAfg");
	this.shape_33.setTransform(425.4,-50.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgWAbQgFgFAAgIQAAgEACgEQACgEADgCIAIgCIAJgBQALgCAGgCIAAgCQAAgHgDgDQgEgEgHAAQgGAAgEADQgDADgCAHIgKgCQABgGADgFQAEgEAFgCQAHgCAGAAQAHAAAFACQAFACADACQADADAAAEIABAKIAAANIAAASQABAEACAEIgLAAIgCgIQgGAFgFACQgEACgGAAQgKAAgGgFgAgBAEQgHAAgDACQgCAAgBADQgCACAAADQAAAEAEADQADACAFABQAEgBAFgCQAFgCACgFQACgEAAgHIAAgDIgPAEg");
	this.shape_34.setTransform(419,-50.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAeArIAAhGIgZBGIgJAAIgZhIIAABIIgKAAIAAhVIARAAIAUA8IACAMIAFgNIAUg7IAQAAIAABVg");
	this.shape_35.setTransform(410.7,-51.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAOAfIAAgkQAAgGgBgDQgBgDgDgCQgEgCgEAAQgFAAgEAEQgFAEAAAMIAAAgIgLAAIAAg8IAKAAIAAAJQAHgKAKAAQAGAAAFACQAFACACADQACADABAFIABAKIAAAkg");
	this.shape_36.setTransform(399,-50.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAMAfIgKgkIgCgLIgLAvIgLAAIgTg8IALAAIAKAhIADANIAEgMIAKgiIAIAAIAKAiIACALIAFgLIAKgiIAKAAIgTA8g");
	this.shape_37.setTransform(391.4,-50.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgUAYQgIgJAAgPQAAgQAKgIQAIgHAKAAQAMAAAIAIQAJAJAAAOQAAALgEAGQgEAIgHADQgGAEgIAAQgMAAgIgIgAgMgRQgFAHAAAKQAAAMAFAFQAGAGAGAAQAHAAAFgGQAGgGAAgLQAAgKgGgHQgFgFgHgBQgGABgGAFg");
	this.shape_38.setTransform(383.7,-50.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgMAnQgHgEgDgHQgDgIgBgJQAAgKAEgFQADgIAGgEQAGgEAHAAQAEAAAFADQAEACADAEIAAgfIAKAAIAABUIgJAAIAAgIQgGAJgLAAQgGAAgGgEgAgKgFQgFAFAAALQABAMAEAGQAFAFAFAAQAIAAAEgFQAFgGAAgLQAAgMgFgFQgFgGgHAAQgFAAgFAGg");
	this.shape_39.setTransform(376.9,-51.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgTAYQgIgJAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgLAAgIgIgAgKgSQgFAFgBAIIAhAAQgBgIgDgEQgFgFgIgBQgFABgFAEg");
	this.shape_40.setTransform(367.1,-50.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgQAbQgGgFgCgKIAKgCQABAHAEADQAEADAFAAQAHAAAEgDQADgDAAgDQAAgEgDgDIgKgDIgPgEQgEgBgCgEQgCgEgBgEQAAgFACgDIAGgGIAHgDIAIgBQAGAAAFACQAGACACADQADAFABAFIgLACQAAgFgDgDQgDgDgGAAQgGAAgDADQgDACgBADIACAFIAEACIAIADIAPAFQAEAAADADQADAEAAAFQAAAFgEAFQgDAFgGACQgGADgGAAQgLAAgGgFg");
	this.shape_41.setTransform(360.7,-50.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgUAYQgIgJAAgPQAAgQAKgIQAIgHAKAAQAMAAAIAIQAJAJAAAOQAAALgEAGQgEAIgHADQgGAEgIAAQgMAAgIgIgAgMgRQgFAHAAAKQAAAMAFAFQAGAGAGAAQAHAAAFgGQAGgGAAgLQAAgKgGgHQgFgFgHgBQgGABgGAFg");
	this.shape_42.setTransform(354.4,-50.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAOAfIAAgkQAAgGgBgDQgBgDgDgCQgEgCgEAAQgFAAgEAEQgFAEAAAMIAAAgIgLAAIAAg8IAKAAIAAAJQAHgKAKAAQAGAAAFACQAFACACADQACADABAFIABAKIAAAkg");
	this.shape_43.setTransform(347.8,-50.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAfAfIAAglIgBgJQgBgDgDgCQgCgBgEAAQgGAAgEAEQgFAEAAAKIAAAiIgIAAIAAgmQgBgHgCgEQgDgDgFAAQgFAAgEACQgEACgCAFQgBAEAAAIIAAAfIgKAAIAAg8IAJAAIAAAJQADgFAFgDQAEgCAHAAQAGAAAFACQADADACAGQAGgLAMAAQAKAAAFAFQAEAFAAALIAAAog");
	this.shape_44.setTransform(336.1,-50.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgEArIAAg8IAJAAIAAA8gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_45.setTransform(329.8,-51.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgPAfIAAg8IAJAAIAAAJQAEgGACgCQACgCAEAAQAFAAAFADIgDAKQgEgCgEAAQgDAAgCACQgCACgBADQgCAGAAAGIAAAfg");
	this.shape_46.setTransform(326.9,-50.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAAAoIgFgFQgBgDAAgJIAAgiIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIAKAAIAAAIIgKAAIAAAiIAAAGIACACIAEABIAEgBIACAKIgIABQgGAAgBgCg");
	this.shape_47.setTransform(322.8,-51.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgPAfIAAg8IAJAAIAAAJQAEgGACgCQACgCAEAAQAFAAAFADIgDAKQgEgCgEAAQgDAAgCACQgCACgBADQgCAGAAAGIAAAfg");
	this.shape_48.setTransform(316.2,-50.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgTAYQgIgJAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgLAAgIgIgAgKgSQgFAFgBAIIAhAAQgBgIgDgEQgFgFgIgBQgFABgFAEg");
	this.shape_49.setTransform(310.4,-50.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgaAfIAAgJIAlgrIgLAAIgYAAIAAgIIAxAAIAAAGIggAmIgGAHIANAAIAbAAIAAAJg");
	this.shape_50.setTransform(304.1,-50.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgEArIAAg8IAJAAIAAA8gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_51.setTransform(299.8,-51.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_52.setTransform(297.1,-51.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgEArIAAg8IAJAAIAAA8gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_53.setTransform(294.5,-51.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgQAiIAAAIIgKAAIAAhUIALAAIAAAeQAGgIAJAAQAGAAAFACQAFADADAEQAEAEACAGQABAEAAAHQABAQgJAIQgHAJgLAAQgKAAgGgJgAgLgFQgFAFAAAKQAAALADAFQAFAIAIAAQAGAAAEgFQAGgHAAgLQAAgLgGgFQgEgGgGAAQgGAAgFAGg");
	this.shape_54.setTransform(290,-51.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgVAbQgGgFAAgIQAAgEACgEQACgEAEgCIAHgCIAKgBQAKgCAGgCIAAgCQAAgHgDgDQgEgEgHAAQgGAAgEADQgDADgCAHIgLgCQACgGAEgFQACgEAHgCQAGgCAFAAQAIAAAGACQAFACACACQACADACAEIAAAKIAAANIABASQAAAEACAEIgLAAIgCgIQgGAFgFACQgEACgGAAQgKAAgFgFgAgBAEQgGAAgDACQgDAAgCADQgBACAAADQAAAEAEADQACACAHABQADgBAGgCQAEgCADgFQABgEAAgHIAAgDIgPAEg");
	this.shape_55.setTransform(283.2,-50.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAAAoIgFgFQgBgDAAgJIAAgiIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIAKAAIAAAIIgKAAIAAAiIAAAGIACACIAEABIAEgBIACAKIgIABQgGAAgBgCg");
	this.shape_56.setTransform(278.2,-51.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgQAbQgGgFgDgKIALgCQABAHAEADQAEADAFAAQAHAAAEgDQADgDAAgDQAAgEgCgDIgMgDIgNgEQgFgBgCgEQgCgEAAgEQAAgFACgDIAEgGIAHgDIAJgBQAFAAAHACQAFACADADQACAFABAFIgKACQgBgFgEgDQgDgDgFAAQgGAAgDADQgEACABADIABAFIAEACIAHADIAQAFQAEAAADADQADAEgBAFQAAAFgCAFQgEAFgFACQgHADgHAAQgKAAgGgFg");
	this.shape_57.setTransform(273.5,-50.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgTAYQgIgJAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgLAAgIgIgAgKgSQgFAFgBAIIAhAAQgBgIgDgEQgFgFgIgBQgFABgFAEg");
	this.shape_58.setTransform(263.8,-50.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAOArIAAgoQAAgGgDgDQgEgEgGAAQgDAAgEADQgEACgCAEQgBACAAAIIAAAiIgLAAIAAhVIALAAIAAAfQAHgIAJAAQAHAAAFADQAFADADAEQACAFAAAHIAAAog");
	this.shape_59.setTransform(257.2,-51.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAAAoIgFgFQgBgDAAgJIAAgiIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIAKAAIAAAIIgKAAIAAAiIAAAGIACACIAEABIAEgBIACAKIgIABQgGAAgBgCg");
	this.shape_60.setTransform(252.2,-51.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgFAJQAEgBABgDQAAgDAAgDIgEAAIAAgMIAKAAIAAAMQAAAEgCAEQgDAFgDACg");
	this.shape_61.setTransform(245.4,-47.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAfAfIAAglIgBgJQgBgDgDgCQgCgBgEAAQgGAAgFAEQgEAEAAAKIAAAiIgIAAIAAgmQgBgHgCgEQgDgDgFAAQgFAAgEACQgDACgCAFQgCAEAAAIIAAAfIgKAAIAAg8IAJAAIAAAJQADgFAFgDQAEgCAHAAQAGAAAFACQADADACAGQAGgLANAAQAJAAAEAFQAGAFgBALIAAAog");
	this.shape_62.setTransform(238.8,-50.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgTAYQgIgJAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgLAAgIgIgAgKgSQgFAFgBAIIAhAAQgBgIgDgEQgFgFgIgBQgFABgFAEg");
	this.shape_63.setTransform(230.5,-50.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAAAoIgFgFQgBgDAAgJIAAgiIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIAKAAIAAAIIgKAAIAAAiIAAAGIACACIAEABIAEgBIACAKIgIABQgGAAgBgCg");
	this.shape_64.setTransform(225.5,-51.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgQAbQgGgFgCgKIAKgCQABAHAEADQAEADAFAAQAHAAAEgDQADgDAAgDQAAgEgDgDIgKgDIgPgEQgEgBgCgEQgCgEgBgEQAAgFACgDIAGgGIAHgDIAIgBQAGAAAFACQAGACADADQACAFABAFIgLACQAAgFgDgDQgDgDgGAAQgGAAgDADQgDACgBADIACAFIAEACIAIADIAPAFQAEAAADADQADAEAAAFQAAAFgEAFQgDAFgGACQgGADgGAAQgLAAgGgFg");
	this.shape_65.setTransform(220.8,-50.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgVAqIgBgKIAFABIAGgBIADgEIAEgIIABgCIgYg8IALAAIAOAkIACAMIAEgMIANgkIALAAIgXA9IgFAOQgDAFgDADQgEACgFAAIgGgBg");
	this.shape_66.setTransform(214.9,-49.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgQAoQgIgDgEgHQgFgGAAgJIALgBQABAGACAFQADADAGADQAGADAFAAQAHAAAFgCQAFgCACgDQADgEAAgEQAAgEgDgDQgCgDgGgCIgNgEQgMgDgEAAQgHgEgDgEQgDgGAAgFQAAgGAEgHQAEgFAHgDQAHgDAIAAQAIAAAIADQAHAEAEAFQAEAGAAAIIgLABQgBgIgFgFQgFgEgJAAQgJAAgFAEQgFADAAAGQAAAEAEADQADADAMAEQAOADAFADQAHABAEAFQAEAFAAAHQAAAHgEAGQgEAGgIADQgHAEgJAAQgKAAgIgEg");
	this.shape_67.setTransform(207.8,-51.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAfAfIAAglIgBgJIgDgFQgDgBgEAAQgGAAgEAEQgFAEAAAKIAAAiIgJAAIAAgmQABgHgDgEQgDgDgFAAQgFAAgEACQgEACgCAFQgBAEAAAIIAAAfIgKAAIAAg8IAJAAIAAAJQADgFAFgDQAFgCAFAAQAIAAAEACQACADACAGQAIgLALAAQAKAAAFAFQAEAFAAALIAAAog");
	this.shape_68.setTransform(195.5,-50.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgEArIAAg8IAJAAIAAA8gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_69.setTransform(189.1,-51.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgPAfIAAg8IAJAAIAAAJQAEgGACgCQACgCAEAAQAFAAAFADIgDAKQgEgCgEAAQgDAAgCACQgCACgBADQgCAGAAAGIAAAfg");
	this.shape_70.setTransform(186.3,-50.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgEArIAAhLIgcAAIAAgKIBBAAIAAAKIgcAAIAABLg");
	this.shape_71.setTransform(180.6,-51.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgNAnQgFgEgEgHQgEgIABgJQAAgKACgFQAEgIAGgEQAGgEAHAAQAFAAAEADQAFACACAEIAAgfIALAAIAABUIgKAAIAAgIQgGAJgLAAQgGAAgHgEgAgKgFQgEAFAAALQAAAMAEAGQAFAFAGAAQAGAAAFgFQAFgGAAgLQAAgMgFgFQgFgGgHAAQgFAAgFAGg");
	this.shape_72.setTransform(170.3,-51.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgTAYQgIgJAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgLAAgIgIgAgKgSQgFAFgBAIIAhAAQgBgIgDgEQgFgFgIgBQgFABgFAEg");
	this.shape_73.setTransform(163.8,-50.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgTAYQgIgJAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgLAAgIgIgAgKgSQgFAFgBAIIAhAAQgBgIgDgEQgFgFgIgBQgFABgFAEg");
	this.shape_74.setTransform(157.2,-50.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgaArIAAhUIAKAAIAAAIQADgFAEgCQAFgCAEAAQAIAAAGAEQAGAEADAHQADAIAAAJQAAAJgDAGQgEAIgGAEQgGAEgHAAQgEAAgEgDQgEgCgDgDIAAAegAgLgcQgFAGAAAMQAAALAFAFQAFAGAGAAQAFAAAGgGQAEgGAAgKQABgMgFgGQgFgGgGAAQgGAAgFAGg");
	this.shape_75.setTransform(150.7,-49.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgQAoQgIgDgEgHQgFgGAAgJIALgBQABAGACAFQADADAGADQAGADAFAAQAHAAAFgCQAFgCACgDQADgEAAgEQAAgEgDgDQgCgDgGgCIgNgEQgMgDgEAAQgHgEgDgEQgDgGAAgFQAAgGAEgHQAEgFAHgDQAHgDAIAAQAIAAAIADQAHAEAEAFQAEAGAAAIIgLABQgBgIgFgFQgFgEgJAAQgJAAgFAEQgFADAAAGQAAAEAEADQADADAMAEQAOADAFADQAHABAEAFQAEAFAAAHQAAAHgEAGQgEAGgIADQgHAEgJAAQgKAAgIgEg");
	this.shape_76.setTransform(143.2,-51.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgTAYQgIgJAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgLAAgIgIgAgKgSQgFAFgBAIIAhAAQgBgIgDgEQgFgFgIgBQgFABgFAEg");
	this.shape_77.setTransform(132.5,-50.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAOArIAAgoQAAgGgDgDQgEgEgGAAQgDAAgEADQgEACgCAEQgBACAAAIIAAAiIgLAAIAAhVIALAAIAAAfQAHgIAJAAQAHAAAFADQAFADADAEQACAFAAAHIAAAog");
	this.shape_78.setTransform(125.9,-51.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAAAoIgFgFQgBgDAAgJIAAgiIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIAKAAIAAAIIgKAAIAAAiIAAAGIACACIAEABIAEgBIACAKIgIABQgGAAgBgCg");
	this.shape_79.setTransform(120.9,-51.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAAAoIgFgFQgBgDAAgJIAAgiIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIAKAAIAAAIIgKAAIAAAiIAAAGIACACIAEABIAEgBIACAKIgIABQgGAAgBgCg");
	this.shape_80.setTransform(114.2,-51.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgEArIAAg8IAJAAIAAA8gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_81.setTransform(111.2,-51.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgQAiIAAAIIgJAAIAAhUIAKAAIAAAeQAHgIAIAAQAGAAAFACQAFADAEAEQACAEACAGQACAEABAHQgBAQgHAIQgJAJgKAAQgJAAgHgJgAgLgFQgFAFAAAKQAAALADAFQAFAIAIAAQAFAAAGgFQAEgHAAgLQAAgLgEgFQgFgGgGAAQgGAAgFAGg");
	this.shape_82.setTransform(106.7,-51.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgEArIAAg8IAJAAIAAA8gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_83.setTransform(101.9,-51.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AAOArIAAgoQAAgGgDgDQgEgEgGAAQgDAAgEADQgEACgCAEQgBACAAAIIAAAiIgLAAIAAhVIALAAIAAAfQAHgIAJAAQAHAAAFADQAFADADAEQACAFAAAHIAAAog");
	this.shape_84.setTransform(97.2,-51.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AAOAfIAAgkQAAgGgBgDQgBgDgDgCQgEgCgEAAQgFAAgEAEQgFAEAAAMIAAAgIgLAAIAAg8IAKAAIAAAJQAHgKAKAAQAGAAAFACQAFACACADQACADABAFIABAKIAAAkg");
	this.shape_85.setTransform(90.6,-50.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgEArIAAg8IAJAAIAAA8gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_86.setTransform(85.9,-51.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgUAYQgIgJAAgPQAAgQAKgIQAIgHAKAAQAMAAAIAIQAJAJAAAOQAAALgEAGQgEAIgHADQgGAEgIAAQgMAAgIgIgAgMgRQgFAHAAAKQAAAMAFAFQAGAGAGAAQAHAAAFgGQAGgGAAgLQAAgKgGgHQgFgFgHgBQgGABgGAFg");
	this.shape_87.setTransform(77.9,-50.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AAAAoIgFgFQgBgDAAgJIAAgiIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIAKAAIAAAIIgKAAIAAAiIAAAGIACACIAEABIAEgBIACAKIgIABQgGAAgBgCg");
	this.shape_88.setTransform(73,-51.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgSAYQgIgJAAgPQAAgJAEgHQADgIAHgDQAHgEAGAAQAKAAAGAFQAHAFACAKIgLABQgBgGgEgDQgEgDgFgBQgGABgFAFQgFAGAAALQAAAMAFAFQAFAGAGAAQAGAAAEgEQAEgDABgJIALACQgCALgHAGQgHAGgKAAQgLAAgIgIg");
	this.shape_89.setTransform(65.1,-50.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgEArIAAg8IAJAAIAAA8gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_90.setTransform(60.6,-51.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgRAnQgHgFAAgLIAKACQABAFADACQAEADAGAAQAGAAAEgDQAEgDABgFIABgNQgHAHgJABQgMAAgHgKQgHgJAAgLQAAgJADgIQAEgHAGgEQAGgEAHAAQAKAAAHAJIAAgHIAKAAIAAAzQAAAOgDAHQgDAFgGAEQgHAEgIAAQgKAAgHgFgAgKgdQgFAGAAALQAAAMAFAEQAFAGAFAAQAHAAAFgGQAFgEAAgMQAAgLgFgGQgFgFgHgBQgFABgFAFg");
	this.shape_91.setTransform(55.7,-49.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgUAYQgIgJAAgPQAAgQAKgIQAIgHAKAAQAMAAAIAIQAJAJAAAOQAAALgEAGQgEAIgHADQgGAEgIAAQgMAAgIgIgAgMgRQgFAHAAAKQAAAMAFAFQAGAGAGAAQAHAAAFgGQAGgGAAgLQAAgKgGgHQgFgFgHgBQgGABgGAFg");
	this.shape_92.setTransform(49.3,-50.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_93.setTransform(44.6,-51.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AAAAoIgFgFQgBgDAAgJIAAgiIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIAKAAIAAAIIgKAAIAAAiIAAAGIACACIAEABIAEgBIACAKIgIABQgGAAgBgCg");
	this.shape_94.setTransform(38.3,-51.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgEArIAAg8IAJAAIAAA8gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_95.setTransform(35.3,-51.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AAfAfIAAglIgBgJIgDgFQgDgBgEAAQgGAAgEAEQgFAEAAAKIAAAiIgJAAIAAgmQABgHgDgEQgDgDgFAAQgFAAgEACQgEACgCAFQgBAEAAAIIAAAfIgKAAIAAg8IAJAAIAAAJQADgFAFgDQAFgCAFAAQAIAAAEACQACADACAGQAIgLALAAQAKAAAFAFQAEAFAAALIAAAog");
	this.shape_96.setTransform(29,-50.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgEArIAAg8IAJAAIAAA8gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_97.setTransform(22.6,-51.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_98.setTransform(19.9,-51.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgNAnQgFgEgEgHQgDgIAAgJQAAgKADgFQADgIAGgEQAGgEAHAAQAEAAAFADQAEACADAEIAAgfIALAAIAABUIgKAAIAAgIQgGAJgLAAQgGAAgHgEgAgKgFQgFAFABALQAAAMAEAGQAGAFAFAAQAGAAAFgFQAFgGAAgLQAAgMgFgFQgFgGgHAAQgFAAgFAGg");
	this.shape_99.setTransform(11.8,-51.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AAOAfIAAgkQAAgGgBgDQgBgDgDgCQgEgCgEAAQgFAAgEAEQgFAEAAAMIAAAgIgLAAIAAg8IAKAAIAAAJQAHgKAKAAQAGAAAFACQAFACACADQACADABAFIABAKIAAAkg");
	this.shape_100.setTransform(5.3,-50.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgWAbQgFgFAAgIQAAgEACgEQACgEAEgCIAHgCIAKgBQAKgCAGgCIAAgCQAAgHgDgDQgEgEgHAAQgGAAgEADQgDADgCAHIgLgCQACgGAEgFQACgEAHgCQAGgCAFAAQAJAAAFACQAFACACACQADADABAEIAAAKIAAANIABASQAAAEACAEIgLAAIgCgIQgGAFgFACQgEACgGAAQgKAAgGgFgAgBAEQgGAAgDACQgDAAgCADQgBACAAADQAAAEADADQAEACAFABQAEgBAGgCQAEgCACgFQACgEAAgHIAAgDIgPAEg");
	this.shape_101.setTransform(-1.3,-50.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AAfAfIAAglIgBgJQgBgDgCgCQgDgBgEAAQgHAAgDAEQgFAEAAAKIAAAiIgJAAIAAgmQABgHgDgEQgDgDgGAAQgEAAgEACQgDACgDAFQgBAEAAAIIAAAfIgLAAIAAg8IAKAAIAAAJQADgFAEgDQAFgCAGAAQAIAAAEACQACADACAGQAHgLAMAAQAKAAAFAFQAEAFAAALIAAAog");
	this.shape_102.setTransform(-9.6,-50.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AAfAfIAAglIgBgJIgDgFQgDgBgEAAQgGAAgEAEQgFAEAAAKIAAAiIgJAAIAAgmQABgHgDgEQgDgDgFAAQgFAAgEACQgEACgCAFQgBAEAAAIIAAAfIgLAAIAAg8IAKAAIAAAJQADgFAFgDQAFgCAFAAQAIAAAEACQACADACAGQAIgLALAAQAKAAAFAFQAEAFAAALIAAAog");
	this.shape_103.setTransform(-19.6,-50.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgUAYQgIgJAAgPQAAgQAKgIQAIgHAKAAQAMAAAIAIQAJAJAAAOQAAALgEAGQgEAIgHADQgGAEgIAAQgMAAgIgIgAgMgRQgFAHAAAKQAAAMAFAFQAGAGAGAAQAHAAAFgGQAGgGAAgLQAAgKgGgHQgFgFgHgBQgGABgGAFg");
	this.shape_104.setTransform(-28,-50.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgSAYQgIgJAAgPQAAgJAEgHQADgIAHgDQAHgEAGAAQAKAAAGAFQAHAFACAKIgLABQgBgGgEgDQgEgDgFgBQgGABgFAFQgFAGAAALQAAAMAFAFQAFAGAGAAQAGAAAEgEQAEgDABgJIALACQgCALgHAGQgHAGgKAAQgLAAgIgIg");
	this.shape_105.setTransform(-34.1,-50.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgTAYQgIgJAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgLAAgIgIgAgKgSQgFAFgBAIIAhAAQgBgIgDgEQgFgFgIgBQgFABgFAEg");
	this.shape_106.setTransform(-44,-50.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AAOArIAAgoQAAgGgDgDQgEgEgGAAQgDAAgEADQgEACgCAEQgBACAAAIIAAAiIgLAAIAAhVIALAAIAAAfQAHgIAJAAQAHAAAFADQAFADADAEQACAFAAAHIAAAog");
	this.shape_107.setTransform(-50.6,-51.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AAAAoIgFgFQgBgDAAgJIAAgiIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIAKAAIAAAIIgKAAIAAAiIAAAGIACACIAEABIAEgBIACAKIgIABQgGAAgBgCg");
	this.shape_108.setTransform(-55.6,-51.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgPAfIAAg8IAJAAIAAAJQAEgGACgCQACgCAEAAQAFAAAFADIgDAKQgEgCgEAAQgDAAgCACQgCACgBADQgCAGAAAGIAAAfg");
	this.shape_109.setTransform(-62.2,-50.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgUAYQgIgJAAgPQAAgQAKgIQAIgHAKAAQAMAAAIAIQAJAJAAAOQAAALgEAGQgEAIgHADQgGAEgIAAQgMAAgIgIgAgMgRQgFAHAAAKQAAAMAFAFQAGAGAGAAQAHAAAFgGQAGgGAAgLQAAgKgGgHQgFgFgHgBQgGABgGAFg");
	this.shape_110.setTransform(-68,-50.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgHArIAAg0IgKAAIAAgIIAKAAIAAgHIABgJQABgEAEgDQACgCAHAAIAKABIgCAJIgGAAQgFAAgCACQgCACAAAFIAAAGIAMAAIAAAIIgMAAIAAA0g");
	this.shape_111.setTransform(-72.7,-52);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgPAfIAAg8IAJAAIAAAJQAEgGACgCQACgCAEAAQAFAAAFADIgDAKQgEgCgEAAQgDAAgCACQgCACgBADQgCAGAAAGIAAAfg");
	this.shape_112.setTransform(-79.5,-50.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgTAYQgIgJAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgLAAgIgIgAgKgSQgFAFgBAIIAhAAQgBgIgDgEQgFgFgIgBQgFABgFAEg");
	this.shape_113.setTransform(-85.3,-50.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgNAnQgFgEgEgHQgDgIAAgJQAAgKADgFQADgIAGgEQAGgEAHAAQAEAAAFADQAEACADAEIAAgfIALAAIAABUIgKAAIAAgIQgGAJgLAAQgGAAgHgEgAgKgFQgFAFABALQAAAMAEAGQAGAFAFAAQAGAAAFgFQAFgGAAgLQAAgMgFgFQgFgGgHAAQgFAAgFAGg");
	this.shape_114.setTransform(-92.2,-51.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgPAfIAAg8IAJAAIAAAJQAEgGACgCQACgCAEAAQAFAAAFADIgDAKQgEgCgEAAQgDAAgCACQgCACgBADQgCAGAAAGIAAAfg");
	this.shape_115.setTransform(-96.8,-50.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgUAYQgIgJAAgPQAAgQAKgIQAIgHAKAAQAMAAAIAIQAJAJAAAOQAAALgEAGQgEAIgHADQgGAEgIAAQgMAAgIgIgAgMgRQgFAHAAAKQAAAMAFAFQAGAGAGAAQAHAAAFgGQAGgGAAgLQAAgKgGgHQgFgFgHgBQgGABgGAFg");
	this.shape_116.setTransform(-102.6,-50.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AAOAfIAAgkQAAgGgBgDQgBgDgDgCQgEgCgEAAQgFAAgEAEQgFAEAAAMIAAAgIgLAAIAAg8IAKAAIAAAJQAHgKAKAAQAGAAAFACQAFACACADQACADABAFIABAKIAAAkg");
	this.shape_117.setTransform(-112.6,-50.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_118.setTransform(-117.6,-51.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.3,-60.4,960.2,17.4);


(lib.point = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQARQgIgHAAgKQAAgJAIgHQAHgIAJAAQAKAAAHAIQAIAHAAAJQAAAKgIAHQgHAIgKAAQgJAAgHgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,5,5);


(lib.FLIGHTCONTROLPanelcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.dif05stsp35_panel_1();
	this.instance.setTransform(-326.7,-144,0.5,0.5);

	this.instance_1 = new lib.dif05stsp35_panel_2();
	this.instance_1.setTransform(-326.7,-144,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-326.7,-144.1,286.1,411.6);


(lib.clockcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sts01p36_1minute();
	this.instance.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,167.4,94.5);


(lib.clock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sts01p35_clock();
	this.instance.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,167.4,94.5);


(lib.arrowcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// arrow
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,0,3).p("ABKhYIAAFrIiTAAIAAlrIhVAAICei3ICeC3g");
	this.shape.setTransform(-0.4,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AhJESIAAlsIhUAAICdi3ICeC3IhUAAIAAFsg");
	this.shape_1.setTransform(-0.4,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.4,-28.9,34,56.8);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,0,3).p("Ag0t1IAAA4IAAV7IhigBICaEuICTkvIhpABIAB15IAAg5");
	this.shape.setTransform(7.6,44.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFF00","rgba(255,255,0,0)"],[0,1],0.6,88.5,0.6,-99.3).s().p("AiWInIBiABIAA17IBjABIgBV5IBpgBIiTEug");
	this.shape_1.setTransform(7.6,46.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.5,-45,32.3,178.3);


(lib.point_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.point("synched",0);
	this.instance.setTransform(-62.1,1.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAAoIgFgFQgBgCAAgKIAAgiIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIAKAAIAAAIIgKAAIAAAjIAAAFIACACIAEABIAEAAIACAJIgIABQgGAAgBgCg");
	this.shape.setTransform(560.5,-1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgQAbQgHgFgBgKIAKgBQABAFAEAEQAEADAFAAQAIAAADgCQADgDAAgFQAAgDgCgCIgLgEIgOgEQgFgBgCgEQgDgEABgEQAAgFABgDIAGgGIAGgDIAJgBQAFAAAHACQAFACADAEQACAEABAFIgKABQgBgEgEgDQgDgCgFgBQgGABgDACQgDADAAADIABADIAEADIAIADIAPAEQAEABADADQACAEAAAFQAAAFgDAFQgDAFgGADQgFACgHAAQgLAAgGgFg");
	this.shape_1.setTransform(555.7,-0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgPAfIAAg8IAJAAIAAAJQAEgGACgCQACgCAEAAQAFAAAFADIgDAKQgEgCgEAAQgDAAgCACQgCACgBADQgCAGAAAGIAAAfg");
	this.shape_2.setTransform(551.2,-0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgEAqIAAg8IAJAAIAAA8gAgEgdIAAgMIAJAAIAAAMg");
	this.shape_3.setTransform(547.4,-1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgHArIAAg0IgKAAIAAgIIAKAAIAAgHIABgJQABgEAEgDQACgCAHAAIAKABIgCAJIgGAAQgFAAgCACQgCACAAAFIAAAGIAMAAIAAAIIgMAAIAAA0g");
	this.shape_4.setTransform(544.7,-2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgQAbQgGgFgCgKIAKgBQABAFAEAEQAEADAFAAQAIAAADgCQADgDAAgFQAAgDgCgCIgLgEIgOgEQgFgBgCgEQgDgEABgEQAAgFABgDIAGgGIAGgDIAJgBQAFAAAHACQAFACADAEQACAEABAFIgKABQgBgEgEgDQgDgCgFgBQgGABgDACQgEADABADIABADIAEADIAIADIAPAEQAEABADADQACAEAAAFQAAAFgDAFQgDAFgGADQgFACgHAAQgLAAgGgFg");
	this.shape_5.setTransform(536.4,-0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgTAXQgIgIAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAALAFAFQAGAFAFAAQAGAAAEgDQAEgDADgGIALABQgDAJgHAGQgHAFgLAAQgLAAgIgJgAgKgRQgFAEgBAIIAhAAQgBgIgDgDQgFgHgIAAQgFAAgFAGg");
	this.shape_6.setTransform(530.1,-0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAfAfIAAglIgBgJIgEgFQgCgBgEAAQgHAAgEAEQgEAEAAAKIAAAiIgIAAIAAgmQAAgHgDgEQgDgDgGAAQgEAAgEACQgDACgCAFQgCAEAAAIIAAAfIgKAAIAAg8IAJAAIAAAJQADgFAEgDQAFgCAHAAQAGAAAFACQACADADAGQAGgLANAAQAJAAAEAFQAGAFAAALIAAAog");
	this.shape_7.setTransform(521.8,-0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgUAXQgIgIAAgPQAAgQAKgIQAIgHAKAAQAMAAAIAIQAJAIAAAPQAAAKgEAIQgEAGgHAEQgGAEgIAAQgMAAgIgJgAgMgQQgFAFAAALQAAAMAFAGQAGAFAGAAQAHAAAFgFQAGgHAAgLQAAgLgGgFQgFgHgHAAQgGAAgGAHg");
	this.shape_8.setTransform(513.4,-0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgSAXQgIgIAAgPQAAgIAEgIQADgHAHgFQAHgDAGAAQAKAAAGAFQAHAFACAJIgLACQgBgGgEgEQgEgDgFAAQgGAAgFAHQgFAFAAALQAAAMAFAGQAFAFAGAAQAGAAAEgDQAEgEABgIIALABQgCALgHAGQgHAGgKAAQgLAAgIgJg");
	this.shape_9.setTransform(507.3,-0.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgPAfIAAg8IAJAAIAAAJQAEgGACgCQACgCAEAAQAFAAAFADIgDAKQgEgCgEAAQgDAAgCACQgCACgBADQgCAGAAAGIAAAfg");
	this.shape_10.setTransform(499.2,-0.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgTAXQgIgIAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAALAFAFQAGAFAFAAQAGAAAEgDQAEgDADgGIALABQgDAJgHAGQgHAFgLAAQgLAAgIgJgAgKgRQgFAEgBAIIAhAAQgBgIgDgDQgFgHgIAAQgFAAgFAGg");
	this.shape_11.setTransform(493.4,-0.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgDAeIgYg8IALAAIAOAjIACANIAEgMIANgkIALAAIgXA8g");
	this.shape_12.setTransform(487.1,-0.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgTAXQgIgIAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAALAFAFQAGAFAFAAQAGAAAEgDQAEgDADgGIALABQgDAJgHAGQgHAFgLAAQgLAAgIgJgAgKgRQgFAEgBAIIAhAAQgBgIgDgDQgFgHgIAAQgFAAgFAGg");
	this.shape_13.setTransform(480.8,-0.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAOAqIAAgnQAAgGgDgEQgEgDgGAAQgDAAgEACQgEADgCAEQgBACAAAHIAAAiIgLAAIAAhTIALAAIAAAeQAHgIAJAAQAHAAAFACQAFAEADAEQACAFAAAHIAAAng");
	this.shape_14.setTransform(474.1,-1.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgSAXQgIgIAAgPQAAgIAEgIQADgHAHgFQAHgDAGAAQAKAAAGAFQAHAFACAJIgLACQgBgGgEgEQgEgDgFAAQgGAAgFAHQgFAFAAALQAAAMAFAGQAFAFAGAAQAGAAAEgDQAEgEABgIIALABQgCALgHAGQgHAGgKAAQgLAAgIgJg");
	this.shape_15.setTransform(468,-0.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgEAqIAAg8IAJAAIAAA8gAgEgdIAAgMIAJAAIAAAMg");
	this.shape_16.setTransform(463.5,-1.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAOAqIAAgnQAAgGgDgEQgEgDgGAAQgDAAgEACQgEADgCAEQgBACAAAHIAAAiIgLAAIAAhTIALAAIAAAeQAHgIAJAAQAHAAAFACQAFAEADAEQACAFAAAHIAAAng");
	this.shape_17.setTransform(458.8,-1.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAMAeIgKgjIgCgKIgLAtIgLAAIgTg8IALAAIAJAiIAFAOIACgOIAKgiIAJAAIAJAiIAEANIADgNIALgiIAKAAIgTA8g");
	this.shape_18.setTransform(451.2,-0.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgFAJQAEgBABgDQAAgCAAgEIgEAAIAAgMIAKAAIAAAMQAAAEgCAFQgDAEgDACg");
	this.shape_19.setTransform(441.8,2.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAOAfIAAgkQAAgGgBgDQgBgDgDgCQgEgCgEAAQgFAAgEAEQgFAEAAAMIAAAgIgLAAIAAg8IAKAAIAAAJQAHgKAKAAQAGAAAFACQAFACACADQACADABAFIABAKIAAAkg");
	this.shape_20.setTransform(436.8,-0.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgUAXQgIgIAAgPQAAgQAKgIQAIgHAKAAQAMAAAIAIQAJAIAAAPQAAAKgEAIQgEAGgHAEQgGAEgIAAQgMAAgIgJgAgMgQQgFAFAAALQAAAMAFAGQAGAFAGAAQAHAAAFgFQAGgHAAgLQAAgLgGgFQgFgHgHAAQgGAAgGAHg");
	this.shape_21.setTransform(430.2,-0.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgEAqIAAg8IAJAAIAAA8gAgEgdIAAgMIAJAAIAAAMg");
	this.shape_22.setTransform(425.5,-1.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAAAoIgFgFQgBgCAAgKIAAgiIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIAKAAIAAAIIgKAAIAAAjIAAAFIACACIAEABIAEAAIACAJIgIABQgGAAgBgCg");
	this.shape_23.setTransform(422.6,-1.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgWAbQgFgFAAgIQAAgFACgDQACgEAEgCIAHgCIAJgCQALgBAGgCIAAgDQAAgGgDgDQgEgDgHgBQgGABgEACQgDADgCAGIgKgBQABgHADgEQAEgDAFgDQAGgCAHAAQAIAAAEABQAGADACADQADACABAFIAAAKIAAALIABATQAAAEACADIgLAAIgCgHQgGAFgFACQgEACgGAAQgKAAgGgFgAgBADQgGABgDABQgDABgCADQgBACAAADQAAAEADADQAEACAFAAQAFAAAFgCQAEgDACgFQACgDAAgHIAAgDIgPADg");
	this.shape_24.setTransform(417.5,-0.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgEAeIgXg8IALAAIANAjIADANIADgMIAPgkIAKAAIgYA8g");
	this.shape_25.setTransform(411.2,-0.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgEAqIAAg8IAJAAIAAA8gAgEgdIAAgMIAJAAIAAAMg");
	this.shape_26.setTransform(406.9,-1.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAAAoIgFgFQgBgCAAgKIAAgiIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIAKAAIAAAIIgKAAIAAAjIAAAFIACACIAEABIAEAAIACAJIgIABQgGAAgBgCg");
	this.shape_27.setTransform(403.9,-1.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgSAXQgIgIAAgPQAAgIAEgIQADgHAHgFQAHgDAGAAQAKAAAGAFQAHAFACAJIgLACQgBgGgEgEQgEgDgFAAQgGAAgFAHQgFAFAAALQAAAMAFAGQAFAFAGAAQAGAAAEgDQAEgEABgIIALABQgCALgHAGQgHAGgKAAQgLAAgIgJg");
	this.shape_28.setTransform(399.4,-0.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgWAbQgFgFAAgIQAAgFACgDQACgEAEgCIAHgCIAKgCQAKgBAGgCIAAgDQAAgGgDgDQgEgDgHgBQgGABgEACQgDADgCAGIgLgBQACgHAEgEQACgDAHgDQAFgCAGAAQAIAAAGABQAFADACADQADACABAFIAAAKIAAALIABATQAAAEACADIgLAAIgCgHQgGAFgFACQgEACgGAAQgKAAgGgFgAgBADQgGABgDABQgDABgCADQgBACAAADQAAAEADADQAEACAFAAQAEAAAGgCQAEgDACgFQACgDAAgHIAAgDIgPADg");
	this.shape_29.setTransform(392.9,-0.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgQApQgIgEgEgGQgFgIAAgIIALgBQABAHACADQADAEAGAEQAGACAFAAQAHAAAFgCQAFgCACgEQADgDAAgEQAAgEgDgDQgCgDgGgCIgNgEQgMgDgEgBQgHgCgDgGQgDgEAAgGQAAgHAEgFQAEgGAHgDQAHgDAIAAQAIAAAIADQAHADAEAHQAEAFAAAIIgLAAQgBgHgFgFQgFgEgJAAQgJAAgFAEQgFAEAAAFQAAAFAEADQADADAMADQAOADAFACQAHABAEAGQAEAFAAAHQAAAHgEAGQgEAGgIAEQgHADgJAAQgKAAgIgDg");
	this.shape_30.setTransform(382.2,-1.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAbAqIgKgaIgiAAIgJAaIgNAAIAihTIAJAAIAjBTgAgFgQIgJAXIAbAAIgJgVIgEgSQgCAIgDAIg");
	this.shape_31.setTransform(374.2,-1.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgSAnQgKgHgEgKQgEgLAAgLQAAgNAEgJQAGgLAJgFQAJgFAKAAQANAAAJAGQAIAIAEALIgLADQgDgJgGgFQgFgEgJAAQgIAAgGAEQgIAFgCAIQgDAIAAAIQAAAKAEAIQACAIAIAEQAGAEAGAAQAJAAAHgFQAGgGADgKIALACQgDAPgJAGQgKAIgNAAQgMAAgIgFg");
	this.shape_32.setTransform(366,-1.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAdAqIAAhGIgZBGIgIAAIgZhHIAABHIgLAAIAAhTIARAAIAVA6IACANIAEgOIAVg5IAPAAIAABTg");
	this.shape_33.setTransform(356.6,-1.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgRAnQgHgGAAgJIAKABQABAFADACQAEADAGAAQAGAAAEgDQAEgDABgFIABgOQgHAJgJgBQgMAAgHgJQgHgJAAgLQAAgJADgHQAEgIAGgEQAGgEAHAAQAKAAAHAJIAAgIIAKAAIAAA0QAAAPgDAFQgDAHgGADQgHAEgIAAQgKAAgHgFgAgKgcQgFAFAAAMQAAALAFAEQAFAGAFAAQAHAAAFgGQAFgEAAgLQAAgMgFgFQgFgHgHAAQgFAAgFAHg");
	this.shape_34.setTransform(344.7,0.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAOAfIAAgkQAAgGgBgDQgBgDgDgCQgEgCgEAAQgFAAgEAEQgFAEAAAMIAAAgIgLAAIAAg8IAKAAIAAAJQAHgKAKAAQAGAAAFACQAFACACADQACADABAFIABAKIAAAkg");
	this.shape_35.setTransform(338.2,-0.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgEAqIAAg8IAJAAIAAA8gAgEgdIAAgMIAJAAIAAAMg");
	this.shape_36.setTransform(333.6,-1.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAMAeIgKgjIgCgKIgLAtIgLAAIgTg8IALAAIAKAiIADAOIAEgOIAKgiIAJAAIAIAiIADANIAFgNIAKgiIAKAAIgTA8g");
	this.shape_37.setTransform(327.9,-0.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgUAXQgIgIAAgPQAAgQAKgIQAIgHAKAAQAMAAAIAIQAJAIAAAPQAAAKgEAIQgEAGgHAEQgGAEgIAAQgMAAgIgJgAgMgQQgFAFAAALQAAAMAFAGQAGAFAGAAQAHAAAFgFQAGgHAAgLQAAgLgGgFQgFgHgHAAQgGAAgGAHg");
	this.shape_38.setTransform(320.3,-0.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgEAqIAAhTIAJAAIAABTg");
	this.shape_39.setTransform(315.6,-1.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgEAqIAAhTIAJAAIAABTg");
	this.shape_40.setTransform(312.9,-1.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgUAXQgIgIAAgPQAAgQAKgIQAIgHAKAAQAMAAAIAIQAJAIAAAPQAAAKgEAIQgEAGgHAEQgGAEgIAAQgMAAgIgJgAgMgQQgFAFAAALQAAAMAFAGQAGAFAGAAQAHAAAFgFQAGgHAAgLQAAgLgGgFQgFgHgHAAQgGAAgGAHg");
	this.shape_41.setTransform(308.3,-0.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgHArIAAg0IgKAAIAAgIIAKAAIAAgHIABgJQABgEAEgDQACgCAHAAIAKABIgCAJIgGAAQgFAAgCACQgCACAAAFIAAAGIAMAAIAAAIIgMAAIAAA0g");
	this.shape_42.setTransform(303.6,-2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgTAXQgIgIAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAALAFAFQAGAFAFAAQAGAAAEgDQAEgDADgGIALABQgDAJgHAGQgHAFgLAAQgLAAgIgJgAgKgRQgFAEgBAIIAhAAQgBgIgDgDQgFgHgIAAQgFAAgFAGg");
	this.shape_43.setTransform(295,-0.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAAAoIgFgFQgBgCAAgKIAAgiIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIAKAAIAAAIIgKAAIAAAjIAAAFIACACIAEABIAEAAIACAJIgIABQgGAAgBgCg");
	this.shape_44.setTransform(290,-1.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgNAdQgEgCgDgDQgCgDgBgFIgBgKIAAgkIALAAIAAAgIABALQABAEADADQADACAFAAQADAAAEgCQAEgDACgEQABgEAAgIIAAgfIALAAIAAA8IgKAAIAAgJQgHAKgKAAQgGAAgFgCg");
	this.shape_45.setTransform(284.9,-0.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAOAfIAAgkQAAgGgBgDQgBgDgDgCQgEgCgEAAQgFAAgEAEQgFAEAAAMIAAAgIgLAAIAAg8IAKAAIAAAJQAHgKAKAAQAGAAAFACQAFACACADQACADABAFIABAKIAAAkg");
	this.shape_46.setTransform(278.3,-0.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgEAqIAAg8IAJAAIAAA8gAgEgdIAAgMIAJAAIAAAMg");
	this.shape_47.setTransform(273.7,-1.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAfAfIAAglIgBgJIgDgFQgDgBgEAAQgGAAgEAEQgFAEAAAKIAAAiIgIAAIAAgmQgBgHgCgEQgDgDgFAAQgFAAgEACQgEACgCAFQgBAEAAAIIAAAfIgKAAIAAg8IAJAAIAAAJQADgFAFgDQAFgCAFAAQAHAAAFACQACADACAGQAIgLALAAQAKAAAFAFQAEAFAAALIAAAog");
	this.shape_48.setTransform(267.4,-0.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgQAbQgGgFgCgKIAKgBQABAFAEAEQAEADAFAAQAHAAAEgCQAEgDAAgFQgBgDgDgCIgLgEIgOgEQgEgBgCgEQgCgEgBgEQAAgFACgDIAGgGIAHgDIAIgBQAFAAAGACQAGACACAEQADAEABAFIgLABQAAgEgDgDQgDgCgGgBQgGABgDACQgEADAAADIACADIAEADIAHADIAQAEQAFABACADQACAEABAFQAAAFgEAFQgDAFgGADQgFACgIAAQgKAAgGgFg");
	this.shape_49.setTransform(256,-0.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgNAdQgEgCgDgDQgCgDgBgFIgBgKIAAgkIALAAIAAAgIABALQABAEADADQADACAFAAQADAAAEgCQAEgDACgEQABgEAAgIIAAgfIALAAIAAA8IgKAAIAAgJQgHAKgKAAQgGAAgFgCg");
	this.shape_50.setTransform(249.6,-0.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgUAXQgIgIAAgPQAAgQAKgIQAIgHAKAAQAMAAAIAIQAJAIAAAPQAAAKgEAIQgEAGgHAEQgGAEgIAAQgMAAgIgJgAgMgQQgFAFAAALQAAAMAFAGQAGAFAGAAQAHAAAFgFQAGgHAAgLQAAgLgGgFQgFgHgHAAQgGAAgGAHg");
	this.shape_51.setTransform(243,-0.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgNAdQgEgCgDgDQgCgDgBgFIgBgKIAAgkIALAAIAAAgIABALQABAEADADQADACAFAAQADAAAEgCQAEgDACgEQABgEAAgIIAAgfIALAAIAAA8IgKAAIAAgJQgHAKgKAAQgGAAgFgCg");
	this.shape_52.setTransform(236.3,-0.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAOAfIAAgkQAAgGgBgDQgBgDgDgCQgEgCgEAAQgFAAgEAEQgFAEAAAMIAAAgIgLAAIAAg8IAKAAIAAAJQAHgKAKAAQAGAAAFACQAFACACADQACADABAFIABAKIAAAkg");
	this.shape_53.setTransform(229.7,-0.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgEAqIAAg8IAJAAIAAA8gAgEgdIAAgMIAJAAIAAAMg");
	this.shape_54.setTransform(225.1,-1.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAAAoIgFgFQgBgCAAgKIAAgiIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIAKAAIAAAIIgKAAIAAAjIAAAFIACACIAEABIAEAAIACAJIgIABQgGAAgBgCg");
	this.shape_55.setTransform(222.1,-1.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAOAfIAAgkQAAgGgBgDQgBgDgDgCQgEgCgEAAQgFAAgEAEQgFAEAAAMIAAAgIgLAAIAAg8IAKAAIAAAJQAHgKAKAAQAGAAAFACQAFACACADQACADABAFIABAKIAAAkg");
	this.shape_56.setTransform(217.1,-0.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgUAXQgIgIAAgPQAAgQAKgIQAIgHAKAAQAMAAAIAIQAJAIAAAPQAAAKgEAIQgEAGgHAEQgGAEgIAAQgMAAgIgJgAgMgQQgFAFAAALQAAAMAFAGQAGAFAGAAQAHAAAFgFQAGgHAAgLQAAgLgGgFQgFgHgHAAQgGAAgGAHg");
	this.shape_57.setTransform(210.4,-0.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgSAXQgIgIAAgPQAAgIAEgIQADgHAHgFQAHgDAGAAQAKAAAGAFQAHAFACAJIgLACQgBgGgEgEQgEgDgFAAQgGAAgFAHQgFAFAAALQAAAMAFAGQAFAFAGAAQAGAAAEgDQAEgEABgIIALABQgCALgHAGQgHAGgKAAQgLAAgIgJg");
	this.shape_58.setTransform(204.3,-0.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgTAXQgIgIAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAALAFAFQAGAFAFAAQAGAAAEgDQAEgDADgGIALABQgDAJgHAGQgHAFgLAAQgLAAgIgJgAgKgRQgFAEgBAIIAhAAQgBgIgDgDQgFgHgIAAQgFAAgFAGg");
	this.shape_59.setTransform(194.4,-0.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAOAfIAAgkQAAgGgBgDQgBgDgDgCQgEgCgEAAQgFAAgEAEQgFAEAAAMIAAAgIgLAAIAAg8IAKAAIAAAJQAHgKAKAAQAGAAAFACQAFACACADQACADABAFIABAKIAAAkg");
	this.shape_60.setTransform(187.8,-0.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgUAXQgIgIAAgPQAAgQAKgIQAIgHAKAAQAMAAAIAIQAJAIAAAPQAAAKgEAIQgEAGgHAEQgGAEgIAAQgMAAgIgJgAgMgQQgFAFAAALQAAAMAFAGQAGAFAGAAQAHAAAFgFQAGgHAAgLQAAgLgGgFQgFgHgHAAQgGAAgGAHg");
	this.shape_61.setTransform(181.1,-0.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgPAfIAAg8IAJAAIAAAJQAEgGACgCQACgCAEAAQAFAAAFADIgDAKQgEgCgEAAQgDAAgCACQgCACgBADQgCAGAAAGIAAAfg");
	this.shape_62.setTransform(172.9,-0.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgUAXQgIgIAAgPQAAgQAKgIQAIgHAKAAQAMAAAIAIQAJAIAAAPQAAAKgEAIQgEAGgHAEQgGAEgIAAQgMAAgIgJgAgMgQQgFAFAAALQAAAMAFAGQAGAFAGAAQAHAAAFgFQAGgHAAgLQAAgLgGgFQgFgHgHAAQgGAAgGAHg");
	this.shape_63.setTransform(167.1,-0.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgHArIAAg0IgKAAIAAgIIAKAAIAAgHIABgJQABgEAEgDQACgCAHAAIAKABIgCAJIgGAAQgFAAgCACQgCACAAAFIAAAGIAMAAIAAAIIgMAAIAAA0g");
	this.shape_64.setTransform(162.4,-2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgMAnQgHgEgDgHQgDgIgBgJQAAgKADgFQAEgIAGgEQAGgEAHAAQAEAAAFADQAEACADAEIAAgfIAKAAIAABUIgJAAIAAgIQgGAJgLAAQgGAAgGgEgAgKgFQgFAFAAALQABAMAFAGQAFAFAEAAQAIAAAEgFQAFgGAAgLQAAgMgFgFQgFgGgHAAQgFAAgFAGg");
	this.shape_65.setTransform(153.6,-1.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgTAXQgIgIAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAALAFAFQAGAFAFAAQAGAAAEgDQAEgDADgGIALABQgDAJgHAGQgHAFgLAAQgLAAgIgJgAgKgRQgFAEgBAIIAhAAQgBgIgDgDQgFgHgIAAQgFAAgFAGg");
	this.shape_66.setTransform(147.1,-0.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgRAnQgHgGAAgJIAKABQABAFADACQAEADAGAAQAGAAAEgDQAEgDABgFIABgOQgHAJgJgBQgMAAgHgJQgHgJAAgLQAAgJADgHQAEgIAGgEQAGgEAHAAQAKAAAHAJIAAgIIAKAAIAAA0QAAAPgDAFQgDAHgGADQgHAEgIAAQgKAAgHgFgAgKgcQgFAFAAAMQAAALAFAEQAFAGAFAAQAHAAAFgGQAFgEAAgLQAAgMgFgFQgFgHgHAAQgFAAgFAHg");
	this.shape_67.setTransform(140.3,0.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgWAbQgFgFAAgIQAAgFACgDQACgEADgCIAIgCIAJgCQALgBAGgCIAAgDQAAgGgDgDQgEgDgHgBQgGABgEACQgEADgBAGIgKgBQABgHADgEQADgDAGgDQAHgCAGAAQAHAAAFABQAFADADADQACACABAFIABAKIAAALIABATQAAAEACADIgLAAIgCgHQgGAFgFACQgEACgGAAQgKAAgGgFgAgBADQgGABgEABQgCABgBADQgCACAAADQAAAEADADQAEACAFAAQAFAAAEgCQAFgDACgFQACgDAAgHIAAgDIgPADg");
	this.shape_68.setTransform(133.8,-0.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgRAnQgHgGAAgJIAKABQABAFADACQAEADAGAAQAGAAAEgDQAEgDABgFIABgOQgHAJgJgBQgMAAgHgJQgHgJAAgLQAAgJADgHQAEgIAGgEQAGgEAHAAQAKAAAHAJIAAgIIAKAAIAAA0QAAAPgDAFQgDAHgGADQgHAEgIAAQgKAAgHgFgAgKgcQgFAFAAAMQAAALAFAEQAFAGAFAAQAHAAAFgGQAFgEAAgLQAAgMgFgFQgFgHgHAAQgFAAgFAHg");
	this.shape_69.setTransform(127,0.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AAOAfIAAgkQAAgGgBgDQgBgDgDgCQgEgCgEAAQgFAAgEAEQgFAEAAAMIAAAgIgLAAIAAg8IAKAAIAAAJQAHgKAKAAQAGAAAFACQAFACACADQACADABAFIABAKIAAAkg");
	this.shape_70.setTransform(120.5,-0.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgTAXQgIgIAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAALAFAFQAGAFAFAAQAGAAAEgDQAEgDADgGIALABQgDAJgHAGQgHAFgLAAQgLAAgIgJgAgKgRQgFAEgBAIIAhAAQgBgIgDgDQgFgHgIAAQgFAAgFAGg");
	this.shape_71.setTransform(113.9,-0.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAOAfIAAgkQAAgGgBgDQgBgDgDgCQgEgCgEAAQgFAAgEAEQgFAEAAAMIAAAgIgLAAIAAg8IAKAAIAAAJQAHgKAKAAQAGAAAFACQAFACACADQACADABAFIABAKIAAAkg");
	this.shape_72.setTransform(103.9,-0.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgTAXQgIgIAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAALAFAFQAGAFAFAAQAGAAAEgDQAEgDADgGIALABQgDAJgHAGQgHAFgLAAQgLAAgIgJgAgKgRQgFAEgBAIIAhAAQgBgIgDgDQgFgHgIAAQgFAAgFAGg");
	this.shape_73.setTransform(97.2,-0.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgTAXQgIgIAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAALAFAFQAGAFAFAAQAGAAAEgDQAEgDADgGIALABQgDAJgHAGQgHAFgLAAQgLAAgIgJgAgKgRQgFAEgBAIIAhAAQgBgIgDgDQgFgHgIAAQgFAAgFAGg");
	this.shape_74.setTransform(90.6,-0.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgQAiIAAAIIgKAAIAAhUIALAAIAAAeQAHgIAIAAQAFAAAGACQAFADAEAEQACAEACAGQACAEAAAHQAAAQgHAIQgJAJgKAAQgJAAgHgJgAgLgFQgFAFAAAKQAAALADAFQAFAIAIAAQAFAAAGgFQAEgHAAgLQAAgLgEgFQgFgGgGAAQgGAAgFAGg");
	this.shape_75.setTransform(84.1,-1.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgQAbQgGgFgCgKIAKgBQABAFAEAEQAEADAFAAQAIAAADgCQADgDAAgFQAAgDgCgCIgLgEIgOgEQgFgBgCgEQgDgEABgEQAAgFACgDIAFgGIAGgDIAJgBQAFAAAHACQAFACADAEQACAEABAFIgKABQgBgEgEgDQgDgCgFgBQgGABgDACQgDADAAADIABADIAEADIAIADIAPAEQAEABADADQACAEAAAFQAAAFgCAFQgEAFgGADQgFACgHAAQgLAAgGgFg");
	this.shape_76.setTransform(74.2,-0.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgVAbQgGgFAAgIQAAgFACgDQACgEADgCIAIgCIAJgCQALgBAGgCIAAgDQAAgGgDgDQgEgDgHgBQgGABgEACQgEADgBAGIgLgBQACgHADgEQAEgDAFgDQAGgCAHAAQAIAAAEABQAFADADADQADACAAAFIABAKIAAALIAAATQABAEACADIgLAAIgCgHQgGAFgFACQgEACgGAAQgKAAgFgFgAgBADQgHABgDABQgCABgBADQgCACAAADQAAAEAEADQACACAHAAQADAAAFgCQAFgDADgFQABgDAAgHIAAgDIgPADg");
	this.shape_77.setTransform(67.9,-0.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAOAqIAAgnQAAgGgDgEQgEgDgGAAQgDAAgEACQgEADgCAEQgBACAAAHIAAAiIgLAAIAAhTIALAAIAAAeQAHgIAJAAQAHAAAFACQAFAEADAEQACAFAAAHIAAAng");
	this.shape_78.setTransform(61.3,-1.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAAAoIgFgFQgBgCAAgKIAAgiIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIAKAAIAAAIIgKAAIAAAjIAAAFIACACIAEABIAEAAIACAJIgIABQgGAAgBgCg");
	this.shape_79.setTransform(53,-1.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgUAXQgIgIAAgPQAAgQAKgIQAIgHAKAAQAMAAAIAIQAJAIAAAPQAAAKgEAIQgEAGgHAEQgGAEgIAAQgMAAgIgJgAgMgQQgFAFAAALQAAAMAFAGQAGAFAGAAQAHAAAFgFQAGgHAAgLQAAgLgGgFQgFgHgHAAQgGAAgGAHg");
	this.shape_80.setTransform(47.9,-0.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgEAqIAAhTIAJAAIAABTg");
	this.shape_81.setTransform(43.2,-1.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgEAqIAAg8IAJAAIAAA8gAgEgdIAAgMIAJAAIAAAMg");
	this.shape_82.setTransform(40.6,-1.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgZArIAAhUIAJAAIAAAIQADgFAFgCQAEgCAEAAQAIAAAGAEQAGAEADAHQAEAIAAAJQAAAJgEAGQgDAIgHAEQgHAEgGAAQgEAAgEgDQgEgCgDgDIAAAegAgLgcQgFAGAAAMQAAALAFAFQAEAGAHAAQAGAAAFgGQAEgGAAgKQABgMgFgGQgFgGgGAAQgFAAgGAGg");
	this.shape_83.setTransform(36.2,0.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgUAXQgIgIAAgPQAAgQAKgIQAIgHAKAAQAMAAAIAIQAJAIAAAPQAAAKgEAIQgEAGgHAEQgGAEgIAAQgMAAgIgJgAgMgQQgFAFAAALQAAAMAFAGQAGAFAGAAQAHAAAFgFQAGgHAAgLQAAgLgGgFQgFgHgHAAQgGAAgGAHg");
	this.shape_84.setTransform(29.3,-0.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AAAAoIgFgFQgBgCAAgKIAAgiIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIAKAAIAAAIIgKAAIAAAjIAAAFIACACIAEABIAEAAIACAJIgIABQgGAAgBgCg");
	this.shape_85.setTransform(24.4,-1.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgNAdQgEgCgDgDQgCgDgBgFIgBgKIAAgkIALAAIAAAgIABALQABAEADADQADACAFAAQADAAAEgCQAEgDACgEQABgEAAgIIAAgfIALAAIAAA8IgKAAIAAgJQgHAKgKAAQgGAAgFgCg");
	this.shape_86.setTransform(19.3,-0.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgWAbQgFgFAAgIQAAgFACgDQACgEADgCIAIgCIAJgCQALgBAGgCIAAgDQAAgGgDgDQgEgDgHgBQgGABgEACQgDADgCAGIgKgBQABgHADgEQAEgDAFgDQAHgCAGAAQAHAAAFABQAFADADADQADACAAAFIABAKIAAALIAAATQABAEACADIgLAAIgCgHQgGAFgFACQgEACgGAAQgKAAgGgFgAgBADQgHABgDABQgCABgBADQgCACAAADQAAAEADADQAEACAFAAQAEAAAFgCQAFgDACgFQACgDAAgHIAAgDIgPADg");
	this.shape_87.setTransform(12.7,-0.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgTAXQgIgIAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAALAFAFQAGAFAFAAQAGAAAEgDQAEgDADgGIALABQgDAJgHAGQgHAFgLAAQgLAAgIgJgAgKgRQgFAEgBAIIAhAAQgBgIgDgDQgFgHgIAAQgFAAgFAGg");
	this.shape_88.setTransform(2.7,-0.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AAOAqIAAgnQAAgGgDgEQgEgDgGAAQgDAAgEACQgEADgCAEQgBACAAAHIAAAiIgLAAIAAhTIALAAIAAAeQAHgIAJAAQAHAAAFACQAFAEADAEQACAFAAAHIAAAng");
	this.shape_89.setTransform(-4,-1.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AAAAoIgFgFQgBgCAAgKIAAgiIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIAKAAIAAAIIgKAAIAAAjIAAAFIACACIAEABIAEAAIACAJIgIABQgGAAgBgCg");
	this.shape_90.setTransform(-8.9,-1.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgTAXQgIgIAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAALAFAFQAGAFAFAAQAGAAAEgDQAEgDADgGIALABQgDAJgHAGQgHAFgLAAQgLAAgIgJgAgKgRQgFAEgBAIIAhAAQgBgIgDgDQgFgHgIAAQgFAAgFAGg");
	this.shape_91.setTransform(-17.3,-0.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgPAfIAAg8IAJAAIAAAJQAEgGACgCQACgCAEAAQAFAAAFADIgDAKQgEgCgEAAQgDAAgCACQgCACgBADQgCAGAAAGIAAAfg");
	this.shape_92.setTransform(-22.2,-0.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgUAXQgIgIAAgPQAAgQAKgIQAIgHAKAAQAMAAAIAIQAJAIAAAPQAAAKgEAIQgEAGgHAEQgGAEgIAAQgMAAgIgJgAgMgQQgFAFAAALQAAAMAFAGQAGAFAGAAQAHAAAFgFQAGgHAAgLQAAgLgGgFQgFgHgHAAQgGAAgGAHg");
	this.shape_93.setTransform(-28,-0.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgHArIAAg0IgKAAIAAgIIAKAAIAAgHIABgJQABgEAEgDQACgCAHAAIAKABIgCAJIgGAAQgFAAgCACQgCACAAAFIAAAGIAMAAIAAAIIgMAAIAAA0g");
	this.shape_94.setTransform(-32.7,-2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgTAXQgIgIAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAALAFAFQAGAFAFAAQAGAAAEgDQAEgDADgGIALABQgDAJgHAGQgHAFgLAAQgLAAgIgJgAgKgRQgFAEgBAIIAhAAQgBgIgDgDQgFgHgIAAQgFAAgFAGg");
	this.shape_95.setTransform(-38,-0.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgfAqIAAhTIAfAAQAJAAAGACQAGADADAGQAEAFAAAFQAAAGgDAFQgDAFgGADQAIABAEAFQAEAFAAAHQAAAHgDAFQgCAFgEADQgEACgFACQgGACgIgBgAgUAhIAUAAIAIgBQADgBADgBQADgCABgDQACgEAAgEQAAgEgCgEQgDgEgEAAQgFgCgGAAIgUAAgAgUgFIATAAIAJgCQAEgBACgDQADgCAAgFQAAgEgCgEQgDgDgDgBQgEgBgHAAIgSAAg");
	this.shape_96.setTransform(-45.2,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.6,-10.4,628.9,17.4);


(lib.point_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.point("synched",0);
	this.instance.setTransform(-62.1,1.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgPAfIAAg8IAJAAIAAAJQAEgGACgCQACgCAEAAQAFAAAFADIgDAKQgEgCgEAAQgDAAgCACQgCACgBADQgCAGAAAGIAAAfg");
	this.shape.setTransform(209,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUAXQgIgIAAgPQAAgQAKgIQAIgHAKAAQAMAAAIAIQAJAIAAAPQAAAKgEAIQgEAGgHAEQgGAEgIAAQgMAAgIgJgAgMgQQgFAFAAALQAAAMAFAGQAGAFAGAAQAHAAAFgFQAGgHAAgLQAAgLgGgFQgFgHgHAAQgGAAgGAHg");
	this.shape_1.setTransform(203.2,-0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgFAJQAEgBABgDQAAgCAAgEIgEAAIAAgMIAKAAIAAAMQAAAEgCAFQgDAEgDACg");
	this.shape_2.setTransform(194.8,2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAOAfIAAgkQAAgGgBgDQgBgDgDgCQgEgCgEAAQgFAAgEAEQgFAEAAAMIAAAgIgLAAIAAg8IAKAAIAAAJQAHgKAKAAQAGAAAFACQAFACACADQACADABAFIABAKIAAAkg");
	this.shape_3.setTransform(189.8,-0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgUAXQgIgIAAgPQAAgQAKgIQAIgHAKAAQAMAAAIAIQAJAIAAAPQAAAKgEAIQgEAGgHAEQgGAEgIAAQgMAAgIgJgAgMgQQgFAFAAALQAAAMAFAGQAGAFAGAAQAHAAAFgFQAGgHAAgLQAAgLgGgFQgFgHgHAAQgGAAgGAHg");
	this.shape_4.setTransform(183.2,-0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgEAqIAAg8IAJAAIAAA8gAgEgdIAAgMIAJAAIAAAMg");
	this.shape_5.setTransform(178.5,-1.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAAAoIgFgFQgBgCAAgKIAAgiIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIAKAAIAAAIIgKAAIAAAjIAAAFIACACIAEABIAEAAIACAJIgIABQgGAAgBgCg");
	this.shape_6.setTransform(175.6,-1.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgVAbQgGgFAAgIQAAgFACgDQACgEADgCIAIgCIAJgCQALgBAGgCIAAgDQAAgGgDgDQgEgDgHgBQgGABgEACQgEADgBAGIgLgBQACgHAEgEQADgDAFgDQAGgCAHAAQAIAAAEABQAFADADADQADACAAAFIABAKIAAALIAAATQABAEACADIgLAAIgCgHQgGAFgFACQgEACgGAAQgKAAgFgFgAgBADQgHABgDABQgCABgBADQgCACAAADQAAAEAEADQACACAHAAQADAAAFgCQAFgDADgFQABgDAAgHIAAgDIgPADg");
	this.shape_7.setTransform(170.5,-0.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgDAeIgYg8IALAAIAOAjIACANIAEgMIANgkIALAAIgYA8g");
	this.shape_8.setTransform(164.2,-0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgEAqIAAg8IAJAAIAAA8gAgEgdIAAgMIAJAAIAAAMg");
	this.shape_9.setTransform(159.9,-1.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAAAoIgFgFQgBgCAAgKIAAgiIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIAKAAIAAAIIgKAAIAAAjIAAAFIACACIAEABIAEAAIACAJIgIABQgGAAgBgCg");
	this.shape_10.setTransform(156.9,-1.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgSAXQgIgIAAgPQAAgIAEgIQADgHAHgFQAHgDAGAAQAKAAAGAFQAHAFACAJIgLACQgBgGgEgEQgEgDgFAAQgGAAgFAHQgFAFAAALQAAAMAFAGQAFAFAGAAQAGAAAEgDQAEgEABgIIALABQgCALgHAGQgHAGgKAAQgLAAgIgJg");
	this.shape_11.setTransform(152.4,-0.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgVAbQgGgFAAgIQAAgFACgDQACgEADgCIAIgCIAJgCQALgBAGgCIAAgDQAAgGgDgDQgEgDgHgBQgGABgEACQgDADgCAGIgKgBQABgHADgEQAEgDAFgDQAHgCAGAAQAHAAAFABQAFADADADQADACAAAFIABAKIAAALIAAATQABAEACADIgLAAIgCgHQgGAFgFACQgEACgGAAQgKAAgFgFgAgBADQgHABgDABQgCABgBADQgCACAAADQAAAEADADQAEACAFAAQAEAAAFgCQAFgDACgFQACgDAAgHIAAgDIgPADg");
	this.shape_12.setTransform(145.9,-0.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgQApQgIgEgEgGQgFgIAAgIIALgBQABAHACADQADAEAGAEQAGACAFAAQAHAAAFgCQAFgCACgEQADgDAAgEQAAgEgDgDQgCgDgGgCIgNgEQgMgDgEgBQgHgCgDgGQgDgEAAgGQAAgHAEgFQAEgGAHgDQAHgDAIAAQAIAAAIADQAHADAEAHQAEAFAAAIIgLAAQgBgHgFgFQgFgEgJAAQgJAAgFAEQgFAEAAAFQAAAFAEADQADADAMADQAOADAFACQAHABAEAGQAEAFAAAHQAAAHgEAGQgEAGgIAEQgHADgJAAQgKAAgIgDg");
	this.shape_13.setTransform(135.2,-1.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAbAqIgLgaIghAAIgKAaIgLAAIAhhTIAKAAIAjBTgAgEgQIgKAXIAbAAIgIgVIgFgSQgBAIgDAIg");
	this.shape_14.setTransform(127.2,-1.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgTAnQgIgHgFgKQgFgLAAgLQABgNAFgJQAEgLAKgFQAKgFAJAAQANAAAIAGQAKAIADALIgLADQgDgJgGgFQgFgEgJAAQgIAAgHAEQgGAFgDAIQgDAIAAAIQAAAKADAIQAEAIAGAEQAHAEAGAAQAKAAAGgFQAHgGACgKIAMACQgEAPgKAGQgIAIgOAAQgMAAgJgFg");
	this.shape_15.setTransform(119,-1.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAeAqIAAhGIgZBGIgJAAIgYhHIAABHIgLAAIAAhTIARAAIAUA6IACANIAFgOIAUg5IAQAAIAABTg");
	this.shape_16.setTransform(109.6,-1.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgRAnQgHgGAAgJIAKABQABAFADACQAEADAGAAQAGAAAEgDQAEgDABgFIABgOQgHAJgJgBQgMAAgHgJQgHgJAAgLQAAgJADgHQAEgIAGgEQAGgEAHAAQAKAAAHAJIAAgIIAKAAIAAA0QAAAPgDAFQgDAHgGADQgHAEgIAAQgKAAgHgFgAgKgcQgFAFAAAMQAAALAFAEQAFAGAFAAQAHAAAFgGQAFgEAAgLQAAgMgFgFQgFgHgHAAQgFAAgFAHg");
	this.shape_17.setTransform(97.7,0.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAOAfIAAgkQAAgGgBgDQgBgDgDgCQgEgCgEAAQgFAAgEAEQgFAEAAAMIAAAgIgLAAIAAg8IAKAAIAAAJQAHgKAKAAQAGAAAFACQAFACACADQACADABAFIABAKIAAAkg");
	this.shape_18.setTransform(91.2,-0.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgEAqIAAg8IAJAAIAAA8gAgEgdIAAgMIAJAAIAAAMg");
	this.shape_19.setTransform(86.6,-1.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAMAeIgKgjIgCgKIgLAtIgLAAIgTg8IALAAIAJAiIAFAOIACgOIAKgiIAKAAIAJAiIADANIADgNIALgiIAKAAIgTA8g");
	this.shape_20.setTransform(80.9,-0.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgUAXQgIgIAAgPQAAgQAKgIQAIgHAKAAQAMAAAIAIQAJAIAAAPQAAAKgEAIQgEAGgHAEQgGAEgIAAQgMAAgIgJgAgMgQQgFAFAAALQAAAMAFAGQAGAFAGAAQAHAAAFgFQAGgHAAgLQAAgLgGgFQgFgHgHAAQgGAAgGAHg");
	this.shape_21.setTransform(73.3,-0.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgEAqIAAhTIAJAAIAABTg");
	this.shape_22.setTransform(68.6,-1.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgEAqIAAhTIAJAAIAABTg");
	this.shape_23.setTransform(65.9,-1.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgUAXQgIgIAAgPQAAgQAKgIQAIgHAKAAQAMAAAIAIQAJAIAAAPQAAAKgEAIQgEAGgHAEQgGAEgIAAQgMAAgIgJgAgMgQQgFAFAAALQAAAMAFAGQAGAFAGAAQAHAAAFgFQAGgHAAgLQAAgLgGgFQgFgHgHAAQgGAAgGAHg");
	this.shape_24.setTransform(61.3,-0.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgHArIAAg0IgKAAIAAgIIAKAAIAAgHIABgJQABgEAEgDQACgCAHAAIAKABIgCAJIgGAAQgFAAgCACQgCACAAAFIAAAGIAMAAIAAAIIgMAAIAAA0g");
	this.shape_25.setTransform(56.6,-2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgQAbQgHgFgCgKIALgBQABAFAEAEQAEADAFAAQAIAAADgCQADgDABgFQAAgDgEgCIgLgEIgOgEQgEgBgCgEQgDgEAAgEQABgFACgDIAEgGIAHgDIAJgBQAGAAAFACQAGACACAEQADAEABAFIgKABQgBgEgEgDQgDgCgFgBQgGABgDACQgDADAAADIABADIAEADIAHADIAQAEQAFABACADQACAEAAAFQAAAFgCAFQgEAFgFADQgHACgHAAQgKAAgGgFg");
	this.shape_26.setTransform(48.3,-0.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgTAXQgIgIAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAALAFAFQAGAFAFAAQAGAAAEgDQAEgDADgGIALABQgDAJgHAGQgHAFgLAAQgLAAgIgJgAgKgRQgFAEgBAIIAhAAQgBgIgDgDQgFgHgIAAQgFAAgFAGg");
	this.shape_27.setTransform(42,-0.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAAAoIgFgFQgBgCAAgKIAAgiIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIAKAAIAAAIIgKAAIAAAjIAAAFIACACIAEABIAEAAIACAJIgIABQgGAAgBgCg");
	this.shape_28.setTransform(37,-1.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgNAdQgEgCgDgDQgCgDgBgFIgBgKIAAgkIALAAIAAAgIABALQABAEADADQADACAFAAQADAAAEgCQAEgDACgEQABgEAAgIIAAgfIALAAIAAA8IgKAAIAAgJQgHAKgKAAQgGAAgFgCg");
	this.shape_29.setTransform(31.9,-0.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAOAfIAAgkQAAgGgBgDQgBgDgDgCQgEgCgEAAQgFAAgEAEQgFAEAAAMIAAAgIgLAAIAAg8IAKAAIAAAJQAHgKAKAAQAGAAAFACQAFACACADQACADABAFIABAKIAAAkg");
	this.shape_30.setTransform(25.3,-0.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgEAqIAAg8IAJAAIAAA8gAgEgdIAAgMIAJAAIAAAMg");
	this.shape_31.setTransform(20.7,-1.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAfAfIAAglIgBgJQgBgDgDgCQgCgBgEAAQgGAAgEAEQgFAEAAAKIAAAiIgIAAIAAgmQgBgHgCgEQgDgDgFAAQgFAAgEACQgEACgCAFQgBAEAAAIIAAAfIgKAAIAAg8IAJAAIAAAJQADgFAFgDQAEgCAHAAQAGAAAFACQADADACAGQAGgLAMAAQAKAAAFAFQAEAFAAALIAAAog");
	this.shape_32.setTransform(14.4,-0.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgTAXQgIgIAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAALAFAFQAGAFAFAAQAGAAAEgDQAEgDADgGIALABQgDAJgHAGQgHAFgLAAQgLAAgIgJgAgKgRQgFAEgBAIIAhAAQgBgIgDgDQgFgHgIAAQgFAAgFAGg");
	this.shape_33.setTransform(2.7,-0.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgDAeIgYg8IALAAIANAjIADANIAEgMIANgkIALAAIgYA8g");
	this.shape_34.setTransform(-3.6,-0.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgEAqIAAg8IAJAAIAAA8gAgEgdIAAgMIAJAAIAAAMg");
	this.shape_35.setTransform(-8,-1.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgHArIAAg0IgKAAIAAgIIAKAAIAAgHIABgJQABgEAEgDQACgCAHAAIAKABIgCAJIgGAAQgFAAgCACQgCACAAAFIAAAGIAMAAIAAAIIgMAAIAAA0g");
	this.shape_36.setTransform(-10.7,-2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAOAfIAAgkQAAgGgBgDQgBgDgDgCQgEgCgEAAQgFAAgEAEQgFAEAAAMIAAAgIgLAAIAAg8IAKAAIAAAJQAHgKAKAAQAGAAAFACQAFACACADQACADABAFIABAKIAAAkg");
	this.shape_37.setTransform(-19.3,-0.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgEAqIAAg8IAJAAIAAA8gAgEgdIAAgMIAJAAIAAAMg");
	this.shape_38.setTransform(-24,-1.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAOAqIAAgnQAAgGgDgEQgEgDgGAAQgDAAgEACQgEADgCAEQgBACAAAHIAAAiIgLAAIAAhTIALAAIAAAeQAHgIAJAAQAHAAAFACQAFAEADAEQACAFAAAHIAAAng");
	this.shape_39.setTransform(-28.6,-1.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAAAoIgFgFQgBgCAAgKIAAgiIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIAKAAIAAAIIgKAAIAAAjIAAAFIACACIAEABIAEAAIACAJIgIABQgGAAgBgCg");
	this.shape_40.setTransform(-33.6,-1.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgEAqIAAg8IAJAAIAAA8gAgEgdIAAgMIAJAAIAAAMg");
	this.shape_41.setTransform(-36.6,-1.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAUAqIgSg/IgCgKIgBAKIgSA/IgMAAIgXhTIAMAAIANA2IAEASIADgRIARg3IAMAAIAMApQAEARACAOIAFgTIANg1IAMAAIgYBTg");
	this.shape_42.setTransform(-43.6,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.6,-10.4,277.4,17.4);


(lib._labels = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.textbox45anglecopy("synched",0);
	this.instance.setTransform(167.1,84.1);

	this.instance_1 = new lib.textboxLside("synched",0);
	this.instance_1.setTransform(59.5,22.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.1,-1,339.5,91.9);


// stage content:
(lib.dif05stsp35 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{s1:0,s2:249,s3:395});

	// timeline functions:
	this.frame_0 = function() {
		/*   Normal Template  v1.0 (Jun 2015)
			 Designed for DreamSky Player v4.1+ or Aurora Html5 Player v1.0+
		 	 All rights reserved.
		*/
		
		var normalData = new Object();
		
		// Timeline variables and Functions
		this.outputData = "";
		this.saveTemplateData  = function (){
		
			parent.pageControllerAPI.setPrivateData(this.outputData);
			
		}
		
		this.init  = function(param)
		{
			this.outputData = param;
		}
		
		this.start = function (param) {
			normalData = param;	
			parent.pageControllerAPI.templateReady();
		}
	}
	this.frame_248 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
	}
	this.frame_394 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
	}
	this.frame_509 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(248).call(this.frame_248).wait(146).call(this.frame_394).wait(115).call(this.frame_509).wait(1));

	// prot
	this.prot = new lib.prot();
	this.prot.setTransform(500,275,1,1,0,0,0,500,275);

	this.timeline.addTween(cjs.Tween.get(this.prot).wait(510));

	// arr
	this.instance = new lib.arrowcopy("synched",0);
	this.instance.setTransform(287.4,407.5,1,1,90);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(317).to({_off:false},0).to({x:317.4,alpha:1},4).wait(23).to({startPosition:0},0).to({alpha:0},4).to({_off:true},1).wait(161));

	// panel
	this.instance_1 = new lib.FLIGHTCONTROLPanelcopy("single",0);
	this.instance_1.setTransform(252.4,330.4,0.9,0.9,0,0,0,-255.7,61.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(308).to({_off:false},0).to({alpha:1},5).wait(4).to({startPosition:1},0).wait(193));

	// clock2
	this.instance_2 = new lib.clockcopy("synched",0);
	this.instance_2.setTransform(204.1,293,1,1,0,0,0,83.7,47.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(187).to({_off:false},0).to({alpha:1},5).wait(51).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(261));

	// clock
	this.instance_3 = new lib.clock("synched",0);
	this.instance_3.setTransform(204.1,393,1,1,0,0,0,83.7,47.3);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(115).to({_off:false},0).to({alpha:1},5).wait(123).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(261));

	// arr
	this.instance_4 = new lib.arrow("synched",0);
	this.instance_4.setTransform(340.5,379.8,1,1,180,0,0,7.5,44.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(243).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(261));

	// labels
	this.instance_5 = new lib._labels("synched",0);
	this.instance_5.setTransform(718.2,402.5,1,1,0,0,0,95.4,68.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(243).to({startPosition:0},0).to({x:818.2},5).wait(262));

	// pic
	this.instance_6 = new lib.Symbol1copy("synched",0);
	this.instance_6.setTransform(514.5,341.2,0.9,0.9,0,0,0,150.5,194);

	this.instance_7 = new lib.Symbol1("synched",0);
	this.instance_7.setTransform(514.5,341.2,0.9,0.9,0,0,0,150.5,194);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},81).to({state:[{t:this.instance_7}]},162).to({state:[{t:this.instance_7}]},5).wait(262));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(81).to({_off:false},0).wait(162).to({startPosition:0},0).to({x:614.5},5).wait(262));

	// 5
	this.instance_8 = new lib.point_1copy2("synched",0);
	this.instance_8.setTransform(141.3,180.1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(395).to({_off:false},0).to({alpha:1},5).wait(110));

	// 4
	this.instance_9 = new lib.point_1copy("synched",0);
	this.instance_9.setTransform(141.3,140.1);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(249).to({_off:false},0).to({alpha:1},5).wait(256));

	// 3
	this.instance_10 = new lib.point_4("synched",0);
	this.instance_10.setTransform(96.4,64.9);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(160).to({_off:false},0).to({alpha:1},5).wait(345));

	// 2
	this.instance_11 = new lib.point_3("synched",0);
	this.instance_11.setTransform(96.4,45.9);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(115).to({_off:false},0).to({alpha:1},5).wait(390));

	// 1
	this.instance_12 = new lib.point_1("synched",0);
	this.instance_12.setTransform(141.3,76.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(510));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(500,275,1000,550);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;