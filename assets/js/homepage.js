
import '../css/homepage.scss';


var homepage = {


   
 

    // property for matchMedia min-width:992px
    breakLarge: window.matchMedia("(min-width: 992px)"),

    // property for cursor pointer
    cursorMobile: $(".cursorPointer"), 

    /**
     * init homepage
     */
    init:function() { 
        console.log('init homepage');
 
        // click btn tutoriel
        $(document).ready(function(){
            $(".button-custum").on("click", function(){
                homepage.travelHeader(); 
            }); 
        });
    },

    /**
     * click() btn "Tutoriel"
     */
    travelHeader:function() {

        // >= 992px 
        if (homepage.breakLarge.matches) { 
            console.log('match large'); 
        } 
        else {
            console.log('match-small'); 
            
            this.cursorMobile.css({"display":"block", "position":"absolute", "top":"1.5em"});
            $('#button-animation').append(this.cursorMobile); 

            homepage.cursorAnimationMobile();    
        }
    },

    cursorAnimationMobile:function() {
        
        this.cursorMobile.animate({top: '2em'}, "slow"); 
        this.cursorMobile.animate({top: '1.5em'}, "slow");

        $(document).ready(function(){ 
            setInterval( homepage.cursorAnimationMobile() ,2200); 
        });
    
    }, 

   
    
    
    

}

$(homepage.init);


