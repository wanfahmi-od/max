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
	this.shape.graphics.f("#FFFFFF").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape.setTransform(155,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeAkQgLgNAAgXQAAgVALgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgLAAQgJAAgIAHg");
	this.shape_1.setTransform(148,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_2.setTransform(138,1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AghApQgJgIAAgLQABgHADgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAKgDAJAAQANAAAHADQAHACAEAFQADAEABAGIABAPIAAATQAAAWACAGQABAGADAFIgRAAQgDgFAAgGQgJAHgIADQgGADgJAAQgQAAgIgHgAgCAFQgKACgEACQgEABgCAEQgDADAAAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_3.setTransform(128,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgwBAIAAh/IAwAAQAMAAAHACQAJABAHAFQAGAEAEAIQAEAIgBAKQAAAQgKAJQgKAMgcgBIgfAAIAAA1gAgfgBIAfAAQASgBAGgFQAHgHAAgLQAAgIgEgGQgEgGgGgBIgRgCIgfAAg");
	this.shape_4.setTransform(117.4,-0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGBAIAAh/IANAAIAAB/g");
	this.shape_5.setTransform(104,-0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_6.setTransform(97,1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgGgEgFAAQgGAAgCADQgDADgDAGQgCAIAAAKIAAAvg");
	this.shape_7.setTransform(89.8,1.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgBA9QgFgDgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAHABACQAAABABAAQAAAAAAABQAAAAABABQAAAAABAAIAFACIAHgBIACAOIgMABQgIAAgDgCg");
	this.shape_8.setTransform(83.6,-0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_9.setTransform(76,1.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_10.setTransform(66,1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgdA6QgNgJgGgQQgIgQABgRQAAgUAHgOQAIgQAOgHQAOgIAQAAQASAAAOAKQANAJAFATIgRADQgEgNgJgHQgIgGgNgBQgNAAgKAIQgKAHgEAMQgEAMAAAMQAAAPAFANQAEAMAKAFQALAGAJABQAPgBAKgHQAKgJAEgQIARAEQgGAVgOALQgOALgUAAQgTAAgNgIg");
	this.shape_11.setTransform(54.7,-0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgUBUQAYgqAAgqQAAgPgDgRQgBgNgGgMIgOgaIALAAQAPAWAIAWQAHATAAAUQAAAXgJAWQgKAXgLAQg");
	this.shape_12.setTransform(40.3,1.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgYA9QgMgFgHgKQgGgLgBgNIAQgBQACAKAEAGQAEAGAJAEQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgEQgEgFgIgDIgVgHQgRgEgHgBQgKgGgEgHQgFgGAAgKQAAgJAGgJQAFgIALgFQALgEAMAAQANAAALAEQALAFAGAJQAGAJAAAMIgQABQgCgMgHgHQgIgGgOAAQgOAAgHAGQgHAGAAAHQAAAHAFAFQAFAEASAFQAVAEAIAEQALADAGAIQAFAIAAALQAAAKgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape_13.setTransform(31,-0.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_14.setTransform(22.6,-0.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgqBAIAAh/IBVAAIAAAPIhEAAIAAApIA7AAIAAANIg7AAIAAA6g");
	this.shape_15.setTransform(14.9,-0.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgvBAIAAh/IBcAAIAAAPIhKAAIAAAoIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_16.setTransform(3.3,-0.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAJBUQgLgQgJgXQgJgWAAgXQAAgUAHgTQAIgWAOgWIAMAAIgOAaQgGAMgBANQgEARAAAPQAAAqAZAqg");
	this.shape_17.setTransform(-5.7,1.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_18.setTransform(-21.4,1.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgIAAgIAHg");
	this.shape_19.setTransform(-34,1.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgBA9QgFgDgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAHABACQAAABABAAQAAAAAAABQAAAAABABQAAAAABAAIAFACIAHgBIACAOIgMABQgIAAgDgCg");
	this.shape_20.setTransform(-41.4,-0.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_21.setTransform(-48.5,1.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AghA/IgCgPIAJACQAFAAAEgCQADgCACgDIAFgMIABgEIgjhbIARAAIATA2IAFAUIAGgUIAUg2IAQAAIgjBdIgHAVQgEAIgGAEQgFADgIAAQgEAAgGgCg");
	this.shape_22.setTransform(-57.4,3.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgYA9QgMgFgHgKQgGgLgBgNIAQgBQACAKAEAGQAEAGAJAEQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgEQgEgFgIgDIgVgHQgRgEgHgBQgKgGgEgHQgFgGAAgKQAAgJAGgJQAFgIALgFQALgEAMAAQANAAALAEQALAFAGAJQAGAJAAAMIgQABQgCgMgHgHQgIgGgOAAQgOAAgHAGQgHAGAAAHQAAAHAFAFQAFAEASAFQAVAEAIAEQALADAGAIQAFAIAAALQAAAKgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape_23.setTransform(-68,-0.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgBA9QgFgDgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAHABACQAAABABAAQAAAAAAABQAAAAABABQAAAAABAAIAFACIAHgBIACAOIgMABQgIAAgDgCg");
	this.shape_24.setTransform(-81.4,-0.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_25.setTransform(-89,1.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgdAkQgMgNgBgXQABgVAMgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_26.setTransform(-99,1.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_27.setTransform(-111.4,1.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_28.setTransform(-124,1.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAGAAQAHAAAJAFIgFAPQgGgEgGAAQgFAAgDADQgEADgBAGQgDAIAAAKIAAAvg");
	this.shape_29.setTransform(-131.2,1.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgBA9QgFgDgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAHABACQAAABABAAQAAAAAAABQAAAAABABQAAAAABAAIAFACIAHgBIACAOIgMABQgIAAgDgCg");
	this.shape_30.setTransform(-137.4,-0.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_31.setTransform(-144.5,1.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_32.setTransform(-154,1.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_33.setTransform(-161.4,-0.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgBA9QgFgDgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAHABACQAAABABAAQAAAAAAABQAAAAABABQAAAAABAAIAFACIAHgBIACAOIgMABQgIAAgDgCg");
	this.shape_34.setTransform(-171.4,-0.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAVBAIAAg7QAAgKgEgFQgGgGgJAAQgFAAgHAEQgGADgCAGQgDAFAAALIAAAzIgQAAIAAh/IAQAAIAAAvQAMgOAOAAQALABAHAEQAIADADAIQADAHABAMIAAA7g");
	this.shape_35.setTransform(-178.9,-0.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgbA7QgKgIAAgPIAQACQABAHAEAEQAGAEAKAAQAKAAAFgEQAGgFADgIQAAgEAAgQQgKAMgOAAQgSAAgLgOQgKgOAAgRQgBgNAFgMQAFgLAJgGQAJgGAMAAQAPAAALANIAAgLIAPAAIAABPQgBAVgEAKQgFAJgJAFQgJAFgNAAQgQAAgLgHgAgQgrQgIAIAAARQAAASAIAHQAHAIAJAAQALAAAHgIQAIgHAAgSQAAgRgIgIQgHgJgLAAQgJAAgHAJg");
	this.shape_36.setTransform(-189.2,3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgGBAIAAhbIAOAAIAABbgAgGgsIAAgTIAOAAIAAATg");
	this.shape_37.setTransform(-195.9,-0.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgGBAIAAh/IAOAAIAAB/g");
	this.shape_38.setTransform(-200,-0.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgqBAIAAh/IBVAAIAAAPIhEAAIAAApIA7AAIAAANIg7AAIAAA6g");
	this.shape_39.setTransform(-207.1,-0.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_40.setTransform(-222.2,1.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgHBAIAAhbIAOAAIAABbgAgHgsIAAgTIAOAAIAAATg");
	this.shape_41.setTransform(-228.9,-0.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_42.setTransform(-236,1.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_43.setTransform(-246,1.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgFgEgGAAQgGAAgCADQgEADgCAGQgCAIAAAKIAAAvg");
	this.shape_44.setTransform(-253.2,1.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgBA9QgFgDgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAHABACQAAABABAAQAAAAAAABQAAAAABABQAAAAABAAIAFACIAHgBIACAOIgMABQgIAAgDgCg");
	this.shape_45.setTransform(-259.4,-0.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_46.setTransform(-266.2,1.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgNAAQgJAAgHAHg");
	this.shape_47.setTransform(-276,1.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgGBAIAAh/IANAAIAAB/g");
	this.shape_48.setTransform(-283,-0.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgvBAIAAh/IBcAAIAAAPIhKAAIAAAoIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_49.setTransform(-290.7,-0.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_50.setTransform(-307,1.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAWBAIAAg7QAAgKgGgFQgEgGgKAAQgFAAgHAEQgFADgDAGQgDAFAAALIAAAzIgQAAIAAh/IAQAAIAAAvQALgOAPAAQALABAHAEQAIADADAIQAEAHAAAMIAAA7g");
	this.shape_51.setTransform(-316.9,-0.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgBA9QgFgDgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAHABACQAAABABAAQAAAAAAABQAAAAABABQAAAAABAAIAFACIAHgBIACAOIgMABQgIAAgDgCg");
	this.shape_52.setTransform(-324.4,-0.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AASAuIgPg2IgDgQIgRBGIgRAAIgchbIAQAAIAOA0IAHAUIAEgTIAPg1IAOAAIAOA0IAFASIAFgSIAQg0IAPAAIgcBbg");
	this.shape_53.setTransform(-338.5,1.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_54.setTransform(-350,1.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgHBAIAAhbIAPAAIAABbgAgHgsIAAgTIAPAAIAAATg");
	this.shape_55.setTransform(-356.9,-0.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgGAuIgjhbIAQAAIAUA2IAFATIAFgSIAVg3IAQAAIgjBbg");
	this.shape_56.setTransform(-363.4,1.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_57.setTransform(-378,1.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgBA9QgFgDgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAHABACQAAABABAAQAAAAAAABQAAAAABABQAAAAABAAIAFACIAHgBIACAOIgMABQgIAAgDgCg");
	this.shape_58.setTransform(-385.4,-0.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_59.setTransform(-398,1.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_60.setTransform(-408,1.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_61.setTransform(-417.2,1.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgGBAIAAhbIANAAIAABbgAgGgsIAAgTIANAAIAAATg");
	this.shape_62.setTransform(-423.9,-0.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_63.setTransform(-436,1.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgaA7QgLgIAAgPIAQACQABAHAEAEQAGAEAKAAQAJAAAGgEQAGgFACgIQABgEAAgQQgKAMgOAAQgSAAgLgOQgLgOAAgRQABgNAEgMQAFgLAJgGQAJgGAMAAQAPAAALANIAAgLIAOAAIAABPQABAVgFAKQgFAJgJAFQgJAFgNAAQgRAAgJgHgAgQgrQgHAIAAARQAAASAHAHQAHAIAJAAQALAAAIgIQAHgHAAgSQAAgRgIgIQgHgJgLAAQgJAAgHAJg");
	this.shape_64.setTransform(-446.2,3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_65.setTransform(-456,1.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AghApQgJgIAAgLQABgHADgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAKgDAJAAQANAAAHADQAHACAEAFQADAEABAGIABAPIAAATQABAWABAGQABAGACAFIgQAAQgDgFAAgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgDADAAAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_66.setTransform(-466,1.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAGAAQAHAAAJAFIgFAPQgGgEgGAAQgFAAgDADQgEADgBAGQgDAIAAAKIAAAvg");
	this.shape_67.setTransform(-473.2,1.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_68.setTransform(-482,1.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgeAkQgMgNAAgXQAAgVAMgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAIAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_69.setTransform(-497,1.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AAWBAIAAg7QAAgKgGgFQgEgGgKAAQgFAAgHAEQgFADgDAGQgDAFAAALIAAAzIgQAAIAAh/IAQAAIAAAvQALgOAPAAQALABAHAEQAIADADAIQADAHAAAMIAAA7g");
	this.shape_70.setTransform(-506.9,-0.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgBA9QgFgDgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAHABACQAAABABAAQAAAAAAABQAAAAABABQAAAAABAAIAFACIAHgBIACAOIgMABQgIAAgDgCg");
	this.shape_71.setTransform(-514.4,-0.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgBA9QgFgDgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAHABACQAAABABAAQAAAAAAABQAAAAABABQAAAAABAAIAFACIAHgBIACAOIgMABQgIAAgDgCg");
	this.shape_72.setTransform(-524.4,-0.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_73.setTransform(-531.2,1.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAIAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_74.setTransform(-541,1.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_75.setTransform(-548,-0.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgNAAQgJAAgHAHg");
	this.shape_76.setTransform(-555,1.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgYA9QgMgFgHgKQgGgLgBgNIAQgBQACAKAEAGQAEAGAJAEQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgEQgEgFgIgDIgVgHQgRgEgHgBQgKgGgEgHQgFgGAAgKQAAgJAGgJQAFgIALgFQALgEAMAAQANAAALAEQALAFAGAJQAGAJAAAMIgQABQgCgMgHgHQgIgGgOAAQgOAAgHAGQgHAGAAAHQAAAHAFAFQAFAEASAFQAVAEAIAEQALADAGAIQAFAIAAALQAAAKgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape_77.setTransform(-566,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bg
	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(1,0,0,3).p("EA6OACNMh0aAAAIAAkZMB0aAAAg");
	this.shape_78.setTransform(-205.7,0);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#4C4C4C").s().p("Eg6NACNIAAkZMB0aAAAIAAEZg");
	this.shape_79.setTransform(-205.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_79},{t:this.shape_78}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-579.3,-15.1,747.2,30.2);


(lib.glareshieldmax = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PNG
	this.instance = new lib.dif06p01_glareshield_max();
	this.instance.setTransform(-1,-1,1.754,1.754);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,3444,1263.2);


(lib.done = function(mode,startPosition,loop) {
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
	this.shape_3.graphics.rf(["#00CC00","#008A00"],[0.651,1],-5.5,-23.8,0,-1.8,-8.2,25.7).s().p("Ah1B2QgxgxAAhFQAAhEAxgxQAxgxBEAAQBFAAAxAxQAxAxAABEQAABFgxAxQgxAxhFAAQhEAAgxgxg");
	this.shape_3.setTransform(20.8,20.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(2,0,0,3).p("ACTAAQAAA8gsArQgqAsg9AAQg7AAgsgsQgrgrAAg8QAAg8ArgrQAsgrA7AAQA9AAAqArQAsArAAA8g");
	this.shape_4.setTransform(20.8,20.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#00CC00","#008A00"],[0.651,1],-4.8,-21,0,-1.5,-7.2,22.7).s().p("AhnBoQgrgsAAg8QAAg7ArgsQAsgrA7AAQA8AAArArQAsAsAAA7QAAA8gsAsQgrArg8AAQg7AAgsgrg");
	this.shape_5.setTransform(20.8,20.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00FF00").s().p("Ah1B2QgxgxAAhFQAAhEAxgxQAxgxBEAAQBFAAAxAxQAxAxAABEQAABFgxAxQgxAxhFAAQhEAAgxgxg");
	this.shape_6.setTransform(20.8,20.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,35.5,35.5);


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


(lib.btn3 = function(mode,startPosition,loop) {
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

	// Layer 2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFF00").ss(5,1,0,3).p("Aa4kHINcAAIAAIQItcAAgEgoTgEHINcAAIAAIQItcAAg");
	this.shape_7.setTransform(-242.6,54.3);
	this.shape_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,35.5,35.5);


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



(lib.dif06p03 = function(mode,startPosition,loop) {
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
		
		
		
		
		/////////////////////////////////
		//THIS IS THE CODE FOR THE PAGE//
		/////////////////////////////////
		
		var that = this;
		
		
		// Remove old listeners.
		this.btn3.removeEventListener("click", this.btn3Handler);
		
		// Describes what will happen when the event handler is triggered.
		this.btn3Handler = function() {
				
			// Sets section as complete.
			parent.pageControllerAPI.setPageCompletion(true);
		    parent.pageControllerAPI.loadPageById("dif06efp01"); 
		};
		
		// Tells the player that Movieclip instance named "hotspot1" will have an event handler.
		this.btn3.addEventListener("click", this.btn3Handler);
	}
	this.frame_55 = function() {
		this.stop();
		//parent.pageControllerAPI.completeVision();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(55).call(this.frame_55).wait(1));

	// prot
	this.prot = new lib.prot();
	this.prot.setTransform(500,275,1,1,0,0,0,500,275);

	this.timeline.addTween(cjs.Tween.get(this.prot).wait(56));

	// locked
	this.instance = new lib.btnlocked("single",0);
	this.instance.setTransform(500.5,215,1,1,0,0,0,20.8,20.7);

	this.instance_1 = new lib.btnlocked("single",0);
	this.instance_1.setTransform(238.6,475.9,1,1,0,0,0,20.8,20.7);

	this.instance_2 = new lib.btnlocked("single",0);
	this.instance_2.setTransform(570.5,431.9,1,1,0,0,0,20.8,20.7);

	this.instance_3 = new lib.btnlocked("single",0);
	this.instance_3.setTransform(379.5,193,1,1,0,0,0,20.8,20.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(56));

	// green btns
	this.instance_4 = new lib.done("single",0);
	this.instance_4.setTransform(559.5,273,1,1,0,0,0,20.8,20.7);

	this.instance_5 = new lib.done("single",0);
	this.instance_5.setTransform(114.6,273,1,1,0,0,0,20.8,20.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(56));

	// oj btns
	this.btn3 = new lib.btn3();
	this.btn3.setTransform(764.5,119,1,1,0,0,0,20.8,20.7);
	new cjs.ButtonHelper(this.btn3, 0, 1, 2, false, new lib.btn3(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn3).wait(56));

	// instruction
	this.instance_6 = new lib.instruction("synched",0);
	this.instance_6.setTransform(833,528.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(56));

	// legend
	this.instance_7 = new lib.legend("synched",0);
	this.instance_7.setTransform(940.8,37.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(56));

	// glareshield
	this.instance_8 = new lib.glareshieldmax();
	this.instance_8.setTransform(9.7,114.4,0.285,0.285);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(56));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(500,275,1000.9,550);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;