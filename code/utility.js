
includeJs("sprintf.js", window.sprintf);
includeJs("then.js", window.Thenjs);

includeJsArray(
	[
		{ url: "sprintf.js", check: "sprintf"},
		{ url: "then.js", check: "Thenjs"},
	],
	function(){

		window.waitFor = function(timeout){
			return Thenjs(function(done){
				setTimeout(done, timeout);
			});
		}

		window.debugLog = function(){
			var text = sprintf.apply(null, arguments);
			console.log(text);
		}
		window.debugLn = function(){
			var text = sprintf.apply(null, arguments);
			console.log(text + "\n");
		}

		window.errorLog = function(){
			var text = sprintf.apply(null, arguments);
			console.log(text);
		}
		window.errorLn = function(){
			var text = sprintf.apply(null, arguments);
			console.log(text + "\n");
		}

		window.messageLog = function(){
			var text = sprintf.apply(null, arguments);
			console.log(text);
		}
		window.messageLn = function(){
			var text = sprintf.apply(null, arguments);
			console.log(text + "\n");
		}


		window.loopUntill = function(period, func, done, cond){
			if (!cond){
				cond = function(ret){
					return ret;
				};
			}
			var timer = setInterval(function(){
				if (cond(func())){
					clearInterval(timer);
					if (typeof(done) === "function") {
						done();
					}
				}
			}, period);
		}
	}
);
