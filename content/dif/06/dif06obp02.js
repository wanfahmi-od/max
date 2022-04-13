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
		{src:"images/odu01p02_pfd.png", id:"odu01p02_pfd"},
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



(lib.odu01p02_pfd = function() {
	this.initialize(img.odu01p02_pfd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1342,1331);


(lib.texture = function() {
	this.initialize(img.texture);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.textboxup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape.setTransform(18.1,51.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgBA9QgFgDgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAHABACQAAABABAAQAAAAAAABQAAAAABABQAAAAABAAIAFACIAHgBIACAOIgMABQgIAAgDgCg");
	this.shape_1.setTransform(11.2,49.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_2.setTransform(3.6,51.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgnBBIAAh/IAOAAIAAAMQAGgHAGgEQAGgDAHAAQAMAAAKAGQAIAGAFALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgGAAgHgDQgGgDgFgFIAAAtgAgRgqQgIAJAAASQAAAQAHAJQAIAIAKAAQAJAAAHgJQAIgIAAgRQAAgSgIgJQgHgJgJAAQgKAAgHAKg");
	this.shape_3.setTransform(-6.1,52.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_4.setTransform(-16.4,51.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGBAIAAhbIANAAIAABbgAgGgsIAAgTIANAAIAAATg");
	this.shape_5.setTransform(-23.3,49.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgYA9QgMgFgHgKQgGgLgBgNIAQgBQACAKAEAGQAEAHAJADQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgEQgEgFgIgDIgVgHQgRgDgHgDQgKgFgEgGQgFgIAAgJQAAgKAGgIQAFgJALgDQALgFAMAAQANAAALAFQALAEAGAJQAGAJAAALIgQACQgCgNgHgGQgIgGgOAAQgOAAgHAFQgHAGAAAJQAAAHAFADQAFAFASAFQAVAEAIAEQALADAGAJQAFAHAAALQAAAKgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape_6.setTransform(46.6,29.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgvBAIAAh/IAvAAQAMAAAGACQAKABAGAEQAHAFAEAIQADAIABAKQgBAQgJAKQgLAKgcABIgeAAIAAA0gAgegCIAeAAQASAAAGgFQAHgHAAgLQAAgIgEgGQgEgGgHgCIgQgBIgeAAg");
	this.shape_7.setTransform(35,29.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgbA6QgPgIgIgQQgIgPAAgTQAAgRAIgQQAIgQAOgIQAPgIARAAQAOAAAMAFQALAEAGAIQAHAIADANIgPAFQgDgLgFgFQgEgGgIgDQgIgEgKABQgJgBgJAEQgIAEgFAFQgGAHgDAGQgFAMAAANQAAAQAGAMQAGAMAMAFQALAGALAAQALAAAKgEQALgFAFgEIAAgZIgmAAIAAgNIA3AAIAAAuQgNAKgNAFQgNAFgOAAQgRAAgQgIg");
	this.shape_8.setTransform(21.6,29.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_9.setTransform(2.2,31);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_10.setTransform(-10.4,31.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAGAAQAHAAAJAFIgGAPQgFgEgGAAQgFAAgDADQgEADgCAGQgCAIAAAKIAAAvg");
	this.shape_11.setTransform(-17.6,31);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgKQAAgIACgFQACgHAGgDQAEgEAKAAIAPABIgDAPIgJgBQgHAAgDACQgDADAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_12.setTransform(-23.4,29.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_13.setTransform(-33.8,29.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgdAkQgMgNgBgXQABgVAMgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_14.setTransform(-41.4,31.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_15.setTransform(-50.9,31.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgvBAIAAh/IBcAAIAAAQIhKAAIAAAnIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_16.setTransform(57.7,9.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgHBAIAAhvIgrAAIAAgQIBlAAIAAAQIgrAAIAABvg");
	this.shape_17.setTransform(46,9.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AApBAIgQgnIg0AAIgNAnIgTAAIAxh/IARAAIA1B/gAgIgZIgNAkIApAAIgOghIgHgbQgCAMgFAMg");
	this.shape_18.setTransform(35.9,9.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ag0BAIAAh/IAtAAQANAAAHACQAMACAHAHQALAJAFAOQAFAMAAARQAAAOgEALQgDALgGAHQgFAIgGAEQgHAEgJADQgJACgJAAgAgjAxIAcAAQAKAAAIgDQAHgCAEgEQAGgGAEgKQADgLAAgNQAAgUgHgKQgGgLgKgEQgHgDgNABIgbAAg");
	this.shape_19.setTransform(23.6,9.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgMAAgOQAAgNAFgKQAFgLAJgHQAJgFALAAQAHgBAHAEQAGAEAFAFIAAguIAPAAIAAB/IgPAAIAAgMQgJAOgQAAQgKAAgJgGgAgQgJQgGAJAAAQQgBATAIAIQAHAJAJAAQAKAAAHgJQAIgIgBgSQABgRgIgJQgHgIgLgBQgIABgIAIg");
	this.shape_20.setTransform(6.5,9.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_21.setTransform(-3.2,10.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHADgGQADgGAFgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgGAEQgFAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQALAAAIADQAHACAEAFQADAEABAGIACAPIAAATQAAAWABAGQABAGACAFIgQAAQgDgFAAgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgCADgBAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgPACg");
	this.shape_22.setTransform(-13.2,11);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgvBAIAAh/IBcAAIAAAQIhKAAIAAAnIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_23.setTransform(-28.9,9.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAsBAIAAhqIglBqIgOAAIglhsIAABsIgQAAIAAh/IAZAAIAfBZIAEATIAHgUIAfhYIAXAAIAAB/g");
	this.shape_24.setTransform(-42.6,9.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_25.setTransform(-52.6,9.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgHBAIAAhvIgrAAIAAgQIBlAAIAAAQIgrAAIAABvg");
	this.shape_26.setTransform(-60.6,9.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(1,0,0,3).p("ABWloIhKiYIhMCYIAxAAIAAC5Iq1AAIAAK2IWJAAIAAq2IqkAAIAAi5g");
	this.shape_27.setTransform(-1,12.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("ArEIEIAAq2IK1AAIAAi5IgxAAIBMiYIBJCYIg0AAIAAC5IKkAAIAAK2g");
	this.shape_28.setTransform(-1,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.7,-39.8,158.7,105.5);


(lib.textboxRsidecopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape.setTransform(34.7,22.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_1.setTransform(24.7,22.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHBAIAAhbIAOAAIAABbgAgHgsIAAgTIAOAAIAAATg");
	this.shape_2.setTransform(17.8,20.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgBA9QgFgDgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAHABACQAAABABAAQAAAAAAABQAAAAABABQAAAAABAAIAFACIAHgBIACAOIgMABQgIAAgDgCg");
	this.shape_3.setTransform(13.3,20.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHADgGQADgGAFgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgGAEQgFAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQALAAAIADQAHACAEAFQADAEABAGIACAPIAAATQAAAWABAGQABAGACAFIgQAAQgDgFAAgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgCADgBAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgPACg");
	this.shape_4.setTransform(5.7,22.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgoAuIAAgNIA6hCIgSABIgkAAIAAgNIBKAAIAAAKIgwA6IgKAKIAUAAIApAAIAAANg");
	this.shape_5.setTransform(-3.8,22.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgHBAIAAhbIAOAAIAABbgAgHgsIAAgTIAOAAIAAATg");
	this.shape_6.setTransform(-10.2,20.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_7.setTransform(-19.7,22.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_8.setTransform(-32.3,22.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgBA9QgFgDgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAHABACQAAABABAAQAAAAAAABQAAAAABABQAAAAABAAIAFACIAHgBIACAOIgMABQgIAAgDgCg");
	this.shape_9.setTransform(-39.7,20.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_10.setTransform(-46.8,22.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_11.setTransform(-56.3,22.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_12.setTransform(-65.5,22.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgGgEgFAAQgGAAgCADQgDADgDAGQgCAIAAAKIAAAvg");
	this.shape_13.setTransform(16,2.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_14.setTransform(7.2,2.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_15.setTransform(-0.2,0.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHADgGQADgGAFgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgGAEQgFAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQALAAAIADQAHACAEAFQADAEABAGIACAPIAAATQAAAWABAGQABAGACAFIgQAAQgDgFAAgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgCADgBAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgPACg");
	this.shape_16.setTransform(-7.8,2.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAGAAQAHAAAJAFIgGAPQgFgEgGAAQgFAAgDADQgEADgCAGQgCAIAAAKIAAAvg");
	this.shape_17.setTransform(-15,2.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_18.setTransform(-23.8,2.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgnBBIAAh/IAPAAIAAAMQAEgHAHgEQAGgDAIAAQAMAAAIAGQAKAGAEALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgGAAgHgDQgHgDgEgFIAAAtgAgRgqQgIAJAAASQAAAQAIAJQAHAIAKAAQAIAAAJgJQAGgIAAgRQAAgSgGgJQgIgJgJAAQgKAAgHAKg");
	this.shape_19.setTransform(-33.5,4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_20.setTransform(-43.8,2.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgGgEgFAAQgGAAgCADQgDADgDAGQgCAIAAAKIAAAvg");
	this.shape_21.setTransform(34,-17.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_22.setTransform(25.2,-17.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgNIAOAAIAAgJQAAgKACgEQACgHAGgDQADgEALAAIAPABIgDAPIgJgCQgHABgDADQgDACAAAJIAAAIIASAAIAAANIgSAAIAABPg");
	this.shape_23.setTransform(18.2,-19.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgMAAgOQAAgNAFgKQAEgLAKgHQAJgFALAAQAHgBAGAEQAHAEAEAFIAAguIAQAAIAAB/IgPAAIAAgMQgIAOgRAAQgKAAgJgGgAgPgJQgIAJABAQQAAATAHAIQAIAJAIAAQAKAAAIgJQAGgIAAgSQAAgRgGgJQgIgIgLgBQgJABgGAIg");
	this.shape_24.setTransform(4.9,-19.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQAMAMgBAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_25.setTransform(-4.8,-17.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgGAuIgjhbIAQAAIAUA2IAFATIAFgSIAVg3IAQAAIgjBbg");
	this.shape_26.setTransform(-14.2,-17.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgFgEgGAAQgGAAgCADQgEADgCAGQgCAIAAAKIAAAvg");
	this.shape_27.setTransform(-21,-17.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_28.setTransform(-29.8,-17.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_29.setTransform(-39.3,-17.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgVAMgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAIAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_30.setTransform(-48.8,-17.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAjBAIgRgbIgMgSIgHgIIgIgEIgJAAIgUAAIAAA5IgRAAIAAh/IA3AAQARAAAJADQAJAEAGAJQAFAIAAALQAAAOgJAKQgJAHgSADQAGADAEADQAHAHAHAKIAWAjgAgmgGIAlAAQAJAAAHgDQAGgCAEgFQADgGAAgGQAAgJgGgGQgHgFgOAAIgnAAg");
	this.shape_31.setTransform(-59.7,-19.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(1,0,0,3).p("AKghSIAAAxIi4AAIAAk1I0lAAIAAKtIUlAAIAAlIIC4AAIAAA1ICXhIg");
	this.shape_32.setTransform(2.1,0.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("As6FXIAAqtIUmAAIAAE1IC3AAIAAgxICYBOIiYBHIAAg0Ii3AAIAAFIg");
	this.shape_33.setTransform(1.8,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.9,-34.8,167.5,70.6);


(lib.textboxRside = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAHgEAEgHQACgFAAgLIAAgFQgIADgPACg");
	this.shape.setTransform(38.7,2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgBA8QgFgCgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABABIAFAAIAHAAIACAOIgMABQgIAAgDgDg");
	this.shape_1.setTransform(31.3,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHADgGQADgGAFgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgGAEQgFAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQALAAAIADQAHACAEAFQADAEABAGIACAPIAAATQAAAWABAGQABAGACAFIgQAAQgDgFAAgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgCADgBAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgPACg");
	this.shape_2.setTransform(23.7,2.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag0BAIAAh/IAtAAQANAAAHACQAMADAHAGQALAJAFANQAFAOAAAQQAAANgEAMQgDALgGAHQgFAIgGAFQgHAEgJACQgJACgJAAgAgjAxIAcAAQAKAAAIgCQAHgDAEgEQAGgHAEgKQADgKAAgNQAAgTgHgLQgGgMgKgDQgHgCgNgBIgbAAg");
	this.shape_3.setTransform(12.5,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgGBAIAAh/IANAAIAAB/g");
	this.shape_4.setTransform(-1.3,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AghApQgIgIgBgLQAAgHADgGQAEgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgFAEQgGAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAKgDAJAAQAMAAAIADQAHACADAFQAFAEABAGIAAAPIAAATQAAAWABAGQABAGAEAFIgRAAQgCgFgBgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgDAFQgJACgEACQgEABgDAEQgBADAAAEQAAAHAEAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQADgFgBgLIAAgFQgIADgQACg");
	this.shape_5.setTransform(-8.3,2.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgGBAIAAhcIANAAIAABcgAgGgtIAAgSIANAAIAAASg");
	this.shape_6.setTransform(-15.2,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgBA8QgFgCgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABABIAFAAIAHAAIACAOIgMABQgIAAgDgDg");
	this.shape_7.setTransform(-19.7,0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_8.setTransform(-27.3,2.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_9.setTransform(-37.3,2.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_10.setTransform(-46.8,2.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_11.setTransform(-55.8,2.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgvBAIAAh/IBcAAIAAAPIhKAAIAAAoIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_12.setTransform(-66,0.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1,0,0,3).p("AKlhSIAAAxIiaAAIAAh3I1NAAIAAExIVNAAIAAiKICaAAIAAA1ICXhIg");
	this.shape_13.setTransform(1.6,0.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("As/CZIAAkwIVOAAIAAB2ICZAAIAAgxICYBOIiYBHIAAg0IiZAAIAACKg");
	this.shape_14.setTransform(1.3,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.9,-15.8,168.5,32.6);


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


(lib.hl3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(5,0,0,3).p("AyWj1MAktAAAIAAHrMgktAAAg");
	this.shape.setTransform(117.5,24.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,240,54.3);


(lib.hl2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(5,0,0,3).p("AtWsSIatAAIAAYlI6tAAg");
	this.shape.setTransform(85.5,78.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,176,162.5);


(lib.hl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(5,0,0,3).p("AnNmPIObAAIAAMfIubAAg");
	this.shape.setTransform(46.3,40);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,97.5,85);


(lib.B787SynopticAuxDisplayLcopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsAHQAAhaAyAAQANAAALAJQALAJAAANIgRAAQAAgOgSAAQgPAAgLAYQgHASAAAVIAAAGQAPgTASAAQATAAAKAQQAJAMAAAUQAAAUgKAPQgLARgUAAQguAAgBhNgAgSANQgEALAAARQgBAKAJAIQAIAIAJAAQALAAAIgMQAFgLAAgNQAAgMgGgKQgHgJgMAAQgMAAgIANg");
	this.shape.setTransform(135.3,213.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAIBPIAAgPIAbAAIAAAPgAgGBPIAAgPIAOAAIAAAPgAghBPIAAgPIAbAAIAAAPgAgGBAIAAh5IgbAMIAAgSIAbgPIAOAAIAACOgAgGBAg");
	this.shape_1.setTransform(124,213.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAaBPQgJgYgGgNQgJgQgNgPIgQAAIAABEIgTAAIAAidIAqAAQAQAAALAMQAKALAAATQAAAfgbAMQANAIAMAaIAQAmgAgbgEIAQAAQAMAAAIgIQAGgJAAgOQAAgbgYAAIgSAAg");
	this.shape_2.setTransform(105,213.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAoBPIgMgsIg3AAIgPAsIgRAAIA1idIAQAAIAyCdgAgWATIAtAAIgXhFg");
	this.shape_3.setTransform(93.6,213.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAlBPIAAh2IgdBeIgMAAIgghaIAAByIgSAAIAAidIAUAAIAkBsIAhhsIAUAAIAACdg");
	this.shape_4.setTransform(82.2,213.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgqBSIAAgRQAAgUALgQQAGgLAQgPIAVgUQAKgNAAgLQAAgKgHgHQgHgFgJgBQgUABAAARIgRAAIAAgCQAAgOAMgKQALgJAPABQARAAALAKQAMAKAAATQAAATgRASIgeAbQgRASAAAWIBDAAIAAATg");
	this.shape_5.setTransform(63.3,213.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgqBSIAAgRQAAgUAKgQQAHgLARgPIATgUQALgNAAgLQAAgKgHgHQgHgFgJgBQgUABgBARIgRAAIAAgCQAAgOANgKQALgJAPABQARAAALAKQAMAKAAATQAAATgRASIgdAbQgSASAAAWIBDAAIAAATg");
	this.shape_6.setTransform(51.9,213.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgbBPIAAgIQABgfASgmQAHgOAdgwIhIAAIAAgSIBZAAIAAASIgJAOQgsBKAAAzg");
	this.shape_7.setTransform(230.9,213.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgmA1QgKgWAAgfQAAgdAKgXQANgfAZAAQAbAAAMAfQAJAXAAAdQAAAegJAXQgNAfgaAAQgZAAgNgfgAgZgoQgFARAAAXQAAAYAFARQAJAaAQAAQARAAAJgaQAFgSAAgXQAAgWgFgSQgJgagRAAQgQAAgJAag");
	this.shape_8.setTransform(219.5,213.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgKA5IAAgcIAVAAIAAAcgAgKgcIAAgcIAVAAIAAAcg");
	this.shape_9.setTransform(208.1,215.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgmA1QgKgWAAgfQAAgdAKgXQANgfAZAAQAbAAAMAfQAJAXAAAdQAAAegJAXQgNAfgaAAQgZAAgNgfgAgYgoQgGARAAAXQAAAYAGARQAHAaARAAQASAAAHgaQAGgSAAgXQAAgWgGgSQgHgagSAAQgRAAgHAag");
	this.shape_10.setTransform(196.7,213.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgmA1QgKgWAAgfQAAgdAKgXQANgfAZAAQAbAAAMAfQAJAXAAAdQAAAegJAXQgNAfgaAAQgZAAgNgfgAgZgoQgFARAAAXQAAAYAFARQAJAaAQAAQARAAAJgaQAFgSAAgXQAAgWgFgSQgJgagRAAQgQAAgJAag");
	this.shape_11.setTransform(185.3,213.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00CCFF").s().p("AggA7IAAh1IA5AAIAAAOIgsAAIAAAkIAnAAIAAALIgnAAIAAAqIA0AAIAAAOg");
	this.shape_12.setTransform(253.8,192.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00CCFF").s().p("AAbA7IAAhYIgVBGIgJAAIgYhDIAABVIgNAAIAAh1IAPAAIAaBQIAZhQIAPAAIAAB1g");
	this.shape_13.setTransform(245.5,192.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00CCFF").s().p("AgUA7IAAgNIAPAAIAAhbIgPAAIAAgNIApAAIAAANIgPAAIAABbIAPAAIAAANg");
	this.shape_14.setTransform(237.2,192.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00CCFF").s().p("AgFA7IAAhpIgiAAIAAgMIBPAAIAAAMIghAAIAABpg");
	this.shape_15.setTransform(228.9,192.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00CCFF").s().p("AgmA7IAAh1IAcAAQAaAAAMAQQALAOAAAcQAAA7gvAAgAgYAtIAPAAQATAAAHgMQAHgLAAgVQAAgWgGgKQgIgPgTAAIgPAAg");
	this.shape_16.setTransform(212.3,192.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00CCFF").s().p("AghA7IAAh1IA6AAIAAAOIgrAAIAAAkIAlAAIAAALIglAAIAAAqIA0AAIAAAOg");
	this.shape_17.setTransform(204,192.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00CCFF").s().p("AghAgIAOAAQAAAKAFAFQAGADAIAAQAJAAAFgGQAFgGAAgJQABgMgRgIIgNgJQgKgDgEgHQgGgIAAgLQAAgQAJgIQAKgJANAAQALAAAHAHQAIAHAAAMIgOAAQAAgGgFgEQgFgEgEAAQgHAAgEAGQgFAGAAAHQAAANAQAJIAOAIQAJADAFAHQAGAIAAALQAAAQgJAJQgKAKgPAAQghAAAAgfg");
	this.shape_18.setTransform(195.7,192.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00CCFF").s().p("AghA7IAAh1IAhAAQAQAAAIAHQAKAIAAASQAAAXgRAIQgMAGgYAAIAAAvgAgTAAIANAAQAZAAABgZQgBgVgTAAIgTAAg");
	this.shape_19.setTransform(187.4,192.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00CCFF").s().p("AAeA7IgJggIgqAAIgKAgIgNAAIAph1IALAAIAlB1gAgQAOIAhAAIgRgzg");
	this.shape_20.setTransform(179.1,192.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00CCFF").s().p("AghA7IAAh1IAOAAIAABnIA0AAIAAAOg");
	this.shape_21.setTransform(170.8,192.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00CCFF").s().p("AghA7IAAh1IA6AAIAAAOIgrAAIAAAkIAlAAIAAALIglAAIAAAqIA0AAIAAAOg");
	this.shape_22.setTransform(162.5,192.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00CCFF").s().p("AggA7IAAh1IA5AAIAAAOIgsAAIAAAkIAnAAIAAALIgnAAIAAAqIA0AAIAAAOg");
	this.shape_23.setTransform(106.1,192.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00CCFF").s().p("AgFA7IAAhpIgiAAIAAgMIBPAAIAAAMIghAAIAABpg");
	this.shape_24.setTransform(97.8,192.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00CCFF").s().p("AAeA7IgJggIgqAAIgKAgIgNAAIAoh1IAMAAIAlB1gAgQAOIAhAAIgRgzg");
	this.shape_25.setTransform(89.5,192.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00CCFF").s().p("AgmA7IAAh1IAcAAQAbAAALAQQAKAOAAAcQAAA7gtAAgAgYAtIAQAAQARAAAJgMQAGgLAAgVQAAgWgGgKQgIgPgTAAIgPAAg");
	this.shape_26.setTransform(81.2,192.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00CCFF").s().p("AggA7IAAh1IA5AAIAAAOIgsAAIAAAkIAnAAIAAALIgnAAIAAAqIA0AAIAAAOg");
	this.shape_27.setTransform(2.7,192.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00CCFF").s().p("AAbA7IAAhYIgVBGIgJAAIgYhDIAABVIgNAAIAAh1IAPAAIAaBQIAZhQIAPAAIAAB1g");
	this.shape_28.setTransform(-5.6,192.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00CCFF").s().p("AgUA7IAAgNIAPAAIAAhbIgPAAIAAgNIApAAIAAANIgPAAIAABbIAPAAIAAANg");
	this.shape_29.setTransform(-13.9,192.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00CCFF").s().p("AgFA7IAAhpIgiAAIAAgMIBPAAIAAAMIghAAIAABpg");
	this.shape_30.setTransform(-22.2,192.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00CCFF").s().p("AgcAqQgJgRAAgZQAAgYAJgRQAMgVAVAAQAOAAAJAIQAKAIAAAOIgOAAQAAgIgFgFQgFgEgIAAQgPAAgIASQgFANAAASQAAAUAFAMQAHASAQAAQASAAAAgRIAOAAIAAABQAAANgLAIQgIAIgOAAQgVAAgMgVg");
	this.shape_31.setTransform(-38.8,192.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#00CCFF").s().p("AgFA7IAAhpIgiAAIAAgMIBPAAIAAAMIghAAIAABpg");
	this.shape_32.setTransform(-47.1,192.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#00CCFF").s().p("AgdAxQgIgKAAgWIAAhNIANAAIAABLQABAQAEAHQAGAKAOAAQAPAAAFgMQAFgKAAgRIAAhFIAMAAIAABJQAAAwgmAAQgUAAgJgMg");
	this.shape_33.setTransform(-55.4,193);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgpA5IAAgRIA7hPIg6AAIAAgRIBQAAIAAARIg6BPIA8AAIAAARg");
	this.shape_34.setTransform(19.2,215.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgeBMQgLgJAAgSIARAAQABASAWAAQAMAAAHgJQAGgJAAgPQAAgTgOgJQgKgGgWAAIAAgPQAUAAAIgFQANgHAAgRQAAgKgHgGQgGgGgIAAQgJAAgGAEQgHAFABAJIgRAAIAAgBQAAgRAMgJQALgIAQAAQAPAAAMAJQAKAKABARQAAAbgaAMQAfAJAAAgQAAAWgMAOQgNAPgTAAQgSAAgKgIg");
	this.shape_35.setTransform(7.8,213.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgqBSIAAgRQAAgUAKgQQAIgLAQgPIATgUQALgNAAgLQAAgKgHgHQgHgFgIgBQgVABgBARIgQAAIAAgCQAAgOAMgKQALgJAPABQARAAALAKQAMAKAAATQAAATgRASIgeAbQgRASAAAWIBDAAIAAATg");
	this.shape_36.setTransform(-3.6,213.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgKA5IAAgcIAVAAIAAAcgAgKgcIAAgcIAVAAIAAAcg");
	this.shape_37.setTransform(-15,215.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgaBPIAAgIQAAgfASgmQAIgOAcgwIhIAAIAAgSIBZAAIAAASIgJAOQgsBKAAAzg");
	this.shape_38.setTransform(-26.4,213.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAIBPIAAgPIAaAAIAAAPgAgHBPIAAgPIAPAAIAAAPgAgiBPIAAgPIAbAAIAAAPgAgHBAIAAh5IgaAMIAAgSIAbgPIAOAAIAACOgAgHBAg");
	this.shape_39.setTransform(-37.7,213.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgKA5IAAgcIAVAAIAAAcgAgKgcIAAgcIAVAAIAAAcg");
	this.shape_40.setTransform(-49.2,215.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgqBSIAAgRQAAgUAKgQQAHgLARgPIATgUQALgNAAgLQAAgKgHgHQgHgFgJgBQgUABgBARIgRAAIAAgCQAAgOANgKQALgJAPABQARAAALAKQAMAKAAATQAAATgRASIgdAbQgSASAAAWIBDAAIAAATg");
	this.shape_41.setTransform(-60.6,213.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgqBSIAAgRQAAgUAKgQQAIgLAQgPIATgUQALgNAAgLQAAgKgHgHQgHgFgIgBQgVABgBARIgQAAIAAgCQAAgOAMgKQALgJAPABQARAAALAKQAMAKAAATQAAATgRASIgeAbQgRASAAAWIBDAAIAAATg");
	this.shape_42.setTransform(-72,213.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAoBPIgMgsIg4AAIgOAsIgRAAIA1idIAQAAIAyCdgAgWATIAtAAIgXhFg");
	this.shape_43.setTransform(68.6,158.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AguBPIAAidIAkAAQAVAAALAGQAPAKABAZQgBAKgFALQgGAKgIADQAOADAHALQAIAKAAAOQgBAsgwAAgAgcA+IAcAAQAcAAAAgZQAAgRgPgIQgLgGgRgBIgNAAgAgcgJIARAAQALAAAEgCQAGgDAEgIQAFgJAAgHIgDgJIgDgIQgBgDgHgCIgHgCIgaAAg");
	this.shape_44.setTransform(57.2,158.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgaBPIAAgIQAAgfASgmQAIgOAbgwIhHAAIAAgSIBZAAIAAASIgJAOQgsBKAAAzg");
	this.shape_45.setTransform(45.8,158.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgdBMQgMgJAAgSIARAAQAAASAYAAQALAAAHgJQAGgJAAgPQAAgTgPgJQgJgGgWAAIAAgPQAUAAAIgFQANgHAAgRQAAgKgGgGQgHgGgIAAQgJAAgGAEQgIAFABAJIgPAAIAAgBQAAgRALgJQAKgIARAAQAQAAAKAJQALAKAAARQAAAbgaAMQAgAJAAAgQAAAWgMAOQgNAPgTAAQgRAAgKgIg");
	this.shape_46.setTransform(34.4,158.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgbBPIAAgIQABgfASgmQAHgOAdgwIhIAAIAAgSIBZAAIAAASIgJAOQgsBKAAAzg");
	this.shape_47.setTransform(23,158.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAgBPIhAh6IAAB6IgRAAIAAidIASAAIBAB5IAAgKIAAhvIAQAAIAACdg");
	this.shape_48.setTransform(11.6,158.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#00CCFF").s().p("AgBA7IAGgfIgWAAIgHAfIgKAAIAHgfIgMAAIAAgMIAPAAIAHgdIgWAAIAAgMIAYAAIAIghIAIAAIgFAhIAVAAIAIghIAKAAIgIAhIANAAIAAAMIgPAAIgIAdIAXAAIAAAMIgZAAIgHAfgAgOAQIAVAAIAIgdIgWAAg");
	this.shape_49.setTransform(-27.2,160);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#00CCFF").s().p("AghA7IAAh1IAOAAIAABnIA1AAIAAAOg");
	this.shape_50.setTransform(-43.8,160);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#00CCFF").s().p("AgVA7IAAgNIAQAAIAAhbIgQAAIAAgNIAqAAIAAANIgPAAIAABbIAPAAIAAANg");
	this.shape_51.setTransform(-52.1,160);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#00CCFF").s().p("AAeA7IgJggIgpAAIgLAgIgNAAIAph1IALAAIAlB1gAgQAOIAhAAIgRgzg");
	this.shape_52.setTransform(-60.4,160);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#00CCFF").s().p("AgFA7IAAhpIgiAAIAAgMIBPAAIAAAMIghAAIAABpg");
	this.shape_53.setTransform(-68.7,160);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAIBPIAAgQIgOAAIAAh4IgbAMIAAgSIAbgPIAOAAIAACNIAbAAIAAAQgAgGBPIAAgQIAOAAIAAAQgAghBPIAAgQIAbAAIAAAQgAgGA/g");
	this.shape_54.setTransform(57.3,128.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgmA1QgKgWAAgfQAAgdAKgXQANgfAZAAQAbAAAMAfQAJAXAAAdQAAAegJAXQgNAfgaAAQgZAAgNgfgAgYgoQgGARAAAXQAAAYAGARQAIAaAQAAQARAAAJgaQAFgSAAgXQAAgWgFgSQgJgagRAAQgQAAgIAag");
	this.shape_55.setTransform(45.8,128.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgaAIIAAgOIA0AAIAAAOg");
	this.shape_56.setTransform(34.4,130.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAoBPIgLgsIg5AAIgNAsIgSAAIA2idIAQAAIAxCdgAgWASIAtAAIgWhFg");
	this.shape_57.setTransform(23,128.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgtBPIAAidIAkAAQAVAAAKAGQAQAKgBAaQAAAKgFAKQgFAKgJAEQANACAIAKQAHALAAAOQABAsgxAAgAgbA+IAbAAQAbABAAgaQAAgRgOgIQgMgGgQAAIgMAAgAgbgJIAQAAQALAAAEgCQAGgDAFgJQAEgIgBgGIgBgJQgCgHgCgCQgBgDgGgCIgIgCIgZAAg");
	this.shape_58.setTransform(11.6,128.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#00CCFF").s().p("AghA7IAAh1IAOAAIAABnIA0AAIAAAOg");
	this.shape_59.setTransform(-27.2,130);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#00CCFF").s().p("AAeA7IgJggIgpAAIgLAgIgNAAIAoh1IAMAAIAlB1gAgQAOIAhAAIgRgzg");
	this.shape_60.setTransform(-35.5,130);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#00CCFF").s().p("AgbAqQgJgRAAgZQAAgYAJgRQAKgVAWAAQAOAAAJAIQAJAIAAAOIgMAAQAAgIgGgFQgFgEgIAAQgPAAgHASQgGANAAASQAAAUAGAMQAGASAQAAQASAAABgRIAMAAIAAABQABANgKAIQgKAIgNAAQgWAAgKgVg");
	this.shape_61.setTransform(-43.8,130);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#00CCFF").s().p("AggA7IAAh1IANAAIAABnIA0AAIAAAOg");
	this.shape_62.setTransform(-52.1,130);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#00CCFF").s().p("AggA7IAAh1IA5AAIAAAOIgsAAIAAAkIAnAAIAAALIgnAAIAAAqIA0AAIAAAOg");
	this.shape_63.setTransform(-60.4,130);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#00CCFF").s().p("AghAgIAOAAQAAAKAFAFQAGADAIAAQAIAAAGgGQAGgGgBgJQAAgMgPgIIgOgJQgKgDgEgHQgGgIAAgLQAAgQAKgIQAIgJAOAAQALAAAHAHQAIAHAAAMIgOAAQAAgGgFgEQgFgEgEAAQgGAAgFAGQgFAGAAAHQAAANAQAJIAOAIQAJADAFAHQAGAIAAALQAAAQgJAJQgKAKgPAAQggAAgBgfg");
	this.shape_64.setTransform(-68.7,130);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgaBPIAAgHQAAghASglQAIgOAbgwIhHAAIAAgSIBZAAIAAASIgJAPQgsBJAAAzg");
	this.shape_65.setTransform(45.8,98.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgdBMQgMgJAAgSIARAAQAAASAYAAQALAAAHgJQAGgJAAgPQAAgTgPgJQgJgGgWAAIAAgPQAUAAAIgFQANgHAAgRQAAgKgGgGQgHgGgIAAQgJAAgGAEQgIAFABAJIgPAAIAAgBQAAgRALgJQAKgIARAAQAQAAAKAJQALAKAAARQAAAbgaAMQAgAJAAAgQAAAWgMAOQgNAPgTAAQgRAAgKgIg");
	this.shape_66.setTransform(34.4,98.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgbBPIAAgHQABghASglQAHgOAdgwIhIAAIAAgSIBZAAIAAASIgJAPQgsBJAAAzg");
	this.shape_67.setTransform(23,98.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgmA1QgKgWAAgfQAAgdAKgXQANgfAZAAQAbAAAMAfQAJAXAAAdQAAAegJAXQgNAfgaAAQgZAAgNgfgAgYgoQgGARAAAXQAAAYAGARQAIAaAQAAQARAAAJgaQAFgSAAgXQAAgWgFgSQgJgagRAAQgQAAgIAag");
	this.shape_68.setTransform(11.6,98.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#00CCFF").s().p("AATA7QgGgRgFgKQgHgMgIgMIgNAAIAAAzIgNAAIAAh1IAeAAQAMAAAIAJQAIAJAAANQgBAYgTAJQAJAFAJATIAMAdgAgUgCIANAAQAIAAAFgHQAFgGAAgLQAAgUgRAAIgOAAg");
	this.shape_69.setTransform(-43.8,100);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#00CCFF").s().p("AgmA7IAAh1IAcAAQAaAAAMAQQALAOAAAcQgBA7gtAAgAgYAtIAPAAQATAAAIgMQAGgLAAgVQAAgWgGgKQgIgPgTAAIgPAAg");
	this.shape_70.setTransform(-52.1,100);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#00CCFF").s().p("AghA7IAAh1IAhAAQAQAAAIAHQAKAIAAASQAAAXgRAIQgNAGgXAAIAAAvgAgTAAIANAAQAaAAAAgZQAAgVgUAAIgTAAg");
	this.shape_71.setTransform(-60.4,100);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#00CCFF").s().p("AAaA7IgagvIgZAvIgOAAIAhg7Igeg6IAPAAIAVAsIAXgsIAOAAIgeA5IAiA8g");
	this.shape_72.setTransform(-68.7,100);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AAjBPIgjg/IgiA/IgUAAIAuhPIgohOIATAAIAdA7IAfg7IATAAIgpBNIAtBQg");
	this.shape_73.setTransform(68.6,38.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AAoBPIgLgsIg5AAIgNAsIgSAAIA2idIAQAAIAxCdgAgWASIAtAAIgWhFg");
	this.shape_74.setTransform(57.2,38.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AAlBPIAAh2IgdBeIgNAAIgfhaIAAByIgSAAIAAidIAUAAIAjBrIAihrIAUAAIAACdg");
	this.shape_75.setTransform(45.8,38.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgbBPIAAgIQAAgfATgmQAHgOAcgwIhHAAIAAgSIBZAAIAAARIgJAQQgsBJAAAzg");
	this.shape_76.setTransform(34.4,38.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgeBMQgLgJAAgSIARAAQABASAWAAQAMAAAHgJQAGgJAAgPQAAgTgOgJQgKgGgWAAIAAgPQAUAAAIgFQANgHAAgRQAAgKgHgGQgGgGgIAAQgJAAgGAEQgIAFACAJIgRAAIAAgBQAAgRAMgJQALgIAQAAQAQAAAKAJQAMAKAAARQAAAbgaAMQAfAJAAAgQAAAWgMAOQgNAPgTAAQgSAAgKgIg");
	this.shape_77.setTransform(23,38.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgaBPIAAgIQAAgfASgmQAIgOAbgwIhHAAIAAgSIBZAAIAAARIgJAQQgsBJAAAzg");
	this.shape_78.setTransform(11.6,38.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#00CCFF").s().p("AAAA7IAFgfIgWAAIgHAfIgKAAIAHgfIgMAAIAAgMIAPAAIAHgdIgWAAIAAgMIAYAAIAIghIAIAAIgFAhIAVAAIAIghIAKAAIgIAhIANAAIAAAMIgPAAIgIAdIAXAAIAAAMIgZAAIgHAfgAgOAQIAWAAIAHgdIgWAAg");
	this.shape_79.setTransform(-35.5,40);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#00CCFF").s().p("AgFA7IAAhpIgiAAIAAgMIBPAAIAAAMIgiAAIAABpg");
	this.shape_80.setTransform(-52.1,40);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#00CCFF").s().p("AggA7IAAh1IANAAIAABnIA0AAIAAAOg");
	this.shape_81.setTransform(-60.4,40);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#00CCFF").s().p("AgcA7IAAh1IA5AAIAAAOIgsAAIAAAoIAnAAIAAAKIgnAAIAAA1g");
	this.shape_82.setTransform(-68.7,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Line Work
	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#FFFFFF").ss(2,2,0,3).p("A7S31MA2lAAAAbTX2Mg2lAAAA7SoSMA2lAAAAbTQfMg2lAAA");
	this.shape_83.setTransform(91.4,74.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#5E5D66").s().p("A7fX+IAAxBIAAvcIAAveMA2/AAAMAAAAv7gAbTX2Mg2lAAAgAbTQfMg2lAAAgAbToSMg2lAAAgAbT31Mg2lAAAg");
	this.shape_84.setTransform(91.4,74.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_84},{t:this.shape_83}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.7,-79,352.1,309.7);


(lib.B787SynopticAuxDisplayLcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcBPIAAgSIAUAAIAAh6IgUAAIAAgRIA5AAIAAARIgVAAIAAB6IAVAAIAAASg");
	this.shape.setTransform(232.3,-32.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcBPIAAgSIAUAAIAAh6IgUAAIAAgRIA5AAIAAARIgVAAIAAB6IAVAAIAAASg");
	this.shape_1.setTransform(220.9,-32.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcBPIAAgSIAVAAIAAh6IgVAAIAAgRIA5AAIAAARIgUAAIAAB6IAUAAIAAASg");
	this.shape_2.setTransform(209.5,-32.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgIBPIAAiNIgtAAIAAgQIBqAAIAAAQIgsAAIAACNg");
	this.shape_3.setTransform(186.7,-32.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAoBPIgMgsIg3AAIgPAsIgRAAIA1idIAQAAIAyCdgAgWASIAtAAIgWhFg");
	this.shape_4.setTransform(175.3,-32.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AglA4QgMgWAAgiQAAghAMgWQAPgcAdAAQATAAALAKQANALAAATIgRAAQAAgLgHgGQgHgGgLAAQgVAAgKAYQgHARAAAZQAAAbAHAQQAKAYAVAAQAYAAABgXIARAAIAAACQAAARgNALQgMAKgSAAQgdAAgPgcg");
	this.shape_5.setTransform(163.9,-32.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00CCFF").s().p("AgFA7IAAgLIAAgSIAAgbIgRgcIgSghIAPAAIAZAwIAbgwIAOAAIgSAhIgRAcIAAAbIAAAdg");
	this.shape_6.setTransform(252.1,-55.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00CCFF").s().p("AgFA7IAAhpIgiAAIAAgMIBPAAIAAAMIgiAAIAABpg");
	this.shape_7.setTransform(243.8,-55.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00CCFF").s().p("AgUA7IAAgNIAPAAIAAhbIgPAAIAAgNIAqAAIAAANIgQAAIAABbIAQAAIAAANg");
	this.shape_8.setTransform(235.5,-55.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00CCFF").s().p("AghA7IAAh1IAOAAIAABnIA1AAIAAAOg");
	this.shape_9.setTransform(227.2,-55.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00CCFF").s().p("AgVA7IAAgNIAQAAIAAhbIgQAAIAAgNIAqAAIAAANIgPAAIAABbIAPAAIAAANg");
	this.shape_10.setTransform(218.9,-55.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00CCFF").s().p("AghA7IAAh1IAaAAQAQAAAHAFQAMAHAAATQAAAIgEAHQgEAIgHADQALABAFAIQAGAIgBAKQAAAhgjAAgAgUAvIAUAAQAVAAAAgTQgBgNgKgGQgJgFgMAAIgJAAgAgUgGIAMAAQAIAAADgCQAEgCAEgGQACgHAAgFIAAgGIgDgHQgBgCgFgCIgFgBIgTAAg");
	this.shape_11.setTransform(210.6,-55.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00CCFF").s().p("AAeA7IgJggIgpAAIgLAgIgNAAIAph1IALAAIAlB1gAgQAOIAhAAIgRgzg");
	this.shape_12.setTransform(202.3,-55.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00CCFF").s().p("AghA7IAAh1IAhAAQAQAAAJAHQAJAIAAASQAAAXgRAIQgMAGgYAAIAAAvgAgTAAIANAAQAaAAgBgZQAAgVgTAAIgTAAg");
	this.shape_13.setTransform(194,-55.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00CCFF").s().p("AAeA7IgJggIgqAAIgKAgIgNAAIAoh1IAMAAIAlB1gAgQAOIAhAAIgRgzg");
	this.shape_14.setTransform(185.7,-55.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00CCFF").s().p("AgcAqQgIgRgBgZQABgYAIgRQALgVAWAAQAOAAAJAIQAKAIAAAOIgOAAQABgIgGgFQgFgEgIAAQgPAAgHASQgGANAAASQAAAUAGAMQAGASAQAAQASAAAAgRIAOAAIAAABQgBANgJAIQgJAIgOAAQgWAAgLgVg");
	this.shape_15.setTransform(177.4,-55.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00CCFF").s().p("AghAgIAOAAQAAAKAFAFQAGADAIAAQAIAAAGgGQAGgGgBgJQAAgMgPgIIgOgJQgKgDgEgHQgGgIAAgLQAAgQAKgIQAIgJAOAAQALAAAHAHQAIAHAAAMIgOAAQAAgGgFgEQgFgEgEAAQgGAAgFAGQgFAGAAAHQAAANAQAJIAOAIQAJADAFAHQAGAIAAALQAAAQgJAJQgKAKgPAAQggAAgBgfg");
	this.shape_16.setTransform(160.8,-55.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00CCFF").s().p("AgbArQgJgQAAgaQgBgYAJgRQALgWAWAAQANAAAJAIQAKAIAAANIgMAAQgBgIgGgEQgFgEgIAAQgPAAgGASQgGANAAASQAAATAGANQAGASAQAAQAHAAAMgEIAAgiIgXAAIAAgMIAjAAIAAA2QgPAJgPAAQgXAAgLgUg");
	this.shape_17.setTransform(152.5,-55.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00CCFF").s().p("AAWA7IAAg2IgrAAIAAA2IgOAAIAAh1IAOAAIAAA1IArAAIAAg1IAOAAIAAB1g");
	this.shape_18.setTransform(144.2,-55.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgsAHQAAhaAyAAQANAAALAJQALAJAAANIgRAAQAAgOgSAAQgPAAgLAYQgHASAAAVIAAAGQAPgTASAAQATAAAKAQQAJAMAAAUQAAAUgKAPQgLARgUAAQguAAgBhNgAgSANQgEALAAARQgBAKAJAIQAIAIAJAAQALAAAIgMQAFgLAAgNQAAgMgGgKQgHgJgMAAQgMAAgIANg");
	this.shape_19.setTransform(135.3,213.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAIBPIAAgPIAbAAIAAAPgAgGBPIAAgPIAOAAIAAAPgAghBPIAAgPIAbAAIAAAPgAgGBAIAAh5IgbAMIAAgSIAbgPIAOAAIAACOgAgGBAg");
	this.shape_20.setTransform(124,213.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAaBPQgJgYgGgNQgJgQgNgPIgQAAIAABEIgTAAIAAidIAqAAQAQAAALAMQAKALAAATQAAAfgbAMQANAIAMAaIAQAmgAgbgEIAQAAQAMAAAIgIQAGgJAAgOQAAgbgYAAIgSAAg");
	this.shape_21.setTransform(105,213.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAoBPIgMgsIg3AAIgPAsIgRAAIA1idIAQAAIAyCdgAgWATIAtAAIgXhFg");
	this.shape_22.setTransform(93.6,213.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAlBPIAAh2IgdBeIgMAAIgghaIAAByIgSAAIAAidIAUAAIAkBsIAhhsIAUAAIAACdg");
	this.shape_23.setTransform(82.2,213.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgqBSIAAgRQAAgUALgQQAGgLAQgPIAVgUQAKgNAAgLQAAgKgHgHQgHgFgJgBQgUABAAARIgRAAIAAgCQAAgOAMgKQALgJAPABQARAAALAKQAMAKAAATQAAATgRASIgeAbQgRASAAAWIBDAAIAAATg");
	this.shape_24.setTransform(63.3,213.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgqBSIAAgRQAAgUAKgQQAHgLARgPIATgUQALgNAAgLQAAgKgHgHQgHgFgJgBQgUABgBARIgRAAIAAgCQAAgOANgKQALgJAPABQARAAALAKQAMAKAAATQAAATgRASIgdAbQgSASAAAWIBDAAIAAATg");
	this.shape_25.setTransform(51.9,213.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgbBPIAAgIQABgfASgmQAHgOAdgwIhIAAIAAgSIBZAAIAAASIgJAOQgsBKAAAzg");
	this.shape_26.setTransform(230.9,213.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgmA1QgKgWAAgfQAAgdAKgXQANgfAZAAQAbAAAMAfQAJAXAAAdQAAAegJAXQgNAfgaAAQgZAAgNgfgAgZgoQgFARAAAXQAAAYAFARQAJAaAQAAQARAAAJgaQAFgSAAgXQAAgWgFgSQgJgagRAAQgQAAgJAag");
	this.shape_27.setTransform(219.5,213.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgKA5IAAgcIAVAAIAAAcgAgKgcIAAgcIAVAAIAAAcg");
	this.shape_28.setTransform(208.1,215.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgmA1QgKgWAAgfQAAgdAKgXQANgfAZAAQAbAAAMAfQAJAXAAAdQAAAegJAXQgNAfgaAAQgZAAgNgfgAgYgoQgGARAAAXQAAAYAGARQAHAaARAAQASAAAHgaQAGgSAAgXQAAgWgGgSQgHgagSAAQgRAAgHAag");
	this.shape_29.setTransform(196.7,213.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgmA1QgKgWAAgfQAAgdAKgXQANgfAZAAQAbAAAMAfQAJAXAAAdQAAAegJAXQgNAfgaAAQgZAAgNgfgAgZgoQgFARAAAXQAAAYAFARQAJAaAQAAQARAAAJgaQAFgSAAgXQAAgWgFgSQgJgagRAAQgQAAgJAag");
	this.shape_30.setTransform(185.3,213.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00CCFF").s().p("AggA7IAAh1IA5AAIAAAOIgsAAIAAAkIAnAAIAAALIgnAAIAAAqIA0AAIAAAOg");
	this.shape_31.setTransform(253.8,192.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#00CCFF").s().p("AAbA7IAAhYIgVBGIgJAAIgYhDIAABVIgNAAIAAh1IAPAAIAaBQIAZhQIAPAAIAAB1g");
	this.shape_32.setTransform(245.5,192.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#00CCFF").s().p("AgUA7IAAgNIAPAAIAAhbIgPAAIAAgNIApAAIAAANIgPAAIAABbIAPAAIAAANg");
	this.shape_33.setTransform(237.2,192.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#00CCFF").s().p("AgFA7IAAhpIgiAAIAAgMIBPAAIAAAMIghAAIAABpg");
	this.shape_34.setTransform(228.9,192.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#00CCFF").s().p("AgmA7IAAh1IAcAAQAaAAAMAQQALAOAAAcQAAA7gvAAgAgYAtIAPAAQATAAAHgMQAHgLAAgVQAAgWgGgKQgIgPgTAAIgPAAg");
	this.shape_35.setTransform(212.3,192.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#00CCFF").s().p("AghA7IAAh1IA6AAIAAAOIgrAAIAAAkIAlAAIAAALIglAAIAAAqIA0AAIAAAOg");
	this.shape_36.setTransform(204,192.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#00CCFF").s().p("AghAgIAOAAQAAAKAFAFQAGADAIAAQAJAAAFgGQAFgGAAgJQABgMgRgIIgNgJQgKgDgEgHQgGgIAAgLQAAgQAJgIQAKgJANAAQALAAAHAHQAIAHAAAMIgOAAQAAgGgFgEQgFgEgEAAQgHAAgEAGQgFAGAAAHQAAANAQAJIAOAIQAJADAFAHQAGAIAAALQAAAQgJAJQgKAKgPAAQghAAAAgfg");
	this.shape_37.setTransform(195.7,192.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#00CCFF").s().p("AghA7IAAh1IAhAAQAQAAAIAHQAKAIAAASQAAAXgRAIQgMAGgYAAIAAAvgAgTAAIANAAQAZAAABgZQgBgVgTAAIgTAAg");
	this.shape_38.setTransform(187.4,192.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#00CCFF").s().p("AAeA7IgJggIgqAAIgKAgIgNAAIAph1IALAAIAlB1gAgQAOIAhAAIgRgzg");
	this.shape_39.setTransform(179.1,192.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#00CCFF").s().p("AghA7IAAh1IAOAAIAABnIA0AAIAAAOg");
	this.shape_40.setTransform(170.8,192.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#00CCFF").s().p("AghA7IAAh1IA6AAIAAAOIgrAAIAAAkIAlAAIAAALIglAAIAAAqIA0AAIAAAOg");
	this.shape_41.setTransform(162.5,192.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#00CCFF").s().p("AggA7IAAh1IA5AAIAAAOIgsAAIAAAkIAnAAIAAALIgnAAIAAAqIA0AAIAAAOg");
	this.shape_42.setTransform(106.1,192.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#00CCFF").s().p("AgFA7IAAhpIgiAAIAAgMIBPAAIAAAMIghAAIAABpg");
	this.shape_43.setTransform(97.8,192.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#00CCFF").s().p("AAeA7IgJggIgqAAIgKAgIgNAAIAoh1IAMAAIAlB1gAgQAOIAhAAIgRgzg");
	this.shape_44.setTransform(89.5,192.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#00CCFF").s().p("AgmA7IAAh1IAcAAQAbAAALAQQAKAOAAAcQAAA7gtAAgAgYAtIAQAAQARAAAJgMQAGgLAAgVQAAgWgGgKQgIgPgTAAIgPAAg");
	this.shape_45.setTransform(81.2,192.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#00CCFF").s().p("AggA7IAAh1IA5AAIAAAOIgsAAIAAAkIAnAAIAAALIgnAAIAAAqIA0AAIAAAOg");
	this.shape_46.setTransform(2.7,192.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#00CCFF").s().p("AAbA7IAAhYIgVBGIgJAAIgYhDIAABVIgNAAIAAh1IAPAAIAaBQIAZhQIAPAAIAAB1g");
	this.shape_47.setTransform(-5.6,192.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#00CCFF").s().p("AgUA7IAAgNIAPAAIAAhbIgPAAIAAgNIApAAIAAANIgPAAIAABbIAPAAIAAANg");
	this.shape_48.setTransform(-13.9,192.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#00CCFF").s().p("AgFA7IAAhpIgiAAIAAgMIBPAAIAAAMIghAAIAABpg");
	this.shape_49.setTransform(-22.2,192.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#00CCFF").s().p("AgcAqQgJgRAAgZQAAgYAJgRQAMgVAVAAQAOAAAJAIQAKAIAAAOIgOAAQAAgIgFgFQgFgEgIAAQgPAAgIASQgFANAAASQAAAUAFAMQAHASAQAAQASAAAAgRIAOAAIAAABQAAANgLAIQgIAIgOAAQgVAAgMgVg");
	this.shape_50.setTransform(-38.8,192.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#00CCFF").s().p("AgFA7IAAhpIgiAAIAAgMIBPAAIAAAMIghAAIAABpg");
	this.shape_51.setTransform(-47.1,192.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#00CCFF").s().p("AgdAxQgIgKAAgWIAAhNIANAAIAABLQABAQAEAHQAGAKAOAAQAPAAAFgMQAFgKAAgRIAAhFIAMAAIAABJQAAAwgmAAQgUAAgJgMg");
	this.shape_52.setTransform(-55.4,193);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgpA5IAAgRIA7hPIg6AAIAAgRIBQAAIAAARIg6BPIA8AAIAAARg");
	this.shape_53.setTransform(19.2,215.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgeBMQgLgJAAgSIARAAQABASAWAAQAMAAAHgJQAGgJAAgPQAAgTgOgJQgKgGgWAAIAAgPQAUAAAIgFQANgHAAgRQAAgKgHgGQgGgGgIAAQgJAAgGAEQgHAFABAJIgRAAIAAgBQAAgRAMgJQALgIAQAAQAPAAAMAJQAKAKABARQAAAbgaAMQAfAJAAAgQAAAWgMAOQgNAPgTAAQgSAAgKgIg");
	this.shape_54.setTransform(7.8,213.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgqBSIAAgRQAAgUAKgQQAIgLAQgPIATgUQALgNAAgLQAAgKgHgHQgHgFgIgBQgVABgBARIgQAAIAAgCQAAgOAMgKQALgJAPABQARAAALAKQAMAKAAATQAAATgRASIgeAbQgRASAAAWIBDAAIAAATg");
	this.shape_55.setTransform(-3.6,213.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgKA5IAAgcIAVAAIAAAcgAgKgcIAAgcIAVAAIAAAcg");
	this.shape_56.setTransform(-15,215.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgaBPIAAgIQAAgfASgmQAIgOAcgwIhIAAIAAgSIBZAAIAAASIgJAOQgsBKAAAzg");
	this.shape_57.setTransform(-26.4,213.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAIBPIAAgPIAaAAIAAAPgAgHBPIAAgPIAPAAIAAAPgAgiBPIAAgPIAbAAIAAAPgAgHBAIAAh5IgaAMIAAgSIAbgPIAOAAIAACOgAgHBAg");
	this.shape_58.setTransform(-37.7,213.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgKA5IAAgcIAVAAIAAAcgAgKgcIAAgcIAVAAIAAAcg");
	this.shape_59.setTransform(-49.2,215.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgqBSIAAgRQAAgUAKgQQAHgLARgPIATgUQALgNAAgLQAAgKgHgHQgHgFgJgBQgUABgBARIgRAAIAAgCQAAgOANgKQALgJAPABQARAAALAKQAMAKAAATQAAATgRASIgdAbQgSASAAAWIBDAAIAAATg");
	this.shape_60.setTransform(-60.6,213.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgqBSIAAgRQAAgUAKgQQAIgLAQgPIATgUQALgNAAgLQAAgKgHgHQgHgFgIgBQgVABgBARIgQAAIAAgCQAAgOAMgKQALgJAPABQARAAALAKQAMAKAAATQAAATgRASIgeAbQgRASAAAWIBDAAIAAATg");
	this.shape_61.setTransform(-72,213.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAoBPIgMgsIg4AAIgOAsIgRAAIA1idIAQAAIAyCdgAgWATIAtAAIgXhFg");
	this.shape_62.setTransform(68.6,158.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AguBPIAAidIAkAAQAVAAALAGQAPAKABAZQgBAKgFALQgGAKgIADQAOADAHALQAIAKAAAOQgBAsgwAAgAgcA+IAcAAQAcAAAAgZQAAgRgPgIQgLgGgRgBIgNAAgAgcgJIARAAQALAAAEgCQAGgDAEgIQAFgJAAgHIgDgJIgDgIQgBgDgHgCIgHgCIgaAAg");
	this.shape_63.setTransform(57.2,158.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgaBPIAAgIQAAgfASgmQAIgOAbgwIhHAAIAAgSIBZAAIAAASIgJAOQgsBKAAAzg");
	this.shape_64.setTransform(45.8,158.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgdBMQgMgJAAgSIARAAQAAASAYAAQALAAAHgJQAGgJAAgPQAAgTgPgJQgJgGgWAAIAAgPQAUAAAIgFQANgHAAgRQAAgKgGgGQgHgGgIAAQgJAAgGAEQgIAFABAJIgPAAIAAgBQAAgRALgJQAKgIARAAQAQAAAKAJQALAKAAARQAAAbgaAMQAgAJAAAgQAAAWgMAOQgNAPgTAAQgRAAgKgIg");
	this.shape_65.setTransform(34.4,158.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgbBPIAAgIQABgfASgmQAHgOAdgwIhIAAIAAgSIBZAAIAAASIgJAOQgsBKAAAzg");
	this.shape_66.setTransform(23,158.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AAgBPIhAh6IAAB6IgRAAIAAidIASAAIBAB5IAAgKIAAhvIAQAAIAACdg");
	this.shape_67.setTransform(11.6,158.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#00CCFF").s().p("AgBA7IAGgfIgWAAIgHAfIgKAAIAHgfIgMAAIAAgMIAPAAIAHgdIgWAAIAAgMIAYAAIAIghIAIAAIgFAhIAVAAIAIghIAKAAIgIAhIANAAIAAAMIgPAAIgIAdIAXAAIAAAMIgZAAIgHAfgAgOAQIAVAAIAIgdIgWAAg");
	this.shape_68.setTransform(-27.2,160);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#00CCFF").s().p("AghA7IAAh1IAOAAIAABnIA1AAIAAAOg");
	this.shape_69.setTransform(-43.8,160);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#00CCFF").s().p("AgVA7IAAgNIAQAAIAAhbIgQAAIAAgNIAqAAIAAANIgPAAIAABbIAPAAIAAANg");
	this.shape_70.setTransform(-52.1,160);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#00CCFF").s().p("AAeA7IgJggIgpAAIgLAgIgNAAIAph1IALAAIAlB1gAgQAOIAhAAIgRgzg");
	this.shape_71.setTransform(-60.4,160);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#00CCFF").s().p("AgFA7IAAhpIgiAAIAAgMIBPAAIAAAMIghAAIAABpg");
	this.shape_72.setTransform(-68.7,160);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AAIBPIAAgQIgOAAIAAh4IgbAMIAAgSIAbgPIAOAAIAACNIAbAAIAAAQgAgGBPIAAgQIAOAAIAAAQgAghBPIAAgQIAbAAIAAAQgAgGA/g");
	this.shape_73.setTransform(57.3,128.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgmA1QgKgWAAgfQAAgdAKgXQANgfAZAAQAbAAAMAfQAJAXAAAdQAAAegJAXQgNAfgaAAQgZAAgNgfgAgYgoQgGARAAAXQAAAYAGARQAIAaAQAAQARAAAJgaQAFgSAAgXQAAgWgFgSQgJgagRAAQgQAAgIAag");
	this.shape_74.setTransform(45.8,128.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgaAIIAAgOIA0AAIAAAOg");
	this.shape_75.setTransform(34.4,130.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AAoBPIgLgsIg5AAIgNAsIgSAAIA2idIAQAAIAxCdgAgWASIAtAAIgWhFg");
	this.shape_76.setTransform(23,128.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgtBPIAAidIAkAAQAVAAAKAGQAQAKgBAaQAAAKgFAKQgFAKgJAEQANACAIAKQAHALAAAOQABAsgxAAgAgbA+IAbAAQAbABAAgaQAAgRgOgIQgMgGgQAAIgMAAgAgbgJIAQAAQALAAAEgCQAGgDAFgJQAEgIgBgGIgBgJQgCgHgCgCQgBgDgGgCIgIgCIgZAAg");
	this.shape_77.setTransform(11.6,128.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#00CCFF").s().p("AghA7IAAh1IAOAAIAABnIA0AAIAAAOg");
	this.shape_78.setTransform(-27.2,130);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#00CCFF").s().p("AAeA7IgJggIgpAAIgLAgIgNAAIAoh1IAMAAIAlB1gAgQAOIAhAAIgRgzg");
	this.shape_79.setTransform(-35.5,130);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#00CCFF").s().p("AgbAqQgJgRAAgZQAAgYAJgRQAKgVAWAAQAOAAAJAIQAJAIAAAOIgMAAQAAgIgGgFQgFgEgIAAQgPAAgHASQgGANAAASQAAAUAGAMQAGASAQAAQASAAABgRIAMAAIAAABQABANgKAIQgKAIgNAAQgWAAgKgVg");
	this.shape_80.setTransform(-43.8,130);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#00CCFF").s().p("AggA7IAAh1IANAAIAABnIA0AAIAAAOg");
	this.shape_81.setTransform(-52.1,130);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#00CCFF").s().p("AggA7IAAh1IA5AAIAAAOIgsAAIAAAkIAnAAIAAALIgnAAIAAAqIA0AAIAAAOg");
	this.shape_82.setTransform(-60.4,130);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#00CCFF").s().p("AghAgIAOAAQAAAKAFAFQAGADAIAAQAIAAAGgGQAGgGgBgJQAAgMgPgIIgOgJQgKgDgEgHQgGgIAAgLQAAgQAKgIQAIgJAOAAQALAAAHAHQAIAHAAAMIgOAAQAAgGgFgEQgFgEgEAAQgGAAgFAGQgFAGAAAHQAAANAQAJIAOAIQAJADAFAHQAGAIAAALQAAAQgJAJQgKAKgPAAQggAAgBgfg");
	this.shape_83.setTransform(-68.7,130);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgaBPIAAgHQAAghASglQAIgOAbgwIhHAAIAAgSIBZAAIAAASIgJAPQgsBJAAAzg");
	this.shape_84.setTransform(45.8,98.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgdBMQgMgJAAgSIARAAQAAASAYAAQALAAAHgJQAGgJAAgPQAAgTgPgJQgJgGgWAAIAAgPQAUAAAIgFQANgHAAgRQAAgKgGgGQgHgGgIAAQgJAAgGAEQgIAFABAJIgPAAIAAgBQAAgRALgJQAKgIARAAQAQAAAKAJQALAKAAARQAAAbgaAMQAgAJAAAgQAAAWgMAOQgNAPgTAAQgRAAgKgIg");
	this.shape_85.setTransform(34.4,98.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgbBPIAAgHQABghASglQAHgOAdgwIhIAAIAAgSIBZAAIAAASIgJAPQgsBJAAAzg");
	this.shape_86.setTransform(23,98.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgmA1QgKgWAAgfQAAgdAKgXQANgfAZAAQAbAAAMAfQAJAXAAAdQAAAegJAXQgNAfgaAAQgZAAgNgfgAgYgoQgGARAAAXQAAAYAGARQAIAaAQAAQARAAAJgaQAFgSAAgXQAAgWgFgSQgJgagRAAQgQAAgIAag");
	this.shape_87.setTransform(11.6,98.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#00CCFF").s().p("AATA7QgGgRgFgKQgHgMgIgMIgNAAIAAAzIgNAAIAAh1IAeAAQAMAAAIAJQAIAJAAANQgBAYgTAJQAJAFAJATIAMAdgAgUgCIANAAQAIAAAFgHQAFgGAAgLQAAgUgRAAIgOAAg");
	this.shape_88.setTransform(-43.8,100);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#00CCFF").s().p("AgmA7IAAh1IAcAAQAaAAAMAQQALAOAAAcQgBA7gtAAgAgYAtIAPAAQATAAAIgMQAGgLAAgVQAAgWgGgKQgIgPgTAAIgPAAg");
	this.shape_89.setTransform(-52.1,100);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#00CCFF").s().p("AghA7IAAh1IAhAAQAQAAAIAHQAKAIAAASQAAAXgRAIQgNAGgXAAIAAAvgAgTAAIANAAQAaAAAAgZQAAgVgUAAIgTAAg");
	this.shape_90.setTransform(-60.4,100);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#00CCFF").s().p("AAaA7IgagvIgZAvIgOAAIAhg7Igeg6IAPAAIAVAsIAXgsIAOAAIgeA5IAiA8g");
	this.shape_91.setTransform(-68.7,100);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AAjBPIgjg/IgiA/IgUAAIAuhPIgohOIATAAIAdA7IAfg7IATAAIgpBNIAtBQg");
	this.shape_92.setTransform(68.6,38.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AAoBPIgLgsIg5AAIgNAsIgSAAIA2idIAQAAIAxCdgAgWASIAtAAIgWhFg");
	this.shape_93.setTransform(57.2,38.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AAlBPIAAh2IgdBeIgNAAIgfhaIAAByIgSAAIAAidIAUAAIAjBrIAihrIAUAAIAACdg");
	this.shape_94.setTransform(45.8,38.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgbBPIAAgIQAAgfATgmQAHgOAcgwIhHAAIAAgSIBZAAIAAARIgJAQQgsBJAAAzg");
	this.shape_95.setTransform(34.4,38.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgeBMQgLgJAAgSIARAAQABASAWAAQAMAAAHgJQAGgJAAgPQAAgTgOgJQgKgGgWAAIAAgPQAUAAAIgFQANgHAAgRQAAgKgHgGQgGgGgIAAQgJAAgGAEQgIAFACAJIgRAAIAAgBQAAgRAMgJQALgIAQAAQAQAAAKAJQAMAKAAARQAAAbgaAMQAfAJAAAgQAAAWgMAOQgNAPgTAAQgSAAgKgIg");
	this.shape_96.setTransform(23,38.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgaBPIAAgIQAAgfASgmQAIgOAbgwIhHAAIAAgSIBZAAIAAARIgJAQQgsBJAAAzg");
	this.shape_97.setTransform(11.6,38.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#00CCFF").s().p("AAAA7IAFgfIgWAAIgHAfIgKAAIAHgfIgMAAIAAgMIAPAAIAHgdIgWAAIAAgMIAYAAIAIghIAIAAIgFAhIAVAAIAIghIAKAAIgIAhIANAAIAAAMIgPAAIgIAdIAXAAIAAAMIgZAAIgHAfgAgOAQIAWAAIAHgdIgWAAg");
	this.shape_98.setTransform(-35.5,40);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#00CCFF").s().p("AgFA7IAAhpIgiAAIAAgMIBPAAIAAAMIgiAAIAABpg");
	this.shape_99.setTransform(-52.1,40);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#00CCFF").s().p("AggA7IAAh1IANAAIAABnIA0AAIAAAOg");
	this.shape_100.setTransform(-60.4,40);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#00CCFF").s().p("AgcA7IAAh1IA5AAIAAAOIgsAAIAAAoIAnAAIAAAKIgnAAIAAA1g");
	this.shape_101.setTransform(-68.7,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Line Work
	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#FFFFFF").ss(2,2,0,3).p("A7S31MA2lAAAAbTX2Mg2lAAAA7SoSMA2lAAAAbTQfMg2lAAA");
	this.shape_102.setTransform(91.4,74.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#5E5D66").s().p("A7fX+IAAxBIAAvcIAAveMA2/AAAMAAAAv7gAbTX2Mg2lAAAgAbTQfMg2lAAAgAbToSMg2lAAAgAbT31Mg2lAAAg");
	this.shape_103.setTransform(91.4,74.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_103},{t:this.shape_102}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.7,-79,352.1,309.7);


(lib._787_Generic_screen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PNG
	this.instance = new lib.odu01p02_pfd();
	this.instance.setTransform(-0.7,-149.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,-149.5,671,665.5);


(lib.point_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.point("synched",0);
	this.instance.setTransform(-29.2,1.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQAMAMgBAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape.setTransform(81.6,25.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_1.setTransform(72.4,25.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_2.setTransform(62.6,25.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQAMAAAHADQAHACADAFQAEAEACAGIABAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgPACg");
	this.shape_3.setTransform(52.6,25.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_4.setTransform(42.6,25.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgIAAgIAHg");
	this.shape_5.setTransform(32.6,25.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_6.setTransform(25.2,23.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_7.setTransform(17.6,25.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgHBAIAAhcIAOAAIAABcgAgHgsIAAgTIAOAAIAAATg");
	this.shape_8.setTransform(10.7,23.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgPACg");
	this.shape_9.setTransform(3.6,25.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_10.setTransform(-8.8,25.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AghA/IgCgPIAJACQAFAAAEgCQADgCACgDIAFgMIABgEIgjhbIARAAIATA2IAFAUIAGgUIAUg2IAQAAIgjBdIgHAVQgEAIgGAEQgFADgIAAQgEAAgGgCg");
	this.shape_11.setTransform(225.2,5.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgYA0IAAALIgPAAIAAh/IAQAAIAAAuQAKgMANAAQAJgBAIAEQAHADAFAHQAFAGADAJQADAHAAAKQAAAYgMANQgMANgQAAQgPAAgJgNgAgRgJQgHAJAAAPQAAASAEAHQAIAMAMAAQAJAAAHgJQAIgJAAgSQAAgQgHgJQgIgJgJAAQgJAAgIAJg");
	this.shape_12.setTransform(215.9,1.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgLAAgPQAAgNAFgKQAEgLAKgHQAJgFALAAQAHgBAGAEQAHAEAEAFIAAguIAQAAIAAB/IgPAAIAAgMQgIAOgRAAQgKAAgJgGgAgPgJQgIAJABAQQAAASAHAJQAHAJAJAAQAKAAAIgJQAGgIAAgSQAAgRgGgJQgIgJgLAAQgJAAgGAJg");
	this.shape_13.setTransform(200.3,1.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAIAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_14.setTransform(190.6,3.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgGgEgFAAQgGAAgCADQgDADgDAGQgCAIAAAKIAAAvg");
	this.shape_15.setTransform(183.4,3.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgdAkQgMgNgBgXQABgVAMgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAIAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_16.setTransform(174.6,3.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_17.setTransform(167.2,1.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_18.setTransform(159.6,3.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgIAAgIAHg");
	this.shape_19.setTransform(149.6,3.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgxAGIAAgLIBjAAIAAALg");
	this.shape_20.setTransform(134.6,3.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAABCIAHglIgaAAIgIAlIgMAAIAHglIgPAAIAAgNIASAAIAHgeIgZAAIAAgNIAbAAIAIgmIAMAAIgHAmIAaAAIAHgmIAOAAIgIAmIAQAAIAAANIgSAAIgHAeIAZAAIAAANIgbAAIgIAlgAgQAQIAaAAIAGgeIgaAAg");
	this.shape_21.setTransform(119.7,1.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgnBAIAAh/IARAAIAABwIA+AAIAAAPg");
	this.shape_22.setTransform(105.6,1.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_23.setTransform(97.9,1.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AApBAIgQgnIg0AAIgNAnIgTAAIAxh/IARAAIA1B/gAgIgZIgNAkIApAAIgNgiIgIgbQgCANgFAMg");
	this.shape_24.setTransform(89.3,1.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgHBAIAAhvIgrAAIAAgQIBlAAIAAAQIgrAAIAABvg");
	this.shape_25.setTransform(79.2,1.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAXAwQgIAJgJAFQgHADgLAAQgUABgLgNQgKgMAAgNQAAgMAIgKQAIgHAPgHQgJgKgCgHQgDgGAAgGQAAgMAJgIQAJgJAOAAQALABAIAHQAJAJAAALQAAASgYAOIAWAbQAEgIADgKIAQADQgEARgHALQAIAMAMAIIgLAMQgKgFgKgNgAgfAOQgEAHAAAGQAAAIAGAJQAGAHALAAQAIAAAFgEQAIgEAEgHIgbgkQgMAHgFAHgAgQgxQgEAEAAAGIABAHQACAEADADIAHAIQAIgGADgFQADgEAAgGQAAgGgEgFQgDgDgFAAQgHAAgEADg");
	this.shape_26.setTransform(63.2,1.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgnBAIAAh/IARAAIAABwIA+AAIAAAPg");
	this.shape_27.setTransform(48,1.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AApBAIgQgnIg0AAIgNAnIgTAAIAxh/IARAAIA1B/gAgIgZIgNAkIApAAIgOgiIgGgbQgDANgFAMg");
	this.shape_28.setTransform(36.7,1.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgdA6QgNgJgGgQQgIgQAAgRQABgTAHgQQAIgOAOgIQAOgIAQAAQASAAAOAKQANAKAFASIgQADQgFgOgJgGQgIgHgNAAQgNABgKAGQgKAIgEAMQgEAMAAAMQAAAPAFAMQAEANAKAFQALAHAKAAQAOAAAKgJQAKgIAEgQIARAEQgGAVgOALQgOALgUAAQgTAAgNgIg");
	this.shape_29.setTransform(24.3,1.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgnBAIAAh/IARAAIAABwIA+AAIAAAPg");
	this.shape_30.setTransform(13,1.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgvBAIAAh/IBcAAIAAAQIhKAAIAAAnIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_31.setTransform(1.9,1.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgYA9QgMgFgHgKQgGgKgBgNIAQgCQACAKAEAGQAEAHAJADQAIAEAJAAQAKAAAIgDQAHgDAEgFQADgFAAgGQAAgGgDgFQgEgEgIgDIgVgGQgRgFgHgBQgKgGgEgHQgFgHAAgIQAAgLAGgHQAFgJALgFQALgEAMAAQANAAALAEQALAFAGAJQAGAJAAALIgQABQgCgMgHgGQgIgGgOAAQgOAAgHAFQgHAGAAAJQAAAGAFAFQAFAEASAFQAVAFAIADQALAEAGAHQAFAIAAAKQAAALgGAJQgGAJgLAFQgLAFgOAAQgPAAgMgFg");
	this.shape_32.setTransform(-10.4,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-10.4,268.6,46.2);


(lib.point_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.point("synched",0);
	this.instance.setTransform(-40.9,1.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape.setTransform(122.3,23.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_1.setTransform(115.3,25.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_2.setTransform(105.3,25.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHADgGQADgGAFgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgGAEQgFAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQALAAAIADQAHACAEAFQADAEABAGIACAPIAAATQAAAWABAGQABAGACAFIgQAAQgDgFAAgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgCADgBAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgPACg");
	this.shape_3.setTransform(95.3,25.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgvBAIAAh/IAvAAQAMAAAGACQAKABAHAEQAGAFAEAIQADAIAAAKQAAAQgKAKQgKALgcgBIgfAAIAAA1gAgfgCIAfAAQARAAAHgFQAHgHAAgLQAAgIgEgGQgEgGgGgCIgRgBIgfAAg");
	this.shape_4.setTransform(84.6,23.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAGAAQAHAAAJAFIgGAPQgFgEgGAAQgFAAgDADQgEADgCAGQgCAIAAAKIAAAvg");
	this.shape_5.setTransform(71,25.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQAMAMgBAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_6.setTransform(62.3,25.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgLAAgOQAAgOAFgKQAFgMAJgFQAJgHALAAQAHABAHADQAGADAFAHIAAgvIAPAAIAAB/IgPAAIAAgMQgJAOgQAAQgKAAgJgGgAgQgIQgGAIAAARQgBARAIAJQAHAJAJAAQAKAAAHgIQAIgJgBgRQABgSgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_7.setTransform(52,23.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_8.setTransform(42.3,25.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_9.setTransform(32.3,25.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgnBBIAAh/IAPAAIAAAMQAFgHAGgEQAGgDAIAAQALAAAJAGQAKAGAEALQAFAMAAANQAAAOgFAKQgFALgKAGQgKAGgKAAQgHAAgGgDQgGgDgEgFIAAAtgAgRgqQgIAJAAASQAAAQAHAJQAIAIAKAAQAJAAAHgJQAIgIgBgRQABgSgIgJQgHgJgJAAQgJAAgIAKg");
	this.shape_10.setTransform(22.6,27);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_11.setTransform(12.7,25.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_12.setTransform(3.3,25.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAHgEAEgHQACgFAAgLIAAgFQgIADgPACg");
	this.shape_13.setTransform(-6.7,25.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAIAAAJAFIgFAPQgHgEgFAAQgGAAgCADQgDADgCAGQgDAIAAAKIAAAvg");
	this.shape_14.setTransform(-14,25.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgHBAIAAhwIgrAAIAAgPIBlAAIAAAPIgrAAIAABwg");
	this.shape_15.setTransform(-22.5,23.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgVAMgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAIAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_16.setTransform(196.9,3.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAWBAIAAg7QgBgKgFgFQgEgGgKAAQgFAAgHAEQgFADgDAHQgDAEAAALIAAAzIgQAAIAAh/IAQAAIAAAuQAMgMAOAAQALAAAHADQAIAEADAIQADAHAAAMIAAA7g");
	this.shape_17.setTransform(187,1.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_18.setTransform(179.5,1.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_19.setTransform(166.9,3.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_20.setTransform(156.9,3.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgLAAgPQAAgNAFgKQAFgLAJgHQAJgFALAAQAHgBAHAEQAGAEAEAFIAAguIAQAAIAAB/IgPAAIAAgMQgIAOgRAAQgKAAgJgGgAgQgJQgGAJAAAQQgBASAIAJQAIAJAIAAQAKAAAHgJQAIgIgBgSQABgRgIgJQgHgJgLAAQgIAAgIAJg");
	this.shape_21.setTransform(141.6,1.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_22.setTransform(131.9,3.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAGAAQAIAAAIAFIgGAPQgFgEgGAAQgGAAgCADQgDADgDAGQgCAIAAAKIAAAvg");
	this.shape_23.setTransform(124.7,3.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgVAMgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAIAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_24.setTransform(115.9,3.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_25.setTransform(108.5,1.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_26.setTransform(100.9,3.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgdAkQgMgNgBgXQABgVAMgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgLgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_27.setTransform(90.9,3.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgdAkQgMgNAAgXQAAgVAMgNQAMgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgNAAQgIAAgIAHg");
	this.shape_28.setTransform(75.9,3.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgTA7QgKgGgFgLQgFgLAAgPQAAgNAFgKQAFgLAJgHQAJgFALAAQAHgBAGAEQAHAEAFAFIAAguIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgPgJQgIAJAAAQQAAASAIAJQAHAJAJAAQAKAAAIgJQAHgIAAgSQAAgRgHgJQgIgJgLAAQgIAAgHAJg");
	this.shape_29.setTransform(65.6,1.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_30.setTransform(55.9,3.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_31.setTransform(46.7,3.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgxAGIAAgLIBjAAIAAALg");
	this.shape_32.setTransform(31.9,3.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAjBAIgRgbIgMgSIgHgIIgIgEIgJAAIgUAAIAAA5IgRAAIAAh/IA3AAQARAAAJADQAJAEAGAJQAFAJAAALQAAANgJAJQgJAIgSADQAGADAEADQAHAGAHALIAWAjgAgmgGIAlAAQAJAAAHgDQAGgCAEgFQADgGAAgFQAAgKgGgGQgHgFgOAAIgnAAg");
	this.shape_33.setTransform(16,1.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("Ag0BAIAAh/IAtAAQANAAAHACQAMACAHAHQALAJAFAOQAFAMAAARQAAAOgEALQgDALgGAHQgFAIgGAEQgHAEgJADQgJACgJAAgAgjAxIAcAAQAKAAAIgDQAHgCAEgEQAGgGAEgKQADgLAAgNQAAgUgHgKQgGgLgKgEQgHgCgNAAIgbAAg");
	this.shape_34.setTransform(2.7,1.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgwBAIAAh/IAwAAQAMAAAHABQAJACAHAFQAGAEAEAIQADAIAAAJQABARgLAJQgKALgbAAIggAAIAAA1gAgfgBIAgAAQAQAAAHgHQAHgGAAgLQAAgIgEgGQgEgFgGgCIgQgBIggAAg");
	this.shape_35.setTransform(-9.7,1.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAlBAIggguIgFgJIgFAKIggAtIgVAAIAyhBIgsg+IAUAAIAYAhIAIAQIAKgOIAagjIATAAIguA9IAyBCg");
	this.shape_36.setTransform(-22,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.4,-10.4,252.6,46.2);


(lib.point_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.point("synched",0);
	this.instance.setTransform(-62.1,1.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgdA6QgNgJgHgQQgGgQAAgRQgBgTAIgQQAIgOAOgIQAOgIAPAAQAUAAANAKQANAKAFASIgRADQgEgOgIgGQgJgHgNAAQgNABgKAGQgKAIgEAMQgEAMAAAMQAAAPAFAMQAEANALAFQAKAHAJAAQAPAAAKgJQAKgIADgQIARAEQgFAVgOALQgOALgUAAQgTAAgNgIg");
	this.shape.setTransform(188.6,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAsBAIAAhqIglBqIgOAAIglhsIAABsIgQAAIAAh/IAZAAIAfBZIAEATIAHgUIAfhYIAXAAIAAB/g");
	this.shape_1.setTransform(174.5,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgqBAIAAh/IBVAAIAAAQIhEAAIAAAnIA7AAIAAAOIg7AAIAAA6g");
	this.shape_2.setTransform(161.8,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_3.setTransform(145.9,3.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAVBAIAAg7QABgKgGgFQgEgGgKAAQgFAAgHAEQgFADgDAHQgDAEAAALIAAAzIgQAAIAAh/IAQAAIAAAuQALgMAPAAQAKAAAIADQAIAEADAIQADAHABAMIAAA7g");
	this.shape_4.setTransform(136,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgMIAMAAIAAgYIANgJIAAAhIAQAAIAAAMIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_5.setTransform(128.5,1.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_6.setTransform(113.5,3.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_7.setTransform(100.9,3.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAGAAQAHAAAJAFIgFAPQgHgEgFAAQgFAAgDADQgEADgBAGQgDAIAAAKIAAAvg");
	this.shape_8.setTransform(93.7,3.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgMBBIAAhPIgOAAIAAgMIAOAAIAAgKQAAgKACgEQACgHAGgDQAEgEAKAAIAPACIgCANIgKgBQgHAAgDAEQgDADAAAIIAAAJIASAAIAAAMIgSAAIAABPg");
	this.shape_9.setTransform(87.9,1.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgTA7QgKgGgFgLQgFgLAAgPQAAgNAFgKQAFgLAJgHQAJgFALAAQAHgBAGAEQAHAEAFAFIAAguIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgPgJQgIAJAAAQQAAASAIAJQAHAJAJAAQAKAAAIgJQAHgIAAgSQAAgRgHgJQgIgJgLAAQgIAAgHAJg");
	this.shape_10.setTransform(74.6,1.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_11.setTransform(64.9,3.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgGAuIgjhbIAQAAIAUA2IAFATIAFgSIAVg3IAQAAIgjBbg");
	this.shape_12.setTransform(55.5,3.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgHBAIAAhbIAPAAIAABbgAgHgtIAAgSIAPAAIAAASg");
	this.shape_13.setTransform(49,1.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_14.setTransform(41.9,3.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_15.setTransform(32.7,3.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgeAkQgLgNAAgXQAAgVALgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgLAAQgJAAgIAHg");
	this.shape_16.setTransform(22.9,3.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAGAAQAHAAAJAFIgGAPQgFgEgGAAQgFAAgDADQgEADgCAGQgCAIAAAKIAAAvg");
	this.shape_17.setTransform(15.7,3.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgXAHIAAgOIAvAAIAAAOg");
	this.shape_18.setTransform(4,3.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAABCIAHglIgaAAIgIAlIgMAAIAHglIgPAAIAAgNIASAAIAHgeIgZAAIAAgNIAbAAIAIgmIAMAAIgHAmIAaAAIAHgmIAOAAIgIAmIAQAAIAAANIgSAAIgHAeIAZAAIAAANIgbAAIgIAlgAgQAQIAaAAIAGgeIgaAAg");
	this.shape_19.setTransform(-9,1.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgHBAIAAhvIgrAAIAAgQIBlAAIAAAQIgrAAIAABvg");
	this.shape_20.setTransform(-24.1,1.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgnBAIAAh/IARAAIAABwIA+AAIAAAPg");
	this.shape_21.setTransform(-33,1.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgqBAIAAh/IBVAAIAAAQIhEAAIAAAnIA7AAIAAAOIg7AAIAAA6g");
	this.shape_22.setTransform(-43.5,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.6,-10.4,261.8,24.1);


(lib.t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.point_3("synched",0);
	this.instance.setTransform(31.7,82.7);

	this.instance_1 = new lib.point_2("synched",0);
	this.instance_1.setTransform(43.4,35.6);

	this.instance_2 = new lib.point_1("synched",0);
	this.instance_2.setTransform(64.7,10.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,268.6,118.5);


// stage content:
(lib.dif06obp02 = function(mode,startPosition,loop) {
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
	this.frame_480 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(480).call(this.frame_480).wait(1));

	// prot
	this.prot = new lib.prot();
	this.prot.setTransform(500,275,1,1,0,0,0,500,275);

	this.timeline.addTween(cjs.Tween.get(this.prot).wait(481));

	// t4
	this.instance = new lib.t4("synched",0);
	this.instance.setTransform(746.6,330.4,1,1,0,0,0,75.8,37.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(475).to({_off:false},0).to({alpha:1},5).wait(1));

	// t3
	this.instance_1 = new lib.textboxup("synched",0);
	this.instance_1.setTransform(295.5,464.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(283).to({_off:false},0).to({alpha:1},5).wait(193));

	// hl
	this.instance_2 = new lib.hl3("synched",0);
	this.instance_2.setTransform(289.5,400.1,1,1,0,0,0,117.5,24.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(278).to({_off:false},0).to({alpha:1},5).wait(31).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(161));

	// t2
	this.instance_3 = new lib.textboxRsidecopy("synched",0);
	this.instance_3.setTransform(88.5,158);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(86).to({_off:false},0).to({alpha:1},5).wait(390));

	// t1
	this.instance_4 = new lib.textboxRside("synched",0);
	this.instance_4.setTransform(88.5,298);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(62).to({_off:false},0).to({alpha:1},5).wait(414));

	// hl
	this.instance_5 = new lib.hl2("synched",0);
	this.instance_5.setTransform(257.5,296.5,1,1,0,0,0,85.5,78.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(57).to({_off:false},0).to({alpha:1},5).wait(24).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(389));

	// panel
	this.instance_6 = new lib.B787SynopticAuxDisplayLcopy2("synched",0);
	this.instance_6.setTransform(702.6,111.4,0.25,0.25,0,0,0,0,206.2);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_7 = new lib.B787SynopticAuxDisplayLcopy("synched",0);
	this.instance_7.setTransform(258.7,403.4,1,1,0,0,0,0,206.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},5).to({state:[{t:this.instance_6}]},5).to({state:[{t:this.instance_7}]},76).to({state:[{t:this.instance_6}]},129).wait(266));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(5).to({_off:false},0).to({regY:206.3,scaleX:1,scaleY:1,x:258.7,y:403.4,alpha:1},5).to({_off:true},76).wait(129).to({_off:false},0).wait(266));

	// hl
	this.instance_8 = new lib.hl("synched",0);
	this.instance_8.setTransform(725.8,66,1,1,0,0,0,46.3,27.5);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({alpha:1},5).wait(476));

	// pfd
	this.instance_9 = new lib._787_Generic_screen("synched",0);
	this.instance_9.setTransform(821,143,0.5,0.5,0,0,0,319.7,250.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(481));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(500,217.8,1000,607.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;