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
		{src:"images/en01p06_engine.png", id:"en01p06_engine"},
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



(lib.en01p06_engine = function() {
	this.initialize(img.en01p06_engine);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,409,354);


(lib.texture = function() {
	this.initialize(img.texture);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.t7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// line
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,0,3).p("EgxvgFdMBjgAAAIAAK7MhjgAAAg");
	this.shape.setTransform(311.6,23.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgIAJIAAgQIAQAAIAAAQg");
	this.shape_1.setTransform(614.1,39.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUBUQAYgrAAgpQAAgPgDgQQgBgNgGgMIgOgbIALAAQAPAWAIAXQAHATAAATQAAAXgJAWQgKAWgLARg");
	this.shape_2.setTransform(608.8,35.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgbA6QgPgIgIgQQgIgPAAgTQAAgRAIgQQAIgQAOgIQAPgIARAAQAOAAAMAEQALAFAGAIQAHAIADANIgPAFQgDgKgFgGQgEgFgIgEQgIgEgKAAQgJAAgJAEQgIAEgFAGQgGAFgDAHQgFAMAAANQAAAQAGAMQAGALAMAGQALAGALAAQALAAAKgFQALgDAFgGIAAgXIgmAAIAAgOIA3AAIAAAuQgNAKgNAFQgNAFgOAAQgRAAgQgIg");
	this.shape_3.setTransform(598.5,34);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAhBAIhChjIAABjIgQAAIAAh/IARAAIBCBjIAAhjIAQAAIAAB/g");
	this.shape_4.setTransform(585,34);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAJBUQgLgRgJgWQgJgWAAgXQAAgTAHgTQAIgXAOgWIAMAAIgOAaQgGAMgBAOQgEAQAAAPQAAApAZArg");
	this.shape_5.setTransform(575.8,35.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgdAzQgMgPAAghQAAgjAOgRQALgPATAAQAPAAAKAIQAJAJACAPIgPABQgCgJgEgEQgHgHgJAAQgFAAgGAEQgIAGgEAKQgEAKgBAUQAGgJAJgEQAHgEAIAAQAPAAAMALQALAKAAASQAAANgGAKQgEAKgKAGQgJAFgMAAQgRAAgNgOgAgQABQgHAIAAANQAAAIAEAHQADAIAGAEQAHADAEAAQAKAAAHgIQAIgIAAgOQAAgNgIgIQgGgFgMAAQgIAAgIAFg");
	this.shape_6.setTransform(562.5,34);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgdA3QgLgKgBgQIAQgCQACAMAHAGQAHAGAJAAQAKAAAHgJQAIgIAAgOQAAgOgHgGQgIgHgKgBQgIAAgGAEQgGAEgEADIgOgCIAMhAIA+AAIAAAPIgxAAIgHAjQALgJALABQARgBAMAMQALAKAAATQAAARgKANQgMAPgUAAQgRAAgMgJg");
	this.shape_7.setTransform(552.6,34.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAsBAIAAhqIglBqIgOAAIglhsIAABsIgQAAIAAh/IAaAAIAeBZIAEATIAHgUIAfhYIAXAAIAAB/g");
	this.shape_8.setTransform(535.1,34);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgqBAIAAh/IBVAAIAAAQIhEAAIAAAnIA7AAIAAAOIg7AAIAAA6g");
	this.shape_9.setTransform(522.4,34);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgdA6QgNgJgGgQQgIgQABgRQAAgTAHgQQAIgOAOgIQAOgIAQAAQASAAAOAKQANAKAFARIgQAEQgFgOgJgGQgIgHgNAAQgNABgKAGQgKAIgEAMQgEAMAAAMQAAAPAFAMQAEANAKAFQALAHAKgBQAOABAKgJQAKgIAEgQIARAEQgGAVgOALQgOALgUAAQgTAAgNgIg");
	this.shape_10.setTransform(510.2,34);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgNAAQgIAAgIAHg");
	this.shape_11.setTransform(493.5,35.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgFQgGgGgJAAQgFAAgGAEQgHADgCAHQgDAEAAALIAAAzIgPAAIAAh/IAPAAIAAAuQAMgNAOABQAKAAAIADQAIAFADAHQADAHABAMIAAA7g");
	this.shape_12.setTransform(483.6,34);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgNIAMAAIAAgXIANgJIAAAgIAQAAIAAANIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_13.setTransform(476.1,34.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_14.setTransform(463.5,35.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_15.setTransform(453.5,35.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_16.setTransform(439,35.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgIAAgIAHg");
	this.shape_17.setTransform(429.5,35.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgNIAMAAIAAgXIANgJIAAAgIAQAAIAAANIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_18.setTransform(422.1,34.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_19.setTransform(414.5,35.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_20.setTransform(404.5,35.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgHBAIAAhcIAOAAIAABcgAgHgtIAAgSIAOAAIAAASg");
	this.shape_21.setTransform(397.6,34);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_22.setTransform(388.1,35.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgpBAQAAgFACgGQADgIAIgJQAGgIAOgLQATgRAHgJQAIgKAAgJQgBgJgGgHQgHgGgLAAQgJAAgHAHQgHAHAAAMIgQgCQABgSALgKQALgJARAAQASAAALAKQALAKAAAQQAAAHgDAIQgDAHgIAHQgHAIgRAOIgRARIgGAIIA9AAIAAAPg");
	this.shape_23.setTransform(370.4,33.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_24.setTransform(355.5,35.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgNIAMAAIAAgXIANgJIAAAgIAQAAIAAANIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_25.setTransform(348.1,34.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgMAAgOQAAgNAFgKQAEgLAKgHQAJgFALAAQAHgBAHAEQAGAEAEAFIAAguIAQAAIAAB/IgPAAIAAgMQgIAOgRAAQgKAAgJgGgAgPgJQgIAJABAQQAAATAHAIQAIAJAIAAQAKAAAIgJQAGgIAAgSQAAgRgGgJQgIgIgLgBQgJABgGAIg");
	this.shape_26.setTransform(335.2,34.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_27.setTransform(325.5,35.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_28.setTransform(316,35.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_29.setTransform(306.5,35.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgnBBIAAh/IAPAAIAAAMQAEgHAHgEQAGgDAIAAQAMAAAIAGQAKAGAEALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgGAAgHgDQgHgDgEgFIAAAtgAgRgqQgIAJAAASQAAAQAIAJQAHAIAKAAQAIAAAJgJQAGgIAAgRQAAgSgGgJQgIgJgJAAQgKAAgHAKg");
	this.shape_30.setTransform(296.8,37.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgnBBIAAh/IAPAAIAAAMQAEgHAHgEQAGgDAIAAQALAAAJAGQAKAGAEALQAFAMAAANQAAAOgFAKQgFALgKAGQgKAGgKAAQgGAAgHgDQgHgDgDgFIAAAtgAgRgqQgIAJAAASQAAAQAIAJQAHAIAKAAQAJAAAIgJQAGgIAAgRQAAgSgGgJQgIgJgJAAQgJAAgIAKg");
	this.shape_31.setTransform(286.8,37.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_32.setTransform(276.5,35.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_33.setTransform(262,35.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAJgDIAAgEQAAgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAEAEACAGIABAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgQACg");
	this.shape_34.setTransform(252.5,35.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgIAOQAFgCACgEQABgEAAgGIgHAAIAAgSIAQAAIAAASQAAAIgEAGQgDAGgGADg");
	this.shape_35.setTransform(240,40.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_36.setTransform(233,35.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgNAAQgIAAgIAHg");
	this.shape_37.setTransform(223.5,35.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgNIAMAAIAAgXIANgJIAAAgIAQAAIAAANIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_38.setTransform(216.1,34.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_39.setTransform(208.5,35.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_40.setTransform(198.5,35.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgHBAIAAhcIAOAAIAABcgAgHgtIAAgSIAOAAIAAASg");
	this.shape_41.setTransform(191.6,34);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_42.setTransform(182.1,35.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgcA3QgLgKgCgQIAQgCQADANAGAHQAHAFAJAAQAKAAAHgIQAIgHAAgMQAAgLgHgHQgHgHgLAAQgDAAgGACIABgMIADAAQAIAAAIgFQAIgFAAgLQAAgJgGgGQgGgFgHgBQgJABgGAFQgHAGgBAMIgQgDQADgQAKgIQAKgKAQAAQAIABAJAEQAJAEAFAJQAEAHAAAJQAAAJgEAGQgFAHgIAEQALADAGAGQAHAJAAAMQAAARgNALQgMANgRAAQgRAAgLgLg");
	this.shape_43.setTransform(164.5,34.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_44.setTransform(150,35.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_45.setTransform(143.6,34);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgUBUQAYgrAAgpQAAgPgDgQQgBgNgGgMIgOgbIALAAQAPAWAIAXQAHATAAATQAAAXgJAWQgKAWgLARg");
	this.shape_46.setTransform(133.8,35.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAlBAIggguIgFgJIgFAKIggAtIgVAAIAyhBIgsg+IAUAAIAYAhIAIAQIAKgOIAbgjIASAAIgtA9IAwBCg");
	this.shape_47.setTransform(124.6,34);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAoBAIgPgnIg0AAIgNAnIgTAAIAxh/IARAAIA1B/gAgHgZIgOAkIApAAIgOghIgHgbQgCAMgEAMg");
	this.shape_48.setTransform(112.6,34);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAtBAIAAhqIgmBqIgNAAIglhsIAABsIgRAAIAAh/IAaAAIAeBZIAEATIAHgUIAfhYIAXAAIAAB/g");
	this.shape_49.setTransform(99.1,34);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAJBUQgLgRgJgWQgJgWAAgXQAAgTAHgTQAIgXAOgWIAMAAIgOAaQgGAMgBAOQgEAQAAAPQAAApAZArg");
	this.shape_50.setTransform(88.8,35.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgvBAIAAh/IAvAAQAOAAAJAEQAJAEAFAIQAFAIAAAJQAAAJgEAGQgFAIgJAFQAMACAGAHQAGAIAAALQAAAKgEAHQgDAJgGADQgGAEgIADQgJACgMAAgAgeAxIAeAAIAMgBQAGgBAEgDQADgCADgFQADgEAAgHQAAgGgEgGQgEgFgGgDQgHgBgKAAIgeAAgAgegJIAcAAQAJABAFgCQAHgCADgFQADgEAAgHQAAgGgDgFQgDgFgGgCQgFgCgMABIgaAAg");
	this.shape_51.setTransform(74.7,34);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAHBAIAAhjQgFAGgHAFIgRAJIAAgQQANgGAJgJQAJgJAEgIIAKAAIAAB/g");
	this.shape_52.setTransform(62.9,33.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgXAHIAAgOIAvAAIAAAOg");
	this.shape_53.setTransform(55.6,35.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgwBAIAAh/IAwAAQAMAAAHABQAJACAGAFQAHAEAEAIQADAIAAAJQABARgKAJQgLAMgbAAIggAAIAAA0gAgfgBIAgAAQAQAAAHgHQAHgGAAgLQAAgIgEgGQgEgFgHgCIgPgBIggAAg");
	this.shape_54.setTransform(46.9,34);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAoBAIgOgnIg0AAIgPAnIgSAAIAyh/IAQAAIA1B/gAgHgZIgPAkIAqAAIgNghIgHgbQgDAMgEAMg");
	this.shape_55.setTransform(34.6,34);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgvBAIAAh/IBcAAIAAAQIhKAAIAAAnIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_56.setTransform(22.8,34);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgnBAIAAh/IARAAIAABwIA+AAIAAAPg");
	this.shape_57.setTransform(11.9,34);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAIAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_58.setTransform(553.3,13.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAWBAIAAg7QgBgKgFgGQgEgFgKAAQgFAAgGAEQgGAEgDAFQgDAFAAALIAAAzIgQAAIAAh/IAQAAIAAAvQALgNAPgBQALAAAHAFQAIAEADAHQADAHAAAMIAAA7g");
	this.shape_59.setTransform(543.4,11.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_60.setTransform(535.9,12.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAGAAQAIAAAIAFIgGAPQgFgEgGAAQgGAAgCADQgDADgDAGQgCAIAAAKIAAAvg");
	this.shape_61.setTransform(526.1,13.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_62.setTransform(517.3,13.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgKQAAgIACgFQACgHAGgDQAEgEAKAAIAPABIgDAOIgJAAQgHAAgDACQgDADAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_63.setTransform(510.3,11.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgKQAAgIACgFQACgHAGgDQADgEALAAIAPABIgDAOIgJAAQgHAAgDACQgDADAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_64.setTransform(500.3,11.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgKQAAgIACgFQACgHAGgDQADgEALAAIAPABIgDAOIgJAAQgHAAgDACQgDADAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_65.setTransform(495.6,11.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_66.setTransform(487.7,13.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgIAAgIAHg");
	this.shape_67.setTransform(477.7,13.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AATBAIgdgvIgLAKIAAAlIgQAAIAAh/IAQAAIAABIIAjglIAUAAIgiAhIAmA7g");
	this.shape_68.setTransform(468.8,11.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQADgKAEgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgGADgJAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_69.setTransform(458.7,13.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_70.setTransform(451.3,12.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgLAAQgKAAgHAHg");
	this.shape_71.setTransform(438.7,13.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAJAAAIAFIgFAPQgHgEgFAAQgFAAgDADQgDADgCAGQgDAIAAAKIAAAvg");
	this.shape_72.setTransform(431.4,13.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_73.setTransform(422.7,13.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgKQAAgIACgFQACgHAGgDQADgEALAAIAPABIgCAOIgKAAQgHAAgDACQgDADAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_74.setTransform(415.6,11.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgeAkQgLgNAAgXQAAgVALgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgLAAQgJAAgIAHg");
	this.shape_75.setTransform(407.7,13.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgYA0IAAALIgPAAIAAh/IAQAAIAAAuQAKgNANAAQAJABAIADQAHAEAFAGQAFAGADAJQADAHAAAKQAAAYgMANQgMANgQAAQgPAAgJgNgAgRgIQgHAIAAAQQAAAQAEAIQAIAMAMAAQAJAAAHgJQAIgJAAgSQAAgQgHgIQgIgJgJAAQgJAAgIAJg");
	this.shape_76.setTransform(397.9,12);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_77.setTransform(382.7,13.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_78.setTransform(370.2,13.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgGBAIAAhcIAOAAIAABcgAgGgsIAAgTIAOAAIAAATg");
	this.shape_79.setTransform(360.7,11.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_80.setTransform(356.3,12.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgnBBIAAh/IAPAAIAAAMQAEgHAHgEQAGgDAIAAQALAAAJAGQAKAGAEALQAFAMAAANQAAAOgFAKQgFALgKAGQgKAGgKAAQgGAAgHgDQgHgDgDgFIAAAtgAgRgqQgIAJAAASQAAAQAIAJQAHAIAKAAQAJAAAIgJQAGgIAAgRQAAgSgGgJQgIgJgJAAQgJAAgIAKg");
	this.shape_81.setTransform(344,15.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_82.setTransform(333.6,13.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_83.setTransform(316.2,13.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAIAAAJAFIgFAPQgHgEgFAAQgGAAgCADQgDADgCAGQgDAIAAAKIAAAvg");
	this.shape_84.setTransform(306.4,13.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AghApQgJgIAAgLQABgHADgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQADgKAEgGQAFgHAJgDQAKgDAJAAQANAAAHADQAHACAEAFQADAEABAGIABAPIAAATQAAAWACAGQABAGACAFIgQAAQgDgFAAgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgDADAAAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_85.setTransform(297.7,13.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AASAuIgPg2IgDgQIgSBGIgQAAIgdhbIARAAIAPA0IAFAUIAFgTIAPg1IAOAAIAOA0IAFASIAFgSIAQg0IAQAAIgeBbg");
	this.shape_86.setTransform(286.2,13.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgMgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_87.setTransform(269.7,13.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_88.setTransform(259.7,13.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgGBAIAAhcIAOAAIAABcgAgGgsIAAgTIAOAAIAAATg");
	this.shape_89.setTransform(252.7,11.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgaA7QgLgIAAgPIAQACQABAHAEAEQAGAEAKAAQAJAAAGgEQAGgFACgIQABgEAAgQQgKAMgOAAQgSAAgLgOQgLgOAAgRQABgNAEgMQAFgLAJgGQAJgGAMAAQAPAAALANIAAgLIAOAAIAABPQABAVgFAKQgFAJgJAFQgJAFgNAAQgRAAgJgHgAgQgrQgHAIAAARQAAASAHAHQAHAIAJAAQALAAAIgIQAHgHAAgSQAAgRgIgIQgHgJgLAAQgJAAgHAJg");
	this.shape_90.setTransform(245.4,15.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_91.setTransform(235.7,13.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMgBAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgIAAgIAHg");
	this.shape_92.setTransform(225.7,13.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgLAAgOQAAgOAFgKQAFgMAJgFQAJgHALAAQAHABAHADQAGADAEAHIAAgvIAQAAIAAB/IgPAAIAAgMQgJAOgQAAQgKAAgJgGgAgQgIQgGAIAAARQgBARAIAJQAHAJAJAAQAKAAAHgIQAIgJgBgRQABgSgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_93.setTransform(210.4,12);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgMgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgLAAQgJAAgIAHg");
	this.shape_94.setTransform(200.7,13.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgLAAgOQAAgOAFgKQAEgMAKgFQAJgHALAAQAHABAHADQAGADAFAHIAAgvIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgQgIQgGAIgBARQAAARAIAJQAHAJAJAAQAKAAAHgIQAIgJAAgRQAAgSgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_95.setTransform(190.4,12);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_96.setTransform(180.7,13.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_97.setTransform(170.7,13.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_98.setTransform(158.2,13.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_99.setTransform(143.2,13.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_100.setTransform(130.7,13.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_101.setTransform(121.5,13.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_102.setTransform(111.7,13.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgFgEgGAAQgGAAgCADQgDADgDAGQgCAIAAAKIAAAvg");
	this.shape_103.setTransform(104.4,13.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgIAAgIAHg");
	this.shape_104.setTransform(90.7,13.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgGQgGgFgJAAQgFAAgHAEQgGAEgCAFQgDAFAAALIAAAzIgQAAIAAh/IAQAAIAAAvQAMgNAOgBQALAAAHAFQAIAEADAHQADAHABAMIAAA7g");
	this.shape_105.setTransform(80.7,11.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgHBAIAAhwIgrAAIAAgPIBlAAIAAAPIgrAAIAABwg");
	this.shape_106.setTransform(70.2,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.9,-12.9,639,72);


(lib.t6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIAuIAAgSIAQAAIAAASgAgIgbIAAgSIAQAAIAAASg");
	this.shape.setTransform(252.6,13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_1.setTransform(245.4,13.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_2.setTransform(238.6,12.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgnBBIAAh/IAPAAIAAAMQAFgHAGgEQAGgDAIAAQALAAAKAGQAJAGAEALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgHAAgGgDQgGgDgEgFIAAAtgAgRgqQgIAJAAASQAAAQAHAJQAIAIAKAAQAJAAAHgJQAIgIgBgRQABgSgIgJQgHgJgJAAQgKAAgHAKg");
	this.shape_3.setTransform(231.3,15.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_4.setTransform(218.5,13.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgNAAQgIAAgIAHg");
	this.shape_5.setTransform(206,13.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_6.setTransform(198.6,12.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_7.setTransform(193.6,12.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQADgKAEgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgGADgJAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_8.setTransform(186,13.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_9.setTransform(173.6,12.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_10.setTransform(166,13.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgVAMgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAIAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_11.setTransform(156,13.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_12.setTransform(145.9,13.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAYBBIAAguQgEAGgGADQgHADgHAAQgPAAgMgNQgMgNAAgVQAAgOAFgMQAFgLAJgFQAJgGALAAQAQAAAKAOIAAgMIAOAAIAAB/gAgPgrQgIAJAAASQAAAQAIAJQAHAJAJAAQAKAAAHgIQAIgJAAgPQAAgTgIgJQgIgKgKAAQgIAAgHAJg");
	this.shape_13.setTransform(135.7,15.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgeAkQgLgNAAgXQAAgVALgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgLAAQgJAAgIAHg");
	this.shape_14.setTransform(126,13.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_15.setTransform(116.4,13.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgYA0IAAALIgPAAIAAh/IAQAAIAAAuQAKgNANAAQAJABAIADQAHAEAFAGQAFAGADAJQADAHAAAKQAAAYgMANQgMANgQAAQgPAAgJgNgAgRgIQgHAIAAAQQAAAQAEAIQAIAMAMAAQAJAAAHgJQAIgJAAgSQAAgQgHgIQgIgJgJAAQgJAAgIAJg");
	this.shape_16.setTransform(107.2,12);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_17.setTransform(96.9,13.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_18.setTransform(87.4,13.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgLAAgOQAAgOAFgKQAFgMAJgFQAJgHALAAQAHABAHADQAGADAFAHIAAgvIAPAAIAAB/IgPAAIAAgMQgJAOgQAAQgKAAgJgGgAgQgIQgGAIAAARQgBARAIAJQAHAJAJAAQAKAAAHgIQAIgJgBgRQABgSgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_19.setTransform(72.7,12);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_20.setTransform(63,13.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHADgGQADgGAFgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgGAEQgFAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQALAAAIADQAHACAEAFQADAEABAGIACAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgCADgBAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgPACg");
	this.shape_21.setTransform(53,13.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgLAAgOQAAgOAFgKQAFgMAJgFQAJgHALAAQAHABAHADQAGADAEAHIAAgvIAQAAIAAB/IgPAAIAAgMQgIAOgRAAQgKAAgJgGgAgQgIQgGAIAAARQgBARAIAJQAIAJAIAAQAKAAAHgIQAIgJgBgRQABgSgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_22.setTransform(37.7,12);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgFgEgGAAQgGAAgCADQgEADgCAGQgCAIAAAKIAAAvg");
	this.shape_23.setTransform(30.7,13.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgGBAIAAhcIAOAAIAABcgAgGgsIAAgTIAOAAIAAATg");
	this.shape_24.setTransform(25,11.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgGQgGgFgJAAQgFAAgGAEQgGAEgDAFQgDAFAAALIAAAzIgPAAIAAh/IAPAAIAAAvQAMgNAOgBQALAAAHAFQAIAEADAHQAEAHgBAMIAAA7g");
	this.shape_25.setTransform(18,11.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgHBAIAAhwIgrAAIAAgPIBlAAIAAAPIgrAAIAABwg");
	this.shape_26.setTransform(7.5,11.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgKQAAgJACgEQACgGAGgEQADgEALAAIAPABIgCAPIgKgBQgHAAgDADQgDACAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_27.setTransform(142.6,61.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgKQAAgJACgEQACgGAGgEQAEgEAKAAIAPABIgDAPIgJgBQgHAAgDADQgDACAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_28.setTransform(137.9,61.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_29.setTransform(130,63.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_30.setTransform(115.4,63.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgIAAgIAHg");
	this.shape_31.setTransform(106,63.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgBA8QgFgCgCgEQgBgFAAgPIAAgzIgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABABIAFAAIAHAAIACAOIgMABQgIAAgDgDg");
	this.shape_32.setTransform(98.6,62.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_33.setTransform(90.9,63.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_34.setTransform(81,63.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgHBAIAAhcIAOAAIAABcgAgHgtIAAgSIAOAAIAAASg");
	this.shape_35.setTransform(74,62);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_36.setTransform(64.5,63.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgcA0QgNgQAAgkQABgVAEgOQAFgOAJgIQAJgHANAAQAKAAAIAEQAHAEAFAIQAFAIADALQADAMAAARQABAWgFAOQgFAOgJAIQgJAHgOAAQgRAAgLgNgAgQgqQgIAMAAAeQAAAfAHALQAIAKAJAAQAKAAAIgKQAHgLAAgfQAAgegHgLQgIgKgKAAQgJAAgHAJg");
	this.shape_37.setTransform(47,62);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAHBAIAAhjQgFAGgHAFIgRAJIAAgQQANgGAJgJQAJgJAEgIIAKAAIAAB/g");
	this.shape_38.setTransform(36.3,61.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AghA/IgCgPIAJACQAFAAAEgCQADgCACgDIAFgMIABgEIgjhbIARAAIATA2IAFAUIAGgUIAUg2IAQAAIgjBdIgHAVQgEAIgGAEQgFADgIAAQgEAAgGgCg");
	this.shape_39.setTransform(310.6,40.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgYAzIAAAMIgPAAIAAh/IAQAAIAAAuQAKgNANAAQAJABAIADQAHAEAFAGQAFAGADAJQADAHAAAKQAAAYgMANQgMANgQAAQgPAAgJgOgAgRgIQgHAIAAAPQAAASAEAHQAIAMAMAAQAJAAAHgJQAIgJAAgSQAAgQgHgIQgIgJgJAAQgJAAgIAJg");
	this.shape_40.setTransform(301.2,37.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgTA7QgKgGgFgLQgFgLAAgOQAAgOAFgKQAFgMAJgFQAJgHALAAQAHABAGADQAHADAFAHIAAgvIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgQgIQgHAIAAARQAAARAIAJQAHAJAJAAQAKAAAHgIQAIgJAAgRQAAgSgIgIQgHgJgLAAQgJAAgHAJg");
	this.shape_41.setTransform(285.7,37.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_42.setTransform(276,38.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AASAuIgPg2IgDgQIgSBGIgQAAIgdhbIARAAIAPA0IAFAUIAFgTIAPg1IAOAAIAOA0IAFASIAFgSIAQg0IAPAAIgdBbg");
	this.shape_43.setTransform(264.5,38.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_44.setTransform(253,38.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgGBAIAAh/IAOAAIAAB/g");
	this.shape_45.setTransform(246,37);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_46.setTransform(242,37);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_47.setTransform(235,38.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgKQAAgIACgFQACgHAGgDQAEgEAKAAIAPABIgDAPIgJgBQgHAAgDACQgDADAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_48.setTransform(227.9,36.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgNAAQgIAAgIAHg");
	this.shape_49.setTransform(215,38.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgbA7QgKgIAAgPIAQACQABAHAEAEQAGAEAKAAQAKAAAFgEQAGgFACgIQABgEAAgQQgKAMgOAAQgTAAgKgOQgKgOAAgRQAAgNAEgMQAFgLAJgGQAJgGAMAAQAQAAAKANIAAgLIAPAAIAABPQgBAVgEAKQgEAJgKAFQgJAFgNAAQgQAAgLgHgAgQgrQgIAIABARQgBASAIAHQAHAIAJAAQALAAAIgIQAHgHAAgSQAAgRgIgIQgIgJgKAAQgIAAgIAJg");
	this.shape_50.setTransform(204.7,40.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQADgKAEgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgGADgJAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_51.setTransform(195,38.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_52.setTransform(185.4,38.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_53.setTransform(175.9,38.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAGAAQAHAAAJAFIgGAPQgFgEgGAAQgFAAgDADQgEADgCAGQgCAIAAAKIAAAvg");
	this.shape_54.setTransform(163.7,38.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQAMAMgBAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_55.setTransform(155,38.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_56.setTransform(147.6,37.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAGAAQAHAAAJAFIgFAPQgHgEgFAAQgFAAgDADQgEADgBAGQgDAIAAAKIAAAvg");
	this.shape_57.setTransform(142.7,38.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHADgGQADgGAFgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgGAEQgFAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQALAAAIADQAHACAEAFQADAEABAGIACAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgCADgBAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgPACg");
	this.shape_58.setTransform(134,38.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_59.setTransform(126.6,37.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_60.setTransform(119.4,38.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_61.setTransform(105.4,38.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgMgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_62.setTransform(96,38.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_63.setTransform(88.6,37.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_64.setTransform(80.9,38.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_65.setTransform(71,38.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgHBAIAAhcIAOAAIAABcgAgHgtIAAgSIAOAAIAAASg");
	this.shape_66.setTransform(64,37);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_67.setTransform(54.5,38.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgdA3QgLgLgBgQIAQgBQACAMAHAGQAHAGAJAAQAKAAAHgIQAIgJAAgPQAAgNgHgGQgIgIgKABQgIgBgGAEQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAiQALgHALgBQARABAMAMQALAJAAATQAAARgKAMQgMAQgUAAQgRAAgMgJg");
	this.shape_68.setTransform(37,37.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,317.2,74.2);


(lib.t5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIAuIAAgSIAQAAIAAASgAgIgbIAAgSIAQAAIAAASg");
	this.shape.setTransform(54.6,13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgpBAQAAgFACgGQADgIAIgJQAGgIAOgLQATgRAHgJQAIgKAAgJQgBgJgGgHQgHgGgLAAQgJAAgHAHQgHAHAAAMIgQgCQABgSALgKQALgJARAAQASAAALAKQALAKAAAQQAAAHgDAIQgDAHgIAHQgHAIgRAOIgRARQgEAEgCAEIA9AAIAAAPg");
	this.shape_1.setTransform(46.8,11.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_2.setTransform(34.6,12.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_3.setTransform(27.4,13.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAGAAQAIAAAIAFIgGAPQgFgEgGAAQgGAAgCADQgDADgDAGQgCAIAAAKIAAAvg");
	this.shape_4.setTransform(20.7,13.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGBAIAAhcIAOAAIAABcgAgGgsIAAgTIAOAAIAAATg");
	this.shape_5.setTransform(15,11.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgqBAIAAh/IBVAAIAAAPIhEAAIAAApIA7AAIAAAMIg7AAIAAA7g");
	this.shape_6.setTransform(7.8,11.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgKQAAgJACgEQACgGAGgEQADgEALAAIAPABIgCAPIgKgBQgHAAgDADQgDACAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_7.setTransform(132.6,61.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgKQAAgJACgEQACgGAGgEQAEgEAKAAIAPABIgCAPIgKgBQgHAAgDADQgDACAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_8.setTransform(127.9,61.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_9.setTransform(120,63.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_10.setTransform(105.4,63.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgMgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_11.setTransform(96,63.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgBA8QgFgCgCgEQgBgFAAgPIAAgzIgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABABIAFAAIAHAAIACAOIgMABQgIAAgDgDg");
	this.shape_12.setTransform(88.6,62.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_13.setTransform(80.9,63.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_14.setTransform(71,63.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgHBAIAAhcIAOAAIAABcgAgHgtIAAgSIAOAAIAAASg");
	this.shape_15.setTransform(64,62);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_16.setTransform(54.5,63.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgdA3QgLgLgBgPIAQgCQACAMAHAGQAHAGAJAAQAKAAAHgJQAIgIAAgOQAAgOgHgGQgIgHgKAAQgIAAgGADQgGAEgEADIgOgCIAMhAIA+AAIAAAPIgxAAIgHAjQALgJALAAQARAAAMAMQALAKAAATQAAARgKAMQgMAQgUAAQgRAAgMgJg");
	this.shape_17.setTransform(37,62.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AghA/IgCgPIAJACQAFAAAEgCQADgCACgDIAFgMIABgEIgjhbIARAAIATA2IAFAUIAGgUIAUg2IAQAAIgjBdIgHAVQgEAIgGAEQgFADgIAAQgEAAgGgCg");
	this.shape_18.setTransform(310.6,40.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgYAzIAAAMIgPAAIAAh/IAQAAIAAAuQAKgNANAAQAJABAIADQAHAEAFAGQAFAGADAJQADAHAAAKQAAAYgMANQgMANgQAAQgPAAgJgOgAgRgIQgHAIAAAPQAAASAEAHQAIAMAMAAQAJAAAHgJQAIgJAAgSQAAgQgHgIQgIgJgJAAQgJAAgIAJg");
	this.shape_19.setTransform(301.2,37.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgTA7QgKgGgFgLQgFgLAAgOQAAgOAFgKQAFgMAJgFQAJgHALAAQAHABAGADQAHADAFAHIAAgvIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgQgIQgHAIAAARQAAARAIAJQAHAJAJAAQAKAAAHgIQAIgJAAgRQAAgSgIgIQgHgJgLAAQgJAAgHAJg");
	this.shape_20.setTransform(285.7,37.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_21.setTransform(276,38.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AASAuIgPg2IgDgQIgSBGIgQAAIgdhbIARAAIAPA0IAFAUIAFgTIAPg1IAOAAIAOA0IAFASIAFgSIAQg0IAPAAIgdBbg");
	this.shape_22.setTransform(264.5,38.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_23.setTransform(253,38.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgGBAIAAh/IAOAAIAAB/g");
	this.shape_24.setTransform(246,37);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_25.setTransform(242,37);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_26.setTransform(235,38.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgKQAAgIACgFQACgHAGgDQAEgEAKAAIAPABIgDAPIgJgBQgHAAgDACQgDADAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_27.setTransform(227.9,36.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgNAAQgIAAgIAHg");
	this.shape_28.setTransform(215,38.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgbA7QgKgIAAgPIAQACQABAHAEAEQAGAEAKAAQAKAAAFgEQAGgFACgIQABgEAAgQQgKAMgOAAQgTAAgKgOQgKgOAAgRQAAgNAEgMQAFgLAJgGQAJgGAMAAQAQAAAKANIAAgLIAPAAIAABPQgBAVgEAKQgEAJgKAFQgJAFgNAAQgQAAgLgHgAgQgrQgIAIABARQgBASAIAHQAHAIAJAAQALAAAIgIQAHgHAAgSQAAgRgIgIQgIgJgKAAQgIAAgIAJg");
	this.shape_29.setTransform(204.7,40.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQADgKAEgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgGADgJAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_30.setTransform(195,38.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_31.setTransform(185.4,38.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_32.setTransform(175.9,38.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAGAAQAHAAAJAFIgGAPQgFgEgGAAQgFAAgDADQgEADgCAGQgCAIAAAKIAAAvg");
	this.shape_33.setTransform(163.7,38.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQAMAMgBAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_34.setTransform(155,38.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_35.setTransform(147.6,37.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAGAAQAHAAAJAFIgFAPQgHgEgFAAQgFAAgDADQgEADgBAGQgDAIAAAKIAAAvg");
	this.shape_36.setTransform(142.7,38.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHADgGQADgGAFgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgGAEQgFAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQALAAAIADQAHACAEAFQADAEABAGIACAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgCADgBAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgPACg");
	this.shape_37.setTransform(134,38.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_38.setTransform(126.6,37.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_39.setTransform(119.4,38.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_40.setTransform(105.4,38.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgMgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_41.setTransform(96,38.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_42.setTransform(88.6,37.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_43.setTransform(80.9,38.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_44.setTransform(71,38.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgHBAIAAhcIAOAAIAABcgAgHgtIAAgSIAOAAIAAASg");
	this.shape_45.setTransform(64,37);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_46.setTransform(54.5,38.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgdA3QgLgLgBgQIAQgBQACAMAHAGQAHAGAJAAQAKAAAHgIQAIgJAAgPQAAgNgHgGQgIgIgKABQgIgBgGAEQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAiQALgHALgBQARABAMAMQALAJAAATQAAARgKAMQgMAQgUAAQgRAAgMgJg");
	this.shape_47.setTransform(37,37.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,317.2,74.2);


(lib.t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYA9QgMgFgHgKQgGgKgBgOIAQgBQACAKAEAGQAEAHAJADQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgEQgEgFgIgDIgVgHQgRgDgHgDQgKgEgEgIQgFgHAAgJQAAgKAGgIQAFgIALgEQALgFAMAAQANAAALAFQALAEAGAJQAGAJAAAMIgQABQgCgMgHgHQgIgGgOAAQgOAAgHAGQgHAGAAAHQAAAIAFADQAFAFASAFQAVAFAIADQALADAGAJQAFAHAAALQAAAKgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape.setTransform(283.5,11.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgbA6QgPgIgIgPQgIgQAAgTQAAgQAIgRQAIgQAOgIQAPgIARAAQAOAAAMAFQALAEAGAIQAHAIADANIgPAEQgDgKgFgFQgEgGgIgDQgIgDgKAAQgJAAgJADQgIAEgFAFQgGAHgDAGQgFAMAAANQAAAQAGAMQAGAMAMAFQALAGALAAQALAAAKgEQALgEAFgFIAAgZIgmAAIAAgNIA3AAIAAAuQgNAKgNAFQgNAFgOAAQgRAAgQgIg");
	this.shape_1.setTransform(270.5,11.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAhBAIhChjIAABjIgQAAIAAh/IARAAIBCBkIAAhkIAQAAIAAB/g");
	this.shape_2.setTransform(257,11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_3.setTransform(248.2,11.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAjBAIgRgbIgMgRIgHgJIgIgDIgJgBIgUAAIAAA5IgRAAIAAh/IA3AAQARAAAJAEQAJADAGAJQAFAJAAAKQAAAOgJAJQgJAIgSACQAGAEAEADQAHAHAHAKIAWAjgAgmgGIAlAAQAJAAAHgCQAGgDAEgFQADgFAAgHQAAgJgGgFQgHgHgOAAIgnAAg");
	this.shape_4.setTransform(239.7,11.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgfA5QgOgIgIgQQgHgPAAgRQAAgeARgSQARgSAaAAQARAAAPAIQAOAJAIAPQAHAPAAASQAAAUgIAPQgIAQgOAHQgPAIgQAAQgRAAgOgJgAgdgmQgNANAAAbQAAAXAMANQANANARAAQATAAAMgNQANgNAAgZQAAgOgGgMQgFgLgKgHQgLgGgMAAQgQAAgNAMg");
	this.shape_5.setTransform(225.6,11.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgHBAIAAhwIgrAAIAAgPIBlAAIAAAPIgrAAIAABwg");
	this.shape_6.setTransform(213.5,11.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgfA5QgOgIgIgQQgHgPAAgRQAAgeARgSQARgSAaAAQARAAAPAIQAOAJAIAPQAHAPAAASQAAAUgIAPQgIAQgOAHQgPAIgQAAQgRAAgOgJgAgdgmQgNANAAAbQAAAXAMANQANANARAAQATAAAMgNQANgNAAgZQAAgOgGgMQgFgLgKgHQgLgGgMAAQgQAAgNAMg");
	this.shape_7.setTransform(201,11.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAsBAIAAhqIglBqIgOAAIglhrIAABrIgQAAIAAh/IAZAAIAfBaIAEATIAHgVIAfhYIAXAAIAAB/g");
	this.shape_8.setTransform(186.5,11.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgvBAIAAh/IBcAAIAAAPIhKAAIAAAoIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_9.setTransform(168.2,11.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAhBAIhChjIAABjIgQAAIAAh/IARAAIBCBkIAAhkIAQAAIAAB/g");
	this.shape_10.setTransform(155.4,11.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_11.setTransform(146.6,11.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgbA6QgPgIgIgPQgIgQAAgTQAAgQAIgRQAIgQAOgIQAPgIARAAQAOAAAMAFQALAEAGAIQAHAIADANIgPAEQgDgKgFgFQgEgGgIgDQgIgDgKAAQgJAAgJADQgIAEgFAFQgGAHgDAGQgFAMAAANQAAAQAGAMQAGAMAMAFQALAGALAAQALAAAKgEQALgEAFgFIAAgZIgmAAIAAgNIA3AAIAAAuQgNAKgNAFQgNAFgOAAQgRAAgQgIg");
	this.shape_12.setTransform(136.9,11.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAhBAIhChjIAABjIgQAAIAAh/IARAAIBCBkIAAhkIAQAAIAAB/g");
	this.shape_13.setTransform(123.4,11.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgvBAIAAh/IBcAAIAAAPIhKAAIAAAoIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_14.setTransform(111.2,11.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag0BAIAAh/IAtAAQANAAAHACQAMACAHAHQALAJAFANQAFAOAAAQQAAANgEAMQgDALgGAIQgFAHgGAFQgHADgJADQgJACgJAAgAgjAxIAcAAQAKAAAIgCQAHgDAEgFQAGgFAEgLQADgKAAgNQAAgUgHgLQgGgLgKgDQgHgCgNgBIgbAAg");
	this.shape_15.setTransform(93.7,11.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgvBAIAAh/IBcAAIAAAPIhKAAIAAAoIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_16.setTransform(81.2,11.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ag0BAIAAh/IAtAAQANAAAHACQAMACAHAHQALAJAFANQAFAOAAAQQAAANgEAMQgDALgGAIQgFAHgGAFQgHADgJADQgJACgJAAgAgjAxIAcAAQAKAAAIgCQAHgDAEgFQAGgFAEgLQADgKAAgNQAAgUgHgLQgGgLgKgDQgHgCgNgBIgbAAg");
	this.shape_17.setTransform(68.7,11.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAhBAIhChjIAABjIgQAAIAAh/IARAAIBCBkIAAhkIAQAAIAAB/g");
	this.shape_18.setTransform(55.4,11.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgvBAIAAh/IBcAAIAAAPIhKAAIAAAoIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_19.setTransform(43.2,11.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgHBAIAAhwIgrAAIAAgPIBlAAIAAAPIgrAAIAABwg");
	this.shape_20.setTransform(31.5,11.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAlBAIggguIgFgIIgFAJIggAtIgUAAIAxhBIgsg+IAVAAIAXAhIAIAQIAKgPIAagiIATAAIguA9IAyBCg");
	this.shape_21.setTransform(20,11.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgvBAIAAh/IBcAAIAAAPIhKAAIAAAoIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_22.setTransform(8.2,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,291.8,24.1);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape.setTransform(75.4,63.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgVAMgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAIAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_1.setTransform(66,63.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgBA8QgFgCgCgEQgBgFAAgPIAAgzIgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABABIAFAAIAHAAIACAOIgMABQgIAAgDgDg");
	this.shape_2.setTransform(58.6,62.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_3.setTransform(50.9,63.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_4.setTransform(41,63.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGBAIAAhcIAOAAIAABcgAgGgtIAAgSIAOAAIAAASg");
	this.shape_5.setTransform(34,62);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_6.setTransform(24.5,63.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgpBAQAAgFACgGQADgIAHgJQAIgIANgLQATgRAIgJQAGgKAAgJQABgJgHgHQgHgGgKAAQgKAAgHAHQgHAHAAAMIgQgCQACgSALgKQAKgJARAAQATAAAKAKQALAKAAAQQAAAHgDAIQgEAHgGAHQgIAIgRAOIgQARIgHAIIA9AAIAAAPg");
	this.shape_7.setTransform(6.8,61.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgvBAIAAh/IBcAAIAAAPIhKAAIAAAoIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_8.setTransform(278.5,37);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgnBAIAAh/IARAAIAABwIA+AAIAAAPg");
	this.shape_9.setTransform(267.6,37);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgdA6QgNgJgGgQQgIgQAAgRQABgTAHgPQAIgQAOgHQAOgIAQAAQASAAAOAKQANAJAFASIgQAFQgFgPgJgGQgIgGgNAAQgNgBgKAIQgKAHgEAMQgEAMAAAMQAAAPAFANQAEALAKAHQALAFAKAAQAOAAAKgIQAKgIAEgQIARAEQgGAVgOALQgOALgUAAQgTAAgNgIg");
	this.shape_10.setTransform(255.9,37);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgIBAIAAg2IgyhJIAWAAIAYAnIAMAWQAGgKAIgNIAZgmIATAAIgzBJIAAA2g");
	this.shape_11.setTransform(243.3,37);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgdA6QgNgJgHgQQgHgQAAgRQAAgTAIgPQAIgQAOgHQAOgIAQAAQASAAAOAKQANAJAFASIgQAFQgFgPgJgGQgIgGgNAAQgNgBgKAIQgKAHgEAMQgEAMAAAMQAAAPAFANQAFALAJAHQALAFAKAAQAOAAAKgIQAKgIADgQIASAEQgGAVgOALQgOALgUAAQgTAAgNgIg");
	this.shape_12.setTransform(230.9,37);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgIBAIAAg2IgxhJIAUAAIAaAnIALAWQAFgKAJgNIAZgmIAUAAIg0BJIAAA2g");
	this.shape_13.setTransform(213.6,37);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgHBAIAAhwIgrAAIAAgPIBlAAIAAAPIgrAAIAABwg");
	this.shape_14.setTransform(202.2,37);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgcA7QgLgHgFgLQgFgMAAgUIAAhJIARAAIAABJQAAARADAHQADAIAIAFQAHAEALAAQARAAAIgJQAIgIAAgYIAAhJIARAAIAABJQAAATgEALQgFAMgLAHQgLAHgTAAQgQAAgMgGg");
	this.shape_15.setTransform(190.1,37.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Ag0BAIAAh/IAtAAQANAAAHACQAMADAHAGQALAJAFANQAFAOAAAQQAAANgEAMQgDALgGAHQgFAIgGAFQgHAEgJACQgJACgJAAgAgjAxIAcAAQAKAAAIgCQAHgDAEgEQAGgGAEgLQADgKAAgNQAAgTgHgMQgGgLgKgDQgHgCgNgBIgbAAg");
	this.shape_16.setTransform(177.4,37);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAjBAIgRgbIgMgRIgHgJIgIgEIgJAAIgUAAIAAA5IgRAAIAAh/IA3AAQARAAAJAEQAJADAGAJQAFAJAAAKQAAAOgJAKQgJAHgSACQAGADAEAEQAHAHAHAKIAWAjgAgmgGIAlAAQAJAAAHgDQAGgCAEgFQADgFAAgHQAAgJgGgFQgHgHgOABIgnAAg");
	this.shape_17.setTransform(159.7,37);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgvBAIAAh/IBcAAIAAAPIhKAAIAAAoIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_18.setTransform(146.9,37);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgHBAIAAhwIgrAAIAAgPIBlAAIAAAPIgrAAIAABwg");
	this.shape_19.setTransform(135.2,37);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAjBAIgRgbIgMgRIgHgJIgIgEIgJAAIgUAAIAAA5IgRAAIAAh/IA3AAQARAAAJAEQAJADAGAJQAFAJAAAKQAAAOgJAKQgJAHgSACQAGADAEAEQAHAHAHAKIAWAjgAgmgGIAlAAQAJAAAHgDQAGgCAEgFQADgFAAgHQAAgJgGgFQgHgHgOABIgnAAg");
	this.shape_20.setTransform(124.1,37);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AApBAIgQgnIg0AAIgNAnIgTAAIAxh/IARAAIA1B/gAgIgYIgNAjIApAAIgOghIgHgbQgCAMgFANg");
	this.shape_21.setTransform(111,37);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgHBAIAAhwIgrAAIAAgPIBlAAIAAAPIgrAAIAABwg");
	this.shape_22.setTransform(100.9,37);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgYA9QgMgFgHgKQgGgLgBgNIAQgBQACAKAEAGQAEAHAJADQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgEQgEgFgIgDIgVgHQgRgDgHgDQgKgFgEgGQgFgIAAgJQAAgKAGgIQAFgJALgDQALgFAMAAQANAAALAFQALAEAGAJQAGAJAAALIgQACQgCgNgHgGQgIgGgOAAQgOAAgHAFQgHAGAAAIQAAAIAFADQAFAFASAFQAVAEAIAEQALADAGAJQAFAHAAALQAAAKgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape_23.setTransform(89.3,37);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgnBAIAAh/IARAAIAABwIA+AAIAAAPg");
	this.shape_24.setTransform(74.3,37);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AApBAIgPgnIg0AAIgPAnIgSAAIAyh/IAQAAIA1B/gAgIgYIgOAjIAqAAIgNghIgHgbQgDAMgFANg");
	this.shape_25.setTransform(63,37);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAtBAIAAhqIgmBqIgOAAIglhrIAABrIgQAAIAAh/IAZAAIAfBaIAEATIAHgVIAfhYIAXAAIAAB/g");
	this.shape_26.setTransform(49.5,37);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAjBAIgRgbIgMgRIgHgJIgIgEIgJAAIgUAAIAAA5IgRAAIAAh/IA3AAQARAAAJAEQAJADAGAJQAFAJAAAKQAAAOgJAKQgJAHgSACQAGADAEAEQAHAHAHAKIAWAjgAgmgGIAlAAQAJAAAHgDQAGgCAEgFQADgFAAgHQAAgJgGgFQgHgHgOABIgnAAg");
	this.shape_27.setTransform(36.1,37);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgfA5QgOgJgIgPQgHgPAAgRQAAgeARgSQARgSAaAAQARAAAPAIQAOAJAIAPQAHAQAAARQAAAUgIAPQgIAQgOAHQgPAIgQAAQgRAAgOgJgAgdgmQgNANAAAbQAAAXAMANQANANARAAQATAAAMgNQANgOAAgYQAAgOgGgMQgFgMgKgGQgLgGgMAAQgQAAgNAMg");
	this.shape_28.setTransform(22,37);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAhBAIhChjIAABjIgQAAIAAh/IARAAIBCBkIAAhkIAQAAIAAB/g");
	this.shape_29.setTransform(8.4,37);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgcA6QgQgJgHgQQgIgQAAgRQAAgTAJgPQAIgRAQgIQANgGAQAAQAYAAAOAKQANAKAEASIgaAEQgCgJgIgGQgHgFgMAAQgPAAgKALQgKALAAAVQAAAVAKALQALAMAOAAQAIAAAJgDQAIgDAGgFIAAgQIgeAAIAAgUIA4AAIAAAxQgIAIgQAGQgPAGgQAAQgSAAgPgIg");
	this.shape_30.setTransform(21.9,11.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAZBAIgyhSIAABSIgZAAIAAh/IAZAAIA0BUIAAhUIAYAAIAAB/g");
	this.shape_31.setTransform(8.5,11.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(1,0,0,3).p("AiDAAIEHAA");
	this.shape_32.setTransform(15,19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,286.5,74.2);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape.setTransform(75.4,13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgVAMgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAIAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_1.setTransform(66,13.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_2.setTransform(58.6,12.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_3.setTransform(50.9,13.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_4.setTransform(41,13.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGBAIAAhcIAOAAIAABcgAgGgsIAAgTIAOAAIAAATg");
	this.shape_5.setTransform(34,11.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_6.setTransform(24.5,13.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgcA3QgLgKgCgQIAQgCQADAOAGAFQAHAGAJAAQAKAAAHgHQAIgJAAgKQAAgMgHgGQgHgIgLAAQgDAAgGACIABgMIADABQAIAAAIgGQAIgGAAgKQAAgJgGgFQgGgHgHABQgJgBgGAHQgHAFgBAMIgQgDQADgQAKgJQAKgIAQgBQAIAAAJAFQAJAFAFAHQAEAJAAAIQAAAIgEAIQgFAGgIAEQALADAGAGQAHAIAAANQAAARgNAMQgMAMgRgBQgRAAgLgKg");
	this.shape_7.setTransform(7,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,82.2,24.1);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgvBAIAAh/IBcAAIAAAPIhKAAIAAAoIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape.setTransform(278.5,11.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgnBAIAAh/IARAAIAABwIA+AAIAAAPg");
	this.shape_1.setTransform(267.6,11.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdA6QgNgJgGgQQgIgQAAgRQABgUAHgOQAIgQAOgHQAOgIAQAAQASAAAOAKQANAKAFARIgQAFQgFgOgJgHQgIgGgNAAQgNgBgKAIQgKAHgEAMQgEAMAAAMQAAAPAFANQAEALAKAHQALAFAKAAQAOAAAKgHQAKgJAEgQIARAEQgGAVgOALQgOALgUAAQgTAAgNgIg");
	this.shape_2.setTransform(255.9,11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgIBAIAAg2IgyhJIAWAAIAYAnIAMAWQAGgLAIgMIAZgmIATAAIgzBJIAAA2g");
	this.shape_3.setTransform(243.3,11.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgdA6QgNgJgHgQQgHgQAAgRQAAgUAIgOQAIgQAOgHQAOgIAQAAQASAAAOAKQANAKAFARIgQAFQgFgOgJgHQgIgGgNAAQgNgBgKAIQgKAHgEAMQgEAMAAAMQAAAPAFANQAFALAJAHQALAFAKAAQAOAAAKgHQAKgJADgQIASAEQgGAVgOALQgOALgUAAQgTAAgNgIg");
	this.shape_4.setTransform(230.9,11.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgIBAIAAg2IgxhJIAUAAIAaAnIALAWQAFgLAJgMIAZgmIAUAAIg0BJIAAA2g");
	this.shape_5.setTransform(213.6,11.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgHBAIAAhwIgrAAIAAgPIBlAAIAAAPIgrAAIAABwg");
	this.shape_6.setTransform(202.2,11.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgcA7QgLgHgFgLQgFgMAAgUIAAhJIARAAIAABJQAAAQADAJQADAHAIAFQAHAEALAAQARAAAIgJQAIgIAAgYIAAhJIARAAIAABJQAAATgEALQgFAMgLAHQgLAHgTAAQgQAAgMgGg");
	this.shape_7.setTransform(190.1,12);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag0BAIAAh/IAtAAQANAAAHACQAMACAHAHQALAJAFANQAFAOAAAQQAAANgEAMQgDALgGAIQgFAHgGAFQgHADgJADQgJACgJAAgAgjAxIAcAAQAKAAAIgCQAHgDAEgFQAGgFAEgLQADgKAAgNQAAgUgHgLQgGgLgKgDQgHgCgNgBIgbAAg");
	this.shape_8.setTransform(177.4,11.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAjBAIgRgbIgMgRIgHgJIgIgDIgJgBIgUAAIAAA5IgRAAIAAh/IA3AAQARAAAJAEQAJADAGAJQAFAJAAAKQAAAOgJAJQgJAIgSACQAGAEAEADQAHAHAHAKIAWAjgAgmgGIAlAAQAJAAAHgCQAGgDAEgFQADgFAAgHQAAgJgGgFQgHgHgOAAIgnAAg");
	this.shape_9.setTransform(159.7,11.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgvBAIAAh/IBcAAIAAAPIhKAAIAAAoIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_10.setTransform(146.9,11.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgHBAIAAhwIgrAAIAAgPIBlAAIAAAPIgrAAIAABwg");
	this.shape_11.setTransform(135.2,11.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAjBAIgRgbIgMgRIgHgJIgIgDIgJgBIgUAAIAAA5IgRAAIAAh/IA3AAQARAAAJAEQAJADAGAJQAFAJAAAKQAAAOgJAJQgJAIgSACQAGAEAEADQAHAHAHAKIAWAjgAgmgGIAlAAQAJAAAHgCQAGgDAEgFQADgFAAgHQAAgJgGgFQgHgHgOAAIgnAAg");
	this.shape_12.setTransform(124.1,11.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AApBAIgQgnIg0AAIgNAnIgTAAIAxh/IARAAIA1B/gAgIgYIgNAjIApAAIgOgiIgHgbQgCANgFANg");
	this.shape_13.setTransform(111,11.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgHBAIAAhwIgrAAIAAgPIBlAAIAAAPIgrAAIAABwg");
	this.shape_14.setTransform(100.9,11.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgYA9QgMgFgHgKQgGgKgBgOIAQgBQACAKAEAGQAEAHAJADQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgEQgEgFgIgDIgVgHQgRgDgHgDQgKgEgEgIQgFgHAAgJQAAgKAGgIQAFgIALgEQALgFAMAAQANAAALAFQALAEAGAJQAGAJAAAMIgQABQgCgMgHgHQgIgGgOAAQgOAAgHAGQgHAGAAAHQAAAIAFADQAFAFASAFQAVAFAIADQALADAGAJQAFAHAAALQAAAKgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape_15.setTransform(89.3,11.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgnBAIAAh/IARAAIAABwIA+AAIAAAPg");
	this.shape_16.setTransform(74.3,11.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AApBAIgPgnIg0AAIgPAnIgSAAIAyh/IAQAAIA1B/gAgIgYIgOAjIAqAAIgNgiIgHgbQgDANgFANg");
	this.shape_17.setTransform(63,11.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAtBAIAAhqIgmBqIgOAAIglhrIAABrIgQAAIAAh/IAZAAIAfBaIAEATIAHgVIAfhYIAXAAIAAB/g");
	this.shape_18.setTransform(49.5,11.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAjBAIgRgbIgMgRIgHgJIgIgDIgJgBIgUAAIAAA5IgRAAIAAh/IA3AAQARAAAJAEQAJADAGAJQAFAJAAAKQAAAOgJAJQgJAIgSACQAGAEAEADQAHAHAHAKIAWAjgAgmgGIAlAAQAJAAAHgCQAGgDAEgFQADgFAAgHQAAgJgGgFQgHgHgOAAIgnAAg");
	this.shape_19.setTransform(36.1,11.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgfA5QgOgIgIgQQgHgPAAgRQAAgeARgSQARgSAaAAQARAAAPAIQAOAJAIAPQAHAPAAASQAAAUgIAPQgIAQgOAHQgPAIgQAAQgRAAgOgJgAgdgmQgNANAAAbQAAAXAMANQANANARAAQATAAAMgNQANgNAAgZQAAgOgGgMQgFgLgKgHQgLgGgMAAQgQAAgNAMg");
	this.shape_20.setTransform(22,11.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAhBAIhChjIAABjIgQAAIAAh/IARAAIBCBkIAAhkIAQAAIAAB/g");
	this.shape_21.setTransform(8.4,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,286.5,24.1);


(lib.t0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAcBAIgcgsIgbAsIggAAIAshBIgng+IAeAAIAYApIAZgpIAeAAIgnA+IAsBBg");
	this.shape.setTransform(36,11.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAkBAIgMgdIgxAAIgLAdIgbAAIAyh/IAZAAIA0B/gAgRANIAhAAIgQgug");
	this.shape_1.setTransform(23.5,11.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAmBAIAAhjIgaBjIgXAAIgZhjIAABjIgZAAIAAh/IAnAAIAWBWIAXhWIAnAAIAAB/g");
	this.shape_2.setTransform(9.5,11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,0,0,3).p("AjEAAIGJAA");
	this.shape_3.setTransform(22.5,19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,44.2,24.1);


(lib.prot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.texture();
	this.instance.setTransform(0,0,100,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1000,550);


(lib.GEN_switchbase02b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#A6A6A6","#000000"],[0,0.537,1],-7.6,6.7,7.6,-6.6).s().p("AAABRQggABgYgYIAAAAQgZgYAAgiQAAggAZgYQAYgZAgAAQAiAAAYAZIAAAAQAYAYgBAgQABAigYAYIAAAAQgYAXgiAAIAAAAgAgzA1QAWAVAdAAQAfAAAVgVIABgBQAVgVAAgfQAAgdgVgWIgBAAIAAAAQgVgWgfAAQgdAAgWAWQgWAWAAAdQAAAfAWAVIAAAAg");
	this.shape.setTransform(18.4,18.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#501B0E","#792B17","#240C06"],[0.318,0.675,1],0,0,0,0,0,7.3).s().p("AgsAtQgTgSAAgbQAAgZATgTQATgTAZAAQAbAAASATQATATAAAZQAAAbgTASQgSATgbAAQgZAAgTgTg");
	this.shape_1.setTransform(18.5,18.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#49170C","#842B15","#511A0D","#240C06"],[0.447,0.675,0.82,1],0,0,0,0,0,8.2).s().p("AgzA1IAAgBQgWgVAAgfQAAgdAWgWQAWgWAdAAQAfAAAVAWIABAAQAVAWAAAdQAAAfgVAVIgBABQgVAVgfAAQgdAAgWgVgAgrgrQgUASAAAZQAAAbAUATQASASAZAAQAbAAATgSQASgTAAgbQAAgZgSgSQgTgUgbAAQgZAAgSAUg");
	this.shape_2.setTransform(18.4,18.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#444444","#B7B7B7","#444444"],[0,0.537,1],-11.5,9.9,11.5,-9.8).s().p("AhCBEQgcgdAAgnQAAgmAcgcQAcgcAmAAQAnAAAdAcIAAAAQAbAcAAAmQAAAngbAdIAAAAQgdAbgnAAQgmAAgcgbgAA6A6IAAAAQAYgYgBgiQABgggYgYIAAAAQgYgZgiAAQggAAgYAZQgZAYAAAgQAAAiAZAYIAAAAQAYAYAggBQAiABAYgYg");
	this.shape_3.setTransform(18.4,18.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#555555","#C8C8C8","#262626"],[0,0.537,1],-14.2,12.2,14.2,-12.2).s().p("AAABnQgpAAgfgeQgegfABgqQgBgpAegfQAfgeApABQAqgBAfAeIAAABQAeAeAAApQAAAqgeAfIAAAAQgfAegqAAIAAAAgAhChCQgcAcAAAmQAAAnAcAdQAcAbAmAAQAnAAAdgbIAAAAQAbgdAAgnQAAgmgbgcIAAAAQgdgcgnAAQgmAAgcAcg");
	this.shape_4.setTransform(18.4,18.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#3C3C3C","#8C8C8C","#6A6A6A","#7B7B7B","#453932"],[0,0.286,0.506,0.667,1],-15.1,7.4,15.2,-7.3).s().p("Ah5AsIAXh+IB5gtIBjBVIgXB9Ih4Atg");
	this.shape_5.setTransform(18.4,18.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#262626","#7B7B7B","#595959","#666666","#2C2521"],[0,0.286,0.506,0.667,1],-15.1,7.4,15.2,-7.3).s().p("AgXCIIgCgBIhmhXIgBgCIgBgCIAYiCIABgCIABAAIB9guIACgBIACABIBmBYIABABIAAACIgXCCIgBACIgCABIh8AtIgBABIgBAAgAhihSIgXB+IBjBUIB5gtIAWh9IhjhVg");
	this.shape_6.setTransform(18.4,18.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#7E8D9A","#4E616D"],[0,1],11.5,11.1,-11.5,-11).s().p("AhvBxQgvgvAAhCQAAhBAvguQAugvBBAAQBCAAAvAvQAuAuAABBQAABCguAvQgvAuhCAAQhBAAgugugAhmhmQgrArAAA7QAAA8ArAsQAqAqA8AAQA8AAAsgqQAqgsAAg8QAAg7gqgrQgsgrg8AAQg8AAgqArg");
	this.shape_7.setTransform(18.5,18.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#343D43").s().p("AhmBoQgrgsAAg8QAAg7ArgrQAqgrA8AAQA8AAAsArQAqArAAA7QAAA8gqAsQgsAqg8AAQg8AAgqgqg");
	this.shape_8.setTransform(18.5,18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.5,2.5,32,32);


(lib.GEN_switch01center = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#D1D7D8","#7B7B7B"],[0.173,0.553,1],-0.7,-1.5,0,-0.7,-1.5,13.4).s().p("Ag3A4QgYgXABghQgBggAYgXQAXgYAgABQAhgBAXAYQAXAXABAgQgBAhgXAXQgXAYghAAQggAAgXgYg");
	this.shape.setTransform(6.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-7.4,16,16);


(lib.GEN_screw02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#84949D","#4D5A5E"],[0,1],-2.7,-3.5,0,-2.7,-3.5,10).s().p("AgKBFQgPgCgLgHQgLgHgJgMQgRgYAFgbQACgOAIgMQAHgLAMgJQAXgRAbAFQAOACAMAIQALAHAJAMQARAXgFAbQgCAPgIALQgHALgMAJQgSANgWAAIgKgBgAgKATIgFAVQgBAEAEABIAIACQAEAAAAgDIAFgVQAEgKALABIAWAFQADABACgEIACgIQABgEgEgBIgVgEQgLgFACgLIAGgVQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAAAAAIgJgBQgEgCgBADIAAABIgFAWIAAgBQgDAKgLAAIgWgHQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAQAAABAAAAQAAAAAAABIgDAIQgBADADACIABAAIAWAEIgBAAQALAEgCAMg");
	this.shape.setTransform(1.7,-1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#374448").s().p("AgOApIgBgBIAGgVQACgPgNgEIgWgFIAAgBIACgIIAAgBIABAAIAWAGQAOACADgNIAGgWIABAAIAIACIABAAIAAABIgGAVQgCAOANAEIABAAIAVAGIABAAIgDAIIAAABIgBABIgVgGIgBAAQgOgBgEAMIAAABIgFAVIgBAAg");
	this.shape_1.setTransform(2,-1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#5A6B72","#414B50"],[0,1],3.4,3.4,-3.3,-3.3).s().p("AgGAuIgJgCQgEgBABgEIAGgVQABgLgKgEIAAAAIgWgFIAAAAQgDgBABgEIACgIQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAIAWAGQALABAEgKIAAAAIAEgVIAAgBQABgDAEABIAIACQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgFAWQgCAKAKAGIAWAEQADAAAAAFIgDAIQgBADgEAAIgVgGQgMAAgEAKIgDAUQgCADgDAAIAAAAgAgogOIgCAIIAAABIAWAFQANAEgCAPIgGAVIABABIAIACIABAAIAFgVIAAgBQAEgMAOABIABAAIAVAGIABgBIAAgBIADgIIgBAAIgVgGIgBAAQgNgEACgOIAGgVIAAgBIgBAAIgIgCIgBAAIgGAWQgDANgOgCIgWgGIgBAAg");
	this.shape_2.setTransform(2,-1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#657381","#71838E"],[0,1],4.2,8,-4.1,-8).s().p("AgNBZQglgHgWgeQgWgfAGgiQAHglAfgWQAdgWAkAGQAkAGAWAfQAWAfgGAjQgGAkggAWQgYARgbAAIgNgBgAgng4QgMAJgHALQgIAMgCAOQgFAbARAYQAJAMALAHQAMAHAOACQAbAFAXgRQAMgJAHgLQAIgLACgPQAFgbgRgXQgJgMgLgHQgLgIgPgCIgLgBQgVAAgSANg");
	this.shape_3.setTransform(1.7,-1.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#2D3539","#7E939A"],[0,1],4.3,8.3,-2.2,-4.3).s().p("AgOBdQgngGgWghQgYggAHgkQAGgnAhgWQAfgXAlAGQAnAHAWAfQAXAggGAlQgHAmggAXQgZASgdAAIgOgBgAgzhIQgfAWgGAlQgGAiAWAfQAVAeAlAHQAiAGAfgWQAfgWAGgkQAGgjgVgfQgWgfglgGIgOgBQgcAAgXARg");
	this.shape_4.setTransform(1.8,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.7,-11.2,19,19);


(lib.GEN_knob01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CDD3D1").s().p("AAoAGIgBgBIgBAAIgLgBIAAgNIAEAAIALABIAAABIAAAAQAJACAGAIIAAAAIAEAHIAAABgAg7AJIACgGIABAAQAEgJAKgBIAFgBIAAgBIAEAAIAEgBIAAABIgCAAIAAANIgEAAIgZAGg");
	this.shape.setTransform(24.7,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#C5CBCB","#D7DBDB"],[0,0.255],3.7,1.4,-8.5,1.5).s().p("AAcBtQhChDAAheQAAgiAJgeIBEAjQgEAOAAAcIAACcIgHgIg");
	this.shape_1.setTransform(5.4,29.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#C5CBCB","#D7DBDB"],[0,0.255],-7.4,-4.6,4.1,-11.9).s().p("AgDA/IgBgBIhJibIAAAAIADABIADABQA0APAnAqQAqAoAQA2IhEAiQgBgEgMgbg");
	this.shape_2.setTransform(38.7,11.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#C5CBCB","#D7DBDB"],[0,0.255],-3.8,5.1,8,5.1).s().p("AgggkQAAgcgDgPIgBAAIgBgCIBCgjQAJAgAAAjQAABehBBDIgFAFg");
	this.shape_3.setTransform(43.7,29.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#C5CBCB","#D7DBDB"],[0,0.255],2.8,2.2,-6.2,-3.6).s().p("AhQA+QAPg4AsgpQAqgsA3gPIAFgBIAAABIhMCcQgLAYgEAKIAAAAg");
	this.shape_4.setTransform(10.5,11.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#E0E2E1","#F7F7F7","#E1E1E1"],[0.69,0.824,0.976],-0.2,-21.2,0,-0.2,-21.2,33.1).s().p("AiHDuQgMgKgEgHQgEgIAAgKIAAgrIAAgTIAAidQAAgbAEgPIAAAAQADgKAOgYIBLieIAZgGIgEACQgCAAgCADIAAABIhPClIAAAAQgNAXgDAJIABAAIgBAAQgDANAAAPIAACyIAAASIAAAgQAAAGACAFIAAAAQAEAGAIAGQApAgBVAAQBVAAAqggQAJgGADgGQACgEAAgHIAAghIAAgTIAAiqQAAgWgDgMIgBgCIgPgeIAAAAIhNilIgEgEIAVAFIBJCdIABABQAOAaABAEIABADIABAAQADAPAAAbIAACZIAAAVIAAAtQAAALgEAHQgEAIgMAJQgtAjhbgBQhbABgsgjgAgckPIACAAIgCAAg");
	this.shape_5.setTransform(24.7,27.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#D1D8D8","#E0E2E0","#C9CFCD"],[0.643,0.82,0.976],-0.1,-9.1,0,-0.1,-9.1,34).s().p("AiMBkQAAgPADgNIABAAIgBAAQADgJANgXIAAAAIBPijIAAgBQACgDACAAIAEgCIAEAAIAAEDQgpgDhFgbgAAciBIAKABIACABIABAAIAEAEIBNCjIAAAAIAPAeIABACQADAMAAAWQg9ATg0AEg");
	this.shape_6.setTransform(24.7,14.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2F3537").s().p("AAJAGIAAgNIAVABIAAABIAAANIgVgCgAgcgFIABgBIACAAIAAAAIAQgBIAAANIgIABIgLABg");
	this.shape_7.setTransform(24.5,0.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E1E1E1").s().p("AisDIQhHhHgBhmQAAgjAKghQARg6AtgtQA7g7BOgKIAAAAIgFABQgKACgEAKIgBAAIgCAGIgFABQg3APgsAtQgsArgPA3QgJAeABAgQAABfBDBEIAHAIIAAATIgSgRgACeDCIAEgEQBDhEABhfQgBghgIggQgRg1gqgqQgpgqg0gQIgCgBIgEgBIgDgHIgBAAQgGgKgIgCQBJANA3A3QAsAsARA4QALAigBAlQAABmhHBHIgPAPgAAAjJIgBAAIgIAAIAAgOIAFgBIABAAIABAAIABAAIABAAIAJABIAAAOIgJAAg");
	this.shape_8.setTransform(24.5,21.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#434D4E","#4A5457","#6B797A","#404748"],[0.282,0.824,0.929,0.976],0.1,-15,0,0.1,-15,33.1).s().p("AgcCjIAAhAIAAkDIALgBIAIgBIAAEFIAAAsIASAAIAAgsIAAkFIAVACIAAECIAABBg");
	this.shape_9.setTransform(24.5,17.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#D3D8D7","#DBDFDD","#D3D8D7"],[0,0.553,1],-14.1,1.1,14.2,1.1).s().p("Ah+BuQgIgGgEgGIAAAAQgCgFAAgGIAAggIAAgSIAAiyQBFAbApADIAABAIA6AAIAAhBQA0gEA9gTIAACqIAAATIAAAhQAAAHgCAEQgDAGgJAGQgqAghVAAQhVAAgpggg");
	this.shape_10.setTransform(24.7,39.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgJCZIAAgsIAAkFIAIAAIABAAIAJAAIAAEFIAAAsg");
	this.shape_11.setTransform(24.5,16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base fill
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#D3D8D7","#DBDFDD","#D3D8D7"],[0,0.553,1],-24.5,0,24.5,0).s().p("AiGDvQgMgKgEgIQgEgHAAgKIAAgrIgSgRQhHhIgBhjQAAglAKghQARg6AtgtQA7g7BOgLIAEAAIAEgBIACAAIAVgBIABAAIABAAIABAAIABAAIAJAAIAVABIAAABIADAAIALABIAAABIABAAQBJAMA3A4QAsAsARA4QALAigBAnQAABjhHBIIgPAOIAAAuQAAALgFAHQgEAHgLAKQgtAihdAAQhZAAgtgig");
	this.shape_12.setTransform(24.5,27.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49,54.8);


(lib.ENGINESTART_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.instance = new lib.GEN_screw02("synched",0);
	this.instance.setTransform(200.4,-168.1,1,1,0,0,0,1.8,-1.7);

	this.instance_1 = new lib.GEN_screw02("synched",0);
	this.instance_1.setTransform(-2.5,-59.6,1,1,0,0,0,1.8,-1.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#7E8D9A","#4E616D"],[0,1],-268.8,40,-267.8,45.5).s().p("A22KuIAAgUMAttAAAIAAAUgA22qZIAAgUMAttAAAIAAAUg");
	this.shape.setTransform(76.1,-113.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AUyJwIAAzgIAKAAIAATggAKEkmIAIgEICbEXIAAlCIAKAAIAAE8ICSkZIAJAEIiSEaIEJixIAFAIIkVC6IgCgCIgBgBIgBAAIgJAFgA07kmIAJgEICbEXIAAlCIAKAAIAAE8ICRkZIAJAEIiREaIEHixIAGAIIkVC6IgBgCIgCgBIgBAAIgJAFg");
	this.shape_1.setTransform(86.5,-112.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6C7B8A").s().p("A22KaIAA0zMAttAAAIAAUzgAWZJ8IAKAAIAAzgIgKAAgALrkaICiEiIAJgFIABAAIACABIABACIEVi4IgFgIIkICxICRkZIgJgFIiREZIAAk8IgKAAIAAFCIibkXgAzUkaICiEiIAJgFIABAAIACABIABACIEVi4IgFgIIkICxICRkZIgJgFIiREZIAAk8IgKAAIAAFCIibkXg");
	this.shape_2.setTransform(76.1,-113.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#657381").s().p("A22K5IAAgKMAttAAAIAAAKgA22qsIAAgMMAttAAAIAAAMg");
	this.shape_3.setTransform(76.1,-113.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.2,-183.1,292.8,139.4);


(lib.ENGINESTARTPanel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// switches
	this.instance = new lib.GEN_switch01center("synched",0);
	this.instance.setTransform(90.5,-123.9,1.1,1.1,0,0,0,6.6,0);

	this.instance_1 = new lib.GEN_switchbase02b("synched",0);
	this.instance_1.setTransform(90.5,-123.3,1.1,1.1,0,0,0,18.5,18.4);

	this.instance_2 = new lib.GEN_knob01("synched",0);
	this.instance_2.setTransform(191.3,-110.7,1.1,1.1,-30,0,0,24.5,24.6);

	this.instance_3 = new lib.GEN_knob01("synched",0);
	this.instance_3.setTransform(-27.1,-110.7,1.1,1.1,0,0,0,24.6,24.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRAqQgFgBgBgFIAAgDQAAgKAFgKQAEgIAOgJIAGgHQAFgGAAgDQAAgEgDgEQgEgCgFAAQgHAAgCAIQAAAAgBABQAAAAAAAAQAAABgBAAQAAABAAAAIgFAAQgEAAAAgEIAAgBQAAgHAGgGQAGgEAJAAQAKAAAGAFQAHAGAAAKQgBAKgIAIIgRANQgIAHAAANIAfAAQAEAAAAAGIAAADIgEACg");
	this.shape.setTransform(191.4,-53.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAAmIAAhDIgIAAQgDAAAAgGQAAgFAEgBIAOAAIADABQABAAAAABQABAAAAAAQAAABAAABQAAAAAAABIAABLIgCADIgEAAQgGAAAAgEg");
	this.shape_1.setTransform(-27.2,-53.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdAqIAAhTIAYAAQARAAAJANQAKAMgBAQQAAAQgJANQgJANgPAAgAgRAeIANAAQAKAAAGgKQAGgIAAgMQAAgLgHgJQgGgKgJAAIgNAAg");
	this.shape_2.setTransform(169.4,-146);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUAqQgGgBAAgEIAAhOIAYAAQALAAAGADQAIAFAAAPQAAAFgCAFQgDAJgOABIAWAfQABADgBACQAAAAAAABQAAAAAAAAQgBAAAAABQgBAAAAAAQgGAEgBgEIgYgmIgHAAIAAAjQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgBAAgAgOgIIAOAAQAGAAADgDQADgCAAgGQABgLgNAAIgOAAg");
	this.shape_3.setTransform(162.6,-146);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgWAbQgGgKAAgRQAAgOAGgMQADgGAIgFQAHgEAGAAQANAAAGAFQAFAEAAACIABACQACAFgFACQgEABgDgDQgFgIgJABQgKABgGALQgEAHAAALQAAANADAGQAIAMAJAAQAFAAAFgDQACgBADgFIAAgOIgQAAQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBIAAgEIAAgCQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAABAAIAXAAIADABIABACIAAAWQAAADgDAEQgCAEgEADQgFAFgNAAQgPAAgJgPg");
	this.shape_4.setTransform(155.7,-146);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEAlIAAhDIgTAAIgEgCIgBgDQAAgFAFgBIAvAAQAFABAAAFQAAAEgFABIgTAAIAABDIgBAEIgEABQgEAAAAgFg");
	this.shape_5.setTransform(240.1,-131.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcAqIAAhQQABgDAFAAQAFAAABADIAABEIAnAAQAFAAABAHIgBAEQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAg");
	this.shape_6.setTransform(233.6,-131.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgaAmIAAhPIAwAAQAFABABAEQgBAHgFAAIglAAIAAASIAdAAQAEAAAAAFQAAAFgDABIgeAAIAAAmQAAAEgGAAQgGgBABgDg");
	this.shape_7.setTransform(226.7,-131.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgEAlIAAhDIgTAAIgEgCIgBgDQAAgFAFgBIAvAAQAFABAAAFQAAAEgFABIgTAAIAABDIgBAEIgEABQgEAAAAgFg");
	this.shape_8.setTransform(232.7,-146);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgaAnIAAhLQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQAGgBABAEIAgA7IAAg6QAAgEAFAAQAFAAABAEIAABLQAAAEgGAAQgCABgDgDIggg7IAAA6QgCACgEABQgGAAABgDg");
	this.shape_9.setTransform(225.7,-146);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgWAbQgGgLAAgQQAAgPAGgLQAHgPAPAAQARAAAGAPQAGAMAAAOQAAAOgGAMQgHAQgQAAQgPAAgHgPgAgNgSQgDAIAAAKQAAALADAIQAFALAIAAQAJAAAFgLQACgHAAgMQAAgLgCgHQgFgMgJAAQgIAAgFAMg");
	this.shape_10.setTransform(218.7,-146);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgWAbQgGgKAAgRQAAgOAGgMQADgGAIgFQAIgEAFAAQANAAAHAGQAEADAAACIABABQACAGgEABQgFADgDgDQgFgJgJABQgKABgGALQgDAHAAALQAAANADAGQAHAMAJAAQAGAAAEgDQAEgCABgFQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAIAFAAQAAAAABABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQgDAHgGAFQgFAFgNAAQgPAAgJgPg");
	this.shape_11.setTransform(211.7,-146);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgWAaQgGgKAAgQQAAgPAGgLQAHgPAPAAQARAAAGAOQAGANAAAOQAAAPgGALQgHAQgQAAQgPAAgHgQgAgNgTQgDAJAAAKQAAAKADAJQAFAMAIAAQAJAAAFgMQADgHgBgMQABgLgDgHQgFgMgJAAQgIAAgFALg");
	this.shape_12.setTransform(201.5,-152.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgEAmIAAhEIgTAAIgEgBIgBgFQAAgEAFgBIAvAAQAFABAAAEQAAAFgFABIgTAAIAABEIgBADIgEABQgEAAAAgEg");
	this.shape_13.setTransform(194.6,-152.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAAAqQgMAAgIgIQgHgKAAgQIAAguQACgDAEAAIADABIACADIAAAqQAAAMADAGQAFAJAJgBQALgBADgIQADgFAAgMIAAgqQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAIAEgBQAFAAAAAEIAAAtQAAAigbAAg");
	this.shape_14.setTransform(188.1,-152.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AATAmIgDgJIgfAAIgDAJQgBAFgHgBQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAchJQABgEACAAQAEAAACAEIAYBLQAAAEgGAAIgBAAQgDAAgCgEgAgLASIAAAAIAYAAIgMgnIgMAnIAAAAg");
	this.shape_15.setTransform(181.3,-152.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgUAqQgGgBAAgEIAAhOIAYAAQALAAAGADQAIAFAAAPQAAAFgCAFQgDAJgOABIAWAfQABADgBACQAAAAAAABQAAAAAAAAQgBAAAAABQgBAAAAAAQgGAEgBgEIgYgmIgHAAIAAAjQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgBAAgAgOgIIAOAAQAGAAADgDQADgCAAgGQABgLgNAAIgOAAg");
	this.shape_16.setTransform(123.4,-117.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgcAqIAAhQQACgDAEAAQAFAAABADIAABEIAnAAQAGAAgBAHIgBAEQAAAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAg");
	this.shape_17.setTransform(51.1,-117.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AARAmIAAgmIghAAIAAAnIgCADIgEAAIgEgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAIAAhLIACgDIAEgBQAGAAAAAFIAAAZIAhAAIAAgbIABAAQAAgDAFAAIAEABQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAIAABLQAAABAAAAQAAABgBAAQAAAAAAAAQAAABgBAAIgEABQgFAAgBgEg");
	this.shape_18.setTransform(99.1,-152.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgEAlIAAhDIgTAAIgEgCIgBgEQAAgEAFgBIAvAAQAFABAAAEQAAAFgFABIgTAAIAABDIgBAEIgEABQgEAAAAgFg");
	this.shape_19.setTransform(91.9,-152.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgXAaQgFgKAAgQQAAgQAFgKQAIgPAPAAQAQAAAHAOQAGANAAAOQAAAOgGAMQgHAQgQAAQgPAAgIgQgAgNgSQgDAIAAAKQAAAKADAJQAEAMAJAAQAJAAAFgMQADgHAAgMQAAgLgDgHQgFgMgJAAQgJAAgEAMg");
	this.shape_20.setTransform(85.2,-152.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgaAqIAAhTIAYAAQAKAAAGADQAJAFAAAOQAAAQgKABQAGABADAEQAFAHAAAIQAAAMgHAGQgHAGgMAAgAgPAfIAPAAQAGAAAFgDQAEgDAAgGQAAgKgGgDQgDgDgFgBIgQAAgAgPgHIAHAAQAMAAAFgEQAEgCgBgGQAAgLgMAAIgPAAg");
	this.shape_21.setTransform(78.2,-152.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgbAnIAAhLQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAFgBABAEIAfA7IAAg6QACgEAEAAQAGAAgBAEIAABLQAAAEgEAAQgDABgDgDIghg7IAAA6QAAACgFABQgFAAgBgDg");
	this.shape_22.setTransform(128.5,-131.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgWAbQgGgKAAgRQAAgOAGgMQADgGAIgFQAHgEAGAAQANAAAGAFQAFAEAAACIABACQACAFgFACQgEABgDgDQgFgIgJABQgKABgGALQgEAHAAALQAAANADAGQAIAMAJAAQAFAAAFgDQACgBADgFIAAgOIgQAAQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBIAAgEIAAgCQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAABAAIAXAAIADABIABACIAAAWQAAADgDAEQgCAEgEADQgFAFgNAAQgPAAgJgPg");
	this.shape_23.setTransform(121.1,-131.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgDApQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAhLQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAIADgBQAFAAAAAEIAABMQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABIgDAAIgDgBg");
	this.shape_24.setTransform(116.2,-131.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgbAnIAAhLQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQAFgBACAEIAfA7IAAg6QACgEAEAAQAGAAAAAEIAABLQgBAEgFAAQgCABgDgDIggg7IAAA6QgBACgFABQgGAAAAgDg");
	this.shape_25.setTransform(55.9,-131.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgWAbQgGgKAAgRQAAgOAGgMQADgGAIgFQAHgEAGAAQANAAAGAFQAFAEAAACIABACQACAFgFACQgEABgDgDQgFgIgJABQgKABgGALQgEAHAAALQAAANADAGQAIAMAJAAQAFAAAFgDQACgBADgFIAAgOIgQAAQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBIAAgEIAAgCQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAABAAIAXAAIADABIABACIAAAWQAAADgDAEQgCAEgEADQgFAFgNAAQgPAAgJgPg");
	this.shape_26.setTransform(48.5,-131.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgDApQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBgBAAIAAhLQABAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIADgBQAFAAABAEIAABMQgBAAAAABQAAAAAAABQgBAAAAAAQAAAAgBABIgDAAIgDgBg");
	this.shape_27.setTransform(43.6,-131.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgdAqIAAhTIAYAAQARAAAJANQAKAMgBAQQAAAQgJANQgJANgPAAgAgRAeIANAAQAKAAAGgKQAGgIAAgMQAAgLgHgJQgGgKgJAAIgNAAg");
	this.shape_28.setTransform(-49,-146);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgUAqQgGgBAAgEIAAhOIAYAAQALAAAGADQAIAFAAAPQAAAFgCAFQgDAJgOABIAWAfQABADgBACQAAAAAAABQAAAAAAAAQgBAAAAABQgBAAAAAAQgGAEgBgEIgYgmIgHAAIAAAjQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgBAAgAgOgIIAOAAQAGAAADgDQADgCAAgGQABgLgNAAIgOAAg");
	this.shape_29.setTransform(-55.9,-146);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgWAbQgGgKAAgRQAAgOAGgMQADgGAIgFQAHgEAGAAQANAAAGAFQAFAEAAACIABACQACAFgFACQgEABgDgDQgFgIgJABQgKABgGALQgEAHAAALQAAANADAGQAIAMAJAAQAFAAAFgDQACgBADgFIAAgOIgQAAQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBIAAgEIAAgCQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAABAAIAXAAIADABIABACIAAAWQAAADgDAEQgCAEgEADQgFAFgNAAQgPAAgJgPg");
	this.shape_30.setTransform(-62.7,-146);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgEAlIAAhDIgTAAIgEgCIgBgDQAAgFAFgBIAvAAQAFABAAAFQAAAEgFABIgTAAIAABDIgBAEIgEABQgEAAAAgFg");
	this.shape_31.setTransform(21.6,-131.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgcAqIAAhQQACgDAEAAQAFAAABADIAABEIAnAAQAGAAAAAHIgCAEQAAAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAg");
	this.shape_32.setTransform(15.2,-131.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgaAmIAAhPIAwAAQAFABABAEQgBAHgFAAIgkAAIAAASIAcAAQAEAAABAFQAAAFgFABIgcAAIAAAmQgBAEgGAAQgGgBABgDg");
	this.shape_33.setTransform(8.3,-131.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgEAlIAAhDIgTAAIgEgCIgBgDQAAgFAFgBIAvAAQAFABAAAFQAAAEgFABIgTAAIAABDIgBAEIgEABQgEAAAAgFg");
	this.shape_34.setTransform(14.2,-146);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgbAnIAAhLQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQAFgBACAEIAfA7IAAg6QACgEAEAAQAGAAAAAEIAABLQgBAEgFAAQgCABgDgDIggg7IAAA6QgBACgFABQgGAAAAgDg");
	this.shape_35.setTransform(7.3,-146);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgWAbQgGgLAAgQQAAgPAGgLQAHgPAPAAQAQAAAHAPQAGAMAAAOQAAAOgFAMQgJAQgPAAQgPAAgHgPgAgNgSQgDAIAAAKQAAALADAIQAEALAJAAQAJAAAFgLQADgHgBgMQABgLgDgHQgFgMgJAAQgJAAgEAMg");
	this.shape_36.setTransform(0.2,-146);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgWAbQgGgKAAgRQAAgOAGgMQADgGAIgFQAIgEAFAAQANAAAHAGQAEADAAACIABABQACAGgEABQgFADgDgDQgFgJgJABQgKABgGALQgDAHAAALQAAANADAGQAHAMAJAAQAGAAAEgDQAEgCABgFQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAIAFAAQAAAAABABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQgDAHgGAFQgFAFgNAAQgPAAgJgPg");
	this.shape_37.setTransform(-6.8,-146);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgXAaQgFgKAAgQQAAgPAFgLQAIgPAPAAQAQAAAHAOQAGANAAAOQAAAPgGALQgHAQgQAAQgPAAgIgQgAgNgTQgDAJAAAKQAAAKADAJQAEAMAJAAQAJAAAFgMQADgHAAgMQAAgLgDgHQgFgMgJAAQgJAAgEALg");
	this.shape_38.setTransform(-16.9,-152.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgEAmIAAhEIgTAAIgEgBIgBgFQAAgEAFgBIAvAAQAFABAAAEQAAAFgFABIgTAAIAABEIgBADIgEABQgEAAAAgEg");
	this.shape_39.setTransform(-23.8,-152.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAAAqQgMAAgIgIQgHgKAAgQIAAguQABgDAEAAIAFABIABADIAAAqQAAAMACAGQAGAJAJgBQALgBAEgIQACgFAAgMIAAgqQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAIAEgBQAFAAAAAEIAAAtQAAAigbAAg");
	this.shape_40.setTransform(-30.3,-152.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AATAmIgDgJIgfAAIgDAJQgBAFgHgBQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAchJQABgEACAAQAEAAACAEIAYBLQAAAEgGAAIgBAAQgDAAgCgEgAgLASIAAAAIAYAAIgMgnIgMAnIAAAAg");
	this.shape_41.setTransform(-37.1,-152.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgGAzIAAhcIgZAAQgEAAgCgCQgBgDAAgDQAAgGAGgCIBAAAQAHACAAAGQAAAGgHACIgZAAIAABcQAAADgCACQgCACgDgBQgGAAAAgGg");
	this.shape_42.setTransform(134.6,-174.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgcA6QgIgCAAgFIAAhsIAgAAQAPAAAJAFQALAHAAATQAAAIgCAGQgFANgTABIAeAsQACADgBADIgEADQgHAFgDgGIggg0IgKAAIAAAxQAAADgCACQgCACgDAAIgBAAgAgUgLIATAAQAIAAAFgFQAFgDAAgHQABgPgSgBIgUAAg");
	this.shape_43.setTransform(125.7,-174.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAaA0IgEgMIgrAAIgFAMQgBAHgJgBIgFgDQgCgCABgDIAmhlQABgGAEAAQAGAAADAGIAhBnQAAAGgJAAIgBAAQgEAAgDgGgAgQAZIAAAAIAjAAIgSg3IgRA3IAAAAg");
	this.shape_44.setTransform(116.7,-174.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgGAzIAAhcIgZAAQgEAAgCgCQgBgDAAgDQAAgGAGgCIBAAAQAHACAAAGQAAAGgHACIgZAAIAABcQAAADgCACQgCACgDgBQgGAAAAgGg");
	this.shape_45.setTransform(107.2,-174.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AghAsQgCgEgDgJQgBgHAGgCQACgBADABQACABACADQABAIAGAFQACABAMADQAKABAFgDQAKgDABgIQABgKgEgEQgEgGgQgHIgPgDIgKgEQgIgEgCgHQgCgIABgJQADgOALgHQAHgEAJAAIAPABQAIAAAGAJQAGAGACAFQABADgBAEQgBADgEABQgDABgCgBQgDgBgBgDQgDgJgJgDQgKgDgGADQgKAFAAAIQAAAMAMACQAoANAGARIACAJIgCAJQgCAMgNAHQgJAEgNABQgYgBgJgNg");
	this.shape_46.setTransform(98.4,-174.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgkA6IAAhzIBCAAQAIACAAAGQAAAIgIAAIgzAAIAAAZIAqAAQABAAABAAQAAAAABABQAAAAABAAQAAABABAAQABACAAAEQAAADgBADQgBAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAIgqAAIAAAqIAzAAQAIABAAAIQAAAIgIAAg");
	this.shape_47.setTransform(84.9,-174.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AglA1IAAhnQAAgDACgCQABgBAAAAQABAAAAAAQABAAAAgBQABAAABAAQAGgBADAGIAsBRIAAhQQABgGAGAAQAIAAAAAGIAABmQAAAGgHAAQgEACgEgEIgshSIAABQQgCAEgGABQgIAAAAgFg");
	this.shape_48.setTransform(75,-174.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgEA4QgCgBgBgDIAAhnQABgDACgBQABgCADAAQAHAAAAAHIAABnQgBADgCABIgEABQgDAAgBgCg");
	this.shape_49.setTransform(68.2,-174.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgeAmQgJgPAAgXQAAgUAIgQQAEgJAMgGQAKgGAIAAQARAAAJAHQAHAGAAACIABADQADAHgHADQgGACgEgEQgHgMgMACQgOAAgJAPQgEAKAAAQQAAASAEAIQAKAQANAAQAIAAAFgDQAEgDADgGIAAgTIgWAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAgGIAAgDQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAABAAIAfAAIAFADQABABAAACIAAAeQAAADgEAGQgDAGgFADQgHAIgSAAQgVAAgMgUg");
	this.shape_50.setTransform(61.1,-174.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AglA1IAAhnQAAgDACgCQABgBAAAAQABAAAAAAQABAAAAgBQABAAABAAQAGgBADAGIArBRIAAhQQACgGAGAAQAIAAAAAGIAABmQAAAGgHAAQgEACgEgEIgshSIAABQQgCAEgHABQgHAAAAgFg");
	this.shape_51.setTransform(51.3,-174.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgkA6IAAhzIBDAAQAGACAAAGQAAAIgGAAIgzAAIAAAZIAqAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQACACAAAEQAAADgCADQAAAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAIgpAAIAAAqIAzAAQAGABAAAIQAAAIgGAAg");
	this.shape_52.setTransform(41.5,-174.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance_4 = new lib.ENGINESTART_base("synched",0);
	this.instance_4.setTransform(6.7,14.9,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// fill
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#657381").s().p("A5JL+IAAgLMAyTAAAIAAALgA5JrwIAAgNMAyTAAAIAAANg");
	this.shape_53.setTransform(90.4,-109.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#6C7B8A").s().p("A5JLyIAAgWIAA23IAAgWMAyTAAAIAAAWIAAW3IAAAWg");
	this.shape_54.setTransform(90.4,-109.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.6,-186.5,322.2,153.4);


// stage content:
(lib.dif04ep08 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{s1:0});

	// timeline functions:
	this.frame_0 = function() {
		/*   Hotspot Template  v1.0 (Jun 2015)
			 Designed for DreamSky Player v4.1+ or Aurora Html5 Player v1.0+
		 	 All rights reserved.
		*/
		// Interactive
		
		var hotspotData = new Object();
		
		this.outputData = "";
		
		this.saveTemplateData  = function ()
		{
			parent.pageControllerAPI.setPrivateData(this.outputData);
		}
		
		this.init  = function(param)
		{
			this.outputData = param;
		}
		
		this.start = function (param) 
		{
			hotspotData = param;	
			
			parent.pageControllerAPI.templateReady();
		}
		
		
		var clickNumber = 0;
	}
	this.frame_643 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(643).call(this.frame_643).wait(1));

	// prot
	this.prot = new lib.prot();
	this.prot.setTransform(500,275,1,1,0,0,0,500,275);

	this.timeline.addTween(cjs.Tween.get(this.prot).wait(644));

	// t7
	this.instance = new lib.t7("synched",0);
	this.instance.setTransform(322.1,496,1,1,0,0,0,134.2,12.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(637).to({_off:false},0).to({alpha:1},5).wait(2));

	// t6
	this.instance_1 = new lib.t6("synched",0);
	this.instance_1.setTransform(282.5,360.3,1,1,0,0,0,134.2,12.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(233).to({_off:false},0).to({alpha:1},5).wait(406));

	// t5
	this.instance_2 = new lib.t5("synched",0);
	this.instance_2.setTransform(282.5,270.3,1,1,0,0,0,134.2,12.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(233).to({_off:false},0).to({alpha:1},5).wait(406));

	// t4
	this.instance_3 = new lib.t4("synched",0);
	this.instance_3.setTransform(282.5,245.3,1,1,0,0,0,134.2,12.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(233).to({_off:false},0).to({alpha:1},5).wait(406));

	// t3
	this.instance_4 = new lib.t3("synched",0);
	this.instance_4.setTransform(292.6,403.2,1,1,0,0,0,143.3,37.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(233).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(405));

	// t2
	this.instance_5 = new lib.t2("synched",0);
	this.instance_5.setTransform(283.5,308.3,1,1,0,0,0,134.2,12.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(233).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(405));

	// t1
	this.instance_6 = new lib.t1("synched",0);
	this.instance_6.setTransform(283.5,283.3,1,1,0,0,0,134.2,12.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(233).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(405));

	// t0
	this.instance_7 = new lib.t0("synched",0);
	this.instance_7.setTransform(171.4,258.2,1,1,0,0,0,22.1,12.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(233).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(405));

	// engine
	this.instance_8 = new lib.en01p06_engine();
	this.instance_8.setTransform(564,80);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(644));

	// enginestart
	this.instance_9 = new lib.ENGINESTARTPanel("single",0);
	this.instance_9.setTransform(286.1,116.4,1,1,0,0,0,76.1,-113.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(644));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(500,275,1000,550);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;