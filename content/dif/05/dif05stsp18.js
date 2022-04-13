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
		{src:"images/note_regular.png", id:"note_regular"},
		{src:"images/sts01p38_video.jpg", id:"sts01p38_video"},
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



(lib.note_regular = function() {
	this.initialize(img.note_regular);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,127,117);


(lib.sts01p38_video = function() {
	this.initialize(img.sts01p38_video);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1172,771);


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


(lib.notebox2copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGAHIAAgNIANAAIAAANg");
	this.shape.setTransform(632.3,41.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgEgKAAgMQAAgLAEgIQAEgJAHgFQAIgFAJAAQAGAAAFADQAGADADAEIAAgmIANAAIAABpIgMAAIAAgKQgHAMgOAAQgIAAgIgFgAgNgHQgGAHAAANQAAAPAHAIQAGAHAHAAQAIAAAGgHQAGgHAAgOQAAgPgGgHQgGgHgJAAQgHAAgGAHg");
	this.shape_1.setTransform(625.7,36.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_2.setTransform(617.6,38);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_3.setTransform(609.2,38);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AggA2IAAhqIAMAAIAAALQAEgGAFgDQAGgDAFAAQAKAAAIAFQAHAFAEAJQAEAKAAALQAAAMgEAHQgEAKgJAFQgIAFgIAAQgFAAgGgDQgFgDgDgEIAAAmgAgOgjQgGAIAAAPQAAANAGAHQAGAHAIAAQAHAAAGgHQAHgIAAgNQAAgPgGgIQgHgHgHAAQgHAAgHAIg");
	this.shape_4.setTransform(601.1,39.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_5.setTransform(592.9,38);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgUAnIAAhMIAMAAIAAAMQAFgIADgDQADgCAEAAQAHAAAHAEIgFAMQgFgDgEAAQgFAAgCADQgDADgBAEQgCAHAAAIIAAAng");
	this.shape_6.setTransform(587.3,37.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_7.setTransform(582.6,36.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgbAiQgHgHAAgJQAAgGACgFQADgEAEgDQAEgBAGgCIALgCQAOgBAIgDIAAgEQAAgIgEgDQgFgEgJAAQgIAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAIAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAAQQAAASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgFADgIAAQgNAAgGgGgAgCAEIgLADQgEABgBADQgCADAAADQAAAGAEADQAEAEAHAAQAGAAAGgEQAGgDADgGQACgEAAgJIAAgEQgHACgNACg");
	this.shape_8.setTransform(576.7,38);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgEgKAAgMQAAgLAEgIQAEgJAHgFQAIgFAJAAQAGAAAFADQAGADADAEIAAgmIANAAIAABpIgMAAIAAgKQgHAMgOAAQgIAAgIgFgAgNgHQgGAHAAANQAAAPAHAIQAGAHAHAAQAIAAAGgHQAGgHAAgOQAAgPgGgHQgGgHgJAAQgHAAgGAHg");
	this.shape_9.setTransform(563.9,36.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_10.setTransform(555.8,38);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAnAnIAAgvIgBgLQgCgEgDgCQgDgCgFAAQgIAAgGAGQgFAFAAAMIAAArIgLAAIAAgwQAAgJgDgEQgEgFgHAAQgFAAgFADQgFADgCAGQgCAFAAAKIAAAnIgNAAIAAhMIALAAIAAALQAEgFAGgEQAGgDAIAAQAJAAAFADQAEAEACAGQAJgNAPAAQAMAAAGAGQAGAHAAANIAAAzg");
	this.shape_11.setTransform(545.5,37.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAnAnIAAgvIgBgLQgCgEgDgCQgDgCgFAAQgIAAgGAGQgFAFAAAMIAAArIgLAAIAAgwQAAgJgDgEQgEgFgHAAQgFAAgFADQgFADgCAGQgCAFAAAKIAAAnIgNAAIAAhMIALAAIAAALQAEgFAGgEQAGgDAIAAQAJAAAFADQAEAEACAGQAJgNAPAAQAMAAAGAGQAGAHAAANIAAAzg");
	this.shape_12.setTransform(533,37.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_13.setTransform(525,36.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgUAnIAAhMIAMAAIAAAMQAFgIADgDQADgCAEAAQAHAAAHAEIgFAMQgFgDgEAAQgFAAgCADQgDADgBAEQgCAHAAAIIAAAng");
	this.shape_14.setTransform(521.4,37.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgBAzQgDgDgCgEQgCgEAAgMIAAgqIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIAMAAIAAALIgMAAIAAAsIAAAGIACAEIAFAAIAFAAIACALIgKABQgGAAgDgBg");
	this.shape_15.setTransform(516.4,36.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_16.setTransform(506.2,38);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgEgKAAgMQAAgLAEgIQAEgJAHgFQAIgFAJAAQAGAAAFADQAGADADAEIAAgmIANAAIAABpIgMAAIAAgKQgHAMgOAAQgIAAgIgFgAgNgHQgGAHAAANQAAAPAHAIQAGAHAHAAQAIAAAGgHQAGgHAAgOQAAgPgGgHQgGgHgJAAQgHAAgGAHg");
	this.shape_17.setTransform(498.1,36.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgUAnIAAhMIAMAAIAAAMQAFgIADgDQADgCAEAAQAHAAAHAEIgFAMQgFgDgEAAQgFAAgCADQgDADgBAEQgCAHAAAIIAAAng");
	this.shape_18.setTransform(492.3,37.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgbAiQgHgHAAgJQAAgGACgFQADgEAEgDQAEgBAGgCIALgCQAOgBAIgDIAAgEQAAgIgEgDQgFgEgJAAQgIAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAIAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAAQQAAASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgFADgIAAQgNAAgGgGgAgCAEIgLADQgEABgBADQgCADAAADQAAAGAEADQAEAEAHAAQAGAAAGgEQAGgDADgGQACgEAAgJIAAgEQgHACgNACg");
	this.shape_19.setTransform(485,38);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAPAmIgMgsIgDgOIgOA6IgOAAIgYhMIAOAAIAMArIAFARIAEgQIAMgsIAMAAIALAsIAEAOIAFgPIANgrIANAAIgYBMg");
	this.shape_20.setTransform(475.4,38);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgZAeQgKgLAAgTQAAgUAMgLQAKgIANAAQAQAAAJAKQALALAAASQAAANgFAJQgEAIgIAFQgKAFgJAAQgPAAgKgKgAgPgVQgGAHAAAOQAAAOAGAIQAHAHAIAAQAJAAAHgHQAGgIAAgOQAAgOgGgHQgHgHgJAAQgIAAgHAHg");
	this.shape_21.setTransform(465.8,38);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgBAzQgDgDgCgEQgBgEgBgMIAAgqIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIAMAAIAAALIgMAAIAAAsIAAAGIADAEIAEAAIAFAAIACALIgKABQgGAAgDgBg");
	this.shape_22.setTransform(459.7,36.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_23.setTransform(449.5,38);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_24.setTransform(441.6,38);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAAAzQgFgDgBgEQgCgEABgMIAAgqIgKAAIAAgLIAKAAIAAgTIAKgIIAAAbIAOAAIAAALIgOAAIAAAsIABAGIADAEIAEAAIAGAAIABALIgJABQgIAAgBgBg");
	this.shape_25.setTransform(435.5,36.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgbAiQgHgHAAgJQAAgGACgFQADgEAEgDQAEgBAGgCIALgCQAOgBAIgDIAAgEQAAgIgEgDQgFgEgJAAQgIAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAIAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAAQQAAASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgFADgIAAQgNAAgGgGgAgCAEIgLADQgEABgBADQgCADAAADQAAAGAEADQAEAEAHAAQAGAAAGgEQAGgDADgGQACgEAAgJIAAgEQgHACgNACg");
	this.shape_26.setTransform(429.1,38);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgUAnIAAhMIAMAAIAAAMQAFgIADgDQADgCAEAAQAHAAAHAEIgFAMQgFgDgEAAQgFAAgCADQgDADgBAEQgCAHAAAIIAAAng");
	this.shape_27.setTransform(423.1,37.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_28.setTransform(415.8,38);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_29.setTransform(409.9,36.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_30.setTransform(404.1,38);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgXAeQgJgLAAgTQAAgLAEgJQAEgKAJgFQAIgEAIAAQANAAAIAGQAIAHACALIgNACQgCgIgEgDQgFgEgGAAQgIAAgHAHQgGAHAAAOQAAAPAGAHQAGAHAIAAQAIAAAFgFQAFgEABgKIANABQgCAOgIAHQgJAIgNAAQgOAAgKgKg");
	this.shape_31.setTransform(396.4,38);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgXAeQgJgLAAgTQAAgLAEgJQAEgKAJgFQAIgEAIAAQANAAAIAGQAIAHACALIgNACQgCgIgEgDQgFgEgGAAQgIAAgHAHQgGAHAAAOQAAAPAGAHQAGAHAIAAQAIAAAFgFQAFgEABgKIANABQgCAOgIAHQgJAIgNAAQgOAAgKgKg");
	this.shape_32.setTransform(388.9,38);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgbAiQgHgHAAgJQAAgGACgFQADgEAEgDQAEgBAGgCIALgCQAOgBAIgDIAAgEQAAgIgEgDQgFgEgJAAQgIAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAIAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAAQQAAASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgFADgIAAQgNAAgGgGgAgCAEIgLADQgEABgBADQgCADAAADQAAAGAEADQAEAEAHAAQAGAAAGgEQAGgDADgGQACgEAAgJIAAgEQgHACgNACg");
	this.shape_33.setTransform(380.7,38);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_34.setTransform(368.2,38);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AASAnIAAgtQAAgIgBgEQgCgEgEgCQgEgDgGAAQgFAAgHAFQgGAGAAAPIAAAoIgNAAIAAhMIAMAAIAAAMQAJgNANAAQAHAAAHACQAFADAEAEQACAEABAGIABAMIAAAug");
	this.shape_35.setTransform(359.9,37.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgbAiQgHgHAAgJQAAgGACgFQADgEAEgDQAEgBAGgCIALgCQAOgBAIgDIAAgEQAAgIgEgDQgFgEgJAAQgIAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAIAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAAQQAAASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgFADgIAAQgNAAgGgGgAgCAEIgLADQgEABgBADQgCADAAADQAAAGAEADQAEAEAHAAQAGAAAGgEQAGgDADgGQACgEAAgJIAAgEQgHACgNACg");
	this.shape_36.setTransform(351.5,38);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_37.setTransform(345.7,36.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AggA2IAAhqIAMAAIAAALQAEgGAFgDQAGgDAFAAQAKAAAIAFQAHAFAEAJQAEAKAAALQAAAMgEAHQgEAKgJAFQgIAFgIAAQgFAAgGgDQgFgDgDgEIAAAmgAgOgjQgGAIAAAPQAAANAGAHQAGAHAIAAQAHAAAGgHQAHgIAAgNQAAgPgGgIQgHgHgHAAQgHAAgHAIg");
	this.shape_38.setTransform(340.1,39.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgUAnIAAhMIAMAAIAAAMQAFgIADgDQADgCAEAAQAHAAAHAEIgFAMQgFgDgEAAQgFAAgCADQgDADgBAEQgCAHAAAIIAAAng");
	this.shape_39.setTransform(333.8,37.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_40.setTransform(329,36.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgbAiQgHgHAAgJQAAgGACgFQADgEAEgDQAEgBAGgCIALgCQAOgBAIgDIAAgEQAAgIgEgDQgFgEgJAAQgIAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAIAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAAQQAAASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgFADgIAAQgNAAgGgGgAgCAEIgLADQgEABgBADQgCADAAADQAAAGAEADQAEAEAHAAQAGAAAGgEQAGgDADgGQACgEAAgJIAAgEQgHACgNACg");
	this.shape_41.setTransform(323.1,38);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_42.setTransform(311,38);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgbAiQgHgHAAgJQAAgGACgFQADgEAEgDQAEgBAGgCIALgCQAOgBAIgDIAAgEQAAgIgEgDQgFgEgJAAQgIAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAIAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAAQQAAASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgFADgIAAQgNAAgGgGgAgCAEIgLADQgEABgBADQgCADAAADQAAAGAEADQAEAEAHAAQAGAAAGgEQAGgDADgGQACgEAAgJIAAgEQgHACgNACg");
	this.shape_43.setTransform(303.1,38);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_44.setTransform(290.6,38);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAAAzQgEgDgCgEQgBgEgBgMIAAgqIgJAAIAAgLIAJAAIAAgTIAMgIIAAAbIAMAAIAAALIgMAAIAAAsIAAAGIADAEIAEAAIAFAAIACALIgKABQgGAAgCgBg");
	this.shape_45.setTransform(284.5,36.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgbAiQgHgHAAgJQAAgGACgFQADgEAEgDQAEgBAGgCIALgCQAOgBAIgDIAAgEQAAgIgEgDQgFgEgJAAQgIAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAIAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAAQQAAASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgFADgIAAQgNAAgGgGgAgCAEIgLADQgEABgBADQgCADAAADQAAAGAEADQAEAEAHAAQAGAAAGgEQAGgDADgGQACgEAAgJIAAgEQgHACgNACg");
	this.shape_46.setTransform(278.1,38);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgUAnIAAhMIAMAAIAAAMQAFgIADgDQADgCAEAAQAHAAAHAEIgFAMQgFgDgEAAQgFAAgCADQgDADgBAEQgCAHAAAIIAAAng");
	this.shape_47.setTransform(272.1,37.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AASA1IAAgxQAAgIgEgEQgEgFgJAAQgDAAgGADQgFADgCAFQgCAEAAAJIAAAqIgNAAIAAhpIANAAIAAAmQAJgKANAAQAIAAAGADQAHAEACAGQADAGAAAJIAAAxg");
	this.shape_48.setTransform(260.7,36.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgWAxQgJgGABgNIANACQAAAGAEADQAFADAIAAQAIAAAFgDQAFgEABgHQABgEAAgMQgIAKgMgBQgPAAgJgLQgJgMAAgOQAAgLAEgKQAEgJAIgFQAHgFAKAAQANAAAIALIAAgKIANAAIAABCQAAASgEAIQgEAHgIAEQgIAFgKAAQgNAAgJgGgAgNgkQgGAHAAAOQAAAPAGAFQAGAIAHAAQAJAAAGgIQAGgFAAgOQAAgPgGgHQgGgHgJAAQgHAAgGAHg");
	this.shape_49.setTransform(252.1,39.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_50.setTransform(246.5,36.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AASA1IAAgxQAAgIgEgEQgFgFgHAAQgEAAgGADQgEADgCAFQgDAEAAAJIAAAqIgNAAIAAhpIANAAIAAAmQAJgKANAAQAIAAAHADQAFAEAEAGQACAGAAAJIAAAxg");
	this.shape_51.setTransform(240.6,36.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgbAiQgHgHAAgJQAAgGACgFQADgEAEgDQAEgBAGgCIALgCQAOgBAIgDIAAgEQAAgIgEgDQgFgEgJAAQgIAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAIAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAAQQAAASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgFADgIAAQgNAAgGgGgAgCAEIgLADQgEABgBADQgCADAAADQAAAGAEADQAEAEAHAAQAGAAAGgEQAGgDADgGQACgEAAgJIAAgEQgHACgNACg");
	this.shape_52.setTransform(228.1,38);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAAAzQgFgDgBgEQgBgEgBgMIAAgqIgJAAIAAgLIAJAAIAAgTIALgIIAAAbIAOAAIAAALIgOAAIAAAsIABAGIADAEIAEAAIAGAAIABALIgKABQgHAAgBgBg");
	this.shape_53.setTransform(217.8,36.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgbAiQgHgHAAgJQAAgGACgFQADgEAEgDQAEgBAGgCIALgCQAOgBAIgDIAAgEQAAgIgEgDQgFgEgJAAQgIAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAIAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAAQQAAASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgFADgIAAQgNAAgGgGgAgCAEIgLADQgEABgBADQgCADAAADQAAAGAEADQAEAEAHAAQAGAAAGgEQAGgDADgGQACgEAAgJIAAgEQgHACgNACg");
	this.shape_54.setTransform(211.4,38);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_55.setTransform(199.3,38);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgBAzQgEgDgBgEQgBgEAAgMIAAgqIgKAAIAAgLIAKAAIAAgTIAKgIIAAAbIAOAAIAAALIgOAAIAAAsIABAGIACAEIAFAAIAGAAIACALIgKABQgHAAgDgBg");
	this.shape_56.setTransform(193.7,36.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgQAlQgGgDgDgEQgDgEgBgGIgBgMIAAgvIAOAAIAAAqIAAAOQABAFAEADQAFADAFAAQAEAAAGgDQAFgDACgFQACgGAAgJIAAgpIANAAIAABMIgLAAIAAgLQgKANgOAAQgGAAgGgCg");
	this.shape_57.setTransform(187.3,38.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AggA2IAAhqIAMAAIAAALQAEgGAFgDQAGgDAFAAQAKAAAIAFQAHAFAEAJQAEAKAAALQAAAMgEAHQgEAKgJAFQgIAFgIAAQgFAAgGgDQgFgDgDgEIAAAmgAgOgjQgGAIAAAPQAAANAGAHQAGAHAIAAQAHAAAGgHQAHgIAAgNQAAgPgGgIQgHgHgHAAQgHAAgHAIg");
	this.shape_58.setTransform(179.2,39.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AASAnIAAgtQAAgIgCgEQgBgEgEgCQgEgDgFAAQgHAAgGAFQgGAGAAAPIAAAoIgNAAIAAhMIAMAAIAAAMQAJgNANAAQAIAAAGACQAFADAEAEQACAEABAGIABAMIAAAug");
	this.shape_59.setTransform(170.6,37.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_60.setTransform(164.8,36.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AAnAnIAAgvIgBgLQgCgEgDgCQgDgCgFAAQgIAAgGAGQgFAFAAAMIAAArIgLAAIAAgwQAAgJgDgEQgEgFgHAAQgFAAgFADQgFADgCAGQgCAFAAAKIAAAnIgNAAIAAhMIALAAIAAALQAEgFAGgEQAGgDAIAAQAJAAAFADQAEAEACAGQAJgNAPAAQAMAAAGAGQAGAHAAANIAAAzg");
	this.shape_61.setTransform(152.7,37.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_62.setTransform(144.8,36.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgUAnIAAhMIAMAAIAAAMQAFgIADgDQADgCAEAAQAHAAAHAEIgFAMQgFgDgEAAQgFAAgCADQgDADgBAEQgCAHAAAIIAAAng");
	this.shape_63.setTransform(141.2,37.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgBAzQgDgDgCgEQgBgEgBgMIAAgqIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIAMAAIAAALIgMAAIAAAsIAAAGIADAEIAEAAIAFAAIACALIgKABQgGAAgDgBg");
	this.shape_64.setTransform(136.1,36.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgUAnIAAhMIAMAAIAAAMQAFgIADgDQADgCAEAAQAHAAAHAEIgFAMQgFgDgEAAQgFAAgCADQgDADgBAEQgCAHAAAIIAAAng");
	this.shape_65.setTransform(127.9,37.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_66.setTransform(120.6,38);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AghAmIAAgKIAwg3IgPABIgeAAIAAgMIA+AAIAAAJIgpAwIgIAJIARgBIAiAAIAAALg");
	this.shape_67.setTransform(112.7,38);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_68.setTransform(107.3,36.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_69.setTransform(103.9,36.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_70.setTransform(100.6,36.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgUArIAAAJIgMAAIAAhpIANAAIAAAmQAIgKALAAQAHAAAHADQAGACAEAGQAEAFADAHQACAGAAAIQAAAUgKALQgKALgNAAQgMAAgIgLgAgOgHQgGAHAAANQAAAOADAGQAHAKAKAAQAHAAAGgHQAHgIAAgPQAAgNgGgHQgHgHgHAAQgIAAgGAHg");
	this.shape_71.setTransform(94.9,36.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgbAiQgHgHAAgJQAAgGACgFQADgEAEgDQAEgBAGgCIALgCQAOgBAIgDIAAgEQAAgIgEgDQgFgEgJAAQgIAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAIAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAAQQAAASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgFADgIAAQgNAAgGgGgAgCAEIgLADQgEABgBADQgCADAAADQAAAGAEADQAEAEAHAAQAGAAAGgEQAGgDADgGQACgEAAgJIAAgEQgHACgNACg");
	this.shape_72.setTransform(86.3,38);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAAAzQgEgDgCgEQgBgEgBgMIAAgqIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIANAAIAAALIgNAAIAAAsIAAAGIADAEIAEAAIAGAAIABALIgKABQgGAAgCgBg");
	this.shape_73.setTransform(80.2,36.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_74.setTransform(74.2,38);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AASAnIAAgtQAAgIgBgEQgCgEgEgCQgEgDgGAAQgFAAgHAFQgGAGAAAPIAAAoIgNAAIAAhMIAMAAIAAAMQAIgNAPAAQAHAAAFACQAHADACAEQADAEACAGIAAAMIAAAug");
	this.shape_75.setTransform(62.2,37.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAPAmIgMgsIgDgOIgOA6IgOAAIgYhMIAOAAIAMArIAFARIAEgQIAMgsIAMAAIALAsIAEAOIAFgPIANgrIANAAIgYBMg");
	this.shape_76.setTransform(52.6,38);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgZAeQgKgLAAgTQAAgUAMgLQAKgIANAAQAPAAALAKQAKALAAASQAAANgFAJQgEAIgIAFQgJAFgKAAQgPAAgKgKgAgPgVQgGAHgBAOQABAOAGAIQAHAHAIAAQAKAAAGgHQAHgIgBgOQABgOgHgHQgHgHgJAAQgIAAgHAHg");
	this.shape_77.setTransform(43,38);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgEgKAAgMQAAgLAEgIQAEgJAHgFQAIgFAJAAQAGAAAFADQAGADADAEIAAgmIANAAIAABpIgMAAIAAgKQgHAMgOAAQgIAAgIgFgAgNgHQgGAHAAANQAAAPAHAIQAGAHAHAAQAIAAAGgHQAGgHAAgOQAAgPgGgHQgGgHgJAAQgHAAgGAHg");
	this.shape_78.setTransform(34.4,36.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_79.setTransform(22.1,38);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_80.setTransform(14.2,38);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgZAeQgKgLAAgTQAAgUAMgLQAKgIANAAQAPAAALAKQAKALAAASQAAANgEAJQgFAIgJAFQgJAFgJAAQgPAAgKgKgAgPgVQgHAHAAAOQAAAOAHAIQAGAHAJAAQAKAAAGgHQAHgIAAgOQAAgOgHgHQgHgHgJAAQgJAAgGAHg");
	this.shape_81.setTransform(6.3,38);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AASAnIAAgtQAAgIgCgEQgBgEgEgCQgEgDgGAAQgFAAgHAFQgGAGAAAPIAAAoIgNAAIAAhMIAMAAIAAAMQAIgNAPAAQAGAAAGACQAHADACAEQADAEACAGIAAAMIAAAug");
	this.shape_82.setTransform(-2,37.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_83.setTransform(-12.1,36.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_84.setTransform(-15.4,36.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgbAiQgHgHAAgJQAAgGACgFQADgEAEgDQAEgBAGgCIALgCQAOgBAIgDIAAgEQAAgIgEgDQgFgEgJAAQgIAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAIAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAAQQAAASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgFADgIAAQgNAAgGgGgAgCAEIgLADQgEABgBADQgCADAAADQAAAGAEADQAEAEAHAAQAGAAAGgEQAGgDADgGQACgEAAgJIAAgEQgHACgNACg");
	this.shape_85.setTransform(-21.3,38);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgKA2IAAhCIgLAAIAAgKIALAAIAAgIQAAgIACgDQACgGAEgDQADgDAJAAIAMABIgCAMIgIgBQgGAAgCACQgDADAAAHIAAAHIAQAAIAAAKIgQAAIAABCg");
	this.shape_86.setTransform(-31.3,36.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgZAeQgKgLAAgTQAAgUAMgLQAKgIANAAQAPAAALAKQAKALAAASQAAANgFAJQgEAIgJAFQgJAFgJAAQgPAAgKgKgAgPgVQgHAHAAAOQAAAOAHAIQAGAHAJAAQAKAAAGgHQAHgIgBgOQABgOgHgHQgHgHgJAAQgJAAgGAHg");
	this.shape_87.setTransform(-37.9,38);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_88.setTransform(-47.9,36.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgbAiQgHgHAAgJQAAgGACgFQADgEAEgDQAEgBAGgCIALgCQAOgBAIgDIAAgEQAAgIgEgDQgFgEgJAAQgIAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAIAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAAQQAAASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgFADgIAAQgNAAgGgGgAgCAEIgLADQgEABgBADQgCADAAADQAAAGAEADQAEAEAHAAQAGAAAGgEQAGgDADgGQACgEAAgJIAAgEQgHACgNACg");
	this.shape_89.setTransform(-53.8,38);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_90.setTransform(-61.7,38);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgUAnIAAhMIAMAAIAAAMQAFgIADgDQADgCAEAAQAHAAAHAEIgFAMQgFgDgEAAQgFAAgCADQgDADgBAEQgCAHAAAIIAAAng");
	this.shape_91.setTransform(-67.3,37.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_92.setTransform(-74.6,38);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgEAmIgehMIAOAAIARAuIADAPIAFgPIARguIANAAIgdBMg");
	this.shape_93.setTransform(-82.5,38);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_94.setTransform(-90.5,38);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgUAnIAAhMIAMAAIAAAMQAFgIADgDQADgCAEAAQAHAAAHAEIgFAMQgFgDgEAAQgFAAgCADQgDADgBAEQgCAHAAAIIAAAng");
	this.shape_95.setTransform(-96.5,37.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_96.setTransform(-108,38);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgBAzQgDgDgCgEQgBgEgBgMIAAgqIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIAMAAIAAALIgMAAIAAAsIAAAGIACAEIAFAAIAFAAIACALIgKABQgGAAgDgBg");
	this.shape_97.setTransform(-114.1,36.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgZAeQgKgLAAgTQAAgUAMgLQAKgIANAAQAQAAAKAKQAKALAAASQAAANgFAJQgEAIgIAFQgKAFgJAAQgPAAgKgKgAgPgVQgGAHgBAOQABAOAGAIQAHAHAIAAQAJAAAHgHQAGgIAAgOQAAgOgGgHQgHgHgJAAQgIAAgHAHg");
	this.shape_98.setTransform(-120.4,38);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AAbA1Ig2hSIAABSIgOAAIAAhpIAPAAIA2BSIAAhSIAOAAIAABpg");
	this.shape_99.setTransform(-130.1,36.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bitmap
	this.instance = new lib.note_regular();
	this.instance.setTransform(-190,12.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-190,12.8,827,58.5);


(lib.notebox2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGAHIAAgNIANAAIAAANg");
	this.shape.setTransform(488.9,41.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_1.setTransform(483,38);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_2.setTransform(475.1,38);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgBAzQgEgDgBgEQgBgEAAgMIAAgqIgLAAIAAgLIALAAIAAgTIALgIIAAAbIAMAAIAAALIgMAAIAAAsIAAAGIACAEIAFAAIAFAAIADALIgKABQgHAAgDgBg");
	this.shape_3.setTransform(469,36.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgbAiQgHgHAAgJQAAgGACgFQADgEAEgDQAEgBAGgCIALgCQAOgBAIgDIAAgEQAAgIgEgDQgFgEgJAAQgIAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAIAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAAQQAAASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgFADgIAAQgNAAgGgGgAgCAEIgLADQgEABgBADQgCADAAADQAAAGAEADQAEAEAHAAQAGAAAGgEQAGgDADgGQACgEAAgJIAAgEQgHACgNACg");
	this.shape_4.setTransform(462.6,38);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgUAnIAAhMIAMAAIAAAMQAFgIADgDQADgCAEAAQAHAAAHAEIgFAMQgFgDgEAAQgFAAgCADQgDADgBAEQgCAHAAAIIAAAng");
	this.shape_5.setTransform(456.5,37.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_6.setTransform(449.2,38);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_7.setTransform(443.4,36.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_8.setTransform(437.5,38);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgXAeQgJgLAAgTQAAgLAEgJQAEgKAJgFQAIgEAIAAQANAAAIAGQAIAHACALIgNACQgCgIgEgDQgFgEgGAAQgIAAgHAHQgGAHAAAOQAAAPAGAHQAGAHAIAAQAIAAAFgFQAFgEABgKIANABQgCAOgIAHQgJAIgNAAQgOAAgKgKg");
	this.shape_9.setTransform(429.9,38);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_10.setTransform(421.7,38);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgEgKAAgMQAAgLAEgIQAEgJAHgFQAIgFAJAAQAGAAAFADQAGADADAEIAAgmIANAAIAABpIgMAAIAAgKQgHAMgOAAQgIAAgIgFgAgNgHQgGAHAAANQAAAPAHAIQAGAHAHAAQAIAAAGgHQAGgHAAgOQAAgPgGgHQgGgHgJAAQgHAAgGAHg");
	this.shape_11.setTransform(413.1,36.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_12.setTransform(400.8,38);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AASAnIAAgtQAAgIgCgEQgBgEgEgCQgEgDgGAAQgFAAgHAFQgGAGAAAPIAAAoIgNAAIAAhMIAMAAIAAAMQAIgNAPAAQAHAAAFACQAHADACAEQADAEACAGIAAAMIAAAug");
	this.shape_13.setTransform(392.5,37.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgbAiQgHgHAAgJQAAgGACgFQADgEAEgDQAEgBAGgCIALgCQAOgBAIgDIAAgEQAAgIgEgDQgFgEgJAAQgIAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAIAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAAQQAAASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgFADgIAAQgNAAgGgGgAgCAEIgLADQgEABgBADQgCADAAADQAAAGAEADQAEAEAHAAQAGAAAGgEQAGgDADgGQACgEAAgJIAAgEQgHACgNACg");
	this.shape_14.setTransform(384.1,38);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_15.setTransform(378.3,36.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AggA2IAAhqIAMAAIAAALQAEgGAFgDQAGgDAFAAQAKAAAIAFQAHAFAEAJQAEAKAAALQAAAMgEAHQgEAKgJAFQgIAFgIAAQgFAAgGgDQgFgDgDgEIAAAmgAgOgjQgGAIAAAPQAAANAGAHQAGAHAIAAQAHAAAGgHQAHgIAAgNQAAgPgGgIQgHgHgHAAQgHAAgHAIg");
	this.shape_16.setTransform(372.7,39.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgUAnIAAhMIAMAAIAAAMQAFgIADgDQADgCAEAAQAHAAAHAEIgFAMQgFgDgEAAQgFAAgCADQgDADgBAEQgCAHAAAIIAAAng");
	this.shape_17.setTransform(366.4,37.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_18.setTransform(361.6,36.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgbAiQgHgHAAgJQAAgGACgFQADgEAEgDQAEgBAGgCIALgCQAOgBAIgDIAAgEQAAgIgEgDQgFgEgJAAQgIAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAIAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAAQQAAASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgFADgIAAQgNAAgGgGgAgCAEIgLADQgEABgBADQgCADAAADQAAAGAEADQAEAEAHAAQAGAAAGgEQAGgDADgGQACgEAAgJIAAgEQgHACgNACg");
	this.shape_19.setTransform(355.7,38);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_20.setTransform(343.6,38);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgbAiQgHgHAAgJQAAgGACgFQADgEAEgDQAEgBAGgCIALgCQAOgBAIgDIAAgEQAAgIgEgDQgFgEgJAAQgIAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAIAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAAQQAAASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgFADgIAAQgNAAgGgGgAgCAEIgLADQgEABgBADQgCADAAADQAAAGAEADQAEAEAHAAQAGAAAGgEQAGgDADgGQACgEAAgJIAAgEQgHACgNACg");
	this.shape_21.setTransform(335.7,38);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_22.setTransform(323.2,38);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgBAzQgDgDgCgEQgCgEAAgMIAAgqIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIAMAAIAAALIgMAAIAAAsIAAAGIACAEIAFAAIAFAAIACALIgKABQgHAAgCgBg");
	this.shape_23.setTransform(317.1,36.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgbAiQgHgHAAgJQAAgGACgFQADgEAEgDQAEgBAGgCIALgCQAOgBAIgDIAAgEQAAgIgEgDQgFgEgJAAQgIAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAIAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAAQQAAASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgFADgIAAQgNAAgGgGgAgCAEIgLADQgEABgBADQgCADAAADQAAAGAEADQAEAEAHAAQAGAAAGgEQAGgDADgGQACgEAAgJIAAgEQgHACgNACg");
	this.shape_24.setTransform(310.7,38);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgUAnIAAhMIAMAAIAAAMQAFgIADgDQADgCAEAAQAHAAAHAEIgFAMQgFgDgEAAQgFAAgCADQgDADgBAEQgCAHAAAIIAAAng");
	this.shape_25.setTransform(304.7,37.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AASA1IAAgxQAAgIgEgEQgFgFgHAAQgEAAgGADQgEADgCAFQgDAEAAAJIAAAqIgNAAIAAhpIANAAIAAAmQAJgKANAAQAIAAAHADQAFAEAEAGQACAGAAAJIAAAxg");
	this.shape_26.setTransform(293.3,36.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgWAxQgJgGABgNIANACQAAAGAEADQAFADAIAAQAIAAAFgDQAFgEABgHQABgEAAgMQgIAKgMgBQgPAAgJgLQgJgMAAgOQAAgLAEgKQAEgJAIgFQAHgFAKAAQANAAAIALIAAgKIANAAIAABCQAAASgEAIQgEAHgIAEQgIAFgKAAQgNAAgJgGgAgNgkQgGAHAAAOQAAAPAGAFQAGAIAHAAQAJAAAGgIQAGgFAAgOQAAgPgGgHQgGgHgJAAQgHAAgGAHg");
	this.shape_27.setTransform(284.7,39.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_28.setTransform(279.1,36.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AASA1IAAgxQAAgIgEgEQgFgFgHAAQgEAAgFADQgGADgBAFQgDAEAAAJIAAAqIgNAAIAAhpIANAAIAAAmQAKgKALAAQAJAAAHADQAGAEADAGQACAGAAAJIAAAxg");
	this.shape_29.setTransform(273.2,36.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgbAiQgHgHAAgJQAAgGACgFQADgEAEgDQAEgBAGgCIALgCQAOgBAIgDIAAgEQAAgIgEgDQgFgEgJAAQgIAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAIAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAAQQAAASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgFADgIAAQgNAAgGgGgAgCAEIgLADQgEABgBADQgCADAAADQAAAGAEADQAEAEAHAAQAGAAAGgEQAGgDADgGQACgEAAgJIAAgEQgHACgNACg");
	this.shape_30.setTransform(260.7,38);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgBAzQgDgDgCgEQgBgEgBgMIAAgqIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIAMAAIAAALIgMAAIAAAsIAAAGIADAEIAEAAIAFAAIACALIgKABQgGAAgDgBg");
	this.shape_31.setTransform(250.4,36.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgbAiQgHgHAAgJQAAgGACgFQADgEAEgDQAEgBAGgCIALgCQAOgBAIgDIAAgEQAAgIgEgDQgFgEgJAAQgIAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAIAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAAQQAAASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgFADgIAAQgNAAgGgGgAgCAEIgLADQgEABgBADQgCADAAADQAAAGAEADQAEAEAHAAQAGAAAGgEQAGgDADgGQACgEAAgJIAAgEQgHACgNACg");
	this.shape_32.setTransform(244,38);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_33.setTransform(231.9,38);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAAAzQgFgDgBgEQgCgEABgMIAAgqIgKAAIAAgLIAKAAIAAgTIAKgIIAAAbIAOAAIAAALIgOAAIAAAsIABAGIADAEIAEAAIAGAAIABALIgJABQgIAAgBgBg");
	this.shape_34.setTransform(226.3,36.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgQAlQgGgDgDgEQgDgEgBgGIgBgMIAAgvIAOAAIAAAqIAAAOQABAFAEADQAFADAGAAQADAAAGgDQAEgDADgFQACgGAAgJIAAgpIANAAIAABMIgMAAIAAgLQgJANgOAAQgGAAgGgCg");
	this.shape_35.setTransform(219.9,38.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AggA2IAAhqIAMAAIAAALQAEgGAFgDQAGgDAFAAQAKAAAIAFQAHAFAEAJQAEAKAAALQAAAMgEAHQgEAKgJAFQgIAFgIAAQgFAAgGgDQgFgDgDgEIAAAmgAgOgjQgGAIAAAPQAAANAGAHQAGAHAIAAQAHAAAGgHQAHgIAAgNQAAgPgGgIQgHgHgHAAQgHAAgHAIg");
	this.shape_36.setTransform(211.8,39.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AASAnIAAgtQAAgIgBgEQgCgEgEgCQgEgDgGAAQgGAAgGAFQgGAGAAAPIAAAoIgNAAIAAhMIAMAAIAAAMQAJgNANAAQAHAAAHACQAGADADAEQACAEABAGIABAMIAAAug");
	this.shape_37.setTransform(203.2,37.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_38.setTransform(197.4,36.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAnAnIAAgvIgBgLQgCgEgDgCQgDgCgFAAQgIAAgGAGQgFAFAAAMIAAArIgLAAIAAgwQAAgJgDgEQgEgFgHAAQgFAAgFADQgFADgCAGQgCAFAAAKIAAAnIgNAAIAAhMIALAAIAAALQAEgFAGgEQAGgDAIAAQAJAAAFADQAEAEACAGQAJgNAPAAQAMAAAGAGQAGAHAAANIAAAzg");
	this.shape_39.setTransform(185.3,37.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_40.setTransform(177.4,36.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgUAnIAAhMIAMAAIAAAMQAFgIADgDQADgCAEAAQAHAAAHAEIgFAMQgFgDgEAAQgFAAgCADQgDADgBAEQgCAHAAAIIAAAng");
	this.shape_41.setTransform(173.8,37.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgBAzQgEgDgBgEQgCgEAAgMIAAgqIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIAMAAIAAALIgMAAIAAAsIAAAGIACAEIAFAAIAFAAIADALIgLABQgGAAgDgBg");
	this.shape_42.setTransform(168.7,36.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgUAnIAAhMIAMAAIAAAMQAFgIADgDQADgCAEAAQAHAAAHAEIgFAMQgFgDgEAAQgFAAgCADQgDADgBAEQgCAHAAAIIAAAng");
	this.shape_43.setTransform(160.5,37.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_44.setTransform(153.2,38);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AghAmIAAgKIAvg3IgOABIgeAAIAAgMIA9AAIAAAJIgoAwIgIAJIARgBIAiAAIAAALg");
	this.shape_45.setTransform(145.3,38);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_46.setTransform(139.9,36.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_47.setTransform(136.5,36.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_48.setTransform(133.2,36.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgUArIAAAJIgMAAIAAhpIANAAIAAAmQAIgKALAAQAHAAAHADQAGACAEAGQAEAFADAHQACAGAAAIQAAAUgKALQgKALgNAAQgMAAgIgLgAgOgHQgGAHAAANQAAAOADAGQAHAKAKAAQAHAAAGgHQAHgIAAgPQAAgNgGgHQgHgHgHAAQgIAAgGAHg");
	this.shape_49.setTransform(127.5,36.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgbAiQgHgHAAgJQAAgGACgFQADgEAEgDQAEgBAGgCIALgCQAOgBAIgDIAAgEQAAgIgEgDQgFgEgJAAQgIAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAIAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAAQQAAASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgFADgIAAQgNAAgGgGgAgCAEIgLADQgEABgBADQgCADAAADQAAAGAEADQAEAEAHAAQAGAAAGgEQAGgDADgGQACgEAAgJIAAgEQgHACgNACg");
	this.shape_50.setTransform(118.9,38);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgBAzQgDgDgCgEQgCgEAAgMIAAgqIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIAMAAIAAALIgMAAIAAAsIAAAGIACAEIAFAAIAFAAIACALIgKABQgHAAgCgBg");
	this.shape_51.setTransform(112.8,36.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_52.setTransform(106.8,38);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AASAnIAAgtQAAgIgCgEQgBgEgEgCQgEgDgFAAQgGAAgHAFQgGAGAAAPIAAAoIgNAAIAAhMIAMAAIAAAMQAIgNAPAAQAGAAAGACQAHADACAEQADAEACAGIAAAMIAAAug");
	this.shape_53.setTransform(94.8,37.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAPAmIgMgsIgDgOIgOA6IgOAAIgYhMIAOAAIAMArIAFARIAEgQIAMgsIAMAAIALAsIAEAOIAFgPIANgrIANAAIgYBMg");
	this.shape_54.setTransform(85.2,38);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgZAeQgKgLAAgTQAAgUAMgLQAKgIANAAQAPAAALAKQAKALAAASQAAANgEAJQgFAIgJAFQgJAFgJAAQgPAAgKgKgAgPgVQgHAHAAAOQAAAOAHAIQAGAHAJAAQAKAAAGgHQAHgIAAgOQAAgOgHgHQgHgHgJAAQgJAAgGAHg");
	this.shape_55.setTransform(75.6,38);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgEgKAAgMQAAgLAEgIQAEgJAHgFQAIgFAJAAQAGAAAFADQAGADADAEIAAgmIANAAIAABpIgMAAIAAgKQgHAMgOAAQgIAAgIgFgAgNgHQgGAHAAANQAAAPAHAIQAGAHAHAAQAIAAAGgHQAGgHAAgOQAAgPgGgHQgGgHgJAAQgHAAgGAHg");
	this.shape_56.setTransform(67,36.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_57.setTransform(54.7,38);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_58.setTransform(46.8,38);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgZAeQgKgLAAgTQAAgUAMgLQAKgIANAAQAPAAAKAKQALALAAASQAAANgEAJQgFAIgJAFQgIAFgKAAQgPAAgKgKgAgPgVQgHAHABAOQgBAOAHAIQAGAHAJAAQAJAAAHgHQAGgIABgOQgBgOgGgHQgHgHgJAAQgJAAgGAHg");
	this.shape_59.setTransform(38.9,38);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AASAnIAAgtQAAgIgCgEQgBgEgEgCQgEgDgFAAQgHAAgGAFQgGAGAAAPIAAAoIgNAAIAAhMIAMAAIAAAMQAIgNAOAAQAIAAAFACQAHADACAEQADAEACAGIAAAMIAAAug");
	this.shape_60.setTransform(30.6,37.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_61.setTransform(18,38);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgBAzQgDgDgCgEQgBgEgBgMIAAgqIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIAMAAIAAALIgMAAIAAAsIAAAGIACAEIAFAAIAFAAIACALIgKABQgGAAgDgBg");
	this.shape_62.setTransform(11.9,36.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgZAeQgKgLAAgTQAAgUAMgLQAKgIANAAQAQAAAKAKQAKALAAASQAAANgFAJQgEAIgIAFQgKAFgJAAQgPAAgKgKgAgPgVQgGAHgBAOQABAOAGAIQAHAHAIAAQAJAAAHgHQAGgIAAgOQAAgOgGgHQgHgHgJAAQgIAAgHAHg");
	this.shape_63.setTransform(5.6,38);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAbA1Ig2hSIAABSIgOAAIAAhpIAPAAIA2BSIAAhSIAOAAIAABpg");
	this.shape_64.setTransform(-4.1,36.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bitmap
	this.instance = new lib.note_regular();
	this.instance.setTransform(-64,12.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64,12.8,564,58.5);


(lib.instruction = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYAsQgKgFgEgIQgFgJABgLQgBgaARgRQANgPATAAQARAAAKAKQALALAAASQAAAOgHAOQgGAOgMAHQgMAHgMAAQgLAAgIgEgAgGgfQgGADgFAHQgFAHgCAJQgDAHAAAHQAAANAGAHQAHAHAJAAQAFAAADgCQAFgCAFgEIAIgKIAFgMQACgGAAgIQAAgNgHgHQgGgHgKAAQgFAAgGAEg");
	this.shape.setTransform(395.3,520.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYAsQgIgFgFgJQgEgKgBgLQAAgNAIgPQAHgOAKgHQAMgHALAAQARAAAKAKQAKALAAARIgBANIhDAAIAAAEQgBAOAHAGQAFAHAJAAQAGAAAIgFQAIgFAEgKIAQABQgEAMgMAKQgLAKgPAAQgLAAgIgEgAgKgcQgIAHgFAOIAyAAIABgDQAAgMgGgGQgGgHgJAAQgJAAgIAHg");
	this.shape_1.setTransform(385.2,520.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgnA4QgJgLAAgSQAAgRAIgMQAHgPAKgGQAKgIALABQAPAAAJARIALgzIAPAAIgaB/IgPAAIADgOQgLAQgPAAQgOAAgJgJgAgMgPQgEACgFAHQgFAGgDAHQgCAKAAAHQgBAJACAGQACAGAFADQAFAEAGAAQALAAAGgLQANgPAAgWQgBgJgFgGQgGgHgHAAQgGAAgFADg");
	this.shape_2.setTransform(375.8,518.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgUBAIAUhcIAOAAIgSBcgAABgtIAEgSIAQAAIgEASg");
	this.shape_3.setTransform(368.6,518.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgaAuIgQhbIAQAAIAIAxIADAcIAMgXIAdg2IARAAIg0Bbg");
	this.shape_4.setTransform(362.7,520.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAAAuIgCg1IAAgTIgJAUIgYA0IgRAAIgJhbIAPAAIAEAqIABAVIABALIAFgOIAFgNIAXgvIAPAAIADAtIABAcIAPgfIAUgqIAQAAIguBbg");
	this.shape_5.setTransform(346.7,520.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgYAsQgJgFgEgJQgFgKABgLQAAgNAGgPQAHgOALgHQAMgHALAAQARAAAKAKQAJALAAARIgBANIhCAAIgBAEQABAOAGAGQAFAHAJAAQAGAAAIgFQAIgFAFgKIAPABQgDAMgMAKQgNAKgOAAQgKAAgJgEgAgKgcQgJAHgDAOIAxAAIABgDQAAgMgGgGQgGgHgKAAQgIAAgIAHg");
	this.shape_6.setTransform(334.2,520.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgUBAIAUhcIAOAAIgSBcgAABgtIAEgSIAQAAIgEASg");
	this.shape_7.setTransform(327.6,518.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgaAuIgQhbIAQAAIAIAxIADAcIAMgXIAdg2IARAAIg0Bbg");
	this.shape_8.setTransform(321.7,520.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgYAsQgKgFgEgIQgEgJAAgLQgBgaARgRQAMgPAUAAQARAAALAKQAJALABASQAAAOgHAOQgGAOgMAHQgNAHgLAAQgKAAgJgEgAgGgfQgGADgFAHQgFAHgCAJQgDAHAAAHQAAANAGAHQAHAHAJAAQAFAAADgCQAFgCAFgEIAHgKIAGgMQACgGAAgIQAAgNgHgHQgGgHgKAAQgFAAgGAEg");
	this.shape_9.setTransform(306.3,520.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgSA8QgFgEAAgGIADgPIALg0IgMAAIACgMIANAAIAFgXIAQgLIgIAiIARAAIgEAMIgPAAIgIAyIgDAMQAAABABAAQAAABAAAAQAAABAAAAQABABAAAAQACABACABIAIgBIgCAMIgJACQgKAAgFgEg");
	this.shape_10.setTransform(299.4,519);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgSA8QgFgEAAgGIADgPIALg0IgNAAIADgMIANAAIAFgXIAQgLIgHAiIAQAAIgEAMIgPAAIgJAyIgCAMQAAABABAAQAAABAAAAQAAABAAAAQABABAAAAQACABACABIAIgBIgCAMIgJACQgJAAgGgEg");
	this.shape_11.setTransform(289.4,519);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgeAnQgKgKAAgSQABgNAFgPQAHgPALgHQALgIANAAQAPAAAIAIQAJAJAAAOIgPABQgBgJgFgFQgFgFgHAAQgIAAgHAGQgIAGgDAMQgFALAAALQABAMAFAGQAFAGAIAAQAFAAAIgGQAHgGAEgMIAQACQgGARgLAJQgLAIgNAAQgOAAgKgJg");
	this.shape_12.setTransform(282.1,520.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgYAsQgJgFgEgJQgFgKABgLQAAgNAGgPQAIgOAKgHQAMgHALAAQARAAAKAKQAJALAAARIgBANIhCAAIgBAEQABAOAFAGQAHAHAIAAQAGAAAIgFQAIgFAFgKIAPABQgDAMgMAKQgNAKgOAAQgLAAgIgEgAgKgcQgJAHgDAOIAyAAIAAgDQAAgMgGgGQgGgHgKAAQgIAAgIAHg");
	this.shape_13.setTransform(272.2,520.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgUBAIAZh/IAQAAIgZB/g");
	this.shape_14.setTransform(265.6,518.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgYAsQgJgFgEgJQgEgKgBgLQAAgNAIgPQAGgOAMgHQALgHALAAQARAAAKAKQAKALAAARIgBANIhDAAIAAAEQgBAOAHAGQAFAHAJAAQAGAAAIgFQAIgFAEgKIAQABQgEAMgMAKQgMAKgOAAQgLAAgIgEgAgKgcQgIAHgFAOIAzAAIAAgDQAAgMgGgGQgGgHgJAAQgJAAgIAHg");
	this.shape_15.setTransform(258.2,520.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgnA5QgOgKAAgZIARgBIAAAEQAAAHAEAHQADAGAIAEQAIADALAAQANAAAIgHQAIgHAAgIQAAgHgEgEQgEgGgTgIQgOgFgGgDQgIgGgEgGQgFgHAAgIQAAgLAGgHQAFgJALgEQAKgEALAAQAQAAALAFQALAGAFAIQAFAJAAAIIAAACIgRACIgBgIQgCgGgEgDQgDgEgHgCQgGgCgIAAQgMAAgIAFQgGAGAAAIQAAAEACAEQADADAGAFIAUAKIATAHQAHAFAEAHQAEAGAAAJQAAAKgHAJQgGAIgLAFQgLAFgNAAQgWAAgOgJg");
	this.shape_16.setTransform(247.6,518.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1,0,0,3).p("EAyEAa+IAADtMhkHAAAIAAjtMBkHAAAMAAAg5oMhkHAAAMAAAA5o");
	this.shape_17.setTransform(320.5,334.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFCC00").s().p("EgyDAB2IAAjrMBkHAAAIAADrg");
	this.shape_18.setTransform(320.5,518.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,137,643,394.7);


(lib.box_baseGREYDKcopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape.setTransform(142.7,18.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_1.setTransform(132.7,18.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGBAIAAhcIAOAAIAABcgAgGgtIAAgSIAOAAIAAASg");
	this.shape_2.setTransform(125.7,16.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_3.setTransform(121.3,16.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AghApQgIgIgBgLQAAgHADgGQAEgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQACgKAFgGQAFgHAJgDQAKgDAJAAQAMAAAIADQAHACADAFQAFAEABAGIAAAPIAAATQAAAWABAGQABAGAEAFIgRAAQgCgFgBgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgDAFQgJACgEACQgEABgDAEQgBADAAAEQAAAHAEAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQADgFgBgLIAAgFQgIADgQACg");
	this.shape_4.setTransform(113.7,18.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGAuIgjhbIAQAAIAUA2IAFATIAFgSIAVg3IAQAAIgjBbg");
	this.shape_5.setTransform(104.2,18.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgGBAIAAhcIANAAIAABcgAgGgtIAAgSIANAAIAAASg");
	this.shape_6.setTransform(97.7,16.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_7.setTransform(93.3,16.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_8.setTransform(86.5,18.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AApBAIgQgnIgzAAIgPAnIgSAAIAyh/IAQAAIA1B/gAgIgYIgNAjIApAAIgNghIgHgbQgDAMgFANg");
	this.shape_9.setTransform(75.7,16.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAIAAAJAFIgFAPQgHgEgFAAQgGAAgCADQgDADgCAGQgDAIAAAKIAAAvg");
	this.shape_10.setTransform(63.4,18.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgIAAgIAHg");
	this.shape_11.setTransform(54.7,18.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AATBAIgdgwIgLALIAAAlIgQAAIAAh/IAQAAIAABIIAjglIAUAAIgiAhIAmA7g");
	this.shape_12.setTransform(45.8,16.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQADgKAEgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgGADgJAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_13.setTransform(35.7,18.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAVBAIAAg7QABgKgGgGQgEgFgKAAQgFAAgHAEQgFAEgDAFQgDAFAAALIAAAzIgQAAIAAh/IAQAAIAAAvQALgNAPgBQAKAAAIAFQAIAEADAHQADAHABAMIAAA7g");
	this.shape_14.setTransform(25.7,16.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgYA9QgMgFgHgKQgGgLgBgNIAQgBQACAKAEAGQAEAHAJADQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgEQgEgFgIgDIgVgHQgRgDgHgDQgKgFgEgGQgFgIAAgJQAAgKAGgIQAFgJALgDQALgFAMAAQANAAALAFQALAEAGAJQAGAJAAALIgQACQgCgNgHgGQgIgGgOAAQgOAAgHAFQgHAGAAAIQAAAIAFADQAFAFASAFQAVAEAIAEQALADAGAJQAFAHAAALQAAAKgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape_15.setTransform(14.6,16.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AATBAIgdgwIgLALIAAAlIgQAAIAAh/IAQAAIAABIIAjglIAUAAIgiAhIAmA7g");
	this.shape_16.setTransform(-0.2,16.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_17.setTransform(-9.5,18.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_18.setTransform(-16.3,16.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_19.setTransform(-20.7,16.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgYA9QgMgFgHgKQgGgLgBgNIAQgBQACAKAEAGQAEAHAJADQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgEQgEgFgIgDIgVgHQgRgDgHgDQgKgFgEgGQgFgIAAgJQAAgKAGgIQAFgJALgDQALgFAMAAQANAAALAFQALAEAGAJQAGAJAAALIgQACQgCgNgHgGQgIgGgOAAQgOAAgHAFQgHAGAAAIQAAAIAFADQAFAFASAFQAVAEAIAEQALADAGAJQAFAHAAALQAAAKgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape_20.setTransform(-29.4,16.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// box
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#666666").s().p("AwCiVMAgFAAAIghAbI/EAAIAAD1IggAbg");
	this.shape_21.setTransform(56.2,17);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#151515").s().p("AwCCWIAggbIfEAAIAAj1IAhgbIAAErg");
	this.shape_22.setTransform(56.2,17);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#404040").s().p("AvhB7IAAj1IfDAAIAAD1g");
	this.shape_23.setTransform(56.2,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.5,2,205.5,30);


(lib.box_baseGREYDK = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgnBBIAAh/IAPAAIAAAMQAEgHAHgEQAGgDAIAAQALAAAJAGQAKAGAEALQAFAMAAANQAAAOgFAKQgFALgKAGQgKAGgKAAQgGAAgHgDQgHgDgDgFIAAAtgAgRgqQgIAJAAASQAAAQAIAJQAHAIAKAAQAJAAAIgJQAGgIAAgRQAAgSgGgJQgIgJgJAAQgJAAgIAKg");
	this.shape.setTransform(87.5,20.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcA7QgLgHgFgLQgFgMAAgUIAAhJIARAAIAABJQAAARADAHQADAIAIAFQAHAEALAAQARAAAIgJQAIgIAAgYIAAhJIARAAIAABJQAAATgEALQgFAMgLAHQgLAHgTAAQgQAAgMgGg");
	this.shape_1.setTransform(75.7,16.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_2.setTransform(59.6,18.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgnBBIAAh/IAPAAIAAAMQAFgHAGgEQAGgDAIAAQALAAAJAGQAKAGAEALQAFAMAAANQAAAOgFAKQgFALgKAGQgKAGgKAAQgHAAgGgDQgGgDgEgFIAAAtgAgRgqQgIAJAAASQAAAQAHAJQAIAIAKAAQAJAAAHgJQAIgIgBgRQABgSgIgJQgHgJgJAAQgJAAgIAKg");
	this.shape_3.setTransform(50.5,20.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQADgKAEgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgGADgJAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_4.setTransform(40.2,18.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_5.setTransform(33.2,16.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgqBAIAAh/IBVAAIAAAPIhEAAIAAApIA7AAIAAAMIg7AAIAAA7g");
	this.shape_6.setTransform(26,16.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// box
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AoOiVIQdAAIghAbIvcAAIAAD1IggAbg");
	this.shape_7.setTransform(56.2,17);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#151515").s().p("AoOCWIAggbIPcAAIAAj1IAhgbIAAErg");
	this.shape_8.setTransform(56.2,17);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#404040").s().p("AnuB7IAAj1IPcAAIAAD1g");
	this.shape_9.setTransform(56.2,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.5,2,105.5,30);


(lib.Turb_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.instruction("synched",0);
	this.instance.setTransform(320.4,265.6,1,1,0,0,0,320.4,265.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.sts01p38_video();
	this.instance_1.setTransform(27.5,137.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4087B0").s().p("EgyDAetMAAAg9ZMBkHAAAMAAAA9Zg");
	this.shape.setTransform(320.4,334.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,137,642.9,394.7);


// stage content:
(lib.dif05stsp18 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{s1:0,s2:357});

	// timeline functions:
	this.frame_0 = function() {
		/*   Video Template  v1.0 (Jun 2015)
			 Designed for DreamSky Player v4.1+ or Aurora Html5 Player v1.0+
		 	 All rights reserved.
		*/
		
		// Interactive
		
		var normalData = new Object();
		
		// Timeline variables and Functions
		this.outputData = "";
		
		this.saveTemplateData  = function ()
		{
		
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
	this.frame_6 = function() {
		this.btn1.addEventListener("click", btn1Handler.bind(this));
		
		function btn1Handler()
		{          
				pageControllerAPI.showVideo({
		                    title: "Approach to Stall Demonstration",
		                    url: "05/video/sts01p19_video.mp4"
		                }); 
		
		}
	}
	this.frame_356 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
	}
	this.frame_470 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(350).call(this.frame_356).wait(114).call(this.frame_470).wait(1));

	// prot
	this.prot = new lib.prot();
	this.prot.setTransform(500,275,1,1,0,0,0,500,275);

	this.timeline.addTween(cjs.Tween.get(this.prot).wait(471));

	// stick shaker
	this.instance = new lib.box_baseGREYDKcopy2("synched",0);
	this.instance.setTransform(346.9,403.4,1,1,0,0,0,61.6,34);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(202).to({_off:false},0).to({alpha:1},5).wait(264));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_13 = new cjs.Graphics().p("EhOGAq9MAAAhV5MCcNAAAMAAABV5g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(13).to({graphics:mask_graphics_13,x:500,y:275}).wait(458));

	// note
	this.instance_1 = new lib.notebox2copy4("synched",0);
	this.instance_1.setTransform(750,695.4,1,1,0,0,0,471.9,158.2);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(360).to({_off:false},0).to({y:638.4},5).wait(60).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(40));

	// note
	this.instance_2 = new lib.notebox2("synched",0);
	this.instance_2.setTransform(750,694.4,1,1,0,0,0,471.9,158.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(202).to({_off:false},0).to({y:638.4,alpha:1},5).wait(34).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(224));

	// flaps up
	this.instance_3 = new lib.box_baseGREYDK("synched",0);
	this.instance_3.setTransform(636.9,110.4,1,1,0,0,0,61.6,34);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(471));

	// Layer 1
	this.btn1 = new lib.Turb_base();
	this.btn1.setTransform(499.6,196.7,1,1,0,0,0,320,256);

	this.timeline.addTween(cjs.Tween.get(this.btn1).wait(471));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(500,275,1000,550);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;