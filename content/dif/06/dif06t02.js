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


(lib.OtherSystemsbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgYA9QgMgFgHgKQgGgKgBgOIAQgBQACAKAEAGQAEAHAJADQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgEQgEgFgIgDIgVgHQgRgDgHgDQgKgEgEgIQgFgHAAgJQAAgKAGgIQAFgIALgEQALgFAMAAQANAAALAFQALAEAGAJQAGAJAAAMIgQABQgCgMgHgHQgIgGgOAAQgOAAgHAGQgHAGAAAHQAAAIAFADQAFAFASAFQAVAFAIADQALADAGAJQAFAHAAALQAAAKgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape.setTransform(150.9,11.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AAsBAIAAhqIglBqIgOAAIglhrIAABrIgQAAIAAh/IAZAAIAfBaIAEATIAHgVIAfhYIAXAAIAAB/g");
	this.shape_1.setTransform(137.5,11.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AgvBAIAAh/IBcAAIAAAPIhKAAIAAAoIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_2.setTransform(124.2,11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AgHBAIAAhwIgrAAIAAgPIBlAAIAAAPIgrAAIAABwg");
	this.shape_3.setTransform(112.5,11.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AgYA9QgMgFgHgKQgGgKgBgOIAQgBQACAKAEAGQAEAHAJADQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgEQgEgFgIgDIgVgHQgRgDgHgDQgKgEgEgIQgFgHAAgJQAAgKAGgIQAFgIALgEQALgFAMAAQANAAALAFQALAEAGAJQAGAJAAAMIgQABQgCgMgHgHQgIgGgOAAQgOAAgHAGQgHAGAAAHQAAAIAFADQAFAFASAFQAVAFAIADQALADAGAJQAFAHAAALQAAAKgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape_4.setTransform(100.9,11.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AgIBAIAAg2IgyhJIAWAAIAYAnIAMAWQAGgLAIgMIAZgmIATAAIgzBJIAAA2g");
	this.shape_5.setTransform(88.9,11.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AgYA9QgMgFgHgKQgGgKgBgOIAQgBQACAKAEAGQAEAHAJADQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgEQgEgFgIgDIgVgHQgRgDgHgDQgKgEgEgIQgFgHAAgJQAAgKAGgIQAFgIALgEQALgFAMAAQANAAALAFQALAEAGAJQAGAJAAAMIgQABQgCgMgHgHQgIgGgOAAQgOAAgHAGQgHAGAAAHQAAAIAFADQAFAFASAFQAVAFAIADQALADAGAJQAFAHAAALQAAAKgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape_6.setTransform(76.9,11.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AAjBAIgRgbIgMgRIgHgJIgIgDIgJgBIgUAAIAAA5IgRAAIAAh/IA3AAQARAAAJAEQAJADAGAJQAFAJAAAKQAAAOgJAJQgJAIgSACQAGAEAEADQAHAHAHAKIAWAjgAgmgGIAlAAQAJAAAHgCQAGgDAEgFQADgFAAgHQAAgJgGgFQgHgHgOAAIgnAAg");
	this.shape_7.setTransform(60,11.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AgvBAIAAh/IBcAAIAAAPIhKAAIAAAoIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_8.setTransform(47.2,11.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AAhBAIAAg9IhBAAIAAA9IgRAAIAAh/IARAAIAAA1IBBAAIAAg1IARAAIAAB/g");
	this.shape_9.setTransform(34.5,11.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AgHBAIAAhwIgrAAIAAgPIBlAAIAAAPIgrAAIAABwg");
	this.shape_10.setTransform(22.5,11.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AgfA5QgOgIgIgQQgHgPAAgRQAAgeARgSQARgSAaAAQARAAAPAIQAOAJAIAPQAHAPAAASQAAAUgIAPQgIAQgOAHQgPAIgQAAQgRAAgOgJgAgdgmQgNANAAAbQAAAXAMANQANANARAAQATAAAMgNQANgNAAgZQAAgOgGgMQgFgLgKgHQgLgGgMAAQgQAAgNAMg");
	this.shape_11.setTransform(10,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).wait(1));

	// bg
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(2,0,0,3).p("AQeCLIh+AAIgKAAI+zAAIAAjlQAEgzA7AEIf8AAg");
	this.shape_12.setTransform(103.1,11.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AOgCLIgKAAI+yAAIAAjlQADgzA8AEIf6AAIAAEUg");
	this.shape_13.setTransform(103.1,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_13},{t:this.shape_12}]},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.3,-3,212.8,29.9);


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
	this.shape_3.graphics.rf(["#FF9900","#C47500"],[0.651,1],-5.4,-23.4,0,-1.8,-8.2,25.7).s().p("Ah1B2QgxgxAAhFQAAhEAxgxQAxgxBEAAQBFAAAxAxQAxAxAABEQAABFgxAxQgxAxhFAAQhEAAgxgxg");
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
	this.shape_2.graphics.rf(["#919191","#646464"],[0.651,1],-5.4,-23,0,-1.9,-8.2,25.7).s().p("Ah1B2QgxgxAAhFQAAhEAxgxQAxgxBEAAQBFAAAxAxQAxAxAABEQAABFgxAxQgxAxhFAAQhEAAgxgxg");
	this.shape_2.setTransform(20.8,20.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,35.5,35.5);


(lib.LandingGearbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AAjBAIgRgbIgMgRIgHgJIgIgDIgJgBIgUAAIAAA5IgRAAIAAh/IA3AAQARAAAJAEQAJADAGAJQAFAJAAAKQAAAOgJAJQgJAIgSACQAGAEAEADQAHAHAHAKIAWAjgAgmgGIAlAAQAJAAAHgCQAGgDAEgFQADgFAAgHQAAgJgGgFQgHgHgOAAIgnAAg");
	this.shape.setTransform(133,11.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AAoBAIgOgnIg0AAIgPAnIgSAAIAyh/IAQAAIA1B/gAgHgYIgPAjIAqAAIgNgiIgHgbQgDANgEANg");
	this.shape_1.setTransform(120,11.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AgvBAIAAh/IBcAAIAAAPIhKAAIAAAoIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_2.setTransform(108.2,11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AgbA6QgPgIgIgPQgIgQAAgTQAAgQAIgRQAIgQAOgIQAPgIARAAQAOAAAMAFQALAEAGAIQAHAIADANIgPAEQgDgKgFgFQgEgGgIgDQgIgDgKAAQgJAAgJADQgIAEgFAFQgGAHgDAGQgFAMAAANQAAAQAGAMQAGAMAMAFQALAGALAAQALAAAKgEQALgEAFgFIAAgZIgmAAIAAgNIA3AAIAAAuQgNAKgNAFQgNAFgOAAQgRAAgQgIg");
	this.shape_3.setTransform(94.9,11.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AgbA6QgPgIgIgPQgIgQAAgTQAAgQAIgRQAIgQAOgIQAPgIARAAQAOAAAMAFQALAEAGAIQAHAIADANIgPAEQgDgKgFgFQgEgGgIgDQgIgDgKAAQgJAAgJADQgIAEgFAFQgGAHgDAGQgFAMAAANQAAAQAGAMQAGAMAMAFQALAGALAAQALAAAKgEQALgEAFgFIAAgZIgmAAIAAgNIA3AAIAAAuQgNAKgNAFQgNAFgOAAQgRAAgQgIg");
	this.shape_4.setTransform(75.9,11.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AAhBAIhChjIAABjIgQAAIAAh/IARAAIBCBkIAAhkIAQAAIAAB/g");
	this.shape_5.setTransform(62.4,11.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_6.setTransform(53.5,11.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("Ag0BAIAAh/IAtAAQANAAAHACQAMACAHAHQALAJAFANQAFAOAAAQQAAANgEAMQgDALgGAIQgFAHgGAFQgHADgJADQgJACgJAAgAgjAxIAcAAQAKAAAIgCQAHgDAEgFQAGgFAEgLQADgKAAgNQAAgUgHgLQgGgLgKgDQgHgCgNgBIgbAAg");
	this.shape_7.setTransform(44.7,11.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AAhBAIhChjIAABjIgQAAIAAh/IARAAIBCBkIAAhkIAQAAIAAB/g");
	this.shape_8.setTransform(31.4,11.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AAoBAIgPgnIg0AAIgNAnIgTAAIAxh/IARAAIA1B/gAgHgYIgPAjIAqAAIgOgiIgHgbQgCANgEANg");
	this.shape_9.setTransform(19,11.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AgnBAIAAh/IARAAIAABwIA+AAIAAAPg");
	this.shape_10.setTransform(8.3,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).wait(1));

	// bg
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(2,0,0,3).p("AQeCLIh+AAIgKAAI+zAAIAAjlQAEgzA7AEIf8AAg");
	this.shape_11.setTransform(103.1,11.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AOgCLIgKAAI+yAAIAAjlQADgzA8AEIf6AAIAAEUg");
	this.shape_12.setTransform(103.1,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12},{t:this.shape_11}]},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.3,-3,212.8,29.9);


(lib.instruction = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdA6QgNgJgHgQQgGgQgBgRQAAgUAIgOQAIgQAOgHQAOgIAPAAQAUAAANAKQANAJAFATIgQADQgFgNgJgHQgIgGgNgBQgNAAgKAIQgKAHgEAMQgEAMAAAMQAAAPAFANQAFAMAJAFQALAGAKABQAOgBAKgHQAKgJADgQIASAEQgGAVgOALQgOALgUAAQgTAAgNgIg");
	this.shape.setTransform(144.6,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAtBAIAAhqIgmBqIgOAAIglhrIAABrIgQAAIAAh/IAaAAIAeBaIAEASIAHgUIAfhYIAXAAIAAB/g");
	this.shape_1.setTransform(130.5,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgqBAIAAh/IBVAAIAAAPIhEAAIAAApIA7AAIAAANIg7AAIAAA6g");
	this.shape_2.setTransform(117.8,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYBCIAkiDIANAAIgkCDg");
	this.shape_3.setTransform(104.5,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnBAIAAh/IARAAIAABwIA+AAIAAAPg");
	this.shape_4.setTransform(92.3,-0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgvBAIAAh/IBcAAIAAAPIhKAAIAAAoIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_5.setTransform(81.2,-0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcA7QgLgGgFgMQgFgMAAgVIAAhIIARAAIAABIQAAARADAJQADAHAIAEQAHAFALAAQARAAAIgIQAIgJAAgZIAAhIIARAAIAABIQAAAUgEALQgFAMgLAHQgLAHgTAAQgQAAgMgGg");
	this.shape_6.setTransform(68.5,-0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgqBAIAAh/IBVAAIAAAPIhEAAIAAApIA7AAIAAANIg7AAIAAA6g");
	this.shape_7.setTransform(56.8,-0.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdAkQgMgNgBgXQABgVAMgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_8.setTransform(41,1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAWBAIAAg7QAAgKgGgFQgEgGgKAAQgFAAgHAEQgFADgDAGQgDAFAAALIAAAzIgQAAIAAh/IAQAAIAAAvQALgOAPAAQAKABAIAEQAIADADAIQAEAHAAAMIAAA7g");
	this.shape_9.setTransform(31,-0.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgBA9QgFgDgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAHABACQAAABABAAQAAAAAAABQAAAAABABQAAAAABAAIAFACIAHgBIACAOIgMABQgIAAgDgCg");
	this.shape_10.setTransform(23.6,-0.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgBA9QgFgDgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAHABACQAAABABAAQAAAAAAABQAAAAABABQAAAAABAAIAFACIAHgBIACAOIgMABQgIAAgDgCg");
	this.shape_11.setTransform(13.6,-0.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_12.setTransform(6.8,1.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_13.setTransform(-3,1.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_14.setTransform(-10,-0.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_15.setTransform(-17,1.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgYA9QgMgFgHgKQgGgLgBgNIAQgBQACAKAEAGQAEAGAJAEQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgEQgEgFgIgDIgVgHQgRgEgHgBQgKgGgEgHQgFgGAAgKQAAgJAGgJQAFgIALgFQALgEAMAAQANAAALAEQALAFAGAJQAGAJAAAMIgQABQgCgMgHgHQgIgGgOAAQgOAAgHAGQgHAGAAAHQAAAHAFAFQAFAEASAFQAVAEAIAEQALADAGAIQAFAIAAALQAAAKgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape_16.setTransform(-28.1,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bg
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1,0,0,3).p("AQMCNMggXAAAIAAkZMAgXAAAg");
	this.shape_17.setTransform(63.3,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4C4C4C").s().p("AwLCNIAAkZMAgWAAAIAAEZg");
	this.shape_18.setTransform(63.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.3,-15.1,209.2,30.2);


(lib.IceSystembtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC00").s().p("AgvBAIAAh/IBcAAIAAAPIhKAAIAAAoIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape.setTransform(74.2,11.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CC00").s().p("AgdA6QgNgJgHgQQgGgQAAgRQgBgUAIgOQAIgQAOgHQAOgIAPAAQAUAAANAKQANAKAFARIgRAFQgEgOgIgHQgJgGgNAAQgNgBgKAIQgKAHgEAMQgEAMAAAMQAAAPAFANQAEALALAHQAKAFAJAAQAPAAAKgHQAKgJADgQIARAEQgFAVgOALQgOALgUAAQgTAAgNgIg");
	this.shape_1.setTransform(61.6,11.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CC00").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_2.setTransform(52.5,11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CC00").s().p("AgXAIIAAgOIAvAAIAAAOg");
	this.shape_3.setTransform(47,13.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00CC00").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_4.setTransform(41.5,11.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00CC00").s().p("AgHBAIAAhwIgrAAIAAgPIBlAAIAAAPIgrAAIAABwg");
	this.shape_5.setTransform(33.5,11.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00CC00").s().p("AAhBAIhChjIAABjIgQAAIAAh/IARAAIBCBkIAAhkIAQAAIAAB/g");
	this.shape_6.setTransform(21.4,11.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00CC00").s().p("AApBAIgQgnIg0AAIgNAnIgTAAIAxh/IARAAIA1B/gAgIgYIgNAjIApAAIgOgiIgHgbQgCANgFANg");
	this.shape_7.setTransform(9,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[]},1).wait(1));

	// bg
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(2,0,0,3).p("AQeCLIh+AAIgKAAI+zAAIAAjlQAEgzA7AEIf8AAg");
	this.shape_8.setTransform(103.1,11.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AOgCLIgKAAI+yAAIAAjlQADgzA8AEIf6AAIAAEUg");
	this.shape_9.setTransform(103.1,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9},{t:this.shape_8}]},3).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.3,-3,212.8,29.9);


(lib.fuelbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AgdA6QgNgJgGgQQgIgQAAgRQAAgUAIgOQAIgQAOgHQAOgIAPAAQATAAAOAKQANAKAFARIgQAFQgFgOgJgHQgIgGgNAAQgNgBgKAIQgKAHgEAMQgEAMAAAMQAAAPAFANQAFALAJAHQALAFAKAAQAOAAAKgHQAKgJAEgQIARAEQgGAVgOALQgOALgUAAQgTAAgNgIg");
	this.shape.setTransform(95.9,11.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AAtBAIAAhqIgmBqIgOAAIgkhrIAABrIgRAAIAAh/IAaAAIAeBaIAEATIAHgVIAfhYIAXAAIAAB/g");
	this.shape_1.setTransform(81.8,11.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AgqBAIAAh/IBVAAIAAAPIhEAAIAAApIA7AAIAAAMIg7AAIAAA7g");
	this.shape_2.setTransform(69.1,11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AgYBCIAkiDIANAAIgkCDg");
	this.shape_3.setTransform(55.8,11.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AgnBAIAAh/IARAAIAABwIA+AAIAAAPg");
	this.shape_4.setTransform(44.3,11.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9900").s().p("AgvBAIAAh/IBcAAIAAAPIhKAAIAAAoIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_5.setTransform(33.2,11.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9900").s().p("AgcA7QgLgHgFgLQgFgMAAgUIAAhJIARAAIAABJQAAAQADAJQADAHAIAFQAHAEALAAQARAAAIgJQAIgIAAgYIAAhJIARAAIAABJQAAATgEALQgFAMgLAHQgLAHgTAAQgQAAgMgGg");
	this.shape_6.setTransform(20.4,12);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9900").s().p("AgqBAIAAh/IBVAAIAAAPIhEAAIAAApIA7AAIAAAMIg7AAIAAA7g");
	this.shape_7.setTransform(8.8,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(4));

	// bg
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(2,0,0,3).p("AQeCLIh+AAIgKAAI+zAAIAAjlQAEgzA7AEIf8AAg");
	this.shape_8.setTransform(103.1,11.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AOgCLIgKAAI+yAAIAAjlQADgzA8AEIf6AAIAAEUg");
	this.shape_9.setTransform(103.1,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).to({state:[]},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.3,-3,212.8,29.9);


(lib.Flightinstumbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC00").s().p("AgkA3QgNgMgCgVIAZgDQADANAGAGQAIAGAKAAQAMAAAHgFQAGgGAAgHQAAgEgDgDQgDgEgGgCIgTgGQgVgFgJgFQgLgLgBgPQAAgKAHgJQAFgIALgFQAKgEAOAAQAXAAAMAKQAMALABASIgaABQgCgKgFgEQgGgFgJAAQgLAAgHAFQgDADAAAFQAAAEADAEQAGAEAQAEQATAFAJAFQAJAEAGAHQAFAIAAAMQAAALgGAKQgHAKgLAEQgLAFgRAAQgXAAgNgLg");
	this.shape.setTransform(176.4,11.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CC00").s().p("AgMBAIAAhpIgmAAIAAgWIBlAAIAAAWIgnAAIAABpg");
	this.shape_1.setTransform(165,11.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CC00").s().p("AAZBAIgyhSIAABSIgZAAIAAh/IAaAAIAzBUIAAhUIAYAAIAAB/g");
	this.shape_2.setTransform(152.9,11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CC00").s().p("AgwBAIAAh/IBeAAIAAAWIhEAAIAAAcIA/AAIAAAUIg/AAIAAAjIBGAAIAAAWg");
	this.shape_3.setTransform(140.7,11.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00CC00").s().p("AAmBAIAAhjIgaBjIgXAAIgZhjIAABjIgZAAIAAh/IAnAAIAWBWIAXhWIAnAAIAAB/g");
	this.shape_4.setTransform(126.9,11.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00CC00").s().p("AgZA9QgJgFgGgGQgGgHgBgHQgDgMAAgVIAAhDIAaAAIAABEQAAAQABAGQACAHAGAFQAGAFAJAAQALAAAGgFQAGgEABgGIABgXIAAhFIAaAAIAABCQAAAXgCAKQgCAJgGAHQgGAGgJAFQgKADgPAAQgQAAgKgEg");
	this.shape_5.setTransform(112.9,12);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00CC00").s().p("AAaBAIgTgcIgLgTQgEgEgEgBQgEgCgJAAIgFAAIAAA2IgaAAIAAh/IA3AAQASAAAJAEQAKADAGAJQAFAJAAAMQAAAOgIAJQgJAIgRACQAIAFAGAGQAGAGAJAPIAQAZgAgegIIATAAQARAAAEgCQAFgBACgEQADgFABgFQAAgGgEgEQgEgFgGAAIgRgBIgUAAg");
	this.shape_6.setTransform(100.6,11.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00CC00").s().p("AgMBAIAAhpIgmAAIAAgWIBlAAIAAAWIgnAAIAABpg");
	this.shape_7.setTransform(88,11.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00CC00").s().p("AgkA3QgNgMgCgVIAZgDQACANAHAGQAIAGAJAAQANAAAHgFQAGgGAAgHQAAgEgDgDQgDgEgGgCIgTgGQgVgFgJgFQgMgLAAgPQAAgKAHgJQAFgIAKgFQALgEAOAAQAXAAAMAKQANALAAASIgaABQgCgKgFgEQgGgFgJAAQgLAAgHAFQgDADAAAFQAAAEADAEQAFAEASAEQASAFAKAFQAIAEAGAHQAFAIAAAMQAAALgHAKQgFAKgMAEQgLAFgRAAQgXAAgNgLg");
	this.shape_8.setTransform(76.4,11.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00CC00").s().p("AAZBAIgyhSIAABSIgZAAIAAh/IAZAAIAzBUIAAhUIAZAAIAAB/g");
	this.shape_9.setTransform(63.9,11.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00CC00").s().p("AgLBAIAAh/IAYAAIAAB/g");
	this.shape_10.setTransform(55,11.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00CC00").s().p("AgMBAIAAhpIgmAAIAAgWIBlAAIAAAWIgnAAIAABpg");
	this.shape_11.setTransform(42,11.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00CC00").s().p("AAZBAIAAg4IgxAAIAAA4IgaAAIAAh/IAaAAIAAAzIAxAAIAAgzIAaAAIAAB/g");
	this.shape_12.setTransform(29.9,11.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00CC00").s().p("AgcA6QgQgJgHgQQgIgQAAgRQAAgTAJgPQAIgRAQgIQANgGAQAAQAYAAAOAKQANAKAEASIgaAEQgCgJgIgGQgHgFgMAAQgPAAgKALQgKALAAAVQAAAVAKALQALAMAOAAQAIAAAJgDQAIgDAGgFIAAgQIgeAAIAAgUIA4AAIAAAxQgIAIgQAGQgPAGgQAAQgSAAgPgIg");
	this.shape_13.setTransform(16.3,11.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00CC00").s().p("AgMBAIAAh/IAYAAIAAB/g");
	this.shape_14.setTransform(7,11.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00CC00").s().p("AgsA/IAAh+IAaAAIAABpIA/AAIAAAVg");
	this.shape_15.setTransform(-0.6,11.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00CC00").s().p("AgrBAIAAh/IBXAAIAAAWIg8AAIAAAeIAzAAIAAAUIgzAAIAAA3g");
	this.shape_16.setTransform(-11.8,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[]},1).wait(2));

	// bg
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(2,0,0,3).p("ASCiJIAAEUIh+AAIgKAAMgh7AAAIAAjlQAEgzA7AEg");
	this.shape_17.setTransform(93.1,11.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AQECLIgKAAMgh6AAAIAAjlQADgzA8AEMAjCAAAIAAEUg");
	this.shape_18.setTransform(93.1,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_18},{t:this.shape_17}]},2).to({state:[]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.3,-3,212.8,29.9);


(lib.FlightControlbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC00").s().p("AgYA9QgMgFgHgKQgGgKgBgOIAQgBQACAKAEAGQAEAHAJADQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgEQgEgFgIgDIgVgHQgRgDgHgDQgKgEgEgIQgFgHAAgJQAAgKAGgIQAFgIALgEQALgFAMAAQANAAALAFQALAEAGAJQAGAJAAAMIgQABQgCgMgHgHQgIgGgOAAQgOAAgHAGQgHAGAAAHQAAAIAFADQAFAFASAFQAVAFAIADQALADAGAJQAFAHAAALQAAAKgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape.setTransform(165.5,11.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CC00").s().p("AgnBAIAAh/IARAAIAABwIA+AAIAAAPg");
	this.shape_1.setTransform(154.9,11.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CC00").s().p("AgfA5QgOgIgIgQQgHgPAAgRQAAgeARgSQARgSAaAAQARAAAPAIQAOAJAIAPQAHAPAAASQAAAUgIAPQgIAQgOAHQgPAIgQAAQgRAAgOgJgAgdgmQgNANAAAbQAAAXAMANQANANARAAQATAAAMgNQANgNAAgZQAAgOgGgMQgFgLgKgHQgLgGgMAAQgQAAgNAMg");
	this.shape_2.setTransform(142.6,11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CC00").s().p("AAjBAIgRgbIgMgRIgHgJIgIgDIgJgBIgUAAIAAA5IgRAAIAAh/IA3AAQARAAAJAEQAJADAGAJQAFAJAAAKQAAAOgJAJQgJAIgSACQAGAEAEADQAHAHAHAKIAWAjgAgmgGIAlAAQAJAAAHgCQAGgDAEgFQADgFAAgHQAAgJgGgFQgHgHgOAAIgnAAg");
	this.shape_3.setTransform(129.6,11.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00CC00").s().p("AgHBAIAAhwIgrAAIAAgPIBlAAIAAAPIgrAAIAABwg");
	this.shape_4.setTransform(117.1,11.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00CC00").s().p("AAhBAIhChjIAABjIgQAAIAAh/IARAAIBCBkIAAhkIAQAAIAAB/g");
	this.shape_5.setTransform(105,11.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00CC00").s().p("AgfA5QgOgIgIgQQgHgPAAgRQAAgeARgSQARgSAaAAQARAAAPAIQAOAJAIAPQAHAPAAASQAAAUgIAPQgIAQgOAHQgPAIgQAAQgRAAgOgJgAgdgmQgNANAAAbQAAAXAMANQANANARAAQATAAAMgNQANgNAAgZQAAgOgGgMQgFgLgKgHQgLgGgMAAQgQAAgNAMg");
	this.shape_6.setTransform(91.6,11.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00CC00").s().p("AgdA6QgNgJgGgQQgIgQAAgRQABgUAHgOQAIgQAOgHQAOgIAQAAQASAAAOAKQANAKAFARIgQAFQgFgOgJgHQgIgGgNAAQgNgBgKAIQgKAHgEAMQgEAMAAAMQAAAPAFANQAEALAKAHQALAFAKAAQAOAAAKgHQAKgJAEgQIARAEQgGAVgOALQgOALgUAAQgTAAgNgIg");
	this.shape_7.setTransform(78.2,11.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00CC00").s().p("AgHBAIAAhwIgrAAIAAgPIBlAAIAAAPIgrAAIAABwg");
	this.shape_8.setTransform(61.5,11.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00CC00").s().p("AAhBAIAAg9IhBAAIAAA9IgRAAIAAh/IARAAIAAA1IBBAAIAAg1IARAAIAAB/g");
	this.shape_9.setTransform(49.5,11.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00CC00").s().p("AgbA6QgPgIgIgPQgIgQAAgTQAAgQAIgRQAIgQAOgIQAPgIARAAQAOAAAMAFQALAEAGAIQAHAIADANIgPAEQgDgKgFgFQgEgGgIgDQgIgDgKAAQgJAAgJADQgIAEgFAFQgGAHgDAGQgFAMAAANQAAAQAGAMQAGAMAMAFQALAGALAAQALAAAKgEQALgEAFgFIAAgZIgmAAIAAgNIA3AAIAAAuQgNAKgNAFQgNAFgOAAQgRAAgQgIg");
	this.shape_10.setTransform(35.9,11.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00CC00").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_11.setTransform(26.5,11.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00CC00").s().p("AgnBAIAAh/IARAAIAABwIA+AAIAAAPg");
	this.shape_12.setTransform(19.3,11.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00CC00").s().p("AgqBAIAAh/IBVAAIAAAPIhEAAIAAApIA7AAIAAAMIg7AAIAAA7g");
	this.shape_13.setTransform(8.8,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[]},1).wait(1));

	// bg
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(2,0,0,3).p("AQeCLIh+AAIgKAAI+zAAIAAjlQAEgzA7AEIf8AAg");
	this.shape_14.setTransform(103.1,11.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AOgCLIgKAAI+yAAIAAjlQADgzA8AEIf6AAIAAEUg");
	this.shape_15.setTransform(103.1,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_15},{t:this.shape_14}]},3).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.3,-3,212.8,29.9);


(lib.EngApubtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC00").s().p("AgcA7QgLgHgFgLQgFgMAAgUIAAhJIARAAIAABJQAAAQADAJQADAHAIAFQAHAEALAAQARAAAIgJQAIgIAAgYIAAhJIARAAIAABJQAAATgEALQgFAMgLAHQgLAHgTAAQgQAAgMgGg");
	this.shape.setTransform(128.4,12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CC00").s().p("AgwBAIAAh/IAwAAQAMAAAHACQAJABAHAEQAGAFAEAIQADAIAAAKQABAQgKAKQgLALgbAAIggAAIAAA0gAgfgCIAgAAQAQAAAHgFQAHgHAAgLQAAgIgEgGQgEgGgGgCIgQgBIggAAg");
	this.shape_1.setTransform(116.3,11.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CC00").s().p("AApBAIgPgnIg0AAIgPAnIgSAAIAyh/IAQAAIA1B/gAgIgYIgOAjIAqAAIgNgiIgHgbQgDANgFANg");
	this.shape_2.setTransform(104,11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CC00").s().p("AgYBCIAkiDIANAAIgkCDg");
	this.shape_3.setTransform(91.5,11.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00CC00").s().p("AgYA9QgMgFgHgKQgGgKgBgOIAQgBQACAKAEAGQAEAHAJADQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgEQgEgFgIgDIgVgHQgRgDgHgDQgKgEgEgIQgFgHAAgJQAAgKAGgIQAFgIALgEQALgFAMAAQANAAALAFQALAEAGAJQAGAJAAAMIgQABQgCgMgHgHQgIgGgOAAQgOAAgHAGQgHAGAAAHQAAAIAFADQAFAFASAFQAVAFAIADQALADAGAJQAFAHAAALQAAAKgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape_4.setTransform(77.9,11.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00CC00").s().p("AgvBAIAAh/IBcAAIAAAPIhKAAIAAAoIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_5.setTransform(66.2,11.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00CC00").s().p("AAhBAIhChjIAABjIgQAAIAAh/IARAAIBCBkIAAhkIAQAAIAAB/g");
	this.shape_6.setTransform(53.4,11.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00CC00").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_7.setTransform(44.5,11.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00CC00").s().p("AgbA6QgPgIgIgPQgIgQAAgTQAAgQAIgRQAIgQAOgIQAPgIARAAQAOAAAMAFQALAEAGAIQAHAIADANIgPAEQgDgKgFgFQgEgGgIgDQgIgDgKAAQgJAAgJADQgIAEgFAFQgGAHgDAGQgFAMAAANQAAAQAGAMQAGAMAMAFQALAGALAAQALAAAKgEQALgEAFgFIAAgZIgmAAIAAgNIA3AAIAAAuQgNAKgNAFQgNAFgOAAQgRAAgQgIg");
	this.shape_8.setTransform(34.9,11.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00CC00").s().p("AAhBAIhChjIAABjIgQAAIAAh/IARAAIBCBkIAAhkIAQAAIAAB/g");
	this.shape_9.setTransform(21.4,11.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00CC00").s().p("AgvBAIAAh/IBcAAIAAAPIhKAAIAAAoIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_10.setTransform(9.2,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[]},1).wait(1));

	// bg
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(2,0,0,3).p("AQeCLIh+AAIgKAAI+zAAIAAjlQAEgzA7AEIf8AAg");
	this.shape_11.setTransform(101.1,11.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AOgCLIgKAAI+yAAIAAjlQADgzA8AEIf7AAIAAEUg");
	this.shape_12.setTransform(101.1,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12},{t:this.shape_11}]},3).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.3,-3,212.8,29.9);


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
	this.shape_3.graphics.rf(["#00CC00","#008A00"],[0.651,1],-5.5,-23.5,0,-1.8,-8.2,25.7).s().p("Ah1B2QgxgxAAhFQAAhEAxgxQAxgxBEAAQBFAAAxAxQAxAxAABEQAABFgxAxQgxAxhFAAQhEAAgxgxg");
	this.shape_3.setTransform(20.8,20.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(2,0,0,3).p("ACTAAQAAA8gsArQgqAsg9AAQg7AAgsgsQgrgrAAg8QAAg8ArgrQAsgrA7AAQA9AAAqArQAsArAAA8g");
	this.shape_4.setTransform(20.8,20.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#00CC00","#008A00"],[0.651,1],-4.7,-20.7,0,-1.5,-7.2,22.7).s().p("AhnBoQgrgsAAg8QAAg7ArgsQAsgrA7AAQA8AAArArQAsAsAAA7QAAA8gsAsQgrArg8AAQg7AAgsgrg");
	this.shape_5.setTransform(20.8,20.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00FF00").s().p("Ah1B2QgxgxAAhFQAAhEAxgxQAxgxBEAAQBFAAAxAxQAxAxAABEQAABFgxAxQgxAxhFAAQhEAAgxgxg");
	this.shape_6.setTransform(20.8,20.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,35.5,35.5);


(lib.btn3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AwiCLIAAkVMAhEAAAIAAEVg");
	this.shape.setTransform(105.9,13.9);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.btn2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// airplane
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhnAZIAjghIAfAcIBrhsIAiAiIiPCPg");
	this.shape.setTransform(20.3,20.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1));

	// circle
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,0,0,3).p("ACnAAQAABFgyAxQgxAxhEAAQhEAAgxgxQgxgxAAhFQAAhEAxgxQAxgxBEAAQBEAAAxAxQAyAxAABEg");
	this.shape_1.setTransform(20.8,20.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#00CC00","#008A00"],[0.651,1],-5.5,-23.8,0,-1.8,-8.2,25.7).s().p("Ah1B2QgxgxAAhFQAAhEAxgxQAxgxBEAAQBFAAAxAxQAxAxAABEQAABFgxAxQgxAxhFAAQhEAAgxgxg");
	this.shape_2.setTransform(20.8,20.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#00CC00","#008A00"],[0.651,1],-4.8,-21,0,-1.5,-7.2,22.7).s().p("AhnBoQgrgsAAg8QAAg7ArgsQAsgrA7AAQA8AAArArQAsAsAAA7QAAA8gsAsQgrArg8AAQg7AAgsgrg");
	this.shape_3.setTransform(20.8,20.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FF00").s().p("Ah1B2QgxgxAAhFQAAhEAxgxQAxgxBEAAQBFAAAxAxQAxAxAABEQAABFgxAxQgxAxhFAAQhEAAgxgxg");
	this.shape_4.setTransform(20.8,20.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,35.5,35.5);


(lib.B737800CockpitStage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// outline
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,0,3).p("EA8gAq5Mh4/AAAIAAgDMAAAhVuMB4/AAAg");
	this.shape.setTransform(387.4,275.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg8fAq5IAAgDMAAAhVuMB4/AAAMAAABVxg");
	mask.setTransform(387.4,275.1);

	// cockpit
	this.instance = new lib.b737_max_8_cockpit();
	this.instance.setTransform(0.2,-161.7,0.45,0.45);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.4,776.5,551.1);


(lib.AirSystembtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC00").s().p("AgYA9QgMgFgHgKQgGgKgBgOIAQgBQACAKAEAGQAEAHAJADQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgEQgEgFgIgDIgVgHQgRgDgHgDQgKgEgEgIQgFgHAAgJQAAgKAGgIQAFgIALgEQALgFAMAAQANAAALAFQALAEAGAJQAGAJAAAMIgQABQgCgMgHgHQgIgGgOAAQgOAAgHAGQgHAGAAAHQAAAIAFADQAFAFASAFQAVAFAIADQALADAGAJQAFAHAAALQAAAKgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape.setTransform(117.9,11.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CC00").s().p("AAtBAIAAhqIgmBqIgNAAIglhrIAABrIgRAAIAAh/IAaAAIAeBaIAEATIAHgVIAfhYIAXAAIAAB/g");
	this.shape_1.setTransform(104.5,11.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CC00").s().p("AgvBAIAAh/IBcAAIAAAPIhKAAIAAAoIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_2.setTransform(91.2,11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CC00").s().p("AgHBAIAAhwIgrAAIAAgPIBlAAIAAAPIgrAAIAABwg");
	this.shape_3.setTransform(79.5,11.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00CC00").s().p("AgYA9QgMgFgHgKQgGgKgBgOIAQgBQACAKAEAGQAEAHAJADQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgEQgEgFgIgDIgVgHQgRgDgHgDQgKgEgEgIQgFgHAAgJQAAgKAGgIQAFgIALgEQALgFAMAAQANAAALAFQALAEAGAJQAGAJAAAMIgQABQgCgMgHgHQgIgGgOAAQgOAAgHAGQgHAGAAAHQAAAIAFADQAFAFASAFQAVAFAIADQALADAGAJQAFAHAAALQAAAKgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape_4.setTransform(67.9,11.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00CC00").s().p("AgIBAIAAg2IgxhJIAVAAIAZAnIALAWQAGgLAIgMIAZgmIAUAAIg0BJIAAA2g");
	this.shape_5.setTransform(55.9,11.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00CC00").s().p("AgYA9QgMgFgHgKQgGgKgBgOIAQgBQACAKAEAGQAEAHAJADQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgEQgEgFgIgDIgVgHQgRgDgHgDQgKgEgEgIQgFgHAAgJQAAgKAGgIQAFgIALgEQALgFAMAAQANAAALAFQALAEAGAJQAGAJAAAMIgQABQgCgMgHgHQgIgGgOAAQgOAAgHAGQgHAGAAAHQAAAIAFADQAFAFASAFQAVAFAIADQALADAGAJQAFAHAAALQAAAKgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape_6.setTransform(43.9,11.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00CC00").s().p("AAjBAIgRgbIgMgRIgHgJIgIgDIgJgBIgUAAIAAA5IgRAAIAAh/IA3AAQARAAAJAEQAJADAGAJQAFAJAAAKQAAAOgJAJQgJAIgSACQAGAEAEADQAHAHAHAKIAWAjgAgmgGIAlAAQAJAAAHgCQAGgDAEgFQADgFAAgHQAAgJgGgFQgHgHgOAAIgnAAg");
	this.shape_7.setTransform(27,11.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00CC00").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_8.setTransform(17.5,11.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00CC00").s().p("AApBAIgQgnIg0AAIgNAnIgTAAIAxh/IARAAIA1B/gAgIgYIgNAjIApAAIgOgiIgHgbQgCANgFANg");
	this.shape_9.setTransform(9,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[]},1).wait(1));

	// bg
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(2,0,0,3).p("AQeCLIh+AAIgKAAI+zAAIAAjlQAEgzA7AEIf8AAg");
	this.shape_10.setTransform(103.1,11.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AOgCLIgKAAI+yAAIAAjlQADgzA8AEIf6AAIAAEUg");
	this.shape_11.setTransform(103.1,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_11},{t:this.shape_10}]},3).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.3,-3,212.8,29.9);


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
(lib.dif06t02 = function(mode,startPosition,loop) {
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
		this.btn2.removeEventListener("click", this.btn2Handler);
		
		// Describes what will happen when the event handler is triggered.
		this.btn2Handler = function() {
				
			// Sets section as complete.
			parent.pageControllerAPI.setPageCompletion(true);
		    parent.pageControllerAPI.loadPageById("dif07t01"); 
		};
		
		// Tells the player that Movieclip instance named "hotspot1" will have an event handler.
		this.btn2.addEventListener("click", this.btn2Handler);
	}
	this.frame_20 = function() {
		this.stop();
		//parent.pageControllerAPI.completeVision();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(1));

	// prot
	this.prot = new lib.prot();
	this.prot.setTransform(500,275,1,1,0,0,0,500,275);

	this.timeline.addTween(cjs.Tween.get(this.prot).wait(21));

	// next btn
	this.btn2 = new lib.btn3();
	this.btn2.setTransform(894.1,210.9,1,1,0,0,0,105.9,13.9);
	new cjs.ButtonHelper(this.btn2, 0, 1, 2, false, new lib.btn3(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn2).wait(21));

	// btns
	this.instance = new lib.IceSystembtn("single",3);
	this.instance.setTransform(864.2,66.1,1,1,0,0,0,73.6,12.1);

	this.instance_1 = new lib.EngApubtn("single",3);
	this.instance_1.setTransform(866.2,102.4,1,1,0,0,0,73.6,12.1);

	this.instance_2 = new lib.FlightControlbtn("single",3);
	this.instance_2.setTransform(864.2,138.7,1,1,0,0,0,73.6,12.1);

	this.instance_3 = new lib.Flightinstumbtn("single",2);
	this.instance_3.setTransform(864.2,175,1,1,0,0,0,73.6,12.1);

	this.instance_4 = new lib.fuelbtn("single",0);
	this.instance_4.setTransform(864.2,211.3,1,1,0,0,0,73.6,12.1);

	this.instance_5 = new lib.LandingGearbtn("single",4);
	this.instance_5.setTransform(864.2,247.6,1,1,0,0,0,73.6,12.1);

	this.instance_6 = new lib.OtherSystemsbtn("single",4);
	this.instance_6.setTransform(864.2,283.9,1,1,0,0,0,73.6,12.1);

	this.instance_7 = new lib.AirSystembtn("single",3);
	this.instance_7.setTransform(864.2,29.8,1,1,0,0,0,73.6,12.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(21));

	// fi btns
	this.instance_8 = new lib.btn2("single",0);
	this.instance_8.setTransform(293,304.7,1,1,0,0,0,20.8,20.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(21));

	// flight instrum lines
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,0,0,3).p("EAmzgKHMhNWAAAIAAUe");
	this.shape.setTransform(539.8,239.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(21));

	// instructions
	this.instance_9 = new lib.instruction("synched",0);
	this.instance_9.setTransform(833,528.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(21));

	// legend
	this.instance_10 = new lib.legend("synched",0);
	this.instance_10.setTransform(944.9,369.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(21));

	// cockpit
	this.instance_11 = new lib.B737800CockpitStage("single",0);
	this.instance_11.setTransform(429.5,274.8,1,1,0,0,0,429.6,274.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(499,274.5,1002,551.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;