
import '../css/homepage.scss';

var homepage = {

    // property for matchMedia min-width:992px
    breakLarge: window.matchMedia("(min-width: 992px)"),

    /**
     * init homepage
     */
    init:function() { 
        console.log('init homepage');

        $(".button-custum").click(function(){
            homepage.travel(); 
        }); 
        
    },

    /**
     * click() btn "parcourir les élements"
     */
    travel:function() {

        // >= 992px
        if (homepage.breakLarge.matches) { 
            console.log('match large'); 
        } 

        // < 992 px
        else {
            homepage.flashBreakSmall()
        }

        console.log('travel')
    },

    flashBreakSmall:function() {
     $("#button-animation").addClass('.animation-cursor'); 
     console.log("ok")
    }

}

$(homepage.init);


