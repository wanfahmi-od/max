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
		{src:"images/sb01p03_glareshield.png", id:"sb01p03_glareshield"},
		{src:"images/sb01p03_panel2.png", id:"sb01p03_panel2"},
		{src:"images/sb01p03_panel3.png", id:"sb01p03_panel3"},
		{src:"images/sb01p03_panel4.png", id:"sb01p03_panel4"},
		{src:"images/sb01p03_panelleft.png", id:"sb01p03_panelleft"},
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



(lib.sb01p03_glareshield = function() {
	this.initialize(img.sb01p03_glareshield);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1026,328);


(lib.sb01p03_panel2 = function() {
	this.initialize(img.sb01p03_panel2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,390,318);


(lib.sb01p03_panel3 = function() {
	this.initialize(img.sb01p03_panel3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,361,318);


(lib.sb01p03_panel4 = function() {
	this.initialize(img.sb01p03_panel4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,390,318);


(lib.sb01p03_panelleft = function() {
	this.initialize(img.sb01p03_panelleft);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,361,318);


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


(lib.panel2copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PNG
	this.instance = new lib.sb01p03_panel4();
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,195,159);


(lib.panel2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PNG
	this.instance = new lib.sb01p03_panel2();
	this.instance.setTransform(-0.4,-0.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,-0.4,195,159);


(lib.panel1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PNG
	this.instance = new lib.sb01p03_panel3();
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,180.5,159);


(lib.panel1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PNG
	this.instance = new lib.sb01p03_panelleft();
	this.instance.setTransform(-0.4,-0.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,-0.4,180.5,159);


(lib.hl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(5,0,0,3).p("ACPicIFlAAIAAE5IllAAgAnzicIFlAAIAAE5IllAAg");
	this.shape.setTransform(50.1,15.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,105.1,36.6);


(lib.glareshield = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PNG
	this.instance = new lib.sb01p03_glareshield();
	this.instance.setTransform(0,-4.4,2.984,2.984);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-4.4,3061.4,978.7);


// stage content:
(lib.dif05sbp03 = function(mode,startPosition,loop) {
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
	this.frame_171 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(171).call(this.frame_171).wait(1));

	// prot
	this.prot = new lib.prot();
	this.prot.setTransform(500,275,1,1,0,0,0,500,275);

	this.timeline.addTween(cjs.Tween.get(this.prot).wait(172));

	// panel right
	this.instance = new lib.panel2copy("single",0);
	this.instance.setTransform(535,94.9,0.168,0.168,0,0,0,97.2,77.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.panel2copy2("single",1);
	this.instance_1.setTransform(677,385.7,1,1,0,0,0,97.2,77.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},21).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},18).wait(128));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).to({scaleX:1,scaleY:1,x:676.9,y:385.5,alpha:1},5).to({_off:true},18).wait(128));

	// panel left
	this.instance_2 = new lib.panel1("single",0);
	this.instance_2.setTransform(469.1,95.4,0.197,0.197,0,0,0,89.9,79);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.panel1copy("single",1);
	this.instance_3.setTransform(316,387.4,1,1,0,0,0,89.9,79.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},21).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},18).wait(128));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21).to({_off:false},0).to({regY:79.1,scaleX:1,scaleY:1,x:315.8,y:387.2,alpha:1},5).to({_off:true},18).wait(128));

	// hl
	this.instance_4 = new lib.hl("synched",0);
	this.instance_4.setTransform(530.4,94.8,1,1,0,0,0,79.1,15.1);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:1},5).wait(167));

	// glareshield
	this.instance_5 = new lib.glareshield("synched",0);
	this.instance_5.setTransform(500.1,174.8,0.168,0.168,0,0,0,1528.3,553.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(172));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(500,275,1000,550);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;