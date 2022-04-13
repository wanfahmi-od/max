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
		{src:"images/as01p04_737ng.png", id:"as01p04_737ng"},
		{src:"images/as01p04_b737maxpanel.png", id:"as01p04_b737maxpanel"},
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



(lib.as01p04_737ng = function() {
	this.initialize(img.as01p04_737ng);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,634,991);


(lib.as01p04_b737maxpanel = function() {
	this.initialize(img.as01p04_b737maxpanel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,634,991);


(lib.texture = function() {
	this.initialize(img.texture);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.textboxLsidecopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAmBAIghguIgFgJIgFAKIggAtIgUAAIAxhBIgsg+IAVAAIAXAhIAIAQIALgPIAZgiIATAAIguA9IAyBCg");
	this.shape.setTransform(75.5,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AApBAIgPgnIg0AAIgPAnIgSAAIAyh/IAQAAIA1B/gAgIgZIgOAkIAqAAIgNghIgHgbQgDAMgFAMg");
	this.shape_1.setTransform(63.5,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAtBAIAAhqIgmBqIgOAAIgkhsIAABsIgRAAIAAh/IAZAAIAfBZIAEATIAHgUIAfhYIAXAAIAAB/g");
	this.shape_2.setTransform(50,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgWA/QAAgPAGgWQAFgVALgSQAJgUAMgOIg9AAIAAgPIBRAAIAAAMQgMANgMAWQgMAUgFAXQgFAQgBATg");
	this.shape_3.setTransform(37.5,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgcA3QgLgKgCgQIAQgCQADANAGAHQAHAFAJAAQAKAAAHgIQAIgHAAgMQAAgKgHgIQgHgHgLAAQgDAAgGACIABgMIADAAQAIABAIgGQAIgFAAgLQAAgJgGgGQgGgFgHAAQgJAAgGAFQgHAGgBAMIgQgDQADgQAKgJQAKgJAQAAQAIABAJAEQAJAEAFAIQAEAJAAAIQAAAIgEAIQgFAGgIAEQALADAGAGQAHAJAAAMQAAARgNALQgMAMgRABQgRAAgLgLg");
	this.shape_4.setTransform(27.4,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgWA/QAAgPAGgWQAFgVALgSQAJgUAMgOIg9AAIAAgPIBRAAIAAAMQgMANgMAWQgMAUgFAXQgFAQgBATg");
	this.shape_5.setTransform(17.5,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,0,0,3).p("AnEiYIOJAAIAAExIuJAAg");
	this.shape_6.setTransform(47.4,0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AnECZIAAkwIOJAAIAAEwg");
	this.shape_7.setTransform(47.4,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,-15.8,92.8,32.6);


(lib.textboxLside = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgbA6QgPgIgIgQQgIgPAAgTQAAgQAIgRQAIgQAOgIQAPgIARAAQAOAAAMAEQALAFAGAIQAHAIADANIgPAFQgDgKgFgGQgEgFgIgEQgIgDgKAAQgJAAgJADQgIAEgFAFQgGAGgDAHQgFAMAAANQAAAQAGAMQAGALAMAGQALAGALAAQALAAAKgEQALgFAFgEIAAgYIgmAAIAAgOIA3AAIAAAuQgNAKgNAFQgNAFgOAAQgRAAgQgIg");
	this.shape.setTransform(69.2,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAhBAIhChjIAABjIgQAAIAAh/IARAAIBCBjIAAhjIAQAAIAAB/g");
	this.shape_1.setTransform(55.7,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgWA/QAAgPAGgWQAFgVALgSQAJgUAMgOIg9AAIAAgPIBRAAIAAAMQgMANgMAWQgMAUgFAXQgFAQgBATg");
	this.shape_2.setTransform(44.3,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcA3QgLgKgCgQIAQgCQADANAGAHQAHAFAJAAQAKAAAHgIQAIgHAAgMQAAgKgHgIQgHgHgLAAQgDAAgGACIABgMIADAAQAIABAIgGQAIgFAAgLQAAgJgGgGQgGgFgHAAQgJAAgGAFQgHAGgBAMIgQgDQADgQAKgJQAKgJAQAAQAIABAJAEQAJAEAFAIQAEAJAAAIQAAAIgEAIQgFAGgIAEQALADAGAGQAHAJAAAMQAAARgNALQgMAMgRABQgRAAgLgLg");
	this.shape_3.setTransform(34.2,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgWA/QAAgPAGgWQAFgVALgSQAJgUAMgOIg9AAIAAgPIBRAAIAAAMQgMANgMAWQgMAUgFAXQgFAQgBATg");
	this.shape_4.setTransform(24.3,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,0,0,3).p("AnEiYIOJAAIAAExIuJAAg");
	this.shape_5.setTransform(47.4,0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AnECZIAAkwIOJAAIAAEwg");
	this.shape_6.setTransform(47.4,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,-15.8,92.8,32.6);


(lib.prot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.texture();
	this.instance.setTransform(0,0,100,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1000,550);


(lib.hlcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(5,0,0,3).p("AStioIdzAAIAAFRI9zAAgEgwfgCoIdzAAIAAFRI9zAAg");
	this.shape.setTransform(99.8,17);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-213.1,-2.5,626,39);


(lib.hl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(5,0,0,3).p("AT+jCIcpAAIAAGFI8pAAgEgwmgDCIcpAAIAAGFI8pAAg");
	this.shape.setTransform(101.2,18.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-212.5,-3.5,627.4,44.2);


(lib.BLEEDPanel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgU/AkkIAAgFQgUgcghgWQgGgEgMgDIgWgGQgXgFgMAAQgpgChEACMAAAhH/MAxZAAAMAAABIAQhFgCgoACQgMABgYAEIgVAGQgMADgHAEQghAWgTAcIAAAEg");
	mask.setTransform(-301.4,25.5);

	// PNG
	this.instance = new lib.as01p04_b737maxpanel();
	this.instance.setTransform(-460,-202.5,0.5,0.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-459.6,-202.5,316.3,495.1);


(lib._737ngbleed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgU/AkkIAAgFQgUgcghgWQgGgEgMgDIgWgGQgXgFgMAAQgpgChEACMAAAhH/MAxZAAAMAAABIAQhFgCgoACQgMABgYAEIgVAGQgMADgHAEQghAWgTAcIAAAEg");
	mask.setTransform(-301.4,25.5);

	// PNG
	this.instance = new lib.as01p04_737ng();
	this.instance.setTransform(-460,-203,0.5,0.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-459.6,-203,316.3,495.6);


// stage content:
(lib.dif02p04 = function(mode,startPosition,loop) {
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
	this.frame_294 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(294).call(this.frame_294).wait(1));

	// prot
	this.prot = new lib.prot();
	this.prot.setTransform(500,275,1,1,0,0,0,500,275);

	this.timeline.addTween(cjs.Tween.get(this.prot).wait(295));

	// arr
	this.instance = new lib.textboxLsidecopy2("synched",0);
	this.instance.setTransform(672.6,37.5);

	this.instance_1 = new lib.textboxLside("synched",0);
	this.instance_1.setTransform(242.6,37.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(295));

	// hl
	this.instance_2 = new lib.hlcopy("synched",0);
	this.instance_2.setTransform(496.4,416.4,1,1,0,0,0,91.7,19.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(168).to({_off:false},0).to({alpha:1},5).wait(116).to({startPosition:0},0).to({alpha:0},5).wait(1));

	// hl
	this.instance_3 = new lib.hl("synched",0);
	this.instance_3.setTransform(530.1,83.6,1,1,0,0,0,91.7,19.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(55).to({_off:false},0).to({alpha:1},5).wait(43).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(186));

	// 737ng
	this.instance_4 = new lib._737ngbleed("synched",0);
	this.instance_4.setTransform(335.7,306.8,1,1,0,0,0,-255.7,44.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(295));

	// panel
	this.instance_5 = new lib.BLEEDPanel("synched",0);
	this.instance_5.setTransform(765.7,306.4,1,1,0,0,0,-255.7,44.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(295));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(500,275,1000,550);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;