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
		{src:"images/sb01p01_spdbrk.png", id:"sb01p01_spdbrk"},
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


(lib.sb01p01_spdbrk = function() {
	this.initialize(img.sb01p01_spdbrk);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,960);


(lib.texture = function() {
	this.initialize(img.texture);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.spdbreak = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sb01p01_spdbrk();
	this.instance.setTransform(0,0,0.521,0.521);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,667.1,500.3);


(lib.prot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.texture();
	this.instance.setTransform(0,0,100,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1000,550);


(lib.hl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(5,0,0,3).p("Ah+k0ID9AAIAAJpIj9AAg");
	this.shape.setTransform(12.8,30.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,30.5,66.9);


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


// stage content:
(lib.dif05sbp02 = function(mode,startPosition,loop) {
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
	this.frame_60 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(60).call(this.frame_60).wait(1));

	// prot
	this.prot = new lib.prot();
	this.prot.setTransform(500,275,1,1,0,0,0,500,275);

	this.timeline.addTween(cjs.Tween.get(this.prot).wait(61));

	// spdbrk
	this.instance = new lib.spdbreak("synched",0);
	this.instance.setTransform(503.7,400.7,0.157,0.157,0,0,0,510.9,374.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({scaleX:1,scaleY:1,x:844.5,y:424.6,alpha:1},5).wait(42));

	// hl
	this.instance_1 = new lib.hl("synched",0);
	this.instance_1.setTransform(470.3,376.3,1,1,0,0,0,12.8,30.9);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},5).wait(9).to({startPosition:0},0).to({alpha:0},5).wait(42));

	// cockpit
	this.instance_2 = new lib.B737800CockpitStage("single",0);
	this.instance_2.setTransform(499.7,274.8,1,1,0,0,0,429.6,274.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({startPosition:0},0).to({alpha:0},5).wait(42));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(500,274.5,1000,551.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;