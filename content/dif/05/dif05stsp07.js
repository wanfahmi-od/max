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
		{src:"images/sts01p04_plane.png", id:"sts01p04_plane"},
		{src:"images/sts01p05_throttle2.png", id:"sts01p05_throttle2"},
		{src:"images/sts01p06_controlcolumn2.png", id:"sts01p06_controlcolumn2"},
		{src:"images/sts01p07_controlcolumn2.png", id:"sts01p07_controlcolumn2"},
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



(lib.sts01p04_plane = function() {
	this.initialize(img.sts01p04_plane);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,603,183);


(lib.sts01p05_throttle2 = function() {
	this.initialize(img.sts01p05_throttle2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,364,674);


(lib.sts01p06_controlcolumn2 = function() {
	this.initialize(img.sts01p06_controlcolumn2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,134,266);


(lib.sts01p07_controlcolumn2 = function() {
	this.initialize(img.sts01p07_controlcolumn2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,174,266);


(lib.texture = function() {
	this.initialize(img.texture);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.textboxLside = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,0,3).p("AhTAXIAAA0IiYhJICYhMIAAAxIFFAAIAAAwg");
	this.shape.setTransform(-29.9,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjuACICYhMIAAAxIFFAAIAAAwIlFAAIAAA0g");
	this.shape_1.setTransform(-29.5,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.6,-8.8,50,17.2);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAIIAAgQIAQAAIAAAQg");
	this.shape.setTransform(202.6,61.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_1.setTransform(192.5,57.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHBAIAAhbIAOAAIAABbgAgHgsIAAgTIAOAAIAAATg");
	this.shape_2.setTransform(183,56.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAGAAQAHAAAJAFIgFAPQgHgEgFAAQgFAAgDADQgEADgBAGQgDAIAAAKIAAAvg");
	this.shape_3.setTransform(178.7,57.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgBA9QgFgDgCgFQgBgEAAgOIAAg0IgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_4.setTransform(172.6,56.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgMIAOAAIAAgLQAAgIACgFQACgGAGgEQAEgEAKAAIAPACIgCANIgKgBQgHAAgDADQgDAEAAAIIAAAJIASAAIAAAMIgSAAIAABPg");
	this.shape_5.setTransform(162.9,56);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_6.setTransform(155,57.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgBA9QgFgDgCgFQgBgEAAgOIAAg0IgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_7.setTransform(142.6,56.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_8.setTransform(134.9,57.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_9.setTransform(125,57.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgaA7QgLgIABgPIAPACQABAHAEAEQAGAEAKAAQAJAAAHgEQAFgFADgIQABgEAAgQQgLAMgOAAQgTAAgKgOQgLgOAAgRQAAgNAFgMQAFgLAJgGQAKgGALAAQAQAAAKANIAAgLIAOAAIAABPQABAVgFAKQgEAJgKAFQgKAFgMAAQgQAAgKgHgAgQgrQgHAIgBARQABASAHAHQAHAIAJAAQALAAAHgIQAIgHAAgSQAAgRgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_10.setTransform(109.7,59.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_11.setTransform(100,57.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgHBAIAAhbIAOAAIAABbgAgHgsIAAgTIAOAAIAAATg");
	this.shape_12.setTransform(93,56.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgdAkQgMgNgBgXQABgVAMgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAIAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_13.setTransform(86,57.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgYA0IAAALIgPAAIAAh/IAQAAIAAAuQAKgNANAAQAJAAAIAEQAHADAFAHQAFAGADAJQADAHAAAKQAAAYgMANQgMANgQAAQgPAAgJgNgAgRgIQgHAIAAAQQAAAQAEAIQAIAMAMAAQAJAAAHgJQAIgJAAgSQAAgQgHgIQgIgKgJABQgJgBgIAKg");
	this.shape_14.setTransform(76.2,56.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgIAAgIAHg");
	this.shape_15.setTransform(61,57.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_16.setTransform(51,57.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAHgEAEgHQACgFAAgLIAAgFQgIADgPACg");
	this.shape_17.setTransform(41,57.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_18.setTransform(34,56.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgnBBIAAh/IAPAAIAAAMQAEgHAHgEQAGgDAIAAQAMAAAIAGQAKAGAEALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgGAAgHgDQgHgDgEgFIAAAtgAgRgqQgIAJAAASQAAAQAIAJQAHAIAKAAQAIAAAJgJQAGgIAAgRQAAgSgGgJQgIgJgJAAQgKAAgHAKg");
	this.shape_19.setTransform(27.3,59.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAGAAQAHAAAJAFIgGAPQgFgEgGAAQgFAAgDADQgEADgCAGQgCAIAAAKIAAAvg");
	this.shape_20.setTransform(19.7,57.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgGBAIAAhbIANAAIAABbgAgGgsIAAgTIANAAIAAATg");
	this.shape_21.setTransform(14,56.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AghApQgJgIAAgLQABgHADgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAKgDAJAAQANAAAHADQAHACAEAFQADAEABAGIABAPIAAATQAAAWACAGQABAGADAFIgRAAQgDgFAAgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgDADAAAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_22.setTransform(7,57.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgLAAQgKAAgHAHg");
	this.shape_23.setTransform(713.6,35.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAWBAIAAg7QAAgKgGgFQgEgGgKAAQgFAAgHAEQgFADgDAHQgDAEAAALIAAAzIgQAAIAAh/IAQAAIAAAuQALgNAPABQALAAAHADQAIAFADAHQAEAHAAAMIAAA7g");
	this.shape_24.setTransform(703.7,34);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgNIAMAAIAAgXIANgJIAAAgIAQAAIAAANIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_25.setTransform(696.2,34.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgJQAAgKACgEQACgHAGgDQADgEALAAIAPABIgDAPIgJgCQgHABgDADQgDACAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_26.setTransform(686.6,33.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_27.setTransform(678.6,35.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgNIAMAAIAAgXIANgJIAAAgIAQAAIAAANIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_28.setTransform(666.2,34.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_29.setTransform(661.6,34);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_30.setTransform(654.6,35.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_31.setTransform(645.1,35.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgIAAgIAHg");
	this.shape_32.setTransform(635.6,35.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAGAAQAHAAAJAFIgFAPQgHgEgFAAQgFAAgDADQgEADgBAGQgDAIAAAKIAAAvg");
	this.shape_33.setTransform(628.4,35.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHADgGQADgGAGgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACADAFQAFAEAAAGIABAPIAAATQAAAWABAGQABAGAEAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgDAFQgJACgEACQgEABgDAEQgBADAAAEQAAAHAEAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgQACg");
	this.shape_34.setTransform(614.6,35.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_35.setTransform(600.1,35.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_36.setTransform(593.7,34);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_37.setTransform(582.1,35.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgIAAgIAHg");
	this.shape_38.setTransform(572.6,35.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_39.setTransform(563.4,35.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAGAAQAHAAAJAFIgFAPQgHgEgFAAQgFAAgDADQgEADgBAGQgDAIAAAKIAAAvg");
	this.shape_40.setTransform(556.4,35.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_41.setTransform(547.6,35.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgJQAAgKACgEQACgHAGgDQAEgEAKAAIAPABIgCAPIgKgCQgHABgDADQgDACAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_42.setTransform(540.6,33.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_43.setTransform(527.6,35.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_44.setTransform(515.2,35.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_45.setTransform(502.6,35.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgGBAIAAh/IAOAAIAAB/g");
	this.shape_46.setTransform(495.6,34);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_47.setTransform(488.6,35.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_48.setTransform(479.4,35.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgGBAIAAh/IANAAIAAB/g");
	this.shape_49.setTransform(467.6,34);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_50.setTransform(460.6,35.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgGgEgFAAQgGAAgCADQgDADgDAGQgCAIAAAKIAAAvg");
	this.shape_51.setTransform(453.4,35.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgNIAMAAIAAgXIANgJIAAAgIAQAAIAAANIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_52.setTransform(447.2,34.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_53.setTransform(439.6,35.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_54.setTransform(429.6,35.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_55.setTransform(420.4,35.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgaA7QgLgIABgPIAPACQABAHAEAEQAGAEAKAAQAKAAAGgEQAFgFADgIQABgEAAgQQgLAMgOAAQgTAAgKgOQgLgOAAgRQAAgNAFgMQAFgLAJgGQAKgGALAAQAQAAAKANIAAgLIAOAAIAABPQABAVgFAKQgEAJgKAFQgKAFgMAAQgQAAgKgHgAgQgrQgHAIgBARQABASAHAHQAHAIAJAAQALAAAHgIQAIgHAAgSQAAgRgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_56.setTransform(405.4,37.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_57.setTransform(395.6,35.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgHBAIAAhcIAOAAIAABcgAgHgtIAAgSIAOAAIAAASg");
	this.shape_58.setTransform(388.7,34);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_59.setTransform(382.1,35.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQAEAEAAAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAHgEAEgHQACgFAAgLIAAgFQgIADgPACg");
	this.shape_60.setTransform(372.6,35.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_61.setTransform(362.6,35.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAJAAAIAFIgFAPQgHgEgFAAQgFAAgDADQgDADgCAGQgDAIAAAKIAAAvg");
	this.shape_62.setTransform(355.4,35.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_63.setTransform(347.4,35.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_64.setTransform(337.6,35.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgGBAIAAhcIAOAAIAABcgAgGgtIAAgSIAOAAIAAASg");
	this.shape_65.setTransform(330.7,34);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgdAkQgMgNgBgXQABgVAMgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_66.setTransform(318.6,35.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAWBAIAAg7QAAgKgGgFQgEgGgKAAQgFAAgHAEQgFADgDAHQgDAEAAALIAAAzIgQAAIAAh/IAQAAIAAAuQALgNAPABQAKAAAIADQAIAFADAHQAEAHAAAMIAAA7g");
	this.shape_67.setTransform(308.7,34);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgHBAIAAhvIgrAAIAAgQIBlAAIAAAQIgrAAIAABvg");
	this.shape_68.setTransform(298.2,34);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgHAJIAAgQIAQAAIAAAQg");
	this.shape_69.setTransform(285.6,39.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgNIAMAAIAAgXIANgJIAAAgIAQAAIAAANIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_70.setTransform(280.6,34.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAWBAIAAg7QAAgKgGgFQgEgGgKAAQgFAAgHAEQgFADgDAHQgDAEAAALIAAAzIgQAAIAAh/IAQAAIAAAuQALgNAPABQALAAAHADQAIAFADAHQAEAHAAAMIAAA7g");
	this.shape_71.setTransform(273,34);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgaA7QgLgIABgPIAPACQABAHAEAEQAGAEAKAAQAJAAAHgEQAFgFADgIQABgEAAgQQgLAMgOAAQgTAAgKgOQgLgOAAgRQAAgNAFgMQAFgLAJgGQAKgGALAAQAQAAAKANIAAgLIAOAAIAABPQABAVgFAKQgEAJgKAFQgKAFgMAAQgQAAgKgHgAgQgrQgHAIgBARQABASAHAHQAHAIAJAAQALAAAIgIQAHgHAAgSQAAgRgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_72.setTransform(262.7,37.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgGBAIAAhcIANAAIAABcgAgGgtIAAgSIANAAIAAASg");
	this.shape_73.setTransform(256,34);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgGBAIAAh/IANAAIAAB/g");
	this.shape_74.setTransform(252,34);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgJQAAgKACgEQACgHAGgDQAEgEAKAAIAPABIgDAPIgJgCQgHABgDADQgDACAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_75.setTransform(247.9,33.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_76.setTransform(238,34);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_77.setTransform(231,35.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgGAuIgjhbIAQAAIAUA2IAFATIAFgSIAVg3IAQAAIgjBbg");
	this.shape_78.setTransform(221.5,35.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgdAkQgMgNgBgXQABgVAMgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgLgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_79.setTransform(212,35.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_80.setTransform(205,34);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_81.setTransform(193,35.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgGBAIAAhcIAOAAIAABcgAgGgtIAAgSIAOAAIAAASg");
	this.shape_82.setTransform(186,34);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHADgGQADgGAFgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgGAEQgFAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQALAAAIADQAHACAEAFQADAEABAGIACAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgCADgBAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgPACg");
	this.shape_83.setTransform(179,35.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgNIAMAAIAAgXIANgJIAAAgIAQAAIAAANIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_84.setTransform(171.6,34.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_85.setTransform(164,35.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgGBAIAAhcIANAAIAABcgAgGgtIAAgSIANAAIAAASg");
	this.shape_86.setTransform(157,34);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQADgKAEgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgGADgJAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_87.setTransform(150,35.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_88.setTransform(137.5,35.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_89.setTransform(120,35.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgNIAMAAIAAgXIANgJIAAAgIAQAAIAAANIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_90.setTransform(112.6,34.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_91.setTransform(100,35.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_92.setTransform(90.8,35.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgFgEgGAAQgGAAgCADQgDADgDAGQgCAIAAAKIAAAvg");
	this.shape_93.setTransform(83.7,35.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_94.setTransform(75,35.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgJQAAgKACgEQACgHAGgDQAEgEAKAAIAPABIgDAPIgJgCQgHABgDADQgDACAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_95.setTransform(67.9,33.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_96.setTransform(55,35.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_97.setTransform(42.5,35.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_98.setTransform(29.9,35.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_99.setTransform(23,34);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_100.setTransform(16,35.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_101.setTransform(6.8,35.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgGBAIAAh/IAOAAIAAB/g");
	this.shape_102.setTransform(714,11.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_103.setTransform(707,13.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAIAAAJAFIgFAPQgHgEgFAAQgGAAgCADQgDADgCAGQgDAIAAAKIAAAvg");
	this.shape_104.setTransform(699.7,13.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_105.setTransform(693.6,12.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_106.setTransform(686,13.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_107.setTransform(676,13.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_108.setTransform(666.8,13.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_109.setTransform(654.6,12.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgKQAAgIACgFQACgHAGgDQAEgEAKAAIAPABIgCAOIgKAAQgHAAgDACQgDADAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_110.setTransform(649.9,11.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AghApQgIgIgBgLQAAgHADgGQAEgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQACgKAFgGQAFgHAJgDQAKgDAJAAQAMAAAIADQAHACADAFQAFAEABAGIAAAPIAAATQAAAWABAGQABAGAEAFIgRAAQgCgFgBgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgDAFQgJACgEACQgEABgDAEQgBADAAAEQAAAHAEAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQADgFgBgLIAAgFQgIADgQACg");
	this.shape_111.setTransform(642,13.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgGBAIAAh/IANAAIAAB/g");
	this.shape_112.setTransform(630,11.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAJgDIAAgEQAAgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAFAEABAGIABAPIAAATQAAAWAAAGQABAGADAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgDAEQgBADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgQACg");
	this.shape_113.setTransform(623,13.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_114.setTransform(613,13.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_115.setTransform(603,13.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgHBAIAAhcIAOAAIAABcgAgHgsIAAgTIAOAAIAAATg");
	this.shape_116.setTransform(596,11.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_117.setTransform(591.6,12.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgHBAIAAhcIAOAAIAABcgAgHgsIAAgTIAOAAIAAATg");
	this.shape_118.setTransform(587,11.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgLAAgOQAAgOAFgKQAEgMAKgFQAJgHALAAQAHABAGADQAHADAEAHIAAgvIAQAAIAAB/IgPAAIAAgMQgIAOgRAAQgKAAgJgGgAgPgIQgIAIABARQAAARAHAJQAHAJAJAAQAKAAAIgIQAGgJAAgRQAAgSgGgIQgIgJgLAAQgJAAgGAJg");
	this.shape_119.setTransform(579.7,12);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgLAAgOQAAgOAFgKQAEgMAKgFQAJgHALAAQAHABAGADQAHADAEAHIAAgvIAQAAIAAB/IgPAAIAAgMQgIAOgRAAQgKAAgJgGgAgPgIQgIAIABARQAAARAHAJQAIAJAIAAQAKAAAIgIQAGgJAAgRQAAgSgGgIQgIgJgLAAQgJAAgGAJg");
	this.shape_120.setTransform(569.7,12);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAJgDIAAgEQAAgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAFAEABAGIABAPIAAATQAAAWAAAGQABAGADAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgDAEQgBADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgQACg");
	this.shape_121.setTransform(560,13.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AghA/IgCgPIAJACQAFAAAEgCQADgCACgDIAFgMIABgEIgjhbIARAAIATA2IAFAUIAGgUIAUg2IAQAAIgjBdIgHAVQgEAIgGAEQgFADgIAAQgEAAgGgCg");
	this.shape_122.setTransform(545.6,15.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_123.setTransform(539,11.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgnBBIAAh/IAOAAIAAAMQAFgHAHgEQAGgDAHAAQANAAAIAGQAKAGAEALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgHAAgGgDQgHgDgEgFIAAAtgAgRgqQgIAJAAASQAAAQAIAJQAHAIAKAAQAIAAAJgJQAGgIABgRQgBgSgGgJQgIgJgJAAQgJAAgIAKg");
	this.shape_124.setTransform(532.3,15.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgnBBIAAh/IAPAAIAAAMQAEgHAHgEQAGgDAIAAQAMAAAIAGQAKAGAEALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgGAAgHgDQgHgDgEgFIAAAtgAgRgqQgIAJAAASQAAAQAIAJQAHAIAKAAQAIAAAJgJQAGgIAAgRQAAgSgGgJQgIgJgJAAQgKAAgHAKg");
	this.shape_125.setTransform(522.3,15.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHADgGQADgGAFgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgGAEQgFAEgCAKIgQgCQACgKAFgGQAFgHAJgDQAJgDALAAQALAAAIADQAHACAEAFQADAEABAGIACAPIAAATQAAAWABAGQABAGACAFIgQAAQgDgFAAgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgDADAAAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgPACg");
	this.shape_126.setTransform(512,13.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_127.setTransform(497,13.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_128.setTransform(489.6,12.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgMgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgLAAQgJAAgIAHg");
	this.shape_129.setTransform(477,13.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_130.setTransform(466.9,13.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_131.setTransform(457,13.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgsIAAgTIAPAAIAAATg");
	this.shape_132.setTransform(450,11.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_133.setTransform(445.6,12.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_134.setTransform(438,13.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_135.setTransform(428,13.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_136.setTransform(418.8,13.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_137.setTransform(406.6,12.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_138.setTransform(399.4,13.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_139.setTransform(389.9,13.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_140.setTransform(377.5,13.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_141.setTransform(362.6,12.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_142.setTransform(355,13.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_143.setTransform(348,11.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgHBAIAAhcIAOAAIAABcgAgHgsIAAgTIAOAAIAAATg");
	this.shape_144.setTransform(344,11.9);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgnBBIAAh/IAOAAIAAAMQAGgHAGgEQAGgDAHAAQAMAAAKAGQAIAGAFALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgGAAgHgDQgGgDgFgFIAAAtgAgRgqQgIAJAAASQAAAQAHAJQAIAIAKAAQAIAAAIgJQAIgIAAgRQAAgSgIgJQgHgJgJAAQgKAAgHAKg");
	this.shape_145.setTransform(337.3,15.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_146.setTransform(322,13.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgGQgGgFgJAAQgFAAgHAEQgGAEgCAFQgDAFAAALIAAAzIgQAAIAAh/IAQAAIAAAvQAMgNAOgBQALAAAHAFQAIAEADAHQADAHABAMIAAA7g");
	this.shape_147.setTransform(312,11.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_148.setTransform(304.6,12.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,722.4,68.3);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAzAIIAAgQIASAAIAAAQgAgHAIIAAgQIAQAAIAAAQgAhEAIIAAgQIASAAIAAAQg");
	this.shape.setTransform(287,17.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgVAMgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAIAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_1.setTransform(273,13.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_2.setTransform(263.4,13.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAJgDIAAgEQAAgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAFAEABAGIABAPIAAATQAAAWABAGQAAAGADAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgQACg");
	this.shape_3.setTransform(254,13.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_4.setTransform(244,13.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgFgEgGAAQgGAAgCADQgDADgDAGQgCAIAAAKIAAAvg");
	this.shape_5.setTransform(236.7,13.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_6.setTransform(228.8,13.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgVAMgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAIAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_7.setTransform(219,13.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgLAAgOQAAgOAFgKQAFgMAJgFQAJgHALAAQAHABAHADQAGADAEAHIAAgvIAQAAIAAB/IgPAAIAAgMQgIAOgRAAQgKAAgJgGgAgQgIQgGAIAAARQgBARAIAJQAIAJAIAAQAKAAAHgIQAIgJgBgRQABgSgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_8.setTransform(208.7,12);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_9.setTransform(194,13.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_10.setTransform(186.6,12.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_11.setTransform(174.4,13.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgVAMgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAIAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_12.setTransform(165,13.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_13.setTransform(154.9,13.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_14.setTransform(145,13.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgHBAIAAhcIAOAAIAABcgAgHgsIAAgTIAOAAIAAATg");
	this.shape_15.setTransform(138,11.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_16.setTransform(133.6,12.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_17.setTransform(126,13.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_18.setTransform(116,13.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_19.setTransform(106.8,13.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgLAAgOQAAgOAFgKQAFgMAJgFQAJgHALAAQAHABAHADQAGADAEAHIAAgvIAQAAIAAB/IgPAAIAAgMQgIAOgRAAQgKAAgJgGgAgQgIQgGAIAAARQgBARAIAJQAIAJAIAAQAKAAAHgIQAIgJgBgRQABgSgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_20.setTransform(91.7,12);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_21.setTransform(82,13.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgeAkQgLgNAAgXQAAgVALgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgLAAQgJAAgIAHg");
	this.shape_22.setTransform(72,13.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgnBBIAAh/IAPAAIAAAMQAEgHAHgEQAGgDAIAAQALAAAJAGQAKAGAEALQAFAMAAANQAAAOgFAKQgFALgKAGQgKAGgKAAQgGAAgHgDQgHgDgDgFIAAAtgAgRgqQgIAJAAASQAAAQAIAJQAHAIAKAAQAJAAAIgJQAGgIAAgRQAAgSgGgJQgIgJgJAAQgJAAgIAKg");
	this.shape_23.setTransform(62.3,15.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_24.setTransform(52.4,13.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAGAAQAHAAAJAFIgFAPQgGgEgGAAQgFAAgDADQgEADgCAGQgCAIAAAKIAAAvg");
	this.shape_25.setTransform(45.7,13.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgGBAIAAhcIANAAIAABcgAgGgsIAAgTIANAAIAAATg");
	this.shape_26.setTransform(40,11.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQADgKAEgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgGADgJAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_27.setTransform(33,13.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_28.setTransform(18.4,13.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAoBAIgOgnIg0AAIgPAnIgSAAIAyh/IAQAAIA1B/gAgHgYIgPAjIAqAAIgNgiIgHgbQgDANgEANg");
	this.shape_29.setTransform(8,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,298.2,24.1);


(lib.prot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.texture();
	this.instance.setTransform(0,0,100,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1000,550);


(lib.numberss = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcA0QgMgQAAgkQgBgVAFgOQAFgOAJgIQAJgHANAAQAKAAAHAEQAJAEAFAIQAFAIADALQACAMAAARQAAAWgEAOQgFAOgJAIQgKAHgNAAQgRAAgLgNgAgQgqQgJAMABAeQgBAfAIALQAIAKAJAAQAKAAAIgKQAHgLAAgfQAAgegHgLQgIgKgKAAQgJAAgHAJg");
	this.shape.setTransform(27,185.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcA0QgMgQAAgkQgBgVAFgOQAFgOAJgIQAJgHANAAQAKAAAHAEQAIAEAGAIQAEAIAEALQADAMgBARQAAAWgEAOQgFAOgJAIQgJAHgOAAQgRAAgLgNgAgQgqQgJAMAAAeQAAAfAIALQAIAKAJAAQAKAAAIgKQAHgLAAgfQAAgegHgLQgIgKgKAAQgJAAgHAJg");
	this.shape_1.setTransform(17,185.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgpBAQAAgFACgGQADgIAHgJQAIgIANgLQATgRAIgJQAGgKAAgJQABgJgHgHQgHgGgKAAQgKAAgHAHQgHAHAAAMIgQgCQACgSALgKQAKgJARAAQATAAAKAKQALAKAAAQQAAAHgDAIQgEAHgGAHQgIAIgRAOIgQARQgEAEgDAEIA9AAIAAAPg");
	this.shape_2.setTransform(6.8,185.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcA0QgMgQAAgkQgBgVAFgOQAFgOAJgIQAJgHANAAQAKAAAHAEQAJAEAFAIQAFAIADALQACAMAAARQAAAWgEAOQgFAOgJAIQgKAHgNAAQgRAAgLgNgAgQgqQgJAMABAeQgBAfAIALQAIAKAJAAQAKAAAIgKQAHgLAAgfQAAgegHgLQgIgKgKAAQgJAAgHAJg");
	this.shape_3.setTransform(27,142.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgpBAQAAgFACgGQADgIAHgJQAIgIANgLQATgRAIgJQAGgKABgJQAAgJgHgHQgHgGgKAAQgKAAgHAHQgGAHgBAMIgQgCQACgSALgKQAKgJARAAQATAAAKAKQALAKAAAQQAAAHgDAIQgEAHgGAHQgIAIgRAOIgRARQgDAEgDAEIA9AAIAAAPg");
	this.shape_4.setTransform(16.8,142);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgpBAQAAgFACgGQADgIAHgJQAIgIANgLQATgRAIgJQAGgKAAgJQABgJgHgHQgHgGgKAAQgKAAgHAHQgHAHAAAMIgQgCQACgSALgKQAKgJARAAQATAAAKAKQALAKAAAQQAAAHgDAIQgEAHgGAHQgIAIgRAOIgQARQgEAEgDAEIA9AAIAAAPg");
	this.shape_5.setTransform(6.8,142);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcA0QgMgQAAgkQgBgVAFgOQAFgOAJgIQAJgHANAAQAKAAAHAEQAJAEAFAIQAFAIADALQACAMAAARQAAAWgEAOQgFAOgJAIQgKAHgNAAQgRAAgLgNgAgQgqQgJAMABAeQgBAfAIALQAIAKAJAAQAKAAAIgKQAHgLAAgfQAAgegHgLQgIgKgKAAQgJAAgHAJg");
	this.shape_6.setTransform(27,98.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AALBAIAAgfIg2AAIAAgOIA4hSIAOAAIAABSIARAAIAAAOIgRAAIAAAfgAgcATIAnAAIAAg4g");
	this.shape_7.setTransform(16.7,98);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgpBAQAAgFACgGQADgIAHgJQAIgIANgLQATgRAIgJQAGgKAAgJQABgJgHgHQgHgGgKAAQgKAAgHAHQgHAHAAAMIgQgCQACgSALgKQAKgJARAAQATAAAKAKQALAKAAAQQAAAHgDAIQgEAHgGAHQgIAIgRAOIgQARIgHAIIA9AAIAAAPg");
	this.shape_8.setTransform(6.8,98);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgcA0QgMgQAAgkQgBgVAFgOQAFgOAJgIQAJgHANAAQAKAAAHAEQAJAEAFAIQAFAIADALQACAMAAARQAAAWgEAOQgFAOgJAIQgKAHgNAAQgRAAgLgNgAgQgqQgJAMABAeQgBAfAIALQAIAKAJAAQAKAAAIgKQAHgLAAgfQAAgegHgLQgIgKgKAAQgJAAgHAJg");
	this.shape_9.setTransform(27,54.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgdAzQgMgPAAghQAAgjANgRQANgPASAAQAPAAAKAIQAKAJACAPIgQABQgDgJgDgEQgHgHgJAAQgFAAgGAEQgHAGgFAKQgFAKAAAUQAGgJAJgEQAHgEAIAAQAPAAAMALQALAKAAASQAAANgGAKQgEAKgKAGQgJAFgLAAQgTAAgMgOgAgQABQgHAIAAANQAAAIADAHQAEAIAGAEQAHADAEAAQALAAAGgIQAIgIgBgOQABgNgIgIQgGgFgMAAQgIAAgIAFg");
	this.shape_10.setTransform(17,54.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgpBAQAAgFACgGQADgIAHgJQAIgIANgLQATgRAIgJQAGgKAAgJQABgJgHgHQgHgGgKAAQgKAAgHAHQgHAHAAAMIgQgCQACgSALgKQAKgJARAAQATAAAKAKQALAKAAAQQAAAHgDAIQgEAHgGAHQgIAIgRAOIgQARIgHAIIA9AAIAAAPg");
	this.shape_11.setTransform(6.8,54.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgcA0QgMgQAAgkQgBgVAFgOQAFgOAJgIQAJgHANAAQAKAAAHAEQAJAEAFAIQAFAIADALQACAMAAARQAAAWgEAOQgFAOgJAIQgKAHgNAAQgRAAgLgNgAgQgqQgJAMABAeQgBAfAIALQAIAKAJAAQAKAAAIgKQAHgLAAgfQAAgegHgLQgIgKgKAAQgJAAgHAJg");
	this.shape_12.setTransform(27,11.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgdA2QgMgLAAgRQAAgNAGgIQAHgHAMgDQgKgDgFgHQgFgHAAgJQAAgOAKgKQAKgJAQAAQAQAAAKAKQALAJAAAPQAAAJgFAGQgFAHgJADQAMAEAGAHQAGAIAAAMQAAARgMALQgLALgTAAQgSAAgLgLgAgRAIQgIAHAAALQAAAHAEAGQADAGAGAEQAGADAGAAQALAAAHgHQAIgHAAgLQAAgMgIgHQgHgIgLAAQgKAAgHAIgAgOgtQgGAFAAAJQAAAJAGAGQAGAFAIAAQAJAAAGgFQAFgGAAgJQAAgIgGgGQgGgGgIAAQgIAAgGAGg");
	this.shape_13.setTransform(17,11.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgpBAQAAgFACgGQADgIAHgJQAIgIANgLQATgRAIgJQAGgKAAgJQABgJgHgHQgHgGgKAAQgKAAgHAHQgHAHAAAMIgQgCQACgSALgKQAKgJARAAQATAAAKAKQALAKAAAQQAAAHgDAIQgEAHgGAHQgIAIgRAOIgQARQgEAEgDAEIA9AAIAAAPg");
	this.shape_14.setTransform(6.8,11.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(2,0,0,3).p("AA7hvIh1AAAA7lHIh1AAAA7ogIh1AAAA7r4Ih1AAAA7vRIh1AAAA7IcIh1AAAA7L3Ih1AAAA7FDIh1AAAA7BoIh1AAAA7PSIh1AA");
	this.shape_15.setTransform(41.6,109.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.6,208.1);


(lib.hl1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(5,0,0,3).p("Aovv/IRfAAIAAf/IxfAAg");
	this.shape.setTransform(73.6,112.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15.1,7.3,117,210);


(lib.hl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(5,0,0,3).p("Axz6LMAjnAAAMAAAA0XMgjnAAAg");
	this.shape.setTransform(114.1,167.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,233.2,340.3);


(lib.columnbar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// outline
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,0,0,3).p("AuFhyIcLAAIAADlI8LAAg");
	this.shape.setTransform(90.3,11.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(6));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AkSCyIAAljIIlAAIAAFjg");
	var mask_graphics_1 = new cjs.Graphics().p("AknCyIAAljIJPAAIAAFjg");
	var mask_graphics_2 = new cjs.Graphics().p("Ak8CyIAAljIJ5AAIAAFjg");
	var mask_graphics_3 = new cjs.Graphics().p("AlRCyIAAljIKjAAIAAFjg");
	var mask_graphics_4 = new cjs.Graphics().p("AlmCyIAAljILNAAIAAFjg");
	var mask_graphics_5 = new cjs.Graphics().p("Al6CyIAAljIL1AAIAAFjg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:22.1,y:13.5}).wait(1).to({graphics:mask_graphics_1,x:24.2,y:13.5}).wait(1).to({graphics:mask_graphics_2,x:26.3,y:13.5}).wait(1).to({graphics:mask_graphics_3,x:28.3,y:13.5}).wait(1).to({graphics:mask_graphics_4,x:30.4,y:13.5}).wait(1).to({graphics:mask_graphics_5,x:32.5,y:13.5}).wait(1));

	// green
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33CC33").s().p("AlfBzIAAjlIK/AAIAADlg");
	this.shape_1.setTransform(35.3,11.6);

	this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(6));

	// bg
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AuFBzIAAjlIcLAAIAADlg");
	this.shape_2.setTransform(90.3,11.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,182.6,25.2);


(lib.B737MAX8RightSide = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PNG
	this.instance = new lib.sts01p04_plane();
	this.instance.setTransform(-297.8,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-297.8,-60,603,189.5);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// arrow
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,0,3).p("ABKhYIAAFrIiTAAIAAlrIhVAAICei3ICeC3g");
	this.shape.setTransform(-0.4,-6.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AhJERIAAlqIhUAAICdi3ICeC3IhUAAIAAFqg");
	this.shape_1.setTransform(-0.4,-6.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.4,-34.7,34,56.8);


(lib.bar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj4LxIAA3hIHxAAIAAXhg");
	mask.setTransform(24.9,75.4);

	// numbers
	this.instance = new lib.numberss("synched",0);
	this.instance.setTransform(26.6,65.1,1,1,0,0,0,24.3,98.9);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:32.1},5).wait(1));

	// grey
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#656565").s().p("Aj4LxIAA3hIHxAAIAAXhg");
	this.shape.setTransform(24.9,75.4);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49.9,150.8);


// stage content:
(lib.dif05stsp07 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{s1:0,s2:36});

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
	this.frame_35 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
	}
	this.frame_163 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(35).call(this.frame_35).wait(128).call(this.frame_163).wait(1));

	// prot
	this.prot = new lib.prot();
	this.prot.setTransform(500,275,1,1,0,0,0,500,275);

	this.timeline.addTween(cjs.Tween.get(this.prot).wait(164));

	// arr
	this.instance = new lib.arrow("synched",0);
	this.instance.setTransform(697.7,343.8,1,1,118.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(72).to({_off:false},0).to({alpha:1},5).wait(3).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(78));

	// hl2
	this.instance_1 = new lib.hl("synched",0);
	this.instance_1.setTransform(643.5,359.2,1,1,0,0,0,114.1,167.7);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(54).to({startPosition:0},0).to({alpha:1},5).wait(4).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(95));

	// hl
	this.instance_2 = new lib.hl1("synched",0);
	this.instance_2.setTransform(369,392.5,1,1,0,0,0,56,102.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({x:365},0).to({alpha:1},5).wait(18).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(128));

	// text2
	this.instance_3 = new lib.t2("synched",0);
	this.instance_3.setTransform(500,87.5,1,1,0,0,0,361.2,34.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(39).to({_off:false},0).to({alpha:1},5).wait(120));

	// text
	this.instance_4 = new lib.t1("synched",0);
	this.instance_4.setTransform(287.9,65.5,1,1,0,0,0,149.1,12.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(164));

	// bar
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag1BAIAAh/IAwAAQAOAAAJACQALAEAIAIQAIAJAFANQADALAAARQAAAQgDALQgGAPgIAIQgHAHgLAEQgJACgNAAgAgaArIATAAQAJgBAFgBQAGgCAEgEQAFgDACgIQACgKABgOQgBgNgCgJQgDgHgEgFQgFgEgHgCIgUgBIgLAAg");
	this.shape.setTransform(422.6,485.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgvBAIAAh/IBdAAIAAAWIhDAAIAAAcIA/AAIAAAUIg/AAIAAAkIBGAAIAAAVg");
	this.shape_1.setTransform(410.1,485.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgwBAIAAh/IBeAAIAAAWIhEAAIAAAcIA/AAIAAAUIg/AAIAAAkIBGAAIAAAVg");
	this.shape_2.setTransform(398.1,485.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgwBAIAAh/IAqAAQAVAAAIACQALADAIAJQAHALAAAPQAAAMgEAHQgFAHgGAFQgHAEgHACQgKACgPAAIgRAAIAAAwgAgWgFIAOAAQANAAAGgCQAFgCADgEQADgEAAgGQAAgHgEgFQgFgEgFgBIgRgBIgNAAg");
	this.shape_3.setTransform(386.1,485.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgjA3QgNgMgDgVIAagDQABANAIAGQAGAGALAAQAMAAAHgFQAGgGAAgHQAAgEgDgDQgCgEgIgCIgSgGQgVgFgIgFQgNgLAAgPQABgKAFgJQAGgIALgFQAKgEAOAAQAXAAAMAKQANALAAASIgaABQgCgKgFgEQgGgFgJAAQgLAAgGAFQgFADAAAFQAAAEAFAEQAFAEAQAEQAUAFAIAFQAKAEAEAHQAGAIAAAMQAAALgGAKQgHAKgLAEQgLAFgRAAQgXAAgMgLg");
	this.shape_4.setTransform(373.8,485.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAbBAIgTgcIgMgTQgEgEgEgCQgEgBgJAAIgGAAIAAA2IgaAAIAAh/IA3AAQATAAAKADQAJAEAFAJQAGAJAAAMQAAAOgIAKQgJAGgRADQAIAFAGAGQAGAGAJAPIAPAZgAgfgIIAUAAQARgBAFgBQAEgCADgEQACgDAAgGQAAgHgDgDQgEgEgGgCIgRAAIgVAAg");
	this.shape_5.setTransform(362,485.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgMBAIAAh/IAYAAIAAB/g");
	this.shape_6.setTransform(352.4,485.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAkBAIgMgdIgxAAIgLAdIgbAAIAyh/IAZAAIA0B/gAgRANIAhAAIgQgug");
	this.shape_7.setTransform(343.3,485.6);

	this.instance_5 = new lib.textboxLside("synched",0);
	this.instance_5.setTransform(463.3,391.3);

	this.instance_6 = new lib.bar("single",0);
	this.instance_6.setTransform(383.4,393.8,1,1,0,0,0,25.4,77.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6,p:{mode:"single",loop:undefined}},{t:this.instance_5},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_6,p:{mode:"synched",loop:false}},{t:this.instance_5},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},27).wait(137));

	// plane
	this.instance_7 = new lib.B737MAX8RightSide("synched",0);
	this.instance_7.setTransform(163.9,388.6,0.5,0.5,-8.2,0,0,-5,44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(85).to({startPosition:0},0).to({regX:-5.1,rotation:-23.2},6).wait(73));

	// throttle
	this.instance_8 = new lib.sts01p05_throttle2();
	this.instance_8.setTransform(770.9,126.4,0.629,0.629);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(164));

	// control
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgvBAIAAh/IBdAAIAAAWIhDAAIAAAdIA+AAIAAATIg+AAIAAAjIBGAAIAAAWg");
	this.shape_8.setTransform(668.7,507.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgmAwQgRgRAAgeQAAgfARgRQAQgSAaAAQAXAAAPAOQAJAIAEAPIgaAHQgCgKgHgGQgHgGgLAAQgMAAgJALQgJAKAAAWQAAAXAJAKQAJALAMAAQAKAAAIgGQAHgHADgPIAaAIQgGAWgOAKQgNAKgVAAQgYAAgQgSg");
	this.shape_9.setTransform(655.9,507.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAbBAIgUgcIgLgTQgEgEgEgBQgEgCgJAAIgGAAIAAA2IgaAAIAAh/IA3AAQATAAAKAEQAJADAFAJQAGAJAAALQAAAPgIAJQgJAIgRACQAJAFAFAGQAGAGAJAPIAPAZgAgfgJIAUAAQAQAAAGgBQAEgBADgEQADgEAAgGQgBgGgDgFQgEgEgGAAIgRgBIgVAAg");
	this.shape_10.setTransform(643.6,507.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgsAwQgRgRAAgeQAAgTAFgMQAFgKAIgJQAIgHAIgEQANgFAOAAQAcAAARARQARASAAAeQAAAfgRARQgRASgcAAQgcAAgQgSgAgYgfQgLALAAAUQAAAVALALQAKAMAOAAQAPAAAKgLQAKgLAAgWQAAgVgKgLQgJgLgQAAQgPAAgJAMg");
	this.shape_11.setTransform(629.5,507.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgqBAIAAh/IBWAAIAAAWIg8AAIAAAeIAzAAIAAAUIgzAAIAAA3g");
	this.shape_12.setTransform(617.2,507.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAZBAIgzhSIAABSIgYAAIAAh/IAZAAIAzBUIAAhUIAZAAIAAB/g");
	this.shape_13.setTransform(722.7,485.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAmBAIAAhjIgaBjIgXAAIgZhjIAABjIgZAAIAAh/IAnAAIAWBWIAXhWIAnAAIAAB/g");
	this.shape_14.setTransform(708.7,485.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgZA9QgJgEgGgHQgGgHgBgIQgDgKAAgWIAAhDIAaAAIAABEQAAARABAFQACAIAGAEQAGAFAJAAQALAAAGgFQAGgEABgHIABgVIAAhGIAaAAIAABCQAAAXgCAJQgCAKgGAHQgGAHgJAEQgKADgPAAQgQAAgKgEg");
	this.shape_15.setTransform(694.7,485.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgsBAIAAh/IAaAAIAABpIA/AAIAAAWg");
	this.shape_16.setTransform(683.2,485.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgsAwQgRgRAAgfQAAgRAFgOQAFgJAIgJQAIgHAJgEQAMgFAOAAQAbAAASASQARARAAAeQAAAfgRARQgRASgcAAQgcAAgQgSgAgYggQgLALABAVQgBAWALALQAKALAOAAQAPAAAKgLQAKgMAAgVQAAgVgKgLQgKgLgPAAQgOAAgKALg");
	this.shape_17.setTransform(670.3,485.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgmAwQgRgRAAgfQAAgeARgRQAQgSAaAAQAXAAAPAOQAJAIAEAQIgaAGQgCgKgHgGQgHgGgLAAQgMAAgJAKQgJALAAAWQAAAXAJALQAJAKAMAAQAKAAAIgHQAHgGADgOIAaAIQgGAUgOALQgNAKgVAAQgYAAgQgSg");
	this.shape_18.setTransform(656.7,485.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgsBAIAAh/IAaAAIAABpIA/AAIAAAWg");
	this.shape_19.setTransform(640.6,485.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgsAwQgRgRAAgfQAAgRAFgOQAFgJAIgJQAIgHAIgEQANgFAOAAQAcAAARASQARARAAAeQAAAfgRARQgRASgcAAQgcAAgQgSgAgYggQgLALAAAVQAAAWALALQAKALAOAAQAPAAAKgLQAKgMAAgVQAAgVgKgLQgJgLgQAAQgPAAgJALg");
	this.shape_20.setTransform(627.7,485.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAbBAIgUgcIgLgTQgEgEgEgCQgEgBgJAAIgGAAIAAA2IgaAAIAAh/IA3AAQATAAAKADQAJAEAFAJQAGAJAAAMQAAAOgIAKQgJAGgRADQAJAFAFAGQAFAGAKAPIAPAZgAgfgIIAUAAQAQgBAGgBQAEgCADgEQADgDAAgGQgBgHgDgDQgEgEgGgCIgRAAIgVAAg");
	this.shape_21.setTransform(614.8,485.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgMBAIAAhpIgmAAIAAgWIBlAAIAAAWIgnAAIAABpg");
	this.shape_22.setTransform(602.2,485.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAYBAIgxhSIAABSIgZAAIAAh/IAaAAIAzBUIAAhUIAXAAIAAB/g");
	this.shape_23.setTransform(590.1,485.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgsAwQgRgRAAgfQAAgRAFgOQAFgJAIgJQAIgHAJgEQAMgFAOAAQAbAAASASQARARAAAeQAAAfgRARQgRASgcAAQgcAAgQgSgAgYggQgLALABAVQgBAWALALQAKALAOAAQAPAAAKgLQAKgMAAgVQAAgVgKgLQgKgLgPAAQgOAAgKALg");
	this.shape_24.setTransform(576.7,485.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgmAwQgRgRAAgfQAAgeARgRQAQgSAaAAQAXAAAPAOQAJAIAEAQIgaAGQgCgKgHgGQgHgGgLAAQgMAAgJAKQgJALAAAWQAAAXAJALQAJAKAMAAQAKAAAIgHQAHgGADgOIAaAIQgGAUgOALQgNAKgVAAQgYAAgQgSg");
	this.shape_25.setTransform(563.1,485.6);

	this.instance_9 = new lib.sts01p06_controlcolumn2();
	this.instance_9.setTransform(577.8,191.1,0.963,0.963);

	this.instance_10 = new lib.sts01p07_controlcolumn2();
	this.instance_10.setTransform(559.6,190.6,0.967,0.967);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).to({state:[{t:this.instance_10},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},77).wait(87));

	// controlbar
	this.instance_11 = new lib.columnbar("single",0);
	this.instance_11.setTransform(643,455.3,1,1,0,0,0,90.3,11.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(85).to({mode:"synched",loop:false},0).wait(79));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(500,275,1000,550.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;