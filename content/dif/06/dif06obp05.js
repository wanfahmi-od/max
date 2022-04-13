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
		{src:"images/odu01p02_panel.png", id:"odu01p02_panel"},
		{src:"images/odu01p05_glareshield.png", id:"odu01p05_glareshield"},
		{src:"images/odu01p05_mic.png", id:"odu01p05_mic"},
		{src:"images/odu01p05_pfd.png", id:"odu01p05_pfd"},
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



(lib.odu01p02_panel = function() {
	this.initialize(img.odu01p02_panel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,704,620);


(lib.odu01p05_glareshield = function() {
	this.initialize(img.odu01p05_glareshield);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1858,175);


(lib.odu01p05_mic = function() {
	this.initialize(img.odu01p05_mic);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,626,471);


(lib.odu01p05_pfd = function() {
	this.initialize(img.odu01p05_pfd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,704,620);


(lib.texture = function() {
	this.initialize(img.texture);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.t1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTA7QgKgGgFgLQgFgMAAgOQAAgNAFgKQAFgLAJgHQAJgFALAAQAHgBAGAEQAHAEAFAFIAAguIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgPgJQgIAJAAAQQAAATAIAIQAHAJAJAAQAKAAAHgJQAIgIAAgSQAAgRgIgJQgHgIgLgBQgIABgHAIg");
	this.shape.setTransform(60.7,34.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_1.setTransform(51,35.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgnBBIAAh/IAOAAIAAAMQAGgHAGgEQAGgDAHAAQAMAAAKAGQAIAGAFALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgGAAgHgDQgGgDgEgFIAAAtgAgRgqQgIAJAAASQAAAQAHAJQAIAIAKAAQAIAAAIgJQAIgIgBgRQABgSgIgJQgHgJgJAAQgKAAgHAKg");
	this.shape_2.setTransform(41.3,37.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgnBBIAAh/IAOAAIAAAMQAGgHAGgEQAGgDAHAAQAMAAAKAGQAIAGAFALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgGAAgHgDQgGgDgFgFIAAAtgAgRgqQgIAJAAASQAAAQAHAJQAIAIAKAAQAJAAAHgJQAIgIAAgRQAAgSgIgJQgHgJgJAAQgKAAgHAKg");
	this.shape_3.setTransform(31.3,37.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_4.setTransform(21,35.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgNIAMAAIAAgXIANgJIAAAgIAQAAIAAANIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_5.setTransform(13.6,34.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_6.setTransform(6.4,35.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAJAAAIAFIgFAPQgHgEgFAAQgFAAgDADQgDADgCAGQgDAIAAAKIAAAvg");
	this.shape_7.setTransform(104.7,13.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgMgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_8.setTransform(96,13.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_9.setTransform(88.6,12.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgeAkQgLgNAAgXQAAgVALgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgLAAQgJAAgIAHg");
	this.shape_10.setTransform(81,13.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_11.setTransform(68.5,13.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_12.setTransform(56,13.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_13.setTransform(46,13.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_14.setTransform(36,13.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAGAAQAHAAAJAFIgGAPQgFgEgGAAQgFAAgDADQgEADgCAGQgCAIAAAKIAAAvg");
	this.shape_15.setTransform(28.7,13.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAWBAIAAg7QgBgKgFgGQgEgFgKAAQgFAAgHAEQgFAEgDAFQgDAFAAALIAAAzIgQAAIAAh/IAQAAIAAAvQALgNAPgBQALAAAHAFQAIAEADAHQADAHAAAMIAAA7g");
	this.shape_16.setTransform(20,11.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgdA6QgNgJgHgQQgHgQAAgRQAAgUAIgOQAIgQAOgHQAOgIAQAAQASAAAOAKQANAKAFARIgQAFQgFgOgJgHQgIgGgNAAQgNgBgKAIQgKAHgEAMQgEAMAAAMQAAAPAFANQAFALAJAHQALAFAKAAQAOAAAKgHQAKgJADgQIASAEQgGAVgOALQgOALgUAAQgTAAgNgIg");
	this.shape_17.setTransform(8.6,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,109.2,46.2);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgaA7QgLgIABgPIAPACQABAHAEAEQAGAEAKAAQAJAAAHgEQAFgFADgIQABgEAAgQQgLAMgOAAQgTAAgKgOQgLgOAAgRQAAgNAFgMQAFgLAJgGQAKgGALAAQAQAAAKANIAAgLIAPAAIAABPQAAAVgFAKQgFAJgJAFQgKAFgMAAQgQAAgKgHgAgQgrQgIAIAAARQAAASAIAHQAHAIAJAAQALAAAHgIQAIgHAAgSQAAgRgIgIQgIgJgKAAQgJAAgHAJg");
	this.shape.setTransform(56.7,37.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_1.setTransform(47,35.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGBAIAAhcIANAAIAABcgAgGgtIAAgSIANAAIAAASg");
	this.shape_2.setTransform(40,34);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_3.setTransform(33,35.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_4.setTransform(23,35.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_5.setTransform(12.9,35.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAJAAAIAFIgFAPQgHgEgFAAQgFAAgDADQgDADgCAGQgDAIAAAKIAAAvg");
	this.shape_6.setTransform(5.7,35.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAJAAAIAFIgFAPQgHgEgFAAQgFAAgDADQgDADgCAGQgDAIAAAKIAAAvg");
	this.shape_7.setTransform(104.7,13.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgMgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_8.setTransform(96,13.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_9.setTransform(88.6,12.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgeAkQgLgNAAgXQAAgVALgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgLAAQgJAAgIAHg");
	this.shape_10.setTransform(81,13.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_11.setTransform(68.5,13.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_12.setTransform(56,13.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_13.setTransform(46,13.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_14.setTransform(36,13.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAGAAQAHAAAJAFIgGAPQgFgEgGAAQgFAAgDADQgEADgCAGQgCAIAAAKIAAAvg");
	this.shape_15.setTransform(28.7,13.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAWBAIAAg7QgBgKgFgGQgEgFgKAAQgFAAgHAEQgFAEgDAFQgDAFAAALIAAAzIgQAAIAAh/IAQAAIAAAvQALgNAPgBQALAAAHAFQAIAEADAHQADAHAAAMIAAA7g");
	this.shape_16.setTransform(20,11.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgdA6QgNgJgHgQQgHgQAAgRQAAgUAIgOQAIgQAOgHQAOgIAQAAQASAAAOAKQANAKAFARIgQAFQgFgOgJgHQgIgGgNAAQgNgBgKAIQgKAHgEAMQgEAMAAAMQAAAPAFANQAFALAJAHQALAFAKAAQAOAAAKgHQAKgJADgQIASAEQgGAVgOALQgOALgUAAQgTAAgNgIg");
	this.shape_17.setTransform(8.6,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,109.2,46.2);


(lib.prot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.texture();
	this.instance.setTransform(0,0,100,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1000,550);


(lib.panels = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PNG
	this.instance = new lib.odu01p05_glareshield();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,929.1,87.7);


(lib.LMICPanelcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PNG
	this.instance = new lib.odu01p05_mic();
	this.instance.setTransform(-72.1,17,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.1,17,313,235.5);


(lib.instruction = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAJIAAgQIAQAAIAAAQg");
	this.shape.setTransform(91.1,5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAVBAIAAg7QAAgKgEgFQgGgGgJAAQgFAAgGAEQgHADgCAGQgDAFAAALIAAAzIgPAAIAAh/IAPAAIAAAvQAMgOAOAAQAKABAIAEQAIADADAIQADAHAAAMIAAA7g");
	this.shape_1.setTransform(83.5,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_2.setTransform(74.3,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgBA9QgFgDgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAHABACQAAABABAAQAAAAAAABQAAAAABABQAAAAABAAIAFACIAHgBIACAOIgMABQgIAAgDgCg");
	this.shape_3.setTransform(67.1,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGBAIAAhbIANAAIAABbgAgGgsIAAgTIANAAIAAATg");
	this.shape_4.setTransform(62.5,-0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AASAuIgPg2IgDgQIgSBGIgQAAIgdhbIARAAIAPA0IAFAUIAFgTIAPg1IAOAAIAOA0IAFASIAFgSIAQg0IAQAAIgeBbg");
	this.shape_5.setTransform(54,1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_6.setTransform(42.9,1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AATBAIgdgvIgLAKIAAAlIgQAAIAAh/IAQAAIAABIIAjgkIAUAAIgiAhIAmA6g");
	this.shape_7.setTransform(29.6,-0.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_8.setTransform(20.3,1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_9.setTransform(10.5,1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_10.setTransform(3.5,-0.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_11.setTransform(-2.7,1.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgdAkQgMgNgBgXQABgVAMgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_12.setTransform(-17.5,1.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAWBAIAAg7QAAgKgGgFQgEgGgKAAQgFAAgHAEQgFADgDAGQgDAFAAALIAAAzIgQAAIAAh/IAQAAIAAAvQALgOAPAAQAKABAIAEQAIADADAIQAEAHAAAMIAAA7g");
	this.shape_13.setTransform(-27.5,-0.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgBA9QgFgDgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAHABACQAAABABAAQAAAAAAABQAAAAABABQAAAAABAAIAFACIAHgBIACAOIgMABQgIAAgDgCg");
	this.shape_14.setTransform(-34.9,-0.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgBA9QgFgDgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAHABACQAAABABAAQAAAAAAABQAAAAABABQAAAAABAAIAFACIAHgBIACAOIgMABQgIAAgDgCg");
	this.shape_15.setTransform(-44.9,-0.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_16.setTransform(-51.7,1.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_17.setTransform(-61.5,1.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_18.setTransform(-68.5,-0.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_19.setTransform(-75.5,1.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgYA9QgMgFgHgKQgGgLgBgNIAQgBQACAKAEAGQAEAGAJAEQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgEQgEgFgIgDIgVgHQgRgEgHgBQgKgGgEgHQgFgGAAgKQAAgJAGgJQAFgIALgFQALgEAMAAQANAAALAEQALAFAGAJQAGAJAAAMIgQABQgCgMgHgHQgIgGgOAAQgOAAgHAGQgHAGAAAHQAAAHAFAFQAFAEASAFQAVAEAIAEQALADAGAIQAFAIAAALQAAAKgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape_20.setTransform(-86.6,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bg
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(1,0,0,3).p("AaCCNMg0DAAAIAAkZMA0DAAAg");
	this.shape_21.setTransform(0.3,0);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4C4C4C").s().p("A6BCNIAAkZMA0CAAAIAAEZg");
	this.shape_22.setTransform(0.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-167.3,-15.1,335.2,30.2);


(lib.hl3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(5,0,0,3).p("Ap3sUITvAAIAAYpIzvAAg");
	this.shape.setTransform(87.2,77);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(21.5,-4.5,131.5,163);


(lib.hl2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(5,1,1).p("AitguQAmgbB2gZQBtgXAoAFQAWAOAMAfQAMAfgGAZQgGAahqA6QhsA9gtgPQglgcgVgoQgYgsACgxg");
	this.shape.setTransform(17.5,11.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,39.9,28.7);


(lib.hl_mccopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(5,1,1).p("AD/AAQAABphLBLQhLBLhpAAQhoAAhLhLQhLhLAAhpQAAhoBLhLQBLhLBoAAQBpAABLBLQBLBLAABog");
	this.shape.setTransform(253.1,495.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(225.1,467.7,56,56);


(lib.hl_mccopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(5,1,1).p("AD/AAQAABphLBLQhLBLhpAAQhoAAhLhLQhLhLAAhpQAAhoBLhLQBLhLBoAAQBpAABLBLQBLBLAABog");
	this.shape.setTransform(253.1,495.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(225.1,467.7,56,56);


(lib.hl_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(5,1,1).p("AD/AAQAABphLBLQhLBLhpAAQhoAAhLhLQhLhLAAhpQAAhoBLhLQBLhLBoAAQBpAABLBLQBLBLAABog");
	this.shape.setTransform(253.1,495.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(225.1,467.7,56,56);


(lib.errMsg_trycopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgVBAIAEgSIARAAIgDASgAgLAfIAKhEIAEgaIATAAIgGAdIgRBBg");
	this.shape.setTransform(217,18.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAOAvIAMg5IACgNQAAgEgDgDQgDgDgGAAQgMAAgIAJQgJAIgFAUIgJArIgQAAIAThbIAPAAIgEAQQAKgJAGgFQAIgEAJAAQALAAAGAGQAHAGAAAKQAAAGgCALIgMA2g");
	this.shape_1.setTransform(208.8,19.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUBAIAUhcIAOAAIgSBcgAABgtIAEgSIAQAAIgEASg");
	this.shape_2.setTransform(202.4,18.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgiApQgIgIAAgMQAAgIAEgGQADgGAGgBQAGgEAJgBQAFgCANAAQAPgBAGgCQACgHAAgEQAAgGgEgDQgFgEgLAAQgIAAgGAEQgHAFgDAIIgQgCQAFgNALgIQALgHAOAAQARAAAKAIQAIAGAAAKQAAAIgCAJIgFAWQgDALAAAHIACAMIgQAAIgCgLQgIAHgIADQgFADgJAAQgNAAgIgHgAAQABIgNABQgMACgGACQgFABgDAFQgDAEAAAFQAAAGAFAFQAEAEAJAAQAIAAAFgEQAHgEAEgIQAFgHACgNIgHABg");
	this.shape_3.setTransform(194.9,19.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgeA/QgJgDgEgGQgEgFAAgHIABgFIAQABQAAAGABACQABAEADABQAFACAHAAQANAAAGgIQAEgEAEgRIABgIQgNAMgLAAQgPAAgJgKQgKgLAAgQQAAgQAIgNQAHgOAKgGQALgHAJAAQASAAALASIADgQIAOAAIgTBYQgDAPgFAJQgFAIgJAEQgHAFgLAAQgMAAgHgDgAgHgxQgGADgEAHQgFAGgCAIQgCAKgBAEQAAAKACACQADAIAFADQAFADAFABQAHgBAHgFQAIgGAFgJQAEgMABgKQgBgLgGgHQgGgHgKAAQgEAAgFADg");
	this.shape_4.setTransform(185.1,21.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAoBAIgGglIgyAAIgVAlIgTAAIBHh/IAUAAIAWB/gAAKgWIgTAjIApAAIgFgdQgDgUgBgNQgEALgJAQg");
	this.shape_5.setTransform(173.1,18.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgxA/IABgPIAKACQAEAAAEgCQADgDAFgIIAFgJIgPhcIAPAAIAHAvIAEAaIAnhJIARAAIg6BoQgIAPgHAFQgHAFgIAAQgFAAgGgCg");
	this.shape_6.setTransform(158.8,21.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AghAvIAThbIAOAAIgEATQAGgLAGgFQAHgFAIAAQAEAAAHADIgGAPQgEgDgFAAQgJAAgIAJQgHAKgFAWIgIAlg");
	this.shape_7.setTransform(151.8,19.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AggBAIAXhwIgqAAIADgPIBkAAIgDAPIgqAAIgWBwg");
	this.shape_8.setTransform(144.2,18.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgYAsQgIgFgFgJQgFgKAAgLQABgNAGgPQAIgOAKgHQAMgHALAAQARAAAKAKQAKALAAARIgBANIhDAAIgBAEQAAAOAHAGQAFAHAJAAQAHAAAHgFQAIgFAFgKIAPABQgEAMgLAKQgMAKgPAAQgLAAgIgEgAgKgcQgIAHgFAOIAyAAIABgDQAAgMgGgGQgGgHgJAAQgJAAgIAHg");
	this.shape_9.setTransform(127,19.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgdAoQgLgIAAgSIAQgBQAAAHACAFQACAFAGADQAGADAHAAQAJAAAFgEQAFgEAAgGQAAgEgDgEQgDgEgMgFIgPgGQgGgDgDgFQgDgFAAgGQAAgLAJgIQAJgIAOAAQARAAAKAIQAJAIAAANIgQABQAAgIgGgFQgFgFgKAAQgHAAgEAEQgFAEAAAEQAAAEAEAEQADACAJAFQASAIAFACQAHAIAAAKQAAAHgEAHQgEAGgJAEQgJAEgKAAQgQAAgLgIg");
	this.shape_10.setTransform(117.6,19.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgiApQgIgIAAgMQAAgIAEgGQADgGAGgBQAGgEAJgBQAFgCANAAQAPgBAGgCQACgHAAgEQAAgGgEgDQgFgEgLAAQgIAAgGAEQgHAFgDAIIgQgCQAFgNALgIQALgHAOAAQARAAAKAIQAIAGAAAKQAAAIgCAJIgFAWQgDALAAAHIACAMIgQAAIgCgLQgIAHgIADQgFADgJAAQgNAAgIgHgAAQABIgNABQgMACgGACQgFABgDAFQgDAEAAAFQAAAGAFAFQAEAEAJAAQAIAAAFgEQAHgEAEgIQAFgHACgNIgHABg");
	this.shape_11.setTransform(107.9,19.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgYAsQgJgFgEgJQgEgKgBgLQAAgNAIgPQAGgOAMgHQALgHALAAQARAAAKAKQAKALAAARIgBANIhDAAIAAAEQgBAOAHAGQAFAHAJAAQAGAAAIgFQAIgFAEgKIAQABQgEAMgMAKQgMAKgOAAQgLAAgIgEgAgKgcQgIAHgFAOIAyAAIABgDQAAgMgGgGQgGgHgJAAQgJAAgIAHg");
	this.shape_12.setTransform(98,19.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgUBAIAZh/IAQAAIgZB/g");
	this.shape_13.setTransform(91.4,18.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ag6BAIAbh/IA0AAQAPAAAGAEQAIADAEAHQAFAIgBAKQAAAIgCAIQgEAJgFAEQgFAEgFADIgLAEQgMACgNABIgeAAIgLA0gAgagBIAbAAQAQAAAHgEQAJgDAEgHQAFgIgBgIQAAgGgCgEQgDgEgEgCQgFgCgMAAIgfAAg");
	this.shape_14.setTransform(83.4,18.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,0,0,3).p("AW0CDMgtnAAAIAAkFMAtnAAAg");
	this.shape_15.setTransform(147.8,19);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("A2zCDIAAkFMAtnAAAIAAEFg");
	this.shape_16.setTransform(147.8,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.8,4.9,294,28.3);


(lib.errMsg_trycopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgVBAIAEgSIARAAIgDASgAgLAfIAKhEIAEgaIATAAIgGAdIgRBBg");
	this.shape.setTransform(217,18.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAOAvIAMg5IACgNQAAgEgDgDQgDgDgGAAQgMAAgIAJQgJAIgFAUIgJArIgQAAIAThbIAPAAIgEAQQAKgJAGgFQAIgEAJAAQALAAAGAGQAHAGAAAKQAAAGgCALIgMA2g");
	this.shape_1.setTransform(208.8,19.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUBAIAUhcIAOAAIgSBcgAABgtIAEgSIAQAAIgEASg");
	this.shape_2.setTransform(202.4,18.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgiApQgIgIAAgMQAAgIAEgGQADgGAGgBQAGgEAJgBQAFgCANAAQAPgBAGgCQACgHAAgEQAAgGgEgDQgFgEgLAAQgIAAgGAEQgHAFgDAIIgQgCQAFgNALgIQALgHAOAAQARAAAKAIQAIAGAAAKQAAAIgCAJIgFAWQgDALAAAHIACAMIgQAAIgCgLQgIAHgIADQgFADgJAAQgNAAgIgHgAAQABIgNABQgMACgGACQgFABgDAFQgDAEAAAFQAAAGAFAFQAEAEAJAAQAIAAAFgEQAHgEAEgIQAFgHACgNIgHABg");
	this.shape_3.setTransform(194.9,19.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgeA/QgJgDgEgGQgEgFAAgHIABgFIAQABQAAAGABACQABAEADABQAFACAHAAQANAAAGgIQAEgEAEgRIABgIQgNAMgLAAQgPAAgJgKQgKgLAAgQQAAgQAIgNQAHgOAKgGQALgHAJAAQASAAALASIADgQIAOAAIgTBYQgDAPgFAJQgFAIgJAEQgHAFgLAAQgMAAgHgDgAgHgxQgGADgEAHQgFAGgCAIQgCAKgBAEQAAAKACACQADAIAFADQAFADAFABQAHgBAHgFQAIgGAFgJQAEgMABgKQgBgLgGgHQgGgHgKAAQgEAAgFADg");
	this.shape_4.setTransform(185.1,21.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAoBAIgGglIgyAAIgVAlIgTAAIBHh/IAUAAIAWB/gAAKgWIgTAjIApAAIgFgdQgDgUgBgNQgEALgJAQg");
	this.shape_5.setTransform(173.1,18.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgxA/IABgPIAKACQAEAAAEgCQADgDAFgIIAFgJIgPhcIAPAAIAHAvIAEAaIAnhJIARAAIg6BoQgIAPgHAFQgHAFgIAAQgFAAgGgCg");
	this.shape_6.setTransform(158.8,21.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AghAvIAThbIAOAAIgEATQAGgLAGgFQAHgFAIAAQAEAAAHADIgGAPQgEgDgFAAQgJAAgIAJQgHAKgFAWIgIAlg");
	this.shape_7.setTransform(151.8,19.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AggBAIAXhwIgqAAIADgPIBkAAIgDAPIgqAAIgWBwg");
	this.shape_8.setTransform(144.2,18.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgYAsQgIgFgFgJQgFgKAAgLQABgNAGgPQAIgOAKgHQAMgHALAAQARAAAKAKQAKALAAARIgBANIhDAAIgBAEQAAAOAHAGQAFAHAJAAQAHAAAHgFQAIgFAFgKIAPABQgEAMgLAKQgMAKgPAAQgLAAgIgEgAgKgcQgIAHgFAOIAyAAIABgDQAAgMgGgGQgGgHgJAAQgJAAgIAHg");
	this.shape_9.setTransform(127,19.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgdAoQgLgIAAgSIAQgBQAAAHACAFQACAFAGADQAGADAHAAQAJAAAFgEQAFgEAAgGQAAgEgDgEQgDgEgMgFIgPgGQgGgDgDgFQgDgFAAgGQAAgLAJgIQAJgIAOAAQARAAAKAIQAJAIAAANIgQABQAAgIgGgFQgFgFgKAAQgHAAgEAEQgFAEAAAEQAAAEAEAEQADACAJAFQASAIAFACQAHAIAAAKQAAAHgEAHQgEAGgJAEQgJAEgKAAQgQAAgLgIg");
	this.shape_10.setTransform(117.6,19.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgiApQgIgIAAgMQAAgIAEgGQADgGAGgBQAGgEAJgBQAFgCANAAQAPgBAGgCQACgHAAgEQAAgGgEgDQgFgEgLAAQgIAAgGAEQgHAFgDAIIgQgCQAFgNALgIQALgHAOAAQARAAAKAIQAIAGAAAKQAAAIgCAJIgFAWQgDALAAAHIACAMIgQAAIgCgLQgIAHgIADQgFADgJAAQgNAAgIgHgAAQABIgNABQgMACgGACQgFABgDAFQgDAEAAAFQAAAGAFAFQAEAEAJAAQAIAAAFgEQAHgEAEgIQAFgHACgNIgHABg");
	this.shape_11.setTransform(107.9,19.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgYAsQgJgFgEgJQgEgKgBgLQAAgNAIgPQAGgOAMgHQALgHALAAQARAAAKAKQAKALAAARIgBANIhDAAIAAAEQgBAOAHAGQAFAHAJAAQAGAAAIgFQAIgFAEgKIAQABQgEAMgMAKQgMAKgOAAQgLAAgIgEgAgKgcQgIAHgFAOIAyAAIABgDQAAgMgGgGQgGgHgJAAQgJAAgIAHg");
	this.shape_12.setTransform(98,19.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgUBAIAZh/IAQAAIgZB/g");
	this.shape_13.setTransform(91.4,18.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ag6BAIAbh/IA0AAQAPAAAGAEQAIADAEAHQAFAIgBAKQAAAIgCAIQgEAJgFAEQgFAEgFADIgLAEQgMACgNABIgeAAIgLA0gAgagBIAbAAQAQAAAHgEQAJgDAEgHQAFgIgBgIQAAgGgCgEQgDgEgEgCQgFgCgMAAIgfAAg");
	this.shape_14.setTransform(83.4,18.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,0,0,3).p("AW0CDMgtnAAAIAAkFMAtnAAAg");
	this.shape_15.setTransform(147.8,19);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("A2zCDIAAkFMAtnAAAIAAEFg");
	this.shape_16.setTransform(147.8,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.8,4.9,294,28.3);


(lib.errMsg_try = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgVBAIAEgSIARAAIgDASgAgLAfIAKhEIAEgaIATAAIgGAdIgRBBg");
	this.shape.setTransform(217,18.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAOAvIAMg5IACgNQAAgEgDgDQgDgDgGAAQgMAAgIAJQgJAIgFAUIgJArIgQAAIAThbIAPAAIgEAQQAKgJAGgFQAIgEAJAAQALAAAGAGQAHAGAAAKQAAAGgCALIgMA2g");
	this.shape_1.setTransform(208.8,19.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUBAIAUhcIAOAAIgSBcgAABgtIAEgSIAQAAIgEASg");
	this.shape_2.setTransform(202.4,18.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgiApQgIgIAAgMQAAgIAEgGQADgGAGgBQAGgEAJgBQAFgCANAAQAPgBAGgCQACgHAAgEQAAgGgEgDQgFgEgLAAQgIAAgGAEQgHAFgDAIIgQgCQAFgNALgIQALgHAOAAQARAAAKAIQAIAGAAAKQAAAIgCAJIgFAWQgDALAAAHIACAMIgQAAIgCgLQgIAHgIADQgFADgJAAQgNAAgIgHgAAQABIgNABQgMACgGACQgFABgDAFQgDAEAAAFQAAAGAFAFQAEAEAJAAQAIAAAFgEQAHgEAEgIQAFgHACgNIgHABg");
	this.shape_3.setTransform(194.9,19.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgeA/QgJgDgEgGQgEgFAAgHIABgFIAQABQAAAGABACQABAEADABQAFACAHAAQANAAAGgIQAEgEAEgRIABgIQgNAMgLAAQgPAAgJgKQgKgLAAgQQAAgQAIgNQAHgOAKgGQALgHAJAAQASAAALASIADgQIAOAAIgTBYQgDAPgFAJQgFAIgJAEQgHAFgLAAQgMAAgHgDgAgHgxQgGADgEAHQgFAGgCAIQgCAKgBAEQAAAKACACQADAIAFADQAFADAFABQAHgBAHgFQAIgGAFgJQAEgMABgKQgBgLgGgHQgGgHgKAAQgEAAgFADg");
	this.shape_4.setTransform(185.1,21.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAoBAIgGglIgyAAIgVAlIgTAAIBHh/IAUAAIAWB/gAAKgWIgTAjIApAAIgFgdQgDgUgBgNQgEALgJAQg");
	this.shape_5.setTransform(173.1,18.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgxA/IABgPIAKACQAEAAAEgCQADgDAFgIIAFgJIgPhcIAPAAIAHAvIAEAaIAnhJIARAAIg6BoQgIAPgHAFQgHAFgIAAQgFAAgGgCg");
	this.shape_6.setTransform(158.8,21.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AghAvIAThbIAOAAIgEATQAGgLAGgFQAHgFAIAAQAEAAAHADIgGAPQgEgDgFAAQgJAAgIAJQgHAKgFAWIgIAlg");
	this.shape_7.setTransform(151.8,19.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AggBAIAXhwIgqAAIADgPIBkAAIgDAPIgqAAIgWBwg");
	this.shape_8.setTransform(144.2,18.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgYAsQgIgFgFgJQgFgKAAgLQABgNAGgPQAIgOAKgHQAMgHALAAQARAAAKAKQAKALAAARIgBANIhDAAIgBAEQAAAOAHAGQAFAHAJAAQAHAAAHgFQAIgFAFgKIAPABQgEAMgLAKQgMAKgPAAQgLAAgIgEgAgKgcQgIAHgFAOIAyAAIABgDQAAgMgGgGQgGgHgJAAQgJAAgIAHg");
	this.shape_9.setTransform(127,19.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgdAoQgLgIAAgSIAQgBQAAAHACAFQACAFAGADQAGADAHAAQAJAAAFgEQAFgEAAgGQAAgEgDgEQgDgEgMgFIgPgGQgGgDgDgFQgDgFAAgGQAAgLAJgIQAJgIAOAAQARAAAKAIQAJAIAAANIgQABQAAgIgGgFQgFgFgKAAQgHAAgEAEQgFAEAAAEQAAAEAEAEQADACAJAFQASAIAFACQAHAIAAAKQAAAHgEAHQgEAGgJAEQgJAEgKAAQgQAAgLgIg");
	this.shape_10.setTransform(117.6,19.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgiApQgIgIAAgMQAAgIAEgGQADgGAGgBQAGgEAJgBQAFgCANAAQAPgBAGgCQACgHAAgEQAAgGgEgDQgFgEgLAAQgIAAgGAEQgHAFgDAIIgQgCQAFgNALgIQALgHAOAAQARAAAKAIQAIAGAAAKQAAAIgCAJIgFAWQgDALAAAHIACAMIgQAAIgCgLQgIAHgIADQgFADgJAAQgNAAgIgHgAAQABIgNABQgMACgGACQgFABgDAFQgDAEAAAFQAAAGAFAFQAEAEAJAAQAIAAAFgEQAHgEAEgIQAFgHACgNIgHABg");
	this.shape_11.setTransform(107.9,19.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgYAsQgJgFgEgJQgEgKgBgLQAAgNAIgPQAGgOAMgHQALgHALAAQARAAAKAKQAKALAAARIgBANIhDAAIAAAEQgBAOAHAGQAFAHAJAAQAGAAAIgFQAIgFAEgKIAQABQgEAMgMAKQgMAKgOAAQgLAAgIgEgAgKgcQgIAHgFAOIAyAAIABgDQAAgMgGgGQgGgHgJAAQgJAAgIAHg");
	this.shape_12.setTransform(98,19.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgUBAIAZh/IAQAAIgZB/g");
	this.shape_13.setTransform(91.4,18.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ag6BAIAbh/IA0AAQAPAAAGAEQAIADAEAHQAFAIgBAKQAAAIgCAIQgEAJgFAEQgFAEgFADIgLAEQgMACgNABIgeAAIgLA0gAgagBIAbAAQAQAAAHgEQAJgDAEgHQAFgIgBgIQAAgGgCgEQgDgEgEgCQgFgCgMAAIgfAAg");
	this.shape_14.setTransform(83.4,18.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,0,0,3).p("AW0CDMgtnAAAIAAkFMAtnAAAg");
	this.shape_15.setTransform(147.8,19);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("A2zCDIAAkFMAtnAAAIAAEFg");
	this.shape_16.setTransform(147.8,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.8,4.9,294,28.3);


(lib.errMsg_selectcopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgVBAIAEgSIARAAIgDASgAgLAfIAKhEIAEgaIATAAIgGAdIgRBBg");
	this.shape.setTransform(257.5,18.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgiApQgIgIAAgMQAAgIAEgGQADgGAGgBQAGgEAJgBQAFgCANAAQAPgBAGgCQACgHAAgEQAAgGgEgDQgFgEgLAAQgIAAgGAEQgHAFgDAIIgQgCQAFgNALgIQALgHAOAAQARAAAKAIQAIAGAAAKQAAAIgCAJIgFAWQgDALAAAHIACAMIgQAAIgCgLQgIAHgIADQgFADgJAAQgNAAgIgHgAAQABIgNABQgMACgGACQgFABgDAFQgDAEAAAFQAAAGAFAFQAEAEAJAAQAIAAAFgEQAHgEAEgIQAFgHACgNIgHABg");
	this.shape_1.setTransform(249.4,19.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYAsQgIgFgFgJQgFgKAAgLQABgNAGgPQAIgOAKgHQAMgHALAAQARAAAKAKQAKALAAARIgBANIhDAAIgBAEQAAAOAHAGQAFAHAJAAQAHAAAHgFQAIgFAFgKIAPABQgEAMgLAKQgMAKgPAAQgLAAgIgEgAgKgcQgIAHgFAOIAyAAIABgDQAAgMgGgGQgGgHgJAAQgJAAgIAHg");
	this.shape_2.setTransform(239.5,19.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AghAvIAThbIAOAAIgEATQAGgLAGgFQAHgFAIAAQAEAAAHADIgGAPQgEgDgFAAQgJAAgIAJQgHAKgFAWIgIAlg");
	this.shape_3.setTransform(232.3,19.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAoBAIgGglIgyAAIgVAlIgTAAIBHh/IAUAAIAWB/gAAKgWIgTAjIApAAIgFgdQgDgUgBgNQgEALgJAQg");
	this.shape_4.setTransform(221.6,18.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgmA4QgJgKAAgTQAAgRAGgMQAIgOAKgIQAKgHALAAQAQABAJAQIAKgyIAQAAIgbB/IgPAAIADgOQgMAQgPAAQgNAAgIgJgAgLgPQgFADgEAGQgGAGgCAIQgDAJgBAHQAAAKACAFQACAGAFADQAFAFAGAAQALAAAHgMQAMgPgBgWQABgJgHgGQgFgHgHABQgFAAgFACg");
	this.shape_5.setTransform(207.1,18.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgYAsQgJgFgEgJQgFgKABgLQAAgNAGgPQAIgOAKgHQAMgHALAAQARAAAKAKQAJALAAARIgBANIhCAAIgBAEQABAOAFAGQAGAHAJAAQAGAAAIgFQAIgFAFgKIAPABQgDAMgMAKQgNAKgOAAQgKAAgJgEgAgKgcQgJAHgDAOIAxAAIABgDQAAgMgGgGQgGgHgKAAQgIAAgIAHg");
	this.shape_6.setTransform(196.5,19.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgSA7QgFgDABgGIACgPIALg0IgMAAIACgMIANAAIAFgXIAQgLIgIAiIARAAIgDAMIgQAAIgIAyIgDAMQAAABABAAQAAABAAAAQAAABAAAAQABABAAAAQABABADAAIAIAAIgCAMIgJACQgJAAgGgFg");
	this.shape_7.setTransform(189.7,18.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAOBAIAMg4IADgOQAAgFgEgDQgDgCgGAAQgJgBgHAFQgGAEgFAIQgEAHgEARIgIAoIgQAAIAbh/IAQAAIgLAxQAKgIAFgDQAIgFAIAAQAMAAAGAHQAGAGAAAKIgDAQIgLA3g");
	this.shape_8.setTransform(181.3,18.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgeA/QgJgDgEgGQgEgFAAgHIABgFIAQABQAAAGABACQABAEADABQAFACAHAAQANAAAGgIQAEgEAEgRIABgIQgNAMgLAAQgPAAgJgKQgKgLAAgQQAAgQAIgNQAHgOAKgGQALgHAJAAQASAAALASIADgQIAOAAIgTBYQgDAPgFAJQgFAIgJAEQgHAFgLAAQgMAAgHgDgAgHgxQgGADgEAHQgFAGgCAIQgCAKgBAEQAAAKACACQADAIAFADQAFADAFABQAHgBAHgFQAIgGAFgJQAEgMABgKQgBgLgGgHQgGgHgKAAQgEAAgFADg");
	this.shape_9.setTransform(171.6,21.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgUBAIAUhcIAOAAIgSBcgAABgtIAEgSIAQAAIgEASg");
	this.shape_10.setTransform(164.9,18.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgUBAIAZh/IAQAAIgZB/g");
	this.shape_11.setTransform(160.9,18.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAOBAIAMg4IADgOQAAgFgEgDQgDgCgGAAQgIgBgIAFQgGAEgFAIQgEAHgEARIgIAoIgQAAIAbh/IAQAAIgLAxQAKgIAFgDQAHgFAJAAQAMAAAGAHQAGAGAAAKIgDAQIgLA3g");
	this.shape_12.setTransform(153.3,18.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgfA/QgIgDgEgGQgEgFAAgHIABgFIAPABQAAAGACACQABAEADABQAFACAHAAQANAAAGgIQAEgEAEgRIABgIQgNAMgLAAQgPAAgJgKQgKgLAAgQQABgQAHgNQAHgOALgGQAKgHAJAAQATAAAJASIAEgQIAOAAIgTBYQgDAPgFAJQgFAIgIAEQgIAFgLAAQgLAAgJgDgAgHgxQgFADgFAHQgEAGgDAIQgDAKABAEQAAAKABACQADAIAFADQAFADAFABQAHgBAHgFQAIgGAFgJQAEgMABgKQgBgLgGgHQgGgHgKAAQgDAAgGADg");
	this.shape_13.setTransform(143.6,21.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgUBAIAUhcIAOAAIgSBcgAABgtIAEgSIAQAAIgEASg");
	this.shape_14.setTransform(136.9,18.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAUBAIAMg9IhAAAIgNA9IgRAAIAbh/IAQAAIgLA1IBCAAIALg1IARAAIgbB/g");
	this.shape_15.setTransform(128.4,18.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgYAsQgJgFgEgJQgEgKgBgLQAAgNAIgPQAGgOAMgHQALgHALAAQARAAAKAKQAKALAAARIgBANIhDAAIAAAEQgBAOAHAGQAFAHAJAAQAGAAAIgFQAIgFAEgKIAQABQgEAMgMAKQgMAKgOAAQgLAAgIgEgAgKgcQgIAHgFAOIAyAAIABgDQAAgMgGgGQgGgHgJAAQgJAAgIAHg");
	this.shape_16.setTransform(111.5,19.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAOBAIAMg4IADgOQgBgFgDgDQgDgCgGAAQgJgBgHAFQgGAEgFAIQgEAHgEARIgIAoIgQAAIAbh/IAQAAIgLAxQAKgIAFgDQAIgFAIAAQAMAAAGAHQAGAGAAAKIgDAQIgLA3g");
	this.shape_17.setTransform(101.3,18.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgSA7QgEgDgBgGIADgPIALg0IgNAAIADgMIANAAIAEgXIARgLIgHAiIAPAAIgDAMIgPAAIgJAyIgBAMQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAQABABADAAIAJAAIgDAMIgJACQgKAAgFgFg");
	this.shape_18.setTransform(94.7,18.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgSA7QgEgDAAgGIACgPIALg0IgNAAIADgMIANAAIAEgXIARgLIgIAiIAQAAIgCAMIgQAAIgIAyIgCAMQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAQACABACAAIAJAAIgDAMIgJACQgKAAgFgFg");
	this.shape_19.setTransform(84.7,18.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgeAnQgJgKAAgSQgBgNAHgPQAFgPAMgHQAMgIAMAAQAPAAAIAIQAKAJgBAOIgPABQAAgJgFgFQgGgFgIAAQgHAAgIAGQgHAGgEAMQgDALAAALQgBAMAGAGQAFAGAIAAQAFAAAIgGQAHgGAEgMIAQACQgGARgLAJQgLAIgMAAQgPAAgKgJg");
	this.shape_20.setTransform(77.4,19.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgYAsQgIgFgFgJQgEgKgBgLQAAgNAIgPQAHgOAKgHQAMgHALAAQARAAAKAKQAKALAAARIgBANIhDAAIgBAEQAAAOAHAGQAFAHAJAAQAGAAAIgFQAIgFAEgKIAQABQgEAMgMAKQgLAKgPAAQgLAAgIgEgAgKgcQgIAHgFAOIAyAAIABgDQAAgMgGgGQgGgHgJAAQgJAAgIAHg");
	this.shape_21.setTransform(67.5,19.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgUBAIAZh/IAQAAIgZB/g");
	this.shape_22.setTransform(60.9,18.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgYAsQgJgFgEgJQgFgKABgLQAAgNAGgPQAIgOAKgHQAMgHALAAQARAAAKAKQAJALAAARIgBANIhCAAIgBAEQABAOAFAGQAHAHAIAAQAGAAAIgFQAIgFAFgKIAPABQgDAMgMAKQgNAKgOAAQgLAAgIgEgAgKgcQgJAHgDAOIAyAAIAAgDQAAgMgGgGQgGgHgKAAQgIAAgIAHg");
	this.shape_23.setTransform(53.5,19.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgnA5QgOgKAAgZIARgBIAAAEQAAAIAEAGQADAGAIADQAIAEALAAQANAAAIgHQAIgGAAgKQAAgFgEgFQgEgGgTgIQgOgFgGgDQgIgGgEgGQgFgHAAgJQAAgKAGgIQAFgHALgFQAKgEALAAQAQAAALAFQALAGAFAIQAFAJAAAIIAAADIgRABIgBgIQgCgGgEgDQgDgEgHgDQgGgBgIAAQgMgBgIAHQgGAEAAAIQAAAFACAEQADADAGAFIAUAKIATAHQAHAFAEAGQAEAHAAAJQAAAKgHAIQgGAJgLAGQgLAEgNAAQgWAAgOgJg");
	this.shape_24.setTransform(42.9,18.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(1,0,0,3).p("AW0CDMgtnAAAIAAkFMAtnAAAg");
	this.shape_25.setTransform(147.8,19);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("A2zCDIAAkFMAtnAAAIAAEFg");
	this.shape_26.setTransform(147.8,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.8,4.9,294,28.3);


(lib.errMsg_selectcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgVBAIAEgSIARAAIgDASgAgLAfIAKhEIAEgaIATAAIgGAdIgRBBg");
	this.shape.setTransform(257.5,18.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgiApQgIgIAAgMQAAgIAEgGQADgGAGgBQAGgEAJgBQAFgCANAAQAPgBAGgCQACgHAAgEQAAgGgEgDQgFgEgLAAQgIAAgGAEQgHAFgDAIIgQgCQAFgNALgIQALgHAOAAQARAAAKAIQAIAGAAAKQAAAIgCAJIgFAWQgDALAAAHIACAMIgQAAIgCgLQgIAHgIADQgFADgJAAQgNAAgIgHgAAQABIgNABQgMACgGACQgFABgDAFQgDAEAAAFQAAAGAFAFQAEAEAJAAQAIAAAFgEQAHgEAEgIQAFgHACgNIgHABg");
	this.shape_1.setTransform(249.4,19.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYAsQgIgFgFgJQgFgKAAgLQABgNAGgPQAIgOAKgHQAMgHALAAQARAAAKAKQAKALAAARIgBANIhDAAIgBAEQAAAOAHAGQAFAHAJAAQAHAAAHgFQAIgFAFgKIAPABQgEAMgLAKQgMAKgPAAQgLAAgIgEgAgKgcQgIAHgFAOIAyAAIABgDQAAgMgGgGQgGgHgJAAQgJAAgIAHg");
	this.shape_2.setTransform(239.5,19.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AghAvIAThbIAOAAIgEATQAGgLAGgFQAHgFAIAAQAEAAAHADIgGAPQgEgDgFAAQgJAAgIAJQgHAKgFAWIgIAlg");
	this.shape_3.setTransform(232.3,19.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAoBAIgGglIgyAAIgVAlIgTAAIBHh/IAUAAIAWB/gAAKgWIgTAjIApAAIgFgdQgDgUgBgNQgEALgJAQg");
	this.shape_4.setTransform(221.6,18.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgmA4QgJgKAAgTQAAgRAGgMQAIgOAKgIQAKgHALAAQAQABAJAQIAKgyIAQAAIgbB/IgPAAIADgOQgMAQgPAAQgNAAgIgJgAgLgPQgFADgEAGQgGAGgCAIQgDAJgBAHQAAAKACAFQACAGAFADQAFAFAGAAQALAAAHgMQAMgPgBgWQABgJgHgGQgFgHgHABQgFAAgFACg");
	this.shape_5.setTransform(207.1,18.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgYAsQgJgFgEgJQgFgKABgLQAAgNAGgPQAIgOAKgHQAMgHALAAQARAAAKAKQAJALAAARIgBANIhCAAIgBAEQABAOAFAGQAGAHAJAAQAGAAAIgFQAIgFAFgKIAPABQgDAMgMAKQgNAKgOAAQgKAAgJgEgAgKgcQgJAHgDAOIAxAAIABgDQAAgMgGgGQgGgHgKAAQgIAAgIAHg");
	this.shape_6.setTransform(196.5,19.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgSA7QgFgDABgGIACgPIALg0IgMAAIACgMIANAAIAFgXIAQgLIgIAiIARAAIgDAMIgQAAIgIAyIgDAMQAAABABAAQAAABAAAAQAAABAAAAQABABAAAAQABABADAAIAIAAIgCAMIgJACQgJAAgGgFg");
	this.shape_7.setTransform(189.7,18.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAOBAIAMg4IADgOQAAgFgEgDQgDgCgGAAQgJgBgHAFQgGAEgFAIQgEAHgEARIgIAoIgQAAIAbh/IAQAAIgLAxQAKgIAFgDQAIgFAIAAQAMAAAGAHQAGAGAAAKIgDAQIgLA3g");
	this.shape_8.setTransform(181.3,18.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgeA/QgJgDgEgGQgEgFAAgHIABgFIAQABQAAAGABACQABAEADABQAFACAHAAQANAAAGgIQAEgEAEgRIABgIQgNAMgLAAQgPAAgJgKQgKgLAAgQQAAgQAIgNQAHgOAKgGQALgHAJAAQASAAALASIADgQIAOAAIgTBYQgDAPgFAJQgFAIgJAEQgHAFgLAAQgMAAgHgDgAgHgxQgGADgEAHQgFAGgCAIQgCAKgBAEQAAAKACACQADAIAFADQAFADAFABQAHgBAHgFQAIgGAFgJQAEgMABgKQgBgLgGgHQgGgHgKAAQgEAAgFADg");
	this.shape_9.setTransform(171.6,21.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgUBAIAUhcIAOAAIgSBcgAABgtIAEgSIAQAAIgEASg");
	this.shape_10.setTransform(164.9,18.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgUBAIAZh/IAQAAIgZB/g");
	this.shape_11.setTransform(160.9,18.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAOBAIAMg4IADgOQAAgFgEgDQgDgCgGAAQgIgBgIAFQgGAEgFAIQgEAHgEARIgIAoIgQAAIAbh/IAQAAIgLAxQAKgIAFgDQAHgFAJAAQAMAAAGAHQAGAGAAAKIgDAQIgLA3g");
	this.shape_12.setTransform(153.3,18.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgfA/QgIgDgEgGQgEgFAAgHIABgFIAPABQAAAGACACQABAEADABQAFACAHAAQANAAAGgIQAEgEAEgRIABgIQgNAMgLAAQgPAAgJgKQgKgLAAgQQABgQAHgNQAHgOALgGQAKgHAJAAQATAAAJASIAEgQIAOAAIgTBYQgDAPgFAJQgFAIgIAEQgIAFgLAAQgLAAgJgDgAgHgxQgFADgFAHQgEAGgDAIQgDAKABAEQAAAKABACQADAIAFADQAFADAFABQAHgBAHgFQAIgGAFgJQAEgMABgKQgBgLgGgHQgGgHgKAAQgDAAgGADg");
	this.shape_13.setTransform(143.6,21.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgUBAIAUhcIAOAAIgSBcgAABgtIAEgSIAQAAIgEASg");
	this.shape_14.setTransform(136.9,18.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAUBAIAMg9IhAAAIgNA9IgRAAIAbh/IAQAAIgLA1IBCAAIALg1IARAAIgbB/g");
	this.shape_15.setTransform(128.4,18.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgYAsQgJgFgEgJQgEgKgBgLQAAgNAIgPQAGgOAMgHQALgHALAAQARAAAKAKQAKALAAARIgBANIhDAAIAAAEQgBAOAHAGQAFAHAJAAQAGAAAIgFQAIgFAEgKIAQABQgEAMgMAKQgMAKgOAAQgLAAgIgEgAgKgcQgIAHgFAOIAyAAIABgDQAAgMgGgGQgGgHgJAAQgJAAgIAHg");
	this.shape_16.setTransform(111.5,19.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAOBAIAMg4IADgOQgBgFgDgDQgDgCgGAAQgJgBgHAFQgGAEgFAIQgEAHgEARIgIAoIgQAAIAbh/IAQAAIgLAxQAKgIAFgDQAIgFAIAAQAMAAAGAHQAGAGAAAKIgDAQIgLA3g");
	this.shape_17.setTransform(101.3,18.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgSA7QgEgDgBgGIADgPIALg0IgNAAIADgMIANAAIAEgXIARgLIgHAiIAPAAIgDAMIgPAAIgJAyIgBAMQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAQABABADAAIAJAAIgDAMIgJACQgKAAgFgFg");
	this.shape_18.setTransform(94.7,18.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgSA7QgEgDAAgGIACgPIALg0IgNAAIADgMIANAAIAEgXIARgLIgIAiIAQAAIgCAMIgQAAIgIAyIgCAMQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAQACABACAAIAJAAIgDAMIgJACQgKAAgFgFg");
	this.shape_19.setTransform(84.7,18.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgeAnQgJgKAAgSQgBgNAHgPQAFgPAMgHQAMgIAMAAQAPAAAIAIQAKAJgBAOIgPABQAAgJgFgFQgGgFgIAAQgHAAgIAGQgHAGgEAMQgDALAAALQgBAMAGAGQAFAGAIAAQAFAAAIgGQAHgGAEgMIAQACQgGARgLAJQgLAIgMAAQgPAAgKgJg");
	this.shape_20.setTransform(77.4,19.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgYAsQgIgFgFgJQgEgKgBgLQAAgNAIgPQAHgOAKgHQAMgHALAAQARAAAKAKQAKALAAARIgBANIhDAAIgBAEQAAAOAHAGQAFAHAJAAQAGAAAIgFQAIgFAEgKIAQABQgEAMgMAKQgLAKgPAAQgLAAgIgEgAgKgcQgIAHgFAOIAyAAIABgDQAAgMgGgGQgGgHgJAAQgJAAgIAHg");
	this.shape_21.setTransform(67.5,19.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgUBAIAZh/IAQAAIgZB/g");
	this.shape_22.setTransform(60.9,18.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgYAsQgJgFgEgJQgFgKABgLQAAgNAGgPQAIgOAKgHQAMgHALAAQARAAAKAKQAJALAAARIgBANIhCAAIgBAEQABAOAFAGQAHAHAIAAQAGAAAIgFQAIgFAFgKIAPABQgDAMgMAKQgNAKgOAAQgLAAgIgEgAgKgcQgJAHgDAOIAyAAIAAgDQAAgMgGgGQgGgHgKAAQgIAAgIAHg");
	this.shape_23.setTransform(53.5,19.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgnA5QgOgKAAgZIARgBIAAAEQAAAIAEAGQADAGAIADQAIAEALAAQANAAAIgHQAIgGAAgKQAAgFgEgFQgEgGgTgIQgOgFgGgDQgIgGgEgGQgFgHAAgJQAAgKAGgIQAFgHALgFQAKgEALAAQAQAAALAFQALAGAFAIQAFAJAAAIIAAADIgRABIgBgIQgCgGgEgDQgDgEgHgDQgGgBgIAAQgMgBgIAHQgGAEAAAIQAAAFACAEQADADAGAFIAUAKIATAHQAHAFAEAGQAEAHAAAJQAAAKgHAIQgGAJgLAGQgLAEgNAAQgWAAgOgJg");
	this.shape_24.setTransform(42.9,18.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(1,0,0,3).p("AW0CDMgtnAAAIAAkFMAtnAAAg");
	this.shape_25.setTransform(147.8,19);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("A2zCDIAAkFMAtnAAAIAAEFg");
	this.shape_26.setTransform(147.8,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.8,4.9,294,28.3);


(lib.errMsg_select = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgVBAIAEgSIARAAIgDASgAgLAfIAKhEIAEgaIATAAIgGAdIgRBBg");
	this.shape.setTransform(257.5,18.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgiApQgIgIAAgMQAAgIAEgGQADgGAGgBQAGgEAJgBQAFgCANAAQAPgBAGgCQACgHAAgEQAAgGgEgDQgFgEgLAAQgIAAgGAEQgHAFgDAIIgQgCQAFgNALgIQALgHAOAAQARAAAKAIQAIAGAAAKQAAAIgCAJIgFAWQgDALAAAHIACAMIgQAAIgCgLQgIAHgIADQgFADgJAAQgNAAgIgHgAAQABIgNABQgMACgGACQgFABgDAFQgDAEAAAFQAAAGAFAFQAEAEAJAAQAIAAAFgEQAHgEAEgIQAFgHACgNIgHABg");
	this.shape_1.setTransform(249.4,19.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYAsQgIgFgFgJQgFgKAAgLQABgNAGgPQAIgOAKgHQAMgHALAAQARAAAKAKQAKALAAARIgBANIhDAAIgBAEQAAAOAHAGQAFAHAJAAQAHAAAHgFQAIgFAFgKIAPABQgEAMgLAKQgMAKgPAAQgLAAgIgEgAgKgcQgIAHgFAOIAyAAIABgDQAAgMgGgGQgGgHgJAAQgJAAgIAHg");
	this.shape_2.setTransform(239.5,19.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AghAvIAThbIAOAAIgEATQAGgLAGgFQAHgFAIAAQAEAAAHADIgGAPQgEgDgFAAQgJAAgIAJQgHAKgFAWIgIAlg");
	this.shape_3.setTransform(232.3,19.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAoBAIgGglIgyAAIgVAlIgTAAIBHh/IAUAAIAWB/gAAKgWIgTAjIApAAIgFgdQgDgUgBgNQgEALgJAQg");
	this.shape_4.setTransform(221.6,18.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgmA4QgJgKAAgTQAAgRAGgMQAIgOAKgIQAKgHALAAQAQABAJAQIAKgyIAQAAIgbB/IgPAAIADgOQgMAQgPAAQgNAAgIgJgAgLgPQgFADgEAGQgGAGgCAIQgDAJgBAHQAAAKACAFQACAGAFADQAFAFAGAAQALAAAHgMQAMgPgBgWQABgJgHgGQgFgHgHABQgFAAgFACg");
	this.shape_5.setTransform(207.1,18.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgYAsQgJgFgEgJQgFgKABgLQAAgNAGgPQAIgOAKgHQAMgHALAAQARAAAKAKQAJALAAARIgBANIhCAAIgBAEQABAOAFAGQAGAHAJAAQAGAAAIgFQAIgFAFgKIAPABQgDAMgMAKQgNAKgOAAQgKAAgJgEgAgKgcQgJAHgDAOIAxAAIABgDQAAgMgGgGQgGgHgKAAQgIAAgIAHg");
	this.shape_6.setTransform(196.5,19.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgSA7QgFgDABgGIACgPIALg0IgMAAIACgMIANAAIAFgXIAQgLIgIAiIARAAIgDAMIgQAAIgIAyIgDAMQAAABABAAQAAABAAAAQAAABAAAAQABABAAAAQABABADAAIAIAAIgCAMIgJACQgJAAgGgFg");
	this.shape_7.setTransform(189.7,18.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAOBAIAMg4IADgOQAAgFgEgDQgDgCgGAAQgJgBgHAFQgGAEgFAIQgEAHgEARIgIAoIgQAAIAbh/IAQAAIgLAxQAKgIAFgDQAIgFAIAAQAMAAAGAHQAGAGAAAKIgDAQIgLA3g");
	this.shape_8.setTransform(181.3,18.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgeA/QgJgDgEgGQgEgFAAgHIABgFIAQABQAAAGABACQABAEADABQAFACAHAAQANAAAGgIQAEgEAEgRIABgIQgNAMgLAAQgPAAgJgKQgKgLAAgQQAAgQAIgNQAHgOAKgGQALgHAJAAQASAAALASIADgQIAOAAIgTBYQgDAPgFAJQgFAIgJAEQgHAFgLAAQgMAAgHgDgAgHgxQgGADgEAHQgFAGgCAIQgCAKgBAEQAAAKACACQADAIAFADQAFADAFABQAHgBAHgFQAIgGAFgJQAEgMABgKQgBgLgGgHQgGgHgKAAQgEAAgFADg");
	this.shape_9.setTransform(171.6,21.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgUBAIAUhcIAOAAIgSBcgAABgtIAEgSIAQAAIgEASg");
	this.shape_10.setTransform(164.9,18.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgUBAIAZh/IAQAAIgZB/g");
	this.shape_11.setTransform(160.9,18.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAOBAIAMg4IADgOQAAgFgEgDQgDgCgGAAQgIgBgIAFQgGAEgFAIQgEAHgEARIgIAoIgQAAIAbh/IAQAAIgLAxQAKgIAFgDQAHgFAJAAQAMAAAGAHQAGAGAAAKIgDAQIgLA3g");
	this.shape_12.setTransform(153.3,18.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgfA/QgIgDgEgGQgEgFAAgHIABgFIAPABQAAAGACACQABAEADABQAFACAHAAQANAAAGgIQAEgEAEgRIABgIQgNAMgLAAQgPAAgJgKQgKgLAAgQQABgQAHgNQAHgOALgGQAKgHAJAAQATAAAJASIAEgQIAOAAIgTBYQgDAPgFAJQgFAIgIAEQgIAFgLAAQgLAAgJgDgAgHgxQgFADgFAHQgEAGgDAIQgDAKABAEQAAAKABACQADAIAFADQAFADAFABQAHgBAHgFQAIgGAFgJQAEgMABgKQgBgLgGgHQgGgHgKAAQgDAAgGADg");
	this.shape_13.setTransform(143.6,21.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgUBAIAUhcIAOAAIgSBcgAABgtIAEgSIAQAAIgEASg");
	this.shape_14.setTransform(136.9,18.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAUBAIAMg9IhAAAIgNA9IgRAAIAbh/IAQAAIgLA1IBCAAIALg1IARAAIgbB/g");
	this.shape_15.setTransform(128.4,18.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgYAsQgJgFgEgJQgEgKgBgLQAAgNAIgPQAGgOAMgHQALgHALAAQARAAAKAKQAKALAAARIgBANIhDAAIAAAEQgBAOAHAGQAFAHAJAAQAGAAAIgFQAIgFAEgKIAQABQgEAMgMAKQgMAKgOAAQgLAAgIgEgAgKgcQgIAHgFAOIAyAAIABgDQAAgMgGgGQgGgHgJAAQgJAAgIAHg");
	this.shape_16.setTransform(111.5,19.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAOBAIAMg4IADgOQgBgFgDgDQgDgCgGAAQgJgBgHAFQgGAEgFAIQgEAHgEARIgIAoIgQAAIAbh/IAQAAIgLAxQAKgIAFgDQAIgFAIAAQAMAAAGAHQAGAGAAAKIgDAQIgLA3g");
	this.shape_17.setTransform(101.3,18.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgSA7QgEgDgBgGIADgPIALg0IgNAAIADgMIANAAIAEgXIARgLIgHAiIAPAAIgDAMIgPAAIgJAyIgBAMQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAQABABADAAIAJAAIgDAMIgJACQgKAAgFgFg");
	this.shape_18.setTransform(94.7,18.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgSA7QgEgDAAgGIACgPIALg0IgNAAIADgMIANAAIAEgXIARgLIgIAiIAQAAIgCAMIgQAAIgIAyIgCAMQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAQACABACAAIAJAAIgDAMIgJACQgKAAgFgFg");
	this.shape_19.setTransform(84.7,18.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgeAnQgJgKAAgSQgBgNAHgPQAFgPAMgHQAMgIAMAAQAPAAAIAIQAKAJgBAOIgPABQAAgJgFgFQgGgFgIAAQgHAAgIAGQgHAGgEAMQgDALAAALQgBAMAGAGQAFAGAIAAQAFAAAIgGQAHgGAEgMIAQACQgGARgLAJQgLAIgMAAQgPAAgKgJg");
	this.shape_20.setTransform(77.4,19.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgYAsQgIgFgFgJQgEgKgBgLQAAgNAIgPQAHgOAKgHQAMgHALAAQARAAAKAKQAKALAAARIgBANIhDAAIgBAEQAAAOAHAGQAFAHAJAAQAGAAAIgFQAIgFAEgKIAQABQgEAMgMAKQgLAKgPAAQgLAAgIgEgAgKgcQgIAHgFAOIAyAAIABgDQAAgMgGgGQgGgHgJAAQgJAAgIAHg");
	this.shape_21.setTransform(67.5,19.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgUBAIAZh/IAQAAIgZB/g");
	this.shape_22.setTransform(60.9,18.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgYAsQgJgFgEgJQgFgKABgLQAAgNAGgPQAIgOAKgHQAMgHALAAQARAAAKAKQAJALAAARIgBANIhCAAIgBAEQABAOAFAGQAHAHAIAAQAGAAAIgFQAIgFAFgKIAPABQgDAMgMAKQgNAKgOAAQgLAAgIgEgAgKgcQgJAHgDAOIAyAAIAAgDQAAgMgGgGQgGgHgKAAQgIAAgIAHg");
	this.shape_23.setTransform(53.5,19.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgnA5QgOgKAAgZIARgBIAAAEQAAAIAEAGQADAGAIADQAIAEALAAQANAAAIgHQAIgGAAgKQAAgFgEgFQgEgGgTgIQgOgFgGgDQgIgGgEgGQgFgHAAgJQAAgKAGgIQAFgHALgFQAKgEALAAQAQAAALAFQALAGAFAIQAFAJAAAIIAAADIgRABIgBgIQgCgGgEgDQgDgEgHgDQgGgBgIAAQgMgBgIAHQgGAEAAAIQAAAFACAEQADADAGAFIAUAKIATAHQAHAFAEAGQAEAHAAAJQAAAKgHAIQgGAJgLAGQgLAEgNAAQgWAAgOgJg");
	this.shape_24.setTransform(42.9,18.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(1,0,0,3).p("AW0CDMgtnAAAIAAkFMAtnAAAg");
	this.shape_25.setTransform(147.8,19);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("A2zCDIAAkFMAtnAAAIAAEFg");
	this.shape_26.setTransform(147.8,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.8,4.9,294,28.3);


(lib.btn2copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AhwCbIAAj3IFlAAIAAD3gAkaBnQgcgJgYguQgWgsAMgGQAOgJBIgLIBFgJIAABvIgdAOQgcAKgYAAIgMgBgAFFh2QgRgGgNgDQgUgEgVAAIgWADIgPACIgkAAIgDAAIjdAAIgmAAIgPgCIgXgDQgVAAgUAEQgMADgRAGQgMAFgDgBQgFgBgBgEQgCgDACgEQACgEBXgNIAoAAIAAgJIAmgCIDdAAIADAAIAAAAIAkACIAAAJIAoAAIAtAGQAtAFABADQACAEgDAFQgDAFgEABIgBAAQgEAAgKgEg");
	this.shape.setTransform(-21.3,-1.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.btn2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AhwCbIAAj3IFlAAIAAD3gAkaBnQgcgJgYguQgWgsAMgGQAOgJBIgLIBFgJIAABvIgdAOQgcAKgYAAIgMgBgAFFh2QgRgGgNgDQgUgEgVAAIgWADIgPACIgkAAIgDAAIjdAAIgmAAIgPgCIgXgDQgVAAgUAEQgMADgRAGQgMAFgDgBQgFgBgBgEQgCgDACgEQACgEBXgNIAoAAIAAgJIAmgCIDdAAIADAAIAAAAIAkACIAAAJIAoAAIAtAGQAtAFABADQACAEgDAFQgDAFgEABIgBAAQgEAAgKgEg");
	this.shape.setTransform(-21.3,-1.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.btn2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AhwCbIAAj3IFlAAIAAD3gAkaBnQgcgJgYguQgWgsAMgGQAOgJBIgLIBFgJIAABvIgdAOQgcAKgYAAIgMgBgAFFh2QgRgGgNgDQgUgEgVAAIgWADIgPACIgkAAIgDAAIjdAAIgmAAIgPgCIgXgDQgVAAgUAEQgMADgRAGQgMAFgDgBQgFgBgBgEQgCgDACgEQACgEBXgNIAoAAIAAgJIAmgCIDdAAIADAAIAAAAIAkACIAAAJIAoAAIAtAGQAtAFABADQACAEgDAFQgDAFgEABIgBAAQgEAAgKgEg");
	this.shape.setTransform(-21.3,-1.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.btn1copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.463)"],[0,1],-13.5,6.3,8.6,6.3).s().p("AiGB9IAAj6IEMAAIAAD6g");
	this.shape.setTransform(-271.8,26.7);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.btn1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.463)"],[0,1],-13.5,6.3,8.6,6.3).s().p("AiGB9IAAj6IEMAAIAAD6g");
	this.shape.setTransform(-271.8,26.7);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.btn1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.463)"],[0,1],-13.5,6.3,8.6,6.3).s().p("AiGB9IAAj6IEMAAIAAD6g");
	this.shape.setTransform(-271.8,26.7);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.B787SynopticAuxDisplayLcopy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5E5D66").s().p("ApSLjIAA3FISkAAIAAXFg");
	this.shape.setTransform(202.8,98.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// PNG
	this.instance = new lib.odu01p05_pfd();
	this.instance.setTransform(-84.9,-79.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.9,-79.5,352.3,310.2);


(lib.B787SynopticAuxDisplayLcopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PNG
	this.instance = new lib.odu01p02_panel();
	this.instance.setTransform(-84.9,-79.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.9,-79.5,352.3,310.2);


(lib.B787SynopticAuxDisplayLcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PNG
	this.instance = new lib.odu01p05_pfd();
	this.instance.setTransform(-84.9,-79.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.9,-79.5,352.3,310.2);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(5,0,0,3).p("ACWmEQBABxAACLQAADViXCXQh+CAitAU");
	this.shape.setTransform(36.3,39);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Ag9AAIB7g1IAAAzIAAA4g");
	this.shape_1.setTransform(6.3,77);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2.5,60.3,85);


// stage content:
(lib.dif06obp05 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{s1:0,s2:236,s3:265,s4:272});

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
	this.frame_235 = function() {
		this.stop();
		var that = this;
		
		/////////////////////////////////
		//THIS IS THE CODE FOR THE PAGE//
		/////////////////////////////////
		// This variable counts the number of clicks needed to show the please try again and select the highlighted area message/audio.
		var clickNumber = 0;
		clickNumber = 0;
		
		// Hide stuff
		this.hl_mc.visible = false;
		this.errMsg_try.visible = false;
		this.errMsg_select.visible = false;
		
		// Remove old listeners.
		this.hotspotERR.removeEventListener("click", this.hotSpotERRHandler);
		this.hotspot1.removeEventListener("click", this.hotSpot1Handler);
		
		// Describes what will happen when the event handler is triggered.
		this.hotSpot1Handler = function() {
			
			// Stop audio.
			parent.pageControllerAPI.stopAudioById("e1"); 
			parent.pageControllerAPI.stopAudioById("e2"); 
			
			// Sets section as complete.
			parent.pageControllerAPI.completeVision();
		    // Calls the page controller to jump to a section of your choice.
		    parent.pageControllerAPI.playSectionById("s2"); 
		    
		    // Hide the visibilitys of Movieclips instance named "hl_mc", "errMsg_try" and "errMsg_select".
		    that.hl_mc.visible = false;
		    that.errMsg_try.visible = false;
		    that.errMsg_select.visible = false;
		
			//
		    clickNumber = 0;
		};
		
		this.hotSpotERRHandler = function() {
		    // Add one click to the number of clicks used.
		    clickNumber++;
		    
		    // Checks if the number of clicks if less than two.
		    if(clickNumber < 2) {
		        // Reveal the visibility of the Movieclip instance named "errMsg_try".
		        that.errMsg_try.visible = true;
		
				// Stop audio.
				parent.pageControllerAPI.stopAudioById("e1"); 
				parent.pageControllerAPI.stopAudioById("e2"); 
				
		        // This calls the page controller to play an external mp3 file set up within the page's .xml file.
		        parent.pageControllerAPI.playExternalAudio("e2"); 
		    }   
		    // What happens if the number of clicks is not less than two.
		    else {
		        // Hide the visibilty of the Movieclip instance named "errMsg_try".
		        that.errMsg_try.visible = false;
				
		        // Reveal the visibilty of the Movieclips instance named "hl_mc" and "errMsg_select".
		        that.hl_mc.visible = true;
		        that.errMsg_select.visible = true;
		
				// Stop audio.
				parent.pageControllerAPI.stopAudioById("e1"); 
				parent.pageControllerAPI.stopAudioById("e2"); 
		        
				// This calls the page controller to play an external mp3 file set up within the page's .xml file.
		        parent.pageControllerAPI.playExternalAudio("e1"); 
		    }
		};
		
		// Tells the player that Movieclip instance named "hotspotERR" will have an event handler.
		this.hotspotERR.addEventListener("click", this.hotSpotERRHandler);
		
		// Tells the player that Movieclip instance named "hotspot1" will have an event handler.
		this.hotspot1.addEventListener("click", this.hotSpot1Handler);
	}
	this.frame_264 = function() {
		this.stop();
		var that = this;
		
		/////////////////////////////////
		//THIS IS THE CODE FOR THE PAGE//
		/////////////////////////////////
		
		// This variable counts the number of clicks needed to show the please try again and select the highlighted area message/audio.
		var clickNumber = 0;
		clickNumber = 0;
		
		// Hide stuff.
		this.hl_mc2.visible = false;
		this.errMsg_try2.visible = false;
		this.errMsg_select2.visible = false;
		
		// Remove old listeners.
		this.hotspotERR2.removeEventListener("click", this.hotSpotERR2Handler);
		this.hotspot2.removeEventListener("click", this.hotSpot2Handler);
		
		// Describes what will happen when the event handler is triggered.
		this.hotSpot2Handler = function() {
					
			// Stop current audio.
			parent.pageControllerAPI.stopAudioById("e1"); 
			parent.pageControllerAPI.stopAudioById("e2"); 
				
			// Sets section as complete.
			parent.pageControllerAPI.completeVision();
		    // Calls the page controller to jump to a section of your choice.
		    parent.pageControllerAPI.playSectionById("s3"); 
		    
		    // Hide the visibilitys of Movieclips instance named "hl_mc", "errMsg_try" and "errMsg_select".
		    that.hl_mc2.visible = false;
		    that.errMsg_try2.visible = false;
		    that.errMsg_select2.visible = false;
			
			//
		    clickNumber = 0;
		};
		
		this.hotSpotERR2Handler = function() {
			
		    // Add one click to the number of clicks used.
		    clickNumber++;
		    
		    // Checks if the number of clicks if less than two.
		    if(clickNumber < 2) {
				
		        // Reveal the visibility of the Movieclip instance named "errMsg_try".
		        that.errMsg_try2.visible = true;
		        		
				// Stop current audio
				parent.pageControllerAPI.stopAudioById("e1"); 
				parent.pageControllerAPI.stopAudioById("e2"); 
				
		        // This calls the page controller to play an external mp3 file set up within the page's .xml file.
		        parent.pageControllerAPI.playExternalAudio("e2"); 
		    }   
			
		    // What happens if the number of clicks is not less than two.
		    else {
				
		        // Hide the visibilty of the Movieclip instance named "errMsg_try".
		        that.errMsg_try2.visible = false;
				
		        // Reveal the visibilty of the Movieclips instance named "hl_mc" and "errMsg_select".
		        that.hl_mc2.visible = true;
		        that.errMsg_select2.visible = true;
		        		
				// Stop current audio.
				parent.pageControllerAPI.stopAudioById("e1"); 
				parent.pageControllerAPI.stopAudioById("e2"); 
				
		        // This calls the page controller to play an external mp3 file set up within the page's .xml file.
		        parent.pageControllerAPI.playExternalAudio("e1"); 
		    }
		};
		
		// Tells the player that Movieclip instance named "hotspotERR" will have an event handler.
		this.hotspotERR2.addEventListener("click", this.hotSpotERR2Handler);
		
		// Tells the player that Movieclip instance named "hotspot1" will have an event handler.
		this.hotspot2.addEventListener("click", this.hotSpot2Handler);
	}
	this.frame_271 = function() {
		this.stop();
		var that = this;
		
		/////////////////////////////////
		//THIS IS THE CODE FOR THE PAGE//
		/////////////////////////////////
		
		// This variable counts the number of clicks needed to show the please try again and select the highlighted area message/audio.
		var clickNumber = 0;
		clickNumber = 0;
		
		// Hide stuff.
		this.hl_mc3.visible = false;
		this.errMsg_try3.visible = false;
		this.errMsg_select3.visible = false;
		
		// Remove old listeners.
		this.hotspotERR3.removeEventListener("click", this.hotSpotERR3Handler);
		this.hotspot3.removeEventListener("click", this.hotSpot3Handler);
		
		// Describes what will happen when the event handler is triggered.
		this.hotSpot3Handler = function() {
					
			// Stop current audio.
			parent.pageControllerAPI.stopAudioById("e1"); 
			parent.pageControllerAPI.stopAudioById("e2"); 
				
			// Sets section as complete.
			parent.pageControllerAPI.completeVision();
			
		    // Calls the page controller to jump to a section of your choice.
		    parent.pageControllerAPI.playSectionById("s4"); 
		    
		    // Hide the visibilitys of Movieclips instance named "hl_mc", "errMsg_try" and "errMsg_select".
		    that.hl_mc3.visible = false;
		    that.errMsg_try3.visible = false;
		    that.errMsg_select3.visible = false;
			
			//
		    clickNumber = 0;
		};
		
		this.hotSpotERR3Handler = function() {
			
		    // Add one click to the number of clicks used.
		    clickNumber++;
		    
		    // Checks if the number of clicks if less than two.
		    if(clickNumber < 2) {
				
		        // Reveal the visibility of the Movieclip instance named "errMsg_try".
		        that.errMsg_try3.visible = true;
		        		
				// Stop current audio.
				parent.pageControllerAPI.stopAudioById("e1"); 
				parent.pageControllerAPI.stopAudioById("e2"); 
				
		        // This calls the page controller to play an external mp3 file set up within the page's .xml file.
		        parent.pageControllerAPI.playExternalAudio("e2"); 
		    }   
			
		    // What happens if the number of clicks is not less than two.
		    else {
				
		        // Hide the visibilty of the Movieclip instance named "errMsg_try".
		        that.errMsg_try3.visible = false;
				
		        // Reveal the visibilty of the Movieclips instance named "hl_mc" and "errMsg_select".
		        that.hl_mc3.visible = true;
		        that.errMsg_select3.visible = true;
		        		
				// Stop current audio
				parent.pageControllerAPI.stopAudioById("e1"); 
				parent.pageControllerAPI.stopAudioById("e2"); 
				
		        // This calls the page controller to play an external mp3 file set up within the page's .xml file.
		        parent.pageControllerAPI.playExternalAudio("e1"); 
		    }
		};
		
		// Tells the player that Movieclip instance named "hotspotERR" will have an event handler.
		this.hotspotERR3.addEventListener("click", this.hotSpotERR3Handler);
		
		// Tells the player that Movieclip instance named "hotspot1" will have an event handler.
		this.hotspot3.addEventListener("click", this.hotSpot3Handler);
	}
	this.frame_278 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(235).call(this.frame_235).wait(29).call(this.frame_264).wait(7).call(this.frame_271).wait(7).call(this.frame_278).wait(1));

	// prot
	this.prot = new lib.prot();
	this.prot.setTransform(500,275,1,1,0,0,0,500,275);

	this.timeline.addTween(cjs.Tween.get(this.prot).wait(279));

	// instsructions
	this.instance = new lib.instruction("synched",0);
	this.instance.setTransform(499.7,521.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(235).to({_off:false},0).to({_off:true},1).wait(28).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(7));

	// hotspot
	this.hotspot1 = new lib.btn1();
	this.hotspot1.setTransform(725.8,341.2,1.987,2.222,0,180,0);
	new cjs.ButtonHelper(this.hotspot1, 0, 1, 2, false, new lib.btn1(), 3);

	this.hotspot2 = new lib.btn1copy();
	this.hotspot2.setTransform(725.8,341.2,1.987,2.222,0,180,0);
	new cjs.ButtonHelper(this.hotspot2, 0, 1, 2, false, new lib.btn1copy(), 3);

	this.hotspot3 = new lib.btn1copy2();
	this.hotspot3.setTransform(725.8,341.2,1.987,2.222,0,180,0);
	new cjs.ButtonHelper(this.hotspot3, 0, 1, 2, false, new lib.btn1copy2(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.hotspot1}]},235).to({state:[]},1).to({state:[{t:this.hotspot2}]},28).to({state:[]},1).to({state:[{t:this.hotspot3}]},6).to({state:[]},1).wait(7));

	// wrong hotspot
	this.hotspotERR = new lib.btn2();
	this.hotspotERR.setTransform(644,253,9.849,12.409);
	new cjs.ButtonHelper(this.hotspotERR, 0, 1, 2, false, new lib.btn2(), 3);

	this.hotspotERR2 = new lib.btn2copy();
	this.hotspotERR2.setTransform(644,253,9.849,12.409);
	new cjs.ButtonHelper(this.hotspotERR2, 0, 1, 2, false, new lib.btn2copy(), 3);

	this.hotspotERR3 = new lib.btn2copy2();
	this.hotspotERR3.setTransform(644,253,9.849,12.409);
	new cjs.ButtonHelper(this.hotspotERR3, 0, 1, 2, false, new lib.btn2copy2(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.hotspotERR}]},235).to({state:[]},1).to({state:[{t:this.hotspotERR2}]},28).to({state:[]},1).to({state:[{t:this.hotspotERR3}]},6).to({state:[]},1).wait(7));

	// hl
	this.hl_mc = new lib.hl_mc();
	this.hl_mc.setTransform(131.5,-13.8,1,1,0,0,0,199.1,199);
	this.hl_mc.visible = false;

	this.hl_mc2 = new lib.hl_mccopy();
	this.hl_mc2.setTransform(131.5,-13.8,1,1,0,0,0,199.1,199);
	this.hl_mc2.visible = false;

	this.hl_mc3 = new lib.hl_mccopy2();
	this.hl_mc3.setTransform(131.5,-13.8,1,1,0,0,0,199.1,199);
	this.hl_mc3.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.hl_mc}]},235).to({state:[]},1).to({state:[{t:this.hl_mc2}]},28).to({state:[]},1).to({state:[{t:this.hl_mc3}]},6).to({state:[]},1).wait(7));

	// select
	this.errMsg_select = new lib.errMsg_select();
	this.errMsg_select.setTransform(496.6,17.2,1,1,0,0,0,146.5,16);
	this.errMsg_select.visible = false;

	this.errMsg_select2 = new lib.errMsg_selectcopy();
	this.errMsg_select2.setTransform(496.6,17.2,1,1,0,0,0,146.5,16);
	this.errMsg_select2.visible = false;

	this.errMsg_select3 = new lib.errMsg_selectcopy2();
	this.errMsg_select3.setTransform(496.6,17.2,1,1,0,0,0,146.5,16);
	this.errMsg_select3.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.errMsg_select}]},235).to({state:[]},1).to({state:[{t:this.errMsg_select2}]},28).to({state:[]},1).to({state:[{t:this.errMsg_select3}]},6).to({state:[]},1).wait(7));

	// try
	this.errMsg_try = new lib.errMsg_try();
	this.errMsg_try.setTransform(497.1,17.2,1,1,0,0,0,147,16);
	this.errMsg_try.visible = false;

	this.errMsg_try2 = new lib.errMsg_trycopy();
	this.errMsg_try2.setTransform(497.1,17.2,1,1,0,0,0,147,16);
	this.errMsg_try2.visible = false;

	this.errMsg_try3 = new lib.errMsg_trycopy2();
	this.errMsg_try3.setTransform(497.1,17.2,1,1,0,0,0,147,16);
	this.errMsg_try3.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.errMsg_try}]},235).to({state:[]},1).to({state:[{t:this.errMsg_try2}]},28).to({state:[]},1).to({state:[{t:this.errMsg_try3}]},6).to({state:[]},1).wait(7));

	// t1
	this.instance_1 = new lib.t1("synched",0);
	this.instance_1.setTransform(745.4,307,1,1,0,0,0,54.6,23.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.instance_2 = new lib.t1copy("synched",0);
	this.instance_2.setTransform(745.4,307,1,1,0,0,0,54.6,23.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},244).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_2}]},12).to({state:[]},7).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(244).to({_off:false},0).to({alpha:1},9).to({_off:true},12).wait(14));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_236 = new cjs.Graphics().p("Ai4A2IAAhrIFwAAIAABrg");
	var mask_graphics_244 = new cjs.Graphics().p("Ai4A2IAAhrIFwAAIAABrg");
	var mask_graphics_245 = new cjs.Graphics().p("Ai4BuIAAjbIFwAAIAADbg");
	var mask_graphics_246 = new cjs.Graphics().p("Ai4CmIAAlKIFwAAIAAFKg");
	var mask_graphics_247 = new cjs.Graphics().p("Ai4DdIAAm5IFwAAIAAG5g");
	var mask_graphics_248 = new cjs.Graphics().p("Ai4EVIAAopIFwAAIAAIpg");
	var mask_graphics_249 = new cjs.Graphics().p("Ai4FMIAAqXIFwAAIAAKXg");
	var mask_graphics_250 = new cjs.Graphics().p("Ai4GEIAAsHIFwAAIAAMHg");
	var mask_graphics_251 = new cjs.Graphics().p("Ai4G8IAAt2IFwAAIAAN2g");
	var mask_graphics_252 = new cjs.Graphics().p("Ai4HzIAAvlIFwAAIAAPlg");
	var mask_graphics_253 = new cjs.Graphics().p("Ai4IqIAAxTIFwAAIAARTg");
	var mask_graphics_254 = new cjs.Graphics().p("AjdIqIAAxTIG6AAIAARTg");
	var mask_graphics_255 = new cjs.Graphics().p("AkCIqIAAxTIIFAAIAARTg");
	var mask_graphics_256 = new cjs.Graphics().p("AknIqIAAxTIJPAAIAARTg");
	var mask_graphics_257 = new cjs.Graphics().p("AlMIqIAAxTIKZAAIAARTg");
	var mask_graphics_258 = new cjs.Graphics().p("AlxIqIAAxTILjAAIAARTg");
	var mask_graphics_259 = new cjs.Graphics().p("AmWIqIAAxTIMtAAIAARTg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(236).to({graphics:mask_graphics_236,x:669,y:247.5}).wait(8).to({graphics:mask_graphics_244,x:669,y:247.5}).wait(1).to({graphics:mask_graphics_245,x:669,y:253.1}).wait(1).to({graphics:mask_graphics_246,x:669,y:258.6}).wait(1).to({graphics:mask_graphics_247,x:669,y:264.2}).wait(1).to({graphics:mask_graphics_248,x:669,y:269.7}).wait(1).to({graphics:mask_graphics_249,x:669,y:275.3}).wait(1).to({graphics:mask_graphics_250,x:669,y:280.8}).wait(1).to({graphics:mask_graphics_251,x:669,y:286.4}).wait(1).to({graphics:mask_graphics_252,x:669,y:292}).wait(1).to({graphics:mask_graphics_253,x:669,y:297.5}).wait(1).to({graphics:mask_graphics_254,x:665.3,y:297.5}).wait(1).to({graphics:mask_graphics_255,x:661.5,y:297.5}).wait(1).to({graphics:mask_graphics_256,x:657.8,y:297.5}).wait(1).to({graphics:mask_graphics_257,x:654.1,y:297.5}).wait(1).to({graphics:mask_graphics_258,x:650.4,y:297.5}).wait(1).to({graphics:mask_graphics_259,x:646.7,y:297.5}).wait(13).to({graphics:null,x:0,y:0}).wait(7));

	// chronometer
	this.instance_3 = new lib.arrow("synched",0);
	this.instance_3.setTransform(638.3,302.5,1,1,0,0,0,30.1,40);
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(236).to({_off:false},0).to({_off:true},36).wait(7));

	// hl
	this.instance_4 = new lib.hl3("synched",0);
	this.instance_4.setTransform(601.2,300,1,1,0,0,0,75.2,78);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(103).to({_off:false},0).to({alpha:1},5).wait(90).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(75));

	// clock
	this.instance_5 = new lib.LMICPanelcopy("synched",0);
	this.instance_5.setTransform(240.9,68.3,0.12,0.12,0,0,0,90.9,57.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({_off:false},0).to({regX:91,scaleX:1,scaleY:1,x:230,y:200.9,alpha:1},5).wait(264));

	// hl
	this.instance_6 = new lib.hl2("synched",0);
	this.instance_6.setTransform(241,80,1,1,0,0,0,17.4,11.9);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(5).to({_off:false},0).to({alpha:1},5).wait(269));

	// glareshield
	this.instance_7 = new lib.panels("synched",0);
	this.instance_7.setTransform(500.1,146.4,0.6,0.6,0,0,0,464.6,179.8);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({alpha:1},5).wait(274));

	// panel
	this.instance_8 = new lib.B787SynopticAuxDisplayLcopy2("synched",0);
	this.instance_8.setTransform(408.7,405.4,1,1,0,0,0,0,206.3);

	this.instance_9 = new lib.B787SynopticAuxDisplayLcopy("synched",0);
	this.instance_9.setTransform(408.7,405.4,1,1,0,0,0,0,206.3);

	this.instance_10 = new lib.B787SynopticAuxDisplayLcopy3("synched",0);
	this.instance_10.setTransform(408.7,405.4,1,1,0,0,0,0,206.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},103).to({state:[{t:this.instance_8}]},80).to({state:[{t:this.instance_9}]},53).to({state:[{t:this.instance_10}]},36).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(500,275,1000,550);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;