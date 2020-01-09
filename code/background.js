chrome.runtime.onMessage.addListener(function(request, sender, responseCallback){
    // if (request.type === "xxxx"){
    //     return true;//需要异步回调
    // }
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
	if (changeInfo.status == "loading"){
		if (config.injectable(tab)){
			includeJSInTab(tab.id, null, "window.tabId = " + tab.id, function(){
                includeJSInTab(tab.id, "inject/include.js", null, function() {
                    includeJSInTab(tab.id, "inject/inject.js");
                });
            });
		}
	}
});

chrome.tabs.onActivated.addListener(function(activeInfo){

});

chrome.tabs.onCreated.addListener(function(tab){

});