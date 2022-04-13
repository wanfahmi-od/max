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
		{src:"images/en01p04_switches.png", id:"en01p04_switches"},
		{src:"images/en01p04_switches2.png", id:"en01p04_switches2"},
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



(lib.en01p04_switches = function() {
	this.initialize(img.en01p04_switches);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,476,310);


(lib.en01p04_switches2 = function() {
	this.initialize(img.en01p04_switches2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,476,310);


(lib.texture = function() {
	this.initialize(img.texture);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAuIAAgSIAQAAIAAASgAgHgbIAAgSIAQAAIAAASg");
	this.shape.setTransform(247.6,13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAGAAQAHAAAJAFIgFAPQgGgEgGAAQgFAAgDADQgEADgBAGQgDAIAAAKIAAAvg");
	this.shape_1.setTransform(242.7,13.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgeAkQgLgNAAgXQAAgVALgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgLAAQgJAAgIAHg");
	this.shape_2.setTransform(234,13.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_3.setTransform(226.6,12.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgKQAAgIACgFQACgHAGgDQAEgEAKAAIAPABIgDAOIgJAAQgHAAgDACQgDADAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_4.setTransform(221.9,11.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AghApQgJgIAAgLQABgHADgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAKgDAJAAQANAAAHADQAHACAEAFQADAEABAGIABAPIAAATQAAAWACAGQABAGADAFIgRAAQgDgFAAgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgDADAAAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_5.setTransform(214,13.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_6.setTransform(201.6,12.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_7.setTransform(194,13.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgLAAQgKAAgHAHg");
	this.shape_8.setTransform(184,13.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_9.setTransform(176.6,12.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQALAMABAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgIAAgIAHg");
	this.shape_10.setTransform(169,13.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgLAAgOQAAgOAFgKQAFgMAJgFQAJgHALAAQAHABAGADQAHADAFAHIAAgvIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgPgIQgIAIAAARQABARAHAJQAIAJAIAAQAKAAAIgIQAGgJABgRQgBgSgGgIQgIgJgLAAQgIAAgHAJg");
	this.shape_11.setTransform(158.7,12);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgvBAIAAh/IBcAAIAAAPIhKAAIAAAoIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_12.setTransform(143.2,11.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgnBAIAAh/IARAAIAABwIA+AAIAAAPg");
	this.shape_13.setTransform(132.3,11.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ag0BAIAAh/IAtAAQANAAAHACQAMACAHAHQALAJAFANQAFAOAAAQQAAANgEAMQgDALgGAIQgFAHgGAFQgHADgJADQgJACgJAAgAgjAxIAcAAQAKAAAIgCQAHgDAEgFQAGgFAEgLQADgKAAgNQAAgUgHgLQgGgLgKgDQgHgCgNgBIgbAAg");
	this.shape_14.setTransform(120.7,11.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_15.setTransform(111.6,11.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_16.setTransform(99,13.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_17.setTransform(91.6,12.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAGAAQAHAAAJAFIgGAPQgFgEgGAAQgFAAgDADQgEADgCAGQgCAIAAAKIAAAvg");
	this.shape_18.setTransform(81.7,13.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_19.setTransform(73,13.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgGAuIgjhbIAQAAIAUA2IAFATIAFgSIAVg3IAQAAIgjBbg");
	this.shape_20.setTransform(63.5,13.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgeAkQgLgNAAgXQAAgVALgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgLAAQgJAAgIAHg");
	this.shape_21.setTransform(54,13.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgGBAIAAh/IAOAAIAAB/g");
	this.shape_22.setTransform(47,11.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_23.setTransform(37.6,12.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAJAAAIAFIgFAPQgHgEgFAAQgFAAgDADQgDADgCAGQgDAIAAAKIAAAvg");
	this.shape_24.setTransform(32.7,13.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQADgKAEgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgGADgJAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_25.setTransform(24,13.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_26.setTransform(16.6,12.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgYA9QgMgFgHgKQgGgKgBgOIAQgBQACAKAEAGQAEAHAJADQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgEQgEgFgIgDIgVgHQgRgDgHgDQgKgEgEgIQgFgHAAgJQAAgKAGgIQAFgIALgEQALgFAMAAQANAAALAFQALAEAGAJQAGAJAAAMIgQABQgCgMgHgHQgIgGgOAAQgOAAgHAGQgHAGAAAHQAAAIAFADQAFAFASAFQAVAFAIADQALADAGAJQAFAHAAALQAAAKgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape_27.setTransform(7.9,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,252.2,24.1);


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


(lib.panelcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PNG
	this.instance = new lib.en01p04_switches2();
	this.instance.setTransform(-0.5,-0.5,0.411,0.411);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,195.5,127.3);


(lib.panel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PNG
	this.instance = new lib.en01p04_switches();
	this.instance.setTransform(-0.4,-0.5,0.411,0.411);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,-0.5,195.5,127.3);


(lib.hl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(5,0,0,3).p("Aq2jEIVtAAIAAGJI1tAAg");
	this.shape.setTransform(69.6,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,144.1,44.5);


(lib.B787EICAS_Gauge_N2WhitePointercopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AiEAAIEJAA");
	this.shape.setTransform(13.4,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,28.8,2);


(lib.B787EICAS_Gauge_N2WhitePointercopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AiEAAIEJAA");
	this.shape.setTransform(13.4,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,28.8,2);


(lib.B787EICAS_Gauge_N2WhitePointer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AiEAAIEJAA");
	this.shape.setTransform(13.4,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,28.8,2);


(lib.B787EICAS_Gauge_N2RedLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1.5,1,1).p("AgTAAIAnAA");
	this.shape.setTransform(29.3,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26.2,-1,6.2,2);


(lib.B787EICAS_Gauge_N1WhitePointercopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AiQAAIEhAA");
	this.shape.setTransform(14.6,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,31.2,2);


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
	this.shape.graphics.f().s("#33C300").ss(1.5,1,1).p("AgBAAIgmAAAAoAdIgpgdAAogcIgpAc");
	this.shape.setTransform(31.3,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26.3,-3.9,10.1,7.9);


(lib.B787EICAS_Gauge_EGTWhitePointercopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AiEAAIEJAA");
	this.shape.setTransform(13.4,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,28.8,2);


(lib.B787EICAS_Gauge_EGTRedLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1.5,1,1).p("AgTAAIAnAA");
	this.shape.setTransform(29.3,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26.2,-1,6.2,2);


(lib.B787EICAS_Gauge_EGTAmberLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9900").ss(1.5,1,1).p("AgTAAIAnAA");
	this.shape.setTransform(29.3,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26.2,-1,6.2,2);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// arrow
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,0,3).p("ABKhYIAAFrIiTAAIAAlrIhVAAICei3ICeC3g");
	this.shape.setTransform(-0.4,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AhJESIAAlsIhUAAICdi3ICeC3IhUAAIAAFsg");
	this.shape_1.setTransform(-0.4,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.4,-28.9,34,56.8);


(lib.point_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.point("synched",0);
	this.instance.setTransform(-35.8,1.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAVA7QgHgJAAgRQAAgOAGgKQAHgJAOAAQAMAAAIAIQAIAJAAAQQAAARgIAJQgIAIgMAAQgMAAgIgIgAAfAPQgEAFAAAOQAAAMAEAGQAEAFAGAAQAGAAAEgFQAEgGAAgNQAAgNgEgFQgEgFgGAAQgGAAgEAFgAgoBDIBEiFIANAAIhECFgAg8gHQgIgJAAgRQAAgOAHgKQAHgJANAAQAMAAAIAIQAIAJAAARQAAAQgIAJQgIAHgMAAQgLAAgIgHgAgygyQgEAFAAANQAAANAEAFQAEAFAGAAQAGAAAEgFQAEgFAAgOQAAgMgEgFQgEgFgGAAQgGAAgEAFg");
	this.shape.setTransform(118,45.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgcA0QgNgQAAgkQAAgVAFgOQAFgOAJgIQAKgHAMAAQAKAAAHAEQAIAEAGAIQAEAIADALQAEAMAAARQgBAWgEAOQgFAOgJAIQgJAHgOAAQgRAAgLgNgAgQgqQgJAMAAAeQAAAfAIALQAHAKAKAAQAKAAAIgKQAHgLAAgfQAAgegHgLQgIgKgKAAQgKAAgGAJg");
	this.shape_1.setTransform(105,45.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgpBAQAAgFACgGQADgIAHgJQAIgIANgLQATgRAHgJQAIgKgBgJQAAgJgGgHQgHgGgKAAQgKAAgHAHQgGAHgBAMIgQgCQACgSAKgKQAMgJAQAAQATAAAKAKQALAKAAAQQAAAHgDAIQgEAHgGAHQgIAIgRAOIgQARQgFAEgCAEIA9AAIAAAPg");
	this.shape_2.setTransform(94.8,45.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgMIAOAAIAAgKQAAgKACgEQACgHAGgDQAEgEAKAAIAPABIgCAPIgKgCQgHABgDADQgDACAAAJIAAAJIASAAIAAAMIgSAAIAABPg");
	this.shape_3.setTransform(82.9,45.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_4.setTransform(75,47.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_5.setTransform(57.5,47.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_6.setTransform(44.9,47.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_7.setTransform(32.5,47.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgGBAIAAhcIANAAIAABcgAgGgtIAAgSIANAAIAAASg");
	this.shape_8.setTransform(23,45.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_9.setTransform(16,47.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_10.setTransform(9,45.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_11.setTransform(-0.5,47.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQAMAAAHADQAHACADAFQAEAEACAGIABAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgQACg");
	this.shape_12.setTransform(-18,47.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgTA7QgKgGgFgLQgFgLAAgOQAAgOAFgKQAFgMAJgFQAJgHALAAQAHABAGADQAHADAFAHIAAgvIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgQgIQgHAIAAARQAAARAIAJQAHAJAJAAQAKAAAIgIQAHgJAAgRQAAgSgHgIQgIgJgLAAQgIAAgIAJg");
	this.shape_13.setTransform(159.7,23.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_14.setTransform(150,25.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAHgEAEgHQACgFAAgLIAAgFQgIADgPACg");
	this.shape_15.setTransform(140,25.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgbA7QgKgIAAgPIAQACQABAHAEAEQAGAEAKAAQAKAAAFgEQAGgFACgIQABgEAAgQQgKAMgOAAQgTAAgKgOQgLgOAAgRQABgNAEgMQAFgLAJgGQAKgGALAAQAQAAAKANIAAgLIAOAAIAABPQAAAVgEAKQgFAJgJAFQgKAFgMAAQgRAAgKgHgAgQgrQgHAIAAARQAAASAHAHQAHAIAJAAQALAAAIgIQAHgHAAgSQAAgRgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_16.setTransform(124.7,27.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_17.setTransform(115,25.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgsIAAgTIAPAAIAAATg");
	this.shape_18.setTransform(108,23.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgGgEgFAAQgGAAgCADQgDADgDAGQgCAIAAAKIAAAvg");
	this.shape_19.setTransform(103.7,25.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_20.setTransform(95,25.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_21.setTransform(87.6,23.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_22.setTransform(80,25.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_23.setTransform(67.5,25.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_24.setTransform(47.5,25.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_25.setTransform(34.9,25.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_26.setTransform(22.5,25.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgGBAIAAhcIANAAIAABcgAgGgsIAAgTIANAAIAAATg");
	this.shape_27.setTransform(13,23.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAYAuIgTgdIgFgIIgXAlIgTAAIAiguIgfgtIATAAIAOAWIAGAKIAGgKIAQgWIATAAIghAsIAjAvg");
	this.shape_28.setTransform(6.5,25.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQADgKAEgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgGADgJAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_29.setTransform(-3,25.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_30.setTransform(-15.5,25.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_31.setTransform(146.6,1.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHADgGQADgGAGgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgFAEQgGAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACADAFQAFAEAAAGIABAPIAAATQAAAWABAGQABAGAEAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgDAFQgJACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgQACg");
	this.shape_32.setTransform(139,3.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgIAAgIAHg");
	this.shape_33.setTransform(124,3.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgGBAIAAh/IANAAIAAB/g");
	this.shape_34.setTransform(117,1.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgYA0IAAALIgPAAIAAh/IAQAAIAAAuQAKgMANAAQAJgBAIAEQAHADAFAHQAFAGADAJQADAHAAAKQAAAYgMANQgMANgQAAQgPAAgJgNgAgRgJQgHAJAAAPQAAASAEAHQAIAMAMAAQAJAAAHgJQAIgJAAgSQAAgQgHgJQgIgJgJAAQgJAAgIAJg");
	this.shape_35.setTransform(110.2,1.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgGBAIAAhbIANAAIAABbgAgGgtIAAgSIANAAIAAASg");
	this.shape_36.setTransform(103,1.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_37.setTransform(96.4,3.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_38.setTransform(87.4,3.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_39.setTransform(78,3.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgnBBIAAh/IAOAAIAAAMQAGgHAGgEQAGgDAHAAQAMAAAKAGQAIAGAFALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgGAAgHgDQgGgDgEgFIAAAtgAgRgqQgIAJAAASQAAAQAHAJQAIAIAKAAQAIAAAIgJQAIgIAAgRQAAgSgIgJQgHgJgJAAQgKAAgHAKg");
	this.shape_40.setTransform(68.3,4.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_41.setTransform(55.6,1.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_42.setTransform(48,3.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_43.setTransform(38,3.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAVA7QgHgJAAgRQAAgOAGgKQAHgJAOAAQAMAAAIAIQAIAJAAAQQAAARgIAJQgIAIgMAAQgMAAgIgIgAAfAPQgEAFAAAOQAAAMAEAGQAEAFAGAAQAGAAAEgFQAEgGAAgNQAAgNgEgFQgEgFgGAAQgGAAgEAFgAgoBDIBEiFIANAAIhECFgAg8gHQgIgJAAgRQAAgOAHgKQAHgJANAAQAMAAAIAIQAIAJAAARQAAAQgIAJQgIAHgMAAQgLAAgIgHgAgygyQgEAFAAANQAAANAEAFQAEAFAGAAQAGAAAEgFQAEgFAAgOQAAgMgEgFQgEgFgGAAQgGAAgEAFg");
	this.shape_44.setTransform(20,1.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgdA2QgLgJgBgQIAQgCQACAMAHAGQAHAGAJAAQAKAAAHgJQAIgIAAgOQAAgOgHgGQgIgHgKgBQgIAAgGAEQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAjQALgJALABQARgBAMAMQALAKAAASQAAASgKANQgMAPgUAAQgRAAgMgKg");
	this.shape_45.setTransform(7,1.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgpBAQAAgFACgGQADgIAHgJQAIgIANgLQATgRAIgJQAGgKAAgJQABgJgHgHQgHgGgKAAQgKAAgHAHQgGAHgBAMIgQgCQACgSAKgKQAMgJAQAAQATAAAKAKQALAKAAAQQAAAHgDAIQgEAHgGAHQgIAIgRAOIgQARIgHAIIA9AAIAAAPg");
	this.shape_46.setTransform(-3.2,1.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgMIAOAAIAAgKQAAgKACgEQACgHAGgDQAEgEAKAAIAPACIgDANIgJgBQgHAAgDAEQgDADAAAIIAAAJIASAAIAAAMIgSAAIAABPg");
	this.shape_47.setTransform(-15.1,1.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_48.setTransform(-20.4,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.3,-10.4,210.6,68.3);


(lib.point_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.point("synched",0);
	this.instance.setTransform(-29.2,1.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAVA7QgHgJAAgRQAAgOAGgKQAHgJAOAAQAMAAAIAIQAIAJAAAQQAAARgIAJQgIAIgMAAQgMAAgIgIgAAfAPQgEAFAAAOQAAAMAEAGQAEAFAGAAQAGAAAEgFQAEgGAAgNQAAgNgEgFQgEgFgGAAQgGAAgEAFgAgoBDIBEiFIANAAIhECFgAg8gHQgIgJAAgRQAAgOAHgKQAHgJANAAQAMAAAIAIQAIAJAAARQAAAQgIAJQgIAHgMAAQgLAAgIgHgAgygyQgEAFAAANQAAANAEAFQAEAFAGAAQAGAAAEgFQAEgFAAgOQAAgMgEgFQgEgFgGAAQgGAAgEAFg");
	this.shape.setTransform(59.6,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdA2QgLgJgBgQIAQgCQACAMAHAGQAHAGAJAAQAKAAAHgJQAIgIAAgOQAAgOgHgGQgIgHgKgBQgIAAgGAEQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAjQALgJALABQARgBAMAMQALAKAAASQAAASgKANQgMAPgUAAQgRAAgMgKg");
	this.shape_1.setTransform(46.7,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgpBAQAAgFACgGQADgIAIgJQAGgIAOgLQATgRAHgJQAIgKAAgJQgBgJgGgHQgHgGgLAAQgJAAgHAHQgHAHAAAMIgQgCQABgSALgKQALgJARAAQASAAALAKQALAKAAAQQAAAHgDAIQgDAHgIAHQgHAIgRAOIgRARIgGAIIA9AAIAAAPg");
	this.shape_2.setTransform(36.5,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_3.setTransform(24.2,1.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQAMAAAHADQAHACADAFQAEAEACAGIABAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgQACg");
	this.shape_4.setTransform(16.6,3.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgpBAQAAgFACgGQADgIAIgJQAGgIAOgLQATgRAHgJQAIgKgBgJQAAgJgGgHQgHgGgLAAQgJAAgHAHQgHAHAAAMIgQgCQABgSALgKQAMgJAQAAQASAAALAKQALAKAAAQQAAAHgDAIQgDAHgIAHQgHAIgRAOIgQARQgEAEgDAEIA9AAIAAAPg");
	this.shape_5.setTransform(1.5,1.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAhBAIhChjIAABjIgQAAIAAh/IARAAIBCBjIAAhjIAQAAIAAB/g");
	this.shape_6.setTransform(-9.9,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-10.4,101.6,24.1);


(lib.point_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.point("synched",0);
	this.instance.setTransform(-40.9,1.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape.setTransform(54.9,3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_1.setTransform(44.9,3.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGBAIAAhbIAOAAIAABbgAgGgtIAAgSIAOAAIAAASg");
	this.shape_2.setTransform(38,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_3.setTransform(33.5,1.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AghApQgIgIAAgLQgBgHADgGQAEgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgFAEQgGAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAKgDAKAAQALAAAIADQAHACADAFQAFAEABAGIAAAPIAAATQAAAWABAGQABAGAEAFIgRAAQgCgFgBgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgDAFQgJACgEACQgEABgDAEQgBADAAAEQAAAHAEAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQADgFgBgLIAAgFQgIADgQACg");
	this.shape_4.setTransform(25.9,3.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_5.setTransform(18.5,1.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_6.setTransform(10.9,3.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAGAAQAHAAAJAFIgFAPQgHgEgFAAQgFAAgDADQgDADgCAGQgDAIAAAKIAAAvg");
	this.shape_7.setTransform(3.7,3.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAHBAIAAhjQgFAGgHAFIgRAJIAAgQQANgGAJgJQAJgJAEgIIAKAAIAAB/g");
	this.shape_8.setTransform(-10.7,1.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAhBAIhChjIAABjIgQAAIAAh/IARAAIBCBjIAAhjIAQAAIAAB/g");
	this.shape_9.setTransform(-21.6,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.4,-10.4,105.6,24.1);


(lib.point_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.point("synched",0);
	this.instance.setTransform(-62.1,1.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape.setTransform(182.7,3.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AATBAIgdgwIgLALIAAAlIgQAAIAAh/IAQAAIAABHIAjgjIAUAAIgiAhIAmA6g");
	this.shape_1.setTransform(174.4,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_2.setTransform(164.3,3.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHADgGQADgGAGgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgFAEQgGAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACADAFQAFAEAAAGIABAPIAAATQAAAWABAGQABAGAEAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgDAFQgJACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgQACg");
	this.shape_3.setTransform(154.3,3.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_4.setTransform(147.3,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgYA0IAAALIgPAAIAAh/IAQAAIAAAuQAKgMANAAQAJgBAIAEQAHADAFAHQAFAGADAJQADAHAAAKQAAAYgMANQgMANgQAAQgPAAgJgNgAgRgJQgHAJAAAPQAAASAEAHQAIAMAMAAQAJAAAHgJQAIgJAAgSQAAgQgHgJQgIgJgJAAQgJAAgIAJg");
	this.shape_5.setTransform(140.5,1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_6.setTransform(125.3,3.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_7.setTransform(115.3,3.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgHBAIAAhbIAOAAIAABbgAgHgtIAAgSIAOAAIAAASg");
	this.shape_8.setTransform(108.3,1.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_9.setTransform(103.9,1.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQAMAAAHADQAHACADAFQAEAEACAGIABAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgQACg");
	this.shape_10.setTransform(96.3,3.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_11.setTransform(87.1,3.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgHBAIAAhbIAOAAIAABbgAgHgtIAAgSIAOAAIAAASg");
	this.shape_12.setTransform(80.3,1.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgLAAgPQAAgNAFgKQAEgLAKgHQAJgFALAAQAHgBAGAEQAHAEAEAFIAAguIAQAAIAAB/IgPAAIAAgMQgIAOgRAAQgKAAgJgGgAgPgJQgIAJABAQQAAASAHAJQAHAJAJAAQAKAAAIgJQAGgIAAgSQAAgRgGgJQgIgJgLAAQgJAAgGAJg");
	this.shape_13.setTransform(73,1.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_14.setTransform(63.3,3.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgGBAIAAhbIANAAIAABbgAgGgtIAAgSIANAAIAAASg");
	this.shape_15.setTransform(56.3,1.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgbA6QgPgIgIgQQgIgPAAgTQAAgRAIgQQAIgQAOgIQAPgIARAAQAOAAAMAEQALAFAGAIQAHAIADANIgPAEQgDgJgFgGQgEgGgIgDQgIgEgKAAQgJAAgJAEQgIADgFAHQgGAFgDAHQgFAMAAANQAAAQAGAMQAGALAMAGQALAGALAAQALAAAKgFQALgDAFgGIAAgXIgmAAIAAgOIA3AAIAAAuQgNAKgNAFQgNAFgOAAQgRAAgQgIg");
	this.shape_16.setTransform(42.2,1.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAhBAIhChjIAABjIgQAAIAAh/IARAAIBCBjIAAhjIAQAAIAAB/g");
	this.shape_17.setTransform(28.7,1.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_18.setTransform(19.9,1.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAjBAIgRgbIgMgSIgHgIIgIgEIgJAAIgUAAIAAA5IgRAAIAAh/IA3AAQARAAAJADQAJAEAGAJQAFAJAAALQAAANgJAJQgJAIgSADQAGADAEADQAHAGAHALIAWAjgAgmgGIAlAAQAJAAAHgDQAGgCAEgFQADgGAAgFQAAgKgGgGQgHgFgOAAIgnAAg");
	this.shape_19.setTransform(11.4,1.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgfA6QgOgKgIgOQgHgQAAgRQAAgeARgSQARgSAaAAQARAAAPAJQAOAIAIAPQAHAPAAASQAAATgIAQQgIAPgOAJQgPAHgQAAQgRAAgOgIgAgdgmQgNAMAAAbQAAAYAMANQANAOARAAQATAAAMgOQANgNAAgZQAAgOgGgMQgFgMgKgGQgLgHgMAAQgQAAgNANg");
	this.shape_20.setTransform(-2.7,1.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgHBAIAAhvIgrAAIAAgQIBlAAIAAAQIgrAAIAABvg");
	this.shape_21.setTransform(-14.8,1.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgfA6QgOgKgIgOQgHgQAAgRQAAgeARgSQARgSAaAAQARAAAPAJQAOAIAIAPQAHAPAAASQAAATgIAQQgIAPgOAJQgPAHgQAAQgRAAgOgIgAgdgmQgNAMAAAbQAAAYAMANQANAOARAAQATAAAMgOQANgNAAgZQAAgOgGgMQgFgMgKgGQgLgHgMAAQgQAAgNANg");
	this.shape_22.setTransform(-27.3,1.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAtBAIAAhqIgmBqIgNAAIglhsIAABsIgRAAIAAh/IAaAAIAeBZIAEATIAHgUIAfhYIAXAAIAAB/g");
	this.shape_23.setTransform(-41.8,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.6,-10.4,254.2,24.1);


(lib.B787EICAS_Gauge_N2Leftcopy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Indicators
	this.instance = new lib.B787EICAS_Gauge_N2RedLine("synched",0);
	this.instance.setTransform(0,0,1,1,-152.5);

	this.instance_1 = new lib.B787EICAS_Gauge_N2WhitePointer("synched",0);
	this.instance_1.setTransform(0,0,1,1,44.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Line Work
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AEyhIIlVAAIAAiUIFVAAgADpgvQAABvhPBOQhPBPhuAAQhwAAhPhPQhPhOAAhvQAAhEAeg4");
	this.shape.setTransform(3.6,4.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Grey Fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5E5D66").s().p("AiFhdIELAAQAAA4gOAlQgTAygsAsg");
	this.shape_1.setTransform(13.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.5,-23.9,98.9,73.2);


(lib.B787EICAS_Gauge_N2Leftcopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Indicators
	this.instance = new lib.B787EICAS_Gauge_N2RedLine("synched",0);
	this.instance.setTransform(0,0,1,1,-152.5);

	this.instance_1 = new lib.B787EICAS_Gauge_N2WhitePointercopy2("synched",0);
	this.instance_1.setTransform(0,0,1,1,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Line Work
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AEyhIIlVAAIAAiUIFVAAgADpgvQAABvhPBOQhPBPhuAAQhwAAhPhPQhPhOAAhvQAAhEAeg4");
	this.shape.setTransform(3.6,4.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.5,-23.9,98.9,73.2);


(lib.B787EICAS_Gauge_N2Leftcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Indicators
	this.instance = new lib.B787EICAS_Gauge_N2RedLine("synched",0);
	this.instance.setTransform(0,0,1,1,-152.5);

	this.instance_1 = new lib.B787EICAS_Gauge_N2WhitePointercopy("synched",0);
	this.instance_1.setTransform(0,0,1,1,44.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Line Work
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AEyhIIlVAAIAAiUIFVAAgADpgvQAABvhPBOQhPBPhuAAQhwAAhPhPQhPhOAAhvQAAhEAeg4");
	this.shape.setTransform(3.6,4.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Grey Fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5E5D66").s().p("AiDheIEHAAQAAA4gRAnQgRApgIALQgIAMgeAeg");
	this.shape_1.setTransform(13.7,9.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.5,-23.9,98.9,73.2);


(lib.B787EICAS_Gauge_N2Left = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Indicators
	this.instance = new lib.B787EICAS_Gauge_N2RedLine("synched",0);
	this.instance.setTransform(0,0,1,1,-152.5);

	this.instance_1 = new lib.B787EICAS_Gauge_N2WhitePointer("synched",0);
	this.instance_1.setTransform(0,0,1,1,44.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Line Work
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AEyhIIlVAAIAAiUIFVAAgADpgvQAABvhPBOQhPBPhuAAQhwAAhPhPQhPhOAAhvQAAhEAeg4");
	this.shape.setTransform(3.6,4.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Grey Fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5E5D66").s().p("AiFhdIELAAQAAA4gOAlQgTAygsAsg");
	this.shape_1.setTransform(13.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.5,-23.9,98.9,73.2);


(lib.B787EICAS_Gauge_N1Leftcopy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.B787EICAS_Gauge_N1WhitePointercopy("synched",0);
	this.instance.setTransform(0,0,1,1,3.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Indicators
	this.instance_1 = new lib.B787EICAS_Gauge_N1RedLine("synched",0);
	this.instance_1.setTransform(0,0,1,1,-152.5);

	this.instance_2 = new lib.B787EICAS_Gauge_N1GreenRefTargetN1("synched",0);
	this.instance_2.setTransform(0,0,1,1,-175.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNAUQgEgJAAgLQAAgKAEgJQAEgLAJAAQAKAAAEALQAEAJAAAKQAAALgEAJQgFALgJAAQgJAAgEgLgAgIgOQgCAHAAAHQAAAIACAHQADAKAFAAQAGAAADgKQACgHAAgIQAAgHgCgHQgDgJgGAAQgFAAgDAJg");
	this.shape.setTransform(-16.6,-4.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AADAdIgFAAIAAgGIAAAGIgKAAIAAgGIAKAAIAAgsIgKAFIAAgHIALgFIAEAAIAAAzIgFAAIAFAAIAAAGIAAgGIAKAAIAAAGgAADAXg");
	this.shape_1.setTransform(-20.7,-4.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLAaQgFgFAAgIQAAgKAKgFQgIgEAAgJQAAgHAEgDQAFgFAFAAQAGAAAEAFQAFAEAAAGQAAAFgCADIgGAFQAKAEAAALQAAAIgFAFQgFAFgHAAQgGAAgFgFgAgGAEQgDAEAAAEQAAAFADAEQADAEADAAQAEAAADgEQADgDAAgGQAAgEgDgEQgDgEgEAAQgDAAgDAEgAgFgVQgCADAAAEQAAAEACADQADACACAAQADAAADgCQACgDAAgEQAAgEgCgDQgDgCgDgBQgCABgDACg");
	this.shape_2.setTransform(-20.3,7.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPADQAAghARAAQAFAAAEADQAEAEAAAEIgGAAQAAgEgHAAQgFgBgDAJQgDAHAAAIIAAABQAGgGAFAAQAHAAAEAFQADAEAAAIQAAAHgDAGQgFAGgHAAQgQAAAAgcgAgGAEQgCAFAAAGQAAAEAEADQADADACAAQAEAAADgEQACgFAAgEQAAgGgCgCQgDgEgFAAQgDAAgDAEg");
	this.shape_3.setTransform(-10.6,18);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAIAdIAAgSIgVAAIAAgGIAVghIAGAAIAAAhIAAAGIAAASgAgIAFIAPAAIAAgXg");
	this.shape_4.setTransform(3.1,20.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPAeIAAgGQAAgHAEgGQADgFAGgFIAGgGQAEgFAAgEQAAgEgDgDQgCgCgDAAQgHAAAAAHIgHAAIAAgBQAAgFAFgEQAEgDAFAAQAGAAAEADQAFAEAAAHQAAAIgHAGIgKAJQgGAHAAAIIAYAAIAAAHg");
	this.shape_5.setTransform(16.1,12.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNATQgEgHAAgMQAAgKAEgIQAEgMAJAAQAKAAAEAMQAEAIAAAKQAAALgEAIQgFAMgJAAQgJAAgEgMgAgIgOQgCAGAAAIQAAAJACAGQADAKAFAAQAGAAADgKQACgGAAgJQAAgIgCgGQgDgKgGAAQgFAAgDAKg");
	this.shape_6.setTransform(21.2,1.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjkipIgZgJAjzhYIgaAAAh5B9IgOAWAjmgEIgYAHAgpCaIgFAZAi7BEIgUARAD0hVIAaAAADmgCIAYAHAB7B8IANAXAC7BFIAUARAArCaIAEAZ");
	this.shape_7.setTransform(0,8.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Line Work
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(1,1,1).p("AEyhIIlVAAIAAiUIFVAAgADpgvQAABvhPBOQhPBPhuAAQhwAAhPhPQhPhOAAhvQAAhEAeg4");
	this.shape_8.setTransform(3.6,4.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	// Layer 4
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAbg6QgCA/gaA2IgZgL");
	this.shape_9.setTransform(26.9,7.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.5,-23.9,98.9,73.2);


(lib.B787EICAS_Gauge_N1Leftcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Indicators
	this.instance = new lib.B787EICAS_Gauge_N1RedLine("synched",0);
	this.instance.setTransform(0,0,1,1,-152.5);

	this.instance_1 = new lib.B787EICAS_Gauge_N1GreenRefTargetN1("synched",0);
	this.instance_1.setTransform(0,0,1,1,-175.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 2
	this.instance_2 = new lib.B787EICAS_Gauge_N1WhitePointer("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNAUQgEgJAAgLQAAgKAEgJQAEgLAJAAQAKAAAEALQAEAJAAAKQAAALgEAJQgFALgJAAQgJAAgEgLgAgIgOQgCAHAAAHQAAAIACAHQADAKAFAAQAGAAADgKQACgHAAgIQAAgHgCgHQgDgJgGAAQgFAAgDAJg");
	this.shape.setTransform(-16.6,-4.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AADAdIgFAAIAAgGIAAAGIgKAAIAAgGIAKAAIAAgsIgKAFIAAgHIALgFIAEAAIAAAzIgFAAIAFAAIAAAGIAAgGIAKAAIAAAGgAADAXg");
	this.shape_1.setTransform(-20.7,-4.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLAaQgFgFAAgIQAAgKAKgFQgIgEAAgJQAAgHAEgDQAFgFAFAAQAGAAAEAFQAFAEAAAGQAAAFgCADIgGAFQAKAEAAALQAAAIgFAFQgFAFgHAAQgGAAgFgFgAgGAEQgDAEAAAEQAAAFADAEQADAEADAAQAEAAADgEQADgDAAgGQAAgEgDgEQgDgEgEAAQgDAAgDAEgAgFgVQgCADAAAEQAAAEACADQADACACAAQADAAADgCQACgDAAgEQAAgEgCgDQgDgCgDgBQgCABgDACg");
	this.shape_2.setTransform(-20.3,7.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPADQAAghARAAQAFAAAEADQAEAEAAAEIgGAAQAAgEgHAAQgFgBgDAJQgDAHAAAIIAAABQAGgGAFAAQAHAAAEAFQADAEAAAIQAAAHgDAGQgFAGgHAAQgQAAAAgcgAgGAEQgCAFAAAGQAAAEAEADQADADACAAQAEAAADgEQACgFAAgEQAAgGgCgCQgDgEgFAAQgDAAgDAEg");
	this.shape_3.setTransform(-10.6,18);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAIAdIAAgSIgVAAIAAgGIAVghIAGAAIAAAhIAAAGIAAASgAgIAFIAPAAIAAgXg");
	this.shape_4.setTransform(3.1,20.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPAeIAAgGQAAgHAEgGQADgFAGgFIAGgGQAEgFAAgEQAAgEgDgDQgCgCgDAAQgHAAAAAHIgHAAIAAgBQAAgFAFgEQAEgDAFAAQAGAAAEADQAFAEAAAHQAAAIgHAGIgKAJQgGAHAAAIIAYAAIAAAHg");
	this.shape_5.setTransform(16.1,12.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNATQgEgHAAgMQAAgKAEgIQAEgMAJAAQAKAAAEAMQAEAIAAAKQAAALgEAIQgFAMgJAAQgJAAgEgMgAgIgOQgCAGAAAIQAAAJACAGQADAKAFAAQAGAAADgKQACgGAAgJQAAgIgCgGQgDgKgGAAQgFAAgDAKg");
	this.shape_6.setTransform(21.2,1.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjkipIgZgJAjzhYIgaAAAh5B9IgOAWAjmgEIgYAHAgpCaIgFAZAi7BEIgUARAD0hVIAaAAADmgCIAYAHAB7B8IANAXAC7BFIAUARAArCaIAEAZ");
	this.shape_7.setTransform(0,8.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2}]}).wait(1));

	// Line Work
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(1,1,1).p("AEyhIIlVAAIAAiUIFVAAgADpgvQAABvhPBOQhPBPhuAAQhwAAhPhPQhPhOAAhvQAAhEAeg4");
	this.shape_8.setTransform(3.6,4.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	// Layer 4
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AgKAAIAVAA");
	this.shape_9.setTransform(28.4,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgaA2IAZAMQAag2AChN");
	this.shape_10.setTransform(27,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.5,-23.9,98.9,73.2);


(lib.B787EICAS_Gauge_N1Left = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Indicators
	this.instance = new lib.B787EICAS_Gauge_N1RedLine("synched",0);
	this.instance.setTransform(0,0,1,1,-152.5);

	this.instance_1 = new lib.B787EICAS_Gauge_N1GreenRefTargetN1("synched",0);
	this.instance_1.setTransform(0,0,1,1,-175.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 2
	this.instance_2 = new lib.B787EICAS_Gauge_N1WhitePointer("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNAUQgEgJAAgLQAAgKAEgJQAEgLAJAAQAKAAAEALQAEAJAAAKQAAALgEAJQgFALgJAAQgJAAgEgLgAgIgOQgCAHAAAHQAAAIACAHQADAKAFAAQAGAAADgKQACgHAAgIQAAgHgCgHQgDgJgGAAQgFAAgDAJg");
	this.shape.setTransform(-16.6,-4.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AADAdIgFAAIAAgGIAAAGIgKAAIAAgGIAKAAIAAgsIgKAFIAAgHIALgFIAEAAIAAAzIgFAAIAFAAIAAAGIAAgGIAKAAIAAAGgAADAXg");
	this.shape_1.setTransform(-20.7,-4.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLAaQgFgFAAgIQAAgKAKgFQgIgEAAgJQAAgHAEgDQAFgFAFAAQAGAAAEAFQAFAEAAAGQAAAFgCADIgGAFQAKAEAAALQAAAIgFAFQgFAFgHAAQgGAAgFgFgAgGAEQgDAEAAAEQAAAFADAEQADAEADAAQAEAAADgEQADgDAAgGQAAgEgDgEQgDgEgEAAQgDAAgDAEgAgFgVQgCADAAAEQAAAEACADQADACACAAQADAAADgCQACgDAAgEQAAgEgCgDQgDgCgDgBQgCABgDACg");
	this.shape_2.setTransform(-20.3,7.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPADQAAghARAAQAFAAAEADQAEAEAAAEIgGAAQAAgEgHAAQgFgBgDAJQgDAHAAAIIAAABQAGgGAFAAQAHAAAEAFQADAEAAAIQAAAHgDAGQgFAGgHAAQgQAAAAgcgAgGAEQgCAFAAAGQAAAEAEADQADADACAAQAEAAADgEQACgFAAgEQAAgGgCgCQgDgEgFAAQgDAAgDAEg");
	this.shape_3.setTransform(-10.6,18);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAIAdIAAgSIgVAAIAAgGIAVghIAGAAIAAAhIAAAGIAAASgAgIAFIAPAAIAAgXg");
	this.shape_4.setTransform(3.1,20.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPAeIAAgGQAAgHAEgGQADgFAGgFIAGgGQAEgFAAgEQAAgEgDgDQgCgCgDAAQgHAAAAAHIgHAAIAAgBQAAgFAFgEQAEgDAFAAQAGAAAEADQAFAEAAAHQAAAIgHAGIgKAJQgGAHAAAIIAYAAIAAAHg");
	this.shape_5.setTransform(16.1,12.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNATQgEgHAAgMQAAgKAEgIQAEgMAJAAQAKAAAEAMQAEAIAAAKQAAALgEAIQgFAMgJAAQgJAAgEgMgAgIgOQgCAGAAAIQAAAJACAGQADAKAFAAQAGAAADgKQACgGAAgJQAAgIgCgGQgDgKgGAAQgFAAgDAKg");
	this.shape_6.setTransform(21.2,1.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjzhYIgaAAAjkipIgZgJAi7BEIgUARAgpCaIgFAZAjmgEIgYAHAh5B9IgOAWAArCaIAEAZAC7BFIAUARAB7B8IANAXADmgCIAYAHAD0hVIAaAA");
	this.shape_7.setTransform(0,8.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2}]}).wait(1));

	// Line Work
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(1,1,1).p("AEyhIIlVAAIAAiUIFVAAgADpgvQAABvhPBOQhPBPhuAAQhwAAhPhPQhPhOAAhvQAAhEAeg4");
	this.shape_8.setTransform(3.6,4.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.5,-23.9,98.9,73.2);


(lib.B787EICAS_Gauge_EGTLeftcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Indicators
	this.instance = new lib.B787EICAS_Gauge_EGTAmberLine("synched",0);
	this.instance.setTransform(0,0,1,1,-164.5);

	this.instance_1 = new lib.B787EICAS_Gauge_EGTRedLine("synched",0);
	this.instance_1.setTransform(0,0,1,1,-152.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9900").ss(1,1,1).p("AgJAaQAIgaALgZ");
	this.shape.setTransform(-25.1,-9.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Line Work
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("AEuhIIlMAAIAAiUIFMAAgADugvQAABvhQBOQhPBPhtAAQhxAAhPhPQhPhOAAhvQAAhEAeg4");
	this.shape_1.setTransform(3.2,4.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.5,-24.3,102.9,73.4);


(lib.B787EICAS_Gauge_EGTLeft = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Indicators
	this.instance = new lib.B787EICAS_Gauge_EGTRedLine("synched",0);
	this.instance.setTransform(0,0,1,1,148.8);

	this.instance_1 = new lib.B787EICAS_Gauge_EGTAmberLine("synched",0);
	this.instance_1.setTransform(0,0,1,1,-164.5);

	this.instance_2 = new lib.B787EICAS_Gauge_EGTRedLine("synched",0);
	this.instance_2.setTransform(0,0,1,1,-152.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9900").ss(1,1,1).p("AgJAaQAIgaALgZ");
	this.shape.setTransform(-25.1,-9.6);

	this.instance_3 = new lib.B787EICAS_Gauge_EGTWhitePointercopy("synched",0);
	this.instance_3.setTransform(0,0,1,1,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Line Work
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("AEuhIIlMAAIAAiUIFMAAgADugvQAABvhQBOQhPBPhtAAQhxAAhPhPQhPhOAAhvQAAhEAeg4");
	this.shape_1.setTransform(3.2,4.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.5,-24.3,102.9,73.4);


(lib.graph = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRAbQgFgKAAgQQAAgPAEgLQAIgOANAAQAIABAGAEQAGAFABAJIgIAAQgBgFgDgDQgEgDgFAAQgIAAgFAMQgDAIAAALQAAAMADAIQAFAMAJAAQAEAAAIgDIAAgVIgPAAIAAgIIAXAAIAAAiQgLAGgJgBQgNAAgIgMg");
	this.shape.setTransform(56.9,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAPAlIgdg5IAAA5IgIAAIAAhJIAIAAIAeA4IAAgFIAAgzIAHAAIAABJg");
	this.shape_1.setTransform(51,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMAlIAAgIIAJAAIAAg5IgJAAIAAgIIAaAAIAAAIIgKAAIAAA5IAKAAIAAAIg");
	this.shape_2.setTransform(45.1,1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAMAlQgEgLgDgGQgEgIgFgHIgIAAIAAAgIgJAAIAAhJIAUAAQAHAAAFAFQAFAGAAAJQAAAOgNAFQAGAEAGAMIAHASgAgMgBIAIAAQAFAAADgEQADgEAAgHQAAgMgKAAIgJAAg");
	this.shape_3.setTransform(39.2,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUAaQgFgKAAgQQAAgOAFgLQAHgOANAAQAOAAAHAOQAFALABAOQgBAQgFAKQgHANgOAAQgNAAgHgNgAgNgSQgDAHAAALQAAAMADAIQAEAMAJAAQAKAAAEgMQADgIAAgMQAAgLgDgHQgEgNgKAAQgJAAgEANg");
	this.shape_4.setTransform(33.3,1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCAlIAAhBIgWAAIAAgIIAxAAIAAAIIgVAAIAABBg");
	this.shape_5.setTransform(27.4,1.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUAaQgFgKAAgQQAAgOAFgLQAHgOANAAQAOAAAHAOQAFALABAOQgBAQgFAKQgHANgOAAQgNAAgHgNgAgNgSQgDAHAAALQAAAMADAIQAEAMAJAAQAKAAAEgMQADgIABgMQgBgLgDgHQgEgNgKAAQgJAAgEANg");
	this.shape_6.setTransform(21.5,1.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AARAlIAAg3IgNAsIgFAAIgQgqIAAA1IgIAAIAAhJIAJAAIAQAyIAQgyIAKAAIAABJg");
	this.shape_7.setTransform(15.6,1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdA5IAAgMQAAgNAHgMQAGgIAKgKIAOgOQAHgIAAgIQAAgHgFgFQgEgEgGAAQgOAAAAAMIgMAAIAAgBQgBgKAJgHQAIgGAKAAQALAAAIAHQAJAHAAANQAAAOgMAMIgVATQgMANABAPIAuAAIAAANg");
	this.shape_8.setTransform(65.1,-17.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgGAJIAAgRIAOAAIAAARg");
	this.shape_9.setTransform(57.1,-12.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgWAxQgJgJAAgPQAAgVASgIQgOgJAAgQQAAgNAIgHQAIgIALAAQAMAAAIAIQAIAIAAAMQAAAJgDAFQgDAFgIAGQASAIAAAVQAAAPgJAJQgJAJgOAAQgNAAgJgJgAgNAIQgFAHAAAJQAAAJAFAHQAGAHAHAAQAJAAAFgHQAGgHAAgJQAAgJgGgHQgGgIgIAAQgHAAgGAIgAgKgpQgEAGAAAHQAAAIAEAFQAEAFAGAAQAHAAAEgFQAFgFAAgIQAAgHgFgGQgEgFgHAAQgGAAgEAFg");
	this.shape_10.setTransform(49,-17.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAFA3IAAgLIATAAIAAALgAgEA3IAAgLIAJAAIAAALgAgXA3IAAgLIATAAIAAALgAgEAsIAAhUIgSAJIAAgNIASgKIAJAAIAABig");
	this.shape_11.setTransform(41.1,-17.2);

	this.instance = new lib.B787EICAS_Gauge_N2Leftcopy("synched",0);
	this.instance.setTransform(36,-7.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00CCFF").s().p("AgPAeIAAgGQAAgHAEgGQADgFAGgFIAGgGQAEgFAAgEQAAgEgDgDQgCgCgDAAQgHAAAAAHIgHAAIAAgBQAAgFAFgEQAEgDAFAAQAGAAAEADQAFAEAAAHQAAAIgHAGIgKAJQgGAHAAAIIAYAAIAAAHg");
	this.shape_12.setTransform(1.7,20.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00CCFF").s().p("AAMAdIgXgsIAAAsIgGAAIAAg5IAGAAIAXAsIAAgEIAAgoIAGAAIAAA5g");
	this.shape_13.setTransform(-2.7,17.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgSA3IAAgFQAAgWANgbQAFgJATghIgxAAIAAgNIA9AAIAAAMIgGALQgeAzAAAjg");
	this.shape_14.setTransform(-13.8,-17.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgHAJIAAgRIAOAAIAAARg");
	this.shape_15.setTransform(-21.7,-12.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgeAFQAAg+AiAAQAJAAAIAGQAHAGABAJIgNAAQAAgKgMAAQgKAAgHARQgFAMAAAPIAAAEQALgNALAAQANAAAHALQAHAIAAAOQAAAOgIALQgHALgOAAQggAAAAg1gAgMAJQgDAIAAAMQAAAHAFAFQAHAGAFAAQAIAAAEgJQAEgHABgJQgBgJgEgHQgEgGgJAAQgIAAgFAJg");
	this.shape_16.setTransform(-29.7,-17.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgeAFQAAg+AiAAQAJAAAIAGQAHAGABAJIgNAAQAAgKgMAAQgKAAgHARQgFAMAAAPIAAAEQALgNALAAQANAAAHALQAHAIAAAOQAAAOgIALQgHALgOAAQggAAAAg1gAgMAJQgEAIABAMQAAAHAFAFQAHAGAFAAQAIAAAEgJQAFgHAAgJQAAgJgFgHQgEgGgJAAQgIAAgFAJg");
	this.shape_17.setTransform(-37.7,-17.2);

	this.instance_1 = new lib.B787EICAS_Gauge_N2Left("synched",0);
	this.instance_1.setTransform(-42.8,-7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.instance},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AsmFhIAArBIZNAAIAALBg");
	this.shape_18.setTransform(0,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.7,-36.7,161.5,70.8);


(lib.B787SynopticENGINEAllPositionscopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Gauges
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWAxQgJgJAAgPQAAgVASgIQgOgJAAgQQAAgNAIgHQAIgIALAAQAMAAAIAIQAIAIAAAMQAAAJgDAFQgDAFgIAGQASAIAAAVQAAAPgJAJQgJAJgOAAQgNAAgJgJgAgNAIQgFAHAAAJQAAAJAFAHQAGAHAHAAQAJAAAFgHQAGgHAAgJQAAgJgGgHQgGgIgIAAQgHAAgGAIgAgKgpQgEAGAAAHQAAAIAEAFQAEAFAGAAQAHAAAEgFQAFgFAAgIQAAgHgFgGQgEgFgHAAQgGAAgEAFg");
	this.shape.setTransform(67.7,-66.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHAJIAAgRIAOAAIAAARg");
	this.shape_1.setTransform(59.7,-61.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAGA3IAAgLIASAAIAAALgAgEA3IAAgLIAKAAIAAALgAgEA3IgTAAIAAgLIATAAIAAhUIgTAJIAAgNIATgKIAKAAIAABiIgKAAIAAALgAAGAsg");
	this.shape_2.setTransform(51.8,-66.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaAlQgHgQAAgVQAAgUAHgQQAJgVARAAQASAAAJAVQAHAQAAAUQAAAVgHAQQgJAVgSAAQgRAAgJgVgAgRgcQgDANAAAPQAAAQADANQAGASALAAQAMAAAGgSQAEgNAAgQQAAgPgEgNQgGgSgMAAQgLAAgGASg");
	this.shape_3.setTransform(-10.5,-66.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGAJIAAgRIANAAIAAARg");
	this.shape_4.setTransform(-18.5,-61.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaAlQgHgQAAgVQAAgUAHgQQAJgVARAAQASAAAJAVQAHAQAAAUQAAAVgHAQQgJAVgSAAQgRAAgJgVgAgRgcQgDANAAAPQAAAQADANQAGASALAAQAMAAAGgSQAEgNAAgQQAAgPgEgNQgGgSgMAAQgLAAgGASg");
	this.shape_5.setTransform(-26.5,-66.2);

	this.instance = new lib.B787EICAS_Gauge_N1Leftcopy3("synched",0);
	this.instance.setTransform(39.2,-56.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTAzQgIgGgBgLIAMAAQABALAPAAQAHAAAFgHQAEgHAAgKQAAgQgMgFQgGgBgTAAIAAg3IAuAAIAAANIgjAAIAAAdQARAAAKAIQAMAGAAAUQAAAPgIAKQgIAMgNAAQgLAAgIgGg");
	this.shape_6.setTransform(67.5,-6.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAGA3IAAgLIASAAIAAALgAgEA3IAAgLIAKAAIAAALgAgEA3IgTAAIAAgLIATAAIAAhUIgSAJIAAgNIATgKIAJAAIAABiIgKAAIAAALgAAGAsg");
	this.shape_7.setTransform(59.6,-6.9);

	this.instance_1 = new lib.B787EICAS_Gauge_EGTLeft("synched",0);
	this.instance_1.setTransform(39.2,3.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgSA3IAAgFQAAgWANgbQAFgJATghIgxAAIAAgNIA9AAIAAAMIgGALQgeAzAAAjg");
	this.shape_8.setTransform(68.5,52.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHAJIAAgRIAOAAIAAARg");
	this.shape_9.setTransform(60.5,57);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgTAzQgIgGgBgLIAMAAQABALAPAAQAHAAAFgHQAEgHAAgKQAAgQgMgFQgGgBgTAAIAAg3IAuAAIAAANIgjAAIAAAdQARAAAKAIQAMAGAAAUQAAAPgIAKQgIAMgNAAQgLAAgIgGg");
	this.shape_10.setTransform(52.5,52.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgdA5IAAgMQAAgNAIgMQAEgIALgKIAOgOQAHgIAAgIQAAgHgFgFQgFgEgFAAQgOAAAAAMIgNAAIAAgBQAAgKAJgHQAIgGAKAAQALAAAJAHQAIAHAAANQAAAOgMAMIgUATQgNANAAAPIAvAAIAAANg");
	this.shape_11.setTransform(44.5,52.2);

	this.instance_2 = new lib.B787EICAS_Gauge_N2Leftcopy3("synched",0);
	this.instance_2.setTransform(39.2,62.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00CCFF").s().p("AgPAeIAAgGQAAgHAEgGQADgFAGgFIAGgGQAEgFAAgEQAAgEgDgDQgCgCgDAAQgHAAAAAHIgHAAIAAgBQAAgFAFgEQAEgDAFAAQAGAAAEADQAFAEAAAHQAAAIgHAGIgKAJQgGAHAAAIIAYAAIAAAHg");
	this.shape_12.setTransform(5,90.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00CCFF").s().p("AAMAdIgXgsIAAAsIgGAAIAAg5IAGAAIAXAsIAAgEIAAgoIAGAAIAAA5g");
	this.shape_13.setTransform(0.6,87.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgaAlQgHgQAAgVQAAgUAHgQQAJgVARAAQASAAAJAVQAHAQAAAUQAAAVgHAQQgJAVgSAAQgRAAgJgVgAgRgcQgDANAAAPQAAAQADANQAGASALAAQAMAAAGgSQAEgNAAgQQAAgPgEgNQgGgSgMAAQgLAAgGASg");
	this.shape_14.setTransform(-10.5,52.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgGAJIAAgRIANAAIAAARg");
	this.shape_15.setTransform(-18.5,57);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgaAlQgHgQAAgVQAAgUAHgQQAJgVARAAQASAAAJAVQAHAQAAAUQAAAVgHAQQgJAVgSAAQgRAAgJgVgAgRgcQgDANAAAPQAAAQADANQAGASALAAQAMAAAGgSQAEgNAAgQQAAgPgEgNQgGgSgMAAQgLAAgGASg");
	this.shape_16.setTransform(-26.5,52.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00CCFF").s().p("AgCAdIAAgzIgRAAIAAgGIAnAAIAAAGIgRAAIAAAzg");
	this.shape_17.setTransform(5.8,27.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00CCFF").s().p("AgNAVQgEgHAAgOQAAgKAEgJQAFgLAKAAQAHAAAEAEQAFAEAAAGIgGAAQAAgDgDgDQgDgCgEAAQgGABgEAIQgCAHAAAIQAAAKACAGQAEAJAHAAIAJgCIAAgRIgLAAIAAgGIARAAIAAAbQgIAEgHAAQgKAAgGgKg");
	this.shape_18.setTransform(1.6,27.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00CCFF").s().p("AgPAdIAAg5IAbAAIAAAGIgVAAIAAATIATAAIAAAEIgTAAIAAAVIAZAAIAAAHg");
	this.shape_19.setTransform(-2.5,27.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00CCFF").s().p("AADAdIAAgGIAAAGIgFAAIAAgGIAFAAIgFAAIAAgsIgKAFIAAgHIALgFIAEAAIAAAzIAKAAIAAAGgAgMAdIAAgGIAKAAIAAAGgAgCAXg");
	this.shape_20.setTransform(2.8,-28.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00CCFF").s().p("AAMAdIgXgsIAAAsIgGAAIAAg5IAGAAIAXAsIAAgEIAAgoIAGAAIAAA5g");
	this.shape_21.setTransform(-1.6,-31.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#33C300").s().p("AgVAbQgGgLAAgQQAAgPAGgLQAIgPANAAQAPAAAIAPQAFALAAAPQAAAQgGALQgHAPgPAAQgNAAgIgPgAgOgUQgDAJgBALQABAMADAJQAFAMAJAAQAKAAAFgMQAEgJgBgMQABgLgEgJQgFgMgKAAQgJAAgFAMg");
	this.shape_22.setTransform(4.3,-89.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#33C300").s().p("AgDAnIAAhFIgWAAIAAgIIA0AAIAAAIIgXAAIAABFg");
	this.shape_23.setTransform(-1.4,-89.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgNAlQgGgFgBgJIAJAAQAAAJALAAQAEAAAEgFQAEgFAAgHQgBgMgIgDQgEAAgOgBIAAgnIAgAAIAAAJIgYAAIAAAVQAMAAAHAGQAJAEAAANQAAALgGAIQgGAIgJAAQgHAAgGgDg");
	this.shape_24.setTransform(-36.6,-88.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAEAnIAAgIIANAAIAAAIgAgDAnIAAgIIAHAAIAAAIgAgDAnIgNAAIAAgIIANAAIAAg7IgNAHIAAgKIANgHIAHAAIAABFIgHAAIAAAIgAAEAfg");
	this.shape_25.setTransform(-42.2,-89.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgCAcIAAgZIgVAAIAAgGIAVAAIAAgYIAFAAIAAAYIAUAAIAAAGIgUAAIAAAZg");
	this.shape_26.setTransform(-48,-87.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgNAVQgEgJAAgMQAAgLAEgJQAGgKAJAAQAHAAAFADQAEAFAAAHIgGAAQAAgEgDgCQgCgCgEAAQgHgBgEAJQgCAHAAAIQAAAKACAGQAEAJAHAAQAJAAAAgJIAGAAIAAABQAAAGgEAEQgFAEgHAAQgJAAgGgKg");
	this.shape_27.setTransform(-29.6,-87.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00CCFF").s().p("AgCAdIAAgzIgRAAIAAgGIAnAAIAAAGIgRAAIAAAzg");
	this.shape_28.setTransform(-59.2,-87.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00CCFF").s().p("AAPAdIgFgQIgTAAIgGAQIgGAAIAUg5IAFAAIASA5gAgHAHIAPAAIgIgZg");
	this.shape_29.setTransform(-63.3,-87.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00CCFF").s().p("AgCAdIAAgzIgRAAIAAgGIAnAAIAAAGIgRAAIAAAzg");
	this.shape_30.setTransform(-67.5,-87.4);

	this.instance_3 = new lib.B787EICAS_Gauge_N2Leftcopy2("synched",0);
	this.instance_3.setTransform(-39.6,62.5);

	this.instance_4 = new lib.B787EICAS_Gauge_EGTLeftcopy("synched",0);
	this.instance_4.setTransform(-39.6,3.2);

	this.instance_5 = new lib.B787EICAS_Gauge_N1Left("synched",0);
	this.instance_5.setTransform(-39.6,-56.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.instance_2},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.instance_1},{t:this.shape_7},{t:this.shape_6},{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AtSPKIAA+TIalAAIAAeTg");
	this.shape_31.setTransform(2.5,1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_31).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.6,-97,170.3,195.5);


(lib.B787SynopticENGINEAllPositions = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Gauges
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQAaQgFgKAAgQQAAgNAFgKQAGgNANAAQAIAAAFAEQAGAFAAAIIgHAAQAAgFgEgDQgDgCgFAAQgIAAgEALQgDAHAAALQAAALADAIQAEALAIAAQAFAAAHgDIAAgUIgOAAIAAgHIAVAAIAAAgQgJAFgJAAQgNAAgHgLg");
	this.shape.setTransform(59.1,70.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAOAjIgcg2IAAA2IgHAAIAAhFIAIAAIAcA1IAAgFIAAgwIAHAAIAABFg");
	this.shape_1.setTransform(53.6,70.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMAjIAAgIIAKAAIAAg2IgKAAIAAgHIAZAAIAAAHIgJAAIAAA2IAJAAIAAAIg");
	this.shape_2.setTransform(47.9,70.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AALAjIgHgQQgDgIgFgGIgIAAIAAAeIgIAAIAAhFIATAAQAGAAAFAFQAFAFgBAJQABANgMAFQAFAEAFALIAIARgAgMgBIAIAAQAEAAADgEQADgDAAgHQAAgMgKAAIgIAAg");
	this.shape_3.setTransform(42.4,70.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTAYQgFgKAAgOQAAgNAFgLQAHgMAMAAQANAAAHAMQAFAKAAAOQAAAOgFAKQgHANgNAAQgMAAgHgNgAgMgSQgDAIAAAKQAAALADAIQAEALAIAAQAJAAAFgLQADgIAAgLQAAgKgDgIQgFgLgJAAQgIAAgEALg");
	this.shape_4.setTransform(36.7,70.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCAjIAAg+IgVAAIAAgHIAvAAIAAAHIgUAAIAAA+g");
	this.shape_5.setTransform(31.2,70.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTAYQgFgKAAgOQAAgNAFgLQAHgMAMAAQANAAAHAMQAFAKAAAOQAAAOgFAKQgHANgNAAQgMAAgHgNgAgMgSQgDAIAAAKQAAALADAIQAEALAIAAQAJAAAFgLQADgIAAgLQAAgKgDgIQgFgLgJAAQgIAAgEALg");
	this.shape_6.setTransform(25.5,70.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAQAjIAAg0IgNApIgEAAIgOgnIAAAyIgIAAIAAhFIAJAAIAPAvIAOgvIAJAAIAABFg");
	this.shape_7.setTransform(20,70.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgeAFQAAg+AjAAQAIAAAIAGQAHAGAAAJIgMAAQABgKgMAAQgLAAgHARQgFAMAAAPIAAAEQAKgNAMAAQANAAAHALQAHAIAAAOQAAAOgHALQgJALgNAAQggAAAAg1gAgMAJQgEAIAAAMQABAHAFAFQAGAGAGAAQAIAAAFgJQADgHAAgJQAAgJgDgHQgFgGgJAAQgIAAgFAJg");
	this.shape_8.setTransform(67.7,-66.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHAJIAAgRIAOAAIAAARg");
	this.shape_9.setTransform(59.7,-61.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgaAlQgHgQAAgVQAAgUAHgQQAJgVARAAQASAAAJAVQAHAQAAAUQAAAVgHAQQgJAVgSAAQgRAAgJgVgAgRgcQgDANAAAPQAAAQADANQAGASALAAQAMAAAGgSQAEgNAAgQQAAgPgEgNQgGgSgMAAQgLAAgGASg");
	this.shape_10.setTransform(51.7,-66.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgaAlQgHgQAAgVQAAgUAHgQQAJgVARAAQASAAAJAVQAHAQAAAUQAAAVgHAQQgJAVgSAAQgRAAgJgVgAgRgcQgDANAAAPQAAAQADANQAGASALAAQAMAAAGgSQAEgNAAgQQAAgPgEgNQgGgSgMAAQgLAAgGASg");
	this.shape_11.setTransform(-10.5,-66.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgGAJIAAgRIANAAIAAARg");
	this.shape_12.setTransform(-18.5,-61.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgaAlQgHgQAAgVQAAgUAHgQQAJgVARAAQASAAAJAVQAHAQAAAUQAAAVgHAQQgJAVgSAAQgRAAgJgVgAgRgcQgDANAAAPQAAAQADANQAGASALAAQAMAAAGgSQAEgNAAgQQAAgPgEgNQgGgSgMAAQgLAAgGASg");
	this.shape_13.setTransform(-26.5,-66.2);

	this.instance = new lib.B787EICAS_Gauge_N1Leftcopy("synched",0);
	this.instance.setTransform(39.2,-56.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTAzQgIgGgBgLIAMAAQABALAPAAQAHAAAFgHQAEgHAAgKQAAgQgMgFQgGgBgTAAIAAg3IAuAAIAAANIgjAAIAAAdQARAAAKAIQAMAGAAAUQAAAPgIAKQgIAMgNAAQgLAAgIgGg");
	this.shape_14.setTransform(67.5,-6.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAGA3IAAgLIASAAIAAALgAgEA3IAAgLIAKAAIAAALgAgEA3IgTAAIAAgLIATAAIAAhUIgSAJIAAgNIATgKIAJAAIAABiIgKAAIAAALgAAGAsg");
	this.shape_15.setTransform(59.6,-6.9);

	this.instance_1 = new lib.B787EICAS_Gauge_EGTLeft("synched",0);
	this.instance_1.setTransform(39.2,3.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgUA1QgIgGAAgKIAMAAQAAAFAEACQADADAFAAQALAAAIgRQAEgNAAgQIAAgCQgKANgMAAQgNAAgIgMQgGgIAAgNQAAgOAHgLQAJgLANAAQARAAAJAUQAGAPAAAWQAAAWgHAPQgJAVgSAAQgLAAgGgFgAgOglQgEAHAAAJQAAAJAEAHQAFAFAJAAQAHAAAEgGQAFgGAAgKQgBgJgEgHQgGgIgGAAQgIAAgFAJg");
	this.shape_16.setTransform(68.5,52.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgHAJIAAgRIAOAAIAAARg");
	this.shape_17.setTransform(60.5,57);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgUA1QgIgGAAgKIAMAAQAAAFAEACQADADAFAAQALAAAIgRQAEgNAAgQIAAgCQgLANgLAAQgNAAgIgMQgGgIAAgNQAAgOAHgLQAJgLANAAQARAAAJAUQAGAPAAAWQAAAWgHAPQgKAVgRAAQgLAAgGgFgAgOglQgEAHAAAJQAAAJAEAHQAFAFAIAAQAHAAAGgGQADgGAAgKQAAgJgEgHQgGgIgGAAQgJAAgEAJg");
	this.shape_18.setTransform(52.5,52.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAGA3IAAgLIASAAIAAALgAgEA3IAAgLIAKAAIAAALgAgEA3IgTAAIAAgLIATAAIAAhUIgTAJIAAgNIATgKIAKAAIAABiIgKAAIAAALgAAGAsg");
	this.shape_19.setTransform(44.6,52.4);

	this.instance_2 = new lib.B787EICAS_Gauge_N2Left("synched",0);
	this.instance_2.setTransform(39.2,62.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00CCFF").s().p("AgPAeIAAgGQAAgHAEgGQADgFAGgFIAGgGQAEgFAAgEQAAgEgDgDQgCgCgDAAQgHAAAAAHIgHAAIAAgBQAAgFAFgEQAEgDAFAAQAGAAAEADQAFAEAAAHQAAAIgHAGIgKAJQgGAHAAAIIAYAAIAAAHg");
	this.shape_20.setTransform(5,90.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00CCFF").s().p("AAMAdIgXgsIAAAsIgGAAIAAg5IAGAAIAXAsIAAgEIAAgoIAGAAIAAA5g");
	this.shape_21.setTransform(0.6,87.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgaAlQgHgQAAgVQAAgUAHgQQAJgVARAAQASAAAJAVQAHAQAAAUQAAAVgHAQQgJAVgSAAQgRAAgJgVgAgRgcQgDANAAAPQAAAQADANQAGASALAAQAMAAAGgSQAEgNAAgQQAAgPgEgNQgGgSgMAAQgLAAgGASg");
	this.shape_22.setTransform(-10.5,52.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgGAJIAAgRIANAAIAAARg");
	this.shape_23.setTransform(-18.5,57);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgaAlQgHgQAAgVQAAgUAHgQQAJgVARAAQASAAAJAVQAHAQAAAUQAAAVgHAQQgJAVgSAAQgRAAgJgVgAgRgcQgDANAAAPQAAAQADANQAGASALAAQAMAAAGgSQAEgNAAgQQAAgPgEgNQgGgSgMAAQgLAAgGASg");
	this.shape_24.setTransform(-26.5,52.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00CCFF").s().p("AgCAdIAAgzIgRAAIAAgGIAnAAIAAAGIgRAAIAAAzg");
	this.shape_25.setTransform(5.8,27.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00CCFF").s().p("AgNAVQgEgHAAgOQAAgKAEgJQAFgLAKAAQAHAAAEAEQAFAEAAAGIgGAAQAAgDgDgDQgDgCgEAAQgGABgEAIQgCAHAAAIQAAAKACAGQAEAJAHAAIAJgCIAAgRIgLAAIAAgGIARAAIAAAbQgIAEgHAAQgKAAgGgKg");
	this.shape_26.setTransform(1.6,27.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00CCFF").s().p("AgPAdIAAg5IAbAAIAAAGIgVAAIAAATIATAAIAAAEIgTAAIAAAVIAZAAIAAAHg");
	this.shape_27.setTransform(-2.5,27.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00CCFF").s().p("AADAdIAAgGIAAAGIgFAAIAAgGIAFAAIgFAAIAAgsIgKAFIAAgHIALgFIAEAAIAAAzIAKAAIAAAGgAgMAdIAAgGIAKAAIAAAGgAgCAXg");
	this.shape_28.setTransform(2.8,-28.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00CCFF").s().p("AAMAdIgXgsIAAAsIgGAAIAAg5IAGAAIAXAsIAAgEIAAgoIAGAAIAAA5g");
	this.shape_29.setTransform(-1.6,-31.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#33C300").s().p("AgVAbQgGgLAAgQQAAgPAGgLQAIgPANAAQAPAAAIAPQAFALAAAPQAAAQgGALQgHAPgPAAQgNAAgIgPgAgOgUQgDAJgBALQABAMADAJQAFAMAJAAQAKAAAFgMQAEgJgBgMQABgLgEgJQgFgMgKAAQgJAAgFAMg");
	this.shape_30.setTransform(4.3,-89.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#33C300").s().p("AgDAnIAAhFIgWAAIAAgIIA0AAIAAAIIgXAAIAABFg");
	this.shape_31.setTransform(-1.4,-89.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgNAlQgGgFgBgJIAJAAQAAAJALAAQAEAAAEgFQAEgFAAgHQgBgMgIgDQgEAAgOgBIAAgnIAgAAIAAAJIgYAAIAAAVQAMAAAHAGQAJAEAAANQAAALgGAIQgGAIgJAAQgHAAgGgDg");
	this.shape_32.setTransform(-36.6,-88.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAEAnIAAgIIANAAIAAAIgAgDAnIAAgIIAHAAIAAAIgAgDAnIgNAAIAAgIIANAAIAAg7IgNAHIAAgKIANgHIAHAAIAABFIgHAAIAAAIgAAEAfg");
	this.shape_33.setTransform(-42.2,-89.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgCAcIAAgZIgVAAIAAgGIAVAAIAAgYIAFAAIAAAYIAUAAIAAAGIgUAAIAAAZg");
	this.shape_34.setTransform(-48,-87.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgNAVQgEgJAAgMQAAgLAEgJQAGgKAJAAQAHAAAFADQAEAFAAAHIgGAAQAAgEgDgCQgCgCgEAAQgHgBgEAJQgCAHAAAIQAAAKACAGQAEAJAHAAQAJAAAAgJIAGAAIAAABQAAAGgEAEQgFAEgHAAQgJAAgGgKg");
	this.shape_35.setTransform(-29.6,-87.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#00CCFF").s().p("AgCAdIAAgzIgRAAIAAgGIAnAAIAAAGIgRAAIAAAzg");
	this.shape_36.setTransform(-59.2,-87.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#00CCFF").s().p("AAPAdIgFgQIgTAAIgGAQIgGAAIAUg5IAFAAIASA5gAgHAHIAPAAIgIgZg");
	this.shape_37.setTransform(-63.3,-87.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#00CCFF").s().p("AgCAdIAAgzIgRAAIAAgGIAnAAIAAAGIgRAAIAAAzg");
	this.shape_38.setTransform(-67.5,-87.4);

	this.instance_3 = new lib.B787EICAS_Gauge_N2Leftcopy2("synched",0);
	this.instance_3.setTransform(-39.6,62.5);

	this.instance_4 = new lib.B787EICAS_Gauge_EGTLeftcopy("synched",0);
	this.instance_4.setTransform(-39.6,3.2);

	this.instance_5 = new lib.B787EICAS_Gauge_N1Left("synched",0);
	this.instance_5.setTransform(-39.6,-56.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.instance_2},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.instance_1},{t:this.shape_15},{t:this.shape_14},{t:this.instance},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AtSPKIAA+TIalAAIAAeTg");
	this.shape_39.setTransform(2.5,1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_39).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.6,-97,170.3,195.5);


// stage content:
(lib.dif04ep04 = function(mode,startPosition,loop) {
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

	// t4
	this.instance = new lib.point_5("synched",0);
	this.instance.setTransform(651.9,199.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(259).to({_off:false},0).to({alpha:1},5).wait(125));

	// arr
	this.instance_1 = new lib.arrow("synched",0);
	this.instance_1.setTransform(510.6,373.6,1,1,-90);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(224).to({_off:false},0).to({x:460.6,alpha:1},5).wait(30).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(124));

	// t3
	this.instance_2 = new lib.point_3("synched",0);
	this.instance_2.setTransform(613.9,175.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(224).to({_off:false},0).to({alpha:1},5).wait(160));

	// t2
	this.instance_3 = new lib.point_2("synched",0);
	this.instance_3.setTransform(625.6,150);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(197).to({_off:false},0).to({alpha:1},5).wait(187));

	// arr
	this.instance_4 = new lib.arrow("synched",0);
	this.instance_4.setTransform(510.6,147.5,1,1,-90);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(192).to({_off:false},0).to({x:460.6,alpha:1},5).wait(62).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(124));

	// panel
	this.instance_5 = new lib.panel("synched",0);
	this.instance_5.setTransform(705.4,383.8,1.217,1.217,0,0,0,97.4,63.3);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.instance_6 = new lib.panelcopy("synched",0);
	this.instance_6.setTransform(705.6,383.8,1.217,1.217,0,0,0,97.4,63.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},187).to({state:[{t:this.instance_5}]},5).to({state:[{t:this.instance_6}]},178).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(187).to({_off:false},0).to({alpha:1},5).to({_off:true},178).wait(19));

	// t1
	this.instance_7 = new lib.point_1("synched",0);
	this.instance_7.setTransform(646.9,124.8);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(172).to({_off:false},0).to({alpha:1},5).wait(212));

	// title
	this.instance_8 = new lib.title("synched",0);
	this.instance_8.setTransform(700.7,101.4,1,1,0,0,0,126.1,12.1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(108).to({_off:false},0).to({alpha:1},5).wait(276));

	// graph2
	this.instance_9 = new lib.B787SynopticENGINEAllPositions("synched",0);
	this.instance_9.setTransform(292,275,1.9,1.9,0,0,0,2.5,0.7);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.instance_10 = new lib.B787SynopticENGINEAllPositionscopy("synched",0);
	this.instance_10.setTransform(292,275,1.9,1.9,0,0,0,2.5,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},103).to({state:[{t:this.instance_9}]},5).to({state:[{t:this.instance_10}]},84).wait(197));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(103).to({_off:false},0).to({alpha:1},5).to({_off:true},84).wait(197));

	// hl
	this.instance_11 = new lib.hl("synched",0);
	this.instance_11.setTransform(591.7,280.4,1,1,0,0,0,69.5,19.8);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(25).to({_off:false},0).to({alpha:1},5).wait(73).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(280));

	// graph
	this.instance_12 = new lib.graph("synched",0);
	this.instance_12.setTransform(500,278.6,2.568,2.568);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(103).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(280));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(500,275,1000,550);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;