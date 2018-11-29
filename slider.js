/*!
 * @plugin      : Easy Slider
 * @version     : v1.0.0
 * @license     : GPLv3 for Open Source Use
 * @author      : Anfath Hifans
 * @copyright   : © 2018
 * @url         : github.com/anfathhifans
 */

(function ( $ ){
    
    $.fn.slider = function(){
        
        var parent = this;
        this.find('a.navArrow').click(function(){
            var allBlock = parent.find('div.slide');            
            switch($(this).data('arrow')){
                case 'prev' :
                    var getIndex = allBlock.index(allBlock.filter('.active'));                    
                    if(getIndex > 0){
                        var prevIndex = getIndex - 1;
                        allBlock.filter('.active').removeClass('active');
                        $(allBlock.eq(prevIndex)).addClass('active');
                    }
                    break;
                case 'next' :     
                    var getIndex = allBlock.index(allBlock.filter('.active'));
                    if( getIndex < allBlock.length - 1){
                        var nextIndex = getIndex + 1;
                        allBlock.filter('.active').removeClass('active');
                        $(allBlock.eq(nextIndex)).addClass('active');
                    }
                    break;
            }
            return false;
        });
        return this;
    };
    
}( jQuery ));
