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
		{src:"images/dif06p01_glareshield_max.png", id:"dif06p01_glareshield_max"},
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


(lib.dif06p01_glareshield_max = function() {
	this.initialize(img.dif06p01_glareshield_max);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1963,720);


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


(lib.nextitem = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// airplane
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmBVIgHhnIgzgdQgTgeAkAFIA0AZIBVgtIATAQIhDA6IAyAcIAdgKIAOAJIgaAaIgKAqIgNgIIgFggIg0gcIgNBUg");
	this.shape.setTransform(20.8,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdBAIgFhNIgngXQgOgWAbAEIAoATIBAgjIAOANIgzAsIAmAUIAXgHIAKAGIgUAVIgHAfIgKgGIgEgYIgngWIgKBAg");
	this.shape_1.setTransform(20.8,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[]},1).wait(1));

	// circle
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2,0,0,3).p("ACnAAQAABFgyAxQgxAxhEAAQhEAAgxgxQgxgxAAhFQAAhEAxgxQAxgxBEAAQBEAAAxAxQAyAxAABEg");
	this.shape_2.setTransform(20.8,20.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FF9900","#C47500"],[0.651,1],-5.5,-23.5,0,-1.8,-8.2,25.7).s().p("Ah1B2QgxgxAAhFQAAhEAxgxQAxgxBEAAQBFAAAxAxQAxAxAABEQAABFgxAxQgxAxhFAAQhEAAgxgxg");
	this.shape_3.setTransform(20.8,20.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(2,0,0,3).p("ACTAAQAAA8gsArQgqAsg9AAQg7AAgsgsQgrgrAAg8QAAg8ArgrQAsgrA7AAQA9AAAqArQAsArAAA8g");
	this.shape_4.setTransform(20.8,20.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FF9900","#C47500"],[0.651,1],-4.7,-20.7,0,-1.5,-7.2,22.7).s().p("AhnBoQgrgsAAg8QAAg7ArgsQAsgrA7AAQA8AAArArQAsAsAAA7QAAA8gsAsQgrArg8AAQg7AAgsgrg");
	this.shape_5.setTransform(20.8,20.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00FF00").s().p("Ah1B2QgxgxAAhFQAAhEAxgxQAxgxBEAAQBFAAAxAxQAxAxAABEQAABFgxAxQgxAxhFAAQhEAAgxgxg");
	this.shape_6.setTransform(20.8,20.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,35.5,35.5);


(lib.locked = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// airplane
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AhFBTIAAhQQAAgKAEAAIALAAIAAgTIAAgPQACgTAOgOQARgQAVAAQAWAAARAQQAPAPACAVIgBAMIAAATIAKAAQAFgBgBAIIAABTQABAIgHAAIh6AAIgBAAQgJAAAAgIgAgag9QgIAIgBASIAAAcIBHAAIAAgbQAAgSgJgJQgLgMgQAAQgOAAgMAMg");
	this.shape.setTransform(20.5,19.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// circle
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,0,0,3).p("ACnAAQAABFgyAxQgxAxhEAAQhEAAgxgxQgxgxAAhFQAAhEAxgxQAxgxBEAAQBEAAAxAxQAyAxAABEg");
	this.shape_1.setTransform(20.8,20.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#919191","#646464"],[0.651,1],-5.4,-23.1,0,-1.9,-8.2,25.7).s().p("Ah1B2QgxgxAAhFQAAhEAxgxQAxgxBEAAQBFAAAxAxQAxAxAABEQAABFgxAxQgxAxhFAAQhEAAgxgxg");
	this.shape_2.setTransform(20.8,20.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,35.5,35.5);


(lib.instruction = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgBA9QgFgDgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAHABACQAAABABAAQAAAAAAABQAAAAABABQAAAAABAAIAFACIAHgBIACAOIgMABQgIAAgDgCg");
	this.shape.setTransform(156.6,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHBAIAAhbIAPAAIAABbgAgHgsIAAgTIAPAAIAAATg");
	this.shape_1.setTransform(152,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_2.setTransform(145,1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcA7QgLgGgFgMQgFgMAAgVIAAhIIARAAIAABIQAAARADAJQADAHAIAEQAHAFALAAQARAAAIgIQAIgJAAgZIAAhIIARAAIAABIQAAAUgEALQgFAMgLAHQgLAHgTAAQgQAAgMgGg");
	this.shape_3.setTransform(133.5,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AghA/IgCgPIAJACQAFAAAEgCQADgCACgDIAFgMIABgEIgjhbIARAAIATA2IAFAUIAGgUIAUg2IAQAAIgjBdIgHAVQgEAIgGAEQgFADgIAAQgEAAgGgCg");
	this.shape_4.setTransform(117.6,3.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghApQgJgIABgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQAMAAAHADQAHACAEAFQADAEACAGIABAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgQACg");
	this.shape_5.setTransform(108,1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgGBAIAAh/IAOAAIAAB/g");
	this.shape_6.setTransform(101,-0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgnBBIAAh/IAOAAIAAAMQAGgHAGgEQAGgDAHAAQAMAAAKAGQAIAGAFALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgGAAgHgDQgGgDgFgFIAAAtgAgRgqQgIAJAAASQAAAQAHAJQAIAIAKAAQAJAAAHgJQAIgIAAgRQAAgSgIgJQgHgJgJAAQgKAAgHAKg");
	this.shape_7.setTransform(94.3,2.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_8.setTransform(84.4,1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgGBAIAAhbIAOAAIAABbgAgGgsIAAgTIAOAAIAAATg");
	this.shape_9.setTransform(78,-0.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag0BAIAAh/IAtAAQANAAAHACQAMADAHAGQALAJAFANQAFANAAARQAAANgEAMQgDALgGAIQgFAHgGAEQgHAEgJADQgJACgJAAgAgjAxIAcAAQAKAAAIgDQAHgCAEgFQAGgGAEgJQADgLAAgNQAAgUgHgLQgGgKgKgEQgHgDgNAAIgbAAg");
	this.shape_10.setTransform(69.7,-0.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgTA7QgJgGgGgLQgFgMAAgNQAAgPAFgJQAEgLAKgHQAJgFALgBQAHAAAHAEQAGAEAFAGIAAgvIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgQgIQgGAIgBARQAAASAIAIQAHAJAJAAQAKAAAHgIQAIgJAAgRQAAgSgIgIQgHgKgLABQgIgBgIAKg");
	this.shape_11.setTransform(52.7,-0.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAGAAQAHAAAJAFIgFAPQgGgEgGAAQgFAAgDADQgEADgCAGQgCAIAAAKIAAAvg");
	this.shape_12.setTransform(45.7,1.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAJgDIAAgEQAAgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAEAEACAGIABAPIAAATQAAAWABAGQAAAGADAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgQACg");
	this.shape_13.setTransform(37,1.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_14.setTransform(27,1.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgYA0IAAALIgPAAIAAh/IAQAAIAAAuQAKgNANAAQAJAAAIAEQAHAEAFAGQAFAGADAJQADAHAAAKQAAAYgMANQgMANgQAAQgPAAgJgNgAgRgIQgHAIAAAQQAAAQAEAIQAIAMAMAAQAJAAAHgJQAIgJAAgSQAAgQgHgIQgIgKgJABQgJgBgIAKg");
	this.shape_15.setTransform(17.2,-0.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgBA9QgFgDgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAHABACQAAABABAAQAAAAAAABQAAAAABABQAAAAABAAIAFACIAHgBIACAOIgMABQgIAAgDgCg");
	this.shape_16.setTransform(9.6,-0.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_17.setTransform(1.9,1.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgfA5QgOgIgIgPQgHgQAAgRQAAgeARgSQARgSAaAAQARAAAPAIQAOAJAIAPQAHAQAAARQAAAUgIAPQgIAPgOAIQgPAIgQAAQgRAAgOgJgAgdgmQgNANAAAaQAAAYAMANQANAOARAAQATAAAMgOQANgNAAgZQAAgOgGgMQgFgMgKgGQgLgGgMgBQgQAAgNANg");
	this.shape_18.setTransform(-10,-0.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgeAkQgLgNAAgXQAAgVALgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgLAAQgJAAgIAHg");
	this.shape_19.setTransform(-27,1.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAVBAIAAg7QAAgKgEgFQgGgGgJAAQgFAAgGAEQgHADgCAGQgDAFAAALIAAAzIgPAAIAAh/IAPAAIAAAvQAMgOAOAAQAKABAIAEQAIADADAIQADAHAAAMIAAA7g");
	this.shape_20.setTransform(-37,-0.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgBA9QgFgDgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAHABACQAAABABAAQAAAAAAABQAAAAABABQAAAAABAAIAFACIAHgBIACAOIgMABQgIAAgDgCg");
	this.shape_21.setTransform(-44.4,-0.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AASAuIgPg2IgDgQIgSBGIgQAAIgdhbIARAAIAPA0IAFAUIAFgTIAPg1IAOAAIAOA0IAFASIAFgSIAQg0IAQAAIgeBbg");
	this.shape_22.setTransform(-58.5,1.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQAMAMgBAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_23.setTransform(-70,1.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgGBAIAAhbIANAAIAABbgAgGgsIAAgTIANAAIAAATg");
	this.shape_24.setTransform(-77,-0.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgGAuIgjhbIAQAAIAUA2IAFATIAFgSIAVg3IAQAAIgjBbg");
	this.shape_25.setTransform(-83.5,1.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_26.setTransform(-98,1.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgBA9QgFgDgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAHABACQAAABABAAQAAAAAAABQAAAAABABQAAAAABAAIAFACIAHgBIACAOIgMABQgIAAgDgCg");
	this.shape_27.setTransform(-105.4,-0.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_28.setTransform(-118,1.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_29.setTransform(-128,1.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_30.setTransform(-137.2,1.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgHBAIAAhbIAPAAIAABbgAgHgsIAAgTIAPAAIAAATg");
	this.shape_31.setTransform(-144,-0.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_32.setTransform(-156,1.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgbA7QgKgIAAgPIAQACQABAHAEAEQAGAEAKAAQAKAAAFgEQAGgFADgIQAAgEAAgQQgKAMgOAAQgSAAgLgOQgKgOAAgRQgBgNAFgMQAFgLAJgGQAJgGAMAAQAPAAALANIAAgLIAPAAIAABPQgBAVgEAKQgFAJgJAFQgJAFgNAAQgQAAgLgHgAgQgrQgIAIAAARQAAASAIAHQAHAIAJAAQALAAAHgIQAIgHAAgSQAAgRgIgIQgHgJgLAAQgJAAgHAJg");
	this.shape_33.setTransform(-166.3,3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_34.setTransform(-176,1.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AghApQgIgIgBgLQAAgHADgGQAEgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgFAEQgGAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAKgDAJAAQAMAAAIADQAHACADAFQAFAEABAGIAAAPIAAATQAAAWABAGQABAGAEAFIgRAAQgCgFgBgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgDAFQgJACgEACQgEABgDAEQgBADAAAEQAAAHAEAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQADgFgBgLIAAgFQgIADgQACg");
	this.shape_35.setTransform(-186,1.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgGgEgFAAQgGAAgCADQgDADgDAGQgCAIAAAKIAAAvg");
	this.shape_36.setTransform(-193.3,1.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_37.setTransform(-202,1.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgNAAQgIAAgIAHg");
	this.shape_38.setTransform(-217,1.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAVBAIAAg7QAAgKgEgFQgGgGgJAAQgFAAgGAEQgHADgCAGQgDAFAAALIAAAzIgPAAIAAh/IAPAAIAAAvQAMgOAOAAQAKABAIAEQAIADADAIQADAHAAAMIAAA7g");
	this.shape_39.setTransform(-227,-0.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgBA9QgFgDgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAHABACQAAABABAAQAAAAAAABQAAAAABABQAAAAABAAIAFACIAHgBIACAOIgMABQgIAAgDgCg");
	this.shape_40.setTransform(-234.4,-0.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgBA9QgFgDgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAHABACQAAABABAAQAAAAAAABQAAAAABABQAAAAABAAIAFACIAHgBIACAOIgMABQgIAAgDgCg");
	this.shape_41.setTransform(-244.4,-0.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_42.setTransform(-251.2,1.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgeAkQgLgNAAgXQAAgVALgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgLAAQgJAAgIAHg");
	this.shape_43.setTransform(-261,1.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgGBAIAAh/IAOAAIAAB/g");
	this.shape_44.setTransform(-268,-0.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_45.setTransform(-275,1.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgYA9QgMgFgHgKQgGgLgBgNIAQgBQACAKAEAGQAEAGAJAEQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgEQgEgFgIgDIgVgHQgRgEgHgBQgKgGgEgHQgFgGAAgKQAAgJAGgJQAFgIALgFQALgEAMAAQANAAALAEQALAFAGAJQAGAJAAAMIgQABQgCgMgHgHQgIgGgOAAQgOAAgHAGQgHAGAAAHQAAAHAFAFQAFAEASAFQAVAEAIAEQALADAGAIQAFAIAAALQAAAKgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape_46.setTransform(-286.1,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bg
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(1,0,0,3).p("EAkgACNMhI/AAAIAAkZMBI/AAAg");
	this.shape_47.setTransform(-66.7,0);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#4C4C4C").s().p("EgkfACNIAAkZMBI+AAAIAAEZg");
	this.shape_48.setTransform(-66.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-301.3,-15.1,469.2,30.2);


(lib.hl2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(5,1,0,3).p("EAlBgJ6IaaAAIAAT1I6aAAgEg/agJ6IbMAAIAAT1I7MAAg");
	this.shape.setTransform(406,63.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,817,132);


(lib.hl1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(5,1,0,3).p("AGap6IaaAAIAAT1I6aAAgEggzAJ7IaQAAIAAz1I6QAAg");
	this.shape.setTransform(210,63.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,425,132);


(lib.hl_large = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgpJARsMAAAgjXMBSTAAAMAAAAjXgAaCMEIgIDoIEPAgIgCkXgA9PLsIAGEUIEOgBIgGkigAgRMdIgCCSIBfAAIABiIQgDgNgKABQgqAKgfgMIgDgBQgEAAgBAFgAh3MfIgHCQIBeAAIgBiRQgDgJgEAEQgdAOgmgOIgEgBQgHAAgBAHgAE5MsIALBvIB7gGIgXhsQgcgIgaAAQgeAAgbALgAl8KhQA0B4AZB3IAUgUIgzjwQgMgGgKAAQgVAAgDAbgEgmIAJJQBdBvE1gEIgZi2Qj5AsgnhFgEAiMAKwQDPAEBYhPIhEh5QgqAxjRgag");
	mask.setTransform(245.9,86.3);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(5,0,0,3).p("Ak3IPIgdEiIKfAAIgekiIGQAAIBUFKIYkAAIhzv1QBTi/A5hLQA5hLAbhNQAchMglgfIwpiHIhkAPIlyg3I9lAAIkOAyIh9gPIxBCZQgpARAjBQQAkBPApBTQApBTCLCvIgwPXIWgAAIBDkxg");
	this.shape.setTransform(246.1,85.8);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.2,-2.5,500.7,176.5);


(lib.glareshieldmax = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PNG
	this.instance = new lib.dif06p01_glareshield_max();
	this.instance.setTransform(-1,-1,1.754,1.754);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,3444,1263.2);


(lib.complete = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// airplane
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhnAZIAjghIAfAcIBrhsIAiAiIiPCPg");
	this.shape.setTransform(20.3,20.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhWAVIAdgbIAaAXIBahaIAcAcIh3B3g");
	this.shape_1.setTransform(20.3,20.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[]},1).wait(1));

	// circle
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2,0,0,3).p("ACnAAQAABFgyAxQgxAxhEAAQhEAAgxgxQgxgxAAhFQAAhEAxgxQAxgxBEAAQBEAAAxAxQAyAxAABEg");
	this.shape_2.setTransform(20.8,20.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#00CC00","#008A00"],[0.651,1],-5.5,-23.6,0,-1.8,-8.2,25.7).s().p("Ah1B2QgxgxAAhFQAAhEAxgxQAxgxBEAAQBFAAAxAxQAxAxAABEQAABFgxAxQgxAxhFAAQhEAAgxgxg");
	this.shape_3.setTransform(20.8,20.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(2,0,0,3).p("ACTAAQAAA8gsArQgqAsg9AAQg7AAgsgsQgrgrAAg8QAAg8ArgrQAsgrA7AAQA9AAAqArQAsArAAA8g");
	this.shape_4.setTransform(20.8,20.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#00CC00","#008A00"],[0.651,1],-4.8,-20.8,0,-1.5,-7.2,22.7).s().p("AhnBoQgrgsAAg8QAAg7ArgsQAsgrA7AAQA8AAArArQAsAsAAA7QAAA8gsAsQgrArg8AAQg7AAgsgrg");
	this.shape_5.setTransform(20.8,20.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00FF00").s().p("Ah1B2QgxgxAAhFQAAhEAxgxQAxgxBEAAQBFAAAxAxQAxAxAABEQAABFgxAxQgxAxhFAAQhEAAgxgxg");
	this.shape_6.setTransform(20.8,20.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,35.5,35.5);


(lib.btnlocked = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// airplane
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AhFBTIAAhQQAAgKAEAAIALAAIAAgTIAAgPQACgTAOgOQARgQAVAAQAWAAARAQQAPAPACAVIgBAMIAAATIAKAAQAFgBgBAIIAABTQABAIgHAAIh6AAIgBAAQgJAAAAgIgAgag9QgIAIgBASIAAAcIBHAAIAAgbQAAgSgJgJQgLgMgQAAQgOAAgMAMg");
	this.shape.setTransform(20.5,19.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// circle
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,0,0,3).p("ACnAAQAABFgyAxQgxAxhEAAQhEAAgxgxQgxgxAAhFQAAhEAxgxQAxgxBEAAQBEAAAxAxQAyAxAABEg");
	this.shape_1.setTransform(20.8,20.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#919191","#646464"],[0.651,1],-5.5,-23.6,0,-1.8,-8.2,25.7).s().p("Ah1B2QgxgxAAhFQAAhEAxgxQAxgxBEAAQBFAAAxAxQAxAxAABEQAABFgxAxQgxAxhFAAQhEAAgxgxg");
	this.shape_2.setTransform(20.8,20.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,35.5,35.5);


(lib.btn1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// airplane
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmBVIgHhnIgzgdQgTgeAkAFIA0AZIBVgtIATAQIhDA6IAyAcIAdgKIAOAJIgaAaIgKAqIgNgIIgFggIg0gcIgNBUg");
	this.shape.setTransform(20.8,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdBAIgFhNIgngXQgOgWAbAEIAoATIBAgjIAOANIgzAsIAmAUIAXgHIAKAGIgUAVIgHAfIgKgGIgEgYIgngWIgKBAg");
	this.shape_1.setTransform(20.8,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[]},1).wait(1));

	// circle
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2,0,0,3).p("ACnAAQAABFgyAxQgxAxhEAAQhEAAgxgxQgxgxAAhFQAAhEAxgxQAxgxBEAAQBEAAAxAxQAyAxAABEg");
	this.shape_2.setTransform(20.8,20.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FF9900","#C47500"],[0.651,1],-5.5,-23.8,0,-1.8,-8.2,25.7).s().p("Ah1B2QgxgxAAhFQAAhEAxgxQAxgxBEAAQBFAAAxAxQAxAxAABEQAABFgxAxQgxAxhFAAQhEAAgxgxg");
	this.shape_3.setTransform(20.8,20.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(2,0,0,3).p("ACTAAQAAA8gsArQgqAsg9AAQg7AAgsgsQgrgrAAg8QAAg8ArgrQAsgrA7AAQA9AAAqArQAsArAAA8g");
	this.shape_4.setTransform(20.8,20.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FF9900","#C47500"],[0.651,1],-4.8,-21,0,-1.5,-7.2,22.7).s().p("AhnBoQgrgsAAg8QAAg7ArgsQAsgrA7AAQA8AAArArQAsAsAAA7QAAA8gsAsQgrArg8AAQg7AAgsgrg");
	this.shape_5.setTransform(20.8,20.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00FF00").s().p("Ah1B2QgxgxAAhFQAAhEAxgxQAxgxBEAAQBFAAAxAxQAxAxAABEQAABFgxAxQgxAxhFAAQhEAAgxgxg");
	this.shape_6.setTransform(20.8,20.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_6}]},1).wait(1));

	// hl
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFF00").ss(5,1,0,3).p("EA/SgKJIAAUTI6uAAIAA0TgEgkjgKJIAAUTI6uAAIAA0Tg");
	this.shape_7.setTransform(405.3,64.8);
	this.shape_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,35.5,35.5);


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
	this.instance.setTransform(0.1,-242.1,0.5,0.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.4,861.7,551.1);


(lib.locked_group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.btnlocked("single",0);
	this.instance.setTransform(278.8,112.7,1,1,0,0,0,20.8,20.7);

	this.instance_1 = new lib.btnlocked("single",0);
	this.instance_1.setTransform(16.8,373.7,1,1,0,0,0,20.8,20.7);

	this.instance_2 = new lib.btnlocked("single",0);
	this.instance_2.setTransform(348.8,329.7,1,1,0,0,0,20.8,20.7);

	this.instance_3 = new lib.btnlocked("single",0);
	this.instance_3.setTransform(542.8,16.7,1,1,0,0,0,20.8,20.7);

	this.instance_4 = new lib.btnlocked("single",0);
	this.instance_4.setTransform(157.8,90.7,1,1,0,0,0,20.8,20.7);

	this.instance_5 = new lib.btnlocked("single",0);
	this.instance_5.setTransform(337.8,170.7,1,1,0,0,0,20.8,20.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,561.5,392.4);


(lib.legend = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.locked("single",0);
	this.instance.setTransform(-70.1,69.5,1,1,0,0,0,20.8,20.7);

	this.instance_1 = new lib.complete("single",0);
	this.instance_1.setTransform(-70.1,28.8,1,1,0,0,0,20.8,20.7);

	this.instance_2 = new lib.nextitem("single",0);
	this.instance_2.setTransform(-70.1,-11.8,1,1,0,0,0,20.8,20.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgMAAgOQAAgNAFgKQAFgLAJgHQAJgFALAAQAHgBAHAEQAGAEAFAFIAAguIAPAAIAAB/IgPAAIAAgMQgJAOgQAAQgKAAgJgGgAgQgJQgGAJAAAQQgBATAIAIQAHAJAJAAQAKAAAHgJQAIgIgBgSQABgRgIgJQgHgIgLgBQgIABgIAIg");
	this.shape.setTransform(5.2,69.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeAkQgLgNAAgXQAAgVALgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgLAAQgJAAgIAHg");
	this.shape_1.setTransform(-4.5,70.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AATBAIgdgwIgLALIAAAlIgQAAIAAh/IAQAAIAABHIAjgjIAUAAIgiAhIAmA6g");
	this.shape_2.setTransform(-13.4,69.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_3.setTransform(-22.7,70.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_4.setTransform(-32.5,70.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgnBAIAAh/IARAAIAABwIA+AAIAAAPg");
	this.shape_5.setTransform(-42.2,69.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgTA7QgKgGgFgLQgFgMAAgNQAAgOAFgKQAFgLAJgHQAJgFALgBQAHAAAGAEQAHADAFAHIAAgvIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgPgIQgIAIAAARQAAASAIAIQAHAJAJAAQAKAAAHgIQAIgJAAgRQAAgSgIgIQgHgKgLABQgIgBgHAKg");
	this.shape_6.setTransform(38.2,-11.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_7.setTransform(28.5,-9.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgBA9QgFgDgCgFQgBgEAAgOIAAg0IgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_8.setTransform(21.1,-11.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAGAAQAIAAAIAFIgGAPQgFgEgGAAQgGAAgCADQgDADgDAGQgCAIAAAKIAAAvg");
	this.shape_9.setTransform(16.2,-9.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AghApQgIgIgBgLQAAgHADgGQAEgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgFAEQgGAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAKgDAKAAQALAAAIADQAHACADAFQAFAEABAGIABAPIAAATQgBAWABAGQABAGAEAFIgRAAQgCgFgBgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgDAFQgJACgEACQgEABgDAEQgBADAAAEQAAAHAEAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQADgFgBgLIAAgFQgIADgQACg");
	this.shape_10.setTransform(7.5,-9.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgBA9QgFgDgCgFQgBgEAAgOIAAg0IgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_11.setTransform(0.1,-11.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgYA9QgMgFgHgKQgGgKgBgOIAQgBQACAKAEAGQAEAGAJAEQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgEQgEgFgIgDIgVgHQgRgDgHgDQgKgEgEgIQgFgGAAgKQAAgJAGgJQAFgIALgEQALgFAMAAQANAAALAFQALAEAGAJQAGAJAAAMIgQABQgCgMgHgHQgIgGgOAAQgOAAgHAGQgHAGAAAHQAAAIAFADQAFAFASAFQAVAEAIAEQALADAGAJQAFAHAAALQAAAKgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape_12.setTransform(-8.6,-11.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgBA9QgFgDgCgFQgBgEAAgOIAAg0IgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_13.setTransform(-21.9,-11.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_14.setTransform(-29.5,-9.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAhBAIhChjIAABjIgQAAIAAh/IARAAIBCBkIAAhkIAQAAIAAB/g");
	this.shape_15.setTransform(-41.1,-11.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgMAAgNQAAgPAFgJQAEgLAKgHQAJgFALgBQAHAAAGAEQAHAEAEAGIAAgvIAQAAIAAB/IgPAAIAAgMQgIAOgRAAQgKAAgJgGgAgPgIQgIAIABARQAAASAHAIQAIAJAIAAQAKAAAIgIQAGgJAAgRQAAgSgGgIQgIgKgLABQgJgBgGAKg");
	this.shape_16.setTransform(34.2,30.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQAMAMgBAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_17.setTransform(24.5,31.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgBA9QgFgDgCgFQgBgEAAgOIAAg0IgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAHABACQAAABABAAQAAAAAAABQAAAAABABQAAAAABAAIAFACIAHgBIACAOIgMABQgIAAgDgCg");
	this.shape_18.setTransform(17.1,30.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgdAkQgMgNgBgXQABgVAMgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAIAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_19.setTransform(9.5,31.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_20.setTransform(2.5,30.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgnBBIAAh/IAPAAIAAAMQAEgHAHgEQAGgDAIAAQAMAAAIAGQAKAGAEALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgGAAgHgDQgHgDgEgFIAAAtgAgRgqQgIAJAAASQAAAQAIAJQAHAIAKAAQAIAAAJgJQAGgIAAgRQAAgSgGgJQgIgJgJAAQgKAAgHAKg");
	this.shape_21.setTransform(-4.2,33.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_22.setTransform(-17,31.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_23.setTransform(-29.5,31.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgdA6QgNgJgHgQQgHgQAAgRQAAgUAIgOQAIgQAOgHQAOgIAPAAQATAAAOAKQANAJAFATIgQADQgFgNgJgHQgIgGgNgBQgNAAgKAIQgKAHgEAMQgEAMAAAMQAAAPAFAMQAFANAJAFQALAGAKABQAOgBAKgHQAKgJADgQIASAEQgGAVgOALQgOALgUAAQgTAAgNgIg");
	this.shape_24.setTransform(-40.9,30.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(1,0,0,3).p("ALeKMI27AAIAA0XIW7AAg");
	this.shape_25.setTransform(-18.3,31.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.498)").s().p("ArdKMIAA0XIW7AAIAAUXg");
	this.shape_26.setTransform(-18.3,31.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.8,-35,149,132.5);


// stage content:
(lib.dif06p01 = function(mode,startPosition,loop) {
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
	this.frame_100 = function() {
		/////////////////////////////////
		//THIS IS THE CODE FOR THE PAGE//
		/////////////////////////////////
		
		var that = this;
		
		
		// Remove old listeners.
		this.btn1.removeEventListener("click", this.btn1Handler);
		
		// Describes what will happen when the event handler is triggered.
		this.btn1Handler = function() {
				
			// Sets section as complete.
			parent.pageControllerAPI.setPageCompletion(true);
		    parent.pageControllerAPI.loadPageById("dif06obp01"); 
		};
		
		// Tells the player that Movieclip instance named "hotspot1" will have an event handler.
		this.btn1.addEventListener("click", this.btn1Handler);
	}
	this.frame_126 = function() {
		this.stop();
		//parent.pageControllerAPI.completeVision();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(100).call(this.frame_100).wait(26).call(this.frame_126).wait(1));

	// prot
	this.prot = new lib.prot();
	this.prot.setTransform(500,275,1,1,0,0,0,500,275);

	this.timeline.addTween(cjs.Tween.get(this.prot).wait(127));

	// locked
	this.instance = new lib.locked_group();
	this.instance.setTransform(501.5,297.5,1,1,0,0,0,279.7,195.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(102).to({_off:false},0).to({alpha:1},5).wait(20));

	// oj btns
	this.btn1 = new lib.btn1();
	this.btn1.setTransform(114.6,273,1,1,0,0,0,20.8,20.7);
	this.btn1.alpha = 0;
	this.btn1._off = true;
	new cjs.ButtonHelper(this.btn1, 0, 1, 2, false, new lib.btn1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn1).wait(102).to({_off:false},0).to({alpha:1},5).wait(20));

	// instruction
	this.instance_1 = new lib.instruction("synched",0);
	this.instance_1.setTransform(833,528.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(102).to({_off:false},0).to({alpha:1},5).wait(20));

	// legend
	this.instance_2 = new lib.legend("synched",0);
	this.instance_2.setTransform(940.8,37.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(102).to({_off:false},0).to({alpha:1},5).wait(20));

	// hl2
	this.instance_3 = new lib.hl2("synched",0);
	this.instance_3.setTransform(497.9,317.5,1,1,0,0,0,405.9,63.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(84).to({_off:false},0).to({alpha:1},5).wait(8).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(24));

	// hl1
	this.instance_4 = new lib.hl1("synched",0);
	this.instance_4.setTransform(499,317.5,1,1,0,0,0,210,63.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(70).to({_off:false},0).to({alpha:1},5).wait(9).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(37));

	// Layer 1
	this.instance_5 = new lib.glareshieldmax();
	this.instance_5.setTransform(9.7,114.4,0.285,0.285);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(13).to({_off:false},0).to({alpha:1},5).wait(109));

	// hl
	this.instance_6 = new lib.hl_large("synched",0);
	this.instance_6.setTransform(505.4,284.8,1,1,0,0,0,246.8,85.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},0).to({alpha:1},5).wait(4).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(108));

	// cockpit
	this.instance_7 = new lib.B737800CockpitStage("single",0);
	this.instance_7.setTransform(500.1,274.8,1,1,0,0,0,429.6,274.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(13).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(108));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(500,274.5,1000,551.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;