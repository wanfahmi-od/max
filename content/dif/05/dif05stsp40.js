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


(lib.notebox2copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGAHIAAgNIANAAIAAANg");
	this.shape.setTransform(528.9,41.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_1.setTransform(522.9,38);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgBAzQgDgDgCgEQgBgEgBgMIAAgqIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIAMAAIAAALIgMAAIAAAsIAAAGIADAEIAEAAIAFAAIACALIgKABQgGAAgDgBg");
	this.shape_2.setTransform(517.3,36.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgQAlQgGgDgDgEQgDgEgBgGIgBgMIAAgvIANAAIAAAqIABAOQABAFAFADQADADAHAAQADAAAFgDQAFgDADgFQACgGAAgJIAAgpIANAAIAABMIgMAAIAAgLQgIANgOAAQgHAAgGgCg");
	this.shape_3.setTransform(510.9,38.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AggA2IAAhqIAMAAIAAALQAEgGAFgDQAGgDAFAAQAKAAAIAFQAHAFAEAJQAEAKAAALQAAAMgEAHQgEAKgJAFQgIAFgIAAQgFAAgGgDQgFgDgDgEIAAAmgAgOgjQgGAIAAAPQAAANAGAHQAGAHAIAAQAHAAAGgHQAHgIAAgNQAAgPgGgIQgHgHgHAAQgHAAgHAIg");
	this.shape_4.setTransform(502.8,39.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AASAnIAAgtQAAgIgCgEQgBgEgEgCQgEgDgGAAQgFAAgHAFQgGAGAAAPIAAAoIgNAAIAAhMIAMAAIAAAMQAIgNAPAAQAHAAAFACQAHADACAEQADAEACAGIAAAMIAAAug");
	this.shape_5.setTransform(494.2,37.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_6.setTransform(488.4,36.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAnAnIAAgvIgBgLQgCgEgDgCQgDgCgFAAQgIAAgGAGQgFAFAAAMIAAArIgLAAIAAgwQAAgJgDgEQgEgFgHAAQgFAAgFADQgFADgCAGQgCAFAAAKIAAAnIgNAAIAAhMIALAAIAAALQAEgFAGgEQAGgDAIAAQAJAAAFADQAEAEACAGQAJgNAPAAQAMAAAGAGQAGAHAAANIAAAzg");
	this.shape_7.setTransform(476.3,37.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_8.setTransform(468.4,36.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgUAnIAAhMIAMAAIAAAMQAFgIADgDQADgCAEAAQAHAAAHAEIgFAMQgFgDgEAAQgFAAgCADQgDADgBAEQgCAHAAAIIAAAng");
	this.shape_9.setTransform(464.8,37.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAAAzQgEgDgCgEQgCgEABgMIAAgqIgKAAIAAgLIAKAAIAAgTIAKgIIAAAbIAOAAIAAALIgOAAIAAAsIABAGIADAEIAEAAIAGAAIACALIgKABQgIAAgBgBg");
	this.shape_10.setTransform(459.7,36.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgUAnIAAhMIAMAAIAAAMQAFgIADgDQADgCAEAAQAHAAAHAEIgFAMQgFgDgEAAQgFAAgCADQgDADgBAEQgCAHAAAIIAAAng");
	this.shape_11.setTransform(451.5,37.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_12.setTransform(444.2,38);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AghAmIAAgKIAvg3IgOABIgeAAIAAgMIA9AAIAAAJIgnAwIgJAJIARgBIAiAAIAAALg");
	this.shape_13.setTransform(436.3,38);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_14.setTransform(430.9,36.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_15.setTransform(427.5,36.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_16.setTransform(424.2,36.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgUArIAAAJIgMAAIAAhpIANAAIAAAmQAIgKALAAQAHAAAHADQAGACAEAGQAEAFADAHQACAGAAAIQAAAUgKALQgKALgNAAQgMAAgIgLgAgOgHQgGAHAAANQAAAOADAGQAHAKAKAAQAHAAAGgHQAHgIAAgPQAAgNgGgHQgHgHgHAAQgIAAgGAHg");
	this.shape_17.setTransform(418.5,36.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgbAiQgHgHAAgJQAAgGACgFQADgEAEgDQAEgBAGgCIALgCQAOgBAIgDIAAgEQAAgIgEgDQgFgEgJAAQgIAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAIAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAAQQAAASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgFADgIAAQgNAAgGgGgAgCAEIgLADQgEABgBADQgCADAAADQAAAGAEADQAEAEAHAAQAGAAAGgEQAGgDADgGQACgEAAgJIAAgEQgHACgNACg");
	this.shape_18.setTransform(409.9,38);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgBAzQgEgDgBgEQgBgEAAgMIAAgqIgKAAIAAgLIAKAAIAAgTIAKgIIAAAbIAOAAIAAALIgOAAIAAAsIABAGIACAEIAFAAIAGAAIACALIgKABQgHAAgDgBg");
	this.shape_19.setTransform(403.8,36.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_20.setTransform(397.8,38);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AASAnIAAgtQAAgIgBgEQgCgEgEgCQgEgDgFAAQgHAAgGAFQgGAGAAAPIAAAoIgNAAIAAhMIAMAAIAAAMQAJgNANAAQAIAAAGACQAFADAEAEQACAEABAGIABAMIAAAug");
	this.shape_21.setTransform(385.8,37.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAPAmIgMgsIgDgOIgOA6IgOAAIgYhMIAOAAIAMArIAFARIAEgQIAMgsIAMAAIALAsIAEAOIAFgPIANgrIANAAIgYBMg");
	this.shape_22.setTransform(376.2,38);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgZAeQgKgLAAgTQAAgUAMgLQAKgIANAAQAPAAAKAKQALALAAASQAAANgEAJQgFAIgJAFQgIAFgKAAQgPAAgKgKgAgPgVQgGAHAAAOQAAAOAGAIQAHAHAIAAQAJAAAHgHQAGgIABgOQgBgOgGgHQgHgHgJAAQgIAAgHAHg");
	this.shape_23.setTransform(366.6,38);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgEgKAAgMQAAgLAEgIQAEgJAHgFQAIgFAJAAQAGAAAFADQAGADADAEIAAgmIANAAIAABpIgMAAIAAgKQgHAMgOAAQgIAAgIgFgAgNgHQgGAHAAANQAAAPAHAIQAGAHAHAAQAIAAAGgHQAGgHAAgOQAAgPgGgHQgGgHgJAAQgHAAgGAHg");
	this.shape_24.setTransform(358,36.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_25.setTransform(345.7,38);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_26.setTransform(337.8,38);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgZAeQgKgLAAgTQAAgUAMgLQAKgIANAAQAQAAAJAKQALALAAASQAAANgFAJQgEAIgIAFQgKAFgJAAQgPAAgKgKgAgPgVQgGAHAAAOQAAAOAGAIQAHAHAIAAQAJAAAHgHQAGgIAAgOQAAgOgGgHQgHgHgJAAQgIAAgHAHg");
	this.shape_27.setTransform(329.9,38);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AASAnIAAgtQAAgIgBgEQgCgEgEgCQgEgDgFAAQgHAAgGAFQgGAGAAAPIAAAoIgNAAIAAhMIAMAAIAAAMQAJgNANAAQAHAAAHACQAGADADAEQACAEABAGIABAMIAAAug");
	this.shape_28.setTransform(321.6,37.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AASAnIAAgtQAAgIgBgEQgCgEgEgCQgEgDgGAAQgFAAgHAFQgGAGAAAPIAAAoIgNAAIAAhMIAMAAIAAAMQAJgNANAAQAHAAAHACQAFADAEAEQACAEABAGIABAMIAAAug");
	this.shape_29.setTransform(309.1,37.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgZAeQgKgLAAgTQAAgUAMgLQAKgIANAAQAPAAAKAKQALALAAASQAAANgEAJQgFAIgJAFQgIAFgKAAQgPAAgKgKgAgPgVQgHAHABAOQgBAOAHAIQAGAHAJAAQAKAAAGgHQAHgIAAgOQAAgOgHgHQgHgHgJAAQgJAAgGAHg");
	this.shape_30.setTransform(300.7,38);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_31.setTransform(294.9,36.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgBAzQgEgDgBgEQgBgEAAgMIAAgqIgLAAIAAgLIALAAIAAgTIALgIIAAAbIAMAAIAAALIgMAAIAAAsIAAAGIACAEIAFAAIAFAAIADALIgKABQgHAAgDgBg");
	this.shape_32.setTransform(291.2,36.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgXAeQgJgLAAgTQAAgLAEgJQAEgKAJgFQAIgEAIAAQANAAAIAGQAIAHACALIgNACQgCgIgEgDQgFgEgGAAQgIAAgHAHQgGAHAAAOQAAAPAGAHQAGAHAIAAQAIAAAFgFQAFgEABgKIANABQgCAOgIAHQgJAIgNAAQgOAAgKgKg");
	this.shape_33.setTransform(285.5,38);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AASAnIAAgtQAAgIgBgEQgCgEgEgCQgEgDgFAAQgHAAgGAFQgGAGAAAPIAAAoIgNAAIAAhMIAMAAIAAAMQAJgNANAAQAHAAAHACQAFADAEAEQACAEABAGIABAMIAAAug");
	this.shape_34.setTransform(277.4,37.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgQAlQgGgDgDgEQgDgEgBgGIgBgMIAAgvIANAAIAAAqIABAOQACAFADADQAFADAFAAQAFAAAEgDQAFgDADgFQACgGAAgJIAAgpIANAAIAABMIgLAAIAAgLQgKANgNAAQgHAAgGgCg");
	this.shape_35.setTransform(269,38.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgKA2IAAhCIgLAAIAAgKIALAAIAAgIQAAgIACgDQACgGAEgDQADgDAJAAIAMABIgCAMIgIgBQgGAAgCACQgDADAAAHIAAAHIAQAAIAAAKIgQAAIAABCg");
	this.shape_36.setTransform(263.1,36.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAnAnIAAgvIgBgLQgCgEgDgCQgDgCgFAAQgIAAgGAGQgFAFAAAMIAAArIgLAAIAAgwQAAgJgDgEQgEgFgHAAQgFAAgFADQgFADgCAGQgCAFAAAKIAAAnIgNAAIAAhMIALAAIAAALQAEgFAGgEQAGgDAIAAQAJAAAFADQAEAEACAGQAJgNAPAAQAMAAAGAGQAGAHAAANIAAAzg");
	this.shape_37.setTransform(250.3,37.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_38.setTransform(242.4,36.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgUAnIAAhMIAMAAIAAAMQAFgIADgDQADgCAEAAQAHAAAHAEIgFAMQgFgDgEAAQgFAAgCADQgDADgBAEQgCAHAAAIIAAAng");
	this.shape_39.setTransform(238.8,37.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgFA1IAAhcIgkAAIAAgNIBTAAIAAANIgkAAIAABcg");
	this.shape_40.setTransform(231.7,36.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgEgKAAgMQAAgLAEgIQAEgJAHgFQAIgFAJAAQAGAAAFADQAGADADAEIAAgmIANAAIAABpIgMAAIAAgKQgHAMgOAAQgIAAgIgFgAgNgHQgGAHAAANQAAAPAHAIQAGAHAHAAQAIAAAGgHQAGgHAAgOQAAgPgGgHQgGgHgJAAQgHAAgGAHg");
	this.shape_41.setTransform(218.7,36.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_42.setTransform(210.6,38);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_43.setTransform(202.3,38);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AggA2IAAhqIAMAAIAAALQAEgGAFgDQAGgDAFAAQAKAAAIAFQAHAFAEAJQAEAKAAALQAAAMgEAHQgEAKgJAFQgIAFgIAAQgFAAgGgDQgFgDgDgEIAAAmgAgOgjQgGAIAAAPQAAANAGAHQAGAHAIAAQAHAAAGgHQAHgIAAgNQAAgPgGgIQgHgHgHAAQgHAAgHAIg");
	this.shape_44.setTransform(194.2,39.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgUAyQgKgDgFgJQgGgJAAgKIANgBQABAIAEAEQADAFAIAEQAHADAHAAQAIAAAGgCQAHgDADgEQADgEAAgFQAAgFgDgEQgDgDgHgDIgRgGQgPgDgGgBQgHgFgEgFQgEgGAAgHQAAgJAFgHQAEgHAJgDQAJgEAKAAQALAAAJAEQAJADAFAIQAFAIAAAJIgNABQgBgKgHgGQgGgEgMAAQgLgBgGAFQgGAFAAAHQAAAFAEAEQAEADAPAEQASAFAGACQAKADAEAGQAEAHAAAIQAAAJgEAIQgFAIgKADQgJAFgLAAQgNAAgKgFg");
	this.shape_45.setTransform(184.7,36.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_46.setTransform(173.9,36.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_47.setTransform(170.6,36.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgbAiQgHgHAAgJQAAgGACgFQADgEAEgDQAEgBAGgCIALgCQAOgBAIgDIAAgEQAAgIgEgDQgFgEgJAAQgIAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAIAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAAQQAAASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgFADgIAAQgNAAgGgGgAgCAEIgLADQgEABgBADQgCADAAADQAAAGAEADQAEAEAHAAQAGAAAGgEQAGgDADgGQACgEAAgJIAAgEQgHACgNACg");
	this.shape_48.setTransform(164.7,38);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgKA2IAAhCIgLAAIAAgKIALAAIAAgIQAAgIACgDQACgGAEgDQADgDAJAAIAMABIgCAMIgIgBQgGAAgCACQgDADAAAHIAAAHIAQAAIAAAKIgQAAIAABCg");
	this.shape_49.setTransform(154.7,36.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgZAeQgKgLAAgTQAAgUAMgLQAKgIANAAQAQAAAJAKQALALAAASQAAANgFAJQgEAIgIAFQgKAFgJAAQgPAAgKgKgAgPgVQgGAHAAAOQAAAOAGAIQAHAHAIAAQAJAAAHgHQAGgIAAgOQAAgOgGgHQgHgHgJAAQgIAAgHAHg");
	this.shape_50.setTransform(148.1,38);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_51.setTransform(138.1,36.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgbAiQgHgHAAgJQAAgGACgFQADgEAEgDQAEgBAGgCIALgCQAOgBAIgDIAAgEQAAgIgEgDQgFgEgJAAQgIAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAIAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAAQQAAASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgFADgIAAQgNAAgGgGgAgCAEIgLADQgEABgBADQgCADAAADQAAAGAEADQAEAEAHAAQAGAAAGgEQAGgDADgGQACgEAAgJIAAgEQgHACgNACg");
	this.shape_52.setTransform(132.2,38);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_53.setTransform(124.3,38);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgUAnIAAhMIAMAAIAAAMQAFgIADgDQADgCAEAAQAHAAAHAEIgFAMQgFgDgEAAQgFAAgCADQgDADgBAEQgCAHAAAIIAAAng");
	this.shape_54.setTransform(118.7,37.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_55.setTransform(111.4,38);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgFAmIgdhMIAOAAIAQAuIAEAPIAFgPIAQguIAOAAIgdBMg");
	this.shape_56.setTransform(103.5,38);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_57.setTransform(95.5,38);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgUAnIAAhMIAMAAIAAAMQAFgIADgDQADgCAEAAQAHAAAHAEIgFAMQgFgDgEAAQgFAAgCADQgDADgBAEQgCAHAAAIIAAAng");
	this.shape_58.setTransform(89.5,37.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_59.setTransform(78,38);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAAAzQgFgDgBgEQgCgEABgMIAAgqIgKAAIAAgLIAKAAIAAgTIAKgIIAAAbIAOAAIAAALIgOAAIAAAsIABAGIADAEIAEAAIAGAAIABALIgJABQgIAAgBgBg");
	this.shape_60.setTransform(71.9,36.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgZAeQgKgLAAgTQAAgUAMgLQAKgIANAAQAQAAAJAKQALALAAASQAAANgEAJQgFAIgJAFQgIAFgKAAQgPAAgKgKgAgPgVQgGAHAAAOQAAAOAGAIQAHAHAIAAQAJAAAHgHQAGgIABgOQgBgOgGgHQgHgHgJAAQgIAAgHAHg");
	this.shape_61.setTransform(65.6,38);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAbA1Ig2hSIAABSIgOAAIAAhpIAPAAIA2BSIAAhSIAOAAIAABpg");
	this.shape_62.setTransform(55.9,36.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bitmap
	this.instance = new lib.note_regular();
	this.instance.setTransform(-4,12.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,12.8,557,58.5);


(lib.notebox2copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGAHIAAgNIANAAIAAANg");
	this.shape.setTransform(767.2,41.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAhA1IgMggIgrAAIgMAgIgPAAIAphpIAOAAIAsBpgAgGgUIgMAdIAiAAIgLgcIgFgWQgCAKgEALg");
	this.shape_1.setTransform(760.1,36.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgaAwQgMgIgGgMQgGgNAAgOQAAgZAOgPQAPgPAVAAQAOAAAMAHQAMAHAGANQAHANAAAOQAAAQgHANQgGANgNAGQgMAHgNAAQgOAAgMgHgAgYgfQgLAKAAAWQAAAUAKALQALALAOAAQAPAAALgLQAKgMAAgUQAAgLgEgKQgFgKgIgFQgJgGgKAAQgOAAgKALg");
	this.shape_2.setTransform(749.3,36.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAhA1IgMggIgrAAIgMAgIgPAAIAphpIAOAAIAsBpgAgGgUIgMAdIAiAAIgLgcIgFgWQgCAKgEALg");
	this.shape_3.setTransform(738.5,36.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgEgKAAgMQAAgLAEgIQAEgJAHgFQAIgFAJAAQAGAAAFADQAGADADAEIAAgmIANAAIAABpIgMAAIAAgKQgHAMgOAAQgIAAgIgFgAgNgHQgGAHAAANQAAAPAHAIQAGAHAHAAQAIAAAGgHQAGgHAAgOQAAgPgGgHQgGgHgJAAQgHAAgGAHg");
	this.shape_4.setTransform(725.7,36.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_5.setTransform(720.1,36.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgZAeQgKgLAAgTQAAgUAMgLQAKgIANAAQAPAAAKAKQALALAAASQAAANgEAJQgFAIgJAFQgIAFgKAAQgPAAgKgKgAgPgVQgHAHABAOQgBAOAHAIQAGAHAJAAQAKAAAGgHQAHgIAAgOQAAgOgHgHQgHgHgJAAQgJAAgGAHg");
	this.shape_6.setTransform(714.3,38);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AASA1IAAgxQAAgIgEgEQgFgFgHAAQgEAAgGADQgEADgCAFQgDAEAAAJIAAAqIgNAAIAAhpIANAAIAAAmQAJgKANAAQAIAAAHADQAFAEAEAGQACAGAAAJIAAAxg");
	this.shape_7.setTransform(705.9,36.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_8.setTransform(697.9,38);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_9.setTransform(690,38);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgUAnIAAhMIAMAAIAAAMQAFgIADgDQADgCAEAAQAHAAAHAEIgFAMQgFgDgEAAQgFAAgCADQgDADgBAEQgCAHAAAIIAAAng");
	this.shape_10.setTransform(684,37.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AASA1IAAgxQAAgIgEgEQgEgFgJAAQgDAAgFADQgFADgDAFQgCAEAAAJIAAAqIgNAAIAAhpIANAAIAAAmQAJgKAMAAQAJAAAGADQAHAEACAGQADAGAAAJIAAAxg");
	this.shape_11.setTransform(676.7,36.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgBAzQgEgDgBgEQgBgEAAgMIAAgqIgLAAIAAgLIALAAIAAgTIALgIIAAAbIAMAAIAAALIgMAAIAAAsIAAAGIACAEIAFAAIAFAAIADALIgKABQgHAAgDgBg");
	this.shape_12.setTransform(670.6,36.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAPAmIgMgsIgDgOIgOA6IgOAAIgYhMIAOAAIAMArIAFARIAEgQIAMgsIAMAAIALAsIAEAOIAFgPIANgrIANAAIgYBMg");
	this.shape_13.setTransform(658.8,38);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgZAeQgKgLAAgTQAAgUAMgLQAKgIANAAQAPAAAKAKQALALAAASQAAANgEAJQgFAIgJAFQgIAFgKAAQgPAAgKgKgAgPgVQgHAHABAOQgBAOAHAIQAHAHAIAAQAJAAAHgHQAGgIABgOQgBgOgGgHQgHgHgJAAQgIAAgHAHg");
	this.shape_14.setTransform(649.2,38);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_15.setTransform(643.3,36.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_16.setTransform(637.5,38);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgUArIAAAJIgMAAIAAhpIANAAIAAAmQAIgKALAAQAHAAAHADQAGACAEAGQAEAFADAHQACAGAAAIQAAAUgKALQgKALgNAAQgMAAgIgLgAgOgHQgGAHAAANQAAAOADAGQAHAKAKAAQAHAAAGgHQAHgIAAgPQAAgNgGgHQgHgHgHAAQgIAAgGAHg");
	this.shape_17.setTransform(629.4,36.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgEgKAAgMQAAgLAEgIQAEgJAHgFQAIgFAJAAQAGAAAFADQAGADADAEIAAgmIANAAIAABpIgMAAIAAgKQgHAMgOAAQgIAAgIgFgAgNgHQgGAHAAANQAAAPAHAIQAGAHAHAAQAIAAAGgHQAGgHAAgOQAAgPgGgHQgGgHgJAAQgHAAgGAHg");
	this.shape_18.setTransform(616.4,36.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_19.setTransform(608.3,38);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgXAeQgJgLAAgTQAAgLAEgJQAEgKAJgFQAIgEAIAAQANAAAIAGQAIAHACALIgNACQgCgIgEgDQgFgEgGAAQgIAAgHAHQgGAHAAAOQAAAPAGAHQAGAHAIAAQAIAAAFgFQAFgEABgKIANABQgCAOgIAHQgJAIgNAAQgOAAgKgKg");
	this.shape_20.setTransform(600.6,38);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgQAlQgGgDgDgEQgDgEgBgGIgBgMIAAgvIANAAIAAAqIABAOQACAFAEADQAEADAGAAQADAAAFgDQAFgDADgFQACgGAAgJIAAgpIANAAIAABMIgMAAIAAgLQgIANgOAAQgHAAgGgCg");
	this.shape_21.setTransform(592.4,38.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgEgKAAgMQAAgLAEgIQAEgJAHgFQAIgFAJAAQAGAAAFADQAGADADAEIAAgmIANAAIAABpIgMAAIAAgKQgHAMgOAAQgIAAgIgFgAgNgHQgGAHAAANQAAAPAHAIQAGAHAHAAQAIAAAGgHQAGgHAAgOQAAgPgGgHQgGgHgJAAQgHAAgGAHg");
	this.shape_22.setTransform(583.8,36.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_23.setTransform(575.7,38);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgUAnIAAhMIAMAAIAAAMQAFgIADgDQADgCAEAAQAHAAAHAEIgFAMQgFgDgEAAQgFAAgCADQgDADgBAEQgCAHAAAIIAAAng");
	this.shape_24.setTransform(569.7,37.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_25.setTransform(558.6,38);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_26.setTransform(553.3,36.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAhA1IgMggIgrAAIgMAgIgPAAIAphpIAOAAIAsBpgAgGgUIgMAdIAiAAIgLgcIgFgWQgCAKgEALg");
	this.shape_27.setTransform(543.3,36.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgaAwQgMgIgGgMQgGgNAAgOQAAgZAOgPQAPgPAVAAQAOAAAMAHQAMAHAGANQAHANAAAOQAAAQgHANQgGANgNAGQgMAHgNAAQgOAAgMgHgAgYgfQgLAKAAAWQAAAUAKALQALALAOAAQAPAAALgLQAKgMAAgUQAAgLgEgKQgFgKgIgFQgJgGgKAAQgOAAgKALg");
	this.shape_28.setTransform(532.5,36.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAhA1IgMggIgrAAIgMAgIgPAAIAphpIAOAAIAsBpgAgGgUIgMAdIAiAAIgLgcIgFgWQgCAKgEALg");
	this.shape_29.setTransform(521.7,36.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_30.setTransform(509.5,38);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgbAiQgHgHAAgJQAAgGACgFQADgEAEgDQAEgBAGgCIALgCQAOgBAIgDIAAgEQAAgIgEgDQgFgEgJAAQgIAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAIAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAAQQAAASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgFADgIAAQgNAAgGgGgAgCAEIgLADQgEABgBADQgCADAAADQAAAGAEADQAEAEAHAAQAGAAAGgEQAGgDADgGQACgEAAgJIAAgEQgHACgNACg");
	this.shape_31.setTransform(501.6,38);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_32.setTransform(489.5,38);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAAAzQgEgDgCgEQgBgEgBgMIAAgqIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIAMAAIAAALIgMAAIAAAsIAAAGIADAEIAEAAIAFAAIACALIgKABQgGAAgCgBg");
	this.shape_33.setTransform(483.9,36.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgQAlQgGgDgDgEQgDgEgBgGIgBgMIAAgvIANAAIAAAqIABAOQABAFAFADQADADAHAAQAEAAAFgDQAEgDADgFQACgGAAgJIAAgpIANAAIAABMIgMAAIAAgLQgIANgPAAQgGAAgGgCg");
	this.shape_34.setTransform(477.5,38.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AggA2IAAhqIAMAAIAAALQAEgGAFgDQAGgDAFAAQAKAAAIAFQAHAFAEAJQAEAKAAALQAAAMgEAHQgEAKgJAFQgIAFgIAAQgFAAgGgDQgFgDgDgEIAAAmgAgOgjQgGAIAAAPQAAANAGAHQAGAHAIAAQAHAAAGgHQAHgIAAgNQAAgPgGgIQgHgHgHAAQgHAAgHAIg");
	this.shape_35.setTransform(469.4,39.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AASAnIAAgtQAAgIgBgEQgCgEgEgCQgEgDgGAAQgFAAgHAFQgGAGAAAPIAAAoIgNAAIAAhMIAMAAIAAAMQAIgNAPAAQAHAAAGACQAFADAEAEQACAEABAGIABAMIAAAug");
	this.shape_36.setTransform(460.8,37.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_37.setTransform(455,36.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAnAnIAAgvIgBgLQgCgEgDgCQgDgCgFAAQgIAAgGAGQgFAFAAAMIAAArIgLAAIAAgwQAAgJgDgEQgEgFgHAAQgFAAgFADQgFADgCAGQgCAFAAAKIAAAnIgNAAIAAhMIALAAIAAALQAEgFAGgEQAGgDAIAAQAJAAAFADQAEAEACAGQAJgNAPAAQAMAAAGAGQAGAHAAANIAAAzg");
	this.shape_38.setTransform(442.9,37.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_39.setTransform(435,36.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgUAnIAAhMIAMAAIAAAMQAFgIADgDQADgCAEAAQAHAAAHAEIgFAMQgFgDgEAAQgFAAgCADQgDADgBAEQgCAHAAAIIAAAng");
	this.shape_40.setTransform(431.4,37.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgBAzQgEgDgBgEQgBgEAAgMIAAgqIgKAAIAAgLIAKAAIAAgTIAKgIIAAAbIAOAAIAAALIgOAAIAAAsIABAGIACAEIAFAAIAGAAIACALIgKABQgHAAgDgBg");
	this.shape_41.setTransform(426.3,36.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgUAnIAAhMIAMAAIAAAMQAFgIADgDQADgCAEAAQAHAAAHAEIgFAMQgFgDgEAAQgFAAgCADQgDADgBAEQgCAHAAAIIAAAng");
	this.shape_42.setTransform(418.1,37.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_43.setTransform(410.8,38);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AghAmIAAgKIAvg3IgOABIgeAAIAAgMIA9AAIAAAJIgnAwIgJAJIARgBIAiAAIAAALg");
	this.shape_44.setTransform(402.9,38);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_45.setTransform(397.5,36.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_46.setTransform(394.1,36.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_47.setTransform(390.8,36.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgUArIAAAJIgMAAIAAhpIANAAIAAAmQAIgKALAAQAHAAAHADQAGACAEAGQAEAFADAHQACAGAAAIQAAAUgKALQgKALgNAAQgMAAgIgLgAgOgHQgGAHAAANQAAAOADAGQAHAKAKAAQAHAAAGgHQAHgIAAgPQAAgNgGgHQgHgHgHAAQgIAAgGAHg");
	this.shape_48.setTransform(385.1,36.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgbAiQgHgHAAgJQAAgGACgFQADgEAEgDQAEgBAGgCIALgCQAOgBAIgDIAAgEQAAgIgEgDQgFgEgJAAQgIAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAIAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAAQQAAASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgFADgIAAQgNAAgGgGgAgCAEIgLADQgEABgBADQgCADAAADQAAAGAEADQAEAEAHAAQAGAAAGgEQAGgDADgGQACgEAAgJIAAgEQgHACgNACg");
	this.shape_49.setTransform(376.5,38);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgBAzQgEgDgBgEQgBgEAAgMIAAgqIgLAAIAAgLIALAAIAAgTIAKgIIAAAbIANAAIAAALIgNAAIAAAsIABAGIACAEIAFAAIAFAAIADALIgKABQgHAAgDgBg");
	this.shape_50.setTransform(370.4,36.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_51.setTransform(364.4,38);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AASAnIAAgtQAAgIgCgEQgBgEgEgCQgEgDgFAAQgHAAgGAFQgGAGAAAPIAAAoIgNAAIAAhMIAMAAIAAAMQAJgNANAAQAIAAAGACQAFADAEAEQACAEACAGIAAAMIAAAug");
	this.shape_52.setTransform(352.4,37.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAPAmIgMgsIgDgOIgOA6IgOAAIgYhMIAOAAIAMArIAFARIAEgQIAMgsIAMAAIALAsIAEAOIAFgPIANgrIANAAIgYBMg");
	this.shape_53.setTransform(342.8,38);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgZAeQgKgLAAgTQAAgUAMgLQAKgIANAAQAPAAAKAKQALALAAASQAAANgEAJQgFAIgJAFQgIAFgKAAQgPAAgKgKgAgPgVQgHAHABAOQgBAOAHAIQAGAHAJAAQAJAAAHgHQAGgIABgOQgBgOgGgHQgHgHgJAAQgJAAgGAHg");
	this.shape_54.setTransform(333.2,38);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgEgKAAgMQAAgLAEgIQAEgJAHgFQAIgFAJAAQAGAAAFADQAGADADAEIAAgmIANAAIAABpIgMAAIAAgKQgHAMgOAAQgIAAgIgFgAgNgHQgGAHAAANQAAAPAHAIQAGAHAHAAQAIAAAGgHQAGgHAAgOQAAgPgGgHQgGgHgJAAQgHAAgGAHg");
	this.shape_55.setTransform(324.6,36.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_56.setTransform(312.3,38);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_57.setTransform(304.4,38);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgZAeQgKgLAAgTQAAgUAMgLQAKgIANAAQAQAAAJAKQALALAAASQAAANgFAJQgEAIgIAFQgKAFgJAAQgPAAgKgKgAgPgVQgGAHAAAOQAAAOAGAIQAHAHAIAAQAJAAAHgHQAGgIAAgOQAAgOgGgHQgHgHgJAAQgIAAgHAHg");
	this.shape_58.setTransform(296.5,38);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AASAnIAAgtQAAgIgBgEQgCgEgEgCQgEgDgFAAQgHAAgGAFQgGAGAAAPIAAAoIgNAAIAAhMIAMAAIAAAMQAJgNANAAQAHAAAHACQAFADAEAEQACAEABAGIABAMIAAAug");
	this.shape_59.setTransform(288.2,37.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AASAnIAAgtQAAgIgBgEQgCgEgEgCQgEgDgFAAQgHAAgGAFQgGAGAAAPIAAAoIgNAAIAAhMIAMAAIAAAMQAJgNANAAQAHAAAHACQAGADADAEQACAEABAGIABAMIAAAug");
	this.shape_60.setTransform(275.7,37.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgZAeQgKgLAAgTQAAgUAMgLQAKgIANAAQAPAAALAKQAKALAAASQAAANgEAJQgFAIgJAFQgJAFgJAAQgPAAgKgKgAgPgVQgHAHAAAOQAAAOAHAIQAGAHAJAAQAKAAAGgHQAHgIAAgOQAAgOgHgHQgHgHgJAAQgJAAgGAHg");
	this.shape_61.setTransform(267.3,38);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_62.setTransform(261.5,36.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgBAzQgEgDgBgEQgCgEAAgMIAAgqIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIAMAAIAAALIgMAAIAAAsIAAAGIACAEIAFAAIAFAAIADALIgLABQgGAAgDgBg");
	this.shape_63.setTransform(257.8,36.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgXAeQgJgLAAgTQAAgLAEgJQAEgKAJgFQAIgEAIAAQANAAAIAGQAIAHACALIgNACQgCgIgEgDQgFgEgGAAQgIAAgHAHQgGAHAAAOQAAAPAGAHQAGAHAIAAQAIAAAFgFQAFgEABgKIANABQgCAOgIAHQgJAIgNAAQgOAAgKgKg");
	this.shape_64.setTransform(252.1,38);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AASAnIAAgtQAAgIgCgEQgBgEgEgCQgEgDgFAAQgHAAgGAFQgGAGAAAPIAAAoIgNAAIAAhMIAMAAIAAAMQAJgNANAAQAIAAAGACQAFADAEAEQACAEACAGIAAAMIAAAug");
	this.shape_65.setTransform(244,37.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgQAlQgGgDgDgEQgDgEgBgGIgBgMIAAgvIANAAIAAAqIABAOQACAFAEADQAEADAFAAQAEAAAFgDQAFgDADgFQACgGAAgJIAAgpIANAAIAABMIgMAAIAAgLQgIANgOAAQgHAAgGgCg");
	this.shape_66.setTransform(235.6,38.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgKA2IAAhCIgLAAIAAgKIALAAIAAgIQAAgIACgDQACgGAEgDQADgDAJAAIAMABIgCAMIgIgBQgGAAgCACQgDADAAAHIAAAHIAQAAIAAAKIgQAAIAABCg");
	this.shape_67.setTransform(229.7,36.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgUAyQgKgDgFgJQgGgJAAgKIANgBQABAIAEAEQADAFAIAEQAHADAHAAQAIAAAGgCQAHgDADgEQADgEAAgFQAAgFgDgEQgDgDgHgDIgRgGQgPgDgGgBQgHgFgEgFQgEgGAAgHQAAgJAFgHQAEgHAJgDQAJgEAKAAQALAAAJAEQAJADAFAIQAFAIAAAJIgNABQgBgKgHgGQgGgEgMAAQgLgBgGAFQgGAFAAAHQAAAFAEAEQAEADAPAEQASAFAGACQAKADAEAGQAEAHAAAIQAAAJgEAIQgFAIgKADQgJAFgLAAQgNAAgKgFg");
	this.shape_68.setTransform(218.1,36.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAhA1IgMggIgrAAIgMAgIgPAAIAphpIAOAAIAsBpgAgGgUIgMAdIAiAAIgLgcIgFgWQgCAKgEALg");
	this.shape_69.setTransform(208.2,36.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgYAwQgKgHgHgNQgFgOAAgOQAAgRAGgMQAHgMALgHQAMgGAMAAQARAAALAIQAKAIAFAPIgOADQgDgLgIgGQgHgFgLAAQgKAAgIAGQgJAGgDAKQgDAKgBAKQAAAMAFAKQAEAKAIAGQAIAEAIAAQAMABAIgHQAJgHACgOIAPAEQgFASgLAJQgMAJgRAAQgPAAgLgHg");
	this.shape_70.setTransform(197.8,36.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAlA1IAAhYIgfBYIgLAAIgfhZIAABZIgOAAIAAhpIAWAAIAZBKIADAQIAGgRIAahJIATAAIAABpg");
	this.shape_71.setTransform(186,36.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_72.setTransform(173.9,36.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_73.setTransform(170.6,36.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgbAiQgHgHAAgJQAAgGACgFQADgEAEgDQAEgBAGgCIALgCQAOgBAIgDIAAgEQAAgIgEgDQgFgEgJAAQgIAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAIAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAAQQAAASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgFADgIAAQgNAAgGgGgAgCAEIgLADQgEABgBADQgCADAAADQAAAGAEADQAEAEAHAAQAGAAAGgEQAGgDADgGQACgEAAgJIAAgEQgHACgNACg");
	this.shape_74.setTransform(164.7,38);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgKA2IAAhCIgLAAIAAgKIALAAIAAgIQAAgIACgDQACgGAEgDQADgDAJAAIAMABIgCAMIgIgBQgGAAgCACQgDADAAAHIAAAHIAQAAIAAAKIgQAAIAABCg");
	this.shape_75.setTransform(154.7,36.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgZAeQgKgLAAgTQAAgUAMgLQAKgIANAAQAQAAAJAKQALALAAASQAAANgFAJQgEAIgIAFQgKAFgJAAQgPAAgKgKgAgPgVQgGAHAAAOQAAAOAGAIQAHAHAIAAQAJAAAHgHQAGgIAAgOQAAgOgGgHQgHgHgJAAQgIAAgHAHg");
	this.shape_76.setTransform(148.1,38);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_77.setTransform(138.1,36.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgbAiQgHgHAAgJQAAgGACgFQADgEAEgDQAEgBAGgCIALgCQAOgBAIgDIAAgEQAAgIgEgDQgFgEgJAAQgIAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAIAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAAQQAAASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgFADgIAAQgNAAgGgGgAgCAEIgLADQgEABgBADQgCADAAADQAAAGAEADQAEAEAHAAQAGAAAGgEQAGgDADgGQACgEAAgJIAAgEQgHACgNACg");
	this.shape_78.setTransform(132.2,38);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_79.setTransform(124.3,38);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgUAnIAAhMIAMAAIAAAMQAFgIADgDQADgCAEAAQAHAAAHAEIgFAMQgFgDgEAAQgFAAgCADQgDADgBAEQgCAHAAAIIAAAng");
	this.shape_80.setTransform(118.7,37.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_81.setTransform(111.4,38);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgFAmIgdhMIAOAAIAQAuIAEAPIAFgPIAQguIAOAAIgdBMg");
	this.shape_82.setTransform(103.5,38);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_83.setTransform(95.5,38);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgUAnIAAhMIAMAAIAAAMQAFgIADgDQADgCAEAAQAHAAAHAEIgFAMQgFgDgEAAQgFAAgCADQgDADgBAEQgCAHAAAIIAAAng");
	this.shape_84.setTransform(89.5,37.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_85.setTransform(78,38);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AAAAzQgFgDgBgEQgCgEABgMIAAgqIgKAAIAAgLIAKAAIAAgTIAKgIIAAAbIAOAAIAAALIgOAAIAAAsIABAGIADAEIAEAAIAGAAIABALIgJABQgIAAgBgBg");
	this.shape_86.setTransform(71.9,36.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgZAeQgKgLAAgTQAAgUAMgLQAKgIANAAQAQAAAJAKQALALAAASQAAANgEAJQgFAIgJAFQgIAFgKAAQgPAAgKgKgAgPgVQgGAHAAAOQAAAOAGAIQAHAHAIAAQAJAAAHgHQAGgIABgOQgBgOgGgHQgHgHgJAAQgIAAgHAHg");
	this.shape_87.setTransform(65.6,38);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AAbA1Ig2hSIAABSIgOAAIAAhpIAPAAIA2BSIAAhSIAOAAIAABpg");
	this.shape_88.setTransform(55.9,36.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bitmap
	this.instance = new lib.note_regular();
	this.instance.setTransform(-4,12.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,12.8,791,58.5);


(lib.notebox2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGAHIAAgNIANAAIAAANg");
	this.shape.setTransform(606.3,41.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgEgKAAgMQAAgLAEgIQAEgJAHgFQAIgFAJAAQAGAAAFADQAGADADAEIAAgmIANAAIAABpIgMAAIAAgKQgHAMgOAAQgIAAgIgFgAgNgHQgGAHAAANQAAAPAHAIQAGAHAHAAQAIAAAGgHQAGgHAAgOQAAgPgGgHQgGgHgJAAQgHAAgGAHg");
	this.shape_1.setTransform(599.7,36.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_2.setTransform(591.6,38);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgEgKAAgMQAAgLAEgIQAEgJAHgFQAIgFAJAAQAGAAAFADQAGADADAEIAAgmIANAAIAABpIgMAAIAAgKQgHAMgOAAQgIAAgIgFgAgNgHQgGAHAAANQAAAPAHAIQAGAHAHAAQAIAAAGgHQAGgHAAgOQAAgPgGgHQgGgHgJAAQgHAAgGAHg");
	this.shape_3.setTransform(583,36.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_4.setTransform(574.9,38);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_5.setTransform(566.6,38);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgXAeQgJgLAAgTQAAgLAEgJQAEgKAJgFQAIgEAIAAQANAAAIAGQAIAHACALIgNACQgCgIgEgDQgFgEgGAAQgIAAgHAHQgGAHAAAOQAAAPAGAHQAGAHAIAAQAIAAAFgFQAFgEABgKIANABQgCAOgIAHQgJAIgNAAQgOAAgKgKg");
	this.shape_6.setTransform(558.9,38);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAUAmIgQgYIgEgGIgTAeIgQAAIAdgmIgbgmIAQAAIANATIAEAIIAFgIIANgTIAQAAIgbAlIAdAng");
	this.shape_7.setTransform(551.2,38);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_8.setTransform(543.2,38);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_9.setTransform(531.1,38);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_10.setTransform(525.8,36.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAhA1IgMggIgrAAIgMAgIgPAAIAphpIAOAAIAsBpgAgGgUIgMAdIAiAAIgLgcIgFgWQgCAKgEALg");
	this.shape_11.setTransform(515.8,36.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgaAwQgMgIgGgMQgGgNAAgOQAAgZAOgPQAPgPAVAAQAOAAAMAHQAMAHAGANQAHANAAAOQAAAQgHANQgGANgNAGQgMAHgNAAQgOAAgMgHgAgYgfQgLAKAAAWQAAAUAKALQALALAOAAQAPAAALgLQAKgMAAgUQAAgLgEgKQgFgKgIgFQgJgGgKAAQgOAAgKALg");
	this.shape_12.setTransform(505,36.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAhA1IgMggIgrAAIgMAgIgPAAIAphpIAOAAIAsBpgAgGgUIgMAdIAiAAIgLgcIgFgWQgCAKgEALg");
	this.shape_13.setTransform(494.2,36.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgEgKAAgMQAAgLAEgIQAEgJAHgFQAIgFAJAAQAGAAAFADQAGADADAEIAAgmIANAAIAABpIgMAAIAAgKQgHAMgOAAQgIAAgIgFgAgNgHQgGAHAAANQAAAPAHAIQAGAHAHAAQAIAAAGgHQAGgHAAgOQAAgPgGgHQgGgHgJAAQgHAAgGAHg");
	this.shape_14.setTransform(481.4,36.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_15.setTransform(475.8,36.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgZAeQgKgLAAgTQAAgUAMgLQAKgIANAAQAQAAAKAKQAKALAAASQAAANgFAJQgEAIgIAFQgKAFgJAAQgPAAgKgKgAgPgVQgGAHgBAOQABAOAGAIQAHAHAIAAQAJAAAHgHQAGgIAAgOQAAgOgGgHQgHgHgJAAQgIAAgHAHg");
	this.shape_16.setTransform(470,38);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AASA1IAAgxQAAgIgEgEQgEgFgJAAQgDAAgFADQgFADgDAFQgCAEAAAJIAAAqIgNAAIAAhpIANAAIAAAmQAJgKAMAAQAJAAAGADQAHAEACAGQADAGAAAJIAAAxg");
	this.shape_17.setTransform(461.6,36.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_18.setTransform(453.6,38);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_19.setTransform(445.7,38);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgUAnIAAhMIAMAAIAAAMQAFgIADgDQADgCAEAAQAHAAAHAEIgFAMQgFgDgEAAQgFAAgCADQgDADgBAEQgCAHAAAIIAAAng");
	this.shape_20.setTransform(439.7,37.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AASA1IAAgxQAAgIgEgEQgFgFgHAAQgEAAgGADQgEADgCAFQgDAEAAAJIAAAqIgNAAIAAhpIANAAIAAAmQAKgKALAAQAJAAAHADQAFAEAEAGQACAGAAAJIAAAxg");
	this.shape_21.setTransform(432.4,36.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAAAzQgEgDgCgEQgBgEgBgMIAAgqIgJAAIAAgLIAJAAIAAgTIAMgIIAAAbIAMAAIAAALIgMAAIAAAsIAAAGIADAEIAEAAIAFAAIACALIgKABQgGAAgCgBg");
	this.shape_22.setTransform(426.3,36.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_23.setTransform(416.1,38);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgbAiQgHgHAAgJQAAgGACgFQADgEAEgDQAEgBAGgCIALgCQAOgBAIgDIAAgEQAAgIgEgDQgFgEgJAAQgIAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAIAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAAQQAAASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgFADgIAAQgNAAgGgGgAgCAEIgLADQgEABgBADQgCADAAADQAAAGAEADQAEAEAHAAQAGAAAGgEQAGgDADgGQACgEAAgJIAAgEQgHACgNACg");
	this.shape_24.setTransform(408.2,38);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_25.setTransform(396.1,38);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgBAzQgDgDgCgEQgCgEAAgMIAAgqIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIAMAAIAAALIgMAAIAAAsIAAAGIACAEIAFAAIAFAAIACALIgKABQgHAAgCgBg");
	this.shape_26.setTransform(390.5,36.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgQAlQgGgDgDgEQgDgEgBgGIgBgMIAAgvIANAAIAAAqIABAOQACAFAEADQAEADAGAAQADAAAFgDQAFgDADgFQACgGAAgJIAAgpIANAAIAABMIgMAAIAAgLQgIANgOAAQgHAAgGgCg");
	this.shape_27.setTransform(384.1,38.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AggA2IAAhqIAMAAIAAALQAEgGAFgDQAGgDAFAAQAKAAAIAFQAHAFAEAJQAEAKAAALQAAAMgEAHQgEAKgJAFQgIAFgIAAQgFAAgGgDQgFgDgDgEIAAAmgAgOgjQgGAIAAAPQAAANAGAHQAGAHAIAAQAHAAAGgHQAHgIAAgNQAAgPgGgIQgHgHgHAAQgHAAgHAIg");
	this.shape_28.setTransform(376,39.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AASAnIAAgtQAAgIgCgEQgBgEgEgCQgEgDgGAAQgFAAgHAFQgGAGAAAPIAAAoIgNAAIAAhMIAMAAIAAAMQAIgNAPAAQAGAAAGACQAHADACAEQADAEACAGIAAAMIAAAug");
	this.shape_29.setTransform(367.4,37.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_30.setTransform(361.6,36.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAnAnIAAgvIgBgLQgCgEgDgCQgDgCgFAAQgIAAgGAGQgFAFAAAMIAAArIgLAAIAAgwQAAgJgDgEQgEgFgHAAQgFAAgFADQgFADgCAGQgCAFAAAKIAAAnIgNAAIAAhMIALAAIAAALQAEgFAGgEQAGgDAIAAQAJAAAFADQAEAEACAGQAJgNAPAAQAMAAAGAGQAGAHAAANIAAAzg");
	this.shape_31.setTransform(349.5,37.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_32.setTransform(341.6,36.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgUAnIAAhMIAMAAIAAAMQAFgIADgDQADgCAEAAQAHAAAHAEIgFAMQgFgDgEAAQgFAAgCADQgDADgBAEQgCAHAAAIIAAAng");
	this.shape_33.setTransform(338,37.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAAAzQgFgDgBgEQgCgEABgMIAAgqIgKAAIAAgLIAKAAIAAgTIAKgIIAAAbIAOAAIAAALIgOAAIAAAsIABAGIADAEIAEAAIAGAAIABALIgJABQgIAAgBgBg");
	this.shape_34.setTransform(332.9,36.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgUAnIAAhMIAMAAIAAAMQAFgIADgDQADgCAEAAQAHAAAHAEIgFAMQgFgDgEAAQgFAAgCADQgDADgBAEQgCAHAAAIIAAAng");
	this.shape_35.setTransform(324.7,37.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_36.setTransform(317.4,38);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AghAmIAAgKIAwg3IgPABIgeAAIAAgMIA9AAIAAAJIgnAwIgJAJIARgBIAiAAIAAALg");
	this.shape_37.setTransform(309.5,38);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_38.setTransform(304.1,36.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_39.setTransform(300.7,36.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_40.setTransform(297.4,36.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgUArIAAAJIgMAAIAAhpIANAAIAAAmQAIgKALAAQAHAAAHADQAGACAEAGQAEAFADAHQACAGAAAIQAAAUgKALQgKALgNAAQgMAAgIgLgAgOgHQgGAHAAANQAAAOADAGQAHAKAKAAQAHAAAGgHQAHgIAAgPQAAgNgGgHQgHgHgHAAQgIAAgGAHg");
	this.shape_41.setTransform(291.7,36.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgbAiQgHgHAAgJQAAgGACgFQADgEAEgDQAEgBAGgCIALgCQAOgBAIgDIAAgEQAAgIgEgDQgFgEgJAAQgIAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAIAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAAQQAAASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgFADgIAAQgNAAgGgGgAgCAEIgLADQgEABgBADQgCADAAADQAAAGAEADQAEAEAHAAQAGAAAGgEQAGgDADgGQACgEAAgJIAAgEQgHACgNACg");
	this.shape_42.setTransform(283.1,38);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAAAzQgEgDgCgEQgCgEABgMIAAgqIgKAAIAAgLIAKAAIAAgTIAKgIIAAAbIAOAAIAAALIgOAAIAAAsIABAGIADAEIAEAAIAGAAIACALIgKABQgIAAgBgBg");
	this.shape_43.setTransform(277,36.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_44.setTransform(271,38);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AASAnIAAgtQAAgIgBgEQgCgEgEgCQgEgDgGAAQgGAAgGAFQgGAGAAAPIAAAoIgNAAIAAhMIAMAAIAAAMQAJgNANAAQAHAAAHACQAGADADAEQACAEABAGIABAMIAAAug");
	this.shape_45.setTransform(259,37.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAPAmIgMgsIgDgOIgOA6IgOAAIgYhMIAOAAIAMArIAFARIAEgQIAMgsIAMAAIALAsIAEAOIAFgPIANgrIANAAIgYBMg");
	this.shape_46.setTransform(249.4,38);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgZAeQgKgLAAgTQAAgUAMgLQAKgIANAAQAQAAAJAKQALALAAASQAAANgFAJQgEAIgIAFQgKAFgJAAQgPAAgKgKgAgPgVQgGAHAAAOQAAAOAGAIQAHAHAIAAQAJAAAHgHQAGgIAAgOQAAgOgGgHQgHgHgJAAQgIAAgHAHg");
	this.shape_47.setTransform(239.8,38);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgEgKAAgMQAAgLAEgIQAEgJAHgFQAIgFAJAAQAGAAAFADQAGADADAEIAAgmIANAAIAABpIgMAAIAAgKQgHAMgOAAQgIAAgIgFgAgNgHQgGAHAAANQAAAPAHAIQAGAHAHAAQAIAAAGgHQAGgHAAgOQAAgPgGgHQgGgHgJAAQgHAAgGAHg");
	this.shape_48.setTransform(231.2,36.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_49.setTransform(218.9,38);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_50.setTransform(211,38);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgZAeQgKgLAAgTQAAgUAMgLQAKgIANAAQAQAAAKAKQAKALAAASQAAANgFAJQgEAIgIAFQgKAFgJAAQgPAAgKgKgAgPgVQgGAHgBAOQABAOAGAIQAHAHAIAAQAJAAAHgHQAGgIAAgOQAAgOgGgHQgHgHgJAAQgIAAgHAHg");
	this.shape_51.setTransform(203.1,38);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AASAnIAAgtQAAgIgBgEQgCgEgEgCQgEgDgGAAQgFAAgHAFQgGAGAAAPIAAAoIgNAAIAAhMIAMAAIAAAMQAJgNANAAQAHAAAHACQAFADAEAEQACAEABAGIABAMIAAAug");
	this.shape_52.setTransform(194.8,37.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AASAnIAAgtQAAgIgBgEQgCgEgEgCQgEgDgGAAQgFAAgHAFQgGAGAAAPIAAAoIgNAAIAAhMIAMAAIAAAMQAIgNAPAAQAHAAAGACQAFADADAEQADAEABAGIABAMIAAAug");
	this.shape_53.setTransform(182.3,37.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgZAeQgKgLAAgTQAAgUAMgLQAKgIANAAQAPAAAKAKQALALAAASQAAANgEAJQgFAIgJAFQgIAFgKAAQgPAAgKgKgAgPgVQgHAHABAOQgBAOAHAIQAGAHAJAAQAJAAAHgHQAGgIABgOQgBgOgGgHQgHgHgJAAQgJAAgGAHg");
	this.shape_54.setTransform(173.9,38);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_55.setTransform(168.1,36.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgBAzQgEgDgBgEQgBgEAAgMIAAgqIgKAAIAAgLIAKAAIAAgTIAKgIIAAAbIAOAAIAAALIgOAAIAAAsIABAGIACAEIAFAAIAGAAIACALIgKABQgHAAgDgBg");
	this.shape_56.setTransform(164.4,36.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgXAeQgJgLAAgTQAAgLAEgJQAEgKAJgFQAIgEAIAAQANAAAIAGQAIAHACALIgNACQgCgIgEgDQgFgEgGAAQgIAAgHAHQgGAHAAAOQAAAPAGAHQAGAHAIAAQAIAAAFgFQAFgEABgKIANABQgCAOgIAHQgJAIgNAAQgOAAgKgKg");
	this.shape_57.setTransform(158.7,38);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AASAnIAAgtQAAgIgBgEQgCgEgEgCQgEgDgGAAQgGAAgGAFQgGAGAAAPIAAAoIgNAAIAAhMIAMAAIAAAMQAJgNANAAQAHAAAHACQAGADADAEQACAEABAGIABAMIAAAug");
	this.shape_58.setTransform(150.6,37.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgQAlQgGgDgDgEQgDgEgBgGIgBgMIAAgvIANAAIAAAqIABAOQACAFADADQAEADAGAAQAFAAAEgDQAGgDACgFQACgGAAgJIAAgpIANAAIAABMIgLAAIAAgLQgKANgNAAQgHAAgGgCg");
	this.shape_59.setTransform(142.2,38.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgKA2IAAhCIgLAAIAAgKIALAAIAAgIQAAgIACgDQACgGAEgDQADgDAJAAIAMABIgCAMIgIgBQgGAAgCACQgDADAAAHIAAAHIAQAAIAAAKIgQAAIAABCg");
	this.shape_60.setTransform(136.3,36.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgUAyQgKgDgFgJQgGgJAAgKIANgBQABAIAEAEQADAFAIAEQAHADAHAAQAIAAAGgCQAHgDADgEQADgEAAgFQAAgFgDgEQgDgDgHgDIgRgGQgPgDgGgBQgHgFgEgFQgEgGAAgHQAAgJAFgHQAEgHAJgDQAJgEAKAAQALAAAJAEQAJADAFAIQAFAIAAAJIgNABQgBgKgHgGQgGgEgMAAQgLgBgGAFQgGAFAAAHQAAAFAEAEQAEADAPAEQASAFAGACQAKADAEAGQAEAHAAAIQAAAJgEAIQgFAIgKADQgJAFgLAAQgNAAgKgFg");
	this.shape_61.setTransform(124.7,36.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAhA1IgMggIgrAAIgMAgIgPAAIAphpIAOAAIAsBpgAgGgUIgMAdIAiAAIgLgcIgFgWQgCAKgEALg");
	this.shape_62.setTransform(114.8,36.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgYAwQgKgHgHgNQgFgOAAgOQAAgRAGgMQAHgMALgHQAMgGAMAAQARAAALAIQAKAIAFAPIgOADQgEgLgHgGQgHgFgLAAQgKAAgJAGQgIAGgDAKQgEAKAAAKQAAAMAFAKQADAKAJAGQAIAEAIAAQAMABAIgHQAJgHADgOIAOAEQgFASgLAJQgMAJgRAAQgPAAgLgHg");
	this.shape_63.setTransform(104.4,36.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAlA1IAAhYIgfBYIgLAAIgfhZIAABZIgOAAIAAhpIAWAAIAZBKIADAQIAGgRIAahJIATAAIAABpg");
	this.shape_64.setTransform(92.6,36.5);

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
p.nominalBounds = new cjs.Rectangle(-4,12.8,621,58.5);


(lib.notebox2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGAHIAAgNIANAAIAAANg");
	this.shape.setTransform(435.5,41.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_1.setTransform(429.5,38);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgBAzQgEgDgBgEQgCgEAAgMIAAgqIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIAMAAIAAALIgMAAIAAAsIAAAGIACAEIAFAAIAFAAIADALIgLABQgHAAgCgBg");
	this.shape_2.setTransform(423.9,36.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgQAlQgGgDgDgEQgDgEgBgGIgBgMIAAgvIANAAIAAAqIABAOQACAFADADQAFADAFAAQAFAAAEgDQAFgDADgFQACgGAAgJIAAgpIANAAIAABMIgLAAIAAgLQgKANgNAAQgHAAgGgCg");
	this.shape_3.setTransform(417.5,38.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AggA2IAAhqIAMAAIAAALQAEgGAFgDQAGgDAFAAQAKAAAIAFQAHAFAEAJQAEAKAAALQAAAMgEAHQgEAKgJAFQgIAFgIAAQgFAAgGgDQgFgDgDgEIAAAmgAgOgjQgGAIAAAPQAAANAGAHQAGAHAIAAQAHAAAGgHQAHgIAAgNQAAgPgGgIQgHgHgHAAQgHAAgHAIg");
	this.shape_4.setTransform(409.4,39.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AASAnIAAgtQAAgIgCgEQgBgEgEgCQgEgDgFAAQgGAAgHAFQgGAGAAAPIAAAoIgNAAIAAhMIAMAAIAAAMQAIgNAPAAQAGAAAGACQAHADACAEQADAEACAGIAAAMIAAAug");
	this.shape_5.setTransform(400.8,37.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_6.setTransform(395,36.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAnAnIAAgvIgBgLQgCgEgDgCQgDgCgFAAQgIAAgGAGQgFAFAAAMIAAArIgLAAIAAgwQAAgJgDgEQgEgFgHAAQgFAAgFADQgFADgCAGQgCAFAAAKIAAAnIgNAAIAAhMIALAAIAAALQAEgFAGgEQAGgDAIAAQAJAAAFADQAEAEACAGQAJgNAPAAQAMAAAGAGQAGAHAAANIAAAzg");
	this.shape_7.setTransform(382.9,37.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_8.setTransform(375,36.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgUAnIAAhMIAMAAIAAAMQAFgIADgDQADgCAEAAQAHAAAHAEIgFAMQgFgDgEAAQgFAAgCADQgDADgBAEQgCAHAAAIIAAAng");
	this.shape_9.setTransform(371.4,37.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAAAzQgFgDgBgEQgBgEgBgMIAAgqIgJAAIAAgLIAJAAIAAgTIALgIIAAAbIAOAAIAAALIgOAAIAAAsIABAGIADAEIAEAAIAGAAIABALIgKABQgHAAgBgBg");
	this.shape_10.setTransform(366.3,36.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgUAnIAAhMIAMAAIAAAMQAFgIADgDQADgCAEAAQAHAAAHAEIgFAMQgFgDgEAAQgFAAgCADQgDADgBAEQgCAHAAAIIAAAng");
	this.shape_11.setTransform(358.1,37.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_12.setTransform(350.8,38);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AghAmIAAgKIAwg3IgPABIgeAAIAAgMIA+AAIAAAJIgoAwIgJAJIARgBIAiAAIAAALg");
	this.shape_13.setTransform(342.9,38);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_14.setTransform(337.5,36.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_15.setTransform(334.1,36.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_16.setTransform(330.8,36.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgUArIAAAJIgMAAIAAhpIANAAIAAAmQAIgKALAAQAHAAAHADQAGACAEAGQAEAFADAHQACAGAAAIQAAAUgKALQgKALgNAAQgMAAgIgLgAgOgHQgGAHAAANQAAAOADAGQAHAKAKAAQAHAAAGgHQAHgIAAgPQAAgNgGgHQgHgHgHAAQgIAAgGAHg");
	this.shape_17.setTransform(325.1,36.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgbAiQgHgHAAgJQAAgGACgFQADgEAEgDQAEgBAGgCIALgCQAOgBAIgDIAAgEQAAgIgEgDQgFgEgJAAQgIAAgFADQgEADgCAIIgNgBQACgJAEgFQAEgFAHgDQAIgCAIAAQAKAAAGACQAGACADAEQADAEABAFIABAMIAAAQQAAASABAFQABAFACAEIgNAAQgDgEAAgFQgHAGgHACQgFADgIAAQgNAAgGgGgAgCAEIgLADQgEABgBADQgCADAAADQAAAGAEADQAEAEAHAAQAGAAAGgEQAGgDADgGQACgEAAgJIAAgEQgHACgNACg");
	this.shape_18.setTransform(316.5,38);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAAAzQgFgDgBgEQgCgEABgMIAAgqIgKAAIAAgLIAKAAIAAgTIAKgIIAAAbIAOAAIAAALIgOAAIAAAsIABAGIADAEIAEAAIAGAAIABALIgJABQgIAAgBgBg");
	this.shape_19.setTransform(310.4,36.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_20.setTransform(304.4,38);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AASAnIAAgtQAAgIgBgEQgCgEgEgCQgEgDgGAAQgFAAgHAFQgGAGAAAPIAAAoIgNAAIAAhMIAMAAIAAAMQAJgNANAAQAHAAAHACQAFADAEAEQACAEABAGIABAMIAAAug");
	this.shape_21.setTransform(292.4,37.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAPAmIgMgsIgDgOIgOA6IgOAAIgYhMIAOAAIAMArIAFARIAEgQIAMgsIAMAAIALAsIAEAOIAFgPIANgrIANAAIgYBMg");
	this.shape_22.setTransform(282.8,38);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgZAeQgKgLAAgTQAAgUAMgLQAKgIANAAQAQAAAJAKQALALAAASQAAANgFAJQgEAIgIAFQgKAFgJAAQgPAAgKgKgAgPgVQgGAHgBAOQABAOAGAIQAHAHAIAAQAJAAAHgHQAGgIAAgOQAAgOgGgHQgHgHgJAAQgIAAgHAHg");
	this.shape_23.setTransform(273.2,38);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgEgKAAgMQAAgLAEgIQAEgJAHgFQAIgFAJAAQAGAAAFADQAGADADAEIAAgmIANAAIAABpIgMAAIAAgKQgHAMgOAAQgIAAgIgFgAgNgHQgGAHAAANQAAAPAHAIQAGAHAHAAQAIAAAGgHQAGgHAAgOQAAgPgGgHQgGgHgJAAQgHAAgGAHg");
	this.shape_24.setTransform(264.6,36.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_25.setTransform(252.3,38);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgUAiQgIgHgDgMIANgCQACAIAFAEQAFAEAHAAQAJAAAEgDQAEgEAAgFQAAgFgDgCIgOgFQgMgDgGgCQgGgCgDgEQgCgFAAgGQAAgFACgEQACgFAEgDQAEgCAFgCQAFgBAGAAQAHAAAHACQAHADADAFQAEAEABAIIgNABQgBgGgEgDQgEgDgHAAQgIAAgEADQgEADAAAEQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIAFAEIAKADQAOAEAFACQAGABADAEQADAFAAAGQAAAHgEAGQgEAGgHADQgHADgJAAQgOAAgHgGg");
	this.shape_26.setTransform(244.4,38);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgZAeQgKgLAAgTQAAgUAMgLQAKgIANAAQAPAAALAKQAKALAAASQAAANgFAJQgEAIgIAFQgJAFgKAAQgPAAgKgKgAgPgVQgGAHgBAOQABAOAGAIQAHAHAIAAQAKAAAGgHQAHgIgBgOQABgOgHgHQgHgHgJAAQgIAAgHAHg");
	this.shape_27.setTransform(236.5,38);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AASAnIAAgtQAAgIgBgEQgCgEgEgCQgEgDgGAAQgFAAgHAFQgGAGAAAPIAAAoIgNAAIAAhMIAMAAIAAAMQAIgNAPAAQAHAAAFACQAGADADAEQADAEABAGIABAMIAAAug");
	this.shape_28.setTransform(228.2,37.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AASAnIAAgtQAAgIgCgEQgBgEgEgCQgEgDgGAAQgFAAgHAFQgGAGAAAPIAAAoIgNAAIAAhMIAMAAIAAAMQAIgNAPAAQAHAAAFACQAHADACAEQADAEACAGIAAAMIAAAug");
	this.shape_29.setTransform(215.7,37.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgZAeQgKgLAAgTQAAgUAMgLQAKgIANAAQAQAAAJAKQALALAAASQAAANgEAJQgFAIgJAFQgIAFgKAAQgPAAgKgKgAgPgVQgGAHAAAOQAAAOAGAIQAHAHAIAAQAJAAAHgHQAGgIABgOQgBgOgGgHQgHgHgJAAQgIAAgHAHg");
	this.shape_30.setTransform(207.3,38);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_31.setTransform(201.5,36.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAAAzQgEgDgCgEQgCgEABgMIAAgqIgKAAIAAgLIAKAAIAAgTIAKgIIAAAbIAOAAIAAALIgOAAIAAAsIABAGIADAEIAEAAIAGAAIACALIgKABQgIAAgBgBg");
	this.shape_32.setTransform(197.8,36.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgXAeQgJgLAAgTQAAgLAEgJQAEgKAJgFQAIgEAIAAQANAAAIAGQAIAHACALIgNACQgCgIgEgDQgFgEgGAAQgIAAgHAHQgGAHAAAOQAAAPAGAHQAGAHAIAAQAIAAAFgFQAFgEABgKIANABQgCAOgIAHQgJAIgNAAQgOAAgKgKg");
	this.shape_33.setTransform(192.1,38);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AASAnIAAgtQAAgIgBgEQgCgEgEgCQgEgDgGAAQgFAAgHAFQgGAGAAAPIAAAoIgNAAIAAhMIAMAAIAAAMQAJgNANAAQAHAAAHACQAFADAEAEQACAEABAGIABAMIAAAug");
	this.shape_34.setTransform(184,37.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgQAlQgGgDgDgEQgDgEgBgGIgBgMIAAgvIAOAAIAAAqIAAAOQABAFAEADQAFADAFAAQAFAAAFgDQAFgDACgFQACgGAAgJIAAgpIANAAIAABMIgLAAIAAgLQgKANgNAAQgHAAgGgCg");
	this.shape_35.setTransform(175.6,38.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgKA2IAAhCIgLAAIAAgKIALAAIAAgIQAAgIACgDQACgGAEgDQADgDAJAAIAMABIgCAMIgIgBQgGAAgCACQgDADAAAHIAAAHIAQAAIAAAKIgQAAIAABCg");
	this.shape_36.setTransform(169.7,36.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAnAnIAAgvIgBgLQgCgEgDgCQgDgCgFAAQgIAAgGAGQgFAFAAAMIAAArIgLAAIAAgwQAAgJgDgEQgEgFgHAAQgFAAgFADQgFADgCAGQgCAFAAAKIAAAnIgNAAIAAhMIALAAIAAALQAEgFAGgEQAGgDAIAAQAJAAAFADQAEAEACAGQAJgNAPAAQAMAAAGAGQAGAHAAANIAAAzg");
	this.shape_37.setTransform(156.9,37.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgFA1IAAhMIALAAIAABMgAgFglIAAgPIALAAIAAAPg");
	this.shape_38.setTransform(149,36.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgUAnIAAhMIAMAAIAAAMQAFgIADgDQADgCAEAAQAHAAAHAEIgFAMQgFgDgEAAQgFAAgCADQgDADgBAEQgCAHAAAIIAAAng");
	this.shape_39.setTransform(145.4,37.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgFA1IAAhcIgkAAIAAgNIBTAAIAAANIgkAAIAABcg");
	this.shape_40.setTransform(138.3,36.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgEgKAAgMQAAgLAEgIQAEgJAHgFQAIgFAJAAQAGAAAFADQAGADADAEIAAgmIANAAIAABpIgMAAIAAgKQgHAMgOAAQgIAAgIgFgAgNgHQgGAHAAANQAAAPAHAIQAGAHAHAAQAIAAAGgHQAGgHAAgOQAAgPgGgHQgGgHgJAAQgHAAgGAHg");
	this.shape_41.setTransform(125.3,36.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_42.setTransform(117.2,38);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_43.setTransform(108.9,38);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AggA2IAAhqIAMAAIAAALQAEgGAFgDQAGgDAFAAQAKAAAIAFQAHAFAEAJQAEAKAAALQAAAMgEAHQgEAKgJAFQgIAFgIAAQgFAAgGgDQgFgDgDgEIAAAmgAgOgjQgGAIAAAPQAAANAGAHQAGAHAIAAQAHAAAGgHQAHgIAAgNQAAgPgGgIQgHgHgHAAQgHAAgHAIg");
	this.shape_44.setTransform(100.8,39.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgUAyQgKgDgFgJQgGgJAAgKIANgBQABAIAEAEQADAFAIAEQAHADAHAAQAIAAAGgCQAHgDADgEQADgEAAgFQAAgFgDgEQgDgDgHgDIgRgGQgPgDgGgBQgHgFgEgFQgEgGAAgHQAAgJAFgHQAEgHAJgDQAJgEAKAAQALAAAJAEQAJADAFAIQAFAIAAAJIgNABQgBgKgHgGQgGgEgMAAQgLgBgGAFQgGAFAAAHQAAAFAEAEQAEADAPAEQASAFAGACQAKADAEAGQAEAHAAAIQAAAJgEAIQgFAIgKADQgJAFgLAAQgNAAgKgFg");
	this.shape_45.setTransform(91.3,36.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgYAeQgKgLAAgTQAAgSAKgKQAKgLAOAAQAQAAAKAKQAJALAAASIAAADIg4AAQABANAHAGQAGAHAIAAQAHAAAFgEQAFgDADgJIAOACQgDAMgJAGQgJAHgNAAQgPAAgKgKgAgNgWQgGAGgBAKIAqAAQgBgKgEgFQgHgHgKAAQgHAAgGAGg");
	this.shape_46.setTransform(78,38);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAAAzQgFgDgBgEQgCgEABgMIAAgqIgKAAIAAgLIAKAAIAAgTIAKgIIAAAbIAOAAIAAALIgOAAIAAAsIABAGIADAEIAEAAIAGAAIABALIgJABQgIAAgBgBg");
	this.shape_47.setTransform(71.9,36.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgZAeQgKgLAAgTQAAgUAMgLQAKgIANAAQAQAAAJAKQALALAAASQAAANgEAJQgFAIgJAFQgIAFgKAAQgPAAgKgKgAgPgVQgGAHAAAOQAAAOAGAIQAHAHAIAAQAJAAAHgHQAGgIABgOQgBgOgGgHQgHgHgJAAQgIAAgHAHg");
	this.shape_48.setTransform(65.6,38);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAbA1Ig2hSIAABSIgOAAIAAhpIAPAAIA2BSIAAhSIAOAAIAABpg");
	this.shape_49.setTransform(55.9,36.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bitmap
	this.instance = new lib.note_regular();
	this.instance.setTransform(-4,12.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,12.8,452,58.5);


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
(lib.dif05stsp40 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{s1:0,s2:296,s3:357,s4:467});

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
		                    title: "Speed Trim Functions",
		                    url: "05/video/sts01p41_video.mp4"
		                }); 
		
		}
	}
	this.frame_295 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
	}
	this.frame_356 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
	}
	this.frame_466 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
	}
	this.frame_496 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(289).call(this.frame_295).wait(61).call(this.frame_356).wait(110).call(this.frame_466).wait(30).call(this.frame_496).wait(1));

	// prot
	this.prot = new lib.prot();
	this.prot.setTransform(500,275,1,1,0,0,0,500,275);

	this.timeline.addTween(cjs.Tween.get(this.prot).wait(497));

	// stick shaker
	this.instance = new lib.box_baseGREYDKcopy2("synched",0);
	this.instance.setTransform(346.9,403.4,1,1,0,0,0,61.6,34);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(211).to({_off:false},0).to({alpha:1},5).wait(281));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_13 = new cjs.Graphics().p("EhOGAq9MAAAhV5MCcNAAAMAAABV5g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(13).to({graphics:mask_graphics_13,x:500,y:275}).wait(484));

	// note
	this.instance_1 = new lib.notebox2copy3("synched",0);
	this.instance_1.setTransform(697.5,694.4,1,1,0,0,0,471.9,158.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(470).to({_off:false},0).to({y:638.4,alpha:1},6).wait(21));

	// note
	this.instance_2 = new lib.notebox2copy2("synched",0);
	this.instance_2.setTransform(580.5,694.4,1,1,0,0,0,471.9,158.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(360).to({_off:false},0).to({y:638.4,alpha:1},6).wait(30).to({startPosition:0},0).to({alpha:0},6).to({_off:true},1).wait(94));

	// note
	this.instance_3 = new lib.notebox2copy("synched",0);
	this.instance_3.setTransform(666.5,694.4,1,1,0,0,0,471.9,158.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(298).to({_off:false},0).to({y:638.4,alpha:1},6).wait(30).to({startPosition:0},0).to({alpha:0},6).to({_off:true},1).wait(156));

	// note
	this.instance_4 = new lib.notebox2("synched",0);
	this.instance_4.setTransform(750,694.4,1,1,0,0,0,471.9,158.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(170).to({_off:false},0).to({y:638.4,alpha:1},5).wait(36).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(280));

	// flaps up
	this.instance_5 = new lib.box_baseGREYDK("synched",0);
	this.instance_5.setTransform(636.9,110.4,1,1,0,0,0,61.6,34);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(497));

	// Layer 1
	this.btn1 = new lib.Turb_base();
	this.btn1.setTransform(499.6,196.7,1,1,0,0,0,320,256);

	this.timeline.addTween(cjs.Tween.get(this.btn1).wait(497));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(500,275,1000,550);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;