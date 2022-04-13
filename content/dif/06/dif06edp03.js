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
		{src:"images/edcp01p03_screen_01.png", id:"edcp01p03_screen_01"},
		{src:"images/edcp01p03_screen_02.png", id:"edcp01p03_screen_02"},
		{src:"images/edcp01p03_screen_03.png", id:"edcp01p03_screen_03"},
		{src:"images/edcp01p03_screen_07.png", id:"edcp01p03_screen_07"},
		{src:"images/edcp01p03_screen_08.png", id:"edcp01p03_screen_08"},
		{src:"images/edcp01p03_screen_09.png", id:"edcp01p03_screen_09"},
		{src:"images/edcp01p03_screen_10.png", id:"edcp01p03_screen_10"},
		{src:"images/edcp01p03_screen_11.png", id:"edcp01p03_screen_11"},
		{src:"images/edcp01p03_screen_lg.png", id:"edcp01p03_screen_lg"},
		{src:"images/edcp01p04_mfp.jpg", id:"edcp01p04_mfp"},
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



(lib.edcp01p03_screen_01 = function() {
	this.initialize(img.edcp01p03_screen_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1859,1084);


(lib.edcp01p03_screen_02 = function() {
	this.initialize(img.edcp01p03_screen_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1859,1084);


(lib.edcp01p03_screen_03 = function() {
	this.initialize(img.edcp01p03_screen_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1859,1084);


(lib.edcp01p03_screen_07 = function() {
	this.initialize(img.edcp01p03_screen_07);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1859,1084);


(lib.edcp01p03_screen_08 = function() {
	this.initialize(img.edcp01p03_screen_08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1859,1084);


(lib.edcp01p03_screen_09 = function() {
	this.initialize(img.edcp01p03_screen_09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1859,1084);


(lib.edcp01p03_screen_10 = function() {
	this.initialize(img.edcp01p03_screen_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1859,1084);


(lib.edcp01p03_screen_11 = function() {
	this.initialize(img.edcp01p03_screen_11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1859,1084);


(lib.edcp01p03_screen_lg = function() {
	this.initialize(img.edcp01p03_screen_lg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1359,1067);


(lib.edcp01p04_mfp = function() {
	this.initialize(img.edcp01p04_mfp);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1363,761);


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


(lib.hl02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(5,0,0,3).p("AF2AAQAACbhuBtQhtBuibAAQiaAAhthuQhuhtAAibQAAiaBuhtQBthuCaAAQCbAABtBuQBuBtAACag");
	this.shape.setTransform(38.8,37.3,0.706,0.706);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9.9,8.4,57.8,57.8);


(lib.hl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(5,0,0,3).p("AF2AAQAACbhuBtQhtBuibAAQiaAAhthuQhuhtAAibQAAiaBuhtQBthuCaAAQCbAABtBuQBuBtAACag");
	this.shape.setTransform(37.4,37.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,79.8,79.8);


(lib.EngineDisplayControlPanelcopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApqJZIAAyyITVAAIAASyg");
	mask.setTransform(453.8,192.9);

	// Layer 7
	this.instance = new lib.edcp01p04_mfp();
	this.instance.setTransform(-118.1,-99.1,0.5,0.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.1,-99.1,681.5,380.5);


(lib.boxpink02smcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF00FF").ss(1,0,0,3).p("AAAhGIAAArIAcAAIAAAbIAAAcIgcAAIAAArAgbAAIAAgbIAbAAAAAAcIgbAAIAAgcIg2AAABSAAIg2AA");
	this.shape.setTransform(-87.4,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF00FF").ss(1,1,1).p("ADHiuInvAAQg2AAAAApIAAELQAAApA2AAIFxAAIDhAAQA1AAAAgpIAAkLQAAgpg1AAg");
	this.shape_1.setTransform(-63.5,7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.6,-11.2,72.2,37.1);


(lib.boxpink02sm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF00FF").ss(1,0,0,3).p("AgbAAIAAgbIAbAAIAcAAIAAAbIAAAcIgcAAIgbAAIAAgcIg2AAAAAhGIAAArAAAAcIAAArABSAAIg2AA");
	this.shape.setTransform(-87.4,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF00FF").ss(1,1,1).p("ADHiuInvAAQg2AAAAApIAAELQAAApA2AAIFxAAIDhAAQA1AAAAgpIAAkLQAAgpg1AAg");
	this.shape_1.setTransform(-63.5,7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.6,-11.2,72.2,37.1);


(lib.boxpink02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF00FF").ss(1,0,0,3).p("ABIAAIgvAAIAAAZIgZAAIAAAlAAAgYIAZAAIAAAYAAAg9IAAAlAgYAAIgvAAAgYAAIAAgYIAYAAAAAAZIgYAAIAAgZ");
	this.shape.setTransform(-91,15,1.135,1.135);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF00FF").ss(1,1,1).p("ACSiZInXAAQgvAAAAAkIAADrQAAAkAvAAIFFAAIFGAAQAvAAAAgkIAAjrQAAgkgvAAg");
	this.shape_1.setTransform(-59.8,7.3,1.135,1.135);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.1,-11.2,86.7,37.1);


(lib.B787ButtonBAROSETnumbercopy8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Green - Selected
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPAUQgEgJAAgLQAAgKAEgJQAGgMAJAAQALAAAFAMQAEAJAAAKQAAALgEAJQgGAMgKAAQgJAAgGgMgAgKgPQgBAHAAAIQAAAJABAGQAEALAGAAQAHAAAEgLQACgGAAgJQAAgIgCgHQgEgKgHAAQgGAAgEAKg");
	this.shape.setTransform(0.3,9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNAbQgFgFAAgJQAAgLALgEQgJgFAAgIQABgHAEgFQAFgEAGAAQAHAAAFAEQAEAFABAHQAAAEgCAEIgHAFQALAEAAALQAAAJgFAFQgFAFgJAAQgIAAgFgFgAgHAEQgEAEABAFQAAAFACAEQAEAEAEAAQAFAAADgEQADgEAAgFQAAgFgDgEQgDgEgFAAQgDAAgEAEgAgGgWQgCADAAAEQAAAEACADQADADADAAQAEAAADgDQACgDAAgEQAAgEgCgDQgDgDgEAAQgDAAgDADg");
	this.shape_1.setTransform(-4.5,9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AADAeIAAgGIAAAGIgFAAIAAgGIAFAAIgFAAIAAAGIgLAAIAAgGIALAAIAAgtIgLAFIAAgHIAMgGIAEAAIAAA1IALAAIAAAGg");
	this.shape_2.setTransform(0.3,9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRAfIAAgGQAAgIAEgGQADgEAHgGIAHgHQAFgEAAgFQAAgEgDgCQgDgDgDAAQgIAAAAAHIgIAAIAAgBQAAgFAGgEQAEgDAGAAQAHAAAEAEQAFAEAAAHQAAAIgHAGIgLAKQgHAHAAAIIAbAAIAAAHg");
	this.shape_3.setTransform(0.3,8.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLAdQgFgEgBgGIAIAAQAAAHAJAAQAFAAACgEQADgDAAgGQAAgIgGgDQgEgCgJAAIAAgFQAJAAACgCQAGgCgBgHQABgEgDgCQgDgDgCAAQgEAAgCACQgDACAAADIgHAAIAAAAQAAgGAFgEQAFgDAGAAQAGAAAFADQAEAEAAAHQAAAKgLAFQANACAAAMQABAJgGAFQgFAGgHAAQgIAAgDgDg");
	this.shape_4.setTransform(0.3,9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAJAeIAAgSIgZAAIAAgHIAagiIAHAAIAAAiIAAAHIAAASgAgJAFIARAAIAAgYg");
	this.shape_5.setTransform(0.4,9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgLAcQgFgEAAgGIAHAAQABAHAIAAQAEAAADgFQACgDAAgGQABgIgIgDQgCAAgMAAIAAgeIAbAAIAAAHIgUAAIAAAQQAJAAAGAEQAHADAAAKQAAAJgEAGQgGAGgHAAQgGAAgFgDg");
	this.shape_6.setTransform(0.3,9.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgSADQAAgiAVAAQAFAAAEADQAFAEAAAFIgHAAQAAgGgHAAQgGAAgEAKQgDAHAAAIIAAABQAGgGAHAAQAHAAAEAFQAEAEAAAIQABAIgFAGQgEAGgJAAQgTAAAAgdgAgHAFQgCAEAAAHQABADADAEQADADADAAQAFAAACgFQADgEAAgFQAAgFgDgEQgCgDgGAAQgDAAgEAFg");
	this.shape_7.setTransform(0.3,9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgKAeIAAgDQAAgMAIgPIANgWIgdAAIAAgHIAkAAIAAAHIgDAFQgSAcABATg");
	this.shape_8.setTransform(0.3,9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgMAbQgGgFAAgJQAAgLALgEQgJgFAAgIQAAgHAFgFQAFgEAGAAQAHAAAFAEQAFAFgBAHQAAAEgCAEIgGAFQALAEAAALQAAAJgFAFQgFAFgJAAQgHAAgFgFgAgHAEQgDAEgBAFQAAAFADAEQAEAEAEAAQAFAAADgEQAEgEAAgFQAAgFgEgEQgDgEgFAAQgEAAgDAEgAgFgWQgDADAAAEQAAAEADADQACADADAAQAEAAACgDQADgDAAgEQAAgEgDgDQgCgDgEAAQgDAAgCADg");
	this.shape_9.setTransform(0.3,9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgLAdQgFgDAAgGIAHAAQAAABAAAAQAAABABABQAAAAAAAAQABABAAAAQADACACAAQAHAAADgKQAEgHAAgJIAAAAQgHAHgHAAQgHAAgEgHQgFgEAAgHQABgIAEgGQAFgGAIAAQAKAAAFALQADAJAAALQAAAMgEAIQgFAMgLAAQgFAAgEgDgAgIgUQgCAEAAAFQAAAFACAEQADACAFAAQAEAAADgCQACgEAAgFQAAgGgDgDQgDgFgDAAQgFAAgDAFg");
	this.shape_10.setTransform(0.3,9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgLAdQgFgDAAgGIAHAAQAAABAAAAQAAABABABQAAAAAAAAQABABAAAAQACACAEAAQAFAAAEgKQADgHAAgJIAAAAQgGAHgGAAQgIAAgFgHQgDgEAAgHQAAgIAEgGQAFgGAIAAQAKAAAFALQADAJAAALQAAAMgDAIQgHAMgJAAQgHAAgDgDgAgIgUQgCAEAAAFQAAAFACAEQADACAFAAQAEAAADgCQADgEgBgFQAAgGgCgDQgDgFgEAAQgFAAgDAFg");
	this.shape_11.setTransform(-4.5,9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgPAUQgEgJAAgLQAAgKAEgJQAFgMAKAAQALAAAFAMQAEAJAAAKQAAALgEAJQgFAMgLAAQgKAAgFgMgAgJgPQgCAHAAAIQAAAJACAGQADALAGAAQAHAAADgLQADgGAAgJQAAgIgDgHQgDgKgHAAQgGAAgDAKg");
	this.shape_12.setTransform(2.7,9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgPAUQgEgJAAgLQAAgKAEgJQAGgMAJAAQALAAAFAMQAEAJAAAKQAAALgEAJQgGAMgKAAQgJAAgGgMgAgKgPQgCAHAAAIQAAAJACAGQAEALAGAAQAHAAAEgLQACgGAAgJQAAgIgCgHQgEgKgHAAQgGAAgEAKg");
	this.shape_13.setTransform(-2.1,9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AADAeIAAgGIALAAIAAAGgAgCAeIAAgGIAFAAIAAAGgAgNAeIAAgGIALAAIAAAGgAADAYgAADAYIgFAAIAAgtIgLAFIAAgHIAMgGIAEAAIAAA1gAgCAYg");
	this.shape_14.setTransform(-6.9,9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AADAeIAAgGIAAAGIgFAAIAAgGIAFAAIgFAAIAAgtIgLAFIAAgHIAMgGIAEAAIAAA1IALAAIAAAGgAgNAeIAAgGIALAAIAAAGgAgCAYg");
	this.shape_15.setTransform(2.7,9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgLAdQgFgEgBgGIAIAAQAAAHAJAAQAEAAAEgEQACgDAAgGQAAgIgGgDQgEgCgIAAIAAgFQAIAAACgCQAFgCABgHQgBgEgCgCQgCgDgDAAQgDAAgDACQgEACABADIgHAAIAAAAQAAgGAFgEQAEgDAHAAQAGAAAEADQAFAEAAAHQAAAKgLAFQANACABAMQgBAJgFAFQgFAGgHAAQgHAAgEgDg");
	this.shape_16.setTransform(2.7,9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAJAeIAAgSIgYAAIAAgHIAZgiIAGAAIAAAiIAAAHIAAASgAgKAFIARAAIAAgYg");
	this.shape_17.setTransform(2.8,9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgKAcQgGgEAAgGIAHAAQAAAHAJAAQAEAAADgFQADgDgBgGQAAgIgHgDQgDAAgMAAIAAgeIAcAAIAAAHIgVAAIAAAQQAKAAAGAEQAHADAAAKQAAAJgFAGQgEAGgIAAQgGAAgEgDg");
	this.shape_18.setTransform(2.7,9.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgRADQAAgiATAAQAGAAAEADQAFAEAAAFIgHAAQAAgGgIAAQgFAAgEAKQgEAHABAIIAAABQAGgGAGAAQAIAAAFAFQADAEAAAIQAAAIgEAGQgFAGgIAAQgTAAABgdgAgHAFQgBAEAAAHQAAADADAEQADADADAAQAFAAACgFQADgEAAgFQAAgFgDgEQgDgDgFAAQgDAAgEAFg");
	this.shape_19.setTransform(2.7,9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgKAeIAAgDQAAgMAIgPIANgWIgcAAIAAgHIAjAAIAAAHIgDAFQgRAcAAATg");
	this.shape_20.setTransform(2.7,9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AADAeIAAgGIALAAIAAAGgAgCAeIAAgGIAFAAIAAAGgAgNAeIAAgGIALAAIAAAGgAADAYgAADAYIgFAAIAAgtIgLAFIAAgHIAMgGIAEAAIAAA1gAgCAYg");
	this.shape_21.setTransform(-6.9,9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgRAfIAAgGQAAgIAEgGQADgEAHgGIAHgHQAFgEAAgFQAAgEgDgCQgDgDgDAAQgIAAAAAHIgIAAIAAgBQAAgFAGgEQAEgDAGAAQAHAAAEAEQAFAEAAAHQAAAIgHAGIgLAKQgHAHAAAIIAbAAIAAAHg");
	this.shape_22.setTransform(-2.1,8.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{x:-4.5}},{t:this.shape}]}).to({state:[{t:this.shape_1,p:{x:-4.5}},{t:this.shape_2}]},1).to({state:[{t:this.shape_1,p:{x:-4.5}},{t:this.shape_3,p:{x:0.3}}]},1).to({state:[{t:this.shape_1,p:{x:-4.5}},{t:this.shape_4}]},1).to({state:[{t:this.shape_1,p:{x:-4.5}},{t:this.shape_5}]},1).to({state:[{t:this.shape_1,p:{x:-4.5}},{t:this.shape_6}]},1).to({state:[{t:this.shape_1,p:{x:-4.5}},{t:this.shape_7}]},1).to({state:[{t:this.shape_1,p:{x:-4.5}},{t:this.shape_8}]},1).to({state:[{t:this.shape_1,p:{x:-4.5}},{t:this.shape_9}]},1).to({state:[{t:this.shape_1,p:{x:-4.5}},{t:this.shape_10}]},1).to({state:[{t:this.shape_11,p:{x:-4.5}},{t:this.shape}]},1).to({state:[{t:this.shape_11,p:{x:-4.5}},{t:this.shape_2}]},1).to({state:[{t:this.shape_11,p:{x:-4.5}},{t:this.shape_3,p:{x:0.3}}]},1).to({state:[{t:this.shape_11,p:{x:-4.5}},{t:this.shape_4}]},1).to({state:[{t:this.shape_11,p:{x:-4.5}},{t:this.shape_5}]},1).to({state:[{t:this.shape_11,p:{x:-4.5}},{t:this.shape_6}]},1).to({state:[{t:this.shape_11,p:{x:-4.5}},{t:this.shape_7}]},1).to({state:[{t:this.shape_11,p:{x:-4.5}},{t:this.shape_8}]},1).to({state:[{t:this.shape_11,p:{x:-4.5}},{t:this.shape_9}]},1).to({state:[{t:this.shape_14,p:{x:-6.9}},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_14,p:{x:-6.9}},{t:this.shape_13},{t:this.shape_15}]},1).to({state:[{t:this.shape_14,p:{x:-6.9}},{t:this.shape_13},{t:this.shape_3,p:{x:2.7}}]},1).to({state:[{t:this.shape_14,p:{x:-6.9}},{t:this.shape_13},{t:this.shape_16}]},1).to({state:[{t:this.shape_14,p:{x:-6.9}},{t:this.shape_13},{t:this.shape_17}]},1).to({state:[{t:this.shape_14,p:{x:-6.9}},{t:this.shape_13},{t:this.shape_18}]},1).to({state:[{t:this.shape_14,p:{x:-6.9}},{t:this.shape_13},{t:this.shape_19}]},1).to({state:[{t:this.shape_14,p:{x:-6.9}},{t:this.shape_13},{t:this.shape_20}]},1).to({state:[{t:this.shape_14,p:{x:-6.9}},{t:this.shape_13},{t:this.shape_1,p:{x:2.7}}]},1).to({state:[{t:this.shape_14,p:{x:-6.9}},{t:this.shape_13},{t:this.shape_11,p:{x:2.7}}]},1).to({state:[{t:this.shape_21},{t:this.shape_14,p:{x:-2.1}},{t:this.shape_12}]},1).to({state:[{t:this.shape_21},{t:this.shape_14,p:{x:-2.1}},{t:this.shape_15}]},1).to({state:[{t:this.shape_21},{t:this.shape_14,p:{x:-2.1}},{t:this.shape_3,p:{x:2.7}}]},1).to({state:[{t:this.shape_21},{t:this.shape_14,p:{x:-2.1}},{t:this.shape_16}]},1).to({state:[{t:this.shape_21},{t:this.shape_14,p:{x:-2.1}},{t:this.shape_17}]},1).to({state:[{t:this.shape_21},{t:this.shape_14,p:{x:-2.1}},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_14,p:{x:-2.1}},{t:this.shape_19}]},1).to({state:[{t:this.shape_21},{t:this.shape_14,p:{x:-2.1}},{t:this.shape_20}]},1).to({state:[{t:this.shape_21},{t:this.shape_14,p:{x:-2.1}},{t:this.shape_1,p:{x:2.7}}]},1).to({state:[{t:this.shape_21},{t:this.shape_14,p:{x:-2.1}},{t:this.shape_11,p:{x:2.7}}]},1).to({state:[{t:this.shape_14,p:{x:-6.9}},{t:this.shape_3,p:{x:-2.1}},{t:this.shape_12}]},1).to({state:[{t:this.shape_14,p:{x:-6.9}},{t:this.shape_3,p:{x:-2.1}},{t:this.shape_15}]},1).to({state:[{t:this.shape_14,p:{x:-6.9}},{t:this.shape_22},{t:this.shape_3,p:{x:2.7}}]},1).to({state:[{t:this.shape_14,p:{x:-6.9}},{t:this.shape_3,p:{x:-2.1}},{t:this.shape_16}]},1).to({state:[{t:this.shape_14,p:{x:-6.9}},{t:this.shape_3,p:{x:-2.1}},{t:this.shape_17}]},1).to({state:[{t:this.shape_14,p:{x:-6.9}},{t:this.shape_3,p:{x:-2.1}},{t:this.shape_18}]},1).wait(1));

	// Layer 4
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#727272").s().p("AizhbIFnAAIgJAIIlVAAIAACnIgJAIg");
	this.shape_23.setTransform(-2.3,9.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#33C300").s().p("AiqBUIAAinIFVAAIAACng");
	this.shape_24.setTransform(-2.3,9.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A5A5A5").s().p("AizBcIAJgIIFVAAIAAinIAJgIIAAC3g");
	this.shape_25.setTransform(-2.3,9.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]}).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.3,0,36.1,18.5);


(lib._787_Generic_screencopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.edcp01p03_screen_lg();
	this.instance.setTransform(-22.8,-16.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.8,-16.4,679.5,533.6);


(lib.B787SynopticEFISDSPcopy9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 9
	this.instance = new lib.B787ButtonBAROSETnumbercopy8("synched",0,false);
	this.instance.setTransform(271.7,277.9,1,1,0,0,0,21.4,11.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.1,-1,310,454.2);


(lib._787_Generic_screencopy2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance_1 = new lib.boxpink02("synched",0);
	this.instance_1.setTransform(294.1,310,0.935,0.935,0,0,0,17.5,8.6);

	this.instance_2 = new lib.boxpink02sm("synched",0);
	this.instance_2.setTransform(446.9,306.4,0.935,0.935,0,0,0,17.5,8.6);
	this.instance_2._off = true;

	this.instance_3 = new lib.boxpink02smcopy("synched",0);
	this.instance_3.setTransform(446.9,577.5,0.935,0.935,0,0,0,17.5,8.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},2).to({state:[]},1).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_2}]},50).to({state:[{t:this.instance_3}]},2).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({y:345.5},0).wait(2).to({y:391.3},0).wait(2).to({y:439},0).wait(2).to({y:482.9},0).to({_off:true},2).wait(67));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).wait(2).to({regY:8.7,y:438.3},0).wait(2).to({regY:8.6,y:485},0).to({_off:true},1).wait(3).to({_off:false,x:506.1},0).wait(50).to({x:446.9,y:531},0).to({_off:true},2).wait(7));

	// right
	this.instance_4 = new lib.B787SynopticEFISDSPcopy9("synched",0,false);
	this.instance_4.setTransform(167.6,411.3,1.06,1.06,0,0,0,0,206.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({_off:false},0).to({_off:true},49).wait(10));

	// PNG
	this.instance_5 = new lib.edcp01p03_screen_01();
	this.instance_5.setTransform(-418.5,133.5,0.5,0.5);

	this.instance_6 = new lib.edcp01p03_screen_02();
	this.instance_6.setTransform(-418.5,133.5,0.5,0.5);

	this.instance_7 = new lib.edcp01p03_screen_03();
	this.instance_7.setTransform(-418.5,133.5,0.5,0.5);

	this.instance_8 = new lib.edcp01p03_screen_07();
	this.instance_8.setTransform(-418.5,133.5,0.5,0.5);

	this.instance_9 = new lib.edcp01p03_screen_08();
	this.instance_9.setTransform(-418.5,133.5,0.5,0.5);

	this.instance_10 = new lib.edcp01p03_screen_09();
	this.instance_10.setTransform(-418.5,133.5,0.5,0.5);

	this.instance_11 = new lib.edcp01p03_screen_10();
	this.instance_11.setTransform(-418.5,133.5,0.5,0.5);

	this.instance_12 = new lib.edcp01p03_screen_11();
	this.instance_12.setTransform(-418.5,133.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_6}]},7).to({state:[{t:this.instance_7}]},7).to({state:[]},1).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_9}]},45).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-418.5,133.5,929.5,542);


// stage content:



(lib.dif06edp03 = function(mode,startPosition,loop) {
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
	this.frame_364 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(364).call(this.frame_364).wait(1));

	// prot
	this.prot = new lib.prot();
	this.prot.setTransform(500,275,1,1,0,0,0,500,275);

	this.timeline.addTween(cjs.Tween.get(this.prot).wait(365));

	// hl 02
	this.instance = new lib.hl02("synched",0);
	this.instance.setTransform(132.3,291.5,1,1,0,0,0,37.4,37.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(111).to({_off:false},0).to({alpha:1},5).wait(218).to({startPosition:0},0).to({alpha:0},5).wait(26));

	// hl
	this.instance_1 = new lib.hl("synched",0);
	this.instance_1.setTransform(134,291.5,1,1,0,0,0,37.4,37.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(57).to({_off:false},0).to({alpha:1},5).wait(44).to({startPosition:0},0).to({alpha:0},5).wait(254));

	// selector
	this.instance_2 = new lib.EngineDisplayControlPanelcopy2();
	this.instance_2.setTransform(-9.7,186.2,1,1,0,0,0,310.9,104.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(365));

	// screen split
	this.instance_3 = new lib._787_Generic_screencopy2_1("single",0);
	this.instance_3.setTransform(738.5,117.3,1,1,0,0,0,319.8,250.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(59).to({mode:"synched",loop:false},0).wait(14).to({mode:"single",startPosition:14},0).wait(98).to({startPosition:18},0).wait(59).to({mode:"synched",loop:false},0).wait(49).to({mode:"single",startPosition:66},0).wait(50).to({mode:"synched",loop:false},0).wait(36));

	// screen
	this.instance_4 = new lib._787_Generic_screencopy2("synched",0);
	this.instance_4.setTransform(592.7,275.7,1,1,0,0,0,319.6,251);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(365));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(61.3,258,1438.8,567);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;