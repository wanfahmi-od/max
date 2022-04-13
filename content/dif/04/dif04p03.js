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
	this.shape.graphics.f().s("#FFFF00").ss(5,0,0,3).p("AdmioIJfAAIAAFRIpfAAgEgnEgCoIJeAAIAAFRIpeAAg");
	this.shape.setTransform(250.7,33.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.9,14,505.2,38.9);


(lib.hl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(5,0,0,3).p("AY8pIISfAAIAASRIyfAAgEgragJIISfAAIAASRIyfAAg");
	this.shape.setTransform(279.7,74.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,13.6,560.8,122.2);


(lib.GEN_switchbase03copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#331109","#501B0E","#792B17","#240C06"],[0.333,0.475,0.675,1],0,0,0,0,0,7.3).s().p("AgsAtQgTgSAAgbQAAgZATgTQATgTAZAAQAbAAASATQATATAAAZQAAAbgTASQgSATgbAAQgZAAgTgTg");
	this.shape.setTransform(18.5,18.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#444444","#777777"],[0.008,1],8.3,14.4,-8.3,-14.1).s().p("AgXCIIgCgBIhmhXIgBgCIgBgCIAYiCIABgCIABAAIB9guIACgBIACABIBmBYIABABIAAACIgXCCIgBACIgCABIh8AtIgBABIgBAAgAhihSIgXB+IBjBUIB5gtIAWh9IhjhVg");
	this.shape_1.setTransform(18.4,18.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000000","#A6A6A6","#000000"],[0,0.537,1],-7.6,6.7,7.6,-6.6).s().p("AAABRQggABgYgYIAAAAQgZgYAAgiQAAggAZgYQAYgZAgAAQAiAAAYAZIAAAAQAYAYgBAgQABAigYAYIAAAAQgYAXgiAAIAAAAgAgzA1QAWAVAdAAQAfAAAVgVIABgBQAVgVAAgfQAAgdgVgWIgBAAIAAAAQgVgWgfAAQgdAAgWAWQgWAWAAAdQAAAfAWAVIAAAAg");
	this.shape_2.setTransform(18.4,18.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#49170C","#842B15","#511A0D","#240C06"],[0.447,0.675,0.82,1],0,0,0,0,0,8.2).s().p("AgzA1IAAgBQgWgVAAgfQAAgdAWgWQAWgWAdAAQAfAAAVAWIABAAQAVAWAAAdQAAAfgVAVIgBABQgVAVgfAAQgdAAgWgVgAgrgrQgUASAAAZQAAAbAUATQASASAZAAQAbAAATgSQASgTAAgbQAAgZgSgSQgTgUgbAAQgZAAgSAUg");
	this.shape_3.setTransform(18.4,18.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#444444","#B7B7B7","#444444"],[0,0.537,1],-11.5,9.9,11.5,-9.8).s().p("AhCBEQgcgdAAgnQAAgmAcgcQAcgcAmAAQAnAAAdAcIAAAAQAbAcAAAmQAAAngbAdIAAAAQgdAbgnAAQgmAAgcgbgAA6A6IAAAAQAYgYgBgiQABgggYgYIAAAAQgYgZgiAAQggAAgYAZQgZAYAAAgQAAAiAZAYIAAAAQAYAYAggBQAiABAYgYg");
	this.shape_4.setTransform(18.4,18.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#555555","#C8C8C8","#262626"],[0,0.537,1],-14.2,12.2,14.2,-12.2).s().p("AAABnQgpAAgfgeQgegfABgqQgBgpAegfQAfgeApABQAqgBAfAeIAAABQAeAeAAApQAAAqgeAfIAAAAQgfAegqAAIAAAAgAhChCQgcAcAAAmQAAAnAcAdQAcAbAmAAQAnAAAdgbIAAAAQAbgdAAgnQAAgmgbgcIAAAAQgdgcgnAAQgmAAgcAcg");
	this.shape_5.setTransform(18.4,18.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#3C3C3C","#8C8C8C","#6A6A6A","#7B7B7B","#453932"],[0,0.286,0.506,0.667,1],-15.1,7.4,15.2,-7.3).s().p("Ah5AsIAXh+IB5gtIBjBVIgXB9Ih4AtgAhHhIQgeAfAAApQAAAqAeAfQAeAdApAAQArAAAegdIABgBQAdgeAAgqQAAgpgdgeIAAgBQgfgegrAAIAAAAQgpAAgeAegAgzA0IABAAIAAABgAA1gzIAAgBIAAABg");
	this.shape_6.setTransform(18.4,18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.4,4.8,26.1,27.3);


(lib.GEN_switchbase03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#331109","#501B0E","#792B17","#240C06"],[0.333,0.475,0.675,1],0,0,0,0,0,7.3).s().p("AgsAtQgTgSAAgbQAAgZATgTQATgTAZAAQAbAAASATQATATAAAZQAAAbgTASQgSATgbAAQgZAAgTgTg");
	this.shape.setTransform(18.5,18.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#444444","#777777"],[0.008,1],8.3,14.4,-8.3,-14.1).s().p("AgXCIIgCgBIhmhXIgBgCIgBgCIAYiCIABgCIABAAIB9guIACgBIACABIBmBYIABABIAAACIgXCCIgBACIgCABIh8AtIgBABIgBAAgAhihSIgXB+IBjBUIB5gtIAWh9IhjhVg");
	this.shape_1.setTransform(18.4,18.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000000","#A6A6A6","#000000"],[0,0.537,1],-7.6,6.7,7.6,-6.6).s().p("AAABRQggABgYgYIAAAAQgZgYAAgiQAAggAZgYQAYgZAgAAQAiAAAYAZIAAAAQAYAYgBAgQABAigYAYIAAAAQgYAXgiAAIAAAAgAgzA1QAWAVAdAAQAfAAAVgVIABgBQAVgVAAgfQAAgdgVgWIgBAAIAAAAQgVgWgfAAQgdAAgWAWQgWAWAAAdQAAAfAWAVIAAAAg");
	this.shape_2.setTransform(18.4,18.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#49170C","#842B15","#511A0D","#240C06"],[0.447,0.675,0.82,1],0,0,0,0,0,8.2).s().p("AgzA1IAAgBQgWgVAAgfQAAgdAWgWQAWgWAdAAQAfAAAVAWIABAAQAVAWAAAdQAAAfgVAVIgBABQgVAVgfAAQgdAAgWgVgAgrgrQgUASAAAZQAAAbAUATQASASAZAAQAbAAATgSQASgTAAgbQAAgZgSgSQgTgUgbAAQgZAAgSAUg");
	this.shape_3.setTransform(18.4,18.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#444444","#B7B7B7","#444444"],[0,0.537,1],-11.5,9.9,11.5,-9.8).s().p("AhCBEQgcgdAAgnQAAgmAcgcQAcgcAmAAQAnAAAdAcIAAAAQAbAcAAAmQAAAngbAdIAAAAQgdAbgnAAQgmAAgcgbgAA6A6IAAAAQAYgYgBgiQABgggYgYIAAAAQgYgZgiAAQggAAgYAZQgZAYAAAgQAAAiAZAYIAAAAQAYAYAggBQAiABAYgYg");
	this.shape_4.setTransform(18.4,18.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#555555","#C8C8C8","#262626"],[0,0.537,1],-14.2,12.2,14.2,-12.2).s().p("AAABnQgpAAgfgeQgegfABgqQgBgpAegfQAfgeApABQAqgBAfAeIAAABQAeAeAAApQAAAqgeAfIAAAAQgfAegqAAIAAAAgAhChCQgcAcAAAmQAAAnAcAdQAcAbAmAAQAnAAAdgbIAAAAQAbgdAAgnQAAgmgbgcIAAAAQgdgcgnAAQgmAAgcAcg");
	this.shape_5.setTransform(18.4,18.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#3C3C3C","#8C8C8C","#6A6A6A","#7B7B7B","#453932"],[0,0.286,0.506,0.667,1],-15.1,7.4,15.2,-7.3).s().p("Ah5AsIAXh+IB5gtIBjBVIgXB9Ih4AtgAhHhIQgeAfAAApQAAAqAeAfQAeAdApAAQArAAAegdIABgBQAdgeAAgqQAAgpgdgeIAAgBQgfgegrAAIAAAAQgpAAgeAegAgzA0IABAAIAAABgAA1gzIAAgBIAAABg");
	this.shape_6.setTransform(18.4,18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.4,4.8,26.1,27.3);


(lib.GEN_switchbase01acopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#3C3C3C","#8C8C8C","#6A6A6A","#7B7B7B","#453932"],[0,0.286,0.506,0.667,1],-15.1,7.4,15.2,-7.3).s().p("Ah5AsIAXh+IB5gtIBjBVIgXB9Ih4AtgAhJhKQggAgAAAqQAAAsAgAgQAfAfArABQAsgBAggfQAfggAAgsQAAgqgfggQgggggsAAQgrAAgfAgg");
	this.shape.setTransform(18.4,18.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#5E5E5E","#453932"],[0,1],0,0,0,0,0,4.3).s().p("AgdA7IAAh2QAPgKAPAAQAQAAANAJIAAB4QgNAKgQAAQgPAAgPgLg");
	this.shape_1.setTransform(18.3,18.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#3C3C3C","#8C8C8C","#959595","#BCBCBC","#EAEAEA","#C5C5C5","#7B7B7B","#453932"],[0,0.114,0.259,0.376,0.522,0.643,0.808,1],-6.7,4.1,9.1,-4).s().p("Ag4AQIAAg1IAWAAIAAAFIAAAhIAEAEQAQALAPAAQAQAAANgKQADgBACgDIAAgiIAAgFIAWAAIAAA3QgYAUggAAQggAAgZgWg");
	this.shape_2.setTransform(18.3,24);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#3C3C3C","#959595","#BCBCBC","#C5C5C5","#7B7B7B","#453932"],[0,0.173,0.38,0.549,0.808,1],-0.1,-2.1,-0.1,1.8).s().p("AAjAQIAAgfIAWAAQAFAQgFAPgAg4AQQgFgQAFgPIAWAAIAAAfg");
	this.shape_3.setTransform(18.3,18.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5D5C5C").s().p("AAeg7IAFADIAAAkIAAAFIAAAfIAAAFIAAAkQgCADgDAAgAgiA4IAAgjIAAgFIAAgfIAAgFIAAgjIAEgDIAAB1IgEgDg");
	this.shape_4.setTransform(18.3,18.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#3C3C3C","#8C8C8C","#959595","#BCBCBC","#EAEAEA","#C5C5C5","#7B7B7B","#453932"],[0,0.114,0.259,0.376,0.522,0.643,0.808,1],-7.9,3.4,7.1,-3.6).s().p("AAjAlIAAgEIAAgiIgFgEQgNgKgQAAQgPAAgQALIgEAEIAAAhIAAAEIgWAAIAAg1QAZgUAgAAQAgAAAYATIAAA2g");
	this.shape_5.setTransform(18.3,13.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#888480").s().p("Ag4BMIAAgFQAZAVAgAAQAgAAAYgTIAAAFQgYASggAAQggAAgZgUgAg4hLQAHgGAJgEIABgBIABAAIACgBQAGgDAGgCIAEgBIAAAAIAJgBIACgBIAKAAQAgAAAYASIAAAFQgYgTggAAQggAAgZAVg");
	this.shape_6.setTransform(18.3,18.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#3C3C3C","#8C8C8C","#959595","#BCBCBC","#C5C5C5","#7B7B7B","#453932"],[0,0.114,0.259,0.376,0.525,0.808,1],-9.9,9.2,10,-9.1).s().p("AhKBMQggggAAgsQAAgrAgggQAfgfArAAQAsAAAgAfQAfAgAAArQAAAsgfAgQggAfgsAAQgrAAgfgfgAgKheIgDAAIgIABIgBAAIgDABQgHACgFADIgCABIgBABIgCAAQgIAEgIAGIgJAIQgdAdAAAmQAAAoAdAcIAJAIQAZAVAhgBQAgAAAYgSIALgKQAdgcAAgoQAAgmgdgdIgLgKQgYgSggAAIgKABg");
	this.shape_7.setTransform(18.5,18.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#3C3C3C","#8C8C8C","#BFBFBF","#C5C5C5","#7B7B7B","#453932"],[0,0.114,0.49,0.643,0.808,1],-10.4,6.2,10.4,-6.1).s().p("AA4BJIAAg5QAFgPgFgQIAAg5IAAgFIAMAKQAcAdAAAmQAAAogcAcIgMAKgAhDBEQgcgcAAgoQAAgmAcgdIAKgIIAAAFIAAA3QgFAPAFAQIAAA3IAAAFIgKgIg");
	this.shape_8.setTransform(18.4,18.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#262626","#7B7B7B","#595959","#666666","#2C2521"],[0,0.286,0.506,0.667,1],-15.1,7.4,15.2,-7.3).s().p("AgXCIIgCgBIhmhXIgBgCIgBgCIAYiCIABgCIABAAIB9guIACgBIACABIBmBYIABABIAAACIgXCCIgBACIgCABIh8AtIgBABIgBAAgAhihSIgXB+IBjBUIB5gtIAWh9IhjhVg");
	this.shape_9.setTransform(18.4,18.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#343D43").s().p("AhmBoQgrgsAAg8QAAg7ArgrQAqgrA8AAQA8AAAsArQAqArAAA7QAAA8gqAsQgsAqg8AAQg8AAgqgqgAAViHIh9AuIgBABIgBACIgYCCIABACIABABIBmBYIACABIACgBIB8guIACgBIABgCIAXiBIAAgCIgBgCIhmhXIgCgBIgBAAIgBAAg");
	this.shape_10.setTransform(18.5,18.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#E8EBEC","#9AA0A4"],[0,1],11.5,11.1,-11.5,-11).s().p("AhvBxQgvgvAAhCQAAhBAvguQAugvBBAAQBCAAAvAvQAuAuAABBQAABCguAvQgvAuhCAAQhBAAgugugAhmhmQgrArAAA7QAAA8ArAsQAqAqA8AAQA8AAAsgqQAqgsAAg8QAAg7gqgrQgsgrg8AAQg8AAgqArg");
	this.shape_11.setTransform(18.5,18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#3C3C3C","#8C8C8C","#BFBFBF","#C5C5C5","#7B7B7B","#453932"],[0,0.114,0.49,0.643,0.808,1],-10.3,6.3,10.5,-6).s().p("AgXCKIgBAAIgCgCIAAABIgBgBIhmhWIAAAAIgCgDIAAgBIAAgCIAXiCIAAgBIACgCIgBAAIABAAIACgCIABAAIB8guIAAAAIADAAIAAAAIADACIAAgBIABABIBmBXIABADIABAAIAAADIAAAAIgYCBIAAAAIgBADIAAAAIgDACIgBAAIh7AuIAAAAIgCAAIgBAAg");
	this.shape_12.setTransform(18.4,18.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.5,2.5,32,32);


(lib.GEN_switchbase01a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#3C3C3C","#8C8C8C","#6A6A6A","#7B7B7B","#453932"],[0,0.286,0.506,0.667,1],-15.1,7.4,15.2,-7.3).s().p("Ah5AsIAXh+IB5gtIBjBVIgXB9Ih4AtgAhJhKQggAgAAAqQAAAsAgAgQAfAfArABQAsgBAggfQAfggAAgsQAAgqgfggQgggggsAAQgrAAgfAgg");
	this.shape.setTransform(18.4,18.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#5E5E5E","#453932"],[0,1],0,0,0,0,0,4.3).s().p("AgdA7IAAh2QAPgKAPAAQAQAAANAJIAAB4QgNAKgQAAQgPAAgPgLg");
	this.shape_1.setTransform(18.3,18.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#3C3C3C","#8C8C8C","#959595","#BCBCBC","#EAEAEA","#C5C5C5","#7B7B7B","#453932"],[0,0.114,0.259,0.376,0.522,0.643,0.808,1],-6.7,4.1,9.1,-4).s().p("Ag4AQIAAg1IAWAAIAAAFIAAAhIAEAEQAQALAPAAQAQAAANgKQADgBACgDIAAgiIAAgFIAWAAIAAA3QgYAUggAAQggAAgZgWg");
	this.shape_2.setTransform(18.3,24);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#3C3C3C","#959595","#BCBCBC","#C5C5C5","#7B7B7B","#453932"],[0,0.173,0.38,0.549,0.808,1],-0.1,-2.1,-0.1,1.8).s().p("AAjAQIAAgfIAWAAQAFAQgFAPgAg4AQQgFgQAFgPIAWAAIAAAfg");
	this.shape_3.setTransform(18.3,18.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5D5C5C").s().p("AAeg7IAFADIAAAkIAAAFIAAAfIAAAFIAAAkQgCADgDAAgAgiA4IAAgjIAAgFIAAgfIAAgFIAAgjIAEgDIAAB1IgEgDg");
	this.shape_4.setTransform(18.3,18.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#3C3C3C","#8C8C8C","#959595","#BCBCBC","#EAEAEA","#C5C5C5","#7B7B7B","#453932"],[0,0.114,0.259,0.376,0.522,0.643,0.808,1],-7.9,3.4,7.1,-3.6).s().p("AAjAlIAAgEIAAgiIgFgEQgNgKgQAAQgPAAgQALIgEAEIAAAhIAAAEIgWAAIAAg1QAZgUAgAAQAgAAAYATIAAA2g");
	this.shape_5.setTransform(18.3,13.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#888480").s().p("Ag4BMIAAgFQAZAVAgAAQAgAAAYgTIAAAFQgYASggAAQggAAgZgUgAg4hLQAHgGAJgEIABgBIABAAIACgBQAGgDAGgCIAEgBIAAAAIAJgBIACgBIAKAAQAgAAAYASIAAAFQgYgTggAAQggAAgZAVg");
	this.shape_6.setTransform(18.3,18.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#3C3C3C","#8C8C8C","#959595","#BCBCBC","#C5C5C5","#7B7B7B","#453932"],[0,0.114,0.259,0.376,0.525,0.808,1],-9.9,9.2,10,-9.1).s().p("AhKBMQggggAAgsQAAgrAgggQAfgfArAAQAsAAAgAfQAfAgAAArQAAAsgfAgQggAfgsAAQgrAAgfgfgAgKheIgDAAIgIABIgBAAIgDABQgHACgFADIgCABIgBABIgCAAQgIAEgIAGIgJAIQgdAdAAAmQAAAoAdAcIAJAIQAZAVAhgBQAgAAAYgSIALgKQAdgcAAgoQAAgmgdgdIgLgKQgYgSggAAIgKABg");
	this.shape_7.setTransform(18.5,18.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#3C3C3C","#8C8C8C","#BFBFBF","#C5C5C5","#7B7B7B","#453932"],[0,0.114,0.49,0.643,0.808,1],-10.4,6.2,10.4,-6.1).s().p("AA4BJIAAg5QAFgPgFgQIAAg5IAAgFIAMAKQAcAdAAAmQAAAogcAcIgMAKgAhDBEQgcgcAAgoQAAgmAcgdIAKgIIAAAFIAAA3QgFAPAFAQIAAA3IAAAFIgKgIg");
	this.shape_8.setTransform(18.4,18.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#262626","#7B7B7B","#595959","#666666","#2C2521"],[0,0.286,0.506,0.667,1],-15.1,7.4,15.2,-7.3).s().p("AgXCIIgCgBIhmhXIgBgCIgBgCIAYiCIABgCIABAAIB9guIACgBIACABIBmBYIABABIAAACIgXCCIgBACIgCABIh8AtIgBABIgBAAgAhihSIgXB+IBjBUIB5gtIAWh9IhjhVg");
	this.shape_9.setTransform(18.4,18.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#343D43").s().p("AhmBoQgrgsAAg8QAAg7ArgrQAqgrA8AAQA8AAAsArQAqArAAA7QAAA8gqAsQgsAqg8AAQg8AAgqgqgAAViHIh9AuIgBABIgBACIgYCCIABACIABABIBmBYIACABIACgBIB8guIACgBIABgCIAXiBIAAgCIgBgCIhmhXIgCgBIgBAAIgBAAg");
	this.shape_10.setTransform(18.5,18.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#E8EBEC","#9AA0A4"],[0,1],11.5,11.1,-11.5,-11).s().p("AhvBxQgvgvAAhCQAAhBAvguQAugvBBAAQBCAAAvAvQAuAuAABBQAABCguAvQgvAuhCAAQhBAAgugugAhmhmQgrArAAA7QAAA8ArAsQAqAqA8AAQA8AAAsgqQAqgsAAg8QAAg7gqgrQgsgrg8AAQg8AAgqArg");
	this.shape_11.setTransform(18.5,18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#3C3C3C","#8C8C8C","#BFBFBF","#C5C5C5","#7B7B7B","#453932"],[0,0.114,0.49,0.643,0.808,1],-10.3,6.3,10.5,-6).s().p("AgXCKIgBAAIgCgCIAAABIgBgBIhmhWIAAAAIgCgDIAAgBIAAgCIAXiCIAAgBIACgCIgBAAIABAAIACgCIABAAIB8guIAAAAIADAAIAAAAIADACIAAgBIABABIBmBXIABADIABAAIAAADIAAAAIgYCBIAAAAIgBADIAAAAIgDACIgBAAIh7AuIAAAAIgCAAIgBAAg");
	this.shape_12.setTransform(18.4,18.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.5,2.5,32,32);


(lib.GEN_switch02downcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#D1D7D8","#7B7B7B"],[0.173,0.553,1],-1.6,-4,0,-1.6,-4,12).s().p("AgnAtQgUgSgBgdIAAgJIAAgEQACgMAIgJIAIgJQASgPAYAAQAZAAASAPIAIAIQAIAKABAMIABABIAAALQgBAdgTASQgRARgYAAQgWAAgRgQg");
	this.shape.setTransform(6.5,22.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#E7EAEA","#FFFFFF","#FFFFFF","#DADFE0","#C2C7C8"],[0,0.196,0.486,0.839,1],-6.1,4.6,6.2,4.6).s().p("AA8BfQgBgMgIgKIgIgIQgSgPgZAAQgYAAgSAPIgIAJQgIAJgCAMIAQiQQAGgsAlgBQAjgBAKAtIARCRg");
	this.shape_1.setTransform(6.5,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#E7EAEA","#FFFFFF","#FFFFFF","#DADFE0","#C2C7C8"],[0,0.196,0.486,0.839,1],-6.1,0.7,6.2,0.7).s().p("AgnB2QgUgSgBgfIAAgJIAAgEIAQiQQADgXAMgLQALgLARAAQATgBANAPQAJALAEATIARCRIgBAAIABABIAAALQgBAfgTASQgRARgYAAQgWAAgRgQg");
	this.shape_2.setTransform(6.5,15.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#5E5E5E","#959595","#BCBCBC","#C5C5C5","#7B7B7B","#5E5E5E"],[0,0.173,0.38,0.549,0.808,1],-4.1,4,3.1,4).s().p("AgCACQgRABgKAKIABgLQACgFAHgGQAIgHALAAQALAAAJAHQAHAGABAFIACAPQgMgPgUAAg");
	this.shape_3.setTransform(6.6,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.4,0,12.4,28.9);


(lib.GEN_switch02down = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#D1D7D8","#7B7B7B"],[0.173,0.553,1],-1.6,-4,0,-1.6,-4,12).s().p("AgnAtQgUgSgBgdIAAgJIAAgEQACgMAIgJIAIgJQASgPAYAAQAZAAASAPIAIAIQAIAKABAMIABABIAAALQgBAdgTASQgRARgYAAQgWAAgRgQg");
	this.shape.setTransform(6.5,22.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#E7EAEA","#FFFFFF","#FFFFFF","#DADFE0","#C2C7C8"],[0,0.196,0.486,0.839,1],-6.1,4.6,6.2,4.6).s().p("AA8BfQgBgMgIgKIgIgIQgSgPgZAAQgYAAgSAPIgIAJQgIAJgCAMIAQiQQAGgsAlgBQAjgBAKAtIARCRg");
	this.shape_1.setTransform(6.5,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#E7EAEA","#FFFFFF","#FFFFFF","#DADFE0","#C2C7C8"],[0,0.196,0.486,0.839,1],-6.1,0.7,6.2,0.7).s().p("AgnB2QgUgSgBgfIAAgJIAAgEIAQiQQADgXAMgLQALgLARAAQATgBANAPQAJALAEATIARCRIgBAAIABABIAAALQgBAfgTASQgRARgYAAQgWAAgRgQg");
	this.shape_2.setTransform(6.5,15.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#5E5E5E","#959595","#BCBCBC","#C5C5C5","#7B7B7B","#5E5E5E"],[0,0.173,0.38,0.549,0.808,1],-4.1,4,3.1,4).s().p("AgCACQgRABgKAKIABgLQACgFAHgGQAIgHALAAQALAAAJAHQAHAGABAFIACAPQgMgPgUAAg");
	this.shape_3.setTransform(6.6,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.4,0,12.4,28.9);


(lib.GEN_switch01centercopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#D1D7D8","#7B7B7B"],[0.173,0.553,1],-0.7,-1.5,0,-0.7,-1.5,13.4).s().p("Ag3A4QgYgXABghQgBggAYgXQAXgYAgABQAhgBAXAYQAXAXABAgQgBAhgXAXQgXAYghAAQggAAgXgYg");
	this.shape.setTransform(6.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-7.4,16,16);


(lib.GEN_switch01center = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#D1D7D8","#7B7B7B"],[0.173,0.553,1],-0.7,-1.5,0,-0.7,-1.5,13.4).s().p("Ag3A4QgYgXABghQgBggAYgXQAXgYAgABQAhgBAXAYQAXAXABAgQgBAhgXAXQgXAYghAAQggAAgXgYg");
	this.shape.setTransform(6.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-7.4,16,16);


(lib.GEN_screw09 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#484848","#1E1E1E"],[0,1],-1.4,-0.8,0,-1.4,-0.8,3.8).s().p("AgPAYIAlgpQAHAIAAAJQAAALgIAJQgIAJgMAAIgBAAQgJAAgGgFgAgcAAQAAgJAHgJQAJgJAMgBQAIAAAJAGIgnApQgFgIgBgLg");
	this.shape.setTransform(2.9,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1A1A1A").s().p("AgRAWIAmgpIABACIglApIgCgCgAgVATIgBAAIAngpIAAgBIABABIgmAqIgBgBg");
	this.shape_1.setTransform(3,3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgTAVIgBgBIAAAAIAmgqIABACIACABIgmApIgCgBg");
	this.shape_2.setTransform(3,3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353F42").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_3.setTransform(0.8,5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#525F64").s().p("AAAAAIAAAAIAAAAg");
	this.shape_4.setTransform(4.7,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.9,5.9);


(lib.GEN_screw04copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#79888E").s().p("AgOApIgBgBIAGgVQACgPgNgEIgWgFIAAgBIACgIIAAgBIABAAIAWAGQAOACADgNIAGgWIABAAIAIACIABAAIAAABIgGAVQgCAOANAEIABAAIAVAGIABAAIgDAIIAAABIgBABIgVgGIgBAAQgOgBgEAMIAAABIgFAVIgBAAg");
	this.shape.setTransform(2,-1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#F3F4F5","#ACB5B9"],[0,1],1.7,1.3,0,1.7,1.3,7).s().p("AgGAuIgJgCQgEgBABgEIAGgVQABgLgKgEIAAAAIgWgFIAAAAQgDgBABgEIACgIQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAIAWAGQALABAEgKIAAAAIAEgVIAAgBQABgDAEABIAIACQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgFAWQgCAKAKAGIAWAEQADAAAAAFIgDAIQgBADgEAAIgVgGQgMAAgEAKIgDAUQgCADgDAAIAAAAgAgogOIgCAIIAAABIAWAFQANAEgCAPIgGAVIABABIAIACIABAAIAFgVIAAgBQAEgMAOABIABAAIAVAGIABgBIAAgBIADgIIgBAAIgVgGIgBAAQgNgEACgOIAGgVIAAgBIgBAAIgIgCIgBAAIgGAWQgDANgOgCIgWgGIgBAAg");
	this.shape_1.setTransform(2,-1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#9AA0A4","#F3F4F5"],[0,1],4.3,8.3,-2.2,-4.3).s().p("AgOBdQgngGgWghQgYggAHgkQAGgnAhgWQAfgXAlAGQAnAHAWAfQAXAggGAlQgHAmggAXQgZASgdAAIgOgBgAgzhIQgfAWgGAlQgGAiAWAfQAVAeAlAHQAiAGAfgWQAfgWAGgkQAGgjgVgfQgWgfglgGIgOgBQgcAAgXARg");
	this.shape_2.setTransform(1.8,-1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#DFE2E4","#BFC6C9"],[0,1],-4.9,-7.5,4.9,7.6).s().p("AgNBZQglgHgWgeQgWgfAGgiQAHglAfgWQAdgWAkAGQAkAGAWAfQAWAfgGAjQgGAkggAWQgYARgbAAIgNgBgAgng4QgMAJgHALQgIAMgCAOQgFAbARAYQAJAMALAHQAMAHAOACQAbAFAXgRQAMgJAHgLQAIgLACgPQAFgbgRgXQgJgMgLgHQgLgIgPgCIgLgBQgVAAgSANg");
	this.shape_3.setTransform(1.7,-1.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#F3F4F5","#ACB5B9"],[0,1],-2.7,-3.5,0,-2.7,-3.5,10).s().p("AgKBFQgPgCgLgHQgLgHgJgMQgRgYAFgbQACgOAIgMQAHgLAMgJQAXgRAbAFQAOACAMAIQALAHAJAMQARAXgFAbQgCAPgIALQgHALgMAJQgSANgWAAIgKgBg");
	this.shape_4.setTransform(1.7,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.7,-11.2,19,19);


(lib.GEN_screw04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#79888E").s().p("AgOApIgBgBIAGgVQACgPgNgEIgWgFIAAgBIACgIIAAgBIABAAIAWAGQAOACADgNIAGgWIABAAIAIACIABAAIAAABIgGAVQgCAOANAEIABAAIAVAGIABAAIgDAIIAAABIgBABIgVgGIgBAAQgOgBgEAMIAAABIgFAVIgBAAg");
	this.shape.setTransform(2,-1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#F3F4F5","#ACB5B9"],[0,1],1.7,1.3,0,1.7,1.3,7).s().p("AgGAuIgJgCQgEgBABgEIAGgVQABgLgKgEIAAAAIgWgFIAAAAQgDgBABgEIACgIQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAIAWAGQALABAEgKIAAAAIAEgVIAAgBQABgDAEABIAIACQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgFAWQgCAKAKAGIAWAEQADAAAAAFIgDAIQgBADgEAAIgVgGQgMAAgEAKIgDAUQgCADgDAAIAAAAgAgogOIgCAIIAAABIAWAFQANAEgCAPIgGAVIABABIAIACIABAAIAFgVIAAgBQAEgMAOABIABAAIAVAGIABgBIAAgBIADgIIgBAAIgVgGIgBAAQgNgEACgOIAGgVIAAgBIgBAAIgIgCIgBAAIgGAWQgDANgOgCIgWgGIgBAAg");
	this.shape_1.setTransform(2,-1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#9AA0A4","#F3F4F5"],[0,1],4.3,8.3,-2.2,-4.3).s().p("AgOBdQgngGgWghQgYggAHgkQAGgnAhgWQAfgXAlAGQAnAHAWAfQAXAggGAlQgHAmggAXQgZASgdAAIgOgBgAgzhIQgfAWgGAlQgGAiAWAfQAVAeAlAHQAiAGAfgWQAfgWAGgkQAGgjgVgfQgWgfglgGIgOgBQgcAAgXARg");
	this.shape_2.setTransform(1.8,-1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#DFE2E4","#BFC6C9"],[0,1],-4.9,-7.5,4.9,7.6).s().p("AgNBZQglgHgWgeQgWgfAGgiQAHglAfgWQAdgWAkAGQAkAGAWAfQAWAfgGAjQgGAkggAWQgYARgbAAIgNgBgAgng4QgMAJgHALQgIAMgCAOQgFAbARAYQAJAMALAHQAMAHAOACQAbAFAXgRQAMgJAHgLQAIgLACgPQAFgbgRgXQgJgMgLgHQgLgIgPgCIgLgBQgVAAgSANg");
	this.shape_3.setTransform(1.7,-1.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#F3F4F5","#ACB5B9"],[0,1],-2.7,-3.5,0,-2.7,-3.5,10).s().p("AgKBFQgPgCgLgHQgLgHgJgMQgRgYAFgbQACgOAIgMQAHgLAMgJQAXgRAbAFQAOACAMAIQALAHAJAMQARAXgFAbQgCAPgIALQgHALgMAJQgSANgWAAIgKgBg");
	this.shape_4.setTransform(1.7,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.7,-11.2,19,19);


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


(lib.GEN_pbbase02copy = function(mode,startPosition,loop) {
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


(lib.GEN_flipcoverbase01copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373737").s().p("Ah0GjQgfAAAAgfIAAoNIAJgCIABAAIABgCIAAj3QAAgeAfAAIDSAAQAgAAAAAeIAAD3IAAACIACAAIAJACIAAINQAAAfgfAAg");
	this.shape.setTransform(15,43.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#484848","#222222"],[0,1],-1.3,-0.4,1.4,0.4).s().p("AB1GpIjpAAQgkAAAAglIAAoPIABgBIABgBIAJgCIAAj1QAAgjAkgBIDSAAQAlABAAAjIAAD1IAJACIACABIAAABIAAIPQAAAkgkABIAAAAgAiImEIAAD3IgBACIgBAAIgJACIAAINQAAAfAfAAIDpAAQAfAAAAgfIAAoNIgJgCIgBAAIgBgCIAAj3QAAgeggAAIjSAAQgfAAAAAeg");
	this.shape_1.setTransform(15,43.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#404040","#1E1E1E"],[0,1],-1.3,-0.4,1.5,0.5).s().p("AB1GsIjpAAQgoAAAAgoIAAoPQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAIAGgBIAAjyQAAgnAoAAIDSAAQApAAAAAnIAADyIAGABQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABIAAIPQAAAogoAAIAAAAgAiNmEIAAD1IgJACIgBABIgBABIAAIPQAAAlAkAAIDpAAQAkAAAAglIAAoPIAAgBIgCgBIgJgCIAAj1QAAgjglgBIjSAAQgkABAAAjg");
	this.shape_2.setTransform(15,43.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,0.4,31.5,85.8);


(lib.GEN_flipcoverbase01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373737").s().p("Ah0GjQgfAAAAgfIAAoNIAJgCIABAAIABgCIAAj3QAAgeAfAAIDSAAQAgAAAAAeIAAD3IAAACIACAAIAJACIAAINQAAAfgfAAg");
	this.shape.setTransform(15,43.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#484848","#222222"],[0,1],-1.3,-0.4,1.4,0.4).s().p("AB1GpIjpAAQgkAAAAglIAAoPIABgBIABgBIAJgCIAAj1QAAgjAkgBIDSAAQAlABAAAjIAAD1IAJACIACABIAAABIAAIPQAAAkgkABIAAAAgAiImEIAAD3IgBACIgBAAIgJACIAAINQAAAfAfAAIDpAAQAfAAAAgfIAAoNIgJgCIgBAAIgBgCIAAj3QAAgeggAAIjSAAQgfAAAAAeg");
	this.shape_1.setTransform(15,43.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#404040","#1E1E1E"],[0,1],-1.3,-0.4,1.5,0.5).s().p("AB1GsIjpAAQgoAAAAgoIAAoPQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAIAGgBIAAjyQAAgnAoAAIDSAAQApAAAAAnIAADyIAGABQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABIAAIPQAAAogoAAIAAAAgAiNmEIAAD1IgJACIgBABIgBABIAAIPQAAAlAkAAIDpAAQAkAAAAglIAAoPIAAgBIgCgBIgJgCIAAj1QAAgjglgBIjSAAQgkABAAAjg");
	this.shape_2.setTransform(15,43.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,0.4,31.5,85.8);


(lib.GEN_flipcoverblackacopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#2A2A2A","#444444","#333333"],[0,0.525,1],0,-4.6,0,4.7).s().p("Ah4AYQgKgBgDgMIAAgLIABgBIgBAAIgCgBQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAAAAAAAIAFgOQAFgGAGAAIDvAAQAGAAAEAGIAFAIIACAFIAAABIABACIAAABIAAAAIAAACIgDAMQgEAJgJgCIjdACIAAgBQgCACgIAAIgKAAg");
	this.shape.setTransform(-34.4,-12.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// flip cover
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#262626","#222222","#262626","#222222"],[0,0.392,0.541,1],0,-41.1,0,41.2).s().p("AhjGbIgKAAIgBAAIgKgCQgUgEgKgNQgHgJgCgNQgCgKABgKIAAkNQgBglAGghIAPhrIAAhhIAAhzIAAgyQAAgaANgMQAMgNAYgBIADAAIACABIABABIAAAMIAAABIAAAAIABAHQAFAgAUAUQAZAYAiAAQAigBAYgYQAVgUAEgfIABgHIAAAAIABgNIAAgBIACgBIACAAQAaAAANAOQANAMAAAaIAAAyIAABzIAABhIAPBsQAGAggBAlIAAENQABAMgCALQgEAPgJAJQgMAKgTADIgBAAIgDAAIgMABgAh8mJQgLAMAAAXIAAEGIgBADIgBAGIAAACIgBAGIgMBbIAAAAQgGAgABAlIAAENQgBAKACAJIAAACQACALAGAHQAJAMASAEIAKABIAAAAIAKAAIDHAAIAKAAIABAAIABAAIADAAQASgDAKgKQAIgHADgMIABgCQACgKgBgMIAAkNQABglgGggIAAAAIgOhkIAAgBIAAAAIAAgBIABAAIAAgCIgBgBIgBAAIAAgBIAAgCIAAkGQAAgXgMgMQgLgMgXAAIgBAKQgDAmgZAYQgZAZgkAAQgkAAgagYQgYgYgEgnIAAgKIgBAAQgWABgLALg");
	this.shape_1.setTransform(-34.4,-3.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#343434").s().p("AgBAFIABgFIABAIgAAAgHQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIACABIAAAAIgBAAIAAAAQgBABAAADg");
	this.shape_2.setTransform(-48,-11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#222222").s().p("Ag6AOQgUgSgFggQAWA0A9ABQA7ABAZg2QgEAfgVASQgYAYgjAAIAAAAQgiAAgYgXg");
	this.shape_3.setTransform(-34.5,-38.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#2F2F2F","#2B2B2B","#2B2B2B"],[0,0.102,1],0.3,16.5,0.3,-8.8).s().p("AiHCYIAAkEQAAgXAMgMQALgLAVgBIABAAIAAAKQAEAnAYAYQAaAZAkAAQAkgBAagZQAYgYADgmIABgKQAXAAAMAMQALAMAAAXIAAEEIABADIAAAAIgDgDIgFgFQgEgEgGAAIjvAAQgFAAgFAEIgGAJg");
	this.shape_4.setTransform(-34.4,-28.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#343434","#333333","#333333","#373737"],[0,0.227,0.769,1],-13.7,0,13.9,0).s().p("ABxD0IgHAAIjWAAIgIAAIgCAAQgMgBgEgKQgDgFAAgFIAAgFIAAm3IAAgBIAAAAIAAgGQAAAAAAAAQABgBAAABQABAAAAAAQABABABAAIgDgJIAAgDQABgDACgBIAAAAIABAIQADAHAKABQARABADgCIAAAAIDdgBQAJABADgFIADgIIABABIAAASIAAG2IAAAIQAAAIgDAEQgFAIgMAAgAgEDAQgDAEgBAFQABAGADADIABABQADADAEAAQAEAAAEgDIABgBQADgDAAgGQAAgFgDgEQgEgEgFAAQgEAAgEAEg");
	this.shape_5.setTransform(-34.5,11.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#333333","#515151","#717171","#515151","#333333"],[0,0.333,0.471,0.627,1],-14.1,-6.3,-14.1,4.7).s().p("ACNg4QAHACADAGIAABhQgDAGgHACgAiWAwIAAhfQADgHAHgCIAABxQgHgCgDgHg");
	this.shape_6.setTransform(-34.4,-28.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#151515","#444444"],[0,1],-0.5,-0.5,0.6,0.6).s().p("AgHAJIgBAAQgDgEgBgFQABgEADgEQAEgDAEgBQAFABAEADQADAEAAAEQAAAFgDAEIgBAAQgEAEgEgBQgDABgEgEgAgFgGQgDADAAADQAAAEADACIABABQACADACAAQADAAACgCIABgCQAEgCAAgEQAAgDgEgDQgCgDgEAAQgDAAgCADg");
	this.shape_7.setTransform(-34,32);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#343434","#252525"],[0.459,0.647],-2.2,-1.8,0,-2.2,-1.8,7.2).s().p("AgSASIgFgKIAIAAIAEAAQALAAAEgHQADgCAAgJIAAgIQAIAKAJgDQgDALgIAGQgKAKgRACIgDAAIAAAAIAAABIgBgBg");
	this.shape_8.setTransform(-21.4,35.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#343434","#252525"],[0.459,0.647],2.5,-1.8,0,2.5,-1.8,7.4).s().p("AAVARIgJgBQgQgEgJgLQgGgGgCgKQALAIAFgKIAAAFQAAAGADAEQACAIAMABIADAAIAHAAIgBAKg");
	this.shape_9.setTransform(-47.7,35.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#222222","#363636"],[0,0.902],0.1,1.1,0.1,-0.6).s().p("AhjAFIgKAAIABgJIDVAAIAFAIIgKABg");
	this.shape_10.setTransform(-34.4,36.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#222222","#363636"],[0,0.902],-1.3,-0.3,1,-0.3).s().p("AgIDgIAAgDQgCgJABgKIAAkLQgBgkAGggIAAAAIAKhdIAFADQgBAAgBgBQgBAAAAAAQgBAAAAAAQAAAAAAAAIAAAGIAAABIAAAAIAAG3QgDAFgEAAQgDAAgFgDg");
	this.shape_11.setTransform(-49,11.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#222222","#363636"],[0,0.902],1.1,0.3,-0.9,0.3).s().p("AgIDhIAAm2IAAgSIAMBnIAAAAQAGAggBAkIAAELQABAMgDAKIAAACIgFABQgEAAgGgHg");
	this.shape_12.setTransform(-19.7,10.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#251F1F").s().p("AAAAfQg9gBgWg0IgBgIIAAAAQAVA3A/ACQA+ABAXg6IAAAAIgBAHQgYA2g7AAIgBAAg");
	this.shape_13.setTransform(-34.5,-39.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#151515").s().p("AgEAHIgBgBQgDgCAAgEQAAgDADgDQACgDADAAQAEAAACADQAEADAAADQAAAEgEACIgBACQgCACgDAAQgCAAgCgDg");
	this.shape_14.setTransform(-34,32);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#EE4A4A","#F77777","#F53434"],[0,0.149,1],-3.7,23,-0.3,23).s().p("AAAAAIAAAAIAAAAg");
	this.shape_15.setTransform(-44.5,-11.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#BFAA9D","#95806A"],[0,1],0,-0.4,0,0,-0.4,1.6).s().p("AgDgVQACABACAEQADAGAAAJIAAADQAAAIgDAHQgCAEgCABg");
	this.shape_16.setTransform(-17.6,-28.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#222222","#232323","#666666","#000000","#000000"],[0,0.447,0.627,0.745,1],0,6.7,0,-6.7).s().p("AgDBBQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAAgLIAAhhIAAgLQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAQABABAAABIAAAnIAAArIAAAlQAAABgBABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAAAgBQAAAAgBAAQAAAAgBgBQgBAAAAAAg");
	this.shape_17.setTransform(-18.7,-28.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#222222","#232323","#666666","#000000","#000000"],[0,0.447,0.627,0.745,1],0,6.7,0,-6.7).s().p("AgDBBQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAAglIAAgrIAAgnQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAQABABAAABIAAAMIAABfIAAAMQAAABgBABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAAAgBQAAAAgBAAQAAAAgBgBQgBAAAAAAg");
	this.shape_18.setTransform(-50.2,-28.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["#BFAA9D","#95806A"],[0,1],0,-0.4,0,0,-0.4,1.6).s().p("AAAARQgDgHgBgIIAAgDQABgJADgGQABgEAEgBIAAArQgEgBgBgEg");
	this.shape_19.setTransform(-51.3,-28.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// flip cover fill
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#343434","#333333","#333333","#373737"],[0,0.227,0.769,1],-34.1,-3.8,-34.1,-3.8).s().p("ABuGRIgHAAIjWAAIgHAAIgDAAQgMgBgEgKQgDgFAAgFIAAgFIAAm3IAAgBIAAAAIAAgGQAAAAABAAQAAgBAAABQABAAAAAAQABABABAAIgDgJIAAgDQABgDACgBIABAAIAAAAIAAAAIgCgBQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAAAABIAAgEIAAkGQABgXALgMQALgLAWgBIAAAAIABAKQADAnAYAYQAaAZAlAAQAkgBAZgZQAZgYADgmIAAgKQAXAAAMAMQALAMABAXIAAEGIAAADIAAAAIAAABIABABIAAABIgBABIABAAIgBAAIABABIAOBkIAAABQAGAggBAkIAAENQABAMgDAKIAAACQgJADgIgJIAAAIQAAAIgDAEQgFAIgMAAgAgHFdQgDAEAAAFQAAAGADADIABABQAEADADAAQAFAAADgDIABgBQAEgDAAgGQAAgFgEgEQgEgEgFAAQgEAAgEAEgAhmhHIAAAAIAAgBgAiZjFIAAhgQADgHAHgCIAAByQgHgCgDgHgAg9lKQgVgVgEgfQAWA1A9ABQA7ABAZg4QgFAfgVAUQgXAYgiABIAAAAQgjAAgYgXg");
	this.shape_20.setTransform(-34.2,-3.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#343434","#333333","#333333","#373737"],[0,0.227,0.769,1],-0.5,0,0.5,0).s().p("AgDgVQACABACAEQADAGAAAJIAAADQAAAIgDAHQgCAEgCABg");
	this.shape_21.setTransform(-17.6,-28.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#343434","#333333","#333333","#373737"],[0,0.227,0.769,1],0,6.7,0,-6.7).s().p("AgDBBQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAAgLIAAhhIAAgLQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAQABABAAABIAAAnIAAArIAAAlQAAABgBABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAAAgBQAAAAgBAAQAAAAgBgBQgBAAAAAAg");
	this.shape_22.setTransform(-18.7,-28.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#343434","#333333","#333333","#373737"],[0,0.227,0.769,1],0,6.7,0,-6.7).s().p("AgDBBQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAAglIAAgrIAAgnQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAQABABAAABIAAAMIAABfIAAAMQAAABgBABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAAAgBQAAAAgBAAQAAAAgBgBQgBAAAAAAg");
	this.shape_23.setTransform(-50.2,-28.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#343434","#333333","#333333","#373737"],[0,0.227,0.769,1],-0.5,0,0.5,0).s().p("AAAARQgDgHgBgIIAAgDQABgJADgGQABgEAEgBIAAArQgEgBgBgEg");
	this.shape_24.setTransform(-51.3,-28.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#343434","#333333","#333333","#373737"],[0,0.227,0.769,1],-8.5,0,8.6,0).s().p("AAAAfQg9gBgWg0IgBgIIAAAAQAVA3A/ACQA+ABAXg6IAAAAIgBAHQgYA2g7AAIgBAAg");
	this.shape_25.setTransform(-34.5,-39.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#343434","#333333","#333333","#373737"],[0,0.227,0.769,1],-2.2,0,2.3,0).s().p("AAVARIgJgBQgQgEgJgLQgGgGgCgKQALAIAFgKIAAAFQAAAGADAEQACAIAMABIADAAIAHAAIgBAKg");
	this.shape_26.setTransform(-47.7,35.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#343434","#333333","#333333","#373737"],[0,0.227,0.769,1],0.1,1.1,0.1,-0.6).s().p("AhjAFIgKAAIABgJIDVAAIAFAIIgKABg");
	this.shape_27.setTransform(-34.4,36.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#343434","#333333","#333333","#373737"],[0,0.227,0.769,1],-2.4,0,2.5,0).s().p("AgSASIgFgKIAIAAIAEAAQALAAAEgHQADgCAAgJIAAgIQAIAKAJgDQgDALgIAGQgKAKgRACIgDAAIAAAAIAAABIgBgBg");
	this.shape_28.setTransform(-21.4,35.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#343434","#333333","#333333","#373737"],[0,0.227,0.769,1],-0.2,0,0.2,0).s().p("AgBAAIABgDIACAHg");
	this.shape_29.setTransform(-48.1,-11.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#343434","#333333","#333333","#373737"],[0,0.227,0.769,1],-1.3,-0.3,1,-0.3).s().p("AgIDgIAAgDQgCgJABgKIAAkLQgBgkAGggIAAAAIAKhdIAFADQgBAAgBgBQgBAAAAAAQgBAAAAAAQAAAAAAAAIAAAGIAAABIAAAAIAAG3QgDAFgEAAQgDAAgFgDg");
	this.shape_30.setTransform(-49,11.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#343434","#333333","#333333","#373737"],[0,0.227,0.769,1],-3.7,23,-0.3,23).s().p("AAAAAIAAAAIAAAAg");
	this.shape_31.setTransform(-44.5,-11.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#343434","#333333","#333333","#373737"],[0,0.227,0.769,1],-1,0,1,0).s().p("AgEAHIgBgBQgDgCAAgEQAAgDADgDQACgDADAAQAEAAACADQAEADAAADQAAAEgEACIgBACQgCACgDAAQgCAAgCgDg");
	this.shape_32.setTransform(-34,32);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#343434","#333333","#333333","#373737"],[0,0.227,0.769,1],-0.5,-0.5,0.6,0.6).s().p("AgHAJIgBAAQgDgEgBgFQABgEADgEQAEgDAEgBQAFABAEADQADAEAAAEQAAAFgDAEIgBAAQgEAEgEgBQgDABgEgEgAgFgGQgDADAAADQAAAEADACIABABQACADACAAQADAAACgCIABgCQAEgCAAgEQAAgDgEgDQgCgDgEAAQgDAAgCADg");
	this.shape_33.setTransform(-34,32);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#343434","#333333","#333333","#373737"],[0,0.227,0.769,1],-0.2,0,0.3,0).s().p("AAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIACABIAAAAIgBAAIAAAAQgBAAgBACg");
	this.shape_34.setTransform(-48,-12.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#343434","#333333","#333333","#373737"],[0,0.227,0.769,1],-14.3,16.7,-14.3,-8.6).s().p("AgDg4QAEACADAGIAABhQgDAGgEACg");
	this.shape_35.setTransform(-19.8,-28.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#343434","#333333","#333333","#373737"],[0,0.227,0.769,1],0,-41.1,0,41.2).s().p("AhjGbIgKAAIgBAAIgKgCQgUgEgKgNQgHgJgCgNQgCgKABgKIAAkNQgBglAGghIAPhrIAAhhIAAhzIAAgyQAAgaANgMQAMgNAYgBIADAAIACABIABABIAAAMIAAABIAAAAIABAHQAFAgAUAUQAZAYAiAAQAigBAYgYQAVgUAEgfIABgHIAAAAIABgNIAAgBIACgBIACAAQAaAAANAOQANAMAAAaIAAAyIAABzIAABhIAPBsQAGAggBAlIAAENQABAMgCALQgEAPgJAJQgMAKgTADIgBAAIgDAAIgMABgAh8mJQgLAMAAAXIAAEGIgBADIgBAGIAAACIgBAGIgMBbIAAAAQgGAgABAlIAAENQgBAKACAJIAAACQACALAGAHQAJAMASAEIAKABIAAAAIAKAAIDHAAIAKAAIABAAIABAAIADAAQASgDAKgKQAIgHADgMIABgCQACgKgBgMIAAkNQABglgGggIAAAAIgOhkIAAgBIAAAAIAAgBIABAAIAAgCIgBgBIgBAAIAAgBIAAgCIAAkGQAAgXgMgMQgLgMgXAAIgBAKQgDAmgZAYQgZAZgkAAQgkAAgagYQgYgYgEgnIAAgKIgBAAQgWABgLALg");
	this.shape_36.setTransform(-34.4,-3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.8,-44.5,34.7,82.3);


(lib.GEN_flipcoverblacka = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#2A2A2A","#444444","#333333"],[0,0.525,1],0,-4.6,0,4.7).s().p("Ah4AYQgKgBgDgMIAAgLIABgBIgBAAIgCgBQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAAAAAAAIAFgOQAFgGAGAAIDvAAQAGAAAEAGIAFAIIACAFIAAABIABACIAAABIAAAAIAAACIgDAMQgEAJgJgCIjdACIAAgBQgCACgIAAIgKAAg");
	this.shape.setTransform(-34.4,-12.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// flip cover
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#262626","#222222","#262626","#222222"],[0,0.392,0.541,1],0,-41.1,0,41.2).s().p("AhjGbIgKAAIgBAAIgKgCQgUgEgKgNQgHgJgCgNQgCgKABgKIAAkNQgBglAGghIAPhrIAAhhIAAhzIAAgyQAAgaANgMQAMgNAYgBIADAAIACABIABABIAAAMIAAABIAAAAIABAHQAFAgAUAUQAZAYAiAAQAigBAYgYQAVgUAEgfIABgHIAAAAIABgNIAAgBIACgBIACAAQAaAAANAOQANAMAAAaIAAAyIAABzIAABhIAPBsQAGAggBAlIAAENQABAMgCALQgEAPgJAJQgMAKgTADIgBAAIgDAAIgMABgAh8mJQgLAMAAAXIAAEGIgBADIgBAGIAAACIgBAGIgMBbIAAAAQgGAgABAlIAAENQgBAKACAJIAAACQACALAGAHQAJAMASAEIAKABIAAAAIAKAAIDHAAIAKAAIABAAIABAAIADAAQASgDAKgKQAIgHADgMIABgCQACgKgBgMIAAkNQABglgGggIAAAAIgOhkIAAgBIAAAAIAAgBIABAAIAAgCIgBgBIgBAAIAAgBIAAgCIAAkGQAAgXgMgMQgLgMgXAAIgBAKQgDAmgZAYQgZAZgkAAQgkAAgagYQgYgYgEgnIAAgKIgBAAQgWABgLALg");
	this.shape_1.setTransform(-34.4,-3.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#343434").s().p("AgBAFIABgFIABAIgAAAgHQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIACABIAAAAIgBAAIAAAAQgBABAAADg");
	this.shape_2.setTransform(-48,-11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#222222").s().p("Ag6AOQgUgSgFggQAWA0A9ABQA7ABAZg2QgEAfgVASQgYAYgjAAIAAAAQgiAAgYgXg");
	this.shape_3.setTransform(-34.5,-38.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#2F2F2F","#2B2B2B","#2B2B2B"],[0,0.102,1],0.3,16.5,0.3,-8.8).s().p("AiHCYIAAkEQAAgXAMgMQALgLAVgBIABAAIAAAKQAEAnAYAYQAaAZAkAAQAkgBAagZQAYgYADgmIABgKQAXAAAMAMQALAMAAAXIAAEEIABADIAAAAIgDgDIgFgFQgEgEgGAAIjvAAQgFAAgFAEIgGAJg");
	this.shape_4.setTransform(-34.4,-28.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#343434","#333333","#333333","#373737"],[0,0.227,0.769,1],-13.7,0,13.9,0).s().p("ABxD0IgHAAIjWAAIgIAAIgCAAQgMgBgEgKQgDgFAAgFIAAgFIAAm3IAAgBIAAAAIAAgGQAAAAAAAAQABgBAAABQABAAAAAAQABABABAAIgDgJIAAgDQABgDACgBIAAAAIABAIQADAHAKABQARABADgCIAAAAIDdgBQAJABADgFIADgIIABABIAAASIAAG2IAAAIQAAAIgDAEQgFAIgMAAgAgEDAQgDAEgBAFQABAGADADIABABQADADAEAAQAEAAAEgDIABgBQADgDAAgGQAAgFgDgEQgEgEgFAAQgEAAgEAEg");
	this.shape_5.setTransform(-34.5,11.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#333333","#515151","#717171","#515151","#333333"],[0,0.333,0.471,0.627,1],-14.1,-6.3,-14.1,4.7).s().p("ACNg4QAHACADAGIAABhQgDAGgHACgAiWAwIAAhfQADgHAHgCIAABxQgHgCgDgHg");
	this.shape_6.setTransform(-34.4,-28.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#151515","#444444"],[0,1],-0.5,-0.5,0.6,0.6).s().p("AgHAJIgBAAQgDgEgBgFQABgEADgEQAEgDAEgBQAFABAEADQADAEAAAEQAAAFgDAEIgBAAQgEAEgEgBQgDABgEgEgAgFgGQgDADAAADQAAAEADACIABABQACADACAAQADAAACgCIABgCQAEgCAAgEQAAgDgEgDQgCgDgEAAQgDAAgCADg");
	this.shape_7.setTransform(-34,32);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#343434","#252525"],[0.459,0.647],-2.2,-1.8,0,-2.2,-1.8,7.2).s().p("AgSASIgFgKIAIAAIAEAAQALAAAEgHQADgCAAgJIAAgIQAIAKAJgDQgDALgIAGQgKAKgRACIgDAAIAAAAIAAABIgBgBg");
	this.shape_8.setTransform(-21.4,35.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#343434","#252525"],[0.459,0.647],2.5,-1.8,0,2.5,-1.8,7.4).s().p("AAVARIgJgBQgQgEgJgLQgGgGgCgKQALAIAFgKIAAAFQAAAGADAEQACAIAMABIADAAIAHAAIgBAKg");
	this.shape_9.setTransform(-47.7,35.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#222222","#363636"],[0,0.902],0.1,1.1,0.1,-0.6).s().p("AhjAFIgKAAIABgJIDVAAIAFAIIgKABg");
	this.shape_10.setTransform(-34.4,36.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#222222","#363636"],[0,0.902],-1.3,-0.3,1,-0.3).s().p("AgIDgIAAgDQgCgJABgKIAAkLQgBgkAGggIAAAAIAKhdIAFADQgBAAgBgBQgBAAAAAAQgBAAAAAAQAAAAAAAAIAAAGIAAABIAAAAIAAG3QgDAFgEAAQgDAAgFgDg");
	this.shape_11.setTransform(-49,11.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#222222","#363636"],[0,0.902],1.1,0.3,-0.9,0.3).s().p("AgIDhIAAm2IAAgSIAMBnIAAAAQAGAggBAkIAAELQABAMgDAKIAAACIgFABQgEAAgGgHg");
	this.shape_12.setTransform(-19.7,10.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#251F1F").s().p("AAAAfQg9gBgWg0IgBgIIAAAAQAVA3A/ACQA+ABAXg6IAAAAIgBAHQgYA2g7AAIgBAAg");
	this.shape_13.setTransform(-34.5,-39.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#151515").s().p("AgEAHIgBgBQgDgCAAgEQAAgDADgDQACgDADAAQAEAAACADQAEADAAADQAAAEgEACIgBACQgCACgDAAQgCAAgCgDg");
	this.shape_14.setTransform(-34,32);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#EE4A4A","#F77777","#F53434"],[0,0.149,1],-3.7,23,-0.3,23).s().p("AAAAAIAAAAIAAAAg");
	this.shape_15.setTransform(-44.5,-11.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#BFAA9D","#95806A"],[0,1],0,-0.4,0,0,-0.4,1.6).s().p("AgDgVQACABACAEQADAGAAAJIAAADQAAAIgDAHQgCAEgCABg");
	this.shape_16.setTransform(-17.6,-28.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#222222","#232323","#666666","#000000","#000000"],[0,0.447,0.627,0.745,1],0,6.7,0,-6.7).s().p("AgDBBQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAAgLIAAhhIAAgLQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAQABABAAABIAAAnIAAArIAAAlQAAABgBABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAAAgBQAAAAgBAAQAAAAgBgBQgBAAAAAAg");
	this.shape_17.setTransform(-18.7,-28.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#222222","#232323","#666666","#000000","#000000"],[0,0.447,0.627,0.745,1],0,6.7,0,-6.7).s().p("AgDBBQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAAglIAAgrIAAgnQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAQABABAAABIAAAMIAABfIAAAMQAAABgBABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAAAgBQAAAAgBAAQAAAAgBgBQgBAAAAAAg");
	this.shape_18.setTransform(-50.2,-28.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["#BFAA9D","#95806A"],[0,1],0,-0.4,0,0,-0.4,1.6).s().p("AAAARQgDgHgBgIIAAgDQABgJADgGQABgEAEgBIAAArQgEgBgBgEg");
	this.shape_19.setTransform(-51.3,-28.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// flip cover fill
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#343434","#333333","#333333","#373737"],[0,0.227,0.769,1],-34.1,-3.8,-34.1,-3.8).s().p("ABuGRIgHAAIjWAAIgHAAIgDAAQgMgBgEgKQgDgFAAgFIAAgFIAAm3IAAgBIAAAAIAAgGQAAAAABAAQAAgBAAABQABAAAAAAQABABABAAIgDgJIAAgDQABgDACgBIABAAIAAAAIAAAAIgCgBQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAAAABIAAgEIAAkGQABgXALgMQALgLAWgBIAAAAIABAKQADAnAYAYQAaAZAlAAQAkgBAZgZQAZgYADgmIAAgKQAXAAAMAMQALAMABAXIAAEGIAAADIAAAAIAAABIABABIAAABIgBABIABAAIgBAAIABABIAOBkIAAABQAGAggBAkIAAENQABAMgDAKIAAACQgJADgIgJIAAAIQAAAIgDAEQgFAIgMAAgAgHFdQgDAEAAAFQAAAGADADIABABQAEADADAAQAFAAADgDIABgBQAEgDAAgGQAAgFgEgEQgEgEgFAAQgEAAgEAEgAhmhHIAAAAIAAgBgAiZjFIAAhgQADgHAHgCIAAByQgHgCgDgHgAg9lKQgVgVgEgfQAWA1A9ABQA7ABAZg4QgFAfgVAUQgXAYgiABIAAAAQgjAAgYgXg");
	this.shape_20.setTransform(-34.2,-3.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#343434","#333333","#333333","#373737"],[0,0.227,0.769,1],-0.5,0,0.5,0).s().p("AgDgVQACABACAEQADAGAAAJIAAADQAAAIgDAHQgCAEgCABg");
	this.shape_21.setTransform(-17.6,-28.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#343434","#333333","#333333","#373737"],[0,0.227,0.769,1],0,6.7,0,-6.7).s().p("AgDBBQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAAgLIAAhhIAAgLQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAQABABAAABIAAAnIAAArIAAAlQAAABgBABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAAAgBQAAAAgBAAQAAAAgBgBQgBAAAAAAg");
	this.shape_22.setTransform(-18.7,-28.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#343434","#333333","#333333","#373737"],[0,0.227,0.769,1],0,6.7,0,-6.7).s().p("AgDBBQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAAglIAAgrIAAgnQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAQABABAAABIAAAMIAABfIAAAMQAAABgBABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAAAgBQAAAAgBAAQAAAAgBgBQgBAAAAAAg");
	this.shape_23.setTransform(-50.2,-28.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#343434","#333333","#333333","#373737"],[0,0.227,0.769,1],-0.5,0,0.5,0).s().p("AAAARQgDgHgBgIIAAgDQABgJADgGQABgEAEgBIAAArQgEgBgBgEg");
	this.shape_24.setTransform(-51.3,-28.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#343434","#333333","#333333","#373737"],[0,0.227,0.769,1],-8.5,0,8.6,0).s().p("AAAAfQg9gBgWg0IgBgIIAAAAQAVA3A/ACQA+ABAXg6IAAAAIgBAHQgYA2g7AAIgBAAg");
	this.shape_25.setTransform(-34.5,-39.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#343434","#333333","#333333","#373737"],[0,0.227,0.769,1],-2.2,0,2.3,0).s().p("AAVARIgJgBQgQgEgJgLQgGgGgCgKQALAIAFgKIAAAFQAAAGADAEQACAIAMABIADAAIAHAAIgBAKg");
	this.shape_26.setTransform(-47.7,35.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#343434","#333333","#333333","#373737"],[0,0.227,0.769,1],0.1,1.1,0.1,-0.6).s().p("AhjAFIgKAAIABgJIDVAAIAFAIIgKABg");
	this.shape_27.setTransform(-34.4,36.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#343434","#333333","#333333","#373737"],[0,0.227,0.769,1],-2.4,0,2.5,0).s().p("AgSASIgFgKIAIAAIAEAAQALAAAEgHQADgCAAgJIAAgIQAIAKAJgDQgDALgIAGQgKAKgRACIgDAAIAAAAIAAABIgBgBg");
	this.shape_28.setTransform(-21.4,35.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#343434","#333333","#333333","#373737"],[0,0.227,0.769,1],-0.2,0,0.2,0).s().p("AgBAAIABgDIACAHg");
	this.shape_29.setTransform(-48.1,-11.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#343434","#333333","#333333","#373737"],[0,0.227,0.769,1],-1.3,-0.3,1,-0.3).s().p("AgIDgIAAgDQgCgJABgKIAAkLQgBgkAGggIAAAAIAKhdIAFADQgBAAgBgBQgBAAAAAAQgBAAAAAAQAAAAAAAAIAAAGIAAABIAAAAIAAG3QgDAFgEAAQgDAAgFgDg");
	this.shape_30.setTransform(-49,11.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#343434","#333333","#333333","#373737"],[0,0.227,0.769,1],-3.7,23,-0.3,23).s().p("AAAAAIAAAAIAAAAg");
	this.shape_31.setTransform(-44.5,-11.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#343434","#333333","#333333","#373737"],[0,0.227,0.769,1],-1,0,1,0).s().p("AgEAHIgBgBQgDgCAAgEQAAgDADgDQACgDADAAQAEAAACADQAEADAAADQAAAEgEACIgBACQgCACgDAAQgCAAgCgDg");
	this.shape_32.setTransform(-34,32);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#343434","#333333","#333333","#373737"],[0,0.227,0.769,1],-0.5,-0.5,0.6,0.6).s().p("AgHAJIgBAAQgDgEgBgFQABgEADgEQAEgDAEgBQAFABAEADQADAEAAAEQAAAFgDAEIgBAAQgEAEgEgBQgDABgEgEgAgFgGQgDADAAADQAAAEADACIABABQACADACAAQADAAACgCIABgCQAEgCAAgEQAAgDgEgDQgCgDgEAAQgDAAgCADg");
	this.shape_33.setTransform(-34,32);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#343434","#333333","#333333","#373737"],[0,0.227,0.769,1],-0.2,0,0.3,0).s().p("AAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIACABIAAAAIgBAAIAAAAQgBAAgBACg");
	this.shape_34.setTransform(-48,-12.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#343434","#333333","#333333","#373737"],[0,0.227,0.769,1],-14.3,16.7,-14.3,-8.6).s().p("AgDg4QAEACADAGIAABhQgDAGgEACg");
	this.shape_35.setTransform(-19.8,-28.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#343434","#333333","#333333","#373737"],[0,0.227,0.769,1],0,-41.1,0,41.2).s().p("AhjGbIgKAAIgBAAIgKgCQgUgEgKgNQgHgJgCgNQgCgKABgKIAAkNQgBglAGghIAPhrIAAhhIAAhzIAAgyQAAgaANgMQAMgNAYgBIADAAIACABIABABIAAAMIAAABIAAAAIABAHQAFAgAUAUQAZAYAiAAQAigBAYgYQAVgUAEgfIABgHIAAAAIABgNIAAgBIACgBIACAAQAaAAANAOQANAMAAAaIAAAyIAABzIAABhIAPBsQAGAggBAlIAAENQABAMgCALQgEAPgJAJQgMAKgTADIgBAAIgDAAIgMABgAh8mJQgLAMAAAXIAAEGIgBADIgBAGIAAACIgBAGIgMBbIAAAAQgGAgABAlIAAENQgBAKACAJIAAACQACALAGAHQAJAMASAEIAKABIAAAAIAKAAIDHAAIAKAAIABAAIABAAIADAAQASgDAKgKQAIgHADgMIABgCQACgKgBgMIAAkNQABglgGggIAAAAIgOhkIAAgBIAAAAIAAgBIABAAIAAgCIgBgBIgBAAIAAgBIAAgCIAAkGQAAgXgMgMQgLgMgXAAIgBAKQgDAmgZAYQgZAZgkAAQgkAAgagYQgYgYgEgnIAAgKIgBAAQgWABgLALg");
	this.shape_36.setTransform(-34.4,-3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.8,-44.5,34.7,82.3);


(lib.APU_apuegtgaugepointer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,2,1,3,true).p("AAWCOIAAi8IgWhfIgVBeIAAC9");
	this.shape.setTransform(2.5,21.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#262626").s().p("AgeAfQgNgNAAgSQAAgRANgNIAIgHQALgGALAAQAMAAAJAFQAGAEAEAEQANANAAARQAAASgNANQgNANgSAAQgRAAgNgNg");
	this.shape_1.setTransform(2.5,39.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1E1E1E").s().p("AAAAvQgSAAgOgOQgOgOAAgTQAAgSAOgOQAFgFAFgDQALgGALAAQAMAAAJAFQAHAEAFAFQAOAOAAASQAAATgOAOQgOAOgTAAIAAAAgAgWglIgIAHQgNANAAARQAAASANANQANANARAAQASAAANgNQANgNAAgSQAAgRgNgNQgEgEgGgEQgJgFgMAAQgLAAgLAGg");
	this.shape_2.setTransform(2.5,39.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVgvIAVheIAWBfIAAC8QgKgGgMABQgLgBgKAGg");
	this.shape_3.setTransform(2.5,21.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,6,9.5,38.7);


(lib.GROUNDPWRBUSSWITCHING_groundpoweravailablecopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#243A6C").s().p("AgSAeIAAg7IAjAAIAAALIgZAAIAAANIAXAAIAAAIIgXAAIAAAQIAaAAIAAALg");
	this.shape.setTransform(42.1,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#243A6C").s().p("AgQAeIAAg7IAKAAIAAAwIAXAAIAAALg");
	this.shape_1.setTransform(37.7,17.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#243A6C").s().p("AgTAeIAAg7IATAAQAHAAADABQAEACACAEQACADAAAGQAAAEgCADQgCAEgDACQAEAAADADQACAEAAAGQAAAGgDAFQgDAEgFACIgLAAgAgJATIAJAAIAGAAIADgDIABgEQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBIgCgDIgHAAIgIAAgAgJgEIAGAAIAFgBIAFgCQABgCAAgDIgBgEIgDgCIgHAAIgGAAg");
	this.shape_2.setTransform(33,17.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#243A6C").s().p("AANAeIgEgOIgRAAIgFAOIgLAAIAUg7IAIAAIAVA7gAgGAGIAMAAIgGgVg");
	this.shape_3.setTransform(27.8,17.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#243A6C").s().p("AgQAeIAAg7IAKAAIAAAwIAXAAIAAALg");
	this.shape_4.setTransform(23.4,17.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#243A6C").s().p("AgDAeIAAg7IAIAAIAAA7g");
	this.shape_5.setTransform(20.1,17.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#243A6C").s().p("AANAeIgEgOIgRAAIgFAOIgLAAIAUg7IAIAAIAVA7gAgGAGIAMAAIgGgVg");
	this.shape_6.setTransform(16.6,17.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#243A6C").s().p("AgEAeIgSg7IALAAIALArIAMgrIALAAIgSA7g");
	this.shape_7.setTransform(12.2,17.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#243A6C").s().p("AAOAeIgFgOIgSAAIgEAOIgLAAIAUg7IAJAAIATA7gAgGAGIAMAAIgGgVg");
	this.shape_8.setTransform(7.9,17.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#243A6C").s().p("AAKAeIgIgNIgCgJIgEgCIgFgBIgCAAIAAAZIgKAAIAAg7IAVAAQAGAAAEACQAEACACAEQACAEAAAFQAAAIgDAEQgEACgHABIAGAFIAGAKIAGAMgAgLgDIAHAAIAHAAIAEgDIABgFIgBgFQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBAAIgGAAIgIAAg");
	this.shape_9.setTransform(44.5,8.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#243A6C").s().p("AgSAeIAAg7IAjAAIAAALIgZAAIAAANIAXAAIAAAIIgXAAIAAAQIAaAAIAAALg");
	this.shape_10.setTransform(39.5,8.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#243A6C").s().p("AAKAeIgKgsIgIAsIgLAAIgMg7IAKAAIAIAoIAJgoIAKAAIAJAoIAHgoIAKAAIgMA7g");
	this.shape_11.setTransform(33.7,8.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#243A6C").s().p("AgQAYQgHgJAAgPQAAgJAEgHQADgHAFgEQAFgDAGAAQAKAAAHAJQAHAHAAAOQAAAPgHAJQgHAHgKAAQgJAAgHgHgAgIgPQgEAGAAAJQAAAKAEAGQAEAEAEAAQAFAAAEgEQAEgGAAgKQAAgJgEgGQgDgEgGAAQgFAAgDAEg");
	this.shape_12.setTransform(27.8,8.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#243A6C").s().p("AgSAeIAAg7IARAAQAHAAACABQAFACADAEQADAEAAAIQAAAGgDAEQgCAEgEACQgEABgHAAIgHAAIAAAXgAgIgBIAGAAIAGgBIADgDQABgCAAgDQAAgDgBgCIgDgDIgHAAIgFAAg");
	this.shape_13.setTransform(22.8,8.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#243A6C").s().p("AgUAeIAAg7IATAAQAFAAAEACIAGAFQADADACAHQABAFAAAHQAAAIgBAGIgFAJQgCADgEACQgFACgDAAgAgJATIAHAAIAFAAQABAAAAgBQABAAAAAAQABgBAAAAQAAgBABAAIACgGIABgKIgBgJQgBgEgCgCQgCgCgDgBIgGAAIgEAAg");
	this.shape_14.setTransform(16,8.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#243A6C").s().p("AAKAeIgHgNIgEgJIgCgCIgGgBIgCAAIAAAZIgKAAIAAg7IAVAAQAHAAADACQADACACAEQADAEAAAFQAAAIgEAEQgDACgGABIAFAFIAGAKIAGAMgAgLgDIAIAAIAHAAIACgDIABgFIgBgFQAAAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAIgGAAIgIAAg");
	this.shape_15.setTransform(11.1,8.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#243A6C").s().p("AgKAbQgFgDgEgIQgDgHAAgJQAAgIADgIQAEgHAFgEQAFgDAGAAQAJAAAFAEQAGAFABAJIgKADQgBgFgDgDQgDgDgEABQgFAAgEAEQgEAGAAAJQAAAKAFAGQADAEAFAAIAGgBQADgBADgCIAAgJIgMAAIAAgHIAWAAIAAAWQgEADgGADQgGADgGAAQgFAAgGgEg");
	this.shape_16.setTransform(5.6,8.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0D1526").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABgAjaBnIG1AAIAAjMIm1AAg");
	this.shape_17.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.GEN_pbbase02copy("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.9,1,48,24.4);


(lib.GROUNDPWRBUSSWITCHING_groundpoweravailable = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#243A6C").s().p("AgSAeIAAg7IAjAAIAAALIgZAAIAAANIAXAAIAAAIIgXAAIAAAQIAaAAIAAALg");
	this.shape.setTransform(42.1,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#243A6C").s().p("AgQAeIAAg7IAKAAIAAAwIAXAAIAAALg");
	this.shape_1.setTransform(37.7,17.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#243A6C").s().p("AgTAeIAAg7IATAAQAHAAADABQAEACACAEQACADAAAGQAAAEgCADQgCAEgDACQAEAAADADQACAEAAAGQAAAGgDAFQgDAEgFACIgLAAgAgJATIAJAAIAGAAIADgDIABgEQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBIgCgDIgHAAIgIAAgAgJgEIAGAAIAFgBIAFgCQABgCAAgDIgBgEIgDgCIgHAAIgGAAg");
	this.shape_2.setTransform(33,17.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#243A6C").s().p("AANAeIgEgOIgRAAIgFAOIgLAAIAUg7IAIAAIAVA7gAgGAGIAMAAIgGgVg");
	this.shape_3.setTransform(27.8,17.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#243A6C").s().p("AgQAeIAAg7IAKAAIAAAwIAXAAIAAALg");
	this.shape_4.setTransform(23.4,17.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#243A6C").s().p("AgDAeIAAg7IAIAAIAAA7g");
	this.shape_5.setTransform(20.1,17.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#243A6C").s().p("AANAeIgEgOIgRAAIgFAOIgLAAIAUg7IAIAAIAVA7gAgGAGIAMAAIgGgVg");
	this.shape_6.setTransform(16.6,17.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#243A6C").s().p("AgEAeIgSg7IALAAIALArIAMgrIALAAIgSA7g");
	this.shape_7.setTransform(12.2,17.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#243A6C").s().p("AAOAeIgFgOIgSAAIgEAOIgLAAIAUg7IAJAAIATA7gAgGAGIAMAAIgGgVg");
	this.shape_8.setTransform(7.9,17.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#243A6C").s().p("AAKAeIgIgNIgCgJIgEgCIgFgBIgCAAIAAAZIgKAAIAAg7IAVAAQAGAAAEACQAEACACAEQACAEAAAFQAAAIgDAEQgEACgHABIAGAFIAGAKIAGAMgAgLgDIAHAAIAHAAIAEgDIABgFIgBgFQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBAAIgGAAIgIAAg");
	this.shape_9.setTransform(44.5,8.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#243A6C").s().p("AgSAeIAAg7IAjAAIAAALIgZAAIAAANIAXAAIAAAIIgXAAIAAAQIAaAAIAAALg");
	this.shape_10.setTransform(39.5,8.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#243A6C").s().p("AAKAeIgKgsIgIAsIgLAAIgMg7IAKAAIAIAoIAJgoIAKAAIAJAoIAHgoIAKAAIgMA7g");
	this.shape_11.setTransform(33.7,8.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#243A6C").s().p("AgQAYQgHgJAAgPQAAgJAEgHQADgHAFgEQAFgDAGAAQAKAAAHAJQAHAHAAAOQAAAPgHAJQgHAHgKAAQgJAAgHgHgAgIgPQgEAGAAAJQAAAKAEAGQAEAEAEAAQAFAAAEgEQAEgGAAgKQAAgJgEgGQgDgEgGAAQgFAAgDAEg");
	this.shape_12.setTransform(27.8,8.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#243A6C").s().p("AgSAeIAAg7IARAAQAHAAACABQAFACADAEQADAEAAAIQAAAGgDAEQgCAEgEACQgEABgHAAIgHAAIAAAXgAgIgBIAGAAIAGgBIADgDQABgCAAgDQAAgDgBgCIgDgDIgHAAIgFAAg");
	this.shape_13.setTransform(22.8,8.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#243A6C").s().p("AgUAeIAAg7IATAAQAFAAAEACIAGAFQADADACAHQABAFAAAHQAAAIgBAGIgFAJQgCADgEACQgFACgDAAgAgJATIAHAAIAFAAQABAAAAgBQABAAAAAAQABgBAAAAQAAgBABAAIACgGIABgKIgBgJQgBgEgCgCQgCgCgDgBIgGAAIgEAAg");
	this.shape_14.setTransform(16,8.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#243A6C").s().p("AAKAeIgHgNIgEgJIgCgCIgGgBIgCAAIAAAZIgKAAIAAg7IAVAAQAHAAADACQADACACAEQADAEAAAFQAAAIgEAEQgDACgGABIAFAFIAGAKIAGAMgAgLgDIAIAAIAHAAIACgDIABgFIgBgFQAAAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAIgGAAIgIAAg");
	this.shape_15.setTransform(11.1,8.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#243A6C").s().p("AgKAbQgFgDgEgIQgDgHAAgJQAAgIADgIQAEgHAFgEQAFgDAGAAQAJAAAFAEQAGAFABAJIgKADQgBgFgDgDQgDgDgEABQgFAAgEAEQgEAGAAAJQAAAKAFAGQADAEAFAAIAGgBQADgBADgCIAAgJIgMAAIAAgHIAWAAIAAAWQgEADgGADQgGADgGAAQgFAAgGgEg");
	this.shape_16.setTransform(5.6,8.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0D1526").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABgAjaBnIG1AAIAAjMIm1AAg");
	this.shape_17.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.GEN_pbbase02("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.9,1,48,24.4);


(lib.GROUNDPWRBUSSWITCHING_gen2transferbusoffcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAhAAIAAALIgXAAIAAAOIATAAIAAAIIgTAAIAAAag");
	this.shape.setTransform(38.1,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAhAAIAAALIgXAAIAAAOIATAAIAAAIIgTAAIAAAag");
	this.shape_1.setTransform(33.9,17.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C3C3C").s().p("AgQAYQgHgJAAgPQAAgJAEgHQADgHAFgEQAFgDAGAAQAKAAAHAJQAHAHAAAOQAAAPgHAJQgHAHgKAAQgJAAgHgHgAgIgPQgEAGAAAJQAAAKAEAFQAEAFAEABQAFgBAEgFQAEgFAAgKQAAgKgEgFQgDgEgGAAQgFAAgDAEg");
	this.shape_2.setTransform(29,17.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3C3C3C").s().p("AgTAKIAKgBQACAMAHAAQAFgBACgCQADgCAAgDIgBgEIgDgDIgHgCQgGgCgDgCQgDgBgCgEQgCgEAAgEQAAgFACgEQADgEAEgCQAEgCAEAAQAIAAAFAFQAFAEAAAKIgKAAQAAgFgDgCQgCgCgDABQgDgBgCACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAIAHAEQAHACAEADQADABACADQACAEAAAGQAAAHgFAFQgFAGgKAAQgRAAgCgVg");
	this.shape_3.setTransform(21.9,17.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3C3C3C").s().p("AgKAcQgEgDgCgFQgCgFAAgOIAAgfIAKAAIAAAfIAAAKQAAAEADADQADACACAAQADAAADgBQACgCAAgDIABgMIAAggIAKAAIAAAfQABAMgCAGQgCAFgEADQgEAEgIgBQgGABgEgDg");
	this.shape_4.setTransform(17.1,17.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3C3C3C").s().p("AgTAeIAAg7IATAAQAGAAAEABQAEACACAEQACADAAAGQAAAEgCADQgCAEgDACQAEAAADADQACAEAAAGQABAGgEAFQgDAEgFACIgLAAgAgJATIAJAAIAGAAIADgDIABgEQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIgDgDIgHAAIgIAAgAgJgEIAGAAIAFgBIAFgCQABgCAAgDIgBgEIgDgCIgIAAIgFAAg");
	this.shape_5.setTransform(12.2,17.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3C3C3C").s().p("AAKAeIgIgNIgDgJIgDgCIgFgBIgCAAIAAAZIgKAAIAAg7IAVAAQAGAAAEACQAEACABAEQADAEAAAFQAAAIgEAEQgDACgHABIAGAFIAGAKIAGAMgAgLgDIAHAAIAHAAIADgDIACgFIgCgFQAAAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBAAIgGAAIgIAAg");
	this.shape_6.setTransform(41.6,8.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3C3C3C").s().p("AgSAeIAAg7IAjAAIAAALIgZAAIAAANIAYAAIAAAIIgYAAIAAAQIAaAAIAAALg");
	this.shape_7.setTransform(36.6,8.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAhAAIAAALIgXAAIAAAOIATAAIAAAIIgTAAIAAAag");
	this.shape_8.setTransform(32.1,8.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3C3C3C").s().p("AgTAKIAKgBQACAMAHgBQAFAAACgCQADgCAAgDIgBgEIgDgCIgHgDQgGgDgDgBQgDgBgCgEQgCgEAAgEQAAgFACgEQADgEAEgCQAEgCAEAAQAIAAAFAFQAFAEAAAKIgKAAQAAgFgDgCQgCgCgDABQgDgBgCACQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABABAAQAAABABABIAHADQAHACAEADQADABACADQACAEAAAGQAAAHgFAFQgFAGgKAAQgRAAgCgVg");
	this.shape_9.setTransform(27.5,8.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3C3C3C").s().p("AAJAeIgSgmIAAAmIgKAAIAAg7IAKAAIATAnIAAgnIAJAAIAAA7g");
	this.shape_10.setTransform(22.7,8.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3C3C3C").s().p("AAOAeIgFgOIgSAAIgEAOIgLAAIAUg7IAJAAIAUA7gAgGAGIAMAAIgGgVg");
	this.shape_11.setTransform(17.7,8.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3C3C3C").s().p("AAKAeIgIgNIgCgJIgEgCIgFgBIgCAAIAAAZIgKAAIAAg7IAVAAQAGAAAEACQADACADAEQACAEAAAFQAAAIgEAEQgDACgHABIAGAFIAGAKIAGAMgAgLgDIAHAAIAHAAIAEgDIABgFIgBgFQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBAAIgGAAIgIAAg");
	this.shape_12.setTransform(12.9,8.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3C3C3C").s().p("AgDAeIAAgwIgPAAIAAgLIAlAAIAAALIgOAAIAAAwg");
	this.shape_13.setTransform(8,8.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3C3C3C").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABgAjaBnIG1AAIAAjMIm1AAg");
	this.shape_14.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.GEN_pbbase01copy("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,47.9,24.4);


(lib.GROUNDPWRBUSSWITCHING_gen2transferbusoff = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAhAAIAAALIgXAAIAAAOIATAAIAAAIIgTAAIAAAag");
	this.shape.setTransform(38.1,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAhAAIAAALIgXAAIAAAOIATAAIAAAIIgTAAIAAAag");
	this.shape_1.setTransform(33.9,17.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C3C3C").s().p("AgQAYQgHgJAAgPQAAgJAEgHQADgHAFgEQAFgDAGAAQAKAAAHAJQAHAHAAAOQAAAPgHAJQgHAHgKAAQgJAAgHgHgAgIgPQgEAGAAAJQAAAKAEAFQAEAFAEABQAFgBAEgFQAEgFAAgKQAAgKgEgFQgDgEgGAAQgFAAgDAEg");
	this.shape_2.setTransform(29,17.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3C3C3C").s().p("AgTAKIAKgBQACAMAHAAQAFgBACgCQADgCAAgDIgBgEIgDgDIgHgCQgGgCgDgCQgDgBgCgEQgCgEAAgEQAAgFACgEQADgEAEgCQAEgCAEAAQAIAAAFAFQAFAEAAAKIgKAAQAAgFgDgCQgCgCgDABQgDgBgCACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAIAHAEQAHACAEADQADABACADQACAEAAAGQAAAHgFAFQgFAGgKAAQgRAAgCgVg");
	this.shape_3.setTransform(21.9,17.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3C3C3C").s().p("AgKAcQgEgDgCgFQgCgFAAgOIAAgfIAKAAIAAAfIAAAKQAAAEADADQADACACAAQADAAADgBQACgCAAgDIABgMIAAggIAKAAIAAAfQABAMgCAGQgCAFgEADQgEAEgIgBQgGABgEgDg");
	this.shape_4.setTransform(17.1,17.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3C3C3C").s().p("AgTAeIAAg7IATAAQAGAAAEABQAEACACAEQACADAAAGQAAAEgCADQgCAEgDACQAEAAADADQACAEAAAGQABAGgEAFQgDAEgFACIgLAAgAgJATIAJAAIAGAAIADgDIABgEQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIgDgDIgHAAIgIAAgAgJgEIAGAAIAFgBIAFgCQABgCAAgDIgBgEIgDgCIgIAAIgFAAg");
	this.shape_5.setTransform(12.2,17.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3C3C3C").s().p("AAKAeIgIgNIgDgJIgDgCIgFgBIgCAAIAAAZIgKAAIAAg7IAVAAQAGAAAEACQAEACABAEQADAEAAAFQAAAIgEAEQgDACgHABIAGAFIAGAKIAGAMgAgLgDIAHAAIAHAAIADgDIACgFIgCgFQAAAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBAAIgGAAIgIAAg");
	this.shape_6.setTransform(41.6,8.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3C3C3C").s().p("AgSAeIAAg7IAjAAIAAALIgZAAIAAANIAYAAIAAAIIgYAAIAAAQIAaAAIAAALg");
	this.shape_7.setTransform(36.6,8.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAhAAIAAALIgXAAIAAAOIATAAIAAAIIgTAAIAAAag");
	this.shape_8.setTransform(32.1,8.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3C3C3C").s().p("AgTAKIAKgBQACAMAHgBQAFAAACgCQADgCAAgDIgBgEIgDgCIgHgDQgGgDgDgBQgDgBgCgEQgCgEAAgEQAAgFACgEQADgEAEgCQAEgCAEAAQAIAAAFAFQAFAEAAAKIgKAAQAAgFgDgCQgCgCgDABQgDgBgCACQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABABAAQAAABABABIAHADQAHACAEADQADABACADQACAEAAAGQAAAHgFAFQgFAGgKAAQgRAAgCgVg");
	this.shape_9.setTransform(27.5,8.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3C3C3C").s().p("AAJAeIgSgmIAAAmIgKAAIAAg7IAKAAIATAnIAAgnIAJAAIAAA7g");
	this.shape_10.setTransform(22.7,8.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3C3C3C").s().p("AAOAeIgFgOIgSAAIgEAOIgLAAIAUg7IAJAAIAUA7gAgGAGIAMAAIgGgVg");
	this.shape_11.setTransform(17.7,8.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3C3C3C").s().p("AAKAeIgIgNIgCgJIgEgCIgFgBIgCAAIAAAZIgKAAIAAg7IAVAAQAGAAAEACQADACADAEQACAEAAAFQAAAIgEAEQgDACgHABIAGAFIAGAKIAGAMgAgLgDIAHAAIAHAAIAEgDIABgFIgBgFQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBAAIgGAAIgIAAg");
	this.shape_12.setTransform(12.9,8.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3C3C3C").s().p("AgDAeIAAgwIgPAAIAAgLIAlAAIAAALIgOAAIAAAwg");
	this.shape_13.setTransform(8,8.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3C3C3C").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABgAjaBnIG1AAIAAjMIm1AAg");
	this.shape_14.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.GEN_pbbase01("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,47.9,24.4);


(lib.GROUNDPWRBUSSWITCHING_gen2sourceoffcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAhAAIAAALIgXAAIAAAOIATAAIAAAIIgTAAIAAAag");
	this.shape.setTransform(29.8,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAhAAIAAALIgXAAIAAAOIATAAIAAAIIgTAAIAAAag");
	this.shape_1.setTransform(25.5,17.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C3C3C").s().p("AgQAYQgHgJAAgPQAAgJAEgHQADgHAFgEQAFgDAGAAQAKAAAHAJQAHAHAAAOQAAAPgHAJQgHAHgKAAQgJAAgHgHgAgIgPQgEAGAAAJQAAAKAEAFQAEAFAEABQAFgBAEgFQAEgFAAgKQAAgKgEgFQgDgEgGAAQgFAAgDAEg");
	this.shape_2.setTransform(20.6,17.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3C3C3C").s().p("AgRAeIAAg7IAjAAIAAALIgZAAIAAANIAWAAIAAAIIgWAAIAAAQIAaAAIAAALg");
	this.shape_3.setTransform(37.5,8.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3C3C3C").s().p("AgNAYQgHgJAAgPQAAgNAHgJQAGgIAIAAQAIAAAGAGQAEAEACAIIgKADQgBgFgDgDQgDgCgEAAQgDAAgEAEQgDAFAAAKQAAALADAFQAEAEADAAQAEAAADgDQADgCABgIIAKAEQgCALgGAEQgFAFgIAAQgHAAgGgHg");
	this.shape_4.setTransform(32.6,8.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3C3C3C").s().p("AAKAeIgHgNIgEgJIgCgCIgGgBIgCAAIAAAZIgKAAIAAg7IAVAAQAHAAADACQADACACAEQADAEAAAFQAAAIgDAEQgEACgGABIAFAFIAGAKIAGAMgAgLgDIAIAAIAHAAIACgDIABgFIgBgFQAAAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAIgGAAIgIAAg");
	this.shape_5.setTransform(27.8,8.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3C3C3C").s().p("AgKAcQgEgDgDgFQgCgFAAgOIAAgfIAKAAIAAAgIABAJQABAEACADQACACADAAQADAAACgBQACgCABgDIABgLIAAghIALAAIAAAfQAAAMgCAGQgBAFgFADQgEADgIAAQgGABgEgDg");
	this.shape_6.setTransform(22.5,8.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3C3C3C").s().p("AgQAYQgHgJAAgPQAAgJAEgHQADgHAFgEQAFgDAGAAQAKAAAHAJQAHAHAAAOQAAAPgHAJQgHAHgKAAQgJAAgHgHgAgIgPQgEAGAAAJQAAAKAEAGQAEAEAEAAQAFAAAEgEQAEgGAAgKQAAgJgEgGQgDgEgGAAQgFAAgDAEg");
	this.shape_7.setTransform(17.3,8.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3C3C3C").s().p("AgTAKIAKgBQACAMAHgBQAFAAACgCQADgCAAgDIgBgEIgDgCIgHgDQgGgDgDgBQgDgBgCgEQgCgEAAgEQAAgFACgEQADgEAEgCQAEgCAEAAQAIAAAFAFQAFAEAAAKIgKAAQAAgFgDgCQgCgCgDABQgDgBgCACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQABABAAAAQAAABABABIAHADQAHACAEADQADABACADQACAEAAAGQAAAHgFAFQgFAGgKAAQgRAAgCgVg");
	this.shape_8.setTransform(12.2,8.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3C3C3C").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABgAjaBnIG1AAIAAjMIm1AAg");
	this.shape_9.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.GEN_pbbase01copy("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,47.9,24.4);


(lib.GROUNDPWRBUSSWITCHING_gen2sourceoff = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAhAAIAAALIgXAAIAAAOIATAAIAAAIIgTAAIAAAag");
	this.shape.setTransform(29.8,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAhAAIAAALIgXAAIAAAOIATAAIAAAIIgTAAIAAAag");
	this.shape_1.setTransform(25.5,17.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C3C3C").s().p("AgQAYQgHgJAAgPQAAgJAEgHQADgHAFgEQAFgDAGAAQAKAAAHAJQAHAHAAAOQAAAPgHAJQgHAHgKAAQgJAAgHgHgAgIgPQgEAGAAAJQAAAKAEAFQAEAFAEABQAFgBAEgFQAEgFAAgKQAAgKgEgFQgDgEgGAAQgFAAgDAEg");
	this.shape_2.setTransform(20.6,17.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3C3C3C").s().p("AgRAeIAAg7IAjAAIAAALIgZAAIAAANIAWAAIAAAIIgWAAIAAAQIAaAAIAAALg");
	this.shape_3.setTransform(37.5,8.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3C3C3C").s().p("AgNAYQgHgJAAgPQAAgNAHgJQAGgIAIAAQAIAAAGAGQAEAEACAIIgKADQgBgFgDgDQgDgCgEAAQgDAAgEAEQgDAFAAAKQAAALADAFQAEAEADAAQAEAAADgDQADgCABgIIAKAEQgCALgGAEQgFAFgIAAQgHAAgGgHg");
	this.shape_4.setTransform(32.6,8.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3C3C3C").s().p("AAKAeIgHgNIgEgJIgCgCIgGgBIgCAAIAAAZIgKAAIAAg7IAVAAQAHAAADACQADACACAEQADAEAAAFQAAAIgDAEQgEACgGABIAFAFIAGAKIAGAMgAgLgDIAIAAIAHAAIACgDIABgFIgBgFQAAAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAIgGAAIgIAAg");
	this.shape_5.setTransform(27.8,8.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3C3C3C").s().p("AgKAcQgEgDgDgFQgCgFAAgOIAAgfIAKAAIAAAgIABAJQABAEACADQACACADAAQADAAACgBQACgCABgDIABgLIAAghIALAAIAAAfQAAAMgCAGQgBAFgFADQgEADgIAAQgGABgEgDg");
	this.shape_6.setTransform(22.5,8.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3C3C3C").s().p("AgQAYQgHgJAAgPQAAgJAEgHQADgHAFgEQAFgDAGAAQAKAAAHAJQAHAHAAAOQAAAPgHAJQgHAHgKAAQgJAAgHgHgAgIgPQgEAGAAAJQAAAKAEAGQAEAEAEAAQAFAAAEgEQAEgGAAgKQAAgJgEgGQgDgEgGAAQgFAAgDAEg");
	this.shape_7.setTransform(17.3,8.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3C3C3C").s().p("AgTAKIAKgBQACAMAHgBQAFAAACgCQADgCAAgDIgBgEIgDgCIgHgDQgGgDgDgBQgDgBgCgEQgCgEAAgEQAAgFACgEQADgEAEgCQAEgCAEAAQAIAAAFAFQAFAEAAAKIgKAAQAAgFgDgCQgCgCgDABQgDgBgCACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQABABAAAAQAAABABABIAHADQAHACAEADQADABACADQACAEAAAGQAAAHgFAFQgFAGgKAAQgRAAgCgVg");
	this.shape_8.setTransform(12.2,8.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3C3C3C").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABgAjaBnIG1AAIAAjMIm1AAg");
	this.shape_9.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.GEN_pbbase01("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,47.9,24.4);


(lib.GROUNDPWRBUSSWITCHING_gen2busoffcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#243A6C").s().p("AgTAKIAKgBQACAMAHAAQAFgBACgCQADgCAAgDIgBgEIgDgDIgHgCQgGgCgDgCQgDgBgCgEQgCgEAAgEQAAgFACgEQADgEAEgCQAEgCAEAAQAIAAAFAFQAFAEAAAKIgKAAQAAgFgDgCQgCgCgDABQgDgBgCACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAIAHAEQAHACAEADQADABACADQACAEAAAGQAAAHgFAFQgFAGgKAAQgRAAgCgVg");
	this.shape.setTransform(29.8,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#243A6C").s().p("AgKAcQgEgDgCgFQgCgFAAgOIAAgfIAKAAIAAAfIAAAKQAAAEADADQACACADAAQADAAACgBQADgCABgDIAAgMIAAggIALAAIAAAfQgBAMgBAGQgCAFgEADQgFAEgHgBQgGABgEgDg");
	this.shape_1.setTransform(25,17.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#243A6C").s().p("AgUAeIAAg7IAUAAQAGAAAEABQADACADAEQACADAAAGQAAAEgCADQgCAEgDACQAEAAADADQADAEgBAGQAAAGgDAFQgDAEgEACIgNAAgAgJATIAJAAIAGAAIADgDIABgEQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIgEgDIgHAAIgHAAgAgJgEIAGAAIAFgBIAFgCQABgCAAgDIgBgEIgDgCIgIAAIgFAAg");
	this.shape_2.setTransform(20.1,17.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#243A6C").s().p("AgQAeIAAg7IAhAAIAAALIgXAAIAAAOIATAAIAAAIIgTAAIAAAag");
	this.shape_3.setTransform(38.3,8.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#243A6C").s().p("AgQAeIAAg7IAhAAIAAALIgXAAIAAAOIATAAIAAAIIgTAAIAAAag");
	this.shape_4.setTransform(34,8.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#243A6C").s().p("AgQAYQgHgJAAgPQAAgJAEgHQADgHAFgEQAFgDAGAAQAKAAAHAJQAHAHAAAOQAAAPgHAJQgHAHgKAAQgJAAgHgHgAgIgPQgEAGAAAJQAAAKAEAGQAEAEAEAAQAFAAAEgEQAEgGAAgKQAAgJgEgGQgDgEgGAAQgFAAgDAEg");
	this.shape_5.setTransform(29.1,8.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#243A6C").s().p("AAJAeIgSgmIAAAmIgKAAIAAg7IAKAAIATAnIAAgnIAKAAIAAA7g");
	this.shape_6.setTransform(21.9,8.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#243A6C").s().p("AgSAeIAAg7IAkAAIAAALIgZAAIAAANIAWAAIAAAIIgWAAIAAAQIAaAAIAAALg");
	this.shape_7.setTransform(17.2,8.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#243A6C").s().p("AgKAbQgFgDgEgIQgDgHAAgJQAAgIADgIQAEgHAFgEQAFgDAGAAQAJAAAFAEQAGAFABAJIgKADQgBgFgDgDQgDgDgEABQgFAAgEAEQgEAGAAAJQAAAKAFAGQADAEAFAAIAGgBQADgBADgCIAAgJIgMAAIAAgHIAWAAIAAAWQgEADgGADQgGADgGAAQgFAAgGgEg");
	this.shape_8.setTransform(12,8.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0D1526").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABgAjaBnIG1AAIAAjMIm1AAg");
	this.shape_9.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.GEN_pbbase02copy("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,47.9,24.4);


(lib.GROUNDPWRBUSSWITCHING_gen2busoff = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#243A6C").s().p("AgTAKIAKgBQACAMAHAAQAFgBACgCQADgCAAgDIgBgEIgDgDIgHgCQgGgCgDgCQgDgBgCgEQgCgEAAgEQAAgFACgEQADgEAEgCQAEgCAEAAQAIAAAFAFQAFAEAAAKIgKAAQAAgFgDgCQgCgCgDABQgDgBgCACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAIAHAEQAHACAEADQADABACADQACAEAAAGQAAAHgFAFQgFAGgKAAQgRAAgCgVg");
	this.shape.setTransform(29.8,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#243A6C").s().p("AgKAcQgEgDgCgFQgCgFAAgOIAAgfIAKAAIAAAfIAAAKQAAAEADADQACACADAAQADAAACgBQADgCABgDIAAgMIAAggIALAAIAAAfQgBAMgBAGQgCAFgEADQgFAEgHgBQgGABgEgDg");
	this.shape_1.setTransform(25,17.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#243A6C").s().p("AgUAeIAAg7IAUAAQAGAAAEABQADACADAEQACADAAAGQAAAEgCADQgCAEgDACQAEAAADADQADAEgBAGQAAAGgDAFQgDAEgEACIgNAAgAgJATIAJAAIAGAAIADgDIABgEQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIgEgDIgHAAIgHAAgAgJgEIAGAAIAFgBIAFgCQABgCAAgDIgBgEIgDgCIgIAAIgFAAg");
	this.shape_2.setTransform(20.1,17.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#243A6C").s().p("AgQAeIAAg7IAhAAIAAALIgXAAIAAAOIATAAIAAAIIgTAAIAAAag");
	this.shape_3.setTransform(38.3,8.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#243A6C").s().p("AgQAeIAAg7IAhAAIAAALIgXAAIAAAOIATAAIAAAIIgTAAIAAAag");
	this.shape_4.setTransform(34,8.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#243A6C").s().p("AgQAYQgHgJAAgPQAAgJAEgHQADgHAFgEQAFgDAGAAQAKAAAHAJQAHAHAAAOQAAAPgHAJQgHAHgKAAQgJAAgHgHgAgIgPQgEAGAAAJQAAAKAEAGQAEAEAEAAQAFAAAEgEQAEgGAAgKQAAgJgEgGQgDgEgGAAQgFAAgDAEg");
	this.shape_5.setTransform(29.1,8.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#243A6C").s().p("AAJAeIgSgmIAAAmIgKAAIAAg7IAKAAIATAnIAAgnIAKAAIAAA7g");
	this.shape_6.setTransform(21.9,8.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#243A6C").s().p("AgSAeIAAg7IAkAAIAAALIgZAAIAAANIAWAAIAAAIIgWAAIAAAQIAaAAIAAALg");
	this.shape_7.setTransform(17.2,8.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#243A6C").s().p("AgKAbQgFgDgEgIQgDgHAAgJQAAgIADgIQAEgHAFgEQAFgDAGAAQAJAAAFAEQAGAFABAJIgKADQgBgFgDgDQgDgDgEABQgFAAgEAEQgEAGAAAJQAAAKAFAGQADAEAFAAIAGgBQADgBADgCIAAgJIgMAAIAAgHIAWAAIAAAWQgEADgGADQgGADgGAAQgFAAgGgEg");
	this.shape_8.setTransform(12,8.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0D1526").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABgAjaBnIG1AAIAAjMIm1AAg");
	this.shape_9.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.GEN_pbbase02("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,47.9,24.4);


(lib.GROUNDPWRBUSSWITCHING_gen1transferbusoffcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAhAAIAAALIgXAAIAAAOIATAAIAAAIIgTAAIAAAag");
	this.shape.setTransform(38.1,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAhAAIAAALIgXAAIAAAOIATAAIAAAIIgTAAIAAAag");
	this.shape_1.setTransform(33.9,17.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C3C3C").s().p("AgQAYQgHgJAAgPQAAgJAEgHQADgHAFgEQAFgDAGAAQAKAAAHAJQAHAHAAAOQAAAPgHAJQgHAHgKAAQgJAAgHgHgAgIgPQgEAGAAAJQAAAKAEAFQAEAFAEABQAFgBAEgFQAEgFAAgKQAAgKgEgFQgDgEgGAAQgFAAgDAEg");
	this.shape_2.setTransform(29,17.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3C3C3C").s().p("AgTAKIAKgBQACAMAHAAQAFgBACgCQADgCAAgDIgBgEIgDgDIgHgCQgGgCgDgCQgDgBgCgEQgCgEAAgEQAAgFACgEQADgEAEgCQAEgCAEAAQAIAAAFAFQAFAEAAAKIgKAAQAAgFgDgCQgCgCgDABQgDgBgCACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAIAHAEQAHACAEADQADABACADQACAEAAAGQAAAHgFAFQgFAGgKAAQgRAAgCgVg");
	this.shape_3.setTransform(21.9,17.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3C3C3C").s().p("AgKAcQgEgDgCgFQgCgFAAgOIAAgfIAKAAIAAAfIAAAKQAAAEADADQADACACAAQADAAADgBQACgCAAgDIABgMIAAggIAKAAIAAAfQABAMgCAGQgCAFgEADQgEAEgIgBQgGABgEgDg");
	this.shape_4.setTransform(17.1,17.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3C3C3C").s().p("AgTAeIAAg7IATAAQAGAAAEABQAEACACAEQACADAAAGQAAAEgCADQgCAEgDACQAEAAADADQACAEAAAGQABAGgEAFQgDAEgFACIgLAAgAgJATIAJAAIAGAAIADgDIABgEQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIgDgDIgHAAIgIAAgAgJgEIAGAAIAFgBIAFgCQABgCAAgDIgBgEIgDgCIgIAAIgFAAg");
	this.shape_5.setTransform(12.2,17.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3C3C3C").s().p("AAKAeIgIgNIgDgJIgDgCIgFgBIgCAAIAAAZIgKAAIAAg7IAVAAQAGAAAEACQAEACABAEQADAEAAAFQAAAIgEAEQgDACgHABIAGAFIAGAKIAGAMgAgLgDIAHAAIAHAAIADgDIACgFIgCgFQAAAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBAAIgGAAIgIAAg");
	this.shape_6.setTransform(41.6,8.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3C3C3C").s().p("AgSAeIAAg7IAjAAIAAALIgZAAIAAANIAYAAIAAAIIgYAAIAAAQIAaAAIAAALg");
	this.shape_7.setTransform(36.6,8.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAhAAIAAALIgXAAIAAAOIATAAIAAAIIgTAAIAAAag");
	this.shape_8.setTransform(32.1,8.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3C3C3C").s().p("AgTAKIAKgBQACAMAHgBQAFAAACgCQADgCAAgDIgBgEIgDgCIgHgDQgGgDgDgBQgDgBgCgEQgCgEAAgEQAAgFACgEQADgEAEgCQAEgCAEAAQAIAAAFAFQAFAEAAAKIgKAAQAAgFgDgCQgCgCgDABQgDgBgCACQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABABAAQAAABABABIAHADQAHACAEADQADABACADQACAEAAAGQAAAHgFAFQgFAGgKAAQgRAAgCgVg");
	this.shape_9.setTransform(27.5,8.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3C3C3C").s().p("AAJAeIgSgmIAAAmIgKAAIAAg7IAKAAIATAnIAAgnIAJAAIAAA7g");
	this.shape_10.setTransform(22.7,8.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3C3C3C").s().p("AAOAeIgFgOIgSAAIgEAOIgLAAIAUg7IAJAAIAUA7gAgGAGIAMAAIgGgVg");
	this.shape_11.setTransform(17.7,8.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3C3C3C").s().p("AAKAeIgIgNIgCgJIgEgCIgFgBIgCAAIAAAZIgKAAIAAg7IAVAAQAGAAAEACQADACADAEQACAEAAAFQAAAIgEAEQgDACgHABIAGAFIAGAKIAGAMgAgLgDIAHAAIAHAAIAEgDIABgFIgBgFQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBAAIgGAAIgIAAg");
	this.shape_12.setTransform(12.9,8.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3C3C3C").s().p("AgDAeIAAgwIgPAAIAAgLIAlAAIAAALIgOAAIAAAwg");
	this.shape_13.setTransform(8,8.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3C3C3C").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABgAjaBnIG1AAIAAjMIm1AAg");
	this.shape_14.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.GEN_pbbase01copy("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,47.9,24.4);


(lib.GROUNDPWRBUSSWITCHING_gen1transferbusoff = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAhAAIAAALIgXAAIAAAOIATAAIAAAIIgTAAIAAAag");
	this.shape.setTransform(38.1,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAhAAIAAALIgXAAIAAAOIATAAIAAAIIgTAAIAAAag");
	this.shape_1.setTransform(33.9,17.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C3C3C").s().p("AgQAYQgHgJAAgPQAAgJAEgHQADgHAFgEQAFgDAGAAQAKAAAHAJQAHAHAAAOQAAAPgHAJQgHAHgKAAQgJAAgHgHgAgIgPQgEAGAAAJQAAAKAEAFQAEAFAEABQAFgBAEgFQAEgFAAgKQAAgKgEgFQgDgEgGAAQgFAAgDAEg");
	this.shape_2.setTransform(29,17.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3C3C3C").s().p("AgTAKIAKgBQACAMAHAAQAFgBACgCQADgCAAgDIgBgEIgDgDIgHgCQgGgCgDgCQgDgBgCgEQgCgEAAgEQAAgFACgEQADgEAEgCQAEgCAEAAQAIAAAFAFQAFAEAAAKIgKAAQAAgFgDgCQgCgCgDABQgDgBgCACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAIAHAEQAHACAEADQADABACADQACAEAAAGQAAAHgFAFQgFAGgKAAQgRAAgCgVg");
	this.shape_3.setTransform(21.9,17.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3C3C3C").s().p("AgKAcQgEgDgCgFQgCgFAAgOIAAgfIAKAAIAAAfIAAAKQAAAEADADQADACACAAQADAAADgBQACgCAAgDIABgMIAAggIAKAAIAAAfQABAMgCAGQgCAFgEADQgEAEgIgBQgGABgEgDg");
	this.shape_4.setTransform(17.1,17.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3C3C3C").s().p("AgTAeIAAg7IATAAQAGAAAEABQAEACACAEQACADAAAGQAAAEgCADQgCAEgDACQAEAAADADQACAEAAAGQABAGgEAFQgDAEgFACIgLAAgAgJATIAJAAIAGAAIADgDIABgEQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIgDgDIgHAAIgIAAgAgJgEIAGAAIAFgBIAFgCQABgCAAgDIgBgEIgDgCIgIAAIgFAAg");
	this.shape_5.setTransform(12.2,17.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3C3C3C").s().p("AAKAeIgIgNIgDgJIgDgCIgFgBIgCAAIAAAZIgKAAIAAg7IAVAAQAGAAAEACQAEACABAEQADAEAAAFQAAAIgEAEQgDACgHABIAGAFIAGAKIAGAMgAgLgDIAHAAIAHAAIADgDIACgFIgCgFQAAAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBAAIgGAAIgIAAg");
	this.shape_6.setTransform(41.6,8.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3C3C3C").s().p("AgSAeIAAg7IAjAAIAAALIgZAAIAAANIAYAAIAAAIIgYAAIAAAQIAaAAIAAALg");
	this.shape_7.setTransform(36.6,8.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAhAAIAAALIgXAAIAAAOIATAAIAAAIIgTAAIAAAag");
	this.shape_8.setTransform(32.1,8.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3C3C3C").s().p("AgTAKIAKgBQACAMAHgBQAFAAACgCQADgCAAgDIgBgEIgDgCIgHgDQgGgDgDgBQgDgBgCgEQgCgEAAgEQAAgFACgEQADgEAEgCQAEgCAEAAQAIAAAFAFQAFAEAAAKIgKAAQAAgFgDgCQgCgCgDABQgDgBgCACQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABABAAQAAABABABIAHADQAHACAEADQADABACADQACAEAAAGQAAAHgFAFQgFAGgKAAQgRAAgCgVg");
	this.shape_9.setTransform(27.5,8.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3C3C3C").s().p("AAJAeIgSgmIAAAmIgKAAIAAg7IAKAAIATAnIAAgnIAJAAIAAA7g");
	this.shape_10.setTransform(22.7,8.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3C3C3C").s().p("AAOAeIgFgOIgSAAIgEAOIgLAAIAUg7IAJAAIAUA7gAgGAGIAMAAIgGgVg");
	this.shape_11.setTransform(17.7,8.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3C3C3C").s().p("AAKAeIgIgNIgCgJIgEgCIgFgBIgCAAIAAAZIgKAAIAAg7IAVAAQAGAAAEACQADACADAEQACAEAAAFQAAAIgEAEQgDACgHABIAGAFIAGAKIAGAMgAgLgDIAHAAIAHAAIAEgDIABgFIgBgFQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBAAIgGAAIgIAAg");
	this.shape_12.setTransform(12.9,8.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3C3C3C").s().p("AgDAeIAAgwIgPAAIAAgLIAlAAIAAALIgOAAIAAAwg");
	this.shape_13.setTransform(8,8.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3C3C3C").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABgAjaBnIG1AAIAAjMIm1AAg");
	this.shape_14.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.GEN_pbbase01("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,47.9,24.4);


(lib.GROUNDPWRBUSSWITCHING_gen1sourceoffcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAhAAIAAALIgXAAIAAAOIATAAIAAAIIgTAAIAAAag");
	this.shape.setTransform(29.8,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAhAAIAAALIgXAAIAAAOIATAAIAAAIIgTAAIAAAag");
	this.shape_1.setTransform(25.5,17.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C3C3C").s().p("AgQAYQgHgJAAgPQAAgJAEgHQADgHAFgEQAFgDAGAAQAKAAAHAJQAHAHAAAOQAAAPgHAJQgHAHgKAAQgJAAgHgHgAgIgPQgEAGAAAJQAAAKAEAFQAEAFAEABQAFgBAEgFQAEgFAAgKQAAgKgEgFQgDgEgGAAQgFAAgDAEg");
	this.shape_2.setTransform(20.6,17.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3C3C3C").s().p("AgRAeIAAg7IAjAAIAAALIgZAAIAAANIAWAAIAAAIIgWAAIAAAQIAaAAIAAALg");
	this.shape_3.setTransform(37.5,8.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3C3C3C").s().p("AgNAYQgHgJAAgPQAAgNAHgJQAGgIAIAAQAIAAAGAGQAEAEACAIIgKADQgBgFgDgDQgDgCgEAAQgDAAgEAEQgDAFAAAKQAAALADAFQAEAEADAAQAEAAADgDQADgCABgIIAKAEQgCALgGAEQgFAFgIAAQgHAAgGgHg");
	this.shape_4.setTransform(32.6,8.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3C3C3C").s().p("AAKAeIgHgNIgEgJIgCgCIgGgBIgCAAIAAAZIgKAAIAAg7IAVAAQAHAAADACQADACACAEQADAEAAAFQAAAIgDAEQgEACgGABIAFAFIAGAKIAGAMgAgLgDIAIAAIAHAAIACgDIABgFIgBgFQAAAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAIgGAAIgIAAg");
	this.shape_5.setTransform(27.8,8.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3C3C3C").s().p("AgKAcQgEgDgDgFQgCgFAAgOIAAgfIAKAAIAAAgIABAJQABAEACADQACACADAAQADAAACgBQACgCABgDIABgLIAAghIALAAIAAAfQAAAMgCAGQgBAFgFADQgEADgIAAQgGABgEgDg");
	this.shape_6.setTransform(22.5,8.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3C3C3C").s().p("AgQAYQgHgJAAgPQAAgJAEgHQADgHAFgEQAFgDAGAAQAKAAAHAJQAHAHAAAOQAAAPgHAJQgHAHgKAAQgJAAgHgHgAgIgPQgEAGAAAJQAAAKAEAGQAEAEAEAAQAFAAAEgEQAEgGAAgKQAAgJgEgGQgDgEgGAAQgFAAgDAEg");
	this.shape_7.setTransform(17.3,8.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3C3C3C").s().p("AgTAKIAKgBQACAMAHgBQAFAAACgCQADgCAAgDIgBgEIgDgCIgHgDQgGgDgDgBQgDgBgCgEQgCgEAAgEQAAgFACgEQADgEAEgCQAEgCAEAAQAIAAAFAFQAFAEAAAKIgKAAQAAgFgDgCQgCgCgDABQgDgBgCACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQABABAAAAQAAABABABIAHADQAHACAEADQADABACADQACAEAAAGQAAAHgFAFQgFAGgKAAQgRAAgCgVg");
	this.shape_8.setTransform(12.2,8.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3C3C3C").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABgAjaBnIG1AAIAAjMIm1AAg");
	this.shape_9.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.GEN_pbbase01copy("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,47.9,24.4);


(lib.GROUNDPWRBUSSWITCHING_gen1sourceoff = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAhAAIAAALIgXAAIAAAOIATAAIAAAIIgTAAIAAAag");
	this.shape.setTransform(29.8,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAhAAIAAALIgXAAIAAAOIATAAIAAAIIgTAAIAAAag");
	this.shape_1.setTransform(25.5,17.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C3C3C").s().p("AgQAYQgHgJAAgPQAAgJAEgHQADgHAFgEQAFgDAGAAQAKAAAHAJQAHAHAAAOQAAAPgHAJQgHAHgKAAQgJAAgHgHgAgIgPQgEAGAAAJQAAAKAEAFQAEAFAEABQAFgBAEgFQAEgFAAgKQAAgKgEgFQgDgEgGAAQgFAAgDAEg");
	this.shape_2.setTransform(20.6,17.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3C3C3C").s().p("AgRAeIAAg7IAjAAIAAALIgZAAIAAANIAWAAIAAAIIgWAAIAAAQIAaAAIAAALg");
	this.shape_3.setTransform(37.5,8.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3C3C3C").s().p("AgNAYQgHgJAAgPQAAgNAHgJQAGgIAIAAQAIAAAGAGQAEAEACAIIgKADQgBgFgDgDQgDgCgEAAQgDAAgEAEQgDAFAAAKQAAALADAFQAEAEADAAQAEAAADgDQADgCABgIIAKAEQgCALgGAEQgFAFgIAAQgHAAgGgHg");
	this.shape_4.setTransform(32.6,8.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3C3C3C").s().p("AAKAeIgHgNIgEgJIgCgCIgGgBIgCAAIAAAZIgKAAIAAg7IAVAAQAHAAADACQADACACAEQADAEAAAFQAAAIgDAEQgEACgGABIAFAFIAGAKIAGAMgAgLgDIAIAAIAHAAIACgDIABgFIgBgFQAAAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAIgGAAIgIAAg");
	this.shape_5.setTransform(27.8,8.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3C3C3C").s().p("AgKAcQgEgDgDgFQgCgFAAgOIAAgfIAKAAIAAAgIABAJQABAEACADQACACADAAQADAAACgBQACgCABgDIABgLIAAghIALAAIAAAfQAAAMgCAGQgBAFgFADQgEADgIAAQgGABgEgDg");
	this.shape_6.setTransform(22.5,8.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3C3C3C").s().p("AgQAYQgHgJAAgPQAAgJAEgHQADgHAFgEQAFgDAGAAQAKAAAHAJQAHAHAAAOQAAAPgHAJQgHAHgKAAQgJAAgHgHgAgIgPQgEAGAAAJQAAAKAEAGQAEAEAEAAQAFAAAEgEQAEgGAAgKQAAgJgEgGQgDgEgGAAQgFAAgDAEg");
	this.shape_7.setTransform(17.3,8.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3C3C3C").s().p("AgTAKIAKgBQACAMAHgBQAFAAACgCQADgCAAgDIgBgEIgDgCIgHgDQgGgDgDgBQgDgBgCgEQgCgEAAgEQAAgFACgEQADgEAEgCQAEgCAEAAQAIAAAFAFQAFAEAAAKIgKAAQAAgFgDgCQgCgCgDABQgDgBgCACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQABABAAAAQAAABABABIAHADQAHACAEADQADABACADQACAEAAAGQAAAHgFAFQgFAGgKAAQgRAAgCgVg");
	this.shape_8.setTransform(12.2,8.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3C3C3C").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABgAjaBnIG1AAIAAjMIm1AAg");
	this.shape_9.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.GEN_pbbase01("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,47.9,24.4);


(lib.GROUNDPWRBUSSWITCHING_gen1busoffcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#243A6C").s().p("AgTAKIAKgBQACAMAHAAQAFgBACgCQADgCAAgDIgBgEIgDgDIgHgCQgGgCgDgCQgDgBgCgEQgCgEAAgEQAAgFACgEQADgEAEgCQAEgCAEAAQAIAAAFAFQAFAEAAAKIgKAAQAAgFgDgCQgCgCgDABQgDgBgCACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAIAHAEQAHACAEADQADABACADQACAEAAAGQAAAHgFAFQgFAGgKAAQgRAAgCgVg");
	this.shape.setTransform(29.8,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#243A6C").s().p("AgKAcQgEgDgCgFQgCgFAAgOIAAgfIAKAAIAAAfIAAAKQAAAEADADQACACADAAQADAAACgBQADgCABgDIAAgMIAAggIALAAIAAAfQgBAMgBAGQgCAFgEADQgFAEgHgBQgGABgEgDg");
	this.shape_1.setTransform(25,17.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#243A6C").s().p("AgUAeIAAg7IAUAAQAGAAAEABQADACADAEQACADAAAGQAAAEgCADQgCAEgDACQAEAAADADQADAEgBAGQAAAGgDAFQgDAEgEACIgNAAgAgJATIAJAAIAGAAIADgDIABgEQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIgEgDIgHAAIgHAAgAgJgEIAGAAIAFgBIAFgCQABgCAAgDIgBgEIgDgCIgIAAIgFAAg");
	this.shape_2.setTransform(20.1,17.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#243A6C").s().p("AgQAeIAAg7IAhAAIAAALIgXAAIAAAOIATAAIAAAIIgTAAIAAAag");
	this.shape_3.setTransform(38.3,8.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#243A6C").s().p("AgQAeIAAg7IAhAAIAAALIgXAAIAAAOIATAAIAAAIIgTAAIAAAag");
	this.shape_4.setTransform(34,8.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#243A6C").s().p("AgQAYQgHgJAAgPQAAgJAEgHQADgHAFgEQAFgDAGAAQAKAAAHAJQAHAHAAAOQAAAPgHAJQgHAHgKAAQgJAAgHgHgAgIgPQgEAGAAAJQAAAKAEAGQAEAEAEAAQAFAAAEgEQAEgGAAgKQAAgJgEgGQgDgEgGAAQgFAAgDAEg");
	this.shape_5.setTransform(29.1,8.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#243A6C").s().p("AAJAeIgSgmIAAAmIgKAAIAAg7IAKAAIATAnIAAgnIAKAAIAAA7g");
	this.shape_6.setTransform(21.9,8.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#243A6C").s().p("AgSAeIAAg7IAkAAIAAALIgZAAIAAANIAWAAIAAAIIgWAAIAAAQIAaAAIAAALg");
	this.shape_7.setTransform(17.2,8.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#243A6C").s().p("AgKAbQgFgDgEgIQgDgHAAgJQAAgIADgIQAEgHAFgEQAFgDAGAAQAJAAAFAEQAGAFABAJIgKADQgBgFgDgDQgDgDgEABQgFAAgEAEQgEAGAAAJQAAAKAFAGQADAEAFAAIAGgBQADgBADgCIAAgJIgMAAIAAgHIAWAAIAAAWQgEADgGADQgGADgGAAQgFAAgGgEg");
	this.shape_8.setTransform(12,8.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0D1526").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABgAjaBnIG1AAIAAjMIm1AAg");
	this.shape_9.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.GEN_pbbase02copy("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,47.9,24.4);


(lib.GROUNDPWRBUSSWITCHING_gen1busoff = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#243A6C").s().p("AgTAKIAKgBQACAMAHAAQAFgBACgCQADgCAAgDIgBgEIgDgDIgHgCQgGgCgDgCQgDgBgCgEQgCgEAAgEQAAgFACgEQADgEAEgCQAEgCAEAAQAIAAAFAFQAFAEAAAKIgKAAQAAgFgDgCQgCgCgDABQgDgBgCACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAIAHAEQAHACAEADQADABACADQACAEAAAGQAAAHgFAFQgFAGgKAAQgRAAgCgVg");
	this.shape.setTransform(29.8,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#243A6C").s().p("AgKAcQgEgDgCgFQgCgFAAgOIAAgfIAKAAIAAAfIAAAKQAAAEADADQACACADAAQADAAACgBQADgCABgDIAAgMIAAggIALAAIAAAfQgBAMgBAGQgCAFgEADQgFAEgHgBQgGABgEgDg");
	this.shape_1.setTransform(25,17.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#243A6C").s().p("AgUAeIAAg7IAUAAQAGAAAEABQADACADAEQACADAAAGQAAAEgCADQgCAEgDACQAEAAADADQADAEgBAGQAAAGgDAFQgDAEgEACIgNAAgAgJATIAJAAIAGAAIADgDIABgEQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIgEgDIgHAAIgHAAgAgJgEIAGAAIAFgBIAFgCQABgCAAgDIgBgEIgDgCIgIAAIgFAAg");
	this.shape_2.setTransform(20.1,17.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#243A6C").s().p("AgQAeIAAg7IAhAAIAAALIgXAAIAAAOIATAAIAAAIIgTAAIAAAag");
	this.shape_3.setTransform(38.3,8.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#243A6C").s().p("AgQAeIAAg7IAhAAIAAALIgXAAIAAAOIATAAIAAAIIgTAAIAAAag");
	this.shape_4.setTransform(34,8.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#243A6C").s().p("AgQAYQgHgJAAgPQAAgJAEgHQADgHAFgEQAFgDAGAAQAKAAAHAJQAHAHAAAOQAAAPgHAJQgHAHgKAAQgJAAgHgHgAgIgPQgEAGAAAJQAAAKAEAGQAEAEAEAAQAFAAAEgEQAEgGAAgKQAAgJgEgGQgDgEgGAAQgFAAgDAEg");
	this.shape_5.setTransform(29.1,8.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#243A6C").s().p("AAJAeIgSgmIAAAmIgKAAIAAg7IAKAAIATAnIAAgnIAKAAIAAA7g");
	this.shape_6.setTransform(21.9,8.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#243A6C").s().p("AgSAeIAAg7IAkAAIAAALIgZAAIAAANIAWAAIAAAIIgWAAIAAAQIAaAAIAAALg");
	this.shape_7.setTransform(17.2,8.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#243A6C").s().p("AgKAbQgFgDgEgIQgDgHAAgJQAAgIADgIQAEgHAFgEQAFgDAGAAQAJAAAFAEQAGAFABAJIgKADQgBgFgDgDQgDgDgEABQgFAAgEAEQgEAGAAAJQAAAKAFAGQADAEAFAAIAGgBQADgBADgCIAAgJIgMAAIAAgHIAWAAIAAAWQgEADgGADQgGADgGAAQgFAAgGgEg");
	this.shape_8.setTransform(12,8.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0D1526").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABgAjaBnIG1AAIAAjMIm1AAg");
	this.shape_9.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.GEN_pbbase02("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,47.9,24.4);


(lib.GROUNDPWRBUSSWITCHING_basecopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.instance = new lib.GEN_screw03copy("synched",0);
	this.instance.setTransform(-139.1,-91.6,1,1,0,0,0,10,10);

	this.instance_1 = new lib.GEN_screw03copy("synched",0);
	this.instance_1.setTransform(-354.3,-85.2,1,1,0,0,0,10,10);

	this.instance_2 = new lib.GEN_screw04copy("synched",0);
	this.instance_2.setTransform(-372.5,-53.6,1,1,0,0,0,10,10);

	this.instance_3 = new lib.GEN_screw04copy("synched",0);
	this.instance_3.setTransform(-120.3,-67.6,1,1,0,0,0,10,10);

	this.instance_4 = new lib.GEN_screw01copy("synched",0);
	this.instance_4.setTransform(-121.8,-154.9,1,1,0,0,0,10,10);

	this.instance_5 = new lib.GEN_screw01copy("synched",0);
	this.instance_5.setTransform(-389.3,-154.9,1,1,0,0,0,10,10);

	this.instance_6 = new lib.GEN_screw01copy("synched",0);
	this.instance_6.setTransform(-121.8,79,1,1,0,0,0,10,10);

	this.instance_7 = new lib.GEN_screw01copy("synched",0);
	this.instance_7.setTransform(-389.3,78.2,1,1,0,0,0,10,10);

	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F3F4F5","#ACB5B9"],[0,1],1.7,1.3,0,1.7,1.3,7).s().p("AgGAuIgJgCQgEgBABgEIAGgVQABgLgKgEIAAAAIgWgFIAAAAQgDgBABgEIACgIQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAIAWAGQALABAEgKIAAAAIAEgVIAAgBQABgDAEABIAIACQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgFAWQgCAKAKAGIAWAEQADAAAAAFIgDAIQgBADgEAAIgVgGQgMAAgEAKIgDAUQgCADgDAAIAAAAgAgogOIgCAIIAAABIAWAFQANAEgCAPIgGAVIABABIAIACIABAAIAFgVIAAgBQAEgMAOABIABAAIAVAGIABgBIAAgBIADgIIgBAAIgVgGIgBAAQgNgEACgOIAGgVIAAgBIgBAAIgIgCIgBAAIgGAWQgDANgOgCIgWgGIgBAAg");
	this.shape.setTransform(-127.8,108.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#F3F4F5","#ACB5B9"],[0,1],-2.7,-3.5,0,-2.7,-3.5,10).s().p("AgKBFQgOgCgMgHQgLgHgJgMQgRgYAFgbQACgOAIgMQAHgLAMgJQAXgRAbAFQAPACALAIQALAHAJAMQARAXgFAbQgCAPgHALQgIALgMAJQgSANgWAAIgKgBgAgKATIgFAVQgBAEAEABIAIACQAEAAAAgDIAFgVQAEgKALABIAWAFQADABACgEIACgIQABgEgEgBIgVgEQgLgFACgLIAGgVQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAAAAAIgJgBQgEgCgBADIAAABIgFAWIAAgBQgDAKgLAAIgWgHQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAQAAABAAAAQAAAAAAABIgDAIQgBADADACIABAAIAWAEIgBAAQALAEgCAMg");
	this.shape_1.setTransform(-128,108.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#DFE2E4","#BFC6C9"],[0,1],-4.9,-7.5,4.9,7.6).s().p("AgNBZQglgHgWgeQgWgfAGgiQAHglAfgWQAdgWAkAGQAkAGAWAfQAWAfgGAjQgGAkggAWQgYARgbAAIgNgBgAgng4QgMAJgHALQgIAMgCAOQgFAbARAYQAJAMALAHQAMAHAOACQAbAFAXgRQAMgJAIgLQAHgLACgPQAFgbgRgXQgJgMgLgHQgLgIgPgCIgLgBQgVAAgSANg");
	this.shape_2.setTransform(-128,108.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#9AA0A4","#F3F4F5"],[0,1],4.3,8.3,-2.2,-4.3).s().p("AgOBdQgngGgWghQgYggAHgkQAGgnAhgWQAfgXAlAGQAnAHAWAfQAXAggGAlQgHAmggAXQgZASgdAAIgOgBgAgzhIQgfAWgGAlQgGAiAWAfQAVAeAlAHQAiAGAfgWQAfgWAGgkQAGgjgVgfQgWgfglgGIgOgBQgcAAgXARg");
	this.shape_3.setTransform(-128,108.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#79888E").s().p("ATzAxIgBgBIAGgVQABgPgNgFIgWgGIAAgBIADgGIAAgBIABAAIAVAGQAPABAFgMIAGgWIABAAIAIACIABAAIAAABIgGAVQgDAMAOAGIAAAAIAVAGIABAAIgCAIIAAABIgCABIgVgGIgBAAQgOgBgEAMIAAABIgGAVIgBAAgA0QAhIgBgBIAGgWQABgMgNgFIgWgGIAAgCIADgIIAAAAIABAAIAVAGQAPABAFgMIAGgWIABAAIAIACIABAAIAAAAIgGAVQgDAOAOAHIAAAAIAVAFIABABIgCAGIAAABIgCAAIgVgFIgBAAQgOgCgEANIAAAAIgGAVIgBABg");
	this.shape_4.setTransform(-256,107.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#F3F4F5","#ACB5B9"],[0,1],1.7,1.3,0,1.7,1.3,7).s().p("AgGAuIgJgCQgEgBABgEIAGgVQABgLgKgEIAAAAIgWgFIAAAAQgDgBABgEIACgIQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAIAWAGQALABAEgKIAAAAIAEgVIAAgBQABgDAEABIAIACQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgFAWQgCAKAKAGIAWAEQADAAAAAFIgDAIQgBADgEAAIgVgGQgMAAgEAKIgDAUQgCADgDAAIAAAAgAgogOIgCAIIAAABIAWAFQANAEgCAPIgGAVIABABIAIACIABAAIAFgVIAAgBQAEgMAOABIABAAIAVAGIABgBIAAgBIADgIIgBAAIgVgGIgBAAQgNgEACgOIAGgVIAAgBIgBAAIgIgCIgBAAIgGAWQgDANgOgCIgWgGIgBAAg");
	this.shape_5.setTransform(-384.3,106.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#F3F4F5","#ACB5B9"],[0,1],-2.7,-3.5,0,-2.7,-3.5,10).s().p("AgKBFQgOgCgMgHQgLgHgJgMQgRgYAFgbQACgOAIgMQAHgLAMgJQAXgRAbAFQAPACALAIQALAHAJAMQARAXgFAbQgCAPgHALQgIALgMAJQgSANgWAAIgKgBgAgKATIgFAVQgBAEAEABIAIACQAEAAAAgDIAFgVQAEgKALABIAWAFQADABACgEIACgIQABgEgEgBIgVgEQgLgFACgLIAGgVQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAAAAAIgJgBQgEgCgBADIAAABIgFAWIAAgBQgDAKgLAAIgWgHQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAQAAABAAAAQAAAAAAABIgDAIQgBADADACIABAAIAWAEIgBAAQALAEgCAMg");
	this.shape_6.setTransform(-384.5,106.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#DFE2E4","#BFC6C9"],[0,1],-4.9,-7.5,4.9,7.6).s().p("AgNBZQglgHgWgeQgWgfAGgiQAHglAfgWQAdgWAkAGQAkAGAWAfQAWAfgGAjQgGAkggAWQgYARgbAAIgNgBgAgng4QgMAJgHALQgIAMgCAOQgFAbARAYQAJAMALAHQAMAHAOACQAbAFAXgRQAMgJAIgLQAHgLACgPQAFgbgRgXQgJgMgLgHQgLgIgPgCIgLgBQgVAAgSANg");
	this.shape_7.setTransform(-384.5,106.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#9AA0A4","#F3F4F5"],[0,1],4.3,8.3,-2.2,-4.3).s().p("AgOBdQgngGgWghQgYggAHgkQAGgnAhgWQAfgXAlAGQAnAHAWAfQAXAggGAlQgHAmggAXQgZASgdAAIgOgBgAgzhIQgfAWgGAlQgGAiAWAfQAVAeAlAHQAiAGAfgWQAfgWAGgkQAGgjgVgfQgWgfglgGIgOgBQgcAAgXARg");
	this.shape_8.setTransform(-384.5,106.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#404040","#1E1E1E"],[0,1],-2.6,1.9,0,3).s().p("AiHGLQgUAAgLgLQgDgCgCgGQgEgGAAgOIAArHQAAgOAEgGQACgGADgCQALgMAUAAIEOAAQAVAAALAMIAFAHQADAFABAKIAALTQgBAKgDAFIgFAHQgLALgVAAgAiml5QgFAFAAAQIAALJQAAAQAFAFQAKAOAVAAIEOAAQAYAAAIgOQAFgHAAgOIAArJQAAgOgFgHQgIgOgYAAIkOAAQgVAAgKAOg");
	this.shape_9.setTransform(-257.3,-107.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#484848","#222222"],[0,1],-1.9,2,-0.8,2.5).s().p("AiHGIQgUAAgLgOQgFgFAAgQIAArJQAAgQAFgFQALgOAUAAIEOAAQAYAAAIAOQAFAHAAAOIAALJQAAAOgFAHQgIAOgYAAgAimlkIAALJQABAeAeAAIEOAAQAeAAACgeIAArJQgCgegeAAIkOAAQgeAAgBAeg");
	this.shape_10.setTransform(-257.3,-107.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#E8EBEC","#9AA0A4"],[0,1],0.9,1.9,-0.9,-1.7).s().p("AkBCbQgWAAAAgXIAAkHQAAgXAWAAIBMAAIA4AAIF+AAQAXAAAAAXIAAEHQAAAXgXAAgAkIiDIAAEHQAAAIAHAAIICAAQAIAAAAgIIAAkHQAAgIgIAAIoCAAQgHAAAAAIg");
	this.shape_11.setTransform(-257.2,22.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#E8EBEC","#9AA0A4"],[0,1],1,0.7,-1,-0.7).s().p("AjyGKQgWgBAAgWIAArlQAAgXAWAAIHkAAQAXAAAAAXIAALlQAAAWgXABgAj5lyIAALlQAAAHAHABIHkAAQAIgBAAgHIAArlQAAgIgIABInkAAQgHgBAAAIg");
	this.shape_12.setTransform(-163.5,-2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4E5D6C").s().p("AnQC6QglAAAAgmIAAknQAAgmAlAAIOgAAQAmAAAAAmIAAEnQAAAmgmAAg");
	this.shape_13.setTransform(-257.2,-26.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#E8EBEC","#9AA0A4"],[0,1],0.6,1.7,-0.6,-1.6).s().p("AnQDOQg5AAAAg6IAAknQAAg6A5AAIOgAAQA6AAAAA6IAAEnQAAA6g6AAgAn/iTIAAEnQAAAwAvAAIOgAAQAwAAAAgwIAAknQAAgwgwAAIugAAQgvAAAAAwg");
	this.shape_14.setTransform(-257.2,-26.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#3D4B54","#344243"],[0,1],3,-25.7,-2.9,-32).s().p("AnQDEQgvAAAAgwIAAknQAAgwAvAAIOgAAQAwAAAAAwIAAEnQAAAwgwAAgAn1iTIAAEnQAAAmAlAAIOgAAQAmAAAAgmIAAknQAAgmgmAAIugAAQglAAAAAmg");
	this.shape_15.setTransform(-257.2,-26.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AkCF/QgIAAABgHIAAkJQgBgIAIAAIICAAQAIAAAAAIIAAEJQAAAHgIAAgAK0F2QgHgBAAgHIAArlQAAgIAHABIHmAAQAIgBAAAIIAALlQAAAHgIABgAyaF2QgHgBAAgHIAArlQAAgIAHABIHjAAQAIgBAAAIIAALlQAAAHgIABg");
	this.shape_16.setTransform(-257.1,-1.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#E8EBEC","#9AA0A4"],[0,1],0.9,0.7,-1.2,-0.6).s().p("AjwGKQgWgBgBgWIAArlQABgXAWAAIHhAAQAXAAgBAXIAALlQABAWgXABgAj4lyIAALlQABAHAHABIHhAAQAIgBgBgHIAArlQABgIgIABInhAAQgHgBgBAIg");
	this.shape_17.setTransform(-350.8,-2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AyTIyIAAgKMAknAAAIAAAKgAB4EkIAAmvIANAAIAAGiIBpAAIACANgAkJEkIACgNIBpAAIAAmiIANAAIAAGvgAC8DgIAAlrIAMAAIAAFfIAoAAIgCAMgAkHDgIgCgMIAoAAIAAlfIAMAAIAAFrgAuWBSIAAjrIANAAIAADtIgNgCgAO0BSIAAjrIAMAAIAADtIgMgCgANwiZIANAAIAADqIgNACgAvZiZIAMAAIAADqIgMACgAC8nQIAAgeIHUAAIAAANInIAAIAAARgAB4nQIAAhhIIYAAIAAAMIoLAAIAABVgAienQIAAhVIoCAAIAAgMIIPAAIAABhgAjhnQIAAgRIm/AAIAAgNIHLAAIAAAeg");
	this.shape_18.setTransform(-256.3,53.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#373737").s().p("AiHGDQgeAAgBgeIAArJQABgeAeAAIEOAAQAeAAACAeIAALJQgCAegeAAg");
	this.shape_19.setTransform(-257.3,-107.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#E8EBEC","#9AA0A4","#E8EBEC"],[0,0.086,1],-19.6,-27.5,15.7,20.1).s().p("ACUDBQhXgHhVgqQhWgohPhUQgdgegWguQgNgbgXg6QgIgRgOgIIAAAAIgHgDIABAAQgKgEgPgBIAKgTQANACAJAEIAAAAIAHADIABAAQAHAEAGAFQALAKAHAQQAWA4ANAaQAUAtAdAcQBNBSBRAmQBSAoBTAGQBTAHBbgbIAHATQhMAXhIAAIgigBg");
	this.shape_20.setTransform(-345.2,-73.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#E8EBEC","#9AA0A4"],[0,1],-2.7,-3.7,2.8,3.8).s().p("A1qRGQgMAAgIgEQgTgIgBgbIAAkaQABgaATgIQAIgDAMAAIA4AAQAtgBAgggQAhgiAAgvQAAgwghghQghgggsgBIg4AAQgMAAgIgEQgTgIgBgbIAA31QAAgZAUgIQAIgEAMAAICTAAIAaACIgKATIgQgBIiTAAQgUAAAAASIAAX0QABATATAAIA4AAQA0ABAnAmQAnAnAAA4QAAA3gnAoQgmAmg1ABIg4AAQgTAAgBASIAAEZQABATATAAMArVAAAQATAAABgSIAAkRQgBgSgTAAIg4AAQg0gBgngnQgngmAAg4QAAg4AngnQAngmA0gBIA4AAQATAAABgSIAA3+QAAgSgUAAIilAAQgaABgPAGIABAAIgGACIAAAAQgPAIgIARQgWA6gNAbQgWAvgeAfQhQBUhUApQhtA0hxgDQhwgCh4g5IAAAAIgOgGIgKgCIgCAAIgBgBItdAAQgJABgEACIAAAAIgOAGQguAWgwAPIgIgTQAtgNAwgXIAAAAQAMgGAEgBQAGgDANgBINeAAIAGABQAHAAAHADIAAAAQAEABAMAGQB0A3BrACQBsADBpgyQBSgnBNhRQAcgfAVgtQAMgaAWg4QAHgQAMgKQAFgFAIgEIAAAAIAHgDIAAAAQARgHAggBICkAAQAMAAAIAEQAUAIAAAZIAAX/QgBAagTAIQgIAEgMAAIg4AAQgsABghAgQghAhAAAwQAAAwAhAgQAhAhAsABIA4AAQAMAAAIADQATAJABAaIAAERQgBAagTAIQgIAEgMAAg");
	this.shape_21.setTransform(-255.8,15.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C0C7CB").s().p("A1qQyQgTAAgBgTIAAkZQABgSATAAIA4AAQA1gBAmgmQAngoAAg3QAAg4gngnQgngmg0gBIg4AAQgTAAgBgTIAA30QAAgSAUAAICTAAIAQABQAPACAKAEIAAAAIAGACIABAAQAOAIAHARQAXA6ANAbQAWAvAeAfQBPBUBVApQBYApBXAHQBXAHBfgcQAwgPAugWIAOgGIAAAAQAEgCAJgBINdAAIABABIACAAIAKACIAOAGIAAAAQB4A5BwACQBxADBtg0QBUgpBQhUQAegfAWgvQANgbAWg6QAIgRAPgIIAAAAIAGgCIgBAAQAPgGAagBIClAAQAUAAAAASIAAX+QgBASgTAAIg4AAQg0ABgnAmQgnAnAAA4QAAA4AnAmQAnAnA0ABIA4AAQATAAABASIAAERQgBASgTAAgATHNOQggAWgGAnQgHAmAXAgQAWAhAnAGQAnAHAfgYQAhgXAHgmQAGgngYggQgWgfgngHIgRgBQgdAAgYASgA08M9QggAWgGAnQgHAmAXAgQAWAhAnAHQAnAGAfgYQAhgXAHgmQAGgngYgfQgWgggngGIgRgCQgdAAgYASgAyYOpMAknAAAIAAgKMgknAAAgABsKiICBAAIgCgIIgCgMQgCgMAAgQQAAgPACgMIACgNIACgHIgiAAIAAlZIgIAAIgMAAIg3AAIgNAAIgHAAgAkOJKIACANQACAMAAAPQAAAQgCAMIgCAMIgCAIICBAAIAAm4IgHAAIgNAAIg3AAIgMAAIgIAAIAAFZIgiAAgAubHIIANADIAHACIAAjxIgHAAIgNAAIg3AAIgMAAIgIAAIAADwIAIgCIAMgCQANgCANAAQAPAAAOACgAOvHIIAMACIAIADIAAjxIgIAAIgMAAIg3AAIgNAAIgHAAIAADvIAHgBIANgDQAMgBANAAQAPAAAPACgAklg9IAAEIQAAAWAWAAIICAAQAXAAAAgWIAAkIQAAgWgXAAIl/AAIg3AAIhMAAQgWAAAAAWgAKRokIAALlQAAAWAXAAIHmAAQAWAAAAgWIAArlQAAgXgWAAInmAAQgXAAAAAXgAy9okIAALlQAAAWAXAAIHjAAQAWAAAAgWIAArlQAAgXgWAAInjAAQgXAAAAAXgABshZIAHAAIANAAIA3AAIAMAAIAIAAIAAgKIHAAAIAAgIIAAgMIAAg3IAAgNIAAgHIofAAgAqli7IAAANIAAA3IAAAMIAAAIIG3AAIAAAKIAIAAIAMAAIA3AAIANAAIAHAAIAAhpIoWAAgAoXo4IAAEpQAAA6A5AAIOgAAQA6AAAAg6IAAkpQAAg6g6AAIugAAQg5AAAAA6g");
	this.shape_22.setTransform(-255.8,15.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#657381").s().p("A2iYNMAAAgwTIAAgHMAtFAAAIAAAHMAAAAwTgA1/SbQgTAIgBAaIAAEaQAAAaAUAJQAHAEAMAAMArVAAAQANAAAHgEQAUgIAAgaIAAkRQAAgbgUgIQgHgDgNAAIg4AAQgsgBggghQgighAAgwQAAgvAigiQAggfAsgBIA4AAQANAAAHgEQAUgIAAgaIAA3/QAAgagUgHQgHgEgNAAIikAAQggABgRAHIAAAAIgHADIAAAAQgHAEgGAFQgMAKgHAQQgVA4gMAaQgWAtgcAeQhMBShSAmQhpAyhsgCQhsgCh0g3QgMgHgEAAIAAAAQgHgDgHgBIgGAAIteAAQgNABgGADQgEAAgMAHIAAAAQgwAXgsAMQhbAbhTgGQhTgHhUgoQhRgmhOhSQgcgegVgtQgMgagWg4QgHgQgLgKQgGgFgHgEIgBAAIgHgDIAAAAQgJgEgOgCIgagCIiTAAQgMAAgHAEQgVAHABAaIAAX1QAAAbAUAIQAHAEAMAAIA4AAQAtAAAgAhQAiAhAAAvQAAAwgiAhQggAhgtABIg4AAQgMAAgHADgAi3yWQgCACgDAGQgDAGAAAOIAALJQAAAOADAGQADAGACACQAMALATAAIEPAAQAVAAAKgLIAGgHQACgFABgKIAArVQgBgKgCgFIgGgHQgKgMgVAAIkPAAQgTAAgMAMgABqRaIAAm5IAHAAIAAGxIB4AAIADAIgAkSRaIACgIIB4AAIAAmxIAHAAIAAG5gAB+RGIAAmlIA3AAIAAFuIAyAAQgCAMAAAPQAAAPACANgAkORGQACgNABgPQgBgPgCgMIAzAAIAAluIA2AAIAAGlgADBQCIAAlhIAIAAIAAFZIAjAAIgDAIgAkQQCIgCgIIAjAAIAAlZIAHAAIAAFhgAuQOCIAAjuIAIAAIAADwIgIgCgAO5OCIAAjuIAIAAIAADwIgIgCgAvoKUIAIAAIAADtIgIACgANiKUIAIAAIAADtIgIACgAu6N+QgNAAgNACIAAjsIA4AAIAADsQgPgCgPAAgAOQN+QgOgBgMACIAAjrIA3AAIAADsQgOgCgPAAgADBFdIAAgSIHIAAIAAAIInAAAIAAAKgAB+FdIAAhVIILAAIAAA3InUAAIAAAegABqFdIAAhqIIfAAIAAAIIoYAAIAABigAiYFdIAAhiIoPAAIAAgIIIWAAIAABqgAjbFdIAAgeInMAAIAAg3IICAAIAABVgAjvFdIAAgKIm4AAIAAgIIG/AAIAAASg");
	this.shape_23.setTransform(-255.6,-28.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-400,-183.1,288.7,310);


(lib.GROUNDPWRBUSSWITCHING_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.instance = new lib.GEN_screw03("synched",0);
	this.instance.setTransform(-139.1,-91.6,1,1,0,0,0,10,10);

	this.instance_1 = new lib.GEN_screw03("synched",0);
	this.instance_1.setTransform(-354.3,-85.2,1,1,0,0,0,10,10);

	this.instance_2 = new lib.GEN_screw04("synched",0);
	this.instance_2.setTransform(-372.5,-53.6,1,1,0,0,0,10,10);

	this.instance_3 = new lib.GEN_screw04("synched",0);
	this.instance_3.setTransform(-120.3,-67.6,1,1,0,0,0,10,10);

	this.instance_4 = new lib.GEN_screw01("synched",0);
	this.instance_4.setTransform(-121.8,-154.9,1,1,0,0,0,10,10);

	this.instance_5 = new lib.GEN_screw01("synched",0);
	this.instance_5.setTransform(-389.3,-154.9,1,1,0,0,0,10,10);

	this.instance_6 = new lib.GEN_screw01("synched",0);
	this.instance_6.setTransform(-121.8,79,1,1,0,0,0,10,10);

	this.instance_7 = new lib.GEN_screw01("synched",0);
	this.instance_7.setTransform(-389.3,78.2,1,1,0,0,0,10,10);

	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F3F4F5","#ACB5B9"],[0,1],1.7,1.3,0,1.7,1.3,7).s().p("AgGAuIgJgCQgEgBABgEIAGgVQABgLgKgEIAAAAIgWgFIAAAAQgDgBABgEIACgIQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAIAWAGQALABAEgKIAAAAIAEgVIAAgBQABgDAEABIAIACQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgFAWQgCAKAKAGIAWAEQADAAAAAFIgDAIQgBADgEAAIgVgGQgMAAgEAKIgDAUQgCADgDAAIAAAAgAgogOIgCAIIAAABIAWAFQANAEgCAPIgGAVIABABIAIACIABAAIAFgVIAAgBQAEgMAOABIABAAIAVAGIABgBIAAgBIADgIIgBAAIgVgGIgBAAQgNgEACgOIAGgVIAAgBIgBAAIgIgCIgBAAIgGAWQgDANgOgCIgWgGIgBAAg");
	this.shape.setTransform(-127.8,108.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#F3F4F5","#ACB5B9"],[0,1],-2.7,-3.5,0,-2.7,-3.5,10).s().p("AgKBFQgOgCgMgHQgLgHgJgMQgRgYAFgbQACgOAIgMQAHgLAMgJQAXgRAbAFQAPACALAIQALAHAJAMQARAXgFAbQgCAPgHALQgIALgMAJQgSANgWAAIgKgBgAgKATIgFAVQgBAEAEABIAIACQAEAAAAgDIAFgVQAEgKALABIAWAFQADABACgEIACgIQABgEgEgBIgVgEQgLgFACgLIAGgVQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAAAAAIgJgBQgEgCgBADIAAABIgFAWIAAgBQgDAKgLAAIgWgHQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAQAAABAAAAQAAAAAAABIgDAIQgBADADACIABAAIAWAEIgBAAQALAEgCAMg");
	this.shape_1.setTransform(-128,108.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#DFE2E4","#BFC6C9"],[0,1],-4.9,-7.5,4.9,7.6).s().p("AgNBZQglgHgWgeQgWgfAGgiQAHglAfgWQAdgWAkAGQAkAGAWAfQAWAfgGAjQgGAkggAWQgYARgbAAIgNgBgAgng4QgMAJgHALQgIAMgCAOQgFAbARAYQAJAMALAHQAMAHAOACQAbAFAXgRQAMgJAIgLQAHgLACgPQAFgbgRgXQgJgMgLgHQgLgIgPgCIgLgBQgVAAgSANg");
	this.shape_2.setTransform(-128,108.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#9AA0A4","#F3F4F5"],[0,1],4.3,8.3,-2.2,-4.3).s().p("AgOBdQgngGgWghQgYggAHgkQAGgnAhgWQAfgXAlAGQAnAHAWAfQAXAggGAlQgHAmggAXQgZASgdAAIgOgBgAgzhIQgfAWgGAlQgGAiAWAfQAVAeAlAHQAiAGAfgWQAfgWAGgkQAGgjgVgfQgWgfglgGIgOgBQgcAAgXARg");
	this.shape_3.setTransform(-128,108.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#79888E").s().p("ATzAxIgBgBIAGgVQABgPgNgFIgWgGIAAgBIADgGIAAgBIABAAIAVAGQAPABAFgMIAGgWIABAAIAIACIABAAIAAABIgGAVQgDAMAOAGIAAAAIAVAGIABAAIgCAIIAAABIgCABIgVgGIgBAAQgOgBgEAMIAAABIgGAVIgBAAgA0QAhIgBgBIAGgWQABgMgNgFIgWgGIAAgCIADgIIAAAAIABAAIAVAGQAPABAFgMIAGgWIABAAIAIACIABAAIAAAAIgGAVQgDAOAOAHIAAAAIAVAFIABABIgCAGIAAABIgCAAIgVgFIgBAAQgOgCgEANIAAAAIgGAVIgBABg");
	this.shape_4.setTransform(-256,107.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#F3F4F5","#ACB5B9"],[0,1],1.7,1.3,0,1.7,1.3,7).s().p("AgGAuIgJgCQgEgBABgEIAGgVQABgLgKgEIAAAAIgWgFIAAAAQgDgBABgEIACgIQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAIAWAGQALABAEgKIAAAAIAEgVIAAgBQABgDAEABIAIACQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgFAWQgCAKAKAGIAWAEQADAAAAAFIgDAIQgBADgEAAIgVgGQgMAAgEAKIgDAUQgCADgDAAIAAAAgAgogOIgCAIIAAABIAWAFQANAEgCAPIgGAVIABABIAIACIABAAIAFgVIAAgBQAEgMAOABIABAAIAVAGIABgBIAAgBIADgIIgBAAIgVgGIgBAAQgNgEACgOIAGgVIAAgBIgBAAIgIgCIgBAAIgGAWQgDANgOgCIgWgGIgBAAg");
	this.shape_5.setTransform(-384.3,106.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#F3F4F5","#ACB5B9"],[0,1],-2.7,-3.5,0,-2.7,-3.5,10).s().p("AgKBFQgOgCgMgHQgLgHgJgMQgRgYAFgbQACgOAIgMQAHgLAMgJQAXgRAbAFQAPACALAIQALAHAJAMQARAXgFAbQgCAPgHALQgIALgMAJQgSANgWAAIgKgBgAgKATIgFAVQgBAEAEABIAIACQAEAAAAgDIAFgVQAEgKALABIAWAFQADABACgEIACgIQABgEgEgBIgVgEQgLgFACgLIAGgVQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAAAAAIgJgBQgEgCgBADIAAABIgFAWIAAgBQgDAKgLAAIgWgHQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAQAAABAAAAQAAAAAAABIgDAIQgBADADACIABAAIAWAEIgBAAQALAEgCAMg");
	this.shape_6.setTransform(-384.5,106.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#DFE2E4","#BFC6C9"],[0,1],-4.9,-7.5,4.9,7.6).s().p("AgNBZQglgHgWgeQgWgfAGgiQAHglAfgWQAdgWAkAGQAkAGAWAfQAWAfgGAjQgGAkggAWQgYARgbAAIgNgBgAgng4QgMAJgHALQgIAMgCAOQgFAbARAYQAJAMALAHQAMAHAOACQAbAFAXgRQAMgJAIgLQAHgLACgPQAFgbgRgXQgJgMgLgHQgLgIgPgCIgLgBQgVAAgSANg");
	this.shape_7.setTransform(-384.5,106.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#9AA0A4","#F3F4F5"],[0,1],4.3,8.3,-2.2,-4.3).s().p("AgOBdQgngGgWghQgYggAHgkQAGgnAhgWQAfgXAlAGQAnAHAWAfQAXAggGAlQgHAmggAXQgZASgdAAIgOgBgAgzhIQgfAWgGAlQgGAiAWAfQAVAeAlAHQAiAGAfgWQAfgWAGgkQAGgjgVgfQgWgfglgGIgOgBQgcAAgXARg");
	this.shape_8.setTransform(-384.5,106.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#404040","#1E1E1E"],[0,1],-2.6,1.9,0,3).s().p("AiHGLQgUAAgLgLQgDgCgCgGQgEgGAAgOIAArHQAAgOAEgGQACgGADgCQALgMAUAAIEOAAQAVAAALAMIAFAHQADAFABAKIAALTQgBAKgDAFIgFAHQgLALgVAAgAiml5QgFAFAAAQIAALJQAAAQAFAFQAKAOAVAAIEOAAQAYAAAIgOQAFgHAAgOIAArJQAAgOgFgHQgIgOgYAAIkOAAQgVAAgKAOg");
	this.shape_9.setTransform(-257.3,-107.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#484848","#222222"],[0,1],-1.9,2,-0.8,2.5).s().p("AiHGIQgUAAgLgOQgFgFAAgQIAArJQAAgQAFgFQALgOAUAAIEOAAQAYAAAIAOQAFAHAAAOIAALJQAAAOgFAHQgIAOgYAAgAimlkIAALJQABAeAeAAIEOAAQAeAAACgeIAArJQgCgegeAAIkOAAQgeAAgBAeg");
	this.shape_10.setTransform(-257.3,-107.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#E8EBEC","#9AA0A4"],[0,1],0.9,1.9,-0.9,-1.7).s().p("AkBCbQgWAAAAgXIAAkHQAAgXAWAAIBMAAIA4AAIF+AAQAXAAAAAXIAAEHQAAAXgXAAgAkIiDIAAEHQAAAIAHAAIICAAQAIAAAAgIIAAkHQAAgIgIAAIoCAAQgHAAAAAIg");
	this.shape_11.setTransform(-257.2,22.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#E8EBEC","#9AA0A4"],[0,1],1,0.7,-1,-0.7).s().p("AjyGKQgWgBAAgWIAArlQAAgXAWAAIHkAAQAXAAAAAXIAALlQAAAWgXABgAj5lyIAALlQAAAHAHABIHkAAQAIgBAAgHIAArlQAAgIgIABInkAAQgHgBAAAIg");
	this.shape_12.setTransform(-163.5,-2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4E5D6C").s().p("AnQC6QglAAAAgmIAAknQAAgmAlAAIOgAAQAmAAAAAmIAAEnQAAAmgmAAg");
	this.shape_13.setTransform(-257.2,-26.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#E8EBEC","#9AA0A4"],[0,1],0.6,1.7,-0.6,-1.6).s().p("AnQDOQg5AAAAg6IAAknQAAg6A5AAIOgAAQA6AAAAA6IAAEnQAAA6g6AAgAn/iTIAAEnQAAAwAvAAIOgAAQAwAAAAgwIAAknQAAgwgwAAIugAAQgvAAAAAwg");
	this.shape_14.setTransform(-257.2,-26.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#3D4B54","#344243"],[0,1],3,-25.7,-2.9,-32).s().p("AnQDEQgvAAAAgwIAAknQAAgwAvAAIOgAAQAwAAAAAwIAAEnQAAAwgwAAgAn1iTIAAEnQAAAmAlAAIOgAAQAmAAAAgmIAAknQAAgmgmAAIugAAQglAAAAAmg");
	this.shape_15.setTransform(-257.2,-26.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AkCF/QgIAAABgHIAAkJQgBgIAIAAIICAAQAIAAAAAIIAAEJQAAAHgIAAgAK0F2QgHgBAAgHIAArlQAAgIAHABIHmAAQAIgBAAAIIAALlQAAAHgIABgAyaF2QgHgBAAgHIAArlQAAgIAHABIHjAAQAIgBAAAIIAALlQAAAHgIABg");
	this.shape_16.setTransform(-257.1,-1.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#E8EBEC","#9AA0A4"],[0,1],0.9,0.7,-1.2,-0.6).s().p("AjwGKQgWgBgBgWIAArlQABgXAWAAIHhAAQAXAAgBAXIAALlQABAWgXABgAj4lyIAALlQABAHAHABIHhAAQAIgBgBgHIAArlQABgIgIABInhAAQgHgBgBAIg");
	this.shape_17.setTransform(-350.8,-2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AyTIyIAAgKMAknAAAIAAAKgAB4EkIAAmvIANAAIAAGiIBpAAIACANgAkJEkIACgNIBpAAIAAmiIANAAIAAGvgAC8DgIAAlrIAMAAIAAFfIAoAAIgCAMgAkHDgIgCgMIAoAAIAAlfIAMAAIAAFrgAuWBSIAAjrIANAAIAADtIgNgCgAO0BSIAAjrIAMAAIAADtIgMgCgANwiZIANAAIAADqIgNACgAvZiZIAMAAIAADqIgMACgAC8nQIAAgeIHUAAIAAANInIAAIAAARgAB4nQIAAhhIIYAAIAAAMIoLAAIAABVgAienQIAAhVIoCAAIAAgMIIPAAIAABhgAjhnQIAAgRIm/AAIAAgNIHLAAIAAAeg");
	this.shape_18.setTransform(-256.3,53.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#373737").s().p("AiHGDQgeAAgBgeIAArJQABgeAeAAIEOAAQAeAAACAeIAALJQgCAegeAAg");
	this.shape_19.setTransform(-257.3,-107.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#E8EBEC","#9AA0A4","#E8EBEC"],[0,0.086,1],-21.2,-27.5,14.1,20.1).s().p("AgQCQQhegshLhQQhGhJgmhYQgHgRgOgIIAAAAIgHgDIAAAAQgJgDgQgCIAKgTQAOACAJAEIAAAAIAHADIABAAQAHAEAGAFQALAKAHAQQAlBVBCBGQBJBNBbArQClBQC1g2IAIATQhNAXhKAAQhtAAhngyg");
	this.shape_20.setTransform(-343.5,-73.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#E8EBEC","#9AA0A4"],[0,1],-2.7,-3.7,2.8,3.8).s().p("A1qRGQgMAAgIgEQgTgIgBgbIAAkaQABgaATgIQAIgDAMAAIA4AAQAtgBAgggQAhgiAAgvQAAgwghghQghgggsgBIg4AAQgMAAgIgEQgTgIgBgbIAA31QAAgZAUgIQAIgEAMAAICTAAIAaACIgKATIgQgBIiTAAQgUAAAAASIAAX0QABATATAAIA4AAQA0ABAnAmQAnAnAAA4QAAA3gnAoQgmAmg1ABIg4AAQgTAAgBASIAAEZQABATATAAMArVAAAQATAAABgSIAAkRQgBgSgTAAIg4AAQg0gBgngnQgngmAAg4QAAg4AngnQAngmA0gBIA4AAQATAAABgSIAA3+QAAgSgUAAIilAAQgaABgPAGIABAAIgGACIAAAAQgPAIgIARQgmBZhFBKQhLBQhfAtQjaBnjwhxIAAAAIgOgGIAAAAIgKgCIgCAAIgBgBIseAAQgIABgFACIAAAAIgOAGIAAAAQgwAXgvAOIgHgTQAugOAvgWIAAAAIAQgHIgBAAQAIgDAMgBIMfAAIAFABQAJABAGACIAAAAIAQAHIgBAAQDoBtDShjQBbgrBJhOQBChHAlhWQAHgQAMgKQAFgFAIgEIAAAAIAHgDIAAAAQARgHAggBICkAAQAMAAAIAEQAUAIAAAZIAAX/QgBAagTAIQgIAEgMAAIg4AAQgsABghAgQghAhAAAwQAAAwAhAgQAhAhAsABIA4AAQAMAAAIADQATAJABAaIAAERQgBAagTAIQgIAEgMAAg");
	this.shape_21.setTransform(-255.8,15.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C0C7CB").s().p("A1qQyQgTAAgBgTIAAkZQABgSATAAIA4AAQA1gBAmgmQAngoAAg3QAAg4gngnQgngmg0gBIg4AAQgTAAgBgTIAA30QAAgSAUAAICTAAIAQABQAPACAKAEIAAAAIAGACIABAAQAOAIAHARQAmBZBGBKQBLBQBeAtQCvBTC9g4QAvgOAwgXIAAAAIAOgGIAAAAQAFgCAIgBIMeAAIABABIACAAIAKACIAAAAIAOAGIAAAAQDwBxDahnQBfgtBLhQQBFhKAmhZQAIgRAPgIIAAAAIAGgCIgBAAQAPgGAagBIClAAQAUAAAAASIAAX+QgBASgTAAIg4AAQg0ABgnAmQgnAnAAA4QAAA4AnAmQAnAnA0ABIA4AAQATAAABASIAAERQgBASgTAAgATHNOQggAWgGAnQgHAmAXAgQAWAhAnAGQAnAHAfgYQAhgXAHgmQAGgngYggQgWgfgngHIgRgBQgdAAgYASgA08M9QggAWgGAnQgHAmAXAgQAWAhAnAHQAnAGAfgYQAhgXAHgmQAGgngYgfQgWgggngGIgRgCQgdAAgYASgAyYOpMAknAAAIAAgKMgknAAAgABsKiICBAAIgCgIIgCgMQgCgMAAgQQAAgPACgMIACgNIACgHIgiAAIAAlZIgIAAIgMAAIg3AAIgNAAIgHAAgAkOJKIACANQACAMAAAPQAAAQgCAMIgCAMIgCAIICBAAIAAm4IgHAAIgNAAIg3AAIgMAAIgIAAIAAFZIgiAAgAubHIIANADIAHACIAAjxIgHAAIgNAAIg3AAIgMAAIgIAAIAADwIAIgCIAMgCQANgCANAAQAPAAAOACgAOvHIIAMACIAIADIAAjxIgIAAIgMAAIg3AAIgNAAIgHAAIAADvIAHgBIANgDQAMgBANAAQAPAAAPACgAklg9IAAEIQAAAWAWAAIICAAQAXAAAAgWIAAkIQAAgWgXAAIl/AAIg3AAIhMAAQgWAAAAAWgAKRokIAALlQAAAWAXAAIHmAAQAWAAAAgWIAArlQAAgXgWAAInmAAQgXAAAAAXgAy9okIAALlQAAAWAXAAIHjAAQAWAAAAgWIAArlQAAgXgWAAInjAAQgXAAAAAXgABshZIAHAAIANAAIA3AAIAMAAIAIAAIAAgKIHAAAIAAgIIAAgMIAAg3IAAgNIAAgHIofAAgAqli7IAAANIAAA3IAAAMIAAAIIG3AAIAAAKIAIAAIAMAAIA3AAIANAAIAHAAIAAhpIoWAAgAoXo4IAAEpQAAA6A5AAIOgAAQA6AAAAg6IAAkpQAAg6g6AAIugAAQg5AAAAA6g");
	this.shape_22.setTransform(-255.8,15.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#657381").s().p("A2iYNMAAAgwTIAAgHMAtFAAAIAAAHMAAAAwTgA1/SbQgTAIgBAaIAAEaQAAAaAUAJQAHAEAMAAMArVAAAQANAAAHgEQAUgIAAgaIAAkRQAAgbgUgIQgHgDgNAAIg4AAQgsgBggghQgighAAgwQAAgvAigiQAggfAsgBIA4AAQANAAAHgEQAUgIAAgaIAA3/QAAgagUgHQgHgEgNAAIikAAQggABgRAHIAAAAIgHADIAAAAQgHAEgGAFQgMAKgHAQQglBVhCBIQhJBNhbArQjSBkjnhtIAAAAIgQgHIAAAAQgGgDgIgBIgGAAIseAAQgNABgHADIAAAAIgQAHIAAAAQgvAWguANQi1A2inhQQhbgrhJhNQhChIglhVQgHgQgLgKQgGgFgHgEIgBAAIgHgDIAAAAQgJgEgOgCIgagCIiTAAQgMAAgHAEQgVAHABAaIAAX1QAAAbAUAIQAHAEAMAAIA4AAQAtAAAgAhQAiAhAAAvQAAAwgiAhQggAhgtABIg4AAQgMAAgHADgAi3yWQgCACgDAGQgDAGAAAOIAALJQAAAOADAGQADAGACACQAMALATAAIEPAAQAVAAAKgLIAGgHQACgFABgKIAArVQgBgKgCgFIgGgHQgKgMgVAAIkPAAQgTAAgMAMgABqRaIAAm5IAHAAIAAGxIB4AAIADAIgAkSRaIACgIIB4AAIAAmxIAHAAIAAG5gAB+RGIAAmlIA3AAIAAFuIAyAAQgCAMAAAPQAAAPACANgAkORGQACgNABgPQgBgPgCgMIAzAAIAAluIA2AAIAAGlgADBQCIAAlhIAIAAIAAFZIAjAAIgDAIgAkQQCIgCgIIAjAAIAAlZIAHAAIAAFhgAuQOCIAAjuIAIAAIAADwIgIgCgAO5OCIAAjuIAIAAIAADwIgIgCgAvoKUIAIAAIAADtIgIACgANiKUIAIAAIAADtIgIACgAu6N+QgNAAgNACIAAjsIA4AAIAADsQgPgCgPAAgAOQN+QgOgBgMACIAAjrIA3AAIAADsQgOgCgPAAgADBFdIAAgSIHIAAIAAAIInAAAIAAAKgAB+FdIAAhVIILAAIAAA3InUAAIAAAegABqFdIAAhqIIfAAIAAAIIoYAAIAABigAiYFdIAAhiIoPAAIAAgIIIWAAIAABqgAjbFdIAAgeInMAAIAAg3IICAAIAABVgAjvFdIAAgKIm4AAIAAgIIG/AAIAAASg");
	this.shape_23.setTransform(-255.6,-28.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-400,-183.1,288.7,310);


(lib.GROUNDPWRBUSSWITCHING_apugenoffbuscopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#243A6C").s().p("AgTAKIAKgBQACAMAHAAQAFgBACgCQADgCAAgDIgBgEIgDgDIgHgCQgGgCgDgCQgDgBgCgEQgCgEAAgEQAAgFACgEQADgEAEgCQAEgCAEAAQAIAAAFAFQAFAEAAAKIgKAAQAAgFgDgCQgCgCgDABQgDgBgCACQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAIAHAEQAHACAEADQADABACADQACAEAAAGQAAAHgFAFQgFAGgKAAQgRAAgCgVg");
	this.shape.setTransform(37.8,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#243A6C").s().p("AgKAcQgFgDgCgFQgBgFAAgOIAAgfIAKAAIAAAfIAAAKQABAEACADQADACACAAQADAAADgBQABgCABgDIABgMIAAggIAKAAIAAAfQAAAMgBAGQgCAFgEADQgFAEgHgBQgGABgEgDg");
	this.shape_1.setTransform(33,17.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#243A6C").s().p("AgTAeIAAg7IATAAQAHAAADABQAEACACAEQACADAAAGQAAAEgCADQgCAEgDACQAEAAADADQACAEAAAGQAAAGgDAFQgDAEgFACIgLAAgAgJATIAJAAIAGAAIADgDIABgEQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBIgCgDIgHAAIgIAAgAgJgEIAGAAIAFgBIAFgCQABgCAAgDIgBgEIgDgCIgHAAIgGAAg");
	this.shape_2.setTransform(28,17.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#243A6C").s().p("AgQAeIAAg7IAhAAIAAALIgXAAIAAAOIATAAIAAAIIgTAAIAAAag");
	this.shape_3.setTransform(21.4,17.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#243A6C").s().p("AgQAeIAAg7IAhAAIAAALIgXAAIAAAOIATAAIAAAIIgTAAIAAAag");
	this.shape_4.setTransform(17.2,17.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#243A6C").s().p("AgQAYQgHgJAAgPQAAgJAEgHQADgHAFgEQAFgDAGAAQAKAAAHAJQAHAHAAAOQAAAPgHAJQgHAHgKAAQgJAAgHgHgAgIgPQgEAGAAAJQAAAKAEAFQAEAFAEABQAFgBAEgFQAEgFAAgKQAAgKgEgFQgDgEgGAAQgFAAgDAEg");
	this.shape_5.setTransform(12.3,17.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#243A6C").s().p("AAJAeIgSgmIAAAmIgKAAIAAg7IAKAAIATAnIAAgnIAKAAIAAA7g");
	this.shape_6.setTransform(38.2,8.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#243A6C").s().p("AgRAeIAAg7IAjAAIAAALIgZAAIAAANIAWAAIAAAIIgWAAIAAAQIAaAAIAAALg");
	this.shape_7.setTransform(33.5,8.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#243A6C").s().p("AgKAbQgFgDgEgIQgDgHAAgJQAAgIADgIQAEgHAFgEQAFgDAGAAQAJAAAFAEQAGAFABAJIgKADQgBgFgDgDQgDgDgEABQgFAAgEAEQgEAGAAAJQAAAKAFAGQADAEAFAAIAGgBQADgBADgCIAAgJIgMAAIAAgHIAWAAIAAAWQgEADgGADQgGADgGAAQgFAAgGgEg");
	this.shape_8.setTransform(28.3,8.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#243A6C").s().p("AgKAcQgEgDgCgFQgCgFAAgOIAAgfIAKAAIAAAgIAAAJQAAAEADADQADACACAAQADAAADgBQACgCAAgDIABgLIAAghIAKAAIAAAfQABAMgCAGQgCAFgEADQgEADgIAAQgGABgEgDg");
	this.shape_9.setTransform(21.2,8.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#243A6C").s().p("AgSAeIAAg7IARAAQAHAAACABQAFACADAEQADAEAAAIQAAAGgDAEQgCAEgEACQgEABgHAAIgHAAIAAAXgAgIgBIAGAAIAGgBIADgDQABgCAAgDQAAgDgBgCIgDgDIgHAAIgFAAg");
	this.shape_10.setTransform(16.4,8.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#243A6C").s().p("AAOAeIgFgOIgSAAIgEAOIgLAAIAUg7IAJAAIATA7gAgGAGIAMAAIgGgVg");
	this.shape_11.setTransform(11.5,8.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0D1526").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABgAjaBnIG1AAIAAjMIm1AAg");
	this.shape_12.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.GEN_pbbase02copy("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,47.9,24.4);


(lib.GROUNDPWRBUSSWITCHING_apugenoffbus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#243A6C").s().p("AgTAKIAKgBQACAMAHAAQAFgBACgCQADgCAAgDIgBgEIgDgDIgHgCQgGgCgDgCQgDgBgCgEQgCgEAAgEQAAgFACgEQADgEAEgCQAEgCAEAAQAIAAAFAFQAFAEAAAKIgKAAQAAgFgDgCQgCgCgDABQgDgBgCACQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAIAHAEQAHACAEADQADABACADQACAEAAAGQAAAHgFAFQgFAGgKAAQgRAAgCgVg");
	this.shape.setTransform(37.8,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#243A6C").s().p("AgKAcQgFgDgCgFQgBgFAAgOIAAgfIAKAAIAAAfIAAAKQABAEACADQADACACAAQADAAADgBQABgCABgDIABgMIAAggIAKAAIAAAfQAAAMgBAGQgCAFgEADQgFAEgHgBQgGABgEgDg");
	this.shape_1.setTransform(33,17.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#243A6C").s().p("AgTAeIAAg7IATAAQAHAAADABQAEACACAEQACADAAAGQAAAEgCADQgCAEgDACQAEAAADADQACAEAAAGQAAAGgDAFQgDAEgFACIgLAAgAgJATIAJAAIAGAAIADgDIABgEQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBIgCgDIgHAAIgIAAgAgJgEIAGAAIAFgBIAFgCQABgCAAgDIgBgEIgDgCIgHAAIgGAAg");
	this.shape_2.setTransform(28,17.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#243A6C").s().p("AgQAeIAAg7IAhAAIAAALIgXAAIAAAOIATAAIAAAIIgTAAIAAAag");
	this.shape_3.setTransform(21.4,17.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#243A6C").s().p("AgQAeIAAg7IAhAAIAAALIgXAAIAAAOIATAAIAAAIIgTAAIAAAag");
	this.shape_4.setTransform(17.2,17.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#243A6C").s().p("AgQAYQgHgJAAgPQAAgJAEgHQADgHAFgEQAFgDAGAAQAKAAAHAJQAHAHAAAOQAAAPgHAJQgHAHgKAAQgJAAgHgHgAgIgPQgEAGAAAJQAAAKAEAFQAEAFAEABQAFgBAEgFQAEgFAAgKQAAgKgEgFQgDgEgGAAQgFAAgDAEg");
	this.shape_5.setTransform(12.3,17.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#243A6C").s().p("AAJAeIgSgmIAAAmIgKAAIAAg7IAKAAIATAnIAAgnIAKAAIAAA7g");
	this.shape_6.setTransform(38.2,8.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#243A6C").s().p("AgRAeIAAg7IAjAAIAAALIgZAAIAAANIAWAAIAAAIIgWAAIAAAQIAaAAIAAALg");
	this.shape_7.setTransform(33.5,8.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#243A6C").s().p("AgKAbQgFgDgEgIQgDgHAAgJQAAgIADgIQAEgHAFgEQAFgDAGAAQAJAAAFAEQAGAFABAJIgKADQgBgFgDgDQgDgDgEABQgFAAgEAEQgEAGAAAJQAAAKAFAGQADAEAFAAIAGgBQADgBADgCIAAgJIgMAAIAAgHIAWAAIAAAWQgEADgGADQgGADgGAAQgFAAgGgEg");
	this.shape_8.setTransform(28.3,8.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#243A6C").s().p("AgKAcQgEgDgCgFQgCgFAAgOIAAgfIAKAAIAAAgIAAAJQAAAEADADQADACACAAQADAAADgBQACgCAAgDIABgLIAAghIAKAAIAAAfQABAMgCAGQgCAFgEADQgEADgIAAQgGABgEgDg");
	this.shape_9.setTransform(21.2,8.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#243A6C").s().p("AgSAeIAAg7IARAAQAHAAACABQAFACADAEQADAEAAAIQAAAGgDAEQgCAEgEACQgEABgHAAIgHAAIAAAXgAgIgBIAGAAIAGgBIADgDQABgCAAgDQAAgDgBgCIgDgDIgHAAIgFAAg");
	this.shape_10.setTransform(16.4,8.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#243A6C").s().p("AAOAeIgFgOIgSAAIgEAOIgLAAIAUg7IAJAAIATA7gAgGAGIAMAAIgGgVg");
	this.shape_11.setTransform(11.5,8.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0D1526").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABgAjaBnIG1AAIAAjMIm1AAg");
	this.shape_12.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.GEN_pbbase02("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,47.9,24.4);


(lib.APU_basecopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAPAjIAAgjIgeAAIAAAjQAAABAAAAQAAABAAAAQAAAAgBAAQAAABAAAAIgEAAIgEgBIgBgDIAAhDIABgDIAEgBQAFAAAAAEIAAAXIAeAAIAAgZIABAAQABgCADAAIAEAAQAAABABAAQAAAAAAABQABAAAAAAQAAABAAAAIAABEQAAABAAAAQAAABAAAAQgBAAAAAAQAAABAAAAIgFABQgEAAgBgDg");
	this.shape.setTransform(-145.5,245);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUAZQgFgKgBgPQABgNAFgKQADgGAHgFQAHgDAEAAQAMAAAGAEIAFAFIAAACQADAGgFABQgEACgDgDQgEgHgIAAQgJAAgGAKQgDAHAAAKQAAAMADAFQAHALAIAAQAEAAAFgDQACgBACgEIAAgNIgPAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAgEIAAgBIABgBIAWAAIACABIABABIAAAUQABADgDADQgCAEgEACQgFAFgMABQgNAAgIgOg");
	this.shape_1.setTransform(-152.3,245);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgCAlIgCgDIAAhDIACgEIACAAQAFAAAAAEIAABEIgDADIgCAAIgCgBg");
	this.shape_2.setTransform(-156.9,245);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAPAjIAAgjIgdAAIAAAjQgBABAAAAQAAABAAAAQAAAAgBAAQAAABAAAAIgEAAIgDgBIgCgDIAAhDIACgDIADgBQAFAAABAEIAAAXIAdAAIAAgZIABAAQABgCAEAAIADAAQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAIAABEQAAABAAAAQAAABAAAAQgBAAAAAAQAAABgBAAIgDABQgFAAgBgDg");
	this.shape_3.setTransform(-161.5,245);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AANAmIgCgDIgLgyIgMAyQgBADgEAAQgEAAgCgDIgUhCQgBgEAEgBQAFgCACAEIAQA3IANgzQABgEADAAQAEAAAAAEIANAzIAQg4IACgCQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAAAQAGACgCAEIgVBCQgCADgDAAIgEAAg");
	this.shape_4.setTransform(-138.1,219);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAYQgFgKAAgOQAAgOAFgKQAHgNANAAQAPAAAGANQAFALAAANQAAANgFALQgHAOgOAAQgNAAgHgOgAgMgRQgCAIAAAJQAAAJACAIQAFAKAHAAQAIAAAFgKQACgGAAgLQAAgKgCgGQgFgLgIAAQgHAAgFAKg");
	this.shape_5.setTransform(-145.8,219.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZAnIAAhJQABgDAEgBQAFABABADIAAA9IAjAAQAFAAAAAGIgBAEQgBAAAAABQAAAAgBAAQAAAAgBAAQAAABgBAAg");
	this.shape_6.setTransform(-151.8,219);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgDAiIAAg9IgRAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgEAEgBIAqAAQAFABAAAEQAAAEgFABIgQAAIAAA9IgCADIgDABQgDAAAAgEg");
	this.shape_7.setTransform(-152.6,193.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgYAjIAAhEIACgDIACgBQAFgBABAEIAdA1IAAg1QABgDAEAAQAFAAAAAEIAABDQAAAEgFAAQgCABgDgDIgdg1IAAA0QgBADgEAAQgFAAAAgDg");
	this.shape_8.setTransform(-158.9,193.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgCAlIgCgDIAAhDIACgEIACAAQAFAAAAAEIAABEIgDADIgCAAIgCgBg");
	this.shape_9.setTransform(-163.5,193.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgWAlIgBgDIAAhEQABgDAEAAQAEgBABAEIAAAaIAZgcQAEgDADAEIABADQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIgTAUIAYAoQABADgDADQgEACgDgDIgVgmIgHAGIAAAeQAAAEgFAAIgEgBg");
	this.shape_10.setTransform(-177.2,184.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgSAmQgFgBAAgEIAAhGIAVAAQAKAAAGADQAHAEAAANQAAAFgCAEQgCAJgNAAIAUAdIAAAEIgCADQgFADgCgEIgVgjIgHAAIAAAgIgBAEIgDABIgBAAgAgNgHIANAAQAFAAAEgDQACgCAAgFQABgKgMAAIgNAAg");
	this.shape_11.setTransform(-183.6,184.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AARAjIgCgJIgdAAIgCAJQgBAEgHgBIgDgBQAAgBAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAIAZhDQABgDABAAQAEAAACADIAWBEQAAAEgFAAIgBAAQgDAAgCgDgAAMAQIgMgjIgKAjIAWAAg");
	this.shape_12.setTransform(-189.5,184.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgRAmQgFgBAAgEIAAhGIAWAAQAJAAAFACQAJAFAAANQAAAFgCAEQgCAGgFACQgFABgIAAIgMAAIAAAgIgBAEIgEABIgBAAgAgLgHIALAAQAHAAADgDQADgCAAgFQABgKgMgBIgNAAg");
	this.shape_13.setTransform(-195.6,184.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgZA0QgHgBAAgFIAAhiIAdAAQAOAAAIAFQAKAGAAASQAAAHgDAFQgDAMgSABIAbAnQACADgBADIgDADQgHAEgCgFIgdgvIgKAAIAAAsQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAIgBgBgAgSgKIASAAQAHAAAFgFQAEgCAAgHQAAgNgQgBIgSAAg");
	this.shape_14.setTransform(-164.1,168.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AghA0IAAhoIA8AAQAHACAAAFQAAAJgHAAIgtAAIAAAVIAlAAQABAAABABQAAAAABAAQAAAAABABQAAAAABABIABAEQgBAEgBACQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIglAAIAAAlIAtAAQAHACAAAGQAAAIgHgBg");
	this.shape_15.setTransform(-172.3,168.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgXA0QgHgBAAgFIAAhiIAeAAQANAAAGAEQAMAHAAARQAAAIgDAFQgCAIgHADQgGACgMAAIgRAAIAAAsQAAADgBACQgBAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAIgBgBgAgQgKIAQAAQAJAAAEgFQAFgCAAgHQAAgNgQgBIgSAAg");
	this.shape_16.setTransform(-180.5,168.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgEA0QAAgBAAAAQgBgBAAAAQAAgBAAgBQgBAAAAgBIAAhdQAAgBABAAQAAgBAAgBQAAAAABAAQAAgBAAAAQACgBACgBQAHAAAAAHIAABdQgBACgDACIgDAAIgEAAg");
	this.shape_17.setTransform(-186,168.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AATA0QgCgCgBgDIgQhDIgRBDQgBAFgGAAQgFAAgCgEIgchbQgBgGAFgBQAHgDADAFIAVBMIAShGQABgFAFAAQAFAAABAFIARBGIAWhMQABAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQADgBADABQAIADgDAFIgdBaQgCAFgFAAIgCAAIgCAAg");
	this.shape_18.setTransform(-194.2,168.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgjA0IAAhjQACgEAGgBQAGABACAEIAABUIAwAAQAGAAAAAIIgBAGQgCABgDAAg");
	this.shape_19.setTransform(-208.1,168.9);

	this.instance = new lib.GEN_screw01copy("synched",0);
	this.instance.setTransform(-121.8,243.1,1,1,0,0,0,10,10);

	this.instance_1 = new lib.GEN_screw01copy("synched",0);
	this.instance_1.setTransform(-389.3,243.1,1,1,0,0,0,10,10);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#D3D8D7","#DBDFDD","#D3D8D7"],[0,0.553,1],-14.1,1.1,14.2,1.1).s().p("Ah+BuQgJgGgCgGIgBAAQgCgFAAgGIAAggIAAgSIAAiyQBFAbApADIAABAIA6AAIAAhBIAFAAQAzgFA5gSIAACDIAAAnIAAATIAAAhQAAAHgCAEQgDAGgJAGQgqAghVAAQhVAAgpggg");
	this.shape_20.setTransform(-186.5,233.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#C5CBCB","#D7DBDB"],[0,0.255],3.7,1.4,-8.5,1.5).s().p("AAcBtQhChDAAheQAAgiAJgeIBEAjQgEAOAAAcIAACcIgHgIg");
	this.shape_21.setTransform(-205.8,224.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#C5CBCB","#D7DBDB"],[0,0.255],-3.8,5.1,8,5.1).s().p("AggBoIAAiMIAAgOQgBgSgDgLIAAAAIgBgCIBCgjQAJAfAAAjIAAABQAABdhABDIgBABIgFAFg");
	this.shape_22.setTransform(-167.5,224.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#C5CBCB","#D7DBDB"],[0,0.255],-7.4,-4.6,4.1,-11.9).s().p("AgDA/IgBgBIgXgwIgyhqIAAgBIADABIADABQA0APAnAqIABAAQApAoAQA2IhEAiQgBgEgMgbg");
	this.shape_23.setTransform(-172.5,206.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["#434D4E","#4A5457","#6B797A","#404748"],[0.282,0.824,0.929,0.976],0.1,-15,0,0.1,-15,33.1).s().p("AgdCjIAAhAIAAkDIAMgBIAIgBIAAEFIAAAsIATAAIAAgsIAAgbIAAgHIAAgIIAAjbIAUACIAADFIAAAcIAAAbIAAAGIAABBg");
	this.shape_24.setTransform(-186.7,212.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2F3537").s().p("AAKAGIAAgNIAUABIAAABIAAANIgUgCgAgdgFIACAAIACgBIAQgBIAAANIgIABIgMABg");
	this.shape_25.setTransform(-186.7,195.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["#D1D8D8","#E0E2E0","#C9CFCD"],[0.643,0.82,0.976],0,-9.1,0,0,-9.1,33.9).s().p("AiMBkQAAgPADgNIABAAIgBAAQADgJANgXIABAAIBOijIAAgBQACgDACAAIAEgCIAEAAIAAEDQgpgDhFgbgAAcB8IAAgcIAAgbIAAjGIALACIABAAIABAAIAEAEIA4B4IAVArIAAAAIAQAeIAAACQADAJAAAPIAAAKQg5ASgyAFIgGAAg");
	this.shape_26.setTransform(-186.6,209.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.rf(["#E0E2E1","#F7F7F7","#E1E1E1"],[0.69,0.824,0.976],-0.2,-21.2,0,-0.2,-21.2,33.1).s().p("AiHDuQgNgKgDgHQgEgIAAgKIAAgrIAAgTIAAidQgBgbAEgPIABAAQADgKAOgYIBLieIAZgGIgEACQgDAAgBADIAAABIhPClIAAAAQgNAXgDAJIAAAAIAAAAQgEANABAPIAACyIAAASIAAAgQAAAGACAFIAAAAQADAGAJAGQApAgBVAAQBVAAAqggQAJgGADgGQACgEAAgHIAAghIAAgTIAAgpIAAiBIAAgKQAAgPgDgJIgBgCIgPgeIAAAAIgVgtIg5h4IgDgEIAUAFIAzBsIAXAxIAAABQAPAaABAEIABADIAAAAQADALABASIAAANIAACNIAAAMIAAAVIAAAtQAAALgEAHQgEAIgMAJQgtAjhbgBQhbABgsgjgAgdkPIADAAIgDAAg");
	this.shape_27.setTransform(-186.5,222.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E1E1E1").s().p("AisDIQhIhHAAhmQAAgjAKghQARg6AtgtQA7g7BPgKIgBAAIgFABQgJACgFAKIgBAAIgCAGIgEABQg5APgrAtQgrArgQA3QgIAegBAgQAABfBEBEIAHAIIAAATIgSgRgACdDCIAGgEIABgBQBBhEAAheIAAgBQAAghgJgfQgPg1gqgqIAAAAQgqgqg0gQIgDgBIgDgBIgEgHIAAAAQgGgKgIgCQBHAMA2A1IgEAEIAIAGIADgDQApArAQA1QAKAfABAiIgGAAIAAAKIAGAAQgCBfhBBFIgEgDIgHAHIAEADIgOANgAACjJIgCAAIgBAAIgIAAIAAgOIAFgBIAAAAIABAAIACAAIAAAFIAIAAIAAgFIADABIAAAOIgIAAg");
	this.shape_28.setTransform(-186.7,216.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#C5CBCB","#D7DBDB"],[0,0.255],2.8,2.2,-6.2,-3.6).s().p("AhQA+QAQg4ArgpQApgsA5gPIAEgBIAAABIhLCcQgMAYgDAKIgBAAg");
	this.shape_29.setTransform(-200.7,206.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CDD3D1").s().p("AAoAGIgBgBIgBAAIgLgBIAAgNIAEAAIAKABIABABIABAAQAIABAGAJIAAAAIADAHIAAABgAg7AJIACgGIABAAQAEgJAJgBIAFgBIABgBIADAAIAFgBIAAABIgCAAIAAANIgEAAIgYAGg");
	this.shape_30.setTransform(-186.4,196.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#2D3539","#7E939A"],[0,1],4.3,8.3,-2.2,-4.3).s().p("AgOBdQgngGgWghQgYggAHgkQAGgnAhgWQAfgXAlAGQAnAHAWAfQAXAggGAlQgHAmggAXQgZASgdAAIgOgBgAgzhIQgfAWgGAlQgGAiAWAfQAVAeAlAHQAiAGAfgWQAfgWAGgkQAGgjgVgfQgWgfglgGIgOgBQgcAAgXARg");
	this.shape_31.setTransform(-243.6,254.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#5A6B72","#414B50"],[0,1],3.4,3.4,-3.3,-3.3).s().p("AgGAuIgJgCQgEgBABgEIAGgVQABgLgKgEIAAAAIgWgFIAAAAQgDgBABgEIACgIQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAIAWAGQALABAEgKIAAAAIAEgVIAAgBQABgDAEABIAIACQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgFAWQgCAKAKAGIAWAEQADAAAAAFIgDAIQgBADgEAAIgVgGQgMAAgEAKIgDAUQgCADgDAAIAAAAgAgogOIgCAIIAAABIAWAFQANAEgCAPIgGAVIABABIAIACIABAAIAFgVIAAgBQAEgMAOABIABAAIAVAGIABgBIAAgBIADgIIgBAAIgVgGIgBAAQgNgEACgOIAGgVIAAgBIgBAAIgIgCIgBAAIgGAWQgDANgOgCIgWgGIgBAAg");
	this.shape_32.setTransform(-243.4,254.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.rf(["#84949D","#4D5A5E"],[0,1],-2.7,-3.5,0,-2.7,-3.5,10).s().p("AgKBFQgOgCgMgHQgLgHgJgMQgRgYAFgbQACgOAIgMQAHgLAMgJQAXgRAbAFQAPACALAIQALAHAJAMQARAXgFAbQgCAPgHALQgIALgMAJQgSANgWAAIgKgBgAgKATIgFAVQgBAEAEABIAIACQAEAAAAgDIAFgVQAEgKALABIAWAFQADABACgEIACgIQABgEgEgBIgVgEQgLgFACgLIAGgVQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAAAAAIgJgBQgEgCgBADIAAABIgFAWIAAgBQgDAKgLAAIgWgHQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAQAAABAAAAQAAAAAAABIgDAIQgBADADACIABAAIAWAEIgBAAQALAEgCAMg");
	this.shape_33.setTransform(-243.7,254.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#657381","#71838E"],[0,1],4.2,8,-4.1,-8).s().p("AgNBZQglgHgWgeQgWgfAGgiQAHglAfgWQAdgWAkAGQAkAGAWAfQAWAfgGAjQgGAkggAWQgYARgbAAIgNgBgAgng4QgMAJgHALQgIAMgCAOQgFAbARAYQAJAMALAHQAMAHAOACQAbAFAXgRQAMgJAIgLQAHgLACgPQAFgbgRgXQgJgMgLgHQgLgIgPgCIgLgBQgVAAgSANg");
	this.shape_34.setTransform(-243.7,254.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#7E8D9A","#4E616D"],[0,1],-1.8,-2.4,1.9,2.5).s().p("AqxIoQgLAAgHgDQgLgFgGgMQgDgIAAgJIAAwFQAAgJADgIQAGgMALgEQAHgEAKAAIViAAQANAAAHAEQAUAHAAAYIAAKcQAAAZgUAIQgHAEgNAAIg3AAQgtABggAgQghAhgBAuIAADWQAAAJgDAIQgGAMgLAFQgGACgLABgArDoBIAAQDQAAASATAAISTAAQATAAAAgSIAAjVQABg2AngnQAmgmA0gBIA4AAQAUAAAAgSIAAqZQAAgRgUAAI1gAAQgTAAAAASg");
	this.shape_35.setTransform(-185.5,213);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#6C7B8A").s().p("AqwIUQgTAAAAgSIAAwDQAAgSATAAIVgAAQAUAAAAARIAAKZQAAASgUAAIg4AAQg0ABgmAmQgnAngBA2IAADVQAAASgTAAgAp7FQQggAWgGAnQgHAmAXAgQAWAhAnAGQAnAHAfgYQAhgXAHgmQAGgngYggQgWgfgngHIgRgBQgdAAgYASgAgriyIgEABQhOAKg7A7QguAtgQA6QgKAfAAAlQAABmBIBHIASARIAAArQAAAKAEAIQAEAHAMAKQAsAjBcgBQBbABAsgjQAMgJAEgIQAEgHAAgLIAAgtIAOgNIAnAoIAHgHIgngoQBBhFABhfIA4AAIAAgKIg4AAQgBgkgJgdQgQg1gpgrIAngnIgHgHIgnAnQg3g1hGgMIgBAAIAAAAIgLgCIgEAAIAAAAIgSgBIgCgBIAAg1IgKAAIAAA1IgCAAIgBAAIgBAAIgEABIgQABIgCAAgAIxnnQgNAJgHAMQgIALgCAPQgFAdARAZQAJALAMAIQALAGAPADQAdAFAYgSQAMgIAIgLQAHgMADgPQAFgdgSgYQgJgMgLgIQgMgHgOgDIgNgBQgWAAgSAOg");
	this.shape_36.setTransform(-185.5,213);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#2D3539","#7E939A"],[0,1],4.6,5.5,-4.6,-5.5).s().p("AgLBGQgOgCgMgHQgMgHgIgMQgSgZAGgbQACgPAHgLQAHgMANgJQAXgRAcAFQAPACAMAIQALAHAIAMQASAYgFAcQgDAOgHAMQgHALgNAJQgSANgWAAIgLgBgAgmg3QgNAJgHALQgHALgCAOQgFAaARAYQAIAMAMAHQALAHAOACQAaAEAXgQQAMgJAHgKQAHgMADgOQAEgagRgXQgIgMgLgHQgLgIgOgCIgLgBQgUAAgSANg");
	this.shape_37.setTransform(-125.2,170);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#374448").s().p("ApeHPIgBgBIAGgWQACgOgNgFIgWgGIAAgCIACgIIAAAAIABAAIAWAGQAOABAFgMIAGgWIABAAIAIACIABAAIAAAAIgGAVQgCAOANAHIABAAIAVAFIABABIgDAIIAAABIgBAAIgVgFIgBAAQgOgCgFANIAAAAIgGAVIgBABgAJAl7IgBgBIAGgVQACgPgNgFIgWgGIAAgBIACgIIAAgBIABAAIAWAGQAOACAFgNIAGgWIABAAIAIACIABAAIAAABIgGAVQgCAOANAGIABAAIAVAGIABAAIgDAIIAAABIgBABIgVgGIgBAAQgOgBgFAMIAAABIgGAVIgBAAg");
	this.shape_38.setTransform(-184.2,212.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.rf(["#84949D","#4D5A5E"],[0,1],-2.7,-3.5,0,-2.7,-3.5,10).s().p("AgKBEQgOgCgLgHQgMgHgIgMQgRgYAFgaQACgOAHgLQAHgLANgJQAWgQAbAEQAOACALAIQALAHAIAMQARAXgEAaQgDAOgHAMQgHAKgMAJQgSANgVAAIgKgBgAgKATIgGAVQgBAEAEABIAJACQADAAABgDIAEgVQAEgKAMABIAVAFQAEABABgEIADgIQAAgEgDgBIgWgEQgKgFACgLIAFgVQAAgBABAAQAAgBgBAAQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAAAgBAAIgIgBQgEgCgBADIAAABIgFAWIAAgBQgDAKgLAAIgWgHQgBAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAgBABQAAAAAAABIgCAIQgBADADACIAAAAIAWAEIAAAAQAKAEgBAMg");
	this.shape_39.setTransform(-125.2,170);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#5A6B72","#414B50"],[0,1],3.4,3.4,-3.3,-3.3).s().p("AgGAuIgJgCQgEgBABgEIAGgVQABgLgKgEIAAAAIgWgFIAAAAQgDgBABgEIACgIQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAIAWAGQALABAEgKIAAAAIAEgVIAAgBQABgDAEABIAIACQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgFAWQgCAKAKAGIAWAEQADAAAAAFIgDAIQgBADgEAAIgVgGQgMAAgEAKIgDAUQgCADgDAAIAAAAgAgogOIgCAIIAAABIAWAFQANAEgCAPIgGAVIABABIAIACIABAAIAFgVIAAgBQAEgMAOABIABAAIAVAGIABgBIAAgBIADgIIgBAAIgVgGIgBAAQgNgEACgOIAGgVIAAgBIgBAAIgIgCIgBAAIgGAWQgDANgOgCIgWgGIgBAAg");
	this.shape_40.setTransform(-125,170);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.rf(["#F3F4F5","#ACB5B9"],[0,1],1.2,-0.9,0,1.2,-0.9,7).s().p("AgLAXIgJgCQgEgBABgEIAGgTQABgLgKgEIAAAAIgPgFIAMAAIAEABQANAFgCAPIgGATIABABIAIACIABAAIAGgUIAAAAQAEgMANABIABAAIAVAGIABgBIAAgBIADgIIgBAAIgVgGIgBAAIgDgCIAKAAIAQAFQADAAAAAFIgDAIQgBADgEAAIgVgGQgMAAgCAIIgFAUQgBAEgDAAIgBgBg");
	this.shape_41.setTransform(-127.3,110.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.rf(["#F3F4F5","#ACB5B9"],[0,1],-2.7,-7,0,-2.7,-7,10).s().p("AgKAiQgOgCgMgHQgLgHgJgMQgOgRABgXIAjAAIAQAEIgBAAQALAEgCAMIgFATQgBAEAEABIAIACQAEAAAAgDIAFgTQAEgKALABIAWAFQADABACgEIACgIQABgEgEgBIgQgEIAoAAIgBAMQgCAPgHAJQgIALgMAJQgSANgWAAIgKgBg");
	this.shape_42.setTransform(-128,111.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#DFE2E4","#BFC6C9"],[0,1],-4.9,-12,4.9,3.1).s().p("AgNAsQglgHgWgeQgSgXABgcIAUAAQAAAWANAUQAJAKALAHQAMAHAOACQAbAFAXgRQAMgJAIgJQAHgLACgPIABgMIAUAAIgBAQQgGAiggAWQgYARgbAAIgNgBg");
	this.shape_43.setTransform(-128,112.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#9AA0A4","#F3F4F5"],[0,1],4.3,3.7,-2.2,-8.9).s().p("AgOAuQgngGgWghQgTgYABgdIADAAQAAAcASAXQAVAeAlAHQAiAGAfgWQAfgWAGgiIABgQIAFAAIgBAQQgHAkggAXQgZASgdAAIgOgBg");
	this.shape_44.setTransform(-128,112.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#79888E").s().p("ATlAUIgBgBIAGgUQABgOgNgFIgDgBIArAAIAEACIAAAAIAVAGIABAAIgCAIIAAABIgCAAIgVgFIgBAAQgOgBgEAKIAAABIgGAVIgBAAgA0eADIgBAAIAGgUIAAgEIAOAAQgDADgBAEIAAAAIgGATIgBAAg");
	this.shape_45.setTransform(-254.6,110.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.rf(["#F3F4F5","#ACB5B9"],[0,1],0.4,-1.7,0,0.4,-1.7,7).s().p("AgTAPIgJgCQgEgBABgEIAGgTIAAgDIAEAAIgBAEIgGATIABABIAIACIABAAIAGgTIAAgBQACgEACgCIAGAAQgEACgDAGIgFASQgBADgDAAIgBAAgAAagKIgPgEIAMAAIAEABIABgBIAAAAIAEAAIgBABQgBADgDAAIgBAAg");
	this.shape_46.setTransform(-383,109.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.rf(["#F3F4F5","#ACB5B9"],[0,1],-2.7,-7.7,0,-2.7,-7.7,10).s().p("AgKAaQgOgCgMgHQgLgHgJgKQgIgMgDgNIA5AAIAAADIgFAVQgBACAEABIAIACQAEABAAgEIAFgSQACgGAFgCIAOAAIAQAEQADAAACgDIAAgBIAVAAQgCAMgGAKQgIAJgMAIQgSAOgWAAIgKgCgAAagZgAATgbIABAAIAGACg");
	this.shape_47.setTransform(-384.5,110.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#DFE2E4","#BFC6C9"],[0,1],-4.9,-12.8,4.9,2.3).s().p("AgNAkQglgHgWgdQgMgRgEgTIAVAAQADANAIANQAJAKALAHQAMAHAOACQAbAFAXgRQAMgHAIgLQAGgKADgMIAUAAQgGAkggAUQgYARgbAAIgNgBg");
	this.shape_48.setTransform(-384.5,111.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#9AA0A4","#F3F4F5"],[0,1],4.3,2.8,-2.2,-9.8).s().p("AgOAmQgngHgWgfQgOgSgDgUIAEAAQADATANASQAVAcAlAGQAiAGAfgWQAfgUAGgjIAFAAQgHAlggAVQgZATgdAAIgOgBg");
	this.shape_49.setTransform(-384.5,112);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("ANjJtIgDgDIAHgHIADADIAoAoIgHAHgAKuILIAAgsIAAkHIAHAAIADAAIACAAIAIAAIAADeIAAAHIAAAHIAAAbIAAAsgAOtHCIgFAAIAAgKIAFAAIA4AAIAAAKgANfESIADgEIAngnIAHAHIgnAnIgDADgAK1DOIAAgFIAAg1IAKAAIAAA1IAAAFgAyTqKIAAgKMAknAAAIAAAKg");
	this.shape_50.setTransform(-256.3,174.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#E8EBEC","#9AA0A4"],[0,1],-2.7,-104.5,2.8,-97.1).s().p("A1qBWQgMAAgIgEQgTgJgBgaIAAiDIAUAAIAACDQABASATAAMArVAAAQATABABgTIAAiDIAUAAIAACEQgBAagTAIQgIAEgMAAg");
	this.shape_51.setTransform(-255.8,116.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#C0C7CB").s().p("A1qBLQgTAAgBgSIAAiDIAbAAQAEAUANASQAWAhAnAEQAnAHAfgWQAhgXAHglMAlGAAAQgBAdATAaQAWAeAnAHQAnAGAfgYQAhgVAHgmIABgPIAiAAIAACDQgBATgTgBgAyYg8MAknAAAIAAgKMgknAAAg");
	this.shape_52.setTransform(-255.8,115.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#657381").s().p("A2iMnIAA5NIAPAAIAACFQAAAbAUAIQAHAEAMAAMArVAAAQANAAAHgEQAUgIAAgaIAAiGIASAAIAAZNgAgFkyQgMAFgFAMQgDAIgBAJIAAQFQABAJADAIQAFAMAMAEQAFAEALAAISYAAQALgBAGgDQALgEAGgMQADgIAAgJIAAjWQABguAgghQAhggAtgBIA3AAQAMAAAIgEQATgIABgaIAAqbQgBgYgTgIQgIgDgMAAI1kAAQgKAAgFADg");
	this.shape_53.setTransform(-255.6,188.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.instance_1},{t:this.instance},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base fill
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#D3D8D7","#DBDFDD","#D3D8D7"],[0,0.553,1],-14,12.8,14.3,12.8).s().p("AiFDvQgNgKgDgIQgFgHAAgKIAAgrIgSgRQhIhIAAhjQAAglAKghQARg6AtgtQA7g7BPgLIADAAIAEgBIAAABIACgBIAVgBIAAAAIABAAIACAAIAAAFIAIAAIAAgFIADAAIAUABIAAABIADAAIALABIABABIAAAAQBHAMA2A1IgEADIAIAHIADgDQApAqAQA2QAKAfABAkIgGAAIAAAKIAGAAQgCBdhBBFIgEgDIgHAHIAEADIgOAMIAAAuQAAALgDAHQgFAHgLAKQgtAihcAAQhaAAgsgig");
	this.shape_54.setTransform(-186.7,222.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_54).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-400,107.9,288.7,161.7);


(lib.APU_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAPAjIAAgjIgeAAIAAAjQAAABAAAAQAAABAAAAQAAAAgBAAQAAABAAAAIgEAAIgEgBIgBgDIAAhDIABgDIAEgBQAFAAAAAEIAAAXIAeAAIAAgZIABAAQABgCADAAIAEAAQAAABABAAQAAAAAAABQABAAAAAAQAAABAAAAIAABEQAAABAAAAQAAABAAAAQgBAAAAAAQAAABAAAAIgFABQgEAAgBgDg");
	this.shape.setTransform(-145.5,245);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUAZQgFgKgBgPQABgNAFgKQADgGAHgFQAHgDAEAAQAMAAAGAEIAFAFIAAACQADAGgFABQgEACgDgDQgEgHgIAAQgJAAgGAKQgDAHAAAKQAAAMADAFQAHALAIAAQAEAAAFgDQACgBACgEIAAgNIgPAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAgEIAAgBIABgBIAWAAIACABIABABIAAAUQABADgDADQgCAEgEACQgFAFgMABQgNAAgIgOg");
	this.shape_1.setTransform(-152.3,245);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgCAlIgCgDIAAhDIACgEIACAAQAFAAAAAEIAABEIgDADIgCAAIgCgBg");
	this.shape_2.setTransform(-156.9,245);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAPAjIAAgjIgdAAIAAAjQgBABAAAAQAAABAAAAQAAAAgBAAQAAABAAAAIgEAAIgDgBIgCgDIAAhDIACgDIADgBQAFAAABAEIAAAXIAdAAIAAgZIABAAQABgCAEAAIADAAQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAIAABEQAAABAAAAQAAABAAAAQgBAAAAAAQAAABgBAAIgDABQgFAAgBgDg");
	this.shape_3.setTransform(-161.5,245);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AANAmIgCgDIgLgyIgMAyQgBADgEAAQgEAAgCgDIgUhCQgBgEAEgBQAFgCACAEIAQA3IANgzQABgEADAAQAEAAAAAEIANAzIAQg4IACgCQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAAAQAGACgCAEIgVBCQgCADgDAAIgEAAg");
	this.shape_4.setTransform(-138.1,219);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAYQgFgKAAgOQAAgOAFgKQAHgNANAAQAPAAAGANQAFALAAANQAAANgFALQgHAOgOAAQgNAAgHgOgAgMgRQgCAIAAAJQAAAJACAIQAFAKAHAAQAIAAAFgKQACgGAAgLQAAgKgCgGQgFgLgIAAQgHAAgFAKg");
	this.shape_5.setTransform(-145.8,219.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZAnIAAhJQABgDAEgBQAFABABADIAAA9IAjAAQAFAAAAAGIgBAEQgBAAAAABQAAAAgBAAQAAAAgBAAQAAABgBAAg");
	this.shape_6.setTransform(-151.8,219);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgDAiIAAg9IgRAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgEAEgBIAqAAQAFABAAAEQAAAEgFABIgQAAIAAA9IgCADIgDABQgDAAAAgEg");
	this.shape_7.setTransform(-152.6,193.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgYAjIAAhEIACgDIACgBQAFgBABAEIAdA1IAAg1QABgDAEAAQAFAAAAAEIAABDQAAAEgFAAQgCABgDgDIgdg1IAAA0QgBADgEAAQgFAAAAgDg");
	this.shape_8.setTransform(-158.9,193.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgCAlIgCgDIAAhDIACgEIACAAQAFAAAAAEIAABEIgDADIgCAAIgCgBg");
	this.shape_9.setTransform(-163.5,193.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgWAlIgBgDIAAhEQABgDAEAAQAEgBABAEIAAAaIAZgcQAEgDADAEIABADQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIgTAUIAYAoQABADgDADQgEACgDgDIgVgmIgHAGIAAAeQAAAEgFAAIgEgBg");
	this.shape_10.setTransform(-177.2,184.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgSAmQgFgBAAgEIAAhGIAVAAQAKAAAGADQAHAEAAANQAAAFgCAEQgCAJgNAAIAUAdIAAAEIgCADQgFADgCgEIgVgjIgHAAIAAAgIgBAEIgDABIgBAAgAgNgHIANAAQAFAAAEgDQACgCAAgFQABgKgMAAIgNAAg");
	this.shape_11.setTransform(-183.6,184.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AARAjIgCgJIgdAAIgCAJQgBAEgHgBIgDgBQAAgBAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAIAZhDQABgDABAAQAEAAACADIAWBEQAAAEgFAAIgBAAQgDAAgCgDgAAMAQIgMgjIgKAjIAWAAg");
	this.shape_12.setTransform(-189.5,184.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgRAmQgFgBAAgEIAAhGIAWAAQAJAAAFACQAJAFAAANQAAAFgCAEQgCAGgFACQgFABgIAAIgMAAIAAAgIgBAEIgEABIgBAAgAgLgHIALAAQAHAAADgDQADgCAAgFQABgKgMgBIgNAAg");
	this.shape_13.setTransform(-195.6,184.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgZA0QgHgBAAgFIAAhiIAdAAQAOAAAIAFQAKAGAAASQAAAHgDAFQgDAMgSABIAbAnQACADgBADIgDADQgHAEgCgFIgdgvIgKAAIAAAsQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAIgBgBgAgSgKIASAAQAHAAAFgFQAEgCAAgHQAAgNgQgBIgSAAg");
	this.shape_14.setTransform(-164.1,168.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AghA0IAAhoIA8AAQAHACAAAFQAAAJgHAAIgtAAIAAAVIAlAAQABAAABABQAAAAABAAQAAAAABABQAAAAABABIABAEQgBAEgBACQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIglAAIAAAlIAtAAQAHACAAAGQAAAIgHgBg");
	this.shape_15.setTransform(-172.3,168.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgXA0QgHgBAAgFIAAhiIAeAAQANAAAGAEQAMAHAAARQAAAIgDAFQgCAIgHADQgGACgMAAIgRAAIAAAsQAAADgBACQgBAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAIgBgBgAgQgKIAQAAQAJAAAEgFQAFgCAAgHQAAgNgQgBIgSAAg");
	this.shape_16.setTransform(-180.5,168.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgEA0QAAgBAAAAQgBgBAAAAQAAgBAAgBQgBAAAAgBIAAhdQAAgBABAAQAAgBAAgBQAAAAABAAQAAgBAAAAQACgBACgBQAHAAAAAHIAABdQgBACgDACIgDAAIgEAAg");
	this.shape_17.setTransform(-186,168.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AATA0QgCgCgBgDIgQhDIgRBDQgBAFgGAAQgFAAgCgEIgchbQgBgGAFgBQAHgDADAFIAVBMIAShGQABgFAFAAQAFAAABAFIARBGIAWhMQABAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQADgBADABQAIADgDAFIgdBaQgCAFgFAAIgCAAIgCAAg");
	this.shape_18.setTransform(-194.2,168.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgjA0IAAhjQACgEAGgBQAGABACAEIAABUIAwAAQAGAAAAAIIgBAGQgCABgDAAg");
	this.shape_19.setTransform(-208.1,168.9);

	this.instance = new lib.GEN_screw03("synched",0);
	this.instance.setTransform(-351.1,179.6,1,1,0,0,0,10,10);

	this.instance_1 = new lib.GEN_screw03("synched",0);
	this.instance_1.setTransform(-267.1,265.2,1,1,0,0,0,10,10);

	this.instance_2 = new lib.GEN_screw01("synched",0);
	this.instance_2.setTransform(-121.8,243.1,1,1,0,0,0,10,10);

	this.instance_3 = new lib.GEN_screw01("synched",0);
	this.instance_3.setTransform(-389.3,243.1,1,1,0,0,0,10,10);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#D3D8D7","#DBDFDD","#D3D8D7"],[0,0.553,1],-14.1,1.1,14.2,1.1).s().p("Ah+BuQgJgGgCgGIgBAAQgCgFAAgGIAAggIAAgSIAAiyQBFAbApADIAABAIA6AAIAAhBIAFAAQAzgFA5gSIAACDIAAAnIAAATIAAAhQAAAHgCAEQgDAGgJAGQgqAghVAAQhVAAgpggg");
	this.shape_20.setTransform(-186.5,233.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#C5CBCB","#D7DBDB"],[0,0.255],3.7,1.4,-8.5,1.5).s().p("AAcBtQhChDAAheQAAgiAJgeIBEAjQgEAOAAAcIAACcIgHgIg");
	this.shape_21.setTransform(-205.8,224.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#C5CBCB","#D7DBDB"],[0,0.255],-3.8,5.1,8,5.1).s().p("AggBoIAAiMIAAgOQgBgSgDgLIAAAAIgBgCIBCgjQAJAfAAAjIAAABQAABdhABDIgBABIgFAFg");
	this.shape_22.setTransform(-167.5,224.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#C5CBCB","#D7DBDB"],[0,0.255],-7.4,-4.6,4.1,-11.9).s().p("AgDA/IgBgBIgXgwIgyhqIAAgBIADABIADABQA0APAnAqIABAAQApAoAQA2IhEAiQgBgEgMgbg");
	this.shape_23.setTransform(-172.5,206.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["#434D4E","#4A5457","#6B797A","#404748"],[0.282,0.824,0.929,0.976],0.1,-15,0,0.1,-15,33.1).s().p("AgdCjIAAhAIAAkDIAMgBIAIgBIAAEFIAAAsIATAAIAAgsIAAgbIAAgHIAAgIIAAjbIAUACIAADFIAAAcIAAAbIAAAGIAABBg");
	this.shape_24.setTransform(-186.7,212.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2F3537").s().p("AAKAGIAAgNIAUABIAAABIAAANIgUgCgAgdgFIACAAIACgBIAQgBIAAANIgIABIgMABg");
	this.shape_25.setTransform(-186.7,195.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["#D1D8D8","#E0E2E0","#C9CFCD"],[0.643,0.82,0.976],0,-9.1,0,0,-9.1,33.9).s().p("AiMBkQAAgPADgNIABAAIgBAAQADgJANgXIABAAIBOijIAAgBQACgDACAAIAEgCIAEAAIAAEDQgpgDhFgbgAAcB8IAAgcIAAgbIAAjGIALACIABAAIABAAIAEAEIA4B4IAVArIAAAAIAQAeIAAACQADAJAAAPIAAAKQg5ASgyAFIgGAAg");
	this.shape_26.setTransform(-186.6,209.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.rf(["#E0E2E1","#F7F7F7","#E1E1E1"],[0.69,0.824,0.976],-0.2,-21.2,0,-0.2,-21.2,33.1).s().p("AiHDuQgNgKgDgHQgEgIAAgKIAAgrIAAgTIAAidQgBgbAEgPIABAAQADgKAOgYIBLieIAZgGIgEACQgDAAgBADIAAABIhPClIAAAAQgNAXgDAJIAAAAIAAAAQgEANABAPIAACyIAAASIAAAgQAAAGACAFIAAAAQADAGAJAGQApAgBVAAQBVAAAqggQAJgGADgGQACgEAAgHIAAghIAAgTIAAgpIAAiBIAAgKQAAgPgDgJIgBgCIgPgeIAAAAIgVgtIg5h4IgDgEIAUAFIAzBsIAXAxIAAABQAPAaABAEIABADIAAAAQADALABASIAAANIAACNIAAAMIAAAVIAAAtQAAALgEAHQgEAIgMAJQgtAjhbgBQhbABgsgjgAgdkPIADAAIgDAAg");
	this.shape_27.setTransform(-186.5,222.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E1E1E1").s().p("AisDIQhIhHAAhmQAAgjAKghQARg6AtgtQA7g7BPgKIgBAAIgFABQgJACgFAKIgBAAIgCAGIgEABQg5APgrAtQgrArgQA3QgIAegBAgQAABfBEBEIAHAIIAAATIgSgRgACdDCIAGgEIABgBQBBhEAAheIAAgBQAAghgJgfQgPg1gqgqIAAAAQgqgqg0gQIgDgBIgDgBIgEgHIAAAAQgGgKgIgCQBHAMA2A1IgEAEIAIAGIADgDQApArAQA1QAKAfABAiIgGAAIAAAKIAGAAQgCBfhBBFIgEgDIgHAHIAEADIgOANgAACjJIgCAAIgBAAIgIAAIAAgOIAFgBIAAAAIABAAIACAAIAAAFIAIAAIAAgFIADABIAAAOIgIAAg");
	this.shape_28.setTransform(-186.7,216.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#C5CBCB","#D7DBDB"],[0,0.255],2.8,2.2,-6.2,-3.6).s().p("AhQA+QAQg4ArgpQApgsA5gPIAEgBIAAABIhLCcQgMAYgDAKIgBAAg");
	this.shape_29.setTransform(-200.7,206.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CDD3D1").s().p("AAoAGIgBgBIgBAAIgLgBIAAgNIAEAAIAKABIABABIABAAQAIABAGAJIAAAAIADAHIAAABgAg7AJIACgGIABAAQAEgJAJgBIAFgBIABgBIADAAIAFgBIAAABIgCAAIAAANIgEAAIgYAGg");
	this.shape_30.setTransform(-186.4,196.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#2D3539","#7E939A"],[0,1],4.3,8.3,-2.2,-4.3).s().p("AgOBdQgngGgWghQgYggAHgkQAGgnAhgWQAfgXAlAGQAnAHAWAfQAXAggGAlQgHAmggAXQgZASgdAAIgOgBgAgzhIQgfAWgGAlQgGAiAWAfQAVAeAlAHQAiAGAfgWQAfgWAGgkQAGgjgVgfQgWgfglgGIgOgBQgcAAgXARg");
	this.shape_31.setTransform(-243.6,254.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#5A6B72","#414B50"],[0,1],3.4,3.4,-3.3,-3.3).s().p("AgGAuIgJgCQgEgBABgEIAGgVQABgLgKgEIAAAAIgWgFIAAAAQgDgBABgEIACgIQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAIAWAGQALABAEgKIAAAAIAEgVIAAgBQABgDAEABIAIACQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgFAWQgCAKAKAGIAWAEQADAAAAAFIgDAIQgBADgEAAIgVgGQgMAAgEAKIgDAUQgCADgDAAIAAAAgAgogOIgCAIIAAABIAWAFQANAEgCAPIgGAVIABABIAIACIABAAIAFgVIAAgBQAEgMAOABIABAAIAVAGIABgBIAAgBIADgIIgBAAIgVgGIgBAAQgNgEACgOIAGgVIAAgBIgBAAIgIgCIgBAAIgGAWQgDANgOgCIgWgGIgBAAg");
	this.shape_32.setTransform(-243.4,254.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.rf(["#84949D","#4D5A5E"],[0,1],-2.7,-3.5,0,-2.7,-3.5,10).s().p("AgKBFQgOgCgMgHQgLgHgJgMQgRgYAFgbQACgOAIgMQAHgLAMgJQAXgRAbAFQAPACALAIQALAHAJAMQARAXgFAbQgCAPgHALQgIALgMAJQgSANgWAAIgKgBgAgKATIgFAVQgBAEAEABIAIACQAEAAAAgDIAFgVQAEgKALABIAWAFQADABACgEIACgIQABgEgEgBIgVgEQgLgFACgLIAGgVQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAAAAAIgJgBQgEgCgBADIAAABIgFAWIAAgBQgDAKgLAAIgWgHQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAQAAABAAAAQAAAAAAABIgDAIQgBADADACIABAAIAWAEIgBAAQALAEgCAMg");
	this.shape_33.setTransform(-243.7,254.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#657381","#71838E"],[0,1],4.2,8,-4.1,-8).s().p("AgNBZQglgHgWgeQgWgfAGgiQAHglAfgWQAdgWAkAGQAkAGAWAfQAWAfgGAjQgGAkggAWQgYARgbAAIgNgBgAgng4QgMAJgHALQgIAMgCAOQgFAbARAYQAJAMALAHQAMAHAOACQAbAFAXgRQAMgJAIgLQAHgLACgPQAFgbgRgXQgJgMgLgHQgLgIgPgCIgLgBQgVAAgSANg");
	this.shape_34.setTransform(-243.7,254.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#7E8D9A","#4E616D"],[0,1],-1.8,-2.4,1.9,2.5).s().p("AqxIoQgLAAgHgDQgLgFgGgMQgDgIAAgJIAAwFQAAgJADgIQAGgMALgEQAHgEAKAAIViAAQANAAAHAEQAUAHAAAYIAAKcQAAAZgUAIQgHAEgNAAIg3AAQgtABggAgQghAhgBAuIAADWQAAAJgDAIQgGAMgLAFQgGACgLABgArDoBIAAQDQAAASATAAISTAAQATAAAAgSIAAjVQABg2AngnQAmgmA0gBIA4AAQAUAAAAgSIAAqZQAAgRgUAAI1gAAQgTAAAAASg");
	this.shape_35.setTransform(-185.5,213);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#6C7B8A").s().p("AqwIUQgTAAAAgSIAAwDQAAgSATAAIVgAAQAUAAAAARIAAKZQAAASgUAAIg4AAQg0ABgmAmQgnAngBA2IAADVQAAASgTAAgAp7FQQggAWgGAnQgHAmAXAgQAWAhAnAGQAnAHAfgYQAhgXAHgmQAGgngYggQgWgfgngHIgRgBQgdAAgYASgAgriyIgEABQhOAKg7A7QguAtgQA6QgKAfAAAlQAABmBIBHIASARIAAArQAAAKAEAIQAEAHAMAKQAsAjBcgBQBbABAsgjQAMgJAEgIQAEgHAAgLIAAgtIAOgNIAnAoIAHgHIgngoQBBhFABhfIA4AAIAAgKIg4AAQgBgkgJgdQgQg1gpgrIAngnIgHgHIgnAnQg3g1hGgMIgBAAIAAAAIgLgCIgEAAIAAAAIgSgBIgCgBIAAg1IgKAAIAAA1IgCAAIgBAAIgBAAIgEABIgQABIgCAAgAIxnnQgNAJgHAMQgIALgCAPQgFAdARAZQAJALAMAIQALAGAPADQAdAFAYgSQAMgIAIgLQAHgMADgPQAFgdgSgYQgJgMgLgIQgMgHgOgDIgNgBQgWAAgSAOg");
	this.shape_36.setTransform(-185.5,213);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#2D3539","#7E939A"],[0,1],4.6,5.5,-4.6,-5.5).s().p("AgLBGQgOgCgMgHQgMgHgIgMQgSgZAGgbQACgPAHgLQAHgMANgJQAXgRAcAFQAPACAMAIQALAHAIAMQASAYgFAcQgDAOgHAMQgHALgNAJQgSANgWAAIgLgBgAgmg3QgNAJgHALQgHALgCAOQgFAaARAYQAIAMAMAHQALAHAOACQAaAEAXgQQAMgJAHgKQAHgMADgOQAEgagRgXQgIgMgLgHQgLgIgOgCIgLgBQgUAAgSANg");
	this.shape_37.setTransform(-125.2,170);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#374448").s().p("ApeHPIgBgBIAGgWQACgOgNgFIgWgGIAAgCIACgIIAAAAIABAAIAWAGQAOABAFgMIAGgWIABAAIAIACIABAAIAAAAIgGAVQgCAOANAHIABAAIAVAFIABABIgDAIIAAABIgBAAIgVgFIgBAAQgOgCgFANIAAAAIgGAVIgBABgAJAl7IgBgBIAGgVQACgPgNgFIgWgGIAAgBIACgIIAAgBIABAAIAWAGQAOACAFgNIAGgWIABAAIAIACIABAAIAAABIgGAVQgCAOANAGIABAAIAVAGIABAAIgDAIIAAABIgBABIgVgGIgBAAQgOgBgFAMIAAABIgGAVIgBAAg");
	this.shape_38.setTransform(-184.2,212.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.rf(["#84949D","#4D5A5E"],[0,1],-2.7,-3.5,0,-2.7,-3.5,10).s().p("AgKBEQgOgCgLgHQgMgHgIgMQgRgYAFgaQACgOAHgLQAHgLANgJQAWgQAbAEQAOACALAIQALAHAIAMQARAXgEAaQgDAOgHAMQgHAKgMAJQgSANgVAAIgKgBgAgKATIgGAVQgBAEAEABIAJACQADAAABgDIAEgVQAEgKAMABIAVAFQAEABABgEIADgIQAAgEgDgBIgWgEQgKgFACgLIAFgVQAAgBABAAQAAgBgBAAQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAAAgBAAIgIgBQgEgCgBADIAAABIgFAWIAAgBQgDAKgLAAIgWgHQgBAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAgBABQAAAAAAABIgCAIQgBADADACIAAAAIAWAEIAAAAQAKAEgBAMg");
	this.shape_39.setTransform(-125.2,170);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#5A6B72","#414B50"],[0,1],3.4,3.4,-3.3,-3.3).s().p("AgGAuIgJgCQgEgBABgEIAGgVQABgLgKgEIAAAAIgWgFIAAAAQgDgBABgEIACgIQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAIAWAGQALABAEgKIAAAAIAEgVIAAgBQABgDAEABIAIACQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgFAWQgCAKAKAGIAWAEQADAAAAAFIgDAIQgBADgEAAIgVgGQgMAAgEAKIgDAUQgCADgDAAIAAAAgAgogOIgCAIIAAABIAWAFQANAEgCAPIgGAVIABABIAIACIABAAIAFgVIAAgBQAEgMAOABIABAAIAVAGIABgBIAAgBIADgIIgBAAIgVgGIgBAAQgNgEACgOIAGgVIAAgBIgBAAIgIgCIgBAAIgGAWQgDANgOgCIgWgGIgBAAg");
	this.shape_40.setTransform(-125,170);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.rf(["#F3F4F5","#ACB5B9"],[0,1],1.2,-0.9,0,1.2,-0.9,7).s().p("AgLAXIgJgCQgEgBABgEIAGgTQABgLgKgEIAAAAIgPgFIAMAAIAEABQANAFgCAPIgGATIABABIAIACIABAAIAGgUIAAAAQAEgMANABIABAAIAVAGIABgBIAAgBIADgIIgBAAIgVgGIgBAAIgDgCIAKAAIAQAFQADAAAAAFIgDAIQgBADgEAAIgVgGQgMAAgCAIIgFAUQgBAEgDAAIgBgBg");
	this.shape_41.setTransform(-127.3,110.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.rf(["#F3F4F5","#ACB5B9"],[0,1],-2.7,-7,0,-2.7,-7,10).s().p("AgKAiQgOgCgMgHQgLgHgJgMQgOgRABgXIAjAAIAQAEIgBAAQALAEgCAMIgFATQgBAEAEABIAIACQAEAAAAgDIAFgTQAEgKALABIAWAFQADABACgEIACgIQABgEgEgBIgQgEIAoAAIgBAMQgCAPgHAJQgIALgMAJQgSANgWAAIgKgBg");
	this.shape_42.setTransform(-128,111.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#DFE2E4","#BFC6C9"],[0,1],-4.9,-12,4.9,3.1).s().p("AgNAsQglgHgWgeQgSgXABgcIAUAAQAAAWANAUQAJAKALAHQAMAHAOACQAbAFAXgRQAMgJAIgJQAHgLACgPIABgMIAUAAIgBAQQgGAiggAWQgYARgbAAIgNgBg");
	this.shape_43.setTransform(-128,112.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#9AA0A4","#F3F4F5"],[0,1],4.3,3.7,-2.2,-8.9).s().p("AgOAuQgngGgWghQgTgYABgdIADAAQAAAcASAXQAVAeAlAHQAiAGAfgWQAfgWAGgiIABgQIAFAAIgBAQQgHAkggAXQgZASgdAAIgOgBg");
	this.shape_44.setTransform(-128,112.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#79888E").s().p("ATlAUIgBgBIAGgUQABgOgNgFIgDgBIArAAIAEACIAAAAIAVAGIABAAIgCAIIAAABIgCAAIgVgFIgBAAQgOgBgEAKIAAABIgGAVIgBAAgA0eADIgBAAIAGgUIAAgEIAOAAQgDADgBAEIAAAAIgGATIgBAAg");
	this.shape_45.setTransform(-254.6,110.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.rf(["#F3F4F5","#ACB5B9"],[0,1],0.4,-1.7,0,0.4,-1.7,7).s().p("AgTAPIgJgCQgEgBABgEIAGgTIAAgDIAEAAIgBAEIgGATIABABIAIACIABAAIAGgTIAAgBQACgEACgCIAGAAQgEACgDAGIgFASQgBADgDAAIgBAAgAAagKIgPgEIAMAAIAEABIABgBIAAAAIAEAAIgBABQgBADgDAAIgBAAg");
	this.shape_46.setTransform(-383,109.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.rf(["#F3F4F5","#ACB5B9"],[0,1],-2.7,-7.7,0,-2.7,-7.7,10).s().p("AgKAaQgOgCgMgHQgLgHgJgKQgIgMgDgNIA5AAIAAADIgFAVQgBACAEABIAIACQAEABAAgEIAFgSQACgGAFgCIAOAAIAQAEQADAAACgDIAAgBIAVAAQgCAMgGAKQgIAJgMAIQgSAOgWAAIgKgCgAAagZgAATgbIABAAIAGACg");
	this.shape_47.setTransform(-384.5,110.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#DFE2E4","#BFC6C9"],[0,1],-4.9,-12.8,4.9,2.3).s().p("AgNAkQglgHgWgdQgMgRgEgTIAVAAQADANAIANQAJAKALAHQAMAHAOACQAbAFAXgRQAMgHAIgLQAGgKADgMIAUAAQgGAkggAUQgYARgbAAIgNgBg");
	this.shape_48.setTransform(-384.5,111.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#9AA0A4","#F3F4F5"],[0,1],4.3,2.8,-2.2,-9.8).s().p("AgOAmQgngHgWgfQgOgSgDgUIAEAAQADATANASQAVAcAlAGQAiAGAfgWQAfgUAGgjIAFAAQgHAlggAVQgZATgdAAIgOgBg");
	this.shape_49.setTransform(-384.5,112);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("ANjJtIgDgDIAHgHIADADIAoAoIgHAHgAKuILIAAgsIAAkHIAHAAIADAAIACAAIAIAAIAADeIAAAHIAAAHIAAAbIAAAsgAOtHCIgFAAIAAgKIAFAAIA4AAIAAAKgANfESIADgEIAngnIAHAHIgnAnIgDADgAK1DOIAAgFIAAg1IAKAAIAAA1IAAAFgAyTqKIAAgKMAknAAAIAAAKg");
	this.shape_50.setTransform(-256.3,174.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#E8EBEC","#9AA0A4"],[0,1],-2.7,-104.5,2.8,-97.1).s().p("A1qBWQgMAAgIgEQgTgJgBgaIAAiDIAUAAIAACDQABASATAAMArVAAAQATABABgTIAAiDIAUAAIAACEQgBAagTAIQgIAEgMAAg");
	this.shape_51.setTransform(-255.8,116.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#C0C7CB").s().p("A1qBLQgTAAgBgSIAAiDIAbAAQAEAUANASQAWAhAnAEQAnAHAfgWQAhgXAHglMAlGAAAQgBAdATAaQAWAeAnAHQAnAGAfgYQAhgVAHgmIABgPIAiAAIAACDQgBATgTgBgAyYg8MAknAAAIAAgKMgknAAAg");
	this.shape_52.setTransform(-255.8,115.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#657381").s().p("A2iMnIAA5NIAPAAIAACFQAAAbAUAIQAHAEAMAAMArVAAAQANAAAHgEQAUgIAAgaIAAiGIASAAIAAZNgAgFkyQgMAFgFAMQgDAIgBAJIAAQFQABAJADAIQAFAMAMAEQAFAEALAAISYAAQALgBAGgDQALgEAGgMQADgIAAgJIAAjWQABguAgghQAhggAtgBIA3AAQAMAAAIgEQATgIABgaIAAqbQgBgYgTgIQgIgDgMAAI1kAAQgKAAgFADg");
	this.shape_53.setTransform(-255.6,188.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base fill
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#D3D8D7","#DBDFDD","#D3D8D7"],[0,0.553,1],-14,12.8,14.3,12.8).s().p("AiFDvQgNgKgDgIQgFgHAAgKIAAgrIgSgRQhIhIAAhjQAAglAKghQARg6AtgtQA7g7BPgLIADAAIAEgBIAAABIACgBIAVgBIAAAAIABAAIACAAIAAAFIAIAAIAAgFIADAAIAUABIAAABIADAAIALABIABABIAAAAQBHAMA2A1IgEADIAIAHIADgDQApAqAQA2QAKAfABAkIgGAAIAAAKIAGAAQgCBdhBBFIgEgDIgHAHIAEADIgOAMIAAAuQAAALgDAHQgFAHgLAKQgtAihcAAQhaAAgsgig");
	this.shape_54.setTransform(-186.7,222.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_54).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-400,107.9,288.7,161.7);


(lib.APU_apuoverspeedcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C3C3C").s().p("AgTAeIAAg7IASAAQAFAAAEABIAGAGQADADABAHQACAFAAAHQAAAIgCAGIgEAJQgDAEgDABQgEACgEAAgAgJATIAHAAIAFAAQABAAAAgBQABAAAAAAQABgBAAAAQAAAAABgBIACgGIABgKIgBgJQgBgEgCgCQgCgCgDgBIgGAAIgEAAg");
	this.shape.setTransform(34.2,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C3C3C").s().p("AgSAeIAAg7IAjAAIAAALIgZAAIAAANIAYAAIAAAIIgYAAIAAAQIAaAAIAAALg");
	this.shape_1.setTransform(29.4,17.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C3C3C").s().p("AgSAeIAAg7IAjAAIAAALIgZAAIAAANIAXAAIAAAIIgXAAIAAAQIAbAAIAAALg");
	this.shape_2.setTransform(24.7,17.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3C3C3C").s().p("AgSAeIAAg7IARAAQAHAAACABQAFACADAEQADAEAAAIQAAAGgDAEQgCAEgEACQgEABgHAAIgHAAIAAAXgAgIgBIAGAAIAGgBIADgDQABgCAAgDQAAgDgBgCIgDgDIgHAAIgFAAg");
	this.shape_3.setTransform(20.1,17.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3C3C3C").s().p("AgTAKIAKgBQACAMAHAAQAFgBACgCQADgCAAgDIgBgEIgDgDIgHgCQgGgCgDgCQgDgBgCgEQgCgEAAgEQAAgFACgEQADgEAEgCQAEgCAEAAQAIAAAFAFQAFAEAAAKIgKAAQAAgFgDgCQgCgCgDABQgDgBgCACQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAIAHAEQAHACAEADQADABACADQACAEAAAGQAAAHgFAFQgFAGgKAAQgRAAgCgVg");
	this.shape_4.setTransform(15.3,17.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3C3C3C").s().p("AAKAeIgIgNIgCgJIgEgCIgFgBIgCAAIAAAZIgKAAIAAg7IAVAAQAGAAAEACQAEACACAEQACAEAAAFQAAAIgDAEQgEACgGABIAFAFIAGAKIAGAMgAgLgDIAHAAIAHAAIAEgDIABgFIgBgFQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBAAIgGAAIgIAAg");
	this.shape_5.setTransform(32.4,8.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3C3C3C").s().p("AgSAeIAAg7IAjAAIAAALIgZAAIAAANIAXAAIAAAIIgXAAIAAAQIAbAAIAAALg");
	this.shape_6.setTransform(27.4,8.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3C3C3C").s().p("AgEAeIgSg7IALAAIALArIAMgrIALAAIgSA7g");
	this.shape_7.setTransform(22.7,8.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3C3C3C").s().p("AgQAYQgHgJAAgPQAAgJAEgHQADgHAFgEQAFgDAGAAQAKAAAHAJQAHAHAAAOQAAAPgHAJQgHAHgKAAQgJAAgHgHgAgIgPQgEAGAAAJQAAAKAEAGQAEAEAEAAQAFAAAEgEQAEgGAAgKQAAgJgEgGQgDgEgGAAQgFAAgDAEg");
	this.shape_8.setTransform(17.7,8.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3C3C3C").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABgAjaBnIG1AAIAAjMIm1AAg");
	this.shape_9.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.GEN_pbbase01copy("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,47.9,24.4);


(lib.APU_apuoverspeed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C3C3C").s().p("AgTAeIAAg7IASAAQAFAAAEABIAGAGQADADABAHQACAFAAAHQAAAIgCAGIgEAJQgDAEgDABQgEACgEAAgAgJATIAHAAIAFAAQABAAAAgBQABAAAAAAQABgBAAAAQAAAAABgBIACgGIABgKIgBgJQgBgEgCgCQgCgCgDgBIgGAAIgEAAg");
	this.shape.setTransform(34.2,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C3C3C").s().p("AgSAeIAAg7IAjAAIAAALIgZAAIAAANIAYAAIAAAIIgYAAIAAAQIAaAAIAAALg");
	this.shape_1.setTransform(29.4,17.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C3C3C").s().p("AgSAeIAAg7IAjAAIAAALIgZAAIAAANIAXAAIAAAIIgXAAIAAAQIAbAAIAAALg");
	this.shape_2.setTransform(24.7,17.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3C3C3C").s().p("AgSAeIAAg7IARAAQAHAAACABQAFACADAEQADAEAAAIQAAAGgDAEQgCAEgEACQgEABgHAAIgHAAIAAAXgAgIgBIAGAAIAGgBIADgDQABgCAAgDQAAgDgBgCIgDgDIgHAAIgFAAg");
	this.shape_3.setTransform(20.1,17.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3C3C3C").s().p("AgTAKIAKgBQACAMAHAAQAFgBACgCQADgCAAgDIgBgEIgDgDIgHgCQgGgCgDgCQgDgBgCgEQgCgEAAgEQAAgFACgEQADgEAEgCQAEgCAEAAQAIAAAFAFQAFAEAAAKIgKAAQAAgFgDgCQgCgCgDABQgDgBgCACQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAIAHAEQAHACAEADQADABACADQACAEAAAGQAAAHgFAFQgFAGgKAAQgRAAgCgVg");
	this.shape_4.setTransform(15.3,17.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3C3C3C").s().p("AAKAeIgIgNIgCgJIgEgCIgFgBIgCAAIAAAZIgKAAIAAg7IAVAAQAGAAAEACQAEACACAEQACAEAAAFQAAAIgDAEQgEACgGABIAFAFIAGAKIAGAMgAgLgDIAHAAIAHAAIAEgDIABgFIgBgFQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBAAIgGAAIgIAAg");
	this.shape_5.setTransform(32.4,8.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3C3C3C").s().p("AgSAeIAAg7IAjAAIAAALIgZAAIAAANIAXAAIAAAIIgXAAIAAAQIAbAAIAAALg");
	this.shape_6.setTransform(27.4,8.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3C3C3C").s().p("AgEAeIgSg7IALAAIALArIAMgrIALAAIgSA7g");
	this.shape_7.setTransform(22.7,8.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3C3C3C").s().p("AgQAYQgHgJAAgPQAAgJAEgHQADgHAFgEQAFgDAGAAQAKAAAHAJQAHAHAAAOQAAAPgHAJQgHAHgKAAQgJAAgHgHgAgIgPQgEAGAAAJQAAAKAEAGQAEAEAEAAQAFAAAEgEQAEgGAAgKQAAgJgEgGQgDgEgGAAQgFAAgDAEg");
	this.shape_8.setTransform(17.7,8.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3C3C3C").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABgAjaBnIG1AAIAAjMIm1AAg");
	this.shape_9.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.GEN_pbbase01("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,47.9,24.4);


(lib.APU_apumaint = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#243A6C").s().p("AgDAeIAAgxIgPAAIAAgKIAlAAIAAAKIgOAAIAAAxg");
	this.shape.setTransform(33.8,12.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#243A6C").s().p("AAJAeIgSglIAAAlIgKAAIAAg7IAKAAIATAnIAAgnIAKAAIAAA7g");
	this.shape_1.setTransform(29.1,12.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#243A6C").s().p("AgEAeIAAg7IAJAAIAAA7g");
	this.shape_2.setTransform(25.7,12.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#243A6C").s().p("AANAeIgDgOIgTAAIgEAOIgKAAIATg7IAIAAIAUA7gAgFAGIALAAIgGgUg");
	this.shape_3.setTransform(22.1,12.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#243A6C").s().p("AAOAeIAAguIgKAuIgIAAIgJguIAAAuIgJAAIAAg7IAPAAIAHAoIAJgoIAOAAIAAA7g");
	this.shape_4.setTransform(16.7,12.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0D1526").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABgAjaBnIG1AAIAAjMIm1AAg");
	this.shape_5.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.GEN_pbbase02("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,47.9,24.4);


(lib.APU_apulowoilpressurecopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C3C3C").s().p("AgSAeIAAg7IAjAAIAAALIgZAAIAAANIAXAAIAAAIIgXAAIAAAQIAbAAIAAALg");
	this.shape.setTransform(41.8,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C3C3C").s().p("AAKAeIgHgNIgEgJIgCgCIgGgBIgCAAIAAAZIgKAAIAAg7IAVAAQAHAAADACQADABADAFQACAEAAAFQAAAIgDAEQgEACgGABIAFAFIAGAKIAGAMgAgLgDIAIAAIAHAAIACgDIABgFIgBgFQAAAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAIgGAAIgIAAg");
	this.shape_1.setTransform(37.1,17.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C3C3C").s().p("AgKAcQgFgDgCgFQgCgFAAgOIAAgfIAKAAIAAAfIABAKQABAEACADQACACADAAQADAAACgBQACgCABgDIABgMIAAggIALAAIAAAfQAAAMgCAGQgBAFgFADQgFAEgHgBQgGABgEgDg");
	this.shape_2.setTransform(31.8,17.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3C3C3C").s().p("AgTAKIAKgBQACAMAHAAQAFgBACgCQADgCAAgDIgBgEIgDgDIgHgCQgGgCgDgCQgDgBgCgEQgCgEAAgEQAAgFACgEQADgEAEgCQAEgCAEAAQAIAAAFAFQAFAEAAAKIgKAAQAAgFgDgCQgCgCgDABQgDgBgCACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAIAHAEQAHACAEADQADABACADQACAEAAAGQAAAHgFAFQgFAGgKAAQgRAAgCgVg");
	this.shape_3.setTransform(26.9,17.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3C3C3C").s().p("AgTAKIAKgBQACAMAHAAQAFgBACgCQADgCAAgDIgBgEIgDgDIgHgCQgGgCgDgCQgDgBgCgEQgCgEAAgEQAAgFACgEQADgEAEgCQAEgCAEAAQAIAAAFAFQAFAEAAAKIgKAAQAAgFgDgCQgCgCgDABQgDgBgCACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAIAHAEQAHACAEADQADABACADQACAEAAAGQAAAHgFAFQgFAGgKAAQgRAAgCgVg");
	this.shape_4.setTransform(22.3,17.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3C3C3C").s().p("AgSAeIAAg7IAjAAIAAALIgZAAIAAANIAYAAIAAAIIgYAAIAAAQIAaAAIAAALg");
	this.shape_5.setTransform(17.8,17.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3C3C3C").s().p("AAKAeIgIgNIgCgJIgEgCIgFgBIgCAAIAAAZIgKAAIAAg7IAVAAQAGAAAEACQAEABACAFQACAEAAAFQAAAIgDAEQgEACgGABIAFAFIAGAKIAGAMgAgLgDIAHAAIAHAAIAEgDIABgFIgBgFQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBAAIgGAAIgIAAg");
	this.shape_6.setTransform(13.1,17.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3C3C3C").s().p("AgSAeIAAg7IARAAQAHAAACABQAFACADAEQADAEAAAIQAAAGgDAEQgCAEgEACQgEABgHAAIgHAAIAAAXgAgIgBIAGAAIAGgBIADgDQABgCAAgDQAAgDgBgCIgDgDIgHAAIgFAAg");
	this.shape_7.setTransform(8.1,17.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAKAAIAAAwIAXAAIAAALg");
	this.shape_8.setTransform(37.8,8.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3C3C3C").s().p("AgEAeIAAg7IAIAAIAAA7g");
	this.shape_9.setTransform(34.6,8.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3C3C3C").s().p("AgQAYQgHgJAAgPQAAgJAEgHQADgHAFgEQAFgDAGAAQAKAAAHAJQAHAHAAAOQAAAPgHAJQgHAHgKAAQgJAAgHgHgAgIgPQgEAGAAAJQAAAKAEAGQAEAEAEAAQAFAAAEgEQAEgGAAgKQAAgJgEgGQgDgEgGAAQgFAAgDAEg");
	this.shape_10.setTransform(30.9,8.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3C3C3C").s().p("AAKAeIgKgsIgIAsIgLAAIgMg7IAKAAIAIAoIAJgoIAKAAIAJAoIAHgoIAKAAIgMA7g");
	this.shape_11.setTransform(22.9,8.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3C3C3C").s().p("AgQAYQgHgJAAgPQAAgJAEgHQADgHAFgEQAFgDAGAAQAKAAAHAJQAHAHAAAOQAAAPgHAJQgHAHgKAAQgJAAgHgHgAgIgPQgEAGAAAJQAAAKAEAGQAEAEAEAAQAFAAAEgEQAEgGAAgKQAAgJgEgGQgDgEgGAAQgFAAgDAEg");
	this.shape_12.setTransform(16.9,8.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAKAAIAAAwIAXAAIAAALg");
	this.shape_13.setTransform(12.3,8.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3C3C3C").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABgAjaBnIG1AAIAAjMIm1AAg");
	this.shape_14.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.GEN_pbbase01copy("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,47.9,24.4);


(lib.APU_apulowoilpressure = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C3C3C").s().p("AgSAeIAAg7IAjAAIAAALIgZAAIAAANIAXAAIAAAIIgXAAIAAAQIAbAAIAAALg");
	this.shape.setTransform(41.8,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C3C3C").s().p("AAKAeIgHgNIgEgJIgCgCIgGgBIgCAAIAAAZIgKAAIAAg7IAVAAQAHAAADACQADABADAFQACAEAAAFQAAAIgDAEQgEACgGABIAFAFIAGAKIAGAMgAgLgDIAIAAIAHAAIACgDIABgFIgBgFQAAAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAIgGAAIgIAAg");
	this.shape_1.setTransform(37.1,17.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C3C3C").s().p("AgKAcQgFgDgCgFQgCgFAAgOIAAgfIAKAAIAAAfIABAKQABAEACADQACACADAAQADAAACgBQACgCABgDIABgMIAAggIALAAIAAAfQAAAMgCAGQgBAFgFADQgFAEgHgBQgGABgEgDg");
	this.shape_2.setTransform(31.8,17.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3C3C3C").s().p("AgTAKIAKgBQACAMAHAAQAFgBACgCQADgCAAgDIgBgEIgDgDIgHgCQgGgCgDgCQgDgBgCgEQgCgEAAgEQAAgFACgEQADgEAEgCQAEgCAEAAQAIAAAFAFQAFAEAAAKIgKAAQAAgFgDgCQgCgCgDABQgDgBgCACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAIAHAEQAHACAEADQADABACADQACAEAAAGQAAAHgFAFQgFAGgKAAQgRAAgCgVg");
	this.shape_3.setTransform(26.9,17.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3C3C3C").s().p("AgTAKIAKgBQACAMAHAAQAFgBACgCQADgCAAgDIgBgEIgDgDIgHgCQgGgCgDgCQgDgBgCgEQgCgEAAgEQAAgFACgEQADgEAEgCQAEgCAEAAQAIAAAFAFQAFAEAAAKIgKAAQAAgFgDgCQgCgCgDABQgDgBgCACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAIAHAEQAHACAEADQADABACADQACAEAAAGQAAAHgFAFQgFAGgKAAQgRAAgCgVg");
	this.shape_4.setTransform(22.3,17.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3C3C3C").s().p("AgSAeIAAg7IAjAAIAAALIgZAAIAAANIAYAAIAAAIIgYAAIAAAQIAaAAIAAALg");
	this.shape_5.setTransform(17.8,17.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3C3C3C").s().p("AAKAeIgIgNIgCgJIgEgCIgFgBIgCAAIAAAZIgKAAIAAg7IAVAAQAGAAAEACQAEABACAFQACAEAAAFQAAAIgDAEQgEACgGABIAFAFIAGAKIAGAMgAgLgDIAHAAIAHAAIAEgDIABgFIgBgFQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBAAIgGAAIgIAAg");
	this.shape_6.setTransform(13.1,17.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3C3C3C").s().p("AgSAeIAAg7IARAAQAHAAACABQAFACADAEQADAEAAAIQAAAGgDAEQgCAEgEACQgEABgHAAIgHAAIAAAXgAgIgBIAGAAIAGgBIADgDQABgCAAgDQAAgDgBgCIgDgDIgHAAIgFAAg");
	this.shape_7.setTransform(8.1,17.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAKAAIAAAwIAXAAIAAALg");
	this.shape_8.setTransform(37.8,8.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3C3C3C").s().p("AgEAeIAAg7IAIAAIAAA7g");
	this.shape_9.setTransform(34.6,8.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3C3C3C").s().p("AgQAYQgHgJAAgPQAAgJAEgHQADgHAFgEQAFgDAGAAQAKAAAHAJQAHAHAAAOQAAAPgHAJQgHAHgKAAQgJAAgHgHgAgIgPQgEAGAAAJQAAAKAEAGQAEAEAEAAQAFAAAEgEQAEgGAAgKQAAgJgEgGQgDgEgGAAQgFAAgDAEg");
	this.shape_10.setTransform(30.9,8.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3C3C3C").s().p("AAKAeIgKgsIgIAsIgLAAIgMg7IAKAAIAIAoIAJgoIAKAAIAJAoIAHgoIAKAAIgMA7g");
	this.shape_11.setTransform(22.9,8.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3C3C3C").s().p("AgQAYQgHgJAAgPQAAgJAEgHQADgHAFgEQAFgDAGAAQAKAAAHAJQAHAHAAAOQAAAPgHAJQgHAHgKAAQgJAAgHgHgAgIgPQgEAGAAAJQAAAKAEAGQAEAEAEAAQAFAAAEgEQAEgGAAgKQAAgJgEgGQgDgEgGAAQgFAAgDAEg");
	this.shape_12.setTransform(16.9,8.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAKAAIAAAwIAXAAIAAALg");
	this.shape_13.setTransform(12.3,8.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3C3C3C").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABgAjaBnIG1AAIAAjMIm1AAg");
	this.shape_14.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.GEN_pbbase01("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,47.9,24.4);


(lib.APU_apufaultcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C3C3C").s().p("AgDAeIAAgxIgPAAIAAgKIAlAAIAAAKIgOAAIAAAxg");
	this.shape.setTransform(33.7,12.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAKAAIAAAwIAXAAIAAALg");
	this.shape_1.setTransform(30.1,12.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C3C3C").s().p("AgKAcQgFgDgBgFQgDgFAAgOIAAgfIAKAAIAAAfIABAKQAAAFADACQADACACAAQADAAACgCQACgBACgDIAAgMIAAggIALAAIAAAfQgBAMgBAFQgBAGgFADQgEAEgIgBQgGAAgEgCg");
	this.shape_2.setTransform(25.3,13);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3C3C3C").s().p("AAOAeIgEgOIgTAAIgEAOIgKAAIATg7IAIAAIAUA7gAgFAGIALAAIgGgUg");
	this.shape_3.setTransform(20.2,12.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAhAAIAAAKIgXAAIAAAPIATAAIAAAIIgTAAIAAAag");
	this.shape_4.setTransform(16.1,12.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3C3C3C").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABgAjaBnIG1AAIAAjMIm1AAg");
	this.shape_5.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.GEN_pbbase01copy("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,47.9,24.4);


(lib.APU_apufault = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C3C3C").s().p("AgDAeIAAgxIgPAAIAAgKIAlAAIAAAKIgOAAIAAAxg");
	this.shape.setTransform(33.7,12.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAKAAIAAAwIAXAAIAAALg");
	this.shape_1.setTransform(30.1,12.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C3C3C").s().p("AgKAcQgFgDgBgFQgDgFAAgOIAAgfIAKAAIAAAfIABAKQAAAFADACQADACACAAQADAAACgCQACgBACgDIAAgMIAAggIALAAIAAAfQgBAMgBAFQgBAGgFADQgEAEgIgBQgGAAgEgCg");
	this.shape_2.setTransform(25.3,13);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3C3C3C").s().p("AAOAeIgEgOIgTAAIgEAOIgKAAIATg7IAIAAIAUA7gAgFAGIALAAIgGgUg");
	this.shape_3.setTransform(20.2,12.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3C3C3C").s().p("AgQAeIAAg7IAhAAIAAAKIgXAAIAAAPIATAAIAAAIIgTAAIAAAag");
	this.shape_4.setTransform(16.1,12.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3C3C3C").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABgAjaBnIG1AAIAAjMIm1AAg");
	this.shape_5.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.GEN_pbbase01("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,47.9,24.4);


(lib.APU_apuegtgauge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointer
	this.instance = new lib.APU_apuegtgaugepointer("synched",0);
	this.instance.setTransform(48.7,48.3,0.998,0.998,-134,0,0,2.5,39.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 13
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A1A1A").s().p("AAABaQgkAAgbgbQgagaAAglQAAgkAagbQAbgaAkAAQAlAAAbAaQAaAbAAAkQAAAlgaAaQgbAbglAAIAAAAgAg8g9QgaAaAAAjQAAAkAaAZQAZAaAjAAQAkAAAZgaQAagZAAgkQAAgjgagaQgZgZgkAAQgjAAgZAZgAguAvQgUgUAAgbQAAgaAUgUQATgTAbAAQAbAAAUATQAUAUAAAaQAAAbgUAUQgUATgbABQgbgBgTgTg");
	this.shape.setTransform(48.5,48.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E1E1E").s().p("Ag8A9QgagZAAgkQAAgjAagaQAZgZAjAAQAkAAAZAZQAaAaAAAjQAAAkgaAZQgZAagkAAQgjAAgZgagAguguQgUAUAAAaQAAAbAUAUQATATAbABQAbgBAUgTQAUgUAAgbQAAgagUgUQgUgTgbAAQgbAAgTATg");
	this.shape_1.setTransform(48.6,48.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// pointer cover
	this.instance_1 = new lib.GEN_screw09("synched",0);
	this.instance_1.setTransform(74.6,26.7,0.998,0.998,1,0,0,3,2.9);

	this.instance_2 = new lib.GEN_screw09("synched",0);
	this.instance_2.setTransform(82.8,48.2,0.999,0.999,-14.5,0,0,3,3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1E1E1E").s().p("ABUAXIjfBTIgLgeIDfhSIglhkIAegLIBVDfIgfAMg");
	this.shape_2.setTransform(69.1,37.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#151515").s().p("ABKAoIjTBPIgFgNIDfhTIAkBfIgNAEgAA/h1IALgEIBUDfIgLAEgAieBBIDThNIghhZIAMgFIAlBkIjfBSg");
	this.shape_3.setTransform(69.5,37.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// text
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQAUQgEgIAAgMQAAgLAEgIQAGgLAKAAQALAAAGALQAEAIAAALQAAAMgEAIQgGALgLAAQgKAAgGgLgAgJgNQgCAGAAAHQAAAIACAGQAEAJAFAAQAGAAAEgJQACgIAAgGQAAgGgCgHQgEgJgGAAQgFAAgEAJg");
	this.shape_4.setTransform(45.9,21.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAAAcIAAgyIgFAAQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAgBAAgBQAAgEADAAIAKAAIADAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAAAIAAA4IgCACIgCAAQgFAAAAgDg");
	this.shape_5.setTransform(41.5,21.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMAZQgFgFAAgIQAAgLAJgDQgHgEAAgJQAAgHAFgEQAEgEAGAAQAIAAAEAEQAFAFAAAGQAAAEgDAEQgBADgEACQAJAEAAAKQAAAIgFAFQgEAGgJAAQgHAAgFgGgAgGAEQgDAEAAAEQAAAEADADQADAEADAAQAFAAACgEQADgEAAgDQAAgDgDgFQgDgEgEAAQgDAAgDAEgAgEgUQgDADAAADQAAADADACQACADACAAQADAAADgDQACgCAAgDQAAgDgCgCQgCgDgEAAQgDAAgBACg");
	this.shape_6.setTransform(24.9,33.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgMAZQgGgFgBgIIAAgCQAAgYAVgPIAEgBIAEABQAAAAAAABQABAAAAAAQAAABAAAAQAAAAAAABIgCACQgHAFgDAFQgGAIgBAEQAEgEAEAAQAIAAAGAFQAGAEAAAIQAAAJgGAFQgGAGgIAAQgHAAgFgGgAgHAEQgDADAAADIAAABIAAABIAAAAQABAFADACQADAEADAAQAEAAAEgEQACgCAAgEIABgCIgBgCQAAgEgCgBQgEgEgEAAQgDAAgEAEg");
	this.shape_7.setTransform(20.8,53.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AABAcIAAgIIgRAAQgDgBAAgDIATgsIABgCIADAAQAAABABAAQABAAAAABQAAAAABABQAAABAAAAIgPAmIAJAAIAAgQQABgDADAAQAFAAAAADIAAAQIAHAAQADAAAAAEQAAAFgDgBIgHAAIAAAJQAAACgFAAQgDAAgBgDg");
	this.shape_8.setTransform(32.6,70.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgMAfQgEAAgBgFIAAgCQAAgHAFgHQADgHAJgFIAFgGQADgEAAgCQAAgDgCgDQgDgCgDAAQgGAAgBAGQAAAAAAAAQAAABgBAAQAAAAAAAAQAAABgBAAIgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAIAAgBQAAgGAFgEQAEgDAGAAQAHAAAFADQAFAFAAAHQAAAIgHAGIgMAJQgGAFAAAKIAXAAQABAAAAABQABAAAAAAQAAABABABQAAAAAAABIgBADIgCABg");
	this.shape_9.setTransform(53.4,75.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00CCFF").s().p("AgKANQgDgFAAgIQAAgHADgFQAEgIAGAAQAHAAAEAIQADAFAAAHQAAAIgDAFQgEAIgHAAQgGAAgEgIgAgFgIQgCAEAAAEQAAAFACAEQACAGADAAQAEAAACgGIACgJQAAgDgCgFQgCgGgEAAQgDAAgCAGg");
	this.shape_10.setTransform(56.9,61.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00CCFF").s().p("AgKANQgDgFAAgIQAAgHADgFQAEgIAGAAQAHAAAEAIQADAFAAAHQAAAIgDAFQgEAIgHAAQgGAAgEgIgAgFgIQgCAEAAAEQAAAFACAEQACAGADAAQAEAAACgGIACgJIgCgIQgCgGgEAAQgDAAgCAGg");
	this.shape_11.setTransform(53.2,61.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00CCFF").s().p("AAAASIAAggIgDAAQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAIAGAAIACABIABACIAAAkIgBABIgCABQgBAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_12.setTransform(50.3,61.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00CCFF").s().p("AAIAUIgIgPIgGAPQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAAAIAKgRIgKgQQAAAAAAAAQAAgBAAAAQABgBAAAAQAAAAABgBIACgBIABACIAHAPIAIgPIABgCIACABQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAIgKAQIAJARIABAAQAAABAAAAQAAAAAAABQgBAAAAABQgBAAAAAAIgCABIgBgBg");
	this.shape_13.setTransform(46.2,61.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00CCFF").s().p("AgKANQgDgFAAgIQAAgGADgGQABgDAEgDQAEgCACAAQAGAAADADIACADIABABQABAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgDgEgEAAQgEAAgDAGQgCADAAAFQAAAGACADQADAGAEAAQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABgBQAAAAAAgBQABAAAAgBIABgBIACAAIACABIAAACQgBAEgDACQgDADgGAAQgHAAgEgIg");
	this.shape_14.setTransform(41.3,61.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00CCFF").s().p("AgDAEQgCgCAAgCQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAAAAAQACAAACACQABAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAACgCACQgCACgCAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBgAAAAAIgBAAIABABIAAABIABgBIABgBIgBAAIgBgBIAAABg");
	this.shape_15.setTransform(38.6,60.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgCAcIAAgyIgOAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAIgBgDQAAgDAEgBIAhAAQAEABAAADQAAAEgDAAIgOAAIAAAyQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAAAAAIgDABQgCAAAAgDg");
	this.shape_16.setTransform(53.2,32.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgQAUQgFgIAAgMQAAgKAFgJQACgFAGgDQAGgDADAAQAKAAAFAEIADAEIABABQABAEgDACQgDABgDgCQgEgHgGABQgHABgFAIQgCAFAAAIQAAAKACAEQAFAJAHAAQAEAAADgCQACgBACgEIAAgLIgMAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIAAgDIAAgBIABgBIARAAIADABIABABIAAAQQAAACgDADQgBADgDACQgEAEgKAAQgLAAgGgLg");
	this.shape_17.setTransform(48,32.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgTAfIAAg9IAjAAQAEABAAADQAAAFgEAAIgaAAIAAANIAVAAQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAIABADIgBADQAAABgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIgVAAIAAAWIAaAAQAEABAAAEQAAAEgEAAg");
	this.shape_18.setTransform(42.7,32.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgQAUQgEgIAAgMQAAgLAEgIQAGgLAKAAQALAAAGALQAEAIAAALQAAAMgEAIQgGALgLAAQgKAAgGgLgAgJgNQgCAGAAAHQAAAIACAGQAEAJAFAAQAGAAAEgJQACgIAAgGQAAgGgCgHQgEgJgGAAQgFAAgEAJg");
	this.shape_19.setTransform(71.9,63.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// base
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("ABVE6IAKgBIAVBvIgKABgAg8GmIAXhwIAKACIgXBwgAAlF8IgBg9IAHAAIACA9gAAIF7IADg9IAIABIgDA9gAA+E+IAHgBIAGA9IgHABgAgTF5IAIg9IAHABIgIA9gABwE2IAHgCIAQA7IgHACgAhOFsIASg6IAHACIgRA7gADKEOIAJgGIA+BgIgJAFgACHEvIAHgDIAVA6IgHADgAjWFhIBAhdIAJAFIhBBegAhqFiIAWg4IAHACIgWA4gACfEnIAHgEIAZA3IgHAEgAiFFXIAag4IAHADIgaA4gAC3EbIAGgEIAdA2IgGADgAieFJIAeg1IAGADIgeA1gADgEAIAGgEIAlAvIgGAFgAjPElIAmgvIAFAFIglAvgADzDxIAFgGIApAtIgGAGgAjmESIAqgtIAGAFIgqAtgAEGDfIAFgGIAsAqIgFAFgAj6D9IAugpIAFAFIguApgAEkC4IAGgIIBeBBIgGAIgAEWDMIAFgFIAvAlIgFAGgAlKDoIBfg+IAFAIIhfA+gAkNDlIAwglIAFAHIgxAkgAkuCzIA2gdIADAHIg1AdgAk7CZIA3gZIAEAHIg4AZgAlGB+IA6gUIACAGIg5AVgAlOBhIA6gQIACAIIg6APgAmHBLIBvgVIACAKIhvAUgAlZAlIA9gHIABAIIg9AHgAlaAHIA9gCIAAAIIg9ABgAlagMIABgHIA8ADIAAAHgAlYgqIABgIIA8AIIgBAIgAmGhRIACgKIBvAXIgDAKgAlOhlIADgHIA6ARIgCAHgAlEiCIACgHIA5AWIgCAHgAk5idIADgHIA3AaIgDAHgAkri3IADgHIA1AeIgDAHgAlGjuIAFgIIBeBAIgGAJgAkKjqIAFgGIAvAnIgEAGgAj3kBIAFgFIAtAqIgFAGgAjikVIAGgGIApAuIgGAFgAjLkpIAGgFIAlAxIgGAEgAjPlmIAIgFIA+BfIgIAFgAiZlMIAHgDIAdA2IgHADgAh/laIAHgDIAZA5IgHADgAhjllIAHgCIAVA5IgHACgAhGluIAHgCIAQA7IgIACgABck4IAYhvIAKACIgYBvgAgzmnIAKgCIAUBwIgJABgABFk9IAIg8IAIABIgIA8gAgLl6IAIAAIAEA9IgGAAgAAtk/IADg8IAIAAIgEA9gAATk/IgCg8IAIAAIABA8g");
	this.shape_20.setTransform(45.3,48.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#7E8D9A","#5A6772"],[0,1],-25.4,-40.5,25.5,40.5).s().p("AlRFTQiNiNABjGQgBjFCNiMQCMiNDFABQDGgBCNCNQCLCMAADFQAADGiLCNQiNCLjGAAQjFAAiMiLgAlElEQiHCGAAC+QAAC/CHCGQCHCHC9AAQC/AACGiHQCHiGAAi/QAAi+iHiGQiGiHi/AAQi9AAiHCHg");
	this.shape_21.setTransform(48.6,48.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1A1A1A").s().p("Ak5E6QiCiCAAi4QAAi3CCiCQCCiCC3AAQC4AACCCCQCCCCAAC3QAAC4iCCCQiCCCi4AAQi3AAiCiCgAA0E6IAVBwIAKgCIgVhvgAheGmIALACIAXhvIgKgCgAAEF8IAIAAIgCg9IgHAAgAgXF7IAHABIADg9IgHgBgAAcE+IAHA9IAHgBIgGg9gAg0F5IAHABIAIg9IgHgBgABPE2IAQA7IAHgCIgQg7gAhvFtIAHACIASg7IgHgCgACpEOIA+BgIAJgGIg+hggABmEvIAVA6IAHgDIgVg5gAj3FhIAIAGIBAhdIgIgGgAiLFiIAHADIAWg5IgHgCgAB+EnIAZA3IAHgDIgZg4gAimFXIAHADIAag3IgHgDgACWEbIAdA1IAGgDIgdg2gAi/FJIAGAEIAeg2IgGgDgAC/EAIAlAwIAGgEIglgwgAjwEmIAGAEIAlgvIgGgFgADSDxIAoAtIAGgFIgpgtgAkHESIAGAFIAqgtIgGgFgADlDfIAsApIAFgFIgsgqgAkbD9IAFAFIAugoIgFgGgAEDC5IBeBAIAGgIIhehAgAD1DNIAvAlIAFgGIgvglgAlsDoIAGAJIBfg+IgFgJgAkuDmIAEAGIAxglIgFgGgAlPCzIAEAHIA1gdIgDgGgAlcCZIADAHIA4gZIgEgHgAlnB+IADAHIA5gUIgCgHgAlwBiIACAHIA7gQIgCgIgAmoBLIACAKIBvgVIgCgKgAl6AmIABAHIA9gHIgBgHgAl7AHIAAAIIA9gCIAAgHgAl7gLIA8ADIABgIIg8gDgAl5gqIA8AIIABgIIg8gIgAmnhRIBuAXIACgKIhugXgAlvhlIA7ARIACgHIg7gRgAlliBIA5AVIACgHIg5gVgAlbidIA4AaIADgGIg3gagAlMi3IA1AeIADgHIg1gdgAlnjtIBdBAIAGgIIhehAgAkrjpIAwAmIAEgGIgvgmgAkYkAIAtAqIAFgGIgtgqgAkDkVIApAtIAGgFIgpgtgAjskpIAlAxIAGgFIglgxgAjxlmIA/BgIAIgGIg+hfgAi6lLIAdA1IAGgDIgcg2gAiglaIAZA5IAHgDIgZg5gAiEllIAVA6IAHgDIgVg5gAhnluIAPA7IAIgCIgQg7gAA7k4IAKACIAXhvIgKgCgAhUmmIAVBvIAJgCIgUhvgAAkk9IAIABIAIg8IgIgBgAgsl5IAGA9IAHgBIgFg9gAALk/IAIABIAEg8IgIgBgAgMk+IAHAAIgBg9IgIAAg");
	this.shape_22.setTransform(48.6,48.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AlAFAQiEiFAAi7QAAi6CEiFQCFiFC7AAQC7AACFCFQCFCFAAC6QAAC7iFCFQiFCFi7AAQi7AAiFiFgAk5k5QiCCCAAC3QAAC4CCCCQCCCCC3AAQC4AACCiCQCCiCAAi4QAAi3iCiCQiCiCi4AAQi3AAiCCCg");
	this.shape_23.setTransform(48.6,48.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#A0ACB4","#475863"],[0,1],-13.3,-23,16.4,30.5).s().p("AlWFXQiOiOgBjJQABjICOiOQCPiODHgBQDJABCOCOQCPCOgBDIQABDJiPCOQiOCPjJgBQjHABiPiPgAlRlRQiNCMABDFQgBDGCNCNQCMCLDFAAQDGAACNiLQCLiNAAjGQAAjFiLiMQiNiNjGABQjFgBiMCNg");
	this.shape_24.setTransform(48.6,48.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#A0ACB4","#475863"],[0,1],7.7,15.8,-15.7,-23.8).s().p("AlEFFQiHiGAAi/QAAi+CHiGQCHiHC9AAQC/AACGCHQCHCGAAC+QAAC/iHCGQiGCHi/AAQi9AAiHiHgAlAk/QiECFAAC6QAAC7CECFQCFCFC7AAQC7AACFiFQCFiFAAi7QAAi6iFiFQiFiFi7AAQi7AAiFCFg");
	this.shape_25.setTransform(48.6,48.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,97.2,97.2);


(lib.APU_apudoorbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C3C3C").s().p("AAKAeIgIgNIgDgJIgDgCIgFgBIgCAAIAAAZIgKAAIAAg7IAVAAQAGAAAEACQAEACABAEQADAEAAAFQAAAIgEAEQgDACgHABIAGAFIAGAKIAGAMgAgLgDIAHAAIAHAAIADgDIACgFIgCgFQAAAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBAAIgGAAIgIAAg");
	this.shape.setTransform(33,13.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C3C3C").s().p("AgQAYQgHgJAAgPQAAgJAEgHQADgHAFgEQAFgDAGAAQAKAAAHAJQAHAHAAAOQAAAPgHAJQgHAHgKAAQgJAAgHgHgAgIgPQgEAGAAAJQAAAKAEAGQAEAEAEAAQAFAAAEgEQAEgGAAgKQAAgJgEgGQgDgEgGAAQgFAAgDAEg");
	this.shape_1.setTransform(27.6,13.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C3C3C").s().p("AgQAYQgHgJAAgPQAAgJAEgHQADgHAFgEQAFgDAGAAQAKAAAHAJQAHAHAAAOQAAAPgHAJQgHAHgKAAQgJAAgHgHgAgIgPQgEAGAAAJQAAAKAEAGQAEAEAEAAQAFAAAEgEQAEgGAAgKQAAgJgEgGQgDgEgGAAQgFAAgDAEg");
	this.shape_2.setTransform(22.2,13.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3C3C3C").s().p("AgTAeIAAg7IASAAQAFAAAEACIAGAFQADADABAHQACAFAAAHQAAAIgCAGIgEAJQgCADgEACQgFACgDAAgAgJATIAHAAIAFAAQABAAAAgBQABAAAAAAQABgBAAAAQAAgBABAAIACgGIABgKIgBgJQgBgEgCgCQgCgDgDAAIgGAAIgEAAg");
	this.shape_3.setTransform(17,13.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3C3C3C").s().p("AjaBxQgKgBAAgJIAAjMQAAgKAKAAIG1AAQAKAAAAAKIAADMQAAAJgKABgAjaBnIG1AAIAAjMIm1AAg");
	this.shape_4.setTransform(24.8,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.GEN_pbbase01copy("synched",0);
	this.instance.setTransform(24.9,13.2,1,1,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,47.9,24.4);


(lib.GROUNDPWRBUSSWITCHINGPanelcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// guards
	this.instance = new lib.GEN_flipcoverblackacopy("synched",0);
	this.instance.setTransform(-256.7,-58.1,1.098,1.1,-90,0,0,-34.5,-3.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// buttons & switches
	this.instance_1 = new lib.GEN_switch02downcopy("synched",0);
	this.instance_1.setTransform(-265.4,-136.7,1.1,0.85,0,0,0,6.7,0);

	this.instance_2 = new lib.GEN_switchbase03copy("synched",0);
	this.instance_2.setTransform(-265.8,-134.1,1.1,1.098,0,0,0,18.5,18.6);

	this.instance_3 = new lib.GROUNDPWRBUSSWITCHING_groundpoweravailablecopy("synched",0);
	this.instance_3.setTransform(-265.6,-205,1.1,1.098,0,0,0,24.9,13.2);

	this.instance_4 = new lib.GEN_switch02downcopy("synched",0);
	this.instance_4.setTransform(-245.9,-58.2,1.098,1.1,-90,0,0,6.5,0);

	this.instance_5 = new lib.GEN_switchbase03copy("synched",0);
	this.instance_5.setTransform(-245.3,-58.2,1.098,1.1,-90,0,0,18.4,18.5);

	this.instance_6 = new lib.GEN_flipcoverbase01copy("synched",0);
	this.instance_6.setTransform(-259.7,-58.2,1.098,1.1,-90,0,0,15,43.3);

	this.instance_7 = new lib.GEN_switch01centercopy("synched",0);
	this.instance_7.setTransform(-163.1,56.9,1.1,1.098,0,0,0,6.5,0);

	this.instance_8 = new lib.GEN_switchbase01acopy("synched",0);
	this.instance_8.setTransform(-162.9,56.9,1.1,1.098,0,0,0,18.4,18.5);

	this.instance_9 = new lib.GEN_switch01centercopy("synched",0);
	this.instance_9.setTransform(-219.4,56.9,1.1,1.098,0,0,0,6.6,0);

	this.instance_10 = new lib.GEN_switchbase01acopy("synched",0);
	this.instance_10.setTransform(-219.1,56.9,1.1,1.098,0,0,0,18.6,18.5);

	this.instance_11 = new lib.GEN_switch01centercopy("synched",0);
	this.instance_11.setTransform(-312,56.9,1.1,1.098,0,0,0,6.7,0);

	this.instance_12 = new lib.GEN_switchbase01acopy("synched",0);
	this.instance_12.setTransform(-311.9,56.9,1.1,1.098,0,0,0,18.4,18.5);

	this.instance_13 = new lib.GEN_switch01centercopy("synched",0);
	this.instance_13.setTransform(-368.5,55.9,1.033,0.964,0,0,0,6.6,0);

	this.instance_14 = new lib.GEN_switchbase01acopy("synched",0);
	this.instance_14.setTransform(-368.2,56.9,1.1,1.098,0,0,0,18.6,18.5);

	this.instance_15 = new lib.GROUNDPWRBUSSWITCHING_gen2transferbusoffcopy("synched",0);
	this.instance_15.setTransform(-162.2,-59,1.1,1.098,0,0,0,24.8,13.1);

	this.instance_16 = new lib.GROUNDPWRBUSSWITCHING_gen2busoffcopy("synched",0);
	this.instance_16.setTransform(-162.3,-4.3,1.1,1.098,0,0,0,24.8,13.2);

	this.instance_17 = new lib.GROUNDPWRBUSSWITCHING_gen2sourceoffcopy("synched",0);
	this.instance_17.setTransform(-162.2,-31.6,1.1,1.098,0,0,0,24.8,13.2);

	this.instance_18 = new lib.GROUNDPWRBUSSWITCHING_apugenoffbuscopy("synched",0);
	this.instance_18.setTransform(-265.4,-4.3,1.1,1.098,0,0,0,24.9,13.2);

	this.instance_19 = new lib.GROUNDPWRBUSSWITCHING_gen1transferbusoffcopy("synched",0);
	this.instance_19.setTransform(-368.1,-59,1.1,1.098,0,0,0,24.9,13.1);

	this.instance_20 = new lib.GROUNDPWRBUSSWITCHING_gen1busoffcopy("synched",0);
	this.instance_20.setTransform(-368.2,-4.3,1.1,1.098,0,0,0,24.9,13.2);

	this.instance_21 = new lib.GROUNDPWRBUSSWITCHING_gen1sourceoffcopy("synched",0);
	this.instance_21.setTransform(-368.1,-31.6,1.1,1.098,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAA6QgRAAgKgMQgKgNAAgWIAAg/QABgEAGAAQADgBACABQABAAAAABQABAAAAABQAAAAAAABQABAAAAABIAAA6QAAARADAIQAHANAOgBQAOgCAFgKQADgIAAgRIAAg5QAAgBAAgBQAAAAAAgBQABAAAAgBQABAAAAAAIAFgBQAHAAAAAFIAAA+QAAAvglAAg");
	this.shape.setTransform(-256.9,98.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaA6QgHgCAAgFIAAhsIAgAAQAPAAAIAFQAMAHAAATQAAAIgDAGQgCAIgIAEQgHADgMAAIgUAAIAAAwQAAADgCACQgBACgDAAIgCAAgAgSgLIASAAQAKAAAFgFQAEgCAAgIQABgPgSgBIgUAAg");
	this.shape_1.setTransform(-265.6,98.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAaA0IgEgNIgrAAIgFANQgBAGgJgBIgFgCQgCgCABgEIAmhlQABgFAEAAQAGAAACAFIAiBnQAAAGgJAAIgBABQgFAAgCgGgAgQAZIAAgBIAiAAIgRg2IgRA2IAAAAg");
	this.shape_2.setTransform(-274.4,98.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaA2QgHgBAAgGIAAhkIAeAAQAOAAAIAFQAKAGAAASQAAAHgCAGQgEAMgSABIAcAoQACADgCADIgDADQgHAFgCgGIgegwIgKAAIAAAtQAAADgCACQAAABAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAIgBAAgAgTgKIASAAQAIAAAFgFQAEgCAAgIQAAgNgQgBIgTAAg");
	this.shape_3.setTransform(-255.5,-169.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATA1IgDgEIgQhGIgRBGQgBAFgHAAQgFAAgCgFIgchdQgCgGAGgBQAHgDADAFIAVBOIAThIQABgFAFAAQAGAAABAFIARBIIAXhOQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQADgBAEABQAIADgDAFIgeBdQgCAFgFAAIgCAAIgDgBg");
	this.shape_4.setTransform(-266.1,-169.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYA2QgHgBAAgGIAAhkIAfAAQAOAAAGAEQAMAHAAASQAAAHgDAGQgDAIgGADQgHACgMAAIgSAAIAAAtQAAADgBACQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgBAAgAgRgKIARAAQAJAAAFgFQAEgCAAgIQABgNgRgBIgTAAg");
	this.shape_5.setTransform(-276.3,-169.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AglA2IAAhrIAfAAQAVAAAMARQAMAPgBAVQAAAVgLAPQgMASgTAAgAgWAmIAQAAQAOAAAIgMQAHgLAAgPQAAgOgIgMQgJgMgMAAIgQAAg");
	this.shape_6.setTransform(-257,-181.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgaA2QgHgBAAgGIAAhkIAeAAQAOAAAIAFQAKAGAAASQAAAHgCAGQgEAMgSABIAcAoQACADgCADIgDADQgHAFgCgGIgegwIgKAAIAAAtQAAADgCACQAAABAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAIgBAAgAgTgKIASAAQAIAAAFgFQAEgCAAgIQAAgNgQgBIgTAAg");
	this.shape_7.setTransform(-265.6,-181.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgcAjQgJgNABgWQAAgTAHgOQAEgIALgHQAJgFAHAAQARAAAIAHQAGAFAAACIACADQACAGgGADQgFACgEgEQgHgLgLABQgNABgJAOQgDAKAAAOQAAARADAHQAKAPAMAAQAHAAAFgDQADgCAEgGIAAgSIgVAAQgCgBAAgCIAAgFIAAgDQAAgBAAAAQAAgBAAAAQABAAAAAAQABAAAAAAIAeAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQABABAAACIAAAcQAAADgDAFQgDAFgGADQgFAIgSAAQgTAAgLgTg");
	this.shape_8.setTransform(-274.4,-181.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgbAnIAAhLQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAAAIAEgBQAFgBABAEIAfA7IAAg6QACgEAEAAQAGAAgBAEIAABLQAAAEgEAAQgDABgDgDIghg7IAAA6QgBACgEABQgFAAgBgDg");
	this.shape_9.setTransform(-261.8,-111.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgWAaQgGgKAAgQQAAgQAGgKQAHgPAPAAQAQAAAHAPQAGAMAAAOQAAAOgFAMQgJAQgPAAQgPAAgHgQgAgNgTQgDAJAAAKQAAAKADAJQAFALAIAAQAJAAAFgLQADgHgBgMQABgLgDgHQgFgMgJAAQgJAAgEALg");
	this.shape_10.setTransform(-268.9,-111.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgbAmIAAhPIAxAAQAGABgBAFQABAGgGAAIglAAIAAASIAdAAQAFAAgBAFQAAAFgDABIgeAAIAAAmQABAEgHAAQgFgBgBgDg");
	this.shape_11.setTransform(-258.1,-156);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgbAmIAAhPIAxAAQAGABAAAFQAAAGgGAAIgkAAIAAASIAcAAQAFAAAAAFQgBAFgEABIgcAAIAAAmQAAAEgHAAQgGgBAAgDg");
	this.shape_12.setTransform(-265.1,-156);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgXAaQgFgKAAgQQAAgQAFgKQAJgPAOAAQAQAAAHAPQAGAMAAAOQAAAOgGAMQgHAQgQAAQgOAAgJgQgAgNgTQgDAJAAAKQAAAKADAJQAEALAJAAQAJAAAFgLQADgHAAgMQAAgLgDgHQgFgMgJAAQgJAAgEALg");
	this.shape_13.setTransform(-272.1,-156);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgaAnIAAhLQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAIACgBQAFgBACAEIAgA7IAAg6QAAgEAFAAQAFAAABAEIAABLQAAAEgGAAQgCABgDgDIggg7IAAA6QgBACgFABQgGAAABgDg");
	this.shape_14.setTransform(-187.9,71.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgXAaQgFgKAAgQQAAgQAFgKQAJgPAOAAQAQAAAHAPQAGAMAAAOQAAAOgGAMQgHAQgQAAQgOAAgJgQgAgNgTQgDAJAAAKQAAAKADAJQAEALAJAAQAJAAAFgLQADgHAAgMQAAgLgDgHQgFgMgJAAQgJAAgEALg");
	this.shape_15.setTransform(-195,71.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgaAmIAAhPIAwAAQAFABAAAFQAAAGgFAAIglAAIAAASIAdAAQAEAAAAAFQAAAFgDABIgeAAIAAAmQAAAEgGAAQgGgBABgDg");
	this.shape_16.setTransform(-183.7,41.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgbAmIAAhPIAxAAQAGABgBAFQABAGgGAAIglAAIAAASIAdAAQAFAAgBAFQAAAFgDABIgeAAIAAAmQABAEgHAAQgFgBgBgDg");
	this.shape_17.setTransform(-190.7,41.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgWAaQgGgKAAgQQAAgQAGgKQAHgPAPAAQARAAAGAPQAGAMAAAOQAAAOgGAMQgHAQgQAAQgPAAgHgQgAgNgTQgDAJAAAKQAAAKADAJQAFALAIAAQAJAAAFgLQADgHgBgMQABgLgDgHQgFgMgJAAQgIAAgFALg");
	this.shape_18.setTransform(-197.7,41.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgaAnIAAhLQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAIACgBQAGgBABAEIAgA7IAAg6QAAgEAFAAQAFAAABAEIAABLQAAAEgGAAQgCABgDgDIggg7IAAA6QgBACgFABQgGAAABgDg");
	this.shape_19.setTransform(-336.4,71.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgXAaQgFgKAAgQQAAgQAFgKQAJgPAOAAQAQAAAHAPQAGAMAAAOQAAAOgGAMQgHAQgQAAQgOAAgJgQgAgNgTQgDAJAAAKQAAAKADAJQAEALAJAAQAJAAAFgLQADgHAAgMQAAgLgDgHQgFgMgJAAQgJAAgEALg");
	this.shape_20.setTransform(-343.5,71.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgbAmIAAhPIAxAAQAGABgBAFQABAGgGAAIglAAIAAASIAdAAQAFAAgBAFQAAAFgDABIgeAAIAAAmQABAEgHAAQgFgBgBgDg");
	this.shape_21.setTransform(-332.4,41.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgbAmIAAhPIAxAAQAGABgBAFQABAGgGAAIgkAAIAAASIAcAAQAFAAgBAFQAAAFgEABIgcAAIAAAmQAAAEgHAAQgFgBgBgDg");
	this.shape_22.setTransform(-339.4,41.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgWAaQgGgKAAgQQAAgQAGgKQAHgPAPAAQAQAAAHAPQAGAMAAAOQAAAOgGAMQgHAQgQAAQgPAAgHgQgAgNgTQgDAJAAAKQAAAKADAJQAFALAIAAQAJAAAFgLQACgHAAgMQAAgLgCgHQgFgMgJAAQgIAAgFALg");
	this.shape_23.setTransform(-346.4,41.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgXA6QgIgCgBgHIAAgEQAAgOAHgNQAHgLARgMIAJgKQAHgIAAgEQAAgGgEgFQgEgEgJAAQgLAAgCALQAAADgDABIgFABQgHAAAAgFIAAgCQAAgKAKgIQAHgGAMAAQAPAAAIAHQAJAJAAANQAAAOgMAKIgXATQgMAKgBASIAtAAQAFAAAAAIIgBAEQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAg");
	this.shape_24.setTransform(-145,81.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AglA1IAAhnQAAgDACgCQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAGgBADAFIArBRIAAhQQACgFAGAAQAHAAABAFIAABmQAAAGgHAAQgEACgEgEIgthSIAABQQgBAEgHABQgHAAAAgFg");
	this.shape_25.setTransform(-158.4,81.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgkA5IAAhxIBDAAQAGAAAAAHQAAAJgGgBIgzAAIAAAZIAqAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQACADAAADQAAADgCADQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgpAAIAAApIAzAAQAGABAAAIQAAAIgGgBg");
	this.shape_26.setTransform(-168.2,81.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgeAmQgJgPAAgXQAAgUAIgQQAEgIAMgHQAKgGAIAAQARAAAJAHQAHAGAAACIABADQADAHgHADQgGACgEgEQgHgLgMABQgOABgJAPQgEAKAAAPQAAASAEAIQAKAQANAAQAIAAAFgDQAEgCADgHIAAgTIgWAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgGIAAgDQAAgBAAAAQAAAAAAgBQABAAAAAAQABAAABAAIAfAAQADAAACACQABABAAACIAAAeQAAADgEAGQgDAGgFADQgHAIgSAAQgVAAgMgUg");
	this.shape_27.setTransform(-178.1,81.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AABAzIAAhcIgMAAQgFAAAAgHQAAgHAGgCIATAAQAEAAABACQADACgBADIAABnQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAABIgFABQgIAAAAgHg");
	this.shape_28.setTransform(-352,81.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgkA1IAAhnQAAgDABgCQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAIgBABAFIAtBRIAAhQQABgFAFAAQAIAAAAAFIAABmQAAAGgGAAQgEACgEgEIgthSIAABQQgBAEgGABQgIAAABgFg");
	this.shape_29.setTransform(-363.6,81.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AglA5IAAhxIBDAAQAIAAAAAHQAAAJgIgBIgzAAIAAAZIAqAAQABAAABAAQAAAAABABQAAAAABAAQAAABABAAQABADAAADQAAADgBADQgBAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgqAAIAAApIAzAAQAIABAAAIQAAAIgIgBg");
	this.shape_30.setTransform(-373.3,81.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgeAmQgJgPAAgXQAAgUAIgQQAEgIAMgHQAKgGAIAAQARAAAJAHQAHAGAAACIABADQADAHgHADQgGACgEgEQgHgLgMABQgOABgJAPQgEAKAAAPQAAASAEAIQAKAQANAAQAIAAAFgDQAEgCADgHIAAgTIgWAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgGIAAgDQAAgBAAAAQAAAAAAgBQABAAAAAAQABAAABAAIAfAAQADAAACACQABABAAACIAAAeQAAADgEAGQgDAGgFADQgHAIgSAAQgVAAgMgUg");
	this.shape_31.setTransform(-383.3,81.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AglA1IAAhnQAAgDACgCQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAGgBADAFIAsBRIAAhQQABgFAGAAQAHAAABAFIAABmQAAAGgHAAQgEACgEgEIgthSIAABQQgBAEgGABQgIAAAAgFg");
	this.shape_32.setTransform(-240,81.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AglA5IAAhxIBEAAQAGAAABAHQgBAJgGgBIg0AAIAAAZIArAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQACADAAADQAAADgCADQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgqAAIAAApIA0AAQAGABABAIQgBAIgGgBg");
	this.shape_33.setTransform(-249.8,81.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgeAmQgJgPAAgXQAAgUAIgQQAEgIAMgHQAKgGAIAAQARAAAJAHQAHAGAAACIABADQADAHgHADQgGACgEgEQgHgLgMABQgOABgJAPQgEAKAAAPQAAASAEAIQAKAQANAAQAIAAAFgDQAEgCADgHIAAgTIgWAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgGIAAgDQAAgBAAAAQAAAAAAgBQABAAAAAAQABAAABAAIAfAAQADAAACACQABABAAACIAAAeQAAADgEAGQgDAGgFADQgHAIgSAAQgVAAgMgUg");
	this.shape_34.setTransform(-259.7,81.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAAA6QgRAAgKgMQgKgNAAgWIAAg/QABgEAGAAQADgBACABQABAAAAABQABAAAAABQAAAAAAABQABAAAAABIAAA6QAAARADAIQAHANAOgBQAOgCAFgKQADgIAAgRIAAg5QAAgBAAgBQAAAAAAgBQABAAAAgBQABAAAAAAIAFgBQAHAAAAAFIAAA+QAAAvglAAg");
	this.shape_35.setTransform(-273.2,81.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgaA6QgHgCAAgFIAAhsIAgAAQAPAAAIAFQAMAHAAATQAAAIgDAGQgCAIgIAEQgHADgMAAIgUAAIAAAwQAAADgCACQgBACgDAAIgCAAgAgSgLIASAAQAKAAAFgFQAEgCAAgIQABgPgSgBIgUAAg");
	this.shape_36.setTransform(-281.9,81.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAaA0IgEgNIgrAAIgFANQgBAGgJgBIgFgCQgCgCABgEIAmhlQABgFAEAAQAGAAACAFIAiBnQAAAGgJAAIgBABQgFAAgCgGgAgQAZIAAgBIAiAAIgRg2IgRA2IAAAAg");
	this.shape_37.setTransform(-290.7,81.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgbAmIAAhPIAxAAQAGABgBAFQABAGgGAAIglAAIAAASIAdAAQAFAAgBAFQAAAFgDABIgeAAIAAAmQABAEgHAAQgFgBgBgDg");
	this.shape_38.setTransform(-328.8,-48.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgbAmIAAhPIAxAAQAGABgBAFQABAGgGAAIglAAIAAASIAdAAQAFAAgBAFQAAAFgDABIgeAAIAAAmQABAEgHAAQgFgBgBgDg");
	this.shape_39.setTransform(-328.8,-58.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgXAaQgFgKAAgQQAAgQAFgKQAJgPAOAAQARAAAGAPQAGAMAAAOQAAAOgFAMQgJAQgPAAQgOAAgJgQgAgNgTQgDAJAAAKQAAAKADAJQAEALAJAAQAJAAAFgLQACgHABgMQgBgLgCgHQgFgMgJAAQgJAAgEALg");
	this.shape_40.setTransform(-329,-69.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgXAaQgFgKAAgQQAAgQAFgKQAJgPAOAAQAQAAAHAPQAGAMAAAOQAAAOgFAMQgJAQgPAAQgOAAgJgQgAgNgTQgDAJAAAKQAAAKADAJQAEALAJAAQAJAAAFgLQACgHAAgMQAAgLgCgHQgFgMgJAAQgJAAgEALg");
	this.shape_41.setTransform(-201.5,-42.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgEAmIAAhEIgTAAIgEgBIgBgFQAAgEAFgBIAvAAQAFABAAAEQAAAGgFAAIgTAAIAABEIgBADIgEABQgEAAAAgEg");
	this.shape_42.setTransform(-201.6,-52.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAAAqQgMAAgIgIQgHgKAAgQIAAgtQACgEADAAQABAAABAAQAAAAABAAQAAAAABAAQAAAAAAABIACADIAAAqQAAAMADAGQAFAJAJgBQALgBADgIQACgFABgMIAAgqIABgDIAEgBQAFAAAAAEIAAAtQAAAigbAAg");
	this.shape_43.setTransform(-201.5,-63.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AATAmIgDgJIgfAAIgDAJQgBAEgHAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAchKQABgDACAAQAEAAACADIAYBLQAAAFgGAAIgBAAQgDAAgCgEgAgLASIAAgBIAYAAIgMgnIgMAnIAAAAg");
	this.shape_44.setTransform(-201.3,-73.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgZA0QgHgBAAgFIAAhiIAdAAQAOAAAIAFQAKAGAAASQAAAHgCAFQgEAMgSABIAcAnQABADgBADIgDADQgHAEgCgFIgdgvIgKAAIAAAsQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAIgBgBgAgSgKIASAAQAHAAAFgFQAEgCAAgHQABgNgRgBIgSAAg");
	this.shape_45.setTransform(-220.9,-88.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AghA0IAAhoIA8AAQAHACAAAFQAAAJgHAAIgtAAIAAAVIAmAAQAAAAABABQAAAAABAAQAAAAABABQAAAAAAABQACACAAACQAAAEgCACQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAIgmAAIAAAlIAtAAQAHACAAAGQAAAIgHgBg");
	this.shape_46.setTransform(-229.2,-88.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AghAuIAAhiIA9AAQAGACAAAFQAAAIgGAAIguAAIAAAWIAkAAQAFABAAAGQAAAHgFABIgkAAIAAAuQAAAHgIgBQgHAAAAgGg");
	this.shape_47.setTransform(-237.9,-88.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgeAoQgCgDgCgJQgCgFAGgDQACgBADABQAAAAABAAQAAABABAAQAAABABAAQAAABAAABQABAGAGAFQACACAKACQAJABAFgDQAJgDAAgHQABgJgDgDQgEgGgOgHIgNgCIgKgDQgHgEgCgHQgCgHABgIQADgNAKgFQAGgFAJAAIANABQAHAAAGAIQAGAFABAFQABAEgBADQgBACgDABQgDABgCgBQgBAAAAAAQAAgBgBAAQAAgBgBAAQAAgBAAgBQgDgHgJgDQgJgDgFADQgJAEAAAHQAAALALADQAkALAGAPIABAJIgBAIQgCALgNAGQgHADgMABQgWAAgIgMg");
	this.shape_48.setTransform(-246.4,-88.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AghAwIAAhdQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAQAHgBACAFIAoBJIAAhIQABgFAFAAQAHAAAAAFIAABdQAAAFgGAAQgDACgEgEIgphKIAABIQgBAEgGABQgGAAAAgFg");
	this.shape_49.setTransform(-255.1,-88.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AggA0QgEAAgBgCQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAgBIAjhcQABgFADAAQAFAAADAFIAeBeQAAAFgIAAQgFABgCgGIgEgLIgnAAIgEALQgBAGgGAAIgCgBgAgOAXIAAgBIAfAAIgQgxIgPAxIAAAAg");
	this.shape_50.setTransform(-263.9,-88.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgZA0QgHgBAAgFIAAhiIAdAAQAOAAAIAFQAKAGAAASQAAAHgCAFQgEAMgSABIAcAnQABADgBADIgDADQgHAEgCgFIgdgvIgKAAIAAAsQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAIgBgBgAgSgKIASAAQAHAAAFgFQAEgCAAgHQABgNgRgBIgSAAg");
	this.shape_51.setTransform(-272.4,-88.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgFAuIAAhTIgYAAQgCAAgCgDQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgGAGgBIA6AAQAHABAAAGQAAAFgHACIgWAAIAABTQAAABgBABQAAABAAAAQAAABgBAAQAAAAAAABQgCABgDAAQgFAAAAgGg");
	this.shape_52.setTransform(-280.5,-88.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgeAoQgCgDgCgJQgCgFAGgDQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAABABAAQAAABAAABQABAGAGAFQACACAKACQAJABAFgDQAJgDAAgHQABgJgDgDQgEgGgOgHIgNgCIgKgDQgHgEgCgHQgCgHABgIQADgNAKgFQAGgFAJAAIANABQAHAAAGAIQAGAFABAFQABAEgBADQgBACgDABQgDABgCgBQgBAAAAAAQAAgBgBAAQAAgBgBAAQAAgBAAgBQgDgHgJgDQgJgDgFADQgJAEAAAHQAAALALADQAkALAGAPIABAJIgBAIQgCALgNAGQgHADgMABQgWAAgIgMg");
	this.shape_53.setTransform(-292.3,-88.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAAA1QgPAAgKgLQgJgMAAgUIAAg5QACgEAFAAQADgBACACQAAAAAAAAQABAAAAABQAAAAAAABQABAAAAABIAAA1QAAAQADAGQAGAMAMgBQAOgBAEgKQADgHAAgPIAAg0QAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABAAIAEgBQAHAAAAAEIAAA5QAAArgiAAg");
	this.shape_54.setTransform(-300.6,-88.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AghA0IAAhoIAdAAQAPAAAGAFQALAGAAARQABAVgMABQAGABAFAFQAGAJAAAKQAAAOgJAIQgIAHgQAAgAgSAmIASAAQAHAAAGgDQAGgEgBgHQAAgNgGgEQgFgDgGgCIgTAAgAgSgJIAIAAQAPAAAGgFQAFgDgBgHQAAgNgPAAIgSAAg");
	this.shape_55.setTransform(-309.2,-88.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#6C7B8A").s().p("AiXPwQgRAAAAgQIAAhuQAAgQARAAIEQAAQARAAAAAQIAABuQAAAQgRAAgAM2NJQgQAAAAgRIAAhtQAAgRAQAAIGNAAQARAAAAARIAABtQAAARgRAAgAk3NJQgRAAAAgRIAAhtQAAgRARAAIJQAAQAQAAAAARIAABtQAAARgQAAgAzCNJQgRAAAAgRIAAhtQAAgRARAAIFlAAQAQAAAAARIAABtQAAARgQAAgAKULTQgQAAAAgRIAAhTQAAgQAQAAIB8AAQAQAAAAAQIAABTQAAARgQAAgAsxLTQgRAAAAgRIAAhTQAAgQARAAIB6AAQARAAAAAQIAABTQAAARgRAAgAKAGmQgRAAAAgQIAAhUQAAgQARAAIC2AAQARAAAAAQIAABUQAAAQgRAAgAtOGmQgQAAAAgQIAAhUQAAgQAQAAIC3AAQAQAAAAAQIAABUQAAAQgQAAgAJSmbQgQAAAAgQIAAmYQAAgRAQAAIBDAAQARAAAAARIAAGYQAAAQgRAAgAqqnaQgRAAAAgQIAAkrQAAgQARAAIBCAAQARAAAAAQIAAErQAAAQgRAAgAnjtgQgRAAAAgRIAAhuQAAgQARAAIOuAAQAQAAAAAQIAABuQAAARgQAAg");
	this.shape_56.setTransform(-264.1,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance_22 = new lib.GROUNDPWRBUSSWITCHING_basecopy("synched",0);
	this.instance_22.setTransform(17.8,-29.4,1.1,1.098);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(1));

	// fill
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#657381").s().p("A4yalMAAAg1CIAAgHMAxlAAAIAAAHMAAAA1Cg");
	this.shape_57.setTransform(-263.4,-60.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_57).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-422.2,-230.5,317.5,340.8);


(lib.GROUNDPWRBUSSWITCHINGPanel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// guards
	this.instance = new lib.GEN_flipcoverblacka("synched",0);
	this.instance.setTransform(-256.7,-58.1,1.098,1.1,-90,0,0,-34.5,-3.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// buttons & switches
	this.instance_1 = new lib.GEN_switch02down("synched",0);
	this.instance_1.setTransform(-265.7,-133.4,1.1,1.098,0,0,0,6.7,0);

	this.instance_2 = new lib.GEN_switchbase03("synched",0);
	this.instance_2.setTransform(-265.8,-132.7,1.1,1.098,0,0,0,18.5,18.6);

	this.instance_3 = new lib.GROUNDPWRBUSSWITCHING_groundpoweravailable("synched",0);
	this.instance_3.setTransform(-265.6,-205,1.1,1.098,0,0,0,24.9,13.2);

	this.instance_4 = new lib.GEN_switch02down("synched",0);
	this.instance_4.setTransform(-245.9,-58.2,1.098,1.1,-90,0,0,6.5,0);

	this.instance_5 = new lib.GEN_switchbase03("synched",0);
	this.instance_5.setTransform(-245.3,-58.2,1.098,1.1,-90,0,0,18.4,18.5);

	this.instance_6 = new lib.GEN_flipcoverbase01("synched",0);
	this.instance_6.setTransform(-259.7,-58.2,1.098,1.1,-90,0,0,15,43.3);

	this.instance_7 = new lib.GEN_switch01center("synched",0);
	this.instance_7.setTransform(-163.1,56,1.1,1.098,0,0,0,6.5,0);

	this.instance_8 = new lib.GEN_switchbase01a("synched",0);
	this.instance_8.setTransform(-162.9,56.9,1.1,1.098,0,0,0,18.4,18.5);

	this.instance_9 = new lib.GEN_switch01center("synched",0);
	this.instance_9.setTransform(-219.4,56,1.1,1.098,0,0,0,6.6,0);

	this.instance_10 = new lib.GEN_switchbase01a("synched",0);
	this.instance_10.setTransform(-219.1,56.9,1.1,1.098,0,0,0,18.6,18.5);

	this.instance_11 = new lib.GEN_switch01center("synched",0);
	this.instance_11.setTransform(-312,56,1.1,1.098,0,0,0,6.7,0);

	this.instance_12 = new lib.GEN_switchbase01a("synched",0);
	this.instance_12.setTransform(-311.9,56.9,1.1,1.098,0,0,0,18.4,18.5);

	this.instance_13 = new lib.GEN_switch01center("synched",0);
	this.instance_13.setTransform(-368.3,56,1.1,1.098,0,0,0,6.7,0);

	this.instance_14 = new lib.GEN_switchbase01a("synched",0);
	this.instance_14.setTransform(-368.2,56.9,1.1,1.098,0,0,0,18.6,18.5);

	this.instance_15 = new lib.GROUNDPWRBUSSWITCHING_gen2transferbusoff("synched",0);
	this.instance_15.setTransform(-162.2,-59,1.1,1.098,0,0,0,24.8,13.1);

	this.instance_16 = new lib.GROUNDPWRBUSSWITCHING_gen2busoff("synched",0);
	this.instance_16.setTransform(-162.3,-4.3,1.1,1.098,0,0,0,24.8,13.2);

	this.instance_17 = new lib.GROUNDPWRBUSSWITCHING_gen2sourceoff("synched",0);
	this.instance_17.setTransform(-162.2,-31.6,1.1,1.098,0,0,0,24.8,13.2);

	this.instance_18 = new lib.GROUNDPWRBUSSWITCHING_apugenoffbus("synched",0);
	this.instance_18.setTransform(-265.4,-4.3,1.1,1.098,0,0,0,24.9,13.2);

	this.instance_19 = new lib.GROUNDPWRBUSSWITCHING_gen1transferbusoff("synched",0);
	this.instance_19.setTransform(-368.1,-59,1.1,1.098,0,0,0,24.9,13.1);

	this.instance_20 = new lib.GROUNDPWRBUSSWITCHING_gen1busoff("synched",0);
	this.instance_20.setTransform(-368.2,-4.3,1.1,1.098,0,0,0,24.9,13.2);

	this.instance_21 = new lib.GROUNDPWRBUSSWITCHING_gen1sourceoff("synched",0);
	this.instance_21.setTransform(-368.1,-31.6,1.1,1.098,0,0,0,24.9,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAA6QgRAAgKgMQgKgNAAgWIAAg/QABgEAGAAQADgBACABQABAAAAABQABAAAAABQAAAAAAABQABAAAAABIAAA6QAAARADAIQAHANAOgBQAOgCAFgKQADgIAAgRIAAg5QAAgBAAgBQAAAAAAgBQABAAAAgBQABAAAAAAIAFgBQAHAAAAAFIAAA+QAAAvglAAg");
	this.shape.setTransform(-256.9,98.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaA6QgHgCAAgFIAAhsIAgAAQAPAAAIAFQAMAHAAATQAAAIgDAGQgCAIgIAEQgHADgMAAIgUAAIAAAwQAAADgCACQgBACgDAAIgCAAgAgSgLIASAAQAKAAAFgFQAEgCAAgIQABgPgSgBIgUAAg");
	this.shape_1.setTransform(-265.6,98.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAaA0IgEgNIgrAAIgFANQgBAGgJgBIgFgCQgCgCABgEIAmhlQABgFAEAAQAGAAACAFIAiBnQAAAGgJAAIgBABQgFAAgCgGgAgQAZIAAgBIAiAAIgRg2IgRA2IAAAAg");
	this.shape_2.setTransform(-274.4,98.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaA2QgHgBAAgGIAAhkIAeAAQAOAAAIAFQAKAGAAASQAAAHgCAGQgEAMgSABIAcAoQACADgCADIgDADQgHAFgCgGIgegwIgKAAIAAAtQAAADgCACQAAABAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAIgBAAgAgTgKIASAAQAIAAAFgFQAEgCAAgIQAAgNgQgBIgTAAg");
	this.shape_3.setTransform(-255.5,-169.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATA1IgDgEIgQhGIgRBGQgBAFgHAAQgFAAgCgFIgchdQgCgGAGgBQAHgDADAFIAVBOIAThIQABgFAFAAQAGAAABAFIARBIIAXhOQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQADgBAEABQAIADgDAFIgeBdQgCAFgFAAIgCAAIgDgBg");
	this.shape_4.setTransform(-266.1,-169.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYA2QgHgBAAgGIAAhkIAfAAQAOAAAGAEQAMAHAAASQAAAHgDAGQgDAIgGADQgHACgMAAIgSAAIAAAtQAAADgBACQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgBAAgAgRgKIARAAQAJAAAFgFQAEgCAAgIQABgNgRgBIgTAAg");
	this.shape_5.setTransform(-276.3,-169.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AglA2IAAhrIAfAAQAVAAAMARQAMAPgBAVQAAAVgLAPQgMASgTAAgAgWAmIAQAAQAOAAAIgMQAHgLAAgPQAAgOgIgMQgJgMgMAAIgQAAg");
	this.shape_6.setTransform(-257,-181.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgaA2QgHgBAAgGIAAhkIAeAAQAOAAAIAFQAKAGAAASQAAAHgCAGQgEAMgSABIAcAoQACADgCADIgDADQgHAFgCgGIgegwIgKAAIAAAtQAAADgCACQAAABAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAIgBAAgAgTgKIASAAQAIAAAFgFQAEgCAAgIQAAgNgQgBIgTAAg");
	this.shape_7.setTransform(-265.6,-181.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgcAjQgJgNABgWQAAgTAHgOQAEgIALgHQAJgFAHAAQARAAAIAHQAGAFAAACIACADQACAGgGADQgFACgEgEQgHgLgLABQgNABgJAOQgDAKAAAOQAAARADAHQAKAPAMAAQAHAAAFgDQADgCAEgGIAAgSIgVAAQgCgBAAgCIAAgFIAAgDQAAgBAAAAQAAgBAAAAQABAAAAAAQABAAAAAAIAeAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQABABAAACIAAAcQAAADgDAFQgDAFgGADQgFAIgSAAQgTAAgLgTg");
	this.shape_8.setTransform(-274.4,-181.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgbAnIAAhLQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAAAIAEgBQAFgBABAEIAfA7IAAg6QACgEAEAAQAGAAgBAEIAABLQAAAEgEAAQgDABgDgDIghg7IAAA6QgBACgEABQgFAAgBgDg");
	this.shape_9.setTransform(-261.8,-111.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgWAaQgGgKAAgQQAAgQAGgKQAHgPAPAAQAQAAAHAPQAGAMAAAOQAAAOgFAMQgJAQgPAAQgPAAgHgQgAgNgTQgDAJAAAKQAAAKADAJQAFALAIAAQAJAAAFgLQADgHgBgMQABgLgDgHQgFgMgJAAQgJAAgEALg");
	this.shape_10.setTransform(-268.9,-111.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgbAmIAAhPIAxAAQAGABgBAFQABAGgGAAIglAAIAAASIAdAAQAFAAgBAFQAAAFgDABIgeAAIAAAmQABAEgHAAQgFgBgBgDg");
	this.shape_11.setTransform(-258.1,-153.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgbAmIAAhPIAxAAQAGABAAAFQAAAGgGAAIgkAAIAAASIAcAAQAFAAAAAFQgBAFgEABIgcAAIAAAmQAAAEgHAAQgGgBAAgDg");
	this.shape_12.setTransform(-265.1,-153.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgXAaQgFgKAAgQQAAgQAFgKQAJgPAOAAQAQAAAHAPQAGAMAAAOQAAAOgGAMQgHAQgQAAQgOAAgJgQgAgNgTQgDAJAAAKQAAAKADAJQAEALAJAAQAJAAAFgLQADgHAAgMQAAgLgDgHQgFgMgJAAQgJAAgEALg");
	this.shape_13.setTransform(-272.1,-153.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgbAnIAAhLQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAIADgBQAEgBACAEIAfA7IAAg6QABgEAFAAQAGAAAAAEIAABLQgBAEgFAAQgCABgDgDIggg7IAAA6QgCACgEABQgGAAAAgDg");
	this.shape_14.setTransform(-187.7,71.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgWAaQgGgKAAgQQAAgQAGgKQAHgPAPAAQAQAAAHAPQAGAMAAAOQAAAOgGAMQgHAQgQAAQgPAAgHgQgAgNgTQgDAJAAAKQAAAKADAJQAFALAIAAQAJAAAFgLQACgHAAgMQAAgLgCgHQgFgMgJAAQgIAAgFALg");
	this.shape_15.setTransform(-194.8,71.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgaAmIAAhPIAwAAQAFABAAAFQAAAGgFAAIglAAIAAASIAdAAQAEAAAAAFQAAAFgDABIgeAAIAAAmQAAAEgGAAQgGgBABgDg");
	this.shape_16.setTransform(-183.7,41.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgbAmIAAhPIAxAAQAGABgBAFQABAGgGAAIglAAIAAASIAdAAQAFAAgBAFQAAAFgDABIgeAAIAAAmQABAEgHAAQgFgBgBgDg");
	this.shape_17.setTransform(-190.7,41.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgWAaQgGgKAAgQQAAgQAGgKQAHgPAPAAQARAAAGAPQAGAMAAAOQAAAOgGAMQgHAQgQAAQgPAAgHgQgAgNgTQgDAJAAAKQAAAKADAJQAFALAIAAQAJAAAFgLQADgHgBgMQABgLgDgHQgFgMgJAAQgIAAgFALg");
	this.shape_18.setTransform(-197.7,41.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgaAnIAAhLQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAIACgBQAGgBABAEIAgA7IAAg6QAAgEAFAAQAFAAABAEIAABLQAAAEgGAAQgCABgDgDIggg7IAAA6QgBACgFABQgGAAABgDg");
	this.shape_19.setTransform(-336.4,71.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgXAaQgFgKAAgQQAAgQAFgKQAJgPAOAAQAQAAAHAPQAGAMAAAOQAAAOgGAMQgHAQgQAAQgOAAgJgQgAgNgTQgDAJAAAKQAAAKADAJQAEALAJAAQAJAAAFgLQADgHAAgMQAAgLgDgHQgFgMgJAAQgJAAgEALg");
	this.shape_20.setTransform(-343.5,71.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgbAmIAAhPIAxAAQAGABgBAFQABAGgGAAIglAAIAAASIAdAAQAFAAgBAFQAAAFgDABIgeAAIAAAmQABAEgHAAQgFgBgBgDg");
	this.shape_21.setTransform(-332.4,41.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgbAmIAAhPIAxAAQAGABgBAFQABAGgGAAIgkAAIAAASIAcAAQAFAAgBAFQAAAFgEABIgcAAIAAAmQAAAEgHAAQgFgBgBgDg");
	this.shape_22.setTransform(-339.4,41.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgWAaQgGgKAAgQQAAgQAGgKQAHgPAPAAQAQAAAHAPQAGAMAAAOQAAAOgGAMQgHAQgQAAQgPAAgHgQgAgNgTQgDAJAAAKQAAAKADAJQAFALAIAAQAJAAAFgLQACgHAAgMQAAgLgCgHQgFgMgJAAQgIAAgFALg");
	this.shape_23.setTransform(-346.4,41.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgXA6QgIgCgBgHIAAgEQAAgOAHgNQAHgLARgMIAJgKQAHgIAAgEQAAgGgEgFQgEgEgJAAQgLAAgCALQAAADgDABIgFABQgHAAAAgFIAAgCQAAgKAKgIQAHgGAMAAQAPAAAIAHQAJAJAAANQAAAOgMAKIgXATQgMAKgBASIAtAAQAFAAAAAIIgBAEQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAg");
	this.shape_24.setTransform(-145,81.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AglA1IAAhnQAAgDACgCQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAGgBADAFIArBRIAAhQQACgFAGAAQAHAAABAFIAABmQAAAGgHAAQgEACgEgEIgthSIAABQQgBAEgHABQgHAAAAgFg");
	this.shape_25.setTransform(-158.4,81.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgkA5IAAhxIBDAAQAGAAAAAHQAAAJgGgBIgzAAIAAAZIAqAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQACADAAADQAAADgCADQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgpAAIAAApIAzAAQAGABAAAIQAAAIgGgBg");
	this.shape_26.setTransform(-168.2,81.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgeAmQgJgPAAgXQAAgUAIgQQAEgIAMgHQAKgGAIAAQARAAAJAHQAHAGAAACIABADQADAHgHADQgGACgEgEQgHgLgMABQgOABgJAPQgEAKAAAPQAAASAEAIQAKAQANAAQAIAAAFgDQAEgCADgHIAAgTIgWAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgGIAAgDQAAgBAAAAQAAAAAAgBQABAAAAAAQABAAABAAIAfAAQADAAACACQABABAAACIAAAeQAAADgEAGQgDAGgFADQgHAIgSAAQgVAAgMgUg");
	this.shape_27.setTransform(-178.1,81.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AABAzIAAhcIgMAAQgFAAAAgHQAAgHAGgCIATAAQAEAAABACQADACgBADIAABnQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAABIgFABQgIAAAAgHg");
	this.shape_28.setTransform(-352,81.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgkA1IAAhnQAAgDABgCQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAIgBABAFIAtBRIAAhQQABgFAFAAQAIAAAAAFIAABmQAAAGgGAAQgEACgEgEIgthSIAABQQgBAEgGABQgIAAABgFg");
	this.shape_29.setTransform(-363.6,81.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AglA5IAAhxIBDAAQAIAAAAAHQAAAJgIgBIgzAAIAAAZIAqAAQABAAABAAQAAAAABABQAAAAABAAQAAABABAAQABADAAADQAAADgBADQgBAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgqAAIAAApIAzAAQAIABAAAIQAAAIgIgBg");
	this.shape_30.setTransform(-373.3,81.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgeAmQgJgPAAgXQAAgUAIgQQAEgIAMgHQAKgGAIAAQARAAAJAHQAHAGAAACIABADQADAHgHADQgGACgEgEQgHgLgMABQgOABgJAPQgEAKAAAPQAAASAEAIQAKAQANAAQAIAAAFgDQAEgCADgHIAAgTIgWAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgGIAAgDQAAgBAAAAQAAAAAAgBQABAAAAAAQABAAABAAIAfAAQADAAACACQABABAAACIAAAeQAAADgEAGQgDAGgFADQgHAIgSAAQgVAAgMgUg");
	this.shape_31.setTransform(-383.3,81.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AglA1IAAhnQAAgDACgCQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAGgBADAFIAsBRIAAhQQABgFAGAAQAHAAABAFIAABmQAAAGgHAAQgEACgEgEIgthSIAABQQgBAEgGABQgIAAAAgFg");
	this.shape_32.setTransform(-240,81.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AglA5IAAhxIBEAAQAGAAABAHQgBAJgGgBIg0AAIAAAZIArAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQACADAAADQAAADgCADQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgqAAIAAApIA0AAQAGABABAIQgBAIgGgBg");
	this.shape_33.setTransform(-249.8,81.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgeAmQgJgPAAgXQAAgUAIgQQAEgIAMgHQAKgGAIAAQARAAAJAHQAHAGAAACIABADQADAHgHADQgGACgEgEQgHgLgMABQgOABgJAPQgEAKAAAPQAAASAEAIQAKAQANAAQAIAAAFgDQAEgCADgHIAAgTIgWAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgGIAAgDQAAgBAAAAQAAAAAAgBQABAAAAAAQABAAABAAIAfAAQADAAACACQABABAAACIAAAeQAAADgEAGQgDAGgFADQgHAIgSAAQgVAAgMgUg");
	this.shape_34.setTransform(-259.7,81.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAAA6QgRAAgKgMQgKgNAAgWIAAg/QABgEAGAAQADgBACABQABAAAAABQABAAAAABQAAAAAAABQABAAAAABIAAA6QAAARADAIQAHANAOgBQAOgCAFgKQADgIAAgRIAAg5QAAgBAAgBQAAAAAAgBQABAAAAgBQABAAAAAAIAFgBQAHAAAAAFIAAA+QAAAvglAAg");
	this.shape_35.setTransform(-273.2,81.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgaA6QgHgCAAgFIAAhsIAgAAQAPAAAIAFQAMAHAAATQAAAIgDAGQgCAIgIAEQgHADgMAAIgUAAIAAAwQAAADgCACQgBACgDAAIgCAAgAgSgLIASAAQAKAAAFgFQAEgCAAgIQABgPgSgBIgUAAg");
	this.shape_36.setTransform(-281.9,81.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAaA0IgEgNIgrAAIgFANQgBAGgJgBIgFgCQgCgCABgEIAmhlQABgFAEAAQAGAAACAFIAiBnQAAAGgJAAIgBABQgFAAgCgGgAgQAZIAAgBIAiAAIgRg2IgRA2IAAAAg");
	this.shape_37.setTransform(-290.7,81.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgbAmIAAhPIAxAAQAGABgBAFQABAGgGAAIglAAIAAASIAdAAQAFAAgBAFQAAAFgDABIgeAAIAAAmQABAEgHAAQgFgBgBgDg");
	this.shape_38.setTransform(-328.8,-48.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgbAmIAAhPIAxAAQAGABgBAFQABAGgGAAIglAAIAAASIAdAAQAFAAgBAFQAAAFgDABIgeAAIAAAmQABAEgHAAQgFgBgBgDg");
	this.shape_39.setTransform(-328.8,-58.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgXAaQgFgKAAgQQAAgQAFgKQAJgPAOAAQARAAAGAPQAGAMAAAOQAAAOgFAMQgJAQgPAAQgOAAgJgQgAgNgTQgDAJAAAKQAAAKADAJQAEALAJAAQAJAAAFgLQACgHABgMQgBgLgCgHQgFgMgJAAQgJAAgEALg");
	this.shape_40.setTransform(-329,-69.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgXAaQgFgKAAgQQAAgQAFgKQAJgPAOAAQAQAAAHAPQAGAMAAAOQAAAOgFAMQgJAQgPAAQgOAAgJgQgAgNgTQgDAJAAAKQAAAKADAJQAEALAJAAQAJAAAFgLQACgHAAgMQAAgLgCgHQgFgMgJAAQgJAAgEALg");
	this.shape_41.setTransform(-201.5,-42.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgEAmIAAhEIgTAAIgEgBIgBgFQAAgEAFgBIAvAAQAFABAAAEQAAAGgFAAIgTAAIAABEIgBADIgEABQgEAAAAgEg");
	this.shape_42.setTransform(-201.6,-52.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAAAqQgMAAgIgIQgHgKAAgQIAAgtQACgEADAAQABAAABAAQAAAAABAAQAAAAABAAQAAAAAAABIACADIAAAqQAAAMADAGQAFAJAJgBQALgBADgIQACgFABgMIAAgqIABgDIAEgBQAFAAAAAEIAAAtQAAAigbAAg");
	this.shape_43.setTransform(-201.5,-63.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AATAmIgDgJIgfAAIgDAJQgBAEgHAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAchKQABgDACAAQAEAAACADIAYBLQAAAFgGAAIgBAAQgDAAgCgEgAgLASIAAgBIAYAAIgMgnIgMAnIAAAAg");
	this.shape_44.setTransform(-201.3,-73.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AghAsQgCgEgDgJQgBgGAGgDQACgBADABQACABACADQABAIAGAFQACABAMADQAJABAGgDQAKgDABgIQABgKgFgEQgDgGgQgHIgPgDIgKgEQgIgEgCgHQgCgIABgJQADgOALgHQAHgEAJAAQAHAAAIACQAHAAAHAIQAGAGACAFQABADgBAEQgBADgEABQgDABgCgBQgDgBgBgDQgDgJgJgDQgKgDgGADQgKAFAAAIQAAAMAMACQAoANAGARIACAJIgCAJQgCAMgOAHQgIAEgNABQgYgBgJgNg");
	this.shape_45.setTransform(-230.5,-88.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgkA1IAAhnQAAgDACgCQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAIgBABAFIAsBRIAAhQQACgFAFAAQAJAAgBAFIAABmQAAAGgGAAQgEACgEgEIgthSIAABQQgBAEgHABQgGAAAAgFg");
	this.shape_46.setTransform(-240,-88.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAaA0IgEgNIgrAAIgFANQgBAGgJgBIgFgCQgCgCABgEIAmhlQABgFAEAAQAGAAACAFIAiBnQAAAGgJAAIgBABQgFAAgCgGgAgQAZIAAgBIAiAAIgRg2IgRA2IAAAAg");
	this.shape_47.setTransform(-249.7,-88.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgcA5QgIgBAAgGIAAhrIAgAAQAPAAAJAFQALAHAAATQAAAIgCAFQgFAOgTABIAeArQACADgBAEIgEADQgHAEgDgFIggg0IgKAAIAAAwQAAADgCACQgCADgDAAIgBgBgAgUgLIATAAQAIAAAFgFQAFgDAAgIQABgOgSgBIgUAAg");
	this.shape_48.setTransform(-259,-88.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgGAzIAAhcIgZAAQgEAAgCgDQgBgCAAgDQAAgGAGgBIBAAAQAHABAAAGQAAAGgHACIgZAAIAABcQAAAEgCABQgCACgDAAQgGAAAAgHg");
	this.shape_49.setTransform(-268,-88.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AghAsQgCgEgDgJQgBgGAGgDQACgBADABQACABACADQABAIAGAFQACABAMADQAJABAGgDQAKgDABgIQABgKgFgEQgDgGgQgHIgPgDIgKgEQgIgEgCgHQgCgIABgJQADgOALgHQAHgEAJAAQAHAAAIACQAHAAAHAIQAGAGACAFQABADgBAEQgBADgEABQgDABgCgBQgDgBgBgDQgDgJgJgDQgKgDgGADQgKAFAAAIQAAAMAMACQAoANAGARIACAJIgCAJQgCAMgOAHQgIAEgNABQgYgBgJgNg");
	this.shape_50.setTransform(-281,-88.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAAA6QgRAAgKgMQgKgNAAgWIAAg/QABgEAGAAQADgBACABQABAAAAABQABAAAAABQAAAAAAABQABAAAAABIAAA6QAAARADAIQAHANAOgBQAOgCAFgKQADgIAAgRIAAg5QAAgBAAgBQAAAAAAgBQABAAAAgBQABAAAAAAIAFgBQAHAAAAAFIAAA+QAAAvglAAg");
	this.shape_51.setTransform(-290,-88.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgkA6IAAhyIAgAAQAQAAAHADQAMAIAAATQAAAVgMACQAHABAFAHQAGAJAAALQAAAQgJAIQgJAJgSAAgAgUAqIAUAAQAJAAAGgEQAGgEAAgJQAAgNgIgEQgFgEgGgCIgWAAgAgUgKIAJAAQARAAAHgFQAFgDgBgJQAAgPgRAAIgUAAg");
	this.shape_52.setTransform(-299.5,-88.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#6C7B8A").s().p("AiaPwQgQAAAAgQIAAhuQAAgQAQAAIERAAQAQAAAAAQIAABuQAAAQgQAAgAMvNJQgQAAAAgRIAAhnQgEACgGAAIh7AAQgQAAAAgRIAAhTQAAgQAQAAIB7AAQAQAAAAAQIAABNQAEgCAGAAIGWAAQARAAAAARIAABtQAAARgRAAgAk5NJQgRAAAAgRIAAhtQAAgRARAAIJPAAQARAAAAARIAABtQAAARgRAAgAzENJQgRAAAAgRIAAhtQAAgRARAAIFkAAQARAAAAARIAABtQAAARgRAAgAs0LTQgQAAAAgRIAAhTQAAgQAQAAIB7AAQARAAAAAQIAABTQAAARgRAAgAJ9GmQgQAAAAgQIAAhUQAAgQAQAAIC3AAQARAAAAAQIAABUQAAAQgRAAgAtQGmQgRAAAAgQIAAhUQAAgQARAAIC2AAQARAAAAAQIAABUQAAAQgRAAgAJQmbQgRAAAAgQIAAmYQAAgRARAAIBDAAQAQAAAAARIAAGYQAAAQgQAAgAqtnaQgQAAAAgQIAAkrQAAgQAQAAIBDAAQARAAAAAQIAAErQAAAQgRAAgAmJtgQgQAAAAgRIAAhuQAAgQAQAAIL3AAQARAAAAAQIAABuQAAARgRAAg");
	this.shape_53.setTransform(-263.9,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance_22 = new lib.GROUNDPWRBUSSWITCHING_base("synched",0);
	this.instance_22.setTransform(17.8,-29.4,1.1,1.098);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(1));

	// fill
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#657381").s().p("A4yalMAAAg1CIAAgHMAxlAAAIAAAHMAAAA1Cg");
	this.shape_54.setTransform(-263.4,-60.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_54).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-422.2,-230.5,317.5,340.8);


(lib.APUPanelcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// buttons & switches
	this.instance = new lib.APU_apuoverspeedcopy("synched",0);
	this.instance.setTransform(-169.8,94.5,1.099,1.09,0,0,0,24.9,13.1);

	this.instance_1 = new lib.APU_apufaultcopy("synched",0);
	this.instance_1.setTransform(-228.4,94.5,1.099,1.09,0,0,0,24.9,13.1);

	this.instance_2 = new lib.APU_apulowoilpressurecopy("synched",0);
	this.instance_2.setTransform(-286.7,94.5,1.099,1.09,0,0,0,24.9,13.1);

	this.instance_3 = new lib.APU_apudoorbutton("synched",0);
	this.instance_3.setTransform(-345.3,94.5,1.099,1.09,0,0,0,24.9,13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAA5QgRAAgKgLQgKgNAAgXIAAg9QABgFAGAAQADgBACACQABAAAAAAQABABAAAAQAAABAAAAQABABAAABIAAA5QAAARADAIQAHANAOgBQAOgCAFgLQADgHAAgRIAAg5QAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAIAFgBQAHAAAAAFIAAA9QAAAvglAAg");
	this.shape.setTransform(-249.2,68.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaA5QgHgBAAgGIAAhqIAgAAQAPAAAIAEQAMAHAAATQAAAIgDAGQgCAIgIAEQgHACgMAAIgUAAIAAAwQAAADgCACQgBACgDAAIgCAAgAgSgLIASAAQAKAAAFgFQAEgCAAgIQABgPgSgBIgUAAg");
	this.shape_1.setTransform(-257.9,68.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAaA0IgEgMIgrAAIgFAMQgBAGgJgBIgFgCQgCgCABgEIAmhkQABgFAEAAQAGAAACAFIAiBmQAAAGgJAAIgBAAQgFAAgCgFgAgQAZIAAgBIAiAAIgRg1IgRA1IAAAAg");
	this.shape_2.setTransform(-266.7,68.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6C7B8A").s().p("AiIBGQgQAAAAgQIAAhsQAAgQAQAAIERAAQAQAAAAAQIAABsQAAAQgQAAg");
	this.shape_3.setTransform(-257.9,68.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance_4 = new lib.APU_basecopy("synched",0);
	this.instance_4.setTransform(25.3,-59,1.099,1.09);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// fill
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#9AA0A4","#F3F4F5"],[0,1],4.7,3.1,-2.4,-10.6).s().p("AgQAqQgrgIgYgiQgPgUgEgWIAFAAQADAVAPATQAXAfApAIQAlAGAigYQAigWAHgnIAFAAQgHApgkAXQgbAVggAAIgQgBg");
	this.shape_4.setTransform(-397.3,63.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#DFE2E4","#BFC6C9"],[0,1],-5.3,-13.9,5.4,2.5).s().p("AgPAnQgpgHgXggQgOgTgEgUIAXAAQADAOAJAOQAKALAMAHQANAIAQACQAdAFAagSQAOgHAHgMQAHgLADgNIAXAAQgHAmgjAWQgaATgeAAIgPgBg");
	this.shape_5.setTransform(-397.3,62.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#F3F4F5","#ACB5B9"],[0,1],-3,-8.4,0,-3,-8.4,11).s().p("AgMAdQgPgCgNgIQgMgIgKgLQgJgNgDgPIA/AAIAAAEIgGAXQgBADAEABIAJACQAEAAABgDIAFgVQADgGAFgDIAQAAIARAFQADAAACgEIABgBIAXAAQgDANgHALQgIALgOAIQgTAPgYAAIgMgBgAAdgcgAAVgdIABAAIAHABg");
	this.shape_6.setTransform(-397.3,61.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#F3F4F5","#ACB5B9"],[0,1],0.4,-1.9,0,0.4,-1.9,7.7).s().p("AgVARIgJgCQgFgBABgFIAGgVIABgEIAEAAIgBAFIgGAVQgBAAAAAAQAAABAAAAQAAAAABAAQAAAAABAAIAIADIABgBIAHgVIAAAAQACgFACgDIAHAAQgFADgDAGIgGAVQgBADgDAAIgBAAgAAdgLIgRgFIAOAAIAEABIABAAIAAgBIAEAAIAAABQgCAEgDAAIgBAAg");
	this.shape_7.setTransform(-395.7,60.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#79888E").s().p("AVhAWIgBgBIAHgVQABgQgOgGIgEgBIAwAAIAEADIAAAAIAXAFIABABIgCAIIAAABIgCABIgXgGIgBAAQgQgBgFALIAAAAIgGAYIgBAAgA2gAEQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIAGgVIABgFIAOAAQgCADgCAEIAAABIgHAVIgBABg");
	this.shape_8.setTransform(-254.6,61.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#F3F4F5","#ACB5B9"],[0,1],1.3,-1,0,1.3,-1,7.7).s().p("AgNAaIgJgDQgEgBABgEIAGgVQABgMgLgFIAAAAIgQgFIANAAIAEABQAOAGgBAQIgHAVIABABIAJACIABAAIAGgWIAAAAQAFgNAOABIABAAIAXAGIACAAIAAgBIACgJIgBAAIgXgGIAAAAIgEgDIALAAIARAFQAEABAAAEIgDAJQgCAEgEAAIgXgGQgNgBgCAJIgGAWQgBAEgEAAIgBAAg");
	this.shape_9.setTransform(-114.6,61.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#657381").s().p("A4xNwIAA7fIAPAAIAACRQACAdAVAKQAIADANAAMAvoAAAQAOAAAJgDQAVgJAAgdIAAiSIAUAAIAAbfg");
	this.shape_10.setTransform(-255.7,146.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#E8EBEC","#9AA0A4"],[0,1],-3.1,-114,3,-105.9).s().p("A30BdQgNAAgIgDQgVgKgCgdIAAiPIAXAAIAACPQABAVAUAAMAvoAAAQAWAAABgUIAAiQIAVAAIAACQQAAAdgVAJQgJADgOAAg");
	this.shape_11.setTransform(-255.9,68.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("A0IAFIAAgJMAoRAAAIAAAJg");
	this.shape_12.setTransform(-256.4,59.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["#F3F4F5","#ACB5B9"],[0,1],-2.9,-7.6,0,-2.9,-7.6,11).s().p("AgLAlQgQgCgMgIQgNgHgJgNQgPgUAAgYIAnAAIARAFIgBAAQAMAEgCANIgGAUQgBAFAEABIAKACQAEABAAgEIAFgUQAFgMAMABIAYAGQAEABABgEIADgJQABgFgEAAIgSgFIAsAAIgBANQgDAQgHALQgIAMgOAJQgUAOgYAAIgLgBg");
	this.shape_13.setTransform(-115.4,62.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#DFE2E4","#BFC6C9"],[0,1],-5.3,-13,5.4,3.4).s().p("AgPAwQgogHgYghQgUgaABgeIAWAAQAAAYAPAWQAJALANAHQAMAIAQACQAdAGAagTQAOgJAIgKQAHgNADgQIABgNIAWAAQAAAJgBAIQgHAmgjAYQgaASgdAAQgHAAgJgBg");
	this.shape_14.setTransform(-115.4,63.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#9AA0A4","#F3F4F5"],[0,1],4.7,4,-2.4,-9.7).s().p("AgQAyQgrgHgYgkQgVgZABghIAFAAQgBAfAUAaQAXAgApAHQAlAHAigYQAjgYAGglQACgJAAgJIAFAAQAAAJgBAJQgIAngkAZQgaAVggAAQgHAAgKgCg");
	this.shape_15.setTransform(-115.4,64);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C0C7CB").s().p("A30BSQgUABgBgVIAAiPIAdAAQAEAVAPAUQAYAkArAGQArAGAigYQAkgZAHgoMAoyAAAQAAAgAUAbQAZAjArAGQArAIAhgbQAkgXAIgpQABgJAAgIIAmAAIAACPQgBAUgWAAgA0NhBMAoQAAAIAAgLMgoQAAAg");
	this.shape_16.setTransform(-255.9,67.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-414.3,58.3,317.3,176.7);


(lib.APUPanel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// quage
	this.instance = new lib.APU_apuegtgauge("synched",0);
	this.instance.setTransform(-323.7,171.6,1.099,1.09,0,0,0,48.6,48.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// buttons & switches
	this.instance_1 = new lib.APU_apuoverspeed("synched",0);
	this.instance_1.setTransform(-169.8,94.5,1.099,1.09,0,0,0,24.9,13.1);

	this.instance_2 = new lib.APU_apufault("synched",0);
	this.instance_2.setTransform(-228.4,94.5,1.099,1.09,0,0,0,24.9,13.1);

	this.instance_3 = new lib.APU_apulowoilpressure("synched",0);
	this.instance_3.setTransform(-286.7,94.5,1.099,1.09,0,0,0,24.9,13.1);

	this.instance_4 = new lib.APU_apumaint("synched",0);
	this.instance_4.setTransform(-345.3,94.5,1.099,1.09,0,0,0,24.9,13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAA5QgRAAgKgLQgKgNAAgXIAAg9QABgFAGAAQADgBACACQABAAAAAAQABABAAAAQAAABAAAAQABABAAABIAAA5QAAARADAIQAHANAOgBQAOgCAFgLQADgHAAgRIAAg5QAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAIAFgBQAHAAAAAFIAAA9QAAAvglAAg");
	this.shape.setTransform(-249.2,68.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaA5QgHgBAAgGIAAhqIAgAAQAPAAAIAEQAMAHAAATQAAAIgDAGQgCAIgIAEQgHACgMAAIgUAAIAAAwQAAADgCACQgBACgDAAIgCAAgAgSgLIASAAQAKAAAFgFQAEgCAAgIQABgPgSgBIgUAAg");
	this.shape_1.setTransform(-257.9,68.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAaA0IgEgMIgrAAIgFAMQgBAGgJgBIgFgCQgCgCABgEIAmhkQABgFAEAAQAGAAACAFIAiBmQAAAGgJAAIgBAAQgFAAgCgFgAgQAZIAAgBIAiAAIgRg1IgRA1IAAAAg");
	this.shape_2.setTransform(-266.7,68.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6C7B8A").s().p("AiIBGQgQAAAAgQIAAhsQAAgQAQAAIERAAQAQAAAAAQIAABsQAAAQgQAAg");
	this.shape_3.setTransform(-257.9,68.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance_5 = new lib.APU_base("synched",0);
	this.instance_5.setTransform(25.3,-59,1.099,1.09);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// fill
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#9AA0A4","#F3F4F5"],[0,1],4.7,3.1,-2.4,-10.6).s().p("AgQAqQgrgIgYgiQgPgUgEgWIAFAAQADAVAPATQAXAfApAIQAlAGAigYQAigWAHgnIAFAAQgHApgkAXQgbAVggAAIgQgBg");
	this.shape_4.setTransform(-397.3,63.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#DFE2E4","#BFC6C9"],[0,1],-5.3,-13.9,5.4,2.5).s().p("AgPAnQgpgHgXggQgOgTgEgUIAXAAQADAOAJAOQAKALAMAHQANAIAQACQAdAFAagSQAOgHAHgMQAHgLADgNIAXAAQgHAmgjAWQgaATgeAAIgPgBg");
	this.shape_5.setTransform(-397.3,62.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#F3F4F5","#ACB5B9"],[0,1],-3,-8.4,0,-3,-8.4,11).s().p("AgMAdQgPgCgNgIQgMgIgKgLQgJgNgDgPIA/AAIAAAEIgGAXQgBADAEABIAJACQAEAAABgDIAFgVQADgGAFgDIAQAAIARAFQADAAACgEIABgBIAXAAQgDANgHALQgIALgOAIQgTAPgYAAIgMgBgAAdgcgAAVgdIABAAIAHABg");
	this.shape_6.setTransform(-397.3,61.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#F3F4F5","#ACB5B9"],[0,1],0.4,-1.9,0,0.4,-1.9,7.7).s().p("AgVARIgJgCQgFgBABgFIAGgVIABgEIAEAAIgBAFIgGAVQgBAAAAAAQAAABAAAAQAAAAABAAQAAAAABAAIAIADIABgBIAHgVIAAAAQACgFACgDIAHAAQgFADgDAGIgGAVQgBADgDAAIgBAAgAAdgLIgRgFIAOAAIAEABIABAAIAAgBIAEAAIAAABQgCAEgDAAIgBAAg");
	this.shape_7.setTransform(-395.7,60.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#79888E").s().p("AVhAWIgBgBIAHgVQABgQgOgGIgEgBIAwAAIAEADIAAAAIAXAFIABABIgCAIIAAABIgCABIgXgGIgBAAQgQgBgFALIAAAAIgGAYIgBAAgA2gAEQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIAGgVIABgFIAOAAQgCADgCAEIAAABIgHAVIgBABg");
	this.shape_8.setTransform(-254.6,61.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#F3F4F5","#ACB5B9"],[0,1],1.3,-1,0,1.3,-1,7.7).s().p("AgNAaIgJgDQgEgBABgEIAGgVQABgMgLgFIAAAAIgQgFIANAAIAEABQAOAGgBAQIgHAVIABABIAJACIABAAIAGgWIAAAAQAFgNAOABIABAAIAXAGIACAAIAAgBIACgJIgBAAIgXgGIAAAAIgEgDIALAAIARAFQAEABAAAEIgDAJQgCAEgEAAIgXgGQgNgBgCAJIgGAWQgBAEgEAAIgBAAg");
	this.shape_9.setTransform(-114.6,61.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#657381").s().p("A4xNwIAA7fIAPAAIAACRQACAdAVAKQAIADANAAMAvoAAAQAOAAAJgDQAVgJAAgdIAAiSIAUAAIAAbfg");
	this.shape_10.setTransform(-255.7,146.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#E8EBEC","#9AA0A4"],[0,1],-3.1,-114,3,-105.9).s().p("A30BdQgNAAgIgDQgVgKgCgdIAAiPIAXAAIAACPQABAVAUAAMAvoAAAQAWAAABgUIAAiQIAVAAIAACQQAAAdgVAJQgJADgOAAg");
	this.shape_11.setTransform(-255.9,68.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("A0IAFIAAgJMAoRAAAIAAAJg");
	this.shape_12.setTransform(-256.4,59.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["#F3F4F5","#ACB5B9"],[0,1],-2.9,-7.6,0,-2.9,-7.6,11).s().p("AgLAlQgQgCgMgIQgNgHgJgNQgPgUAAgYIAnAAIARAFIgBAAQAMAEgCANIgGAUQgBAFAEABIAKACQAEABAAgEIAFgUQAFgMAMABIAYAGQAEABABgEIADgJQABgFgEAAIgSgFIAsAAIgBANQgDAQgHALQgIAMgOAJQgUAOgYAAIgLgBg");
	this.shape_13.setTransform(-115.4,62.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#DFE2E4","#BFC6C9"],[0,1],-5.3,-13,5.4,3.4).s().p("AgPAwQgogHgYghQgUgaABgeIAWAAQAAAYAPAWQAJALANAHQAMAIAQACQAdAGAagTQAOgJAIgKQAHgNADgQIABgNIAWAAQAAAJgBAIQgHAmgjAYQgaASgdAAQgHAAgJgBg");
	this.shape_14.setTransform(-115.4,63.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#9AA0A4","#F3F4F5"],[0,1],4.7,4,-2.4,-9.7).s().p("AgQAyQgrgHgYgkQgVgZABghIAFAAQgBAfAUAaQAXAgApAHQAlAHAigYQAjgYAGglQACgJAAgJIAFAAQAAAJgBAJQgIAngkAZQgaAVggAAQgHAAgKgCg");
	this.shape_15.setTransform(-115.4,64);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C0C7CB").s().p("A30BSQgUABgBgVIAAiPIAdAAQAEAVAPAUQAYAkArAGQArAGAigYQAkgZAHgoMAoyAAAQAAAgAUAbQAZAjArAGQArAIAhgbQAkgXAIgpQABgJAAgIIAmAAIAACPQgBAUgWAAgA0NhBMAoQAAAIAAgLMgoQAAAg");
	this.shape_16.setTransform(-255.9,67.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-414.3,58.3,317.3,176.7);


(lib.Symbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.GROUNDPWRBUSSWITCHINGPanelcopy("synched",0);
	this.instance.setTransform(7.9,-47,1,1,0,0,0,-255.6,-28);

	this.instance_1 = new lib.APUPanelcopy("synched",0);
	this.instance_1.setTransform(-0.1,203.3,1,1,0,0,0,-255.7,188.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-158.8,-249.5,317.6,499.2);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.GROUNDPWRBUSSWITCHINGPanel("synched",0);
	this.instance.setTransform(7.9,-47,1,1,0,0,0,-255.6,-28);

	this.instance_1 = new lib.APUPanel("synched",0);
	this.instance_1.setTransform(-0.1,203.3,1,1,0,0,0,-255.7,188.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-158.8,-249.5,317.6,499.2);


// stage content:
(lib.dif04p03 = function(mode,startPosition,loop) {
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
	this.frame_121 = function() {
		this.stop();
		parent.pageControllerAPI.completeVision();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(121).call(this.frame_121).wait(1));

	// prot
	this.prot = new lib.prot();
	this.prot.setTransform(500,275,1,1,0,0,0,500,275);

	this.timeline.addTween(cjs.Tween.get(this.prot).wait(122));

	// hl3
	this.instance = new lib.hl2("synched",0);
	this.instance.setTransform(191.5,384.1,1,1,0,0,0,30.3,16.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(83).to({_off:false},0).to({alpha:1},5).wait(28).to({startPosition:0},0).to({alpha:0},5).wait(1));

	// hl
	this.instance_1 = new lib.hl("synched",0);
	this.instance_1.setTransform(213.3,460.9,1,1,0,0,0,59.1,58.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(27).to({_off:false},0).to({alpha:1},5).wait(51).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(33));

	// Panel
	this.instance_2 = new lib.textboxLsidecopy2("synched",0);
	this.instance_2.setTransform(674.2,20.3);

	this.instance_3 = new lib.textboxLside("synched",0);
	this.instance_3.setTransform(234.5,20.3);

	this.instance_4 = new lib.Symbol("synched",0);
	this.instance_4.setTransform(782.7,291.3,1,1,0,0,0,61.2,0);

	this.instance_5 = new lib.Symbol1("synched",0);
	this.instance_5.setTransform(343.1,291.3,1,1,0,0,0,61.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(122));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(500,275,1000,550);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;