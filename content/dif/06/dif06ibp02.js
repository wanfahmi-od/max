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
		{src:"images/b737_max_8_cockpit.png", id:"b737_max_8_cockpit"},
		{src:"images/idu01p02_mfd.png", id:"idu01p02_mfd"},
		{src:"images/idu01p02_mfd_small.png", id:"idu01p02_mfd_small"},
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



(lib.b737_max_8_cockpit = function() {
	this.initialize(img.b737_max_8_cockpit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1721,2055);


(lib.idu01p02_mfd = function() {
	this.initialize(img.idu01p02_mfd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1212,676);


(lib.idu01p02_mfd_small = function() {
	this.initialize(img.idu01p02_mfd_small);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,515,405);


(lib.texture = function() {
	this.initialize(img.texture);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.titlecopy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAuIAAgSIAQAAIAAASgAgHgbIAAgSIAQAAIAAASg");
	this.shape.setTransform(457.6,13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgnBBIAAh/IAPAAIAAAMQAEgHAHgEQAGgDAIAAQAMAAAIAGQAKAGAEALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgGAAgHgDQgHgDgEgFIAAAtgAgRgqQgIAJAAASQAAAQAIAJQAHAIAKAAQAIAAAJgJQAGgIAAgRQAAgSgGgJQgIgJgJAAQgKAAgHAKg");
	this.shape_1.setTransform(450.3,15.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_2.setTransform(439.9,13.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgGgEgFAAQgGAAgCADQgDADgDAGQgCAIAAAKIAAAvg");
	this.shape_3.setTransform(427.7,13.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgdAkQgMgNgBgXQABgVAMgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgLgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_4.setTransform(419,13.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AASAuIgPg2IgDgQIgSBGIgQAAIgdhbIARAAIAPA0IAFAUIAFgTIAPg1IAOAAIAOA0IAFASIAFgSIAQg0IAPAAIgdBbg");
	this.shape_5.setTransform(407.5,13.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_6.setTransform(396,13.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgnBBIAAh/IAPAAIAAAMQAEgHAHgEQAGgDAIAAQALAAAJAGQAKAGAEALQAFAMAAANQAAAOgFAKQgFALgKAGQgKAGgKAAQgGAAgHgDQgHgDgDgFIAAAtgAgRgqQgIAJAAASQAAAQAIAJQAHAIAKAAQAJAAAIgJQAGgIAAgRQAAgSgGgJQgIgJgJAAQgJAAgIAKg");
	this.shape_7.setTransform(386.3,15.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_8.setTransform(374,11.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AghApQgJgIAAgLQABgHADgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAKgDAJAAQANAAAHADQAHACAEAFQADAEABAGIABAPIAAATQAAAWACAGQABAGADAFIgRAAQgDgFAAgGQgJAHgIADQgGADgJAAQgQAAgIgHgAgCAFQgKACgEACQgEABgCAEQgDADAAAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_9.setTransform(367,13.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_10.setTransform(357.8,13.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgsIAAgTIAPAAIAAATg");
	this.shape_11.setTransform(351,11.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgGgEgFAAQgGAAgCADQgDADgDAGQgCAIAAAKIAAAvg");
	this.shape_12.setTransform(346.7,13.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_13.setTransform(340.6,12.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_14.setTransform(333.8,13.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgMgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgLAAQgJAAgIAHg");
	this.shape_15.setTransform(324,13.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgGBAIAAh/IAOAAIAAB/g");
	this.shape_16.setTransform(317,11.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_17.setTransform(310,13.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgGBAIAAh/IANAAIAAB/g");
	this.shape_18.setTransform(298,11.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AghApQgIgIgBgLQAAgHADgGQAEgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgFAEQgGAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAKgDAJAAQAMAAAIADQAHACADAFQAFAEABAGIABAPIAAATQAAAWAAAGQABAGAEAFIgRAAQgCgFgBgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgDAFQgJACgEACQgEABgDAEQgBADAAAEQAAAHAEAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQADgFgBgLIAAgFQgIADgQACg");
	this.shape_19.setTransform(291,13.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgGBAIAAhcIANAAIAABcgAgGgsIAAgTIANAAIAAATg");
	this.shape_20.setTransform(284,11.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_21.setTransform(279.6,12.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgGBAIAAhcIANAAIAABcgAgGgsIAAgTIANAAIAAATg");
	this.shape_22.setTransform(275,11.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_23.setTransform(268,13.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgsIAAgTIAPAAIAAATg");
	this.shape_24.setTransform(261,11.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_25.setTransform(249,13.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_26.setTransform(239,13.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_27.setTransform(224.4,13.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AghA/IgCgPIAJACQAFAAAEgCQADgCACgDIAFgMIABgEIgjhbIARAAIATA2IAFAUIAGgUIAUg2IAQAAIgjBdIgHAVQgEAIgGAEQgFADgIAAQgEAAgGgCg");
	this.shape_28.setTransform(215.6,15.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHADgGQADgGAFgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgGAEQgFAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQALAAAIADQAHACAEAFQADAEABAGIACAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgCADgBAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgPACg");
	this.shape_29.setTransform(206,13.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgGBAIAAh/IANAAIAAB/g");
	this.shape_30.setTransform(199,11.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgnBBIAAh/IAOAAIAAAMQAGgHAGgEQAGgDAHAAQAMAAAKAGQAIAGAFALQAFAMAAANQAAAOgFAKQgFALgKAGQgKAGgKAAQgHAAgGgDQgGgDgFgFIAAAtgAgRgqQgIAJAAASQAAAQAHAJQAIAIAKAAQAIAAAIgJQAIgIAAgRQAAgSgIgJQgHgJgJAAQgKAAgHAKg");
	this.shape_31.setTransform(192.3,15.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_32.setTransform(182.4,13.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgGBAIAAhcIANAAIAABcgAgGgsIAAgTIANAAIAAATg");
	this.shape_33.setTransform(176,11.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgTA7QgKgGgFgLQgFgLAAgOQAAgOAFgKQAFgMAJgFQAJgHALAAQAHABAGADQAHADAFAHIAAgvIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgQgIQgHAIAAARQAAARAIAJQAHAJAJAAQAKAAAIgIQAHgJAAgRQAAgSgHgIQgIgJgLAAQgIAAgIAJg");
	this.shape_34.setTransform(168.7,12);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgLAAgOQAAgOAFgKQAFgMAJgFQAJgHALAAQAHABAHADQAGADAEAHIAAgvIAQAAIAAB/IgPAAIAAgMQgJAOgQAAQgKAAgJgGgAgQgIQgGAIAAARQgBARAIAJQAHAJAJAAQAKAAAHgIQAIgJgBgRQABgSgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_35.setTransform(153.7,12);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgFgEgGAAQgGAAgCADQgDADgDAGQgCAIAAAKIAAAvg");
	this.shape_36.setTransform(146.7,13.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AghApQgIgIgBgLQAAgHADgGQAEgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgFAEQgGAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAKgDAJAAQAMAAAIADQAHACADAFQAFAEABAGIABAPIAAATQgBAWABAGQABAGAEAFIgRAAQgCgFgBgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgDAFQgJACgEACQgEABgDAEQgBADAAAEQAAAHAEAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQADgFgBgLIAAgFQgIADgQACg");
	this.shape_37.setTransform(138,13.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_38.setTransform(128,13.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgYA0IAAALIgPAAIAAh/IAQAAIAAAuQAKgNANAAQAJABAIADQAHAEAFAGQAFAGADAJQADAHAAAKQAAAYgMANQgMANgQAAQgPAAgJgNgAgRgIQgHAIAAAQQAAAQAEAIQAIAMAMAAQAJAAAHgJQAIgJAAgSQAAgQgHgIQgIgJgJAAQgJAAgIAJg");
	this.shape_39.setTransform(118.2,12);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_40.setTransform(108,13.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgHBAIAAhcIAOAAIAABcgAgHgsIAAgTIAOAAIAAATg");
	this.shape_41.setTransform(101,11.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAGAAQAHAAAJAFIgGAPQgFgEgGAAQgFAAgDADQgEADgCAGQgCAIAAAKIAAAvg");
	this.shape_42.setTransform(91.7,13.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_43.setTransform(83,13.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgKQAAgIACgFQACgHAGgDQADgEALAAIAPABIgDAOIgJAAQgHAAgDACQgDADAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_44.setTransform(75.9,11.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_45.setTransform(63.4,13.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_46.setTransform(56.6,12.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_47.setTransform(52,11.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_48.setTransform(44.9,13.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHADgGQADgGAFgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgGAEQgFAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQALAAAIADQAHACAEAFQADAEABAGIACAPIAAATQAAAWABAGQABAGACAFIgQAAQgDgFAAgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgCADgBAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgPACg");
	this.shape_49.setTransform(35,13.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgKQAAgIACgFQACgHAGgDQAEgEAKAAIAPABIgCAOIgKAAQgHAAgDACQgDADAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_50.setTransform(27.9,11.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQAMAMgBAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_51.setTransform(20,13.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("Ag0BAIAAh/IAtAAQANAAAHACQAMACAHAHQALAJAFANQAFAOAAAQQAAANgEAMQgDALgGAIQgFAHgGAFQgHADgJADQgJACgJAAgAgjAxIAcAAQAKAAAIgCQAHgDAEgFQAGgFAEgLQADgKAAgNQAAgUgHgLQgGgLgKgDQgHgCgNgBIgbAAg");
	this.shape_52.setTransform(8.7,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,462,24.1);


(lib.titlecopy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAuIAAgSIAQAAIAAASgAgHgbIAAgSIAQAAIAAASg");
	this.shape.setTransform(130.6,13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgcA7QgLgHgFgLQgFgMAAgUIAAhJIARAAIAABJQAAAQADAJQADAHAIAFQAHAEALAAQARAAAIgJQAIgIAAgYIAAhJIARAAIAABJQAAATgEALQgFAMgLAHQgLAHgTAAQgQAAgMgGg");
	this.shape_1.setTransform(121.5,12);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag0BAIAAh/IAtAAQANAAAHACQAMACAHAHQALAJAFANQAFAOAAAQQAAANgEAMQgDALgGAIQgFAHgGAFQgHADgJADQgJACgJAAgAgjAxIAcAAQAKAAAIgCQAHgDAEgFQAGgFAEgLQADgKAAgNQAAgUgHgLQgGgLgKgDQgHgCgNgBIgbAAg");
	this.shape_2.setTransform(108.7,11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgLAAgOQAAgOAFgKQAFgMAJgFQAJgHALAAQAHABAHADQAGADAEAHIAAgvIAQAAIAAB/IgPAAIAAgMQgIAOgRAAQgKAAgJgGgAgQgIQgGAIAAARQgBARAIAJQAIAJAIAAQAKAAAHgIQAIgJgBgRQABgSgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_3.setTransform(91.7,12);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgFgEgGAAQgGAAgCADQgEADgCAGQgCAIAAAKIAAAvg");
	this.shape_4.setTransform(84.7,13.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHADgGQADgGAGgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACADAFQAFAEABAGIAAAPIAAATQAAAWABAGQABAGAEAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgDAFQgJACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgQACg");
	this.shape_5.setTransform(76,13.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_6.setTransform(66,13.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgYA0IAAALIgPAAIAAh/IAQAAIAAAuQAKgNANAAQAJABAIADQAHAEAFAGQAFAGADAJQADAHAAAKQAAAYgMANQgMANgQAAQgPAAgJgNgAgRgIQgHAIAAAQQAAAQAEAIQAIAMAMAAQAJAAAHgJQAIgJAAgSQAAgQgHgIQgIgJgJAAQgJAAgIAJg");
	this.shape_7.setTransform(56.2,12);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_8.setTransform(46,13.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgHBAIAAhcIAOAAIAABcgAgHgsIAAgTIAOAAIAAATg");
	this.shape_9.setTransform(39,11.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_10.setTransform(29.6,12.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgKQAAgIACgFQACgHAGgDQADgEALAAIAPABIgDAOIgJAAQgHAAgDACQgDADAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_11.setTransform(24.9,11.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgNAAQgIAAgIAHg");
	this.shape_12.setTransform(17,13.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgnBAIAAh/IARAAIAABwIA+AAIAAAPg");
	this.shape_13.setTransform(7.3,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,135.2,24.1);


(lib.titlecopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgUBUQAYgrAAgpQAAgPgDgRQgBgNgGgMIgOgaIALAAQAPAWAIAWQAHAUAAATQAAAXgJAWQgKAWgLARg");
	this.shape.setTransform(250.3,13.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_1.setTransform(242.1,13.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgNAAQgIAAgIAHg");
	this.shape_2.setTransform(232.1,13.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgIAAgIAHg");
	this.shape_3.setTransform(222.1,13.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAGAAQAHAAAJAFIgFAPQgGgEgGAAQgFAAgDADQgEADgBAGQgDAIAAAKIAAAvg");
	this.shape_4.setTransform(214.8,13.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_5.setTransform(206.9,13.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_6.setTransform(197.5,13.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_7.setTransform(183.5,13.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgGBAIAAhcIAOAAIAABcgAgGgsIAAgTIAOAAIAAATg");
	this.shape_8.setTransform(177.1,11.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgGQgGgFgJAAQgFAAgGAEQgGAEgDAFQgDAFAAALIAAAzIgPAAIAAh/IAPAAIAAAvQAMgNAOgBQALAAAHAFQAIAEADAHQAEAHgBAMIAAA7g");
	this.shape_9.setTransform(170.1,11.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_10.setTransform(162.7,12.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_11.setTransform(150.1,13.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_12.setTransform(140.1,13.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_13.setTransform(127.7,12.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgGBAIAAhcIAOAAIAABcgAgGgsIAAgTIAOAAIAAATg");
	this.shape_14.setTransform(123.1,11.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgKQAAgIACgFQACgHAGgDQAEgEAKAAIAPABIgCAOIgKAAQgHAAgDACQgDADAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_15.setTransform(119,11.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_16.setTransform(106.1,13.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_17.setTransform(98.7,12.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgLAAgOQAAgOAFgKQAFgMAJgFQAJgHALAAQAHABAGADQAHADAFAHIAAgvIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgPgIQgIAIAAARQABARAHAJQAIAJAIAAQAKAAAIgIQAGgJABgRQgBgSgGgIQgIgJgLAAQgIAAgHAJg");
	this.shape_18.setTransform(85.8,12);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgdAkQgMgNgBgXQABgVAMgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAIAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_19.setTransform(76.1,13.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_20.setTransform(69.1,11.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQAMAAAHADQAHACAEAFQADAEACAGIABAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgQACg");
	this.shape_21.setTransform(62.1,13.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_22.setTransform(52.9,13.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_23.setTransform(43.5,13.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgcA7QgLgHgFgLQgFgMAAgUIAAhJIARAAIAABJQAAAQADAJQADAHAIAFQAHAEALAAQARAAAIgJQAIgIAAgYIAAhJIARAAIAABJQAAATgEALQgFAMgLAHQgLAHgTAAQgQAAgMgGg");
	this.shape_24.setTransform(27.6,12);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("Ag0BAIAAh/IAtAAQANAAAHACQAMACAHAHQALAJAFANQAFAOAAAQQAAANgEAMQgDALgGAIQgFAHgGAFQgHADgJADQgJACgJAAgAgjAxIAcAAQAKAAAIgCQAHgDAEgFQAGgFAEgLQADgKAAgNQAAgUgHgLQgGgLgKgDQgHgCgNgBIgbAAg");
	this.shape_25.setTransform(14.8,11.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAJBUQgLgRgJgWQgJgWAAgXQAAgTAHgUQAIgWAOgWIAMAAIgOAaQgGAMgBANQgEARAAAPQAAApAZArg");
	this.shape_26.setTransform(5.3,13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,255.2,24.1);


(lib.titlecopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGBAIAAh/IAOAAIAAB/g");
	this.shape.setTransform(114.5,34);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_1.setTransform(107.5,35.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_2.setTransform(97.5,35.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAJgDIAAgEQAAgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAFAEABAGIABAPIAAATQAAAWAAAGQABAGADAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgDAEQgBADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQADgFgBgLIAAgFQgIADgQACg");
	this.shape_3.setTransform(87.5,35.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgvBAIAAh/IAvAAQAMAAAGABQAKACAGAFQAHAEAEAIQADAIABAJQgBARgJAJQgLAMgcAAIgeAAIAAA0gAgegBIAeAAQASAAAGgHQAHgGAAgLQAAgIgEgGQgEgFgHgCIgQgBIgeAAg");
	this.shape_4.setTransform(76.8,34);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_5.setTransform(63.5,34);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_6.setTransform(56.5,35.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAGAAQAHAAAJAFIgFAPQgGgEgGAAQgFAAgDADQgEADgBAGQgDAIAAAKIAAAvg");
	this.shape_7.setTransform(49.2,35.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgNIAMAAIAAgXIANgJIAAAgIAQAAIAAANIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_8.setTransform(43.1,34.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_9.setTransform(35.5,35.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_10.setTransform(25.5,35.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgdA6QgNgJgHgQQgGgQgBgRQAAgTAIgQQAIgOAOgIQAOgIAPAAQAUAAANAKQANAKAFARIgQAEQgFgOgJgGQgIgHgNAAQgNABgKAGQgKAIgEAMQgEAMAAAMQAAAPAFAMQAFANAJAFQALAHAKgBQAOABAKgJQAKgIADgQIARAEQgFAVgOALQgOALgUAAQgTAAgNgIg");
	this.shape_11.setTransform(14.1,34);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AghA/IgCgPIAJACQAFAAAEgCQADgCACgDIAFgMIABgEIgjhbIARAAIATA2IAFAUIAGgUIAUg2IAQAAIgjBdIgHAVQgEAIgGAEQgFADgIAAQgEAAgGgCg");
	this.shape_12.setTransform(117.6,15.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQAMAAAHADQAHACAEAFQADAEACAGIABAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgQACg");
	this.shape_13.setTransform(108,13.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgGBAIAAh/IAOAAIAAB/g");
	this.shape_14.setTransform(101,11.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgnBBIAAh/IAOAAIAAAMQAGgHAGgEQAGgDAHAAQAMAAAKAGQAIAGAFALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgGAAgHgDQgGgDgFgFIAAAtgAgRgqQgIAJAAASQAAAQAHAJQAIAIAKAAQAJAAAHgJQAIgIAAgRQAAgSgIgJQgHgJgJAAQgKAAgHAKg");
	this.shape_15.setTransform(94.3,15.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_16.setTransform(84.4,13.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgGBAIAAhcIAOAAIAABcgAgGgsIAAgTIAOAAIAAATg");
	this.shape_17.setTransform(78,11.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ag0BAIAAh/IAtAAQANAAAHACQAMACAHAHQALAJAFANQAFAOAAAQQAAANgEAMQgDALgGAIQgFAHgGAFQgHADgJADQgJACgJAAgAgjAxIAcAAQAKAAAIgCQAHgDAEgFQAGgFAEgLQADgKAAgNQAAgUgHgLQgGgLgKgDQgHgCgNgBIgbAAg");
	this.shape_18.setTransform(69.7,11.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgNAAQgIAAgIAHg");
	this.shape_19.setTransform(53,13.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_20.setTransform(43,13.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgsIAAgTIAPAAIAAATg");
	this.shape_21.setTransform(36,11.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgaA7QgLgIABgPIAPACQABAHAEAEQAGAEAKAAQAJAAAHgEQAFgFADgIQABgEAAgQQgLAMgOAAQgTAAgKgOQgLgOAAgRQAAgNAFgMQAFgLAJgGQAKgGALAAQAQAAAKANIAAgLIAOAAIAABPQABAVgFAKQgEAJgKAFQgKAFgMAAQgQAAgKgHgAgQgrQgHAIgBARQABASAHAHQAHAIAJAAQALAAAIgIQAHgHAAgSQAAgRgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_22.setTransform(28.7,15.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_23.setTransform(19,13.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgvBAIAAh/IBcAAIAAAPIhKAAIAAAoIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_24.setTransform(8.2,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,124,46.2);


(lib.title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAuIAAgSIAQAAIAAASgAgHgbIAAgSIAQAAIAAASg");
	this.shape.setTransform(142.6,13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgcA7QgLgHgFgLQgFgMAAgUIAAhJIARAAIAABJQAAAQADAJQADAHAIAFQAHAEALAAQARAAAIgJQAIgIAAgYIAAhJIARAAIAABJQAAATgEALQgFAMgLAHQgLAHgTAAQgQAAgMgGg");
	this.shape_1.setTransform(133.5,12);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag0BAIAAh/IAtAAQANAAAHACQAMACAHAHQALAJAFANQAFAOAAAQQAAANgEAMQgDALgGAIQgFAHgGAFQgHADgJADQgJACgJAAgAgjAxIAcAAQAKAAAIgCQAHgDAEgFQAGgFAEgLQADgKAAgNQAAgUgHgLQgGgLgKgDQgHgCgNgBIgbAAg");
	this.shape_2.setTransform(120.7,11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgLAAgOQAAgOAFgKQAFgMAJgFQAJgHALAAQAHABAGADQAHADAEAHIAAgvIAQAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgPgIQgIAIAAARQABARAHAJQAIAJAIAAQAKAAAIgIQAGgJABgRQgBgSgGgIQgIgJgLAAQgJAAgGAJg");
	this.shape_3.setTransform(103.7,12);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAIAAAJAFIgFAPQgHgEgFAAQgGAAgCADQgDADgCAGQgDAIAAAKIAAAvg");
	this.shape_4.setTransform(96.7,13.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AghApQgJgIAAgLQABgHADgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQADgKAEgGQAFgHAJgDQAKgDAJAAQANAAAHADQAHACAEAFQADAEABAGIABAPIAAATQAAAWACAGQABAGACAFIgQAAQgDgFAAgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgDADAAAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_5.setTransform(88,13.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_6.setTransform(78,13.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgYA0IAAALIgPAAIAAh/IAQAAIAAAuQAKgNANAAQAJABAIADQAHAEAFAGQAFAGADAJQADAHAAAKQAAAYgMANQgMANgQAAQgPAAgJgNgAgRgIQgHAIAAAQQAAAQAEAIQAIAMAMAAQAJAAAHgJQAIgJAAgSQAAgQgHgIQgIgJgJAAQgJAAgIAJg");
	this.shape_7.setTransform(68.2,12);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_8.setTransform(58,13.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgGBAIAAhcIAOAAIAABcgAgGgsIAAgTIAOAAIAAATg");
	this.shape_9.setTransform(51,11.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_10.setTransform(41.6,12.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgGQgGgFgJAAQgFAAgGAEQgHAEgCAFQgDAFAAALIAAAzIgPAAIAAh/IAPAAIAAAvQAMgNAOgBQAKAAAIAFQAIAEADAHQADAHAAAMIAAA7g");
	this.shape_11.setTransform(34,11.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgbA7QgKgIAAgPIAQACQABAHAEAEQAGAEAKAAQAKAAAFgEQAGgFADgIQAAgEAAgQQgKAMgOAAQgSAAgLgOQgKgOAAgRQgBgNAFgMQAFgLAJgGQAJgGAMAAQAPAAALANIAAgLIAPAAIAABPQgBAVgEAKQgEAJgKAFQgJAFgNAAQgQAAgLgHgAgQgrQgIAIABARQgBASAIAHQAHAIAJAAQALAAAHgIQAIgHAAgSQAAgRgIgIQgIgJgKAAQgJAAgHAJg");
	this.shape_12.setTransform(23.7,15.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgsIAAgTIAPAAIAAATg");
	this.shape_13.setTransform(17,11.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAjBAIgRgbIgMgRIgHgJIgIgDIgJgBIgUAAIAAA5IgRAAIAAh/IA3AAQARAAAJAEQAJADAGAJQAFAJAAAKQAAAOgJAJQgJAIgSACQAGAEAEADQAHAHAHAKIAWAjgAgmgGIAlAAQAJAAAHgCQAGgDAEgFQADgFAAgHQAAgJgGgFQgHgHgOAAIgnAAg");
	this.shape_14.setTransform(9.1,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,147.2,24.1);


(lib.prot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.texture();
	this.instance.setTransform(0,0,100,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1000,550);


(lib.point_2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgUBUQAYgrAAgpQAAgPgDgRQgBgNgGgLIgOgbIALAAQAPAWAIAXQAHATAAATQAAAXgJAWQgKAWgLARg");
	this.shape.setTransform(131.2,3.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag0BAIAAh/IAtAAQANAAAHACQAMACAHAHQALAJAFAOQAFAMAAARQAAAOgEALQgDALgGAHQgFAIgGAEQgHAEgJADQgJACgJAAgAgjAxIAcAAQAKAAAIgDQAHgCAEgEQAGgGAEgKQADgLAAgNQAAgUgHgKQgGgLgKgEQgHgCgNAAIgbAAg");
	this.shape_1.setTransform(121.7,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgvBAIAAh/IBcAAIAAAQIhKAAIAAAnIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_2.setTransform(109.2,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAJBUQgLgRgJgWQgJgWAAgXQAAgTAHgTQAIgXAOgWIAMAAIgOAaQgGAMgBANQgEARAAAPQAAApAZArg");
	this.shape_3.setTransform(100.2,3.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AghA/IgCgPIAJACQAFAAAEgCQADgCACgDIAFgMIABgEIgjhbIARAAIATA2IAFAUIAGgUIAUg2IAQAAIgjBdIgHAVQgEAIgGAEQgFADgIAAQgEAAgGgCg");
	this.shape_4.setTransform(87.5,5.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAJgDIAAgEQAAgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAEAEACAGIABAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgQACg");
	this.shape_5.setTransform(77.9,3.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgGBAIAAh/IAOAAIAAB/g");
	this.shape_6.setTransform(70.9,1.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgnBBIAAh/IAOAAIAAAMQAGgHAGgEQAGgDAHAAQAMAAAKAGQAIAGAFALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgGAAgHgDQgGgDgEgFIAAAtgAgRgqQgIAJAAASQAAAQAHAJQAIAIAKAAQAIAAAIgJQAIgIgBgRQABgSgIgJQgHgJgJAAQgKAAgHAKg");
	this.shape_7.setTransform(64.2,4.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_8.setTransform(54.4,3.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgGBAIAAhbIAOAAIAABbgAgGgtIAAgSIAOAAIAAASg");
	this.shape_9.setTransform(48,1.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag0BAIAAh/IAtAAQANAAAHACQAMACAHAHQALAJAFAOQAFAMAAARQAAAOgEALQgDALgGAHQgFAIgGAEQgHAEgJADQgJACgJAAgAgjAxIAcAAQAKAAAIgDQAHgCAEgEQAGgGAEgKQADgLAAgNQAAgUgHgKQgGgLgKgEQgHgCgNAAIgbAAg");
	this.shape_10.setTransform(39.7,1.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgeAkQgLgNAAgXQAAgVALgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgLAAQgJAAgIAHg");
	this.shape_11.setTransform(22.9,3.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_12.setTransform(12.9,3.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgHBAIAAhbIAOAAIAABbgAgHgtIAAgSIAOAAIAAASg");
	this.shape_13.setTransform(6,1.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgaA7QgLgIABgPIAPACQABAHAEAEQAGAEAKAAQAJAAAHgEQAFgFADgIQABgEAAgQQgLAMgOAAQgTAAgKgOQgLgOAAgRQAAgNAFgMQAFgLAJgGQAKgGALAAQAQAAAKANIAAgLIAPAAIAABPQAAAVgFAKQgFAJgJAFQgKAFgMAAQgQAAgKgHgAgQgrQgIAIAAARQAAASAIAHQAHAIAJAAQALAAAHgIQAIgHAAgSQAAgRgIgIQgIgJgKAAQgJAAgHAJg");
	this.shape_14.setTransform(-1.3,5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_15.setTransform(-11.1,3.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgvBAIAAh/IBcAAIAAAQIhKAAIAAAnIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_16.setTransform(-21.8,1.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgQARQgHgIAAgJQAAgJAHgHQAIgHAIAAQAKAAAHAHQAIAHgBAJQABAJgIAIQgHAIgKgBQgIABgIgIg");
	this.shape_17.setTransform(-40.9,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.4,-10.4,184.6,24.1);


(lib.point_1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgUBUQAYgrAAgpQAAgPgDgRQgBgNgGgLIgOgbIALAAQAPAWAIAXQAHATAAATQAAAXgJAWQgKAWgLARg");
	this.shape.setTransform(139.9,3.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag0BAIAAh/IAtAAQANAAAHACQAMACAHAHQALAJAFAOQAFAMAAARQAAAOgEALQgDALgGAHQgFAIgGAEQgHAEgJADQgJACgJAAgAgjAxIAcAAQAKAAAIgDQAHgCAEgEQAGgGAEgKQADgLAAgNQAAgUgHgKQgGgLgKgEQgHgCgNAAIgbAAg");
	this.shape_1.setTransform(130.4,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAhBAIhChjIAABjIgQAAIAAh/IARAAIBCBjIAAhjIAQAAIAAB/g");
	this.shape_2.setTransform(117.1,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAJBUQgLgRgJgWQgJgWAAgXQAAgTAHgTQAIgXAOgWIAMAAIgOAaQgGAMgBANQgEARAAAPQAAApAZArg");
	this.shape_3.setTransform(107.9,3.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AghA/IgCgPIAJACQAFAAAEgCQADgCACgDIAFgMIABgEIgjhbIARAAIATA2IAFAUIAGgUIAUg2IAQAAIgjBdIgHAVQgEAIgGAEQgFADgIAAQgEAAgGgCg");
	this.shape_4.setTransform(95.3,5.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAJgDIAAgEQAAgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAFAEABAGIABAPIAAATQAAAWAAAGQABAGADAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgDAEQgBADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQADgFgBgLIAAgFQgIADgQACg");
	this.shape_5.setTransform(85.7,3.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_6.setTransform(78.7,1.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgnBBIAAh/IAPAAIAAAMQAFgHAGgEQAGgDAIAAQALAAAKAGQAJAGAEALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgHAAgGgDQgGgDgEgFIAAAtgAgRgqQgIAJAAASQAAAQAHAJQAIAIAKAAQAJAAAHgJQAIgIgBgRQABgSgIgJQgHgJgJAAQgKAAgHAKg");
	this.shape_7.setTransform(72,4.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_8.setTransform(62.1,3.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgHBAIAAhbIAPAAIAABbgAgHgtIAAgSIAPAAIAAASg");
	this.shape_9.setTransform(55.7,1.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag0BAIAAh/IAtAAQANAAAHACQAMACAHAHQALAJAFAOQAFAMAAARQAAAOgEALQgDALgGAHQgFAIgGAEQgHAEgJADQgJACgJAAgAgjAxIAcAAQAKAAAIgDQAHgCAEgEQAGgGAEgKQADgLAAgNQAAgUgHgKQgGgLgKgEQgHgCgNAAIgbAAg");
	this.shape_10.setTransform(47.4,1.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_11.setTransform(30.7,3.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_12.setTransform(20.7,3.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgHBAIAAhbIAOAAIAABbgAgHgtIAAgSIAOAAIAAASg");
	this.shape_13.setTransform(13.7,1.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_14.setTransform(9.3,1.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHADgGQADgGAFgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgGAEQgFAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQALAAAIADQAHACAEAFQADAEABAGIACAPIAAATQAAAWABAGQABAGACAFIgQAAQgDgFAAgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgCADgBAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgPACg");
	this.shape_15.setTransform(1.7,3.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgbA7QgKgIAAgPIAQACQABAHAEAEQAGAEAKAAQAKAAAFgEQAGgFACgIQABgEAAgQQgKAMgOAAQgTAAgKgOQgKgOAAgRQAAgNAEgMQAFgLAJgGQAJgGAMAAQAQAAAKANIAAgLIAOAAIAABPQAAAVgEAKQgEAJgKAFQgJAFgNAAQgQAAgLgHgAgQgrQgIAIABARQgBASAIAHQAHAIAJAAQALAAAIgIQAHgHAAgSQAAgRgIgIQgIgJgKAAQgIAAgIAJg");
	this.shape_16.setTransform(-8.6,5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgHBAIAAhbIAPAAIAABbgAgHgtIAAgSIAPAAIAAASg");
	this.shape_17.setTransform(-15.3,1.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgGAuIgjhbIAQAAIAUA2IAFATIAFgSIAVg3IAQAAIgjBbg");
	this.shape_18.setTransform(-21.8,3.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAJgDIAAgEQAAgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAFAEABAGIABAPIAAATQAAAWAAAGQABAGADAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgDAEQgBADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQADgFgBgLIAAgFQgIADgQACg");
	this.shape_19.setTransform(-31.3,3.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAhBAIhChjIAABjIgQAAIAAh/IARAAIBCBjIAAhjIAQAAIAAB/g");
	this.shape_20.setTransform(-42.9,1.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgQARQgIgIABgJQgBgJAIgHQAIgHAIAAQAKAAAHAHQAHAHAAAJQAAAJgHAIQgHAIgKgBQgIABgIgIg");
	this.shape_21.setTransform(-62.1,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.6,-10.4,209.6,24.1);


(lib.point_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgUBUQAYgrAAgpQAAgPgDgRQgBgNgGgLIgOgbIALAAQAPAWAIAXQAHATAAATQAAAXgJAWQgKAWgLARg");
	this.shape.setTransform(232.9,3.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag0BAIAAh/IAtAAQANAAAHACQAMACAHAHQALAJAFAOQAFAMAAARQAAAOgEALQgDALgGAHQgFAIgGAEQgHAEgJADQgJACgJAAgAgjAxIAcAAQAKAAAIgDQAHgCAEgEQAGgGAEgKQADgLAAgNQAAgUgHgKQgGgLgKgEQgHgCgNAAIgbAAg");
	this.shape_1.setTransform(223.4,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAhBAIhChjIAABjIgQAAIAAh/IARAAIBCBjIAAhjIAQAAIAAB/g");
	this.shape_2.setTransform(210.1,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAJBUQgLgRgJgWQgJgWAAgXQAAgTAHgTQAIgXAOgWIAMAAIgOAaQgGAMgBANQgEARAAAPQAAApAZArg");
	this.shape_3.setTransform(200.9,3.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AghA/IgCgPIAJACQAFAAAEgCQADgCACgDIAFgMIABgEIgjhbIARAAIATA2IAFAUIAGgUIAUg2IAQAAIgjBdIgHAVQgEAIgGAEQgFADgIAAQgEAAgGgCg");
	this.shape_4.setTransform(188.3,5.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgPACg");
	this.shape_5.setTransform(178.7,3.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_6.setTransform(171.7,1.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgnBBIAAh/IAPAAIAAAMQAEgHAHgEQAGgDAIAAQAMAAAIAGQAKAGAEALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgGAAgHgDQgHgDgEgFIAAAtgAgRgqQgIAJAAASQAAAQAIAJQAHAIAKAAQAIAAAJgJQAGgIAAgRQAAgSgGgJQgIgJgJAAQgKAAgHAKg");
	this.shape_7.setTransform(165,4.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_8.setTransform(155.1,3.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgHBAIAAhbIAOAAIAABbgAgHgtIAAgSIAOAAIAAASg");
	this.shape_9.setTransform(148.7,1.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag0BAIAAh/IAtAAQANAAAHACQAMACAHAHQALAJAFAOQAFAMAAARQAAAOgEALQgDALgGAHQgFAIgGAEQgHAEgJADQgJACgJAAgAgjAxIAcAAQAKAAAIgDQAHgCAEgEQAGgGAEgKQADgLAAgNQAAgUgHgKQgGgLgKgEQgHgCgNAAIgbAAg");
	this.shape_10.setTransform(140.4,1.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_11.setTransform(123.7,3.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_12.setTransform(113.7,3.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgGBAIAAhbIANAAIAABbgAgGgtIAAgSIANAAIAAASg");
	this.shape_13.setTransform(106.7,1.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_14.setTransform(102.3,1.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAJgDIAAgEQAAgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAFAEABAGIABAPIAAATQAAAWAAAGQABAGADAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgDAEQgBADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQADgFgBgLIAAgFQgIADgQACg");
	this.shape_15.setTransform(94.7,3.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgaA7QgLgIABgPIAPACQABAHAEAEQAGAEAKAAQAJAAAHgEQAFgFACgIQACgEAAgQQgLAMgOAAQgTAAgKgOQgLgOAAgRQABgNAEgMQAFgLAJgGQAJgGAMAAQAPAAALANIAAgLIAOAAIAABPQABAVgFAKQgFAJgJAFQgJAFgNAAQgRAAgJgHgAgQgrQgHAIAAARQAAASAHAHQAHAIAJAAQALAAAIgIQAHgHAAgSQAAgRgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_16.setTransform(84.4,5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgHBAIAAhbIAOAAIAABbgAgHgtIAAgSIAOAAIAAASg");
	this.shape_17.setTransform(77.7,1.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgGAuIgjhbIAQAAIAUA2IAFATIAFgSIAVg3IAQAAIgjBbg");
	this.shape_18.setTransform(71.2,3.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAHgEAEgHQACgFAAgLIAAgFQgIADgPACg");
	this.shape_19.setTransform(61.7,3.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAhBAIhChjIAABjIgQAAIAAh/IARAAIBCBjIAAhjIAQAAIAAB/g");
	this.shape_20.setTransform(50.1,1.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_21.setTransform(33.7,3.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAIAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_22.setTransform(23.7,3.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQAMAMgBAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_23.setTransform(13.7,3.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgFgEgGAAQgGAAgCADQgEADgCAGQgCAIAAAKIAAAvg");
	this.shape_24.setTransform(6.4,3.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_25.setTransform(-1.5,3.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_26.setTransform(-10.9,3.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgGBAIAAh/IAOAAIAAB/g");
	this.shape_27.setTransform(-22.3,1.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_28.setTransform(-26.3,1.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_29.setTransform(-33.4,3.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgqBAIAAh/IBVAAIAAAQIhEAAIAAAnIA7AAIAAAOIg7AAIAAA6g");
	this.shape_30.setTransform(-43.5,1.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgQARQgIgIABgJQgBgJAIgHQAIgHAIAAQAKAAAHAHQAHAHAAAJQAAAJgHAIQgHAIgKgBQgIABgIgIg");
	this.shape_31.setTransform(-62.1,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.6,-10.4,302.6,24.1);


(lib.hl02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(5,0,0,3).p("AommnIRNAAIAANPIxNAAg");
	this.shape.setTransform(55.1,42.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,115.2,89.9);


(lib.EngineDisplayControlPanel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgMSAhWMAAAhCrIYlAAMAAABCrg");
	mask.setTransform(446.4,116.6);

	// Layer 6
	this.instance = new lib.idu01p02_mfd();
	this.instance.setTransform(-80.2,-77.9,0.5,0.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.2,-77.9,605.8,338.2);


(lib.hl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(5,0,0,3).p("AiGiNID0AAIAYEbIkCAAg");
	this.shape.setTransform(181.6,409.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(165.4,393,32.4,33.4);


(lib.B787PFDNDRangecopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAaQgEgLAAgPQAAgOAEgLQAHgQAMAAQANAAAGAQQAFALAAAOQAAAPgFALQgGAQgNAAQgMAAgHgQgAgLgTQgDAIAAALQAAAMADAIQAEANAHAAQAIAAAFgNQACgJAAgLQAAgLgCgIQgFgNgIAAQgHAAgEANg");
	this.shape.setTransform(2.5,3.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AALAnIAAgYIgeAAIAAgIIAegtIAJAAIAAAtIAAAIIAAAYgAgLAHIAUAAIAAggg");
	this.shape_1.setTransform(-3.2,3.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPAdIAAg5IAbAAIAAAGIgVAAIAAATIATAAIAAAEIgTAAIAAAVIAZAAIAAAHg");
	this.shape_2.setTransform(8.5,-5.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNAVQgEgIAAgMQAAgMAEgIQAFgLAKAAQAHAAAEADQAFAFAAAHIgGAAQAAgFgDgCQgDgBgEAAQgGgBgEAKQgCAFAAAJQAAAJACAHQAEAJAHAAIAJgCIAAgRIgLAAIAAgGIARAAIAAAbQgIAEgHAAQgKAAgGgKg");
	this.shape_3.setTransform(4.4,-5.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAMAdIgXgsIAAAsIgGAAIAAg5IAGAAIAXAsIAAgEIAAgoIAGAAIAAA5g");
	this.shape_4.setTransform(0.2,-5.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAPAdIgFgQIgTAAIgGAQIgGAAIAUg5IAFAAIASA5gAgHAHIAPAAIgIgZg");
	this.shape_5.setTransform(-3.9,-5.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAJAdIgFgNQgEgHgDgFIgGAAIAAAZIgHAAIAAg5IAQAAQAEAAAEAEQAEAEAAAHQAAAMgKADQAFADAEAKIAGAOgAgJgBIAGAAQADAAADgDQACgDAAgFQAAgKgHAAIgHAAg");
	this.shape_6.setTransform(-8.1,-5.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(1,2,0,3).p("Ah3hgIDvAAIAADBIjvAAg");
	this.shape_7.setTransform(0.2,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.8,-11.8,26.1,23.6);


(lib.B787PFDAmberFillLocalizerPointer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF00FF").ss(1,1,1).p("AAAAiIhHgiIBHghIBIAhg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF00FF").s().p("AhHAAIBHghIBIAhIhIAig");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.2,-4.4,16.5,8.9);


(lib.B787NDMAPTrackLineandRangeScale = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNATQgEgHAAgMQAAgKAEgIQAEgMAJAAQAKAAAEAMQAEAIAAAKQAAALgEAIQgFAMgJAAQgJAAgEgMgAgIgOQgCAGAAAIQAAAJACAGQADAKAFAAQAGAAADgKQACgGAAgJQAAgIgCgGQgDgKgGAAQgFAAgDAKg");
	this.shape.setTransform(-2.4,16.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPAeIAAgGQAAgHAEgGQADgFAGgFIAGgGQAEgFAAgEQAAgEgDgDQgCgCgDAAQgHAAAAAHIgHAAIAAgBQAAgFAFgEQAEgDAFAAQAGAAAEADQAFAEAAAHQAAAIgHAGIgKAJQgGAHAAAIIAYAAIAAAHg");
	this.shape_1.setTransform(-6.6,16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgloSIAlAAIAmAAAAAoSIAArCAglCeIAlAAIAAK1IAmAAAAmCeIgmAAIAAqwAAANTIglAAAAATVIAAmC");
	this.shape_2.setTransform(7.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.1,-124.7,23.2,249.6);


(lib.B787NDMAPMagentaSelectedHeadingBugcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF00FF").ss(1,1,1).p("AAAAYIA/AAIAAgvIgiAAIgdAvIgbgvIgjAAIAAAvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.3,-3.4,14.7,6.8);


(lib.B787NDMAPCurrentHeadingPointercopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,2,1).p("AAnghIgnBDIgmhDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.2,-4.7,10.5,9.5);


(lib.B787NDMAPAirplaneSymbol01copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,2,1).p("AhTBsIBTjXIBUDXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.7,-12.1,19.4,24.3);


(lib._787_Generic_screencopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.idu01p02_mfd_small();
	this.instance.setTransform(902.2,203.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(899.4,203.4,263.2,202.5);


(lib.B787PFDDeviationScaleRight02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lines
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgQjNQgLABgJgIQgKgHAAgLQgBgMAHgJQAIgJAMgBQALgBAJAIQAIAHABAMQAAALgHAJQgGAJgMABgAgknCQgLABgJgHQgKgIgBgLQgBgMAIgJQAIgJAMgBQALgBAJAIQAJAHABAMQABALgHAKQgIAIgMABgAgBDcQAGgJAMgBQALgBAJAIQAKAGAAAMQABAMgHAJQgIAJgMABQgLABgJgIQgIgHgBgMQAAgMAHgIgAARHNQAIgJAMgBQALgBAJAIQAJAHABAMQABALgHAKQgIAIgMABQgLABgJgHQgKgIgBgLQgBgMAIgJg");
	this.shape.setTransform(1.3,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.1,-51.8,17.2,103.6);


(lib.B787NDMAPFullCompassRosecopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgrdAThMAAAgnBMBW7AAAMAAAAnBg");
	mask.setTransform(0.5,-221.3);

	// compass rose
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOAlQgGgEAAgHIAJAAQAAAEADACQACABAEAAQAHAAAFgMQADgKABgLIAAgBQgJAJgHAAQgJAAgGgIQgEgFAAgKQAAgKAFgHQAGgJAJABQAMAAAGAOQAFALAAAPQAAAPgFALQgHAPgMABQgHAAgFgFgAgKgaQgCAFAAAGQAAAHACAFQAEADAGAAQAFAAADgDQADgGAAgHQAAgGgEgFQgDgGgFAAQgFAAgEAHg");
	this.shape.setTransform(1.7,-260.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgogCQAAgHADgEQAGgGAGAAIAAAIQgHABAAAIQgBAHAMAFQAKAEAKAAIACAAQgJgIABgIQgBgJAIgFQAGgFAJAAQAKAAAIAFQAIAGAAAKQABAWgnAAQgrgBAAgXgAAEgJQgEAEAAAFQAAAGAGADQAGADAIAAQAFAAAEgFQAEgEAAgDQAAgGgGgEQgGgCgGAAQgGAAgFADg");
	this.shape_1.setTransform(-263.2,-1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAYAMQAJAAAAgLQAAgFgFgDQgEgEgHAAQgKABgFAGQgCAEAAALIgHAAQAAgJgCgEQgDgGgKAAQgEAAgDADQgEAEAAADQABAEACADQACADAFAAIAAAIIgBAAQgIAAgEgGQgEgGgBgHQAAgIAFgEQAFgGAIAAQANAAAGANQAEgQAQAAQALABAHAFQAIAHAAAJQAAAIgFAFQgEAFgJAAg");
	this.shape_2.setTransform(-263.2,3.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZAeQgGgCgEgHQgFgIABgHQACgGAHgDQAMgHALAIQgCgQALgIQAKgGAJACQAJACAGAJQAFAIgCAGQgBAFgIAEIgDgFQAHgFgGgKQgDgFgGgBQgFgBgGAEQgIAFAAAIQAAAGAFAJIgFAEQgGgJgEgDQgGgCgIADQgEACgBAEQgBAFADAEQACAEADABQAEACADgDIAFAHIAAABQgFACgEAAIgGgBg");
	this.shape_3.setTransform(-227.8,132);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYAeQgHgCgEgHQgEgIAAgHQACgGAHgDQAMgHAMAIQgDgQAMgIQAJgGAJACQAKACAFAJQAEAIgBAGQgBAFgIAEIgDgFQAHgFgFgKQgEgFgGgBQgFgBgHAEQgHAFAAAIQAAAGAFAJIgGAEQgFgJgEgDQgHgCgHADQgEACgBAEQgBAFACAEQACAEAEABQAEACAEgDIAEAHIgBABQgEACgEAAIgFgBg");
	this.shape_4.setTransform(-224.9,136.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAkQgLgHACgQQACgMAHgLQAIgOAKgHQALgKALAGQAMAHgCARQgBALgIAMQgIAOgJAHQgGAFgIAAQgFAAgFgCgAAAgXQgGAGgGALQgGAIgCAJQgDANAIAFQAIAEAIgJQAGgGAGgKQAGgJACgJQADgNgIgFIgFgBQgGAAgFAGg");
	this.shape_5.setTransform(-133.4,227);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUAjQgIgEgCgGQgDgHAFgIQAHgKAOAAQgKgLAHgNQAGgKAHgDQAIgDAKAFQAIAFACAGQADAGgFAIIgHgEQAEgIgKgGQgGgEgGADQgEACgCAHQgFAIAFAHQACAFAJAEIgFAIQgGgFgGgBQgHAAgFAHQgBAFAAAEQACAEAEADQAEACADgBQAFAAACgEIAFAEIAAABQgEAHgGABIgBAAQgGAAgHgEg");
	this.shape_6.setTransform(-128.3,230);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVAnIAAgJIAEgHQAWgkAAgZIAJAAIAAAEQAAAPgJATIgRAeIAiAAIAAAJg");
	this.shape_7.setTransform(-1,266.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNAkQgGgGAAgJQAAgKAJgJIANgMQAJgJAAgLIggAAIAAgJIApAAIAAAIQAAAKgFAIQgEAGgIAHIgJAJQgFAGAAAGQAAAFAEADQADADADAAQALAAAAgJIAIAAIAAABQAAAHgGAFQgFAEgIAAQgHAAgGgEg");
	this.shape_8.setTransform(4.7,266.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHgDIgFgHIgMgVIAIgEIALAVIAagQIAEAHIgEA3IgHAEgAAAgIIAQAbIADgmg");
	this.shape_9.setTransform(129.1,231.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAJAqQgHgCgDgIQgFgJADgLIAEgTQADgMgEgJIgdARIgFgIIAkgWIAEAIQAFAIgBAJQAAAHgDAJIgEAPQgCAHADAFQADAFAEABQAFABAFgDQAJgFgFgIIAIgEIAAABQAEAGgDAHQgDAHgGADQgHAEgFAAIgEAAg");
	this.shape_10.setTransform(134.8,227.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgZgFIgHgEIAHAEIgHAKIgGgEIAGgKIACgEIACgDIAHADIgEAIIAEgIIgHgDIgCADIAJgPIAGAEIgGALIA0AdIAAgOIAJAFIgBAPIgFAHg");
	this.shape_11.setTransform(226.1,135.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAMAgQgJgFgDgMIgDgTQgDgMgKgGIgRAcIgIgEIAWgkIAHAEQAIAFAEAJQACAGACAKIAEANQADAIAFADQAEACAFgBQAEgCADgEQAFgJgHgEIAEgGIABAAQAGACABAIQAAAHgDAGQgFAJgHACIgFABQgFAAgFgDg");
	this.shape_12.setTransform(229,130.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgiAQQgGgGAAgKQAAgJAGgGQAHgHALAAQAOAAAGANQAGgKALAAQAJAAAGAFQAFAHABAHQgBAIgFAGQgGAFgJAAQgGAAgEgCQgEgCgDgFQgFAMgPAAQgLABgHgHgAgbgJQgFAEAAAFQAAAGAFAEQAFAEAGgBQAHAAAFgDQAEgEAAgGQAAgFgEgEQgFgEgHAAQgGAAgFAEgAAMgHQgEAEAAADQAAAEAEAEQADADAGAAQAFAAAEgDQADgEAAgEQAAgDgDgEQgEgDgFAAQgGAAgDADg");
	this.shape_13.setTransform(264.8,5.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgmARIAAgOIAIAAIAAAOgAgeADIAAgFIAAAFIgIAAIAAgFIAAgOIAIAAIAAAOIgIAAIAIAAIA7AAIgHgOIAKAAIAHAOIAAAFg");
	this.shape_14.setTransform(264.8,-0.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgWAfQgKgBgFgJQgEgHABgHQABgHAHgCIAEAFQgHAEAFAKQADAFAHABQAGAAAGgDQAIgGAAgJQgBgFgHgMIAggTIARAeIgIADIgNgVIgSAKQAHAKgBAJQgBAKgKAHQgIAFgIAAIgDgBg");
	this.shape_15.setTransform(230.4,-127.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgbAWIAHgEIAGALIgHADgAggAOIAAAAIAFAIgAgbAWIgFgIIAHgEIAFAIIgHAEgAgUASIgFgIIAzgdIgMgIIAIgEIANAIIAEAHIg7AigAggAOgAggAOIgGgLIAGgDIAHAKIgHAEgAgZAKg");
	this.shape_16.setTransform(227.1,-131.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgiAUIAEgHQAFgIAJgFQAGgBAKgCIANgEQAIgDADgFQACgEgBgFQgCgEgEgDQgJgFgEAHIgGgEIAAgBQACgGAIgBQAHAAAGADQAJAFACAHQADAHgFAIQgFAJgMACIgTAEQgMADgGAKIAcARIgEAIg");
	this.shape_17.setTransform(133.6,-222.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgJAhIAEgHIgEAHIgDgCIgEgCIAEgHIAHAEIgHgEIAcgzIgOgBIAFgIIAPAAIAHAEIgiA8IAKAHIgEAHgAgcAWIAEgHIAMAHIgEAHIAEACgAgMAWg");
	this.shape_18.setTransform(128.5,-225.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgSAPQgXglAXgOQAFgDAHABQAGABADAGIgFAFQgEgHgIAEQgHAFABANQABAJAGAIIACADQABgLAIgFQAGgFAJAFQAIAEAEAGQAGAJgBAJQgBAKgIAFQgGADgGAAQgNAAgOgYgAAAAAQgFADAAAIQABAGAEAHQABAFAFABQAGABAFgCQAEgDAAgHQAAgGgDgGQgDgFgFgCIgFAAIgFAAg");
	this.shape_19.setTransform(-131,-225.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AALAdIAEgHQAIAEAGgKQAEgGgDgGQgCgEgHgCQgIgEgHAEQgGACgDAJIgIgFQAFgGABgFQAAgIgHgFQgFgCgEABQgEACgDAEQgCAEAAAEQABAEAEACIgEAFIgBgBQgHgDgBgGQgBgHAFgHQAEgIAGgCQAHgCAHAEQAKAHAAAOQAMgKANAIQAKAFADAGQADAKgFAJQgFAHgGACIgFACQgEAAgFgDg");
	this.shape_20.setTransform(-226.3,-129.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(1,1,1).p("EAbIggSIAzg9EAHlgqzQB2AWB2AgIgKAmEAHXgpkIAOhPEAABgrcQB6gBB5AKIgDAoEAABgqLIAAhREAD0grTQB5AKB4AWEASWgnSIgQAjEAO4goyQBwAsBuA0QBsA0BqA9EAOcgnmIAchMEAVEgkbIAohGQBqA9BkBEIgXAgEALRgp9QB1AhByAqEAmzgSCIAigRQAyBuAoBzQAnBwAfB2QAAABABABIgmAKEAhWgb6QBOBcBFBlIghAXEAgYgbGIA+g0Aew+sIgcAcEAlpgVqIhFAoEAjpgY5QBDBjA9BsQA6BoAyBvAew+sQBXBVBPBdEAovgOyIhLAcEArOgDvIgnADEArOgDvQANB5ABB2QABB6gKB4QgJB5gWB4QgVB4ggB0QgiB2gqByQgqBvg1BuQg0Btg9BpIhGgnEAqrgHfQAXB4AMB4EApdgHRIBOgOEAqNAABIBPgBEAp2gLKQAfB2AWB1EAY6gjgQBkBFBdBMQBfBPBWBUEAplAHWIBPANEArTADyIgngDEAp/ALPIgmgJEAnoAObIBLAcAeTeSIAcAcQhVBXhdBNQhcBPhkBEQhkBFhqA9IgohGEAjiAY3QhGBlhLBeIg9g1EAjCAYhIAgAWEAhRAb6QhOBdhUBXEAljAVqQg9BrhEBiEAnUASUIgjgQEAYmAjGIAXAfEASYAnUQhuAyh0ApIgchLEASGAmxIASAjQBvgyBog7EADzArPQh6AMh2ABIgBhQEADwAqoIADAnEALQAp3QgDABgCgBQh0Agh0AVIgNhPEALGApQIAKAnQB1ghBxgnEAHjAqsQh5AXh3AMEAb9AhSIgzg9EgSSgnWQBtgyB0goIAbBLEgSSgnWIARAlEgY4gjnQBihFBrg8EgY4gjnIAWAgEgVDgkjIgohFQBpg8BwgyEgDrgqoIgDgmQB5gMB2gCEgLKgp3QB2gfB2gWIAOBPEgOxgowQBugmB0ggQADgBACAAEgK/gpSIgLglEgHegqsQB4gYB4gKEgbGggWIg0g+A+Q+TIgcgbQBWhXBchPQBdhOBlhFEghNgb5IA+A0EgjegY3QBFhlBMhdQBOhfBThWEgi+gYhIgggWEglggVqIBGAoEglggVqQA9hrBFhiEgmugSCIgjgQEgp7gLOQAfh0AshyIBLAbEgpVgLEIgmgKEgpigHUIhQgOQAVh3Aih1EgrbAABIBPgBEgrSgDwQAKh6AWh4EgqrgDtIgngDEgrbAABQgBh6AKh3EgowgO0QAqhxA1htQA0huA9hqEgqnADvIgnADQgNh5AAh4EgqtAHjQgWh5gLh4EgqtAHjIBPgOEgovAO2Qgphxgfh2QgBgBAAAAQggh2gVh1EgpSALFIglAKEgovAO2IBKgbEgmxASGIgkARQgyhtgoh0EglnAVwIBGgoEghQAb7QhQhbhGhlQhEhig9hpQg7hpgzhwEgjFAYlIghAWEghQAb7IA9gyA+QeSIgcAcQhXhVhNheEgb3AhQIA0g9EgHgAq0Qh4gXh1gfQhzgghzgsQhwgrhug0Qhtg0hqg+IAphFEgHgAq0IANhPEgLDApYIgKAmEgDrAqsIgEAoQh6gKh3gWEgVoAlhQAAABAAgBQhqg9hjhEQhlhEhdhMQhfhPhWhTEgYeAjBIgXAfEgSBAmvIgQAkEgOzAoyIAbhLEgDvArUQB5AKB5gC");
	this.shape_21.setTransform(0,-0.4);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = this.shape_21.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-277.8,-279.5,556.5,487.6);


(lib.B737800CockpitStage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// outline
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,0,3).p("EBDKAq5MiGTAAAIAAgDMAAAhVuMCGTAAAg");
	this.shape.setTransform(430,275.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhDJAq5IAAgDMAAAhVuMCGTAAAMAAABVxg");
	mask.setTransform(430,275.1);

	// cockpit
	this.instance = new lib.b737_max_8_cockpit();
	this.instance.setTransform(0.1,-148.5,0.5,0.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.4,861.7,551.1);


(lib._787_Generic_screw03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#191818","#999692"],[0,1],2.5,4.2,-2.4,-4.2).s().p("AghAhQgOgOAAgTQAAgSAOgPQAPgOASAAQATAAAOAOQAPAPAAASQAAATgPAOQgOAPgTAAQgSAAgPgPgAgegeQgNAOAAAQQAAARANANQAOANAQABQARgBANgNQANgNABgRQgBgQgNgOQgNgNgRAAQgQAAgOANg");
	this.shape.setTransform(5.4,5.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#666360","#414141"],[0,1],2,3.8,-0.3,-0.3).s().p("AgSAGIAAAAIgBACgAAUgHIAAAAIgBACg");
	this.shape_1.setTransform(4.8,3.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#333230","#7F7D7A"],[0,1],2.2,3.9,-2.2,-3.8).s().p("AgeAeQgNgNAAgRQAAgQANgOQAOgNAQAAQARAAANANQANAOABAQQgBARgNANQgNANgRABQgQgBgOgNgAgGAMIgDANIAAAAIAAABQAAAAAAABQAAAAAAAAQABABAAAAQABAAAAAAIAAAAIAGABQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBIACgMQAEgHAGAAIAOAEQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAgBIACgFQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBAAIgNgCQgHgDABgHIADgLIABgCIAAgBIgBgBIgBgBIgFgBQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAABIAAABIgDANIAAgBQgBAHgHAAIgOgFIgCABIgBACIAAACIgBADQgBAAAAABQAAAAABABQAAAAAAAAQABABAAAAIAAAAIAPACIgBAAQAGACgBAIg");
	this.shape_2.setTransform(5.4,5.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#4C4B48","#595855"],[0,1],-1.5,-2.5,1.5,2.6).s().p("AgIAcIgBAAQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAAAAAIAAgBIAAgBIAEgMQAAgIgGgCIABAAIgOgCIgBAAQAAgBgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIABgDIABgCIAAgBIABgBIACgBIAOAFQAGAAADgHIAAABIABgOIAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABABIAFAAIABACIABABIgBADIgDALQgBAHAHADIANACQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAABIgCAFQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAIgNgEQgHAAgDAGIgBANQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAgAgagDIAAABIAOACQAIACgBAKIgEANIABABIAFABIAAAAIADgOQACgHAJABIAAAAIAOADIABgBIAAAAIABgFIgBAAIgMgEIgBAAQgIgCABgJIAEgNIAAAAIgBAAIgFgBIAAAAIgEANQgBAIgJgBIgNgDIgBAAg");
	this.shape_3.setTransform(5.6,5.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353432").s().p("AgIAZIgBAAIAEgOQABgJgIgCIgOgDIAAgBIACgFIABAAIANADQAJACABgIIAEgOIAAAAIAFABIABAAIAAABIgEAMQgBAKAIACIABAAIAMADIABAAIgBAFIAAABIgBAAIgOgDIAAAAQgJgBgCAIIgDANIAAABg");
	this.shape_4.setTransform(5.6,5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.6,0.6,9.7,9.7);


(lib.title_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.titlecopy("synched",0);
	this.instance.setTransform(870.7,147.5,1,1,0,0,0,78.6,12.1);

	this.instance_1 = new lib.titlecopy2("synched",0);
	this.instance_1.setTransform(78.6,12.1,1,1,0,0,0,78.6,12.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,916.1,181.6);


(lib.B787PFDDeviationScaleRight02copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lines
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAAiBQgKAAgJgIQgIgIAAgMQAAgMAIgIQAJgIAKAAQALAAAIAIQAJAIAAAMQAAAMgJAIQgIAIgLAAgAAAkqQgKAAgJgIQgIgIAAgMQAAgMAIgIQAJgIAKAAQALAAAIAIQAJAIAAAMQAAAMgJAIQgIAIgLAAgAgTCLQAJgJAKAAQALAAAIAJQAJAIAAALQAAAMgJAJQgIAIgLAAQgKAAgJgIQgIgJAAgMQAAgLAIgIgAgTEzQAJgIAKAAQALAAAIAIQAJAIAAAMQAAAMgJAIQgIAIgLAAQgKAAgJgIQgIgIAAgMQAAgMAIgIgAgoAAIBRAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// pointers - under the white middle line
	this.instance = new lib.B787PFDAmberFillLocalizerPointer("synched",0);
	this.instance.setTransform(0,15.8,1,1,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.1,-45,16.2,90);


(lib.B787SynopticNDMapFullcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.B787PFDDeviationScaleRight02copy("synched",0);
	this.instance.setTransform(538.6,334.3);

	this.instance_1 = new lib.B787PFDDeviationScaleRight02("synched",0);
	this.instance_1.setTransform(281,326,1,1,64.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNAdIAAg5IAbAAIAAAGIgVAAIAAAVIATAAIAAAEIgTAAIAAAag");
	this.shape.setTransform(543.3,31.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AANAdIgNgXIgMAXIgHAAIARgdIgPgcIAHAAIAKAWIALgWIAHAAIgPAcIARAdg");
	this.shape_1.setTransform(539.2,31.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQAdIAAg5IANAAQAHAAAEACQAGAEAAAJQAAAEgCAEQgCAEgEABQAGAAACAEQADAEAAAFQAAAQgRAAgAgJAXIAJAAQAKAAAAgKQAAgGgFgDQgFgCgFAAIgEAAgAgJgDIAGAAIAEAAQADgBABgEIACgFIgBgEIgBgDIgDgCIgCAAIgJAAg");
	this.shape_2.setTransform(535,31.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNAVQgEgHAAgNQAAgLAEgJQAFgLAKAAQAHAAAEAEQAFADAAAIIgGAAQAAgEgDgDQgDgCgEAAQgGAAgEAJQgCAGAAAJQAAAKACAGQAEAJAHAAIAJgCIAAgRIgLAAIAAgGIARAAIAAAbQgIAEgHAAQgKAAgGgKg");
	this.shape_3.setTransform(530.9,31.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMADIAAgFIAZAAIAAAFg");
	this.shape_4.setTransform(68.2,36.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgMADIAAgFIAZAAIAAAFg");
	this.shape_5.setTransform(62.5,36.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMADIAAgFIAZAAIAAAFg");
	this.shape_6.setTransform(56.8,36.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQAQIAHAAQAAAFADACQACACAEAAQAEAAADgDQADgDAAgEQAAgHgIgEIgGgEQgFgBgCgDQgDgEAAgGQAAgHAEgFQAFgEAGAAQAFAAAEAEQAEADAAAGIgHAAQAAgEgDgCQgCgBgCAAQgCAAgDADQgCADAAADQAAAHAHAEIAHAEQAFABACADQADAEAAAGQAAAIgFAEQgFAFgHAAQgQAAAAgPg");
	this.shape_7.setTransform(50.5,36.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAPAdIgFgQIgTAAIgGAQIgGAAIAUg5IAFAAIASA5gAgHAHIAPAAIgIgZg");
	this.shape_8.setTransform(46.4,36.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgCAdIAAgzIgRAAIAAgGIAnAAIAAAGIgRAAIAAAzg");
	this.shape_9.setTransform(42.2,36.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgNAkQgGgEgBgIIAJAAQABAIAKAAQAEAAAEgGQAEgEAAgHQgBgMgIgDQgEAAgOAAIAAgnIAgAAIAAAJIgYAAIAAAVQAMAAAHAFQAJAEAAAOQgBAKgFAIQgGAJgJAAQgHAAgGgFg");
	this.shape_10.setTransform(29.2,35.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgQAQIAHAAQAAAFADACQACACAEAAQAEAAADgDQADgDAAgEQAAgHgIgEIgGgEQgFgBgCgDQgDgEAAgGQAAgHAEgFQAFgEAGAAQAFAAAEAEQAEADAAAGIgHAAQAAgEgDgCQgCgBgCAAQgCAAgDADQgCADAAADQAAAHAHAEIAHAEQAFABACADQADAEAAAGQAAAIgFAEQgFAFgHAAQgQAAAAgPg");
	this.shape_11.setTransform(11.8,36.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgNAVQgEgHAAgOQAAgKAEgJQAFgLAKAAQAHAAAEAEQAFAEAAAGIgGAAQAAgDgDgDQgDgCgEAAQgGABgEAIQgCAHAAAIQAAAKACAGQAEAJAHAAIAJgCIAAgRIgLAAIAAgGIARAAIAAAaQgIAFgHAAQgKAAgGgKg");
	this.shape_12.setTransform(7.6,36.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#33C300").s().p("AAEAnIAAgIIgHAAIAAg7IgNAHIAAgKIANgHIAHAAIAABFIANAAIAAAIgAgDAnIAAgIIAHAAIAAAIgAgQAnIAAgIIANAAIAAAIgAgDAfg");
	this.shape_13.setTransform(509.6,30.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#33C300").s().p("AgWAVIAKAAQAAAHAEADQADACAFAAQAGAAADgEQAEgEAAgGQAAgIgLgFIgIgGQgHgCgCgEQgEgFgBgIQAAgKAHgGQAGgGAIAAQAIAAAEAFQAGAEAAAIIgJAAQgBgEgEgDQgDgCgCAAQgDAAgEAEQgDAEAAAFQAAAIAKAGIAKAGQAFABAEAEQADAGAAAIQAAAKgFAGQgHAHgKAAQgVAAgBgVg");
	this.shape_14.setTransform(503.8,30.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#33C300").s().p("AgVAnIAAhNIAJAAIAABEIAiAAIAAAJg");
	this.shape_15.setTransform(498.1,30.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#33C300").s().p("AgRAcQgHgKAAgSQAAgPAGgLQAHgPAOAAQAJAAAGAFQAGAFABAJIgIAAQgBgFgEgDQgDgCgFAAQgKAAgEAMQgEAIAAAMQAAANAEAIQAEAMAKAAQAEAAAJgDIAAgWIgQAAIAAgIIAYAAIAAAjQgLAHgJAAQgPAAgHgOg");
	this.shape_16.setTransform(492.4,30.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgaAlQgHgQAAgVQAAgUAHgQQAJgVARAAQASAAAJAVQAHAQAAAUQAAAVgHAQQgJAVgSAAQgRAAgJgVgAgRgcQgDANAAAPQAAAQADANQAGASALAAQAMAAAGgSQAEgNAAgQQAAgPgEgNQgGgSgMAAQgLAAgGASg");
	this.shape_17.setTransform(289.4,35.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgUA1QgIgGAAgKIAMAAQAAAFAEACQADADAFAAQALAAAIgRQAEgNAAgQIAAgCQgKANgMAAQgNAAgIgMQgGgIAAgNQAAgOAHgLQAJgLANAAQARAAAJAUQAGAPAAAWQAAAWgHAPQgJAVgSAAQgLAAgGgFgAgOglQgEAHAAAJQAAAJAEAHQAFAFAIAAQAHAAAGgGQADgGAAgKQAAgJgEgHQgFgIgHAAQgJAAgEAJg");
	this.shape_18.setTransform(281.5,35.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgaAlQgHgQAAgVQAAgUAHgQQAJgVARAAQASAAAJAVQAHAQAAAUQAAAVgHAQQgJAVgSAAQgRAAgJgVgAgRgcQgDANAAAPQAAAQADANQAGASALAAQAMAAAGgSQAEgNAAgQQAAgPgEgNQgGgSgMAAQgLAAgGASg");
	this.shape_19.setTransform(273.4,35.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgNAUQgEgIAAgMQAAgKAEgJQAEgLAJAAQAKAAAEALQAEAJAAAKQAAALgEAJQgFALgJAAQgJAAgEgLgAgIgOQgCAHAAAHQAAAIACAHQADAKAFAAQAGAAADgKQACgHAAgIQAAgHgCgHQgDgJgGAAQgFAAgDAJg");
	this.shape_20.setTransform(556,53.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgDAFIAAgIIAHAAIAAAIg");
	this.shape_21.setTransform(551.8,55.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgLAaQgFgFAAgIQAAgKAKgFQgIgEAAgIQAAgIAEgDQAFgFAFAAQAGAAAEAFQAFAEAAAHQAAAEgCADIgGAFQAKAEAAALQAAAIgFAFQgFAFgHAAQgGAAgFgFgAgGAEQgDAEAAAEQAAAFADAEQADAEADAAQAEAAADgEQADgEAAgFQAAgEgDgEQgDgEgEAAQgDAAgDAEgAgFgVQgCADAAAEQAAAEACADQADACACAAQADAAADgCQACgDAAgEQAAgEgCgDQgDgDgDABQgCgBgDADg");
	this.shape_22.setTransform(547.7,53.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AADAdIAAgGIAAAGIgFAAIAAgGIAFAAIgFAAIAAgsIgKAFIAAgHIALgFIAEAAIAAAzIAKAAIAAAGgAgMAdIAAgGIAKAAIAAAGg");
	this.shape_23.setTransform(543.6,53.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAJAdIgFgNQgEgHgDgFIgGAAIAAAZIgHAAIAAg5IAQAAQAEAAAEAEQAEAEAAAHQAAAMgKADQAFADAEAKIAGAOgAgJgBIAGAAQADAAADgDQACgDAAgFQAAgKgHAAIgHAAg");
	this.shape_24.setTransform(535.2,53.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgKAcQgEgDAAgGIAGAAQAAAGAIAAQAEAAACgEQADgDAAgGQAAgHgGgDQgDgCgHAAIAAgFQAHAAACgBQAFgDAAgGQAAgEgDgDQgCgBgCAAQgDgBgCACQgDACAAADIgGAAIAAAAQAAgHAEgDQAEgDAGAAQAFAAAEAEQAEADAAAHQAAAJgJAFQALACAAAMQAAAIgEAGQgFAFgGAAQgGAAgEgDg");
	this.shape_25.setTransform(531.1,53.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AADAdIAAgGIAKAAIAAAGgAgCAdIAAgGIAFAAIAAAGgAgMAdIAAgGIAKAAIAAAGgAgCAXIAAgsIgKAFIAAgHIALgFIAEAAIAAAzg");
	this.shape_26.setTransform(527,53.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAJAdIgJghIgIAhIgIAAIgEg5IAHAAIACArIABAAIAIgdIAFAAIAIAdIABAAIACgrIAHAAIgEA5g");
	this.shape_27.setTransform(522.8,53.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAJAdIgFgNQgEgHgDgFIgGAAIAAAZIgHAAIAAg5IAQAAQAEAAAEAEQAEAEAAAHQAAAMgKADQAFADAEAKIAGAOgAgJgBIAGAAQADAAADgDQACgDAAgFQAAgKgHAAIgHAAg");
	this.shape_28.setTransform(518.6,53.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgJAbQgFgDAAgGIAGAAQAAAGAIAAQADAAADgEQADgEAAgFQAAgJgHgCQgDAAgKAAIAAgdIAYAAIAAAHIgSAAIAAAPQAJAAAFAFQAGACAAAKQAAAJgEAFQgEAGgHAAQgFAAgEgDg");
	this.shape_29.setTransform(556,43);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgJAbQgFgDAAgGIAGAAQAAAGAIAAQADAAADgEQADgEAAgFQAAgJgHgCQgDAAgKAAIAAgdIAYAAIAAAHIgSAAIAAAPQAJAAAFAFQAGACAAAKQAAAJgEAFQgEAGgHAAQgFAAgEgDg");
	this.shape_30.setTransform(551.8,43);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgNATQgEgHAAgMQAAgKAEgIQAEgMAJAAQAKAAAEAMQAEAIAAAKQAAALgEAIQgFAMgJAAQgJAAgEgMgAgIgOQgCAGAAAIQAAAJACAGQADAKAFAAQAGAAADgKQACgGAAgJQAAgIgCgGQgDgKgGAAQgFAAgDAKg");
	this.shape_31.setTransform(547.7,42.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgQAQIAHAAQAAAFADACQACACAEAAQAEAAADgDQADgDAAgEQAAgHgIgEIgGgEQgFgBgCgDQgDgEAAgGQAAgIAEgEQAFgEAGAAQAFAAAEADQAEAEAAAGIgHAAQAAgDgDgDQgCgBgCAAQgCAAgDADQgCADAAADQAAAHAHAEIAHAEQAFABACADQADAEAAAGQAAAIgFAEQgFAFgHAAQgQAAAAgPg");
	this.shape_32.setTransform(539.4,42.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAJAdIgFgNQgEgHgDgFIgGAAIAAAZIgHAAIAAg5IAQAAQAEAAAEAEQAEAEAAAHQAAAMgKADQAFADAEAKIAGAOgAgJgBIAGAAQADAAADgDQACgDAAgFQAAgKgHAAIgHAAg");
	this.shape_33.setTransform(535.2,42.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgNAUQgEgHAAgNQAAgLAEgIQAGgLAJAAQAHAAAFADQAEAEAAAIIgGAAQAAgFgDgBQgCgDgEAAQgHAAgEAJQgCAGAAAJQAAAKACAGQAEAJAHAAQAJAAAAgJIAGAAIAAABQAAAGgEAEQgFAEgHAAQgJAAgGgLg");
	this.shape_34.setTransform(531.1,42.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#33C300").s().p("AgRAcQgHgKAAgSQAAgPAGgLQAHgPAOAAQAJAAAGAFQAGAFABAJIgIAAQgBgFgEgDQgDgCgGAAQgIAAgFAMQgEAIAAAMQAAANAEAIQAFAMAIAAQAFAAAJgDIAAgWIgQAAIAAgIIAYAAIAAAjQgLAHgJAAQgPAAgHgOg");
	this.shape_35.setTransform(312.8,34.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#33C300").s().p("AAUAnIgGgWIgbAAIgHAWIgJAAIAbhNIAHAAIAYBNgAgLAJIAWAAIgLgig");
	this.shape_36.setTransform(307.1,34.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#33C300").s().p("AASAnIAAg6IgOAuIgGAAIgPgsIAAA4IgKAAIAAhNIAKAAIARA0IARg0IAKAAIAABNg");
	this.shape_37.setTransform(301.4,34.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#33C300").s().p("AAPAnIgfgnIAAAnIgJAAIAAhNIAJAAIAAAlIAZglIALAAIgaAlIAgAog");
	this.shape_38.setTransform(261.2,34.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#33C300").s().p("AAMAnQgEgMgDgGQgEgIgGgIIgIAAIAAAiIgJAAIAAhNIAVAAQAHAAAFAGQAFAFABAKQAAAPgOAFQAGAEAGANIAIATgAgNgBIAIAAQAGAAADgFQADgEABgHQAAgNgMAAIgJAAg");
	this.shape_39.setTransform(255.5,34.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#33C300").s().p("AgDAnIAAhFIgWAAIAAgIIA0AAIAAAIIgXAAIAABFg");
	this.shape_40.setTransform(249.8,34.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(1,2,0,3).p("ACUhXIAACvIkmAAIAAiv");
	this.shape_41.setTransform(281.7,35.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// green line
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF00FF").s().p("AjJj8IBIgnIFLIfIhGAog");
	this.shape_42.setTransform(302.5,316.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_42).wait(1));

	// Layer 4
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FFFFFF").ss(1,1,1).p("AkhleIgFg/IA1AeIBABdIgwAggAC3FBIAwggIBABcIgwAhg");
	this.shape_43.setTransform(280.3,324.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_43).wait(1));

	// solid purple
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF00FF").s().p("AnbUYQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAgBABAAQAAgBAAgBIAIgWQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAAAABABQAAAAgBABQAAAAAAABIgIAXQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAIgDAAIgBAAgAm+TJQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAgBABAAQAAgBAAAAIAUg5QAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABABAAQAAABgBAAQAAABAAABIgUA4QAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAIgDAAIgBAAgAmVRZQgBgBAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAABgBQAAAAAAgBIAUg4QAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAAAQAAABABAAQAAABgBAAQAAABAAAAIgUA4QAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAIgDABIgBAAgAltPoQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBABAAQAAgBAAAAIAVg4QAAAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAABABQAAAAgBABQAAAAAAABIgVA4QAAAAAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIgCABIgBgBgAlEN5QgBgBAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAABgBQAAAAAAgBIAUg4QAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAAAQAAABABAAQAAABgBAAQAAABAAAAIgUA5QAAAAAAAAQAAABgBAAQAAAAAAABQgBAAAAAAIgDABIgBAAgAkbMIQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAABgBQAAAAAAgBIAUg4QAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABABAAQAAABgBAAQAAABAAABIgUA3QAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAIgDABIgBgBgAjzKZQgBgBAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBABAAQAAgBAAAAIAVg4QAAAAAAgBQAAAAABgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAABABQAAAAgBABQAAAAAAAAIgVA5QAAAAAAAAQAAABgBAAQAAAAgBABQAAAAAAAAIgDABIgBAAgAjKIpQgBgBAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAABgBQAAAAAAgBIAUg4QAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAAAQAAABABAAQAAABgBAAQAAABAAABIgUA3QAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAIgDABIgBAAgAihG4QgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAABgBQAAAAAAgBIAUg4QAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABABAAQAAABgBAAQAAABAAABIgUA4QAAAAAAAAQAAABgBAAQAAAAAAABQgBAAAAAAIgDABIgBgBgAh5FJQgBgBAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBABAAQAAgBAAAAIAVg4QAAAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAABABQAAAAgBABQAAAAAAAAIgVA4QAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIgCABIgBAAgAhQDYQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBABAAQAAgBAAAAIAVg4QAAAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAABABQAAAAgBABQAAAAAAABIgVA4QAAAAAAAAQAAABgBAAQAAAAgBABQAAAAAAAAIgDABIgBgBgAgnBpQgBgBAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAABgBQAAAAAAgBIAUg4QAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAAAQAAABABAAQAAABgBAAQAAABAAAAIgUA4QAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAIgDABIgBAAgAAAgGQAAAAAAAAQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAABgBQAAAAAAgBIASg4QAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABABAAQAAABgBAAQAAABAAABIgUA4QAAAAAAAAQAAABgBAAQAAAAAAABQgBAAAAAAIgDABIgBgBgAAph1QgBgBAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAABgBQAAAAAAgBIAUg4QAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAAAQAAABABAAQAAABgBAAQAAABAAAAIgUA5QAAAAAAAAQAAABgBAAQAAAAAAABQgBAAAAAAIgDABIgBAAgABRjmQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAABgBQAAAAAAgBIAUg4QAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABABAAQAAABgBAAQAAABAAABIgUA3QAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAIgDABIgBgBgAB6lVQgBgBAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAABgBQAAAAAAgBIAUg4QAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAAAQAAABABAAQAAABgBAAQAAABAAAAIgUA5QAAAAAAAAQAAABgBAAQAAAAAAABQgBAAAAAAIgDABIgBAAgACjnFQgBgBAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAABgBQAAAAAAgBIAUg4QAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAAAQAAABABAAQAAABgBAAQAAABAAABIgUA3QAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAIgDABIgBAAgADLo2QgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBABAAQAAgBAAAAIAVg4QAAAAAAgBQAAAAABgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAABABQAAAAgBABQAAAAAAABIgVA4QAAAAAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIgCABIgBgBgAD0qlQgBgBAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBABAAQAAgBAAAAIAVg4QAAAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAABABQAAAAgBABQAAAAAAAAIgVA4QAAABAAAAQAAABgBAAQAAAAgBABQAAAAAAAAIgDABIgBAAgAEdsWQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAABgBQAAAAAAgBIAUg4QAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABABAAQAAABgBAAQAAABAAABIgUA4QAAAAAAAAQAAABgBAAQAAAAAAABQgBAAAAAAIgDABIgBgBgAFGuFQgBgBAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBABAAQAAgBAAAAIAVg4QAAAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAABABQAAAAgBABQAAAAAAAAIgVA4QAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIgCABIgBAAgAFwv2QgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBABAAQAAgBAAAAIAVg4QAAAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAABABQAAAAgBABQAAAAAAABIgVA4QAAAAAAAAQAAABgBAAQAAAAgBABQAAAAAAAAIgDABIgBgBgAGaxlQgBgBAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBABAAQAAgBAAAAIAVg4QAAAAAAgBQAAAAABgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAABABQAAAAgBABQAAAAAAAAIgVA5QAAAAAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIgCABIgBAAgAHEzWQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBABAAQAAgBAAAAIAVg4QAAAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAABABQAAAAgBABQAAAAAAABIgVA3QAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIgCABIgBgBg");
	this.shape_44.setTransform(328.8,199.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_44).wait(1));

	// Symbols
	this.instance_2 = new lib.B787NDMAPMagentaSelectedHeadingBugcopy("synched",0);
	this.instance_2.setTransform(282,330.9,1,1,19.9,0,0,0.4,281.6);

	this.instance_3 = new lib.B787NDMAPCurrentHeadingPointercopy("synched",0);
	this.instance_3.setTransform(281.5,328.4,1,1,0,0,0,-0.1,280.7);

	this.instance_4 = new lib.B787NDMAPTrackLineandRangeScale("synched",0);
	this.instance_4.setTransform(274.6,175.5,1,1,0,0,0,0.3,0);

	this.instance_5 = new lib.B787PFDNDRangecopy("synched",0);
	this.instance_5.setTransform(88.2,34.8,1,1,0,0,0,0.1,0);

	this.instance_6 = new lib.B787NDMAPAirplaneSymbol01copy("synched",0);
	this.instance_6.setTransform(281.6,339.8);

	this.instance_7 = new lib.B787NDMAPFullCompassRosecopy("synched",0);
	this.instance_7.setTransform(281.6,329.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// Line Work 4 - solid green
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FF00FF").ss(1,1,1).p("ANcTFICHDAAvi2EIUEcg");
	this.shape_45.setTransform(221.8,242.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_45).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-205.1,-574.9,1130.4,989.8);


(lib._787_Generic_screencopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Both
	this.instance = new lib.B787SynopticNDMapFullcopy("synched",0);
	this.instance.setTransform(142.8,250.5,0.629,0.629,0,0,0,0,206.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// base
	this.instance_1 = new lib._787_Generic_screw03("synched",0);
	this.instance_1.setTransform(123.1,373.4,0.629,0.629,0,0,0,5.4,5.4);

	this.instance_2 = new lib._787_Generic_screw03("synched",0);
	this.instance_2.setTransform(123.1,128.3,0.629,0.629,0,0,0,5.4,5.4);

	this.instance_3 = new lib._787_Generic_screw03("synched",0);
	this.instance_3.setTransform(516.3,373.4,0.629,0.629,0,0,0,5.4,5.4);

	this.instance_4 = new lib._787_Generic_screw03("synched",0);
	this.instance_4.setTransform(516.3,128.3,0.629,0.629,0,0,0,5.4,5.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#6C7B8A","#4E616D"],[0,1],0.9,-7.3,-9,-7.3).s().p("AAaAnIhiAAQgLgBgBgLIAAg1QABgLALgBIBiAAIA7AAIAABNg");
	this.shape.setTransform(471.6,404.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#7E8D9A","#4E616D"],[0,1],-2.4,1,-1.6,3.1).s().p("AglA0QgQgBgFgMQgCgEgBgFIAAg8QABgFACgDQAFgNAQAAIBjAAIAAANIhiAAQgMAAAAAMIAAA1QAAALAMABIBiAAIAAANg");
	this.shape_1.setTransform(468.1,404.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#6C7B8A","#4E616D"],[0,1],-0.8,-7.3,9.1,-7.3).s().p("AgZAnIg7AAIAAhNIA7AAIBiAAQALABABALIAAA1QgBALgLABg");
	this.shape_2.setTransform(167.7,404.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#7E8D9A","#4E616D"],[0,1],0.3,-2.8,1.4,-0.8).s().p("Ag9A0IAAgNIBjAAQALgBAAgLIAAg1QAAgMgLAAIhjAAIAAgNIBjAAQARAAAFANIACAIIAAA8IgCAJQgFAMgRABg");
	this.shape_3.setTransform(171.3,404.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#7E8D9A","#4E616D"],[0,1],201.1,-136.7,203.4,-133.5).s().p("AALB0QgoAAAAgrIAAg/IAMAAIAAA/QAAAeAcAAIATAAIAAANgAgRAKgAgdAKIAAh9IAMAAIAAB9g");
	this.shape_4.setTransform(121.2,397.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#7E8D9A","#4E616D"],[0,1],7,4.7,4.6,4.2).s().p("ACEXUIilAAIgbgFIgBAAIgBgBIgKgEIgBAAIgGgEIAnAAIgnAAIgDgCIgBAAIgIgGIgfgdIgPgOIgEgFIgegeIgIgNIgHgQIgDgZIAAnDIANAAIAAHCIADAXIAFAOIAGAKIAAAAIAeAdIADAEIAaAYIAUATIAIAFIAIAFIAJAEIASAEIAIABIDeAAIAAANgAhPXGgAi9N3MAAAgitQAAgUAGgQIAAABQABgFADgEIAAgBIAHgKQADgGAggeIAFgFIApgmQAdgXAeABICkAAIA6AAIAAAMIjeAAQgaAAgZAUIgfAcIgPAOQgdAcgEAGIAAgBIgGALIgDAHQgFAOAAARMAAAAitg");
	this.shape_5.setTransform(146,250.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#6C7B8A","#4E616D"],[0,1],-0.8,7.4,9.1,7.4).s().p("AgZAnIg7AAIAAhNIA7AAIBiAAQALAAABAMIAAA1QgBAMgLAAg");
	this.shape_6.setTransform(167.7,97.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#7E8D9A","#4E616D"],[0,1],-1.3,-2.1,-0.2,-0.1).s().p("Ag9AzIAAgMIBjAAQALAAAAgMIAAg1QAAgMgLAAIhjAAIAAgMIBjAAQARAAAFAMIACAIIAAA8IgCAJQgFAMgRAAg");
	this.shape_7.setTransform(171.3,97.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#6C7B8A","#4E616D"],[0,1],0.9,7.4,-9,7.4).s().p("AhIAnQgLAAgBgMIAAgbIAAgaQABgMALAAICdAAIAABNg");
	this.shape_8.setTransform(471.6,97.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#7E8D9A","#4E616D"],[0,1],4.1,5.5,-4,-5.5).s().p("ARYVeIAAgxIJuAAQAQAAAKgHQAEgDACgDQAHgKAAgRMAAAgoKQAAgQgHgJQgCgEgEgDQgKgHgQAAMg2LAAAQgQAAgKAHQgDADgDAEQgHAIAAARMAAAAh8IAAGOQAAATAHAIIAGAGQAJAHARAAMAsdAAAIAAAxMgslAAAQhQAAAAhQIAAmXIAxAAIgxAAMAAAgiEQAAhQBQAAMA2bAAAQBQAAAABQMAAAAobQAABQhQAAg");
	this.shape_9.setTransform(319.7,251);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#7E8D9A","#4E616D"],[0,1],-33.4,10.8,-30.8,12.9).s().p("ADOAxIAAAAIgfgcQgZgUgaAAIlDAAQgQAAgFgKQgCgEgBgFIAAgeIANAAIAAAbQAAALAMABICeAAICkAAQAQAAAPAGIATAHIAJAHIApAmg");
	this.shape_10.setTransform(484.3,102.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#7E8D9A","#4E616D"],[0,1],1.9,-1.2,4.2,2).s().p("A1CYvQgRAAgEgNQgDgDAAgFIAAg+IgCgJQgFgMgRAAIhkAAIjhAAIgIgCIFsAAIlsAAIgSgDIgJgEIgIgFIgIgGIgUgSIgagYIgDgEIgdgeIAAABIgGgLIgGgOIgDgXIAAnCIAMAAIAAHBQAAAZANAQIAAAAIBMBJIgBAAQALAIAMAFIAVAEIFIAAQATABAHAJIACABQAFAIAAAOIAAA7QABAMALAAMArpAAAQAFAAADgBQAEgEAAgHIAAg7QAAgPAHgIQAIgJASgBIFIAAIAWgEIAKgFIADgCIAJgGIAJgIIABAAIASgSIARgPIAMgMIATgUQAMgQAAgZMAAAgpuQAAgYgMgQIAAgBQgEgFgbgaIgZgXIgBAAIgTgSQgVgRgXAAIlIAAQgSgBgIgJQgHgIAAgRIAAg6QAAgHgEgDQgDgCgFAAMgrpAAAQgLABgBALIAAA6QABARgIAIQgHAJgTABIlIAAQgWAAgWARIABAAIgUASIgZAXQgcAagDAFIAAABQgNAQAAAYMAAAAitIgMAAMAAAgitQAAgRAFgOIAEgHIAGgKIAAAAQADgGAdgbIAQgOIAegdQAagTAZAAIDhAAIBkAAQARAAAFgNIACgIIAAg+QAAgFADgEQAEgMARAAMArpAAAQARAAAFAMIADAJIAAAfIAAAfQAAAFACADQAFANAQAAIFFAAQAaAAAZATIAfAdIABAAIAOAOQAeAbAEAGIgBAAQAGAIAEAJQAFAOAAARMAAAApuIAAABIAAACIAAACIgBAGIgDAQIAAACIgBACIgCAFIgIANIAAABIgVAVIgMALIgIAHIgCACIgPAPIgBAAIgUASIgEAEIgBABIgLAGIgJAEIgaAFIjgAAIhlAAQgQAAgFAMQgCAEAAAFIAAA+IgDAIQgFANgRAAgA9uYvIAAgNIFdAAIA7AAIAAANgA6/XFgA+sVGIAAnQIAMAAIAAHQgA+sN2MAAAgl6QAAgqAqAAIGsAAIAAAMIg7AAIlxAAQgeAAAAAeMAAAAl6g");
	this.shape_11.setTransform(314.7,251);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#7E8D9A","#4E616D"],[0,1],-7.9,3.9,-10.3,3.5).s().p("AiDW1Ig6AAIAAgMIDeAAIAagFIAJgEIALgGIABgBIAEgEIAUgSIABAAIAPgPIACgCIAIgHIAMgLIAUgVIABgBIAIgNIACgFIABgCIAAgCIADgQIABgGIAAgCIAAgCIAAgBMAAAgpuQAAgRgFgOQgEgJgGgIIAAAAQgEgGgdgbIgPgOIASAAIABAAIAFAFQAeAdAFAGQAGAJAEALIABAAIAAAAQAFAQAAATMAAAApuIAAABIAAACIAAACIAAAIIgEASIAAABIgCAFIgCAEIgKARIgBABIgUAVIgMALIAAAAIgIAIIgIAHIAAAAIgDADIgCABIgaAYIgIAGIgBAAIgJAGIgBAAIgKAFIgBAAIgBAAQgNAFgOAAg");
	this.shape_12.setTransform(493.4,254);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#7E8D9A","#4E616D"],[0,1],-18.9,-13.9,-17.5,-13.5).s().p("AjqYMIAAgNIA7AAIFwAAIABAAQAaAAACgaIAAgCIAAgCMAAAgvsIAMAAMAAAAvsQABAUgKAKQgKAMgWABg");
	this.shape_13.setTransform(497.8,254.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#7E8D9A","#4E616D"],[0,1],25.5,-1.1,28.2,1.5).s().p("AEcAjIAAgcIAAgCIAAgCQgCgYgbAAIlwAAIieAAQgMAAAAAMIAAAaIgNAAIAAgeQABgFACgDQAFgNAQAAIIPAAQAWAAALANQAJAKAAASIAAAcg");
	this.shape_14.setTransform(491.6,96.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6C7B8A").s().p("Ae2YjIlyAAIAAhQICnAAQAOAAANgEIABAAIABgBIAKgFIAAAAIAKgGIABAAIAIgFIAagZIACgBIADgDIAAAAIAIgHIAIgHIAAAAIAMgMIAUgVIAAgBIALgRIACgEIACgFIAAgBIADgSIABgIIAAgCIAAgBIAAgBMAAAgpuQAAgUgFgQIAAAAIgBAAQgEgLgGgIQgFgHgegdIgGgFIAAAAIgpgmIgKgHIgSgKQgPgFgQAAIimAAIAAhPIFyAAQAbgBACAbIAAACIAAABIAAAcMAAAAvtIAAACIAAABQgCAagaABIgBAAgA10YjQgLgBgBgLIAAg8QAAgOgGgHMAneAAAIAAhoIAABoMgneAAAIgBgCQgIgJgSgBIlIAAIgWgEQgMgEgKgJIABAAIhNhJIAAAAQgMgQAAgYIAAnBIBQAAIAAGXQAABQBQAAMAslAAAIJ2AAQBQAAAAhQMAAAgobQAAhQhQAAMg2bAAAQhQAAAABQMAAAAiEIhQAAMAAAgitQAAgZAMgQIAAgBQAEgFAcgZIAYgYIAVgSIgBAAQAVgRAXAAIFIAAQASgBAIgJQAHgIAAgRIAAg6QABgLALAAMArpAAAQAEAAADABQAEAEABAGIAAA6QgBARAIAIQAIAJASABIFIAAQAWAAAWARIATASIABAAIAZAYQAbAZADAFIAAABQANAQAAAZMAAAApuQAAAYgNAQIgTAVIgLALIgRAQIgSARIgBAAIgJAIIgJAGIgDACIgLAFIgVAEIlIAAQgSABgIAJQgHAIAAAPIAAA8QgBAGgEAEQgDABgEABgA+hYjIgTAAQgegBAAgdIAAg/IC6AAIAGADIAAAAIAKAFIABABIACAAIAaAEICoAAIAABQgA2GXGgA/SXGIAAiAIAAnPIBMAAIhMAAMAAAgl7QAAgdAeAAIFxAAIAABPIimAAQgegBgdAXIgpAmIgFAFQggAegDAGIgHAKIAAAAQgDAFgBAEIAAAAQgGAQAAAUMAAAAitIAAHDIADAZIAGAQIAIAMIAeAfIAFAFIAPAOIAfAdIAIAFIABAAIADADg");
	this.shape_15.setTransform(319.7,251);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("ARYUtIAAm2MgtEAAAMAAAgh8QAAgRAHgIQADgEADgDQAKgHAQAAMA2LAAAQAQAAAKAHQAEADACAEQAHAJAAAQMAAAAoKQAAARgHAKQgCADgEADQgKAHgQAAgARYUtMgsdAAAQgRAAgJgHIgGgGQgHgIAAgTIAAmOMAtEAAAIAAG2g");
	this.shape_16.setTransform(319.7,251);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// base fill
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#666360","#414141"],[0,1],1.3,2.4,-0.2,-0.2).s().p("AgLADIAAABIAAABgAAMgEIAAAAIAAABg");
	this.shape_17.setTransform(122.7,372.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#666360","#414141"],[0,1],1.3,2.4,-0.2,-0.2).s().p("AgLADIAAABIAAABgAAMgEIAAAAIAAABg");
	this.shape_18.setTransform(122.7,127.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#666360","#414141"],[0,1],0.1,2.9,-1.4,0.3).s().p("AAAAAIAAAAIAAAAg");
	this.shape_19.setTransform(517.1,371.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#666360","#414141"],[0,1],0.1,2.9,-1.4,0.3).s().p("AAAAAIAAAAIAAAAg");
	this.shape_20.setTransform(517.1,126.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4E616D").s().p("A+hYvIgTAAQgrAAAAgqIAAhAMAw3AAAIAApPMgw3AAAMAAAgl6QAAgqArAAMA9qAAAQAWAAAKAMQAKALgBATIAAAcMAAAAvtQABATgKAKQgKANgWAAgAeXSxQgIAKgBAMQABAMAIAJQAKAKAMAAQANAAAIgKQAJgJAAgMQAAgMgJgKQgIgIgNAAQgMAAgKAIgAeXzfQgIAJgBANQABAMAIAJQAKAJAMAAQANAAAIgJQAJgJAAgMQAAgNgJgJQgIgJgNAAQgMAAgKAJgA/CzfQgJAJAAANQAAAMAJAJQAJAJANAAQAMAAAIgJQAKgJAAgMQAAgNgKgJQgIgJgMAAQgNAAgJAJgA/fXFIAAh/IAAnQMAw3AAAIAAJPgA/CSxQgJAKAAAMQAAAMAJAJQAJAKANAAQAMAAAIgKQAKgJAAgMQAAgMgKgKQgIgIgMAAQgNAAgJAIgA/fN2g");
	this.shape_21.setTransform(319.7,251);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AeYTeQgJgJAAgMQAAgNAJgJQAJgJAMAAQANAAAIAJQAKAJAAANQAAAMgKAJQgIAJgNAAQgMAAgJgJgAe2S6IAAgBIAAAAgA/CTeQgJgJAAgMQAAgNAJgJQAJgJANAAQAMAAAJAJQAJAJAAANQAAAMgJAJQgJAJgMAAQgNAAgJgJgA+9TEIABgBIAAgBgA+kS6IABgBIAAAAgAeYyzQgJgJAAgMQAAgMAJgKQAJgIAMAAQANAAAIAIQAKAKAAAMQAAAMgKAJQgIAKgNAAQgMAAgJgKgAe2zWIAAgBIAAgBgA/CyzQgJgJAAgMQAAgMAJgKQAJgIANAAQAMAAAJAIQAJAKAAAMQAAAMgJAJQgJAKgMAAQgNAAgJgKgA+9zNIABgBIAAAAgA+kzWIABgBIAAgBg");
	this.shape_22.setTransform(319.7,250.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(118.1,92.6,403.2,316.8);


// stage content:
(lib.dif06ibp02 = function(mode,startPosition,loop) {
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
	this.frame_137 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(137).call(this.frame_137).wait(1));

	// prot
	this.prot = new lib.prot();
	this.prot.setTransform(500,275,1,1,0,0,0,500,275);

	this.timeline.addTween(cjs.Tween.get(this.prot).wait(138));

	// text copy
	this.instance = new lib.point_2copy("synched",0);
	this.instance.setTransform(116.9,417.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).to({alpha:1},5).wait(112));

	// text
	this.instance_1 = new lib.point_1copy("synched",0);
	this.instance_1.setTransform(138.1,392.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({_off:false},0).to({alpha:1},5).wait(112));

	// title
	this.instance_2 = new lib.titlecopy4("synched",0);
	this.instance_2.setTransform(116.8,61.5,1,1,0,0,0,78.6,12.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21).to({_off:false},0).to({alpha:1},5).wait(112));

	// text
	this.instance_3 = new lib.point_1("synched",0);
	this.instance_3.setTransform(431.3,471.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).to({alpha:1},5).wait(112));

	// hl
	this.instance_4 = new lib.hl02("synched",0);
	this.instance_4.setTransform(873.9,170,1,1,0,0,0,55.1,42.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(21).to({_off:false},0).to({alpha:1},5).wait(112));

	// title
	this.instance_5 = new lib.title("synched",0);
	this.instance_5.setTransform(409.9,447.7,1,1,0,0,0,78.6,12.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(21).to({_off:false},0).to({alpha:1},5).wait(112));

	// title
	this.instance_6 = new lib.titlecopy3("synched",0);
	this.instance_6.setTransform(116.8,368.7,1,1,0,0,0,78.6,12.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(21).to({_off:false},0).to({alpha:1},5).wait(112));

	// title
	this.instance_7 = new lib.title_01("synched",0);
	this.instance_7.setTransform(497.3,393.4,1,1,0,0,0,458.1,90.8);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(21).to({_off:false},0).to({alpha:1},5).wait(112));

	// screen
	this.instance_8 = new lib._787_Generic_screencopy("synched",0);
	this.instance_8.setTransform(-543.6,142.8,1,1,0,0,0,319.7,250.9);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(16).to({_off:false},0).to({alpha:1},5).wait(117));

	// screen
	this.instance_9 = new lib._787_Generic_screencopy2("synched",0);
	this.instance_9.setTransform(545.9,257.9,1.06,1.06,0,0,0,319.6,251);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(16).to({_off:false},0).to({alpha:1},5).wait(117));

	// panel
	this.instance_10 = new lib.EngineDisplayControlPanel();
	this.instance_10.setTransform(515.5,445.7,0.075,0.075,0,0,0,310.7,104.3);
	this.instance_10.alpha = 0.352;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(8).to({_off:false},0).to({regX:310.9,regY:104.1,scaleX:1,scaleY:1,x:754.6,y:272,alpha:1},5).wait(125));

	// hl
	this.instance_11 = new lib.hl("synched",0);
	this.instance_11.setTransform(387.8,75.9,1,1,0,0,0,43.3,39.4);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({alpha:1},5).wait(3).to({startPosition:0},0).to({alpha:0.352},5).wait(3).to({startPosition:0},0).to({alpha:0},5).wait(117));

	// cockpit
	this.instance_12 = new lib.B737800CockpitStage("single",0);
	this.instance_12.setTransform(500.1,274.8,1,1,0,0,0,429.6,274.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(8).to({startPosition:0},0).to({alpha:0.352},5).wait(3).to({startPosition:0},0).to({alpha:0},5).wait(117));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(500,274.5,1000,551.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;