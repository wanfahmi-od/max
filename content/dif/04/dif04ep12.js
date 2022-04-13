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
		{src:"images/en01p10_windshear.png", id:"en01p10_windshear"},
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



(lib.en01p10_windshear = function() {
	this.initialize(img.en01p10_windshear);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,489,384);


(lib.texture = function() {
	this.initialize(img.texture);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.windshear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// outline
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,0,3).p("EgkAgboMBIBAAAMAAAA3RMhIBAAAg");
	this.shape.setTransform(240.5,187);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgkAAbpMAAAg3RMBIAAAAMAAAA3Rg");
	mask.setTransform(240.5,187);

	// Layer 1
	this.instance = new lib.en01p10_windshear();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9,9.1,463,356);


(lib.t0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape.setTransform(153.9,13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_1.setTransform(147.1,12.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AATBAIgdgvIgLAKIAAAlIgQAAIAAh/IAQAAIAABIIAjglIAUAAIgiAhIAmA7g");
	this.shape_2.setTransform(140.6,11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcA3QgLgKgCgQIAQgCQADAOAGAFQAHAGAJAAQAKAAAHgHQAIgJAAgKQAAgMgHgGQgHgIgLAAQgDAAgGACIABgMIADABQAIAAAIgGQAIgGAAgKQAAgJgGgFQgGgHgHABQgJgBgGAHQgHAFgBAMIgQgDQADgQAKgJQAKgIAQgBQAIAAAJAFQAJAFAFAHQAEAJAAAIQAAAIgEAIQgFAGgIAEQALADAGAGQAHAIAAANQAAARgNAMQgMAMgRgBQgRAAgLgKg");
	this.shape_3.setTransform(130.5,12);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AALBAIAAgfIg2AAIAAgOIA4hSIAOAAIAABSIARAAIAAAOIgRAAIAAAfgAgcATIAnAAIAAg5g");
	this.shape_4.setTransform(120.2,11.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgpAcIBBgcIhBgaIAAgQIBTAkIAAANIhTAkg");
	this.shape_5.setTransform(105.3,12);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_6.setTransform(90.4,13.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgLAAgOQAAgOAFgKQAFgMAJgFQAJgHALAAQAHABAHADQAGADAFAHIAAgvIAPAAIAAB/IgPAAIAAgMQgJAOgQAAQgKAAgJgGgAgQgIQgGAIgBARQAAARAIAJQAHAJAJAAQAKAAAHgIQAIgJgBgRQABgSgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_7.setTransform(80.7,12);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_8.setTransform(71,13.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgHBAIAAhcIAOAAIAABcgAgHgsIAAgTIAOAAIAAATg");
	this.shape_9.setTransform(64,11.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AASAuIgPg2IgDgQIgSBGIgQAAIgdhbIARAAIAOA0IAGAUIAFgTIAPg1IAOAAIAOA0IAFASIAFgSIAQg0IAPAAIgcBbg");
	this.shape_10.setTransform(55.5,13.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_11.setTransform(44.4,13.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_12.setTransform(35.4,13.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_13.setTransform(26,13.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAGAAQAHAAAJAFIgGAPQgFgEgGAAQgFAAgDADQgEADgBAGQgDAIAAAKIAAAvg");
	this.shape_14.setTransform(18.7,13.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgdA6QgNgJgHgQQgHgQAAgRQAAgUAIgOQAIgQAOgHQAOgIAQAAQASAAAOAKQANAKAFARIgQAFQgFgOgJgHQgIgGgNAAQgNgBgKAIQgKAHgEAMQgEAMAAAMQAAAPAFANQAFALAJAHQALAFAKAAQAOAAAKgHQAKgJADgQIASAEQgGAVgOALQgOALgUAAQgTAAgNgIg");
	this.shape_15.setTransform(8.6,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160.7,24.1);


(lib.prot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.texture();
	this.instance.setTransform(0,0,100,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1000,550);


(lib.point_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape.setTransform(110.9,13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_1.setTransform(104.1,12.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AATBAIgdgvIgLAKIAAAlIgQAAIAAh/IAQAAIAABIIAjglIAUAAIgiAhIAmA7g");
	this.shape_2.setTransform(97.6,11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgdA2QgMgLAAgRQAAgNAGgIQAHgHAMgDQgKgDgFgHQgFgHAAgJQAAgOAKgKQAKgJAQAAQAQAAAKAKQALAJAAAPQAAAJgFAGQgFAHgJADQAMAEAGAHQAGAIAAAMQAAARgMALQgLALgTAAQgSAAgLgLgAgRAIQgIAHAAALQAAAHAEAGQADAGAGAEQAGADAGAAQALAAAHgHQAIgHAAgLQAAgMgIgHQgHgIgLAAQgKAAgHAIgAgOgtQgGAFAAAJQAAAJAGAGQAGAFAIAAQAJAAAGgFQAFgGAAgJQAAgIgGgGQgGgGgIAAQgIAAgGAGg");
	this.shape_3.setTransform(87.5,11.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgdA2QgLgKgBgQIAQgBQACAMAHAGQAHAGAJAAQAKAAAHgIQAIgJAAgPQAAgNgHgGQgIgIgKABQgIAAgGADQgGADgEAEIgOgCIAMhAIA+AAIAAAPIgxAAIgHAiQALgHALgBQARAAAMANQALAJAAASQAAASgKAMQgMAQgUAAQgRAAgMgKg");
	this.shape_4.setTransform(77.5,12.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgpAcIBBgcIhBgaIAAgQIBTAkIAAANIhTAkg");
	this.shape_5.setTransform(62.3,12);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_6.setTransform(47.4,13.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgLAAgOQAAgOAFgKQAFgMAJgFQAJgHALAAQAHABAHADQAGADAEAHIAAgvIAQAAIAAB/IgPAAIAAgMQgIAOgRAAQgKAAgJgGgAgQgIQgGAIAAARQgBARAIAJQAIAJAIAAQAKAAAHgIQAIgJgBgRQABgSgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_7.setTransform(37.7,12);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_8.setTransform(28,13.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgHBAIAAhcIAOAAIAABcgAgHgsIAAgTIAOAAIAAATg");
	this.shape_9.setTransform(21,11.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAeBAIgbhgIgDgQIgDAQIgbBgIgRAAIgjh/IASAAIAUBTIAFAaIAGgYIAZhVIASAAIATBAQAGAYADAVIAHgcIAUhRIASAAIgkB/g");
	this.shape_10.setTransform(10.5,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,117.7,24.1);


(lib.point = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQARQgIgHAAgKQAAgJAIgHQAHgIAJAAQAKAAAHAIQAIAHAAAJQAAAKgIAHQgHAIgKAAQgJAAgHgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,5,5);


(lib.point_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.point("synched",0);
	this.instance.setTransform(-62.1,1.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcBUQAKgLAMgUQAJgUAGgUQAEgQAAgUQABgdgLgfIAMAAQAOAeAAAgQAAAVgGARQgFASgMASQgGAMgPATg");
	this.shape.setTransform(98.7,25.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgfBBIARhPIgOAAIACgNIAOAAIADgMQACgLADgEQACgEADgDQAFgDAJAAQAGAAALADIgDANQgIgBgFAAQgFAAgCABQgDADgCAIIgCAKIASAAIgCANIgSAAIgPBPg");
	this.shape_1.setTransform(95.8,23.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgfBBIARhPIgOAAIACgNIAOAAIADgMQACgLADgEQACgEADgDQAFgDAJAAQAGAAALADIgDANQgIgBgFAAQgFAAgCABQgDADgCAIIgCAKIASAAIgCANIgSAAIgPBPg");
	this.shape_2.setTransform(90.8,23.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgZAsQgIgFgFgIQgEgJgBgLQABgaAPgRQAOgPATAAQARAAALAKQAKALAAASQgBAOgGAOQgHAOgMAHQgMAHgLAAQgKAAgKgEgAgGgfQgGADgFAHQgFAHgDAJQgCAHAAAHQAAANAHAHQAGAHAJAAQAFAAAEgCQAFgCAEgEIAHgKIAFgMQADgGAAgIQAAgNgGgHQgHgHgJAAQgGAAgGAEg");
	this.shape_3.setTransform(82,25.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgYAsQgJgFgEgJQgFgKABgLQAAgNAGgPQAIgOAKgHQAMgHALAAQARAAAKAKQAJALAAARIgBANIhCAAIgBAEQABAOAFAGQAHAHAIAAQAGAAAIgFQAIgFAFgKIAPABQgDAMgMAKQgNAKgOAAQgLAAgIgEgAgKgcQgJAHgDAOIAyAAIAAgDQAAgMgGgGQgGgHgKAAQgIAAgIAHg");
	this.shape_4.setTransform(72,25.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AANBAIgQgwIgUARIgGAfIgQAAIAbh/IAQAAIgRBOIAsgrIAVAAIgnAhIAYA7g");
	this.shape_5.setTransform(63,23.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgiApQgIgIAAgMQAAgIAEgGQADgGAGgBQAGgEAJgBQAFgCANAAQAPgBAGgCQACgHAAgEQAAgGgEgDQgFgEgLAAQgIAAgGAEQgHAFgDAIIgQgCQAFgNALgIQALgHAOAAQARAAAKAIQAIAGAAAKQAAAIgCAJIgFAWQgDALAAAHIACAMIgQAAIgCgLQgIAHgIADQgFADgJAAQgNAAgIgHgAAQABIgNABQgMACgGACQgFABgDAFQgDAEAAAFQAAAGAFAFQAEAEAJAAQAIAAAFgEQAHgEAEgIQAFgHACgNIgHABg");
	this.shape_6.setTransform(52.8,25.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgSA7QgFgDABgGIACgPIALg0IgMAAIACgMIANAAIAFgXIAQgLIgIAiIARAAIgDAMIgQAAIgIAyIgDAMQAAABABAAQAAABAAAAQAAABAAAAQABABAAAAQABABADAAIAIAAIgCAMIgJACQgJAAgGgFg");
	this.shape_7.setTransform(46.1,23.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AghAvIAThbIAOAAIgEATQAGgLAGgFQAHgFAIAAQAEAAAHADIgGAPQgEgDgFAAQgJAAgIAJQgHAKgFAWIgIAlg");
	this.shape_8.setTransform(35.8,25.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgZAsQgJgFgEgIQgEgJgBgLQABgaAQgRQANgPATAAQARAAALAKQAKALAAASQgBAOgGAOQgHAOgMAHQgMAHgLAAQgKAAgKgEgAgGgfQgGADgFAHQgFAHgDAJQgCAHAAAHQAAANAHAHQAGAHAJAAQAFAAADgCQAGgCAEgEIAHgKIAGgMQACgGAAgIQAAgNgHgHQgGgHgJAAQgGAAgGAEg");
	this.shape_9.setTransform(27,25.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgfBBIARhPIgOAAIACgNIAOAAIADgMQACgLADgEQACgEADgDQAFgDAJAAQAGAAALADIgDANQgIgBgFAAQgFAAgCABQgDADgCAIIgCAKIASAAIgCANIgSAAIgPBPg");
	this.shape_10.setTransform(20.8,23.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgSA7QgFgDABgGIACgPIALg0IgMAAIACgMIANAAIAFgXIAQgLIgIAiIARAAIgDAMIgQAAIgIAyIgDAMQAAABABAAQAAABAAAAQAAABAAAAQABABAAAAQABABADAAIAIAAIgCAMIgJACQgJAAgGgFg");
	this.shape_11.setTransform(10.1,23.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgwBBIAbh/IAPAAIgDANQAJgJAEgDQAGgDAIAAQANAAAJAKQAJAJAAASQAAAPgFAMQgFAKgHAHQgHAIgHADQgIADgHAAQgPAAgJgRIgLAzgAACgwQgDADgFAGQgEAHgDAJQgDAJAAAHQAAAJABAEQADAFAFAEQAFADAEAAQAOAAAIgPQAJgNAAgRQAAgLgGgHQgGgGgIAAQgGAAgFADg");
	this.shape_12.setTransform(1.4,27);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgYAsQgIgFgFgJQgFgKABgLQgBgNAIgPQAGgOAMgHQALgHALAAQARAAAKAKQAJALAAARIgBANIhCAAIAAAEQAAAOAFAGQAHAHAIAAQAHAAAHgFQAIgFAEgKIAQABQgDAMgNAKQgLAKgPAAQgKAAgJgEgAgKgcQgJAHgDAOIAyAAIAAgDQAAgMgGgGQgGgHgKAAQgIAAgIAHg");
	this.shape_13.setTransform(-8,25.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgeAnQgKgKAAgSQABgNAFgPQAHgPALgHQALgIANAAQAPAAAIAIQAJAJAAAOIgPABQgBgJgFgFQgFgFgHAAQgIAAgHAGQgIAGgDAMQgFALAAALQABAMAFAGQAFAGAIAAQAFAAAIgGQAHgGAEgMIAQACQgGARgLAJQgLAIgNAAQgOAAgKgJg");
	this.shape_14.setTransform(-17.2,25.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAPAuIgKgTIgFgPIgbAiIgUAAIApguIgYgtIASAAIAIARIAGARIAbgiIATAAIgnAtIAXAug");
	this.shape_15.setTransform(-26.5,25.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Ag6BAIAbh/IBaAAIgCAPIhLAAIgIAoIBIAAIgDAMIhIAAIgJAtIBPAAIgDAPg");
	this.shape_16.setTransform(-36.5,23.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgOBUQgOgfAAggQAAgUAGgRQAFgSAMgSQAFgMARgTIAMAAQgKALgMAUQgJAUgFATQgFARAAAUQAAAdAKAfg");
	this.shape_17.setTransform(-44.8,25.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgVAMgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAIAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_18.setTransform(86.7,3.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_19.setTransform(79.7,1.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgTA7QgKgGgFgLQgFgLAAgPQAAgNAFgKQAFgLAJgHQAJgFALAAQAHgBAGAEQAHAEAFAFIAAguIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgPgJQgIAJAAAQQAAASAIAJQAHAJAJAAQAKAAAIgJQAHgIAAgSQAAgRgHgJQgIgJgLAAQgIAAgHAJg");
	this.shape_20.setTransform(72.4,1.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgHBAIAAhbIAPAAIAABbgAgHgtIAAgSIAPAAIAAASg");
	this.shape_21.setTransform(65.7,1.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_22.setTransform(53.7,3.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_23.setTransform(46.3,1.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_24.setTransform(36.3,1.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_25.setTransform(29.1,3.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_26.setTransform(19.6,3.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAGAAQAHAAAJAFIgGAPQgFgEgGAAQgFAAgDADQgEADgCAGQgCAIAAAKIAAAvg");
	this.shape_27.setTransform(12.4,3.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAWBAIAAg7QgBgKgEgFQgFgGgKAAQgFAAgGAEQgGADgDAHQgDAEAAALIAAAzIgPAAIAAh/IAPAAIAAAuQAMgMAOAAQALAAAHADQAIAEADAIQAEAHgBAMIAAA7g");
	this.shape_28.setTransform(3.7,1.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_29.setTransform(-3.7,1.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_30.setTransform(-13.7,1.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgGBAIAAhbIAOAAIAABbgAgGgtIAAgSIAOAAIAAASg");
	this.shape_31.setTransform(-18.3,1.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_32.setTransform(-27.8,3.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgGBAIAAhbIANAAIAABbgAgGgtIAAgSIANAAIAAASg");
	this.shape_33.setTransform(-37.3,1.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgnBAIAAh/IARAAIAABwIA+AAIAAAPg");
	this.shape_34.setTransform(-44,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.6,-10.4,169.6,46.2);


(lib.point_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.point("synched",0);
	this.instance.setTransform(-62.1,1.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgbA7QgKgIAAgPIAQACQABAHAEAEQAGAEAKAAQAKAAAFgEQAGgFACgIQABgEAAgQQgKAMgOAAQgTAAgKgOQgKgOAAgRQAAgNAEgMQAFgLAJgGQAJgGAMAAQAQAAAKANIAAgLIAOAAIAABPQAAAVgEAKQgEAJgKAFQgJAFgNAAQgQAAgLgHgAgQgrQgIAIABARQgBASAIAHQAHAIAJAAQALAAAIgIQAHgHAAgSQAAgRgIgIQgIgJgKAAQgIAAgIAJg");
	this.shape.setTransform(144.4,5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_1.setTransform(134.7,3.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGBAIAAhbIAOAAIAABbgAgGgtIAAgSIAOAAIAAASg");
	this.shape_2.setTransform(127.7,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_3.setTransform(123.3,1.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_4.setTransform(118.3,1.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgeAkQgLgNAAgXQAAgVALgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgLAAQgJAAgIAHg");
	this.shape_5.setTransform(110.7,3.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_6.setTransform(101.1,3.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgGBAIAAhbIAOAAIAABbgAgGgtIAAgSIAOAAIAAASg");
	this.shape_7.setTransform(89.7,1.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAYAuIgUgdIgEgIIgXAlIgTAAIAiguIgfgtIATAAIAPAWIAFAKIAGgKIAQgWIASAAIggAsIAjAvg");
	this.shape_8.setTransform(83.2,3.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHADgGQADgGAFgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgGAEQgFAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQALAAAIADQAHACAEAFQADAEABAGIACAPIAAATQAAAWABAGQABAGACAFIgQAAQgDgFAAgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgCADgBAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgPACg");
	this.shape_9.setTransform(73.7,3.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_10.setTransform(66.3,1.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_11.setTransform(53.7,3.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_12.setTransform(46.3,1.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_13.setTransform(36.3,1.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_14.setTransform(29.1,3.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_15.setTransform(19.6,3.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAGAAQAHAAAJAFIgGAPQgFgEgGAAQgFAAgDADQgEADgCAGQgCAIAAAKIAAAvg");
	this.shape_16.setTransform(12.4,3.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAWBAIAAg7QgBgKgEgFQgFgGgKAAQgFAAgGAEQgGADgDAHQgDAEAAALIAAAzIgPAAIAAh/IAPAAIAAAuQAMgMAOAAQALAAAHADQAIAEADAIQAEAHgBAMIAAA7g");
	this.shape_17.setTransform(3.7,1.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_18.setTransform(-3.7,1.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_19.setTransform(-13.7,1.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgGBAIAAhbIAOAAIAABbgAgGgtIAAgSIAOAAIAAASg");
	this.shape_20.setTransform(-18.3,1.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_21.setTransform(-27.8,3.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgGBAIAAhbIANAAIAABbgAgGgtIAAgSIANAAIAAASg");
	this.shape_22.setTransform(-37.3,1.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgnBAIAAh/IARAAIAABwIA+AAIAAAPg");
	this.shape_23.setTransform(-44,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.6,-10.4,216.6,24.1);


// stage content:
(lib.dif04ep12 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{s1:0});

	// timeline functions:
	this.frame_0 = function() {
		/*   Hotspot Template  v1.0 (Jun 2015)
			 Designed for DreamSky Player v4.1+ or Aurora Html5 Player v1.0+
		 	 All rights reserved.
		*/
		// Interactive
		
		var hotspotData = new Object();
		
		this.outputData = "";
		
		this.saveTemplateData  = function ()
		{
			parent.pageControllerAPI.setPrivateData(this.outputData);
		}
		
		this.init  = function(param)
		{
			this.outputData = param;
		}
		
		this.start = function (param) 
		{
			hotspotData = param;	
			
			parent.pageControllerAPI.templateReady();
		}
		
		
		var clickNumber = 0;
	}
	this.frame_243 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(243).call(this.frame_243).wait(1));

	// prot
	this.prot = new lib.prot();
	this.prot.setTransform(500,275,1,1,0,0,0,500,275);

	this.timeline.addTween(cjs.Tween.get(this.prot).wait(244));

	// t3
	this.instance = new lib.point_3("synched",0);
	this.instance.setTransform(664,317.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(221).to({_off:false},0).to({alpha:1},5).wait(18));

	// t2
	this.instance_1 = new lib.point_2("synched",0);
	this.instance_1.setTransform(650.5,294.4,1,1,0,0,0,86.4,12.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(153).to({_off:false},0).to({alpha:1},5).wait(86));

	// t1
	this.instance_2 = new lib.point_1("synched",0);
	this.instance_2.setTransform(664,247.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(110).to({_off:false},0).to({alpha:1},5).wait(129));

	// t0
	this.instance_3 = new lib.t0("synched",0);
	this.instance_3.setTransform(650.5,224.4,1,1,0,0,0,86.4,12.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(71).to({_off:false},0).to({alpha:1},5).wait(168));

	// windshear
	this.instance_4 = new lib.windshear("synched",0);
	this.instance_4.setTransform(304,280,1,1,0,0,0,244.5,192);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(244));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(500,275,1000,550);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;