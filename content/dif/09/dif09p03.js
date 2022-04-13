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
		{src:"images/texture.jpg", id:"texture"},
		{src:"images/vsd01p02_screen.png", id:"vsd01p02_screen"}
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



(lib.texture = function() {
	this.initialize(img.texture);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.vsd01p02_screen = function() {
	this.initialize(img.vsd01p02_screen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1081,814);


(lib.vsd3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PNG
	this.instance = new lib.vsd01p02_screen();
	this.instance.setTransform(-8.8,17.8,0.497,0.497);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.8,17.8,536.8,404.2);


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
	this.shape.graphics.f().s("#FFFF00").ss(5,0,0,3).p("Ai7ogIF3AAIAARBIl3AAg");
	this.shape.setTransform(18.9,54.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,42.7,114.2);


(lib.hl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(5,0,0,3).p("A7zkNMA3nAAAIAAIbMg3nAAAg");
	this.shape.setTransform(178,27);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,361.1,59.1);


(lib.arrowcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// arrow
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,0,3).p("ABKhYIAAFrIiTAAIAAlrIhVAAICei3ICeC3g");
	this.shape.setTransform(-0.4,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AhJESIAAlsIhUAAICdi3ICeC3IhUAAIAAFsg");
	this.shape_1.setTransform(-0.4,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.4,-28.9,34,56.8);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// arrow
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,0,3).p("ABKhYIAAFrIiTAAIAAlrIhVAAICei3ICeC3g");
	this.shape.setTransform(-0.4,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AhJESIAAlsIhUAAICdi3ICeC3IhUAAIAAFsg");
	this.shape_1.setTransform(-0.4,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.4,-28.9,34,56.8);


// stage content:
(lib.dif09p03 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{s1:0,s2:349});

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
	this.frame_348 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
	}
	this.frame_801 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(348).call(this.frame_348).wait(453).call(this.frame_801).wait(1));

	// prot
	this.prot = new lib.prot();
	this.prot.setTransform(500,275,1,1,0,0,0,500,275);

	this.timeline.addTween(cjs.Tween.get(this.prot).wait(802));

	// hl
	this.instance = new lib.hl("synched",0);
	this.instance.setTransform(580.7,432.2,1,1,0,0,0,178,27);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(675).to({_off:false},0).to({alpha:1},5).wait(122));

	// arr3
	this.instance_1 = new lib.arrowcopy("synched",0);
	this.instance_1.setTransform(191.1,362.8,1,1,0,90,-90);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(604).to({_off:false},0).to({x:211.1,alpha:1},5).wait(193));

	// arr2
	this.instance_2 = new lib.arrow("synched",0);
	this.instance_2.setTransform(206.4,453.5,1,1,0,90,-90);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(438).to({_off:false},0).to({x:236.4,alpha:1},5).wait(359));

	// arr
	this.instance_3 = new lib.arrow("synched",0);
	this.instance_3.setTransform(214.9,421.7,1,1,0,90,-90);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(424).to({_off:false},0).to({x:239.9,alpha:1},5).wait(373));

	// hl2
	this.instance_4 = new lib.hl2("synched",0);
	this.instance_4.setTransform(257.4,409.1,1,1,0,0,0,18.9,54.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(73).to({_off:false},0).to({alpha:1},5).wait(9).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(709));

	// screen
	this.instance_5 = new lib.vsd3("synched",0);
	this.instance_5.setTransform(496.3,280.3,1.007,1.007,0,0,0,255.8,225.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(802));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(500,275,1000,550);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;