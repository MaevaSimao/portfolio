
import '../css/homepage.scss';

var homepage = {

    // property for matchMedia min-width:992px
    breakLarge: window.matchMedia("(min-width: 992px)"),

    flashInterval: '', 

    /**
     * init homepage
     */
    init:function() { 
        console.log('init homepage');

        $(".button-custum").on("click", function(evt){
           
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


        homepage.flashInterval = this.flashBreakSmall(); 
         
            
        }

        console.log('travel')
    },

    
    
    flashBreakSmall:function() {
     
      
       $( '#button-animation' ).css( "background-color", "red" ).fadeOut(900).delay(300).fadeIn(800); 
       return homepage.flashInterval; 
        
      
        console.log("ok")
    },

    
    
   
    

}

$(homepage.init);


