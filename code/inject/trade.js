var cookieAlerted = false;
function marketPageStart(){
	if (!cookieAlerted){
		cookieAlerted = true;
		alert(document.cookie);
	}
}