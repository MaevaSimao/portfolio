
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

            $(".mobile-text").css({"cssText": "display: block! important"});
       
            homepage.animationMobile();    
           
        }
    },

    intervalMobile: '',

     /**
     * cursor animation < 992px
     */
    animationMobile:function() {
        
       
        // animation for button menu 
        startAnimation();
        function startAnimation(){
        homepage.cursorMobile.animate({top: '2em'}, "slow"); 
        homepage.cursorMobile.animate({top: '1.5em'}, "slow");
        homepage.cursorMobile.animate({top: '2em'}, "slow", startAnimation);
        }

        // problème de sélection dans le click 
        // et d'animation pour acceuil

            $(".button-header").on("click", function(){ 

                homepage.cursorMobile.remove();
                $('.mobile-text-a').css({"display":"block"}); 
                $('.mobile-text-p').text('Cliquez ici pour accéder à la page d\'acceuil');
                homepage.cursorMobile.css({"display":"block", "position":"absolute", "top":"3em"});
                $('.cursor-acceuil').append(homepage.cursorMobile);

                // animation for button link navbar
                startAnimationLink();
                function startAnimationLink(){
                homepage.cursorMobile.animate({top: '3em'}, "slow"); 
                homepage.cursorMobile.animate({top: '2em'}, "slow");
                homepage.cursorMobile.animate({top: '3em'}, "slow", startAnimationLink);
                }

            }); 

            $(".mobile-text-a").on("click", function(evt){
                evt.preventDefault();  
                 
                homepage.animationMobile(); 
            }); 
       
        
       
    }, 

     

 
  
       

  

   
    
    
    

}

$(homepage.init);


