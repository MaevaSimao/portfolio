
import '../css/homepage.scss';


var homepage = {

    // property for matchMedia min-width:227px
    breakSmall: window.matchMedia("(min-width: 227px)"),

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

        // >= 227px 
        if (homepage.breakSmall.matches) { 
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
            console.log('match small'); 
        } 


        // >= 992px 
        if (homepage.breakLarge.matches) { 
            console.log('match large'); 
        } 

        // < 227px 
        else {

            homepage.flashBreakVerySmall(); 
        
            console.log('match very small'); 
            
        }

        console.log('travel')
    },

    /**
     * click() btn "parcourir les élements" (< 227px ) 
     */
    flashBreakVerySmall:function() {

        
        let $styleBlock = {
            width: '50%', 
            'text-align': 'end', 
            'padding-right': 0, 
            
        }

        let $styleP = {
            'font-size' : '0.6em', 
        }

        let $blockDescription = $("<div></div>").css($styleBlock); 

        let $description = $("<p>Cliquez ici pour afficher le menu</p>").css($styleP);

        let $linkStop = $("<button> >> passez </button>"); 

        $description.after($linkStop);

        $blockDescription.append($description); 
        $( '#button-animation' ).after($blockDescription); 

    

        setInterval($blockDescription.fadeOut(700).delay(400).fadeIn(200), 1000);

       
        
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


