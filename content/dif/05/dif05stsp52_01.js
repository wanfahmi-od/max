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


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIAJIAAgQIAQAAIAAAQg");
	this.shape.setTransform(88.2,36.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgMIAOAAIAAgKQAAgKACgEQACgGAGgEQADgEALAAIAPACIgDANIgJgBQgHAAgDADQgDAEAAAIIAAAJIASAAIAAAMIgSAAIAABPg");
	this.shape_1.setTransform(83.6,30.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgMIAOAAIAAgKQAAgKACgEQACgGAGgEQADgEALAAIAPACIgDANIgJgBQgHAAgDADQgDAEAAAIIAAAJIASAAIAAAMIgSAAIAABPg");
	this.shape_2.setTransform(78.9,30.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_3.setTransform(71,32.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgIAAgIAHg");
	this.shape_4.setTransform(61,32.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AATBAIgdgvIgLAKIAAAlIgQAAIAAh/IAQAAIAABIIAjgkIAUAAIgiAhIAmA6g");
	this.shape_5.setTransform(52.1,31);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQADgKAEgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgGADgJAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_6.setTransform(42,32.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgBA9QgFgDgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAHABACQAAABABAAQAAAAAAABQAAAAABABQAAAAABAAIAFACIAHgBIACAOIgMABQgIAAgDgCg");
	this.shape_7.setTransform(34.6,31.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgBA9QgFgDgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAHABACQAAABABAAQAAAAAAABQAAAAABABQAAAAABAAIAFACIAHgBIACAOIgMABQgIAAgDgCg");
	this.shape_8.setTransform(24.6,31.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_9.setTransform(17,32.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_10.setTransform(7,32.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_11.setTransform(773.9,13.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_12.setTransform(766.5,12.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AASAuIgPg2IgDgQIgSBGIgQAAIgdhbIARAAIAPA0IAFAUIAFgTIAPg1IAOAAIAOA0IAFASIAFgSIAQg0IAQAAIgeBbg");
	this.shape_13.setTransform(752.4,13.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_14.setTransform(740.9,13.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgFgEgGAAQgGAAgCADQgEADgCAGQgCAIAAAKIAAAvg");
	this.shape_15.setTransform(733.6,13.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_16.setTransform(725.7,13.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_17.setTransform(713.5,12.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAWBAIAAg7QAAgKgGgGQgEgFgKAAQgFAAgHAEQgFAEgDAFQgDAFAAALIAAAzIgQAAIAAh/IAQAAIAAAvQALgNAPgBQALAAAHAFQAIAEADAHQAEAHAAAMIAAA7g");
	this.shape_18.setTransform(705.9,11.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgaA7QgLgIABgPIAPACQABAHAEAEQAGAEAKAAQAKAAAGgEQAFgFADgIQABgEAAgQQgLAMgOAAQgTAAgKgOQgLgOAAgRQAAgNAFgMQAFgLAJgGQAKgGALAAQAQAAAKANIAAgLIAOAAIAABPQABAVgFAKQgEAJgKAFQgKAFgMAAQgRAAgJgHgAgQgrQgHAIgBARQABASAHAHQAHAIAJAAQALAAAHgIQAIgHAAgSQAAgRgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_19.setTransform(695.6,15.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgGBAIAAhcIANAAIAABcgAgGgsIAAgTIANAAIAAATg");
	this.shape_20.setTransform(688.9,11.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgGBAIAAh/IANAAIAAB/g");
	this.shape_21.setTransform(684.9,11.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgKQAAgIACgFQACgHAGgDQAEgEAKAAIAPABIgDAOIgJAAQgHAAgDACQgDADAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_22.setTransform(680.8,11.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_23.setTransform(667.9,13.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgGQgGgFgJAAQgFAAgGAEQgHAEgCAFQgDAFAAALIAAAzIgPAAIAAh/IAPAAIAAAvQAMgNAOgBQALAAAHAFQAIAEADAHQAEAHgBAMIAAA7g");
	this.shape_24.setTransform(657.9,11.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_25.setTransform(650.5,12.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_26.setTransform(640.5,12.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_27.setTransform(633.7,13.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_28.setTransform(623.8,13.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgFgEgGAAQgGAAgCADQgEADgCAGQgCAIAAAKIAAAvg");
	this.shape_29.setTransform(616.6,13.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_30.setTransform(610.5,12.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_31.setTransform(603.3,13.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_32.setTransform(593.9,13.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgsIAAgTIAPAAIAAATg");
	this.shape_33.setTransform(586.9,11.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgGBAIAAh/IANAAIAAB/g");
	this.shape_34.setTransform(577.9,11.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_35.setTransform(573.9,11.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgHBAIAAhcIAOAAIAABcgAgHgsIAAgTIAOAAIAAATg");
	this.shape_36.setTransform(569.9,11.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AASAuIgPg2IgDgQIgSBGIgQAAIgdhbIARAAIAPA0IAFAUIAFgTIAPg1IAOAAIAOA0IAFASIAFgSIAQg0IAPAAIgdBbg");
	this.shape_37.setTransform(561.4,13.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAWBAIAAg7QAAgKgGgGQgEgFgKAAQgFAAgHAEQgFAEgDAFQgDAFAAALIAAAzIgQAAIAAh/IAQAAIAAAvQALgNAPgBQAKAAAIAFQAIAEADAHQAEAHAAAMIAAA7g");
	this.shape_38.setTransform(544.9,11.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_39.setTransform(535.7,13.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgGBAIAAhcIAOAAIAABcgAgGgsIAAgTIAOAAIAAATg");
	this.shape_40.setTransform(528.9,11.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgGQgGgFgJAAQgFAAgGAEQgHAEgCAFQgDAFAAALIAAAzIgPAAIAAh/IAPAAIAAAvQAMgNAOgBQAKAAAIAFQAIAEADAHQADAHAAAMIAAA7g");
	this.shape_41.setTransform(521.9,11.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AASAuIgPg2IgDgQIgSBGIgQAAIgdhbIARAAIAPA0IAGAUIAEgTIAPg1IAOAAIAOA0IAFASIAFgSIAQg0IAQAAIgeBbg");
	this.shape_42.setTransform(510.4,13.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgIAOQAFgCADgEQAAgEAAgGIgHAAIAAgSIAQAAIAAASQAAAIgDAGQgEAGgGADg");
	this.shape_43.setTransform(496.4,18.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_44.setTransform(491.5,12.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_45.setTransform(484.3,13.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgsIAAgTIAPAAIAAATg");
	this.shape_46.setTransform(477.9,11.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_47.setTransform(473.9,11.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AATBAIgdgvIgLAKIAAAlIgQAAIAAh/IAQAAIAABIIAjglIAUAAIgiAhIAmA7g");
	this.shape_48.setTransform(468,11.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_49.setTransform(458.7,13.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMgBAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgIAAgIAHg");
	this.shape_50.setTransform(448.9,13.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgGQgGgFgJAAQgFAAgHAEQgGAEgCAFQgDAFAAALIAAAzIgQAAIAAh/IAQAAIAAAvQALgNAPgBQALAAAHAFQAIAEADAHQADAHABAMIAAA7g");
	this.shape_51.setTransform(438.9,11.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_52.setTransform(429.7,13.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgGBAIAAh/IAOAAIAAB/g");
	this.shape_53.setTransform(417.9,11.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQAEAEAAAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAHgEAEgHQACgFAAgLIAAgFQgIADgPACg");
	this.shape_54.setTransform(410.9,13.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_55.setTransform(398.4,13.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAGAAQAHAAAJAFIgFAPQgGgEgGAAQgFAAgDADQgEADgCAGQgCAIAAAKIAAAvg");
	this.shape_56.setTransform(388.6,13.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_57.setTransform(379.9,13.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_58.setTransform(369.9,13.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgXAIIAAgOIAvAAIAAAOg");
	this.shape_59.setTransform(361.9,13.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_60.setTransform(353.9,13.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_61.setTransform(343.9,13.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_62.setTransform(333.9,13.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAtBAIAAhqIgmBqIgNAAIglhrIAABrIgRAAIAAh/IAaAAIAeBaIAEATIAHgVIAfhYIAXAAIAAB/g");
	this.shape_63.setTransform(316.4,11.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_64.setTransform(306.5,11.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAjBAIgRgbIgMgRIgHgJIgIgDIgJgBIgUAAIAAA5IgRAAIAAh/IA3AAQARAAAJAEQAJADAGAJQAFAJAAAKQAAAOgJAJQgJAIgSACQAGAEAEADQAHAHAHAKIAWAjgAgmgGIAlAAQAJAAAHgCQAGgDAEgFQADgFAAgHQAAgJgGgFQgHgHgOAAIgnAAg");
	this.shape_65.setTransform(298,11.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgHBAIAAhwIgrAAIAAgPIBlAAIAAAPIgrAAIAABwg");
	this.shape_66.setTransform(285.4,11.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgqBAIAAh/IBVAAIAAAPIhEAAIAAApIA7AAIAAAMIg7AAIAAA7g");
	this.shape_67.setTransform(270.1,11.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgfA5QgOgIgIgQQgHgPAAgRQAAgeARgSQARgSAaAAQARAAAPAIQAOAJAIAPQAHAPAAASQAAAUgIAPQgIAQgOAHQgPAIgQAAQgRAAgOgJgAgdgmQgNANAAAbQAAAXAMANQANANARAAQATAAAMgNQANgNAAgZQAAgOgGgMQgFgLgKgHQgLgGgMAAQgQAAgNAMg");
	this.shape_68.setTransform(257.3,11.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgHBAIAAhwIgrAAIAAgPIBlAAIAAAPIgrAAIAABwg");
	this.shape_69.setTransform(240.2,11.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgcA7QgLgHgFgLQgFgMAAgUIAAhJIARAAIAABJQAAAQADAJQADAHAIAFQAHAEALAAQARAAAIgJQAIgIAAgYIAAhJIARAAIAABJQAAATgEALQgFAMgLAHQgLAHgTAAQgQAAgMgGg");
	this.shape_70.setTransform(228.1,12);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgfA5QgOgIgIgQQgHgPAAgRQAAgeARgSQARgSAaAAQARAAAPAIQAOAJAIAPQAHAPAAASQAAAUgIAPQgIAQgOAHQgPAIgQAAQgRAAgOgJgAgdgmQgNANAAAbQAAAXAMANQANANARAAQATAAAMgNQANgNAAgZQAAgOgGgMQgFgLgKgHQgLgGgMAAQgQAAgNAMg");
	this.shape_71.setTransform(214.7,11.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAjBAIgRgbIgMgRIgHgJIgIgDIgJgBIgUAAIAAA5IgRAAIAAh/IA3AAQARAAAJAEQAJADAGAJQAFAJAAAKQAAAOgJAJQgJAIgSACQAGAEAEADQAHAHAHAKIAWAjgAgmgGIAlAAQAJAAAHgCQAGgDAEgFQADgFAAgHQAAgJgGgFQgHgHgOAAIgnAAg");
	this.shape_72.setTransform(196.7,11.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgvBAIAAh/IBcAAIAAAPIhKAAIAAAoIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_73.setTransform(183.9,11.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgxBAIAAgQIBAhQIANgQIhGAAIAAgPIBbAAIAAAPIhHBXIgIAKIBRAAIAAAPg");
	this.shape_74.setTransform(172.1,11.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_75.setTransform(164.2,11.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgnBAIAAh/IARAAIAABwIA+AAIAAAPg");
	this.shape_76.setTransform(157,11.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_77.setTransform(149.2,11.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgvBAIAAh/IAvAAQAOAAAJAEQAJAEAFAIQAFAIAAAJQAAAIgEAIQgFAHgJAEQAMADAGAHQAGAJAAALQAAAIgEAJQgDAIgGAEQgGADgIADQgJACgMAAgAgeAxIAeAAIAMgBQAGgBAEgCQADgDADgEQADgFAAgGQAAgIgEgFQgEgFgGgDQgHgCgKAAIgeAAgAgegIIAcAAQAJAAAFgCQAHgCADgEQADgFAAgHQAAgHgDgEQgDgFgGgCQgFgBgMgBIgaAAg");
	this.shape_78.setTransform(140.8,11.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AApBAIgQgnIg0AAIgNAnIgTAAIAxh/IARAAIA1B/gAgIgYIgNAjIApAAIgOgiIgHgbQgCANgFANg");
	this.shape_79.setTransform(128.7,11.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgHBAIAAhwIgrAAIAAgPIBlAAIAAAPIgrAAIAABwg");
	this.shape_80.setTransform(118.5,11.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgYA9QgMgFgHgKQgGgKgBgOIAQgBQACAKAEAGQAEAHAJADQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgEQgEgFgIgDIgVgHQgRgDgHgDQgKgEgEgIQgFgHAAgJQAAgKAGgIQAFgIALgEQALgFAMAAQANAAALAFQALAEAGAJQAGAJAAAMIgQABQgCgMgHgHQgIgGgOAAQgOAAgHAGQgHAGAAAHQAAAIAFADQAFAFASAFQAVAFAIADQALADAGAJQAFAHAAALQAAAKgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape_81.setTransform(106.9,11.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_82.setTransform(91,13.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgGQgGgFgJAAQgFAAgGAEQgGAEgDAFQgDAFAAALIAAAzIgPAAIAAh/IAPAAIAAAvQAMgNAOgBQALAAAHAFQAIAEADAHQAEAHgBAMIAAA7g");
	this.shape_83.setTransform(81,11.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_84.setTransform(73.6,12.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_85.setTransform(61,13.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_86.setTransform(53.6,12.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAGAAQAHAAAJAFIgFAPQgHgEgFAAQgFAAgDADQgEADgBAGQgDAIAAAKIAAAvg");
	this.shape_87.setTransform(43.7,13.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgNAAQgIAAgIAHg");
	this.shape_88.setTransform(35,13.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgKQAAgIACgFQACgHAGgDQAEgEAKAAIAPABIgCAOIgKAAQgHAAgDACQgDADAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_89.setTransform(27.9,11.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQAMAMgBAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_90.setTransform(20,13.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AAjBAIgRgbIgMgRIgHgJIgIgDIgJgBIgUAAIAAA5IgRAAIAAh/IA3AAQARAAAJAEQAJADAGAJQAFAJAAAKQAAAOgJAJQgJAIgSACQAGAEAEADQAHAHAHAKIAWAjgAgmgGIAlAAQAJAAAHgCQAGgDAEgFQADgFAAgHQAAgJgGgFQgHgHgOAAIgnAAg");
	this.shape_91.setTransform(9.1,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,783.1,43.2);


(lib.prot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.texture();
	this.instance.setTransform(0,0,100,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1000,550);


(lib.LIGHTS_Base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#7E8D9A","#4E616D"],[0,1],8.3,-13.8,11.1,-11.5).s().p("AklGLQgNAAgHgEQgUgHAAgaIAArLQAAgZAUgJQAHgDANAAIJLAAQANAAAHADQAUAJAAAZIAALLQAAAagUAHQgHAEgNAAgAk5lkIAALJQAAASAUAAIJLAAQAUAAAAgSIAArJQAAgSgUAAIpLAAQgUAAAAASg");
	this.shape.setTransform(359.4,23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6C7B8A").s().p("AklF3QgUAAAAgSIAArJQAAgSAUAAIJLAAQAUAAAAASIAALJQAAASgUAAg");
	this.shape_1.setTransform(359.4,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#657381").s().p("AleGbIAAs1IK9AAIAAM1gAk6mHQgUAJAAAZIAALLQAAAaAUAHQAIAEAMAAIJMAAQAMAAAIgEQAUgHAAgaIAArLQAAgZgUgJQgIgDgMAAIpMAAQgMAAgIADg");
	this.shape_2.setTransform(359.5,23.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// fill
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#657381").s().p("AlcGZIAAsxIK5AAIAAMxg");
	this.shape_3.setTransform(359.5,23.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(324.4,-17.8,70.3,82.3);


(lib.GEN_switchbase07 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#5E5E5E","#111111"],[0,1],-6,-6.9,0,-6,-6.9,16.2).s().p("Ag0A2IAAAAQgYgXAAgfQAAgeAXgXQAXgXAeAAQAfAAAXAYIAAAAQAXAXAAAdQAAAfgXAXIAAAAQgXAXgfAAIAAAAQgdAAgXgXgAAAhEQgaAAgVAVQgVAVAAAaQAAAcAUAUIABAAQAVAVAaAAQAcAAAUgVIAAAAIAAAAQAVgUAAgcQAAgagVgVIAAgBQgUgUgcAAIAAAAg");
	this.shape.setTransform(18.4,18.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#515151","#000000"],[0,1],-7.3,-9.3,0,-7.7,-9.3,18).s().p("AAABFQgaAAgVgVIgBAAQgUgUAAgcQAAgaAVgVQAVgVAaAAQAcAAAUAUIAAABQAVAVAAAaQAAAcgVAUIAAAAIAAAAQgUAVgcAAIAAAAgAAAA8QAYAAARgTIAAAAQATgRAAgYQAAgXgTgSIAAAAIAAAAQgRgRgYAAQgWAAgTARIAAAAIAAAAQgRATAAAWQAAAYARARIAAAAIAAAAQASATAXAAg");
	this.shape_1.setTransform(18.4,18.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#5E5E5E","#111111"],[0,1],-4.8,-6.6,0,-4.8,-6.6,16.5).s().p("AAAA7QgXAAgSgSIAAAAQgRgSAAgXQAAgXARgSIAAAAIAAAAQASgRAXAAQAXAAASARIAAAAQASASAAAXQAAAXgSASIAAAAQgSASgXAAIAAAAgAgkgkIAAAAQgPAQAAAUQAAAUAPAPIAAAAQAQARAUAAQAUAAAPgRIAAAAIAAAAQARgPAAgUQAAgUgRgQIAAAAQgPgPgUAAQgUAAgQAPg");
	this.shape_2.setTransform(18.4,18.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#515151","#000000"],[0,1],-3.2,-5.4,0,-3.5,-5.4,19.1).s().p("AgkAjIAAAAQgPgPAAgUQAAgUAPgQIAAAAQAQgPAUAAQAUAAAPAPIAAAAQARAQAAAUQAAAUgRAPIAAAAIAAAAQgPARgUAAIAAAAQgUAAgQgRgAgdgdQgMANAAAQQAAAQAMAMQANANAQAAQAQAAAMgNIAAAAQANgMAAgQQAAgQgNgNQgMgMgQAAQgQAAgNAMIAAAAg");
	this.shape_3.setTransform(18.4,18.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#515151","#000000"],[0,1],8.6,9.4,0,8.6,9.4,16.1).s().p("AAAAiQgMAAgLgLQgKgKAAgNQAAgMAKgLIAAAAQALgKAMAAQANAAAKAKQALALAAAMQAAANgKAKIgBABQgKAKgNAAIAAAAg");
	this.shape_4.setTransform(18.4,18.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#404040","#000000"],[0,1],2.9,4.5,0,2.9,4.5,13.4).s().p("AgcAdQgMgMAAgRQAAgPAMgNIAAAAIAAAAQANgMAPAAQARAAAMAMQAMAMAAAQQAAAQgMAMIgBABQgMAMgQAAIAAAAQgQAAgMgMgAgXgXIAAAAQgKALAAAMQAAANAKAKQALALAMAAQANAAAKgKIABgBQAKgKAAgNQAAgMgLgLQgKgKgNAAQgMAAgLAKg");
	this.shape_5.setTransform(18.4,18.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#343D43").s().p("AhEBGIAAAAQgdgeAAgoQAAgnAdgdQAdgdAnAAQAoAAAeAdIAAAAQAcAdAAAnQAAAogcAeIAAAAQgeAcgoAAQgnAAgdgcgAg0A2QAXAXAdAAQAfAAAXgXIAAAAQAXgXAAgfQAAgdgXgXIAAgBIAAABQgXgXgfAAQgdgBgYAXQgXAYABAdQAAAfAXAXIgBAAg");
	this.shape_6.setTransform(18.3,18.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#7E8D9A","#4E616D"],[0,1],9.5,9.1,-9.4,-8.9).s().p("AAABvQgsAAghggIAAAAIgBAAQgggiAAgtQAAgsAhghQAhghAsAAQAtAAAiAgIAAABIAAAAQAgAhAAAsQAAAtggAiIAAAAIAAAAQgiAggtAAIAAAAgAhEhEQgdAdAAAnQAAAoAdAeIAAAAQAdAcAnAAQAoAAAegcIAAAAQAcgeAAgoQAAgngcgdIAAAAQgegdgoAAIAAAAQgnAAgdAdg");
	this.shape_7.setTransform(18.3,18.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CC9999").s().p("Ag1A2IAAAAIAAAAgAgpApIAAAAIAAAAgAApgpIAAAAIAAAAgAA2g1IAAAAIAAAAg");
	this.shape_8.setTransform(18.4,18.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// fill
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#232323").s().p("Ag0A2IAAAAQgYgXAAgfQAAgeAXgXQAXgXAeAAQAfAAAXAYIAAAAQAXAXAAAdQAAAfgXAXIAAAAQgXAXgfAAIAAAAQgdAAgXgXg");
	this.shape_9.setTransform(18.4,18.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#343D43").s().p("AAABvQgsAAghggIAAAAIgBAAQgggiAAgtQAAgsAhghQAhghAsAAQAtAAAiAgIAAABIAAAAQAgAhAAAsQAAAtggAiIAAAAIAAAAQgiAggtAAIAAAAgAg0A2QAXAXAdAAQAfAAAXgXIAAAAQAXgXAAgfQAAgdgXgXIAAgBIAAABQgXgXgfAAQgdgBgYAXQgXAYABAdQAAAfAXAXIgBAAg");
	this.shape_10.setTransform(18.3,18.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CC9999").s().p("Ag1A2IAAAAIAAAAgAA2g1IAAAAIAAAAg");
	this.shape_11.setTransform(18.4,18.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.2,7.2,22.4,22.4);


(lib.GEN_switch06center = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#6A6A6A","#000000"],[0,1],-0.7,-0.9,0,-0.7,-0.9,4.8).s().p("AgbAbQgLgLAAgQQAAgPALgLQAMgMAPAAQAQAAALAMQAMALAAAPQAAAQgMALQgLAMgQAAQgPAAgMgMg");
	this.shape.setTransform(6.6,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.7,-3.6,7.9,7.9);


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


(lib.GEN_pbbase07 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#222222","#111111"],[0,1],5.2,-6.2,6.2,-5.2).s().p("AidCmQgKAAAAgKIAAk3QAAgKAKAAIE6AAQAKAAAAAKIAAE3QAAAKgKAAgAieiTIAAEmQAAAKAKAAIEmAAQALAAgBgKIAAkmQABgKgLAAIkmAAQgKAAAAAKg");
	this.shape.setTransform(17.8,17.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1A1A1A").s().p("AiTCeQgKgBAAgJIAAkmQAAgKAKAAIEnAAQAKAAAAAKIAAEmQAAAJgKABg");
	this.shape_1.setTransform(17.7,17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#7E8D9A","#4E616D"],[0,1],-97.2,97.4,-96.5,98.2).s().p("AioC4QgPAAAAgPIAAlRQAAgPAPAAIFRAAQAPAAAAAPIAAFRQAAAPgPAAgAixisIAAFZQAAAFAFAAIFZAAQAFAAAAgFIAAlZQAAgFgFAAIlZAAQgFAAAAAFg");
	this.shape_2.setTransform(17.7,17.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6C7B8A").s().p("AisCyQgFAAAAgFIAAlZQAAgFAFAAIFZAAQAFAAAAAFIAAFZQAAAFgFAAg");
	this.shape_3.setTransform(17.7,17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,-0.8,36.9,36.9);


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

	// fill
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1A1A1A").s().p("AjkB3QgIAAAAgIIAAjdQAAgIAIAAIHJAAQAIAAAAAIIAADdQAAAIgIAAg");
	this.shape_2.setTransform(24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,47.9,24.4);


(lib.GEN_switchbase04a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#1A1A1A","#888888","#111111"],[0,0.537,1],-7.6,6.7,7.6,-6.6).s().p("AgkAlQgQgPAAgWQAAgVAQgPQAPgQAVAAQAWAAAPAQQAQAPAAAVQAAAWgQAPQgPAQgWAAQgVAAgPgQg");
	this.shape.setTransform(18.5,18.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","#8C8C8C","#000000"],[0,0.537,1],-7.6,6.7,7.6,-6.6).s().p("AgsAtQgTgSAAgbQAAgZATgTQATgTAZAAQAbAAASATQATATAAAZQAAAbgTASQgSATgbAAQgZAAgTgTgAgkgkQgQAPAAAVQAAAWAQAPQAPAQAVAAQAWAAAPgQQAQgPAAgWQAAgVgQgPQgPgQgWAAQgVAAgPAQg");
	this.shape_1.setTransform(18.5,18.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#1A1A1A","#AEAEAE","#111111"],[0,0.537,1],-7.6,6.7,7.6,-6.6).s().p("AgzA1IAAgBQgWgVAAgfQAAgdAWgWQAWgWAdAAQAfAAAVAWIABAAQAVAWAAAdQAAAfgVAVIgBABQgVAVgfAAQgdAAgWgVgAgrgrQgUASAAAZQAAAbAUATQASASAZAAQAbAAATgSQASgTAAgbQAAgZgSgSQgTgUgbAAQgZAAgSAUg");
	this.shape_2.setTransform(18.4,18.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000000","#A6A6A6","#000000"],[0,0.537,1],-7.6,6.7,7.6,-6.6).s().p("AAABRQggABgYgYIAAAAQgZgYAAgiQAAggAZgYQAYgZAgAAQAiAAAYAZIAAAAQAYAYgBAgQABAigYAYIAAAAQgYAXgiAAIAAAAgAgzA1QAWAVAdAAQAfAAAVgVIABgBQAVgVAAgfQAAgdgVgWIgBAAIAAAAQgVgWgfAAQgdAAgWAWQgWAWAAAdQAAAfAWAVIAAAAg");
	this.shape_3.setTransform(18.4,18.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#444444","#B7B7B7","#444444"],[0,0.537,1],-11.5,9.9,11.5,-9.8).s().p("AhCBEQgcgdAAgnQAAgmAcgcQAcgcAmAAQAnAAAdAcIAAAAQAbAcAAAmQAAAngbAdIAAAAQgdAbgnAAQgmAAgcgbgAA6A6IAAAAQAYgYgBgiQABgggYgYIAAAAQgYgZgiAAQggAAgYAZQgZAYAAAgQAAAiAZAYIAAAAQAYAYAggBQAiABAYgYg");
	this.shape_4.setTransform(18.4,18.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#555555","#C8C8C8","#262626"],[0,0.537,1],-14.2,12.2,14.2,-12.2).s().p("AAABnQgpAAgfgeQgegfABgqQgBgpAegfQAfgeApABQAqgBAfAeIAAABQAeAeAAApQAAAqgeAfIAAAAQgfAegqAAIAAAAgAhChCQgcAcAAAmQAAAnAcAdQAcAbAmAAQAnAAAdgbIAAAAQAbgdAAgnQAAgmgbgcIAAAAQgdgcgnAAQgmAAgcAcg");
	this.shape_5.setTransform(18.4,18.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#3C3C3C","#8C8C8C","#6A6A6A","#7B7B7B","#453932"],[0,0.286,0.506,0.667,1],-15.1,7.4,15.2,-7.3).s().p("Ah5AsIAXh+IB5gtIBjBVIgXB9Ih4AtgAhHhIQgeAfAAApQAAAqAeAfQAeAdApAAQArAAAegdIABgBQAdgeAAgqQAAgpgdgeIAAgBQgfgegrAAIAAAAQgpAAgeAegAgzA0IABAAIAAABgAA1gzIAAgBIAAABg");
	this.shape_6.setTransform(18.4,18.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#262626","#7B7B7B","#595959","#666666","#2C2521"],[0,0.286,0.506,0.667,1],-15.1,7.4,15.2,-7.3).s().p("AgXCIIgCgBIhmhXIgBgCIgBgCIAYiCIABgCIABAAIB9guIACgBIACABIBmBYIABABIAAACIgXCCIgBACIgCABIh8AtIgBABIgBAAgAhihSIgXB+IBjBUIB5gtIAWh9IhjhVg");
	this.shape_7.setTransform(18.4,18.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#7E8D9A","#4E616D"],[0,1],11.5,11.1,-11.5,-11).s().p("AhvBxQgvgvAAhCQAAhBAvguQAugvBBAAQBCAAAvAvQAuAuAABBQAABCguAvQgvAuhCAAQhBAAgugugAhmhmQgrArAAA7QAAA8ArAsQAqAqA8AAQA8AAAsgqQAqgsAAg8QAAg7gqgrQgsgrg8AAQg8AAgqArg");
	this.shape_8.setTransform(18.5,18.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#343D43").s().p("AhmBoQgrgsAAg8QAAg7ArgrQAqgrA8AAQA8AAAsArQAqArAAA7QAAA8gqAsQgsAqg8AAQg8AAgqgqgAAViHIh9AuIgBABIgBACIgYCCIABACIABABIBmBYIACABIACgBIB8guIACgBIABgCIAXiBIAAgCIgBgCIhmhXIgCgBIgBAAIgBAAg");
	this.shape_9.setTransform(18.5,18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// fill
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#637480").s().p("AhvBxQgvgvAAhCQAAhBAvguQAugvBBAAQBCAAAvAvQAuAuAABBQAABCguAvQgvAuhCAAQhBAAgugugAAViHIh9AuIgBABIgBACIgYCCIABACIABABIBmBYIACABIACgBIB8guIACgBIABgCIAXiBIAAgCIgBgCIhmhXIgCgBIgBAAIgBAAg");
	this.shape_10.setTransform(18.5,18.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#717171").s().p("AgXCIIgCgBIhmhXIgBgCIgBgCIAYiCIABgCIABAAIB9guIACgBIACABIBmBYIABABIAAACIgXCCIgBACIgCABIh8AtIgBABIgBAAgAgyA1IAAgBIgBAAgAA1gzIAAAAIAAgBg");
	this.shape_11.setTransform(18.4,18.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#3C3C3C","#8C8C8C","#6A6A6A","#7B7B7B","#453932"],[0,0.286,0.506,0.667,1],-15.2,7.4,15.1,-7.3).s().p("Ag0A0IABAAIAAABgAA0gzIAAgBIABABg");
	this.shape_12.setTransform(18.5,18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.5,2.5,32,32);


(lib.GEN_switch03down = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FAF7EE","#A9A194","#6E6A5E","#605B53"],[0.031,0.478,0.902,1],-1.8,-2.9,0,-1.8,-2.9,9.1).s().p("AghApQgRgQgCgaIABgIIAAgDIAAgDQABgKAHgHQACgFAEgEQAQgOAVAAQAWAAAQAOIAGAIQAHAJABAMIABABIgBAJQgBAbgQAQQgPAPgUAAQgSAAgPgPg");
	this.shape.setTransform(6.5,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.2,-5,10.7,11.3);


(lib.LIGHTSPanel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Buttons & Symbols
	this.instance = new lib.GEN_switch03down("synched",0);
	this.instance.setTransform(356.5,-64.9,1.096,1.079,0,0,0,6.5,0);

	this.instance_1 = new lib.GEN_switchbase04a("synched",0);
	this.instance_1.setTransform(356.5,-64.3,1.096,1.079,0,0,0,18.5,18.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYAfIgDgJQgBgEAEgCIAEAAIADACQAAAGAFADQACACAIACQAHAAAEgCQAHgCAAgGQABgHgDgDQgCgEgMgFIgKgCIgIgDQgFgDgCgEQgCgGABgHQACgKAIgEQAFgEAHAAIALABQAFABAFAFQAEAFABAEQACACgBADIgEADIgEAAIgDgEQgCgGgHgCQgGgCgFACQgHADAAAHQAAAIAJACQAdAIAEAMIABAHIgBAHQgBAIgKAFQgHACgJACQgRgCgHgJg");
	this.shape.setTransform(371.3,-101.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEAlIAAhCIgSAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBIgBgEQAAgEAGgBIAtAAQAGABAAAEQAAAFgGABIgSAAIAABCQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAIgDABQgEAAAAgEg");
	this.shape_1.setTransform(364.6,-101.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AARAlIAAglIghAAIAAAmQAAAAAAABQAAAAAAABQgBAAAAAAQgBABAAAAIgEAAIgDgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAhJIACgDIADgBQAHAAgBAEIAAAZIAhAAIAAgbIABAAQABgCAEAAIAEAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABIAABJIgBADQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgFAAgBgEg");
	this.shape_2.setTransform(357.7,-101.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWAbQgGgKAAgRQAAgOAGgLQADgGAIgFQAHgFAGAAQAMABAHAFIAFAFIABADQACAEgFACQgEACgDgDQgGgIgIAAQgKACgGAKQgEAIAAAKQAAANADAFQAHAMAKAAQAFAAAEgDQADgBACgFIAAgNIgPAAIgCgCIAAgFIAAgBQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIAXAAIADACQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAIAAAWQAAACgDAEQgCAFgEACQgFAGgNAAQgPAAgJgPg");
	this.shape_3.setTransform(350.3,-101.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgDAoQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAgBgBIAAhJQABgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBIADgBQAFABAAAEIAABKQAAABAAAAQAAAAAAABQgBAAAAAAQAAABgBAAIgDABIgDgCg");
	this.shape_4.setTransform(345.3,-101.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgbAqIAAhPQABgDAEgBQAFABABADIAABCIAnAAQAFABAAAGIgBAEQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAg");
	this.shape_5.setTransform(340.6,-101.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AARAhIgBgDIAAgqIgNAXQAAABgBAAQAAABgBAAQAAAAgBABQAAAAAAAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQgBAAAAgBIgNgWIAAApIgBADIgDABQgEAAgBgEIAAg6QABgEADAAQAEgCACAEIAOAeIAPgeQACgEAEACIADABIABACIAAA7IgBADIgDABIgEgBg");
	this.shape_6.setTransform(359.8,-40.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgCAhIgBgDIAAg7IABgDIACgBQAEAAAAAEIAAA8QAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAIgCABIgCgBg");
	this.shape_7.setTransform(355.7,-40.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgXAiIAAhDIAUAAQAMAAAIALQAIAJgBANQAAANgHAKQgIALgLAAgAgOAYIALAAQAIAAAFgIQAEgHAAgJQAAgJgFgHQgFgIgHAAIgLAAg");
	this.shape_8.setTransform(351.7,-40.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgDAeIAAg2IgPAAIgDgBIgBgDQAAgEAEgBIAlAAQAEABAAAEQAAAEgEAAIgPAAIAAA2IgBADIgDABQgDAAAAgEg");
	this.shape_9.setTransform(388.6,-64.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgVAeIAAg/IATAAQAJAAAFADQAGAEAAALQAAAFgBADQgDAIgLAAIASAaQAAAAAAABQAAAAABAAQAAABAAAAQAAABgBAAIgCACQgEADgCgDIgSgfIgHAAIAAAdIgBADIgEABQgEgBAAgDgAgMgGIAMAAQAEAAADgDQADgBAAgFQAAgIgKgBIgMAAg");
	this.shape_10.setTransform(383.2,-64.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgVAiIAAhDIATAAQAJAAAEADQAIAEAAALQAAANgIABQAEABADACQAEAGAAAGQAAAKgGAFQgFAFgKAAgAgLAZIALAAQAFAAAEgDQADgCAAgFQAAgIgEgDIgHgDIgMAAgAgLgFIAFAAQAKAAADgDQADgCAAgFQAAgJgKAAIgLAAg");
	this.shape_11.setTransform(377.6,-64.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgDAeIAAg2IgPAAIgDgBIgBgDQAAgEAEgBIAlAAQAEABAAAEQAAAEgEAAIgPAAIAAA2IgBADIgDABQgDAAAAgEg");
	this.shape_12.setTransform(364.2,-88.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgTAaIgDgIQgBgEAEgBQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAABIADACQAAAFAEACQABACAHABQAFABADgCQAGgCABgFQAAgFgCgDQgCgDgKgEIgIgCIgGgCQgEgCgCgEQgBgFAAgFQACgIAHgEQAEgDAFAAIAJABQAEAAAEAFQAEADAAADQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAAAQgBABAAAAIgDAAIgDgDQgBgFgGgBQgFgCgEABQgFADgBAFQAAAHAIACQAXAHAEAJIAAAFIAAAGQgCAHgIAEQgFACgIABQgNgBgGgHg");
	this.shape_13.setTransform(358.8,-88.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgVAiIAAhDIAnAAQAEABAAAEQAAAFgEAAIgdAAIAAAOIAYAAIACABIABAEIgBADQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAIgXAAIAAAYIAdAAQAEABAAAEQAAAFgEAAg");
	this.shape_14.setTransform(353.2,-88.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgDAeIAAg2IgPAAIgDgBIgBgDQAAgEAEgBIAlAAQAEABAAAEQAAAEgEAAIgPAAIAAA2IgBADIgDABQgDAAAAgEg");
	this.shape_15.setTransform(347.5,-88.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Base
	this.instance_2 = new lib.LIGHTS_Base("synched",0);
	this.instance_2.setTransform(-35.9,-94,1.096,1.079);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(319.5,-113.3,76.9,88.8);


(lib.APATINDICATORSLeft_takeoffconfig = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C3C3C").s().p("AgKAbQgFgDgEgIQgDgGAAgKQAAgJADgHQAEgHAFgEQAFgDAGAAQAJAAAFAEQAGAFABAJIgKACQgBgEgDgDQgDgDgEABQgFAAgEAEQgEAGAAAJQAAAKAFAFQADAFAFABIAGgCQADgBADgDIAAgIIgMAAIAAgHIAWAAIAAAWQgEADgGADQgGADgGAAQgFAAgGgEg");
	this.shape.setTransform(35.7,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C3C3C").s().p("AgDAeIAAg7IAIAAIAAA7g");
	this.shape_1.setTransform(32.1,17.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAhAAIAAALIgXAAIAAAOIATAAIAAAIIgTAAIAAAag");
	this.shape_2.setTransform(29,17.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3C3C3C").s().p("AAJAeIgSgmIAAAmIgKAAIAAg7IAKAAIATAnIAAgnIAKAAIAAA7g");
	this.shape_3.setTransform(24.3,17.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3C3C3C").s().p("AgQAYQgHgJAAgPQAAgJAEgHQADgHAFgEQAFgDAGAAQAKAAAHAJQAHAHAAAOQAAAPgHAJQgHAHgKAAQgJAAgHgHgAgIgPQgEAGAAAJQAAAKAEAFQAEAFAEABQAFgBAEgFQAEgFAAgKQAAgKgEgFQgDgEgGAAQgFAAgDAEg");
	this.shape_4.setTransform(19.1,17.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3C3C3C").s().p("AgNAYQgHgJAAgPQAAgNAHgJQAGgIAIAAQAIAAAGAGQAEAEACAIIgKADQgBgFgDgDQgDgCgEAAQgDAAgEAEQgDAFAAAKQAAALADAEQAEAFADABQAEgBADgDQADgCABgIIAKAFQgCAJgGAFQgFAFgIAAQgHAAgGgHg");
	this.shape_5.setTransform(13.8,17.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAhAAIAAALIgXAAIAAAOIATAAIAAAIIgTAAIAAAag");
	this.shape_6.setTransform(39,8.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAhAAIAAALIgXAAIAAAOIATAAIAAAIIgTAAIAAAag");
	this.shape_7.setTransform(34.8,8.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3C3C3C").s().p("AgQAYQgHgJAAgPQAAgJAEgHQADgHAFgEQAFgDAGAAQAKAAAHAJQAHAHAAAOQAAAPgHAJQgHAHgKAAQgJAAgHgHgAgIgPQgEAGAAAJQAAAKAEAGQAEAEAEAAQAFAAAEgEQAEgGAAgKQAAgJgEgGQgDgEgGAAQgFAAgDAEg");
	this.shape_8.setTransform(29.9,8.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3C3C3C").s().p("AgRAeIAAg7IAjAAIAAALIgZAAIAAANIAWAAIAAAIIgWAAIAAAQIAaAAIAAALg");
	this.shape_9.setTransform(24.9,8.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3C3C3C").s().p("AAJAeIgMgdIgIAKIAAATIgKAAIAAg7IAKAAIAAAcIASgcIAOAAIgSAYIATAjg");
	this.shape_10.setTransform(20.2,8.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3C3C3C").s().p("AANAeIgDgOIgTAAIgEAOIgKAAIATg7IAIAAIAUA7gAgFAGIALAAIgGgVg");
	this.shape_11.setTransform(14.9,8.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3C3C3C").s().p("AgDAeIAAgwIgPAAIAAgLIAlAAIAAALIgOAAIAAAwg");
	this.shape_12.setTransform(10.8,8.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3C3C3C").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABgAjaBnIG1AAIAAjMIm1AAg");
	this.shape_13.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.GEN_pbbase01("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,47.9,24.4);


(lib.APATINDICATORSLeft_stabcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lit - amber
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AAPAeIAAguIgKAuIgIAAIgKguIAAAuIgJAAIAAg7IAOAAIAIAnIAIgnIAPAAIAAA7g");
	this.shape.setTransform(23.3,26.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AgEAeIAAg7IAIAAIAAA7g");
	this.shape_1.setTransform(19.4,26.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AAKAeIgIgNIgCgJIgEgCIgFgCIgCAAIAAAaIgKAAIAAg7IAVAAQAGAAAEACQAEABACAEQACAEAAAGQAAAHgDAFQgEACgHABIAGAGIAGAJIAGAMgAgLgDIAHAAIAHgBIAEgCIABgFIgBgEQgBgBAAAAQgBgBAAAAQgBAAAAgBQAAAAgBAAIgGAAIgIAAg");
	this.shape_2.setTransform(16.1,26.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AgDAeIAAgwIgPAAIAAgLIAlAAIAAALIgOAAIAAAwg");
	this.shape_3.setTransform(11.2,26.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AgQAeIAAg7IAhAAIAAALIgXAAIAAAOIATAAIAAAIIgTAAIAAAag");
	this.shape_4.setTransform(28.8,17.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9900").s().p("AgQAXQgHgIAAgPQAAgJAEgHQADgHAFgDQAFgEAGAAQAKAAAHAIQAHAJAAANQAAAPgHAIQgHAIgKAAQgJAAgHgIgAgIgPQgEAGAAAJQAAAKAEAGQAEAEAEAAQAFAAAEgEQAEgGAAgKQAAgKgEgFQgDgEgGgBQgFABgDAEg");
	this.shape_5.setTransform(23.9,17.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9900").s().p("AgDAeIAAgwIgPAAIAAgLIAlAAIAAALIgOAAIAAAwg");
	this.shape_6.setTransform(17.1,17.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9900").s().p("AgKAcQgEgDgCgFQgCgFAAgOIAAgeIAKAAIAAAfIAAAKQAAAEADACQACACADAAQADAAACgCQADgBABgDIAAgLIAAggIAKAAIAAAdQAAANgBAFQgCAGgEADQgFADgHABQgGgBgEgCg");
	this.shape_7.setTransform(12.4,17.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF9900").s().p("AgQAXQgHgIAAgPQAAgJAEgHQADgHAFgDQAFgEAGAAQAKAAAHAIQAHAJAAANQAAAPgHAIQgHAIgKAAQgJAAgHgIgAgIgPQgEAGAAAJQAAAKAEAGQAEAEAEAAQAFAAAEgEQAEgGAAgKQAAgKgEgFQgDgEgGgBQgFABgDAEg");
	this.shape_8.setTransform(7.2,17.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF9900").s().p("AgUAeIAAg7IAUAAQAGAAAEABQAEACABAEQADAEAAAFQAAAEgCAEQgCADgDABQAFABACADQACAEAAAFQAAAHgDAEQgDAFgEABIgNABgAgKAUIAKAAIAGgBIADgCIABgGQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIgEgDIgHgBIgIAAgAgKgEIAHAAIAFgBIAEgCQACgCAAgDIgBgEIgDgDIgIAAIgGAAg");
	this.shape_9.setTransform(24.5,9.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF9900").s().p("AANAeIgDgOIgTAAIgEAOIgKAAIATg7IAIAAIAUA7gAgFAGIALAAIgGgUg");
	this.shape_10.setTransform(19.3,9.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF9900").s().p("AgDAeIAAgxIgPAAIAAgKIAlAAIAAAKIgOAAIAAAxg");
	this.shape_11.setTransform(15.2,9.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF9900").s().p("AgTAKIAKgBQACALAHAAQAFABACgCQADgDAAgEIgBgDIgDgDIgHgDQgGgCgDgBQgDgBgCgEQgCgEAAgEQAAgFACgEQADgEAEgCQAEgCAEAAQAIAAAFAFQAFAFAAAIIgKABQAAgFgDgCQgCgCgDAAQgDAAgCACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAIAHAEQAHADAEACQADABACADQACAEAAAFQAAAIgFAGQgFAFgKAAQgRAAgCgVg");
	this.shape_12.setTransform(10.7,9.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,153,0,0.753)").s().p("AiTCeQgKgBAAgJIAAkmQAAgKAKAAIEnAAQAKAAAAAKIAAEmQAAAJgKABgAiTCUIEnAAIAAkmIknAAg");
	this.shape_13.setTransform(17.7,17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// text
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3C3C3C").s().p("AAPAeIAAguIgKAuIgIAAIgKguIAAAuIgJAAIAAg7IAOAAIAIAnIAIgnIAPAAIAAA7g");
	this.shape_14.setTransform(23.3,26.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3C3C3C").s().p("AgEAeIAAg7IAIAAIAAA7g");
	this.shape_15.setTransform(19.4,26.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3C3C3C").s().p("AAKAeIgIgNIgCgJIgEgCIgFgCIgCAAIAAAaIgKAAIAAg7IAVAAQAGAAAEACQAEABACAEQACAEAAAGQAAAHgDAFQgEACgHABIAGAGIAGAJIAGAMgAgLgDIAHAAIAHgBIAEgCIABgFIgBgEQgBgBAAAAQgBgBAAAAQgBAAAAgBQAAAAgBAAIgGAAIgIAAg");
	this.shape_16.setTransform(16.1,26.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3C3C3C").s().p("AgDAeIAAgwIgPAAIAAgLIAlAAIAAALIgOAAIAAAwg");
	this.shape_17.setTransform(11.2,26.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAhAAIAAALIgXAAIAAAOIATAAIAAAIIgTAAIAAAag");
	this.shape_18.setTransform(28.8,17.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3C3C3C").s().p("AgQAXQgHgIAAgPQAAgJAEgHQADgHAFgDQAFgEAGAAQAKAAAHAIQAHAJAAANQAAAPgHAIQgHAIgKAAQgJAAgHgIgAgIgPQgEAGAAAJQAAAKAEAGQAEAEAEAAQAFAAAEgEQAEgGAAgKQAAgKgEgFQgDgEgGgBQgFABgDAEg");
	this.shape_19.setTransform(23.9,17.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3C3C3C").s().p("AgDAeIAAgwIgPAAIAAgLIAlAAIAAALIgOAAIAAAwg");
	this.shape_20.setTransform(17.1,17.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3C3C3C").s().p("AgKAcQgEgDgCgFQgCgFAAgOIAAgeIAKAAIAAAfIAAAKQAAAEADACQACACADAAQADAAACgCQADgBABgDIAAgLIAAggIAKAAIAAAdQAAANgBAFQgCAGgEADQgFADgHABQgGgBgEgCg");
	this.shape_21.setTransform(12.4,17.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3C3C3C").s().p("AgQAXQgHgIAAgPQAAgJAEgHQADgHAFgDQAFgEAGAAQAKAAAHAIQAHAJAAANQAAAPgHAIQgHAIgKAAQgJAAgHgIgAgIgPQgEAGAAAJQAAAKAEAGQAEAEAEAAQAFAAAEgEQAEgGAAgKQAAgKgEgFQgDgEgGgBQgFABgDAEg");
	this.shape_22.setTransform(7.2,17.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3C3C3C").s().p("AgUAeIAAg7IAUAAQAGAAAEABQAEACABAEQADAEAAAFQAAAEgCAEQgCADgDABQAFABACADQACAEAAAFQAAAHgDAEQgDAFgEABIgNABgAgKAUIAKAAIAGgBIADgCIABgGQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIgEgDIgHgBIgIAAgAgKgEIAHAAIAFgBIAEgCQACgCAAgDIgBgEIgDgDIgIAAIgGAAg");
	this.shape_23.setTransform(24.5,9.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3C3C3C").s().p("AANAeIgDgOIgTAAIgEAOIgKAAIATg7IAIAAIAUA7gAgFAGIALAAIgGgUg");
	this.shape_24.setTransform(19.3,9.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3C3C3C").s().p("AgDAeIAAgxIgPAAIAAgKIAlAAIAAAKIgOAAIAAAxg");
	this.shape_25.setTransform(15.2,9.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#3C3C3C").s().p("AgTAKIAKgBQACALAHAAQAFABACgCQADgDAAgEIgBgDIgDgDIgHgDQgGgCgDgBQgDgBgCgEQgCgEAAgEQAAgFACgEQADgEAEgCQAEgCAEAAQAIAAAFAFQAFAFAAAIIgKABQAAgFgDgCQgCgCgDAAQgDAAgCACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAIAHAEQAHADAEACQADABACADQACAEAAAFQAAAIgFAGQgFAFgKAAQgRAAgCgVg");
	this.shape_26.setTransform(10.7,9.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#3C3C3C").s().p("AiTCeQgKgBAAgJIAAkmQAAgKAKAAIEnAAQAKAAAAAKIAAEmQAAAJgKABgAiTCUIEnAAIAAkmIknAAg");
	this.shape_27.setTransform(17.7,17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]}).wait(2));

	// base
	this.instance = new lib.GEN_pbbase07("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,-0.8,36.9,36.9);


(lib.APATINDICATORSLeft_speedbrakenotarm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C3C3C").s().p("AAJAeIAAgrIgHArIgEAAIgIgrIAAArIgIAAIAAg7IAPAAIADAdIAFgdIAOAAIAAA7g");
	this.shape.setTransform(40.2,17.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C3C3C").s().p("AAEAeIgEgaIgCAAIAAAaIgLAAIAAg7IAMAAQADAAAEACQAEACADADQABAEAAAGIAAAGIgCAFIgEACIAGAdgAgCgDIACAAIABgBIACgDIABgFQgBgEgBgCQgBgBAAAAQgBAAAAgBQAAAAAAAAQAAAAgBAAIgBAAg");
	this.shape_1.setTransform(35.9,17.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C3C3C").s().p("AAFAeIgCgOIgGAAIgCAOIgJAAIAIg7IAOAAIAHA7gAADAHIgDgaIgCAaIAFAAg");
	this.shape_2.setTransform(31.9,17.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3C3C3C").s().p("AgEAeIAAgxIgJAAIAAgKIAcAAIAAAKIgKAAIAAAxg");
	this.shape_3.setTransform(26.3,17.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3C3C3C").s().p("AAAAfQgEAAgDgDQgEgDgCgHQgBgHAAgLQAAgKABgHQACgHAEgDQADgDAEAAQAFAAADADQAEADABAHQACAHAAAKQAAALgCAHQgBAHgEADQgDADgEAAIgBAAgAgBgTIgBAEIgBAKIAAALIABAKIABAEIABACQAAAAAAAAQABAAAAgBQAAAAAAAAQABAAAAgBIABgEIAAgKIAAgLIAAgKIgBgEQAAgBgBAAQAAAAAAAAQAAgBgBAAQAAAAAAAAIgBACg");
	this.shape_4.setTransform(22.7,17.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3C3C3C").s().p("AAGAeIgKgjIAAAjIgJAAIAAg7IAKAAIAIAeIAAgeIAJAAIAAA7g");
	this.shape_5.setTransform(18.6,17.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3C3C3C").s().p("AAAAfQgEAAgDgDQgDgDgCgHQgCgHAAgLQAAgKACgHQACgHADgDQADgDAEAAQAFAAADADQAEADACAHQABAHAAAKQAAALgBAHQgCAHgEADQgDADgEAAIgBAAgAgBgTIgBAEIAAAKIAAALIAAAKIABAEIABACQAAAAAAAAQABAAAAgBQAAAAAAAAQABAAAAgBIABgEIABgKIAAgLIgBgKIgBgEQAAgBgBAAQAAAAAAAAQAAgBgBAAQAAAAAAAAIgBACg");
	this.shape_6.setTransform(12.5,17.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3C3C3C").s().p("AgOAeIAAg7IAKAAQAFAAAEACQAEADACADQACAEABAGIABALIgBAMQgBAFgCAEQgBAEgEACQgEADgEAAgAgDAUIADAAIACgDIAAgHIABgKIgBgKIAAgGIgCgDIgDAAg");
	this.shape_7.setTransform(8.5,17.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3C3C3C").s().p("AgLAeIAAg7IAXAAIAAAKIgMAAIAAAPIAIAAIAAAIIgIAAIAAAQIAMAAIAAAKg");
	this.shape_8.setTransform(41.5,8.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3C3C3C").s().p("AAFAeIgFgbIAAAAIgEAJIAAASIgLAAIAAg7IALAAIAAAaIABAAIAHgaIAKAAIgIAVIAKAmg");
	this.shape_9.setTransform(37.8,8.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3C3C3C").s().p("AAFAeIgCgOIgHAAIgBAOIgKAAIAJg7IAOAAIAIA7gAACAHIgCgaIgCAaIAEAAg");
	this.shape_10.setTransform(33.8,8.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3C3C3C").s().p("AADAeIgDgaIgDAAIAAAaIgLAAIAAg7IANAAQAEAAADACQAEACACADQACAEABAGIgBAGIgCAFIgEACIAHAdgAgDgDIADAAIABgBIACgDIAAgFQAAgEgBgCQAAgBgBAAQgBAAAAgBQAAAAAAAAQAAAAAAAAIgDAAg");
	this.shape_11.setTransform(30.1,8.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3C3C3C").s().p("AgNAeIAAg7IANAAIAFACQADABADADQACAEAAAGQAAAFgCADQgDAEgFABQAGAAADADQACAEAAAGQAAAFgCAEQgCAEgEACQgDACgDAAgAgDAVIAEgBIACgDIAAgFIAAgFIgCgDIgEgBgAgDgUIAAAQQADAAABgCQABgCABgEIgBgFIgCgCIgBgBIgCAAg");
	this.shape_12.setTransform(26.2,8.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3C3C3C").s().p("AgNAeIAAg7IAJAAQAFAAAEACQAFADACADQACAEAAAGIAAALIAAAMQAAAFgCAEQgCAEgEACQgDADgFAAgAgDAUIADAAIACgDIABgHIAAgKIAAgKIgBgGIgCgDIgDAAg");
	this.shape_13.setTransform(22.1,8.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3C3C3C").s().p("AgLAeIAAg7IAXAAIAAAKIgMAAIAAAPIAIAAIAAAIIgIAAIAAAQIAMAAIAAAKg");
	this.shape_14.setTransform(18.5,8.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3C3C3C").s().p("AgLAeIAAg7IAXAAIAAAKIgMAAIAAAPIAIAAIAAAIIgIAAIAAAQIAMAAIAAAKg");
	this.shape_15.setTransform(15.1,8.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3C3C3C").s().p("AgNAeIAAg7IALAAQAHAAAFAEQAEAFABAJQgBAGgBAEQgBACgEACQgDACgFABIgCAAIAAAYgAgCgBIAAAAIACgBIADgDIABgFIgBgHIgDgCIgCAAIAAAAg");
	this.shape_16.setTransform(11.6,8.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3C3C3C").s().p("AgFAdQgDgBgCgDIgCgGIgBgHIAKAAIAAAEIABAEQABAAAAABQAAAAABAAQAAABAAAAQAAAAAAAAIADgBIABgDIABgCQAAgDgCgDIgDgFIgGgFIgFgEQgCgEAAgFQAAgFABgEQACgEADgCQADgCAEAAQAEAAADACQADADACAEQABAEAAAFIgKAAIAAgDIgBgEQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBABIgBAEQABADABACIAEAFIAFAFQAEABACAEQABAEAAAFQABAFgCAEIgFAGQgDACgFAAQgDAAgCgCg");
	this.shape_17.setTransform(7.7,8.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3C3C3C").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABgAjaBnIG1AAIAAjMIm1AAg");
	this.shape_18.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.GEN_pbbase01("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,47.9,24.4);


(lib.APATINDICATORSLeft_speedbrakearm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C3C3C").s().p("AgNAeIAAg7IAJAAQAFAAAEACQAEADADADQABAEABAGIABALIgBAMQgBAFgBAEQgCAEgEACQgDADgFAAgAgCAUIACAAIACgDIABgHIAAgKIAAgKIgBgGIgCgDIgCAAg");
	this.shape.setTransform(32.6,17.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C3C3C").s().p("AgLAeIAAg7IAXAAIAAAKIgMAAIAAAPIAIAAIAAAIIgIAAIAAAQIAMAAIAAAKg");
	this.shape_1.setTransform(29,17.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C3C3C").s().p("AAJAeIAAgrIgHArIgEAAIgIgrIAAArIgIAAIAAg7IAPAAIADAdIAFgdIAOAAIAAA7g");
	this.shape_2.setTransform(24.6,17.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3C3C3C").s().p("AADAeIgDgaIgDAAIAAAaIgKAAIAAg7IAMAAQAEAAADACQAEACADADQABAEAAAGIAAAGIgCAFIgEACIAGAdgAgDgDIADAAIABgBIACgDIAAgFQAAgEgBgCQgBgBAAAAQgBAAAAgBQAAAAAAAAQAAAAgBAAIgCAAg");
	this.shape_3.setTransform(20.3,17.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3C3C3C").s().p("AAFAeIgCgOIgHAAIgBAOIgJAAIAIg7IAOAAIAHA7gAACAHIgCgaIgDAaIAFAAg");
	this.shape_4.setTransform(16.4,17.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3C3C3C").s().p("AgLAeIAAg7IAXAAIAAAKIgMAAIAAAPIAIAAIAAAIIgIAAIAAAQIAMAAIAAAKg");
	this.shape_5.setTransform(41.5,8.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3C3C3C").s().p("AAFAeIgFgbIAAAAIgEAJIAAASIgLAAIAAg7IALAAIAAAaIABAAIAHgaIAKAAIgIAVIAKAmg");
	this.shape_6.setTransform(37.8,8.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3C3C3C").s().p("AAFAeIgCgOIgHAAIgBAOIgKAAIAJg7IAOAAIAIA7gAACAHIgCgaIgCAaIAEAAg");
	this.shape_7.setTransform(33.8,8.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3C3C3C").s().p("AADAeIgDgaIgDAAIAAAaIgLAAIAAg7IANAAQAEAAADACQAEACACADQACAEABAGIgBAGIgCAFIgEACIAHAdgAgDgDIADAAIABgBIACgDIAAgFQAAgEgBgCQAAgBgBAAQgBAAAAgBQAAAAAAAAQAAAAAAAAIgDAAg");
	this.shape_8.setTransform(30.1,8.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3C3C3C").s().p("AgNAeIAAg7IANAAIAFACQADABADADQACAEAAAGQAAAFgCADQgDAEgFABQAGAAADADQACAEAAAGQAAAFgCAEQgCAEgEACQgDACgDAAgAgDAVIAEgBIACgDIAAgFIAAgFIgCgDIgEgBgAgDgUIAAAQQADAAABgCQABgCABgEIgBgFIgCgCIgBgBIgCAAg");
	this.shape_9.setTransform(26.2,8.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3C3C3C").s().p("AgNAeIAAg7IAJAAQAFAAAEACQAFADACADQACAEAAAGIAAALIAAAMQAAAFgCAEQgCAEgEACQgDADgFAAgAgDAUIADAAIACgDIABgHIAAgKIAAgKIgBgGIgCgDIgDAAg");
	this.shape_10.setTransform(22.1,8.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3C3C3C").s().p("AgLAeIAAg7IAXAAIAAAKIgMAAIAAAPIAIAAIAAAIIgIAAIAAAQIAMAAIAAAKg");
	this.shape_11.setTransform(18.5,8.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3C3C3C").s().p("AgLAeIAAg7IAXAAIAAAKIgMAAIAAAPIAIAAIAAAIIgIAAIAAAQIAMAAIAAAKg");
	this.shape_12.setTransform(15.1,8.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3C3C3C").s().p("AgNAeIAAg7IALAAQAHAAAFAEQAEAFABAJQgBAGgBAEQgBACgEACQgDACgFABIgCAAIAAAYgAgCgBIAAAAIACgBIADgDIABgFIgBgHIgDgCIgCAAIAAAAg");
	this.shape_13.setTransform(11.6,8.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3C3C3C").s().p("AgFAdQgDgBgCgDIgCgGIgBgHIAKAAIAAAEIABAEQABAAAAABQAAAAABAAQAAABAAAAQAAAAAAAAIADgBIABgDIABgCQAAgDgCgDIgDgFIgGgFIgFgEQgCgEAAgFQAAgFABgEQACgEADgCQADgCAEAAQAEAAADACQADADACAEQABAEAAAFIgKAAIAAgDIgBgEQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBABIgBAEQABADABACIAEAFIAFAFQAEABACAEQABAEAAAFQABAFgCAEIgFAGQgDACgFAAQgDAAgCgCg");
	this.shape_14.setTransform(7.7,8.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3C3C3C").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABgAjaBnIG1AAIAAjMIm1AAg");
	this.shape_15.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.GEN_pbbase01("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,47.9,24.4);


(lib.APATINDICATORSLeft_fmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C3C3C").s().p("AgDAeIAAgxIgPAAIAAgKIAlAAIAAAKIgOAAIAAAxg");
	this.shape.setTransform(25.8,25.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C3C3C").s().p("AgTAKIAKgBQACAMAHAAQAFAAACgCQADgDAAgDIgBgEIgDgDIgHgCQgGgCgDgCQgDgBgCgEQgCgDAAgFQAAgFACgEQADgEAEgCQAEgCAEAAQAIAAAFAFQAFAEAAAKIgKAAQAAgFgDgCQgCgBgDgBQgDABgCABQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAIAHAEQAHACAEADQADABACADQACAEAAAGQAAAHgFAFQgFAGgKAAQgRAAgCgVg");
	this.shape_1.setTransform(21.3,25.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C3C3C").s().p("AAKAeIgHgNIgEgJIgDgDIgFgBIgCAAIAAAaIgKAAIAAg7IAVAAQAHAAADACQADACACAEQADADAAAGQAAAIgEADQgDADgHABIAGAFIAGAKIAGAMgAgLgDIAHAAIAIAAIACgDIABgFIgBgEQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAIgGgBIgIAAg");
	this.shape_2.setTransform(16.7,25.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3C3C3C").s().p("AgIAfIAKg9IAHAAIgKA9g");
	this.shape_3.setTransform(13,25.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3C3C3C").s().p("AgSAeIAAg7IARAAQAHAAACABQAFACADAEQADAFAAAHQAAAHgDADQgCADgEACQgEACgHAAIgHAAIAAAXgAgIgBIAGAAIAGgBIADgDQABgCAAgDQAAgDgBgCIgDgDIgHgBIgFAAg");
	this.shape_4.setTransform(9.8,25.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3C3C3C").s().p("AgSAxQgIgGgGgNQgFgNAAgRQAAgRAFgMQAGgNAJgGQAKgGAJAAQANAAAJAIQAJAIAEAPIgLADQgGgWgSAAQgHAAgGAFQgHAEgDAKQgEAJAAAOQAAAVAHALQAIALALAAQAKAAAHgHQAGgHADgNIALADQgDASgKAJQgKAJgOAAQgKAAgJgGg");
	this.shape_5.setTransform(26.6,12.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3C3C3C").s().p("AAfA1IAAhYIgaBYIgIAAIgahZIAABZIgLAAIAAhpIARAAIAVBKIACAQIAFgRIAVhJIAPAAIAABpg");
	this.shape_6.setTransform(17,12.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3C3C3C").s().p("AgcA1IAAhpIA5AAIAAANIgtAAIAAAhIAnAAIAAAKIgnAAIAAAxg");
	this.shape_7.setTransform(8.4,12.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3C3C3C").s().p("AiTCeQgKgBAAgJIAAkmQAAgKAKAAIEnAAQAKAAAAAKIAAEmQAAAJgKABgAiTCUIEnAAIAAkmIknAAg");
	this.shape_8.setTransform(17.7,17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.GEN_pbbase07("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,-0.8,36.9,36.9);


(lib.APATINDICATORSLeft_cabinaltitude = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C3C3C").s().p("AgRAeIAAg7IAiAAIAAALIgYAAIAAANIAXAAIAAAIIgXAAIAAAQIAZAAIAAALg");
	this.shape.setTransform(39.6,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C3C3C").s().p("AgTAeIAAg7IASAAQAFAAADABIAHAGQADADABAHQACAFAAAHQAAAIgCAGIgEAJQgDAEgEABQgEACgDAAgAgJATIAHAAIAFAAQABAAAAgBQABAAAAAAQABgBAAAAQAAAAABgBIACgGIABgKIgBgJQgBgEgCgCQgCgCgDgBIgGAAIgEAAg");
	this.shape_1.setTransform(34.8,17.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C3C3C").s().p("AgKAcQgEgDgCgFQgCgFAAgOIAAgfIAKAAIAAAfIAAAKQAAAEADADQADACACAAQADAAADgBQACgCABgDIAAgMIAAggIAKAAIAAAfQABAMgCAGQgCAFgEADQgFAEgHgBQgGABgEgDg");
	this.shape_2.setTransform(29.6,17.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3C3C3C").s().p("AgDAeIAAgwIgPAAIAAgLIAlAAIAAALIgOAAIAAAwg");
	this.shape_3.setTransform(25,17.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3C3C3C").s().p("AgDAeIAAg7IAIAAIAAA7g");
	this.shape_4.setTransform(21.9,17.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3C3C3C").s().p("AgDAeIAAgwIgPAAIAAgLIAlAAIAAALIgOAAIAAAwg");
	this.shape_5.setTransform(18.8,17.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAKAAIAAAwIAXAAIAAALg");
	this.shape_6.setTransform(15.2,17.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3C3C3C").s().p("AAOAeIgFgOIgRAAIgFAOIgLAAIAUg7IAJAAIAUA7gAgGAGIAMAAIgGgVg");
	this.shape_7.setTransform(10.4,17.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3C3C3C").s().p("AAJAeIgSgmIAAAmIgKAAIAAg7IAKAAIATAnIAAgnIAKAAIAAA7g");
	this.shape_8.setTransform(33.4,8.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3C3C3C").s().p("AgDAeIAAg7IAIAAIAAA7g");
	this.shape_9.setTransform(29.9,8.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3C3C3C").s().p("AgTAeIAAg7IATAAQAGAAAEACQAEABACAEQACADAAAFQAAAFgCADQgCAEgDACQAEAAADADQADAEgBAGQABAGgEAFQgDAEgFABIgMABgAgJATIAJAAIAGAAIADgDIABgFQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIgDgDIgHAAIgIAAgAgJgFIAGAAIAFAAIAFgCQABgCAAgDIgBgEIgDgCIgIAAIgFAAg");
	this.shape_10.setTransform(26.5,8.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3C3C3C").s().p("AANAeIgDgOIgSAAIgFAOIgKAAIATg7IAIAAIAUA7gAgFAGIALAAIgGgVg");
	this.shape_11.setTransform(21.3,8.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3C3C3C").s().p("AgNAYQgHgJAAgPQAAgNAHgJQAGgIAIAAQAIAAAGAGQAEAEACAIIgKADQgBgFgDgDQgDgCgEAAQgDAAgEAEQgDAFAAAKQAAALADAFQAEAEADAAQAEAAADgDQADgCABgIIAKAEQgCALgGAEQgFAFgIAAQgHAAgGgHg");
	this.shape_12.setTransform(16.3,8.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3C3C3C").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABgAjaBnIG1AAIAAjMIm1AAg");
	this.shape_13.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.GEN_pbbase01("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,47.9,24.4);


(lib.APATINDICATORSLeft_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.instance = new lib.GEN_screw03("synched",0);
	this.instance.setTransform(318.7,2.2,1,1,0,0,0,10,10);

	this.instance_1 = new lib.GEN_screw03("synched",0);
	this.instance_1.setTransform(318.7,69.9,1,1,0,0,0,10,10);

	this.instance_2 = new lib.GEN_screw03("synched",0);
	this.instance_2.setTransform(162.9,2.2,1,1,0,0,0,10,10);

	this.instance_3 = new lib.GEN_screw03("synched",0);
	this.instance_3.setTransform(162.9,69.9,1,1,0,0,0,10,10);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#7E8D9A","#4E616D"],[0,1],-0.4,-0.5,0.3,0.2).s().p("AAAAAIgHAAIAEgIIAMAAIAAAMIgJAFg");
	this.shape.setTransform(201.3,5.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#7E8D9A","#4E616D"],[0,1],-0.8,-0.2,-0.2,0.4).s().p("AAAAHIgIAAIAAgHIAIgGIAAAFIAJAAIgGAIg");
	this.shape_1.setTransform(203.1,43.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4E616D").s().p("ADLDDIgJAAIAAgFIAAgFIAAl3IAKgEIAAF6IAAALgAjLDDIAAgFIAAgFIAAl0IAKgFIAAF6IAAAJg");
	this.shape_2.setTransform(221.7,25.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#7E8D9A","#4E616D"],[0,1],0,-0.4,0.5,0.1).s().p("AgBACIgGAAIADgIIADAAIAIAAIAAAJIgIAFg");
	this.shape_3.setTransform(241.4,5.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#7E8D9A","#4E616D"],[0,1],-0.4,0,0.1,0.5).s().p("AgHAIIAAgJIAIgGIAAAHIAHAAIgEAIg");
	this.shape_4.setTransform(243,43.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7E8D9A").s().p("AjLi2IAAgOIAKAAIAAAKIAAF3IAAACIgKAGgADCi4IAAgMIAKAAIAAAJIAAABIAAF2IgKAGg");
	this.shape_5.setTransform(222.7,24);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#7E8D9A","#4E616D"],[0,1],-162.1,52.3,-161.8,53.4).s().p("ADUDJIADgKIF1AAQAFAAAAgFIAAlzQAAgFgFAAIl7AAIAAgBIAAgJIF7AAQAPAAAAAPIAAFzQAAAPgPAAgAC5DJIl0AAIAGgKIFyAAIAAAFIAAAFgApLDJQgNAAgCgLIAAgEIAAlzIAAgEQACgKAJgBIAEAAIF2AAIgEAKIgBAAIlxAAQgFAAAAAFIAAFzQAAAFAFAAIF6AAIAAAFIAAAFgAC2i+IlzAAIAAgKIF2AAIgCAKg");
	this.shape_6.setTransform(222.3,24.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#6C7A88","#5E6D7A"],[0,1],38.5,-13.8,41.3,-11.5).s().p("AAGGLQgKAAgHgEQgVgHABgaIAArLQgBgZAVgJQAHgDAKAAIAaAAIAAAUIgaAAQgRAAAAASIAALJQAAASARAAIAaAAIAAAUg");
	this.shape_7.setTransform(329.3,23.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#7E8D9A","#4E616D"],[0,1],-8.9,-10.3,-7.1,-5.3).s().p("ApVFVQgLgBgIgGIgBgBIioilIAAgBQgFgGgBgIIAAAAIAAkwQAAgHAFgIIABAAICiimQAIgGAMgBIS0AAQAMABAHAGICnCmIAAAAQAFAJABAGIAAEwQgBAGgFAIIAAABIirClQgHAGgMACgApolFIihClQgEAGAAAEIAAEuQAAAFAEAFICnCkQAGAEAIAAISpAAQAIAAAFgEICpikQADgGABgEIAAkuQgBgFgDgFIililQgGgEgIAAIyzAAQgIAAgFAEg");
	this.shape_8.setTransform(233.1,24.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#7E8D9A","#4E616D"],[0,1],-35.5,-3.7,-33.1,3).s().p("ApgF1QgSgBgMgKIiwixIgBAAIAAgBQgIgMAAgLIAAlAQAAgLAIgNIAAgBICxixQANgKARgBITBAAQASABAMAKIABAAIAAABICwCwIAAABQAIANAAALIAAFAQAAALgIAMIAAABIgBAAIivCwIAAABIgBAAQgMALgSAAgApxlaIitCuQgFAHAAAHIAAE+QAAAHAFAGICtCtQAHAGALABITAAAQAKgBAHgGICuitQAEgHABgHIAAk+QgBgFgEgIIiuiuQgHgFgKgBIzBAAQgKABgHAFg");
	this.shape_9.setTransform(233.1,24.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6C7B8A").s().p("ANpF3QgTAAAAgSIAArJQAAgSATAAIAaAAIAALtgAq+FsQgLAAgHgGIitiuQgFgFAAgHIAAk/QAAgGAFgHICtiuQAHgGAKAAITBAAQAKABAHAFICuCuQAEAHABAFIAAE/QgBAGgEAHIiuCuQgHAGgKAAgArNlAIiiClIgBABQgFAIgBAGIAAEwIAAABQACAHAEAHIABABICoCkIABABQAIAGALABISqAAQAMgBAHgGICrilIAAgBQAFgJABgGIAAkwQgBgGgFgIIAAgBIinilQgHgHgMgBIy1AAQgLABgIAHgAqyFWQgIAAgGgFIioikQgDgEAAgGIAAkuQAAgEAEgGIChikQAFgEAIgBISzAAQAIABAGAEIClCkQADAGABAEIAAEuQgBAEgDAGIiqCkQgEAEgIABgAsZi8QgKABgCAKIAAADIAAF0IAAAEQACALANAAIF6AAIAKAAIAKAAIADAAIF1AAIAEAAIAIAAIACAAIALAAIF5AAQAPAAAAgPIAAl0QAAgPgPABIl8AAIgIAAIgKAAIgEAAIl4AAIgKAAIgNAAIl3AAIgDAAgAAMDLIgGAAIAAgHIAAl2IF8AAQAEAAAAAEIAAF0QAAAFgEAAgAmADLIgIAAIAAgEIAAgCIAAl3IF2AAIAAAAIAGAAIAAAGIAAF3gAsWDLQgFAAAAgFIAAl0QAAgEAFAAIFxAAIABAAIAIAAIAAAJIAAF0g");
	this.shape_10.setTransform(242.6,23.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#657381").s().p("ALXLFI7UAAIAA2JIf7AAIAAAhIgaAAQgNAAgHADQgUAIAAAaIAALLQAAAZAUAIQAHAEANAAIAaAAIAAJTgAvRC/IAAAAIAAgBgApjp2IixCxIAAABQgIAMAAALIAAFCQABALAHAMIAAABIABABICwCuQAMAKASABITCAAQARAAAMgLIABAAIAAgBICvitIABgBIABgBQAHgMABgLIAAlCQgBgLgHgMIgBgBIiwixIAAAAIgBAAQgMgLgRgBIzCAAQgRABgNALgAvRoTIAAAAIAAAAg");
	this.shape_11.setTransform(230.3,51.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// fill
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#657381").s().p("A1jLDIAA2FMArHAAAIAAWFgA05DBIACgBIAAgBIAAgCIgBAAIgBgBIgCABIAAABIAAABIAAABIACABgA04oRIABgBIAAgBIAAgCIgCAAIAAAAIgCAAIAAACIAAAAIAAACIACAAIABAAg");
	this.shape_12.setTransform(266.3,51.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(128.1,-19.5,276.3,142);


(lib.APATINDICATORSLeft_at_United = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C3C3C").s().p("AgDAeIAAgxIgPAAIAAgKIAlAAIAAAKIgOAAIAAAxg");
	this.shape.setTransform(25.8,25.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C3C3C").s().p("AgTAKIAKgBQACAMAHAAQAFAAACgCQADgDAAgDIgBgEIgDgDIgHgCQgGgCgDgCQgDgBgCgEQgCgDAAgFQAAgFACgEQADgEAEgCQAEgCAEAAQAIAAAFAFQAFAEAAAKIgKAAQAAgFgDgCQgCgBgDgBQgDABgCABQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAIAHAEQAHACAEADQADABACADQACAEAAAGQAAAHgFAFQgFAGgKAAQgRAAgCgVg");
	this.shape_1.setTransform(21.3,25.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C3C3C").s().p("AAKAeIgHgNIgEgJIgDgDIgFgBIgCAAIAAAaIgKAAIAAg7IAVAAQAHAAADACQADACACAEQADADAAAGQAAAIgEADQgDADgHABIAGAFIAGAKIAGAMgAgLgDIAHAAIAIAAIACgDIABgFIgBgEQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAIgGgBIgIAAg");
	this.shape_2.setTransform(16.7,25.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3C3C3C").s().p("AgIAfIAKg9IAHAAIgKA9g");
	this.shape_3.setTransform(13,25.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3C3C3C").s().p("AgSAeIAAg7IARAAQAHAAACABQAFACADAEQADAFAAAHQAAAHgDADQgCADgEACQgEACgHAAIgHAAIAAAXgAgIgBIAGAAIAGgBIADgDQABgCAAgDQAAgDgBgCIgDgDIgHgBIgFAAg");
	this.shape_4.setTransform(9.8,25.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3C3C3C").s().p("AgFA1IAAhcIgdAAIAAgNIBFAAIAAANIgeAAIAABcg");
	this.shape_5.setTransform(23.5,12.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3C3C3C").s().p("AgQA3IAYhtIAJAAIgYBtg");
	this.shape_6.setTransform(18,12.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3C3C3C").s().p("AAbA1IgKggIgjAAIgKAgIgMAAIAihpIALAAIAkBpgAgFgUIgKAdIAcAAIgJgcQgEgNAAgJIgFAVg");
	this.shape_7.setTransform(12.2,12.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3C3C3C").s().p("AiTCeQgKgBAAgJIAAkmQAAgKAKAAIEnAAQAKAAAAAKIAAEmQAAAJgKABgAiTCUIEnAAIAAkmIknAAg");
	this.shape_8.setTransform(17.7,17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.GEN_pbbase07("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,-0.8,36.9,36.9);


(lib.APATINDICATORSLeft_ap_United = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C3C3C").s().p("AgDAeIAAgxIgPAAIAAgKIAlAAIAAAKIgOAAIAAAxg");
	this.shape.setTransform(25.8,25.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C3C3C").s().p("AgTAKIAKgBQACAMAHAAQAFAAACgCQADgDAAgDIgBgEIgDgDIgHgCQgGgCgDgCQgDgBgCgEQgCgDAAgFQAAgFACgEQADgEAEgCQAEgCAEAAQAIAAAFAFQAFAEAAAKIgKAAQAAgFgDgCQgCgBgDgBQgDABgCABQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAIAHAEQAHACAEADQADABACADQACAEAAAGQAAAHgFAFQgFAGgKAAQgRAAgCgVg");
	this.shape_1.setTransform(21.3,25.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C3C3C").s().p("AAKAeIgHgNIgEgJIgDgDIgFgBIgCAAIAAAaIgKAAIAAg7IAVAAQAHAAADACQADACACAEQADADAAAGQAAAIgEADQgDADgHABIAGAFIAGAKIAGAMgAgLgDIAHAAIAIAAIACgDIABgFIgBgEQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAIgGgBIgIAAg");
	this.shape_2.setTransform(16.7,25.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3C3C3C").s().p("AgIAfIAKg9IAHAAIgKA9g");
	this.shape_3.setTransform(13,25.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3C3C3C").s().p("AgSAeIAAg7IARAAQAHAAACABQAFACADAEQADAFAAAHQAAAHgDADQgCADgEACQgEACgHAAIgHAAIAAAXgAgIgBIAGAAIAGgBIADgDQABgCAAgDQAAgDgBgCIgDgDIgHgBIgFAAg");
	this.shape_4.setTransform(9.8,25.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3C3C3C").s().p("AggA1IAAhpIAgAAQALAAAGACQAHADAEAHQAFAIAAALQAAAOgHAHQgHAKgTAAIgVAAIAAArgAgVgBIAWAAQAKAAAFgFQAFgFAAgKQAAgGgCgFQgDgEgDgCQgEgBgJAAIgVAAg");
	this.shape_5.setTransform(23.7,12.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3C3C3C").s().p("AgQA3IAYhtIAJAAIgYBtg");
	this.shape_6.setTransform(17.7,12.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3C3C3C").s().p("AAbA1IgKggIgjAAIgKAgIgMAAIAihpIALAAIAkBpgAgFgUIgKAdIAcAAIgJgcQgEgNAAgJIgFAVg");
	this.shape_7.setTransform(11.9,12.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3C3C3C").s().p("AiTCeQgKgBAAgJIAAkmQAAgKAKAAIEnAAQAKAAAAAKIAAEmQAAAJgKABgAiTCUIEnAAIAAkmIknAAg");
	this.shape_8.setTransform(17.7,17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.GEN_pbbase07("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,-0.8,36.9,36.9);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.LIGHTSPanel("synched",0);
	this.instance.setTransform(253.1,27.8,1,1,0,0,0,357.8,-88.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Layer 2
	this.instance_1 = new lib.APATINDICATORSLeft_cabinaltitude("synched",0);
	this.instance_1.setTransform(86,133.9,1.092,1.106,0,0,0,24.9,13.2);

	this.instance_2 = new lib.APATINDICATORSLeft_takeoffconfig("synched",0);
	this.instance_2.setTransform(31.4,133.9,1.092,1.106,0,0,0,24.9,13.2);

	this.instance_3 = new lib.APATINDICATORSLeft_ap_United("synched",0);
	this.instance_3.setTransform(67,43.9,1.092,1.106,0,0,0,24.9,13.2);

	this.instance_4 = new lib.APATINDICATORSLeft_at_United("synched",0);
	this.instance_4.setTransform(110.7,43.9,1.092,1.106,0,0,0,24.9,13.2);

	this.instance_5 = new lib.APATINDICATORSLeft_fmc("synched",0);
	this.instance_5.setTransform(154.3,43.9,1.092,1.106,0,0,0,24.9,13.2);

	this.instance_6 = new lib.APATINDICATORSLeft_stabcopy("synched",0);
	this.instance_6.setTransform(207.3,116.8,1.092,1.106,0,0,0,24.9,13.1);

	this.instance_7 = new lib.GEN_switch06center("synched",0);
	this.instance_7.setTransform(175.2,48.5,1.092,1.106);

	this.instance_8 = new lib.GEN_switchbase07("synched",0);
	this.instance_8.setTransform(182.4,49.1,1.092,1.106,0,0,0,18.5,18.6);

	this.instance_9 = new lib.APATINDICATORSLeft_speedbrakearm("synched",0);
	this.instance_9.setTransform(140.5,106.2,1.092,1.106,0,0,0,24.9,13.1);

	this.instance_10 = new lib.APATINDICATORSLeft_speedbrakenotarm("synched",0);
	this.instance_10.setTransform(140.5,133.9,1.092,1.106,0,0,0,24.9,13.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNAjQgFgBAAgFIAAgCQgBgIAFgIQADgHALgHIAFgGQAEgEAAgDQAAgDgCgDQgEgDgDAAQgHAAgBAHQAAAAgBAAQAAABAAAAQAAAAAAABQgBAAAAAAIgDABQgEAAAAgDIAAgBQAAgGAFgFQAFgEAHAAQAIAAAFAEQAFAGAAAIQAAAIgHAHIgNAKQgGAGgBALIAaAAQACAAAAAEIAAADIgCACg");
	this.shape.setTransform(192.1,64.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AABAfIAAg3IgHAAQgDAAAAgFQAAgEAEgBIALAAIADABQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAAAIAAA+IgCACIgDABQgEAAAAgEg");
	this.shape_1.setTransform(191,31.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgDAfIAAg3IgPAAIgDgCIgBgDQAAgEAEAAIAlAAQAEAAAAAEQAAAEgEABIgPAAIAAA3IgBACIgDABQgDAAAAgDg");
	this.shape_2.setTransform(182.3,76.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTAaIgDgHQgBgEAEgCQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAIADACQAAAFAEADIAIADQAFABADgCQAGgCABgFQAAgGgCgCQgCgEgKgEIgIgCIgGgCQgFgCgBgEQgBgFAAgGQACgIAHgEQAEgDAFAAIAJABQAEAAAEAFQAEAEAAADQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAIgDADIgEgBIgCgCQgBgFgGgCQgFgCgEACQgFADgBAFQAAAHAIABQAXAIADAJIABAGIgBAFQgBAIgIAEQgFACgIABQgOgBgFgIg");
	this.shape_3.setTransform(177,76.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVAiIAAhDIAnAAQAEAAAAAEQAAAFgEAAIgeAAIAAAPIAZAAIACABIABAEIgBADQAAAAgBABQAAAAAAAAQAAAAgBAAQAAAAgBAAIgYAAIAAAYIAeAAQAEABAAAFQAAAFgEgBg");
	this.shape_4.setTransform(171.4,76.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgDAfIAAg3IgPAAIgDgCIgBgDQAAgEAEAAIAlAAQAEAAAAAEQAAAEgEABIgPAAIAAA3IgBACIgDABQgDAAAAgDg");
	this.shape_5.setTransform(165.7,76.9);

	this.instance_11 = new lib.APATINDICATORSLeft_base("synched",0);
	this.instance_11.setTransform(-139.8,21.6,1.092,1.106);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,301.6,157);


// stage content:
(lib.dif05stsp52_01 = function(mode,startPosition,loop) {
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
	this.frame_252 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(252).call(this.frame_252).wait(1));

	// prot
	this.prot = new lib.prot();
	this.prot.setTransform(500,275,1,1,0,0,0,500,275);

	this.timeline.addTween(cjs.Tween.get(this.prot).wait(253));

	// text
	this.instance = new lib.Symbol5("synched",0);
	this.instance.setTransform(474.4,212.5,1,1,0,0,0,391.5,21.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(171).to({_off:false},0).to({alpha:1},5).wait(77));

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIAJIAAgQIAQAAIAAAQg");
	this.shape.setTransform(865.3,139.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdA6QgNgJgHgQQgGgQAAgRQgBgTAIgQQAIgOAOgIQAOgIAPAAQAUAAANAKQANAKAFASIgRADQgEgOgIgGQgJgHgNAAQgNABgKAGQgKAIgEAMQgEAMAAAMQAAAPAFAMQAEANALAFQAKAHAJAAQAPAAAKgJQAKgIADgQIARAEQgFAVgOALQgOALgUAAQgTAAgNgIg");
	this.shape_1.setTransform(856.4,134.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdA6QgNgJgHgQQgHgQAAgRQAAgTAIgQQAIgOAOgIQAOgIAQAAQASAAAOAKQANAKAFASIgQADQgFgOgJgGQgIgHgNAAQgNABgKAGQgKAIgEAMQgEAMAAAMQAAAPAFAMQAFANAJAFQALAHAKAAQAOAAAKgJQAKgIADgQIASAEQgGAVgOALQgOALgUAAQgTAAgNgIg");
	this.shape_2.setTransform(843.4,134.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgqBAIAAh/IBVAAIAAAQIhEAAIAAAnIA7AAIAAAOIg7AAIAAA6g");
	this.shape_3.setTransform(831.6,134.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgNAAQgIAAgIAHg");
	this.shape_4.setTransform(815.7,136);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgFQgGgGgJAAQgFAAgGAEQgHADgCAHQgDAEAAALIAAAzIgPAAIAAh/IAPAAIAAAuQAMgMAOAAQAKAAAIADQAIAEADAIQADAHAAAMIAAA7g");
	this.shape_5.setTransform(805.8,134.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_6.setTransform(798.3,134.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgMIAOAAIAAgKQAAgKACgEQACgHAGgDQADgEALAAIAPACIgCANIgKgBQgHAAgDAEQgDADAAAIIAAAJIASAAIAAAMIgSAAIAABPg");
	this.shape_7.setTransform(788.7,134.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_8.setTransform(780.7,136);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgVAMgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAIAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgLAAQgJAAgIAHg");
	this.shape_9.setTransform(765.7,136);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgGgEgFAAQgGAAgCADQgDADgDAGQgCAIAAAKIAAAvg");
	this.shape_10.setTransform(758.5,135.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_11.setTransform(749.7,136.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_12.setTransform(742.7,134.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgHBAIAAhbIAOAAIAABbgAgHgtIAAgSIAOAAIAAASg");
	this.shape_13.setTransform(738.8,134.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQAEAEAAAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAHgEAEgHQACgFAAgLIAAgFQgIADgPACg");
	this.shape_14.setTransform(731.7,136);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgMIAOAAIAAgKQAAgKACgEQACgHAGgDQADgEALAAIAPACIgDANIgJgBQgHAAgDAEQgDADAAAIIAAAJIASAAIAAAMIgSAAIAABPg");
	this.shape_15.setTransform(724.7,134.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_16.setTransform(714.7,134.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHADgGQADgGAFgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgGAEQgFAEgCAKIgQgCQACgKAFgGQAFgHAJgDQAJgDALAAQALAAAIADQAHACAEAFQADAEABAGIACAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgCADgBAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgPACg");
	this.shape_17.setTransform(707.7,136);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgHBAIAAhbIAOAAIAABbgAgHgtIAAgSIAOAAIAAASg");
	this.shape_18.setTransform(700.8,134.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_19.setTransform(696.3,134.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAGAAQAHAAAJAFIgFAPQgGgEgGAAQgFAAgDADQgEADgCAGQgCAIAAAKIAAAvg");
	this.shape_20.setTransform(691.5,135.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAJgDIAAgEQAAgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAEAEACAGIABAPIAAATQAAAWABAGQAAAGADAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgQACg");
	this.shape_21.setTransform(682.7,136);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgnBBIAAh/IAPAAIAAAMQAEgHAHgEQAGgDAIAAQAMAAAIAGQAKAGAEALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgGAAgHgDQgHgDgEgFIAAAtgAgRgqQgIAJAAASQAAAQAIAJQAHAIAKAAQAIAAAJgJQAGgIAAgRQAAgSgGgJQgIgJgJAAQgKAAgHAKg");
	this.shape_22.setTransform(673,137.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AghApQgIgIgBgLQAAgHADgGQAEgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQACgKAFgGQAFgHAJgDQAKgDAJAAQAMAAAIADQAHACADAFQAFAEABAGIAAAPIAAATQAAAWABAGQABAGAEAFIgRAAQgCgFgBgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgDAFQgJACgEACQgEABgDAEQgBADAAAEQAAAHAEAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQADgFgBgLIAAgFQgIADgQACg");
	this.shape_23.setTransform(657.7,136);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgMgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_24.setTransform(642.7,136);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_25.setTransform(635.3,134.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHADgGQACgGAGgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQAMAAAHADQAHACADAFQAEAEACAGIABAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgQACg");
	this.shape_26.setTransform(627.7,136);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_27.setTransform(618.5,136);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgHBAIAAhbIAOAAIAABbgAgHgtIAAgSIAOAAIAAASg");
	this.shape_28.setTransform(611.8,134.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgLAAgPQAAgNAFgKQAEgLAKgHQAJgFALAAQAHgBAGAEQAHAEAEAFIAAguIAQAAIAAB/IgPAAIAAgMQgIAOgRAAQgKAAgJgGgAgPgJQgIAJABAQQAAASAHAJQAHAJAJAAQAKAAAIgJQAGgIAAgSQAAgRgGgJQgIgJgLAAQgJAAgGAJg");
	this.shape_29.setTransform(604.4,134.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_30.setTransform(594.7,135.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgGBAIAAhbIANAAIAABbgAgGgtIAAgSIANAAIAAASg");
	this.shape_31.setTransform(587.8,134.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_32.setTransform(575.7,136);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_33.setTransform(568.3,134.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgeAkQgLgNAAgXQAAgVALgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgLAAQgJAAgIAHg");
	this.shape_34.setTransform(555.7,136);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_35.setTransform(548.3,134.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AghApQgIgIgBgLQAAgHADgGQAEgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQACgKAFgGQAFgHAJgDQAKgDAJAAQAMAAAIADQAHACADAFQAFAEABAGIAAAPIAAATQAAAWABAGQABAGAEAFIgRAAQgCgFgBgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgDAFQgJACgEACQgEABgDAEQgBADAAAEQAAAHAEAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQADgFgBgLIAAgFQgIADgQACg");
	this.shape_36.setTransform(540.7,136);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_37.setTransform(530.7,135.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgGBAIAAhbIANAAIAABbgAgGgtIAAgSIANAAIAAASg");
	this.shape_38.setTransform(523.8,134.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_39.setTransform(514.3,135.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_40.setTransform(501.7,136.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgGBAIAAh/IAOAAIAAB/g");
	this.shape_41.setTransform(494.7,134.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_42.setTransform(490.7,134.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgHBAIAAhbIAOAAIAABbgAgHgtIAAgSIAOAAIAAASg");
	this.shape_43.setTransform(486.8,134.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgGBAIAAh/IAOAAIAAB/g");
	this.shape_44.setTransform(477.7,134.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_45.setTransform(473.7,134.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgGBAIAAhbIANAAIAABbgAgGgtIAAgSIANAAIAAASg");
	this.shape_46.setTransform(469.8,134.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AASAuIgPg2IgDgQIgSBGIgQAAIgdhbIARAAIAPA0IAFAUIAFgTIAPg1IAOAAIAOA0IAFASIAFgSIAQg0IAQAAIgeBbg");
	this.shape_47.setTransform(461.2,136);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_48.setTransform(447.3,134.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAWBAIAAg7QgBgKgFgFQgEgGgKAAQgFAAgGAEQgGADgDAHQgDAEAAALIAAAzIgPAAIAAh/IAPAAIAAAuQAMgMAOAAQALAAAHADQAIAEADAIQAEAHgBAMIAAA7g");
	this.shape_49.setTransform(439.8,134.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgaA7QgLgIAAgPIAQACQABAHAEAEQAGAEAKAAQAJAAAGgEQAGgFACgIQABgEAAgQQgKAMgOAAQgSAAgLgOQgLgOAAgRQABgNAEgMQAFgLAJgGQAJgGAMAAQAPAAALANIAAgLIAOAAIAABPQABAVgFAKQgFAJgJAFQgJAFgNAAQgRAAgJgHgAgQgrQgHAIAAARQAAASAHAHQAHAIAJAAQALAAAIgIQAHgHAAgSQAAgRgIgIQgHgJgLAAQgJAAgHAJg");
	this.shape_50.setTransform(429.5,137.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgHBAIAAhbIAOAAIAABbgAgHgtIAAgSIAOAAIAAASg");
	this.shape_51.setTransform(422.8,134.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_52.setTransform(418.7,134.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAtBAIAAhqIgmBqIgNAAIglhsIAABsIgRAAIAAh/IAaAAIAeBZIAEATIAHgUIAfhYIAXAAIAAB/g");
	this.shape_53.setTransform(404.3,134.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_54.setTransform(394.3,134.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAjBAIgRgbIgMgSIgHgIIgIgDIgJgBIgUAAIAAA5IgRAAIAAh/IA3AAQARAAAJADQAJAEAGAJQAFAJAAALQAAANgJAJQgJAIgSADQAGADAEADQAHAGAHALIAWAjgAgmgGIAlAAQAJAAAHgDQAGgCAEgFQADgGAAgFQAAgKgGgGQgHgFgOAAIgnAAg");
	this.shape_55.setTransform(385.8,134.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgHBAIAAhvIgrAAIAAgQIBlAAIAAAQIgrAAIAABvg");
	this.shape_56.setTransform(373.3,134.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgqBAIAAh/IBVAAIAAAQIhEAAIAAAnIA7AAIAAAOIg7AAIAAA6g");
	this.shape_57.setTransform(357.9,134.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgfA6QgOgKgIgOQgHgQAAgRQAAgeARgSQARgSAaAAQARAAAPAJQAOAIAIAPQAHAPAAASQAAATgIAQQgIAPgOAJQgPAHgQAAQgRAAgOgIgAgdgmQgNAMAAAbQAAAYAMANQANAOARAAQATAAAMgOQANgNAAgZQAAgOgGgMQgFgMgKgGQgLgHgMAAQgQAAgNANg");
	this.shape_58.setTransform(345.1,134.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgHBAIAAhvIgrAAIAAgQIBlAAIAAAQIgrAAIAABvg");
	this.shape_59.setTransform(328,134.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgcA7QgLgGgFgMQgFgMAAgVIAAhIIARAAIAABIQAAARADAIQADAIAIAEQAHAFALAAQARAAAIgIQAIgJAAgZIAAhIIARAAIAABIQAAAUgEAMQgFALgLAHQgLAHgTAAQgQAAgMgGg");
	this.shape_60.setTransform(316,134.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgfA6QgOgKgIgOQgHgQAAgRQAAgeARgSQARgSAaAAQARAAAPAJQAOAIAIAPQAHAPAAASQAAATgIAQQgIAPgOAJQgPAHgQAAQgRAAgOgIgAgdgmQgNAMAAAbQAAAYAMANQANAOARAAQATAAAMgOQANgNAAgZQAAgOgGgMQgFgMgKgGQgLgHgMAAQgQAAgNANg");
	this.shape_61.setTransform(302.5,134.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgvBAIAAh/IAvAAQAOAAAJAEQAJAEAFAIQAFAIAAAJQAAAJgEAGQgFAIgJAFQAMACAGAHQAGAIAAALQAAAJgEAIQgDAJgGADQgGAEgIADQgJACgMAAgAgeAxIAeAAIAMgBQAGgBAEgDQADgCADgFQADgEAAgHQAAgGgEgGQgEgFgGgCQgHgCgKAAIgeAAgAgegJIAcAAQAJAAAFgBQAHgCADgFQADgEAAgHQAAgHgDgEQgDgFgGgCQgFgBgMAAIgaAAg");
	this.shape_62.setTransform(284.7,134.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAoBAIgOgnIg0AAIgPAnIgSAAIAyh/IAQAAIA1B/gAgHgZIgPAkIAqAAIgNgiIgHgbQgDANgEAMg");
	this.shape_63.setTransform(272.5,134.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgHBAIAAhvIgrAAIAAgQIBlAAIAAAQIgrAAIAABvg");
	this.shape_64.setTransform(262.4,134.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgYA9QgMgFgHgKQgGgKgBgNIAQgCQACAKAEAGQAEAHAJADQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgFQgEgEgIgDIgVgGQgRgFgHgBQgKgGgEgHQgFgHAAgIQAAgLAGgHQAFgJALgFQALgEAMAAQANAAALAEQALAFAGAJQAGAJAAALIgQABQgCgMgHgGQgIgGgOAAQgOAAgHAFQgHAGAAAJQAAAGAFAFQAFAEASAFQAVAFAIADQALAEAGAHQAFAIAAAKQAAALgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape_65.setTransform(250.8,134.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_66.setTransform(234.8,136);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAWBAIAAg7QAAgKgGgFQgEgGgKAAQgFAAgHAEQgFADgDAHQgDAEAAALIAAAzIgQAAIAAh/IAQAAIAAAuQALgMAPAAQALAAAHADQAIAEADAIQAEAHAAAMIAAA7g");
	this.shape_67.setTransform(224.9,134.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_68.setTransform(217.4,134.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgIAOQAFgCACgEQABgEAAgGIgHAAIAAgSIAQAAIAAASQAAAIgEAGQgDAGgFADg");
	this.shape_69.setTransform(207.3,141);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_70.setTransform(200.3,136);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_71.setTransform(193.4,134.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_72.setTransform(185.8,136);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_73.setTransform(175.8,135.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AATBAIgdgwIgLALIAAAlIgQAAIAAh/IAQAAIAABHIAjgjIAUAAIgiAhIAmA6g");
	this.shape_74.setTransform(166.9,134.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgcA0QgNgQAAgkQABgVAEgOQAFgOAJgIQAJgHANAAQAKAAAIAEQAHAEAFAIQAFAIADALQADAMAAARQABAWgFAOQgFAOgJAIQgJAHgOAAQgRAAgLgNgAgQgqQgIAMAAAeQAAAfAHALQAIAKAJAAQAKAAAIgKQAHgLAAgfQAAgegHgLQgIgKgKAAQgJAAgHAJg");
	this.shape_75.setTransform(151.8,134.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgcA3QgLgKgCgQIAQgCQADAOAGAFQAHAGAJAAQAKAAAHgIQAIgHAAgMQAAgKgHgIQgHgHgLAAQgDAAgGACIABgMIADAAQAIAAAIgFQAIgGAAgKQAAgJgGgGQgGgFgHgBQgJABgGAFQgHAGgBAMIgQgDQADgQAKgIQAKgKAQABQAIAAAJAEQAJAEAFAJQAEAHAAAJQAAAJgEAGQgFAHgIAEQALADAGAGQAHAJAAAMQAAARgNALQgMANgRAAQgRAAgLgLg");
	this.shape_76.setTransform(141.8,134.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AASAuIgPg2IgDgQIgSBGIgQAAIgdhbIARAAIAPA0IAFAUIAFgTIAPg1IAOAAIAOA0IAFASIAFgSIAQg0IAPAAIgdBbg");
	this.shape_77.setTransform(125.3,136);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_78.setTransform(113.8,136);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgGBAIAAh/IAOAAIAAB/g");
	this.shape_79.setTransform(106.8,134.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgLAAQgKAAgHAHg");
	this.shape_80.setTransform(99.8,136);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgYAzIAAAMIgPAAIAAh/IAQAAIAAAuQAKgMANAAQAJgBAIAEQAHADAFAHQAFAGADAJQADAHAAAKQAAAYgMANQgMANgQAAQgPAAgJgOgAgRgJQgHAJAAAPQAAASAEAHQAIAMAMAAQAJAAAHgJQAIgJAAgSQAAgQgHgJQgIgJgJAAQgJAAgIAJg");
	this.shape_81.setTransform(90.1,134.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_82.setTransform(859.3,116.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgHBAIAAhbIAOAAIAABbgAgHgsIAAgTIAOAAIAAATg");
	this.shape_83.setTransform(852.9,115.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgTA7QgKgGgFgLQgFgMAAgNQAAgPAFgJQAFgLAJgHQAJgFALgBQAHAAAGAEQAHAEAFAGIAAgvIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgQgIQgHAIAAARQAAASAIAIQAHAJAJAAQAKAAAHgIQAIgJAAgSQgBgRgHgIQgHgKgLABQgJgBgHAKg");
	this.shape_84.setTransform(840.5,115.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_85.setTransform(830.8,116.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgdAkQgMgNgBgXQABgVAMgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAIAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_86.setTransform(820.8,116.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgnBBIAAh/IAOAAIAAAMQAGgHAGgEQAGgDAHAAQAMAAAKAGQAIAGAFALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgGAAgHgDQgGgDgFgFIAAAtgAgRgqQgIAJAAASQAAAQAHAJQAIAIAKAAQAIAAAIgJQAIgIAAgRQAAgSgIgJQgHgJgJAAQgKAAgHAKg");
	this.shape_87.setTransform(811.1,118.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_88.setTransform(801.3,116.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgTA7QgKgGgFgLQgFgMAAgNQAAgPAFgJQAFgLAJgHQAJgFALgBQAHAAAGAEQAHAEAFAGIAAgvIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgQgIQgHAIAAARQAAASAIAIQAHAJAJAAQAKAAAHgIQAIgJAAgSQgBgRgHgIQgHgKgLABQgJgBgHAKg");
	this.shape_89.setTransform(786.5,115.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_90.setTransform(776.8,116.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_91.setTransform(766.8,117);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_92.setTransform(756.8,116.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAJAAAIAFIgFAPQgHgEgFAAQgFAAgDADQgDADgCAGQgDAIAAAKIAAAvg");
	this.shape_93.setTransform(749.6,116.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgbA7QgKgIAAgPIAQACQABAHAEAEQAGAEAKAAQAKAAAFgEQAGgFADgIQAAgEAAgQQgKAMgOAAQgSAAgLgOQgKgOAAgRQgBgNAFgMQAFgLAJgGQAJgGAMAAQAPAAALANIAAgLIAPAAIAABPQgBAVgEAKQgEAJgKAFQgJAFgNAAQgQAAgLgHgAgQgrQgIAIABARQgBASAIAHQAHAIAJAAQALAAAHgIQAIgHAAgSQAAgRgIgIQgIgJgKAAQgJAAgHAJg");
	this.shape_94.setTransform(740.6,118.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgMgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgLAAQgJAAgIAHg");
	this.shape_95.setTransform(725.8,116.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgFQgGgGgJAAQgFAAgGAEQgHADgCAGQgDAFAAALIAAAzIgPAAIAAh/IAPAAIAAAvQAMgOAOAAQAKABAIAEQAIADADAIQADAHAAAMIAAA7g");
	this.shape_96.setTransform(715.9,115.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgBA9QgFgDgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAHABACQAAABABAAQAAAAAAABQAAAAABABQAAAAABAAIAFACIAHgBIACAOIgMABQgIAAgDgCg");
	this.shape_97.setTransform(708.4,115.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgMAAgNQAAgPAFgJQAFgLAJgHQAJgFALgBQAHAAAGAEQAHAEAFAGIAAgvIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgPgIQgIAIAAARQABASAHAIQAIAJAIAAQAKAAAIgIQAGgJABgSQgBgRgGgIQgIgKgLABQgIgBgHAKg");
	this.shape_98.setTransform(695.5,115.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_99.setTransform(685.8,116.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHADgGQADgGAGgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACADAFQAFAEABAGIAAAPIAAATQAAAWABAGQABAGAEAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgDAFQgJACgEACQgEABgDAEQgBADAAAEQAAAHAEAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgQACg");
	this.shape_100.setTransform(675.8,116.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgTA7QgKgGgFgLQgFgMAAgNQAAgPAFgJQAFgLAJgHQAJgFALgBQAHAAAGAEQAHAEAFAGIAAgvIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgQgIQgHAIAAARQAAASAIAIQAHAJAJAAQAKAAAHgIQAIgJAAgSQgBgRgHgIQgHgKgLABQgJgBgHAKg");
	this.shape_101.setTransform(660.5,115.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_102.setTransform(650.8,116.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_103.setTransform(640.8,117);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_104.setTransform(630.8,116.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAJAAAIAFIgFAPQgHgEgFAAQgFAAgDADQgDADgCAGQgDAIAAAKIAAAvg");
	this.shape_105.setTransform(623.6,116.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgbA7QgKgIAAgPIAQACQABAHAEAEQAGAEAKAAQAKAAAFgEQAGgFADgIQAAgEAAgQQgKAMgOAAQgSAAgLgOQgKgOAAgRQgBgNAFgMQAFgLAJgGQAJgGAMAAQAPAAALANIAAgLIAPAAIAABPQgBAVgEAKQgEAJgKAFQgJAFgNAAQgQAAgLgHgAgQgrQgIAIABARQgBASAIAHQAHAIAJAAQALAAAHgIQAIgHAAgSQAAgRgIgIQgIgJgKAAQgJAAgHAJg");
	this.shape_106.setTransform(614.6,118.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgMgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgLAAQgJAAgIAHg");
	this.shape_107.setTransform(599.8,116.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgFQgGgGgJAAQgFAAgGAEQgHADgCAGQgDAFAAALIAAAzIgPAAIAAh/IAPAAIAAAvQAMgOAOAAQAKABAIAEQAIADADAIQADAHAAAMIAAA7g");
	this.shape_108.setTransform(589.9,115.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgBA9QgFgDgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAHABACQAAABABAAQAAAAAAABQAAAAABABQAAAAABAAIAFACIAHgBIACAOIgMABQgIAAgDgCg");
	this.shape_109.setTransform(582.4,115.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_110.setTransform(569.8,116.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_111.setTransform(559.8,116.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_112.setTransform(544.8,116.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgIAAgIAHg");
	this.shape_113.setTransform(534.8,116.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgFQgGgGgJAAQgFAAgHAEQgGADgCAGQgDAFAAALIAAAzIgQAAIAAh/IAQAAIAAAvQALgOAPAAQALABAHAEQAIADADAIQADAHABAMIAAA7g");
	this.shape_114.setTransform(524.9,115.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AASAuIgPg2IgDgQIgSBGIgQAAIgdhbIARAAIAPA0IAFAUIAFgTIAPg1IAOAAIAOA0IAFASIAFgSIAQg0IAPAAIgdBbg");
	this.shape_115.setTransform(513.3,116.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgIAOQAFgCADgEQAAgEAAgGIgHAAIAAgSIAQAAIAAASQAAAIgEAGQgDAGgGADg");
	this.shape_116.setTransform(499.3,121.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgBA9QgFgDgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAHABACQAAABABAAQAAAAAAABQAAAAABABQAAAAABAAIAFACIAHgBIACAOIgMABQgIAAgDgCg");
	this.shape_117.setTransform(494.4,115.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AAWBAIAAg7QAAgKgGgFQgEgGgKAAQgFAAgHAEQgFADgDAGQgDAFAAALIAAAzIgQAAIAAh/IAQAAIAAAvQALgOAPAAQAKABAIAEQAIADADAIQAEAHAAAMIAAA7g");
	this.shape_118.setTransform(486.9,115.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgaA7QgLgIABgPIAPACQABAHAEAEQAGAEAKAAQAJAAAHgEQAFgFADgIQABgEAAgQQgLAMgOAAQgTAAgKgOQgLgOAAgRQAAgNAFgMQAFgLAJgGQAKgGALAAQAQAAAKANIAAgLIAPAAIAABPQAAAVgFAKQgFAJgJAFQgKAFgMAAQgQAAgKgHgAgQgrQgIAIAAARQAAASAIAHQAHAIAJAAQALAAAHgIQAIgHAAgSQAAgRgIgIQgIgJgKAAQgJAAgHAJg");
	this.shape_119.setTransform(476.6,118.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgGBAIAAhbIANAAIAABbgAgGgsIAAgTIANAAIAAATg");
	this.shape_120.setTransform(469.9,115.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgGBAIAAh/IANAAIAAB/g");
	this.shape_121.setTransform(465.8,115.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgMIAOAAIAAgKQAAgKACgEQACgGAGgEQAEgEAKAAIAPACIgDANIgJgBQgHAAgDADQgDAEAAAIIAAAJIASAAIAAAMIgSAAIAABPg");
	this.shape_122.setTransform(461.8,115);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_123.setTransform(448.8,116.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgGBAIAAhbIANAAIAABbgAgGgsIAAgTIANAAIAAATg");
	this.shape_124.setTransform(441.9,115.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgMAAgNQAAgPAFgJQAFgLAJgHQAJgFALgBQAHAAAHAEQAGAEAFAGIAAgvIAPAAIAAB/IgPAAIAAgMQgJAOgQAAQgKAAgJgGgAgQgIQgGAIAAARQgBASAIAIQAHAJAJAAQAKAAAHgIQAIgJgBgSQABgRgIgIQgHgKgLABQgIgBgIAKg");
	this.shape_125.setTransform(429.5,115.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgeAkQgLgNAAgXQAAgVALgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgLAAQgJAAgIAHg");
	this.shape_126.setTransform(419.8,116.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgBA9QgFgDgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAHABACQAAABABAAQAAAAAAABQAAAAABABQAAAAABAAIAFACIAHgBIACAOIgMABQgIAAgDgCg");
	this.shape_127.setTransform(412.4,115.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AghApQgIgIgBgLQAAgHADgGQAEgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgFAEQgGAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAKgDAJAAQAMAAAIADQAHACADAFQAFAEABAGIABAPIAAATQAAAWAAAGQABAGAEAFIgRAAQgCgFgBgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgDAFQgJACgEACQgEABgDAEQgBADAAAEQAAAHAEAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQADgFgBgLIAAgFQgIADgQACg");
	this.shape_128.setTransform(404.8,116.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgGAuIgjhbIAQAAIAUA2IAFATIAFgSIAVg3IAQAAIgjBbg");
	this.shape_129.setTransform(395.4,116.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgGBAIAAhbIANAAIAABbgAgGgsIAAgTIANAAIAAATg");
	this.shape_130.setTransform(388.9,115.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgBA9QgFgDgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAHABACQAAABABAAQAAAAAAABQAAAAABABQAAAAABAAIAFACIAHgBIACAOIgMABQgIAAgDgCg");
	this.shape_131.setTransform(384.4,115.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_132.setTransform(377.6,116.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAJgDIAAgEQAAgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAFAEABAGIABAPIAAATQAAAWAAAGQABAGADAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgDAEQgBADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgQACg");
	this.shape_133.setTransform(367.8,116.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_134.setTransform(353.3,116.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAHgEAEgHQACgFAAgLIAAgFQgIADgPACg");
	this.shape_135.setTransform(343.8,116.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AAWBAIAAg7QAAgKgGgFQgEgGgKAAQgFAAgHAEQgFADgDAGQgDAFAAALIAAAzIgQAAIAAh/IAQAAIAAAvQALgOAPAAQAKABAIAEQAIADADAIQAEAHAAAMIAAA7g");
	this.shape_136.setTransform(333.9,115.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAGAAQAHAAAJAFIgGAPQgFgEgGAAQgFAAgDADQgEADgBAGQgDAIAAAKIAAAvg");
	this.shape_137.setTransform(321.6,116.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_138.setTransform(312.8,116.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgBA9QgFgDgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAHABACQAAABABAAQAAAAAAABQAAAAABABQAAAAABAAIAFACIAHgBIACAOIgMABQgIAAgDgCg");
	this.shape_139.setTransform(305.4,115.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgGBAIAAhbIAOAAIAABbgAgGgsIAAgTIAOAAIAAATg");
	this.shape_140.setTransform(300.9,115.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_141.setTransform(293.8,116.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_142.setTransform(283.8,116.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AAtBAIAAhqIgmBqIgOAAIgkhrIAABrIgRAAIAAh/IAZAAIAfBaIAEASIAHgUIAfhYIAXAAIAAB/g");
	this.shape_143.setTransform(271.4,115.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_144.setTransform(251.4,116.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgHBAIAAhbIAOAAIAABbgAgHgsIAAgTIAOAAIAAATg");
	this.shape_145.setTransform(241.9,115.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAIAAAJAFIgFAPQgHgEgFAAQgGAAgCADQgDADgCAGQgDAIAAAKIAAAvg");
	this.shape_146.setTransform(237.6,116.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgHBAIAAhwIgrAAIAAgPIBlAAIAAAPIgrAAIAABwg");
	this.shape_147.setTransform(229,115.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgdA6QgNgJgHgQQgHgQAAgRQAAgUAIgOQAIgQAOgHQAOgIAPAAQATAAAOAKQANAJAFATIgQADQgFgNgJgHQgIgGgNgBQgNAAgKAIQgKAHgEAMQgEAMAAAMQAAAPAFANQAFAMAJAFQALAGAKABQAOgBAKgHQAKgJADgQIASAEQgGAVgOALQgOALgUAAQgTAAgNgIg");
	this.shape_148.setTransform(212.5,115.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgdA6QgNgJgGgQQgIgQABgRQAAgUAHgOQAIgQAOgHQAOgIAQAAQATAAANAKQANAJAFATIgRADQgEgNgIgHQgJgGgNgBQgNAAgKAIQgKAHgEAMQgEAMAAAMQAAAPAFANQAEAMALAFQAKAGAJABQAPgBAKgHQAKgJAEgQIAQAEQgFAVgOALQgOALgUAAQgTAAgNgIg");
	this.shape_149.setTransform(199.5,115.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgqBAIAAh/IBVAAIAAAPIhEAAIAAApIA7AAIAAANIg7AAIAAA6g");
	this.shape_150.setTransform(187.7,115.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_151.setTransform(172.3,116.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_152.setTransform(163.3,116.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_153.setTransform(153.8,116.9);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAJAAAIAFIgFAPQgHgEgFAAQgFAAgDADQgDADgCAGQgDAIAAAKIAAAvg");
	this.shape_154.setTransform(146.6,116.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgdA6QgNgJgGgQQgIgQABgRQAAgUAHgOQAIgQAOgHQAOgIAQAAQATAAANAKQANAJAFATIgRADQgEgNgIgHQgJgGgNgBQgNAAgKAIQgKAHgEAMQgEAMAAAMQAAAPAFANQAEAMALAFQAKAGAJABQAPgBAKgHQAKgJAEgQIAQAEQgFAVgOALQgOALgUAAQgTAAgNgIg");
	this.shape_155.setTransform(136.5,115.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_156.setTransform(119.8,116.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AAVBAIAAg7QABgKgGgFQgEgGgKAAQgFAAgHAEQgFADgDAGQgDAFAAALIAAAzIgQAAIAAh/IAQAAIAAAvQALgOAPAAQAKABAIAEQAIADADAIQADAHABAMIAAA7g");
	this.shape_157.setTransform(109.9,115.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgBA9QgFgDgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAHABACQAAABABAAQAAAAAAABQAAAAABABQAAAAABAAIAFACIAHgBIACAOIgMABQgIAAgDgCg");
	this.shape_158.setTransform(102.4,115.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgMIAOAAIAAgKQAAgKACgEQACgGAGgEQAEgEAKAAIAPACIgDANIgJgBQgHAAgDADQgDAEAAAIIAAAJIASAAIAAAMIgSAAIAABPg");
	this.shape_159.setTransform(92.8,115);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_160.setTransform(87.4,115.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(253));

	// panel
	this.instance_1 = new lib.Symbol2("single",0);
	this.instance_1.setTransform(429.8,368.4,1,1,0,0,0,80.5,78.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(99).to({startPosition:1},0).wait(154));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(500,275,1000,550);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;