
function includeJSInTab(tabId, file, code, callback){
    chrome.tabs.executeScript(tabId, {
        code: code,
        file: file,
        runAt: "document_start"
    }, callback);
}

function includeCSSInTab(tabId, file, code, callback){
    chrome.tabs.insertCSS(tabId, {
        code: code,
        file: file,
        runAt: "document_start"
    }, callback);
}

chrome.runtime.onMessage.addListener(function(request, sender, responseCallback){
    if (request.type === "includejs"){
        includeJSInTab(request.tabId, request.file, request.code, function(){
            responseCallback("success");
        });
        return true;
    }

    if (request.type === "includecss"){
        includeCSSInTab(request.tabId, request.file, request.code, function(){
            responseCallback("success");
        });
        return true;
    }
});