function includeJs(url, symbol, callback){
    if (window[symbol]){
        if (typeof(callback) == "function") {
            callback();
        }
    }
    else{
        chrome.runtime.sendMessage({type: "includejs", file : url}, function(response){
            if (response === undefined){
                console.log("加载 %s 失败, %s", url, chrome.runtime.lastError.message);
            }
            else {
                if (typeof(callback) == "function") {
                    console.log("加载 %s 成功", url);
                    callback();
                }
            }
        });
    }
}

function includeCss(url, symbol, callback){
    chrome.runtime.sendMessage({type: "includecss", file : url}, function(response){
        if (response === undefined){
            console.log("加载 %s 失败, %s", url, chrome.runtime.lastError.message);
        }
        else {
            if (typeof(callback) == "function") {
                console.log("加载 %s 成功", url);
                callback();
            }
        }
    });
}

function includeJsArray(jslist, callback, i){
    if (i === jslist.length) {
        callback();
        return;
    }
    if (i === undefined)
        i = 0;
    includeJs(jslist[i].url, jslist[i].check, function(){
        includeJsArray(jslist, callback, i + 1);
    });
}