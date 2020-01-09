includeJsArray(
	[
		{ url:"jquery.min.js", check:"jQuery" },
		{ url:"utility.js", check:"loopUntill" },
	] ,

	function(){
		window.runExchangePage = function(){
			messageLog("当前位于币币交易页面");
            includeCss("inject/exchange.css");
		}
});

