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
		{src:"images/as01p02_bleedpanel.png", id:"as01p02_bleedpanel"},
		{src:"images/b737_max_9_cockpit.png", id:"b737_max_9_cockpit"},
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



(lib.as01p02_bleedpanel = function() {
	this.initialize(img.as01p02_bleedpanel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,634,925);


(lib.b737_max_9_cockpit = function() {
	this.initialize(img.b737_max_9_cockpit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1721,2055);


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


(lib.notebox2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGAHIAAgNIANAAIAAANg");
	this.shape.setTransform(608.8,41.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_1.setTransform(602.9,38);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgBAzQgEgDgBgEQgBgEAAgMIAAgqIgLAAIAAgLIALAAIAAgTIAKgIIAAAbIANAAIAAALIgNAAIAAAsIABAGIACAEIAFAAIAFAAIADALIgKABQgHAAgDgBg");
	this.shape_2.setTransform(597.2,36.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgUAnIAAhMIAMAAIAAAMQAFgIADgDQADgCAEAAQAHAAAHAEIgFAMQgFgDgEAAQgFAAgCADQgDADgBAEQgCAHAAAIIAAAng");
	this.shape_3.setTransform(593.1,37.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_4.setTransform(585.8,38);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_5.setTransform(580,36.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgbAiQgHgHAAgJQAAgGACgFQADgEAEgDQAEgBAGgCIALgCQAOgBAIgDIAAgEQAAgIgEgDQgFgEgJAAQgIAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAIAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAAQQAAASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgFADgIAAQgNAAgGgGgAgCAEIgLADQgEABgBADQgCADAAADQAAAGAEADQAEAEAHAAQAGAAAGgEQAGgDADgGQACgEAAgJIAAgEQgHACgNACg");
	this.shape_6.setTransform(574.1,38);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAnAnIAAgvIgBgLQgCgEgDgCQgDgCgFAAQgIAAgGAGQgFAFAAAMIAAArIgLAAIAAgwQAAgJgDgEQgEgFgHAAQgFAAgFADQgFADgCAGQgCAFAAAKIAAAnIgNAAIAAhMIALAAIAAALQAEgFAGgEQAGgDAIAAQAJAAAFADQAEAEACAGQAJgNAPAAQAMAAAGAGQAGAHAAANIAAAzg");
	this.shape_7.setTransform(559.6,37.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_8.setTransform(549.1,38);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgBAzQgDgDgCgEQgCgEAAgMIAAgqIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIAMAAIAAALIgMAAIAAAsIAAAGIACAEIAFAAIAFAAIACALIgKABQgHAAgCgBg");
	this.shape_9.setTransform(543,36.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_10.setTransform(537,38);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgbA1IgBgNIAHACQAEAAADgCQACgBACgDIAEgKIABgDIgdhMIAOAAIAQAtIAEAQQACgIAEgIIAQgtIANAAIgdBNQgFANgBAFQgDAGgFADQgFADgFAAIgJgBg");
	this.shape_11.setTransform(529.7,39.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgUAyQgKgDgFgJQgGgJAAgKIANgBQABAIAEAEQADAFAIAEQAHADAHAAQAIAAAGgCQAHgDADgEQADgEAAgFQAAgFgDgEQgDgDgHgDIgRgGQgPgDgGgBQgHgFgEgFQgEgGAAgHQAAgJAFgHQAEgHAJgDQAJgEAKAAQALAAAJAEQAJADAFAIQAFAIAAAJIgNABQgBgKgHgGQgGgEgMAAQgLgBgGAFQgGAFAAAHQAAAFAEAEQAEADAPAEQASAFAGACQAKADAEAGQAEAHAAAIQAAAJgEAIQgFAIgKADQgJAFgLAAQgNAAgKgFg");
	this.shape_12.setTransform(520.8,36.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgUAnIAAhMIAMAAIAAAMQAFgIADgDQADgCAEAAQAHAAAHAEIgFAMQgFgDgEAAQgFAAgCADQgDADgBAEQgCAHAAAIIAAAng");
	this.shape_13.setTransform(509.8,37.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_14.setTransform(505,36.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAhA1IgMggIgrAAIgMAgIgPAAIAphpIAOAAIAsBpgAgGgUIgMAdIAiAAIgLgcIgFgWQgCAKgEALg");
	this.shape_15.setTransform(498.4,36.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgEgKAAgMQAAgLAEgIQAEgJAHgFQAIgFAJAAQAGAAAFADQAGADADAEIAAgmIANAAIAABpIgMAAIAAgKQgHAMgOAAQgIAAgIgFgAgNgHQgGAHAAANQAAAPAHAIQAGAHAHAAQAIAAAGgHQAGgHAAgOQAAgPgGgHQgGgHgJAAQgHAAgGAHg");
	this.shape_16.setTransform(485.6,36.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_17.setTransform(477.5,38);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgWAxQgJgGABgNIANACQAAAGAEADQAFADAIAAQAIAAAFgDQAFgEABgHQABgEAAgMQgIAKgMgBQgPAAgJgLQgJgMAAgOQAAgLAEgKQAEgJAIgFQAHgFAKAAQANAAAIALIAAgKIANAAIAABCQAAASgEAIQgEAHgIAEQgIAFgKAAQgNAAgJgGgAgNgkQgGAHAAAOQAAAPAGAFQAGAIAHAAQAJAAAGgIQAGgFAAgOQAAgPgGgHQgGgHgJAAQgHAAgGAHg");
	this.shape_18.setTransform(468.9,39.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AASAnIAAgtQAAgIgBgEQgCgEgEgCQgEgDgGAAQgFAAgHAFQgGAGAAAPIAAAoIgNAAIAAhMIAMAAIAAAMQAIgNAPAAQAHAAAGACQAFADAEAEQACAEABAGIABAMIAAAug");
	this.shape_19.setTransform(460.8,37.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgbAiQgHgHAAgJQAAgGACgFQADgEAEgDQAEgBAGgCIALgCQAOgBAIgDIAAgEQAAgIgEgDQgFgEgJAAQgIAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAIAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAAQQAAASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgFADgIAAQgNAAgGgGgAgCAEIgLADQgEABgBADQgCADAAADQAAAGAEADQAEAEAHAAQAGAAAGgEQAGgDADgGQACgEAAgJIAAgEQgHACgNACg");
	this.shape_20.setTransform(452.4,38);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AASA1IAAgxQAAgIgEgEQgFgFgHAAQgEAAgGADQgEADgCAFQgDAEAAAJIAAAqIgNAAIAAhpIANAAIAAAmQAKgKAMAAQAIAAAHADQAFAEAEAGQACAGAAAJIAAAxg");
	this.shape_21.setTransform(444.1,36.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgXAeQgJgLAAgTQAAgLAEgJQAEgKAJgFQAIgEAIAAQANAAAIAGQAIAHACALIgNACQgCgIgEgDQgFgEgGAAQgIAAgHAHQgGAHAAAOQAAAPAGAHQAGAHAIAAQAIAAAFgFQAFgEABgKIANABQgCAOgIAHQgJAIgNAAQgOAAgKgKg");
	this.shape_22.setTransform(436.4,38);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgUAnIAAhMIAMAAIAAAMQAFgIADgDQADgCAEAAQAHAAAHAEIgFAMQgFgDgEAAQgFAAgCADQgDADgBAEQgCAHAAAIIAAAng");
	this.shape_23.setTransform(426.4,37.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgZAeQgKgLAAgTQAAgUAMgLQAKgIANAAQAQAAAKAKQAKALAAASQAAANgFAJQgEAIgIAFQgKAFgJAAQgPAAgKgKgAgPgVQgGAHgBAOQABAOAGAIQAHAHAIAAQAJAAAHgHQAGgIAAgOQAAgOgGgHQgHgHgJAAQgIAAgHAHg");
	this.shape_24.setTransform(419.1,38);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAPAmIgMgsIgDgOIgOA6IgOAAIgYhMIAOAAIAMArIAFARIAEgQIAMgsIAMAAIALAsIAEAOIAFgPIANgrIANAAIgYBMg");
	this.shape_25.setTransform(405.3,38);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_26.setTransform(395.7,38);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AASAnIAAgtQAAgIgCgEQgBgEgEgCQgEgDgFAAQgHAAgGAFQgGAGAAAPIAAAoIgNAAIAAhMIAMAAIAAAMQAIgNAOAAQAIAAAFACQAHADACAEQADAEACAGIAAAMIAAAug");
	this.shape_27.setTransform(387.4,37.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_28.setTransform(377.4,36.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_29.setTransform(374,36.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgbAiQgHgHAAgJQAAgGACgFQADgEAEgDQAEgBAGgCIALgCQAOgBAIgDIAAgEQAAgIgEgDQgFgEgJAAQgIAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAIAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAAQQAAASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgFADgIAAQgNAAgGgGgAgCAEIgLADQgEABgBADQgCADAAADQAAAGAEADQAEAEAHAAQAGAAAGgEQAGgDADgGQACgEAAgJIAAgEQgHACgNACg");
	this.shape_30.setTransform(368.2,38);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AASA1IAAgxQAAgIgEgEQgEgFgJAAQgDAAgGADQgEADgDAFQgCAEAAAJIAAAqIgNAAIAAhpIANAAIAAAmQAJgKANAAQAIAAAGADQAHAEACAGQADAGAAAJIAAAxg");
	this.shape_31.setTransform(355.7,36.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAAAzQgFgDgBgEQgCgEABgMIAAgqIgKAAIAAgLIAKAAIAAgTIAKgIIAAAbIAOAAIAAALIgOAAIAAAsIABAGIADAEIAEAAIAGAAIABALIgJABQgIAAgBgBg");
	this.shape_32.setTransform(349.6,36.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_33.setTransform(345.7,36.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAPAmIgMgsIgDgOIgOA6IgOAAIgYhMIAOAAIAMArIAFARIAEgQIAMgsIAMAAIALAsIAEAOIAFgPIANgrIANAAIgYBMg");
	this.shape_34.setTransform(338.6,38);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgEgKAAgMQAAgLAEgIQAEgJAHgFQAIgFAJAAQAGAAAFADQAGADADAEIAAgmIANAAIAABpIgMAAIAAgKQgHAMgOAAQgIAAgIgFgAgNgHQgGAHAAANQAAAPAHAIQAGAHAHAAQAIAAAGgHQAGgHAAgOQAAgPgGgHQgGgHgJAAQgHAAgGAHg");
	this.shape_35.setTransform(324.6,36.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_36.setTransform(316.5,38);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgBAzQgDgDgCgEQgCgEAAgMIAAgqIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIAMAAIAAALIgMAAIAAAsIAAAGIACAEIAFAAIAFAAIACALIgKABQgHAAgCgBg");
	this.shape_37.setTransform(310.4,36.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgbAiQgHgHAAgJQAAgGACgFQADgEAEgDQAEgBAGgCIALgCQAOgBAIgDIAAgEQAAgIgEgDQgFgEgJAAQgIAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAIAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAAQQAAASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgFADgIAAQgNAAgGgGgAgCAEIgLADQgEABgBADQgCADAAADQAAAGAEADQAEAEAHAAQAGAAAGgEQAGgDADgGQACgEAAgJIAAgEQgHACgNACg");
	this.shape_38.setTransform(304,38);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_39.setTransform(298.2,36.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgXAeQgJgLAAgTQAAgLAEgJQAEgKAJgFQAIgEAIAAQANAAAIAGQAIAHACALIgNACQgCgIgEgDQgFgEgGAAQgIAAgHAHQgGAHAAAOQAAAPAGAHQAGAHAIAAQAIAAAFgFQAFgEABgKIANABQgCAOgIAHQgJAIgNAAQgOAAgKgKg");
	this.shape_40.setTransform(293,38);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgZAeQgKgLAAgTQAAgUAMgLQAKgIANAAQAQAAAJAKQALALAAASQAAANgEAJQgFAIgIAFQgKAFgJAAQgPAAgKgKgAgPgVQgGAHAAAOQAAAOAGAIQAHAHAIAAQAJAAAHgHQAGgIABgOQgBgOgGgHQgHgHgJAAQgIAAgHAHg");
	this.shape_41.setTransform(284.8,38);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_42.setTransform(276.8,38);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_43.setTransform(269.3,38);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgbAiQgHgHAAgJQAAgGACgFQADgEAEgDQAEgBAGgCIALgCQAOgBAIgDIAAgEQAAgIgEgDQgFgEgJAAQgIAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAIAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAAQQAAASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgFADgIAAQgNAAgGgGgAgCAEIgLADQgEABgBADQgCADAAADQAAAGAEADQAEAEAHAAQAGAAAGgEQAGgDADgGQACgEAAgJIAAgEQgHACgNACg");
	this.shape_44.setTransform(261.4,38);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_45.setTransform(248.9,38);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgUAnIAAhMIAMAAIAAAMQAFgIADgDQADgCAEAAQAHAAAHAEIgFAMQgFgDgEAAQgFAAgCADQgDADgBAEQgCAHAAAIIAAAng");
	this.shape_46.setTransform(242.9,37.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgbAiQgHgHAAgJQAAgGACgFQADgEAEgDQAEgBAGgCIALgCQAOgBAIgDIAAgEQAAgIgEgDQgFgEgJAAQgIAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAIAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAAQQAAASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgFADgIAAQgNAAgGgGgAgCAEIgLADQgEABgBADQgCADAAADQAAAGAEADQAEAEAHAAQAGAAAGgEQAGgDADgGQACgEAAgJIAAgEQgHACgNACg");
	this.shape_47.setTransform(235.6,38);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_48.setTransform(223.5,38);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAAAzQgFgDgBgEQgBgEgBgMIAAgqIgJAAIAAgLIAJAAIAAgTIALgIIAAAbIAOAAIAAALIgOAAIAAAsIABAGIADAEIAEAAIAGAAIABALIgKABQgHAAgBgBg");
	this.shape_49.setTransform(217.8,36.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_50.setTransform(211.8,38);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_51.setTransform(206.5,36.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_52.setTransform(203.1,36.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAPA1IgXgoIgKAJIAAAfIgNAAIAAhpIANAAIAAA7IAegeIARAAIgdAbIAgAxg");
	this.shape_53.setTransform(198.2,36.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgXAeQgJgLAAgTQAAgLAEgJQAEgKAJgFQAIgEAIAAQANAAAIAGQAIAHACALIgNACQgCgIgEgDQgFgEgGAAQgIAAgHAHQgGAHAAAOQAAAPAGAHQAGAHAIAAQAIAAAFgFQAFgEABgKIANABQgCAOgIAHQgJAIgNAAQgOAAgKgKg");
	this.shape_54.setTransform(190.4,38);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_55.setTransform(182.2,38);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AASA1IAAgxQAAgIgEgEQgEgFgJAAQgDAAgGADQgEADgDAFQgCAEAAAJIAAAqIgNAAIAAhpIANAAIAAAmQAJgKANAAQAIAAAGADQAHAEACAGQADAGAAAJIAAAxg");
	this.shape_56.setTransform(173.9,36.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgXAeQgJgLAAgTQAAgLAEgJQAEgKAJgFQAIgEAIAAQANAAAIAGQAIAHACALIgNACQgCgIgEgDQgFgEgGAAQgIAAgHAHQgGAHAAAOQAAAPAGAHQAGAHAIAAQAIAAAFgFQAFgEABgKIANABQgCAOgIAHQgJAIgNAAQgOAAgKgKg");
	this.shape_57.setTransform(166.2,38);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAbA1IAAgyIg2AAIAAAyIgOAAIAAhpIAOAAIAAAsIA2AAIAAgsIAPAAIAABpg");
	this.shape_58.setTransform(152.7,36.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAdA1IgOgWIgLgPQgEgFgBgCIgGgDIgIAAIgRAAIAAAvIgOAAIAAhpIAuAAQAOAAAHADQAIADAEAHQAFAHAAAJQAAAMgIAHQgHAGgPACIAIAGQAGAFAGAJIATAdgAgggFIAfAAQAIAAAFgCQAGgCACgEQADgFAAgFQAAgHgFgFQgGgFgMAAIggAAg");
	this.shape_59.setTransform(142.3,36.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAZAtQgMAHgNAAQgOAAgMgHQgMgHgGgNQgHgNAAgNQAAgRAHgNQAGgMAMgIQAMgGAOgBQANAAAMAIQAMAHAHAMQAGANAAAQQAAALgEALQgEAKgIAIQAKAIAIACIgEAKQgMgEgLgJgAgagiQgKAKAAAXQAAASAKALQALALAPAAQAGAAAHgCQgHgFgGgCIACgKQANAEAIAGQAMgLAAgVQAAgNgEgJQgFgKgIgGQgJgFgJAAQgPAAgLALg");
	this.shape_60.setTransform(130.6,36.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AAPAmIgMgsIgDgOIgOA6IgOAAIgYhMIAOAAIAMArIAFARIAEgQIAMgsIAMAAIALAsIAEAOIAFgPIANgrIANAAIgYBMg");
	this.shape_61.setTransform(115.1,38);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_62.setTransform(105.5,38);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAbA1Ig2hSIAABSIgOAAIAAhpIAPAAIA2BSIAAhSIAOAAIAABpg");
	this.shape_63.setTransform(95.9,36.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgGAmIAAgPIANAAIAAAPgAgGgXIAAgPIANAAIAAAPg");
	this.shape_64.setTransform(84.4,38);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_65.setTransform(78,38);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAAAzQgFgDgBgEQgCgEABgMIAAgqIgKAAIAAgLIAKAAIAAgTIAKgIIAAAbIAOAAIAAALIgOAAIAAAsIABAGIADAEIAEAAIAGAAIABALIgJABQgIAAgBgBg");
	this.shape_66.setTransform(71.9,36.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgZAeQgKgLAAgTQAAgUAMgLQAKgIANAAQAQAAAJAKQALALAAASQAAANgEAJQgFAIgJAFQgIAFgKAAQgPAAgKgKgAgPgVQgGAHAAAOQAAAOAGAIQAHAHAIAAQAJAAAHgHQAGgIABgOQgBgOgGgHQgHgHgJAAQgIAAgHAHg");
	this.shape_67.setTransform(65.6,38);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAbA1Ig2hSIAABSIgOAAIAAhpIAPAAIA2BSIAAhSIAOAAIAABpg");
	this.shape_68.setTransform(55.9,36.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bitmap
	this.instance = new lib.note_regular();
	this.instance.setTransform(-4,12.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,12.8,618.2,58.5);


(lib.hl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(5,0,0,3).p("AkclUIKmAAIivKpIpnAAg");
	this.shape.setTransform(39.7,34.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.9,-2.5,85.2,73.3);


(lib.BLEEDPanel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PNG
	this.instance = new lib.as01p02_bleedpanel();
	this.instance.setTransform(-460,-203,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-460,-208.6,317,501.2);


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
	this.instance = new lib.b737_max_9_cockpit();
	this.instance.setTransform(0.1,-194.6,0.5,0.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.4,861.7,551.1);


// stage content:
(lib.dif02p02 = function(mode,startPosition,loop) {
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
	this.frame_40 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(40).call(this.frame_40).wait(1));

	// prot
	this.prot = new lib.prot();
	this.prot.setTransform(500,275,1,1,0,0,0,500,275);

	this.timeline.addTween(cjs.Tween.get(this.prot).wait(41));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_27 = new cjs.Graphics().p("EhOGAq9MAAAhV5MCcNAAAMAAABV5g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(27).to({graphics:mask_graphics_27,x:500,y:275}).wait(14));

	// note
	this.instance = new lib.notebox2("synched",0);
	this.instance.setTransform(666.9,685.7,1,1,0,0,0,471.9,158.2);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(27).to({_off:false},0).to({y:647.4},6).wait(8));

	// panel
	this.instance_1 = new lib.BLEEDPanel("synched",0);
	this.instance_1.setTransform(613.2,94.1,0.17,0.17,0,0,0,-301.7,28.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(17).to({_off:false},0).to({regX:-255.7,regY:44.9,scaleX:1,scaleY:1,x:393.6,y:271.4,alpha:1},5).wait(19));

	// hl
	this.instance_2 = new lib.hl("synched",0);
	this.instance_2.setTransform(613.5,94.4,1,1,0,0,0,39.7,34.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({alpha:1},5).wait(8).to({startPosition:0},0).to({alpha:0.352},5).wait(19));

	// Layer 1 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("EhOHAq+MAAAhV6MCcOAAAMAAABV6g");
	var mask_1_graphics_27 = new cjs.Graphics().p("EhOHAq+MAAAhV6MCcOAAAMAAABV6g");
	var mask_1_graphics_28 = new cjs.Graphics().p("EhOHAqWMAAAhUqMCcOAAAMAAABUqg");
	var mask_1_graphics_29 = new cjs.Graphics().p("EhOHApuMAAAhTaMCcOAAAMAAABTag");
	var mask_1_graphics_30 = new cjs.Graphics().p("EhOHApFMAAAhSJMCcOAAAMAAABSJg");
	var mask_1_graphics_31 = new cjs.Graphics().p("EhOHAodMAAAhQ5MCcOAAAMAAABQ5g");
	var mask_1_graphics_32 = new cjs.Graphics().p("EhOHAn1MAAAhPpMCcOAAAMAAABPpg");
	var mask_1_graphics_33 = new cjs.Graphics().p("EhOHAnNMAAAhOZMCcOAAAMAAABOZg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:500,y:275.1}).wait(27).to({graphics:mask_1_graphics_27,x:500,y:275.1}).wait(1).to({graphics:mask_1_graphics_28,x:500,y:271.1}).wait(1).to({graphics:mask_1_graphics_29,x:500,y:267.1}).wait(1).to({graphics:mask_1_graphics_30,x:500,y:263.1}).wait(1).to({graphics:mask_1_graphics_31,x:500,y:259}).wait(1).to({graphics:mask_1_graphics_32,x:500,y:255}).wait(1).to({graphics:mask_1_graphics_33,x:500,y:251}).wait(8));

	// cockpit
	this.instance_3 = new lib.B737800CockpitStage("single",0);
	this.instance_3.setTransform(500.1,274.8,1,1,0,0,0,429.6,274.9);

	this.instance_3.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(17).to({startPosition:0},0).to({alpha:0.352},5).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(500,275,1000,550.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;