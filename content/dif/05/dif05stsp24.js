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
		{src:"images/sts01p26_plane.png", id:"sts01p26_plane"},
		{src:"images/sts01p26_throttle.png", id:"sts01p26_throttle"},
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



(lib.sts01p26_plane = function() {
	this.initialize(img.sts01p26_plane);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1497,452);


(lib.sts01p26_throttle = function() {
	this.initialize(img.sts01p26_throttle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,299);


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


(lib.point_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAJIAAgQIAQAAIAAAQg");
	this.shape.setTransform(73.3,-20.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAoBAIgOgnIg0AAIgPAnIgSAAIAyh/IAQAAIA1B/gAgHgZIgPAkIAqAAIgNgiIgHgbQgDANgEAMg");
	this.shape_1.setTransform(64.7,-26.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgfA6QgOgKgIgOQgHgQAAgRQAAgeARgSQARgSAaAAQARAAAPAJQAOAIAIAPQAHAPAAASQAAATgIAQQgIAPgOAJQgPAHgQAAQgRAAgOgIgAgdgmQgNAMAAAbQAAAYAMANQANAOARAAQATAAAMgOQANgNAAgZQAAgOgGgMQgFgMgKgGQgLgHgMAAQgQAAgNANg");
	this.shape_2.setTransform(51.7,-26.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AApBAIgPgnIg0AAIgPAnIgSAAIAyh/IAQAAIA1B/gAgIgZIgOAkIAqAAIgNgiIgHgbQgDANgFAMg");
	this.shape_3.setTransform(38.7,-26.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgLAAgPQAAgNAFgKQAEgLAKgHQAJgFALAAQAHgBAGAEQAHAEAEAFIAAguIAQAAIAAB/IgPAAIAAgMQgIAOgRAAQgKAAgJgGgAgPgJQgIAJABAQQAAASAHAJQAIAJAIAAQAKAAAIgJQAGgIAAgSQAAgRgGgJQgIgJgLAAQgJAAgGAJg");
	this.shape_4.setTransform(23.4,-26.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_5.setTransform(16.7,-26.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_6.setTransform(9.7,-24.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgFQgGgGgJAAQgFAAgHAEQgGADgCAHQgDAEAAALIAAAzIgQAAIAAh/IAQAAIAAAuQAMgMAOAAQALAAAHADQAIAEADAIQADAHABAMIAAA7g");
	this.shape_7.setTransform(-0.3,-26.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_8.setTransform(-9.9,-24.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgdAkQgMgNgBgXQABgVAMgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_9.setTransform(-19.3,-24.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAIAAAJAFIgFAPQgHgEgFAAQgGAAgCADQgDADgCAGQgDAIAAAKIAAAvg");
	this.shape_10.setTransform(-26.6,-24.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgFQgGgGgJAAQgFAAgGAEQgHADgCAHQgDAEAAALIAAAzIgPAAIAAh/IAPAAIAAAuQAMgMAOAAQAKAAAIADQAIAEADAIQADAHAAAMIAAA7g");
	this.shape_11.setTransform(-35.3,-26.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_12.setTransform(-42.7,-26.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgdAkQgMgNgBgXQABgVAMgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_13.setTransform(-55.3,-24.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAWBAIAAg7QAAgKgGgFQgEgGgKAAQgFAAgHAEQgFADgDAHQgDAEAAALIAAAzIgQAAIAAh/IAQAAIAAAuQALgMAPAAQAKAAAIADQAIAEADAIQAEAHAAAMIAAA7g");
	this.shape_14.setTransform(-65.3,-26.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_15.setTransform(-72.7,-26.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_16.setTransform(-82.7,-26.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_17.setTransform(-89.9,-24.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQADgKAEgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgGADgJAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_18.setTransform(-99.3,-24.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgnBBIAAh/IAOAAIAAAMQAGgHAGgEQAGgDAHAAQAMAAAKAGQAIAGAFALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgGAAgHgDQgGgDgEgFIAAAtgAgRgqQgIAJAAASQAAAQAHAJQAIAIAKAAQAIAAAIgJQAIgIgBgRQABgSgIgJQgHgJgJAAQgKAAgHAKg");
	this.shape_19.setTransform(-109,-23);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_20.setTransform(678.7,-46.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_21.setTransform(669.1,-46.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQALAAAIADQAHACADAFQAEAEACAGIABAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgQACg");
	this.shape_22.setTransform(659.7,-46.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgNAAQgIAAgIAHg");
	this.shape_23.setTransform(649.7,-46.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAGAAQAHAAAJAFIgGAPQgFgEgGAAQgFAAgDADQgEADgBAGQgDAIAAAKIAAAvg");
	this.shape_24.setTransform(642.4,-46.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_25.setTransform(634.5,-46.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_26.setTransform(624.7,-46.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgHBAIAAhcIAOAAIAABcgAgHgtIAAgSIAOAAIAAASg");
	this.shape_27.setTransform(617.7,-48.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_28.setTransform(605.7,-46.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_29.setTransform(598.3,-48.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_30.setTransform(586.1,-46.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQALAMABAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_31.setTransform(576.7,-46.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_32.setTransform(566.6,-46.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_33.setTransform(556.7,-46.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgGBAIAAhcIAOAAIAABcgAgGgtIAAgSIAOAAIAAASg");
	this.shape_34.setTransform(549.7,-48.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_35.setTransform(545.3,-48.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_36.setTransform(537.7,-46.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_37.setTransform(527.7,-46.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_38.setTransform(518.5,-46.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAoBAIgOgnIg0AAIgOAnIgTAAIAxh/IARAAIA1B/gAgHgYIgPAjIAqAAIgOghIgHgbQgCAMgEANg");
	this.shape_39.setTransform(503.7,-48.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgfA5QgOgJgIgPQgHgPAAgRQAAgeARgSQARgSAaAAQARAAAPAIQAOAJAIAPQAHAQAAARQAAAUgIAPQgIAQgOAHQgPAIgQAAQgRAAgOgJgAgdgmQgNANAAAbQAAAXAMANQANANARAAQATAAAMgNQANgOAAgYQAAgOgGgMQgFgMgKgGQgLgGgMAAQgQAAgNAMg");
	this.shape_40.setTransform(490.7,-48.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAoBAIgOgnIg0AAIgPAnIgSAAIAyh/IAQAAIA1B/gAgHgYIgPAjIAqAAIgNghIgHgbQgDAMgEANg");
	this.shape_41.setTransform(477.7,-48.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgKQAAgIACgFQACgHAGgDQADgEALAAIAPABIgDAPIgJgBQgHAAgDACQgDADAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_42.setTransform(465.6,-48.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_43.setTransform(460.7,-48.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AghA/IgCgPIAJACQAFAAAEgCQADgCACgDIAFgMIABgEIgjhbIARAAIATA2IAFAUIAGgUIAUg2IAQAAIgjBdIgHAVQgEAIgGAEQgFADgIAAQgEAAgGgCg");
	this.shape_44.setTransform(449.3,-44.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_45.setTransform(442.7,-48.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgGBAIAAh/IAOAAIAAB/g");
	this.shape_46.setTransform(438.7,-48.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQADgKAEgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgGADgJAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_47.setTransform(431.7,-46.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_48.setTransform(424.3,-48.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_49.setTransform(416.7,-46.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgNAAQgIAAgIAHg");
	this.shape_50.setTransform(406.7,-46.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_51.setTransform(394.2,-46.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_52.setTransform(381.7,-46.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgFgEgGAAQgGAAgCADQgDADgDAGQgCAIAAAKIAAAvg");
	this.shape_53.setTransform(374.4,-46.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_54.setTransform(366.5,-46.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_55.setTransform(356.7,-46.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgGBAIAAhcIANAAIAABcgAgGgtIAAgSIANAAIAAASg");
	this.shape_56.setTransform(349.7,-48.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgLAAgOQAAgOAFgKQAFgMAJgFQAJgHALAAQAHABAHADQAGADAEAHIAAgvIAQAAIAAB/IgPAAIAAgMQgIAOgRAAQgKAAgJgGgAgQgIQgGAIAAARQgBARAIAJQAIAJAIAAQAKAAAHgIQAIgJgBgRQABgSgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_57.setTransform(337.4,-48.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_58.setTransform(327.7,-46.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgLAAgOQAAgOAFgKQAFgMAJgFQAJgHALAAQAHABAHADQAGADAFAHIAAgvIAPAAIAAB/IgPAAIAAgMQgJAOgQAAQgKAAgJgGgAgQgIQgGAIgBARQAAARAIAJQAHAJAJAAQAKAAAHgIQAIgJgBgRQABgSgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_59.setTransform(317.4,-48.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgTA7QgKgGgFgLQgFgLAAgOQAAgOAFgKQAEgMAKgFQAJgHALAAQAHABAHADQAGADAFAHIAAgvIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgQgIQgGAIgBARQAAARAIAJQAHAJAJAAQAKAAAHgIQAIgJAAgRQAAgSgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_60.setTransform(307.4,-48.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AghApQgJgIAAgLQABgHADgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQADgKAEgGQAFgHAJgDQAKgDAJAAQANAAAHADQAHACAEAFQADAEABAGIABAPIAAATQAAAWACAGQABAGACAFIgQAAQgDgFAAgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgDADAAAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_61.setTransform(297.7,-46.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_62.setTransform(282.7,-46.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgFgEgGAAQgGAAgCADQgDADgDAGQgCAIAAAKIAAAvg");
	this.shape_63.setTransform(275.4,-46.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AghApQgIgIAAgLQgBgHADgGQAEgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgFAEQgGAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAKgDAKAAQALAAAIADQAHACADAFQAFAEABAGIAAAPIAAATQAAAWABAGQABAGAEAFIgRAAQgCgFgBgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgDAFQgJACgEACQgEABgDAEQgBADAAAEQAAAHAEAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQADgFgBgLIAAgFQgIADgQACg");
	this.shape_64.setTransform(266.7,-46.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_65.setTransform(251.7,-46.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_66.setTransform(241.7,-46.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgGBAIAAhcIAOAAIAABcgAgGgtIAAgSIAOAAIAAASg");
	this.shape_67.setTransform(234.7,-48.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_68.setTransform(230.3,-48.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_69.setTransform(223.5,-46.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgLAAQgKAAgHAHg");
	this.shape_70.setTransform(213.7,-46.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAJAAAIAFIgFAPQgHgEgFAAQgFAAgDADQgDADgCAGQgDAIAAAKIAAAvg");
	this.shape_71.setTransform(206.4,-46.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_72.setTransform(200.7,-48.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgLAAgOQAAgOAFgKQAFgMAJgFQAJgHALAAQAHABAHADQAGADAEAHIAAgvIAQAAIAAB/IgPAAIAAgMQgIAOgRAAQgKAAgJgGgAgQgIQgGAIAAARQgBARAIAJQAIAJAIAAQAKAAAHgIQAIgJgBgRQABgSgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_73.setTransform(193.4,-48.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_74.setTransform(178.7,-46.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AASAuIgPg2IgDgQIgSBGIgQAAIgdhbIARAAIAPA0IAFAUIAFgTIAPg1IAOAAIAOA0IAFASIAFgSIAQg0IAPAAIgdBbg");
	this.shape_75.setTransform(167.2,-46.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_76.setTransform(155.7,-46.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgLAAgOQAAgOAFgKQAEgMAKgFQAJgHALAAQAHABAHADQAGADAFAHIAAgvIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgQgIQgGAIgBARQAAARAIAJQAHAJAJAAQAKAAAHgIQAIgJAAgRQAAgSgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_77.setTransform(145.4,-48.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQAMAMgBAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_78.setTransform(130.7,-46.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_79.setTransform(121.1,-46.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_80.setTransform(111.7,-46.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_81.setTransform(101.7,-46.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgVAMgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAIAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_82.setTransform(86.7,-46.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AAWBAIAAg7QgBgKgFgGQgEgFgKAAQgFAAgHAEQgFAEgDAFQgDAFAAALIAAAzIgPAAIAAh/IAPAAIAAAvQALgNAPgBQALAAAHAFQAIAEADAHQADAHAAAMIAAA7g");
	this.shape_83.setTransform(76.7,-48.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_84.setTransform(69.3,-48.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_85.setTransform(56.7,-46.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgHBAIAAhcIAOAAIAABcgAgHgtIAAgSIAOAAIAAASg");
	this.shape_86.setTransform(49.7,-48.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_87.setTransform(38.1,-46.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_88.setTransform(31.3,-48.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_89.setTransform(23.6,-46.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgnBBIAAh/IAOAAIAAAMQAFgHAHgEQAGgDAHAAQANAAAIAGQAKAGAEALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgHAAgGgDQgGgDgFgFIAAAtgAgRgqQgIAJAAASQAAAQAIAJQAHAIAKAAQAIAAAJgJQAGgIABgRQgBgSgGgJQgIgJgJAAQgJAAgIAKg");
	this.shape_90.setTransform(14,-45.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_91.setTransform(3.7,-46.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgHBAIAAhcIAOAAIAABcgAgHgtIAAgSIAOAAIAAASg");
	this.shape_92.setTransform(-3.3,-48.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_93.setTransform(-17.8,-46.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgGBAIAAhcIAOAAIAABcgAgGgtIAAgSIAOAAIAAASg");
	this.shape_94.setTransform(-27.3,-48.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAGAAQAHAAAJAFIgGAPQgFgEgGAAQgFAAgDADQgEADgCAGQgCAIAAAKIAAAvg");
	this.shape_95.setTransform(-31.6,-46.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_96.setTransform(-37.7,-48.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgFgEgGAAQgGAAgCADQgEADgCAGQgCAIAAAKIAAAvg");
	this.shape_97.setTransform(-47.6,-46.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_98.setTransform(-56.3,-46.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgoAuIAAgNIA6hCIgSABIgkAAIAAgNIBKAAIAAAKIgwA6IgKAKIAUAAIApAAIAAANg");
	this.shape_99.setTransform(-65.8,-46.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgGBAIAAhcIAOAAIAABcgAgGgtIAAgSIAOAAIAAASg");
	this.shape_100.setTransform(-72.3,-48.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgGBAIAAh/IAOAAIAAB/g");
	this.shape_101.setTransform(-76.3,-48.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgGBAIAAhcIAOAAIAABcgAgGgtIAAgSIAOAAIAAASg");
	this.shape_102.setTransform(-80.3,-48.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgYAzIAAAMIgPAAIAAh/IAQAAIAAAuQAKgNANAAQAJABAIADQAHAEAFAGQAFAGADAJQADAHAAAKQAAAYgMANQgMANgQAAQgPAAgJgOgAgRgIQgHAIAAAPQAAASAEAHQAIAMAMAAQAJAAAHgJQAIgJAAgSQAAgQgHgIQgIgJgJAAQgJAAgIAJg");
	this.shape_103.setTransform(-87.1,-48.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHADgGQADgGAFgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgGAEQgFAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQALAAAIADQAHACAEAFQADAEABAGIACAPIAAATQAAAWABAGQABAGACAFIgQAAQgDgFAAgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgCADgBAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgPACg");
	this.shape_104.setTransform(-97.3,-46.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_105.setTransform(-104.7,-48.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgYA9QgMgFgHgKQgGgLgBgNIAQgBQACAKAEAGQAEAHAJADQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgEQgEgFgIgDIgVgHQgRgDgHgDQgKgFgEgGQgFgIAAgJQAAgKAGgIQAFgJALgDQALgFAMAAQANAAALAFQALAEAGAJQAGAJAAALIgQACQgCgNgHgGQgIgGgOAAQgOAAgHAFQgHAGAAAIQAAAIAFADQAFAFASAFQAVAEAIAEQALADAGAJQAFAHAAALQAAAKgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape_106.setTransform(-113.4,-48.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.3,-60.4,807.2,46.2);


(lib.hl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(5,0,0,3).p("AkWvNIItAAIAAebIotAAg");
	this.shape.setTransform(28,97.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,61,200);


(lib.dashedcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8EC9D6").ss(2,0,0,3).p("APPAAIAqAAALrAAIC+AAAGrAAIC+AAAFWAAIArAAAKWAAIArAAABrAAIC+AAAAWAAIArAAAkoAAIArAAAjTAAIC+AAAQjAAIBqAAApgAAIAqAAAtMAAIC/AAAyMAAIC/AAAugAAIAqAAAoMAAIC/AA");
	this.shape.setTransform(371,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(253.5,-1,235.1,2);


(lib.dashed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8EC9D6").ss(2,0,0,3).p("EAjHAAAIArAAAfjAAIC/AAAajAAIC/AAAZPAAIAqAAAePAAIAqAAAVjAAIC/AAAUPAAIAqAAAPPAAIAqAAAQjAAIC/AAEAkcAAAIBpAAAKWAAIArAAAGrAAIC+AAABrAAIC+AAAAWAAIArAAAFWAAIArAAAjTAAIC+AAAkoAAIArAAApgAAIAqAAAoMAAIC/AAAyMAAIC/AAAugAAIAqAAA3MAAIC/AAA4gAAIAqAAAzgAAIAqAAA9ZAAIArAAEgiZAAAIArAAEgmEAAAIC+AAEghEAAAIC+AAA8EAAIC+AAAtMAAIC/AAALrAAIC+AA");
	this.shape.setTransform(243.8,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,489.6,2);


(lib.B737MAX8LeftSide = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PNG
	this.instance = new lib.sts01p26_plane();
	this.instance.setTransform(-382.4,-108.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-382.7,-109,748.8,234.7);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,0,3).p("AgZm9IAAAcIAAK9IgxgBIBMCXIBJiXIg0AAIAAq7IAAgd");
	this.shape.setTransform(7.6,44.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFF00","rgba(255,255,0,0)"],[0,1],0.3,44.3,0.3,-49.6).s().p("AhKETIAxABIAAq9IAwABIAAK7IA0AAIhJCXg");
	this.shape_1.setTransform(7.6,45.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-1,17.2,90.3);


// stage content:
(lib.dif05stsp24 = function(mode,startPosition,loop) {
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
	this.frame_89 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(89).call(this.frame_89).wait(1));

	// prot
	this.prot = new lib.prot();
	this.prot.setTransform(500,275,1,1,0,0,0,500,275);

	this.timeline.addTween(cjs.Tween.get(this.prot).wait(90));

	// arrow
	this.instance = new lib.arrow("synched",0);
	this.instance.setTransform(898.6,467.7,1,1,180,0,0,7.5,44.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({_off:false},0).to({alpha:1},6).wait(66));

	// hl
	this.instance_1 = new lib.hl("synched",0);
	this.instance_1.setTransform(940.9,451.5,1,1,0,0,0,27.9,97.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:false},0).to({alpha:1},6).wait(66));

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FB6109").s().p("AAlBLIAEgwIg2gbIgjAhIgTgJIB0hsIATAJIgLCggAAfgrIggAgIAsAUIAEgqQACgUACgNQgJAMgLALg");
	this.shape.setTransform(463.4,315.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FB6109").s().p("AghBGQgTgKgKgQQgLgRAAgUQAAgRAJgSQAQgiAcgKQAZgKAdAOQASAJALAQQALARAAATQAAASgKAUQgKAVgQAMQgRAMgTABIgCAAQgRAAgQgHgAgLg4QgUAHgPAeQgMAXAGAUQAHAUAUAKQAUAKASgIQAUgIANgaQAIgQAAgNQABgPgIgMQgHgMgOgHQgLgFgMAAQgGAAgIACg");
	this.shape_1.setTransform(452.6,307.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FB6109").s().p("AAlBLIAEgwIg2gbIgjAhIgTgJIB0hsIATAJIgLCggAAfgrIggAgIAsAUIAEgqQACgUACgNQgJAMgLALg");
	this.shape_2.setTransform(436.1,302);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FB6109").s().p("AgNBAIAGgNQgQAKgSgJQgMgFgHgLQgHgMABgOQAAgMAIgPQAHgPALgJQAKgKANgBQANgCAKAGQAJAEAFAHQAFAIABAHIAYgwIARAIIhCCFgAgUgiQgMAGgJATQgKARAEANQADANALAFQALAGAMgGQAKgFAIgSQAKgSgDgNQgDgNgLgGQgEgDgFAAQgGAAgGADg");
	this.shape_3.setTransform(423.6,294.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FB6109").s().p("AgoA/IBAiFIARAIIhACFg");
	this.shape_4.setTransform(415.7,289.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FB6109").s().p("AgYAzQgUgKgGgTQgGgUAMgXQANgbAVgFQAQgFASAJQAVAKAGATQAGAUgLAVQgJATgLAIQgLAHgOABIgBAAQgMAAgMgFgAgGgkQgMAFgJATQgKARAEANQADANANAGQAMAGALgFQANgFAJgUQAJgQgEgNQgDgOgNgGQgGgDgHAAQgEAAgGADg");
	this.shape_5.setTransform(407.5,287.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FB6109").s().p("AAEBOIAeg+QAGgMgDgGQgCgJgKgEQgHgFgJABQgIACgEAFQgGAEgGAKIgaA2IgQgIIBAiFIAQAIIgXAwQASgIASAJQAKAGAGAHQAGAIAAAIQAAAJgIAOIgeA+g");
	this.shape_6.setTransform(396.5,280.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FB6109").s().p("AAAA5QgKAAgLgGQgTgJgGgNQgHgNAFgQIASAFQgEAKAEAJQAEAIALAFQAMAGAGgCQAHgCADgGQADgGgDgFQgDgEgKgKQgPgMgGgHQgFgHgBgHQgBgIAEgHQADgHAGgEQAFgEAHgBQAEgBAIACQAHABAIAEQALAFAHAHQAHAIACAIQABAIgDAKIgRgGQACgIgDgHQgDgHgKgEQgLgGgHACQgFABgCAFQgCADABAEQABADADAEIALALIAVASQAFAHABAHQABAIgEAIQgEAJgIAFQgIAEgJAAIgCAAg");
	this.shape_7.setTransform(386.8,277.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FB6109").s().p("AgWAyQgVgKgGgTQgGgTALgWQAMgZATgIQASgHAUAKQAUAJAGAUQAGATgMAXIgCAEIhHgiQgHAPAEAMQAEANAMAGQAJAEAHgBQAIgCAKgJIAQALQgMANgPADIgHABQgKAAgNgHgAgCgmQgMAEgHAMIA1AZQAFgLgCgJQgEgNgMgGQgHgEgHAAQgFAAgCACg");
	this.shape_8.setTransform(377,272.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FB6109").s().p("AgwAtIAvhgIANAHIgHAPQALgIAHgBQAGAAAGACQAIAEAGAKIgOAMQgDgHgHgDQgFgCgGABQgFABgFAGQgGAHgFAJIgYAyg");
	this.shape_9.setTransform(369.3,268.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FB6109").s().p("AAEBOIAeg+QAGgMgDgHQgCgIgKgEQgHgFgJABQgIACgEAEQgGAFgGAKIgaA2IgQgIIBAiFIAQAIIgXAwQASgIASAJQAKAGAGAHQAGAJAAAHQAAAJgIAOIgeA+g");
	this.shape_10.setTransform(359.7,262.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FB6109").s().p("Ag/BKIA6h1IgsgWIAIgQIBpA0IgIAQIgtgWIg4B1g");
	this.shape_11.setTransform(352.4,256.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FB6109").s().p("AAEA8IAdg8QAFgIABgGQAAgFgDgGQgEgGgGgDQgLgFgLADQgJADgJASIgaA0IgRgIIAwhgIANAHIgFAPQARgMAUALQAJAEAGAHQAFAGACAHQABAHgCAIQgBAGgGAJIgdA8g");
	this.shape_12.setTransform(332.7,251.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FB6109").s().p("AgYAzQgUgKgGgTQgGgUAMgXQANgbAVgFQAQgFASAJQAVAKAGATQAGAUgLAVQgJATgLAIQgLAHgOABIgBAAQgMAAgMgFgAgGgkQgMAFgJATQgKARAEANQADANANAGQAMAGALgFQANgFAJgUQAJgQgEgNQgDgOgNgGQgGgDgHAAQgEAAgGADg");
	this.shape_13.setTransform(322.7,246.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FB6109").s().p("AgoA/IAuhgIAQAIIgtBggAAPgzIAJgTIARAIIgKATg");
	this.shape_14.setTransform(316.3,241);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FB6109").s().p("AgUBCQgJgFgDgFQgEgGAAgFQAAgGAIgPIAbg2IgMgGIAGgNIAKAGIAMgYIAWgCIgRAiIAQAIIgGANIgQgIIgaA3QgEAHAAADQAAAAAAABQAAABAAAAQABABAAAAQAAABABAAQABADAEABIAHADIgFAQIgNgEg");
	this.shape_15.setTransform(311.6,239.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FB6109").s().p("AgWAzQgUgKgGgTQgGgTAMgXQAIgQAKgJQAMgJAMgBQANgBANAHQAQAHAGANQAGANgFAQIgRgFQADgLgEgIQgDgIgJgEQgMgGgKAFQgMAGgKATQgJASADAMQADANAMAGQAKAFAHgDQAKgDAIgMIAPALQgLAPgQAEIgJACQgKAAgKgFg");
	this.shape_16.setTransform(303.7,237.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FB6109").s().p("AAEA8IAdg8QAFgHABgGQAAgHgDgFQgEgGgGgDQgLgFgLADQgJACgJAUIgaAzIgRgIIAwhgIANAIIgFANQARgLAUAKQAJAFAGAGQAFAHACAIQABAGgCAIQgBAFgGAKIgdA8g");
	this.shape_17.setTransform(292.8,232.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FB6109").s().p("AgDA9IAFgPQgRALgUgKQgIgEgGgGQgGgIgCgGQgBgHACgIIAHgOIAdg9IARAIIgaA3IgIAQQgCAHAEAGQADAGAIAEQAHAEAIgBQAJAAAEgGQAGgFAGgNIAZgyIARAIIgwBgg");
	this.shape_18.setTransform(283.3,226.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FB6109").s().p("AhNA+IBCiFIBZAtIgIAQIhHgkIgVAqIA+AcIgHARIg+gfIgeA9g");
	this.shape_19.setTransform(273.1,218.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FB6109").s().p("AgcBHQgSgJgKgLQgKgMgBgOQgCgOAGgMIASAFQgEALABAIQABAIAHAJQAHAJAMAGQAKAFAKAAQAHABAGgDQAHgEADgGQADgHgBgGQgCgHgHgHIgSgTQgRgLgFgIQgIgJgBgKQgBgKAFgJQAFgLAKgGQAKgFAMAAQANABANAHQAPAHAJALQAKAKABAMQACANgFAMIgSgIQAFgNgFgKQgFgKgPgIQgRgIgKACQgIACgEAJQgEAHADAHQADAIARAQQAUANAGAIQAJALACALQABALgFALQgFAKgLAHQgLAGgNAAQgNAAgPgHg");
	this.shape_20.setTransform(255.3,211.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FB6109").s().p("AAlBLIAEgwIg2gbIgjAhIgTgJIB0hsIATAJIgLCggAAfgrIggAgIAsAUIAEgqQACgUACgNQgJAMgLALg");
	this.shape_21.setTransform(240.1,206.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FB6109").s().p("AgeBGQgWgLgKgQQgJgPABgVQABgSAKgTQAKgVAQgMQAPgMASgBQASgBASAJQAUAKAJARQAJARgEAVIgTgEQACgRgFgLQgGgLgOgHQgQgHgMACQgNACgLALQgKAKgHAOQgIARgBANQgCAQAIALQAHAMANAGQAPAHAMgEQAPgDAMgQIAQAOQgRATgUAFIgKABQgPAAgOgHg");
	this.shape_22.setTransform(230,198.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FB6109").s().p("AANBaIA3hvIhbBcIgQgIIAQiEIg4BxIgRgIIBCiFIAbANIgPBtIgDAXIASgSIBMhMIAYALIhCCFg");
	this.shape_23.setTransform(215.1,191.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#8EC9D6").s().p("AAvBMIgMgvIg9gHIgWArIgUgDIBJiMIAWADIAqCagAACghIgUAmIAxAHIgKgpIgIghQgEAPgHAOg");
	this.shape_24.setTransform(428.4,366.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8EC9D6").s().p("AgIBNQgVgDgPgMQgQgMgGgTQgHgTADgRQAEgmAXgSQAWgTAeAEQAUADAQAMQAPAMAHASQAHATgDAVQgDAXgMAQQgLARgSAHQgNAFgOAAIgIAAgAgdgxQgRANgEAhQgDAZAMASQANARAWADQAUACAQgNQARgOADgdQADgQgFgPQgFgOgKgJQgLgJgPgCIgHAAQgPAAgOAKg");
	this.shape_25.setTransform(414.3,364.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#8EC9D6").s().p("AAvBNIgMgwIg9gHIgVArIgWgDIBLiMIAVADIArCagAACgiIgUAoIAxAGIgLgpIgGghQgFAPgHANg");
	this.shape_26.setTransform(398.3,363);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#666666").s().p("AAVBNIAHhFQABgMgFgGQgFgIgLgBQgIAAgGADQgHAEgFAGQgDAGgCAMIgFA7IgSgBIAOiUIASACIgFA2QAOgOASABQAMACAIAFQAJAGADAJQADAJgCAOIgGBFg");
	this.shape_27.setTransform(371.8,358);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#666666").s().p("AADBKQgIgBgFgEQgFgEgBgFQgDgFACgRIAGg8IgNgBIABgPIANABIADgaIASgKIgEAmIASACIgBAOIgTgBIgFA9QAAAIAAACIACAEQACACAFAAIAHAAIACARIgIAAIgHAAg");
	this.shape_28.setTransform(363.7,357.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#666666").s().p("AAcA4QgCgGAAgIQgLAIgKACQgIADgLgBQgSgCgJgJQgIgKABgOQABgIAEgGQAFgFAFgCQAHgEAHgBIARgBQAVgBAKgDIABgEQABgMgFgFQgGgGgOgCQgLgBgGAEQgHAEgFALIgRgEQADgLAHgHQAGgGALgDQALgDAMABQAOABAIAFQAJADADAGQAEAFABAIQAAAFgBAMIgCAXQgDAZABAHQAAAHADAHgAgBAFQgLAAgFACQgFACgDADQgDAEAAAFQgBAHAFAFQAFAGALABQAIABAJgEQAJgDAFgJQADgFABgMIABgHQgKADgTABg");
	this.shape_29.setTransform(354.1,358.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#666666").s().p("Ag9BJIAPiTIA2AFQAPACAIACQALACAHAHQAHAFADAKQAEAKgBALQgCATgOAKQgNAMgfgDIglgEIgGA9gAghgBIAkABQAUACAIgEQAJgHABgMQABgKgEgHQgEgHgIgDQgFgCgNgBIgkgEg");
	this.shape_30.setTransform(342.1,354.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#666666").s().p("AAEBKQgIgBgGgEQgFgEgCgFQgBgFABgRIAGg8IgOgBIACgPIAOABIACgaIARgKIgDAmIASACIgBAOIgSgBIgGA9QAAAIAAACIACAEQACACAEAAIAIAAIABARIgHAAIgGAAg");
	this.shape_31.setTransform(326.5,353.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#666666").s().p("AAVBMIAHhEQABgMgFgGQgFgIgLAAQgIgBgGADQgHAEgFAGQgDAGgCAMIgFA8IgSgCIAOiUIASACIgFA1QAOgNASACQAMABAIAGQAJAFADAJQADAJgCAOIgGBFg");
	this.shape_32.setTransform(317.1,352.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#666666").s().p("AgKBNQgUgCgLgKQgLgKACgRIASAEQAAAJAEAEQAHAGALABQALABAIgFQAHgEAEgJIADgXQgNANgQgCQgXgCgKgRQgLgQACgXQACgPAHgNQAHgMALgGQALgGAMABQAUACALAQIABgNIARACIgJBcQgCAZgHAKQgGAKgLAGQgJADgJAAIgIAAgAgSg0QgJAJgCATQgCAVAIAJQAHALANABQALABAJgJQAKgJACgTQACgUgIgKQgIgLgNgBIgCAAQgJAAgJAIg");
	this.shape_33.setTransform(305.4,355.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#666666").s().p("AgPBJIAKhqIARABIgLBrgAgDg1IADgVIAQACIgCAVg");
	this.shape_34.setTransform(297.7,350.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#666666").s().p("AgPBJIAPiTIAQACIgPCTg");
	this.shape_35.setTransform(293,350.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#666666").s().p("Ag4BJIAOiTIBjAKIgCARIhPgIIgEAvIBEAHIgCAPIhEgHIgGBEg");
	this.shape_36.setTransform(284.7,349.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgoAwQgQgRAAgeQAAgeAQgRQAQgSAYAAQAZAAAQARQAQARAAAeIAAAFIhbAAQABAUAKALQALALANAAQAMAAAIgGQAIgGAFgNIAWACQgFATgOALQgOALgWAAQgZAAgQgRgAgWgkQgKAJgBARIBEAAQgCgQgGgIQgLgMgQAAQgMAAgKAKg");
	this.shape_37.setTransform(140.6,347);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgaBPQgMgJgIgOQgGgPgBgTQAAgTAHgNQAGgPAMgIQANgJAPAAQAJAAAKAGQAIAEAFAIIAAg+IAVAAIAACqIgTAAIAAgPQgMASgWAAQgOAAgMgIgAgVgMQgJALAAAXQgBAYALAMQAKALAMABQANAAAKgMQAJgLAAgXQAAgYgKgMQgKgMgNAAQgMAAgKAMg");
	this.shape_38.setTransform(126.9,344.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgbA7QgKgEgEgHQgFgGgCgJIgBgUIAAhLIAVAAIAABDIABAWQACAIAGAFQAHAFAJAAQAIAAAIgFQAJgFADgIQAEgJAAgQIAAhAIAVAAIAAB6IgTAAIAAgSQgPAVgWAAQgLAAgKgEg");
	this.shape_39.setTransform(113.9,347.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgCBRQgGgEgDgGQgDgGAAgTIAAhFIgPAAIAAgRIAPAAIAAgfIATgMIAAArIAWAAIAAARIgWAAIAABGQAAAKACACQABADADABQACACAFAAIAJgBIADATIgQABQgMAAgEgDg");
	this.shape_40.setTransform(104.1,344.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgJBWIAAh7IATAAIAAB7gAgJg8IAAgYIATAAIAAAYg");
	this.shape_41.setTransform(98,344.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgCBRQgGgEgCgGQgDgGAAgTIAAhFIgQAAIAAgRIAQAAIAAgfIASgMIAAArIAWAAIAAARIgWAAIAABGQABAKABACQABADADABQACACAEAAIAKgBIADATIgQABQgLAAgFgDg");
	this.shape_42.setTransform(92.1,344.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgCBRQgGgEgDgGQgCgGAAgTIAAhFIgQAAIAAgRIAQAAIAAgfIASgMIAAArIAWAAIAAARIgWAAIAABGQABAKABACQABADADABQACACAEAAIAKgBIADATIgQABQgMAAgEgDg");
	this.shape_43.setTransform(85.5,344.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AA2BWIgUg1IhGAAIgSA1IgZAAIBCiqIAWAAIBHCqgAgKghIgTAwIA4AAIgSgtIgKgkQgEAQgFARg");
	this.shape_44.setTransform(74,344.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAdBVIAAhOQAAgOgHgIQgHgGgMgBQgHAAgJAGQgIAEgDAIQgEAHAAAPIAABDIgVAAIAAiqIAVAAIAAA+QAOgRAVAAQAOAAAKAGQAKAFAFAKQAEAJAAARIAABOg");
	this.shape_45.setTransform(112.7,315.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AglAwQgQgRAAgfQAAgSAHgPQAGgPAOgIQAOgIAOAAQAUAAANALQANAKAEATIgVADQgDgNgHgGQgIgGgKAAQgOAAgKALQgKAMAAAXQAAAYAJAMQAKALANAAQANAAAIgHQAJgIACgQIAVADQgEAVgOAMQgOANgUAAQgYAAgPgRg");
	this.shape_46.setTransform(100.4,318.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgCBRQgGgEgCgGQgEgGAAgTIAAhFIgPAAIAAgRIAPAAIAAgfIAUgMIAAArIAVAAIAAARIgVAAIAABGQAAAKABACQABADACABQADACAFAAIAJgBIADATIgQABQgMAAgEgDg");
	this.shape_47.setTransform(90.8,316.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgJBVIAAh6IATAAIAAB6gAgJg8IAAgZIATAAIAAAZg");
	this.shape_48.setTransform(84.7,315.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AhABVIAAiqIBAAAQAQAAAJADQANACAIAFQAIAHAGAKQAFALAAANQAAAVgOANQgNAQglAAIgqAAIAABFgAgpgDIAqAAQAWABAJgJQAJgIAAgPQAAgLgEgHQgGgIgJgCQgGgCgPAAIgqAAg");
	this.shape_49.setTransform(74.4,315.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAdA/IAAhJQAAgNgDgHQgCgGgHgEQgFgEgJAAQgMAAgJAJQgKAIAAAYIAABCIgVAAIAAh6IATAAIAAARQANgUAYAAQALAAAKAEQAJAEAFAHQAFAGACAJIABAVIAABKg");
	this.shape_50.setTransform(319.9,420.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgpAwQgQgRAAgfQAAghATgRQAQgOAWAAQAZAAARARQAQARAAAeQAAAWgHAOQgIANgNAIQgOAIgQAAQgZAAgQgRgAgZgiQgKAMAAAWQAAAXAKAMQALAMAOAAQAPAAALgMQAKgMAAgXQAAgWgKgMQgLgMgPAAQgOAAgLAMg");
	this.shape_51.setTransform(306.5,420.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("Ag2A+IAAgRIBOhZIgYAAIgxAAIAAgRIBkAAIAAAOIhCBNIgNAPIAbgBIA4AAIAAASg");
	this.shape_52.setTransform(293.9,420.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgJBVIAAh6IATAAIAAB6gAgJg8IAAgZIATAAIAAAZg");
	this.shape_53.setTransform(285.2,418.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AggA/IAAh6IATAAIAAATQAHgOAGgEQAEgEAIAAQAKAAALAHIgHATQgIgEgHAAQgHAAgEAEQgFAEgDAHQgDAMAAANIAAA/g");
	this.shape_54.setTransform(279.5,420.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgpAwQgQgRAAgfQAAghATgRQAQgOAWAAQAZAAARARQAQARAAAeQAAAWgHAOQgIANgNAIQgOAIgQAAQgZAAgQgRgAgZgiQgKAMAAAWQAAAXAKAMQALAMAOAAQAPAAALgMQAKgMAAgXQAAgWgKgMQgLgMgPAAQgOAAgLAMg");
	this.shape_55.setTransform(267.8,420.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAtBVIAAhRIhYAAIAABRIgXAAIAAiqIAXAAIAABHIBYAAIAAhHIAWAAIAACqg");
	this.shape_56.setTransform(252.5,418.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(90));

	// black
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(2,0,0,3).p("Egl1AAAMBLrAAA");
	this.shape_57.setTransform(369.2,400);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#151515").ss(2,0,0,3).p("Ak3A3IDhAAQAAgmAagZQAagaAkAAQAAAAABAAQAlABAZAZQAbAZAAAmQAAAlgbAaQgaAbglAAQgkAAgagbQgagaAAglABcA3IDcAAAADgiIAAh4");
	this.shape_58.setTransform(248.2,367.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(4,0,0,3).p("ALug2IpYAAIAACBAAAhKIAAA3Artg2IJYAAIAACB");
	this.shape_59.setTransform(247,227);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57}]}).wait(90));

	// grey
	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#666666").s().p("Aj+AhIgGA2IizhqIDHhHIgHA8IKvA+IgIA7g");
	this.shape_60.setTransform(327.8,373.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_60).wait(90));

	// blue
	this.instance_2 = new lib.dashedcopy("synched",0);
	this.instance_2.setTransform(607.1,400,1,1,4.5,0,0,487.6,-0.1);

	this.instance_3 = new lib.dashed("synched",0);
	this.instance_3.setTransform(611.1,399.9,1,1,26,0,0,487.7,-0.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#8EC9D6").ss(2,0,0,3).p("AT8AQQhDCCgkBqQg4CjgeDeQgOBugEBPAsivlQiSEjhoEsQiiHTgtIFQgWEDAKCl");
	this.shape_61.setTransform(279.3,299.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_61},{t:this.instance_3},{t:this.instance_2}]}).wait(90));

	// orange
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FB6109").s().p("EAgaAP1Ig2gaQgEgCgBgEQgBgDABgEQACgEAEgBQAEgCAEACIA2AaQAEACABAEQABAEgCADQgBAEgEACIgDAAIgFgBgAeuPBIg2gaQgEgCgBgDQgBgEABgEQACgEAEgBQAEgCAEACIA2AaQAEACABAEQABAEgCAEQgBADgEACIgDAAIgFgBgAdCONIg2gaQgEgCgBgEQgBgDABgEQACgEAEgBQAEgCAEACIA2AaQAEACABAEQABAEgCADQgBAEgEACIgDAAIgFgBgAbWNZIg2gaQgEgCgBgEQgBgDABgEQACgEAEgBQAEgCAEACIA2AaQAEACABAEQABAEgCADQgBAEgEACIgDAAIgFgBgAZqMlIg2gaQgEgCgBgEQgBgDABgEQACgEAEgBQAEgCAEACIA2AaQAEACABAEQABAEgCADQgBAEgEACIgDAAIgFgBgAX+LxIg2gaQgEgCgBgDQgBgEABgEQACgEAEgBQAEgCAEACIA2AaQAEACABAEQABAEgCAEQgBADgEACIgDAAIgFgBgAWSK9Ig2gaQgEgCgBgDQgBgEABgEQACgEAEgBQAEgCAEACIA2AaQAEACABAEQABAEgCAEQgBADgEACIgDAAIgFgBgAUmKJIg2gaQgEgCgBgEQgBgDABgEQACgEAEgBQAEgCAEACIA2AaQAEACABAEQABAEgCADQgBAEgEACIgDAAIgFgBgAS6JVIg2gaQgEgCgBgEQgBgDABgEQACgEAEgBQAEgCAEACIA2AaQAEACABAEQABAEgCADQgBAEgEACIgDAAIgFgBgAROIhIg2gaQgEgCgBgEQgBgDABgEQACgEAEgBQAEgCAEACIA2AaQAEACABAEQABAEgCADQgBAEgEACIgDAAIgFgBgAPiHtIg2gaQgEgCgBgDQgBgEABgEQACgEAEgBQAEgCAEACIA2AaQAEACABAEQABAEgCAEQgBADgEACIgDAAIgFgBgAN2G5Ig2gaQgEgCgBgEQgBgDABgEQACgEAEgBQAEgCAEACIA2AaQAEACABAEQABAEgCADQgBAEgEACIgDAAIgFgBgAMKGFIg2gaQgEgCgBgEQgBgDABgEQACgEAEgBQAEgCAEACIA2AaQAEACABAEQABAEgCADQgBAEgEACIgDAAIgFgBgAKeFRIg2gaQgEgCgBgEQgBgDABgEQACgEAEgBQAEgCAEACIA2AaQAEACABAEQABAEgCADQgBAEgEACIgDAAIgFgBgAIyEdIg2gaQgEgCgBgDQgBgEABgEQACgEAEgBQAEgCAEACIA2AaQAEACABAEQABAEgCAEQgBADgEACIgDAAIgFgBgAHGDpIg2gaQgEgCgBgDQgBgEABgEQACgEAEgBQAEgCAEACIA2AaQAEACABAEQABAEgCAEQgBADgEACIgDAAIgFgBgAFaC1Ig2gaQgEgCgBgEQgBgDABgEQACgEAEgBQAEgCAEACIA2AaQAEACABAEQABAEgCADQgBAEgEACIgDAAIgFgBgADuCBIg2gaQgEgCgBgEQgBgDABgEQACgEAEgBQAEgCAEACIA2AaQAEACABAEQABAEgCADQgBAEgEACIgDAAIgFgBgACCBNIg2gaQgEgCgBgEQgBgDABgEQACgEAEgBQAEgCAEACIA2AaQAEACABAEQABAEgCADQgBAEgEACIgDAAIgFgBgAAWAZIg0gZQgEgBgBgDQgBgEABgEQACgEAEgBQAEgCAEACIA0AYQAEACABAEQABAEgCAEQgBADgEACIgDAAIgFgBgAhUgZIg2gaQgEgCgBgEQgBgDABgEQACgEAEgBQAEgCAEACIA2AaQAEACABAEQABAEgCADQgBAEgEACIgDAAIgFgBgAjAhNIg2gaQgEgCgBgEQgBgDABgEQACgEAEgBQAEgCAEACIA2AaQAEACABAEQABAEgCADQgBAEgEACIgDAAIgFgBgAksiBIg2gaQgEgCgBgEQgBgDABgEQACgEAEgBQAEgCAEACIA2AaQAEACABAEQABAEgCADQgBAEgEACIgDAAIgFgBgAmYi1Ig2gaQgEgCgBgDQgBgEABgEQACgEAEgBQAEgCAEACIA2AaQAEACABAEQABAEgCAEQgBADgEACIgDAAIgFgBgAoEjpIg2gaQgEgCgBgDQgBgEABgEQACgEAEgBQAEgCAEACIA2AaQAEACABAEQABAEgCAEQgBADgEACIgDAAIgFgBgApwkdIg2gaQgEgCgBgEQgBgDABgEQACgEAEgBQAEgCAEACIA2AaQAEACABAEQABAEgCADQgBAEgEACIgDAAIgFgBgArclRIg2gaQgEgCgBgEQgBgDABgEQACgEAEgBQAEgCAEACIA2AaQAEACABAEQABAEgCADQgBAEgEACIgDAAIgFgBgAtImFIg2gaQgEgCgBgEQgBgDABgEQACgEAEgBQAEgCAEACIA2AaQAEACABAEQABAEgCADQgBAEgEACIgDAAIgFgBgAu0m5Ig2gaQgEgCgBgDQgBgEABgEQACgEAEgBQAEgCAEACIA2AaQAEACABAEQABAEgCAEQgBADgEACIgDAAIgFgBgAwgntIg2gaQgEgCgBgEQgBgDABgEQACgEAEgBQAEgCAEACIA2AaQAEACABAEQABAEgCADQgBAEgEACIgDAAIgFgBgAyMohIg2gaQgEgCgBgEQgBgDABgEQACgEAEgBQAEgCAEACIA2AaQAEACABAEQABAEgCADQgBAEgEACIgDAAIgFgBgAz4pVIg2gaQgEgCgBgEQgBgDABgEQACgEAEgBQAEgCAEACIA2AaQAEACABAEQABAEgCADQgBAEgEACIgDAAIgFgBgA1kqJIg2gaQgEgCgBgEQgBgEABgDQACgEAEgCQAEgBAEACIA2AaQAEACABAEQABADgCAEQgBAEgEABIgDABIgFgBgA3Qq+Ig2gaQgEgCgBgEQgBgEABgDQACgEAEgCQAEgBAEACIA2AaQAEACABAEQABADgCAEQgBAEgEABIgDABIgFgBgA48rzIg2gbQgEgCgBgEQgBgEABgEQACgDAEgCQAEgBAEACIA2AbQAEACABADQABAEgCAEQgBAEgEABIgEABIgEgBgA6osoIg2gaQgEgCgBgEQgBgEABgEQACgDAEgCQAEgBAEACIA2AaQAEACABADQABAEgCAEQgBAEgEABIgDABIgFgBgA8UtdIg2gbQgEgCgBgEQgBgEABgEQACgDAEgCQAEgBAEACIA2AbQAEACABADQABAEgCAEQgBAEgEABIgEABIgEgBgA+AuSIg2gbQgEgCgBgEQgBgEABgEQACgDAEgCQAEgBAEACIA2AbQAEACABADQABAEgCAEQgBAEgEABIgEABIgEgBgA/svHIg2gbQgEgCgBgEQgBgEABgEQACgDAEgCQAEgBAEACIA2AbQAEACABADQABAEgCAEQgBAEgEABIgEABIgEgBg");
	this.shape_62.setTransform(389.7,299);

	this.timeline.addTween(cjs.Tween.get(this.shape_62).wait(90));

	// plane
	this.instance_4 = new lib.B737MAX8LeftSide("synched",0);
	this.instance_4.setTransform(607,400,0.5,0.5,25,0,0,-70.8,82.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(90));

	// t1
	this.instance_5 = new lib.point_1("synched",0);
	this.instance_5.setTransform(217.7,142.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(90));

	// throttle
	this.instance_6 = new lib.sts01p26_throttle();
	this.instance_6.setTransform(922,251);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(500,275,1000,550);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;