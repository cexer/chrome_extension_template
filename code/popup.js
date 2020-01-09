function nextratio(zoom, direction) {
	zoom = parseInt(zoom);
	switch (zoom) {
		case 50:
			return (direction == -1) ? 100 : 75;
		case 75:
			return (direction == -1) ? 50 : 100;
		case 100:
			return (direction == -1) ? 75 : 125;
		case 125:
			return (direction == -1) ? 100 : 150;
		case 150:
			return (direction == -1) ? 125 : 200;
		case 200:
			return (direction == -1) ? 150 : 400;
		case 400:
			return (direction == -1) ? 200 : 100;
		default:
			return 100;
	}
}

jQuery(document).ready(function(){
	var zoom = chrome.extension.getBackgroundPage().getZoomFactor();
	if (!zoom)
		zoom = "100";
	jQuery("#range").val(zoom);
	jQuery("#number").val(zoom);

	jQuery("#range").change(function(){
		var zoom = this.value;
		jQuery("#number").val(zoom);
		chrome.extension.getBackgroundPage().applyZoomFactor(zoom);
	});

	jQuery("#number").change(function(){
		var zoom = this.value;
		jQuery("#range").val(zoom);
		chrome.extension.getBackgroundPage().applyZoomFactor(zoom);
	});

	jQuery("#reset").click(function(){
		jQuery("#range").val(100);
		jQuery("#number").val(100);
		chrome.extension.getBackgroundPage().applyZoomFactor(100);
	});

	jQuery("#minus").click(function(){
		var zoom = nextratio(chrome.extension.getBackgroundPage().getZoomFactor(), -1) + "";
		jQuery("#range").val(zoom);
		jQuery("#number").val(zoom);
		chrome.extension.getBackgroundPage().applyZoomFactor(zoom);
	});

	jQuery("#plus").click(function(){
		var zoom = nextratio(chrome.extension.getBackgroundPage().getZoomFactor(), +1) + "";
		jQuery("#range").val(zoom);
		jQuery("#number").val(zoom);
		chrome.extension.getBackgroundPage().applyZoomFactor(zoom);
	});
});
