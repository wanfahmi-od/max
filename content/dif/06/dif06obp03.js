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
		{src:"images/odu01p02_pfd.png", id:"odu01p02_pfd"},
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



(lib.odu01p02_pfd = function() {
	this.initialize(img.odu01p02_pfd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1342,1331);


(lib.texture = function() {
	this.initialize(img.texture);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.textboxLside = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape.setTransform(-16.7,2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_1.setTransform(-29.2,2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_2.setTransform(-38.7,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgHBAIAAhwIgrAAIAAgPIBlAAIAAAPIgrAAIAABwg");
	this.shape_3.setTransform(-45.5,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgBA8QgFgCgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABABIAFAAIAHAAIACAOIgMABQgIAAgDgDg");
	this.shape_4.setTransform(-58.1,0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgGQgGgFgJAAQgFAAgGAEQgGAEgDAGQgDAEAAALIAAAzIgPAAIAAh/IAPAAIAAAuQAMgNAOAAQALAAAHAEQAIAFADAHQAEAHgBAMIAAA7g");
	this.shape_5.setTransform(-65.7,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgbA7QgKgIAAgPIAQACQABAHAEAEQAGAEAKAAQAKAAAFgEQAGgFACgIQABgEAAgQQgKAMgOAAQgTAAgKgOQgLgOAAgRQABgNAEgMQAFgLAJgGQAKgGALAAQAQAAAKANIAAgLIAOAAIAABPQAAAVgEAKQgFAJgJAFQgKAFgMAAQgRAAgKgHgAgQgrQgHAIAAARQAAASAHAHQAHAIAJAAQALAAAIgIQAHgHAAgSQAAgRgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_6.setTransform(-76,4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgHBAIAAhcIAOAAIAABcgAgHgtIAAgSIAOAAIAAASg");
	this.shape_7.setTransform(-82.7,0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_8.setTransform(-86.7,0.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgqBAIAAh/IBVAAIAAAPIhEAAIAAAoIA7AAIAAANIg7AAIAAA7g");
	this.shape_9.setTransform(-93.9,0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,0,0,3).p("AhhiYIP5AAIAAExIv5AAIAAiKIqYAAIAAA1IiXhIICXhOIAAAxIKYAAg");
	this.shape_10.setTransform(-97.1,-0.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhlCYIAAiJIqXAAIAAA0IiXhHICXhOIAAAxIKXAAIAAh3IP5AAIAAEwg");
	this.shape_11.setTransform(-96.8,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-189.6,-16.8,193.6,32.6);


(lib.prot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.texture();
	this.instance.setTransform(0,0,100,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1000,550);


(lib.hl2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(5,0,0,3).p("ApWj3IStAAIAAHvIytAAg");
	this.shape.setTransform(-58.1,22.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.5,-4.5,124.8,54.6);


(lib.hl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(5,0,0,3).p("AnNmPIObAAIAAMfIubAAg");
	this.shape.setTransform(46.3,40);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,97.5,85);


(lib.B787SynopticAuxDisplayLcopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsAHQAAhaAyAAQANAAALAJQALAJAAANIgRAAQAAgOgSAAQgPAAgLAYQgHASAAAVIAAAGQAPgTASAAQATAAAKAQQAJAMAAAUQAAAUgKAPQgLARgUAAQguAAgBhNgAgSANQgEALAAARQgBAKAJAIQAIAIAJAAQALAAAIgMQAFgLAAgNQAAgMgGgKQgHgJgMAAQgMAAgIANg");
	this.shape.setTransform(135.3,213.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAIBPIAAgPIAbAAIAAAPgAgGBPIAAgPIAOAAIAAAPgAghBPIAAgPIAbAAIAAAPgAgGBAIAAh5IgbAMIAAgSIAbgPIAOAAIAACOgAgGBAg");
	this.shape_1.setTransform(124,213.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAaBPQgJgYgGgNQgJgQgNgPIgQAAIAABEIgTAAIAAidIAqAAQAQAAALAMQAKALAAATQAAAfgbAMQANAIAMAaIAQAmgAgbgEIAQAAQAMAAAIgIQAGgJAAgOQAAgbgYAAIgSAAg");
	this.shape_2.setTransform(105,213.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAoBPIgMgsIg3AAIgPAsIgRAAIA1idIAQAAIAyCdgAgWATIAtAAIgXhFg");
	this.shape_3.setTransform(93.6,213.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAlBPIAAh2IgdBeIgMAAIgghaIAAByIgSAAIAAidIAUAAIAkBsIAhhsIAUAAIAACdg");
	this.shape_4.setTransform(82.2,213.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgqBSIAAgRQAAgUALgQQAGgLAQgPIAVgUQAKgNAAgLQAAgKgHgHQgHgFgJgBQgUABAAARIgRAAIAAgCQAAgOAMgKQALgJAPABQARAAALAKQAMAKAAATQAAATgRASIgeAbQgRASAAAWIBDAAIAAATg");
	this.shape_5.setTransform(63.3,213.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgqBSIAAgRQAAgUAKgQQAHgLARgPIATgUQALgNAAgLQAAgKgHgHQgHgFgJgBQgUABgBARIgRAAIAAgCQAAgOANgKQALgJAPABQARAAALAKQAMAKAAATQAAATgRASIgdAbQgSASAAAWIBDAAIAAATg");
	this.shape_6.setTransform(51.9,213.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgbBPIAAgIQABgfASgmQAHgOAdgwIhIAAIAAgSIBZAAIAAASIgJAOQgsBKAAAzg");
	this.shape_7.setTransform(230.9,213.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgmA1QgKgWAAgfQAAgdAKgXQANgfAZAAQAbAAAMAfQAJAXAAAdQAAAegJAXQgNAfgaAAQgZAAgNgfgAgZgoQgFARAAAXQAAAYAFARQAJAaAQAAQARAAAJgaQAFgSAAgXQAAgWgFgSQgJgagRAAQgQAAgJAag");
	this.shape_8.setTransform(219.5,213.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgKA5IAAgcIAVAAIAAAcgAgKgcIAAgcIAVAAIAAAcg");
	this.shape_9.setTransform(208.1,215.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgmA1QgKgWAAgfQAAgdAKgXQANgfAZAAQAbAAAMAfQAJAXAAAdQAAAegJAXQgNAfgaAAQgZAAgNgfgAgYgoQgGARAAAXQAAAYAGARQAHAaARAAQASAAAHgaQAGgSAAgXQAAgWgGgSQgHgagSAAQgRAAgHAag");
	this.shape_10.setTransform(196.7,213.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgmA1QgKgWAAgfQAAgdAKgXQANgfAZAAQAbAAAMAfQAJAXAAAdQAAAegJAXQgNAfgaAAQgZAAgNgfgAgZgoQgFARAAAXQAAAYAFARQAJAaAQAAQARAAAJgaQAFgSAAgXQAAgWgFgSQgJgagRAAQgQAAgJAag");
	this.shape_11.setTransform(185.3,213.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00CCFF").s().p("AggA7IAAh1IA5AAIAAAOIgsAAIAAAkIAnAAIAAALIgnAAIAAAqIA0AAIAAAOg");
	this.shape_12.setTransform(253.8,192.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00CCFF").s().p("AAbA7IAAhYIgVBGIgJAAIgYhDIAABVIgNAAIAAh1IAPAAIAaBQIAZhQIAPAAIAAB1g");
	this.shape_13.setTransform(245.5,192.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00CCFF").s().p("AgUA7IAAgNIAPAAIAAhbIgPAAIAAgNIApAAIAAANIgPAAIAABbIAPAAIAAANg");
	this.shape_14.setTransform(237.2,192.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00CCFF").s().p("AgFA7IAAhpIgiAAIAAgMIBPAAIAAAMIghAAIAABpg");
	this.shape_15.setTransform(228.9,192.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00CCFF").s().p("AgmA7IAAh1IAcAAQAaAAAMAQQALAOAAAcQAAA7gvAAgAgYAtIAPAAQATAAAHgMQAHgLAAgVQAAgWgGgKQgIgPgTAAIgPAAg");
	this.shape_16.setTransform(212.3,192.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00CCFF").s().p("AghA7IAAh1IA6AAIAAAOIgrAAIAAAkIAlAAIAAALIglAAIAAAqIA0AAIAAAOg");
	this.shape_17.setTransform(204,192.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00CCFF").s().p("AghAgIAOAAQAAAKAFAFQAGADAIAAQAJAAAFgGQAFgGAAgJQABgMgRgIIgNgJQgKgDgEgHQgGgIAAgLQAAgQAJgIQAKgJANAAQALAAAHAHQAIAHAAAMIgOAAQAAgGgFgEQgFgEgEAAQgHAAgEAGQgFAGAAAHQAAANAQAJIAOAIQAJADAFAHQAGAIAAALQAAAQgJAJQgKAKgPAAQghAAAAgfg");
	this.shape_18.setTransform(195.7,192.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00CCFF").s().p("AghA7IAAh1IAhAAQAQAAAIAHQAKAIAAASQAAAXgRAIQgMAGgYAAIAAAvgAgTAAIANAAQAZAAABgZQgBgVgTAAIgTAAg");
	this.shape_19.setTransform(187.4,192.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00CCFF").s().p("AAeA7IgJggIgqAAIgKAgIgNAAIAph1IALAAIAlB1gAgQAOIAhAAIgRgzg");
	this.shape_20.setTransform(179.1,192.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00CCFF").s().p("AghA7IAAh1IAOAAIAABnIA0AAIAAAOg");
	this.shape_21.setTransform(170.8,192.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00CCFF").s().p("AghA7IAAh1IA6AAIAAAOIgrAAIAAAkIAlAAIAAALIglAAIAAAqIA0AAIAAAOg");
	this.shape_22.setTransform(162.5,192.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00CCFF").s().p("AggA7IAAh1IA5AAIAAAOIgsAAIAAAkIAnAAIAAALIgnAAIAAAqIA0AAIAAAOg");
	this.shape_23.setTransform(106.1,192.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00CCFF").s().p("AgFA7IAAhpIgiAAIAAgMIBPAAIAAAMIghAAIAABpg");
	this.shape_24.setTransform(97.8,192.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00CCFF").s().p("AAeA7IgJggIgqAAIgKAgIgNAAIAoh1IAMAAIAlB1gAgQAOIAhAAIgRgzg");
	this.shape_25.setTransform(89.5,192.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00CCFF").s().p("AgmA7IAAh1IAcAAQAbAAALAQQAKAOAAAcQAAA7gtAAgAgYAtIAQAAQARAAAJgMQAGgLAAgVQAAgWgGgKQgIgPgTAAIgPAAg");
	this.shape_26.setTransform(81.2,192.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00CCFF").s().p("AggA7IAAh1IA5AAIAAAOIgsAAIAAAkIAnAAIAAALIgnAAIAAAqIA0AAIAAAOg");
	this.shape_27.setTransform(2.7,192.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00CCFF").s().p("AAbA7IAAhYIgVBGIgJAAIgYhDIAABVIgNAAIAAh1IAPAAIAaBQIAZhQIAPAAIAAB1g");
	this.shape_28.setTransform(-5.6,192.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00CCFF").s().p("AgUA7IAAgNIAPAAIAAhbIgPAAIAAgNIApAAIAAANIgPAAIAABbIAPAAIAAANg");
	this.shape_29.setTransform(-13.9,192.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00CCFF").s().p("AgFA7IAAhpIgiAAIAAgMIBPAAIAAAMIghAAIAABpg");
	this.shape_30.setTransform(-22.2,192.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00CCFF").s().p("AgcAqQgJgRAAgZQAAgYAJgRQAMgVAVAAQAOAAAJAIQAKAIAAAOIgOAAQAAgIgFgFQgFgEgIAAQgPAAgIASQgFANAAASQAAAUAFAMQAHASAQAAQASAAAAgRIAOAAIAAABQAAANgLAIQgIAIgOAAQgVAAgMgVg");
	this.shape_31.setTransform(-38.8,192.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#00CCFF").s().p("AgFA7IAAhpIgiAAIAAgMIBPAAIAAAMIghAAIAABpg");
	this.shape_32.setTransform(-47.1,192.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#00CCFF").s().p("AgdAxQgIgKAAgWIAAhNIANAAIAABLQABAQAEAHQAGAKAOAAQAPAAAFgMQAFgKAAgRIAAhFIAMAAIAABJQAAAwgmAAQgUAAgJgMg");
	this.shape_33.setTransform(-55.4,193);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgpA5IAAgRIA7hPIg6AAIAAgRIBQAAIAAARIg6BPIA8AAIAAARg");
	this.shape_34.setTransform(19.2,215.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgeBMQgLgJAAgSIARAAQABASAWAAQAMAAAHgJQAGgJAAgPQAAgTgOgJQgKgGgWAAIAAgPQAUAAAIgFQANgHAAgRQAAgKgHgGQgGgGgIAAQgJAAgGAEQgHAFABAJIgRAAIAAgBQAAgRAMgJQALgIAQAAQAPAAAMAJQAKAKABARQAAAbgaAMQAfAJAAAgQAAAWgMAOQgNAPgTAAQgSAAgKgIg");
	this.shape_35.setTransform(7.8,213.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgqBSIAAgRQAAgUAKgQQAIgLAQgPIATgUQALgNAAgLQAAgKgHgHQgHgFgIgBQgVABgBARIgQAAIAAgCQAAgOAMgKQALgJAPABQARAAALAKQAMAKAAATQAAATgRASIgeAbQgRASAAAWIBDAAIAAATg");
	this.shape_36.setTransform(-3.6,213.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgKA5IAAgcIAVAAIAAAcgAgKgcIAAgcIAVAAIAAAcg");
	this.shape_37.setTransform(-15,215.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgaBPIAAgIQAAgfASgmQAIgOAcgwIhIAAIAAgSIBZAAIAAASIgJAOQgsBKAAAzg");
	this.shape_38.setTransform(-26.4,213.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAIBPIAAgPIAaAAIAAAPgAgHBPIAAgPIAPAAIAAAPgAgiBPIAAgPIAbAAIAAAPgAgHBAIAAh5IgaAMIAAgSIAbgPIAOAAIAACOgAgHBAg");
	this.shape_39.setTransform(-37.7,213.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgKA5IAAgcIAVAAIAAAcgAgKgcIAAgcIAVAAIAAAcg");
	this.shape_40.setTransform(-49.2,215.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgqBSIAAgRQAAgUAKgQQAHgLARgPIATgUQALgNAAgLQAAgKgHgHQgHgFgJgBQgUABgBARIgRAAIAAgCQAAgOANgKQALgJAPABQARAAALAKQAMAKAAATQAAATgRASIgdAbQgSASAAAWIBDAAIAAATg");
	this.shape_41.setTransform(-60.6,213.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgqBSIAAgRQAAgUAKgQQAIgLAQgPIATgUQALgNAAgLQAAgKgHgHQgHgFgIgBQgVABgBARIgQAAIAAgCQAAgOAMgKQALgJAPABQARAAALAKQAMAKAAATQAAATgRASIgeAbQgRASAAAWIBDAAIAAATg");
	this.shape_42.setTransform(-72,213.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAoBPIgMgsIg4AAIgOAsIgRAAIA1idIAQAAIAyCdgAgWATIAtAAIgXhFg");
	this.shape_43.setTransform(68.6,158.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AguBPIAAidIAkAAQAVAAALAGQAPAKABAZQgBAKgFALQgGAKgIADQAOADAHALQAIAKAAAOQgBAsgwAAgAgcA+IAcAAQAcAAAAgZQAAgRgPgIQgLgGgRgBIgNAAgAgcgJIARAAQALAAAEgCQAGgDAEgIQAFgJAAgHIgDgJIgDgIQgBgDgHgCIgHgCIgaAAg");
	this.shape_44.setTransform(57.2,158.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgaBPIAAgIQAAgfASgmQAIgOAbgwIhHAAIAAgSIBZAAIAAASIgJAOQgsBKAAAzg");
	this.shape_45.setTransform(45.8,158.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgdBMQgMgJAAgSIARAAQAAASAYAAQALAAAHgJQAGgJAAgPQAAgTgPgJQgJgGgWAAIAAgPQAUAAAIgFQANgHAAgRQAAgKgGgGQgHgGgIAAQgJAAgGAEQgIAFABAJIgPAAIAAgBQAAgRALgJQAKgIARAAQAQAAAKAJQALAKAAARQAAAbgaAMQAgAJAAAgQAAAWgMAOQgNAPgTAAQgRAAgKgIg");
	this.shape_46.setTransform(34.4,158.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgbBPIAAgIQABgfASgmQAHgOAdgwIhIAAIAAgSIBZAAIAAASIgJAOQgsBKAAAzg");
	this.shape_47.setTransform(23,158.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAgBPIhAh6IAAB6IgRAAIAAidIASAAIBAB5IAAgKIAAhvIAQAAIAACdg");
	this.shape_48.setTransform(11.6,158.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#00CCFF").s().p("AgBA7IAGgfIgWAAIgHAfIgKAAIAHgfIgMAAIAAgMIAPAAIAHgdIgWAAIAAgMIAYAAIAIghIAIAAIgFAhIAVAAIAIghIAKAAIgIAhIANAAIAAAMIgPAAIgIAdIAXAAIAAAMIgZAAIgHAfgAgOAQIAVAAIAIgdIgWAAg");
	this.shape_49.setTransform(-27.2,160);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#00CCFF").s().p("AghA7IAAh1IAOAAIAABnIA1AAIAAAOg");
	this.shape_50.setTransform(-43.8,160);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#00CCFF").s().p("AgVA7IAAgNIAQAAIAAhbIgQAAIAAgNIAqAAIAAANIgPAAIAABbIAPAAIAAANg");
	this.shape_51.setTransform(-52.1,160);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#00CCFF").s().p("AAeA7IgJggIgpAAIgLAgIgNAAIAph1IALAAIAlB1gAgQAOIAhAAIgRgzg");
	this.shape_52.setTransform(-60.4,160);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#00CCFF").s().p("AgFA7IAAhpIgiAAIAAgMIBPAAIAAAMIghAAIAABpg");
	this.shape_53.setTransform(-68.7,160);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAIBPIAAgQIgOAAIAAh4IgbAMIAAgSIAbgPIAOAAIAACNIAbAAIAAAQgAgGBPIAAgQIAOAAIAAAQgAghBPIAAgQIAbAAIAAAQgAgGA/g");
	this.shape_54.setTransform(57.3,128.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgmA1QgKgWAAgfQAAgdAKgXQANgfAZAAQAbAAAMAfQAJAXAAAdQAAAegJAXQgNAfgaAAQgZAAgNgfgAgYgoQgGARAAAXQAAAYAGARQAIAaAQAAQARAAAJgaQAFgSAAgXQAAgWgFgSQgJgagRAAQgQAAgIAag");
	this.shape_55.setTransform(45.8,128.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgaAIIAAgOIA0AAIAAAOg");
	this.shape_56.setTransform(34.4,130.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAoBPIgLgsIg5AAIgNAsIgSAAIA2idIAQAAIAxCdgAgWASIAtAAIgWhFg");
	this.shape_57.setTransform(23,128.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgtBPIAAidIAkAAQAVAAAKAGQAQAKgBAaQAAAKgFAKQgFAKgJAEQANACAIAKQAHALAAAOQABAsgxAAgAgbA+IAbAAQAbABAAgaQAAgRgOgIQgMgGgQAAIgMAAgAgbgJIAQAAQALAAAEgCQAGgDAFgJQAEgIgBgGIgBgJQgCgHgCgCQgBgDgGgCIgIgCIgZAAg");
	this.shape_58.setTransform(11.6,128.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#00CCFF").s().p("AghA7IAAh1IAOAAIAABnIA0AAIAAAOg");
	this.shape_59.setTransform(-27.2,130);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#00CCFF").s().p("AAeA7IgJggIgpAAIgLAgIgNAAIAoh1IAMAAIAlB1gAgQAOIAhAAIgRgzg");
	this.shape_60.setTransform(-35.5,130);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#00CCFF").s().p("AgbAqQgJgRAAgZQAAgYAJgRQAKgVAWAAQAOAAAJAIQAJAIAAAOIgMAAQAAgIgGgFQgFgEgIAAQgPAAgHASQgGANAAASQAAAUAGAMQAGASAQAAQASAAABgRIAMAAIAAABQABANgKAIQgKAIgNAAQgWAAgKgVg");
	this.shape_61.setTransform(-43.8,130);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#00CCFF").s().p("AggA7IAAh1IANAAIAABnIA0AAIAAAOg");
	this.shape_62.setTransform(-52.1,130);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#00CCFF").s().p("AggA7IAAh1IA5AAIAAAOIgsAAIAAAkIAnAAIAAALIgnAAIAAAqIA0AAIAAAOg");
	this.shape_63.setTransform(-60.4,130);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#00CCFF").s().p("AghAgIAOAAQAAAKAFAFQAGADAIAAQAIAAAGgGQAGgGgBgJQAAgMgPgIIgOgJQgKgDgEgHQgGgIAAgLQAAgQAKgIQAIgJAOAAQALAAAHAHQAIAHAAAMIgOAAQAAgGgFgEQgFgEgEAAQgGAAgFAGQgFAGAAAHQAAANAQAJIAOAIQAJADAFAHQAGAIAAALQAAAQgJAJQgKAKgPAAQggAAgBgfg");
	this.shape_64.setTransform(-68.7,130);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgaBPIAAgHQAAghASglQAIgOAbgwIhHAAIAAgSIBZAAIAAASIgJAPQgsBJAAAzg");
	this.shape_65.setTransform(45.8,98.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgdBMQgMgJAAgSIARAAQAAASAYAAQALAAAHgJQAGgJAAgPQAAgTgPgJQgJgGgWAAIAAgPQAUAAAIgFQANgHAAgRQAAgKgGgGQgHgGgIAAQgJAAgGAEQgIAFABAJIgPAAIAAgBQAAgRALgJQAKgIARAAQAQAAAKAJQALAKAAARQAAAbgaAMQAgAJAAAgQAAAWgMAOQgNAPgTAAQgRAAgKgIg");
	this.shape_66.setTransform(34.4,98.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgbBPIAAgHQABghASglQAHgOAdgwIhIAAIAAgSIBZAAIAAASIgJAPQgsBJAAAzg");
	this.shape_67.setTransform(23,98.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgmA1QgKgWAAgfQAAgdAKgXQANgfAZAAQAbAAAMAfQAJAXAAAdQAAAegJAXQgNAfgaAAQgZAAgNgfgAgYgoQgGARAAAXQAAAYAGARQAIAaAQAAQARAAAJgaQAFgSAAgXQAAgWgFgSQgJgagRAAQgQAAgIAag");
	this.shape_68.setTransform(11.6,98.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#00CCFF").s().p("AATA7QgGgRgFgKQgHgMgIgMIgNAAIAAAzIgNAAIAAh1IAeAAQAMAAAIAJQAIAJAAANQgBAYgTAJQAJAFAJATIAMAdgAgUgCIANAAQAIAAAFgHQAFgGAAgLQAAgUgRAAIgOAAg");
	this.shape_69.setTransform(-43.8,100);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#00CCFF").s().p("AgmA7IAAh1IAcAAQAaAAAMAQQALAOAAAcQgBA7gtAAgAgYAtIAPAAQATAAAIgMQAGgLAAgVQAAgWgGgKQgIgPgTAAIgPAAg");
	this.shape_70.setTransform(-52.1,100);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#00CCFF").s().p("AghA7IAAh1IAhAAQAQAAAIAHQAKAIAAASQAAAXgRAIQgNAGgXAAIAAAvgAgTAAIANAAQAaAAAAgZQAAgVgUAAIgTAAg");
	this.shape_71.setTransform(-60.4,100);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#00CCFF").s().p("AAaA7IgagvIgZAvIgOAAIAhg7Igeg6IAPAAIAVAsIAXgsIAOAAIgeA5IAiA8g");
	this.shape_72.setTransform(-68.7,100);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AAjBPIgjg/IgiA/IgUAAIAuhPIgohOIATAAIAdA7IAfg7IATAAIgpBNIAtBQg");
	this.shape_73.setTransform(68.6,38.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AAoBPIgLgsIg5AAIgNAsIgSAAIA2idIAQAAIAxCdgAgWASIAtAAIgWhFg");
	this.shape_74.setTransform(57.2,38.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AAlBPIAAh2IgdBeIgNAAIgfhaIAAByIgSAAIAAidIAUAAIAjBrIAihrIAUAAIAACdg");
	this.shape_75.setTransform(45.8,38.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgbBPIAAgIQAAgfATgmQAHgOAcgwIhHAAIAAgSIBZAAIAAARIgJAQQgsBJAAAzg");
	this.shape_76.setTransform(34.4,38.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgeBMQgLgJAAgSIARAAQABASAWAAQAMAAAHgJQAGgJAAgPQAAgTgOgJQgKgGgWAAIAAgPQAUAAAIgFQANgHAAgRQAAgKgHgGQgGgGgIAAQgJAAgGAEQgIAFACAJIgRAAIAAgBQAAgRAMgJQALgIAQAAQAQAAAKAJQAMAKAAARQAAAbgaAMQAfAJAAAgQAAAWgMAOQgNAPgTAAQgSAAgKgIg");
	this.shape_77.setTransform(23,38.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgaBPIAAgIQAAgfASgmQAIgOAbgwIhHAAIAAgSIBZAAIAAARIgJAQQgsBJAAAzg");
	this.shape_78.setTransform(11.6,38.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#00CCFF").s().p("AAAA7IAFgfIgWAAIgHAfIgKAAIAHgfIgMAAIAAgMIAPAAIAHgdIgWAAIAAgMIAYAAIAIghIAIAAIgFAhIAVAAIAIghIAKAAIgIAhIANAAIAAAMIgPAAIgIAdIAXAAIAAAMIgZAAIgHAfgAgOAQIAWAAIAHgdIgWAAg");
	this.shape_79.setTransform(-35.5,40);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#00CCFF").s().p("AgFA7IAAhpIgiAAIAAgMIBPAAIAAAMIgiAAIAABpg");
	this.shape_80.setTransform(-52.1,40);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#00CCFF").s().p("AggA7IAAh1IANAAIAABnIA0AAIAAAOg");
	this.shape_81.setTransform(-60.4,40);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#00CCFF").s().p("AgcA7IAAh1IA5AAIAAAOIgsAAIAAAoIAnAAIAAAKIgnAAIAAA1g");
	this.shape_82.setTransform(-68.7,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Line Work
	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#FFFFFF").ss(2,2,0,3).p("AbTQfMg2lAAAA7SoSMA2lAAAAbTX2Mg2lAAAA7S31MA2lAAA");
	this.shape_83.setTransform(91.4,74.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#5E5D66").s().p("A7fX+IAAxBIAAvcIAAveMA2/AAAMAAAAv7gAbTX2Mg2lAAAgAbTQfMg2lAAAgAbToSMg2lAAAgAbT31Mg2lAAAg");
	this.shape_84.setTransform(91.4,74.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_84},{t:this.shape_83}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.7,-79,352.1,309.7);


(lib._787_Generic_screen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PNG
	this.instance = new lib.odu01p02_pfd();
	this.instance.setTransform(-0.7,-149.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,-149.5,671,665.5);


// stage content:
(lib.dif06obp03 = function(mode,startPosition,loop) {
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
	this.frame_318 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(318).call(this.frame_318).wait(1));

	// prot
	this.prot = new lib.prot();
	this.prot.setTransform(500,275,1,1,0,0,0,500,275);

	this.timeline.addTween(cjs.Tween.get(this.prot).wait(319));

	// t0
	this.instance = new lib.textboxLside("synched",0);
	this.instance.setTransform(725.3,402.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({alpha:1},5).wait(303));

	// hl
	this.instance_1 = new lib.hl2("synched",0);
	this.instance_1.setTransform(585.4,402.8,1,1,0,0,0,60.4,24.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({alpha:1},5).wait(308));

	// panel
	this.instance_2 = new lib.B787SynopticAuxDisplayLcopy2("synched",0);
	this.instance_2.setTransform(258.7,403.4,1,1,0,0,0,0,206.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(319));

	// hl
	this.instance_3 = new lib.hl("synched",0);
	this.instance_3.setTransform(725.8,66,1,1,0,0,0,46.3,27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(319));

	// pfd
	this.instance_4 = new lib._787_Generic_screen("synched",0);
	this.instance_4.setTransform(821,143,0.5,0.5,0,0,0,319.7,250.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(319));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(500,217.8,1000,607.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;