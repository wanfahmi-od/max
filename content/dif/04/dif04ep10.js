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
		{src:"images/en01p08_plane.png", id:"en01p08_plane"},
		{src:"images/en01p08_snow1.png", id:"en01p08_snow1"},
		{src:"images/en01p08_snow2.png", id:"en01p08_snow2"},
		{src:"images/en01p08_snow3.png", id:"en01p08_snow3"},
		{src:"images/en01p08_snow4.png", id:"en01p08_snow4"},
		{src:"images/note_regular.png", id:"note_regular"},
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



(lib.en01p08_plane = function() {
	this.initialize(img.en01p08_plane);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,489,418);


(lib.en01p08_snow1 = function() {
	this.initialize(img.en01p08_snow1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,458,381);


(lib.en01p08_snow2 = function() {
	this.initialize(img.en01p08_snow2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,438,362);


(lib.en01p08_snow3 = function() {
	this.initialize(img.en01p08_snow3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,452,375);


(lib.en01p08_snow4 = function() {
	this.initialize(img.en01p08_snow4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,438,356);


(lib.note_regular = function() {
	this.initialize(img.note_regular);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,127,117);


(lib.texture = function() {
	this.initialize(img.texture);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIAJIAAgQIAQAAIAAAQg");
	this.shape.setTransform(264.6,39.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgMAAgOQAAgNAFgKQAFgLAJgHQAJgFALAAQAHgBAGAEQAHAEAEAFIAAguIAQAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgPgJQgIAJABAQQAAATAHAIQAIAJAIAAQAKAAAIgJQAGgIABgSQgBgRgGgJQgIgIgLgBQgJABgGAIg");
	this.shape_1.setTransform(256.7,34.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgLAAQgKAAgHAHg");
	this.shape_2.setTransform(247,35.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgaA7QgLgIABgPIAPACQABAHAEAEQAGAEAKAAQAJAAAHgEQAFgFADgIQABgEAAgQQgLAMgOAAQgTAAgKgOQgLgOAAgRQAAgNAFgMQAFgLAJgGQAKgGALAAQAQAAAKANIAAgLIAPAAIAABPQAAAVgFAKQgFAJgJAFQgKAFgMAAQgQAAgKgHgAgQgrQgIAIAAARQAAASAIAHQAHAIAJAAQALAAAHgIQAIgHAAgSQAAgRgIgIQgIgJgKAAQgJAAgHAJg");
	this.shape_3.setTransform(236.7,37.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_4.setTransform(227,35.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQAAgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAEAEACAGIABAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgQACg");
	this.shape_5.setTransform(217,35.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgFQgGgGgJAAQgFAAgGAEQgGADgDAHQgDAEAAALIAAAzIgPAAIAAh/IAPAAIAAAuQAMgNAOABQALAAAHADQAIAFADAHQAEAHgBAMIAAA7g");
	this.shape_6.setTransform(207,34);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_7.setTransform(197.8,35.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgVAMgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAIAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_8.setTransform(183,35.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgGAuIgjhbIAQAAIAUA2IAFATIAFgSIAVg3IAQAAIgjBbg");
	this.shape_9.setTransform(173.5,35.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAJgDIAAgEQAAgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAFAEABAGIABAPIAAATQAAAWAAAGQABAGADAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQADgFgBgLIAAgFQgIADgQACg");
	this.shape_10.setTransform(164,35.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAWBAIAAg7QgBgKgFgFQgEgGgKAAQgFAAgGAEQgGADgDAHQgDAEAAALIAAAzIgPAAIAAh/IAPAAIAAAuQAMgNAOABQALAAAHADQAIAFADAHQAEAHgBAMIAAA7g");
	this.shape_11.setTransform(154,34);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_12.setTransform(139.4,35.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_13.setTransform(130,35.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_14.setTransform(120,35.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgGBAIAAhcIANAAIAABcgAgGgtIAAgSIANAAIAAASg");
	this.shape_15.setTransform(113,34);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgNIAMAAIAAgXIANgJIAAAgIAQAAIAAANIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_16.setTransform(108.6,34.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgGBAIAAhcIANAAIAABcgAgGgtIAAgSIANAAIAAASg");
	this.shape_17.setTransform(104,34);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgMAAgOQAAgNAFgKQAFgLAJgHQAJgFALAAQAHgBAGAEQAHAEAFAFIAAguIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgQgJQgHAJAAAQQAAATAIAIQAHAJAJAAQAKAAAHgJQAIgIAAgSQAAgRgIgJQgHgIgLgBQgIABgIAIg");
	this.shape_18.setTransform(96.7,34.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_19.setTransform(87,35.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_20.setTransform(77,35.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_21.setTransform(67.8,35.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgbA7QgKgIAAgPIAQACQABAHAEAEQAGAEAKAAQAKAAAFgEQAGgFACgIQABgEAAgQQgKAMgOAAQgTAAgKgOQgLgOAAgRQABgNAEgMQAFgLAJgGQAKgGALAAQAQAAAKANIAAgLIAOAAIAABPQAAAVgEAKQgFAJgJAFQgKAFgMAAQgRAAgKgHgAgQgrQgHAIAAARQAAASAHAHQAHAIAJAAQALAAAIgIQAHgHAAgSQAAgRgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_22.setTransform(52.7,37.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_23.setTransform(43,35.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_24.setTransform(36,34);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_25.setTransform(29.8,35.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgGBAIAAhcIANAAIAABcgAgGgtIAAgSIANAAIAAASg");
	this.shape_26.setTransform(23,34);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_27.setTransform(11,35.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgGBAIAAhcIANAAIAABcgAgGgtIAAgSIANAAIAAASg");
	this.shape_28.setTransform(4,34);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_29.setTransform(375.4,13.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_30.setTransform(366,13.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_31.setTransform(356,13.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgGBAIAAhcIAOAAIAABcgAgGgsIAAgTIAOAAIAAATg");
	this.shape_32.setTransform(349,11.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_33.setTransform(344.6,12.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHADgGQADgGAGgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgFAEQgGAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACADAFQAFAEAAAGIABAPIAAATQAAAWABAGQABAGAEAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgDAFQgJACgEACQgEABgDAEQgCADABAEQAAAHAEAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgQACg");
	this.shape_34.setTransform(337,13.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAJAAAIAFIgFAPQgHgEgFAAQgFAAgDADQgDADgCAGQgDAIAAAKIAAAvg");
	this.shape_35.setTransform(329.7,13.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_36.setTransform(321,13.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgnBBIAAh/IAOAAIAAAMQAGgHAGgEQAGgDAHAAQAMAAAKAGQAIAGAFALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgGAAgHgDQgGgDgEgFIAAAtgAgRgqQgIAJAAASQAAAQAHAJQAIAIAKAAQAIAAAIgJQAIgIgBgRQABgSgIgJQgHgJgJAAQgKAAgHAKg");
	this.shape_37.setTransform(311.3,15.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_38.setTransform(301,13.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQALAMABAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_39.setTransform(286,13.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgGBAIAAh/IANAAIAAB/g");
	this.shape_40.setTransform(279,11.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgLAAgOQAAgOAFgKQAFgMAJgFQAJgHALAAQAHABAHADQAGADAEAHIAAgvIAQAAIAAB/IgPAAIAAgMQgIAOgRAAQgKAAgJgGgAgQgIQgGAIAAARQgBARAIAJQAIAJAIAAQAKAAAHgIQAIgJgBgRQABgSgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_41.setTransform(271.7,12);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgGBAIAAhcIANAAIAABcgAgGgsIAAgTIANAAIAAATg");
	this.shape_42.setTransform(265,11.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgLAAgOQAAgOAFgKQAFgMAJgFQAJgHALAAQAHABAHADQAGADAEAHIAAgvIAQAAIAAB/IgPAAIAAgMQgJAOgQAAQgKAAgJgGgAgQgIQgGAIAAARQgBARAIAJQAHAJAJAAQAKAAAHgIQAIgJgBgRQABgSgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_43.setTransform(252.7,12);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_44.setTransform(243,13.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_45.setTransform(232.9,13.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_46.setTransform(223,13.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAGAAQAHAAAJAFIgFAPQgGgEgGAAQgFAAgDADQgEADgBAGQgDAIAAAKIAAAvg");
	this.shape_47.setTransform(215.7,13.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgaA7QgLgIAAgPIAQACQABAHAEAEQAGAEAKAAQAJAAAGgEQAGgFACgIQABgEAAgQQgKAMgOAAQgSAAgLgOQgLgOAAgRQABgNAEgMQAFgLAJgGQAJgGAMAAQAPAAALANIAAgLIAOAAIAABPQABAVgFAKQgFAJgJAFQgJAFgNAAQgRAAgJgHgAgQgrQgHAIAAARQAAASAHAHQAHAIAJAAQALAAAIgIQAHgHAAgSQAAgRgIgIQgHgJgLAAQgJAAgHAJg");
	this.shape_48.setTransform(206.7,15.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgLAAgOQAAgOAFgKQAEgMAKgFQAJgHALAAQAHABAHADQAGADAEAHIAAgvIAQAAIAAB/IgPAAIAAgMQgIAOgRAAQgKAAgJgGgAgPgIQgIAIABARQAAARAHAJQAIAJAIAAQAKAAAIgIQAGgJAAgRQAAgSgGgIQgIgJgLAAQgJAAgGAJg");
	this.shape_49.setTransform(191.7,12);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_50.setTransform(182,13.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAJgDIAAgEQAAgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAEAEACAGIABAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgQACg");
	this.shape_51.setTransform(172,13.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgnBBIAAh/IAOAAIAAAMQAGgHAGgEQAGgDAHAAQAMAAAKAGQAIAGAFALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgGAAgHgDQgGgDgFgFIAAAtgAgRgqQgIAJAAASQAAAQAHAJQAIAIAKAAQAJAAAHgJQAIgIAAgRQAAgSgIgJQgHgJgJAAQgKAAgHAKg");
	this.shape_52.setTransform(157.3,15.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_53.setTransform(146.9,13.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgXAIIAAgOIAvAAIAAAOg");
	this.shape_54.setTransform(139,13.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_55.setTransform(131,13.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_56.setTransform(120.9,13.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAJAAAIAFIgFAPQgHgEgFAAQgFAAgDADQgDADgCAGQgDAIAAAKIAAAvg");
	this.shape_57.setTransform(113.7,13.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_58.setTransform(100.8,13.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgGBAIAAhcIANAAIAABcgAgGgsIAAgTIANAAIAAATg");
	this.shape_59.setTransform(94,11.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_60.setTransform(89.6,12.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAEAEACAGIABAPIAAATQAAAWABAGQAAAGADAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFABgLIAAgFQgJADgQACg");
	this.shape_61.setTransform(82,13.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_62.setTransform(74.6,12.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_63.setTransform(67.4,13.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgNAAQgIAAgIAHg");
	this.shape_64.setTransform(53,13.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_65.setTransform(43,13.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgsIAAgTIAPAAIAAATg");
	this.shape_66.setTransform(36,11.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgaA7QgLgIABgPIAPACQABAHAEAEQAGAEAKAAQAJAAAHgEQAFgFADgIQABgEAAgQQgLAMgOAAQgTAAgKgOQgLgOAAgRQAAgNAFgMQAFgLAJgGQAKgGALAAQAQAAAKANIAAgLIAOAAIAABPQABAVgFAKQgEAJgKAFQgKAFgMAAQgQAAgKgHgAgQgrQgHAIgBARQABASAHAHQAHAIAJAAQALAAAIgIQAHgHAAgSQAAgRgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_67.setTransform(28.7,15.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_68.setTransform(19,13.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgvBAIAAh/IBcAAIAAAPIhKAAIAAAoIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_69.setTransform(8.2,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,387.2,46.2);


(lib.t0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAtBAIAAhqIgmBqIgNAAIglhrIAABrIgRAAIAAh/IAaAAIAeBaIAEATIAHgVIAfhYIAXAAIAAB/g");
	this.shape.setTransform(47.5,11.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgfA5QgOgIgIgQQgHgPAAgRQAAgeARgSQARgSAaAAQARAAAPAIQAOAJAIAPQAHAPAAASQAAAUgIAPQgIAQgOAHQgPAIgQAAQgRAAgOgJgAgdgmQgNANAAAbQAAAXAMANQANANARAAQATAAAMgNQANgNAAgZQAAgOgGgMQgFgLgKgHQgLgGgMAAQgQAAgNAMg");
	this.shape_1.setTransform(33,11.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdA6QgNgJgHgQQgGgQgBgRQAAgUAIgOQAIgQAOgHQAOgIAPAAQAUAAANAKQANAKAFARIgRAFQgEgOgIgHQgJgGgNAAQgNgBgKAIQgKAHgEAMQgEAMAAAMQAAAPAFANQAFALAKAHQAKAFAJAAQAPAAAKgHQAKgJADgQIARAEQgFAVgOALQgOALgUAAQgTAAgNgIg");
	this.shape_2.setTransform(19.6,11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgqBAIAAh/IBVAAIAAAPIhEAAIAAApIA7AAIAAAMIg7AAIAAA7g");
	this.shape_3.setTransform(7.8,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57.2,24.1);


(lib.prot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.texture();
	this.instance.setTransform(0,0,100,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1000,550);


(lib.point_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIAuIAAgSIAQAAIAAASgAgIgbIAAgSIAQAAIAAASg");
	this.shape.setTransform(72.6,35.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AASAuIgPg2IgDgQIgRBGIgRAAIgchbIAQAAIAOA0IAHAUIAEgTIAPg1IAOAAIAOA0IAFASIAFgSIAQg0IAPAAIgcBbg");
	this.shape_1.setTransform(63.5,35.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_2.setTransform(52,35.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGBAIAAh/IANAAIAAB/g");
	this.shape_3.setTransform(45,34);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQAMAMgBAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_4.setTransform(38,35.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgYAzIAAAMIgPAAIAAh/IAQAAIAAAuQAKgMANAAQAJgBAIAEQAHADAFAHQAFAGADAJQADAHAAAKQAAAYgMANQgMANgQAAQgPAAgJgOgAgRgJQgHAJAAAPQAAARAEAIQAIAMAMAAQAJAAAHgJQAIgJAAgSQAAgQgHgJQgIgIgJgBQgJABgIAIg");
	this.shape_5.setTransform(28.2,34.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAIAAAJAFIgFAPQgHgEgFAAQgGAAgCADQgDADgCAGQgDAIAAAKIAAAvg");
	this.shape_6.setTransform(15.7,35.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_7.setTransform(7,35.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgdA6QgNgJgGgQQgIgQABgRQAAgUAHgOQAIgQAOgHQAOgIAQAAQASAAAOAKQANAKAFARIgRAFQgEgOgIgHQgJgGgNAAQgNgBgKAIQgKAHgEAMQgEAMAAAMQAAAPAFANQAEALAKAHQALAFAJAAQAPAAAKgHQAKgJAEgQIARAEQgGAVgOALQgOALgUAAQgTAAgNgIg");
	this.shape_8.setTransform(362,11.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgIAHgJAAQgJAAgHgHgAgJgJQgEAEAAAFQAAAGAEAEQAEAEAFAAQAFAAAFgEQAEgEAAgGQAAgFgEgEQgFgEgFAAQgFAAgEAEg");
	this.shape_9.setTransform(351.8,7.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgcA3QgLgKgCgQIAQgCQADAOAGAFQAHAGAJAAQAKAAAHgHQAIgJAAgKQAAgMgHgGQgHgIgLAAQgDAAgGACIABgMIADABQAIAAAIgGQAIgGAAgKQAAgJgGgFQgGgHgHABQgJgBgGAHQgHAFgBAMIgQgDQADgQAKgJQAKgIAQgBQAIAAAJAFQAJAFAFAHQAEAJAAAIQAAAIgEAIQgFAGgIAEQALADAGAGQAHAIAAANQAAARgNAMQgMAMgRgBQgRAAgLgKg");
	this.shape_10.setTransform(343.2,12);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_11.setTransform(328.6,13.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgsIAAgTIAPAAIAAATg");
	this.shape_12.setTransform(322.2,11.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgHBAIAAhwIgrAAIAAgPIBlAAIAAAPIgrAAIAABwg");
	this.shape_13.setTransform(310.1,11.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AApBAIgQgnIg0AAIgNAnIgTAAIAxh/IARAAIA1B/gAgIgYIgNAjIApAAIgOgiIgHgbQgCANgFANg");
	this.shape_14.setTransform(300,11.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgfA5QgOgIgIgQQgHgPAAgRQAAgeARgSQARgSAaAAQARAAAPAIQAOAJAIAPQAHAPAAASQAAAUgIAPQgIAQgOAHQgPAIgQAAQgRAAgOgJgAgdgmQgNANAAAbQAAAXAMANQANANARAAQATAAAMgNQANgNAAgZQAAgOgGgMQgFgLgKgHQgLgGgMAAQgQAAgNAMg");
	this.shape_15.setTransform(287,11.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgMgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgLAAQgJAAgIAHg");
	this.shape_16.setTransform(270,13.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgGQgGgFgJAAQgFAAgGAEQgHAEgCAFQgDAFAAALIAAAzIgPAAIAAh/IAPAAIAAAvQAMgNAOgBQAKAAAIAFQAIAEADAHQADAHAAAMIAAA7g");
	this.shape_17.setTransform(260,11.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_18.setTransform(252.6,12.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgLAAgOQAAgOAFgKQAFgMAJgFQAJgHALAAQAHABAGADQAHADAFAHIAAgvIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgPgIQgIAIAAARQABARAHAJQAIAJAIAAQAKAAAIgIQAGgJABgRQgBgSgGgIQgIgJgLAAQgIAAgHAJg");
	this.shape_19.setTransform(239.7,12);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_20.setTransform(230,13.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHADgGQADgGAGgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgFAEQgGAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACADAFQAFAEAAAGIABAPIAAATQAAAWABAGQABAGAEAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgDAFQgJACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgQACg");
	this.shape_21.setTransform(220,13.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgTA7QgKgGgFgLQgFgLAAgOQAAgOAFgKQAFgMAJgFQAJgHALAAQAHABAGADQAHADAFAHIAAgvIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgQgIQgHAIAAARQAAARAIAJQAHAJAJAAQAKAAAIgIQAHgJAAgRQAAgSgHgIQgIgJgLAAQgIAAgIAJg");
	this.shape_22.setTransform(204.7,12);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_23.setTransform(195,13.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAGAAQAHAAAJAFIgFAPQgHgEgFAAQgFAAgDADQgEADgBAGQgDAIAAAKIAAAvg");
	this.shape_24.setTransform(187.7,13.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgHBAIAAhcIAOAAIAABcgAgHgsIAAgTIAOAAIAAATg");
	this.shape_25.setTransform(182,11.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_26.setTransform(174.9,13.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAYBBIAAguQgEAGgGADQgHADgHAAQgPAAgMgNQgMgNAAgVQAAgOAFgMQAFgLAJgFQAJgGALAAQAQAAAKAOIAAgMIAOAAIAAB/gAgPgrQgIAJAAASQAAAQAIAJQAHAJAJAAQAKAAAHgIQAIgJAAgPQAAgTgIgJQgIgKgKAAQgIAAgHAJg");
	this.shape_27.setTransform(164.7,15.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQAMAMgBAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_28.setTransform(155,13.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgFgEgGAAQgGAAgCADQgEADgCAGQgCAIAAAKIAAAvg");
	this.shape_29.setTransform(147.7,13.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_30.setTransform(134.4,13.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgHBAIAAhcIAOAAIAABcgAgHgsIAAgTIAOAAIAAATg");
	this.shape_31.setTransform(128,11.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgNAAQgIAAgIAHg");
	this.shape_32.setTransform(116,13.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_33.setTransform(106.8,13.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgHBAIAAhcIAOAAIAABcgAgHgsIAAgTIAOAAIAAATg");
	this.shape_34.setTransform(100,11.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgXAIIAAgOIAvAAIAAAOg");
	this.shape_35.setTransform(95,13.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgsIAAgTIAPAAIAAATg");
	this.shape_36.setTransform(90,11.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_37.setTransform(85.6,12.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_38.setTransform(78,13.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQAEAEAAAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAHgEAEgHQACgFAAgLIAAgFQgIADgPACg");
	this.shape_39.setTransform(68,13.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgNAAQgIAAgIAHg");
	this.shape_40.setTransform(53,13.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_41.setTransform(43,13.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgsIAAgTIAPAAIAAATg");
	this.shape_42.setTransform(36,11.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgaA7QgLgIABgPIAPACQABAHAEAEQAGAEAKAAQAJAAAHgEQAFgFADgIQABgEAAgQQgLAMgOAAQgTAAgKgOQgLgOAAgRQAAgNAFgMQAFgLAJgGQAKgGALAAQAQAAAKANIAAgLIAOAAIAABPQABAVgFAKQgEAJgKAFQgKAFgMAAQgQAAgKgHgAgQgrQgHAIgBARQABASAHAHQAHAIAJAAQALAAAIgIQAHgHAAgSQAAgRgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_43.setTransform(28.7,15.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_44.setTransform(19,13.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgvBAIAAh/IBcAAIAAAPIhKAAIAAAoIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_45.setTransform(8.2,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,375.6,46.2);


(lib.point = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQARQgIgHAAgKQAAgJAIgHQAHgIAJAAQAKAAAHAIQAIAHAAAJQAAAKgIAHQgHAIgKAAQgJAAgHgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,5,5);


(lib.plane = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// outline
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,0,3).p("Egj1geXMBHrAAAMAAAA8vMhHrAAAg");
	this.shape.setTransform(240.5,204.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(75));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egj1AeYMAAAg8vMBHrAAAMAAAA8vg");
	mask.setTransform(240.5,204.5);

	// snow
	this.instance = new lib.en01p08_snow1();
	this.instance.setTransform(11,15.1);

	this.instance_1 = new lib.en01p08_snow2();
	this.instance_1.setTransform(21.5,30.1);

	this.instance_2 = new lib.en01p08_snow3();
	this.instance_2.setTransform(216.8,-94.8,1,1,45);

	this.instance_3 = new lib.en01p08_snow4();
	this.instance_3.setTransform(28.8,319.8,1,1,-45);

	this.instance_4 = new lib.en01p08_snow4();
	this.instance_4.setTransform(-227.2,205,1,1,-45);

	this.instance_5 = new lib.en01p08_snow4();
	this.instance_5.setTransform(89.8,134.9,1,1,-45);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},4).to({state:[{t:this.instance_1},{t:this.instance_2}]},5).to({state:[{t:this.instance_1},{t:this.instance_2},{t:this.instance_5},{t:this.instance_4,p:{rotation:-45,x:-227.2,y:205}},{t:this.instance_3,p:{x:28.8,y:319.8}}]},5).to({state:[{t:this.instance_1},{t:this.instance_4,p:{rotation:45,x:188.5,y:-135.7}},{t:this.instance_3,p:{x:122.8,y:131.8}}]},5).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance},{t:this.instance_1}]},5).to({state:[{t:this.instance_1},{t:this.instance_2}]},5).to({state:[{t:this.instance_1},{t:this.instance_2},{t:this.instance_5},{t:this.instance_4,p:{rotation:-45,x:-227.2,y:205}},{t:this.instance_3,p:{x:28.8,y:319.8}}]},5).to({state:[{t:this.instance_1},{t:this.instance_4,p:{rotation:45,x:188.5,y:-135.7}},{t:this.instance_3,p:{x:122.8,y:131.8}}]},5).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1},{t:this.instance_2}]},5).to({state:[{t:this.instance_1},{t:this.instance_2},{t:this.instance_5},{t:this.instance_4,p:{rotation:-45,x:-227.2,y:205}},{t:this.instance_3,p:{x:28.8,y:319.8}}]},5).to({state:[{t:this.instance}]},5).wait(11));

	// Layer 1
	this.instance_6 = new lib.en01p08_plane();

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,9.1,461,391);


(lib.notebox2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGAHIAAgNIANAAIAAANg");
	this.shape.setTransform(549,49.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_1.setTransform(545.2,45.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgbAiQgHgHAAgJQAAgGACgFQADgEAEgDQAEgBAGgCIALgCQAOgBAIgDIAAgEQAAgIgEgDQgFgEgJAAQgIAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAIAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAAQQAAASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgFADgIAAQgNAAgGgGgAgCAEIgLADQgEABgBADQgCADAAADQAAAGAEADQAEAEAHAAQAGAAAGgEQAGgDADgGQACgEAAgJIAAgEQgHACgNACg");
	this.shape_2.setTransform(539.3,46.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgFAnIgdhNIAOAAIAQAtIAEAQIAFgPIAQguIAOAAIgdBNg");
	this.shape_3.setTransform(531.5,46.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgUAnIAAhMIAMAAIAAAMQAFgIADgDQADgCAEAAQAHAAAHAEIgFAMQgFgDgEAAQgFAAgCADQgDADgBAEQgCAHAAAIIAAAng");
	this.shape_4.setTransform(525.8,46.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_5.setTransform(518.5,46.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAAAzQgEgDgCgDQgCgEABgNIAAgqIgKAAIAAgLIAKAAIAAgSIAKgJIAAAbIAOAAIAAALIgOAAIAAArIABAHIADADIAEABIAGgBIACANIgKABQgIAAgBgCg");
	this.shape_6.setTransform(512.4,45.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AASAnIAAgtQAAgIgCgEQgBgEgEgCQgEgDgGAAQgFAAgHAFQgGAGAAAPIAAAoIgNAAIAAhMIAMAAIAAAMQAIgNAPAAQAGAAAGACQAHADACAEQADAEACAGIAAAMIAAAug");
	this.shape_7.setTransform(506,46.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_8.setTransform(500.2,45.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_9.setTransform(490.1,46.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAAAzQgEgDgCgDQgCgEABgNIAAgqIgKAAIAAgLIAKAAIAAgSIAKgJIAAAbIAOAAIAAALIgOAAIAAArIABAHIADADIAEABIAGgBIACANIgKABQgIAAgBgCg");
	this.shape_10.setTransform(484,45.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgQAlQgGgDgDgEQgDgEgBgGIgBgMIAAgvIAOAAIAAAqIAAAOQABAFAEADQAFADAFAAQAEAAAGgDQAFgDACgGQACgEAAgKIAAgpIANAAIAABNIgLAAIAAgMQgKANgOAAQgGAAgGgCg");
	this.shape_11.setTransform(477.6,46.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AASAnIAAgtQAAgIgCgEQgBgEgEgCQgEgDgFAAQgHAAgGAFQgGAGAAAPIAAAoIgNAAIAAhMIAMAAIAAAMQAIgNAOAAQAIAAAFACQAHADACAEQADAEACAGIAAAMIAAAug");
	this.shape_12.setTransform(469.3,46.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_13.setTransform(463.5,45.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAnAnIAAgvIgBgLQgCgEgDgCQgDgCgFAAQgIAAgGAGQgFAFAAAMIAAArIgLAAIAAgwQAAgJgDgEQgEgFgHAAQgFAAgFADQgFADgCAGQgCAFAAAKIAAAnIgNAAIAAhMIALAAIAAALQAEgFAGgEQAGgDAIAAQAJAAAFADQAEAEACAGQAJgNAPAAQAMAAAGAGQAGAHAAANIAAAzg");
	this.shape_14.setTransform(455.6,46.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgXArQgLgNAAgeQABgSADgLQAFgMAIgGQAHgGAKAAQAJgBAGAEQAGADAFAHQAEAHADAJQACAJAAAPQgBASgDAMQgEALgIAHQgHAGgMAAQgOAAgJgLgAgNgiQgHAJABAZQAAAaAFAJQAHAJAHAAQAJgBAGgIQAGgJAAgaQAAgZgGgJQgGgJgJABQgIgBgFAJg");
	this.shape_15.setTransform(440.9,45.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgYAqQgKgMAAgcQAAgdALgOQAKgMAPAAQANAAAJAHQAHAHACANIgNABQgBgJgEgDQgGgFgHAAQgFAAgEADQgHAEgDAKQgEAIABAQQAEgHAHgEQAHgDAGAAQANAAAJAJQAJAJAAAPQAAAJgEAJQgFAJgIAEQgHAGgKgBQgOAAgLgMgAgMABQgHAGABALQgBAGADAGQADAHAFADQAFAEAEAAQAIgBAHgGQAFgHABgMQgBgLgFgGQgHgFgJAAQgGAAgGAFg");
	this.shape_16.setTransform(432.6,45.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_17.setTransform(420.1,46.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AASA1IAAgxQAAgIgEgEQgEgFgJAAQgDAAgFADQgFADgDAFQgCAEAAAJIAAAqIgNAAIAAhpIANAAIAAAmQAKgKAMAAQAIAAAGADQAHAEACAGQADAGAAAJIAAAxg");
	this.shape_18.setTransform(411.8,45.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgBAzQgEgDgBgDQgBgEAAgNIAAgqIgKAAIAAgLIAKAAIAAgSIAKgJIAAAbIAOAAIAAALIgOAAIAAArIABAHIACADIAFABIAGgBIACANIgKABQgHAAgDgCg");
	this.shape_19.setTransform(405.6,45.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AASAnIAAgtQAAgIgBgEQgCgEgEgCQgEgDgGAAQgFAAgHAFQgGAGAAAPIAAAoIgNAAIAAhMIAMAAIAAAMQAIgNAPAAQAHAAAFACQAGADADAEQADAEABAGIABAMIAAAug");
	this.shape_20.setTransform(395.1,46.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_21.setTransform(389.3,45.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgEgKAAgMQAAgLAEgIQAEgJAHgFQAIgFAJAAQAGAAAFADQAGADADAEIAAgmIANAAIAABpIgMAAIAAgKQgHAMgOAAQgIAAgIgFgAgNgHQgGAHAAANQAAAPAHAIQAGAHAHAAQAIAAAGgHQAGgHAAgOQAAgPgGgHQgGgHgJAAQgHAAgGAHg");
	this.shape_22.setTransform(379,45.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_23.setTransform(370.9,46.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgEgKAAgMQAAgLAEgIQAEgJAHgFQAIgFAJAAQAGAAAFADQAGADADAEIAAgmIANAAIAABpIgMAAIAAgKQgHAMgOAAQgIAAgIgFgAgNgHQgGAHAAANQAAAPAHAIQAGAHAHAAQAIAAAGgHQAGgHAAgOQAAgPgGgHQgGgHgJAAQgHAAgGAHg");
	this.shape_24.setTransform(362.3,45.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgQAlQgGgDgDgEQgDgEgBgGIgBgMIAAgvIAOAAIAAAqIAAAOQABAFAFADQADADAHAAQAEAAAEgDQAFgDADgGQACgEAAgKIAAgpIANAAIAABNIgMAAIAAgMQgIANgPAAQgGAAgGgCg");
	this.shape_25.setTransform(354.2,46.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_26.setTransform(348.3,45.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgXAeQgJgLAAgTQAAgLAEgJQAEgKAJgFQAIgEAIAAQANAAAIAGQAIAHACALIgNACQgCgIgEgDQgFgEgGAAQgIAAgHAHQgGAHAAAOQAAAPAGAHQAGAHAIAAQAIAAAFgFQAFgEABgKIANABQgCAOgIAHQgJAIgNAAQgOAAgKgKg");
	this.shape_27.setTransform(343.2,46.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AASAnIAAgtQAAgIgCgEQgBgEgEgCQgEgDgGAAQgFAAgHAFQgGAGAAAPIAAAoIgNAAIAAhMIAMAAIAAAMQAIgNAPAAQAGAAAGACQAHADACAEQADAEACAGIAAAMIAAAug");
	this.shape_28.setTransform(335,46.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_29.setTransform(329.2,45.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_30.setTransform(319.1,46.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgUArIAAAJIgMAAIAAhpIANAAIAAAmQAIgKALAAQAHAAAHADQAGACAEAGQAEAFADAHQACAGAAAIQAAAUgKALQgKALgNAAQgMAAgIgLgAgOgHQgGAHAAANQAAAOADAGQAHAKAKAAQAHAAAGgHQAHgIAAgPQAAgNgGgHQgHgHgHAAQgIAAgGAHg");
	this.shape_31.setTransform(311,45.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgEgKAAgMQAAgLAEgIQAEgJAHgFQAIgFAJAAQAGAAAFADQAGADADAEIAAgmIANAAIAABpIgMAAIAAgKQgHAMgOAAQgIAAgIgFgAgNgHQgGAHAAANQAAAPAHAIQAGAHAHAAQAIAAAGgHQAGgHAAgOQAAgPgGgHQgGgHgJAAQgHAAgGAHg");
	this.shape_32.setTransform(298,45.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_33.setTransform(292.4,45.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgQAlQgGgDgDgEQgDgEgBgGIgBgMIAAgvIAOAAIAAAqIAAAOQACAFAEADQADADAHAAQAEAAAFgDQAEgDADgGQACgEAAgKIAAgpIANAAIAABNIgMAAIAAgMQgIANgPAAQgGAAgGgCg");
	this.shape_34.setTransform(286.6,46.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgZAeQgKgLAAgTQAAgUAMgLQAKgIANAAQAQAAAKAKQAKALAAASQAAANgFAJQgEAIgIAFQgKAFgJAAQgPAAgKgKgAgPgVQgGAHgBAOQABAOAGAIQAHAHAIAAQAJAAAHgHQAGgIAAgOQAAgOgGgHQgHgHgJAAQgIAAgHAHg");
	this.shape_35.setTransform(278.3,46.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AASA1IAAgxQAAgIgEgEQgEgFgJAAQgDAAgFADQgGADgCAFQgCAEAAAJIAAAqIgNAAIAAhpIANAAIAAAmQAJgKAMAAQAJAAAGADQAHAEACAGQADAGAAAJIAAAxg");
	this.shape_36.setTransform(269.9,45.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_37.setTransform(261.9,46.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AASAnIAAgtQAAgIgBgEQgCgEgEgCQgEgDgFAAQgHAAgGAFQgGAGAAAPIAAAoIgNAAIAAhMIAMAAIAAAMQAJgNANAAQAIAAAGACQAFADAEAEQACAEABAGIABAMIAAAug");
	this.shape_38.setTransform(249.9,46.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_39.setTransform(244.1,45.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_40.setTransform(236.6,45.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAUAnIgQgZIgEgGIgTAfIgQAAIAcgnIgagmIAQAAIANATIAEAIIAFgIIANgTIAQAAIgbAlIAdAog");
	this.shape_41.setTransform(231.2,46.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgbAiQgHgHAAgJQAAgGACgFQADgEAEgDQAEgBAGgCIALgCQAOgBAIgDIAAgEQAAgIgEgDQgFgEgJAAQgIAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAIAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAAQQAAASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgFADgIAAQgNAAgGgGgAgCAEIgLADQgEABgBADQgCADAAADQAAAGAEADQAEAEAHAAQAGAAAGgEQAGgDADgGQACgEAAgJIAAgEQgHACgNACg");
	this.shape_42.setTransform(223.2,46.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgBAzQgEgDgBgDQgBgEAAgNIAAgqIgKAAIAAgLIAKAAIAAgSIAKgJIAAAbIAOAAIAAALIgOAAIAAArIABAHIACADIAFABIAGgBIACANIgKABQgHAAgDgCg");
	this.shape_43.setTransform(217.1,45.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_44.setTransform(206.5,46.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AASA1IAAgxQAAgIgEgEQgEgFgJAAQgDAAgGADQgEADgDAFQgCAEAAAJIAAAqIgNAAIAAhpIANAAIAAAmQAJgKANAAQAIAAAGADQAHAEACAGQADAGAAAJIAAAxg");
	this.shape_45.setTransform(198.2,45.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAAAzQgFgDgBgDQgCgEABgNIAAgqIgKAAIAAgLIAKAAIAAgSIAKgJIAAAbIAOAAIAAALIgOAAIAAArIABAHIADADIAEABIAGgBIABANIgJABQgIAAgBgCg");
	this.shape_46.setTransform(192.1,45.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgWAxQgJgGABgNIANACQAAAGAEADQAFADAIAAQAIAAAFgDQAFgEABgHQABgEAAgMQgIAJgMABQgPAAgJgMQgJgMAAgOQAAgLAEgKQAEgJAIgFQAHgFAKAAQANAAAIALIAAgKIANAAIAABCQAAASgEAHQgEAIgIAFQgIAEgKAAQgNAAgJgGgAgNgkQgGAHAAAOQAAAPAGAGQAGAGAHABQAJgBAGgGQAGgGAAgPQAAgOgGgHQgGgHgJAAQgHAAgGAHg");
	this.shape_47.setTransform(181.3,48.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AASAnIAAgtQAAgIgCgEQgBgEgEgCQgEgDgFAAQgHAAgGAFQgGAGAAAPIAAAoIgNAAIAAhMIAMAAIAAAMQAIgNAOAAQAIAAAFACQAHADACAEQADAEACAGIAAAMIAAAug");
	this.shape_48.setTransform(173.2,46.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_49.setTransform(167.4,45.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgUAnIAAhMIAMAAIAAAMQAFgIADgDQADgCAEAAQAHAAAHAEIgFAMQgFgDgEAAQgFAAgCADQgDADgBAEQgCAHAAAIIAAAng");
	this.shape_50.setTransform(163.8,46.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgQAlQgGgDgDgEQgDgEgBgGIgBgMIAAgvIANAAIAAAqIABAOQACAFAEADQAEADAFAAQAFAAAEgDQAFgDADgGQACgEAAgKIAAgpIANAAIAABNIgLAAIAAgMQgKANgNAAQgHAAgGgCg");
	this.shape_51.setTransform(156.5,46.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgEgKAAgMQAAgLAEgIQAEgJAHgFQAIgFAJAAQAGAAAFADQAGADADAEIAAgmIANAAIAABpIgMAAIAAgKQgHAMgOAAQgIAAgIgFgAgNgHQgGAHAAANQAAAPAHAIQAGAHAHAAQAIAAAGgHQAGgHAAgOQAAgPgGgHQgGgHgJAAQgHAAgGAHg");
	this.shape_52.setTransform(147.9,45.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgWAxQgJgGABgNIANACQAAAGAEADQAFADAIAAQAIAAAFgDQAFgEABgHQABgEAAgMQgIAJgMABQgPAAgJgMQgJgMAAgOQAAgLAEgKQAEgJAIgFQAHgFAKAAQANAAAIALIAAgKIANAAIAABCQAAASgEAHQgEAIgIAFQgIAEgKAAQgNAAgJgGgAgNgkQgGAHAAAOQAAAPAGAGQAGAGAHABQAJgBAGgGQAGgGAAgPQAAgOgGgHQgGgHgJAAQgHAAgGAHg");
	this.shape_53.setTransform(135.4,48.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AASAnIAAgtQAAgIgCgEQgBgEgEgCQgEgDgFAAQgHAAgGAFQgGAGAAAPIAAAoIgNAAIAAhMIAMAAIAAAMQAIgNAPAAQAHAAAFACQAHADACAEQADAEACAGIAAAMIAAAug");
	this.shape_54.setTransform(127.3,46.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_55.setTransform(121.5,45.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAAAzQgFgDgBgDQgCgEABgNIAAgqIgKAAIAAgLIAKAAIAAgSIAKgJIAAAbIAOAAIAAALIgOAAIAAArIABAHIADADIAEABIAGgBIABANIgJABQgIAAgBgCg");
	this.shape_56.setTransform(117.8,45.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgbAiQgHgHAAgJQAAgGACgFQADgEAEgDQAEgBAGgCIALgCQAOgBAIgDIAAgEQAAgIgEgDQgFgEgJAAQgIAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAIAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAAQQAAASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgFADgIAAQgNAAgGgGgAgCAEIgLADQgEABgBADQgCADAAADQAAAGAEADQAEAEAHAAQAGAAAGgEQAGgDADgGQACgEAAgJIAAgEQgHACgNACg");
	this.shape_57.setTransform(111.4,46.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgUAnIAAhMIAMAAIAAAMQAFgIADgDQADgCAEAAQAHAAAHAEIgFAMQgFgDgEAAQgFAAgCADQgDADgBAEQgCAHAAAIIAAAng");
	this.shape_58.setTransform(105.4,46.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_59.setTransform(98.1,46.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AggA2IAAhqIAMAAIAAALQAEgGAFgDQAGgDAFAAQAKAAAIAFQAHAFAEAJQAEAKAAALQAAAMgEAHQgEAKgJAFQgIAFgIAAQgFAAgGgDQgFgDgDgEIAAAmgAgOgjQgGAIAAAPQAAANAGAHQAGAHAIAAQAHAAAGgHQAHgIAAgNQAAgPgGgIQgHgHgHAAQgHAAgHAIg");
	this.shape_60.setTransform(90,48.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgZAeQgKgLAAgTQAAgUAMgLQAKgIANAAQAQAAAJAKQALALAAASQAAANgFAJQgEAIgIAFQgKAFgJAAQgPAAgKgKgAgPgVQgGAHAAAOQAAAOAGAIQAHAHAIAAQAJAAAHgHQAGgIAAgOQAAgOgGgHQgHgHgJAAQgIAAgHAHg");
	this.shape_61.setTransform(81.4,46.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_62.setTransform(68.9,46.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgUAnIAAhMIAMAAIAAAMQAFgIADgDQADgCAEAAQAHAAAHAEIgFAMQgFgDgEAAQgFAAgCADQgDADgBAEQgCAHAAAIIAAAng");
	this.shape_63.setTransform(62.8,46.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_64.setTransform(55.5,46.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAPAnIgMgtIgDgOIgOA7IgOAAIgYhNIAOAAIAMArIAFARIAEgQIAMgsIAMAAIALAsIAEAPIAFgQIANgrIANAAIgYBNg");
	this.shape_65.setTransform(45.9,46.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_66.setTransform(889.8,30);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_67.setTransform(881.9,30);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AASAnIAAgtQAAgIgBgEQgCgEgEgCQgEgDgGAAQgFAAgHAFQgGAGAAAPIAAAoIgNAAIAAhMIAMAAIAAAMQAIgNAPAAQAHAAAFACQAHADACAEQADAEACAGIAAAMIAAAug");
	this.shape_68.setTransform(873.6,29.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_69.setTransform(867.7,28.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgWAxQgJgGABgNIANACQAAAGAEACQAFAEAIAAQAIAAAFgEQAFgDABgHQABgEAAgNQgIALgMgBQgPAAgJgLQgJgMAAgOQAAgLAEgKQAEgJAIgFQAHgFAKAAQANAAAIALIAAgKIANAAIAABCQAAASgEAIQgEAHgIAEQgIAFgKAAQgNAAgJgGgAgNgkQgGAHAAAOQAAAPAGAFQAGAIAHAAQAJAAAGgIQAGgFAAgOQAAgPgGgHQgGgHgJAAQgHAAgGAHg");
	this.shape_70.setTransform(861.6,31.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AASAnIAAgtQAAgIgCgEQgBgEgEgCQgEgDgFAAQgGAAgHAFQgGAGAAAPIAAAoIgNAAIAAhMIAMAAIAAAMQAIgNAPAAQAGAAAGACQAHADACAEQADAEACAGIAAAMIAAAug");
	this.shape_71.setTransform(853.5,29.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_72.setTransform(845.1,30);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_73.setTransform(832.6,30);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AASA1IAAgxQAAgIgEgEQgEgFgJAAQgDAAgFADQgGADgCAFQgCAEAAAJIAAAqIgNAAIAAhpIANAAIAAAmQAJgKAMAAQAJAAAGADQAHAEACAGQADAGAAAJIAAAxg");
	this.shape_74.setTransform(824.3,28.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgBAyQgEgCgBgEQgBgEAAgLIAAgrIgLAAIAAgLIALAAIAAgTIAKgIIAAAbIANAAIAAALIgNAAIAAAsIABAGIACAEIAFAAIAFAAIADALIgKABQgHAAgDgCg");
	this.shape_75.setTransform(818.2,28.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_76.setTransform(807.6,30);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AAnAnIAAgvIgBgLQgCgEgDgCQgDgCgFAAQgIAAgGAGQgFAFAAAMIAAArIgLAAIAAgwQAAgJgDgEQgEgFgHAAQgFAAgFADQgFADgCAGQgCAFAAAKIAAAnIgNAAIAAhMIALAAIAAALQAEgFAGgEQAGgDAIAAQAJAAAFADQAEAEACAGQAJgNAPAAQAMAAAGAGQAGAHAAANIAAAzg");
	this.shape_77.setTransform(797.3,29.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_78.setTransform(789.3,28.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgBAyQgDgCgCgEQgCgEAAgLIAAgrIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIAMAAIAAALIgMAAIAAAsIAAAGIACAEIAFAAIAFAAIADALIgLABQgGAAgDgCg");
	this.shape_79.setTransform(785.7,28.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_80.setTransform(775.1,30);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AASA1IAAgxQAAgIgEgEQgEgFgJAAQgDAAgGADQgEADgDAFQgCAEAAAJIAAAqIgNAAIAAhpIANAAIAAAmQAJgKANAAQAIAAAGADQAHAEACAGQADAGAAAJIAAAxg");
	this.shape_81.setTransform(766.8,28.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgBAyQgEgCgBgEQgBgEAAgLIAAgrIgKAAIAAgLIAKAAIAAgTIAKgIIAAAbIAOAAIAAALIgOAAIAAAsIABAGIACAEIAFAAIAGAAIACALIgKABQgHAAgDgCg");
	this.shape_82.setTransform(760.7,28.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgHAMQAFgCABgDQABgEAAgFIgFAAIAAgPIAMAAIAAAPQAAAHgCAFQgDAFgFACg");
	this.shape_83.setTransform(752.3,34.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgBAyQgDgCgCgEQgCgEAAgLIAAgrIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIAMAAIAAALIgMAAIAAAsIAAAGIACAEIAFAAIAFAAIACALIgKABQgHAAgCgCg");
	this.shape_84.setTransform(748.2,28.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgQAlQgGgDgDgEQgDgEgBgGIgBgMIAAgvIANAAIAAAqIABAOQACAFAEADQAEADAFAAQAEAAAFgDQAFgDADgFQACgGAAgKIAAgoIANAAIAABMIgMAAIAAgLQgIANgOAAQgHAAgGgCg");
	this.shape_85.setTransform(741.8,30.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgZAeQgKgLAAgTQAAgUAMgLQAKgIANAAQAPAAALAKQAKALAAASQAAANgEAJQgFAIgJAFQgJAFgJAAQgPAAgKgKgAgPgVQgHAHAAAOQAAAOAHAIQAGAHAJAAQAKAAAGgHQAHgIAAgOQAAgOgHgHQgHgHgJAAQgJAAgGAHg");
	this.shape_86.setTransform(733.5,30);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_87.setTransform(723.5,28.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AATAmIgQgYIgDgGIgTAeIgQAAIAcgmIgagmIARAAIALATIAFAIIAFgIIANgTIAQAAIgbAmIAdAmg");
	this.shape_88.setTransform(718.1,30);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgbAiQgHgHAAgJQAAgGACgFQADgEAEgDQAEgBAGgCIALgCQAOgBAIgDIAAgEQAAgIgEgDQgFgEgJAAQgIAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAIAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAAQQAAASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgFADgIAAQgNAAgGgGgAgCAEIgLADQgEABgBADQgCADAAADQAAAGAEADQAEAEAHAAQAGAAAGgEQAGgDADgGQACgEAAgJIAAgEQgHACgNACg");
	this.shape_89.setTransform(710.1,30);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgBAyQgDgCgCgEQgBgEgBgLIAAgrIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIAMAAIAAALIgMAAIAAAsIAAAGIADAEIAEAAIAFAAIACALIgKABQgGAAgDgCg");
	this.shape_90.setTransform(704,28.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgZAeQgKgLAAgTQAAgUAMgLQAKgIANAAQAQAAAJAKQALALAAASQAAANgFAJQgEAIgIAFQgKAFgJAAQgPAAgKgKgAgPgVQgGAHAAAOQAAAOAGAIQAHAHAIAAQAJAAAHgHQAGgIAAgOQAAgOgGgHQgHgHgJAAQgIAAgHAHg");
	this.shape_91.setTransform(693.5,30);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgBAyQgDgCgCgEQgCgEAAgLIAAgrIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIAMAAIAAALIgMAAIAAAsIAAAGIACAEIAFAAIAFAAIACALIgKABQgGAAgDgCg");
	this.shape_92.setTransform(687.4,28.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgUAnIAAhMIAMAAIAAAMQAFgIADgDQADgCAEAAQAHAAAHAEIgFAMQgFgDgEAAQgFAAgCADQgDADgBAEQgCAHAAAIIAAAng");
	this.shape_93.setTransform(679.1,29.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgZAeQgKgLAAgTQAAgUAMgLQAKgIANAAQAPAAALAKQAKALAAASQAAANgEAJQgFAIgJAFQgJAFgJAAQgPAAgKgKgAgPgVQgHAHAAAOQAAAOAHAIQAGAHAJAAQAKAAAGgHQAHgIAAgOQAAgOgHgHQgHgHgJAAQgJAAgGAHg");
	this.shape_94.setTransform(671.9,30);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_95.setTransform(666,28.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgUAnIAAhMIAMAAIAAAMQAFgIADgDQADgCAEAAQAHAAAHAEIgFAMQgFgDgEAAQgFAAgCADQgDADgBAEQgCAHAAAIIAAAng");
	this.shape_96.setTransform(662.4,29.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AggA2IAAhqIAMAAIAAALQAEgGAFgDQAGgDAFAAQAKAAAIAFQAHAFAEAJQAEAKAAALQAAAMgEAHQgEAKgJAFQgIAFgIAAQgFAAgGgDQgFgDgDgEIAAAmgAgOgjQgGAIAAAPQAAANAGAHQAGAHAIAAQAHAAAGgHQAHgIAAgNQAAgPgGgIQgHgHgHAAQgHAAgHAIg");
	this.shape_97.setTransform(655.4,31.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgEgKAAgMQAAgLAEgIQAEgJAHgFQAIgFAJAAQAGAAAFADQAGADADAEIAAgmIANAAIAABpIgMAAIAAgKQgHAMgOAAQgIAAgIgFgAgNgHQgGAHAAANQAAAPAHAIQAGAHAHAAQAIAAAGgHQAGgHAAgOQAAgPgGgHQgGgHgJAAQgHAAgGAHg");
	this.shape_98.setTransform(642.4,28.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_99.setTransform(634.3,30);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgXAeQgJgLAAgTQAAgLAEgJQAEgKAJgFQAIgEAIAAQANAAAIAGQAIAHACALIgNACQgCgIgEgDQgFgEgGAAQgIAAgHAHQgGAHAAAOQAAAPAGAHQAGAHAIAAQAIAAAFgFQAFgEABgKIANABQgCAOgIAHQgJAIgNAAQgOAAgKgKg");
	this.shape_100.setTransform(626.6,30);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_101.setTransform(621,28.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_102.setTransform(615.1,30);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgEgKAAgMQAAgLAEgIQAEgJAHgFQAIgFAJAAQAGAAAFADQAGADADAEIAAgmIANAAIAABpIgMAAIAAgKQgHAMgOAAQgIAAgIgFgAgNgHQgGAHAAANQAAAPAHAIQAGAHAHAAQAIAAAGgHQAGgHAAgOQAAgPgGgHQgGgHgJAAQgHAAgGAHg");
	this.shape_103.setTransform(606.5,28.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgBAyQgDgCgCgEQgBgEgBgLIAAgrIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIAMAAIAAALIgMAAIAAAsIAAAGIACAEIAFAAIAFAAIACALIgKABQgGAAgDgCg");
	this.shape_104.setTransform(596.5,28.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgZAeQgKgLAAgTQAAgUAMgLQAKgIANAAQAQAAAKAKQAKALAAASQAAANgFAJQgEAIgIAFQgKAFgJAAQgPAAgKgKgAgPgVQgGAHgBAOQABAOAGAIQAHAHAIAAQAJAAAHgHQAGgIAAgOQAAgOgGgHQgHgHgJAAQgIAAgHAHg");
	this.shape_105.setTransform(590.1,30);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AASAnIAAgtQAAgIgBgEQgCgEgEgCQgEgDgGAAQgGAAgGAFQgGAGAAAPIAAAoIgNAAIAAhMIAMAAIAAAMQAJgNANAAQAHAAAHACQAFADAEAEQACAEABAGIABAMIAAAug");
	this.shape_106.setTransform(581.8,29.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_107.setTransform(569.2,30);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgUAnIAAhMIAMAAIAAAMQAFgIADgDQADgCAEAAQAHAAAHAEIgFAMQgFgDgEAAQgFAAgCADQgDADgBAEQgCAHAAAIIAAAng");
	this.shape_108.setTransform(563.2,29.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_109.setTransform(555.9,30);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AAPAmIgMgsIgDgOIgOA6IgOAAIgYhMIAOAAIAMArIAFARIAEgPIAMgtIAMAAIALAsIAEAOIAFgPIANgrIANAAIgYBMg");
	this.shape_110.setTransform(546.3,30);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_111.setTransform(532.9,30);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_112.setTransform(525,30);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgEgKAAgMQAAgLAEgIQAEgJAHgFQAIgFAJAAQAGAAAFADQAGADADAEIAAgmIANAAIAABpIgMAAIAAgKQgHAMgOAAQgIAAgIgFgAgNgHQgGAHAAANQAAAPAHAIQAGAHAHAAQAIAAAGgHQAGgHAAgOQAAgPgGgHQgGgHgJAAQgHAAgGAHg");
	this.shape_113.setTransform(516.4,28.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgbAiQgHgHAAgJQAAgGACgFQADgEAEgDQAEgBAGgCIALgCQAOgBAIgDIAAgEQAAgIgEgDQgFgEgJAAQgIAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAIAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAAQQAAASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgFADgIAAQgNAAgGgGgAgCAEIgLADQgEABgBADQgCADAAADQAAAGAEADQAEAEAHAAQAGAAAGgEQAGgDADgGQACgEAAgJIAAgEQgHACgNACg");
	this.shape_114.setTransform(508.3,30);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_115.setTransform(502.5,28.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgUArIAAAJIgMAAIAAhpIANAAIAAAmQAIgKALAAQAHAAAHADQAGACAEAGQAEAFADAHQACAGAAAIQAAAUgKALQgKALgNAAQgMAAgIgLgAgOgHQgGAHAAANQAAAOADAGQAHAKAKAAQAHAAAGgHQAHgIAAgPQAAgNgGgHQgHgHgHAAQgIAAgGAHg");
	this.shape_116.setTransform(496.9,28.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AASAnIAAgtQAAgIgCgEQgBgEgEgCQgEgDgFAAQgHAAgGAFQgGAGAAAPIAAAoIgNAAIAAhMIAMAAIAAAMQAIgNAOAAQAIAAAFACQAHADACAEQADAEACAGIAAAMIAAAug");
	this.shape_117.setTransform(484.2,29.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgbAiQgHgHAAgJQAAgGACgFQADgEAEgDQAEgBAGgCIALgCQAOgBAIgDIAAgEQAAgIgEgDQgFgEgJAAQgIAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAIAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAAQQAAASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgFADgIAAQgNAAgGgGgAgCAEIgLADQgEABgBADQgCADAAADQAAAGAEADQAEAEAHAAQAGAAAGgEQAGgDADgGQACgEAAgJIAAgEQgHACgNACg");
	this.shape_118.setTransform(475.8,30);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgKA2IAAhCIgLAAIAAgKIALAAIAAgIQAAgIACgDQACgGAEgDQADgDAJAAIAMABIgCAMIgIgBQgGAAgCACQgDADAAAHIAAAHIAQAAIAAAKIgQAAIAABCg");
	this.shape_119.setTransform(469.9,28.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgEgKAAgMQAAgLAEgIQAEgJAHgFQAIgFAJAAQAGAAAFADQAGADADAEIAAgmIANAAIAABpIgMAAIAAgKQgHAMgOAAQgIAAgIgFgAgNgHQgGAHAAANQAAAPAHAIQAGAHAHAAQAIAAAGgHQAGgHAAgOQAAgPgGgHQgGgHgJAAQgHAAgGAHg");
	this.shape_120.setTransform(458.9,28.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AASAnIAAgtQAAgIgBgEQgCgEgEgCQgEgDgGAAQgFAAgHAFQgGAGAAAPIAAAoIgNAAIAAhMIAMAAIAAAMQAJgNANAAQAHAAAHACQAFADAEAEQACAEABAGIABAMIAAAug");
	this.shape_121.setTransform(450.8,29.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgbAiQgHgHAAgJQAAgGACgFQADgEAEgDQAEgBAGgCIALgCQAOgBAIgDIAAgEQAAgIgEgDQgFgEgJAAQgIAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAIAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAAQQAAASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgFADgIAAQgNAAgGgGgAgCAEIgLADQgEABgBADQgCADAAADQAAAGAEADQAEAEAHAAQAGAAAGgEQAGgDADgGQACgEAAgJIAAgEQgHACgNACg");
	this.shape_122.setTransform(442.4,30);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgUAnIAAhMIAMAAIAAAMQAFgIADgDQADgCAEAAQAHAAAHAEIgFAMQgFgDgEAAQgFAAgCADQgDADgBAEQgCAHAAAIIAAAng");
	this.shape_123.setTransform(432.2,29.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_124.setTransform(424.9,30);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AASAnIAAgtQAAgIgBgEQgCgEgEgCQgEgDgGAAQgFAAgHAFQgGAGAAAPIAAAoIgNAAIAAhMIAMAAIAAAMQAJgNANAAQAHAAAHACQAFADAEAEQACAEABAGIABAMIAAAug");
	this.shape_125.setTransform(416.6,29.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AASAnIAAgtQAAgIgCgEQgBgEgEgCQgEgDgGAAQgFAAgHAFQgGAGAAAPIAAAoIgNAAIAAhMIAMAAIAAAMQAIgNAPAAQAHAAAFACQAHADACAEQADAEACAGIAAAMIAAAug");
	this.shape_126.setTransform(408.3,29.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_127.setTransform(402.4,28.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AggA2IAAhqIAMAAIAAALQAEgGAFgDQAGgDAFAAQAKAAAIAFQAHAFAEAJQAEAKAAALQAAAMgEAHQgEAKgJAFQgIAFgIAAQgFAAgGgDQgFgDgDgEIAAAmgAgOgjQgGAIAAAPQAAANAGAHQAGAHAIAAQAHAAAGgHQAHgIAAgNQAAgPgGgIQgHgHgHAAQgHAAgHAIg");
	this.shape_128.setTransform(396.8,31.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_129.setTransform(388.6,30);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AASAnIAAgtQAAgIgBgEQgCgEgEgCQgEgDgGAAQgFAAgHAFQgGAGAAAPIAAAoIgNAAIAAhMIAMAAIAAAMQAJgNANAAQAHAAAHACQAFADAEAEQACAEABAGIABAMIAAAug");
	this.shape_130.setTransform(376.6,29.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgbAiQgHgHAAgJQAAgGACgFQADgEAEgDQAEgBAGgCIALgCQAOgBAIgDIAAgEQAAgIgEgDQgFgEgJAAQgIAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAIAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAAQQAAASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgFADgIAAQgNAAgGgGgAgCAEIgLADQgEABgBADQgCADAAADQAAAGAEADQAEAEAHAAQAGAAAGgEQAGgDADgGQACgEAAgJIAAgEQgHACgNACg");
	this.shape_131.setTransform(368.2,30);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgKA2IAAhCIgLAAIAAgKIALAAIAAgIQAAgIACgDQACgGAEgDQADgDAJAAIAMABIgCAMIgIgBQgGAAgCACQgDADAAAHIAAAHIAQAAIAAAKIgQAAIAABCg");
	this.shape_132.setTransform(362.3,28.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_133.setTransform(351.5,30);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AASA1IAAgxQAAgIgEgEQgFgFgHAAQgEAAgGADQgEADgCAFQgDAEAAAJIAAAqIgNAAIAAhpIANAAIAAAmQAJgKANAAQAIAAAHADQAFAEAEAGQACAGAAAJIAAAxg");
	this.shape_134.setTransform(343.2,28.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AAAAyQgFgCgBgEQgBgEgBgLIAAgrIgJAAIAAgLIAJAAIAAgTIALgIIAAAbIAOAAIAAALIgOAAIAAAsIABAGIADAEIAEAAIAGAAIABALIgKABQgHAAgBgCg");
	this.shape_135.setTransform(337.1,28.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgKA2IAAhCIgLAAIAAgKIALAAIAAgIQAAgIACgDQACgGAEgDQADgDAJAAIAMABIgCAMIgIgBQgGAAgCACQgDADAAAHIAAAHIAQAAIAAAKIgQAAIAABCg");
	this.shape_136.setTransform(329,28.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgGA1IAAhpIANAAIAABpg");
	this.shape_137.setTransform(324.6,28.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgGAHIAAgNIANAAIAAANg");
	this.shape_138.setTransform(316.3,33.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_139.setTransform(309.9,30);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgFAmIgdhMIAOAAIARAuIADAPIAFgPIARguIANAAIgdBMg");
	this.shape_140.setTransform(302.1,30);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_141.setTransform(296.6,28.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AAAAyQgFgCgBgEQgBgEgBgLIAAgrIgJAAIAAgLIAJAAIAAgTIALgIIAAAbIAOAAIAAALIgOAAIAAAsIABAGIADAEIAEAAIAGAAIABALIgJABQgIAAgBgCg");
	this.shape_142.setTransform(293,28.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgbAiQgHgHAAgJQAAgGACgFQADgEAEgDQAEgBAGgCIALgCQAOgBAIgDIAAgEQAAgIgEgDQgFgEgJAAQgIAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAIAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAAQQAAASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgFADgIAAQgNAAgGgGgAgCAEIgLADQgEABgBADQgCADAAADQAAAGAEADQAEAEAHAAQAGAAAGgEQAGgDADgGQACgEAAgJIAAgEQgHACgNACg");
	this.shape_143.setTransform(286.6,30);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_144.setTransform(280.7,28.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgQAlQgGgDgDgEQgDgEgBgGIgBgMIAAgvIAOAAIAAAqIAAAOQACAFAEADQADADAHAAQADAAAGgDQAEgDADgFQACgGAAgKIAAgoIANAAIAABMIgMAAIAAgLQgJANgOAAQgGAAgGgCg");
	this.shape_145.setTransform(274.9,30.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AAnAnIAAgvIgBgLQgCgEgDgCQgDgCgFAAQgIAAgGAGQgFAFAAAMIAAArIgLAAIAAgwQAAgJgDgEQgEgFgHAAQgFAAgFADQgFADgCAGQgCAFAAAKIAAAnIgNAAIAAhMIALAAIAAALQAEgFAGgEQAGgDAIAAQAJAAAFADQAEAEACAGQAJgNAPAAQAMAAAGAGQAGAHAAANIAAAzg");
	this.shape_146.setTransform(264.5,29.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgQAlQgGgDgDgEQgDgEgBgGIgBgMIAAgvIANAAIAAAqIABAOQACAFAEADQAEADAGAAQADAAAFgDQAFgDADgFQACgGAAgKIAAgoIANAAIAABMIgMAAIAAgLQgIANgOAAQgHAAgGgCg");
	this.shape_147.setTransform(254,30.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgXAeQgJgLAAgTQAAgLAEgJQAEgKAJgFQAIgEAIAAQANAAAIAGQAIAHACALIgNACQgCgIgEgDQgFgEgGAAQgIAAgHAHQgGAHAAAOQAAAPAGAHQAGAHAIAAQAIAAAFgFQAFgEABgKIANABQgCAOgIAHQgJAIgNAAQgOAAgKgKg");
	this.shape_148.setTransform(246.4,30);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_149.setTransform(234.4,30);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_150.setTransform(229.1,28.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AggA2IAAhqIAMAAIAAALQAEgGAFgDQAGgDAFAAQAKAAAIAFQAHAFAEAJQAEAKAAALQAAAMgEAHQgEAKgJAFQgIAFgIAAQgFAAgGgDQgFgDgDgEIAAAmgAgOgjQgGAIAAAPQAAANAGAHQAGAHAIAAQAHAAAGgHQAHgIAAgNQAAgPgGgIQgHgHgHAAQgHAAgHAIg");
	this.shape_151.setTransform(219.3,31.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgQAlQgGgDgDgEQgDgEgBgGIgBgMIAAgvIAOAAIAAAqIAAAOQABAFAEADQAFADAFAAQAEAAAGgDQAFgDACgFQACgGAAgKIAAgoIANAAIAABMIgLAAIAAgLQgKANgOAAQgGAAgGgCg");
	this.shape_152.setTransform(210.7,30.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgEgKAAgMQAAgLAEgIQAEgJAHgFQAIgFAJAAQAGAAAFADQAGADADAEIAAgmIANAAIAABpIgMAAIAAgKQgHAMgOAAQgIAAgIgFgAgNgHQgGAHAAANQAAAPAHAIQAGAHAHAAQAIAAAGgHQAGgHAAgOQAAgPgGgHQgGgHgJAAQgHAAgGAHg");
	this.shape_153.setTransform(202.1,28.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_154.setTransform(196.5,28.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_155.setTransform(193.2,28.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgQAlQgGgDgDgEQgDgEgBgGIgBgMIAAgvIAOAAIAAAqIAAAOQABAFAEADQAFADAFAAQAEAAAGgDQAFgDACgFQACgGAAgKIAAgoIANAAIAABMIgLAAIAAgLQgKANgOAAQgGAAgGgCg");
	this.shape_156.setTransform(187.3,30.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgUArIAAAJIgMAAIAAhpIANAAIAAAmQAIgKALAAQAHAAAHADQAGACAEAGQAEAFADAHQACAGAAAIQAAAUgKALQgKALgNAAQgMAAgIgLgAgOgHQgGAHAAANQAAAOADAGQAHAKAKAAQAHAAAGgHQAHgIAAgPQAAgNgGgHQgHgHgHAAQgIAAgGAHg");
	this.shape_157.setTransform(179.2,28.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_158.setTransform(166.4,30);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgXAeQgJgLAAgTQAAgLAEgJQAEgKAJgFQAIgEAIAAQANAAAIAGQAIAHACALIgNACQgCgIgEgDQgFgEgGAAQgIAAgHAHQgGAHAAAOQAAAPAGAHQAGAHAIAAQAIAAAFgFQAFgEABgKIANABQgCAOgIAHQgJAIgNAAQgOAAgKgKg");
	this.shape_159.setTransform(158.8,30);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_160.setTransform(153.1,28.5);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_161.setTransform(143.1,30);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgEgKAAgMQAAgLAEgIQAEgJAHgFQAIgFAJAAQAGAAAFADQAGADADAEIAAgmIANAAIAABpIgMAAIAAgKQgHAMgOAAQgIAAgIgFgAgNgHQgGAHAAANQAAAPAHAIQAGAHAHAAQAIAAAGgHQAGgHAAgOQAAgPgGgHQgGgHgJAAQgHAAgGAHg");
	this.shape_162.setTransform(134.5,28.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgbAiQgHgHAAgJQAAgGACgFQADgEAEgDQAEgBAGgCIALgCQAOgBAIgDIAAgEQAAgIgEgDQgFgEgJAAQgIAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAIAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAAQQAAASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgFADgIAAQgNAAgGgGgAgCAEIgLADQgEABgBADQgCADAAADQAAAGAEADQAEAEAHAAQAGAAAGgEQAGgDADgGQACgEAAgJIAAgEQgHACgNACg");
	this.shape_163.setTransform(126.4,30);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_164.setTransform(120.5,28.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgUArIAAAJIgMAAIAAhpIANAAIAAAmQAIgKALAAQAHAAAHADQAGACAEAGQAEAFADAHQACAGAAAIQAAAUgKALQgKALgNAAQgMAAgIgLgAgOgHQgGAHAAANQAAAOADAGQAHAKAKAAQAHAAAGgHQAHgIAAgPQAAgNgGgHQgHgHgHAAQgIAAgGAHg");
	this.shape_165.setTransform(114.9,28.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AASAnIAAgtQAAgIgCgEQgBgEgEgCQgEgDgFAAQgHAAgGAFQgGAGAAAPIAAAoIgNAAIAAhMIAMAAIAAAMQAJgNANAAQAIAAAGACQAFADAEAEQACAEABAGIABAMIAAAug");
	this.shape_166.setTransform(102.2,29.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgbAiQgHgHAAgJQAAgGACgFQADgEAEgDQAEgBAGgCIALgCQAOgBAIgDIAAgEQAAgIgEgDQgFgEgJAAQgIAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAIAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAAQQAAASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgFADgIAAQgNAAgGgGgAgCAEIgLADQgEABgBADQgCADAAADQAAAGAEADQAEAEAHAAQAGAAAGgEQAGgDADgGQACgEAAgJIAAgEQgHACgNACg");
	this.shape_167.setTransform(93.8,30);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgiA1IAAhpIBGAAIAAANIg5AAIAAAhIAxAAIAAAKIgxAAIAAAxg");
	this.shape_168.setTransform(85.4,28.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgGAmIAAgPIANAAIAAAPgAgGgXIAAgPIANAAIAAAPg");
	this.shape_169.setTransform(74.4,30);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_170.setTransform(68,30);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AAAAyQgEgCgCgEQgCgEABgLIAAgrIgKAAIAAgLIAKAAIAAgTIAKgIIAAAbIAOAAIAAALIgOAAIAAAsIABAGIADAEIAEAAIAGAAIACALIgKABQgIAAgBgCg");
	this.shape_171.setTransform(61.9,28.7);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgZAeQgKgLAAgTQAAgUAMgLQAKgIANAAQAPAAAKAKQALALAAASQAAANgEAJQgFAIgJAFQgIAFgKAAQgPAAgKgKgAgPgVQgHAHABAOQgBAOAHAIQAGAHAJAAQAJAAAHgHQAGgIABgOQgBgOgGgHQgHgHgJAAQgJAAgGAHg");
	this.shape_172.setTransform(55.6,30);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AAbA1Ig2hSIAABSIgOAAIAAhpIAPAAIA2BSIAAhSIAOAAIAABpg");
	this.shape_173.setTransform(45.9,28.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bitmap
	this.instance = new lib.note_regular();
	this.instance.setTransform(-14,12.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,12.8,911.9,58.5);


(lib.point_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.point("synched",0);
	this.instance.setTransform(-62.1,1.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgUBUQAYgrAAgpQAAgPgDgRQgBgNgGgMIgOgaIALAAQAPAWAIAWQAHAUAAATQAAAXgJAWQgKAWgLARg");
	this.shape.setTransform(20.9,25.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_1.setTransform(13.1,25.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_2.setTransform(6.7,23.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQADgKAEgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgGADgJAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_3.setTransform(-0.3,25.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgGAuIgjhbIAQAAIAUA2IAFATIAFgSIAVg3IAQAAIgjBbg");
	this.shape_4.setTransform(-9.8,25.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAGAAQAHAAAJAFIgFAPQgHgEgFAAQgFAAgDADQgEADgBAGQgDAIAAAKIAAAvg");
	this.shape_5.setTransform(-16.6,25.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgNAAQgIAAgIAHg");
	this.shape_6.setTransform(-25.3,25.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_7.setTransform(-32.7,23.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_8.setTransform(-40.3,25.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgGBAIAAhcIANAAIAABcgAgGgsIAAgTIANAAIAAATg");
	this.shape_9.setTransform(-47.3,23.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_10.setTransform(293.7,3.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_11.setTransform(283.7,3.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_12.setTransform(273.7,3.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AASAuIgPg2IgDgQIgRBGIgRAAIgchbIAQAAIAOA0IAHAUIAEgTIAPg1IAOAAIAOA0IAFASIAFgSIAQg0IAQAAIgdBbg");
	this.shape_13.setTransform(262.2,3.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_14.setTransform(253.3,1.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgMgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgLAAQgJAAgIAHg");
	this.shape_15.setTransform(245.7,3.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgYA0IAAALIgPAAIAAh/IAQAAIAAAuQAKgMANAAQAJgBAIAEQAHADAFAHQAFAGADAJQADAHAAAKQAAAYgMANQgMANgQAAQgPAAgJgNgAgRgJQgHAJAAAPQAAASAEAHQAIAMAMAAQAJAAAHgJQAIgJAAgSQAAgQgHgJQgIgJgJAAQgJAAgIAJg");
	this.shape_16.setTransform(235.9,1.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_17.setTransform(221.1,3.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQAMAMgBAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_18.setTransform(211.7,3.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_19.setTransform(204.3,1.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_20.setTransform(196.6,3.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_21.setTransform(186.7,3.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgGBAIAAhbIAOAAIAABbgAgGgtIAAgSIAOAAIAAASg");
	this.shape_22.setTransform(179.7,1.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_23.setTransform(170.2,3.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgcA0QgNgQAAgkQAAgVAFgOQAFgOAJgIQAKgHAMAAQAKAAAHAEQAIAEAGAIQAEAIADALQAEAMAAARQgBAWgEAOQgFAOgJAIQgJAHgOAAQgRAAgLgNgAgQgqQgJAMAAAeQAAAfAIALQAHAKAKAAQAKAAAIgKQAHgLAAgfQAAgegHgLQgIgKgKAAQgKAAgGAJg");
	this.shape_24.setTransform(152.7,1.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgdAzQgMgPAAghQAAgjAOgRQALgPATAAQAPAAAKAIQAJAJACAPIgPABQgCgJgEgEQgHgHgJAAQgFAAgGAEQgIAGgEAKQgEAKgBAUQAGgJAJgEQAHgEAIAAQAPAAAMALQALAKAAASQAAANgGAKQgEAKgKAGQgJAFgMAAQgRAAgNgOgAgQABQgHAIAAANQAAAIAEAHQADAIAGAEQAHADAEAAQAKAAAHgIQAIgIAAgOQAAgNgIgIQgGgFgMAAQgIAAgIAFg");
	this.shape_25.setTransform(142.7,1.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgLAAgPQAAgNAFgKQAEgLAKgHQAJgFALAAQAHgBAHAEQAGAEAFAFIAAguIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgQgJQgGAJgBAQQAAASAIAJQAHAJAJAAQAKAAAHgJQAIgIAAgSQAAgRgIgJQgHgJgLAAQgIAAgIAJg");
	this.shape_26.setTransform(127.4,1.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgIAAgIAHg");
	this.shape_27.setTransform(117.7,3.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_28.setTransform(107.7,3.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_29.setTransform(98.5,3.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAYAuIgTgdIgFgIIgXAlIgTAAIAiguIgfgtIATAAIAOAWIAGAKIAGgKIAQgWIATAAIghAsIAjAvg");
	this.shape_30.setTransform(89.2,3.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgdAkQgMgNgBgXQABgVAMgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_31.setTransform(79.7,3.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_32.setTransform(67.3,1.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_33.setTransform(59.7,3.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_34.setTransform(49.7,3.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_35.setTransform(34.7,3.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgLAAgPQAAgNAFgKQAEgLAKgHQAJgFALAAQAHgBAGAEQAHAEAEAFIAAguIAQAAIAAB/IgPAAIAAgMQgIAOgRAAQgKAAgJgGgAgPgJQgIAJABAQQAAASAHAJQAHAJAJAAQAKAAAIgJQAGgIAAgSQAAgRgGgJQgIgJgLAAQgJAAgGAJg");
	this.shape_36.setTransform(24.4,1.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAJBUQgLgRgJgWQgJgWAAgXQAAgTAHgTQAIgXAOgWIAMAAIgOAaQgGAMgBANQgEARAAAPQAAApAZArg");
	this.shape_37.setTransform(16.9,3.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_38.setTransform(6.3,1.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAHgEAEgHQACgFAAgLIAAgFQgIADgPACg");
	this.shape_39.setTransform(-1.3,3.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_40.setTransform(-11.3,3.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgnBBIAAh/IAOAAIAAAMQAGgHAGgEQAGgDAHAAQAMAAAKAGQAIAGAFALQAFAMAAANQAAAOgFAKQgFALgKAGQgKAGgKAAQgHAAgGgDQgGgDgFgFIAAAtgAgRgqQgIAJAAASQAAAQAHAJQAIAIAKAAQAIAAAIgJQAIgIAAgRQAAgSgIgJQgHgJgJAAQgKAAgHAKg");
	this.shape_41.setTransform(-21,4.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQAMAMgBAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_42.setTransform(-31.3,3.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAjBAIgRgbIgMgSIgHgIIgIgEIgJAAIgUAAIAAA5IgRAAIAAh/IA3AAQARAAAJADQAJAEAGAJQAFAJAAALQAAANgJAJQgJAIgSADQAGADAEADQAHAGAHALIAWAjgAgmgGIAlAAQAJAAAHgDQAGgCAEgFQADgGAAgFQAAgKgGgGQgHgFgOAAIgnAAg");
	this.shape_43.setTransform(-42.2,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.6,-10.4,370.5,46.2);


(lib.point_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.point("synched",0);
	this.instance.setTransform(-62.1,1.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgMgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape.setTransform(125.7,3.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_1.setTransform(118.7,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgLAAgPQAAgNAFgKQAFgLAJgHQAJgFALAAQAHgBAHAEQAGAEAEAFIAAguIAQAAIAAB/IgPAAIAAgMQgJAOgQAAQgKAAgJgGgAgQgJQgGAJAAAQQgBASAIAJQAHAJAJAAQAKAAAHgJQAIgIgBgSQABgRgIgJQgHgJgLAAQgIAAgIAJg");
	this.shape_2.setTransform(111.4,1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgHBAIAAhbIAOAAIAABbgAgHgtIAAgSIAOAAIAAASg");
	this.shape_3.setTransform(104.7,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_4.setTransform(92.7,3.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_5.setTransform(85.3,1.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_6.setTransform(75.3,1.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_7.setTransform(68.1,3.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_8.setTransform(58.6,3.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgFgEgGAAQgGAAgCADQgEADgCAGQgCAIAAAKIAAAvg");
	this.shape_9.setTransform(51.4,3.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAWBAIAAg7QAAgKgGgFQgEgGgKAAQgFAAgHAEQgFADgDAHQgDAEAAALIAAAzIgQAAIAAh/IAQAAIAAAuQALgMAPAAQAKAAAIADQAIAEADAIQAEAHAAAMIAAA7g");
	this.shape_10.setTransform(42.7,1.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_11.setTransform(35.3,1.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQAMAMgBAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_12.setTransform(22.7,3.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_13.setTransform(13.1,3.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQAAgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAEAEACAGIABAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgQACg");
	this.shape_14.setTransform(3.7,3.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgeAkQgLgNAAgXQAAgVALgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgLAAQgJAAgIAHg");
	this.shape_15.setTransform(-6.3,3.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAGAAQAHAAAJAFIgGAPQgFgEgGAAQgFAAgDADQgEADgCAGQgCAIAAAKIAAAvg");
	this.shape_16.setTransform(-13.6,3.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_17.setTransform(-21.5,3.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQAMAMgBAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_18.setTransform(-31.3,3.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ag0BAIAAh/IAtAAQANAAAHACQAMACAHAHQALAJAFAOQAFAMAAARQAAAOgEALQgDALgGAHQgFAIgGAEQgHAEgJADQgJACgJAAgAgjAxIAcAAQAKAAAIgDQAHgCAEgEQAGgGAEgKQADgLAAgNQAAgUgHgKQgGgLgKgEQgHgCgNAAIgbAAg");
	this.shape_19.setTransform(-42.6,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.6,-10.4,197.6,24.1);


(lib.point_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.point("synched",0);
	this.instance.setTransform(-62.1,1.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAHBAIAAhjQgFAGgHAFIgRAJIAAgQQANgGAJgJQAJgJAEgIIAKAAIAAB/g");
	this.shape.setTransform(107,23.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAhBAIhChjIAABjIgQAAIAAh/IARAAIBCBkIAAhkIAQAAIAAB/g");
	this.shape_1.setTransform(96.1,23.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAVA7QgHgJAAgRQAAgOAGgKQAHgJAOAAQAMAAAIAIQAIAJAAAQQAAARgIAJQgIAIgMAAQgMAAgIgIgAAfAPQgEAFAAAOQAAAMAEAGQAEAFAGAAQAGAAAEgFQAEgGAAgNQAAgNgEgFQgEgFgGAAQgGAAgEAFgAgoBDIBEiFIANAAIhECFgAg8gHQgIgJAAgRQAAgOAHgKQAHgJANAAQAMAAAIAIQAIAJAAARQAAAQgIAJQgIAHgMAAQgLAAgIgHgAgygyQgEAFAAANQAAANAEAFQAEAFAGAAQAGAAAEgFQAEgFAAgOQAAgMgEgFQgEgFgGAAQgGAAgEAFg");
	this.shape_2.setTransform(76.7,23.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcA0QgMgQAAgkQgBgVAFgOQAFgOAJgIQAKgHAMAAQAKAAAHAEQAIAEAGAIQAEAIAEALQADAMAAARQgBAWgEAOQgFAOgJAIQgJAHgOAAQgRAAgLgNgAgQgqQgJAMAAAeQAAAfAIALQAHAKAKAAQAKAAAIgKQAHgLAAgfQAAgegHgLQgIgKgKAAQgKAAgGAJg");
	this.shape_3.setTransform(63.7,23.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgdA3QgLgLgBgQIAQgBQACAMAHAGQAHAGAJAAQAKAAAHgIQAIgJAAgPQAAgNgHgGQgIgIgKABQgIAAgGADQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAiQALgHALgBQARAAAMANQALAJAAASQAAASgKAMQgMAQgUAAQgRAAgMgJg");
	this.shape_4.setTransform(53.7,23.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgKQAAgIACgFQACgHAGgDQAEgEAKAAIAPABIgDAOIgJAAQgHAAgDACQgDADAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_5.setTransform(41.6,23.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_6.setTransform(33.7,25.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_7.setTransform(16.2,25.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_8.setTransform(3.6,25.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_9.setTransform(-8.8,25.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgGBAIAAhcIAOAAIAABcgAgGgsIAAgTIAOAAIAAATg");
	this.shape_10.setTransform(-18.3,23.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_11.setTransform(-25.3,25.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgHBAIAAhcIAOAAIAABcgAgHgsIAAgTIAOAAIAAATg");
	this.shape_12.setTransform(-32.3,23.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_13.setTransform(-41.8,25.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQAMAAAHADQAHACADAFQAEAEACAGIABAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgPACg");
	this.shape_14.setTransform(227.7,3.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_15.setTransform(212.7,3.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_16.setTransform(205.3,1.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_17.setTransform(192.7,3.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_18.setTransform(182.7,3.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgHBAIAAhbIAOAAIAABbgAgHgtIAAgSIAOAAIAAASg");
	this.shape_19.setTransform(175.7,1.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgbA7QgKgIABgPIAPACQABAHAEAEQAGAEAKAAQAJAAAHgEQAFgFADgIQABgEAAgQQgLAMgOAAQgSAAgLgOQgLgOABgRQgBgNAFgMQAFgLAJgGQAKgGALAAQAPAAALANIAAgLIAPAAIAABPQAAAVgFAKQgFAJgJAFQgKAFgMAAQgQAAgLgHgAgQgrQgIAIAAARQAAASAIAHQAHAIAJAAQALAAAHgIQAIgHAAgSQAAgRgIgIQgIgJgKAAQgJAAgHAJg");
	this.shape_20.setTransform(168.4,5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_21.setTransform(158.7,3.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQAMAMgBAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_22.setTransform(148.7,3.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAVBAIAAg7QABgKgGgFQgEgGgKAAQgFAAgHAEQgFADgDAHQgDAEAAALIAAAzIgQAAIAAh/IAQAAIAAAuQALgMAPAAQAKAAAIADQAIAEADAIQADAHABAMIAAA7g");
	this.shape_23.setTransform(133.7,1.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_24.setTransform(124.5,3.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHADgGQADgGAGgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACADAFQAFAEAAAGIABAPIAAATQAAAWABAGQABAGAEAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgDAFQgJACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgQACg");
	this.shape_25.setTransform(114.7,3.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgVAMgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAIAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_26.setTransform(104.7,3.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_27.setTransform(89.7,3.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_28.setTransform(79.7,3.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_29.setTransform(67.3,1.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_30.setTransform(60.1,3.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_31.setTransform(50.6,3.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgGgEgFAAQgGAAgCADQgDADgDAGQgCAIAAAKIAAAvg");
	this.shape_32.setTransform(43.4,3.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAVBAIAAg7QABgKgGgFQgEgGgKAAQgFAAgHAEQgFADgDAHQgDAEAAALIAAAzIgQAAIAAh/IAQAAIAAAuQALgMAPAAQAKAAAIADQAIAEADAIQADAHABAMIAAA7g");
	this.shape_33.setTransform(34.7,1.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_34.setTransform(27.3,1.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgVAMgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAIAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_35.setTransform(14.7,3.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_36.setTransform(5.1,3.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAJgDIAAgEQAAgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAFAEABAGIABAPIAAATQAAAWAAAGQABAGADAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgDAEQgBADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQADgFgBgLIAAgFQgIADgQACg");
	this.shape_37.setTransform(-4.3,3.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_38.setTransform(-14.3,3.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgFgEgGAAQgGAAgCADQgDADgDAGQgCAIAAAKIAAAvg");
	this.shape_39.setTransform(-21.6,3.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_40.setTransform(-29.5,3.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_41.setTransform(-39.3,3.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_42.setTransform(-46.7,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.6,-10.4,304.6,46.2);


// stage content:
(lib.dif04ep10 = function(mode,startPosition,loop) {
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
	this.frame_490 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(490).call(this.frame_490).wait(1));

	// prot
	this.prot = new lib.prot();
	this.prot.setTransform(500,275,1,1,0,0,0,500,275);

	this.timeline.addTween(cjs.Tween.get(this.prot).wait(491));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_479 = new cjs.Graphics().p("EhOGAq9MAAAhV5MCcNAAAMAAABV5g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(479).to({graphics:mask_graphics_479,x:500,y:275}).wait(12));

	// note
	this.instance = new lib.notebox2("synched",0);
	this.instance.setTransform(522.1,695.8,1,1,0,0,0,471.9,158.2);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(479).to({_off:false},0).to({y:638.4},5,cjs.Ease.get(1)).wait(7));

	// t5
	this.instance_1 = new lib.point_5("synched",0);
	this.instance_1.setTransform(147,327.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(435).to({_off:false},0).to({alpha:1},5).wait(51));

	// t4
	this.instance_2 = new lib.point_4("synched",0);
	this.instance_2.setTransform(147,302.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(407).to({_off:false},0).to({alpha:1},5).wait(79));

	// t3
	this.instance_3 = new lib.point_3("synched",0);
	this.instance_3.setTransform(147,255);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(287).to({_off:false},0).to({alpha:1},5).wait(199));

	// t2
	this.instance_4 = new lib.point_2("synched",0);
	this.instance_4.setTransform(145.4,209.5,1,1,0,0,0,102.1,12.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(198).to({_off:false},0).to({alpha:1},5).wait(288));

	// t1
	this.instance_5 = new lib.t1("synched",0);
	this.instance_5.setTransform(177.5,134.3,1,1,0,0,0,134.2,12.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(52).to({_off:false},0).to({alpha:1},5).wait(434));

	// t0
	this.instance_6 = new lib.t0("synched",0);
	this.instance_6.setTransform(65.4,109.2,1,1,0,0,0,22.1,12.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3).to({_off:false},0).to({alpha:1},5).wait(483));

	// img
	this.instance_7 = new lib.plane("synched",0);
	this.instance_7.setTransform(726.5,259.5,1,1,0,0,0,244.5,209);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(491));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(500,275,1000,550);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;