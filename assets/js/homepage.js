
import '../css/homepage.scss';
import { red } from 'ansi-colors';
import { AST_DefaultAssign } from 'terser';

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
        
        let $styleBlock = {
            width: '100%', 
            'text-align': 'end', 
            'padding-right': 0, 
            
        }

        let $styleP = {
            'font-size' : '0.6em', 
        }

        let $blockDescription = $("<div></div>").css($styleBlock); 

        let $description = $("<p>Cliquez ici pour afficher le menu</p>").css($styleP);

        let $linkStop = $("<button> >> passez </button>"); 

   

        $('#button-animation').after( $blockDescription );

        $blockDescription.append($description); 

        $description.after($linkStop); 

        homepage.flashBreakSmall(); 
         
            
        }

        console.log('travel')
    },

    
    /**
     * click() btn "parcourir les élements" (< 992px ) 
     */
    flashBreakSmall:function() {
     

        $( '#button-animation' ).fadeOut(700).delay(400).fadeIn(200); 

        setInterval(this.flashBreakSmall, 1000)

        
     }
    

   


       

   
    
   
    

}

$(homepage.init);


