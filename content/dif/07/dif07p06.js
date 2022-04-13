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
		{src:"images/fu01p07_chart.png", id:"fu01p07_chart"},
		{src:"images/sts01p35_clock.png", id:"sts01p35_clock"},
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



(lib.fu01p07_chart = function() {
	this.initialize(img.fu01p07_chart);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1847,336);


(lib.sts01p35_clock = function() {
	this.initialize(img.sts01p35_clock);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,105);


(lib.texture = function() {
	this.initialize(img.texture);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.prot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.texture();
	this.instance.setTransform(0,0,100,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1000,550);


(lib.point_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAIIAAgQIAQAAIAAAQg");
	this.shape.setTransform(248.6,61.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_1.setTransform(241.4,57.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQALAMABAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgIAAgIAHg");
	this.shape_2.setTransform(232,57.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgBA9QgFgDgCgFQgBgEAAgOIAAg0IgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_3.setTransform(224.6,56.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_4.setTransform(216.9,57.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_5.setTransform(207,57.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgHBAIAAhbIAOAAIAABbgAgHgsIAAgTIAOAAIAAATg");
	this.shape_6.setTransform(200,56.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_7.setTransform(190.5,57.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_8.setTransform(173.4,57.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_9.setTransform(163.9,57.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_10.setTransform(154,57.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_11.setTransform(143.9,57.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_12.setTransform(134,57.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgHBAIAAhbIAPAAIAABbgAgHgsIAAgTIAPAAIAAATg");
	this.shape_13.setTransform(127,56.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgBA9QgFgDgCgFQgBgEAAgOIAAg0IgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_14.setTransform(122.6,56.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_15.setTransform(115,57.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_16.setTransform(105,57.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_17.setTransform(95.8,57.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgdA2QgLgKgBgQIAQgBQACAMAHAGQAHAGAJAAQAKAAAHgIQAIgJAAgPQAAgNgHgGQgIgIgKAAQgIABgGADQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAiQALgHALgBQARAAAMANQALAJAAASQAAASgKAMQgMAQgUAAQgRAAgMgKg");
	this.shape_18.setTransform(81,56.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAJAAAIAFIgFAPQgHgEgFAAQgFAAgDADQgDADgCAGQgDAIAAAKIAAAvg");
	this.shape_19.setTransform(68.7,57.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_20.setTransform(60,57.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgMIAOAAIAAgLQAAgIACgFQACgGAGgEQADgEALAAIAPACIgCANIgKgBQgHAAgDADQgDAEAAAIIAAAJIASAAIAAAMIgSAAIAABPg");
	this.shape_21.setTransform(52.9,56);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_22.setTransform(40,57.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_23.setTransform(29.9,57.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_24.setTransform(23,56.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AghApQgJgIAAgLQABgHADgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAKgDAJAAQANAAAHADQAHACAEAFQADAEABAGIABAPIAAATQAAAWACAGQABAGADAFIgRAAQgDgFAAgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgDADAAAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_25.setTransform(16,57.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgGAuIgjhbIAQAAIAUA2IAFATIAFgSIAVg3IAQAAIgjBbg");
	this.shape_26.setTransform(6.5,57.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgMAAgOQAAgNAFgKQAFgLAJgHQAJgFALAAQAHgBAGAEQAHAEAEAFIAAguIAQAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgPgJQgIAJABAQQAAATAHAIQAIAJAIAAQAKAAAIgJQAGgIABgSQgBgRgGgJQgIgIgLgBQgJABgGAIg");
	this.shape_27.setTransform(355.7,34.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_28.setTransform(349,34);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_29.setTransform(342,35.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgFQgGgGgJAAQgFAAgGAEQgHADgCAHQgDAEAAALIAAAzIgPAAIAAh/IAPAAIAAAuQAMgNAOABQAKAAAIADQAIAFADAHQADAHAAAMIAAA7g");
	this.shape_30.setTransform(332,34);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_31.setTransform(322.4,35.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_32.setTransform(313,35.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAGAAQAHAAAJAFIgFAPQgHgEgFAAQgFAAgDADQgEADgBAGQgDAIAAAKIAAAvg");
	this.shape_33.setTransform(305.7,35.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgFQgGgGgJAAQgFAAgGAEQgGADgDAHQgDAEAAALIAAAzIgPAAIAAh/IAPAAIAAAuQAMgNAOABQALAAAHADQAIAFADAHQAEAHgBAMIAAA7g");
	this.shape_34.setTransform(297,34);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgNIAMAAIAAgXIANgJIAAAgIAQAAIAAANIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_35.setTransform(289.6,34.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgTA7QgKgGgFgLQgFgMAAgOQAAgNAFgKQAFgLAJgHQAJgFALAAQAHgBAGAEQAHAEAFAFIAAguIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgQgJQgHAJAAAQQAAATAIAIQAHAJAJAAQAKAAAHgJQAIgIAAgSQAAgRgIgJQgHgIgLgBQgJABgHAIg");
	this.shape_36.setTransform(276.7,34.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_37.setTransform(267,35.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_38.setTransform(257,35.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgGBAIAAhcIAOAAIAABcgAgGgtIAAgSIAOAAIAAASg");
	this.shape_39.setTransform(250,34);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_40.setTransform(240.5,35.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAJAAAIAFIgFAPQgHgEgFAAQgFAAgDADQgDADgCAGQgDAIAAAKIAAAvg");
	this.shape_41.setTransform(230.7,35.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_42.setTransform(222,35.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgNIAMAAIAAgXIANgJIAAAgIAQAAIAAANIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_43.setTransform(214.6,34.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgeAkQgLgNAAgXQAAgVALgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgLAAQgJAAgIAHg");
	this.shape_44.setTransform(207,35.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgMAAgOQAAgNAFgKQAEgLAKgHQAJgFALAAQAHgBAHAEQAGAEAFAFIAAguIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgQgJQgGAJgBAQQAAATAIAIQAHAJAJAAQAKAAAHgJQAIgIAAgSQAAgRgIgJQgHgIgLgBQgIABgIAIg");
	this.shape_45.setTransform(196.7,34.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgXAHIAAgOIAvAAIAAAOg");
	this.shape_46.setTransform(189,35.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_47.setTransform(181,35.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgFgEgGAAQgGAAgCADQgDADgDAGQgCAIAAAKIAAAvg");
	this.shape_48.setTransform(173.7,35.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgnBBIAAh/IAOAAIAAAMQAGgHAGgEQAGgDAHAAQAMAAAKAGQAIAGAFALQAFAMAAANQAAAOgFAKQgFALgKAGQgKAGgKAAQgHAAgGgDQgGgDgFgFIAAAtgAgRgqQgIAJAAASQAAAQAHAJQAIAIAKAAQAIAAAIgJQAIgIAAgRQAAgSgIgJQgHgJgJAAQgKAAgHAKg");
	this.shape_49.setTransform(165.3,37.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQADgKAEgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgGADgJAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_50.setTransform(150,35.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_51.setTransform(135.4,35.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgMAAgOQAAgNAFgKQAFgLAJgHQAJgFALAAQAHgBAHAEQAGAEAFAFIAAguIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgQgJQgGAJgBAQQAAATAIAIQAHAJAJAAQAKAAAHgJQAIgIAAgSQAAgRgIgJQgHgIgLgBQgIABgIAIg");
	this.shape_52.setTransform(125.7,34.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgNAAQgIAAgIAHg");
	this.shape_53.setTransform(116,35.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgIAAgIAHg");
	this.shape_54.setTransform(106,35.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_55.setTransform(96.8,35.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAYAuIgTgdIgFgIIgXAlIgTAAIAiguIgfgtIATAAIAOAWIAGAKIAGgKIAQgWIATAAIghAsIAjAvg");
	this.shape_56.setTransform(87.5,35.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgMgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_57.setTransform(78,35.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AASAuIgPg2IgDgQIgRBGIgRAAIgchbIAQAAIAOA0IAHAUIAEgTIAPg1IAOAAIAOA0IAFASIAFgSIAQg0IAQAAIgdBbg");
	this.shape_58.setTransform(61.5,35.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_59.setTransform(50,35.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_60.setTransform(43,34);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgJQAAgKACgEQACgHAGgDQAEgEAKAAIAPABIgDAPIgJgCQgHABgDADQgDACAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_61.setTransform(38.9,33.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgGBAIAAh/IAOAAIAAB/g");
	this.shape_62.setTransform(29,34);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_63.setTransform(22,35.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_64.setTransform(11.9,35.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgJQAAgKACgEQACgHAGgDQAEgEAKAAIAPABIgDAPIgJgCQgHABgDADQgDACAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_65.setTransform(4.9,33.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgLAAgOQAAgOAFgKQAEgMAKgFQAJgHALAAQAHABAGADQAHADAEAHIAAgvIAQAAIAAB/IgPAAIAAgMQgIAOgRAAQgKAAgJgGgAgPgIQgIAIABARQAAARAHAJQAIAJAIAAQAKAAAIgIQAGgJAAgRQAAgSgGgIQgIgJgLAAQgJAAgGAJg");
	this.shape_66.setTransform(344.7,12);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQAMAMgBAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_67.setTransform(335,13.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_68.setTransform(327.6,12.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_69.setTransform(320.8,13.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgdAkQgMgNgBgXQABgVAMgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgLgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_70.setTransform(311,13.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgnBBIAAh/IAOAAIAAAMQAGgHAGgEQAGgDAHAAQAMAAAKAGQAIAGAFALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgGAAgHgDQgGgDgFgFIAAAtgAgRgqQgIAJAAASQAAAQAHAJQAIAIAKAAQAIAAAIgJQAIgIAAgRQAAgSgIgJQgHgJgJAAQgKAAgHAKg");
	this.shape_71.setTransform(301.3,15.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAYAuIgUgdIgEgIIgXAlIgTAAIAiguIgggtIAUAAIAOAWIAGAKIAGgKIAQgWIASAAIgfAsIAiAvg");
	this.shape_72.setTransform(291.5,13.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgVAMgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAIAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_73.setTransform(282,13.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgdA6QgNgJgGgQQgIgQABgRQAAgUAHgOQAIgQAOgHQAOgIAQAAQATAAANAKQANAKAFARIgRAFQgEgOgIgHQgJgGgNAAQgNgBgKAIQgKAHgEAMQgEAMAAAMQAAAPAFANQAEALALAHQAKAFAJAAQAPAAAKgHQAKgJAEgQIAQAEQgFAVgOALQgOALgUAAQgTAAgNgIg");
	this.shape_74.setTransform(265.6,11.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AAsBAIAAhqIglBqIgNAAIgmhrIAABrIgQAAIAAh/IAZAAIAfBaIAEATIAHgVIAfhYIAXAAIAAB/g");
	this.shape_75.setTransform(251.5,11.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgqBAIAAh/IBVAAIAAAPIhEAAIAAApIA7AAIAAAMIg7AAIAAA7g");
	this.shape_76.setTransform(238.8,11.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_77.setTransform(223,13.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_78.setTransform(215.6,12.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgLAAgOQAAgOAFgKQAFgMAJgFQAJgHALAAQAHABAGADQAHADAEAHIAAgvIAQAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgPgIQgIAIABARQAAARAHAJQAIAJAIAAQAKAAAIgIQAGgJABgRQgBgSgGgIQgIgJgLAAQgJAAgGAJg");
	this.shape_79.setTransform(202.7,12);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgLAAQgKAAgHAHg");
	this.shape_80.setTransform(193,13.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAJAAAIAFIgFAPQgHgEgFAAQgFAAgDADQgDADgCAGQgDAIAAAKIAAAvg");
	this.shape_81.setTransform(185.7,13.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQADgKAEgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgGADgJAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_82.setTransform(177,13.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgnBBIAAh/IAOAAIAAAMQAGgHAGgEQAGgDAHAAQAMAAAKAGQAIAGAFALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgGAAgHgDQgGgDgEgFIAAAtgAgRgqQgIAJAAASQAAAQAHAJQAIAIAKAAQAIAAAIgJQAIgIgBgRQABgSgIgJQgHgJgJAAQgKAAgHAKg");
	this.shape_83.setTransform(167.3,15.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_84.setTransform(154.5,13.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_85.setTransform(142,13.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_86.setTransform(132.8,13.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AASAuIgPg2IgDgQIgRBGIgRAAIgchbIAQAAIAOA0IAHAUIAEgTIAPg1IAOAAIAOA0IAFASIAFgSIAQg0IAPAAIgcBbg");
	this.shape_87.setTransform(116.5,13.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_88.setTransform(105,13.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_89.setTransform(98,11.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgKQAAgIACgFQACgHAGgDQADgEALAAIAPABIgDAOIgJAAQgHAAgDACQgDADAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_90.setTransform(93.9,11.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgGBAIAAh/IAOAAIAAB/g");
	this.shape_91.setTransform(84,11.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgdAkQgMgNgBgXQABgVAMgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAIAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_92.setTransform(77,13.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_93.setTransform(66.9,13.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgKQAAgIACgFQACgHAGgDQAEgEAKAAIAPABIgDAOIgJAAQgHAAgDACQgDADAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_94.setTransform(59.9,11.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_95.setTransform(50,11.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AghApQgJgIAAgLQABgHADgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQADgKAEgGQAFgHAJgDQAKgDAJAAQANAAAHADQAHACAEAFQADAEABAGIABAPIAAATQAAAWACAGQABAGACAFIgQAAQgDgFAAgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgDADAAAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_96.setTransform(43,13.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_97.setTransform(32.9,13.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_98.setTransform(25.6,12.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_99.setTransform(18.8,13.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AAoBAIgOgnIg0AAIgPAnIgSAAIAyh/IAQAAIA1B/gAgHgYIgPAjIAqAAIgNgiIgHgbQgDANgEANg");
	this.shape_100.setTransform(8,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,363.2,68.3);


(lib.point = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQARQgIgHAAgKQAAgJAIgHQAHgIAJAAQAKAAAHAIQAIAHAAAJQAAAKgIAHQgHAIgKAAQgJAAgHgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,5,5);


(lib.pipes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PNG
	this.instance = new lib.fu01p07_chart();
	this.instance.setTransform(-445,-36.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-445,-36.4,924,168.4);


(lib.hl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(5,0,0,3).p("Al9lvIL7AAIAALfIr7AAg");
	this.shape.setTransform(51.2,20.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10.5,-19,81.5,78.7);


(lib.flapspointer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSAaIhCgaIBCgZIBnAAIAAAzg");
	this.shape.setTransform(8.5,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17.1,5.4);


(lib.ENGPRI_fuelgaugectr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("ACsChIAqAYADGBSIAwAFAC9AAIAvgNAirChIgrAZAjFBSIgwAGAi9AAIgugNAiThGIgkghAhQh3IgUgtAAAiIIAAgxABRh3IAUgtACUhGIAkgg");
	this.shape.setTransform(24.8,18.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.8,-1,52.4,39.7);


(lib.ENGPRI_fuelgauge2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AC9AAIAvgNADGBSIAwAFACsChIAqAYABRh3IAUgtAAAiIIAAgxAhQh3IgUgtAiThGIgkghAi9AAIgugNAjFBSIgwAGAirChIgrAZACUhGIAkgg");
	this.shape.setTransform(24.8,18.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// white
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjnDBIgCgDQgfg5AAhGQAAhrBOhOIAAgBQBOhNBsAAQBtAABOBOQBOBOAABrQAAAPgDAeIgjgGQADgTAAgUQAAhdhEhEQhDhDhfAAQheAAhEBDIAAAAQhDBEAABdQAAA8AbAxIABADIAAAAIAGAJIgfARg");
	this.shape_1.setTransform(24.8,18.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-1.7,53.1,40.4);


(lib.ENGPRI_fuelgauge1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("ACsChIAqAYADGBSIAwAFAC9AAIAvgNAirChIgrAZAjFBSIgwAGAi9AAIgugNAiThGIgkghAhQh3IgUgtAAAiIIAAgxABRh3IAUgtACUhGIAkgg");
	this.shape.setTransform(24.8,18.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// white
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjnDBIgCgDQgfg5AAhGQAAhrBOhOIAAgBQBOhNBsAAQBtAABOBOQBOBOAABrQAAAVgBANIgkgFQACgOAAgPQAAhdhEhEQhDhDhfAAQheAAhEBDIAAAAQhDBEAABdQAAA8AbAxIABADIAAAAIAGAJIgfARg");
	this.shape_1.setTransform(24.8,18.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-1.7,53.1,40.4);


(lib.cancel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(5,0,0,3).p("AiVAtIB4AAIABgCIA4hVIAIgLIByAAAiVg1IC5AAIA/hgAgdAtICzAAAhjCVIBGho");
	this.shape.setTransform(15,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,35,35);


(lib.B787SynopticENGINEAllPositionscopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AATA7IgThEIgRBEIgQAAIgIh1IAOAAIAEBYIAAAAIABAAIAQg8IANAAIAQA8IAAAAIABAAIAEhYIANAAIgGB1g");
	this.shape.setTransform(264.4,186.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AggApQgJgRAAgYQAAgXAJgRQALgWAVAAQAWAAALAWQAKAQgBAYQABAYgKARQgLAWgWAAQgVAAgLgWgAgVgfQgGAOAAARQAAATAGANQAGASAPAAQAQAAAGgSQAGgOAAgSQAAgRgGgOQgGgSgQAAQgOAAgHASg");
	this.shape_1.setTransform(255.1,186.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AghA7IAAh1IAOAAIAABnIA1AAIAAAOg");
	this.shape_2.setTransform(245.8,186.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcA7IAAh1IA5AAIAAAOIgsAAIAAAoIAmAAIAAAKIgmAAIAAA1g");
	this.shape_3.setTransform(236.5,186.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AghA7IAAh1IAOAAIAABnIA1AAIAAAOg");
	this.shape_4.setTransform(217.9,186.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AghA7IAAh1IA6AAIAAAOIgrAAIAAAkIAlAAIAAALIglAAIAAAqIA0AAIAAAOg");
	this.shape_5.setTransform(208.6,186.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgdAyQgIgLAAgWIAAhNIAOAAIAABKQgBAQAFAJQAGAJAOABQAPgBAGgNQADgIAAgSIAAhFIANAAIAABKQAAAvglAAQgVAAgJgLg");
	this.shape_6.setTransform(199.3,186.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgcA7IAAh1IA5AAIAAAOIgsAAIAAAoIAnAAIAAAKIgnAAIAAA1g");
	this.shape_7.setTransform(190,186.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgFA7IAAhpIgiAAIAAgMIBPAAIAAAMIgiAAIAABpg");
	this.shape_8.setTransform(250.5,147.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AghAgIAOAAQAAAKAFAFQAGADAIAAQAIAAAGgGQAGgGgBgJQABgMgRgIIgNgJQgKgDgEgHQgGgIAAgLQAAgQAKgIQAIgJAOAAQALAAAHAHQAIAHAAAMIgOAAQAAgGgFgEQgFgEgEAAQgHAAgEAGQgFAGAAAHQAAANAQAJIAOAIQAJADAFAHQAGAIAAALQAAAQgJAJQgKAKgPAAQghAAAAgfg");
	this.shape_9.setTransform(241.2,147.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgdAxQgIgKAAgWIAAhNIAOAAIAABLQAAAQAEAHQAGAKAOAAQAPAAAFgMQAEgKABgQIAAhGIAMAAIAABJQAAAwglAAQgVAAgJgMg");
	this.shape_10.setTransform(231.9,147.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AATA7QgGgRgGgKQgGgMgJgMIgMAAIAAAzIgOAAIAAh1IAgAAQALAAAIAJQAHAJAAANQABAYgUAJQAJAFAJATIALAdgAgUgCIAMAAQAJAAAFgHQAGgGAAgLQAAgUgTAAIgNAAg");
	this.shape_11.setTransform(222.6,147.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAWA7IAAg2IgrAAIAAA2IgOAAIAAh1IAOAAIAAA1IArAAIAAg1IAOAAIAAB1g");
	this.shape_12.setTransform(213.3,147.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgFA7IAAhpIgiAAIAAgMIBPAAIAAAMIgiAAIAABpg");
	this.shape_13.setTransform(204,147.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AggA7IAAh1IA5AAIAAAOIgsAAIAAAkIAnAAIAAALIgnAAIAAAqIA0AAIAAAOg");
	this.shape_14.setTransform(259.8,115.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AATA7QgGgRgGgKQgGgMgJgMIgMAAIAAAzIgOAAIAAh1IAgAAQALAAAIAJQAHAJAAANQABAYgUAJQAJAFAJATIALAdgAgUgCIAMAAQAJAAAFgHQAGgGAAgLQAAgUgTAAIgNAAg");
	this.shape_15.setTransform(250.5,115.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgdAyQgIgLAAgWIAAhNIANAAIAABLQABAQAEAHQAHALANAAQAPAAAFgOQAFgJAAgRIAAhFIAMAAIAABKQAAAvgmAAQgUAAgJgLg");
	this.shape_16.setTransform(241.2,115.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AghAgIAOAAQAAAKAFAFQAFADAJAAQAIAAAGgGQAFgGABgJQgBgMgQgIIgOgJQgIgDgFgHQgGgIAAgLQAAgQAJgIQAKgJANAAQALAAAIAHQAHAHAAAMIgOAAQAAgGgFgEQgFgEgEAAQgGAAgFAGQgFAGAAAHQAAANAQAJIAOAIQAJADAFAHQAGAIAAALQAAAQgKAJQgIAKgQAAQghAAAAgfg");
	this.shape_17.setTransform(231.9,115.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AghAgIAOAAQAAAKAGAFQAEADAJAAQAJAAAFgGQAGgGAAgJQAAgMgQgIIgPgJQgJgDgEgHQgGgIAAgLQAAgQAKgIQAJgJANAAQALAAAIAHQAHAHAAAMIgOAAQAAgGgFgEQgFgEgEAAQgGAAgFAGQgFAGAAAHQAAANAQAJIAOAIQAKADAEAHQAGAIAAALQAAAQgKAJQgIAKgQAAQggAAgBgfg");
	this.shape_18.setTransform(222.6,115.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AghA7IAAh1IA6AAIAAAOIgrAAIAAAkIAlAAIAAALIglAAIAAAqIA0AAIAAAOg");
	this.shape_19.setTransform(213.3,115.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AATA7QgGgRgFgKQgHgMgIgMIgNAAIAAAzIgNAAIAAh1IAeAAQAMAAAIAJQAIAJgBANQAAAYgTAJQAJAFAJATIAMAdgAgUgCIANAAQAIAAAFgHQAFgGAAgLQAAgUgRAAIgOAAg");
	this.shape_20.setTransform(204,115.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AghA7IAAh1IAhAAQAQAAAIAHQAKAIAAASQAAAXgRAIQgNAGgXAAIAAAvgAgTAAIANAAQAaAAAAgZQAAgVgUAAIgTAAg");
	this.shape_21.setTransform(194.7,115.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AggA7IAAh1IANAAIAABnIA0AAIAAAOg");
	this.shape_22.setTransform(255.1,100.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgUA7IAAgNIAPAAIAAhbIgPAAIAAgNIAqAAIAAANIgQAAIAABbIAQAAIAAANg");
	this.shape_23.setTransform(245.8,100.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AghApQgJgRAAgYQAAgXAJgRQAMgWAVAAQAWAAAMAWQAIAQABAYQgBAYgIARQgMAWgWAAQgVAAgMgWgAgWgfQgFAOAAARQAAATAFANQAIASAOAAQAQAAAGgSQAGgOAAgSQAAgRgGgOQgGgSgQAAQgOAAgIASg");
	this.shape_24.setTransform(236.5,100.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AASA7IgShEIgRBEIgRAAIgHh1IAOAAIAEBYIAAAAIABAAIAQg8IANAAIAQA8IABAAIAAAAIAEhYIAOAAIgIB1g");
	this.shape_25.setTransform(217.9,100.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AghApQgJgRABgYQgBgXAJgRQAMgWAVAAQAWAAAMAWQAIAQABAYQgBAYgIARQgMAWgWAAQgVAAgMgWgAgWgfQgFAOAAARQAAATAFANQAIASAOAAQAQAAAGgSQAGgOAAgSQAAgRgGgOQgGgSgQAAQgOAAgIASg");
	this.shape_26.setTransform(208.6,100.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AggA7IAAh1IANAAIAABnIA0AAIAAAOg");
	this.shape_27.setTransform(199.3,100.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AghAgIAOAAQAAAKAGAFQAEADAJAAQAJAAAFgGQAGgGAAgJQAAgMgQgIIgOgJQgKgDgEgHQgGgIAAgLQAAgQAKgIQAJgJANAAQALAAAIAHQAHAHAAAMIgOAAQAAgGgFgEQgFgEgEAAQgGAAgFAGQgFAGAAAHQAAANAQAJIAOAIQAKADAEAHQAGAIAAALQAAAQgKAJQgIAKgQAAQggAAgBgfg");
	this.shape_28.setTransform(250.5,75.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AghAgIAOAAQAAAKAFAFQAGADAIAAQAIAAAGgGQAGgGgBgJQABgMgRgIIgNgJQgKgDgEgHQgGgIAAgLQAAgQAKgIQAIgJAOAAQALAAAHAHQAIAHAAAMIgOAAQAAgGgFgEQgFgEgEAAQgHAAgEAGQgFAGAAAHQAAANAQAJIAOAIQAJADAFAHQAGAIAAALQAAAQgJAJQgKAKgPAAQghAAAAgfg");
	this.shape_29.setTransform(241.2,75.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAeA7IgJggIgqAAIgKAgIgNAAIAoh1IAMAAIAlB1gAgQAOIAhAAIgRgzg");
	this.shape_30.setTransform(231.9,75.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AghA7IAAh1IAhAAQAQAAAIAHQAKAIAAASQAAAXgRAIQgNAGgXAAIAAAvgAgTAAIANAAQAaAAAAgZQAAgVgUAAIgTAAg");
	this.shape_31.setTransform(222.6,75.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgFA7IgBgLIABgSIgBgbIgQgcIgSghIAOAAIAaAwIAagwIAPAAIgSAhIgQAcIAAAbIAAAdg");
	this.shape_32.setTransform(213.3,75.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AghA7IAAh1IAaAAQAQAAAIAFQALAHAAATQAAAIgEAHQgEAIgHADQALABAFAIQAGAIAAAKQAAAhgkAAgAgUAvIAUAAQAUAAAAgTQABgNgLgGQgJgFgMAAIgJAAgAgUgGIAMAAQAIAAADgCQAFgCADgGQACgHAAgFIgBgGIgCgHQgCgCgEgCIgFgBIgTAAg");
	this.shape_33.setTransform(204,75.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AATA7QgHgRgEgKQgHgMgJgMIgMAAIAAAzIgOAAIAAh1IAgAAQALAAAIAJQAIAJAAANQAAAYgUAJQAJAFAJATIAMAdgAgUgCIAMAAQAJAAAFgHQAGgGgBgLQABgUgTAAIgNAAg");
	this.shape_34.setTransform(269.1,61.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AggA7IAAh1IA5AAIAAAOIgsAAIAAAkIAnAAIAAALIgnAAIAAAqIA0AAIAAAOg");
	this.shape_35.setTransform(259.8,61.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgFA7IAAhpIgiAAIAAgMIBPAAIAAAMIgiAAIAABpg");
	this.shape_36.setTransform(250.5,61.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AghA7IAAh1IAOAAIAABnIA1AAIAAAOg");
	this.shape_37.setTransform(241.2,61.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgVA7IAAgNIAQAAIAAhbIgQAAIAAgNIAqAAIAAANIgPAAIAABbIAPAAIAAANg");
	this.shape_38.setTransform(231.9,61.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgcA7IAAh1IA5AAIAAAOIgrAAIAAAoIAlAAIAAAKIglAAIAAA1g");
	this.shape_39.setTransform(222.6,61.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AggA7IAAh1IANAAIAABnIA0AAIAAAOg");
	this.shape_40.setTransform(204,61.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgUA7IAAgNIAPAAIAAhbIgPAAIAAgNIAqAAIAAANIgQAAIAABbIAQAAIAAANg");
	this.shape_41.setTransform(194.7,61.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AghApQgIgRgBgYQABgXAIgRQAMgWAVAAQAXAAALAWQAIAQABAYQgBAYgIARQgLAWgXAAQgVAAgMgWgAgWgfQgFAOAAARQAAATAFANQAIASAOAAQAPAAAIgSQAFgOAAgSQAAgRgFgOQgIgSgPAAQgOAAgIASg");
	this.shape_42.setTransform(185.4,61.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAYA7IgwhbIAABbIgMAAIAAh1IANAAIAwBaIAAgHIAAhTIAMAAIAAB1g");
	this.shape_43.setTransform(241.2,36.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AggA7IAAh1IA5AAIAAAOIgsAAIAAAkIAnAAIAAALIgnAAIAAAqIA0AAIAAAOg");
	this.shape_44.setTransform(231.9,36.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AghA7IAAh1IAhAAQAQAAAIAHQAKAIAAASQAAAXgRAIQgNAGgXAAIAAAvgAgTAAIANAAQAaAAAAgZQAAgVgUAAIgTAAg");
	this.shape_45.setTransform(222.6,36.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AghApQgIgRgBgYQABgXAIgRQAMgWAVAAQAXAAALAWQAIAQABAYQgBAYgIARQgLAWgXAAQgVAAgMgWgAgWgfQgFAOAAARQAAATAFANQAIASAOAAQAPAAAIgSQAFgOAAgSQAAgRgFgOQgIgSgPAAQgOAAgIASg");
	this.shape_46.setTransform(213.3,36.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AghA7IAAh1IA6AAIAAAOIgrAAIAAAkIAlAAIAAALIglAAIAAAqIA0AAIAAAOg");
	this.shape_47.setTransform(273.7,21.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgGA7Iglh1IANAAIAeBgIAehgIAOAAIgnB1g");
	this.shape_48.setTransform(264.4,21.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AggA7IAAh1IANAAIAABnIA0AAIAAAOg");
	this.shape_49.setTransform(255.1,21.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAeA7IgJggIgpAAIgLAgIgNAAIAph1IALAAIAlB1gAgQAOIAhAAIgRgzg");
	this.shape_50.setTransform(245.8,21.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgGA7Iglh1IANAAIAeBgIAehgIAOAAIgnB1g");
	this.shape_51.setTransform(236.5,21.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgFA7IAAhpIgiAAIAAgMIBPAAIAAAMIghAAIAABpg");
	this.shape_52.setTransform(217.9,21.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AATA7QgGgRgFgKQgHgMgIgMIgNAAIAAAzIgNAAIAAh1IAeAAQAMAAAIAJQAIAJAAANQgBAYgTAJQAJAFAJATIAMAdgAgUgCIANAAQAIAAAFgHQAFgGAAgLQAAgUgRAAIgOAAg");
	this.shape_53.setTransform(208.6,21.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAeA7IgJggIgqAAIgKAgIgNAAIAph1IALAAIAlB1gAgQAOIAhAAIgRgzg");
	this.shape_54.setTransform(199.3,21.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgFA7IAAhpIgiAAIAAgMIBPAAIAAAMIghAAIAABpg");
	this.shape_55.setTransform(190,21.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AghAgIAOAAQAAAKAFAFQAGADAIAAQAIAAAGgGQAFgGAAgJQAAgMgQgIIgOgJQgIgDgFgHQgGgIAAgLQAAgQAJgIQAJgJAOAAQALAAAHAHQAIAHAAAMIgOAAQAAgGgFgEQgFgEgEAAQgGAAgFAGQgFAGAAAHQAAANAQAJIAOAIQAKADAEAHQAGAIAAALQAAAQgJAJQgKAKgPAAQghAAAAgfg");
	this.shape_56.setTransform(180.7,21.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AATA7IgThEIgRBEIgQAAIgIh1IAOAAIAEBYIAAAAIABAAIARg8IAMAAIAQA8IAAAAIABAAIAEhYIANAAIgGB1g");
	this.shape_57.setTransform(149.2,186.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AggApQgJgRAAgYQAAgXAJgRQALgWAVAAQAWAAALAWQAKAQgBAYQABAYgKARQgLAWgWAAQgVAAgLgWgAgVgfQgGAOAAARQAAATAGANQAGASAPAAQAQAAAGgSQAGgOAAgSQAAgRgGgOQgGgSgQAAQgOAAgHASg");
	this.shape_58.setTransform(139.9,186.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AghA7IAAh1IAOAAIAABnIA1AAIAAAOg");
	this.shape_59.setTransform(130.6,186.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgcA7IAAh1IA5AAIAAAOIgsAAIAAAoIAmAAIAAAKIgmAAIAAA1g");
	this.shape_60.setTransform(121.3,186.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AghA7IAAh1IAOAAIAABnIA1AAIAAAOg");
	this.shape_61.setTransform(102.7,186.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AghA7IAAh1IA6AAIAAAOIgrAAIAAAkIAmAAIAAALIgmAAIAAAqIA0AAIAAAOg");
	this.shape_62.setTransform(93.4,186.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgdAyQgIgLAAgWIAAhNIAOAAIAABKQgBAQAFAJQAGAJAOABQAPgBAGgNQADgIAAgSIAAhFIANAAIAABKQAAAvglAAQgVAAgJgLg");
	this.shape_63.setTransform(84.1,186.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgcA7IAAh1IA5AAIAAAOIgsAAIAAAoIAnAAIAAAKIgnAAIAAA1g");
	this.shape_64.setTransform(74.8,186.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgFA7IAAhpIgiAAIAAgMIBPAAIAAAMIgiAAIAABpg");
	this.shape_65.setTransform(135.3,147.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AghAgIAOAAQAAAKAFAFQAGADAIAAQAJAAAFgGQAGgGgBgJQABgMgRgIIgNgJQgKgDgEgHQgGgIAAgLQAAgQAKgIQAIgJAOAAQALAAAHAHQAIAHAAAMIgOAAQAAgGgFgEQgFgEgEAAQgHAAgEAGQgFAGAAAHQAAANAQAJIAOAIQAJADAFAHQAGAIAAALQAAAQgJAJQgKAKgPAAQghAAAAgfg");
	this.shape_66.setTransform(126,147.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgdAxQgIgKAAgWIAAhNIAOAAIAABLQAAAQAEAHQAGAKAOAAQAPAAAFgMQAEgKABgQIAAhGIAMAAIAABJQAAAwglAAQgVAAgJgMg");
	this.shape_67.setTransform(116.7,147.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AATA7QgGgRgGgKQgGgMgJgMIgMAAIAAAzIgOAAIAAh1IAgAAQALAAAIAJQAHAJAAANQABAYgUAJQAJAFAJATIALAdgAgUgCIAMAAQAJAAAFgHQAGgGAAgLQAAgUgTAAIgNAAg");
	this.shape_68.setTransform(107.4,147.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAWA7IAAg2IgrAAIAAA2IgOAAIAAh1IAOAAIAAA1IArAAIAAg1IAOAAIAAB1g");
	this.shape_69.setTransform(98.1,147.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgFA7IAAhpIgiAAIAAgMIBPAAIAAAMIgiAAIAABpg");
	this.shape_70.setTransform(88.8,147.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AggA7IAAh1IA5AAIAAAOIgsAAIAAAkIAnAAIAAALIgnAAIAAAqIA0AAIAAAOg");
	this.shape_71.setTransform(144.6,115.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AATA7QgGgRgGgKQgGgMgJgMIgMAAIAAAzIgOAAIAAh1IAgAAQALAAAIAJQAHAJAAANQABAYgUAJQAJAFAJATIALAdgAgUgCIAMAAQAJAAAFgHQAGgGAAgLQAAgUgTAAIgNAAg");
	this.shape_72.setTransform(135.3,115.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgdAyQgIgLAAgWIAAhNIANAAIAABLQABAQAEAHQAHALANAAQAPAAAFgOQAFgJAAgRIAAhFIAMAAIAABKQAAAvgmAAQgUAAgJgLg");
	this.shape_73.setTransform(126,115.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AghAgIAOAAQAAAKAFAFQAFADAJAAQAIAAAGgGQAFgGABgJQgBgMgQgIIgOgJQgIgDgFgHQgGgIAAgLQAAgQAJgIQAKgJANAAQALAAAHAHQAIAHAAAMIgOAAQAAgGgFgEQgFgEgEAAQgGAAgFAGQgFAGAAAHQAAANAQAJIAOAIQAJADAFAHQAGAIAAALQAAAQgKAJQgIAKgQAAQghAAAAgfg");
	this.shape_74.setTransform(116.7,115.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AghAgIAOAAQAAAKAGAFQAEADAJAAQAJAAAFgGQAGgGAAgJQAAgMgQgIIgPgJQgJgDgEgHQgGgIAAgLQAAgQAKgIQAJgJANAAQALAAAIAHQAHAHAAAMIgOAAQAAgGgFgEQgFgEgEAAQgGAAgFAGQgFAGAAAHQAAANAQAJIAOAIQAKADAEAHQAGAIAAALQAAAQgKAJQgIAKgQAAQggAAgBgfg");
	this.shape_75.setTransform(107.4,115.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AghA7IAAh1IA6AAIAAAOIgrAAIAAAkIAlAAIAAALIglAAIAAAqIA0AAIAAAOg");
	this.shape_76.setTransform(98.1,115.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AATA7QgGgRgFgKQgHgMgIgMIgNAAIAAAzIgNAAIAAh1IAeAAQAMAAAIAJQAIAJgBANQAAAYgTAJQAJAFAJATIAMAdgAgUgCIANAAQAIAAAFgHQAFgGABgLQgBgUgRAAIgOAAg");
	this.shape_77.setTransform(88.8,115.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AghA7IAAh1IAhAAQAQAAAIAHQAKAIAAASQAAAXgRAIQgNAGgXAAIAAAvgAgTAAIANAAQAaAAAAgZQAAgVgUAAIgTAAg");
	this.shape_78.setTransform(79.5,115.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AggA7IAAh1IANAAIAABnIA0AAIAAAOg");
	this.shape_79.setTransform(139.9,100.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgUA7IAAgNIAPAAIAAhbIgPAAIAAgNIAqAAIAAANIgQAAIAABbIAQAAIAAANg");
	this.shape_80.setTransform(130.6,100.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AggApQgKgRABgYQgBgXAKgRQALgWAVAAQAWAAAMAWQAIAQABAYQgBAYgIARQgMAWgWAAQgVAAgLgWgAgWgfQgFAOAAARQAAATAFANQAIASAOAAQAQAAAGgSQAGgOAAgSQAAgRgGgOQgGgSgQAAQgOAAgIASg");
	this.shape_81.setTransform(121.3,100.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AASA7IgShEIgSBEIgQAAIgHh1IAOAAIAEBYIAAAAIABAAIAQg8IANAAIAQA8IABAAIAAAAIAEhYIAOAAIgIB1g");
	this.shape_82.setTransform(102.7,100.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AghApQgJgRAAgYQAAgXAJgRQAMgWAVAAQAWAAAMAWQAIAQABAYQgBAYgIARQgMAWgWAAQgVAAgMgWgAgWgfQgFAOAAARQAAATAFANQAIASAOAAQAQAAAGgSQAGgOAAgSQAAgRgGgOQgGgSgQAAQgOAAgIASg");
	this.shape_83.setTransform(93.4,100.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AggA7IAAh1IANAAIAABnIA0AAIAAAOg");
	this.shape_84.setTransform(84.1,100.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AghAgIAOAAQAAAKAGAFQAEADAJAAQAJAAAFgGQAGgGAAgJQAAgMgQgIIgPgJQgJgDgEgHQgGgIAAgLQAAgQAKgIQAJgJANAAQALAAAIAHQAHAHAAAMIgOAAQAAgGgFgEQgFgEgEAAQgGAAgFAGQgFAGAAAHQAAANAQAJIAOAIQAKADAEAHQAGAIAAALQAAAQgKAJQgIAKgQAAQggAAgBgfg");
	this.shape_85.setTransform(135.3,75.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AghAgIAOAAQAAAKAFAFQAGADAIAAQAJAAAFgGQAGgGgBgJQABgMgRgIIgNgJQgKgDgEgHQgGgIAAgLQAAgQAKgIQAIgJAOAAQALAAAHAHQAIAHAAAMIgOAAQAAgGgFgEQgFgEgEAAQgHAAgEAGQgFAGAAAHQAAANAQAJIAOAIQAJADAFAHQAGAIAAALQAAAQgJAJQgKAKgPAAQghAAAAgfg");
	this.shape_86.setTransform(126,75.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAeA7IgJggIgqAAIgKAgIgNAAIAoh1IAMAAIAlB1gAgQAOIAhAAIgRgzg");
	this.shape_87.setTransform(116.7,75.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AghA7IAAh1IAhAAQAQAAAIAHQAKAIAAASQAAAXgRAIQgNAGgXAAIAAAvgAgTAAIANAAQAaAAAAgZQAAgVgUAAIgTAAg");
	this.shape_88.setTransform(107.4,75.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgFA7IgBgLIABgSIgBgbIgQgcIgSghIAPAAIAZAwIAagwIAPAAIgSAhIgQAcIAAAbIAAAdg");
	this.shape_89.setTransform(98.1,75.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AghA7IAAh1IAaAAQAQAAAIAFQALAHAAATQAAAIgEAHQgEAIgHADQALABAFAIQAGAIAAAKQAAAhgkAAgAgUAvIAUAAQAUAAABgTQAAgNgLgGQgJgFgMAAIgJAAgAgUgGIAMAAQAIAAADgCQAFgCADgGQACgHAAgFIgBgGIgCgHQgCgCgEgCIgFgBIgTAAg");
	this.shape_90.setTransform(88.8,75.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AATA7QgHgRgEgKQgHgMgJgMIgMAAIAAAzIgOAAIAAh1IAgAAQALAAAIAJQAIAJAAANQAAAYgUAJQAJAFAJATIAMAdgAgUgCIAMAAQAJAAAFgHQAGgGgBgLQABgUgTAAIgNAAg");
	this.shape_91.setTransform(153.9,61.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AggA7IAAh1IA5AAIAAAOIgsAAIAAAkIAnAAIAAALIgnAAIAAAqIA0AAIAAAOg");
	this.shape_92.setTransform(144.6,61.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgFA7IAAhpIgiAAIAAgMIBPAAIAAAMIgiAAIAABpg");
	this.shape_93.setTransform(135.3,61.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AghA7IAAh1IAOAAIAABnIA1AAIAAAOg");
	this.shape_94.setTransform(126,61.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgVA7IAAgNIAQAAIAAhbIgQAAIAAgNIAqAAIAAANIgPAAIAABbIAPAAIAAANg");
	this.shape_95.setTransform(116.7,61.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgcA7IAAh1IA5AAIAAAOIgrAAIAAAoIAlAAIAAAKIglAAIAAA1g");
	this.shape_96.setTransform(107.4,61.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AggA7IAAh1IANAAIAABnIA0AAIAAAOg");
	this.shape_97.setTransform(88.8,61.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgUA7IAAgNIAPAAIAAhbIgPAAIAAgNIAqAAIAAANIgQAAIAABbIAQAAIAAANg");
	this.shape_98.setTransform(79.5,61.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AghApQgIgRgBgYQABgXAIgRQAMgWAVAAQAXAAALAWQAIAQABAYQgBAYgIARQgLAWgXAAQgVAAgMgWgAgWgfQgFAOAAARQAAATAFANQAIASAOAAQAPAAAIgSQAFgOAAgSQAAgRgFgOQgIgSgPAAQgOAAgIASg");
	this.shape_99.setTransform(70.2,61.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AAYA7IgwhbIAABbIgMAAIAAh1IANAAIAwBaIAAgHIAAhTIAMAAIAAB1g");
	this.shape_100.setTransform(126,36.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AggA7IAAh1IA5AAIAAAOIgsAAIAAAkIAnAAIAAALIgnAAIAAAqIA0AAIAAAOg");
	this.shape_101.setTransform(116.7,36.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AghA7IAAh1IAhAAQAQAAAIAHQAKAIAAASQAAAXgRAIQgNAGgXAAIAAAvgAgTAAIANAAQAaAAAAgZQAAgVgUAAIgTAAg");
	this.shape_102.setTransform(107.4,36.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AghApQgIgRgBgYQABgXAIgRQAMgWAVAAQAXAAALAWQAIAQABAYQgBAYgIARQgLAWgXAAQgVAAgMgWgAgWgfQgFAOAAARQAAATAFANQAIASAOAAQAPAAAIgSQAFgOAAgSQAAgRgFgOQgIgSgPAAQgOAAgIASg");
	this.shape_103.setTransform(98.1,36.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AghA7IAAh1IA6AAIAAAOIgrAAIAAAkIAlAAIAAALIglAAIAAAqIA0AAIAAAOg");
	this.shape_104.setTransform(158.5,21.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgGA7Iglh1IANAAIAeBgIAehgIAOAAIgnB1g");
	this.shape_105.setTransform(149.2,21.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AggA7IAAh1IANAAIAABnIA0AAIAAAOg");
	this.shape_106.setTransform(139.9,21.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AAeA7IgJggIgpAAIgLAgIgNAAIAph1IALAAIAlB1gAgQAOIAhAAIgRgzg");
	this.shape_107.setTransform(130.6,21.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgGA7Iglh1IANAAIAeBgIAehgIAOAAIgnB1g");
	this.shape_108.setTransform(121.3,21.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgFA7IAAhpIgiAAIAAgMIBPAAIAAAMIghAAIAABpg");
	this.shape_109.setTransform(102.7,21.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AATA7QgGgRgFgKQgHgMgIgMIgNAAIAAAzIgNAAIAAh1IAeAAQAMAAAIAJQAIAJAAANQgBAYgTAJQAJAFAJATIAMAdgAgUgCIANAAQAIAAAFgHQAFgGAAgLQAAgUgRAAIgOAAg");
	this.shape_110.setTransform(93.4,21.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AAeA7IgJggIgpAAIgLAgIgNAAIAph1IALAAIAlB1gAgQAOIAhAAIgRgzg");
	this.shape_111.setTransform(84.1,21.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgFA7IAAhpIgiAAIAAgMIBPAAIAAAMIghAAIAABpg");
	this.shape_112.setTransform(74.8,21.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AghAgIAOAAQAAAKAFAFQAGADAIAAQAIAAAGgGQAFgGABgJQgBgMgQgIIgOgJQgIgDgFgHQgGgIAAgLQAAgQAJgIQAJgJAOAAQALAAAHAHQAIAHAAAMIgOAAQAAgGgFgEQgFgEgEAAQgGAAgFAGQgFAGAAAHQAAANAQAJIAOAIQAKADAEAHQAGAIAAALQAAAQgJAJQgKAKgPAAQghAAAAgfg");
	this.shape_113.setTransform(65.5,21.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#00CCFF").s().p("AgfA9IAAgMQAAgPAIgMQAFgJAMgLIAOgOQAJgKgBgIQAAgIgFgFQgFgEgGAAQgQAAAAANIgMAAIAAgCQAAgKAJgIQAIgGALAAQAMAAAJAHQAJAIAAAPQAAAPgNANIgVATQgNAOgBAQIAyAAIAAAOg");
	this.shape_114.setTransform(244.1,1.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#00CCFF").s().p("AgbArQgKgQABgaQgBgYAJgRQALgWAWAAQANAAAJAIQALAIAAANIgNAAQgBgIgFgEQgGgEgIAAQgPAAgGASQgGANAAASQAAATAGANQAGASAPAAQAIAAAMgEIAAgiIgXAAIAAgMIAkAAIAAA2QgQAJgPAAQgWAAgMgUg");
	this.shape_115.setTransform(227.5,1.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#00CCFF").s().p("AAYA7IgvhbIAABbIgNAAIAAh1IAOAAIAuBaIAAgHIAAhTIANAAIAAB1g");
	this.shape_116.setTransform(219.2,1.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#00CCFF").s().p("AggA7IAAh1IA5AAIAAAOIgsAAIAAAkIAnAAIAAALIgnAAIAAAqIA0AAIAAAOg");
	this.shape_117.setTransform(210.9,1.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#00CCFF").s().p("AAGA7IAAgLIgLAAIAAALIgUAAIAAgLIAUAAIAAhbIgTAKIAAgOIAUgLIAKAAIAABqIAUAAIAAALgAAGA7IgLAAIAAgLIALAAIAAALgAAGAwg");
	this.shape_118.setTransform(129.1,1.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#00CCFF").s().p("AgbArQgJgQAAgaQgBgYAJgRQALgWAWAAQANAAAJAIQAKAIAAANIgMAAQgBgIgGgEQgFgEgIAAQgPAAgGASQgGANAAASQAAATAGANQAGASAQAAQAHAAAMgEIAAgiIgXAAIAAgMIAjAAIAAA2QgPAJgPAAQgXAAgLgUg");
	this.shape_119.setTransform(112.4,1.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#00CCFF").s().p("AAYA7IgvhbIAABbIgNAAIAAh1IANAAIAvBaIAAgHIAAhTIANAAIAAB1g");
	this.shape_120.setTransform(104.1,1.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#00CCFF").s().p("AggA7IAAh1IA5AAIAAAOIgsAAIAAAkIAnAAIAAALIgnAAIAAAqIA0AAIAAAOg");
	this.shape_121.setTransform(95.8,1.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FF9900").s().p("AoOC2IAAlrIQdAAIAAFrg");
	this.shape_122.setTransform(112.1,186.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AAwPHIAAlyIQeAAIAAFygAAwI8IAAlvIQeAAIAAFvgAxNI8IAAlvIQeAAIAAFvgAAwC0IAAlrIQeAAIAAFrgAxNC0IAAlrIQeAAIAAFrgAAwjQIAAlvIQeAAIAAFvgAxNjQIAAlvIQeAAIAAFvgAAwpYIAAltIQeAAIAAFtgAxNpYIAAltIQeAAIAAFtg");
	this.shape_123.setTransform(169.6,108.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#5E5D66").s().p("AAXQtIAA++IRQAAIAAe+gAAwQUIQeAAIAAlyIweAAgAAwKJIQeAAIAAluIweAAgAAwECIQeAAIAAlsIweAAgAAwiDIQeAAIAAluIweAAgAAwoKIQeAAIAAluIweAAgAxmQpIAA+6IRQAAIAAe6gAxNQQIQeAAIAAluIweAAgAxNKJIQeAAIAAluIweAAgAxNECIQeAAIAAlsIweAAgAxNiDIQeAAIAAluIweAAgAxNoKIQeAAIAAluIweAAgAFgubIAAiRIG1AAIAACRgAsdubIAAiRIG1AAIAACRg");
	this.shape_124.setTransform(169.6,100.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bg
	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("A0cTDMAAAgmGMAo6AAAMAAAAmGg");
	this.shape_125.setTransform(170,102.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_125).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(39,-19.7,262,244);


(lib.B787EICAS_Gauge_N1WhitePointer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AiEAAIEJAA");
	this.shape.setTransform(13.4,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,28.8,2);


(lib.B787EICAS_Gauge_N1RedLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1.5,1,1).p("AgTAAIAnAA");
	this.shape.setTransform(29.3,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26.2,-1,6.2,2);


(lib.B787EICAS_Gauge_N1GreenRefTargetN1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#33C300").ss(1.5,1,1).p("AAoAdIgpgdIgmAAAAogcIgpAc");
	this.shape.setTransform(31.3,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26.3,-3.9,10.1,7.9);


(lib.B787EICAS_Gauge_EGTWhitePointer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AiEAAIEJAA");
	this.shape.setTransform(13.4,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,28.8,2);


(lib.B787EICAS_Gauge_EGTRedLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1.5,1,1).p("AgTAAIAnAA");
	this.shape.setTransform(29.3,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26.2,-1,6.2,2);


(lib.B787EICAS_Gauge_EGTAmberLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9900").ss(1.5,1,1).p("AgTAAIAnAA");
	this.shape.setTransform(29.3,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26.2,-1,6.2,2);


(lib._5min = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sts01p35_clock();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,186,105);


(lib.point_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.point("synched",0);
	this.instance.setTransform(-40.9,1.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape.setTransform(237.4,3.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_1.setTransform(230.5,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgGgEgFAAQgGAAgCADQgDADgDAGQgCAIAAAKIAAAvg");
	this.shape_2.setTransform(225.7,3.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgdAkQgMgNgBgXQABgVAMgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_3.setTransform(216.9,3.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_4.setTransform(209.9,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQAMAAAHADQAHACADAFQAEAEACAGIABAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgPACg");
	this.shape_5.setTransform(202.9,3.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgVAMgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAIAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_6.setTransform(187.9,3.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_7.setTransform(177.9,3.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgGBAIAAhbIANAAIAABbgAgGgtIAAgSIANAAIAAASg");
	this.shape_8.setTransform(171,1.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgbA7QgKgIAAgPIAQACQABAHAEAEQAGAEAKAAQAKAAAFgEQAGgFADgIQAAgEAAgQQgKAMgOAAQgSAAgLgOQgKgOAAgRQgBgNAFgMQAFgLAJgGQAJgGAMAAQAPAAALANIAAgLIAPAAIAABPQgBAVgEAKQgEAJgKAFQgJAFgNAAQgQAAgLgHgAgQgrQgIAIABARQgBASAIAHQAHAIAJAAQALAAAHgIQAIgHAAgSQAAgRgIgIQgIgJgKAAQgJAAgHAJg");
	this.shape_9.setTransform(163.7,5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_10.setTransform(153.9,3.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgLAAQgKAAgHAHg");
	this.shape_11.setTransform(143.9,3.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAGAAQAHAAAJAFIgGAPQgFgEgGAAQgFAAgDADQgEADgCAGQgCAIAAAKIAAAvg");
	this.shape_12.setTransform(131.7,3.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_13.setTransform(122.9,3.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgFQgGgGgJAAQgFAAgGAEQgGADgDAHQgDAEAAALIAAAzIgPAAIAAh/IAPAAIAAAuQAMgMAOAAQALAAAHADQAIAEADAIQAEAHgBAMIAAA7g");
	this.shape_14.setTransform(113,1.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_15.setTransform(105.5,1.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_16.setTransform(97.9,3.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgFQgGgGgJAAQgFAAgHAEQgGADgCAHQgDAEAAALIAAAzIgQAAIAAh/IAQAAIAAAuQAMgMAOAAQALAAAHADQAIAEADAIQADAHABAMIAAA7g");
	this.shape_17.setTransform(83,1.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_18.setTransform(75.5,1.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgHBAIAAhbIAOAAIAABbgAgHgtIAAgSIAOAAIAAASg");
	this.shape_19.setTransform(71,1.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AASAuIgPg2IgDgQIgSBGIgQAAIgdhbIARAAIAPA0IAFAUIAFgTIAPg1IAOAAIAOA0IAFASIAFgSIAQg0IAPAAIgdBbg");
	this.shape_20.setTransform(62.4,3.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgLAAgPQAAgNAFgKQAFgLAJgHQAJgFALAAQAHgBAGAEQAHAEAEAFIAAguIAQAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgPgJQgIAJABAQQAAASAHAJQAIAJAIAAQAKAAAIgJQAGgIABgSQgBgRgGgJQgIgJgLAAQgJAAgGAJg");
	this.shape_21.setTransform(45.6,1.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_22.setTransform(35.9,3.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AghA/IgCgPIAJACQAFAAAEgCQADgCACgDIAFgMIABgEIgjhbIARAAIATA2IAFAUIAGgUIAUg2IAQAAIgjBdIgHAVQgEAIgGAEQgFADgIAAQgEAAgGgCg");
	this.shape_23.setTransform(26.5,5.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AghApQgIgIgBgLQAAgHADgGQAEgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgFAEQgGAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAKgDAKAAQALAAAIADQAHACADAFQAFAEABAGIAAAPIAAATQAAAWABAGQABAGAEAFIgRAAQgCgFgBgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgDAFQgJACgEACQgEABgDAEQgBADAAAEQAAAHAEAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQADgFgBgLIAAgFQgIADgQACg");
	this.shape_24.setTransform(16.9,3.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_25.setTransform(9.9,1.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgnBBIAAh/IAPAAIAAAMQAFgHAGgEQAGgDAIAAQALAAAKAGQAJAGAEALQAFAMAAANQAAAOgFAKQgFALgKAGQgKAGgKAAQgHAAgGgDQgGgDgEgFIAAAtgAgRgqQgIAJAAASQAAAQAHAJQAIAIAKAAQAJAAAHgJQAIgIgBgRQABgSgIgJQgHgJgJAAQgJAAgIAKg");
	this.shape_26.setTransform(3.2,4.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_27.setTransform(-6.6,3.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgHBAIAAhbIAPAAIAABbgAgHgtIAAgSIAPAAIAAASg");
	this.shape_28.setTransform(-13,1.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("Ag0BAIAAh/IAtAAQANAAAHACQAMACAHAHQALAJAFAOQAFAMAAARQAAAOgEALQgDALgGAHQgFAIgGAEQgHAEgJADQgJACgJAAgAgjAxIAcAAQAKAAAIgDQAHgCAEgEQAGgGAEgKQADgLAAgNQAAgUgHgKQgGgLgKgEQgHgCgNAAIgbAAg");
	this.shape_29.setTransform(-21.3,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.4,-10.4,292.6,24.1);


(lib.point_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.point("synched",0);
	this.instance.setTransform(-62.1,1.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape.setTransform(162.7,3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_1.setTransform(152.7,3.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHBAIAAhbIAPAAIAABbgAgHgtIAAgSIAPAAIAAASg");
	this.shape_2.setTransform(145.7,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_3.setTransform(141.3,1.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgHBAIAAhbIAPAAIAABbgAgHgtIAAgSIAPAAIAAASg");
	this.shape_4.setTransform(136.7,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgLAAgPQAAgNAFgKQAFgLAJgHQAJgFALAAQAHgBAHAEQAGAEAEAFIAAguIAQAAIAAB/IgPAAIAAgMQgJAOgQAAQgKAAgJgGgAgQgJQgGAJAAAQQgBASAIAJQAHAJAJAAQAKAAAHgJQAIgIgBgSQABgRgIgJQgHgJgLAAQgIAAgIAJg");
	this.shape_5.setTransform(129.4,1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_6.setTransform(119.7,3.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_7.setTransform(109.7,3.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_8.setTransform(100.5,3.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AATBAIgdgwIgLALIAAAlIgQAAIAAh/IAQAAIAABHIAjgjIAUAAIgiAhIAmA6g");
	this.shape_9.setTransform(86.8,1.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAJgDIAAgEQAAgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAFAEABAGIABAPIAAATQAAAWAAAGQABAGADAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgDAEQgBADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQADgFgBgLIAAgFQgIADgQACg");
	this.shape_10.setTransform(76.7,3.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_11.setTransform(66.7,3.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgGBAIAAh/IAOAAIAAB/g");
	this.shape_12.setTransform(59.7,1.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgGBAIAAh/IAOAAIAAB/g");
	this.shape_13.setTransform(50.7,1.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgdAkQgMgNgBgXQABgVAMgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_14.setTransform(43.7,3.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_15.setTransform(33.6,3.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgMIAOAAIAAgKQAAgKACgEQACgHAGgDQAEgEAKAAIAPACIgDANIgJgBQgHAAgDAEQgDADAAAIIAAAJIASAAIAAAMIgSAAIAABPg");
	this.shape_16.setTransform(26.6,1.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQAMAMgBAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_17.setTransform(13.7,3.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_18.setTransform(6.7,1.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgYA0IAAALIgPAAIAAh/IAQAAIAAAuQAKgMANAAQAJgBAIAEQAHADAFAHQAFAGADAJQADAHAAAKQAAAYgMANQgMANgQAAQgPAAgJgNgAgRgJQgHAJAAAPQAAASAEAHQAIAMAMAAQAJAAAHgJQAIgJAAgSQAAgQgHgJQgIgJgJAAQgJAAgIAJg");
	this.shape_19.setTransform(-0.1,1.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgHBAIAAhbIAPAAIAABbgAgHgtIAAgSIAPAAIAAASg");
	this.shape_20.setTransform(-7.3,1.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_21.setTransform(-13.9,3.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_22.setTransform(-22.9,3.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_23.setTransform(-32.3,3.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgvBAIAAh/IAvAAQAMAAAGABQAKACAGAFQAHAEAEAIQAEAIAAAJQgBARgJAJQgLALgcAAIgeAAIAAA1gAgegBIAeAAQASAAAGgHQAHgGAAgLQAAgIgEgGQgEgFgHgCIgQgBIgeAAg");
	this.shape_24.setTransform(-43,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.6,-10.4,234.6,24.1);


(lib.B787EICAS_Gauge_N1Left = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Indicators
	this.instance = new lib.B787EICAS_Gauge_N1RedLine("synched",0);
	this.instance.setTransform(0,0,1,1,-152.5);

	this.instance_1 = new lib.B787EICAS_Gauge_N1GreenRefTargetN1("synched",0);
	this.instance_1.setTransform(0,0,1,1,-175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 2
	this.instance_2 = new lib.B787EICAS_Gauge_N1WhitePointer("synched",0);
	this.instance_2.setTransform(0,0,1,1,53);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNAUQgEgJAAgLQAAgKAEgJQAEgLAJAAQAKAAAEALQAEAJAAAKQAAALgEAJQgFALgJAAQgJAAgEgLgAgIgOQgCAHAAAHQAAAIACAHQADAKAFAAQAGAAADgKQACgHAAgIQAAgHgCgHQgDgJgGAAQgFAAgDAJg");
	this.shape.setTransform(-16.6,-4.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AADAdIgFAAIAAgGIAAAGIgKAAIAAgGIAKAAIAAgsIgKAFIAAgHIALgFIAEAAIAAAzIgFAAIAFAAIAAAGIAAgGIAKAAIAAAGgAADAXg");
	this.shape_1.setTransform(-20.7,-4.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLAaQgFgFAAgIQAAgKAKgFQgIgEAAgJQAAgHAEgDQAFgFAFAAQAGAAAEAFQAFAEAAAGQAAAFgCADIgGAFQAKAEAAALQAAAIgFAFQgFAFgHAAQgGAAgFgFgAgGAEQgDAEAAAEQAAAFADAEQADAEADAAQAEAAADgEQADgDAAgGQAAgEgDgEQgDgEgEAAQgDAAgDAEgAgFgVQgCADAAAEQAAAEACADQADACACAAQADAAADgCQACgDAAgEQAAgEgCgDQgDgCgDgBQgCABgDACg");
	this.shape_2.setTransform(-20.3,7.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPADQAAghARAAQAFAAAEADQAEAEAAAEIgGAAQAAgEgHAAQgFgBgDAJQgDAHAAAIIAAABQAGgGAFAAQAHAAAEAFQADAEAAAIQAAAHgDAGQgFAGgHAAQgQAAAAgcgAgGAEQgCAFAAAGQAAAEAEADQADADACAAQAEAAADgEQACgFAAgEQAAgGgCgCQgDgEgFAAQgDAAgDAEg");
	this.shape_3.setTransform(-10.6,18);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAIAdIAAgSIgVAAIAAgGIAVghIAGAAIAAAhIAAAGIAAASgAgIAFIAPAAIAAgXg");
	this.shape_4.setTransform(3.1,20.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPAeIAAgGQAAgHAEgGQADgFAGgFIAGgGQAEgFAAgEQAAgEgDgDQgCgCgDAAQgHAAAAAHIgHAAIAAgBQAAgFAFgEQAEgDAFAAQAGAAAEADQAFAEAAAHQAAAIgHAGIgKAJQgGAHAAAIIAYAAIAAAHg");
	this.shape_5.setTransform(16.1,12.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNATQgEgHAAgMQAAgKAEgIQAEgMAJAAQAKAAAEAMQAEAIAAAKQAAALgEAIQgFAMgJAAQgJAAgEgMgAgIgOQgCAGAAAIQAAAJACAGQADAKAFAAQAGAAADgKQACgGAAgJQAAgIgCgGQgDgKgGAAQgFAAgDAKg");
	this.shape_6.setTransform(21.2,1.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjzhYIgaAAAjkipIgZgJAi7BEIgUARAgpCaIgFAZAjmgEIgYAHAh5B9IgOAWAArCaIAEAZAC7BFIAUARAB7B8IANAXADmgCIAYAHAD0hVIAaAA");
	this.shape_7.setTransform(0,8.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2}]}).wait(1));

	// Line Work
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(1,1,1).p("AEyhIIlVAAIAAiUIFVAAgADpgvQAABvhPBOQhPBPhuAAQhwAAhPhPQhPhOAAhvQAAhEAeg4");
	this.shape_8.setTransform(3.6,4.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	// Grey Fill
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5E5D66").s().p("AiFhpIELAAQAABbg4BHIg0Axg");
	this.shape_9.setTransform(13.5,10.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.5,-23.9,98.9,73.2);


(lib.B787EICAS_Gauge_EGTLeft = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Indicators
	this.instance = new lib.B787EICAS_Gauge_EGTAmberLine("synched",0);
	this.instance.setTransform(0,0,1,1,-164.5);

	this.instance_1 = new lib.B787EICAS_Gauge_EGTRedLine("synched",0);
	this.instance_1.setTransform(0,0,1,1,-152.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9900").ss(1,1,1).p("AgJAaQAIgaALgZ");
	this.shape.setTransform(-25.1,-9.6);

	this.instance_2 = new lib.B787EICAS_Gauge_EGTWhitePointer("synched",0);
	this.instance_2.setTransform(0,0,1,1,100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Line Work
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("AEuhIIlMAAIAAiUIFMAAgADugvQAABvhQBOQhPBPhtAAQhxAAhPhPQhPhOAAhvQAAhEAeg4");
	this.shape_1.setTransform(3.2,4.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Grey Fill
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5E5D66").s().p("AiVB+IAukGIEMAAQAABQgtBCQgdAsglAaQg2AmhRALQg3AHgRABIgCAAQgUAAAagLg");
	this.shape_2.setTransform(10.4,13.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.5,-24.3,102.9,73.4);


(lib.text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.point_2("synched",0);
	this.instance.setTransform(78.7,60.7);

	this.instance_1 = new lib.point_1("synched",0);
	this.instance_1.setTransform(100,35.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgjA3QgNgMgDgVIAZgDQACANAIAGQAHAGAJAAQANAAAGgFQAHgGAAgHQAAgEgDgDQgDgEgGgCIgTgGQgVgFgIgFQgMgLAAgPQAAgKAFgJQAGgIAKgFQALgEAOAAQAXAAAMAKQAMALABASIgaABQgBgKgGgEQgFgFgKAAQgLAAgGAFQgEADgBAFQABAEAEAEQAEAEASAEQASAFAKAFQAIAEAFAHQAGAIAAAMQAAALgHAKQgFAKgMAEQgLAFgRAAQgWAAgNgLg");
	this.shape.setTransform(176.9,11.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMBAIAAhpIgmAAIAAgWIBlAAIAAAWIgnAAIAABpg");
	this.shape_1.setTransform(165.5,11.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAbBAIgTgcIgMgTQgEgEgEgBQgEgCgJAAIgGAAIAAA2IgaAAIAAh/IA3AAQATAAAKAEQAJADAFAJQAGAJAAAMQAAAOgJAJQgIAIgRACQAIAFAGAGQAGAGAJAPIAPAZgAgfgIIAUAAQARAAAFgCQAEgBADgEQACgFAAgFQAAgGgDgEQgEgFgGAAIgRgBIgVAAg");
	this.shape_2.setTransform(154.1,11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgvBAIAAh/IBdAAIAAAWIhDAAIAAAcIA+AAIAAAUIg+AAIAAAjIBGAAIAAAWg");
	this.shape_3.setTransform(141.2,11.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgsA/IAAh+IAaAAIAABpIA/AAIAAAVg");
	this.shape_4.setTransform(129.9,11.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAkBAIgMgdIgxAAIgLAdIgbAAIAyh/IAZAAIA0B/gAgRANIAhAAIgQgug");
	this.shape_5.setTransform(117.4,11.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAaBAIgahfIgYBfIgcAAIgfh/IAbAAIATBWIAXhWIAeAAIAWBYIAUhYIAaAAIgfB/g");
	this.shape_6.setTransform(98.1,11.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgsAwQgRgRAAgeQAAgTAFgNQAFgKAIgIQAIgHAIgEQANgFAOAAQAcAAARARQARATAAAdQAAAfgRARQgRASgcAAQgcAAgQgSgAgZgfQgJALgBAUQABAWAJAKQALAMAOAAQAPAAAKgLQAKgLAAgWQAAgVgKgLQgJgLgQAAQgPAAgKAMg");
	this.shape_7.setTransform(82.7,11.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgsA/IAAh+IAaAAIAABpIA/AAIAAAVg");
	this.shape_8.setTransform(70.5,11.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgqBAIAAh/IBVAAIAAAWIg8AAIAAAeIA0AAIAAAUIg0AAIAAA3g");
	this.shape_9.setTransform(59.4,11.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgsA/IAAh+IAaAAIAABpIA/AAIAAAVg");
	this.shape_10.setTransform(43.9,11.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgwBAIAAh/IBeAAIAAAWIhEAAIAAAcIA/AAIAAAUIg/AAIAAAjIBGAAIAAAWg");
	this.shape_11.setTransform(32.2,11.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgZA9QgJgFgGgGQgGgHgBgHQgDgMAAgVIAAhDIAaAAIAABEQAAAQABAGQACAHAGAFQAGAFAJAAQALAAAGgFQAGgEABgGIABgXIAAhFIAaAAIAABCQAAAXgCAKQgCAJgGAHQgGAGgJAFQgKADgPAAQgQAAgKgEg");
	this.shape_12.setTransform(19.4,12);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgrBAIAAh/IBWAAIAAAWIg8AAIAAAeIA0AAIAAAUIg0AAIAAA3g");
	this.shape_13.setTransform(7.8,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,327.9,74.4);


(lib.B787SynopticENGINEAllPositions = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgzExIAEgWQAXAEAYAAQAcAAAbgEIAEAVQgdAFgeAAQgaAAgZgEgABjEPQAwgSAqgjIAOAQQgsAmg1AUgADdC5QAjgqARgxIAVAIQgSA0gmAtgAEdAxQAEgYAAgZQAAgcgFgaIAWgEQAFAcAAAeQAAAagEAbgAkzAlQgFgpAFgmIAVADQgEAkAEAkIABACIgWADIAAgBgADci8IAQgOQAnAtASA0IgUAHQgSgwgjgqgAkJifQAOgXASgWIASgSIAPAOIgRASQgRAUgNAWgAApkeIADgWQA6AIAyAcIgLATQgugag2gHgAh4kfQAmgPApgGIADAVQgnAGgiAOg");
	this.shape.setTransform(213.2,219.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Text
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgBAWIAAgnIgLAAIAAgEIAZAAIAAAEIgLAAIAAAng");
	this.shape_1.setTransform(247.3,274.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAIAWIgIgSIgHASIgFAAIALgWIgJgVIAEAAIAGAQIAHgQIAFAAIgKAVIALAWg");
	this.shape_2.setTransform(244.2,274.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgKAWIAAgrIASAAIAAAFIgNAAIAAAOIALAAIAAACIgLAAIAAARIAQAAIAAAFg");
	this.shape_3.setTransform(241.2,274.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgKALIAFAAQAAAFACABQABACACgBQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAAAQACgDAAgEQAAgEgFgDIgDgDIgFgDQgCgDAAgEQAAgGADgDQADgEADAAQAEAAACADQADADAAAEIgFAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAgBgBAAIgCgBQAAAAAAAAQgBAAAAABQgBAAAAAAQAAABgBAAQAAABAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAFAEAEIAEACIAFADQACADAAAEQAAAHgDADQgDAEgFAAQgKAAAAgNg");
	this.shape_4.setTransform(254.9,268.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgKAWIAAgrIAKAAQAFAAADADQADACAAAIQAAAIgGABQgEADgGABIAAARgAgFAAIAEAAQAHAAAAgIQAAgJgGABIgFAAg");
	this.shape_5.setTransform(251.8,268.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAJAWIgCgNIgNAAIgDANIgEAAIANgrIACAAIAMArgAgEAFIAJAAIgFgTg");
	this.shape_6.setTransform(248.8,268.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgKAWIAAgrIAFAAIAAAmIAQAAIAAAFg");
	this.shape_7.setTransform(245.8,268.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgIAWIAAgrIARAAIAAAFIgNAAIAAAPIALAAIAAADIgLAAIAAAUg");
	this.shape_8.setTransform(242.7,268.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgJAWIAAgrIARAAIAAAFIgNAAIAAAOIALAAIAAACIgLAAIAAARIAPAAIAAAFg");
	this.shape_9.setTransform(236.6,268.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgKAWIAAgrIAFAAIAAAmIAQAAIAAAFg");
	this.shape_10.setTransform(233.6,268.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgQAdIAAg5IAQAAQAIAAAEADQAFAEAAAJQAAAMgJACQgGAEgLAAIAAAXgAgJAAIAHAAQAMAAAAgMQAAgKgKAAIgJAAg");
	this.shape_11.setTransform(179.9,219.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgOAZQgEgFAAgMIAAglIAHAAIAAAkQAAAIACAEQADAFAGAAQAIAAADgGQABgFAAgIIAAgiIAHAAIAAAkQAAAXgTAAQgJAAgFgFg");
	this.shape_12.setTransform(175.8,219.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AADAdIAAgGIAKAAIAAAGgAgCAdIAAgGIAFAAIAAAGgAgMAdIAAgGIAKAAIAAAGgAgCAXIAAgsIgKAFIAAgHIALgFIAEAAIAAAzgAgCAXg");
	this.shape_13.setTransform(185.9,197.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgPAeIAAgGQAAgHAEgGQADgFAGgFIAGgGQAEgFAAgEQAAgEgDgDQgCgCgDAAQgHAAAAAHIgHAAIAAgBQAAgFAFgEQAEgDAFAAQAGAAAEADQAFAEAAAHQAAAIgHAGIgKAJQgGAHAAAIIAYAAIAAAHg");
	this.shape_14.setTransform(203.4,185.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgJAbQgFgDAAgGIAGAAQAAAGAIAAQADAAADgEQADgDAAgGQAAgJgHgCQgDAAgKAAIAAgdIAYAAIAAAGIgSAAIAAAQQAJAAAFAFQAGACAAAKQAAAIgEAGQgEAGgHAAQgFAAgEgDg");
	this.shape_15.setTransform(224.4,186.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgNAUQgEgJAAgLQAAgKAEgJQAEgLAJAAQAKAAAEALQAEAJAAAKQAAALgEAJQgFALgJAAQgJAAgEgLgAgIgOQgCAHAAAHQAAAIACAHQADAKAFAAQAGAAADgKQACgHAAgIQAAgHgCgHQgDgJgGAAQgFAAgDAJg");
	this.shape_16.setTransform(246,201.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AADAdIAAgGIAKAAIAAAGgAgCAdIAAgGIAFAAIAAAGgAgMAdIAAgGIAKAAIAAAGgAADAXIgFAAIAAgsIgKAFIAAgHIALgFIAEAAIAAAzgAgCAXgAgCAXg");
	this.shape_17.setTransform(241.9,201.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgJAbQgFgDAAgGIAGAAQAAAGAIAAQADAAADgEQADgDAAgGQAAgIgHgDQgDAAgKAAIAAgdIAYAAIAAAHIgSAAIAAAPQAJABAFAEQAGACAAAKQAAAJgEAFQgEAGgHAAQgFAAgEgDg");
	this.shape_18.setTransform(251,220.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AADAdIAAgGIgFAAIAAgsIgKAFIAAgHIALgFIAEAAIAAAzIAKAAIAAAGgAgCAdIAAgGIAFAAIAAAGgAgMAdIAAgGIAKAAIAAAGgAgCAXg");
	this.shape_19.setTransform(246.9,220.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgJAbQgFgDAAgGIAGAAQAAAGAIAAQADAAADgEQADgEAAgFQAAgJgHgCQgDAAgKAAIAAgdIAYAAIAAAGIgSAAIAAARQAJAAAFADQAGADAAAKQAAAJgEAFQgEAGgHAAQgFAAgEgDg");
	this.shape_20.setTransform(246.3,238.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgPAeIAAgGQAAgHAEgGQADgFAGgFIAGgGQAEgFAAgEQAAgEgDgDQgCgCgDAAQgHAAAAAHIgHAAIAAgBQAAgFAFgEQAEgDAFAAQAGAAAEADQAFAEAAAHQAAAIgHAGIgKAJQgGAHAAAIIAYAAIAAAHg");
	this.shape_21.setTransform(242.1,238.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgNAUQgEgJAAgLQAAgKAEgJQAEgLAJAAQAKAAAEALQAEAJAAAKQAAALgEAJQgFALgJAAQgJAAgEgLgAgIgOQgCAHAAAHQAAAIACAHQADAKAFAAQAGAAADgKQACgHAAgIQAAgHgCgHQgDgJgGAAQgFAAgDAJg");
	this.shape_22.setTransform(233.3,250.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgKAcQgEgDAAgGIAGAAQAAAGAIAAQAEAAACgEQADgDAAgFQAAgIgGgDQgDgCgHAAIAAgEQAHAAACgCQAFgDAAgGQAAgEgDgDQgCgBgCAAQgDgBgCACQgDACAAADIgGAAIAAgBQAAgGAEgDQAEgDAGAAQAFAAAEADQAEAEAAAHQAAAJgJAFQALACAAANQAAAIgEAEQgFAGgGAAQgGAAgEgDg");
	this.shape_23.setTransform(229.1,250.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgNAUQgEgJAAgLQAAgKAEgJQAEgLAJAAQAKAAAEALQAEAJAAAKQAAALgEAJQgFALgJAAQgJAAgEgLgAgIgOQgCAHAAAHQAAAIACAHQADAKAFAAQAGAAADgKQACgHAAgIQAAgHgCgHQgDgKgGABQgFgBgDAKg");
	this.shape_24.setTransform(215.3,255.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAIAdIAAgSIgWAAIAAgGIAWghIAHAAIAAAhIAAAGIAAASgAgIAFIAPAAIAAgXg");
	this.shape_25.setTransform(211.2,255.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00CCFF").s().p("AgQAQIAHAAQAAAFADACQACACAEAAQAEAAADgDQADgDAAgEQAAgGgIgFIgGgEQgFAAgCgEQgDgEAAgGQAAgIAEgEQAFgEAGAAQAFAAAEADQAEAEAAAGIgHAAQAAgEgDgBQgCgCgCAAQgCAAgDADQgCADAAADQAAAHAHAEIAHAEQAFABACADQADAEAAAGQAAAIgFAEQgFAFgHAAQgQAAAAgPg");
	this.shape_26.setTransform(201.5,235.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00CCFF").s().p("AgQAdIAAg5IAQAAQAIAAAEADQAFAEAAAJQAAAMgJACQgGAEgLAAIAAAXgAgJAAIAHAAQAMAAAAgMQAAgKgKAAIgJAAg");
	this.shape_27.setTransform(197.3,235.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00CCFF").s().p("AAPAdIgFgQIgTAAIgGAQIgGAAIAUg5IAFAAIASA5gAgHAHIAPAAIgIgZg");
	this.shape_28.setTransform(193.2,235.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00CCFF").s().p("AgQAdIAAg5IAHAAIAAAyIAaAAIAAAHg");
	this.shape_29.setTransform(189,235.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00CCFF").s().p("AgNAdIAAg5IAbAAIAAAGIgVAAIAAAVIATAAIAAAEIgTAAIAAAag");
	this.shape_30.setTransform(184.9,235.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgBAWIAAgnIgLAAIAAgEIAZAAIAAAEIgLAAIAAAng");
	this.shape_31.setTransform(217.3,274.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAJAWIgJgSIgHASIgFAAIALgWIgKgVIAFAAIAGAQIAHgQIAFAAIgKAVIALAWg");
	this.shape_32.setTransform(214.3,274.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgKAWIAAgrIASAAIAAAFIgNAAIAAAOIALAAIAAACIgLAAIAAARIAQAAIAAAFg");
	this.shape_33.setTransform(211.2,274.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgKALIAFAAQAAAFACABQABACACgBQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAAAQACgDAAgEQAAgEgFgDIgDgDIgFgDQgCgDAAgEQAAgGADgDQADgEADAAQAEAAACADQADADAAAEIgFAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAgBgBAAIgCgBQAAAAAAAAQgBAAAAABQgBAAAAAAQAAABgBAAQAAABAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAFAEAEIAEACIAFADQACADAAAEQAAAHgDADQgDAEgFAAQgKAAAAgNg");
	this.shape_34.setTransform(224.9,268.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgKAWIAAgrIAKAAQAFAAADADQADACAAAIQAAAIgGABQgEADgGABIAAARgAgFAAIAEAAQAHAAAAgIQAAgJgGABIgFAAg");
	this.shape_35.setTransform(221.9,268.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAJAWIgCgNIgNAAIgDANIgEAAIANgrIACAAIAMArgAgEAFIAJAAIgFgTg");
	this.shape_36.setTransform(218.8,268.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgKAWIAAgrIAFAAIAAAmIAQAAIAAAFg");
	this.shape_37.setTransform(215.8,268.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgIAWIAAgrIARAAIAAAFIgNAAIAAAPIALAAIAAADIgLAAIAAAUg");
	this.shape_38.setTransform(212.8,268.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgJAWIAAgrIARAAIAAAFIgNAAIAAAOIALAAIAAACIgLAAIAAARIAPAAIAAAFg");
	this.shape_39.setTransform(206.7,268.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgKAWIAAgrIAFAAIAAAmIAQAAIAAAFg");
	this.shape_40.setTransform(203.7,268.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgBAWIAAgnIgLAAIAAgEIAZAAIAAAEIgLAAIAAAng");
	this.shape_41.setTransform(193.5,274.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgGAWIAAgFIAFAAIAAgiIgFAAIAAgEIANAAIAAAEIgFAAIAAAiIAFAAIAAAFg");
	this.shape_42.setTransform(190.4,274.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgKALIAFAAQAAAEACACQABACACgBQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAAAQACgDAAgEQAAgEgFgDIgDgDIgFgDQgCgDAAgEQAAgGADgDQADgDADgBQAEAAACADQADADAAAEIgFAAQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAgBgBIgCgBQAAAAAAAAQgBAAAAABQgBAAAAAAQAAABgBAAQAAABAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAFAEAEIAEACIAFADQACADAAAEQAAAGgDAEQgDADgFABQgKgBAAgMg");
	this.shape_43.setTransform(187.4,274.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAHAWIgOghIAAAhIgEAAIAAgrIAFAAIAOAhIAAgDIAAgeIAEAAIAAArg");
	this.shape_44.setTransform(184.4,274.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAJAWIgCgNIgNAAIgDANIgEAAIANgrIACAAIAMArgAgEAFIAJAAIgFgTg");
	this.shape_45.setTransform(181.3,274.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAGAWIgDgLIgEgJIgEAAIAAAUIgFAAIAAgrIAKAAQADAAACADQADAEAAAFQAAAJgGABQACADADAHIAEALgAgFAAIADAAQACAAACgCQABgDAAgEQAAgHgEgBIgEAAg");
	this.shape_46.setTransform(178.3,274.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgBAWIAAgnIgLAAIAAgEIAZAAIAAAEIgLAAIAAAng");
	this.shape_47.setTransform(175.3,274.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgKALIAFAAQAAAFACABQABACACgBQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAAAQACgDAAgEQAAgEgFgDIgDgDIgFgDQgCgDAAgEQAAgGADgDQADgEADAAQAEAAACADQADADAAAEIgFAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAgBgBAAIgCgBQAAAAAAAAQgBAAAAABQgBAAAAAAQAAABgBAAQAAABAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAFAEAEIAEACIAFADQACADAAAEQAAAHgDADQgDAEgFAAQgKAAAAgNg");
	this.shape_48.setTransform(195,268.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgKAWIAAgrIAKAAQAFAAADADQADACAAAIQAAAIgGABQgEADgGABIAAARgAgFAAIAEAAQAHAAAAgIQAAgJgGABIgFAAg");
	this.shape_49.setTransform(192,268.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAJAWIgCgNIgNAAIgDANIgEAAIANgrIACAAIAMArgAgEAFIAJAAIgFgTg");
	this.shape_50.setTransform(188.9,268.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgKAWIAAgrIAFAAIAAAmIAQAAIAAAFg");
	this.shape_51.setTransform(185.9,268.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgIAWIAAgrIARAAIAAAFIgNAAIAAAPIALAAIAAADIgLAAIAAAUg");
	this.shape_52.setTransform(182.9,268.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgJAWIAAgrIARAAIAAAFIgNAAIAAAOIALAAIAAACIgLAAIAAARIAPAAIAAAFg");
	this.shape_53.setTransform(176.8,268.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgKAWIAAgrIAFAAIAAAmIAQAAIAAAFg");
	this.shape_54.setTransform(173.8,268.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAJAdIgJghIgIAhIgIAAIgEg5IAHAAIACArIABAAIAIgdIAFAAIAIAdIABAAIACgrIAHAAIgEA5g");
	this.shape_55.setTransform(267.2,97.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgPAUQgFgIAAgMQAAgKAFgJQAFgLAKAAQALAAAGAKQAEAJAAALQAAAMgFAIQgFALgLAAQgKAAgFgLgAgKgOQgDAGAAAIQAAAJADAHQAEAJAGAAQAHAAAEgJQADgHAAgJQAAgIgDgGQgEgKgHABQgGgBgEAKg");
	this.shape_56.setTransform(262.5,97.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgQAdIAAg5IAHAAIAAAyIAaAAIAAAHg");
	this.shape_57.setTransform(257.9,97.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgNAdIAAg5IAbAAIAAAGIgVAAIAAAVIATAAIAAAEIgTAAIAAAag");
	this.shape_58.setTransform(253.2,97.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgQAdIAAg5IAHAAIAAAyIAaAAIAAAHg");
	this.shape_59.setTransform(243.9,97.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgPAdIAAg5IAbAAIAAAGIgVAAIAAATIATAAIAAAEIgTAAIAAAVIAZAAIAAAHg");
	this.shape_60.setTransform(239.3,97.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgOAZQgEgFAAgMIAAglIAHAAIAAAkQAAAIACAEQADAFAGAAQAIAAADgGQABgFAAgIIAAgiIAHAAIAAAkQAAAXgTAAQgJAAgFgFg");
	this.shape_61.setTransform(234.6,97.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgNAdIAAg5IAbAAIAAAGIgVAAIAAAVIATAAIAAAEIgTAAIAAAag");
	this.shape_62.setTransform(230,97.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgCAdIAAgzIgRAAIAAgGIAnAAIAAAGIgRAAIAAAzg");
	this.shape_63.setTransform(260.2,77.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgQAQIAHAAQAAAFADACQACACAEAAQAEAAADgDQADgDAAgFQAAgFgIgFIgGgEQgFAAgCgEQgDgEAAgGQAAgHAEgFQAFgEAGAAQAFAAAEADQAEAEAAAGIgHAAQAAgDgDgCQgCgCgCAAQgCAAgDADQgCADAAAEQAAAFAHAFIAHAEQAFABACADQADAEAAAGQAAAIgFAEQgFAFgHAAQgQAAAAgPg");
	this.shape_64.setTransform(255.6,77.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgOAZQgEgFAAgMIAAglIAHAAIAAAkQAAAIACAEQADAFAGAAQAIAAADgGQABgFAAgIIAAgiIAHAAIAAAkQAAAXgTAAQgJAAgFgFg");
	this.shape_65.setTransform(250.9,77.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAJAdIgFgNQgEgHgDgFIgGAAIAAAZIgHAAIAAg5IAQAAQAEAAAEAEQAEAEAAAHQAAAMgKADQAFADAEAKIAGAOgAgJgBIAGAAQADAAADgDQACgDAAgFQAAgKgHAAIgHAAg");
	this.shape_66.setTransform(246.3,77.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AALAdIAAgbIgVAAIAAAbIgHAAIAAg5IAHAAIAAAaIAVAAIAAgaIAHAAIAAA5g");
	this.shape_67.setTransform(241.6,77.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgCAdIAAgzIgRAAIAAgGIAnAAIAAAGIgRAAIAAAzg");
	this.shape_68.setTransform(237,77.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgPAdIAAg5IAbAAIAAAGIgVAAIAAATIATAAIAAAEIgTAAIAAAVIAZAAIAAAHg");
	this.shape_69.setTransform(264.9,61.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AAJAdIgFgNQgEgHgDgFIgGAAIAAAZIgHAAIAAg5IAQAAQAEAAAEAEQAEAEAAAHQAAAMgKADQAFADAEAKIAGAOgAgJgBIAGAAQADAAADgDQACgDAAgFQAAgKgHAAIgHAAg");
	this.shape_70.setTransform(260.2,61.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgOAZQgEgFAAgMIAAglIAHAAIAAAkQAAAIACAEQADAFAGAAQAIAAADgGQABgFAAgIIAAgiIAHAAIAAAkQAAAXgTAAQgJAAgFgFg");
	this.shape_71.setTransform(255.6,61.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgQAQIAHAAQAAAFADACQACACAEAAQAEAAADgDQADgDAAgFQAAgFgIgFIgGgEQgFAAgCgEQgDgEAAgGQAAgIAEgEQAFgEAGAAQAFAAAEADQAEAEAAAGIgHAAQAAgDgDgCQgCgCgCAAQgCAAgDADQgCADAAAEQAAAFAHAFIAHAEQAFABACADQADAEAAAGQAAAIgFAFQgFAEgHAAQgQAAAAgPg");
	this.shape_72.setTransform(250.9,61.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgQAQIAHAAQAAAFADACQACACAEAAQAEAAADgDQADgDAAgFQAAgFgIgFIgGgEQgFAAgCgEQgDgEAAgGQAAgIAEgEQAFgEAGAAQAFAAAEADQAEAEAAAGIgHAAQAAgDgDgCQgCgCgCAAQgCAAgDADQgCADAAAEQAAAFAHAFIAHAEQAFABACADQADAEAAAGQAAAIgFAFQgFAEgHAAQgQAAAAgPg");
	this.shape_73.setTransform(246.3,61.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgPAdIAAg5IAbAAIAAAGIgVAAIAAATIATAAIAAAEIgTAAIAAAVIAZAAIAAAHg");
	this.shape_74.setTransform(241.6,61.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AAJAdIgFgNQgEgHgDgFIgGAAIAAAZIgHAAIAAg5IAQAAQAEAAAEAEQAEAEAAAHQAAAMgKADQAFADAEAKIAGAOgAgJgBIAGAAQADAAADgDQACgDAAgFQAAgKgHAAIgHAAg");
	this.shape_75.setTransform(237,61.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgQAdIAAg5IAQAAQAIAAAEADQAFAEAAAJQAAAMgJACQgGAEgLAAIAAAXgAgJAAIAHAAQAMAAAAgMQAAgKgKAAIgJAAg");
	this.shape_76.setTransform(232.3,61.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgQAdIAAg5IAHAAIAAAyIAaAAIAAAHg");
	this.shape_77.setTransform(262.5,54.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgKAdIAAgGIAIAAIAAgtIgIAAIAAgGIAVAAIAAAGIgIAAIAAAtIAIAAIAAAGg");
	this.shape_78.setTransform(257.9,54.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgPAVQgFgJAAgMQAAgKAFgJQAFgLAKAAQALAAAGAKQAEAJAAALQAAAMgFAJQgFAKgLAAQgKAAgFgKgAgKgOQgDAGAAAIQAAAJADAHQAEAJAGAAQAHAAAEgJQADgHAAgJQAAgIgDgGQgEgJgHAAQgGAAgEAJg");
	this.shape_79.setTransform(253.2,54.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAJAdIgJghIgIAhIgIAAIgEg5IAHAAIACArIABAAIAIgdIAFAAIAIAdIABAAIACgrIAHAAIgEA5g");
	this.shape_80.setTransform(243.9,54.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgPAVQgFgJAAgMQAAgKAFgJQAFgLAKAAQALAAAGAKQAEAJAAALQAAAMgFAJQgFAKgLAAQgKAAgFgKgAgKgOQgDAGAAAIQAAAJADAHQAEAJAGAAQAHAAAEgJQADgHAAgJQAAgIgDgGQgEgJgHAAQgGAAgEAJg");
	this.shape_81.setTransform(239.3,54.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgQAdIAAg5IAHAAIAAAyIAaAAIAAAHg");
	this.shape_82.setTransform(234.6,54.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgQAQIAHAAQAAAFADACQACACAEAAQAEAAADgDQADgDAAgEQAAgGgIgFIgGgEQgFgBgCgDQgDgEAAgGQAAgIAEgEQAFgEAGAAQAFAAAEADQAEAEAAAGIgHAAQAAgEgDgBQgCgCgCAAQgCAAgDADQgCADAAADQAAAHAHAEIAHAEQAFABACADQADAEAAAGQAAAIgFAEQgFAFgHAAQgQAAAAgPg");
	this.shape_83.setTransform(260.2,42.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgQAQIAHAAQAAAFADACQACACAEAAQAEAAADgDQADgDAAgEQAAgGgIgFIgGgEQgFgBgCgDQgDgEAAgGQAAgIAEgEQAFgEAGAAQAFAAAEADQAEAEAAAGIgHAAQAAgEgDgBQgCgCgCAAQgCAAgDADQgCADAAADQAAAHAHAEIAHAEQAFABACADQADAEAAAGQAAAIgFAEQgFAFgHAAQgQAAAAgPg");
	this.shape_84.setTransform(255.6,42.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AAPAdIgFgQIgTAAIgGAQIgGAAIAUg5IAFAAIASA5gAgHAHIAPAAIgIgZg");
	this.shape_85.setTransform(250.9,42.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgQAdIAAg5IAQAAQAIAAAEADQAFAEAAAJQAAAMgJACQgGAEgLAAIAAAXgAgJAAIAHAAQAMAAAAgMQAAgKgKAAIgJAAg");
	this.shape_86.setTransform(246.3,42.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgCAdIAAgFIAAgKIAAgNIgIgNIgJgQIAHAAIAMAYIANgYIAHAAIgJAQIgIANIAAANIAAAPg");
	this.shape_87.setTransform(241.6,42.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgQAdIAAg5IANAAQAHAAAEACQAGAEAAAJQAAAEgCAEQgCAEgEABQAGAAACAEQADAEAAAFQAAAQgRAAgAgJAXIAJAAQAKAAAAgKQAAgGgFgDQgFgCgFAAIgEAAgAgJgDIAGAAIAEAAQADgBABgEIACgFIgBgEIgBgDIgDgCIgCAAIgJAAg");
	this.shape_88.setTransform(237,42.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AAJAdIgFgNQgEgHgDgFIgGAAIAAAZIgHAAIAAg5IAQAAQAEAAAEAEQAEAEAAAHQAAAMgKADQAFADAEAKIAGAOgAgJgBIAGAAQADAAADgDQACgDAAgFQAAgKgHAAIgHAAg");
	this.shape_89.setTransform(269.5,34.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgPAdIAAg5IAbAAIAAAGIgVAAIAAATIATAAIAAAEIgTAAIAAAVIAZAAIAAAHg");
	this.shape_90.setTransform(264.9,34.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgCAdIAAgzIgRAAIAAgGIAnAAIAAAGIgRAAIAAAzg");
	this.shape_91.setTransform(260.2,34.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgQAdIAAg5IAHAAIAAAyIAaAAIAAAHg");
	this.shape_92.setTransform(255.6,34.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgKAdIAAgGIAIAAIAAgtIgIAAIAAgGIAVAAIAAAGIgIAAIAAAtIAIAAIAAAGg");
	this.shape_93.setTransform(250.9,34.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgNAdIAAg5IAbAAIAAAGIgVAAIAAAVIATAAIAAAEIgTAAIAAAag");
	this.shape_94.setTransform(246.3,34.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgQAdIAAg5IAHAAIAAAyIAaAAIAAAHg");
	this.shape_95.setTransform(237,34.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgKAdIAAgGIAIAAIAAgtIgIAAIAAgGIAVAAIAAAGIgIAAIAAAtIAIAAIAAAGg");
	this.shape_96.setTransform(232.3,34.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgPAUQgFgIAAgMQAAgLAFgIQAFgLAKAAQALAAAGALQAEAIAAALQAAAMgFAIQgFALgLAAQgKAAgFgLgAgKgPQgDAHAAAIQAAAKADAGQAEAJAGAAQAHAAAEgJQADgHAAgJQAAgIgDgHQgEgIgHgBQgGABgEAIg");
	this.shape_97.setTransform(227.7,34.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AAMAdIgXgsIAAAsIgGAAIAAg5IAGAAIAXAsIAAgEIAAgoIAGAAIAAA5g");
	this.shape_98.setTransform(255.6,22.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgPAdIAAg5IAbAAIAAAGIgVAAIAAATIATAAIAAAEIgTAAIAAAVIAZAAIAAAHg");
	this.shape_99.setTransform(250.9,22.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgQAdIAAg5IAQAAQAIAAAEADQAFAEAAAJQAAAMgJACQgGAEgLAAIAAAXgAgJAAIAHAAQAMAAAAgMQAAgKgKAAIgJAAg");
	this.shape_100.setTransform(246.3,22.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgPAUQgFgIAAgMQAAgKAFgJQAFgLAKAAQALAAAGALQAEAIAAALQAAAMgFAIQgFALgLAAQgKAAgFgLgAgKgPQgDAHAAAIQAAAKADAGQAEAJAGAAQAHAAAEgJQADgHAAgJQAAgIgDgHQgEgJgHAAQgGAAgEAJg");
	this.shape_101.setTransform(241.6,22.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgPAdIAAg5IAbAAIAAAGIgVAAIAAATIATAAIAAAEIgTAAIAAAVIAZAAIAAAHg");
	this.shape_102.setTransform(271.8,15.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgCAdIgTg5IAHAAIAOAvIAPgvIAHAAIgTA5g");
	this.shape_103.setTransform(267.2,15.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgQAdIAAg5IAHAAIAAAyIAaAAIAAAHg");
	this.shape_104.setTransform(262.5,15.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AAPAdIgFgQIgTAAIgGAQIgGAAIAUg5IAFAAIASA5gAgHAHIAPAAIgIgZg");
	this.shape_105.setTransform(257.9,15.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgCAdIgTg5IAHAAIAOAvIAPgvIAHAAIgTA5g");
	this.shape_106.setTransform(253.2,15.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgCAdIAAgzIgRAAIAAgGIAnAAIAAAGIgRAAIAAAzg");
	this.shape_107.setTransform(243.9,15.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AAJAdIgFgNQgEgHgDgFIgGAAIAAAZIgHAAIAAg5IAQAAQAEAAAEAEQAEAEAAAHQAAAMgKADQAFADAEAKIAGAOgAgJgBIAGAAQADAAADgDQACgDAAgFQAAgKgHAAIgHAAg");
	this.shape_108.setTransform(239.3,15.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AAPAdIgFgQIgTAAIgGAQIgGAAIAUg5IAFAAIASA5gAgHAHIAPAAIgIgZg");
	this.shape_109.setTransform(234.6,15.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgCAdIAAgzIgRAAIAAgGIAnAAIAAAGIgRAAIAAAzg");
	this.shape_110.setTransform(230,15.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgQAQIAHAAQAAAFADACQACACAEAAQAEAAADgDQADgDAAgFQAAgGgIgEIgGgEQgFgBgCgDQgDgEAAgGQAAgHAEgFQAFgEAGAAQAFAAAEAEQAEADAAAGIgHAAQAAgEgDgCQgCgBgCAAQgCAAgDADQgCADAAAEQAAAFAHAFIAHAEQAFABACADQADAEAAAGQAAAIgFAFQgFAEgHAAQgQAAAAgPg");
	this.shape_111.setTransform(225.3,15.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AAJAdIgJghIgIAhIgIAAIgEg5IAHAAIACArIABAAIAIgdIAFAAIAIAdIABAAIACgrIAHAAIgEA5g");
	this.shape_112.setTransform(209.6,97.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgPAUQgFgIAAgMQAAgKAFgJQAFgLAKAAQALAAAGAKQAEAJAAALQAAAMgFAIQgFALgLAAQgKAAgFgLgAgKgOQgDAGAAAIQAAAJADAHQAEAJAGAAQAHAAAEgJQADgHAAgJQAAgIgDgGQgEgKgHABQgGgBgEAKg");
	this.shape_113.setTransform(204.9,97.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgQAdIAAg5IAHAAIAAAyIAaAAIAAAHg");
	this.shape_114.setTransform(200.3,97.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgNAdIAAg5IAbAAIAAAGIgVAAIAAAVIATAAIAAAEIgTAAIAAAag");
	this.shape_115.setTransform(195.6,97.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgQAdIAAg5IAHAAIAAAyIAaAAIAAAHg");
	this.shape_116.setTransform(186.3,97.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgPAdIAAg5IAbAAIAAAGIgVAAIAAATIATAAIAAAEIgTAAIAAAVIAZAAIAAAHg");
	this.shape_117.setTransform(181.7,97.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgOAZQgEgFAAgMIAAglIAHAAIAAAkQAAAIACAEQADAFAGAAQAIAAADgGQABgFAAgIIAAgiIAHAAIAAAkQAAAXgTAAQgJAAgFgFg");
	this.shape_118.setTransform(177,97.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgNAdIAAg5IAbAAIAAAGIgVAAIAAAVIATAAIAAAEIgTAAIAAAag");
	this.shape_119.setTransform(172.4,97.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgCAdIAAgzIgRAAIAAgGIAnAAIAAAGIgRAAIAAAzg");
	this.shape_120.setTransform(202.6,77.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgQAQIAHAAQAAAFADACQACACAEAAQAEAAADgDQADgDAAgFQAAgFgIgFIgGgEQgFAAgCgEQgDgEAAgGQAAgHAEgFQAFgEAGAAQAFAAAEADQAEAEAAAGIgHAAQAAgDgDgCQgCgCgCAAQgCAAgDADQgCADAAAEQAAAFAHAFIAHAEQAFABACADQADAEAAAGQAAAIgFAEQgFAFgHAAQgQAAAAgPg");
	this.shape_121.setTransform(198,77.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgOAZQgEgFAAgMIAAglIAHAAIAAAkQAAAIACAEQADAFAGAAQAIAAADgGQABgFAAgIIAAgiIAHAAIAAAkQAAAXgTAAQgJAAgFgFg");
	this.shape_122.setTransform(193.3,77.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AAJAdIgFgNQgEgHgDgFIgGAAIAAAZIgHAAIAAg5IAQAAQAEAAAEAEQAEAEAAAHQAAAMgKADQAFADAEAKIAGAOgAgJgBIAGAAQADAAADgDQACgDAAgFQAAgKgHAAIgHAAg");
	this.shape_123.setTransform(188.7,77.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AALAdIAAgbIgVAAIAAAbIgHAAIAAg5IAHAAIAAAaIAVAAIAAgaIAHAAIAAA5g");
	this.shape_124.setTransform(184,77.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgCAdIAAgzIgRAAIAAgGIAnAAIAAAGIgRAAIAAAzg");
	this.shape_125.setTransform(179.4,77.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgPAdIAAg5IAbAAIAAAGIgVAAIAAATIATAAIAAAEIgTAAIAAAVIAZAAIAAAHg");
	this.shape_126.setTransform(207.3,61.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AAJAdIgFgNQgEgHgDgFIgGAAIAAAZIgHAAIAAg5IAQAAQAEAAAEAEQAEAEAAAHQAAAMgKADQAFADAEAKIAGAOgAgJgBIAGAAQADAAADgDQACgDAAgFQAAgKgHAAIgHAAg");
	this.shape_127.setTransform(202.6,61.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgOAZQgEgFAAgMIAAglIAHAAIAAAkQAAAIACAEQADAFAGAAQAIAAADgGQABgFAAgIIAAgiIAHAAIAAAkQAAAXgTAAQgJAAgFgFg");
	this.shape_128.setTransform(198,61.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgQAQIAHAAQAAAFADACQACACAEAAQAEAAADgDQADgDAAgFQAAgFgIgFIgGgEQgFAAgCgEQgDgEAAgGQAAgIAEgEQAFgEAGAAQAFAAAEADQAEAEAAAGIgHAAQAAgDgDgCQgCgCgCAAQgCAAgDADQgCADAAAEQAAAFAHAFIAHAEQAFABACADQADAEAAAGQAAAIgFAFQgFAEgHAAQgQAAAAgPg");
	this.shape_129.setTransform(193.3,61.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgQAQIAHAAQAAAFADACQACACAEAAQAEAAADgDQADgDAAgFQAAgFgIgFIgGgEQgFAAgCgEQgDgEAAgGQAAgIAEgEQAFgEAGAAQAFAAAEADQAEAEAAAGIgHAAQAAgDgDgCQgCgCgCAAQgCAAgDADQgCADAAAEQAAAFAHAFIAHAEQAFABACADQADAEAAAGQAAAIgFAFQgFAEgHAAQgQAAAAgPg");
	this.shape_130.setTransform(188.7,61.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgPAdIAAg5IAbAAIAAAGIgVAAIAAATIATAAIAAAEIgTAAIAAAVIAZAAIAAAHg");
	this.shape_131.setTransform(184,61.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AAJAdIgFgNQgEgHgDgFIgGAAIAAAZIgHAAIAAg5IAQAAQAEAAAEAEQAEAEAAAHQAAAMgKADQAFADAEAKIAGAOgAgJgBIAGAAQADAAADgDQACgDAAgFQAAgKgHAAIgHAAg");
	this.shape_132.setTransform(179.4,61.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgQAdIAAg5IAQAAQAIAAAEADQAFAEAAAJQAAAMgJACQgGAEgLAAIAAAXgAgJAAIAHAAQAMAAAAgMQAAgKgKAAIgJAAg");
	this.shape_133.setTransform(174.7,61.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgQAdIAAg5IAHAAIAAAyIAaAAIAAAHg");
	this.shape_134.setTransform(204.9,54.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgKAdIAAgGIAIAAIAAgtIgIAAIAAgGIAVAAIAAAGIgIAAIAAAtIAIAAIAAAGg");
	this.shape_135.setTransform(200.3,54.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgPAVQgFgJAAgMQAAgKAFgJQAFgLAKAAQALAAAGAKQAEAJAAALQAAAMgFAJQgFAKgLAAQgKAAgFgKgAgKgOQgDAGAAAIQAAAJADAHQAEAJAGAAQAHAAAEgJQADgHAAgJQAAgIgDgGQgEgJgHAAQgGAAgEAJg");
	this.shape_136.setTransform(195.6,54.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AAJAdIgJghIgIAhIgIAAIgEg5IAHAAIACArIABAAIAIgdIAFAAIAIAdIABAAIACgrIAHAAIgEA5g");
	this.shape_137.setTransform(186.3,54.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgPAVQgFgJAAgMQAAgKAFgJQAFgLAKAAQALAAAGAKQAEAJAAALQAAAMgFAJQgFAKgLAAQgKAAgFgKgAgKgOQgDAGAAAIQAAAJADAHQAEAJAGAAQAHAAAEgJQADgHAAgJQAAgIgDgGQgEgJgHAAQgGAAgEAJg");
	this.shape_138.setTransform(181.7,54.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgQAdIAAg5IAHAAIAAAyIAaAAIAAAHg");
	this.shape_139.setTransform(177,54.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgQAQIAHAAQAAAFADACQACACAEAAQAEAAADgDQADgDAAgEQAAgGgIgFIgGgEQgFgBgCgDQgDgEAAgGQAAgIAEgEQAFgEAGAAQAFAAAEADQAEAEAAAGIgHAAQAAgEgDgBQgCgCgCAAQgCAAgDADQgCADAAADQAAAHAHAEIAHAEQAFABACADQADAEAAAGQAAAIgFAEQgFAFgHAAQgQAAAAgPg");
	this.shape_140.setTransform(202.6,42.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgQAQIAHAAQAAAFADACQACACAEAAQAEAAADgDQADgDAAgEQAAgGgIgFIgGgEQgFgBgCgDQgDgEAAgGQAAgIAEgEQAFgEAGAAQAFAAAEADQAEAEAAAGIgHAAQAAgEgDgBQgCgCgCAAQgCAAgDADQgCADAAADQAAAHAHAEIAHAEQAFABACADQADAEAAAGQAAAIgFAEQgFAFgHAAQgQAAAAgPg");
	this.shape_141.setTransform(198,42.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AAPAdIgFgQIgTAAIgGAQIgGAAIAUg5IAFAAIASA5gAgHAHIAPAAIgIgZg");
	this.shape_142.setTransform(193.3,42.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgQAdIAAg5IAQAAQAIAAAEADQAFAEAAAJQAAAMgJACQgGAEgLAAIAAAXgAgJAAIAHAAQAMAAAAgMQAAgKgKAAIgJAAg");
	this.shape_143.setTransform(188.7,42.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgCAdIAAgFIAAgKIAAgNIgIgNIgJgQIAHAAIAMAYIANgYIAHAAIgJAQIgIANIAAANIAAAPg");
	this.shape_144.setTransform(184,42.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgQAdIAAg5IANAAQAHAAAEACQAGAEAAAJQAAAEgCAEQgCAEgEABQAGAAACAEQADAEAAAFQAAAQgRAAgAgJAXIAJAAQAKAAAAgKQAAgGgFgDQgFgCgFAAIgEAAgAgJgDIAGAAIAEAAQADgBABgEIACgFIgBgEIgBgDIgDgCIgCAAIgJAAg");
	this.shape_145.setTransform(179.4,42.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AAJAdIgFgNQgEgHgDgFIgGAAIAAAZIgHAAIAAg5IAQAAQAEAAAEAEQAEAEAAAHQAAAMgKADQAFADAEAKIAGAOgAgJgBIAGAAQADAAADgDQACgDAAgFQAAgKgHAAIgHAAg");
	this.shape_146.setTransform(211.9,34.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgPAdIAAg5IAbAAIAAAGIgVAAIAAATIATAAIAAAEIgTAAIAAAVIAZAAIAAAHg");
	this.shape_147.setTransform(207.3,34.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgCAdIAAgzIgRAAIAAgGIAnAAIAAAGIgRAAIAAAzg");
	this.shape_148.setTransform(202.6,34.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgQAdIAAg5IAHAAIAAAyIAaAAIAAAHg");
	this.shape_149.setTransform(198,34.8);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgKAdIAAgGIAIAAIAAgtIgIAAIAAgGIAVAAIAAAGIgIAAIAAAtIAIAAIAAAGg");
	this.shape_150.setTransform(193.3,34.8);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgNAdIAAg5IAbAAIAAAGIgVAAIAAAVIATAAIAAAEIgTAAIAAAag");
	this.shape_151.setTransform(188.7,34.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgQAdIAAg5IAHAAIAAAyIAaAAIAAAHg");
	this.shape_152.setTransform(179.4,34.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgKAdIAAgGIAIAAIAAgtIgIAAIAAgGIAVAAIAAAGIgIAAIAAAtIAIAAIAAAGg");
	this.shape_153.setTransform(174.7,34.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgPAUQgFgIAAgMQAAgLAFgIQAFgLAKAAQALAAAGALQAEAIAAALQAAAMgFAIQgFALgLAAQgKAAgFgLgAgKgPQgDAHAAAIQAAAKADAGQAEAJAGAAQAHAAAEgJQADgHAAgJQAAgIgDgHQgEgIgHgBQgGABgEAIg");
	this.shape_154.setTransform(170.1,34.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AAMAdIgXgsIAAAsIgGAAIAAg5IAGAAIAXAsIAAgEIAAgoIAGAAIAAA5g");
	this.shape_155.setTransform(198,22.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgPAdIAAg5IAbAAIAAAGIgVAAIAAATIATAAIAAAEIgTAAIAAAVIAZAAIAAAHg");
	this.shape_156.setTransform(193.3,22.4);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgQAdIAAg5IAQAAQAIAAAEADQAFAEAAAJQAAAMgJACQgGAEgLAAIAAAXgAgJAAIAHAAQAMAAAAgMQAAgKgKAAIgJAAg");
	this.shape_157.setTransform(188.7,22.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgPAUQgFgIAAgMQAAgKAFgJQAFgLAKAAQALAAAGALQAEAIAAALQAAAMgFAIQgFALgLAAQgKAAgFgLgAgKgPQgDAHAAAIQAAAKADAGQAEAJAGAAQAHAAAEgJQADgHAAgJQAAgIgDgHQgEgJgHAAQgGAAgEAJg");
	this.shape_158.setTransform(184,22.4);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgPAdIAAg5IAbAAIAAAGIgVAAIAAATIATAAIAAAEIgTAAIAAAVIAZAAIAAAHg");
	this.shape_159.setTransform(214.2,15.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgCAdIgTg5IAHAAIAOAvIAPgvIAHAAIgTA5g");
	this.shape_160.setTransform(209.6,15.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgQAdIAAg5IAHAAIAAAyIAaAAIAAAHg");
	this.shape_161.setTransform(204.9,15.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AAPAdIgFgQIgTAAIgGAQIgGAAIAUg5IAFAAIASA5gAgHAHIAPAAIgIgZg");
	this.shape_162.setTransform(200.3,15.1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgCAdIgTg5IAHAAIAOAvIAPgvIAHAAIgTA5g");
	this.shape_163.setTransform(195.6,15.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgCAdIAAgzIgRAAIAAgGIAnAAIAAAGIgRAAIAAAzg");
	this.shape_164.setTransform(186.3,15.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AAJAdIgFgNQgEgHgDgFIgGAAIAAAZIgHAAIAAg5IAQAAQAEAAAEAEQAEAEAAAHQAAAMgKADQAFADAEAKIAGAOgAgJgBIAGAAQADAAADgDQACgDAAgFQAAgKgHAAIgHAAg");
	this.shape_165.setTransform(181.7,15.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AAPAdIgFgQIgTAAIgGAQIgGAAIAUg5IAFAAIASA5gAgHAHIAPAAIgIgZg");
	this.shape_166.setTransform(177,15.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgCAdIAAgzIgRAAIAAgGIAnAAIAAAGIgRAAIAAAzg");
	this.shape_167.setTransform(172.4,15.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgQAQIAHAAQAAAFADACQACACAEAAQAEAAADgDQADgDAAgFQAAgGgIgEIgGgEQgFgBgCgDQgDgEAAgGQAAgHAEgFQAFgEAGAAQAFAAAEAEQAEADAAAGIgHAAQAAgEgDgCQgCgBgCAAQgCAAgDADQgCADAAAEQAAAFAHAFIAHAEQAFABACADQADAEAAAGQAAAIgFAFQgFAEgHAAQgQAAAAgPg");
	this.shape_168.setTransform(167.7,15.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#00CCFF").s().p("AgPAeIAAgGQAAgHAEgGQADgFAGgFIAGgGQAEgFAAgEQAAgEgDgDQgCgCgDAAQgHAAAAAHIgHAAIAAgBQAAgFAFgEQAEgDAFAAQAGAAAEADQAFAEAAAHQAAAIgHAGIgKAJQgGAHAAAIIAYAAIAAAHg");
	this.shape_169.setTransform(257,4.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#00CCFF").s().p("AgNAVQgEgHAAgOQAAgKAEgJQAFgLAKAAQAHAAAEAEQAFAEAAAGIgGAAQAAgDgDgDQgDgCgEAAQgGABgEAIQgCAHAAAIQAAAKACAGQAEAJAHAAIAJgCIAAgRIgLAAIAAgGIARAAIAAAbQgIAEgHAAQgKAAgGgKg");
	this.shape_170.setTransform(248.7,5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#00CCFF").s().p("AAMAdIgXgsIAAAsIgGAAIAAg5IAGAAIAXAsIAAgEIAAgoIAGAAIAAA5g");
	this.shape_171.setTransform(244.6,5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#00CCFF").s().p("AgPAdIAAg5IAbAAIAAAGIgVAAIAAATIATAAIAAAEIgTAAIAAAVIAZAAIAAAHg");
	this.shape_172.setTransform(240.4,5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#00CCFF").s().p("AADAdIAAgGIgFAAIAAAGIgKAAIAAgGIAKAAIAAgsIgKAFIAAgHIALgFIAEAAIAAAzIAKAAIAAAGgAADAdIgFAAIAAgGIAFAAIAAAGgAADAXg");
	this.shape_173.setTransform(199.5,5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#00CCFF").s().p("AgNAVQgEgHAAgOQAAgKAEgJQAFgLAKAAQAHAAAEAEQAFAEAAAGIgGAAQAAgDgDgDQgDgCgEAAQgGABgEAIQgCAHAAAIQAAAKACAGQAEAJAHAAIAJgCIAAgRIgLAAIAAgGIARAAIAAAbQgIAEgHAAQgKAAgGgKg");
	this.shape_174.setTransform(191.2,5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#00CCFF").s().p("AAMAdIgXgsIAAAsIgGAAIAAg5IAGAAIAXAsIAAgEIAAgoIAGAAIAAA5g");
	this.shape_175.setTransform(187,5);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#00CCFF").s().p("AgPAdIAAg5IAbAAIAAAGIgVAAIAAATIATAAIAAAEIgTAAIAAAVIAZAAIAAAHg");
	this.shape_176.setTransform(182.9,5);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AgSA3IAAgFQAAgWANgbQAFgJATghIgxAAIAAgNIA9AAIAAAMIgGALQgeAzAAAjg");
	this.shape_177.setTransform(148.8,28.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AgeAFQAAg+AiAAQAJAAAHAGQAJAGAAAJIgMAAQAAgKgNAAQgLAAgGARQgGAMABAPIAAAEQALgNALAAQANAAAHALQAHAIAAAOQAAAOgIALQgHALgOAAQggAAAAg1gAgMAJQgEAIABAMQAAAHAFAFQAHAGAFAAQAIAAAEgJQAFgHAAgJQAAgJgFgHQgEgGgJAAQgIAAgFAJg");
	this.shape_178.setTransform(141,28.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AgdA5IAAgMQAAgNAHgMQAGgIAKgKIAOgOQAHgIAAgIQAAgHgFgFQgEgEgGAAQgPAAAAAMIgLAAIAAgBQgBgKAJgHQAIgGAKAAQALAAAJAHQAIAHAAANQAAAOgMAMIgVATQgMANABAPIAuAAIAAANg");
	this.shape_179.setTransform(133,28);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AgGAJIAAgRIANAAIAAARg");
	this.shape_180.setTransform(144.9,33.9);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#33C300").s().p("AgFAGIAAgLIAKAAIAAALg");
	this.shape_181.setTransform(143.8,19.1);

	this.instance = new lib.B787EICAS_Gauge_N1Left("synched",0);
	this.instance.setTransform(120,38.2);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AgeAFQAAg+AiAAQAJAAAHAGQAJAGgBAJIgLAAQgBgKgMAAQgLAAgGARQgGAMABAPIAAAEQALgNALAAQANAAAIALQAGAIAAAOQAAAOgHALQgIALgOAAQggAAAAg1gAgMAJQgDAIAAAMQgBAHAHAFQAFAGAGAAQAIAAAFgJQAEgHAAgJQAAgJgEgHQgGgGgIAAQgIAAgFAJg");
	this.shape_182.setTransform(70.1,28.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AgeAFQAAg+AiAAQAJAAAHAGQAJAGAAAJIgMAAQAAgKgNAAQgLAAgGARQgGAMABAPIAAAEQALgNALAAQANAAAHALQAHAIAAAOQAAAOgIALQgHALgOAAQggAAAAg1gAgMAJQgEAIABAMQAAAHAFAFQAHAGAFAAQAIAAAEgJQAFgHAAgJQAAgJgFgHQgEgGgJAAQgIAAgFAJg");
	this.shape_183.setTransform(62.3,28.1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AgdA5IAAgMQAAgNAHgMQAGgIAKgKIAOgOQAHgIAAgIQAAgHgFgFQgEgEgGAAQgPAAAAAMIgLAAIAAgBQgBgKAJgHQAIgGAKAAQALAAAJAHQAIAHAAANQAAAOgMAMIgVATQgMANABAPIAuAAIAAANg");
	this.shape_184.setTransform(54.3,28);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AgGAJIAAgRIANAAIAAARg");
	this.shape_185.setTransform(66.1,33.9);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AgaAlQgHgQAAgVQAAgUAHgQQAJgVARAAQASAAAJAVQAHAQAAAUQAAAVgHAQQgJAVgSAAQgRAAgJgVgAgRgcQgDANAAAPQAAAQADANQAGASALAAQAMAAAGgSQAEgNAAgQQAAgPgEgNQgGgSgMAAQgLAAgGASg");
	this.shape_186.setTransform(148.9,87.4);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AAFA3IAAgLIATAAIAAALgAgEA3IAAgLIAJAAIAAALgAgEA3IgTAAIAAgLIATAAIAAhUIgTAJIAAgNIATgKIAJAAIAABiIgJAAIAAALgAAFAsg");
	this.shape_187.setTransform(141,87.4);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AgTAzQgIgGgBgLIAMAAQABALAPAAQAHAAAFgHQAEgHAAgKQAAgQgMgFQgGgBgTAAIAAg3IAuAAIAAANIgjAAIAAAdQARAAAKAIQAMAGAAAUQAAAPgIAKQgIAMgNAAQgLAAgIgGg");
	this.shape_188.setTransform(132.9,87.6);

	this.instance_1 = new lib.B787EICAS_Gauge_EGTLeft("synched",0);
	this.instance_1.setTransform(120,97.5);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#00CCFF").s().p("AgCAdIAAgzIgRAAIAAgGIAnAAIAAAGIgRAAIAAAzg");
	this.shape_189.setTransform(86.6,122.3);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#00CCFF").s().p("AgNAWQgEgJAAgNQAAgLAEgIQAFgLAKAAQAHAAAEADQAFAFAAAGIgGAAQAAgEgDgBQgDgCgEAAQgGAAgEAJQgCAGAAAIQAAAJACAHQAEAJAHAAIAJgCIAAgRIgLAAIAAgGIARAAIAAAaQgIAFgHAAQgKAAgGgJg");
	this.shape_190.setTransform(82.5,122.3);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#00CCFF").s().p("AgPAdIAAg5IAbAAIAAAGIgVAAIAAATIATAAIAAAEIgTAAIAAAVIAZAAIAAAHg");
	this.shape_191.setTransform(78.3,122.3);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AgeAFQAAg+AjAAQAIAAAHAGQAJAGgBAJIgLAAQgBgKgLAAQgMAAgGARQgGAMABAPIAAAEQAKgNAMAAQANAAAIALQAGAIAAAOQAAAOgHALQgJALgNAAQggAAAAg1gAgMAJQgDAIgBAMQAAAHAHAFQAFAGAGAAQAIAAAFgJQADgHAAgJQAAgJgDgHQgGgGgIAAQgIAAgFAJg");
	this.shape_192.setTransform(70.2,87.4);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AAFA3IAAgLIAAALIgJAAIAAgLIAJAAIgJAAIAAhUIgTAJIAAgNIATgKIAJAAIAABiIATAAIAAALgAgXA3IAAgLIATAAIAAALgAgEAsg");
	this.shape_193.setTransform(62.3,87.4);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AgTAzQgIgGgBgLIAMAAQABALAPAAQAHAAAFgHQAEgHAAgKQAAgQgMgFQgGgBgTAAIAAg3IAuAAIAAANIgjAAIAAAdQARAAAKAIQAMAGAAAUQAAAPgIAKQgIAMgNAAQgLAAgIgGg");
	this.shape_194.setTransform(54.2,87.6);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#00CCFF").s().p("AADAdIAAgGIAAAGIgFAAIAAgGIAFAAIgFAAIAAgsIgKAFIAAgHIALgFIAEAAIAAAzIAKAAIAAAGgAgMAdIAAgGIAKAAIAAAGgAgCAXg");
	this.shape_195.setTransform(83.6,66);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#00CCFF").s().p("AAMAdIgXgsIAAAsIgGAAIAAg5IAGAAIAXAsIAAgEIAAgoIAGAAIAAA5g");
	this.shape_196.setTransform(79.2,63);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#33C300").s().p("AgFAGIAAgLIAKAAIAAALg");
	this.shape_197.setTransform(65.1,19.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#33C300").s().p("AgVAbQgGgLAAgQQAAgPAGgLQAIgPANAAQAPAAAIAPQAFALAAAPQAAAQgGALQgIAPgOAAQgNAAgIgPgAgOgUQgDAJAAALQAAAMADAJQAFAMAJAAQAKAAAFgMQADgJAAgMQAAgLgDgJQgFgMgKAAQgJAAgFAMg");
	this.shape_198.setTransform(85.5,5.3);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#33C300").s().p("AgDAnIAAhFIgWAAIAAgIIA0AAIAAAIIgXAAIAABFg");
	this.shape_199.setTransform(79.8,5.3);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AgNAkQgGgEAAgIIAIAAQABAIAKAAQAFAAADgGQADgEAAgHQAAgMgJgDQgDAAgOAAIAAgoIAgAAIAAAJIgYAAIAAAWQAMgBAHAGQAJAEgBAOQABAKgGAIQgGAJgJAAQgIgBgFgEg");
	this.shape_200.setTransform(44.2,5.4);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AAEAnIAAgIIAAAIIgGAAIAAgIIAAAIIgOAAIAAgIIAOAAIAGAAIgGAAIAAg7IgOAHIAAgKIAOgHIAGAAIAABFIANAAIAAAIg");
	this.shape_201.setTransform(38.6,5.3);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AgCAcIAAgYIgUAAIAAgHIAUAAIAAgYIAFAAIAAAYIAUAAIAAAHIgUAAIAAAYg");
	this.shape_202.setTransform(32.8,6.4);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AgNAVQgEgJAAgMQAAgLAEgJQAGgKAJAAQAHAAAFADQAEAFAAAHIgGAAQAAgEgDgCQgCgCgEAAQgHgBgEAJQgCAHAAAIQAAAKACAGQAEAJAHAAQAJAAAAgJIAGAAIAAABQAAAGgEAFQgFADgHAAQgJAAgGgKg");
	this.shape_203.setTransform(51.2,6.7);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#00CCFF").s().p("AgCAdIAAgzIgRAAIAAgGIAnAAIAAAGIgRAAIAAAzg");
	this.shape_204.setTransform(21.6,6.8);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#00CCFF").s().p("AAPAdIgFgQIgTAAIgGAQIgGAAIAUg5IAFAAIASA5gAgHAHIAPAAIgIgZg");
	this.shape_205.setTransform(17.5,6.8);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#00CCFF").s().p("AgCAdIAAgzIgRAAIAAgGIAnAAIAAAGIgRAAIAAAzg");
	this.shape_206.setTransform(13.3,6.8);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#5E5D66").ss(1.3,1,0,3).p("AGWAAQAACoh3B3Qh3B4ioAAQinAAh4h4Qh2h3AAioQAAinB2h4QB4h3CnAAQCoAAB3B3QB3B4AACngAklAPQgBgIAAgHQAAh4BXhXQBWhWB5AAQB5AABXBWQBXBXAAB4QAAB5hXBYQhXBWh5AAQgJAAgKgBABzAAQAAAvgiAiQghAigwAAQguAAgigiQgigiAAgvQAAgvAigiQAighAuAAQAwAAAhAhQAiAiAAAvg");
	this.shape_207.setTransform(213.3,219.4);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FF9900").s().p("AkGBbIAAi1IINAAIAAC1g");
	this.shape_208.setTransform(191,97.2);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("ABqU+IAAiKIEUAAIAACKgAi/U+IAAiKIESAAIAACKgAnqU+IAAiKIEUAAIAACKgAAYl2IAAi5IIPAAIAAC5gAAYo8IAAi3IIPAAIAAC3gAomo8IAAi3IIPAAIAAC3gAAYr/IAAi3IIPAAIAAC3gAomr/IAAi3IIPAAIAAC3gAAYvDIAAi3IIPAAIAAC3gAomvDIAAi3IIPAAIAAC3gAAYyGIAAi3IIPAAIAAC3gAomyGIAAi3IIPAAIAAC3g");
	this.shape_209.setTransform(219.8,144.2);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#5E5D66").s().p("ABiVwIAAibIAAgDIEkAAIAAADIAACbgABqVnIEUAAIAAiLIkUAAgAjHVwIAAibIAAgDIEjAAIAAADIAACbgAi/VnIESAAIAAiLIkSAAgAnzVwIAAibIAAgDIElAAIAAADIAACbgAnqVnIEUAAIAAiLIkUAAgAALlCIAAvgIIoAAIAAPggAAYlOIIPAAIAAi5IoPAAgAAYoUIIPAAIAAi3IoPAAgAAYrXIIPAAIAAi3IoPAAgAAYubIIPAAIAAi3IoPAAgAAYxeIIPAAIAAi3IoPAAgAoylEIAAveIIoAAIAAPegAomlQIIPAAIAAi3IoPAAgAomoUIIPAAIAAi3IoPAAgAomrXIIPAAIAAi3IoPAAgAomubIIPAAIAAi3IoPAAgAomxeIIPAAIAAi3IoPAAgACw0mIAAhJIDbAAIAABJgAmO0mIAAhJIDbAAIAABJg");
	this.shape_210.setTransform(219.8,140.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.instance_1},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.instance},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Gauges
	this.instance_2 = new lib.B787EICAS_Gauge_EGTLeft("synched",0);
	this.instance_2.setTransform(41.2,97.5);

	this.instance_3 = new lib.B787EICAS_Gauge_N1Left("synched",0);
	this.instance_3.setTransform(41.2,38.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// Line Work
	this.instance_4 = new lib.flapspointer("synched",0);
	this.instance_4.setTransform(213.3,219.4,1,1,0,0,0,28.8,2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.7,-2.7,271.6,282.1);


(lib._787_Generic_screencopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// clock
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXAgQgGgNAAgTQAAgRAGgOQAIgSAPAAQAQAAAIASQAGAOAAARQAAASgGAMQgIAVgQgBQgPAAgIgSgAgNgWQgDAJAAANQAAAOADAKQAFAPAIAAQAJAAAFgQQADgJAAgOQAAgNgDgLQgFgOgJAAQgIABgFAPg");
	this.shape.setTransform(526.4,442.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXAgQgGgNAAgTQAAgRAGgOQAIgSAPAAQAQAAAIASQAGAOAAARQAAASgGAMQgIAVgQgBQgPAAgIgSgAgNgWQgDAJAAANQAAAOADAKQAFAPAIAAQAJAAAFgQQADgJAAgOQAAgNgDgLQgFgOgJAAQgIABgFAPg");
	this.shape_1.setTransform(518.9,442.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXAgQgGgNAAgTQAAgRAGgOQAIgSAPAAQAQAAAIASQAGAOAAARQAAASgGAMQgIAVgQgBQgPAAgIgSgAgNgWQgDAJAAANQAAAOADAKQAFAPAIAAQAJAAAFgQQADgJAAgOQAAgNgDgLQgFgOgJAAQgIABgFAPg");
	this.shape_2.setTransform(511.3,442.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVA5QgKgIAAgMIANAAQABANAQAAQAJAAAFgJQAFgHAAgLQAAgSgOgFQgHgBgVgBIAAg8IA0AAIAAAPIgoAAIAAAfQAUABALAIQANAIAAAVQAAARgJALQgJAMgOAAQgNAAgIgFg");
	this.shape_3.setTransform(503.3,441.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AggA+IAAgNQAAgOAIgNQAGgIAMgMIAPgPQAIgKAAgIQAAgIgGgFQgFgFgGAAQgQAAAAANIgNAAIAAgBQAAgLAJgHQAJgHALAAQANAAAJAIQAJAIAAAPQAAAOgNAOIgXAUQgNAOAAARIAzAAIAAAOg");
	this.shape_4.setTransform(493.7,441.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00CCFF").s().p("AgUAlIAAhJIAKAAIAAA/IAfAAIAAAKg");
	this.shape_5.setTransform(482.8,442.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00CCFF").s().p("AARAlIgFgUIgXAAIgHAUIgJAAIAZhJIAHAAIAXBJgAgIAHIASAAIgKgdg");
	this.shape_6.setTransform(477,442.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00CCFF").s().p("AgDAlIAAhAIgVAAIAAgJIAxAAIAAAJIgUAAIAABAg");
	this.shape_7.setTransform(471.2,442.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00CCFF").s().p("AgUAaQgGgLAAgPQAAgOAGgKQAHgOANAAQAOAAAHAOQAGAKAAAOQAAAPgGAKQgHAOgOAAQgNAAgHgNgAgMgSQgDAIAAAKQAAALADAIQAFALAHAAQAJgBAEgKQADgIAAgLQAAgKgDgHQgEgMgJAAQgHABgFAKg");
	this.shape_8.setTransform(465.3,442.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00CCFF").s().p("AgDAlIAAhAIgVAAIAAgJIAxAAIAAAJIgUAAIAABAg");
	this.shape_9.setTransform(459.5,442.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgXAgQgGgNAAgTQAAgRAGgNQAIgUAPAAQAQAAAIAUQAGANAAARQAAASgGAMQgIAVgQAAQgPAAgIgTgAgNgXQgDAKAAANQAAAOADAKQAFAOAIAAQAJAAAFgPQADgJAAgOQAAgMgDgMQgFgNgJAAQgIgBgFAPg");
	this.shape_10.setTransform(540.5,364.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgSAuQgHgGABgKIAMAAQAAAFACABQADACAEAAQAIAAAGgNQAEgLAAgOIAAAAQgIALgKAAQgLABgHgLQgGgHABgMQgBgMAHgJQAHgLAMAAQAQAAAHAVQAFAKABATQgBATgGAOQgIASgQAAQgJgBgGgEgAgLgeQgDAFAAAIQAAAHADAFQAEAFAHAAQAEAAAFgFQADgFAAgIQAAgIgDgGQgFgFgFAAQgGgBgEAIg");
	this.shape_11.setTransform(533,364.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgSAuQgGgGAAgKIAMAAQAAAFADABQACACAEAAQAJAAAFgNQAEgLAAgOIAAAAQgIALgKAAQgLABgHgLQgGgHABgMQgBgMAHgJQAHgLANAAQAOAAAIAVQAFAKABATQgBATgGAOQgIASgQAAQgJgBgGgEgAgLgeQgDAFAAAIQAAAHADAFQAEAFAHAAQAEAAAFgFQADgFAAgIQAAgIgDgGQgFgFgEAAQgHgBgEAIg");
	this.shape_12.setTransform(525.4,364.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgUA9IAAgGQAAgZAOgdQAGgKAVglIg2AAIAAgOIBDAAIAAAOIgGALQgiA5AAAng");
	this.shape_13.setTransform(517.4,363.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00CCFF").s().p("AALAlQgEgMgDgEQgEgIgEgIIgHAAIAAAgIgKAAIAAhJIAUAAQAHAAAFAGQAFAFAAAKQAAAOgMAEQAFADAGANIAHASgAgLgCIAHAAQAEAAADgCQADgFAAgGQAAgMgJAAIgIAAg");
	this.shape_14.setTransform(534.7,349.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00CCFF").s().p("AgDAlIAAhAIgVAAIAAgJIAxAAIAAAJIgUAAIAABAg");
	this.shape_15.setTransform(528.8,349.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00CCFF").s().p("AgRAZQgGgJAAgQQAAgPAGgJQAHgOANAAQAJAAAGAFQAGAFAAAKIgKAAQAAgGgDgCQgDgCgFgBQgHAAgFAKQgDAIAAALQAAAMADAIQAFAJAHABQALAAAAgLIAKAAIAAACQAAAJgHAEQgFAFgJAAQgNAAgHgOg");
	this.shape_16.setTransform(523,349.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgXAgQgGgNAAgTQAAgRAGgOQAIgSAPAAQAQAAAIASQAGAOAAARQAAASgGAMQgIAVgQgBQgPAAgIgSgAgNgWQgDAJAAANQAAAOADAKQAFAPAIAAQAJAAAFgQQADgJAAgOQAAgNgDgLQgFgOgJAAQgIABgFAPg");
	this.shape_17.setTransform(576.3,415.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgXAgQgGgNAAgTQAAgRAGgOQAIgSAPAAQAQAAAIASQAGAOAAARQAAASgGAMQgIAVgQgBQgPAAgIgSgAgNgWQgDAJAAANQAAAOADAKQAFAPAIAAQAJAAAFgQQADgJAAgOQAAgNgDgLQgFgOgJAAQgIABgFAPg");
	this.shape_18.setTransform(568.8,415.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgRAsQgIgFAAgMIANAAQAAAKAMAAQAFAAAEgGQAEgFAAgIQAAgNgKgEQgFgBgRAAIAAgwIAqAAIAAANIgfAAIAAAXQAOAAAKAHQAKAFgBARQAAANgGAJQgIAKgLAAQgKAAgHgFg");
	this.shape_19.setTransform(561.3,416);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgYA2QgKgKAAgRQAAgWATgKQgPgKAAgRQAAgOAJgJQAJgIAMAAQANAAAJAJQAJAJAAANQAAAJgEAHQgDAFgJAGQAUAJAAAXQAAARgJAKQgKAKgQAAQgPAAgJgKgAgPAIQgGAIAAAKQAAAKAGAIQAHAIAIAAQAKAAAGgIQAFgHAAgLQAAgKgFgIQgHgIgJAAQgIAAgHAIgAgLgtQgFAGAAAIQAAAIAFAGQAFAGAGAAQAHAAAFgGQAFgGAAgIQAAgIgFgGQgEgGgIAAQgGAAgFAGg");
	this.shape_20.setTransform(553.3,414.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00CCFF").s().p("AgTAmIAAgJQAAgIAGgJQACgFAHgGIAIgIQAFgGAAgFQAAgEgDgDQgDgCgDAAQgIAAAAAIIgKAAIAAgCQAAgIAIgEQAEgEAGAAQAIAAAFAEQAGAGAAAJQAAAJgIAJIgMALQgIAIAAAIIAdAAIAAALg");
	this.shape_21.setTransform(564.7,400.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgXAgQgGgNAAgTQAAgRAGgOQAIgSAPAAQAQAAAIASQAGAOAAARQAAASgGAMQgIAVgQgBQgPAAgIgSgAgNgWQgDAJAAANQAAAOADAKQAFAPAIAAQAJAAAFgQQADgJAAgOQAAgNgDgLQgFgOgJAAQgIABgFAPg");
	this.shape_22.setTransform(502.4,415.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgXAgQgGgNAAgTQAAgRAGgOQAIgSAPAAQAQAAAIASQAGAOAAARQAAASgGAMQgIAVgQgBQgPAAgIgSgAgNgWQgDAJAAANQAAAOADAKQAFAPAIAAQAJAAAFgQQADgJAAgOQAAgNgDgLQgFgOgJAAQgIABgFAPg");
	this.shape_23.setTransform(494.9,415.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgRAsQgHgFgBgMIANAAQAAAKAMAAQAFAAAEgGQADgFAAgIQABgNgKgEQgFgBgRAAIAAgwIAqAAIAAANIgfAAIAAAXQAOAAAKAHQAKAFAAARQgBANgGAJQgIAKgLAAQgKAAgHgFg");
	this.shape_24.setTransform(487.4,416);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgYA2QgKgKAAgRQAAgWATgKQgPgKAAgRQAAgOAJgJQAJgIAMAAQANAAAJAJQAJAJAAANQAAAJgEAHQgDAFgJAGQAUAJAAAXQAAARgJAKQgKAKgQAAQgPAAgJgKgAgPAIQgGAIAAAKQAAAKAGAIQAHAIAIAAQAKAAAGgIQAFgHAAgLQAAgKgFgIQgHgIgJAAQgIAAgHAIgAgLgtQgFAGAAAIQAAAIAFAGQAFAGAGAAQAHAAAFgGQAFgGAAgIQAAgIgFgGQgEgGgIAAQgGAAgFAGg");
	this.shape_25.setTransform(479.3,414.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00CCFF").s().p("AAEAlIAAgJIAAAJIgHAAIAAgJIAHAAIgHAAIAAg1IgMAHIAAgKIANgIIAGAAIAABAIANAAIAAAJgAgQAlIAAgJIANAAIAAAJgAgDAcg");
	this.shape_26.setTransform(490.8,400.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00CCFF").s().p("AgVAlIAAhJIARAAQAJAAAGAEQAHAEAAAMQAAAFgDAFQgCAFgEABQAGAAADAEQAEAFAAAHQAAAVgWAAgAgLAbIALAAQALABAAgLQAAgIgGgCQgFgDgGgBIgFAAgAgLgEIAHAAQAEAAABgBQADgBACgEIABgGIAAgEIgCgEIgCgCIgDAAIgLAAg");
	this.shape_27.setTransform(531.1,401.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00CCFF").s().p("AgUAlIAAhJIAKAAIAAA/IAfAAIAAAKg");
	this.shape_28.setTransform(525.3,401.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00CCFF").s().p("AgUAlIAAhJIAKAAIAAA/IAfAAIAAAKg");
	this.shape_29.setTransform(536.9,390.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00CCFF").s().p("AgUAlIAAhJIAkAAIAAALIgaAAIAAAUIAXAAIAAAHIgXAAIAAAZIAfAAIAAAKg");
	this.shape_30.setTransform(531.1,390.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00CCFF").s().p("AgSAeQgFgGAAgOIAAgvIAKAAIAAAuQAAAKADAEQADAFAHAAQAJABADgIQACgFAAgKIAAgrIAKAAIAAAtQAAAegYAAQgMAAgGgIg");
	this.shape_31.setTransform(525.3,391);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#00CCFF").s().p("AgRAlIAAhJIAkAAIAAALIgaAAIAAAWIAWAAIAAAHIgWAAIAAAhg");
	this.shape_32.setTransform(519.5,390.9);

	this.instance = new lib.ENGPRI_fuelgaugectr("synched",0);
	this.instance.setTransform(528.7,364.3,1.1,1.1,0,0,0,24.8,24.8);

	this.instance_1 = new lib.ENGPRI_fuelgauge2("synched",0);
	this.instance_1.setTransform(564.5,415.6,1.1,1.1,0,0,0,24.8,24.8);

	this.instance_2 = new lib.ENGPRI_fuelgauge1("synched",0);
	this.instance_2.setTransform(490.6,415.6,1.1,1.1,0,0,0,24.8,24.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Right
	this.instance_3 = new lib.B787SynopticENGINEAllPositions("synched",0);
	this.instance_3.setTransform(317.3,253.5,1,1,0,0,0,0,206.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// base
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#7E8D9A","#4E616D"],[0,1],-277,218.4,-289.9,200.9).s().p("AACABIgFgCIAHAAIAAADg");
	this.shape_33.setTransform(603.2,41.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("EgXGAgpMAAAhBRMAuFAAAIAGAEIADACMAAABBLg");
	this.shape_34.setTransform(455.6,250);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33}]}).wait(1));

	// base fill
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#4E616D").s().p("EgWyAgpMAAAhBRMAtlAAAMAAABBRg");
	this.shape_35.setTransform(453.6,250);

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(307.6,41,296,417.9);


// stage content:
(lib.dif07p06 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{s1:0});

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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(248).call(this.frame_248).wait(1));

	// prot
	this.prot = new lib.prot();
	this.prot.setTransform(500,275,1,1,0,0,0,500,275);

	this.timeline.addTween(cjs.Tween.get(this.prot).wait(249));

	// 5min
	this.instance = new lib._5min("synched",0);
	this.instance.setTransform(279.5,305.2,1,1,0,0,0,93,52.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(228).to({_off:false},0).to({alpha:1},5).wait(16));

	// cancel
	this.instance_1 = new lib.cancel("synched",0);
	this.instance_1.setTransform(599,423.4,1,1,0,0,0,15,15);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(193).to({_off:false},0).to({alpha:1},5).wait(51));

	// chart
	this.instance_2 = new lib.pipes("synched",0);
	this.instance_2.setTransform(522.7,393.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(54).to({_off:false},0).to({alpha:1},5).wait(190));

	// t2
	this.instance_3 = new lib.point_3("synched",0);
	this.instance_3.setTransform(283.2,196.9,1,1,0,0,0,181.6,34.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(39).to({_off:false},0).to({alpha:1},5).wait(205));

	// pullout
	this.instance_4 = new lib.B787SynopticENGINEAllPositionscopy("synched",0);
	this.instance_4.setTransform(351.9,149.5,0.3,0.3,0,0,0,0,206.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25).to({_off:false},0).to({regY:206.3,scaleX:1,scaleY:1,x:467.5,y:309,alpha:1},5).wait(219));

	// hl
	this.instance_5 = new lib.hl("synched",0);
	this.instance_5.setTransform(384.8,130.2,1,1,0,0,0,33,31.9);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({_off:false},0).to({alpha:1},5).wait(19).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(209));

	// t1
	this.instance_6 = new lib.text("synched",0);
	this.instance_6.setTransform(500,445.7,1,1,0,0,0,163.9,37.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(34).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(209));

	// fuel
	this.instance_7 = new lib._787_Generic_screencopy("synched",0);
	this.instance_7.setTransform(276.1,205.9,0.585,0.585,0,0,0,319.7,250.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(34).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(209));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(500,275,1000,550);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;