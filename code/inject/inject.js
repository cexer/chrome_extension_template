function isLoginPage(){
    if (!$("input[name='login_name']").length)
		return false;
    if (!$("input[name='password']").length)
		return false;
    if (!$("#btn").length)
		return false;
	return true;
}

function isHomePage(){
	return false;
}

function isExchangePage(){
    if (window.location.href.indexOf("https://www.huobi.pro/zh-cn/zec_usdt/exchange/") == 0){
        return true;
    }
    return false;
}

function runInjectJS(){
	messageLog("页面加载成功，探测当前位置……");

	var clock = Clock();
	loopUntill(1000, function(){
		if (isLoginPage()){
			includeJs("inject/login.js", "runLoginPage", function(){
                runLoginPage();
            });
			return true;
		}
		if (isExchangePage()){
			includeJs("inject/exchange.js", "runExchnagePage", function(){
                runExchangePage();
            });
			return true;			
		}
		if (clock.elapsed() >= 1000 * 15){
			includeJs("inject/unknown.js", "runUnknownPage", function(){
                runUnknownPage();
            });
			return true;
		}
		return false;
	});
}

includeJsArray(
    [
        { url: "jquery.min.js", check:"jQuery"},
        { url: "utility.js", check:"loopUntill"},
        { url: "then.js", check:"Thenjs"},
        { url: "clock.js", check: "Clock"}
    ],
    function(){
        runInjectJS();
    }
);
