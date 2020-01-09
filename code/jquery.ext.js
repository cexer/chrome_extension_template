
(function($) {
    $.fn.imgcomplete = function(callback) {  
        return this.each(function() {  
            var self = this,  
                $this = $(this);  
            if (!$this.is("img")) {  
                return true;  
            }  
            var img = new Image();  
            img.src = $this.attr("src");  
            if (img.complete) { // 如果图片已经存在于浏览器缓存, 直接回调  
                callback.call(self, img.width, img.height);  
            } else {  
                img.onload = function () { // 经测试IE/FF都支持(测了IE8/FF10)  
                    if (!img.complete) return;  
                    callback.call(self, img.width, img.height);  
                }  
            }  
            return true;  
        });  
    };  
})(jQuery);