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
		{src:"images/dif04ep13_panel_1.png", id:"dif04ep13_panel_1"},
		{src:"images/dif04ep13_panel_2.png", id:"dif04ep13_panel_2"},
		{src:"images/en01p02_01_flaps.png", id:"en01p02_01_flaps"},
		{src:"images/en01p02_01_lg.png", id:"en01p02_01_lg"},
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



(lib.dif04ep13_panel_1 = function() {
	this.initialize(img.dif04ep13_panel_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,638,367);


(lib.dif04ep13_panel_2 = function() {
	this.initialize(img.dif04ep13_panel_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,638,367);


(lib.en01p02_01_flaps = function() {
	this.initialize(img.en01p02_01_flaps);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,802,368);


(lib.en01p02_01_lg = function() {
	this.initialize(img.en01p02_01_lg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,374,670);


(lib.texture = function() {
	this.initialize(img.texture);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAuIAAgSIAQAAIAAASgAgHgbIAAgSIAQAAIAAASg");
	this.shape.setTransform(509.6,13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_1.setTransform(504.6,12.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_2.setTransform(497.4,13.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGBAIAAhcIANAAIAABcgAgGgsIAAgTIANAAIAAATg");
	this.shape_3.setTransform(491,11.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAYAuIgTgdIgFgIIgXAlIgTAAIAiguIgfgtIATAAIAPAWIAFAKIAGgKIAQgWIATAAIghAsIAjAvg");
	this.shape_4.setTransform(484.5,13.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_5.setTransform(475,13.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_6.setTransform(460.4,13.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_7.setTransform(451,13.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_8.setTransform(441,13.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgHBAIAAhcIAOAAIAABcgAgHgsIAAgTIAOAAIAAATg");
	this.shape_9.setTransform(434,11.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_10.setTransform(429.6,12.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgHBAIAAhcIAOAAIAABcgAgHgsIAAgTIAOAAIAAATg");
	this.shape_11.setTransform(425,11.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgLAAgOQAAgOAFgKQAEgMAKgFQAJgHALAAQAHABAGADQAHADAEAHIAAgvIAQAAIAAB/IgPAAIAAgMQgIAOgRAAQgKAAgJgGgAgPgIQgIAIABARQAAARAHAJQAHAJAJAAQAKAAAIgIQAGgJAAgRQAAgSgGgIQgIgJgLAAQgJAAgGAJg");
	this.shape_12.setTransform(417.7,12);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_13.setTransform(408,13.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_14.setTransform(398,13.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_15.setTransform(388.8,13.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgbA7QgKgIAAgPIAQACQABAHAEAEQAGAEAKAAQAKAAAFgEQAGgFADgIQAAgEAAgQQgKAMgOAAQgSAAgLgOQgKgOAAgRQgBgNAFgMQAFgLAJgGQAJgGAMAAQAPAAALANIAAgLIAPAAIAABPQgBAVgEAKQgFAJgJAFQgJAFgNAAQgQAAgLgHgAgQgrQgIAIAAARQAAASAIAHQAHAIAJAAQALAAAHgIQAIgHAAgSQAAgRgIgIQgHgJgLAAQgJAAgHAJg");
	this.shape_16.setTransform(373.7,15.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_17.setTransform(364,13.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgGBAIAAhcIAOAAIAABcgAgGgsIAAgTIAOAAIAAATg");
	this.shape_18.setTransform(357,11.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AASAuIgPg2IgDgQIgRBGIgRAAIgchbIAQAAIAOA0IAHAUIAEgTIAPg1IAOAAIAOA0IAFASIAFgSIAQg0IAQAAIgdBbg");
	this.shape_19.setTransform(348.5,13.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_20.setTransform(337,13.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_21.setTransform(330,11.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgGBAIAAh/IAOAAIAAB/g");
	this.shape_22.setTransform(326,11.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_23.setTransform(319,13.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgKQAAgIACgFQACgHAGgDQAEgEAKAAIAPABIgDAOIgJAAQgHAAgDACQgDADAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_24.setTransform(311.9,11.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQAMAMgBAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_25.setTransform(299,13.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAWBAIAAg7QgBgKgFgGQgEgFgKAAQgFAAgGAEQgGAEgDAFQgDAFAAALIAAAzIgPAAIAAh/IAPAAIAAAvQAMgNAOgBQALAAAHAFQAIAEADAHQAEAHgBAMIAAA7g");
	this.shape_26.setTransform(289,11.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_27.setTransform(281.6,12.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_28.setTransform(269,13.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQALAMABAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_29.setTransform(259,13.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgGQgGgFgJAAQgFAAgHAEQgGAEgCAFQgDAFAAALIAAAzIgQAAIAAh/IAQAAIAAAvQAMgNAOgBQALAAAHAFQAIAEADAHQADAHABAMIAAA7g");
	this.shape_30.setTransform(249,11.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AASAuIgPg2IgDgQIgSBGIgQAAIgdhbIARAAIAPA0IAFAUIAFgTIAPg1IAOAAIAOA0IAFASIAFgSIAQg0IAPAAIgdBbg");
	this.shape_31.setTransform(237.5,13.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_32.setTransform(223.6,12.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgGQgGgFgJAAQgFAAgGAEQgGAEgDAFQgDAFAAALIAAAzIgPAAIAAh/IAPAAIAAAvQAMgNAOgBQALAAAHAFQAIAEADAHQAEAHgBAMIAAA7g");
	this.shape_33.setTransform(216,11.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgbA7QgKgIAAgPIAQACQABAHAEAEQAGAEAKAAQAKAAAFgEQAGgFACgIQABgEAAgQQgKAMgOAAQgTAAgKgOQgLgOAAgRQABgNAEgMQAFgLAJgGQAKgGALAAQAQAAAKANIAAgLIAOAAIAABPQAAAVgEAKQgFAJgJAFQgKAFgMAAQgRAAgKgHgAgQgrQgHAIAAARQAAASAHAHQAHAIAJAAQALAAAIgIQAHgHAAgSQAAgRgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_34.setTransform(205.7,15.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgsIAAgTIAPAAIAAATg");
	this.shape_35.setTransform(199,11.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_36.setTransform(195,11.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgKQAAgIACgFQACgHAGgDQAEgEAKAAIAPABIgCAOIgKAAQgHAAgDACQgDADAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_37.setTransform(190.9,11.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_38.setTransform(183,13.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgGBAIAAhcIANAAIAABcgAgGgsIAAgTIANAAIAAATg");
	this.shape_39.setTransform(176,11.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgLAAgOQAAgOAFgKQAFgMAJgFQAJgHALAAQAHABAHADQAGADAEAHIAAgvIAQAAIAAB/IgPAAIAAgMQgIAOgRAAQgKAAgJgGgAgQgIQgGAIAAARQgBARAIAJQAIAJAIAAQAKAAAHgIQAIgJgBgRQABgSgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_40.setTransform(163.7,12);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_41.setTransform(154,13.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_42.setTransform(146.6,12.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHADgGQADgGAGgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgFAEQgGAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACADAFQAFAEAAAGIABAPIAAATQAAAWABAGQABAGAEAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgDAFQgJACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgQACg");
	this.shape_43.setTransform(139,13.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgGAuIgjhbIAQAAIAUA2IAFATIAFgSIAVg3IAQAAIgjBbg");
	this.shape_44.setTransform(129.5,13.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgGBAIAAhcIAOAAIAABcgAgGgsIAAgTIAOAAIAAATg");
	this.shape_45.setTransform(123,11.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_46.setTransform(118.6,12.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_47.setTransform(111.8,13.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQAEgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgFAEQgGAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAKgDAKAAQALAAAIADQAHACADAFQAFAEABAGIAAAPIAAATQABAWAAAGQABAGAEAFIgRAAQgCgFgBgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgDAFQgJACgEACQgEABgDAEQgBADAAAEQAAAHAEAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQADgFgBgLIAAgFQgIADgQACg");
	this.shape_48.setTransform(102,13.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_49.setTransform(87.4,13.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgsIAAgTIAPAAIAAATg");
	this.shape_50.setTransform(81,11.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgMgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_51.setTransform(69,13.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_52.setTransform(62,11.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgLAAgOQAAgOAFgKQAFgMAJgFQAJgHALAAQAHABAHADQAGADAEAHIAAgvIAQAAIAAB/IgPAAIAAgMQgJAOgQAAQgKAAgJgGgAgQgIQgGAIAAARQgBARAIAJQAHAJAJAAQAKAAAHgIQAIgJgBgRQABgSgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_53.setTransform(54.7,12);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_54.setTransform(47.6,11.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgbA7QgKgIAAgPIAQACQABAHAEAEQAGAEAKAAQAKAAAFgEQAGgFACgIQABgEAAgQQgKAMgOAAQgTAAgKgOQgKgOAAgRQAAgNAEgMQAFgLAJgGQAKgGALAAQAQAAAKANIAAgLIAOAAIAABPQAAAVgEAKQgFAJgJAFQgKAFgMAAQgRAAgKgHgAgQgrQgHAIAAARQAAASAHAHQAHAIAJAAQALAAAIgIQAHgHAAgSQAAgRgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_55.setTransform(34.7,15.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_56.setTransform(25,13.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgsIAAgTIAPAAIAAATg");
	this.shape_57.setTransform(18,11.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_58.setTransform(11.8,13.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_59.setTransform(4.6,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,659,24.1);


(lib.t0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgMgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape.setTransform(69,13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_1.setTransform(62,11.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgLAAgOQAAgOAFgKQAFgMAJgFQAJgHALAAQAHABAHADQAGADAEAHIAAgvIAQAAIAAB/IgPAAIAAgMQgJAOgQAAQgKAAgJgGgAgQgIQgGAIAAARQgBARAIAJQAHAJAJAAQAKAAAHgIQAIgJgBgRQABgSgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_2.setTransform(54.7,12);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_3.setTransform(47.6,11.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgbA7QgKgIAAgPIAQACQABAHAEAEQAGAEAKAAQAKAAAFgEQAGgFACgIQABgEAAgQQgKAMgOAAQgTAAgKgOQgKgOAAgRQAAgNAEgMQAFgLAJgGQAKgGALAAQAQAAAKANIAAgLIAOAAIAABPQAAAVgEAKQgFAJgJAFQgKAFgMAAQgRAAgKgHgAgQgrQgHAIAAARQAAASAHAHQAHAIAJAAQALAAAIgIQAHgHAAgSQAAgRgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_4.setTransform(34.7,15.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_5.setTransform(25,13.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgsIAAgTIAPAAIAAATg");
	this.shape_6.setTransform(18,11.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_7.setTransform(11.8,13.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_8.setTransform(4.6,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76.2,24.1);


(lib.Symbol2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006633").s().p("AgvBAIAAh/IBdAAIAAAWIhDAAIAAAcIA/AAIAAAUIg/AAIAAAjIBGAAIAAAWg");
	this.shape.setTransform(250.3,11.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006633").s().p("AgsA/IAAh+IAaAAIAABpIA/AAIAAAVg");
	this.shape_1.setTransform(239,11.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006633").s().p("Ag1BAIAAh/IA0AAQANAAAIACQAHABAHADQAGAFAEAGQADAHAAAIQAAAKgEAHQgGAIgIADQAMADAGAHQAHAJgBALQABAIgEAJQgFAIgHAFQgGAFgLABQgHABgWAAgAgaAqIAYAAQAMAAAEgBQAGgBADgDQADgFAAgGQAAgGgCgFQgDgEgFgBQgFgCgRAAIgUAAgAgagMIARAAIARAAQAGgBAEgDQAEgFAAgFQAAgGgEgFQgDgDgGgBIgUAAIgPAAg");
	this.shape_2.setTransform(226.8,11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006633").s().p("AAkBAIgMgdIgxAAIgLAdIgbAAIAyh/IAZAAIA0B/gAgRANIAhAAIgQgug");
	this.shape_3.setTransform(213.6,11.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006633").s().p("AgsA/IAAh+IAaAAIAABpIA/AAIAAAVg");
	this.shape_4.setTransform(202,11.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006633").s().p("AgMBAIAAh/IAYAAIAAB/g");
	this.shape_5.setTransform(193.7,11.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006633").s().p("AAkBAIgMgdIgxAAIgLAdIgbAAIAyh/IAZAAIA0B/gAgRANIAhAAIgQgug");
	this.shape_6.setTransform(184.6,11.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006633").s().p("AgNBAIguh/IAcAAIAfBdIAghdIAbAAIguB/g");
	this.shape_7.setTransform(173.5,11.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006633").s().p("AAkBAIgMgdIgxAAIgLAdIgbAAIAyh/IAZAAIA0B/gAgRANIAhAAIgQgug");
	this.shape_8.setTransform(162.3,11.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006633").s().p("AgwBAIAAh/IBeAAIAAAWIhEAAIAAAcIBAAAIAAAUIhAAAIAAAjIBGAAIAAAWg");
	this.shape_9.setTransform(145.7,11.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006633").s().p("AgsA/IAAh+IAaAAIAABpIA/AAIAAAVg");
	this.shape_10.setTransform(134.4,11.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006633").s().p("Ag0BAIAAh/IAvAAQAOAAAJADQALADAIAIQAIAJAEAMQAFAMAAARQAAAPgFAMQgEAOgJAJQgHAGgLAFQgJACgNAAgAgaAqIATAAQAJAAAFgBQAGgBAEgEQAFgEACgJQACgIABgPQgBgNgCgJQgCgHgFgFQgFgEgIgCQgEgBgPAAIgLAAg");
	this.shape_11.setTransform(122.2,11.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006633").s().p("AgLBAIAAh/IAYAAIAAB/g");
	this.shape_12.setTransform(113.1,11.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006633").s().p("AgcA6QgQgJgHgQQgIgQAAgRQAAgTAJgPQAIgRAQgIQANgGAQAAQAYAAAOAKQANAKAEASIgaAEQgCgJgIgGQgHgFgMAAQgPAAgKALQgKALAAAVQAAAVAKALQALAMAOAAQAIAAAJgDQAIgDAGgFIAAgQIgeAAIAAgUIA4AAIAAAxQgIAIgQAGQgPAGgQAAQgSAAgPgIg");
	this.shape_13.setTransform(98.4,11.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006633").s().p("AAZBAIgyhSIAABSIgZAAIAAh/IAZAAIA0BUIAAhUIAYAAIAAB/g");
	this.shape_14.setTransform(85,11.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006633").s().p("AgLBAIAAh/IAXAAIAAB/g");
	this.shape_15.setTransform(76.1,11.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#006633").s().p("AgmAwQgRgRAAgeQAAgfARgRQAQgSAaAAQAXAAAPAOQAJAIAEAPIgaAHQgCgKgHgGQgHgGgLAAQgMAAgJALQgJAKAAAWQAAAXAJAKQAJALAMAAQAKAAAIgGQAHgHADgOIAaAHQgGAWgOAKQgNAKgVAAQgYAAgQgSg");
	this.shape_16.setTransform(67,11.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#006633").s().p("AgLBAIAAh/IAXAAIAAB/g");
	this.shape_17.setTransform(58.1,11.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#006633").s().p("AgsA/IAAh+IAaAAIAABpIA/AAIAAAVg");
	this.shape_18.setTransform(45.8,11.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#006633").s().p("AgsA/IAAh+IAaAAIAABpIA/AAIAAAVg");
	this.shape_19.setTransform(34.8,11.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#006633").s().p("AgZA9QgJgFgGgGQgGgHgBgHQgDgMAAgVIAAhDIAaAAIAABEQAAAQABAGQACAHAGAFQAGAFAJAAQALAAAGgFQAGgEABgGIABgXIAAhFIAaAAIAABCQAAAXgCAKQgCAJgGAHQgGAGgJAFQgKADgPAAQgQAAgKgEg");
	this.shape_20.setTransform(22.3,12);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#006633").s().p("AgrBAIAAh/IBWAAIAAAWIg8AAIAAAeIA0AAIAAAUIg0AAIAAA3g");
	this.shape_21.setTransform(10.7,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,261,24.1);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgCA+QgFgDgDgDQgCgEgCgGIgBgRIAAgnIgLAAIAAgUIALAAIAAgSIAXgPIAAAhIARAAIAAAUIgRAAIAAAkIABANIACADIAEABIAKgCIACATQgIAEgMAAQgGAAgDgCg");
	this.shape.setTransform(91,12.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AghAgQgJgMAAgUQAAgVAMgNQAMgNASAAQAUAAAMAOQAMANgBAbIg8AAQABALAFAGQAGAGAGAAQAGAAAEgDQAEgDACgHIAZAEQgFANgKAHQgKAHgQAAQgWAAgMgQgAgLgWQgFAFAAALIAjAAQgBgLgFgGQgFgFgIAAQgGAAgFAGg");
	this.shape_1.setTransform(82.9,13.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AghAgQgJgMAAgUQAAgVAMgNQAMgNASAAQAUAAAMAOQAMANgBAbIg8AAQABALAFAGQAGAGAGAAQAGAAAEgDQAEgDACgHIAZAEQgFANgKAHQgKAHgQAAQgWAAgMgQgAgLgWQgFAFAAALIAjAAQgBgLgFgGQgFgFgIAAQgGAAgFAGg");
	this.shape_2.setTransform(72.9,13.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgQBBIAAhIIgOAAIAAgUIAOAAIAAgGQAAgMACgGQADgFAGgEQAGgEAJAAQALAAAKADIgDASIgMgCQgFAAgCADQgDACABAHIAAAGIASAAIAAAUIgSAAIAABIg");
	this.shape_3.setTransform(65.4,11.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgdAzQgLgOAAglQAAgjAMgQQALgNARAAQASAAALANQAMAQAAAjQAAAkgMAQQgLANgSAAQgRAAgMgOgAgGgpQgEADgCAHQgCAKAAAVQAAAWACAJQACAIAEADQADADADAAQAEAAAEgDQADgDACgHQADgKAAgWQAAgVgDgIQgCgJgDgDQgEgDgEAAQgDAAgDADg");
	this.shape_4.setTransform(51.9,11.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgdAzQgLgOAAglQAAgjAMgQQALgNARAAQASAAALANQAMAQAAAjQAAAkgMAQQgLANgSAAQgRAAgMgOgAgGgpQgEADgCAHQgCAKAAAVQAAAWACAJQACAIAEADQADADADAAQAEAAAEgDQADgDACgHQADgKAAgWQAAgVgDgIQgCgJgDgDQgEgDgEAAQgDAAgDADg");
	this.shape_5.setTransform(41.9,11.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AAGBAIAAgaIgzAAIAAgVIA2hQIAVAAIAABQIAQAAIAAAVIgQAAIAAAagAgWARIAcAAIAAgqg");
	this.shape_6.setTransform(32,11.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgMAQQAIgCADgEQABgFAAgGIgKAAIAAgYIAXAAIAAASQAAAIgCAGQgCAGgFAGQgEAFgHACg");
	this.shape_7.setTransform(24.4,18.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgdAzQgLgOAAglQAAgjAMgQQALgNARAAQASAAALANQAMAQAAAjQAAAkgMAQQgLANgSAAQgRAAgMgOgAgGgpQgEADgCAHQgCAKAAAVQAAAWACAJQACAIAEADQADADADAAQAEAAAEgDQADgDACgHQADgKAAgWQAAgVgDgIQgCgJgDgDQgEgDgEAAQgDAAgDADg");
	this.shape_8.setTransform(16.9,11.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgcA3QgMgKgBgQIAXgDQACAJAFAFQAFAFAGAAQAGAAAGgGQAFgGAAgJQAAgKgFgFQgFgGgHAAQgDAAgHACIADgSQAIAAAFgEQAGgFAAgIQAAgGgEgEQgEgEgFAAQgGAAgEAFQgFAEgBAIIgXgDQADgMAFgHQAEgHAJgEQAIgEALAAQAQAAALALQAJAKAAAMQAAARgSAKQALACAHAHQAGAIAAAMQAAARgMALQgNAMgRAAQgRAAgLgKg");
	this.shape_9.setTransform(7,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,176,24.1);


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


(lib._787_GNDProxPanel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PNG
	this.instance = new lib.en01p02_01_lg();
	this.instance.setTransform(-144.9,-28.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-144.9,-28.6,187,335.2);


(lib.chart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dashed
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006633").s().p("EAzKAAKQgEgBgCgDQgDgCgBgEQABgDADgCQACgDAEgBIAzAAQAEABADADQACACAAADQAAAEgCACQgDADgEABgEAwCAAKQgEgBgDgDQgCgCgBgEQABgDACgCQADgDAEgBIBkAAQAFABACADQADACAAADQAAAEgDACQgCADgFABgEAs7AAKQgFgBgDgDQgCgCAAgEQAAgDACgCQADgDAFgBIBjAAQAFABADADQACACAAADQAAAEgCACQgDADgFABgEApzAAKQgFgBgDgDQgCgCAAgEQAAgDACgCQADgDAFgBIBkAAQAEABADADQACACABADQgBAEgCACQgDADgEABgEAmrAAKQgFgBgCgDQgDgCgBgEQABgDADgCQACgDAFgBIBkAAQAEABACADQADACABADQgBAEgDACQgCADgEABgEAjiAAKQgEgBgCgDQgDgCgBgEQABgDADgCQACgDAEgBIBkAAQAFABACADQADACABADQgBAEgDACQgCADgFABgEAgaAAKQgEgBgDgDQgCgCAAgEQAAgDACgCQADgDAEgBIBkAAQAFABADADQACACAAADQAAAEgCACQgDADgFABgAdTAKQgFgBgDgDQgCgCAAgEQAAgDACgCQADgDAFgBIBkAAQAEABADADQACACAAADQAAAEgCACQgDADgEABgAaLAKQgFgBgCgDQgDgCAAgEQAAgDADgCQACgDAFgBIBkAAQAEABADADQACACABADQgBAEgCACQgDADgEABgAXCAKQgEgBgCgDQgDgCgBgEQABgDADgCQACgDAEgBIBlAAQAEABACADQADACABADQgBAEgDACQgCADgEABgAT6AKQgEgBgDgDQgCgCgBgEQABgDACgCQADgDAEgBIBkAAQAFABACADQADACAAADQAAAEgDACQgCADgFABgAQzAKQgFgBgDgDQgCgCAAgEQAAgDACgCQADgDAFgBIBjAAQAFABADADQACACAAADQAAAEgCACQgDADgFABgANrAKQgFgBgDgDQgCgCAAgEQAAgDACgCQADgDAFgBIBkAAQAEABADADQACACABADQgBAEgCACQgDADgEABgAKjAKQgFgBgCgDQgDgCgBgEQABgDADgCQACgDAFgBIBkAAQAEABACADQADACABADQgBAEgDACQgCADgEABgAHaAKQgEgBgCgDQgDgCgBgEQABgDADgCQACgDAEgBIBkAAQAFABACADQADACABADQgBAEgDACQgCADgFABgAESAKQgEgBgDgDQgCgCAAgEQAAgDACgCQADgDAEgBIBkAAQAFABACADQADACAAADQAAAEgDACQgCADgFABgABLAKQgFgBgDgDQgCgCAAgEQAAgDACgCQADgDAFgBIBkAAQAEABADADQACACAAADQAAAEgCACQgDADgEABgAh7AKQgFgBgCgDQgDgCAAgEQAAgDADgCQACgDAFgBIBkAAQAEABADADQACACABADQgBAEgCACQgDADgEABgAlEAKQgEgBgCgDQgDgCgBgEQABgDADgCQACgDAEgBIBlAAQAEABACADQADACABADQgBAEgDACQgCADgEABgAoMAKQgEgBgDgDQgCgCgBgEQABgDACgCQADgDAEgBIBkAAQAFABACADQADACAAADQAAAEgDACQgCADgFABgArUAKQgEgBgDgDQgCgCAAgEQAAgDACgCQADgDAEgBIBkAAQAFABADADQACACAAADQAAAEgCACQgDADgFABgAubAKQgFgBgCgDQgDgCAAgEQAAgDADgCQACgDAFgBIBkAAQAEABADADQACACAAADQAAAEgCACQgDADgEABgAxjAKQgFgBgCgDQgDgCgBgEQABgDADgCQACgDAFgBIBkAAQAEABACADQADACABADQgBAEgDACQgCADgEABgA0sAKQgEgBgCgDQgDgCgBgEQABgDADgCQACgDAEgBIBkAAQAFABACADQADACABADQgBAEgDACQgCADgFABgA30AKQgEgBgDgDQgCgCgBgEQABgDACgCQADgDAEgBIBkAAQAFABACADQADACAAADQAAAEgDACQgCADgFABgA67AKQgFgBgDgDQgCgCAAgEQAAgDACgCQADgDAFgBIBjAAQAFABADADQACACAAADQAAAEgCACQgDADgFABgA+DAKQgFgBgCgDQgDgCAAgEQAAgDADgCQACgDAFgBIBkAAQAEABADADQACACABADQgBAEgCACQgDADgEABgEghMAAKQgEgBgCgDQgDgCgBgEQABgDADgCQACgDAEgBIBlAAQAEABACADQADACABADQgBAEgDACQgCADgEABgEgkUAAKQgEgBgDgDQgCgCgBgEQABgDACgCQADgDAEgBIBkAAQAFABACADQADACAAADQAAAEgDACQgCADgFABgEgncAAKQgEgBgDgDQgCgCAAgEQAAgDACgCQADgDAEgBIBkAAQAFABADADQACACAAADQAAAEgCACQgDADgFABgEgqjAAKQgFgBgDgDQgCgCAAgEQAAgDACgCQADgDAFgBIBkAAQAEABADADQACACAAADQAAAEgCACQgDADgEABgEgtrAAKQgFgBgCgDQgDgCgBgEQABgDADgCQACgDAFgBIBkAAQAEABACADQADACABADQgBAEgDACQgCADgEABgEgw0AAKQgEgBgCgDQgDgCgBgEQABgDADgCQACgDAEgBIBkAAQAFABACADQADACABADQgBAEgDACQgCADgFABgEgz8AAKQgEgBgDgDQgCgCgBgEQABgDACgCQADgDAEgBIBkAAQAFABACADQADACAAADQAAAEgDACQgCADgFABg");
	this.shape.setTransform(333.5,161.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("EAzKAAJQgEAAgCgCQgDgDgBgEQABgDADgDQACgCAEAAIAzAAQAEAAADACQACADAAADQAAAEgCADQgDACgEAAgEAwCAAJQgEAAgDgCQgCgDgBgEQABgDACgDQADgCAEAAIBkAAQAFAAACACQADADAAADQAAAEgDADQgCACgFAAgEAs7AAJQgFAAgDgCQgCgDAAgEQAAgDACgDQADgCAFAAIBjAAQAFAAADACQACADAAADQAAAEgCADQgDACgFAAgEApzAAJQgFAAgDgCQgCgDAAgEQAAgDACgDQADgCAFAAIBkAAQAEAAADACQACADABADQgBAEgCADQgDACgEAAgEAmrAAJQgFAAgCgCQgDgDgBgEQABgDADgDQACgCAFAAIBkAAQAEAAACACQADADABADQgBAEgDADQgCACgEAAgEAjiAAJQgEAAgCgCQgDgDgBgEQABgDADgDQACgCAEAAIBkAAQAFAAACACQADADABADQgBAEgDADQgCACgFAAgEAgaAAJQgEAAgDgCQgCgDAAgEQAAgDACgDQADgCAEAAIBkAAQAFAAADACQACADAAADQAAAEgCADQgDACgFAAgAdTAJQgFAAgDgCQgCgDAAgEQAAgDACgDQADgCAFAAIBkAAQAEAAADACQACADAAADQAAAEgCADQgDACgEAAgAaLAJQgFAAgCgCQgDgDAAgEQAAgDADgDQACgCAFAAIBkAAQAEAAADACQACADABADQgBAEgCADQgDACgEAAgAXCAJQgEAAgCgCQgDgDgBgEQABgDADgDQACgCAEAAIBlAAQAEAAACACQADADABADQgBAEgDADQgCACgEAAgAT6AJQgEAAgDgCQgCgDgBgEQABgDACgDQADgCAEAAIBkAAQAFAAACACQADADAAADQAAAEgDADQgCACgFAAgAQzAJQgFAAgDgCQgCgDAAgEQAAgDACgDQADgCAFAAIBjAAQAFAAADACQACADAAADQAAAEgCADQgDACgFAAgANrAJQgFAAgDgCQgCgDAAgEQAAgDACgDQADgCAFAAIBkAAQAEAAADACQACADABADQgBAEgCADQgDACgEAAgAKjAJQgFAAgCgCQgDgDgBgEQABgDADgDQACgCAFAAIBkAAQAEAAACACQADADABADQgBAEgDADQgCACgEAAgAHaAJQgEAAgCgCQgDgDgBgEQABgDADgDQACgCAEAAIBkAAQAFAAACACQADADABADQgBAEgDADQgCACgFAAgAESAJQgEAAgDgCQgCgDAAgEQAAgDACgDQADgCAEAAIBkAAQAFAAACACQADADAAADQAAAEgDADQgCACgFAAgABLAJQgFAAgDgCQgCgDAAgEQAAgDACgDQADgCAFAAIBkAAQAEAAADACQACADAAADQAAAEgCADQgDACgEAAgAh7AJQgFAAgCgCQgDgDAAgEQAAgDADgDQACgCAFAAIBkAAQAEAAADACQACADABADQgBAEgCADQgDACgEAAgAlEAJQgEAAgCgCQgDgDgBgEQABgDADgDQACgCAEAAIBlAAQAEAAACACQADADABADQgBAEgDADQgCACgEAAgAoMAJQgEAAgDgCQgCgDgBgEQABgDACgDQADgCAEAAIBkAAQAFAAACACQADADAAADQAAAEgDADQgCACgFAAgArUAJQgEAAgDgCQgCgDAAgEQAAgDACgDQADgCAEAAIBkAAQAFAAADACQACADAAADQAAAEgCADQgDACgFAAgAubAJQgFAAgCgCQgDgDAAgEQAAgDADgDQACgCAFAAIBkAAQAEAAADACQACADAAADQAAAEgCADQgDACgEAAgAxjAJQgFAAgCgCQgDgDgBgEQABgDADgDQACgCAFAAIBkAAQAEAAACACQADADABADQgBAEgDADQgCACgEAAgA0sAJQgEAAgCgCQgDgDgBgEQABgDADgDQACgCAEAAIBkAAQAFAAACACQADADABADQgBAEgDADQgCACgFAAgA30AJQgEAAgDgCQgCgDgBgEQABgDACgDQADgCAEAAIBkAAQAFAAACACQADADAAADQAAAEgDADQgCACgFAAgA67AJQgFAAgDgCQgCgDAAgEQAAgDACgDQADgCAFAAIBjAAQAFAAADACQACADAAADQAAAEgCADQgDACgFAAgA+DAJQgFAAgCgCQgDgDAAgEQAAgDADgDQACgCAFAAIBkAAQAEAAADACQACADABADQgBAEgCADQgDACgEAAgEghMAAJQgEAAgCgCQgDgDgBgEQABgDADgDQACgCAEAAIBlAAQAEAAACACQADADABADQgBAEgDADQgCACgEAAgEgkUAAJQgEAAgDgCQgCgDgBgEQABgDACgDQADgCAEAAIBkAAQAFAAACACQADADAAADQAAAEgDADQgCACgFAAgEgncAAJQgEAAgDgCQgCgDAAgEQAAgDACgDQADgCAEAAIBkAAQAFAAADACQACADAAADQAAAEgCADQgDACgFAAgEgqjAAJQgFAAgDgCQgCgDAAgEQAAgDACgDQADgCAFAAIBkAAQAEAAADACQACADAAADQAAAEgCADQgDACgEAAgEgtrAAJQgFAAgCgCQgDgDgBgEQABgDADgDQACgCAFAAIBkAAQAEAAACACQADADABADQgBAEgDADQgCACgEAAgEgw0AAJQgEAAgCgCQgDgDgBgEQABgDADgDQACgCAEAAIBkAAQAFAAACACQADADABADQgBAEgDADQgCACgFAAgEgz8AAJQgEAAgDgCQgCgDgBgEQABgDACgDQADgCAEAAIBkAAQAFAAACACQADADAAADQAAAEgDADQgCACgFAAg");
	this.shape_1.setTransform(333.5,76.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bg
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,0,0,3).p("Eg0GgS9MBoNAAAMAAAAl7MhoNAAAg");
	this.shape_2.setTransform(333.5,121.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Eg0GAS+MAAAgl7MBoMAAAMAAAAl7g");
	this.shape_3.setTransform(333.5,121.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,669,245);


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


(lib.B787EICAS_Gauge_N1AmberLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9900").ss(1.5,1,1).p("AgnAAIBPAA");
	this.shape.setTransform(22.9,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17.9,-1,10,2);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006633").s().p("AgCA+QgFgDgDgDQgCgEgBgGQgCgEAAgNIAAgnIgLAAIAAgUIALAAIAAgSIAXgPIAAAhIARAAIAAAUIgRAAIAAAkIABANIACADIAEABIAKgCIACATQgJAEgLAAQgGAAgDgCg");
	this.shape.setTransform(488.9,107);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006633").s().p("AghAgQgJgMAAgUQAAgVAMgNQAMgNASAAQAUAAAMAOQAMANgBAbIg8AAQABALAFAGQAGAGAGAAQAGAAAEgDQAEgDACgHIAZAEQgFANgKAHQgKAHgQAAQgWAAgMgQgAgLgWQgFAFAAALIAjAAQgBgLgFgGQgFgFgIAAQgGAAgFAGg");
	this.shape_1.setTransform(480.8,108.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006633").s().p("AghAgQgJgMAAgUQAAgVAMgNQAMgNASAAQAUAAAMAOQAMANgBAbIg8AAQABALAFAGQAGAGAGAAQAGAAAEgDQAEgDACgHIAZAEQgFANgKAHQgKAHgQAAQgWAAgMgQgAgLgWQgFAFAAALIAjAAQgBgLgFgGQgFgFgIAAQgGAAgFAGg");
	this.shape_2.setTransform(470.8,108.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006633").s().p("AgQBBIAAhIIgOAAIAAgTIAOAAIAAgIQAAgLADgGQACgGAHgEQAFgDAJAAQALAAAKADIgDASIgMgCQgFAAgCACQgCADgBAHIAAAHIATAAIAAATIgTAAIAABIg");
	this.shape_3.setTransform(463.3,106.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006633").s().p("AgdAzQgLgOAAglQAAgjAMgQQALgNARAAQASAAALANQAMAQAAAjQAAAkgMAQQgLANgSAAQgRAAgMgOgAgGgpQgEADgCAHQgCAKAAAVQAAAWACAJQACAIAEADQADADADAAQAEAAAEgDQADgDACgHQADgKAAgWQAAgVgDgIQgCgJgDgDQgEgDgEAAQgDAAgDADg");
	this.shape_4.setTransform(449.8,106.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006633").s().p("AgdAzQgLgOAAglQAAgjAMgQQALgNARAAQASAAALANQAMAQAAAjQAAAkgMAQQgLANgSAAQgRAAgMgOgAgGgpQgEADgCAHQgCAKAAAVQAAAWACAJQACAIAEADQADADADAAQAEAAAEgDQADgDACgHQADgKAAgWQAAgVgDgIQgCgJgDgDQgEgDgEAAQgDAAgDADg");
	this.shape_5.setTransform(439.8,106.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006633").s().p("AgdAzQgLgOAAglQAAgjAMgQQALgNARAAQASAAALANQAMAQAAAjQAAAkgMAQQgLANgSAAQgRAAgMgOgAgGgpQgEADgCAHQgCAKAAAVQAAAWACAJQACAIAEADQADADADAAQAEAAAEgDQADgDACgHQADgKAAgWQAAgVgDgIQgCgJgDgDQgEgDgEAAQgDAAgDADg");
	this.shape_6.setTransform(429.8,106.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006633").s().p("AgMAQQAIgDADgEQABgEAAgFIgKAAIAAgZIAXAAIAAARQAAAJgCAHQgCAFgFAFQgEAFgHADg");
	this.shape_7.setTransform(422.3,113.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006633").s().p("AgqBAQACgNAHgLQAHgMAUgTQAPgOAEgFQAFgIAAgIQAAgIgEgEQgFgFgIAAQgFAAgFAFQgFAFAAAKIgZgCQACgUAMgJQAMgJAPAAQATAAALAKQALAKAAAQQAAAIgDAIQgDAIgHAHIgQAQIgOAOIgEAHIAvAAIAAAXg");
	this.shape_8.setTransform(414.7,106.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006633").s().p("AgqBAQACgNAHgLQAHgMAUgTQAPgOAEgFQAFgIAAgIQAAgIgEgEQgFgFgIAAQgFAAgFAFQgFAFAAAKIgZgCQACgUAMgJQAMgJAPAAQATAAALAKQALAKAAAQQAAAIgDAIQgDAIgHAHIgQAQIgOAOIgEAHIAvAAIAAAXg");
	this.shape_9.setTransform(404.7,106.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FF0000","#FFFF00","#006633"],[0,0.463,1],-191.8,-0.9,185.7,-0.9).s().p("A99l/IAKgxMA7xAMxIgKAwg");
	this.shape_10.setTransform(191.9,43.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006633").s().p("Ag+AZIAKguIAGgeIBzBOIiIAZg");
	this.shape_11.setTransform(389,84.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,495,119);


(lib.ANTIICEPanelcopy = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.dif04ep13_panel_1();
	this.instance.setTransform(-414.9,78.1,0.5,0.5);

	this.instance_1 = new lib.dif04ep13_panel_2();
	this.instance_1.setTransform(-414.9,78.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-414.9,78.1,319,183.5);


(lib._787_Generic_screencopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PNG
	this.instance = new lib.en01p02_01_flaps();
	this.instance.setTransform(216,187,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(216,187,401,184);


(lib.GEN_switchbase01b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#7E8D9A","#4E616D"],[0,1],11.5,11.1,-11.5,-11).s().p("AhvBxQgvgvAAhCQAAhBAvguQAugvBBAAQBCAAAvAvQAuAuAABBQAABCguAvQgvAuhCAAQhBAAgugugAhmhmQgrArAAA7QAAA8ArAsQAqAqA8AAQA8AAAsgqQAqgsAAg8QAAg7gqgrQgsgrg8AAQg8AAgqArg");
	this.shape.setTransform(18.5,18.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#3C3C3C","#8C8C8C","#6A6A6A","#7B7B7B","#453932"],[0,0.286,0.506,0.667,1],-15.1,7.4,15.2,-7.3).s().p("Ah5AsIAXh+IB5gtIBjBVIgXB9Ih4AtgAhJhKQggAgAAAqQAAAsAgAgQAfAfArABQAsgBAggfQAfggAAgsQAAgqgfggQgggggsAAQgrAAgfAgg");
	this.shape_1.setTransform(18.4,18.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#5E5E5E","#453932"],[0,1],0,0,0,0,0,4.3).s().p("AgdA7IAAh2QAPgKAPAAQAQAAANAJIAAB4QgNAKgQAAQgPAAgPgLg");
	this.shape_2.setTransform(18.3,18.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#3C3C3C","#8C8C8C","#959595","#BCBCBC","#EAEAEA","#C5C5C5","#7B7B7B","#453932"],[0,0.114,0.259,0.376,0.522,0.643,0.808,1],-6.7,4.1,9.1,-4).s().p("Ag4AQIAAg1IAWAAIAAAFIAAAhIAEAEQAQALAPAAQAQAAANgKQADgBACgDIAAgiIAAgFIAWAAIAAA3QgYAUggAAQggAAgZgWg");
	this.shape_3.setTransform(18.3,24);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#3C3C3C","#959595","#BCBCBC","#C5C5C5","#7B7B7B","#453932"],[0,0.173,0.38,0.549,0.808,1],-0.1,-2.1,-0.1,1.8).s().p("AAjAQIAAgfIAWAAQAFAQgFAPgAg4AQQgFgQAFgPIAWAAIAAAfg");
	this.shape_4.setTransform(18.3,18.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5D5C5C").s().p("AAeg7IAFADIAAAkIAAAFIAAAfIAAAFIAAAkQgCADgDAAgAgiA4IAAgjIAAgFIAAgfIAAgFIAAgjIAEgDIAAB1IgEgDg");
	this.shape_5.setTransform(18.3,18.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#3C3C3C","#8C8C8C","#959595","#BCBCBC","#EAEAEA","#C5C5C5","#7B7B7B","#453932"],[0,0.114,0.259,0.376,0.522,0.643,0.808,1],-7.9,3.4,7.1,-3.6).s().p("AAjAlIAAgEIAAgiIgFgEQgNgKgQAAQgPAAgQALIgEAEIAAAhIAAAEIgWAAIAAg1QAZgUAgAAQAgAAAYATIAAA2g");
	this.shape_6.setTransform(18.3,13.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#888480").s().p("Ag4BMIAAgFQAZAVAgAAQAgAAAYgTIAAAFQgYASggAAQggAAgZgUgAg4hLQAHgGAJgEIABgBIABAAIACgBQAGgDAGgCIAEgBIAAAAIAJgBIACgBIAKAAQAgAAAYASIAAAFQgYgTggAAQggAAgZAVg");
	this.shape_7.setTransform(18.3,18.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#3C3C3C","#8C8C8C","#959595","#BCBCBC","#C5C5C5","#7B7B7B","#453932"],[0,0.114,0.259,0.376,0.525,0.808,1],-9.9,9.2,10,-9.1).s().p("AhKBMQggggAAgsQAAgrAgggQAfgfArAAQAsAAAgAfQAfAgAAArQAAAsgfAgQggAfgsAAQgrAAgfgfgAgKheIgDAAIgIABIgBAAIgDABQgHACgFADIgCABIgBABIgCAAQgIAEgIAGIgJAIQgdAdAAAmQAAAoAdAcIAJAIQAZAVAhgBQAgAAAYgSIALgKQAdgcAAgoQAAgmgdgdIgLgKQgYgSggAAIgKABg");
	this.shape_8.setTransform(18.5,18.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#3C3C3C","#8C8C8C","#BFBFBF","#C5C5C5","#7B7B7B","#453932"],[0,0.114,0.49,0.643,0.808,1],-10.4,6.2,10.4,-6.1).s().p("AA4BJIAAg5QAFgPgFgQIAAg5IAAgFIAMAKQAcAdAAAmQAAAogcAcIgMAKgAhDBEQgcgcAAgoQAAgmAcgdIAKgIIAAAFIAAA3QgFAPAFAQIAAA3IAAAFIgKgIg");
	this.shape_9.setTransform(18.4,18.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#262626","#7B7B7B","#595959","#666666","#2C2521"],[0,0.286,0.506,0.667,1],-15.1,7.4,15.2,-7.3).s().p("AgXCIIgCgBIhmhXIgBgCIgBgCIAYiCIABgCIABAAIB9guIACgBIACABIBmBYIABABIAAACIgXCCIgBACIgCABIh8AtIgBABIgBAAgAhihSIgXB+IBjBUIB5gtIAWh9IhjhVg");
	this.shape_10.setTransform(18.4,18.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#343D43").s().p("AhmBoQgrgsAAg8QAAg7ArgrQAqgrA8AAQA8AAAsArQAqArAAA7QAAA8gqAsQgsAqg8AAQg8AAgqgqgAAViHIh9AuIgBABIgBACIgYCCIABACIABABIBmBYIACABIACgBIB8guIACgBIABgCIAXiBIAAgCIgBgCIhmhXIgCgBIgBAAIgBAAg");
	this.shape_11.setTransform(18.5,18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base fill
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#7E8D9A","#4E616D"],[0,1],11.5,11.1,-11.5,-11).s().p("AhvBxQgvgvAAhCQAAhBAvguQAugvBBAAQBCAAAvAvQAuAuAABBQAABCguAvQgvAuhCAAQhBAAgugugAhmhmQgrArAAA7QAAA8ArAsQAqAqA8AAQA8AAAsgqQAqgsAAg8QAAg7gqgrQgsgrg8AAQg8AAgqArg");
	this.shape_12.setTransform(18.5,18.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#343D43").s().p("AhmBoQgrgsAAg8QAAg7ArgrQAqgrA8AAQA8AAAsArQAqArAAA7QAAA8gqAsQgsAqg8AAQg8AAgqgqgAAViHIh9AuIgBABIgBACIgYCCIABACIABABIBmBYIACABIACgBIB8guIACgBIABgCIAXiBIAAgCIgBgCIhmhXIgCgBIgBAAIgBAAg");
	this.shape_13.setTransform(18.5,18.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#3C3C3C","#8C8C8C","#BFBFBF","#C5C5C5","#7B7B7B","#453932"],[0,0.114,0.49,0.643,0.808,1],-10.3,6.3,10.5,-6).s().p("AgXCIIgCgBIhmhXIgBgCIgBgCIAYiCIABgCIABAAIB9guIACgBIACABIBmBYIABABIAAACIgXCCIgBACIgCABIh8AtIgBABIgBAAg");
	this.shape_14.setTransform(18.4,18.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.5,2.5,32,32);


(lib.GEN_switch01down = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#D1D7D8","#7B7B7B"],[0.173,0.553,1],-1.9,-4.8,0,-1.9,-4.8,14.3).s().p("AgvA1QgXgVgCgjIAAgLIABgEQACgOAJgMQAEgEAFgFQAWgTAdAAQAeAAAWATIAJAJQAJALACAPIABACIAAAMQgBAkgWAVQgVAUgdAAQgaAAgVgUg");
	this.shape.setTransform(6.6,22.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#E7EAEA","#FFFFFF","#FFFFFF","#DADFE0","#C2C7C8"],[0,0.196,0.486,0.839,1],-7.3,0,7.3,0).s().p("ABIA6QgCgOgJgMIgJgJQgWgSgegBQgdABgWASQgFAFgEAFQgJALgCAOIgBAAIADgzIAAgHIABgGQACgQAMgMIADgEIABAAIABgCIABgBQAGgFAHgEQAHgDAIgBQAKgEAKAAQAKAAAKAEQALACALAHIAEADIACACQARAOADAUIABAIIAAADIAAAFIAEAwg");
	this.shape_1.setTransform(6.6,14.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","#D1D7D8","#7B7B7B"],[0.173,0.553,1],-1.6,-6.4,0,-1.6,-6.4,15.1).s().p("AhHASQADgRAMgLIADgDIADgCIAAAAIABgBIACgBIACgCQALgIANgEQALgDAKAAQALAAAKADQAOAEALAIIACABIADADIAKAJQAKAKABAOQABAEgCAIIgBABIgBgKQgDgVgSgMIgBgBIgFgDQgLgHgLgDQgKgDgKAAQgKAAgKADQgHABgHAEQgHADgGAGIgBABIgCABIAAAAIgDAEQgNAKgCARIgBAHIAAAHQgDgNABgEg");
	this.shape_2.setTransform(6.6,11.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#959595","#5E5E5E"],[0,1],-2.5,0,2.6,0).s().p("AgbAJQABgIAHgEQAJgGAKAAQAMAAAIAGQAHAEABAIIAAABQgMgJgQAAQgPAAgMAJIAAgBg");
	this.shape_3.setTransform(6.5,1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#5E5E5E","#A8A8A8","#C5C5C5","#7B7B7B","#5E5E5E"],[0,0.286,0.549,0.808,1],-4.9,-1,3.9,-1).s().p("AAVASQgKgDgLAAQgKAAgLADQgNAEgLAIQADgIAJgHIADgDQAOgJAQAAQARAAANAIIAEAEQAJAHAEAIQgMgIgOgEgAgtgCQAEgJAIgGIADgDQAOgJAQAAQARAAANAJIAEADQAIAGAEAJIAAAKQgDgIgJgHIgEgCQgNgJgRAAQgQAAgOAJIgDACQgJAHgEAIg");
	this.shape_4.setTransform(6.6,6.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#5E5E5E","#959595","#BCBCBC","#C5C5C5","#7B7B7B","#5E5E5E"],[0,0.173,0.38,0.549,0.808,1],-4.1,0.4,3.1,0.4).s().p("AguASQAEgKAJgHIADgBQAOgJAQAAQARAAANAJIAEABQAJAHADAJIACAXIgBgBQgEgHgJgIIgEgDQgNgJgRAAQgQAAgOAJIgDADQgJAHgDAIIgCACgAAigIIgEgDQgNgJgRAAQgQAAgOAJIgDADQgIAHgEAGIABgLQACgMALgKIADgDQANgJAPAAQAPAAANAJIAAAAIAEADQALAKACAMIAAAGIAAABIABAEQgEgGgIgHg");
	this.shape_5.setTransform(6.6,5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base fill
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#E7EAEA","#FFFFFF","#FFFFFF","#DADFE0","#C2C7C8"],[0,0.196,0.486,0.839,1],-7.3,-4.6,7.3,-4.6).s().p("AgvBVQgXgVgCglIAAgLIABgEIgBAAIADg5IABgHQACgQAMgNIADgDIABAAIABgCIABgBQAMgLAQgDQAKgDAKAAQAKAAAKADQANADANAKIACABQARAOADAVIABAKIAAADIAAAEIAEAvIgBAAIABABIAAANQgBAmgWAVQgVAUgdAAQgaAAgVgUg");
	this.shape_6.setTransform(6.6,18.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#808080").s().p("AAvAwQgNgJgOgEQgKgDgKAAQgKAAgKADQgPAEgMAKIADgzQACgNALgKIADgCIAAgCQACgHAHgGQAIgHALAAQALAAAJAHQAHAGABAHIAAABIAAAAIAEADQALAKACANIAAAEIAAACIADAqIAAABIAAADIgBgCg");
	this.shape_7.setTransform(6.6,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,0,14.8,29.4);


(lib.GEN_screw03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#5A6B72","#414B50"],[0,1],3,3,-3,-3).s().p("AgFApIgIgCQgEAAABgEIAFgTQABgKgJgEIABAAIgUgEIgBAAQgBAAAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBIADgHQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAgBQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAUAGQAJABAEgJIAAAAIADgTIAAgBQAAgBABAAQAAAAABgBQAAAAABAAQABABABAAIAIABIACABQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIgFATQgBAKAJAFIATADQADABAAAEIgCAHQgCADgDgBIgTgEQgKgBgEAJIgDATQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAIAAgBgAgkgNIgCAHIAAACIAUAEQAMADgCANIgFAUIABABIAHACIABgBIAEgTIAAAAQADgLANABIABAAIATAFIABgBIAAgBIACgHIgBAAIgSgFIgBAAQgMgEACgNIAGgSIAAgBIgBAAIgIgCIAAAAIgGAUQgCALgNgBIgUgFIgBAAg");
	this.shape.setTransform(1.9,-1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#84949D","#4D5A5E"],[0,1],-2.4,-3.1,0,-2.4,-3.1,9).s().p("AgJA9QgMgCgKgGQgLgGgHgLQgPgVAEgYQACgMAGgKQAHgKALgIQAUgPAYAEQAMACALAHQAJAGAIALQAPAUgEAYQgCAMgGALQgHAJgLAIQgQAMgTAAIgJgBgAgJARIgFATQgBAEAEAAIAIACQADAAAAgCIAEgTQAEgJAKAAIATAFQADAAACgDIACgHQAAgEgDAAIgTgEQgJgEABgKIAFgTQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIgCgCIgIgBQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBABAAAAIAAABIgEAUIAAgBQgDAKgJgBIgUgGQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAAAABQAAAAAAAAIgDAIQAAAAAAABQAAABAAAAQABABAAAAQAAABABAAIABAAIAUAEIgBAAQAJAEgBAKg");
	this.shape_1.setTransform(1.7,-1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#2D3539","#7E939A"],[0,1],4.2,5,-4.1,-4.9).s().p("AgJA/QgNgCgLgGQgKgHgIgKQgQgXAFgYQACgNAHgKQAGgLAMgIQAUgPAZAEQANACALAHQAKAGAIALQAQAWgFAZQgCANgHAKQgGAKgMAIQgQAMgUAAIgJgBgAgigxQgLAIgHAKQgGAKgCAMQgEAYAPAVQAHALALAGQAKAGAMACQAXAEAVgPQALgIAHgJQAGgLACgMQAEgYgPgUQgIgLgJgGQgLgHgMgCIgKgBQgSAAgQAMg");
	this.shape_2.setTransform(1.7,-1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#374448").s().p("AgMAlIgBgBIAFgUQACgNgMgDIgUgEIAAgCIACgHIAAAAIABAAIAUAFQANABACgLIAGgUIAAAAIAIACIABAAIAAABIgGASQgCANAMAEIABAAIASAFIABAAIgCAHIAAABIgBABIgTgFIgBAAQgNgBgDALIAAAAIgEATIgBABg");
	this.shape_3.setTransform(1.9,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.7,-8.2,12.9,12.9);


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


(lib.GEN_screw01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#6C7B8A","#58646B"],[0,1],4.1,2.1,0,4.1,2.1,17.9).s().p("AAABGIAViHQAWAGANAUQASAYgFAaQgFAdgYARQgTANgVAAIAAAAgAg4AoQgRgXAFgbQAFgdAYgQQAUgOAUABIgVCGQgVgGgPgUg");
	this.shape.setTransform(9.9,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#657381","#71838E"],[0,1],4.4,8.4,-4.3,-8.4).s().p("AgOBdQgngGgXggQgXghAHgkQAGgmAhgYQAfgXAlAHQAnAGAXAgQAXAhgHAlQgGAmghAXQgZASgdAAIgOgCgAgthAQgbAUgGAgQgFAfATAcQATAaAhAGQAfAFAbgTQAcgTAFghQAGgfgUgbQgUgbgggGIgNgBQgYAAgVAPg");
	this.shape_1.setTransform(9.9,10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#2D3539","#7E939A"],[0,1],4.5,8.8,-2.4,-4.5).s().p("AgPBiQgpgHgXgiQgZgiAHgmQAHgpAigYQAhgXAnAGQAoAHAYAhQAYAigGAnQgHAogiAYQgaATgfAAIgPgBgAg2hMQggAYgHAmQgGAkAXAhQAWAgAnAGQAlAHAggXQAggXAHgmQAGglgXghQgXgggmgGIgPgCQgdAAgZASg");
	this.shape_2.setTransform(10,10);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4A5557").s().p("AgHBFIgHgBIgBAAIAViIIABAAIAHACIACABIgVCGIgCAAg");
	this.shape_3.setTransform(10.5,10);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3F4649").s().p("AgGBFIgHgCIgCAAIAAAAIAViHIABAAIABAAIAIABIgVCIg");
	this.shape_4.setTransform(9.5,9.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#384547","#84949D"],[0,1],-4.3,-7,4.3,7.1).s().p("AgMBPQghgGgTgaQgTgcAFgfQAGggAbgUQAbgTAfAFQAgAGAUAbQAUAbgGAfQgFAhgcATQgVAPgZAAIgMgBgAgng3QgYAQgFAdQgFAbARAXQAPAUAVAGIABAAIACABIAHABIAAAAIACABIAGAAIACABQAVAAATgNQAYgRAFgdQAFgagSgYQgNgUgWgGIgCgBIgHgBIgBgBIgHAAIgCAAIgBAAIgBAAQgVAAgSANg");
	this.shape_5.setTransform(9.9,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20,20);


(lib.GEN_pbbase01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#222222","#111111"],[0,1],-0.3,-0.6,0.4,0.7).s().p("AjkB5QgKAAAAgKIAAjdQAAgKAKAAIHJAAQAKAAAAAKIAADdQAAAKgKAAgAjlhmIAADMQAAAKAKAAIG1AAQAKAAAAgKIAAjMQAAgKgKAAIm1AAQgKAAAAAKg");
	this.shape.setTransform(24.9,13.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1A1A1A").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABg");
	this.shape_1.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,47.9,24.4);


(lib.point_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.point("synched",0);
	this.instance.setTransform(-62.1,1.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape.setTransform(133.3,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgMgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_1.setTransform(125.7,3.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdAkQgMgNgBgXQABgVAMgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgLgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_2.setTransform(115.7,3.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgMIAOAAIAAgKQAAgKACgEQACgHAGgDQADgEALAAIAPACIgDANIgJgBQgHAAgDAEQgDADAAAIIAAAJIASAAIAAAMIgSAAIAABPg");
	this.shape_3.setTransform(108.6,1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgcA0QgNgQAAgkQABgVAEgOQAFgOAJgIQAJgHANAAQAKAAAIAEQAHAEAFAIQAGAIACALQADAMAAARQABAWgFAOQgFAOgJAIQgKAHgNAAQgRAAgLgNgAgQgqQgIAMAAAeQAAAfAHALQAIAKAJAAQALAAAHgKQAHgLAAgfQAAgegHgLQgHgKgLAAQgJAAgHAJg");
	this.shape_4.setTransform(95.7,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgcA0QgNgQAAgkQABgVAEgOQAFgOAJgIQAJgHANAAQAKAAAIAEQAHAEAFAIQAFAIADALQADAMAAARQABAWgFAOQgFAOgJAIQgJAHgOAAQgRAAgLgNgAgQgqQgIAMAAAeQAAAfAHALQAIAKAJAAQAKAAAIgKQAHgLAAgfQAAgegHgLQgIgKgKAAQgJAAgHAJg");
	this.shape_5.setTransform(85.7,1.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAKBAIAAgfIg1AAIAAgPIA4hRIAOAAIAABRIARAAIAAAPIgRAAIAAAfgAgbASIAlAAIAAg3g");
	this.shape_6.setTransform(75.4,1.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgIAOQAFgCACgEQABgEAAgGIgHAAIAAgSIAQAAIAAASQAAAIgDAGQgEAGgFADg");
	this.shape_7.setTransform(68.2,8.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgcA0QgNgQAAgkQABgVAEgOQAFgOAJgIQAJgHANAAQAKAAAIAEQAHAEAFAIQAGAIACALQADAMABARQAAAWgFAOQgFAOgJAIQgKAHgNAAQgRAAgLgNgAgQgqQgIAMgBAeQABAfAHALQAIAKAJAAQALAAAHgKQAHgLAAgfQAAgegHgLQgHgKgLAAQgJAAgHAJg");
	this.shape_8.setTransform(60.7,1.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgcA3QgLgKgCgQIAQgCQADAOAGAFQAHAGAJAAQAKAAAHgIQAIgHAAgMQAAgKgHgIQgHgHgLAAQgDAAgGACIABgMIADAAQAIAAAIgFQAIgGAAgKQAAgJgGgGQgGgFgHgBQgJABgGAFQgHAGgBAMIgQgDQADgQAKgIQAKgKAQABQAIAAAJAEQAJAEAFAJQAEAHAAAJQAAAJgEAGQgFAHgIAEQALADAGAGQAHAJAAAMQAAARgNALQgMANgRAAQgRAAgLgLg");
	this.shape_9.setTransform(50.7,1.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AASAuIgPg2IgDgQIgSBGIgQAAIgdhbIARAAIAPA0IAFAUIAFgTIAPg1IAOAAIAOA0IAFASIAFgSIAQg0IAQAAIgeBbg");
	this.shape_10.setTransform(34.2,3.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_11.setTransform(22.7,3.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_12.setTransform(15.7,1.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_13.setTransform(8.7,3.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgYA0IAAALIgPAAIAAh/IAQAAIAAAuQAKgMANAAQAJgBAIAEQAHADAFAHQAFAGADAJQADAHAAAKQAAAYgMANQgMANgQAAQgPAAgJgNgAgRgJQgHAJAAAPQAAASAEAHQAIAMAMAAQAJAAAHgJQAIgJAAgSQAAgQgHgJQgIgJgJAAQgJAAgIAJg");
	this.shape_14.setTransform(-1.1,1.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAGAAQAHAAAJAFIgGAPQgFgEgGAAQgFAAgDADQgEADgCAGQgCAIAAAKIAAAvg");
	this.shape_15.setTransform(-13.6,3.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_16.setTransform(-22.3,3.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_17.setTransform(-34.7,1.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAoBAIgOgnIg0AAIgPAnIgSAAIAyh/IAQAAIA1B/gAgHgZIgPAkIAqAAIgNgiIgHgbQgDANgEAMg");
	this.shape_18.setTransform(-43.3,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.6,-10.4,202.6,24.1);


(lib.point_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.point("synched",0);
	this.instance.setTransform(-62.1,1.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgnBBIAAh/IAOAAIAAAMQAGgHAGgEQAGgDAHAAQAMAAAKAGQAIAGAFALQAFAMAAANQAAAOgFAKQgFALgKAGQgKAGgKAAQgHAAgGgDQgGgDgFgFIAAAtgAgRgqQgIAJAAASQAAAQAHAJQAIAIAKAAQAIAAAJgJQAHgIAAgRQAAgSgHgJQgIgJgJAAQgKAAgHAKg");
	this.shape.setTransform(69,4.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_1.setTransform(58.6,3.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_2.setTransform(44.1,3.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgHBAIAAhbIAPAAIAABbgAgHgtIAAgSIAPAAIAAASg");
	this.shape_3.setTransform(37.7,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAGAAQAHAAAJAFIgFAPQgHgEgFAAQgFAAgDADQgEADgBAGQgDAIAAAKIAAAvg");
	this.shape_4.setTransform(28.4,3.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHADgGQADgGAFgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgGAEQgFAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQALAAAIADQAHACAEAFQADAEABAGIACAPIAAATQAAAWABAGQABAGACAFIgQAAQgDgFAAgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgCADgBAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgPACg");
	this.shape_5.setTransform(19.7,3.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgIAAgIAHg");
	this.shape_6.setTransform(9.7,3.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgbA7QgKgIAAgPIAQACQABAHAEAEQAGAEAKAAQAKAAAFgEQAGgFACgIQABgEAAgQQgKAMgOAAQgSAAgLgOQgKgOAAgRQgBgNAFgMQAFgLAJgGQAJgGAMAAQAPAAALANIAAgLIAPAAIAABPQgBAVgEAKQgEAJgKAFQgJAFgNAAQgQAAgLgHgAgQgrQgIAIABARQgBASAIAHQAHAIAJAAQALAAAHgIQAIgHAAgSQAAgRgIgIQgIgJgKAAQgJAAgHAJg");
	this.shape_7.setTransform(-0.6,5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_8.setTransform(-15.3,3.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgHBAIAAhbIAOAAIAABbgAgHgtIAAgSIAOAAIAAASg");
	this.shape_9.setTransform(-22.3,1.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHADgGQADgGAGgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACADAFQAFAEAAAGIABAPIAAATQAAAWABAGQABAGAEAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgDAFQgJACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgQACg");
	this.shape_10.setTransform(-29.3,3.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAtBAIAAhqIgmBqIgNAAIglhsIAABsIgRAAIAAh/IAaAAIAeBZIAEATIAHgUIAfhYIAXAAIAAB/g");
	this.shape_11.setTransform(-41.8,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.6,-10.4,140.6,24.1);


(lib.point_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.point("synched",0);
	this.instance.setTransform(-62.1,1.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgnBBIAAh/IAPAAIAAAMQAFgHAGgEQAGgDAIAAQALAAAJAGQAKAGAEALQAFAMAAANQAAAOgFAKQgFALgKAGQgKAGgKAAQgHAAgGgDQgGgDgEgFIAAAtgAgRgqQgIAJAAASQAAAQAHAJQAIAIAKAAQAJAAAHgJQAIgIgBgRQABgSgIgJQgHgJgJAAQgJAAgIAKg");
	this.shape.setTransform(46,4.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_1.setTransform(35.6,3.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgeAkQgLgNAAgXQAAgVALgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgLAAQgJAAgIAHg");
	this.shape_2.setTransform(20.7,3.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAGAAQAHAAAJAFIgGAPQgFgEgGAAQgFAAgDADQgEADgCAGQgCAIAAAKIAAAvg");
	this.shape_3.setTransform(13.4,3.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAJgDIAAgEQAAgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAFAEABAGIABAPIAAATQAAAWABAGQAAAGADAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQADgFgBgLIAAgFQgIADgQACg");
	this.shape_4.setTransform(4.7,3.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_5.setTransform(-9.9,3.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgnBBIAAh/IAOAAIAAAMQAGgHAGgEQAGgDAHAAQAMAAAKAGQAIAGAFALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgGAAgHgDQgGgDgEgFIAAAtgAgRgqQgIAJAAASQAAAQAHAJQAIAIAKAAQAIAAAIgJQAIgIgBgRQABgSgIgJQgHgJgJAAQgKAAgHAKg");
	this.shape_6.setTransform(-19,4.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHADgGQADgGAGgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACADAFQAFAEAAAGIABAPIAAATQAAAWABAGQABAGAEAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgDAFQgJACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgQACg");
	this.shape_7.setTransform(-29.3,3.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_8.setTransform(-36.3,1.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgqBAIAAh/IBVAAIAAAQIhEAAIAAAnIA7AAIAAAOIg7AAIAAA6g");
	this.shape_9.setTransform(-43.5,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.6,-10.4,117.6,24.1);


(lib.point_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.point("synched",0);
	this.instance.setTransform(-62.1,1.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape.setTransform(89.7,3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_1.setTransform(79.7,3.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgNAAQgIAAgIAHg");
	this.shape_2.setTransform(64.7,3.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_3.setTransform(55.5,3.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgHBAIAAhbIAOAAIAABbgAgHgtIAAgSIAOAAIAAASg");
	this.shape_4.setTransform(48.7,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgXAHIAAgOIAvAAIAAAOg");
	this.shape_5.setTransform(43.7,3.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgHBAIAAhbIAPAAIAABbgAgHgtIAAgSIAPAAIAAASg");
	this.shape_6.setTransform(38.7,1.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_7.setTransform(34.3,1.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_8.setTransform(26.7,3.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQAEAEAAAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAHgEAEgHQACgFAAgLIAAgFQgIADgPACg");
	this.shape_9.setTransform(16.7,3.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgNAAQgIAAgIAHg");
	this.shape_10.setTransform(1.7,3.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_11.setTransform(-8.3,3.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgHBAIAAhbIAPAAIAABbgAgHgtIAAgSIAPAAIAAASg");
	this.shape_12.setTransform(-15.3,1.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgaA7QgLgIABgPIAPACQABAHAEAEQAGAEAKAAQAJAAAHgEQAFgFADgIQABgEAAgQQgLAMgOAAQgTAAgKgOQgLgOAAgRQAAgNAFgMQAFgLAJgGQAKgGALAAQAQAAAKANIAAgLIAOAAIAABPQABAVgFAKQgEAJgKAFQgKAFgMAAQgQAAgKgHgAgQgrQgHAIgBARQABASAHAHQAHAIAJAAQALAAAHgIQAIgHAAgSQAAgRgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_13.setTransform(-22.6,5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_14.setTransform(-32.3,3.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgvBAIAAh/IBcAAIAAAQIhKAAIAAAnIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_15.setTransform(-43.1,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.6,-10.4,161.6,24.1);


(lib.point_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.point("synched",0);
	this.instance.setTransform(-62.1,1.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQAMAMgBAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape.setTransform(40.7,3.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_1.setTransform(33.7,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgLAAgPQAAgNAFgKQAFgLAJgHQAJgFALAAQAHgBAGAEQAHAEAFAFIAAguIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgPgJQgIAJAAAQQABASAHAJQAIAJAIAAQAKAAAIgJQAGgIABgSQgBgRgGgJQgIgJgLAAQgIAAgHAJg");
	this.shape_2.setTransform(26.4,1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_3.setTransform(19.3,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_4.setTransform(9.3,1.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_5.setTransform(2.1,3.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgNAAQgIAAgIAHg");
	this.shape_6.setTransform(-7.3,3.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgFQgGgGgJAAQgFAAgGAEQgHADgCAHQgDAEAAALIAAAzIgPAAIAAh/IAPAAIAAAuQAMgMAOAAQAKAAAIADQAIAEADAIQADAHAAAMIAAA7g");
	this.shape_7.setTransform(-17.3,1.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgbA7QgKgIAAgPIAQACQABAHAEAEQAGAEAKAAQAKAAAFgEQAGgFACgIQABgEAAgQQgKAMgOAAQgSAAgLgOQgKgOAAgRQgBgNAFgMQAFgLAJgGQAJgGAMAAQAPAAALANIAAgLIAPAAIAABPQgBAVgEAKQgEAJgKAFQgJAFgNAAQgQAAgLgHgAgQgrQgIAIABARQgBASAIAHQAHAIAJAAQALAAAHgIQAIgHAAgSQAAgRgIgIQgIgJgKAAQgJAAgHAJg");
	this.shape_8.setTransform(-27.6,5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgHBAIAAhbIAPAAIAABbgAgHgtIAAgSIAPAAIAAASg");
	this.shape_9.setTransform(-34.3,1.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAhBAIAAg8IhBAAIAAA8IgRAAIAAh/IARAAIAAA1IBBAAIAAg1IARAAIAAB/g");
	this.shape_10.setTransform(-42.8,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.6,-10.4,112.6,24.1);


(lib.B787EICAS_Gauge_N1Left = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Indicators
	this.instance = new lib.B787EICAS_Gauge_N1AmberLine("synched",0);
	this.instance.setTransform(0,0,1,1,-162.5);

	this.instance_1 = new lib.B787EICAS_Gauge_N1RedLine("synched",0);
	this.instance_1.setTransform(0,0,1,1,-152.5);

	this.instance_2 = new lib.B787EICAS_Gauge_N1GreenRefTargetN1("synched",0);
	this.instance_2.setTransform(0,0,1,1,-165);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AB+B+QhggRhIhJQgjgjgUgnQgUgmgIgx");
	this.shape.setTransform(-17.9,18);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,0,0,3).p("ACABbIgHArAhMiBIg2AM");
	this.shape_1.setTransform(-17.4,17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.instance_3 = new lib.B787EICAS_Gauge_N1WhitePointer("synched",0);
	this.instance_3.setTransform(0,0,1,1,170);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNAUQgEgJAAgLQAAgKAEgJQAEgLAJAAQAKAAAEALQAEAJAAAKQAAALgEAJQgFALgJAAQgJAAgEgLgAgIgOQgCAHAAAHQAAAIACAHQADAKAFAAQAGAAADgKQACgHAAgIQAAgHgCgHQgDgJgGAAQgFAAgDAJg");
	this.shape_2.setTransform(-16.6,-4.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AADAdIgFAAIAAgGIAAAGIgKAAIAAgGIAKAAIAAgsIgKAFIAAgHIALgFIAEAAIAAAzIgFAAIAFAAIAAAGIAAgGIAKAAIAAAGgAADAXg");
	this.shape_3.setTransform(-20.7,-4.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLAaQgFgFAAgIQAAgKAKgFQgIgEAAgJQAAgHAEgDQAFgFAFAAQAGAAAEAFQAFAEAAAGQAAAFgCADIgGAFQAKAEAAALQAAAIgFAFQgFAFgHAAQgGAAgFgFgAgGAEQgDAEAAAEQAAAFADAEQADAEADAAQAEAAADgEQADgDAAgGQAAgEgDgEQgDgEgEAAQgDAAgDAEgAgFgVQgCADAAAEQAAAEACADQADACACAAQADAAADgCQACgDAAgEQAAgEgCgDQgDgCgDgBQgCABgDACg");
	this.shape_4.setTransform(-20.3,7.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPADQAAghARAAQAFAAAEADQAEAEAAAEIgGAAQAAgEgHAAQgFgBgDAJQgDAHAAAIIAAABQAGgGAFAAQAHAAAEAFQADAEAAAIQAAAHgDAGQgFAGgHAAQgQAAAAgcgAgGAEQgCAFAAAGQAAAEAEADQADADACAAQAEAAADgEQACgFAAgEQAAgGgCgCQgDgEgFAAQgDAAgDAEg");
	this.shape_5.setTransform(-10.6,18);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAIAdIAAgSIgVAAIAAgGIAVghIAGAAIAAAhIAAAGIAAASgAgIAFIAPAAIAAgXg");
	this.shape_6.setTransform(3.1,20.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPAeIAAgGQAAgHAEgGQADgFAGgFIAGgGQAEgFAAgEQAAgEgDgDQgCgCgDAAQgHAAAAAHIgHAAIAAgBQAAgFAFgEQAEgDAFAAQAGAAAEADQAFAEAAAHQAAAIgHAGIgKAJQgGAHAAAIIAYAAIAAAHg");
	this.shape_7.setTransform(16.1,12.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNATQgEgHAAgMQAAgKAEgIQAEgMAJAAQAKAAAEAMQAEAIAAAKQAAALgEAIQgFAMgJAAQgJAAgEgMgAgIgOQgCAGAAAIQAAAJACAGQADAKAFAAQAGAAADgKQACgGAAgJQAAgIgCgGQgDgKgGAAQgFAAgDAKg");
	this.shape_8.setTransform(21.2,1.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjkipIgZgJAjzhYIgaAAAh5B9IgOAWAjmgEIgYAHAgpCaIgFAZAi7BEIgUARAD0hVIAaAAADmgCIAYAHAB7B8IANAXAC7BFIAUARAArCaIAEAZ");
	this.shape_9.setTransform(0,8.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_3}]}).wait(1));

	// Line Work
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(1,1,1).p("AEyhIIlVAAIAAiUIFVAAgADpgvQAABvhPBOQhPBPhuAAQhwAAhPhPQhPhOAAhvQAAhEAeg4");
	this.shape_10.setTransform(3.6,4.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// Grey Fill
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5E5D66").s().p("AhJB9QhhgYg5hgQgcgugMgrIELgxIEMAAQgCBMgcA0QgSAggmAjQgZAagsAVQg3AZg6AAQgjAAgmgJg");
	this.shape_11.setTransform(0.1,13.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.9,-18.3,71.2,50);


(lib.RVALVEOrange = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C3C3C").s().p("AgSAeIAAg7IAjAAIAAAKIgZAAIAAAOIAXAAIAAAIIgXAAIAAAQIAaAAIAAALg");
	this.shape.setTransform(37.2,13.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C3C3C").s().p("AgEAeIgSg7IALAAIALArIAMgrIALAAIgSA7g");
	this.shape_1.setTransform(32.5,13.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAKAAIAAAwIAXAAIAAALg");
	this.shape_2.setTransform(28.7,13.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3C3C3C").s().p("AAOAeIgFgOIgRAAIgFAOIgLAAIAUg7IAJAAIAUA7gAgGAGIAMAAIgGgVg");
	this.shape_3.setTransform(23.9,13.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3C3C3C").s().p("AgEAeIgSg7IALAAIALArIAMgrIALAAIgSA7g");
	this.shape_4.setTransform(19.5,13.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3C3C3C").s().p("AAKAeIgIgNIgCgJIgEgCIgFgBIgCAAIAAAZIgKAAIAAg7IAVAAQAGAAAEACQAEABACAFQACAEAAAFQAAAIgDAEQgEACgHABIAGAFIAGAKIAGAMgAgLgDIAHAAIAHAAIAEgDIABgFIgBgFQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBAAIgGgBIgIAAg");
	this.shape_5.setTransform(13,13.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3C3C3C").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABgAjaBnIG1AAIAAjMIm1AAg");
	this.shape_6.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.GEN_pbbase01("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,47.9,24.4);


(lib.LVALVEOrange = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C3C3C").s().p("AgSAeIAAg7IAjAAIAAAKIgZAAIAAAOIAXAAIAAAIIgXAAIAAAQIAaAAIAAALg");
	this.shape.setTransform(36.8,13.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C3C3C").s().p("AgEAeIgSg7IALAAIALArIAMgrIALAAIgSA7g");
	this.shape_1.setTransform(32,13.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAKAAIAAAwIAXAAIAAALg");
	this.shape_2.setTransform(28.3,13.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3C3C3C").s().p("AAOAeIgFgOIgRAAIgFAOIgLAAIAUg7IAJAAIAUA7gAgGAGIAMAAIgGgVg");
	this.shape_3.setTransform(23.4,13.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3C3C3C").s().p("AgEAeIgSg7IALAAIALArIAMgrIALAAIgSA7g");
	this.shape_4.setTransform(19.1,13.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAKAAIAAAwIAXAAIAAALg");
	this.shape_5.setTransform(13,13.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3C3C3C").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABgAjaBnIG1AAIAAjMIm1AAg");
	this.shape_6.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.GEN_pbbase01("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,47.9,24.4);


(lib.ENGANTIICE1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C3C3C").s().p("AgRAeIAAg7IAjAAIAAALIgZAAIAAANIAXAAIAAAIIgXAAIAAAQIAZAAIAAALg");
	this.shape.setTransform(37.7,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C3C3C").s().p("AgNAYQgHgJAAgPQAAgNAHgJQAGgIAIAAQAIAAAGAGQAEAEACAIIgKADQgBgFgDgDQgDgCgEAAQgDAAgEAEQgDAFAAAKQAAALADAEQAEAFADABQAEgBADgDQADgCABgIIAKAFQgCAJgGAFQgFAFgIAAQgHAAgGgHg");
	this.shape_1.setTransform(32.8,17.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C3C3C").s().p("AgEAeIAAg7IAIAAIAAA7g");
	this.shape_2.setTransform(29.3,17.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3C3C3C").s().p("AgIAFIAAgKIARAAIAAAKg");
	this.shape_3.setTransform(27.2,18.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3C3C3C").s().p("AgDAeIAAg7IAIAAIAAA7g");
	this.shape_4.setTransform(25.1,17.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3C3C3C").s().p("AgDAeIAAgwIgPAAIAAgLIAlAAIAAALIgOAAIAAAwg");
	this.shape_5.setTransform(21.9,17.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3C3C3C").s().p("AAJAeIgSgmIAAAmIgKAAIAAg7IALAAIASAnIAAgnIAKAAIAAA7g");
	this.shape_6.setTransform(17.3,17.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3C3C3C").s().p("AANAeIgDgOIgTAAIgEAOIgKAAIATg7IAIAAIAUA7gAgFAGIALAAIgGgVg");
	this.shape_7.setTransform(12.2,17.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3C3C3C").s().p("AgKAbQgFgDgEgIQgDgHAAgJQAAgIADgIQAEgHAFgEQAFgDAGAAQAJAAAFAEQAGAFABAJIgKADQgBgFgDgDQgDgDgEABQgFAAgEAEQgEAGAAAJQAAAKAFAGQADAEAFAAIAGgBQADgBADgCIAAgJIgMAAIAAgHIAWAAIAAAWQgEADgGADQgGADgGAAQgFAAgGgEg");
	this.shape_8.setTransform(29.7,8.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3C3C3C").s().p("AAJAeIgSgmIAAAmIgKAAIAAg7IALAAIASAnIAAgnIAKAAIAAA7g");
	this.shape_9.setTransform(24.5,8.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3C3C3C").s().p("AgRAeIAAg7IAjAAIAAALIgZAAIAAANIAXAAIAAAIIgXAAIAAAQIAaAAIAAALg");
	this.shape_10.setTransform(19.7,8.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3C3C3C").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABgAjaBnIG1AAIAAjMIm1AAg");
	this.shape_11.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.GEN_pbbase01("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,47.9,24.4);


(lib.COWLVALVE2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C3C3C").s().p("AgSAeIAAg7IAjAAIAAALIgZAAIAAANIAXAAIAAAIIgXAAIAAAQIAbAAIAAALg");
	this.shape.setTransform(33.7,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C3C3C").s().p("AgEAeIgSg7IALAAIALArIAMgrIALAAIgSA7g");
	this.shape_1.setTransform(29,17.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAKAAIAAAwIAXAAIAAALg");
	this.shape_2.setTransform(25.2,17.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3C3C3C").s().p("AAOAeIgFgOIgRAAIgFAOIgLAAIAUg7IAJAAIAUA7gAgGAGIAMAAIgGgVg");
	this.shape_3.setTransform(20.4,17.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3C3C3C").s().p("AgEAeIgSg7IALAAIALArIAMgrIALAAIgSA7g");
	this.shape_4.setTransform(16,17.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAKAAIAAAwIAXAAIAAALg");
	this.shape_5.setTransform(33.6,8.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3C3C3C").s().p("AAKAeIgKgsIgIAsIgLAAIgMg7IAKAAIAIAoIAJgoIAKAAIAJAoIAHgoIAKAAIgMA7g");
	this.shape_6.setTransform(27.9,8.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3C3C3C").s().p("AgQAYQgHgJAAgPQAAgJAEgHQADgHAFgEQAFgDAGAAQAKAAAHAJQAHAHAAAOQAAAPgHAJQgHAHgKAAQgJAAgHgHgAgIgPQgEAGAAAJQAAAKAEAGQAEAEAEAAQAFAAAEgEQAEgGAAgKQAAgJgEgGQgDgEgGAAQgFAAgDAEg");
	this.shape_7.setTransform(22,8.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3C3C3C").s().p("AgNAYQgHgJAAgPQAAgNAHgJQAGgIAIAAQAIAAAGAGQAEAEACAIIgKADQgBgFgDgDQgDgCgEAAQgDAAgEAEQgDAFAAAKQAAALADAFQAEAEADAAQAEAAADgDQADgCABgIIAKAEQgCALgGAEQgFAFgIAAQgHAAgGgHg");
	this.shape_8.setTransform(16.7,8.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3C3C3C").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABgAjaBnIG1AAIAAjMIm1AAg");
	this.shape_9.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.GEN_pbbase01("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,47.9,24.4);


(lib.COWLVALVE1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C3C3C").s().p("AgSAeIAAg7IAjAAIAAALIgZAAIAAANIAXAAIAAAIIgXAAIAAAQIAbAAIAAALg");
	this.shape.setTransform(33.7,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C3C3C").s().p("AgEAeIgSg7IALAAIALArIAMgrIALAAIgSA7g");
	this.shape_1.setTransform(29,17.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAKAAIAAAwIAXAAIAAALg");
	this.shape_2.setTransform(25.2,17.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3C3C3C").s().p("AAOAeIgFgOIgRAAIgFAOIgLAAIAUg7IAJAAIAUA7gAgGAGIAMAAIgGgVg");
	this.shape_3.setTransform(20.4,17.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3C3C3C").s().p("AgEAeIgSg7IALAAIALArIAMgrIALAAIgSA7g");
	this.shape_4.setTransform(16,17.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAKAAIAAAwIAXAAIAAALg");
	this.shape_5.setTransform(33.6,8.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3C3C3C").s().p("AAKAeIgKgsIgIAsIgLAAIgMg7IAKAAIAIAoIAJgoIAKAAIAJAoIAHgoIAKAAIgMA7g");
	this.shape_6.setTransform(27.9,8.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3C3C3C").s().p("AgQAYQgHgJAAgPQAAgJAEgHQADgHAFgEQAFgDAGAAQAKAAAHAJQAHAHAAAOQAAAPgHAJQgHAHgKAAQgJAAgHgHgAgIgPQgEAGAAAJQAAAKAEAGQAEAEAEAAQAFAAAEgEQAEgGAAgKQAAgJgEgGQgDgEgGAAQgFAAgDAEg");
	this.shape_7.setTransform(22,8.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3C3C3C").s().p("AgNAYQgHgJAAgPQAAgNAHgJQAGgIAIAAQAIAAAGAGQAEAEACAIIgKADQgBgFgDgDQgDgCgEAAQgDAAgEAEQgDAFAAAKQAAALADAFQAEAEADAAQAEAAADgDQADgCABgIIAKAEQgCALgGAEQgFAFgIAAQgHAAgGgHg");
	this.shape_8.setTransform(16.7,8.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3C3C3C").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABgAjaBnIG1AAIAAjMIm1AAg");
	this.shape_9.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.GEN_pbbase01("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,47.9,24.4);


(lib.ANTIICE_cowlantiice2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C3C3C").s().p("AgRAeIAAg7IAjAAIAAALIgZAAIAAANIAXAAIAAAIIgXAAIAAAQIAZAAIAAALg");
	this.shape.setTransform(37.7,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C3C3C").s().p("AgNAYQgHgJAAgPQAAgNAHgJQAGgIAIAAQAIAAAGAGQAEAEACAIIgKADQgBgFgDgDQgDgCgEAAQgDAAgEAEQgDAFAAAKQAAALADAEQAEAFADABQAEgBADgDQADgCABgIIAKAFQgCAJgGAFQgFAFgIAAQgHAAgGgHg");
	this.shape_1.setTransform(32.8,17.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C3C3C").s().p("AgEAeIAAg7IAIAAIAAA7g");
	this.shape_2.setTransform(29.3,17.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3C3C3C").s().p("AgIAFIAAgKIARAAIAAAKg");
	this.shape_3.setTransform(27.2,18.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3C3C3C").s().p("AgDAeIAAg7IAIAAIAAA7g");
	this.shape_4.setTransform(25.1,17.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3C3C3C").s().p("AgDAeIAAgwIgPAAIAAgLIAlAAIAAALIgOAAIAAAwg");
	this.shape_5.setTransform(21.9,17.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3C3C3C").s().p("AAJAeIgSgmIAAAmIgKAAIAAg7IALAAIASAnIAAgnIAKAAIAAA7g");
	this.shape_6.setTransform(17.3,17.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3C3C3C").s().p("AANAeIgDgOIgTAAIgEAOIgKAAIATg7IAIAAIAUA7gAgFAGIALAAIgGgVg");
	this.shape_7.setTransform(12.2,17.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAKAAIAAAwIAXAAIAAALg");
	this.shape_8.setTransform(33.6,8.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3C3C3C").s().p("AAKAeIgKgsIgIAsIgLAAIgMg7IAKAAIAIAoIAJgoIAKAAIAJAoIAHgoIAKAAIgMA7g");
	this.shape_9.setTransform(27.9,8.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3C3C3C").s().p("AgQAYQgHgJAAgPQAAgJAEgHQADgHAFgEQAFgDAGAAQAKAAAHAJQAHAHAAAOQAAAPgHAJQgHAHgKAAQgJAAgHgHgAgIgPQgEAGAAAJQAAAKAEAGQAEAEAEAAQAFAAAEgEQAEgGAAgKQAAgJgEgGQgDgEgGAAQgFAAgDAEg");
	this.shape_10.setTransform(22,8.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3C3C3C").s().p("AgNAYQgHgJAAgPQAAgNAHgJQAGgIAIAAQAIAAAGAGQAEAEACAIIgKADQgBgFgDgDQgDgCgEAAQgDAAgEAEQgDAFAAAKQAAALADAFQAEAEADAAQAEAAADgDQADgCABgIIAKAEQgCALgGAEQgFAFgIAAQgHAAgGgHg");
	this.shape_11.setTransform(16.7,8.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3C3C3C").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABgAjaBnIG1AAIAAjMIm1AAg");
	this.shape_12.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.GEN_pbbase01("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,47.9,24.4);


(lib.ANTIICE_cowlantiice1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C3C3C").s().p("AgRAeIAAg7IAjAAIAAALIgZAAIAAANIAXAAIAAAIIgXAAIAAAQIAZAAIAAALg");
	this.shape.setTransform(37.7,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C3C3C").s().p("AgNAYQgHgJAAgPQAAgNAHgJQAGgIAIAAQAIAAAGAGQAEAEACAIIgKADQgBgFgDgDQgDgCgEAAQgDAAgEAEQgDAFAAAKQAAALADAEQAEAFADABQAEgBADgDQADgCABgIIAKAFQgCAJgGAFQgFAFgIAAQgHAAgGgHg");
	this.shape_1.setTransform(32.8,17.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C3C3C").s().p("AgEAeIAAg7IAIAAIAAA7g");
	this.shape_2.setTransform(29.3,17.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3C3C3C").s().p("AgIAFIAAgKIARAAIAAAKg");
	this.shape_3.setTransform(27.2,18.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3C3C3C").s().p("AgDAeIAAg7IAIAAIAAA7g");
	this.shape_4.setTransform(25.1,17.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3C3C3C").s().p("AgDAeIAAgwIgPAAIAAgLIAlAAIAAALIgOAAIAAAwg");
	this.shape_5.setTransform(21.9,17.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3C3C3C").s().p("AAJAeIgSgmIAAAmIgKAAIAAg7IALAAIASAnIAAgnIAKAAIAAA7g");
	this.shape_6.setTransform(17.3,17.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3C3C3C").s().p("AANAeIgDgOIgTAAIgEAOIgKAAIATg7IAIAAIAUA7gAgFAGIALAAIgGgVg");
	this.shape_7.setTransform(12.2,17.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAKAAIAAAwIAXAAIAAALg");
	this.shape_8.setTransform(33.6,8.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3C3C3C").s().p("AAKAeIgKgsIgIAsIgLAAIgMg7IAKAAIAIAoIAJgoIAKAAIAJAoIAHgoIAKAAIgMA7g");
	this.shape_9.setTransform(27.9,8.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3C3C3C").s().p("AgQAYQgHgJAAgPQAAgJAEgHQADgHAFgEQAFgDAGAAQAKAAAHAJQAHAHAAAOQAAAPgHAJQgHAHgKAAQgJAAgHgHgAgIgPQgEAGAAAJQAAAKAEAGQAEAEAEAAQAFAAAEgEQAEgGAAgKQAAgJgEgGQgDgEgGAAQgFAAgDAEg");
	this.shape_10.setTransform(22,8.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3C3C3C").s().p("AgNAYQgHgJAAgPQAAgNAHgJQAGgIAIAAQAIAAAGAGQAEAEACAIIgKADQgBgFgDgDQgDgCgEAAQgDAAgEAEQgDAFAAAKQAAALADAFQAEAEADAAQAEAAADgDQADgCABgIIAKAEQgCALgGAEQgFAFgIAAQgHAAgGgHg");
	this.shape_11.setTransform(16.7,8.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3C3C3C").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABgAjaBnIG1AAIAAjMIm1AAg");
	this.shape_12.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.GEN_pbbase01("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,47.9,24.4);


(lib.ANITICE_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.instance = new lib.GEN_screw02("synched",0);
	this.instance.setTransform(261.8,242.9,1,1,0,0,0,10,10);

	this.instance_1 = new lib.GEN_screw02("synched",0);
	this.instance_1.setTransform(44.8,285.7,1,1,0,0,0,10,10);

	this.instance_2 = new lib.GEN_screw03("synched",0);
	this.instance_2.setTransform(265.6,142.3,1,1,0,0,0,1.8,-1.8);

	this.instance_3 = new lib.GEN_screw03("synched",0);
	this.instance_3.setTransform(26.8,142.3,1,1,0,0,0,1.8,-1.8);

	this.instance_4 = new lib.GEN_screw01("synched",0);
	this.instance_4.setTransform(278.2,160.3,1,1,0,0,0,10,10);

	this.instance_5 = new lib.GEN_screw01("synched",0);
	this.instance_5.setTransform(10.7,160.3,1,1,0,0,0,10,10);

	this.instance_6 = new lib.GEN_screw01("synched",0);
	this.instance_6.setTransform(278.2,274.2,1,1,0,0,0,10,10);

	this.instance_7 = new lib.GEN_screw01("synched",0);
	this.instance_7.setTransform(10.7,274.2,1,1,0,0,0,10,10);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,2,1).p("AAAllIAALL");
	this.shape.setTransform(145.4,256.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#7E8D9A","#4E616D"],[0,1],-1.1,-3.8,1.2,3.9).s().p("AyYGSQgMABgHgEQgMgFgFgMQgDgGAAgLIAArDIAAgWQAAgKADgIQAFgLAMgFQAHgEAMABMAkzAAAQAIAAAJADQALAEAGAMQADAJAAAJIAAAZIAALAQAAAJgDAIQgGANgLAEQgHADgKAAgAyrlsIAALYQAAASATAAMAkxAAAQATAAAAgSIAArYQAAgRgTgBMgkxAAAQgTACAAAQg");
	this.shape_1.setTransform(144.7,257.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6C7B8A").s().p("AyYF+QgTAAAAgSIAArYQAAgQATgCMAkxAAAQATABAAARIAALYQAAASgTAAgAAGFbIAArMg");
	this.shape_2.setTransform(144.7,257.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#657381").s().p("A2iNEIAA6HMAtFAAAIAAaHgAynAIQgNAFgEAMQgDAHAAAKIAAAWIAALGQAAAKADAHQAEALANAFQAHAEALAAMAkzAAAQALgBAGgDQAMgEAFgMQADgIAAgJIAArDIAAgZQAAgJgDgIQgFgMgMgFQgIgDgJAAMgkzAAAQgLAAgHADg");
	this.shape_3.setTransform(144.4,217.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,133.4,288.7,167.4);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33C300").s().p("AgKAdIAAgGIAIAAIAAgtIgIAAIAAgGIAVAAIAAAGIgIAAIAAAtIAIAAIAAAGg");
	this.shape.setTransform(30.1,17.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33C300").s().p("AAPAdIgFgQIgTAAIgGAQIgGAAIAUg5IAFAAIASA5gAgHAHIAPAAIgIgZg");
	this.shape_1.setTransform(25.9,17.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#33C300").s().p("AgCAdIAAgzIgRAAIAAgGIAnAAIAAAGIgRAAIAAAzg");
	this.shape_2.setTransform(21.8,17.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#33C300").s().p("AgKAdIAAgGIAIAAIAAgtIgIAAIAAgGIAVAAIAAAGIgIAAIAAAtIAIAAIAAAGg");
	this.shape_3.setTransform(109.5,17.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#33C300").s().p("AAPAdIgFgQIgTAAIgGAQIgGAAIAUg5IAFAAIASA5gAgHAHIAPAAIgIgZg");
	this.shape_4.setTransform(105.4,17.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#33C300").s().p("AgCAdIAAgzIgRAAIAAgGIAnAAIAAAGIgRAAIAAAzg");
	this.shape_5.setTransform(101.2,17.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaAlQgHgQAAgVQAAgUAHgQQAJgVARAAQASAAAJAVQAHAQAAAUQAAAVgHAQQgJAVgSAAQgRAAgJgVgAgRgcQgDANAAAPQAAAQADANQAGASALAAQAMAAAGgSQAEgNAAgQQAAgPgEgNQgGgSgMAAQgLAAgGASg");
	this.shape_6.setTransform(142,21.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTAzQgIgGgBgLIAMAAQABALAPAAQAHAAAFgHQAEgHAAgKQAAgQgMgFQgGgBgTAAIAAg3IAuAAIAAANIgjAAIAAAdQARAAAKAIQAMAGAAAUQAAAPgIAKQgIAMgNAAQgLAAgIgGg");
	this.shape_7.setTransform(134.1,21.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgWAxQgJgJAAgPQAAgVASgIQgOgJAAgQQAAgNAIgHQAIgIALAAQAMAAAIAIQAIAIAAAMQAAAJgDAFQgDAFgIAGQASAIAAAVQAAAPgJAJQgJAJgOAAQgNAAgJgJgAgNAIQgFAHAAAJQAAAJAFAHQAGAHAHAAQAJAAAFgHQAGgHAAgJQAAgJgGgHQgGgIgIAAQgHAAgGAIgAgKgpQgEAGAAAHQAAAIAEAFQAEAFAGAAQAHAAAEgFQAFgFAAgIQAAgHgFgGQgEgFgHAAQgGAAgEAFg");
	this.shape_8.setTransform(126.1,21.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHAJIAAgRIAOAAIAAARg");
	this.shape_9.setTransform(138,27.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#33C300").s().p("AgUApIAAgJQAAgKAFgHQAEgHAHgHIAKgJQAEgGAAgFQABgGgEgDQgEgDgDAAQgKAAAAAJIgIAAIAAgBQAAgIAFgEQAHgFAGABQAIAAAGAEQAGAGAAAJQAAAKgJAJIgNAMQgJAJAAALIAgAAIAAAKg");
	this.shape_10.setTransform(140.4,7.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#33C300").s().p("AgNAkQgHgEAAgIIAJAAQAAAIALAAQAEAAAFgFQACgFAAgHQABgMgKgDQgDAAgOAAIAAgoIAhAAIAAAJIgZAAIAAAWQAMgBAHAGQAIAEAAAOQAAAKgFAIQgGAJgJAAQgIgBgFgEg");
	this.shape_11.setTransform(134.4,8.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#33C300").s().p("AgOAmQgFgEgBgIIAJAAQAAAEADACQACABADAAQAJAAAEgMQAEgJAAgMIAAAAQgIAJgIAAQgJAAgGgJQgEgFAAgKQAAgKAFgHQAGgJAJAAQAMAAAGAPQAFALAAAPQAAAPgFALQgHAQgMAAQgHAAgFgEgAgKgaQgCAFAAAHQAAAGACAFQAEADAGAAQAEAAAEgEQADgEAAgHQAAgHgDgFQgEgFgFAAQgFAAgEAGg");
	this.shape_12.setTransform(128.7,8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#33C300").s().p("AgFAGIAAgLIAKAAIAAALg");
	this.shape_13.setTransform(137,12.4);

	this.instance = new lib.B787EICAS_Gauge_N1Left("synched",0);
	this.instance.setTransform(113.1,31.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgaAlQgHgQAAgVQAAgUAHgQQAJgVARAAQASAAAJAVQAHAQAAAUQAAAVgHAQQgJAVgSAAQgRAAgJgVgAgRgcQgDANAAAPQAAAQADANQAGASALAAQAMAAAGgSQAEgNAAgQQAAgPgEgNQgGgSgMAAQgLAAgGASg");
	this.shape_14.setTransform(63.2,21.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgTAzQgIgGgBgLIAMAAQABALAPAAQAHAAAFgHQAEgHAAgKQAAgQgMgFQgGgBgTAAIAAg3IAuAAIAAANIgjAAIAAAdQARAAAKAIQAMAGAAAUQAAAPgIAKQgIAMgNAAQgLAAgIgGg");
	this.shape_15.setTransform(55.4,21.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgWAxQgJgJAAgPQAAgVASgIQgOgJAAgQQAAgNAIgHQAIgIALAAQAMAAAIAIQAIAIAAAMQAAAJgDAFQgDAFgIAGQASAIAAAVQAAAPgJAJQgJAJgOAAQgNAAgJgJgAgNAIQgFAHAAAJQAAAJAFAHQAGAHAHAAQAJAAAFgHQAGgHAAgJQAAgJgGgHQgGgIgIAAQgHAAgGAIgAgKgpQgEAGAAAHQAAAIAEAFQAEAFAGAAQAHAAAEgFQAFgFAAgIQAAgHgFgGQgEgFgHAAQgGAAgEAFg");
	this.shape_16.setTransform(47.4,21.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgHAJIAAgRIAOAAIAAARg");
	this.shape_17.setTransform(59.3,27.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00CCFF").s().p("AADAdIAAgGIAAAGIgFAAIAAgGIAFAAIgFAAIAAgsIgKAFIAAgHIALgFIAEAAIAAAzIAKAAIAAAGgAgMAdIAAgGIAKAAIAAAGg");
	this.shape_18.setTransform(76.8,59.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00CCFF").s().p("AAMAdIgXgsIAAAsIgGAAIAAg5IAGAAIAXAsIAAgEIAAgoIAGAAIAAA5g");
	this.shape_19.setTransform(72.3,56.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#33C300").s().p("AgUApIAAgJQAAgKAFgHQAEgHAHgHIAKgJQAEgGAAgFQABgGgEgDQgEgDgDAAQgKAAAAAJIgIAAIAAgBQAAgIAFgEQAHgFAGABQAIAAAGAEQAGAGAAAJQAAAKgJAJIgNAMQgJAJAAALIAgAAIAAAKg");
	this.shape_20.setTransform(61.7,7.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#33C300").s().p("AgNAkQgHgEAAgIIAJAAQAAAIALAAQAEAAAFgFQACgFAAgHQABgMgKgDQgDAAgOAAIAAgoIAhAAIAAAJIgZAAIAAAWQAMgBAHAGQAIAEAAAOQAAAKgFAIQgGAJgJAAQgIgBgFgEg");
	this.shape_21.setTransform(55.6,8.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#33C300").s().p("AgOAmQgFgEgBgIIAJAAQAAAEADACQACABAEAAQAIAAAEgMQAEgJgBgMIAAAAQgHAJgIAAQgJAAgGgJQgEgFAAgKQAAgKAFgHQAGgJAJAAQAMAAAGAPQAFALAAAPQAAAPgFALQgHAQgMAAQgHAAgFgEgAgKgaQgCAFAAAHQAAAGACAFQAEADAGAAQAEAAAEgEQADgEAAgHQAAgHgDgFQgEgFgFAAQgFAAgEAGg");
	this.shape_22.setTransform(49.9,8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#33C300").s().p("AgFAGIAAgLIAKAAIAAALg");
	this.shape_23.setTransform(58.2,12.4);

	this.instance_1 = new lib.B787EICAS_Gauge_N1Left("synched",0);
	this.instance_1.setTransform(34.4,31.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.instance},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.6,0,150,66.1);


(lib.graph = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1("synched",0);
	this.instance.setTransform(-3.6,-5.5,1,1,0,0,0,73.5,33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AsmFhIAArBIZNAAIAALBg");
	this.shape.setTransform(0,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.7,-38.5,161.5,72.6);


(lib.ANTIICEPanel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// buttons and switches
	this.instance = new lib.GEN_switch01down("synched",0);
	this.instance.setTransform(-159.4,224.6,1.1,1.103,0,0,180,6.6,0);

	this.instance_1 = new lib.GEN_switch01down("synched",0);
	this.instance_1.setTransform(-218.2,224.6,1.1,1.103,0,0,180,6.6,0);

	this.instance_2 = new lib.GEN_switch01down("synched",0);
	this.instance_2.setTransform(-315.9,210.8,1.1,1.103,0,0,180,6.6,0);

	this.instance_3 = new lib.COWLVALVE2("synched",0);
	this.instance_3.setTransform(-159.6,155.1,1.104,1.096,0,0,0,24.9,13.2);

	this.instance_4 = new lib.COWLVALVE1("synched",0);
	this.instance_4.setTransform(-218.6,155.1,1.104,1.096,0,0,0,24.9,13.2);

	this.instance_5 = new lib.LVALVEOrange("synched",0);
	this.instance_5.setTransform(-347.3,155.1,1.104,1.096,0,0,0,24.9,13.2);

	this.instance_6 = new lib.RVALVEOrange("synched",0);
	this.instance_6.setTransform(-288.2,155.1,1.104,1.096,0,0,0,24.9,13.2);

	this.instance_7 = new lib.ENGANTIICE1("synched",0);
	this.instance_7.setTransform(-159.6,100.4,1.104,1.096,0,0,0,24.9,13.2);

	this.instance_8 = new lib.ENGANTIICE1("synched",0);
	this.instance_8.setTransform(-218.6,100.4,1.104,1.096,0,0,0,24.9,13.2);

	this.instance_9 = new lib.ANTIICE_cowlantiice2("synched",0);
	this.instance_9.setTransform(-159.6,127.8,1.104,1.096,0,0,0,24.9,13.2);

	this.instance_10 = new lib.ANTIICE_cowlantiice1("synched",0);
	this.instance_10.setTransform(-218.6,127.8,1.104,1.096,0,0,0,24.9,13.2);

	this.instance_11 = new lib.GEN_switchbase01b("synched",0);
	this.instance_11.setTransform(-159.5,226.6,1.104,1.096,0,0,0,18.5,18.5);

	this.instance_12 = new lib.GEN_switchbase01b("synched",0);
	this.instance_12.setTransform(-218,226.6,1.104,1.096,0,0,0,18.5,18.5);

	this.instance_13 = new lib.GEN_switchbase01b("synched",0);
	this.instance_13.setTransform(-315.7,211.9,1.104,1.096,0,0,0,18.5,18.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRAqQgFgBgBgFIAAgDQAAgKAFgKQAFgIANgIIAGgIQAFgGAAgCQAAgFgDgDQgEgDgFAAQgIAAgBAIQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAAAABIgFAAQgEAAAAgDIAAgBQAAgIAGgGQAGgEAJAAQAKAAAGAFQAHAGAAAKQAAAKgJAIIgRANQgIAHAAANIAgAAQADAAAAAGIAAADIgDACg");
	this.shape.setTransform(-159.1,250.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAAmIAAhDIgIAAQgDgBAAgFQAAgFAEgBIAOAAIADABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAAAIAABMIgCACIgEABQgGAAAAgEg");
	this.shape_1.setTransform(-218.3,250.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AglA6IAAhyIBEAAQAGABABAGQgBAJgGAAIgzAAIAAAYIAqAAQAAAAABAAQAAAAABABQAAAAABAAQABAAAAABQACACAAADQAAAEgCADQAAAAgBABQgBAAAAAAQgBAAAAABQgBAAAAgBIgqAAIAAAqIAzAAQAGABABAIQgBAIgGAAg");
	this.shape_2.setTransform(-162,196.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeAmQgJgPAAgXQAAgUAIgQQAFgIALgHQAKgFAIAAQASgBAJAJQAGAEAAACIACADQACAHgGACQgGADgEgEQgHgLgMABQgPABgIAOQgFALAAAPQAAATAEAGQAKARAOAAQAHAAAGgDQAFgEACgGQABgEADgBQADAAADABQAEABABADQABADgCACQgCAKgJAGQgHAHgSABQgVgBgMgTg");
	this.shape_3.setTransform(-171.9,196.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEA4QgCgCAAgDIAAhlQAAgEACgBQACgCACABQAIgBAAAHIAABmQgBADgDACIgEABQgCgBgCgBg");
	this.shape_4.setTransform(-178.4,196.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAdAHIg8AAQAAAAgBAAQgBgBAAAAQgBAAAAgBQAAAAAAgBIgBgEIABgEQACgCADAAIA7AAQADAAACADIABADQAAADgBACQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgCAAg");
	this.shape_5.setTransform(-185,196.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgEA4QgCgCgBgDIAAhlQABgEACgBQACgCACABQAIgBAAAHIAABmQgBADgDACIgEABQgCgBgCgBg");
	this.shape_6.setTransform(-191.3,196.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgGAzIAAhcIgZAAQgEAAgCgDQgBgCgBgDQABgGAGgBIBAAAQAHABAAAGQABAHgIABIgZAAIAABcIgCAFQgCABgDAAQgGAAAAgGg");
	this.shape_7.setTransform(-197.9,196.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AglA1IAAhnQAAgCACgDQABAAAAgBQAAAAABAAQAAAAABAAQABAAAAAAQAHgBADAFIAsBRIAAhQQABgFAGAAQAIAAAAAGIAABlQAAAGgHAAQgEACgEgEIgthRIAABPQgBAEgHABQgHAAAAgFg");
	this.shape_8.setTransform(-207.4,196.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAaA0IgEgMIgrAAIgFAMQgBAGgJgBIgFgCQgCgCABgEIAmhkQACgGADAAQAGAAADAGIAhBmQAAAGgIAAIgCABQgFAAgCgGgAgQAZIAAgBIAjAAIgSg2IgRA2IAAAAg");
	this.shape_9.setTransform(-217.1,196.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgfAlQgJgOAAgXQAAgUAJgPQAEgJAMgIQAJgEAIAAQASAAAJAGQAGAHABABIACADQACAHgHADQgGACgEgFQgHgKgMAAQgOABgJAQQgEAKAAAPQAAASAEAIQAKAQANAAQAHAAAHgEQADgCADgGIAAgUIgWAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIgBgGQAAgCABgBQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIAgAAQABABABAAQAAAAABAAQAAABABAAQAAAAAAABQACABAAACIAAAeQABADgFAGQgDAFgFAEQgIAHgSAAQgVABgMgVg");
	this.shape_10.setTransform(-179.8,182.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AglA1IAAhnQAAgCACgDQABAAAAgBQAAAAABAAQAAAAABAAQABAAAAAAQAHgBADAFIAsBRIAAhQQABgFAGAAQAIAAAAAGIAABlQAAAGgHAAQgEACgEgEIgthRIAABPQgBAEgHABQgHAAAAgFg");
	this.shape_11.setTransform(-189.7,182.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgkA5IAAhxIBCAAQAIABgBAGQABAJgIgBIgyAAIAAAZIApAAQABAAABAAQAAAAABABQAAAAABAAQAAABABAAQABADABADQgBADgBADQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIgpAAIAAApIAyAAQAIABgBAIQABAIgIgBg");
	this.shape_12.setTransform(-199.5,182.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgbAnIAAhLQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAIADgBQAFgBACAEIAgA7IAAg6QABgEAEAAQAGAAAAAEIAABLQAAAEgFAAQgDABgDgDIghg7IAAA6QgBACgEABQgGAAAAgDg");
	this.shape_13.setTransform(-184.9,242.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgWAaQgGgKAAgQQAAgPAGgLQAHgPAPAAQAQAAAHAPQAGAMAAAOQAAAOgGAMQgHAQgQAAQgPAAgHgQgAgNgTQgDAJAAAKQAAAKADAJQAFALAIAAQAJAAAFgLQADgHAAgMQAAgLgDgHQgFgMgJAAQgJAAgEALg");
	this.shape_14.setTransform(-192,243);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgaAmIAAhPIAxAAQAEABAAAEQAAAHgEAAIgmAAIAAASIAeAAQADAAAAAFQAAAFgDABIgeAAIAAAmQAAAEgGAAQgFgBAAgDg");
	this.shape_15.setTransform(-180.9,215.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgbAmIAAhPIAyAAQAEABAAAEQAAAHgEAAIgmAAIAAASIAeAAQADAAAAAFQAAAFgDABIgeAAIAAAmQABAEgHAAQgFgBgBgDg");
	this.shape_16.setTransform(-187.9,215.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgWAaQgGgKAAgQQAAgPAGgLQAHgPAPAAQARAAAGAPQAGAMAAAOQAAAOgFAMQgIAQgQAAQgPAAgHgQgAgNgTQgDAJAAAKQAAAKADAJQAFALAIAAQAKAAAEgLQACgHABgMQgBgLgCgHQgEgMgKAAQgIAAgFALg");
	this.shape_17.setTransform(-194.9,215.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgkA5IAAhxIBCAAQAIABgBAGQABAJgIgBIgyAAIAAAZIApAAQABAAABAAQAAAAABABQAAAAABAAQAAABABAAQACADgBADQABADgCADQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIgpAAIAAApIAyAAQAIABgBAIQABAIgIgBg");
	this.shape_18.setTransform(-268.6,182.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgeAlQgJgOAAgXQAAgUAIgPQAFgKALgGQAKgGAIABQASAAAJAHQAGAGAAABIACACQACAIgGACQgGADgEgEQgHgLgMABQgPABgIAPQgFAKAAAPQAAASAEAIQAKAQAOAAQAHAAAGgEQAFgDACgHQABgDADgBQADgBADACQAEABABACQABADgCAEQgCAJgJAGQgHAHgSAAQgVABgMgVg");
	this.shape_19.setTransform(-278.5,182.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgEA4QgCgBgBgDIAAhnQABgDACgBQACgBACAAQAHAAAAAFIAABoQAAADgDABIgEAAQgCAAgCgBg");
	this.shape_20.setTransform(-285,182.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAdAHIg8AAQAAAAgBAAQgBgBAAAAQgBAAAAgBQAAAAgBgBIAAgEIABgEQACgCADAAIA7AAQADAAACADIABADQAAADgBACQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgCAAg");
	this.shape_21.setTransform(-291.6,183);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgEA4QgCgBgBgDIAAhnQABgDACgBQABgBADAAQAIAAAAAFIAABoQgBADgDABIgEAAQgDAAgBgBg");
	this.shape_22.setTransform(-297.9,182.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgGAzIAAhcIgaAAQgDAAgCgDQgBgCAAgDQgBgGAHgBIBAAAQAIABAAAGQgBAHgGABIgaAAIAABcIgCAFQgCABgDAAQgGAAAAgGg");
	this.shape_23.setTransform(-304.5,182.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AglA1IAAhnQAAgCACgDQABAAAAgBQAAAAABAAQAAAAABAAQABAAAAAAQAHgBADAFIAsBRIAAhQQABgFAGAAQAIAAAAAGIAABlQAAAGgHAAQgEACgEgEIgthRIAABPQgBAEgHABQgHAAAAgFg");
	this.shape_24.setTransform(-314,182.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAaA0IgEgMIgrAAIgFAMQgBAGgJgBIgFgCQgCgCABgEIAmhkQACgGADAAQAGAAADAGIAhBmQAAAGgIAAIgCABQgFAAgCgGgAgQAZIAAgBIAjAAIgSg2IgRA2IAAAAg");
	this.shape_25.setTransform(-323.7,182.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgeAlQgJgOAAgXQgBgUAJgPQAEgJAMgIQAKgEAIAAQARAAAKAGQAFAHAAABIACADQADAHgHADQgFACgFgFQgHgKgLAAQgPABgJAQQgFAKAAAPQAAASAFAIQAJAQAOAAQAIAAAFgEQAEgCADgGIAAgUIgVAAQgDAAAAgCIgBgGQABgCAAgBQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBABAAIAfAAQABABABAAQAAAAABAAQAAABABAAQAAAAABABQACABAAACIAAAeQgBADgEAGQgDAFgGAEQgGAHgSAAQgVABgMgVg");
	this.shape_26.setTransform(-337.7,182.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AglA1IAAhnQAAgCACgDQABAAAAgBQAAAAABAAQAAAAABAAQABAAAAAAQAHgBADAFIAsBRIAAhQQABgFAGAAQAIAAAAAGIAABlQAAAGgHAAQgEACgEgEIgthRIAABPQgBAEgHABQgHAAAAgFg");
	this.shape_27.setTransform(-347.6,182.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgEA4QgCgBgBgDIAAhnQABgDACgBQABgBADAAQAHAAAAAFIAABoQAAADgDABIgEAAQgDAAgBgBg");
	this.shape_28.setTransform(-354.5,182.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAVA4QgCgBgCgDIgRhLIgTBLQgBAFgHAAQgFAAgDgFIgehjQgCgGAGgCQAIgDADAGIAXBTIAUhNQABgGAGAAQAGAAABAGIASBNIAZhUQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBABAAQADgBAEABQAIADgDAFIggBkQgCAFgGAAIgBAAIgDgBg");
	this.shape_29.setTransform(-363.5,182.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgbAnIAAhLQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAIADgBQAFgBACAEIAgA7IAAg6QABgEAEAAQAGAAAAAEIAABLQAAAEgFAAQgDABgDgDIghg7IAAA6QgBACgEABQgGAAAAgDg");
	this.shape_30.setTransform(-284.6,226.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgWAaQgGgKAAgQQAAgPAGgLQAIgPAOAAQAQAAAHAPQAGAMAAAOQAAAOgGAMQgHAQgQAAQgOAAgIgQgAgNgTQgDAJAAAKQAAAKADAJQAFALAIAAQAJAAAFgLQACgHAAgMQAAgLgCgHQgFgMgJAAQgIAAgFALg");
	this.shape_31.setTransform(-291.6,226.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgaAmIAAhPIAwAAQAGABAAAEQAAAHgGAAIglAAIAAARIAdAAQAFABAAAFQAAAFgFABIgdAAIAAAmQAAAEgGAAQgGgBABgDg");
	this.shape_32.setTransform(-280.5,198.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgaAmIAAhPIAxAAQAEABAAAEQAAAHgEAAIgmAAIAAARIAeAAQADABAAAFQAAAFgDABIgeAAIAAAmQAAAEgGAAQgFgBAAgDg");
	this.shape_33.setTransform(-287.5,198.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgWAaQgGgKAAgQQAAgPAGgLQAHgPAPAAQAQAAAHAPQAGAMAAAOQAAAOgGAMQgHAQgQAAQgPAAgHgQgAgNgTQgDAJAAAKQAAAKADAJQAFALAIAAQAJAAAFgLQADgHAAgMQAAgLgDgHQgFgMgJAAQgJAAgEALg");
	this.shape_34.setTransform(-294.6,198.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance_14 = new lib.ANITICE_base("synched",0);
	this.instance_14.setTransform(-255.6,96.8,1.104,1.096,0,0,0,144.3,150.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// fill
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#657381").s().p("A44OUIAA8nMAxxAAAIAAcng");
	this.shape_35.setTransform(-255.6,169.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-414.9,78.3,318.8,183.4);


// stage content:
(lib.dif04ep13 = function(mode,startPosition,loop) {
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
	this.frame_388 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(388).call(this.frame_388).wait(1));

	// prot
	this.prot = new lib.prot();
	this.prot.setTransform(500,275,1,1,0,0,0,500,275);

	this.timeline.addTween(cjs.Tween.get(this.prot).wait(389));

	// chart text
	this.instance = new lib.Symbol2copy("synched",0);
	this.instance.setTransform(457.5,340.1,1,1,0,0,0,88,12.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(264).to({_off:false},0).to({alpha:1},5).wait(120));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_250 = new cjs.Graphics().p("AgsKeIAA06IBZAAIAAU6g");
	var mask_graphics_251 = new cjs.Graphics().p("AjlKeIAA06IHLAAIAAU6g");
	var mask_graphics_252 = new cjs.Graphics().p("AmfKeIAA06IM/AAIAAU6g");
	var mask_graphics_253 = new cjs.Graphics().p("ApZKeIAA06ISzAAIAAU6g");
	var mask_graphics_254 = new cjs.Graphics().p("AsSKeIAA06IYlAAIAAU6g");
	var mask_graphics_255 = new cjs.Graphics().p("AvMKeIAA06IeZAAIAAU6g");
	var mask_graphics_256 = new cjs.Graphics().p("AyGKeIAA06MAkNAAAIAAU6g");
	var mask_graphics_257 = new cjs.Graphics().p("A1AKeIAA06MAqBAAAIAAU6g");
	var mask_graphics_258 = new cjs.Graphics().p("A35KeIAA06MAvzAAAIAAU6g");
	var mask_graphics_259 = new cjs.Graphics().p("A6zKeIAA06MA1nAAAIAAU6g");
	var mask_graphics_260 = new cjs.Graphics().p("A9tKeIAA06MA7bAAAIAAU6g");
	var mask_graphics_261 = new cjs.Graphics().p("EggmAKeIAA06MBBNAAAIAAU6g");
	var mask_graphics_262 = new cjs.Graphics().p("EgjgAKeIAA06MBHBAAAIAAU6g");
	var mask_graphics_263 = new cjs.Graphics().p("EgmaAKeIAA06MBM1AAAIAAU6g");
	var mask_graphics_264 = new cjs.Graphics().p("EgpUAKeIAA06MBSpAAAIAAU6g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(250).to({graphics:mask_graphics_250,x:283.5,y:273}).wait(1).to({graphics:mask_graphics_251,x:302.1,y:273}).wait(1).to({graphics:mask_graphics_252,x:320.7,y:273}).wait(1).to({graphics:mask_graphics_253,x:339.2,y:273}).wait(1).to({graphics:mask_graphics_254,x:357.8,y:273}).wait(1).to({graphics:mask_graphics_255,x:376.4,y:273}).wait(1).to({graphics:mask_graphics_256,x:394.9,y:273}).wait(1).to({graphics:mask_graphics_257,x:413.5,y:273}).wait(1).to({graphics:mask_graphics_258,x:432.1,y:273}).wait(1).to({graphics:mask_graphics_259,x:450.7,y:273}).wait(1).to({graphics:mask_graphics_260,x:469.2,y:273}).wait(1).to({graphics:mask_graphics_261,x:487.8,y:273}).wait(1).to({graphics:mask_graphics_262,x:506.4,y:273}).wait(1).to({graphics:mask_graphics_263,x:524.9,y:273}).wait(1).to({graphics:mask_graphics_264,x:543.5,y:273}).wait(125));

	// arrow
	this.instance_1 = new lib.arrow("synched",0);
	this.instance_1.setTransform(491.7,258.8,1,1,0,0,0,198,44.7);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(250).to({_off:false},0).wait(139));

	// t7
	this.instance_2 = new lib.point_5("synched",0);
	this.instance_2.setTransform(275.8,502.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(250).to({_off:false},0).to({alpha:1},5).wait(134));

	// chart text
	this.instance_3 = new lib.Symbol2("synched",0);
	this.instance_3.setTransform(270,196.8,1,1,0,0,0,88,12.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(245).to({_off:false},0).to({alpha:1},5).wait(139));

	// screen
	this.instance_4 = new lib.graph("synched",0);
	this.instance_4.setTransform(790.5,139.4,1.5,1.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(225).to({_off:false},0).to({alpha:1},5).wait(153).to({startPosition:0},0).to({alpha:0},5).wait(1));

	// chart
	this.instance_5 = new lib.chart("synched",0);
	this.instance_5.setTransform(509.5,260.5,1,1,0,0,0,333.5,121.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(225).to({_off:false},0).to({alpha:1},5).wait(159));

	// t6
	this.instance_6 = new lib.point_4("synched",0);
	this.instance_6.setTransform(275.8,476.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(207).to({_off:false},0).to({alpha:1},5).wait(177));

	// landing gear
	this.instance_7 = new lib._787_GNDProxPanel("synched",0);
	this.instance_7.setTransform(1058.7,334.7,1,1,0,0,0,167.3,165.9);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(207).to({_off:false},0).to({alpha:1},5).wait(8).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(163));

	// t5
	this.instance_8 = new lib.point_3("synched",0);
	this.instance_8.setTransform(275.8,452.1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(200).to({_off:false},0).to({alpha:1},5).wait(184));

	// clock
	this.instance_9 = new lib._787_Generic_screencopy("synched",0);
	this.instance_9.setTransform(126.7,246.9,1,1,0,0,0,319.8,250.9);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(200).to({_off:false},0).to({alpha:1},5).wait(15).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(163));

	// t4
	this.instance_10 = new lib.point_2("synched",0);
	this.instance_10.setTransform(275.8,428.1);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(168).to({_off:false},0).to({alpha:1},5).wait(216));

	// t3
	this.instance_11 = new lib.t3("synched",0);
	this.instance_11.setTransform(505.3,405,1,1,0,0,0,329.5,12.1);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(154).to({_off:false},0).to({alpha:1},5).wait(230));

	// t2
	this.instance_12 = new lib.point_1("synched",0);
	this.instance_12.setTransform(275.8,117.1);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(110).to({_off:false},0).to({alpha:1},5).wait(274));

	// t1
	this.instance_13 = new lib.t0("synched",0);
	this.instance_13.setTransform(254.4,93.7,1,1,0,0,0,78.6,12.1);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(81).to({_off:false},0).to({alpha:1},5).wait(303));

	// panel
	this.instance_14 = new lib.ANTIICEPanelcopy("single",0);
	this.instance_14.setTransform(585.9,290.9,1,1,0,0,0,-255.7,185.8);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(81).to({_off:false},0).to({alpha:1},5).wait(101).to({startPosition:1},0).wait(33).to({startPosition:1},0).to({alpha:0},5).to({_off:true},1).wait(163));

	// circles
	this.instance_15 = new lib.graph("synched",0);
	this.instance_15.setTransform(312.3,156.4,2.159,2.159);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(76).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(307));

	// wing anti ice
	this.instance_16 = new lib.ANTIICEPanel("synched",0);
	this.instance_16.setTransform(693.4,167.9,1,1,0,0,0,-255.7,185.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(76).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(307));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(500,275,1000,550);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;