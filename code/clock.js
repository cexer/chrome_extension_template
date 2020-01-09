console.log("clock begin");

(function(factory) {
	if (typeof define === "function" && define.amd) {
		// AMD. Register as an anonymous module.
		define(factory);
	} else {
		// Browser globals
		factory(window);
	}

} (function(namespace) {

	function Clock() {
	    if (!(this instanceof Clock)) {
	        return new Clock();
	    }
		this.startTime = (new Date()).getTime();
		this.startted = true;
	}

	Clock.prototype.elapsed = function() {
		if (!this.startted)
			return 0;
		else
			return (new Date()).getTime() - this.startTime;
	};
	
	Clock.prototype.restart = function() {
		this.startted = true;
		this.startTime = ms;
	};

	Clock.prototype.stop = function() {
		this.startted = false;
	};

	namespace.Clock = Clock;
}));
