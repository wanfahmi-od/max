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
		{src:"images/dif05fbp05_plane.jpg", id:"dif05fbp05_plane"},
		{src:"images/gscm.png", id:"gscm"},
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



(lib.dif05fbp05_plane = function() {
	this.initialize(img.dif05fbp05_plane);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1175,661);


(lib.gscm = function() {
	this.initialize(img.gscm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,960);


(lib.texture = function() {
	this.initialize(img.texture);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.Turb_base = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,0,3).p("EA1Dgd1MAAAA7rMhqFAAAMAAAg7rg");
	this.shape.setTransform(331.6,272);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.dif05fbp05_plane();
	this.instance.setTransform(-8,81,0.578,0.578);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,80,681.2,384.1);


(lib.prot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.texture();
	this.instance.setTransform(0,0,100,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1000,550);


(lib.instruction = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZAsQgIgFgFgIQgFgJAAgLQAAgaAQgRQAOgPATAAQARAAAKAKQALALgBASQAAAOgGAOQgHAOgMAHQgMAHgKAAQgLAAgKgEgAgGgfQgGADgFAHQgFAHgDAJQgCAHAAAHQAAANAHAHQAGAHAKAAQAEAAAEgCQAEgCAFgEQAFgFADgFIAEgMQADgGAAgIQAAgNgGgHQgHgHgJAAQgGAAgGAEg");
	this.shape.setTransform(406.1,476.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYAsQgIgFgFgJQgFgKABgLQgBgNAIgPQAGgOAMgHQALgHALAAQARAAAKAKQAJALAAARIgBANIhCAAIAAAEQAAAOAFAGQAHAHAIAAQAHAAAHgFQAIgFAEgKIAQABQgDAMgNAKQgLAKgPAAQgKAAgJgEgAgKgcQgJAHgDAOIAyAAIAAgDQAAgMgGgGQgGgHgKAAQgIAAgIAHg");
	this.shape_1.setTransform(396.1,476.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgmA3QgJgKAAgSQAAgRAGgMQAIgOAKgIQAKgGALgBQAQAAAJARIAKgyIAQAAIgbB/IgPAAIADgOQgMAQgPAAQgNAAgIgKgAgLgPQgFACgEAHQgGAGgCAIQgDAJgBAHQAAAKACAFQACAGAFADQAFAFAGAAQALAAAHgMQAMgPgBgWQABgJgHgGQgFgGgHAAQgFgBgFADg");
	this.shape_2.setTransform(386.7,474.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgUBAIAUhbIAOAAIgSBbgAABgtIAEgSIAQAAIgEASg");
	this.shape_3.setTransform(379.5,474.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgaAuIgQhbIAQAAIAIAxIADAcIAMgXIAdg2IARAAIg0Bbg");
	this.shape_4.setTransform(373.5,476.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAAAuIgBg1IgBgTIgIAUIgZA0IgRAAIgKhbIAQAAIAEAqIACAVIAAALIAEgOIAHgNIAWgvIAPAAIADAtIABAcIAOgfIAUgqIAQAAIguBbg");
	this.shape_5.setTransform(357.5,476.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgYAsQgJgFgEgJQgEgKgBgLQAAgNAIgPQAGgOAMgHQALgHALAAQARAAAKAKQAKALAAARIgBANIhDAAIAAAEQgBAOAHAGQAFAHAJAAQAGAAAIgFQAIgFAEgKIAQABQgEAMgMAKQgMAKgOAAQgLAAgIgEgAgKgcQgJAHgEAOIAzAAIAAgDQAAgMgGgGQgGgHgJAAQgJAAgIAHg");
	this.shape_6.setTransform(345.1,476.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgUBAIAUhbIAOAAIgSBbgAABgtIAEgSIAQAAIgEASg");
	this.shape_7.setTransform(338.5,474.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgaAuIgQhbIAQAAIAIAxIADAcIAMgXIAdg2IARAAIg0Bbg");
	this.shape_8.setTransform(332.5,476.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgZAsQgIgFgFgIQgFgJAAgLQAAgaAQgRQANgPAUAAQARAAAKAKQALALgBASQAAAOgGAOQgHAOgMAHQgLAHgLAAQgLAAgKgEgAgGgfQgGADgFAHQgFAHgDAJQgCAHAAAHQAAANAHAHQAGAHAKAAQAEAAAEgCQAEgCAFgEQAEgFAEgFIAEgMQADgGAAgIQAAgNgGgHQgHgHgKAAQgFAAgGAEg");
	this.shape_9.setTransform(317.1,476.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgSA7QgEgDgBgGIADgPIALg0IgNAAIADgMIANAAIAEgXIARgLIgHAiIAPAAIgDAMIgPAAIgJAyIgBAMQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAQABACADgBIAJgBIgDANQgGACgDAAQgKAAgFgFg");
	this.shape_10.setTransform(310.2,474.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgSA7QgEgDAAgGIACgPIALg0IgNAAIADgMIANAAIAEgXIARgLIgIAiIAQAAIgCAMIgQAAIgJAyIgBAMQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAQACACACgBIAJgBIgDANQgGACgDAAQgKAAgFgFg");
	this.shape_11.setTransform(300.2,474.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgeAnQgJgKAAgSQgBgNAHgPQAFgPAMgHQAMgIAMAAQAPAAAJAIQAJAJAAAOIgQABQAAgJgFgFQgGgFgIAAQgHAAgIAGQgHAGgEAMQgDALAAALQgBAMAGAGQAFAGAIAAQAFAAAIgGQAHgGAEgMIAQACQgGARgLAJQgLAIgMAAQgPAAgKgJg");
	this.shape_12.setTransform(292.9,476.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgYAsQgIgFgFgJQgEgKgBgLQAAgNAHgPQAHgOALgHQAMgHALAAQARAAAKAKQAKALAAARIgBANIhDAAIAAAEQgBAOAHAGQAFAHAJAAQAGAAAIgFQAIgFAEgKIAQABQgEAMgMAKQgLAKgPAAQgLAAgIgEgAgKgcQgIAHgFAOIAyAAIABgDQAAgMgGgGQgGgHgJAAQgJAAgIAHg");
	this.shape_13.setTransform(283.1,476.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgUBAIAZh/IAQAAIgZB/g");
	this.shape_14.setTransform(276.4,474.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgYAsQgJgFgEgJQgFgKABgLQAAgNAGgPQAIgOAKgHQAMgHALAAQARAAAKAKQAJALAAARIgBANIhCAAIgBAEQABAOAFAGQAHAHAIAAQAGAAAIgFQAIgFAFgKIAPABQgDAMgMAKQgNAKgOAAQgLAAgIgEgAgKgcQgJAHgDAOIAyAAIAAgDQAAgMgGgGQgGgHgKAAQgIAAgIAHg");
	this.shape_15.setTransform(269.1,476.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgnA4QgOgJAAgZIARgBIAAAEQAAAIAEAGQADAGAIADQAIAEALAAQANAAAIgHQAIgGAAgKQAAgFgEgFQgEgGgTgIQgOgFgGgDQgIgGgEgGQgFgHAAgJQAAgKAGgIQAFgHALgFQAKgEALAAQAQAAALAFQALAGAFAJQAFAIAAAIIAAADIgRABIgBgIQgCgGgEgDQgDgEgHgDQgGgCgIABQgMgBgIAHQgGAFAAAHQAAAFACAEQADAEAGAEIAUAKIATAHQAHAFAEAGQAEAHAAAIQAAALgHAIQgGAJgLAGQgLAEgNAAQgWAAgOgKg");
	this.shape_16.setTransform(258.5,474.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1,0,0,3).p("EA1DgB8IAAD5MhqFAAAIAAj5g");
	this.shape_17.setTransform(331,474.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFCC00").s().p("Eg1CAB9IAAj5MBqFAAAIAAD5g");
	this.shape_18.setTransform(331,474.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.6,461.3,681.2,27.1);


(lib.gscm_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAsBAIAAhqIglBqIgOAAIglhsIAABsIgQAAIAAh/IAZAAIAfBZIAEATIAHgUIAfhYIAXAAIAAB/g");
	this.shape.setTransform(388.6,349.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdA6QgNgJgHgQQgGgQgBgRQAAgTAIgQQAIgOAOgIQAOgIAPAAQAUAAANAKQANAKAFASIgRADQgEgOgIgGQgJgHgNAAQgNABgKAGQgKAIgEAMQgEAMAAAMQAAAPAFAMQAFANAKAFQAKAHAKAAQAOAAAKgJQAKgIADgQIARAEQgFAVgOALQgOALgUAAQgTAAgNgIg");
	this.shape_1.setTransform(374.7,349.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYA9QgMgFgHgKQgGgKgBgNIAQgCQACAKAEAGQAEAGAJAEQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgFQgEgEgIgDIgVgGQgRgFgHgBQgKgFgEgHQgFgIAAgIQAAgLAGgHQAFgJALgFQALgEAMAAQANAAALAEQALAFAGAJQAGAJAAALIgQABQgCgMgHgGQgIgGgOAAQgOAAgHAFQgHAHAAAIQAAAHAFAEQAFAEASAFQAVAFAIADQALAEAGAHQAFAIAAAKQAAALgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape_2.setTransform(362,349.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgbA6QgPgIgIgQQgIgPAAgTQAAgRAIgQQAIgQAOgIQAPgIARAAQAOAAAMAEQALAFAGAIQAHAIADANIgPAFQgDgKgFgGQgEgFgIgEQgIgEgKAAQgJAAgJAEQgIAEgFAGQgGAFgDAHQgFAMAAANQAAAQAGAMQAGALAMAGQALAGALAAQALAAAKgFQALgDAFgGIAAgXIgmAAIAAgOIA3AAIAAAuQgNAKgNAFQgNAFgOAAQgRAAgQgIg");
	this.shape_3.setTransform(349,349.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.gscm();
	this.instance.setTransform(0,0,0.413,0.413);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,529.2,396.9);


(lib.Turb_basecopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.instruction("synched",0);
	this.instance.setTransform(320.4,265.6,1,1,0,0,0,320.4,265.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.6,461.3,681.2,27.1);


// stage content:
(lib.dif05fbp05 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{s1:0,s2:110});

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
	this.frame_109 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
	}
	this.frame_303 = function() {
		this.btn1.addEventListener("click", btn1Handler.bind(this));
		
		function btn1Handler()
		{          
				pageControllerAPI.showVideo({
		                    title: "Wing Surfaces Operation Landing",
		                    url: "05/video/wingsurfacesoperationlanding.mp4"
		                }); 
		
		}
	}
	this.frame_308 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(109).call(this.frame_109).wait(194).call(this.frame_303).wait(5).call(this.frame_308).wait(1));

	// prot
	this.prot = new lib.prot();
	this.prot.setTransform(500,275,1,1,0,0,0,500,275);

	this.timeline.addTween(cjs.Tween.get(this.prot).wait(309));

	// video instruction
	this.instance = new lib.Turb_basecopy("synched",0);
	this.instance.setTransform(489.4,247.6,1,1,0,0,0,320,256);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(303).to({_off:false},0).to({alpha:1},5).wait(1));

	// video
	this.btn1 = new lib.Turb_base();
	this.btn1.setTransform(488.8,246.9,1,1,0,0,0,320,256);
	this.btn1.alpha = 0;
	this.btn1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn1).wait(110).to({_off:false},0).to({alpha:1},5).wait(194));

	// gscm
	this.instance_1 = new lib.gscm_1("synched",0);
	this.instance_1.setTransform(500,275.1,1,1,0,0,0,264.6,198.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(103).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(200));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(500,275,1000,550);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;