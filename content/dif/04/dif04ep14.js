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
		{src:"images/en01p03_pfd.png", id:"en01p03_pfd"},
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



(lib.en01p03_pfd = function() {
	this.initialize(img.en01p03_pfd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,551,831);


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


(lib.hl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(5,0,0,3).p("AqBpjIUDAAIAATHI0DAAg");
	this.shape.setTransform(64.3,61.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,133.5,127.5);


(lib.B787SynopticENGINEAllPositionscopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AATA7IgThEIgSBEIgPAAIgHh1IANAAIAEBYIABAAIAAAAIARg8IALAAIARA8IAAAAIABAAIAEhYIANAAIgHB1g");
	this.shape.setTransform(316.4,136.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AghApQgIgRgBgYQABgXAIgRQAMgWAVAAQAWAAALAWQAKAQgBAYQABAYgKARQgLAWgWAAQgVAAgMgWgAgVgfQgGAOAAARQAAATAGANQAGASAPAAQAPAAAIgSQAFgOAAgSQAAgRgFgOQgIgSgPAAQgOAAgHASg");
	this.shape_1.setTransform(307.1,136.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AghA7IAAh1IAOAAIAABnIA1AAIAAAOg");
	this.shape_2.setTransform(297.8,136.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcA7IAAh1IA5AAIAAAOIgrAAIAAAoIAlAAIAAAKIglAAIAAA1g");
	this.shape_3.setTransform(288.5,136.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AghA7IAAh1IAOAAIAABnIA1AAIAAAOg");
	this.shape_4.setTransform(269.9,136.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AggA7IAAh1IA5AAIAAAOIgsAAIAAAkIAnAAIAAALIgnAAIAAAqIA0AAIAAAOg");
	this.shape_5.setTransform(260.6,136.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgdAyQgIgLAAgWIAAhNIANAAIAABLQAAAQAFAHQAHAKANAAQAPAAAGgNQADgJAAgRIAAhFIANAAIAABKQAAAvgmAAQgTAAgKgLg");
	this.shape_6.setTransform(251.3,136.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgcA7IAAh1IA5AAIAAAOIgsAAIAAAoIAnAAIAAAKIgnAAIAAA1g");
	this.shape_7.setTransform(242,136.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgFA7IAAhpIgiAAIAAgMIBPAAIAAAMIghAAIAABpg");
	this.shape_8.setTransform(302.5,97.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AghAgIAOAAQAAAKAFAFQAGADAIAAQAIAAAGgGQAFgGAAgJQAAgMgQgIIgOgJQgIgDgFgHQgGgIAAgLQAAgQAJgIQAJgJAOAAQALAAAHAHQAIAHAAAMIgOAAQAAgGgFgEQgFgEgEAAQgGAAgFAGQgFAGAAAHQAAANAQAJIAOAIQAKADAEAHQAGAIAAALQAAAQgJAJQgKAKgPAAQghAAAAgfg");
	this.shape_9.setTransform(293.2,97.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgdAxQgIgKAAgWIAAhNIAOAAIAABKQgBAQAFAJQAGAKAOgBQAPABAGgNQADgKAAgQIAAhGIANAAIAABJQAAAwglAAQgVAAgJgMg");
	this.shape_10.setTransform(283.9,97.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AATA7IgMgbQgGgMgJgMIgMAAIAAAzIgOAAIAAh1IAgAAQALAAAIAJQAHAJABANQAAAYgUAJQAJAFAJATIAMAdgAgUgCIAMAAQAJAAAFgHQAGgGgBgLQABgUgTAAIgNAAg");
	this.shape_11.setTransform(274.6,97.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAWA7IAAg2IgrAAIAAA2IgOAAIAAh1IAOAAIAAA1IArAAIAAg1IAOAAIAAB1g");
	this.shape_12.setTransform(265.3,97.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgFA7IAAhpIgiAAIAAgMIBPAAIAAAMIgiAAIAABpg");
	this.shape_13.setTransform(256,97.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AggA7IAAh1IA5AAIAAAOIgsAAIAAAkIAnAAIAAALIgnAAIAAAqIA0AAIAAAOg");
	this.shape_14.setTransform(311.8,65.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AATA7QgHgRgFgKQgGgMgJgMIgMAAIAAAzIgOAAIAAh1IAgAAQALAAAIAJQAHAJABANQAAAYgUAJQAJAFAJATIAMAdgAgUgCIAMAAQAJAAAFgHQAGgGgBgLQABgUgTAAIgNAAg");
	this.shape_15.setTransform(302.5,65.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgdAxQgIgKAAgWIAAhNIANAAIAABKQABARAEAHQAGALAOgBQAPABAFgNQAEgKABgQIAAhGIAMAAIAABJQAAAwglAAQgUAAgKgMg");
	this.shape_16.setTransform(293.2,65.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AghAgIAOAAQAAAKAGAFQAEADAJAAQAJAAAFgGQAGgGAAgJQAAgMgQgIIgPgJQgJgDgEgHQgGgIAAgLQAAgQAJgIQAKgJANAAQALAAAIAHQAHAHAAAMIgOAAQAAgGgFgEQgFgEgEAAQgHAAgEAGQgFAGAAAHQAAANAQAJIAOAIQAJADAFAHQAGAIAAALQAAAQgKAJQgIAKgQAAQggAAgBgfg");
	this.shape_17.setTransform(283.9,65.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AghAgIAOAAQAAAKAFAFQAGADAIAAQAIAAAGgGQAGgGgBgJQAAgMgPgIIgOgJQgKgDgEgHQgGgIAAgLQAAgQAKgIQAIgJAOAAQALAAAHAHQAIAHAAAMIgOAAQAAgGgFgEQgFgEgEAAQgGAAgFAGQgFAGAAAHQAAANAQAJIAOAIQAJADAFAHQAGAIAAALQAAAQgJAJQgKAKgPAAQggAAgBgfg");
	this.shape_18.setTransform(274.6,65.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AghA7IAAh1IA6AAIAAAOIgrAAIAAAkIAlAAIAAALIglAAIAAAqIA0AAIAAAOg");
	this.shape_19.setTransform(265.3,65.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AATA7QgGgRgGgKQgGgMgJgMIgMAAIAAAzIgNAAIAAh1IAfAAQALAAAIAJQAHAJAAANQAAAYgTAJQAJAFAJATIALAdgAgUgCIAMAAQAJAAAFgHQAFgGABgLQgBgUgRAAIgOAAg");
	this.shape_20.setTransform(256,65.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AghA7IAAh1IAhAAQAQAAAJAHQAJAIAAASQAAAXgRAIQgMAGgYAAIAAAvgAgTAAIANAAQAZAAAAgZQABgVgUAAIgTAAg");
	this.shape_21.setTransform(246.7,65.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AghA7IAAh1IAOAAIAABnIA0AAIAAAOg");
	this.shape_22.setTransform(307.1,50.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgVA7IAAgNIAQAAIAAhbIgQAAIAAgNIAqAAIAAANIgPAAIAABbIAPAAIAAANg");
	this.shape_23.setTransform(297.8,50.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AggApQgKgRABgYQgBgXAKgRQALgWAVAAQAWAAALAWQAJAQAAAYQAAAYgJARQgLAWgWAAQgVAAgLgWgAgWgfQgFAOAAARQAAATAFANQAHASAPAAQAQAAAGgSQAGgOAAgSQAAgRgGgOQgGgSgQAAQgOAAgIASg");
	this.shape_24.setTransform(288.5,50.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AASA7IgShEIgRBEIgRAAIgHh1IAOAAIAEBYIAAAAIABAAIAQg8IANAAIAQA8IABAAIAAAAIAEhYIAOAAIgHB1g");
	this.shape_25.setTransform(269.9,50.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AggApQgKgRABgYQgBgXAKgRQALgWAVAAQAXAAAKAWQAJAQAAAYQAAAYgJARQgKAWgXAAQgVAAgLgWgAgWgfQgFAOAAARQAAATAFANQAHASAPAAQAQAAAGgSQAGgOAAgSQAAgRgGgOQgGgSgQAAQgOAAgIASg");
	this.shape_26.setTransform(260.6,50.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AghA7IAAh1IAOAAIAABnIA0AAIAAAOg");
	this.shape_27.setTransform(251.3,50.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AghAgIAOAAQAAAKAFAFQAGADAIAAQAIAAAGgGQAGgGgBgJQAAgMgPgIIgOgJQgKgDgEgHQgGgIAAgLQAAgQAKgIQAIgJAOAAQALAAAHAHQAIAHAAAMIgOAAQAAgGgFgEQgFgEgEAAQgGAAgFAGQgFAGAAAHQAAANAQAJIAOAIQAJADAFAHQAGAIAAALQAAAQgJAJQgKAKgPAAQggAAgBgfg");
	this.shape_28.setTransform(302.5,26);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AghAgIAOAAQAAAKAFAFQAGADAIAAQAIAAAGgGQAFgGAAgJQAAgMgQgIIgOgJQgIgDgFgHQgGgIAAgLQAAgQAJgIQAJgJAOAAQALAAAHAHQAIAHAAAMIgOAAQAAgGgFgEQgFgEgEAAQgGAAgFAGQgFAGAAAHQAAANAQAJIAOAIQAKADAEAHQAGAIAAALQAAAQgJAJQgKAKgPAAQghAAAAgfg");
	this.shape_29.setTransform(293.2,26);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAeA7IgJggIgqAAIgKAgIgNAAIAph1IALAAIAlB1gAgQAOIAhAAIgRgzg");
	this.shape_30.setTransform(283.9,26);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AghA7IAAh1IAhAAQAQAAAJAHQAJAIAAASQAAAXgRAIQgMAGgYAAIAAAvgAgTAAIANAAQAZAAAAgZQABgVgUAAIgTAAg");
	this.shape_31.setTransform(274.6,26);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgFA7IAAgLIAAgSIAAgbIgRgcIgSghIAPAAIAZAwIAbgwIAOAAIgSAhIgQAcIAAAbIAAAdg");
	this.shape_32.setTransform(265.3,26);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AghA7IAAh1IAaAAQAQAAAHAFQAMAHAAATQAAAIgEAHQgEAIgHADQALABAFAIQAGAIgBAKQAAAhgjAAgAgUAvIAUAAQAVAAAAgTQgBgNgKgGQgJgFgMAAIgJAAgAgUgGIAMAAQAIAAADgCQAEgCAEgGQACgHAAgFIAAgGIgDgHQgBgCgFgCIgFgBIgTAAg");
	this.shape_33.setTransform(256,26);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AATA7QgGgRgFgKQgHgMgIgMIgNAAIAAAzIgNAAIAAh1IAeAAQAMAAAIAJQAIAJAAANQgBAYgTAJQAJAFAJATIAMAdgAgUgCIANAAQAIAAAFgHQAFgGAAgLQAAgUgRAAIgOAAg");
	this.shape_34.setTransform(321.1,11.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AggA7IAAh1IA5AAIAAAOIgsAAIAAAkIAnAAIAAALIgnAAIAAAqIA0AAIAAAOg");
	this.shape_35.setTransform(311.8,11.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgFA7IAAhpIgiAAIAAgMIBPAAIAAAMIghAAIAABpg");
	this.shape_36.setTransform(302.5,11.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AghA7IAAh1IAOAAIAABnIA1AAIAAAOg");
	this.shape_37.setTransform(293.2,11.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgVA7IAAgNIAQAAIAAhbIgQAAIAAgNIArAAIAAANIgQAAIAABbIAQAAIAAANg");
	this.shape_38.setTransform(283.9,11.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgcA7IAAh1IA5AAIAAAOIgsAAIAAAoIAnAAIAAAKIgnAAIAAA1g");
	this.shape_39.setTransform(274.6,11.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AggA7IAAh1IANAAIAABnIA0AAIAAAOg");
	this.shape_40.setTransform(256,11.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgUA7IAAgNIAPAAIAAhbIgPAAIAAgNIAqAAIAAANIgQAAIAABbIAQAAIAAANg");
	this.shape_41.setTransform(246.7,11.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AggApQgKgRAAgYQAAgXAKgRQALgWAVAAQAWAAAMAWQAIAQABAYQgBAYgIARQgMAWgWAAQgVAAgLgWgAgWgfQgFAOAAARQAAATAFANQAIASAOAAQAQAAAGgSQAGgOAAgSQAAgRgGgOQgGgSgQAAQgOAAgIASg");
	this.shape_42.setTransform(237.4,11.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAYA7IgwhbIAABbIgMAAIAAh1IANAAIAwBaIAAgHIAAhTIAMAAIAAB1g");
	this.shape_43.setTransform(293.2,-13.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AggA7IAAh1IA5AAIAAAOIgsAAIAAAkIAnAAIAAALIgnAAIAAAqIA0AAIAAAOg");
	this.shape_44.setTransform(283.9,-13.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AghA7IAAh1IAhAAQAQAAAJAHQAJAIAAASQAAAXgRAIQgMAGgYAAIAAAvgAgTAAIANAAQAZAAAAgZQABgVgUAAIgTAAg");
	this.shape_45.setTransform(274.6,-13.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AghApQgJgRAAgYQAAgXAJgRQAMgWAVAAQAWAAAMAWQAIAQABAYQgBAYgIARQgMAWgWAAQgVAAgMgWgAgWgfQgFAOAAARQAAATAFANQAIASAOAAQAQAAAGgSQAGgOAAgSQAAgRgGgOQgGgSgQAAQgOAAgIASg");
	this.shape_46.setTransform(265.3,-13.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AghA7IAAh1IA6AAIAAAOIgrAAIAAAkIAlAAIAAALIglAAIAAAqIA0AAIAAAOg");
	this.shape_47.setTransform(325.7,-27.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgGA7Iglh1IANAAIAeBgIAehgIAOAAIgnB1g");
	this.shape_48.setTransform(316.4,-27.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AghA7IAAh1IAOAAIAABnIA0AAIAAAOg");
	this.shape_49.setTransform(307.1,-27.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAeA7IgJggIgqAAIgKAgIgNAAIAoh1IAMAAIAlB1gAgQAOIAhAAIgRgzg");
	this.shape_50.setTransform(297.8,-27.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgGA7Iglh1IANAAIAeBgIAehgIAOAAIgnB1g");
	this.shape_51.setTransform(288.5,-27.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgFA7IAAhpIgiAAIAAgMIBPAAIAAAMIghAAIAABpg");
	this.shape_52.setTransform(269.9,-27.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AATA7QgGgRgGgKQgGgMgIgMIgNAAIAAAzIgNAAIAAh1IAeAAQAMAAAIAJQAIAJgBANQAAAYgTAJQAJAFAJATIALAdgAgUgCIANAAQAIAAAFgHQAFgGABgLQgBgUgRAAIgOAAg");
	this.shape_53.setTransform(260.6,-27.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAeA7IgJggIgpAAIgLAgIgNAAIAph1IALAAIAlB1gAgQAOIAhAAIgRgzg");
	this.shape_54.setTransform(251.3,-27.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgFA7IAAhpIgiAAIAAgMIBPAAIAAAMIghAAIAABpg");
	this.shape_55.setTransform(242,-27.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AghAgIAOAAQAAAKAGAFQAEADAJAAQAIAAAGgGQAFgGABgJQgBgMgQgIIgOgJQgIgDgFgHQgGgIAAgLQAAgQAJgIQAKgJANAAQALAAAIAHQAHAHAAAMIgOAAQAAgGgFgEQgFgEgEAAQgHAAgEAGQgFAGAAAHQAAANAQAJIAOAIQAJADAFAHQAGAIAAALQAAAQgKAJQgIAKgQAAQghAAAAgfg");
	this.shape_56.setTransform(232.7,-27.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AATA7IgThEIgSBEIgPAAIgHh1IANAAIAEBYIABAAIAAAAIARg8IALAAIARA8IAAAAIABAAIAEhYIANAAIgHB1g");
	this.shape_57.setTransform(201.2,136.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AghApQgIgRgBgYQABgXAIgRQAMgWAVAAQAWAAAMAWQAJAQgBAYQABAYgJARQgMAWgWAAQgVAAgMgWgAgVgfQgGAOAAARQAAATAGANQAGASAPAAQAPAAAIgSQAFgOAAgSQAAgRgFgOQgIgSgPAAQgOAAgHASg");
	this.shape_58.setTransform(191.9,136.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AghA7IAAh1IAOAAIAABnIA1AAIAAAOg");
	this.shape_59.setTransform(182.6,136.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgcA7IAAh1IA5AAIAAAOIgrAAIAAAoIAlAAIAAAKIglAAIAAA1g");
	this.shape_60.setTransform(173.3,136.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AghA7IAAh1IAOAAIAABnIA1AAIAAAOg");
	this.shape_61.setTransform(154.7,136.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AggA7IAAh1IA5AAIAAAOIgsAAIAAAkIAnAAIAAALIgnAAIAAAqIA0AAIAAAOg");
	this.shape_62.setTransform(145.4,136.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgdAyQgIgLAAgWIAAhNIANAAIAABLQAAAQAFAHQAHAKANAAQAPAAAGgNQADgJAAgRIAAhFIANAAIAABKQAAAvgmAAQgTAAgKgLg");
	this.shape_63.setTransform(136.1,136.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgcA7IAAh1IA5AAIAAAOIgsAAIAAAoIAnAAIAAAKIgnAAIAAA1g");
	this.shape_64.setTransform(126.8,136.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgFA7IAAhpIgiAAIAAgMIBPAAIAAAMIghAAIAABpg");
	this.shape_65.setTransform(187.3,97.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AghAgIAOAAQAAAKAFAFQAGADAIAAQAIAAAGgGQAFgGABgJQgBgMgQgIIgOgJQgIgDgFgHQgGgIAAgLQAAgQAJgIQAJgJAOAAQALAAAHAHQAIAHAAAMIgOAAQAAgGgFgEQgFgEgEAAQgGAAgFAGQgFAGAAAHQAAANAQAJIAOAIQAKADAEAHQAGAIAAALQAAAQgJAJQgKAKgPAAQghAAAAgfg");
	this.shape_66.setTransform(178,97.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgdAxQgIgKAAgWIAAhNIAOAAIAABKQgBAQAFAJQAGAKAOgBQAPABAGgNQADgKAAgQIAAhGIANAAIAABJQAAAwglAAQgVAAgJgMg");
	this.shape_67.setTransform(168.7,97.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AATA7IgMgbQgGgMgJgMIgMAAIAAAzIgOAAIAAh1IAgAAQALAAAIAJQAHAJABANQAAAYgUAJQAJAFAJATIALAdgAgUgCIAMAAQAJAAAFgHQAGgGgBgLQABgUgTAAIgNAAg");
	this.shape_68.setTransform(159.4,97.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAWA7IAAg2IgrAAIAAA2IgOAAIAAh1IAOAAIAAA1IArAAIAAg1IAOAAIAAB1g");
	this.shape_69.setTransform(150.1,97.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgFA7IAAhpIgiAAIAAgMIBPAAIAAAMIgiAAIAABpg");
	this.shape_70.setTransform(140.8,97.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AggA7IAAh1IA5AAIAAAOIgsAAIAAAkIAnAAIAAALIgnAAIAAAqIA0AAIAAAOg");
	this.shape_71.setTransform(196.6,65.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AATA7QgHgRgFgKQgGgMgJgMIgMAAIAAAzIgOAAIAAh1IAgAAQALAAAIAJQAHAJABANQAAAYgUAJQAJAFAJATIAMAdgAgUgCIAMAAQAJAAAFgHQAGgGgBgLQABgUgTAAIgNAAg");
	this.shape_72.setTransform(187.3,65.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgdAxQgIgKAAgWIAAhNIANAAIAABKQABARAEAHQAGALAOgBQAPABAFgNQAFgKAAgQIAAhGIAMAAIAABJQAAAwglAAQgUAAgKgMg");
	this.shape_73.setTransform(178,65.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AghAgIAOAAQAAAKAGAFQAEADAJAAQAJAAAFgGQAGgGAAgJQAAgMgQgIIgPgJQgJgDgEgHQgGgIAAgLQAAgQAKgIQAJgJANAAQALAAAIAHQAHAHAAAMIgOAAQAAgGgFgEQgFgEgEAAQgHAAgEAGQgFAGAAAHQAAANAQAJIAOAIQAJADAFAHQAGAIAAALQAAAQgKAJQgIAKgQAAQggAAgBgfg");
	this.shape_74.setTransform(168.7,65.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AghAgIAOAAQAAAKAFAFQAGADAIAAQAIAAAGgGQAGgGgBgJQAAgMgPgIIgOgJQgKgDgEgHQgGgIAAgLQAAgQAKgIQAIgJAOAAQALAAAHAHQAIAHAAAMIgOAAQAAgGgFgEQgFgEgEAAQgGAAgFAGQgFAGAAAHQAAANAQAJIAOAIQAJADAFAHQAGAIAAALQAAAQgJAJQgKAKgPAAQggAAgBgfg");
	this.shape_75.setTransform(159.4,65.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AghA7IAAh1IA6AAIAAAOIgrAAIAAAkIAlAAIAAALIglAAIAAAqIA0AAIAAAOg");
	this.shape_76.setTransform(150.1,65.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AATA7QgGgRgGgKQgGgMgJgMIgMAAIAAAzIgNAAIAAh1IAeAAQAMAAAIAJQAHAJAAANQAAAYgTAJQAJAFAJATIALAdgAgUgCIAMAAQAJAAAFgHQAFgGABgLQgBgUgRAAIgOAAg");
	this.shape_77.setTransform(140.8,65.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AghA7IAAh1IAhAAQAQAAAJAHQAJAIAAASQAAAXgRAIQgMAGgYAAIAAAvgAgTAAIANAAQAZAAAAgZQABgVgUAAIgTAAg");
	this.shape_78.setTransform(131.5,65.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AghA7IAAh1IAOAAIAABnIA1AAIAAAOg");
	this.shape_79.setTransform(191.9,50.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgVA7IAAgNIAQAAIAAhbIgQAAIAAgNIAqAAIAAANIgPAAIAABbIAPAAIAAANg");
	this.shape_80.setTransform(182.6,50.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AggApQgKgRABgYQgBgXAKgRQALgWAVAAQAXAAAKAWQAJAQAAAYQAAAYgJARQgKAWgXAAQgVAAgLgWgAgWgfQgFAOAAARQAAATAFANQAHASAPAAQAQAAAGgSQAGgOAAgSQAAgRgGgOQgGgSgQAAQgOAAgIASg");
	this.shape_81.setTransform(173.3,50.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AASA7IgShEIgRBEIgRAAIgHh1IAOAAIAEBYIAAAAIABAAIAQg8IANAAIAQA8IABAAIAAAAIAEhYIAOAAIgHB1g");
	this.shape_82.setTransform(154.7,50.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AggApQgKgRABgYQgBgXAKgRQALgWAVAAQAXAAAKAWQAJAQAAAYQAAAYgJARQgKAWgXAAQgVAAgLgWgAgWgfQgFAOAAARQAAATAFANQAHASAPAAQAQAAAGgSQAGgOAAgSQAAgRgGgOQgGgSgQAAQgOAAgIASg");
	this.shape_83.setTransform(145.4,50.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AghA7IAAh1IAOAAIAABnIA1AAIAAAOg");
	this.shape_84.setTransform(136.1,50.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AghAgIAOAAQAAAKAFAFQAGADAIAAQAIAAAGgGQAGgGgBgJQAAgMgPgIIgOgJQgKgDgEgHQgGgIAAgLQAAgQAKgIQAIgJAOAAQALAAAHAHQAIAHAAAMIgOAAQAAgGgFgEQgFgEgEAAQgGAAgFAGQgFAGAAAHQAAANAQAJIAOAIQAJADAFAHQAGAIAAALQAAAQgJAJQgKAKgPAAQggAAgBgfg");
	this.shape_85.setTransform(187.3,26);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AghAgIAOAAQAAAKAFAFQAGADAIAAQAIAAAGgGQAFgGABgJQgBgMgQgIIgOgJQgIgDgFgHQgGgIAAgLQAAgQAJgIQAJgJAOAAQALAAAHAHQAIAHAAAMIgOAAQAAgGgFgEQgFgEgEAAQgGAAgFAGQgFAGAAAHQAAANAQAJIAOAIQAKADAEAHQAGAIAAALQAAAQgJAJQgKAKgPAAQghAAAAgfg");
	this.shape_86.setTransform(178,26);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAeA7IgJggIgpAAIgLAgIgNAAIAph1IALAAIAlB1gAgQAOIAhAAIgRgzg");
	this.shape_87.setTransform(168.7,26);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AghA7IAAh1IAhAAQAQAAAJAHQAJAIAAASQAAAXgRAIQgMAGgYAAIAAAvgAgTAAIANAAQAZAAAAgZQABgVgUAAIgTAAg");
	this.shape_88.setTransform(159.4,26);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgFA7IgBgLIABgSIgBgbIgQgcIgSghIAPAAIAZAwIAbgwIAOAAIgSAhIgQAcIAAAbIAAAdg");
	this.shape_89.setTransform(150.1,26);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AghA7IAAh1IAaAAQAQAAAHAFQAMAHAAATQAAAIgEAHQgEAIgHADQALABAFAIQAGAIgBAKQAAAhgjAAgAgUAvIAUAAQAVAAAAgTQgBgNgKgGQgJgFgMAAIgJAAgAgUgGIAMAAQAIAAADgCQAEgCAEgGQACgHAAgFIAAgGIgDgHQgBgCgFgCIgFgBIgTAAg");
	this.shape_90.setTransform(140.8,26);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AATA7QgGgRgFgKQgHgMgIgMIgNAAIAAAzIgNAAIAAh1IAeAAQAMAAAIAJQAIAJAAANQgBAYgTAJQAJAFAJATIAMAdgAgUgCIANAAQAIAAAFgHQAFgGAAgLQAAgUgRAAIgOAAg");
	this.shape_91.setTransform(205.9,11.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AggA7IAAh1IA5AAIAAAOIgsAAIAAAkIAnAAIAAALIgnAAIAAAqIA0AAIAAAOg");
	this.shape_92.setTransform(196.6,11.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgFA7IAAhpIgiAAIAAgMIBPAAIAAAMIghAAIAABpg");
	this.shape_93.setTransform(187.3,11.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AghA7IAAh1IAOAAIAABnIA1AAIAAAOg");
	this.shape_94.setTransform(178,11.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgUA7IAAgNIAPAAIAAhbIgPAAIAAgNIAqAAIAAANIgQAAIAABbIAQAAIAAANg");
	this.shape_95.setTransform(168.7,11.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgcA7IAAh1IA5AAIAAAOIgsAAIAAAoIAnAAIAAAKIgnAAIAAA1g");
	this.shape_96.setTransform(159.4,11.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AggA7IAAh1IANAAIAABnIA0AAIAAAOg");
	this.shape_97.setTransform(140.8,11.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgUA7IAAgNIAPAAIAAhbIgPAAIAAgNIAqAAIAAANIgQAAIAABbIAQAAIAAANg");
	this.shape_98.setTransform(131.5,11.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AghApQgJgRABgYQgBgXAJgRQAMgWAVAAQAWAAAMAWQAIAQABAYQgBAYgIARQgMAWgWAAQgVAAgMgWgAgWgfQgFAOAAARQAAATAFANQAIASAOAAQAQAAAGgSQAGgOAAgSQAAgRgGgOQgGgSgQAAQgOAAgIASg");
	this.shape_99.setTransform(122.2,11.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AAYA7IgwhbIAABbIgMAAIAAh1IANAAIAwBaIAAgHIAAhTIAMAAIAAB1g");
	this.shape_100.setTransform(178,-13.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AggA7IAAh1IA5AAIAAAOIgsAAIAAAkIAnAAIAAALIgnAAIAAAqIA0AAIAAAOg");
	this.shape_101.setTransform(168.7,-13.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AghA7IAAh1IAhAAQAQAAAJAHQAJAIAAASQAAAXgRAIQgMAGgYAAIAAAvgAgTAAIANAAQAZAAAAgZQABgVgUAAIgTAAg");
	this.shape_102.setTransform(159.4,-13.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AghApQgJgRABgYQgBgXAJgRQAMgWAVAAQAWAAAMAWQAIAQABAYQgBAYgIARQgMAWgWAAQgVAAgMgWgAgWgfQgFAOAAARQAAATAFANQAIASAOAAQAQAAAGgSQAGgOAAgSQAAgRgGgOQgGgSgQAAQgOAAgIASg");
	this.shape_103.setTransform(150.1,-13.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AghA7IAAh1IA6AAIAAAOIgrAAIAAAkIAlAAIAAALIglAAIAAAqIA0AAIAAAOg");
	this.shape_104.setTransform(210.5,-27.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgGA7Iglh1IANAAIAeBgIAehgIAOAAIgnB1g");
	this.shape_105.setTransform(201.2,-27.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AghA7IAAh1IAOAAIAABnIA1AAIAAAOg");
	this.shape_106.setTransform(191.9,-27.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AAeA7IgJggIgqAAIgKAgIgNAAIAoh1IAMAAIAlB1gAgQAOIAhAAIgRgzg");
	this.shape_107.setTransform(182.6,-27.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgGA7Iglh1IANAAIAeBgIAehgIAOAAIgnB1g");
	this.shape_108.setTransform(173.3,-27.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgFA7IAAhpIgiAAIAAgMIBPAAIAAAMIghAAIAABpg");
	this.shape_109.setTransform(154.7,-27.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AATA7QgGgRgGgKQgGgMgIgMIgNAAIAAAzIgNAAIAAh1IAeAAQAMAAAIAJQAIAJgBANQAAAYgTAJQAJAFAJATIALAdgAgUgCIANAAQAIAAAFgHQAFgGABgLQgBgUgRAAIgOAAg");
	this.shape_110.setTransform(145.4,-27.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AAeA7IgJggIgpAAIgLAgIgNAAIAph1IALAAIAlB1gAgQAOIAhAAIgRgzg");
	this.shape_111.setTransform(136.1,-27.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgFA7IAAhpIgiAAIAAgMIBPAAIAAAMIghAAIAABpg");
	this.shape_112.setTransform(126.8,-27.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AghAgIAOAAQAAAKAGAFQAEADAJAAQAIAAAGgGQAFgGABgJQgBgMgPgIIgPgJQgIgDgFgHQgGgIAAgLQAAgQAJgIQAKgJANAAQALAAAIAHQAHAHAAAMIgOAAQAAgGgFgEQgFgEgEAAQgHAAgEAGQgFAGAAAHQAAANAQAJIAOAIQAJADAFAHQAGAIAAALQAAAQgKAJQgIAKgQAAQghAAAAgfg");
	this.shape_113.setTransform(117.5,-27.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#00CCFF").s().p("AgfA9IAAgNQAAgOAIgNQAFgIAMgLIAOgPQAJgIAAgKQgBgHgFgEQgFgFgGgBQgPAAgBAOIgMAAIAAgBQgBgMAKgGQAIgHALAAQAMAAAJAIQAJAHAAAOQAAAPgNANIgWAUQgNAOAAAQIAyAAIAAAOg");
	this.shape_114.setTransform(296.1,-48.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#00CCFF").s().p("AgbArQgKgQAAgaQAAgYAJgRQALgWAWAAQANAAAJAIQALAIAAANIgOAAQAAgIgFgEQgGgEgIAAQgPAAgGASQgGANAAASQAAATAGANQAGASAPAAQAIAAALgEIAAgiIgWAAIAAgMIAkAAIAAA2QgRAJgPAAQgVAAgMgUg");
	this.shape_115.setTransform(279.5,-48.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#00CCFF").s().p("AAYA7IgvhbIAABbIgNAAIAAh1IAOAAIAuBaIAAgHIAAhTIANAAIAAB1g");
	this.shape_116.setTransform(271.2,-48.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#00CCFF").s().p("AghA7IAAh1IA6AAIAAAOIgrAAIAAAkIAlAAIAAALIglAAIAAAqIA0AAIAAAOg");
	this.shape_117.setTransform(262.9,-48.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#00CCFF").s().p("AAGA7IAAgLIgLAAIAAALIgUAAIAAgLIAUAAIAAhbIgTAKIAAgOIAUgLIAKAAIAABqIAUAAIAAALgAAGA7IgLAAIAAgLIALAAIAAALgAAGAwg");
	this.shape_118.setTransform(181.1,-48.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#00CCFF").s().p("AgbArQgKgQAAgaQAAgYAJgRQALgWAWAAQANAAAJAIQALAIAAANIgOAAQAAgIgFgEQgGgEgIAAQgOAAgHASQgGANAAASQAAATAGANQAGASAPAAQAIAAALgEIAAgiIgWAAIAAgMIAkAAIAAA2QgQAJgQAAQgVAAgMgUg");
	this.shape_119.setTransform(164.4,-48.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#00CCFF").s().p("AAYA7IgvhbIAABbIgNAAIAAh1IAOAAIAuBaIAAgHIAAhTIANAAIAAB1g");
	this.shape_120.setTransform(156.1,-48.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#00CCFF").s().p("AghA7IAAh1IA6AAIAAAOIgrAAIAAAkIAlAAIAAALIglAAIAAAqIAzAAIAAAOg");
	this.shape_121.setTransform(147.8,-48.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFBB29").s().p("AoOF6IAAluIQcAAIAAFugAoOgLIAAluIQcAAIAAFug");
	this.shape_122.setTransform(164.1,116.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AAwPGIAAlyIQeAAIAAFygAAwI7IAAltIQeAAIAAFtgAAwC1IAAltIQeAAIAAFtgAxNC1IAAltIQeAAIAAFtgAAwjQIAAluIQeAAIAAFugAxNjQIAAluIQeAAIAAFugAAwpYIAAluIQeAAIAAFugAxNpYIAAluIQeAAIAAFug");
	this.shape_123.setTransform(221.6,58.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#5E5D66").s().p("AAXQtIAA++IRQAAIAAe+gAAwQUIQeAAIAAlyIweAAgAAwKJIQeAAIAAluIweAAgAAwECIQeAAIAAlsIweAAgAAwiDIQeAAIAAluIweAAgAAwoKIQeAAIAAluIweAAgAxmQpIAA+6IRQAAIAAe6gAxNQQIQeAAIAAluIweAAgAxNKJIQeAAIAAluIweAAgAxNECIQeAAIAAlsIweAAgAxNiDIQeAAIAAluIweAAgAxNoKIQeAAIAAluIweAAgAFgubIAAiRIG1AAIAACRgAsdubIAAiRIG1AAIAACRg");
	this.shape_124.setTransform(221.6,50.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3
	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("Ay0SFMAAAgkIMAlqAAAMAAAAkIg");
	this.shape_125.setTransform(221.5,51.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_125).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(100.9,-64.1,241.2,231.4);


(lib.B787SynopticENGINEAllPositionscopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AATA7IgThEIgSBEIgPAAIgHh1IANAAIAEBYIABAAIAAAAIARg8IALAAIARA8IAAAAIABAAIAEhYIANAAIgHB1g");
	this.shape.setTransform(316.4,136.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AghApQgIgRgBgYQABgXAIgRQAMgWAVAAQAWAAALAWQAKAQgBAYQABAYgKARQgLAWgWAAQgVAAgMgWgAgVgfQgGAOAAARQAAATAGANQAGASAPAAQAPAAAIgSQAFgOAAgSQAAgRgFgOQgIgSgPAAQgOAAgHASg");
	this.shape_1.setTransform(307.1,136.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AghA7IAAh1IAOAAIAABnIA1AAIAAAOg");
	this.shape_2.setTransform(297.8,136.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcA7IAAh1IA5AAIAAAOIgrAAIAAAoIAlAAIAAAKIglAAIAAA1g");
	this.shape_3.setTransform(288.5,136.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AghA7IAAh1IAOAAIAABnIA1AAIAAAOg");
	this.shape_4.setTransform(269.9,136.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AggA7IAAh1IA5AAIAAAOIgsAAIAAAkIAnAAIAAALIgnAAIAAAqIA0AAIAAAOg");
	this.shape_5.setTransform(260.6,136.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgdAyQgIgLAAgWIAAhNIANAAIAABLQAAAQAFAHQAHAKANAAQAPAAAGgNQADgJAAgRIAAhFIANAAIAABKQAAAvgmAAQgTAAgKgLg");
	this.shape_6.setTransform(251.3,136.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgcA7IAAh1IA5AAIAAAOIgsAAIAAAoIAnAAIAAAKIgnAAIAAA1g");
	this.shape_7.setTransform(242,136.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgFA7IAAhpIgiAAIAAgMIBPAAIAAAMIghAAIAABpg");
	this.shape_8.setTransform(302.5,97.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AghAgIAOAAQAAAKAFAFQAGADAIAAQAIAAAGgGQAFgGAAgJQAAgMgQgIIgOgJQgIgDgFgHQgGgIAAgLQAAgQAJgIQAJgJAOAAQALAAAHAHQAIAHAAAMIgOAAQAAgGgFgEQgFgEgEAAQgGAAgFAGQgFAGAAAHQAAANAQAJIAOAIQAKADAEAHQAGAIAAALQAAAQgJAJQgKAKgPAAQghAAAAgfg");
	this.shape_9.setTransform(293.2,97.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgdAxQgIgKAAgWIAAhNIAOAAIAABKQgBAQAFAJQAGAKAOgBQAPABAGgNQADgKAAgQIAAhGIANAAIAABJQAAAwglAAQgVAAgJgMg");
	this.shape_10.setTransform(283.9,97.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AATA7IgMgbQgGgMgJgMIgMAAIAAAzIgOAAIAAh1IAgAAQALAAAIAJQAHAJABANQAAAYgUAJQAJAFAJATIAMAdgAgUgCIAMAAQAJAAAFgHQAGgGgBgLQABgUgTAAIgNAAg");
	this.shape_11.setTransform(274.6,97.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAWA7IAAg2IgrAAIAAA2IgOAAIAAh1IAOAAIAAA1IArAAIAAg1IAOAAIAAB1g");
	this.shape_12.setTransform(265.3,97.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgFA7IAAhpIgiAAIAAgMIBPAAIAAAMIgiAAIAABpg");
	this.shape_13.setTransform(256,97.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AggA7IAAh1IA5AAIAAAOIgsAAIAAAkIAnAAIAAALIgnAAIAAAqIA0AAIAAAOg");
	this.shape_14.setTransform(311.8,65.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AATA7QgHgRgFgKQgGgMgJgMIgMAAIAAAzIgOAAIAAh1IAgAAQALAAAIAJQAHAJABANQAAAYgUAJQAJAFAJATIAMAdgAgUgCIAMAAQAJAAAFgHQAGgGgBgLQABgUgTAAIgNAAg");
	this.shape_15.setTransform(302.5,65.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgdAxQgIgKAAgWIAAhNIANAAIAABKQABARAEAHQAGALAOgBQAPABAFgNQAEgKABgQIAAhGIAMAAIAABJQAAAwglAAQgUAAgKgMg");
	this.shape_16.setTransform(293.2,65.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AghAgIAOAAQAAAKAGAFQAEADAJAAQAJAAAFgGQAGgGAAgJQAAgMgQgIIgPgJQgJgDgEgHQgGgIAAgLQAAgQAJgIQAKgJANAAQALAAAIAHQAHAHAAAMIgOAAQAAgGgFgEQgFgEgEAAQgHAAgEAGQgFAGAAAHQAAANAQAJIAOAIQAJADAFAHQAGAIAAALQAAAQgKAJQgIAKgQAAQggAAgBgfg");
	this.shape_17.setTransform(283.9,65.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AghAgIAOAAQAAAKAFAFQAGADAIAAQAIAAAGgGQAGgGgBgJQAAgMgPgIIgOgJQgKgDgEgHQgGgIAAgLQAAgQAKgIQAIgJAOAAQALAAAHAHQAIAHAAAMIgOAAQAAgGgFgEQgFgEgEAAQgGAAgFAGQgFAGAAAHQAAANAQAJIAOAIQAJADAFAHQAGAIAAALQAAAQgJAJQgKAKgPAAQggAAgBgfg");
	this.shape_18.setTransform(274.6,65.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AghA7IAAh1IA6AAIAAAOIgrAAIAAAkIAlAAIAAALIglAAIAAAqIA0AAIAAAOg");
	this.shape_19.setTransform(265.3,65.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AATA7QgGgRgGgKQgGgMgJgMIgMAAIAAAzIgNAAIAAh1IAfAAQALAAAIAJQAHAJAAANQAAAYgTAJQAJAFAJATIALAdgAgUgCIAMAAQAJAAAFgHQAFgGABgLQgBgUgRAAIgOAAg");
	this.shape_20.setTransform(256,65.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AghA7IAAh1IAhAAQAQAAAJAHQAJAIAAASQAAAXgRAIQgMAGgYAAIAAAvgAgTAAIANAAQAZAAAAgZQABgVgUAAIgTAAg");
	this.shape_21.setTransform(246.7,65.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AghA7IAAh1IAOAAIAABnIA0AAIAAAOg");
	this.shape_22.setTransform(307.1,50.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgVA7IAAgNIAQAAIAAhbIgQAAIAAgNIAqAAIAAANIgPAAIAABbIAPAAIAAANg");
	this.shape_23.setTransform(297.8,50.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AggApQgKgRABgYQgBgXAKgRQALgWAVAAQAWAAALAWQAJAQAAAYQAAAYgJARQgLAWgWAAQgVAAgLgWgAgWgfQgFAOAAARQAAATAFANQAHASAPAAQAQAAAGgSQAGgOAAgSQAAgRgGgOQgGgSgQAAQgOAAgIASg");
	this.shape_24.setTransform(288.5,50.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AASA7IgShEIgRBEIgRAAIgHh1IAOAAIAEBYIAAAAIABAAIAQg8IANAAIAQA8IABAAIAAAAIAEhYIAOAAIgHB1g");
	this.shape_25.setTransform(269.9,50.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AggApQgKgRABgYQgBgXAKgRQALgWAVAAQAXAAAKAWQAJAQAAAYQAAAYgJARQgKAWgXAAQgVAAgLgWgAgWgfQgFAOAAARQAAATAFANQAHASAPAAQAQAAAGgSQAGgOAAgSQAAgRgGgOQgGgSgQAAQgOAAgIASg");
	this.shape_26.setTransform(260.6,50.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AghA7IAAh1IAOAAIAABnIA0AAIAAAOg");
	this.shape_27.setTransform(251.3,50.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AghAgIAOAAQAAAKAFAFQAGADAIAAQAIAAAGgGQAGgGgBgJQAAgMgPgIIgOgJQgKgDgEgHQgGgIAAgLQAAgQAKgIQAIgJAOAAQALAAAHAHQAIAHAAAMIgOAAQAAgGgFgEQgFgEgEAAQgGAAgFAGQgFAGAAAHQAAANAQAJIAOAIQAJADAFAHQAGAIAAALQAAAQgJAJQgKAKgPAAQggAAgBgfg");
	this.shape_28.setTransform(302.5,26);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AghAgIAOAAQAAAKAFAFQAGADAIAAQAIAAAGgGQAFgGAAgJQAAgMgQgIIgOgJQgIgDgFgHQgGgIAAgLQAAgQAJgIQAJgJAOAAQALAAAHAHQAIAHAAAMIgOAAQAAgGgFgEQgFgEgEAAQgGAAgFAGQgFAGAAAHQAAANAQAJIAOAIQAKADAEAHQAGAIAAALQAAAQgJAJQgKAKgPAAQghAAAAgfg");
	this.shape_29.setTransform(293.2,26);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAeA7IgJggIgqAAIgKAgIgNAAIAph1IALAAIAlB1gAgQAOIAhAAIgRgzg");
	this.shape_30.setTransform(283.9,26);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AghA7IAAh1IAhAAQAQAAAJAHQAJAIAAASQAAAXgRAIQgMAGgYAAIAAAvgAgTAAIANAAQAZAAAAgZQABgVgUAAIgTAAg");
	this.shape_31.setTransform(274.6,26);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgFA7IAAgLIAAgSIAAgbIgRgcIgSghIAPAAIAZAwIAbgwIAOAAIgSAhIgQAcIAAAbIAAAdg");
	this.shape_32.setTransform(265.3,26);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AghA7IAAh1IAaAAQAQAAAHAFQAMAHAAATQAAAIgEAHQgEAIgHADQALABAFAIQAGAIgBAKQAAAhgjAAgAgUAvIAUAAQAVAAAAgTQgBgNgKgGQgJgFgMAAIgJAAgAgUgGIAMAAQAIAAADgCQAEgCAEgGQACgHAAgFIAAgGIgDgHQgBgCgFgCIgFgBIgTAAg");
	this.shape_33.setTransform(256,26);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AATA7QgGgRgFgKQgHgMgIgMIgNAAIAAAzIgNAAIAAh1IAeAAQAMAAAIAJQAIAJAAANQgBAYgTAJQAJAFAJATIAMAdgAgUgCIANAAQAIAAAFgHQAFgGAAgLQAAgUgRAAIgOAAg");
	this.shape_34.setTransform(321.1,11.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AggA7IAAh1IA5AAIAAAOIgsAAIAAAkIAnAAIAAALIgnAAIAAAqIA0AAIAAAOg");
	this.shape_35.setTransform(311.8,11.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgFA7IAAhpIgiAAIAAgMIBPAAIAAAMIghAAIAABpg");
	this.shape_36.setTransform(302.5,11.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AghA7IAAh1IAOAAIAABnIA1AAIAAAOg");
	this.shape_37.setTransform(293.2,11.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgVA7IAAgNIAQAAIAAhbIgQAAIAAgNIArAAIAAANIgQAAIAABbIAQAAIAAANg");
	this.shape_38.setTransform(283.9,11.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgcA7IAAh1IA5AAIAAAOIgsAAIAAAoIAnAAIAAAKIgnAAIAAA1g");
	this.shape_39.setTransform(274.6,11.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AggA7IAAh1IANAAIAABnIA0AAIAAAOg");
	this.shape_40.setTransform(256,11.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgUA7IAAgNIAPAAIAAhbIgPAAIAAgNIAqAAIAAANIgQAAIAABbIAQAAIAAANg");
	this.shape_41.setTransform(246.7,11.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AggApQgKgRAAgYQAAgXAKgRQALgWAVAAQAWAAAMAWQAIAQABAYQgBAYgIARQgMAWgWAAQgVAAgLgWgAgWgfQgFAOAAARQAAATAFANQAIASAOAAQAQAAAGgSQAGgOAAgSQAAgRgGgOQgGgSgQAAQgOAAgIASg");
	this.shape_42.setTransform(237.4,11.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAYA7IgwhbIAABbIgMAAIAAh1IANAAIAwBaIAAgHIAAhTIAMAAIAAB1g");
	this.shape_43.setTransform(293.2,-13.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AggA7IAAh1IA5AAIAAAOIgsAAIAAAkIAnAAIAAALIgnAAIAAAqIA0AAIAAAOg");
	this.shape_44.setTransform(283.9,-13.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AghA7IAAh1IAhAAQAQAAAJAHQAJAIAAASQAAAXgRAIQgMAGgYAAIAAAvgAgTAAIANAAQAZAAAAgZQABgVgUAAIgTAAg");
	this.shape_45.setTransform(274.6,-13.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AghApQgJgRAAgYQAAgXAJgRQAMgWAVAAQAWAAAMAWQAIAQABAYQgBAYgIARQgMAWgWAAQgVAAgMgWgAgWgfQgFAOAAARQAAATAFANQAIASAOAAQAQAAAGgSQAGgOAAgSQAAgRgGgOQgGgSgQAAQgOAAgIASg");
	this.shape_46.setTransform(265.3,-13.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AghA7IAAh1IA6AAIAAAOIgrAAIAAAkIAlAAIAAALIglAAIAAAqIA0AAIAAAOg");
	this.shape_47.setTransform(325.7,-27.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgGA7Iglh1IANAAIAeBgIAehgIAOAAIgnB1g");
	this.shape_48.setTransform(316.4,-27.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AghA7IAAh1IAOAAIAABnIA0AAIAAAOg");
	this.shape_49.setTransform(307.1,-27.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAeA7IgJggIgqAAIgKAgIgNAAIAoh1IAMAAIAlB1gAgQAOIAhAAIgRgzg");
	this.shape_50.setTransform(297.8,-27.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgGA7Iglh1IANAAIAeBgIAehgIAOAAIgnB1g");
	this.shape_51.setTransform(288.5,-27.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgFA7IAAhpIgiAAIAAgMIBPAAIAAAMIghAAIAABpg");
	this.shape_52.setTransform(269.9,-27.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AATA7QgGgRgGgKQgGgMgIgMIgNAAIAAAzIgNAAIAAh1IAeAAQAMAAAIAJQAIAJgBANQAAAYgTAJQAJAFAJATIALAdgAgUgCIANAAQAIAAAFgHQAFgGABgLQgBgUgRAAIgOAAg");
	this.shape_53.setTransform(260.6,-27.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAeA7IgJggIgpAAIgLAgIgNAAIAph1IALAAIAlB1gAgQAOIAhAAIgRgzg");
	this.shape_54.setTransform(251.3,-27.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgFA7IAAhpIgiAAIAAgMIBPAAIAAAMIghAAIAABpg");
	this.shape_55.setTransform(242,-27.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AghAgIAOAAQAAAKAGAFQAEADAJAAQAIAAAGgGQAFgGABgJQgBgMgQgIIgOgJQgIgDgFgHQgGgIAAgLQAAgQAJgIQAKgJANAAQALAAAIAHQAHAHAAAMIgOAAQAAgGgFgEQgFgEgEAAQgHAAgEAGQgFAGAAAHQAAANAQAJIAOAIQAJADAFAHQAGAIAAALQAAAQgKAJQgIAKgQAAQghAAAAgfg");
	this.shape_56.setTransform(232.7,-27.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AATA7IgThEIgSBEIgPAAIgHh1IANAAIAEBYIABAAIAAAAIARg8IALAAIARA8IAAAAIABAAIAEhYIANAAIgHB1g");
	this.shape_57.setTransform(201.2,136.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AghApQgIgRgBgYQABgXAIgRQAMgWAVAAQAWAAAMAWQAJAQgBAYQABAYgJARQgMAWgWAAQgVAAgMgWgAgVgfQgGAOAAARQAAATAGANQAGASAPAAQAPAAAIgSQAFgOAAgSQAAgRgFgOQgIgSgPAAQgOAAgHASg");
	this.shape_58.setTransform(191.9,136.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AghA7IAAh1IAOAAIAABnIA1AAIAAAOg");
	this.shape_59.setTransform(182.6,136.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgcA7IAAh1IA5AAIAAAOIgrAAIAAAoIAlAAIAAAKIglAAIAAA1g");
	this.shape_60.setTransform(173.3,136.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AghA7IAAh1IAOAAIAABnIA1AAIAAAOg");
	this.shape_61.setTransform(154.7,136.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AggA7IAAh1IA5AAIAAAOIgsAAIAAAkIAnAAIAAALIgnAAIAAAqIA0AAIAAAOg");
	this.shape_62.setTransform(145.4,136.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgdAyQgIgLAAgWIAAhNIANAAIAABLQAAAQAFAHQAHAKANAAQAPAAAGgNQADgJAAgRIAAhFIANAAIAABKQAAAvgmAAQgTAAgKgLg");
	this.shape_63.setTransform(136.1,136.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgcA7IAAh1IA5AAIAAAOIgsAAIAAAoIAnAAIAAAKIgnAAIAAA1g");
	this.shape_64.setTransform(126.8,136.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgFA7IAAhpIgiAAIAAgMIBPAAIAAAMIghAAIAABpg");
	this.shape_65.setTransform(187.3,97.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AghAgIAOAAQAAAKAFAFQAGADAIAAQAIAAAGgGQAFgGABgJQgBgMgQgIIgOgJQgIgDgFgHQgGgIAAgLQAAgQAJgIQAJgJAOAAQALAAAHAHQAIAHAAAMIgOAAQAAgGgFgEQgFgEgEAAQgGAAgFAGQgFAGAAAHQAAANAQAJIAOAIQAKADAEAHQAGAIAAALQAAAQgJAJQgKAKgPAAQghAAAAgfg");
	this.shape_66.setTransform(178,97.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgdAxQgIgKAAgWIAAhNIAOAAIAABKQgBAQAFAJQAGAKAOgBQAPABAGgNQADgKAAgQIAAhGIANAAIAABJQAAAwglAAQgVAAgJgMg");
	this.shape_67.setTransform(168.7,97.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AATA7IgMgbQgGgMgJgMIgMAAIAAAzIgOAAIAAh1IAgAAQALAAAIAJQAHAJABANQAAAYgUAJQAJAFAJATIALAdgAgUgCIAMAAQAJAAAFgHQAGgGgBgLQABgUgTAAIgNAAg");
	this.shape_68.setTransform(159.4,97.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAWA7IAAg2IgrAAIAAA2IgOAAIAAh1IAOAAIAAA1IArAAIAAg1IAOAAIAAB1g");
	this.shape_69.setTransform(150.1,97.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgFA7IAAhpIgiAAIAAgMIBPAAIAAAMIgiAAIAABpg");
	this.shape_70.setTransform(140.8,97.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AggA7IAAh1IA5AAIAAAOIgsAAIAAAkIAnAAIAAALIgnAAIAAAqIA0AAIAAAOg");
	this.shape_71.setTransform(196.6,65.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AATA7QgHgRgFgKQgGgMgJgMIgMAAIAAAzIgOAAIAAh1IAgAAQALAAAIAJQAHAJABANQAAAYgUAJQAJAFAJATIAMAdgAgUgCIAMAAQAJAAAFgHQAGgGgBgLQABgUgTAAIgNAAg");
	this.shape_72.setTransform(187.3,65.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgdAxQgIgKAAgWIAAhNIANAAIAABKQABARAEAHQAGALAOgBQAPABAFgNQAFgKAAgQIAAhGIAMAAIAABJQAAAwglAAQgUAAgKgMg");
	this.shape_73.setTransform(178,65.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AghAgIAOAAQAAAKAGAFQAEADAJAAQAJAAAFgGQAGgGAAgJQAAgMgQgIIgPgJQgJgDgEgHQgGgIAAgLQAAgQAKgIQAJgJANAAQALAAAIAHQAHAHAAAMIgOAAQAAgGgFgEQgFgEgEAAQgHAAgEAGQgFAGAAAHQAAANAQAJIAOAIQAJADAFAHQAGAIAAALQAAAQgKAJQgIAKgQAAQggAAgBgfg");
	this.shape_74.setTransform(168.7,65.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AghAgIAOAAQAAAKAFAFQAGADAIAAQAIAAAGgGQAGgGgBgJQAAgMgPgIIgOgJQgKgDgEgHQgGgIAAgLQAAgQAKgIQAIgJAOAAQALAAAHAHQAIAHAAAMIgOAAQAAgGgFgEQgFgEgEAAQgGAAgFAGQgFAGAAAHQAAANAQAJIAOAIQAJADAFAHQAGAIAAALQAAAQgJAJQgKAKgPAAQggAAgBgfg");
	this.shape_75.setTransform(159.4,65.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AghA7IAAh1IA6AAIAAAOIgrAAIAAAkIAlAAIAAALIglAAIAAAqIA0AAIAAAOg");
	this.shape_76.setTransform(150.1,65.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AATA7QgGgRgGgKQgGgMgJgMIgMAAIAAAzIgNAAIAAh1IAeAAQAMAAAIAJQAHAJAAANQAAAYgTAJQAJAFAJATIALAdgAgUgCIAMAAQAJAAAFgHQAFgGABgLQgBgUgRAAIgOAAg");
	this.shape_77.setTransform(140.8,65.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AghA7IAAh1IAhAAQAQAAAJAHQAJAIAAASQAAAXgRAIQgMAGgYAAIAAAvgAgTAAIANAAQAZAAAAgZQABgVgUAAIgTAAg");
	this.shape_78.setTransform(131.5,65.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AghA7IAAh1IAOAAIAABnIA1AAIAAAOg");
	this.shape_79.setTransform(191.9,50.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgVA7IAAgNIAQAAIAAhbIgQAAIAAgNIAqAAIAAANIgPAAIAABbIAPAAIAAANg");
	this.shape_80.setTransform(182.6,50.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AggApQgKgRABgYQgBgXAKgRQALgWAVAAQAXAAAKAWQAJAQAAAYQAAAYgJARQgKAWgXAAQgVAAgLgWgAgWgfQgFAOAAARQAAATAFANQAHASAPAAQAQAAAGgSQAGgOAAgSQAAgRgGgOQgGgSgQAAQgOAAgIASg");
	this.shape_81.setTransform(173.3,50.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AASA7IgShEIgRBEIgRAAIgHh1IAOAAIAEBYIAAAAIABAAIAQg8IANAAIAQA8IABAAIAAAAIAEhYIAOAAIgHB1g");
	this.shape_82.setTransform(154.7,50.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AggApQgKgRABgYQgBgXAKgRQALgWAVAAQAXAAAKAWQAJAQAAAYQAAAYgJARQgKAWgXAAQgVAAgLgWgAgWgfQgFAOAAARQAAATAFANQAHASAPAAQAQAAAGgSQAGgOAAgSQAAgRgGgOQgGgSgQAAQgOAAgIASg");
	this.shape_83.setTransform(145.4,50.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AghA7IAAh1IAOAAIAABnIA1AAIAAAOg");
	this.shape_84.setTransform(136.1,50.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AghAgIAOAAQAAAKAFAFQAGADAIAAQAIAAAGgGQAGgGgBgJQAAgMgPgIIgOgJQgKgDgEgHQgGgIAAgLQAAgQAKgIQAIgJAOAAQALAAAHAHQAIAHAAAMIgOAAQAAgGgFgEQgFgEgEAAQgGAAgFAGQgFAGAAAHQAAANAQAJIAOAIQAJADAFAHQAGAIAAALQAAAQgJAJQgKAKgPAAQggAAgBgfg");
	this.shape_85.setTransform(187.3,26);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AghAgIAOAAQAAAKAFAFQAGADAIAAQAIAAAGgGQAFgGABgJQgBgMgQgIIgOgJQgIgDgFgHQgGgIAAgLQAAgQAJgIQAJgJAOAAQALAAAHAHQAIAHAAAMIgOAAQAAgGgFgEQgFgEgEAAQgGAAgFAGQgFAGAAAHQAAANAQAJIAOAIQAKADAEAHQAGAIAAALQAAAQgJAJQgKAKgPAAQghAAAAgfg");
	this.shape_86.setTransform(178,26);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAeA7IgJggIgpAAIgLAgIgNAAIAph1IALAAIAlB1gAgQAOIAhAAIgRgzg");
	this.shape_87.setTransform(168.7,26);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AghA7IAAh1IAhAAQAQAAAJAHQAJAIAAASQAAAXgRAIQgMAGgYAAIAAAvgAgTAAIANAAQAZAAAAgZQABgVgUAAIgTAAg");
	this.shape_88.setTransform(159.4,26);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgFA7IgBgLIABgSIgBgbIgQgcIgSghIAPAAIAZAwIAbgwIAOAAIgSAhIgQAcIAAAbIAAAdg");
	this.shape_89.setTransform(150.1,26);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AghA7IAAh1IAaAAQAQAAAHAFQAMAHAAATQAAAIgEAHQgEAIgHADQALABAFAIQAGAIgBAKQAAAhgjAAgAgUAvIAUAAQAVAAAAgTQgBgNgKgGQgJgFgMAAIgJAAgAgUgGIAMAAQAIAAADgCQAEgCAEgGQACgHAAgFIAAgGIgDgHQgBgCgFgCIgFgBIgTAAg");
	this.shape_90.setTransform(140.8,26);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AATA7QgGgRgFgKQgHgMgIgMIgNAAIAAAzIgNAAIAAh1IAeAAQAMAAAIAJQAIAJAAANQgBAYgTAJQAJAFAJATIAMAdgAgUgCIANAAQAIAAAFgHQAFgGAAgLQAAgUgRAAIgOAAg");
	this.shape_91.setTransform(205.9,11.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AggA7IAAh1IA5AAIAAAOIgsAAIAAAkIAnAAIAAALIgnAAIAAAqIA0AAIAAAOg");
	this.shape_92.setTransform(196.6,11.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgFA7IAAhpIgiAAIAAgMIBPAAIAAAMIghAAIAABpg");
	this.shape_93.setTransform(187.3,11.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AghA7IAAh1IAOAAIAABnIA1AAIAAAOg");
	this.shape_94.setTransform(178,11.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgUA7IAAgNIAPAAIAAhbIgPAAIAAgNIAqAAIAAANIgQAAIAABbIAQAAIAAANg");
	this.shape_95.setTransform(168.7,11.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgcA7IAAh1IA5AAIAAAOIgsAAIAAAoIAnAAIAAAKIgnAAIAAA1g");
	this.shape_96.setTransform(159.4,11.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AggA7IAAh1IANAAIAABnIA0AAIAAAOg");
	this.shape_97.setTransform(140.8,11.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgUA7IAAgNIAPAAIAAhbIgPAAIAAgNIAqAAIAAANIgQAAIAABbIAQAAIAAANg");
	this.shape_98.setTransform(131.5,11.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AghApQgJgRABgYQgBgXAJgRQAMgWAVAAQAWAAAMAWQAIAQABAYQgBAYgIARQgMAWgWAAQgVAAgMgWgAgWgfQgFAOAAARQAAATAFANQAIASAOAAQAQAAAGgSQAGgOAAgSQAAgRgGgOQgGgSgQAAQgOAAgIASg");
	this.shape_99.setTransform(122.2,11.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AAYA7IgwhbIAABbIgMAAIAAh1IANAAIAwBaIAAgHIAAhTIAMAAIAAB1g");
	this.shape_100.setTransform(178,-13.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AggA7IAAh1IA5AAIAAAOIgsAAIAAAkIAnAAIAAALIgnAAIAAAqIA0AAIAAAOg");
	this.shape_101.setTransform(168.7,-13.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AghA7IAAh1IAhAAQAQAAAJAHQAJAIAAASQAAAXgRAIQgMAGgYAAIAAAvgAgTAAIANAAQAZAAAAgZQABgVgUAAIgTAAg");
	this.shape_102.setTransform(159.4,-13.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AghApQgJgRABgYQgBgXAJgRQAMgWAVAAQAWAAAMAWQAIAQABAYQgBAYgIARQgMAWgWAAQgVAAgMgWgAgWgfQgFAOAAARQAAATAFANQAIASAOAAQAQAAAGgSQAGgOAAgSQAAgRgGgOQgGgSgQAAQgOAAgIASg");
	this.shape_103.setTransform(150.1,-13.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AghA7IAAh1IA6AAIAAAOIgrAAIAAAkIAlAAIAAALIglAAIAAAqIA0AAIAAAOg");
	this.shape_104.setTransform(210.5,-27.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgGA7Iglh1IANAAIAeBgIAehgIAOAAIgnB1g");
	this.shape_105.setTransform(201.2,-27.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AghA7IAAh1IAOAAIAABnIA1AAIAAAOg");
	this.shape_106.setTransform(191.9,-27.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AAeA7IgJggIgqAAIgKAgIgNAAIAoh1IAMAAIAlB1gAgQAOIAhAAIgRgzg");
	this.shape_107.setTransform(182.6,-27.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgGA7Iglh1IANAAIAeBgIAehgIAOAAIgnB1g");
	this.shape_108.setTransform(173.3,-27.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgFA7IAAhpIgiAAIAAgMIBPAAIAAAMIghAAIAABpg");
	this.shape_109.setTransform(154.7,-27.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AATA7QgGgRgGgKQgGgMgIgMIgNAAIAAAzIgNAAIAAh1IAeAAQAMAAAIAJQAIAJgBANQAAAYgTAJQAJAFAJATIALAdgAgUgCIANAAQAIAAAFgHQAFgGABgLQgBgUgRAAIgOAAg");
	this.shape_110.setTransform(145.4,-27.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AAeA7IgJggIgpAAIgLAgIgNAAIAph1IALAAIAlB1gAgQAOIAhAAIgRgzg");
	this.shape_111.setTransform(136.1,-27.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgFA7IAAhpIgiAAIAAgMIBPAAIAAAMIghAAIAABpg");
	this.shape_112.setTransform(126.8,-27.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AghAgIAOAAQAAAKAGAFQAEADAJAAQAIAAAGgGQAFgGABgJQgBgMgPgIIgPgJQgIgDgFgHQgGgIAAgLQAAgQAJgIQAKgJANAAQALAAAIAHQAHAHAAAMIgOAAQAAgGgFgEQgFgEgEAAQgHAAgEAGQgFAGAAAHQAAANAQAJIAOAIQAJADAFAHQAGAIAAALQAAAQgKAJQgIAKgQAAQghAAAAgfg");
	this.shape_113.setTransform(117.5,-27.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#00CCFF").s().p("AgfA9IAAgNQAAgOAIgNQAFgIAMgLIAOgPQAJgIAAgKQgBgHgFgEQgFgFgGgBQgPAAgBAOIgMAAIAAgBQgBgMAKgGQAIgHALAAQAMAAAJAIQAJAHAAAOQAAAPgNANIgWAUQgNAOAAAQIAyAAIAAAOg");
	this.shape_114.setTransform(296.1,-48.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#00CCFF").s().p("AgbArQgKgQAAgaQAAgYAJgRQALgWAWAAQANAAAJAIQALAIAAANIgOAAQAAgIgFgEQgGgEgIAAQgPAAgGASQgGANAAASQAAATAGANQAGASAPAAQAIAAALgEIAAgiIgWAAIAAgMIAkAAIAAA2QgRAJgPAAQgVAAgMgUg");
	this.shape_115.setTransform(279.5,-48.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#00CCFF").s().p("AAYA7IgvhbIAABbIgNAAIAAh1IAOAAIAuBaIAAgHIAAhTIANAAIAAB1g");
	this.shape_116.setTransform(271.2,-48.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#00CCFF").s().p("AghA7IAAh1IA6AAIAAAOIgrAAIAAAkIAlAAIAAALIglAAIAAAqIA0AAIAAAOg");
	this.shape_117.setTransform(262.9,-48.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#00CCFF").s().p("AAGA7IAAgLIgLAAIAAALIgUAAIAAgLIAUAAIAAhbIgTAKIAAgOIAUgLIAKAAIAABqIAUAAIAAALgAAGA7IgLAAIAAgLIALAAIAAALgAAGAwg");
	this.shape_118.setTransform(181.1,-48.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#00CCFF").s().p("AgbArQgKgQAAgaQAAgYAJgRQALgWAWAAQANAAAJAIQALAIAAANIgOAAQAAgIgFgEQgGgEgIAAQgOAAgHASQgGANAAASQAAATAGANQAGASAPAAQAIAAALgEIAAgiIgWAAIAAgMIAkAAIAAA2QgQAJgQAAQgVAAgMgUg");
	this.shape_119.setTransform(164.4,-48.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#00CCFF").s().p("AAYA7IgvhbIAABbIgNAAIAAh1IAOAAIAuBaIAAgHIAAhTIANAAIAAB1g");
	this.shape_120.setTransform(156.1,-48.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#00CCFF").s().p("AghA7IAAh1IA6AAIAAAOIgrAAIAAAkIAlAAIAAALIglAAIAAAqIAzAAIAAAOg");
	this.shape_121.setTransform(147.8,-48.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFBB29").s().p("AoOPFIAAlvIQcAAIAAFvgAoOI9IAAltIQcAAIAAFtgAoOC3IAAltIQcAAIAAFtgAoOjOIAAluIQcAAIAAFugAoOpWIAAluIQcAAIAAFug");
	this.shape_122.setTransform(164.1,58.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AoOPGIAAlyIQcAAIAAFygAoOI7IAAltIQcAAIAAFtgAoOC1IAAltIQcAAIAAFtgAoOjQIAAluIQcAAIAAFugAoOpYIAAluIQcAAIAAFug");
	this.shape_123.setTransform(279.2,58.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#5E5D66").s().p("AAXQtIAA++IRQAAIAAe+gAAwQUIQeAAIAAlyIweAAgAAwKJIQeAAIAAluIweAAgAAwECIQeAAIAAlsIweAAgAAwiDIQeAAIAAluIweAAgAAwoKIQeAAIAAluIweAAgAxmQpIAA+6IRQAAIAAe6gAxNQQIQeAAIAAluIweAAgAxNKJIQeAAIAAluIweAAgAxNECIQeAAIAAlsIweAAgAxNiDIQeAAIAAluIweAAgAxNoKIQeAAIAAluIweAAgAFgubIAAiRIG1AAIAACRgAsdubIAAiRIG1AAIAACRg");
	this.shape_124.setTransform(221.6,50.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3
	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("Ay0SFMAAAgkIMAlqAAAMAAAAkIg");
	this.shape_125.setTransform(221.5,51.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_125).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(100.9,-64.1,241.2,231.4);


(lib.B787SynopticENGINEAllPositions = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PNG
	this.instance = new lib.en01p03_pfd();
	this.instance.setTransform(3.5,-2.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.3,-2.8,275.7,415.5);


(lib.point_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.point("synched",0);
	this.instance.setTransform(-62.1,1.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAaBAIgaheIgYBeIgcAAIgfh/IAbAAIATBXIAXhXIAeAAIAWBYIAUhYIAaAAIgfB/g");
	this.shape.setTransform(630.5,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgsAxQgRgSAAgfQAAgRAFgNQAFgLAIgHQAIgIAIgEQANgFAOAAQAcAAARASQARARAAAeQAAAfgRASQgRARgcAAQgcAAgQgRgAgZggQgJALgBAVQABAWAJALQALALAOAAQAPAAAKgLQAKgMAAgVQAAgVgKgLQgKgLgPAAQgPAAgKALg");
	this.shape_1.setTransform(615,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgsBAIAAh+IAaAAIAABoIA/AAIAAAWg");
	this.shape_2.setTransform(602.9,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgqBAIAAh/IBVAAIAAAWIg8AAIAAAfIA0AAIAAATIg0AAIAAA3g");
	this.shape_3.setTransform(591.7,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgsBAIAAh+IAaAAIAABoIA/AAIAAAWg");
	this.shape_4.setTransform(576.3,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgwBAIAAh/IBeAAIAAAWIhEAAIAAAdIA/AAIAAATIg/AAIAAAkIBGAAIAAAVg");
	this.shape_5.setTransform(564.6,1.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgZA9QgJgFgGgGQgGgHgBgIQgDgLAAgVIAAhDIAaAAIAABEQAAAQABAFQACAJAGAEQAGAFAJAAQALAAAGgEQAGgFABgHIABgVIAAhGIAaAAIAABCQAAAXgCAJQgCAKgGAHQgGAHgJADQgKAEgPAAQgQAAgKgEg");
	this.shape_6.setTransform(551.8,1.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgrBAIAAh/IBWAAIAAAWIg8AAIAAAfIA0AAIAAATIg0AAIAAA3g");
	this.shape_7.setTransform(540.1,1.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgLAAgPQAAgNAFgKQAFgLAJgHQAJgFALAAQAHgBAHAEQAGAEAFAFIAAguIAPAAIAAB/IgPAAIAAgMQgJAOgQAAQgKAAgJgGgAgQgJQgGAJAAAQQgBASAIAJQAHAJAJAAQAKAAAHgJQAIgIgBgSQABgRgIgJQgHgJgLAAQgIAAgIAJg");
	this.shape_8.setTransform(524,1.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_9.setTransform(514.3,3.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHADgGQADgGAFgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgGAEQgFAEgCAKIgQgCQACgKAFgGQAFgHAJgDQAJgDALAAQALAAAIADQAHACAEAFQADAEABAGIACAPIAAATQAAAWABAGQABAGACAFIgQAAQgDgFAAgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgCADgBAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgPACg");
	this.shape_10.setTransform(504.3,3.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgMBAIAAhpIgmAAIAAgWIBlAAIAAAWIgnAAIAABpg");
	this.shape_11.setTransform(488.9,1.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgjA3QgNgMgDgVIAagDQABANAIAGQAGAGALAAQAMAAAHgFQAGgGAAgHQAAgEgDgDQgCgEgIgCIgSgGQgVgFgIgFQgNgLAAgPQABgKAFgJQAGgIALgFQAKgEAOAAQAXAAAMAKQANALAAASIgaABQgCgKgFgEQgGgFgJAAQgLAAgGAFQgFADAAAFQAAAEAFAEQAFAEAQAEQAUAFAIAFQAKAEAEAHQAGAIAAAMQAAALgGAKQgHAKgLAEQgLAFgRAAQgXAAgMgLg");
	this.shape_12.setTransform(477.3,1.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgZA9QgJgFgGgGQgGgHgBgIQgDgLAAgVIAAhDIAaAAIAABEQAAAQABAFQACAJAGAEQAGAFAJAAQALAAAGgEQAGgFABgHIABgVIAAhGIAaAAIAABCQAAAXgCAJQgCAKgGAHQgGAHgJADQgKAEgPAAQgQAAgKgEg");
	this.shape_13.setTransform(464.8,1.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAaBAIgTgcIgLgTQgEgEgEgCQgEgBgJAAIgFAAIAAA2IgaAAIAAh/IA3AAQASAAAJADQAKAEAGAJQAFAJAAALQAAAPgIAKQgJAGgRADQAIAFAGAGQAGAGAJAPIAQAZgAgegJIATAAQARAAAEgBQAFgBACgFQADgEABgFQAAgHgEgEQgEgDgGgCIgRAAIgUAAg");
	this.shape_14.setTransform(452.5,1.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAZBAIAAg5IgxAAIAAA5IgaAAIAAh/IAaAAIAAAzIAxAAIAAgzIAaAAIAAB/g");
	this.shape_15.setTransform(438.8,1.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgMBAIAAhpIgmAAIAAgWIBlAAIAAAWIgnAAIAABpg");
	this.shape_16.setTransform(426.9,1.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgHAuIAAgSIAQAAIAAASgAgHgbIAAgSIAQAAIAAASg");
	this.shape_17.setTransform(414.3,3.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAlBAIggguIgFgJIgFAKIggAtIgVAAIAyhBIgsg+IAUAAIAYAhIAIAQIAKgOIAbgjIASAAIgtA9IAwBCg");
	this.shape_18.setTransform(405.7,1.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAoBAIgPgnIg0AAIgNAnIgTAAIAxh/IARAAIA1B/gAgIgZIgNAkIApAAIgOgiIgHgbQgCANgFAMg");
	this.shape_19.setTransform(393.7,1.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAsBAIAAhqIglBqIgNAAIgmhsIAABsIgQAAIAAh/IAZAAIAfBZIAEATIAHgUIAfhYIAXAAIAAB/g");
	this.shape_20.setTransform(380.2,1.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgeAkQgLgNAAgXQAAgVALgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgLAAQgJAAgIAHg");
	this.shape_21.setTransform(362.7,3.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgFQgGgGgJAAQgFAAgGAEQgHADgCAHQgDAEAAALIAAAzIgPAAIAAh/IAPAAIAAAuQAMgMAOAAQAKAAAIADQAIAEADAIQADAHAAAMIAAA7g");
	this.shape_22.setTransform(352.7,1.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_23.setTransform(345.3,1.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_24.setTransform(332.7,3.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_25.setTransform(325.3,1.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgLAAgPQAAgNAFgKQAEgLAKgHQAJgFALAAQAHgBAGAEQAHAEAEAFIAAguIAQAAIAAB/IgPAAIAAgMQgIAOgRAAQgKAAgJgGgAgPgJQgIAJABAQQAAASAHAJQAHAJAJAAQAKAAAIgJQAGgIAAgSQAAgRgGgJQgIgJgLAAQgJAAgGAJg");
	this.shape_26.setTransform(312.4,1.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAIAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_27.setTransform(302.7,3.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgLAAgPQAAgNAFgKQAFgLAJgHQAJgFALAAQAHgBAHAEQAGAEAEAFIAAguIAQAAIAAB/IgPAAIAAgMQgIAOgRAAQgKAAgJgGgAgQgJQgGAJAAAQQgBASAIAJQAIAJAIAAQAKAAAHgJQAIgIgBgSQABgRgIgJQgHgJgLAAQgIAAgIAJg");
	this.shape_28.setTransform(292.4,1.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgLAAgPQAAgNAFgKQAFgLAJgHQAJgFALAAQAHgBAHAEQAGAEAFAFIAAguIAPAAIAAB/IgPAAIAAgMQgJAOgQAAQgKAAgJgGgAgQgJQgGAJAAAQQgBASAIAJQAHAJAJAAQAKAAAHgJQAIgIgBgSQABgRgIgJQgHgJgLAAQgIAAgIAJg");
	this.shape_29.setTransform(282.4,1.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQAMAAAHADQAHACAEAFQADAEACAGIABAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgPACg");
	this.shape_30.setTransform(272.7,3.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_31.setTransform(257.7,3.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQAMAMgBAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_32.setTransform(247.7,3.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_33.setTransform(237.7,3.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgYA0IAAALIgPAAIAAh/IAQAAIAAAuQAKgMANAAQAJgBAIAEQAHADAFAHQAFAGADAJQADAHAAAKQAAAYgMANQgMANgQAAQgPAAgJgNgAgRgJQgHAJAAAPQAAASAEAHQAIAMAMAAQAJAAAHgJQAIgJAAgSQAAgQgHgJQgIgJgJAAQgJAAgIAJg");
	this.shape_34.setTransform(227.9,1.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgVAMgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAIAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_35.setTransform(212.7,3.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgGAuIgjhbIAQAAIAUA2IAFATIAFgSIAVg3IAQAAIgjBbg");
	this.shape_36.setTransform(203.2,3.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAJgDIAAgEQAAgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAFAEABAGIABAPIAAATQAAAWABAGQAAAGADAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQADgFgBgLIAAgFQgIADgQACg");
	this.shape_37.setTransform(193.7,3.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAWBAIAAg7QgBgKgFgFQgEgGgKAAQgFAAgGAEQgGADgDAHQgDAEAAALIAAAzIgPAAIAAh/IAPAAIAAAuQAMgMAOAAQALAAAHADQAIAEADAIQAEAHgBAMIAAA7g");
	this.shape_38.setTransform(183.7,1.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_39.setTransform(169.1,3.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_40.setTransform(162.3,1.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAGAAQAHAAAJAFIgGAPQgFgEgGAAQgFAAgDADQgEADgCAGQgCAIAAAKIAAAvg");
	this.shape_41.setTransform(157.4,3.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQAMAMgBAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_42.setTransform(148.7,3.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_43.setTransform(141.7,1.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQADgKAEgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgGADgJAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_44.setTransform(134.7,3.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgeAkQgLgNAAgXQAAgVALgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgLAAQgJAAgIAHg");
	this.shape_45.setTransform(119.7,3.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_46.setTransform(109.7,3.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgHBAIAAhbIAOAAIAABbgAgHgtIAAgSIAOAAIAAASg");
	this.shape_47.setTransform(102.7,1.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgaA7QgLgIABgPIAPACQABAHAEAEQAGAEAKAAQAJAAAHgEQAFgFADgIQABgEAAgQQgLAMgOAAQgTAAgKgOQgLgOAAgRQAAgNAFgMQAFgLAJgGQAKgGALAAQAQAAAKANIAAgLIAPAAIAABPQAAAVgFAKQgFAJgJAFQgKAFgMAAQgQAAgKgHgAgQgrQgIAIAAARQAAASAIAHQAHAIAJAAQALAAAHgIQAIgHAAgSQAAgRgIgIQgIgJgKAAQgJAAgHAJg");
	this.shape_48.setTransform(95.4,5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_49.setTransform(85.7,3.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_50.setTransform(75.7,3.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_51.setTransform(63.7,1.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQAMAAAHADQAHACADAFQAEAEACAGIABAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgQACg");
	this.shape_52.setTransform(56.7,3.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_53.setTransform(46.7,3.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_54.setTransform(36.7,3.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgHBAIAAhbIAPAAIAABbgAgHgtIAAgSIAPAAIAAASg");
	this.shape_55.setTransform(29.7,1.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_56.setTransform(25.3,1.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgHBAIAAhbIAPAAIAABbgAgHgtIAAgSIAPAAIAAASg");
	this.shape_57.setTransform(20.7,1.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgLAAgPQAAgNAFgKQAFgLAJgHQAJgFALAAQAHgBAHAEQAGAEAEAFIAAguIAQAAIAAB/IgPAAIAAgMQgIAOgRAAQgKAAgJgGgAgQgJQgGAJAAAQQgBASAIAJQAIAJAIAAQAKAAAHgJQAIgIgBgSQABgRgIgJQgHgJgLAAQgIAAgIAJg");
	this.shape_58.setTransform(13.4,1.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgLAAgPQAAgNAFgKQAFgLAJgHQAJgFALAAQAHgBAHAEQAGAEAEAFIAAguIAQAAIAAB/IgPAAIAAgMQgJAOgQAAQgKAAgJgGgAgQgJQgGAJAAAQQgBASAIAJQAHAJAJAAQAKAAAHgJQAIgIgBgSQABgRgIgJQgHgJgLAAQgIAAgIAJg");
	this.shape_59.setTransform(3.4,1.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQAMAAAHADQAHACADAFQAEAEACAGIABAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgQACg");
	this.shape_60.setTransform(-6.3,3.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_61.setTransform(-21.3,3.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AASAuIgPg2IgDgQIgRBGIgRAAIgchbIAQAAIAOA0IAGAUIAFgTIAPg1IAOAAIAOA0IAFASIAFgSIAQg0IAPAAIgcBbg");
	this.shape_62.setTransform(-32.8,3.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgHBAIAAhvIgrAAIAAgQIBlAAIAAAQIgrAAIAABvg");
	this.shape_63.setTransform(-43.8,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.6,-10.4,705.8,24.1);


// stage content:
(lib.dif04ep14 = function(mode,startPosition,loop) {
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
	this.frame_170 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(170).call(this.frame_170).wait(1));

	// prot
	this.prot = new lib.prot();
	this.prot.setTransform(500,275,1,1,0,0,0,500,275);

	this.timeline.addTween(cjs.Tween.get(this.prot).wait(171));

	// t1
	this.instance = new lib.point_1("synched",0);
	this.instance.setTransform(213.1,406.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({_off:false},0).to({alpha:1},5).wait(112));

	// pullout
	this.instance_1 = new lib.B787SynopticENGINEAllPositionscopy2("synched",0);
	this.instance_1.setTransform(278.6,399.8,1,1,0,0,0,0,206.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({_off:false},0).to({alpha:1},5).wait(117));

	// pullout
	this.instance_2 = new lib.B787SynopticENGINEAllPositionscopy("synched",0);
	this.instance_2.setTransform(471.6,180.8,0.5,0.5,0,0,0,0,206.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({regY:206.4,scaleX:1,scaleY:1,x:278.6,y:399.8,alpha:1},5).wait(30).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(116));

	// hl
	this.instance_3 = new lib.hl("synched",0);
	this.instance_3.setTransform(583.3,104.3,1,1,0,0,0,64.3,61.3);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},5).wait(9).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(151));

	// screen
	this.instance_4 = new lib.B787SynopticENGINEAllPositions("synched",0);
	this.instance_4.setTransform(351.2,264.5,1.054,1.054,0,0,0,0,206.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(151));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(500,275,1000,550);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;