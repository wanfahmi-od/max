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
	this.shape.graphics.f("#000000").s().p("AgHAIIAAgQIAQAAIAAAQg");
	this.shape.setTransform(385.3,-43);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAGAAQAHAAAJAFIgGAPQgFgEgGAAQgFAAgDADQgEADgCAGQgCAIAAAKIAAAvg");
	this.shape_1.setTransform(381.4,-46.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_2.setTransform(372.7,-46.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgYAzIAAAMIgPAAIAAh/IAQAAIAAAuQAKgNANAAQAJABAIADQAHAEAFAGQAFAGADAJQADAHAAAKQAAAYgMANQgMANgQAAQgPAAgJgOgAgRgIQgHAIAAAPQAAASAEAHQAIAMAMAAQAJAAAHgJQAIgJAAgSQAAgQgHgIQgIgJgJAAQgJAAgIAJg");
	this.shape_3.setTransform(362.9,-48.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_4.setTransform(350.2,-46.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_5.setTransform(337.6,-46.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_6.setTransform(327.7,-46.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAWBAIAAg7QAAgKgGgGQgEgFgKAAQgFAAgHAEQgFAEgDAFQgDAFAAALIAAAzIgQAAIAAh/IAQAAIAAAvQALgNAPgBQAKAAAIAFQAIAEADAHQAEAHAAAMIAAA7g");
	this.shape_7.setTransform(312.7,-48.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_8.setTransform(303.5,-46.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AghApQgIgIAAgLQgBgHADgGQAEgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgFAEQgGAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAKgDAKAAQALAAAIADQAHACADAFQAFAEABAGIAAAPIAAATQAAAWABAGQABAGAEAFIgRAAQgCgFgBgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgDAFQgJACgEACQgEABgDAEQgBADAAAEQAAAHAEAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQADgFgBgLIAAgFQgIADgQACg");
	this.shape_9.setTransform(293.7,-46.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAsBAIAAhqIglBqIgNAAIgmhrIAABrIgQAAIAAh/IAZAAIAfBaIAEATIAHgVIAfhYIAXAAIAAB/g");
	this.shape_10.setTransform(281.2,-48.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgLAAgOQAAgOAFgKQAFgMAJgFQAJgHALAAQAHABAHADQAGADAFAHIAAgvIAPAAIAAB/IgPAAIAAgMQgJAOgQAAQgKAAgJgGgAgQgIQgGAIgBARQAAARAIAJQAHAJAJAAQAKAAAHgIQAIgJgBgRQABgSgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_11.setTransform(263.4,-48.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_12.setTransform(253.7,-46.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AghApQgJgIAAgLQABgHADgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQADgKAEgGQAFgHAJgDQAKgDAJAAQANAAAHADQAHACAEAFQADAEABAGIABAPIAAATQAAAWACAGQABAGACAFIgQAAQgDgFAAgGQgJAHgIADQgGADgJAAQgQAAgIgHgAgCAFQgKACgEACQgEABgCAEQgDADAAAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_13.setTransform(243.7,-46.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AApBAIgPgnIg1AAIgOAnIgSAAIAyh/IAQAAIA1B/gAgIgYIgNAjIApAAIgNghIgHgbQgDAMgFANg");
	this.shape_14.setTransform(228.7,-48.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgfA5QgOgJgIgPQgHgPAAgRQAAgeARgSQARgSAaAAQARAAAPAIQAOAJAIAPQAHAQAAARQAAAUgIAPQgIAQgOAHQgPAIgQAAQgRAAgOgJgAgdgmQgNANAAAbQAAAXAMANQANANARAAQATAAAMgNQANgOAAgYQAAgOgGgMQgFgMgKgGQgLgGgMAAQgQAAgNAMg");
	this.shape_15.setTransform(215.7,-48.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AApBAIgQgnIg0AAIgNAnIgTAAIAxh/IARAAIA1B/gAgIgYIgNAjIApAAIgOghIgGgbQgDAMgFANg");
	this.shape_16.setTransform(202.7,-48.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_17.setTransform(187.7,-46.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_18.setTransform(177.7,-46.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgTA7QgKgGgFgLQgFgLAAgOQAAgOAFgKQAFgMAJgFQAJgHALAAQAHABAGADQAHADAFAHIAAgvIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgQgIQgHAIAAARQAAARAIAJQAHAJAJAAQAKAAAHgIQAIgJAAgRQAAgSgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_19.setTransform(162.4,-48.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_20.setTransform(152.7,-46.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_21.setTransform(143.1,-46.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgPACg");
	this.shape_22.setTransform(133.7,-46.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgYAzIAAAMIgPAAIAAh/IAQAAIAAAuQAKgNANAAQAJABAIADQAHAEAFAGQAFAGADAJQADAHAAAKQAAAYgMANQgMANgQAAQgPAAgJgOgAgRgIQgHAIAAAPQAAASAEAHQAIAMAMAAQAJAAAHgJQAIgJAAgSQAAgQgHgIQgIgJgJAAQgJAAgIAJg");
	this.shape_23.setTransform(123.9,-48.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgIAAgIAHg");
	this.shape_24.setTransform(108.7,-46.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAGAAQAHAAAJAFIgFAPQgGgEgGAAQgFAAgDADQgEADgBAGQgDAIAAAKIAAAvg");
	this.shape_25.setTransform(101.4,-46.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHADgGQACgGAGgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQAMAAAHADQAHACADAFQAEAEACAGIABAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgQACg");
	this.shape_26.setTransform(92.7,-46.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_27.setTransform(78.1,-46.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgLAAgOQAAgOAFgKQAEgMAKgFQAJgHALAAQAHABAHADQAGADAEAHIAAgvIAQAAIAAB/IgPAAIAAgMQgIAOgRAAQgKAAgJgGgAgPgIQgIAIABARQAAARAHAJQAIAJAIAAQAKAAAIgIQAGgJAAgRQAAgSgGgIQgIgJgLAAQgJAAgGAJg");
	this.shape_28.setTransform(68.4,-48.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_29.setTransform(58.7,-46.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAJgDIAAgEQAAgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAEAEACAGIABAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgQACg");
	this.shape_30.setTransform(48.7,-46.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_31.setTransform(36.2,-46.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_32.setTransform(21.2,-46.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_33.setTransform(8.7,-46.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_34.setTransform(-0.5,-46.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_35.setTransform(-17.8,-46.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgGBAIAAhcIAOAAIAABcgAgGgtIAAgSIAOAAIAAASg");
	this.shape_36.setTransform(-27.3,-48.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAGAAQAHAAAJAFIgGAPQgFgEgGAAQgFAAgDADQgEADgCAGQgCAIAAAKIAAAvg");
	this.shape_37.setTransform(-31.6,-46.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_38.setTransform(-37.7,-48.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgFgEgGAAQgGAAgCADQgEADgCAGQgCAIAAAKIAAAvg");
	this.shape_39.setTransform(-47.6,-46.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_40.setTransform(-56.3,-46.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgoAuIAAgNIA6hCIgSABIgkAAIAAgNIBKAAIAAAKIgwA6IgKAKIAUAAIApAAIAAANg");
	this.shape_41.setTransform(-65.8,-46.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgGBAIAAhcIAOAAIAABcgAgGgtIAAgSIAOAAIAAASg");
	this.shape_42.setTransform(-72.3,-48.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgGBAIAAh/IAOAAIAAB/g");
	this.shape_43.setTransform(-76.3,-48.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgGBAIAAhcIAOAAIAABcgAgGgtIAAgSIAOAAIAAASg");
	this.shape_44.setTransform(-80.3,-48.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgYAzIAAAMIgPAAIAAh/IAQAAIAAAuQAKgNANAAQAJABAIADQAHAEAFAGQAFAGADAJQADAHAAAKQAAAYgMANQgMANgQAAQgPAAgJgOgAgRgIQgHAIAAAPQAAASAEAHQAIAMAMAAQAJAAAHgJQAIgJAAgSQAAgQgHgIQgIgJgJAAQgJAAgIAJg");
	this.shape_45.setTransform(-87.1,-48.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHADgGQADgGAFgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgGAEQgFAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQALAAAIADQAHACAEAFQADAEABAGIACAPIAAATQAAAWABAGQABAGACAFIgQAAQgDgFAAgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgCADgBAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgPACg");
	this.shape_46.setTransform(-97.3,-46.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_47.setTransform(-104.7,-48.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgYA9QgMgFgHgKQgGgLgBgNIAQgBQACAKAEAGQAEAHAJADQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgEQgEgFgIgDIgVgHQgRgDgHgDQgKgFgEgGQgFgIAAgJQAAgKAGgIQAFgJALgDQALgFAMAAQANAAALAFQALAEAGAJQAGAJAAALIgQACQgCgNgHgGQgIgGgOAAQgOAAgHAFQgHAGAAAIQAAAIAFADQAFAFASAFQAVAEAIAEQALADAGAJQAFAHAAALQAAAKgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape_48.setTransform(-113.4,-48.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.3,-60.4,521.2,24.1);


// stage content:
(lib.dif05stsp27 = function(mode,startPosition,loop) {
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
	this.frame_45 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(45).call(this.frame_45).wait(1));

	// prot
	this.prot = new lib.prot();
	this.prot.setTransform(500,275,1,1,0,0,0,500,275);

	this.timeline.addTween(cjs.Tween.get(this.prot).wait(46));

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgjAzQgOgJgEgSIAfgEQABAJAHAFQAGAEAIABQANAAAFgFQAFgDAAgGQAAgDgDgCQgBgCgJgCQgjgJgKgGQgOgHAAgSQAAgPAMgKQAMgLAZAAQAWABAMAHQAMAJAEAPIgeAFQgBgHgFgEQgGgDgIAAQgLAAgGADQgDACAAAEQAAAEADACQAEADAWAGQAaAGAJAHQAKAHAAAPQAAAPgNAMQgOALgbAAQgVAAgOgJg");
	this.shape.setTransform(652.1,135.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgpBBQgOgQAAgdQAAgcANgPQAOgQAWAAQARAAAPARIAAg6IAeAAIAACfIgcAAIAAgRQgHAKgKAFQgJAEgJAAQgUAAgOgQgAgQgGQgIAHAAARQAAATAGAIQAHAMALAAQALAAAHgJQAIgJAAgSQAAgUgIgHQgHgJgLAAQgJAAgHAJg");
	this.shape_1.setTransform(638.9,133.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAWA7IAAg7QAAgRgCgGQgCgFgFgDQgEgDgGAAQgGAAgHAEQgGAEgDAIQgCAHAAARIAAA1IgfAAIAAhyIAdAAIAAARQAPgUAVAAQALAAAIAEQAIADAFAGQAEAGACAHQACAHAAAOIAABGg");
	this.shape_2.setTransform(625.5,135.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgrAzQgKgKAAgPQAAgJAEgJQAFgHAJgCQAIgEAQgEQAUgDAIgEIAAgDQAAgJgEgEQgFgDgKgBQgIAAgFADQgEAEgDAIIgcgFQAFgRALgIQAMgJAWAAQATABAKAFQAKAEAFAIQAEAHAAAUIgBAiQAAAQACAHQABAIAEAIIgeAAIgDgJIgBgEQgIAIgJAEQgHADgKAAQgSAAgLgJgAAAAGQgMADgEADQgGAEAAAHQAAAGAEAFQAFAFAIAAQAGAAAIgFQAFgFACgGIABgPIAAgGIgRAEg");
	this.shape_3.setTransform(612.3,135.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AA2A7IAAhAQAAgSgDgFQgEgGgJAAQgHAAgFAEQgGADgCAIQgDAIAAAOIAAA4IgdAAIAAg+QAAgRgCgFQgBgFgEgCQgDgCgGAAQgHAAgGADQgGAEgCAIQgDAHAAAPIAAA4IgeAAIAAhyIAcAAIAAAQQAPgTAVAAQAMAAAIAFQAGAEAFAKQAIgKAJgEQAJgFAKAAQANAAAJAFQAJAFAEAKQADAIAAARIAABIg");
	this.shape_4.setTransform(596,135.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AA2A7IAAhAQAAgSgDgFQgEgGgJAAQgHAAgFAEQgGADgCAIQgDAIAAAOIAAA4IgdAAIAAg+QAAgRgCgFQgBgFgEgCQgDgCgGAAQgHAAgGADQgGAEgCAIQgDAHAAAPIAAA4IgeAAIAAhyIAcAAIAAAQQAPgTAVAAQAMAAAIAFQAGAEAFAKQAIgKAJgEQAJgFAKAAQANAAAJAFQAJAFAEAKQADAIAAARIAABIg");
	this.shape_5.setTransform(576,135.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgdA1QgPgHgHgOQgIgOAAgSQAAgQAIgOQAHgOAOgIQAOgHAQgBQAaABARARQARARAAAZQAAAagRARQgRARgaAAQgOABgPgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_6.setTransform(559.2,135.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgnAsQgPgPAAgdQAAgbAPgQQAQgQAYgBQAVAAANAKQAMAJAGATIgfAFQgBgJgGgEQgFgFgIAAQgKAAgHAIQgHAIAAASQAAAUAHAIQAHAIAKAAQAIAAAGgEQAGgGACgLIAfAEQgGAWgMAKQgOALgWgBQgYAAgQgQg");
	this.shape_7.setTransform(546.3,135.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAWA7IAAg7QAAgRgCgGQgCgFgFgDQgEgDgGAAQgGAAgHAEQgGAEgDAIQgCAHAAARIAAA1IgfAAIAAhyIAdAAIAAARQAPgUAVAAQALAAAIAEQAIADAFAGQAEAGACAHQACAHAAAOIAABGg");
	this.shape_8.setTransform(526.7,135.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgdA1QgPgHgHgOQgIgOAAgSQAAgQAIgOQAHgOAOgIQAOgHAQgBQAaABARARQARARAAAZQAAAagRARQgRARgaAAQgOABgPgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_9.setTransform(513,135.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgOBQIAAhyIAdAAIAABygAgOgyIAAgdIAdAAIAAAdg");
	this.shape_10.setTransform(503,133.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgEBNQgGgDgDgEQgDgFgCgHQgBgGAAgQIAAgxIgOAAIAAgYIAOAAIAAgYIAdgSIAAAqIAVAAIAAAYIgVAAIAAAtIABARIADAEQACABADAAQAEAAAIgDIADAYQgLAFgNAAQgJAAgFgDg");
	this.shape_11.setTransform(496.1,133.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgnAsQgOgPAAgdQAAgbAOgQQAQgQAYgBQAVAAANAKQANAJAFATIgfAFQgBgJgFgEQgGgFgJAAQgJAAgHAIQgHAIAAASQAAAUAHAIQAHAIAKAAQAIAAAGgEQAGgGACgLIAfAEQgGAWgMAKQgOALgWgBQgYAAgQgQg");
	this.shape_12.setTransform(486.3,135.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAWA7IAAg7QAAgRgCgGQgCgFgFgDQgEgDgGAAQgGAAgHAEQgGAEgDAIQgCAHAAARIAAA1IgfAAIAAhyIAdAAIAAARQAPgUAVAAQALAAAIAEQAIADAFAGQAEAGACAHQACAHAAAOIAABGg");
	this.shape_13.setTransform(473,135.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgiA2QgJgFgFgKQgDgJAAgRIAAhHIAeAAIAAA1QABAXABAGQACAFAEAEQAFADAGAAQAHAAAGgFQAGgEADgHQABgGAAgXIAAgxIAgAAIAAByIgdAAIAAgRQgHAJgKAGQgIAFgMAAQgMAAgJgFg");
	this.shape_14.setTransform(459.2,135.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgVBRIAAhaIgRAAIAAgYIARAAIAAgJQABgOADgIQACgHAJgEQAGgGANAAQAOABAMADIgEAWIgPgBQgGAAgDADQgDADAAAIIAAAJIAXAAIAAAYIgXAAIAABag");
	this.shape_15.setTransform(449,133.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgsBFQgRgOgDgbIAggDQADAPAIAIQAJAHANABQAQgBAIgGQAHgHAAgJQAAgFgDgFQgDgEgIgCIgYgHQgagHgLgIQgPgNAAgTQAAgMAHgLQAHgKANgGQANgGASAAQAdAAAQANQAOAOACAWIghABQgCgMgHgGQgHgFgMAAQgOAAgIAGQgFADAAAHQAAAFAFAEQAGAGAWAGQAYAFALAGQALAGAGAJQAHAKAAAPQAAAOgIAMQgHAMgOAGQgPAGgUAAQgdAAgQgOg");
	this.shape_16.setTransform(430.9,133.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAtBQIgOgkIg+AAIgOAkIgiAAIA+ifIAhAAIBACfgAgVARIApAAIgUg7g");
	this.shape_17.setTransform(415.4,133.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgwA9QgVgWAAgmQAAgmAVgWQAVgXAgAAQAdAAATASQALAKAFAUIggAHQgDgMgJgIQgJgHgNAAQgQAAgLANQgLANAAAcQAAAdALANQALANAPAAQANAAAKgIQAJgIAEgSIAgAKQgIAagQANQgRANgaAAQgeAAgVgWg");
	this.shape_18.setTransform(399.1,133.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAvBQIAAh9IggB9IgdAAIggh9IAAB9IgeAAIAAifIAwAAIAcBsIAchsIAxAAIAACfg");
	this.shape_19.setTransform(381.7,133.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#133C9D").s().p("AAZBLIAAhFQAAgMgGgGQgGgHgLAAQgGAAgHAFQgHAEgDAHQgDAFAAANIAAA8IgTAAIAAiVIATAAIAAA2QAMgPASAAQAMAAAJAFQAJAFAEAIQAEAJAAAOIAABFg");
	this.shape_20.setTransform(830.5,365.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#133C9D").s().p("AggAqQgOgPAAgbQAAgQAGgNQAGgNAMgGQAMgIAMABQARgBAMAKQALAJAEAQIgSADQgDgLgGgGQgHgFgKAAQgLAAgJAKQgJAKAAAUQAAAWAJAKQAIAKALAAQALAAAIgIQAHgGACgOIASACQgDATgMALQgNALgSAAQgUAAgNgPg");
	this.shape_21.setTransform(819.7,367.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#133C9D").s().p("AgnAwQgKgJAAgOQAAgIAEgHQAEgGAGgEQAFgCAIgCIAQgDQAVgDAKgDIAAgFQAAgLgFgFQgHgGgNAAQgMAAgGAEQgGAFgDAMIgSgDQACgMAGgGQAFgHALgFQALgDAMAAQAOAAAIADQAJADAEAFQAEAFACAIIABARIAAAWQAAAaABAHQABAGAEAHIgUAAQgDgGAAgHQgLAIgJAEQgIAEgKAAQgSgBgKgIgAgDAGQgLACgFACQgFACgCAEQgDAEAAAFQAAAHAGAFQAFAFALAAQAJAAAIgFQAIgEAEgIQADgGAAgNIAAgGQgKAEgSACg");
	this.shape_22.setTransform(808.2,367.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#133C9D").s().p("AA0BLIAAh8IgsB8IgQAAIgrh+IAAB+IgTAAIAAiVIAeAAIAjBpIAGAWIAIgYIAkhnIAaAAIAACVg");
	this.shape_23.setTransform(793.7,365.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#133C9D").s().p("AAZBLIAAhFQAAgMgGgGQgGgHgLAAQgGAAgHAFQgHAEgDAHQgDAFAAANIAAA8IgTAAIAAiVIATAAIAAA2QAMgPASAAQAMAAAJAFQAJAFAEAIQAEAJAAAOIAABFg");
	this.shape_24.setTransform(773.2,365.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#133C9D").s().p("AgfBFQgMgJAAgSIASADQABAIAFAEQAHAFAMAAQALAAAHgFQAHgFACgJQACgGAAgSQgMAOgRAAQgWAAgMgQQgMgQAAgVQAAgPAFgOQAGgNALgHQAKgHAOAAQASAAAMAPIAAgNIARAAIAABcQAAAagFALQgFAKgLAGQgLAGgPAAQgTAAgMgIgAgTgzQgJAKAAAUQAAAVAJAIQAJAKAKAAQANAAAJgKQAIgIAAgVQAAgUgJgKQgIgKgNAAQgKAAgJAKg");
	this.shape_25.setTransform(761.2,369.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#133C9D").s().p("AgIBLIAAhrIARAAIAABrgAgIg0IAAgWIARAAIAAAWg");
	this.shape_26.setTransform(753.4,365.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#133C9D").s().p("AAnBLIAAhHIhNAAIAABHIgTAAIAAiVIATAAIAAA+IBNAAIAAg+IATAAIAACVg");
	this.shape_27.setTransform(743.5,365.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FB6109").s().p("AAZBLIAAhFQAAgMgGgGQgGgHgLAAQgGAAgHAFQgHAEgDAHQgDAFAAANIAAA8IgTAAIAAiVIATAAIAAA2QAMgPASAAQAMAAAJAFQAJAFAEAIQAEAJAAAOIAABFg");
	this.shape_28.setTransform(833.6,228.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FB6109").s().p("AggAqQgOgPAAgbQAAgQAGgNQAGgNAMgGQAMgIAMABQARgBAMAKQALAJADAQIgSADQgCgLgHgGQgGgFgJAAQgMAAgJAKQgJAKAAAUQAAAWAIAKQAJAKALAAQAMAAAGgIQAIgGACgOIASACQgDATgMALQgMALgTAAQgTAAgOgPg");
	this.shape_29.setTransform(822.8,230.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FB6109").s().p("AgnAwQgKgJAAgOQAAgHAEgIQAEgGAGgEQAFgCAIgCIAQgDQAVgDAKgDIAAgFQAAgLgFgFQgHgGgNAAQgMAAgGAEQgGAFgDAMIgSgDQACgMAGgGQAFgHALgFQALgDAMAAQAOAAAIADQAJADAEAFQAEAFACAIIABARIAAAWQAAAaABAHQABAGAEAHIgUAAQgDgGAAgHQgLAIgJAEQgIAEgKAAQgSgBgKgIgAgDAHQgLABgFACQgFACgCAEQgDAEAAAFQAAAHAGAFQAFAFALAAQAJAAAIgFQAIgEAEgJQADgFAAgNIAAgGQgKAEgSADg");
	this.shape_30.setTransform(811.3,230.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FB6109").s().p("AA0BLIAAh8IgsB8IgQAAIgrh+IAAB+IgTAAIAAiVIAeAAIAjBpIAGAWIAIgYIAkhnIAaAAIAACVg");
	this.shape_31.setTransform(796.8,228.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FB6109").s().p("AAVA2IgRg/IgEgTIgVBSIgTAAIghhrIATAAIARA9IAHAYIAFgXIASg+IARAAIAQA9IAFAVIAHgVIASg9IASAAIgiBrg");
	this.shape_32.setTransform(774.6,230.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FB6109").s().p("AgkAqQgNgPAAgbQAAgdAQgPQAOgMATABQAWgBAOAQQAPAOAAAaQgBATgGAMQgGAMgMAHQgMAHgOAAQgVAAgPgPgAgVgdQgJAKAAATQAAAUAJALQAIALANAAQANAAAKgLQAIgLABgUQgBgTgIgKQgKgLgNAAQgNAAgIALg");
	this.shape_33.setTransform(761.2,230.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FB6109").s().p("AgtBLIAAiVIATAAIAACDIBIAAIAAASg");
	this.shape_34.setTransform(749.9,228.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgkA6QgNgPAAgZQAAgZAMgOQANgNATAAQAPAAANAOIAAgzIAbAAIAACNIgZAAIAAgPQgHAIgIAFQgJAEgHAAQgSAAgMgOgAgOgFQgHAFAAAQQAAAQAFAIQAGAKAKAAQAKAAAGgIQAHgIAAgQQAAgSgHgFQgGgIgKAAQgIAAgGAIg");
	this.shape_35.setTransform(183.6,268.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAUA0IAAg0QAAgPgCgFQgCgFgEgDQgEgCgFAAQgGAAgFADQgGAEgCAGQgCAHAAAQIAAAuIgcAAIAAhlIAaAAIAAAPQANgSATAAQAJAAAIAEQAHADAEAFQAEAFABAHQACAGAAAMIAAA+g");
	this.shape_36.setTransform(171.6,270.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgmAtQgJgJAAgNQAAgJAEgHQAEgHAIgBQAHgEAPgDQARgDAHgDIAAgDQAAgIgEgDQgDgEgJAAQgIAAgEADQgEADgCAHIgZgEQAEgPAKgIQAKgHAUAAQARAAAJAFQAJAEAEAHQADAGAAASIAAAeQAAAOABAGQACAHADAHIgbAAIgDgIIgBgDQgHAHgIADQgGAEgJAAQgQAAgJgJgAAAAGQgLACgDACQgGAEAAAGQAAAGAFAEQAEAEAHAAQAFAAAHgFQAFgDABgGIABgNIAAgGIgPAFg");
	this.shape_37.setTransform(160,270.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAwA0IAAg5QAAgPgDgFQgDgFgIAAQgGgBgFAEQgFAEgDAGQgCAHAAANIAAAxIgZAAIAAg2QAAgQgCgEQgBgEgDgCQgDgCgGAAQgGgBgFAEQgFAEgCAFQgDAHAAANIAAAyIgbAAIAAhlIAZAAIAAAOQAOgRATAAQAKAAAHAFQAFADAFAJQAHgJAIgDQAIgFAJAAQALAAAIAFQAIAFAEAIQADAIAAAOIAABAg");
	this.shape_38.setTransform(145.5,270.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAwA0IAAg5QAAgPgDgFQgDgFgIAAQgGgBgFAEQgFAEgDAGQgCAHAAANIAAAxIgZAAIAAg2QAAgQgCgEQgBgEgDgCQgDgCgGAAQgGgBgFAEQgFAEgCAFQgDAHAAANIAAAyIgbAAIAAhlIAZAAIAAAOQAOgRATAAQAKAAAHAFQAFADAFAJQAHgJAIgDQAIgFAJAAQALAAAIAFQAIAFAEAIQADAIAAAOIAABAg");
	this.shape_39.setTransform(127.7,270.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgZAvQgOgGgGgNQgHgMAAgQQAAgOAHgNQAGgMANgHQAMgHAOAAQAXAAAPAQQAPAPAAAWQAAAXgPAPQgQAQgWAAQgMAAgNgHgAgQgWQgIAIAAAOQAAAPAIAIQAHAIAJAAQAKAAAIgIQAHgIAAgPQAAgOgHgIQgIgIgKAAQgJAAgHAIg");
	this.shape_40.setTransform(112.8,270.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgiAnQgNgOAAgZQAAgYANgOQAOgPAVAAQATAAALAIQALAJAFAQIgbAFQgBgIgFgEQgFgEgIAAQgIAAgGAHQgGAHAAARQAAAQAGAIQAGAHAJAAQAHAAAFgEQAFgFACgKIAbAEQgEATgMAJQgMAKgUAAQgUAAgOgPg");
	this.shape_41.setTransform(101.2,270.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AggA1IAAhmIAZAAIAAAPQAHgLADgDQAFgEAHABQAJAAAJAEIgIAYQgHgEgGAAQgGAAgEAEQgCADgCAHQgDAJAAAYIAAAhg");
	this.shape_42.setTransform(179,246.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AglAkQgKgOAAgWQAAgYAOgOQANgPAUAAQAWAAANAQQAOAPgBAdIhDAAQABANAGAGQAGAHAIAAQAGAAAFgDQAEgEACgIIAcAFQgGAPgLAIQgMAIgRAAQgZAAgNgSgAgNgZQgFAGAAAMIAnAAQgBgMgFgHQgGgGgJAAQgHAAgGAHg");
	this.shape_43.setTransform(168.7,246.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgtAzIAAgVIAngrIAMgPIgKAAIglAAIAAgWIBUAAIAAATIgoAsIgMAPIAMgBIArAAIAAAYg");
	this.shape_44.setTransform(158.2,246.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgMBHIAAhlIAZAAIAABlgAgMgtIAAgZIAZAAIAAAZg");
	this.shape_45.setTransform(150.5,244.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgMBHIAAiNIAZAAIAACNg");
	this.shape_46.setTransform(144.9,244.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgMBHIAAhlIAZAAIAABlgAgMgtIAAgZIAZAAIAAAZg");
	this.shape_47.setTransform(139.4,244.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgJBEQgIgFgHgIIAAAPIgZAAIAAiNIAbAAIAAAzQANgOAPAAQATAAANANQAMAOAAAYQAAAagMAPQgNAOgSAAQgHAAgJgEgAgPgGQgHAGAAAQQAAAQAFAHQAHALAKAAQAJAAAHgHQAGgIAAgRQAAgSgGgFQgHgIgJAAQgJAAgGAHg");
	this.shape_48.setTransform(130.7,244.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgmAtQgJgJAAgNQAAgJAEgHQAEgHAIgBQAHgEAPgDQARgDAHgDIAAgDQAAgIgEgDQgDgEgJAAQgIAAgEADQgEADgCAHIgZgEQAEgPAKgIQAKgHAUAAQARAAAJAFQAJAEAEAHQADAGAAASIAAAeQAAAOABAGQACAHADAHIgbAAIgDgIIgBgDQgHAHgIADQgGAEgJAAQgQAAgJgJgAAAAGQgLACgDACQgGAEAAAGQAAAGAFAEQAEAEAHAAQAFAAAHgFQAFgDABgGIABgNIAAgGIgPAFg");
	this.shape_49.setTransform(118.8,246.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgDBFQgGgDgDgEQgCgEgBgHQgBgEAAgPIAAgsIgNAAIAAgVIANAAIAAgVIAZgQIAAAlIATAAIAAAVIgTAAIAAAoQAAANABADQAAAAAAAAQAAABAAAAQABABAAAAQABAAAAAAQACACADAAQAEAAAHgCIACAUQgJAFgMAAQgIAAgEgCg");
	this.shape_50.setTransform(110,244.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgfAtQgMgJgEgOIAcgFQACAIAFAFQAFAEAIAAQAKAAAGgEQAEgDgBgEQAAgEgCgCQgBgCgIgBQgfgIgJgGQgMgGAAgPQAAgNAKgKQALgJAWAAQAUAAAKAHQALAHADAOIgaAEQgBgGgFgDQgEgDgIAAQgJAAgGADQgCACAAAEQgBACADACQAEADAUAFQAWAFAIAHQAJAGAAANQAAAOgMAKQgMALgXAAQgUAAgMgJg");
	this.shape_51.setTransform(100.8,246.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAUA1IAAg1QAAgPgCgFQgCgFgEgDQgEgCgFAAQgGAAgFADQgGAFgCAFQgCAHAAAQIAAAvIgcAAIAAhmIAaAAIAAAPQANgSATAAQAJABAIADQAHADAEAFQAEAFABAHQACAGAAAMIAAA/g");
	this.shape_52.setTransform(196,222);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AARAzIgRhAIgQBAIgbAAIghhlIAbAAIATBCIAShCIAZAAIARBCIAUhCIAbAAIgiBlg");
	this.shape_53.setTransform(182.1,222.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgaAvQgNgGgHgNQgGgMAAgQQAAgOAGgNQAIgMAMgHQAMgHAOAAQAXAAAPAQQAPAPAAAWQAAAXgPAPQgQAQgWAAQgNAAgNgHgAgRgWQgHAIAAAOQAAAPAHAIQAIAIAJAAQALAAAGgIQAIgIAAgPQAAgOgIgIQgGgIgLAAQgJAAgIAIg");
	this.shape_54.setTransform(168.3,222.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgkA6QgNgPAAgZQAAgZAMgOQANgNATAAQAPAAANAOIAAgzIAbAAIAACNIgZAAIAAgPQgHAIgIAFQgJAEgHAAQgSAAgMgOgAgOgFQgHAFAAAQQAAAQAFAIQAGAKAKAAQAKAAAGgIQAHgIAAgQQAAgSgHgFQgGgIgKAAQgIAAgGAIg");
	this.shape_55.setTransform(155.8,220.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AglAkQgKgOAAgWQAAgYAOgOQANgPAUAAQAWAAANAQQAOAPgBAdIhDAAQABANAGAGQAGAHAIAAQAGAAAFgDQAEgEACgIIAcAFQgGAPgLAIQgMAIgRAAQgZAAgNgSgAgNgZQgFAGAAAMIAnAAQgBgMgFgHQgGgGgJAAQgHAAgGAHg");
	this.shape_56.setTransform(138.7,222.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgeAtQgNgJgEgOIAcgFQACAIAFAFQAFAEAIAAQALAAAFgEQADgDAAgEQAAgEgCgCQgBgCgIgBQgfgIgIgGQgNgGAAgPQAAgNAKgKQALgJAWAAQAUAAALAHQAJAHAEAOIgaAEQgBgGgEgDQgGgDgHAAQgJAAgGADQgCACAAAEQAAACACACQAEADAUAFQAWAFAJAHQAIAGAAANQAAAOgMAKQgMALgXAAQgUAAgLgJg");
	this.shape_57.setTransform(127.5,222.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgZAvQgOgGgGgNQgHgMAAgQQAAgOAHgNQAHgMAMgHQAMgHAOAAQAXAAAPAQQAPAPAAAWQAAAXgPAPQgPAQgXAAQgMAAgNgHgAgRgWQgHAIAAAOQAAAPAHAIQAIAIAJAAQAKAAAIgIQAHgIAAgPQAAgOgHgIQgIgIgKAAQgJAAgIAIg");
	this.shape_58.setTransform(116.1,222.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAbBHIg4hcIAABcIgaAAIAAiNIAcAAIA4BdIAAhdIAbAAIAACNg");
	this.shape_59.setTransform(102.7,220.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AARBHIgYgvIgMAOIAAAhIgbAAIAAiNIAbAAIAABKIAegiIAhAAIgjAjIAmBCg");
	this.shape_60.setTransform(571.2,479.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgiAnQgNgOAAgZQAAgYANgOQAOgPAVAAQATAAALAIQALAJAFAQIgbAFQgBgIgFgEQgFgEgIAAQgIAAgGAHQgGAHAAARQAAAQAGAIQAGAHAJAAQAHAAAFgEQAFgFACgKIAbAEQgEATgMAJQgMAKgUAAQgUAAgOgPg");
	this.shape_61.setTransform(559.6,481.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgmAtQgJgJAAgNQAAgJAEgHQAEgHAIgBQAHgEAPgDQARgDAHgDIAAgDQAAgIgEgDQgDgEgJAAQgIAAgEADQgEADgCAHIgZgEQAEgPAKgIQAKgHAUAAQARAAAJAFQAJAEAEAHQADAGAAASIAAAeQAAAOABAGQACAHADAHIgbAAIgDgIIgBgDQgHAHgIADQgGAEgJAAQgQAAgJgJgAAAAGQgLACgDACQgGAEAAAGQAAAGAFAEQAEAEAHAAQAFAAAHgFQAFgDABgGIABgNIAAgGIgPAFg");
	this.shape_62.setTransform(548.4,481.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgDBFQgGgDgCgEQgDgEgBgHQgCgFAAgOIAAgrIgMAAIAAgWIAMAAIAAgVIAagQIAAAlIATAAIAAAWIgTAAIAAAnQAAANABACQAAABAAAAQAAABAAAAQABABAAAAQAAAAABAAQACACADAAQAEAAAHgDIACAWQgJAEgNAAQgHAAgEgCg");
	this.shape_63.setTransform(539.5,479.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgDBFQgGgDgDgEQgCgEgBgHQgBgFAAgOIAAgrIgNAAIAAgWIANAAIAAgVIAZgQIAAAlIATAAIAAAWIgTAAIAAAnQAAANABACQAAABAAAAQAAABAAAAQABABAAAAQAAAAABAAQACACADAAQAEAAAHgDIACAWQgKAEgLAAQgIAAgEgCg");
	this.shape_64.setTransform(532.9,479.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAoBHIgNggIg3AAIgMAgIgeAAIA4iNIAcAAIA5CNgAgTAPIAlAAIgSg0g");
	this.shape_65.setTransform(522.2,479.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgSBIIAAhQIgQAAIAAgVIAQAAIAAgIQgBgNADgHQADgGAHgEQAGgEAMAAQALAAALADIgDATIgNgBQgGAAgDADQgCACAAAIIAAAIIAUAAIAAAVIgUAAIAABQg");
	this.shape_66.setTransform(507.4,479);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgaAvQgMgGgIgNQgGgMAAgQQAAgOAGgNQAIgMAMgHQAMgHAOAAQAXAAAPAQQAPAPAAAWQAAAXgPAPQgPAQgXAAQgNAAgNgHgAgRgWQgHAIAAAOQAAAPAHAIQAIAIAJAAQALAAAGgIQAIgIAAgPQAAgOgIgIQgGgIgLAAQgJAAgIAIg");
	this.shape_67.setTransform(497.6,481.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AglAkQgKgOAAgWQAAgYAOgOQANgPAUAAQAWAAANAQQAOAPgBAdIhDAAQABANAGAGQAGAHAIAAQAGAAAFgDQAEgEACgIIAcAFQgGAPgLAIQgMAIgRAAQgZAAgNgSgAgNgZQgFAGAAAMIAnAAQgBgMgFgHQgGgGgJAAQgHAAgGAHg");
	this.shape_68.setTransform(480.2,481.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgMBHIAAiNIAZAAIAACNg");
	this.shape_69.setTransform(472,479.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgiBAQgMgIAAgOIABgDIAfADQABAGADACQADACAHAAQALAAAFgCQAEgDABgEQACgEAAgJIAAgPQgNAQgQABQgVAAgMgSQgKgOAAgTQAAgaANgOQAMgNATgBQARABAMARIAAgPIAaAAIAABbQAAASgDAKQgDAIgFAFQgGAGgJACQgJADgOAAQgYAAgLgJgAgOgsQgHAIAAAQQAAAQAHAFQAGAIAIAAQAJAAAHgIQAHgGAAgPQAAgQgGgIQgHgHgKgBQgIAAgGAIg");
	this.shape_70.setTransform(462.9,483.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAUA1IAAg1QAAgPgCgFQgCgFgEgDQgEgDgFAAQgGAAgFAFQgGADgCAHQgCAGAAAQIAAAvIgcAAIAAhmIAaAAIAAAPQANgSATAAQAJABAIADQAHADAEAFQAEAFABAHQACAGAAAMIAAA/g");
	this.shape_71.setTransform(450.9,481);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAoBHIgNggIg3AAIgMAgIgeAAIA4iNIAcAAIA5CNgAgTAPIAlAAIgSg0g");
	this.shape_72.setTransform(437.5,479.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(46));

	// black
	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#8EC9D6").ss(2,0,0,3).p("Eg0SATHIH+AAMBgnAAAEgsUAaJIAAnCMAAAgtQ");
	this.shape_73.setTransform(497.2,324.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#8EC9D6").s().p("EAvOAXtIAAhfIDrBiIjrBfgEgxagVjIheAAIBijrIBgDrg");
	this.shape_74.setTransform(529.8,295.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_74},{t:this.shape_73}]}).wait(46));

	// blue
	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#133C9D").s().p("Egm/AFDQgDgCgBgEQgBgFADgDQACgDAEgBIAngHQAEgBAEADQADACABAEQABAEgDAEQgCADgEABIgnAHIgCAAQgDAAgDgCgEgldAExQgDgCgBgEQgBgFADgDQACgDAEgBIAngHQAEgBAEADQADACABAEQABAEgDAEQgCADgEABIgnAHIgCAAQgDAAgDgCgEgj7AEfQgDgCgBgEQgBgFADgDQACgDAEgBIAngHQAEgBAEADQADACABAEQABAEgDAEQgCADgEABIgnAHIgCAAQgDAAgDgCgEgiZAENQgDgCgBgEQgBgFADgDQACgDAEgBIAngHQAEgBAEADQADACABAEQABAEgDAEQgCADgEABIgnAHIgCAAQgDAAgDgCgEgg3AD7QgDgCgBgEQgBgFADgDQACgDAEgBIAngHQAEgBAEADQADACABAEQABAEgDAEQgCADgEABIgnAHIgCAAQgDAAgDgCgA/VDpQgDgCgBgEQgBgFADgDQACgDAEgBIAngHQAEgBAEADQADACABAEQABAEgDAEQgCADgEABIgnAHIgCAAQgDAAgDgCgA9zDXQgDgCgBgEQgBgFADgDQACgDAEgBIAngHQAEgBAEADQADACABAEQABAEgDAEQgCADgEABIgnAHIgCAAQgDAAgDgCgA8RDFQgDgCgBgEQgBgFADgDQACgDAEgBIAngHQAEgBAEADQADACABAEQABAEgDAEQgCADgEABIgnAHIgCAAQgDAAgDgCgA6vCzQgDgCgBgEQgBgFADgDQACgDAEgBIAngHQAEgBAEADQADACABAEQABAEgDAEQgCADgEABIgnAHIgCAAQgDAAgDgCgA5NChQgDgCgBgEQgBgFADgDQACgDAEgBIAngHQAEgBAEADQADACABAEQABAEgDAEQgCADgEABIgnAHIgCAAQgDAAgDgCgA3rCPQgDgCgBgEQgBgFADgDQACgDAEgBIAngHQAEgBAEADQADACABAEQABAEgDAEQgCADgEABIgnAHIgCAAQgDAAgDgCgA2JB9QgDgCgBgEQgBgFADgDQACgDAEgBIAngHQAEgBAEADQADACABAEQABAEgDAEQgCADgEABIgnAHIgCAAQgDAAgDgCgA0nBrQgDgCgBgEQgBgFADgDQACgDAEgBIAngHQAEgBAEADQADACABAEQABAEgDAEQgCADgEABIgnAHIgCAAQgDAAgDgCgAzFBZQgDgCgBgEQgBgFADgDQACgDAEgBIAngHQAEgBAEADQADACABAEQABAEgDAEQgCADgEABIgnAHIgCAAQgDAAgDgCgAxjBHQgDgCgBgEQgBgFADgDQACgDAEgBIAngHQAEgBAEADQADACABAEQABAEgDAEQgCADgEABIgnAHIgCAAQgDAAgDgCgAwBA1QgDgCgBgEQgBgFADgDQACgDAEgBIAngHQAEgBAEADQADACABAEQABAEgDAEQgCADgEABIgnAHIgCAAQgDAAgDgCgAufAjQgDgCgBgEQgBgFADgDQACgDAEgBIAngHQAEgBAEADQADACABAEQABAEgDAEQgCADgEABIgnAHIgCAAQgDAAgDgCgAs9ARQgDgCgBgEQgBgFADgDQACgDAEAAIAngGQAEgBAEADQADACABACQABAEgDAEQgCADgEABIgnAHIgCAAQgDAAgDgCgArbAAQgDgBgBgEQgBgFADgDQACgDAEgBIAngHQAEgBAEADQADACABAEQABAEgDAEQgCADgEABIgnAFIgCAAQgDAAgDgBgAp5gRQgDgCgBgEQgBgFADgDQACgDAEgBIAngHQAEgBAEADQADACABAEQABAEgDAEQgCADgEABIgnAHIgCAAQgDAAgDgCgAoXgjQgDgCgBgEQgBgEADgEQACgDAEgBIAngHQAEgBADACQAEACABAEQABAEgDAEQgCADgEABIgnAIIgCAAQgDAAgDgCgAm1g1QgDgDgBgEQgBgEADgDQACgEAEAAIAngIQAEgBADACQAEACABAEQABAEgDAEQgCADgEABIgnAIIgCAAQgDAAgDgBgAlThIQgDgDgBgEQgBgEADgDQACgEAEAAIAngHQAEgBAEACQADACABAFQABAEgDADQgCADgEABIgnAHIgCAAQgDAAgDgBgAjxhaQgDgDgBgEQgBgEADgDQACgEAEAAIAngIQAEgBADACQAEACABAEQABAEgDAEQgCADgEABIgnAIIgCAAQgDAAgDgBgAiPhtQgDgDgBgEQgBgEADgDQACgEAEAAIAngIQAEgBADACQAEACABAEQABAEgDAEQgCADgEABIgnAIIgCAAQgDAAgDgBgAgtiAQgDgDgBgEQgBgEADgDQACgEAEAAIAngIQACgBADACQAEACABAEQABAEgDAEQgCADgEABIglAIIgCAAQgDAAgDgBgAAziTQgDgDgBgEQgBgEADgDQACgEAEAAIAngHQAEgBAEACQADACABAFQABAEgDADQgCADgEABIgnAHIgCAAQgDAAgDgBgACVilQgDgDgBgEQgBgEADgDQACgEAEAAIAngIQAEgBADACQAEACABAEQABAEgDAEQgCADgEABIgnAIIgCAAQgDAAgDgBgAD3i4QgDgDgBgEQgBgEADgDQACgEAEAAIAngIQAEgBADACQAEACABAEQABAEgDAEQgCADgEABIgnAIIgCAAQgDAAgDgBgAFZjLQgDgDgBgEQgBgEADgDQACgEAEAAIAngHQAEgBAEACQADACABAFQABAEgDADQgCADgEABIgnAHIgCAAQgDAAgDgBgAG7jdQgDgDgBgEQgBgEADgDQACgEAEAAIAngIQAEgBADACQAEACABAEQABAEgDAEQgCADgEABIgnAIIgCAAQgDAAgDgBgAIdjwQgDgDgBgEQgBgEADgDQACgEAEAAIAngIQAEgBADACQAEACABAEQABAEgDAEQgCADgEABIgnAIIgCAAQgDAAgDgBgAJ/kDQgDgDgBgEQgBgEADgDQACgEAEAAIAngHQAEgBAEACQADACABAFQABAEgDADQgCADgEABIgnAHIgCAAQgDAAgDgBgALhkVQgDgDgBgEQgBgEADgDQACgEAEAAIAngIQAEgBADACQAEACABAEQABAEgDAEQgCADgEABIgnAIIgCAAQgDAAgDgBgANDkoQgDgDgBgEQgBgEADgDQACgEAEAAIAtgJIACgBIAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAIgDAAIgsAJIgCAAQgDAAgDgBgEAmSgEwQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIAoAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgEAkugEwQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIAoAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgEAjKgEwQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIAoAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgEAhmgEwQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIAoAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgEAgCgEwQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIAoAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAeekwQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIAoAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAc6kwQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIAoAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAbWkwQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIAoAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAZykwQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIAoAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAYOkwQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIAoAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAWqkwQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIAoAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAVGkwQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIAoAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgATikwQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIAoAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAR+kwQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIAoAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAQakwQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIAoAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAO2kwQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIAoAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAg");
	this.shape_75.setTransform(584.3,412.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_75).wait(46));

	// orange
	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#FB6109").ss(2,0,0,3).p("A+4PeMAtwge5IQGAA");
	this.shape_76.setTransform(641.7,345.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_76).wait(46));

	// t1
	this.instance = new lib.point_1("synched",0);
	this.instance.setTransform(360.7,132.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(46));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(500,275,1000,550);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;