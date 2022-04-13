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
		{src:"images/fbw01p01_controlwheel.png", id:"fbw01p01_controlwheel"},
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



(lib.fbw01p01_controlwheel = function() {
	this.initialize(img.fbw01p01_controlwheel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,986,680);


(lib.texture = function() {
	this.initialize(img.texture);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIAuIAAgSIAQAAIAAASgAgIgbIAAgSIAQAAIAAASg");
	this.shape.setTransform(74.6,57.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgaA7QgLgIABgPIAPACQABAHAEAEQAGAEAKAAQAJAAAHgEQAFgFADgIQABgEAAgQQgLAMgOAAQgSAAgLgOQgLgOABgRQgBgNAFgMQAFgLAJgGQAKgGALAAQAPAAALANIAAgLIAPAAIAABPQAAAVgFAKQgFAJgJAFQgKAFgMAAQgQAAgKgHgAgQgrQgIAIAAARQAAASAIAHQAHAIAJAAQALAAAHgIQAIgHAAgSQAAgRgIgIQgIgJgKAAQgJAAgHAJg");
	this.shape_1.setTransform(66.7,59.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_2.setTransform(57,57.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGBAIAAhbIANAAIAABbgAgGgsIAAgTIANAAIAAATg");
	this.shape_3.setTransform(50,56.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AASAuIgPg2IgDgQIgSBGIgQAAIgdhbIARAAIAPA0IAGAUIAEgTIAPg1IAOAAIAOA0IAFASIAFgSIAQg0IAQAAIgeBbg");
	this.shape_4.setTransform(41.5,57.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_5.setTransform(30,57.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_6.setTransform(23,56.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgGBAIAAh/IANAAIAAB/g");
	this.shape_7.setTransform(19,56.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_8.setTransform(12,57.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgMIAOAAIAAgLQAAgIACgFQACgGAGgEQAEgEAKAAIAPACIgDANIgJgBQgHAAgDADQgDAEAAAIIAAAJIASAAIAAAMIgSAAIAABPg");
	this.shape_9.setTransform(4.9,56);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_10.setTransform(321,35.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAVBAIAAg7QABgKgGgFQgEgGgKAAQgFAAgHAEQgFADgDAHQgDAEAAALIAAAzIgQAAIAAh/IAQAAIAAAuQALgNAPABQAKAAAIADQAIAFADAHQADAHABAMIAAA7g");
	this.shape_11.setTransform(311,34);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgNIAMAAIAAgXIANgJIAAAgIAQAAIAAANIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_12.setTransform(303.6,34.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_13.setTransform(291.4,35.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgVAMgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAIAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_14.setTransform(282,35.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgMAAgOQAAgNAFgKQAFgLAJgHQAJgFALAAQAHgBAHAEQAGAEAEAFIAAguIAQAAIAAB/IgPAAIAAgMQgIAOgRAAQgKAAgJgGgAgQgJQgGAJAAAQQgBATAIAIQAIAJAIAAQAKAAAHgJQAIgIgBgSQABgRgIgJQgHgIgLgBQgIABgIAIg");
	this.shape_15.setTransform(271.7,34.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_16.setTransform(261.9,35.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgGBAIAAh/IAOAAIAAB/g");
	this.shape_17.setTransform(255,34);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_18.setTransform(248.8,35.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_19.setTransform(239,35.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgGBAIAAhcIAOAAIAABcgAgGgtIAAgSIAOAAIAAASg");
	this.shape_20.setTransform(232,34);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgMAAgOQAAgNAFgKQAEgLAKgHQAJgFALAAQAHgBAGAEQAHAEAEAFIAAguIAQAAIAAB/IgPAAIAAgMQgIAOgRAAQgKAAgJgGgAgPgJQgIAJABAQQAAATAHAIQAHAJAJAAQAKAAAIgJQAGgIAAgSQAAgRgGgJQgIgIgLgBQgJABgGAIg");
	this.shape_21.setTransform(219.7,34.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_22.setTransform(210,35.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAJgDIAAgEQAAgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAFAEABAGIABAPIAAATQAAAWAAAGQABAGADAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQADgFgBgLIAAgFQgIADgQACg");
	this.shape_23.setTransform(200,35.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgIAOQAFgCADgEQAAgEAAgGIgHAAIAAgSIAQAAIAAASQAAAIgEAGQgDAGgGADg");
	this.shape_24.setTransform(187.5,40.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAlBAIggguIgFgJIgFAKIggAtIgVAAIAyhBIgsg+IAUAAIAYAhIAIAQIAKgOIAagjIATAAIgtA9IAwBCg");
	this.shape_25.setTransform(179,34);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAoBAIgPgnIg0AAIgNAnIgTAAIAxh/IARAAIA1B/gAgHgZIgPAkIAqAAIgOghIgHgbQgCAMgEAMg");
	this.shape_26.setTransform(167,34);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAtBAIAAhqIgmBqIgNAAIglhsIAABsIgRAAIAAh/IAaAAIAeBZIAEATIAHgUIAfhYIAXAAIAAB/g");
	this.shape_27.setTransform(153.5,34);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_28.setTransform(136,35.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgFQgGgGgJAAQgFAAgGAEQgGADgDAHQgDAEAAALIAAAzIgPAAIAAh/IAPAAIAAAuQAMgNAOABQALAAAHADQAIAFADAHQAEAHgBAMIAAA7g");
	this.shape_29.setTransform(126,34);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgNIAMAAIAAgXIANgJIAAAgIAQAAIAAANIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_30.setTransform(118.6,34.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_31.setTransform(106,35.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_32.setTransform(96,35.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgMAAgOQAAgNAFgKQAFgLAJgHQAJgFALAAQAHgBAHAEQAGAEAFAFIAAguIAPAAIAAB/IgPAAIAAgMQgJAOgQAAQgKAAgJgGgAgQgJQgGAJgBAQQAAATAIAIQAHAJAJAAQAKAAAHgJQAIgIgBgSQABgRgIgJQgHgIgLgBQgIABgIAIg");
	this.shape_33.setTransform(80.7,34.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgNAAQgIAAgIAHg");
	this.shape_34.setTransform(71,35.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_35.setTransform(61.8,35.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_36.setTransform(51.9,35.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgMAAgOQAAgNAFgKQAFgLAJgHQAJgFALAAQAHgBAGAEQAHAEAFAFIAAguIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgPgJQgIAJAAAQQABATAHAIQAIAJAIAAQAKAAAIgJQAGgIABgSQgBgRgGgJQgIgIgLgBQgIABgHAIg");
	this.shape_37.setTransform(41.7,34.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_38.setTransform(32,35.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAIAAAJAFIgFAPQgHgEgFAAQgGAAgCADQgDADgCAGQgDAIAAAKIAAAvg");
	this.shape_39.setTransform(24.7,35.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgNIAMAAIAAgXIANgJIAAAgIAQAAIAAANIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_40.setTransform(18.6,34.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_41.setTransform(11,35.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgGBAIAAhcIANAAIAABcgAgGgtIAAgSIANAAIAAASg");
	this.shape_42.setTransform(4,34);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_43.setTransform(271.4,13.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgGBAIAAhcIANAAIAABcgAgGgsIAAgTIANAAIAAATg");
	this.shape_44.setTransform(265,11.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_45.setTransform(250.5,13.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgLAAQgKAAgHAHg");
	this.shape_46.setTransform(238,13.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_47.setTransform(230.6,12.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_48.setTransform(223.4,13.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AghA/IgCgPIAJACQAFAAAEgCQADgCACgDIAFgMIABgEIgjhbIARAAIATA2IAFAUIAGgUIAUg2IAQAAIgjBdIgHAVQgEAIgGAEQgFADgIAAQgEAAgGgCg");
	this.shape_49.setTransform(214.6,15.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_50.setTransform(205.4,13.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgGgEgFAAQgGAAgCADQgDADgDAGQgCAIAAAKIAAAvg");
	this.shape_51.setTransform(193.7,13.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgdAkQgMgNgBgXQABgVAMgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgLgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_52.setTransform(185,13.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_53.setTransform(178,11.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgHBAIAAhcIAOAAIAABcgAgHgsIAAgTIAOAAIAAATg");
	this.shape_54.setTransform(174,11.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_55.setTransform(167,13.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgnBBIAAh/IAOAAIAAAMQAGgHAGgEQAGgDAHAAQAMAAAKAGQAIAGAFALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgGAAgHgDQgGgDgFgFIAAAtgAgRgqQgIAJAAASQAAAQAHAJQAIAIAKAAQAJAAAHgJQAIgIAAgRQAAgSgIgJQgHgJgJAAQgKAAgHAKg");
	this.shape_56.setTransform(157.3,15.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_57.setTransform(147.4,13.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQALAMABAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgIAAgIAHg");
	this.shape_58.setTransform(133,13.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAGAAQAHAAAJAFIgFAPQgGgEgGAAQgFAAgDADQgEADgBAGQgDAIAAAKIAAAvg");
	this.shape_59.setTransform(125.7,13.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgHBAIAAhcIAOAAIAABcgAgHgsIAAgTIAOAAIAAATg");
	this.shape_60.setTransform(120,11.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AASAuIgPg2IgDgQIgSBGIgQAAIgdhbIARAAIAPA0IAFAUIAFgTIAPg1IAOAAIAOA0IAFASIAFgSIAQg0IAPAAIgdBbg");
	this.shape_61.setTransform(111.5,13.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgXAIIAAgOIAvAAIAAAOg");
	this.shape_62.setTransform(102,13.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AghA/IgCgPIAJACQAFAAAEgCQADgCACgDIAFgMIABgEIgjhbIARAAIATA2IAFAUIAGgUIAUg2IAQAAIgjBdIgHAVQgEAIgGAEQgFADgIAAQgEAAgGgCg");
	this.shape_63.setTransform(94.6,15.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgYA0IAAALIgPAAIAAh/IAQAAIAAAuQAKgNANAAQAJABAIADQAHAEAFAGQAFAGADAJQADAHAAAKQAAAYgMANQgMANgQAAQgPAAgJgNgAgRgIQgHAIAAAQQAAAQAEAIQAIAMAMAAQAJAAAHgJQAIgJAAgSQAAgQgHgIQgIgJgJAAQgJAAgIAJg");
	this.shape_64.setTransform(85.2,12);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgXAIIAAgOIAvAAIAAAOg");
	this.shape_65.setTransform(77,13.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AghA/IgCgPIAJACQAFAAAEgCQADgCACgDIAFgMIABgEIgjhbIARAAIATA2IAFAUIAGgUIAUg2IAQAAIgjBdIgHAVQgEAIgGAEQgFADgIAAQgEAAgGgCg");
	this.shape_66.setTransform(69.6,15.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgGBAIAAh/IANAAIAAB/g");
	this.shape_67.setTransform(63,11.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgKQAAgIACgFQACgHAGgDQAEgEAKAAIAPABIgDAOIgJAAQgHAAgDACQgDADAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_68.setTransform(58.9,11.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AASAuIgPg2IgDgQIgRBGIgRAAIgchbIAQAAIAOA0IAHAUIAEgTIAPg1IAOAAIAOA0IAFASIAFgSIAQg0IAPAAIgcBbg");
	this.shape_69.setTransform(44.5,13.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_70.setTransform(33,13.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_71.setTransform(23,13.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAoBAIgOgnIg0AAIgPAnIgSAAIAyh/IAQAAIA1B/gAgHgYIgPAjIAqAAIgNgiIgHgbQgDANgEANg");
	this.shape_72.setTransform(8,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,328.6,68.3);


(lib.prot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.texture();
	this.instance.setTransform(0,0,100,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1000,550);


(lib.point = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQARQgIgHAAgKQAAgJAIgHQAHgIAJAAQAKAAAHAIQAIAHAAAJQAAAKgIAHQgHAIgKAAQgJAAgHgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,5,5);


(lib.controlwheel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.fbw01p01_controlwheel();
	this.instance.setTransform(0,0,0.555,0.555);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,547.6,377.6);


(lib.B737MAX8LeftSide34Under = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 737
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3E7EA").s().p("AAtB5QADgIAHgCQABgDAEAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAABABAAQABgDADABIABAAQAAAAAAgBQAAAAAAAAQAAAAABAAQAAABABAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAABAAIABAAQAAAAABgBQAAAAABAAQAAAAABAAQABABABAAIAAAAIADABQAJAAAJAEIAPAEQAGABADgEIg+g5IARgSIBZBRQgKALgIAHQgKAFgIABIgPACQgJAAgEAEQgHABgBAEIgGAGgAgBBOIg/g4QgKgKAAgJQgDgKAFgDIADgFIApAiIgDADQgDABACAFIAEAGIAIAIQAFACAFgCIAFgGIABgFQgBgDgEgDIgXgVIAKgKIAWASQAHAHAFgEIAEgEIABgFQAAgEgDgCIgJgHQgFgFgCAFIgCADIgoglIAIgJQAGgLASAQIA+A4QAHAHADALQABALgDADIgLAMQgHAHgIgGIABAMIgCAHIgJAIQgEADgEAAQgHAAgIgIgAilhDQAFgMAKgCQAJgFAMADQAKABAJAEIAQAFQAGAAADgDIhDg8IAQgVIBhBXIgTATQgJAGgIABIgRABQgIABgGADQgGACgBAEQgEACgBAFg");
	this.shape.setTransform(602.7,372.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// details
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#999999").ss(0.8).p("AABAAIgBAA");
	this.shape_1.setTransform(622.4,414.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#E5E5E5","#D1D2D3","#D0D0D3","#848687","#555656"],[0.094,0.231,0.435,0.784,1],2.5,-33.2,0,41.6,-13.3,111.7).s().p("AgcE/IgGgDIgFgDIgEgBIAAAAIABgBQAAgBAAAAQABAAAAAAQABAAAAAAQAAAAABABQAQAAARgCQAXgFAYgGQBkgkBXhPIALgOQAHgHAHgLQAKgKAJgNQBdiBgbiiQgEgWgKgPQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBIAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAIACgBQABAAAAABQABAAAAAAQABAAAAABQAAAAABAAIAEAJQAGAPADASQAcCjhfCFIABAAQgIAMgMALIgOATIAAABIgOAOIgBAAQhPBMhoAmIgCAAQgZAIgZAEIgWADIgBAAgAlXCHIgFgEIgCgBIAAgDIABgDIACgBQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAmAfAugIQCSgZBfh+QBmiKgeivIAKAJQAZCthlCHQhhCCiUAZQgKACgKAAQgjAAgfgWg");
	this.shape_2.setTransform(236.9,334.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#E5E5E5","#D1D2D3","#D0D0D3","#848687","#555656"],[0.094,0.231,0.435,0.784,1],8.9,-31.2,0,47.7,-2.4,123.1).s().p("AhaF/IgHgEIgEgDIgFgCIACgCQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAQAFAUAAQAbAAAcgEQBxgTBshHIAQgLIATgRIAYgXQB+h9AAiyQAAgYgIgUQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABQAHAVAAAZQAAC2iAB/IABAAQgLAMgOALIgUASIAAAAIgSANIgBABQhjBDh4AWIgBAAQgcADgeAAQgOAAgMgCgAmTB4IgCgDQABgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBIADgBQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABQAkAoAzAAQCkAAB+h5QCJiBgBjGQABgygcghIgBgDQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAIADgBQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAeAkgBA1QAADKiLCDQiCB8imAAQg2AAgogrg");
	this.shape_3.setTransform(463.6,220.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#1E1E1E","#6D6D6D"],[0,1],148,-59.7,144.3,-67.8).s().p("AgCAAIADAAIACABg");
	this.shape_4.setTransform(580.6,434.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#9F9F9F","#8E8E8E","#696969"],[0.149,0.533,1],4.7,-0.1,-2.1,-0.1).s().p("AABAoIgBgBIgCgCIgKgIIAAglIAAgNIgDgCQgEgFgBgFQgDgHAJgCQAEgBAIABQARABAFAIQABACAAADQABALgLACIgFAAIAAA6g");
	this.shape_5.setTransform(232.7,214.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#9F9F9F","#8E8E8E","#696969"],[0.149,0.533,1],4.7,-0.1,-2.1,-0.1).s().p("AAAAmIgCgCIgKgHIAAglIAAgNIgDgCQgEgFgBgFQgDgHAJgCQAEgBAIABQARABAFAIQABACAAADQABALgLACIgFAAIAAA6g");
	this.shape_6.setTransform(225,208.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#163B53","#296995","#1E4A6A","#1E547C"],[0,0.627,0.867,1],-0.1,0,0.2,0).s().p("AABgCIgBAEIAAABIABgFg");
	this.shape_7.setTransform(289.8,287.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#0E111C","#1C232F"],[0.024,1],5,9.8,-4.9,-9.7).s().p("ABFBlIgZgcQgPgSgVgeQgUgcgKgLIgigqQgPgTgSgUQAAgDACgCICxDIIgRABIgEAAg");
	this.shape_8.setTransform(290.6,272.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#9F9F9F","#8E8E8E","#696969"],[0.149,0.533,1],4.1,0.3,-2.9,0.3).s().p("AgDAsQgFgFgBgFIgKgnQgKgpgFgDQAOgJAVAQIAhAfIgLAIIAAAvQAAAJgGAAQgPAAgFgJg");
	this.shape_9.setTransform(134.8,143.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#9F9F9F","#8E8E8E","#696969"],[0.149,0.533,1],6,-2.5,-3.4,1).s().p("AAbBZQgLgGgVguQgVgqgTgwIgJgYQgCgFAEgCQADgCAOgCQANgBARAEQAMAEAGAFQAOAJAMAKQAYAVgLAIIgPANIAAABIAABSQAAAVgHAAIgDAAg");
	this.shape_10.setTransform(202.2,194.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#ADADAD","#E3E3E3","#989898"],[0,0.471,1],5.4,-3.2,-3.2,6.4).s().p("AAaB+IgBAAIgBgBIgvgtIgBAAQgdgggEgWQgDgHAEgvQACgXgCgmQgCgegFgIIgBgEIAAgBIANANQADAMACAVQACAkgCAaQgDArABAIIAAABQAFASAZAbIAvAtQAJAFAGgBQAHgCACgKQACgJAAgwIgBgwQgBgSgIgMIAAgBIAQARIADARQABAQAAAhQAAA0gCAGQgDAPgKACIgFABQgIAAgLgHg");
	this.shape_11.setTransform(585.8,374.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#9F9F9F","#8E8E8E","#696969"],[0.149,0.533,1],5.5,-1.1,-0.7,0.7).s().p("AAGA5IgQg+QgMgngIgMQgIgLAHgCQAGgCAeAVIAWAPQACABADAvIADA2QAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQgGAAgUgNg");
	this.shape_12.setTransform(446.1,367.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#414141","#AAAAAA","#414141"],[0,0.376,1],2,0,-1.9,0).s().p("AAKAGQgEgDgFAAIgBAAQgKAAgCAFIgBABIgFgJQAEgGAMgBIACAAQAPgBAEAJIgGAIg");
	this.shape_13.setTransform(388.6,324.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#9F9F9F","#8E8E8E","#696969"],[0.149,0.533,1],3,-0.7,-1.7,0.8).s().p("AAFAeQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIgKgbQgNgcgDgCQgDgCAOACQAMACADADIASALQABABACAFQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAAAIgHAEIAAAgQgJAAgDgCg");
	this.shape_14.setTransform(365.6,309.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#9F9F9F","#8E8E8E","#696969"],[0.149,0.533,1],5.8,-3.3,-1.9,0.5).s().p("AAFAjIgFgMQgMgVgQggIgNgcQgDgGAgAKIAJADQAZAJAOANQADACACAHQACAHgCABIgMAIIAAA5QAAAIgDAAQgGAAgPgag");
	this.shape_15.setTransform(336.5,272.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#0F1420","#171F32"],[0,1],4.3,11.4,-7.5,-15.2).s().p("AA4BQQgUgRgegfQgcgfgPgKIg1grIg3gqQABgFAFgDIBTAsQAlAWAYANQAjAQAgAJIAVAHQAPAFALAGIAbARIg5BCg");
	this.shape_16.setTransform(335,249.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(51,51,51,0.498)").s().p("AGHS2IAMgGIgIgIIAYgLIAIAIIGLi4IAGABIACAEImUC9IgIgIIgJAEIAJAIIgNAFIAVAVIgGAGgEgpiAOwIgBgBIAAgDIACgBIGKj3IACAAIACABIAhAeIABABIAlAfIgHAEIghgcIjyCSIAfAdIgGAEIgigfIgBgCIAAgCIACgCID0iTIgcgaImDDzIA3A5IgHAEgATeMmIgBgEITVkhIgDgJIAZgHIAGAKIAWgFIAfAlIgGAFIgdghIgVAFIgHgJIgKACIADAKIzeEjgEgi5AKxIgBgCIAAgCIACgCIB3hAIAGAFIh1A/IA8A2IgHAEgEgh+AK4IgCgCIABgDIACgBIBaguIAFAFIhXAtIAjAeIgHADgA/eJhIDkh0IAGAFIjlB1IgFgGgA/2JDIDZh1IAFAEIAAABIjaB2IgEgGgA6tHGIBpg1IABgBIACABIA8ArIgIAEIg2goIhmA0IgEgGgA7JGgICWhRIABgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAAAAAIABABIB9gpIAGAGIh7AoIBaBKIgHAEIhchLIiUBQIgFgGgA07EwID4hXIAJAFIj8BZIgFgHgA1XEIIDkhJIAFADIAEACIjoBKIgFgGgAi2iCID2iSIADACIACAEIjzCRIgIgFgAjjibIEDifIAEAGIkACeIgHgFgABxlrIEsi3IAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAIABAAICUgvIAGAGIiWAvIBOB8IgGADIhPh8IkqC1IgEgGgAI9oMIgBgCIABgCIACgBIAigLIAFAEIABACIghALIAcBIIgHADgAK4o5II5jAIABAAIAFAGIo8DBIgDgHgAKYpxII4iyIAGAGIo6CzIgEgHgAVIsVIAAgBIFEhuIADAAIABACIAcAzIgHACIgZgvIlBBtIgDgGgAUvtBIGIh7IADAAIABACIAtBWIgHACIgrhSImEB6IgDgHgAbyujIgBgBIgdgvIgBgCIABgCIACgBINQj6IACAAIADACIA5BgIgHACIg4hcItID3IAZApIIIiYIACAAIADACIAcAwIgIACIgagsIoDCXIAbAvIgIACg");
	this.shape_17.setTransform(498,333.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(16,21,35,0.498)").s().p("ABbDyQjii6ifiTIgEgEIAFgCQAggUAlghQAnglAtg1IACgCIG1FOIgEAEQg5Ayg+AsIgBAAIAAAAQgnAcgpAYIgCABgAkdhdQCdCRDdC2QAmgWAkgZImElJQghAegfATgAjXiUIGEFKQA7gpA2gwImnlEQgpAxglAig");
	this.shape_18.setTransform(85.5,100.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#666D70").s().p("AAtAeIkghnIABgCIAFAAIBbAeIAagkIgfgEIAQgCIAZACID8BYQBKAbALAdIARAcgAA0AYICxA0IgMgSQgPgVgRgHIh+g1gAiFgmICwA7IAGguIiYg4IgeArg");
	this.shape_19.setTransform(99.1,16.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3A2419").s().p("AgGAHIgCgCQgEgDAAgFQACgFAKAAIABABQAGAAAEACIACADIAAABIAAABIAAAAQgBACgDADQgEAEgFAAQgDAAgDgCg");
	this.shape_20.setTransform(388.5,325.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D5DADB").s().p("EAh8AaJIAAgBIgMgMIAAAAQgBgJAHgBIALAMQACAJgGACgEghrgZsIAAgBIgUgMIAAAAQgEgLAIgEIATAMQAGALgIAFg");
	this.shape_21.setTransform(368.9,205.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#97A2A3").s().p("EAiUAaaIgRgSQAGgBgBgKIARATIABABQAEAFgCAFQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgCAAgEgDgEAhjAZlIgBAAQgBgGACgBQADgEAFAFIARASQgGABABAJIgBABgEghIgZcIgcgRQAIgEgFgLIAcARIACABQAGAGAAAGQAAAEgEAAIgHgCgEgiZgaPIgBAAQgDgHACgDQACgFAIAEIAdASQgIADAEALIAAABg");
	this.shape_22.setTransform(368.3,205.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CCCCCC").s().p("AA8DJIgBAAIgBgBIhzhOIAAAAQgwgjgHggQgEgLAGhQQADgmgEg7QgDgxgHgKQgCgDAAgDIABgEIABgBIATAMIAAABQAGATACAlQAEA3gEAsQgFBJADANIAAABQAHAaApAfIBxBNQAQADAKgGQAKgHAEgQQADgQgBhNQAAg6gBgRQgCgggMgPIgRgdIAeATIAJAOQAGAPADAaQABAPAAA+QAABSgDAOQgFAYgQAKQgJAHgOAAQgHAAgKgDg");
	this.shape_23.setTransform(150.7,48.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#545454").s().p("AgIAhQgGgCgBgLQgBgHACgKIABgEIABgBIABgGIAAAAIAEgJIABAAIACgEIACgDQAGgJAFACQAGABABALIAAACIgGAAIgSAOQAKADAEAAIACABIAFgIIADAAIgCALQgEAOgHAIQgEAHgFAAIgCAAg");
	this.shape_24.setTransform(69.1,24.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#242A34").s().p("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");
	this.shape_25.setTransform(324.7,187.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#6B6B6B").s().p("AgIAOQgDgGAAgIIAAgDIABgEIADABIACAHIAJADIgEgMIgGgHQADgEADAAQAFAAADAGQAEAGAAAHQAAAIgEAGQgDAGgFAAQgEAAgEgGg");
	this.shape_26.setTransform(71.7,13);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#464646").s().p("AgJBGQgEgBgLgFIAUgOIAEABIAWABQAHACgKAFIAAAAIgTABIgCAAIgFAKgAACguIgCgJIgBgBIgJgHQgEgHAFABIAKAFIAJAHIAEAOg");
	this.shape_27.setTransform(70.8,17.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#414F60").s().p("ABUBpIACADIgpguIgkgwIgcgoIgjgpIgegjIgBgFIABABIAAgBQASAUAPATIAiAqQAKALAUAcQAVAeAPASIAZAcIAMATg");
	this.shape_28.setTransform(290.1,273.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D3D4D4").s().p("ALaIfIg7gqQgIgFAAgHQABgGAFgEIA1gSQANgFAPAKIA7ApQAIAGAAAHQgBAHgFABIgKAFIglgbIAEgBQABAAAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQAAgCgEgDIgIgGQgEgDgFACIgmAOQgBAAgBABQAAAAAAAAQgBAAAAABQAAAAAAABQAAACAEACIAIAGQAFAEAFgCIAWgJIAuAhIgQAGIgJgGIgQAGQgEACgEAAQgJAAgLgIgAJZHEIAHgqIgqARIgZgRIBUghIAcAUIgGApIApgQIAaASIhUAggAHfFuIBUghIAmAbIhUAggAF8EnIBTggIBMA1IgSAHIgmgbIgPAGIAmAbIgSAHIgmgbIgPAGIAmAbIgSAHgAFXENIg8gpQgHgGAAgHQAAgGAGgDIA1gUQANgFAPALIA8AqQAIAFgBAIQAAAGgGACIg1AUQgEACgEAAQgJAAgLgIgAFrDZIgmAOQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABQABACACACIAJAGQAGAEADgDIAmgNQACgCABgCQAAgCgEgDIgIgFQgDgDgCAAIgEACgADlC8IhOg3IBTggIBLA1QAIAFAAAIQgBAGgFACIgQAGQgHADgNgHQABAGgBADQgCAEgEABIgMAEQgEABgEAAQgJAAgLgIgADNCYIAPALQAFADAFgBIAEgBQABAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQgBAAAAgBIgOgKgADvCMIAOALQAGADAEgBIAFgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgCgDgDIgNgJgABtCRQgbgQgegZIgBgDQgYAFgZgQIgBAAIgBgCQgVgQgLgYQgZAVAMAPQALAOAjgIIABAAQgTALgTgBQgWgBgKgKQgJgJAHgTQAIgUAWgRQgHgbALgZQAMgbAbgIQAcgFAbATQAQALAMARQAagDAcABIgwAOIAFAMQAEANABAKIAAAQQgBAJgDAIIgGAOQgGAKgJAHQAjAuA+AuQgogVgZgQgAgaAqQAKAXASANQAYASAZgFIgBguQAIASAMATQAHgGAGgJIADgHIADgHQADgJAAgJIgBgQIgDgPIgFgKQhQAWgdAagAAGg0QgYAGgLAZQgIATAEAVQAZgRAjgJQAXgIAZgEQgJgMgNgJQgSgNgSAAIgLABgAoyl1IADgFIgOgBIgOgJIAgAAIAHgOIANAIIgDAHIAOAAIAOAJIggAAIgHAOgApLmEIgOgJIALgIIgJgGIgUADIgNgIIAygHIAWAOIgbAVgApNmcIAEACIAGgEgAqGmpIAUgHIgeACIgLgHIAIgPIgTAHIgKgFIAngPIAMAIIgJAQIAfgCIARAKIgmAPgArhniQAEgCAGgBIAKAAIAJACIAHABQADABACgBIgXgPIALgEIAiAVQgHADgFABIgKABIgIAAIgHABIgGABIgDACgAr0ntIgVgNQgDgCAAgDQABAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAIADgCIAMAIIgCABIgCABIACABIADACQAAABABAAQABAAAAAAQABAAAAAAQABAAAAAAIAEgCIABgBIgBgBIgJgGIAHgCIAIAFQAEACADgBIADgBIABgBIgBgCIgEgCQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIgCABIgMgIIAGgCQAFgCAGAEIAWANQAAABABAAQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAIgHADQgFACgDgCIgBADIgCABIgGACIgEABQgEAAgEgCgAswoTQAEgCAGAAIAKgBIAJACIAHABQAEABABgBIgXgPIALgEIAiAVQgGADgGABIgKABIgIAAIgHABIgGABIgDACg");
	this.shape_29.setTransform(167.6,83.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#090B12").s().p("AkBCcIgMgSQAKAAALgCIAQASQgNADgJAAIgDgBgADBhZIA5hDIAUANIg9BIg");
	this.shape_30.setTransform(324.6,269);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#243253").s().p("ABHBFQgTgRgegfQgdgdgOgMIg1grQgdgXgVgPIgBgGIA3AqIA1ArQAPAMAcAdQAeAfAUARIAhAXIAQASg");
	this.shape_31.setTransform(333,250.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// livery stripes
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#385C7E","rgba(56,92,126,0)"],[0.471,0.945],-145.3,-102.7,1.8,2.7).s().p("Al9kWIANgLIAEgFILqJGIgeAHg");
	this.shape_32.setTransform(534.1,378.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#324A78","rgba(50,74,120,0)"],[0.576,0.859],-18.9,-7.3,48.7,41.2).s().p("AnflrQBHAoBSAyIMnJ2IgfAHg");
	this.shape_33.setTransform(555.1,364.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#437596","rgba(67,117,150,0)"],[0.471,0.945],-65.5,-40.5,32.8,30).s().p("AnDlGQgEgRgGgUIObLQIgeAHg");
	this.shape_34.setTransform(544.9,367.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#437596","rgba(67,117,150,0)"],[0.471,0.945],-91.3,-60.1,24.8,23.1).s().p("AmokwIABgKIgBgUINRKWIgfAHg");
	this.shape_35.setTransform(542.7,371.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#437596","rgba(67,117,150,0)"],[0.471,0.945],-129.3,-90.8,16.3,13.5).s().p("AmPkgQAFgLACgNIMYJqIgeAHg");
	this.shape_36.setTransform(539.1,375.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#3A6087","rgba(58,96,135,0)"],[0.369,0.804],-5.5,0.7,46.8,38.1).s().p("AnrlmIAAgBIAAgBIgPghIAAgBIAEgDIPxMUIgeAHg");
	this.shape_37.setTransform(546.4,362.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#EEEFF0","#DBDBDB","#DBDBDB","#E5E6E7"],[0.055,0.227,0.882,1],-241.5,-192.4,89.2,68.9).s().p("AAjArIiRhxIASgLIDLCjQgdgSgvgVg");
	this.shape_38.setTransform(515.3,324.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#E8E9EA","#C6C6C6"],[0,1],-241.2,-197.8,-178.2,-148).s().p("AhMgfIAegSIB7Bkg");
	this.shape_39.setTransform(507.9,323.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#F8F9FA","#EFEFEF","#EFEFEF","#F0F1F2"],[0.137,0.208,0.741,1],-212,-169.9,8.6,4.4).s().p("AHmGHIAFAEIAGAFgAnwmDIATgMIG1FhIgFAUg");
	this.shape_40.setTransform(559.4,353.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#F3F4F5","#E5E5E5","#E5E5E5","#EBECED"],[0.114,0.231,0.843,1],-242.4,-193.1,81.4,62.8).s().p("ACGBxQj7i1h3hpIASgKIHHFvIhnhHg");
	this.shape_41.setTransform(530.7,333.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#DFE0E0","#A8A8A8"],[0,1],-75.1,-62.3,9.1,4.3).s().p("AlQj3IgEgEIipieIP7MyIggABg");
	this.shape_42.setTransform(341.1,192);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#D8D9D9","#939393"],[0,1],-50.9,-40,4.6,3.9).s().p("Ah5hMIgHgGIiBh+IICGgIgZABg");
	this.shape_43.setTransform(361.2,212.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#F1F2F2","#E0E0E0","#E0E0E0","#E8E9EA"],[0.071,0.294,0.78,1],-62.3,-47,274.3,219).s().p("AptnrQATAKAvASISZO5IgZACg");
	this.shape_44.setTransform(342.7,182.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#EBECED","#D1D1D1","#D1D1D1","#E3E4E4"],[0.004,0.18,0.918,1],-66.2,-50.1,257.2,205.4).s().p("AqUoJIA4AVITxP7IgdADg");
	this.shape_45.setTransform(334.9,180.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#E6E7E8","#BCBCBC"],[0,1],-77.1,-62.5,8.4,5.1).s().p("AqkoVQAKABAiAJIUdQgIgTABIgGAAIgFAAg");
	this.shape_46.setTransform(328.8,179.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#F5F6F7","#EAEAEA","#EAEAEA","#EEEFF0"],[0.137,0.208,0.741,1],-56.3,-42.1,265.2,212).s().p("Aoym5QAkAVAmAaIQbNAIgeAEg");
	this.shape_47.setTransform(353.3,187.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#335675").s().p("AgzgrIArAXQAhAXAbAWIgCATQgqgng7gwg");
	this.shape_48.setTransform(485.6,325.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#315070").s().p("AhxhlIAFADIAtAaIALAFIAGAEIABABIAIAEQBdBSA6A6IgHAUQhQhTiMh4g");
	this.shape_49.setTransform(478.7,324);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#213149").s().p("Ai9iqIAgAUIAvAeQAiAWC3CoQAxAsAiAkQgGAKgHALQhvh6j/jbg");
	this.shape_50.setTransform(469.5,321.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#2C405F").s().p("AgygyQAHgLAGgKQBhBigJAdIgEAFIgNALQgFgkhPhWg");
	this.shape_51.setTransform(492.4,343.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#3B5E84").s().p("AgygyIAHgTQBfBdgBAXQgCANgFAKQgSgqhMhOg");
	this.shape_52.setTransform(494.6,339.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#416C93").s().p("AgugtIACgTQBPBAAMAkIAAATIAAAKQgDgdhahRg");
	this.shape_53.setTransform(495.4,334.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#4678A0").s().p("AgogfIgEgDIAEAAIAQgLQA5AtACAJQAGAUAEARQgkgugxgfg");
	this.shape_54.setTransform(495.1,329.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#437596").s().p("AgNgFIALgIIAAAAIAAgBIACgCIAOAgIAAABg");
	this.shape_55.setTransform(495.6,324.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]}).wait(1));

	// tail 8
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#B2B2B2").s().p("AADFiIgXgZIgEgFIgCgDIgBgCIgCgCIgFgFQgsg4gehAQgmhZgIhUQgJhQAagnQAYgsAwAeQgig1gNgoIAFgFIAvg0QAAALADAPQADAlAMAiQASA3AlAjQAkAgAWgNQASgPAAgvQgBgvgSgzQgWg7gkgkQgIgJgGgFIAGgJIApgsQAyA8AcBOQAJAWAGAWIADAGQgBACACAGIABAEIADAHQgBACACAEIAAABQAHAjADAnQADBEgRAkQgTAlgigPQAfAtAQAsIgFAYIgCAMIgpDaIg2AEQgQgKgQgRgAg1gHQgYAPAAA3QgBA0AXA7QAQAqAaAhIAEAEIAEAEIABACIACABIACAGIAJAHQAoAkAYgSQAVgPAAg0QABg1gUg5IgNgeIgDgGIgDgFIgBAAIAAgBIgCgGIgEgGQgSgdgXgWQgYgXgTAAQgKAAgIAHg");
	this.shape_56.setTransform(611.1,354.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_56).wait(1));

	// livery tail dots
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#4581BF").s().p("AAeGQIADgGQAAAAABgBQAAgBAAAAQABgBAAAAQABAAAAAAIADgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABABQAGAAAGALIAAACIABAAIgBABIAGANIgNABIgRgTgABVGfQAGgGAFADIAEADIgPABIAAgBgABEGaQgJgFgDgHQgFgMACgKQAAgNAFgFQAFgJAIAEQAGAAAEALQAEAJAAAOQgBALgFAGQgFAGgFAAIgBAAgAAXGIIgXgaIgDgEIAAgLQABgGACgDQAFgGAJAEQAHACAGALQADAJgBANIgCAGIAAABIABAAIAAABIgBgBIgDALIgBgBgACAFcQgGgEgDgIQgFgIACgJQAAgLAGgEQAEgFAHADQAFAAAFAKQACAIgBALQgBAIgEAGQgDADgEAAIgEAAgAgcFIQgFgKABgLQABgLAHgGQAGgIAJAEQAGACAEAKQAEAKgBANQgDAKgCAIQgGADgGgBIgEACQgGAAgFgPgACZE+QgGgDgDgHQgFgLACgJQAAgKAGgDIAKgDQAGAAAEALIAEAMIAAAAIgEATIAAACIAAAAQgFACgFAAIgEAAgAhNEcIgogpIgDgDIAAgFIACgIIgGgBQgIgDgCgCIgBADIgHgGIgcgcIAAgBIgBAAIgDgDIgEgDIgGgGIgDgDIgCgDIgDgCIgEgEIgHgFIgBgCIABgBIgCAAIgJgIIgHgHIgEgEIgDgDQgDgJACgIQgBgIADgEIgGAAQgJgEgGgIQgFgMACgLQAAgLAJgHQAFgHALAEQADAAAEAFQgBgGACgFQABgNAJgGQAFgJAKAEQAEABAFAEQgDgHACgKQACgLAIgHQAGgIALAGQAEgBAEAGQgDgLACgIQAAgMAIgIQgJAGgIgCQgFgCgDgDIBAhGQACAJAAAMIgDANQAFgFAHAFQADgBADAEQgBgHABgHQABgNAJgFQAGgIAKAFQAFAAAEAHQgDgJACgGQABgNAHgFQAHgHAIAFQAHABAGANQAEAJgCAMQgCAMgHAGQgHAFgGgCQgHgDgCgDIAAAOQgDALgGAHQgIAFgIAAQgBgBAAgBQAAAAgBAAQAAAAgBgBQAAAAgBABIADATQgDANgHAHQgJAHgJgDIgGgGIgBAKIgDAKQAEgDAHADQAHABAIAPQAEAMAAAOIgCAJQACgCADADQAKACAGAOQAEAMAAAPQgCAMgIAJQgIADgJgCIgBgBIAAANQgBADgBAIQAEgDAEACQAIABAIANQAEAKgBAPIgBAHIABAAQAJADAGAMQAEALgBANQAAAJgCAHQADgFAGACQAIACAEAMQAGAIgBAMQgDALgFAJQgIAGgHgCQgHgCgEgFQABAFgBAGQgBACABAGIAAABgAg5ERQgDgJABgEQABgKAFgEQgHABgEgBQgKgEgGgLQgGgMABgNIABgEIgDAAQgHgEgDgCQgBAAAAAHIgCALQAAAAABgBQAAAAABAAQAAAAABABQABAAAAAAQAIADAHAOQAEAIAAAOIgDAOQAEgEAIACQAFAAAGAIIAAAAgAiPDDQgBgGABgBQgBgHADgEIgKgBIgHgEIAAAHIgBAHQABAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAFABAGAHIAAAAgAirCPQgCgHACgEIgFgBIgIgFIAAAGIgBAHQADgCAFACIAGAEIAAAAgAiEB6QgCgJACgGIAAgBIAAAAIAAAAIgHgDQgIgEgDgDIAAAKQAAgBABAAQAAAAABABQAAAAABAAQABABABAAQAGADAHAMIAAAAgAjDBiQgBgEABgFQAAgHADgDIgKgBIgIgCIAAAIQgCAEABAHQADgDAGADIAHADIAAAAgAhmBUQgBgGAAgEQAAgGABgCIgFgDIgHgCQACAIAAAMQAAAAAAgBQAAAAgBAAQAAAAAAABQAAAAAAAAQAEgBAEACQAAAAAAAAQAAAAABAAQAAABABAAQAAAAABABIAAAAgAigBIQgCgHACgGQAAgFADgDIgJgCQgIgEgDgEIABANQgCAFAAAGQADgEAGAEQAFABAEAGIAAAAgAh8ApQgEgLABgKQABgFACgDIgKAAQgFgGgDAAQADAHAAANQgDADAAAFQAEgDAGAEQADAAAFAGIAAAAgAh3guQgBgIACgEQgBgLAEgEQgGACgFgCIgIgHQABAGgBAKQgCAKgGAIQAIgIAKAFQADAAACADIAAAAgABmEwQgIgCgDgJQgFgMABgLQABgOAGgFQAHgIAIADQAEAAAFAGQgEgJABgIQAAgNAJgFQAEgIAIADQAHAEAFALQAEAKAAANQgCALgFAHQgHAHgGgDQgGgDgCgDIAAAQQgCALgFAIQgFAEgGAAIgEgBgAAuEiQgJgDgEgKQgGgMADgLQABgLAFgFQgGADgGgCQgJgFgGgLQgFgNADgLQgBgHADgFQgFABgEgCQgHgFgGgLQgFgNACgLIAAgCIgOACQgLgDgFgLQgGgOADgNQABgRAMgIQAIgHAKABIABgHQABgJADgFIgLAAQgKgCgFgLQgFgMACgNIgBABQgFADgGgFQgHgHgDgIQgGgNABgJQgBgLAGgDQAEgDAGAGQAFAFAGAMQADAKABAIQADgGAGgFIAAgBQgGgHgCgJQgFgMAAgJQgBgMAFgCQAFgEAGAIQAEADAGANQAEALABALIAAACQAAAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAIACAFAOQAGAKgCARQgDAFgCAHQAEgEAGADQAAAAABAAQAAAAAAAAQAAAAABABQAAAAABABQgCgHACAAQABgQAKgIQAGgHALACQAKACAGANQAEANgCAOIAAAHQABgBADACQACAAAEACIAAgIQABgPAHgGQAHgJAJADQAIADAGANQAEAKAAAQQgCABAAAHQADgEAGAEQAHABAHAKQgCgFABgEQAAgOAIgGQAFgJAIACQAHAAAGAOQADAIgBAOQgCADAAAFQADgEAHAEQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAQgEgKADgKQAAgOAHgHQAGgIAIADQAGABAGAMIABADIgMA/IAAgKQAAgGADgCQgGACgFgBIgGgCQACAHAAAMQgBAJgDAIQAEgGAHADIACABIgJAvIgCALQgFgDgFgHQgFgMADgLQgCgLAGgFQgGACgEAAQgJgDgDgHQgFgNACgMQgBgGAEgCQgGABgFgBQgGgCgCgEIgCALIgBAMQACgCAFADQAHACAFAMQAFAKgCANQAAANgHAHQgHAGgIgBQgGgEgEgGQADAIAAANQgDANgGAHQgHAHgHgBIgGgDQABAFgCAFQgDAMgGAIQgIAGgHgBIgGgEIABAPQgDALgHAJQgFAFgGAAIgEgBgAA2DlQADAAAFAEQgDgIACgFQAAgKADgDQgGABgFgBQgEgDgCABIAAAOIgEAMQADgDADAAIAFABgABUDAQAEABADADQgBgFABgGQAAgIACgDQgFABgEgBIgGgEIgBAKQAAAIgDAHQAEgDAEAAIACAAgAAeCtIAFADQgDgGACgFQgBgGACgCIgIAAIgDgDIgCAJIgBAJIAEAAIAFABgAByCgQAGACAFAHQgFgKACgMQAAgGADgDIgKgCQgFgCgDgEQABAIAAAKIgCANQAAAAAAgBQABAAAAAAQABAAAAAAQABgBABAAIAEABgAA2CCQgBACAAAGIAGABQADAAADAEQAAgGAAgGQAAgFABgCQgEABgFgCIgDgBIAAAIgAAGB7IADABQgCgGABgFQAAgBAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQgFAAgDAAIgBAHQAAACAAAFIAAgBQACAAAEACgABaBqQAEABAFAIQgEgMACgIQgBgGACgCIgJAAQgBgBgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBACAAAIQgBAEAAAFIACgBIAFACgAAnBZQgBgGABgEQgBgDACgDQgEgBgCABIgCgBQgBACAAAEIgCAJQACgCAFACIAAAAIADACgACfDoQgGgCgDgIQgFgKABgJQABgLAGgEQADgFAHADQAGAAAEAKQACAHAAALQgBAKgDAGQgFADgEAAIgDgBgAjzB5IgQgPIgHgHIgHgIIgCgBIABgBQAFgHAKAFQAJACAGALQAEALAAAMIgDgCgAkfBQIARgSIABAHQgCAKgGAIIgBABIgJgIgAkDA3IgDgCIAZgcIABAKQgCAKgGAIQgFADgFAAIgFgBgADQAhQgFgKABgKQABgNAFgGQAFgJAIAFQADgBACACIgKA1QgJgCgBgJgAjhAbQgGgCgCgDIAdgeIABAOQgBALgHAIQgFADgFAAIgEgBgABXgKQgGgNADgOIACgIQgEABgDgCQgGgCgDgDIAAAJQgDAMgFAKQgJAFgIgBQgIgDgDgJQgFgNACgNQAAgNAIgGQAHgLAIAEQADAAAFAEQgCgHABgEQAAgHACgEQgEABgEgBQgHgDgDgGIgBAPQgCANgGAHQgJAIgHgBQgHgDgFgLQgGgMACgNQABgOAIgGQAHgKAIACQAFABAGAJQgBgIABgGQACgOAHgGQAHgLAIADIAHAFQgBgIABgGQABgMAGgGQgIAEgGgBIgIgGIAAAPQgDAOgGAGQgIAIgIgCQgIgDgDgIQgFgMADgMQAAgOAIgGQAHgHAIACQAFAAAEAGQgCgJACgHQAAgOAIgGQAGgHAIADQAHACAEAMQAEAKgBANQgBAIgEAGQAGgFAIACQAIADAGANQACAHgBAOQAAAFgCAGQAEgDAFACQAEABAFAFQgFgLADgLQgBgHADgDQgDACgEgDQgJgEgDgJQgFgMACgMQABgJAEgFQgFACgGAAQgIgDgEgKQgDgIACgNQABgNAGgFQAGgJAIADQAFABAGALQADAJgBAOIgGANQAGgFAIACQAHACAEANQADAIgBANIgCAMQACgEAFAEQAGACAGALQAEAJgBAOIgDAKQAFgFAGAEQAIAAAGANQADAKgCARQgCANgHAJQgHAGgIgCIgFgBQACAIgBANQgCAOgHAKQgIAGgIgBQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAIAAAJQgDAOgGAKQgKAEgHAAQgJgDgEgKgABxhAQgCgGABgEQAAgGADgDIgHAAQgBgBgBgBQAAAAgBAAQAAAAgBAAQAAAAAAAAIgBALIgBAJQADgDAEACIAEACIAAAAgACQhjQgEgMACgLIABgJIgOgFQAEAJgBAQIgDAIQAEgCAFADQACgBAEAEIAAAAgABbhyQgBgGABgEQAAgHACgFIgIAAIgFgDIgBAPIgBAJQACgFAIAEIAAAAIADACgAjCgHIgHgEIAggjQABAIAAAKQgDALgGAHQgHAEgFAAIgFgBgADngaQgBgJAEgDIgJACQgHgBgEgJQgFgLADgNQAAgIADgFQgEABgDAAQgJgBgCgIQgFgNACgMQAAgKADgDIgGABQgHgDgDgHQgFgLADgLQgBgNAHgIQAFgIAIACQADgBADAGQgFgNABgMQABgFABgCQgNgEgCgJQgEgJABgNQAAgIAEgGQgFACgDAAQgIgDgCgJQgFgLACgKQAAgLAEgFQgGADgEAAQgGgBgEgJQgDgKACgJQgBgNAHgGQAFgIAHADQAEABAFAJQACAIAAANIgEAOQAEgGAHACQAEABAHAMQACAIgBANIgDANQAEgFAGACQAGACAFAKQADAIgBAOQgBADAAADQABAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAHABADAIQgCgIACgIQAAgGACgEIgGABQgHgDgDgIQgGgLAGgZQgFABgDAAQgHgDgDgHQgEgLACgNQAAgIAEgGQgGADgDAAQgIgDgDgHQgDgKACgKQAAgNAGgGQAEgIAHADIADABIADADIAEAGQACAIAAAMIgEAPQAEgFAHACQAFACAFAJQADAIAAANIgBAJQACgBADABQAIAAACALQAEAIgBAPIgCAJQADgEAFAEQAHABAFALQACAJAAAOQgBACABAEQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIgMA+IgEgDIABARQgBADgBAFIABgBIgKA3QgCgDgBgEQgGgLADgLIgMgLQADAIgCAOQAAAHgCAHQADgDAEABQAGABAFALIgJAxIgDAQIAAgEgADciPQgDgLADgQQgBAAgBgBQAAAAgBAAQAAgBgBAAQAAAAAAAAQgHgCgBgCQADAIgCANIgCALQADgDAFACQACgBADADIAAAAgAD6i5QgEgJADgIQgBgBAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgGgCgEgIQACAIgBAKIgBAGQACgDAEACQADABAGAHIAAAAgAhghwQgFgCgDgDIAfghQACAIAAALQgDALgGAHQgEADgEAAQgEAAgEgCgAgCh4QgJgDgDgJQgFgMACgKQACgOAHgHQAGgJAHADQAHACAFALQAEAKgCANQgBALgIAKQgGAEgEAAIgCAAgAg+iOQgGgCgEgHIAZgcIAFgFQAEAJAAANQgDAMgGAGQgFADgEAAIgGgBgACqi2QgIgDgCgHQgEgKACgLQABgLAJgHQACgFAHADQAFACAEAIQACAIABALQgCALgFAHQgGAEgEAAIgCAAgAAHjPQgHgEgEgKIgBgEIAdghIAEAIQADAJgBAMQgCALgHAHQgFAEgFAAIgEAAgACUjjQgHgCgCgIQgEgJACgLQABgJAGgIQAFgIAHAEQAFACAEAJQADAHAAANQgEAKgDAGQgGAEgFAAIgCAAgAAej8IgCgKIAageIAGAIQACAJgBAMQgCAKgFAHQgIAGgEgBQgJgEgDgHgAESj+IAAgBIgBAFIABgEgAEFkLQgDgKABgMQABgHADgFIgHABQgIgCgCgGQgEgKACgLQABgMAHgGQACgEACgCIAQAMQACAGgBAKIgCAOQADgGAFABQADAAADAEIgKA2IgEAAQgIgBgCgIgAB+kOQgHgEgDgIQgFgKABgLQACgMAGgGQAGgJAHAEQAGABAEALQAEAIgCAMQgCALgGAHQgCAHgFAAIgEgBgABZlJIAdghQACAHgBAKQgCANgFAIQgHAFgGAAQgHgEgDgGgAEelBQgCgGAAgFIAEAEIgBAIIgBgBgADnleQgFgJACgLIAAgEIAZATIgDAHQgFAHgFAAQgIgCgBgHgACBlwIgBgFIAYgcIABACQACAIAAAMQgCAJgDAIQgGADgGAAQgFgBgEgIgACrmKQgHAAgCgJQgEgGABgIIAGABIADAAQAHACAIAGIABABIABABIgEAJQgFAEgDAAIgCgBgACRmVIgCgDIAAgBIAAAAIABAAQAFABADAGg");
	this.shape_57.setTransform(605.2,350.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#519AE5").s().p("AC6CVIAOAEQARAKAFAPIAAACQgPgMgVgTgABqBUIAAgBQAKgJAPgDQgTgBgQgKQgTgMgGgQQgEgPAIgLIAoApIAZAXIgBABIABACIAGAFIAHAGQAGAEAEAIIAZAcIABABIAFAEQgHAFgHADIgEACQgRgOg1gpgAh3hUIgDgDIgdgWIgNgKIgIgFIgIgGIgGgEIgDgDIAEgCQADgEAGAAIgXgLQgSgMgEgMQAzATA+ALIgEADIgJAEQANADALAJIANALQACgIAGgGIAEgEIAHAHIAQAPIADADIACACIAFAEIAFAFIADADIAEAEIAHAHIAJAIIABABIABACIAHAFIACAFIADACIACACIADADIAGAGIAEAEIADADIABAAIAAABIAcAbQgCAFgFAGQgFAFgIACQAKABAHAGQASAIAFAQQADAMgGALIi6iLgAhWhKIgFADQAIACAJAHQAIAEAGAHQACgIAFgGIAEgDIgIgEQgLgGgGgHQgDAGgJAFg");
	this.shape_58.setTransform(585.8,374.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_58},{t:this.shape_57}]}).wait(1));

	// base
	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#B9BABC").s().p("ABDCPIi4kpIDKB2QgQAEgBAeIAyCdg");
	this.shape_59.setTransform(212.1,448.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#E7E7EB").s().p("ABdCYIjEkyIAWANIC5Eog");
	this.shape_60.setTransform(208.4,447);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#4F5654").s().p("AgyAYIATgJQASgIAOgKIACgBIABgBIAAgBIADgCIAHgFIAKgJIACgDQAJgIAHgKIAJAXQgLAPgRANQgXATgeARIgUgUg");
	this.shape_61.setTransform(849.9,164.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FAFAFA").s().p("AABCuIhmiGQgBgJAHgEIC+ECIAFAHgAg8iDIAAgBIA1g0IBqhrIAEAFIigCig");
	this.shape_62.setTransform(860.1,173);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#697270","#6F7C77","#99A3AD","#6C7773"],[0,0.239,0.529,0.91],-3,5.3,2.1,-6.1).s().p("AAEBJIhBgJQA4gUAKgtQAMgugMgaIAAAAQAxAyACAJQAJARgFAUQgMAzgoAAIgEgBg");
	this.shape_63.setTransform(637.2,435.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["#393E3E","#474F4D","#5D6469","#5C6368","#464D4C","#393E3E"],[0,0.282,0.431,0.576,0.706,1],8.3,-1.3,1.5,10.9).s().p("ABABHIiSgSQAQgPARgYIAUgcIAKgSIAMgYIAHgTIBGB+IAMAHQADAKgNAIg");
	this.shape_64.setTransform(293.3,364.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["#393E3E","#474F4D","#5D6469","#5C6368","#464D4C","#393E3E"],[0,0.282,0.431,0.576,0.706,1],6.7,-13.1,-7.2,12).s().p("Ag2CGIgPgBIADgBIgJgCIgKgYQgEgJABgGQACgFAEgDQAHgDAMAAIAhgFQARAAgFgNIgPgeQgJgXAZgFIAigEQALgBgDgLIgPgnQgHgWAMgFQAEgCAGAAIAZAAQAMgBgGgLIgVguIAgAzIAGAJIAPAbIABACQAAAMgCAPIgFAPIgIARIgMAYIgLATIgTAdQgRAYgPAQQgJAIgJAFIgGAEg");
	this.shape_65.setTransform(285.1,357.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.rf(["#E5E5E5","#D1D2D3","#D0D0D3","#848687","#555656"],[0.094,0.231,0.435,0.784,1],0.6,6.5,0,39.7,26.4,111.7).s().p("AAAAAIACAAIgCAAIgBAAIABAAg");
	this.shape_66.setTransform(238.8,294.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.rf(["#FFFFFF","#EAEBEC","#E8E8EC","#9EA0A1","#6F7070"],[0.094,0.231,0.435,0.784,1],-11.5,-36.3,0,27.6,-16.4,111.7).s().p("ACTGeQgsgDgugQIgwgQIghgNIgWgJIgPgGIgagKIgBAAIgGgCIgFgDIgEgCIABAAQhKgdg3gfQgrgYgsgdIgFgFIgFgDIgHgDQgDgEgEgCIgCgBIgMgJIgIgHIgNgJIgFgEIgUgQIgGgFIgBgBIgJgIIgBgBIgCgCIgJgIIAAAAQgggcgegfQASAPBDgMQBDgMBUg0QBUgxAYg9QAZg/AHgvQAGgugJgzQgRhfhEggQAjAHAnAPQAnAOAvAXIgHACQgRAFgJAGIAmAgIAGAFIAeAbIAHAJIAUATIAXAYQAYAYAcAPQARAKAfAfQALAKgIgfQgJgkgng4QAHgDAFgKQBRAwBHA7QAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIADgBQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABIAEAJIASAOIALAKIAYAWIABABIAFAFIAGAFIAUAUIAEAEIACADIA7BAQAUAWATAXIAPARIgBACIgOgIQgFAAAGAMIAXApQAGAJgEACIgYgDQgHgBgDACQgGAFAGAQIAVAuQAGALgMABIgZABQgGAAgEACQgNAFAIAWIAPAmQADAMgLABIgkAFQgZAFAJAXIAPAeQAFANgRABIghAEQgMAAgHAEQgFACgBAFQgBAGAEAJIAKAYIAAABIgBAGQgDAQgUADIg+ABQgKABAAAEIABACIAAAAIAaAMIgEACQg4gFhFgNg");
	this.shape_67.setTransform(242.9,332.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.rf(["#959798","#EAEBEC","#E8E8EC","#9EA0A1","#6F7070"],[0,0.231,0.435,0.784,1],-15.2,-10.2,0,23.9,9.7,111.7).s().p("ABuBgQgfgfgSgJQgcgPgXgYIgWgWIgTgTIgKgJIgegbIgFgFIgnggIAMAEIAbAMIAXAKIAMAFIAMAGIAEABIABABQBBAfAXANQAoA2AIAjQAHAXgFAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQgBAAAAgBg");
	this.shape_68.setTransform(246.6,306.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["#7E8991","#4A5B67","#576874","#323836"],[0.11,0.431,0.51,1],-99.9,-33.8,-104.2,12.3).s().p("AiOD/IgEgFQgRgSgQgTIgKgLQgSgVgJgdQguiFBOiBQBKh+B7gVQAigHAhAEIAGAAQAXABAZAGIAKADQBEAgARBfQAJAzgGAuQgHAtgZA/QgYA9hUAzQhUA0hBALQgfAGgUAAQgYAAgKgIgAgejfQhIAegzBRQglA6gIBCQgGA1AMAfQAUAwAmAQIABAAIAFACQAOAJAdgFIAPgFQAdgIAagMQBjgqAfhJQAdhJgHgzQgDg1gggxIgCgCIgDgGIgBAAQgagegoAAQgcAAggAPg");
	this.shape_69.setTransform(207.9,314.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["#212524","#3C4547","#5C6B75"],[0,0.314,1],-4.7,-17.7,-5.8,22.8).s().p("AhVDGIgBAAQgmgPgTgxQgNgeAHg1QAHhCAlg7QAzhQBGgfQBUgjAtAyIAAABIAEAFIACADIACAEIAAABIgBgBIgMgGQglgNg0AXQgNAGgOAJIgNAHIgIAGIgSAUQgOAOgNASIgTAeQgeAzgKA5IAAAFQgJBBATAzQAEAKAIAEIgGgCg");
	this.shape_70.setTransform(203,310.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#2A4866").s().p("AAXGIIgbggIgmgoIgCgDIgIgIIgGgGQg1g4g7g5IAAgBIgBAAIgDgDIgEgEIgGgGIgDgDIgCgCIgDgCIgEgEIgHgGIgLgLIgHgGIgEgFIgIgHIgFgFIgFgFIgQgPIgOgOQgFgDgJgIIBbhgICVijIBvh7QAtgxAsgzIgMgFIADgDIACgDIAEgCQAHgEAIACIADABQAHACAIAGIABABIAKAHIAFAEIAQAMIAKAHIAAAAIABABIA+AvIiLLkIhDAFIgjACIgYgag");
	this.shape_71.setTransform(605.2,350.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#3A638C").s().p("ADCCZQgbgbkPjJIgEgDIgdgWIgNgKIgIgFIgIgGIgGgEIgEgDIhOg/QBQAqBtAOIAOAPIAQAPIAFAFIAFAEIAIAIIAEAEIAHAHIAJALIAHAFIAEAFIADACIACACIADADIAGAGIAEAEIADADIABAAIAAABQA7A2A1A4IAGAHIAIAHIACADIAmApIAdAfIAYAbIgOABQgTgNgcgag");
	this.shape_72.setTransform(584.4,373.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["#393E3E","#474F4D","#5D6469","#5C6368","#464D4C","#393E3E"],[0,0.282,0.431,0.576,0.706,1],10,-13.1,-9.7,11.5).s().p("AhQCFIgPgDIADgBIgKgEIgGgbQgFgTANgFQAIgDANABIAkADQATACgDgPIgLgjQgFgbAcAAIAmABQANAAgCgLIgIgtQgGghAbAEIAbAEQANACgFgOIgNg0IAYA+IAEAKIANAjQgBAMgGAPIgIAPIgMATQgNATgUAWQglArgfAWQgLAIgLAFIgHACg");
	this.shape_73.setTransform(511.1,258.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["#393E3E","#474F4D","#5D6469","#5C6368","#464D4C","#393E3E"],[0,0.282,0.431,0.576,0.706,1],10.3,-0.6,0.7,11.4).s().p("ABDBSIibgvQAggWAmgpQASgWAMgTIAMgTIAKAcIArB5IAMALQABALgPAGg");
	this.shape_74.setTransform(518.2,268.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.rf(["#FFFFFF","#EAEBEC","#E8E8EC","#9EA0A1","#6F7070"],[0.094,0.231,0.435,0.784,1],-4.1,-42,0,34.7,-13.2,123.1).s().p("ABjHYQgvgNgvgZQhYgwhHgtQhNgwg3gtQgqghgrgoIgFgFIgEgGIgHgFIgHgHIgCgCIgLgMIgIgIIgMgOIgEgEQgSgSgQgVIgBgBIgCgCIgIgLIgBAAQgdglgaglQAQAQBLAAQBLABBlgnQBlgpAlg8QAnhAAPgyQAQgxgBg5QAAhqhDgxQAjAPApAXQAnAXAtAhIAGAEQAmAaAsAhQB7BeBfBuQAdAiAaAjIAGAIIACACIASAaIAEAEIADAEIADAEIAyBPQATAcAQAdIAMAYIgBABIgNgLQgFgBADAOIASAwQAFAMgFAAIgWgHIgEgBQgTgHAFAfIANA0QAFAOgNgCIgbgEQgbgEAGAhIAJAtQABANgMAAIgpgCQgcAAAGAcIAKAjQADAPgSgCIgkgDQgOgBgIADQgNAFAFATIAGAbIABABIgCAGQgGASgWgBIhEgLQgMAAABAFIAAABIAAABIAaARIgFACQg8gPhIgbg");
	this.shape_75.setTransform(468.9,223.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.lf(["#212524","#3C4547","#5C6B75"],[0,0.314,1],-2.4,-20,-11.1,23.8).s().p("AiHDIIgBAAQgmgXgMg5QgIgjARg4QAVhGAzg6QBGhOBRgUQBigWAnA/IABABIADAGIACAJIAAABIAAgCIgMgIQglgVg9APQgQAEgRAHQgIACgHADIgKAGQgNAHgKAKQgSANgRARQgNANgNAQQgrA0gVA6IgCAGQgWBFANA6QACALAHAHIgGgEg");
	this.shape_76.setTransform(431.8,191.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["#7E8991","#4A5B67","#576874","#323836"],[0.11,0.431,0.51,1],-102.3,-54.8,-115.5,-5.5).s().p("AhvERQhLAAgQgSIgEgGIgdgvIgJgNQgOgagGgiQgZiWBsiAQBph8CKAAQAlAAAjAKIAHACQAYAFAcALIAKAEQBDAxAABqQABA5gQAvQgPAygnBAQglA8hlApQhjAohLAAIAAAAgAAFj0QhRAUhGBOQgzA6gVBIQgRA2AIAjQAMA5AmAXIABAAIAGADQAOAOAggBIARgDQAhgDAfgJQBzgaAuhKQAuhJADg6QAHg7gcg8IgDgGIgBgBQgdgvg9AAQgVAAgaAGg");
	this.shape_77.setTransform(435.9,196.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#2A2A2A").s().p("Az7MDQgIgEgEgKQgTgzAJhBIAAgFQAKg5Aeg1IATgeQANgSAOgOIAUgUIAIgGIANgHQAOgJANgGQA0gXAlANIAMAGIABABIAAgBIgCgEQAgAwADA1IgWAGIgBAAIgOAFIAAAAIgDAAIgDACQgOAGgOAJQggAWgbArQgwBLAWBDIACAGQgaANgeAIIgOAEQgLACgIAAQgPAAgJgGgAPBmZQgIgGgCgLQgMg7AWhEIACgGQAVg8Aqg0QANgQANgOQASgRARgNQANgJAMgIIALgFQAHgEAIgCQAQgGARgFQA8gPAmAWIALAIIABABIAAAAIgDgJQAcA7gGA8IgaACIAAAAIgQADIgBAAIgDABIgEAAQgRAEgQAIQgmASgmApQhCBJALBNIABAGQgeAJgiADIgQACIgGAAQgcAAgMgMg");
	this.shape_78.setTransform(322.6,253.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["#808080","#F9FAFA","#F7F7F7","#EEEEEE","#A1A1A1","#383838"],[0,0.188,0.251,0.314,0.584,1],-359.4,-362.5,-437.8,-250.8).s().p("AAAAAIAAAAIAAAAg");
	this.shape_79.setTransform(602,438.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["#202F4F","#1E2840","#1B253E"],[0,0.494,1],9.9,1.7,-4.2,1.7).s().p("ABVAiQgdgnhygFIgDAKIgggfIAEAAQASgDAUABQAXABAaAFQAwAKAjARQAPAIgDAOQgCAHgEAFg");
	this.shape_80.setTransform(603.8,434.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["#3A434D","#232B39","#1D2433","#161D30","#32497B"],[0,0.075,0.224,0.435,1],-293.7,-126.2,-227.2,-220.8).s().p("ABzDcIkGixQA6iWgNhwIAJAIIAMAXIAAABIACACIABABIAaAeQAhAhBMBGIBTBIIAFAEQADAUAAATQACBKgiBSg");
	this.shape_81.setTransform(616.9,419.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["#E6E6E6","#5B5B5B"],[0.055,1],29.9,-31.1,19.1,-37.9).s().p("AAAAKQgKgJgDgIIAAgHIAAgFIAaAQQgEAAAEAKQADAMgCABQgJgFgFgFg");
	this.shape_82.setTransform(196.6,429.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.rf(["#707070","#FFFFFF","#7B7B7B"],[0,0.169,0.89],-23.7,7.5,0,-23.7,7.5,46.5).s().p("AABgCIgBAEIAAAAIAAABIABgFg");
	this.shape_83.setTransform(289.8,287.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["#FFFFFF","#D5D5D5"],[0,1],152.9,-82.8,112.9,-33.1).s().p("AhJgaIgLgJIgEgDIgTgQIA8ATIAEABIAyAYIACAAQAZAEAVgEQAcgHAZgYIhbBgQgrgpgvgog");
	this.shape_84.setTransform(574.5,353.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["#B6B6B6","#A8A8A8","#696969"],[0.149,0.533,1],2.4,-0.5,-1.6,0.2).s().p("AgFAXIgEgWIgBgBIgCgIQgDgSgDgCQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgDAEgBQAVgBAJANQAIAMgEACIgJAGIAAADIAAAkQgKAAgFgNg");
	this.shape_85.setTransform(400.4,361.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.lf(["#3A434D","#232B39","#151B2B","#19233A"],[0,0.129,0.494,0.639],-80.1,32.5,-18.3,-52.3).s().p("ABpFVIANgGIAEgCIADgCQAPgJANgMQAJgJAHgKQAagjgLgiQgFgUgQgOQgFgGgIgEQgWgNgjgGQgSgCgWgBIgGgBIgGAAQgPABgcADQgcAFgYAIIgCAAIgQAHIgdAMIgEABIobl5QA9i1gyitIAIANQALARAPARIAMALQAIAIAuAlIArAhIBVA+IA7ApQGhEsGVDeQBSAtBRAqIAGAAQgCC5j/Avg");
	this.shape_86.setTransform(426.4,295.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.lf(["#808080","#B8B8B8","#6D6D6D","#878787"],[0,0.588,0.875,0.992],-23.1,95,42.5,13).s().p("AAAAAIABAAIgBAAIAAAAg");
	this.shape_87.setTransform(366.3,231.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["#3A434D","#232B39","#151B2B","#1E2A45","#2A3B62","#324674"],[0,0.129,0.494,0.639,0.773,1],-39,31.1,22.8,-53.7).s().p("AChKEIAAgEIAJgGQAEgCgIgMQgJgNgXABQgEABAAADQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAAAQADACADASIgigOIglgRIgHgEQgigRgfgTIgPgIIgFgDIgugdIAAAAIgFgDIgTgNIgLgIIgpgcIg9grIhTg8IgagTIgMgJIhNg4QhLg4hDg1QhdhJhThHQg4gugzgvIhCg+IgEgEIgDgDIgDgCIgHgIIgSgSIgIgJIAAAAQhhhfhuihIAVAMQAlAWAWAGQAkALA/gPQATgEATgHIACAAIABgBIAFgBIAagLIAAAAIAQgHIAAAAIADgBIAogWQB7hGBAhoIAAgBQANgVALgWIABgCIAAgBQA/iGDYAfIAaAEIBZAVQBVAdBbA4IAGAEIAPAJIAOAJIgagBQgagDgLgDIgJgDIgIgDQgOgFgNgCIgMgBQgRgCgQADIgMADIgCABIgCAAIACAAQgbAKgLASIAAACQgFAJgBAKIgBAEIABALQABAJADAJIACAGIAEAIQAyCtg+C1IIaF6QgUAKgOAMQgKAIgGAJQgRAWAAAbIAAACQABAmAcAWIACACIABABQAbAOAeAHQAUAFAVABQATABAUgCQA2gFA3gaIEcDIQD+gvACi4IArggIABAAIAAgBIADgDIAAABQALAXAIAWQAdBMgCAzQgCBCgdAdQgjAjhAAOIgBAAQgrAJg3gCIgGAAIh7gGQhJgCg1AMQgyAKghATQgeARgSAXQghAtAgAiIACACIAmAXQgUALggAAQhuAAj6iAgAhKFzQgRAHgMAIQgJAGgGAHIgFAHQgFAJgCAKQgCASAJANIAAAAIAAABIABABIADAEQAKALATALQAXANAeAIIAFACIAEABQAcAHArgDQAkgDAHgDQAagHASgOQATgOAFgSQADgIAAgJQAAgOgPgOIgFgFIgHgGIgGgEQgdgUgigIQgagFgYgCIgLAAQgoAAgiANg");
	this.shape_88.setTransform(385.3,296.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.lf(["#3A434D","#232B39","#1D2433","#161D30","#32497B"],[0,0.075,0.224,0.435,0.792],3.9,70.6,70.4,-24).s().p("EAwVAiNQAihTgChJQgBgUgDgTIAFgBIABABIA6A7QAMAagMAuQgNAvg3AUgEAtiAhzIgCAAIgBAAIgCAAIgegEIgggEIBVgIQAFgFABgHQADgOgOgIQgkgTgxgKQgbgFgWgBQgVgBgSADIgDAAIgBAAQgVAEgJAIQgFAEgBAGIABABQAVAUAQANIAIAGIABABIgTgDQg+gKhAgOQhagShdgZIg6gQIgvgOQiwg0imhGQjvhkjciIIkmi4IgmgYIgBgBQgggjAhgsQARgYAegQQAigTAxgLQA2gLBJABIB7AGIAFABQA3ABArgIIACgBQA/gNAkgkQAcgcAChCQACg0gdhMQgIgVgLgXIAAgBIAIgFIABgBIAqAWQBxA8CSBbQDAB1EWDPQDvCyA/A1IASAQIAKAJQANBwg7CZIEICwgAmYFjQgVgHgmgVIgVgNIgUgNIhCgpIkcjIIspo3IkGi5IjHiMIhMg2IjIiOQkCjMjLjzIgjgqIg5hJIgrg7IgDgEQjIkdAOikQACgVAGgSIAAgBQAEgIAFgGIAEgFIAJgJIAAgBQATgNAfgEQA0gIBBANQDtAmE9BxQFbB8GQDIQA1AaBGAqIB2BIQDIB2DTCbQEODFEhD9QC7ClEVEEIBHBFIAGAGIAcAaQFLEeC3B0Qhcg4hUgcIhZgUIgagFQjYgfg/CEIgBACIgBACQgKAWgNAVIgBAAQg+Boh6BHIgpAVIgCABIAAABIgRAGIABABIgaAKIgGACIgBAAIgCABQgTAGgSAFQglAJgbAAQgUAAgQgFg");
	this.shape_89.setTransform(319.2,222.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["#D2D3D3","#F9FAFB","#F9FAFB"],[0,0.729,0.89],-101.9,-46.4,-68.4,-94.6).s().p("EAu+Ae2IgJgJIgTgRQg+g0jvizQkXjOi/h2QiThbhwg8IgrgVIAPgJIAogYIBkg9IAVAQQAjAcATAMIANAIQAHADACgDQACgCgBgEQAAgJgKgRIgGgLIgIgPIgWglIABgBQBcBJCOB0QCmCHBBA4IATAQIADADIAMAKQAvApAtApQAJAJAFACQhtgOhQgqIBOA/IAAAAIAEADIAGAEIAIAGIAIAFIANAKIAdAWIAEADQERDLAbAbQAcAaATANIgdABQgDADAIAVIACAGIAAABIACAEIAJAUIgJgIgAL1FCIgOgJIgHgEQi2h1lMkdIgbgaIgHgFIhJhFQkSkEi7imQkhj9kOjFQjTiajIh3Ih2hHQhGgqg1gaQmQjIlch8Qk8hyjtglQhBgNg0AHQggAFgSANIALgJQAtgaBkgCIAVAEQDtAlE9ByQFcB8GPDIQA1AaBGAqIB2BHQDIB3DTCaQDYCeDkDAQlak0h6haQiHhljPiCQjQiDhAglQhBgli6hSQi6hRlyh3Qj1hRjOgqQAnACAqAFQCZAQDeAuIAKAEIAQgCIAFAAIBWgKIAQgBIAZgDIAYACQA6AKBIAbQA7AXB+A6IAvAXQBvA4CiBiIAiAVIAAAAIATAMIAAAAIAvAdIDzCcIAHAFQGzEtENDDQCrB9PcL5IDYCkIAuAjICdB5QhbAOg/AGIgzAFIgDAAIgTACIh0AEg");
	this.shape_90.setTransform(305.9,200.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["#232B39","#232D42","#223152","#2A3B60"],[0,0.392,0.471,1],4.7,11.5,13.9,2.3).s().p("AgBAAIADAAIgDAAg");
	this.shape_91.setTransform(842.9,168);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#E0E0E0").s().p("AhxA4IgQgPQAggRAXgTQARgNAMgPIgKgXICgiiIAZAgIhSFcQgEAcAGAJQhKhChZhXg");
	this.shape_92.setTransform(859.8,165.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#757E84").s().p("AAAAAIABAAIgBABIAAgBg");
	this.shape_93.setTransform(852.5,162.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#526566").s().p("AAAAHIgBACIgKAJIALgLgAAMgRIABAAIgBABg");
	this.shape_94.setTransform(852.6,161.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#464646").s().p("AgRAEQASgIAUAQIARAXIgLAcgAglg0QAZgEATgGQAFAEgCAJQgHAIgOAGQAAgQgagBg");
	this.shape_95.setTransform(846.1,169.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#617583").s().p("AAxANIgPAEIgDAAIgiAGgABFAHIAAgBQAggKAZgSIgBABIgCABQgQAMgSAIIgTAHIgQAFgAh1AGIABAAIAAABIgIAAIAHgBg");
	this.shape_96.setTransform(837.7,166.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#262C31").s().p("Ak7CZIgFgDQgZgSgBgVIAAgIQACgIAGgJQAMgSAagIIACAAQARgHATgDQAagEAfACIAIABQAoAFAcAPIANAHIAGAEQAHAGAFAFIgGgFQgKgGgMgFQgZgLghgEIgIgBQgfgCgbAEQgTADgRAGIgBABQgaAIgNARQgGAJgBAJIgBAHIADANQAIAMASAMIAMAHQgMgFgKgHgAAbgnIAAgIIAAgBQABghAngfQANgLAPgIQAfgRAngJIAMgDQBDgLAzASQApAPALAbQgNgTghgMQgzgShDALIgMADQgkAIgdAPQgSAKgPAMQgnAfgBAiIAAAIQABAHADAHQgIgMgCgNg");
	this.shape_97.setTransform(408.1,329.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#0C1012").s().p("AhgB+IgDgDIgBgBQgFgFgIgFIgGgFIgMgHQgdgPgngFIgIgBQgfgBgbADQgSAEgSAGIgBAAQgaAIgMASQgHAJgBAIIAAgcQAGgGAIgGQAMgJASgHQAogPAuADQAZABAaAFQAhAIAeAUIAGAFIAHAGIAFAlIAAACQgBgMgJgMgAAYhIQAHgKAJgIQAPgMATgKIAEgCIAdgMIAQgHIACAAQAYgIAcgEQAegEAPAAIAGAAIAGABQAWAAASADQAjAFAWANQAIAFAFAFIAFAzQgBgHgDgHQgLgbgqgPQgygShDAMIgMACQgoAJgeARQgPAJgNAKQgnAfgCAhg");
	this.shape_98.setTransform(408.3,326);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#45484F").s().p("AjaCHQgLgBgJgDQgPgEgLgHQgPgJgBgNIAAgDQABgFADgFQAGgJAOgEIABAAQAIgDAKgCQAOgCAQABIAEABQAZACARALIADADQAGADADAEQAEAHABAGIAAAAIgBADQgBAKgMAIIgLAFQgQAHgUAAIgNgBgAjuBeIgCAEIAAACQAAAFAHAEIAKAEIAIABQAMABAJgDIAEgCQAFgDAAgEIABgCIgCgFIgEgDIgBAAQgHgFgKgBIgCgBQgHAAgFABIgIACIAAAAQgGACgCADgACGgkQgPgFgIgIQgGgHgCgKIAAgFIAAAAQABgSAVgRIAOgKQASgKAWgFIAHgBQAkgHAcAKQAcAKADAVQACAVgYATQgJAHgLAGQgSAJgXAEIgMABIgQACQgTAAgRgHgAC+hkIgCABQgJABgHAFIgDACQgIAGAAAGIAAABIAAABQABADACADQADADAFACQAIADAKgBIAEgBIAMgDQAGgCAEgEQAIgHgBgHQgBgHgKgEQgFgCgHAAIgKABg");
	this.shape_99.setTransform(407.8,330.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#1B253E").s().p("Ag0gjQAJgHAVgFIABAAIAeAhIAsAqIAAAAQgDABgCAHIgCAFQgBAEgCADg");
	this.shape_100.setTransform(596.6,435.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#182036").s().p("AApArQgUgRgYgTIgBAAIgIgHQgPgKgWgUIgBgCQABgFAFgFIBfBTQgDACgEAAIgDAAg");
	this.shape_101.setTransform(595.8,436.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#1F2C4A").s().p("AgdAbIgsgqIADgLQByAFAcAnIADAAIhUAIIgTABg");
	this.shape_102.setTransform(605,435.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#414B4F").s().p("ACnVlQATgUDki+IAAgTIAvAOIk5EAQgIgPAbgagEgwuASCIGhpIIAjAMIgaAkIgJAMIiNDBIgIALIgXAfIgNASIhwCZIgWAfIhLBngAPWN6IgCgCIAAgBIgNgXIgJgUIgBgEIgBgBIgCgGQgHgVADgDIAcgBIAOgBIAjgDIBDgFIAdgCQBbgHAUgEITKiTQAFgCAHACIABABIAFACIAJAHI1/DjIgqAGIg3AJgEgkkABRIgGgFQAmgxAkgzQAqg8BPiGIAGgKQgHAigcA3IiaDhgA0DrEQBNAADKggICbgcIAEAFIANAOIk1AqQgnAGgjAAQglAAgfgHgAAOuVIgDgEINIiHIAAAAMAjZgFtIADAbIoDBWIlRA4IkgAwIxoC9IssCHg");
	this.shape_103.setTransform(510.6,311.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#C4C4C4").s().p("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");
	this.shape_104.setTransform(534.7,306);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#7A858D").s().p("Egw3AUEIGSpFIAPAGImWJHgEglAAC+QAtg9AshDQArhAAYgxQADAGAFAAIAEABQAFgBAGgGQgjA5grBCQgrBDgvA9IgLgKgAx5qBIATgCIADAAIAzgFQA/gGBbgOIAlgFIABAAIAIALIiWASIhpAKQgFgFgNgCgAAAspIgFgIIfakuIASgDIAAAAIAWgDID3gmIFCgxIAEgBIH+hOIAAAGIn+BRIlIAzIkQAqQpEBao9BWQmyBBmvA/g");
	this.shape_105.setTransform(509.3,297.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#4A5B67").s().p("EgwyAUFIGWpIIAXAJImhJIgEgkiADXIgZgWQAvg+ArhDQArhAAjg7QAGgGAJgNIADgGIAIgOIABgBIAAgBQAKgYgBgUIgBgHIAHAHIACACIADADIAFAFQAMAOgHAgIgFAKQhQCEgqA9QgjA0gmAxIAAgBgA0Fo4IgSgBIgDgBIgIgBQg4gMgLgoIgBgIQABgMAHgHIAEgDIAEgCQAUAPBAAFIAAADIAAADIACADQAFALASAJQAZALAjgDIAUgEQArgJAIgNIABgFIAAgDQgBgGgHgEIBpgKICWgSIADADIABABQAQAUARASIibAcQjKAghOABIgJgBgAARsQIgFgFIgQgZQGtg/GyhCQI9hWJEhZIEQgrIFIgzIH+hRIABAMMgjYAFtIAAAAItICHg");
	this.shape_106.setTransform(509.9,297.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#D0D0D0").s().p("AAAAOIgWgeIgEgmIAJAQIAUAlIAJANIAGALQAJARAAAJQABAEgCACIgagpg");
	this.shape_107.setTransform(518.9,313.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#868686").s().p("A4RM3IgHgIIgJgKIgBgBQgmgsgQgOIgVgQQgegVg7gjIgogWIgOgHQgcgPAFAJQgHgLAAgGQABgEAdALIAMAFIAnARQAJADAJAFQBEAgAcAXIABABIAEAFQAMAKAdAlIAXAdIAIALIAFAeIgMgOgAzXKuIgHgIIgaghIgGgIQgtg2gRgRIgTgQQgigbhNgxIg1ggQgqgZAGAMQgJgOACgGQABgHA5AcIAkARQAMAFAJAFQBQAqAhAdIAEAFIACACQANANAiAtIAeAqIATAbIABAeIgEgGgAtqIRIgaghIgJgLQgggpgOgOQgOgOgmgbIg/gsQhYg7AIARQgHgNABgGQABgIBUAsIATAKQAxAbAdAWIAWARIAFAGQAMAMAdApIARAYIATAcIAEAhIgIgLgA2yGEIgkgIQg6gOgugPIgPgbIgGgJIgggzQgGgRAGgFICFBTIBGBBgAJphCIgWgiQglg2gRgTQgTgUg7gvIglgeQhahEAJAUQgIgPADgGQACgJBUA0QALAFAIAHIAtAeQAmAZATAUIAFAIQALANAdAtIAeA0IAEAnIgJgOgASLlAIgGgKIgTggIgJgPQgkg7gQgUQgJgKgQgQQgfgeg7g0IgbgWQg/gzAIARQgIgPACgHQADgIBUA6IACABQALAGAIAHQBJAzAeAiIABACIAEAGQALAOAbAxIAdA3IAJASIgBAgIgCgDgALuoKIgTgHIgEgCIAAAAIgygUIgKgcIAJgRIAzAgIAAAAIBkBDgAcSosIgDgFIgGgIIgHgNIgFgIIgDgEQgbgvgOgRQgKgLgUgSIgSgSQgagYglggIgggbQg0gqAGAQQgGgPABgGQADgIBHAyIALAGQAKAGAJAHQAvAiAcAaQANALAJAKIAFAHQAKAOAaAvIANAYIADAFIAJASIABAmIgJgQg");
	this.shape_108.setTransform(453.9,317.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#F3F3F3").s().p("EgxLATUIAdgSIASARQAGAHgJAHIgKAFgEglHAMsIgFgdIABAAIAGAJIALANIAaAiIAGAJQAKANABAIQABADgBADIg4g/gEggVAKbIgBgeIAGAJIAFAIIAYAiIAHALQALAPABAKQABAEgBADIg1hAgA6kIDIgFggIANASIAaAnIAHAKQAJAPABAJQABAEgBACIgzhBgAFLlVIABghIAHAOIAGAKIARAiIAFALQAJASAAAJQAAAFgCACIgrhGgAPZo1IgBgmIAFALIAEAGIAfA8IAFALQAIARAAAJQABAEgCACIgzhSgEAwfgTQIgWgFIAigKIAVgGIgGAKIASAWQAAALgCAEQgEAGgOgBg");
	this.shape_109.setTransform(537.3,319.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#2E3941").s().p("AhNAGIAAgCQACgEAJgDIAEgBIBygFQAMADAGAEQAHACABAGQgVgHg7ABQg9AAgOAKIAAgEg");
	this.shape_110.setTransform(389.4,233.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#1E252A").s().p("AoZElQgFAAgDgGQAKgUAHgQIABgBIgBAAIADgGQAHgVAEgQIABgKIABgPIABgBQADgEACgBIASASIABAHQACAVgKAYIgBABIAAABIgIAOIgDAGQgJANgHAGQgFAGgFABIgEgBgAGekCQgTgJgFgLIgBgDQAOgKA9gCQA9gBAVAJIAAAEIgCAFQgHANgrAJIgUAEIgQABQgZAAgTgJg");
	this.shape_111.setTransform(342.6,263.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#52636F").s().p("AgwgHQAIgDALAAIAIADIAJADQALADAYABIAaABIgEABQgJADgCAGQg/gFgTgNg");
	this.shape_112.setTransform(378.1,233.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#151515").s().p("AzMK0QgWhDAwhLQAbgrAggXQAOgJAOgGIADgBIADAAIAAgBIAOgFIABABIAWgGQAGAzgdBLQgfBJhkAqgAP+nWQgLhMBChJQAmgqAmgSQAQgHARgEIAEgBIADAAIABgBIAQgCIAAAAIAagDQgDA6guBLQguBLh2AZg");
	this.shape_113.setTransform(329,258.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#E9E9EC").s().p("AgPADIgBAAIgDgCIgNgEIgLgFIgYgKIgbgLQANgGAOgDIABgBIAKgCQAVgFAXAAQA9gBAqAjIAEALIgCANQgCAMgFAKQgFAKgHADQgXgNhCgfg");
	this.shape_114.setTransform(245.7,299.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#ABACAC").s().p("A01NcQgOgFgygeIgSgLIgUgMIgKgHIgJgGIgQgMIgRgNIgEgEIgqgmIgmgkIgGgHQgrgpgVgYIgLgOIAAgCIAAAAQgFgJAcAPIAOAHIAoAWQA7AjAeAVIAVAQQAQAOAmAsIABABIAJAKIAHAIIAMAOIA4A/QAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgDAAgAwILLQgQgGg7gmIgJgGIgMgIIgigYIgegWIgTgSIgEgEIgqgoIgyg0IgHgIQgrgtgYgdIgTgYIAAgCIAAgBQgGgMAqAZIA1AgQBNAxAiAbIATAQQARARAtA2IAGAIIAaAhIAHAIIAEAGIA1BAQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgFgBgAqYI0QgOgGg1gjIgegWIgugjIgRgQIgEgDQgpgqgmgpIgCgDIgHgHQg5g+gRgcIAAgCIgBAAQgIgRBYA7IA/AsQAmAbAOAOQAOAOAgApIAJALIAaAhIAIALIAzBBIgDABIgFgBgAzGFrIhDgOIhGhBIiFhTQADgCAHABIAYADQAFgBgHgKIgXgoQgFgMAEgBIAPAIIAAgBIgPgSQgTgZgUgVIg7hBQAZAHAOAOQA+A3BLBIQBYBUA9A+QAgAfAXAZgAM7gUIgNgIQgTgMgjgcIgVgQIgsgmIgMgKIgQgTIgEgEQgrgxglguIgGgHIAAgBQg5hFgRgfIABgBQgJgUBaBEIAlAeQA7AvATAUQARATAlA2IAWAiIAJAOIAXAgIAcApQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgGgBgA8mjlQgpgjhAABQgXABgVAEIgKACIAAABQgOADgNAGIgMgFQAJgFASgGIAGgCIADgBIADAAIABgBQASgEAUgCQBKgHAuAoQAFAGgBAPIgEgLgAVOkgQgPgIg0guIgJgHIgIgHIghgeIgbgbIgRgUIgDgFQgbghgYggIgcgmIgGgJQgdgpgTgcQgQgYgHgQIABgCQgIgRA/AzIAbAWQA7A0AfAeQAQAQAJAKQAQAUAkA7IAJAPIATAgIAGAKIACADIArBHQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgHgCgAflnzQgPgIgzgsIgjgfIgDgDIgdgcIgBgBIgFgEIgPgUIgEgEQgjgsgfgrIgJgMIgGgJQgfgrgSgdIgHgJIgLgWIAAgCQgGgQA0AqIAgAbQAlAgAaAYIASASQAUASAKALQAOARAbAvIADAEIAFAIIAHANIAGAIIADAFIAJAQIAzBSQAAABgBAAQAAAAAAAAQgBAAAAAAQAAABgBAAIgFgCgAPaoaIhkhDIAAAAIgzggQAGgPABgNIgNgjIgEgKIgZg+QgFgeAUAHIADABIAaAbIAAgBQA/A9BHBsIAWAjIAFAIQAGAMgBAEIAAABQAAAFgHAAQgGAAgLgEg");
	this.shape_115.setTransform(438,321.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#606865").s().p("Egr+AJRIAIAJQgCABgDAEIgBABQAAgJgCgGgEArLgG8IAKgdIAQAXQgHABgEACQgHAFAAAJgEAnkgIMQgDgEgEgCIAIgBIAAgBICJgXIAVgFIAGgBQAZABABAQQAPgHAIgHQABgJgFgEQAjgKAVgOQAIgGAGgGIABABIACAHQgHAJgJAJIgBAAIgLALIgGAFIgEADIAAAAQgZASggANIAAAAIgPAFIAQgFIAUAUIAQAQQgUgTgUALIgRgVIAFgCIgFACIg2AKIhsATQAAgUgGgJg");
	this.shape_116.setTransform(572.6,220.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#586976").s().p("AjEDRIgCAAIg0gYIAkALIAIADIABAAQAaAEAUgEQAcgHAZgXICUijIBxh6QA3g7AegjIAMAFQgsAzgtAwIhxB6IiTCjQgaAXgcAHQgKACgMAAQgLAAgMgCg");
	this.shape_117.setTransform(595.3,331.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#BDD3E9").s().p("AgBAAIABAAIACABIgDgBg");
	this.shape_118.setTransform(566.8,360.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#B2B2B2").s().p("AL8EOQjTiajHh1Ih3hHQhGgqg0gaQmOjIlbh8Qk+hyjtglIgUgEQAigBApADIADAAQDOAqD1BRQFyB3C5BRQC4BSBBAlQBBAlDPCDQDPCACIBlQB6BaFaE0QjkjAjZieg");
	this.shape_119.setTransform(139.7,63.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#070909").s().p("AkFCkIgFgBIgFgCQgdgIgYgNQgSgLgKgLIgDgEIgBgBIAAgBIgBAAQgIgNACgSQABgKAGgJIAFgHIAAAcIgBAIQACAVAZASIAFADQAKAHALAFQANAFAPAEIAAAAQASAFAVACQA2AEApgQIAVgJQAXgPADgTIAAgGIAAgBIAAgDIgEglIAFAFQAOAOAAAOQAAAJgCAIQgGASgSAOQgTAOgZAHQgHADgkADIgaABQgcAAgTgFgACHAPQgVgBgUgFQgfgHgbgMIgBgBIgCgCQgcgWAAgmIAAgCQAAgbAQgWIAAA4IAAABIABAIQACANAHAMIAFAGQAOAPAcAKQAqANA1gGIAWgDQAsgFAhgSQATgJAPgNQAsgjgEgmIgFgzQAQAOAFAVQAKAhgZAjQgIALgIAIQgNANgPAIIgDACIgEACIgNAGQg4AYg2AFIgXABIgPAAg");
	this.shape_120.setTransform(408.6,331.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#12181C").s().p("AjrCnQgVgCgSgFIAAAAQgPgEgNgFIgMgHQgSgMgIgMIgCgNIAAgHQACgJAGgJQAMgRAagIIACAAQARgHATgDQAagEAfACIAIABQAhAEAaALQAMAFAKAGIAGAFIABABIADADQAJAMAAAMIAAABIAAAGQgDAUgXAOIgVAKQggAMgoAAIgXgBgAj4BDQgKACgJADIgBAAQgNAEgHAJQgDAFgBAFIAAADQABANAQAKQAKAGAPAEQAKADALABQAcACAVgIIAKgFQAMgIACgKIAAgDIAAAAQAAgGgFgHQgDgEgFgDIgDgDQgRgLgZgCIgEgBIgJAAQgLAAgKABgABLABQgcgIgOgPIgFgGQgCgHgBgHIgBgHQABgjAngfQAQgMASgKQAdgPAjgIIANgDQBDgLAyASQAhAMAOATQADAHABAHQAEAmgsAjQgPANgTAJQghAQgsAHIgWADQgPACgOAAQgkAAgegLgACuiEIgHABQgWAFgRAKIgOAKQgWARAAASIAAAAIAAAFQABAKAHAHQAIAIAPAFQAXAJAdgDIAMgCQAXgEASgJQAKgGAJgGQAZgUgDgVQgCgVgdgKQgQgGgUAAQgNAAgPADg");
	this.shape_121.setTransform(408.9,330.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#121927").s().p("AjOBsIgIgBIgKgFQgHgEAAgFIAAgCIACgDQACgEAGgCIAAAAIAIgCQAFgBAHABIACAAQAKABAHAFIABABIAEADIACAFIgBABQAAAEgFADIgEADQgHACgIAAIgGAAgAC1hJQgFgCgDgDQgCgCgBgDIAAgCIAAAAQAAgGAIgGIADgCQAHgFAJgCIACAAQANgDAJAEQAKADABAHQABAIgIAGQgEAEgGACIgMADIgEABIgFABQgHAAgGgDg");
	this.shape_122.setTransform(406.9,331.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#B8B8B8").s().p("AxdGUIhAghQgGgDgDgFIE5kBIA6AQQBdAZBaASQBAAOA+AKQmrChhoApIghANQgKAGgLAAQgKAAgMgGgAiHAnIhUhIQhNhHghghIgagdIA3gJIAqgHIV9jjQANALANAVIACADQAUAjgFAPIhgAbIy/FRIgFABIgFACIgEgEg");
	this.shape_123.setTransform(644.6,417.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,1.9,874.1,462);


(lib.point_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.point("synched",0);
	this.instance.setTransform(-35.8,1.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape.setTransform(184.4,3.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgLAAQgKAAgHAHg");
	this.shape_1.setTransform(175,3.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgaA7QgLgIABgPIAPACQABAHAEAEQAGAEAKAAQAJAAAHgEQAFgFADgIQABgEAAgQQgLAMgOAAQgTAAgKgOQgLgOAAgRQAAgNAFgMQAFgLAJgGQAKgGALAAQAQAAAKANIAAgLIAPAAIAABPQAAAVgFAKQgFAJgJAFQgKAFgMAAQgQAAgKgHgAgQgrQgIAIAAARQAAASAIAHQAHAIAJAAQALAAAHgIQAIgHAAgSQAAgRgIgIQgIgJgKAAQgJAAgHAJg");
	this.shape_2.setTransform(164.7,5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_3.setTransform(155,3.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAJgDIAAgEQAAgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAEAEACAGIABAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgQACg");
	this.shape_4.setTransform(145,3.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgFQgGgGgJAAQgFAAgGAEQgGADgDAHQgDAEAAALIAAAzIgPAAIAAh/IAPAAIAAAuQAMgMAOAAQALAAAHADQAIAEADAIQAEAHgBAMIAAA7g");
	this.shape_5.setTransform(135,1.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_6.setTransform(125.8,3.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_7.setTransform(111.8,3.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgGBAIAAhbIAOAAIAABbgAgGgtIAAgSIAOAAIAAASg");
	this.shape_8.setTransform(105,1.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgbA7QgKgIAAgPIAQACQABAHAEAEQAGAEAKAAQAKAAAFgEQAGgFACgIQABgEAAgQQgKAMgOAAQgTAAgKgOQgLgOAAgRQABgNAEgMQAFgLAJgGQAKgGALAAQAQAAAKANIAAgLIAOAAIAABPQAAAVgEAKQgFAJgJAFQgKAFgMAAQgRAAgKgHgAgQgrQgHAIAAARQAAASAHAHQAHAIAJAAQALAAAIgIQAHgHAAgSQAAgRgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_9.setTransform(97.7,5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_10.setTransform(88,3.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgGBAIAAh/IANAAIAAB/g");
	this.shape_11.setTransform(81,1.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgMgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_12.setTransform(69,3.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AATBAIgdgwIgLALIAAAlIgQAAIAAh/IAQAAIAABHIAjgjIAUAAIgiAhIAmA6g");
	this.shape_13.setTransform(60.1,1.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAHgEAEgHQACgFAAgLIAAgFQgIADgPACg");
	this.shape_14.setTransform(50,3.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAIAAAJAFIgFAPQgHgEgFAAQgGAAgCADQgDADgCAGQgDAIAAAKIAAAvg");
	this.shape_15.setTransform(42.7,3.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgYA0IAAALIgPAAIAAh/IAQAAIAAAuQAKgMANAAQAJgBAIAEQAHADAFAHQAFAGADAJQADAHAAAKQAAAYgMANQgMANgQAAQgPAAgJgNgAgRgJQgHAJAAAPQAAASAEAHQAIAMAMAAQAJAAAHgJQAIgJAAgSQAAgQgHgJQgIgJgJAAQgJAAgIAJg");
	this.shape_16.setTransform(34.2,1.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgLAAgPQAAgNAFgKQAFgLAJgHQAJgFALAAQAHgBAGAEQAHAEAFAFIAAguIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgPgJQgIAJAAAQQABASAHAJQAIAJAIAAQAKAAAIgJQAGgIABgSQgBgRgGgJQgIgJgLAAQgIAAgHAJg");
	this.shape_17.setTransform(23.7,1.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgdAkQgMgNgBgXQABgVAMgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgLgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_18.setTransform(14,3.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_19.setTransform(4,3.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgnBBIAAh/IAOAAIAAAMQAGgHAGgEQAGgDAHAAQAMAAAKAGQAIAGAFALQAFAMAAANQAAAOgFAKQgFALgKAGQgKAGgKAAQgHAAgGgDQgGgDgFgFIAAAtgAgRgqQgIAJAAASQAAAQAHAJQAIAIAKAAQAIAAAIgJQAIgIAAgRQAAgSgIgJQgHgJgJAAQgKAAgHAKg");
	this.shape_20.setTransform(-5.7,4.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgYA9QgMgFgHgKQgGgKgBgNIAQgCQACAKAEAGQAEAHAJADQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgFQgEgEgIgDIgVgGQgRgFgHgBQgKgGgEgHQgFgHAAgIQAAgLAGgHQAFgJALgFQALgEAMAAQANAAALAEQALAFAGAJQAGAJAAALIgQABQgCgMgHgGQgIgGgOAAQgOAAgHAFQgHAGAAAJQAAAGAFAFQAFAEASAFQAVAFAIADQALAEAGAHQAFAIAAAKQAAALgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape_21.setTransform(-17.1,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.3,-10.4,229.6,24.1);


(lib.point_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.point("synched",0);
	this.instance.setTransform(-68,1.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape.setTransform(228.4,3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgVAMgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAIAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_1.setTransform(215.8,3.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_2.setTransform(208.4,1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_3.setTransform(201.3,3.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AghA/IgCgPIAJACQAFAAAEgCQADgCACgDIAFgMIABgEIgjhbIARAAIATA2IAFAUIAGgUIAUg2IAQAAIgjBdIgHAVQgEAIgGAEQgFADgIAAQgEAAgGgCg");
	this.shape_4.setTransform(192.4,5.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgYA9QgMgFgHgKQgGgKgBgNIAQgCQACAKAEAGQAEAHAJADQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgFQgEgEgIgDIgVgGQgRgFgHgBQgKgGgEgHQgFgHAAgIQAAgLAGgHQAFgJALgFQALgEAMAAQANAAALAEQALAFAGAJQAGAJAAALIgQABQgCgMgHgGQgIgGgOAAQgOAAgHAFQgHAGAAAJQAAAGAFAFQAFAEASAFQAVAFAIADQALAEAGAHQAFAIAAAKQAAALgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape_5.setTransform(181.8,1.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_6.setTransform(168.4,1.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_7.setTransform(161.3,3.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgGBAIAAhbIANAAIAABbgAgGgtIAAgSIANAAIAAASg");
	this.shape_8.setTransform(154.9,1.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_9.setTransform(148.3,3.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_10.setTransform(139.3,3.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAoBAIgOgnIg0AAIgOAnIgTAAIAxh/IARAAIA1B/gAgHgZIgPAkIAqAAIgOgiIgHgbQgCANgEAMg");
	this.shape_11.setTransform(128.9,1.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgaA7QgLgIAAgPIAQACQABAHAEAEQAGAEAKAAQAJAAAGgEQAGgFACgIQABgEAAgQQgKAMgOAAQgSAAgLgOQgLgOAAgRQABgNAEgMQAFgLAJgGQAJgGAMAAQAPAAALANIAAgLIAOAAIAABPQABAVgFAKQgFAJgJAFQgJAFgNAAQgRAAgJgHgAgQgrQgHAIAAARQAAASAHAHQAHAIAJAAQALAAAIgIQAHgHAAgSQAAgRgIgIQgHgJgLAAQgJAAgHAJg");
	this.shape_12.setTransform(113.6,5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_13.setTransform(103.8,3.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgHBAIAAhbIAPAAIAABbgAgHgtIAAgSIAPAAIAAASg");
	this.shape_14.setTransform(96.9,1.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgLAAgPQAAgNAFgKQAEgLAKgHQAJgFALAAQAHgBAHAEQAGAEAEAFIAAguIAQAAIAAB/IgPAAIAAgMQgIAOgRAAQgKAAgJgGgAgPgJQgIAJABAQQAAASAHAJQAIAJAIAAQAKAAAIgJQAGgIAAgSQAAgRgGgJQgIgJgLAAQgJAAgGAJg");
	this.shape_15.setTransform(89.5,1.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_16.setTransform(79.8,3.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAEAEACAGIABAPIAAATQAAAWABAGQAAAGADAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFABgLIAAgFQgJADgQACg");
	this.shape_17.setTransform(69.8,3.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgnBAIAAh/IARAAIAABwIA+AAIAAAPg");
	this.shape_18.setTransform(60.2,1.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_19.setTransform(42.4,3.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQADgKAEgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgGADgJAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_20.setTransform(29.8,3.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgZA3QgJgJAAgUIAQgCQAAAPAFAFQAFAGAIAAQAFAAAFgDQAEgDACgFQACgFAAgLIAAhXIARAAIAABWQAAAQgEAJQgEAJgIAFQgJAEgKAAQgQAAgJgKg");
	this.shape_21.setTransform(19.9,1.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgFgEgGAAQgGAAgCADQgDADgDAGQgCAIAAAKIAAAvg");
	this.shape_22.setTransform(8.6,3.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_23.setTransform(-0.2,3.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_24.setTransform(-7.6,1.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQADgKAEgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgGADgJAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_25.setTransform(-15.2,3.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgGAuIgjhbIAQAAIAUA2IAFATIAFgSIAVg3IAQAAIgjBbg");
	this.shape_26.setTransform(-24.6,3.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgdAkQgMgNgBgXQABgVAMgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_27.setTransform(-34.2,3.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_28.setTransform(-41.2,1.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgvBAIAAh/IBcAAIAAAQIhKAAIAAAnIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_29.setTransform(-48.9,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.5,-10.4,308.6,24.1);


(lib.point_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.point("synched",0);
	this.instance.setTransform(-29.2,1.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgUBUQAYgrAAgpQAAgPgDgRQgBgNgGgLIgOgbIALAAQAPAWAIAXQAHATAAATQAAAXgJAWQgKAWgLARg");
	this.shape.setTransform(307.9,3.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYA9QgMgFgHgKQgGgKgBgNIAQgCQACAKAEAGQAEAHAJADQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgFQgEgEgIgDIgVgGQgRgFgHgBQgKgGgEgHQgFgHAAgIQAAgLAGgHQAFgJALgFQALgEAMAAQANAAALAEQALAFAGAJQAGAJAAALIgQABQgCgMgHgGQgIgGgOAAQgOAAgHAFQgHAGAAAJQAAAGAFAFQAFAEASAFQAVAFAIADQALAEAGAHQAFAIAAAKQAAALgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape_1.setTransform(298.6,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag0BAIAAh/IAtAAQANAAAHACQAMACAHAHQALAJAFAOQAFAMAAARQAAAOgEALQgDALgGAHQgFAIgGAEQgHAEgJADQgJACgJAAgAgjAxIAcAAQAKAAAIgDQAHgCAEgEQAGgGAEgKQADgLAAgNQAAgUgHgKQgGgLgKgEQgHgCgNAAIgbAAg");
	this.shape_2.setTransform(286.4,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgvBAIAAh/IBcAAIAAAQIhKAAIAAAnIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_3.setTransform(273.9,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAJBUQgLgRgJgWQgJgWAAgXQAAgTAHgTQAIgXAOgWIAMAAIgOAaQgGAMgBANQgEARAAAPQAAApAZArg");
	this.shape_4.setTransform(264.9,3.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_5.setTransform(252.1,3.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_6.setTransform(242.6,3.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AATBAIgdgwIgLALIAAAlIgQAAIAAh/IAQAAIAABHIAjgjIAUAAIgiAhIAmA6g");
	this.shape_7.setTransform(233.7,1.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQAMAAAHADQAHACAEAFQADAEACAGIABAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgQACg");
	this.shape_8.setTransform(223.6,3.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAGAAQAHAAAJAFIgGAPQgFgEgGAAQgFAAgDADQgEADgCAGQgCAIAAAKIAAAvg");
	this.shape_9.setTransform(216.4,3.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgYA0IAAALIgPAAIAAh/IAQAAIAAAuQAKgMANAAQAJgBAIAEQAHADAFAHQAFAGADAJQADAHAAAKQAAAYgMANQgMANgQAAQgPAAgJgNgAgRgJQgHAJAAAPQAAASAEAHQAIAMAMAAQAJAAAHgJQAIgJAAgSQAAgQgHgJQgIgJgJAAQgJAAgIAJg");
	this.shape_10.setTransform(207.9,1.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgLAAgPQAAgNAFgKQAFgLAJgHQAJgFALAAQAHgBAHAEQAGAEAFAFIAAguIAPAAIAAB/IgPAAIAAgMQgJAOgQAAQgKAAgJgGgAgQgJQgGAJAAAQQgBASAIAJQAHAJAJAAQAKAAAHgJQAIgIgBgSQABgRgIgJQgHgJgLAAQgIAAgIAJg");
	this.shape_11.setTransform(197.3,1.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgeAkQgLgNAAgXQAAgVALgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgLAAQgJAAgIAHg");
	this.shape_12.setTransform(187.6,3.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgNAAQgIAAgIAHg");
	this.shape_13.setTransform(177.6,3.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgnBBIAAh/IAPAAIAAAMQAFgHAGgEQAGgDAIAAQAMAAAIAGQAKAGAEALQAFAMAAANQAAAOgFAKQgFALgKAGQgKAGgKAAQgHAAgGgDQgGgDgEgFIAAAtgAgRgqQgIAJAAASQAAAQAHAJQAIAIAKAAQAJAAAHgJQAIgIgBgRQABgSgIgJQgHgJgJAAQgJAAgIAKg");
	this.shape_14.setTransform(167.9,4.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgYA9QgMgFgHgKQgGgKgBgNIAQgCQACAKAEAGQAEAHAJADQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgFQgEgEgIgDIgVgGQgRgFgHgBQgKgGgEgHQgFgHAAgIQAAgLAGgHQAFgJALgFQALgEAMAAQANAAALAEQALAFAGAJQAGAJAAALIgQABQgCgMgHgGQgIgGgOAAQgOAAgHAFQgHAGAAAJQAAAGAFAFQAFAEASAFQAVAFAIADQALAEAGAHQAFAIAAAKQAAALgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape_15.setTransform(156.6,1.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_16.setTransform(143.2,1.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_17.setTransform(135.6,3.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_18.setTransform(125.6,3.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_19.setTransform(116.4,3.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_20.setTransform(107.1,3.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgMgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgLAAQgJAAgIAHg");
	this.shape_21.setTransform(97.6,3.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Ag0BAIAAh/IAtAAQANAAAHACQAMACAHAHQALAJAFAOQAFAMAAARQAAAOgEALQgDALgGAHQgFAIgGAEQgHAEgJADQgJACgJAAgAgjAxIAcAAQAKAAAIgDQAHgCAEgEQAGgGAEgKQADgLAAgNQAAgUgHgKQgGgLgKgEQgHgCgNAAIgbAAg");
	this.shape_22.setTransform(86.4,1.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AghA/IgCgPIAJACQAFAAAEgCQADgCACgDIAFgMIABgEIgjhbIARAAIATA2IAFAUIAGgUIAUg2IAQAAIgjBdIgHAVQgEAIgGAEQgFADgIAAQgEAAgGgCg");
	this.shape_23.setTransform(70.2,5.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_24.setTransform(61.4,3.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_25.setTransform(51.6,3.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgIAAgIAHg");
	this.shape_26.setTransform(41.6,3.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgbA7QgKgIAAgPIAQACQABAHAEAEQAGAEAKAAQAKAAAFgEQAGgFACgIQABgEAAgQQgKAMgOAAQgSAAgLgOQgKgOAAgRQgBgNAFgMQAFgLAJgGQAJgGAMAAQAPAAALANIAAgLIAPAAIAABPQgBAVgEAKQgEAJgKAFQgJAFgNAAQgQAAgLgHgAgQgrQgIAIABARQgBASAIAHQAHAIAJAAQALAAAHgIQAIgHAAgSQAAgRgIgIQgIgJgKAAQgJAAgHAJg");
	this.shape_27.setTransform(31.4,5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAGAAQAHAAAJAFIgFAPQgHgEgFAAQgFAAgDADQgEADgBAGQgDAIAAAKIAAAvg");
	this.shape_28.setTransform(24.4,3.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgNAAQgIAAgIAHg");
	this.shape_29.setTransform(15.6,3.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_30.setTransform(3.2,3.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgvBAIAAh/IBcAAIAAAQIhKAAIAAAnIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_31.setTransform(-10.1,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-10.4,344.6,24.1);


(lib.point_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.point("synched",0);
	this.instance.setTransform(-40.9,1.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgUBUQAYgrAAgpQAAgPgDgRQgBgNgGgLIgOgbIALAAQAPAWAIAXQAHATAAATQAAAXgJAWQgKAWgLARg");
	this.shape.setTransform(221.2,3.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAsBAIAAhqIglBqIgOAAIglhsIAABsIgQAAIAAh/IAZAAIAfBZIAEATIAHgUIAfhYIAXAAIAAB/g");
	this.shape_1.setTransform(210.5,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AApBAIgQgnIg0AAIgNAnIgTAAIAxh/IARAAIA1B/gAgIgZIgNAkIApAAIgOgiIgHgbQgCANgFAMg");
	this.shape_2.setTransform(197,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgnBAIAAh/IARAAIAABwIA+AAIAAAPg");
	this.shape_3.setTransform(186.3,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAJBUQgLgRgJgWQgJgWAAgXQAAgTAHgTQAIgXAOgWIAMAAIgOAaQgGAMgBANQgEARAAAPQAAApAZArg");
	this.shape_4.setTransform(178.2,3.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAGAAQAHAAAJAFIgGAPQgFgEgGAAQgFAAgDADQgEADgCAGQgCAIAAAKIAAAvg");
	this.shape_5.setTransform(167.7,3.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_6.setTransform(158.9,3.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgHBAIAAhbIAOAAIAABbgAgHgtIAAgSIAOAAIAAASg");
	this.shape_7.setTransform(152,1.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgMIAOAAIAAgKQAAgKACgEQACgHAGgDQADgEALAAIAPACIgCANIgKgBQgHAAgDAEQgDADAAAIIAAAJIASAAIAAAMIgSAAIAABPg");
	this.shape_8.setTransform(147.9,1.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgHBAIAAhbIAOAAIAABbgAgHgtIAAgSIAOAAIAAASg");
	this.shape_9.setTransform(143,1.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgLAAgPQAAgNAFgKQAFgLAJgHQAJgFALAAQAHgBAGAEQAHAEAEAFIAAguIAQAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgPgJQgIAJAAAQQABASAHAJQAIAJAIAAQAKAAAIgJQAGgIABgSQgBgRgGgJQgIgJgLAAQgJAAgGAJg");
	this.shape_10.setTransform(135.6,1.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_11.setTransform(125.9,3.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAtBAIAAhqIgmBqIgNAAIglhsIAABsIgRAAIAAh/IAaAAIAeBZIAEATIAHgUIAfhYIAXAAIAAB/g");
	this.shape_12.setTransform(113.5,1.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_13.setTransform(95.9,3.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgLAAgPQAAgNAFgKQAFgLAJgHQAJgFALAAQAHgBAHAEQAGAEAFAFIAAguIAPAAIAAB/IgPAAIAAgMQgJAOgQAAQgKAAgJgGgAgQgJQgGAJgBAQQAAASAIAJQAHAJAJAAQAKAAAHgJQAIgIgBgSQABgRgIgJQgHgJgLAAQgIAAgIAJg");
	this.shape_14.setTransform(85.6,1.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_15.setTransform(75.9,3.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_16.setTransform(68.5,1.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgGBAIAAhbIANAAIAABbgAgGgtIAAgSIANAAIAAASg");
	this.shape_17.setTransform(64,1.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_18.setTransform(59.5,1.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_19.setTransform(54.5,1.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAoBAIgPgnIg0AAIgNAnIgTAAIAxh/IARAAIA1B/gAgHgZIgPAkIAqAAIgOgiIgHgbQgCANgEAMg");
	this.shape_20.setTransform(46,1.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgbA7QgKgIAAgPIAQACQABAHAEAEQAGAEAKAAQAKAAAFgEQAGgFACgIQABgEAAgQQgKAMgOAAQgTAAgKgOQgLgOAAgRQABgNAEgMQAFgLAJgGQAKgGALAAQAQAAAKANIAAgLIAOAAIAABPQAAAVgEAKQgFAJgJAFQgKAFgMAAQgRAAgKgHgAgQgrQgHAIAAARQAAASAHAHQAHAIAJAAQALAAAIgIQAHgHAAgSQAAgRgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_21.setTransform(30.7,5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_22.setTransform(20.9,3.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgHBAIAAhbIAPAAIAABbgAgHgtIAAgSIAPAAIAAASg");
	this.shape_23.setTransform(14,1.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgLAAgPQAAgNAFgKQAFgLAJgHQAJgFALAAQAHgBAHAEQAGAEAEAFIAAguIAQAAIAAB/IgPAAIAAgMQgIAOgRAAQgKAAgJgGgAgQgJQgGAJAAAQQgBASAIAJQAIAJAIAAQAKAAAHgJQAIgIgBgSQABgRgIgJQgHgJgLAAQgIAAgIAJg");
	this.shape_24.setTransform(6.6,1.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_25.setTransform(-3.1,3.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQAMAAAHADQAHACADAFQAEAEACAGIABAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgQACg");
	this.shape_26.setTransform(-13.1,3.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgnBAIAAh/IARAAIAABwIA+AAIAAAPg");
	this.shape_27.setTransform(-22.7,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.4,-10.4,269.6,24.1);


(lib.point_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.point("synched",0);
	this.instance.setTransform(-62.1,1.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgUBUQAYgrAAgpQAAgPgDgRQgBgNgGgLIgOgbIALAAQAPAWAIAXQAHATAAATQAAAXgJAWQgKAWgLARg");
	this.shape.setTransform(212.9,3.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AApBAIgQgnIg0AAIgNAnIgTAAIAxh/IARAAIA1B/gAgIgZIgNAkIApAAIgOgiIgHgbQgCANgFAMg");
	this.shape_1.setTransform(203.7,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgnBAIAAh/IARAAIAABwIA+AAIAAAPg");
	this.shape_2.setTransform(193,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAsBAIAAhqIglBqIgOAAIglhsIAABsIgQAAIAAh/IAZAAIAfBZIAEATIAHgUIAfhYIAXAAIAAB/g");
	this.shape_3.setTransform(180.2,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAJBUQgLgRgJgWQgJgWAAgXQAAgTAHgTQAIgXAOgWIAMAAIgOAaQgGAMgBANQgEARAAAPQAAApAZArg");
	this.shape_4.setTransform(169.9,3.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_5.setTransform(156.7,3.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_6.setTransform(146.7,3.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgHBAIAAhbIAOAAIAABbgAgHgtIAAgSIAOAAIAAASg");
	this.shape_7.setTransform(139.7,1.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_8.setTransform(135.3,1.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHADgGQADgGAFgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgGAEQgFAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQALAAAIADQAHACAEAFQADAEABAGIACAPIAAATQAAAWABAGQABAGACAFIgQAAQgDgFAAgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgCADgBAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgPACg");
	this.shape_9.setTransform(127.7,3.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgHBAIAAhbIAOAAIAABbgAgHgtIAAgSIAOAAIAAASg");
	this.shape_10.setTransform(120.7,1.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgGAuIgjhbIAQAAIAUA2IAFATIAFgSIAVg3IAQAAIgjBbg");
	this.shape_11.setTransform(114.2,3.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgVAMgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAIAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_12.setTransform(104.7,3.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_13.setTransform(97.7,1.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgGBAIAAh/IANAAIAAB/g");
	this.shape_14.setTransform(93.7,1.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AApBAIgQgnIg0AAIgNAnIgTAAIAxh/IARAAIA1B/gAgIgZIgNAkIApAAIgNgiIgIgbQgCANgFAMg");
	this.shape_15.setTransform(85.7,1.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgLAAgPQAAgNAFgKQAFgLAJgHQAJgFALAAQAHgBAGAEQAHAEAEAFIAAguIAQAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgPgJQgIAJAAAQQABASAHAJQAIAJAIAAQAKAAAIgJQAGgIABgSQgBgRgGgJQgIgJgLAAQgJAAgGAJg");
	this.shape_16.setTransform(70.4,1.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHADgGQADgGAGgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgFAEQgGAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACADAFQAFAEAAAGIABAPIAAATQAAAWABAGQABAGAEAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgDAFQgJACgEACQgEABgDAEQgBADgBAEQABAHAEAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgQACg");
	this.shape_17.setTransform(60.7,3.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_18.setTransform(50.7,3.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgnBAIAAh/IARAAIAABwIA+AAIAAAPg");
	this.shape_19.setTransform(41,1.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAGAAQAHAAAJAFIgFAPQgHgEgFAAQgFAAgDADQgEADgBAGQgDAIAAAKIAAAvg");
	this.shape_20.setTransform(28.4,3.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgNAAQgIAAgIAHg");
	this.shape_21.setTransform(19.7,3.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgGAuIgjhbIAQAAIAUA2IAFATIAFgSIAVg3IAQAAIgjBbg");
	this.shape_22.setTransform(10.2,3.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_23.setTransform(0.6,3.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_24.setTransform(-9.3,3.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_25.setTransform(-19.3,3.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHADgGQADgGAGgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACADAFQAFAEAAAGIABAPIAAATQAAAWABAGQABAGAEAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgDAFQgJACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgQACg");
	this.shape_26.setTransform(-29.3,3.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAtBAIAAhqIgmBqIgNAAIglhsIAABsIgRAAIAAh/IAaAAIAeBZIAEATIAHgUIAfhYIAXAAIAAB/g");
	this.shape_27.setTransform(-41.8,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.6,-10.4,282.6,24.1);


// stage content:
(lib.dif05fbp03 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{s1:0,s2:431,s3:576,s4:946});

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
	this.frame_430 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
	}
	this.frame_575 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
	}
	this.frame_945 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
	}
	this.frame_1082 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(430).call(this.frame_430).wait(145).call(this.frame_575).wait(370).call(this.frame_945).wait(137).call(this.frame_1082).wait(1));

	// prot
	this.prot = new lib.prot();
	this.prot.setTransform(500,275,1,1,0,0,0,500,275);

	this.timeline.addTween(cjs.Tween.get(this.prot).wait(1083));

	// Layer 8
	this.instance = new lib.point_5("synched",0);
	this.instance.setTransform(603.7,363.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(404).to({_off:false},0).to({alpha:1},5).wait(674));

	// Layer 7
	this.instance_1 = new lib.point_4("synched",0);
	this.instance_1.setTransform(635.9,339.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(370).to({_off:false},0).to({alpha:1},5).wait(708));

	// Layer 6
	this.instance_2 = new lib.point_3("synched",0);
	this.instance_2.setTransform(597.1,314.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(323).to({_off:false},0).to({alpha:1},5).wait(755));

	// Layer 5
	this.instance_3 = new lib.point_2("synched",0);
	this.instance_3.setTransform(608.8,289.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(282).to({_off:false},0).to({alpha:1},5).wait(796));

	// Layer 4
	this.instance_4 = new lib.point_1("synched",0);
	this.instance_4.setTransform(630,263.9);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(242).to({_off:false},0).to({alpha:1},5).wait(836));

	// t
	this.instance_5 = new lib.title("synched",0);
	this.instance_5.setTransform(714.9,206.9,1,1,0,0,0,164.3,34.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(126).to({_off:false},0).to({alpha:1},5).wait(952));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_30 = new cjs.Graphics().p("EhOGAq9MAAAhV6MCcNAAAMAAABV6g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(30).to({graphics:mask_graphics_30,x:500,y:275}).wait(1053));

	// plane
	this.instance_6 = new lib.B737MAX8LeftSide34Under("synched",0);
	this.instance_6.setTransform(1143.7,291,0.307,0.307,0,0,0,437.3,229.2);
	this.instance_6._off = true;

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(30).to({_off:false},0).to({x:390.3,y:-78.3},28).wait(1025));

	// controlwheel
	this.instance_7 = new lib.controlwheel("synched",0);
	this.instance_7.setTransform(286.5,286,1.057,1.057,0,0,0,301.8,222.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1083));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(467.5,275,1032.6,550);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;