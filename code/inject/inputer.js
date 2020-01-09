includeJs("utility.js", window.loopUntill);
includeJs("then.js", window.Thenjs);
includeJs("jquery.min.js", window.Thenjs);

function mouseClick(){
	return Thenjs(function(done){
		inputer.mouseDown(); 
		done(); 
	})
	.then(function(done){
		waitFor(200).then(done);
	})
	.then(function(done){
		inputer.mouseUp();
		done(); 
	});
}

function inputAsciiChar(ch){
	return Thenjs(function(done){
		inputer.asciiKeyDown(ch);
		done();
	})
	.then(function(done){
		waitFor(20).then(done);
	})
	.then(function(done){
		inputer.asciiKeyUp(ch);
		done();
	});
}


function inputAsciiText(text){
	var charCodeArray = [];
	for (var i = 0; i < text.length; ++i) {
		charCodeArray.push(text.charCodeAt(i));
	}
	return Thenjs.eachSeries(charCodeArray, function(done, value){
		inputAsciiChar(value).then(done);
	});
}

function inputText(text){
	var charCodeArray = [];
	for (var i = 0; i < text.length; ++i) {
		charCodeArray.push(text.charCodeAt(i));
	}
	return Thenjs.eachSeries(charCodeArray, function(done, value){
		inputer.inputChar(value); 
		done();
	}, true);
}

function elementClick(element){
	return Thenjs(function(done){
		var offset = element.offset();
		inputer.mouseTo(offset.left + 10, offset.top + 10);
		done();
	})
	.then(function(done){
		mouseClick().then(done);
	});
}

function elementInput(element, text){
	return Thenjs(function(done){
		elementClick(element).then(done);
	})
	.then(function(done){
		waitFor(500).then(done);
	})
	.then(function(done){
		//inputAsciiText(text).then(function(){done();});
        inputText(text).then(function(){done();});
	});
}