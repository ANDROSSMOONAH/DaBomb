// view
zog("hi from view.js");

var app = function(app) {
	
	app.makeVerticalPages = function(preload, layoutManager, gridManager, guideManager) {
		
		zog("pages");
		
		p = {};
		
		p.main = new createjs.Container();		
		p.main.name = "main";	
		p.main.setBounds(0,0,stageW,stageH);
		
		var logo = new zim.Rectangle(400, 100, "orange");	
		logo.setBounds(0,0,400,100);
		p.main.addChild(logo);

		var text = new createjs.Text("TICKLE ME!!!", "36px verdana", "black");
		logo.addChild(text);
		
		var content = p.main.content = new createjs.Container();
		content.setBounds(0,0,600,600);
		p.main.addChild(content);

		var image = new createjs.Bitmap(preload.getResult("bomb1"));
		image.alpha = 1;
		content.addChild(image);
		zim.centerReg(image);
		image.cursor = "pointer";
		image.x = content.getBounds().width/2
		image.y = content.getBounds().height/2
		zim.scaleTo(image, content, 100); 

		var image2 = new createjs.Bitmap(preload.getResult("bomb2"));
		image2.alpha = 0;
		content.addChild(image2);
		zim.centerReg(image2);
		image2.x = content.getBounds().width/2
		image2.y = content.getBounds().height/2
		zim.scaleTo(image2, content, 100);

		var image3 = new createjs.Bitmap(preload.getResult("bomb3"));
		image3.alpha = 0;
		content.addChild(image3);
		zim.centerReg(image3);
		image3.x = content.getBounds().width/2
		image3.y = content.getBounds().height/2
		zim.scaleTo(image3, content, 100); 

		var image4 = new createjs.Bitmap(preload.getResult("bomb4"));
		image4.alpha = 0;
		content.addChild(image4);
		zim.centerReg(image4);
		image4.x = content.getBounds().width/2
		image4.y = content.getBounds().height/2
		zim.scaleTo(image4, content, 100); 

		image.on("click", function() {

			zim.animate(image, {alpha:0}, 1500);
			zim.animate(image2, {alpha:1}, 1500);
			zim.animate(image3, {alpha:1}, 1500, null, null, null, 1500);
			zim.animate(image4, {alpha:1}, 1500, null, null, null, 3000);

		});
		
		var related = new zim.Rectangle(400, 100, "orange");	
		related.setBounds(0,0,400,100);
		p.main.addChild(related);

		/*gridManager.add( new zim.Grid(content) );
		guideManager.add( new zim.Guide(content) );
		guideManager.add( new zim.Guide(content, false) );
		
		zog(layoutManager);
		*/

		var mainParts = [ 
	{object:logo, marginTop:5, maxWidth:80, minHeight:10, align:"center", valign:"top"},
	{object:content, marginTop:5, maxWidth:80, backgroundColor:"orange"}, 
	{object:related, marginTop:5, maxWidth:80, minHeight:10, backgroundColor:"black"} ];
		
		var mainLayout = new zim.Layout(p.main, mainParts, 5, "black", true, new createjs.Shape(), stage);
		
		layoutManager.add(mainLayout);	
				
		p.info = new createjs.Container();		
		p.info.name = "info";		
		var infoBacking = new zim.Rectangle(stageW, stageH, "orange");	
		infoBacking.setBounds(0,0,stageW,stageH);
		p.info.addChild(infoBacking);
		
		makeTitle("Da Bomb! This small, mobile application makes use of the Zim.js library.");
		function makeTitle(t) {
			var title = new createjs.Text(t, "25px Verdana", "#000000");		
			title.textBaseline = "alphabetic";
			title.alpha = .9;
			title.x = 50; 
			title.y = 300;	
			p.info.addChild(title);
			stage.update();
		}

		return p;
	}	
		
	return app;
	
}(app || {});