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


(lib.point_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAJIAAgQIAQAAIAAAQg");
	this.shape.setTransform(43.3,-20.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_1.setTransform(35.7,-24.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_2.setTransform(25.7,-24.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGBAIAAhbIAOAAIAABbgAgGgtIAAgSIAOAAIAAASg");
	this.shape_3.setTransform(18.7,-26.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_4.setTransform(14.3,-26.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_5.setTransform(7.5,-24.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_6.setTransform(-2.3,-24.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_7.setTransform(-12.4,-24.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgMIAOAAIAAgKQAAgKACgEQACgHAGgDQAEgEAKAAIAPACIgDANIgJgBQgHAAgDAEQgDADAAAIIAAAJIASAAIAAAMIgSAAIAABPg");
	this.shape_8.setTransform(-19.4,-26.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_9.setTransform(-34.8,-24.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgGBAIAAhbIAOAAIAABbgAgGgtIAAgSIAOAAIAAASg");
	this.shape_10.setTransform(-44.3,-26.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgFgEgGAAQgGAAgCADQgDADgDAGQgCAIAAAKIAAAvg");
	this.shape_11.setTransform(-48.6,-24.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgHBAIAAhvIgrAAIAAgQIBlAAIAAAQIgrAAIAABvg");
	this.shape_12.setTransform(-57.1,-26.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgLAAgPQAAgNAFgKQAFgLAJgHQAJgFALAAQAHgBAGAEQAHAEAFAFIAAguIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgPgJQgIAJAAAQQABASAHAJQAIAJAIAAQAKAAAIgJQAGgIABgSQgBgRgGgJQgIgJgLAAQgIAAgHAJg");
	this.shape_13.setTransform(-72.6,-26.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgdAkQgMgNgBgXQABgVAMgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_14.setTransform(-82.3,-24.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_15.setTransform(-92.3,-24.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgnBBIAAh/IAOAAIAAAMQAGgHAGgEQAGgDAHAAQAMAAAKAGQAIAGAFALQAFAMAAANQAAAOgFAKQgFALgKAGQgKAGgKAAQgHAAgGgDQgGgDgFgFIAAAtgAgRgqQgIAJAAASQAAAQAHAJQAIAIAKAAQAIAAAIgJQAIgIAAgRQAAgSgIgJQgHgJgJAAQgKAAgHAKg");
	this.shape_16.setTransform(-102,-23);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgYA9QgMgFgHgKQgGgKgBgNIAQgCQACAKAEAGQAEAGAJAEQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgFQgEgEgIgDIgVgGQgRgFgHgBQgKgGgEgHQgFgHAAgIQAAgLAGgHQAFgJALgFQALgEAMAAQANAAALAEQALAFAGAJQAGAJAAALIgQABQgCgMgHgGQgIgGgOAAQgOAAgHAFQgHAGAAAJQAAAGAFAFQAFAEASAFQAVAFAIADQALAEAGAHQAFAIAAAKQAAALgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape_17.setTransform(-113.4,-26.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_18.setTransform(680.3,-46.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAWBAIAAg7QAAgKgGgGQgEgFgKAAQgFAAgHAEQgFAEgDAFQgDAFAAALIAAAzIgQAAIAAh/IAQAAIAAAvQALgNAPgBQALAAAHAFQAIAEADAHQAEAHAAAMIAAA7g");
	this.shape_19.setTransform(670.4,-48.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_20.setTransform(662.9,-48.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgKQAAgIACgFQACgHAGgDQADgEALAAIAPABIgDAPIgJgBQgHAAgDACQgDADAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_21.setTransform(653.3,-48.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_22.setTransform(645.3,-46.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgNAAQgJAAgHAHg");
	this.shape_23.setTransform(630.3,-46.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgTA7QgKgGgFgLQgFgLAAgOQAAgOAFgKQAFgMAJgFQAJgHALAAQAHABAGADQAHADAFAHIAAgvIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgQgIQgHAIAAARQAAARAIAJQAHAJAJAAQAKAAAHgIQAIgJAAgRQgBgSgHgIQgHgJgLAAQgJAAgHAJg");
	this.shape_24.setTransform(620,-48.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_25.setTransform(610.3,-46.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_26.setTransform(597.9,-46.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AApBAIgQgnIg0AAIgNAnIgTAAIAxh/IARAAIA1B/gAgIgYIgNAjIApAAIgOghIgHgbQgCAMgFANg");
	this.shape_27.setTransform(580.4,-48.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgfA5QgOgJgIgPQgHgPAAgRQAAgeARgSQARgSAaAAQARAAAPAIQAOAJAIAPQAHAQAAARQAAAUgIAPQgIAQgOAHQgPAIgQAAQgRAAgOgJgAgdgmQgNANAAAbQAAAXAMANQANANARAAQATAAAMgNQANgOAAgYQAAgOgGgMQgFgMgKgGQgLgGgMAAQgQAAgNAMg");
	this.shape_28.setTransform(567.4,-48.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AApBAIgQgnIg0AAIgNAnIgTAAIAxh/IARAAIA1B/gAgIgYIgNAjIApAAIgOghIgHgbQgCAMgFANg");
	this.shape_29.setTransform(554.4,-48.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgGQgGgFgJAAQgFAAgGAEQgHAEgCAFQgDAFAAALIAAAzIgPAAIAAh/IAPAAIAAAvQAMgNAOgBQAKAAAIAFQAIAEADAHQADAHAAAMIAAA7g");
	this.shape_30.setTransform(539.4,-48.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgbA7QgKgIAAgPIAQACQABAHAEAEQAGAEAKAAQAKAAAFgEQAGgFADgIQAAgEAAgQQgKAMgOAAQgSAAgLgOQgKgOAAgRQgBgNAFgMQAFgLAJgGQAJgGAMAAQAPAAALANIAAgLIAPAAIAABPQgBAVgEAKQgEAJgKAFQgJAFgNAAQgQAAgLgHgAgQgrQgIAIABARQgBASAIAHQAHAIAJAAQALAAAHgIQAIgHAAgSQAAgRgIgIQgIgJgKAAQgJAAgHAJg");
	this.shape_31.setTransform(529.1,-45);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_32.setTransform(522.4,-48.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAhBAIAAg9IhBAAIAAA9IgRAAIAAh/IARAAIAAA1IBBAAIAAg1IARAAIAAB/g");
	this.shape_33.setTransform(513.9,-48.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgFgEgGAAQgGAAgCADQgEADgCAGQgCAIAAAKIAAAvg");
	this.shape_34.setTransform(500.1,-46.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_35.setTransform(491.3,-46.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgGAuIgjhbIAQAAIAUA2IAFATIAFgSIAVg3IAQAAIgjBbg");
	this.shape_36.setTransform(481.9,-46.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_37.setTransform(472.3,-46.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AghA/IgCgPIAJACQAFAAAEgCQADgCACgDIAFgMIABgEIgjhbIARAAIATA2IAFAUIAGgUIAUg2IAQAAIgjBdIgHAVQgEAIgGAEQgFADgIAAQgEAAgGgCg");
	this.shape_38.setTransform(457.9,-44.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_39.setTransform(450.9,-48.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgGBAIAAhcIANAAIAABcgAgGgtIAAgSIANAAIAAASg");
	this.shape_40.setTransform(446.4,-48.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAGAAQAHAAAJAFIgFAPQgGgEgGAAQgFAAgDADQgEADgBAGQgDAIAAAKIAAAvg");
	this.shape_41.setTransform(442.1,-46.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_42.setTransform(433.3,-46.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgHBAIAAhcIAOAAIAABcgAgHgtIAAgSIAOAAIAAASg");
	this.shape_43.setTransform(426.4,-48.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAIAAAJAFIgFAPQgHgEgFAAQgGAAgCADQgDADgCAGQgDAIAAAKIAAAvg");
	this.shape_44.setTransform(422.1,-46.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgnBBIAAh/IAPAAIAAAMQAFgHAGgEQAGgDAIAAQAMAAAIAGQAKAGAEALQAFAMAAANQAAAOgFAKQgFALgKAGQgKAGgKAAQgHAAgGgDQgGgDgEgFIAAAtgAgRgqQgIAJAAASQAAAQAHAJQAIAIAKAAQAJAAAHgJQAIgIgBgRQABgSgIgJQgHgJgJAAQgJAAgIAKg");
	this.shape_45.setTransform(413.6,-45.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_46.setTransform(398.8,-46.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_47.setTransform(389.3,-46.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AATBAIgdgwIgLALIAAAlIgQAAIAAh/IAQAAIAABIIAjglIAUAAIgiAhIAmA7g");
	this.shape_48.setTransform(380.4,-48.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQAMAAAHADQAHACADAFQAEAEACAGIABAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgQACg");
	this.shape_49.setTransform(370.3,-46.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_50.setTransform(362.9,-48.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_51.setTransform(350.3,-46.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_52.setTransform(340.3,-46.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_53.setTransform(333.4,-48.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_54.setTransform(328.9,-48.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_55.setTransform(322.1,-46.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_56.setTransform(312.3,-46.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_57.setTransform(302.3,-46.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgKQAAgIACgFQACgHAGgDQAEgEAKAAIAPABIgDAPIgJgBQgHAAgDACQgDADAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_58.setTransform(295.3,-48.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgYA9QgMgFgHgKQgGgLgBgNIAQgBQACAKAEAGQAEAHAJADQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgEQgEgFgIgDIgVgHQgRgDgHgDQgKgFgEgGQgFgIAAgJQAAgKAGgIQAFgJALgDQALgFAMAAQANAAALAFQALAEAGAJQAGAJAAALIgQACQgCgNgHgGQgIgGgOAAQgOAAgHAFQgHAGAAAIQAAAIAFADQAFAFASAFQAVAEAIAEQALADAGAJQAFAHAAALQAAAKgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape_59.setTransform(281.3,-48.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAoBAIgOgnIg0AAIgPAnIgSAAIAyh/IAQAAIA1B/gAgHgYIgPAjIAqAAIgNghIgHgbQgDAMgEANg");
	this.shape_60.setTransform(269.4,-48.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgdA6QgNgJgHgQQgGgQAAgRQgBgTAIgPQAIgQAOgHQAOgIAPAAQAUAAANAKQANAJAFASIgRAFQgEgPgIgGQgJgGgNAAQgNgBgKAIQgKAHgEAMQgEAMAAAMQAAAPAFANQAEALALAHQAKAFAJAAQAPAAAKgIQAKgIADgQIARAEQgFAVgOALQgOALgUAAQgTAAgNgIg");
	this.shape_61.setTransform(257,-48.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAsBAIAAhqIglBqIgOAAIglhrIAABrIgQAAIAAh/IAZAAIAfBaIAEATIAHgVIAfhYIAXAAIAAB/g");
	this.shape_62.setTransform(242.9,-48.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgNAAQgIAAgIAHg");
	this.shape_63.setTransform(225.3,-46.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgGQgGgFgJAAQgFAAgGAEQgHAEgCAFQgDAFAAALIAAAzIgPAAIAAh/IAPAAIAAAvQAMgNAOgBQAKAAAIAFQAIAEADAHQADAHAAAMIAAA7g");
	this.shape_64.setTransform(215.4,-48.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_65.setTransform(207.9,-48.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgIAOQAFgCADgEQAAgEAAgGIgHAAIAAgSIAQAAIAAASQAAAIgEAGQgDAGgGADg");
	this.shape_66.setTransform(197.8,-41.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAlBAIggguIgFgIIgFAJIggAtIgVAAIAyhBIgsg+IAUAAIAYAhIAIAQIAKgPIAbgiIASAAIguA9IAxBCg");
	this.shape_67.setTransform(189.4,-48.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAoBAIgPgnIg0AAIgNAnIgTAAIAxh/IARAAIA1B/gAgHgYIgOAjIApAAIgOghIgHgbQgCAMgEANg");
	this.shape_68.setTransform(177.4,-48.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAtBAIAAhqIgmBqIgNAAIglhrIAABrIgRAAIAAh/IAaAAIAeBaIAEATIAHgVIAfhYIAXAAIAAB/g");
	this.shape_69.setTransform(163.9,-48.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgWA/QAAgPAGgVQAFgXALgRQAJgVAMgNIg9AAIAAgPIBRAAIAAAMQgMANgMAWQgMAUgFAXQgFAQgBATg");
	this.shape_70.setTransform(146.4,-48.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgcA3QgLgKgCgQIAQgCQADANAGAHQAHAFAJAAQAKAAAHgHQAIgJAAgKQAAgMgHgGQgHgIgLAAQgDAAgGACIABgMIADAAQAIABAIgGQAIgGAAgKQAAgJgGgGQgGgFgHAAQgJAAgGAFQgHAGgBAMIgQgDQADgQAKgJQAKgIAQgBQAIAAAJAFQAJAFAFAHQAEAJAAAIQAAAIgEAIQgFAGgIAEQALADAGAGQAHAIAAANQAAARgNAMQgMAMgRgBQgRAAgLgKg");
	this.shape_71.setTransform(136.3,-48.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgWA/QAAgPAGgVQAFgXALgRQAJgVAMgNIg9AAIAAgPIBRAAIAAAMQgMANgMAWQgMAUgFAXQgFAQgBATg");
	this.shape_72.setTransform(126.4,-48.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQAMAMgBAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_73.setTransform(111.3,-46.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AAWBAIAAg7QgBgKgFgGQgEgFgKAAQgFAAgGAEQgGAEgDAFQgDAFAAALIAAAzIgPAAIAAh/IAPAAIAAAvQAMgNAOgBQALAAAHAFQAIAEADAHQAEAHgBAMIAAA7g");
	this.shape_74.setTransform(101.4,-48.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_75.setTransform(93.9,-48.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_76.setTransform(81.3,-46.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_77.setTransform(71.3,-46.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgvBAIAAh/IAvAAQAMAAAGACQAKABAGAEQAHAFAEAIQAEAIAAAKQgBAQgJAKQgLAKgcABIgeAAIAAA0gAgegCIAeAAQASAAAGgFQAHgHAAgLQAAgIgEgGQgEgGgHgCIgQgBIgeAAg");
	this.shape_78.setTransform(56,-48.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgcA7QgLgHgFgLQgFgMAAgUIAAhJIARAAIAABJQAAARADAHQADAIAIAFQAHAEALAAQARAAAIgJQAIgIAAgYIAAhJIARAAIAABJQAAATgEALQgFAMgLAHQgLAHgTAAQgQAAgMgGg");
	this.shape_79.setTransform(43.2,-48.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_80.setTransform(26.7,-46.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAGAAQAHAAAJAFIgFAPQgHgEgFAAQgFAAgDADQgEADgBAGQgDAIAAAKIAAAvg");
	this.shape_81.setTransform(19.4,-46.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHADgGQADgGAFgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgGAEQgFAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQALAAAIADQAHACAEAFQADAEABAGIACAPIAAATQAAAWABAGQABAGACAFIgQAAQgDgFAAgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgCADgBAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgPACg");
	this.shape_82.setTransform(10.7,-46.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_83.setTransform(-3.9,-46.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgnBBIAAh/IAOAAIAAAMQAFgHAHgEQAGgDAHAAQANAAAIAGQAKAGAEALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgHAAgGgDQgGgDgFgFIAAAtgAgRgqQgIAJAAASQAAAQAIAJQAHAIAKAAQAIAAAJgJQAGgIABgRQgBgSgGgJQgIgJgJAAQgJAAgIAKg");
	this.shape_84.setTransform(-13,-45.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAJgDIAAgEQAAgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAEAEACAGIABAPIAAATQAAAWABAGQAAAGADAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgQACg");
	this.shape_85.setTransform(-23.3,-46.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgGBAIAAh/IAOAAIAAB/g");
	this.shape_86.setTransform(-30.3,-48.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgKQAAgIACgFQACgHAGgDQADgEALAAIAPABIgCAPIgKgBQgHAAgDACQgDADAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_87.setTransform(-34.4,-48.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_88.setTransform(-47.3,-46.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AAWBAIAAg7QAAgKgGgGQgEgFgKAAQgFAAgHAEQgFAEgDAFQgDAFAAALIAAAzIgQAAIAAh/IAQAAIAAAvQALgNAPgBQALAAAHAFQAIAEADAHQAEAHAAAMIAAA7g");
	this.shape_89.setTransform(-57.3,-48.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_90.setTransform(-64.7,-48.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_91.setTransform(-77.3,-46.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgeAkQgLgNAAgXQAAgVALgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgLAAQgJAAgIAHg");
	this.shape_92.setTransform(-87.3,-46.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgGQgGgFgJAAQgFAAgGAEQgHAEgCAFQgDAFAAALIAAAzIgPAAIAAh/IAPAAIAAAvQAMgNAOgBQAKAAAIAFQAIAEADAHQADAHAAAMIAAA7g");
	this.shape_93.setTransform(-97.3,-48.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AAeBAIgbhgIgDgQIgDAQIgbBgIgRAAIgih/IARAAIAUBTIAFAaIAGgYIAZhVIASAAIASBAQAIAXACAWIAHgcIAUhRIARAAIgjB/g");
	this.shape_94.setTransform(-110.8,-48.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.3,-60.4,813.8,46.2);


(lib.point_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAIIAAgQIAQAAIAAAQg");
	this.shape.setTransform(610.3,-43);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAmBAIghguIgFgIIgFAJIggAtIgVAAIAyhBIgsg+IAVAAIAXAhIAIAQIALgPIAagiIASAAIgtA9IAwBCg");
	this.shape_1.setTransform(601.7,-48.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AApBAIgQgnIg0AAIgNAnIgTAAIAxh/IARAAIA1B/gAgIgYIgNAjIApAAIgOghIgHgbQgCAMgFANg");
	this.shape_2.setTransform(589.7,-48.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAsBAIAAhqIglBqIgOAAIglhrIAABrIgQAAIAAh/IAZAAIAfBaIAEATIAHgVIAfhYIAXAAIAAB/g");
	this.shape_3.setTransform(576.2,-48.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgWA/QAAgPAGgVQAFgXALgRQAJgVAMgNIg9AAIAAgPIBRAAIAAAMQgMANgMAWQgMAUgFAXQgFAQgBATg");
	this.shape_4.setTransform(558.7,-48.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgcA3QgLgKgCgQIAQgCQADANAGAHQAHAFAJAAQAKAAAHgHQAIgJAAgKQAAgMgHgGQgHgIgLAAQgDAAgGACIABgMIADAAQAIABAIgGQAIgGAAgKQAAgJgGgGQgGgFgHAAQgJAAgGAFQgHAGgBAMIgQgDQADgQAKgJQAKgIAQgBQAIAAAJAFQAJAFAFAHQAEAJAAAIQAAAIgEAIQgFAGgIAEQALADAGAGQAHAIAAANQAAARgNAMQgMAMgRgBQgRAAgLgKg");
	this.shape_5.setTransform(548.7,-48.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgWA/QAAgPAGgVQAFgXALgRQAJgVAMgNIg9AAIAAgPIBRAAIAAAMQgMANgMAWQgMAUgFAXQgFAQgBATg");
	this.shape_6.setTransform(538.7,-48.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgLAAgOQAAgOAFgKQAEgMAKgFQAJgHALAAQAHABAHADQAGADAFAHIAAgvIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgQgIQgGAIgBARQAAARAIAJQAHAJAJAAQAKAAAHgIQAIgJAAgRQAAgSgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_7.setTransform(523.4,-48.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_8.setTransform(513.7,-46.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQADgKAEgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgGADgJAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_9.setTransform(503.7,-46.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgbA6QgPgIgIgQQgIgPAAgTQAAgRAIgQQAIgQAOgIQAPgIARAAQAOAAAMAFQALAEAGAIQAHAIADANIgPAFQgDgLgFgFQgEgGgIgDQgIgEgKABQgJgBgJAEQgIAEgFAFQgGAHgDAGQgFAMAAANQAAAQAGAMQAGAMAMAFQALAGALAAQALAAAKgEQALgFAFgEIAAgZIgmAAIAAgNIA3AAIAAAuQgNAKgNAFQgNAFgOAAQgRAAgQgIg");
	this.shape_10.setTransform(486.6,-48.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAhBAIhChjIAABjIgQAAIAAh/IARAAIBCBkIAAhkIAQAAIAAB/g");
	this.shape_11.setTransform(473.1,-48.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgWA/QAAgPAGgVQAFgXALgRQAJgVAMgNIg9AAIAAgPIBRAAIAAAMQgMANgMAWQgMAUgFAXQgFAQgBATg");
	this.shape_12.setTransform(461.7,-48.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgcA3QgLgKgCgQIAQgCQADANAGAHQAHAFAJAAQAKAAAHgHQAIgJAAgKQAAgMgHgGQgHgIgLAAQgDAAgGACIABgMIADAAQAIABAIgGQAIgGAAgKQAAgJgGgGQgGgFgHAAQgJAAgGAFQgHAGgBAMIgQgDQADgQAKgJQAKgIAQgBQAIAAAJAFQAJAFAFAHQAEAJAAAIQAAAIgEAIQgFAGgIAEQALADAGAGQAHAIAAANQAAARgNAMQgMAMgRgBQgRAAgLgKg");
	this.shape_13.setTransform(451.7,-48.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgWA/QAAgPAGgVQAFgXALgRQAJgVAMgNIg9AAIAAgPIBRAAIAAAMQgMANgMAWQgMAUgFAXQgFAQgBATg");
	this.shape_14.setTransform(441.7,-48.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_15.setTransform(426.7,-46.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgGQgGgFgJAAQgFAAgGAEQgHAEgCAFQgDAFAAALIAAAzIgPAAIAAh/IAPAAIAAAvQAMgNAOgBQALAAAHAFQAIAEADAHQAEAHgBAMIAAA7g");
	this.shape_16.setTransform(416.7,-48.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_17.setTransform(409.3,-48.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_18.setTransform(396.7,-46.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_19.setTransform(386.7,-46.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AghA/IgCgPIAJACQAFAAAEgCQADgCACgDIAFgMIABgEIgjhbIARAAIATA2IAFAUIAGgUIAUg2IAQAAIgjBdIgHAVQgEAIgGAEQgFADgIAAQgEAAgGgCg");
	this.shape_20.setTransform(372.3,-44.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_21.setTransform(365.3,-48.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgGBAIAAhcIAOAAIAABcgAgGgtIAAgSIAOAAIAAASg");
	this.shape_22.setTransform(360.7,-48.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgGBAIAAh/IAOAAIAAB/g");
	this.shape_23.setTransform(356.7,-48.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_24.setTransform(352.7,-48.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgYAzIAAAMIgPAAIAAh/IAQAAIAAAuQAKgNANAAQAJABAIADQAHAEAFAGQAFAGADAJQADAHAAAKQAAAYgMANQgMANgQAAQgPAAgJgOgAgRgIQgHAIAAAPQAAASAEAHQAIAMAMAAQAJAAAHgJQAIgJAAgSQAAgQgHgIQgIgJgJAAQgJAAgIAJg");
	this.shape_25.setTransform(345.9,-48.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQAMAAAHADQAHACAEAFQADAEACAGIABAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgPACg");
	this.shape_26.setTransform(335.7,-46.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgnBBIAAh/IAPAAIAAAMQAEgHAHgEQAGgDAIAAQALAAAJAGQAKAGAEALQAFAMAAANQAAAOgFAKQgFALgKAGQgKAGgKAAQgGAAgHgDQgHgDgDgFIAAAtgAgRgqQgIAJAAASQAAAQAIAJQAHAIAKAAQAJAAAIgJQAGgIAAgRQAAgSgGgJQgIgJgJAAQgJAAgIAKg");
	this.shape_27.setTransform(326,-45.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AghApQgJgIAAgLQABgHADgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQADgKAEgGQAFgHAJgDQAKgDAJAAQANAAAHADQAHACAEAFQADAEABAGIABAPIAAATQAAAWACAGQABAGACAFIgQAAQgDgFAAgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgDADAAAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_28.setTransform(315.7,-46.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_29.setTransform(306.5,-46.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_30.setTransform(291.7,-46.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_31.setTransform(281.7,-46.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgHBAIAAhcIAOAAIAABcgAgHgtIAAgSIAOAAIAAASg");
	this.shape_32.setTransform(274.7,-48.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_33.setTransform(270.3,-48.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_34.setTransform(263.5,-46.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_35.setTransform(253.7,-46.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_36.setTransform(243.6,-46.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgKQAAgIACgFQACgHAGgDQADgEALAAIAPABIgCAPIgKgBQgHAAgDACQgDADAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_37.setTransform(236.6,-48.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_38.setTransform(221.2,-46.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgHBAIAAhcIAOAAIAABcgAgHgtIAAgSIAOAAIAAASg");
	this.shape_39.setTransform(211.7,-48.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAIAAAJAFIgFAPQgHgEgFAAQgGAAgCADQgDADgCAGQgDAIAAAKIAAAvg");
	this.shape_40.setTransform(207.4,-46.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgHBAIAAhwIgrAAIAAgPIBlAAIAAAPIgrAAIAABwg");
	this.shape_41.setTransform(198.9,-48.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgLAAgOQAAgOAFgKQAFgMAJgFQAJgHALAAQAHABAHADQAGADAEAHIAAgvIAQAAIAAB/IgPAAIAAgMQgJAOgQAAQgKAAgJgGgAgQgIQgGAIAAARQgBARAIAJQAHAJAJAAQAKAAAHgIQAIgJgBgRQABgSgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_42.setTransform(183.4,-48.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgMgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgLAAQgJAAgIAHg");
	this.shape_43.setTransform(173.7,-46.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgNAAQgIAAgIAHg");
	this.shape_44.setTransform(163.7,-46.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgnBBIAAh/IAPAAIAAAMQAFgHAGgEQAGgDAIAAQAMAAAIAGQAKAGAEALQAFAMAAANQAAAOgFAKQgFALgKAGQgKAGgKAAQgHAAgGgDQgGgDgEgFIAAAtgAgRgqQgIAJAAASQAAAQAHAJQAIAIAKAAQAJAAAHgJQAIgIgBgRQABgSgIgJQgHgJgJAAQgJAAgIAKg");
	this.shape_45.setTransform(154,-45.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgYA9QgMgFgHgKQgGgLgBgNIAQgBQACAKAEAGQAEAHAJADQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgEQgEgFgIgDIgVgHQgRgDgHgDQgKgFgEgGQgFgIAAgJQAAgKAGgIQAFgJALgDQALgFAMAAQANAAALAFQALAEAGAJQAGAJAAALIgQACQgCgNgHgGQgIgGgOAAQgOAAgHAFQgHAGAAAIQAAAIAFADQAFAFASAFQAVAEAIAEQALADAGAJQAFAHAAALQAAAKgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape_46.setTransform(142.6,-48.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AghApQgJgIAAgLQABgHADgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAKgDAJAAQANAAAHADQAHACAEAFQADAEABAGIABAPIAAATQAAAWACAGQABAGACAFIgQAAQgDgFAAgGQgJAHgIADQgGADgJAAQgQAAgIgHgAgCAFQgKACgEACQgEABgCAEQgDADAAAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_47.setTransform(126.7,-46.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_48.setTransform(112.1,-46.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgGBAIAAhcIANAAIAABcgAgGgtIAAgSIANAAIAAASg");
	this.shape_49.setTransform(105.7,-48.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_50.setTransform(93.7,-46.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgLAAgOQAAgOAFgKQAFgMAJgFQAJgHALAAQAHABAHADQAGADAFAHIAAgvIAPAAIAAB/IgPAAIAAgMQgJAOgQAAQgKAAgJgGgAgQgIQgGAIgBARQAAARAIAJQAHAJAJAAQAKAAAHgIQAIgJgBgRQABgSgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_51.setTransform(83.4,-48.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_52.setTransform(73.7,-46.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_53.setTransform(61.2,-46.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAoBAIgPgnIg0AAIgNAnIgTAAIAxh/IARAAIA1B/gAgHgYIgPAjIAqAAIgOghIgHgbQgCAMgEANg");
	this.shape_54.setTransform(43.7,-48.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgfA5QgOgJgIgPQgHgPAAgRQAAgeARgSQARgSAaAAQARAAAPAIQAOAJAIAPQAHAQAAARQAAAUgIAPQgIAQgOAHQgPAIgQAAQgRAAgOgJgAgdgmQgNANAAAbQAAAXAMANQANANARAAQATAAAMgNQANgOAAgYQAAgOgGgMQgFgMgKgGQgLgGgMAAQgQAAgNAMg");
	this.shape_55.setTransform(30.7,-48.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAoBAIgOgnIg0AAIgOAnIgTAAIAxh/IARAAIA1B/gAgHgYIgPAjIAqAAIgOghIgHgbQgCAMgEANg");
	this.shape_56.setTransform(17.7,-48.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgGQgGgFgJAAQgFAAgGAEQgGAEgDAFQgDAFAAALIAAAzIgPAAIAAh/IAPAAIAAAvQAMgNAOgBQALAAAHAFQAIAEADAHQAEAHgBAMIAAA7g");
	this.shape_57.setTransform(2.7,-48.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgbA7QgKgIAAgPIAQACQABAHAEAEQAGAEAKAAQAKAAAFgEQAGgFACgIQABgEAAgQQgKAMgOAAQgTAAgKgOQgLgOAAgRQABgNAEgMQAFgLAJgGQAKgGALAAQAQAAAKANIAAgLIAOAAIAABPQAAAVgEAKQgFAJgJAFQgKAFgMAAQgRAAgKgHgAgQgrQgHAIAAARQAAASAHAHQAHAIAJAAQALAAAIgIQAHgHAAgSQAAgRgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_58.setTransform(-7.6,-45);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgHBAIAAhcIAOAAIAABcgAgHgtIAAgSIAOAAIAAASg");
	this.shape_59.setTransform(-14.3,-48.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAhBAIAAg9IhBAAIAAA9IgRAAIAAh/IARAAIAAA1IBBAAIAAg1IARAAIAAB/g");
	this.shape_60.setTransform(-22.8,-48.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_61.setTransform(-36.7,-48.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AghApQgJgIAAgLQABgHADgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAKgDAJAAQANAAAHADQAHACAEAFQADAEABAGIABAPIAAATQAAAWACAGQABAGACAFIgQAAQgDgFAAgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgDADAAAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_62.setTransform(-44.3,-46.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgGQgGgFgJAAQgFAAgHAEQgGAEgCAFQgDAFAAALIAAAzIgQAAIAAh/IAQAAIAAAvQAMgNAOgBQALAAAHAFQAIAEADAHQADAHABAMIAAA7g");
	this.shape_63.setTransform(-54.3,-48.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_64.setTransform(-61.7,-48.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_65.setTransform(-71.3,-48.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgGBAIAAh/IAOAAIAAB/g");
	this.shape_66.setTransform(-75.3,-48.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAHgEAEgHQACgFAAgLIAAgFQgIADgPACg");
	this.shape_67.setTransform(-82.3,-46.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_68.setTransform(-91.5,-46.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_69.setTransform(-101.3,-46.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AAjBAIgRgbIgMgRIgHgJIgIgEIgJAAIgUAAIAAA5IgRAAIAAh/IA3AAQARAAAJAEQAJADAGAJQAFAJAAAKQAAAOgJAKQgJAHgSACQAGADAEAEQAHAHAHAKIAWAjgAgmgGIAlAAQAJAAAHgDQAGgCAEgFQADgFAAgHQAAgJgGgFQgHgHgOAAIgnAAg");
	this.shape_70.setTransform(-112.2,-48.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.3,-60.4,746.2,24.1);


(lib.point = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQARQgIgHAAgKQAAgJAIgHQAHgIAJAAQAKAAAHAIQAIAHAAAJQAAAKgIAHQgHAIgKAAQgJAAgHgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,5,5);


(lib.dashedcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8EC9D6").ss(2,0,0,3).p("AQnAAIC/AAAULAAIArAAAPTAAIAqAAAKTAAIAqAAALnAAIC/AAAFTAAIAqAAAGnAAIC/AAAATAAIAqAAABnAAIC/AAAVgAAIBpAAAoPAAIC+AAAkkAAIArAAApkAAIArAAAukAAIArAAAtPAAIC+AAAzkAAIArAAAyPAAIC+AAA3IAAIC/AAAjPAAIC+AA");
	this.shape.setTransform(339.4,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(190.3,-1,298.3,2);


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

	// engine/wing/tail
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0099").ss(1,0,0,3,true).p("AAAAAIAAAA");
	this.shape.setTransform(-69.1,73.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#D2D3D3","#8F9090","#787979"],[0,0.553,1],3,-5.1,2.8,5.5).s().p("AgcASIgIgSIgBgMQCFACC3gMIAAACQABAFAMABIARABIANABQAHADgGAEIgVAHIgHACQgOAGAAADQABAEAPAAIAAAAIAbAAIAAAAQAGADgnAJQgnAIg0AFQh7ADhkAAQAAgPgFgMgABuAAQgKAAgHAEQgIAGABAGQABAHAIAEQAIADAKgBQAKgCAHgEQAIgGgCgGQAAgHgIgDQgGgBgHAAIgFAAgAi5AqQgFgGAAg4QBBAHBVABIAAAMIAJASQAEAMAAAPQhWAAhIgDgAkdAlQgCgfgBgoQAoAJA4AFQAAA9AFABQg0gBgugEgAk+AjQgEgjgDgsIAhAJQABApADAfIgegCgABhAXQgGgDgBgEQAAgEAFgEQAGgEAJgBQAJgCAHADQAGACAAAFQABAEgFAFQgHADgIACIgFAAQgGAAgFgCg");
	this.shape_1.setTransform(-96.6,112.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#C8C9C9","#838484","#6C6D6D"],[0,0.553,1],10.8,-5.5,10.6,5.1).s().p("AAxApQAAgQgEgLIgJgTIAAgLIADAAIABALIAIATQAFALAAAQIgEAAgAjSAhQgDgfgBgqIAEACQABAoACAfIgDAAgACtAXQgIgFgBgGQgBgGAIgGQAHgCAKgCQAKgBAIAEQAIABAAAHQACAGgIAFQgHAFgKACIgFAAQgHAAgGgCgAC8AAQgJAAgGADQgFAFAAADQABAFAGADQAHACAJgBQAIgBAHgDQAFgFgBgEQAAgFgGgCQgEAAgGAAIgGAAg");
	this.shape_2.setTransform(-104.4,113);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#E5E5E5","#D1D2D3","#D0D0D3","#C9CDD1","#B9BABA"],[0.094,0.231,0.435,0.612,1],23.4,-2.9,0,-7.9,-5.5,80.1).s().p("AAcDDQgDhOALh2IATiqQAFAAABgLIADABIABAAQgBALgGACIgSCnQgLB3ADBNIgEAAgAjdCsQgBg3ADhLQAFh+AOhtIAEgBQgOBugFB+QgDBMABA3IgEgBgACoBCQgIgIAAgKQAAgKAIgHQAHgIAKAAQAKAAAIAIQAHAHAAAKQAAAKgHAIQgIAHgKAAQgKAAgHgHgACrAhQgHAGAAAJQAAAJAHAGQAFAGAJAAQAJAAAGgGQAHgGAAgJQAAgJgHgGQgGgGgJAAQgJAAgFAGgACwA5QgEgEAAgFQAAgGAEgDQAEgEAFAAQAGAAADAEQAEADAAAGQAAAFgEAEQgDAEgGAAQgFAAgEgEgADEhvQgKgBgHgFQgHgGAAgFQABgHAIgDQAJgEAKABQAKABAGAFQAIAGgBAGQgBAGgIAEQgGADgGAAIgGgBgAC3iHQgGACgBAFQAAAEAFAEQAHAEAJABQAIACAHgDQAGgDABgEQAAgFgFgEQgGgEgJgBIgFAAQgGAAgFACg");
	this.shape_3.setTransform(-103.6,91.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#424A48","#5B6C79","#475863"],[0,0.31,1],6.9,13.7,6.9,-11.7).s().p("AglBvQgFh7ABh2IAAgDIACgEQAFgMANgFQAagLAggHIABAAQgEDVAJCEQhEgXgMgng");
	this.shape_4.setTransform(-133.8,90.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#3F4644","#50606B","#3A4851"],[0,0.31,1],2.7,13.7,2.7,-11.7).s().p("AABCtQgHiEAEjVIACgBIAAABQgDDVAHCEIAAABIgDgBg");
	this.shape_5.setTransform(-129.7,90.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#272F2F","#272E33","#4D5459"],[0.616,0.816,0.953],5.8,-0.1,5.7,-3.1).s().p("AhPghICfAGIAAAHIieA2QgBgiAAghg");
	this.shape_6.setTransform(-45.9,100);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#1E1E1E","#737C82","#1E1E1E"],[0.243,0.553,0.8],0.3,1.6,0.3,-1.4).s().p("AgDAHIAAgHIAAgBIAAgDIAAgCIAHAAIAAANg");
	this.shape_7.setTransform(-37.4,97.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#959595","#535353"],[0,1],76,-51,76,-61.5).s().p("Ag4AsIglAGIhLgHIAEhfQCKAJCfgHIAIAEIAcAKIgPAGIgJADQhMAXh7gBIA7ACIAUAAIhLA4g");
	this.shape_8.setTransform(-23,83);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#A0A0A0","#535353"],[0,1],71.5,-49.3,71.5,-59.8).s().p("AgSAMIgUAAIg9gCQB7ABBMgWQhDAVgyACg");
	this.shape_9.setTransform(-18.5,81.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#525957","#58635F","#99A3AD"],[0.471,0.655,0.988],17.5,2.3,17.4,-5).s().p("AgTg2IAmAFQAAAuACAuIgoALQgBg4ABg0g");
	this.shape_10.setTransform(-56.8,101.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#525957","#58635F","#99A3AD"],[0.553,0.757,0.988],16.8,-0.7,15.1,5.9).s().p("AgTAmQAAgqADglIAkANIgCBGg");
	this.shape_11.setTransform(-56.8,92.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#484F4D","#4D5653","#8E97A0"],[0.553,0.757,0.988],14.8,2.2,14.7,-5.1).s().p("AgEguIAHABQAAAiABAiIABAVIgHADQgCgvAAgug");
	this.shape_12.setTransform(-54.3,101.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#23272B","#272F2F","#272E33","#4D5459"],[0.275,0.616,0.816,1],5.8,0.2,5.7,3.2).s().p("AhPAaIABgmICeAqIAAACgAhOgbIABgEIAMAEICRA0IAAACg");
	this.shape_13.setTransform(-45.9,93.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#484F4D","#4D5653","#8E97A0"],[0.553,0.757,0.988],14.5,0.1,12.7,6.7).s().p("AgEAjIAChHIAHAEIAAALIgBAEIAAAQIgBAlg");
	this.shape_14.setTransform(-54.3,92.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#59656B","#3B4346"],[0,1],-14.8,0.6,1.8,0.6).s().p("ABPATIhDgFQgkgEgXgFQgwgKgrgMIACgFQArANAxAJQAYAGAkAEIBDAGIA4AGIgDABQgTgCgmgCg");
	this.shape_15.setTransform(-44.5,88.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#393E3E","#474F4D","#828B93"],[0.392,0.722,0.957],24.3,0.6,24.2,-6.7).s().p("AgvBKQABgEALgGIAdgTQAGgEgGgDIgggJQgJgDgBgGQAAgFAJgHIAggTQAHgFgHgEIgigRQgHgDABgIQAAgGAGgEIAagPIA/AGQgBAzACA5IAAAEIg9ATIgiAKg");
	this.shape_16.setTransform(-63.8,102.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#3A3F3E","#414946","#828B93"],[0.553,0.757,0.988],23.3,0.2,22.2,6.9).s().p("AgSAzIAIgFQAIgFgIgEIgggVQgGgFAAgGQAAgFAIgCIAigLQAGgCAAgDQAAgDgEgFIgigTQgJgGAAgFIBfAcIABABIAAAFQgDAjAAAsg");
	this.shape_17.setTransform(-63.5,90.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["#FFFFFF","#EAEBEC","#E8E8EC","#E1E6EA","#D2D3D3"],[0.094,0.231,0.435,0.612,1],16.1,-2.7,0,-15.2,-5.3,80.1).s().p("AgoDEQgChNAKh3IASinQAHgCABgLIBpAWQBKAPBuAhQABADAKAFIASAJIAPAIIABAAIABABQAHADgBACQgBADgHAAIgCAAIgTAAIgQABQgJABgCAFIAAAAQAAAFAJAGIAhAUQAHAEAAADQgBADgIACIgiALQgHADAAAGQAAAGAGADIAgAVQAIAFgIAFIgIAEIgaAPQgGAEAAAGQgBAIAHADIAiARQAJAEgJAFIggAVQgJAHAAAFQABAGAJADIAgAJQAHADgHAEIgdATQgLAGgBAEQicAKh4AAIgogBgABeAgQgHAHAAALQAAAKAHAHQAHAHALAAQAKAAAHgHQAIgHAAgKQAAgLgIgHQgHgIgKAAQgLAAgHAIgABsiJQgJADAAAHQgBAGAIAFQAGAGALABQAKABAHgDQAIgFABgFQABgHgHgFQgHgFgKgBIgEAAQgIAAgGACgAjBC9QAAgwAEhVIgDAAQgDBVAAAwQg4gGgogJQgBg3ADhLQAGh+ANhuQAmgEArAAIAtACIAFAAQA5ADBHALIABAAQgBAKgGABIgSCpQgLB3ADBNQhVgBhBgGgAj6AbIAAABIgBAAQgFAFAAAHQAAAGAFAFQAEAEAHAAQAHAAAFgEIABAAIAAgBQADgFAAgFQAAgHgEgFQgFgEgHAAQgFAAgFADgAlIClIAAgBQgJiEAFjWIAAAAQAbgHAggDQgPBugEB+QgEBLABA2IghgIgABhBBQgHgHAAgIQAAgJAHgHQAGgGAJAAQAIAAAHAGQAGAHAAAJQAAAIgGAHQgHAGgIAAQgJAAgGgGgABnAoQgEAEAAAGQAAAEAEAEQAEAEAFAAQAFAAADgEQAEgEAAgEQAAgGgEgEQgDgDgFAAQgFAAgEADgAj4AwQgDgEAAgEQAAgFACgCIARAQQgDADgFAAQgEAAgEgEgAj2AdIAGgBQAFAAADADQAEAEAAAFQAAADgCADgAB7hxQgJgBgGgEQgFgFAAgEQAAgEAGgDQAIgCAJABQAJAAAFAFQAGAEAAAEQgBAFgGACQgFACgFAAIgGAAg");
	this.shape_18.setTransform(-96.3,91.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["#FFFFFF","#ECECEC","#ECECEC","#FAFAFA","#D2D3D3"],[0.157,0.231,0.435,0.612,1],15.9,12.9,0,-15.4,10.3,80.1).s().p("AE6ArIgJgCIgLgBQgNgBAAAEIAAACQhugihKgNIhpgVIAAgIIBAALQBdAPBFAPIACAAIAKADQAlAJAdAJIAcAJIAIAEQABAAAAABQABABABAAQAAABAAAAQAAAAAAABIgVgFgAgNgYQhGgKg6gDIgFAAIgsgCQgrgBgmAEIAAgHQAngEArAAIAsACIADAAIACAAQA5ADBHALIAAAHIgBAAgAlOghQAcgHAggDIgBAIQgfADgcAGIAAgHg");
	this.shape_19.setTransform(-96.1,75.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#DBDCDD","#959595"],[0.059,1],-11.3,-3.8,5,4.7).s().p("AAXA9Ig5gRIACgJIAThOIAJACIApAGIACAAQA0AGA4AFIgFBfgAhiATQgHgHAEgLIAAgBIAUAEQABgBAAAAQAAAAgBgBQAAAAgBgBQAAgBgCAAQglhAgZgGIAJACIAPAEIAQADIA7AMIAhAGIgTBOg");
	this.shape_20.setTransform(-54.4,80.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#C5C6C6","#EBECED","#D1D1D1"],[0,0.89,1],5.7,9.6,6.4,-2.7).s().p("ABrAhQAJgrAFgLIACAAQgFALgIArIAAABIgDgBgAh6gIQACgSADgHIADAAQgDAIgCARIgDAAg");
	this.shape_21.setTransform(-85.1,73.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#D2D3D3","#F9FAFB","#DEDEDE"],[0,0.89,1],4.5,7.9,5.2,-4.4).s().p("ADIAvIgcgJQgcgJglgJIgKgDIAAAAQAJgrAEgLIA0ABQASABAigFQAggFAUACIg3AIIgoAFQghAGAIAFIAAAAIAAAAQAZAGAlBAIgIgEgAhCgNIhBgLIgBAAQACgRADgIQAlABAkAEQAXADBGACIBFACQgEALgKArQhEgRhcgNgAkHgmIgCAAQAdgKBAgCQAVAAAVABQgDAHgCASQhHgLg5gDg");
	this.shape_22.setTransform(-83.8,75.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#323F63","#384E74"],[0,1],0.6,-1.4,-0.5,1.4).s().p("AgvAIQgIgGAhgDIAmgFIAiAAIgBAEIgDACIgHAHIhWABg");
	this.shape_23.setTransform(-64.3,72.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#F0F1F2","#E8E8EC","#E1E6EA","#D2D3D3"],[0.231,0.435,0.612,1],0,-2.6,0,3.7).s().p("AhFgpIAmAVIB2AYQADAEAAAEIAAAKQABALgLABIgBAAQhcAGhMACg");
	this.shape_24.setTransform(48,70.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#EAEBEC","#E8E8EC","#E1E6EA","#D2D3D3"],[0.231,0.435,0.612,1],0.2,-4.5,0.2,1.8).s().p("AhbAWIABgBIABgGIAIghQA4AABHgEIArAKQADADAAAEIAAAIQABALgMABIgBAAQgvAEhdADIgWAAIgJAAg");
	this.shape_25.setTransform(34.1,77.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#707070","#737374","#464646"],[0.106,0.325,1],10.5,6.1,10.5,-9.4).s().p("AhVAgIgXgFIgMgEIABAAQgkgMgagLQA0gCBCgXIAKgDIAPgFIAOAEIADAAIAGACIAPACQA5AOB8gDIACAAIgIAhIgCAFIgBACIgGABQiPAHg/AAQggAAgNgCg");
	this.shape_26.setTransform(-2,82.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#D9DADB","#D3D3D3","#D2D7DB","#C3C4C4"],[0.231,0.435,0.612,1],0.8,-3.5,0.8,1.9).s().p("AhiAVIABgFIAIghQAngBAugDIAegCIBGAPQADACAAADIAAAGQABAKgLABIgBAAIhpAGIhSADg");
	this.shape_27.setTransform(25.3,83.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#515151","#737374","#464646"],[0.106,0.325,1],-3.2,3.1,-3.2,-12.4).s().p("AjfACQAmAGDVgJIAHgBIBSgDIBrgGIiPANIgGAAIgHABIgGABIgxAEQg4AEg1AAQhOAAgxgKg");
	this.shape_28.setTransform(11.7,85.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#808080","#888889","#5F5F5F"],[0.106,0.42,1],11.5,5.1,11.5,-9).s().p("AhJAgIgQgDIgGgBIgCgBIgPgEIgcgKIgIgEIgFgCQgZgJgNgJQgRgLAGgDQAXACAdgCIBUgEIBdgGIAKADIAmANQAvALBTAAIgIAhIgCAFIAAACIhSADIheABQhHAAgVgEg");
	this.shape_29.setTransform(5.3,76.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#808080","#8C8C8E","#7B7B7B"],[0.106,0.482,0.729],10.2,5.9,10.2,-8.2).s().p("AA5ArQhygBg2gOIgKgEIgIgDIgNgFQgfgNgYgLQgLgHAGgDQAxADBxgHIAFAAIDUgSIAcgCIAAAAIgTBUIgIAAIgTAAIhPABIgXAAg");
	this.shape_30.setTransform(20.3,70.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#7D7D7E","#707070"],[0,1],-59.4,9.9,-11.8,7.6).s().p("AnVB4QhQgFhIgLIgJgBIgCgBIgZgEISgjdIABAAQAagEAXAFIAKACIALAFIAaALIAVAJIANAGIlEBkIgbACIgcACQhrAFhQALIgFAAQhvAHgwgDQgHADAMAHQAXANAfANIANAFQg1AFghAFIhUAEQgdABgXgCQgGADAQALQAOAJAYAMQg8ACg5AAQheAAhUgGg");
	this.shape_31.setTransform(7.4,65.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#CBCFD2","#DEDFE0"],[0,1],4.8,15,4.8,-22.3).s().p("AAQDZQiCgOhGAGIgGAAIAAgVIgEAAQAdgRASgUIAFgFQAIgKAIgMIEKlYIA3AAIiDFgIgEANQgGAVABAUQABATAFAQIgtgEgAgJCWQAIAJAIAIIAFACIABgEIgDgCQgKgIgHgJQgHgJgGgNIgDgBIgQAfIACACIAPgbQAFAMAIAJgAAMCJQAGAEAFgDQAHgDADgGQAEgHgDgGQgBgGgGgDQgEgCgEAAQgEABgEAEQAAgEgBgEQgCgEgEgCQgFgCgEABQgGACgDAHQgDAGACAGQABAGAFACIABAAIACgDQgFgDgBgDQgCgFADgFQADgEAEgBQADgCADADQAEACABADQACAFgEAEIgBAGIADABIACgEQAGgMAKAFQAFADABAEQACAFgDAEQgDAGgEABQgFABgFgCgAAYBRQAIAJAKAIIAFADIACgFIgEgCQgMgIgHgJQgIgJgFgMIgDgCIgOAfIACACIANgcQAFANAIAJgAATAjIAwAZIACgDIgrgWIAAgBIA0AFIACgDIgignIABAAIAqAUIACgDIgxgYIgCAGIAiAmIg1gEgAA2ggIAnAqIACgFIgKgJIALgXIAQACIACgEIg6gHgABzggIADgFIgPgaIAdgDIADgFIghAFIgQgdIgDAEIAOAZIgcADIgDAFIAhgEgAA8gfIAAAAIAgADIgKAUg");
	this.shape_32.setTransform(86,29.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#7D7D7E","#707070"],[0,1],2.4,-6.2,5.4,9.7).s().p("AmlBVIgSgCILviuQAcAIBkgOIjDBfIiKBCQjLAbh2AGIg7ABQhXAAg9gNg");
	this.shape_33.setTransform(321.7,33.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#929799").s().p("AgmCDQgLgJgHgIQgIgKgGgMIgOAbIgDgCIARgeIADABQAFAMAIAJQAHAKALAHIAEACIgCAFgAghBkIABgDQAFACAFgBQAEgCADgGQACgEgBgFQgBgEgFgDQgKgFgGAMIgCAFIgEgCIACgFQADgFgBgEQgBgEgFgCQgEgDgDACQgFABgCAFQgDAFACAFQABADAFACIgCAEIgBAAQgGgCgBgGQgCgHAEgFQACgIAGgBQAFgCAHADQADACACADQACAEAAAEQADgEAEAAQAFAAAEACQAGACABAHQACAGgDAGQgDAHgHACIgEACQgEAAgDgDgAgDA+QgKgJgIgJQgIgJgFgMIgPAcIgCgCIAQggIADACQAFAMAIAKQAHAJALAHIADADIgCAEgAgbAAIADgFIAyAFIgggpIADgFIAvAZIgCAEIgqgXIAAABIAhAnIgCACIgygCIAAAAIApAUIgCAEgAAGhFIADgDIA6AHIgCADIgQgBIgMAWIALAMIgCAEgAANhEIAVAYIAKgUIgfgEgAA0hiIghADIADgEIAcgEIgOgYIADgFIAQAdIAhgEIgDAEIgdAEIAPAaIgDAEg");
	this.shape_34.setTransform(90.7,32.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D7DBDD").s().p("AgmBUIALgcIAOgMIADgCIgSAqgAAIghIAVgyIAKAAIgVAyg");
	this.shape_35.setTransform(302.3,12.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F0F4F7").s().p("ACHBUIAUg1QAOgKAPgHQAZgMATgEQAVgFAQgJQARgIAFgJIhpAAIAUgyIC/AAQgXAegUAVQgVAVgWALIglAXQgRALgOAMQgOANgGAIIgMARgABmBUQAJgOANgOIgMAcgAigBUQgUAAgFgNQgEgMAJgLIAMgPIBcAAIgHAJQgDAFACAEQACADAGAAIATAAQAOAAAJgLIAMgPQAFgFgCgEQgCgFgIAAIg4AAIAYgcIAzAAQAWAAAKgNIALgNQADgEgBgEQgCgFgGAAIgXAAQgJAAgIALIgHAIIheAAIATgXQAUgaAmAAICVAAQATAAAFANQAFANgJAKIgbAhQgPASgYAAQAGAJAAAHQgBAGgGAIIgTAZQgVAZglAAgAmIBUQANgWAXgSQAWgSAYgMQAZgMAUgEQAUgFARgJQARgIAEgJIiYAAIAngyIDbAAQgWAegVAVQgVAVgVALIgmAXQgRALgOAMQgNANgHAIIgMARgACHghIAngyIAHAAIgUAyg");
	this.shape_36.setTransform(287,12.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#687572").s().p("AgTADIgBAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAIAHgCIAHgBQAMgCATgBIAGACIgDAAIgDAAQgTABgMACIgGACIgCgBg");
	this.shape_37.setTransform(64.8,50.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E4E9ED").s().p("ABRADQiCgLhGAFIgGgCIAGgBQBFgFCDALIAtAFIgBACIgBABIgrgFg");
	this.shape_38.setTransform(79.5,50.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#CBCFD2").s().p("AgZASQAdgQAWgTQgTASgbARg");
	this.shape_39.setTransform(68.6,46.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#4A5451").s().p("AAMAJIAAgJIAVAKIAAAIgAgXgFIgJgCQAAgGAEgEIABAAIASAIIgCAJg");
	this.shape_40.setTransform(68.5,53.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#57625F").s().p("AAJAIQABgHgJgCQgHgEgGAFIgSgIQAPgKAQABIAWAJQAKAIgDATIgVgLg");
	this.shape_41.setTransform(68.8,53);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FAFAFA").s().p("AgoAPIhHgjIgWgLQACgTgJgJIgWgKIgQgHQBGgFCCANIAsAFQgHAIAAAFQgBAFAHAIIByBuIhKAGg");
	this.shape_42.setTransform(85.4,58.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#6E7773").s().p("AgCAIIgLgFIgOgDIgCAAIAHgBQANgEARgBIAEgBIACAAIAQAHQgSAAgOAIg");
	this.shape_43.setTransform(66,51.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#748C91").s().p("AgKgCQAGgFAHAEQAJADgBAGIgVgIg");
	this.shape_44.setTransform(68.6,53.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#D9E0E5").s().p("AgggJIgNgGIAAgIIAWALIBFAjg");
	this.shape_45.setTransform(76.6,57.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#4C565B").s().p("AAAACIAAgEIABABIgBAEIAAgBg");
	this.shape_46.setTransform(-58.4,85.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#59656B").s().p("AgigKIATAAQAWAJAdAHIgCAFQgkgLgggKg");
	this.shape_47.setTransform(-62,85);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#2B2F36").s().p("AgFAHQgPAAgBgEQAAgDAOgEIAHgCQAbAAgHADIgZAKg");
	this.shape_48.setTransform(-66.2,113.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#191C1C").s().p("AgMAIQgMgCgBgFIAAgBIABAAIAggIQAZAAgKAHIgUAKg");
	this.shape_49.setTransform(-66,110.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#343739").s().p("AAHAHIgQgIQgKgEgBgDIgBgCQABgEANABIAIABIAKACIAAACQgEAJAHAHQADADAFADg");
	this.shape_50.setTransform(-65.8,81.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#838384").s().p("AjZAmIADgCIAZgTIBNg4IAAAAQAbAOAjALIAAAAIAMAEIAXAGQAvAHBOAAQA1AAA5gDIm3Aog");
	this.shape_51.setTransform(-9,86.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#24292B").s().p("AgCAPIgBAAIABgMIACABIgCAQgAgBgBIABgJIADgJIABABIgCAJIgCAJIgBgBg");
	this.shape_52.setTransform(-58.2,85.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#8A8A8A").s().p("AgCAwIADhfIABAAIgCBfg");
	this.shape_53.setTransform(-39.8,82.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#A2A2A3").s().p("AgJAnIARhOIACAAIgRBOg");
	this.shape_54.setTransform(-56.9,79.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#77120C").s().p("AABAgQgDgCAAg8IACAAQAAA3ADAHIgCAAg");
	this.shape_55.setTransform(-115.6,113.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#981810").s().p("AAbBSQAAgwADhTIADAAQgEBTAAAwIgCAAgAgbg1QgFgFAAgHQAAgHAFgFIABAAIAAgBQAFgDAFAAQAHAAAFAEQAEAFAAAHQAAAGgDAEIAAABIgBABQgFADgHAAQgHAAgEgDgAgbhBQAAAEADAEQAEAEAEAAQAFAAADgDIgRgQQgCADAAAEgAgWhMIAQARQACgDAAgDQAAgFgEgDQgDgEgFAAIgGABg");
	this.shape_56.setTransform(-118.7,102.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#5F6B6B").s().p("AhHAHIgCAAQg4gFgzgEIgDAAIgqgGIAAgDQBIALBQAEQCGAJCfgGIAGACQhHADhCAAQhVAAhLgFg");
	this.shape_57.setTransform(-32.2,76.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#617583").s().p("AmBA+IMCiHIAMgBQgIABgBAEIsQCQQADgGAIgHg");
	this.shape_58.setTransform(313,30.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#D7D9DB").s().p("Ag5AFQgHgCgCgDIgBAAIgBgBQACgEAIgBIAOgBIAFAAIALAAIAEAAIAXAAQAnABAfAGQg+AIghAAQgUAAgLgDg");
	this.shape_59.setTransform(358.7,24);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#32393C").s().p("AAqAvIgEAAQgmgDgqgFIgNgEIABgLIgKgEIgmgNIABgNQArAKAwALQAVAFAmAEIBDAFQAmACATADIgDACIgIAGQggAGgtAAIgrgBgAB4AaIhDgGQglgEgWgFQgygLgrgMIADgKIA7ARIB1AIIADAAIBKAHIAlgGIAHAJIgZATIg4gGgAjIgYIAAgBQACgFAJgBIAQAAQAgAMAnAMIgBAJgAiagfIACAAQAHgBABgCQABgDgGgDIgCgBIgBAAQgFgDgDgDIBBAQIgEAJIgCAJQgcgJgZgJg");
	this.shape_60.setTransform(-48.2,87);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#707272").s().p("AjcgBQAhAFCbgEIBQAAIAJAAIAVgBQBfgDAwgDIh/AIIgQABIggACQgtADglABIgBAAIgvAAQhZAAgvgJg");
	this.shape_61.setTransform(20,80.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#777979").s().p("AjDAAIgmgKQA2AMB0ABQAuAAA2gBIATgBIAIAAQBMgBBegFQhXAHhIAFIgMAAIgBAAQhHAEg4AAQhTAAgvgLg");
	this.shape_62.setTransform(32.5,74.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#52636F").s().p("AoyBkIDpguIBOgOIAEAAIMtiPQgLAGADAEIn9BaIpmBrIADgEg");
	this.shape_63.setTransform(-3,61.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#6B8185").s().p("AAsALIACgIIAXAKIAAAJgAhDgDIgBgCQAAgCAHgHIALgCIAIgBIAEgBIAIgDIAFgBIgCAHIAAABIgCAHIgBACIgEAFIgWAAQgJgBgCgCg");
	this.shape_64.setTransform(62.8,52.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#414947").s().p("AgCAHIABgDIABgEIAAgCIAAgGIAHgCIAAAEIAAAEIgCAEIgFAGIgBADIgFAAIAEgEg");
	this.shape_65.setTransform(60.1,51.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#656A67").s().p("AALACIgBAAIgegEIAHgBIAXADIACAAIAJABIAAADIgKgCg");
	this.shape_66.setTransform(-57,75.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#CCCEC1").s().p("AhhASIgiAAIA3gIIDQggIjmAtIABgFg");
	this.shape_67.setTransform(-49.4,69.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#505554").s().p("AgLgEIH8haQADAEASACIwLC3g");
	this.shape_68.setTransform(3.1,62);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#CDCDC3").s().p("EggRAD6IgPgDIgPgEIgJgCIAAAAIBYgBIAHgHIJnhsIn6BlIhYAPQgWALgdAAQgMAAgOgCgAUihdQAAgGAEgGIMRiSIABACIABABIsVCgIgCgFg");
	this.shape_69.setTransform(141.4,48.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#606865").s().p("EggpADzQAuAHAfgQIBYgPIQNi5QgSgCgDgEQgDgEAKgGIAMgCIAHgBIALgCQgHAGAAADIABACQACABAJABIAWAAIAGAAIADgDIAEgGIACgGIAAgEIAAgEIABAAIAYgFIAGgDIAUgJIAGAAIAEAAIAAATQgTABgOADIgHACIgGACQAAAAAAAAQABAAAAAAQABAAABAAQAAAAABABIABAAIACABIACAAIANADIALAGQgEAEAAAFQgYgGgaAFIgBAAIyiDeIgHACIg8gNgAU5hJQgmgIgHgOIMVifQACADAHABIrwCxg");
	this.shape_70.setTransform(143.8,49.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#515151").s().p("AhtAaIAIADIhfAHQAhgFA2gFgACqghIAbgCIjVASQBOgLBsgFg");
	this.shape_71.setTransform(18.4,70.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("A1zF2IAQgBQASAEAcAHQAHADABACgA0HFEIABAAIAMgBIAVAGQAGACADADgAzLD+IgmgWIAnAQQA8ANAyAPIAJAEgAUljaIASgqIAPgMIgVA2gAVVlRIAVgzIAKAAIgUAzg");
	this.shape_72.setTransform(167.6,43.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#1E1E1E").s().p("AhOgNIAAgPICdA2IAAADg");
	this.shape_73.setTransform(-45.9,93.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#CACED2").s().p("ACEAJIgDAAIAAgIIADAAIABABIAAAHIgBAAgAiDgIIADAAIAAAHIgEABIABgIg");
	this.shape_74.setTransform(-110.4,72.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#7E8991").s().p("AgmAVQACgTARgEQAbgLAfgHIAAAIIgBAAQgfAHgbAJQgNAFgFAMg");
	this.shape_75.setTransform(-133.9,74.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#8A8E8E").s().p("AAAgCIABAAIAAAFIgBABIAAgGg");
	this.shape_76.setTransform(-129.8,72.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#323836").s().p("AArBHQgrgFgUgJQgSgKgBgVIgGhhQANAnBDAYIADABQADArAEAjIgCAAg");
	this.shape_77.setTransform(-133.1,108.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// tail 8
	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#D8D8D8").s().p("AjBHbIAxh7IAKABIgxB8IgKgCgAAAgEIC8nYIAGAIIi8HUIgGgEg");
	this.shape_78.setTransform(318.5,-25.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#A5A5A5").s().p("AjDHdIAyh7IAJACIgyB7IgJgCgAAAgDIC/nbIAFAHIi+HXIgGgDg");
	this.shape_79.setTransform(317.7,-25.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#BFBFBF").s().p("AAQIeQgmgCgkgGIAxh8QARADAVAAQBiAAA4g8QAyg1gBhOQgChOg0g2QgVgWgagNIC8nSQAeAuAKA6QAOBYgnBKQgpBOhTAXQBWAaAoAtIh8HfQhHAlhhAAIgcgBgAj9HAQhZhMgQhvQgPhpA2hXQA6haBqgUQhkglgUg5ICVivQgYAjALA4QAKAwAZAcQAtAyBWgDQBVgCAwgxQArgtgCg/QgDg+gugsQgzgwhTAAQgwAAghAZICFieQB+AIBOBHQATASAQATIjCHZQgpgRg2gBQhbgBg5A9Qg0A1gBBOQgBBPAzA2QApApA+ANIgyB7QhogXhHg7g");
	this.shape_80.setTransform(306,-31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_80},{t:this.shape_79},{t:this.shape_78}]}).wait(1));

	// details
	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.rf(["#E3E4E3","#EEF3F7","#FDFFFD"],[0,0.753,1],-2.9,8.7,0,-2.9,8.7,20.5).s().p("AjeAbQAhgeApgLQAngLBMgBQA4AABGAPQBDANA/AZg");
	this.shape_81.setTransform(63.7,21.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["#2A3D66","#151B2C"],[0,1],-4.6,-0.3,5.3,-0.3).s().p("AgwAVQAwgYAygRIAAAfIglAHIgZADIgeAAIgGAAg");
	this.shape_82.setTransform(269.5,74);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.lf(["#2A3D66","#151B2C"],[0,1],-3.6,0,3.7,0).s().p("AgjAIQAwgHAXgJQgBALgOACIgVAEIgMAAQgMAAgLgBg");
	this.shape_83.setTransform(273.9,75.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["#2F5883","#427DBB","#4581BF","#4A8BCD"],[0.071,0.263,0.749,0.894],-3.9,-1.5,1.6,0.6).s().p("AgnAHQAAgJAEgKQAEgLAIgJIA/gCIgcBEg");
	this.shape_84.setTransform(346.9,-101.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#3B6FA5").s().p("Ak/KNIADgHIALABIALABIEKAWIgCAIgADEpXIgGgDIgvgXQgBgNAFgOQAGgOANgLIBFAAIBVAAIgBAEIhXACIhBABQgIAKgEAKQgEALAAALIA1AbIgBACIgBACg");
	this.shape_85.setTransform(327.7,-37.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#529BE5").s().p("Aj9JvIH1zeIAGADInwTcg");
	this.shape_86.setTransform(322.5,-35.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#4078B2").s().p("AkAJwIH7zgIAFADIn1Teg");
	this.shape_87.setTransform(321.7,-35.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#4D4D4D").s().p("AC1BZIAAgEIAAAAIAAgBIACgDIgIAAIABgCIABAAIAEgBQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIABADIgCAFIgCAAgAiyhPIABgCIAAAAIAAgBIACgDIgIAAIABgBIABgBQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAIADADIABADIgCADIgCAAg");
	this.shape_88.setTransform(-334.9,71.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#646464").s().p("AgBAJIgFgCIgCgBIAJAAIACgBIACgCIAAgDIgDgBQgBgBAAAAQgBAAAAABQAAAAAAAAQAAAAAAAAIgBABIgBAAIgBAAIgHACIAAgCQAAgDAEgCQACgCADgBIABgBQAFABADADQADACAAADQAAAEgDADQgDACgFAAIgBAAg");
	this.shape_89.setTransform(-353,63.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#696969").s().p("ACxBWIAAgFIABAAIADAAIADAAIAFAAIABAAIADAAIABAAIAAAAIABABIAAAAIgBAEIgBAAgAiwhSIgRAAIgBAAIAAgDIABAAIAKAAIADAAIACAAIAIAAIABAAIAFAAIAAAAIABABIAAAAIgBACIgBAAg");
	this.shape_90.setTransform(-336.2,72.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#858585").s().p("AC6BVIgCAAIgDAAIgBAAIgFAAIAFgDIAIAAIgCADgAithRIgFAAIAAAAIgJAAIAHgDIACAAIAIAAIgCADIgBAAg");
	this.shape_91.setTransform(-335.3,71.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#474C56").s().p("AABADIgIgFIAFABIACgBIAIAEIgBAAIgEABIgCAAg");
	this.shape_92.setTransform(-353,73.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#636B79").s().p("AgDADQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAQABAAAAgBIADgBIAEABIABABIABABQAAAAAAAAQAAABgBAAQAAAAAAABQgBAAAAABIgEAAIgDAAg");
	this.shape_93.setTransform(-353.4,73);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#5C6370").s().p("AgDAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAgBIgBgCIAFAEIABACQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAg");
	this.shape_94.setTransform(-352.5,73.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#993333").s().p("AgNANQgHgGABgHQgBgGAHgGQAFgFAIAAQAIAAAGAFQAGAGAAAGQAAAHgGAGQgGAFgIAAQgIAAgFgFgAgCgNQgFABgFADQgEAFAAAEQAAAGAEAEQAFADAFACIACAAQAGAAAGgFQAFgEAAgGQAAgEgFgFQgGgEgGAAIgCAAg");
	this.shape_95.setTransform(-352.9,73.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#252525").s().p("AgXgFIAvAAQgNALgLAAQgLAAgMgLg");
	this.shape_96.setTransform(-32.7,103.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#121827").s().p("AgZgBQANgIAhAHIAFAGQgfgEgNAGg");
	this.shape_97.setTransform(25.1,97.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#1E2A45").s().p("AAEAaIgrgwQANgHAfAGIAjAxQgHABgJAAIgUgBg");
	this.shape_98.setTransform(27.2,100.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#27385E").s().p("AguAAQAagQAigCIATAUIAJgBQAIADgEAJIhDAGg");
	this.shape_99.setTransform(234.4,82.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#272A29").s().p("AgJAAIATgCQgEAFgGAAQgDAAgGgDg");
	this.shape_100.setTransform(275,76.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#151B2C").s().p("AlDBPQAbgQAkgCIAEAFQgjABgbARgABBAXIAcgDIAkgGIAAggQg0ARgwAYQgeAAgTgFIDBg3ICXguQhSBHhTASIAAAFQgYALgxAHQgLgCgKgEg");
	this.shape_101.setTransform(261.6,73.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#D3D4D4").s().p("AgSBZQgJgCgBgQQAAgRAKgXQgNgQAAgUQAAgZASgTQARgSAZAAQAOAAAOAGQARgOAVgOIgeAhIAIAHQAHAHADAHIAFAKQACAHAAAHIABAGIgBAFQgBAJgEAKQAnAPA6ACIg6AFQgXACgegCIgBgCQgQAPgXABIgCAAQgVAAgNgLQgLAaANAFQALAEAXgYIAAABQgLARgOAIQgLAJgKAAIgDgBgAgCAlQAMALASAAQAWAAAQgQIgOgfQALAJAOAHQAEgIABgJIAAgEIAAgGIgDgOIgGgLIgHgIIgHgGQgxA1gMAhgAgIgrQgQAQAAAXQAAAPAKANQANgYATgXQAPgQARgPQgKgEgMAAQgXAAgNAPgAJ4ANQgHAAgCgEQgCgGADgDIAfglQAIgKAOgBIA3AAQAHAAADAFQABAFgDAEIgGAIIgiAAIACgDQABgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBAAIgIAAQgEAAgDAEIgXAdQAAAAgBABQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAIAIAAQAFAAADgCIANgQIArAAIgKAMIgIAAIgKAJQgHAKgPAAgAI3ANIgIgdIgZAdIgWAAIAxg9IAbAAIAIAgIAYggIAYAAIgyA9gAHGANIAyg9IAjAAIgyA9gAFqANIAyg9IBGAAIgKANIgkAAIgJAMIAkAAIgLANIgjAAIgKAKIAjAAIgKANgAERANQgHAAgCgEQgBgGADgDIAfgmQAIgKAOAAIA4AAQAHAAABAFQACAFgDAEIggAlQgHAKgPAAgAFGgfIgWAdQgBAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIAIAAQAFAAACgCIAXgbIABgEQAAAAgBgBQAAAAAAAAQgBAAgBgBQAAAAgBAAIgIAAQgEAAgDAEgACWANIAyg9IBFAAQAHAAACAFQACAFgEAEIgJAMQgEAGgLABQADADAAADQAAADgDADIgHAGQgIAKgPAAgADDAAIAOAAQAEAAADgCIADgDQABAAAAgBQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAAAQgBAAAAgBQgBAAAAAAIgNAAgADXgXIAOAAQAFAAACgDIADgDQAAgBAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBAAgBgBQAAAAgBAAIgMAAgAnngjIAAgFIgKAFIgPAAIAYgOIgCgOIAOAAIABAHIAJgHIAPAAIgYAPIABANgAoOgjIAEgLIgJAAIgNALIgMAAIAhgcIAWAAIgLAcgAoMg0IAEAAIADgFgAo6gjIALgOIgVAOIgLAAIgBgOIgLAOIgJAAIAVgcIAMAAIABAQIAWgQIARAAIgWAcgAqWgjQACgEAEgDIAHgFIAHgDIAGgCIADgCIgXAAIAGgJIAiAAQgDAGgEADIgGAFIgHAEIgEADIgEAEIgCADgAq+gjQgBAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAIACgDIALAAIgBACIAAABIABABIAEAAQAAAAABAAQAAAAABgBQAAAAAAAAQABgBAAAAIACgCIAAgCIgBAAIgJAAIAEgGIAIAAQAEAAACgCIABgBIAAgCIgBAAIgEAAIgDABIgBACIgLAAIACgEQAEgFAFAAIAWAAQABAAAAAAQABABABAAQAAAAAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBAAIgEAFQgDAEgDAAIABACIgCACIgDAEQgDAFgGAAgArlgjQABgEAEgDIAIgFIAHgDIAGgCIADgCIgXAAIAGgJIAiAAQgDAGgEADIgHAFIgGAEIgEADIgDAEIgCADg");
	this.shape_102.setTransform(-273.4,76.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#9FA4A6").s().p("EAnOACwQgbAAAAgaIAAkrQAAgaAbAAIBZAAQAbAAAAAaIAAErQAAAagbAAgEAm7gCVIAAErQAAATATAAIBZAAQATAAAAgTIAAkrQAAgTgTAAIhZAAQgTAAAAATgEgomACwQgZAAgCgXIAAgDIAAkrQAAgaAbAAIBtAAQAaAAAAAaIAAErIAAADQgBAXgZAAgEgo5gCVIAAErIAAADQACAQARAAIBtAAQARAAACgQIAAgDIAAkrQAAgTgTAAIhtAAQgTAAAAATgAicCHQgSAAgMgNQgMgMAAgRIAAiDQAAgRAMgNQAMgMASAAIAeAAQARAAAMAMQANANAAARIAACDQAAARgNAMQgMANgRAAgAi1g+QgKAKAAAOIAACDQAAAOAKAKQAKAKAPAAIAeAAQAOAAAKgKQAKgKAAgOIAAiDQAAgOgKgKQgKgKgOAAIgeAAQgPAAgKAKgAlVCHQgRAAgNgNQgMgMAAgRIAAiDQAAgRAMgNQANgMARAAIAeAAQARAAANAMQAMANAAARIAACDQAAARgMAMQgNANgRAAgAltg+QgKAKAAAOIAACDQAAAOAKAKQAKAKAOAAIAeAAQAOAAAKgKQAKgKAAgOIAAiDQAAgOgKgKQgKgKgOAAIgeAAQgOAAgKAKg");
	this.shape_103.setTransform(-32.8,52.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#333333").s().p("AgPADQAPgNAQANg");
	this.shape_104.setTransform(-99.6,22.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#E3E4E3").s().p("A/UAsQATgBALABQAMAAACADIgGAAIgzADQACgFALgBgA7rAYIAJAAIgDANIgWABgA4ogIIAVAAIgPAnIgWABgAejAeIAdgvIAiAAIgTAvgAbGAeQAIgVAOgBIBkAAQANABAJAVgAKpAeQAQgGAJgBQAJgCAmAAQAlAAALAJgAGEAeQAQgGAJgBQAJgCAmAAQAmAAALAJgABpAeIA/hOIATAAIgbBOgAmaAeIACgGIAEAAIAgAAIACAAIADAGg");
	this.shape_105.setTransform(-60.6,20.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#212832").s().p("AmqAsIg+hKIA2AAIAaBKgAHdgLIgJgeIAVgCIgEAggAEdgOIgOgSIAXgBIAAATg");
	this.shape_106.setTransform(89.3,102.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#232A45").s().p("AmCAdIg8g5IAvAAIAkA5gAGvABIgGgdIAWAAIgFAdgAE8ABIgHgdIAXAAIgFAdg");
	this.shape_107.setTransform(-175.5,102.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#121212").s().p("AAaCOQgHgFAAgIQAAgIAHgFQAHgGALABQAKgBAHAGQAHAFAAAIQAAAIgHAFQgHAGgKAAQgLAAgHgGgAAdB3QgGAEAAAGQAAAHAGAEQAGAEAJAAQAIAAAGgEQAHgEAAgHQAAgGgHgEQgGgEgIgBQgJABgGAEgAAoCEIgBgDIABgCIAEgBIADABIACACIgCADIgDAAIgEAAgAg/hpQgEgEAAgIIAAgNQAAgHAEgFQAFgEAHAAQAHAAAFAEQAEAFAAAHIAAANQAAAIgEAEQgFAFgHAAQgHAAgFgFgAg8iLQgDADAAAGIAAANQAAAGADADQAEAEAFAAQAGAAADgEQAEgDAAgGIAAgNQAAgGgEgDQgDgEgGAAQgFAAgEAEg");
	this.shape_108.setTransform(-242.4,78.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#525964").s().p("AIsDXQgFgEAAgHQAAgFAFgFQAGgEAJAAQAJAAAGAEQAHAFgBAFQABAHgHAEQgGAEgJAAQgJAAgGgEgAI4DKIgBACIABAEIADAAIAEAAIACgEIgCgCIgEAAIgDAAgApEAnIgHgEQgFgDABgHQgBgFAFgDQAEgDADgBIADAAQAHAAAFAEQADADAAAFQAAAHgDADQgFAEgHAAIgDAAgApJATQAAAAgBABQAAAAAAAAQgBABAAAAQAAABAAAAQAAAAAAABQAAAAABABQAAAAAAAAQABABAAAAIAKAHIACAAIAEgBIAAAAQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAAAIgBgDIgIgFIgBgBIgDgBIgFABgAAJAEQgRAAgFgSIAAgLIAMAAQABAXAXAAIBtAAQAaAAABgXIAKAAIAAAMQgEARgTAAgAHSggQgDgDgBgGIAAgOQABgFADgEQADgDAFAAQAHAAADADQADAEABAFIAAAOQgBAGgDADQgDAEgHgBQgFABgDgEgAF1iIQgKABgGgHIgBAAQgFgFAAgLIAAglQAAgLAFgGIABAAQAHgGAJgBIAQAAQAJABAIAGQAGAIAAAJIAAAlQAAAJgGAHIAAAAQgIAHgJgBgAFpjQQgFAGAAAHIAAAlQAAAHAFAFQAFAFAHAAIAQAAQAHAAAFgFQAFgFAAgHIAAglQAAgIgFgFQgFgFgHABIgQAAQgIgBgEAFg");
	this.shape_109.setTransform(-295.1,70.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#424E60").s().p("EAnfAAdQgDAAgCgCQgCgCgBgEIABgEIACgBQABgDAEAAQAggCAfACQADAAABACQADADAAACQAAADgDADQgBACgDAAIglABIgaAAgEAndAARQgFADAFACIAXAAIAGAFIAjgCQAFgCgDgEIgbAAIgGgFgEgodgAMQgCAAgCgCQgCgCAAgDQAAgBAAAAQAAgBAAgBQAAAAAAAAQABgBAAAAIABgCQAAAAABgBQABAAAAAAQABgBAAAAQABAAAAAAQAggCAfABQAEAAACADQAAAAABABQAAAAABABQAAAAAAABQAAABAAAAQAAAEgCACQgCACgEAAQgTACgUAAIgYgBgEgofgAYQgEAEAEABIAZAAIAEAGIAkgDQAFgBgDgFIgcAAIgEgEg");
	this.shape_110.setTransform(-31.4,52.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#AFB4B6").s().p("EAjPABEQgKAAgHgHIAAAAQgGgFAAgLIAAglQAAgJAGgGIAAAAQAHgGAKAAIAPAAQAKAAAHAGQAGAHAAAIIAAAlQAAAJgGAHIAAAAQgHAHgKAAgEAjCgACQgFADABAHIAAAlQgBAHAFAGQAFAEAIAAIAPAAQAHAAAGgEQAEgGAAgHIAAglQAAgHgEgDQgGgFgHAAIgPAAQgIAAgFAFgEAhuABEQgKAAgHgHIAAAAQgFgFAAgLIAAglQAAgJAFgGIAAAAQAIgGAJAAIAQAAQAKAAAGAGQAGAHAAAIIAAAlQAAAJgGAHIAAAAQgGAHgKAAgEAhigACQgGADAAAHIAAAlQAAAHAGAGQAEAEAIAAIAQAAQAHAAAFgEQAFgGAAgHIAAglQAAgHgFgDQgFgFgHAAIgQAAQgIAAgEAFgEAgNABEQgJAAgHgHIgBAAQgEgFAAgLIAAglQAAgJAEgGIABAAQAHgGAJAAIAQAAQAKAAAHAGQAGAHAAAIIAAAlQAAAJgGAHIAAAAQgHAHgKAAgEAgBgACQgFADAAAHIAAAlQAAAHAFAGQAFAEAHAAIAQAAQAHAAAFgEQAGgGAAgHIAAglQAAgHgGgDQgEgFgIAAIgQAAQgHAAgFAFgAetBEQgKAAgGgHIgBAAQgFgFAAgLIAAglQAAgJAFgGIABAAQAHgGAJAAIAQAAQAJAAAHAGQAHAHAAAIIAAAlQAAAJgHAHIAAAAQgHAHgJAAgAeggCQgEADAAAHIAAAlQAAAHAEAGQAFAEAIAAIAQAAQAGAAAGgEQAFgGAAgHIAAglQAAgHgFgDQgFgFgHAAIgQAAQgIAAgFAFgAdOBEQgJAAgIgHIAAAAQgFgFAAgLIAAglQAAgJAFgGIAAAAQAIgGAJAAIAQAAQAKAAAGAGQAHAHAAAIIAAAlQAAAJgHAHIAAAAQgGAHgKAAgAdCgCQgGADAAAHIAAAlQAAAHAGAGQAFAEAHAAIAQAAQAHAAAFgEQAFgGAAgHIAAglQAAgHgFgDQgFgFgHAAIgQAAQgIAAgEAFgAbsBEQgJAAgHgHIAAAAQgGgFABgLIAAglQgBgJAGgGIAAAAQAHgGAJAAIARAAQAJAAAHAGQAHAHgBAIIAAAlQABAJgHAHIAAAAQgHAHgJAAgAbggCQgEADgBAHIAAAlQABAHAEAGQAGAEAGAAIARAAQAGAAAFgEQAGgGAAgHIAAglQAAgHgGgDQgFgFgGAAIgRAAQgHAAgFAFgAaMBEQgJAAgHgHIAAAAQgGgFAAgLIAAglQAAgJAGgGIAAAAQAHgGAJAAIAQAAQAJAAAIAGQAGAHAAAIIAAAlQAAAJgGAHIAAAAQgIAHgJAAgAaAgCQgFADAAAHIAAAlQAAAHAFAGQAFAEAHAAIAQAAQAHAAAFgEQAFgGAAgHIAAglQAAgHgFgDQgFgFgHAAIgQAAQgIAAgEAFgAYsBEQgKAAgHgHIAAAAQgFgFgBgLIAAglQABgJAFgGQAIgGAJAAIAPAAQAKAAAHAGQAGAHAAAIIAAAlQAAAJgGAHIAAAAQgHAHgKAAgAYfgCQgFADABAHIAAAlQgBAHAFAGQAFAEAIAAIAPAAQAHAAAGgEQAEgGAAgHIAAglQAAgHgEgDQgFgFgIAAIgPAAQgIAAgFAFgAXLBEQgJAAgIgHIAAAAQgFgFAAgLIAAglQAAgJAFgGIAAAAQAIgGAJAAIAQAAQAJAAAIAGQAFAHAAAIIAAAlQAAAJgFAHIAAAAQgIAHgJAAgAW/gCQgFADAAAHIAAAlQAAAHAFAGQAFAEAHAAIAQAAQAHAAAFgEQAFgGAAgHIAAglQAAgHgFgDQgFgFgHAAIgQAAQgHAAgFAFgAVsBEQgKAAgGgHIgBAAQgFgFAAgLIAAglQAAgJAFgGIABAAQAGgGAKAAIAQAAQAJAAAHAGQAGAHABAIIAAAlQgBAJgGAHIAAAAQgHAHgJAAgAVfgCQgEADAAAHIAAAlQAAAHAEAGQAFAEAIAAIAQAAQAHAAAFgEQAFgGAAgHIAAglQAAgHgFgDQgFgFgHAAIgQAAQgIAAgFAFgAUJBEQgJAAgHgHIAAAAQgGgFAAgLIAAglQAAgJAGgGIAAAAQAHgGAJAAIAQAAQAJAAAHAGQAHAHAAAIIAAAlQAAAJgHAHIAAAAQgHAHgJAAgAT8gCQgDADAAAHIAAAlQAAAHADAGQAGAEAHAAIAQAAQAHAAAGgEQAEgGAAgHIAAglQAAgHgEgDQgGgFgHAAIgQAAQgHAAgGAFgASkBEQgJAAgHgHIAAAAQgFgFAAgLIAAglQAAgJAFgGIAAAAQAIgGAIAAIARAAQAJAAAHAGQAHAHAAAIIAAAlQAAAJgHAHIAAAAQgHAHgJAAgASZgCQgFADgBAHIAAAlQABAHAFAGQAFAEAGAAIARAAQAGAAAGgEQAFgGAAgHIAAglQAAgHgFgDQgFgFgHAAIgRAAQgHAAgEAFgAQ6BEQgJAAgHgHIAAAAQgGgFAAgLIAAglQAAgJAGgGIAAAAQAIgGAIAAIAQAAQAKAAAGAGQAHAHAAAIIAAAlQAAAJgHAHIAAAAQgGAHgKAAgAQugCQgFADAAAHIAAAlQAAAHAFAGQAFAEAHAAIAQAAQAHAAAGgEQAEgGAAgHIAAglQAAgHgEgDQgFgFgIAAIgQAAQgHAAgFAFgAPTBEQgKAAgHgHIgBAAQgEgFgBgLIAAglQABgJAEgGIABAAQAHgGAKAAIAQAAQAJAAAGAGQAHAHAAAIIAAAlQAAAJgHAHIAAAAQgGAHgJAAgAPGgCQgFADAAAHIAAAlQAAAHAFAGQAFAEAIAAIAQAAQAGAAAFgEQAFgGABgHIAAglQgBgHgFgDQgEgFgHAAIgQAAQgJAAgEAFgANmBEQgKAAgGgHIgBAAQgGgFAAgLIAAglQAAgJAGgGIABAAQAHgGAJAAIAQAAQAJAAAHAGQAGAHAAAIIAAAlQAAAJgGAHIAAAAQgHAHgJAAgANZgCQgEADAAAHIAAAlQAAAHAEAGQAFAEAIAAIAQAAQAGAAAGgEQAFgGgBgHIAAglQABgHgFgDQgFgFgHAAIgQAAQgIAAgFAFgAL7BEQgJAAgHgHIgBAAQgFgFAAgLIAAglQAAgJAFgGIABAAQAHgGAJAAIAQAAQAJAAAIAGQAGAHAAAIIAAAlQAAAJgGAHIAAAAQgIAHgJAAgALvgCQgFADAAAHIAAAlQAAAHAFAGQAFAEAHAAIAQAAQAHAAAFgEQAFgGABgHIAAglQgBgHgFgDQgEgFgIAAIgQAAQgHAAgFAFgAKQBEQgJAAgHgHIAAAAQgFgFAAgLIAAglQAAgJAFgGIAAAAQAHgGAJAAIARAAQAKAAAGAGQAHAHgBAIIAAAlQABAJgHAHIAAAAQgGAHgKAAgAKFgCQgGADAAAHIAAAlQAAAHAGAGQAFAEAGAAIARAAQAGAAAGgEQAFgGAAgHIAAglQAAgHgFgDQgFgFgHAAIgRAAQgHAAgEAFgAIsBEQgJAAgHgHIAAAAQgGgFABgLIAAglQgBgJAGgGIAAAAQAHgGAJAAIARAAQAJAAAHAGQAHAHgBAIIAAAlQABAJgHAHIAAAAQgHAHgJAAgAIggCQgEADgBAHIAAAlQABAHAEAGQAGAEAGAAIARAAQAGAAAFgEQAFgGABgHIAAglQgBgHgFgDQgFgFgGAAIgRAAQgHAAgFAFgAHMBEQgKAAgGgHIgBAAQgFgFAAgLIAAglQAAgJAFgGIABAAQAHgGAJAAIAQAAQAJAAAIAGQAGAHAAAIIAAAlQAAAJgGAHIAAAAQgIAHgJAAgAHAgCQgFADAAAHIAAAlQAAAHAFAGQAFAEAHAAIAQAAQAHAAAFgEQAFgGABgHIAAglQgBgHgFgDQgEgFgIAAIgQAAQgIAAgEAFgAFsBEQgKAAgGgHIAAAAQgGgFAAgLIAAglQAAgJAGgGIAAAAQAHgGAJAAIAQAAQAKAAAGAGQAHAHAAAIIAAAlQAAAJgHAHIAAAAQgGAHgKAAgAFfgCQgEADAAAHIAAAlQAAAHAEAGQAGAEAHAAIAQAAQAHAAAGgEQAEgGAAgHIAAglQAAgHgEgDQgGgFgHAAIgQAAQgHAAgGAFgAEKBEQgKAAgHgHIAAAAQgGgFAAgLIAAglQAAgJAGgGIAAAAQAIgGAJAAIAPAAQAKAAAGAGQAIAHgBAIIAAAlQABAJgIAHIAAAAQgGAHgKAAgAD9gCQgFADAAAHIAAAlQAAAHAFAGQAFAEAIAAIAPAAQAHAAAGgEQAFgGgBgHIAAglQABgHgFgDQgFgFgIAAIgPAAQgJAAgEAFgACkBEQgJAAgHgHIAAAAQgGgFAAgLIAAglQAAgJAGgGIAAAAQAHgGAJAAIAQAAQAKAAAHAGQAGAHAAAIIAAAlQAAAJgGAHIAAAAQgHAHgKAAgACYgCQgFADABAHIAAAlQgBAHAFAGQAFAEAHAAIAQAAQAHAAAGgEQAEgGAAgHIAAglQAAgHgEgDQgGgFgHAAIgQAAQgHAAgFAFgAA+BEQgJAAgIgHIAAAAQgGgFABgLIAAglQgBgJAGgGIAAAAQAIgGAJAAIAQAAQAJAAAIAGQAFAHAAAIIAAAlQAAAJgFAHIAAAAQgIAHgJAAgAAxgCQgEADAAAHIAAAlQAAAHAEAGQAGAEAHAAIAQAAQAHAAAFgEQAFgGAAgHIAAglQAAgHgFgDQgFgFgHAAIgQAAQgHAAgGAFgAgvBEQgJAAgHgHIgBAAQgFgFAAgLIAAglQAAgJAFgGIABAAQAHgGAJAAIAQAAQAJAAAHAGQAHAHAAAIIAAAlQAAAJgHAHIAAAAQgHAHgJAAgAg8gCQgEADAAAHIAAAlQAAAHAEAGQAGAEAHAAIAQAAQAGAAAGgEQAFgGAAgHIAAglQAAgHgFgDQgFgFgHAAIgQAAQgHAAgGAFgAikBEQgJAAgHgHIgBAAQgFgFgBgLIAAglQABgJAFgGIABAAQAHgGAJAAIAPAAQAKAAAHAGQAHAHgBAIIAAAlQABAJgHAHIAAAAQgHAHgKAAgAixgCQgEADAAAHIAAAlQAAAHAEAGQAGAEAHAAIAPAAQAIAAAFgEQAFgGAAgHIAAglQAAgHgFgDQgFgFgIAAIgPAAQgHAAgGAFgAlbBEQgJAAgHgHIAAAAQgGgFAAgLIAAglQAAgJAGgGIAAAAQAHgGAJAAIAQAAQAKAAAHAGQAGAHAAAIIAAAlQAAAJgGAHIAAAAQgHAHgKAAgAlngCQgFADABAHIAAAlQgBAHAFAGQAFAEAHAAIAQAAQAHAAAGgEQAEgGAAgHIAAglQAAgHgEgDQgGgFgHAAIgQAAQgHAAgFAFgAm+BEQgKAAgGgHIgBAAQgFgFAAgLIAAglQAAgJAFgGIABAAQAHgGAJAAIAQAAQAJAAAHAGQAHAHAAAIIAAAlQAAAJgHAHIAAAAQgHAHgJAAgAnLgCQgEADAAAHIAAAlQAAAHAEAGQAFAEAIAAIAQAAQAHAAAFgEQAFgGAAgHIAAglQAAgHgFgDQgFgFgHAAIgQAAQgIAAgFAFgAobBEQgJAAgHgHIAAAAQgFgFAAgLIAAglQAAgJAFgGIAAAAQAHgGAJAAIARAAQAKAAAGAGQAHAHgBAIIAAAlQABAJgHAHIAAAAQgGAHgKAAgAomgCQgGADAAAHIAAAlQAAAHAGAGQAFAEAGAAIARAAQAGAAAGgEQAFgGAAgHIAAglQAAgHgFgDQgFgFgHAAIgRAAQgHAAgEAFgAp4BEQgKAAgGgHIgBAAQgFgFAAgLIAAglQAAgJAFgGIABAAQAGgGAKAAIAQAAQAJAAAHAGQAGAHAAAIIAAAlQAAAJgGAHIAAAAQgHAHgJAAgAqFgCQgEADAAAHIAAAlQAAAHAEAGQAGAEAHAAIAQAAQAGAAAGgEQAFgGAAgHIAAglQAAgHgFgDQgFgFgHAAIgQAAQgIAAgFAFgAs+BEQgJAAgHgHIAAAAQgGgFAAgLIAAglQAAgJAGgGIAAAAQAHgGAJAAIAQAAQAKAAAGAGQAHAHAAAIIAAAlQAAAJgHAHIAAAAQgGAHgKAAgAtLgCQgEADAAAHIAAAlQAAAHAEAGQAGAEAHAAIAQAAQAHAAAFgEQAGgGgBgHIAAglQABgHgGgDQgEgFgIAAIgQAAQgHAAgGAFgAwUBEQgJAAgHgHIgBAAQgEgFAAgLIAAglQAAgJAEgGIABAAQAHgGAJAAIARAAQAJAAAHAGQAGAHAAAIIAAAlQAAAJgGAHIAAAAQgHAHgJAAgAwggCQgFADAAAHIAAAlQAAAHAFAGQAFAEAHAAIARAAQAGAAAGgEQAFgGAAgHIAAglQAAgHgFgDQgGgFgGAAIgRAAQgIAAgEAFgAx9BEQgJAAgIgHIAAAAQgFgFAAgLIAAglQAAgJAFgGIAAAAQAIgGAJAAIAQAAQAJAAAHAGQAHAHAAAIIAAAlQAAAJgHAHIAAAAQgHAHgJAAgAyJgCQgFADAAAHIAAAlQAAAHAFAGQAEAEAIAAIAQAAQAGAAAGgEQAFgGAAgHIAAglQAAgHgFgDQgFgFgHAAIgQAAQgIAAgEAFgAzoBEQgJAAgGgHIgBAAQgFgFgBgLIAAglQABgJAFgGIABAAQAHgGAIAAIAQAAQAKAAAHAGQAGAHABAIIAAAlQgBAJgGAHIAAAAQgHAHgKAAgAz0gCQgFADABAHIAAAlQgBAHAFAGQAGAEAGAAIAQAAQAHAAAGgEQAEgGAAgHIAAglQAAgHgEgDQgGgFgHAAIgQAAQgHAAgFAFgA1RBEQgJAAgHgHIgBAAQgFgFgBgLIAAglQABgJAFgGIABAAQAHgGAJAAIAPAAQAKAAAHAGQAHAHgBAIIAAAlQABAJgHAHIAAAAQgHAHgKAAgA1egCQgEADAAAHIAAAlQAAAHAEAGQAGAEAHAAIAPAAQAIAAAFgEQAFgGAAgHIAAglQAAgHgFgDQgFgFgIAAIgPAAQgHAAgGAFgA27BEQgKAAgHgHIgBAAQgEgFgBgLIAAglQABgJAEgGIABAAQAHgGAKAAIAQAAQAJAAAHAGQAGAHAAAIIAAAlQAAAJgGAHIAAAAQgHAHgJAAgA3IgCQgEADgBAHIAAAlQABAHAEAGQAFAEAIAAIAQAAQAHAAAEgEQAFgGABgHIAAglQgBgHgFgDQgEgFgHAAIgQAAQgIAAgFAFgA4mBEQgJAAgIgHIAAAAQgFgFAAgLIAAglQAAgJAFgGIAAAAQAIgGAJAAIAQAAQAJAAAIAGQAFAHAAAIIAAAlQAAAJgFAHIAAAAQgIAHgJAAgA4ygCQgFADAAAHIAAAlQAAAHAFAGQAEAEAIAAIAQAAQAHAAAFgEQAFgGAAgHIAAglQAAgHgFgDQgFgFgHAAIgQAAQgIAAgEAFgA6QBEQgJAAgHgHIgBAAQgEgFAAgLIAAglQAAgJAEgGIABAAQAIgGAIAAIAQAAQAKAAAHAGQAGAHAAAIIAAAlQAAAJgGAHIAAAAQgHAHgKAAgA6cgCQgFADAAAHIAAAlQAAAHAFAGQAFAEAHAAIAQAAQAHAAAFgEQAGgGgBgHIAAglQABgHgGgDQgEgFgIAAIgQAAQgHAAgFAFgA71BEQgKAAgGgHIgBAAQgEgFAAgLIAAglQAAgJAEgGIABAAQAHgGAJAAIARAAQAJAAAHAGQAGAHAAAIIAAAlQAAAJgGAHIAAAAQgHAHgJAAgA8BgCQgFADAAAHIAAAlQAAAHAFAGQAFAEAHAAIARAAQAGAAAFgEQAGgGAAgHIAAglQAAgHgGgDQgFgFgGAAIgRAAQgHAAgFAFgA9WBEQgJAAgIgHIAAAAQgFgFAAgLIAAglQAAgJAFgGIAAAAQAIgGAJAAIAQAAQAJAAAIAGQAFAHABAIIAAAlQgBAJgFAHIAAAAQgIAHgJAAgA9igCQgFADAAAHIAAAlQAAAHAFAGQAEAEAIAAIAQAAQAHAAAFgEQAFgGAAgHIAAglQAAgHgFgDQgFgFgHAAIgQAAQgIAAgEAFgA+2BEQgKAAgHgHIAAAAQgGgFAAgLIAAglQAAgJAGgGIAAAAQAIgGAJAAIAPAAQAKAAAGAGQAIAHAAAIIAAAlQAAAJgIAHIAAAAQgGAHgKAAgA/DgCQgFADAAAHIAAAlQAAAHAFAGQAFAEAIAAIAPAAQAHAAAGgEQAFgGgBgHIAAglQABgHgFgDQgFgFgIAAIgPAAQgJAAgEAFgEggXABEQgJAAgIgHIAAAAQgFgFAAgLIAAglQAAgJAFgGQAIgGAJAAIAQAAQAJAAAHAGQAHAHAAAIIAAAlQAAAJgHAHIAAAAQgHAHgJAAgEggkgACQgEADAAAHIAAAlQAAAHAEAGQAGAEAHAAIAQAAQAHAAAFgEQAFgGAAgHIAAglQAAgHgFgDQgFgFgHAAIgQAAQgHAAgGAFgEgh4ABEQgJAAgHgHIAAAAQgGgFABgLIAAglQgBgJAGgGIAAAAQAHgGAJAAIARAAQAJAAAHAGQAHAHgBAIIAAAlQABAJgHAHIAAAAQgHAHgJAAgEgiEgACQgEADgBAHIAAAlQABAHAEAGQAGAEAGAAIARAAQAGAAAFgEQAGgGAAgHIAAglQAAgHgGgDQgFgFgGAAIgRAAQgHAAgFAFgEgk4ABEQgJAAgHgHIAAAAQgGgFAAgLIAAglQAAgJAGgGIAAAAQAHgGAJAAIAQAAQAKAAAGAGQAHAHAAAIIAAAlQAAAJgHAHIAAAAQgGAHgKAAgEglFgACQgEADAAAHIAAAlQAAAHAEAGQAGAEAHAAIAQAAQAHAAAFgEQAGgGgBgHIAAglQABgHgGgDQgEgFgIAAIgQAAQgHAAgGAFgEAnfAA8QgEAAgEgDQgDgDAAgFQAAgEADgEQAEgDAEAAQAggCAfABIAAAAQAEAAADADQADAEAAAEQAAAEgDAEQgCADgFAAIAAAAQgVACgTAAIgXgBgEAnfAApQgEAAgBADIgCABIgBAEQABADACACQACACADABQAeABAhgCQADAAABgDQADgDAAgCQAAgCgDgDQgBgDgDABIgbgBIgkABgEAn0AAyIgXAAQgFgCAFgEIAhgCIAGAEIAbAAQADAFgFABIgjADgEAnnAASQgFgEAAgIQAAgGAFgDQAFgFAGAAQAIAAAEAFQAFADABAGQgBAIgFAEQgEAGgIAAQgGAAgFgGgEAnpAAAQgDABAAAFQAAAFADAFQAEADAFAAQAGAAADgDQAEgFABgFQgBgFgEgBQgDgEgGAAQgFAAgEAEgEgodAARQgEABgDgDQgDgEgBgFQABgEADgCQADgDAEABQAggDAfACIABAAQAEAAADADQADABAAAEQAAAFgDADQgDADgEAAIgBAAQgTACgUAAIgYgBgEgodAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBABAAAAIgBACQAAAAgBAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAEACACQACACACAAQAgABAfgCQAEAAACgDQACgBAAgEQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBgBAAgBQgCAAgEAAIgXgBQgUAAgUABgEgoGAAHIgZAAQgEgCAEgEIAjgBIAEAEIAcAAQADAFgFABIgkADgEgoHgAhQgGgFAAgIQAAgJAGgGQAGgGAIAAQAJAAAGAGQAFAGABAJQgBAIgFAFQgGAHgJAAQgIAAgGgHgEgoEgA5QgEADAAAIQAAAFAEAFQAFAFAGAAQAHAAAFgFQAEgFAAgFQAAgIgEgDQgFgGgHAAQgGAAgFAGg");
	this.shape_111.setTransform(-31.4,50.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#1F2123").s().p("AAvAvIhAgUIgNgEIgGgCIA8hBIAHAAIg7BAIBUAZQgDADgEAAIgCgBgABIAjIAfhJQADgGADgBIAJgBIgDABQgEABgDAGIgfBJQgDAFABADIgDABQgEgBAEgIgAgzATIg1gDIgNgBIACgCIA2g2QAHgFANgBIg9A9IA+AEIgDACIgIgBg");
	this.shape_112.setTransform(-342.1,51.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#666D70").s().p("AAKAyIhEgVIgPgEIgEgBIgDAAIgKgBIhEgFIAFgFIA4g4QAHgFALAAIBKACICYgEQAKABABALIABAoQgFAMgQAGIhmAcQgIADgJAAIgJgBgAhHAWIAGABIANAEIBBAVQAFAAADgCQABAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAIAlhPQACgHgIgCIg5ABIgGAAgABUgtIgJAAQgEABgCAHIggBIQgEAJAEABIAEgCIABAAIBZgZQATgHAEgKIAAglQAAgGgCgCQgCgCgFAAgAhfgpIg2A2IgDADIAOAAIA0ADIAJABIACgCIA8g+Ig9gCQgNABgGAEg");
	this.shape_113.setTransform(-338.7,51.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#242A34").s().p("EAoUAA/QgIAAgFgFQgEgFAAgHIAAglQAAgHAEgEQAFgFAIABIAQAAQAHgBAFAFQAFADAAAIIAAAlQAAAHgFAFQgFAFgHAAgEAmzAA/QgHAAgFgFQgFgFAAgHIAAglQAAgHAFgEQAEgFAIABIAQAAQAHgBAFAFQAFADAAAIIAAAlQAAAHgFAFQgFAFgHAAgEAlTAA/QgIAAgFgFQgFgFAAgHIAAglQAAgHAFgEQAFgFAIABIAQAAQAHgBAFAFQAFADAAAIIAAAlQAAAHgFAFQgGAFgGAAgEAjyAA/QgHAAgFgFQgFgFAAgHIAAglQAAgHAFgEQAEgFAIABIAQAAQAHgBAFAFQAFADAAAIIAAAlQAAAHgFAFQgFAFgHAAgEAiTAA/QgHAAgFgFQgFgFAAgHIAAglQAAgHAFgEQAEgFAIABIAQAAQAHgBAFAFQAFADAAAIIAAAlQAAAHgFAFQgFAFgHAAgEAgyAA/QgHAAgGgFQgEgFAAgHIAAglQAAgHAEgEQAFgFAIABIAQAAQAHgBAFAFQAFADAAAIIAAAlQAAAHgFAFQgFAFgHAAgAfRA/QgHAAgFgFQgFgFAAgHIAAglQAAgHAFgEQAFgFAHABIAQAAQAIgBAEAFQAGADAAAIIAAAlQAAAHgGAFQgFAFgHAAgAdxA/QgHAAgGgFQgEgFAAgHIAAglQAAgHAEgEQAFgFAIABIAQAAQAHgBAFAFQAFADAAAIIAAAlQAAAHgFAFQgFAFgHAAgAcQA/QgHAAgFgFQgFgFAAgHIAAglQAAgHAFgEQAFgFAHABIAQAAQAHgBAFAFQAFADAAAIIAAAlQAAAHgFAFQgFAFgHAAgAaxA/QgHAAgFgFQgFgFAAgHIAAglQAAgHAFgEQAFgFAHABIAQAAQAHgBAFAFQAFADAAAIIAAAlQAAAHgFAFQgFAFgHAAgAZPA/QgIAAgFgFQgEgFAAgHIAAglQAAgHAEgEQAFgFAIABIAPAAQAHgBAGAFQAEADAAAIIAAAlQAAAHgEAFQgGAFgHAAgAXqA/QgHAAgFgFQgFgFAAgHIAAglQAAgHAFgEQAEgFAIABIAQAAQAHgBAFAFQAFADAAAIIAAAlQAAAHgFAFQgFAFgHAAgAWAA/QgIAAgFgFQgFgFAAgHIAAglQAAgHAFgEQAFgFAIABIAQAAQAHgBAFAFQAFADAAAIIAAAlQAAAHgFAFQgGAFgGAAgAUYA/QgIAAgFgFQgFgFAAgHIAAglQAAgHAFgEQAFgFAIABIAQAAQAHgBAFAFQAFADAAAIIAAAlQAAAHgFAFQgGAFgGAAgASrA/QgHAAgGgFQgEgFAAgHIAAglQAAgHAEgEQAFgFAIABIAQAAQAHgBAFAFQAFADAAAIIAAAlQAAAHgFAFQgFAFgHAAgARAA/QgHAAgFgFQgFgFAAgHIAAglQAAgHAFgEQAFgFAHABIAQAAQAIgBAFAFQAFADAAAIIAAAlQAAAHgFAFQgGAFgHAAgAPWA/QgHAAgFgFQgFgFAAgHIAAglQAAgHAFgEQAEgFAIABIAQAAQAHgBAFAFQAFADAAAIIAAAlQAAAHgFAFQgFAFgHAAgANyA/QgHAAgGgFQgEgFAAgHIAAglQAAgHAEgEQAFgFAIABIAQAAQAHgBAFAFQAFADAAAIIAAAlQAAAHgFAFQgFAFgHAAgAMRA/QgHAAgFgFQgFgFAAgHIAAglQAAgHAFgEQAFgFAHABIAQAAQAIgBAEAFQAGADAAAIIAAAlQAAAHgGAFQgFAFgHAAgAKxA/QgHAAgFgFQgFgFAAgHIAAglQAAgHAFgEQAFgFAHABIAQAAQAIgBAFAFQAFADAAAIIAAAlQAAAHgFAFQgGAFgHAAgAJPA/QgIAAgFgFQgFgFAAgHIAAglQAAgHAFgEQAFgFAIABIAQAAQAHgBAFAFQAFADAAAIIAAAlQAAAHgFAFQgGAFgGAAgAHqA/QgIAAgFgFQgEgFAAgHIAAglQAAgHAEgEQAFgFAIABIAQAAQAHgBAFAFQAFADAAAIIAAAlQAAAHgFAFQgFAFgHAAgAGDA/QgHAAgGgFQgEgFAAgHIAAglQAAgHAEgEQAGgFAHABIAQAAQAHgBAFAFQAFADAAAIIAAAlQAAAHgFAFQgFAFgHAAgAEUA/QgHAAgFgFQgFgFAAgHIAAglQAAgHAFgEQAFgFAHABIAQAAQAHgBAFAFQAFADAAAIIAAAlQAAAHgFAFQgFAFgHAAgACfA/QgHAAgGgFQgEgFAAgHIAAglQAAgHAEgEQAGgFAHABIAQAAQAHgBAFAFQAFADAAAIIAAAlQAAAHgFAFQgFAFgHAAgAgVA/QgIAAgFgFQgEgFAAgHIAAglQAAgHAEgEQAFgFAIABIAQAAQAFgBAFAFQAFADAAAIIAAAlQAAAHgFAFQgFAFgFAAgAh5A/QgHAAgFgFQgFgFAAgHIAAglQAAgHAFgEQAFgFAHABIAQAAQAHgBAFAFQAFADAAAIIAAAlQAAAHgFAFQgFAFgHAAgAjVA/QgHAAgFgFQgFgFAAgHIAAglQAAgHAFgEQAEgFAIABIAQAAQAHgBAFAFQAFADAAAIIAAAlQAAAHgFAFQgFAFgHAAgAkzA/QgHAAgFgFQgFgFAAgHIAAglQAAgHAFgEQAEgFAIABIAQAAQAHgBAFAFQAFADAAAIIAAAlQAAAHgFAFQgFAFgHAAgAn5A/QgHAAgFgFQgFgFAAgHIAAglQAAgHAFgEQAFgFAHABIAQAAQAIgBAEAFQAGADAAAIIAAAlQAAAHgGAFQgFAFgHAAgArOA/QgIAAgFgFQgFgFAAgHIAAglQAAgHAFgEQAFgFAIABIAQAAQAHgBAFAFQAFADAAAIIAAAlQAAAHgFAFQgGAFgGAAgAs4A/QgHAAgFgFQgFgFAAgHIAAglQAAgHAFgEQAFgFAHABIAQAAQAHgBAFAFQAFADAAAIIAAAlQAAAHgFAFQgFAFgHAAgAuiA/QgHAAgGgFQgEgFAAgHIAAglQAAgHAEgEQAFgFAIABIAQAAQAHgBAFAFQAFADAAAIIAAAlQAAAHgFAFQgFAFgHAAgAwMA/QgHAAgGgFQgEgFAAgHIAAglQAAgHAEgEQAGgFAHABIAQAAQAHgBAFAFQAFADAAAIIAAAlQAAAHgFAFQgFAFgHAAgAx2A/QgIAAgFgFQgEgFAAgHIAAglQAAgHAEgEQAFgFAIABIAQAAQAHgBAFAFQAFADAAAIIAAAlQAAAHgFAFQgFAFgHAAgAzhA/QgHAAgFgFQgFgFAAgHIAAglQAAgHAFgEQAFgFAHABIAQAAQAHgBAFAFQAFADAAAIIAAAlQAAAHgFAFQgFAFgHAAgA1KA/QgIAAgFgFQgFgFAAgHIAAglQAAgHAFgEQAFgFAIABIAQAAQAHgBAFAFQAFADAAAIIAAAlQAAAHgFAFQgGAFgGAAgA2wA/QgHAAgFgFQgFgFAAgHIAAglQAAgHAFgEQAFgFAHABIARAAQAHgBAFAFQAFADAAAIIAAAlQAAAHgFAFQgGAFgGAAgA4RA/QgHAAgFgFQgFgFAAgHIAAglQAAgHAFgEQAFgFAHABIAQAAQAHgBAFAFQAFADAAAIIAAAlQAAAHgFAFQgFAFgHAAgA5xA/QgIAAgFgFQgFgFAAgHIAAglQAAgHAFgEQAFgFAIABIAQAAQAHgBAFAFQAFADAAAIIAAAlQAAAHgFAFQgGAFgGAAgA7SA/QgHAAgFgFQgFgFAAgHIAAglQAAgHAFgEQAFgFAHABIAQAAQAHgBAFAFQAFADAAAIIAAAlQAAAHgFAFQgFAFgHAAgA8yA/QgHAAgGgFQgEgFAAgHIAAglQAAgHAEgEQAFgFAIABIAQAAQAHgBAFAFQAFADAAAIIAAAlQAAAHgFAFQgFAFgHAAgA+RA/QgHAAgGgFQgEgFAAgHIAAglQAAgHAEgEQAFgFAIABIAQAAQAHgBAFAFQAFADAAAIIAAAlQAAAHgFAFQgFAFgHAAgA/zA/QgHAAgFgFQgFgFAAgHIAAglQAAgHAFgEQAFgFAHABIAQAAQAIgBAEAFQAGADAAAIIAAAlQAAAHgGAFQgFAFgHAAgEgr6AAeIA9g/IA6gBQAIACgBAGIgmBPQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAgEgqPAAuIAfhJQADgGAEgBIADgBIA9gBQAGAAACACQACADAAAFIAAAlQgEAKgTAIIhZAYIgCABQgBgDADgFgEgtEAAYIA9g8IA9ACIg8A/gEAsvAAQQgEgEAAgFQAAgFAEgCQAEgEAFAAQAFAAAEAEQAEACAAAFQAAAFgEAEQgEAEgFAAQgFAAgEgEgEgi+gAjQgFgFAAgGQAAgHAFgEQAEgFAHAAQAGAAAFAFQAEAEAAAHQAAAGgEAFQgFAEgGAAQgHAAgEgEg");
	this.shape_114.setTransform(-63.9,50.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81}]}).wait(1));

	// livery stripes
	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.lf(["#DCDDDD","#9E9E9E"],[0,1],-118.5,-3.7,-73.2,-3.7).s().p("AjYAEQAPgDALgJIAAgBITqAZIiNAMgAmTAAQAQAAALgNIBMACIADADQAJAIALADgAupgJIiCgSIJGAMIACACQAKAKANADg");
	this.shape_115.setTransform(-22.5,67.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.lf(["#D8D9D9","#939393"],[0,1],-110.9,-2.8,-51.7,-2.8).s().p("Aq3gEIgIgBIh9gRIZ5AhIgEABIgKAAIiZALg");
	this.shape_116.setTransform(-24.3,69.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.lf(["rgba(47,68,114,0)","rgba(46,66,96,0.949)"],[0,0.471],-15.5,0,15.5,0).s().p("AiZADIBbgMIDXAGQADAJgEADIAAABg");
	this.shape_117.setTransform(41.6,89.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.lf(["rgba(47,68,114,0)","rgba(56,85,119,0.937)"],[0,0.471],-18,0,18,0).s().p("AiyADIA5gMIEgAFIACAEIACAAIAGAHIACADg");
	this.shape_118.setTransform(38.2,86.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.lf(["rgba(47,68,114,0)","#3B5E84"],[0,0.471],-52.2,-0.4,17.3,-0.4).s().p("AiqADIAAgNIE7AHIAJADIACABQAIAEAHAGg");
	this.shape_119.setTransform(36.4,84.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.lf(["rgba(47,68,114,0)","#416C93"],[0,0.471],-49.7,-0.4,14.8,-0.4).s().p("AiSAEIAAgNID7AFIAGACIAkAMg");
	this.shape_120.setTransform(33.9,81.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.lf(["rgba(47,68,114,0)","#4678A0"],[0,0.537],-45.8,-0.3,10.8,-0.3).s().p("AhqAFIAAgNICRADIAfAFIAdAHIAJACg");
	this.shape_121.setTransform(30,78.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.lf(["#E6E7E8","#BCBCBC"],[0,1],-172.4,-4.6,-81.2,-4.6).s().p("AiUAFIAAgOIbrAkIhaANgAkAACIAAgMIBPABIAAAOgAlMABIAAgNIAvABIAAANgAm4AAIAAgPIBPACIAAANgA5XgZIAWgOIRsAYIAAAPg");
	this.shape_122.setTransform(-25.3,59.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.lf(["#E8E9EA","#C6C6C6"],[0,1],-165.6,-6.5,-98.4,-6.5).s().p("AjvACIAAgNId8AnIgFAAIhPANgAlbAAIAAgNIBPACIAAANgAmnAAIAAgPIAvABIAAAOgAoTgCIAAgPIBPACIAAAPgA6MgaIAZgOIRDAWIAAAQg");
	this.shape_123.setTransform(-16.2,57.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.lf(["#EBECED","#D1D1D1","#D1D1D1","#E3E4E4"],[0.004,0.18,0.918,1],-169.8,0,175.1,0).s().p("AkvABIAAgNIfRAnIgxAPgAmbAAIAAgOIBPABIAAANgAnogBIAAgPIAwABIAAAPgApUgDIAAgQIBPACIAAAQgA6hgbIAegOIQSAWIAAAPg");
	this.shape_124.setTransform(-9.7,54.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.lf(["#E2E3E3","#B2B2B2"],[0,1],-158.5,-5.5,-56.4,-5.5).s().p("Ah0AGIAAgNIZOAgIhkAMgAjZAEQgHgGAAgIIBPACQgBAIgHAFgAktACIAAgOIAwACIAAANgAmVAAQgEgEAAgIIAAgCIBPACQAAAJgEAEgA05gSIiggSIQjAWIAAAOg");
	this.shape_125.setTransform(-28.4,62);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.lf(["#DFE0E0","#A8A8A8"],[0,1],-158.6,-7.7,-68.8,-7.7).s().p("AinAFQADgFACgJIWiAdIhqAMIgGABgAlgABQAEgFABgIIAyABQAAAIAEAFgAx2gOIgFAAIiEgSIMdARQABAIADAHg");
	this.shape_126.setTransform(-23.9,64.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.lf(["#304C6B","rgba(48,76,107,0)"],[0.471,0.945],-145.4,-0.6,78.6,-0.6).s().p("Ar2gGQgHgFgJgFIgCgBIgIgFIYhAfIhFAOg");
	this.shape_127.setTransform(129.5,86);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.lf(["#385C7E","rgba(56,92,126,0)"],[0.471,0.945],-147.9,-0.6,87.6,-0.6).s().p("AtBgIIgkgOIgFgCIbWAjIhEAOg");
	this.shape_128.setTransform(132.1,83.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.lf(["#3D688B","rgba(61,104,139,0)"],[0.471,0.945],-148,-0.5,98.2,-0.5).s().p("AuQgKIgJgCIgdgIIgegGIepAnIg9AOg");
	this.shape_129.setTransform(132.1,80.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.lf(["#437596","rgba(67,117,150,0)"],[0.471,0.945],-123.6,0,109.7,0).s().p("AwBgOIhGgKIBYgDIACAAMAg1AAqIg4ANg");
	this.shape_130.setTransform(130.2,78.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.lf(["#2B415C","rgba(43,65,92,0)"],[0.471,0.945],-141.4,-0.7,70.7,-0.7).s().p("Aq0gEIgCgEIgGgIIgCgBIgDgDIWDAbIhIAOg");
	this.shape_131.setTransform(125.6,88.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.lf(["#293951","rgba(41,57,81,0)"],[0.471,0.945],-136.3,-0.8,63.6,-0.8).s().p("Ap6gDIAAgBQAEgDgDgLIT0AYIhBAMIgJABg");
	this.shape_132.setTransform(120.4,91);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.lf(["#F1F2F2","#E0E0E0","#E0E0E0","#E8E9EA"],[0.071,0.294,0.78,1],-170.6,0.2,188.4,0.2).s().p("AmzAAIAAgPMAhdAArIglAOgAoegCQABgIAGgFIACgCIA9ABIAAABQAGAGACAJgApsgEIAAgPIAwABIAAAPgArWgFQACgGAEgEQAEgEAEgCIAyABIAFAFQAFAEACAHgA6ogaIAsgPIOHATIAAAQg");
	this.shape_133.setTransform(3.5,49.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.lf(["#EEEFF0","#DBDBDB","#DBDBDB","#E5E6E7"],[0.055,0.227,0.882,1],-170.9,0,181.8,0).s().p("AlvAAIAAgOMAgbAApIgqAPgAnbgBIAAgQIBPACIAAAPgAoogDIAAgPIAwABIAAAQgAqTgFIAAgPIBOABIAAAQgA6rgbIAkgOIPXAVIAAAPg");
	this.shape_134.setTransform(-3.4,52.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.lf(["#F3F4F5","#E5E5E5","#E5E5E5","#EBECED"],[0.114,0.231,0.843,1],-169.3,0,176.1,0).s().p("An6gCQgBgIgDgHMAibAAtIghAOgAqzgGQgBgIgDgHIA6ACQgEAGgBAIgA6cgbIA5gOIMuARQgEAHgBAJg");
	this.shape_135.setTransform(10.5,47.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.lf(["#F5F6F7","#EAEAEA","#EAEAEA","#EEEFF0"],[0.137,0.208,0.741,1],-167.3,0.1,175.7,0.1).s().p("ApNgEIgEgFQgIgHgIgEMAjpAAvIgeAOgAsHgIIgDgDQgKgKgMgCIB4ACQgLADgJAJIgDADgA6HgbQAlgHApgGILgAPQgPACgOAMg");
	this.shape_136.setTransform(17.8,45.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.lf(["#F8F9FA","#EFEFEF","#EFEFEF","#F0F1F2"],[0.137,0.208,0.741,1],-115.7,0.1,119.6,0.1).s().p("A6egbQAmgIAogGMAzvABEIgcAPg");
	this.shape_137.setTransform(20.1,42.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.lf(["#3A6087","rgba(58,96,135,0)"],[0.369,0.804],-12.8,0.3,70.9,0.3).s().p("AJ7AUIgxgBIz9gZIBcgNISmAXIBbACIAKAAIgEABIgrANg");
	this.shape_138.setTransform(220.7,64.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.lf(["#437596","rgba(67,117,150,0)"],[0.471,0.945],-85,0.1,85,0.1).s().p("AtQgJIA3gGIBBgGIAFgBIYlAfIgyAOg");
	this.shape_139.setTransform(181,71.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.lf(["#437596","rgba(67,117,150,0)"],[0.471,0.945],-103,0,103.1,0).s().p("AwFgOICRgKIAVgBIACAAIdjAlIg0AOg");
	this.shape_140.setTransform(145.8,76.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.lf(["#437596","rgba(67,117,150,0)"],[0.471,0.945],-92.9,0,93,0).s().p("AuggMICVgMIasAiIgyAPg");
	this.shape_141.setTransform(164.5,74.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.lf(["#35527E","rgba(53,82,126,0)"],[0.471,0.769],-12.9,3.1,83.8,3.1).s().p("Ao2gEIA2gJIAVgCIAKgCIQYATIgBAQg");
	this.shape_142.setTransform(223.5,62.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.lf(["#2F4970","rgba(47,73,112,0)"],[0.471,0.769],-78.4,1.9,18.3,1.9).s().p("AAgAIIh3gCIABgOIClAEIAJAAIgGACIgoAKg");
	this.shape_143.setTransform(289,63.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.lf(["#437596","rgba(67,117,150,0)"],[0.471,0.945],-73.5,0,73.5,0).s().p("AKmAVI2DgcIBjgNIU6AaIAVABIAJAAIgCABIgjAKIgJADg");
	this.shape_144.setTransform(208.4,67.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.lf(["#437596","rgba(67,117,150,0)"],[0.471,0.945],-78.7,0,78.8,0).s().p("AsSgJIBugMIW1AcIACAAIgvAPg");
	this.shape_145.setTransform(195.4,69.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.lf(["#324A78","rgba(50,74,120,0)"],[0.576,0.859],-32.5,-0.1,75.9,-0.1).s().p("AnqgBIBQgPIOFARIAAAQg");
	this.shape_146.setTransform(231.1,59.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.lf(["#2C426B","rgba(44,66,107,0)"],[0.576,0.859],-94.4,-1.3,13.9,-1.3).s().p("ABJAJIjIgEIAAgNID1AFIAKAAIggAIIgNAFg");
	this.shape_147.setTransform(293.1,60.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115}]}).wait(1));

	// livery tail dots
	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#56A3F2").s().p("AqHCUIgCgEQAigNAigRQgFANgMAKQgNAMgOACIgJACQgIAAgFgFgAo3CDQgIgIAHgPQAngTAngXIABAAQAIAIgGAPQgGAPgRANQgPAOgSADIgLACQgIAAgFgFgAnuBtQANgMAPgDIAMgBQgEgIAFgLQAHgQARgNQARgNATgEQASgDAIAIQAIAIgHAPQgHAPgSANQgQAMgTAEQgJADgHgBQADAGgDAKIhEAOQAEgMAMgLgAmNBsQAEgPAQgPQAOgOAQgFQARgEAIAHQAHAIgFAPIgEAJIhJAPIAAgBgAjeAvQASgRAUgFQAUgGAJAJQAJAKgGASIgBAEIgHABIhUARQAHgQAPgPgAknBCQgJgJAHgRQAFgRARgPQARgOARgFQATgFAIAJQAIAHgGAQQgGARgQAPQgSAQgRAEQgHADgGAAQgJAAgEgFgAngA8IA8gmQgEANgMAKQgOAMgOADIgJACIgHgCgAhzAzQgKgKAGgVIAFgKQgKAGgKACQgVAGgKgJQgJgKAGgSQAEgIAFgJQgMAJgNADQgTAGgIgJQgJgIAGgTQAGgRARgQQAQgQASgGQATgEAIAJQAJAIgFARQgDAJgFAIQAPgLAQgFQAJgCAHABQgEgIADgMQACgKAFgKQgKAIgLADQgTAHgMgJQgMgJAEgTQABgJAEgJIAWABIA+ACIgBADIADgDIAiACIASAAQADAIgCAKIgDAOQAJgHAJgDQAIgDAIAAQgFgHABgKQBPACBLAEIgCAFIAHgFIBjAFQgKAGgKADQgNAFgKgCQABAFgCAGQgBAPgJAOQANgOAPgGQAPgFALADIAAgLQACgKAFgJIBOAFQgDAHgIAIQgQAUgTAIQgOAGgLgDQAAAFgBAFQgDAUgRAUIgLAMIg7ALQgGgJADgRQACgPAKgPQgPAOgRAGQgWAHgMgKQgNgJADgVQABgIADgHQgMAIgLAFIgPAEQADAIgCALQgBAJgEAJQAIgGAHgDQAVgHALAIQALAJgDATQgDAKgEAJIhXAQQABgKAFgHQgJAEgKADQgNAEgKgCQABAHgCAIIgCAAIiOAcIgBgBgAgQgEIgCAEIAOgFQAHgDAIABQgDgHACgKIABgFIgJADQgIAEgJgBQABAIgCALgAhFgmIgEAJQAKgHAMgDQAHgCAHAAQgCgHACgJQABgIACgIQgIAGgJADQgKAEgIgBQADAJgDAOgABLh2QgJAEgJAAQAGAJgDAOIAAAFIAHgDQAJgDAGAAQgCgIACgLIAFgLIgMAEgAliAdQgIgJAFgRQAGgOASgQQARgPASgFQARgFAJAJQAJAIgGARQgHARgRANQgRAPgSAFQgHACgFAAQgJAAgFgFgACugIQAUgHALAIIgwAHQAJgEAIgEgAEbgbQAQgTATgIQAVgHALAIQAHAGABALIhPAPIAEgGgAFpgsQgLgJACgUQADgTAPgSQAJgKAJgGIA0ADQADAHgCAMQgCATgQASQgOATgTAGIAAABIgBAAQgHACgGAAQgJAAgGgFgAG5hLQAPgPARgFQASgGAMAJQALAJgDASIAAABIhVAQQAEgOALgNgAkUhBQgHgKAJgQIABgCIAighQAPgJAQgCQATgCAGAKQAHAKgJAQQgIARgUANQgTAOgSACIgHAAQgNAAgGgIgAI7hRQABgSALgQIBDADIAAABQAAALgEALIhLAOIAAgGgAH5hjQgJgHAAgOIAvADIAXABQgOAQgSAFQgHACgFAAQgKAAgHgGgAi/iVIgDgDIApABIgJADQgIADgHAAQgIAAgGgEg");
	this.shape_148.setTransform(241.1,40.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#4A8BCD").s().p("AEWK2QADgGAFgGQALgOAPgFQAPgFAJAIQADACACAFIgGAZIg5gEgADdKyIgEgDQgJgHABgPQACgQAMgOQALgOAOgFQAQgFAJAHQAJAIgCAQQgBAPgMAOQgLAOgPAFIgDABIgIABQgFAAgEgCgABWKrIABgCQANgSAQgGQARgHALAJQAKAJgBASIhDgDgAAuKpIgugDIAAgGQACgRAOgRQAOgQASgFQASgGALAKQALAIgDASQgCATgOAQIgXgBgAhrKgQAHgGAIgDQATgHALAKQAFADABAGIgzgDgAjJKaQACgFAEgFIgNAKIhigFIAMgFQAMgDAKACIAAgMIAFgPIgQAHQgNAFgJgBIgBAIIgFAOQhLgEhPgCIAAgIQABgGACgFQgIAFgIADQgKADgIABIADAFIgVAAIghgCQAIgFAIgEQAJgCAHAAQgIgKADgSQACgJAFgKQgHAFgIACQgTAIgLgIQgLgIAEgUQAEgSAQgTQAQgSATgHQAMgEAIABQgBgHACgKQAFgTARgUQARgUAUgIQAMgFAIABQgFgJAEgOQAEgUASgUQASgUAVgHQAJgDAIAAQgFgJAEgPQAEgUASgUQASgUAVgHIAMgEQgCgHACgLQADgMAHgLQgNAKgOAEQgJADgIAAQADAHgDAOQgFATgQASQgRASgTAHQgTAIgJgIQgKgJAEgTQADgLAHgKIAVgZQANgLANgGQAJgDAHAAQgFgIADgQIABgEIAug2IAKgEQAMgEAKACQgJgIAEgRIABgBIAug3IAGgDQASgFALAIQAKAJgEASQgEASgPARQgQARgSAGQgMAEgIgBQAJAJgEARQgCALgFAKQANgLAQgFQAGgCAFAAQgCgIADgLQAFgTAQgSQARgSATgHQAMgFAIACQgDgHACgMQAEgSAPgQQAQgPASgGQASgGAKAIQAKAJgEAQQgEASgPARQgPARgSAFQgLAEgIgCQACAIgCAMQgGAUgQARQgQATgTAGIgIADQAGAJgCAQQgEAWgSAUQgSATgWAGQgJADgHAAQAAAGgCAIQgCAIgEAJQAMgIAMgEQAVgHANALQAMALgDAVIgEANQAHgEAGgBQAWgHAMALQANAKgEAWQgDAVgSAUQgSAUgWAGIgEABQACAIgCAJIgFATQAKgIALgEQAVgIANAKQAMAJgEAVIgDAMIADgBQAWgGANAJQAMAKgDATQgCAOgHANQALgKANgFQATgHAMAIQALAIgEAUQgDAUgQATQgQAUgTAHQgPAGgKgDQACAHgCALQgCAMgIANIhPgFgAi1JFQANAKgDAUQgCAOgHAMQANgOAQgHQAPgGAKAEQgCgIACgKQACgOAKgOQgOALgPAEQgVAHgNgKQgMgJACgUIACgIIgJAEQgOAFgKgBIgBAMQgCAKgFAKIALgFQAJgCAHAAQALAAAHAFgAlWJRQgHADgGAAIgBAMIgDAMIAKgFQANgFAKABIABgIQACgLAHgMQgMAKgOADgAmNIxQgKADgIAAIgBAKIgCAKQAIgGAJgDQAIgDAHgBQgCgGACgIIgLAEgAnGIIQgKAEgIAAQABAGgBAIQgCAHgDAIQAJgHALgEQAKgDAIAAQgBgGABgIQACgJADgIQgJAHgLAFgAlRHrIAKgFQATgFAMAHQgCgIACgLIABgDQgJAFgIACQgOAFgLgCQACAGgCAJgAmMHEQgCAIgDAIQAKgIAMgEQANgEAKACQgCgIACgKQABgIAEgJQgKAHgLADQgOAFgKgCQADAIgDAMgAjtF2QgIADgGAAQAFAKgCAQIAAADQAHgFAJgCIAEgCQAAgGABgKQABgGADgGIgOAFgAkpFOQgJADgHAAQAGAJgEAQQgBAIgDAHQALgHALgFQAJgCAHAAQgGgKADgPIAGgRQgLAJgMAEgAg4KVQgKgJACgTQADgUAPgSQAPgSASgGQARgHALAJQALAIgDAUQgDATgPASQgNATgSAHQgIACgGAAQgJAAgHgFgACXKIQgKgJAAgTQACgTAMgSQANgRAQgGQARgHALAJQALAJgCATQgBATgMASQgMARgRAHQgHACgGAAQgIAAgHgFgApjKJIgWgBQAFgKAIgKQAQgSAUgHQAUgGAMAJQAMAJgDATQgCAIgEAJIg+gCgAqzKGQgGgGABgKIA0hBQARgFALAIQALAIgDARQgDASgPARQgLANgOAGIgogBgApjIuQgKgHADgQIAwg7IADgCQATgHAKAJQALAIgEARQgDASgPARQgPARgSAHQgIACgHAAQgIAAgGgEgABeHwQgLgKACgUQAEgQAKgPQgOAMgPAFQgVAFgMgJQgMgKADgVQACgLAFgKQgLAHgLAEQgSAGgNgLQgMgKACgUIAAgCQgPANgRAIQgYAKgMgKQgNgKAGgaQAHgZAVgZQAVgXAXgLIACgLQACgMAHgMQgLAJgNAFQgXALgNgLQgLgJADgUIgCACQgKAKgOAAQgOAAgKgKQgKgKAAgOQAAgOAKgKQAKgKAOAAQAOAAAKAKQAKAJAAANQAIgQAOgQQgLgCgJgJQgKgKAAgNQAAgPAKgKQAKgKAOAAQAOAAAKAKQAKAKAAAPIAAADIAIgEQAWgLANALQANAKgIAZQgCALgHAMQAMgJAMgFIAEgCIABgJQAFgXATgXQAUgWAWgIQAXgKANALQAMAKgFAXIgCAKIAKgEIANgDQgBgGABgHQADgWARgUQAQgUAUgHQAVgIAMAKQAMAKgEAWIgCALQAKgIAMgDQARgGAMAGQgBgHABgHQADgUAOgTQAPgTASgFQARgHALAIQALAIgDAUIgDAOQAJgJALgFIALgDQgHgJADgQQACgSAPgTQANgTATgIQASgHAKAJQAKAJgCAUQgBAJgEAIIAJgHIgWBSIgCgBQgKgJACgUQABgJAEgIQgNAMgNAGQgGADgFABQAHAIgCARQgCAPgIANQALgMAPgHQALgEAIACIgZBfIgIAEQgRAHgLgJQgKgJACgUQACgOAIgOQgMANgOAGQgRAHgLgJQgLgJADgUQABgHACgIQgKAJgLAFQgLAFgJgCQABAHgBAJQgBAKgEAKQAHgGAIgDQAUgHALAJQAMAKgDAUQgCAUgPATQgPATgTAHQgPAFgKgFQAJAKgDATQgDAUgQAVQgPATgVAIQgGADgGABQABAGgCAJQgDAVgQAUQgQAUgVAIQgJADgHAAQADAJgCAMQgDAVgRAUQgQAUgUAIQgJADgHAAQgJAAgGgFgACKFuIgLADIgCAVQgBALgJAOQAMgNAPgFQAJgEAIAAQgEgIACgNQACgKAGgLQgNALgOAEgABMFGIgIACQABAHgBAIIgEAQQAKgIAKgEIAKgCQgBgHAAgIQABgHADgHQgKAHgLADgADSEVQgIACgGAAQABAHgBAKQgBALgGAMQALgKANgFQAHgDAHgBQgCgGABgJQACgLAGgKQgLAIgNAFgAAPEmIgDALIgDAKQAIgEAIgDIAGgBQgBgIABgKIACgGIgSALgACUDvIgHACIgBAMIgEAOQAHgFAIgDQAIgCAIgBQgCgHAAgJIADgMQgJAHgLAEgAEKDQQgBAKgEALQAJgIALgEQAPgHALAFQgJgKABgRQACgKAEgIQgLAHgLAEQgLADgJgCQAFAKgCAQgABbDGIgEABIgCAKIgEANIANgGIAJgCIAAgNIADgKIgPAHgADbCRIgJADQABAGgCAJIgDAQQAHgFAIgDQANgEAKACQgGgKABgPIADgMQgLAIgMAFgAoWHaQgLgJADgUIABgFIArg0IAJgFQATgFAKAJQALAJgDATQgEAUgPARQgPASgTAGQgIADgGAAQgJAAgGgFgAEtHWQgJgIABgPQACgQAMgOQALgPAOgEQAQgFAJAHQAJAIgCAPQgBAQgMAOQgLAOgPAFQgGACgFAAQgHAAgGgEgADnG6QgMgJACgVQADgUAPgTQAPgSATgHQALgFAJACQgFgIABgOQACgTAOgSQAPgSARgGQATgGAMAKQALAJgCAUQgCATgPASQgNARgTAGQgLAEgIgCQAFAJgCAOQgCAUgQATQgOATgUAHQgHADgHAAQgJAAgGgGgAFoGHQgJgIABgPQACgPAMgPQALgOAOgFQAQgFAJAIQAJAHgCAQQgBAQgMANQgLAPgPAEQgGACgFAAQgIAAgFgEgAnLF/QgKgJAFgTQADgKAGgLIARgTQAOgPARgHQASgHAKAJQAKAIgFATQgFATgQASQgRASgSAHQgJADgHAAQgIAAgFgEgAFxECQgJgIABgQQACgPAMgPQALgOAOgEQAQgGAJAIQAJAHgCAQQgBAQgMAOQgLAOgPAFQgGACgGAAQgHAAgFgEgABXA4QgKgJAEgVQADgVAQgSQAQgUASgIQAJgDAHAAIABgPQABgJAEgJQgJAHgKAFQgPAGgKgEQACAIgCAKQgDAUgQAVQgQARgTAIQgTAIgLgJQgKgJAEgTQAEgUAPgUQAQgUASgIQAQgGAJAEQgCgIACgKQAEgVAQgUQAQgUASgIQAJgDAHAAQgBgIABgLQADgQALgQQgOAQgRAHQgMAEgIgCQAEAIgDANQgEAUgQATQgPATgSAHQgSAIgKgIQgKgIAFgUQAEgTAPgTQAQgSASgIQAMgGAJADQgEgIADgOQADgRAOgRQAOgRARgHQARgHAKAIQAKAIgEASQgCAPgJAOQAOgRARgIQASgHALAJQAKAJgEATIgEARQAKgIALgFQALgEAIABQgJgIADgTQABgJAFgJQgJAGgIAEQgSAHgKgIQgKgJAEgTQACgOAIgMQgMAMgNAGQgQAGgJgHQgJgIAEgSQACgRAOgRQANgRAQgGQAQgHAJAIQAJAIgDARQgCAMgIANQANgOAPgHQARgGAKAIQAKAIgDATQgCAJgDAJQAHgGAJgEQARgGAKAIQAKAIgDASQgBAJgDAHQALgKANgGQATgHAMAJQALAKgEAVQgDAWgRAUQgQAUgTAIIgLADQAHAKgDASQgEAXgRAVQgQAVgUAIIgHACIAAANQgFAXgQAVQgRATgUAIQgVAJgLgKQgMgKAEgVIADgOQgIAGgIAEQgLAEgIgBIgBAMQgDATgRAUQgPAUgTAIQgJADgHAAQgIAAgGgEgAEBh0IgIADIAAAOIgEAPQAIgGAIgDIAGgCQAAgGABgIQACgIADgHQgIAFgIADgADOidQgJAEgGAAQACAHgCAMIgEAQQAKgKALgEIAKgDQgBgGACgIQABgJAFgKQgJAHgKAEgAE4i6QgBAIgCAHQAIgHAJgEQAHgDAGAAQgIgJAEgSQABgKAFgKQgKAIgKAFQgJAEgHgBQALAJgEAVgAieAZQgKgIAEgRIADgJIAigpIAPgHQASgGAKAJQAKAJgEARQgEATgPAOQgPARgSAGQgIACgGAAQgIAAgGgFgAgYgSQgKgJAFgTQAEgTAPgTQAOgTASgIQASgHAJAIQAKAIgEATQgEAUgQATQgPATgTAHQgGAEgHAAQgHAAgFgEgAHthVQgKgIADgTQACgSAMgRQAMgRAQgIQAPgGAJAIQAEADADAGIgPA1QgLARgPAGQgIAEgGAAQgGAAgFgEgAAAiXQgJgIAFgSQAEgSANgQQAPgRASgHQASgGAJAIQAKAIgFASQgEASgPARQgPAQgSAGQgIAEgHAAQgIAAgDgFgAIoiwQgJgIADgSQABgKAFgKQgKALgLAFQgRAIgKgIQgKgJADgUQACgKAFgLQgIAHgJAEQgQAJgKgIQgKgJADgUQABgLAFgLQgHAGgIAEQgOAHgJgHQgJgIACgSQACgSAMgRQAMgSAPgHQAIgFAIABQgKgIACgUIACgKIgKAGQgQAHgKgIQgJgIADgSQACgMAGgMQgJAKgMAEQgOAHgJgIQgJgHACgRQACgNAIgMQgKAMgMAFQgPAGgHgHQgJgHADgPQACgQALgPQALgQAOgGQANgFAJAHQAIAGgCAQQgCAMgHALQALgNAOgGQAOgFAJAHQAJAHgCAQQgCALgFALQAKgMAMgFQAQgGAJAIQAKAIgCARIgCAKQAFgFAHgDQAOgGAJAGQgEgJACgNQABgIAEgJQgHAGgIAEQgPAHgKgHQgJgIADgSQABgLAFgKQgJAIgJAEQgPAHgJgHQgIgIACgRQACgMAIgMQgLAMgMAFQgOAGgIgHQgIgHACgQQACgPALgPQALgQAPgGQANgFAIAGQAIAHgCAQQgBAMgHALQALgNANgGQAOgFAJAHQAIAHgBAQQgCAJgDAIQAIgJAKgFQAPgHAJAIQAKAHgDATQgBAHgDAIQAJgIAJgFQARgHAKAJQAKAHgDATIgBAIIAIgGQAQgHAKAJQAEACACADIgbBmQgGgIADgPIAAgCQgGAFgIAEQgLAGgJgCQAEAIgCAMIgDAOQAGgFAHgDQANgFAIAEIgVBTIgLAGQgRAGgJgIQgKgIADgSIACgLQgIAGgIADQgJAEgGAAQAJAJgDASQgCAMgFAMQAJgJAJgFQAQgHAKAIQAKAJgCATQgCANgGAMQAHgHAIgEIgXBWQgFgBgEgDgAHmlaQgBAJgDAKQAIgIAJgFQAHgDAGAAQgJgJADgTIACgHIgJAEQgLAFgIgBQAJAHgDARgAIhm1IgBAIIAKgGQAMgFAJADQgEgIACgNIACgGIgJAEQgOAHgJgFQAEAIgCANgABOjwQgJgHADgRQADgQANgQQANgQAQgGQAPgGAKAHQAIAHgDARQgDARgNAQQgNAQgPAGQgHACgGAAQgHAAgFgEgAFzlJQgHgHACgQQADgPAMgQQAMgPAOgGQAPgGAIAHQAIAHgDAQQgCAPgMAQQgNAPgOAFQgHADgGAAQgGAAgEgDgAFBlnQgIgHADgQQACgPANgQQAMgPAOgGQAOgGAIAHQAJAHgDAPQgDAQgMAQQgMAPgPAGQgGADgFAAQgGAAgFgEgAEOmBQgJgHADgRQADgQANgQQANgQAOgHQAQgGAIAIQAJAHgDAQQgEARgMAQQgNAQgPAGQgHADgGAAQgGAAgEgEgADWmbQgIgHADgSQABgIAEgIIAfglIAKgFQAQgGAIAIQAJAHgDARQgDARgNARQgOASgPAGQgIADgGAAQgHAAgFgEgAEwn/QgHgHACgOQACgPAKgOQAKgOANgGQANgFAIAGQAHAGgCAPQgCAPgKAOQgLAOgMAGQgGACgFAAQgGAAgEgDgAJ7oUQgKgIADgRIABgHQgEADgFACQgPAIgIgHQgJgIADgSQABgJAFgKQgIAIgIAEQgOAHgIgHQgHgGACgRQACgQALgQQALgQAOgGQANgHAIAHQAHAGgCAQQgBAJgDAJQAIgJAKgGQAOgGAIAHQAJAHgDARIgBAIQAFgEAGgCQADgCAEAAIgXBYIgIACQgGAAgFgEgAF1pTQgHgHACgPQABgOAKgOQALgPANgFQANgGAIAHQAHAGgCAPQgCAPgLAOQgKAOgMAFQgHADgFAAQgFAAgEgDgAIIptQgIgGACgQQADgPAJgOQgKAPgNAFQgNAHgHgGQgHgGACgQQACgLAGgMQgIAKgKAEQgNAHgHgGQgGgFABgLIAMAAIAXAAIANAAIAuAAQgCALgIAMQALgQANgHIABAAIACAAIARAAIAAABQAIAGgCAPQgCAQgLAQQgKAPgOAGQgGAEgGAAQgFAAgDgDgAKnqNQABgJADgIQgHAIgIADQgNAHgHgGQgHgGACgQIABgEIgKAGQgOAHgHgHQgHgFACgOIBZAAIgJAjIgBAEIAAABIgGAXQgEgHACgMg");
	this.shape_149.setTransform(290.8,-39.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_149},{t:this.shape_148}]}).wait(1));

	// belly
	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.rf(["#2F4474","#31497B","#2A3B60","#222B45","#222C47","#151B2C","#3A434D"],[0.231,0.427,0.502,0.588,0.631,0.663,0.722],-54.9,-42.4,0,-54.9,-42.4,313.2).s().p("AlgA6QmcgJgngOIg8gTQgSgHgTgJQANADAugBIBtABIBkAEIAKAAIAZABIAEAAQBFADBUABIH6AIIB6ABQgiABgZAFQgMACgIACIgFACQgLAEgBAGQgDAJAlAGQAlAFA0gBQA0gBAlgGQAjgGgDgIQgBgFgNgEIgBgBIgWgEQgcgGglAAQA4gBArgCQBjgGgCgFIA4gDQCZgGBNgLQBZgMAsgNQAtgNAHgMIgBAKQgLAjhKAaQgrAQhMAOQgoAHhkAGQhZAGjMAFQhNAChqAAQivAAkBgGg");
	this.shape_150.setTransform(-33.3,96.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.rf(["#243459","#2B406D","#1F2B47","#151B2B","#141921","#131619","#1F2328"],[0.29,0.427,0.502,0.588,0.631,0.682,0.722],-51.6,-34.9,0,-51.6,-34.9,313.2).s().p("AERAyIgPgBIgaABIh5gBIn7gJQhUgBhEgDIgFAAIAAhRIA6ABQDVAJEXgDQFegEDPgGIhQBTQADAFhjAGQgsACg4ACg");
	this.shape_151.setTransform(-37.7,93.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.rf(["#2F4474","#365087","#2A3B60","#222B45","#252D3B","#272D34","#333B43"],[0.29,0.427,0.502,0.588,0.631,0.682,0.722],-52.2,-32.8,0,-52.2,-32.8,313.2).s().p("ApIA4IgKAAIhkgEIhtgBQguABgOgDIgbgQIgcgUQgYgaADgmIABgFQCtAVDOAKIAABSIgZgBgAIjgcICIgGIAWgBQAZgCBhgCQBQABAPgKQAFAEADAFQAPANgGAMQgHAMgtALQgsANhaAMQhMALiaAIIg4ADg");
	this.shape_152.setTransform(-37.1,91.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#131927").s().p("AgjACQgJgCgDgCQAWACAZgBIAAAAIABAAIABAAIAugCQgEADgIAAQgPADgVABIgEAAQgSAAgNgCg");
	this.shape_153.setTransform(-11.8,101.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#1E273F").s().p("AABAGIgBAAIAAAAQgIAAgHgCQgHgCABgCQgBgBAIgCQAGgCAIAAQAJAAAGACQAHACABABQAAACgHACIgNACg");
	this.shape_154.setTransform(-11.8,100.4);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#171D2E").s().p("AgvAIQAAAAgBgBQAAgBAAAAQgBgBAAAAQAAAAAAgBQABgEAPgEQAOgEATAAQAUAAAOAEQAPAEABADQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABIguACIAOgCQAHgCgBgCQAAgCgHgBQgGgBgJAAQgIAAgHABQgHABAAADQAAACAHACQAGABAJAAIgMAAIgjgBg");
	this.shape_155.setTransform(-11.8,100);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#243559").s().p("An2BVIg6gCIAAiuQBAAGBTACQCHAEEzAYQErAYDpgOIAABtIgOAQQjPAHleAEIiOABQjBAAidgHg");
	this.shape_156.setTransform(-37,80.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#2F4472").s().p("AuiA8QADgcAPgQQBEgsA5gYQBJgeBZgIQAhAEApADIAACuQjNgKiugVgAI6BIIAAhtIARAAQB4AQBSAWQBCASAqAYIARALQAKAGAHAIQgPAKhRgBQhhACgZACIgVABIiIAGg");
	this.shape_157.setTransform(-37.9,79.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#F5F6F6").s().p("AA6ARQkzgWiIgEQhSgChAgGQgpgDgigEQAjgEAogBQBXgFBzAFQFbAMFqAVQB+AJBlAOIgRAAQhWAFhfAAQiiAAi9gPg");
	this.shape_158.setTransform(-39.9,73.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#4F5B69").s().p("AhWAGQgmgGADgHQABAHAiAEQAkAFAzgBQAzgBAlgGQAfgDACgHQACAIgjAEQglAGgzABIgPAAQgqAAgegEg");
	this.shape_159.setTransform(-11.8,101.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#070909").s().p("AhWAKQgigGgBgGQABgFALgEIAGgCIgFACQgFADgBADQgDAHAkAFQAjAFAvAAQAwgCAigFQAigFgCgGQgBgEgHgDQANAEACAFQgCAFgfAGQglAGgzABIgPAAQgqAAgegEg");
	this.shape_160.setTransform(-11.8,101.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#12181C").s().p("AhRAIQgkgFADgHQABgDAFgDQAIAEATADIAiADQADABAJACQAPADAUAAQAVgBAPgEQAJgBADgCIAjgEQAQgCAIgEQAHADABAEQADAFgjAGQghAFgxACIgHAAQgrAAgggFg");
	this.shape_161.setTransform(-11.8,101.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#151C1F").s().p("AhQAIQgTgDgIgEIAFgBQAHgCAMgCQAZgEAigBIAYgBIAPABIAFAAQAlAAAdAFIAVAEIABAAQgIADgQACIgjAEQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBQgBgFgPgCQgOgEgVAAQgSAAgOAEQgPACgBAHQAAAAAAABQAAAAABABQAAAAAAABQABAAAAABIgigDg");
	this.shape_162.setTransform(-11.9,99.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150}]}).wait(1));

	// base
	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.lf(["#B2B2B2","#C5C5C6"],[0.306,0.875],0.9,2.3,0.2,-0.6).s().p("AiYAbIEWg+IAcATIkzA0QgBgFACgEg");
	this.shape_163.setTransform(-367.2,67.5);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.lf(["#B7B7B8","#CDCDCE"],[0.306,0.875],-5,2.7,-4.7,-0.3).s().p("AjqgBIAAgVQDsANDoAgQj+gXjWgBg");
	this.shape_164.setTransform(-214.4,54.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.rf(["#B2B2B2","#EAEBEC"],[0.318,0.431],0.8,2.6,0,0.8,2.6,183.7).s().p("ApFA1IAdgGIC1gqQC6gnC0gUIAAAwQidAPiEAVIiKAWIh5AUgAAbg6QA/gGA9gDIAAAuIh8ALgAC4hFQBWgDBVABQBcABBcAFIArADIAAAVIgpAAQiRAAh9AKIhXAHg");
	this.shape_165.setTransform(-296.2,58.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.lf(["#262D38","#1E2534","#1D253C","#222B45","#2A3B60","#2B406C","#2F4474"],[0,0.043,0.141,0.282,0.482,0.671,1],92.2,20.2,92.2,-15.6).s().p("A5fDWQjvgBirgYQiqgYiZg7QiYg6g9gmIgCgBIgBgBIgDgCIgBgBIgBAAIgCgBIgCgCIgCAAQgjgYgJgZIAAgBIAAgBIgCgCIABAAQFFg6C+gcQEhgrEKgVQCwgPDHADQD+ACEiAdQC9AUEeAmIH3BGQFEArF8gBQExAAGjggQGDgXGbg1IBRE9IgJAAQiYALitAGIg2AAMg40AABg");
	this.shape_166.setTransform(-118.7,78.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.lf(["#697270","#6F7C77","#99A3AD"],[0.471,0.655,0.988],1.5,3.3,-0.1,-2.9).s().p("Ag2gkIBtgGIAAAbQgtAbhAAfg");
	this.shape_167.setTransform(354.9,41.3);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.lf(["#697270","#6F7C77","#99A3AD"],[0.471,0.655,0.988],-1,-3.3,-1,1.6).s().p("Ag2gUQBAAKAtAKIAAAPIhtAGg");
	this.shape_168.setTransform(354.9,35.4);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.lf(["#D2D3D3","#F9FAFB","#F9FAFB"],[0,0.729,0.89],5.5,25.5,5.5,-26.5).s().p("Ao7DeIn5hFQkegni9gTQkigej+gCQjHgCiwAOQkKAWkhArQi+AclFA5QgDgHAAgGIAAgFIE2g2IB5gUICKgWQCEgVCdgRIAAgwQi0AUi5ApIi2AqIgdAGIkYBAIACgFQAEgPAIgLQAZghBigwQBGgjBDgYIAFgCQAJgMA2g0QBGg3CKguQCLgtCsgZQCrgbDbgKIDggKQCGgGB2gBMA52AAAQE+AHESAJQjsD2k7BaIJah4IC/glIK5iCIADAAIAPgDIBZAHIASABIgTADIgBAAIidAjIgCAAIldBIImKBRQn0BinVA9QmbA1mDAYQmjAfkxABIgRAAQlwAAk9grgEgpbAAVIAAAwIB8gLIAAguQg9ADg/AGgEghZAAmIAqAAQDWADEAAYQjpgjjtgNIgsgDQhbgFhdgBQhVgBhWADIAAAtIBXgHQB4gKCJAAIANAAg");
	this.shape_169.setTransform(-28.3,50.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.rf(["#2F4474","#2B406C","#2A3B60","#222B45","#1D253C","#1E2534","#262D38"],[0.29,0.427,0.502,0.588,0.631,0.682,0.722],-61.7,-32.6,0,-61.7,-32.6,332.4).s().p("AvTFLIhRk/QHVg7H0hkIGIhRQB5DQhZBPQllBri+AoQjEApj5AuIgEAAQiAAYiwANIgMABgAN9j9IAWhIIAAAAIABgFQBSAIA/AJIAAAqIAABRQhQAmhtApIgFACIgLAEIgNAFIgBABIgJADIgJADg");
	this.shape_170.setTransform(243.2,64.8);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.rf(["#293B66","#25375E","#243354","#1B2238","#171E30","#1E2534","#252C38"],[0.29,0.427,0.502,0.588,0.631,0.682,0.722],-122.6,-18.7,0,-122.6,-18.7,332.4).s().p("AkyhZIFchIIACAAICcgiIABAAIATgDIBXAHIgBAGIAAAAIgWBIIhFCdIgEACQiXA0ijAxIhVAbIg/ATIgXAGQBZhRh5jPg");
	this.shape_171.setTransform(304.1,50.8);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.lf(["#E5E9ED","#F9FAFB"],[0,1],51.9,20.8,61.9,-111.8).s().p("AmuCVIJSilIAUgHIADgBQCDgZBqhrIAHgIIkPFJQkQgJk+gHg");
	this.shape_172.setTransform(203.7,8.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#AFBBC6").s().p("AmuH7QBBgpA7g+IE3lvIAiglIEIk2IA6hDICQiuIAIgHIAZABIs/PPIgHAIQhqBsiDAZQA6gUAxggg");
	this.shape_173.setTransform(276.3,-49.6);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#406C99").s().p("AjJinIBiADIBhAEQE3AMD5AQQBrAEBcAHIgPACIgCAAIq5CAIi9AlIpbB6QE8hbDsj0g");
	this.shape_174.setTransform(240.1,42.3);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#305172").s().p("AD8K0QhcgHhsgEQj2gQk5gMIhigEIhigDIEQlMIM+vQIgZAAIAHgHQATgQAYgHQASgFAUAAIAWAAIAOAAIA6AAIABAAIADAAICQAAIgJAjIgBAEIgBABIlgVLIhZgGg");
	this.shape_175.setTransform(290.2,-39.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-382.7,-109,748.3,234.7);


(lib.point_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.point("synched",0);
	this.instance.setTransform(-62.1,-55.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgMAAgOQAAgOAFgJQAFgMAJgFQAJgHALABQAHAAAHADQAGAEAFAFIAAguIAPAAIAAB/IgPAAIAAgMQgJAOgQAAQgKAAgJgGgAgQgJQgGAJgBAQQAAATAIAIQAHAJAJAAQAKAAAHgJQAIgIgBgSQABgRgIgJQgHgIgLgBQgIABgIAIg");
	this.shape.setTransform(92.4,-33.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgNAAQgIAAgIAHg");
	this.shape_1.setTransform(82.7,-31.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgTA7QgKgGgFgLQgFgMAAgOQAAgOAFgJQAFgMAJgFQAJgHALABQAHAAAGADQAHAEAFAFIAAguIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgPgJQgIAJAAAQQAAATAIAIQAHAJAJAAQAKAAAIgJQAHgIAAgSQAAgRgHgJQgIgIgLgBQgIABgHAIg");
	this.shape_2.setTransform(72.4,-33.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_3.setTransform(62.7,-31.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgdAkQgMgNgBgXQABgVAMgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_4.setTransform(52.7,-31.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgBA8QgFgCgCgEQgBgFAAgPIAAgzIgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABABIAFAAIAHAAIACAOIgMABQgIAAgDgDg");
	this.shape_5.setTransform(45.3,-33.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAYAuIgTgdIgFgIIgXAlIgTAAIAiguIgfgtIATAAIAPAWIAFAKIAGgKIAQgWIASAAIggAsIAjAvg");
	this.shape_6.setTransform(38.2,-31.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgNAAQgIAAgIAHg");
	this.shape_7.setTransform(28.7,-31.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_8.setTransform(14.1,-31.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgnBBIAAh/IAOAAIAAAMQAFgHAHgEQAGgDAHAAQANAAAIAGQAKAGAEALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgHAAgGgDQgGgDgFgFIAAAtgAgRgqQgIAJAAASQAAAQAIAJQAHAIAKAAQAIAAAJgJQAGgIABgRQgBgSgGgJQgIgJgJAAQgJAAgIAKg");
	this.shape_9.setTransform(5,-30);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAJgDIAAgEQAAgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAEAEACAGIABAPIAAATQAAAWABAGQAAAGADAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgQACg");
	this.shape_10.setTransform(-5.3,-31.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgGBAIAAh/IAOAAIAAB/g");
	this.shape_11.setTransform(-12.3,-33.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgKQAAgJACgEQACgGAGgEQADgEALAAIAPABIgCAPIgKgBQgHAAgDADQgDACAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_12.setTransform(-16.4,-33.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_13.setTransform(-29.3,-31.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAWBAIAAg7QAAgKgGgGQgEgFgKAAQgFAAgHAEQgFAEgDAGQgDAEAAALIAAAzIgQAAIAAh/IAQAAIAAAuQALgNAPABQALAAAHADQAIAFADAHQAEAHAAAMIAAA7g");
	this.shape_14.setTransform(-39.3,-33.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgBA8QgFgCgCgEQgBgFAAgPIAAgzIgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABABIAFAAIAHAAIACAOIgMABQgIAAgDgDg");
	this.shape_15.setTransform(-46.7,-33.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgGQgGgFgJAAQgFAAgHAEQgGAEgCAFQgDAFAAALIAAAzIgQAAIAAh/IAQAAIAAAvQAMgOAOAAQALAAAHAFQAIADADAIQADAHABAMIAAA7g");
	this.shape_16.setTransform(710.7,-55.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgBA9QgFgDgCgFQgBgEAAgOIAAg0IgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_17.setTransform(703.3,-55.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgHBAIAAhbIAOAAIAABbgAgHgsIAAgTIAOAAIAAATg");
	this.shape_18.setTransform(698.7,-55.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AASAuIgPg2IgDgQIgSBGIgQAAIgdhbIARAAIAPA0IAFAUIAFgTIAPg1IAOAAIAOA0IAFASIAFgSIAQg0IAPAAIgdBbg");
	this.shape_19.setTransform(690.2,-53.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgMAAgNQAAgOAFgKQAFgLAJgHQAJgFALgBQAHAAAGAEQAHADAEAHIAAgvIAQAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgPgIQgIAIABARQAAASAHAIQAIAJAIAAQAKAAAIgIQAGgJABgRQgBgSgGgIQgIgKgLABQgJgBgGAKg");
	this.shape_20.setTransform(673.4,-55.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_21.setTransform(663.7,-53.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_22.setTransform(654.1,-53.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_23.setTransform(644.6,-53.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AghA/IgCgPIAJACQAFAAAEgCQADgCACgDIAFgMIABgEIgjhbIARAAIATA2IAFAUIAGgUIAUg2IAQAAIgjBdIgHAVQgEAIgGAEQgFADgIAAQgEAAgGgCg");
	this.shape_24.setTransform(630.3,-51.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgGBAIAAh/IANAAIAAB/g");
	this.shape_25.setTransform(623.7,-55.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgGBAIAAhbIANAAIAABbgAgGgsIAAgTIANAAIAAATg");
	this.shape_26.setTransform(619.7,-55.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAGAAQAHAAAJAFIgGAPQgFgEgGAAQgFAAgDADQgEADgBAGQgDAIAAAKIAAAvg");
	this.shape_27.setTransform(615.4,-53.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAJgDIAAgEQAAgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAEAEACAGIABAPIAAATQAAAWABAGQAAAGADAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgQACg");
	this.shape_28.setTransform(606.7,-53.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_29.setTransform(594.2,-53.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgGBAIAAhbIAOAAIAABbgAgGgsIAAgTIAOAAIAAATg");
	this.shape_30.setTransform(584.7,-55.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAGAAQAHAAAJAFIgGAPQgFgEgGAAQgGAAgCADQgEADgCAGQgCAIAAAKIAAAvg");
	this.shape_31.setTransform(580.4,-53.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgnBBIAAh/IAOAAIAAAMQAFgHAHgEQAGgDAHAAQANAAAIAGQAKAGAEALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgHAAgGgDQgGgDgFgFIAAAtgAgRgqQgIAJAAASQAAAQAIAJQAHAIAKAAQAIAAAJgJQAGgIABgRQgBgSgGgJQgIgJgJAAQgJAAgIAKg");
	this.shape_32.setTransform(572,-52.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_33.setTransform(557.1,-53.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgHBAIAAhbIAPAAIAABbgAgHgsIAAgTIAPAAIAAATg");
	this.shape_34.setTransform(550.7,-55.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgBA9QgFgDgCgFQgBgEAAgOIAAg0IgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_35.setTransform(541.3,-55.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_36.setTransform(533.6,-53.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgYA0IAAALIgPAAIAAh/IAQAAIAAAuQAKgNANAAQAJAAAIAEQAHADAFAHQAFAGADAJQADAHAAAKQAAAYgMANQgMANgQAAQgPAAgJgNgAgRgIQgHAIAAAQQAAAQAEAIQAIAMAMAAQAJAAAHgJQAIgJAAgSQAAgQgHgIQgIgKgJABQgJgBgIAKg");
	this.shape_37.setTransform(523.9,-55.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgIAOQAFgCACgEQABgEAAgGIgHAAIAAgSIAQAAIAAASQAAAIgEAGQgDAGgFADg");
	this.shape_38.setTransform(511.2,-48.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_39.setTransform(504.1,-53.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_40.setTransform(494.7,-53.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_41.setTransform(484.7,-53.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgGBAIAAhbIAOAAIAABbgAgGgsIAAgTIAOAAIAAATg");
	this.shape_42.setTransform(477.7,-55.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgBA9QgFgDgCgFQgBgEAAgOIAAg0IgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_43.setTransform(473.3,-55.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHADgGQADgGAGgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACADAFQAFAEABAGIAAAPIAAATQAAAWABAGQABAGAEAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgDAFQgJACgEACQgEABgDAEQgBADgBAEQABAHAEAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgQACg");
	this.shape_44.setTransform(465.7,-53.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAJAAAIAFIgFAPQgHgEgFAAQgFAAgDADQgDADgCAGQgDAIAAAKIAAAvg");
	this.shape_45.setTransform(458.4,-53.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_46.setTransform(449.6,-53.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgbA7QgKgIABgPIAPACQABAHAEAEQAGAEAKAAQAKAAAGgEQAFgFADgIQAAgEAAgQQgKAMgOAAQgSAAgLgOQgKgOAAgRQgBgNAFgMQAFgLAJgGQAJgGAMAAQAPAAALANIAAgLIAPAAIAABPQgBAVgEAKQgFAJgJAFQgJAFgNAAQgQAAgLgHgAgQgrQgIAIAAARQAAASAIAHQAHAIAJAAQALAAAHgIQAIgHAAgSQAAgRgIgIQgHgJgLAAQgJAAgHAJg");
	this.shape_47.setTransform(439.4,-52);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgGBAIAAhbIAOAAIAABbgAgGgsIAAgTIAOAAIAAATg");
	this.shape_48.setTransform(432.7,-55.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgMIAOAAIAAgLQAAgIACgFQACgGAGgEQAEgEAKAAIAPACIgCANIgKgBQgHAAgDADQgDAEAAAIIAAAJIASAAIAAAMIgSAAIAABPg");
	this.shape_49.setTransform(428.6,-55.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_50.setTransform(420.7,-53.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_51.setTransform(410.7,-53.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_52.setTransform(401.5,-53.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgnBBIAAh/IAPAAIAAAMQAFgHAGgEQAGgDAIAAQALAAAKAGQAJAGAEALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgHAAgGgDQgGgDgEgFIAAAtgAgRgqQgIAJAAASQAAAQAHAJQAIAIAKAAQAJAAAHgJQAIgIgBgRQABgSgIgJQgHgJgJAAQgKAAgHAKg");
	this.shape_53.setTransform(387,-52.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAHgEAEgHQACgFAAgLIAAgFQgIADgPACg");
	this.shape_54.setTransform(376.7,-53.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_55.setTransform(369.7,-55.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgMIAOAAIAAgLQAAgIACgFQACgGAGgEQAEgEAKAAIAPACIgCANIgKgBQgHAAgDADQgDAEAAAIIAAAJIASAAIAAAMIgSAAIAABPg");
	this.shape_56.setTransform(365.6,-55.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgGBAIAAh/IAOAAIAAB/g");
	this.shape_57.setTransform(355.7,-55.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_58.setTransform(351.7,-55.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQAMAAAHADQAHACAEAFQADAEACAGIABAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgPACg");
	this.shape_59.setTransform(344.7,-53.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_60.setTransform(329.7,-53.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgGBAIAAhbIANAAIAABbgAgGgsIAAgTIANAAIAAATg");
	this.shape_61.setTransform(322.7,-55.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_62.setTransform(310.7,-53.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgGBAIAAh/IAOAAIAAB/g");
	this.shape_63.setTransform(303.7,-55.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgYA0IAAALIgPAAIAAh/IAQAAIAAAuQAKgNANAAQAJAAAIAEQAHADAFAHQAFAGADAJQADAHAAAKQAAAYgMANQgMANgQAAQgPAAgJgNgAgRgIQgHAIAAAQQAAAQAEAIQAIAMAMAAQAJAAAHgJQAIgJAAgSQAAgQgHgIQgIgKgJABQgJgBgIAKg");
	this.shape_64.setTransform(296.9,-55.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAHgEAEgHQACgFAAgLIAAgFQgIADgPACg");
	this.shape_65.setTransform(286.7,-53.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_66.setTransform(279.7,-55.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgHBAIAAhbIAOAAIAABbgAgHgsIAAgTIAOAAIAAATg");
	this.shape_67.setTransform(275.7,-55.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAHgEAEgHQACgFAAgLIAAgFQgIADgPACg");
	this.shape_68.setTransform(268.7,-53.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgGAuIgjhbIAQAAIAUA2IAFATIAFgSIAVg3IAQAAIgjBbg");
	this.shape_69.setTransform(259.2,-53.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHADgGQADgGAGgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACADAFQAFAEABAGIAAAPIAAATQAAAWABAGQABAGAEAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgDAFQgJACgEACQgEABgDAEQgCADABAEQAAAHAEAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgQACg");
	this.shape_70.setTransform(249.7,-53.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_71.setTransform(235.1,-53.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgHBAIAAhbIAPAAIAABbgAgHgsIAAgTIAPAAIAAATg");
	this.shape_72.setTransform(228.7,-55.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMgBAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgIAAgIAHg");
	this.shape_73.setTransform(216.7,-53.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgMAAgNQAAgOAFgKQAFgLAJgHQAJgFALgBQAHAAAGAEQAHADAFAHIAAgvIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgPgIQgIAIAAARQABASAHAIQAIAJAIAAQAKAAAIgIQAGgJABgRQgBgSgGgIQgIgKgLABQgIgBgHAKg");
	this.shape_74.setTransform(206.4,-55.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_75.setTransform(196.7,-53.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_76.setTransform(184.2,-53.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AApBAIgQgnIg0AAIgNAnIgTAAIAxh/IARAAIA1B/gAgIgYIgNAjIApAAIgOgiIgGgbQgDANgFANg");
	this.shape_77.setTransform(166.7,-55.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgfA5QgOgIgIgPQgHgQAAgRQAAgeARgSQARgSAaAAQARAAAPAIQAOAJAIAPQAHAQAAARQAAAUgIAPQgIAQgOAHQgPAIgQAAQgRAAgOgJgAgdgmQgNANAAAaQAAAYAMANQANAOARAAQATAAAMgOQANgNAAgZQAAgOgGgMQgFgLgKgHQgLgGgMgBQgQAAgNANg");
	this.shape_78.setTransform(153.7,-55.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AApBAIgQgnIg0AAIgNAnIgTAAIAxh/IARAAIA1B/gAgIgYIgNAjIApAAIgOgiIgHgbQgCANgFANg");
	this.shape_79.setTransform(140.7,-55.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgGQgGgFgJAAQgFAAgHAEQgGAEgCAFQgDAFAAALIAAAzIgQAAIAAh/IAQAAIAAAvQAMgOAOAAQALAAAHAFQAIADADAIQADAHABAMIAAA7g");
	this.shape_80.setTransform(125.7,-55.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgbA7QgKgIAAgPIAQACQABAHAEAEQAGAEAKAAQAKAAAFgEQAGgFADgIQAAgEABgQQgLAMgOAAQgSAAgLgOQgKgOAAgRQgBgNAFgMQAFgLAJgGQAJgGAMAAQAPAAALANIAAgLIAPAAIAABPQgBAVgEAKQgFAJgJAFQgJAFgNAAQgQAAgLgHgAgQgrQgIAIAAARQAAASAIAHQAHAIAJAAQALAAAHgIQAIgHAAgSQAAgRgIgIQgHgJgLAAQgJAAgHAJg");
	this.shape_81.setTransform(115.4,-52);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgGBAIAAhbIAOAAIAABbgAgGgsIAAgTIAOAAIAAATg");
	this.shape_82.setTransform(108.7,-55.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AAhBAIAAg9IhBAAIAAA9IgRAAIAAh/IARAAIAAA1IBBAAIAAg1IARAAIAAB/g");
	this.shape_83.setTransform(100.2,-55.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgIAOQAFgCACgEQABgEAAgGIgHAAIAAgSIAQAAIAAASQAAAIgDAGQgEAGgFADg");
	this.shape_84.setTransform(86.2,-48.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AAmBAIghguIgFgIIgFAJIggAtIgUAAIAxhBIgsg+IAVAAIAXAhIAIAQIALgPIAZgiIATAAIguA9IAyBCg");
	this.shape_85.setTransform(77.7,-55.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AApBAIgPgnIg0AAIgPAnIgSAAIAyh/IAQAAIA1B/gAgIgYIgOAjIAqAAIgNgiIgHgbQgDANgFANg");
	this.shape_86.setTransform(65.7,-55.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAtBAIAAhqIgmBqIgOAAIgkhrIAABrIgRAAIAAh/IAZAAIAfBaIAEATIAHgVIAfhYIAXAAIAAB/g");
	this.shape_87.setTransform(52.2,-55.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgWA/QAAgPAGgVQAFgXALgRQAJgVAMgNIg9AAIAAgPIBRAAIAAAMQgMANgMAWQgMATgFAXQgFARgBATg");
	this.shape_88.setTransform(34.7,-55.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgcA3QgLgKgCgQIAQgCQADAOAGAFQAHAGAJAAQAKAAAHgHQAIgJAAgKQAAgMgHgGQgHgIgLAAQgDAAgGACIABgMIADABQAIAAAIgGQAIgFAAgLQAAgJgGgFQgGgHgHAAQgJAAgGAHQgHAFgBAMIgQgDQADgQAKgIQAKgJAQAAQAIgBAJAFQAJAFAFAHQAEAIAAAJQAAAIgEAHQgFAHgIAEQALADAGAGQAHAJAAAMQAAARgNAMQgMAMgRgBQgRAAgLgKg");
	this.shape_89.setTransform(24.7,-55.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgWA/QAAgPAGgVQAFgXALgRQAJgVAMgNIg9AAIAAgPIBRAAIAAAMQgMANgMAWQgMATgFAXQgFARgBATg");
	this.shape_90.setTransform(14.7,-55.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_91.setTransform(-0.3,-53.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AAVBAIAAg7QABgKgGgGQgEgFgKAAQgFAAgHAEQgFAEgDAFQgDAFAAALIAAAzIgQAAIAAh/IAQAAIAAAvQALgOAPAAQAKAAAIAFQAIADADAIQADAHABAMIAAA7g");
	this.shape_92.setTransform(-10.3,-55.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgBA9QgFgDgCgFQgBgEAAgOIAAg0IgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_93.setTransform(-17.7,-55.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_94.setTransform(-30.3,-53.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgfA5QgOgIgIgPQgHgQAAgRQAAgeARgSQARgSAaAAQARAAAPAIQAOAJAIAPQAHAQAAARQAAAUgIAPQgIAQgOAHQgPAIgQAAQgRAAgOgJgAgdgmQgNANAAAaQAAAYAMANQANAOARAAQATAAAMgOQANgNAAgZQAAgOgGgMQgFgLgKgHQgLgGgMgBQgQAAgNANg");
	this.shape_95.setTransform(-42.3,-55.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.6,-67.4,782.6,46.2);


(lib.point_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.point("synched",0);
	this.instance.setTransform(-62.1,-55.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape.setTransform(487.1,-53.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_1.setTransform(477.7,-53.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_2.setTransform(467.7,-53.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgHBAIAAhbIAPAAIAABbgAgHgsIAAgTIAPAAIAAATg");
	this.shape_3.setTransform(460.7,-55.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgBA9QgFgDgCgFQgBgEAAgOIAAg0IgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_4.setTransform(456.3,-55.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAHgEAEgHQACgFAAgLIAAgFQgIADgPACg");
	this.shape_5.setTransform(448.7,-53.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAIAAAJAFIgFAPQgHgEgFAAQgGAAgCADQgDADgCAGQgDAIAAAKIAAAvg");
	this.shape_6.setTransform(441.4,-53.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_7.setTransform(432.6,-53.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgbA7QgKgIAAgPIAQACQABAHAEAEQAGAEAKAAQAKAAAFgEQAGgFACgIQABgEAAgQQgKAMgOAAQgSAAgLgOQgKgOAAgRQgBgNAFgMQAFgLAJgGQAJgGAMAAQAPAAALANIAAgLIAPAAIAABPQgBAVgEAKQgEAJgKAFQgJAFgNAAQgQAAgLgHgAgQgrQgIAIABARQgBASAIAHQAHAIAJAAQALAAAHgIQAIgHAAgSQAAgRgIgIQgIgJgKAAQgJAAgHAJg");
	this.shape_8.setTransform(422.4,-52);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgHBAIAAhbIAPAAIAABbgAgHgsIAAgTIAPAAIAAATg");
	this.shape_9.setTransform(415.7,-55.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgMIAOAAIAAgLQAAgIACgFQACgGAGgEQADgEALAAIAPACIgDANIgJgBQgHAAgDADQgDAEAAAIIAAAJIASAAIAAAMIgSAAIAABPg");
	this.shape_10.setTransform(411.6,-55.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_11.setTransform(403.7,-53.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_12.setTransform(393.7,-53.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_13.setTransform(384.5,-53.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgnBBIAAh/IAPAAIAAAMQAFgHAGgEQAGgDAIAAQALAAAJAGQAKAGAEALQAFAMAAANQAAAOgFAKQgFALgKAGQgKAGgKAAQgHAAgGgDQgHgDgDgFIAAAtgAgRgqQgIAJAAASQAAAQAHAJQAIAIAKAAQAJAAAHgJQAIgIgBgRQABgSgIgJQgHgJgJAAQgJAAgIAKg");
	this.shape_14.setTransform(370,-52.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQADgKAEgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgGADgJAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_15.setTransform(359.7,-53.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_16.setTransform(352.7,-55.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgMIAOAAIAAgLQAAgIACgFQACgGAGgEQADgEALAAIAPACIgDANIgJgBQgHAAgDADQgDAEAAAIIAAAJIASAAIAAAMIgSAAIAABPg");
	this.shape_17.setTransform(348.6,-55.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgGBAIAAh/IAOAAIAAB/g");
	this.shape_18.setTransform(338.7,-55.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_19.setTransform(334.7,-55.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAEAEACAGIABAPIAAATQAAAWABAGQAAAGADAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFABgLIAAgFQgJADgQACg");
	this.shape_20.setTransform(327.7,-53.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_21.setTransform(312.7,-53.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgGBAIAAhbIAOAAIAABbgAgGgsIAAgTIAOAAIAAATg");
	this.shape_22.setTransform(305.7,-55.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAIAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_23.setTransform(293.7,-53.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_24.setTransform(286.7,-55.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgYA0IAAALIgPAAIAAh/IAQAAIAAAuQAKgNANAAQAJAAAIAEQAHADAFAHQAFAGADAJQADAHAAAKQAAAYgMANQgMANgQAAQgPAAgJgNgAgRgIQgHAIAAAQQAAAQAEAIQAIAMAMAAQAJAAAHgJQAIgJAAgSQAAgQgHgIQgIgKgJABQgJgBgIAKg");
	this.shape_25.setTransform(279.9,-55.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQADgKAEgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgGADgJAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_26.setTransform(269.7,-53.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_27.setTransform(262.7,-55.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgGBAIAAhbIANAAIAABbgAgGgsIAAgTIANAAIAAATg");
	this.shape_28.setTransform(258.7,-55.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQADgKAEgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgGADgJAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_29.setTransform(251.7,-53.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgGAuIgjhbIAQAAIAUA2IAFATIAFgSIAVg3IAQAAIgjBbg");
	this.shape_30.setTransform(242.2,-53.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgPACg");
	this.shape_31.setTransform(232.7,-53.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_32.setTransform(218.1,-53.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgHBAIAAhbIAOAAIAABbgAgHgsIAAgTIAOAAIAAATg");
	this.shape_33.setTransform(211.7,-55.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgNAAQgIAAgIAHg");
	this.shape_34.setTransform(199.7,-53.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgTA7QgKgGgFgLQgFgMAAgNQAAgOAFgKQAFgLAJgHQAJgFALgBQAHAAAGAEQAHADAFAHIAAgvIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgQgIQgHAIAAARQAAASAIAIQAHAJAJAAQAKAAAHgIQAIgJAAgRQAAgSgIgIQgHgKgLABQgIgBgIAKg");
	this.shape_35.setTransform(189.4,-55.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_36.setTransform(179.7,-53.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_37.setTransform(167.2,-53.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AApBAIgQgnIg0AAIgNAnIgTAAIAxh/IARAAIA1B/gAgIgYIgNAjIApAAIgOgiIgHgbQgCANgFANg");
	this.shape_38.setTransform(149.7,-55.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgfA5QgOgIgIgPQgHgQAAgRQAAgeARgSQARgSAaAAQARAAAPAIQAOAJAIAPQAHAQAAARQAAAUgIAPQgIAQgOAHQgPAIgQAAQgRAAgOgJgAgdgmQgNANAAAaQAAAYAMANQANAOARAAQATAAAMgOQANgNAAgZQAAgOgGgMQgFgLgKgHQgLgGgMgBQgQAAgNANg");
	this.shape_39.setTransform(136.7,-55.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AApBAIgQgnIg0AAIgNAnIgTAAIAxh/IARAAIA1B/gAgIgYIgNAjIApAAIgOgiIgHgbQgCANgFANg");
	this.shape_40.setTransform(123.7,-55.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgGQgGgFgJAAQgFAAgGAEQgHAEgCAFQgDAFAAALIAAAzIgPAAIAAh/IAPAAIAAAvQAMgOAOAAQAKAAAIAFQAIADADAIQADAHAAAMIAAA7g");
	this.shape_41.setTransform(108.7,-55.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgbA7QgKgIAAgPIAQACQABAHAEAEQAGAEAKAAQAKAAAFgEQAGgFACgIQABgEAAgQQgKAMgOAAQgSAAgLgOQgKgOAAgRQgBgNAFgMQAFgLAJgGQAJgGAMAAQAPAAALANIAAgLIAPAAIAABPQgBAVgEAKQgEAJgKAFQgJAFgNAAQgQAAgLgHgAgQgrQgIAIABARQgBASAIAHQAHAIAJAAQALAAAHgIQAIgHAAgSQAAgRgIgIQgIgJgKAAQgJAAgHAJg");
	this.shape_42.setTransform(98.4,-52);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgGBAIAAhbIAOAAIAABbgAgGgsIAAgTIAOAAIAAATg");
	this.shape_43.setTransform(91.7,-55.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAhBAIAAg9IhBAAIAAA9IgRAAIAAh/IARAAIAAA1IBBAAIAAg1IARAAIAAB/g");
	this.shape_44.setTransform(83.2,-55.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgIAOQAFgCACgEQABgEAAgGIgHAAIAAgSIAQAAIAAASQAAAIgEAGQgDAGgFADg");
	this.shape_45.setTransform(69.2,-48.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgbA6QgPgIgIgPQgIgQAAgTQAAgQAIgRQAIgQAOgIQAPgIARAAQAOAAAMAFQALAEAGAIQAHAIADANIgPAEQgDgKgFgFQgEgGgIgDQgIgDgKgBQgJABgJADQgIADgFAGQgGAHgDAGQgFAMAAANQAAARAGALQAGAMAMAFQALAGALAAQALAAAKgFQALgEAFgFIAAgYIgmAAIAAgNIA3AAIAAAuQgNAKgNAFQgNAFgOAAQgRAAgQgIg");
	this.shape_46.setTransform(59.6,-55.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAhBAIhChjIAABjIgQAAIAAh/IARAAIBCBkIAAhkIAQAAIAAB/g");
	this.shape_47.setTransform(46.1,-55.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgWA/QAAgPAGgVQAFgXALgRQAJgVAMgNIg9AAIAAgPIBRAAIAAAMQgMANgMAWQgMATgFAXQgFARgBATg");
	this.shape_48.setTransform(34.7,-55.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgcA3QgLgKgCgQIAQgCQADAOAGAFQAHAGAJAAQAKAAAHgHQAIgJAAgKQAAgMgHgGQgHgIgLAAQgDAAgGACIABgMIADABQAIAAAIgGQAIgFAAgLQAAgJgGgFQgGgHgHAAQgJAAgGAHQgHAFgBAMIgQgDQADgQAKgIQAKgJAQAAQAIgBAJAFQAJAFAFAHQAEAIAAAJQAAAIgEAHQgFAHgIAEQALADAGAGQAHAJAAAMQAAARgNAMQgMAMgRgBQgRAAgLgKg");
	this.shape_49.setTransform(24.7,-55.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgWA/QAAgPAGgVQAFgXALgRQAJgVAMgNIg9AAIAAgPIBRAAIAAAMQgMANgMAWQgMATgFAXQgFARgBATg");
	this.shape_50.setTransform(14.7,-55.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_51.setTransform(-0.3,-53.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAVBAIAAg7QABgKgGgGQgEgFgKAAQgFAAgHAEQgFAEgDAFQgDAFAAALIAAAzIgQAAIAAh/IAQAAIAAAvQALgOAPAAQAKAAAIAFQAIADADAIQADAHABAMIAAA7g");
	this.shape_52.setTransform(-10.3,-55.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgBA9QgFgDgCgFQgBgEAAgOIAAg0IgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_53.setTransform(-17.7,-55.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_54.setTransform(-30.3,-53.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgfA5QgOgIgIgPQgHgQAAgRQAAgeARgSQARgSAaAAQARAAAPAIQAOAJAIAPQAHAQAAARQAAAUgIAPQgIAQgOAHQgPAIgQAAQgRAAgOgJgAgdgmQgNANAAAaQAAAYAMANQANAOARAAQATAAAMgOQANgNAAgZQAAgOgGgMQgFgLgKgHQgLgGgMgBQgQAAgNANg");
	this.shape_55.setTransform(-42.3,-55.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.6,-67.4,558.6,24.1);


// stage content:
(lib.dif05stsp29 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{s1:0,s2:95,s3:171,s4:271});

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
	this.frame_94 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
	}
	this.frame_170 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
	}
	this.frame_270 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
	}
	this.frame_372 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(94).call(this.frame_94).wait(76).call(this.frame_170).wait(100).call(this.frame_270).wait(102).call(this.frame_372).wait(1));

	// prot
	this.prot = new lib.prot();
	this.prot.setTransform(500,275,1,1,0,0,0,500,275);

	this.timeline.addTween(cjs.Tween.get(this.prot).wait(373));

	// t4
	this.instance = new lib.point_3("synched",0);
	this.instance.setTransform(194.7,251.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(271).to({_off:false},0).to({alpha:1},4).wait(98));

	// t3
	this.instance_1 = new lib.point_4("synched",0);
	this.instance_1.setTransform(170.7,199.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(171).to({_off:false},0).to({alpha:1},4).wait(198));

	// t2
	this.instance_2 = new lib.point_2("synched",0);
	this.instance_2.setTransform(170.7,174.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(95).to({_off:false},0).to({alpha:1},4).wait(274));

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FB6109").s().p("AgBBEIADgMQgNALgUgGQgMgEgIgKQgIgLgBgOQgCgNAFgOQAGgQAJgLQAJgLANgEQAMgCALAEQAKADAFAGQAGAHADAIIARg0IARAGIgvCNgAgVgbQgLAHgHAUQgGATAFAMQAFANALADQAMAEALgHQAJgHAHgSQAHgUgGgMQgEgNgMgEIgGgBQgIAAgHAEg");
	this.shape.setTransform(456.8,352.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FB6109").s().p("AgfBEIAuiNIARAGIguCNg");
	this.shape_1.setTransform(448.7,348.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FB6109").s().p("AgRA2QgVgIgJgSQgJgTAJgYQAKgdAUgIQARgHASAHQAVAHAJASQAJATgIAWQgHAUgKAKQgKAJgNADIgJABQgIAAgJgDgAgKgkQgMAHgHAUQgHASAGANQAFANANAEQAMAFALgIQAMgHAHgUQAHgRgGgNQgFgNgNgEQgGgCgFAAQgFAAgHAEg");
	this.shape_2.setTransform(440.3,348.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FB6109").s().p("AALBPIAWhCQAEgNgDgFQgEgIgKgEQgIgCgIABQgHACgFAGQgFAGgEAKIgTA4IgSgFIAwiNIAPAGIgPAzQAQgKASAGQAMAEAHAIQAHAHAAAJQABAHgFAPIgWBCg");
	this.shape_3.setTransform(428.8,342.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FB6109").s().p("AgOA2QgVgHgHgMQgIgMADgRIASADQgCALAFAIQAEAIAMAEQAKAEAIgDQAIgEACgGQACgGgFgFQgCgDgNgJQgQgJgGgGQgHgGgBgIQgCgIADgHQACgHAFgFQAFgFAHgCQAFgBAGAAQAIAAAIADQAMAEAIAHQAIAGACAIQADAHgCALIgSgEQABgIgEgGQgEgHgKgDQgMgEgFACQgGACgCAFQgBAEABADQABAEAFADIAMAKQARAJAFAGQAHAFACAIQACAHgDAJQgDAJgHAGQgIAGgLABIgGAAQgGAAgJgDg");
	this.shape_4.setTransform(418.5,340.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FB6109").s().p("AgPA2QgXgIgIgSQgJgTAJgXQAIgaASgKQATgKATAHQAVAHAIATQAJASgJAYIgBAFIhLgYQgFAPAFAMQAGAMANAEQAJADAHgCQAJgDAHgKIASAIQgKAPgPAFQgGACgIAAQgGAAgKgDgAgHglQgMAFgFAOIA4ASQADgNgDgIQgFgNgOgEQgFgCgFAAQgEAAgGADg");
	this.shape_5.setTransform(408.1,337.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FB6109").s().p("AgrAxIAihmIAOAFIgFAQQAJgJAHgBQAGgDAGADQAJADAHAIIgLAPQgFgHgHgBQgFgCgGACQgGACgEAEQgEAJgEAJIgSA2g");
	this.shape_6.setTransform(400,334);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FB6109").s().p("AALBPIAWhCQAEgNgDgFQgEgIgKgEQgIgCgIABQgHACgFAGQgFAGgEAKIgTA4IgSgFIAwiNIAPAGIgPAzQAQgKASAGQAMAEAHAIQAHAHAAAJQABAHgFAPIgWBCg");
	this.shape_7.setTransform(390,329.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FB6109").s().p("Ag1BMIAqh8IgvgQIAGgRIBvAmIgGARIgvgQIgoB8g");
	this.shape_8.setTransform(381.6,324.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FB6109").s().p("AgPA2QgXgIgIgSQgJgTAJgXQAIgaASgKQATgKATAHQAVAHAIATQAJASgJAYIgBAFIhLgYQgFAPAFAMQAGAMANAEQAJADAHgCQAJgDAHgKIASAIQgKAPgPAFQgGACgIAAQgGAAgKgDgAgHglQgMAFgFAOIA4ASQADgNgDgIQgFgNgOgEQgFgCgFAAQgEAAgGADg");
	this.shape_9.setTransform(362,321.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FB6109").s().p("AgBBEIADgMQgNALgUgGQgMgEgIgKQgIgLgBgOQgCgNAFgOQAGgQAJgLQAJgLANgEQAMgCALAEQAKADAFAGQAGAHADAIIARg0IARAGIgvCNgAgVgbQgLAHgHAUQgGATAFALQAFAOALADQAMAEALgHQAJgGAHgTQAHgUgGgMQgEgNgMgEIgGgBQgIAAgHAEg");
	this.shape_10.setTransform(351.9,317.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FB6109").s().p("AgRA2QgVgIgJgSQgJgTAJgYQAKgdAUgIQARgHASAHQAVAHAJASQAJATgIAWQgHAUgKAKQgKAJgNADIgJABQgIAAgJgDgAgKgkQgMAHgHAUQgHASAGANQAFANANAEQAMAFALgIQAMgHAHgUQAHgRgGgNQgFgNgNgEQgGgCgFAAQgFAAgHAEg");
	this.shape_11.setTransform(339.8,314.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FB6109").s().p("AAZBXIAoh1IhPBoIgRgGIgBiGIgoB4IgSgGIAviNIAcAKIABBuIgBAXIAPgUIBChWIAZAJIgvCMg");
	this.shape_12.setTransform(326.6,307.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FB6109").s().p("AAtBNIgCgxIg6gTIgeAlIgUgHIBkh6IAVAHIAKCggAAXgoIgbAkIAuAPIgBgrIgBggQgHAMgKAMg");
	this.shape_13.setTransform(304.8,302.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FB6109").s().p("AgXBJQgVgGgMgQQgNgPgCgTQgDgSAGgTQAMgjAagOQAagNAcAKQAUAGANAPQAMAPADATQADASgHAWQgIAVgOAOQgPAPgTADIgMABQgMAAgLgEgAgSg2QgTAJgLAgQgJAYAJAUQAJATAVAHQATAHATgKQATgKAJgcQAGgQgCgOQgBgPgJgLQgJgLgOgFQgJgDgIAAQgJAAgLAFg");
	this.shape_14.setTransform(292.9,296.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FB6109").s().p("AAtBNIgCgwIg6gUIgeAlIgUgHIBkh6IAVAHIAKCggAAXgoIgbAkIAuAPIgBgqIgBgiQgHANgKAMg");
	this.shape_15.setTransform(276,292.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FB6109").s().p("AALBPIAWhCQAEgNgDgFQgEgIgKgEQgIgCgIABQgHACgFAGQgFAGgEAKIgTA4IgSgFIAwiNIAPAGIgPAzQAQgKASAGQAMAEAHAIQAHAHAAAJQABAHgFAPIgWBCg");
	this.shape_16.setTransform(260.7,286.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FB6109").s().p("AgeBJQgSgGgJgNQgJgMAGgQIARAIQgCAIAEAFQAFAHALAEQAMAEAIgDQAGgCAGgIQADgFAFgRQgPAKgQgGQgVgHgHgUQgGgRAHgVQAFgPAKgLQAJgLANgDQAKgDAOAEQASAGAHATIAEgNIAQAGIgeBXQgIAYgIAJQgIAIgLADIgHAAQgKAAgLgDgAgHg3QgLAHgGASQgHAVAFAKQAFAMAMAEQAKAEALgGQALgHAHgSQAGgTgFgMQgFgNgMgEIgIgBQgGAAgHAEg");
	this.shape_17.setTransform(249.6,286.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FB6109").s().p("AgfBEIAghmIASAGIghBmgAAIg1IAHgUIARAGIgGAUg");
	this.shape_18.setTransform(242.9,279.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FB6109").s().p("AANBTIAWhDIhIgXIgWBBIgTgGIAviNIATAHIgTA6IBIAYIATg6IATAHIgvCNg");
	this.shape_19.setTransform(233.6,276.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#8EC9D6").s().p("AAvBMIgMgvIg9gIIgVArIgWgCIBLiMIAVACIArCbgAACghIgUAmIAxAHIgLgpIgGggQgFAOgHAOg");
	this.shape_20.setTransform(478.4,396.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#8EC9D6").s().p("AgIBNQgVgDgPgMQgQgMgGgTQgHgTADgRQAEgmAXgSQAWgTAeAEQAUADAQAMQAPAMAHASQAHATgDAVQgDAXgMAQQgLARgSAHQgNAFgOAAIgIAAgAgdgxQgRANgEAhQgDAZAMASQANARAWADQAUACAQgNQARgOADgdQADgQgFgPQgFgOgKgJQgLgJgPgCIgHAAQgPAAgOAKg");
	this.shape_21.setTransform(464.3,394.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#8EC9D6").s().p("AAvBMIgMgvIg8gIIgXAsIgUgDIBJiMIAWACIAqCbgAACghIgUAmIAxAHIgKgpIgIggQgEAOgHAOg");
	this.shape_22.setTransform(448.3,393);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#666666").s().p("AAXBNIAFhGQABgLgFgHQgGgGgLgBQgHgBgHADQgHAFgDAHQgFAEgBANIgEA7IgSgBIAMiUIASACIgFA2QAOgOASABQAMABAJAFQAIAGAEAJQACAJgBANIgFBFg");
	this.shape_23.setTransform(419.3,401.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#666666").s().p("AAFBKQgIgBgFgEQgFgEgCgFQgCgFABgRIAFg8IgNgBIABgOIANABIACgbIASgKIgDAmIASABIgBAOIgSgBIgFA+IAAAKIADAEQACACAEAAIAIgBIABARIgJABIgFAAg");
	this.shape_24.setTransform(411.1,401.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#666666").s().p("AAdA4QgCgGgBgIQgKAIgKADQgIADgLgBQgRgCgKgJQgJgKACgNQAAgIAEgGQAFgHAGgCQAGgDAHgCIARgBQAUgBALgDIABgEQAAgMgEgFQgHgHgOgBQgLgBgGAFQgHAEgEALIgSgEQAEgLAGgHQAGgHALgCQALgEAMABQAOACAJAEQAIADAEAGQADAFACAIIgBARIgCAWQgCAaABAHQAAAHADAGgAgBAFQgLABgFACQgEABgEAEQgDAEAAAFQgBAHAGAFQAFAGALABQAIAAAJgDQAJgFAEgHQAEgGABgMIAAgHQgKADgTABg");
	this.shape_25.setTransform(401.6,402.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#666666").s().p("Ag8BKIAMiUIA2AEQAPABAIACQALADAHAGQAHAFAEAKQAEAKgBALQgCATgNALQgNAMgggDIgkgDIgFA9gAgigBIAkABQAUABAJgFQAIgGABgNQABgKgEgGQgFgHgHgDQgFgCgNgBIglgDg");
	this.shape_26.setTransform(389.5,399);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#666666").s().p("AAFBKQgIgBgFgEQgFgEgCgFQgCgFABgRIAFg8IgNgBIABgOIANABIACgbIASgKIgDAmIASABIgBAOIgSgBIgFA+IAAAKIADAEQACACAEAAIAIgBIABARIgJABIgFAAg");
	this.shape_27.setTransform(373.8,398.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#666666").s().p("AAXBMIAFhFQABgLgFgHQgGgHgLAAQgHgBgHAEQgHADgDAIQgFAEgBANIgEA8IgSgCIAMiUIASABIgFA3QAOgOASABQAMABAJAFQAIAGAEAJQACAJgBANIgFBFg");
	this.shape_28.setTransform(364.5,397.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#666666").s().p("AgJBNQgTgCgMgJQgLgKACgRIASADQAAAJAFAEQAGAGAMABQALABAHgFQAIgEADgJQACgGABgSQgNANgQgBQgWgCgLgRQgMgPACgXQABgPAHgNQAHgMALgHQALgGANABQATABALARIABgNIARABIgHBcQgCAZgGALQgGAKgMAFQgJAEgKAAIgHAAgAgSg1QgJAKgCAUQgCAVAIAIQAIALANABQAKABAKgJQAJgKACgSQACgUgJgLQgIgLgMgBIgCAAQgJAAgJAIg");
	this.shape_29.setTransform(352.8,400.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#666666").s().p("AgOBKIAJhrIAQACIgIBqgAgEg1IACgVIARABIgCAWg");
	this.shape_30.setTransform(345.1,395.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#666666").s().p("AgOBKIAMiUIARABIgMCUg");
	this.shape_31.setTransform(340.4,395.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#666666").s().p("Ag3BKIAMiUIBjAIIgBASIhQgHIgDAuIBEAGIgBAQIhFgGIgFBEg");
	this.shape_32.setTransform(332.1,394.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgoAwQgQgRAAgeQAAgeAQgRQAQgSAYAAQAZAAAQARQAQARAAAeIAAAFIhbAAQABAUAKALQALALANAAQAMAAAIgGQAIgGAFgNIAWACQgFATgOALQgOALgWAAQgZAAgQgRgAgWgkQgKAJgBARIBEAAQgCgQgGgIQgLgMgQAAQgMAAgKAKg");
	this.shape_33.setTransform(191.1,415.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgaBOQgMgIgIgOQgGgPAAgTQgBgSAHgOQAGgPAMgIQANgJAPAAQAJABAKAEQAIAFAFAIIAAg+IAWAAIAACqIgUAAIAAgPQgMASgWAAQgOAAgMgJgAgVgMQgKALAAAXQAAAYAKAMQALAMAMgBQANAAAKgLQAKgLgBgXQAAgYgKgMQgJgMgOAAQgNAAgJAMg");
	this.shape_34.setTransform(177.4,413.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgbA7QgKgEgEgHQgFgGgCgJIgBgUIAAhLIAVAAIAABDIABAWQACAIAGAFQAHAFAJAAQAIAAAIgFQAIgFAFgIQADgJAAgQIAAhAIAVAAIAAB6IgTAAIAAgSQgOAVgXAAQgLAAgKgEg");
	this.shape_35.setTransform(164.4,415.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgCBRQgGgEgDgGQgDgGAAgTIAAhFIgPAAIAAgRIAPAAIAAgfIATgMIAAArIAWAAIAAARIgWAAIAABGQAAAKACACQABADACABQADACAFAAIAJgBIADATIgQABQgMAAgEgDg");
	this.shape_36.setTransform(154.6,413.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgJBVIAAh6IATAAIAAB6gAgJg8IAAgZIATAAIAAAZg");
	this.shape_37.setTransform(148.5,413.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgCBRQgGgEgDgGQgCgGAAgTIAAhFIgQAAIAAgRIAQAAIAAgfIASgMIAAArIAWAAIAAARIgWAAIAABGQABAKABACQABADADABQACACAEAAIAKgBIADATIgQABQgMAAgEgDg");
	this.shape_38.setTransform(142.6,413.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgCBRQgGgEgDgGQgCgGAAgTIAAhFIgQAAIAAgRIAQAAIAAgfIASgMIAAArIAWAAIAAARIgWAAIAABGQABAKABACQABADADABQACACAFAAIAJgBIADATIgQABQgMAAgEgDg");
	this.shape_39.setTransform(136,413.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AA2BVIgUg0IhGAAIgTA0IgYAAIBCiqIAWAAIBHCqgAgLghIgSAwIA4AAIgSguIgKgjQgEAQgGARg");
	this.shape_40.setTransform(124.5,413.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAdBWIAAhPQAAgOgHgIQgGgGgNgBQgHABgJAFQgIAEgDAIQgEAHAAAPIAABEIgVAAIAAirIAVAAIAAA+QAOgRAVAAQAOAAAKAFQALAGAEAKQAEAJAAARIAABPg");
	this.shape_41.setTransform(163.2,384.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AglAwQgQgRAAgfQAAgSAHgPQAGgPAOgIQAOgIAOAAQAUAAANALQANAKAEATIgVADQgDgNgHgGQgIgGgKAAQgOAAgKALQgKAMAAAXQAAAYAJAMQAKALANAAQANAAAIgHQAJgIACgQIAVADQgEAVgOAMQgOANgUAAQgYAAgPgRg");
	this.shape_42.setTransform(150.9,386.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgCBRQgGgEgCgGQgEgGAAgTIAAhFIgPAAIAAgRIAPAAIAAgfIAUgMIAAArIAVAAIAAARIgVAAIAABGQAAAKABACQABADACABQADACAEAAIAKgBIADATIgQABQgLAAgFgDg");
	this.shape_43.setTransform(141.3,384.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgJBWIAAh7IATAAIAAB7gAgJg8IAAgZIATAAIAAAZg");
	this.shape_44.setTransform(135.2,384.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AhABWIAAirIBAAAQAQABAJACQANABAIAHQAJAFAFALQAFALAAAMQAAAXgOAMQgOAPgkABIgqAAIAABGgAgpgCIAqAAQAWAAAJgJQAJgIAAgPQAAgKgEgJQgGgHgJgCQgGgCgPAAIgqAAg");
	this.shape_45.setTransform(124.9,384.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAdA/IAAhJQAAgNgCgHQgDgGgHgEQgFgEgJAAQgLAAgKAJQgKAIAAAYIAABCIgVAAIAAh6IATAAIAAARQANgUAZAAQALAAAJAEQAJAEAFAHQAFAGACAJIABAVIAABKg");
	this.shape_46.setTransform(369.9,450.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgpAwQgQgRAAgfQAAghATgRQAQgOAWAAQAZAAARARQAQARAAAeQAAAWgHAOQgIANgNAIQgOAIgQAAQgZAAgQgRgAgZgiQgKAMAAAWQAAAXAKAMQALAMAOAAQAPAAALgMQAKgMAAgXQAAgWgKgMQgLgMgPAAQgOAAgLAMg");
	this.shape_47.setTransform(356.5,450.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("Ag2A+IAAgRIBOhZIgYAAIgxAAIAAgRIBkAAIAAAOIhCBNIgNAPIAbgBIA4AAIAAASg");
	this.shape_48.setTransform(343.9,450.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgJBWIAAh7IATAAIAAB7gAgJg8IAAgYIATAAIAAAYg");
	this.shape_49.setTransform(335.2,448.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AggA/IAAh6IATAAIAAATQAHgOAGgEQAEgEAIAAQAKAAALAHIgHATQgIgEgHAAQgHAAgEAEQgFAEgDAHQgDAMAAANIAAA/g");
	this.shape_50.setTransform(329.5,450.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgpAwQgQgRAAgfQAAghATgRQAQgOAWAAQAZAAARARQAQARAAAeQAAAWgHAOQgIANgNAIQgOAIgQAAQgZAAgQgRgAgZgiQgKAMAAAWQAAAXAKAMQALAMAOAAQAPAAALgMQAKgMAAgXQAAgWgKgMQgLgMgPAAQgOAAgLAMg");
	this.shape_51.setTransform(317.8,450.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAsBWIAAhRIhXAAIAABRIgXAAIAAiqIAXAAIAABGIBXAAIAAhGIAXAAIAACqg");
	this.shape_52.setTransform(302.5,448.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(373));

	// black
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#151515").ss(2,0,0,3).p("ABcA3IDcAAABcA3QAAAlgbAaQgaAbglAAQgkAAgagbQgagaAAglQAAgmAagYQAagbAkAAQAAAAABAAQAlABAZAaQAbAYAAAmgAk3A3IDhAAAADgiIAAh4");
	this.shape_53.setTransform(239.2,400);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(4,0,0,3).p("ALug2IpYAAIAACBAAAhKIAAA3Artg2IJYAAIAACB");
	this.shape_54.setTransform(239,294.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(2,0,0,3).p("EglGAAAMBKNAAA");
	this.shape_55.setTransform(414.5,430);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53}]}).wait(373));

	// grey
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#666666").s().p("Am2gLIDEhNIgFA8IKuAqIgFBBIqugsIgEA2g");
	this.shape_56.setTransform(312.1,406.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_56).wait(373));

	// blue
	this.instance_3 = new lib.dashedcopy("synched",0);
	this.instance_3.setTransform(651.1,430,1,1,4,0,0,487.6,-0.1);

	this.instance_4 = new lib.dashed("synched",0);
	this.instance_4.setTransform(419.8,352.6,1,1,18.5,0,0,243.8,0);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#8EC9D6").ss(2,0,0,3).p("ATIAfIgdBFQggBYgRBaQgRBbgIBqQgEA1gBAjAvlrCIg8CuQhDDagmDeQglDcgPE5QgICdAABw");
	this.shape_57.setTransform(324.3,358.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57},{t:this.instance_4},{t:this.instance_3}]}).wait(373));

	// orange
	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FB6109").s().p("EAh5ALdIg5gTQgEgBgCgEQgBgEABgEQABgDAEgCQAEgCAEABIA5ATQAEACACADQABAEgBAEQgBAEgEACIgEABIgEgBgEAgHAK3Ig5gTQgEgBgBgEQgCgEABgEQABgDAEgCQAEgCAEABIA5ATQAEACACADQABAEgBAEQgBAEgEACIgEABIgEgBgAeVKRIg5gTQgEgBgBgEQgCgEABgDQABgEAEgCQAEgCAEABIA5ATQAEACABADQACAEgBAEQgBAEgEACIgEABIgEgBgAcjJrIg5gTQgEgBgCgEQgBgEABgDQABgEAEgCQAEgCAEABIA5ATQAEACACADQABAEgBAEQgBAEgEACIgEABIgEgBgAaxJFIg5gTQgEgBgBgEQgCgEABgDQABgEAEgCQAEgCAEABIA5ATQAEACACADQABAEgBAEQgBAEgEACIgEABIgEgBgAY/IfIg5gTQgEgBgBgEQgCgEABgEQABgDAEgCQAEgCAEABIA5ATQAEACABADQACAEgBAEQgBAEgEACIgEABIgEgBgAXNH5Ig5gTQgEgBgCgEQgBgEABgEQABgDAEgCQAEgCAEABIA5ATQAEACACADQABAEgBAEQgBAEgEACIgEABIgEgBgAVbHTIg5gTQgEgBgBgEQgCgEABgDQABgEAEgCQAEgCAEABIA5ATQAEACACADQABAEgBAEQgBAEgEACIgEABIgEgBgATpGtIg5gTQgEgBgBgEQgCgEABgDQABgEAEgCQAEgCAEABIA5ATQAEACABADQACAEgBAEQgBAEgEACIgEABIgEgBgAR3GHIg5gTQgEgBgCgEQgBgEABgEQABgDAEgCQAEgCAEABIA5ATQAEACACADQABAEgBAEQgBAEgEACIgEABIgEgBgAQFFhIg5gTQgEgBgBgEQgCgEABgEQABgDAEgCQAEgCAEABIA5ATQAEACACADQABAEgBAEQgBAEgEACIgEABIgEgBgAOTE7Ig5gTQgEgBgBgEQgCgEABgDQABgEAEgCQAEgCAEABIA5ATQAEACABADQACAEgBAEQgBAEgEACIgEABIgEgBgAMhEVIg5gTQgEgBgCgEQgBgEABgDQABgEAEgCQAEgCAEABIA5ATQAEACACADQABAEgBAEQgBAEgEACIgEABIgEgBgAKvDvIg5gTQgEgBgBgEQgCgEABgDQABgEAEgCQAEgCAEABIA5ATQAEACACADQABAEgBAEQgBAEgEACIgEABIgEgBgAI9DJIg5gTQgEgBgBgEQgCgEABgEQABgDAEgCQAEgCAEABIA5ATQAEACABADQACAEgBAEQgBAEgEACIgEABIgEgBgAHLCjIg5gTQgEgBgCgEQgBgEABgEQABgDAEgCQAEgCAEABIA5ATQAEACACADQABAEgBAEQgBAEgEACIgEABIgEgBgAFZB9Ig5gTQgEgBgBgEQgCgEABgDQABgEAEgCQAEgCAEABIA5ATQAEACACADQABAEgBAEQgBAEgEACIgEABIgEgBgADnBXIg5gTQgEgBgBgEQgCgEABgDQABgEAEgCQAEgCAEABIA5ATQAEACABADQACAEgBAEQgBAEgEACIgEABIgEgBgAB1AxIg5gTQgEgBgCgEQgBgEABgEQABgDAEgCQAEgCAEABIA5ATQAEACACADQABAEgBAEQgBAEgEACIgEABIgEgBgAADALIg3gRQgEgBgBgEQgCgEABgEQABgDAEgCQAEgCAEABIA3ATQAEACACADQABACgBAEQgBAEgEACIgEABIgEgBgAhtgZIg5gTQgEgBgBgEQgCgEABgDQABgEAEgCQAEgCAEABIA5ATQAEACABADQACAEgBAEQgBAEgEACIgEABIgEgBgAjfg/Ig5gTQgEgBgCgEQgBgEABgDQABgEAEgCQAEgCAEABIA5ATQAEACACADQABAEgBAEQgBAEgEACIgEABIgEgBgAlRhlIg5gTQgEgBgBgEQgCgEABgDQABgEAEgCQAEgCAEABIA5ATQAEACACADQABAEgBAEQgBAEgEACIgEABIgEgBgAnDiLIg5gTQgEgBgBgEQgCgEABgEQABgDAEgCQAEgCAEABIA5ATQAEACABADQACAEgBAEQgBAEgEACIgEABIgEgBgAo1ixIg5gTQgEgBgCgEQgBgEABgEQABgDAEgCQAEgCAEABIA5ATQAEACACADQABAEgBAEQgBAEgEACIgEABIgEgBgAqnjXIg5gTQgEgBgBgEQgCgEABgDQABgEAEgCQAEgCAEABIA5ATQAEACACADQABAEgBAEQgBAEgEACIgEABIgEgBgAsZj9Ig5gTQgEgBgBgEQgCgEABgDQABgEAEgCQAEgCAEABIA5ATQAEACABADQACAEgBAEQgBAEgEACIgEABIgEgBgAuLkjIg5gTQgEgBgCgEQgBgEABgEQABgDAEgCQAEgCAEABIA5ATQAEACACADQABAEgBAEQgBAEgEACIgEABIgEgBgAv9lJIg5gTQgEgBgBgEQgCgEABgEQABgDAEgCQAEgCAEABIA5ATQAEACACADQABAEgBAEQgBAEgEACIgEABIgEgBgAxvlvIg5gTQgEgBgBgEQgCgEABgDQABgEAEgCQAEgCAEABIA5ATQAEACABADQACAEgBAEQgBAEgEACIgEABIgEgBgAzhmVIg5gTQgEgBgCgEQgBgEABgDQABgEAEgCQAEgCAEABIA5ATQAEACACADQABAEgBAEQgBAEgEACIgEABIgEgBgA1Tm7Ig5gTQgEgBgBgEQgCgEABgDQABgEAEgCQAEgCAEABIA5ATQAEACACADQABAEgBAEQgBAEgEACIgEABIgEgBgA3FnhIg5gTQgEgBgBgEQgCgEABgEQABgDAEgCQAEgCAEABIA5ATQAEACABADQACAEgBAEQgBAEgEACIgEABIgEgBgA43oHIg5gTQgEgBgCgEQgBgEABgEQABgDAEgCQAEgCAEABIA5ATQAEACACADQABAEgBAEQgBAEgEACIgEABIgEgBgA6potIg5gTQgEgBgBgEQgCgEABgDQABgEAEgCQAEgCAEABIA5ATQAEACACADQABAEgBAEQgBAEgEACIgEABIgEgBgA8bpTIg5gTQgEgBgBgEQgCgEABgDQABgEAEgCQAEgCAEABIA5ATQAEACABADQACAEgBAEQgBAEgEACIgEABIgEgBgA+Np5Ig5gTQgEgBgCgEQgBgEABgEQABgDAEgCQAEgCAEABIA5ATQAEACACADQABAEgBAEQgBAEgEACIgEABIgEgBgA//qfIg5gTQgEgBgBgEQgCgEABgEQABgDAEgCQAEgCAEABIA5ATQAEACACADQABAEgBAEQgBAEgEACIgEABIgEgBgEghxgLEIgOgFQgEgCgBgEQgCgDABgEQABgEAEgCQAEgCAEACIAOAFQAEABABAEQACAEgBAEQgBADgEACIgFABIgDAAg");
	this.shape_58.setTransform(426.2,357);

	this.timeline.addTween(cjs.Tween.get(this.shape_58).wait(373));

	// plane
	this.instance_5 = new lib.B737MAX8LeftSide("synched",0);
	this.instance_5.setTransform(693.7,392.1,0.5,0.5,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(373));

	// t1
	this.instance_6 = new lib.point_1("synched",0);
	this.instance_6.setTransform(194.7,142.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(373));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(500,275,1000,550);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;