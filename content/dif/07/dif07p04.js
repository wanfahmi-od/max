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
		{src:"images/fu01p05_cdu.png", id:"fu01p05_cdu"},
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



(lib.fu01p05_cdu = function() {
	this.initialize(img.fu01p05_cdu);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,613,912);


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


(lib.point = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQARQgIgHAAgKQAAgJAIgHQAHgIAJAAQAKAAAHAIQAIAHAAAJQAAAKgIAHQgHAIgKAAQgJAAgHgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,5,5);


(lib.hl3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(5,0,0,3).p("Ao5hPIRzAAIAACfIxzAAg");
	this.shape.setTransform(57,8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,119.1,21);


(lib.hl2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(5,0,0,3).p("AuDizIcHAAIAAFnI8HAAg");
	this.shape.setTransform(90,18);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,185.1,41.1);


(lib.hl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(5,0,0,3).p("AmelYIM9AAIAAKxIs9AAg");
	this.shape.setTransform(41.5,34.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,88,74);


(lib.flapspointer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSAaIhCgaIBCgZIBnAAIAAAzg");
	this.shape.setTransform(8.5,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17.1,5.4);


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


(lib.B787PFDNDRange = function(mode,startPosition,loop) {
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


(lib.B787NDMAPCurrentHeadingPointer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,2,1).p("AAnghIgnBDIgmhDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.2,-4.7,10.5,9.5);


(lib.B787NDMAPAirplaneSymbol01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,2,1).p("AhTBsIBTjXIBUDXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.7,-12.1,19.4,24.3);


(lib.CDULeftPanel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A36PiIAA/DMAv1AAAIAAfDg");
	mask.setTransform(0.4,-143.2);

	// PNG
	this.instance = new lib.fu01p05_cdu();
	this.instance.setTransform(-152.7,-242.6,0.5,0.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152.7,-242.6,306.3,455.9);


(lib.B787NDMAPVSDTrackLineandRangeScale = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNATQgEgIAAgLQAAgKAEgIQAEgMAJAAQAKAAAEAMQAEAIAAAKQAAALgEAIQgFAMgJAAQgJAAgEgMgAgIgOQgCAGAAAIQAAAIACAHQADAKAFAAQAGAAADgKQACgHAAgIQAAgIgCgGQgDgKgGAAQgFAAgDAKg");
	this.shape.setTransform(-2.4,24.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPAeIAAgGQAAgHAEgGQADgFAGgFIAGgGQAEgFAAgEQAAgEgDgDQgCgCgDAAQgHAAAAAHIgHAAIAAgBQAAgFAFgEQAEgDAFAAQAGAAAEADQAFAEAAAHQAAAIgHAGIgKAJQgGAHAAAIIAYAAIAAAHg");
	this.shape_1.setTransform(-6.6,24.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAmqxIgmAAIglAAAAAqxIAArkAAmAyIgmAAIglAAAAmMWIgmAAIglAAAAAMWIAArkIAArjAAAWWIAAqA");
	this.shape_2.setTransform(7.3,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.1,-125,23.2,288);


(lib.B787NDMAPVSDAirport = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00CCFF").ss(1,1,1).p("AAZgZQALALAAAOQAAAPgLAKQgKALgPAAQgOAAgLgLQgKgKAAgPQAAgOAKgLQALgKAOAAQAPAAAKAKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.6,-4.6,9.2,9.2);


(lib.B787NDMAPWhiteInactiveWaypoint = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAJgIIA1AIIg1AJIgJA1IgIg1Ig1gJIA1gIIAIg1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.2,-7.2,14.4,14.4);


(lib.B787NDMAPReferencePoint = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#33C300").ss(1,1,1).p("AApgCIAAAAIgWgmIAYgRIAYApIgaAOIgTAgIgvAAIAAAbIAvABIAAgcAgTgoIgYgPIgXAnIAZAPIAWgnIAmAAAgZAeIgQgf");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.7,-6.8,15.5,13.7);


(lib.B787NDMAPHalfVSDCompassRose = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A1dS+MAAAgl7MAq7AAAMAAAAl7g");
	mask.setTransform(0,-121.8);

	// compass rose
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAEAfIAGgFQACACAEAAQADgBACgCQAHgHgFgMQgDgHgIgIIgCgCQACALgIAHQgEAGgKgDQgIgCgHgHQgHgFgBgJQgBgKAHgHQAKgJAPAGQAJAFAKAMQAMAMADAJQAFAQgKAKQgGAFgGAAIgBAAQgGAAgEgFgAgVgYQgFAEACAHQACAGAEAFQAEACAGACQAGABADgDQAEgDgBgHQgBgGgDgFQgFgFgFgBIgDAAQgFAAgDADg");
	this.shape.setTransform(-121.9,-133.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgfAbQgEgFAAgHQgBgHAFgEIAGAGQgFAEAFAHQAHAHALgFQAIgDAHgHIADgDQgLACgGgHQgGgFACgKQACgIAHgHQAGgHAJgBQAJgBAHAHQARASgcAYQgTATgPAAQgJAAgHgHgAANgYQgFACgFAEQgDAEgBAGQgCAGADADQAEAFAIgDQAGgCAGgDQAEgEAAgGQAAgGgEgDQgDgDgEAAIgEAAg");
	this.shape_1.setTransform(-133,119.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSAjQgGgBgFgGQgGgHgBgHQAAgHAGgGQAKgHANAFQgGgPAMgLQAGgHAJAAQAJgBAIAIQAFAHABAGQABAHgHAGIgGgGQAHgGgIgJQgFgFgFABQgFAAgGAFQgFAHABAIQABAGAHAHIgHAGQgEgIgFgCQgHgCgHAGQgDADgBAEQABAFADADQADAEAEAAQAEABADgDIAFAGIAAABQgFAEgGAAIgDAAg");
	this.shape_2.setTransform(-128.9,123.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLAnQgJgCgEgGQgDgGADgIQADgNAPgCQgOgIAFgPQADgLAIgEQAGgFAKADQAIACAFAFQADAGgCAJIgIgDQACgJgLgDQgHgCgCAEQgEADgCAHQgDAKAFAGQAEADAKADIgDAIQgIgDgFAAQgHACgDAIQgCAFADAEQADADAEACQAFABADgBQABgBACgFIAHADIAAAAQgCAIgHADIgEABIgIgCg");
	this.shape_3.setTransform(-55.1,172);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLAnQgIgCgEgGQgEgGACgIQAFgNANgCQgNgIAEgPQAEgLAIgEQAGgFAKADQAJACADAFQAEAGgDAJIgIgDQADgJgLgDQgHgCgCAEQgEADgDAHQgDAKAHAGQADADAJADIgCAIQgIgDgFAAQgIACgCAIQgBAFACAEQACADAFACQAEABAEgBQABgBACgFIAIADIAAAAQgDAIgHADIgEABIgIgCg");
	this.shape_4.setTransform(-49.6,173.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgMAeQgHgKgDgPQgDgNACgMQADgRANgCQALgDAJANQAHAKADAPQAEANgCAMQgDARgNADIgEAAQgJAAgIgLgAgFgfQgJACgCANQAAAJACAKQADAMAFAHQAGAMAHgCQAJgCABgNQABgJgDgKQgDgMgEgIQgGgKgFAAIgCABg");
	this.shape_5.setTransform(38.1,174.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgDAnQgGgDgCgIQgDgOALgIQgRgCgDgOQgDgKAFgJQAEgIALgCQAGgCAGACQAHADACAJIgIACQgDgJgJADQgHABgCAGQgCAEACAIQACAJAIADQAEAAAKgBIACAHQgJACgDADQgFAFACAIQABAFACACQADACAFgBQAFgBACgCQADgEgBgEIAIgBIAAAAQACAIgFAGQgEAFgIACIgGAAQgEAAgDgCg");
	this.shape_6.setTransform(43.7,172.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgEAjIgCgJQgKgpgQgTIAGgGIADADQALALAGAVQADAGADAbIAagZIAHAHIghAfg");
	this.shape_7.setTransform(122.2,133.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAEAhQgFgHAAgMIABgTQAAgNgGgIIgZAXIgHgHIAggdIAGAGQAEAHACAKQABAGgBAKIAAAPQAAAIAEAEQADAEAFgBQAFABAEgEQAHgHgGgHIAHgFIAAAAQAFAGgBAHQgBAHgGAFQgHAHgHAAIgBAAQgIAAgFgHg");
	this.shape_8.setTransform(125,129.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHANIgIgCIgXgHIADgGIAXAFIAJgdIAGADIAkAqIgDAIgAgEADIAeAKIgZgdg");
	this.shape_9.setTransform(173.1,55.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AARAcQgKgDgFgLIgIgRQgGgLgKgDIgKAeIgJgCIANgnIAIACQAJADAGAHQAEAFADAKIAHAMQAFAGAFACQAFABAEgCQAEgCACgFQADgKgIgBIACgIIABAAQAHACACAGQADAGgDAIQgCAJgGAEQgEACgFAAIgHgBg");
	this.shape_10.setTransform(175,49.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgjAMIgCgIIAIgCIACAIIgIACIAIgCIADANIgIABgAglAEIAAAAIACAIgAgbAKgAgdACIA6gMIgKgLIAJgCIALALIACAIIhEAOgAgogIIAIgBIADALIgIACgAgdACg");
	this.shape_11.setTransform(177.5,-37.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgpgNIAIgCQAJgCAJADQAHADAIAGIAMAGQAHAEAGgCQAFgBACgCQACgEgBgFQgCgKgJACIgCgJIABAAQAHgCAGAFQAFAFACAIQACAJgDAEQgEAHgJACQgKADgKgHIgQgKQgLgGgKACIAHAgIgJACg");
	this.shape_12.setTransform(176.3,-43.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgdAbQgHgHABgJQAAgJAIgGQALgJAOAEQgCgMAGgHQAGgHAJABQAIAAAGAGQAGAHgBAIQAAAIgGAFQgFADgFACIgKgBQADAOgLAKQgGAHgIAAQgKAAgHgIgAgJgDQgHABgEACQgFAFgBAGQgBAGAEAFQAFAFAGgBQAGAAAFgFQACgEACgGQABgHgEgEQgCgDgFAAIgCAAgAAHgVQgEADAAAFQgBAFAEADQADAEAFAAQAFAAAEgEQAEgEAAgEQABgFgDgEQgEgEgFAAQgFABgEAEg");
	this.shape_13.setTransform(136.9,-121.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgVAbIAGgGIAJAKIgGAGgAgaAVIAGgFIAFAFIgGAGgAgPAVIgFgFIAqgoIgNgFIAHgHIAOAFIAGAGIgzAugAgPAVgAgjALIAFgGIAKALIgGAFgAgUAQg");
	this.shape_14.setTransform(132.7,-125.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgMAoQgIgCgEgFQgFgHACgHIAIACQgBAIAKADQAGACAEgEQAEgEACgGQADgLgHgGQgDgDgNgDIALglIAfAKIgDAJIgZgIIgEATQALAFAFAFQAGAIgEANQgDALgHAFQgEAEgGAAIgGgBg");
	this.shape_15.setTransform(57.4,-173);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAAAlIAAgIIgGgCIARg5IgNACIACgIIAOgEIAHADIgVBCIANAEIgCAIgAAAAlIgIgDIACgHIAGACIAAAIgAgVAeIADgHIAMAEIgCAHg");
	this.shape_16.setTransform(51.4,-174.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgPAiQgCgJADgJQACgHAGgIIAHgMQADgHgBgGQgBgFgCgCQgEgCgFABQgKACABAJIgIACIAAgBQgCgHAFgGQAFgGAHgBQAJgCAFADQAHAEACAJQACAKgGAKIgKAQQgHALACAKIAggHIACAJIgoAJg");
	this.shape_17.setTransform(-35.5,-177.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgKAhIAMgDIgMg6IgLAKIgCgKIALgKIAIgCIAOBEIgIACIACAIIgMADgAAEAmIAIgCIgIACgAAEAmgAACAeIAIgCIACAIIgCgIIANgDIABAIIgMADIgIACgAAMAkg");
	this.shape_18.setTransform(-41.1,-176);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgCAXQgsgNAIgXQACgGAFgEQAGgEAGACIgCAIQgHgCgCAIQgDAJAKAGQAIAGAKADIAEACQgJgLADgHQADgJAIgDQAHgCAKADQAJADAGAHQAGAGgDAJQgEAQgTAAQgIAAgKgEgAAGgHQgFACgBAFQgBAGAEAGQAEAEAIACQAFACAFgDQAFgEACgFQACgFgFgDQgFgEgGgCIgIgBIgEAAg");
	this.shape_19.setTransform(-172.6,-54.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AghAWQgFgFgBgIQgCgIACgEQAEgHAIgBQAOgEAIAMQACgRAOgEQAKgCAIAEQAJAFACAKQACAHgCAGQgDAGgJACIgCgIQAJgCgDgJQgBgHgGgCQgEgCgIABQgJACgDAIQgBAFACAKIgGACQgCgKgEgCQgFgFgIACQgFABgCACQgCADABAFQABAFACACQAEADAEgBIACAIIgBAAIgFAAQgFAAgEgDg");
	this.shape_20.setTransform(-175,39);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(1,1,1).p("ANx6sQBJAnBHAsIABABQBIAtBDAxQBEAzA+A4QBAA3A5A8QA6A+A0BCIgWARARr3NIAigtANx6sIgZAwAQC5YIgOAXAUP2PIgTATAVfz3IApglAGa9dQBSATBRAaQBPAaBNAhQBNAgBLApALP7cIAKgZAI98wIgQA1ABM+GQBUACBUAKABM+GIgBAbADt9CIAHg4QBUAKBSATIgGAbAaruBQAmBLAgBPQAfBMAZBRIgaAIAa+rSIAzgVAaruBIgXANAdVmnQASBSAMBTQANBUAFBTIg4ACAdZj/IAagDAdVmnIg3AMAcppKQAZBPATBUAZWwSQAuBHAnBKAX2ycQA0BCAsBIAYpv0IAtgeAd6DyQgKBUgTBTQgSBRgZBRQgaBPghBOQggBOgoBKIgygYAdDGTIAaAGAeIBKQgEBWgKBSIg3gGAdsBKIAcAAAcyI7Ig1gRAbeLOIAZAKAZcQBQgCACAAABQgsBHgxBBQgzBFg4A+Qg4BAg8A4IglgpAavNwQgmBKgtBHAEDdzQhUANhTAEIgCg3AEAdYIADAbALqbxQhOAfhRAYQhQAahSASQgBABAAgBQhSAThTAMAGpdUIgMg2AJDcPIAIAZALqbxIgWg0AV/T8IATATAX9SMIgsgiASeX1QhDA0hHAtQhHAuhLAnQhJAlhPAhAQUZWIgeguASOXgIAQAVAN2aSIAMAZAUeWHQg+A7hCAzAZEPyIAYAPAeFhbQAFBUgCBRA6utxQAmhIAthHQABgCAAgBQAthIAyhBQAzhGA4g+QA4g/A8g4QA9g7BEg0QBCgzBHguQBGgtBMgnIAMAZA72rZQAfhOAphKIAxAZA8xo8QAZhQAihNIAaAKA78osIg1gQA95jzQAJhUAThTIAaAGA+HhLQADhUALhUA9DjsIg2gHA9rhKIgcgBA9dmaQAShRAahRAkC9zQBVgMBTgFQBUgFBSADAhY9NIgCg3AkC9zIAFAbAro7xQBOgeBRgZQBPgZBSgUIABABQBTgTBSgMAmb8eIgMg2ApJ8oIAIAZArS6+IgWgzAv04oIgegvAyb32IARAWAz21fIgmgoA19z8IgTgUA37yMIAsAhAuA6rQBKglBOghA5Cv0IgYgPA0OWTQhAg4g5g9Qg7g+gyhCQg1hDgthHQgthHgmhLQgnhKgghPQgfhMgZhRAz9V/IgRAUA3fSNIgVARA2HUeIApglAtxaxQhJgmhIguIgBgBQhHgshCgyIAigtAvzZGIgPAXAtxaxIAagyAyMX+QhFgzg9g4AmYdeQhRgShRgZQhQgZhOghQhNgghMgoAo6czIAQg1ArNbfIgLAaAhKeIQhVgDhTgKIAIg3AhJdrIgBAdAjyd7QhUgKhSgTAmTdDIgFAbA9UGnQgThSgLhTQgNhUgFhSIA4gDA9XD+IgbAEA9UGnIA2gLA7wLpIAzgVA6RN1IgYANA8OJDIgaAJQgZhRgThUA4oP2IguAeA+EBcQgFhWAChRABceEQhUAFhSgB");
	this.shape_21.setTransform(-0.1,-0.4);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = this.shape_21.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.4,-194.3,275,194);


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


(lib.B787EICAS_Gauge_EGTWhitePointer = function(mode,startPosition,loop) {
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


(lib.pullout = function(mode,startPosition,loop) {
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


(lib.point_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.point("synched",0);
	this.instance.setTransform(-29.2,1.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape.setTransform(381.2,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAGAAQAHAAAJAFIgFAPQgGgEgGAAQgFAAgDADQgEADgBAGQgDAIAAAKIAAAvg");
	this.shape_1.setTransform(376.4,3.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgeAkQgLgNAAgXQAAgVALgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgLAAQgJAAgIAHg");
	this.shape_2.setTransform(367.6,3.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGBAIAAh/IAOAAIAAB/g");
	this.shape_3.setTransform(360.6,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHADgGQADgGAGgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACADAFQAFAEAAAGIABAPIAAATQAAAWABAGQABAGAEAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgDAFQgJACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgQACg");
	this.shape_4.setTransform(353.6,3.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_5.setTransform(339.1,3.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgHBAIAAhbIAOAAIAABbgAgHgtIAAgSIAOAAIAAASg");
	this.shape_6.setTransform(332.7,1.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAWBAIAAg7QAAgKgGgFQgEgGgKAAQgFAAgHAEQgFADgDAHQgDAEAAALIAAAzIgQAAIAAh/IAQAAIAAAuQALgMAPAAQALAAAHADQAIAEADAIQAEAHAAAMIAAA7g");
	this.shape_7.setTransform(325.7,1.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_8.setTransform(318.2,1.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAWBAIAAg7QgBgKgEgFQgFgGgKAAQgFAAgGAEQgGADgDAHQgDAEAAALIAAAzIgPAAIAAh/IAPAAIAAAuQAMgMAOAAQALAAAHADQAIAEADAIQAEAHgBAMIAAA7g");
	this.shape_9.setTransform(305.7,1.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_10.setTransform(298.2,1.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgGBAIAAhbIAOAAIAABbgAgGgtIAAgSIAOAAIAAASg");
	this.shape_11.setTransform(293.7,1.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AASAuIgPg2IgDgQIgRBGIgRAAIgchbIAQAAIAOA0IAHAUIAEgTIAPg1IAOAAIAOA0IAFASIAFgSIAQg0IAQAAIgdBbg");
	this.shape_12.setTransform(285.1,3.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgLAAgPQAAgNAFgKQAFgLAJgHQAJgFALAAQAHgBAHAEQAGAEAFAFIAAguIAPAAIAAB/IgPAAIAAgMQgJAOgQAAQgKAAgJgGgAgQgJQgGAJgBAQQAAASAIAJQAHAJAJAAQAKAAAHgJQAIgIgBgSQABgRgIgJQgHgJgLAAQgIAAgIAJg");
	this.shape_13.setTransform(268.3,1.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgNAAQgJAAgHAHg");
	this.shape_14.setTransform(258.6,3.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_15.setTransform(251.2,1.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAJgDIAAgEQAAgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAFAEABAGIABAPIAAATQAAAWAAAGQABAGADAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgDAEQgBADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQADgFgBgLIAAgFQgIADgQACg");
	this.shape_16.setTransform(243.6,3.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgGBAIAAhbIANAAIAABbgAgGgtIAAgSIANAAIAAASg");
	this.shape_17.setTransform(236.7,1.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_18.setTransform(230.4,3.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_19.setTransform(220.6,3.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_20.setTransform(211.1,3.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_21.setTransform(202.1,3.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAHgEAEgHQACgFAAgLIAAgFQgIADgPACg");
	this.shape_22.setTransform(192.6,3.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_23.setTransform(178.1,3.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgHBAIAAhbIAOAAIAABbgAgHgtIAAgSIAOAAIAAASg");
	this.shape_24.setTransform(171.7,1.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_25.setTransform(162.2,1.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_26.setTransform(155.1,3.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgGBAIAAhbIAOAAIAABbgAgGgtIAAgSIAOAAIAAASg");
	this.shape_27.setTransform(148.7,1.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgGBAIAAh/IAOAAIAAB/g");
	this.shape_28.setTransform(144.6,1.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AATBAIgdgwIgLALIAAAlIgQAAIAAh/IAQAAIAABHIAjgjIAUAAIgiAhIAmA6g");
	this.shape_29.setTransform(138.7,1.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_30.setTransform(129.4,3.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_31.setTransform(119.6,3.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAWBAIAAg7QAAgKgGgFQgEgGgKAAQgFAAgHAEQgFADgDAHQgDAEAAALIAAAzIgQAAIAAh/IAQAAIAAAuQALgMAPAAQALAAAHADQAIAEADAIQAEAHAAAMIAAA7g");
	this.shape_32.setTransform(109.7,1.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_33.setTransform(100.4,3.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgGBAIAAh/IANAAIAAB/g");
	this.shape_34.setTransform(88.6,1.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAJgDIAAgEQAAgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAFAEABAGIABAPIAAATQAAAWABAGQAAAGADAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgDAEQgBADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQADgFgBgLIAAgFQgIADgQACg");
	this.shape_35.setTransform(81.6,3.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_36.setTransform(69.2,3.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAIAAAJAFIgFAPQgHgEgFAAQgGAAgCADQgDADgCAGQgDAIAAAKIAAAvg");
	this.shape_37.setTransform(59.4,3.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_38.setTransform(50.6,3.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_39.setTransform(40.6,3.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgXAHIAAgOIAvAAIAAAOg");
	this.shape_40.setTransform(32.7,3.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_41.setTransform(24.6,3.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_42.setTransform(14.6,3.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_43.setTransform(4.6,3.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AApBAIgPgnIg0AAIgPAnIgSAAIAyh/IAQAAIA1B/gAgIgZIgOAkIAqAAIgNgiIgHgbQgDANgFAMg");
	this.shape_44.setTransform(-10.3,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-10.4,417.6,24.1);


(lib.point_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.point("synched",0);
	this.instance.setTransform(-40.9,1.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgLAAgPQAAgNAFgKQAFgLAJgHQAJgFALAAQAHgBAHAEQAGAEAFAFIAAguIAPAAIAAB/IgPAAIAAgMQgJAOgQAAQgKAAgJgGgAgQgJQgGAJgBAQQAAASAIAJQAHAJAJAAQAKAAAHgJQAIgIgBgSQABgRgIgJQgHgJgLAAQgIAAgIAJg");
	this.shape.setTransform(130.6,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHADgGQADgGAFgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgGAEQgFAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQALAAAIADQAHACAEAFQADAEABAGIACAPIAAATQAAAWABAGQABAGACAFIgQAAQgDgFAAgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgCADgBAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgPACg");
	this.shape_1.setTransform(120.9,3.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgnBBIAAh/IAPAAIAAAMQAFgHAGgEQAGgDAIAAQALAAAKAGQAJAGAEALQAFAMAAANQAAAOgFAKQgFALgKAGQgKAGgKAAQgHAAgGgDQgGgDgEgFIAAAtgAgRgqQgIAJAAASQAAAQAHAJQAIAIAKAAQAJAAAHgJQAIgIgBgRQABgSgIgJQgHgJgJAAQgJAAgIAKg");
	this.shape_2.setTransform(111.2,4.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgFQgGgGgJAAQgFAAgHAEQgGADgCAHQgDAEAAALIAAAzIgQAAIAAh/IAQAAIAAAuQAMgMAOAAQALAAAHADQAIAEADAIQADAHABAMIAAA7g");
	this.shape_3.setTransform(101,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_4.setTransform(91.7,3.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_5.setTransform(84.5,1.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHADgGQACgGAGgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQAMAAAHADQAHACADAFQAEAEACAGIABAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgQACg");
	this.shape_6.setTransform(76.9,3.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAGAAQAHAAAJAFIgGAPQgFgEgGAAQgFAAgDADQgEADgCAGQgCAIAAAKIAAAvg");
	this.shape_7.setTransform(69.7,3.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_8.setTransform(61.7,3.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgYA9QgMgFgHgKQgGgKgBgNIAQgCQACAKAEAGQAEAHAJADQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgFQgEgEgIgDIgVgGQgRgFgHgBQgKgGgEgHQgFgHAAgIQAAgLAGgHQAFgJALgFQALgEAMAAQANAAALAEQALAFAGAJQAGAJAAALIgQABQgCgMgHgGQgIgGgOAAQgOAAgHAFQgHAGAAAJQAAAGAFAFQAFAEASAFQAVAFAIADQALAEAGAHQAFAIAAAKQAAALgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape_9.setTransform(50.9,1.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgcA7QgLgGgFgMQgFgMAAgVIAAhIIARAAIAABIQAAARADAIQADAIAIAEQAHAFALAAQARAAAIgIQAIgJAAgZIAAhIIARAAIAABIQAAAUgEAMQgFALgLAHQgLAHgTAAQgQAAgMgGg");
	this.shape_10.setTransform(33.4,1.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag0BAIAAh/IAtAAQANAAAHACQAMACAHAHQALAJAFAOQAFAMAAARQAAAOgEALQgDALgGAHQgFAIgGAEQgHAEgJADQgJACgJAAgAgjAxIAcAAQAKAAAIgDQAHgCAEgEQAGgGAEgKQADgLAAgNQAAgUgHgKQgGgLgKgEQgHgCgNAAIgbAAg");
	this.shape_11.setTransform(20.7,1.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgdA6QgNgJgHgQQgGgQAAgRQgBgTAIgQQAIgOAOgIQAOgIAPAAQAUAAANAKQANAKAFASIgRADQgEgOgIgGQgJgHgNAAQgNABgKAGQgKAIgEAMQgEAMAAAMQAAAPAFAMQAEANALAFQAKAHAJAAQAPAAAKgJQAKgIADgQIARAEQgFAVgOALQgOALgUAAQgTAAgNgIg");
	this.shape_12.setTransform(7.6,1.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_13.setTransform(-9.1,3.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgfA6QgOgKgIgOQgHgQAAgRQAAgeARgSQARgSAaAAQARAAAPAJQAOAIAIAPQAHAPAAASQAAATgIAQQgIAPgOAJQgPAHgQAAQgRAAgOgIgAgdgmQgNAMAAAbQAAAYAMANQANAOARAAQATAAAMgOQANgNAAgZQAAgOgGgMQgFgMgKgGQgLgHgMAAQgQAAgNANg");
	this.shape_14.setTransform(-21,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.4,-10.4,181.6,24.1);


(lib.point_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.point("synched",0);
	this.instance.setTransform(-62.1,1.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape.setTransform(93.7,3.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgaA7QgLgIAAgPIAQACQABAHAEAEQAGAEAKAAQAJAAAGgEQAGgFACgIQABgEAAgQQgKAMgOAAQgSAAgLgOQgLgOAAgRQABgNAEgMQAFgLAJgGQAJgGAMAAQAPAAALANIAAgLIAOAAIAABPQABAVgFAKQgFAJgJAFQgJAFgNAAQgRAAgJgHgAgQgrQgHAIAAARQAAASAHAHQAHAIAJAAQALAAAIgIQAHgHAAgSQAAgRgIgIQgHgJgLAAQgJAAgHAJg");
	this.shape_1.setTransform(83.4,5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_2.setTransform(73.6,3.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AghApQgJgIAAgLQABgHADgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQADgKAEgGQAFgHAJgDQAKgDAJAAQANAAAHADQAHACAEAFQADAEABAGIABAPIAAATQAAAWACAGQABAGACAFIgQAAQgDgFAAgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgDADAAAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_3.setTransform(63.7,3.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgbA6QgPgIgIgQQgIgPAAgTQAAgRAIgQQAIgQAOgIQAPgIARAAQAOAAAMAEQALAFAGAIQAHAIADANIgPAEQgDgJgFgGQgEgGgIgDQgIgEgKAAQgJAAgJAEQgIADgFAHQgGAFgDAHQgFAMAAANQAAAQAGAMQAGALAMAGQALAGALAAQALAAAKgFQALgDAFgGIAAgXIgmAAIAAgOIA3AAIAAAuQgNAKgNAFQgNAFgOAAQgRAAgQgIg");
	this.shape_4.setTransform(51.6,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_5.setTransform(37.7,1.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_6.setTransform(30.7,3.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_7.setTransform(20.6,3.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgqBAIAAh/IBVAAIAAAQIhEAAIAAAnIA7AAIAAAOIg7AAIAAA6g");
	this.shape_8.setTransform(10.5,1.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AASAuIgPg2IgDgQIgRBGIgRAAIgchbIAQAAIAOA0IAHAUIAEgTIAPg1IAOAAIAOA0IAFASIAFgSIAQg0IAPAAIgcBbg");
	this.shape_9.setTransform(-6.8,3.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_10.setTransform(-18.3,3.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_11.setTransform(-25.3,1.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_12.setTransform(-32.3,3.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgvBAIAAh/IAvAAQAOAAAJAEQAJAEAFAIQAFAIAAAJQAAAJgEAGQgFAIgJAFQAMACAGAHQAGAIAAALQAAAJgEAIQgDAJgGADQgGAEgIADQgJACgMAAgAgeAxIAeAAIAMgBQAGgBAEgDQADgCADgFQADgEAAgHQAAgGgEgGQgEgFgGgCQgHgCgKAAIgeAAgAgegJIAcAAQAJAAAFgBQAHgCADgFQADgEAAgHQAAgHgDgEQgDgFgGgCQgFgBgMAAIgaAAg");
	this.shape_13.setTransform(-43.1,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.6,-10.4,165.6,24.1);


(lib.B787SynopticNDMapHalfVSD = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text
	this.instance = new lib.B787NDMAPReferencePoint("synched",0);
	this.instance.setTransform(163.5,294.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33C300").s().p("AAPAdIgFgQIgTAAIgGAQIgGAAIAUg5IAFAAIASA5gAgHAHIAPAAIgIgZg");
	this.shape.setTransform(179.6,301);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33C300").s().p("AgPAdIAAg5IAbAAIAAAGIgVAAIAAATIATAAIAAAEIgTAAIAAAVIAZAAIAAAHg");
	this.shape_1.setTransform(175.5,301);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#33C300").s().p("AgQAQIAHAAQAAAFADACQACACAEAAQAEAAADgDQADgDAAgEQAAgHgIgEIgGgEQgFgBgCgDQgDgEAAgGQAAgHAEgFQAFgEAGAAQAFAAAEAEQAEADAAAGIgHAAQAAgEgDgCQgCgBgCAAQgCAAgDADQgCADAAADQAAAGAHAFIAHAEQAFABACADQADAEAAAGQAAAIgFAFQgFAEgHAAQgQAAAAgPg");
	this.shape_2.setTransform(171.3,301);

	this.instance_1 = new lib.B787NDMAPVSDAirport("synched",0);
	this.instance_1.setTransform(140.8,336.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CCFF").s().p("AADAdIAAgGIgFAAIAAAGIgKAAIAAgGIAKAAIAAgsIgKAFIAAgHIALgFIAEAAIAAAzIAKAAIAAAGgAADAdIgFAAIAAgGIAFAAIAAAGgAADAXg");
	this.shape_3.setTransform(163.3,342.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00CCFF").s().p("AgQAdIAAg5IAQAAQAIAAAEADQAFAEAAAJQAAAMgJACQgGAEgLAAIAAAXgAgJAAIAHAAQAMAAAAgMQAAgKgKAAIgJAAg");
	this.shape_4.setTransform(154.9,342.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00CCFF").s().p("AgPAdIAAg5IAbAAIAAAGIgVAAIAAATIATAAIAAAEIgTAAIAAAVIAZAAIAAAHg");
	this.shape_5.setTransform(150.8,342.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00CCFF").s().p("AALAdIgXgdIAAAdIgGAAIAAg5IAGAAIAAAbIATgbIAIAAIgTAcIAXAdg");
	this.shape_6.setTransform(146.6,342.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAJAdIgFgNQgEgHgDgFIgGAAIAAAZIgHAAIAAg5IAQAAQAEAAAEAEQAEAEAAAHQAAAMgKADQAFADAEAKIAGAOgAgJgBIAGAAQADAAADgDQACgDAAgFQAAgKgHAAIgHAAg");
	this.shape_7.setTransform(163.6,333.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgKAcQgEgDAAgGIAGAAQAAAGAIAAQAEAAACgEQADgDAAgGQAAgHgGgDQgDgCgHAAIAAgEQAHAAACgCQAFgDAAgGQAAgEgDgDQgCgBgCAAQgDgBgCACQgDACAAADIgGAAIAAgBQAAgGAEgDQAEgDAGAAQAFAAAEADQAEAEAAAHQAAAJgJAFQALACAAAMQAAAJgEAEQgFAGgGAAQgGAAgEgDg");
	this.shape_8.setTransform(159.5,333.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AADAdIAAgGIAKAAIAAAGgAgCAdIAAgGIAFAAIAAAGgAgMAdIAAgGIAKAAIAAAGgAgCAXIAAgsIgKAFIAAgHIALgFIAEAAIAAAzgAgCAXg");
	this.shape_9.setTransform(155.4,333.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF00FF").s().p("AgIAmQAHgJABgKQADgJAAgLQAAgUgLgQIAFAAQAFAHAEALQADAKAAAJQAAAXgMAPg");
	this.shape_10.setTransform(174,318.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF00FF").s().p("AgNAVQgEgJAAgMQAAgLAEgJQAGgKAJAAQAHAAAFADQAEAFAAAHIgGAAQAAgEgDgCQgCgCgEAAQgHgBgEAJQgCAHAAAIQAAAKACAGQAEAJAHAAQAJAAAAgJIAGAAIAAABQAAAGgEAEQgFAEgHAAQgJAAgGgKg");
	this.shape_11.setTransform(169.9,318);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF00FF").s().p("AgCAdIAAgzIgRAAIAAgGIAnAAIAAAGIgRAAIAAAzg");
	this.shape_12.setTransform(165.7,318);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF00FF").s().p("AAMAdIgXgsIAAAsIgGAAIAAg5IAGAAIAXAsIAAgEIAAgoIAGAAIAAA5g");
	this.shape_13.setTransform(161.6,318);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF00FF").s().p("AgKAdIAAgGIAIAAIAAgtIgIAAIAAgGIAVAAIAAAGIgIAAIAAAtIAIAAIAAAGg");
	this.shape_14.setTransform(157.4,318);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF00FF").s().p("AAEAmQgFgIgEgKQgDgKAAgKQAAgKADgJQAEgLAFgHIAFAAQgLAQAAAVQAAALACAJQACAJAHAJg");
	this.shape_15.setTransform(153.3,318.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00FFFF").s().p("AgNAVQgEgIAAgNQAAgLAEgJQAGgKAJAAQAHAAAFADQAEAFAAAHIgGAAQAAgEgDgDQgCgBgEAAQgHAAgEAIQgCAHAAAIQAAAKACAGQAEAJAHAAQAJAAAAgJIAGAAIAAABQAAAGgEAFQgFADgHAAQgJAAgGgKg");
	this.shape_16.setTransform(15.2,365.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00FFFF").s().p("AgNAdIAAg5IAbAAIAAAGIgVAAIAAAVIATAAIAAAEIgTAAIAAAag");
	this.shape_17.setTransform(11,365.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00FFFF").s().p("AgCAdIAAgzIgRAAIAAgGIAnAAIAAAGIgRAAIAAAzg");
	this.shape_18.setTransform(6.9,365.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00FFFF").s().p("AgCAdIAAgFIAAgKIAAgNIgIgNIgJgQIAHAAIAMAYIANgYIAHAAIgJAQIgIANIAAANIAAAPg");
	this.shape_19.setTransform(31.8,374.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00FFFF").s().p("AgQAdIAAg5IAHAAIAAAyIAaAAIAAAHg");
	this.shape_20.setTransform(27.6,374.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00FFFF").s().p("AAMAdIgXgsIAAAsIgGAAIAAg5IAGAAIAXAsIAAgEIAAgoIAGAAIAAA5g");
	this.shape_21.setTransform(23.5,374.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00FFFF").s().p("AgPAUQgFgIAAgMQAAgKAFgJQAFgLAKAAQALAAAGALQAEAIAAALQAAAMgFAIQgFALgLAAQgKAAgFgLgAgKgPQgDAHAAAIQAAAKADAGQAEAJAGAAQAHAAAEgJQADgHAAgJQAAgIgDgHQgEgJgHAAQgGAAgEAJg");
	this.shape_22.setTransform(19.3,374.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00FFFF").s().p("AAPAdIgFgQIgTAAIgGAQIgGAAIAUg5IAFAAIASA5gAgHAHIAPAAIgIgZg");
	this.shape_23.setTransform(11,374.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00FFFF").s().p("AgCAdIAAgzIgRAAIAAgGIAnAAIAAAGIgRAAIAAAzg");
	this.shape_24.setTransform(6.9,374.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#33C300").s().p("AgNAVQgEgJAAgMQAAgLAEgJQAGgKAJAAQAHAAAFADQAEAFAAAHIgGAAQAAgEgDgDQgCgBgEAAQgHAAgEAIQgCAHAAAIQAAAKACAGQAEAJAHAAQAJAAAAgJIAGAAIAAABQAAAGgEAFQgFADgHAAQgJAAgGgKg");
	this.shape_25.setTransform(65.1,401.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#33C300").s().p("AAOAdIAAgrIgLAiIgEAAIgMggIAAApIgGAAIAAg5IAHAAIAMAnIANgnIAHAAIAAA5g");
	this.shape_26.setTransform(60.9,401.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#33C300").s().p("AgNAdIAAg5IAbAAIAAAGIgVAAIAAAVIATAAIAAAEIgTAAIAAAag");
	this.shape_27.setTransform(56.8,401.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgMADIAAgFIAZAAIAAAFg");
	this.shape_28.setTransform(65.8,36.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgMADIAAgFIAZAAIAAAFg");
	this.shape_29.setTransform(60.1,36.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgMADIAAgFIAZAAIAAAFg");
	this.shape_30.setTransform(54.4,36.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgQAQIAHAAQAAAFADACQACACAEAAQAEAAADgDQADgDAAgEQAAgHgIgEIgGgEQgFgBgCgDQgDgEAAgGQAAgHAEgFQAFgEAGAAQAFAAAEAEQAEADAAAGIgHAAQAAgEgDgCQgCgBgCAAQgCAAgDADQgCADAAADQAAAHAHAEIAHAEQAFABACADQADAEAAAGQAAAIgFAEQgFAFgHAAQgQAAAAgPg");
	this.shape_31.setTransform(48.8,36.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAPAdIgFgQIgTAAIgGAQIgGAAIAUg5IAFAAIASA5gAgHAHIAPAAIgIgZg");
	this.shape_32.setTransform(44.6,36.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgCAdIAAgzIgRAAIAAgGIAnAAIAAAGIgRAAIAAAzg");
	this.shape_33.setTransform(40.5,36.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAEAnIAAgIIANAAIAAAIgAAEAnIgHAAIAAgIIAHAAIAAAIgAgQAnIAAgIIANAAIAAAIgAAEAfIgHAAIAAg7IgNAHIAAgKIANgHIAHAAIAABFgAgDAfg");
	this.shape_34.setTransform(27.5,35.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgQAQIAHAAQAAAFADACQACACAEAAQAEAAADgDQADgDAAgEQAAgHgIgEIgGgEQgFgBgCgDQgDgEAAgGQAAgHAEgFQAFgEAGAAQAFAAAEAEQAEADAAAGIgHAAQAAgEgDgCQgCgBgCAAQgCAAgDADQgCADAAADQAAAHAHAEIAHAEQAFABACADQADAEAAAGQAAAIgFAEQgFAFgHAAQgQAAAAgPg");
	this.shape_35.setTransform(10,36.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgNAVQgEgHAAgOQAAgKAEgJQAFgLAKAAQAHAAAEAEQAFAEAAAGIgGAAQAAgDgDgDQgDgCgEAAQgGABgEAIQgCAHAAAIQAAAKACAGQAEAJAHAAIAJgCIAAgRIgLAAIAAgGIARAAIAAAaQgIAFgHAAQgKAAgGgKg");
	this.shape_36.setTransform(5.9,36.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF00FF").s().p("AgMAzQAKgMACgNQAEgNAAgOQAAgbgQgWIAIAAQAHAJAFAPQAFAOAAAMQAAAfgRAUg");
	this.shape_37.setTransform(276.6,31.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF00FF").s().p("AgSAbQgGgLAAgQQAAgQAGgLQAIgOANAAQAKAAAFAFQAHAGAAAJIgIAAQgBgFgEgEQgDgCgGAAQgIAAgFAMQgEAIAAAMQAAANAEAIQAFAMAIAAQANAAABgLIAIAAIAAABQAAAIgHAGQgGAFgJAAQgNAAgIgPg");
	this.shape_38.setTransform(270.9,30.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF00FF").s().p("AgDAnIAAhFIgWAAIAAgIIA0AAIAAAIIgXAAIAABFg");
	this.shape_39.setTransform(265.2,30.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF00FF").s().p("AAPAnIgeg8IAAA8IgIAAIAAhNIAJAAIAeA7IAAgFIAAg2IAIAAIAABNg");
	this.shape_40.setTransform(259.5,30.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF00FF").s().p("AgOAnIAAgIIALAAIAAg9IgLAAIAAgIIAdAAIAAAIIgLAAIAAA9IALAAIAAAIg");
	this.shape_41.setTransform(253.8,30.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF00FF").s().p("AAFAzQgHgKgFgOQgEgNgBgOQABgNAEgNQAFgOAHgKIAHAAQgPAWAAAcQAAAPADAMQADAMAJAMg");
	this.shape_42.setTransform(248.1,31.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgUA1QgIgGAAgNIAMAAQAAANAQAAQAIAAAFgHQAEgGAAgKQAAgOgKgGQgHgEgPAAIAAgKQAOAAAFgDQAJgFAAgNQAAgGgEgFQgFgEgFAAQgGAAgEADQgFAEAAAGIgLAAIAAgBQAAgLAIgHQAHgFAMAAQAKAAAIAGQAIAGAAANQAAATgTAIQAWAGAAAWQAAAPgIAKQgJAKgNAAQgMAAgHgFg");
	this.shape_43.setTransform(149.1,33.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgUA1QgIgGAAgNIAMAAQAAANAQAAQAIAAAFgHQAEgGAAgKQAAgOgKgGQgHgEgPAAIAAgKQAOAAAFgDQAJgFAAgNQAAgGgEgFQgFgEgFAAQgGAAgEADQgFAEAAAGIgLAAIAAgBQAAgLAIgHQAHgFAMAAQAKAAAIAGQAIAGAAANQAAATgTAIQAWAGAAAWQAAAPgIAKQgJAKgNAAQgMAAgHgFg");
	this.shape_44.setTransform(141.1,33.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAFA3IAAgLIATAAIAAALgAgEA3IAAgLIAJAAIAAALgAgEA3IgTAAIAAgLIATAAIAAhUIgSAJIAAgNIATgKIAIAAIAABiIgJAAIAAALgAAFAsg");
	this.shape_45.setTransform(133.2,33.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAOAdIAAgrIgLAiIgEAAIgMggIAAApIgGAAIAAg5IAHAAIAMAnIANgnIAHAAIAAA5g");
	this.shape_46.setTransform(275.7,53.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAMAdIgXgsIAAAsIgGAAIAAg5IAGAAIAXAsIAAgEIAAgoIAGAAIAAA5g");
	this.shape_47.setTransform(271.5,53.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgLAaQgFgFAAgIQAAgKAKgFQgIgEAAgIQAAgIAEgDQAFgFAFAAQAGAAAEAFQAFAEAAAHQAAAEgCADIgGAFQAKAEAAALQAAAIgFAFQgFAFgHAAQgGAAgFgFgAgGAEQgDAEAAAEQAAAFADAEQADAEADAAQAEAAADgEQADgEAAgFQAAgEgDgEQgDgEgEAAQgDAAgDAEgAgFgVQgCADAAAEQAAAEACADQADACACAAQADAAADgCQACgDAAgEQAAgEgCgDQgDgDgDABQgCgBgDADg");
	this.shape_48.setTransform(267.4,53.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgDAFIAAgIIAHAAIAAAIg");
	this.shape_49.setTransform(263.2,55.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgPAeIAAgGQAAgHAEgGQADgFAGgFIAGgGQAEgFAAgEQAAgEgDgDQgCgCgDAAQgHAAAAAHIgHAAIAAgBQAAgFAFgEQAEgDAFAAQAGAAAEADQAFAEAAAHQAAAIgHAGIgKAJQgGAHAAAIIAYAAIAAAHg");
	this.shape_50.setTransform(259.1,53.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgQAdIAAgHIAXgsIgVAAIAAgGIAcAAIAAAGIgWAsIAZAAIAAAHg");
	this.shape_51.setTransform(275.7,42.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgKAcQgEgDAAgHIAGAAQAAAHAIAAQAEAAACgDQADgEAAgFQAAgIgGgDQgDgCgHAAIAAgFQAHAAACgCQAFgCAAgHQAAgDgDgCQgCgDgCAAQgDAAgCACQgDACAAADIgGAAIAAAAQAAgGAEgEQAEgDAGAAQAFAAAEADQAEAEAAAGQAAALgJAEQALACAAANQAAAIgEAFQgFAFgGAAQgGAAgEgDg");
	this.shape_52.setTransform(271.5,42.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgDAEIAAgIIAHAAIAAAIg");
	this.shape_53.setTransform(267.4,45.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgKAcQgEgDAAgHIAGAAQAAAHAIAAQAEAAACgDQADgEAAgFQAAgIgGgDQgDgCgHAAIAAgFQAHAAACgCQAFgCAAgHQAAgDgDgCQgCgDgCAAQgDAAgCACQgDACAAADIgGAAIAAAAQAAgGAEgEQAEgDAGAAQAFAAAEADQAEAEAAAGQAAALgJAEQALACAAANQAAAIgEAFQgFAFgGAAQgGAAgEgDg");
	this.shape_54.setTransform(263.2,42.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgNATQgEgHAAgMQAAgKAEgIQAEgMAJAAQAKAAAEAMQAEAIAAAKQAAALgEAIQgFAMgJAAQgJAAgEgMgAgIgOQgCAGAAAIQAAAJACAGQADAKAFAAQAGAAADgKQACgGAAgJQAAgIgCgGQgDgKgGAAQgFAAgDAKg");
	this.shape_55.setTransform(259.1,42.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgPAeIAAgGQAAgHAEgGQADgFAGgFIAGgGQAEgFAAgEQAAgEgDgDQgCgCgDAAQgHAAAAAHIgHAAIAAgBQAAgFAFgEQAEgDAFAAQAGAAAEADQAFAEAAAHQAAAIgHAGIgKAJQgGAHAAAIIAYAAIAAAHg");
	this.shape_56.setTransform(254.9,42.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgPAeIAAgGQAAgHAEgGQADgFAGgFIAGgGQAEgFAAgEQAAgEgDgDQgCgCgDAAQgHAAAAAHIgHAAIAAgBQAAgFAFgEQAEgDAFAAQAGAAAEADQAFAEAAAHQAAAIgHAGIgKAJQgGAHAAAIIAYAAIAAAHg");
	this.shape_57.setTransform(250.8,42.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#33C300").s().p("AgSAcQgGgKAAgSQAAgPAFgLQAIgPAOAAQAJAAAGAFQAHAFAAAJIgJAAQAAgFgEgDQgEgCgEAAQgJAAgGAMQgDAIAAAMQAAANADAIQAGAMAJAAQAEAAAIgDIAAgWIgOAAIAAgIIAXAAIAAAjQgLAHgKAAQgOAAgIgOg");
	this.shape_58.setTransform(172.4,32.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#33C300").s().p("AAUAnIgGgWIgbAAIgHAWIgIAAIAahNIAHAAIAZBNgAgKAJIAWAAIgMgig");
	this.shape_59.setTransform(166.7,32.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#33C300").s().p("AASAnIAAg6IgOAuIgFAAIgQgsIAAA4IgJAAIAAhNIAKAAIAQA0IASg0IAKAAIAABNg");
	this.shape_60.setTransform(161,32.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#33C300").s().p("AAOAnIgegnIAAAnIgJAAIAAhNIAJAAIAAAlIAaglIAKAAIgZAlIAfAog");
	this.shape_61.setTransform(120.9,32.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#33C300").s().p("AANAnQgEgMgEgGQgFgIgEgIIgJAAIAAAiIgJAAIAAhNIAVAAQAHAAAFAGQAGAFgBAKQAAAPgNAFQAGAEAGANIAIATgAgNgBIAJAAQAEAAAEgFQAEgEgBgHQAAgNgLAAIgJAAg");
	this.shape_62.setTransform(115.2,32.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#33C300").s().p("AgDAnIAAhFIgXAAIAAgIIA0AAIAAAIIgWAAIAABFg");
	this.shape_63.setTransform(109.5,32.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FFFFFF").ss(1,2,0,3).p("ACThXIAACvIkmAAIAAiv");
	this.shape_64.setTransform(141.3,33.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance_1},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// solid purple
	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgCAdIAAgFIAAgKIAAgNIgIgNIgJgQIAHAAIAMAYIANgYIAHAAIgJAQIgIANIAAANIAAAPg");
	this.shape_65.setTransform(42.9,225.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AAOAdIAAgrIgLAiIgEAAIgMggIAAApIgGAAIAAg5IAHAAIAMAnIANgnIAHAAIAAA5g");
	this.shape_66.setTransform(38.8,225.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AAJAdIgFgNQgEgHgDgFIgGAAIAAAZIgHAAIAAg5IAQAAQAEAAAEAEQAEAEAAAHQAAAMgKADQAFADAEAKIAGAOgAgJgBIAGAAQADAAADgDQACgDAAgFQAAgKgHAAIgHAAg");
	this.shape_67.setTransform(34.6,225.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgPAUQgFgIAAgMQAAgKAFgJQAFgLAKAAQALAAAGALQAEAIAAALQAAAMgFAIQgFALgLAAQgKAAgFgLgAgKgPQgDAHAAAIQAAAKADAGQAEAJAGAAQAHAAAEgJQADgHAAgJQAAgIgDgHQgEgJgHAAQgGAAgEAJg");
	this.shape_68.setTransform(30.5,225.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AAMAdIgXgsIAAAsIgGAAIAAg5IAGAAIAXAsIAAgEIAAgoIAGAAIAAA5g");
	this.shape_69.setTransform(26.3,225.8);

	this.instance_2 = new lib.B787NDMAPWhiteInactiveWaypoint("synched",0);
	this.instance_2.setTransform(18.8,216.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgPAdIAAg5IAbAAIAAAGIgVAAIAAATIATAAIAAAEIgTAAIAAAVIAZAAIAAAHg");
	this.shape_70.setTransform(165,296.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AAMAdIgXgsIAAAsIgGAAIAAg5IAGAAIAXAsIAAgEIAAgoIAGAAIAAA5g");
	this.shape_71.setTransform(160.9,296.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AAPAdIgFgQIgTAAIgGAQIgGAAIAUg5IAFAAIASA5gAgHAHIAPAAIgIgZg");
	this.shape_72.setTransform(156.7,296.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgOAZQgEgFAAgMIAAglIAHAAIAAAkQAAAIACAEQADAFAGAAQAIAAADgGQABgFAAgIIAAgiIAHAAIAAAkQAAAXgTAAQgJAAgFgFg");
	this.shape_73.setTransform(152.6,296.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgSAdIAAg5IAOAAQAMAAAGAIQAFAHAAANQAAAdgWAAgAgLAWIAHAAQAIAAAEgGQAEgFAAgLQAAgKgDgFQgEgHgJAAIgHAAg");
	this.shape_74.setTransform(148.4,296.3);

	this.instance_3 = new lib.B787NDMAPWhiteInactiveWaypoint("synched",0);
	this.instance_3.setTransform(140.9,286.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgCFNQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAgBAAIAAg9QABAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAIAAA9QAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBgBAAAAgAgCDVQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAgBgBIAAg7QABgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAAAgBQAAABAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABIAAA7QAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBgBAAAAgAgCBdQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAgBgBIAAg8QABAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAIAAA8QAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAABQAAgBAAAAQAAAAAAAAQgBAAAAAAQgBgBAAAAgAgCgZQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAgBAAIAAg9QABAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAIAAA9QAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBgBAAAAgAgCiRQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAgBgBIAAg7QABgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAAAgBQAAABAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABIAAA7QAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBgBAAAAgAgCkJQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAgBgBIAAg8QABAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAIAAA8QAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAABQAAgBAAAAQAAAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_75.setTransform(140.8,369.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FF00FF").s().p("AJzUyQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIAAg8QAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAIAAA8QAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAgAJOUjIgtgnQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAIAtAnQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBABQAAAAgBAAQAAAAAAAAQgBABAAAAIgBAAIgDgCgAH0TUIgtgnQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAIAtAnQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBABAAAAIgBAAIgDgCgAJzS6QAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIAAg8QAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAIAAA8QAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAgAGaSGIgtgnQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAIAtAnQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBABQAAAAgBAAQAAAAAAAAQgBABAAAAIgBAAIgDgCgAJzRCQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIAAg8QAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAIAAA8QAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAgAFAQ3IgtgnQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAIAtAnQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBABAAAAIgBAAIgDgCgADmPoIgtgnQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAIAtAnQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBABQAAAAgBAAQAAAAAAAAQgBABAAAAIgBAAIgDgCgAJzPKQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIAAg5QAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAIAAA5QAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAgACMOaIgtgnQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAIAtAnQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBABQAAAAgBAAQAAAAAAAAQgBABAAAAIgBAAIgDgCgAAyNLIgtgnQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAIAtAnQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBABQAAAAgBAAQAAAAAAAAQgBABAAAAIgBAAIgDgCgAJyMoMABQghaIAKAAMgBQAhagAgmL8IgtgnQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAIAtAnQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBABAAAAIgBAAIgDgCgAiAKuIgtgoQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAIAtAoQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBABAAAAIgBAAIgDgCgAjaJfIgtgnQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAIAtAnQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBABQAAAAgBAAQAAAAAAAAQgBABAAAAIgBAAIgDgCgAk0IQIgtgnQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAIAtAnQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBABQAAAAgBAAQAAAAAAAAQgBABAAAAIgBAAIgDgCgAmOHCIgtgnQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAIAtAnQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBABAAAAIgBAAIgDgCgAnoF0IgtgnQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAIAtAnQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBABAAAAIgBAAIgDgCgApCEmIgtgnQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAIAtAnQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBABQAAAAgBAAQAAAAAAAAQgBABAAAAIgBAAIgDgCgAqcDYIgtgnQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAIAtAnQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBABAAAAIgBAAIgDgCgArJA+IAGgIIB7BgIgGAIg");
	this.shape_76.setTransform(77.6,200.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_76},{t:this.shape_75},{t:this.instance_3},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.instance_2},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65}]}).wait(1));

	// Symbols
	this.instance_4 = new lib.B787NDMAPHalfVSDCompassRose("synched",0);
	this.instance_4.setTransform(140.8,242.3);

	this.instance_5 = new lib.B787NDMAPCurrentHeadingPointer("synched",0);
	this.instance_5.setTransform(140.7,326.4,1,1,0,0,0,-0.1,280.7);

	this.instance_6 = new lib.B787NDMAPVSDTrackLineandRangeScale("synched",0);
	this.instance_6.setTransform(133.8,173.4,1,1,0,0,0,0.3,0);

	this.instance_7 = new lib.B787PFDNDRange("synched",0);
	this.instance_7.setTransform(86,34.8,1,1,0,0,0,0.1,0);

	this.instance_8 = new lib.B787NDMAPAirplaneSymbol01("synched",0);
	this.instance_8.setTransform(140.8,346.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	// Line Work 2 - solid magenta
	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FF00FF").s().p("AgCWiQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAgBgBIAAg8QABgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQgBAAAAAAgAgCUpQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAAAgBgBIAAg8QABgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQgBAAAAgBgAgCSyQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAgBgBIAAg8QABgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQgBAAAAAAgAgCQ6QAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAgBgBIAAg8QABgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQgBAAAAAAgAgCPBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAAAgBgBIAAg8QABgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQgBAAAAgBgAgCNKQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAgBgBIAAg1QABgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABIAAA1QAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQgBAAAAAAgAgCk1QAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAgBgBIAAg8QABgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQgBAAAAAAgAgCmuQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAAAgBgBIAAg8QABgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQgBAAAAgBgAgComQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAAAgBgBIAAg8QABgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQgBAAAAgBgAgCqdQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAgBgBIAAg8QABgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQgBAAAAAAgAgCsWQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAAAgBgBIAAg8QABgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQgBAAAAgBgAgCuOQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAAAgBgBIAAg8QABgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQgBAAAAgBgAgCwFQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAgBgBIAAg8QABgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQgBAAAAAAgAgCx+QAAAAgBAAQAAgBAAAAQAAgBAAAAQAAAAgBgBIAAg8QABgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQgBAAAAgBgAgCz2QAAAAgBAAQAAgBAAAAQAAgBAAAAQAAAAgBgBIAAg8QABgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQgBAAAAgBgAgC1tQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAgBgBIAAgsQABgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABIAAAsQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQgBAAAAAAg");
	this.shape_77.setTransform(140.8,192.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_77).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,23,279.7,385.4);


(lib.B787EICAS_Gauge_N1Left = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Indicators
	this.instance = new lib.B787EICAS_Gauge_N1RedLine("synched",0);
	this.instance.setTransform(0,0,1,1,-152.5);

	this.instance_1 = new lib.B787EICAS_Gauge_N1GreenRefTargetN1("synched",0);
	this.instance_1.setTransform(0,0,1,1,-175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 2
	this.instance_2 = new lib.B787EICAS_Gauge_N1WhitePointer("synched",0);
	this.instance_2.setTransform(0,0,1,1,53);

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

	// Grey Fill
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5E5D66").s().p("AiFhpIELAAQAABbg4BHIg0Axg");
	this.shape_9.setTransform(13.5,10.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.5,-23.9,98.9,73.2);


(lib.B787EICAS_Gauge_EGTLeft = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Indicators
	this.instance = new lib.B787EICAS_Gauge_EGTAmberLine("synched",0);
	this.instance.setTransform(0,0,1,1,-164.5);

	this.instance_1 = new lib.B787EICAS_Gauge_EGTRedLine("synched",0);
	this.instance_1.setTransform(0,0,1,1,-152.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9900").ss(1,1,1).p("AgJAaQAIgaALgZ");
	this.shape.setTransform(-25.1,-9.6);

	this.instance_2 = new lib.B787EICAS_Gauge_EGTWhitePointer("synched",0);
	this.instance_2.setTransform(0,0,1,1,100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Line Work
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("AEuhIIlMAAIAAiUIFMAAgADugvQAABvhQBOQhPBPhtAAQhxAAhPhPQhPhOAAhvQAAhEAeg4");
	this.shape_1.setTransform(3.2,4.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Grey Fill
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5E5D66").s().p("AiVB+IAukGIEMAAQAABQgtBCQgdAsglAaQg2AmhRALQg3AHgRABIgCAAQgUAAAagLg");
	this.shape_2.setTransform(10.4,13.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.5,-24.3,102.9,73.4);


(lib.B787SynopticENGINEAllPositions = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgzExIAEgWQAXAEAYAAQAcAAAbgEIAEAVQgdAFgeAAQgaAAgZgEgABjEPQAwgSAqgjIAOAQQgsAmg1AUgADdC5QAjgqARgxIAVAIQgSA0gmAtgAEdAxQAEgYAAgZQAAgcgFgaIAWgEQAFAcAAAeQAAAagEAbgAkzAlQgFgpAFgmIAVADQgEAkAEAkIABACIgWADIAAgBgADci8IAQgOQAnAtASA0IgUAHQgSgwgjgqgAkJifQAOgXASgWIASgSIAPAOIgRASQgRAUgNAWgAApkeIADgWQA6AIAyAcIgLATQgugag2gHgAh4kfQAmgPApgGIADAVQgnAGgiAOg");
	this.shape.setTransform(213.2,219.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Text
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgBAWIAAgnIgLAAIAAgEIAZAAIAAAEIgLAAIAAAng");
	this.shape_1.setTransform(247.3,274.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAIAWIgIgSIgHASIgFAAIALgWIgJgVIAEAAIAGAQIAHgQIAFAAIgKAVIALAWg");
	this.shape_2.setTransform(244.2,274.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgKAWIAAgrIASAAIAAAFIgNAAIAAAOIALAAIAAACIgLAAIAAARIAQAAIAAAFg");
	this.shape_3.setTransform(241.2,274.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgKALIAFAAQAAAFACABQABACACgBQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAAAQACgDAAgEQAAgEgFgDIgDgDIgFgDQgCgDAAgEQAAgGADgDQADgEADAAQAEAAACADQADADAAAEIgFAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAgBgBAAIgCgBQAAAAAAAAQgBAAAAABQgBAAAAAAQAAABgBAAQAAABAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAFAEAEIAEACIAFADQACADAAAEQAAAHgDADQgDAEgFAAQgKAAAAgNg");
	this.shape_4.setTransform(254.9,268.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgKAWIAAgrIAKAAQAFAAADADQADACAAAIQAAAIgGABQgEADgGABIAAARgAgFAAIAEAAQAHAAAAgIQAAgJgGABIgFAAg");
	this.shape_5.setTransform(251.8,268.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAJAWIgCgNIgNAAIgDANIgEAAIANgrIACAAIAMArgAgEAFIAJAAIgFgTg");
	this.shape_6.setTransform(248.8,268.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgKAWIAAgrIAFAAIAAAmIAQAAIAAAFg");
	this.shape_7.setTransform(245.8,268.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgIAWIAAgrIARAAIAAAFIgNAAIAAAPIALAAIAAADIgLAAIAAAUg");
	this.shape_8.setTransform(242.7,268.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgJAWIAAgrIARAAIAAAFIgNAAIAAAOIALAAIAAACIgLAAIAAARIAPAAIAAAFg");
	this.shape_9.setTransform(236.6,268.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgKAWIAAgrIAFAAIAAAmIAQAAIAAAFg");
	this.shape_10.setTransform(233.6,268.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgQAdIAAg5IAQAAQAIAAAEADQAFAEAAAJQAAAMgJACQgGAEgLAAIAAAXgAgJAAIAHAAQAMAAAAgMQAAgKgKAAIgJAAg");
	this.shape_11.setTransform(179.9,219.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgOAZQgEgFAAgMIAAglIAHAAIAAAkQAAAIACAEQADAFAGAAQAIAAADgGQABgFAAgIIAAgiIAHAAIAAAkQAAAXgTAAQgJAAgFgFg");
	this.shape_12.setTransform(175.8,219.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AADAdIAAgGIAKAAIAAAGgAgCAdIAAgGIAFAAIAAAGgAgMAdIAAgGIAKAAIAAAGgAgCAXIAAgsIgKAFIAAgHIALgFIAEAAIAAAzgAgCAXg");
	this.shape_13.setTransform(185.9,197.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgPAeIAAgGQAAgHAEgGQADgFAGgFIAGgGQAEgFAAgEQAAgEgDgDQgCgCgDAAQgHAAAAAHIgHAAIAAgBQAAgFAFgEQAEgDAFAAQAGAAAEADQAFAEAAAHQAAAIgHAGIgKAJQgGAHAAAIIAYAAIAAAHg");
	this.shape_14.setTransform(203.4,185.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgJAbQgFgDAAgGIAGAAQAAAGAIAAQADAAADgEQADgDAAgGQAAgJgHgCQgDAAgKAAIAAgdIAYAAIAAAGIgSAAIAAAQQAJAAAFAFQAGACAAAKQAAAIgEAGQgEAGgHAAQgFAAgEgDg");
	this.shape_15.setTransform(224.4,186.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgNAUQgEgJAAgLQAAgKAEgJQAEgLAJAAQAKAAAEALQAEAJAAAKQAAALgEAJQgFALgJAAQgJAAgEgLgAgIgOQgCAHAAAHQAAAIACAHQADAKAFAAQAGAAADgKQACgHAAgIQAAgHgCgHQgDgJgGAAQgFAAgDAJg");
	this.shape_16.setTransform(246,201.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AADAdIAAgGIAKAAIAAAGgAgCAdIAAgGIAFAAIAAAGgAgMAdIAAgGIAKAAIAAAGgAADAXIgFAAIAAgsIgKAFIAAgHIALgFIAEAAIAAAzgAgCAXgAgCAXg");
	this.shape_17.setTransform(241.9,201.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgJAbQgFgDAAgGIAGAAQAAAGAIAAQADAAADgEQADgDAAgGQAAgIgHgDQgDAAgKAAIAAgdIAYAAIAAAHIgSAAIAAAPQAJABAFAEQAGACAAAKQAAAJgEAFQgEAGgHAAQgFAAgEgDg");
	this.shape_18.setTransform(251,220.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AADAdIAAgGIgFAAIAAgsIgKAFIAAgHIALgFIAEAAIAAAzIAKAAIAAAGgAgCAdIAAgGIAFAAIAAAGgAgMAdIAAgGIAKAAIAAAGgAgCAXg");
	this.shape_19.setTransform(246.9,220.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgJAbQgFgDAAgGIAGAAQAAAGAIAAQADAAADgEQADgEAAgFQAAgJgHgCQgDAAgKAAIAAgdIAYAAIAAAGIgSAAIAAARQAJAAAFADQAGADAAAKQAAAJgEAFQgEAGgHAAQgFAAgEgDg");
	this.shape_20.setTransform(246.3,238.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgPAeIAAgGQAAgHAEgGQADgFAGgFIAGgGQAEgFAAgEQAAgEgDgDQgCgCgDAAQgHAAAAAHIgHAAIAAgBQAAgFAFgEQAEgDAFAAQAGAAAEADQAFAEAAAHQAAAIgHAGIgKAJQgGAHAAAIIAYAAIAAAHg");
	this.shape_21.setTransform(242.1,238.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgNAUQgEgJAAgLQAAgKAEgJQAEgLAJAAQAKAAAEALQAEAJAAAKQAAALgEAJQgFALgJAAQgJAAgEgLgAgIgOQgCAHAAAHQAAAIACAHQADAKAFAAQAGAAADgKQACgHAAgIQAAgHgCgHQgDgJgGAAQgFAAgDAJg");
	this.shape_22.setTransform(233.3,250.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgKAcQgEgDAAgGIAGAAQAAAGAIAAQAEAAACgEQADgDAAgFQAAgIgGgDQgDgCgHAAIAAgEQAHAAACgCQAFgDAAgGQAAgEgDgDQgCgBgCAAQgDgBgCACQgDACAAADIgGAAIAAgBQAAgGAEgDQAEgDAGAAQAFAAAEADQAEAEAAAHQAAAJgJAFQALACAAANQAAAIgEAEQgFAGgGAAQgGAAgEgDg");
	this.shape_23.setTransform(229.1,250.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgNAUQgEgJAAgLQAAgKAEgJQAEgLAJAAQAKAAAEALQAEAJAAAKQAAALgEAJQgFALgJAAQgJAAgEgLgAgIgOQgCAHAAAHQAAAIACAHQADAKAFAAQAGAAADgKQACgHAAgIQAAgHgCgHQgDgKgGABQgFgBgDAKg");
	this.shape_24.setTransform(215.3,255.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAIAdIAAgSIgWAAIAAgGIAWghIAHAAIAAAhIAAAGIAAASgAgIAFIAPAAIAAgXg");
	this.shape_25.setTransform(211.2,255.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00CCFF").s().p("AgQAQIAHAAQAAAFADACQACACAEAAQAEAAADgDQADgDAAgEQAAgGgIgFIgGgEQgFAAgCgEQgDgEAAgGQAAgIAEgEQAFgEAGAAQAFAAAEADQAEAEAAAGIgHAAQAAgEgDgBQgCgCgCAAQgCAAgDADQgCADAAADQAAAHAHAEIAHAEQAFABACADQADAEAAAGQAAAIgFAEQgFAFgHAAQgQAAAAgPg");
	this.shape_26.setTransform(201.5,235.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00CCFF").s().p("AgQAdIAAg5IAQAAQAIAAAEADQAFAEAAAJQAAAMgJACQgGAEgLAAIAAAXgAgJAAIAHAAQAMAAAAgMQAAgKgKAAIgJAAg");
	this.shape_27.setTransform(197.3,235.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00CCFF").s().p("AAPAdIgFgQIgTAAIgGAQIgGAAIAUg5IAFAAIASA5gAgHAHIAPAAIgIgZg");
	this.shape_28.setTransform(193.2,235.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00CCFF").s().p("AgQAdIAAg5IAHAAIAAAyIAaAAIAAAHg");
	this.shape_29.setTransform(189,235.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00CCFF").s().p("AgNAdIAAg5IAbAAIAAAGIgVAAIAAAVIATAAIAAAEIgTAAIAAAag");
	this.shape_30.setTransform(184.9,235.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgBAWIAAgnIgLAAIAAgEIAZAAIAAAEIgLAAIAAAng");
	this.shape_31.setTransform(217.3,274.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAJAWIgJgSIgHASIgFAAIALgWIgKgVIAFAAIAGAQIAHgQIAFAAIgKAVIALAWg");
	this.shape_32.setTransform(214.3,274.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgKAWIAAgrIASAAIAAAFIgNAAIAAAOIALAAIAAACIgLAAIAAARIAQAAIAAAFg");
	this.shape_33.setTransform(211.2,274.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgKALIAFAAQAAAFACABQABACACgBQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAAAQACgDAAgEQAAgEgFgDIgDgDIgFgDQgCgDAAgEQAAgGADgDQADgEADAAQAEAAACADQADADAAAEIgFAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAgBgBAAIgCgBQAAAAAAAAQgBAAAAABQgBAAAAAAQAAABgBAAQAAABAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAFAEAEIAEACIAFADQACADAAAEQAAAHgDADQgDAEgFAAQgKAAAAgNg");
	this.shape_34.setTransform(224.9,268.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgKAWIAAgrIAKAAQAFAAADADQADACAAAIQAAAIgGABQgEADgGABIAAARgAgFAAIAEAAQAHAAAAgIQAAgJgGABIgFAAg");
	this.shape_35.setTransform(221.9,268.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAJAWIgCgNIgNAAIgDANIgEAAIANgrIACAAIAMArgAgEAFIAJAAIgFgTg");
	this.shape_36.setTransform(218.8,268.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgKAWIAAgrIAFAAIAAAmIAQAAIAAAFg");
	this.shape_37.setTransform(215.8,268.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgIAWIAAgrIARAAIAAAFIgNAAIAAAPIALAAIAAADIgLAAIAAAUg");
	this.shape_38.setTransform(212.8,268.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgJAWIAAgrIARAAIAAAFIgNAAIAAAOIALAAIAAACIgLAAIAAARIAPAAIAAAFg");
	this.shape_39.setTransform(206.7,268.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgKAWIAAgrIAFAAIAAAmIAQAAIAAAFg");
	this.shape_40.setTransform(203.7,268.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgBAWIAAgnIgLAAIAAgEIAZAAIAAAEIgLAAIAAAng");
	this.shape_41.setTransform(193.5,274.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgGAWIAAgFIAFAAIAAgiIgFAAIAAgEIANAAIAAAEIgFAAIAAAiIAFAAIAAAFg");
	this.shape_42.setTransform(190.4,274.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgKALIAFAAQAAAEACACQABACACgBQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAAAQACgDAAgEQAAgEgFgDIgDgDIgFgDQgCgDAAgEQAAgGADgDQADgDADgBQAEAAACADQADADAAAEIgFAAQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAgBgBIgCgBQAAAAAAAAQgBAAAAABQgBAAAAAAQAAABgBAAQAAABAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAFAEAEIAEACIAFADQACADAAAEQAAAGgDAEQgDADgFABQgKgBAAgMg");
	this.shape_43.setTransform(187.4,274.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAHAWIgOghIAAAhIgEAAIAAgrIAFAAIAOAhIAAgDIAAgeIAEAAIAAArg");
	this.shape_44.setTransform(184.4,274.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAJAWIgCgNIgNAAIgDANIgEAAIANgrIACAAIAMArgAgEAFIAJAAIgFgTg");
	this.shape_45.setTransform(181.3,274.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAGAWIgDgLIgEgJIgEAAIAAAUIgFAAIAAgrIAKAAQADAAACADQADAEAAAFQAAAJgGABQACADADAHIAEALgAgFAAIADAAQACAAACgCQABgDAAgEQAAgHgEgBIgEAAg");
	this.shape_46.setTransform(178.3,274.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgBAWIAAgnIgLAAIAAgEIAZAAIAAAEIgLAAIAAAng");
	this.shape_47.setTransform(175.3,274.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgKALIAFAAQAAAFACABQABACACgBQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAAAQACgDAAgEQAAgEgFgDIgDgDIgFgDQgCgDAAgEQAAgGADgDQADgEADAAQAEAAACADQADADAAAEIgFAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAgBgBAAIgCgBQAAAAAAAAQgBAAAAABQgBAAAAAAQAAABgBAAQAAABAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAFAEAEIAEACIAFADQACADAAAEQAAAHgDADQgDAEgFAAQgKAAAAgNg");
	this.shape_48.setTransform(195,268.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgKAWIAAgrIAKAAQAFAAADADQADACAAAIQAAAIgGABQgEADgGABIAAARgAgFAAIAEAAQAHAAAAgIQAAgJgGABIgFAAg");
	this.shape_49.setTransform(192,268.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAJAWIgCgNIgNAAIgDANIgEAAIANgrIACAAIAMArgAgEAFIAJAAIgFgTg");
	this.shape_50.setTransform(188.9,268.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgKAWIAAgrIAFAAIAAAmIAQAAIAAAFg");
	this.shape_51.setTransform(185.9,268.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgIAWIAAgrIARAAIAAAFIgNAAIAAAPIALAAIAAADIgLAAIAAAUg");
	this.shape_52.setTransform(182.9,268.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgJAWIAAgrIARAAIAAAFIgNAAIAAAOIALAAIAAACIgLAAIAAARIAPAAIAAAFg");
	this.shape_53.setTransform(176.8,268.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgKAWIAAgrIAFAAIAAAmIAQAAIAAAFg");
	this.shape_54.setTransform(173.8,268.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAJAdIgJghIgIAhIgIAAIgEg5IAHAAIACArIABAAIAIgdIAFAAIAIAdIABAAIACgrIAHAAIgEA5g");
	this.shape_55.setTransform(267.2,97.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgPAUQgFgIAAgMQAAgKAFgJQAFgLAKAAQALAAAGAKQAEAJAAALQAAAMgFAIQgFALgLAAQgKAAgFgLgAgKgOQgDAGAAAIQAAAJADAHQAEAJAGAAQAHAAAEgJQADgHAAgJQAAgIgDgGQgEgKgHABQgGgBgEAKg");
	this.shape_56.setTransform(262.5,97.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgQAdIAAg5IAHAAIAAAyIAaAAIAAAHg");
	this.shape_57.setTransform(257.9,97.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgNAdIAAg5IAbAAIAAAGIgVAAIAAAVIATAAIAAAEIgTAAIAAAag");
	this.shape_58.setTransform(253.2,97.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgQAdIAAg5IAHAAIAAAyIAaAAIAAAHg");
	this.shape_59.setTransform(243.9,97.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgPAdIAAg5IAbAAIAAAGIgVAAIAAATIATAAIAAAEIgTAAIAAAVIAZAAIAAAHg");
	this.shape_60.setTransform(239.3,97.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgOAZQgEgFAAgMIAAglIAHAAIAAAkQAAAIACAEQADAFAGAAQAIAAADgGQABgFAAgIIAAgiIAHAAIAAAkQAAAXgTAAQgJAAgFgFg");
	this.shape_61.setTransform(234.6,97.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgNAdIAAg5IAbAAIAAAGIgVAAIAAAVIATAAIAAAEIgTAAIAAAag");
	this.shape_62.setTransform(230,97.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgCAdIAAgzIgRAAIAAgGIAnAAIAAAGIgRAAIAAAzg");
	this.shape_63.setTransform(260.2,77.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgQAQIAHAAQAAAFADACQACACAEAAQAEAAADgDQADgDAAgFQAAgFgIgFIgGgEQgFAAgCgEQgDgEAAgGQAAgHAEgFQAFgEAGAAQAFAAAEADQAEAEAAAGIgHAAQAAgDgDgCQgCgCgCAAQgCAAgDADQgCADAAAEQAAAFAHAFIAHAEQAFABACADQADAEAAAGQAAAIgFAEQgFAFgHAAQgQAAAAgPg");
	this.shape_64.setTransform(255.6,77.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgOAZQgEgFAAgMIAAglIAHAAIAAAkQAAAIACAEQADAFAGAAQAIAAADgGQABgFAAgIIAAgiIAHAAIAAAkQAAAXgTAAQgJAAgFgFg");
	this.shape_65.setTransform(250.9,77.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAJAdIgFgNQgEgHgDgFIgGAAIAAAZIgHAAIAAg5IAQAAQAEAAAEAEQAEAEAAAHQAAAMgKADQAFADAEAKIAGAOgAgJgBIAGAAQADAAADgDQACgDAAgFQAAgKgHAAIgHAAg");
	this.shape_66.setTransform(246.3,77.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AALAdIAAgbIgVAAIAAAbIgHAAIAAg5IAHAAIAAAaIAVAAIAAgaIAHAAIAAA5g");
	this.shape_67.setTransform(241.6,77.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgCAdIAAgzIgRAAIAAgGIAnAAIAAAGIgRAAIAAAzg");
	this.shape_68.setTransform(237,77.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgPAdIAAg5IAbAAIAAAGIgVAAIAAATIATAAIAAAEIgTAAIAAAVIAZAAIAAAHg");
	this.shape_69.setTransform(264.9,61.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AAJAdIgFgNQgEgHgDgFIgGAAIAAAZIgHAAIAAg5IAQAAQAEAAAEAEQAEAEAAAHQAAAMgKADQAFADAEAKIAGAOgAgJgBIAGAAQADAAADgDQACgDAAgFQAAgKgHAAIgHAAg");
	this.shape_70.setTransform(260.2,61.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgOAZQgEgFAAgMIAAglIAHAAIAAAkQAAAIACAEQADAFAGAAQAIAAADgGQABgFAAgIIAAgiIAHAAIAAAkQAAAXgTAAQgJAAgFgFg");
	this.shape_71.setTransform(255.6,61.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgQAQIAHAAQAAAFADACQACACAEAAQAEAAADgDQADgDAAgFQAAgFgIgFIgGgEQgFAAgCgEQgDgEAAgGQAAgIAEgEQAFgEAGAAQAFAAAEADQAEAEAAAGIgHAAQAAgDgDgCQgCgCgCAAQgCAAgDADQgCADAAAEQAAAFAHAFIAHAEQAFABACADQADAEAAAGQAAAIgFAFQgFAEgHAAQgQAAAAgPg");
	this.shape_72.setTransform(250.9,61.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgQAQIAHAAQAAAFADACQACACAEAAQAEAAADgDQADgDAAgFQAAgFgIgFIgGgEQgFAAgCgEQgDgEAAgGQAAgIAEgEQAFgEAGAAQAFAAAEADQAEAEAAAGIgHAAQAAgDgDgCQgCgCgCAAQgCAAgDADQgCADAAAEQAAAFAHAFIAHAEQAFABACADQADAEAAAGQAAAIgFAFQgFAEgHAAQgQAAAAgPg");
	this.shape_73.setTransform(246.3,61.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgPAdIAAg5IAbAAIAAAGIgVAAIAAATIATAAIAAAEIgTAAIAAAVIAZAAIAAAHg");
	this.shape_74.setTransform(241.6,61.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AAJAdIgFgNQgEgHgDgFIgGAAIAAAZIgHAAIAAg5IAQAAQAEAAAEAEQAEAEAAAHQAAAMgKADQAFADAEAKIAGAOgAgJgBIAGAAQADAAADgDQACgDAAgFQAAgKgHAAIgHAAg");
	this.shape_75.setTransform(237,61.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgQAdIAAg5IAQAAQAIAAAEADQAFAEAAAJQAAAMgJACQgGAEgLAAIAAAXgAgJAAIAHAAQAMAAAAgMQAAgKgKAAIgJAAg");
	this.shape_76.setTransform(232.3,61.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgQAdIAAg5IAHAAIAAAyIAaAAIAAAHg");
	this.shape_77.setTransform(262.5,54.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgKAdIAAgGIAIAAIAAgtIgIAAIAAgGIAVAAIAAAGIgIAAIAAAtIAIAAIAAAGg");
	this.shape_78.setTransform(257.9,54.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgPAVQgFgJAAgMQAAgKAFgJQAFgLAKAAQALAAAGAKQAEAJAAALQAAAMgFAJQgFAKgLAAQgKAAgFgKgAgKgOQgDAGAAAIQAAAJADAHQAEAJAGAAQAHAAAEgJQADgHAAgJQAAgIgDgGQgEgJgHAAQgGAAgEAJg");
	this.shape_79.setTransform(253.2,54.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAJAdIgJghIgIAhIgIAAIgEg5IAHAAIACArIABAAIAIgdIAFAAIAIAdIABAAIACgrIAHAAIgEA5g");
	this.shape_80.setTransform(243.9,54.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgPAVQgFgJAAgMQAAgKAFgJQAFgLAKAAQALAAAGAKQAEAJAAALQAAAMgFAJQgFAKgLAAQgKAAgFgKgAgKgOQgDAGAAAIQAAAJADAHQAEAJAGAAQAHAAAEgJQADgHAAgJQAAgIgDgGQgEgJgHAAQgGAAgEAJg");
	this.shape_81.setTransform(239.3,54.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgQAdIAAg5IAHAAIAAAyIAaAAIAAAHg");
	this.shape_82.setTransform(234.6,54.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgQAQIAHAAQAAAFADACQACACAEAAQAEAAADgDQADgDAAgEQAAgGgIgFIgGgEQgFgBgCgDQgDgEAAgGQAAgIAEgEQAFgEAGAAQAFAAAEADQAEAEAAAGIgHAAQAAgEgDgBQgCgCgCAAQgCAAgDADQgCADAAADQAAAHAHAEIAHAEQAFABACADQADAEAAAGQAAAIgFAEQgFAFgHAAQgQAAAAgPg");
	this.shape_83.setTransform(260.2,42.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgQAQIAHAAQAAAFADACQACACAEAAQAEAAADgDQADgDAAgEQAAgGgIgFIgGgEQgFgBgCgDQgDgEAAgGQAAgIAEgEQAFgEAGAAQAFAAAEADQAEAEAAAGIgHAAQAAgEgDgBQgCgCgCAAQgCAAgDADQgCADAAADQAAAHAHAEIAHAEQAFABACADQADAEAAAGQAAAIgFAEQgFAFgHAAQgQAAAAgPg");
	this.shape_84.setTransform(255.6,42.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AAPAdIgFgQIgTAAIgGAQIgGAAIAUg5IAFAAIASA5gAgHAHIAPAAIgIgZg");
	this.shape_85.setTransform(250.9,42.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgQAdIAAg5IAQAAQAIAAAEADQAFAEAAAJQAAAMgJACQgGAEgLAAIAAAXgAgJAAIAHAAQAMAAAAgMQAAgKgKAAIgJAAg");
	this.shape_86.setTransform(246.3,42.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgCAdIAAgFIAAgKIAAgNIgIgNIgJgQIAHAAIAMAYIANgYIAHAAIgJAQIgIANIAAANIAAAPg");
	this.shape_87.setTransform(241.6,42.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgQAdIAAg5IANAAQAHAAAEACQAGAEAAAJQAAAEgCAEQgCAEgEABQAGAAACAEQADAEAAAFQAAAQgRAAgAgJAXIAJAAQAKAAAAgKQAAgGgFgDQgFgCgFAAIgEAAgAgJgDIAGAAIAEAAQADgBABgEIACgFIgBgEIgBgDIgDgCIgCAAIgJAAg");
	this.shape_88.setTransform(237,42.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AAJAdIgFgNQgEgHgDgFIgGAAIAAAZIgHAAIAAg5IAQAAQAEAAAEAEQAEAEAAAHQAAAMgKADQAFADAEAKIAGAOgAgJgBIAGAAQADAAADgDQACgDAAgFQAAgKgHAAIgHAAg");
	this.shape_89.setTransform(269.5,34.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgPAdIAAg5IAbAAIAAAGIgVAAIAAATIATAAIAAAEIgTAAIAAAVIAZAAIAAAHg");
	this.shape_90.setTransform(264.9,34.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgCAdIAAgzIgRAAIAAgGIAnAAIAAAGIgRAAIAAAzg");
	this.shape_91.setTransform(260.2,34.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgQAdIAAg5IAHAAIAAAyIAaAAIAAAHg");
	this.shape_92.setTransform(255.6,34.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgKAdIAAgGIAIAAIAAgtIgIAAIAAgGIAVAAIAAAGIgIAAIAAAtIAIAAIAAAGg");
	this.shape_93.setTransform(250.9,34.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgNAdIAAg5IAbAAIAAAGIgVAAIAAAVIATAAIAAAEIgTAAIAAAag");
	this.shape_94.setTransform(246.3,34.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgQAdIAAg5IAHAAIAAAyIAaAAIAAAHg");
	this.shape_95.setTransform(237,34.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgKAdIAAgGIAIAAIAAgtIgIAAIAAgGIAVAAIAAAGIgIAAIAAAtIAIAAIAAAGg");
	this.shape_96.setTransform(232.3,34.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgPAUQgFgIAAgMQAAgLAFgIQAFgLAKAAQALAAAGALQAEAIAAALQAAAMgFAIQgFALgLAAQgKAAgFgLgAgKgPQgDAHAAAIQAAAKADAGQAEAJAGAAQAHAAAEgJQADgHAAgJQAAgIgDgHQgEgIgHgBQgGABgEAIg");
	this.shape_97.setTransform(227.7,34.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AAMAdIgXgsIAAAsIgGAAIAAg5IAGAAIAXAsIAAgEIAAgoIAGAAIAAA5g");
	this.shape_98.setTransform(255.6,22.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgPAdIAAg5IAbAAIAAAGIgVAAIAAATIATAAIAAAEIgTAAIAAAVIAZAAIAAAHg");
	this.shape_99.setTransform(250.9,22.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgQAdIAAg5IAQAAQAIAAAEADQAFAEAAAJQAAAMgJACQgGAEgLAAIAAAXgAgJAAIAHAAQAMAAAAgMQAAgKgKAAIgJAAg");
	this.shape_100.setTransform(246.3,22.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgPAUQgFgIAAgMQAAgKAFgJQAFgLAKAAQALAAAGALQAEAIAAALQAAAMgFAIQgFALgLAAQgKAAgFgLgAgKgPQgDAHAAAIQAAAKADAGQAEAJAGAAQAHAAAEgJQADgHAAgJQAAgIgDgHQgEgJgHAAQgGAAgEAJg");
	this.shape_101.setTransform(241.6,22.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgPAdIAAg5IAbAAIAAAGIgVAAIAAATIATAAIAAAEIgTAAIAAAVIAZAAIAAAHg");
	this.shape_102.setTransform(271.8,15.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgCAdIgTg5IAHAAIAOAvIAPgvIAHAAIgTA5g");
	this.shape_103.setTransform(267.2,15.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgQAdIAAg5IAHAAIAAAyIAaAAIAAAHg");
	this.shape_104.setTransform(262.5,15.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AAPAdIgFgQIgTAAIgGAQIgGAAIAUg5IAFAAIASA5gAgHAHIAPAAIgIgZg");
	this.shape_105.setTransform(257.9,15.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgCAdIgTg5IAHAAIAOAvIAPgvIAHAAIgTA5g");
	this.shape_106.setTransform(253.2,15.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgCAdIAAgzIgRAAIAAgGIAnAAIAAAGIgRAAIAAAzg");
	this.shape_107.setTransform(243.9,15.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AAJAdIgFgNQgEgHgDgFIgGAAIAAAZIgHAAIAAg5IAQAAQAEAAAEAEQAEAEAAAHQAAAMgKADQAFADAEAKIAGAOgAgJgBIAGAAQADAAADgDQACgDAAgFQAAgKgHAAIgHAAg");
	this.shape_108.setTransform(239.3,15.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AAPAdIgFgQIgTAAIgGAQIgGAAIAUg5IAFAAIASA5gAgHAHIAPAAIgIgZg");
	this.shape_109.setTransform(234.6,15.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgCAdIAAgzIgRAAIAAgGIAnAAIAAAGIgRAAIAAAzg");
	this.shape_110.setTransform(230,15.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgQAQIAHAAQAAAFADACQACACAEAAQAEAAADgDQADgDAAgFQAAgGgIgEIgGgEQgFgBgCgDQgDgEAAgGQAAgHAEgFQAFgEAGAAQAFAAAEAEQAEADAAAGIgHAAQAAgEgDgCQgCgBgCAAQgCAAgDADQgCADAAAEQAAAFAHAFIAHAEQAFABACADQADAEAAAGQAAAIgFAFQgFAEgHAAQgQAAAAgPg");
	this.shape_111.setTransform(225.3,15.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AAJAdIgJghIgIAhIgIAAIgEg5IAHAAIACArIABAAIAIgdIAFAAIAIAdIABAAIACgrIAHAAIgEA5g");
	this.shape_112.setTransform(209.6,97.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgPAUQgFgIAAgMQAAgKAFgJQAFgLAKAAQALAAAGAKQAEAJAAALQAAAMgFAIQgFALgLAAQgKAAgFgLgAgKgOQgDAGAAAIQAAAJADAHQAEAJAGAAQAHAAAEgJQADgHAAgJQAAgIgDgGQgEgKgHABQgGgBgEAKg");
	this.shape_113.setTransform(204.9,97.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgQAdIAAg5IAHAAIAAAyIAaAAIAAAHg");
	this.shape_114.setTransform(200.3,97.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgNAdIAAg5IAbAAIAAAGIgVAAIAAAVIATAAIAAAEIgTAAIAAAag");
	this.shape_115.setTransform(195.6,97.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgQAdIAAg5IAHAAIAAAyIAaAAIAAAHg");
	this.shape_116.setTransform(186.3,97.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgPAdIAAg5IAbAAIAAAGIgVAAIAAATIATAAIAAAEIgTAAIAAAVIAZAAIAAAHg");
	this.shape_117.setTransform(181.7,97.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgOAZQgEgFAAgMIAAglIAHAAIAAAkQAAAIACAEQADAFAGAAQAIAAADgGQABgFAAgIIAAgiIAHAAIAAAkQAAAXgTAAQgJAAgFgFg");
	this.shape_118.setTransform(177,97.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgNAdIAAg5IAbAAIAAAGIgVAAIAAAVIATAAIAAAEIgTAAIAAAag");
	this.shape_119.setTransform(172.4,97.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgCAdIAAgzIgRAAIAAgGIAnAAIAAAGIgRAAIAAAzg");
	this.shape_120.setTransform(202.6,77.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgQAQIAHAAQAAAFADACQACACAEAAQAEAAADgDQADgDAAgFQAAgFgIgFIgGgEQgFAAgCgEQgDgEAAgGQAAgHAEgFQAFgEAGAAQAFAAAEADQAEAEAAAGIgHAAQAAgDgDgCQgCgCgCAAQgCAAgDADQgCADAAAEQAAAFAHAFIAHAEQAFABACADQADAEAAAGQAAAIgFAEQgFAFgHAAQgQAAAAgPg");
	this.shape_121.setTransform(198,77.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgOAZQgEgFAAgMIAAglIAHAAIAAAkQAAAIACAEQADAFAGAAQAIAAADgGQABgFAAgIIAAgiIAHAAIAAAkQAAAXgTAAQgJAAgFgFg");
	this.shape_122.setTransform(193.3,77.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AAJAdIgFgNQgEgHgDgFIgGAAIAAAZIgHAAIAAg5IAQAAQAEAAAEAEQAEAEAAAHQAAAMgKADQAFADAEAKIAGAOgAgJgBIAGAAQADAAADgDQACgDAAgFQAAgKgHAAIgHAAg");
	this.shape_123.setTransform(188.7,77.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AALAdIAAgbIgVAAIAAAbIgHAAIAAg5IAHAAIAAAaIAVAAIAAgaIAHAAIAAA5g");
	this.shape_124.setTransform(184,77.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgCAdIAAgzIgRAAIAAgGIAnAAIAAAGIgRAAIAAAzg");
	this.shape_125.setTransform(179.4,77.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgPAdIAAg5IAbAAIAAAGIgVAAIAAATIATAAIAAAEIgTAAIAAAVIAZAAIAAAHg");
	this.shape_126.setTransform(207.3,61.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AAJAdIgFgNQgEgHgDgFIgGAAIAAAZIgHAAIAAg5IAQAAQAEAAAEAEQAEAEAAAHQAAAMgKADQAFADAEAKIAGAOgAgJgBIAGAAQADAAADgDQACgDAAgFQAAgKgHAAIgHAAg");
	this.shape_127.setTransform(202.6,61.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgOAZQgEgFAAgMIAAglIAHAAIAAAkQAAAIACAEQADAFAGAAQAIAAADgGQABgFAAgIIAAgiIAHAAIAAAkQAAAXgTAAQgJAAgFgFg");
	this.shape_128.setTransform(198,61.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgQAQIAHAAQAAAFADACQACACAEAAQAEAAADgDQADgDAAgFQAAgFgIgFIgGgEQgFAAgCgEQgDgEAAgGQAAgIAEgEQAFgEAGAAQAFAAAEADQAEAEAAAGIgHAAQAAgDgDgCQgCgCgCAAQgCAAgDADQgCADAAAEQAAAFAHAFIAHAEQAFABACADQADAEAAAGQAAAIgFAFQgFAEgHAAQgQAAAAgPg");
	this.shape_129.setTransform(193.3,61.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgQAQIAHAAQAAAFADACQACACAEAAQAEAAADgDQADgDAAgFQAAgFgIgFIgGgEQgFAAgCgEQgDgEAAgGQAAgIAEgEQAFgEAGAAQAFAAAEADQAEAEAAAGIgHAAQAAgDgDgCQgCgCgCAAQgCAAgDADQgCADAAAEQAAAFAHAFIAHAEQAFABACADQADAEAAAGQAAAIgFAFQgFAEgHAAQgQAAAAgPg");
	this.shape_130.setTransform(188.7,61.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgPAdIAAg5IAbAAIAAAGIgVAAIAAATIATAAIAAAEIgTAAIAAAVIAZAAIAAAHg");
	this.shape_131.setTransform(184,61.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AAJAdIgFgNQgEgHgDgFIgGAAIAAAZIgHAAIAAg5IAQAAQAEAAAEAEQAEAEAAAHQAAAMgKADQAFADAEAKIAGAOgAgJgBIAGAAQADAAADgDQACgDAAgFQAAgKgHAAIgHAAg");
	this.shape_132.setTransform(179.4,61.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgQAdIAAg5IAQAAQAIAAAEADQAFAEAAAJQAAAMgJACQgGAEgLAAIAAAXgAgJAAIAHAAQAMAAAAgMQAAgKgKAAIgJAAg");
	this.shape_133.setTransform(174.7,61.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgQAdIAAg5IAHAAIAAAyIAaAAIAAAHg");
	this.shape_134.setTransform(204.9,54.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgKAdIAAgGIAIAAIAAgtIgIAAIAAgGIAVAAIAAAGIgIAAIAAAtIAIAAIAAAGg");
	this.shape_135.setTransform(200.3,54.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgPAVQgFgJAAgMQAAgKAFgJQAFgLAKAAQALAAAGAKQAEAJAAALQAAAMgFAJQgFAKgLAAQgKAAgFgKgAgKgOQgDAGAAAIQAAAJADAHQAEAJAGAAQAHAAAEgJQADgHAAgJQAAgIgDgGQgEgJgHAAQgGAAgEAJg");
	this.shape_136.setTransform(195.6,54.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AAJAdIgJghIgIAhIgIAAIgEg5IAHAAIACArIABAAIAIgdIAFAAIAIAdIABAAIACgrIAHAAIgEA5g");
	this.shape_137.setTransform(186.3,54.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgPAVQgFgJAAgMQAAgKAFgJQAFgLAKAAQALAAAGAKQAEAJAAALQAAAMgFAJQgFAKgLAAQgKAAgFgKgAgKgOQgDAGAAAIQAAAJADAHQAEAJAGAAQAHAAAEgJQADgHAAgJQAAgIgDgGQgEgJgHAAQgGAAgEAJg");
	this.shape_138.setTransform(181.7,54.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgQAdIAAg5IAHAAIAAAyIAaAAIAAAHg");
	this.shape_139.setTransform(177,54.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgQAQIAHAAQAAAFADACQACACAEAAQAEAAADgDQADgDAAgEQAAgGgIgFIgGgEQgFgBgCgDQgDgEAAgGQAAgIAEgEQAFgEAGAAQAFAAAEADQAEAEAAAGIgHAAQAAgEgDgBQgCgCgCAAQgCAAgDADQgCADAAADQAAAHAHAEIAHAEQAFABACADQADAEAAAGQAAAIgFAEQgFAFgHAAQgQAAAAgPg");
	this.shape_140.setTransform(202.6,42.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgQAQIAHAAQAAAFADACQACACAEAAQAEAAADgDQADgDAAgEQAAgGgIgFIgGgEQgFgBgCgDQgDgEAAgGQAAgIAEgEQAFgEAGAAQAFAAAEADQAEAEAAAGIgHAAQAAgEgDgBQgCgCgCAAQgCAAgDADQgCADAAADQAAAHAHAEIAHAEQAFABACADQADAEAAAGQAAAIgFAEQgFAFgHAAQgQAAAAgPg");
	this.shape_141.setTransform(198,42.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AAPAdIgFgQIgTAAIgGAQIgGAAIAUg5IAFAAIASA5gAgHAHIAPAAIgIgZg");
	this.shape_142.setTransform(193.3,42.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgQAdIAAg5IAQAAQAIAAAEADQAFAEAAAJQAAAMgJACQgGAEgLAAIAAAXgAgJAAIAHAAQAMAAAAgMQAAgKgKAAIgJAAg");
	this.shape_143.setTransform(188.7,42.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgCAdIAAgFIAAgKIAAgNIgIgNIgJgQIAHAAIAMAYIANgYIAHAAIgJAQIgIANIAAANIAAAPg");
	this.shape_144.setTransform(184,42.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgQAdIAAg5IANAAQAHAAAEACQAGAEAAAJQAAAEgCAEQgCAEgEABQAGAAACAEQADAEAAAFQAAAQgRAAgAgJAXIAJAAQAKAAAAgKQAAgGgFgDQgFgCgFAAIgEAAgAgJgDIAGAAIAEAAQADgBABgEIACgFIgBgEIgBgDIgDgCIgCAAIgJAAg");
	this.shape_145.setTransform(179.4,42.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AAJAdIgFgNQgEgHgDgFIgGAAIAAAZIgHAAIAAg5IAQAAQAEAAAEAEQAEAEAAAHQAAAMgKADQAFADAEAKIAGAOgAgJgBIAGAAQADAAADgDQACgDAAgFQAAgKgHAAIgHAAg");
	this.shape_146.setTransform(211.9,34.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgPAdIAAg5IAbAAIAAAGIgVAAIAAATIATAAIAAAEIgTAAIAAAVIAZAAIAAAHg");
	this.shape_147.setTransform(207.3,34.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgCAdIAAgzIgRAAIAAgGIAnAAIAAAGIgRAAIAAAzg");
	this.shape_148.setTransform(202.6,34.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgQAdIAAg5IAHAAIAAAyIAaAAIAAAHg");
	this.shape_149.setTransform(198,34.8);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgKAdIAAgGIAIAAIAAgtIgIAAIAAgGIAVAAIAAAGIgIAAIAAAtIAIAAIAAAGg");
	this.shape_150.setTransform(193.3,34.8);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgNAdIAAg5IAbAAIAAAGIgVAAIAAAVIATAAIAAAEIgTAAIAAAag");
	this.shape_151.setTransform(188.7,34.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgQAdIAAg5IAHAAIAAAyIAaAAIAAAHg");
	this.shape_152.setTransform(179.4,34.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgKAdIAAgGIAIAAIAAgtIgIAAIAAgGIAVAAIAAAGIgIAAIAAAtIAIAAIAAAGg");
	this.shape_153.setTransform(174.7,34.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgPAUQgFgIAAgMQAAgLAFgIQAFgLAKAAQALAAAGALQAEAIAAALQAAAMgFAIQgFALgLAAQgKAAgFgLgAgKgPQgDAHAAAIQAAAKADAGQAEAJAGAAQAHAAAEgJQADgHAAgJQAAgIgDgHQgEgIgHgBQgGABgEAIg");
	this.shape_154.setTransform(170.1,34.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AAMAdIgXgsIAAAsIgGAAIAAg5IAGAAIAXAsIAAgEIAAgoIAGAAIAAA5g");
	this.shape_155.setTransform(198,22.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgPAdIAAg5IAbAAIAAAGIgVAAIAAATIATAAIAAAEIgTAAIAAAVIAZAAIAAAHg");
	this.shape_156.setTransform(193.3,22.4);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgQAdIAAg5IAQAAQAIAAAEADQAFAEAAAJQAAAMgJACQgGAEgLAAIAAAXgAgJAAIAHAAQAMAAAAgMQAAgKgKAAIgJAAg");
	this.shape_157.setTransform(188.7,22.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgPAUQgFgIAAgMQAAgKAFgJQAFgLAKAAQALAAAGALQAEAIAAALQAAAMgFAIQgFALgLAAQgKAAgFgLgAgKgPQgDAHAAAIQAAAKADAGQAEAJAGAAQAHAAAEgJQADgHAAgJQAAgIgDgHQgEgJgHAAQgGAAgEAJg");
	this.shape_158.setTransform(184,22.4);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgPAdIAAg5IAbAAIAAAGIgVAAIAAATIATAAIAAAEIgTAAIAAAVIAZAAIAAAHg");
	this.shape_159.setTransform(214.2,15.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgCAdIgTg5IAHAAIAOAvIAPgvIAHAAIgTA5g");
	this.shape_160.setTransform(209.6,15.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgQAdIAAg5IAHAAIAAAyIAaAAIAAAHg");
	this.shape_161.setTransform(204.9,15.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AAPAdIgFgQIgTAAIgGAQIgGAAIAUg5IAFAAIASA5gAgHAHIAPAAIgIgZg");
	this.shape_162.setTransform(200.3,15.1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgCAdIgTg5IAHAAIAOAvIAPgvIAHAAIgTA5g");
	this.shape_163.setTransform(195.6,15.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgCAdIAAgzIgRAAIAAgGIAnAAIAAAGIgRAAIAAAzg");
	this.shape_164.setTransform(186.3,15.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AAJAdIgFgNQgEgHgDgFIgGAAIAAAZIgHAAIAAg5IAQAAQAEAAAEAEQAEAEAAAHQAAAMgKADQAFADAEAKIAGAOgAgJgBIAGAAQADAAADgDQACgDAAgFQAAgKgHAAIgHAAg");
	this.shape_165.setTransform(181.7,15.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AAPAdIgFgQIgTAAIgGAQIgGAAIAUg5IAFAAIASA5gAgHAHIAPAAIgIgZg");
	this.shape_166.setTransform(177,15.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgCAdIAAgzIgRAAIAAgGIAnAAIAAAGIgRAAIAAAzg");
	this.shape_167.setTransform(172.4,15.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgQAQIAHAAQAAAFADACQACACAEAAQAEAAADgDQADgDAAgFQAAgGgIgEIgGgEQgFgBgCgDQgDgEAAgGQAAgHAEgFQAFgEAGAAQAFAAAEAEQAEADAAAGIgHAAQAAgEgDgCQgCgBgCAAQgCAAgDADQgCADAAAEQAAAFAHAFIAHAEQAFABACADQADAEAAAGQAAAIgFAFQgFAEgHAAQgQAAAAgPg");
	this.shape_168.setTransform(167.7,15.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#00CCFF").s().p("AgPAeIAAgGQAAgHAEgGQADgFAGgFIAGgGQAEgFAAgEQAAgEgDgDQgCgCgDAAQgHAAAAAHIgHAAIAAgBQAAgFAFgEQAEgDAFAAQAGAAAEADQAFAEAAAHQAAAIgHAGIgKAJQgGAHAAAIIAYAAIAAAHg");
	this.shape_169.setTransform(257,4.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#00CCFF").s().p("AgNAVQgEgHAAgOQAAgKAEgJQAFgLAKAAQAHAAAEAEQAFAEAAAGIgGAAQAAgDgDgDQgDgCgEAAQgGABgEAIQgCAHAAAIQAAAKACAGQAEAJAHAAIAJgCIAAgRIgLAAIAAgGIARAAIAAAbQgIAEgHAAQgKAAgGgKg");
	this.shape_170.setTransform(248.7,5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#00CCFF").s().p("AAMAdIgXgsIAAAsIgGAAIAAg5IAGAAIAXAsIAAgEIAAgoIAGAAIAAA5g");
	this.shape_171.setTransform(244.6,5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#00CCFF").s().p("AgPAdIAAg5IAbAAIAAAGIgVAAIAAATIATAAIAAAEIgTAAIAAAVIAZAAIAAAHg");
	this.shape_172.setTransform(240.4,5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#00CCFF").s().p("AADAdIAAgGIgFAAIAAAGIgKAAIAAgGIAKAAIAAgsIgKAFIAAgHIALgFIAEAAIAAAzIAKAAIAAAGgAADAdIgFAAIAAgGIAFAAIAAAGgAADAXg");
	this.shape_173.setTransform(199.5,5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#00CCFF").s().p("AgNAVQgEgHAAgOQAAgKAEgJQAFgLAKAAQAHAAAEAEQAFAEAAAGIgGAAQAAgDgDgDQgDgCgEAAQgGABgEAIQgCAHAAAIQAAAKACAGQAEAJAHAAIAJgCIAAgRIgLAAIAAgGIARAAIAAAbQgIAEgHAAQgKAAgGgKg");
	this.shape_174.setTransform(191.2,5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#00CCFF").s().p("AAMAdIgXgsIAAAsIgGAAIAAg5IAGAAIAXAsIAAgEIAAgoIAGAAIAAA5g");
	this.shape_175.setTransform(187,5);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#00CCFF").s().p("AgPAdIAAg5IAbAAIAAAGIgVAAIAAATIATAAIAAAEIgTAAIAAAVIAZAAIAAAHg");
	this.shape_176.setTransform(182.9,5);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AgSA3IAAgFQAAgWANgbQAFgJATghIgxAAIAAgNIA9AAIAAAMIgGALQgeAzAAAjg");
	this.shape_177.setTransform(148.8,28.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AgeAFQAAg+AiAAQAJAAAHAGQAJAGAAAJIgMAAQAAgKgNAAQgLAAgGARQgGAMABAPIAAAEQALgNALAAQANAAAHALQAHAIAAAOQAAAOgIALQgHALgOAAQggAAAAg1gAgMAJQgEAIABAMQAAAHAFAFQAHAGAFAAQAIAAAEgJQAFgHAAgJQAAgJgFgHQgEgGgJAAQgIAAgFAJg");
	this.shape_178.setTransform(141,28.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AgdA5IAAgMQAAgNAHgMQAGgIAKgKIAOgOQAHgIAAgIQAAgHgFgFQgEgEgGAAQgPAAAAAMIgLAAIAAgBQgBgKAJgHQAIgGAKAAQALAAAJAHQAIAHAAANQAAAOgMAMIgVATQgMANABAPIAuAAIAAANg");
	this.shape_179.setTransform(133,28);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AgGAJIAAgRIANAAIAAARg");
	this.shape_180.setTransform(144.9,33.9);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#33C300").s().p("AgFAGIAAgLIAKAAIAAALg");
	this.shape_181.setTransform(143.8,19.1);

	this.instance = new lib.B787EICAS_Gauge_N1Left("synched",0);
	this.instance.setTransform(120,38.2);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AgeAFQAAg+AiAAQAJAAAHAGQAJAGgBAJIgLAAQgBgKgMAAQgLAAgGARQgGAMABAPIAAAEQALgNALAAQANAAAIALQAGAIAAAOQAAAOgHALQgIALgOAAQggAAAAg1gAgMAJQgDAIAAAMQgBAHAHAFQAFAGAGAAQAIAAAFgJQAEgHAAgJQAAgJgEgHQgGgGgIAAQgIAAgFAJg");
	this.shape_182.setTransform(70.1,28.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AgeAFQAAg+AiAAQAJAAAHAGQAJAGAAAJIgMAAQAAgKgNAAQgLAAgGARQgGAMABAPIAAAEQALgNALAAQANAAAHALQAHAIAAAOQAAAOgIALQgHALgOAAQggAAAAg1gAgMAJQgEAIABAMQAAAHAFAFQAHAGAFAAQAIAAAEgJQAFgHAAgJQAAgJgFgHQgEgGgJAAQgIAAgFAJg");
	this.shape_183.setTransform(62.3,28.1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AgdA5IAAgMQAAgNAHgMQAGgIAKgKIAOgOQAHgIAAgIQAAgHgFgFQgEgEgGAAQgPAAAAAMIgLAAIAAgBQgBgKAJgHQAIgGAKAAQALAAAJAHQAIAHAAANQAAAOgMAMIgVATQgMANABAPIAuAAIAAANg");
	this.shape_184.setTransform(54.3,28);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AgGAJIAAgRIANAAIAAARg");
	this.shape_185.setTransform(66.1,33.9);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AgaAlQgHgQAAgVQAAgUAHgQQAJgVARAAQASAAAJAVQAHAQAAAUQAAAVgHAQQgJAVgSAAQgRAAgJgVgAgRgcQgDANAAAPQAAAQADANQAGASALAAQAMAAAGgSQAEgNAAgQQAAgPgEgNQgGgSgMAAQgLAAgGASg");
	this.shape_186.setTransform(148.9,87.4);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AAFA3IAAgLIATAAIAAALgAgEA3IAAgLIAJAAIAAALgAgEA3IgTAAIAAgLIATAAIAAhUIgTAJIAAgNIATgKIAJAAIAABiIgJAAIAAALgAAFAsg");
	this.shape_187.setTransform(141,87.4);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AgTAzQgIgGgBgLIAMAAQABALAPAAQAHAAAFgHQAEgHAAgKQAAgQgMgFQgGgBgTAAIAAg3IAuAAIAAANIgjAAIAAAdQARAAAKAIQAMAGAAAUQAAAPgIAKQgIAMgNAAQgLAAgIgGg");
	this.shape_188.setTransform(132.9,87.6);

	this.instance_1 = new lib.B787EICAS_Gauge_EGTLeft("synched",0);
	this.instance_1.setTransform(120,97.5);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#00CCFF").s().p("AgCAdIAAgzIgRAAIAAgGIAnAAIAAAGIgRAAIAAAzg");
	this.shape_189.setTransform(86.6,122.3);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#00CCFF").s().p("AgNAWQgEgJAAgNQAAgLAEgIQAFgLAKAAQAHAAAEADQAFAFAAAGIgGAAQAAgEgDgBQgDgCgEAAQgGAAgEAJQgCAGAAAIQAAAJACAHQAEAJAHAAIAJgCIAAgRIgLAAIAAgGIARAAIAAAaQgIAFgHAAQgKAAgGgJg");
	this.shape_190.setTransform(82.5,122.3);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#00CCFF").s().p("AgPAdIAAg5IAbAAIAAAGIgVAAIAAATIATAAIAAAEIgTAAIAAAVIAZAAIAAAHg");
	this.shape_191.setTransform(78.3,122.3);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AgeAFQAAg+AjAAQAIAAAHAGQAJAGgBAJIgLAAQgBgKgLAAQgMAAgGARQgGAMABAPIAAAEQAKgNAMAAQANAAAIALQAGAIAAAOQAAAOgHALQgJALgNAAQggAAAAg1gAgMAJQgDAIgBAMQAAAHAHAFQAFAGAGAAQAIAAAFgJQADgHAAgJQAAgJgDgHQgGgGgIAAQgIAAgFAJg");
	this.shape_192.setTransform(70.2,87.4);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AAFA3IAAgLIAAALIgJAAIAAgLIAJAAIgJAAIAAhUIgTAJIAAgNIATgKIAJAAIAABiIATAAIAAALgAgXA3IAAgLIATAAIAAALgAgEAsg");
	this.shape_193.setTransform(62.3,87.4);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AgTAzQgIgGgBgLIAMAAQABALAPAAQAHAAAFgHQAEgHAAgKQAAgQgMgFQgGgBgTAAIAAg3IAuAAIAAANIgjAAIAAAdQARAAAKAIQAMAGAAAUQAAAPgIAKQgIAMgNAAQgLAAgIgGg");
	this.shape_194.setTransform(54.2,87.6);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#00CCFF").s().p("AADAdIAAgGIAAAGIgFAAIAAgGIAFAAIgFAAIAAgsIgKAFIAAgHIALgFIAEAAIAAAzIAKAAIAAAGgAgMAdIAAgGIAKAAIAAAGgAgCAXg");
	this.shape_195.setTransform(83.6,66);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#00CCFF").s().p("AAMAdIgXgsIAAAsIgGAAIAAg5IAGAAIAXAsIAAgEIAAgoIAGAAIAAA5g");
	this.shape_196.setTransform(79.2,63);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#33C300").s().p("AgFAGIAAgLIAKAAIAAALg");
	this.shape_197.setTransform(65.1,19.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#33C300").s().p("AgVAbQgGgLAAgQQAAgPAGgLQAIgPANAAQAPAAAIAPQAFALAAAPQAAAQgGALQgIAPgOAAQgNAAgIgPgAgOgUQgDAJAAALQAAAMADAJQAFAMAJAAQAKAAAFgMQADgJAAgMQAAgLgDgJQgFgMgKAAQgJAAgFAMg");
	this.shape_198.setTransform(85.5,5.3);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#33C300").s().p("AgDAnIAAhFIgWAAIAAgIIA0AAIAAAIIgXAAIAABFg");
	this.shape_199.setTransform(79.8,5.3);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AgNAkQgGgEAAgIIAIAAQABAIAKAAQAFAAADgGQADgEAAgHQAAgMgJgDQgDAAgOAAIAAgoIAgAAIAAAJIgYAAIAAAWQAMgBAHAGQAJAEgBAOQABAKgGAIQgGAJgJAAQgIgBgFgEg");
	this.shape_200.setTransform(44.2,5.4);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AAEAnIAAgIIAAAIIgGAAIAAgIIAAAIIgOAAIAAgIIAOAAIAGAAIgGAAIAAg7IgOAHIAAgKIAOgHIAGAAIAABFIANAAIAAAIg");
	this.shape_201.setTransform(38.6,5.3);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AgCAcIAAgYIgUAAIAAgHIAUAAIAAgYIAFAAIAAAYIAUAAIAAAHIgUAAIAAAYg");
	this.shape_202.setTransform(32.8,6.4);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AgNAVQgEgJAAgMQAAgLAEgJQAGgKAJAAQAHAAAFADQAEAFAAAHIgGAAQAAgEgDgCQgCgCgEAAQgHgBgEAJQgCAHAAAIQAAAKACAGQAEAJAHAAQAJAAAAgJIAGAAIAAABQAAAGgEAFQgFADgHAAQgJAAgGgKg");
	this.shape_203.setTransform(51.2,6.7);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#00CCFF").s().p("AgCAdIAAgzIgRAAIAAgGIAnAAIAAAGIgRAAIAAAzg");
	this.shape_204.setTransform(21.6,6.8);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#00CCFF").s().p("AAPAdIgFgQIgTAAIgGAQIgGAAIAUg5IAFAAIASA5gAgHAHIAPAAIgIgZg");
	this.shape_205.setTransform(17.5,6.8);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#00CCFF").s().p("AgCAdIAAgzIgRAAIAAgGIAnAAIAAAGIgRAAIAAAzg");
	this.shape_206.setTransform(13.3,6.8);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#5E5D66").ss(1.3,1,0,3).p("AGWAAQAACoh3B3Qh3B4ioAAQinAAh4h4Qh2h3AAioQAAinB2h4QB4h3CnAAQCoAAB3B3QB3B4AACngABzAAQAAAvgiAiQghAigwAAQguAAgigiQgigiAAgvQAAgvAigiQAighAuAAQAwAAAhAhQAiAiAAAvgAklAPQgBgIAAgHQAAh4BXhXQBWhWB5AAQB5AABXBWQBXBXAAB4QAAB5hXBYQhXBWh5AAQgJAAgKgB");
	this.shape_207.setTransform(213.3,219.4);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("ABqU+IAAiKIEUAAIAACKgAi/U+IAAiKIESAAIAACKgAnqU+IAAiKIEUAAIAACKgAAYl2IAAi5IIPAAIAAC5gAoml4IAAi3IIPAAIAAC3gAAYo8IAAi3IIPAAIAAC3gAomo8IAAi3IIPAAIAAC3gAAYr/IAAi3IIPAAIAAC3gAomr/IAAi3IIPAAIAAC3gAAYvDIAAi3IIPAAIAAC3gAomvDIAAi3IIPAAIAAC3gAAYyGIAAi3IIPAAIAAC3gAomyGIAAi3IIPAAIAAC3g");
	this.shape_208.setTransform(219.8,144.2);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#5E5D66").s().p("ABiVwIAAibIAAgDIEkAAIAAADIAACbgABqVnIEUAAIAAiLIkUAAgAjHVwIAAibIAAgDIEjAAIAAADIAACbgAi/VnIESAAIAAiLIkSAAgAnzVwIAAibIAAgDIElAAIAAADIAACbgAnqVnIEUAAIAAiLIkUAAgAALlCIAAvgIIoAAIAAPggAAYlOIIPAAIAAi5IoPAAgAAYoUIIPAAIAAi3IoPAAgAAYrXIIPAAIAAi3IoPAAgAAYubIIPAAIAAi3IoPAAgAAYxeIIPAAIAAi3IoPAAgAoylEIAAveIIoAAIAAPegAomlQIIPAAIAAi3IoPAAgAomoUIIPAAIAAi3IoPAAgAomrXIIPAAIAAi3IoPAAgAomubIIPAAIAAi3IoPAAgAomxeIIPAAIAAi3IoPAAgACw0mIAAhJIDbAAIAABJgAmO0mIAAhJIDbAAIAABJg");
	this.shape_209.setTransform(219.8,140.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.instance_1},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.instance},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Gauges
	this.instance_2 = new lib.B787EICAS_Gauge_EGTLeft("synched",0);
	this.instance_2.setTransform(41.2,97.5);

	this.instance_3 = new lib.B787EICAS_Gauge_N1Left("synched",0);
	this.instance_3.setTransform(41.2,38.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// Line Work
	this.instance_4 = new lib.flapspointer("synched",0);
	this.instance_4.setTransform(213.3,219.4,1,1,0,0,0,28.8,2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.4,-461,695,873.8);


(lib._787_Generic_screencopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// clock
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXAgQgGgNAAgTQAAgRAGgOQAIgSAPAAQAQAAAIASQAGAOAAARQAAASgGAMQgIAVgQgBQgPAAgIgSgAgNgWQgDAJAAANQAAAOADAKQAFAPAIAAQAJAAAFgQQADgJAAgOQAAgNgDgLQgFgOgJAAQgIABgFAPg");
	this.shape.setTransform(526.4,442.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXAgQgGgNAAgTQAAgRAGgOQAIgSAPAAQAQAAAIASQAGAOAAARQAAASgGAMQgIAVgQgBQgPAAgIgSgAgNgWQgDAJAAANQAAAOADAKQAFAPAIAAQAJAAAFgQQADgJAAgOQAAgNgDgLQgFgOgJAAQgIABgFAPg");
	this.shape_1.setTransform(518.9,442.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXAgQgGgNAAgTQAAgRAGgOQAIgSAPAAQAQAAAIASQAGAOAAARQAAASgGAMQgIAVgQgBQgPAAgIgSgAgNgWQgDAJAAANQAAAOADAKQAFAPAIAAQAJAAAFgQQADgJAAgOQAAgNgDgLQgFgOgJAAQgIABgFAPg");
	this.shape_2.setTransform(511.3,442.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVA5QgKgIAAgMIANAAQABANAQAAQAJAAAFgJQAFgHAAgLQAAgSgOgFQgHgBgVgBIAAg8IA0AAIAAAPIgoAAIAAAfQAUABALAIQANAIAAAVQAAARgJALQgJAMgOAAQgNAAgIgFg");
	this.shape_3.setTransform(503.3,441.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AggA+IAAgNQAAgOAIgNQAGgIAMgMIAPgPQAIgKAAgIQAAgIgGgFQgFgFgGAAQgQAAAAANIgNAAIAAgBQAAgLAJgHQAJgHALAAQANAAAJAIQAJAIAAAPQAAAOgNAOIgXAUQgNAOAAARIAzAAIAAAOg");
	this.shape_4.setTransform(493.7,441.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00CCFF").s().p("AgUAlIAAhJIAKAAIAAA/IAfAAIAAAKg");
	this.shape_5.setTransform(482.8,442.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00CCFF").s().p("AARAlIgFgUIgXAAIgHAUIgJAAIAZhJIAHAAIAXBJgAgIAHIASAAIgKgdg");
	this.shape_6.setTransform(477,442.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00CCFF").s().p("AgDAlIAAhAIgVAAIAAgJIAxAAIAAAJIgUAAIAABAg");
	this.shape_7.setTransform(471.2,442.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00CCFF").s().p("AgUAaQgGgLAAgPQAAgOAGgKQAHgOANAAQAOAAAHAOQAGAKAAAOQAAAPgGAKQgHAOgOAAQgNAAgHgNgAgMgSQgDAIAAAKQAAALADAIQAFALAHAAQAJgBAEgKQADgIAAgLQAAgKgDgHQgEgMgJAAQgHABgFAKg");
	this.shape_8.setTransform(465.3,442.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00CCFF").s().p("AgDAlIAAhAIgVAAIAAgJIAxAAIAAAJIgUAAIAABAg");
	this.shape_9.setTransform(459.5,442.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgXAgQgGgNAAgTQAAgRAGgNQAIgUAPAAQAQAAAIAUQAGANAAARQAAASgGAMQgIAVgQAAQgPAAgIgTgAgNgXQgDAKAAANQAAAOADAKQAFAOAIAAQAJAAAFgPQADgJAAgOQAAgMgDgMQgFgNgJAAQgIgBgFAPg");
	this.shape_10.setTransform(540.5,364.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgSAuQgHgGABgKIAMAAQAAAFACABQADACAEAAQAIAAAGgNQAEgLAAgOIAAAAQgIALgKAAQgLABgHgLQgGgHABgMQgBgMAHgJQAHgLAMAAQAQAAAHAVQAFAKABATQgBATgGAOQgIASgQAAQgJgBgGgEgAgLgeQgDAFAAAIQAAAHADAFQAEAFAHAAQAEAAAFgFQADgFAAgIQAAgIgDgGQgFgFgFAAQgGgBgEAIg");
	this.shape_11.setTransform(533,364.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgSAuQgGgGAAgKIAMAAQAAAFADABQACACAEAAQAJAAAFgNQAEgLAAgOIAAAAQgIALgKAAQgLABgHgLQgGgHABgMQgBgMAHgJQAHgLANAAQAOAAAIAVQAFAKABATQgBATgGAOQgIASgQAAQgJgBgGgEgAgLgeQgDAFAAAIQAAAHADAFQAEAFAHAAQAEAAAFgFQADgFAAgIQAAgIgDgGQgFgFgEAAQgHgBgEAIg");
	this.shape_12.setTransform(525.4,364.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgUA9IAAgGQAAgZAOgdQAGgKAVglIg2AAIAAgOIBDAAIAAAOIgGALQgiA5AAAng");
	this.shape_13.setTransform(517.4,363.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00CCFF").s().p("AALAlQgEgMgDgEQgEgIgEgIIgHAAIAAAgIgKAAIAAhJIAUAAQAHAAAFAGQAFAFAAAKQAAAOgMAEQAFADAGANIAHASgAgLgCIAHAAQAEAAADgCQADgFAAgGQAAgMgJAAIgIAAg");
	this.shape_14.setTransform(534.7,349.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00CCFF").s().p("AgDAlIAAhAIgVAAIAAgJIAxAAIAAAJIgUAAIAABAg");
	this.shape_15.setTransform(528.8,349.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00CCFF").s().p("AgRAZQgGgJAAgQQAAgPAGgJQAHgOANAAQAJAAAGAFQAGAFAAAKIgKAAQAAgGgDgCQgDgCgFgBQgHAAgFAKQgDAIAAALQAAAMADAIQAFAJAHABQALAAAAgLIAKAAIAAACQAAAJgHAEQgFAFgJAAQgNAAgHgOg");
	this.shape_16.setTransform(523,349.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgXAgQgGgNAAgTQAAgRAGgOQAIgSAPAAQAQAAAIASQAGAOAAARQAAASgGAMQgIAVgQgBQgPAAgIgSgAgNgWQgDAJAAANQAAAOADAKQAFAPAIAAQAJAAAFgQQADgJAAgOQAAgNgDgLQgFgOgJAAQgIABgFAPg");
	this.shape_17.setTransform(576.3,415.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgXAgQgGgNAAgTQAAgRAGgOQAIgSAPAAQAQAAAIASQAGAOAAARQAAASgGAMQgIAVgQgBQgPAAgIgSgAgNgWQgDAJAAANQAAAOADAKQAFAPAIAAQAJAAAFgQQADgJAAgOQAAgNgDgLQgFgOgJAAQgIABgFAPg");
	this.shape_18.setTransform(568.8,415.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgRAsQgIgFAAgMIANAAQAAAKAMAAQAFAAAEgGQAEgFAAgIQAAgNgKgEQgFgBgRAAIAAgwIAqAAIAAANIgfAAIAAAXQAOAAAKAHQAKAFgBARQAAANgGAJQgIAKgLAAQgKAAgHgFg");
	this.shape_19.setTransform(561.3,416);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgYA2QgKgKAAgRQAAgWATgKQgPgKAAgRQAAgOAJgJQAJgIAMAAQANAAAJAJQAJAJAAANQAAAJgEAHQgDAFgJAGQAUAJAAAXQAAARgJAKQgKAKgQAAQgPAAgJgKgAgPAIQgGAIAAAKQAAAKAGAIQAHAIAIAAQAKAAAGgIQAFgHAAgLQAAgKgFgIQgHgIgJAAQgIAAgHAIgAgLgtQgFAGAAAIQAAAIAFAGQAFAGAGAAQAHAAAFgGQAFgGAAgIQAAgIgFgGQgEgGgIAAQgGAAgFAGg");
	this.shape_20.setTransform(553.3,414.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00CCFF").s().p("AgTAmIAAgJQAAgIAGgJQACgFAHgGIAIgIQAFgGAAgFQAAgEgDgDQgDgCgDAAQgIAAAAAIIgKAAIAAgCQAAgIAIgEQAEgEAGAAQAIAAAFAEQAGAGAAAJQAAAJgIAJIgMALQgIAIAAAIIAdAAIAAALg");
	this.shape_21.setTransform(564.7,400.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgXAgQgGgNAAgTQAAgRAGgOQAIgSAPAAQAQAAAIASQAGAOAAARQAAASgGAMQgIAVgQgBQgPAAgIgSgAgNgWQgDAJAAANQAAAOADAKQAFAPAIAAQAJAAAFgQQADgJAAgOQAAgNgDgLQgFgOgJAAQgIABgFAPg");
	this.shape_22.setTransform(502.4,415.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgXAgQgGgNAAgTQAAgRAGgOQAIgSAPAAQAQAAAIASQAGAOAAARQAAASgGAMQgIAVgQgBQgPAAgIgSgAgNgWQgDAJAAANQAAAOADAKQAFAPAIAAQAJAAAFgQQADgJAAgOQAAgNgDgLQgFgOgJAAQgIABgFAPg");
	this.shape_23.setTransform(494.9,415.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgRAsQgHgFgBgMIANAAQAAAKAMAAQAFAAAEgGQADgFAAgIQABgNgKgEQgFgBgRAAIAAgwIAqAAIAAANIgfAAIAAAXQAOAAAKAHQAKAFAAARQgBANgGAJQgIAKgLAAQgKAAgHgFg");
	this.shape_24.setTransform(487.4,416);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgYA2QgKgKAAgRQAAgWATgKQgPgKAAgRQAAgOAJgJQAJgIAMAAQANAAAJAJQAJAJAAANQAAAJgEAHQgDAFgJAGQAUAJAAAXQAAARgJAKQgKAKgQAAQgPAAgJgKgAgPAIQgGAIAAAKQAAAKAGAIQAHAIAIAAQAKAAAGgIQAFgHAAgLQAAgKgFgIQgHgIgJAAQgIAAgHAIgAgLgtQgFAGAAAIQAAAIAFAGQAFAGAGAAQAHAAAFgGQAFgGAAgIQAAgIgFgGQgEgGgIAAQgGAAgFAGg");
	this.shape_25.setTransform(479.3,414.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00CCFF").s().p("AAEAlIAAgJIAAAJIgHAAIAAgJIAHAAIgHAAIAAg1IgMAHIAAgKIANgIIAGAAIAABAIANAAIAAAJgAgQAlIAAgJIANAAIAAAJgAgDAcg");
	this.shape_26.setTransform(490.8,400.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00CCFF").s().p("AgVAlIAAhJIARAAQAJAAAGAEQAHAEAAAMQAAAFgDAFQgCAFgEABQAGAAADAEQAEAFAAAHQAAAVgWAAgAgLAbIALAAQALABAAgLQAAgIgGgCQgFgDgGgBIgFAAgAgLgEIAHAAQAEAAABgBQADgBACgEIABgGIAAgEIgCgEIgCgCIgDAAIgLAAg");
	this.shape_27.setTransform(531.1,401.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00CCFF").s().p("AgUAlIAAhJIAKAAIAAA/IAfAAIAAAKg");
	this.shape_28.setTransform(525.3,401.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00CCFF").s().p("AgUAlIAAhJIAKAAIAAA/IAfAAIAAAKg");
	this.shape_29.setTransform(536.9,390.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00CCFF").s().p("AgUAlIAAhJIAkAAIAAALIgaAAIAAAUIAXAAIAAAHIgXAAIAAAZIAfAAIAAAKg");
	this.shape_30.setTransform(531.1,390.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00CCFF").s().p("AgSAeQgFgGAAgOIAAgvIAKAAIAAAuQAAAKADAEQADAFAHAAQAJABADgIQACgFAAgKIAAgrIAKAAIAAAtQAAAegYAAQgMAAgGgIg");
	this.shape_31.setTransform(525.3,391);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#00CCFF").s().p("AgRAlIAAhJIAkAAIAAALIgaAAIAAAWIAWAAIAAAHIgWAAIAAAhg");
	this.shape_32.setTransform(519.5,390.9);

	this.instance = new lib.ENGPRI_fuelgaugectr("synched",0);
	this.instance.setTransform(528.7,364.3,1.1,1.1,0,0,0,24.8,24.8);

	this.instance_1 = new lib.ENGPRI_fuelgauge2("synched",0);
	this.instance_1.setTransform(564.5,415.6,1.1,1.1,0,0,0,24.8,24.8);

	this.instance_2 = new lib.ENGPRI_fuelgauge1("synched",0);
	this.instance_2.setTransform(490.6,415.6,1.1,1.1,0,0,0,24.8,24.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Right
	this.instance_3 = new lib.B787SynopticENGINEAllPositions("synched",0);
	this.instance_3.setTransform(317.3,253.5,1,1,0,0,0,0,206.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Left2
	this.instance_4 = new lib.B787SynopticNDMapHalfVSD("synched",0);
	this.instance_4.setTransform(36.9,253.8,1,1,0,0,0,0,206.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Split Line for dual screen - PFD RIGHT
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#999999").s().p("EgATAghMAAAhBBIAnAAMAAABBBg");
	this.shape_33.setTransform(319.8,251.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(1));

	// base
	this.instance_5 = new lib._787_Generic_screw03("synched",0);
	this.instance_5.setTransform(7.3,445.5,1,1,0,0,0,5.4,5.4);

	this.instance_6 = new lib._787_Generic_screw03("synched",0);
	this.instance_6.setTransform(7.3,56,1,1,0,0,0,5.4,5.4);

	this.instance_7 = new lib._787_Generic_screw03("synched",0);
	this.instance_7.setTransform(632.1,445.5,1,1,0,0,0,5.4,5.4);

	this.instance_8 = new lib._787_Generic_screw03("synched",0);
	this.instance_8.setTransform(632.1,56,1,1,0,0,0,5.4,5.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#7E8D9A","#4E616D"],[0,1],-4,1.6,-2.7,5).s().p("Ag8BSQgaAAgIgTQgDgHgBgHIAAhhQABgIADgFQAIgUAaAAICeAAIAAAUIidAAQgSABgBASIAABVQABASASACICdAAIAAATg");
	this.shape_34.setTransform(555.5,494.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#7E8D9A","#4E616D"],[0,1],-30.1,-22,-27.8,-21.4).s().p("EgF0AmcIAAgUIBdAAIJKAAIACAAQApgBADgpIAAgCIAAgDMAAAhL0IAUAAMAAABL0QAAAfgOAQQgRAUgjAAg");
	this.shape_35.setTransform(602.7,256.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#7E8D9A","#4E616D"],[0,1],-12.6,6.2,-16.4,5.5).s().p("EAA1AkTIkFAAIheAAIAAgUIFjAAIAogIIAPgHIARgJIACgCIAHgGIAggdIABAAIAYgXIADgDIANgLIASgSIAhghIAAgBIABgBIAAAAIAMgUIADgIIACgEIABgDIAFgZIAAgKIAAAAIAAgCIAAgEIAAgBMAAAhCVQAAgbgIgWQgFgPgKgMIAAAAQgGgJgugsIgYgWIAcAAIABAAIAJAHQAwAuAHALIAAgBQAKAPAHAQIAAABIAAAAQAJAZABAfMAAABCVIAAABIAAAEIAAACIgBAMIgGAdIgBACIgDAIIgCAGIgRAbIgBACIggAhIAAAAIgBAAIgSASIAAAAIgBAAIgLAMIgNALIAAAAIgGAFIgCACIgqAnIgNAJIAAAAIAAAAIgQAJIAAAAIgQAIIgCABIgCAAQgVAHgWABIgBAAg");
	this.shape_36.setTransform(595.7,255.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#7E8D9A","#4E616D"],[0,1],-53,17.2,-49,20.5).s().p("AFIBPIgBAAIgwgtQgogggqABIoCAAQgbgBgIgRQgCgGgBgIIAAgxIAUAAIAAAsQAAASATABID8AAIEFAAQAZgBAZAKIAdANIAPALQAFADA8A6g");
	this.shape_37.setTransform(581.3,15.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#7E8D9A","#4E616D"],[0,1],40.6,-1.8,44.8,2.4).s().p("AHEA4IAAgtIAAgDIAAgDQgDgngrgBIpKAAIj8AAQgSABgBATIAAAqIgUAAIAAgwQABgIADgGQAIgTAagBINHAAQAjABARATQAOARAAAdIAAAtg");
	this.shape_38.setTransform(592.8,4.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#7E8D9A","#4E616D"],[0,1],-2.2,-3.4,-0.4,-0.2).s().p("AhiBSIAAgTICeAAQASgBABgTIAAhVQgBgTgSAAIieAAIAAgUICfAAQAaAAAIAUQACAFABAIIAAAAIAABhIAAAAQgBAHgCAHQgIATgaAAg");
	this.shape_39.setTransform(83.8,7.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#7E8D9A","#4E616D"],[0,1],319.6,-217.3,323.2,-212.2).s().p("AASC4QhBAAAAhDIAAksIAUAAIAAEsQgBAvAuABIAfAAIAAATg");
	this.shape_40.setTransform(4.2,484.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#7E8D9A","#4E616D"],[0,1],0.4,-4.5,2.2,-1.3).s().p("AhiBSIAAgTICeAAQASgCABgSIAAhVQgBgSgSgBIieAAIAAgUICfAAQAaAAAIAUQACAFABAIIAABhQgBAHgCAHQgIATgaAAg");
	this.shape_41.setTransform(83.8,494.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#7E8D9A","#4E616D"],[0,1],11.1,7.4,7.3,6.7).s().p("EADSAlDIkIAAIgqgIIgCgBIgCAAIgQgHIgBgBIgPgJIAAAAIgOgJIAAgBIgwgtIgYgXIgIgHIgvgwIgNgUIgKgaIgFgpMAAAhCXQgBgfAKgZIAAAAIAHgNIAAgBIAKgQIAAgBQAGgKAyguIAIgIIBBg9QAvgkAwABIEFAAIBcAAIAAAUIlhAAQgqgBgpAgIgwAtIgYAWQguAsgGAJIAAAAIgKAQIgFALIAAAAQgIAWAAAbMAAABCWIAFAlIAIAWIAKARIAAgBIAuAvIAGAGIApAmIAfAeIANAIIANAIIAQAHIAoAIIFiAAIAAAUg");
	this.shape_42.setTransform(43.6,250.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#7E8D9A","#4E616D"],[0,1],3.1,-1.8,6.7,3.3).s().p("EghcAnUQgaAAgIgTQgDgHgBgHIAAhjQgBgIgCgFQgIgUgbAAIigAAIlkAAIgpgIIgPgHIgNgIIgNgJIgfgdIgpgmIgGgGIgugvIAAABIgKgRIgJgWIgFglMAAAhCWQAAgbAJgWIAAAAIAEgLIALgQIAAAAQAGgJAugsIAYgWIAwgtQApggApAAIFkAAICgAAQAbAAAIgTQACgHABgHIAAAAIAAhjQABgIADgFQAIgUAaAAMBFZAAAQAbAAAIAUQACAFABAIIAAAyIAAAxQABAHADAHQAIATAaAAIIEAAQAqAAAoAgIAwAtIABAAIAYAWQAuAsAGAJIAAAAQAJAMAGAPQAIAWAAAbMAAABCVIAAABIAAAEIAAACIAAAAIAAAKIgFAZIgBADIgCAEIgDAIIgMAUIAAAAIgBABIgBABIggAhIgSASIgNALIgDADIgYAXIgBAAIggAdIgHAGIgCACIgRAJIgPAHIgoAIIllAAIigAAQgaAAgIAUQgDAFgBAIIAABjQgBAHgCAHQgIATgbAAgEgrOAkUIAiAGIIJAAQAdABANAPQALAMAAAZIAABeQABASASACMBFYAAAQAGgBAFgDQAHgEAAgMIAAheQABgZALgMQAMgPAdgBIIJAAIAjgGIAQgIIAGgDIANgKIAAAAIAOgNIACAAIAdgbIAagZIAUgTIAegfIAAgBQATgZAAgnMAAAhCVQAAgngTgaIAAAAQgGgIgsgpIgnglIgBAAIgfgeIAAAAQgigagkgBIoJAAQgdgBgMgOQgMgNAAgbIAAhbQAAgMgHgEQgFgDgGAAMhFYAAAQgSAAgBATIAABbQAAAbgLANQgNAOgdABIoJAAQgjABgjAaIABAAIggAeIgnAlQgsApgGAIIAAAAQgUAaAAAnMAAABCVQAAAnAUAZIAAABIABABIBABAIApAlIAPANIgBAAQARANATAIgEgvQAnUIAAgTIIrAAIBdAAIAAATgEgwyAhjMAAAhHzQAAhDBDAAIKnAAIAAAUIhdAAIpKAAQgvgBAAAwMAAABHzg");
	this.shape_43.setTransform(311.6,251);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#6C7B8A","#4E616D"],[0,1],1.4,-11.7,-14.4,-11.7).s().p("AAqA/IidAAQgTgCAAgSIAAhVQAAgSATgBICdAAIBdAAIAAB8g");
	this.shape_44.setTransform(561.2,494.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#6C7B8A","#4E616D"],[0,1],-1.3,-11.7,14.5,-11.7).s().p("AgpA/IhdAAIAAh8IBdAAICdAAQATABAAASIAABVQAAASgTACg");
	this.shape_45.setTransform(78.2,494.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#6C7B8A","#4E616D"],[0,1],-1.3,11.7,14.5,11.7).s().p("AgpA/IhdAAIAAh8IBdAAICdAAQATAAAAATIAABVQAAATgTABg");
	this.shape_46.setTransform(78.2,7.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#6C7B8A","#4E616D"],[0,1],1.4,11.7,-14.4,11.7).s().p("AhzA/QgTgCAAgRIAAgsIAAgqQAAgTATAAID6AAIAAB8g");
	this.shape_47.setTransform(561.2,7.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#7E8D9A","#4E616D"],[0,1],6.5,8.8,-6.4,-8.7).s().p("EgrQAiIQh/AAAAh/MAAAhAQQAAiAB/AAMBWgAAAQCAAAAACAMAAABAQQAAB/iAAAgEgrsgguQgGAEgEAGQgLAOAAAbMAAAA/2QAAAeALAMQAEAGAGAEQAOALAbAAMBWHAAAQAaAAAPgLQAGgEAEgGQALgPAAgbMAAAg/2QAAgZgLgQQgEgGgGgEQgOgLgbAAMhWHAAAQgZAAgQALg");
	this.shape_48.setTransform(319.7,251);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#6C7B8A").s().p("EAxBAnBIpLAAIAAh+IEIAAIABAAQAWgBAUgHIACAAIADgBIAPgIIABAAIAPgJIAAAAIABAAIANgJIAqgnIACgCIAFgFIAAAAIANgLIAMgMIAAAAIABAAIASgSIAAAAIAAAAIAgghIACgCIARgbIACgGIADgIIAAgCIAHgdIAAgMIAAgCIAAgEIAAgBMAAAhCVQAAgfgJgZIAAAAIgBgBQgGgQgLgPIAAABQgGgLgxguIgIgHIgBAAQg8g6gFgDIgPgLIgdgPQgZgKgZABIkHAAIAAh+IJLAAQAsAAACAqIAAACIAAADIAAAtMAAABL0IAAADIAAACQgCApgqACIgCAAgEgirAnBQgSgCgBgSIAAheQgBgZgKgMQgNgPgdgBIoJAAIgjgGQgSgIgRgNIAAAAIgOgNIgpglIhAhAIgBgBIAAgBQgUgZAAgnMAAAhCVQAAgnAUgaIAAAAQAGgIArgpIAoglIAfgeIAAAAQAigaAkgBIIJAAQAdgBANgOQALgNAAgbIAAhbQABgTASAAMBFXAAAQAHAAAFADQAHAEAAAMIAABbQAAAbAMANQAMAOAdABIIJAAQAjABAjAaIAAAAIAfAeIABAAIAnAlQAsApAFAIIAAAAQAUAaAAAnMAAABCVQAAAngUAZIAAABIgeAfIgTATIgaAZIgdAbIgCAAIgOANIAAAAIgNAKIgGADIgRAIIgiAGIoJAAQgdABgMAPQgMAMAAAZIAABeQAAAMgHAEQgFADgHABgEgtPggHMAAABAQQAAB/B/AAMBWgAAAQCAAAAAh/MAAAhAQQAAiAiAAAMhWgAAAQh/AAAACAgEgwgAnBIgfAAQgwAAABgwIAAkuMAAAhHzQgBgwAwABIJKAAIAAB+IkHAAQgwgBguAkIhBA9IgJAHQgxAvgHAKIAAABIgKAQIAAABIgGANIAAAAQgKAZAAAfMAAABCXIAGApIAJAaIANAUIAwAwIAHAHIAYAXIAxAtIAAABIANAJIABAAIAPAJIABAAIAQAIIABAAIACABIArAIIEJAAIAAB+g");
	this.shape_49.setTransform(319.7,251);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("EgrDAg6QgbAAgOgLQgGgEgEgGQgLgMAAgeMAAAg/2QAAgbALgOQAEgGAGgEQAQgLAZAAMBWHAAAQAbAAAOALQAGAEAEAGQALAQAAAZMAAAA/2QAAAbgLAPQgEAGgGAEQgPALgaAAg");
	this.shape_50.setTransform(319.7,251);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).wait(1));

	// base fill
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#4E616D").s().p("EgwgAnUIgfAAQhDAAAAhDIAAkuMAAAhHzQAAhDBDAAMBiBAAAQAjAAAQAUQAPAQAAAfIAAAtMAAABL0QAAAfgPARQgQATgjAAgEAwRAd2QgOAPAAATQAAAUAOAOQAOAPAVAAQATAAAOgPQAPgOAAgUQAAgTgPgPQgOgOgTAAQgVAAgOAOgEgxVAd2QgOAPAAATQAAAUAOAOQAOAPAVAAQATAAAOgPQAPgOAAgUQAAgTgPgPQgOgOgTAAQgVAAgOAOgEAwRge+QgOAOAAAUQAAAUAOANQAOAQAVgBQATABAOgQQAPgNAAgUQAAgUgPgOQgOgPgTAAQgVAAgOAPgEgxVge+QgOAOAAAUQAAAUAOANQAOAQAVgBQATABAOgQQAPgNAAgUQAAgUgPgOQgOgPgTAAQgVAAgOAPgEgjSgmyIAAAAIACgJIABgCIAAgCIgBAEQgCAGAAADg");
	this.shape_51.setTransform(319.7,251);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#333333").s().p("EAwRAe8QgOgOAAgTQAAgUAOgPQAOgOAVAAQATAAAOAOQAPAPAAAUQAAATgPAOQgOAPgTAAQgVAAgOgPgEAwZAeTIABgCIAAAAgEAxBAeEIAAgCIAAAAgEgxVAe8QgOgOAAgTQAAgUAOgPQAOgOAVAAQATAAAOAOQAPAPAAAUQAAATgPAOQgOAPgTAAQgVAAgOgPgEgxNAeTIABgCIAAAAgEgwlAeEIAAgCIAAAAgEAwRgd4QgOgOAAgUQAAgUAOgOQAOgOAVAAQATAAAOAOQAPAOAAAUQAAAUgPAOQgOAPgTAAQgVAAgOgPgEAwZgehIABgCIAAgBgEAxBgewIAAgCIAAgBgEgxVgd4QgOgOAAgUQAAgUAOgOQAOgOAVAAQATAAAOAOQAPAOAAAUQAAAUgPAOQgOAPgTAAQgVAAgOgPgEgxNgehIABgCIAAgBgEgwlgewIAAgCIAAgBg");
	this.shape_52.setTransform(319.7,250.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#666360","#414141"],[0,1],2,3.8,-0.3,-0.3).s().p("AgSAGIAAAAIgBACgAAUgHIAAAAIgBACg");
	this.shape_53.setTransform(6.6,443.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#666360","#414141"],[0,1],2,3.8,-0.3,-0.3).s().p("AgSAGIAAAAIgBACgAAUgHIAAAAIgBACg");
	this.shape_54.setTransform(6.6,54.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#666360","#414141"],[0,1],2,3.8,-0.3,-0.3).s().p("AgSAGIAAAAIgBACgAAUgHIAAAAIgBACg");
	this.shape_55.setTransform(631.4,443.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#666360","#414141"],[0,1],2,3.8,-0.3,-0.3).s().p("AgSAGIAAAAIgBACgAAUgHIAAAAIgBACg");
	this.shape_56.setTransform(631.4,54.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,-0.7,640.8,503.4);


// stage content:
(lib.dif07p04 = function(mode,startPosition,loop) {
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
	this.frame_195 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(195).call(this.frame_195).wait(1));

	// prot
	this.prot = new lib.prot();
	this.prot.setTransform(500,275,1,1,0,0,0,500,275);

	this.timeline.addTween(cjs.Tween.get(this.prot).wait(196));

	// t4
	this.instance = new lib.point_3("synched",0);
	this.instance.setTransform(424.3,451.7);
	this.instance.alpha = 0.301;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(154).to({_off:false},0).to({alpha:1},5).wait(37));

	// t3
	this.instance_1 = new lib.point_2("synched",0);
	this.instance_1.setTransform(436,426.5);
	this.instance_1.alpha = 0.301;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(114).to({_off:false},0).to({alpha:1},5).wait(77));

	// hl
	this.instance_2 = new lib.hl3("synched",0);
	this.instance_2.setTransform(237.1,280.1,1,1,0,0,0,57,8);
	this.instance_2.alpha = 0.301;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(114).to({_off:false},0).to({alpha:1},5).wait(77));

	// panel
	this.instance_3 = new lib.CDULeftPanel("synched",0);
	this.instance_3.setTransform(274.8,349.2,1,1,0,0,0,-0.8,3.4);
	this.instance_3.alpha = 0.301;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(109).to({_off:false},0).to({alpha:1},5).wait(82));

	// t2
	this.instance_4 = new lib.point_1("synched",0);
	this.instance_4.setTransform(457.2,401.4);
	this.instance_4.alpha = 0.301;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(54).to({_off:false},0).to({alpha:1},5).wait(137));

	// hl
	this.instance_5 = new lib.hl2("synched",0);
	this.instance_5.setTransform(739.2,303.1,1,1,0,0,0,90,18);
	this.instance_5.alpha = 0.301;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(54).to({_off:false},0).to({alpha:1},5).wait(45).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(86));

	// panel
	this.instance_6 = new lib.pullout("synched",0);
	this.instance_6.setTransform(373.9,277.1,0.3,0.3,0,0,0,75,65);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(7).to({_off:false},0).to({scaleX:1,scaleY:1,x:638,y:203,alpha:1},5).wait(184));

	// hl
	this.instance_7 = new lib.hl("synched",0);
	this.instance_7.setTransform(377.5,276.5,1,1,0,0,0,41.5,34.5);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({alpha:1},5).wait(99).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(86));

	// t1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgvBAIAAh/IBdAAIAAAWIhEAAIAAAdIBAAAIAAATIhAAAIAAAkIBGAAIAAAVg");
	this.shape.setTransform(499.1,377.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgwBAIAAh/IBeAAIAAAWIhEAAIAAAdIA/AAIAAATIg/AAIAAAkIBGAAIAAAVg");
	this.shape_1.setTransform(487.1,377.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAaBAIgTgcIgLgTQgEgEgEgCQgEgBgJAAIgFAAIAAA2IgaAAIAAh/IA3AAQASAAAJADQAKAEAGAJQAFAJAAAMQAAAOgIAKQgJAGgRADQAIAFAGAGQAGAGAJAPIAQAZgAgegJIATAAQARAAAEgBQAFgBACgFQADgEABgFQAAgHgEgEQgEgDgGgCIgRAAIgUAAg");
	this.shape_2.setTransform(475,377.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcA6QgQgJgHgPQgIgQAAgSQAAgTAJgQQAIgPAQgJQANgGAQAAQAYAAAOAKQANAKAEASIgaAEQgCgJgIgFQgHgGgMAAQgPAAgKALQgKALAAAVQAAAVAKAMQALALAOAAQAIAAAJgDQAIgDAGgFIAAgQIgeAAIAAgUIA4AAIAAAxQgIAIgQAGQgPAGgQAAQgSAAgPgIg");
	this.shape_3.setTransform(460.7,377.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAkBAIgMgeIgxAAIgLAeIgbAAIAyh/IAZAAIA0B/gAgRANIAhAAIgQgug");
	this.shape_4.setTransform(447.3,377.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgkA3QgNgMgCgVIAagDQABANAIAGQAGAGALAAQAMAAAHgFQAGgGAAgHQAAgEgDgDQgDgEgHgCIgSgGQgVgFgIgFQgMgLgBgPQAAgKAHgJQAFgIALgFQAKgEAOAAQAXAAAMAKQAMALABASIgaABQgCgKgFgEQgGgFgJAAQgLAAgHAFQgEADAAAFQAAAEAEAEQAGAEAQAEQAUAFAIAFQAJAEAGAHQAFAIAAAMQAAALgGAKQgHAKgLAEQgLAFgRAAQgXAAgNgLg");
	this.shape_5.setTransform(434.8,377.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgMBAIAAh/IAYAAIAAB/g");
	this.shape_6.setTransform(426.4,377.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag1BAIAAh/IAwAAQAOAAAIACQAMAEAIAJQAIAIAEANQAEALAAARQAAAQgEALQgEAPgJAIQgHAHgMAEQgIACgMAAgAgbArIAUAAQAJgBAEgBQAHgCAEgEQAEgDADgIQACgKAAgOQAAgOgCgHQgDgJgFgEQgEgEgIgCIgTgBIgMAAg");
	this.shape_7.setTransform(417.6,377.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgsBAIAAh+IAaAAIAABoIA/AAIAAAWg");
	this.shape_8.setTransform(401.2,377.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgvBAIAAh/IBdAAIAAAWIhDAAIAAAdIA/AAIAAATIg/AAIAAAkIBGAAIAAAVg");
	this.shape_9.setTransform(389.5,377.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgZA9QgJgFgGgGQgGgHgBgIQgDgKAAgWIAAhDIAaAAIAABEQAAAQABAFQACAJAGAEQAGAFAJAAQALAAAGgEQAGgFABgHIABgVIAAhGIAaAAIAABCQAAAXgCAJQgCAKgGAHQgGAHgJADQgKAEgPAAQgQAAgKgEg");
	this.shape_10.setTransform(376.7,377.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgqBAIAAh/IBVAAIAAAWIg7AAIAAAfIAzAAIAAATIgzAAIAAA3g");
	this.shape_11.setTransform(365,377.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(196));

	// fuel
	this.instance_8 = new lib._787_Generic_screencopy("synched",0);
	this.instance_8.setTransform(276.1,205,0.5,0.5,0,0,0,319.7,250.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(104).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(86));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(500,275,1000,550);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;