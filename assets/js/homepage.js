
import '../css/homepage.scss';

var homepage = {

    // property for matchMedia min-width:992px
    breakLarge: window.matchMedia("(min-width: 992px)"),

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
            
        $('#button-animation').before('<p>Paragraphe précédent</p>');
        
        homepage.flashBreakSmall(); 
         
            
        }

        console.log('travel')
    },

    
    
    flashBreakSmall:function() {
     

       

        $( '#button-animation' ).fadeOut(700).delay(300).fadeIn(200); 

        setInterval(this.flashBreakSmall, 1000)

        
     }
    

   


       

   
    
   
    

}

$(homepage.init);


