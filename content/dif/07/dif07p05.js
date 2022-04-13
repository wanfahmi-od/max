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
		{src:"images/fu01p04_cdu.png", id:"fu01p04_cdu"},
		{src:"images/fu01p06_cdu.png", id:"fu01p06_cdu"},
		{src:"images/sts01p35_clock.png", id:"sts01p35_clock"},
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



(lib.fu01p04_cdu = function() {
	this.initialize(img.fu01p04_cdu);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,613,912);


(lib.fu01p06_cdu = function() {
	this.initialize(img.fu01p06_cdu);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,613,912);


(lib.sts01p35_clock = function() {
	this.initialize(img.sts01p35_clock);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,105);


(lib.texture = function() {
	this.initialize(img.texture);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.yellowhighlightboxa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,0,3).p("ArxiOIAAgxINqAAIAAG1IJ5AAIAAAxICYhOIiYhKIAAA1IpHAAIAAm1IucAAIAAg1IiYBKg");
	this.shape.setTransform(-20.9,-61.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("ALyD2Ip5AAIAAm1ItqAAIAAAxIiYhOICYhKIAAA1IOcAAIAAG1IJHAAIAAg1ICXBKIiXBOg");
	this.shape_1.setTransform(-20.9,-61.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.6,-91.9,183.4,61.1);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape.setTransform(193.4,35.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgLAAQgKAAgHAHg");
	this.shape_1.setTransform(184,35.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgNIAMAAIAAgXIANgJIAAAgIAQAAIAAANIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_2.setTransform(176.6,34.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_3.setTransform(168.9,35.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_4.setTransform(159,35.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_5.setTransform(152,34);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_6.setTransform(142.5,35.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_7.setTransform(125.4,35.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_8.setTransform(115.9,35.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_9.setTransform(106,35.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_10.setTransform(95.9,35.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_11.setTransform(86,35.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgGBAIAAhcIAOAAIAABcgAgGgtIAAgSIAOAAIAAASg");
	this.shape_12.setTransform(79,34);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgNIAMAAIAAgXIANgJIAAAgIAQAAIAAANIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_13.setTransform(74.6,34.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_14.setTransform(67,35.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_15.setTransform(57,35.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_16.setTransform(47.8,35.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgdA3QgLgKgBgQIAQgCQACAMAHAGQAHAGAJAAQAKAAAHgJQAIgIAAgOQAAgOgHgGQgIgHgKgBQgIAAgGAEQgGAEgEADIgOgCIAMhAIA+AAIAAAPIgxAAIgHAjQALgJALABQARgBAMAMQALAKAAATQAAARgKANQgMAPgUAAQgRAAgMgJg");
	this.shape_17.setTransform(33,34.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAGAAQAIAAAIAFIgGAPQgFgEgGAAQgGAAgCADQgDADgDAGQgCAIAAAKIAAAvg");
	this.shape_18.setTransform(20.7,35.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_19.setTransform(12,35.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgJQAAgKACgEQACgHAGgDQAEgEAKAAIAPABIgDAPIgJgCQgHABgDADQgDACAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_20.setTransform(4.9,33.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgVAMgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAIAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_21.setTransform(403.5,13.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQAMAMgBAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_22.setTransform(393.5,13.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgFgEgGAAQgGAAgCADQgEADgCAGQgCAIAAAKIAAAvg");
	this.shape_23.setTransform(386.2,13.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgbA7QgKgIABgPIAPACQABAHAEAEQAGAEAKAAQAJAAAHgEQAFgFADgIQABgEAAgQQgLAMgOAAQgSAAgLgOQgLgOABgRQgBgNAFgMQAFgLAJgGQAKgGALAAQAPAAALANIAAgLIAPAAIAABPQAAAVgFAKQgFAJgJAFQgKAFgMAAQgQAAgLgHgAgQgrQgIAIAAARQAAASAIAHQAHAIAJAAQALAAAHgIQAIgHAAgSQAAgRgIgIQgIgJgKAAQgJAAgHAJg");
	this.shape_24.setTransform(377.2,15.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AghApQgIgIgBgLQABgHACgGQAEgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgFAEQgGAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAKgDAJAAQAMAAAIADQAHACADAFQAFAEABAGIABAPIAAATQAAAWAAAGQABAGAEAFIgRAAQgCgFgBgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgDAFQgJACgEACQgEABgDAEQgBADAAAEQAAAHAEAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQADgFgBgLIAAgFQgIADgQACg");
	this.shape_25.setTransform(367.5,13.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_26.setTransform(357.9,13.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgGBAIAAhcIANAAIAABcgAgGgsIAAgTIANAAIAAATg");
	this.shape_27.setTransform(351.5,11.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgTA7QgKgGgFgLQgFgLAAgOQAAgOAFgKQAFgMAJgFQAJgHALAAQAHABAGADQAHADAFAHIAAgvIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgQgIQgHAIAAARQAAARAIAJQAHAJAJAAQAKAAAHgIQAIgJAAgRQAAgSgIgIQgHgJgLAAQgJAAgHAJg");
	this.shape_28.setTransform(344.2,12);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_29.setTransform(332.5,11.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_30.setTransform(325.5,13.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_31.setTransform(315.4,13.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgKQAAgIACgFQACgHAGgDQADgEALAAIAPABIgDAOIgJAAQgHAAgDACQgDADAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_32.setTransform(308.4,11.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAjBAIgRgbIgMgRIgHgJIgIgDIgJgBIgUAAIAAA5IgRAAIAAh/IA3AAQARAAAJAEQAJADAGAJQAFAJAAAKQAAAOgJAJQgJAIgSACQAGAEAEADQAHAHAHAKIAWAjgAgmgGIAlAAQAJAAAHgCQAGgDAEgFQADgFAAgHQAAgJgGgFQgHgHgOAAIgnAAg");
	this.shape_33.setTransform(294.6,11.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgvBAIAAh/IBcAAIAAAPIhKAAIAAAoIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_34.setTransform(281.7,11.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgxBAIAAgQIA/hQIAOgQIhGAAIAAgPIBbAAIAAAPIhHBXIgIAKIBQAAIAAAPg");
	this.shape_35.setTransform(270,11.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_36.setTransform(262.1,11.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgnBAIAAh/IARAAIAABwIA+AAIAAAPg");
	this.shape_37.setTransform(254.8,11.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAoBAIgPgnIg0AAIgNAnIgTAAIAxh/IARAAIA1B/gAgHgYIgPAjIAqAAIgOgiIgHgbQgCANgEANg");
	this.shape_38.setTransform(243.5,11.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgHBAIAAhwIgrAAIAAgPIBlAAIAAAPIgrAAIAABwg");
	this.shape_39.setTransform(233.4,11.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgfA5QgOgIgIgQQgHgPAAgRQAAgeARgSQARgSAaAAQARAAAPAIQAOAJAIAPQAHAPAAASQAAAUgIAPQgIAQgOAHQgPAIgQAAQgRAAgOgJgAgdgmQgNANAAAbQAAAXAMANQANANARAAQATAAAMgNQANgNAAgZQAAgOgGgMQgFgLgKgHQgLgGgMAAQgQAAgNAMg");
	this.shape_40.setTransform(220.9,11.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgHBAIAAhwIgrAAIAAgPIBlAAIAAAPIgrAAIAABwg");
	this.shape_41.setTransform(208.8,11.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgLAAgOQAAgOAFgKQAFgMAJgFQAJgHALAAQAHABAHADQAGADAFAHIAAgvIAPAAIAAB/IgPAAIAAgMQgJAOgQAAQgKAAgJgGgAgQgIQgGAIAAARQgBARAIAJQAHAJAJAAQAKAAAHgIQAIgJgBgRQABgSgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_42.setTransform(193.3,12);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_43.setTransform(183.6,13.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHADgGQADgGAFgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgGAEQgFAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQALAAAIADQAHACAEAFQADAEABAGIACAPIAAATQAAAWABAGQABAGACAFIgQAAQgDgFAAgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgCADgBAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgPACg");
	this.shape_44.setTransform(173.6,13.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("Ag0BAIAAh/IAtAAQANAAAHACQAMACAHAHQALAJAFANQAFAOAAAQQAAANgEAMQgDALgGAIQgFAHgGAFQgHADgJADQgJACgJAAgAgjAxIAcAAQAKAAAIgCQAHgDAEgFQAGgFAEgLQADgKAAgNQAAgUgHgLQgGgLgKgDQgHgCgNgBIgbAAg");
	this.shape_45.setTransform(157.3,11.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgvBAIAAh/IBcAAIAAAPIhKAAIAAAoIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_46.setTransform(144.8,11.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgHBAIAAhwIgrAAIAAgPIBlAAIAAAPIgrAAIAABwg");
	this.shape_47.setTransform(133.1,11.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAoBAIgOgnIg0AAIgPAnIgSAAIAxh/IARAAIA1B/gAgHgYIgPAjIAqAAIgOgiIgHgbQgCANgEANg");
	this.shape_48.setTransform(123,11.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgnBAIAAh/IARAAIAABwIA+AAIAAAPg");
	this.shape_49.setTransform(112.3,11.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgcA7QgLgHgFgLQgFgMAAgUIAAhJIARAAIAABJQAAAQADAJQADAHAIAFQAHAEALAAQARAAAIgJQAIgIAAgYIAAhJIARAAIAABJQAAATgEALQgFAMgLAHQgLAHgTAAQgQAAgMgGg");
	this.shape_50.setTransform(100.5,12);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgdA6QgNgJgGgQQgIgQABgRQAAgUAHgOQAIgQAOgHQAOgIAQAAQASAAAOAKQANAKAFARIgQAFQgFgOgJgHQgIgGgNAAQgNgBgKAIQgKAHgEAMQgEAMAAAMQAAAPAFANQAEALAKAHQALAFAKAAQAOAAAKgHQAKgJAEgQIARAEQgGAVgOALQgOALgUAAQgTAAgNgIg");
	this.shape_51.setTransform(87.6,11.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgnBAIAAh/IARAAIAABwIA+AAIAAAPg");
	this.shape_52.setTransform(76.3,11.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AApBAIgQgnIg0AAIgNAnIgTAAIAyh/IAQAAIA1B/gAgIgYIgNAjIApAAIgOgiIgHgbQgCANgFANg");
	this.shape_53.setTransform(65,11.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgdA6QgNgJgGgQQgIgQAAgRQABgUAHgOQAIgQAOgHQAOgIAQAAQASAAAOAKQANAKAFARIgQAFQgFgOgJgHQgIgGgNAAQgNgBgKAIQgKAHgEAMQgEAMAAAMQAAAPAFANQAEALAKAHQALAFAKAAQAOAAAKgHQAKgJAEgQIARAEQgGAVgOALQgOALgUAAQgTAAgNgIg");
	this.shape_54.setTransform(52.6,11.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgdA6QgNgJgGgQQgIgQAAgRQABgUAHgOQAIgQAOgHQAOgIAQAAQASAAAOAKQANAKAFARIgQAFQgFgOgJgHQgIgGgNAAQgNgBgKAIQgKAHgEAMQgEAMAAAMQAAAPAFANQAEALAKAHQALAFAKAAQAOAAAKgHQAKgJAEgQIARAEQgGAVgOALQgOALgUAAQgTAAgNgIg");
	this.shape_55.setTransform(34.6,11.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAtBAIAAhqIgmBqIgNAAIglhrIAABrIgRAAIAAh/IAaAAIAeBaIAEATIAHgVIAfhYIAXAAIAAB/g");
	this.shape_56.setTransform(20.5,11.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgqBAIAAh/IBVAAIAAAPIhEAAIAAApIA7AAIAAAMIg7AAIAAA7g");
	this.shape_57.setTransform(7.8,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,410.7,46.2);


(lib.prot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.texture();
	this.instance.setTransform(0,0,100,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1000,550);


(lib.hl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(5,0,0,3).p("AnVjRIOrAAIAAGjIurAAg");
	this.shape.setTransform(116,21);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(66.5,-2.5,99,47);


(lib.ENGPRI_fuelgaugectr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("ACsChIAqAYADGBSIAwAFAC9AAIAvgNAirChIgrAZAjFBSIgwAGAi9AAIgugNAiThGIgkghAhQh3IgUgtAAAiIIAAgxABRh3IAUgtACUhGIAkgg");
	this.shape.setTransform(24.8,18.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.8,-1,52.4,39.7);


(lib.ENGPRI_fuelgauge2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AC9AAIAvgNADGBSIAwAFACsChIAqAYABRh3IAUgtAAAiIIAAgxAhQh3IgUgtAiThGIgkghAi9AAIgugNAjFBSIgwAGAirChIgrAZACUhGIAkgg");
	this.shape.setTransform(24.8,18.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// white
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjnDBIgCgDQgfg5AAhGQAAhrBOhOIAAgBQBOhNBsAAQBtAABOBOQBOBOAABrQAAAPgDAeIgjgGQADgTAAgUQAAhdhEhEQhDhDhfAAQheAAhEBDIAAAAQhDBEAABdQAAA8AbAxIABADIAAAAIAGAJIgfARg");
	this.shape_1.setTransform(24.8,18.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-1.7,53.1,40.4);


(lib.ENGPRI_fuelgauge1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("ACsChIAqAYADGBSIAwAFAC9AAIAvgNAirChIgrAZAjFBSIgwAGAi9AAIgugNAiThGIgkghAhQh3IgUgtAAAiIIAAgxABRh3IAUgtACUhGIAkgg");
	this.shape.setTransform(24.8,18.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// white
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjnDBIgCgDQgfg5AAhGQAAhrBOhOIAAgBQBOhNBsAAQBtAABOBOQBOBOAABrQAAAVgBANIgkgFQACgOAAgPQAAhdhEhEQhDhDhfAAQheAAhEBDIAAAAQhDBEAABdQAAA8AbAxIABADIAAAAIAGAJIgfARg");
	this.shape_1.setTransform(24.8,18.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-1.7,53.1,40.4);


(lib.CDULeftPanelcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PNG
	this.instance = new lib.fu01p06_cdu();
	this.instance.setTransform(-152.7,-242.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152.7,-242.6,306.5,456);


(lib.CDULeftPanel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PNG
	this.instance = new lib.fu01p04_cdu();
	this.instance.setTransform(-152.7,-242.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152.7,-242.6,306.5,456);


(lib._5min = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sts01p35_clock();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,186,105);


(lib.pulloutcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AguBTIAAilIBRAAIAAAUIg+AAIAAAyIA2AAIAAAQIg2AAIAAA7IBJAAIAAAUg");
	this.shape.setTransform(255.4,167.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AgtBTIAAilIBQAAIAAAUIg+AAIAAAyIA3AAIAAAQIg3AAIAAA7IBKAAIAAAUg");
	this.shape_1.setTransform(242.4,167.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AAaBTQgIgZgHgNQgJgSgNgPIgRAAIAABHIgTAAIAAilIArAAQARAAALANQALAMAAATQAAAhgcANQANAIAMAbIAQAogAgcgEIARAAQAMAAAIgJQAHgIAAgPQAAgcgaAAIgSAAg");
	this.shape_2.setTransform(229.4,167.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AgmA8QgNgWAAglQAAgiALgXQAPgeAggBQASABANAJQAOALAAAUIgRAAQgBgMgIgFQgIgHgKAAQgVABgLAZQgHASAAAaQAAAaAHASQALAaAVAAQAKAAARgHIAAguIggAAIAAgRIAxAAIAABKQgWANgUABQgggBgQgbg");
	this.shape_3.setTransform(216.4,167.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AAqBTIgMguIg7AAIgPAuIgSAAIA4ilIARAAIA0ClgAgXAUIAvAAIgXhJg");
	this.shape_4.setTransform(203.4,167.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9900").s().p("AguAsIATAAQAAAPAIAFQAHAGAMAAQAMAAAIgIQAIgJAAgMQAAgRgXgMIgUgMQgNgFgGgJQgIgMAAgQQAAgVANgMQAMgMAUAAQAQABAKAIQAKAKAAAQIgTAAQAAgIgHgFQgHgGgGAAQgJAAgHAJQgHAJAAAJQAAASAXAMIAUAMQANAGAGAIQAIALAAAQQAAAXgMAMQgNANgWABQguAAAAgsg");
	this.shape_5.setTransform(190.4,167.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9900").s().p("AgdBTIAAgSIAVAAIAAiBIgVAAIAAgSIA7AAIAAASIgVAAIAACBIAVAAIAAASg");
	this.shape_6.setTransform(177.5,167.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9900").s().p("Ag1BTIAAilIAnAAQAlAAAQAXQAPAUAAAnQAABThBAAgAgiA/IAVAAQAaAAAMgRQAJgPAAgeQAAgfgJgOQgLgUgbAAIgVAAg");
	this.shape_7.setTransform(164.5,167.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF9900").s().p("AguBTIAAilIATAAIAACRIBKAAIAAAUg");
	this.shape_8.setTransform(138.5,167.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF9900").s().p("AgtBTIAAilIBQAAIAAAUIg+AAIAAAyIA2AAIAAAQIg2AAIAAA7IBJAAIAAAUg");
	this.shape_9.setTransform(125.6,167.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF9900").s().p("AgpBFQgLgOAAgfIAAhsIATAAIAABpQAAAWAGALQAJAOATAAQAWAAAHgSQAFgNAAgYIAAhhIASAAIAABnQAABCg0AAQgdAAgNgQg");
	this.shape_10.setTransform(112.6,167.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF9900").s().p("AgoBTIAAilIBRAAIAAAUIg+AAIAAA4IA2AAIAAAPIg2AAIAABKg");
	this.shape_11.setTransform(99.6,167.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgwBAQgLgbAAglQAAgkALgbQAQgmAgAAQAhAAAPAmQAMAbAAAkQAAAkgLAYQgRAqggAAQggAAgQgmgAgbgvQgHAUABAbQAAAcAFAUQAJAdATAAQATAAAKgfQAGgTgBgbQABgbgHgXQgJgagTAAQgSAAgJAdg");
	this.shape_12.setTransform(77.5,165.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AglBdQgNgLAAgWIAYAAQABAKAFADQAFAEAHAAQAUAAALgbQAIgWgBgaIAAgCQgOAXgXAAQgXAAgOgVQgKgPgBgYQAAgZANgSQAPgVAYAAQAhAAAPAoQALAXAAAmQAAAmgOAcQgPAkgiAAQgTAAgLgJgAgWg/QgHAMAAAPQAAAPAHAKQAHALANAAQAMAAAHgLQAIgMgBgPQAAgQgHgKQgIgMgMAAQgNAAgGANg");
	this.shape_13.setTransform(62.4,165.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag2AJQgBhuA+AAQAQAAANALQAPAMAAATIgZAAQAAgRgSAAQgSAAgLAaQgJAVABAbIAAADQAOgXAWAAQAXAAANAUQAMAQAAAYQAAAZgMASQgPAVgYAAQg7AAABhdgAgTARQgFAMgBAUQAAALAKAJQAJAIAKAAQALAAAIgNQAHgMgBgPQAAgOgGgNQgIgKgNAAQgNAAgIARg");
	this.shape_14.setTransform(47.4,165.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgsBxQgSgNgBgaIAaAAQABAaAhAAQATAAALgRQAJgPAAgVQAAgjgbgLQgQgGgqAAIAAh3IBoAAIAAAcIhQAAIAAA/QApABAWARQAaAQAAArQAAAhgRAXQgSAZgfABQgZAAgRgNg");
	this.shape_15.setTransform(31.3,163.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AANB6IAAgYIAAAYIgYAAIAAgYIAYAAIgYAAIAAi7IgpAUIAAgdIAqgXIAXAAIAADbIAoAAIAAAYgAg1B6IAAgYIAqAAIAAAYg");
	this.shape_16.setTransform(12.3,163.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00CCFF").s().p("AgqBKIAAiTIAUAAIAAB/IBBAAIAAAUg");
	this.shape_17.setTransform(-9.7,165.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00CCFF").s().p("AAjBKIgKgoIgxAAIgNAoIgTAAIAyiTIARAAIAuCTgAgSAPIAlAAIgTg7g");
	this.shape_18.setTransform(-21.4,165.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00CCFF").s().p("AgIBKIAAiAIgqAAIAAgTIBlAAIAAATIgpAAIAACAg");
	this.shape_19.setTransform(-33,165.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00CCFF").s().p("AgpA0QgMgVAAgfQAAgdALgVQAPgcAbAAQAdAAAOAbQALAWAAAdQAAAfgLAUQgPAcgcgBQgbAAgOgagAgZglQgHAQAAAVQAAAXAHAQQAIAVARAAQASAAAJgXQAGgOAAgXQAAgVgGgPQgJgWgSAAQgQAAgJAVg");
	this.shape_20.setTransform(-44.7,165.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00CCFF").s().p("AgIBKIAAiAIgqAAIAAgTIBlAAIAAATIgpAAIAACAg");
	this.shape_21.setTransform(-56.3,165.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgwBAQgLgbAAglQAAgkALgbQAQgmAgAAQAhAAAPAmQAMAbAAAkQAAAkgLAYQgQAqghAAQggAAgQgmgAgbgvQgGAUAAAbQgBAcAHAUQAIAdATAAQATAAAKgfQAGgTAAgbQAAgbgHgXQgJgagTAAQgSAAgJAdg");
	this.shape_22.setTransform(105.6,9.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgmBaQgNgKAAgYIAYAAQABAVAZAAQANAAAHgJQAHgLAAgQQAAgXgQgJQgLgHgcAAIAAgWQAaAAANgGQAKgIAAgTQAAgKgHgHQgHgGgJAAQgKAAgFADQgJAGACAMIgZAAIAAgEQAAgUAPgMQANgKAUAAQAVAAAMALQAPAMAAAWQAAAhgfANQAlAKAAAnQAAAbgOARQgQATgZAAQgVAAgOgMg");
	this.shape_23.setTransform(90.5,9.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AANBgIAAgXIAAAXIgYAAIAAgXIAYAAIgYAAIAAiLIgfAPIAAgaIAigSIAVAAIAACoIAeAAIAAAXgAgqBgIAAgXIAfAAIAAAXgAgLBJg");
	this.shape_24.setTransform(75.6,9.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00CCFF").s().p("AAWBKQgIgWgGgLQgIgQgKgNIgNAAIAAA+IgUAAIAAiTIAoAAQAPAAAKALQAKAMAAARQAAAdgYALQAKAGAMAZQACADAMAhgAgXgFIANAAQAKAAAGgFQAGgJAAgNQAAgWgUAAIgPAAg");
	this.shape_25.setTransform(93.9,-21.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00CCFF").s().p("AgIBKIAAiAIgqAAIAAgTIBlAAIAAATIgpAAIAACAg");
	this.shape_26.setTransform(82.3,-21.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00CCFF").s().p("AgkA0QgLgUAAggQAAgfALgUQAOgbAcAAQASAAALAKQAMAKABAVIgUAAQAAgMgGgFQgGgEgJAAQgRgBgJAUQgGAQAAAXQAAAYAGAPQAJAVARAAQAVAAAAgVIAUAAIAAADQAAARgNAKQgMAKgRgBQgcABgOgbg");
	this.shape_27.setTransform(70.6,-21.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgwBAQgLgbAAglQAAgkALgbQAQgmAgAAQAhAAAQAmQALAbAAAkQAAAkgLAYQgQAqghAAQggAAgQgmgAgbgvQgHAUABAbQAAAcAFAUQAKAdASAAQATAAAKgfQAGgTgBgbQABgbgHgXQgJgagTAAQgSAAgJAdg");
	this.shape_28.setTransform(177.3,111.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AglBdQgOgLAAgWIAZAAQAAAKAGADQAFAEAHAAQAUAAALgbQAIgWgBgaIAAgCQgOAXgXAAQgXAAgOgVQgLgPAAgYQAAgZANgSQAPgVAYAAQAhAAAPAoQALAXgBAmQAAAmgMAcQgQAkgiAAQgTAAgLgJgAgWg/QgHAMAAAPQAAAPAHAKQAHALAOAAQALAAAHgLQAIgMgBgPQAAgQgHgKQgIgMgMAAQgNAAgGANg");
	this.shape_29.setTransform(162.2,111.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgoBVQgPgRAAgaQAAgkAdgOQgXgOAAgcQAAgXAOgOQANgOAWAAQAVAAAPAPQAOAOAAAWQAAAPgGAKQgGAJgMAHQAeAPAAAkQAAAagOAQQgQASgaAAQgZAAgPgRgAgVAMQgJAOAAAPQAAAPAIAKQAKALAMAAQANAAAJgIQAJgNgBgPQABgPgJgLQgJgNgNAAQgMAAgJAKgAgRhEQgHAIAAAMQAAALAHAIQAIAJAJAAQAKAAAHgJQAIgIAAgLQAAgMgIgIQgHgIgKAAQgJAAgIAIg");
	this.shape_30.setTransform(147.2,111.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgqB6IAAgMQAAgxAdg6QAMgWArhKIhvAAIAAgcICKAAIAAAbIgNAYQhFByAABOg");
	this.shape_31.setTransform(131.2,109.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#00CCFF").s().p("AgoBMIAAgRQAAgSAMgQQAEgKAPgOIASgRQAJgMAAgJQAAgJgGgFQgGgGgGAAQgRAAgBAQIgTAAIAAgDQAAgOAPgKQAIgHAOgBQAQAAALAKQAMAKAAATQAAASgQAQIgcAZQgPARAAARIA9AAIAAAUg");
	this.shape_32.setTransform(154,80.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgwBAQgLgbAAglQAAgkALgbQAQgmAgAAQAhAAAQAmQALAbAAAkQAAAkgLAYQgQAqghAAQggAAgQgmgAgbgvQgHAUAAAbQABAcAFAUQAKAdASAAQATAAAKgfQAFgTAAgbQAAgbgGgXQgJgagTAAQgSAAgJAdg");
	this.shape_33.setTransform(29.5,111.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgoBVQgPgRAAgaQAAgkAdgOQgXgOAAgcQAAgXAOgOQANgOAWAAQAVAAAPAPQAOAOAAAWQAAAPgGAKQgGAJgLAHQAdAPAAAkQAAAagOAQQgQASgaAAQgZAAgPgRgAgVAMQgJAOAAAPQAAAPAIAKQAKALAMAAQANAAAJgIQAJgNgBgPQABgPgJgLQgJgNgNAAQgMAAgJAKgAgRhEQgHAIAAAMQAAALAHAIQAIAJAJAAQAKAAAHgJQAIgIAAgLQAAgMgIgIQgHgIgKAAQgJAAgIAIg");
	this.shape_34.setTransform(14.4,111.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("Ag2AJQAAhuA+AAQAQAAANALQAOAMAAATIgYAAQgBgRgSAAQgSAAgLAaQgJAVAAAbIAAADQAPgXAWAAQAYAAANAUQAMAQgBAYQABAZgNASQgPAVgZAAQg5AAAAhdgAgTARQgFAMAAAUQAAALAJAJQAJAIAJAAQAMAAAIgNQAGgMAAgPQABgOgIgNQgGgKgOAAQgOAAgHARg");
	this.shape_35.setTransform(-0.6,111.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgqB6IAAgMQABgxAcg6QALgWAthKIhwAAIAAgcICLAAIAAAbIgOAYQhFByAABOg");
	this.shape_36.setTransform(-16.7,109.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#00CCFF").s().p("AAKBKIAAgSIAAASIgSAAIAAgSIAAASIgYAAIAAgSIAYAAIASAAIgSAAIAAhrIgYAMIAAgUIAbgOIAPAAIAACBIAXAAIAAASg");
	this.shape_37.setTransform(6.3,81.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#00CCFF").s().p("AgrBKIAAiTIAiAAQAUAAALAHQAOAJAAAYQAAAJgFAKQgGAKgHACQAMACAHAJQAHAKAAANQAAAqguAAgAgXA3IAXAAQAXAAAAgVQAAgOgMgHQgKgGgPAAIgJAAgAgXgKIANAAQAKAAACgCQAGgCADgHQAEgIAAgFIgCgIIgCgIQgBgBgEgCIgIgBIgVAAg");
	this.shape_38.setTransform(86.8,82.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#00CCFF").s().p("AgqBKIAAiTIAUAAIAAB/IBBAAIAAAUg");
	this.shape_39.setTransform(75.2,82.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#00CCFF").s().p("AgqBKIAAiTIAUAAIAAB/IBBAAIAAAUg");
	this.shape_40.setTransform(98.5,61.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#00CCFF").s().p("AgqBKIAAiTIBLAAIAAAUIg2AAIAAApIAvAAIAAARIgvAAIAAAxIBAAAIAAAUg");
	this.shape_41.setTransform(86.8,61.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#00CCFF").s().p("AglA+QgLgNABgcIAAhgIAUAAIAABdQAAATAFAJQAIAMAPAAQARAAAHgPQAFgLgBgUIAAhXIATAAIAABcQAAA7gvAAQgaAAgMgOg");
	this.shape_42.setTransform(75.2,62);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#00CCFF").s().p("AglBKIAAiTIBLAAIAAAUIg2AAIAAAuIAvAAIAAARIgvAAIAABAg");
	this.shape_43.setTransform(63.5,61.8);

	this.instance = new lib.ENGPRI_fuelgaugectr("synched",0);
	this.instance.setTransform(81.9,8.7,2.2,2.2,0,0,0,24.8,24.8);

	this.instance_1 = new lib.ENGPRI_fuelgauge2("synched",0);
	this.instance_1.setTransform(153.6,111.2,2.2,2.2,0,0,0,24.8,24.8);

	this.instance_2 = new lib.ENGPRI_fuelgauge1("synched",0);
	this.instance_2.setTransform(5.7,111.2,2.2,2.2,0,0,0,24.8,24.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("A+JTYMAAAgmvMA8SAAAMAAAAmvg");
	this.shape_44.setTransform(78,66.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115,-58,386,248.1);


(lib.pullout = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgwBAQgLgbAAglQAAgkALgbQAQgmAgAAQAhAAAPAmQAMAbAAAkQAAAkgLAYQgRAqggAAQggAAgQgmgAgbgvQgHAUABAbQAAAcAFAUQAJAdATAAQATAAAKgfQAGgTgBgbQABgbgHgXQgJgagTAAQgSAAgJAdg");
	this.shape.setTransform(77.5,165.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AglBdQgNgLAAgWIAYAAQABAKAFADQAFAEAHAAQAUAAALgbQAIgWgBgaIAAgCQgOAXgXAAQgXAAgOgVQgKgPgBgYQAAgZANgSQAPgVAYAAQAhAAAPAoQALAXAAAmQAAAmgOAcQgPAkgiAAQgTAAgLgJgAgWg/QgHAMAAAPQAAAPAHAKQAHALANAAQAMAAAHgLQAIgMgBgPQAAgQgHgKQgIgMgMAAQgNAAgGANg");
	this.shape_1.setTransform(62.4,165.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag2AJQgBhuA+AAQAQAAANALQAPAMAAATIgZAAQAAgRgSAAQgSAAgLAaQgJAVABAbIAAADQAOgXAWAAQAXAAANAUQAMAQAAAYQAAAZgMASQgPAVgYAAQg7AAABhdgAgTARQgFAMgBAUQAAALAKAJQAJAIAKAAQALAAAIgNQAHgMgBgPQAAgOgGgNQgIgKgNAAQgNAAgIARg");
	this.shape_2.setTransform(47.4,165.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgsBxQgSgNgBgaIAaAAQABAaAhAAQATAAALgRQAJgPAAgVQAAgjgbgLQgQgGgqAAIAAh3IBoAAIAAAcIhQAAIAAA/QApABAWARQAaAQAAArQAAAhgRAXQgSAZgfABQgZAAgRgNg");
	this.shape_3.setTransform(31.3,163.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AANB6IAAgYIAAAYIgYAAIAAgYIAYAAIgYAAIAAi7IgpAUIAAgdIAqgXIAXAAIAADbIAoAAIAAAYgAg1B6IAAgYIAqAAIAAAYg");
	this.shape_4.setTransform(12.3,163.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00CCFF").s().p("AgqBKIAAiTIAUAAIAAB/IBBAAIAAAUg");
	this.shape_5.setTransform(-9.7,165.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00CCFF").s().p("AAjBKIgKgoIgxAAIgNAoIgTAAIAyiTIARAAIAuCTgAgSAPIAlAAIgTg7g");
	this.shape_6.setTransform(-21.4,165.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00CCFF").s().p("AgIBKIAAiAIgqAAIAAgTIBlAAIAAATIgpAAIAACAg");
	this.shape_7.setTransform(-33,165.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00CCFF").s().p("AgpA0QgMgVAAgfQAAgdALgVQAPgcAbAAQAdAAAOAbQALAWAAAdQAAAfgLAUQgPAcgcgBQgbAAgOgagAgZglQgHAQAAAVQAAAXAHAQQAIAVARAAQASAAAJgXQAGgOAAgXQAAgVgGgPQgJgWgSAAQgQAAgJAVg");
	this.shape_8.setTransform(-44.7,165.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00CCFF").s().p("AgIBKIAAiAIgqAAIAAgTIBlAAIAAATIgpAAIAACAg");
	this.shape_9.setTransform(-56.3,165.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgwBAQgLgbAAglQAAgkALgbQAQgmAgAAQAhAAAPAmQAMAbAAAkQAAAkgLAYQgQAqghAAQggAAgQgmgAgbgvQgGAUAAAbQgBAcAHAUQAIAdATAAQATAAAKgfQAGgTAAgbQAAgbgHgXQgJgagTAAQgSAAgJAdg");
	this.shape_10.setTransform(105.6,9.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgmBaQgNgKAAgYIAYAAQABAVAZAAQANAAAHgJQAHgLAAgQQAAgXgQgJQgLgHgcAAIAAgWQAaAAANgGQAKgIAAgTQAAgKgHgHQgHgGgJAAQgKAAgFADQgJAGACAMIgZAAIAAgEQAAgUAPgMQANgKAUAAQAVAAAMALQAPAMAAAWQAAAhgfANQAlAKAAAnQAAAbgOARQgQATgZAAQgVAAgOgMg");
	this.shape_11.setTransform(90.5,9.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AANBgIAAgXIAAAXIgYAAIAAgXIAYAAIgYAAIAAiLIgfAPIAAgaIAigSIAVAAIAACoIAeAAIAAAXgAgqBgIAAgXIAfAAIAAAXgAgLBJg");
	this.shape_12.setTransform(75.6,9.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00CCFF").s().p("AAWBKQgIgWgGgLQgIgQgKgNIgNAAIAAA+IgUAAIAAiTIAoAAQAPAAAKALQAKAMAAARQAAAdgYALQAKAGAMAZQACADAMAhgAgXgFIANAAQAKAAAGgFQAGgJAAgNQAAgWgUAAIgPAAg");
	this.shape_13.setTransform(93.9,-21.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00CCFF").s().p("AgIBKIAAiAIgqAAIAAgTIBlAAIAAATIgpAAIAACAg");
	this.shape_14.setTransform(82.3,-21.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00CCFF").s().p("AgkA0QgLgUAAggQAAgfALgUQAOgbAcAAQASAAALAKQAMAKABAVIgUAAQAAgMgGgFQgGgEgJAAQgRgBgJAUQgGAQAAAXQAAAYAGAPQAJAVARAAQAVAAAAgVIAUAAIAAADQAAARgNAKQgMAKgRgBQgcABgOgbg");
	this.shape_15.setTransform(70.6,-21.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgwBAQgLgbAAglQAAgkALgbQAQgmAgAAQAhAAAQAmQALAbAAAkQAAAkgLAYQgQAqghAAQggAAgQgmgAgbgvQgHAUABAbQAAAcAFAUQAKAdASAAQATAAAKgfQAGgTgBgbQABgbgHgXQgJgagTAAQgSAAgJAdg");
	this.shape_16.setTransform(177.3,111.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AglBdQgOgLAAgWIAZAAQAAAKAGADQAFAEAHAAQAUAAALgbQAIgWgBgaIAAgCQgOAXgXAAQgXAAgOgVQgLgPAAgYQAAgZANgSQAPgVAYAAQAhAAAPAoQALAXgBAmQAAAmgMAcQgQAkgiAAQgTAAgLgJgAgWg/QgHAMAAAPQAAAPAHAKQAHALAOAAQALAAAHgLQAIgMgBgPQAAgQgHgKQgIgMgMAAQgNAAgGANg");
	this.shape_17.setTransform(162.2,111.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgoBVQgPgRAAgaQAAgkAdgOQgXgOAAgcQAAgXAOgOQANgOAWAAQAVAAAPAPQAOAOAAAWQAAAPgGAKQgGAJgMAHQAeAPAAAkQAAAagOAQQgQASgaAAQgZAAgPgRgAgVAMQgJAOAAAPQAAAPAIAKQAKALAMAAQANAAAJgIQAJgNgBgPQABgPgJgLQgJgNgNAAQgMAAgJAKgAgRhEQgHAIAAAMQAAALAHAIQAIAJAJAAQAKAAAHgJQAIgIAAgLQAAgMgIgIQgHgIgKAAQgJAAgIAIg");
	this.shape_18.setTransform(147.2,111.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgqB6IAAgMQAAgxAdg6QAMgWArhKIhvAAIAAgcICKAAIAAAbIgNAYQhFByAABOg");
	this.shape_19.setTransform(131.2,109.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00CCFF").s().p("AgoBMIAAgRQAAgSAMgQQAEgKAPgOIASgRQAJgMAAgJQAAgJgGgFQgGgGgGAAQgRAAgBAQIgTAAIAAgDQAAgOAPgKQAIgHAOgBQAQAAALAKQAMAKAAATQAAASgQAQIgcAZQgPARAAARIA9AAIAAAUg");
	this.shape_20.setTransform(154,80.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgwBAQgLgbAAglQAAgkALgbQAQgmAgAAQAhAAAQAmQALAbAAAkQAAAkgLAYQgQAqghAAQggAAgQgmgAgbgvQgHAUAAAbQABAcAFAUQAKAdASAAQATAAAKgfQAFgTAAgbQAAgbgGgXQgJgagTAAQgSAAgJAdg");
	this.shape_21.setTransform(29.5,111.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgoBVQgPgRAAgaQAAgkAdgOQgXgOAAgcQAAgXAOgOQANgOAWAAQAVAAAPAPQAOAOAAAWQAAAPgGAKQgGAJgLAHQAdAPAAAkQAAAagOAQQgQASgaAAQgZAAgPgRgAgVAMQgJAOAAAPQAAAPAIAKQAKALAMAAQANAAAJgIQAJgNgBgPQABgPgJgLQgJgNgNAAQgMAAgJAKgAgRhEQgHAIAAAMQAAALAHAIQAIAJAJAAQAKAAAHgJQAIgIAAgLQAAgMgIgIQgHgIgKAAQgJAAgIAIg");
	this.shape_22.setTransform(14.4,111.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag2AJQAAhuA+AAQAQAAANALQAOAMAAATIgYAAQgBgRgSAAQgSAAgLAaQgJAVAAAbIAAADQAPgXAWAAQAYAAANAUQAMAQgBAYQABAZgNASQgPAVgZAAQg5AAAAhdgAgTARQgFAMAAAUQAAALAJAJQAJAIAJAAQAMAAAIgNQAGgMAAgPQABgOgIgNQgGgKgOAAQgOAAgHARg");
	this.shape_23.setTransform(-0.6,111.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgqB6IAAgMQABgxAcg6QALgWAthKIhwAAIAAgcICLAAIAAAbIgOAYQhFByAABOg");
	this.shape_24.setTransform(-16.7,109.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00CCFF").s().p("AAKBKIAAgSIAAASIgSAAIAAgSIAAASIgYAAIAAgSIAYAAIASAAIgSAAIAAhrIgYAMIAAgUIAbgOIAPAAIAACBIAXAAIAAASg");
	this.shape_25.setTransform(6.3,81.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00CCFF").s().p("AgrBKIAAiTIAiAAQAUAAALAHQAOAJAAAYQAAAJgFAKQgGAKgHACQAMACAHAJQAHAKAAANQAAAqguAAgAgXA3IAXAAQAXAAAAgVQAAgOgMgHQgKgGgPAAIgJAAgAgXgKIANAAQAKAAACgCQAGgCADgHQAEgIAAgFIgCgIIgCgIQgBgBgEgCIgIgBIgVAAg");
	this.shape_26.setTransform(86.8,82.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00CCFF").s().p("AgqBKIAAiTIAUAAIAAB/IBBAAIAAAUg");
	this.shape_27.setTransform(75.2,82.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00CCFF").s().p("AgqBKIAAiTIAUAAIAAB/IBBAAIAAAUg");
	this.shape_28.setTransform(98.5,61.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00CCFF").s().p("AgqBKIAAiTIBLAAIAAAUIg2AAIAAApIAvAAIAAARIgvAAIAAAxIBAAAIAAAUg");
	this.shape_29.setTransform(86.8,61.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00CCFF").s().p("AglA+QgLgNABgcIAAhgIAUAAIAABdQAAATAFAJQAIAMAPAAQARAAAHgPQAFgLgBgUIAAhXIATAAIAABcQAAA7gvAAQgaAAgMgOg");
	this.shape_30.setTransform(75.2,62);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00CCFF").s().p("AglBKIAAiTIBLAAIAAAUIg2AAIAAAuIAvAAIAAARIgvAAIAABAg");
	this.shape_31.setTransform(63.5,61.8);

	this.instance = new lib.ENGPRI_fuelgaugectr("synched",0);
	this.instance.setTransform(81.9,8.7,2.2,2.2,0,0,0,24.8,24.8);

	this.instance_1 = new lib.ENGPRI_fuelgauge2("synched",0);
	this.instance_1.setTransform(153.6,111.2,2.2,2.2,0,0,0,24.8,24.8);

	this.instance_2 = new lib.ENGPRI_fuelgauge1("synched",0);
	this.instance_2.setTransform(5.7,111.2,2.2,2.2,0,0,0,24.8,24.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("A+JTYMAAAgmvMA8SAAAMAAAAmvg");
	this.shape_32.setTransform(78,66.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115,-58,386,248.1);


// stage content:
(lib.dif07p05 = function(mode,startPosition,loop) {
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
	this.frame_217 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(217).call(this.frame_217).wait(1));

	// prot
	this.prot = new lib.prot();
	this.prot.setTransform(500,275,1,1,0,0,0,500,275);

	this.timeline.addTween(cjs.Tween.get(this.prot).wait(218));

	// time
	this.instance = new lib._5min("synched",0);
	this.instance.setTransform(674.5,439.4,1,1,0,0,0,93,52.5);
	this.instance.alpha = 0.301;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(105).to({_off:false},0).to({alpha:1},5).wait(102).to({startPosition:0},0).to({alpha:0},5).wait(1));

	// t1
	this.instance_1 = new lib.t1("synched",0);
	this.instance_1.setTransform(684.1,342.5,1,1,0,0,0,213.6,23.1);
	this.instance_1.alpha = 0.301;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(42).to({_off:false},0).to({alpha:1},5).wait(171));

	// arrow
	this.instance_2 = new lib.yellowhighlightboxa("synched",0);
	this.instance_2.setTransform(511.8,288);
	this.instance_2.alpha = 0.301;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(31).to({_off:false},0).to({alpha:1},5).wait(182));

	// hl
	this.instance_3 = new lib.hl("synched",0);
	this.instance_3.setTransform(597.5,270.5,1,1,0,0,0,83.5,22.5);
	this.instance_3.alpha = 0.301;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(26).to({_off:false},0).to({alpha:1},5).wait(187));

	// panel
	this.instance_4 = new lib.pullout("synched",0);
	this.instance_4.setTransform(660.5,170.1,1,1,0,0,0,75,65);

	this.instance_5 = new lib.pulloutcopy("synched",0);
	this.instance_5.setTransform(660.5,170.1,1,1,0,0,0,75,65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},110).wait(108));

	// fuel
	this.instance_6 = new lib.CDULeftPanel("synched",0);
	this.instance_6.setTransform(298.8,293.2,1,1,0,0,0,-0.8,3.4);

	this.instance_7 = new lib.CDULeftPanelcopy("synched",0);
	this.instance_7.setTransform(298.8,293.2,1,1,0,0,0,-0.8,3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},110).wait(108));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(500,275,1000,550);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;