includeJs("utility.js", window.loopUntill);
includeJs("then.js", window.Thenjs);
includeJs("inputer.js", window.elementInput);

function loginCollectInfo() {
	function collectInfoImpl() {
		var usernameEdit = $("input[name='login_name']");
	    if (!usernameEdit.length){
		    errorLog("not found username input");
	        return null;
	    }
	    var passwordEdit = $("input[name='password']");
	    if (!passwordEdit.length){
		    errorLog("not found password input");
	        return null;
	    }

	    var subbmitButton = $("#btn");
	    if (!subbmitButton.length){
		    errorLog("not found submit input");
		    return null;
	    }
	    return {
		    usernameEdit: usernameEdit,
		    passwordEdit: passwordEdit,
		    subbmitButton: subbmitButton
	    };
	}

	return Thenjs(function(done){
		loopUntill(1000, function(){
			var info = collectInfoImpl();
			if (info) {
				done(null, info);
				return true;
			}		
		});		
	});
};

function loginSendRequest(info){
	return Thenjs(function(done){
		messageLog("输入用户名");
		elementInput(info.usernameEdit, "18981997477").then(done);
	})
	.then(function(done){ waitFor(200).then(done); })
	.then(function(done){
		messageLog("输入密码");
		elementInput(info.passwordEdit, "chengdu123").then(done); 
	})
	.then(function(done){ waitFor(200).then(done); })
	.then(function(done){
		messageLog("点击提交");
		elementClick(info.subbmitButton).then(done);
	});
};

function runLoginPage(){
	messageLog("当前位于登录页，执行登录……");

	return loginCollectInfo().then(function(done, info){
		loginSendRequest(info).then(done);
	});
};

