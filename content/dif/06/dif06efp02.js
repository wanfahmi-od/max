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
		{src:"images/efb01p01_40.png", id:"efb01p01_40"},
		{src:"images/efb01p02_80.png", id:"efb01p02_80"},
		{src:"images/note_regular.png", id:"note_regular"},
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



(lib.efb01p01_40 = function() {
	this.initialize(img.efb01p01_40);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1282,1304);


(lib.efb01p02_80 = function() {
	this.initialize(img.efb01p02_80);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1282,1304);


(lib.note_regular = function() {
	this.initialize(img.note_regular);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,127,117);


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


(lib.notebox2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGAHIAAgNIANAAIAAANg");
	this.shape.setTransform(735.4,41.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_1.setTransform(729.1,38);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_2.setTransform(721.1,38);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgUAnIAAhMIAMAAIAAAMQAFgIADgDQADgCAEAAQAHAAAHAEIgFAMQgFgDgEAAQgFAAgCADQgDADgBAEQgCAHAAAIIAAAng");
	this.shape_3.setTransform(715.5,37.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgQAlQgGgDgDgEQgDgEgBgGIgBgMIAAgvIAOAAIAAAqIAAAOQACAFAEADQADADAHAAQADAAAGgDQAEgDADgFQACgGAAgJIAAgpIANAAIAABMIgMAAIAAgLQgJANgOAAQgGAAgGgCg");
	this.shape_4.setTransform(708.2,38.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgZAeQgKgLAAgTQAAgUAMgLQAKgIANAAQAQAAAKAKQAKALAAASQAAANgFAJQgEAIgIAFQgKAFgJAAQgPAAgKgKgAgPgVQgGAHgBAOQABAOAGAIQAHAHAIAAQAJAAAHgHQAGgIAAgOQAAgOgGgHQgHgHgJAAQgIAAgHAHg");
	this.shape_5.setTransform(699.9,38);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgXAeQgJgLAAgTQAAgLAEgJQAEgKAJgFQAIgEAIAAQANAAAIAGQAIAHACALIgNACQgCgIgEgDQgFgEgGAAQgIAAgHAHQgGAHAAAOQAAAPAGAHQAGAHAIAAQAIAAAFgFQAFgEABgKIANABQgCAOgIAHQgJAIgNAAQgOAAgKgKg");
	this.shape_6.setTransform(692.2,38);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_7.setTransform(680.3,38);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_8.setTransform(674.9,36.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AASA1IAAgxQAAgIgEgEQgEgFgJAAQgDAAgFADQgGADgCAFQgCAEAAAJIAAAqIgNAAIAAhpIANAAIAAAmQAJgKAMAAQAJAAAGADQAHAEACAGQADAGAAAJIAAAxg");
	this.shape_9.setTransform(669.1,36.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgBAzQgEgDgBgEQgBgEAAgMIAAgqIgLAAIAAgLIALAAIAAgTIAKgIIAAAbIANAAIAAALIgNAAIAAAsIABAGIACAEIAFAAIAFAAIADALIgKABQgHAAgDgBg");
	this.shape_10.setTransform(662.9,36.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgKA2IAAhCIgLAAIAAgKIALAAIAAgIQAAgIACgDQACgGAEgDQADgDAJAAIAMABIgCAMIgIgBQgGAAgCACQgDADAAAHIAAAHIAQAAIAAAKIgQAAIAABCg");
	this.shape_11.setTransform(654.9,36.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgZAeQgKgLAAgTQAAgUAMgLQAKgIANAAQAPAAALAKQAKALAAASQAAANgFAJQgEAIgIAFQgJAFgKAAQgPAAgKgKgAgPgVQgHAHAAAOQAAAOAHAIQAHAHAIAAQAKAAAGgHQAHgIgBgOQABgOgHgHQgHgHgJAAQgIAAgHAHg");
	this.shape_12.setTransform(648.3,38);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AASAnIAAgtQAAgIgBgEQgCgEgEgCQgEgDgGAAQgFAAgHAFQgGAGAAAPIAAAoIgNAAIAAhMIAMAAIAAAMQAJgNANAAQAHAAAHACQAFADAEAEQACAEABAGIABAMIAAAug");
	this.shape_13.setTransform(635.8,37.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgZAeQgKgLAAgTQAAgUAMgLQAKgIANAAQAPAAALAKQAKALAAASQAAANgEAJQgFAIgJAFQgIAFgKAAQgPAAgKgKgAgPgVQgHAHABAOQgBAOAHAIQAGAHAJAAQAKAAAGgHQAHgIAAgOQAAgOgHgHQgHgHgJAAQgJAAgGAHg");
	this.shape_14.setTransform(627.4,38);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_15.setTransform(621.6,36.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgBAzQgEgDgBgEQgBgEAAgMIAAgqIgLAAIAAgLIALAAIAAgTIAKgIIAAAbIANAAIAAALIgNAAIAAAsIABAGIACAEIAFAAIAFAAIADALIgKABQgHAAgDgBg");
	this.shape_16.setTransform(617.9,36.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgXAeQgJgLAAgTQAAgLAEgJQAEgKAJgFQAIgEAIAAQANAAAIAGQAIAHACALIgNACQgCgIgEgDQgFgEgGAAQgIAAgHAHQgGAHAAAOQAAAPAGAHQAGAHAIAAQAIAAAFgFQAFgEABgKIANABQgCAOgIAHQgJAIgNAAQgOAAgKgKg");
	this.shape_17.setTransform(612.2,38);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_18.setTransform(604,38);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_19.setTransform(596.1,38);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAEAMQADgCACgDIADgHIgHAAIAAgQIANAAIAAAMQAAAIgCAEQgDAGgHADgAgSAMQAEgCADgDQABgEABgDIgHAAIAAgQIAOAAIAAAMQAAAIgCAEQgEAGgGADg");
	this.shape_20.setTransform(585.7,32.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_21.setTransform(579.4,38);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAnAnIAAgvIgBgLQgCgEgDgCQgDgCgFAAQgIAAgGAGQgFAFAAAMIAAArIgLAAIAAgwQAAgJgDgEQgEgFgHAAQgFAAgFADQgFADgCAGQgCAFAAAKIAAAnIgNAAIAAhMIALAAIAAALQAEgFAGgEQAGgDAIAAQAJAAAFADQAEAEACAGQAJgNAPAAQAMAAAGAGQAGAHAAANIAAAzg");
	this.shape_22.setTransform(569.5,37.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_23.setTransform(559,38);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgBAzQgDgDgCgEQgCgEAAgMIAAgqIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIAMAAIAAALIgMAAIAAAsIAAAGIACAEIAFAAIAFAAIACALIgKABQgHAAgCgBg");
	this.shape_24.setTransform(552.9,36.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_25.setTransform(546.9,38);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgbA1IgBgNIAHACQAEAAADgCQACgBACgDIAEgKIABgDIgdhMIAOAAIAQAtIAEAQQACgIAEgIIAQgtIANAAIgdBNQgFANgBAFQgDAGgFADQgFADgFAAIgJgBg");
	this.shape_26.setTransform(539.6,39.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgUAyQgKgDgFgJQgGgJAAgKIANgBQABAIAEAEQADAFAIAEQAHADAHAAQAIAAAGgCQAHgDADgEQADgEAAgFQAAgFgDgEQgDgDgHgDIgRgGQgPgDgGgBQgHgFgEgFQgEgGAAgHQAAgJAFgHQAEgHAJgDQAJgEAKAAQALAAAJAEQAJADAFAIQAFAIAAAJIgNABQgBgKgHgGQgGgEgMAAQgLgBgGAFQgGAFAAAHQAAAFAEAEQAEADAPAEQASAFAGACQAKADAEAGQAEAHAAAIQAAAJgEAIQgFAIgKADQgJAFgLAAQgNAAgKgFg");
	this.shape_27.setTransform(530.7,36.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgUAnIAAhMIAMAAIAAAMQAFgIADgDQADgCAEAAQAHAAAHAEIgFAMQgFgDgEAAQgFAAgCADQgDADgBAEQgCAHAAAIIAAAng");
	this.shape_28.setTransform(519.7,37.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_29.setTransform(512.4,38);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AASA1IAAgxQAAgIgEgEQgFgFgHAAQgEAAgFADQgGADgBAFQgDAEAAAJIAAAqIgNAAIAAhpIANAAIAAAmQAKgKALAAQAJAAAHADQAGAEADAGQACAGAAAJIAAAxg");
	this.shape_30.setTransform(504.1,36.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgBAzQgDgDgCgEQgBgEgBgMIAAgqIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIAMAAIAAALIgMAAIAAAsIAAAGIADAEIAEAAIAFAAIACALIgKABQgGAAgDgBg");
	this.shape_31.setTransform(497.9,36.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgaAwQgMgIgGgMQgGgNAAgOQAAgZAOgPQAPgPAVAAQAOAAAMAHQAMAHAGANQAHANAAAOQAAAQgHANQgGANgNAGQgMAHgNAAQgOAAgMgHgAgYgfQgLAKAAAWQAAAUAKALQALALAOAAQAPAAALgLQAKgMAAgUQAAgLgEgKQgFgKgIgFQgJgGgKAAQgOAAgKALg");
	this.shape_32.setTransform(490,36.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAEARIAAgMQAAgIACgFQACgFAIgDIACAFQgDACgCADQgCADgBAFIAHAAIAAAPgAgSARIAAgMQABgIACgFQADgFAGgDIAEAFQgEACgCADQgCADAAAFIAHAAIAAAPg");
	this.shape_33.setTransform(481.6,32.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_34.setTransform(470.7,38);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AASA1IAAgxQAAgIgEgEQgEgFgIAAQgEAAgFADQgGADgCAFQgCAEAAAJIAAAqIgNAAIAAhpIANAAIAAAmQAJgKAMAAQAJAAAGADQAGAEADAGQADAGAAAJIAAAxg");
	this.shape_35.setTransform(462.4,36.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgBAzQgEgDgBgEQgCgEAAgMIAAgqIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIAMAAIAAALIgMAAIAAAsIAAAGIACAEIAFAAIAFAAIADALIgLABQgGAAgDgBg");
	this.shape_36.setTransform(456.3,36.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgUAnIAAhMIAMAAIAAAMQAFgIADgDQADgCAEAAQAHAAAHAEIgFAMQgFgDgEAAQgFAAgCADQgDADgBAEQgCAHAAAIIAAAng");
	this.shape_37.setTransform(448,37.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_38.setTransform(440.7,38);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgEgKAAgMQAAgLAEgIQAEgJAHgFQAIgFAJAAQAGAAAFADQAGADADAEIAAgmIANAAIAABpIgMAAIAAgKQgHAMgOAAQgIAAgIgFgAgNgHQgGAHAAANQAAAPAHAIQAGAHAHAAQAIAAAGgHQAGgHAAgOQAAgPgGgHQgGgHgJAAQgHAAgGAHg");
	this.shape_39.setTransform(432.1,36.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AASAnIAAgtQAAgIgBgEQgCgEgEgCQgEgDgFAAQgHAAgGAFQgGAGAAAPIAAAoIgNAAIAAhMIAMAAIAAAMQAJgNANAAQAIAAAGACQAFADAEAEQACAEABAGIABAMIAAAug");
	this.shape_40.setTransform(424.1,37.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgQAlQgGgDgDgEQgDgEgBgGIgBgMIAAgvIANAAIAAAqIABAOQACAFADADQAFADAFAAQAFAAAEgDQAFgDADgFQACgGAAgJIAAgpIANAAIAABMIgLAAIAAgLQgKANgNAAQgHAAgGgCg");
	this.shape_41.setTransform(415.7,38.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgEgKAAgMQAAgLAEgIQAEgJAHgFQAIgFAJAAQAGAAAFADQAGADADAEIAAgmIANAAIAABpIgMAAIAAgKQgHAMgOAAQgIAAgIgFgAgNgHQgGAHAAANQAAAPAHAIQAGAHAHAAQAIAAAGgHQAGgHAAgOQAAgPgGgHQgGgHgJAAQgHAAgGAHg");
	this.shape_42.setTransform(402.9,36.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_43.setTransform(394.8,38);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_44.setTransform(386.9,38);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_45.setTransform(379.4,38);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgQAlQgGgDgDgEQgDgEgBgGIgBgMIAAgvIANAAIAAAqIABAOQACAFAEADQAEADAFAAQAEAAAFgDQAFgDADgFQACgGAAgJIAAgpIANAAIAABMIgMAAIAAgLQgIANgOAAQgHAAgGgCg");
	this.shape_46.setTransform(371.5,38.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgXAeQgJgLAAgTQAAgLAEgJQAEgKAJgFQAIgEAIAAQANAAAIAGQAIAHACALIgNACQgCgIgEgDQgFgEgGAAQgIAAgHAHQgGAHAAAOQAAAPAGAHQAGAHAIAAQAIAAAFgFQAFgEABgKIANABQgCAOgIAHQgJAIgNAAQgOAAgKgKg");
	this.shape_47.setTransform(363.8,38);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_48.setTransform(356,38);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_49.setTransform(350.7,36.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgEgKAAgMQAAgLAEgIQAEgJAHgFQAIgFAJAAQAGAAAFADQAGADADAEIAAgmIANAAIAABpIgMAAIAAgKQgHAMgOAAQgIAAgIgFgAgNgHQgGAHAAANQAAAPAHAIQAGAHAHAAQAIAAAGgHQAGgHAAgOQAAgPgGgHQgGgHgJAAQgHAAgGAHg");
	this.shape_50.setTransform(344.5,36.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_51.setTransform(332.7,38);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_52.setTransform(327.3,36.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAnAnIAAgvIgBgLQgCgEgDgCQgDgCgFAAQgIAAgGAGQgFAFAAAMIAAArIgLAAIAAgwQAAgJgDgEQgEgFgHAAQgFAAgFADQgFADgCAGQgCAFAAAKIAAAnIgNAAIAAhMIALAAIAAALQAEgFAGgEQAGgDAIAAQAJAAAFADQAEAEACAGQAJgNAPAAQAMAAAGAGQAGAHAAANIAAAzg");
	this.shape_53.setTransform(315.3,37.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_54.setTransform(304.8,38);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgBAzQgDgDgCgEQgCgEAAgMIAAgqIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIAMAAIAAALIgMAAIAAAsIAAAGIACAEIAFAAIAFAAIACALIgKABQgHAAgCgBg");
	this.shape_55.setTransform(298.7,36.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_56.setTransform(292.7,38);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgbA1IgBgNIAHACQAEAAADgCQACgBACgDIAEgKIABgDIgdhMIAOAAIAQAtIAEAQQACgIAEgIIAQgtIANAAIgdBNQgFANgBAFQgDAGgFADQgFADgFAAIgJgBg");
	this.shape_57.setTransform(285.3,39.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_58.setTransform(277.7,38);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgrA1IAAhpIAlAAQAKAAAHABQAJADAHAFQAIAHAEALQAFAMAAANQAAALgDAKQgDAJgEAGQgFAGgFAEQgGAEgHABQgHACgIAAgAgcApIAWAAQAJAAAGgCQAGgCADgEQAFgFADgJQADgIAAgLQAAgQgFgJQgGgJgIgDQgGgCgKAAIgWAAg");
	this.shape_59.setTransform(264.6,36.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgUAyQgKgDgFgJQgGgJAAgKIANgBQABAIAEAEQADAFAIAEQAHADAHAAQAIAAAGgCQAHgDADgEQADgEAAgFQAAgFgDgEQgDgDgHgDIgRgGQgPgDgGgBQgHgFgEgFQgEgGAAgHQAAgJAFgHQAEgHAJgDQAJgEAKAAQALAAAJAEQAJADAFAIQAFAIAAAJIgNABQgBgKgHgGQgGgEgMAAQgLgBgGAFQgGAFAAAHQAAAFAEAEQAEADAPAEQASAFAGACQAKADAEAGQAEAHAAAIQAAAJgEAIQgFAIgKADQgJAFgLAAQgNAAgKgFg");
	this.shape_60.setTransform(253.9,36.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgGA1IgqhpIAQAAIAcBMIAEARIAFgRIAdhMIAPAAIgqBpg");
	this.shape_61.setTransform(244,36.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_62.setTransform(230.6,38);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AASA1IAAgxQAAgIgEgEQgEgFgJAAQgDAAgGADQgEADgDAFQgCAEAAAJIAAAqIgNAAIAAhpIANAAIAAAmQAKgKAMAAQAIAAAGADQAHAEACAGQADAGAAAJIAAAxg");
	this.shape_63.setTransform(222.3,36.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgBAzQgEgDgBgEQgBgEAAgMIAAgqIgKAAIAAgLIAKAAIAAgTIAKgIIAAAbIAOAAIAAALIgOAAIAAAsIABAGIACAEIAFAAIAGAAIACALIgKABQgHAAgDgBg");
	this.shape_64.setTransform(216.2,36.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgKA2IAAhCIgLAAIAAgKIALAAIAAgIQAAgIACgDQACgGAEgDQADgDAJAAIAMABIgCAMIgIgBQgGAAgCACQgDADAAAHIAAAHIAQAAIAAAKIgQAAIAABCg");
	this.shape_65.setTransform(208.1,36.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgZAeQgKgLAAgTQAAgUAMgLQAKgIANAAQAPAAALAKQAKALAAASQAAANgFAJQgEAIgJAFQgJAFgJAAQgPAAgKgKgAgPgVQgHAHAAAOQAAAOAHAIQAGAHAJAAQAKAAAGgHQAHgIgBgOQABgOgHgHQgHgHgJAAQgJAAgGAHg");
	this.shape_66.setTransform(201.5,38);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AASAnIAAgtQAAgIgBgEQgCgEgEgCQgEgDgGAAQgFAAgHAFQgGAGAAAPIAAAoIgNAAIAAhMIAMAAIAAAMQAIgNAPAAQAHAAAGACQAFADADAEQADAEABAGIABAMIAAAug");
	this.shape_67.setTransform(189,37.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgZAeQgKgLAAgTQAAgUAMgLQAKgIANAAQAPAAAKAKQALALAAASQAAANgEAJQgFAIgJAFQgIAFgKAAQgPAAgKgKgAgPgVQgHAHABAOQgBAOAHAIQAGAHAJAAQAJAAAHgHQAGgIABgOQgBgOgGgHQgHgHgJAAQgJAAgGAHg");
	this.shape_68.setTransform(180.7,38);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_69.setTransform(174.8,36.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgBAzQgEgDgBgEQgBgEAAgMIAAgqIgKAAIAAgLIAKAAIAAgTIAKgIIAAAbIAOAAIAAALIgOAAIAAAsIABAGIACAEIAFAAIAGAAIACALIgKABQgHAAgDgBg");
	this.shape_70.setTransform(171.2,36.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AggA2IAAhqIAMAAIAAALQAEgGAFgDQAGgDAFAAQAKAAAIAFQAHAFAEAJQAEAKAAALQAAAMgEAHQgEAKgJAFQgIAFgIAAQgFAAgGgDQgFgDgDgEIAAAmgAgOgjQgGAIAAAPQAAANAGAHQAGAHAIAAQAHAAAGgHQAHgIAAgNQAAgPgGgIQgHgHgHAAQgHAAgHAIg");
	this.shape_71.setTransform(165,39.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_72.setTransform(159,36.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgUAnIAAhMIAMAAIAAAMQAFgIADgDQADgCAEAAQAHAAAHAEIgFAMQgFgDgEAAQgFAAgCADQgDADgBAEQgCAHAAAIIAAAng");
	this.shape_73.setTransform(155.4,37.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgXAeQgJgLAAgTQAAgLAEgJQAEgKAJgFQAIgEAIAAQANAAAIAGQAIAHACALIgNACQgCgIgEgDQgFgEgGAAQgIAAgHAHQgGAHAAAOQAAAPAGAHQAGAHAIAAQAIAAAFgFQAFgEABgKIANABQgCAOgIAHQgJAIgNAAQgOAAgKgKg");
	this.shape_74.setTransform(148.8,38);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_75.setTransform(141,38);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_76.setTransform(133.1,38);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgEgKAAgMQAAgLAEgIQAEgJAHgFQAIgFAJAAQAGAAAFADQAGADADAEIAAgmIANAAIAABpIgMAAIAAgKQgHAMgOAAQgIAAgIgFgAgNgHQgGAHAAANQAAAPAHAIQAGAHAHAAQAIAAAGgHQAGgHAAgOQAAgPgGgHQgGgHgJAAQgHAAgGAHg");
	this.shape_77.setTransform(124.5,36.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgEgKAAgMQAAgLAEgIQAEgJAHgFQAIgFAJAAQAGAAAFADQAGADADAEIAAgmIANAAIAABpIgMAAIAAgKQgHAMgOAAQgIAAgIgFgAgNgHQgGAHAAANQAAAPAHAIQAGAHAHAAQAIAAAGgHQAGgHAAgOQAAgPgGgHQgGgHgJAAQgHAAgGAHg");
	this.shape_78.setTransform(112,36.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_79.setTransform(103.9,38);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_80.setTransform(98,36.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_81.setTransform(94.7,36.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgbAiQgHgHAAgJQAAgGACgFQADgEAEgDQAEgBAGgCIALgCQAOgBAIgDIAAgEQAAgIgEgDQgFgEgJAAQgIAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAIAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAAQQAAASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgFADgIAAQgNAAgGgGgAgCAEIgLADQgEABgBADQgCADAAADQAAAGAEADQAEAEAHAAQAGAAAGgEQAGgDADgGQACgEAAgJIAAgEQgHACgNACg");
	this.shape_82.setTransform(88.8,38);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AAAAzQgFgDgBgEQgCgEABgMIAAgqIgKAAIAAgLIAKAAIAAgTIAKgIIAAAbIAOAAIAAALIgOAAIAAAsIABAGIADAEIAEAAIAGAAIABALIgJABQgIAAgBgBg");
	this.shape_83.setTransform(82.7,36.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_84.setTransform(76.3,38);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgEgKAAgMQAAgLAEgIQAEgJAHgFQAIgFAJAAQAGAAAFADQAGADADAEIAAgmIANAAIAABpIgMAAIAAgKQgHAMgOAAQgIAAgIgFgAgNgHQgGAHAAANQAAAPAHAIQAGAHAHAAQAIAAAGgHQAGgHAAgOQAAgPgGgHQgGgHgJAAQgHAAgGAHg");
	this.shape_85.setTransform(67.7,36.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AAhA1IgMggIgrAAIgMAgIgPAAIAphpIAOAAIAsBpgAgGgUIgMAdIAiAAIgLgcIgFgWQgCAKgEALg");
	this.shape_86.setTransform(55.6,36.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bitmap
	this.instance = new lib.note_regular();
	this.instance.setTransform(-4,12.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,12.8,745,58.5);


(lib.MCP_vertspeed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#69746F","#E9EBEA","#717D78"],[0,0.51,1],8.8,36.4,8.8,-36.3).s().p("ABRFrIAArVIANAAIAALVgAhdFrIAArVIANAAIAALVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#BCC2C0").ss(1,0,0,3).p("AhdgxIC7AAAhdhjIC7AAAhdhKIC7AAAhdldIC7AAAhdj5IC7AAAhdjgIC7AAAhdjHIC7AAAhdFeIC7AAAhdD6IC7AAAhdDIIC7AAAhdDhIC7AAAhdBjIC7AAAhdBKIC7AAAhdAxIC7AA");
	this.shape_1.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#A6AEAC","#C5CCCC","#A6AEAC"],[0,0.518,1],0,-2.6,0,2.6).s().p("AhdAZIAAgxIC7AAIAAAxg");
	this.shape_2.setTransform(0,30);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#A6AEAC","#C5CCCC","#A6AEAC"],[0,0.518,1],0,-2.6,0,2.6).s().p("AhdAZIAAgxIC7AAIAAAxg");
	this.shape_3.setTransform(0,15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#A6AEAC","#C5CCCC","#A6AEAC"],[0,0.518,1],0,-2.6,0,2.6).s().p("AhdAZIAAgxIC7AAIAAAxg");
	this.shape_4.setTransform(0,-30);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#A6AEAC","#C5CCCC","#A6AEAC"],[0,0.518,1],0,-2.6,0,2.6).s().p("AhdAZIAAgxIC7AAIAAAxg");
	this.shape_5.setTransform(0,-15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#A6AEAC","#C5CCCC","#A6AEAC"],[0,0.518,1],0,-2.6,0,2.6).s().p("AhdAZIAAgxIC7AAIAAAxg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 4
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#7D8A86","#C5CCCC","#D2D7D7","#C5CCCC","#828E8A"],[0,0.243,0.51,0.808,1],0,36.4,0,-36.3).s().p("AhdFrIAArVIC7AAIAALVg");

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.4,-36.3,20.9,72.7);


(lib.MCP_pbbase = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#222222","#111111"],[0,1],-5.3,6.2,-6.3,5.1).s().p("AidCmQgKAAAAgKIAAk3QAAgKAKAAIE6AAQAKAAAAAKIAAE3QAAAKgKAAgAieiTIAAEmQAAAKAKAAIEmAAQALAAgBgKIAAkmQABgKgLAAIkmAAQgKAAAAAKg");
	this.shape.setTransform(17.8,17.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#404040").s().p("AiTCeQgKgBAAgJIAAkmQAAgKAKAAIEnAAQAKAAAAAKIAAEmQAAAJgKABg");
	this.shape_1.setTransform(17.7,17.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1A1A1A").s().p("AioCuQgFAAAAgFIAAlRQAAgFAFAAIFRAAQAFAAAAAFIAAFRQAAAFgFAAgAilibIAAE3QAAAKAKAAIE6AAQAKAAAAgKIAAk3QAAgKgKAAIk6AAQgKAAAAAKg");
	this.shape_2.setTransform(17.7,17.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#2F2F2F","#111111"],[0,1],-98.8,95.8,-98.1,96.6).s().p("AjCDSQgPAAAAgPIAAmFQAAgPAPAAIGFAAQAPAAAAAPIAAGFQAAAPgPAAgAjHjCIAAGFQAAAFAFAAIGFAAQAFAAAAgFIAAmFQAAgFgFAAImFAAQgFAAAAAFgAipC4QgOAAAAgOIAAlTQAAgOAOAAIFUAAQANABAAANIAAFTQAAANgNABgAitioIAAFRQAAAFAFAAIFRAAQAFAAAAgFIAAlRQAAgFgFAAIlRAAQgFAAAAAFg");
	this.shape_3.setTransform(17.7,17.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1E1E1E").s().p("AjCDIQgFAAAAgFIAAmFQAAgFAFAAIGFAAQAFAAAAAFIAAGFQAAAFgFAAgAi8irIAAFWQAAASARAAIFWAAQASAAAAgSIAAlWQAAgRgSAAIlWAAQgRAAAAARgAC4CqIAAABQAAANgNAAQANgBAAgNgAirC4QgMAAAAgNIAAgBQAAAOAOAAgACri3QANAAAAAMIAAACQAAgNgNgBgAi3irQAAgMAMAAIACAAQgOAAAAAOg");
	this.shape_4.setTransform(17.7,17.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#222222","#111111"],[0,1],0.8,0.8,-0.7,-0.7).s().p("Ai8CrIAAlWQAAgRARAAIFWAAQASAAAAARIAAFWQAAASgSAAIlWAAIAAAAQgRAAAAgSgAi3irIAAACIAAFTIAAABQAAANAMAAIACAAIFUAAQANAAAAgNIAAgBIAAlTIAAgCQAAgMgNAAIlUAAIgCAAQgMAAAAAMg");
	this.shape_5.setTransform(17.7,17.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#7E8D9A","#475863"],[0,1],-9.4,10.8,-11.2,8.9).s().p("AjXDmQgRAAAAgRIAAmpQAAgRARAAIGuAAQASAAAAARIAAGpQAAARgSAAgAjZjUIAAGpQAAAAAAABQAAAAABABQAAAAAAAAQABAAAAAAIGuAAQABAAABAAQAAAAAAAAQABgBAAAAQAAgBAAAAIAAmpQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBAAgBAAImuAAQAAAAgBAAQAAAAAAAAQgBABAAAAQAAABAAAAg");
	this.shape_6.setTransform(17.5,17.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AjXDXQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAmpQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIGuAAQABAAABAAQAAAAAAAAQABABAAAAQAAABAAAAIAAGpQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAgBAAgAjQjBIAAGGQABAPAPAAIGFAAQAPAAAAgPIAAmGQAAgPgPAAImFAAQgPAAgBAPg");
	this.shape_7.setTransform(17.5,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.8,-5.5,46.7,46.2);


(lib.MCP_headingknob = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#E0E2E1","#D9DDDD"],[0.69,0.784],-0.2,-0.3,0,-0.2,-0.3,22.4).s().p("AAAC6IAAAAQgHgJgIABQgGAAgGAFIgIgBQgGgNgJABQgGAAgGAEIgHgCQgDgPgNAAQgFAAgFACIgGgFQgCgUgRABIgFABIgFgEQAFgVgXgCIgBAAIgDgFQAKgXgYgDIgCAAIgCgGQAKgTgTgKIgCgHQAQgPgUgPIAAgGQATgLgQgRIABgHQAWgJgNgVIABgFQAXgGgJgWIAEgEIADAAQATgBgDgWIAEgFIAFAAQAQABACgVIAGgEQAGACAFAAQANgBAEgQIAEgCQAGAEAFAAQALAAAHgNIAHgBQAHAFAIAAQAHAAAHgJIAEAAIABAAQAHAKAIAAQAHABAIgIIAHACQAFAMAKAAQAFAAAJgEIAFACQACAPANABQAFAAAHgCIAGAEQAAASARAAIAFAAIAEAEIACACQgEAWASABIAFAAIAEAFQgHAUAUAGIABAAIADAHQgIATAQAIIACAIQgPAPASAMIAAAFIAAABQgTANAQAQIgBAIQgTAJALASIgDAHQgXAFAKAVIgFAHIAAAAQgVACAEATIgFAFIgCACIgCAAQgRABgBARIgJAFIgEAAQgQAAgCANIgJADQgGgCgEABQgJAAgGAJIgJACQgIgGgHABQgHAAgGAJIgHAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C5CAC9").s().p("AAHC+IgHAAIAAAAIgBAAIgCgBQgFgHgGABIgBAAQgEAAgFAFIgCABIgBgBIgIAAIgDgBIgCgCQgEgKgGAAIAAAAQgFAAgFAEIgCABIgBAAIgHgCIgCgBIgBgDQgDgLgJgBQgEAAgEACIgDAAIgCgBIgGgEIgCgBIgBgDQAAgIgDgEQgDgDgGABIgBAAIgEAAIgCABIgCgCIgFgFIgCgBIABgDQABgHgCgFQgFgDgIgBIgDAAIgBgCIgFgGIgBgCIABgDQAEgJgCgEQgDgFgIgCIgFAAIgBgDIgDgFIgBgCIABgCQAFgIgCgFQgCgGgIgEIgCgBIAAgCIgCgHIgBgCIADgCQAGgGgBgFQAAgGgJgGIgBgCIAAgCIAAgGIAAAAIABgCQAIgFABgGQAAgGgHgGIgBgBIAAgCQAAgFABgDIABgCIACgCQAIgDACgGQACgFgGgIIgBgCIAAgCIACgFIABgCIADgBQAIgDADgFQADgFgDgJIgBgCIABgCIADgFIACgCIADAAIADAAQAGAAADgFQADgEgBgJIAAgCIABgBIAEgGIACgBIADAAIAEABIABAAQAKgBACgQIABgBIACgCIAFgEIADgCIACABIAJACQAJgBACgMIABgCIACgBIAFgDIACgBIADACQAEADAEAAQAIAAAGgKIABgCIACgBIAIgCIACAAIACABQAFAFAGAAQAFgBAGgGIABgBIACAAIAEAAIABAAIACAAIACABQAFAIAGABQAGgBAFgGIACgBIADAAIAHACIADAAIABADQAEAJAGABQAFAAAGgFIACgBIADABIAFACIADABIAAADQABAKAKABQAEABAGgCIACAAIABABIAHAFIABABIAAACQABAMANABIAEAAIACAAIACACIAEADIABACIACACIAAADQgCAJACAEQADADAGABIAFAAIACAAIACACIAEAFIABACIAAADQgDAHADAFQACAFAIACIADACIAAABIAEAHIABACIgBADQgGANAMAHIACABIABACIABAIIAAACIgBADQgGAFAAAFQABAFAGAFIACABIAAACIAAAFIAAABIAAADIgCACQgHAFAAAFQAAAFAGAGIACABIgBAEIgBAGIAAAEIgCABQgIADgBAFQgCAFAFAGIABACIgBADIgDAHIgBADIgDAAQgIABgDAFQgCAFADAIIACACIgCADIgEAHIgCABIgDAAQgHABgDAEQgDAEABAHIABADIgDADIgEAEIgCABIgCACIgDAAQgOAAAAANIAAACIgCACIgJAGIgCABIgCgBIgDAAQgLAAgCAJIgBACIgCABIgJAFIgCAAIgCgBQgFgCgDABQgGAAgFAHIgBACIgCABIgKACIgCAAIgBgBQgHgGgEAAIgBAAQgFABgEAGIgCACgAAAC6IAAAAIAHAAQAGgJAHAAQAHgBAIAGIAJgCQAGgJAJAAQAEgBAGACIAJgDQACgNAQAAIAEAAIAJgFQABgRARgBIACAAIACgCIAFgFQgEgTAVgCIAAAAIAFgHQgKgVAXgFIADgHQgLgSATgJIABgIQgQgQATgNIAAgBIAAgFQgSgMAPgPIgCgIQgQgIAIgTIgDgHIgBAAQgUgGAHgUIgEgFIgFAAQgSgBAEgWIgCgCIgEgEIgFAAQgRAAAAgSIgGgEQgHACgFAAQgNgBgCgPIgFgCQgJAEgFAAQgKAAgFgMIgHgCQgIAIgHgBQgIAAgHgKIgBAAIgEAAQgHAJgHAAQgIAAgHgFIgHABQgHANgLAAQgFAAgGgEIgEACQgEAQgNABQgFAAgGgCIgGAEQgCAVgQgBIgFAAIgEAFQADAWgTABIgDAAIgEAEQAJAWgXAGIgBAFQANAVgWAJIgBAHQAQARgTALIAAAGQAUAPgQAPIACAHQATAKgKATIACAGIACAAQAYADgKAXIADAFIABAAQAXACgFAVIAFAEIAFgBQARgBACAUIAGAFQAFgCAFAAQANAAADAPIAHACQAGgEAGAAQAJgBAGANIAIABQAGgFAGAAIACAAQAHAAAGAIg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#D2D7D7","#D7DBDB","#DBDFDE","#C5CCCC"],[0.522,0.741,0.878,0.941],-2.2,-0.3,0,-2.2,-0.3,18.1).s().p("AgQC+IABABIAAAAIgBgBgAg1C8IAAAAIAAAAgAATC7IABAAIAAAAgAhYCxIAAABIAAAAgAh7CgIAAAAIABAAgAB1CFIABAAIAAAAIgBAAgACMBoIABgBIAAABIgBAAgACbhKIABAAIAAAAgACJhrIABAAIgBABgAiciEIABAAIgBAAgABxiIIABAAIAAABgAh+idIAAAAIAAABgABTifIABAAIAAAAgAheivIABABIgBAAIAAgBgAAyiwIABgBIAAABgAg6i7IAAABIAAAAIAAgBgAAPi8IAAABIgBAAIABgBgAgVi+IABAAIgBABIAAgBg");
	this.shape_2.setTransform(2.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer 4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E0E2E1").s().p("AgeCHIAAjdIAAgBIABAAIAdgvIAeAvIABAAIAAABIAADdg");
	this.shape_3.setTransform(0,-13.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C5CAC9").s().p("AgeAnIAAgOIAAgRIAeguIAfAuIAAARIAAAOIgBAAIgegtIgdAtIgBAAg");
	this.shape_4.setTransform(0,-26.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#BCC2C2","#C9CFCE","#B1BCBC"],[0.541,0.871,0.941],0.1,15.3,0,0.1,15.3,23.6).s().p("AgbBLQgKABAAgKIAAiKQATgDATAAQATAAASADIAACKQABAKgLgBg");
	this.shape_5.setTransform(-0.1,-15.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#949E9A").s().p("AABAFQgTAAgTADIAAgMQATgDASAAQAUAAASADIAAABIAAALQgSgDgTAAg");
	this.shape_6.setTransform(-0.1,-23.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#D2D7D7","#D7DBDB","#DBDFDE","#C5CCCC"],[0.522,0.741,0.878,0.941],0,-0.1,0,0,-0.1,23.6).s().p("AhDDZQgOgWgXAHQgegQgbgaQgZgagQgdQAHgZgWgMQgKghAAgjQAAgkAJggQAcgIgNgdQAQgfAagaQAagaAegQQAbAJAKgYQAOgEAQgDIAACLQAAAKAKAAIA3AAQALAAgBgKIAAiLQARACAPAFQAIAYAdgJQAeAQAZAaQAbAaAQAfQgHAZAWAMQAKAggBAkQAAAjgKAhQgUANAFAYQgQAegaAZQgaAageAQQgZgHgMAWQghAKgjAAQgjAAgggKg");
	this.shape_7.setTransform(0,0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A6AEAC").s().p("AiqCqQhHhHAAhjQAAhkBHhHQA5g5BLgLIAAANQgPADgPAEQgJAYgcgIQgdAQgaAZQgaAagQAfQANAdgcAIQgKAgAAAkQAAAjAKAhQAXAMgHAZQAPAeAaAZQAaAaAeAQQAXgHAOAWQAhAKAiAAQAkAAAggJQAMgXAZAHQAfgQAagaQAZgZAQgeQgFgXAVgOQAKghAAgjQAAgkgJggQgWgMAGgZQgQgfgagaQgagagegPQgdAIgIgYQgPgEgQgDIAAgNIAAgBQBMAMA5A5QBHBHAABkQAABjhHBHQhHBHhkAAQhjAAhHhHg");
	this.shape_8.setTransform(0,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.3,-30.5,48.5,54.9);


(lib.MCP_disengage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C5CCCC","#A6AEAC"],[0,1],0.6,-1.8,2,1.7).s().p("Am/DMQgKAAAAgKIAAmDQAAgKAKAAIN/AAQAKAAAAAKIAAGDQAAAKgKAAgAnAi5IAAFyQAAAKAKAAINrAAQAKAAAAgKIAAlyQAAgJgKgBItrAAQgKABAAAJg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D2D7D7").s().p("Am1DDQgKAAAAgKIAAlxQAAgKAKAAINrAAQAKAAAAAKIAAFxQAAAKgKAAg");
	this.shape_1.setTransform(-0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.8,-20.4,91.7,44.3);


(lib.MCP_atarmlight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Base
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#475863","#677D87"],[0,1],-1.3,-4,0.9,2.3).s().p("AhLAWQgIAAgFgGIgBgBQgFgGAAgJQAAgIAGgHQAFgGAIAAICXAAQAHAAAGAGIAAAAQAGAHAAAIQAAAJgGAGIAAABQgGAGgHAAgAhWgNQgFAGAAAHQAAAIAFAGIABABQAEAEAGAAICXAAQAGAAAEgEIABgBQAFgGAAgIQAAgHgFgGQgFgFgGAAIiXAAQgHAAgEAFg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#7E8D9A","#4E616D"],[0,1],0.5,1.8,-0.5,-1.8).s().p("AhLAkQgNAAgKgLQgJgKAAgPQAAgNAIgLIABAAQAKgLANAAICXAAQAOAAAJALIAAAAQAJALAAANQAAAOgJALIAAAAQgKALgNAAgAhYgPQgGAHAAAIQAAAJAFAGIABABQAFAGAIAAICXAAQAHAAAGgGIAAgBQAGgGAAgJQAAgIgGgHIAAAAQgGgGgHAAIiXAAQgIAAgFAGg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhLATQgGAAgEgEIgBgBQgFgGAAgIQAAgHAFgGQAEgFAHAAICXAAQAGAAAFAFQAFAGAAAHQAAAIgFAGIgBABQgEAEgGAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.9,-3.6,21.8,7.3);


(lib.MASTERWARNR_pbbase03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#2B2B2B","#111111"],[0,1],-1,-1.6,1.1,1.6).s().p("AnGE6QgKAAAAgLIAApdQAAgLAKAAIONAAQAKAAAAALIAAJdQAAALgKAAgAnFkkIAAJJQAAALAKgBIN3AAQAKABAAgLIAApJQAAgKgKAAIt3AAQgKAAAAAKg");
	this.shape.setTransform(47.9,4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1A1A1A").s().p("AAEEcIAAi0IGtAAIAACqQAAAKgKAAgAmmEcQgKAAAAgKIAAiqIGsAAIAAC0gAAEBeIAAi0IGtAAIAAC0gAmwBeIAAi0IGsAAIAAC0gAAEhhIAAi4IgIAAIAAC4ImsAAIAAivQAAgLAKABINNAAQAKgBAAALIAACvg");
	this.shape_1.setTransform(47.9,4.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1E1E1E").s().p("Am7EvQgKAAAAgKIAApJQAAgKAKAAIN3AAQAKAAAAAKIAAJJQAAAKgKAAgAAEEaIGjAAQAKAAAAgJIAAirImtAAgAmwERQAAAJAKAAIGiAAIAAi0ImsAAgAAEBcIGtAAIAAi0ImtAAgAmwBcIGsAAIAAi0ImsAAgAAEkbIAAC5IGtAAIAAiwQAAgKgKAAItNAAQgKAAAAAKIAACwIGsAAIAAi5g");
	this.shape_2.setTransform(47.9,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.3,-27,93.2,62.9);


(lib.MASTERWARNR_pbbase02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#BA7001","#A94401"],[0,1],0,0,0,0,0,34.6).s().p("AjoDuQgKAAAAgJIAAnJQAAgKAKAAIHRAAQAKAAAAAKIAAHJQAAAJgKAAg");
	this.shape.setTransform(28.9,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E1E1E").s().p("Aj9ECQgKAAAAgKIAAnvQAAgKAKAAIH7AAQAKAAAAAKIAAHvQAAAKgKAAgAjyjlIAAHJQAAAJAKAAIHRAAQAKAAAAgJIAAnJQAAgKgKAAInRAAQgKAAAAAKg");
	this.shape_1.setTransform(28.9,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#333333","#111111"],[0,1],-0.9,-0.9,0.9,1).s().p("AkIENQgKAAAAgLIAAoDQAAgLAKAAIIRAAQAKAAAAALIAAIDQAAALgKAAgAkHj3IAAHvQAAAKAKAAIH7AAQAKAAAAgKIAAnvQAAgKgKAAIn7AAQgKAAAAAKg");
	this.shape_2.setTransform(28.9,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.3,-25,55.2,53.9);


(lib.MASTERWARNR_pbbase01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#750B0B","#701818"],[0,1],0,0,0,0,0,34.6).s().p("AjoDuQgKAAAAgJIAAnJQAAgKAKAAIHRAAQAKAAAAAKIAAHJQAAAJgKAAg");
	this.shape.setTransform(28.9,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E1E1E").s().p("Aj9ECQgKAAAAgKIAAnvQAAgKAKAAIH7AAQAKAAAAAKIAAHvQAAAKgKAAgAjyjlIAAHJQAAAJAKAAIHRAAQAKAAAAgJIAAnJQAAgKgKAAInRAAQgKAAAAAKg");
	this.shape_1.setTransform(28.9,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#333333","#111111"],[0,1],-0.9,-0.9,0.9,1).s().p("AkIENQgKAAAAgLIAAoDQAAgLAKAAIIRAAQAKAAAAALIAAIDQAAALgKAAgAkHj3IAAHvQAAAKAKAAIH7AAQAKAAAAgKIAAnvQAAgKgKAAIn7AAQgKAAAAAKg");
	this.shape_2.setTransform(28.9,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.3,-25,55.2,53.9);


(lib.MASTERWARNL_pbbase03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#2B2B2B","#111111"],[0,1],-1,-1.6,1.1,1.6).s().p("AnGE6QgKAAAAgLIAApdQAAgLAKAAIONAAQAKAAAAALIAAJdQAAALgKAAgAnFkkIAAJJQAAALAKgBIN3AAQAKABAAgLIAApJQAAgKgKAAIt3AAQgKAAAAAKg");
	this.shape.setTransform(47.9,4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1A1A1A").s().p("AAEEcIAAi0IGtAAIAACqQAAAKgKAAgAmmEcQgKAAAAgKIAAiqIGsAAIAAC0gAAEBeIAAi0IGtAAIAAC0gAmwBeIAAi0IGsAAIAAC0gAAEhhIAAi4IgIAAIAAC4ImsAAIAAivQAAgLAKABINNAAQAKgBAAALIAACvg");
	this.shape_1.setTransform(47.9,4.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1E1E1E").s().p("Am7EvQgKAAAAgKIAApJQAAgKAKAAIN3AAQAKAAAAAKIAAJJQAAAKgKAAgAAEEaIGjAAQAKAAAAgJIAAirImtAAgAmwERQAAAJAKAAIGiAAIAAi0ImsAAgAAEBcIGtAAIAAi0ImtAAgAmwBcIGsAAIAAi0ImsAAgAAEkbIAAC5IGtAAIAAiwQAAgKgKAAItNAAQgKAAAAAKIAACwIGsAAIAAi5g");
	this.shape_2.setTransform(47.9,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.3,-27,93.2,62.9);


(lib.MASTERWARNL_pbbase02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#BA7001","#A94401"],[0,1],0,0,0,0,0,34.6).s().p("AjoDuQgKAAAAgJIAAnJQAAgKAKAAIHRAAQAKAAAAAKIAAHJQAAAJgKAAg");
	this.shape.setTransform(28.9,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E1E1E").s().p("Aj9ECQgKAAAAgKIAAnvQAAgKAKAAIH7AAQAKAAAAAKIAAHvQAAAKgKAAgAjyjlIAAHJQAAAJAKAAIHRAAQAKAAAAgJIAAnJQAAgKgKAAInRAAQgKAAAAAKg");
	this.shape_1.setTransform(28.9,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#333333","#111111"],[0,1],-0.9,-0.9,0.9,1).s().p("AkIENQgKAAAAgLIAAoDQAAgLAKAAIIRAAQAKAAAAALIAAIDQAAALgKAAgAkHj3IAAHvQAAAKAKAAIH7AAQAKAAAAgKIAAnvQAAgKgKAAIn7AAQgKAAAAAKg");
	this.shape_2.setTransform(28.9,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.3,-25,55.2,53.9);


(lib.MASTERWARNL_pbbase01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#750B0B","#701818"],[0,1],0,0,0,0,0,34.6).s().p("AjoDuQgKAAAAgJIAAnJQAAgKAKAAIHRAAQAKAAAAAKIAAHJQAAAJgKAAg");
	this.shape.setTransform(28.9,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E1E1E").s().p("Aj9ECQgKAAAAgKIAAnvQAAgKAKAAIH7AAQAKAAAAAKIAAHvQAAAKgKAAgAjyjlIAAHJQAAAJAKAAIHRAAQAKAAAAgJIAAnJQAAgKgKAAInRAAQgKAAAAAKg");
	this.shape_1.setTransform(28.9,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#333333","#111111"],[0,1],-0.9,-0.9,0.9,1).s().p("AkIENQgKAAAAgLIAAoDQAAgLAKAAIIRAAQAKAAAAALIAAIDQAAALgKAAgAkHj3IAAHvQAAAKAKAAIH7AAQAKAAAAgKIAAnvQAAgKgKAAIn7AAQgKAAAAAKg");
	this.shape_2.setTransform(28.9,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.3,-25,55.2,53.9);


(lib.instruction = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAJIAAgQIAQAAIAAAQg");
	this.shape.setTransform(44.4,5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag0BAIAAh/IAtAAQANAAAHACQAMADAHAGQALAJAFANQAFANAAARQAAANgEAMQgDALgGAIQgFAHgGAEQgHAEgJADQgJACgJAAgAgjAxIAcAAQAKAAAIgDQAHgCAEgFQAGgGAEgJQADgLAAgNQAAgUgHgLQgGgKgKgEQgHgDgNAAIgbAAg");
	this.shape_1.setTransform(35.5,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYA9QgMgFgHgKQgGgLgBgNIAQgBQACAKAEAGQAEAGAJAEQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgEQgEgFgIgDIgVgHQgRgEgHgBQgKgGgEgHQgFgGAAgKQAAgJAGgJQAFgIALgFQALgEAMAAQANAAALAEQALAFAGAJQAGAJAAAMIgQABQgCgMgHgHQgIgGgOAAQgOAAgHAGQgHAGAAAHQAAAHAFAFQAFAEASAFQAVAEAIAEQALADAGAIQAFAIAAALQAAAKgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape_2.setTransform(22.7,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgIBAIgxh/IASAAIAhBcQAFALABAKIAGgVIAjhcIARAAIgyB/g");
	this.shape_3.setTransform(10.8,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgBA9QgFgDgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAHABACQAAABABAAQAAAAAAABQAAAAABABQAAAAABAAIAFACIAHgBIACAOIgMABQgIAAgDgCg");
	this.shape_4.setTransform(-2.6,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_5.setTransform(-9.4,1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_6.setTransform(-19.2,1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_7.setTransform(-26.2,-0.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_8.setTransform(-33.2,1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYA9QgMgFgHgKQgGgLgBgNIAQgBQACAKAEAGQAEAGAJAEQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgEQgEgFgIgDIgVgHQgRgEgHgBQgKgGgEgHQgFgGAAgKQAAgJAGgJQAFgIALgFQALgEAMAAQANAAALAEQALAFAGAJQAGAJAAAMIgQABQgCgMgHgHQgIgGgOAAQgOAAgHAGQgHAGAAAHQAAAHAFAFQAFAEASAFQAVAEAIAEQALADAGAIQAFAIAAALQAAAKgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape_9.setTransform(-44.3,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bg
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,0,0,3).p("AaACNMgz/AAAIgDAAIAAkZIADAAMAz/AAAIADAAIAAEZgAaAiMIAAEZ");
	this.shape_10.setTransform(0.2,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4C4C4C").s().p("A5+CNIgCAAIAAkZIACAAMAz/AAAIAAEZg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-167.6,-15.1,335.5,30.2);


(lib.hl2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(5,0,0,3).p("AiuiuIFdAAIAAFdIldAAg");
	this.shape.setTransform(19.5,48);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,28,40,40);


(lib.hl_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(5,0,0,3).p("ACTiRIAAEjIklAAIAAkjg");
	this.shape.setTransform(441.8,585.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(424.5,568.6,34.5,34.3);


(lib.hl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(5,0,0,3).p("AmfjrIM/AAIAAHXIs/AAg");
	this.shape.setTransform(41.6,23.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,88.3,52.3);


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


(lib.REFIS_Base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,2,0,3).p("AgBAAIADAA");
	this.shape.setTransform(17.3,19.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AQ9GsQgYgXAAgiIAAhuQAAghAYgYQAYgYAhAAQAiAAAXAYQAYAYAAAhIAABuQAAAigYAXQgXAYgiAAQgiAAgXgYgARDDTQgUAVAAAdIAABuQAAAeAUAUQAWAVAdAAQAeAAAUgVQAVgUAAgeIAAhuQAAgdgVgVQgVgVgdAAIAAAAQgdAAgWAVgAyuGsQgYgXAAgiIAAhuQAAghAYgYQAYgYAhAAQAiAAAXAYQAYAYAAAhIAABuQAAAigYAXQgXAYgiAAQgiAAgXgYgAynDTQgVAVAAAdIAABuQAAAeAVAUQAVAVAdAAQAeAAAUgVQAVgUAAgeIAAhuQAAgdgVgVQgVgVgdAAIAAAAQgdAAgVAVgAIAE2IA/AAIAAAKIg/AAgAByFAIAAgKIA3AAIAAAFIAAAFgACCDGIAEgIIA+AiIgFAJgAHvDgIA8giIAEAIIg7AigAoQCQIAHgHIA3A3IgHAHgAjmC7IAygxIAIAHIgzAxgAGtCfIAig7IAIAFIghA6gADaBqIAIgGIAiA7IgJAEgAmjBPIAJgDIAUBGIgKADgAk2CSIAThGIAJADIgSBGgAFTCQIgBhKIAKAAIABBKgACyi2QguguAAhBQAAhCAuguQAuguBBAAQBCAAAuAuQAuAuABBCQgBBBguAuQguAvhCAAQhBAAgugvgAC5mOQgsArABA+QgBA9AsArQArAsA9AAQA+AAArgsQAsgrAAg9QAAg+gsgrQgrgrg+AAIAAAAQg9AAgrArgAmRi2QgtgugBhBQABhCAtguQAvguBCAAQBBAAAuAuQAuAuAABCQAABBguAuQguAvhBAAQhCAAgvgvgAmKmOQgrArAAA+QAAA9ArArQAsAsA+AAQA9AAArgsQAsgrgBg9QABg+gsgrQgrgrg9AAIgBAAQg9AAgsArgAPIlVIAnhDIAIAFIgmBCgALKmTIAIgFIAnBDIgJAEgAr5lhIAgg3IAIAFIgfA2gAv+mTIAIgFIAgA2IgJAFg");
	this.shape_1.setTransform(0.1,-12.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6C7B8A").s().p("A0TK8QgUAAAAgSIAA1TQAAgRAUgBMAonAAAQAUABAAARIAAVTQAAASgUAAgAQ8BQQgXAYAAAhIAABuQAAAiAXAYQAYAXAiAAQAiABAXgYQAYgXAAgjIAAhuQAAghgYgYQgYgXghgBQghABgZAXgAyvBQQgXAYAAAhIAABuQAAAiAXAYQAYAXAiAAQAiABAXgYQAYgXAAgjIAAhuQAAghgYgYQgYgXghgBQghABgZAXgAIAC7IAAAKIA/gBIAAgKgAByDEIA2ABIAAgGIAFAAIgFAAIAAgEIg2gBgACBBKIA+AjIAFgJIg+gigAHvBkIAEAIIA8giIgFgIgAoQAUIA3A3IAHgGIg3g4gAjmA/IAHAIIAygyIgHgHgAGtAjIAJAFIAhg4IgJgFgADZgQIAiA4IAJgFIgig4gAmkgrIAUBEIAJgDIgThDgAk2AWIAJADIAThEIgKgCgAFSAUIAKAAIAAhIIgKAAgACxoRQguAuAABCQAABCAuAuQAvAuBBAAQBCAAAuguQAuguAAhCQAAhCguguQguguhCAAQhBAAgvAugAmRoRQguAuAABCQAABCAuAuQAvAuBBAAQBCAAAuguQAuguAAhCQAAhCguguQguguhCAAQhBAAgvAugAPInRIAIAFIAnhDIgIgFgALJoPIAnBDIAIgFIgmhDgAr5ndIAJAFIAfg3IgJgFgAv/oPIAgA3IAJgFIggg3gARDEpQgUgUAAgeIAAhuQAAgcAUgWQAWgVAdAAQAdAAAVAVQAVAVAAAdIAABuQAAAegVAUQgUAVgeAAQgeABgVgWgAyoEpQgUgUAAgeIAAhuQAAgcAUgWQAWgVAdAAQAdAAAVAVQAVAVAAAdIAABuQAAAegVAUQgUAVgeAAQgeABgVgWgAEhkNQg9AAgsgsQgrgrAAg9QAAg9ArgsQAsgrA9AAQA+AAArArQArAsAAA9QAAA9grArQgrAsg+AAIAAAAgAkhkNQg9AAgsgsQgrgrAAg9QAAg9ArgsQAsgrA9AAQA+AAArArQArAsAAA9QAAA9grArQgrAsg+AAIAAAAg");
	this.shape_2.setTransform(0.1,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#7E8D9A","#4E616D"],[0,1],121.8,-69.3,126.8,-59.8).s().p("A0TLQQgNgBgHgDQgUgIAAgZIAA1VQAAgZAUgIQAHgDANAAMAonAAAQANAAAHADQAUAIAAAZIAAVVQAAAZgUAIQgHADgNABgA0nqpIAAVTQAAASAUAAMAonAAAQAUAAAAgSIAA1TQAAgRgUgBMgonAAAQgUABAAARg");
	this.shape_3.setTransform(0.1,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#657381").s().p("A1OLhIAA3BMAqdAAAIAAXBgA0mrMQgUAIAAAZIAAVUQAAAaAUAIQAHADANAAMAooAAAQAMAAAIgDQATgIAAgaIAA1UQAAgZgTgIQgIgEgMAAMgooAAAQgNAAgHAEg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136,-73.7,272,147.5);


(lib.LEFIS_Base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AQ9GsQgYgXAAgiIAAhuQAAghAYgYQAYgYAhAAQAhAAAYAYQAYAYAAAhIAABuQAAAigYAXQgXAYgiAAQgiAAgXgYgARDDTQgUAVAAAdIAABuQAAAeAUAUQAVAVAeAAQAeAAAUgVQAVgUAAgeIAAhuQAAgdgVgVQgUgVgeAAQgdAAgWAVgAyuGsQgYgXAAgiIAAhuQAAghAYgYQAYgYAhAAQAhAAAYAYQAYAYAAAhIAABuQAAAigYAXQgXAYgiAAQghAAgYgYgAynDTQgVAVAAAdIAABuQAAAeAVAUQAUAVAeAAQAeAAAUgVQAVgUAAgeIAAhuQAAgdgVgVQgUgVgeAAQgdAAgVAVgAIAE2IA/AAIAAAKIg/AAgAByFAIAAgKIBBAAIAAAKgACCDGIAEgIIA+AiIgFAJgAHvDgIA8giIAEAIIg7AigAoQCQIAHgHIA3A3IgHAHgAjmC7IAygxIAIAHIgzAxgAGuCfIAhg6IAJAEIgiA7gADaBqIAIgFIAiA6IgJAFgAmjBPIAJgCIAUBFIgKADgAk2CSIAThGIAJADIgSBGgAFTCQIgBhKIAKAAIABBKgACyi2QgvguABhBQgBhCAvguQAuguBBAAQBCAAAuAuQAvAuAABCQAABBgvAuQguAvhCAAQhBAAgugvgAC5mOQgsArABA+QgBA9AsArQArAsA9AAQA+AAArgsQAsgrAAg9QAAg+gsgrQgrgrg+AAQg9AAgrArgAmRi2QguguAAhBQAAhCAuguQAvguBCAAQBBAAAuAuQAuAuAABCQAABBguAuQguAvhBAAQhCAAgvgvgAmKmOQgrArAAA+QAAA9ArArQAsAsA+AAQA9AAArgsQArgrAAg9QAAg+grgrQgrgrg9AAQg+AAgsArgAPJlVIAmhDIAIAFIgmBDgALKmTIAIgFIAnBDIgIAFgAr5lhIAgg3IAJAFIggA3gAv+mTIAIgFIAgA3IgIAFg");
	this.shape.setTransform(0.1,-12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6C7B8A").s().p("A0TK8QgUAAAAgSIAA1TQAAgRAUgBMAonAAAQAUABAAARIAAVTQAAASgUAAgAQ8BQQgXAZAAAgIAABuQAAAiAXAYQAYAYAigBQAiABAXgYQAYgXAAgjIAAhuQAAghgYgYQgYgXghgBQghABgZAXgAyvBQQgXAZAAAgIAABuQAAAiAXAYQAYAYAigBQAiABAXgYQAYgXAAgjIAAhuQAAghgYgYQgYgXghgBQghABgZAXgAIAC7IAAAKIA/gBIAAgKgAByDEIBAABIAAgKIhAgBgACCBKIA9AjIAFgJIg+gigAHvBkIAFAJIA7gjIgFgIgAoQAUIA3A3IAHgGIg3g4gAjmA/IAHAIIAygyIgHgHgAGtAjIAJAFIAhg4IgJgFgADagQIAhA4IAJgFIgig4gAmjgrIATBFIAKgEIgUhDgAk2AWIAJADIAThEIgKgCgAFSAUIAKAAIAAhIIgKAAgACxoRQguAvAABBQAABBAuAvQAvAuBBAAQBCAAAuguQAugvAAhBQAAhBgugvQguguhCAAQhBAAgvAugAmRoRQguAvAABBQAABBAuAvQAvAuBBAAQBCAAAuguQAugvAAhBQAAhBgugvQguguhCAAQhBAAgvAugAPInRIAJAFIAmhDIgIgEgALKoPIAmBDIAJgFIgnhCgAr5ndIAJAFIAfg3IgJgEgAv+oPIAfA3IAJgFIggg2gARDEpQgUgUAAgeIAAhuQAAgcAUgWQAWgUAdgBQAdABAVAUQAVAVAAAdIAABuQAAAfgVATQgUAWgegBQgeABgVgWgAyoEpQgUgUAAgeIAAhuQAAgcAUgWQAWgUAdgBQAdABAVAUQAVAVAAAdIAABuQAAAfgVATQgUAWgegBQgeABgVgWgAC4k5QgrgrAAg9QAAg+ArgrQAsgrA9AAQA+AAArArQArArAAA+QAAA9grArQgrAsg+AAQg9AAgsgsgAmKk5QgrgrAAg9QAAg+ArgrQAsgrA9AAQA+AAArArQArArAAA+QAAA9grArQgrAsg+AAQg9AAgsgsg");
	this.shape_1.setTransform(0.1,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#7E8D9A","#4E616D"],[0,1],121.8,-69.3,126.8,-59.8).s().p("A0TLQQgNgBgHgDQgUgIAAgZIAA1VQAAgZAUgIQAHgDANAAMAonAAAQANAAAHADQAUAIAAAZIAAVVQAAAZgUAIQgHADgNABgA0nqpIAAVTQAAASAUAAMAonAAAQAUAAAAgSIAA1TQAAgRgUgBMgonAAAQgUABAAARg");
	this.shape_2.setTransform(0.1,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#657381").s().p("A1OLhIAA3BMAqdAAAIAAXBgA0mrMQgUAIAAAZIAAVUQAAAaAUAIQAHADANAAMAooAAAQAMAAAIgDQATgIAAgaIAA1UQAAgZgTgIQgIgEgMAAMgooAAAQgNAAgHAEg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136,-73.7,272,147.5);


(lib.btn2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("ABQC5IAAjxIGFAAIAADxgAlYBIIAAiCIEwAAIAACCgAnVhwIAAhIIOrAAIAABIg");
	this.shape.setTransform(-42.1,-1.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.btn1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.463)"],[0,1],-11,0,11.1,0).s().p("AhtA+IAAh8IDbAAIAAB8g");
	this.shape.setTransform(-176.2,-18.3);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib._787_Generic_screen80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PNG
	this.instance = new lib.efb01p02_80();
	this.instance.setTransform(-0.4,-0.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,-0.7,641.4,652.6);


(lib._787_Generic_screen40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PNG
	this.instance = new lib.efb01p01_40();
	this.instance.setTransform(-0.4,-0.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,-0.7,641.4,652.6);


(lib.GEN_switchbase10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#7E8D9A","#4E616D"],[0,1],3.9,1.5,-4.3,-1.4).s().p("Ag+B0IgBgBIgPgRIAAAAQgKgPgCgQIgBgKIAAhxQAAgIADgIIAAABQAEgTAOgOIALgKIAAgBIAPgKIAAABQAUgLAYAAQAdAAAWAOIABAAIAKAIIAAABIAMAMIAAAAQAOAQADAUIAAABIAAB4IAAADIAAAAQgBASgIAOIAAAAQgGAKgKAJIgFAEQgaAVgjAAQgjAAgbgUgAgBh4QgUAAgQAJIAAAAIgMAIIgBABIgIAHIgBABQgIAIgFAKIgCAIIAAABIgBAHIgBAEIAAAVIAABDIAAAaIABAHIAAABIABACIAAADIACAGIABADIAEAHIAAABIAAAAIABABIAEAFIAJAKIABABIAFADIADACIAKAFIAXAGIABAAIAKAAIAAAAIAIAAIACAAQAUgDAQgLIAGgEIACgBIABgBIAHgHIAHgJIAAAAIABgCIADgIQADgHAAgIIAAgBIAAgCIAAgFIAAggIAAgqIAAghIAAgHIgBgHIgCgGQgEgIgGgHIAAAAIgHgIIgFgEIgIgHIAAAAIgBAAQgQgKgVgBIgBAAIgCAAIgCAAIAAAAIgBAAg");
	this.shape.setTransform(18.7,18.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","#888888","#000000"],[0,0.537,1],-7.8,6.7,7.4,-6.6).s().p("AgBBRQghABgYgYIgBAAQgLgLgFgNIAAhDQAFgNALgKQAYgZAiAAQAhAAAYAZIAAAAQAPAQAGAUIAAAqQgGAUgPAQIgBAAQgXAXggAAIgBAAgAg1A1QAWAVAeAAQAdAAAWgVIABgBQAVgVAAgfQAAgdgVgWIgBAAIAAAAQgWgWgdAAQgeAAgWAWQgWAWAAAdQAAAfAWAVIgBAAg");
	this.shape_1.setTransform(18.7,18.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#49170C","#752613","#511A0D","#240C06"],[0.447,0.675,0.82,1],0,0,0,0,0,8.2).s().p("AgzA1IAAgBQgWgVAAgfQAAgdAWgWQAWgWAdAAQAfAAAVAWIABAAQAVAWAAAdQAAAfgVAVIgBABQgVAVgfAAQgdAAgWgVgAgrgrQgUASAAAZQAAAbAUATQASASAZAAQAbAAATgSQASgTAAgbQAAgZgSgSQgTgUgbAAQgZAAgSAUg");
	this.shape_2.setTransform(18.4,18.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#41160C","#632314","#240C06"],[0.318,0.675,1],0,0,0,0,0,7.3).s().p("AgsAtQgTgSAAgbQAAgZATgTQATgTAZAAQAbAAASATQATATAAAZQAAAbgTASQgSATgbAAQgZAAgTgTg");
	this.shape_3.setTransform(18.5,18.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#333333","#5E5E5E","#484848","#5E5E5E","#362D27"],[0,0.286,0.506,0.667,1],-15.4,7.3,14.9,-7.5).s().p("AgKB5IgCAAIgXgGIgHgEIgVgRIgEgFIAAgBIAAAAIgBgBIgDgHIgCgDIgBgGQAeAeArAAQAoAAAfgeIAAAAIAFgGIgCAKIgEAIIgBACIAAAAIgGAJIgHAHIgCABIgBABIgGAEIgkAOIgCAAIgIAAIAAAAIAAAAIgKAAgAgBhnQgqgBgdAcQAEgKAJgIIAAgBIAJgHIAwgSIACAAIACAAIABAAIACAAQAVABAQAKIABAAIAMALIAHAIIAAAAQAHAHADAJIgCAAQgfgegoABg");
	this.shape_4.setTransform(18.7,18.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#2F2F2F","#737373","#262626"],[0,0.537,1],-11.7,4,11.2,-15.7).s().p("AhEAJIgHgIIAAgYQAFANALAKIABAAQAYAXAhAAQAgAAAYgXIABAAQAPgPAGgUIAAAgIgLAMIgBAAQgcAbgmAAQgnAAgcgbg");
	this.shape_5.setTransform(18.7,24.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#2F2F2F","#777777","#2F2F2F"],[0,0.537,1],-11.7,15.7,11.2,-4).s().p("AA4AAIAAAAQgYgWghAAQgiAAgYAWQgLALgFANIAAgVIAAgDIAHgHQAcgcAnAAQAmAAAcAcIAAgBIAMAMIAAAgQgGgUgPgQg");
	this.shape_6.setTransform(18.7,12.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#2B2B2B","#919191","#0D0D0D"],[0,0.537,1],-14.3,12.2,14.1,-12.2).s().p("AAABnQgsAAgdgeIgBgDIAAgCIgBgBIAAgHIAHAIQAcAbAoAAQAlAAAcgbIABAAIALgOIAAAFIAAACIAAABIgBAFIgFAGIgBAAQgeAegoAAIAAAAgABBhCIAAAAQgcgcglAAQgoAAgcAcIgHAIIABgHIAAgBIACgIQAegcAqABQAogBAfAeIAAABIAEAEIACAHIAAAHIgMgNg");
	this.shape_7.setTransform(18.6,18.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#3C3C3C","#8C8C8C","#6A6A6A","#7B7B7B","#453932"],[0,0.286,0.506,0.667,1],-16.4,8.5,13.9,-6.3).s().p("AhAA/IABAAIAAAAgAAogpIAAAAIAAAAgAA9g9IAAAAIACgBIACAFIgEgEg");
	this.shape_8.setTransform(19.7,17.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#262626","#7B7B7B","#595959","#666666","#2C2521"],[0,0.286,0.506,0.667,1],-15,7.7,15.3,-7).s().p("AgoBzIgDgCIgFgDIgBgBIgJgKIAUARIgCgBgAAvhoIAIAHIAEAEgAguhiIANgIIAAAAQAQgJASAAIgvASgAAvhoIgBAAIABAAg");
	this.shape_9.setTransform(18.3,18.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#343D43").s().p("AASgFQgRAJgRACg");
	this.shape_10.setTransform(21.5,30.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9.5,5,18.4,27.4);


(lib.GEN_switchbase05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#7E8D9A","#4E616D"],[0,1],7.7,2.9,-1.1,-0.7).s().p("AgpBdIgBgBIAAAAIgCgCIgHgLQgGgLgCgMIAAgIIAAhfIABgMQADgOAJgMIAFgFIAAgBQAGgFAGgEQAOgIAPAAQATAAAPALIAHAGIACADIAGAHQAJANACAPIAAAGIAABfIAAACQAAAOgGALQgEAIgHAHIgCACQgSARgXAAQgXAAgSgQgAgYhQIgDADIAAABIgHAJQgEAHgBAJIAAAEIAAAKIAABIIAAANIAAACQAAAHADAGQACAGAEAGIADADIABABQAMAKAOAAQAPAAAMgLIABAAIAFgGQAEgGABgGQACgGAAgGIAAgBIAAgRIAAg+IAAgPIAAgBQAAgJgEgHQgDgGgGgGIgCgCIAAAAQgKgKgPAAQgNAAgLAIg");
	this.shape.setTransform(18.7,18.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","#888888","#1A1A1A"],[0,0.537,1],-7.8,6.7,7.4,-6.6).s().p("AgnAzIAAgBIAAgOIABABQAPAQAWAAQAVAAAPgQIAFgFIAAAQQgSAQgXAAQgWAAgQgNgAAjgkQgPgQgVAAQgWAAgPAQIgBABIAAgKIAAgFQAQgNAWAAQAXAAASARIAAABIAAAPIgFgGg");
	this.shape_1.setTransform(18.7,18.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#2B2B2B","#B3B3B3","#1E1E1E"],[0,0.537,1],-7.8,6.7,7.4,-6.6).s().p("AgBBRQgQABgOgFQgEgGgCgGQAQAJAUAAQAVAAASgMQgCAGgEAGQgQAHgRAAIAAAAgAgBhJQgSAAgPAIIAGgJIABgBIADgDQALgDAMAAQANAAAMAFIABAAIACACQAGAGADAGQgRgLgUAAg");
	this.shape_2.setTransform(18.7,18.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#4D4D4D","#999999","#404040"],[0,0.537,1],-7.8,6.7,7.4,-6.6).s().p("AgkBBQgDgGAAgIQAQANAWAAQAXAAASgPIAAABQAAAGgCAGQgSAMgVAAQgUAAgPgJgAgBg/QgWAAgQAOQABgJAEgHQAPgIASAAQAUAAARALQAEAHAAAJQgSgRgXAAg");
	this.shape_3.setTransform(18.7,18.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#1A1A1A","#6F6F6F","#1A1A1A"],[0,0.537,1],-11.8,9.7,11.1,-10).s().p("AgbBPIgBgBIgDgDQAOAFAPgBQASABAQgIIgFAGIgBAAQgMALgOAAQgOAAgNgKgAgChTQgMAAgKADQALgIANAAQAOAAAKAKQgNgFgNAAg");
	this.shape_4.setTransform(18.8,18.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#000000","#6A6A6A","#000000"],[0,0.537,1],-7.8,6.7,7.4,-6.6).s().p("AgmAlIgBgBIAAhHIABgBQAPgQAWAAQAVAAAPAQIAFAGIAAA+IgFAFQgPAQgVAAQgWAAgPgQg");
	this.shape_5.setTransform(18.7,18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12.6,7.7,12.2,22);


(lib.GEN_switchbase04a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#1A1A1A","#888888","#111111"],[0,0.537,1],-7.6,6.7,7.6,-6.6).s().p("AgkAlQgQgPAAgWQAAgVAQgPQAPgQAVAAQAWAAAPAQQAQAPAAAVQAAAWgQAPQgPAQgWAAQgVAAgPgQg");
	this.shape.setTransform(18.5,18.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","#8C8C8C","#000000"],[0,0.537,1],-7.6,6.7,7.6,-6.6).s().p("AgsAtQgTgSAAgbQAAgZATgTQATgTAZAAQAbAAASATQATATAAAZQAAAbgTASQgSATgbAAQgZAAgTgTgAgkgkQgQAPAAAVQAAAWAQAPQAPAQAVAAQAWAAAPgQQAQgPAAgWQAAgVgQgPQgPgQgWAAQgVAAgPAQg");
	this.shape_1.setTransform(18.5,18.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#1A1A1A","#AEAEAE","#111111"],[0,0.537,1],-7.6,6.7,7.6,-6.6).s().p("AgzA1IAAgBQgWgVAAgfQAAgdAWgWQAWgWAdAAQAfAAAVAWIABAAQAVAWAAAdQAAAfgVAVIgBABQgVAVgfAAQgdAAgWgVgAgrgrQgUASAAAZQAAAbAUATQASASAZAAQAbAAATgSQASgTAAgbQAAgZgSgSQgTgUgbAAQgZAAgSAUg");
	this.shape_2.setTransform(18.4,18.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000000","#A6A6A6","#000000"],[0,0.537,1],-7.6,6.7,7.6,-6.6).s().p("AAABRQggABgYgYIAAAAQgZgYAAgiQAAggAZgYQAYgZAgAAQAiAAAYAZIAAAAQAYAYgBAgQABAigYAYIAAAAQgYAXgiAAIAAAAgAgzA1QAWAVAdAAQAfAAAVgVIABgBQAVgVAAgfQAAgdgVgWIgBAAIAAAAQgVgWgfAAQgdAAgWAWQgWAWAAAdQAAAfAWAVIAAAAg");
	this.shape_3.setTransform(18.4,18.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#444444","#B7B7B7","#444444"],[0,0.537,1],-11.5,9.9,11.5,-9.8).s().p("AhCBEQgcgdAAgnQAAgmAcgcQAcgcAmAAQAnAAAdAcIAAAAQAbAcAAAmQAAAngbAdIAAAAQgdAbgnAAQgmAAgcgbgAA6A6IAAAAQAYgYgBgiQABgggYgYIAAAAQgYgZgiAAQggAAgYAZQgZAYAAAgQAAAiAZAYIAAAAQAYAYAggBQAiABAYgYg");
	this.shape_4.setTransform(18.4,18.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#555555","#C8C8C8","#262626"],[0,0.537,1],-14.2,12.2,14.2,-12.2).s().p("AAABnQgpAAgfgeQgegfABgqQgBgpAegfQAfgeApABQAqgBAfAeIAAABQAeAeAAApQAAAqgeAfIAAAAQgfAegqAAIAAAAgAhChCQgcAcAAAmQAAAnAcAdQAcAbAmAAQAnAAAdgbIAAAAQAbgdAAgnQAAgmgbgcIAAAAQgdgcgnAAQgmAAgcAcg");
	this.shape_5.setTransform(18.4,18.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#3C3C3C","#8C8C8C","#6A6A6A","#7B7B7B","#453932"],[0,0.286,0.506,0.667,1],-15.1,7.4,15.2,-7.3).s().p("Ah5AsIAXh+IB5gtIBjBVIgXB9Ih4AtgAhHhIQgeAfAAApQAAAqAeAfQAeAdApAAQArAAAegdIABgBQAdgeAAgqQAAgpgdgeIAAgBQgfgegrAAIAAAAQgpAAgeAegAgzA0IABAAIAAABgAA1gzIAAgBIAAABg");
	this.shape_6.setTransform(18.4,18.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#262626","#7B7B7B","#595959","#666666","#2C2521"],[0,0.286,0.506,0.667,1],-15.1,7.4,15.2,-7.3).s().p("AgXCIIgCgBIhmhXIgBgCIgBgCIAYiCIABgCIABAAIB9guIACgBIACABIBmBYIABABIAAACIgXCCIgBACIgCABIh8AtIgBABIgBAAgAhihSIgXB+IBjBUIB5gtIAWh9IhjhVg");
	this.shape_7.setTransform(18.4,18.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#7E8D9A","#4E616D"],[0,1],11.5,11.1,-11.5,-11).s().p("AhvBxQgvgvAAhCQAAhBAvguQAugvBBAAQBCAAAvAvQAuAuAABBQAABCguAvQgvAuhCAAQhBAAgugugAhmhmQgrArAAA7QAAA8ArAsQAqAqA8AAQA8AAAsgqQAqgsAAg8QAAg7gqgrQgsgrg8AAQg8AAgqArg");
	this.shape_8.setTransform(18.5,18.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#343D43").s().p("AhmBoQgrgsAAg8QAAg7ArgrQAqgrA8AAQA8AAAsArQAqArAAA7QAAA8gqAsQgsAqg8AAQg8AAgqgqgAAViHIh9AuIgBABIgBACIgYCCIABACIABABIBmBYIACABIACgBIB8guIACgBIABgCIAXiBIAAgCIgBgCIhmhXIgCgBIgBAAIgBAAg");
	this.shape_9.setTransform(18.5,18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.5,2.5,32,32);


(lib.GEN_switch05up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FAF7EE","#A9A194","#6E6A5E","#605B53"],[0.031,0.478,0.902,1],-2.4,1.5,0,-2.5,1.5,9.1).s().p("AgyA2IgJgKQgJgMgCgMIAAgCIgBgOQACgjAXgVQAUgTAbAAQAcAAAUAUQAWAVABAjIAAAMIgBABQgCAOgKAMIgIAKQgWASgdAAQgcAAgWgSg");
	this.shape.setTransform(6.6,-16.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#D2CEC6","#A9A194","#6B675C","#3E3E42"],[0.035,0.298,0.588,0.961],-2.1,-7.6,0,-2.2,-7.6,11.2).s().p("AgiBMQgQgRgCgWIgSh9QACANAJALIAJAKQAWASAcAAQAdAAAWgSIAIgJQAKgMABgOIABAAIgTB+QgFAUgLAPQgOARgWABIAAAAQgUAAgOgOg");
	this.shape_1.setTransform(6.6,-5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,-24.1,14.5,27.2);


(lib.GEN_switch04up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#D2CEC6","#A9A194","#6B675C","#3E3E42"],[0.035,0.298,0.588,0.961],-2,-5,0,-2,-5,14.6).s().p("AgBB1QgUgBgLgPQgFgJgDgWIAAgCIAAgHIgBABIAAgIIAAAAIgBgPIgJhMIgBgUQACgcARgQQAPgPASAAQAUAAAPAPQARARAAAcIABAJIgBABIABAAIgKBbIgDAfQgCAOgGAJQgKASgWAAIgBAAg");
	this.shape.setTransform(6.5,-8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.2,-19.8,10.7,23.5);


(lib.GEN_switch04center = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FAF7EE","#A9A194","#6E6A5E","#605B53"],[0.031,0.478,0.902,1],-0.9,-1.6,0,-0.9,-1.6,6.9).s().p("AglAnQgQgQgBgXQABgVAQgRQAQgQAVAAQAWAAARAQQAPARAAAVQAAAXgPAQQgRAQgWAAQgVAAgQgQg");
	this.shape.setTransform(6.6,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.1,-5.1,11,11);


(lib.GEN_screw03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#5A6B72","#414B50"],[0,1],3,3,-3,-3).s().p("AgFApIgIgCQgEAAABgEIAFgTQABgKgJgEIABAAIgUgEIgBAAQgBAAAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBIADgHQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAgBQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAUAGQAJABAEgJIAAAAIADgTIAAgBQAAgBABAAQAAAAABgBQAAAAABAAQABABABAAIAIABIACABQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIgFATQgBAKAJAFIATADQADABAAAEIgCAHQgCADgDgBIgTgEQgKgBgEAJIgDATQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAIAAgBgAgkgNIgCAHIAAACIAUAEQAMADgCANIgFAUIABABIAHACIABgBIAEgTIAAAAQADgLANABIABAAIATAFIABgBIAAgBIACgHIgBAAIgSgFIgBAAQgMgEACgNIAGgSIAAgBIgBAAIgIgCIAAAAIgGAUQgCALgNgBIgUgFIgBAAg");
	this.shape.setTransform(1.9,-1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#84949D","#4D5A5E"],[0,1],-2.4,-3.1,0,-2.4,-3.1,9).s().p("AgJA9QgMgCgKgGQgLgGgHgLQgPgVAEgYQACgMAGgKQAHgKALgIQAUgPAYAEQAMACALAHQAJAGAIALQAPAUgEAYQgCAMgGALQgHAJgLAIQgQAMgTAAIgJgBgAgJARIgFATQgBAEAEAAIAIACQADAAAAgCIAEgTQAEgJAKAAIATAFQADAAACgDIACgHQAAgEgDAAIgTgEQgJgEABgKIAFgTQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIgCgCIgIgBQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBABAAAAIAAABIgEAUIAAgBQgDAKgJgBIgUgGQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAAAABQAAAAAAAAIgDAIQAAAAAAABQAAABAAAAQABABAAAAQAAABABAAIABAAIAUAEIgBAAQAJAEgBAKg");
	this.shape_1.setTransform(1.7,-1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#2D3539","#7E939A"],[0,1],4.2,5,-4.1,-4.9).s().p("AgJA/QgNgCgLgGQgKgHgIgKQgQgXAFgYQACgNAHgKQAGgLAMgIQAUgPAZAEQANACALAHQAKAGAIALQAQAWgFAZQgCANgHAKQgGAKgMAIQgQAMgUAAIgJgBgAgigxQgLAIgHAKQgGAKgCAMQgEAYAPAVQAHALALAGQAKAGAMACQAXAEAVgPQALgIAHgJQAGgLACgMQAEgYgPgUQgIgLgJgGQgLgHgMgCIgKgBQgSAAgQAMg");
	this.shape_2.setTransform(1.7,-1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#374448").s().p("AgMAlIgBgBIAFgUQACgNgMgDIgUgEIAAgCIACgHIAAAAIABAAIAUAFQANABACgLIAGgUIAAAAIAIACIABAAIAAABIgGASQgCANAMAEIABAAIASAFIABAAIgCAHIAAABIgBABIgTgFIgBAAQgNgBgDALIAAAAIgEATIgBABg");
	this.shape_3.setTransform(1.9,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.7,-8.2,12.9,12.9);


(lib.GEN_screw02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#84949D","#4D5A5E"],[0,1],-2.7,-3.5,0,-2.7,-3.5,10).s().p("AgKBFQgPgCgLgHQgLgHgJgMQgRgYAFgbQACgOAIgMQAHgLAMgJQAXgRAbAFQAOACAMAIQALAHAJAMQARAXgFAbQgCAPgIALQgHALgMAJQgSANgWAAIgKgBgAgKATIgFAVQgBAEAEABIAIACQAEAAAAgDIAFgVQAEgKALABIAWAFQADABACgEIACgIQABgEgEgBIgVgEQgLgFACgLIAGgVQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAAAAAIgJgBQgEgCgBADIAAABIgFAWIAAgBQgDAKgLAAIgWgHQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAQAAABAAAAQAAAAAAABIgDAIQgBADADACIABAAIAWAEIgBAAQALAEgCAMg");
	this.shape.setTransform(1.7,-1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#374448").s().p("AgOApIgBgBIAGgVQACgPgNgEIgWgFIAAgBIACgIIAAgBIABAAIAWAGQAOACADgNIAGgWIABAAIAIACIABAAIAAABIgGAVQgCAOANAEIABAAIAVAGIABAAIgDAIIAAABIgBABIgVgGIgBAAQgOgBgEAMIAAABIgFAVIgBAAg");
	this.shape_1.setTransform(2,-1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#5A6B72","#414B50"],[0,1],3.4,3.4,-3.3,-3.3).s().p("AgGAuIgJgCQgEgBABgEIAGgVQABgLgKgEIAAAAIgWgFIAAAAQgDgBABgEIACgIQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAIAWAGQALABAEgKIAAAAIAEgVIAAgBQABgDAEABIAIACQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgFAWQgCAKAKAGIAWAEQADAAAAAFIgDAIQgBADgEAAIgVgGQgMAAgEAKIgDAUQgCADgDAAIAAAAgAgogOIgCAIIAAABIAWAFQANAEgCAPIgGAVIABABIAIACIABAAIAFgVIAAgBQAEgMAOABIABAAIAVAGIABgBIAAgBIADgIIgBAAIgVgGIgBAAQgNgEACgOIAGgVIAAgBIgBAAIgIgCIgBAAIgGAWQgDANgOgCIgWgGIgBAAg");
	this.shape_2.setTransform(2,-1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#657381","#71838E"],[0,1],4.2,8,-4.1,-8).s().p("AgNBZQglgHgWgeQgWgfAGgiQAHglAfgWQAdgWAkAGQAkAGAWAfQAWAfgGAjQgGAkggAWQgYARgbAAIgNgBgAgng4QgMAJgHALQgIAMgCAOQgFAbARAYQAJAMALAHQAMAHAOACQAbAFAXgRQAMgJAHgLQAIgLACgPQAFgbgRgXQgJgMgLgHQgLgIgPgCIgLgBQgVAAgSANg");
	this.shape_3.setTransform(1.7,-1.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#2D3539","#7E939A"],[0,1],4.3,8.3,-2.2,-4.3).s().p("AgOBdQgngGgWghQgYggAHgkQAGgnAhgWQAfgXAlAGQAnAHAWAfQAXAggGAlQgHAmggAXQgZASgdAAIgOgBgAgzhIQgfAWgGAlQgGAiAWAfQAVAeAlAHQAiAGAfgWQAfgWAGgkQAGgjgVgfQgWgfglgGIgOgBQgcAAgXARg");
	this.shape_4.setTransform(1.8,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.7,-11.2,19,19);


(lib.GEN_roundbutton05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#515151","#000000"],[0,1],3.5,3.4,0,3.5,3.4,12.5).s().p("AgoAxIgEgEQgTgSAAgbQAAgaATgTQATgTAZAAQAaAAATATQAHAHAEAHIAAABQAIAOAAAQQAAAbgTASQgHAIgIAFQgOAGgQAAQgXAAgRgPg");
	this.shape.setTransform(8.3,8.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#5E5E5E","#111111"],[0,1],-3,-5.8,0,-3,-5.8,10).s().p("Ag1A1QgVgWAAgfQAAgeAVgXQAXgVAeAAQAfAAAWAVQAWAXABAeQAAAJgCAIQgFAVgQAPQgJAJgLAGQgPAIgSAAQgegBgXgWgAgxgxQgWAUAAAdQAAAdAWAWIADADQAUARAaAAQARAAAPgHQAKgFAIgIQAPgPAFgUQABgHAAgJQAAgdgVgUQgVgWgdAAQgdAAgUAWg");
	this.shape_1.setTransform(8.3,8.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#404040","#000000"],[0,1],-7.9,-6.8,0,-7.9,-6.8,16.4).s().p("Ag5A6QgZgYAAgiQAAghAZgYQAYgZAhAAQAiAAAYAZQAYAYAAAhQAAAJgBAIQgFAYgSARQgYAYgiAAQghAAgYgYgAg1g1QgVAXAAAeQAAAfAVAWQAXAWAeABQASAAAPgIQALgGAJgJQAQgPAFgVQACgIAAgJQgBgegWgXQgWgVgfAAQgeAAgXAVg");
	this.shape_2.setTransform(8.3,8.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#404040","#000000"],[0,1],8,6.8,0,8,6.8,14.2).s().p("AgtA2IgEgDQgVgWAAgdQAAgdAVgUQAVgWAcAAQAdAAAVAWQAVAUAAAdQAAAJgBAHQgFAUgPAPQgIAIgKAFQgPAHgRAAQgaAAgTgRgAgsgtQgTATAAAaQAAAbATASIAEAEQARAPAXAAQAQAAAOgGQAIgFAHgIQATgSAAgbQAAgQgIgOIAAgBQgEgHgHgHQgTgTgaAAQgZAAgTATg");
	this.shape_3.setTransform(8.3,8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.6,16.6);


(lib.GEN_roundbutton02copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#404040","#000000"],[0,1],-6.8,-9,0,-6.8,-9,23.2).s().p("AhRBSQgjgiAAgwQAAgvAjgiIABgBIAAgBIADgDIADgCIABgBQAVgSAagGQAJgCAKgBIAHAAIALAAQALABAKADQAcAIAWAXQAjAiAAAvQAAAwgjAiQgiAjgwAAQgvAAgigjgAgHhrQgLAAgKADIAAAAQgbAHgVAVQggAgAAAsQAAAtAgAgQAgAgAsAAQAtAAAgggQAgggAAgtQAAgsggggQgUgTgYgIIAAAAQgKgDgLgBIgMgBIAAAAIgHABg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#7E8D9A","#4E616D"],[0,1],4.3,4.8,-4.8,-3.9).s().p("AhZBaQglgmAAg0QAAgzAlgmQAlgkA0gBIAAAAIALABIALABQAmAGAeAdQAlAmAAAzQAAA0glAmQgmAlg0AAQgzAAgmglgAgHh0QgKABgJACQgaAGgVASIgBABIgDACIgDADIAAABIgBABQgjAiAAAvQAAAwAjAiQAiAjAvAAQAwAAAigjQAjgiAAgwQAAgvgjgiQgWgXgcgIQgKgDgLgBIgLAAIgHAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#515151","#000000"],[0,1],7.3,6.6,0,7.3,6.6,18.8).s().p("AAABjQgnAAgegdQgdgeAAgoQAAgnAdgeQAUgTAYgGIAAAAQAJgDAKgBIAAAAIAGAAIALAAQAKABAJAEIAAAAQAWAGASASQAdAeAAAnQAAAogdAeQgeAdgoAAIAAAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#5E5E5E","#111111"],[0,1],-4.6,-9.2,0,-4.6,-9.2,21.9).s().p("AhMBNQggggAAgtQAAgsAgggQAVgVAbgHIAAAAQAKgDALAAIAHgBIAMABQALABAKADIAAAAQAYAIAUATQAgAgAAAsQAAAtggAgQggAggtAAQgsAAgggggAhIhIQgfAeAAAqQAAArAfAeQAeAfAqAAQArAAAegfQAfgeAAgrQAAgqgfgeQgegfgrAAQgqAAgeAfg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#404040","#000000"],[0,1],6.3,7.9,0,6.3,7.9,20.6).s().p("AhIBJQgfgeAAgrQAAgqAfgeQAegfAqAAQArAAAeAfQAfAeAAAqQAAArgfAeQgeAfgrAAQgqAAgegfgAhFhFQgdAeAAAnQAAAoAdAeQAeAdAnAAQAoAAAegdQAdgeAAgoQAAgngdgeQgSgSgWgGIAAAAQgJgEgKgBIgLAAIgGAAIAAAAQgKABgJADIAAAAQgYAGgUATg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base fill
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#515151","#000000"],[0,1],7.4,6.6,0,7.4,6.6,18.8).s().p("AAABwQgtAAghghQghghAAguQAAgtAhghIABgBIABgBIADgCIACgDIABAAIAAgBQAUgQAZgGQAJgCAKgBIAGAAIALABQAKAAAJADIAAAAQAbAHAWAWQAhAhAAAtQAAAughAhQghAhguAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.7,-12.7,25.5,25.5);


(lib.GEN_roundbutton02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#404040","#000000"],[0,1],-6.8,-9,0,-6.8,-9,23.2).s().p("AhRBSQgjgiAAgwQAAgvAjgiIABgBIAAgBIADgDIADgCIABgBQAVgSAagGQAJgCAKgBIAHAAIALAAQALABAKADQAcAIAWAXQAjAiAAAvQAAAwgjAiQgiAjgwAAQgvAAgigjgAgHhrQgLAAgKADIAAAAQgbAHgVAVQggAgAAAsQAAAtAgAgQAgAgAsAAQAtAAAgggQAgggAAgtQAAgsggggQgUgTgYgIIAAAAQgKgDgLgBIgMgBIAAAAIgHABg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#7E8D9A","#4E616D"],[0,1],4.3,4.8,-4.8,-3.9).s().p("AhZBaQglgmAAg0QAAgzAlgmQAlgkA0gBIAAAAIALABIALABQAmAGAeAdQAlAmAAAzQAAA0glAmQgmAlg0AAQgzAAgmglgAgHh0QgKABgJACQgaAGgVASIgBABIgDACIgDADIAAABIgBABQgjAiAAAvQAAAwAjAiQAiAjAvAAQAwAAAigjQAjgiAAgwQAAgvgjgiQgWgXgcgIQgKgDgLgBIgLAAIgHAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#515151","#000000"],[0,1],7.3,6.6,0,7.3,6.6,18.8).s().p("AAABjQgnAAgegdQgdgeAAgoQAAgnAdgeQAUgTAYgGIAAAAQAJgDAKgBIAAAAIAGAAIALAAQAKABAJAEIAAAAQAWAGASASQAdAeAAAnQAAAogdAeQgeAdgoAAIAAAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#5E5E5E","#111111"],[0,1],-4.6,-9.2,0,-4.6,-9.2,21.9).s().p("AhMBNQggggAAgtQAAgsAgggQAVgVAbgHIAAAAQAKgDALAAIAHgBIAMABQALABAKADIAAAAQAYAIAUATQAgAgAAAsQAAAtggAgQggAggtAAQgsAAgggggAhIhIQgfAeAAAqQAAArAfAeQAeAfAqAAQArAAAegfQAfgeAAgrQAAgqgfgeQgegfgrAAQgqAAgeAfg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#404040","#000000"],[0,1],6.3,7.9,0,6.3,7.9,20.6).s().p("AhIBJQgfgeAAgrQAAgqAfgeQAegfAqAAQArAAAeAfQAfAeAAAqQAAArgfAeQgeAfgrAAQgqAAgegfgAhFhFQgdAeAAAnQAAAoAdAeQAeAdAnAAQAoAAAegdQAdgeAAgoQAAgngdgeQgSgSgWgGIAAAAQgJgEgKgBIgLAAIgGAAIAAAAQgKABgJADIAAAAQgYAGgUATg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base fill
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#515151","#000000"],[0,1],7.4,6.6,0,7.4,6.6,18.8).s().p("AAABwQgtAAghghQghghAAguQAAgtAhghIABgBIABgBIADgCIACgDIABAAIAAgBQAUgQAZgGQAJgCAKgBIAGAAIALABQAKAAAJADIAAAAQAbAHAWAWQAhAhAAAtQAAAughAhQghAhguAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.7,-12.7,25.5,25.5);


(lib.GEN_pbbase06 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag1A2QgXgXAAgfQAAgeAXgXQAXgXAeAAQAfAAAXAXQAXAXAAAeQAAAfgXAXQgXAXgfAAQgeAAgXgXg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#475863","#A5B0B8"],[0,1],-3.8,-7.2,3.9,7.3).s().p("Ag4A6QgZgYAAgiQAAghAZgXQAXgZAhAAQAiAAAYAZQAYAXAAAhQAAAigYAYQgYAYgiAAQghAAgXgYgAg1g1QgXAXAAAeQAAAfAXAXQAXAXAeAAQAfAAAXgXQAXgXAAgfQAAgegXgXQgXgXgfAAQgeAAgXAXg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#7E8D9A","#475863"],[0,1],3.6,7.5,-3.6,-7.5).s().p("AhBBCQgdgcAAgmQAAglAdgcQAcgdAlAAQAmAAAcAdQAdAcAAAlQAAAmgdAcQgcAdgmAAQglAAgcgdgAg4g4QgZAXAAAhQAAAiAZAYQAXAYAhAAQAiAAAYgYQAYgYAAgiQAAghgYgXQgYgZgiAAQghAAgXAZg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.5,-9.5,19,19);


(lib.GEN_pbbase05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#292C2C","#111111"],[0,1],10,11,-9.9,-11).s().p("Ag8A8QgYgZAAgjQAAgjAYgZQAagYAiAAQAjAAAZAYQAZAZAAAjQAAAjgZAZQgZAZgjAAQgiAAgagZg");
	this.shape.setTransform(11,11.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#292C2C","#111111"],[0,1],-18.2,-11.7,18.3,11.8).s().p("AhTBeQgKAAAAgKIAAinQAAgKAKAAICnAAQAKAAAAAKIAACnQAAAKgKAAgAg/g8QgYAZAAAjQAAAjAYAYQAaAaAjgBQAiABAZgaQAZgYAAgjQAAgjgZgZQgZgZgiABQgjgBgaAZg");
	this.shape_1.setTransform(11.3,11.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#323434","#0D0D0D"],[0,1],-0.5,-0.5,0.6,0.5).s().p("AhdBnQgKAAAAgKIAAi5QAAgKAKAAIC7AAQAKAAAAAKIAAC5QAAAKgKAAgAhehTIAACnQAAAKAKAAICnAAQAKAAAAgKIAAinQAAgKgKAAIinAAQgKAAAAAKg");
	this.shape_2.setTransform(11.4,11.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhhBpQgIAAAAgJIAAi/QAAgJAIAAIDCAAQAJAAAAAJIAAC/QAAAJgJAAg");
	this.shape_3.setTransform(11.4,11.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#7E8D9A","#4E616D"],[0,1],0.3,0.5,-0.4,-0.2).s().p("AhhBsQgLAAAAgMIAAi/QAAgLALAAIDCAAQAMAAAAALIAAC/QAAAMgMAAgAhphfIAAC/QAAAJAIAAIDCAAQAJAAAAgJIAAi/QAAgJgJAAIjCAAQgIAAAAAJg");
	this.shape_4.setTransform(11.4,11.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,0.5,21.9,21.6);


(lib.GEN_knobcenter01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Base
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#232323").s().p("AhgBhQgogpAAg4QAAg3AogpQApgoA3AAQA4AAApAoQAoApAAA3QAAA4goApQgpAog4AAQg3AAgpgog");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#D7DBDB","#C5CAC9"],[0,1],5.1,5.6,-5.6,-4.6).s().p("AhoBpQgsgsAAg9QAAg8AsgsQAsgsA8AAQA9AAAsAsQAsAsAAA8QAAA9gsAsQgsAsg9AAQg8AAgsgsgAhihiQgqAqAAA4QAAA5AqAqQAqAqA4AAQA5AAAqgqQAqgqAAg5QAAg4gqgqQgqgqg5AAQg4AAgqAqg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#222222").s().p("AhiBjQgqgqAAg5QAAg4AqgqQAqgqA4AAQA5AAAqAqQAqAqAAA4QAAA5gqAqQgqAqg5AAQg4AAgqgqgAhghgQgoApAAA3QAAA4AoApQApAoA3AAQA4AAApgoQAogpAAg4QAAg3gogpQgpgog4AAQg3AAgpAog");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.9,-14.9,29.9,29.9);


(lib.GEN_knob23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444E50").s().p("AgcBiIAAijIAAggIALgBIAIAAIAAAeIAACSIASABIAAiTIAAgeIAUABIAAAhIAACjg");
	this.shape.setTransform(0.1,-12.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJBZIAAiSIAAgfIAJAAIAJAAIAAAfIAACSg");
	this.shape_1.setTransform(0.1,-13.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E1E1E1").s().p("AAAAIIgJAAIAAgLIAAgCIAAgCIAJAAIAJAAIAAACIAAACIAAALIgJAAg");
	this.shape_2.setTransform(0.1,-23.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2F3537").s().p("AAJAFIAAgLIAUABIAAAMIgUgCgAgcgFIATgBIAAALIgIABIgLABg");
	this.shape_3.setTransform(0.1,-23.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#D2D7D7","#D7DBDB","#DBDFDE","#C5CCCC"],[0.522,0.741,0.878,0.941],0,0,0,0,0,23.6).s().p("AhDDaQgOgWgXAHQgegQgbgaQgZgagQgdQAHgZgWgMQgKghAAgkQAAgjAJggQAcgIgNgdQAQgfAagaQAagaAegQQAbAJAKgYQATgGAWgDIAAAgIAACmIA5ABIAAimIAAggQAUACATAGQAIAYAdgJQAeAQAZAaQAbAaAQAeQgHAaAWAMQAKAggBAjQAAAkgKAhQgUANAFAYQgQAdgaAaQgaAageAQQgZgHgMAWQghAKgjAAQgjAAgggKg");
	this.shape_4.setTransform(0,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A6AEAC").s().p("AiqCqQhHhHAAhjQAAhkBHhHQA9g8BSgJIAAANQgVADgUAGQgJAYgcgJQgdAQgaAaQgaAagQAfQANAdgcAIQgKAgAAAjQAAAkAKAhQAXAMgHAZQAPAdAaAaQAaAaAeAQQAXgHAOAWQAhAKAiAAQAkAAAggKQAMgWAZAHQAfgQAagaQAZgaAQgdQgFgYAVgNQAKghAAgkQAAgjgJggQgWgMAGgaQgQgegagaQgagagegQQgdAJgIgYQgSgGgUgCIAAgOQBQAKA8A7QBHBHAABkQAABjhHBHQhHBHhkAAQhjAAhHhHg");
	this.shape_5.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.3,-24.5,48.5,48.9);


(lib.GEN_knob21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#E0E2E1","#D9DDDD"],[0.863,0.929],0,0,0,0,0,17.3).s().p("AgUCuQgXgDgXgKIAAAAQgXgKgUgOQAFgMgKgLQgLgKgMAFQgOgUgJgXQgKgXgDgXQAVgUgWgSQADgZALgXQAJgYAPgSQAdACgCgeQAUgPAXgKQAXgJAXgDQAWAXARgXQAXADAYAKIABAAQAXAJASAOQAAANAHAGQAHAJAOAAQAPAUALAXQAJAYADAXQgXAUAXATQgDAYgJAXQgKAXgPAUQgdACABAaQgTANgXAKQgZAKgXADQgUgSgTASg");
	this.shape.setTransform(0.1,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C5CAC9").s().p("AhHCtQhHgdgehJQgehHAehGQAehIBIgeQBGgdBHAdQBIAeAeBHQAeBHgeBIQgeBHhIAdQglAQgiAAQgkAAgjgPgAATCvQAYgDAYgKQAXgKATgOQgBgZAdgDQAPgTAKgYQAJgXAEgYQgYgSAXgUQgDgYgJgXQgKgYgQgTQgOgBgHgIQgHgHAAgMQgSgOgXgKIgBAAQgXgKgYgCQgQAXgWgXQgYADgWAJQgYAKgTAPQACAegegCQgOASgKAYQgKAXgDAZQAWARgWAUQADAYAKAXQAJAXAPATQALgEALAKQALAKgFAMQATAPAXAKIABAAQAWAJAXADQAKgJAKAAQAIAAALAKg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.8,-18.8,37.7,37.7);


(lib.GEN_knob14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#D2D7D7","#D7DBDB","#DBDFDE","#C5CCCC"],[0.522,0.741,0.878,0.941],0,0,0,0,0,17.3).s().p("AAACvQgYAAgYgHQABgNgOgFQgPgFgJAIQgUgMgRgSQgTgSgLgUQAMgcgbgJQgHgXAAgZQAAgYAHgXQAcgKgOgbQAMgVATgSQARgRAUgMQAgANAFgcQAYgHAYAAIAAAAQAYAAAXAGQAFAMAJAEQAKAEANgEQAVALASASQATASAMAVQgOAdAdAIQAGAXAAAYQAAAZgHAXQgZAPAKAWQgLAUgTASQgSATgVAMQgbgJgKAYQgXAGgYAAg");
	this.shape.setTransform(0.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A6AEAC").s().p("AAAC/QgbAAgZgHIAAgEQgCgLgNgFQgNgFgJAFIgEADQgWgNgTgTQgTgUgNgWIABgEQAJgZgXgKIgEgBQgHgaAAgbQAAgbAHgYIADgBQAZgLgKgZIgBgEQANgWATgUQATgTAWgNIAEACQAdAJAHgYIABgEQAZgHAbAAIAAAAQAbAAAYAHIACAEQAFAJAJAEQAIAEAMgDIAFgBQAXAMAUAUQAUAUAMAWIgCAFQgJAZAYAJIAEACQAHAZAAAaQAAAbgHAaIgGADQgSANAFATIACAFQgMAWgUAUQgUAUgXANIgGgCQgWgEgKASIgDAEQgYAHgbAAgAg9CWQAOAFgBANQAYAHAYAAIAAAAQAYAAAXgGQAKgYAbAJQAVgMASgTQATgSALgUQgKgWAZgPQAHgXAAgZQAAgYgGgXQgdgIAOgdQgMgVgTgSQgSgSgVgLQgNAEgKgEQgJgEgFgMQgXgGgYAAIAAAAQgYAAgYAHQgFAcgggNQgUAMgRARQgTASgMAVQAOAbgcAKQgHAXAAAYQAAAZAHAXQAbAJgMAcQALAUATASQARASAUAMQAGgFAHAAQAFAAAGACg");
	this.shape_1.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.1,-19.1,38.3,38.3);


(lib.GEN_knob13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#D2D7D7","#D7DBDB","#DBDFDE","#C5CCCC"],[0.522,0.741,0.878,0.941],-0.2,-0.3,0,-0.2,-0.3,18.1).s().p("AAAC5IAAAAQgHgIgIABQgGAAgGAFIgIgBQgGgMgJAAQgGAAgHAEIgGgCQgDgPgNAAQgEAAgGACIgHgEQAAgVgSACIgFAAIgFgFQAEgTgWgCIgBAAIgEgGQAKgWgXgFIgCAAIgCgFQALgTgVgLIgBgFQAQgQgUgPIAAgGQATgLgQgSIABgGQAWgKgOgUIACgFQAXgGgJgVIAEgFIADAAQATgBgDgXIAEgEIAFAAQAQABACgVIAGgEQAGACAFAAQANAAAEgRIAEgCQAGAEAFAAQALAAAHgNIAHgCQAIAGAHAAQAIAAAGgIIAEAAIABAAQAHAJAIAAQAHAAAIgHIAHABQAFANAKABQAGAAAIgGIAFACQACAQANAAQAFABAHgCIAGAEQgBASASAAIAFAAIAEAEIACACQgFAWATABIAFAAIAEAFQgHAVAUAEIABABIADAHQgIATAQAIIACAIQgPAPASAMIAAAFIAAACQgTAMAQAQIgBAIQgTAJALASIgDAHQgXAEAKAWIgFAGIAAAAQgVADAEATIgFAFIgCACIgCAAQgRAAgBARIgJAHIgEgBQgPAAgDANIgJAEQgGgDgEABQgJAAgGAKIgJACQgIgHgHAAQgHABgGAIIgHAAg");
	this.shape.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9FACAC").s().p("AAHC/IgHAAIAAAAIgCAAIgBgCQgFgGgGAAIgBAAQgEAAgFAEIgCACIgBAAIgIgCIgDAAIgCgDQgEgJgGAAIAAAAQgFAAgFADIgCACIgCgBIgGgCIgDgBIAAgCQgDgLgJgBQgEAAgEACIgDABIgCgCIgGgEIgCgCIgBgCQAAgIgDgEQgDgDgGAAIgBAAIgEABIgDAAIgBgCIgFgEIgCgCIABgDQABgHgDgEQgDgEgJgBIgDAAIgBgBIgFgHIgBgCIABgCQAEgJgCgFQgDgEgIgBIgFAAIgCgEIgCgEIgBgDIABgDQAEgHgBgFQgCgGgIgEIgCgBIAAgCIgCgHIgBgCIADgCQAGgGgBgFQgBgGgIgGIgBgBIAAgDIAAgGIAAgBIABgBQAHgFABgGQAAgFgGgHIgBgCIAAgCIABgIIABgCIACgBQAIgDACgGQABgFgFgIIgBgCIAAgCIACgGIABgCIADAAQAIgDADgFQADgGgDgIIgBgCIABgCIADgFIACgCIADAAIADAAQAHgBACgEQADgEgBgJIAAgCIABgCIAEgEIACgCIADAAIAEAAIABAAQAKAAACgQIABgCIACgBIAFgEIACgBIADAAIAIACQAKgBACgMIABgDIACgBIAFgCIACAAIADABQAEADAEAAQAIAAAGgKIABgCIACgBIAIgBIACgBIACACQAFAEAGAAQAFAAAGgHIABgCIACAAIAEAAIABAAIACAAIACADQAFAHAGAAQAFAAAGgGIACgBIADAAIAHACIADAAIABADQADAJAHAAQAEAAAHgEIACgBIADABIAFACIADABIAAADQABAKAKACQAEAAAGgCIACgBIABACIAHAEIABABIAAADQABANAMAAIAFAAIACAAIACABIAEAFIABACIACABIAAADQgCAJACAEQADAEAGAAIAFAAIACAAIACACIAEAFIABACIAAACQgDAIACAFQADAFAHACIAEACIAAABIAEAHIABACIgBADQgGANAMAGIACACIABACIABAIIAAACIgBACQgGAGAAAFQABAFAGAEIACACIAAADIAAAEIAAACIAAACIgCACQgHAEAAAFQAAAFAGAHIACACIgBACIgBAIIAAACIgDABQgHAEgCAFQgBAFAFAGIABADIgBACIgDAHIgBACIgDABQgIACgDAEQgCAFADAIIACADIgCACIgEAHIgCACIgDAAQgHAAgEAEQgDAEACAIIABADIgDABIgEAFIgCACIgCABIgCAAIgBAAQgNAAgBANIAAACIgCACIgJAGIgCABIgCAAIgDgBQgLAAgCAJIgBADIgCABIgJADIgCABIgCgBQgFgCgDAAIAAAAQgHABgEAHIgBACIgCAAIgKACIgCABIgCgCQgFgFgFABIgBAAQgFAAgEAGIgCADgAABC1IADAAQAHgKAJABIAAAAQAIgBAIAGIAFgBQAHgKAKgBQAFAAAGACIAEgCQAFgOASAAIADAAIAFgDQACgTAVgBIAAAAIAEgEQgCgKAFgGQAFgHAMgBIACAAIAAAAIgBgDQgEgLAEgIQAEgHAMgEIACAAIgBgCQgGgJACgIQACgIALgFIAAgEQgIgIABgJQAAgIAJgGIACgBIgCgBQgIgHgBgIQgBgIAIgIIgBgEQgRgKAIgUIgCgDQgLgDgEgIQgEgHAEgLIAAgBIgBAAIgDAAIAAAAQgNgBgEgIQgEgGABgMIgCgCIgDAAIAAAAQgVgBgCgTIAAgCIgBAAQgHACgEAAQgQgBgDgRIAAAAIgBAAQgIAFgGgBIgBAAQgLAAgHgNIAAgBIgBABQgJAHgIAAIAAAAQgJgBgHgKIAAgBIgBABQgIAJgJAAQgIAAgIgFIgDAAQgIAOgNAAQgFAAgGgDQgFASgQAAIAAAAIgKgBIgBgBIgBACQgEAYgTgBIAAAAIgDgBIgBAAIAAABQABAMgEAGQgFAIgMABIgBAAIgBAAQAEALgFAIQgDAIgMAEQAGAMgCAIQgCAJgMAGIgBAAIABABQAIAKgBAIQAAAJgJAGIgBAAIABAAQAKAJAAAJQACAJgJAIIAAABIABAAQAKAGADAJQACAIgFAKIAAABIABAAQAOACAEAJQAEAHgFAMIAAABIAAAAIABAAQANACAFAHQAFAGgBALIAAAAIAAAAIADAAIABAAQALAAAGAGQAFAFABALIAAACIADAAIAJgCIABAAQAPAAAFARIAAABIABgBQAHgEAGAAIAAAAQALgBAHAOIADAAQAHgFAHAAIADAAQAIAAAFAIg");
	this.shape_1.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.1,-19,38.2,38.2);


(lib.GEN_knob10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAA0IgJABIAAhoIAJgBIAAAAIAJABIAABog");
	this.shape.setTransform(0.1,-12.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E1E1E1").s().p("AAAAFIAAAAIgJABIAAgKIAJgBIAJABIAAAKIgJgBg");
	this.shape_1.setTransform(0.1,-18.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2F3537").s().p("AAcAHQgDgBgFAAIgKgBIgBAAIAAgLIAUACIAAALgAgcgEQAKgDAJABIAAALIgTACg");
	this.shape_2.setTransform(0.1,-18);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#444E50").s().p("AAJAzIAAhoIABAAIAKAAQAFAAADACIABAAIAABpgAgcgzIATgCIAABoQgIAAgLACg");
	this.shape_3.setTransform(0.1,-12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#D2D7D7","#D7DBDB","#DBDFDE","#C5CCCC"],[0.522,0.741,0.878,0.941],0,0,0,0,0,17.3).s().p("AAACvQgYAAgYgHQABgNgOgFQgPgFgJAIQgUgMgRgSQgTgSgLgUQAMgcgbgJQgHgXAAgZQAAgYAHgXQAcgKgOgbQAMgVATgSQARgRAUgMQAgANAFgcQAYgHAYAAIAAAAQAYAAAXAGQAFAMAJAEQAKAEANgEQAVALASASQATASAMAVQgOAdAdAIQAGAXAAAYQAAAZgHAXQgZAPAKAWQgLAUgTASQgSATgVAMQgbgJgKAYQgXAGgYAAg");
	this.shape_4.setTransform(0.1,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A6AEAC").s().p("AiDCEQg3g3gBhNQABhNA3g3QA3g3BMAAQBNAAA3A3QA3A3ABBNQgBBNg3A3Qg3A4hNAAQhMAAg3g4gAg9CXQAOAEAAAOQAXAGAYAAIAAAAQAYAAAXgGQALgYAaAJQAWgMASgSQASgTALgTQgKgXAagPQAHgXAAgZQgBgYgFgWQgdgJANgcQgMgVgSgTQgSgRgWgMQgNAEgJgEQgKgEgFgMQgWgFgZAAIAAAAQgYgBgXAHQgGAcgfgNQgVAMgRARQgSATgMAVQANAbgcAKQgHAWABAYQgBAZAHAXQAbAKgMAbQAMAUASATQARARAVAMQAFgFAHAAQAFAAAGADg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.8,-18.8,37.6,37.7);


(lib.basepanelglalreshieldtop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#1F1F1F","#32383D","#32383D","#1E1E1E","#1E1E1E"],[0,0.141,0.816,1,1],-19.5,-30.2,19.6,30.2).s().p("ACdEdQhkgngqhqIgBgBIhfkUQhBiVijAGIANgXQCoAABECdIAAABIBfEVQAnBhBbAkQBCAZBQgMIgKAYQgUACgSAAQg5AAgxgTg");
	this.shape.setTransform(52,356.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#292F34","#1E1E1E"],[0,1],-453.9,289.2,-405.9,308.2).s().p("Eg1nARiQhagShHg6QhCg1gphOIgCgFIgBgBIlAqXIAAgBQgxhwAVhIQAUhJBcghIABAAIBRgQIAAABIgBABIgBABIgCACIgQAWIg3AKQhQAagSBAQgSBDAtBoIAAAAIFAKWIABAEIABABQAoBLA+AyQBDA2BUASQCzAkENhyIFAiSIAAAAQHIj7I8jgIBkgmIAngPQDWhRDYhEQIHimIghoQKNh/JogUIBqgCQDggFChAEQDJAECkASIABAAQA5AJA6AHQBGAJBGAEIABAAQBrAHBsgBISjAAQCCgBA/g6QA+g7gEh0IAAqeIAAgDIAOgdIABAAIAAgBIABgEQADgNACgOIAAAmIABAEIAAKzQAEB/hFBBQhEA/iMABIyfAAIhYAAIgBAAQg7gBg6gDIgPgBQhHgEhHgJQg6gHg6gJQijgSjIgEQiggEjgAEIhpADQpnAUqLB/QofBnoGClQjWBFjWBQIABAAIgoAPIgBAAIhiAnQo7DfnID6IAAAAIlBCSIAAABQjSBZicAAQgzAAgsgKg");
	this.shape_1.setTransform(243.1,350);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#32383D","#1E1E1E"],[0,1],3.9,-19.5,6.8,-6.4).s().p("A6QP2QAZgEAbgIIgCAAIA2gTIADgBIABAAIBGgbIAAABQBMgcBNgaQBfgiBhgfICdgxIA5gRQGoh9G5hVQKKh+JqgVIBpgCQBagBArgzQAngzgHhbIAAgBIAAlAQAChGAUgrQAIgSAQgWIAQgUQAZgdAwgVQAVgKAYgHIACgBIAbgFQATgGAMgBQAZgDAdAAIAAAAIAIAAIe0AAQCAgBAvgaQAsgaAChEIAAmZIgBgRIAAAAQgCgYgHgTQgJgZgRgQIABAAQgRgPgYgFQgbgHgmAFIAAAAMh3HAYpIABgBIgTADIgBAAQgZAIgZANIgBAAQgYAMgTAXIAAAAQgJAJgHAMQgWAkAKAZQANAYArAIQA1AKBKgRIVFkXQBHgUA7AAIgOAXQgzABg7ARIgBAAI1FEXQhPATg5gLQg5gMgPghQgQghAbgtIABgCIABgBIAAgBIAQgWIACgCIABgBIABgBIABgBIABgBQAPgTAegQQAlgUAngFMB3IgYqQArgGAfAIIABABIAGABIADABIAAAAIAZAMIAEACIACACIAJAIQAVASALAeIADAHIAAABIAAABIABACQADALACAOIABANIABALIAAAIIAAGaIAAAGIgBAKQgBAOgDANIgCAEIAAABIAAAAIgPAdIAAADIgDAFQgNAQgTALQgyAdiHABI+1AAIgIAAQgbAAgYADIgBAAQgLABgQAFIgBAAIgdAGQhKAYggAkIAAAAQgaAfgLAXQgSApgCBAIAAFAQAHBlgsA3QgvA8hnAAIhpADQpnAVqIB+QnWBanDCIIicAxQiuA3iqA/IgxASIgTAHIgWAIIgmAOIAAAAQgjAKggAEg");
	this.shape_2.setTransform(251.2,283.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#181E23","#32383D"],[0,1],3.4,6.1,-3.3,-6).s().p("AgfAwQgjgUgCgnQgCgUAIgTQABgGAEgFIAWAFQgGAKgDALQgDAKABALIAAACIACAMQAFATATALQAVANAjgEIADgBIABAAIAMgCIADgBIADAAIAGABQADACACAFIAAACQAAADgCADQgCAEgEABQgXAGgTAAQgcAAgWgOg");
	this.shape_3.setTransform(660.5,188);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#32383D","#1E1E1E"],[0,1],-1.7,9.4,13.1,23).s().p("AgzE/QgUgLgMgQIgEgFIAAgDIgOgdIAAgBIgDgEIgEgaIgBgLIAAgGIAAmYIAAgIIABgLIACgNQACgOADgLIABgBIAAgBIAAgCIACgHQAMgeAUgSIAKgIIABgCIAEgCIAagLIAAgBIACAAIAGgCIACgBQAPgEAVAAIAJAWQgXgBgSAFQgYAGgQAPIAAAAQgRAPgJAaQgGASgDAYIAAAAQgBAJAAAIIAAGXQADBEAsAaQAoAYBuADIgHAWQhugEgsgag");
	this.shape_4.setTransform(2477.8,214.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#181E23","#32383D"],[0,1],-3.3,6.1,3.4,-6).s().p("Ag8A4QgEgBgDgEQgBgDAAgDIAAgCQABgFAEgCIAGgBIADAAIADABIAMACIABAAIADABQAjAEAVgNQASgLAGgTQACgFAAgHIAAgCQABgLgEgKQgCgLgGgKIAWgFIAFALQAIATgCAUQgDAngiAUQgWAOgcAAQgTAAgXgGg");
	this.shape_5.setTransform(2455.3,188);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#1E1E1E","#32383D","#32383D","#1E1E1E"],[0,0.286,0.773,1],131.9,-82.8,156.7,-10.6).s().p("ACGFSQgrg4AGhkIAAlBQgChAgRgoQgLgYgageIAAAAQghglhIgYIgcgFIgBAAQgQgFgLgBIgCAAQgXgEgbABIgJAAIhJAAIATgWIA2AAIAJAAIAAAAQAcgBAZAEQAMABAUAFIAaAGIACAAQAZAIAUAJQAvAWAZAdIAQAUQAQAVAHASQAUAsACBFIAAFBIAAABQgHBbAoAyQAiAqBEAIIgGAWQhLgKgngwg");
	this.shape_6.setTransform(2706.5,286.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#292F34","#1E1E1E"],[0,1],454,289.2,406,308.2).s().p("EAucAQTIgBgBIlAiSIgBAAQnHj6o7jfIhjgnIAAAAIgogPIAAAAQjVhQjXhFQoGilofhnQqLh/pmgUIhqgDIgvAAQjCgEiPAEQjIAEijASQg5AJg7AHQhGAJhIAEIgPABQg6ADg6ABIgCAAIhYAAIyfAAQiMgBhEg/QhEhBADh/IAAqzIABgEIAAgmIAFAbIACAEIAAABIAAAAIAOAdIAAADIAAKeQgDB0A9A7QBAA6CBABISjAAQBsABBrgHIABAAQBGgEBGgJQA6gHA6gJIAAAAQCkgSDKgEQCRgDDGADIAqABIBpACQJoAUKNB/QIhBoIHCmQDXBEDWBRIAoAPIBjAmQI8DgHID7IAAAAIFBCSQEMByCzgkQBVgSBDg2QA9gyAohLIABgBIABgEIFBqWIgBAAQAthogShDQgShAhQgaIg3gKIgQgWIgBgCIgBgBIgBgBIgBgBIBSAQIABAAQBcAhAUBJQAUBIgxBwIAAABIlAKXIgBABIgCAFQgpBOhBA1QhIA6hZASQgtAKgyAAQidAAjRhZg");
	this.shape_7.setTransform(2872.6,350);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#32383D","#1E1E1E"],[0,1],-4.2,-19.5,-7.1,-6.4).s().p("AZUP/IgBAAIglgOIgXgIIgTgHIgxgSQiqg/iug3IicgxQnDiInWhaQqHh+pogVIhpgDQgTAAgSgCIAHgVQAOACAQAAIBqACQJpAVKKB+QG5BVGpB9IA5ARICcAxQBhAfBfAiQBNAaBMAcIAAgBIBHAbIAAAAIADABIA2ATIgBAAQAaAIAZAEIAJAXQgggEgigKgEA6vALvI1EkXIgBAAQg8gRgzgBIgOgXQA7AABHAUIVFEXQBLARA0gKQAsgIAMgYQALgZgWgkQgHgMgJgJIgBAAQgTgXgYgMIAAAAQgZgNgagIIgBAAIgSgDIABABMh3IgYpIgWgCIgJgWQAQAAATACMB3IAYqQAnAFAlAUQAeAQAPATIABABIABABIABABIABABIACACIAQAWIAAABIABABIABACQAcAtgRAhQgPAhg5AMQgVAEgYAAQgpAAgygMgEg6agFRIgcAAIAHgWIAWAAId+AAIgTAWgEg+FgGvIAAgBIABABg");
	this.shape_8.setTransform(2864.9,283.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#181E23").s().p("EB1+gA9QnfhVm1gPIh0gDMi+5gADIszADIhzADQm1APnfBVI1SD8QAEgCACgEQACgCAAgEIAAgCQgCgEgDgCIgGgCIARgDIVAj4QHkhWGzgPQEggJK7ADMCwfAAAQK7gDEgAJQGzAPHjBWIVBD4IARADIgGACQgEACgBAEIAAACQAAAEABACQADAEAEACg");
	this.shape_9.setTransform(1557.9,174.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0E1114").s().p("ECOJAAAIAAAAIAAAAIAAAAgEiOIAAAIAAAAIAAAAIAAAAg");
	this.shape_10.setTransform(1557.9,188.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#32383D").s().p("ECMnADMQgOgQgUgLIgEgCQgPgIgUgFIgSgEI0zj1QnThdm+gMQkfgIq9AHMixXAAAQq9gHkgAIQm9AMnTBdI0zD1IgTAEQgTAFgPAIIgEACQgUALgOAQIgLAPIgWgFQAGgMAKgMQABgDADgCQATgUAbgNQAPgHASgEIAFgBIADgBIAQgCIUvj1QHUhdHBgNQEggIK9AHMCxXAAAQK9gHEgAIQHBANHUBdIUvD1IAQACIADABIAFABQASAEAOAHQAcANATAUQADACABADQAKAMAGAMIgWAFQgFgIgGgHg");
	this.shape_11.setTransform(1557.9,160.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1F272E").s().p("ECM0AAEQgTgSgcgNIDZAoIgBABIgHACIgCAAIAAABIgZALgEiPTAARIAAgBIgDAAIgGgCIgBgBIDYgoQgbANgTASIiHAYg");
	this.shape_12.setTransform(1557.9,178.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1A1A1A").s().p("ECOLAP5MkcVAAAQjKABjTgjQiUgYjqg5QkqhKhlgVQiAgch7gSISfAAQCMgBBDhAQBFhAgDh/IAAqxIgCgEIAAgmIACgKIAAgHIAAmaIAAgIIgCgKIgBgOQgCgOgDgLIAAgBIAAgBIAAgBIgBAAIgDgIQgLgdgUgTIgJgIIgDgCIgEgCICHgYQgDACgBADQgKALgGAMQgDAFgCAGQgIAUACAUQADApAiAUQAjAWA7gOIVTj+QHehVG1gPIBzgDIMzgDMC+6AADIB0ADQG0APHfBVIVTD+QA5AOAkgWQAjgUACgpQACgUgIgUIgFgLQgFgMgLgLQgBgDgDgCICHAYIgEACIgCACIgKAIQgUATgLAdIgDAIIAAAAIAAABIAAABIgBABQgDALgBAOIgDAOIgBAKIAAAIIAAGaIAAAHIABAKIAAAmIgBAEIAAKxQgDB/BEBAQBFBACMABISeAAQh7ASh/AcQhmAVkqBKQjqA5iUAYQjPAijIAAIgGAAg");
	this.shape_13.setTransform(1557.9,259.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#151515").s().p("ECOLACMMkcVAAAQjMABjVgiQiUgZjrg6QkphGhmgXQimgiiegWIgBAAIh/gPQA6ADA6ABIACAAIBYAAQB7ATB/AcQBmAUEqBIQDqA5CUAZQDTAiDKAAMEcVAAAQDKAADTgiQCTgZDrg5QEqhIBmgUQB/gcB7gTIBYAAIACAAQA6gBA6gDIh/APIgBAAQieAWimAiQhmAXkpBGQjrA6iUAZQjSAijJAAIgGgBg");
	this.shape_14.setTransform(1557.9,349.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#26292F").s().p("EDeRAImIicgxIg6gRQmoh9m6hVQqLh+pqgVIhpgDQgQAAgOgCQhEgHgigqQgogzAGhZIAAgBIAAlDQgBhFgUgsQgHgSgRgVIgQgUQgZgdgxgWQDGAcChAfIBcAUQDtAzC/BGIAhAMQCjA9E9CfQCwBYDgB0QMMGcC6BYICiBPIAbAOQhfgihhgfgEjg1AJZICihPQC7hYMLmcQDgh0CwhYQE9ifCjg9IAhgMQDAhGDsgzIBcgUQChgfDGgcQgxAWgYAdIgRAUQgQAVgIASQgUAsgBBFIAAFDIAAABQAGBZgnAzQgrAzhZAAIhqADQppAVqMB+Qm6BVmoB9Ig5ARIicAxQhhAfhgAiIAbgOg");
	this.shape_15.setTransform(1557.9,311.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#202223").s().p("AksEuIgJgYQBOAMBDgZQBagkAohhIBfkVIAAgBQBDidCoAAIAPAXQikgGhCCVIheEUIAAABQgsBqhjAnQgyATg4AAQgTAAgTgCg");
	this.shape_16.setTransform(3063.8,356.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#222222").s().p("ED8AAPqIlBiRIAAgBQnIj6o8jgIhjgmIgogPQjWhSjXhEQoHilojhoQqNh/pogUIhpgDIgqgBQjGgDiRADQjKAFikARIAAABQg6AJg6AHQhGAIhGAFIgBAAQhrAHhsgCIyjAAQiBAAhAg7Qg9g7ADh0IAAqeIAEAFQANARATALQAsAZBwAEIAdABIdsAAIBIAAIAJAAQAbgBAYAEIABAAQALABAQAFIABAAIAdAFQBKAYAgAlIAAAAQAaAeALAYQASAoABBAIAAFDQgGBkAsA4QAmAwBLAKQASACATAAIBpADQJnAUKKB+QHWBbHCCFICdAxQCuA4CqA/IAxASIATAHIAWAIIAmAOIAAAAQAjAJAgAFQBOAIBCgZQBkgnArhqIAAgBIBhkUQBBiVCkAGQAzACA7ARIABAAIVFEVQBPASA5gLQA5gLAPghQAQgggbgtIgCgCIAAgBIgBgBIA3ALQBQAcASA+QASBCgtBoIABAAIlBKXIgBADIgBACQgoBKg9AzQhDA2hVASQgqAIgwAAQiZAAjMhXgEkC+AQ5QhVgShDg2Qg+gzgnhKIgBgCIgCgDIlAqXIABAAQgthoAShCQASg+BPgcIA3gLIAAABIgBABIgBACQgbAtAQAgQAPAhA5ALQA5ALBPgSIVFkVIABAAQA7gRAzgCQCkgGBBCVIBhEUIAAABQArBqBjAnQBDAZBOgIQAggFAjgJIAAAAIAmgOIAWgIIATgHIAxgSQCqg/Cug4ICcgxQHDiFHWhbQKKh+JngUIBpgDQBngBAvg7QAsg4gHhkIAAlDQAChAASgoQALgYAageIAAAAQAgglBKgYIAdgFIABAAQAQgFALgBIABAAQAYgEAbABIAIAAIe1AAQCHgCAygcQATgLANgRIADgFIAAKeQAEB0g9A7QhAA7iBAAIykAAQhrAChrgHIgBAAQhHgFhGgIQg5gHg6gJIAAgBQilgRjJgFQiggDjhAEIhpADQpoAUqOB/QoiBooHClQjXBEjWBSIgoAPIhjAmQo8DgnID6IgBABIlACRQjMBXiZAAQgwAAgqgIg");
	this.shape_17.setTransform(1557.9,352);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2D3239").s().p("EDmcATCQgZgEgbgHIABAAIg1gTIgDgBIgBAAIhGgbIAAABQhNgdhMgaIgbgNIiihPQi7hZsLmbQjgh2iwhYQk9ifijg9IghgMQjAhGjsgyIhcgTQihgfjGgcQgUgJgYgIIgCAAIgbgGQgTgFgMgBQgagEgcABIAAAAIgJAAIg1AAI9/AAIgWgBQhtgDgrgXQgsgagDhFIAAmZQAAgIACgIIAAgBQACgYAGgSQAKgZARgQIgBAAQARgPAXgGQAUgFAXABIAXADMB3JAYoIgBAAIATADIAAAAQAaAHAZANIABAAQAYAMATAXIAAABQAJAJAHAMQAWAjgKAZQgNAYgrAJQg1AJhKgRI1FkXQhIgUg7AAQinAAhECdIAAABIhhEXQgoBhhaAkQgtARgzAAQgYAAgZgEgEjosAS1QhbgkgnhhIhhkXIAAgBQhEidioAAQg7AAhHAUI1FEXQhKARg1gJQgrgJgNgYQgKgZAWgjQAHgMAJgJIAAgBQATgXAYgMIABAAQAZgNAZgHIABAAIATgDIgBAAMB3JgYoIAAAAQAmgGAbAHQAYAGARAPIgBAAQARAQAJAZQAHASACAYIAAABIABAQIAAGZQgCBFgsAaQgvAZiAACI+0AAIgIAAIAAAAQgdgBgZAEQgMABgTAFIgbAGIgCAAQgYAIgVAJQjFAcihAfIhcATQjsAyjABGIghAMQijA9k9CfQixBYjfB2QsLGbi7BZIiiBPIgbANQhNAahMAdIAAgBIhGAbIgBAAIgDABIg2ATIACAAQgbAHgZAEQgZAEgYAAQgzAAgtgRgECLpgLDIgDAAIgBAAIgMgDIgDAAIgDgBIgRgDI1Bj6QnjhWmzgPQkggJq7ADMiwfAAAQq7gDkgAJQmzAPnkBWI1AD6IgRADIgDABIgDAAIgMADIgBAAIgDAAQgjAFgXgOQgTgLgFgTIgCgNIAAgCQgBgLADgLQADgLAGgKIALgOQAOgRAUgLIAEgCQAPgIATgFIATgDIUzj3QHThdG9gNQEggHK9AGMCxXAAAQK9gGEfAHQG+ANHTBdIUzD3IASADQAUAFAPAIIAEACQAUALAOARQAGAHAFAHQAGAKACALQAEALgBALIAAACQAAAHgCAGQgGATgSALQgRAKgYAAIgRgBg");
	this.shape_18.setTransform(1557.9,262.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// fill
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#32383D","#1E1E1E"],[0,1],393.1,23.8,390.2,36.9).s().p("AAAAAIAAAAIAAAAg");
	this.shape_19.setTransform(2467.5,239.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0E1114").s().p("ECOJAAAIAAAAIAAAAIAAAAgEiOIAAAIAAAAIAAAAIAAAAg");
	this.shape_20.setTransform(1557.9,188.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1A1A1A").s().p("ED73AX/IgBAAIlAiSIgBAAQnHj6o7jgIhjgmIAAAAIgogPIAAAAQjVhRjXhEQoGimohhpQqLh+pmgUIhqgDIgvgBQjCgDiPADQjIAFijARQg5AJg7AHQhGAJhIAEIgPACQg6ADg6ABIgCAAIhYAAQh7ASh/AcQhmAVkqBKQjrA5iTAYQjTAjjKgBMkcVAAAQjKABjTgjQiUgYjqg5QkqhKhmgVQh/gch7gSIhYAAIgCAAQg6gBg6gDIgPgCQhIgEhGgJQg7gHg5gJQijgRjIgFQiggEjgAFIhqADQpmAUqLB+QohBpoGCmQjXBEjWBRIABAAIgoAPIAAAAIhjAmQo7DgnHD6IgBAAIlACSIgBAAQkUB1i5glQhagThHg6QhBg0gqhPIgBgEIgBgCIlBqWIAAgBQgxhxAVhIQAUhLBcggIABAAIBSgRIABgBQAPgSAegQQAlgUAngGMB3KgYpQArgGAfAHIDYgqQAPgHASgEIAFgCIADAAIAQgDIUvj3QHUhdHBgMQEggIK9AHMCxXAAAQK9gHEgAIQHBAMHUBdIUvD3IAQADIADAAIAFACQASAEAOAHIDZAqQARgEAWAAQAQAAASADMB3LAYpQAnAGAlAUQAeAQAPASIABABIBSARIABAAQBcAgAUBLQAUBIgxBxIAAABIlAKWIgBACIgCAEQgpBPhBA0QhIA6hZATQgtAJgyAAQidAAjRhZgECOIgJeIAAAAIAAgCIAAACgECOJgRkIAAgBIAAAAIAAABgEiOIgRkIAAgBIAAAAIAAABg");
	this.shape_21.setTransform(1557.9,300.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#151515").s().p("ECOLACMMkcVAAAQjMABjVgiQiUgZjrg6QkphGhmgXQimgiiegWIgBAAIh/gPQA6ADA6ABIACAAIBYAAQB7ATB/AcQBmAUEqBIQDqA5CUAZQDTAiDKAAMEcVAAAQDKAADTgiQCTgZDrg5QEqhIBmgUQB/gcB7gTIBYAAIACAAQA6gBA6gDIh/APIgBAAQieAWimAiQhmAXkpBGQjrA6iUAZQjSAijJAAIgGgBg");
	this.shape_22.setTransform(1557.9,349.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162.7,138.3,3441.1,324.8);


(lib.point_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.point("synched",0);
	this.instance.setTransform(-62.1,1.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AghA/IgCgPIAJACQAFAAAEgCQADgCACgDIAFgMIABgEIgjhbIARAAIATA2IAFAUIAGgUIAUg2IAQAAIgjBdIgHAVQgEAIgGAEQgFADgIAAQgEAAgGgCg");
	this.shape.setTransform(80.3,27.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAHgEAEgHQACgFAAgLIAAgFQgIADgPACg");
	this.shape_1.setTransform(70.7,25.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_2.setTransform(63.7,23.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgnBBIAAh/IAPAAIAAAMQAEgHAHgEQAGgDAIAAQAMAAAIAGQAKAGAEALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgGAAgHgDQgHgDgDgFIAAAtgAgRgqQgIAJAAASQAAAQAIAJQAHAIAKAAQAIAAAJgJQAGgIAAgRQAAgSgGgJQgIgJgJAAQgKAAgHAKg");
	this.shape_3.setTransform(57,27);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_4.setTransform(47.1,25.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgHBAIAAhcIAOAAIAABcgAgHgsIAAgTIAOAAIAAATg");
	this.shape_5.setTransform(40.7,23.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag0BAIAAh/IAtAAQANAAAHACQAMACAHAHQALAJAFANQAFAOAAAQQAAANgEAMQgDALgGAIQgFAHgGAFQgHADgJADQgJACgJAAgAgjAxIAcAAQAKAAAIgCQAHgDAEgFQAGgFAEgLQADgKAAgNQAAgUgHgLQgGgLgKgDQgHgCgNgBIgbAAg");
	this.shape_6.setTransform(32.4,23.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_7.setTransform(15.7,25.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_8.setTransform(5.7,25.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgGBAIAAhcIANAAIAABcgAgGgsIAAgTIANAAIAAATg");
	this.shape_9.setTransform(-1.3,23.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_10.setTransform(-5.7,23.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAJgDIAAgEQAAgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAFAEABAGIABAPIAAATQAAAWAAAGQABAGADAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgDAEQgBADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQADgFgBgLIAAgFQgIADgQACg");
	this.shape_11.setTransform(-13.3,25.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_12.setTransform(-23.4,25.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_13.setTransform(-30.7,23.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgGBAIAAhcIAOAAIAABcgAgGgsIAAgTIAOAAIAAATg");
	this.shape_14.setTransform(-35.3,23.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgYA9QgMgFgHgKQgGgKgBgOIAQgBQACAKAEAGQAEAHAJADQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgEQgEgFgIgDIgVgHQgRgDgHgDQgKgEgEgIQgFgHAAgJQAAgKAGgIQAFgIALgEQALgFAMAAQANAAALAFQALAEAGAJQAGAJAAAMIgQABQgCgMgHgHQgIgGgOAAQgOAAgHAGQgHAGAAAHQAAAIAFADQAFAFASAFQAVAFAIADQALADAGAJQAFAHAAALQAAAKgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape_15.setTransform(-43.4,23.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_16.setTransform(172.7,1.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQAAgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAEAEACAGIABAPIAAATQAAAWABAGQAAAGADAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgQACg");
	this.shape_17.setTransform(165.7,3.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_18.setTransform(156.5,3.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgHBAIAAhbIAOAAIAABbgAgHgtIAAgSIAOAAIAAASg");
	this.shape_19.setTransform(149.7,1.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_20.setTransform(145.3,1.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAGAAQAIAAAIAFIgGAPQgFgEgGAAQgGAAgCADQgDADgDAGQgCAIAAAKIAAAvg");
	this.shape_21.setTransform(140.4,3.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgVAMgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAIAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_22.setTransform(131.7,3.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgIBAIgxh/IASAAIAhBcQAFALABAKIAGgVIAjhcIARAAIgyB/g");
	this.shape_23.setTransform(121.7,1.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_24.setTransform(105.7,3.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAWBAIAAg7QAAgKgGgFQgEgGgKAAQgFAAgHAEQgFADgDAHQgDAEAAALIAAAzIgQAAIAAh/IAQAAIAAAuQALgMAPAAQALAAAHADQAIAEADAIQAEAHAAAMIAAA7g");
	this.shape_25.setTransform(95.7,1.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_26.setTransform(88.3,1.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgMIAOAAIAAgKQAAgKACgEQACgHAGgDQADgEALAAIAPACIgDANIgJgBQgHAAgDAEQgDADAAAIIAAAJIASAAIAAAMIgSAAIAABPg");
	this.shape_27.setTransform(78.6,1.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgMIAOAAIAAgKQAAgKACgEQACgHAGgDQADgEALAAIAPACIgDANIgJgBQgHAAgDAEQgDADAAAIIAAAJIASAAIAAAMIgSAAIAABPg");
	this.shape_28.setTransform(74,1.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_29.setTransform(66,3.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgLAAgPQAAgNAFgKQAFgLAJgHQAJgFALAAQAHgBAHAEQAGAEAEAFIAAguIAQAAIAAB/IgPAAIAAgMQgIAOgRAAQgKAAgJgGgAgQgJQgGAJAAAQQgBASAIAJQAIAJAIAAQAKAAAHgJQAIgIgBgSQABgRgIgJQgHgJgLAAQgIAAgIAJg");
	this.shape_30.setTransform(50.7,1.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_31.setTransform(41,3.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQAMAAAHADQAHACAEAFQADAEACAGIABAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgPACg");
	this.shape_32.setTransform(31,3.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_33.setTransform(16,3.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_34.setTransform(6,3.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_35.setTransform(-8.5,3.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_36.setTransform(-18,3.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAIAAAJAFIgFAPQgHgEgFAAQgGAAgCADQgDADgCAGQgDAIAAAKIAAAvg");
	this.shape_37.setTransform(-25.2,3.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_38.setTransform(-34,3.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgHBAIAAhvIgrAAIAAgQIBlAAIAAAQIgrAAIAABvg");
	this.shape_39.setTransform(-43.8,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.6,-10.4,246.6,46.2);


(lib.RMIC_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.instance = new lib.GEN_screw02("synched",0);
	this.instance.setTransform(162.4,43.6,1,1,0,0,0,1.8,-1.7);

	this.instance_1 = new lib.GEN_screw02("synched",0);
	this.instance_1.setTransform(20,34,1,1,0,0,0,1.8,-1.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#657381").s().p("ABNHPIABAAIujoqQgwgjAWhGIBgkLIAAAAQAUg1AygUQAwgUBBALIVKEBQBUAQAhA4QAiA9gnBYIjMG8IgBABQhVCgikALIggABQiYAAiXhXg");
	this.shape.setTransform(90.8,57.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#7E8D9A","#4E616D"],[0,1],0.2,-23.2,0.5,-10.3).s().p("ABDHhIAAgBIujorIgBAAQg8gqAbhVIAAgBIBgkLIAAAAQAYg9A5gYIABAAQA0gWBIANIVJEBQBfARAlBAQAnBEgsBjIAAABIjNG8IAAABQhaCriwALIAAAAIgjABQicAAibhZgAGcIlQCkgLBVigIABgBIDMm8QAnhYgig9Qghg4hUgQI1KkBQhBgLgwAUQgyAUgUA1IAAAAIhgELQgWBGAwAjIOjIqIgBAAQCmBgCpgKg");
	this.shape_1.setTransform(90.8,57.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,181.6,114.1);


(lib.LMIC_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.instance = new lib.GEN_screw02("synched",0);
	this.instance.setTransform(19.3,43.6,1,1,0,0,0,1.8,-1.7);

	this.instance_1 = new lib.GEN_screw02("synched",0);
	this.instance_1.setTransform(161.7,34,1,1,0,0,0,1.8,-1.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#7E8D9A","#4E616D"],[0,1],4.3,-14.9,17.3,2.2).s().p("AmcI5IAAAAQiwgLhairIAAgBIjNm8IAAgBQgshjAnhEQAlhABfgRIVJkBQBIgNA0AWIABAAQA5AYAYA9IAAAAIBgELIAAABQAbBVg8AqIgBAAIujIrIAAABQibBZicAAIgjgBgAJZohI1KEBQhUAQghA4QgiA9AnBYIDMG8IABABQBVCgCkALQCpAKCmhgIgBAAIOjoqQAwgjgWhGIhgkLIAAAAQgUg1gygUQgfgNglAAQgWAAgXAEg");
	this.shape.setTransform(90.8,57.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#657381").s().p("AmbIlQikgLhVigIgBgBIjMm8QgnhYAig9QAhg4BUgQIVKkBQBBgLAwAUQAyAUAUA1IAAAAIBgELQAWBGgwAjIujIqIABAAQiXBXiYAAIgggBg");
	this.shape_1.setTransform(90.8,57.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,181.6,114.1);


(lib.MCP_vs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lit_green
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33C300").s().p("ACEAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAADADQAEADAAAGQAAAEgEADIAAABQgDADgEAAQgFAAgDgDgABhAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAA+AmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAAbAmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAFAAADADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAgHAmIAAgBQgDgDAAgEQAAgGADgDQAEgDADAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgDAAgEgDgAgqAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAFAAADADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhNAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhwAmIAAgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAiSAmIgBgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgDgDgAByARQgDgCAAgGQAAgFADgDQADgBAGAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgGAAgDgEgABPARQgDgCAAgGQAAgFADgDQAEgBAFAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgFAAgEgEgAAsARQgDgCAAgGQAAgFADgDQAEgBAFAAQAFAAADABQADADAAAFQAAAGgDACQgDAEgFAAQgFAAgEgEgAAJARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAAEABQADADAAAFQAAAGgDACQgEAEgFAAQgEAAgEgEgAgYARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAADABQAEADAAAFQAAAGgEACQgDAEgFAAQgEAAgEgEgAg7ARQgDgCAAgGQAAgFADgDQAEgBAEAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgEAAgEgEgAheARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgAiBARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgACDAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAADADQAEAEAAAEQAAAFgEAEQgDABgEAAQgGAAgDgBgABgAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgGAAgDgBgAA9AAQgDgEAAgFQAAgEADgEQAEgDAFAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgFAAgEgBgAAaAAQgDgEAAgFQAAgEADgEQAEgDAFAAQAFAAADADQADAEAAAEQAAAFgDAEQgDABgFAAQgFAAgEgBgAgHAAQgDgEAAgFQAAgEADgEQAEgDADAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgDAAgEgBgAgqAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDABgFAAQgEAAgEgBgAhNAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgEAAgEgBgAhwAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgAiTAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgABygUQgDgDAAgFQAAgFADgEQADgDAGAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgGAAgDgDgABPgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgFAAgEgDgAAsgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAFAAADADQADAEAAAFQAAAFgDADQgDADgFAAQgFAAgEgDgAAJgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAAEADQADAEAAAFQAAAFgDADQgEADgFAAQgEAAgEgDgAgYgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAADADQAEAEAAAFQAAAFgEADQgDADgFAAQgEAAgEgDgAg7gUQgDgDAAgFQAAgFADgEQAEgDAEAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgEAAgEgDgAhegUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDgAiBgUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDg");
	this.shape.setTransform(0,7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Text
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMAjIAAgJIAEACIAFABQADAAACgCQADgDAAgFQAAgDgBgCIgEgIIgGgGQgEgFgCgEQgCgEAAgFQAAgIAFgGQAFgFAFAAQAFAAAGADIAAAIQgFgCgEAAQgDAAgCACQgCADAAAEIABAGIAGAKIAJALQADAEAAAHQAAAIgFAGQgFAFgGAAQgFAAgGgDg");
	this.shape_1.setTransform(4,-5.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMAxIAUhhIAFAAIgUBhg");
	this.shape_2.setTransform(0.2,-4.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgDAlIgPhJIAKAAIAIA3IAJg3IAKAAIgQBJg");
	this.shape_3.setTransform(-3.8,-5.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3C3C3C").s().p("ACEAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAADADQAEADAAAGQAAAEgEADIAAABQgDADgEAAQgFAAgDgDgABhAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAA+AmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAAbAmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAFAAADADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAgHAmIAAgBQgDgDAAgEQAAgGADgDQAEgDADAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgDAAgEgDgAgqAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAFAAADADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhNAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhwAmIAAgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAiSAmIgBgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgDgDgAByARQgDgCAAgGQAAgFADgDQADgBAGAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgGAAgDgEgABPARQgDgCAAgGQAAgFADgDQAEgBAFAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgFAAgEgEgAAsARQgDgCAAgGQAAgFADgDQAEgBAFAAQAFAAADABQADADAAAFQAAAGgDACQgDAEgFAAQgFAAgEgEgAAJARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAAEABQADADAAAFQAAAGgDACQgEAEgFAAQgEAAgEgEgAgYARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAADABQAEADAAAFQAAAGgEACQgDAEgFAAQgEAAgEgEgAg7ARQgDgCAAgGQAAgFADgDQAEgBAEAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgEAAgEgEgAheARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgAiBARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgACDAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAADADQAEAEAAAEQAAAFgEAEQgDABgEAAQgGAAgDgBgABgAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgGAAgDgBgAA9AAQgDgEAAgFQAAgEADgEQAEgDAFAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgFAAgEgBgAAaAAQgDgEAAgFQAAgEADgEQAEgDAFAAQAFAAADADQADAEAAAEQAAAFgDAEQgDABgFAAQgFAAgEgBgAgHAAQgDgEAAgFQAAgEADgEQAEgDADAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgDAAgEgBgAgqAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDABgFAAQgEAAgEgBgAhNAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgEAAgEgBgAhwAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgAiTAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgABygUQgDgDAAgFQAAgFADgEQADgDAGAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgGAAgDgDgABPgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgFAAgEgDgAAsgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAFAAADADQADAEAAAFQAAAFgDADQgDADgFAAQgFAAgEgDgAAJgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAAEADQADAEAAAFQAAAFgDADQgEADgFAAQgEAAgEgDgAgYgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAADADQAEAEAAAFQAAAFgEADQgDADgFAAQgEAAgEgDgAg7gUQgDgDAAgFQAAgFADgEQAEgDAEAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgEAAgEgDgAhegUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDgAiBgUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDg");
	this.shape_4.setTransform(0,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Base
	this.instance = new lib.MCP_pbbase("synched",0);
	this.instance.setTransform(0.1,-0.1,1,1,0,0,0,17.7,17.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-23.3,46.7,46.2);


(lib.MCP_vorloc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lit_green
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33C300").s().p("ACEAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAADADQAEADAAAGQAAAEgEADIAAABQgDADgEAAQgFAAgDgDgABhAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAA+AmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAAbAmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAFAAADADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAgHAmIAAgBQgDgDAAgEQAAgGADgDQAEgDADAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgDAAgEgDgAgqAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAFAAADADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhNAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhwAmIAAgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAiSAmIgBgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgDgDgAByARQgDgCAAgGQAAgFADgDQADgBAGAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgGAAgDgEgABPARQgDgCAAgGQAAgFADgDQAEgBAFAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgFAAgEgEgAAsARQgDgCAAgGQAAgFADgDQAEgBAFAAQAFAAADABQADADAAAFQAAAGgDACQgDAEgFAAQgFAAgEgEgAAJARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAAEABQADADAAAFQAAAGgDACQgEAEgFAAQgEAAgEgEgAgYARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAADABQAEADAAAFQAAAGgEACQgDAEgFAAQgEAAgEgEgAg7ARQgDgCAAgGQAAgFADgDQAEgBAEAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgEAAgEgEgAheARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgAiBARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgACDAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAADADQAEAEAAAEQAAAFgEAEQgDABgEAAQgGAAgDgBgABgAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgGAAgDgBgAA9AAQgDgEAAgFQAAgEADgEQAEgDAFAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgFAAgEgBgAAaAAQgDgEAAgFQAAgEADgEQAEgDAFAAQAFAAADADQADAEAAAEQAAAFgDAEQgDABgFAAQgFAAgEgBgAgHAAQgDgEAAgFQAAgEADgEQAEgDADAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgDAAgEgBgAgqAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDABgFAAQgEAAgEgBgAhNAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgEAAgEgBgAhwAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgAiTAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgABygUQgDgDAAgFQAAgFADgEQADgDAGAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgGAAgDgDgABPgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgFAAgEgDgAAsgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAFAAADADQADAEAAAFQAAAFgDADQgDADgFAAQgFAAgEgDgAAJgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAAEADQADAEAAAFQAAAFgDADQgEADgFAAQgEAAgEgDgAgYgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAADADQAEAEAAAFQAAAFgEADQgDADgFAAQgEAAgEgDgAg7gUQgDgDAAgFQAAgFADgEQAEgDAEAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgEAAgEgDgAhegUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDgAiBgUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDg");
	this.shape.setTransform(0,7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Text
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHAfQgHgHAAgWQAAgXAHgHQAGgJAHAAIAJABIAAAKIgGgCQgGAAgDAGQgEAGAAAQIABAQQABAGACADQADAEAFgBIAHgBIAAAIQgEADgFAAQgHAAgGgHg");
	this.shape_1.setTransform(13.2,-5.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLAjQgEgEgCgHQgCgHAAgRQAAgXAFgHQAEgHAKAAQAMAAAEAIQAEAIAAAVQAAARgCAHQgBAHgFADQgFAEgHAAQgGAAgFgDgAgGgXQgDAGAAAOIAAADQAAAPACAIQACAHAFAAQAEAAADgEQADgEAAgTIAAgDQAAgTgDgFQgCgFgFAAQgEAAgCAGg");
	this.shape_2.setTransform(8,-5.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMAlIAAhJIAKAAIAABAIAPAAIAAAJg");
	this.shape_3.setTransform(3.7,-5.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAFAlIgJgjIgBAAIAAAjIgKAAIAAhJIAOAAQAPAAAAATQAAAJgDAEQgCAEgGABIANAkgAgFgDQAFAAACgDQACgDAAgHQAAgGgCgDQgCgDgFAAIAAAAg");
	this.shape_4.setTransform(-3,-5.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgLAjQgEgEgCgHQgCgHAAgRQAAgXAFgHQAEgHAKAAQAMAAAEAIQAEAIAAAVQAAARgCAHQgBAHgFADQgFAEgHAAQgGAAgFgDgAgGgXQgDAGAAAOIAAADQAAAPACAIQACAHAFAAQAEAAADgEQADgEAAgTIAAgDQAAgTgDgFQgCgFgFAAQgEAAgCAGg");
	this.shape_5.setTransform(-8.3,-5.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgDAlIgPhJIAKAAIAIA3IAJg3IAKAAIgQBJg");
	this.shape_6.setTransform(-13.2,-5.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3C3C3C").s().p("ACEAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAADADQAEADAAAGQAAAEgEADIAAABQgDADgEAAQgFAAgDgDgABhAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAA+AmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAAbAmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAFAAADADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAgHAmIAAgBQgDgDAAgEQAAgGADgDQAEgDADAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgDAAgEgDgAgqAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAFAAADADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhNAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhwAmIAAgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAiSAmIgBgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgDgDgAByARQgDgCAAgGQAAgFADgDQADgBAGAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgGAAgDgEgABPARQgDgCAAgGQAAgFADgDQAEgBAFAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgFAAgEgEgAAsARQgDgCAAgGQAAgFADgDQAEgBAFAAQAFAAADABQADADAAAFQAAAGgDACQgDAEgFAAQgFAAgEgEgAAJARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAAEABQADADAAAFQAAAGgDACQgEAEgFAAQgEAAgEgEgAgYARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAADABQAEADAAAFQAAAGgEACQgDAEgFAAQgEAAgEgEgAg7ARQgDgCAAgGQAAgFADgDQAEgBAEAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgEAAgEgEgAheARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgAiBARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgACDAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAADADQAEAEAAAEQAAAFgEAEQgDABgEAAQgGAAgDgBgABgAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgGAAgDgBgAA9AAQgDgEAAgFQAAgEADgEQAEgDAFAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgFAAgEgBgAAaAAQgDgEAAgFQAAgEADgEQAEgDAFAAQAFAAADADQADAEAAAEQAAAFgDAEQgDABgFAAQgFAAgEgBgAgHAAQgDgEAAgFQAAgEADgEQAEgDADAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgDAAgEgBgAgqAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDABgFAAQgEAAgEgBgAhNAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgEAAgEgBgAhwAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgAiTAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgABygUQgDgDAAgFQAAgFADgEQADgDAGAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgGAAgDgDgABPgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgFAAgEgDgAAsgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAFAAADADQADAEAAAFQAAAFgDADQgDADgFAAQgFAAgEgDgAAJgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAAEADQADAEAAAFQAAAFgDADQgEADgFAAQgEAAgEgDgAgYgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAADADQAEAEAAAFQAAAFgEADQgDADgFAAQgEAAgEgDgAg7gUQgDgDAAgFQAAgFADgEQAEgDAEAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgEAAgEgDgAhegUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDgAiBgUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDg");
	this.shape_7.setTransform(0,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Base
	this.instance = new lib.MCP_pbbase("synched",0);
	this.instance.setTransform(0.1,-0.1,1,1,0,0,0,17.7,17.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-23.3,46.7,46.2);


(lib.MCP_vnav = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lit_green
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33C300").s().p("ACEAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAADADQAEADAAAGQAAAEgEADIAAABQgDADgEAAQgFAAgDgDgABhAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAA+AmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAAbAmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAFAAADADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAgHAmIAAgBQgDgDAAgEQAAgGADgDQAEgDADAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgDAAgEgDgAgqAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAFAAADADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhNAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhwAmIAAgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAiSAmIgBgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgDgDgAByARQgDgCAAgGQAAgFADgDQADgBAGAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgGAAgDgEgABPARQgDgCAAgGQAAgFADgDQAEgBAFAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgFAAgEgEgAAsARQgDgCAAgGQAAgFADgDQAEgBAFAAQAFAAADABQADADAAAFQAAAGgDACQgDAEgFAAQgFAAgEgEgAAJARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAAEABQADADAAAFQAAAGgDACQgEAEgFAAQgEAAgEgEgAgYARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAADABQAEADAAAFQAAAGgEACQgDAEgFAAQgEAAgEgEgAg7ARQgDgCAAgGQAAgFADgDQAEgBAEAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgEAAgEgEgAheARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgAiBARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgACDAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAADADQAEAEAAAEQAAAFgEAEQgDABgEAAQgGAAgDgBgABgAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgGAAgDgBgAA9AAQgDgEAAgFQAAgEADgEQAEgDAFAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgFAAgEgBgAAaAAQgDgEAAgFQAAgEADgEQAEgDAFAAQAFAAADADQADAEAAAEQAAAFgDAEQgDABgFAAQgFAAgEgBgAgHAAQgDgEAAgFQAAgEADgEQAEgDADAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgDAAgEgBgAgqAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDABgFAAQgEAAgEgBgAhNAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgEAAgEgBgAhwAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgAiTAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgABygUQgDgDAAgFQAAgFADgEQADgDAGAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgGAAgDgDgABPgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgFAAgEgDgAAsgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAFAAADADQADAEAAAFQAAAFgDADQgDADgFAAQgFAAgEgDgAAJgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAAEADQADAEAAAFQAAAFgDADQgEADgFAAQgEAAgEgDgAgYgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAADADQAEAEAAAFQAAAFgEADQgDADgFAAQgEAAgEgDgAg7gUQgDgDAAgFQAAgFADgEQAEgDAEAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgEAAgEgDgAhegUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDgAiBgUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDg");
	this.shape.setTransform(0,7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Text
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgDAlIgPhJIAKAAIAIA3IAJg3IAKAAIgQBJg");
	this.shape_1.setTransform(7.1,-5.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAKAlIgDgPIgOAAIgCAPIgKAAIAQhJIAGAAIARBJgAgFAOIALAAIgGghg");
	this.shape_2.setTransform(2.9,-5.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAJAlIgRgxIAAAxIgJAAIAAhJIAJAAIAQAxIAAgxIAJAAIAABJg");
	this.shape_3.setTransform(-2.2,-5.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgDAlIgPhJIAKAAIAIA3IAJg3IAKAAIgQBJg");
	this.shape_4.setTransform(-7.1,-5.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3C3C3C").s().p("ACEAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAADADQAEADAAAGQAAAEgEADIAAABQgDADgEAAQgFAAgDgDgABhAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAA+AmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAAbAmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAFAAADADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAgHAmIAAgBQgDgDAAgEQAAgGADgDQAEgDADAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgDAAgEgDgAgqAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAFAAADADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhNAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhwAmIAAgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAiSAmIgBgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgDgDgAByARQgDgCAAgGQAAgFADgDQADgBAGAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgGAAgDgEgABPARQgDgCAAgGQAAgFADgDQAEgBAFAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgFAAgEgEgAAsARQgDgCAAgGQAAgFADgDQAEgBAFAAQAFAAADABQADADAAAFQAAAGgDACQgDAEgFAAQgFAAgEgEgAAJARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAAEABQADADAAAFQAAAGgDACQgEAEgFAAQgEAAgEgEgAgYARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAADABQAEADAAAFQAAAGgEACQgDAEgFAAQgEAAgEgEgAg7ARQgDgCAAgGQAAgFADgDQAEgBAEAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgEAAgEgEgAheARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgAiBARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgACDAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAADADQAEAEAAAEQAAAFgEAEQgDABgEAAQgGAAgDgBgABgAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgGAAgDgBgAA9AAQgDgEAAgFQAAgEADgEQAEgDAFAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgFAAgEgBgAAaAAQgDgEAAgFQAAgEADgEQAEgDAFAAQAFAAADADQADAEAAAEQAAAFgDAEQgDABgFAAQgFAAgEgBgAgHAAQgDgEAAgFQAAgEADgEQAEgDADAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgDAAgEgBgAgqAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDABgFAAQgEAAgEgBgAhNAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgEAAgEgBgAhwAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgAiTAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgABygUQgDgDAAgFQAAgFADgEQADgDAGAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgGAAgDgDgABPgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgFAAgEgDgAAsgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAFAAADADQADAEAAAFQAAAFgDADQgDADgFAAQgFAAgEgDgAAJgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAAEADQADAEAAAFQAAAFgDADQgEADgFAAQgEAAgEgDgAgYgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAADADQAEAEAAAFQAAAFgEADQgDADgFAAQgEAAgEgDgAg7gUQgDgDAAgFQAAgFADgEQAEgDAEAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgEAAgEgDgAhegUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDgAiBgUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDg");
	this.shape_5.setTransform(0,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Base
	this.instance = new lib.MCP_pbbase("synched",0);
	this.instance.setTransform(0,0.1,1,1,0,0,0,17.7,17.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-23.2,46.7,46.2);


(lib.MCP_speed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lit_green
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33C300").s().p("ACEAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAADADQAEADAAAGQAAAEgEADIAAABQgDADgEAAQgFAAgDgDgABhAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAA+AmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAAbAmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAFAAADADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAgHAmIAAgBQgDgDAAgEQAAgGADgDQAEgDADAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgDAAgEgDgAgqAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAFAAADADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhNAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhwAmIAAgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAiSAmIgBgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgDgDgAByARQgDgCAAgGQAAgFADgDQADgBAGAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgGAAgDgEgABPARQgDgCAAgGQAAgFADgDQAEgBAFAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgFAAgEgEgAAsARQgDgCAAgGQAAgFADgDQAEgBAFAAQAFAAADABQADADAAAFQAAAGgDACQgDAEgFAAQgFAAgEgEgAAJARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAAEABQADADAAAFQAAAGgDACQgEAEgFAAQgEAAgEgEgAgYARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAADABQAEADAAAFQAAAGgEACQgDAEgFAAQgEAAgEgEgAg7ARQgDgCAAgGQAAgFADgDQAEgBAEAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgEAAgEgEgAheARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgAiBARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgACDAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAADADQAEAEAAAEQAAAFgEAEQgDABgEAAQgGAAgDgBgABgAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgGAAgDgBgAA9AAQgDgEAAgFQAAgEADgEQAEgDAFAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgFAAgEgBgAAaAAQgDgEAAgFQAAgEADgEQAEgDAFAAQAFAAADADQADAEAAAEQAAAFgDAEQgDABgFAAQgFAAgEgBgAgHAAQgDgEAAgFQAAgEADgEQAEgDADAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgDAAgEgBgAgqAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDABgFAAQgEAAgEgBgAhNAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgEAAgEgBgAhwAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgAiTAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgABygUQgDgDAAgFQAAgFADgEQADgDAGAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgGAAgDgDgABPgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgFAAgEgDgAAsgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAFAAADADQADAEAAAFQAAAFgDADQgDADgFAAQgFAAgEgDgAAJgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAAEADQADAEAAAFQAAAFgDADQgEADgFAAQgEAAgEgDgAgYgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAADADQAEAEAAAFQAAAFgEADQgDADgFAAQgEAAgEgDgAg7gUQgDgDAAgFQAAgFADgEQAEgDAEAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgEAAgEgDgAhegUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDgAiBgUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDg");
	this.shape.setTransform(0,7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Text
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRAlIAAhJIAPAAQAIAAAGAIQAGAIAAAUQAAAUgGAIQgEAJgMAAgAgHAdQAGAAACgCQADgCACgHQACgGAAgMQAAgPgDgHQgEgGgHAAIgBAAg");
	this.shape_1.setTransform(8.6,-5.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMAlIAAhJIAYAAIAAAJIgPAAIAAAXIAOAAIAAAHIgOAAIAAAZIAQAAIAAAJg");
	this.shape_2.setTransform(4,-5.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMAlIAAhJIAZAAIAAAJIgPAAIAAAXIANAAIAAAHIgNAAIAAAZIAPAAIAAAJg");
	this.shape_3.setTransform(-0.1,-5.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAlIAAhJIAPAAQAQAAAAAVQAAAJgDAFQgDACgEACIgKABIAAAhgAgEgCQAEAAADgCQACgDAAgIQAAgIgCgCQgCgDgFAAg");
	this.shape_4.setTransform(-4.6,-5.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgMAjIAAgJIAEACIAFABQADAAACgCQADgDAAgFQAAgDgBgCIgEgIIgGgGQgEgFgCgEQgCgEAAgFQAAgIAFgGQAFgFAFAAQAFAAAGADIAAAIQgFgCgEAAQgDAAgCACQgCADAAAEIABAGIAGAKIAJALQADAEAAAHQAAAIgFAGQgFAFgGAAQgFAAgGgDg");
	this.shape_5.setTransform(-9,-5.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3C3C3C").s().p("ACEAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAADADQAEADAAAGQAAAEgEADIAAABQgDADgEAAQgFAAgDgDgABhAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAA+AmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAAbAmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAFAAADADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAgHAmIAAgBQgDgDAAgEQAAgGADgDQAEgDADAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgDAAgEgDgAgqAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAFAAADADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhNAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhwAmIAAgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAiSAmIgBgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgDgDgAByARQgDgCAAgGQAAgFADgDQADgBAGAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgGAAgDgEgABPARQgDgCAAgGQAAgFADgDQAEgBAFAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgFAAgEgEgAAsARQgDgCAAgGQAAgFADgDQAEgBAFAAQAFAAADABQADADAAAFQAAAGgDACQgDAEgFAAQgFAAgEgEgAAJARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAAEABQADADAAAFQAAAGgDACQgEAEgFAAQgEAAgEgEgAgYARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAADABQAEADAAAFQAAAGgEACQgDAEgFAAQgEAAgEgEgAg7ARQgDgCAAgGQAAgFADgDQAEgBAEAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgEAAgEgEgAheARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgAiBARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgACDAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAADADQAEAEAAAEQAAAFgEAEQgDABgEAAQgGAAgDgBgABgAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgGAAgDgBgAA9AAQgDgEAAgFQAAgEADgEQAEgDAFAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgFAAgEgBgAAaAAQgDgEAAgFQAAgEADgEQAEgDAFAAQAFAAADADQADAEAAAEQAAAFgDAEQgDABgFAAQgFAAgEgBgAgHAAQgDgEAAgFQAAgEADgEQAEgDADAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgDAAgEgBgAgqAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDABgFAAQgEAAgEgBgAhNAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgEAAgEgBgAhwAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgAiTAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgABygUQgDgDAAgFQAAgFADgEQADgDAGAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgGAAgDgDgABPgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgFAAgEgDgAAsgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAFAAADADQADAEAAAFQAAAFgDADQgDADgFAAQgFAAgEgDgAAJgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAAEADQADAEAAAFQAAAFgDADQgEADgFAAQgEAAgEgDgAgYgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAADADQAEAEAAAFQAAAFgEADQgDADgFAAQgEAAgEgDgAg7gUQgDgDAAgFQAAgFADgEQAEgDAEAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgEAAgEgDgAhegUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDgAiBgUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDg");
	this.shape_6.setTransform(0,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Base
	this.instance = new lib.MCP_pbbase("synched",0);
	this.instance.setTransform(0.1,-0.1,1,1,0,0,0,17.7,17.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-23.3,46.7,46.2);


(lib.MCP_Rma = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lit-green
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAOAcIgCgGIgWAAIgDAGQgBAEgEgBIgDgBQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAVg2QABgDABAAQADAAABADIASA3QAAADgEAAIgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAgBgAAKANIgJgdIgJAdIASAAg");
	this.shape.setTransform(2.6,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAPAeIgBgCIAAgnIgLAWQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAIgKgVIAAAmIgBACIgEABQgEAAAAgDIAAg2QAAgEAEAAQADgBACADIANAcIANgcQACgDAEABIACABQABAAAAABQAAAAABAAQAAABAAAAQAAAAAAABIAAA2QAAAAAAAAQAAABAAAAQgBAAAAABQAAAAgBAAIgCABIgEgBg");
	this.shape_1.setTransform(-2.6,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Text
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C3C3C").s().p("AAOAcIgCgGIgWAAIgDAGQgBAEgEgBIgDgBQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAVg2QABgDABAAQADAAABADIASA3QAAADgEAAIgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAgBgAAKANIgJgdIgJAdIASAAg");
	this.shape_2.setTransform(2.6,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3C3C3C").s().p("AAPAeIgBgCIAAgnIgLAWQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAIgKgVIAAAmIgBACIgEABQgEAAAAgDIAAg2QAAgEAEAAQADgBACADIANAcIANgcQACgDAEABIACABQABAAAAABQAAAAABAAQAAABAAAAQAAAAAAABIAAA2QAAAAAAAAQAAABAAAAQgBAAAAABQAAAAgBAAIgCABIgEgBg");
	this.shape_3.setTransform(-2.6,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Base
	this.instance = new lib.GEN_pbbase06("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.5,-9.5,19,19);


(lib.MCP_n1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lit_green
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33C300").s().p("ACEAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAADADQAEADAAAGQAAAEgEADIAAABQgDADgEAAQgFAAgDgDgABhAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAA+AmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAAbAmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAFAAADADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAgHAmIAAgBQgDgDAAgEQAAgGADgDQAEgDADAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgDAAgEgDgAgqAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAFAAADADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhNAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhwAmIAAgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAiSAmIgBgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgDgDgAByARQgDgCAAgGQAAgFADgDQADgBAGAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgGAAgDgEgABPARQgDgCAAgGQAAgFADgDQAEgBAFAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgFAAgEgEgAAsARQgDgCAAgGQAAgFADgDQAEgBAFAAQAFAAADABQADADAAAFQAAAGgDACQgDAEgFAAQgFAAgEgEgAAJARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAAEABQADADAAAFQAAAGgDACQgEAEgFAAQgEAAgEgEgAgYARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAADABQAEADAAAFQAAAGgEACQgDAEgFAAQgEAAgEgEgAg7ARQgDgCAAgGQAAgFADgDQAEgBAEAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgEAAgEgEgAheARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgAiBARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgACDAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAADADQAEAEAAAEQAAAFgEAEQgDABgEAAQgGAAgDgBgABgAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgGAAgDgBgAA9AAQgDgEAAgFQAAgEADgEQAEgDAFAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgFAAgEgBgAAaAAQgDgEAAgFQAAgEADgEQAEgDAFAAQAFAAADADQADAEAAAEQAAAFgDAEQgDABgFAAQgFAAgEgBgAgHAAQgDgEAAgFQAAgEADgEQAEgDADAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgDAAgEgBgAgqAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDABgFAAQgEAAgEgBgAhNAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgEAAgEgBgAhwAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgAiTAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgABygUQgDgDAAgFQAAgFADgEQADgDAGAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgGAAgDgDgABPgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgFAAgEgDgAAsgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAFAAADADQADAEAAAFQAAAFgDADQgDADgFAAQgFAAgEgDgAAJgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAAEADQADAEAAAFQAAAFgDADQgEADgFAAQgEAAgEgDgAgYgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAADADQAEAEAAAFQAAAFgEADQgDADgFAAQgEAAgEgDgAg7gUQgDgDAAgFQAAgFADgEQAEgDAEAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgEAAgEgDgAhegUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDgAiBgUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDg");
	this.shape.setTransform(0,7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Text
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAAlIAAhAIgHAAIAAgJIAPAAIAABJg");
	this.shape_1.setTransform(2.3,-5.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAJAlIgQgxIAAAxIgJAAIAAhJIAIAAIARAxIAAgxIAJAAIAABJg");
	this.shape_2.setTransform(-2.3,-5.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3C3C3C").s().p("ACEAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAADADQAEADAAAGQAAAEgEADIAAABQgDADgEAAQgFAAgDgDgABhAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAA+AmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAAbAmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAFAAADADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAgHAmIAAgBQgDgDAAgEQAAgGADgDQAEgDADAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgDAAgEgDgAgqAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAFAAADADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhNAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhwAmIAAgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAiSAmIgBgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgDgDgAByARQgDgCAAgGQAAgFADgDQADgBAGAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgGAAgDgEgABPARQgDgCAAgGQAAgFADgDQAEgBAFAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgFAAgEgEgAAsARQgDgCAAgGQAAgFADgDQAEgBAFAAQAFAAADABQADADAAAFQAAAGgDACQgDAEgFAAQgFAAgEgEgAAJARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAAEABQADADAAAFQAAAGgDACQgEAEgFAAQgEAAgEgEgAgYARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAADABQAEADAAAFQAAAGgEACQgDAEgFAAQgEAAgEgEgAg7ARQgDgCAAgGQAAgFADgDQAEgBAEAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgEAAgEgEgAheARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgAiBARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgACDAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAADADQAEAEAAAEQAAAFgEAEQgDABgEAAQgGAAgDgBgABgAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgGAAgDgBgAA9AAQgDgEAAgFQAAgEADgEQAEgDAFAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgFAAgEgBgAAaAAQgDgEAAgFQAAgEADgEQAEgDAFAAQAFAAADADQADAEAAAEQAAAFgDAEQgDABgFAAQgFAAgEgBgAgHAAQgDgEAAgFQAAgEADgEQAEgDADAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgDAAgEgBgAgqAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDABgFAAQgEAAgEgBgAhNAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgEAAgEgBgAhwAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgAiTAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgABygUQgDgDAAgFQAAgFADgEQADgDAGAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgGAAgDgDgABPgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgFAAgEgDgAAsgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAFAAADADQADAEAAAFQAAAFgDADQgDADgFAAQgFAAgEgDgAAJgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAAEADQADAEAAAFQAAAFgDADQgEADgFAAQgEAAgEgDgAgYgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAADADQAEAEAAAFQAAAFgEADQgDADgFAAQgEAAgEgDgAg7gUQgDgDAAgFQAAgFADgEQAEgDAEAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgEAAgEgDgAhegUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDgAiBgUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDg");
	this.shape_3.setTransform(0,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Base
	this.instance = new lib.MCP_pbbase("synched",0);
	this.instance.setTransform(0.1,-0.1,1,1,0,0,0,17.7,17.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-23.3,46.7,46.2);


(lib.MCP_lvlchg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lit_green
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33C300").s().p("ACEAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAADADQAEADAAAGQAAAEgEADIAAABQgDADgEAAQgFAAgDgDgABhAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAA+AmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAAbAmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAFAAADADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAgHAmIAAgBQgDgDAAgEQAAgGADgDQAEgDADAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgDAAgEgDgAgqAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAFAAADADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhNAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhwAmIAAgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAiSAmIgBgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgDgDgAByARQgDgCAAgGQAAgFADgDQADgBAGAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgGAAgDgEgABPARQgDgCAAgGQAAgFADgDQAEgBAFAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgFAAgEgEgAAsARQgDgCAAgGQAAgFADgDQAEgBAFAAQAFAAADABQADADAAAFQAAAGgDACQgDAEgFAAQgFAAgEgEgAAJARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAAEABQADADAAAFQAAAGgDACQgEAEgFAAQgEAAgEgEgAgYARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAADABQAEADAAAFQAAAGgEACQgDAEgFAAQgEAAgEgEgAg7ARQgDgCAAgGQAAgFADgDQAEgBAEAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgEAAgEgEgAheARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgAiBARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgACDAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAADADQAEAEAAAEQAAAFgEAEQgDABgEAAQgGAAgDgBgABgAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgGAAgDgBgAA9AAQgDgEAAgFQAAgEADgEQAEgDAFAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgFAAgEgBgAAaAAQgDgEAAgFQAAgEADgEQAEgDAFAAQAFAAADADQADAEAAAEQAAAFgDAEQgDABgFAAQgFAAgEgBgAgHAAQgDgEAAgFQAAgEADgEQAEgDADAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgDAAgEgBgAgqAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDABgFAAQgEAAgEgBgAhNAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgEAAgEgBgAhwAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgAiTAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgABygUQgDgDAAgFQAAgFADgEQADgDAGAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgGAAgDgDgABPgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgFAAgEgDgAAsgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAFAAADADQADAEAAAFQAAAFgDADQgDADgFAAQgFAAgEgDgAAJgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAAEADQADAEAAAFQAAAFgDADQgEADgFAAQgEAAgEgDgAgYgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAADADQAEAEAAAFQAAAFgEADQgDADgFAAQgEAAgEgDgAg7gUQgDgDAAgFQAAgFADgEQAEgDAEAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgEAAgEgDgAhegUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDgAiBgUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDg");
	this.shape.setTransform(0,7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Text
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOAfQgEgIAAgVIABgLIABgOIADgHIAHgFQAEgCADAAQAGAAAFAFQAGAEAAAHIgJADQgCgLgGAAQgEAAgCAGQgDAGABANIAAADIAAANIABAKIABAFIADACIACABQADAAACgCQADgDAAgEIABgOIgJAAIAAgHIATAAIAAALQAAANgFAHQgEAHgKAAQgJAAgFgHg");
	this.shape_1.setTransform(12.4,-5.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAHAlIAAglIgNAAIAAAlIgKAAIAAhJIAKAAIAAAdIANAAIAAgdIAKAAIAABJg");
	this.shape_2.setTransform(7.1,-5.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHAfQgHgHAAgWQAAgXAHgHQAGgJAIAAIAIABIAAAKIgGgCQgGAAgDAGQgDAGgBAQIACAQQABAGABADQADAEAFgBIAHgBIAAAIQgEADgFAAQgHAAgGgHg");
	this.shape_3.setTransform(2.3,-5.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMAlIAAhJIAKAAIAABAIAPAAIAAAJg");
	this.shape_4.setTransform(-4.4,-5.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgDAlIgPhJIAKAAIAIA3IAJg3IAKAAIgQBJg");
	this.shape_5.setTransform(-8.9,-5.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMAlIAAhJIAKAAIAABAIAPAAIAAAJg");
	this.shape_6.setTransform(-12.7,-5.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3C3C3C").s().p("ACEAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAADADQAEADAAAGQAAAEgEADIAAABQgDADgEAAQgFAAgDgDgABhAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAA+AmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAAbAmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAFAAADADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAgHAmIAAgBQgDgDAAgEQAAgGADgDQAEgDADAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgDAAgEgDgAgqAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAFAAADADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhNAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhwAmIAAgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAiSAmIgBgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgDgDgAByARQgDgCAAgGQAAgFADgDQADgBAGAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgGAAgDgEgABPARQgDgCAAgGQAAgFADgDQAEgBAFAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgFAAgEgEgAAsARQgDgCAAgGQAAgFADgDQAEgBAFAAQAFAAADABQADADAAAFQAAAGgDACQgDAEgFAAQgFAAgEgEgAAJARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAAEABQADADAAAFQAAAGgDACQgEAEgFAAQgEAAgEgEgAgYARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAADABQAEADAAAFQAAAGgEACQgDAEgFAAQgEAAgEgEgAg7ARQgDgCAAgGQAAgFADgDQAEgBAEAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgEAAgEgEgAheARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgAiBARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgACDAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAADADQAEAEAAAEQAAAFgEAEQgDABgEAAQgGAAgDgBgABgAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgGAAgDgBgAA9AAQgDgEAAgFQAAgEADgEQAEgDAFAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgFAAgEgBgAAaAAQgDgEAAgFQAAgEADgEQAEgDAFAAQAFAAADADQADAEAAAEQAAAFgDAEQgDABgFAAQgFAAgEgBgAgHAAQgDgEAAgFQAAgEADgEQAEgDADAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgDAAgEgBgAgqAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDABgFAAQgEAAgEgBgAhNAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgEAAgEgBgAhwAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgAiTAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgABygUQgDgDAAgFQAAgFADgEQADgDAGAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgGAAgDgDgABPgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgFAAgEgDgAAsgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAFAAADADQADAEAAAFQAAAFgDADQgDADgFAAQgFAAgEgDgAAJgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAAEADQADAEAAAFQAAAFgDADQgEADgFAAQgEAAgEgDgAgYgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAADADQAEAEAAAFQAAAFgEADQgDADgFAAQgEAAgEgDgAg7gUQgDgDAAgFQAAgFADgEQAEgDAEAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgEAAgEgDgAhegUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDgAiBgUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDg");
	this.shape_7.setTransform(0,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Base
	this.instance = new lib.MCP_pbbase("synched",0);
	this.instance.setTransform(0,0.1,1,1,0,0,0,17.7,17.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-23.2,46.7,46.2);


(lib.MCP_lnav = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lit_green
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33C300").s().p("ACEAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAADADQAEADAAAGQAAAEgEADIAAABQgDADgEAAQgFAAgDgDgABhAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAA+AmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAAbAmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAFAAADADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAgHAmIAAgBQgDgDAAgEQAAgGADgDQAEgDADAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgDAAgEgDgAgqAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAFAAADADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhNAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhwAmIAAgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAiSAmIgBgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgDgDgAByARQgDgCAAgGQAAgFADgDQADgBAGAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgGAAgDgEgABPARQgDgCAAgGQAAgFADgDQAEgBAFAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgFAAgEgEgAAsARQgDgCAAgGQAAgFADgDQAEgBAFAAQAFAAADABQADADAAAFQAAAGgDACQgDAEgFAAQgFAAgEgEgAAJARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAAEABQADADAAAFQAAAGgDACQgEAEgFAAQgEAAgEgEgAgYARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAADABQAEADAAAFQAAAGgEACQgDAEgFAAQgEAAgEgEgAg7ARQgDgCAAgGQAAgFADgDQAEgBAEAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgEAAgEgEgAheARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgAiBARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgACDAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAADADQAEAEAAAEQAAAFgEAEQgDABgEAAQgGAAgDgBgABgAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgGAAgDgBgAA9AAQgDgEAAgFQAAgEADgEQAEgDAFAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgFAAgEgBgAAaAAQgDgEAAgFQAAgEADgEQAEgDAFAAQAFAAADADQADAEAAAEQAAAFgDAEQgDABgFAAQgFAAgEgBgAgHAAQgDgEAAgFQAAgEADgEQAEgDADAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgDAAgEgBgAgqAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDABgFAAQgEAAgEgBgAhNAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgEAAgEgBgAhwAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgAiTAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgABygUQgDgDAAgFQAAgFADgEQADgDAGAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgGAAgDgDgABPgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgFAAgEgDgAAsgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAFAAADADQADAEAAAFQAAAFgDADQgDADgFAAQgFAAgEgDgAAJgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAAEADQADAEAAAFQAAAFgDADQgEADgFAAQgEAAgEgDgAgYgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAADADQAEAEAAAFQAAAFgEADQgDADgFAAQgEAAgEgDgAg7gUQgDgDAAgFQAAgFADgEQAEgDAEAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgEAAgEgDgAhegUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDgAiBgUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDg");
	this.shape.setTransform(0,7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Text
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgDAlIgPhJIAKAAIAIA3IAJg3IAKAAIgQBJg");
	this.shape_1.setTransform(6.8,-5.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAKAlIgDgPIgOAAIgCAPIgKAAIAQhJIAGAAIARBJgAgFAOIALAAIgGghg");
	this.shape_2.setTransform(2.7,-5.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAJAlIgRgxIAAAxIgJAAIAAhJIAIAAIARAxIAAgxIAJAAIAABJg");
	this.shape_3.setTransform(-2.5,-5.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMAlIAAhJIAKAAIAABAIAPAAIAAAJg");
	this.shape_4.setTransform(-7,-5.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3C3C3C").s().p("ACEAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAADADQAEADAAAGQAAAEgEADIAAABQgDADgEAAQgFAAgDgDgABhAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAA+AmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAAbAmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAFAAADADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAgHAmIAAgBQgDgDAAgEQAAgGADgDQAEgDADAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgDAAgEgDgAgqAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAFAAADADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhNAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhwAmIAAgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAiSAmIgBgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgDgDgAByARQgDgCAAgGQAAgFADgDQADgBAGAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgGAAgDgEgABPARQgDgCAAgGQAAgFADgDQAEgBAFAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgFAAgEgEgAAsARQgDgCAAgGQAAgFADgDQAEgBAFAAQAFAAADABQADADAAAFQAAAGgDACQgDAEgFAAQgFAAgEgEgAAJARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAAEABQADADAAAFQAAAGgDACQgEAEgFAAQgEAAgEgEgAgYARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAADABQAEADAAAFQAAAGgEACQgDAEgFAAQgEAAgEgEgAg7ARQgDgCAAgGQAAgFADgDQAEgBAEAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgEAAgEgEgAheARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgAiBARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgACDAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAADADQAEAEAAAEQAAAFgEAEQgDABgEAAQgGAAgDgBgABgAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgGAAgDgBgAA9AAQgDgEAAgFQAAgEADgEQAEgDAFAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgFAAgEgBgAAaAAQgDgEAAgFQAAgEADgEQAEgDAFAAQAFAAADADQADAEAAAEQAAAFgDAEQgDABgFAAQgFAAgEgBgAgHAAQgDgEAAgFQAAgEADgEQAEgDADAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgDAAgEgBgAgqAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDABgFAAQgEAAgEgBgAhNAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgEAAgEgBgAhwAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgAiTAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgABygUQgDgDAAgFQAAgFADgEQADgDAGAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgGAAgDgDgABPgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgFAAgEgDgAAsgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAFAAADADQADAEAAAFQAAAFgDADQgDADgFAAQgFAAgEgDgAAJgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAAEADQADAEAAAFQAAAFgDADQgEADgFAAQgEAAgEgDgAgYgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAADADQAEAEAAAFQAAAFgEADQgDADgFAAQgEAAgEgDgAg7gUQgDgDAAgFQAAgFADgEQAEgDAEAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgEAAgEgDgAhegUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDgAiBgUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDg");
	this.shape_5.setTransform(0,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Base
	this.instance = new lib.MCP_pbbase("synched",0);
	this.instance.setTransform(0.1,-0.1,1,1,0,0,0,17.7,17.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-23.3,46.7,46.2);


(lib.MCP_Lma = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lit-green
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAOAcIgCgGIgWAAIgDAGQgBAEgEgBIgDgBQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAVg2QABgDABAAQADAAABADIASA3QAAADgEAAIgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAgBgAAKANIgJgdIgJAdIASAAg");
	this.shape.setTransform(2.6,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAPAeIgBgCIAAgnIgLAWQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAIgKgVIAAAmIgBACIgEABQgEAAAAgDIAAg2QAAgEAEAAQADgBACADIANAcIANgcQACgDAEABIACABQABAAAAABQAAAAABAAQAAABAAAAQAAAAAAABIAAA2QAAAAAAAAQAAABAAAAQgBAAAAABQAAAAgBAAIgCABIgEgBg");
	this.shape_1.setTransform(-2.6,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Text
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C3C3C").s().p("AAOAcIgCgGIgWAAIgDAGQgBAEgEgBIgDgBQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAVg2QABgDABAAQADAAABADIASA3QAAADgEAAIgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAgBgAAKANIgJgdIgJAdIASAAg");
	this.shape_2.setTransform(2.6,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3C3C3C").s().p("AAPAeIgBgCIAAgnIgLAWQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAIgKgVIAAAmIgBACIgEABQgEAAAAgDIAAg2QAAgEAEAAQADgBACADIANAcIANgcQACgDAEABIACABQABAAAAABQAAAAABAAQAAABAAAAQAAAAAAABIAAA2QAAAAAAAAQAAABAAAAQgBAAAAABQAAAAgBAAIgCABIgEgBg");
	this.shape_3.setTransform(-2.6,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Base
	this.instance = new lib.GEN_pbbase06("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.5,-9.5,19,19);


(lib.MCP_iasmach = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A6AEAC").s().p("AgwA5IAAhxIA6AAIAAAFQABAYALAKQAIAFAOgBIAGAAIAAAbIgGAAQgPAAgHAFQgLAJgBAYIAAAFgAgmAvIAnAAQACgbANgJQAIgGAQgBIAAgHQgQAAgIgGQgNgLgCgaIgnAAg");
	this.shape.setTransform(1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Base
	this.instance = new lib.GEN_knob14("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.1,-19.1,38.3,38.3);


(lib.MCP_hdgsel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lit_green
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33C300").s().p("ACEAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAADADQAEADAAAGQAAAEgEADIAAABQgDADgEAAQgFAAgDgDgABhAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAA+AmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAAbAmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAFAAADADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAgHAmIAAgBQgDgDAAgEQAAgGADgDQAEgDADAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgDAAgEgDgAgqAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAFAAADADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhNAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhwAmIAAgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAiSAmIgBgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgDgDgAByARQgDgCAAgGQAAgFADgDQADgBAGAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgGAAgDgEgABPARQgDgCAAgGQAAgFADgDQAEgBAFAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgFAAgEgEgAAsARQgDgCAAgGQAAgFADgDQAEgBAFAAQAFAAADABQADADAAAFQAAAGgDACQgDAEgFAAQgFAAgEgEgAAJARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAAEABQADADAAAFQAAAGgDACQgEAEgFAAQgEAAgEgEgAgYARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAADABQAEADAAAFQAAAGgEACQgDAEgFAAQgEAAgEgEgAg7ARQgDgCAAgGQAAgFADgDQAEgBAEAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgEAAgEgEgAheARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgAiBARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgACDAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAADADQAEAEAAAEQAAAFgEAEQgDABgEAAQgGAAgDgBgABgAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgGAAgDgBgAA9AAQgDgEAAgFQAAgEADgEQAEgDAFAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgFAAgEgBgAAaAAQgDgEAAgFQAAgEADgEQAEgDAFAAQAFAAADADQADAEAAAEQAAAFgDAEQgDABgFAAQgFAAgEgBgAgHAAQgDgEAAgFQAAgEADgEQAEgDADAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgDAAgEgBgAgqAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDABgFAAQgEAAgEgBgAhNAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgEAAgEgBgAhwAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgAiTAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgABygUQgDgDAAgFQAAgFADgEQADgDAGAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgGAAgDgDgABPgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgFAAgEgDgAAsgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAFAAADADQADAEAAAFQAAAFgDADQgDADgFAAQgFAAgEgDgAAJgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAAEADQADAEAAAFQAAAFgDADQgEADgFAAQgEAAgEgDgAgYgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAADADQAEAEAAAFQAAAFgEADQgDADgFAAQgEAAgEgDgAg7gUQgDgDAAgFQAAgFADgEQAEgDAEAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgEAAgEgDgAhegUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDgAiBgUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDg");
	this.shape.setTransform(0,7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Text
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMAlIAAhJIAKAAIAABAIAPAAIAAAJg");
	this.shape_1.setTransform(13.2,-5.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMAlIAAhJIAYAAIAAAJIgPAAIAAAXIAOAAIAAAHIgOAAIAAAZIAQAAIAAAJg");
	this.shape_2.setTransform(9.2,-5.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMAjIAAgJIAEACIAFABQADAAACgCQADgDAAgFQAAgDgBgCIgEgIIgGgGQgEgFgCgEQgCgEAAgFQAAgIAFgGQAFgFAFAAQAFAAAGADIAAAIQgFgCgEAAQgDAAgCACQgCADAAAEIABAGIAGAKIAJALQADAEAAAHQAAAIgFAGQgFAFgGAAQgFAAgGgDg");
	this.shape_3.setTransform(4.9,-5.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNAfQgFgIAAgVIAAgLIACgOIAEgHIAFgFQAFgCACAAQAHAAAGAFQAFAEAAAHIgKADQAAgLgIAAQgDAAgCAGQgCAGgBANIAAADIABANIABAKIACAFIADACIABABQAEAAACgCQACgDAAgEIABgOIgJAAIAAgHIATAAIAAALQAAANgEAHQgFAHgKAAQgJAAgEgHg");
	this.shape_4.setTransform(-2,-5.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgRAlIAAhJIAOAAQAJAAAGAIQAGAIAAAUQAAAUgFAIQgFAJgMAAgAgHAdQAGAAACgCQADgCABgHQACgGAAgMQAAgPgDgHQgDgGgGAAIgCAAg");
	this.shape_5.setTransform(-7.2,-5.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAHAlIAAglIgNAAIAAAlIgKAAIAAhJIAKAAIAAAdIANAAIAAgdIAKAAIAABJg");
	this.shape_6.setTransform(-12.5,-5.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3C3C3C").s().p("ACEAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAADADQAEADAAAGQAAAEgEADIAAABQgDADgEAAQgFAAgDgDgABhAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAA+AmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAAbAmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAFAAADADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAgHAmIAAgBQgDgDAAgEQAAgGADgDQAEgDADAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgDAAgEgDgAgqAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAFAAADADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhNAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhwAmIAAgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAiSAmIgBgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgDgDgAByARQgDgCAAgGQAAgFADgDQADgBAGAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgGAAgDgEgABPARQgDgCAAgGQAAgFADgDQAEgBAFAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgFAAgEgEgAAsARQgDgCAAgGQAAgFADgDQAEgBAFAAQAFAAADABQADADAAAFQAAAGgDACQgDAEgFAAQgFAAgEgEgAAJARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAAEABQADADAAAFQAAAGgDACQgEAEgFAAQgEAAgEgEgAgYARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAADABQAEADAAAFQAAAGgEACQgDAEgFAAQgEAAgEgEgAg7ARQgDgCAAgGQAAgFADgDQAEgBAEAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgEAAgEgEgAheARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgAiBARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgACDAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAADADQAEAEAAAEQAAAFgEAEQgDABgEAAQgGAAgDgBgABgAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgGAAgDgBgAA9AAQgDgEAAgFQAAgEADgEQAEgDAFAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgFAAgEgBgAAaAAQgDgEAAgFQAAgEADgEQAEgDAFAAQAFAAADADQADAEAAAEQAAAFgDAEQgDABgFAAQgFAAgEgBgAgHAAQgDgEAAgFQAAgEADgEQAEgDADAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgDAAgEgBgAgqAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDABgFAAQgEAAgEgBgAhNAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgEAAgEgBgAhwAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgAiTAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgABygUQgDgDAAgFQAAgFADgEQADgDAGAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgGAAgDgDgABPgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgFAAgEgDgAAsgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAFAAADADQADAEAAAFQAAAFgDADQgDADgFAAQgFAAgEgDgAAJgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAAEADQADAEAAAFQAAAFgDADQgEADgFAAQgEAAgEgDgAgYgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAADADQAEAEAAAFQAAAFgEADQgDADgFAAQgEAAgEgDgAg7gUQgDgDAAgFQAAgFADgEQAEgDAEAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgEAAgEgDgAhegUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDgAiBgUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDg");
	this.shape_7.setTransform(0,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Base
	this.instance = new lib.MCP_pbbase("synched",0);
	this.instance.setTransform(0.1,-0.1,1,1,0,0,0,17.7,17.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-23.3,46.7,46.2);


(lib.MCP_cwsb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lit_green
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33C300").s().p("ACEAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAADADQAEADAAAGQAAAEgEADIAAABQgDADgEAAQgFAAgDgDgABhAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAA+AmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAAbAmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAFAAADADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAgHAmIAAgBQgDgDAAgEQAAgGADgDQAEgDADAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgDAAgEgDgAgqAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAFAAADADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhNAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhwAmIAAgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAiSAmIgBgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgDgDgAByARQgDgCAAgGQAAgFADgDQADgBAGAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgGAAgDgEgABPARQgDgCAAgGQAAgFADgDQAEgBAFAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgFAAgEgEgAAsARQgDgCAAgGQAAgFADgDQAEgBAFAAQAFAAADABQADADAAAFQAAAGgDACQgDAEgFAAQgFAAgEgEgAAJARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAAEABQADADAAAFQAAAGgDACQgEAEgFAAQgEAAgEgEgAgYARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAADABQAEADAAAFQAAAGgEACQgDAEgFAAQgEAAgEgEgAg7ARQgDgCAAgGQAAgFADgDQAEgBAEAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgEAAgEgEgAheARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgAiBARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgACDAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAADADQAEAEAAAEQAAAFgEAEQgDABgEAAQgGAAgDgBgABgAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgGAAgDgBgAA9AAQgDgEAAgFQAAgEADgEQAEgDAFAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgFAAgEgBgAAaAAQgDgEAAgFQAAgEADgEQAEgDAFAAQAFAAADADQADAEAAAEQAAAFgDAEQgDABgFAAQgFAAgEgBgAgHAAQgDgEAAgFQAAgEADgEQAEgDADAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgDAAgEgBgAgqAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDABgFAAQgEAAgEgBgAhNAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgEAAgEgBgAhwAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgAiTAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgABygUQgDgDAAgFQAAgFADgEQADgDAGAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgGAAgDgDgABPgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgFAAgEgDgAAsgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAFAAADADQADAEAAAFQAAAFgDADQgDADgFAAQgFAAgEgDgAAJgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAAEADQADAEAAAFQAAAFgDADQgEADgFAAQgEAAgEgDgAgYgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAADADQAEAEAAAFQAAAFgEADQgDADgFAAQgEAAgEgDgAg7gUQgDgDAAgFQAAgFADgEQAEgDAEAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgEAAgEgDgAhegUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDgAiBgUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDg");
	this.shape.setTransform(0,7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Text
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMAjIAAgJIAEACIAFABQADAAACgCQADgDAAgFQAAgDgBgCIgEgIIgGgGQgEgFgCgEQgCgEAAgFQAAgIAFgGQAFgFAFAAQAFAAAGADIAAAIQgFgCgEAAQgDAAgCACQgCADAAAEIABAGIAGAKIAJALQADAEAAAHQAAAIgFAGQgFAFgGAAQgFAAgGgDg");
	this.shape_1.setTransform(5.7,-5.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAIAlIgIgzIAAAAIgIAzIgIAAIgMhJIAJAAIAIAyIAAAAIAJgyIAFAAIAIAxIABAAIAIgxIAJAAIgNBJg");
	this.shape_2.setTransform(0.3,-5.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgIAfQgGgHAAgWQAAgXAGgHQAHgJAIAAIAIABIAAAKIgGgCQgGAAgDAGQgDAGgBAQIACAQQABAGABADQADAEAFgBIAHgBIAAAIQgEADgFAAQgHAAgHgHg");
	this.shape_3.setTransform(-5.4,-5.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3C3C3C").s().p("ACEAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAADADQAEADAAAGQAAAEgEADIAAABQgDADgEAAQgFAAgDgDgABhAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAA+AmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAAbAmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAFAAADADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAgHAmIAAgBQgDgDAAgEQAAgGADgDQAEgDADAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgDAAgEgDgAgqAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAFAAADADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhNAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhwAmIAAgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAiSAmIgBgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgDgDgAByARQgDgCAAgGQAAgFADgDQADgBAGAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgGAAgDgEgABPARQgDgCAAgGQAAgFADgDQAEgBAFAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgFAAgEgEgAAsARQgDgCAAgGQAAgFADgDQAEgBAFAAQAFAAADABQADADAAAFQAAAGgDACQgDAEgFAAQgFAAgEgEgAAJARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAAEABQADADAAAFQAAAGgDACQgEAEgFAAQgEAAgEgEgAgYARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAADABQAEADAAAFQAAAGgEACQgDAEgFAAQgEAAgEgEgAg7ARQgDgCAAgGQAAgFADgDQAEgBAEAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgEAAgEgEgAheARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgAiBARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgACDAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAADADQAEAEAAAEQAAAFgEAEQgDABgEAAQgGAAgDgBgABgAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgGAAgDgBgAA9AAQgDgEAAgFQAAgEADgEQAEgDAFAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgFAAgEgBgAAaAAQgDgEAAgFQAAgEADgEQAEgDAFAAQAFAAADADQADAEAAAEQAAAFgDAEQgDABgFAAQgFAAgEgBgAgHAAQgDgEAAgFQAAgEADgEQAEgDADAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgDAAgEgBgAgqAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDABgFAAQgEAAgEgBgAhNAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgEAAgEgBgAhwAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgAiTAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgABygUQgDgDAAgFQAAgFADgEQADgDAGAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgGAAgDgDgABPgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgFAAgEgDgAAsgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAFAAADADQADAEAAAFQAAAFgDADQgDADgFAAQgFAAgEgDgAAJgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAAEADQADAEAAAFQAAAFgDADQgEADgFAAQgEAAgEgDgAgYgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAADADQAEAEAAAFQAAAFgEADQgDADgFAAQgEAAgEgDgAg7gUQgDgDAAgFQAAgFADgEQAEgDAEAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgEAAgEgDgAhegUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDgAiBgUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDg");
	this.shape_4.setTransform(0,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Base
	this.instance = new lib.MCP_pbbase("synched",0);
	this.instance.setTransform(0.1,-0.1,1,1,0,0,0,17.7,17.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-23.3,46.7,46.2);


(lib.MCP_cwsa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lit_green
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33C300").s().p("ACEAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAADADQAEADAAAGQAAAEgEADIAAABQgDADgEAAQgFAAgDgDgABhAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAA+AmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAAbAmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAFAAADADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAgHAmIAAgBQgDgDAAgEQAAgGADgDQAEgDADAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgDAAgEgDgAgqAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAFAAADADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhNAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhwAmIAAgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAiSAmIgBgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgDgDgAByARQgDgCAAgGQAAgFADgDQADgBAGAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgGAAgDgEgABPARQgDgCAAgGQAAgFADgDQAEgBAFAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgFAAgEgEgAAsARQgDgCAAgGQAAgFADgDQAEgBAFAAQAFAAADABQADADAAAFQAAAGgDACQgDAEgFAAQgFAAgEgEgAAJARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAAEABQADADAAAFQAAAGgDACQgEAEgFAAQgEAAgEgEgAgYARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAADABQAEADAAAFQAAAGgEACQgDAEgFAAQgEAAgEgEgAg7ARQgDgCAAgGQAAgFADgDQAEgBAEAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgEAAgEgEgAheARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgAiBARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgACDAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAADADQAEAEAAAEQAAAFgEAEQgDABgEAAQgGAAgDgBgABgAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgGAAgDgBgAA9AAQgDgEAAgFQAAgEADgEQAEgDAFAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgFAAgEgBgAAaAAQgDgEAAgFQAAgEADgEQAEgDAFAAQAFAAADADQADAEAAAEQAAAFgDAEQgDABgFAAQgFAAgEgBgAgHAAQgDgEAAgFQAAgEADgEQAEgDADAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgDAAgEgBgAgqAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDABgFAAQgEAAgEgBgAhNAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgEAAgEgBgAhwAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgAiTAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgABygUQgDgDAAgFQAAgFADgEQADgDAGAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgGAAgDgDgABPgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgFAAgEgDgAAsgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAFAAADADQADAEAAAFQAAAFgDADQgDADgFAAQgFAAgEgDgAAJgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAAEADQADAEAAAFQAAAFgDADQgEADgFAAQgEAAgEgDgAgYgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAADADQAEAEAAAFQAAAFgEADQgDADgFAAQgEAAgEgDgAg7gUQgDgDAAgFQAAgFADgEQAEgDAEAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgEAAgEgDgAhegUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDgAiBgUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDg");
	this.shape.setTransform(0,7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Text
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMAjIAAgJIAEACIAFABQADAAACgCQADgDAAgFQAAgDgBgCIgEgIIgGgGQgEgFgCgEQgCgEAAgFQAAgIAFgGQAFgFAFAAQAFAAAGADIAAAIQgFgCgEAAQgDAAgCACQgCADAAAEIABAGIAGAKIAJALQADAEAAAHQAAAIgFAGQgFAFgGAAQgFAAgGgDg");
	this.shape_1.setTransform(5.7,-5.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAIAlIgIgzIAAAAIgIAzIgIAAIgMhJIAJAAIAIAyIAAAAIAJgyIAFAAIAIAxIABAAIAIgxIAJAAIgNBJg");
	this.shape_2.setTransform(0.3,-5.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgIAfQgGgHAAgWQAAgXAGgHQAHgJAIAAIAIABIAAAKIgGgCQgGAAgDAGQgDAGgBAQIACAQQABAGABADQADAEAFgBIAHgBIAAAIQgEADgFAAQgHAAgHgHg");
	this.shape_3.setTransform(-5.4,-5.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3C3C3C").s().p("ACEAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAADADQAEADAAAGQAAAEgEADIAAABQgDADgEAAQgFAAgDgDgABhAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAA+AmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAAbAmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAFAAADADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAgHAmIAAgBQgDgDAAgEQAAgGADgDQAEgDADAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgDAAgEgDgAgqAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAFAAADADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhNAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhwAmIAAgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAiSAmIgBgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgDgDgAByARQgDgCAAgGQAAgFADgDQADgBAGAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgGAAgDgEgABPARQgDgCAAgGQAAgFADgDQAEgBAFAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgFAAgEgEgAAsARQgDgCAAgGQAAgFADgDQAEgBAFAAQAFAAADABQADADAAAFQAAAGgDACQgDAEgFAAQgFAAgEgEgAAJARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAAEABQADADAAAFQAAAGgDACQgEAEgFAAQgEAAgEgEgAgYARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAADABQAEADAAAFQAAAGgEACQgDAEgFAAQgEAAgEgEgAg7ARQgDgCAAgGQAAgFADgDQAEgBAEAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgEAAgEgEgAheARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgAiBARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgACDAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAADADQAEAEAAAEQAAAFgEAEQgDABgEAAQgGAAgDgBgABgAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgGAAgDgBgAA9AAQgDgEAAgFQAAgEADgEQAEgDAFAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgFAAgEgBgAAaAAQgDgEAAgFQAAgEADgEQAEgDAFAAQAFAAADADQADAEAAAEQAAAFgDAEQgDABgFAAQgFAAgEgBgAgHAAQgDgEAAgFQAAgEADgEQAEgDADAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgDAAgEgBgAgqAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDABgFAAQgEAAgEgBgAhNAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgEAAgEgBgAhwAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgAiTAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgABygUQgDgDAAgFQAAgFADgEQADgDAGAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgGAAgDgDgABPgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgFAAgEgDgAAsgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAFAAADADQADAEAAAFQAAAFgDADQgDADgFAAQgFAAgEgDgAAJgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAAEADQADAEAAAFQAAAFgDADQgEADgFAAQgEAAgEgDgAgYgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAADADQAEAEAAAFQAAAFgEADQgDADgFAAQgEAAgEgDgAg7gUQgDgDAAgFQAAgFADgEQAEgDAEAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgEAAgEgDgAhegUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDgAiBgUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDg");
	this.shape_4.setTransform(0,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Base
	this.instance = new lib.MCP_pbbase("synched",0);
	this.instance.setTransform(0.1,-0.1,1,1,0,0,0,17.7,17.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-23.3,46.7,46.2);


(lib.MCP_courseknob = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0E2E1").s().p("AgpBRIgBAAIAAhFIAKAKIAABFgAAhAMIAAgXIAJgKIABAAIAAArgAgqhQIAKgKIAAAAIAABEIAAABIgKAJg");
	this.shape.setTransform(8.9,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgEA0IAAgBIABABgAAEgzIAAAAIAAABg");
	this.shape_1.setTransform(5.1,2.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AANBRIAAhFIAAAAIhRAAIgtgMIAugLIBQAAIAAhFIAZAAIAABEIAAABIBMAAIAAAXIhMAAIAABEIAAABg");
	this.shape_2.setTransform(0.8,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A6AEAC").s().p("AANAWIAKgKIAAAAIAABFIgKAKgAiFAAIBJgVIBJAAIAKAKIhQAAIguALgAAwgLIAAgBIAKgJIAAAAIBMAAIgKAKgAAXhQIgKgKIAtAAIgKAKg");
	this.shape_3.setTransform(-0.2,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C5CCCC").s().p("AANBbIAAgBIAKgJIAZAAIAAAAIAKAJIAAABgAA6AWIgKgKIBMAAIAKAKgAg+AVIhHgVIAdAAIAtAMIBRAAIgJAKgAANgVIAAhFIAKAKIAABFg");
	this.shape_4.setTransform(-0.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Base
	this.instance = new lib.GEN_knob13("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.1,-19.1,38.2,38.2);


(lib.MCP_cmdb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lit_green
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33C300").s().p("ACEAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAADADQAEADAAAGQAAAEgEADIAAABQgDADgEAAQgFAAgDgDgABhAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAA+AmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAAbAmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAFAAADADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAgHAmIAAgBQgDgDAAgEQAAgGADgDQAEgDADAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgDAAgEgDgAgqAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAFAAADADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhNAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhwAmIAAgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAiSAmIgBgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgDgDgAByARQgDgCAAgGQAAgFADgDQADgBAGAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgGAAgDgEgABPARQgDgCAAgGQAAgFADgDQAEgBAFAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgFAAgEgEgAAsARQgDgCAAgGQAAgFADgDQAEgBAFAAQAFAAADABQADADAAAFQAAAGgDACQgDAEgFAAQgFAAgEgEgAAJARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAAEABQADADAAAFQAAAGgDACQgEAEgFAAQgEAAgEgEgAgYARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAADABQAEADAAAFQAAAGgEACQgDAEgFAAQgEAAgEgEgAg7ARQgDgCAAgGQAAgFADgDQAEgBAEAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgEAAgEgEgAheARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgAiBARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgACDAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAADADQAEAEAAAEQAAAFgEAEQgDABgEAAQgGAAgDgBgABgAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgGAAgDgBgAA9AAQgDgEAAgFQAAgEADgEQAEgDAFAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgFAAgEgBgAAaAAQgDgEAAgFQAAgEADgEQAEgDAFAAQAFAAADADQADAEAAAEQAAAFgDAEQgDABgFAAQgFAAgEgBgAgHAAQgDgEAAgFQAAgEADgEQAEgDADAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgDAAgEgBgAgqAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDABgFAAQgEAAgEgBgAhNAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgEAAgEgBgAhwAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgAiTAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgABygUQgDgDAAgFQAAgFADgEQADgDAGAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgGAAgDgDgABPgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgFAAgEgDgAAsgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAFAAADADQADAEAAAFQAAAFgDADQgDADgFAAQgFAAgEgDgAAJgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAAEADQADAEAAAFQAAAFgDADQgEADgFAAQgEAAgEgDgAgYgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAADADQAEAEAAAFQAAAFgEADQgDADgFAAQgEAAgEgDgAg7gUQgDgDAAgFQAAgFADgEQAEgDAEAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgEAAgEgDgAhegUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDgAiBgUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDg");
	this.shape.setTransform(0,7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Text
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRAlIAAhJIAOAAQAJAAAGAIQAGAIAAAUQAAAUgGAIQgEAJgMAAgAgHAdQAHAAABgCQADgCABgHQACgGABgMQgBgPgDgHQgCgGgHAAIgCAAg");
	this.shape_1.setTransform(5.6,-5.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAQAlIgDguIAAAAIgKAuIgFAAIgJguIgFAuIgJAAIAHhJIAJAAIAJAyIAKgyIAJAAIAHBJg");
	this.shape_2.setTransform(-0.2,-5.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHAfQgHgHAAgWQAAgXAHgHQAGgJAHAAIAJABIAAAKIgGgCQgGAAgDAGQgEAGAAAQIABAQQABAGACADQADAEAFgBIAHgBIAAAIQgEADgFAAQgHAAgGgHg");
	this.shape_3.setTransform(-5.7,-5.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3C3C3C").s().p("ACEAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAADADQAEADAAAGQAAAEgEADIAAABQgDADgEAAQgFAAgDgDgABhAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAA+AmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAAbAmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAFAAADADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAgHAmIAAgBQgDgDAAgEQAAgGADgDQAEgDADAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgDAAgEgDgAgqAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAFAAADADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhNAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhwAmIAAgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAiSAmIgBgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgDgDgAByARQgDgCAAgGQAAgFADgDQADgBAGAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgGAAgDgEgABPARQgDgCAAgGQAAgFADgDQAEgBAFAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgFAAgEgEgAAsARQgDgCAAgGQAAgFADgDQAEgBAFAAQAFAAADABQADADAAAFQAAAGgDACQgDAEgFAAQgFAAgEgEgAAJARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAAEABQADADAAAFQAAAGgDACQgEAEgFAAQgEAAgEgEgAgYARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAADABQAEADAAAFQAAAGgEACQgDAEgFAAQgEAAgEgEgAg7ARQgDgCAAgGQAAgFADgDQAEgBAEAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgEAAgEgEgAheARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgAiBARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgACDAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAADADQAEAEAAAEQAAAFgEAEQgDABgEAAQgGAAgDgBgABgAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgGAAgDgBgAA9AAQgDgEAAgFQAAgEADgEQAEgDAFAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgFAAgEgBgAAaAAQgDgEAAgFQAAgEADgEQAEgDAFAAQAFAAADADQADAEAAAEQAAAFgDAEQgDABgFAAQgFAAgEgBgAgHAAQgDgEAAgFQAAgEADgEQAEgDADAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgDAAgEgBgAgqAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDABgFAAQgEAAgEgBgAhNAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgEAAgEgBgAhwAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgAiTAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgABygUQgDgDAAgFQAAgFADgEQADgDAGAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgGAAgDgDgABPgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgFAAgEgDgAAsgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAFAAADADQADAEAAAFQAAAFgDADQgDADgFAAQgFAAgEgDgAAJgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAAEADQADAEAAAFQAAAFgDADQgEADgFAAQgEAAgEgDgAgYgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAADADQAEAEAAAFQAAAFgEADQgDADgFAAQgEAAgEgDgAg7gUQgDgDAAgFQAAgFADgEQAEgDAEAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgEAAgEgDgAhegUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDgAiBgUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDg");
	this.shape_4.setTransform(0,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Base
	this.instance = new lib.MCP_pbbase("synched",0);
	this.instance.setTransform(0.1,-0.1,1,1,0,0,0,17.7,17.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-23.3,46.7,46.2);


(lib.MCP_cmdaa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lit_green
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33C300").s().p("ACEAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAADADQAEADAAAGQAAAEgEADIAAABQgDADgEAAQgFAAgDgDgABhAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAA+AmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAAbAmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAFAAADADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAgHAmIAAgBQgDgDAAgEQAAgGADgDQAEgDADAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgDAAgEgDgAgqAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAFAAADADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhNAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhwAmIAAgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAiSAmIgBgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgDgDgAByARQgDgCAAgGQAAgFADgDQADgBAGAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgGAAgDgEgABPARQgDgCAAgGQAAgFADgDQAEgBAFAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgFAAgEgEgAAsARQgDgCAAgGQAAgFADgDQAEgBAFAAQAFAAADABQADADAAAFQAAAGgDACQgDAEgFAAQgFAAgEgEgAAJARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAAEABQADADAAAFQAAAGgDACQgEAEgFAAQgEAAgEgEgAgYARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAADABQAEADAAAFQAAAGgEACQgDAEgFAAQgEAAgEgEgAg7ARQgDgCAAgGQAAgFADgDQAEgBAEAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgEAAgEgEgAheARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgAiBARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgACDAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAADADQAEAEAAAEQAAAFgEAEQgDABgEAAQgGAAgDgBgABgAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgGAAgDgBgAA9AAQgDgEAAgFQAAgEADgEQAEgDAFAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgFAAgEgBgAAaAAQgDgEAAgFQAAgEADgEQAEgDAFAAQAFAAADADQADAEAAAEQAAAFgDAEQgDABgFAAQgFAAgEgBgAgHAAQgDgEAAgFQAAgEADgEQAEgDADAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgDAAgEgBgAgqAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDABgFAAQgEAAgEgBgAhNAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgEAAgEgBgAhwAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgAiTAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgABygUQgDgDAAgFQAAgFADgEQADgDAGAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgGAAgDgDgABPgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgFAAgEgDgAAsgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAFAAADADQADAEAAAFQAAAFgDADQgDADgFAAQgFAAgEgDgAAJgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAAEADQADAEAAAFQAAAFgDADQgEADgFAAQgEAAgEgDgAgYgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAADADQAEAEAAAFQAAAFgEADQgDADgFAAQgEAAgEgDgAg7gUQgDgDAAgFQAAgFADgEQAEgDAEAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgEAAgEgDgAhegUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDgAiBgUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDg");
	this.shape.setTransform(0,7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Text
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRAlIAAhJIAOAAQAJAAAGAIQAGAIAAAUQAAAUgGAIQgEAJgMAAgAgHAdQAHAAABgCQADgCABgHQACgGABgMQgBgPgDgHQgCgGgHAAIgCAAg");
	this.shape_1.setTransform(5.6,-5.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAQAlIgDguIAAAAIgKAuIgFAAIgJguIgFAuIgJAAIAHhJIAJAAIAJAyIAKgyIAJAAIAHBJg");
	this.shape_2.setTransform(-0.2,-5.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHAfQgHgHAAgWQAAgXAHgHQAGgJAHAAIAJABIAAAKIgGgCQgGAAgDAGQgEAGAAAQIABAQQABAGACADQADAEAFgBIAHgBIAAAIQgEADgFAAQgHAAgGgHg");
	this.shape_3.setTransform(-5.7,-5.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3C3C3C").s().p("ACEAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAADADQAEADAAAGQAAAEgEADIAAABQgDADgEAAQgFAAgDgDgABhAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAA+AmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAAbAmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAFAAADADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAgHAmIAAgBQgDgDAAgEQAAgGADgDQAEgDADAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgDAAgEgDgAgqAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAFAAADADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhNAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhwAmIAAgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAiSAmIgBgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgDgDgAByARQgDgCAAgGQAAgFADgDQADgBAGAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgGAAgDgEgABPARQgDgCAAgGQAAgFADgDQAEgBAFAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgFAAgEgEgAAsARQgDgCAAgGQAAgFADgDQAEgBAFAAQAFAAADABQADADAAAFQAAAGgDACQgDAEgFAAQgFAAgEgEgAAJARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAAEABQADADAAAFQAAAGgDACQgEAEgFAAQgEAAgEgEgAgYARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAADABQAEADAAAFQAAAGgEACQgDAEgFAAQgEAAgEgEgAg7ARQgDgCAAgGQAAgFADgDQAEgBAEAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgEAAgEgEgAheARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgAiBARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgACDAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAADADQAEAEAAAEQAAAFgEAEQgDABgEAAQgGAAgDgBgABgAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgGAAgDgBgAA9AAQgDgEAAgFQAAgEADgEQAEgDAFAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgFAAgEgBgAAaAAQgDgEAAgFQAAgEADgEQAEgDAFAAQAFAAADADQADAEAAAEQAAAFgDAEQgDABgFAAQgFAAgEgBgAgHAAQgDgEAAgFQAAgEADgEQAEgDADAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgDAAgEgBgAgqAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDABgFAAQgEAAgEgBgAhNAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgEAAgEgBgAhwAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgAiTAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgABygUQgDgDAAgFQAAgFADgEQADgDAGAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgGAAgDgDgABPgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgFAAgEgDgAAsgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAFAAADADQADAEAAAFQAAAFgDADQgDADgFAAQgFAAgEgDgAAJgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAAEADQADAEAAAFQAAAFgDADQgEADgFAAQgEAAgEgDgAgYgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAADADQAEAEAAAFQAAAFgEADQgDADgFAAQgEAAgEgDgAg7gUQgDgDAAgFQAAgFADgEQAEgDAEAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgEAAgEgDgAhegUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDgAiBgUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDg");
	this.shape_4.setTransform(0,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Base
	this.instance = new lib.MCP_pbbase("synched",0);
	this.instance.setTransform(0.1,-0.1,1,1,0,0,0,17.7,17.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-23.3,46.7,46.2);


(lib.MCP_Base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.GEN_screw03("synched",0);
	this.instance.setTransform(-517.6,-56.9,1,1,0,0,0,10,10);

	this.instance_1 = new lib.GEN_screw03("synched",0);
	this.instance_1.setTransform(534.6,-56.9,1,1,0,0,0,10,10);

	this.instance_2 = new lib.GEN_screw03("synched",0);
	this.instance_2.setTransform(534.6,80.1,1,1,0,0,0,10,10);

	this.instance_3 = new lib.GEN_screw02("synched",0);
	this.instance_3.setTransform(524.1,-1.3,1,1,0,0,0,10,10);

	this.instance_4 = new lib.GEN_screw02("synched",0);
	this.instance_4.setTransform(467,71.2,1,1,0,0,0,10,10);

	this.instance_5 = new lib.GEN_screw02("synched",0);
	this.instance_5.setTransform(32,14.2,1,1,0,0,0,10,10);

	this.instance_6 = new lib.GEN_screw03("synched",0);
	this.instance_6.setTransform(173.5,17.3,1,1,0,0,0,10,10);

	this.instance_7 = new lib.GEN_screw03("synched",0);
	this.instance_7.setTransform(-517.6,80.1,1,1,0,0,0,10,10);

	this.instance_8 = new lib.GEN_screw02("synched",0);
	this.instance_8.setTransform(-451.1,69.8,1,1,0,0,0,10,10);

	this.instance_9 = new lib.GEN_screw03("synched",0);
	this.instance_9.setTransform(-132.8,11.4,1,1,0,0,0,10,10);

	this.instance_10 = new lib.GEN_screw02("synched",0);
	this.instance_10.setTransform(-373.9,-50.8,1,1,0,0,0,10,10);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#475663","#61707E","#758594","#9AAEBE","#7F909F","#6C7B8A","#526372"],[0,0.114,0.165,0.616,0.694,0.878,1],-0.8,10.7,-0.5,-15.2).s().p("AgkB1QgLAAAAgLIAAjTQAAgLALAAIBJAAQALAAAAALIAADTQAAALgLAAg");
	this.shape.setTransform(-432.8,47.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#475663","#61707E","#758594","#9AAEBE","#7F909F","#6C7B8A","#526372"],[0,0.114,0.165,0.616,0.694,0.878,1],-0.8,10.7,-0.5,-15.2).s().p("AgkB1QgLAAAAgLIAAjTQAAgLALAAIBJAAQALAAAAALIAADTQAAALgLAAg");
	this.shape_1.setTransform(434.2,47.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#1A1A1A","#444444","#3C3C3C"],[0,0.506,1],0,1.2,1,-0.5).s().p("AgJAUIgNgTIAFAAIADAAQANABAAgKIAAgFIAYgGIAAAbQAAAMgLAAg");
	this.shape_2.setTransform(470.5,-41.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#0D0D0D","#424242"],[0,1],1.5,2.1,2.4,0.3).s().p("AgEALIgFgFIAIAAQAGAAAAgGIAAgKIAFABIAAAGIAAADQAAALgLAAg");
	this.shape_3.setTransform(469.2,-42.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#0D0D0D","#363636"],[0,1],-1.2,2,-2.2,0.2).s().p("AABALQgLAAAAgLIAAgFIAAgCIAFgDIAAAKQABAGAFAAIAKAAIgBAFg");
	this.shape_4.setTransform(417.8,-42.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#1A1A1A","#444444","#3C3C3C"],[0,0.506,1],0.1,0.9,-0.9,-0.9).s().p("AgMASQgLAAAAgNIAAgQIAYgGIAAAGQAAALANAAIAJAAIABAAIgIASg");
	this.shape_5.setTransform(416.5,-41.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#0D0D0D","#363636"],[0,1],-0.9,-1.3,-1.7,-0.4).s().p("AgJAFIAAgDQAAgJAKAAIAEAAIAEAAIABAEIgJAAQgFAAAAAFIAAAHg");
	this.shape_6.setTransform(417.7,-61.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#1A1A1A","#444444","#3C3C3C"],[0,0.506,1],1,-1,-0.6,0.7).s().p("AgTAEIAAgNQAAgMALAAIAZAAIADATIgDAAQgMAAAAAJIAAADIAAAMg");
	this.shape_7.setTransform(416.1,-62.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#1A1A1A","#444444","#3C3C3C"],[0,0.506,1],0,-1.1,1.3,0.7).s().p("AACAMIAAgCQAAgKgLAAIgCAAIgQAAIAEgSIAoAAQALAAAAAMIAAAPIgaAKg");
	this.shape_8.setTransform(470,-62.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#0D0D0D","#424242"],[0,1],0.8,-1.8,2.1,0.1).s().p("AAEAEQABgFgGAAIgHAAIAEgFIADAAQAKAAABAKIAAACIgGABg");
	this.shape_9.setTransform(469.3,-62.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#7E8D9A","#475863"],[0,1],-24.8,14.1,-26,11.8).s().p("AlGCwQgRAAAAgRIAAk9QAAgRARAAIKNAAQARAAAAARIAAE9QAAARgRAAgAlIieIAAE9QAAAAAAABQAAAAABABQAAAAAAAAQABAAAAAAIKNAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAgBAAAAIAAk9QAAAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAAAIqNAAQAAAAgBAAQAAAAAAAAQgBABAAAAQAAABAAAAg");
	this.shape_10.setTransform(443.3,-52);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#1A1A1A","#444444","#3C3C3C"],[0,0.506,1],-6.5,-3.4,-5.3,-4.9).s().p("AgJAUIgNgTIAFAAIADAAQANABAAgKIAAgFIAYgGIAAAbQAAAMgLAAg");
	this.shape_11.setTransform(245,-41.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#0D0D0D","#424242"],[0,1],-5.8,-2.4,-4.6,-4).s().p("AgEALIgFgFIAIAAQAGAAAAgGIAAgKIAFABIAAAGIAAADQAAALgLAAg");
	this.shape_12.setTransform(243.7,-42.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#0D0D0D","#424242"],[0,1],-5.9,2.9,-4.5,4.8).s().p("AAFAEQgBgFgFAAIgIAAIAGgFIACAAQAKAAAAAKIAAACIgEABg");
	this.shape_13.setTransform(243.8,-62.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#1A1A1A","#444444","#3C3C3C"],[0,0.506,1],-6.5,2.8,-5.1,4.7).s().p("AACAMIAAgCQAAgKgLAAIgCAAIgQAAIAEgSIAoAAQALAAAAAMIAAAPIgaAKg");
	this.shape_14.setTransform(244.5,-62.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#1A1A1A","#444444","#3C3C3C"],[0,0.506,1],23.2,-18.7,21.8,-20.2).s().p("AgMASQgLAAAAgNIAAgQIAYgGIAAAGQAAALANAAIAJAAIABAAIgIASg");
	this.shape_15.setTransform(143,-41.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#0D0D0D","#363636"],[0,1],19.8,-19.7,18.3,-21.1).s().p("AABALQgKAAAAgLIAAgFIAAgCIAEgDIAAAKQABAGAFAAIAJAAIAAAFg");
	this.shape_16.setTransform(144.3,-42.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#0D0D0D","#424242"],[0,1],-5.8,-2.4,-4.6,-4).s().p("AgEALIgFgFIAIAAQAGAAAAgGIAAgKIAFABIAAAGIAAADQAAALgLAAg");
	this.shape_17.setTransform(115.5,-42.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#1A1A1A","#444444","#3C3C3C"],[0,0.506,1],-6.5,-3.4,-5.3,-4.9).s().p("AgJAUIgNgTIAFAAIADAAQANABAAgKIAAgFIAYgGIAAAbQAAAMgLAAg");
	this.shape_18.setTransform(116.8,-41.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#1A1A1A","#444444","#3C3C3C"],[0,0.506,1],-6.5,2.8,-5.1,4.7).s().p("AACAMIAAgCQAAgKgLAAIgCAAIgQAAIAEgSIAoAAQALAAAAAMIAAAPIgaAKg");
	this.shape_19.setTransform(116.3,-62.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#0D0D0D","#424242"],[0,1],-5.9,2.9,-4.5,4.8).s().p("AAFAEQgBgFgFAAIgIAAIAGgFIACAAQAKAAAAAKIAAACIgEABg");
	this.shape_20.setTransform(115.5,-62.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#0D0D0D","#363636"],[0,1],19.8,16.7,18.9,17.6).s().p("AgJAFIAAgDQAAgJAKAAIAEAAIAEAAIABAEIgJAAQgFAAAAAFIAAAHg");
	this.shape_21.setTransform(144.2,-61.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#7E8D9A","#475863"],[0,1],-13.4,5.1,-14.1,2.6).s().p("Ao2CwQgRAAAAgRIAAk9QAAgRARAAIRsAAQASAAAAARIAAE9QAAARgSAAgAo4ieIAAE9QAAAAAAABQAAAAABABQAAAAAAAAQABAAAAAAIRsAAQABAAABAAQAAAAAAAAQABgBAAAAQAAgBAAAAIAAk9QAAAAAAgBQAAAAgBgBQAAAAAAAAQgBAAgBAAIxsAAQAAAAgBAAQAAAAAAAAQgBABAAAAQAAABAAAAg");
	this.shape_22.setTransform(193.8,-52);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#1A1A1A","#444444","#3C3C3C"],[0,0.506,1],23.4,15.2,22,17.1).s().p("AgTAEIAAgNQAAgMALAAIAZAAIADATIgDAAQgMAAAAAJIAAADIAAAMg");
	this.shape_23.setTransform(142.6,-62.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#0D0D0D","#363636"],[0,1],19.8,-19.7,18.3,-21.1).s().p("AABALQgKAAAAgLIAAgFIAAgCIAEgDIAAAKQABAGAFAAIAKAAIgBAFg");
	this.shape_24.setTransform(16,-42.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#1A1A1A","#444444","#3C3C3C"],[0,0.506,1],23.2,-18.7,21.8,-20.2).s().p("AgMASQgLAAAAgNIAAgQIAYgGIAAAGQAAALANAAIAJAAIABAAIgIASg");
	this.shape_25.setTransform(14.7,-41.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#7E8D9A","#475863"],[0,1],-13.4,5.1,-14.1,2.6).s().p("Ao2CwQgRAAAAgRIAAk9QAAgRARAAIRsAAQASAAAAARIAAE9QAAARgSAAgAo4ieIAAE9QAAAAAAABQAAAAABABQAAAAAAAAQABAAAAAAIRsAAQABAAABAAQAAAAAAAAQABgBAAAAQAAgBAAAAIAAk9QAAAAAAgBQAAAAgBgBQAAAAAAAAQgBAAgBAAIxsAAQAAAAgBAAQAAAAAAAAQgBABAAAAQAAABAAAAg");
	this.shape_26.setTransform(65.6,-52);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#0D0D0D","#363636"],[0,1],19.8,16.7,18.9,17.6).s().p("AgJAFIAAgDQAAgJAKAAIAEAAIAEAAIABAEIgJAAQgFAAAAAFIAAAHg");
	this.shape_27.setTransform(16,-61.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#1A1A1A","#444444","#3C3C3C"],[0,0.506,1],23.4,15.2,22,17.1).s().p("AgTAEIAAgNQAAgMALAAIAZAAIADATIgDAAQgMAAAAAJIAAADIAAAMg");
	this.shape_28.setTransform(14.4,-62.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#1A1A1A","#444444","#3C3C3C"],[0,0.506,1],0,1.2,1,-0.5).s().p("AgJAUIgNgTIAFAAIADAAQANABAAgKIAAgFIAYgGIAAAbQAAAMgLAAg");
	this.shape_29.setTransform(-69,-41.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#0D0D0D","#424242"],[0,1],1.5,2.1,2.4,0.3).s().p("AgEALIgFgFIAIAAQAGAAAAgGIAAgKIAFABIAAAGIAAADQAAALgLAAg");
	this.shape_30.setTransform(-70.3,-42.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#0D0D0D","#424242"],[0,1],0.8,-1.8,2.1,0.1).s().p("AAEAEQAAgFgFAAIgIAAIAGgFIACAAQALAAAAAKIAAACIgGABg");
	this.shape_31.setTransform(-70.2,-62.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#1A1A1A","#444444","#3C3C3C"],[0,0.506,1],0,-1.1,1.3,0.7).s().p("AACAMIAAgCQAAgKgLAAIgCAAIgQAAIAEgSIAoAAQALAAAAAMIAAAPIgaAKg");
	this.shape_32.setTransform(-69.5,-62.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#0D0D0D","#363636"],[0,1],-1.2,2,-2.2,0.2).s().p("AABALQgLAAAAgLIAAgFIAAgCIAGgDIAAAKQgBAGAGAAIAJAAIAAAFg");
	this.shape_33.setTransform(-121.7,-42.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#1A1A1A","#444444","#3C3C3C"],[0,0.506,1],0.1,0.9,-0.9,-0.9).s().p("AgMASQgLAAAAgNIAAgQIAYgGIAAAGQAAALANAAIAJAAIABAAIgIASg");
	this.shape_34.setTransform(-123,-41.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#1A1A1A","#444444","#3C3C3C"],[0,0.506,1],1,-1,-0.6,0.7).s().p("AgTAEIAAgNQAAgMALAAIAZAAIADATIgDAAQgMAAAAAJIAAADIAAAMg");
	this.shape_35.setTransform(-123.4,-62.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#7E8D9A","#475863"],[0,1],-24.8,14.1,-26,11.8).s().p("AlFCwQgSAAAAgRIAAk9QAAgRASAAIKLAAQASAAAAARIAAE9QAAARgSAAgAlIieIAAE9QAAAAAAABQAAAAABABQAAAAAAAAQABAAABAAIKLAAQABAAABAAQAAAAAAAAQABgBAAAAQAAgBAAAAIAAk9QAAAAAAgBQAAAAgBgBQAAAAAAAAQgBAAgBAAIqLAAQgBAAgBAAQAAAAAAAAQgBABAAAAQAAABAAAAg");
	this.shape_36.setTransform(-96.2,-52);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#0D0D0D","#363636"],[0,1],-0.9,-1.3,-1.7,-0.4).s().p("AgJAFIAAgDQAAgJALAAIACAAIAFAAIABAEIgIAAQgGAAAAAFIAAAHg");
	this.shape_37.setTransform(-121.8,-61.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#1A1A1A","#444444","#3C3C3C"],[0,0.506,1],-6.5,-3.4,-5.3,-4.9).s().p("AgJAUIgNgTIAFAAIADAAQANABAAgKIAAgFIAYgGIAAAbQAAAMgLAAg");
	this.shape_38.setTransform(-209.5,-41.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#0D0D0D","#424242"],[0,1],-5.8,-2.4,-4.6,-4).s().p("AgEALIgFgFIAIAAQAGAAAAgGIAAgKIAFABIAAAGIAAADQAAALgLAAg");
	this.shape_39.setTransform(-210.8,-42.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#0D0D0D","#424242"],[0,1],-5.9,2.9,-4.5,4.8).s().p("AAFAEQgBgFgFAAIgIAAIAGgFIACAAQAKAAAAAKIAAACIgEABg");
	this.shape_40.setTransform(-210.7,-62.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#1A1A1A","#444444","#3C3C3C"],[0,0.506,1],-6.5,2.8,-5.1,4.7).s().p("AACAMIAAgCQAAgKgLAAIgCAAIgQAAIAEgSIAoAAQALAAAAAMIAAAPIgaAKg");
	this.shape_41.setTransform(-210,-62.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#1A1A1A","#444444","#3C3C3C"],[0,0.506,1],23.2,-18.7,21.8,-20.2).s().p("AgMASQgLAAAAgNIAAgQIAYgGIAAAGQAAALANAAIAJAAIABAAIgIASg");
	this.shape_42.setTransform(-311.5,-41.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#0D0D0D","#363636"],[0,1],19.8,-19.7,18.3,-21.1).s().p("AABALQgKAAAAgLIAAgFIAAgCIAEgDIAAAKQABAGAFAAIAJAAIAAAFg");
	this.shape_43.setTransform(-310.2,-42.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#7E8D9A","#475863"],[0,1],-13.4,5.1,-14.1,2.6).s().p("Ao2CwQgRAAAAgRIAAk9QAAgRARAAIRsAAQASAAAAARIAAE9QAAARgSAAgAo4ieIAAE9QAAAAAAABQAAAAABABQAAAAAAAAQABAAAAAAIRsAAQABAAABAAQAAAAAAAAQABgBAAAAQAAgBAAAAIAAk9QAAAAAAgBQAAAAgBgBQAAAAAAAAQgBAAgBAAIxsAAQAAAAgBAAQAAAAAAAAQgBABAAAAQAAABAAAAg");
	this.shape_44.setTransform(-260.7,-52);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#0D0D0D","#363636"],[0,1],19.8,16.7,18.9,17.6).s().p("AgJAFIAAgDQAAgJAKAAIAEAAIAEAAIABAEIgJAAQgFAAAAAFIAAAHg");
	this.shape_45.setTransform(-310.3,-61.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#1A1A1A","#444444","#3C3C3C"],[0,0.506,1],23.4,15.2,22,17.1).s().p("AgTAEIAAgNQAAgMALAAIAZAAIADATIgDAAQgMAAAAAJIAAADIAAAMg");
	this.shape_46.setTransform(-311.9,-62.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#1A1A1A","#444444","#3C3C3C"],[0,0.506,1],0,1.2,1,-0.5).s().p("AgJAUIgNgSIAFAAIADAAQANAAAAgLIAAgDIAYgHIAAAaQAAANgLAAg");
	this.shape_47.setTransform(-414,-41.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#0D0D0D","#424242"],[0,1],1.5,2.1,2.4,0.3).s().p("AgEALIgFgFIAIAAQAGAAAAgGIAAgKIAFABIAAAGIAAADQAAALgLAAg");
	this.shape_48.setTransform(-415.3,-42.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#1A1A1A","#444444","#3C3C3C"],[0,0.506,1],0.1,0.9,-0.9,-0.9).s().p("AgMASQgLAAAAgNIAAgQIAYgGIAAAGQAAALANAAIAJAAIABAAIgIASg");
	this.shape_49.setTransform(-468,-41.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#0D0D0D","#363636"],[0,1],-1.2,2,-2.2,0.2).s().p("AABALQgKAAAAgLIAAgFIAAgCIAEgDIAAAKQAAAGAGAAIAJAAIAAAFg");
	this.shape_50.setTransform(-466.7,-42.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#363636").s().p("EBFDgBOIAAgLIAFADIAACuIgFADgAaVhOIAAgLIAEADIAACuIgEADgAGShOIAAgLIAFADIAACuIgFADgAvOhOIAAgLIAGADIAACuIgGADgEgsqgBOIAAgLIAEADIAACuIgEADgEhFHgBOIAAgMIAEADIAACuIgEADg");
	this.shape_51.setTransform(-25.3,-52.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#0D0D0D","#363636"],[0,1],-0.9,-1.3,-1.7,-0.4).s().p("AgJAGIAAgEQAAgJALgBIADAAIAEAAIABAGIgIAAQgGAAAAAEIAAAGg");
	this.shape_52.setTransform(-466.8,-62);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#1A1A1A","#444444","#3C3C3C"],[0,0.506,1],1,-1,-0.6,0.7).s().p("AgTAEIAAgNQAAgMALAAIAZAAIADASIgDAAQgMABAAAJIAAAEIAAALg");
	this.shape_53.setTransform(-468.4,-62.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#424242").s().p("EBFDABZIAAiwIAGgCIAAAHIAACsgEAh1ABZIAAiwIAEgCIAAAHIAACsgANyBZIAAiwIAFgCIAAAHIAACsgAvOBZIAAiwIAGgCIAAAHIAACsgEglKABZIAAiwIAEgCIAAAHIAACsgEhFHABYIAAiwIAEgBIAAAHIAACrg");
	this.shape_54.setTransform(27.8,-52.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#3C3C3C").s().p("EBAggBgIAaASIAACpIAAABIgaAFgAVxhgIAaASIAACpIAAABIgaAFgABvhgIAaASIAACpIAAABIgaAFgAzxhgIAaASIAACpIAAABIgaAFgEgxOgBgIAaASIAACpIAAABIgaAFgEhJrgBgIAaASIAACoIAAACIgaAFgEBJSABYIAAisIAagJIAAC0IgaAHgEAmDABYIAAisIAagJIAAC0IgaAHgASABYIAAisIAagJIAAC0IgaAHgAq/BYIAAisIAagJIAAC0IgaAHgEgg8ABYIAAisIAagJIAAC0IgaAHgEhA5ABXIAAirIAagKIAAC1IgaAHg");
	this.shape_55.setTransform(1.2,-52.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#0D0D0D").s().p("EBI7ABsIntAAIgBAAIABgFIHtAAIAEAFgEAlsABsIvNAAIgBAAIAAgFIPOAAIAFAFgARqBsIvNAAIgCAAIABgFIPOAAIAEAFgArWBsIntAAIgBAAIAAgFIHuAAIAFAFgEghTABsIvNAAIgBAAIAAgFIPOAAIAFAFgEhBQABsIntAAIgBAAIAAgGIHuAAIAEAGgEBBNgBmIgBgEIHlAAIAPAAIgEAEgAWehmIgBgEIPFAAIAQAAIgGAEgACbhmIgBgEIPGAAIAPAAIgFAEgAzFhmIgBgEIHmAAIAQAAIgGAEgEgwhgBmIgBgEIPFAAIAQAAIgGAEgEhI/gBmIAAgFIHlAAIAQAAIgGAFg");
	this.shape_56.setTransform(1.5,-52);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#0D0D0D","#424242"],[0,1],0.8,-1.8,2.1,0.1).s().p("AAFAEQAAgFgGAAIgIAAIAGgFIACAAQAKAAAAAKIAAACIgEABg");
	this.shape_57.setTransform(-415.2,-62.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#7E8D9A","#475863"],[0,1],-24.8,14.1,-26,11.8).s().p("AlGCwQgRAAAAgRIAAk9QAAgRARAAIKMAAQASAAAAARIAAE9QAAARgSAAgAlIieIAAE9QAAAAAAABQAAAAABABQAAAAAAAAQABAAAAAAIKMAAQABAAABAAQAAAAAAAAQABgBAAAAQAAgBAAAAIAAk9QAAAAAAgBQAAAAgBgBQAAAAAAAAQgBAAgBAAIqMAAQAAAAgBAAQAAAAAAAAQgBABAAAAQAAABAAAAg");
	this.shape_58.setTransform(-441.2,-52.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("EA//ACiQgBAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAgBIAAk9QAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIKOAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAIAAE9QAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAgEBAHgCGIAAEOQAAARAQAAIJfAAQAPAAAAgRIAAkOQAAgRgPAAIpfAAQgQAAAAARgAVQCiQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBIAAk9QAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIRuAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAE9QAAABAAAAQAAABAAAAQAAAAgBAAQAAABgBAAgAVYiGIAAEOQAAARAQAAIQ+AAQAQAAAAgRIAAkOQAAgRgQAAIw+AAQgQAAAAARgABNCiQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBIAAk9QAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIRuAAQABAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAAE9QAAABAAAAQAAABgBAAQAAAAAAAAQgBABgBAAgABViGIAAEOQABARAPAAIQ/AAQAPAAAAgRIAAkOQAAgRgPAAIw/AAQgPAAgBARgA0SCiQgBAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAgBIAAk9QAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIKOAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAE9QAAABAAAAQAAABAAAAQAAAAgBAAQAAABgBAAgA0KiGIAAEOQAAARAQAAIJeAAQAQAAAAgRIAAkOQAAgRgQAAIpeAAQgQAAAAARgEgxvACiQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBIAAk9QAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIRuAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAE9QAAABAAAAQAAABAAAAQAAAAgBAAQAAABgBAAgEgxngCGIAAEOQAAARAQAAIQ+AAQAQAAAAgRIAAkOQAAgRgQAAIw+AAQgQAAAAARgEhKMAChQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAgBIAAk8QAAgBAAAAQAAgBAAAAQAAAAABAAQAAAAABAAIKOAAQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAABIAAE8QAAABgBABQAAAAAAAAQAAABgBAAQAAAAgBAAgEhKEgCGIAAENQAAASAQAAIJeAAQAQAAAAgSIAAkNQAAgSgQAAIpeAAQgQAAAAASgEBI/ABnIntAAIgKAAQgHAAgBgHIAAgLIAAitIAAgHQABgHAHAAIAJAAIHvAAIAHAAQAIAAgBAHIAAAEIAACwIAAALQABAHgIAAgEAlwABnIvOAAIgJAAQgHAAgBgHIAAgLIAAitIAAgHQABgHAHAAIAJAAIPOAAIAIAAQAHAAABAHIAAAEIAACwIAAALQgBAHgHAAgARuBnIvOAAIgKAAQgHAAAAgHIAAgLIAAitIAAgHQAAgHAHAAIAJAAIPPAAIAIAAQAHAAAAAHIAAAEIAACwIAAALQAAAHgHAAgArSBnInuAAIgJAAQgIAAABgHIAAgLIAAitIAAgHQgBgHAIAAIAIAAIHvAAIAIAAQAHAAAAAHIAAAEIAACwIAAALQAAAHgHAAgEghPABnIvOAAIgJAAQgHAAgBgHIAAgLIAAitIAAgHQABgHAHAAIAJAAIPOAAIAIAAQAHAAABAHIAAAEIAACwIAAALQgBAHgHAAgEhBMABmInuAAIgJAAQgIABAAgIIAAgKIAAiuIAAgGQAAgHAIAAIAIAAIHvAAIAIAAQAIAAAAAHIAAADIAACwIAAALQAAAIgIgBg");
	this.shape_59.setTransform(1.1,-52);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#1A1A1A").s().p("EBAXACZQgQAAAAgRIAAkOQAAgRAQAAIJfAAQAPAAAAARIAAEOQAAARgPAAgEBAMgCGIAAEOQAAAMALAAIJfAAQAKAAAAgMIAAkOQAAgNgKAAIpfAAQgLAAAAANgAVoCZQgQAAAAgRIAAkOQAAgRAQAAIQ+AAQAQAAAAARIAAEOQAAARgQAAgAVdiGIAAEOQAAAMALAAIQ+AAQALAAAAgMIAAkOQAAgNgLAAIw+AAQgLAAAAANgABmCZQgQAAgBgRIAAkOQABgRAQAAIQ+AAQAPAAAAARIAAEOQAAARgPAAgABbiGIAAEOQgBAMAMAAIQ+AAQALAAAAgMIAAkOQAAgNgLAAIw+AAQgMAAABANgAz6CZQgQAAAAgRIAAkOQAAgRAQAAIJeAAQAQAAAAARIAAEOQAAARgQAAgA0FiGIAAEOQAAAMALAAIJeAAQALAAAAgMIAAkOQAAgNgLAAIpeAAQgLAAAAANgEgxXACZQgQAAAAgRIAAkOQAAgRAQAAIQ+AAQAQAAAAARIAAEOQAAARgQAAgEgxigCGIAAEOQAAAMALAAIQ+AAQALAAAAgMIAAkOQAAgNgLAAIw+AAQgLAAAAANgEhJ0ACZQgQAAAAgSIAAkNQAAgSAQAAIJeAAQAQAAAAASIAAENQAAASgQAAgEhJ/gCGIAAENQAAAMALAAIJeAAQALAAAAgMIAAkNQAAgNgLAAIpeAAQgLAAAAANgEBBKAB/IAIgTIHtAAIAMATgAWbB/IAIgTIPNAAIANATgACZB/IAIgTIPNAAIAMATgAzGB/IAHgTIHtAAIANATgEgwkAB/IAIgTIPNAAIANATgEhJBAB+IAIgSIHtAAIAMASgEBBQgBqIgFAAIgDgTIHxAAIgEATgAWhhqIgFAAIgDgTIPRAAIgEATgACehqIgEAAIgEgTIPRAAIgDATgAzChqIgEAAIgEgTIHyAAIgEATgEgwegBqIgFAAIgDgTIPRAAIgEATgEhI7gBrIgFAAIgEgSIHyAAIgEASg");
	this.shape_60.setTransform(1.1,-52);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#262626").s().p("EBAXACUQgLAAAAgMIAAkOQAAgNALAAIJfAAQAKAAAAANIAAEOQAAAMgKAAgEBAigBxIAAAPIAADBIAAATQAAANALAAIAdAAIIBAAIAYAAQAKAAABgNIAAgdIAAi0IAAgSQgBgMgKAAIgqAAInxAAIgbAAQgLAAAAAMgAVoCUQgLAAAAgMIAAkOQAAgNALAAIQ+AAQALAAAAANIAAEOQAAAMgLAAgAVzhxIAAAPIAADBIAAATQAAANALAAIAdAAIPiAAIAWAAQALAAAAgNIAAgdIAAi0IAAgSQAAgMgLAAIgpAAIvRAAIgbAAQgLAAAAAMgABmCUQgMAAABgMIAAkOQgBgNAMAAIQ+AAQALAAAAANIAAEOQAAAMgLAAgABwhxIAAAPIAADBIAAATQAAANALAAIAeAAIPhAAIAXAAQALAAAAgNIAAgdIAAi0IAAgSQAAgMgLAAIgqAAIvRAAIgbAAQgLAAAAAMgAz6CUQgLAAAAgMIAAkOQAAgNALAAIJeAAQALAAAAANIAAEOQAAAMgLAAgAzwhxIAAAPIAADBIAAATQABANAKAAIAfAAIIBAAIAWAAQALAAAAgNIAAgdIAAi0IAAgSQAAgMgLAAIgpAAInyAAIgbAAQgKAAgBAMgEgxXACUQgLAAAAgMIAAkOQAAgNALAAIQ+AAQALAAAAANIAAEOQAAAMgLAAgEgxMgBxIAAAPIAADBIAAATQAAANALAAIAdAAIPiAAIAWAAQALAAAAgNIAAgdIAAi0IAAgSQAAgMgLAAIgpAAIvRAAIgbAAQgLAAAAAMgEhJ0ACTQgLAAAAgMIAAkNQAAgNALAAIJeAAQALAAAAANIAAENQAAAMgLAAgEhJpgBxIAAAPIAADBIAAASQgBANALAAIAeAAIIBAAIAYAAQALAAgBgNIAAgcIAAi1IAAgRQABgMgLAAIgqAAInyAAIgbAAQgLAAABAMg");
	this.shape_61.setTransform(1.1,-52);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["#1A1A1A","#444444","#3C3C3C"],[0,0.506,1],0,-1.1,1.3,0.7).s().p("AACAMIAAgCQAAgKgLAAIgCAAIgQAAIAEgSIAoAAQALAAAAAMIAAAPIgaAKg");
	this.shape_62.setTransform(-414.5,-62.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#45545C","#697785","#8DA6B6","#657381","#4B5C67"],[0,0.204,0.616,0.863,1],-0.8,10.7,-0.5,-15.2).s().p("AgkB8QgSAAAAgSIAAjTQAAgSASAAIBJAAQARAAAAASIAADTQAAASgRAAgAgvhpIAADTQAAALALAAIBJAAQALAAAAgLIAAjTQAAgLgLAAIhJAAQgLAAAAALg");
	this.shape_63.setTransform(-432.8,47.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["#45545C","#697785","#8DA6B6","#657381","#4B5C67"],[0,0.204,0.616,0.863,1],-0.8,10.7,-0.5,-15.2).s().p("AgkB8QgSAAAAgSIAAjTQAAgSASAAIBJAAQARAAABASIAADTQgBASgRAAgAgvhpIAADTQAAALALAAIBJAAQALAAAAgLIAAjTQAAgLgLAAIhJAAQgLAAAAALg");
	this.shape_64.setTransform(434.2,47.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.rf(["#96A2AA","#4E616D"],[0,1],-15.5,-8.3,0,-15.5,-8.3,26.8).s().p("Agyj/IAAABQDMD7jJD/IgDAFg");
	this.shape_65.setTransform(215.8,24.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#323E45").s().p("AhoF1QAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAgBIAArkQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAIDRAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAAAIAALkQAAABAAABQAAAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_66.setTransform(196.6,25);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.rf(["#96A2AA","#4E616D"],[0,1],-5.8,-8.3,0,-5.8,-8.3,27.5).s().p("AAwD8QjJj/DMj7IAAgBIAAIAIgDgFg");
	this.shape_67.setTransform(177.8,24.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["#7E8D9A","#475863"],[0,1],1.6,1,-0.9,0.3).s().p("AhoGEQgRAAAAgSIAArkQAAgRARAAIDRAAQARAAAAARIAALkQAAASgRAAgAhqlyIAALkQAAABAAABQAAAAAAAAQABABAAAAQABAAAAAAIDRAAQAAAAABAAQAAAAABgBQAAAAAAAAQAAgBAAgBIAArkQAAAAAAgBQAAAAAAAAQgBgBAAAAQgBAAAAAAIjRAAQAAAAgBAAQAAAAgBABQAAAAAAAAQAAABAAAAg");
	this.shape_68.setTransform(196.6,25);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("EA6mAMTIAAmvIlUAAIAAgKIFeAAIAAG5gEAo5AMTIAAm5IE+AAIAAAKIk0AAIAAGvgAcaK5IAAhUIAKAAIAABKIESAAIAAhKIAKAAIAABUgEA/hAJ3QgtAAAAgtIAAj9QAAgtAtAAICeAAQAtAAAAAtIAAD9QAAAtgtAAgEA++AFNIAAD9QAAAjAjAAICeAAQAjAAAAgjIAAj9QAAgjgjAAIieAAQgjAAAAAjgEhBwAJ3QgtAAAAgtIAAj9QAAgtAtAAICeAAQAtAAAAAtIAAD9QAAAtgtAAgEhCTAFNIAAD9QAAAjAjAAICeAAQAjAAAAgjIAAj9QAAgjgjAAIieAAQgjAAAAAjgEAjmAH5IAXAAIAAj6IAKAAIAAD6IAYAAIgdAvgAXeIlIAAgKIENAAIAAAKgEgjIADfIAFgIIEhCmIgFAIgEgsJAF9IEYihIAFAIIkYChgEglWAF/QhmgBhJhIIAAAAQgRgRgOgTIgDgFIAIgGIADAFQAOASAQARIAAAAQBGBFBiABIAAAAQBjgBBFhFQAQgQAOgUIACgFIAJAGIgDAEQgOAVgRARQhIBIhnABgEgozAD3Qgag3AAg5QAAhFAhg3QAPgYAXgXIAAAAIABgCQBFhFBbgDIAFAAIAAAKIgFAAQhWAEhBA/IAAABIgCACQgXAWgPAYQgfA1AABCQAAA3AZA0IADAFIgJAEgEgiCAD2IACgFQAYgvAAg7QAAhCgfg1QgQgYgXgXQhBhBhXgEIgFAAIAAgKIAFAAQBbADBEBFQAYAYAQAZQAhA3AABFQAAA+gZAxIgCAEgEhF2ADvIAFgDQAVgPATgSQBGhHAAhjQAAhhhGhHQgQgQgSgNIgBAAIgHgFIgEgCIAGgJIAEADIAHAFQATANARARQBJBKAABlQAABohJBIQgUAVgWAOIgEADgEhJ5AD0QgXgOgUgVQhJhIAAhoQAAhlBJhKQASgRATgNIgBAAIAIgFIAEgDIAGAJIgEACIgIAFQgSANgRAQQhGBHAABhQAABjBGBHQATASAWAPIAEADIgFAIgEBJxADuIAEgDQAWgOATgTQBGhHAAhjQAAhhhGhHQgRgQgSgNIAAAAIgHgFIgFgCIAGgJIAEADIAIAFQATANARARQBJBKAABlQAABohJBIQgUAVgWAOIgFADgEBFtADzQgWgOgUgVQhJhIAAhoQAAhlBJhKQARgRATgNIAAAAIAHgFIAEgDIAGAJIgEACIgHAFQgSANgRAQQhGBHAABhQAABjBGBHQATATAWAOIAEADIgGAIgEAi4ADmIAAgKICVAAIAAAKgEAj9ADEIAAkaIgXAAIAdgvIAcAuIgYABIAAEagALnCYIAEgCQAWgOATgUQBGhGAAhhQAAhkhGhGQgRgQgSgNIAAAAIgHgEIgFgEIAGgIIAEADIAIAFQATANARARQBJBKAABnQAABlhJBKQgUATgWAQIgFACgAHiCfQgWgQgUgTQhJhKAAhlQAAhnBJhKQARgRATgNIAAAAIAIgFIAEgDIAFAIIgEAEIgHAEQgSANgRAQQhGBGAABkQAABhBGBGQATAUAWAOIAEACIgGAJgARVBDQhGgHgzg0Qg7g5AAhUQAAhUA7g7QA7g7BUAAQAfAAAcAIQAZAIAWANQAUAMARASQAdAdAPAiIAEAJQAFAOADARQAEATAAAVQAAAlgLAfIAAAAQgOAqgjAfQgtAvg9AKQgSADgTAAIgWgBgAPjkNQg4A4AABQQAABQA4A2QAeAfAlAOQAXAIAaADIAUABQBQAAA4g5QAhgeAOgoQAKgdAAgjQAAgUgEgSQgDgSgGgQQgPgjgdgdQgjgjgsgNQgbgIgeAAQhQAAg4A4gA/TAIQg7g5AAhUQAAhUA7g7QA7g7BUAAQBUAAA7A7QAdAdAPAiIAEAJQAFAOADARQAEATAAAVQAAAlgLAfIAAAAQgOAqgjAfQg7A8hUAAQhUAAg7g8gA/MkNQg4A4AABQQAABQA4A2QA4A5BQAAQBQAAA4g5QAhgeAOgoQAKgdAAgjQAAgUgEgSQgDgSgGgQQgPgjgdgdQg4g4hQAAQhQAAg4A4gEgwDAAIQg7g5AAhUQAAhUA7g8QA7g6BUAAQBUAAA7A6QAdAeAPAhIDJhPIAAhDIAKAAIAABKIjPBSQAFAOADAQQAEAUAAAVQAAAkgLAgIAAgBQgOAqgjAgQg7A8hUAAQhUAAg7g8gEgv8gEOQg4A5AABQQAABQA4A2QA4A5BQAAQBQAAA4g5QAhgeAOgoQAKgeAAgiQAAgUgEgTQgDgRgGgQQgPgkgdgdQg4g3hQAAQhQAAg4A3gEglbgAtIAAkyIAKAAIAAEygEhGfgCDIBKibIAAhBIAKAAIAABDIhLCegEBFMgEdIAAhCIAKAAIAABAIBLCbIgKAFgEAg2gCcIAAhKIkSAAIAABKIgKAAIAAhUIEmAAIAABUgArsi2ICKhQIAFAJIiKBPgA0hj6IAFgIICDBMIgFAIgEg0OgDNIAEgCIANgOQA4g3AAhPQAAhQg4g3IgNgNIgEgDIAGgHIAEADIAOANQA7A7AABTQAABTg7A6IgOAOIgEADgEg4EgDJIgOgNQg6g6AAhTQAAhTA6g7IAOgMIADgDIAHAIIgEADIgNAMIAAgBQg3A3AABQQAABPA3A3IANANIAEACIgHAIgAenkGIAAhcIAKAAIAABcgAtLkPIAthSIAJAEIgtBTgAxwldIAIgEIAuBSIgJAFgAvIk0IAAgrIAKAAIAAArgEA4kgMIIh5AAIAAgKIB8AAIB5BCIgFAJgEApBgLQIB3hBIACgBIB7AAIAAAKIh5AAIh2BBg");
	this.shape_69.setTransform(0,2.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#6C7B8A").s().p("EhP7AM3QgTAAAAgSIAAh/QAAg4gngmQgngng0gBIiIAAQgTAAgBgTIAAggIAAiMIgBAAIAAr7IAAhAIAAghQABgSATAAICAAAQA0AAAngnQAngnAAg4IAAiRQAAgSATAAMCgAAAAQATAAAAASIAABxQABA2AmAnQAnAmA0ABICIAAQATAAABASIABQ1QgBASgTAAIiOAAQg0ABgnAmQgmAngBA2IAAB3QAAASgTAAgEA1QAF6IFUAAIAAGvIAKAAIAAm5IleAAgEAo3AMpIAKAAIAAmvIE0AAIAAgKIk+AAgAcZLPIEmAAIAAhUIgKAAIAABKIkSAAIAAhKIgKAAgEA+zAFjIAAD9QAAAtAtAAICeAAQAtAAAAgtIAAj9QAAgtgtAAIieAAQgtAAAAAtgEhCeAFjIAAD9QAAAtAtAAICeAAQAtAAAAgtIAAj9QAAgtgtAAIieAAQgtAAAAAtgAcxh6IAALkQAAASARAAIDTAAQARAAAAgSIAArkQAAgRgRAAIjTAAQgRAAAAARgEBC9AFwIAADVQAAASARAAIBLAAQASAAAAgSIAAjVQAAgRgSAAIhLAAQgRAAAAARgEhEfAFwIAADVQAAASARAAIBLAAQASAAAAgSIAAjVQAAgRgSAAIhLAAQgRAAAAARgEAkAAI+IAdgvIgXAAIAAj6IgKAAIAAD6IgYAAgAXcI7IENAAIAAgKIkNAAgEAg4AHzIADgEQDLkCjOj5IAAgBgAcjgMQjND5DLECIADAEIAAoAIgBABgEgjKAD1IEhCmIAFgIIkhimgEgsKAGTIAFAIIEYihIgFgIgEgopAEjIADAFQAOATARARIABAAQBIBIBmABIABAAQBmgBBJhIQARgRAOgVIACgEIgIgGIgDAFQgNAUgQAQQhGBFhiABIgBAAQhigBhFhFIgBAAQgQgRgOgSIgDgFgEgoGgAQIgCACIAAAAQgXAVgPAaQghA3AABFQAAA5AbA3IACAEIAJgEIgCgFQgag0AAg3QAAhCAgg1QAPgaAXgUIABgCIAAgBQBBg/BXgEIAFAAIgBgKIgFAAQhbADhEBFgEglNgBOIAFAAQBXAEBCBBQAXAVAPAaQAfA1AABCQAAA7gYAvIgCAFIAJAEIACgEQAZgxAAg+QAAhFggg3QgQgbgYgWQhFhFhagDIgFAAgEhF4gCVIAEACIAHAFIAAAAQASANAQAQQBHBHAABhQAABjhHBHQgTASgVAPIgEADIAGAIIAEgDQAVgOAUgVQBKhIAAhoQAAhlhKhKQgQgRgTgNIgHgFIgEgDgEhJ5gCbIgIAFIAAAAQgTANgRARQhJBKAABlQAABoBJBIQAUAVAWAOIAEADIAGgIIgEgDQgWgPgTgSQhGhHAAhjQAAhhBGhHQARgQASgNIAHgFIAEgCIgFgJgEBJugCWIAEACIAHAFIABAAQASANAQAQQBGBHAABhQAABjhGBHQgTATgVAOIgFADIAGAIIAEgDQAWgOAUgVQBJhIAAhoQAAhlhJhKQgRgRgTgNIgHgFIgFgDgEBFsgCcIgHAFIABAAQgTANgRARQhKBKAABlQAABoBKBIQAUAVAWAOIAEADIAFgIIgEgDQgVgOgTgTQhHhHAAhjQAAhhBHhHQAQgQASgNIAHgFIAEgCIgFgJgEAi2AD8ICVAAIAAgKIiVAAgEAjkgBAIAYAAIAAEaIAKAAIAAkaIAXgBIgcgugALkjsIAEAEIAHAEIABAAQASANAQAQQBGBGAABkQAABhhGBGQgTAUgVAOIgFACIAGAJIAEgCQAWgQAUgTQBJhKAAhlQAAhnhJhKQgRgRgTgNIgHgFIgFgDgAHijxIgIAFIABAAQgTANgSARQhJBKAABnQAABlBJBKQAUATAXAQIAEACIAFgJIgEgCQgWgOgTgUQhGhGAAhhQAAhkBGhGQARgQASgNIAIgEIAEgEIgGgIgAPaj+Qg7A7AABUQAABUA7A5QA0A0BGAHIAWABQATAAARgDQA9gKAugvQAigfAPgqIAAAAQAKgfAAglQAAgVgDgTQgDgRgGgOIgDgJQgPgigdgdQgSgSgTgMQgXgNgZgIQgbgIgfAAQhUAAg8A7gA/Vj+Qg7A7AABUQAABUA7A5QA8A8BUAAQBUAAA7g8QAigfAPgqIAAAAQAKgfAAglQAAgVgDgTQgDgRgGgOIgDgJQgPgigdgdQg7g7hUAAQhUAAg8A7gEgwFgD/Qg7A8AABUQAABUA7A5QA8A8BUAAQBUAAA7g8QAiggAPgqIAAABQAKggAAgkQAAgVgDgUQgDgQgGgOIDPhSIAAhKIgKAAIAABDIjIBPQgPghgdgeQg7g6hUAAQhUAAg8A6gEglcgAXIAKAAIgBkyIgKAAgEhFXgEIIhKCbIAJAFIBLieIAAhDIgKAAgEBFLgEHIBLCeIAJgFIhKibIAAhAIgKAAgEAg1gDQIAABKIAKAAIAAhUIkmAAIAABUIAKAAIAAhKgArtigIAFAIICJhPIgFgJgA0ijkICDBMIAFgIIiDhMgEg0QgHkIAEADIAOANQA3A3AABQQAABPg3A3IgOAOIgEACIAHAIIAEgDIAOgOQA6g6AAhTQAAhTg6g7IgOgNIgEgDgEg4GgHnIgNAMQg7A7AABTQAABTA7A6IANANIAEADIAGgIIgDgCIgNgNQg4g3AAhPQAAhQA4g3IAAABIANgMIADgDIgGgIgAeljwIAKAAIAAhcIgKAAgAtNj5IAJAFIAuhTIgJgEgAxylHIAuBTIAIgFIgthSgAvJkeIAKAAIAAgrIgKAAgEA/2gKoIAAE/QAAARASAAIKOAAQARAAAAgRIAAk/QAAgRgRAAIqOAAQgSAAAAARgAVHqoIAAE/QAAARASAAIRuAAQARAAAAgRIAAk/QAAgRgRAAIxuAAQgSAAAAARgABFqoIAAE/QAAARARAAIRuAAQASAAAAgRIAAk/QAAgRgSAAIxuAAQgRAAAAARgA0bqoIAAE/QAAARASAAIKOAAQARAAAAgRIAAk/QAAgRgRAAIqOAAQgSAAAAARgEgx4gKoIAAE/QAAARASAAIRuAAQARAAAAgRIAAk/QAAgRgRAAIxuAAQgSAAAAARgEhKVgKoIAAE+QAAASASAAIKOAAQARAAAAgSIAAk+QAAgSgRAAIqOAAQgSAAAAASgEA2qgLyIB5AAIB2BBIAFgJIh4hCIh8AAgEAq3gL7Ih3BBIAEAJIB3hBIB5AAIAAgKIh8AAgEA/gAKDQgjAAAAgjIAAj9QAAgjAjAAICeAAQAjAAAAAjIAAD9QAAAjgjAAgEhBxAKDQgjAAAAgjIAAj9QAAgjAjAAICeAAQAjAAAAAjIAAD9QAAAjgjAAgARWBPQgagDgXgIQglgOgfgfQg4g2AAhQQAAhQA4g4QA5g4BQAAQAeAAAbAIQAsANAjAjQAdAdAOAjQAGAQAEASQADASAAAUQAAAjgKAdQgOAoggAeQg4A5hQAAIgUgBgA/OAXQg4g2AAhQQAAhQA4g4QA5g4BQAAQBQAAA4A4QAdAdAOAjQAGAQAEASQADASAAAUQAAAjgKAdQgOAoggAeQg4A5hQAAQhQAAg5g5gEgv+AAXQg4g2AAhQQAAhQA4g5QA5g3BQAAQBQAAA4A3QAdAdAOAkQAGAQAEARQADATAAAUQAAAigKAeQgOAoggAeQg4A5hQAAQhQAAg5g5g");
	this.shape_70.setTransform(0.2,0.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#657381").s().p("EhTbANcQh4AAAAh4IAA3HQAAh4B4AAMCm3AAAQB4AAAAB4IAAXHQAAB4h4AAgEhUrgIcQgTAIgBAbIAAAgIAAM7IABAAIAACMIAAAhQABAaATAJQAHADANAAICHAAQAtABAgAhQAiAhAAAvIAACAQAAAJADAIQAGAMALAFQAHADALAAMCf0AAAQALgBAGgCQALgFAGgMQADgIAAgJIAAh4QABguAhghQAgggAtgBICNAAQANAAAHgDQAUgIAAgaIgBw2QAAgagUgIQgHgEgNAAIiHAAQgtAAggghQghgggBgvIAAhyQAAgJgDgIQgGgMgLgEQgGgDgLgBMigCAAAQgLAAgHAEQgLAEgGAMQgDAIAAAJIAACSQAAAwgiAhQggAhgtAAIh/AAQgNAAgHAEg");

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["#7E8D9A","#4E616D"],[0,1],-301.5,47.7,-300,56.7).s().p("EhP7ANLQgLAAgIgDQgLgFgGgMQgDgIAAgJIAAiAQAAgvghgiQghgggsgBIiIAAQgMAAgIgDQgTgJgBgbIAAggIAAiMIgBAAIAAs7IAAghQABgaATgJQAIgDAMAAICAAAQAsAAAhgiQAhggAAgwIAAiSQAAgJADgIQAGgMALgFQAIgDALAAMCgCAAAQALABAGACQALAFAGAMQADAIAAAJIAAByQABAvAgAgQAhAgAsABICIAAQAMAAAIAEQATAHABAaIABQ2QgBAbgTAHQgIAEgMAAIiOAAQgsABghAgQggAhgBAuIAAB4QAAAJgDAIQgGAMgLAFQgGACgLABgEhUtgH7IAAAhIAABAIAAL7IABAAIAACMIAAAgQABATATAAICIAAQA0ABAnAnQAnAmAAA4IAAB/QAAASATAAMCfyAAAQATAAAAgSIAAh3QABg2AmgnQAngmA0gBICOAAQATAAABgSIgBw1QgBgSgTAAIiIAAQg0gBgngmQgmgngBg2IAAhxQAAgSgTAAMigAAAAQgTAAAAASIAACRQAAA4gnAnQgnAng0AAIiAAAQgTAAgBASg");
	this.shape_72.setTransform(0.2,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-546,-86,1092.1,172.1);


(lib.MCP_app = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lit_green
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33C300").s().p("ACEAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAADADQAEADAAAGQAAAEgEADIAAABQgDADgEAAQgFAAgDgDgABhAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAA+AmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAAbAmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAFAAADADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAgHAmIAAgBQgDgDAAgEQAAgGADgDQAEgDADAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgDAAgEgDgAgqAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAFAAADADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhNAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhwAmIAAgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAiSAmIgBgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgDgDgAByARQgDgCAAgGQAAgFADgDQADgBAGAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgGAAgDgEgABPARQgDgCAAgGQAAgFADgDQAEgBAFAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgFAAgEgEgAAsARQgDgCAAgGQAAgFADgDQAEgBAFAAQAFAAADABQADADAAAFQAAAGgDACQgDAEgFAAQgFAAgEgEgAAJARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAAEABQADADAAAFQAAAGgDACQgEAEgFAAQgEAAgEgEgAgYARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAADABQAEADAAAFQAAAGgEACQgDAEgFAAQgEAAgEgEgAg7ARQgDgCAAgGQAAgFADgDQAEgBAEAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgEAAgEgEgAheARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgAiBARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgACDAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAADADQAEAEAAAEQAAAFgEAEQgDABgEAAQgGAAgDgBgABgAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgGAAgDgBgAA9AAQgDgEAAgFQAAgEADgEQAEgDAFAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgFAAgEgBgAAaAAQgDgEAAgFQAAgEADgEQAEgDAFAAQAFAAADADQADAEAAAEQAAAFgDAEQgDABgFAAQgFAAgEgBgAgHAAQgDgEAAgFQAAgEADgEQAEgDADAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgDAAgEgBgAgqAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDABgFAAQgEAAgEgBgAhNAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgEAAgEgBgAhwAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgAiTAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgABygUQgDgDAAgFQAAgFADgEQADgDAGAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgGAAgDgDgABPgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgFAAgEgDgAAsgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAFAAADADQADAEAAAFQAAAFgDADQgDADgFAAQgFAAgEgDgAAJgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAAEADQADAEAAAFQAAAFgDADQgEADgFAAQgEAAgEgDgAgYgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAADADQAEAEAAAFQAAAFgEADQgDADgFAAQgEAAgEgDgAg7gUQgDgDAAgFQAAgFADgEQAEgDAEAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgEAAgEgDgAhegUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDgAiBgUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDg");
	this.shape.setTransform(0,7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Text
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPAlIAAhJIAPAAQAQAAAAAVQAAAJgDAFQgDACgEACIgKABIAAAhgAgEgCQAEAAADgCQACgDAAgIQAAgIgCgCQgCgDgFAAg");
	this.shape_1.setTransform(5,-5.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPAlIAAhJIAPAAQAQAAAAAVQAAAJgDAFQgDACgEACIgKABIAAAhgAgEgCQAEAAADgCQACgDAAgIQAAgIgCgCQgCgDgFAAg");
	this.shape_2.setTransform(0.4,-5.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAKAlIgDgPIgOAAIgCAPIgKAAIAQhJIAGAAIARBJgAgFAOIALAAIgGghg");
	this.shape_3.setTransform(-4.6,-5.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3C3C3C").s().p("ACEAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAADADQAEADAAAGQAAAEgEADIAAABQgDADgEAAQgFAAgDgDgABhAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAA+AmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAAbAmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAFAAADADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAgHAmIAAgBQgDgDAAgEQAAgGADgDQAEgDADAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgDAAgEgDgAgqAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAFAAADADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhNAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhwAmIAAgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAiSAmIgBgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgDgDgAByARQgDgCAAgGQAAgFADgDQADgBAGAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgGAAgDgEgABPARQgDgCAAgGQAAgFADgDQAEgBAFAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgFAAgEgEgAAsARQgDgCAAgGQAAgFADgDQAEgBAFAAQAFAAADABQADADAAAFQAAAGgDACQgDAEgFAAQgFAAgEgEgAAJARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAAEABQADADAAAFQAAAGgDACQgEAEgFAAQgEAAgEgEgAgYARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAADABQAEADAAAFQAAAGgEACQgDAEgFAAQgEAAgEgEgAg7ARQgDgCAAgGQAAgFADgDQAEgBAEAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgEAAgEgEgAheARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgAiBARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgACDAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAADADQAEAEAAAEQAAAFgEAEQgDABgEAAQgGAAgDgBgABgAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgGAAgDgBgAA9AAQgDgEAAgFQAAgEADgEQAEgDAFAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgFAAgEgBgAAaAAQgDgEAAgFQAAgEADgEQAEgDAFAAQAFAAADADQADAEAAAEQAAAFgDAEQgDABgFAAQgFAAgEgBgAgHAAQgDgEAAgFQAAgEADgEQAEgDADAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgDAAgEgBgAgqAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDABgFAAQgEAAgEgBgAhNAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgEAAgEgBgAhwAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgAiTAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgABygUQgDgDAAgFQAAgFADgEQADgDAGAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgGAAgDgDgABPgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgFAAgEgDgAAsgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAFAAADADQADAEAAAFQAAAFgDADQgDADgFAAQgFAAgEgDgAAJgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAAEADQADAEAAAFQAAAFgDADQgEADgFAAQgEAAgEgDgAgYgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAADADQAEAEAAAFQAAAFgEADQgDADgFAAQgEAAgEgDgAg7gUQgDgDAAgFQAAgFADgEQAEgDAEAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgEAAgEgDgAhegUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDgAiBgUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDg");
	this.shape_4.setTransform(0,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Base
	this.instance = new lib.MCP_pbbase("synched",0);
	this.instance.setTransform(0.1,-0.1,1,1,0,0,0,17.7,17.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-23.3,46.7,46.2);


(lib.MCP_althld = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lit_green
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33C300").s().p("ACEAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAADADQAEADAAAGQAAAEgEADIAAABQgDADgEAAQgFAAgDgDgABhAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAA+AmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAAbAmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAFAAADADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAgHAmIAAgBQgDgDAAgEQAAgGADgDQAEgDADAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgDAAgEgDgAgqAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAFAAADADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhNAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhwAmIAAgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAiSAmIgBgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgDgDgAByARQgDgCAAgGQAAgFADgDQADgBAGAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgGAAgDgEgABPARQgDgCAAgGQAAgFADgDQAEgBAFAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgFAAgEgEgAAsARQgDgCAAgGQAAgFADgDQAEgBAFAAQAFAAADABQADADAAAFQAAAGgDACQgDAEgFAAQgFAAgEgEgAAJARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAAEABQADADAAAFQAAAGgDACQgEAEgFAAQgEAAgEgEgAgYARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAADABQAEADAAAFQAAAGgEACQgDAEgFAAQgEAAgEgEgAg7ARQgDgCAAgGQAAgFADgDQAEgBAEAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgEAAgEgEgAheARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgAiBARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgACDAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAADADQAEAEAAAEQAAAFgEAEQgDABgEAAQgGAAgDgBgABgAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgGAAgDgBgAA9AAQgDgEAAgFQAAgEADgEQAEgDAFAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgFAAgEgBgAAaAAQgDgEAAgFQAAgEADgEQAEgDAFAAQAFAAADADQADAEAAAEQAAAFgDAEQgDABgFAAQgFAAgEgBgAgHAAQgDgEAAgFQAAgEADgEQAEgDADAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgDAAgEgBgAgqAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDABgFAAQgEAAgEgBgAhNAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgEAAgEgBgAhwAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgAiTAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgABygUQgDgDAAgFQAAgFADgEQADgDAGAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgGAAgDgDgABPgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgFAAgEgDgAAsgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAFAAADADQADAEAAAFQAAAFgDADQgDADgFAAQgFAAgEgDgAAJgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAAEADQADAEAAAFQAAAFgDADQgEADgFAAQgEAAgEgDgAgYgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAADADQAEAEAAAFQAAAFgEADQgDADgFAAQgEAAgEgDgAg7gUQgDgDAAgFQAAgFADgEQAEgDAEAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgEAAgEgDgAhegUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDgAiBgUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDg");
	this.shape.setTransform(0,7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Text
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRAlIAAhJIAOAAQAJAAAGAIQAGAIAAAUQAAAUgGAIQgEAJgMAAgAgHAdQAHAAABgCQADgCABgHQADgGAAgMQAAgPgEgHQgCgGgIAAIgBAAg");
	this.shape_1.setTransform(12.4,-5.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMAlIAAhJIAKAAIAABAIAPAAIAAAJg");
	this.shape_2.setTransform(7.8,-5.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAHAlIAAglIgNAAIAAAlIgKAAIAAhJIAKAAIAAAdIANAAIAAgdIAKAAIAABJg");
	this.shape_3.setTransform(3,-5.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEAlIAAhAIgLAAIAAgJIAfAAIAAAJIgLAAIAABAg");
	this.shape_4.setTransform(-4.1,-5.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgMAlIAAhJIAKAAIAABAIAPAAIAAAJg");
	this.shape_5.setTransform(-7.5,-5.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAKAlIgDgPIgOAAIgCAPIgKAAIAQhJIAGAAIARBJgAgFAOIALAAIgGghg");
	this.shape_6.setTransform(-12.3,-5.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3C3C3C").s().p("ACEAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAADADQAEADAAAGQAAAEgEADIAAABQgDADgEAAQgFAAgDgDgABhAmIgBgBQgDgDAAgEQAAgGADgDQADgDAGAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAA+AmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAAbAmIgBgBQgDgDAAgEQAAgGADgDQAEgDAFAAQAFAAADADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgFAAgDgDgAgHAmIAAgBQgDgDAAgEQAAgGADgDQAEgDADAAQAEAAAEADQADADAAAGQAAAEgDADIgBABQgDADgEAAQgDAAgEgDgAgqAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAFAAADADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhNAmIAAgBQgDgDAAgEQAAgGADgDQAEgDAEAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAhwAmIAAgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgEgDgAiSAmIgBgBQgDgDAAgEQAAgGADgDQADgDAFAAQAGAAACADQAEADAAAGQAAAEgEADIAAABQgDADgFAAQgEAAgDgDgAByARQgDgCAAgGQAAgFADgDQADgBAGAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgGAAgDgEgABPARQgDgCAAgGQAAgFADgDQAEgBAFAAQAEAAAEABQADADAAAFQAAAGgDACQgEAEgEAAQgFAAgEgEgAAsARQgDgCAAgGQAAgFADgDQAEgBAFAAQAFAAADABQADADAAAFQAAAGgDACQgDAEgFAAQgFAAgEgEgAAJARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAAEABQADADAAAFQAAAGgDACQgEAEgFAAQgEAAgEgEgAgYARQgDgCAAgGQAAgFADgDQAEgBAEAAQAFAAADABQAEADAAAFQAAAGgEACQgDAEgFAAQgEAAgEgEgAg7ARQgDgCAAgGQAAgFADgDQAEgBAEAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgEAAgEgEgAheARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgAiBARQgDgCAAgGQAAgFADgDQADgBAFAAQAGAAACABQAEADAAAFQAAAGgEACQgCAEgGAAQgFAAgDgEgACDAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAADADQAEAEAAAEQAAAFgEAEQgDABgEAAQgGAAgDgBgABgAAQgDgEAAgFQAAgEADgEQADgDAGAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgGAAgDgBgAA9AAQgDgEAAgFQAAgEADgEQAEgDAFAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgFAAgEgBgAAaAAQgDgEAAgFQAAgEADgEQAEgDAFAAQAFAAADADQADAEAAAEQAAAFgDAEQgDABgFAAQgFAAgEgBgAgHAAQgDgEAAgFQAAgEADgEQAEgDADAAQAEAAAEADQADAEAAAEQAAAFgDAEQgEABgEAAQgDAAgEgBgAgqAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDABgFAAQgEAAgEgBgAhNAAQgDgEAAgFQAAgEADgEQAEgDAEAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgEAAgEgBgAhwAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgAiTAAQgDgEAAgFQAAgEADgEQADgDAFAAQAGAAACADQAEAEAAAEQAAAFgEAEQgCABgGAAQgFAAgDgBgABygUQgDgDAAgFQAAgFADgEQADgDAGAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgGAAgDgDgABPgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAEAAAEADQADAEAAAFQAAAFgDADQgEADgEAAQgFAAgEgDgAAsgUQgDgDAAgFQAAgFADgEQAEgDAFAAQAFAAADADQADAEAAAFQAAAFgDADQgDADgFAAQgFAAgEgDgAAJgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAAEADQADAEAAAFQAAAFgDADQgEADgFAAQgEAAgEgDgAgYgUQgDgDAAgFQAAgFADgEQAEgDAEAAQAFAAADADQAEAEAAAFQAAAFgEADQgDADgFAAQgEAAgEgDgAg7gUQgDgDAAgFQAAgFADgEQAEgDAEAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgEAAgEgDgAhegUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDgAiBgUQgDgDAAgFQAAgFADgEQADgDAFAAQAGAAACADQAEAEAAAFQAAAFgEADQgCADgGAAQgFAAgDgDg");
	this.shape_7.setTransform(0,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Base
	this.instance = new lib.MCP_pbbase("synched",0);
	this.instance.setTransform(0.1,-0.1,1,1,0,0,0,17.7,17.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-23.3,46.7,46.2);


(lib.MASTERWARNR_systemannunciator = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lit - air cond
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AgTAeIAAg7IASAAQAFAAAEABIAGAGQADADACAHQABAFAAAHQAAAIgBAGIgFAJQgCADgEADQgFABgDAAgAgJAUIAHAAIAFgBQABAAAAgBQABAAAAAAQABgBAAAAQAAAAABgBIACgGIABgKIgBgJQgBgEgCgCQgCgCgDgBIgGgBIgEAAg");
	this.shape.setTransform(84.5,25.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AAJAeIgSgmIAAAmIgKAAIAAg7IALAAIASAnIAAgnIAKAAIAAA7g");
	this.shape_1.setTransform(79.4,25.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AgQAXQgHgIAAgPQAAgJAEgHQADgHAFgEQAFgDAGAAQAKAAAHAJQAHAHAAAOQAAAPgHAIQgHAIgKAAQgJAAgHgIgAgIgOQgEAFAAAJQAAAKAEAFQAEAFAEABQAFgBAEgFQAEgFAAgKQAAgJgEgFQgDgGgGAAQgFAAgDAGg");
	this.shape_2.setTransform(74.2,25.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AgNAXQgHgIAAgPQAAgNAHgJQAGgIAIAAQAIAAAGAGQAEAEACAIIgKADQgBgFgDgDQgDgDgEAAQgDAAgEAGQgDAEAAAKQAAALADAEQAEAFADABQAEAAADgEQADgCABgIIAKAFQgCAJgGAFQgFAFgIAAQgHAAgGgIg");
	this.shape_3.setTransform(68.9,25.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AAKAeIgHgNIgEgJIgDgDIgFAAIgCAAIAAAZIgKAAIAAg7IAVAAQAHAAADACQADABACAFQADAEAAAFQAAAIgEADQgDADgHABIAGAFIAGAKIAGAMgAgLgDIAHAAIAHAAIADgDIABgFIgBgFQAAAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAIgGgBIgIAAg");
	this.shape_4.setTransform(62.2,25.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9900").s().p("AgDAeIAAg7IAIAAIAAA7g");
	this.shape_5.setTransform(58.5,25.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9900").s().p("AAOAeIgFgOIgRAAIgFAOIgLAAIAUg7IAJAAIAUA7gAgGAGIAMAAIgGgUg");
	this.shape_6.setTransform(54.9,25.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// lit - doors
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9900").s().p("AgTAKIAKgBQACAMAHAAQAFAAACgDQADgCAAgDIgBgEIgDgDIgHgCQgGgCgDgCQgDgBgCgEQgCgDAAgFQAAgFACgEQADgEAEgCQAEgCAEAAQAIAAAFAFQAFAEAAAKIgKAAQAAgFgDgCQgCgBgDgBQgDABgCABQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAIAHAEQAHACAEADQADABACADQACAEAAAGQAAAHgFAFQgFAGgKAAQgRAAgCgVg");
	this.shape_7.setTransform(35.7,25.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF9900").s().p("AAKAeIgHgNIgEgJIgCgDIgGAAIgCAAIAAAZIgKAAIAAg7IAVAAQAHAAADACQADABACAFQADAEAAAFQAAAIgEADQgDADgHABIAGAFIAGAKIAGAMgAgLgDIAIAAIAGAAIADgDIABgFIgBgFQAAAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAIgGgBIgIAAg");
	this.shape_8.setTransform(31.1,25.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF9900").s().p("AgQAXQgHgIAAgPQAAgJAEgHQADgHAFgEQAFgDAGAAQAKAAAHAJQAHAHAAAOQAAAPgHAIQgHAIgKAAQgJAAgHgIgAgIgOQgEAFAAAJQAAAKAEAFQAEAFAEABQAFgBAEgFQAEgFAAgKQAAgJgEgFQgDgGgGAAQgFAAgDAGg");
	this.shape_9.setTransform(25.7,25.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF9900").s().p("AgQAXQgHgIAAgPQAAgJAEgHQADgHAFgEQAFgDAGAAQAKAAAHAJQAHAHAAAOQAAAPgHAIQgHAIgKAAQgJAAgHgIgAgIgOQgEAFAAAJQAAAKAEAFQAEAFAEABQAFgBAEgFQAEgFAAgKQAAgJgEgFQgDgGgGAAQgFAAgDAGg");
	this.shape_10.setTransform(20.3,25.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF9900").s().p("AgUAeIAAg7IATAAQAFAAAEABIAGAGQADADACAHQABAFAAAHQAAAIgBAGIgFAJQgCADgEADQgFABgDAAgAgJAUIAHAAIAFgBQABAAAAgBQABAAAAAAQABgBAAAAQAAAAABgBIACgGIABgKIgBgJQgBgEgCgCQgCgCgCgBIgHgBIgEAAg");
	this.shape_11.setTransform(15.1,25.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).wait(1));

	// lit - overhead
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF9900").s().p("AgUAeIAAg7IATAAQAFAAAEACIAGAFQADAEACAFQACAHgBAGQABAIgCAGIgFAJQgCADgEADQgFABgEAAgAgKAUIAIAAIAFgBQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAAAIADgGIABgKIgBgJQgBgEgCgCQgCgDgCAAIgHAAIgFAAg");
	this.shape_12.setTransform(87,5.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF9900").s().p("AAOAeIgEgOIgTAAIgEAOIgKAAIATg7IAIAAIAUA7gAgFAGIALAAIgGgVg");
	this.shape_13.setTransform(81.9,5.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF9900").s().p("AgRAeIAAg7IAjAAIAAALIgZAAIAAANIAWAAIAAAIIgWAAIAAARIAaAAIAAAKg");
	this.shape_14.setTransform(77.1,5.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF9900").s().p("AAKAeIAAgbIgSAAIAAAbIgLAAIAAg7IALAAIAAAYIASAAIAAgYIAKAAIAAA7g");
	this.shape_15.setTransform(72.2,5.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF9900").s().p("AAKAeIgHgNIgEgJIgCgDIgGgBIgCAAIAAAaIgKAAIAAg7IAVAAQAHAAADACQADABACAEQADAFAAAFQAAAHgEAFQgDACgGABIAFAGIAGAJIAGAMgAgLgDIAIAAIAHgBIACgCIABgFIgBgEQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAIgGAAIgIAAg");
	this.shape_16.setTransform(67.4,5.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF9900").s().p("AgRAeIAAg7IAjAAIAAALIgZAAIAAANIAXAAIAAAIIgXAAIAAARIAaAAIAAAKg");
	this.shape_17.setTransform(62.4,5.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF9900").s().p("AgEAeIgSg7IALAAIALArIAMgrIALAAIgSA7g");
	this.shape_18.setTransform(57.6,5.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF9900").s().p("AgQAXQgHgIAAgPQAAgJAEgHQADgHAFgDQAFgEAGAAQAKAAAHAIQAHAJAAANQAAAPgHAIQgHAIgKAAQgJAAgHgIgAgIgPQgEAGAAAJQAAAKAEAGQAEAEAEAAQAFAAAEgEQAEgGAAgKQAAgKgEgFQgDgEgGgBQgFABgDAEg");
	this.shape_19.setTransform(52.6,5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).wait(1));

	// lit - hyd
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF9900").s().p("AgUAeIAAg7IATAAQAFAAADACIAHAFQADAEACAFQACAHAAAGQAAAIgCAGIgFAJQgDADgEADQgDABgFAAgAgKAUIAIAAIAFgBQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAAAIADgGIABgKIgBgJQgBgEgCgCQgCgDgCAAIgHAAIgFAAg");
	this.shape_20.setTransform(30.2,5.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF9900").s().p("AgEAeIAAgaIgSghIAMAAIAKAYIALgYIAMAAIgTAhIAAAag");
	this.shape_21.setTransform(25.3,5.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF9900").s().p("AAKAeIAAgbIgSAAIAAAbIgLAAIAAg7IALAAIAAAYIASAAIAAgYIAKAAIAAA7g");
	this.shape_22.setTransform(20.4,5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]}).wait(1));

	// lit - eng
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF9900").s().p("AgKAcQgFgEgEgIQgDgHAAgJQAAgJADgGQAEgIAFgEQAFgDAGAAQAJAAAFAFQAGAEABAJIgKACQgBgFgDgCQgDgCgEgBQgFAAgEAGQgEAEAAAKQAAAKAFAFQADAGAFAAIAGgCQADgBADgDIAAgIIgMAAIAAgIIAWAAIAAAWQgEAFgGADQgGACgGAAQgFAAgGgDg");
	this.shape_23.setTransform(74.5,-14.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF9900").s().p("AAJAeIgSglIAAAlIgJAAIAAg7IAKAAIASAnIAAgnIAJAAIAAA7g");
	this.shape_24.setTransform(69.3,-14.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF9900").s().p("AgSAeIAAg7IAjAAIAAAKIgZAAIAAAOIAYAAIAAAIIgYAAIAAARIAaAAIAAAKg");
	this.shape_25.setTransform(64.6,-14.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]}).wait(1));

	// lit - anti ice
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF9900").s().p("AgRAeIAAg7IAjAAIAAAKIgZAAIAAAOIAXAAIAAAIIgXAAIAAARIAZAAIAAAKg");
	this.shape_26.setTransform(38.2,-14.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF9900").s().p("AgNAXQgHgIAAgPQAAgNAHgJQAGgIAIAAQAIAAAGAGQAEAEACAIIgKADQgBgFgDgCQgDgEgEAAQgDAAgEAGQgDAEAAAKQAAALADAEQAEAGADAAQAEAAADgDQADgEABgHIAKAFQgCAJgGAGQgFAEgIAAQgHAAgGgIg");
	this.shape_27.setTransform(33.2,-14.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF9900").s().p("AgEAeIAAg7IAIAAIAAA7g");
	this.shape_28.setTransform(29.8,-14.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF9900").s().p("AgIAGIAAgLIARAAIAAALg");
	this.shape_29.setTransform(27.6,-13.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF9900").s().p("AgDAeIAAg7IAIAAIAAA7g");
	this.shape_30.setTransform(25.5,-14.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF9900").s().p("AgDAeIAAgxIgPAAIAAgKIAlAAIAAAKIgOAAIAAAxg");
	this.shape_31.setTransform(22.4,-14.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF9900").s().p("AAJAeIgSglIAAAlIgKAAIAAg7IALAAIASAnIAAgnIAKAAIAAA7g");
	this.shape_32.setTransform(17.7,-14.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF9900").s().p("AANAeIgDgOIgTAAIgEAOIgKAAIATg7IAIAAIAUA7gAgFAGIALAAIgGgUg");
	this.shape_33.setTransform(12.7,-14.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]}).wait(1));

	// text
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1E1E1E").s().p("AgTAeIAAg7IASAAQAFAAAEABIAGAGQADADACAHQABAFAAAHQAAAIgBAGIgFAJQgCADgEADQgFABgDAAgAgJAUIAHAAIAFgBQABAAAAgBQABAAAAAAQABgBAAAAQAAAAABgBIACgGIABgKIgBgJQgBgEgCgCQgCgCgDgBIgGgBIgEAAg");
	this.shape_34.setTransform(84.5,25.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#1E1E1E").s().p("AAJAeIgSgmIAAAmIgKAAIAAg7IALAAIASAnIAAgnIAKAAIAAA7g");
	this.shape_35.setTransform(79.4,25.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#1E1E1E").s().p("AgQAXQgHgIAAgPQAAgJAEgHQADgHAFgEQAFgDAGAAQAKAAAHAJQAHAHAAAOQAAAPgHAIQgHAIgKAAQgJAAgHgIgAgIgOQgEAFAAAJQAAAKAEAFQAEAFAEABQAFgBAEgFQAEgFAAgKQAAgJgEgFQgDgGgGAAQgFAAgDAGg");
	this.shape_36.setTransform(74.2,25.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1E1E1E").s().p("AgNAXQgHgIAAgPQAAgNAHgJQAGgIAIAAQAIAAAGAGQAEAEACAIIgKADQgBgFgDgDQgDgDgEAAQgDAAgEAGQgDAEAAAKQAAALADAEQAEAFADABQAEAAADgEQADgCABgIIAKAFQgCAJgGAFQgFAFgIAAQgHAAgGgIg");
	this.shape_37.setTransform(68.9,25.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#1E1E1E").s().p("AAKAeIgHgNIgEgJIgDgDIgFAAIgCAAIAAAZIgKAAIAAg7IAVAAQAHAAADACQADABACAFQADAEAAAFQAAAIgEADQgDADgHABIAGAFIAGAKIAGAMgAgLgDIAHAAIAHAAIADgDIABgFIgBgFQAAAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAIgGgBIgIAAg");
	this.shape_38.setTransform(62.2,25.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#1E1E1E").s().p("AgDAeIAAg7IAIAAIAAA7g");
	this.shape_39.setTransform(58.5,25.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#1E1E1E").s().p("AAOAeIgFgOIgRAAIgFAOIgLAAIAUg7IAJAAIAUA7gAgGAGIAMAAIgGgUg");
	this.shape_40.setTransform(54.9,25.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#1E1E1E").s().p("AgUAeIAAg7IATAAQAFAAAEACIAGAFQADAEACAFQACAHgBAGQABAIgCAGIgFAJQgCADgEADQgFABgEAAgAgKAUIAIAAIAFgBQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAAAIADgGIABgKIgBgJQgBgEgCgCQgCgDgCAAIgHAAIgFAAg");
	this.shape_41.setTransform(87,5.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#1E1E1E").s().p("AAOAeIgEgOIgTAAIgEAOIgKAAIATg7IAIAAIAUA7gAgFAGIALAAIgGgVg");
	this.shape_42.setTransform(81.9,5.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#1E1E1E").s().p("AgRAeIAAg7IAjAAIAAALIgZAAIAAANIAWAAIAAAIIgWAAIAAARIAaAAIAAAKg");
	this.shape_43.setTransform(77.1,5.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#1E1E1E").s().p("AAKAeIAAgbIgSAAIAAAbIgLAAIAAg7IALAAIAAAYIASAAIAAgYIAKAAIAAA7g");
	this.shape_44.setTransform(72.2,5.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1E1E1E").s().p("AAKAeIgHgNIgEgJIgCgDIgGgBIgCAAIAAAaIgKAAIAAg7IAVAAQAHAAADACQADABACAEQADAFAAAFQAAAHgEAFQgDACgGABIAFAGIAGAJIAGAMgAgLgDIAIAAIAHgBIACgCIABgFIgBgEQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAIgGAAIgIAAg");
	this.shape_45.setTransform(67.4,5.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1E1E1E").s().p("AgRAeIAAg7IAjAAIAAALIgZAAIAAANIAXAAIAAAIIgXAAIAAARIAaAAIAAAKg");
	this.shape_46.setTransform(62.4,5.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#1E1E1E").s().p("AgEAeIgSg7IALAAIALArIAMgrIALAAIgSA7g");
	this.shape_47.setTransform(57.6,5.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#1E1E1E").s().p("AgQAXQgHgIAAgPQAAgJAEgHQADgHAFgDQAFgEAGAAQAKAAAHAIQAHAJAAANQAAAPgHAIQgHAIgKAAQgJAAgHgIgAgIgPQgEAGAAAJQAAAKAEAGQAEAEAEAAQAFAAAEgEQAEgGAAgKQAAgKgEgFQgDgEgGgBQgFABgDAEg");
	this.shape_48.setTransform(52.6,5.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#1E1E1E").s().p("AgKAcQgFgEgEgIQgDgHAAgJQAAgJADgGQAEgIAFgEQAFgDAGAAQAJAAAFAFQAGAEABAJIgKACQgBgFgDgCQgDgCgEgBQgFAAgEAGQgEAEAAAKQAAAKAFAFQADAGAFAAIAGgCQADgBADgDIAAgIIgMAAIAAgIIAWAAIAAAWQgEAFgGADQgGACgGAAQgFAAgGgDg");
	this.shape_49.setTransform(74.5,-14.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#1E1E1E").s().p("AAJAeIgSglIAAAlIgJAAIAAg7IAKAAIASAnIAAgnIAJAAIAAA7g");
	this.shape_50.setTransform(69.3,-14.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#1E1E1E").s().p("AgSAeIAAg7IAjAAIAAAKIgZAAIAAAOIAYAAIAAAIIgYAAIAAARIAaAAIAAAKg");
	this.shape_51.setTransform(64.6,-14.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#1E1E1E").s().p("AgTAKIAKgBQACAMAHAAQAFAAACgDQADgCAAgDIgBgEIgDgDIgHgCQgGgCgDgCQgDgBgCgEQgCgDAAgFQAAgFACgEQADgEAEgCQAEgCAEAAQAIAAAFAFQAFAEAAAKIgKAAQAAgFgDgCQgCgBgDgBQgDABgCABQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAIAHAEQAHACAEADQADABACADQACAEAAAGQAAAHgFAFQgFAGgKAAQgRAAgCgVg");
	this.shape_52.setTransform(35.7,25.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#1E1E1E").s().p("AAKAeIgHgNIgEgJIgCgDIgGAAIgCAAIAAAZIgKAAIAAg7IAVAAQAHAAADACQADABACAFQADAEAAAFQAAAIgEADQgDADgHABIAGAFIAGAKIAGAMgAgLgDIAIAAIAGAAIADgDIABgFIgBgFQAAAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAIgGgBIgIAAg");
	this.shape_53.setTransform(31.1,25.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#1E1E1E").s().p("AgQAXQgHgIAAgPQAAgJAEgHQADgHAFgEQAFgDAGAAQAKAAAHAJQAHAHAAAOQAAAPgHAIQgHAIgKAAQgJAAgHgIgAgIgOQgEAFAAAJQAAAKAEAFQAEAFAEABQAFgBAEgFQAEgFAAgKQAAgJgEgFQgDgGgGAAQgFAAgDAGg");
	this.shape_54.setTransform(25.7,25.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#1E1E1E").s().p("AgQAXQgHgIAAgPQAAgJAEgHQADgHAFgEQAFgDAGAAQAKAAAHAJQAHAHAAAOQAAAPgHAIQgHAIgKAAQgJAAgHgIgAgIgOQgEAFAAAJQAAAKAEAFQAEAFAEABQAFgBAEgFQAEgFAAgKQAAgJgEgFQgDgGgGAAQgFAAgDAGg");
	this.shape_55.setTransform(20.3,25.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#1E1E1E").s().p("AgUAeIAAg7IATAAQAFAAAEABIAGAGQADADACAHQABAFAAAHQAAAIgBAGIgFAJQgCADgEADQgFABgDAAgAgJAUIAHAAIAFgBQABAAAAgBQABAAAAAAQABgBAAAAQAAAAABgBIACgGIABgKIgBgJQgBgEgCgCQgCgCgCgBIgHgBIgEAAg");
	this.shape_56.setTransform(15.1,25.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#1E1E1E").s().p("AgUAeIAAg7IATAAQAFAAADACIAHAFQADAEACAFQACAHAAAGQAAAIgCAGIgFAJQgDADgEADQgDABgFAAgAgKAUIAIAAIAFgBQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAAAIADgGIABgKIgBgJQgBgEgCgCQgCgDgCAAIgHAAIgFAAg");
	this.shape_57.setTransform(30.2,5.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#1E1E1E").s().p("AgEAeIAAgaIgSghIAMAAIAKAYIALgYIAMAAIgTAhIAAAag");
	this.shape_58.setTransform(25.3,5.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#1E1E1E").s().p("AAKAeIAAgbIgSAAIAAAbIgLAAIAAg7IALAAIAAAYIASAAIAAgYIAKAAIAAA7g");
	this.shape_59.setTransform(20.4,5.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#1E1E1E").s().p("AgRAeIAAg7IAjAAIAAAKIgZAAIAAAOIAXAAIAAAIIgXAAIAAARIAZAAIAAAKg");
	this.shape_60.setTransform(38.2,-14.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#1E1E1E").s().p("AgNAXQgHgIAAgPQAAgNAHgJQAGgIAIAAQAIAAAGAGQAEAEACAIIgKADQgBgFgDgCQgDgEgEAAQgDAAgEAGQgDAEAAAKQAAALADAEQAEAGADAAQAEAAADgDQADgEABgHIAKAFQgCAJgGAGQgFAEgIAAQgHAAgGgIg");
	this.shape_61.setTransform(33.2,-14.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#1E1E1E").s().p("AgEAeIAAg7IAIAAIAAA7g");
	this.shape_62.setTransform(29.8,-14.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#1E1E1E").s().p("AgIAGIAAgLIARAAIAAALg");
	this.shape_63.setTransform(27.6,-13.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#1E1E1E").s().p("AgDAeIAAg7IAIAAIAAA7g");
	this.shape_64.setTransform(25.5,-14.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#1E1E1E").s().p("AgDAeIAAgxIgPAAIAAgKIAlAAIAAAKIgOAAIAAAxg");
	this.shape_65.setTransform(22.4,-14.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#1E1E1E").s().p("AAJAeIgSglIAAAlIgKAAIAAg7IALAAIASAnIAAgnIAKAAIAAA7g");
	this.shape_66.setTransform(17.7,-14.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#1E1E1E").s().p("AANAeIgDgOIgTAAIgEAOIgKAAIATg7IAIAAIAUA7gAgFAGIALAAIgGgUg");
	this.shape_67.setTransform(12.7,-14.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34}]}).wait(1));

	// base
	this.instance = new lib.MASTERWARNR_pbbase03("synched",0);
	this.instance.setTransform(24.3,0.7,1,1,0,0,0,24.3,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.3,-25.6,93.2,62.9);


(lib.MASTERWARNR_masterwarn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E1E1E").s().p("AgCAYIAAgnIgNAAIAAgIIAfAAIAAAIIgMAAIAAAng");
	this.shape.setTransform(50.1,18.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E1E1E").s().p("AgOAYIAAgvIAcAAIAAAIIgUAAIAAALIATAAIAAAHIgTAAIAAANIAVAAIAAAIg");
	this.shape_1.setTransform(46.4,18.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1E1E1E").s().p("AgPAIIAIgBQABAKAGAAQAEAAACgCQACgCAAgDIgBgDIgCgCIgGgCQgFgCgCgBIgEgEQgCgDAAgDQAAgEACgEIAFgFQAEgCADAAQAHABAEAEQAEAEAAAGIgIABQgBgEgCgBQgBgCgDAAQgCAAgCACQAAAAgBAAQAAAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQAAABABAAIAFAEQAHABADACQACABACADQABADAAAEQAAAGgEAFQgEAFgIgBQgNAAgCgRg");
	this.shape_2.setTransform(42.5,18.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1E1E1E").s().p("AgOAYIAAgvIAcAAIAAAIIgUAAIAAALIATAAIAAAHIgTAAIAAANIAVAAIAAAIg");
	this.shape_3.setTransform(38.7,18.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1E1E1E").s().p("AAIAYIgGgKIgCgIIgCgCIgFAAIgCAAIAAAUIgIAAIAAgvIARAAQAFAAADABQADABACADQACAEAAAEQAAAGgDAEQgDACgFABIAEADIAFAIIAFAKgAgJgCIAHAAIAFgBIADgCIAAgEIAAgDIgDgDIgFAAIgHAAg");
	this.shape_4.setTransform(34.9,18.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1E1E1E").s().p("AgNATQgFgHAAgMQgBgHADgGQADgGAEgCQAFgDAEgBQAIABAGAGQAGAHgBALQAAAMgFAHQgGAGgIAAQgIAAgFgGgAgHgLQgDAEAAAHQAAAIADAFQAEADADAAQAEAAAEgDQADgFAAgIQAAgIgDgDQgEgFgEAAQgDAAgEAFg");
	this.shape_5.setTransform(28.8,18.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1E1E1E").s().p("AgDAYIAAgnIgMAAIAAgIIAfAAIAAAIIgNAAIAAAng");
	this.shape_6.setTransform(24.9,18.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1E1E1E").s().p("AAIAYIAAgVIgPAAIAAAVIgIAAIAAgvIAIAAIAAATIAPAAIAAgTIAIAAIAAAvg");
	this.shape_7.setTransform(19.5,18.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1E1E1E").s().p("AgPAIIAIgBQABAKAGAAQAEAAACgCQACgCAAgDIgBgDIgCgCIgGgCQgFgCgCgBIgEgEQgCgDAAgDQAAgEACgEIAFgFQAEgCADAAQAHABAEAEQAEAEAAAGIgIABQgBgEgCgBQgBgCgDAAQgCAAgCACQAAAAgBAAQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQAAABABAAIAFAEQAHABADACQACABACADQABADAAAEQAAAGgEAFQgEAFgIgBQgNAAgCgRg");
	this.shape_8.setTransform(15.4,18.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1E1E1E").s().p("AgIAWQgEgCgBgEQgCgEAAgMIAAgYIAIAAIAAAZIAAAJQABACADADQACABABAAIAFgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBIAAgKIAAgZIAJAAIAAAYIgBAPQgCAEgDADQgEADgGAAQgFAAgDgDg");
	this.shape_9.setTransform(11.5,18.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1E1E1E").s().p("AgOAYIAAgvIANAAIAIAAQAEABACAEQACAEAAAGQAAAGgCACQgCACgDACQgDABgFAAIgGAAIAAATgAgGgBIAFAAIAEgBIADgCIABgEIgBgEIgDgCIgFgBIgEAAg");
	this.shape_10.setTransform(7.5,18.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1E1E1E").s().p("AAOAqIgKgSIgGgNIgEgDIgHgCIgDAAIAAAkIgOAAIAAhTIAeAAQAJgBAFADQAFACADAGQAEAFAAAJQAAAJgFAHQgFAEgJABQAFAEADAEQADAEAFAKIAIAQgAgQgFIALAAQAHAAADgBQADgBABgDQACgCAAgEQAAgEgCgDQgBgDgDAAQgCgBgIAAIgLAAg");
	this.shape_11.setTransform(46,-10.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1E1E1E").s().p("AgaAqIAAhTIAzAAIAAAOIgkAAIAAATIAiAAIAAAMIgiAAIAAAYIAlAAIAAAOg");
	this.shape_12.setTransform(39,-10.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1E1E1E").s().p("AgGAqIAAhFIgVAAIAAgOIA2AAIAAAOIgVAAIAABFg");
	this.shape_13.setTransform(32.6,-10.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1E1E1E").s().p("AgbAOIAOgBQACAQALAAQAHAAADgDQAEgDAAgFIgBgGIgEgCIgLgFQgJgDgEgCQgFgCgCgFQgDgGAAgGQAAgHAEgGQADgFAFgDQAGgDAHAAQAMAAAHAHQAHAGAAANIgOABQgBgHgDgDQgDgDgFAAQgFAAgDADQgDADAAADQAAAEADACQADACAIADQAKADAFADQAFADADAEQACAGAAAIQAAAKgHAJQgHAHgOAAQgYAAgDgeg");
	this.shape_14.setTransform(26.3,-10.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1E1E1E").s().p("AAUAqIgHgTIgaAAIgGATIgPAAIAchTIANAAIAcBTgAgIAJIARAAIgJgfg");
	this.shape_15.setTransform(19.5,-10.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1E1E1E").s().p("AAUAqIAAhBIgOBBIgLAAIgPhBIAABBIgMAAIAAhTIAUAAIAMA4IAMg4IAVAAIAABTg");
	this.shape_16.setTransform(11.9,-10.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1E1E1E").s().p("AANAqIgag2IAAA2IgNAAIAAhTIANAAIAbA3IAAg3IANAAIAABTg");
	this.shape_17.setTransform(47.3,4.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1E1E1E").s().p("AgWAhQgKgMAAgVQgBgNAFgKQAFgKAGgFQAIgFAJAAQAPAAAJAMQAJALAAAUQABAVgLAMQgIALgPAAQgOAAgIgLgAgMgVQgGAHAAAOQAAAPAGAHQAFAHAHAAQAIAAAFgHQAGgIAAgOQAAgOgGgHQgFgHgIAAQgHAAgFAHg");
	this.shape_18.setTransform(40,4.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1E1E1E").s().p("AgGAqIAAhTIANAAIAABTg");
	this.shape_19.setTransform(34.8,4.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1E1E1E").s().p("AgGAqIAAhFIgUAAIAAgOIA2AAIAAAOIgVAAIAABFg");
	this.shape_20.setTransform(30.4,4.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1E1E1E").s().p("AgOAnQgHgEgCgHQgEgHAAgTIAAgsIAPAAIAAAsIAAAOQABAGAEADQAEADADAAQAFAAADgCQADgCACgEQAAgEAAgNIAAgtIAPAAIAAArQAAARgCAIQgCAIgHAEQgGAFgKAAQgKAAgFgEg");
	this.shape_21.setTransform(23.8,4.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1E1E1E").s().p("AAUAqIgHgTIgaAAIgGATIgPAAIAchTIANAAIAcBTgAgIAJIARAAIgJgfg");
	this.shape_22.setTransform(16.7,4.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1E1E1E").s().p("AgTAhQgKgMAAgUQAAgVAKgMQAIgLANAAQAMAAAIAIQAGAGACALIgOAFQgBgIgEgDQgEgEgGAAQgGAAgEAHQgFAGAAAPQAAAQAEAGQAFAHAGAAQAFAAAFgEQAEgEACgKIANAFQgDAOgHAIQgIAGgLAAQgMAAgIgLg");
	this.shape_23.setTransform(9.6,4.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.MASTERWARNR_pbbase02("synched",0);
	this.instance.setTransform(24.3,0.7,1,1,0,0,0,24.3,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.3,-23.6,55.2,53.9);


(lib.MASTERWARNR_firewarn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D9D9D9").s().p("AgCAYIAAgnIgNAAIAAgIIAfAAIAAAIIgMAAIAAAng");
	this.shape.setTransform(47.1,18.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D9D9D9").s().p("AgIAWQgDgCgCgEQgCgEAAgMIAAgYIAJAAIAAAZIAAAJQAAACACADQADABABAAIAEgBQABAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBIAAgKIAAgZIAJAAIAAAYIgBAPQgCAEgDADQgEADgGAAQgEAAgEgDg");
	this.shape_1.setTransform(43.3,18.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D9D9D9").s().p("AgMATQgHgHAAgMQABgHACgGQADgGAEgCQAFgDAEgBQAIABAGAGQAGAHAAALQgBAMgFAHQgFAGgJAAQgHAAgFgGgAgHgLQgDAEAAAHQAAAIADAFQAEADADAAQAFAAACgDQAEgFAAgIQAAgIgEgDQgCgFgFAAQgEAAgDAFg");
	this.shape_2.setTransform(39,18.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D9D9D9").s().p("AgCAYIAAgnIgNAAIAAgIIAfAAIAAAIIgNAAIAAAng");
	this.shape_3.setTransform(35.1,18.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D9D9D9").s().p("AgIAWQgEgCgBgEQgCgEAAgMIAAgYIAIAAIAAAZIAAAJQABACADADQACABABAAIAFgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBIAAgKIAAgZIAJAAIAAAYIgBAPQgCAEgDADQgEADgGAAQgFAAgDgDg");
	this.shape_4.setTransform(31.3,18.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D9D9D9").s().p("AgKATQgHgHAAgMQAAgLAHgHQAEgHAHAAQAHABAFAEQADADABAHIgIACQAAgDgDgCQgCgDgEAAQgCAAgDAEQgCAEgBAIQABAIACAFQADADACAAQADABADgDQADgDAAgFIAIADQgBAIgFAFQgEADgHAAQgFAAgFgGg");
	this.shape_5.setTransform(27.1,18.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D9D9D9").s().p("AgNAYIAAgvIAIAAIAAAnIATAAIAAAIg");
	this.shape_6.setTransform(22,18.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D9D9D9").s().p("AgNAYIAAgvIAIAAIAAAnIATAAIAAAIg");
	this.shape_7.setTransform(18.5,18.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D9D9D9").s().p("AgOAYIAAgvIAcAAIAAAIIgUAAIAAALIATAAIAAAHIgTAAIAAANIAVAAIAAAIg");
	this.shape_8.setTransform(14.7,18.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D9D9D9").s().p("AgQAYIAAgvIAQAAIAIABQADABACADQACADAAAEQAAADgCAEQgBADgDABQAEAAACADQACADAAAEQAAAFgDAEQgCAEgEABIgKAAgAgHAQIAHAAIAFgBIACgBIABgFIgBgEIgDgCIgFAAIgGAAgAgHgDIAFAAIAEgBQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABAAIABgFIgBgDIgDgCIgGgBIgEAAg");
	this.shape_9.setTransform(10.7,18.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D9D9D9").s().p("AgaAqIAAhTIAzAAIAAAOIgkAAIAAATIAiAAIAAAMIgiAAIAAAYIAlAAIAAAOg");
	this.shape_10.setTransform(36.6,-10.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D9D9D9").s().p("AAOAqIgKgSIgGgNIgEgDIgHgCIgDAAIAAAkIgOAAIAAhTIAeAAQAJgBAFADQAFACADAGQAEAFAAAJQAAAJgFAHQgFAEgJABQAFAEADAEQADAEAFAKIAIAQgAgQgFIALAAQAHAAADgBQADgBABgDQACgCAAgEQAAgEgCgDQgBgDgDAAQgCgBgIAAIgLAAg");
	this.shape_11.setTransform(29.9,-10.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D9D9D9").s().p("AgGAqIAAhTIANAAIAABTg");
	this.shape_12.setTransform(24.7,-10.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D9D9D9").s().p("AgWAqIAAhTIAuAAIAAAOIghAAIAAAVIAcAAIAAAMIgcAAIAAAkg");
	this.shape_13.setTransform(20.5,-10.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D9D9D9").s().p("AANAqIgag2IAAA2IgNAAIAAhTIANAAIAbA3IAAg3IANAAIAABTg");
	this.shape_14.setTransform(39.9,4.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D9D9D9").s().p("AAOAqIgKgSIgGgNIgEgEIgHgBIgDAAIAAAkIgOAAIAAhTIAeAAQAJgBAFADQAFACADAGQAEAGAAAHQAAAKgFAHQgFAEgJABQAFAEADAEQADAEAFAJIAIARgAgQgFIALAAQAHAAADgBQADgBABgDQACgCAAgEQAAgEgCgDQgBgDgDAAQgCgBgIAAIgLAAg");
	this.shape_15.setTransform(33.2,4.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D9D9D9").s().p("AAUAqIgHgTIgaAAIgGATIgPAAIAchTIANAAIAcBTgAgIAJIARAAIgJgfg");
	this.shape_16.setTransform(25.7,4.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D9D9D9").s().p("AANAqIgNg+IgNA+IgPAAIgRhTIAPAAIAKA4IANg4IAPAAIAMA5IALg5IAPAAIgSBTg");
	this.shape_17.setTransform(18.1,4.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.MASTERWARNR_pbbase01("synched",0);
	this.instance.setTransform(24.3,0.7,1,1,0,0,0,24.3,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.3,-23.6,55.2,53.9);


(lib.MASTERWARNL_systemannunciator = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lit - ovht / det
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AgDAeIAAgxIgPAAIAAgKIAlAAIAAAKIgOAAIAAAxg");
	this.shape.setTransform(85.2,25.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AgRAeIAAg7IAjAAIAAAKIgZAAIAAAOIAXAAIAAAIIgXAAIAAARIAaAAIAAAKg");
	this.shape_1.setTransform(80.8,25.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AgTAeIAAg7IASAAQAFAAAEABIAGAGQADADABAHQACAFAAAHQAAAIgCAGIgEAJQgCADgEADQgFABgDAAgAgJAUIAHAAIAFgBQABAAAAgBQABAAAAAAQABgBAAAAQAAAAABgBIACgGIABgKIgBgJQgBgEgCgCQgCgCgDgBIgGgBIgEAAg");
	this.shape_2.setTransform(76,25.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AgIAfIAKg9IAHAAIgKA9g");
	this.shape_3.setTransform(72.4,25.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AgDAeIAAgxIgPAAIAAgKIAlAAIAAAKIgOAAIAAAxg");
	this.shape_4.setTransform(69.3,25.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9900").s().p("AAKAeIAAgaIgSAAIAAAaIgKAAIAAg7IAKAAIAAAYIASAAIAAgYIAJAAIAAA7g");
	this.shape_5.setTransform(64.6,25.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9900").s().p("AgEAeIgSg7IALAAIALArIAMgrIALAAIgSA7g");
	this.shape_6.setTransform(59.8,25.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9900").s().p("AgQAXQgHgIAAgPQAAgJAEgHQADgHAFgEQAFgDAGAAQAKAAAHAJQAHAHAAAOQAAAPgHAIQgHAIgKAAQgJAAgHgIgAgIgOQgEAFAAAJQAAAKAEAFQAEAFAEABQAFgBAEgFQAEgFAAgKQAAgJgEgFQgDgGgGAAQgFAAgDAGg");
	this.shape_7.setTransform(54.8,25.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// lit - fuel
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF9900").s().p("AgQAeIAAg7IAKAAIAAAwIAXAAIAAALg");
	this.shape_8.setTransform(32.5,25.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF9900").s().p("AgRAeIAAg7IAiAAIAAAKIgYAAIAAAOIAXAAIAAAIIgXAAIAAARIAZAAIAAAKg");
	this.shape_9.setTransform(27.9,25.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF9900").s().p("AgKAcQgEgDgDgFQgBgFAAgOIAAgfIAKAAIAAAfIAAAKQAAAFADACQADACACAAQADAAADgCQACgBABgDIAAgMIAAggIAKAAIAAAeQABANgCAFQgCAGgEADQgEAEgIgBQgGAAgEgCg");
	this.shape_10.setTransform(23,25.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF9900").s().p("AgQAeIAAg7IAhAAIAAAKIgXAAIAAAPIATAAIAAAIIgTAAIAAAag");
	this.shape_11.setTransform(18.4,25.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).wait(1));

	// lit - apu
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF9900").s().p("AgKAcQgEgDgCgFQgCgFAAgOIAAgeIAKAAIAAAfIAAAKQAAAEADACQACACADAAQADAAACgCQADgBABgDIAAgLIAAggIALAAIAAAdQgBANgBAFQgCAGgEADQgFADgHABQgGgBgEgCg");
	this.shape_12.setTransform(74.5,5.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF9900").s().p("AgSAeIAAg7IARAAQAHAAACABQAFABADAFQADAEAAAIQAAAGgDAEQgCAEgEABQgEACgHAAIgHAAIAAAXgAgIgBIAGAAIAGgBIADgDQABgCAAgDQAAgDgBgCIgDgDIgHAAIgFAAg");
	this.shape_13.setTransform(69.8,5.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF9900").s().p("AAOAeIgFgOIgRAAIgFAOIgLAAIAUg7IAJAAIAUA7gAgGAGIAMAAIgGgVg");
	this.shape_14.setTransform(64.8,5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).wait(1));

	// lit - irs
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF9900").s().p("AgTAKIAKgBQACALAHAAQAFAAACgBQADgDAAgEIgBgDIgDgCIgHgEQgGgCgDgBQgDgBgCgEQgCgEAAgEQAAgFACgEQADgEAEgCQAEgCAEAAQAIAAAFAFQAFAFAAAIIgKABQAAgFgDgCQgCgCgDAAQgDAAgCACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQABABAAAAQAAABABABIAHADQAHADAEACQADABACADQACAEAAAFQAAAIgFAGQgFAFgKAAQgRAAgCgVg");
	this.shape_15.setTransform(28.7,5.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF9900").s().p("AAKAeIgHgNIgEgJIgCgDIgGgBIgCAAIAAAaIgKAAIAAg7IAVAAQAHAAADACQADABACAEQADAFAAAFQAAAHgEAFQgDACgGABIAFAGIAGAJIAGAMgAgLgDIAIAAIAHgBIACgCIABgFIgBgEQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAIgGAAIgIAAg");
	this.shape_16.setTransform(24.2,5.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF9900").s().p("AgDAeIAAg7IAIAAIAAA7g");
	this.shape_17.setTransform(20.5,5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]}).wait(1));

	// lit - elec
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF9900").s().p("AgNAXQgHgIAAgPQAAgNAHgJQAGgIAIAAQAIAAAGAGQAEAEACAIIgKADQgBgFgDgCQgDgEgEAAQgDAAgEAGQgDAEAAAKQAAALADAEQAEAGADAAQAEAAADgDQADgEABgHIAKAFQgCAJgGAGQgFAEgIAAQgHAAgGgIg");
	this.shape_18.setTransform(76.5,-14.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF9900").s().p("AgRAeIAAg7IAjAAIAAAKIgZAAIAAAOIAWAAIAAAIIgWAAIAAARIAaAAIAAAKg");
	this.shape_19.setTransform(71.7,-14.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF9900").s().p("AgQAeIAAg7IAKAAIAAAwIAXAAIAAALg");
	this.shape_20.setTransform(67.4,-14.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF9900").s().p("AgRAeIAAg7IAjAAIAAAKIgZAAIAAAOIAXAAIAAAIIgXAAIAAARIAaAAIAAAKg");
	this.shape_21.setTransform(62.8,-14.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]}).wait(1));

	// lit - flt cont
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF9900").s().p("AgDAeIAAgxIgPAAIAAgKIAlAAIAAAKIgOAAIAAAxg");
	this.shape_22.setTransform(40.1,-14.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF9900").s().p("AAJAeIgSglIAAAlIgJAAIAAg7IAKAAIASAnIAAgnIAJAAIAAA7g");
	this.shape_23.setTransform(35.5,-14.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF9900").s().p("AgQAXQgHgIAAgPQAAgJAEgHQADgHAFgEQAFgDAGAAQAKAAAHAIQAHAIAAAOQAAAPgHAIQgHAIgKAAQgJAAgHgIgAgIgOQgEAFAAAJQAAAKAEAFQAEAGAEAAQAFAAAEgGQAEgFAAgKQAAgKgEgEQgDgGgGAAQgFAAgDAGg");
	this.shape_24.setTransform(30.3,-14.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF9900").s().p("AgNAXQgHgIAAgPQAAgNAHgJQAGgIAIAAQAIAAAGAGQAEAEACAIIgKADQgBgFgDgCQgDgEgEAAQgDAAgEAGQgDAEAAAKQAAALADAEQAEAGADAAQAEAAADgDQADgEABgHIAKAFQgCAJgGAGQgFAEgIAAQgHAAgGgIg");
	this.shape_25.setTransform(25,-14.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF9900").s().p("AgDAeIAAgxIgPAAIAAgKIAlAAIAAAKIgOAAIAAAxg");
	this.shape_26.setTransform(18.4,-14.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF9900").s().p("AgQAeIAAg7IAKAAIAAAwIAXAAIAAALg");
	this.shape_27.setTransform(14.9,-14.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF9900").s().p("AgQAeIAAg7IAhAAIAAAKIgXAAIAAAPIATAAIAAAIIgTAAIAAAag");
	this.shape_28.setTransform(10.5,-14.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]}).wait(1));

	// text
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1E1E1E").s().p("AgDAeIAAgxIgPAAIAAgKIAlAAIAAAKIgOAAIAAAxg");
	this.shape_29.setTransform(85.2,25.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1E1E1E").s().p("AgRAeIAAg7IAjAAIAAAKIgZAAIAAAOIAXAAIAAAIIgXAAIAAARIAaAAIAAAKg");
	this.shape_30.setTransform(80.8,25.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1E1E1E").s().p("AgTAeIAAg7IASAAQAFAAAEABIAGAGQADADABAHQACAFAAAHQAAAIgCAGIgEAJQgCADgEADQgFABgDAAgAgJAUIAHAAIAFgBQABAAAAgBQABAAAAAAQABgBAAAAQAAAAABgBIACgGIABgKIgBgJQgBgEgCgCQgCgCgDgBIgGgBIgEAAg");
	this.shape_31.setTransform(76,25.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1E1E1E").s().p("AgIAfIAKg9IAHAAIgKA9g");
	this.shape_32.setTransform(72.4,25.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1E1E1E").s().p("AgDAeIAAgxIgPAAIAAgKIAlAAIAAAKIgOAAIAAAxg");
	this.shape_33.setTransform(69.3,25.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1E1E1E").s().p("AAKAeIAAgaIgSAAIAAAaIgKAAIAAg7IAKAAIAAAYIASAAIAAgYIAJAAIAAA7g");
	this.shape_34.setTransform(64.6,25.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#1E1E1E").s().p("AgEAeIgSg7IALAAIALArIAMgrIALAAIgSA7g");
	this.shape_35.setTransform(59.8,25.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#1E1E1E").s().p("AgQAXQgHgIAAgPQAAgJAEgHQADgHAFgEQAFgDAGAAQAKAAAHAJQAHAHAAAOQAAAPgHAIQgHAIgKAAQgJAAgHgIgAgIgOQgEAFAAAJQAAAKAEAFQAEAFAEABQAFgBAEgFQAEgFAAgKQAAgJgEgFQgDgGgGAAQgFAAgDAGg");
	this.shape_36.setTransform(54.8,25.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1E1E1E").s().p("AgKAcQgEgDgCgFQgCgFAAgOIAAgeIAKAAIAAAfIAAAKQAAAEADACQACACADAAQADAAACgCQADgBABgDIAAgLIAAggIALAAIAAAdQgBANgBAFQgCAGgEADQgFADgHABQgGgBgEgCg");
	this.shape_37.setTransform(74.5,5.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#1E1E1E").s().p("AgSAeIAAg7IARAAQAHAAACABQAFABADAFQADAEAAAIQAAAGgDAEQgCAEgEABQgEACgHAAIgHAAIAAAXgAgIgBIAGAAIAGgBIADgDQABgCAAgDQAAgDgBgCIgDgDIgHAAIgFAAg");
	this.shape_38.setTransform(69.8,5.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#1E1E1E").s().p("AAOAeIgFgOIgRAAIgFAOIgLAAIAUg7IAJAAIAUA7gAgGAGIAMAAIgGgVg");
	this.shape_39.setTransform(64.8,5.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#1E1E1E").s().p("AgNAXQgHgIAAgPQAAgNAHgJQAGgIAIAAQAIAAAGAGQAEAEACAIIgKADQgBgFgDgCQgDgEgEAAQgDAAgEAGQgDAEAAAKQAAALADAEQAEAGADAAQAEAAADgDQADgEABgHIAKAFQgCAJgGAGQgFAEgIAAQgHAAgGgIg");
	this.shape_40.setTransform(76.5,-14.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#1E1E1E").s().p("AgRAeIAAg7IAjAAIAAAKIgZAAIAAAOIAWAAIAAAIIgWAAIAAARIAaAAIAAAKg");
	this.shape_41.setTransform(71.7,-14.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#1E1E1E").s().p("AgQAeIAAg7IAKAAIAAAwIAXAAIAAALg");
	this.shape_42.setTransform(67.4,-14.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#1E1E1E").s().p("AgRAeIAAg7IAjAAIAAAKIgZAAIAAAOIAXAAIAAAIIgXAAIAAARIAaAAIAAAKg");
	this.shape_43.setTransform(62.8,-14.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#1E1E1E").s().p("AgQAeIAAg7IAKAAIAAAwIAXAAIAAALg");
	this.shape_44.setTransform(32.5,25.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1E1E1E").s().p("AgRAeIAAg7IAiAAIAAAKIgYAAIAAAOIAXAAIAAAIIgXAAIAAARIAZAAIAAAKg");
	this.shape_45.setTransform(27.9,25.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1E1E1E").s().p("AgKAcQgEgDgDgFQgBgFAAgOIAAgfIAKAAIAAAfIAAAKQAAAFADACQADACACAAQADAAADgCQACgBABgDIAAgMIAAggIAKAAIAAAeQABANgCAFQgCAGgEADQgEAEgIgBQgGAAgEgCg");
	this.shape_46.setTransform(23,25.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#1E1E1E").s().p("AgQAeIAAg7IAhAAIAAAKIgXAAIAAAPIATAAIAAAIIgTAAIAAAag");
	this.shape_47.setTransform(18.4,25.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#1E1E1E").s().p("AgTAKIAKgBQACALAHAAQAFAAACgBQADgDAAgEIgBgDIgDgCIgHgEQgGgCgDgBQgDgBgCgEQgCgEAAgEQAAgFACgEQADgEAEgCQAEgCAEAAQAIAAAFAFQAFAFAAAIIgKABQAAgFgDgCQgCgCgDAAQgDAAgCACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQABABAAAAQAAABABABIAHADQAHADAEACQADABACADQACAEAAAFQAAAIgFAGQgFAFgKAAQgRAAgCgVg");
	this.shape_48.setTransform(28.7,5.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#1E1E1E").s().p("AAKAeIgHgNIgEgJIgCgDIgGgBIgCAAIAAAaIgKAAIAAg7IAVAAQAHAAADACQADABACAEQADAFAAAFQAAAHgEAFQgDACgGABIAFAGIAGAJIAGAMgAgLgDIAIAAIAHgBIACgCIABgFIgBgEQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAIgGAAIgIAAg");
	this.shape_49.setTransform(24.2,5.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#1E1E1E").s().p("AgDAeIAAg7IAIAAIAAA7g");
	this.shape_50.setTransform(20.5,5.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#1E1E1E").s().p("AgDAeIAAgxIgPAAIAAgKIAlAAIAAAKIgOAAIAAAxg");
	this.shape_51.setTransform(40.1,-14.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#1E1E1E").s().p("AAJAeIgSglIAAAlIgJAAIAAg7IAKAAIASAnIAAgnIAJAAIAAA7g");
	this.shape_52.setTransform(35.5,-14.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#1E1E1E").s().p("AgQAXQgHgIAAgPQAAgJAEgHQADgHAFgEQAFgDAGAAQAKAAAHAIQAHAIAAAOQAAAPgHAIQgHAIgKAAQgJAAgHgIgAgIgOQgEAFAAAJQAAAKAEAFQAEAGAEAAQAFAAAEgGQAEgFAAgKQAAgKgEgEQgDgGgGAAQgFAAgDAGg");
	this.shape_53.setTransform(30.3,-14.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#1E1E1E").s().p("AgNAXQgHgIAAgPQAAgNAHgJQAGgIAIAAQAIAAAGAGQAEAEACAIIgKADQgBgFgDgCQgDgEgEAAQgDAAgEAGQgDAEAAAKQAAALADAEQAEAGADAAQAEAAADgDQADgEABgHIAKAFQgCAJgGAGQgFAEgIAAQgHAAgGgIg");
	this.shape_54.setTransform(25,-14.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#1E1E1E").s().p("AgDAeIAAgxIgPAAIAAgKIAlAAIAAAKIgOAAIAAAxg");
	this.shape_55.setTransform(18.4,-14.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#1E1E1E").s().p("AgQAeIAAg7IAKAAIAAAwIAXAAIAAALg");
	this.shape_56.setTransform(14.9,-14.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#1E1E1E").s().p("AgQAeIAAg7IAhAAIAAAKIgXAAIAAAPIATAAIAAAIIgTAAIAAAag");
	this.shape_57.setTransform(10.5,-14.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]}).wait(1));

	// base
	this.instance = new lib.MASTERWARNL_pbbase03("synched",0);
	this.instance.setTransform(24.3,0.7,1,1,0,0,0,24.3,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.3,-25.6,93.2,62.9);


(lib.MASTERWARNL_masterwarn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E1E1E").s().p("AgCAYIAAgnIgNAAIAAgIIAfAAIAAAIIgMAAIAAAng");
	this.shape.setTransform(50.1,18.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E1E1E").s().p("AgOAYIAAgvIAcAAIAAAIIgUAAIAAALIATAAIAAAHIgTAAIAAANIAVAAIAAAIg");
	this.shape_1.setTransform(46.4,18.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1E1E1E").s().p("AgPAIIAIgBQABAKAGAAQAEAAACgCQACgCAAgDIgBgDIgCgCIgGgCQgFgCgCgBIgEgEQgCgDAAgDQAAgEACgEIAFgFQAEgCADAAQAHABAEAEQAEAEAAAGIgIABQgBgEgCgBQgBgCgDAAQgCAAgCACQAAAAgBAAQAAAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQAAABABAAIAFAEQAHABADACQACABACADQABADAAAEQAAAGgEAFQgEAFgIgBQgNAAgCgRg");
	this.shape_2.setTransform(42.5,18.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1E1E1E").s().p("AgOAYIAAgvIAcAAIAAAIIgUAAIAAALIATAAIAAAHIgTAAIAAANIAVAAIAAAIg");
	this.shape_3.setTransform(38.7,18.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1E1E1E").s().p("AAIAYIgGgKIgCgIIgCgCIgFAAIgCAAIAAAUIgIAAIAAgvIARAAQAFAAADABQADABACADQACAEAAAEQAAAGgDAEQgDACgFABIAEADIAFAIIAFAKgAgJgCIAHAAIAFgBIADgCIAAgEIAAgDIgDgDIgFAAIgHAAg");
	this.shape_4.setTransform(34.9,18.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1E1E1E").s().p("AgNATQgFgHAAgMQgBgHADgGQADgGAEgCQAFgDAEgBQAIABAGAGQAGAHgBALQAAAMgFAHQgGAGgIAAQgIAAgFgGgAgHgLQgDAEAAAHQAAAIADAFQAEADADAAQAEAAAEgDQADgFAAgIQAAgIgDgDQgEgFgEAAQgDAAgEAFg");
	this.shape_5.setTransform(28.8,18.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1E1E1E").s().p("AgDAYIAAgnIgMAAIAAgIIAfAAIAAAIIgNAAIAAAng");
	this.shape_6.setTransform(24.9,18.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1E1E1E").s().p("AAIAYIAAgVIgPAAIAAAVIgIAAIAAgvIAIAAIAAATIAPAAIAAgTIAIAAIAAAvg");
	this.shape_7.setTransform(19.5,18.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1E1E1E").s().p("AgPAIIAIgBQABAKAGAAQAEAAACgCQACgCAAgDIgBgDIgCgCIgGgCQgFgCgCgBIgEgEQgCgDAAgDQAAgEACgEIAFgFQAEgCADAAQAHABAEAEQAEAEAAAGIgIABQgBgEgCgBQgBgCgDAAQgCAAgCACQAAAAgBAAQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQAAABABAAIAFAEQAHABADACQACABACADQABADAAAEQAAAGgEAFQgEAFgIgBQgNAAgCgRg");
	this.shape_8.setTransform(15.4,18.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1E1E1E").s().p("AgIAWQgEgCgBgEQgCgEAAgMIAAgYIAIAAIAAAZIAAAJQABACADADQACABABAAIAFgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBIAAgKIAAgZIAJAAIAAAYIgBAPQgCAEgDADQgEADgGAAQgFAAgDgDg");
	this.shape_9.setTransform(11.5,18.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1E1E1E").s().p("AgOAYIAAgvIANAAIAIAAQAEABACAEQACAEAAAGQAAAGgCACQgCACgDACQgDABgFAAIgGAAIAAATgAgGgBIAFAAIAEgBIADgCIABgEIgBgEIgDgCIgFgBIgEAAg");
	this.shape_10.setTransform(7.5,18.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1E1E1E").s().p("AAOAqIgKgSIgGgNIgEgDIgHgCIgDAAIAAAkIgOAAIAAhTIAeAAQAJgBAFADQAFACADAGQAEAFAAAJQAAAJgFAHQgFAEgJABQAFAEADAEQADAEAFAKIAIAQgAgQgFIALAAQAHAAADgBQADgBABgDQACgCAAgEQAAgEgCgDQgBgDgDAAQgCgBgIAAIgLAAg");
	this.shape_11.setTransform(46,-10.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1E1E1E").s().p("AgaAqIAAhTIAzAAIAAAOIgkAAIAAATIAiAAIAAAMIgiAAIAAAYIAlAAIAAAOg");
	this.shape_12.setTransform(39,-10.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1E1E1E").s().p("AgGAqIAAhFIgVAAIAAgOIA2AAIAAAOIgVAAIAABFg");
	this.shape_13.setTransform(32.6,-10.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1E1E1E").s().p("AgbAOIAOgBQACAQALAAQAHAAADgDQAEgDAAgFIgBgGIgEgCIgLgFQgJgDgEgCQgFgCgCgFQgDgGAAgGQAAgHAEgGQADgFAFgDQAGgDAHAAQAMAAAHAHQAHAGAAANIgOABQgBgHgDgDQgDgDgFAAQgFAAgDADQgDADAAADQAAAEADACQADACAIADQAKADAFADQAFADADAEQACAGAAAIQAAAKgHAJQgHAHgOAAQgYAAgDgeg");
	this.shape_14.setTransform(26.3,-10.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1E1E1E").s().p("AAUAqIgHgTIgaAAIgGATIgPAAIAchTIANAAIAcBTgAgIAJIARAAIgJgfg");
	this.shape_15.setTransform(19.5,-10.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1E1E1E").s().p("AAUAqIAAhBIgOBBIgLAAIgPhBIAABBIgMAAIAAhTIAUAAIAMA4IAMg4IAVAAIAABTg");
	this.shape_16.setTransform(11.9,-10.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1E1E1E").s().p("AANAqIgag2IAAA2IgNAAIAAhTIANAAIAbA3IAAg3IANAAIAABTg");
	this.shape_17.setTransform(47.3,4.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1E1E1E").s().p("AgWAhQgKgMAAgVQgBgNAFgKQAFgKAGgFQAIgFAJAAQAPAAAJAMQAJALAAAUQABAVgLAMQgIALgPAAQgOAAgIgLgAgMgVQgGAHAAAOQAAAPAGAHQAFAHAHAAQAIAAAFgHQAGgIAAgOQAAgOgGgHQgFgHgIAAQgHAAgFAHg");
	this.shape_18.setTransform(40,4.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1E1E1E").s().p("AgGAqIAAhTIANAAIAABTg");
	this.shape_19.setTransform(34.8,4.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1E1E1E").s().p("AgGAqIAAhFIgUAAIAAgOIA2AAIAAAOIgVAAIAABFg");
	this.shape_20.setTransform(30.4,4.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1E1E1E").s().p("AgOAnQgHgEgCgHQgEgHAAgTIAAgsIAPAAIAAAsIAAAOQABAGAEADQAEADADAAQAFAAADgCQADgCACgEQAAgEAAgNIAAgtIAPAAIAAArQAAARgCAIQgCAIgHAEQgGAFgKAAQgKAAgFgEg");
	this.shape_21.setTransform(23.8,4.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1E1E1E").s().p("AAUAqIgHgTIgaAAIgGATIgPAAIAchTIANAAIAcBTgAgIAJIARAAIgJgfg");
	this.shape_22.setTransform(16.7,4.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1E1E1E").s().p("AgTAhQgKgMAAgUQAAgVAKgMQAIgLANAAQAMAAAIAIQAGAGACALIgOAFQgBgIgEgDQgEgEgGAAQgGAAgEAHQgFAGAAAPQAAAQAEAGQAFAHAGAAQAFAAAFgEQAEgEACgKIANAFQgDAOgHAIQgIAGgLAAQgMAAgIgLg");
	this.shape_23.setTransform(9.6,4.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.MASTERWARNL_pbbase02("synched",0);
	this.instance.setTransform(24.3,0.7,1,1,0,0,0,24.3,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.3,-23.6,55.2,53.9);


(lib.MASTERWARNL_firewarn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D9D9D9").s().p("AgCAYIAAgnIgNAAIAAgIIAfAAIAAAIIgMAAIAAAng");
	this.shape.setTransform(47.1,18.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D9D9D9").s().p("AgIAWQgDgCgCgEQgCgEAAgMIAAgYIAJAAIAAAZIAAAJQAAACACADQADABABAAIAEgBQABAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBIAAgKIAAgZIAJAAIAAAYIgBAPQgCAEgDADQgEADgGAAQgEAAgEgDg");
	this.shape_1.setTransform(43.3,18.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D9D9D9").s().p("AgMATQgHgHAAgMQABgHACgGQADgGAEgCQAFgDAEgBQAIABAGAGQAGAHAAALQgBAMgFAHQgFAGgJAAQgHAAgFgGgAgHgLQgDAEAAAHQAAAIADAFQAEADADAAQAFAAACgDQAEgFAAgIQAAgIgEgDQgCgFgFAAQgEAAgDAFg");
	this.shape_2.setTransform(39,18.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D9D9D9").s().p("AgCAYIAAgnIgNAAIAAgIIAfAAIAAAIIgNAAIAAAng");
	this.shape_3.setTransform(35.1,18.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D9D9D9").s().p("AgIAWQgEgCgBgEQgCgEAAgMIAAgYIAIAAIAAAZIAAAJQABACADADQACABABAAIAFgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBIAAgKIAAgZIAJAAIAAAYIgBAPQgCAEgDADQgEADgGAAQgFAAgDgDg");
	this.shape_4.setTransform(31.3,18.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D9D9D9").s().p("AgKATQgHgHAAgMQAAgLAHgHQAEgHAHAAQAHABAFAEQADADABAHIgIACQAAgDgDgCQgCgDgEAAQgCAAgDAEQgCAEgBAIQABAIACAFQADADACAAQADABADgDQADgDAAgFIAIADQgBAIgFAFQgEADgHAAQgFAAgFgGg");
	this.shape_5.setTransform(27.1,18.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D9D9D9").s().p("AgNAYIAAgvIAIAAIAAAnIATAAIAAAIg");
	this.shape_6.setTransform(22,18.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D9D9D9").s().p("AgNAYIAAgvIAIAAIAAAnIATAAIAAAIg");
	this.shape_7.setTransform(18.5,18.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D9D9D9").s().p("AgOAYIAAgvIAcAAIAAAIIgUAAIAAALIATAAIAAAHIgTAAIAAANIAVAAIAAAIg");
	this.shape_8.setTransform(14.7,18.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D9D9D9").s().p("AgQAYIAAgvIAQAAIAIABQADABACADQACADAAAEQAAADgCAEQgBADgDABQAEAAACADQACADAAAEQAAAFgDAEQgCAEgEABIgKAAgAgHAQIAHAAIAFgBIACgBIABgFIgBgEIgDgCIgFAAIgGAAgAgHgDIAFAAIAEgBQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABAAIABgFIgBgDIgDgCIgGgBIgEAAg");
	this.shape_9.setTransform(10.7,18.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D9D9D9").s().p("AgaAqIAAhTIAzAAIAAAOIgkAAIAAATIAiAAIAAAMIgiAAIAAAYIAlAAIAAAOg");
	this.shape_10.setTransform(36.6,-10.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D9D9D9").s().p("AAOAqIgKgSIgGgNIgEgDIgHgCIgDAAIAAAkIgOAAIAAhTIAeAAQAJgBAFADQAFACADAGQAEAFAAAJQAAAJgFAHQgFAEgJABQAFAEADAEQADAEAFAKIAIAQgAgQgFIALAAQAHAAADgBQADgBABgDQACgCAAgEQAAgEgCgDQgBgDgDAAQgCgBgIAAIgLAAg");
	this.shape_11.setTransform(29.9,-10.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D9D9D9").s().p("AgGAqIAAhTIANAAIAABTg");
	this.shape_12.setTransform(24.7,-10.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D9D9D9").s().p("AgWAqIAAhTIAuAAIAAAOIghAAIAAAVIAcAAIAAAMIgcAAIAAAkg");
	this.shape_13.setTransform(20.5,-10.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D9D9D9").s().p("AANAqIgag2IAAA2IgNAAIAAhTIANAAIAbA3IAAg3IANAAIAABTg");
	this.shape_14.setTransform(39.9,4.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D9D9D9").s().p("AAOAqIgKgSIgGgNIgEgEIgHgBIgDAAIAAAkIgOAAIAAhTIAeAAQAJgBAFADQAFACADAGQAEAGAAAHQAAAKgFAHQgFAEgJABQAFAEADAEQADAEAFAJIAIARgAgQgFIALAAQAHAAADgBQADgBABgDQACgCAAgEQAAgEgCgDQgBgDgDAAQgCgBgIAAIgLAAg");
	this.shape_15.setTransform(33.2,4.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D9D9D9").s().p("AAUAqIgHgTIgaAAIgGATIgPAAIAchTIANAAIAcBTgAgIAJIARAAIgJgfg");
	this.shape_16.setTransform(25.7,4.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D9D9D9").s().p("AANAqIgNg+IgNA+IgPAAIgRhTIAPAAIAKA4IANg4IAPAAIAMA5IALg5IAPAAIgSBTg");
	this.shape_17.setTransform(18.1,4.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.MASTERWARNL_pbbase01("synched",0);
	this.instance.setTransform(24.3,0.7,1,1,0,0,0,24.3,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.3,-23.6,55.2,53.9);


(lib.REFIS_tfc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQAUQgFgIAAgMQAAgKAFgJQACgFAGgDQAGgDADAAQAKAAAFAEIADAEIABABQABAEgDABQgDACgDgCQgEgGgGAAQgHABgEAIQgDAFAAAIQAAAKACAEQAGAJAGAAQAEAAADgCQADgCABgEIACgCIAEAAIACACIAAAEQgCAFgEADQgEAEgKAAQgKAAgHgLg");
	this.shape.setTransform(18.1,12.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTAcIAAg6IAjAAQAEAAAAAEQAAAEgEAAIgaAAIAAAOIAUAAQAEAAAAAEQAAABAAABQgBABAAAAQAAAAgBABQAAAAgBAAIgVAAIAAAcQAAADgFAAQgEAAAAgDg");
	this.shape_1.setTransform(12.7,12.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgCAcIAAgyIgOAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAIgBgDQAAgDAEgBIAhAAQAEABAAADQAAAEgDAAIgOAAIAAAyIgBACIgDABQgCAAAAgDg");
	this.shape_2.setTransform(7.3,12.4);

	this.instance = new lib.GEN_knobcenter01("synched",0);
	this.instance.setTransform(12.8,12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-2.2,29.9,29.9);


(lib.REFIS_std = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVAfIAAg9IASAAQALAAAIAKQAHAJgBALQAAAMgGAJQgIAKgKAAgAgMAWIAJAAQAHAAAFgHQAEgGAAgJQAAgIgFgHQgFgHgGAAIgJAAg");
	this.shape.setTransform(18,12.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCAcIAAgyIgOAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAIgBgDQAAgDAEgBIAhAAQAEABAAADQAAAEgDAAIgOAAIAAAyQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAAAAAIgDABQgCAAAAgDg");
	this.shape_1.setTransform(12.7,12.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRAYIgDgHQgBgEAEgBIACAAIADACQAAAEAEADIAHACQAEABADgCQAGgCAAgEQABgFgDgCQgCgEgIgEIgHgBIgGgBQgEgDgBgEQgCgEABgFQACgHAGgEQADgCAFAAIAIAAQAEAAADAFQAEADAAADIABAEIgDACIgDAAIgCgCQgBgFgGgCQgEgBgDABQgGADAAAEQAAAHAHABQAVAHADAIIABAFIgBAFQgBAHgIAEQgEACgHAAQgNAAgEgHg");
	this.shape_2.setTransform(7.6,12.4);

	this.instance = new lib.GEN_knobcenter01("synched",0);
	this.instance.setTransform(12.8,12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-2.2,29.9,29.9);


(lib.REFIS_rst = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCAcIAAgyIgOAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAIgBgDQAAgDAEgBIAhAAQAEABAAADQAAAEgDAAIgOAAIAAAyIgBACIgDABQgCAAAAgDg");
	this.shape.setTransform(17.9,12.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRAYIgDgHQgBgEAEgBIACAAIADACQAAAEAEADIAHACQAEABADgCQAGgCAAgEQABgFgDgCQgCgEgIgEIgHgBIgGgBQgEgDgBgEQgCgEABgFQACgHAGgEQADgCAFAAIAIAAQAEAAADAFQAEADAAADIABAEIgDACIgDAAIgCgCQgBgFgGgCQgEgBgDABQgGADAAAEQAAAHAHABQAVAHADAIIABAFIgBAFQgBAHgIAEQgEACgHAAQgNAAgEgHg");
	this.shape_1.setTransform(12.8,12.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTAbIAAg5IASAAQAHAAAFACQAGAEAAALQAAAEgCADQgCAGgKABIAQAYQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAIgCACQgEACgBgDIgRgcIgFAAIAAAaIgBADIgEABQgEAAAAgEgAgKgFIAKAAQAEAAADgDQACgCAAgEQAAgIgJAAIgKAAg");
	this.shape_2.setTransform(7.6,12.4);

	this.instance = new lib.GEN_knobcenter01("synched",0);
	this.instance.setTransform(12.8,12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-2.2,29.9,29.9);


(lib.REFIS_ctr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAbIAAg5IASAAQAHAAAFACQAGAEAAALQAAAEgCADQgCAGgKABIAQAYQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAIgCACQgEACgBgDIgRgcIgFAAIAAAaIgBADIgEABQgEAAAAgEgAgKgFIAKAAQAEAAADgDQACgCAAgEQAAgIgJAAIgKAAg");
	this.shape.setTransform(18.1,12.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCAcIAAgyIgOAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAIgBgDQAAgDAEgBIAhAAQAEABAAADQAAAEgDAAIgOAAIAAAyIgBACIgDABQgCAAAAgDg");
	this.shape_1.setTransform(13,12.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQAUQgFgIAAgMQAAgKAFgJQACgFAGgDQAGgDADAAQAKAAAFAEIADAEIABABQABAEgDABQgDACgDgCQgEgGgGAAQgHABgEAIQgDAFAAAIQAAAKACAEQAGAJAGAAQAEAAADgCQADgCABgEIACgCIAEAAIACACIAAAEQgCAFgEADQgEAEgKAAQgKAAgHgLg");
	this.shape_2.setTransform(7.7,12.4);

	this.instance = new lib.GEN_knobcenter01("synched",0);
	this.instance.setTransform(12.8,12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-2.2,29.9,29.9);


(lib.LEFIS_wxr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSAcIAAg6IARAAQAHAAAEACQAHAEAAALQAAADgCAEQgCAGgLAAIARAZIAAADIgCACQgBAAAAABQgBAAAAAAQgBAAAAgBQgBAAAAAAIgRgeIgHAAIAAAcIgBADIgDAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBgAgLgEIALAAQAEAAADgEQADgBAAgFQABgJgLAAIgLAAg");
	this.shape.setTransform(6,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AANAeIgNgXIgLAXQgBAAAAABQgBAAgBAAQAAAAgBAAQAAgBgBAAQgBAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAgBIAQgaIgQgZQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABgBIADgBIABABIAMAYIANgYIABgBIADABQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABIgPAZIAPAaIAAABQAAAAAAABQAAAAAAAAQgBABAAAAQgBABAAAAIgDABIgBgBg");
	this.shape_1.setTransform(1.4,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAMAfIgCgCIgKgpIgLApQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAIgQg3QgBgBAAAAQAAgBABAAQAAgBAAAAQABAAABgBQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABIAOAuIAMgqQAAgBAAgBQAAAAABgBQAAAAABAAQAAgBAAAAQAAAAABABQAAAAABAAQAAABAAAAQABABAAABIALAqIAOguIACgCIACAAQABABABAAQABAAAAABQABAAAAABQAAAAgBABIgSA3QAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAIgCAAg");
	this.shape_2.setTransform(-4.5,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Base
	this.instance = new lib.GEN_pbbase05("synched",0);
	this.instance.setTransform(13.5,1.9,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.9,-10.8,21.9,21.6);


(lib.LEFIS_wpt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCAdIAAg0IgPAAIgCgBIgBgDQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAIAjAAQAAAAABABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQgBAAAAAAIgPAAIAAA0IgBACIgCAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBAAAAg");
	this.shape.setTransform(5.8,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRAcIAAg6IARAAQAIAAAEACQAGAEAAALQAAADgCAEQgBAEgEACQgEAAgGAAIgLAAIAAAcIgBADIgCAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBgAgKgEIAKAAQAGAAADgEQADgBAAgFQAAgJgLAAIgLAAg");
	this.shape_1.setTransform(1.4,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAMAfIgCgCIgKgpIgLApQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAIgQg3QgBgBAAAAQAAgBABAAQAAgBAAAAQABAAABgBQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABIAOAuIAMgqQAAgBAAgBQAAAAABgBQAAAAABAAQAAgBAAAAQAAAAABABQAAAAABAAQAAABAAAAQABABAAABIALAqIAOguIACgCIACAAQABABABAAQABAAAAABQABAAAAABQAAAAgBABIgSA3QAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAIgCAAg");
	this.shape_2.setTransform(-4.5,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Base
	this.instance = new lib.GEN_pbbase05("synched",0);
	this.instance.setTransform(13.5,1.9,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.9,-10.8,21.9,21.6);


(lib.LEFIS_vsd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVAfIAAg9IASAAQALAAAHAKQAHAIAAAMQAAAMgHAJQgHAKgKAAgAgOAXIALAAQAIAAAFgHQAEgHAAgJQAAgIgFgHQgFgIgHAAIgLAAg");
	this.shape.setTransform(5.1,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRAYIgCgHQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAIACAAIABABQABAFAEADIAIACQAFABADgCQAGgBAAgGQABgFgDgDQgCgDgJgEIgHgCIgGgCQgEgCgBgDQgBgEAAgFQACgIAGgDQAEgCAEAAIAIAAQAEABADAEQADADABADQAAAAAAABQAAAAABABQAAAAAAABQgBAAAAABIgCABIgCAAIgCgCQgBgFgGgCQgFgCgEACQgGADAAAFQAAAHAIACQAUAGAEAIIAAAFIAAAGQgBAFgIAFQgEABgHABQgMgBgFgGg");
	this.shape_1.setTransform(0.3,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAAfIgBAAIgBgCIgXg3QAAgBAAAAQAAgBAAAAQABgBAAAAQABgBABAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABIASAwIASgwQABgBAAAAQABgBAAAAQABAAAAAAQABAAABAAQABAAAAABQABAAABABQAAAAAAABQAAAAAAABIgXA3QAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIAAAAg");
	this.shape_2.setTransform(-4.7,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.GEN_pbbase05("synched",0);
	this.instance.setTransform(13.5,1.9,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.9,-10.8,21.9,21.6);


(lib.LEFIS_tfc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQAUQgFgIAAgMQAAgKAFgJQACgFAGgDQAGgDADAAQAKAAAFAEIADAEIABABQABAEgDABQgDACgDgCQgEgGgGAAQgHABgEAIQgDAFAAAIQAAAKACAEQAGAJAGAAQAEAAADgCQADgCABgEIACgCIAEAAIACACIAAAEQgCAFgEADQgEAEgKAAQgKAAgHgLg");
	this.shape.setTransform(18.1,12.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTAcIAAg6IAjAAQAEAAAAAEQAAAEgEAAIgaAAIAAAOIAUAAQAEAAAAAEQAAABAAABQgBABAAAAQAAAAgBABQAAAAgBAAIgVAAIAAAcQAAADgFAAQgEAAAAgDg");
	this.shape_1.setTransform(12.7,12.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgCAcIAAgyIgOAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAIgBgDQAAgDAEgBIAhAAQAEABAAADQAAAEgDAAIgOAAIAAAyIgBACIgDABQgCAAAAgDg");
	this.shape_2.setTransform(7.3,12.4);

	this.instance = new lib.GEN_knobcenter01("synched",0);
	this.instance.setTransform(12.8,12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1 copy
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#D7DBDB","#C5CAC9"],[0,1],5.1,5.6,-5.6,-4.6).s().p("AhoBpQgsgsAAg9QAAg8AsgsQAsgsA8AAQA9AAAsAsQAsAsAAA8QAAA9gsAsQgsAsg9AAQg8AAgsgsgAhihiQgqApAAA5QAAA5AqAqQApAqA5AAQA5AAAqgqQAqgqAAg5QAAg5gqgpQgqgqg5AAQg5AAgpAqg");
	this.shape_3.setTransform(12.8,12.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#232323").s().p("AhgBhQgpgpAAg4QAAg4ApgoQAogpA4AAQA4AAApApQAoAoAAA4QAAA4goApQgpAog4AAQg4AAgogog");
	this.shape_4.setTransform(12.8,12.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#222222").s().p("AhiBjQgqgqAAg5QAAg5AqgpQApgqA5AAQA5AAAqAqQAqApAAA5QAAA5gqAqQgqAqg5AAQg5AAgpgqgAhghgQgpAoAAA4QAAA4ApApQAoAoA4AAQA4AAApgoQAogpAAg4QAAg4gogoQgpgpg4AAQg4AAgoApg");
	this.shape_5.setTransform(12.8,12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-2.2,29.9,29.9);


(lib.LEFIS_terr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSAcIAAg6IARAAQAHAAAEACQAHAEAAALQAAADgCAEQgCAGgLAAIARAZIAAADIgCACQgBAAAAABQgBAAAAAAQgBAAAAgBQgBAAAAAAIgRgeIgHAAIAAAcIgBADIgDAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBgAgLgEIALAAQAEAAADgEQADgBAAgFQABgJgLAAIgLAAg");
	this.shape.setTransform(7.2,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSAcIAAg6IARAAQAHAAAEACQAHAEAAALQAAADgCAEQgCAGgLAAIARAZIAAADIgCACQgBAAAAABQgBAAAAAAQgBAAAAgBQgBAAAAAAIgRgeIgHAAIAAAcIgBADIgDAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBgAgLgEIALAAQAEAAADgEQADgBAAgFQABgJgLAAIgLAAg");
	this.shape_1.setTransform(2.6,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTAfIAAg9IAkAAQAAAAABAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQgBABAAAAQAAABgBAAQgBAAAAAAIgcAAIAAAPIAXAAIABACIABACIgBACIgBABIgXAAIAAAYIAcAAQADABAAAEQAAAAAAABQgBABAAAAQAAABgBAAQgBAAAAAAg");
	this.shape_2.setTransform(-2.2,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgCAdIAAg0IgPAAIgCgBIgBgDQAAAAAAgBQABAAAAgBQAAAAABAAQABgBAAAAIAjAAQAAAAABABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQgBAAAAAAIgPAAIAAA0IgBACIgCAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBAAAAg");
	this.shape_3.setTransform(-7.1,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Base
	this.instance = new lib.GEN_pbbase05("synched",0);
	this.instance.setTransform(13.5,1.9,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-10.8,23.1,21.6);


(lib.LEFIS_std = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVAfIAAg9IASAAQALAAAIAKQAHAJgBALQAAAMgGAJQgIAKgKAAgAgMAWIAJAAQAHAAAFgHQAEgGAAgJQAAgIgFgHQgFgHgGAAIgJAAg");
	this.shape.setTransform(18,12.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCAcIAAgyIgOAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAIgBgDQAAgDAEgBIAhAAQAEABAAADQAAAEgDAAIgOAAIAAAyQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAAAAAIgDABQgCAAAAgDg");
	this.shape_1.setTransform(12.7,12.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRAYIgDgHQgBgEAEgBIACAAIADACQAAAEAEADIAHACQAEABADgCQAGgCAAgEQABgFgDgCQgCgEgIgEIgHgBIgGgBQgEgDgBgEQgCgEABgFQACgHAGgEQADgCAFAAIAIAAQAEAAADAFQAEADAAADIABAEIgDACIgDAAIgCgCQgBgFgGgCQgEgBgDABQgGADAAAEQAAAHAHABQAVAHADAIIABAFIgBAFQgBAHgIAEQgEACgHAAQgNAAgEgHg");
	this.shape_2.setTransform(7.6,12.4);

	this.instance = new lib.GEN_knobcenter01("synched",0);
	this.instance.setTransform(12.8,12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance_1 = new lib.GEN_knobcenter01("synched",0);
	this.instance_1.setTransform(12.8,12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-2.2,29.9,29.9);


(lib.LEFIS_sta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAPAcIgCgHIgZAAIgDAHQAAADgEAAIgDgBIAAgCIAVg4QAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAIATA4QAAABAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBgBgBgAALAOIgLgfIgJAeIAAABIAUAAg");
	this.shape.setTransform(4.8,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCAdIAAg0IgPAAIgCgBIgBgDQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAIAjAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBAAIgPAAIAAA0IgBACIgCAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBAAAAg");
	this.shape_1.setTransform(-0.1,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRAYIgCgHQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAIACAAIABABQABAFAEADIAIACQAFABADgCQAGgBAAgGQABgFgDgDQgCgDgJgEIgHgCIgGgCQgEgCgBgDQgBgEAAgFQACgIAGgDQAEgCAEAAIAIAAQAEABADAEQADADABADQAAAAAAABQAAAAABABQAAAAAAABQgBAAAAABIgCABIgCAAIgCgCQgBgFgGgCQgFgCgEACQgGADAAAFQAAAHAIACQAUAGAEAIIAAAFIAAAGQgBAFgIAFQgEABgHABQgMgBgFgGg");
	this.shape_2.setTransform(-4.7,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Base
	this.instance = new lib.GEN_pbbase05("synched",0);
	this.instance.setTransform(13.5,1.9,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.9,-10.8,21.9,21.6);


(lib.LEFIS_rst = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCAcIAAgyIgOAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAIgBgDQAAgDAEgBIAhAAQAEABAAADQAAAEgDAAIgOAAIAAAyIgBACIgDABQgCAAAAgDg");
	this.shape.setTransform(17.9,12.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRAYIgDgHQgBgEAEgBIACAAIADACQAAAEAEADIAHACQAEABADgCQAGgCAAgEQABgFgDgCQgCgEgIgEIgHgBIgGgBQgEgDgBgEQgCgEABgFQACgHAGgEQADgCAFAAIAIAAQAEAAADAFQAEADAAADIABAEIgDACIgDAAIgCgCQgBgFgGgCQgEgBgDABQgGADAAAEQAAAHAHABQAVAHADAIIABAFIgBAFQgBAHgIAEQgEACgHAAQgNAAgEgHg");
	this.shape_1.setTransform(12.8,12.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTAbIAAg5IASAAQAHAAAFACQAGAEAAALQAAAEgCADQgCAGgKABIAQAYQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAIgCACQgEACgBgDIgRgcIgFAAIAAAaIgBADIgEABQgEAAAAgEgAgKgFIAKAAQAEAAADgDQACgCAAgEQAAgIgJAAIgKAAg");
	this.shape_2.setTransform(7.6,12.4);

	this.instance = new lib.GEN_knobcenter01("synched",0);
	this.instance.setTransform(12.8,12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1 fill
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#404040","#151515"],[0,1],8.6,7.8,0,8.6,7.8,22).s().p("AhoBpQgsgsAAg9QAAg8AsgsQAsgsA8AAQA9AAAsAsQAsAsAAA8QAAA9gsAsQgsAsg9AAQg8AAgsgsg");
	this.shape_3.setTransform(12.8,12.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-2.2,29.9,29.9);


(lib.LEFIS_pos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRAYIgCgHQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAIACAAIABABQABAFAEADIAIACQAFABADgCQAGgBAAgGQABgFgDgDQgCgDgJgEIgHgCIgGgCQgEgCgBgDQgBgEAAgFQACgIAGgDQAEgCAEAAIAIAAQAEABADAEQADADABADQAAAAAAABQAAAAABABQAAAAAAABQAAAAgBABIgCABIgCAAIgCgCQgBgFgGgCQgFgCgEACQgGADAAAFQAAAHAIACQAUAGAEAIIAAAFIAAAGQgBAFgIAFQgEABgHABQgMgBgFgGg");
	this.shape.setTransform(4.7,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQATQgEgHAAgMQAAgLAEgIQAGgLAKAAQAMAAAFALQAEAJAAAKQAAALgEAIQgGAMgLAAQgKAAgGgMgAgKgOQgDAHAAAHQAAAIADAHQAEAJAGAAQAIAAADgJQACgGAAgJQAAgIgCgGQgDgJgIAAQgHAAgDAJg");
	this.shape_1.setTransform(-0.1,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRAcIAAg6IARAAQAIAAAEACQAGAEAAALQAAADgCAEQgBAEgEACQgEAAgGAAIgLAAIAAAcIgBADIgCAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBgAgKgEIAKAAQAGAAADgEQADgBAAgFQAAgJgLAAIgLAAg");
	this.shape_2.setTransform(-4.7,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Base
	this.instance = new lib.GEN_pbbase05("synched",0);
	this.instance.setTransform(13.5,1.9,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.9,-10.8,21.9,21.6);


(lib.LEFIS_data = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAPAcIgCgHIgZAAIgDAHQAAADgEAAIgDgBIAAgCIAVg4QABAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAIATA4QAAABAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBgBgBgAALAOIgLgfIgJAeIAAABIAUAAg");
	this.shape.setTransform(7.3,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCAdIAAg0IgPAAIgCgBIgBgDQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAIAjAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBAAIgPAAIAAA0IgBACIgCAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBAAAAg");
	this.shape_1.setTransform(2.5,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAPAcIgCgHIgZAAIgDAHQAAADgEAAIgDgBIAAgCIAVg4QABAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAIATA4QAAABAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBgBgBgAALAOIgLgfIgJAeIAAABIAUAAg");
	this.shape_2.setTransform(-2.1,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVAfIAAg9IASAAQALAAAHAKQAHAIAAAMQAAAMgHAJQgHAKgKAAgAgOAXIALAAQAIAAAFgHQAEgHAAgJQAAgIgFgHQgFgIgHAAIgLAAg");
	this.shape_3.setTransform(-7,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Base
	this.instance = new lib.GEN_pbbase05("synched",0);
	this.instance.setTransform(13.5,1.9,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.6,-10.8,23.3,21.6);


(lib.LEFIS_ctr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAbIAAg5IASAAQAHAAAFACQAGAEAAALQAAAEgCADQgCAGgKABIAQAYQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAIgCACQgEACgBgDIgRgcIgFAAIAAAaIgBADIgEABQgEAAAAgEgAgKgFIAKAAQAEAAADgDQACgCAAgEQAAgIgJAAIgKAAg");
	this.shape.setTransform(18.1,12.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCAcIAAgyIgOAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAIgBgDQAAgDAEgBIAhAAQAEABAAADQAAAEgDAAIgOAAIAAAyIgBACIgDABQgCAAAAgDg");
	this.shape_1.setTransform(13,12.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQAUQgFgIAAgMQAAgKAFgJQACgFAGgDQAGgDADAAQAKAAAFAEIADAEIABABQABAEgDABQgDACgDgCQgEgGgGAAQgHABgEAIQgDAFAAAIQAAAKACAEQAGAJAGAAQAEAAADgCQADgCABgEIACgCIAEAAIACACIAAAEQgCAFgEADQgEAEgKAAQgKAAgHgLg");
	this.shape_2.setTransform(7.7,12.4);

	this.instance = new lib.GEN_knobcenter01("synched",0);
	this.instance.setTransform(12.8,12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1 copy
	this.instance_1 = new lib.GEN_knobcenter01("synched",0);
	this.instance_1.setTransform(12.8,12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-2.2,29.9,29.9);


(lib.LEFIS_arpt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCAdIAAg0IgPAAIgCgBIgBgDQAAAAAAgBQABAAAAgBQAAAAABAAQABgBAAAAIAjAAQAAAAABABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQgBAAAAAAIgPAAIAAA0IgBACIgCAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBAAAAg");
	this.shape.setTransform(6.9,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRAcIAAg6IARAAQAIAAAEACQAGAEAAALQAAADgCAEQgBAEgEACQgEAAgGAAIgLAAIAAAcIgBADIgCAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBgAgKgEIAKAAQAGAAADgEQADgBAAgFQAAgJgLAAIgLAAg");
	this.shape_1.setTransform(2.5,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSAcIAAg6IARAAQAHAAAEACQAHAEAAALQAAADgCAEQgCAGgLAAIARAZIAAADIgCACQgBAAAAABQgBAAAAAAQgBAAAAgBQgBAAAAAAIgRgeIgHAAIAAAcIgBADIgDAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBgAgLgEIALAAQAEAAADgEQADgBAAgFQABgJgLAAIgLAAg");
	this.shape_2.setTransform(-2,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAPAcIgCgHIgZAAIgDAHQAAADgEAAIgDgBIAAgCIAVg4QAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAIATA4QAAABAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBgBgBgAALAOIgLgfIgJAeIAAABIAUAAg");
	this.shape_3.setTransform(-6.7,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.GEN_pbbase05("synched",0);
	this.instance.setTransform(13.5,1.9,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.3,-10.8,22.7,21.6);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.point_1("synched",0);
	this.instance.setTransform(100,35.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLAuIAAgYIAXAAIAAAYgAgLgUIAAgZIAXAAIAAAZg");
	this.shape.setTransform(105,13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AARBAIAAgyQAAgOgBgCQgCgEgDgCQgEgDgFAAQgEAAgFAEQgFACgCAFQgDAFABAMIAAAvIgZAAIAAh/IAZAAIAAAwQAMgOAOgBQAIAAAIAEQAGADAEAFQAEAEAAAHQACAFAAALIAAA3g");
	this.shape_1.setTransform(96.6,11.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgeAjQgNgMAAgXQAAgVANgNQAMgNASAAQASAAAKAHQAKAHAEAQIgYAEQgBgHgEgEQgFgEgHAAQgHAAgFAHQgGAGAAAPQAAAPAGAGQAFAHAHAAQAIAAAEgEQAFgEABgKIAYAFQgDAQgLAJQgKAIgTAAQgSAAgMgNg");
	this.shape_2.setTransform(86.2,13.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgDA+QgEgDgDgDQgCgEgCgGIAAgRIAAgnIgMAAIAAgUIAMAAIAAgSIAXgPIAAAhIAQAAIAAAUIgQAAIAAAkIAAANIACADIAEABIAKgCIACATQgJAEgKAAQgHAAgEgCg");
	this.shape_3.setTransform(78,12.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgLBAIAAhcIAXAAIAABcgAgLgoIAAgXIAXAAIAAAXg");
	this.shape_4.setTransform(72.5,11.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAPAuIgPg6IgOA6IgZAAIgdhbIAYAAIARA7IAQg7IAWAAIAQA7IASg7IAYAAIgeBbg");
	this.shape_5.setTransform(63.1,13.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgkA3QgNgMgCgVIAZgDQADANAGAGQAIAGAKAAQAMAAAHgFQAGgGAAgHQAAgEgDgDQgDgEgHgCIgSgGQgVgFgJgFQgLgLgBgPQAAgKAHgJQAFgIALgFQAKgEAOAAQAXAAAMAKQAMALABASIgaABQgCgKgFgEQgGgFgJAAQgLAAgHAFQgDADAAAFQAAAEADAEQAGAEAQAEQATAFAJAFQAJAEAGAHQAFAIAAAMQAAALgGAKQgHAKgLAEQgLAFgRAAQgXAAgNgLg");
	this.shape_6.setTransform(49.9,11.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag1BAIAAh/IAwAAQAOAAAIADQAMADAIAIQAIAJAFAMQADAMAAARQAAAPgDAMQgFAOgJAJQgHAGgMAFQgIACgMAAgAgbAqIAUAAQAJAAAEgBQAHgBAEgEQAEgEADgJQACgIAAgPQAAgNgCgJQgDgHgFgFQgEgEgHgCQgFgBgPAAIgMAAg");
	this.shape_7.setTransform(32.7,11.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgkA3QgNgMgCgVIAZgDQADANAGAGQAIAGAJAAQANAAAGgFQAHgGAAgHQAAgEgDgDQgDgEgGgCIgTgGQgVgFgJgFQgMgLABgPQAAgKAFgJQAGgIAKgFQALgEAOAAQAXAAAMAKQAMALABASIgaABQgBgKgGgEQgFgFgKAAQgLAAgGAFQgEADAAAFQAAAEAEAEQAEAEASAEQASAFAKAFQAIAEAFAHQAGAIAAAMQAAALgHAKQgFAKgMAEQgLAFgRAAQgWAAgOgLg");
	this.shape_8.setTransform(19.9,11.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgNBAIguh/IAcAAIAfBdIAghdIAcAAIgvB/g");
	this.shape_9.setTransform(8,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,281.9,71.4);


(lib.RMICPanel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// switch
	this.instance = new lib.GEN_roundbutton05("synched",0);
	this.instance.setTransform(53.3,72.8,1.093,1.088,0,0,0,8.3,8.3);

	this.instance_1 = new lib.GEN_switchbase04a("synched",0);
	this.instance_1.setTransform(53.3,72.7,1.093,1.088,0,0,0,18.5,18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRAWQgGgJAAgNQAAgMAFgIQADgGAHgEQAGgDAEAAQAKAAAGAFIADADIABACQACAEgEACQgDACgDgDQgEgGgHAAQgIABgFAIQgDAGAAAJQAAALADAEQAFAKAIAAQAEAAAEgCQADgCABgEQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAIAEABIACACQAAAAABAAQAAABAAAAQAAABAAAAQgBABAAAAQgBAGgFADQgFAFgKAAQgMAAgHgMg");
	this.shape.setTransform(82.2,92.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCAhIgBgCIAAg8IABgEIACAAQAEAAAAAEIAAA8QAAAAAAABQAAAAAAABQgBAAAAAAQAAAAgBABIgCAAIgCgBg");
	this.shape_1.setTransform(78.3,92.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AARAhIgBgDIAAgrIgNAYQAAABgBABQAAAAAAAAQgBABgBAAQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBgBAAgBIgNgWIAAApIgBADIgDABQgEAAgBgEIAAg7QABgEADAAQAEgBACADIAOAfIAPgfQACgDAEABIADABIABADIAAA7QAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgDABIgEgBg");
	this.shape_2.setTransform(74.2,92.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance_2 = new lib.GEN_roundbutton05("synched",0);
	this.instance_2.setTransform(125,96.5,1.078,1.078,0,0,0,8.3,8.3);

	this.instance_3 = new lib.GEN_switchbase04a("synched",0);
	this.instance_3.setTransform(125,96.5,1.078,1.078,0,0,0,18.5,18.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTAhIgBgDIAAg8QABgCADAAQAEgBABADIAAAXIAWgZQADgCACADIACADQAAABAAAAQAAAAAAABQAAAAgBAAQAAABAAAAIgRASIAVAjQABACgDADQgDACgDgDIgSghIgGAEIAAAbQgBAEgEAAIgDgBg");
	this.shape_3.setTransform(136.1,68.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRAWQgFgJAAgNQAAgLAFgJQACgGAHgDQAGgEAEAAQAKAAAGAFIADAEIABABQACAFgEABQgEACgCgDQgEgGgHAAQgIABgFAJQgDAGAAAIQAAALADAEQAGAKAHAAQAEAAADgDQAEgCABgDQAAgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAIAEABQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAADQgCAGgFADQgEAFgKAAQgMAAgHgMg");
	this.shape_4.setTransform(130.3,68.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgRAVQgFgIAAgNQAAgMAFgJQAGgMALAAQANAAAGAMQAEAKAAALQAAAMgEAJQgGANgNAAQgLAAgGgNgAgKgPQgCAIgBAHQABAIACAHQAEAKAGAAQAIAAADgKQACgGAAgJQAAgJgCgGQgDgJgIAAQgGAAgEAJg");
	this.shape_5.setTransform(124.8,68.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgWAiIAAhAQABgDAEAAQAEAAABADIAAA2IAfAAQAEAAAAAFIgBADQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_6.setTransform(119.5,68.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRAWQgFgJAAgNQAAgLAFgJQACgGAHgDQAGgEAEAAQAKAAAGAFIADAEIABABQACAFgEABQgEACgCgDQgEgGgHAAQgIABgFAJQgDAGAAAIQAAALADAEQAGAKAHAAQAEAAADgDQAEgCABgDQAAgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAIAEABQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAADQgCAGgFADQgEAFgKAAQgMAAgHgMg");
	this.shape_7.setTransform(113.8,68.2);

	this.instance_4 = new lib.RMIC_base("synched",0);
	this.instance_4.setTransform(90.7,89.1,1.093,1.088,0,0,0,90.8,57.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// fill
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#657381").s().p("ABKILIAAAAIv7pcIAAAAQhCgvAdhcIAAgBIBpkjIABAAQAahBA+gaIABAAQA5gZBOAOIXIEYQBoATAoBFQArBKgwBsIgBABIjfHjIAAABQhjC6jAAMIgBAAIgmABQirAAiohhg");
	this.shape_8.setTransform(90.7,89.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.5,27.1,198.5,124.1);


(lib.LMICPanel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.instance = new lib.GEN_roundbutton05("synched",0);
	this.instance.setTransform(124.4,112.6,1.093,1.088,0,0,0,8.3,8.3);

	this.instance_1 = new lib.GEN_switchbase04a("synched",0);
	this.instance_1.setTransform(124.4,112.5,1.093,1.088,0,0,0,18.5,18.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRAWQgGgJAAgNQAAgMAFgJQADgFAHgEQAGgDAEAAQAKAAAGAFIADAEIABABQACAFgEABQgDABgDgCQgEgHgHABQgIAAgFAKQgDAGAAAIQAAAKADAFQAFAKAIAAQAEAAAEgDQADgCABgDQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAIAEAAIACACQAAABABAAQAAABAAAAQAAABAAABQgBAAAAABQgBAFgFAEQgFAEgKAAQgMAAgHgMg");
	this.shape.setTransform(113.3,133.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCAhIgBgCIAAg9IABgCIACgBQAEAAAAADIAAA9QAAAAAAABQAAAAAAABQgBAAAAAAQAAAAgBAAIgCABIgCgBg");
	this.shape_1.setTransform(109.4,133.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AARAhIgBgDIAAgrIgNAYQAAABgBABQAAAAAAAAQgBABgBAAQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBgBAAgBIgNgWIAAApIgBADIgDABQgEAAgBgEIAAg7QABgEADAAQAEgBACADIAOAfIAPgfQACgDAEABIADABIABADIAAA7QAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgDABIgEgBg");
	this.shape_2.setTransform(105.3,133.6);

	this.instance_2 = new lib.GEN_roundbutton05("synched",0);
	this.instance_2.setTransform(58.8,137.1,1.078,1.078,0,0,0,8.3,8.3);

	this.instance_3 = new lib.GEN_switchbase04a("synched",0);
	this.instance_3.setTransform(58.8,137.1,1.078,1.078,0,0,0,18.5,18.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTAhIgBgDIAAg8QABgCADAAQAEgBABADIAAAXIAWgZQADgCACADIACADQAAABAAAAQAAAAAAABQAAAAgBAAQAAABAAAAIgRASIAVAjQABACgDADQgDACgDgDIgSghIgGAEIAAAbQgBAEgEAAIgDgBg");
	this.shape_3.setTransform(70,108.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRAWQgFgJAAgNQAAgLAFgJQACgGAHgDQAGgEAEAAQAKAAAGAFIADAEIABABQACAFgEABQgEACgCgDQgEgGgHAAQgIABgFAJQgDAGAAAIQAAALADAEQAGAKAHAAQAEAAADgDQAEgCABgDQAAgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAIAEABQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAADQgCAGgFADQgEAFgKAAQgMAAgHgMg");
	this.shape_4.setTransform(64.1,108.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgRAVQgFgIAAgNQAAgMAFgIQAGgMALAAQANAAAGALQAEAKAAALQAAAMgEAJQgGAMgNAAQgLAAgGgMgAgKgOQgCAHgBAHQABAIACAHQAEAJAGAAQAIAAADgJQACgGAAgJQAAgJgCgFQgDgKgIAAQgGAAgEAKg");
	this.shape_5.setTransform(58.7,108.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgWAiIAAhAQABgDAEAAQAEAAABADIAAA2IAfAAQAEAAAAAFIgBADQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_6.setTransform(53.3,108.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRAWQgFgJAAgNQAAgLAFgJQACgGAHgDQAGgEAEAAQAKAAAGAFIADAEIABABQACAFgEABQgEACgCgDQgEgGgHAAQgIABgFAJQgDAGAAAIQAAALADAEQAGAKAHAAQAEAAADgDQAEgCABgDQAAgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAIAEABQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAADQgCAGgFADQgEAFgKAAQgMAAgHgMg");
	this.shape_7.setTransform(47.6,108.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance_3},{t:this.instance_2},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// base
	this.instance_4 = new lib.LMIC_base("synched",0);
	this.instance_4.setTransform(90.7,128.9,1.078,1.078,0,0,0,90.8,57.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// fill
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#657381").s().p("Am8JlIgBAAQi9gMhhi4IAAgBIjdnfIAAAAQgvhrAqhJQAnhFBmgTIW0kVQAagFAYAAQAugBAlAQIABAAQA9AaAaBBIABAAIBnEgIAAABQAdBchBAtIAAAAIvtJXIAAAAQimBgipAAIglgBg");
	this.shape_8.setTransform(90.7,128.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.2,67.4,195.8,123);


(lib.MCPPanel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Buttons & Symbols
	this.instance = new lib.GEN_roundbutton02copy("synched",0);
	this.instance.setTransform(309.8,267.2,0.684,0.684);
	this.instance.filters = [new cjs.ColorFilter(0.23, 0.23, 0.23, 1, 196.35, 196.35, 196.35, 0)];
	this.instance.cache(-15,-15,30,30);

	this.instance_1 = new lib.GEN_roundbutton02("synched",0);
	this.instance_1.setTransform(267.6,270.1,1.101,1.101);

	this.instance_2 = new lib.GEN_roundbutton02("synched",0);
	this.instance_2.setTransform(-62.7,270.1,1.101,1.101);

	this.instance_3 = new lib.MCP_n1("synched",0);
	this.instance_3.setTransform(-256.8,340.3,1.101,1.101);

	this.instance_4 = new lib.MCP_speed("synched",0);
	this.instance_4.setTransform(-201.7,340.3,1.101,1.101);

	this.instance_5 = new lib.MCP_hdgsel("synched",0);
	this.instance_5.setTransform(36.8,340.3,1.101,1.101);

	this.instance_6 = new lib.MCP_app("synched",0);
	this.instance_6.setTransform(116.5,340.3,1.101,1.101);

	this.instance_7 = new lib.MCP_vorloc("synched",0);
	this.instance_7.setTransform(116.5,282.7,1.101,1.101);

	this.instance_8 = new lib.MCP_lnav("synched",0);
	this.instance_8.setTransform(116.5,220.6,1.101,1.101);

	this.instance_9 = new lib.MCP_althld("synched",0);
	this.instance_9.setTransform(210.6,340.3,1.101,1.101);

	this.instance_10 = new lib.MCP_vs("synched",0);
	this.instance_10.setTransform(276.1,340.3,1.101,1.101);

	this.instance_11 = new lib.MCP_cwsa("synched",0);
	this.instance_11.setTransform(459.9,290.9,1.101,1.101);

	this.instance_12 = new lib.MCP_cwsb("synched",0);
	this.instance_12.setTransform(527.1,292,1.101,1.101);

	this.instance_13 = new lib.MCP_cmdaa("synched",0);
	this.instance_13.setTransform(459.9,235.8,1.101,1.101);

	this.instance_14 = new lib.MCP_cmdb("synched",0);
	this.instance_14.setTransform(527.1,235.8,1.101,1.101);

	this.instance_15 = new lib.MCP_disengage("synched",0);
	this.instance_15.setTransform(493.6,354.7,1.101,1.101);

	this.instance_16 = new lib.MCP_lvlchg("synched",0);
	this.instance_16.setTransform(-42.8,340.1,1.101,1.101);

	this.instance_17 = new lib.MCP_vnav("synched",0);
	this.instance_17.setTransform(-42.8,220.5,1.101,1.101);

	this.instance_18 = new lib.GEN_switch05up("synched",0);
	this.instance_18.setTransform(-238,243.8,1.101,1.101,0,0,0,6.6,0);

	this.instance_19 = new lib.GEN_switchbase10("synched",0);
	this.instance_19.setTransform(-238,244.4,1.101,1.101,0,0,0,18.5,18.5);

	this.instance_20 = new lib.MCP_atarmlight("synched",0);
	this.instance_20.setTransform(-238.4,219.8,1.101,1.101);

	this.instance_21 = new lib.MCP_Lma("synched",0);
	this.instance_21.setTransform(-312.3,270.3,1.101,1.101);

	this.instance_22 = new lib.MCP_iasmach("synched",0);
	this.instance_22.setTransform(-121.5,299,1.101,1.101);

	this.instance_23 = new lib.MCP_Rma("synched",0);
	this.instance_23.setTransform(599.1,270.3,1.101,1.101);

	this.instance_24 = new lib.MCP_vertspeed("synched",0);
	this.instance_24.setTransform(359,309.4,1.101,1.101);

	this.instance_25 = new lib.GEN_switch04up("synched",0);
	this.instance_25.setTransform(-312.2,334.7,1.101,1.101,0,0,0,6.6,0);

	this.instance_26 = new lib.GEN_switchbase05("synched",0);
	this.instance_26.setTransform(-312.5,334.5,1.101,1.101,0,0,0,18.5,18.5);

	this.instance_27 = new lib.GEN_switch04up("synched",0);
	this.instance_27.setTransform(598.8,334.7,1.101,1.101,0,0,0,6.6,0);

	this.instance_28 = new lib.GEN_switchbase05("synched",0);
	this.instance_28.setTransform(598.5,334.5,1.101,1.101,0,0,0,18.5,18.5);

	this.instance_29 = new lib.MCP_headingknob("synched",0);
	this.instance_29.setTransform(36.5,278.8,1.101,1.101,30);

	this.instance_30 = new lib.GEN_knob13("synched",0);
	this.instance_30.setTransform(210.7,278.8,1.101,1.101);

	this.instance_31 = new lib.MCP_courseknob("synched",0);
	this.instance_31.setTransform(-363.5,288.4,1.101,1.101);

	this.instance_32 = new lib.GEN_roundbutton02("synched",0);
	this.instance_32.setTransform(-180.1,270.1,1.101,1.101);

	this.instance_33 = new lib.MCP_courseknob("synched",0);
	this.instance_33.setTransform(648.3,288.4,1.101,1.101);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAqIgDgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIgdhJQgBgFAEgBQAGgCACAEIAXA/IAXg/QADgEAFABQAGACgCAEIgeBKQAAADgFAAIAAAAg");
	this.shape.setTransform(308.2,299.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEAmIAAhEIgTAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBIgBgDQAAgFAFgBIAvAAQAFABAAAFQAAAEgFABIgTAAIAABEIgBADIgEABQgEAAAAgEg");
	this.shape_1.setTransform(301,299.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbAnIAAhLQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAAAIAEgBQAFgBABAEIAfA7IAAg6QACgEAEAAQAGAAgBAEIAABLQAAAEgEAAQgDABgDgDIghg7IAAA6QAAACgFABQgFAAgBgDg");
	this.shape_2.setTransform(294.1,299.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgCApQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIAAhLQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAIACgBQAGAAAAAEIAABMQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABIgDAAIgCgBg");
	this.shape_3.setTransform(289,299.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEAmIAAhEIgTAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBIgBgDQAAgFAFgBIAvAAQAFABAAAFQAAAEgFABIgTAAIAABEIgBADIgEABQgEAAAAgEg");
	this.shape_4.setTransform(304.5,289.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcAqIAAhQQACgDAEAAQAFAAABADIAABEIAnAAQAFAAABAHIgBAEQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAg");
	this.shape_5.setTransform(298.1,289.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AATAmIgDgJIgfAAIgDAJQgBAFgHgBQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAchJQABgEACAAQAEAAACAEIAYBLQAAAEgGAAIgBAAQgDAAgCgEgAgLASIAAAAIAYAAIgMgnIgMAnIAAAAg");
	this.shape_6.setTransform(291.1,289.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAAAqIgDgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIgdhJQgBgFAEgBQAGgCACAEIAXA/IAXg/QADgEAFABQAGACgCAEIgeBKQAAADgFAAIAAAAg");
	this.shape_7.setTransform(-23.3,299.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgEAmIAAhEIgTAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBIgBgDQAAgFAFgBIAvAAQAFABAAAFQAAAEgFABIgTAAIAABEIgBADIgEABQgEAAAAgEg");
	this.shape_8.setTransform(-30.4,299.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgbAnIAAhLQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAIADgBQAEgBACAEIAfA7IAAg6QABgEAFAAQAGAAAAAEIAABLQgBAEgFAAQgCABgDgDIggg7IAAA6QgCACgEABQgGAAAAgDg");
	this.shape_9.setTransform(-37.4,299.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgCApQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAhLQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAIACgBQAGAAgBAEIAABMQAAAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABIgDAAIgCgBg");
	this.shape_10.setTransform(-42.4,299.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgdAqIAAhTIAYAAQARAAAJANQAKAMgBAQQAAAQgJANQgJANgPAAgAgRAeIANAAQAKAAAGgKQAGgIAAgMQAAgLgHgJQgGgKgJAAIgNAAg");
	this.shape_11.setTransform(-27.6,289.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgSAqQgGgBAAgEIAAhOIAYAAQALAAAFADQAJAFAAAOQAAAGgCAEQgCAHgFACQgGACgJAAIgOAAIAAAjQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgBAAgAgNgIIANAAQAIAAADgDQADgCAAgGQABgLgNAAIgPAAg");
	this.shape_12.setTransform(-34.2,289.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgXAgIgEgJQgBgFAEgCIAEAAIADADQABAGAEADIAKADQAHABAEgCQAHgCABgGQAAgHgDgDQgCgFgMgFIgKgCIgIgCQgFgEgCgFQgCgFABgHQACgKAIgFQAGgDAGAAIALABQAFAAAFAGQAFAEAAAEQACACgBADQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIgEAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQgCgGgIgDQgGgCgFACQgHAEAAAGQAAAIAJACQAdAKAFALIABAHIgBAHQgCAIgKAGQgGACgKABQgRgBgGgJg");
	this.shape_13.setTransform(-40.5,289.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAlBNIAAg6IANgNIAIAIIAABVgAAlgPIAAg5IAVgWIAABVIgIAJgAgkhNIgWgVIBwAAIgWAVg");
	this.shape_14.setTransform(648.1,224.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag4BlIAWgWIBEAAIAWAWgAAnBLIAAg6IANgNIAIAIIAABVgAglAKIgKgKIAKgKIBLAAIALAKIgLAKgAg7gLIAAhVIAVAWIAAA5IgNAPgAgihPIgWgVIBwAAIgWAVg");
	this.shape_15.setTransform(630.4,224.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag4BlIAWgWIBEAAIAWAWgAAnBLIAAg6IANgNIAIAIIAABVgAg7AMIAIgIIANANIAAA6IgVAWgAAngRIAAg5IAVgWIAABVIgIAJgAg7gLIAAhVIAVAWIAAA5IgNAPgAgihPIgWgVIBwAAIgWAVg");
	this.shape_16.setTransform(613,224.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag3BlIAVgWIBFAAIAVAWgAAnBLIAAg6IAOgNIAIAIIAABVgAg8AMIAJgIIAOANIAAA6IgXAWgAAngRIAAg5IAWgWIAABVIgIAJgAg8gLIAAhVIAXAWIAAA5IgOAPgAgihPIgVgVIBvAAIgVAVg");
	this.shape_17.setTransform(399.5,224.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag3BlIAVgWIBFAAIAVAWgAAnBLIAAg6IAOgNIAIAIIAABVgAg8AMIAJgIIAOANIAAA6IgXAWgAAngRIAAg5IAWgWIAABVIgIAJgAg8gLIAAhVIAXAWIAAA5IgOAPgAgihPIgVgVIBvAAIgVAVg");
	this.shape_18.setTransform(382.1,224.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag3BlIAVgWIBFAAIAVAWgAAnBLIAAg6IANgNIAJAIIAABVgAg8AMIAJgIIAOANIAAA6IgXAWgAAngRIAAg5IAWgWIAABVIgJAJgAg8gLIAAhVIAXAWIAAA5IgOAPgAgihPIgVgVIBvAAIgVAVg");
	this.shape_19.setTransform(364.6,224.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag3BlIAVgWIBEAAIAWAWgAAnBLIAAg6IANgNIAJAIIAABVgAg8AMIAJgIIAOANIAAA6IgXAWgAAngRIAAg5IAWgWIAABVIgJAJgAg8gLIAAhVIAXAWIAAA5IgOAPgAgihPIgVgVIBvAAIgWAVg");
	this.shape_20.setTransform(347.2,224.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag4BlIAWgWIBEAAIAWAWgAAnBLIAAg6IANgNIAIAIIAABVgAg7AMIAIgIIANANIAAA6IgVAWgAAngRIAAg5IAVgWIAABVIgIAJgAg7gLIAAhVIAVAWIAAA5IgNAPgAgihPIgWgVIBwAAIgWAVg");
	this.shape_21.setTransform(329.7,224.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag4BlIAWgWIBEAAIAWAWgAAnBLIAAg6IANgNIAIAIIAABVgAg7AMIAIgIIANANIAAA6IgVAWgAAngRIAAg5IAVgWIAABVIgIAJgAg7gLIAAhVIAVAWIAAA5IgNAPgAgihPIgWgVIBwAAIgWAVg");
	this.shape_22.setTransform(258.3,224.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag4BlIAWgWIBEAAIAWAWgAAnBLIAAg6IANgNIAIAIIAABVgAg7AMIAIgIIANANIAAA6IgVAWgAAngRIAAg5IAVgWIAABVIgIAJgAg7gLIAAhVIAVAWIAAA5IgNAPgAgihPIgWgVIBwAAIgWAVg");
	this.shape_23.setTransform(240.8,224.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag4BlIAWgWIBFAAIAVAWgAAnBLIAAg6IAOgNIAHAIIAABVgAg7AMIAIgIIANANIAAA6IgVAWgAAngRIAAg5IAVgWIAABVIgHAJgAg7gLIAAhVIAVAWIAAA5IgNAPgAgihPIgWgVIBwAAIgVAVg");
	this.shape_24.setTransform(223.4,224.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ag6BlIAWgWIBFAAIAVAWgAAlBLIAAg6IAOgNIAIAIIAABVgAgmAKIgLgKIALgKIBJAAIALAKIgLAKgAAlgRIAAg5IAWgWIAABVIgIAJgAgkhPIgWgVIBwAAIgVAVg");
	this.shape_25.setTransform(206.1,224.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAlBNIAAg6IAOgNIAIAIIAABVgAAlgPIAAg5IAWgWIAABVIgIAJgAgkhNIgVgVIBvAAIgVAVg");
	this.shape_26.setTransform(54.1,224.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag3BlIAVgWIBFAAIAVAWgAAnBLIAAg6IAOgNIAIAIIAABVgAgkAKIgLgKIALgKIBJAAIALAKIgLAKgAg8gLIAAhVIAXAWIAAA5IgOAPgAgihPIgVgVIBvAAIgVAVg");
	this.shape_27.setTransform(36.5,224.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("Ag3BlIAVgWIBFAAIAVAWgAAnBLIAAg6IANgNIAJAIIAABVgAg8AMIAJgIIAOANIAAA6IgXAWgAAngRIAAg5IAWgWIAABVIgJAJgAg8gLIAAhVIAXAWIAAA5IgOAPgAgihPIgVgVIBvAAIgVAVg");
	this.shape_28.setTransform(19,224.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAlBNIAAg6IANgNIAIAIIAABVgAAlgPIAAg5IAVgWIAABVIgIAJgAgkhNIgWgVIBwAAIgWAVg");
	this.shape_29.setTransform(-100.6,224.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAnBLIAAg6IANgNIAIAIIAABVgAglAKIgKgKIAKgKIBLAAIAKAKIgKAKgAAngRIAAg5IAVgWIAABVIgIAJgAg7gLIAAhVIAVAWIAAA5IgNAPg");
	this.shape_30.setTransform(-118.3,224.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgJBLIAAg6IALgNIAIAIIAABVgAgJgRIAAg5IATgWIAABVIgIAJg");
	this.shape_31.setTransform(-130.7,224.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAlBNIAAg6IANgNIAIAIIAABVgAAlgPIAAg5IAVgWIAABVIgIAJgAgkhNIgWgVIBwAAIgWAVg");
	this.shape_32.setTransform(-325.7,224.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ag4BlIAWgWIBEAAIAWAWgAAnBLIAAg6IANgNIAIAIIAABVgAglAKIgKgKIAKgKIBLAAIALAKIgLAKgAg7gLIAAhVIAVAWIAAA5IgNAPgAgihPIgWgVIBwAAIgWAVg");
	this.shape_33.setTransform(-343.4,224.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("Ag4BlIAWgWIBEAAIAWAWgAAnBLIAAg6IANgNIAIAIIAABVgAg7AMIAIgIIANANIAAA6IgVAWgAAngRIAAg5IAVgWIAABVIgIAJgAg7gLIAAhVIAVAWIAAA5IgNAPgAgihPIgWgVIBwAAIgWAVg");
	this.shape_34.setTransform(-360.8,224.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgaAmIAAhPIAwAAQAFABABAEQgBAGgFAAIgkAAIAAATIAcAAQAEAAABAFQAAAFgFABIgcAAIAAAmQgBAEgGAAQgGgBABgDg");
	this.shape_35.setTransform(-305.4,360.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgbAmIAAhPIAxAAQAGABAAAEQAAAGgGAAIgkAAIAAATIAcAAQAFAAAAAFQgBAFgEABIgcAAIAAAmQAAAEgHAAQgGgBAAgDg");
	this.shape_36.setTransform(-312.3,360.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgXAaQgFgKAAgQQAAgQAFgKQAJgPAOAAQAQAAAHAOQAGANAAAOQAAAOgFAMQgJAQgPAAQgOAAgJgQgAgNgSQgDAIAAAKQAAAKADAJQAEAMAJAAQAJAAAFgMQACgIAAgLQAAgLgCgHQgEgMgKAAQgJAAgEAMg");
	this.shape_37.setTransform(-319.4,360.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgaAnIAAhLQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAIACgBQAFgBACAEIAgA7IAAg6QAAgEAFAAQAFAAABAEIAABLQAAAEgGAAQgCABgDgDIggg7IAAA6QgBACgFABQgGAAABgDg");
	this.shape_38.setTransform(-309,308.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgXAaQgFgKAAgQQAAgPAFgLQAJgPAOAAQAQAAAHAOQAGANAAAOQAAAPgGALQgHAQgQAAQgOAAgJgQgAgNgTQgDAJAAAKQAAAKADAJQAEAMAJAAQAJAAAFgMQADgHAAgMQAAgMgDgGQgEgMgKAAQgJAAgEALg");
	this.shape_39.setTransform(-316.1,308.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgdAqIAAhTIAYAAQARAAAJANQAKAMgBAQQAAAQgJANQgJANgPAAgAgRAeIANAAQAKAAAGgKQAGgIAAgMQAAgLgHgJQgGgKgJAAIgNAAg");
	this.shape_40.setTransform(-306.7,296.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgOApQgEgBABgEIAYhKQABgEAGACQABAAAAAAQABABAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAABQgBAAAAABIgXBIIAAABQAAABAAAAQgBAAgBAAQAAABgBAAQAAAAgBAAIgEgBg");
	this.shape_41.setTransform(-312.4,296.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgaAmIAAhPIAwAAQAFABABAEQgBAGgFAAIglAAIAAATIAdAAQAEAAABAFQAAAFgFABIgdAAIAAAmQAAAEgGAAQgGgBABgDg");
	this.shape_42.setTransform(-317.9,296.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgWAbQgFgLAAgQQAAgQAFgKQAIgPAOAAQAPAAAIAPQAFAKAAAQQAAAQgFALQgIAPgPAAQgOAAgIgPgAgNgSQgDAIAAAKQAAAKADAJQAFAMAIAAQAJAAAEgMQADgKAAgJQAAgJgDgJQgEgNgJAAQgIAAgFANg");
	this.shape_43.setTransform(-5.9,251.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAAAmIAAhEIgIAAQgDAAAAgFQAAgFAEgBIAOAAIADABQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAIAABMIgCADIgEAAQgGAAAAgEg");
	this.shape_44.setTransform(-11.7,251.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgWAbQgFgLAAgQQAAgQAFgKQAIgPAOAAQAPAAAIAPQAFAKAAAQQAAAQgFALQgIAPgPAAQgOAAgIgPgAgNgSQgDAIAAAKQAAAKADAJQAFAMAIAAQAJAAAEgMQADgKAAgJQAAgJgDgJQgEgNgJAAQgIAAgFANg");
	this.shape_45.setTransform(85.7,251.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgPAmQgJgHABgIQABgFAEABQAGAAAAAEQAAAIAMAAIAFgBIAFgEQAEgIgBgIQgCgNgTgBIgDgBQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQABgEAEgEIANgOIgYAAQgEAAAAgGIABgDQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAkAAQAEABAAAEIgBAEIAAABIgTASQAXAEgBAVQAAANgGAIQgDAEgGADQgEACgFAAQgKAAgFgEg");
	this.shape_46.setTransform(78.9,251.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgaAqIAAhTIAYAAQAKAAAGADQAJAFAAAOQAAAQgKABQAGABADAEQAFAHAAAIQAAAMgHAGQgHAGgMAAgAgPAfIAPAAQAGAAAFgDQAEgDAAgGQAAgKgGgDQgDgDgFgBIgQAAgAgPgHIAHAAQAMAAAFgEQAEgCgBgGQAAgLgMAAIgPAAg");
	this.shape_47.setTransform(531.7,204.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AATAmIgDgJIgfAAIgDAJQgBAFgHgBQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAchJQABgEACAAQAEAAACAEIAYBLQAAAEgGAAIgBAAQgDAAgCgEgAgLASIAAAAIAYAAIgMgnIgMAnIAAAAg");
	this.shape_48.setTransform(454.5,204.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgTAqQgFgBAAgEIAAhOIAYAAQAKAAAGADQAJAFAAAOQAAAGgCAEQgCAHgGACQgFACgIAAIgOAAIAAAjQgBAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgCAAgAgMgIIAMAAQAIAAADgDQADgCAAgGQABgLgNAAIgOAAg");
	this.shape_49.setTransform(399.7,352.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAAAqQgMAAgHgIQgIgKAAgQIAAguQABgDAEAAQABAAABAAQAAAAABAAQAAAAABAAQAAAAABAAIABADIAAArQAAAMACAGQAGAJAJgBQALgBAEgIQACgFAAgMIAAgqQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAIAEgBQAFAAAAADIAAAuQAAAigbAAg");
	this.shape_50.setTransform(393.3,352.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgaAnIAAhLQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAIACgBQAFgBACAEIAgA7IAAg6QAAgEAFAAQAFAAABAEIAABLQAAAEgGAAQgCABgDgDIggg7IAAA6QgBACgFABQgGAAABgDg");
	this.shape_51.setTransform(399.8,263.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgdAqIAAhTIAYAAQARAAAJANQAKAMgBAQQAAAQgJANQgJANgPAAgAgRAeIANAAQAKAAAGgKQAGgIAAgMQAAgLgHgJQgGgKgJAAIgNAAg");
	this.shape_52.setTransform(392.6,263.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgWAbQgGgLAAgQQAAgQAGgKQAHgPAPAAQAQAAAHAOQAGANAAAOQAAAPgGALQgHAQgQAAQgPAAgHgPgAgNgTQgDAJAAAKQAAAKADAJQAFALAIABQAJgBAFgLQACgIAAgLQAAgMgCgGQgFgMgJAAQgIAAgFALg");
	this.shape_53.setTransform(-148.4,250.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgOApQgEgBABgEIAYhKQABgEAGACQABAAAAAAQABABAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAABQgBAAAAABIgXBIIAAABQAAABAAAAQgBAAgBAAQAAABgBAAQAAAAgBAAIgEgBg");
	this.shape_54.setTransform(-154,250.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgWAbQgGgKAAgRQAAgOAGgMQADgGAIgFQAIgEAFAAQANAAAHAGQAEADAAACIACABQABAGgEABQgFACgDgCQgFgJgJABQgKABgGALQgDAHAAALQAAANADAGQAHAMAJAAQAGAAAEgDQAEgCABgFQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAIAFAAQAAAAABABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQgCAHgHAFQgFAFgNAAQgPAAgJgPg");
	this.shape_55.setTransform(-159.7,250.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AARAmIAAgmIghAAIAAAnIgCADIgEAAIgEgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAIAAhLQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAEgBQAGAAAAAEIAAAZIAhAAIAAgaIABAAQAAgDAFAAIAEABQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAABIAABLQAAABAAAAQAAABgBAAQAAAAAAAAQAAABgBAAIgEABQgFAAgBgEg");
	this.shape_56.setTransform(-111,199.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgWAbQgGgKAAgRQAAgOAGgMQADgGAIgFQAIgEAFAAQANAAAHAGQAEADAAACIACABQABAGgEABQgFACgDgCQgFgJgJABQgKABgGALQgDAHAAALQAAANADAGQAHAMAJAAQAGAAAEgDQAEgCABgFQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAIAFAAQAAAAABABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQgCAHgHAFQgFAFgNAAQgPAAgJgPg");
	this.shape_57.setTransform(-118.3,199.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AATAmIgDgJIgfAAIgDAJQgBAFgHgBQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAchJQABgEACAAQAEAAACAEIAYBLQAAAEgGAAIgBAAQgDAAgCgEgAgLASIAAAAIAYAAIgMgnIgMAnIAAAAg");
	this.shape_58.setTransform(-125.2,199.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAVApQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAg1IgQAdQgCADgCAAQgBAAgCgDIgQgcIAAA0IgBADQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgFAAgBgEIAAhKQABgFAEAAQAFgBACAEIASAmIATgmQACgEAFABQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAABIAABKQAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAIgEABIgEgBg");
	this.shape_59.setTransform(-132.3,199.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgOApQgEgBABgEIAYhKQABgEAGACQABAAAAAAQABABAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAABQgBAAAAABIgXBIIAAABQAAABAAAAQgBAAgBAAQAAABgBAAQAAAAgBAAIgEgBg");
	this.shape_60.setTransform(-138.1,199.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgXAgIgEgJQgBgFAEgCIAEAAIADADQABAGAEADIAKADQAHABAEgCQAHgCABgGQAAgHgDgDQgCgFgMgFIgKgCIgIgCQgFgEgCgFQgCgFABgHQACgKAIgFQAGgDAGAAIALABQAFAAAFAGQAFAEAAAEQACACgBADQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIgEAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQgCgGgIgDQgGgCgFACQgHAEAAAGQAAAIAJACQAdAKAFALIABAHIgBAHQgCAIgKAGQgGACgKABQgRgBgGgJg");
	this.shape_61.setTransform(-143.5,199.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AATAmIgDgJIgfAAIgDAJQgBAFgHgBQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAchJQABgEACAAQAEAAACAEIAYBLQAAAEgGAAIgBAAQgDAAgCgEgAgLASIAAAAIAYAAIgMgnIgMAnIAAAAg");
	this.shape_62.setTransform(-150.3,199.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgDApQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAhLQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAIADgBQAGAAgBAEIAABMQAAAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABIgDAAIgDgBg");
	this.shape_63.setTransform(-155.3,199.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgaAmIAAhPIAwAAQAFABAAAEQAAAGgFAAIglAAIAAATIAdAAQAEAAAAAFQAAAFgDABIgeAAIAAAmQAAAEgGAAQgFgBAAgDg");
	this.shape_64.setTransform(-230.8,274.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgaAmIAAhPIAwAAQAFABABAEQgBAGgFAAIglAAIAAATIAdAAQAEAAABAFQAAAFgFABIgdAAIAAAmQAAAEgGAAQgGgBABgDg");
	this.shape_65.setTransform(-237.8,274.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgWAaQgGgKAAgQQAAgPAGgLQAHgPAPAAQARAAAGAOQAGANAAAOQAAAOgGAMQgHAQgQAAQgPAAgHgQgAgNgTQgDAJAAAKQAAAKADAJQAFAMAIAAQAJAAAFgMQACgIAAgLQAAgMgCgGQgFgMgJAAQgIAAgFALg");
	this.shape_66.setTransform(-244.8,274.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AAVApQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAg1IgQAdQgCADgCAAQgBAAgCgDIgQgcIAAA0IgBADQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgFAAgBgEIAAhKQABgFAEAAQAFgBACAEIASAmIATgmQACgEAFABQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAABIAABKQAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAIgEABIgEgBg");
	this.shape_67.setTransform(-232.4,209.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgUAqQgGgBAAgEIAAhOIAYAAQALAAAGADQAIAFAAAOQAAAGgCAEQgDAKgOABIAWAfQABADgBACQAAAAAAABQAAAAAAAAQgBAAAAABQgBAAAAAAQgGAEgBgEIgYgmIgHAAIAAAjQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgBAAgAgOgIIAOAAQAGAAADgDQADgCAAgGQABgLgNAAIgOAAg");
	this.shape_68.setTransform(-239.4,209.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AATAmIgDgJIgfAAIgDAJQgBAFgHgBQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAchJQABgEACAAQAEAAACAEIAYBLQAAAEgGAAIgBAAQgDAAgCgEgAgLASIAAAAIAYAAIgMgnIgMAnIAAAAg");
	this.shape_69.setTransform(-246,209.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgEAmIAAhEIgTAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBIgBgDQAAgFAFgBIAvAAQAFABAAAFQAAAEgFABIgTAAIAABEIgBADIgEABQgEAAAAgEg");
	this.shape_70.setTransform(-231.1,199.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgOApQgEgBABgEIAYhKQABgEAGACQABAAAAAAQABABAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAABQgBAAAAABIgXBIIAAABQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgEgBg");
	this.shape_71.setTransform(-236.5,199.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AATAmIgDgJIgfAAIgDAJQgBAFgHgBQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAchJQABgEACAAQAEAAACAEIAYBLQAAAEgGAAIgBAAQgDAAgCgEgAgLASIAAAAIAYAAIgMgnIgMAnIAAAAg");
	this.shape_72.setTransform(-242,199.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgaAmIAAhPIAwAAQAFABABAEQgBAGgFAAIglAAIAAATIAdAAQAEAAABAFQAAAFgFABIgdAAIAAAmQAAAEgGAAQgGgBABgDg");
	this.shape_73.setTransform(605.5,360.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgbAmIAAhPIAxAAQAGABAAAEQAAAGgGAAIgkAAIAAATIAcAAQAFAAAAAFQgBAFgEABIgcAAIAAAmQgBAEgGAAQgGgBAAgDg");
	this.shape_74.setTransform(598.6,360.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgWAaQgGgKAAgQQAAgQAGgKQAHgPAPAAQAQAAAHAOQAGANAAAOQAAAOgFAMQgJAQgPAAQgPAAgHgQgAgNgSQgDAIAAAKQAAAKADAJQAEAMAJAAQAJAAAFgMQACgIAAgLQABgLgDgHQgEgMgKAAQgJAAgEAMg");
	this.shape_75.setTransform(591.5,360.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgaAnIAAhLQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAIADgBQAFgBACAEIAgA7IAAg6QABgEAEAAQAFAAAAAEIAABLQABAEgGAAQgCABgDgDIghg7IAAA6QgBACgEABQgGAAABgDg");
	this.shape_76.setTransform(602,308.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgXAaQgFgKAAgQQAAgPAFgLQAJgPAOAAQARAAAGAOQAGANAAAOQAAAPgFALQgJAQgPAAQgOAAgJgQgAgNgTQgDAJAAAKQAAAKADAJQAEAMAJAAQAJAAAFgMQACgHABgMQgBgMgCgGQgEgMgKAAQgJAAgEALg");
	this.shape_77.setTransform(594.9,308.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgdAqIAAhTIAYAAQARAAAJANQAKAMgBAQQAAAQgJANQgJANgPAAgAgRAeIANAAQAKAAAGgKQAGgIAAgMQAAgLgHgJQgGgKgJAAIgNAAg");
	this.shape_78.setTransform(604.2,296.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgOApQgEgBABgEIAYhKQABgEAGACQABAAAAAAQABABAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAABQgBAAAAABIgXBIIAAABQAAABAAAAQgBAAgBAAQAAABgBAAQAAAAgBAAIgEgBg");
	this.shape_79.setTransform(598.5,296.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgaAmIAAhPIAwAAQAFABAAAEQAAAGgFAAIglAAIAAATIAdAAQAEAAAAAFQAAAFgDABIgeAAIAAAmQAAAEgGAAQgGgBABgDg");
	this.shape_80.setTransform(593,296.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgaAqIAAhTIAwAAQAFABAAAEQAAAHgFAAIgkAAIAAASIAeAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgeAAIAAAeIAkAAQAFABAAAGQAAAFgFAAg");
	this.shape_81.setTransform(-328.2,199.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgXAgIgEgJQgBgFAEgCIAEAAIADADQABAGAEADIAKADQAHABAEgCQAHgCABgGQAAgHgDgDQgCgFgMgFIgKgCIgIgCQgFgEgCgFQgCgFABgHQACgKAIgFQAGgDAGAAIALABQAFAAAFAGQAFAEAAAEQACACgBADQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIgEAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQgCgGgIgDQgGgCgFACQgHAEAAAGQAAAIAJACQAdAKAFALIABAHIgBAHQgCAIgKAGQgGACgKABQgRgBgGgJg");
	this.shape_82.setTransform(-335.1,199.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgUAqQgGgBAAgEIAAhOIAYAAQALAAAGADQAIAFAAAOQAAAGgCAEQgDAKgOABIAWAfQABADgBACQAAAAAAABQAAAAAAAAQgBAAAAABQgBAAAAAAQgGAEgBgEIgYgmIgHAAIAAAjQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgBAAgAgOgIIAOAAQAGAAADgDQADgCAAgGQABgLgNAAIgOAAg");
	this.shape_83.setTransform(-341.7,199.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AAAAqQgMAAgIgIQgHgKAAgQIAAguQACgDADAAQABAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAIACADIAAArQAAAMADAGQAFAJAJgBQALgBADgIQADgFAAgMIAAgqQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAIAEgBQAFAAAAADIAAAuQAAAigbAAg");
	this.shape_84.setTransform(-348.2,199.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgWAbQgGgLAAgQQAAgPAGgLQAHgPAPAAQAQAAAHAPQAGAMAAAOQAAAOgGAMQgHAQgQAAQgPAAgHgPgAgNgSQgDAIAAAKQAAALADAIQAFALAIAAQAJAAAFgLQACgHAAgMQAAgLgCgHQgFgMgJAAQgIAAgFAMg");
	this.shape_85.setTransform(-355,199.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgWAbQgGgKAAgRQAAgOAGgMQADgGAIgFQAIgEAFAAQANAAAHAGQAEADAAACIACABQABAGgEABQgFACgDgCQgFgJgJABQgKABgGALQgDAHAAALQAAANADAGQAHAMAJAAQAGAAAEgDQAEgCABgFQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAIAFAAQAAAAABABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQgCAHgHAFQgFAFgNAAQgPAAgJgPg");
	this.shape_86.setTransform(-362,199.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgWAbQgGgKAAgRQAAgOAGgMQADgGAIgFQAHgEAGAAQANAAAHAFIAEAFIABADQACAFgFACQgEABgDgDQgFgIgJABQgKABgGALQgEAHAAALQAAANADAGQAIAMAJAAQAGAAAEgDQACgBADgFIAAgOIgQAAQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBIAAgEIAAgCQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAABAAIAXAAIADABIABACIAAAWQAAADgDAEQgCAEgEADQgFAFgNAAQgPAAgJgPg");
	this.shape_87.setTransform(55.3,199.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgbAnIAAhLQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAIADgBQAEgBACAEIAfA7IAAg6QABgEAFAAQAGAAAAAEIAABLQgBAEgFAAQgCABgDgDIggg7IAAA6QgCACgEABQgGAAAAgDg");
	this.shape_88.setTransform(48.1,199.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgDApQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBgBAAIAAhLQABAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIADgBQAFAAAAAEIAABMQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBABIgDAAIgDgBg");
	this.shape_89.setTransform(43,199.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgdAqIAAhTIAYAAQARAAAJANQAKAMgBAQQAAAQgJANQgJANgPAAgAgRAeIANAAQAKAAAGgKQAGgIAAgMQAAgLgHgJQgGgKgJAAIgNAAg");
	this.shape_90.setTransform(38.1,199.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AATAmIgDgJIgfAAIgDAJQgBAFgHgBQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAchJQABgEACAAQAEAAACAEIAYBLQAAAEgGAAIgBAAQgDAAgCgEgAgLASIAAAAIAYAAIgMgnIgMAnIAAAAg");
	this.shape_91.setTransform(31.2,199.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgaAqIAAhTIAwAAQAFABAAAEQAAAHgFAAIgkAAIAAASIAeAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgeAAIAAAeIAkAAQAFABAAAGQAAAFgFAAg");
	this.shape_92.setTransform(24.1,199.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AARAmIAAgmIghAAIAAAnIgCADIgEAAIgEgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAIAAhLQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAEgBQAGAAAAAEIAAAZIAhAAIAAgaIABAAQAAgDAFAAIAEABQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAABIAABLQAAABAAAAQAAABgBAAQAAAAAAAAQAAABgBAAIgEABQgFAAgBgEg");
	this.shape_93.setTransform(16.8,199.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgaAqIAAhTIAwAAQAFABAAAEQAAAHgFAAIgkAAIAAASIAeAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgeAAIAAAeIAkAAQAFABAAAGQAAAFgFAAg");
	this.shape_94.setTransform(237.4,199.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgdAqIAAhTIAYAAQARAAAJANQAKAMgBAQQAAAQgJANQgJANgPAAgAgRAeIANAAQAKAAAGgKQAGgIAAgMQAAgLgHgJQgGgKgJAAIgNAAg");
	this.shape_95.setTransform(230.4,199.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AAAAqQgMAAgHgIQgIgKAAgQIAAguQABgDAEAAQABAAABAAQAAAAABAAQAAAAABAAQAAAAABAAIABADIAAArQAAAMACAGQAGAJAJgBQALgBAEgIQACgFAAgMIAAgqQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAIAEgBQAFAAAAADIAAAuQAAAigbAAg");
	this.shape_96.setTransform(223.6,199.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgEAmIAAhEIgTAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBIgBgDQAAgFAFgBIAvAAQAFABAAAFQAAAEgFABIgTAAIAABEIgBADIgEABQgEAAAAgEg");
	this.shape_97.setTransform(216.8,199.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgDApQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAAhLQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIADgBQAFAAAAAEIAABMQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBABIgDAAIgDgBg");
	this.shape_98.setTransform(212.1,199.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgEAmIAAhEIgTAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBIgBgDQAAgFAFgBIAvAAQAFABAAAFQAAAEgFABIgTAAIAABEIgBADIgEABQgEAAAAgEg");
	this.shape_99.setTransform(207.3,199.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgbAqIAAhQQABgDAEAAQAFAAABADIAABEIAnAAQAGAAgBAHIgBAEQAAAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAg");
	this.shape_100.setTransform(200.8,199.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AATAmIgDgJIgfAAIgDAJQgBAFgHgBQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAchJQABgEACAAQAEAAACAEIAYBLQAAAEgGAAIgBAAQgDAAgCgEgAgLASIAAAAIAYAAIgMgnIgMAnIAAAAg");
	this.shape_101.setTransform(193.9,199.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgdAqIAAhTIAYAAQARAAAJANQAKAMgBAQQAAAQgJANQgJANgPAAgAgRAeIANAAQAKAAAGgKQAGgIAAgMQAAgLgHgJQgGgKgJAAIgNAAg");
	this.shape_102.setTransform(383.5,199.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgaAqIAAhTIAwAAQAFABAAAEQAAAHgFAAIgkAAIAAASIAeAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgeAAIAAAeIAkAAQAFABAAAGQAAAFgFAAg");
	this.shape_103.setTransform(376.5,199.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgaAqIAAhTIAwAAQAFABAAAEQAAAHgFAAIgkAAIAAASIAeAAQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgeAAIAAAeIAkAAQAFABAAAGQAAAFgFAAg");
	this.shape_104.setTransform(369.4,199.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgTAqQgFgBAAgEIAAhOIAYAAQAKAAAGADQAJAFAAAOQAAAGgCAEQgCAHgGACQgFACgIAAIgOAAIAAAjQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgCAAgAgMgIIAMAAQAIAAADgDQADgCAAgGQABgLgNAAIgOAAg");
	this.shape_105.setTransform(362.8,199.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgXAgIgEgJQgBgFAEgCIAEAAIADADQABAGAEADIAKADQAHABAEgCQAHgCABgGQAAgHgDgDQgCgFgMgFIgKgCIgIgCQgFgEgCgFQgCgFABgHQACgKAIgFQAGgDAGAAIALABQAFAAAFAGQAFAEAAAEQACACgBADQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIgEAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQgCgGgIgDQgGgCgFACQgHAEAAAGQAAAIAJACQAdAKAFALIABAHIgBAHQgCAIgKAGQgGACgKABQgRgBgGgJg");
	this.shape_106.setTransform(356.4,199.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgEAmIAAhEIgTAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBIgBgDQAAgFAFgBIAvAAQAFABAAAFQAAAEgFABIgTAAIAABEIgBADIgEABQgEAAAAgEg");
	this.shape_107.setTransform(346.6,199.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgUAqQgGgBAAgEIAAhOIAYAAQALAAAGADQAIAFAAAOQAAAGgCAEQgDAKgOABIAWAfQABADgBACQAAAAAAABQAAAAAAAAQgBAAAAABQgBAAAAAAQgGAEgBgEIgYgmIgHAAIAAAjQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgBAAgAgOgIIAOAAQAGAAADgDQADgCAAgGQABgLgNAAIgOAAg");
	this.shape_108.setTransform(340,199.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgaAqIAAhTIAwAAQAFABAAAEQAAAHgFAAIgkAAIAAASIAeAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgeAAIAAAeIAkAAQAFABAAAGQAAAFgFAAg");
	this.shape_109.setTransform(333.3,199.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AAAAqIgDgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIgdhJQgBgFAEgBQAGgCACAEIAXA/IAXg/QADgEAFABQAGACgCAEIgeBKQAAADgFAAIAAAAg");
	this.shape_110.setTransform(325.9,199.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgaAqIAAhTIAwAAQAFABAAAEQAAAHgFAAIgkAAIAAASIAeAAQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgeAAIAAAeIAkAAQAFABAAAGQAAAFgFAAg");
	this.shape_111.setTransform(647,199.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgXAgIgEgJQgBgFAEgCIAEAAIADADQABAGAEADIAKADQAHABAEgCQAHgCABgGQAAgHgDgDQgCgFgMgFIgKgCIgIgCQgFgEgCgFQgCgFABgHQACgKAIgFQAGgDAGAAIALABQAFAAAFAGQAFAEAAAEQACACgBADQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIgEAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQgCgGgIgDQgGgCgFACQgHAEAAAGQAAAIAJACQAdAKAFALIABAHIgBAHQgCAIgKAGQgGACgKABQgRgBgGgJg");
	this.shape_112.setTransform(640.1,199.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgUAqQgGgBAAgEIAAhOIAYAAQALAAAGADQAIAFAAAOQAAAGgCAEQgDAKgOABIAWAfQABADgBACQAAAAAAABQAAAAAAAAQgBAAAAABQgBAAAAAAQgGAEgBgEIgYgmIgHAAIAAAjQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgBAAgAgOgIIAOAAQAGAAADgDQADgCAAgGQABgLgNAAIgOAAg");
	this.shape_113.setTransform(633.5,199.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AAAAqQgMAAgHgIQgIgKAAgQIAAguQACgDAEAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAIACADIAAArQAAAMACAGQAGAJAJgBQALgBAEgIQACgFAAgMIAAgqQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAIAEgBQAFAAAAADIAAAuQAAAigbAAg");
	this.shape_114.setTransform(627,199.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgXAbQgFgLAAgQQAAgPAFgLQAJgPAOAAQAQAAAHAPQAGAMAAAOQAAAOgFAMQgJAQgPAAQgOAAgJgPgAgNgSQgDAIAAAKQAAALADAIQAEALAJAAQAJAAAFgLQACgHAAgMQAAgLgCgHQgEgMgKAAQgJAAgEAMg");
	this.shape_115.setTransform(620.2,199.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgWAbQgGgKAAgRQAAgOAGgMQADgGAIgFQAIgEAFAAQANAAAHAGQAEADAAACIACABQABAGgEABQgFACgDgCQgFgJgJABQgKABgGALQgDAHAAALQAAANADAGQAHAMAJAAQAGAAAEgDQAEgCABgFQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAIAFAAQAAAAABABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQgCAHgHAFQgFAFgNAAQgPAAgJgPg");
	this.shape_116.setTransform(613.2,199.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgaAqIAAhTIAwAAQAFABAAAEQAAAHgFAAIgkAAIAAASIAeAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgeAAIAAAeIAkAAQAFABAAAGQAAAFgFAAg");
	this.shape_117.setTransform(521.9,199.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgWAbQgGgKAAgRQAAgOAGgMQADgGAIgFQAHgEAGAAQANAAAHAFIAEAFIABADQACAFgFACQgEABgDgDQgFgIgJABQgKABgGALQgEAHAAALQAAANADAGQAIAMAJAAQAGAAAEgDQACgBADgFIAAgOIgQAAQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBIAAgEIAAgCQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAABAAIAXAAIADABIABACIAAAWQAAADgDAEQgCAEgEADQgFAFgNAAQgPAAgJgPg");
	this.shape_118.setTransform(514.6,199.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AATAmIgDgJIgfAAIgDAJQgBAFgHgBQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAchJQABgEACAAQAEAAACAEIAYBLQAAAEgGAAIgBAAQgDAAgCgEgAgLASIAAAAIAYAAIgMgnIgMAnIAAAAg");
	this.shape_119.setTransform(507.6,199.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgWAbQgGgKAAgRQAAgOAGgMQADgGAIgFQAHgEAGAAQANAAAHAFIAEAFIABADQACAFgFACQgEABgDgDQgFgIgJABQgKABgGALQgEAHAAALQAAANADAGQAIAMAJAAQAGAAAEgDQACgBADgFIAAgOIgQAAQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBIAAgEIAAgCQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAABAAIAXAAIADABIABACIAAAWQAAADgDAEQgCAEgEADQgFAFgNAAQgPAAgJgPg");
	this.shape_120.setTransform(500.4,199.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgaAnIAAhLQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAIADgBQAFgBACAEIAgA7IAAg6QABgEAEAAQAFAAAAAEIAABLQABAEgGAAQgCABgDgDIghg7IAAA6QgBACgEABQgGAAABgDg");
	this.shape_121.setTransform(493.1,199.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgaAqIAAhTIAwAAQAFABAAAEQAAAHgFAAIgkAAIAAASIAeAAQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgeAAIAAAeIAkAAQAFABAAAGQAAAFgFAAg");
	this.shape_122.setTransform(485.9,199.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgTAqQgFgBAAgEIAAhOIAYAAQALAAAFADQAJAFAAAOQAAAGgCAEQgCAHgGACQgEACgJAAIgPAAIAAAjQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgCAAgAgNgIIANAAQAIAAADgDQADgCAAgGQABgLgNAAIgPAAg");
	this.shape_123.setTransform(476.3,199.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgOApQgEgBABgEIAYhKQABgEAGACQABAAAAAAQABABAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAABQgBAAAAABIgXBIIAAABQAAABAAAAQgBAAgBAAQAAABgBAAQAAAAgBAAIgEgBg");
	this.shape_124.setTransform(471.1,199.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AATAmIgDgJIgfAAIgDAJQgBAFgHgBQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAchJQABgEACAAQAEAAACAEIAYBLQAAAEgGAAIgBAAQgDAAgCgEgAgLASIAAAAIAYAAIgMgnIgMAnIAAAAg");
	this.shape_125.setTransform(465.5,199.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgVAjIAAhFIAnAAQAEACAAADQAAAGgEgBIgdAAIAAAPIAYAAQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAIABADIgBAEQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAIgYAAIAAAZIAdAAQAEABAAAEQAAAEgEABg");
	this.shape_126.setTransform(514.2,323.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgRAXQgGgKAAgNQAAgLAFgKQADgFAHgFQAGgDAEAAQAKAAAGAFIADAEIABACQACAEgEACQgEABgCgCQgFgHgGAAQgIABgGAJQgCAGAAAJQAAALACAFQAGAKAIAAQAEgBAEgCIADgFIAAgMIgMAAIgCgBIAAgEIAAgBIACgBIASAAIADABIABABIAAASQAAACgDAEQgBADgDACQgFAEgKABQgMgBgHgLg");
	this.shape_127.setTransform(508.2,323.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AAQAfIgDgHIgZAAIgCAHQgBAEgGgBIgDgBQAAAAAAgBQgBAAAAAAQAAgBABAAQAAgBAAAAIAWg8QACgEABAAQAEAAABADIAUA+QAAADgFAAIgBABQgDAAgBgEgAgJAPIAAgBIAUAAIgKggIgKAgIAAAAg");
	this.shape_128.setTransform(502.5,323.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgRAXQgGgKAAgNQAAgLAFgKQADgFAHgFQAFgDAFAAQAKAAAGAFIADAEIABACQACAEgEACQgEABgCgCQgFgHgHAAQgHABgGAJQgCAGAAAJQAAALACAFQAHAKAGAAQAFgBAEgCIADgFIAAgMIgMAAIgCgBIAAgEIAAgBIACgBIATAAIACABIABABIAAASQAAACgDAEQgBADgDACQgFAEgKABQgMgBgHgLg");
	this.shape_129.setTransform(496.5,323.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgVAgIAAg9IABgDIACgBQAEgBACADIAaAwIAAgvQAAgDADAAQAFAAABADIAAA9QAAADgFAAQgCABgCgCIgagwIAAAvQgBACgEABQgFAAABgDg");
	this.shape_130.setTransform(490.6,323.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgVAjIAAhFIAnAAQAEACAAADQAAAGgEgBIgdAAIAAAPIAYAAQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAIABADIgBAEQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAIgYAAIAAAZIAdAAQAEABAAAEQAAAEgEABg");
	this.shape_131.setTransform(484.7,323.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgTAaQgCgCgBgGQgBgDAEgCQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAIACACQABAFAEADIAIADQAFAAADgBQAGgDAAgEQABgGgCgDQgDgDgJgFIgIgBIgGgBQgFgEgBgDQgCgFABgGQACgIAGgEQAFgCAFgBIAIABQAFAAAEAFQAEAEAAADQAAAAABABQAAABAAAAQAAABAAAAQAAABAAAAIgDACIgEAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAQgCgFgFgCQgFgBgEABQgGADAAAFQAAAGAHACQAYAIADAJIABAGIgBAFQgBAHgIAFQgFACgIABQgOgBgFgIg");
	this.shape_132.setTransform(479.1,323.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgCAiIgCgDIAAg9IACgDIACgBQAEAAABAFIAAA9QgBAAAAAAQAAABAAAAQgBAAAAABQAAAAgBAAIgCABIgCgBg");
	this.shape_133.setTransform(475.2,323.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgYAjIAAhFIAUAAQANAAAIALQAIAKgBANQAAANgHALQgIAKgMABgAgOAZIALAAQAHgBAFgHQAFgIAAgJQAAgJgFgHQgGgIgGAAIgLAAg");
	this.shape_134.setTransform(471.2,323.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// under text
	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#211412").s().p("Ag4BlIAWgWIBEAAIAWAWgAAnBLIAAg6IANgNIAIAIIAABVgAg7AMIAIgIIAOANIAAA6IgWAWgAglAKIgKgKIAKgKIBLAAIALAKIgLAKgAAngRIAAg5IAVgWIAABVIgIAJgAg7gLIAAhVIAWAWIAAA5IgOAPgAgihPIgWgVIBwAAIgWAVg");
	this.shape_135.setTransform(647.9,224.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#211412").s().p("Ag4BlIAWgWIBEAAIAWAWgAAnBLIAAg6IANgNIAIAIIAABVgAg7AMIAIgIIANANIAAA6IgVAWgAglAKIgKgKIAKgKIBLAAIALAKIgLAKgAAngRIAAg5IAVgWIAABVIgIAJgAg7gLIAAhVIAVAWIAAA5IgNAPgAgihPIgWgVIBwAAIgWAVg");
	this.shape_136.setTransform(630.4,224.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#211412").s().p("Ag4BlIAWgWIBEAAIAWAWgAAnBLIAAg6IANgNIAIAIIAABVgAg7AMIAIgIIANANIAAA6IgVAWgAglAKIgKgKIAKgKIBLAAIAKAKIgKAKgAAngRIAAg5IAVgWIAABVIgIAJgAg7gLIAAhVIAVAWIAAA5IgNAPgAgihPIgWgVIBwAAIgWAVg");
	this.shape_137.setTransform(613,224.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#211412").s().p("Ag3BlIAVgWIBEAAIAWAWgAAnBLIAAg6IANgNIAIAIIAABVgAg8AMIAJgIIAOANIAAA6IgXAWgAglAKIgKgKIAKgKIBKAAIAMAKIgMAKgAAngRIAAg5IAVgWIAABVIgIAJgAg8gLIAAhVIAXAWIAAA5IgOAPgAgihPIgVgVIBvAAIgWAVg");
	this.shape_138.setTransform(399.4,224.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#211412").s().p("Ag4BlIAWgWIBEAAIAWAWgAAnBLIAAg6IANgNIAIAIIAABVgAg7AMIAIgIIAOANIAAA6IgWAWgAglAKIgKgKIAKgKIBLAAIALAKIgLAKgAAngRIAAg5IAVgWIAABVIgIAJgAg7gLIAAhVIAWAWIAAA5IgOAPgAgihPIgWgVIBwAAIgWAVg");
	this.shape_139.setTransform(381.9,224.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#211412").s().p("Ag4BlIAWgWIBEAAIAWAWgAAnBLIAAg6IANgNIAIAIIAABVgAg7AMIAIgIIANANIAAA6IgVAWgAglAKIgKgKIAKgKIBLAAIALAKIgLAKgAAngRIAAg5IAVgWIAABVIgIAJgAg7gLIAAhVIAVAWIAAA5IgNAPgAgihPIgWgVIBwAAIgWAVg");
	this.shape_140.setTransform(364.5,224.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#211412").s().p("Ag4BlIAWgWIBEAAIAWAWgAAnBLIAAg6IANgNIAIAIIAABVgAg7AMIAIgIIANANIAAA6IgVAWgAglAKIgKgKIAKgKIBLAAIAKAKIgKAKgAAngRIAAg5IAVgWIAABVIgIAJgAg7gLIAAhVIAVAWIAAA5IgNAPgAgihPIgWgVIBwAAIgWAVg");
	this.shape_141.setTransform(347,224.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#211412").s().p("Ag4BlIAWgWIBFAAIAVAWgAAnBLIAAg6IAOgNIAHAIIAABVgAg7AMIAIgIIANANIAAA6IgVAWgAglAKIgKgKIAKgKIBLAAIAKAKIgKAKgAAngRIAAg5IAVgWIAABVIgHAJgAg7gLIAAhVIAVAWIAAA5IgNAPgAgihPIgWgVIBwAAIgVAVg");
	this.shape_142.setTransform(329.6,224.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#211412").s().p("Ag4BlIAWgWIBFAAIAVAWgAAnBLIAAg6IAOgNIAIAIIAABVgAg8AMIAJgIIANANIAAA6IgWAWgAgkAKIgLgKIALgKIBJAAIALAKIgLAKgAAngRIAAg5IAWgWIAABVIgIAJgAg8gLIAAhVIAWAWIAAA5IgNAPgAgihPIgWgVIBwAAIgVAVg");
	this.shape_143.setTransform(312.1,224.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#211412").s().p("Ag3BlIAVgWIBFAAIAVAWgAAnBLIAAg6IAOgNIAIAIIAABVgAg8AMIAJgIIAOANIAAA6IgXAWgAgkAKIgLgKIALgKIBJAAIALAKIgLAKgAAngRIAAg5IAWgWIAABVIgIAJgAg8gLIAAhVIAXAWIAAA5IgOAPgAgihPIgVgVIBvAAIgVAVg");
	this.shape_144.setTransform(258.2,224.9);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#211412").s().p("Ag3BlIAVgWIBFAAIAVAWgAAnBLIAAg6IAOgNIAIAIIAABVgAg8AMIAJgIIAOANIAAA6IgXAWgAgkAKIgLgKIALgKIBJAAIALAKIgLAKgAAngRIAAg5IAWgWIAABVIgIAJgAg8gLIAAhVIAXAWIAAA5IgOAPgAgihPIgVgVIBvAAIgVAVg");
	this.shape_145.setTransform(240.8,224.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#211412").s().p("Ag3BlIAVgWIBFAAIAVAWgAAnBLIAAg6IANgNIAJAIIAABVgAg8AMIAJgIIAOANIAAA6IgXAWgAgkAKIgLgKIALgKIBJAAIAMAKIgMAKgAAngRIAAg5IAWgWIAABVIgJAJgAg8gLIAAhVIAXAWIAAA5IgOAPgAgihPIgVgVIBvAAIgVAVg");
	this.shape_146.setTransform(223.3,224.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#211412").s().p("Ag3BlIAVgWIBEAAIAWAWgAAnBLIAAg6IANgNIAIAIIAABVgAg8AMIAJgIIAOANIAAA6IgXAWgAgkAKIgLgKIALgKIBJAAIAMAKIgMAKgAAngRIAAg5IAVgWIAABVIgIAJgAg8gLIAAhVIAXAWIAAA5IgOAPgAgihPIgVgVIBvAAIgWAVg");
	this.shape_147.setTransform(205.9,224.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#211412").s().p("Ag4BlIAWgWIBEAAIAWAWgAAnBLIAAg6IANgNIAIAIIAABVgAg7AMIAIgIIANANIAAA6IgVAWgAglAKIgKgKIAKgKIBLAAIALAKIgLAKgAAngRIAAg5IAVgWIAABVIgIAJgAg7gLIAAhVIAVAWIAAA5IgNAPgAgihPIgWgVIBwAAIgWAVg");
	this.shape_148.setTransform(188.4,224.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#211412").s().p("Ag4BlIAWgWIBEAAIAWAWgAAnBLIAAg6IANgNIAIAIIAABVgAg7AMIAIgIIANANIAAA6IgVAWgAglAKIgKgKIAKgKIBLAAIALAKIgLAKgAAngRIAAg5IAVgWIAABVIgIAJgAg7gLIAAhVIAVAWIAAA5IgNAPgAgihPIgWgVIBwAAIgWAVg");
	this.shape_149.setTransform(171,224.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#211412").s().p("Ag3BlIAVgWIBFAAIAVAWgAAnBLIAAg6IAOgNIAIAIIAABVgAg8AMIAJgIIAOANIAAA6IgXAWgAgkAKIgLgKIALgKIBJAAIALAKIgLAKgAAngRIAAg5IAWgWIAABVIgIAJgAg8gLIAAhVIAXAWIAAA5IgOAPgAgihPIgVgVIBvAAIgVAVg");
	this.shape_150.setTransform(53.9,224.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#211412").s().p("Ag3BlIAVgWIBFAAIAVAWgAAnBLIAAg6IAOgNIAIAIIAABVgAg8AMIAJgIIAOANIAAA6IgXAWgAgkAKIgLgKIALgKIBJAAIALAKIgLAKgAAngRIAAg5IAWgWIAABVIgIAJgAg8gLIAAhVIAXAWIAAA5IgOAPgAgihPIgVgVIBvAAIgVAVg");
	this.shape_151.setTransform(36.5,224.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#211412").s().p("Ag3BlIAVgWIBFAAIAVAWgAAnBLIAAg6IANgNIAJAIIAABVgAg8AMIAJgIIAOANIAAA6IgXAWgAgkAKIgLgKIALgKIBJAAIAMAKIgMAKgAAngRIAAg5IAWgWIAABVIgJAJgAg8gLIAAhVIAXAWIAAA5IgOAPgAgihPIgVgVIBvAAIgVAVg");
	this.shape_152.setTransform(19,224.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#211412").s().p("Ag4BlIAWgWIBFAAIAVAWgAAnBLIAAg6IAOgNIAIAIIAABVgAg8AMIAJgIIANANIAAA6IgWAWgAgkAKIgLgKIALgKIBJAAIALAKIgLAKgAAngRIAAg5IAWgWIAABVIgIAJgAg8gLIAAhVIAWAWIAAA5IgNAPgAgihPIgWgVIBwAAIgVAVg");
	this.shape_153.setTransform(-101,224.9);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#211412").s().p("Ag3BlIAVgWIBFAAIAVAWgAAnBLIAAg6IAOgNIAIAIIAABVgAg8AMIAJgIIAOANIAAA6IgXAWgAgkAKIgLgKIALgKIBJAAIALAKIgLAKgAAngRIAAg5IAWgWIAABVIgIAJgAg8gLIAAhVIAXAWIAAA5IgOAPgAgihPIgVgVIBvAAIgVAVg");
	this.shape_154.setTransform(-118.4,224.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#211412").s().p("Ag3BlIAVgWIBFAAIAVAWgAAnBLIAAg6IAOgNIAIAIIAABVgAg8AMIAJgIIAOANIAAA6IgXAWgAgkAKIgLgKIALgKIBJAAIALAKIgLAKgAAngRIAAg5IAWgWIAABVIgIAJgAg8gLIAAhVIAXAWIAAA5IgOAPgAgihPIgVgVIBvAAIgVAVg");
	this.shape_155.setTransform(-135.9,224.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#211412").s().p("Ag3BlIAVgWIBEAAIAWAWgAAnBLIAAg6IANgNIAJAIIAABVgAg8AMIAJgIIAOANIAAA6IgXAWgAgkAKIgLgKIALgKIBJAAIAMAKIgMAKgAAngRIAAg5IAWgWIAABVIgJAJgAg8gLIAAhVIAXAWIAAA5IgOAPgAgihPIgVgVIBvAAIgWAVg");
	this.shape_156.setTransform(-153.3,224.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#211412").s().p("Ag3BlIAVgWIBEAAIAWAWgAAnBLIAAg6IANgNIAIAIIAABVgAg8AMIAJgIIAOANIAAA6IgXAWgAglAKIgKgKIAKgKIBKAAIAMAKIgMAKgAAngRIAAg5IAVgWIAABVIgIAJgAg8gLIAAhVIAXAWIAAA5IgOAPgAgihPIgVgVIBvAAIgWAVg");
	this.shape_157.setTransform(-170.8,224.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#211412").s().p("Ag4BlIAWgWIBEAAIAWAWgAAnBLIAAg6IANgNIAIAIIAABVgAg7AMIAIgIIANANIAAA6IgVAWgAglAKIgKgKIAKgKIBLAAIALAKIgLAKgAAngRIAAg5IAVgWIAABVIgIAJgAg7gLIAAhVIAVAWIAAA5IgNAPgAgihPIgWgVIBwAAIgWAVg");
	this.shape_158.setTransform(-188.2,224.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#211412").s().p("Ag4BlIAWgWIBEAAIAWAWgAAnBLIAAg6IANgNIAIAIIAABVgAg7AMIAIgIIANANIAAA6IgVAWgAglAKIgKgKIAKgKIBLAAIALAKIgLAKgAAngRIAAg5IAVgWIAABVIgIAJgAg7gLIAAhVIAVAWIAAA5IgNAPgAgihPIgWgVIBwAAIgWAVg");
	this.shape_159.setTransform(-325.9,224.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#211412").s().p("Ag4BlIAWgWIBEAAIAWAWgAAnBLIAAg6IANgNIAIAIIAABVgAg7AMIAIgIIANANIAAA6IgVAWgAglAKIgKgKIAKgKIBLAAIALAKIgLAKgAAngRIAAg5IAVgWIAABVIgIAJgAg7gLIAAhVIAVAWIAAA5IgNAPgAgihPIgWgVIBwAAIgWAVg");
	this.shape_160.setTransform(-343.4,224.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#211412").s().p("Ag4BlIAWgWIBEAAIAWAWgAAnBLIAAg6IANgNIAIAIIAABVgAg7AMIAIgIIANANIAAA6IgVAWgAglAKIgKgKIAKgKIBLAAIAKAKIgKAKgAAngRIAAg5IAVgWIAABVIgIAJgAg7gLIAAhVIAVAWIAAA5IgNAPgAgihPIgWgVIBwAAIgWAVg");
	this.shape_161.setTransform(-360.8,224.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135}]}).wait(1));

	// Base
	this.instance_34 = new lib.MCP_Base("synched",0);
	this.instance_34.setTransform(142.4,282.1,1.101,1.101);

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(1));

	// fill
	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#657381").s().p("Ehb1AOzQiFAAAAiEIAA5dQAAiECFAAMC3sAAAQCEAAAACEIAAZdQAACEiEAAg");
	this.shape_162.setTransform(142.5,282.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_162).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-458.7,187.3,1202.3,189.9);


(lib.MASTERWARNRPanel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// buttons
	this.instance = new lib.MASTERWARNR_systemannunciator("synched",0);
	this.instance.setTransform(28.8,165.5,1.087,1.092,0,0,0,24.9,13.2);

	this.instance_1 = new lib.MASTERWARNR_masterwarn("synched",0);
	this.instance_1.setTransform(135.3,166.4,1.087,1.092,0,0,0,24.9,13.3);

	this.instance_2 = new lib.MASTERWARNR_firewarn("synched",0);
	this.instance_2.setTransform(198.5,166.4,1.087,1.092,0,0,0,24.9,13.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#32383D","#1E1E1E"],[0,1],-1.9,-20.4,12.7,-6.7).s().p("Ag1AVQgSgKgNgPIgEgFIAAgDIgBgBIgNgdIgDgEIAAgBIAAgDIAYAAIAGASIAGALQALAQAQAHQAqAYBqADIgHAVIAAABQhsgEgsgag");
	this.shape.setTransform(5.1,112.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#292F34","#1E1E1E"],[0,1],721.8,355.4,674.5,374.4).s().p("AKYHGQCagQC6gEQBxgDCRACIAAAVgAylHGIgHgGQhEhBAEh/IAAqyIABgFIAAgOIAEAAIAAADIABABIAAAAIABADIAAABIABAAIAOAdIAAADIAAKeQgEB0A9A7QANAMAQAKg");
	this.shape_1.setTransform(120,152.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#32383D","#1E1E1E"],[0,1],265.1,-10.2,262.3,2.9).s().p("ATLE2IAAlBIgBgeIABAIIABAWIAAACIAAE/IAAABIgBAlQgBgSABgUgAvgj1IgcAAIAHgVQhsgDgqgYQgRgJgKgQQAKAOAQAKQAvAaB9ACIdjAAIgSAUIgBABgAy6kzIAAgDIABABIAAADIgBgBgAzJlTIAAgBIgBgDIACAEgAzKlZIgBgCIABAAIAAADg");
	this.shape_2.setTransform(117.2,142);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#1E1E1E","#32383D","#32383D","#1E1E1E"],[0,0.286,0.773,1],134.7,-81.4,159.2,-9.1).s().p("ACzFjIgJgNIgIgOQgIgQgFgRIgHg6IAAgBIAAglIAAgBIAAlAIAAgBIgBgXIgBgIIgRhJIgBgBIgYgnIgLgNIgBgBIABAAIgBgBQgggkhGgYQgJgBgUgFIAAAAQgRgFgLgBIAAAAQgYgDgaAAIgJAAIhIAAIABgBIASgUIA+AAQAbgBAZADIABAAIANACIASAFIAaAFIACABQAWAHAUAKIAAAAQAwAWAYAdQAJAKAHAKIAMAQIALAUIABADIATBPIABAJIABAZIAAABIAAFAIAAABIgBAIIACAxIABAJQADAeANAXIAGAMIAIALIAJAKIAAAdQgOgLgMgOg");
	this.shape_3.setTransform(225.7,153.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#26292F").s().p("ABOFTIgIgLIgHgMQgNgXgDgeIgBgJIgBgxIAAgHIAAgBIAAgBIAAlAIAAgBIgBgZIgBgJIgThPIgBgDIgLgUIgLgQQgFgKgJgKQgZgdgvgWQBZANBSAOIAAKeIgIgKg");
	this.shape_4.setTransform(237.6,153.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#222222").s().p("AyLGyQgQgKgNgMQg9g7AEh0IAAqeIAAABIAEAFQANARATALQArAZBuAEIABgBIAbABIdQAAIBIAAIAJAAQAagBAYAEIAAAAQALABARAFIAAAAQAUAFAJABQBIAXAgAkIABABIgBAAIABABIALAOIAYAmIABABIARBJIABAJIgBgIIACAfIAAFBQgBATABASIAAABIAHA7QAFARAIAQIAIANIAJANQAMAPAOAKIAAAvQiRgChxADQi6AEiaAQg");
	this.shape_5.setTransform(121.1,154.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2D3239").s().p("AQxAqIAAAAQgUgJgYgIIgCAAIgagFIgSgFIgNgCIgBAAQgZgDgbABIg+AAI9iAAQh9gDgvgXQgQgKgKgOIgHgLIgGgSMAm9AAAIAACJQhSgOhcgNg");
	this.shape_6.setTransform(121.5,114.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1A1A1A").s().p("AgsHGIAAuLIAVAAIAAAOIgBAFIAAKyQgEB/BCBBIAHAGg");
	this.shape_7.setTransform(-3.6,152.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base fill
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#32383D","#1E1E1E"],[0,1],387.1,22.6,384.3,35.7).s().p("AAIATIAAgDIAAABIAAADIAAgBgAgFgLIAAgBIgBgDIACAEgAgHgRIAAgCIAAAAIABADg");
	this.shape_8.setTransform(-4.8,109.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2D3239").s().p("Az3HGIAAuLIAZAAIABADIAAABIAAgEMAnUAAAIAAOLgAzNmdIABABIAAgDIgBgBgAzcm+IAAABIACAAIgDgEIABADg");
	this.shape_9.setTransform(119.1,152.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.1,107.2,254.4,90.9);


(lib.MASTERWARNLPanel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// buttons
	this.instance = new lib.MASTERWARNL_systemannunciator("synched",0);
	this.instance.setTransform(157.5,39.2,1.098,1.088,0,0,0,24.9,13.2);

	this.instance_1 = new lib.MASTERWARNL_masterwarn("synched",0);
	this.instance_1.setTransform(91.6,40.1,1.098,1.088,0,0,0,24.9,13.2);

	this.instance_2 = new lib.MASTERWARNL_firewarn("synched",0);
	this.instance_2.setTransform(28,40.1,1.098,1.088,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#292F34","#1E1E1E"],[0,1],-728.7,354.1,-680.9,373).s().p("ASNHEQAQgKANgMQA9g7gEhzIAAqcIAAgCIAPgdIAAAAIAAgBIACgFIAAgCIAEAAIAAAOIABAEIAAKwQAEB/hFBAIgGAGgAz5HEIAAgVQCTgBByACQC8AECbAQg");
	this.shape.setTransform(115.8,26.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#32383D","#1E1E1E"],[0,1],-264.5,-17.4,-261.6,-4.3).s().p("Az2GGIAKgKQAngzgIhbIAAgBIAAlAQADhFATgrQAIgSAPgWIARgUQAZgdAwgVQAUgKAYgHIADgBIAagFQATgGANgBQAZgDAcABIAAAAIAJAAIepAAQB/gCAugaQAegRALgkIAXAAIgBADIgBAEIAAABIAAAAIgPAdIAAADIgEAFQgMARgUAKQgxAdiGABI+qAAIgJAAQgbAAgYADIgBAAQgKABgRAFIAAAAIgdAGQhKAYggAkIAAAAQgaAfgKAXQgSAogCBAIAAFAQAGBlgrA3QgMAPgPALg");
	this.shape_1.setTransform(115.6,23);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#26292F").s().p("AhXlAQBUgOBbgNQgxAVgYAeIgPAUQgPAVgJASQgTAsgCBFIAAE/IAAACQAHBagnAzIgKAKg");
	this.shape_2.setTransform(-2.8,27.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#222222").s().p("AqSGwQibgQi8gDQhygDiTABIAAgtQAPgLAMgPQArg3gGhlIAAlAQAChAASgoQAKgXAagfIAAAAQAggkBKgYIAdgGIAAAAQARgFALgBIAAAAQAYgDAbAAIAJAAIeqAAQCGgBAygdQATgKAMgRIAEgFIAAKbQAEB0g9A6QgNAMgQAKg");
	this.shape_3.setTransform(114.7,28.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2D3239").s().p("AzrhEMAnWAAAQgLAkgdARQguAYiAACI+pAAIgJAAIAAAAQgcgBgZADQgMABgTAGIgaAFIgDABQgYAHgUAJQhdANhUAOg");
	this.shape_4.setTransform(114.4,-12);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1A1A1A").s().p("AgsHEIAGgGQBDhAgEh/IAAqwIgBgEIAAgOIAVAAIAAOHg");
	this.shape_5.setTransform(240.7,26.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base fill
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2D3239").s().p("A0DHEIAAuHMAoHAAAIAAOHg");
	this.shape_6.setTransform(116.8,26.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.6,-18.9,256.9,90.5);


(lib.REFISPanel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Buttons & Symbols
	this.instance = new lib.LEFIS_vsd("synched",0);
	this.instance.setTransform(-207,220.2,1.102,1.108,0,0,0,1.5,0);

	this.instance_1 = new lib.LEFIS_wpt("synched",0);
	this.instance_1.setTransform(-248.4,304.2,1.102,1.108,0,0,0,1.5,0);

	this.instance_2 = new lib.LEFIS_terr("synched",0);
	this.instance_2.setTransform(-87.4,304.2,1.102,1.108,0,0,0,1.5,0);

	this.instance_3 = new lib.LEFIS_pos("synched",0);
	this.instance_3.setTransform(-127.7,304.2,1.102,1.108,0,0,0,1.5,0);

	this.instance_4 = new lib.LEFIS_data("synched",0);
	this.instance_4.setTransform(-167.4,304.2,1.102,1.108,0,0,0,1.5,0);

	this.instance_5 = new lib.LEFIS_arpt("synched",0);
	this.instance_5.setTransform(-207,304.2,1.102,1.108,0,0,0,1.5,0);

	this.instance_6 = new lib.LEFIS_sta("synched",0);
	this.instance_6.setTransform(-288.1,304.2,1.102,1.108,0,0,0,1.5,0);

	this.instance_7 = new lib.LEFIS_wxr("synched",0);
	this.instance_7.setTransform(-327.8,304.2,1.102,1.108,0,0,0,1.5,0);

	this.instance_8 = new lib.REFIS_std("synched",0);
	this.instance_8.setTransform(-113.1,212.7,1.1,1.098,0,0,0,12.8,12.8);

	this.instance_9 = new lib.REFIS_tfc("synched",0);
	this.instance_9.setTransform(-171.2,263.4,1.1,1.098,0,0,0,12.8,12.8);

	this.instance_10 = new lib.REFIS_ctr("synched",0);
	this.instance_10.setTransform(-246.8,263.5,1.1,1.098,0,0,0,12.8,12.8);

	this.instance_11 = new lib.REFIS_rst("synched",0);
	this.instance_11.setTransform(-304.6,212.7,1.1,1.098,0,0,0,12.8,12.8);

	this.instance_12 = new lib.GEN_switch04center("synched",0);
	this.instance_12.setTransform(-82.5,265,1.1,1.098,0,0,0,6.6,0);

	this.instance_13 = new lib.GEN_switchbase05("synched",0);
	this.instance_13.setTransform(-82.8,264.8,1.1,1.098,0,0,0,18.5,18.5);

	this.instance_14 = new lib.GEN_switch04center("synched",0);
	this.instance_14.setTransform(-333.9,265,1.1,1.098,0,0,0,6.6,0);

	this.instance_15 = new lib.GEN_switchbase05("synched",0);
	this.instance_15.setTransform(-334.2,264.8,1.1,1.098,0,0,0,18.5,18.5);

	this.instance_16 = new lib.GEN_roundbutton02("synched",0);
	this.instance_16.setTransform(-176.4,198,1.1,1.098);

	this.instance_17 = new lib.GEN_knob10("synched",0);
	this.instance_17.setTransform(-171.2,263.4,1.1,1.098);

	this.instance_18 = new lib.GEN_knob10("synched",0);
	this.instance_18.setTransform(-246.9,263.4,1.1,1.098,15);

	this.instance_19 = new lib.GEN_knob21("synched",0);
	this.instance_19.setTransform(-304.6,212.7,1.1,1.098);

	this.instance_20 = new lib.GEN_knob23("synched",0);
	this.instance_20.setTransform(-304.6,212.8,1.1,1.098,30);

	this.instance_21 = new lib.GEN_knob21("synched",0);
	this.instance_21.setTransform(-113.1,212.7,1.1,1.098);

	this.instance_22 = new lib.GEN_knob23("synched",0);
	this.instance_22.setTransform(-113.1,212.8,1.1,1.098,-30);

	this.instance_23 = new lib.GEN_roundbutton02("synched",0);
	this.instance_23.setTransform(-240,198.2,1.1,1.098);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVAiIAAhDIAnAAQAEAAAAAEQAAAFgEAAIgdAAIAAAPIAYAAQAAAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAIABADIgBAEIgCABIgYAAIAAAYIAdAAQAEABAAAFQAAAEgEAAg");
	this.shape.setTransform(-159,232.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSAXQgFgJAAgOQAAgMAFgIQADgGAHgEQAFgDAEgBQALABAFAEIAFAEIABACQABAEgEACQgDACgDgDQgFgHgGABQgJABgEAIQgDAHAAAIQAAALADAFQAFAKAIgBQAEAAADgCQADgBACgEIAAgMIgOAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAIAAgEIAAgBQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAAAIAUAAIACABIABABIAAASQAAACgCAEQgCADgEACQgDAEgMABQgLAAgIgMg");
	this.shape_1.setTransform(-164.9,232.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWAfIAAg9IACgDIADAAQAEgBABADIAZAwIAAgvQABgDAEAAQAEAAAAADIAAA8QAAAEgDAAQgDABgDgCIgagxIAAAvQAAADgEAAQgEAAgBgDg");
	this.shape_2.setTransform(-170.8,232.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAPAfIgBgHIgZAAIgEAHQgBAEgEgBIgEgBQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAXg8QABgDABAAQADAAACADIATA9QAAADgEAAIgBAAQgDAAgCgDgAgJAPIAAgBIAUAAIgLgfIgJAfIAAAAg");
	this.shape_3.setTransform(-176.6,232.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVAeIAAg/IATAAQAJAAAFACQAHAEAAAMQAAAFgCADQgDAHgLABIASAaQAAAAAAABQABAAAAABQAAAAAAABQAAAAgBABIgCACQgEADgCgEIgSgfIgHAAIAAAdIgBADIgDABQgFgBAAgDgAgMgGIAMAAQAEAAADgDQADgCAAgEQAAgJgKgBIgMAAg");
	this.shape_4.setTransform(-182.3,232.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AARAEIgiAAIgDgCIAAgCIABgCIACgBIAjAAIACABIABACIgBADIgCABIgBAAg");
	this.shape_5.setTransform(-202.5,264);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTAeIAAg/IATAAQAIAAAFACQAHAFAAALQAAAFgCAEQgBAEgFACQgEABgHAAIgLAAIAAAdIgBAEIgEABQgEgBAAgEgAgKgGIAKAAQAGAAADgDQACgBAAgFQABgJgLAAIgLAAg");
	this.shape_6.setTransform(-327.5,284.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgSAWQgEgJgBgNQABgMAEgJQAGgMAMAAQANAAAGAMQAEAKAAALQABAMgFAJQgGANgNAAQgMAAgGgMgAgLgPQgCAHAAAIQAAAIACAHQAFAKAGAAQAHAAAEgKQACgFAAgKQAAgJgCgGQgEgJgHAAQgHAAgEAJg");
	this.shape_7.setTransform(-332.7,284.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVAfIAAg9IABgDIACAAQAFgBABADIAaAwIAAgvQAAgDADAAQAGAAAAADIAAA8QAAAEgFAAQgCABgCgCIgagxIAAAvQgBADgEAAQgFAAABgDg");
	this.shape_8.setTransform(-338.5,284.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgCAiIgCgDIAAg9IACgDIACAAQAEAAAAADIAAA9QAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAIgCABIgCgBg");
	this.shape_9.setTransform(-342.6,284.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgVAeIAAhAIAnAAQAEACAAADQAAAGgEgBIgdAAIAAAPIAXAAQADAAAAAEQAAAFgDAAIgXAAIAAAeQAAAFgGAAQgEgBAAgEg");
	this.shape_10.setTransform(-310.6,265.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgVAeIAAhAIAnAAQAEACAAADQAAAGgEgBIgdAAIAAAPIAXAAQADAAAAAEQAAAFgDAAIgXAAIAAAeQAAAFgGAAQgEgBAAgEg");
	this.shape_11.setTransform(-316.4,265.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgSAWQgEgJgBgNQABgMAEgJQAGgMAMAAQANAAAGAMQAEAKAAALQABAMgFAJQgGANgNAAQgMAAgGgMgAgLgPQgCAHAAAIQAAAIACAHQAFAKAGAAQAHAAAEgKQACgFAAgKQAAgJgCgGQgEgJgHAAQgHAAgEAJg");
	this.shape_12.setTransform(-322,265.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAAAfIAAg2IgGAAQgDgBAAgFQAAgDAEgBIAKAAIADABQABAAAAAAQAAAAABABQAAAAAAABQAAAAAAAAIAAA9QAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAIgDAAQgFAAAAgDg");
	this.shape_13.setTransform(-323.7,244.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgVAeIAAg/IATAAQAJAAAFACQAHAEAAAMQAAAFgCADQgDAHgLABIASAaQAAAAAAABQABAAAAABQAAAAAAABQAAAAgBABIgCACQgEADgCgEIgSgfIgHAAIAAAdIgBADIgDABQgFgBAAgDgAgMgGIAMAAQAEAAADgDQADgCAAgEQAAgJgKgBIgMAAg");
	this.shape_14.setTransform(-330.5,244.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgSAWQgFgJABgNQgBgMAFgJQAGgMAMAAQANAAAFAMQAGAKgBALQAAAMgEAJQgGANgNAAQgMAAgGgMgAgLgPQgCAHAAAIQAAAIACAHQAFAKAGAAQAHAAAEgKQACgFAAgKQAAgJgCgGQgDgJgIAAQgHAAgEAJg");
	this.shape_15.setTransform(-335.8,244.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAAAiIgCAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIgYg7QgCgEAEgBQAFgBABADIATAzIATgzQACgDAEABQAFABgBAEIgZA7QAAABgBABQAAAAAAABQgBAAAAAAQgBAAgBAAIAAAAg");
	this.shape_16.setTransform(-341.7,244.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgBAXIgCgCIAAgRIgPAAQgDAAAAgEQAAgCADAAIAPAAIAAgRQAAgEADAAQAEAAAAAEIAAARIAPAAIADABIAAABQAAAEgDAAIgPAAIAAARQAAADgEAAIgBgBg");
	this.shape_17.setTransform(-138.8,264);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgVAfIAAg9IABgDIACAAQAFgBABADIAZAwIAAgvQABgBAAAAQAAgBABAAQAAgBABAAQABAAAAAAQAGAAgBADIAAA8QAAAEgDAAQgDABgDgCIgZgxIAAAvQgBADgEAAQgEAAAAgDg");
	this.shape_18.setTransform(-213.3,242.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgWAjIAAhCQABgDAEAAQAEAAABADIAAA4IAfAAQAEgBAAAGIAAADQgBAAAAABQAAAAgBAAQAAAAgBAAQAAABgBAAg");
	this.shape_19.setTransform(-219,242.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgTAeIAAhAIATAAQAIAAAFADQAHAFAAALQAAAFgCADQgBAFgFACQgEACgHgBIgLAAIAAAdIgBAEIgEABQgEgBAAgEgAgKgGIAKAAQAGAAADgDQACgCAAgEQABgJgLgBIgLAAg");
	this.shape_20.setTransform(-224.3,242.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgTAeIAAhAIATAAQAIAAAFAEQAHADAAAMQAAAFgCADQgBAFgFACQgEABgHAAIgLAAIAAAdIgBAEIgEABQgEgCAAgDgAgKgGIAKAAQAGAAADgDQACgCAAgEQABgJgLgBIgLAAg");
	this.shape_21.setTransform(-228.9,232.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAPAfIgBgHIgZAAIgEAHQgBAEgEgBIgEgBQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAXg8QABgDABAAQADAAACADIATA9QAAADgEAAIgBAAQgDAAgCgDgAgJAPIAAgBIAUAAIgLgfIgJAfIAAAAg");
	this.shape_22.setTransform(-234.2,232.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AARAhQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIAAgqIgNAYQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAAAAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBIgMgWIAAApIgBADIgEABQgEAAAAgDIAAg8QAAgEAEAAQAEgBACADIAOAfIAPgfQACgDAEABIADABIABADIAAA7QAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAIgEABIgDgBg");
	this.shape_23.setTransform(-240.1,232.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgVAeIAAg/IATAAQAJAAAFACQAHAEAAAMQAAAFgCADQgDAHgLABIASAaQAAAAAAABQABAAAAABQAAAAAAABQAAAAgBABIgCACQgEADgCgEIgSgfIgHAAIAAAdIgBADIgDABQgFgBAAgDgAgMgGIAMAAQAEAAADgDQADgCAAgEQAAgJgKgBIgMAAg");
	this.shape_24.setTransform(-252.7,232.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgSAWQgFgJABgNQgBgMAFgJQAGgMAMAAQANAAAFAMQAGAKAAALQgBAMgEAJQgHANgMAAQgMAAgGgMgAgKgPQgDAHAAAIQAAAIADAHQAEAKAGAAQAHAAAEgKQACgFAAgKQAAgJgCgGQgDgJgIAAQgHAAgDAJg");
	this.shape_25.setTransform(-258.1,232.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAAAiIgCAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIgYg7QgCgEAEgBQAFgBABADIATAzIATgzQACgDAEABQAFABgBAEIgZA7QAAABgBABQAAAAAAABQgBAAAAAAQgBAAgBAAIAAAAg");
	this.shape_26.setTransform(-264,232.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgTAeIAAg/IATAAQAIAAAFACQAHAEAAAMQAAAFgCAEQgBAEgFACQgEABgHABIgLAAIAAAcIgBADIgEACQgEgCAAgDgAgKgGIAKAAQAGAAADgDQACgBAAgFQABgJgLAAIgLAAg");
	this.shape_27.setTransform(-269.2,242.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgTAeIAAg/IATAAQAIAAAFACQAHAEAAAMQAAAFgCAEQgBAEgFACQgEABgHABIgLAAIAAAcIgBADIgEACQgEgCAAgDgAgKgGIAKAAQAGAAADgDQACgBAAgFQABgJgLAAIgLAAg");
	this.shape_28.setTransform(-274.2,242.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAQAfIgDgHIgZAAIgDAHQAAAEgGgBIgDgBQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAXg8QAAgDACAAQAEAAABADIAUA9QAAADgGAAIAAAAQgDAAgBgDgAgJAPIAAgBIAUAAIgLgfIgJAfIAAAAg");
	this.shape_29.setTransform(-279.5,242.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgSAWQgFgJABgNQgBgMAFgJQAGgMAMAAQANAAAFAMQAGAKAAALQgBAMgEAJQgHANgMAAQgMAAgGgMgAgKgPQgDAHAAAIQAAAIADAHQAEAKAGAAQAHAAAEgKQACgFAAgKQAAgJgCgGQgDgJgIAAQgHAAgDAJg");
	this.shape_30.setTransform(-267.5,179.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgVAeIAAg/IATAAQAJAAAFACQAHAEAAAMQAAAFgCADQgDAHgLABIASAaQAAAAAAABQABAAAAABQAAAAAAABQAAAAgBABIgCACQgEADgCgEIgSgfIgHAAIAAAdIgBADIgDABQgFgBAAgDgAgMgGIAMAAQAEAAADgDQADgCAAgEQAAgJgKgBIgMAAg");
	this.shape_31.setTransform(-273.1,179.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAPAfIgCgHIgZAAIgCAHQgCAEgFgBIgDgBQAAgBAAAAQgBAAAAgBQAAAAABAAQAAgBAAAAIAWg8QABgDACAAQADAAACADIATA9QAAADgEAAIgBAAQgDAAgCgDgAgJAPIAAgBIAUAAIgKgfIgKAfIAAAAg");
	this.shape_32.setTransform(-278.5,179.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgVAiIAAhDIATAAQAJAAAEACQAIAEAAAMQAAANgIABQAEAAAEADQADAGAAAHQAAAJgGAFQgFAFgKAAgAgMAZIAMAAQAFAAAEgCQADgDAAgFQAAgIgFgDIgGgDIgNAAgAgMgFIAGAAQAKAAADgEQADgBAAgFQgBgJgJAAIgMAAg");
	this.shape_33.setTransform(-284.3,179.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgTAaQgCgCgBgFQgBgFAEgBIADAAIACACQABAFAEADIAIACQAFACADgDQAGgCAAgEQABgGgDgCQgCgEgJgEIgIgCIgGgCQgFgCgBgFQgCgEABgGQACgHAGgFQAFgCAFAAIAIABQAFAAAEAEQADAEABADQAAABABAAQAAABAAAAQAAABAAAAQAAABAAABIgDACIgEAAQAAgBAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAQgCgFgFgBQgFgCgEABQgGADAAAFQAAAHAHACQAYAHADAKIABAEIgBAGQgBAIgIADQgFADgIAAQgOAAgFgIg");
	this.shape_34.setTransform(-297.6,172);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgWAfIAAg9IACgDIADAAQAEgBABADIAZAwIAAgvQABgDAEAAQAEAAAAADIAAA8QAAAEgEAAQgCABgDgCIgagxIAAAvQAAADgEAAQgFAAAAgDg");
	this.shape_35.setTransform(-303.4,172);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgCAhIgBgCIAAg9IABgCIACgBQAFAAAAADIAAA9QgBABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAIgCAAIgCgBg");
	this.shape_36.setTransform(-307.5,172);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AARAhQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIAAgqIgNAYQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAAAAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBIgMgWIAAApIgBADIgEABQgEAAAAgDIAAg8QAAgEAEAAQAEgBACADIAOAfIAPgfQACgDAEABIADABIABADIAAA7QAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAIgEABIgDgBg");
	this.shape_37.setTransform(-311.6,172);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgSAWQgFgJAAgNQAAgMAFgJQAGgMAMAAQANAAAFAMQAFAKABALQAAAMgFAJQgHANgMAAQgMAAgGgMgAgKgPQgDAHAAAIQAAAIADAHQADAKAHAAQAHAAAEgKQACgFAAgKQAAgJgCgGQgDgJgIAAQgHAAgDAJg");
	this.shape_38.setTransform(-325.8,179.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgCAhIgCgCIAAg8IACgEIACgBQAEAAAAAFIAAA9QAAAAAAAAQAAABAAAAQgBAAAAABQgBAAAAAAIgCAAIgCgBg");
	this.shape_39.setTransform(-329.7,179.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgYAiIAAhDIAUAAQANAAAIAKQAIAKgBANQAAANgHAKQgIALgMAAgAgOAYIALAAQAHAAAFgIQAFgHAAgJQAAgJgFgHQgGgIgGAAIgLAAg");
	this.shape_40.setTransform(-333.7,179.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAPAfIgBgHIgZAAIgDAHQgCAEgEgBIgEgBQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAWg8QACgDABAAQADAAACADIATA9QAAADgEAAIgBAAQgDAAgCgDgAgJAPIAAgBIAUAAIgLgfIgJAfIAAAAg");
	this.shape_41.setTransform(-339.4,179.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgVAeIAAg/IATAAQAJAAAFACQAHAEAAAMQAAAFgCADQgDAHgLABIASAaQAAAAAAABQABAAAAABQAAAAAAABQAAAAgBABIgCACQgEADgCgEIgSgfIgHAAIAAAdIgBADIgDABQgFgBAAgDgAgMgGIAMAAQAEAAADgDQADgCAAgEQAAgJgKgBIgMAAg");
	this.shape_42.setTransform(-345.1,179.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAAAiIgCAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIgYg7QgCgEAEgBQAFgBABADIATAzIATgzQACgDAEABQAFABgBAEIgZA7QAAABgBABQAAAAAAABQgBAAAAAAQgBAAgBAAIAAAAg");
	this.shape_43.setTransform(-235.2,172);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgTAeIAAg/IATAAQAIAAAFADQAHADAAAMQAAAFgCAEQgBAFgFABQgEABgHABIgLAAIAAAcIgBADIgEABQgEAAAAgEgAgKgGIAKAAQAGAAADgDQACgBAAgFQABgJgLAAIgLAAg");
	this.shape_44.setTransform(-240.8,172);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgVAfIAAhAIAnAAQAEAAAAAEQAAAFgEABIgdAAIAAAOIAXAAQADAAAAAFQAAADgDABIgXAAIAAAfQAAADgGAAQgEgBAAgCg");
	this.shape_45.setTransform(-246.2,172);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgTAaQgCgCgBgFQgBgFAEgBIADAAIACACQABAFAEADIAIACQAFACADgDQAGgCAAgEQABgGgDgCQgCgEgJgEIgIgCIgGgCQgFgCgBgFQgCgEABgGQACgHAGgFQAFgCAFAAIAIABQAFAAAEAEQADAEABADQAAABABAAQAAABAAAAQAAABAAAAQAAABAAABIgDACIgEAAQAAgBAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAQgCgFgFgBQgFgCgEABQgGADAAAFQAAAHAHACQAYAHADAKIABAEIgBAGQgBAIgIADQgFADgIAAQgOAAgFgIg");
	this.shape_46.setTransform(-169.3,172);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgVAeIAAg/IATAAQAJAAAFACQAHAEAAAMQAAAFgCADQgDAHgLABIASAaQAAAAAAABQABAAAAABQAAAAAAABQAAAAgBABIgCACQgEADgCgEIgSgfIgHAAIAAAdIgBADIgDABQgFgBAAgDgAgMgGIAMAAQAEAAADgDQADgCAAgEQAAgJgKgBIgMAAg");
	this.shape_47.setTransform(-174.8,172);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgDAeIAAg2IgPAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBIgBgDQAAgDAEgBIAlAAQAEABAAADQAAAEgEABIgPAAIAAA2IgBADIgDABQgDAAAAgEg");
	this.shape_48.setTransform(-180.2,172);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AARAhQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIAAgqIgNAYQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAAAAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBIgMgWIAAApIgBADIgEABQgEAAAAgDIAAg8QAAgEAEAAQAEgBACADIAOAfIAPgfQACgDAEABIADABIABADIAAA7QAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAIgEABIgDgBg");
	this.shape_49.setTransform(-185.8,172);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgTAeIAAg/IATAAQAIAAAFACQAHAFAAALQAAAFgCAEQgBAEgFACQgEABgHAAIgLAAIAAAdIgBAEIgEABQgEgBAAgEgAgKgGIAKAAQAGAAADgDQACgBAAgFQABgJgLAAIgLAAg");
	this.shape_50.setTransform(-75.6,284.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgSAWQgEgJgBgNQABgMAEgJQAGgMAMAAQANAAAGAMQAEAKAAALQABAMgFAJQgGANgNAAQgMAAgGgMgAgLgPQgCAHAAAIQAAAIACAHQAFAKAGAAQAHAAAEgKQACgFAAgKQAAgJgCgGQgEgJgHAAQgHAAgEAJg");
	this.shape_51.setTransform(-80.8,284.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgVAfIAAg9IABgDIACAAQAEgBACADIAaAwIAAgvQAAgDADAAQAGAAAAADIAAA8QAAAEgFAAQgCABgCgCIgagxIAAAvQgBADgEAAQgFAAABgDg");
	this.shape_52.setTransform(-86.6,284.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgCAiIgCgDIAAg9IACgDIACAAQAEAAAAADIAAA9QAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAIgCABIgCgBg");
	this.shape_53.setTransform(-90.7,284.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgVAeIAAhAIAnAAQAEACAAADQAAAGgEgBIgdAAIAAAPIAXAAQADAAAAAEQAAAFgDAAIgXAAIAAAeQAAAFgGAAQgEgBAAgEg");
	this.shape_54.setTransform(-94.6,265.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgVAeIAAhAIAnAAQAEACAAADQAAAGgEgBIgdAAIAAAPIAXAAQADAAAAAEQAAAFgDAAIgXAAIAAAeQAAAFgGAAQgEgBAAgEg");
	this.shape_55.setTransform(-100.4,265.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgSAWQgFgJAAgNQAAgMAFgJQAGgMAMAAQANAAAFAMQAGAKAAALQgBAMgEAJQgHANgMAAQgMAAgGgMgAgKgPQgDAHAAAIQAAAIADAHQAEAKAGAAQAHAAAEgKQACgFAAgKQAAgJgCgGQgDgJgIAAQgHAAgDAJg");
	this.shape_56.setTransform(-106.1,265.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgNAiQgFAAgBgFIAAgCQAAgJAFgHQADgHALgHQACgCADgEQAEgEAAgCQAAgEgDgDQgCgCgEAAQgHgBgBAHQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAABIgDAAQgEAAAAgDIAAgBQAAgGAFgFQAFgDAHAAQAIAAAFADQAFAGAAAIQAAAIgHAGIgNALQgHAGAAAKIAaAAQADABAAAFIgBACIgCABg");
	this.shape_57.setTransform(-76.7,244.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgVAeIAAg/IATAAQAJAAAFACQAHAEAAAMQAAAFgCADQgDAHgLABIASAaQAAAAAAABQABAAAAABQAAAAAAABQAAAAgBABIgCACQgEADgCgEIgSgfIgHAAIAAAdIgBADIgDABQgFgBAAgDgAgMgGIAMAAQAEAAADgDQADgCAAgEQAAgJgKgBIgMAAg");
	this.shape_58.setTransform(-84.5,244.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgSAWQgFgJAAgNQAAgMAFgJQAGgMAMAAQANAAAFAMQAGAKAAALQgBAMgEAJQgHANgMAAQgMAAgGgMgAgKgPQgDAHAAAIQAAAIADAHQAEAKAGAAQAHAAAEgKQACgFAAgKQAAgJgCgGQgDgJgIAAQgHAAgDAJg");
	this.shape_59.setTransform(-89.9,244.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAAAiIgCAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIgYg7QgCgEAEgBQAFgBABADIATAzIATgzQACgDAEABQAFABgBAEIgZA7QAAABgBABQAAAAAAABQgBAAAAAAQgBAAgBAAIAAAAg");
	this.shape_60.setTransform(-95.8,244.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AAPAfIgCgHIgZAAIgCAHQgBAEgGgBIgDgBQAAgBAAAAQgBAAAAgBQAAAAABAAQAAgBAAAAIAWg8QABgDACAAQAEAAABADIAUA9QgBADgFAAIAAAAQgDAAgCgDgAgJAPIAAgBIAUAAIgKgfIgKAfIAAAAg");
	this.shape_61.setTransform(-81.7,181.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgTAeIAAhAIATAAQAIABAFADQAHADAAAMQAAAFgCADQgBAGgFABQgEACgHAAIgLAAIAAAcIgBADIgEABQgEgBAAgDgAgKgGIAKAAQAGAAADgDQACgCAAgEQABgJgLgBIgLAAg");
	this.shape_62.setTransform(-87.1,181.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AAOAfIAAgfIgaAAIAAAfQAAABgBAAQAAABAAAAQAAAAgBAAQAAABAAAAIgDAAIgEgBIgBgCIAAg9IABgDIAEAAQAFAAAAADIAAAVIAaAAIAAgWIAAAAQABgBAAAAQAAgBABAAQAAAAABAAQABAAABAAIADAAQAAABAAAAQABAAAAAAQAAABAAAAQAAAAAAABIAAA9IgBACIgDABQgEAAgBgDg");
	this.shape_63.setTransform(-92.7,181.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgVAfIAAg9IABgDIACAAQAEgBACADIAaAwIAAgvQAAgBAAAAQAAgBABAAQAAgBABAAQABAAAAAAQAGAAAAADIAAA8QAAAEgFAAQgCABgCgCIgagxIAAAvQgBADgEAAQgFAAABgDg");
	this.shape_64.setTransform(-134.3,180.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgCAiIgCgDIAAg8IACgEIACgBQAEAAAAAFIAAA9QAAAAAAAAQAAABAAAAQgBAAAAABQgBAAAAAAIgCAAIgCAAg");
	this.shape_65.setTransform(-138.4,180.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgSAWQgEgJAAgNQAAgMAEgJQAGgMAMAAQANAAAGAMQAEAKAAALQABAMgFAJQgGANgNAAQgMAAgGgMgAgLgPQgCAHAAAIQAAAIACAHQAFAKAGAAQAHAAAEgKQACgFAAgKQAAgJgCgGQgEgJgHAAQgHAAgEAJg");
	this.shape_66.setTransform(-104.8,172);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgVAeIAAg/IATAAQAJAAAFACQAHAEAAAMQAAAFgCADQgDAHgLABIASAaQAAAAAAABQABAAAAABQAAAAAAABQAAAAgBABIgCACQgEADgCgEIgSgfIgHAAIAAAdIgBADIgDABQgFgBAAgDgAgMgGIAMAAQAEAAADgDQADgCAAgEQAAgJgKgBIgMAAg");
	this.shape_67.setTransform(-110.3,172);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AAQAfIgDgHIgZAAIgDAHQAAAEgGgBIgDgBQAAgBAAAAQgBAAAAgBQAAAAABAAQAAgBAAAAIAXg8QAAgDACAAQAEAAABADIAUA9QAAADgGAAIAAAAQgDAAgBgDgAgJAPIAAgBIAUAAIgLgfIgJAfIAAAAg");
	this.shape_68.setTransform(-115.7,172);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgVAiIAAhDIAUAAQAHAAAFACQAHAEAAAMQAAANgHABQAEAAADADQAEAGAAAHQAAAJgFAFQgGAFgLAAgAgMAZIAMAAQAFAAAEgCQADgDAAgFQAAgIgEgDIgIgDIgMAAgAgMgFIAGAAQAJAAAEgEQADgBgBgFQABgJgKAAIgMAAg");
	this.shape_69.setTransform(-121.6,172);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Base
	this.instance_24 = new lib.REFIS_Base("synched",0);
	this.instance_24.setTransform(-208.5,243.7,1.1,1.098);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(1));

	// fill
	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#657381").s().p("A3XMpIAA5RMAuvAAAIAAZRg");
	this.shape_70.setTransform(-208.5,243.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_70).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-358.1,162.7,299.3,162);


(lib.LEFISPanel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Buttons & Symbols
	this.instance = new lib.GEN_switch04up("synched",0);
	this.instance.setTransform(-82.5,242,0.927,0.932,0,0,0,6.7,0);

	this.instance_1 = new lib.LEFIS_vsd("synched",0);
	this.instance_1.setTransform(-207,195.6,1.102,1.108,0,0,0,1.5,0);

	this.instance_2 = new lib.LEFIS_std("synched",0);
	this.instance_2.setTransform(-113.1,188.6,1.102,1.108,0,0,0,12.8,12.8);

	this.instance_3 = new lib.LEFIS_tfc("synched",0);
	this.instance_3.setTransform(-171.3,239.8,1.102,1.108,0,0,0,12.8,12.8);

	this.instance_4 = new lib.LEFIS_ctr("synched",0);
	this.instance_4.setTransform(-247.1,239.9,1.102,1.108,0,0,0,12.8,12.8);

	this.instance_5 = new lib.LEFIS_rst("synched",0);
	this.instance_5.setTransform(-305,188.6,1.102,1.108,0,0,0,12.8,12.8);

	this.instance_6 = new lib.GEN_knob10("synched",0);
	this.instance_6.setTransform(-171.3,239.8,1.102,1.108);

	this.instance_7 = new lib.GEN_knob10("synched",0);
	this.instance_7.setTransform(-247.1,239.8,1.102,1.108,-15);

	this.instance_8 = new lib.GEN_knob21("synched",0);
	this.instance_8.setTransform(-305,188.6,1.102,1.108);

	this.instance_9 = new lib.GEN_knob23("synched",0);
	this.instance_9.setTransform(-305,188.7,1.102,1.108,30);

	this.instance_10 = new lib.GEN_knob21("synched",0);
	this.instance_10.setTransform(-113.1,188.6,1.102,1.108);

	this.instance_11 = new lib.GEN_knob23("synched",0);
	this.instance_11.setTransform(-113.1,188.7,1.102,1.108,-30);

	this.instance_12 = new lib.GEN_switchbase05("synched",0);
	this.instance_12.setTransform(-82.7,241.2,1.102,1.108,0,0,0,18.5,18.5);

	this.instance_13 = new lib.GEN_switch04up("synched",0);
	this.instance_13.setTransform(-334.3,242,0.927,0.932,0,0,0,6.7,0);

	this.instance_14 = new lib.GEN_switchbase05("synched",0);
	this.instance_14.setTransform(-334.6,241.2,1.102,1.108,0,0,0,18.5,18.5);

	this.instance_15 = new lib.GEN_roundbutton02("synched",0);
	this.instance_15.setTransform(-176.5,173.8,1.102,1.108);

	this.instance_16 = new lib.LEFIS_wpt("synched",0);
	this.instance_16.setTransform(-248.4,279.6,1.102,1.108,0,0,0,1.5,0);

	this.instance_17 = new lib.LEFIS_terr("synched",0);
	this.instance_17.setTransform(-87.4,279.6,1.102,1.108,0,0,0,1.5,0);

	this.instance_18 = new lib.LEFIS_pos("synched",0);
	this.instance_18.setTransform(-127.7,279.6,1.102,1.108,0,0,0,1.5,0);

	this.instance_19 = new lib.LEFIS_data("synched",0);
	this.instance_19.setTransform(-167.4,279.6,1.102,1.108,0,0,0,1.5,0);

	this.instance_20 = new lib.LEFIS_arpt("synched",0);
	this.instance_20.setTransform(-207,279.6,1.102,1.108,0,0,0,1.5,0);

	this.instance_21 = new lib.LEFIS_sta("synched",0);
	this.instance_21.setTransform(-288.1,279.6,1.102,1.108,0,0,0,1.5,0);

	this.instance_22 = new lib.LEFIS_wxr("synched",0);
	this.instance_22.setTransform(-327.8,279.6,1.102,1.108,0,0,0,1.5,0);

	this.instance_23 = new lib.GEN_roundbutton02("synched",0);
	this.instance_23.setTransform(-240.2,174,1.102,1.108);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVAiIAAhDIAnAAQAEAAAAAEQAAAFgEAAIgdAAIAAAPIAYAAQAAAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAIABADIgBAEIgCABIgYAAIAAAYIAdAAQAEABAAAFQAAAEgEAAg");
	this.shape.setTransform(-159,208.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSAWQgFgIAAgOQAAgLAFgKQADgFAHgEQAFgDAEgBQALABAFAEIAFAEIABACQABAFgEABQgDABgDgCQgFgHgGABQgJAAgEAJQgDAHAAAIQAAALADAFQAFAJAIABQAEgBADgCQADgBACgEIAAgMIgOAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIAAgDIAAgBQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAAAIAUAAIACABIABABIAAASQAAACgCAEQgCADgEACQgDAEgMABQgLgBgIgMg");
	this.shape_1.setTransform(-164.9,208.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWAfIAAg9IACgDIADAAQAEgBABADIAZAwIAAgvQABgDAEAAQAEAAAAADIAAA8QAAAEgDAAQgDABgDgCIgagxIAAAvQAAADgEAAQgEAAgBgDg");
	this.shape_2.setTransform(-170.8,208.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAPAfIgBgHIgZAAIgEAHQgBAEgEgBIgEgBQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAXg8QABgDABAAQADAAACADIATA9QAAADgEAAIgBAAQgDAAgCgDgAgJAPIAAgBIAUAAIgLgfIgJAfIAAAAg");
	this.shape_3.setTransform(-176.6,208.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVAeIAAg/IATAAQAJAAAFACQAHAEAAAMQAAAFgCADQgDAHgLABIASAaQAAAAAAABQABAAAAABQAAAAAAABQAAAAgBABIgCACQgEADgCgEIgSgfIgHAAIAAAdIgBADIgDABQgFgBAAgDgAgMgGIAMAAQAEAAADgDQADgCAAgEQAAgJgKgBIgMAAg");
	this.shape_4.setTransform(-182.3,208.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AARAEIgiAAIgDgCIAAgCIABgCIACgBIAjAAIACABIABACIgBADIgCABIgBAAg");
	this.shape_5.setTransform(-202.5,240.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgBAXIgCgCIAAgRIgPAAQgDAAAAgEQAAgCADAAIAPAAIAAgRQAAgEADAAQAEAAAAAEIAAARIAPAAIADABIAAABQAAAEgDAAIgPAAIAAARQAAADgEAAIgBgBg");
	this.shape_6.setTransform(-138.8,240.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTAeIAAhAIATAAQAIAAAFADQAHAEAAAMQAAAFgBADQgCAFgFACQgEABgHAAIgLAAIAAAdIgBAEIgEABQgEgBAAgEgAgKgGIAKAAQAGAAADgDQACgCAAgEQABgJgLgBIgLAAg");
	this.shape_7.setTransform(-327.9,260.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgSAWQgEgJgBgNQABgMAEgJQAGgNAMAAQANAAAGANQAEAKAAALQABAMgFAKQgGANgNgBQgMABgGgNgAgLgPQgCAHAAAIQAAAIACAIQAFAJAGAAQAHAAAEgJQACgGAAgKQAAgJgCgGQgEgJgHgBQgGAAgFAKg");
	this.shape_8.setTransform(-333.2,260.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVAgIAAg+IABgDIACgBQAFAAABADIAaAwIAAgvQABgEADAAQAEAAABAEIAAA9QAAADgFAAQgCABgCgCIgagxIAAAwQgBACgEABQgFAAABgDg");
	this.shape_9.setTransform(-339,260.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgCAiIgCgDIAAg9IACgDIACgBQAEAAAAAEIAAA+QAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgCABIgCgBg");
	this.shape_10.setTransform(-343.1,260.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgVAfIAAhBIAnAAQAEABAAAEQAAAFgEAAIgeAAIAAAPIAYAAQADAAAAAFQAAADgDABIgYAAIAAAfQAAAEgFAAQgEgBAAgDg");
	this.shape_11.setTransform(-311,239.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgWAfIAAhBIAoAAQAFABAAAEQAAAFgFAAIgdAAIAAAPIAWAAQAEAAAAAFQAAADgEABIgWAAIAAAfQAAAEgGAAQgFgBAAgDg");
	this.shape_12.setTransform(-316.8,239.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgSAWQgEgJgBgNQABgNAEgIQAGgMAMAAQANAAAGAMQAEAKAAALQABAMgFAKQgGAMgNAAQgMAAgGgMgAgLgPQgCAHAAAIQAAAJACAGQAFAKAGAAQAHAAAEgKQACgFAAgKQAAgJgCgFQgEgKgHAAQgGgBgFAKg");
	this.shape_13.setTransform(-322.5,239.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAAAfIAAg3IgFAAQgEAAAAgFQAAgEAEgBIAKAAIADABQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAIAAA+QAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIgDABQgFAAAAgEg");
	this.shape_14.setTransform(-324.1,220.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgVAeIAAhAIATAAQAJAAAFADQAHAEAAAMQAAAFgCADQgCAIgMAAIASAaQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgCACQgEADgCgDIgSggIgHAAIAAAdIgBAEIgDABQgFgBAAgEgAgMgGIAMAAQAEAAADgDQADgCAAgEQAAgJgKgBIgMAAg");
	this.shape_15.setTransform(-330.9,220.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgSAVQgFgIABgNQgBgMAFgJQAGgNAMAAQANABAFALQAGALgBALQAAAMgEAJQgGANgNABQgMgBgGgNgAgLgPQgCAHAAAIQAAAIACAIQAFAJAGAAQAHAAAFgJQABgHAAgJQAAgJgCgGQgDgKgIAAQgGAAgFAKg");
	this.shape_16.setTransform(-336.3,220.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAAAjIgCgBQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIgYg8QgCgEAEgBQAFgBABADIATAzIATgzQACgEAEACQAFABgBAEIgZA8QAAAAAAABQAAABgBAAQAAAAgBABQgBAAgBAAIAAAAg");
	this.shape_17.setTransform(-342.2,220.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgWAgIAAg+IACgDIADgBQAEAAABADIAZAwIAAgvQABgEAEAAQAFAAgBAEIAAA9QAAADgDAAQgDABgDgCIgagxIAAAwQAAACgEABQgEAAgBgDg");
	this.shape_18.setTransform(-213.5,218.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgWAjIAAhCQABgDADAAQAFAAABADIAAA4IAfAAQAEAAAAAFIgBADQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAg");
	this.shape_19.setTransform(-219.2,218.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgTAeIAAhAIATAAQAIAAAFADQAHAEAAAMQAAAFgBADQgCAFgFACQgEABgHAAIgLAAIAAAdIgBAEIgEABQgEgBAAgEgAgKgGIAKAAQAGAAADgDQACgCAAgEQABgJgLgBIgLAAg");
	this.shape_20.setTransform(-224.5,218.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgTAeIAAhAIATAAQAIAAAFADQAHAEAAAMQAAAFgBADQgCAFgFACQgEABgHAAIgLAAIAAAdIgBAEIgEABQgEgBAAgEgAgKgGIAKAAQAGAAADgDQACgCAAgEQABgJgLgBIgLAAg");
	this.shape_21.setTransform(-229.1,208.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAPAfIgCgHIgZAAIgDAHQAAAEgGAAIgDgCQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAIAWg8QABgEACAAQADAAACAEIAUA9QAAAEgFAAIgBAAQgDAAgCgEgAgJAPIAAAAIAUAAIgKggIgKAgIAAAAg");
	this.shape_22.setTransform(-234.5,208.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AARAiQAAgBAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAgrIgNAYQgCACgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAgBgBAAIgMgXIAAAqIgBADIgEABQgEAAAAgEIAAg8QAAgEAEAAQAEgBACADIAOAfIAPgfQACgDAEABIADABIABADIAAA8QAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAABIgDABIgEgBg");
	this.shape_23.setTransform(-240.3,208.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgVAeIAAhAIATAAQAJAAAFADQAHAEAAAMQAAAFgCADQgCAIgMAAIASAaQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgCACQgEADgCgDIgSggIgHAAIAAAdIgBAEIgDABQgFgBAAgEgAgMgGIAMAAQAEAAADgDQADgCAAgEQAAgJgKgBIgMAAg");
	this.shape_24.setTransform(-252.9,208.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgSAVQgFgIABgNQgBgNAFgIQAGgMAMAAQANgBAGAMQAEALAAALQAAAMgEAJQgGAOgNAAQgMAAgGgOgAgLgPQgCAHAAAIQAAAIACAHQAEAKAHAAQAHAAAFgKQABgGAAgJQAAgJgCgFQgDgLgIABQgHAAgEAJg");
	this.shape_25.setTransform(-258.3,209);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAAAjIgCgBQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIgYg8QgCgEAEgBQAFgBABADIATAzIATgzQACgEAEACQAFABgBAEIgZA8QAAAAAAABQAAABgBAAQAAAAgBABQgBAAgBAAIAAAAg");
	this.shape_26.setTransform(-264.2,208.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgTAeIAAhAIATAAQAIAAAFADQAHAEAAAMQAAAFgBADQgCAFgFACQgEABgHAAIgLAAIAAAdIgBAEIgEABQgEgBAAgEgAgKgGIAKAAQAGAAADgDQACgCAAgEQABgJgLgBIgLAAg");
	this.shape_27.setTransform(-269.5,218.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgTAeIAAhAIATAAQAIAAAFADQAHAEAAAMQAAAFgBADQgCAFgFACQgEABgHAAIgLAAIAAAdIgBAEIgEABQgEgBAAgEgAgKgGIAKAAQAGAAADgDQACgCAAgEQABgJgLgBIgLAAg");
	this.shape_28.setTransform(-274.5,218.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAPAfIgCgHIgZAAIgDAHQAAAEgGAAIgDgCQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAIAWg8QABgEACAAQADAAACAEIAUA9QAAAEgFAAIgBAAQgDAAgCgEgAgJAPIAAAAIAUAAIgKggIgKAgIAAAAg");
	this.shape_29.setTransform(-279.8,218.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgSAWQgFgJABgNQgBgNAFgIQAGgMAMAAQANAAAGAMQAEAKAAALQAAAMgEAKQgGAMgNAAQgMAAgGgMgAgLgPQgCAHAAAIQAAAJACAGQAEAKAHAAQAHAAAFgKQABgFAAgKQAAgJgCgFQgDgKgIAAQgHgBgEAKg");
	this.shape_30.setTransform(-267.8,154.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgVAeIAAhAIATAAQAJAAAFADQAHAEAAAMQAAAFgCADQgCAIgMAAIASAaQAAABABAAQAAABAAAAQAAABAAAAQgBABAAAAIgCACQgEADgCgDIgSggIgHAAIAAAdIgBAEIgDABQgFgBAAgEgAgMgGIAMAAQAEAAADgDQADgCAAgEQAAgJgKgBIgMAAg");
	this.shape_31.setTransform(-273.3,154.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAPAfIgCgHIgZAAIgDAHQAAAEgGAAIgDgCQAAAAgBAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAWg8QABgEACAAQADAAACAEIAUA9QAAAEgFAAIgBAAQgDAAgCgEgAgJAPIAAAAIAUAAIgKggIgKAgIAAAAg");
	this.shape_32.setTransform(-278.8,154.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgVAjIAAhFIAUAAQAIAAAEADQAIAEgBAMQABANgIABQAEABADADQAEAFAAAHQAAAKgGAFQgFAFgLAAgAgLAZIALAAQAFAAAEgCQADgDAAgFQAAgIgFgCQgCgDgFAAIgLAAgAgLgFIAFAAQAKAAADgDQADgCgBgFQAAgJgJAAIgLAAg");
	this.shape_33.setTransform(-284.6,154.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgTAaQgCgCgBgFQgBgEAEgCIADAAIACACQABAFAEADIAIADQAFABADgCQAGgCAAgFQABgGgCgCQgDgEgJgEIgIgCIgGgCQgFgCgBgEQgCgFABgGQACgIAGgEQAFgDAFAAIAIABQAFAAAEAFQAEAEAAADQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAIgDADIgEgBQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAQgCgFgFgCQgFgCgEACQgGADAAAFQAAAHAHABQAYAIADAJIABAGIgBAFQgBAIgIAEQgFACgIABQgOgBgFgIg");
	this.shape_34.setTransform(-298,147.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgVAgIAAg+IABgDIACgBQAFAAABADIAZAwIAAgvQACgEADAAQAEAAAAAEIAAA9QAAADgDAAQgDABgDgCIgZgxIAAAwQgBACgEABQgEAAAAgDg");
	this.shape_35.setTransform(-303.8,147.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgCAiIgCgDIAAg9IACgDIACgBQAEAAAAAEIAAA+QAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgCABIgCgBg");
	this.shape_36.setTransform(-307.9,147.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AARAiQAAgBAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAgrIgNAYQgCACgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAIgMgXIAAAqIgBADIgEABQgEAAAAgEIAAg8QAAgEAEAAQAEgBACADIAOAfIAPgfQACgDAEABIADABIABADIAAA8QAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAABIgDABIgEgBg");
	this.shape_37.setTransform(-312,147.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgSAVQgFgIAAgNQAAgNAFgIQAGgMAMAAQANgBAFAMQAGALAAALQgBAMgEAJQgHAOgMAAQgMAAgGgOgAgKgPQgDAHAAAIQAAAIADAHQAEAKAGAAQAIAAADgKQACgGAAgJQAAgJgCgFQgDgLgIABQgGAAgEAJg");
	this.shape_38.setTransform(-326.1,155.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgCAiIgBgDIAAg9IABgDIACgBQAFAAAAAEIAAA+QgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAAAIgCABIgCgBg");
	this.shape_39.setTransform(-330.1,155.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgYAjIAAhFIAUAAQANAAAIALQAIAKgBANQAAANgHALQgIALgMAAgAgOAZIALAAQAHAAAFgIQAFgHAAgKQAAgJgFgHQgGgIgGAAIgLAAg");
	this.shape_40.setTransform(-334.1,155.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAPAfIgCgHIgZAAIgDAHQAAAEgGAAIgDgCQAAAAgBAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAWg8QABgEACAAQADAAACAEIAUA9QAAAEgFAAIgBAAQgDAAgCgEgAgJAPIAAAAIAUAAIgKggIgKAgIAAAAg");
	this.shape_41.setTransform(-339.8,155.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgVAeIAAhAIATAAQAJAAAFADQAHAEAAAMQAAAFgCADQgCAIgMAAIASAaQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgCACQgEADgCgDIgSggIgHAAIAAAdIgBAEIgDABQgFgBAAgEgAgMgGIAMAAQAEAAADgDQADgCAAgEQAAgJgKgBIgMAAg");
	this.shape_42.setTransform(-345.5,155.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAAAjIgCgBQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIgYg8QgCgEAEgBQAFgBABADIATAzIATgzQACgEAEACQAFABgBAEIgZA8QAAAAAAABQAAABgBAAQAAAAgBABQgBAAgBAAIAAAAg");
	this.shape_43.setTransform(-235.5,147.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgTAeIAAhAIATAAQAIAAAFADQAHAEAAAMQAAAFgBADQgCAFgFACQgEABgHAAIgLAAIAAAdIgBAEIgEABQgEgBAAgEgAgKgGIAKAAQAGAAADgDQACgCAAgEQABgJgLgBIgLAAg");
	this.shape_44.setTransform(-241,147.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgVAfIAAhBIAnAAQAEABABAEQgBAFgEAAIgdAAIAAAPIAXAAQADAAAAAFQAAADgDABIgXAAIAAAfQgBAEgFAAQgFgBABgDg");
	this.shape_45.setTransform(-246.4,147.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgTAaQgCgCgBgFQgBgEAEgCIADAAIACACQABAFAEADIAIADQAFABADgCQAGgCAAgFQABgGgCgCQgDgEgJgEIgIgCIgGgCQgFgCgBgEQgCgFABgGQACgIAGgEQAFgDAFAAIAIABQAFAAAEAFQAEAEAAADQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAIgDADIgEgBQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAQgCgFgFgCQgFgCgEACQgGADAAAFQAAAHAHABQAYAIADAJIABAGIgBAFQgBAIgIAEQgFACgIABQgOgBgFgIg");
	this.shape_46.setTransform(-169.4,147.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgVAeIAAhAIATAAQAJAAAFADQAHAEAAAMQAAAFgCADQgCAIgMAAIASAaQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIgCACQgEADgCgDIgSggIgHAAIAAAdIgBAEIgDABQgFgBAAgEgAgMgGIAMAAQAEAAADgDQADgCAAgEQAAgJgKgBIgMAAg");
	this.shape_47.setTransform(-174.9,147.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgDAeIAAg3IgQAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAIgBgDQAAgEAEgBIAmAAQAFABgBAEQABAEgFAAIgPAAIAAA3QAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABIgCABQgDAAAAgFg");
	this.shape_48.setTransform(-180.3,147.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AARAiQAAgBAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAgrIgNAYQgCACgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAIgMgXIAAAqIgBADIgEABQgEAAAAgEIAAg8QAAgEAEAAQAEgBACADIAOAfIAPgfQACgDAEABIADABIABADIAAA8QAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAABIgDABIgEgBg");
	this.shape_49.setTransform(-185.9,147.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgTAeIAAhAIATAAQAIAAAFADQAHAEAAAMQAAAFgBADQgCAFgFACQgEABgHAAIgLAAIAAAdIgBAEIgEABQgEgBAAgEgAgKgGIAKAAQAGAAADgDQACgCAAgEQABgJgLgBIgLAAg");
	this.shape_50.setTransform(-76.2,260.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgSAWQgEgJgBgNQABgMAEgJQAGgNAMAAQANAAAFANQAFAKABALQAAAMgFAKQgHANgMgBQgMABgGgNgAgKgPQgDAHAAAIQAAAIADAIQADAJAHAAQAHAAAEgJQACgGAAgKQAAgJgCgGQgEgJgHgBQgHAAgDAKg");
	this.shape_51.setTransform(-81.5,260.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgVAgIAAg+IABgDIACgBQAFAAABADIAZAwIAAgvQACgEADAAQAEAAAAAEIAAA9QAAADgDAAQgDABgDgCIgZgxIAAAwQgBACgEABQgEAAAAgDg");
	this.shape_52.setTransform(-87.3,260.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgCAiIgCgDIAAg9IACgDIACgBQAEAAAAAEIAAA+QAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgCABIgCgBg");
	this.shape_53.setTransform(-91.4,260.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgWAfIAAhBIAoAAQAFABgBAEQABAFgFAAIgeAAIAAAPIAXAAQAEAAAAAFQAAADgEABIgXAAIAAAfQABAEgGAAQgFgBAAgDg");
	this.shape_54.setTransform(-94.6,239.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgVAfIAAhBIAnAAQAEABAAAEQAAAFgEAAIgeAAIAAAPIAYAAQADAAAAAFQAAADgDABIgYAAIAAAfQAAAEgFAAQgEgBAAgDg");
	this.shape_55.setTransform(-100.4,239.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgSAWQgFgJAAgNQAAgNAFgIQAGgMAMAAQANAAAFAMQAGAKAAALQgBAMgEAKQgHAMgMAAQgMAAgGgMgAgKgPQgDAHAAAIQAAAJADAGQAEAKAGAAQAIAAADgKQACgFAAgKQAAgJgCgFQgDgKgIAAQgGgBgEAKg");
	this.shape_56.setTransform(-106.1,239.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgNAjQgFgBgBgFIAAgCQAAgIAFgIQADgHALgHQACgCADgEQAEgFAAgCQAAgDgDgEQgCgCgEAAQgHAAgBAHQAAAAAAAAQAAABgBAAQAAAAAAABQgBAAAAAAIgDABQgBAAgBAAQgBgBAAAAQgBAAAAgBQAAAAAAgBIAAgBQAAgGAFgFQAFgEAHAAQAIAAAFAEQAFAFAAAJQAAAIgHAGIgNALQgHAGAAALIAaAAQADAAAAAEIgBADIgCACg");
	this.shape_57.setTransform(-76.6,220.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgVAeIAAhAIATAAQAJAAAFADQAHAEAAAMQAAAFgCADQgCAIgMAAIASAaQAAABABAAQAAABAAAAQAAABAAAAQgBABAAAAIgCACQgEADgCgDIgSggIgHAAIAAAdIgBAEIgDABQgFgBAAgEgAgMgGIAMAAQAEAAADgDQADgCAAgEQAAgJgKgBIgMAAg");
	this.shape_58.setTransform(-84.4,220.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgSAVQgEgIgBgNQABgMAEgJQAGgNAMAAQANABAGALQAEALAAALQABAMgFAJQgGANgNABQgMgBgGgNgAgLgPQgCAHAAAIQAAAIACAIQAFAJAGAAQAHAAAEgJQACgHAAgJQAAgJgCgGQgEgKgHAAQgGAAgFAKg");
	this.shape_59.setTransform(-89.8,220.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAAAjIgCgBQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIgYg8QgCgEAEgBQAFgBABADIATAzIATgzQACgEAEACQAFABgBAEIgZA8QAAAAAAABQAAABgBAAQAAAAgBABQgBAAgBAAIAAAAg");
	this.shape_60.setTransform(-95.7,220.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AAPAfIgCgHIgZAAIgDAHQAAAEgGAAIgDgCQAAAAgBAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAWg8QABgEACAAQADAAACAEIAUA9QAAAEgFAAIgBAAQgDAAgCgEgAgJAPIAAAAIAUAAIgKggIgKAgIAAAAg");
	this.shape_61.setTransform(-81.7,157.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgTAeIAAhAIATAAQAIAAAFADQAHAEAAAMQAAAFgBADQgCAFgFACQgEABgHAAIgLAAIAAAdIgBAEIgEABQgEgBAAgEgAgKgGIAKAAQAGAAADgDQACgCAAgEQABgJgLgBIgLAAg");
	this.shape_62.setTransform(-87.1,157.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AANAgIAAggIgaAAIAAAgQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAIgEABIgDgBIgBgDIAAg9IABgDIADgBQAGAAgBAEIAAAVIAaAAIAAgWIABAAQABgBAAAAQAAgBABAAQAAAAABgBQABAAABAAIACABQABAAAAABQABAAAAAAQAAABAAAAQAAAAAAABIAAA9IgBADIgDABQgFAAgBgDg");
	this.shape_63.setTransform(-92.6,157.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgWAgIAAg+IACgDIADgBQAEAAABADIAZAwIAAgvQABgEAEAAQAFAAgBAEIAAA9QAAADgDAAQgDABgDgCIgagxIAAAwQAAACgEABQgEAAgBgDg");
	this.shape_64.setTransform(-134.4,156.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgCAiIgBgDIAAg9IABgDIACgBQAEAAABAEIAAA+QgBAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgCABIgCgBg");
	this.shape_65.setTransform(-138.5,156.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgSAVQgEgIAAgNQAAgMAEgJQAGgMAMgBQANAAAGAMQAEALAAALQABAMgFAJQgGANgNABQgMgBgGgNgAgLgPQgCAHAAAIQAAAJACAHQAFAJAGAAQAIAAAEgJQABgHAAgJQAAgJgCgGQgEgKgHAAQgGAAgFAKg");
	this.shape_66.setTransform(-104.8,147.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgVAeIAAhAIATAAQAJAAAFADQAHAEAAAMQAAAFgCADQgCAIgMAAIASAaQAAABABAAQAAABAAAAQAAABAAAAQgBABAAAAIgCACQgEADgCgDIgSggIgHAAIAAAdIgBAEIgDABQgFgBAAgEgAgMgGIAMAAQAEAAADgDQADgCAAgEQAAgJgKgBIgMAAg");
	this.shape_67.setTransform(-110.3,147.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AAPAfIgCgHIgZAAIgDAHQAAAEgGAAIgDgCQAAAAgBAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAWg8QABgEACAAQADAAACAEIAUA9QAAAEgFAAIgBAAQgDAAgCgEgAgJAPIAAAAIAUAAIgKggIgKAgIAAAAg");
	this.shape_68.setTransform(-115.8,147.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgVAjIAAhFIATAAQAJAAAEADQAIAEgBAMQABANgIABQAEABADADQAEAFAAAHQAAAKgGAFQgFAFgLAAgAgLAZIALAAQAFAAAEgCQADgDAAgFQAAgIgFgCQgCgDgFAAIgLAAgAgLgFIAFAAQAKAAADgDQAEgCgCgFQAAgJgJAAIgLAAg");
	this.shape_69.setTransform(-121.6,147.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Base
	this.instance_24 = new lib.LEFIS_Base("synched",0);
	this.instance_24.setTransform(-208.6,219.9,1.102,1.108);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(1));

	// fill
	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#657381").s().p("A3aMwIAA5fMAu1AAAIAAZfg");
	this.shape_70.setTransform(-208.7,219.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_70).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-358.6,138.3,299.9,163.4);


(lib.panels = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.LMICPanel("synched",0);
	this.instance.setTransform(32.3,49.9,0.27,0.27,0,0,0,91,57.1);

	this.instance_1 = new lib.RMICPanel("synched",0);
	this.instance_1.setTransform(898.4,60.7,0.27,0.27,0,0,0,91,57.1);

	this.instance_2 = new lib.MCPPanel("synched",0);
	this.instance_2.setTransform(465.4,7.7,0.27,0.27,0,0,0,142.8,187.3);

	this.instance_3 = new lib.MASTERWARNRPanel("synched",0);
	this.instance_3.setTransform(744.6,24.4,0.27,0.27,0,0,0,118.4,98.4);

	this.instance_4 = new lib.MASTERWARNLPanel("synched",0);
	this.instance_4.setTransform(186.2,58.5,0.27,0.27,0,0,0,116.9,98.4);

	this.instance_5 = new lib.LEFISPanel("synched",0);
	this.instance_5.setTransform(262.2,30.5,0.27,0.27,0,0,0,-209.1,196);

	this.instance_6 = new lib.REFISPanel("synched",0);
	this.instance_6.setTransform(668.6,24,0.27,0.27,0,0,0,-209.1,195.8);

	this.instance_7 = new lib.basepanelglalreshieldtop("synched",0);
	this.instance_7.setTransform(465.4,3,0.27,0.27,0,0,0,1561,149.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,929,87.7);


// stage content:
(lib.dif06efp02 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{s1:0,s2:500});

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
	this.frame_499 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
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
	this.frame_519 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(499).call(this.frame_499).wait(20).call(this.frame_519).wait(1));

	// prot
	this.prot = new lib.prot();
	this.prot.setTransform(500,275,1,1,0,0,0,500,275);

	this.timeline.addTween(cjs.Tween.get(this.prot).wait(520));

	// instsructions
	this.instance = new lib.instruction("synched",0);
	this.instance.setTransform(499.7,521.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(499).to({_off:false},0).to({_off:true},1).wait(20));

	// hotspot
	this.hotspot1 = new lib.btn1();
	this.hotspot1.setTransform(554.8,203.8,1.386,2.511,0,180,0);
	this.hotspot1._off = true;
	new cjs.ButtonHelper(this.hotspot1, 0, 1, 2, false, new lib.btn1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.hotspot1).wait(499).to({_off:false},0).to({_off:true},1).wait(20));

	// wrong hotspot
	this.hotspotERR = new lib.btn2();
	this.hotspotERR.setTransform(916.7,285.2,9.849,12.409);
	this.hotspotERR._off = true;
	new cjs.ButtonHelper(this.hotspotERR, 0, 1, 2, false, new lib.btn2(), 3);

	this.timeline.addTween(cjs.Tween.get(this.hotspotERR).wait(499).to({_off:false},0).to({_off:true},1).wait(20));

	// hl
	this.hl_mc = new lib.hl_mc();
	this.hl_mc.setTransform(67.6,-136.4,1,1,0,0,0,199.1,199);
	this.hl_mc._off = true;
	this.hl_mc.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.hl_mc).wait(499).to({_off:false},0).to({_off:true},1).wait(20));

	// select
	this.errMsg_select = new lib.errMsg_select();
	this.errMsg_select.setTransform(496.6,20.2,1,1,0,0,0,146.5,16);
	this.errMsg_select._off = true;
	this.errMsg_select.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.errMsg_select).wait(499).to({_off:false},0).to({_off:true},1).wait(20));

	// try
	this.errMsg_try = new lib.errMsg_try();
	this.errMsg_try.setTransform(497.1,20.2,1,1,0,0,0,147,16);
	this.errMsg_try._off = true;
	this.errMsg_try.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.errMsg_try).wait(499).to({_off:false},0).to({_off:true},1).wait(20));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_502 = new cjs.Graphics().p("EhOGAq9MAAAhV5MCcNAAAMAAABV5g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(502).to({graphics:mask_graphics_502,x:500,y:275}).wait(18));

	// note
	this.instance_1 = new lib.notebox2("synched",0);
	this.instance_1.setTransform(603.5,695.8,1,1,0,0,0,471.9,158.2);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(502).to({_off:false},0).to({y:638.4},6).wait(12));

	// t1
	this.instance_2 = new lib.t1("synched",0);
	this.instance_2.setTransform(324.6,401,1,1,0,0,0,163.8,23.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(64).to({_off:false},0).to({alpha:1},5).wait(451));

	// hl
	this.instance_3 = new lib.hl2("synched",0);
	this.instance_3.setTransform(330.5,235.8,1,1,0,0,0,39.5,33.3);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(41).to({_off:false},0).to({alpha:1},5).wait(18).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(450));

	// hl
	this.instance_4 = new lib.hl("synched",0);
	this.instance_4.setTransform(704.1,71.9,1,1,0,0,0,41.6,23.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(520));

	// wxr
	this.instance_5 = new lib.REFISPanel("synched",0);
	this.instance_5.setTransform(310.1,226.1,1,1,0,0,0,-208.9,195.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(520));

	// screen
	this.instance_6 = new lib._787_Generic_screen40("synched",0);
	this.instance_6.setTransform(772.4,344,0.6,0.6,0,0,0,319.7,250.9);

	this.instance_7 = new lib._787_Generic_screen80("synched",0);
	this.instance_7.setTransform(772.4,344,0.6,0.6,0,0,0,319.7,250.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},502).wait(18));

	// Layer 1
	this.instance_8 = new lib.panels("synched",0);
	this.instance_8.setTransform(500.1,215,1,1,0,0,0,464.6,179.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(520));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(500,275,1000,584.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;