
import '../css/homepage.scss';


var homepage = {


   
 

    // property for matchMedia min-width:992px
    breakLarge: window.matchMedia("(min-width: 992px)"),


    /**
     * init homepage
     */
    init:function() { 
        console.log('init homepage');

       

        $(".button-custum").on("click", function(){
           
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
        else {
            console.log('match-small'); 
            
            homepage.cursorAnimation()
          
          
        }


        console.log('travel')
    },

    cursorAnimation:function() {
        
        let cursor = $(".arrow").css({"display":"block", "position":"absolute"})
        $('#button-animation').append(cursor); 

        cursor.fadeOut(100).delay(600).fadeIn(800); 

          $(document).ready(function(){ 
            setInterval( homepage.cursorAnimation() ,2200); 
        });
    }, 

   
    
    
    

}

$(homepage.init);


