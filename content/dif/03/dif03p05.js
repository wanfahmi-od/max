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


(lib.text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAJIAAgQIAQAAIAAAQg");
	this.shape.setTransform(583.8,39.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_1.setTransform(576.2,35.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_2.setTransform(566.2,35.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGBAIAAhcIAOAAIAABcgAgGgtIAAgSIAOAAIAAASg");
	this.shape_3.setTransform(559.3,34);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgNIAMAAIAAgXIANgJIAAAgIAQAAIAAANIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_4.setTransform(554.8,34.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGBAIAAhcIAOAAIAABcgAgGgtIAAgSIAOAAIAAASg");
	this.shape_5.setTransform(550.3,34);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_6.setTransform(543.7,35.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_7.setTransform(534.2,35.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgnBBIAAh/IAPAAIAAAMQAEgHAHgEQAGgDAIAAQAMAAAIAGQAKAGAEALQAFAMAAANQAAAOgFAKQgGALgJAGQgKAGgKAAQgGAAgHgDQgHgDgEgFIAAAtgAgRgqQgIAJAAASQAAAQAIAJQAHAIAKAAQAIAAAJgJQAGgIAAgRQAAgSgGgJQgIgJgJAAQgKAAgHAKg");
	this.shape_8.setTransform(524.5,37.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAWBAIAAg7QAAgKgGgFQgEgGgKAAQgFAAgHAEQgFADgDAHQgDAEAAALIAAAzIgQAAIAAh/IAQAAIAAAuQALgNAPABQALAAAHADQAIAFADAHQAEAHAAAMIAAA7g");
	this.shape_9.setTransform(509.3,34);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgcAkQgLgNAAgXQAAgNAFgMQAFgLAKgFQAKgGAKAAQAQAAAJAIQAKAHADAOIgQADQgCgKgGgEQgFgFgIAAQgKAAgHAIQgIAJAAARQAAASAHAJQAHAIAKAAQAJAAAHgFQAGgGACgMIAPACQgCAQgLAJQgKAJgQAAQgRAAgMgMg");
	this.shape_10.setTransform(500,35.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgNIAMAAIAAgXIANgJIAAAgIAQAAIAAANIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_11.setTransform(492.8,34.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_12.setTransform(488.3,34);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AASAuIgPg2IgDgQIgRBGIgRAAIgchbIAQAAIAOA0IAGAUIAFgTIAPg1IAOAAIAOA0IAFASIAFgSIAQg0IAPAAIgcBbg");
	this.shape_13.setTransform(479.7,35.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_14.setTransform(468.7,35.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQAMAMgBAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_15.setTransform(454.2,35.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAWBAIAAg7QgBgKgFgFQgEgGgKAAQgFAAgGAEQgGADgDAHQgDAEAAALIAAAzIgPAAIAAh/IAPAAIAAAuQAMgNAOABQALAAAHADQAIAFADAHQAEAHgBAMIAAA7g");
	this.shape_16.setTransform(444.3,34);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgNIAMAAIAAgXIANgJIAAAgIAQAAIAAANIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_17.setTransform(436.8,34.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgFQgGgGgJAAQgFAAgGAEQgHADgCAHQgDAEAAALIAAAzIgPAAIAAh/IAPAAIAAAuQAMgNAOABQAKAAAIADQAIAFADAHQADAHAAAMIAAA7g");
	this.shape_18.setTransform(424.3,34);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgNIAMAAIAAgXIANgJIAAAgIAQAAIAAANIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_19.setTransform(416.8,34.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgGBAIAAhcIANAAIAABcgAgGgtIAAgSIANAAIAAASg");
	this.shape_20.setTransform(412.3,34);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AASAuIgPg2IgDgQIgSBGIgQAAIgdhbIARAAIAPA0IAGAUIAEgTIAPg1IAOAAIAOA0IAFASIAFgSIAQg0IAQAAIgeBbg");
	this.shape_21.setTransform(403.7,35.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_22.setTransform(387.7,35.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_23.setTransform(378.2,35.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_24.setTransform(368.2,35.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAGAAQAHAAAJAFIgFAPQgHgEgFAAQgFAAgDADQgEADgBAGQgDAIAAAKIAAAvg");
	this.shape_25.setTransform(361,35.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgbA7QgKgIAAgPIAQACQABAHAEAEQAGAEAKAAQAKAAAFgEQAGgFACgIQABgEAAgQQgKAMgOAAQgTAAgKgOQgKgOAAgRQAAgNAEgMQAFgLAJgGQAKgGALAAQAQAAAKANIAAgLIAOAAIAABPQAAAVgEAKQgFAJgJAFQgKAFgMAAQgRAAgKgHgAgQgrQgHAIAAARQAAASAHAHQAHAIAJAAQALAAAIgIQAHgHAAgSQAAgRgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_26.setTransform(352,37.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AghApQgJgIAAgLQABgHADgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAKgDAJAAQANAAAHADQAHACAEAFQADAEABAGIABAPIAAATQAAAWACAGQABAGADAFIgRAAQgDgFAAgGQgJAHgIADQgGADgJAAQgQAAgIgHgAgCAFQgKACgEACQgEABgCAEQgDADAAAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_27.setTransform(342.2,35.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_28.setTransform(327.2,35.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgGAuIgjhbIAQAAIAUA2IAFATIAFgSIAVg3IAQAAIgjBbg");
	this.shape_29.setTransform(317.8,35.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgGBAIAAh/IAOAAIAAB/g");
	this.shape_30.setTransform(311.2,34);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQASgCAIgDIAAgEQABgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgHADgIAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgPACg");
	this.shape_31.setTransform(304.2,35.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgGAuIgjhbIAQAAIAUA2IAFATIAFgSIAVg3IAQAAIgjBbg");
	this.shape_32.setTransform(294.8,35.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgTA7QgJgGgGgLQgFgMAAgOQAAgNAFgKQAEgLAKgHQAJgFALAAQAHgBAHAEQAGAEAFAFIAAguIAPAAIAAB/IgOAAIAAgMQgKAOgQAAQgKAAgJgGgAgQgJQgGAJgBAQQAAATAIAIQAHAJAJAAQAKAAAHgJQAIgIAAgSQAAgRgIgJQgHgIgLgBQgIABgIAIg");
	this.shape_33.setTransform(279.9,34.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQALAMABAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_34.setTransform(270.2,35.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgNIAMAAIAAgXIANgJIAAAgIAQAAIAAANIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_35.setTransform(262.8,34.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAJgDIAAgEQAAgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAEAEACAGIABAPIAAATQAAAWABAGQAAAGADAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgQACg");
	this.shape_36.setTransform(255.2,35.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgGBAIAAh/IAOAAIAAB/g");
	this.shape_37.setTransform(248.2,34);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgdAkQgMgNgBgXQABgVAMgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgLgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_38.setTransform(241.2,35.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAFAAQAIAAAJAFIgFAPQgHgEgFAAQgGAAgCADQgDADgCAGQgDAIAAAKIAAAvg");
	this.shape_39.setTransform(234,35.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQAMAMgBAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_40.setTransform(220.2,35.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAWBAIAAg7QgBgKgFgFQgEgGgKAAQgFAAgGAEQgGADgDAHQgDAEAAALIAAAzIgPAAIAAh/IAPAAIAAAuQAMgNAOABQALAAAHADQAIAFADAHQAEAHgBAMIAAA7g");
	this.shape_41.setTransform(210.3,34);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgNIAMAAIAAgXIANgJIAAAgIAQAAIAAANIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_42.setTransform(202.8,34.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgIAOQAFgCADgEQAAgEAAgGIgHAAIAAgSIAQAAIAAASQAAAIgDAGQgEAGgFADg");
	this.shape_43.setTransform(192.7,40.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAWBAIAAg7QAAgKgGgFQgEgGgKAAQgFAAgHAEQgFADgDAHQgDAEAAALIAAAzIgQAAIAAh/IAQAAIAAAuQALgNAPABQALAAAHADQAIAFADAHQAEAHAAAMIAAA7g");
	this.shape_44.setTransform(185.3,34);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_45.setTransform(175.7,35.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgGBAIAAhcIANAAIAABcgAgGgtIAAgSIANAAIAAASg");
	this.shape_46.setTransform(169.3,34);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_47.setTransform(162.2,35.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgbA7QgKgIAAgPIAQACQABAHAEAEQAGAEAKAAQAKAAAFgEQAGgFACgIQABgEAAgQQgKAMgOAAQgSAAgLgOQgKgOAAgRQgBgNAFgMQAFgLAJgGQAJgGAMAAQAPAAALANIAAgLIAPAAIAABPQgBAVgEAKQgEAJgKAFQgJAFgNAAQgQAAgLgHgAgQgrQgIAIABARQgBASAIAHQAHAIAJAAQALAAAHgIQAIgHAAgSQAAgRgIgIQgIgJgKAAQgJAAgHAJg");
	this.shape_48.setTransform(152,37.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_49.setTransform(142.2,35.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgGBAIAAhcIAOAAIAABcgAgGgtIAAgSIAOAAIAAASg");
	this.shape_50.setTransform(135.3,34);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgNIAMAAIAAgXIANgJIAAAgIAQAAIAAANIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_51.setTransform(130.8,34.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAYAuIgTgdIgFgIIgXAlIgTAAIAiguIgggtIAUAAIAOAWIAGAKIAGgKIAQgWIATAAIggAsIAiAvg");
	this.shape_52.setTransform(123.8,35.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_53.setTransform(114.2,35.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_54.setTransform(99.7,35.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgBA8QgFgCgCgFQgBgEAAgPIAAgzIgMAAIAAgNIAMAAIAAgXIANgJIAAAgIAQAAIAAANIgQAAIAAA0QAAAIABABQAAABABAAQAAAAAAABQAAAAABABQAAAAABABIAFABIAHgBIACAOIgMABQgIAAgDgDg");
	this.shape_55.setTransform(92.8,34.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAWBAIAAg7QgBgKgFgFQgEgGgKAAQgFAAgGAEQgGADgDAHQgDAEAAALIAAAzIgQAAIAAh/IAQAAIAAAuQALgNAPABQALAAAHADQAIAFADAHQADAHAAAMIAAA7g");
	this.shape_56.setTransform(85.3,34);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgaA7QgLgIABgPIAPACQABAHAEAEQAGAEAKAAQAJAAAHgEQAFgFACgIQACgEAAgQQgLAMgOAAQgTAAgKgOQgLgOAAgRQABgNAEgMQAFgLAJgGQAJgGAMAAQAPAAALANIAAgLIAOAAIAABPQABAVgFAKQgFAJgJAFQgJAFgNAAQgRAAgJgHgAgQgrQgHAIgBARQABASAHAHQAHAIAJAAQALAAAIgIQAHgHAAgSQAAgRgIgIQgHgJgLAAQgIAAgIAJg");
	this.shape_57.setTransform(75,37.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgHBAIAAhcIAOAAIAABcgAgHgtIAAgSIAOAAIAAASg");
	this.shape_58.setTransform(68.3,34);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_59.setTransform(64.2,34);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgvBAIAAh/IBcAAIAAAQIhKAAIAAAnIBFAAIAAANIhFAAIAAAsIBNAAIAAAPg");
	this.shape_60.setTransform(51.5,34);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgIBAIgxh/IASAAIAhBcQAFALABAKIAGgVIAjhcIARAAIgyB/g");
	this.shape_61.setTransform(39.2,34);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgnBAIAAh/IARAAIAABwIA+AAIAAAPg");
	this.shape_62.setTransform(29.9,34);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAoBAIgOgnIg0AAIgPAnIgSAAIAxh/IARAAIA1B/gAgHgZIgPAkIAqAAIgOghIgHgbQgCAMgEAMg");
	this.shape_63.setTransform(18.6,34);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgIBAIgxh/IASAAIAhBcQAFALABAKIAGgVIAjhcIARAAIgyB/g");
	this.shape_64.setTransform(8,34);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgeAkQgLgNgBgXQABgVALgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgTAAgMgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgIgJgLAAQgKAAgHAHg");
	this.shape_65.setTransform(551.6,13.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAWBAIAAg7QAAgKgGgGQgEgFgKAAQgFAAgHAEQgFAEgDAFQgDAFAAALIAAAzIgQAAIAAh/IAQAAIAAAvQALgNAPgBQALAAAHAFQAIAEADAHQAEAHAAAMIAAA7g");
	this.shape_66.setTransform(541.7,11.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_67.setTransform(534.2,12.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_68.setTransform(521.6,13.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgeAkQgLgNAAgXQAAgVALgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAHAIQAIAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgLAAQgJAAgIAHg");
	this.shape_69.setTransform(511.6,13.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgGQgGgFgJAAQgFAAgGAEQgHAEgCAFQgDAFAAALIAAAzIgPAAIAAh/IAPAAIAAAvQAMgNAOgBQAKAAAIAFQAIAEADAHQADAHAAAMIAAA7g");
	this.shape_70.setTransform(501.7,11.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAeBAIgbhgIgDgQIgDAQIgbBgIgRAAIgih/IARAAIAUBTIAFAaIAGgYIAZhVIASAAIASBAQAIAYACAVIAHgcIAUhRIARAAIgjB/g");
	this.shape_71.setTransform(488.2,11.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgHAIIAAgQIAQAAIAAAQg");
	this.shape_72.setTransform(472.2,17.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_73.setTransform(467.2,12.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgGBAIAAhcIANAAIAABcgAgGgsIAAgTIANAAIAAATg");
	this.shape_74.setTransform(462.7,11.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_75.setTransform(456.1,13.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_76.setTransform(446.6,13.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQADgKAEgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgGADgJAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_77.setTransform(436.6,13.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAGAAQAHAAAJAFIgFAPQgHgEgFAAQgFAAgDADQgEADgBAGQgDAIAAAKIAAAvg");
	this.shape_78.setTransform(429.4,13.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_79.setTransform(423.2,12.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_80.setTransform(410.6,13.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgsIAAgTIAPAAIAAATg");
	this.shape_81.setTransform(403.7,11.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgZApQgKgIgCgPIAPgCQACAJAGAFQAGAFAJAAQALAAAFgEQAFgFAAgGQAAgFgFgDQgDgCgNgDQgPgFgHgCQgHgCgDgGQgEgFAAgHQAAgHADgFQADgFAFgEQAEgCAGgCQAGgCAIAAQAJAAAIADQAIADAEAGQAEAFACAJIgQACQgBgHgFgEQgFgEgIAAQgKAAgFADQgEAEAAAFQAAADACACQACADAEACIAMAEIAXAHQAHABAEAFQADAGAAAIQAAAIgEAHQgFAHgJAEQgIADgLAAQgRAAgJgHg");
	this.shape_82.setTransform(392.1,13.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgsIAAgTIAPAAIAAATg");
	this.shape_83.setTransform(385.7,11.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgJAAgHAHg");
	this.shape_84.setTransform(373.6,13.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgGAuIgjhbIAQAAIAUA2IAFATIAFgSIAVg3IAQAAIgjBbg");
	this.shape_85.setTransform(364.2,13.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_86.setTransform(357.6,11.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AghApQgIgIAAgLQAAgHACgGQADgGAGgDQAFgBAGgCIAOgDQARgCAJgDIAAgEQAAgKgEgEQgGgFgLAAQgKAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAKgDAKAAQAMAAAHADQAHACADAFQAEAEACAGIABAPIAAATQAAAWABAGQAAAGADAFIgQAAQgCgFgBgGQgJAHgIADQgHADgJAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCAEQgCADAAAEQgBAHAFAEQAFAEAJAAQAHAAAIgEQAGgEAEgHQACgFAAgLIAAgFQgIADgQACg");
	this.shape_87.setTransform(350.6,13.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgGAuIgjhbIAQAAIAUA2IAFATIAFgSIAVg3IAQAAIgjBbg");
	this.shape_88.setTransform(341.2,13.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgTA7QgKgGgEgLQgGgLAAgOQAAgOAFgKQAEgMAKgFQAJgHALAAQAHABAGADQAHADAEAHIAAgvIAQAAIAAB/IgPAAIAAgMQgIAOgRAAQgKAAgJgGgAgPgIQgIAIABARQAAARAHAJQAHAJAJAAQAKAAAIgIQAGgJAAgRQAAgSgGgIQgIgJgLAAQgJAAgGAJg");
	this.shape_89.setTransform(326.3,12);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgVAMgNQANgNARAAQATAAAMANQAMAMAAAWIAAAEIhEAAQABAPAIAIQAIAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgKAIgRAAQgSAAgNgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_90.setTransform(316.6,13.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_91.setTransform(309.2,12.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AghApQgJgIAAgLQAAgHAEgGQADgGAFgDQAFgBAGgCIAOgDQARgCAKgDIAAgEQAAgKgFgEQgGgFgLAAQgKAAgGAEQgFAEgDAKIgPgCQADgKAEgGQAFgHAJgDQAJgDAKAAQAMAAAIADQAHACAEAFQADAEABAGIABAPIAAATQAAAWABAGQACAGADAFIgRAAQgDgFAAgGQgJAHgIADQgGADgJAAQgQAAgIgHgAgCAFQgKACgEACQgEABgDAEQgCADAAAEQABAHAEAEQAFAEAJAAQAHAAAHgEQAIgEADgHQADgFAAgLIAAgFQgJADgPACg");
	this.shape_92.setTransform(301.6,13.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_93.setTransform(294.6,11.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_94.setTransform(287.6,13.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgYAvIAAhbIAPAAIAAAOQAFgKAEgDQADgDAFAAQAJAAAIAFIgGAPQgFgEgGAAQgGAAgCADQgDADgDAGQgCAIAAAKIAAAvg");
	this.shape_95.setTransform(280.4,13.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgdAkQgNgNAAgXQAAgVANgNQAMgNARAAQATAAAMANQAMAMgBAWIAAAEIhDAAQABAPAHAIQAJAIAJAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgTAAgLgMgAgQgbQgIAHAAANIAyAAQgBgMgFgGQgIgJgMAAQgIAAgIAHg");
	this.shape_96.setTransform(266.6,13.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AAVBAIAAg7QAAgKgEgGQgGgFgJAAQgFAAgHAEQgGAEgCAFQgDAFAAALIAAAzIgQAAIAAh/IAQAAIAAAvQAMgNAOgBQALAAAHAFQAIAEADAHQADAHABAMIAAA7g");
	this.shape_97.setTransform(256.7,11.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgHBAIAAhwIgrAAIAAgPIBlAAIAAAPIgrAAIAABwg");
	this.shape_98.setTransform(246.2,11.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgIAuIAAgSIAQAAIAAASgAgIgbIAAgSIAQAAIAAASg");
	this.shape_99.setTransform(233.6,13.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_100.setTransform(226,13.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_101.setTransform(216,13.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgHBAIAAhcIAOAAIAABcgAgHgsIAAgTIAOAAIAAATg");
	this.shape_102.setTransform(209,11.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_103.setTransform(204.6,12.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHADgGQADgGAFgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgGAEQgFAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQALAAAIADQAHACAEAFQADAEABAGIACAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgCADgBAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgPACg");
	this.shape_104.setTransform(197,13.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_105.setTransform(187,13.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgsIAAgTIAPAAIAAATg");
	this.shape_106.setTransform(180,11.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_107.setTransform(170.5,13.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgUAsQgHgDgDgFQgEgFgBgGIgBgPIAAg4IAQAAIAAAyQAAAMABAEQABAHAFADQAFAEAHAAQAFAAAGgEQAGgEADgGQADgGAAgMIAAgwIAPAAIAABbIgOAAIAAgNQgLAPgQAAQgJAAgHgDg");
	this.shape_108.setTransform(157.9,13.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgHBAIAAh/IAOAAIAAB/g");
	this.shape_109.setTransform(151,11.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgGBAIAAh/IAOAAIAAB/g");
	this.shape_110.setTransform(147,11.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgsIAAgTIAPAAIAAATg");
	this.shape_111.setTransform(143,11.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AghA/IgCgPIAJACQAFAAAEgCQADgCACgDIAFgMIABgEIgjhbIARAAIATA2IAFAUIAGgUIAUg2IAQAAIgjBdIgHAVQgEAIgGAEQgFADgIAAQgEAAgGgCg");
	this.shape_112.setTransform(131.6,15.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgYAvIAAhbIAOAAIAAAOQAGgKAEgDQADgDAGAAQAHAAAJAFIgFAPQgHgEgFAAQgFAAgDADQgEADgBAGQgDAIAAAKIAAAvg");
	this.shape_113.setTransform(124.7,13.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AghApQgJgIABgLQAAgHADgGQADgGAFgDQAFgBAGgCIAOgDQASgCAJgDIAAgEQgBgKgEgEQgGgFgLAAQgKAAgGAEQgFAEgCAKIgQgCQADgKAEgGQAFgHAJgDQAJgDALAAQALAAAIADQAHACAEAFQADAEABAGIACAPIAAATQAAAWABAGQABAGACAFIgQAAQgCgFgBgGQgJAHgIADQgGADgKAAQgPAAgIgHgAgCAFQgKACgEACQgEABgCAEQgCADgBAEQAAAHAFAEQAFAEAJAAQAIAAAGgEQAIgEADgHQACgFABgLIAAgFQgJADgPACg");
	this.shape_114.setTransform(116,13.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgBgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgWIANgKIAAAgIAQAAIAAANIgQAAIAAA1QAAAGABACQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAFABIAHAAIACAOIgMABQgIAAgDgCg");
	this.shape_115.setTransform(108.6,12.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AAWAvIAAg3QAAgJgCgFQgCgFgFgDQgEgCgHAAQgIAAgHAGQgIAGAAASIAAAxIgPAAIAAhbIAOAAIAAANQAKgPASAAQAIAAAHADQAHADAEAFQADAFACAGIAAAQIAAA3g");
	this.shape_116.setTransform(101,13.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgeAkQgMgNABgXQgBgVAMgNQANgNARAAQATAAAMANQALAMAAAWIAAAEIhDAAQABAPAIAIQAHAIAKAAQAJAAAGgEQAGgFAEgKIAQACQgEAPgKAHQgLAIgQAAQgSAAgNgMgAgQgbQgHAHgBANIAyAAQgBgMgFgGQgHgJgMAAQgJAAgIAHg");
	this.shape_117.setTransform(91,13.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AAvAvIAAg5QAAgJgCgEQgBgEgEgDQgEgCgGAAQgKAAgGAGQgHAHAAAOIAAA0IgNAAIAAg6QAAgLgEgFQgEgFgJAAQgHAAgFADQgGAEgDAGQgCAHAAAMIAAAvIgQAAIAAhbIAOAAIAAANQAFgHAHgEQAHgEAKAAQAKAAAHAEQAEAEADAIQALgQASAAQAOAAAHAIQAIAHAAAQIAAA+g");
	this.shape_118.setTransform(78.5,13.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgeAkQgMgNAAgXQAAgYAOgNQAMgKAQAAQATAAAMAMQAMANAAAWQAAAQgFALQgGAKgKAGQgKAFgMAAQgSAAgMgMgAgSgZQgIAJAAAQQAAASAIAIQAIAJAKAAQALAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgLAAQgKAAgIAJg");
	this.shape_119.setTransform(66,13.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AAsBAIAAhqIglBqIgNAAIgmhrIAABrIgQAAIAAh/IAZAAIAfBaIAEATIAHgVIAfhYIAXAAIAAB/g");
	this.shape_120.setTransform(53.5,11.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AAlBAIggguIgFgIIgFAJIggAtIgVAAIAyhBIgsg+IAUAAIAYAhIAIAQIAKgPIAbgiIASAAIgtA9IAwBCg");
	this.shape_121.setTransform(35,11.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AAoBAIgPgnIg0AAIgNAnIgTAAIAxh/IARAAIA1B/gAgHgYIgPAjIAqAAIgOgiIgHgbQgCANgEANg");
	this.shape_122.setTransform(23,11.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AAtBAIAAhqIgmBqIgNAAIglhrIAABrIgRAAIAAh/IAaAAIAeBaIAEATIAHgVIAfhYIAXAAIAAB/g");
	this.shape_123.setTransform(9.5,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,588.7,46.2);


(lib.prot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.texture();
	this.instance.setTransform(0,0,100,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1000,550);


(lib.HL2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(5,0,0,3).p("AOJi1MAnKAAAIAAFrMgnKAAAgEg1SgChMAm2AAAIAAFXMgm2AAAg");
	this.shape.setTransform(285.1,-1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.6,-22.5,687.3,41.5);


(lib.GEN_switchbase01bcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#7E8D9A","#4E616D"],[0,1],11.5,11.1,-11.5,-11).s().p("AhvBxQgvgvAAhCQAAhBAvguQAugvBBAAQBCAAAvAvQAuAuAABBQAABCguAvQgvAuhCAAQhBAAgugugAhmhmQgrArAAA7QAAA8ArAsQAqAqA8AAQA8AAAsgqQAqgsAAg8QAAg7gqgrQgsgrg8AAQg8AAgqArg");
	this.shape.setTransform(18.5,18.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#3C3C3C","#8C8C8C","#6A6A6A","#7B7B7B","#453932"],[0,0.286,0.506,0.667,1],-15.1,7.4,15.2,-7.3).s().p("Ah5AsIAXh+IB5gtIBjBVIgXB9Ih4AtgAhJhKQggAgAAAqQAAAsAgAgQAfAfArABQAsgBAggfQAfggAAgsQAAgqgfggQgggggsAAQgrAAgfAgg");
	this.shape_1.setTransform(18.4,18.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#5E5E5E","#453932"],[0,1],0,0,0,0,0,4.3).s().p("AgdA7IAAh2QAPgKAPAAQAQAAANAJIAAB4QgNAKgQAAQgPAAgPgLg");
	this.shape_2.setTransform(18.3,18.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#3C3C3C","#8C8C8C","#959595","#BCBCBC","#EAEAEA","#C5C5C5","#7B7B7B","#453932"],[0,0.114,0.259,0.376,0.522,0.643,0.808,1],-6.7,4.1,9.1,-4).s().p("Ag4AQIAAg1IAWAAIAAAFIAAAhIAEAEQAQALAPAAQAQAAANgKQADgBACgDIAAgiIAAgFIAWAAIAAA3QgYAUggAAQggAAgZgWg");
	this.shape_3.setTransform(18.3,24);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#3C3C3C","#959595","#BCBCBC","#C5C5C5","#7B7B7B","#453932"],[0,0.173,0.38,0.549,0.808,1],-0.1,-2.1,-0.1,1.8).s().p("AAjAQIAAgfIAWAAQAFAQgFAPgAg4AQQgFgQAFgPIAWAAIAAAfg");
	this.shape_4.setTransform(18.3,18.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5D5C5C").s().p("AAeg7IAFADIAAAkIAAAFIAAAfIAAAFIAAAkQgCADgDAAgAgiA4IAAgjIAAgFIAAgfIAAgFIAAgjIAEgDIAAB1IgEgDg");
	this.shape_5.setTransform(18.3,18.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#3C3C3C","#8C8C8C","#959595","#BCBCBC","#EAEAEA","#C5C5C5","#7B7B7B","#453932"],[0,0.114,0.259,0.376,0.522,0.643,0.808,1],-7.9,3.4,7.1,-3.6).s().p("AAjAlIAAgEIAAgiIgFgEQgNgKgQAAQgPAAgQALIgEAEIAAAhIAAAEIgWAAIAAg1QAZgUAgAAQAgAAAYATIAAA2g");
	this.shape_6.setTransform(18.3,13.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#888480").s().p("Ag4BMIAAgFQAZAVAgAAQAgAAAYgTIAAAFQgYASggAAQggAAgZgUgAg4hLQAHgGAJgEIABgBIABAAIACgBQAGgDAGgCIAEgBIAAAAIAJgBIACgBIAKAAQAgAAAYASIAAAFQgYgTggAAQggAAgZAVg");
	this.shape_7.setTransform(18.3,18.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#3C3C3C","#8C8C8C","#959595","#BCBCBC","#C5C5C5","#7B7B7B","#453932"],[0,0.114,0.259,0.376,0.525,0.808,1],-9.9,9.2,10,-9.1).s().p("AhKBMQggggAAgsQAAgrAgggQAfgfArAAQAsAAAgAfQAfAgAAArQAAAsgfAgQggAfgsAAQgrAAgfgfgAgKheIgDAAIgIABIgBAAIgDABQgHACgFADIgCABIgBABIgCAAQgIAEgIAGIgJAIQgdAdAAAmQAAAoAdAcIAJAIQAZAVAhgBQAgAAAYgSIALgKQAdgcAAgoQAAgmgdgdIgLgKQgYgSggAAIgKABg");
	this.shape_8.setTransform(18.5,18.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#3C3C3C","#8C8C8C","#BFBFBF","#C5C5C5","#7B7B7B","#453932"],[0,0.114,0.49,0.643,0.808,1],-10.4,6.2,10.4,-6.1).s().p("AA4BJIAAg5QAFgPgFgQIAAg5IAAgFIAMAKQAcAdAAAmQAAAogcAcIgMAKgAhDBEQgcgcAAgoQAAgmAcgdIAKgIIAAAFIAAA3QgFAPAFAQIAAA3IAAAFIgKgIg");
	this.shape_9.setTransform(18.4,18.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#262626","#7B7B7B","#595959","#666666","#2C2521"],[0,0.286,0.506,0.667,1],-15.1,7.4,15.2,-7.3).s().p("AgXCIIgCgBIhmhXIgBgCIgBgCIAYiCIABgCIABAAIB9guIACgBIACABIBmBYIABABIAAACIgXCCIgBACIgCABIh8AtIgBABIgBAAgAhihSIgXB+IBjBUIB5gtIAWh9IhjhVg");
	this.shape_10.setTransform(18.4,18.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#343D43").s().p("AhmBoQgrgsAAg8QAAg7ArgrQAqgrA8AAQA8AAAsArQAqArAAA7QAAA8gqAsQgsAqg8AAQg8AAgqgqgAAViHIh9AuIgBABIgBACIgYCCIABACIABABIBmBYIACABIACgBIB8guIACgBIABgCIAXiBIAAgCIgBgCIhmhXIgCgBIgBAAIgBAAg");
	this.shape_11.setTransform(18.5,18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base fill
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#7E8D9A","#4E616D"],[0,1],11.5,11.1,-11.5,-11).s().p("AhvBxQgvgvAAhCQAAhBAvguQAugvBBAAQBCAAAvAvQAuAuAABBQAABCguAvQgvAuhCAAQhBAAgugugAhmhmQgrArAAA7QAAA8ArAsQAqAqA8AAQA8AAAsgqQAqgsAAg8QAAg7gqgrQgsgrg8AAQg8AAgqArg");
	this.shape_12.setTransform(18.5,18.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#343D43").s().p("AhmBoQgrgsAAg8QAAg7ArgrQAqgrA8AAQA8AAAsArQAqArAAA7QAAA8gqAsQgsAqg8AAQg8AAgqgqgAAViHIh9AuIgBABIgBACIgYCCIABACIABABIBmBYIACABIACgBIB8guIACgBIABgCIAXiBIAAgCIgBgCIhmhXIgCgBIgBAAIgBAAg");
	this.shape_13.setTransform(18.5,18.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#3C3C3C","#8C8C8C","#BFBFBF","#C5C5C5","#7B7B7B","#453932"],[0,0.114,0.49,0.643,0.808,1],-10.3,6.3,10.5,-6).s().p("AgXCIIgCgBIhmhXIgBgCIgBgCIAYiCIABgCIABAAIB9guIACgBIACABIBmBYIABABIAAACIgXCCIgBACIgCABIh8AtIgBABIgBAAg");
	this.shape_14.setTransform(18.4,18.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.5,2.5,32,32);


(lib.GEN_switchbase01b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#7E8D9A","#4E616D"],[0,1],11.5,11.1,-11.5,-11).s().p("AhvBxQgvgvAAhCQAAhBAvguQAugvBBAAQBCAAAvAvQAuAuAABBQAABCguAvQgvAuhCAAQhBAAgugugAhmhmQgrArAAA7QAAA8ArAsQAqAqA8AAQA8AAAsgqQAqgsAAg8QAAg7gqgrQgsgrg8AAQg8AAgqArg");
	this.shape.setTransform(18.5,18.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#3C3C3C","#8C8C8C","#6A6A6A","#7B7B7B","#453932"],[0,0.286,0.506,0.667,1],-15.1,7.4,15.2,-7.3).s().p("Ah5AsIAXh+IB5gtIBjBVIgXB9Ih4AtgAhJhKQggAgAAAqQAAAsAgAgQAfAfArABQAsgBAggfQAfggAAgsQAAgqgfggQgggggsAAQgrAAgfAgg");
	this.shape_1.setTransform(18.4,18.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#5E5E5E","#453932"],[0,1],0,0,0,0,0,4.3).s().p("AgdA7IAAh2QAPgKAPAAQAQAAANAJIAAB4QgNAKgQAAQgPAAgPgLg");
	this.shape_2.setTransform(18.3,18.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#3C3C3C","#8C8C8C","#959595","#BCBCBC","#EAEAEA","#C5C5C5","#7B7B7B","#453932"],[0,0.114,0.259,0.376,0.522,0.643,0.808,1],-6.7,4.1,9.1,-4).s().p("Ag4AQIAAg1IAWAAIAAAFIAAAhIAEAEQAQALAPAAQAQAAANgKQADgBACgDIAAgiIAAgFIAWAAIAAA3QgYAUggAAQggAAgZgWg");
	this.shape_3.setTransform(18.3,24);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#3C3C3C","#959595","#BCBCBC","#C5C5C5","#7B7B7B","#453932"],[0,0.173,0.38,0.549,0.808,1],-0.1,-2.1,-0.1,1.8).s().p("AAjAQIAAgfIAWAAQAFAQgFAPgAg4AQQgFgQAFgPIAWAAIAAAfg");
	this.shape_4.setTransform(18.3,18.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5D5C5C").s().p("AAeg7IAFADIAAAkIAAAFIAAAfIAAAFIAAAkQgCADgDAAgAgiA4IAAgjIAAgFIAAgfIAAgFIAAgjIAEgDIAAB1IgEgDg");
	this.shape_5.setTransform(18.3,18.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#3C3C3C","#8C8C8C","#959595","#BCBCBC","#EAEAEA","#C5C5C5","#7B7B7B","#453932"],[0,0.114,0.259,0.376,0.522,0.643,0.808,1],-7.9,3.4,7.1,-3.6).s().p("AAjAlIAAgEIAAgiIgFgEQgNgKgQAAQgPAAgQALIgEAEIAAAhIAAAEIgWAAIAAg1QAZgUAgAAQAgAAAYATIAAA2g");
	this.shape_6.setTransform(18.3,13.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#888480").s().p("Ag4BMIAAgFQAZAVAgAAQAgAAAYgTIAAAFQgYASggAAQggAAgZgUgAg4hLQAHgGAJgEIABgBIABAAIACgBQAGgDAGgCIAEgBIAAAAIAJgBIACgBIAKAAQAgAAAYASIAAAFQgYgTggAAQggAAgZAVg");
	this.shape_7.setTransform(18.3,18.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#3C3C3C","#8C8C8C","#959595","#BCBCBC","#C5C5C5","#7B7B7B","#453932"],[0,0.114,0.259,0.376,0.525,0.808,1],-9.9,9.2,10,-9.1).s().p("AhKBMQggggAAgsQAAgrAgggQAfgfArAAQAsAAAgAfQAfAgAAArQAAAsgfAgQggAfgsAAQgrAAgfgfgAgKheIgDAAIgIABIgBAAIgDABQgHACgFADIgCABIgBABIgCAAQgIAEgIAGIgJAIQgdAdAAAmQAAAoAdAcIAJAIQAZAVAhgBQAgAAAYgSIALgKQAdgcAAgoQAAgmgdgdIgLgKQgYgSggAAIgKABg");
	this.shape_8.setTransform(18.5,18.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#3C3C3C","#8C8C8C","#BFBFBF","#C5C5C5","#7B7B7B","#453932"],[0,0.114,0.49,0.643,0.808,1],-10.4,6.2,10.4,-6.1).s().p("AA4BJIAAg5QAFgPgFgQIAAg5IAAgFIAMAKQAcAdAAAmQAAAogcAcIgMAKgAhDBEQgcgcAAgoQAAgmAcgdIAKgIIAAAFIAAA3QgFAPAFAQIAAA3IAAAFIgKgIg");
	this.shape_9.setTransform(18.4,18.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#262626","#7B7B7B","#595959","#666666","#2C2521"],[0,0.286,0.506,0.667,1],-15.1,7.4,15.2,-7.3).s().p("AgXCIIgCgBIhmhXIgBgCIgBgCIAYiCIABgCIABAAIB9guIACgBIACABIBmBYIABABIAAACIgXCCIgBACIgCABIh8AtIgBABIgBAAgAhihSIgXB+IBjBUIB5gtIAWh9IhjhVg");
	this.shape_10.setTransform(18.4,18.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#343D43").s().p("AhmBoQgrgsAAg8QAAg7ArgrQAqgrA8AAQA8AAAsArQAqArAAA7QAAA8gqAsQgsAqg8AAQg8AAgqgqgAAViHIh9AuIgBABIgBACIgYCCIABACIABABIBmBYIACABIACgBIB8guIACgBIABgCIAXiBIAAgCIgBgCIhmhXIgCgBIgBAAIgBAAg");
	this.shape_11.setTransform(18.5,18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base fill
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#7E8D9A","#4E616D"],[0,1],11.5,11.1,-11.5,-11).s().p("AhvBxQgvgvAAhCQAAhBAvguQAugvBBAAQBCAAAvAvQAuAuAABBQAABCguAvQgvAuhCAAQhBAAgugugAhmhmQgrArAAA7QAAA8ArAsQAqAqA8AAQA8AAAsgqQAqgsAAg8QAAg7gqgrQgsgrg8AAQg8AAgqArg");
	this.shape_12.setTransform(18.5,18.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#343D43").s().p("AhmBoQgrgsAAg8QAAg7ArgrQAqgrA8AAQA8AAAsArQAqArAAA7QAAA8gqAsQgsAqg8AAQg8AAgqgqgAAViHIh9AuIgBABIgBACIgYCCIABACIABABIBmBYIACABIACgBIB8guIACgBIABgCIAXiBIAAgCIgBgCIhmhXIgCgBIgBAAIgBAAg");
	this.shape_13.setTransform(18.5,18.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#3C3C3C","#8C8C8C","#BFBFBF","#C5C5C5","#7B7B7B","#453932"],[0,0.114,0.49,0.643,0.808,1],-10.3,6.3,10.5,-6).s().p("AgXCIIgCgBIhmhXIgBgCIgBgCIAYiCIABgCIABAAIB9guIACgBIACABIBmBYIABABIAAACIgXCCIgBACIgCABIh8AtIgBABIgBAAg");
	this.shape_14.setTransform(18.4,18.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.5,2.5,32,32);


(lib.GEN_switch01up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#D1D7D8","#7B7B7B"],[0.173,0.553,1],-3.6,-2.8,0,-3.6,-2.8,17.5).s().p("AgzA2IgJgJQgJgLgCgPIgBgCIAAgMQABgkAWgVQAVgUAcAAQAbAAAVATQAXAWACAjIAAALIgBAEQgCAOgJALIgJAKQgWATgeAAQgdAAgWgTg");
	this.shape.setTransform(6.5,-27.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#E7EAEB","#DFE3E4","#D0D6D7","#C3C8C9","#A9ACAC","#9C9F9F","#9C9F9F"],[0,0.196,0.38,0.533,0.776,0.894,1],-11.5,0.2,12.8,0.1).s().p("AgTA3QgNgDgNgKQgTgOgDgWIgBgHIAAgDIAAgFIgEgwIABAAQACAOAJAMIAJAJQAWASAdABQAegBAWgSIAJgKQAJgLACgOIABAAIgDAzIAAAGIgBAGQgCARgMAMIgDAEIgBAAIgBACQgNALgQADQgKAEgLAAQgJAAgKgEg");
	this.shape_1.setTransform(6.5,-19.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","#D1D7D8","#7B7B7B"],[0.173,0.553,1],-4.7,-1.5,0,-4.7,-1.5,15.1).s().p("AgUAgQgRgFgNgLIgKgJQgKgKgBgOQgBgEACgIIABgBIABAKQADAUATAOQANAKAOADQAKADAJAAQALAAAKgDQAQgDAMgMIACgBIAAAAIADgEQANgKACgRIABgHIAAgHQADANgBAEQgDARgMALIgDADIgDACIAAAAIAAABIgBAAQgNAKgPAFQgLADgLAAQgKAAgKgDg");
	this.shape_2.setTransform(6.5,-16.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#959595","#5E5E5E"],[0,1],2.6,0,-2.5,0).s().p("AgTAEQgHgEgBgIIAAgBQAMAJAPAAQAQAAAMgJIAAABQgBAIgHAEQgJAGgLAAQgLAAgIgGg");
	this.shape_3.setTransform(6.6,-1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#5E5E5E","#959595","#BCBCBC","#C5C5C5","#7B7B7B","#5E5E5E"],[0,0.173,0.38,0.549,0.808,1],4.2,1.2,-3,1.2).s().p("AgbAwIAAAAIgDgDQgMgKgCgNIAAgGIAAgCIgBgEQAEAIAIAHIAEADQANAJAQAAQARAAAOgJIADgDQAJgHADgIIgBAMQgBANgLAKIgEACQgNAKgQgBQgOAAgNgIgAgdARIgEgDQgIgIgEgGIgCgaQADAKALAJIAEADQANAGAQAAQARABAOgIIADgCQANgKACgNIgCAdQgDAHgKAIIgDADQgOAIgRABQgQAAgNgJgAgvgfIgBgWQAQAYAggBQAigBAQgZIAAAFIgBAMQgJAagiACIgGABQgdAAgSgVg");
	this.shape_4.setTransform(6.5,-6.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#5E5E5E","#A8A8A8","#C5C5C5","#7B7B7B","#5E5E5E"],[0,0.286,0.549,0.808,1],5,3.9,-3.8,3.9).s().p("AgdAyIgEgDQgIgHgEgIIAAgMQAEAJAIAHIAEADQANAJAQAAQARAAAOgJIADgDQAKgHADgKIgBANQgDAIgJAHIgDADQgOAJgRAAQgQAAgNgJgAgdAQIgEgDQgLgJgDgIIAAgBIAAgEQAUAWAhgDQAigDAJgXIAAAJQgCAKgNAKIgDADQgOAJgRAAQgQAAgNgJgAgwgfIgCgbQANALASAFQAKADAJAAQALAAALgDQAPgFAOgKIAAAAIgBAYQgQAYgiABIAAAAQghAAgPgXg");
	this.shape_5.setTransform(6.5,-9.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#5E5E5E","#A8A8A8","#C5C5C5","#7B7B7B","#5E5E5E"],[0,0.286,0.549,0.808,1],5,2.9,-3.8,2.9).s().p("AgbA8IAAAAIgDgDQgMgKgCgMIAAgHIAAgCIgDgoIAAgBIgDg1QANALASAFQAKADAJAAQALAAALgDQAPgFAOgKIAAAAIgGBmQgBAMgLAKIgEADQgNAJgQAAQgOAAgNgJg");
	this.shape_6.setTransform(6.5,-8.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#E7EAEB","#DFE3E4","#D0D6D7","#C3C8C9","#A9ACAC","#9C9F9F","#9C9F9F"],[0,0.196,0.38,0.533,0.776,0.894,1],-7.3,4.7,7.3,4.6).s().p("AgTBmQgNgDgNgKQgTgOgDgWIgBgKIAAgDIAAgEIgEgvIABAAIgBgCIAAgMQABgmAWgVQAVgUAcAAQAbAAAVATQAXAWACAlIAAALIgBAEIABAAIgDA5IgBAHQgCAQgMANIgDADIgBAAIgBACQgNAMgQADQgKADgLAAQgJAAgKgDg");
	this.shape_7.setTransform(6.5,-24.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-34.8,14.8,34.8);


(lib.GEN_switch01down = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#D1D7D8","#7B7B7B"],[0.173,0.553,1],-1.9,-4.8,0,-1.9,-4.8,14.3).s().p("AgvA1QgXgVgCgjIAAgLIABgEQACgOAJgMQAEgEAFgFQAWgTAdAAQAeAAAWATIAJAJQAJALACAPIABACIAAAMQgBAkgWAVQgVAUgdAAQgaAAgVgUg");
	this.shape.setTransform(6.6,22.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#E7EAEA","#FFFFFF","#FFFFFF","#DADFE0","#C2C7C8"],[0,0.196,0.486,0.839,1],-7.3,0,7.3,0).s().p("ABIA6QgCgOgJgMIgJgJQgWgSgegBQgdABgWASQgFAFgEAFQgJALgCAOIgBAAIADgzIAAgHIABgGQACgQAMgMIADgEIABAAIABgCIABgBQAGgFAHgEQAHgDAIgBQAKgEAKAAQAKAAAKAEQALACALAHIAEADIACACQARAOADAUIABAIIAAADIAAAFIAEAwg");
	this.shape_1.setTransform(6.6,14.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","#D1D7D8","#7B7B7B"],[0.173,0.553,1],-1.6,-6.4,0,-1.6,-6.4,15.1).s().p("AhHASQADgRAMgLIADgDIADgCIAAAAIABgBIACgBIACgCQALgIANgEQALgDAKAAQALAAAKADQAOAEALAIIACABIADADIAKAJQAKAKABAOQABAEgCAIIgBABIgBgKQgDgVgSgMIgBgBIgFgDQgLgHgLgDQgKgDgKAAQgKAAgKADQgHABgHAEQgHADgGAGIgBABIgCABIAAAAIgDAEQgNAKgCARIgBAHIAAAHQgDgNABgEg");
	this.shape_2.setTransform(6.6,11.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#959595","#5E5E5E"],[0,1],-2.5,0,2.6,0).s().p("AgbAJQABgIAHgEQAJgGAKAAQAMAAAIAGQAHAEABAIIAAABQgMgJgQAAQgPAAgMAJIAAgBg");
	this.shape_3.setTransform(6.5,1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#5E5E5E","#A8A8A8","#C5C5C5","#7B7B7B","#5E5E5E"],[0,0.286,0.549,0.808,1],-4.9,-1,3.9,-1).s().p("AAVASQgKgDgLAAQgKAAgLADQgNAEgLAIQADgIAJgHIADgDQAOgJAQAAQARAAANAIIAEAEQAJAHAEAIQgMgIgOgEgAgtgCQAEgJAIgGIADgDQAOgJAQAAQARAAANAJIAEADQAIAGAEAJIAAAKQgDgIgJgHIgEgCQgNgJgRAAQgQAAgOAJIgDACQgJAHgEAIg");
	this.shape_4.setTransform(6.6,6.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#5E5E5E","#959595","#BCBCBC","#C5C5C5","#7B7B7B","#5E5E5E"],[0,0.173,0.38,0.549,0.808,1],-4.1,0.4,3.1,0.4).s().p("AguASQAEgKAJgHIADgBQAOgJAQAAQARAAANAJIAEABQAJAHADAJIACAXIgBgBQgEgHgJgIIgEgDQgNgJgRAAQgQAAgOAJIgDADQgJAHgDAIIgCACgAAigIIgEgDQgNgJgRAAQgQAAgOAJIgDADQgIAHgEAGIABgLQACgMALgKIADgDQANgJAPAAQAPAAANAJIAAAAIAEADQALAKACAMIAAAGIAAABIABAEQgEgGgIgHg");
	this.shape_5.setTransform(6.6,5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base fill
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#E7EAEA","#FFFFFF","#FFFFFF","#DADFE0","#C2C7C8"],[0,0.196,0.486,0.839,1],-7.3,-4.6,7.3,-4.6).s().p("AgvBVQgXgVgCglIAAgLIABgEIgBAAIADg5IABgHQACgQAMgNIADgDIABAAIABgCIABgBQAMgLAQgDQAKgDAKAAQAKAAAKADQANADANAKIACABQARAOADAVIABAKIAAADIAAAEIAEAvIgBAAIABABIAAANQgBAmgWAVQgVAUgdAAQgaAAgVgUg");
	this.shape_6.setTransform(6.6,18.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#808080").s().p("AAvAwQgNgJgOgEQgKgDgKAAQgKAAgKADQgPAEgMAKIADgzQACgNALgKIADgCIAAgCQACgHAHgGQAIgHALAAQALAAAJAHQAHAGABAHIAAABIAAAAIAEADQALAKACANIAAAEIAAACIADAqIAAABIAAADIgBgCg");
	this.shape_7.setTransform(6.6,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,0,14.8,29.4);


(lib.GEN_screw03copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#5A6B72","#414B50"],[0,1],3,3,-3,-3).s().p("AgFApIgIgCQgEAAABgEIAFgTQABgKgJgEIABAAIgUgEIgBAAQgBAAAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBIADgHQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAgBQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAUAGQAJABAEgJIAAAAIADgTIAAgBQAAgBABAAQAAAAABgBQAAAAABAAQABABABAAIAIABIACABQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIgFATQgBAKAJAFIATADQADABAAAEIgCAHQgCADgDgBIgTgEQgKgBgEAJIgDATQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAIAAgBgAgkgNIgCAHIAAACIAUAEQAMADgCANIgFAUIABABIAHACIABgBIAEgTIAAAAQADgLANABIABAAIATAFIABgBIAAgBIACgHIgBAAIgSgFIgBAAQgMgEACgNIAGgSIAAgBIgBAAIgIgCIAAAAIgGAUQgCALgNgBIgUgFIgBAAg");
	this.shape.setTransform(1.9,-1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#84949D","#4D5A5E"],[0,1],-2.4,-3.1,0,-2.4,-3.1,9).s().p("AgJA9QgMgCgKgGQgLgGgHgLQgPgVAEgYQACgMAGgKQAHgKALgIQAUgPAYAEQAMACALAHQAJAGAIALQAPAUgEAYQgCAMgGALQgHAJgLAIQgQAMgTAAIgJgBgAgJARIgFATQgBAEAEAAIAIACQADAAAAgCIAEgTQAEgJAKAAIATAFQADAAACgDIACgHQAAgEgDAAIgTgEQgJgEABgKIAFgTQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIgCgCIgIgBQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBABAAAAIAAABIgEAUIAAgBQgDAKgJgBIgUgGQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAAAABQAAAAAAAAIgDAIQAAAAAAABQAAABAAAAQABABAAAAQAAABABAAIABAAIAUAEIgBAAQAJAEgBAKg");
	this.shape_1.setTransform(1.7,-1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#2D3539","#7E939A"],[0,1],4.2,5,-4.1,-4.9).s().p("AgJA/QgNgCgLgGQgKgHgIgKQgQgXAFgYQACgNAHgKQAGgLAMgIQAUgPAZAEQANACALAHQAKAGAIALQAQAWgFAZQgCANgHAKQgGAKgMAIQgQAMgUAAIgJgBgAgigxQgLAIgHAKQgGAKgCAMQgEAYAPAVQAHALALAGQAKAGAMACQAXAEAVgPQALgIAHgJQAGgLACgMQAEgYgPgUQgIgLgJgGQgLgHgMgCIgKgBQgSAAgQAMg");
	this.shape_2.setTransform(1.7,-1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#374448").s().p("AgMAlIgBgBIAFgUQACgNgMgDIgUgEIAAgCIACgHIAAAAIABAAIAUAFQANABACgLIAGgUIAAAAIAIACIABAAIAAABIgGASQgCANAMAEIABAAIASAFIABAAIgCAHIAAABIgBABIgTgFIgBAAQgNgBgDALIAAAAIgEATIgBABg");
	this.shape_3.setTransform(1.9,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.7,-8.2,12.9,12.9);


(lib.GEN_screw03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#5A6B72","#414B50"],[0,1],3,3,-3,-3).s().p("AgFApIgIgCQgEAAABgEIAFgTQABgKgJgEIABAAIgUgEIgBAAQgBAAAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBIADgHQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAgBQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAIAUAGQAJABAEgJIAAAAIADgTIAAgBQAAgBABAAQAAAAABgBQAAAAABAAQABABABAAIAIABIACABQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIgFATQgBAKAJAFIATADQADABAAAEIgCAHQgCADgDgBIgTgEQgKgBgEAJIgDATQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAIAAgBgAgkgNIgCAHIAAACIAUAEQAMADgCANIgFAUIABABIAHACIABgBIAEgTIAAAAQADgLANABIABAAIATAFIABgBIAAgBIACgHIgBAAIgSgFIgBAAQgMgEACgNIAGgSIAAgBIgBAAIgIgCIAAAAIgGAUQgCALgNgBIgUgFIgBAAg");
	this.shape.setTransform(1.9,-1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#84949D","#4D5A5E"],[0,1],-2.4,-3.1,0,-2.4,-3.1,9).s().p("AgJA9QgMgCgKgGQgLgGgHgLQgPgVAEgYQACgMAGgKQAHgKALgIQAUgPAYAEQAMACALAHQAJAGAIALQAPAUgEAYQgCAMgGALQgHAJgLAIQgQAMgTAAIgJgBgAgJARIgFATQgBAEAEAAIAIACQADAAAAgCIAEgTQAEgJAKAAIATAFQADAAACgDIACgHQAAgEgDAAIgTgEQgJgEABgKIAFgTQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIgCgCIgIgBQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBABAAAAIAAABIgEAUIAAgBQgDAKgJgBIgUgGQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAAAABQAAAAAAAAIgDAIQAAAAAAABQAAABAAAAQABABAAAAQAAABABAAIABAAIAUAEIgBAAQAJAEgBAKg");
	this.shape_1.setTransform(1.7,-1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#2D3539","#7E939A"],[0,1],4.2,5,-4.1,-4.9).s().p("AgJA/QgNgCgLgGQgKgHgIgKQgQgXAFgYQACgNAHgKQAGgLAMgIQAUgPAZAEQANACALAHQAKAGAIALQAQAWgFAZQgCANgHAKQgGAKgMAIQgQAMgUAAIgJgBgAgigxQgLAIgHAKQgGAKgCAMQgEAYAPAVQAHALALAGQAKAGAMACQAXAEAVgPQALgIAHgJQAGgLACgMQAEgYgPgUQgIgLgJgGQgLgHgMgCIgKgBQgSAAgQAMg");
	this.shape_2.setTransform(1.7,-1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#374448").s().p("AgMAlIgBgBIAFgUQACgNgMgDIgUgEIAAgCIACgHIAAAAIABAAIAUAFQANABACgLIAGgUIAAAAIAIACIABAAIAAABIgGASQgCANAMAEIABAAIASAFIABAAIgCAHIAAABIgBABIgTgFIgBAAQgNgBgDALIAAAAIgEATIgBABg");
	this.shape_3.setTransform(1.9,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.7,-8.2,12.9,12.9);


(lib.GEN_screw02copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#84949D","#4D5A5E"],[0,1],-2.7,-3.5,0,-2.7,-3.5,10).s().p("AgKBFQgPgCgLgHQgLgHgJgMQgRgYAFgbQACgOAIgMQAHgLAMgJQAXgRAbAFQAOACAMAIQALAHAJAMQARAXgFAbQgCAPgIALQgHALgMAJQgSANgWAAIgKgBgAgKATIgFAVQgBAEAEABIAIACQAEAAAAgDIAFgVQAEgKALABIAWAFQADABACgEIACgIQABgEgEgBIgVgEQgLgFACgLIAGgVQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAAAAAIgJgBQgEgCgBADIAAABIgFAWIAAgBQgDAKgLAAIgWgHQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAQAAABAAAAQAAAAAAABIgDAIQgBADADACIABAAIAWAEIgBAAQALAEgCAMg");
	this.shape.setTransform(1.7,-1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#374448").s().p("AgOApIgBgBIAGgVQACgPgNgEIgWgFIAAgBIACgIIAAgBIABAAIAWAGQAOACADgNIAGgWIABAAIAIACIABAAIAAABIgGAVQgCAOANAEIABAAIAVAGIABAAIgDAIIAAABIgBABIgVgGIgBAAQgOgBgEAMIAAABIgFAVIgBAAg");
	this.shape_1.setTransform(2,-1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#5A6B72","#414B50"],[0,1],3.4,3.4,-3.3,-3.3).s().p("AgGAuIgJgCQgEgBABgEIAGgVQABgLgKgEIAAAAIgWgFIAAAAQgDgBABgEIACgIQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAIAWAGQALABAEgKIAAAAIAEgVIAAgBQABgDAEABIAIACQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgFAWQgCAKAKAGIAWAEQADAAAAAFIgDAIQgBADgEAAIgVgGQgMAAgEAKIgDAUQgCADgDAAIAAAAgAgogOIgCAIIAAABIAWAFQANAEgCAPIgGAVIABABIAIACIABAAIAFgVIAAgBQAEgMAOABIABAAIAVAGIABgBIAAgBIADgIIgBAAIgVgGIgBAAQgNgEACgOIAGgVIAAgBIgBAAIgIgCIgBAAIgGAWQgDANgOgCIgWgGIgBAAg");
	this.shape_2.setTransform(2,-1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#657381","#71838E"],[0,1],4.2,8,-4.1,-8).s().p("AgNBZQglgHgWgeQgWgfAGgiQAHglAfgWQAdgWAkAGQAkAGAWAfQAWAfgGAjQgGAkggAWQgYARgbAAIgNgBgAgng4QgMAJgHALQgIAMgCAOQgFAbARAYQAJAMALAHQAMAHAOACQAbAFAXgRQAMgJAHgLQAIgLACgPQAFgbgRgXQgJgMgLgHQgLgIgPgCIgLgBQgVAAgSANg");
	this.shape_3.setTransform(1.7,-1.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#2D3539","#7E939A"],[0,1],4.3,8.3,-2.2,-4.3).s().p("AgOBdQgngGgWghQgYggAHgkQAGgnAhgWQAfgXAlAGQAnAHAWAfQAXAggGAlQgHAmggAXQgZASgdAAIgOgBgAgzhIQgfAWgGAlQgGAiAWAfQAVAeAlAHQAiAGAfgWQAfgWAGgkQAGgjgVgfQgWgfglgGIgOgBQgcAAgXARg");
	this.shape_4.setTransform(1.8,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.7,-11.2,19,19);


(lib.GEN_screw02copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#84949D","#4D5A5E"],[0,1],-2.7,-3.5,0,-2.7,-3.5,10).s().p("AgKBFQgPgCgLgHQgLgHgJgMQgRgYAFgbQACgOAIgMQAHgLAMgJQAXgRAbAFQAOACAMAIQALAHAJAMQARAXgFAbQgCAPgIALQgHALgMAJQgSANgWAAIgKgBgAgKATIgFAVQgBAEAEABIAIACQAEAAAAgDIAFgVQAEgKALABIAWAFQADABACgEIACgIQABgEgEgBIgVgEQgLgFACgLIAGgVQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAAAAAIgJgBQgEgCgBADIAAABIgFAWIAAgBQgDAKgLAAIgWgHQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAQAAABAAAAQAAAAAAABIgDAIQgBADADACIABAAIAWAEIgBAAQALAEgCAMg");
	this.shape.setTransform(1.7,-1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#374448").s().p("AgOApIgBgBIAGgVQACgPgNgEIgWgFIAAgBIACgIIAAgBIABAAIAWAGQAOACADgNIAGgWIABAAIAIACIABAAIAAABIgGAVQgCAOANAEIABAAIAVAGIABAAIgDAIIAAABIgBABIgVgGIgBAAQgOgBgEAMIAAABIgFAVIgBAAg");
	this.shape_1.setTransform(2,-1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#5A6B72","#414B50"],[0,1],3.4,3.4,-3.3,-3.3).s().p("AgGAuIgJgCQgEgBABgEIAGgVQABgLgKgEIAAAAIgWgFIAAAAQgDgBABgEIACgIQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAIAWAGQALABAEgKIAAAAIAEgVIAAgBQABgDAEABIAIACQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgFAWQgCAKAKAGIAWAEQADAAAAAFIgDAIQgBADgEAAIgVgGQgMAAgEAKIgDAUQgCADgDAAIAAAAgAgogOIgCAIIAAABIAWAFQANAEgCAPIgGAVIABABIAIACIABAAIAFgVIAAgBQAEgMAOABIABAAIAVAGIABgBIAAgBIADgIIgBAAIgVgGIgBAAQgNgEACgOIAGgVIAAgBIgBAAIgIgCIgBAAIgGAWQgDANgOgCIgWgGIgBAAg");
	this.shape_2.setTransform(2,-1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#657381","#71838E"],[0,1],4.2,8,-4.1,-8).s().p("AgNBZQglgHgWgeQgWgfAGgiQAHglAfgWQAdgWAkAGQAkAGAWAfQAWAfgGAjQgGAkggAWQgYARgbAAIgNgBgAgng4QgMAJgHALQgIAMgCAOQgFAbARAYQAJAMALAHQAMAHAOACQAbAFAXgRQAMgJAHgLQAIgLACgPQAFgbgRgXQgJgMgLgHQgLgIgPgCIgLgBQgVAAgSANg");
	this.shape_3.setTransform(1.7,-1.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#2D3539","#7E939A"],[0,1],4.3,8.3,-2.2,-4.3).s().p("AgOBdQgngGgWghQgYggAHgkQAGgnAhgWQAfgXAlAGQAnAHAWAfQAXAggGAlQgHAmggAXQgZASgdAAIgOgBgAgzhIQgfAWgGAlQgGAiAWAfQAVAeAlAHQAiAGAfgWQAfgWAGgkQAGgjgVgfQgWgfglgGIgOgBQgcAAgXARg");
	this.shape_4.setTransform(1.8,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.7,-11.2,19,19);


(lib.GEN_screw01copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#6C7B8A","#58646B"],[0,1],4.1,2.1,0,4.1,2.1,17.9).s().p("AAABGIAViHQAWAGANAUQASAYgFAaQgFAdgYARQgTANgVAAIAAAAgAg4AoQgRgXAFgbQAFgdAYgQQAUgOAUABIgVCGQgVgGgPgUg");
	this.shape.setTransform(9.9,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#657381","#71838E"],[0,1],4.4,8.4,-4.3,-8.4).s().p("AgOBdQgngGgXggQgXghAHgkQAGgmAhgYQAfgXAlAHQAnAGAXAgQAXAhgHAlQgGAmghAXQgZASgdAAIgOgCgAgthAQgbAUgGAgQgFAfATAcQATAaAhAGQAfAFAbgTQAcgTAFghQAGgfgUgbQgUgbgggGIgNgBQgYAAgVAPg");
	this.shape_1.setTransform(9.9,10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#2D3539","#7E939A"],[0,1],4.5,8.8,-2.4,-4.5).s().p("AgPBiQgpgHgXgiQgZgiAHgmQAHgpAigYQAhgXAnAGQAoAHAYAhQAYAigGAnQgHAogiAYQgaATgfAAIgPgBgAg2hMQggAYgHAmQgGAkAXAhQAWAgAnAGQAlAHAggXQAggXAHgmQAGglgXghQgXgggmgGIgPgCQgdAAgZASg");
	this.shape_2.setTransform(10,10);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4A5557").s().p("AgHBFIgHgBIgBAAIAViIIABAAIAHACIACABIgVCGIgCAAg");
	this.shape_3.setTransform(10.5,10);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3F4649").s().p("AgGBFIgHgCIgCAAIAAAAIAViHIABAAIABAAIAIABIgVCIg");
	this.shape_4.setTransform(9.5,9.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#384547","#84949D"],[0,1],-4.3,-7,4.3,7.1).s().p("AgMBPQghgGgTgaQgTgcAFgfQAGggAbgUQAbgTAfAFQAgAGAUAbQAUAbgGAfQgFAhgcATQgVAPgZAAIgMgBgAgng3QgYAQgFAdQgFAbARAXQAPAUAVAGIABAAIACABIAHABIAAAAIACABIAGAAIACABQAVAAATgNQAYgRAFgdQAFgagSgYQgNgUgWgGIgCgBIgHgBIgBgBIgHAAIgCAAIgBAAIgBAAQgVAAgSANg");
	this.shape_5.setTransform(9.9,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20,20);


(lib.GEN_screw01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#6C7B8A","#58646B"],[0,1],4.1,2.1,0,4.1,2.1,17.9).s().p("AAABGIAViHQAWAGANAUQASAYgFAaQgFAdgYARQgTANgVAAIAAAAgAg4AoQgRgXAFgbQAFgdAYgQQAUgOAUABIgVCGQgVgGgPgUg");
	this.shape.setTransform(9.9,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#657381","#71838E"],[0,1],4.4,8.4,-4.3,-8.4).s().p("AgOBdQgngGgXggQgXghAHgkQAGgmAhgYQAfgXAlAHQAnAGAXAgQAXAhgHAlQgGAmghAXQgZASgdAAIgOgCgAgthAQgbAUgGAgQgFAfATAcQATAaAhAGQAfAFAbgTQAcgTAFghQAGgfgUgbQgUgbgggGIgNgBQgYAAgVAPg");
	this.shape_1.setTransform(9.9,10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#2D3539","#7E939A"],[0,1],4.5,8.8,-2.4,-4.5).s().p("AgPBiQgpgHgXgiQgZgiAHgmQAHgpAigYQAhgXAnAGQAoAHAYAhQAYAigGAnQgHAogiAYQgaATgfAAIgPgBgAg2hMQggAYgHAmQgGAkAXAhQAWAgAnAGQAlAHAggXQAggXAHgmQAGglgXghQgXgggmgGIgPgCQgdAAgZASg");
	this.shape_2.setTransform(10,10);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4A5557").s().p("AgHBFIgHgBIgBAAIAViIIABAAIAHACIACABIgVCGIgCAAg");
	this.shape_3.setTransform(10.5,10);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3F4649").s().p("AgGBFIgHgCIgCAAIAAAAIAViHIABAAIABAAIAIABIgVCIg");
	this.shape_4.setTransform(9.5,9.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#384547","#84949D"],[0,1],-4.3,-7,4.3,7.1).s().p("AgMBPQghgGgTgaQgTgcAFgfQAGggAbgUQAbgTAfAFQAgAGAUAbQAUAbgGAfQgFAhgcATQgVAPgZAAIgMgBgAgng3QgYAQgFAdQgFAbARAXQAPAUAVAGIABAAIACABIAHABIAAAAIACABIAGAAIACABQAVAAATgNQAYgRAFgdQAFgagSgYQgNgUgWgGIgCgBIgHgBIgBgBIgHAAIgCAAIgBAAIgBAAQgVAAgSANg");
	this.shape_5.setTransform(9.9,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20,20);


(lib.GEN_pbbase02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#131F39").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABg");
	this.shape.setTransform(24.8,13.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#19253F","#0C1832"],[0,1],-0.3,-0.6,0.4,0.7).s().p("AjkB5QgKAAAAgKIAAjdQAAgKAKAAIHJAAQAKAAAAAKIAADdQAAAKgKAAgAjlhmIAADMQAAAKAKAAIG1AAQAKAAAAgKIAAjMQAAgKgKAAIm1AAQgKAAAAAKg");
	this.shape_1.setTransform(24.9,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,47.9,24.4);


(lib.GEN_pbbase01copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#222222","#111111"],[0,1],-0.3,-0.6,0.4,0.7).s().p("AjkB5QgKAAAAgKIAAjdQAAgKAKAAIHJAAQAKAAAAAKIAADdQAAAKgKAAgAjlhmIAADMQAAAKAKAAIG1AAQAKAAAAgKIAAjMQAAgKgKAAIm1AAQgKAAAAAKg");
	this.shape.setTransform(24.9,13.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1A1A1A").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABg");
	this.shape_1.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,47.9,24.4);


(lib.GEN_pbbase01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#222222","#111111"],[0,1],-0.3,-0.6,0.4,0.7).s().p("AjkB5QgKAAAAgKIAAjdQAAgKAKAAIHJAAQAKAAAAAKIAADdQAAAKgKAAgAjlhmIAADMQAAAKAKAAIG1AAQAKAAAAgKIAAjMQAAgKgKAAIm1AAQgKAAAAAKg");
	this.shape.setTransform(24.9,13.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1A1A1A").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABg");
	this.shape_1.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,47.9,24.4);


(lib.RVALVEOrange = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lit - amber
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AgSAeIAAg7IAjAAIAAAKIgZAAIAAAOIAXAAIAAAIIgXAAIAAAQIAaAAIAAALg");
	this.shape.setTransform(37.2,13.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AgEAeIgSg7IALAAIALArIAMgrIALAAIgSA7g");
	this.shape_1.setTransform(32.5,13.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AgQAeIAAg7IAKAAIAAAwIAXAAIAAALg");
	this.shape_2.setTransform(28.7,13.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AAOAeIgFgOIgRAAIgFAOIgLAAIAUg7IAJAAIAUA7gAgGAGIAMAAIgGgVg");
	this.shape_3.setTransform(23.9,13.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AgEAeIgSg7IALAAIALArIAMgrIALAAIgSA7g");
	this.shape_4.setTransform(19.5,13.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9900").s().p("AAKAeIgIgNIgCgJIgEgCIgFgBIgCAAIAAAZIgKAAIAAg7IAVAAQAGAAAEACQAEABACAFQACAEAAAFQAAAIgDAEQgEACgHABIAGAFIAGAKIAGAMgAgLgDIAHAAIAHAAIAEgDIABgFIgBgFQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBAAIgGgBIgIAAg");
	this.shape_5.setTransform(13,13.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,153,0,0.753)").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABgAjaBnIG1AAIAAjMIm1AAg");
	this.shape_6.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// text
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3C3C3C").s().p("AgSAeIAAg7IAjAAIAAAKIgZAAIAAAOIAXAAIAAAIIgXAAIAAAQIAaAAIAAALg");
	this.shape_7.setTransform(37.2,13.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3C3C3C").s().p("AgEAeIgSg7IALAAIALArIAMgrIALAAIgSA7g");
	this.shape_8.setTransform(32.5,13.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAKAAIAAAwIAXAAIAAALg");
	this.shape_9.setTransform(28.7,13.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3C3C3C").s().p("AAOAeIgFgOIgRAAIgFAOIgLAAIAUg7IAJAAIAUA7gAgGAGIAMAAIgGgVg");
	this.shape_10.setTransform(23.9,13.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3C3C3C").s().p("AgEAeIgSg7IALAAIALArIAMgrIALAAIgSA7g");
	this.shape_11.setTransform(19.5,13.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3C3C3C").s().p("AAKAeIgIgNIgCgJIgEgCIgFgBIgCAAIAAAZIgKAAIAAg7IAVAAQAGAAAEACQAEABACAFQACAEAAAFQAAAIgDAEQgEACgHABIAGAFIAGAKIAGAMgAgLgDIAHAAIAHAAIAEgDIABgFIgBgFQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBAAIgGgBIgIAAg");
	this.shape_12.setTransform(13,13.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3C3C3C").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABgAjaBnIG1AAIAAjMIm1AAg");
	this.shape_13.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).wait(1));

	// base
	this.instance = new lib.GEN_pbbase01copy("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,47.9,24.4);


(lib.LVALVEOrange = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lit - amber
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AgSAeIAAg7IAjAAIAAAKIgZAAIAAAOIAXAAIAAAIIgXAAIAAAQIAaAAIAAALg");
	this.shape.setTransform(36.8,13.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AgEAeIgSg7IALAAIALArIAMgrIALAAIgSA7g");
	this.shape_1.setTransform(32,13.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AgQAeIAAg7IAKAAIAAAwIAXAAIAAALg");
	this.shape_2.setTransform(28.3,13.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AAOAeIgFgOIgRAAIgFAOIgLAAIAUg7IAJAAIAUA7gAgGAGIAMAAIgGgVg");
	this.shape_3.setTransform(23.4,13.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AgEAeIgSg7IALAAIALArIAMgrIALAAIgSA7g");
	this.shape_4.setTransform(19.1,13.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9900").s().p("AgQAeIAAg7IAKAAIAAAwIAXAAIAAALg");
	this.shape_5.setTransform(13,13.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,153,0,0.753)").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABgAjaBnIG1AAIAAjMIm1AAg");
	this.shape_6.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// text
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3C3C3C").s().p("AgSAeIAAg7IAjAAIAAAKIgZAAIAAAOIAXAAIAAAIIgXAAIAAAQIAaAAIAAALg");
	this.shape_7.setTransform(36.8,13.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3C3C3C").s().p("AgEAeIgSg7IALAAIALArIAMgrIALAAIgSA7g");
	this.shape_8.setTransform(32,13.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAKAAIAAAwIAXAAIAAALg");
	this.shape_9.setTransform(28.3,13.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3C3C3C").s().p("AAOAeIgFgOIgRAAIgFAOIgLAAIAUg7IAJAAIAUA7gAgGAGIAMAAIgGgVg");
	this.shape_10.setTransform(23.4,13.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3C3C3C").s().p("AgEAeIgSg7IALAAIALArIAMgrIALAAIgSA7g");
	this.shape_11.setTransform(19.1,13.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAKAAIAAAwIAXAAIAAALg");
	this.shape_12.setTransform(13,13.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3C3C3C").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABgAjaBnIG1AAIAAjMIm1AAg");
	this.shape_13.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).wait(1));

	// base
	this.instance = new lib.GEN_pbbase01copy("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,47.9,24.4);


(lib.ENGANTIICE1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C3C3C").s().p("AgRAeIAAg7IAjAAIAAALIgZAAIAAANIAXAAIAAAIIgXAAIAAAQIAZAAIAAALg");
	this.shape.setTransform(37.7,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C3C3C").s().p("AgNAYQgHgJAAgPQAAgNAHgJQAGgIAIAAQAIAAAGAGQAEAEACAIIgKADQgBgFgDgDQgDgCgEAAQgDAAgEAEQgDAFAAAKQAAALADAEQAEAFADABQAEgBADgDQADgCABgIIAKAFQgCAJgGAFQgFAFgIAAQgHAAgGgHg");
	this.shape_1.setTransform(32.8,17.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C3C3C").s().p("AgEAeIAAg7IAIAAIAAA7g");
	this.shape_2.setTransform(29.3,17.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3C3C3C").s().p("AgIAFIAAgKIARAAIAAAKg");
	this.shape_3.setTransform(27.2,18.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3C3C3C").s().p("AgDAeIAAg7IAIAAIAAA7g");
	this.shape_4.setTransform(25.1,17.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3C3C3C").s().p("AgDAeIAAgwIgPAAIAAgLIAlAAIAAALIgOAAIAAAwg");
	this.shape_5.setTransform(21.9,17.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3C3C3C").s().p("AAJAeIgSgmIAAAmIgKAAIAAg7IALAAIASAnIAAgnIAKAAIAAA7g");
	this.shape_6.setTransform(17.3,17.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3C3C3C").s().p("AANAeIgDgOIgTAAIgEAOIgKAAIATg7IAIAAIAUA7gAgFAGIALAAIgGgVg");
	this.shape_7.setTransform(12.2,17.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3C3C3C").s().p("AgKAbQgFgDgEgIQgDgHAAgJQAAgIADgIQAEgHAFgEQAFgDAGAAQAJAAAFAEQAGAFABAJIgKADQgBgFgDgDQgDgDgEABQgFAAgEAEQgEAGAAAJQAAAKAFAGQADAEAFAAIAGgBQADgBADgCIAAgJIgMAAIAAgHIAWAAIAAAWQgEADgGADQgGADgGAAQgFAAgGgEg");
	this.shape_8.setTransform(29.7,8.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3C3C3C").s().p("AAJAeIgSgmIAAAmIgKAAIAAg7IALAAIASAnIAAgnIAKAAIAAA7g");
	this.shape_9.setTransform(24.5,8.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3C3C3C").s().p("AgRAeIAAg7IAjAAIAAALIgZAAIAAANIAXAAIAAAIIgXAAIAAAQIAaAAIAAALg");
	this.shape_10.setTransform(19.7,8.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3C3C3C").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABgAjaBnIG1AAIAAjMIm1AAg");
	this.shape_11.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.GEN_pbbase01copy("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,47.9,24.4);


(lib.COWLVALVE2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lit - amber
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AgRAeIAAg7IAjAAIAAAKIgZAAIAAAOIAWAAIAAAIIgWAAIAAARIAaAAIAAAKg");
	this.shape.setTransform(42.9,12.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AgEAeIgSg7IALAAIALArIAMgrIALAAIgSA7g");
	this.shape_1.setTransform(38.7,12.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AgQAeIAAg7IAKAAIAAAwIAXAAIAAALg");
	this.shape_2.setTransform(35.4,12.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AAOAeIgFgOIgRAAIgFAOIgLAAIAUg7IAJAAIAUA7gAgGAGIAMAAIgGgUg");
	this.shape_3.setTransform(31.1,12.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AgEAeIgSg7IALAAIALArIAMgrIALAAIgSA7g");
	this.shape_4.setTransform(27.2,12.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9900").s().p("AgQAeIAAg7IAKAAIAAAwIAXAAIAAALg");
	this.shape_5.setTransform(22.1,12.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9900").s().p("AAKAeIgKgsIgIAsIgLAAIgMg7IAKAAIAIAoIAJgoIAKAAIAJAoIAHgoIAKAAIgMA7g");
	this.shape_6.setTransform(17,12.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9900").s().p("AgQAXQgHgIAAgPQAAgJAEgHQADgHAFgDQAFgEAGAAQAKAAAHAIQAHAJAAANQAAAPgHAIQgHAIgKAAQgJAAgHgIgAgIgOQgEAFAAAJQAAAKAEAFQAEAGAEgBQAFABAEgGQAEgFAAgKQAAgKgEgEQgDgFgGgBQgFABgDAFg");
	this.shape_7.setTransform(11.5,12.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF9900").s().p("AgNAXQgHgIAAgPQAAgOAHgIQAGgIAIAAQAIAAAGAGQAEAEACAIIgKADQgBgFgDgCQgDgEgEAAQgDABgEAFQgDAEAAAKQAAALADAEQAEAGADgBQAEAAADgCQADgEABgGIAKADQgCAKgGAGQgFAEgIAAQgHAAgGgIg");
	this.shape_8.setTransform(6.8,12.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,153,0,0.753)").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABgAjaBnIG1AAIAAjMIm1AAg");
	this.shape_9.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// text
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3C3C3C").s().p("AgRAeIAAg7IAjAAIAAAKIgZAAIAAAOIAWAAIAAAIIgWAAIAAARIAaAAIAAAKg");
	this.shape_10.setTransform(42.9,12.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3C3C3C").s().p("AgEAeIgSg7IALAAIALArIAMgrIALAAIgSA7g");
	this.shape_11.setTransform(38.7,12.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAKAAIAAAwIAXAAIAAALg");
	this.shape_12.setTransform(35.4,12.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3C3C3C").s().p("AAOAeIgFgOIgRAAIgFAOIgLAAIAUg7IAJAAIAUA7gAgGAGIAMAAIgGgUg");
	this.shape_13.setTransform(31.1,12.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3C3C3C").s().p("AgEAeIgSg7IALAAIALArIAMgrIALAAIgSA7g");
	this.shape_14.setTransform(27.2,12.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAKAAIAAAwIAXAAIAAALg");
	this.shape_15.setTransform(22.1,12.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3C3C3C").s().p("AAKAeIgKgsIgIAsIgLAAIgMg7IAKAAIAIAoIAJgoIAKAAIAJAoIAHgoIAKAAIgMA7g");
	this.shape_16.setTransform(17,12.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3C3C3C").s().p("AgQAXQgHgIAAgPQAAgJAEgHQADgHAFgDQAFgEAGAAQAKAAAHAIQAHAJAAANQAAAPgHAIQgHAIgKAAQgJAAgHgIgAgIgOQgEAFAAAJQAAAKAEAFQAEAGAEgBQAFABAEgGQAEgFAAgKQAAgKgEgEQgDgFgGgBQgFABgDAFg");
	this.shape_17.setTransform(11.5,12.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3C3C3C").s().p("AgNAXQgHgIAAgPQAAgOAHgIQAGgIAIAAQAIAAAGAGQAEAEACAIIgKADQgBgFgDgCQgDgEgEAAQgDABgEAFQgDAEAAAKQAAALADAEQAEAGADgBQAEAAADgCQADgEABgGIAKADQgCAKgGAGQgFAEgIAAQgHAAgGgIg");
	this.shape_18.setTransform(6.8,12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).wait(1));

	// base
	this.instance = new lib.GEN_pbbase01copy("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,47.9,24.4);


(lib.COWLVALVE1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lit - amber
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AgRAeIAAg7IAjAAIAAAKIgZAAIAAAOIAWAAIAAAIIgWAAIAAARIAaAAIAAAKg");
	this.shape.setTransform(42.9,12.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AgEAeIgSg7IALAAIALArIAMgrIALAAIgSA7g");
	this.shape_1.setTransform(38.7,12.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AgQAeIAAg7IAKAAIAAAwIAXAAIAAALg");
	this.shape_2.setTransform(35.4,12.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AAOAeIgFgOIgRAAIgFAOIgLAAIAUg7IAJAAIAUA7gAgGAGIAMAAIgGgUg");
	this.shape_3.setTransform(31.1,12.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AgEAeIgSg7IALAAIALArIAMgrIALAAIgSA7g");
	this.shape_4.setTransform(27.2,12.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9900").s().p("AgQAeIAAg7IAKAAIAAAwIAXAAIAAALg");
	this.shape_5.setTransform(22.1,12.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9900").s().p("AAKAeIgKgsIgIAsIgLAAIgMg7IAKAAIAIAoIAJgoIAKAAIAJAoIAHgoIAKAAIgMA7g");
	this.shape_6.setTransform(17,12.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9900").s().p("AgQAXQgHgIAAgPQAAgJAEgHQADgHAFgDQAFgEAGAAQAKAAAHAIQAHAJAAANQAAAPgHAIQgHAIgKAAQgJAAgHgIgAgIgOQgEAFAAAJQAAAKAEAFQAEAGAEgBQAFABAEgGQAEgFAAgKQAAgKgEgEQgDgFgGgBQgFABgDAFg");
	this.shape_7.setTransform(11.5,12.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF9900").s().p("AgNAXQgHgIAAgPQAAgOAHgIQAGgIAIAAQAIAAAGAGQAEAEACAIIgKADQgBgFgDgCQgDgEgEAAQgDABgEAFQgDAEAAAKQAAALADAEQAEAGADgBQAEAAADgCQADgEABgGIAKADQgCAKgGAGQgFAEgIAAQgHAAgGgIg");
	this.shape_8.setTransform(6.8,12.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,153,0,0.753)").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABgAjaBnIG1AAIAAjMIm1AAg");
	this.shape_9.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// text
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3C3C3C").s().p("AgRAeIAAg7IAjAAIAAAKIgZAAIAAAOIAWAAIAAAIIgWAAIAAARIAaAAIAAAKg");
	this.shape_10.setTransform(42.9,12.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3C3C3C").s().p("AgEAeIgSg7IALAAIALArIAMgrIALAAIgSA7g");
	this.shape_11.setTransform(38.7,12.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAKAAIAAAwIAXAAIAAALg");
	this.shape_12.setTransform(35.4,12.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3C3C3C").s().p("AAOAeIgFgOIgRAAIgFAOIgLAAIAUg7IAJAAIAUA7gAgGAGIAMAAIgGgUg");
	this.shape_13.setTransform(31.1,12.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3C3C3C").s().p("AgEAeIgSg7IALAAIALArIAMgrIALAAIgSA7g");
	this.shape_14.setTransform(27.2,12.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAKAAIAAAwIAXAAIAAALg");
	this.shape_15.setTransform(22.1,12.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3C3C3C").s().p("AAKAeIgKgsIgIAsIgLAAIgMg7IAKAAIAIAoIAJgoIAKAAIAJAoIAHgoIAKAAIgMA7g");
	this.shape_16.setTransform(17,12.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3C3C3C").s().p("AgQAXQgHgIAAgPQAAgJAEgHQADgHAFgDQAFgEAGAAQAKAAAHAIQAHAJAAANQAAAPgHAIQgHAIgKAAQgJAAgHgIgAgIgOQgEAFAAAJQAAAKAEAFQAEAGAEgBQAFABAEgGQAEgFAAgKQAAgKgEgEQgDgFgGgBQgFABgDAFg");
	this.shape_17.setTransform(11.5,12.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3C3C3C").s().p("AgNAXQgHgIAAgPQAAgOAHgIQAGgIAIAAQAIAAAGAGQAEAEACAIIgKADQgBgFgDgCQgDgEgEAAQgDABgEAFQgDAEAAAKQAAALADAEQAEAGADgBQAEAAADgCQADgEABgGIAKADQgCAKgGAGQgFAEgIAAQgHAAgGgIg");
	this.shape_18.setTransform(6.8,12.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3C3C3C").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABgAjaBnIG1AAIAAjMIm1AAg");
	this.shape_19.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).wait(1));

	// base
	this.instance = new lib.GEN_pbbase01copy("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,47.9,24.4);


(lib.ANTIICE_cowlantiice2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C3C3C").s().p("AgRAeIAAg7IAjAAIAAALIgZAAIAAANIAXAAIAAAIIgXAAIAAAQIAZAAIAAALg");
	this.shape.setTransform(37.7,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C3C3C").s().p("AgNAYQgHgJAAgPQAAgNAHgJQAGgIAIAAQAIAAAGAGQAEAEACAIIgKADQgBgFgDgDQgDgCgEAAQgDAAgEAEQgDAFAAAKQAAALADAEQAEAFADABQAEgBADgDQADgCABgIIAKAFQgCAJgGAFQgFAFgIAAQgHAAgGgHg");
	this.shape_1.setTransform(32.8,17.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C3C3C").s().p("AgEAeIAAg7IAIAAIAAA7g");
	this.shape_2.setTransform(29.3,17.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3C3C3C").s().p("AgIAFIAAgKIARAAIAAAKg");
	this.shape_3.setTransform(27.2,18.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3C3C3C").s().p("AgDAeIAAg7IAIAAIAAA7g");
	this.shape_4.setTransform(25.1,17.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3C3C3C").s().p("AgDAeIAAgwIgPAAIAAgLIAlAAIAAALIgOAAIAAAwg");
	this.shape_5.setTransform(21.9,17.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3C3C3C").s().p("AAJAeIgSgmIAAAmIgKAAIAAg7IALAAIASAnIAAgnIAKAAIAAA7g");
	this.shape_6.setTransform(17.3,17.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3C3C3C").s().p("AANAeIgDgOIgTAAIgEAOIgKAAIATg7IAIAAIAUA7gAgFAGIALAAIgGgVg");
	this.shape_7.setTransform(12.2,17.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAKAAIAAAwIAXAAIAAALg");
	this.shape_8.setTransform(33.6,8.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3C3C3C").s().p("AAKAeIgKgsIgIAsIgLAAIgMg7IAKAAIAIAoIAJgoIAKAAIAJAoIAHgoIAKAAIgMA7g");
	this.shape_9.setTransform(27.9,8.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3C3C3C").s().p("AgQAYQgHgJAAgPQAAgJAEgHQADgHAFgEQAFgDAGAAQAKAAAHAJQAHAHAAAOQAAAPgHAJQgHAHgKAAQgJAAgHgHgAgIgPQgEAGAAAJQAAAKAEAGQAEAEAEAAQAFAAAEgEQAEgGAAgKQAAgJgEgGQgDgEgGAAQgFAAgDAEg");
	this.shape_10.setTransform(22,8.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3C3C3C").s().p("AgNAYQgHgJAAgPQAAgNAHgJQAGgIAIAAQAIAAAGAGQAEAEACAIIgKADQgBgFgDgDQgDgCgEAAQgDAAgEAEQgDAFAAAKQAAALADAFQAEAEADAAQAEAAADgDQADgCABgIIAKAEQgCALgGAEQgFAFgIAAQgHAAgGgHg");
	this.shape_11.setTransform(16.7,8.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3C3C3C").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABgAjaBnIG1AAIAAjMIm1AAg");
	this.shape_12.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.GEN_pbbase01copy("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,47.9,24.4);


(lib.ANTIICE_cowlantiice2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C3C3C").s().p("AgRAeIAAg7IAjAAIAAALIgZAAIAAANIAXAAIAAAIIgXAAIAAAQIAZAAIAAALg");
	this.shape.setTransform(37.7,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C3C3C").s().p("AgNAYQgHgJAAgPQAAgNAHgJQAGgIAIAAQAIAAAGAGQAEAEACAIIgKADQgBgFgDgDQgDgCgEAAQgDAAgEAEQgDAFAAAKQAAALADAEQAEAFADABQAEgBADgDQADgCABgIIAKAFQgCAJgGAFQgFAFgIAAQgHAAgGgHg");
	this.shape_1.setTransform(32.8,17.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C3C3C").s().p("AgEAeIAAg7IAIAAIAAA7g");
	this.shape_2.setTransform(29.3,17.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3C3C3C").s().p("AgIAFIAAgKIARAAIAAAKg");
	this.shape_3.setTransform(27.2,18.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3C3C3C").s().p("AgDAeIAAg7IAIAAIAAA7g");
	this.shape_4.setTransform(25.1,17.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3C3C3C").s().p("AgDAeIAAgwIgPAAIAAgLIAlAAIAAALIgOAAIAAAwg");
	this.shape_5.setTransform(21.9,17.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3C3C3C").s().p("AAJAeIgSgmIAAAmIgKAAIAAg7IALAAIASAnIAAgnIAKAAIAAA7g");
	this.shape_6.setTransform(17.3,17.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3C3C3C").s().p("AANAeIgDgOIgTAAIgEAOIgKAAIATg7IAIAAIAUA7gAgFAGIALAAIgGgVg");
	this.shape_7.setTransform(12.2,17.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAKAAIAAAwIAXAAIAAALg");
	this.shape_8.setTransform(33.6,8.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3C3C3C").s().p("AAKAeIgKgsIgIAsIgLAAIgMg7IAKAAIAIAoIAJgoIAKAAIAJAoIAHgoIAKAAIgMA7g");
	this.shape_9.setTransform(27.9,8.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3C3C3C").s().p("AgQAYQgHgJAAgPQAAgJAEgHQADgHAFgEQAFgDAGAAQAKAAAHAJQAHAHAAAOQAAAPgHAJQgHAHgKAAQgJAAgHgHgAgIgPQgEAGAAAJQAAAKAEAGQAEAEAEAAQAFAAAEgEQAEgGAAgKQAAgJgEgGQgDgEgGAAQgFAAgDAEg");
	this.shape_10.setTransform(22,8.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3C3C3C").s().p("AgNAYQgHgJAAgPQAAgNAHgJQAGgIAIAAQAIAAAGAGQAEAEACAIIgKADQgBgFgDgDQgDgCgEAAQgDAAgEAEQgDAFAAAKQAAALADAFQAEAEADAAQAEAAADgDQADgCABgIIAKAEQgCALgGAEQgFAFgIAAQgHAAgGgHg");
	this.shape_11.setTransform(16.7,8.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3C3C3C").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABgAjaBnIG1AAIAAjMIm1AAg");
	this.shape_12.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.GEN_pbbase01("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,47.9,24.4);


(lib.ANTIICE_cowlantiice1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C3C3C").s().p("AgRAeIAAg7IAjAAIAAALIgZAAIAAANIAXAAIAAAIIgXAAIAAAQIAZAAIAAALg");
	this.shape.setTransform(37.7,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C3C3C").s().p("AgNAYQgHgJAAgPQAAgNAHgJQAGgIAIAAQAIAAAGAGQAEAEACAIIgKADQgBgFgDgDQgDgCgEAAQgDAAgEAEQgDAFAAAKQAAALADAEQAEAFADABQAEgBADgDQADgCABgIIAKAFQgCAJgGAFQgFAFgIAAQgHAAgGgHg");
	this.shape_1.setTransform(32.8,17.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C3C3C").s().p("AgEAeIAAg7IAIAAIAAA7g");
	this.shape_2.setTransform(29.3,17.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3C3C3C").s().p("AgIAFIAAgKIARAAIAAAKg");
	this.shape_3.setTransform(27.2,18.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3C3C3C").s().p("AgDAeIAAg7IAIAAIAAA7g");
	this.shape_4.setTransform(25.1,17.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3C3C3C").s().p("AgDAeIAAgwIgPAAIAAgLIAlAAIAAALIgOAAIAAAwg");
	this.shape_5.setTransform(21.9,17.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3C3C3C").s().p("AAJAeIgSgmIAAAmIgKAAIAAg7IALAAIASAnIAAgnIAKAAIAAA7g");
	this.shape_6.setTransform(17.3,17.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3C3C3C").s().p("AANAeIgDgOIgTAAIgEAOIgKAAIATg7IAIAAIAUA7gAgFAGIALAAIgGgVg");
	this.shape_7.setTransform(12.2,17.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAKAAIAAAwIAXAAIAAALg");
	this.shape_8.setTransform(33.6,8.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3C3C3C").s().p("AAKAeIgKgsIgIAsIgLAAIgMg7IAKAAIAIAoIAJgoIAKAAIAJAoIAHgoIAKAAIgMA7g");
	this.shape_9.setTransform(27.9,8.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3C3C3C").s().p("AgQAYQgHgJAAgPQAAgJAEgHQADgHAFgEQAFgDAGAAQAKAAAHAJQAHAHAAAOQAAAPgHAJQgHAHgKAAQgJAAgHgHgAgIgPQgEAGAAAJQAAAKAEAGQAEAEAEAAQAFAAAEgEQAEgGAAgKQAAgJgEgGQgDgEgGAAQgFAAgDAEg");
	this.shape_10.setTransform(22,8.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3C3C3C").s().p("AgNAYQgHgJAAgPQAAgNAHgJQAGgIAIAAQAIAAAGAGQAEAEACAIIgKADQgBgFgDgDQgDgCgEAAQgDAAgEAEQgDAFAAAKQAAALADAFQAEAEADAAQAEAAADgDQADgCABgIIAKAEQgCALgGAEQgFAFgIAAQgHAAgGgHg");
	this.shape_11.setTransform(16.7,8.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3C3C3C").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABgAjaBnIG1AAIAAjMIm1AAg");
	this.shape_12.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.GEN_pbbase01copy("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,47.9,24.4);


(lib.ANTIICE_cowlantiice1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C3C3C").s().p("AgRAeIAAg7IAjAAIAAALIgZAAIAAANIAXAAIAAAIIgXAAIAAAQIAZAAIAAALg");
	this.shape.setTransform(37.7,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C3C3C").s().p("AgNAYQgHgJAAgPQAAgNAHgJQAGgIAIAAQAIAAAGAGQAEAEACAIIgKADQgBgFgDgDQgDgCgEAAQgDAAgEAEQgDAFAAAKQAAALADAEQAEAFADABQAEgBADgDQADgCABgIIAKAFQgCAJgGAFQgFAFgIAAQgHAAgGgHg");
	this.shape_1.setTransform(32.8,17.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C3C3C").s().p("AgEAeIAAg7IAIAAIAAA7g");
	this.shape_2.setTransform(29.3,17.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3C3C3C").s().p("AgIAFIAAgKIARAAIAAAKg");
	this.shape_3.setTransform(27.2,18.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3C3C3C").s().p("AgDAeIAAg7IAIAAIAAA7g");
	this.shape_4.setTransform(25.1,17.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3C3C3C").s().p("AgDAeIAAgwIgPAAIAAgLIAlAAIAAALIgOAAIAAAwg");
	this.shape_5.setTransform(21.9,17.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3C3C3C").s().p("AAJAeIgSgmIAAAmIgKAAIAAg7IALAAIASAnIAAgnIAKAAIAAA7g");
	this.shape_6.setTransform(17.3,17.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3C3C3C").s().p("AANAeIgDgOIgTAAIgEAOIgKAAIATg7IAIAAIAUA7gAgFAGIALAAIgGgVg");
	this.shape_7.setTransform(12.2,17.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAKAAIAAAwIAXAAIAAALg");
	this.shape_8.setTransform(33.6,8.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3C3C3C").s().p("AAKAeIgKgsIgIAsIgLAAIgMg7IAKAAIAIAoIAJgoIAKAAIAJAoIAHgoIAKAAIgMA7g");
	this.shape_9.setTransform(27.9,8.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3C3C3C").s().p("AgQAYQgHgJAAgPQAAgJAEgHQADgHAFgEQAFgDAGAAQAKAAAHAJQAHAHAAAOQAAAPgHAJQgHAHgKAAQgJAAgHgHgAgIgPQgEAGAAAJQAAAKAEAGQAEAEAEAAQAFAAAEgEQAEgGAAgKQAAgJgEgGQgDgEgGAAQgFAAgDAEg");
	this.shape_10.setTransform(22,8.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3C3C3C").s().p("AgNAYQgHgJAAgPQAAgNAHgJQAGgIAIAAQAIAAAGAGQAEAEACAIIgKADQgBgFgDgDQgDgCgEAAQgDAAgEAEQgDAFAAAKQAAALADAFQAEAEADAAQAEAAADgDQADgCABgIIAKAEQgCALgGAEQgFAFgIAAQgHAAgGgHg");
	this.shape_11.setTransform(16.7,8.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3C3C3C").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABgAjaBnIG1AAIAAjMIm1AAg");
	this.shape_12.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.GEN_pbbase01("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,47.9,24.4);


(lib.ANITICE_basecopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.instance = new lib.GEN_screw02copy2("synched",0);
	this.instance.setTransform(261.8,242.9,1,1,0,0,0,10,10);

	this.instance_1 = new lib.GEN_screw02copy2("synched",0);
	this.instance_1.setTransform(44.8,285.7,1,1,0,0,0,10,10);

	this.instance_2 = new lib.GEN_screw03copy("synched",0);
	this.instance_2.setTransform(265.6,142.3,1,1,0,0,0,1.8,-1.8);

	this.instance_3 = new lib.GEN_screw03copy("synched",0);
	this.instance_3.setTransform(26.8,142.3,1,1,0,0,0,1.8,-1.8);

	this.instance_4 = new lib.GEN_screw01copy("synched",0);
	this.instance_4.setTransform(278.2,160.3,1,1,0,0,0,10,10);

	this.instance_5 = new lib.GEN_screw01copy("synched",0);
	this.instance_5.setTransform(10.7,160.3,1,1,0,0,0,10,10);

	this.instance_6 = new lib.GEN_screw01copy("synched",0);
	this.instance_6.setTransform(278.2,274.2,1,1,0,0,0,10,10);

	this.instance_7 = new lib.GEN_screw01copy("synched",0);
	this.instance_7.setTransform(10.7,274.2,1,1,0,0,0,10,10);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,2,1).p("AAAllIAALL");
	this.shape.setTransform(145.4,256.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#7E8D9A","#4E616D"],[0,1],-1.1,-3.8,1.2,3.9).s().p("AyYGSQgMABgHgEQgMgFgFgMQgDgGAAgLIAArDIAAgWQAAgKADgIQAFgLAMgFQAHgEAMABMAkzAAAQAIAAAJADQALAEAGAMQADAJAAAJIAAAZIAALAQAAAJgDAIQgGANgLAEQgHADgKAAgAyrlsIAALYQAAASATAAMAkxAAAQATAAAAgSIAArYQAAgRgTgBMgkxAAAQgTACAAAQg");
	this.shape_1.setTransform(144.7,257.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6C7B8A").s().p("AyYF+QgTAAAAgSIAArYQAAgQATgCMAkxAAAQATABAAARIAALYQAAASgTAAgAAGFbIAArMg");
	this.shape_2.setTransform(144.7,257.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#657381").s().p("A2iNEIAA6HMAtFAAAIAAaHgAynAIQgNAFgEAMQgDAHAAAKIAAAWIAALGQAAAKADAHQAEALANAFQAHAEALAAMAkzAAAQALgBAGgDQAMgEAFgMQADgIAAgJIAArDIAAgZQAAgJgDgIQgFgMgMgFQgIgDgJAAMgkzAAAQgLAAgHADg");
	this.shape_3.setTransform(144.4,217.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,133.4,288.7,167.4);


(lib.ANITICE_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.instance = new lib.GEN_screw02copy("synched",0);
	this.instance.setTransform(261.8,242.9,1,1,0,0,0,10,10);

	this.instance_1 = new lib.GEN_screw02copy("synched",0);
	this.instance_1.setTransform(44.8,285.7,1,1,0,0,0,10,10);

	this.instance_2 = new lib.GEN_screw03("synched",0);
	this.instance_2.setTransform(262.4,142.3,1,1,0,0,0,1.8,-1.8);

	this.instance_3 = new lib.GEN_screw03("synched",0);
	this.instance_3.setTransform(29.9,142.3,1,1,0,0,0,1.8,-1.8);

	this.instance_4 = new lib.GEN_screw01("synched",0);
	this.instance_4.setTransform(278.2,160.3,1,1,0,0,0,10,10);

	this.instance_5 = new lib.GEN_screw01("synched",0);
	this.instance_5.setTransform(10.7,160.3,1,1,0,0,0,10,10);

	this.instance_6 = new lib.GEN_screw01("synched",0);
	this.instance_6.setTransform(278.2,274.2,1,1,0,0,0,10,10);

	this.instance_7 = new lib.GEN_screw01("synched",0);
	this.instance_7.setTransform(10.7,274.2,1,1,0,0,0,10,10);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,2,1).p("AAAllIAALL");
	this.shape.setTransform(145.4,256.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#7E8D9A","#4E616D"],[0,1],-1.1,-3.8,1.2,3.9).s().p("AyYGSQgMABgHgEQgMgFgFgMQgDgGAAgLIAArDIAAgWQAAgKADgIQAFgLAMgFQAHgEAMABMAkzAAAQAIAAAJADQALAEAGAMQADAJAAAJIAAAZIAALAQAAAJgDAIQgGANgLAEQgHADgKAAgAyrlsIAALYQAAASATAAMAkxAAAQATAAAAgSIAArYQAAgRgTgBMgkxAAAQgTACAAAQg");
	this.shape_1.setTransform(144.7,257.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6C7B8A").s().p("AyYF+QgTAAAAgSIAArYQAAgQATgCMAkxAAAQATABAAARIAALYQAAASgTAAgAAGFbIAArMg");
	this.shape_2.setTransform(144.7,257.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#657381").s().p("A2iNEIAA6HMAtFAAAIAAaHgAynAIQgNAFgEAMQgDAHAAAKIAAAWIAALGQAAAKADAHQAEALANAFQAHAEALAAMAkzAAAQALgBAGgDQAMgEAFgMQADgIAAgJIAArDIAAgZQAAgJgDgIQgFgMgMgFQgIgDgJAAMgkzAAAQgLAAgHADg");
	this.shape_3.setTransform(144.4,217.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,133.4,288.7,167.4);


(lib.ANTIICE_Rvalveopen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#243A6C").s().p("AAJAeIgSgmIAAAmIgKAAIAAg7IAKAAIATAnIAAgnIAJAAIAAA7g");
	this.shape.setTransform(32.2,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#243A6C").s().p("AgSAeIAAg7IAjAAIAAALIgZAAIAAANIAXAAIAAAIIgXAAIAAAQIAbAAIAAALg");
	this.shape_1.setTransform(27.4,17.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#243A6C").s().p("AgSAeIAAg7IARAAQAHAAACABQAFACADAEQADAEAAAIQAAAGgDAEQgCAEgEACQgEABgHAAIgHAAIAAAXgAgIgBIAGAAIAGgBIADgDQABgCAAgDQAAgDgBgCIgDgDIgHAAIgFAAg");
	this.shape_2.setTransform(22.8,17.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#243A6C").s().p("AgQAYQgHgJAAgPQAAgJAEgHQADgHAFgEQAFgDAGAAQAKAAAHAJQAHAHAAAOQAAAPgHAJQgHAHgKAAQgJAAgHgHgAgIgPQgEAGAAAJQAAAKAEAFQAEAFAEABQAFgBAEgFQAEgFAAgKQAAgKgEgFQgDgEgGAAQgFAAgDAEg");
	this.shape_3.setTransform(17.7,17.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#243A6C").s().p("AgSAeIAAg7IAjAAIAAALIgZAAIAAANIAXAAIAAAIIgXAAIAAAQIAaAAIAAALg");
	this.shape_4.setTransform(37.2,8.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#243A6C").s().p("AgEAeIgSg7IALAAIALArIAMgrIALAAIgSA7g");
	this.shape_5.setTransform(32.5,8.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#243A6C").s().p("AgQAeIAAg7IAKAAIAAAwIAXAAIAAALg");
	this.shape_6.setTransform(28.7,8.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#243A6C").s().p("AAOAeIgFgOIgRAAIgFAOIgLAAIAUg7IAJAAIAUA7gAgGAGIAMAAIgGgVg");
	this.shape_7.setTransform(23.9,8.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#243A6C").s().p("AgEAeIgSg7IALAAIALArIAMgrIALAAIgSA7g");
	this.shape_8.setTransform(19.5,8.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#243A6C").s().p("AAKAeIgIgNIgCgJIgEgCIgFgBIgCAAIAAAZIgKAAIAAg7IAVAAQAGAAAEACQAEACACAEQACAEAAAFQAAAIgDAEQgEACgHABIAGAFIAGAKIAGAMgAgLgDIAHAAIAHAAIAEgDIABgFIgBgFQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBAAIgGAAIgIAAg");
	this.shape_9.setTransform(13,8.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0D1526").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABgAjaBnIG1AAIAAjMIm1AAg");
	this.shape_10.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.GEN_pbbase02("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,47.9,24.4);


(lib.ANTIICE_Lvalveopen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#243A6C").s().p("AAJAeIgSgmIAAAmIgKAAIAAg7IAKAAIATAnIAAgnIAJAAIAAA7g");
	this.shape.setTransform(32.2,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#243A6C").s().p("AgSAeIAAg7IAjAAIAAALIgZAAIAAANIAXAAIAAAIIgXAAIAAAQIAbAAIAAALg");
	this.shape_1.setTransform(27.4,17.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#243A6C").s().p("AgSAeIAAg7IARAAQAHAAACABQAFACADAEQADAEAAAIQAAAGgDAEQgCAEgEACQgEABgHAAIgHAAIAAAXgAgIgBIAGAAIAGgBIADgDQABgCAAgDQAAgDgBgCIgDgDIgHAAIgFAAg");
	this.shape_2.setTransform(22.8,17.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#243A6C").s().p("AgQAYQgHgJAAgPQAAgJAEgHQADgHAFgEQAFgDAGAAQAKAAAHAJQAHAHAAAOQAAAPgHAJQgHAHgKAAQgJAAgHgHgAgIgPQgEAGAAAJQAAAKAEAFQAEAFAEABQAFgBAEgFQAEgFAAgKQAAgKgEgFQgDgEgGAAQgFAAgDAEg");
	this.shape_3.setTransform(17.7,17.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#243A6C").s().p("AgSAeIAAg7IAjAAIAAALIgZAAIAAANIAXAAIAAAIIgXAAIAAAQIAaAAIAAALg");
	this.shape_4.setTransform(36.8,8.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#243A6C").s().p("AgEAeIgSg7IALAAIALArIAMgrIALAAIgSA7g");
	this.shape_5.setTransform(32,8.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#243A6C").s().p("AgQAeIAAg7IAKAAIAAAwIAXAAIAAALg");
	this.shape_6.setTransform(28.3,8.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#243A6C").s().p("AAOAeIgFgOIgRAAIgFAOIgLAAIAUg7IAJAAIAUA7gAgGAGIAMAAIgGgVg");
	this.shape_7.setTransform(23.4,8.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#243A6C").s().p("AgEAeIgSg7IALAAIALArIAMgrIALAAIgSA7g");
	this.shape_8.setTransform(19.1,8.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#243A6C").s().p("AgQAeIAAg7IAKAAIAAAwIAXAAIAAALg");
	this.shape_9.setTransform(13,8.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0D1526").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABgAjaBnIG1AAIAAjMIm1AAg");
	this.shape_10.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.GEN_pbbase02("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,47.9,24.4);


(lib.ANTIICE_cowlvalveopen2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#243A6C").s().p("AAGAeIgKgjIAAAjIgJAAIAAg7IALAAIAIAeIAAgeIAJAAIAAA7g");
	this.shape.setTransform(30,17.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#243A6C").s().p("AgLAeIAAg7IAXAAIAAAKIgMAAIAAAPIAIAAIAAAIIgIAAIAAAQIAMAAIAAAKg");
	this.shape_1.setTransform(26.6,17.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#243A6C").s().p("AgOAeIAAg7IALAAQAIAAAFAEQAFAFAAAJQAAAGgCAEQgBACgDACQgEACgFABIgDAAIAAAYgAgDgBIACAAIABgBIADgDIAAgFIgBgHIgCgCIgBAAIgCAAg");
	this.shape_2.setTransform(23.3,17.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#243A6C").s().p("AAAAfQgEAAgDgDQgDgDgCgHQgCgHAAgLQAAgKACgHQACgHADgDQADgDAEAAQAFAAADADQAEADABAHQACAHAAAKQAAALgCAHQgBAHgEADQgDADgEAAIgBAAgAgBgTIgBAEIgBAKIAAALIABAKIABAEIABACQAAAAAAAAQABAAAAgBQAAAAAAAAQABAAAAgBIABgEIAAgKIAAgLIAAgKIgBgEQAAgBgBAAQAAAAAAAAQAAgBgBAAQAAAAAAAAIgBACg");
	this.shape_3.setTransform(19.4,17.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#243A6C").s().p("AgLAeIAAg7IAXAAIAAAKIgMAAIAAAPIAIAAIAAAIIgIAAIAAAQIAMAAIAAAKg");
	this.shape_4.setTransform(40,8.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#243A6C").s().p("AgFAeIgJg7IALAAIADApIAGgpIAJAAIgJA7g");
	this.shape_5.setTransform(36.6,8.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#243A6C").s().p("AgLAeIAAg7IALAAIAAAxIAMAAIAAAKg");
	this.shape_6.setTransform(34.1,8.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#243A6C").s().p("AAFAeIgCgOIgGAAIgCAOIgJAAIAIg7IAOAAIAHA7gAADAHIgDgaIgDAaIAGAAg");
	this.shape_7.setTransform(30.6,8.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#243A6C").s().p("AgFAeIgJg7IALAAIADApIAGgpIAJAAIgJA7g");
	this.shape_8.setTransform(27.3,8.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#243A6C").s().p("AgLAeIAAg7IALAAIAAAxIAMAAIAAAKg");
	this.shape_9.setTransform(22.2,8.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#243A6C").s().p("AAFAeIgFglIgEAlIgKAAIgIg7IAKAAIAEAiIAFgiIAIAAIAFAiIAFgiIAIAAIgIA7g");
	this.shape_10.setTransform(18,8.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#243A6C").s().p("AAAAfQgDAAgEgDQgEgDgBgHQgDgHAAgLQAAgKADgHQABgHAEgDQAEgDADAAQAEAAAEADQAEADACAHQACAHAAAKQAAALgCAHQgCAHgEADQgDADgEAAIgBAAgAAAgTIgCAEIAAAKIAAALIAAAKIACAEIAAACQAAAAAAAAQABAAAAgBQAAAAAAAAQABAAAAgBIABgEIABgKIAAgLIgBgKIgBgEQAAgBgBAAQAAAAAAAAQAAgBgBAAQAAAAAAAAIAAACg");
	this.shape_11.setTransform(13.6,8.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#243A6C").s().p("AgHAbQgEgDgBgHQgBgIgBgJQAAgKACgHQADgHADgDQAEgDACAAQAFAAADACQADACABADIACAIIABAIIgLAAIgBgLQAAAAAAgBQAAgBgBAAQAAAAgBgBQAAAAgBAAIAAABIAAADIgBAGIgBALIABALIAAAHIABADIAAABQADAAABgEIACgLIAJABIgBAIIgCAHQgBAEgDACQgDACgFAAQgDAAgEgEg");
	this.shape_12.setTransform(9.8,8.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0D1526").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABgAjaBnIG1AAIAAjMIm1AAg");
	this.shape_13.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.GEN_pbbase02("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,47.9,24.4);


(lib.ANTIICE_cowlvalveopen1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#243A6C").s().p("AAGAeIgKgjIAAAjIgJAAIAAg7IALAAIAIAeIAAgeIAJAAIAAA7g");
	this.shape.setTransform(30,17.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#243A6C").s().p("AgLAeIAAg7IAXAAIAAAKIgMAAIAAAPIAIAAIAAAIIgIAAIAAAQIAMAAIAAAKg");
	this.shape_1.setTransform(26.6,17.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#243A6C").s().p("AgOAeIAAg7IALAAQAIAAAFAEQAFAFAAAJQAAAGgCAEQgBACgDACQgEACgFABIgDAAIAAAYgAgDgBIACAAIABgBIADgDIAAgFIgBgHIgCgCIgBAAIgCAAg");
	this.shape_2.setTransform(23.3,17.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#243A6C").s().p("AAAAfQgEAAgDgDQgDgDgCgHQgCgHAAgLQAAgKACgHQACgHADgDQADgDAEAAQAFAAADADQAEADABAHQACAHAAAKQAAALgCAHQgBAHgEADQgDADgEAAIgBAAgAgBgTIgBAEIgBAKIAAALIABAKIABAEIABACQAAAAAAAAQABAAAAgBQAAAAAAAAQABAAAAgBIABgEIAAgKIAAgLIAAgKIgBgEQAAgBgBAAQAAAAAAAAQAAgBgBAAQAAAAAAAAIgBACg");
	this.shape_3.setTransform(19.4,17.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#243A6C").s().p("AgLAeIAAg7IAXAAIAAAKIgMAAIAAAPIAIAAIAAAIIgIAAIAAAQIAMAAIAAAKg");
	this.shape_4.setTransform(40,8.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#243A6C").s().p("AgFAeIgJg7IALAAIADApIAGgpIAJAAIgJA7g");
	this.shape_5.setTransform(36.6,8.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#243A6C").s().p("AgLAeIAAg7IALAAIAAAxIAMAAIAAAKg");
	this.shape_6.setTransform(34.1,8.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#243A6C").s().p("AAFAeIgCgOIgGAAIgCAOIgJAAIAIg7IAOAAIAHA7gAADAHIgDgaIgDAaIAGAAg");
	this.shape_7.setTransform(30.6,8.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#243A6C").s().p("AgFAeIgJg7IALAAIADApIAGgpIAJAAIgJA7g");
	this.shape_8.setTransform(27.3,8.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#243A6C").s().p("AgLAeIAAg7IALAAIAAAxIAMAAIAAAKg");
	this.shape_9.setTransform(22.2,8.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#243A6C").s().p("AAFAeIgFglIgEAlIgKAAIgIg7IAKAAIAEAiIAFgiIAIAAIAFAiIAFgiIAIAAIgIA7g");
	this.shape_10.setTransform(18,8.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#243A6C").s().p("AAAAfQgDAAgEgDQgEgDgBgHQgDgHAAgLQAAgKADgHQABgHAEgDQAEgDADAAQAEAAAEADQAEADACAHQACAHAAAKQAAALgCAHQgCAHgEADQgDADgEAAIgBAAgAAAgTIgCAEIAAAKIAAALIAAAKIACAEIAAACQAAAAAAAAQABAAAAgBQAAAAAAAAQABAAAAgBIABgEIABgKIAAgLIgBgKIgBgEQAAgBgBAAQAAAAAAAAQAAgBgBAAQAAAAAAAAIAAACg");
	this.shape_11.setTransform(13.6,8.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#243A6C").s().p("AgHAbQgEgDgBgHQgBgIgBgJQAAgKACgHQADgHADgDQAEgDACAAQAFAAADACQADACABADIACAIIABAIIgLAAIgBgLQAAAAAAgBQAAgBgBAAQAAAAgBgBQAAAAgBAAIAAABIAAADIgBAGIgBALIABALIAAAHIABADIAAABQADAAABgEIACgLIAJABIgBAIIgCAHQgBAEgDACQgDACgFAAQgDAAgEgEg");
	this.shape_12.setTransform(9.8,8.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0D1526").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABgAjaBnIG1AAIAAjMIm1AAg");
	this.shape_13.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.GEN_pbbase02("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,47.9,24.4);


(lib.ANTIICEPanelcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// buttons and switches
	this.instance = new lib.GEN_switch01down("synched",0);
	this.instance.setTransform(-159.4,229.6,1.1,1.103,0,180,0,6.6,0);

	this.instance_1 = new lib.GEN_switch01down("synched",0);
	this.instance_1.setTransform(-218.2,229.6,1.1,1.103,0,180,0,6.6,0);

	this.instance_2 = new lib.GEN_switch01down("synched",0);
	this.instance_2.setTransform(-315.9,215.8,1.1,1.103,0,180,0,6.6,0);

	this.instance_3 = new lib.COWLVALVE2("synched",0);
	this.instance_3.setTransform(-159.6,155.1,1.104,1.096,0,0,0,24.9,13.2);

	this.instance_4 = new lib.COWLVALVE1("synched",0);
	this.instance_4.setTransform(-218.6,155.1,1.104,1.096,0,0,0,24.9,13.2);

	this.instance_5 = new lib.LVALVEOrange("synched",0);
	this.instance_5.setTransform(-347.3,155.1,1.104,1.096,0,0,0,24.9,13.2);

	this.instance_6 = new lib.RVALVEOrange("synched",0);
	this.instance_6.setTransform(-288.2,155.1,1.104,1.096,0,0,0,24.9,13.2);

	this.instance_7 = new lib.ENGANTIICE1("synched",0);
	this.instance_7.setTransform(-159.6,100.4,1.104,1.096,0,0,0,24.9,13.2);

	this.instance_8 = new lib.ENGANTIICE1("synched",0);
	this.instance_8.setTransform(-218.6,100.4,1.104,1.096,0,0,0,24.9,13.2);

	this.instance_9 = new lib.ANTIICE_cowlantiice2copy("synched",0);
	this.instance_9.setTransform(-159.6,127.8,1.104,1.096,0,0,0,24.9,13.2);

	this.instance_10 = new lib.ANTIICE_cowlantiice1copy("synched",0);
	this.instance_10.setTransform(-218.6,127.8,1.104,1.096,0,0,0,24.9,13.2);

	this.instance_11 = new lib.GEN_switchbase01bcopy("synched",0);
	this.instance_11.setTransform(-159.5,226.6,1.104,1.096,0,0,0,18.5,18.5);

	this.instance_12 = new lib.GEN_switchbase01bcopy("synched",0);
	this.instance_12.setTransform(-218,226.6,1.104,1.096,0,0,0,18.5,18.5);

	this.instance_13 = new lib.GEN_switchbase01bcopy("synched",0);
	this.instance_13.setTransform(-315.7,211.9,1.104,1.096,0,0,0,18.5,18.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRAqQgFgBgBgFIAAgDQAAgKAFgKQAFgIANgIIAGgIQAFgGAAgCQAAgFgDgDQgEgDgFAAQgIAAgBAIQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAAAABIgFAAQgEAAAAgDIAAgBQAAgIAGgGQAGgEAJAAQAKAAAGAFQAHAGAAAKQAAAKgJAIIgRANQgIAHAAANIAgAAQADAAAAAGIAAADIgDACg");
	this.shape.setTransform(-159.1,250.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAAmIAAhDIgIAAQgDgBAAgFQAAgFAEgBIAOAAIADABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAAAIAABMIgCACIgEABQgGAAAAgEg");
	this.shape_1.setTransform(-218.3,250.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AglA6IAAhyIBEAAQAGABABAGQgBAJgGAAIgzAAIAAAYIAqAAQAAAAABAAQAAAAABABQAAAAABAAQABAAAAABQACACAAADQAAAEgCADQAAAAgBABQgBAAAAAAQgBAAAAABQgBAAAAgBIgqAAIAAAqIAzAAQAGABABAIQgBAIgGAAg");
	this.shape_2.setTransform(-162,196.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeAmQgJgPAAgXQAAgUAIgQQAFgIALgHQAKgFAIAAQASgBAJAJQAGAEAAACIACADQACAHgGACQgGADgEgEQgHgLgMABQgPABgIAOQgFALAAAPQAAATAEAGQAKARAOAAQAHAAAGgDQAFgEACgGQABgEADgBQADAAADABQAEABABADQABADgCACQgCAKgJAGQgHAHgSABQgVgBgMgTg");
	this.shape_3.setTransform(-171.9,196.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEA4QgCgCAAgDIAAhlQAAgEACgBQACgCACABQAIgBAAAHIAABmQgBADgDACIgEABQgCgBgCgBg");
	this.shape_4.setTransform(-178.4,196.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAdAHIg8AAQAAAAgBAAQgBgBAAAAQgBAAAAgBQAAAAAAgBIgBgEIABgEQACgCADAAIA7AAQADAAACADIABADQAAADgBACQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgCAAg");
	this.shape_5.setTransform(-185,196.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgEA4QgCgCgBgDIAAhlQABgEACgBQACgCACABQAIgBAAAHIAABmQgBADgDACIgEABQgCgBgCgBg");
	this.shape_6.setTransform(-191.3,196.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgGAzIAAhcIgZAAQgEAAgCgDQgBgCgBgDQABgGAGgBIBAAAQAHABAAAGQABAHgIABIgZAAIAABcIgCAFQgCABgDAAQgGAAAAgGg");
	this.shape_7.setTransform(-197.9,196.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AglA1IAAhnQAAgCACgDQABAAAAgBQAAAAABAAQAAAAABAAQABAAAAAAQAHgBADAFIAsBRIAAhQQABgFAGAAQAIAAAAAGIAABlQAAAGgHAAQgEACgEgEIgthRIAABPQgBAEgHABQgHAAAAgFg");
	this.shape_8.setTransform(-207.4,196.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAaA0IgEgMIgrAAIgFAMQgBAGgJgBIgFgCQgCgCABgEIAmhkQACgGADAAQAGAAADAGIAhBmQAAAGgIAAIgCABQgFAAgCgGgAgQAZIAAgBIAjAAIgSg2IgRA2IAAAAg");
	this.shape_9.setTransform(-217.1,196.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgfAlQgJgOAAgXQAAgUAJgPQAEgJAMgIQAJgEAIAAQASAAAJAGQAGAHABABIACADQACAHgHADQgGACgEgFQgHgKgMAAQgOABgJAQQgEAKAAAPQAAASAEAIQAKAQANAAQAHAAAHgEQADgCADgGIAAgUIgWAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIgBgGQAAgCABgBQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIAgAAQABABABAAQAAAAABAAQAAABABAAQAAAAAAABQACABAAACIAAAeQABADgFAGQgDAFgFAEQgIAHgSAAQgVABgMgVg");
	this.shape_10.setTransform(-179.8,182.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AglA1IAAhnQAAgCACgDQABAAAAgBQAAAAABAAQAAAAABAAQABAAAAAAQAHgBADAFIAsBRIAAhQQABgFAGAAQAIAAAAAGIAABlQAAAGgHAAQgEACgEgEIgthRIAABPQgBAEgHABQgHAAAAgFg");
	this.shape_11.setTransform(-189.7,182.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgkA5IAAhxIBCAAQAIABgBAGQABAJgIgBIgyAAIAAAZIApAAQABAAABAAQAAAAABABQAAAAABAAQAAABABAAQABADABADQgBADgBADQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIgpAAIAAApIAyAAQAIABgBAIQABAIgIgBg");
	this.shape_12.setTransform(-199.5,182.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgbAnIAAhLQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAIADgBQAFgBACAEIAgA7IAAg6QABgEAEAAQAGAAAAAEIAABLQAAAEgFAAQgDABgDgDIghg7IAAA6QgBACgEABQgGAAAAgDg");
	this.shape_13.setTransform(-184.9,242.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgWAaQgGgKAAgQQAAgPAGgLQAHgPAPAAQAQAAAHAPQAGAMAAAOQAAAOgGAMQgHAQgQAAQgPAAgHgQgAgNgTQgDAJAAAKQAAAKADAJQAFALAIAAQAJAAAFgLQADgHAAgMQAAgLgDgHQgFgMgJAAQgJAAgEALg");
	this.shape_14.setTransform(-192,243);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgaAmIAAhPIAxAAQAEABAAAEQAAAHgEAAIgmAAIAAASIAeAAQADAAAAAFQAAAFgDABIgeAAIAAAmQAAAEgGAAQgFgBAAgDg");
	this.shape_15.setTransform(-180.9,215.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgbAmIAAhPIAyAAQAEABAAAEQAAAHgEAAIgmAAIAAASIAeAAQADAAAAAFQAAAFgDABIgeAAIAAAmQABAEgHAAQgFgBgBgDg");
	this.shape_16.setTransform(-187.9,215.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgWAaQgGgKAAgQQAAgPAGgLQAHgPAPAAQARAAAGAPQAGAMAAAOQAAAOgFAMQgIAQgQAAQgPAAgHgQgAgNgTQgDAJAAAKQAAAKADAJQAFALAIAAQAKAAAEgLQACgHABgMQgBgLgCgHQgEgMgKAAQgIAAgFALg");
	this.shape_17.setTransform(-194.9,215.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgkA5IAAhxIBCAAQAIABgBAGQABAJgIgBIgyAAIAAAZIApAAQABAAABAAQAAAAABABQAAAAABAAQAAABABAAQACADgBADQABADgCADQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIgpAAIAAApIAyAAQAIABgBAIQABAIgIgBg");
	this.shape_18.setTransform(-268.6,182.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgeAlQgJgOAAgXQAAgUAIgPQAFgKALgGQAKgGAIABQASAAAJAHQAGAGAAABIACACQACAIgGACQgGADgEgEQgHgLgMABQgPABgIAPQgFAKAAAPQAAASAEAIQAKAQAOAAQAHAAAGgEQAFgDACgHQABgDADgBQADgBADACQAEABABACQABADgCAEQgCAJgJAGQgHAHgSAAQgVABgMgVg");
	this.shape_19.setTransform(-278.5,182.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgEA4QgCgBgBgDIAAhnQABgDACgBQACgBACAAQAHAAAAAFIAABoQAAADgDABIgEAAQgCAAgCgBg");
	this.shape_20.setTransform(-285,182.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAdAHIg8AAQAAAAgBAAQgBgBAAAAQgBAAAAgBQAAAAgBgBIAAgEIABgEQACgCADAAIA7AAQADAAACADIABADQAAADgBACQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgCAAg");
	this.shape_21.setTransform(-291.6,183);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgEA4QgCgBgBgDIAAhnQABgDACgBQABgBADAAQAIAAAAAFIAABoQgBADgDABIgEAAQgDAAgBgBg");
	this.shape_22.setTransform(-297.9,182.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgGAzIAAhcIgaAAQgDAAgCgDQgBgCAAgDQgBgGAHgBIBAAAQAIABAAAGQgBAHgGABIgaAAIAABcIgCAFQgCABgDAAQgGAAAAgGg");
	this.shape_23.setTransform(-304.5,182.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AglA1IAAhnQAAgCACgDQABAAAAgBQAAAAABAAQAAAAABAAQABAAAAAAQAHgBADAFIAsBRIAAhQQABgFAGAAQAIAAAAAGIAABlQAAAGgHAAQgEACgEgEIgthRIAABPQgBAEgHABQgHAAAAgFg");
	this.shape_24.setTransform(-314,182.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAaA0IgEgMIgrAAIgFAMQgBAGgJgBIgFgCQgCgCABgEIAmhkQACgGADAAQAGAAADAGIAhBmQAAAGgIAAIgCABQgFAAgCgGgAgQAZIAAgBIAjAAIgSg2IgRA2IAAAAg");
	this.shape_25.setTransform(-323.7,182.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgeAlQgJgOAAgXQgBgUAJgPQAEgJAMgIQAKgEAIAAQARAAAKAGQAFAHAAABIACADQADAHgHADQgFACgFgFQgHgKgLAAQgPABgJAQQgFAKAAAPQAAASAFAIQAJAQAOAAQAIAAAFgEQAEgCADgGIAAgUIgVAAQgDAAAAgCIgBgGQABgCAAgBQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBABAAIAfAAQABABABAAQAAAAABAAQAAABABAAQAAAAABABQACABAAACIAAAeQgBADgEAGQgDAFgGAEQgGAHgSAAQgVABgMgVg");
	this.shape_26.setTransform(-337.7,182.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AglA1IAAhnQAAgCACgDQABAAAAgBQAAAAABAAQAAAAABAAQABAAAAAAQAHgBADAFIAsBRIAAhQQABgFAGAAQAIAAAAAGIAABlQAAAGgHAAQgEACgEgEIgthRIAABPQgBAEgHABQgHAAAAgFg");
	this.shape_27.setTransform(-347.6,182.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgEA4QgCgBgBgDIAAhnQABgDACgBQABgBADAAQAHAAAAAFIAABoQAAADgDABIgEAAQgDAAgBgBg");
	this.shape_28.setTransform(-354.5,182.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAVA4QgCgBgCgDIgRhLIgTBLQgBAFgHAAQgFAAgDgFIgehjQgCgGAGgCQAIgDADAGIAXBTIAUhNQABgGAGAAQAGAAABAGIASBNIAZhUQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBABAAQADgBAEABQAIADgDAFIggBkQgCAFgGAAIgBAAIgDgBg");
	this.shape_29.setTransform(-363.5,182.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgbAnIAAhLQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAIADgBQAFgBACAEIAgA7IAAg6QABgEAEAAQAGAAAAAEIAABLQAAAEgFAAQgDABgDgDIghg7IAAA6QgBACgEABQgGAAAAgDg");
	this.shape_30.setTransform(-284.6,226.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgWAaQgGgKAAgQQAAgPAGgLQAIgPAOAAQAQAAAHAPQAGAMAAAOQAAAOgGAMQgHAQgQAAQgOAAgIgQgAgNgTQgDAJAAAKQAAAKADAJQAFALAIAAQAJAAAFgLQACgHAAgMQAAgLgCgHQgFgMgJAAQgIAAgFALg");
	this.shape_31.setTransform(-291.6,226.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgaAmIAAhPIAwAAQAGABAAAEQAAAHgGAAIglAAIAAARIAdAAQAFABAAAFQAAAFgFABIgdAAIAAAmQAAAEgGAAQgGgBABgDg");
	this.shape_32.setTransform(-280.5,198.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgaAmIAAhPIAxAAQAEABAAAEQAAAHgEAAIgmAAIAAARIAeAAQADABAAAFQAAAFgDABIgeAAIAAAmQAAAEgGAAQgFgBAAgDg");
	this.shape_33.setTransform(-287.5,198.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgWAaQgGgKAAgQQAAgPAGgLQAHgPAPAAQAQAAAHAPQAGAMAAAOQAAAOgGAMQgHAQgQAAQgPAAgHgQgAgNgTQgDAJAAAKQAAAKADAJQAFALAIAAQAJAAAFgLQADgHAAgMQAAgLgDgHQgFgMgJAAQgJAAgEALg");
	this.shape_34.setTransform(-294.6,198.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance_14 = new lib.ANITICE_basecopy("synched",0);
	this.instance_14.setTransform(-255.6,96.8,1.104,1.096,0,0,0,144.3,150.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// fill
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#657381").s().p("A44OUIAA8nMAxxAAAIAAcng");
	this.shape_35.setTransform(-255.6,169.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-414.9,78.3,318.8,183.4);


(lib.ANTIICEPanel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// buttons and switches
	this.instance = new lib.ANTIICE_cowlantiice2("synched",0);
	this.instance.setTransform(-159.6,127.8,1.104,1.096,0,0,0,24.9,13.2);

	this.instance_1 = new lib.ANTIICE_cowlantiice1("synched",0);
	this.instance_1.setTransform(-218.6,127.8,1.104,1.096,0,0,0,24.9,13.2);

	this.instance_2 = new lib.ANTIICE_cowlvalveopen2("synched",0);
	this.instance_2.setTransform(-159.6,155.1,1.104,1.096,0,0,0,24.9,13.2);

	this.instance_3 = new lib.ANTIICE_cowlvalveopen1("synched",0);
	this.instance_3.setTransform(-218.6,155.1,1.104,1.096,0,0,0,24.9,13.2);

	this.instance_4 = new lib.ANTIICE_Rvalveopen("synched",0);
	this.instance_4.setTransform(-288.2,155.1,1.104,1.096,0,0,0,24.9,13.2);

	this.instance_5 = new lib.ANTIICE_Lvalveopen("synched",0);
	this.instance_5.setTransform(-347.3,155.1,1.104,1.096,0,0,0,24.9,13.2);

	this.instance_6 = new lib.GEN_switch01up("synched",0);
	this.instance_6.setTransform(-159.4,225.7,1.104,1.096,0,0,0,6.6,0);

	this.instance_7 = new lib.GEN_switchbase01b("synched",0);
	this.instance_7.setTransform(-159.5,226.6,1.104,1.096,0,0,0,18.5,18.5);

	this.instance_8 = new lib.GEN_switch01up("synched",0);
	this.instance_8.setTransform(-218,225.7,1.104,1.096,0,0,0,6.5,0);

	this.instance_9 = new lib.GEN_switchbase01b("synched",0);
	this.instance_9.setTransform(-218,226.6,1.104,1.096,0,0,0,18.5,18.5);

	this.instance_10 = new lib.GEN_switch01up("synched",0);
	this.instance_10.setTransform(-315.6,210.9,1.104,1.096,0,0,0,6.6,0);

	this.instance_11 = new lib.GEN_switchbase01b("synched",0);
	this.instance_11.setTransform(-315.7,211.9,1.104,1.096,0,0,0,18.5,18.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRAqQgFgBgBgFIAAgDQAAgKAFgKQAFgIANgIIAGgIQAFgGAAgCQAAgFgDgDQgEgDgFAAQgIAAgBAIQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAAAABIgFAAQgEAAAAgDIAAgBQAAgIAGgGQAGgEAJAAQAKAAAGAFQAHAGAAAKQAAAKgJAIIgRANQgIAHAAANIAgAAQADAAAAAGIAAADIgDACg");
	this.shape.setTransform(-159.1,250.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAAmIAAhDIgIAAQgDgBAAgFQAAgFAEgBIAOAAIADABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAAAIAABMIgCACIgEABQgGAAAAgEg");
	this.shape_1.setTransform(-218.3,250.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AglA5IAAhxIBEAAQAGABABAGQgBAJgGgBIgzAAIAAAZIAqAAQAAAAABAAQAAAAABABQAAAAABAAQABABAAAAQACADAAADQAAADgCADQAAAAgBABQgBAAAAAAQgBABAAAAQgBAAAAAAIgqAAIAAApIAzAAQAGABABAIQgBAIgGgBg");
	this.shape_2.setTransform(-162,199.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeAlQgJgOAAgXQAAgUAIgPQAFgKALgGQAKgGAIABQASAAAJAHQAGAGAAABIACACQACAIgGACQgGADgEgEQgHgLgMABQgPABgIAOQgFALAAAPQAAASAEAIQAKAQAOAAQAHAAAGgEQAFgDACgHQABgDADgBQADgBADACQAEABABACQABADgCAEQgCAJgJAGQgHAHgSAAQgVABgMgVg");
	this.shape_3.setTransform(-171.9,199.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEA4QgCgBAAgDIAAhnQAAgDACgBQACgBACAAQAIAAAAAFIAABoQgBADgDABIgEAAQgCAAgCgBg");
	this.shape_4.setTransform(-178.4,199.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAdAHIg8AAQAAAAgBAAQgBgBAAAAQgBAAAAgBQAAAAAAgBIgBgEIABgEQACgCADAAIA7AAQADAAACADIABADQAAADgBACQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgCAAg");
	this.shape_5.setTransform(-185,200.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgEA4QgCgBgBgDIAAhnQABgDACgBQACgBACAAQAIAAAAAFIAABoQgBADgDABIgEAAQgCAAgCgBg");
	this.shape_6.setTransform(-191.3,199.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgGAzIAAhcIgZAAQgEAAgCgDQgBgCgBgDQABgGAGgBIBAAAQAHABAAAGQABAHgIABIgZAAIAABcIgCAFQgCABgDAAQgGAAAAgGg");
	this.shape_7.setTransform(-197.9,199.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AglA1IAAhnQAAgCACgDQABAAAAgBQAAAAABAAQAAAAABAAQABAAAAAAQAHgBADAFIAsBRIAAhQQABgFAGAAQAIAAAAAGIAABlQAAAGgHAAQgEACgEgEIgthRIAABPQgBAEgHABQgHAAAAgFg");
	this.shape_8.setTransform(-207.4,199.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAaA0IgEgMIgrAAIgFAMQgBAGgJgBIgFgCQgCgCABgEIAmhkQACgGADAAQAGAAADAGIAhBmQAAAGgIAAIgCABQgFAAgCgGgAgQAZIAAgBIAjAAIgSg2IgRA2IAAAAg");
	this.shape_9.setTransform(-217.1,199.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgfAmQgJgPAAgXQAAgUAJgPQAEgKAMgGQAJgGAIAAQASAAAJAHQAGAGABACIACADQACAHgHACQgGACgEgEQgHgLgMACQgOABgJAPQgEAJAAAQQAAASAEAIQAKAQANAAQAHAAAHgEQADgCADgGIAAgTIgWAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIgBgGQAAgCABgCQAAAAAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIAgAAQABABABAAQAAAAABAAQAAAAABABQAAAAAAAAQACACAAACIAAAdQABAFgFAEQgDAHgFACQgIAJgSgBQgVAAgMgTg");
	this.shape_10.setTransform(-179.8,186);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AglA1IAAhnQAAgCACgDQABAAAAgBQAAAAABAAQAAAAABAAQABAAAAAAQAHgBADAFIAsBRIAAhQQABgFAGAAQAIAAAAAGIAABlQAAAGgHAAQgEACgEgEIgthRIAABPQgBAEgHABQgHAAAAgFg");
	this.shape_11.setTransform(-189.7,186);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgkA5IAAhyIBCAAQAIACgBAGQABAIgIABIgyAAIAAAYIApAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQABADABADQgBADgBACQgBABAAABQgBAAAAAAQgBAAAAABQgBAAgBgBIgpAAIAAApIAyAAQAIACgBAIQABAHgIAAg");
	this.shape_12.setTransform(-199.5,186);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgbAnIAAhLQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAIADgBQAFgBACAEIAgA7IAAg6QABgEAEAAQAGAAAAAEIAABLQAAAEgFAAQgDABgDgDIghg7IAAA6QgBACgEABQgGAAAAgDg");
	this.shape_13.setTransform(-184.9,242.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgWAaQgGgKAAgQQAAgPAGgLQAHgPAPAAQAQAAAHAPQAGAMAAAOQAAAOgGAMQgHAQgQAAQgPAAgHgQgAgNgTQgDAJAAAKQAAAKADAJQAFALAIAAQAJAAAFgLQADgHAAgMQAAgLgDgHQgFgMgJAAQgJAAgEALg");
	this.shape_14.setTransform(-192,243);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgaAmIAAhPIAxAAQAEABAAAEQAAAHgEAAIgmAAIAAASIAeAAQADAAAAAFQAAAFgDABIgeAAIAAAmQAAAEgGAAQgFgBAAgDg");
	this.shape_15.setTransform(-180.9,215.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgbAmIAAhPIAyAAQAEABAAAEQAAAHgEAAIgmAAIAAASIAeAAQADAAAAAFQAAAFgDABIgeAAIAAAmQABAEgHAAQgFgBgBgDg");
	this.shape_16.setTransform(-187.9,215.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgWAaQgGgKAAgQQAAgPAGgLQAHgPAPAAQARAAAGAPQAGAMAAAOQAAAOgFAMQgIAQgQAAQgPAAgHgQgAgNgTQgDAJAAAKQAAAKADAJQAFALAIAAQAKAAAEgLQACgHABgMQgBgLgCgHQgEgMgKAAQgIAAgFALg");
	this.shape_17.setTransform(-194.9,215.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgkA5IAAhxIBCAAQAIABgBAGQABAJgIgBIgyAAIAAAZIApAAQABAAABAAQAAAAABABQAAAAABAAQAAABABAAQACADgBADQABADgCADQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIgpAAIAAApIAyAAQAIABgBAIQABAIgIgBg");
	this.shape_18.setTransform(-268.6,182.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgeAlQgJgOAAgXQAAgUAIgPQAFgKALgGQAKgGAIABQASAAAJAHQAGAGAAABIACACQACAIgGACQgGADgEgEQgHgLgMABQgPABgIAPQgFAKAAAPQAAASAEAIQAKAQAOAAQAHAAAGgEQAFgDACgHQABgDADgBQADgBADACQAEABABACQABADgCAEQgCAJgJAGQgHAHgSAAQgVABgMgVg");
	this.shape_19.setTransform(-278.5,182.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgEA4QgCgBgBgDIAAhnQABgDACgBQACgBACAAQAHAAAAAFIAABoQAAADgDABIgEAAQgCAAgCgBg");
	this.shape_20.setTransform(-285,182.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAdAHIg8AAQAAAAgBAAQgBgBAAAAQgBAAAAgBQAAAAgBgBIAAgEIABgEQACgCADAAIA7AAQADAAACADIABADQAAADgBACQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgCAAg");
	this.shape_21.setTransform(-291.6,183);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgEA4QgCgBgBgDIAAhnQABgDACgBQABgBADAAQAIAAAAAFIAABoQgBADgDABIgEAAQgDAAgBgBg");
	this.shape_22.setTransform(-297.9,182.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgGAzIAAhcIgaAAQgDAAgCgDQgBgCAAgDQgBgGAHgBIBAAAQAIABAAAGQgBAHgGABIgaAAIAABcIgCAFQgCABgDAAQgGAAAAgGg");
	this.shape_23.setTransform(-304.5,182.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AglA1IAAhnQAAgCACgDQABAAAAgBQAAAAABAAQAAAAABAAQABAAAAAAQAHgBADAFIAsBRIAAhQQABgFAGAAQAIAAAAAGIAABlQAAAGgHAAQgEACgEgEIgthRIAABPQgBAEgHABQgHAAAAgFg");
	this.shape_24.setTransform(-314,182.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAaA0IgEgMIgrAAIgFAMQgBAGgJgBIgFgCQgCgCABgEIAmhkQACgGADAAQAGAAADAGIAhBmQAAAGgIAAIgCABQgFAAgCgGgAgQAZIAAgBIAjAAIgSg2IgRA2IAAAAg");
	this.shape_25.setTransform(-323.7,182.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgeAlQgJgOAAgXQgBgUAJgPQAEgJAMgIQAKgEAIAAQARAAAKAGQAFAHAAABIACADQADAHgHADQgFACgFgFQgHgKgLAAQgPABgJAQQgFAKAAAPQAAASAFAIQAJAQAOAAQAIAAAFgEQAEgCADgGIAAgUIgVAAQgDAAAAgCIgBgGQABgCAAgBQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBABAAIAfAAQABABABAAQAAAAABAAQAAABABAAQAAAAABABQACABAAACIAAAeQgBADgEAGQgDAFgGAEQgGAHgSAAQgVABgMgVg");
	this.shape_26.setTransform(-337.7,182.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AglA1IAAhnQAAgCACgDQABAAAAgBQAAAAABAAQAAAAABAAQABAAAAAAQAHgBADAFIAsBRIAAhQQABgFAGAAQAIAAAAAGIAABlQAAAGgHAAQgEACgEgEIgthRIAABPQgBAEgHABQgHAAAAgFg");
	this.shape_27.setTransform(-347.6,182.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgEA4QgCgBgBgDIAAhnQABgDACgBQABgBADAAQAHAAAAAFIAABoQAAADgDABIgEAAQgDAAgBgBg");
	this.shape_28.setTransform(-354.5,182.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAVA4QgCgBgCgDIgRhLIgTBLQgBAFgHAAQgFAAgDgFIgehjQgCgGAGgCQAIgDADAGIAXBTIAUhNQABgGAGAAQAGAAABAGIASBNIAZhUQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBABAAQADgBAEABQAIADgDAFIggBkQgCAFgGAAIgBAAIgDgBg");
	this.shape_29.setTransform(-363.5,182.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgbAnIAAhLQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAIADgBQAFgBACAEIAgA7IAAg6QABgEAEAAQAGAAAAAEIAABLQAAAEgFAAQgDABgDgDIghg7IAAA6QgBACgEABQgGAAAAgDg");
	this.shape_30.setTransform(-284.6,226.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgWAaQgGgKAAgQQAAgPAGgLQAIgPAOAAQAQAAAHAPQAGAMAAAOQAAAOgGAMQgHAQgQAAQgOAAgIgQgAgNgTQgDAJAAAKQAAAKADAJQAFALAIAAQAJAAAFgLQACgHAAgMQAAgLgCgHQgFgMgJAAQgIAAgFALg");
	this.shape_31.setTransform(-291.6,226.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgaAmIAAhPIAwAAQAGABAAAEQAAAHgGAAIglAAIAAARIAdAAQAFABAAAFQAAAFgFABIgdAAIAAAmQAAAEgGAAQgGgBABgDg");
	this.shape_32.setTransform(-280.5,198.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgaAmIAAhPIAxAAQAEABAAAEQAAAHgEAAIgmAAIAAARIAeAAQADABAAAFQAAAFgDABIgeAAIAAAmQAAAEgGAAQgFgBAAgDg");
	this.shape_33.setTransform(-287.5,198.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgWAaQgGgKAAgQQAAgPAGgLQAHgPAPAAQAQAAAHAPQAGAMAAAOQAAAOgGAMQgHAQgQAAQgPAAgHgQgAgNgTQgDAJAAAKQAAAKADAJQAFALAIAAQAJAAAFgLQADgHAAgMQAAgLgDgHQgFgMgJAAQgJAAgEALg");
	this.shape_34.setTransform(-294.6,198.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance_12 = new lib.ANITICE_base("synched",0);
	this.instance_12.setTransform(-255.6,96.8,1.104,1.096,0,0,0,144.3,150.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// fill
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#657381").s().p("A44OUIAA8nMAxxAAAIAAcng");
	this.shape_35.setTransform(-255.6,169.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-414.9,78.3,318.8,183.4);


// stage content:
(lib.dif03p05 = function(mode,startPosition,loop) {
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
	this.frame_291 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(291).call(this.frame_291).wait(1));

	// prot
	this.prot = new lib.prot();
	this.prot.setTransform(500,275,1,1,0,0,0,500,275);

	this.timeline.addTween(cjs.Tween.get(this.prot).wait(292));

	// HL
	this.instance = new lib.HL2("synched",0);
	this.instance.setTransform(220.5,177.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({_off:false},0).to({alpha:1},5).wait(267).to({startPosition:0},0).to({alpha:0},5).wait(2));

	// title
	this.instance_1 = new lib.text("synched",0);
	this.instance_1.setTransform(500.1,414.2,1,1,0,0,0,294.4,23.1);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},5).wait(287));

	// Panels
	this.instance_2 = new lib.ANTIICEPanelcopy("synched",0);
	this.instance_2.setTransform(719.4,207.3,1,1,0,0,0,-255.7,185.8);

	this.instance_3 = new lib.ANTIICEPanel("synched",0);
	this.instance_3.setTransform(286.4,207.3,1,1,0,0,0,-255.7,185.8);

	this.instance_4 = new lib.textboxLsidecopy2("synched",0);
	this.instance_4.setTransform(668.1,69);

	this.instance_5 = new lib.textboxLside("synched",0);
	this.instance_5.setTransform(238.1,69);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(292));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(500,275,1000,550);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;